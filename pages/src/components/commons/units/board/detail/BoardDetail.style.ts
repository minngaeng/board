import styled from '@emotion/styled';

export const Detail = styled.div`
  margin: 2rem auto;
  width: 80%;
  height: 50rem;
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
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const UserIcon = styled.div`
  padding: 0 0.5rem;
`;

export const Writer = styled.p`
  font-size: 1.2rem;
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

export const EditButton = styled.button`
  margin-top: 26rem;
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
