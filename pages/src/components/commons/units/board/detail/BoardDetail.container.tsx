import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';
import {
  IMutation,
  IMutationDeleteBoardArgs,
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

  const [deleteBoard] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickBoards = () => {
    router.push('/boards');
  };

  const onClickDelete = async () => {
    if (typeof router.query.boardId !== 'string') return;
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      alert('성공적으로 삭제를 했습니다.');
      router.push('/boards');
    } catch (errors) {
      if (errors instanceof Error) alert(errors.message);
    }
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
      onClickBoards={onClickBoards}
      // onClickLikeBoard={onClickLikeBoard}
      onClickDelete={onClickDelete}
    />
  );
}
