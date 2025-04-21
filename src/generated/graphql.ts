import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BoolFilter = {
  equals: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<NestedBoolFilter>;
};

export type CarePackageItemListRelationFilter = {
  every: InputMaybe<CarePackageItemWhereInput>;
  none: InputMaybe<CarePackageItemWhereInput>;
  some: InputMaybe<CarePackageItemWhereInput>;
};

export type CarePackageItemModel = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
};

export type CarePackageItemOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type CarePackageItemOrderByWithRelationInput = {
  CreatedBy: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy: InputMaybe<UserOrderByWithRelationInput>;
  createdAt: InputMaybe<SortOrder>;
  createdBy: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  updatedBy: InputMaybe<SortOrder>;
};

export type CarePackageItemWhereInput = {
  AND: InputMaybe<Array<CarePackageItemWhereInput>>;
  CreatedBy: InputMaybe<UserScalarRelationFilter>;
  NOT: InputMaybe<Array<CarePackageItemWhereInput>>;
  OR: InputMaybe<Array<CarePackageItemWhereInput>>;
  UpdatedBy: InputMaybe<UserScalarRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  updatedBy: InputMaybe<StringFilter>;
};

export type CarePackageListRelationFilter = {
  every: InputMaybe<CarePackageWhereInput>;
  none: InputMaybe<CarePackageWhereInput>;
  some: InputMaybe<CarePackageWhereInput>;
};

export type CarePackageOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type CarePackageScheduleScalarRelationFilter = {
  is: InputMaybe<CarePackageScheduleWhereInput>;
  isNot: InputMaybe<CarePackageScheduleWhereInput>;
};

export type CarePackageScheduleWhereInput = {
  AND: InputMaybe<Array<CarePackageScheduleWhereInput>>;
  CarePackage: InputMaybe<CarePackageListRelationFilter>;
  NOT: InputMaybe<Array<CarePackageScheduleWhereInput>>;
  OR: InputMaybe<Array<CarePackageScheduleWhereInput>>;
  carePackageCount: InputMaybe<IntFilter>;
  deliveryDate: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
};

export type CarePackageWhereInput = {
  AND: InputMaybe<Array<CarePackageWhereInput>>;
  CarePackageSchedule: InputMaybe<CarePackageScheduleScalarRelationFilter>;
  CreatedBy: InputMaybe<UserScalarRelationFilter>;
  NOT: InputMaybe<Array<CarePackageWhereInput>>;
  OR: InputMaybe<Array<CarePackageWhereInput>>;
  Person: InputMaybe<PersonScalarRelationFilter>;
  TypeCarePackage: InputMaybe<TypeCarePackageScalarRelationFilter>;
  UpdatedBy: InputMaybe<UserScalarRelationFilter>;
  carePackageScheduleId: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  numberControl: InputMaybe<IntFilter>;
  personId: InputMaybe<StringFilter>;
  typeCarePackageId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  updatedBy: InputMaybe<StringFilter>;
};

export type ChildListRelationFilter = {
  every: InputMaybe<ChildWhereInput>;
  none: InputMaybe<ChildWhereInput>;
  some: InputMaybe<ChildWhereInput>;
};

export type ChildOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type ChildWhereInput = {
  AND: InputMaybe<Array<ChildWhereInput>>;
  CreatedBy: InputMaybe<UserScalarRelationFilter>;
  NOT: InputMaybe<Array<ChildWhereInput>>;
  OR: InputMaybe<Array<ChildWhereInput>>;
  PersonResponsible: InputMaybe<PersonScalarRelationFilter>;
  UpdatedBy: InputMaybe<UserScalarRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  dateBirh: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  lastName: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  responsibleId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  updatedBy: InputMaybe<StringFilter>;
};

export type CreateCarePackageItemInput = {
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type GetCarePackageItemInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type IntFilter = {
  equals: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<Scalars['Int']['input']>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<NestedIntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  createCarePackageItem: CarePackageItemModel;
  createUser: UserModel;
  signIn: SignInResponseModel;
  updateCarePackageItem: CarePackageItemModel;
};


export type MutationCreateCarePackageItemArgs = {
  data: CreateCarePackageItemInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCarePackageItemArgs = {
  data: UpdateCarePackageItemInput;
};

export type NestedBoolFilter = {
  equals: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntFilter = {
  equals: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<Scalars['Int']['input']>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<NestedIntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type PersonListRelationFilter = {
  every: InputMaybe<PersonWhereInput>;
  none: InputMaybe<PersonWhereInput>;
  some: InputMaybe<PersonWhereInput>;
};

export type PersonOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type PersonScalarRelationFilter = {
  is: InputMaybe<PersonWhereInput>;
  isNot: InputMaybe<PersonWhereInput>;
};

export type PersonWhereInput = {
  AND: InputMaybe<Array<PersonWhereInput>>;
  CarePackage: InputMaybe<CarePackageListRelationFilter>;
  Child: InputMaybe<ChildListRelationFilter>;
  CreatedBy: InputMaybe<UserScalarRelationFilter>;
  NOT: InputMaybe<Array<PersonWhereInput>>;
  OR: InputMaybe<Array<PersonWhereInput>>;
  UpdatedBy: InputMaybe<UserScalarRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  dateBirth: InputMaybe<DateTimeFilter>;
  document: InputMaybe<IntFilter>;
  gender: InputMaybe<StringFilter>;
  hasChild: InputMaybe<BoolFilter>;
  id: InputMaybe<StringFilter>;
  lastName: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  updatedBy: InputMaybe<StringFilter>;
};

export type Query = {
  countCarePackageItems: Scalars['Int']['output'];
  getAllCarePackageItems: Array<CarePackageItemModel>;
  getCarePackageItem: CarePackageItemModel;
  getUser: UserModel;
};


export type QueryCountCarePackageItemsArgs = {
  where: InputMaybe<CarePackageItemWhereInput>;
};


export type QueryGetAllCarePackageItemsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  sort: InputMaybe<CarePackageItemOrderByWithRelationInput>;
  where: InputMaybe<CarePackageItemWhereInput>;
};


export type QueryGetCarePackageItemArgs = {
  request: GetCarePackageItemInput;
};


export type QueryGetUserArgs = {
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};

export enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
}

export type SignInResponseModel = {
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type StringFilter = {
  contains: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<Scalars['String']['input']>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type TypeCarePackageListRelationFilter = {
  every: InputMaybe<TypeCarePackageWhereInput>;
  none: InputMaybe<TypeCarePackageWhereInput>;
  some: InputMaybe<TypeCarePackageWhereInput>;
};

export type TypeCarePackageOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type TypeCarePackageScalarRelationFilter = {
  is: InputMaybe<TypeCarePackageWhereInput>;
  isNot: InputMaybe<TypeCarePackageWhereInput>;
};

export type TypeCarePackageWhereInput = {
  AND: InputMaybe<Array<TypeCarePackageWhereInput>>;
  CarePackage: InputMaybe<CarePackageListRelationFilter>;
  CreatedBy: InputMaybe<UserScalarRelationFilter>;
  NOT: InputMaybe<Array<TypeCarePackageWhereInput>>;
  OR: InputMaybe<Array<TypeCarePackageWhereInput>>;
  UpdatedBy: InputMaybe<UserScalarRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  updatedBy: InputMaybe<StringFilter>;
};

export type UpdateCarePackageItemInput = {
  newName: InputMaybe<Scalars['String']['input']>;
  oldName: Scalars['ID']['input'];
};

export type UserModel = {
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserOrderByWithRelationInput = {
  CarePackageCreatedBy: InputMaybe<CarePackageOrderByRelationAggregateInput>;
  CarePackageItemCreatedBy: InputMaybe<CarePackageItemOrderByRelationAggregateInput>;
  CarePackageItemUpdatedBy: InputMaybe<CarePackageItemOrderByRelationAggregateInput>;
  CarePackageUpdatedBy: InputMaybe<CarePackageOrderByRelationAggregateInput>;
  ChildCreatedBy: InputMaybe<ChildOrderByRelationAggregateInput>;
  ChildUpdatedBy: InputMaybe<ChildOrderByRelationAggregateInput>;
  PersonCreatedBy: InputMaybe<PersonOrderByRelationAggregateInput>;
  PersonUpdatedBy: InputMaybe<PersonOrderByRelationAggregateInput>;
  TypeCarePackageCreatedBy: InputMaybe<TypeCarePackageOrderByRelationAggregateInput>;
  TypeCarePackageUpdatedBy: InputMaybe<TypeCarePackageOrderByRelationAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  email: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  modified_at: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
};

export type UserScalarRelationFilter = {
  is: InputMaybe<UserWhereInput>;
  isNot: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  CarePackageCreatedBy: InputMaybe<CarePackageListRelationFilter>;
  CarePackageItemCreatedBy: InputMaybe<CarePackageItemListRelationFilter>;
  CarePackageItemUpdatedBy: InputMaybe<CarePackageItemListRelationFilter>;
  CarePackageUpdatedBy: InputMaybe<CarePackageListRelationFilter>;
  ChildCreatedBy: InputMaybe<ChildListRelationFilter>;
  ChildUpdatedBy: InputMaybe<ChildListRelationFilter>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  PersonCreatedBy: InputMaybe<PersonListRelationFilter>;
  PersonUpdatedBy: InputMaybe<PersonListRelationFilter>;
  TypeCarePackageCreatedBy: InputMaybe<TypeCarePackageListRelationFilter>;
  TypeCarePackageUpdatedBy: InputMaybe<TypeCarePackageListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  modified_at: InputMaybe<DateTimeFilter>;
  name: InputMaybe<StringFilter>;
};

export type CreateCarePackageItemMutationVariables = Exact<{
  data: CreateCarePackageItemInput;
}>;


export type CreateCarePackageItemMutation = { createCarePackageItem: { id: string, name: string } };

export type SearchCbCarePackageItensQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  where: InputMaybe<CarePackageItemWhereInput>;
}>;


export type SearchCbCarePackageItensQuery = { getAllCarePackageItems: Array<{ id: string, name: string }> };

export type UpdateCarePackageItemMutationVariables = Exact<{
  data: UpdateCarePackageItemInput;
}>;


export type UpdateCarePackageItemMutation = { updateCarePackageItem: { name: string, id: string } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { signIn: { email: string, name: string, token: string } };


export const CreateCarePackageItemDocument = gql`
    mutation CreateCarePackageItem($data: CreateCarePackageItemInput!) {
  createCarePackageItem(data: $data) {
    id
    name
  }
}
    `;
export type CreateCarePackageItemMutationFn = Apollo.MutationFunction<CreateCarePackageItemMutation, CreateCarePackageItemMutationVariables>;

/**
 * __useCreateCarePackageItemMutation__
 *
 * To run a mutation, you first call `useCreateCarePackageItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarePackageItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarePackageItemMutation, { data, loading, error }] = useCreateCarePackageItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCarePackageItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarePackageItemMutation, CreateCarePackageItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarePackageItemMutation, CreateCarePackageItemMutationVariables>(CreateCarePackageItemDocument, options);
      }
export type CreateCarePackageItemMutationHookResult = ReturnType<typeof useCreateCarePackageItemMutation>;
export type CreateCarePackageItemMutationResult = Apollo.MutationResult<CreateCarePackageItemMutation>;
export type CreateCarePackageItemMutationOptions = Apollo.BaseMutationOptions<CreateCarePackageItemMutation, CreateCarePackageItemMutationVariables>;
export const SearchCbCarePackageItensDocument = gql`
    query SearchCbCarePackageItens($limit: Int!, $where: CarePackageItemWhereInput) {
  getAllCarePackageItems(limit: $limit, where: $where) {
    id
    name
  }
}
    `;

/**
 * __useSearchCbCarePackageItensQuery__
 *
 * To run a query within a React component, call `useSearchCbCarePackageItensQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCbCarePackageItensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCbCarePackageItensQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSearchCbCarePackageItensQuery(baseOptions: Apollo.QueryHookOptions<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables> & ({ variables: SearchCbCarePackageItensQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables>(SearchCbCarePackageItensDocument, options);
      }
export function useSearchCbCarePackageItensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables>(SearchCbCarePackageItensDocument, options);
        }
export function useSearchCbCarePackageItensSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables>(SearchCbCarePackageItensDocument, options);
        }
export type SearchCbCarePackageItensQueryHookResult = ReturnType<typeof useSearchCbCarePackageItensQuery>;
export type SearchCbCarePackageItensLazyQueryHookResult = ReturnType<typeof useSearchCbCarePackageItensLazyQuery>;
export type SearchCbCarePackageItensSuspenseQueryHookResult = ReturnType<typeof useSearchCbCarePackageItensSuspenseQuery>;
export type SearchCbCarePackageItensQueryResult = Apollo.QueryResult<SearchCbCarePackageItensQuery, SearchCbCarePackageItensQueryVariables>;
export const UpdateCarePackageItemDocument = gql`
    mutation UpdateCarePackageItem($data: UpdateCarePackageItemInput!) {
  updateCarePackageItem(data: $data) {
    name
    id
  }
}
    `;
export type UpdateCarePackageItemMutationFn = Apollo.MutationFunction<UpdateCarePackageItemMutation, UpdateCarePackageItemMutationVariables>;

/**
 * __useUpdateCarePackageItemMutation__
 *
 * To run a mutation, you first call `useUpdateCarePackageItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCarePackageItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCarePackageItemMutation, { data, loading, error }] = useUpdateCarePackageItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCarePackageItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCarePackageItemMutation, UpdateCarePackageItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCarePackageItemMutation, UpdateCarePackageItemMutationVariables>(UpdateCarePackageItemDocument, options);
      }
export type UpdateCarePackageItemMutationHookResult = ReturnType<typeof useUpdateCarePackageItemMutation>;
export type UpdateCarePackageItemMutationResult = Apollo.MutationResult<UpdateCarePackageItemMutation>;
export type UpdateCarePackageItemMutationOptions = Apollo.BaseMutationOptions<UpdateCarePackageItemMutation, UpdateCarePackageItemMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    email
    name
    token
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;