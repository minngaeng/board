import { Rate } from 'antd';
import styled from '@emotion/styled';

export const BoardCommentWriteUI = styled.div`
  margin: 0 auto;

  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWriterPwd = styled.div`
  width: 100%;
`;

export const WriterInput = styled.input`
  height: 2rem;
  padding-left: 0.5rem;
`;

export const PasswordInput = styled(WriterInput)`
  margin: 0 0.5rem;
`;

export const RateStar = styled(Rate)`
  padding: 0 1rem;
`;

export const CommentInputWrapper = styled.div`
  width: 100%;
`;

export const CommentInput = styled.input`
  margin: 1rem 0;
  width: 100%;
  height: 4.5rem;
`;

export const Bottom = styled.div`
  width: 100%;
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
