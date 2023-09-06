import { gql } from '@apollo/client';

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      writer
      contents
      createdAt
    }
  }
`;
