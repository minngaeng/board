import { gql } from '@apollo/client';

export const FETCO_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;
