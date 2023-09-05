import * as S from './BoardDetail.style';

export default function BoardDetailUI(props) {
  return (
    <S.Detail>
      <S.Profile>작성자:{props.data?.fetchBoard?.writer}</S.Profile>
      <hr />
      <hr />

      <S.Title>제목:{props.data?.fetchBoard?.title}</S.Title>
      <p>내용:{props.data?.fetchBoard?.contents}</p>
    </S.Detail>
  );
}
