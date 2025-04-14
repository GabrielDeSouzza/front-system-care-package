'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { loginSchema, loginSchemaType } from './LoginSchema';
import { InputControlled } from '../baseComponents/InputControlled/InputControlled';
import ButtonForm from '../baseComponents/ButtonForm/ButtomForm';

export default function LoginForm() {
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSumit(data: loginSchemaType) {
    console.log(data);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-950">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSumit)}
          className="p-20 bg-gray-50 rounded-2xl max-w-5/12 min-w-[400]"
        >
          <header className="text-center">
            <h1 className="font-bold font text-3xl">Login</h1>
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

          <ButtonForm type="submit" text="ENVIAR"></ButtonForm>
        </form>
      </FormProvider>
    </div>
  );
}
