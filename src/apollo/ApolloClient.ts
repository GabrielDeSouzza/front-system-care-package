import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { cookies } from 'next/headers';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.API_URL,

      fetch: async (uri, options) => {
        const cookieStore = await cookies();
        const token = cookieStore.get('auth-token')?.value;
        options = options || {};
        options.headers = {
          ...options?.headers,
          Authorization: token ? `Bearer ${token}` : '',
        };

        return fetch(uri, options);
      },
    }),
  });
});
