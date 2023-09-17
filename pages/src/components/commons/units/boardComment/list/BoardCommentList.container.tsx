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
import { ChangeEvent, MouseEvent, useState } from 'react';

export default function BoardCommentList() {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') {
    return null;
  }

  const [password, setPassword] = useState('');
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState('');

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickDeleteModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDeleteModal((prev) => !prev);
    setBoardCommentId(event.currentTarget.id);
  };

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
    // const password = window.prompt('비밀번호를 입력해주세요.');

    await deleteBoardComment({
      variables: {
        password,
        // boardCommentId: event.currentTarget.id,
        boardCommentId,
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
    setIsDeleteModal((prev) => !prev);
  };
  console.log('ID', boardCommentId);
  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      onClickDeleteModal={onClickDeleteModal}
      isDeleteModal={isDeleteModal}
      onChangePassword={onChangePassword}
    />
  );
}
