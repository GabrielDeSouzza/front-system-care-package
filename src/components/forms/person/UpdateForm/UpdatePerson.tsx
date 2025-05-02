'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';

import { useEffect, useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';
import ComboBox from '@/components/baseComponents/ComboBox/ComboBox';
import { useDebounce } from 'use-debounce';
import {
  updatePersonSchema,
  updatePersonSchemaType,
} from './UpdatePersonSchema';

import {
  searchCbPersonAction,
  searchPersonData,
} from '@/actions/person/searchCbPersonsAction';
import { updatePersonAction } from '@/actions/person/updatePersonAction';
import { ChildrenArr } from '@/components/advancedComponents/childrenArr/ChildrenArr';
import { CheckboxControlled } from '@/components/baseComponents/CheckBox/CheckBoxControlled';
import { InputCpfControlled } from '@/components/baseComponents/InputCpfControlled/InputCpfControlled';

export default function UpdatearePersonForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [person, setPerson] = useState<searchPersonData | null>(null);
  const [resultQuey, setResultQuery] = useState<searchPersonData[] | []>([]);
  const form = useForm<updatePersonSchemaType>({
    resolver: zodResolver(updatePersonSchema),
    defaultValues: {
      birthdayDate: new Date(),
      children: [
        {
          birthdayDate: new Date(),
          gender: 'Masculino',
          lastName: '',
          name: '',
        },
      ],
      deletedChildrenIds: [],
      gender: 'Masculino',
      hasChildren: false,
      name: '',
      oldDocument: '',
      newDocument: '',
      lastName: '',
    },
    mode: 'onBlur',
  });
  const watchedOldDocument = form.watch('oldDocument');

  const [debouncedOldDocument] = useDebounce(watchedOldDocument, 500);

  useEffect(() => {
    const fetchData = async () => {
      const result = await searchCbPersonAction(debouncedOldDocument ?? '');
      setResultQuery(result ?? []);
      const selectedPerson = result?.find(
        (item) => item.document === debouncedOldDocument,
      );
      if (selectedPerson) {
        setPerson(selectedPerson);
        form.setValue('birthdayDate', selectedPerson.birthdayDate);
        form.setValue(
          'gender',
          selectedPerson.gender as 'Masculino' | 'Feminino' | 'Outro',
        );
        console.log('selectedPerson', selectedPerson);
        form.setValue('hasChildren', selectedPerson.hasChild);
        form.setValue('lastName', selectedPerson.lastName);
        form.setValue('name', selectedPerson.name);
        form.setValue('newDocument', selectedPerson.document);
        form.setValue(
          'birthdayDate',
          new Date(Date.parse(selectedPerson.birthdayDate))
            .toISOString()
            .split('T')[0] as unknown as Date,
        );
        form.setValue(
          'children',
          selectedPerson?.Children?.map((item) => ({
            birthdayDate: new Date(item.birthdayDate)
              .toISOString()
              .split('T')[0] as unknown as Date,
            gender: item.gender as 'Masculino' | 'Feminino' | 'Outro',
            lastName: item.lastName,
            name: item.name,
            id: item.id,
          })),
        );
      } else {
        setPerson(null);
        form.setValue('children', []);
      }
    };
    fetchData();
  }, [debouncedOldDocument]);
  const onSubmit = async (data: updatePersonSchemaType) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    const childrenDelete = person?.Children?.filter(
      (item) => !data.children?.some((newItem) => newItem.id === item.id),
    );
    data.deletedChildrenIds = childrenDelete?.map((child) => child.id);
    console.log('data.deletedItensName', data.deletedChildrenIds);
    const result = await updatePersonAction({
      birthdayDate: data.birthdayDate ?? null,
      children:
        data.children?.map((child) => ({
          ...child,
          id: child.id ?? null,
        })) ?? null,
      deletedChildrenIds: data.deletedChildrenIds ?? null,
      gender: data.gender ?? null,
      hasChild: data.hasChildren ?? null,
      lastName: data.lastName ?? null,
      name: data.name ?? null,
      newDocument: data.newDocument ?? null,
      oldDocument: data.oldDocument ?? null,
    });
    if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
      return;
    }
    if (result.data) {
      setSuccessMessage(' criado com sucesso');
      form.reset();
    }
  };

  const hasChild = form.watch('hasChildren');

  useEffect(() => {
    if (!hasChild && person) {
      form.setValue('children', []);
    } else if (hasChild && !person) {
      form.setValue('children', [
        {
          name: '',
          lastName: '',
          gender: 'Masculino',
          birthdayDate: new Date(),
        },
      ]);
    }
  }, [hasChild]);
  return (
    <>
      {errorMensage && (
        <BottomRightModal
          hasError
          message={errorMensage}
          show
          duration={4000}
        />
      )}
      {successMessage && (
        <BottomRightModal
          hasSucess
          message={successMessage}
          show
          duration={4000}
        />
      )}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ComboBox
            name="oldDocument"
            label="Documento"
            options={resultQuey.map((item) => ({
              value: item.id,
              label: item.document,
            }))}
          />
          <InputCpfControlled
            label="Novo CPF"
            name="newDocument"
            placeholder="Digite o novo documento "
          />
          <div>
            <InputControlled
              label="Nome"
              name="name"
              placeholder="Digite o 1° nome"
            />
          </div>
          <div>
            <InputControlled
              label="Sobrenome"
              name="lastName"
              placeholder="Digite o sobrenome"
            />
          </div>
          <div className="w-[10rem]">
            <InputControlled
              label="Data de nascimento"
              name="birthdayDate"
              placeholder="Digite a data de nascimento"
              type="date"
            />
          </div>
          <div>
            <CheckboxControlled label="Tem filhos?" name="hasChildren" />
          </div>

          {hasChild && (
            <div className="self-">
              <ChildrenArr name="children" />
            </div>
          )}
          <ButtonForm text="Atualizar" type="submit" />
        </form>
      </FormProvider>
    </>
  );
}
