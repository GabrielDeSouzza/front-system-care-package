'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  GetAllCarePackageSchedulesDocument,
  GetAllCarePackageSchedulesQuery,
} from '@/generated/graphql';

export type seachCbCarePackageScheduleData =
  GetAllCarePackageSchedulesQuery['getAllCarePackageSchedules'][number];

export async function searchCbCarePackageSchedulesAction(
  search: string,
): Promise<seachCbCarePackageScheduleData[]> {
  console.log('search', search);
  const data = await getClient().query<GetAllCarePackageSchedulesQuery>({
    fetchPolicy: 'cache-first',
    query: GetAllCarePackageSchedulesDocument,
    variables: {
      limit: 5,
      offset: 0,
      where: {
        deliveryDate: {
          gte: search,
        },
      },
    },
  });
  return data.data.getAllCarePackageSchedules;
}
