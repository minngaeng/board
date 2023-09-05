import * as S from './BoardWrite.style';

export default function BoardWriteUI(props) {
  return (
    <S.Freeboard>
      <S.FreeboardTitle>게시물 등록</S.FreeboardTitle>
      <S.WriterPWBox>
        <S.WriterWrapper>
          <label>작성자</label>
          <S.WriterInput
            onChange={props.onChangeWriter}
            value={props.writer}
            placeholder="작성자를 입력해주세요."
          />
          <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
        </S.WriterWrapper>
        <S.PWWrapper>
          <label>비밀번호</label>
          <S.PWInput
            onChange={props.onChangePassword}
            value={props.password}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
        </S.PWWrapper>
      </S.WriterPWBox>
      <S.TitleWrapper>
        <label>제목</label>
        <S.Title
          value={props.title}
          onChange={props.onChangeTitle}
          type="text"
          placeholder="제목을 입력해주세요."
        />
        <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <label>내용</label>
        <S.Contents
          onChange={props.onChangeContents}
          value={props.contents}
          placeholder="내용을 입력해주세요."
        />
        <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
      </S.ContentsWrapper>
      <S.AddressWrapper>
        <label>주소</label>
        <S.PostCodeSearchBox>
          <S.PostCode />
          <S.SearchBtn>우편번호 찾기</S.SearchBtn>
        </S.PostCodeSearchBox>
        <S.Address />
        <S.Address />
      </S.AddressWrapper>
      <S.YoutubeWrapper>
        <label>유튜브</label>
        <S.Youtube />
      </S.YoutubeWrapper>
      <S.FinalButton onClick={props.onClickSubmit}>등록하기</S.FinalButton>
      {/* <label>사진 첨부</label> */}
    </S.Freeboard>
  );
}
