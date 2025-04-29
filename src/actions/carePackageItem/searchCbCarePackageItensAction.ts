'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  SearchCbCarePackageItensDocument,
  SearchCbCarePackageItensQuery,
} from '@/generated/graphql';

export async function searchCbCarePackageItensAction(search: string) {
  console.log('search', search);
  const data = await getClient().query<SearchCbCarePackageItensQuery>({
    fetchPolicy: 'cache-first',
    query: SearchCbCarePackageItensDocument,
    variables: {
      limit: 5,
      where: {
        name: {
          contains: search,
        },
      },
    },
  });
  console.log('data', data);
  return data.data.getAllCarePackageItems;
}

export type searchCarePackageItemData =
  SearchCbCarePackageItensQuery['getAllCarePackageItems'][number];
