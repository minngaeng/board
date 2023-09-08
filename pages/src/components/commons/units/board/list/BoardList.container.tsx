import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../../../../../src/commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  console.log(data);

  const onClickMoveDetail = (event: MouseEvent<HTMLTableRowElement>): void => {
    // router.push(`/boards/${data.fetchBoards._id}`);
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveBoardNew = (): void => {
    router.push('/boards/new');
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveBoardNew={onClickMoveBoardNew}
    />
  );
}
