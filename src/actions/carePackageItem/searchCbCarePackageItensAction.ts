'use server';
import { getClient } from '@/apollo/ApolloClient';
import { ComboBoxOption } from '@/components/baseComponents/ComboBox/ComboBoxProps';
import { SearchCbCarePackageItensDocument } from '@/generated/graphql';

export async function searchCbCarePackageItensAction(
  search: string,
): Promise<ComboBoxOption[]> {
  console.log('search', search);
  const data = await getClient().query({
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
  return data.data.getAllCarePackageItems.map((item: any) => ({
    value: item.id,
    label: item.name,
  })) as ComboBoxOption[];
}
