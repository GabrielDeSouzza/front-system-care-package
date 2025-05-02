'use server';
import { getClient } from '@/apollo/ApolloClient';
import { UpdatePersonDocument, UpdatePersonInput } from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

export type updatePersonResponse = {
  data:
    | {
        id: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function updatePersonAction({
  newDocument,
  oldDocument,
  birthdayDate,
  children,
  deletedChildrenIds,
  gender,
  hasChild,
  lastName,
  name,
}: UpdatePersonInput): Promise<updatePersonResponse> {
  try {
    console.log(lastName);
    const response = await getClient().mutate({
      mutation: UpdatePersonDocument,
      variables: {
        data: {
          newDocument,
          oldDocument,
          birthdayDate,
          children,
          deletedChildrenIds,
          gender,
          hasChild,
          lastName,
          name,
        },
      },
    });

    return {
      data: {
        id: response?.data.updatePerson.id,
      },
      errorMessage: response?.errors?.[0]?.message,
    };
  } catch (error) {
    /*console.log('error s', error.graphQLErrors[0].extensions);*/

    return error instanceof ApolloError
      ? {
          data: undefined,
          errorMessage: error.message,
        }
      : {
          data: undefined,
          errorMessage: 'Erro ao atualziar pessoa',
        };
  }
}
