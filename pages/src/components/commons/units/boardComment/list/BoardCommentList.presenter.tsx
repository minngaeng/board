import * as S from './BoardCommentList.style';
import { IBoardCommentListUIProps } from './BoardComment.types';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
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
          <button id={el._id} onClick={props.onClickDelete}>
            삭제하기
          </button>
          <S.Comments>{el.contents}</S.Comments>
          <p>{el.createdAt.split('T')[0]}</p>
        </>
      ))}
    </S.BoardCommentListUI>
  );
}
