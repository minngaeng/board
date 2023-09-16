import { Button, Modal } from 'antd';
import * as S from './BoardWrite.style';
import { IBoardWriteUIProps } from './BoardWrite.types';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  console.log('페치데이터', props.data);
  return (
    <>
      {props.isModalOpen && (
        <Modal visible={true}>
          <DaumPostcodeEmbed onComplete={props.handleComplete} />
        </Modal>
      )}
      <S.Freeboard>
        <S.FreeboardTitle>
          게시물 {props.isEdit ? '수정' : '등록'}
        </S.FreeboardTitle>
        <S.WriterPWBox>
          <S.WriterWrapper>
            <label>작성자</label>
            <S.WriterInput
              onChange={props.onChangeWriter}
              // value={props.writer}
              placeholder="작성자를 입력해주세요."
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer}
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
            // value={props.title}
            onChange={props.onChangeTitle}
            type="text"
            placeholder="제목을 입력해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <label>내용</label>
          <S.Contents
            onChange={props.onChangeContents}
            // value={props.contents}
            placeholder="내용을 입력해주세요."
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.ContentsWrapper>
        <S.AddressWrapper>
          <label>주소</label>
          <S.PostCodeSearchBox>
            <S.PostCode
              value={
                props.zipcode
                  ? props.zipcode
                  : props.data?.fetchBoard?.boardAddress?.zipcode
              }
            />
            <S.SearchBtn onClick={props.showModal}>우편번호 찾기</S.SearchBtn>
          </S.PostCodeSearchBox>
          <S.Address
            value={
              props.address
                ? props.address
                : props.data?.fetchBoard?.boardAddress?.address
            }
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail}
          />
        </S.AddressWrapper>

        <S.YoutubeWrapper>
          <label>유튜브</label>
          <S.Youtube />
        </S.YoutubeWrapper>
        <S.FinalButton
          isActive={props.isEdit ? true : props.isActive}
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        >
          {props.isEdit ? '수정' : '등록'}하러가기
        </S.FinalButton>
        {/* <label>사진 첨부</label> */}
      </S.Freeboard>
    </>
  );
}
