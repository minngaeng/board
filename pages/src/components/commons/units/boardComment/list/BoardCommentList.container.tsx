import { useMutation, useQuery } from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries';
import { useRouter } from 'next/router';
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../../../../src/commons/types/generated/types';
import { MouseEvent } from 'react';

export default function BoardCommentList() {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') {
    return;
  }

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const password = window.prompt('비밀번호를 입력해주세요.');

    await deleteBoardComment({
      variables: {
        password,
        boardCommentId: event.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
