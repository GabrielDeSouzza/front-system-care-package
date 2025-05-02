'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  updateCarepackageItemSchema,
  updateCarepackageItemSchemaType,
} from './UpdateCarepackageItemSchema';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import { updateCarePackageItemAction } from '@/actions/carePackageItem/updateCarePackagetItemAction';
import { useEffect, useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';
import ComboBox from '@/components/baseComponents/ComboBox/ComboBox';
import {
  searchCarePackageItemData,
  searchCbCarePackageItensAction,
} from '@/actions/carePackageItem/searchCbCarePackageItensAction';
import { useDebounce } from 'use-debounce';

export default function UpdatearePackageItemForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [resultQuey, setResultQuery] = useState<
    searchCarePackageItemData[] | []
  >([]);
  const form = useForm<updateCarepackageItemSchemaType>({
    resolver: zodResolver(updateCarepackageItemSchema),
    defaultValues: { newName: '', oldName: '' },
    mode: 'onBlur',
  });
  const watchedOldName = form.watch('oldName');

  const [debouncedOldName] = useDebounce(watchedOldName, 500);

  useEffect(() => {
    const fetchData = async () => {
      console.log('debouncedOldName', debouncedOldName);
      const result = await searchCbCarePackageItensAction(debouncedOldName);
      setResultQuery(result);
    };
    fetchData();
  }, [debouncedOldName]);
  const onSubmit = async (data: updateCarepackageItemSchemaType) => {
    console.log(data);
    setErrorMessage(null);
    setSuccessMessage(null);
    const result = await updateCarePackageItemAction(data);
    if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
      return;
    }
    if (result.data) {
      setSuccessMessage('Item criado com sucesso');
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
            name="oldName"
            label="test"
            options={resultQuey.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
          />
          <InputControlled
            label="Item"
            name="newName"
            placeholder="Digite o nome do Item"
          />
          <ButtonForm text="Atualizar" type="submit" />
        </form>
      </FormProvider>
    </>
  );
}
