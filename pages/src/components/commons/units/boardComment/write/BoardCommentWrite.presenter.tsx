import * as S from './BoardCommentWrite.style';
import { IBoardCommentWriiteUIProps } from './BoardCommentWrite.types';

export default function BoardCommentWriteUI(props: IBoardCommentWriiteUIProps) {
  return (
    <S.BoardCommentWriteUI>
      <S.HeaderWriterPwd>
        <S.WriterInput
          value={props.writer ? props.writer : props.el?.writer ?? ''}
          onChange={props.onChangeWriter}
          placeholder="작성자"
        />
        <S.PasswordInput
          onChange={props.onChangePassword}
          placeholder="비밀번호"
        />
        <S.RateStar
          value={props.el?.rating ? props.el?.rating : props?.star}
          onChange={props.setStar}
        />
      </S.HeaderWriterPwd>
      <S.CommentInputWrapper>
        <S.CommentInput
          value={props.contents ? props.contents : props.el?.contents}
          onChange={props.onChangeContents}
        />
      </S.CommentInputWrapper>
      <S.Bottom>
        {/* <button>취소</button> */}
        <S.CommentWriteButton
          onClick={
            props.isEdit ? props.onClickUpdateComment : props.onClickPostComment
          }
        >
        {props.isEdit ? '수정하기' : '등록하기'}
        </S.CommentWriteButton>
      </S.Bottom>
    </S.BoardCommentWriteUI>
  );
}
