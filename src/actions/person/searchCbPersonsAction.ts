'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  SearchCbPersonDocument,
  SearchCbPersonQuery,
} from '@/generated/graphql';

export async function searchCbPersonAction(search: string) {
  console.log('search', search);
  const data = await getClient().query<SearchCbPersonQuery>({
    fetchPolicy: 'cache-first',
    query: SearchCbPersonDocument,
    variables: {
      limit: 5,
      offset: 0,
      where: {
        document: {
          contains: search,
        },
      },
    },
  });
  return data.data.getAllPersons;
}

export type searchPersonData = SearchCbPersonQuery['getAllPersons'][number];
