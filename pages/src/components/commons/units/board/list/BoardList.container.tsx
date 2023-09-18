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
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPrev = () => {
    if (startPage === 1) return;
    refetch({ page: startPage - 10 });
    setStartPage(startPage - 10);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };
  console.log(lastPage);
  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      refetch({ page: startPage + 10 });
      setStartPage(startPage + 10);
    }
  };

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
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
