import { ChangeEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../../../src/commons/types/generated/types';
import { ApolloQueryResult } from '@apollo/client';

export interface ISearch01 {
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearch01Ui {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
