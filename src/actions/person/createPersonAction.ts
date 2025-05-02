'use server';
import { getClient } from '@/apollo/ApolloClient';
import { CreatePersonDocument, CreatePersonInput } from '@/generated/graphql';
import { ApolloError } from '@apollo/client';

type createPersonResponse = {
  data:
    | {
        id: string;
      }
    | undefined;
  errorMessage: string | undefined;
};
export async function createPersonAction({
  name,
  birthdayDate,
  children,
  document,
  lastName,
  gender,
  hasChild,
}: CreatePersonInput): Promise<createPersonResponse> {
  try {
    console.log(children)
    const response = await getClient().mutate({
      mutation: CreatePersonDocument,
      variables: {
        data: {
          name,
          birthdayDate,
          children,
          document,
          lastName,
          gender,
          hasChild,
        },
      },
    });
    return {
      data: {
        id: response?.data.createPerson.id,
      },
      errorMessage: response?.errors?.[0]?.message,
    };
  } catch (error) {
    

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
