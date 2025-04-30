'use server';
import { getClient } from '@/apollo/ApolloClient';
import {
  SeachCbTypeCarePackageDocument,
  SeachCbTypeCarePackageQuery,
} from '@/generated/graphql';
import { ApolloError } from '@apollo/client';
import { off } from 'process';

export async function searchCbTypeCarePackageAction(search: string) {
  try {
    console.log('search', search);
    const data = await getClient().query<SeachCbTypeCarePackageQuery>({
      fetchPolicy: 'cache-first',
      query: SeachCbTypeCarePackageDocument,
      variables: {
        limit: 5,
        offset: 0,
        where: {
          name: {
            contains: search,
          },
        },
      },
    });
    return data.data.getAllTypeCarePackages;
  } catch (error) {
    if (error instanceof ApolloError) {
      console.log('Error fetching type care packages:', error.networkError);
      return [];
    }
  }
}

export type searchTypeCarePackageData =
  SeachCbTypeCarePackageQuery['getAllTypeCarePackages'][number];
