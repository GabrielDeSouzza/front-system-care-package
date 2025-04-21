'use server';
import { getClient } from '@/apollo/ApolloClient';
import { CreateCarePackageItemDocument } from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

export type CreateCarePackageItemFormData = {
  name: string;
};

export type createCarePackageItemResponse = {
  data:
    | {
        id: string;
        name: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function createCarePackageItemAction({
  name,
}: CreateCarePackageItemFormData): Promise<createCarePackageItemResponse> {
  try {
    const response = await getClient().mutate({
      mutation: CreateCarePackageItemDocument,
      variables: { data: { name } },
    });

    return {
      data: {
        id: response?.data.createCarePackageItem.id,
        name: response?.data.createCarePackageItem.name,
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
