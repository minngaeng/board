import { MouseEvent } from 'react';
import { IQuery } from '../../../../../../../src/commons/types/generated/types';
import * as S from './BoardCommentList.style';

interface IBoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}

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
