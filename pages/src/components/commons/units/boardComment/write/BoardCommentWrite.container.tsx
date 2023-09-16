import { useMutation } from '@apollo/client';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';

export default function BoardCommentWrite() {
  const router = useRouter();

  const [value, setValue] = useState(3);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.currentTarget.value);
  };

  const onClickPostComment = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setWriter('');
      setContents('');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickPostComment={onClickPostComment}
      contents={contents}
      writer={writer}
    />
  );
}
