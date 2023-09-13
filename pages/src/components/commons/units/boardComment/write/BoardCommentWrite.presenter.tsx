import * as S from './BoardCommentWrite.style';
import { IBoardCommentWriiteUIProps } from './BoardCommentWrite.types';

export default function BoardCommentWriteUI(props: IBoardCommentWriiteUIProps) {
  return (
    <S.BoardCommentWriteUI>
      <S.HeaderWriterPwd>
        <S.WriterInput
          value={props.writer}
          onChange={props.onChangeWriter}
          placeholder="작성자"
        />
        <S.PasswordInput
          onChange={props.onChangePassword}
          placeholder="비밀번호"
        />
      </S.HeaderWriterPwd>
      <S.CommentInputWrapper>
        <S.CommentInput
          value={props.contents}
          onChange={props.onChangeContents}
        />
      </S.CommentInputWrapper>
      <S.Bottom>
        <S.CommentWriteButton onClick={props.onClickPostComment}>
          등록하기
        </S.CommentWriteButton>
      </S.Bottom>
    </S.BoardCommentWriteUI>
  );
}
