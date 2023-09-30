import { ChangeEvent, MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
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
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
