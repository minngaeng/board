import styled from '@emotion/styled';

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 4rem;
`;

export const NavigateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  font-family: 'navi-fontB';
  font-size: 1.2rem;
`;

export const Mypage = styled.div`
  cursor: pointer;
`;
export const Market = styled(Mypage)``;
export const Boards = styled(Mypage)``;
