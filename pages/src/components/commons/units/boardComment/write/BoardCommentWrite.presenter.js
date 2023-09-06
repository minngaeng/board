import * as S from './BoardCommentWrite.style';

export default function BoardCommentWriteUI(props) {
  return (
    <S.BoardCommentWriteUI>
      <S.Header>
        <S.HeaderInput onChange={props.onChangeWriter} placeholder="작성자" />
        <S.HeaderInput
          onChange={props.onChangePassword}
          placeholder="비밀번호"
        />
      </S.Header>
      <div>
        <S.CommentInput onChange={props.onChangeContents} />
      </div>
      <S.Bottom>
        <S.CommentWriteButton onClick={props.onClickPostComment}>
          등록하기
        </S.CommentWriteButton>
      </S.Bottom>
    </S.BoardCommentWriteUI>
  );
}
