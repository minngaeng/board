import { UserOutlined } from '@ant-design/icons';
import * as S from './BoardDetail.style';
import { IBoardDetailUIProps } from './BoardDetail.types';
import { Tooltip } from 'antd';
import ReactPlayer from 'react-player';

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Detail>
      <S.Profile>
        <S.UserWrapper>
          <S.UserIcon>
            <UserOutlined />
          </S.UserIcon>
          <S.Writer> {props.data?.fetchBoard?.writer}</S.Writer>
        </S.UserWrapper>
        <Tooltip title={props.data?.fetchBoard?.boardAddress?.address ?? ''}>
          <S.Marker>
            <img src="/image/location-pin.png" />
          </S.Marker>
        </Tooltip>
      </S.Profile>

      <S.TitleWrapper>
        <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      </S.TitleWrapper>
      <S.ContentsWrapper>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>{' '}
        <S.ImageWrapper>
          {props.data?.fetchBoard.images
            ?.filter((el) => el !== '')
            .map((el) => (
              <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImageWrapper>
        {props.data?.fetchBoard.youtubeUrl && (
          <S.PlayerWrapper>
            <S.Player url={props.data?.fetchBoard.youtubeUrl} />
          </S.PlayerWrapper>
        )}
      </S.ContentsWrapper>
      <S.Bottom>
        {/* <S.LikeButtonWrapper>
          <img src="/image/like.png" alt="like-button" />
        </S.LikeButtonWrapper> */}
        <S.ButtonWrapper>
          <S.EditButton onClick={props.onClickBoards}>
            목록으로가기
          </S.EditButton>
          <S.EditButton onClick={props.onClickEdit}>수정하러가기</S.EditButton>
          <S.EditButton onClick={props.onClickDelete}>삭제하기</S.EditButton>
        </S.ButtonWrapper>
      </S.Bottom>
    </S.Detail>
  );
}
