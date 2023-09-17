import styled from '@emotion/styled';

export const BoardCommentListUI = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 93%;
  height: 2rem;
  margin: 1rem 0;
`;

export const Header = styled.div`
  border: none;
  border-top: 1px solid #d3d3d3;
  width: inherit;
  margin-top: 1rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileImage = styled.div`
  width: 5%;
  img {
    width: 100%;
  }
`;

export const UserDetail = styled.div`
  padding: 0 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DeleteButtonImg = styled.img`
  border: none;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: white;
  width: 10%;
  cursor: pointer;
  height: 10px;

  &:hover {
    text-decoration: underline;
    color: #9b9b9b;
  }
`;

export const CommentWriter = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Date = styled.p`
  padding: 0 0.8rem;
  color: gray;
  font-size: 1rem;
`;

export const ContentsWrapper = styled.div`
  width: inherit;
`;

export const Comments = styled.div``;
