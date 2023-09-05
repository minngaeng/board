import { useState } from 'react';
import * as S from '../../styles/freeboard.style';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function freeboard() {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContetns] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const onChangeWriter = (event) => {
    setWriter(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setWriterError('');
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setPasswordError('');
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setTitleError('');
    }
  };

  const onChangeContents = (event) => {
    setContetns(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setContentsError('');
    }
  };

  const onClickSubmit = async () => {
    try {
      if (!writer) {
        setWriterError('작성자를 입력해주세요.');
      }
      if (!password) {
        setPasswordError('비밀번호를 입력해주세요.');
      }
      if (!title) {
        setTitleError('제목을 입력해주세요.');
      }
      if (!contents) {
        setContentsError('내용을 입력해주세요.');
      }
      if (writer && password && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        router.push(`/boards/${result.data?.createBoard._id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.Freeboard>
      <S.FreeboardTitle>게시물 등록</S.FreeboardTitle>
      <S.WriterPWBox>
        <S.WriterWrapper>
          <label>작성자</label>
          <S.WriterInput
            onChange={onChangeWriter}
            value={writer}
            placeholder="작성자를 입력해주세요."
          />
          <S.ErrorMessage>{writerError}</S.ErrorMessage>
        </S.WriterWrapper>
        <S.PWWrapper>
          <label>비밀번호</label>
          <S.PWInput
            onChange={onChangePassword}
            value={password}
            placeholder="비밀번호를 입력해주세요."
          />
          <S.ErrorMessage>{passwordError}</S.ErrorMessage>
        </S.PWWrapper>
      </S.WriterPWBox>
      <S.TitleWrapper>
        <label>제목</label>
        <S.Title
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 입력해주세요."
        />
        <S.ErrorMessage>{titleError}</S.ErrorMessage>
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <label>내용</label>
        <S.Contents
          onChange={onChangeContents}
          value={contents}
          placeholder="내용을 입력해주세요."
        />
        <S.ErrorMessage>{contentsError}</S.ErrorMessage>
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
      <S.FinalButton onClick={onClickSubmit}>등록하기</S.FinalButton>
      {/* <label>사진 첨부</label> */}
    </S.Freeboard>
  );
}
