import { ChangeEvent } from 'react';
import * as S from './BoardCommentWrite.style';

interface IBoardCommentWriiteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPostComment: () => void;
  contents: string;
  writer: string;
}

export default function BoardCommentWriteUI(props: IBoardCommentWriiteUIProps) {
  return (
    <S.BoardCommentWriteUI>
      <S.Header>
        <S.HeaderInput
          value={props.writer}
          onChange={props.onChangeWriter}
          placeholder="작성자"
        />
        <S.HeaderInput
          onChange={props.onChangePassword}
          placeholder="비밀번호"
        />
      </S.Header>
      <div>
        <S.CommentInput
          value={props.contents}
          onChange={props.onChangeContents}
        />
      </div>
      <S.Bottom>
        <S.CommentWriteButton onClick={props.onClickPostComment}>
          등록하기
        </S.CommentWriteButton>
      </S.Bottom>
    </S.BoardCommentWriteUI>
  );
}
