import { ChangeEvent, MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../../../../src/commons/types/generated/types';
import { ApolloQueryResult } from '@apollo/client';

export interface IBOARDLISTUIProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickMoveDetail: (event: MouseEvent<HTMLTableRowElement>) => void;
  onClickMoveBoardNew: () => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  dataBoardsCount: Pick<IQuery, 'fetchBoardsCount'> | undefined;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoardsCount'>>>;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
