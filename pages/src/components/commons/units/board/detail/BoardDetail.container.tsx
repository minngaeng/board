import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../../../../../src/commons/types/generated/types';
import { useState } from 'react';

export default function BoardDetail() {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') return <></>;

  const [like, setLike] = useState(0);
  const [likeBoard] = useMutation<
    Pick<IMutation, 'likeBoard'>,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  const onClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // const onClickLikeBoard = () => {
  //   setLike((prev) => prev + 1);

  //   const result = likeBoard({
  //     variables: {
  //       boardId: router.query.boardId,
  //     },
  //   });
  // };

  return (
    <BoardDetailUI
      data={data}
      onClickEdit={onClickEdit}
      // onClickLikeBoard={onClickLikeBoard}
    />
  );
}
