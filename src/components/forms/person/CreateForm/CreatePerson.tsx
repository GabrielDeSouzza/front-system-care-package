'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  createPersonSchema,
  createPersonSchemaType,
} from './CreatePersonSchema';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import { createPersonAction } from '@/actions/person/createPersonAction';
import { useEffect, useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';
import { CheckboxControlled } from '@/components/baseComponents/CheckBox/CheckBoxControlled';
import { InputCpfControlled } from '@/components/baseComponents/InputCpfControlled/InputCpfControlled';
import { ChildrenArr } from '@/components/advancedComponents/childrenArr/ChildrenArr';

export default function CreatePersonForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<createPersonSchemaType>({
    resolver: zodResolver(createPersonSchema),
    defaultValues: {
      name: '',
      document: '',
      lastName: '',
      hasChildren: false,
      children: [],
      birthdayDate: new Date(),
      gender: 'Masculino',
    },
  });
  const onSubmit = async (data: createPersonSchemaType) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    const result = await createPersonAction({
      birthdayDate: data.birthdayDate,
      children: data.children ?? null,
      document: data.document,
      gender: data.gender,
      hasChild: data.hasChildren,
      lastName: data.lastName,
      name: data.name,
    });

    if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
      return;
    }
    if (result.data) {
      setSuccessMessage('Item criado com sucesso');
      form.reset();
    }
  };
  const hasChild = form.watch('hasChildren');

  useEffect(() => {
    if (!hasChild) {
      form.setValue('children', []);
    } else {
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
          <div className="flex flex-row gap-1 w-full flex-wrap">
            <div>
              <InputCpfControlled
                label="Documento"
                name="document"
                placeholder="Digite o documento"
              />
            </div>
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
          </div>
          {hasChild && (
            <div className="self-">
              <ChildrenArr name="children" />
            </div>
          )}

          <div className="m-0.5">
            <ButtonForm text="Criar" type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
