import * as S from './BoardCommentList.style';

export default function BoardCommentListUI(props) {
  return (
    <S.BoardCommentListUI>
      {props.data?.fetchBoardComments.map((el) => (
        <>
          <S.Header>
            <S.ProfileImage>
              <img src="/image/user.png" />
            </S.ProfileImage>
            <S.CommentWriter>{el.writer}</S.CommentWriter>
          </S.Header>
          <S.Comments>{el.contents}</S.Comments>
          <p>{el.createdAt.split('T')[0]}</p>
        </>
      ))}
    </S.BoardCommentListUI>
  );
}
