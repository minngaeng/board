import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const Detail = styled.div`
  margin: 2rem auto;
  width: 80%;
  height: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  font-size: 2rem;
  width: inherit;
  padding-top: 3.8rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserIcon = styled.div`
  padding: 0 0.5rem;
`;

export const Writer = styled.p`
  font-size: 1.2rem;
`;

export const Marker = styled.div`
  img {
    width: 45%;
  }
`;

export const TitleWrapper = styled.div`
  /* padding: 2rem 0; */
  width: inherit;
`;

export const Title = styled.p`
  padding: 0 1rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const ContentsWrapper = styled.div`
  width: 80%;
  padding: 1rem 0;
`;

export const Contents = styled.p`
  padding: 0 1rem;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`;

export const Player = styled(ReactPlayer)``;

export const Bottom = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LikeButtonWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 3rem;

  img {
    width: 50%;
  }
`;

export const EditButton = styled.button`
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  width: 20%;
  height: 45px;

  &:hover {
    background-color: #f2f2f2;
  }
`;
