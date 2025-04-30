'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  UpdateTypeCarePackageDocument,
  UpdateTypeCarePackageInput,
} from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

export type updateTypeCarePackageResponse = {
  data:
    | {
        id: string;
        name: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function updateTypeCarePackageAction({
  newName,
  oldName,
  itensName,
  deletedItensName,
}: UpdateTypeCarePackageInput): Promise<updateTypeCarePackageResponse> {
  try {
    const response = await getClient().mutate({
      mutation: UpdateTypeCarePackageDocument,
      variables: {
        data: { newName, oldName, itensName, deletedItensName },
      },
    });

    return {
      data: {
        id: response?.data.updateTypeCarePackage.id,
        name: response?.data.updateTypeCarePackage.name,
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
          errorMessage: 'Erro ao criar o tipo ',
        };
  }
}
