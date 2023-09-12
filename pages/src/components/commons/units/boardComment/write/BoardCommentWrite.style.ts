import styled from '@emotion/styled';

export const BoardCommentWriteUI = styled.div`
  margin: 5rem auto;
  width: 80%;
`;

export const Header = styled.div``;

export const HeaderInput = styled.input`
  height: 2rem;
  padding-left: 0.5rem;
`;

export const CommentInput = styled.input`
  margin: 1rem 0;
  width: 100%;
  height: 4rem;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CommentWriteButton = styled.button`
  border: none;
  width: 20%;
  height: 35px;
  cursor: pointer;

  &:hover {
    background-color: #d6d6d6;
  }
`;
