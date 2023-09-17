import * as S from './BoardCommentList.style';
import { IBoardCommentListUIProps } from './BoardComment.types';
import { Modal, Rate } from 'antd';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.BoardCommentListUI>
      {props.isDeleteModal && (
        <Modal
          onOk={props.onClickDelete}
          visible={true}
          onCancel={props.onClickDeleteModal}
        >
          <div>비밀번호 입력</div>
          <S.PasswordInput onChange={props.onChangePassword} />
        </Modal>
      )}
      {props.data?.fetchBoardComments.map((el) => (
        <>
          <S.Header>
            <S.UserInfo>
              <S.ProfileImage>
                <img src="/image/user.png" />
              </S.ProfileImage>
              <S.UserDetail>
                <S.CommentWriter>{el.writer}</S.CommentWriter>
                <S.Date>{el.createdAt.split('T')[0]}</S.Date>
                <Rate value={el.rating} />
              </S.UserDetail>
            </S.UserInfo>

            <S.DeleteButton id={el._id} onClick={props.onClickDeleteModal}>
              삭제하기
            </S.DeleteButton>
            {props.isDeleteModal && <Modal>d</Modal>}
          </S.Header>
          <S.ContentsWrapper>
            <S.Comments>{el.contents}</S.Comments>
          </S.ContentsWrapper>
        </>
      ))}
    </S.BoardCommentListUI>
  );
}
