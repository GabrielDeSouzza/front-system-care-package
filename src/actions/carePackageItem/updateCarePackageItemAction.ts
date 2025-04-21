'use server';
import { getClient } from '@/apollo/ApolloClient';
import { UpdateCarePackageItemDocument } from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

export type UpdateCarePackageItemFormData = {
  oldName: string;
  newName: string;
};

export type updateCarePackageItemResponse = {
  data:
    | {
        id: string;
        name: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function updateCarePackageItemAction({
  newName,
  oldName,
}: UpdateCarePackageItemFormData): Promise<updateCarePackageItemResponse> {
  try {
    const response = await getClient().mutate({
      mutation: UpdateCarePackageItemDocument,
      variables: { data: { newName, oldName } },
    });

    return {
      data: {
        id: response?.data.updateCarePackageItem.id,
        name: response?.data.updateCarePackageItem.name,
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
          errorMessage: 'Erro ao criar o item',
        };
  }
}
