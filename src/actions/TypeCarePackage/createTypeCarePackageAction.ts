'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  CreateTypeCarePackageDocument,
  CreateTypeCarePackageInput,
} from '@/generated/graphql';

import { ApolloError } from '@apollo/client';

type createTypeCarePackageResponse = {
  data:
    | {
        id: string;
        name: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function createTypeCarePackageAction({
  name,
  itensName,
}: CreateTypeCarePackageInput): Promise<createTypeCarePackageResponse> {
  try {
    const response = await getClient().mutate({
      mutation: CreateTypeCarePackageDocument,
      variables: { data: { name, itensName } },
    });

    return {
      data: {
        id: response?.data.createTypeCarePackage.id,
        name: response?.data.createTypeCarePackage.name,
      },
      errorMessage: response?.errors?.[0]?.message,
    };
  } catch (error) {
    console.log(error);

    return error instanceof ApolloError
      ? {
          data: undefined,
          errorMessage: error.message,
        }
      : {
          data: undefined,
          errorMessage: 'Erro ao criar o Tipo',
        };
  }
}
