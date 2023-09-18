import { MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../../../../src/commons/types/generated/types';
import { ApolloQueryResult } from '@apollo/client';

export interface IPaginations01UIProps {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  startPage: number;
  lastPage: number;
  clickPage: number;
}

export interface IPaginations01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  dataBoardsCount: Pick<IQuery, 'fetchBoardsCount'> | undefined;
}
