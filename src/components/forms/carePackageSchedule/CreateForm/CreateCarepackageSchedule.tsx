'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  createCarepackageScheduleSchema,
  createCarepackageScheduleSchemaType,
} from './CreateCarepackageScheduleSchema';
import { InputControlled } from '@/components/baseComponents/InputControlled/InputControlled';
import { createCarePackageScheduleAction } from '@/actions/carePackageSchedule/createCarePackageScheduleAction';
import { useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import ButtonForm from '@/components/baseComponents/ButtonForm/ButtomForm';

export default function CreateCarePackageScheduleForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<createCarepackageScheduleSchemaType>({
    resolver: zodResolver(createCarepackageScheduleSchema),
    defaultValues: { carePackageCount: 0, deliveryDate: new Date() },
    mode: 'onBlur',
  });
  const onSubmit = async (data: createCarepackageScheduleSchemaType) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    const result = await createCarePackageScheduleAction({
      deliveryDate: data.deliveryDate,
      carePackageCount: data.carePackageCount,
    });
    if (result.errorMessage) {
      setErrorMessage(result.errorMessage);
      return;
    }
    if (result.data) {
      setSuccessMessage('Agendamento criado com sucesso');
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
              label="Schedule"
              name="deliveryDate"
              placeholder="Digite o nome do Schedule"
              type="date"
            />
          </div>
          <div>
            <InputControlled
              label="Numero de Pacotes"
              name="carePackageCount"
              placeholder="Digite o numero de pacotes"
              type="number"
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
