'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import {
  createTypeCarepackageSchemaType,
  createTypeCarepackageSchema,
} from './CreateTypeCarepackageSchema';
import { createTypeCarePackageAction } from '@/actions/TypeCarePackage/createTypeCarePackageAction';
import { CarePackageItemArr } from '@/components/advancedComponents/CarePackageItemArr/CarePackageItemArr';

export default function CreateTypeCarepackageForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<createTypeCarepackageSchemaType>({
    resolver: zodResolver(createTypeCarepackageSchema),
    defaultValues: { name: '' },
  });
  const onSubmit = async (data: createTypeCarepackageSchemaType) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    const result = await createTypeCarePackageAction({
      name: data.name,
      itensName: data.itensName.map((item) => item.itemName),
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <div className="w-[15rem] ">
            <InputControlled
              label=""
              name="name"
              placeholder="Digite o nome do "
            />
          </div>
          <div className="flex flex-row w-full flex-wrap gap-2">
            <CarePackageItemArr name="itensName" />
          </div>
          <div className="m-0.5 ">
            <ButtonForm text="Criar" type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  );
}
