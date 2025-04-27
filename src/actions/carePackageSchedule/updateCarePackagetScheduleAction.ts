'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  UpdateCarePackageScheduleDocument,
  UpdateCarePackageScheduleInput,
} from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

export type updateCarePackageScheduleResponse = {
  data:
    | {
        id: string;
        deliverydate: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function updateCarePackageScheduleAction({
  newDeliveryDate,
  oldDeliveryDate,
  carePackageCount,
}: UpdateCarePackageScheduleInput): Promise<updateCarePackageScheduleResponse> {
  try {
    const response = await getClient().mutate({
      mutation: UpdateCarePackageScheduleDocument,
      variables: {
        data: { newDeliveryDate, oldDeliveryDate, carePackageCount },
      },
    });

    return {
      data: {
        id: response?.data.updateCarePackageSchedule.id,
        deliverydate: response?.data.updateCarePackageSchedule.deliverydate,
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
