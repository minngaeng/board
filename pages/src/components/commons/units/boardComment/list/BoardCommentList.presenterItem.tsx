import { useState } from 'react';
import { IBoardCommentListItemProps } from './BoardComment.types';
import * as S from './BoardCommentList.style';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent } from 'react';
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from '../../../../../../../src/commons/types/generated/types';
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from './BoardCommentList.queries';
import { useMutation } from '@apollo/client';
import BoardCommentWrite from '../write/BoardCommentWrite.container';

export default function BoardCommentListItem(
  props: IBoardCommentListItemProps
) {
  const router = useRouter();
  if (typeof router.query.boardId !== 'string') {
    return null;
  }

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const [password, setPassword] = useState('');
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState('');

  const [isEdit, setIsEdit] = useState(false);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDeleteModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDeleteModal((prev) => !prev);
    setBoardCommentId(event.currentTarget.id);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    // const password = window.prompt('비밀번호를 입력해주세요.');

    await deleteBoardComment({
      variables: {
        password,
        // boardCommentId: event.currentTarget.id,
        boardCommentId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
    setIsDeleteModal((prev) => !prev);
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <S.BoardCommentListUI>
      {isDeleteModal && (
        <Modal
          onOk={onClickDelete}
          visible={true}
          onCancel={onClickDeleteModal}
        >
          <div>비밀번호 입력</div>
          <S.PasswordInput onChange={onChangePassword} />
        </Modal>
      )}
      {!isEdit ? (
        <>
          <S.Header>
            <S.UserInfo>
              <S.ProfileImage>
                <img src="/image/user.png" />
              </S.ProfileImage>
              <S.UserDetail>
                <S.CommentWriter>{props.el.writer}</S.CommentWriter>
                <S.Date>{props.el.createdAt.split('T')[0]}</S.Date>
                <p>
                  <S.Rating value={props.el.rating} />
                </p>
              </S.UserDetail>
            </S.UserInfo>

            <S.DeleteButton id={props.el._id} onClick={onClickDeleteModal}>
              삭제하기
            </S.DeleteButton>
            <S.DeleteButton onClick={onClickEdit}>수정하기</S.DeleteButton>
            {isDeleteModal && <Modal></Modal>}
          </S.Header>
          <S.ContentsWrapper>
            <S.Comments>{props.el.contents}</S.Comments>
          </S.ContentsWrapper>
        </>
      ) : (
        <S.EditInput>
          <BoardCommentWrite
            el={props.el}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </S.EditInput>
      )}
    </S.BoardCommentListUI>
  );
}
