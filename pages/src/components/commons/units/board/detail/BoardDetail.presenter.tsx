import { UserOutlined } from '@ant-design/icons';
import * as S from './BoardDetail.style';
import { IBoardDetailUIProps } from './BoardDetail.types';

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Detail>
      <S.Profile>
        <S.UserIcon>
          <UserOutlined />
        </S.UserIcon>
        <S.Writer> {props.data?.fetchBoard?.writer}</S.Writer>
      </S.Profile>

      <S.TitleWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
      </S.ContentsWrapper>
      <S.EditButton onClick={props.onClickEdit}>수정하러가기</S.EditButton>
    </S.Detail>
  );
}
