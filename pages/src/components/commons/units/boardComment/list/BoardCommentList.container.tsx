import { useMutation, useQuery } from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries';

import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from '../../../../../../../src/commons/types/generated/types';
import { useRouter } from 'next/router';

export default function BoardCommentList() {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') {
    return null;
  }

  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const loadFunc = () => {
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...(prev?.fetchBoardComments ?? []),
            ...(fetchMoreResult.fetchBoardComments ?? []),
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} loadFunc={loadFunc} />;
}
