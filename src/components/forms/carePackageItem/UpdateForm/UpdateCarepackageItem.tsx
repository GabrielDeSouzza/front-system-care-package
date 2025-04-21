'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  updateCarepackageItemSchema,
  updateCarepackageItemSchemaType,
} from './UpdateCarepackageItemSchema';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import { updateCarePackageItemAction } from '@/actions/carePackageItem/updateCarePackageItemAction';
import { useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';
import ButtonLight from '@/components/baseComponents/ButtonLight/ButtonLight';
import ComboBox from '@/components/baseComponents/ComboBox/ComboBox';
import { searchCbCarePackageItensAction } from '@/actions/carePackageItem/searchCbCarePackageItensAction';

export default function UpdatearePackageItemForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<updateCarepackageItemSchemaType>({
    resolver: zodResolver(updateCarepackageItemSchema),
    defaultValues: { newName: '', oldName: '' },
    mode: 'onBlur',
  });
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
            control={form.control}
            name="oldName"
            label="test"
            searchOptionsFunc={searchCbCarePackageItensAction}
          />
          <InputControlled
            control={form.control}
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
