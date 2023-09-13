import * as S from './BoardCommentList.style';
import { IBoardCommentListUIProps } from './BoardComment.types';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.BoardCommentListUI>
      {props.data?.fetchBoardComments.map((el) => (
        <>
          <S.Header>
            <S.UserInfo>
              <S.ProfileImage>
                <img src="/image/user.png" />
              </S.ProfileImage>
              <S.UserDetail>
                <S.CommentWriter>{el.writer}</S.CommentWriter>
                <S.Date>{el.createdAt.split('T')[0]}</S.Date>
              </S.UserDetail>
            </S.UserInfo>

            <S.DeleteButton id={el._id} onClick={props.onClickDelete}>
              삭제하기
            </S.DeleteButton>
          </S.Header>
          <S.ContentsWrapper>
            <S.Comments>{el.contents}</S.Comments>
          </S.ContentsWrapper>
        </>
      ))}
    </S.BoardCommentListUI>
  );
}
