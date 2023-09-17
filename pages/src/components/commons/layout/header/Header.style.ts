import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const LogoWrapper = styled.div`
  width: 15%;
  padding: 0 1.5rem;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 15%;
`;

export const LoginWrapper = styled.div`
  width: 25%;

  img {
    width: 100%;
  }
`;

export const SignupWrapper = styled.div`
  width: 30%;

  img {
    width: 100%;
  }
`;
