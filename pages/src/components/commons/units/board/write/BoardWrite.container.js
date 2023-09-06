import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD } from './BoardWrite.queries';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

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

    if (event.currentTarget.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setPasswordError('');
    }

    if (writer && event.currentTarget.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setTitleError('');
    }

    if (writer && password && event.currentTarget.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContetns(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setContentsError('');
    }

    if (writer && password && title && event.currentTarget.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
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
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onClickSubmit={onClickSubmit}
      writer={writer}
      password={password}
      title={title}
      contents={contents}
      isActive={isActive}
    />
  );
}
