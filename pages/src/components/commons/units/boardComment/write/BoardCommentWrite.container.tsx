import { useMutation } from '@apollo/client';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from './BoardCommentWrite.queries';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import {
  IBoardCommentWriiteProps,
  IUpdateBoardCommentInputProps,
} from './BoardCommentWrite.types';

export default function BoardCommentWrite(props: IBoardCommentWriiteProps) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');
  const [star, setStar] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
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
            rating: star,
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
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setWriter('');
    setContents('');
    setStar(0);
  };

  const onClickUpdateComment = async () => {
    const updateBoardCommentInput: IUpdateBoardCommentInputProps = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (star) updateBoardCommentInput.rating = star;

    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error);
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
      star={star}
      setStar={setStar}
      el={props.el}
      isEdit={props.isEdit}
      onClickUpdateComment={onClickUpdateComment}
    />
  );
}
