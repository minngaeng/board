import * as S from '../../styles/freeboard.style';

export default function freeboard() {
  return (
    <S.Freeboard>
      <S.FreeboardTitle>게시물 등록</S.FreeboardTitle>
      <S.WriterPWBox>
        <S.WriterWrapper>
          <label>작성자</label>
          <S.WriterInput placeholder="작성자를 입력해주세요." />
        </S.WriterWrapper>
        <S.PWWrapper>
          <label>비밀번호</label>
          <S.PWInput placeholder="비밀번호를 입력해주세요." />
        </S.PWWrapper>
      </S.WriterPWBox>
      <S.TitleWrapper>
        <label>제목</label>
        <S.Title placeholder="제목을 입력해주세요." />
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <label>내용</label>
        <S.Contents placeholder="내용을 입력해주세요." />
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
      <S.FinalButton>등록하기</S.FinalButton>
      {/* <label>사진 첨부</label> */}
    </S.Freeboard>
  );
}
