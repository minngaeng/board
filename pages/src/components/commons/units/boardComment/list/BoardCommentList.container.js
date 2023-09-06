import { useQuery } from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';
import { useRouter } from 'next/router';

export default function BoardCommentList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  console.log('쿼리문 잘 나오는지', data);

  return <BoardCommentListUI data={data} />;
}
