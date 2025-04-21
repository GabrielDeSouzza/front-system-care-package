'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { loginSchema, loginSchemaType } from './LoginSchema';
import { InputControlled } from '../../baseComponents/InputControlled/InputControlled';
import ButtonForm from '../../baseComponents/ButtonForm/ButtomForm';
import { useState } from 'react';
import BottomRightModal from '@/components/baseComponents/BottomRightModal/BottomRightModal';
import { SignInAction } from '@/actions/signInLogin';

export default function LoginForm() {
  const [errorMensage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: loginSchemaType) => {
    setErrorMessage(null);
    try {
      const result = await SignInAction(data);
      if (result.errorMessage) {
        setErrorMessage(result.errorMessage);
        return;
      }

      if (result.data) {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Erro no login', error);
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-blue-950">
      {errorMensage && (
        <BottomRightModal message={errorMensage} show duration={4000} />
      )}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)} // Chama a função onSubmit
          className="p-20 bg-gray-50 rounded-2xl max-w-5/12 min-w-[400]"
        >
          <header className="text-center">
            <h1 className="font-bold text-3xl">Login</h1>
          </header>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent m-1.5"></div>

          <InputControlled
            name="email"
            control={form.control}
            label="Email"
            placeholder="Digite seu Email"
            type="text"
          />
          <InputControlled
            name="password"
            control={form.control}
            label="Senha"
            placeholder="Digite sua senha"
            type="text"
          />
          <div className='m-1'>
            <ButtonForm type="submit" text="ENVIAR"></ButtonForm>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}
