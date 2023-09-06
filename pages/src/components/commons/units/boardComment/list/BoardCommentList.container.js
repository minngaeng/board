import { useMutation, useQuery } from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries';
import { useRouter } from 'next/router';

export default function BoardCommentList() {
  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickDelete = async () => {
    const password = window.prompt('비밀번호를 입력해주세요.');

    await deleteBoardComment({
      variables: {
        password,
        boardCommentId: event.target.id,
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
