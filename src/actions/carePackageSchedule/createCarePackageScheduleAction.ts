'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  CreateCarePackageScheduleDocument,
  CreateCarePackageScheduleInput,
} from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

export type createCarePackageScheduleResponse = {
  data:
    | {
        id: string;
        deliverydate: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function createCarePackageScheduleAction({
  carePackageCount,
  deliveryDate,
}: CreateCarePackageScheduleInput): Promise<createCarePackageScheduleResponse> {
  try {
    const response = await getClient().mutate({
      mutation: CreateCarePackageScheduleDocument,
      variables: { data: { carePackageCount, deliveryDate } },
    });

    return {
      data: {
        id: response?.data.createCarePackageSchedule.id,
        deliverydate: response?.data.createCarePackageSchedule.deliverydate,
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
          errorMessage: 'Erro ao criar o schedule',
        };
  }
}
