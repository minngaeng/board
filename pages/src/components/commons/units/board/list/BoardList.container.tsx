import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from '../../../../../../../src/commons/types/generated/types';
import _ from 'lodash';

export default function BoardList() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
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

  const getDebounce = _.debounce((value: string) => {
    refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    // refetch({ search: event.target.value, page: 1 });
    getDebounce(event.currentTarget.value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveBoardNew={onClickMoveBoardNew}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount}
      onChangeSearch={onChangeSearch}
    />
  );
}
