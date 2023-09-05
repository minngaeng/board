import { gql, useQuery } from '@apollo/client';
import * as S from '../../../styles/detail.style';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Detail() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);
  return (
    <S.Detail>
      <S.Profile>작성자:{data?.fetchBoard?.writer}</S.Profile>
      <hr />
      <hr />

      <S.Title>제목:{data?.fetchBoard?.title}</S.Title>
      <p>내용:{data?.fetchBoard?.contents}</p>
    </S.Detail>
  );
}
