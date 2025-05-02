'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  createCarepackageItemSchema,
  createCarepackageItemSchemaType,
} from './CreateCarepackageItemSchema';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import { createCarePackageItemAction } from '@/actions/carePackageItem/createCarePackageItemAction';
import { useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';

export default function CreateCarePackageItemForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<createCarepackageItemSchemaType>({
    resolver: zodResolver(createCarepackageItemSchema),
    defaultValues: { name: '' },
  });
  const onSubmit = async (data: createCarepackageItemSchemaType) => {
    console.log(data);
    setErrorMessage(null);
    setSuccessMessage(null);
    const result = await createCarePackageItemAction({
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
          <div>
            <InputControlled
              label="Item"
              name="name"
              placeholder="Digite o nome do Item"
            />
          </div>
          <div className="m-0.5">
            <ButtonForm text="Criar" type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
