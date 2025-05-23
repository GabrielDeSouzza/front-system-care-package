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
  TypeCarePackage: InputMaybe<TypeCarePackageOrderByRelationAggregateInput>;
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
  TypeCarePackage: InputMaybe<TypeCarePackageListRelationFilter>;
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

export type CarePackageScheduleModel = {
  carePackageCount: Scalars['Float']['output'];
  deliveryDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type CarePackageScheduleOrderByWithRelationInput = {
  CarePackage: InputMaybe<CarePackageOrderByRelationAggregateInput>;
  carePackageCount: InputMaybe<SortOrder>;
  deliveryDate: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
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

export type ChildModel = {
  birthdayDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  responsibleId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
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
  birthdayDate: InputMaybe<DateTimeFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  gender: InputMaybe<StringFilter>;
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

export type CreateCarePackageScheduleInput = {
  carePackageCount: Scalars['Float']['input'];
  deliveryDate: Scalars['DateTime']['input'];
};

export type CreateChildrenRelationPersonInput = {
  birthdayDate: Scalars['DateTime']['input'];
  gender: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePersonInput = {
  birthdayDate: Scalars['DateTime']['input'];
  children: InputMaybe<Array<CreateChildrenRelationPersonInput>>;
  document: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  hasChild: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateTypeCarePackageInput = {
  itensName: Array<Scalars['String']['input']>;
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

export type GetCarePackageScheduleInput = {
  deliveryDate: InputMaybe<Scalars['DateTime']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
};

export type GetPersonInput = {
  document: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
};

export type GetTypeCarePackageInput = {
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
  createCarePackageSchedule: CarePackageScheduleModel;
  createPerson: PersonModel;
  createTypeCarePackage: TypeCarePackageModel;
  createUser: UserModel;
  signIn: SignInResponseModel;
  updateCarePackageItem: CarePackageItemModel;
  updateCarePackageSchedule: CarePackageScheduleModel;
  updatePerson: PersonModel;
  updateTypeCarePackage: TypeCarePackageModel;
};


export type MutationCreateCarePackageItemArgs = {
  data: CreateCarePackageItemInput;
};


export type MutationCreateCarePackageScheduleArgs = {
  data: CreateCarePackageScheduleInput;
};


export type MutationCreatePersonArgs = {
  data: CreatePersonInput;
};


export type MutationCreateTypeCarePackageArgs = {
  data: CreateTypeCarePackageInput;
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


export type MutationUpdateCarePackageScheduleArgs = {
  data: UpdateCarePackageScheduleInput;
};


export type MutationUpdatePersonArgs = {
  data: UpdatePersonInput;
};


export type MutationUpdateTypeCarePackageArgs = {
  data: UpdateTypeCarePackageInput;
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

export type PersonModel = {
  Children: Maybe<Array<ChildModel>>;
  birthdayDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  document: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  hasChild: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
};

export type PersonOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
  CarePackage: InputMaybe<CarePackageOrderByRelationAggregateInput>;
  Child: InputMaybe<ChildOrderByRelationAggregateInput>;
  CreatedBy: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy: InputMaybe<UserOrderByWithRelationInput>;
  birthdayDate: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  createdBy: InputMaybe<SortOrder>;
  document: InputMaybe<SortOrder>;
  gender: InputMaybe<SortOrder>;
  hasChild: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  lastName: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  updatedBy: InputMaybe<SortOrder>;
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
  birthdayDate: InputMaybe<DateTimeFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  createdBy: InputMaybe<StringFilter>;
  document: InputMaybe<StringFilter>;
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
  countCarePackageSchedules: Scalars['Int']['output'];
  countPersons: Scalars['Int']['output'];
  countTypeCarePackages: Scalars['Int']['output'];
  getAllCarePackageItems: Array<CarePackageItemModel>;
  getAllCarePackageSchedules: Array<CarePackageScheduleModel>;
  getAllPersons: Array<PersonModel>;
  getAllTypeCarePackages: Array<TypeCarePackageModel>;
  getCarePackageItem: CarePackageItemModel;
  getCarePackageSchedule: CarePackageScheduleModel;
  getPerson: PersonModel;
  getTypeCarePackage: TypeCarePackageModel;
  getUser: UserModel;
};


export type QueryCountCarePackageItemsArgs = {
  where: InputMaybe<CarePackageItemWhereInput>;
};


export type QueryCountCarePackageSchedulesArgs = {
  where: InputMaybe<CarePackageScheduleWhereInput>;
};


export type QueryCountPersonsArgs = {
  where: InputMaybe<PersonWhereInput>;
};


export type QueryCountTypeCarePackagesArgs = {
  where: InputMaybe<TypeCarePackageWhereInput>;
};


export type QueryGetAllCarePackageItemsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  sort: InputMaybe<CarePackageItemOrderByWithRelationInput>;
  where: InputMaybe<CarePackageItemWhereInput>;
};


export type QueryGetAllCarePackageSchedulesArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  sort: InputMaybe<CarePackageScheduleOrderByWithRelationInput>;
  where: InputMaybe<CarePackageScheduleWhereInput>;
};


export type QueryGetAllPersonsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  sort: InputMaybe<PersonOrderByWithRelationInput>;
  where: InputMaybe<PersonWhereInput>;
};


export type QueryGetAllTypeCarePackagesArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  sort: InputMaybe<TypeCarePackageOrderByWithRelationInput>;
  where: InputMaybe<TypeCarePackageWhereInput>;
};


export type QueryGetCarePackageItemArgs = {
  request: GetCarePackageItemInput;
};


export type QueryGetCarePackageScheduleArgs = {
  request: GetCarePackageScheduleInput;
};


export type QueryGetPersonArgs = {
  request: GetPersonInput;
};


export type QueryGetTypeCarePackageArgs = {
  request: GetTypeCarePackageInput;
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

export type TypeCarePackageModel = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  itensName: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
};

export type TypeCarePackageOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type TypeCarePackageOrderByWithRelationInput = {
  CarePackage: InputMaybe<CarePackageOrderByRelationAggregateInput>;
  CarePackageItem: InputMaybe<CarePackageItemOrderByRelationAggregateInput>;
  CreatedBy: InputMaybe<UserOrderByWithRelationInput>;
  UpdatedBy: InputMaybe<UserOrderByWithRelationInput>;
  createdAt: InputMaybe<SortOrder>;
  createdBy: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  updatedBy: InputMaybe<SortOrder>;
};

export type TypeCarePackageScalarRelationFilter = {
  is: InputMaybe<TypeCarePackageWhereInput>;
  isNot: InputMaybe<TypeCarePackageWhereInput>;
};

export type TypeCarePackageWhereInput = {
  AND: InputMaybe<Array<TypeCarePackageWhereInput>>;
  CarePackage: InputMaybe<CarePackageListRelationFilter>;
  CarePackageItem: InputMaybe<CarePackageItemListRelationFilter>;
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

export type UpdateCarePackageScheduleInput = {
  carePackageCount: InputMaybe<Scalars['Float']['input']>;
  newDeliveryDate: InputMaybe<Scalars['DateTime']['input']>;
  oldDeliveryDate: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateChildrenRelationPersonInput = {
  birthdayDate: InputMaybe<Scalars['DateTime']['input']>;
  gender: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePersonInput = {
  birthdayDate: InputMaybe<Scalars['DateTime']['input']>;
  children: InputMaybe<Array<UpdateChildrenRelationPersonInput>>;
  deletedChildrenIds: InputMaybe<Array<Scalars['String']['input']>>;
  gender: InputMaybe<Scalars['String']['input']>;
  hasChild: InputMaybe<Scalars['Boolean']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  newDocument: InputMaybe<Scalars['String']['input']>;
  oldDocument: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTypeCarePackageInput = {
  deletedItensName: InputMaybe<Array<Scalars['String']['input']>>;
  id: InputMaybe<Scalars['String']['input']>;
  itensName: InputMaybe<Array<Scalars['String']['input']>>;
  newName: InputMaybe<Scalars['String']['input']>;
  oldName: InputMaybe<Scalars['String']['input']>;
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

export type CreateCarePackageScheduleMutationVariables = Exact<{
  data: CreateCarePackageScheduleInput;
}>;


export type CreateCarePackageScheduleMutation = { createCarePackageSchedule: { id: string, deliveryDate: any, carePackageCount: number } };

export type GetCarePackageScheduleQueryVariables = Exact<{
  request: GetCarePackageScheduleInput;
}>;


export type GetCarePackageScheduleQuery = { getCarePackageSchedule: { deliveryDate: any, carePackageCount: number } };

export type GetAllCarePackageSchedulesQueryVariables = Exact<{
  where: InputMaybe<CarePackageScheduleWhereInput>;
  sort: InputMaybe<CarePackageScheduleOrderByWithRelationInput>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type GetAllCarePackageSchedulesQuery = { getAllCarePackageSchedules: Array<{ carePackageCount: number, id: string, deliveryDate: any }> };

export type UpdateCarePackageScheduleMutationVariables = Exact<{
  data: UpdateCarePackageScheduleInput;
}>;


export type UpdateCarePackageScheduleMutation = { updateCarePackageSchedule: { carePackageCount: number, deliveryDate: any, id: string } };

export type CreateTypeCarePackageMutationVariables = Exact<{
  data: CreateTypeCarePackageInput;
}>;


export type CreateTypeCarePackageMutation = { createTypeCarePackage: { name: string, id: string } };

export type GetTypeCarePackageQueryVariables = Exact<{
  request: GetTypeCarePackageInput;
}>;


export type GetTypeCarePackageQuery = { getTypeCarePackage: { id: string, itensName: Array<string>, name: string } };

export type SeachCbTypeCarePackageQueryVariables = Exact<{
  where: InputMaybe<TypeCarePackageWhereInput>;
  sort: InputMaybe<TypeCarePackageOrderByWithRelationInput>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type SeachCbTypeCarePackageQuery = { getAllTypeCarePackages: Array<{ itensName: Array<string>, name: string, id: string }> };

export type UpdateTypeCarePackageMutationVariables = Exact<{
  data: UpdateTypeCarePackageInput;
}>;


export type UpdateTypeCarePackageMutation = { updateTypeCarePackage: { name: string, id: string } };

export type CreatePersonMutationVariables = Exact<{
  data: CreatePersonInput;
}>;


export type CreatePersonMutation = { createPerson: { id: string } };

export type GetPersonQueryVariables = Exact<{
  request: GetPersonInput;
}>;


export type GetPersonQuery = { getPerson: { id: string, lastName: string, name: string, gender: string, document: string, hasChild: boolean, birthdayDate: any, Children: Array<{ name: string, lastName: string, birthdayDate: any, id: string }> | null } };

export type SearchCbPersonQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  sort: InputMaybe<PersonOrderByWithRelationInput>;
  where: InputMaybe<PersonWhereInput>;
}>;


export type SearchCbPersonQuery = { getAllPersons: Array<{ hasChild: boolean, document: string, gender: string, lastName: string, name: string, birthdayDate: any, id: string, Children: Array<{ birthdayDate: any, id: string, lastName: string, name: string, gender: string }> | null }> };

export type UpdatePersonMutationVariables = Exact<{
  data: UpdatePersonInput;
}>;


export type UpdatePersonMutation = { updatePerson: { id: string } };

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
export const CreateCarePackageScheduleDocument = gql`
    mutation CreateCarePackageSchedule($data: CreateCarePackageScheduleInput!) {
  createCarePackageSchedule(data: $data) {
    id
    deliveryDate
    carePackageCount
  }
}
    `;
export type CreateCarePackageScheduleMutationFn = Apollo.MutationFunction<CreateCarePackageScheduleMutation, CreateCarePackageScheduleMutationVariables>;

/**
 * __useCreateCarePackageScheduleMutation__
 *
 * To run a mutation, you first call `useCreateCarePackageScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarePackageScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarePackageScheduleMutation, { data, loading, error }] = useCreateCarePackageScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCarePackageScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarePackageScheduleMutation, CreateCarePackageScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarePackageScheduleMutation, CreateCarePackageScheduleMutationVariables>(CreateCarePackageScheduleDocument, options);
      }
export type CreateCarePackageScheduleMutationHookResult = ReturnType<typeof useCreateCarePackageScheduleMutation>;
export type CreateCarePackageScheduleMutationResult = Apollo.MutationResult<CreateCarePackageScheduleMutation>;
export type CreateCarePackageScheduleMutationOptions = Apollo.BaseMutationOptions<CreateCarePackageScheduleMutation, CreateCarePackageScheduleMutationVariables>;
export const GetCarePackageScheduleDocument = gql`
    query GetCarePackageSchedule($request: GetCarePackageScheduleInput!) {
  getCarePackageSchedule(request: $request) {
    deliveryDate
    carePackageCount
  }
}
    `;

/**
 * __useGetCarePackageScheduleQuery__
 *
 * To run a query within a React component, call `useGetCarePackageScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarePackageScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarePackageScheduleQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGetCarePackageScheduleQuery(baseOptions: Apollo.QueryHookOptions<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables> & ({ variables: GetCarePackageScheduleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables>(GetCarePackageScheduleDocument, options);
      }
export function useGetCarePackageScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables>(GetCarePackageScheduleDocument, options);
        }
export function useGetCarePackageScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables>(GetCarePackageScheduleDocument, options);
        }
export type GetCarePackageScheduleQueryHookResult = ReturnType<typeof useGetCarePackageScheduleQuery>;
export type GetCarePackageScheduleLazyQueryHookResult = ReturnType<typeof useGetCarePackageScheduleLazyQuery>;
export type GetCarePackageScheduleSuspenseQueryHookResult = ReturnType<typeof useGetCarePackageScheduleSuspenseQuery>;
export type GetCarePackageScheduleQueryResult = Apollo.QueryResult<GetCarePackageScheduleQuery, GetCarePackageScheduleQueryVariables>;
export const GetAllCarePackageSchedulesDocument = gql`
    query GetAllCarePackageSchedules($where: CarePackageScheduleWhereInput, $sort: CarePackageScheduleOrderByWithRelationInput, $limit: Int!, $offset: Int!) {
  getAllCarePackageSchedules(
    where: $where
    sort: $sort
    limit: $limit
    offset: $offset
  ) {
    carePackageCount
    id
    deliveryDate
  }
}
    `;

/**
 * __useGetAllCarePackageSchedulesQuery__
 *
 * To run a query within a React component, call `useGetAllCarePackageSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCarePackageSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCarePackageSchedulesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetAllCarePackageSchedulesQuery(baseOptions: Apollo.QueryHookOptions<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables> & ({ variables: GetAllCarePackageSchedulesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables>(GetAllCarePackageSchedulesDocument, options);
      }
export function useGetAllCarePackageSchedulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables>(GetAllCarePackageSchedulesDocument, options);
        }
export function useGetAllCarePackageSchedulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables>(GetAllCarePackageSchedulesDocument, options);
        }
export type GetAllCarePackageSchedulesQueryHookResult = ReturnType<typeof useGetAllCarePackageSchedulesQuery>;
export type GetAllCarePackageSchedulesLazyQueryHookResult = ReturnType<typeof useGetAllCarePackageSchedulesLazyQuery>;
export type GetAllCarePackageSchedulesSuspenseQueryHookResult = ReturnType<typeof useGetAllCarePackageSchedulesSuspenseQuery>;
export type GetAllCarePackageSchedulesQueryResult = Apollo.QueryResult<GetAllCarePackageSchedulesQuery, GetAllCarePackageSchedulesQueryVariables>;
export const UpdateCarePackageScheduleDocument = gql`
    mutation UpdateCarePackageSchedule($data: UpdateCarePackageScheduleInput!) {
  updateCarePackageSchedule(data: $data) {
    carePackageCount
    deliveryDate
    id
  }
}
    `;
export type UpdateCarePackageScheduleMutationFn = Apollo.MutationFunction<UpdateCarePackageScheduleMutation, UpdateCarePackageScheduleMutationVariables>;

/**
 * __useUpdateCarePackageScheduleMutation__
 *
 * To run a mutation, you first call `useUpdateCarePackageScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCarePackageScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCarePackageScheduleMutation, { data, loading, error }] = useUpdateCarePackageScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCarePackageScheduleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCarePackageScheduleMutation, UpdateCarePackageScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCarePackageScheduleMutation, UpdateCarePackageScheduleMutationVariables>(UpdateCarePackageScheduleDocument, options);
      }
export type UpdateCarePackageScheduleMutationHookResult = ReturnType<typeof useUpdateCarePackageScheduleMutation>;
export type UpdateCarePackageScheduleMutationResult = Apollo.MutationResult<UpdateCarePackageScheduleMutation>;
export type UpdateCarePackageScheduleMutationOptions = Apollo.BaseMutationOptions<UpdateCarePackageScheduleMutation, UpdateCarePackageScheduleMutationVariables>;
export const CreateTypeCarePackageDocument = gql`
    mutation CreateTypeCarePackage($data: CreateTypeCarePackageInput!) {
  createTypeCarePackage(data: $data) {
    name
    id
  }
}
    `;
export type CreateTypeCarePackageMutationFn = Apollo.MutationFunction<CreateTypeCarePackageMutation, CreateTypeCarePackageMutationVariables>;

/**
 * __useCreateTypeCarePackageMutation__
 *
 * To run a mutation, you first call `useCreateTypeCarePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTypeCarePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTypeCarePackageMutation, { data, loading, error }] = useCreateTypeCarePackageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTypeCarePackageMutation(baseOptions?: Apollo.MutationHookOptions<CreateTypeCarePackageMutation, CreateTypeCarePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTypeCarePackageMutation, CreateTypeCarePackageMutationVariables>(CreateTypeCarePackageDocument, options);
      }
export type CreateTypeCarePackageMutationHookResult = ReturnType<typeof useCreateTypeCarePackageMutation>;
export type CreateTypeCarePackageMutationResult = Apollo.MutationResult<CreateTypeCarePackageMutation>;
export type CreateTypeCarePackageMutationOptions = Apollo.BaseMutationOptions<CreateTypeCarePackageMutation, CreateTypeCarePackageMutationVariables>;
export const GetTypeCarePackageDocument = gql`
    query GetTypeCarePackage($request: GetTypeCarePackageInput!) {
  getTypeCarePackage(request: $request) {
    id
    itensName
    name
  }
}
    `;

/**
 * __useGetTypeCarePackageQuery__
 *
 * To run a query within a React component, call `useGetTypeCarePackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTypeCarePackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTypeCarePackageQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGetTypeCarePackageQuery(baseOptions: Apollo.QueryHookOptions<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables> & ({ variables: GetTypeCarePackageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables>(GetTypeCarePackageDocument, options);
      }
export function useGetTypeCarePackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables>(GetTypeCarePackageDocument, options);
        }
export function useGetTypeCarePackageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables>(GetTypeCarePackageDocument, options);
        }
export type GetTypeCarePackageQueryHookResult = ReturnType<typeof useGetTypeCarePackageQuery>;
export type GetTypeCarePackageLazyQueryHookResult = ReturnType<typeof useGetTypeCarePackageLazyQuery>;
export type GetTypeCarePackageSuspenseQueryHookResult = ReturnType<typeof useGetTypeCarePackageSuspenseQuery>;
export type GetTypeCarePackageQueryResult = Apollo.QueryResult<GetTypeCarePackageQuery, GetTypeCarePackageQueryVariables>;
export const SeachCbTypeCarePackageDocument = gql`
    query SeachCbTypeCarePackage($where: TypeCarePackageWhereInput, $sort: TypeCarePackageOrderByWithRelationInput, $limit: Int!, $offset: Int!) {
  getAllTypeCarePackages(
    where: $where
    sort: $sort
    limit: $limit
    offset: $offset
  ) {
    itensName
    name
    id
  }
}
    `;

/**
 * __useSeachCbTypeCarePackageQuery__
 *
 * To run a query within a React component, call `useSeachCbTypeCarePackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeachCbTypeCarePackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeachCbTypeCarePackageQuery({
 *   variables: {
 *      where: // value for 'where'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSeachCbTypeCarePackageQuery(baseOptions: Apollo.QueryHookOptions<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables> & ({ variables: SeachCbTypeCarePackageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables>(SeachCbTypeCarePackageDocument, options);
      }
export function useSeachCbTypeCarePackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables>(SeachCbTypeCarePackageDocument, options);
        }
export function useSeachCbTypeCarePackageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables>(SeachCbTypeCarePackageDocument, options);
        }
export type SeachCbTypeCarePackageQueryHookResult = ReturnType<typeof useSeachCbTypeCarePackageQuery>;
export type SeachCbTypeCarePackageLazyQueryHookResult = ReturnType<typeof useSeachCbTypeCarePackageLazyQuery>;
export type SeachCbTypeCarePackageSuspenseQueryHookResult = ReturnType<typeof useSeachCbTypeCarePackageSuspenseQuery>;
export type SeachCbTypeCarePackageQueryResult = Apollo.QueryResult<SeachCbTypeCarePackageQuery, SeachCbTypeCarePackageQueryVariables>;
export const UpdateTypeCarePackageDocument = gql`
    mutation UpdateTypeCarePackage($data: UpdateTypeCarePackageInput!) {
  updateTypeCarePackage(data: $data) {
    name
    id
  }
}
    `;
export type UpdateTypeCarePackageMutationFn = Apollo.MutationFunction<UpdateTypeCarePackageMutation, UpdateTypeCarePackageMutationVariables>;

/**
 * __useUpdateTypeCarePackageMutation__
 *
 * To run a mutation, you first call `useUpdateTypeCarePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTypeCarePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTypeCarePackageMutation, { data, loading, error }] = useUpdateTypeCarePackageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTypeCarePackageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTypeCarePackageMutation, UpdateTypeCarePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTypeCarePackageMutation, UpdateTypeCarePackageMutationVariables>(UpdateTypeCarePackageDocument, options);
      }
export type UpdateTypeCarePackageMutationHookResult = ReturnType<typeof useUpdateTypeCarePackageMutation>;
export type UpdateTypeCarePackageMutationResult = Apollo.MutationResult<UpdateTypeCarePackageMutation>;
export type UpdateTypeCarePackageMutationOptions = Apollo.BaseMutationOptions<UpdateTypeCarePackageMutation, UpdateTypeCarePackageMutationVariables>;
export const CreatePersonDocument = gql`
    mutation CreatePerson($data: CreatePersonInput!) {
  createPerson(data: $data) {
    id
  }
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const GetPersonDocument = gql`
    query GetPerson($request: GetPersonInput!) {
  getPerson(request: $request) {
    id
    lastName
    name
    gender
    document
    hasChild
    birthdayDate
    Children {
      name
      lastName
      birthdayDate
      id
    }
  }
}
    `;

/**
 * __useGetPersonQuery__
 *
 * To run a query within a React component, call `useGetPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGetPersonQuery(baseOptions: Apollo.QueryHookOptions<GetPersonQuery, GetPersonQueryVariables> & ({ variables: GetPersonQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, options);
      }
export function useGetPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonQuery, GetPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, options);
        }
export function useGetPersonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPersonQuery, GetPersonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, options);
        }
export type GetPersonQueryHookResult = ReturnType<typeof useGetPersonQuery>;
export type GetPersonLazyQueryHookResult = ReturnType<typeof useGetPersonLazyQuery>;
export type GetPersonSuspenseQueryHookResult = ReturnType<typeof useGetPersonSuspenseQuery>;
export type GetPersonQueryResult = Apollo.QueryResult<GetPersonQuery, GetPersonQueryVariables>;
export const SearchCbPersonDocument = gql`
    query searchCbPerson($offset: Int!, $limit: Int!, $sort: PersonOrderByWithRelationInput, $where: PersonWhereInput) {
  getAllPersons(offset: $offset, limit: $limit, sort: $sort, where: $where) {
    Children {
      birthdayDate
      id
      lastName
      name
      gender
    }
    hasChild
    document
    gender
    lastName
    name
    birthdayDate
    id
  }
}
    `;

/**
 * __useSearchCbPersonQuery__
 *
 * To run a query within a React component, call `useSearchCbPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCbPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCbPersonQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      sort: // value for 'sort'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSearchCbPersonQuery(baseOptions: Apollo.QueryHookOptions<SearchCbPersonQuery, SearchCbPersonQueryVariables> & ({ variables: SearchCbPersonQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCbPersonQuery, SearchCbPersonQueryVariables>(SearchCbPersonDocument, options);
      }
export function useSearchCbPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCbPersonQuery, SearchCbPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCbPersonQuery, SearchCbPersonQueryVariables>(SearchCbPersonDocument, options);
        }
export function useSearchCbPersonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchCbPersonQuery, SearchCbPersonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchCbPersonQuery, SearchCbPersonQueryVariables>(SearchCbPersonDocument, options);
        }
export type SearchCbPersonQueryHookResult = ReturnType<typeof useSearchCbPersonQuery>;
export type SearchCbPersonLazyQueryHookResult = ReturnType<typeof useSearchCbPersonLazyQuery>;
export type SearchCbPersonSuspenseQueryHookResult = ReturnType<typeof useSearchCbPersonSuspenseQuery>;
export type SearchCbPersonQueryResult = Apollo.QueryResult<SearchCbPersonQuery, SearchCbPersonQueryVariables>;
export const UpdatePersonDocument = gql`
    mutation UpdatePerson($data: UpdatePersonInput!) {
  updatePerson(data: $data) {
    id
  }
}
    `;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
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