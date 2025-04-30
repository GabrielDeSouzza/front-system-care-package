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
  updateTypeCarePackageSchema,
  updateTypeCarePackageSchemaType,
} from './UpdateTypeCarepackageSchema';
import {
  searchCbTypeCarePackageAction,
  searchTypeCarePackageData,
} from '@/actions/TypeCarePackage/searchTypeCbCarePackageAction';
import { updateTypeCarePackageAction } from '@/actions/TypeCarePackage/updateTypeCarePackagetAction';
import { CarePackageItemArr } from '@/components/advancedComponents/CarePackageItemArr';

export default function UpdatearePackageForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [typeCarePackageName, setTypeCarePackageName] =
    useState<searchTypeCarePackageData | null>(null);
  const [resultQuey, setResultQuery] = useState<
    searchTypeCarePackageData[] | []
  >([]);
  const form = useForm<updateTypeCarePackageSchemaType>({
    resolver: zodResolver(updateTypeCarePackageSchema),
    defaultValues: { newName: '', oldName: '' },
    mode: 'onBlur',
  });
  const watchedOldName = form.watch('oldName');

  const [debouncedOldName] = useDebounce(watchedOldName, 500);

  useEffect(() => {
    const fetchData = async () => {
      console.log('debouncedOldName', debouncedOldName);
      const result = await searchCbTypeCarePackageAction(debouncedOldName);
      setResultQuery(result ?? []);
      const selectedType = result?.find(
        (item) => item.name === debouncedOldName,
      );
      if (selectedType) {
        setTypeCarePackageName(selectedType);
        form.setValue(
          'itensName',
          selectedType.itensName.map((item) => ({
            itemName: item,
          })),
        );
      } else {
        setTypeCarePackageName(null);
        form.setValue('itensName', []);
      }
    };
    fetchData();
  }, [debouncedOldName]);
  const onSubmit = async (data: updateTypeCarePackageSchemaType) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    data.deletedItensName = typeCarePackageName?.itensName.filter(
      (item) => !data.itensName?.some((newItem) => newItem.itemName === item),
    );
    console.log('data.deletedItensName', data.deletedItensName);
    const result = await updateTypeCarePackageAction({
      deletedItensName: data.deletedItensName ?? null,
      newName: data.newName,
      oldName: data.oldName,
      itensName: data.itensName
        ? data.itensName.map((item) => item.itemName)
        : null,
      id: '',
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
            control={form.control}
            name="oldName"
            label="test"
            options={resultQuey.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
          />
          <InputControlled
            control={form.control}
            label=""
            name="newName"
            placeholder="Digite o nome do "
          />
          <div className="flex flex-row w-full flex-wrap gap-2">
            <CarePackageItemArr name="itensName" />
          </div>
          <ButtonForm text="Atualizar" type="submit" />
        </form>
      </FormProvider>
    </>
  );
}
