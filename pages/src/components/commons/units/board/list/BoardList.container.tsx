import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../../../../src/commons/types/generated/types';

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveDetail = (event: MouseEvent<HTMLTableRowElement>): void => {
    // router.push(`/boards/${data.fetchBoards._id}`);
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveBoardNew = (): void => {
    router.push('/boards/new');
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveBoardNew={onClickMoveBoardNew}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount}
      refetchBoardsCount={refetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
