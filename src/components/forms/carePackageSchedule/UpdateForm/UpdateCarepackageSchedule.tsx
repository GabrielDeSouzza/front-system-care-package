'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  updateCarepackageScheduleSchema,
  updateCarepackageScheduleSchemaType,
} from './UpdateCarepackageScheduleSchema';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import { useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';
import { updateCarePackageScheduleAction } from '@/actions/carePackageSchedule/updateCarePackagetScheduleAction';

export default function UpdatearePackageScheduleForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<updateCarepackageScheduleSchemaType>({
    resolver: zodResolver(updateCarepackageScheduleSchema),
    defaultValues: {
      carePackageCount: 1,
      newDeliveryDate: new Date(),
      oldDeliveryDate: new Date(),
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: updateCarepackageScheduleSchemaType) => {
    console.log(data);
    setErrorMessage(null);
    setSuccessMessage(null);
    const result = await updateCarePackageScheduleAction({
      carePackageCount: data.carePackageCount ?? null,
      newDeliveryDate: data.newDeliveryDate ?? null,
      oldDeliveryDate: data.oldDeliveryDate ?? null,
    });
    if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
      return;
    }
    if (result.data) {
      setSuccessMessage('Data atualizado com sucesso');
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
          <InputControlled
            control={form.control}
            label="Schedule"
            type="date"
            name="oldDeliveryDate"
            placeholder="Digite o nome do Schedule"
          />
          <InputControlled
            control={form.control}
            label="Schedule"
            type="date"
            name="newDeliveryDate"
            placeholder="Digite o nome do Schedule"
          />
          <ButtonForm text="Atualizar" type="submit" />
        </form>
      </FormProvider>
    </>
  );
}
