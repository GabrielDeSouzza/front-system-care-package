'use server';

import { getClient } from '@/apollo/ApolloClient';
import { SignInDocument } from '@/generated/graphql';
import { ApolloError } from '@apollo/client';
import { cookies } from 'next/headers';

type SignInFormData = {
  email: string;
  password: string;
};

type SignInResponse = {
  data: {
    email: string;
    name: string;
  } | null;
  errorMessage: string | undefined;
};

export async function SignInAction({
  email,
  password,
}: SignInFormData): Promise<SignInResponse> {
  try {
    const response = await getClient().mutate({
      mutation: SignInDocument,
      variables: { email, password },
    });
    const token = response?.data?.signIn?.token;
    console.log(response, token);
    response.data;
    if (!token) {
      return {
        data: null,
        errorMessage: 'Erro ao realizar o login',
      };
    }

    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 dia
      path: '/',
    });
    return {
      data: {
        email: response?.data.signIn.email,
        name: response?.data.signIn.name,
      },
      errorMessage: response?.errors?.[0]?.message,
    };
  } catch (error) {
    console.log(error);

    return error instanceof ApolloError
      ? {
          data: null,
          errorMessage: error.message,
        }
      : {
          data: null,
          errorMessage: 'Erro ao realizar o login',
        };
  }
}
