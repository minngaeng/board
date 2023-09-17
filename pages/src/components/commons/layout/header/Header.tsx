import { useRouter } from 'next/router';
import * as S from './Header.style';

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push('/boards');
  };
  return (
    <S.Header>
      <S.LogoWrapper onClick={onClickLogo}>
        <img src="/image/logo.png" />
      </S.LogoWrapper>

      <S.AuthWrapper>
        <S.LoginWrapper>
          <img src="/image/Login.png" />
        </S.LoginWrapper>
        <S.SignupWrapper>
          <img src="/image/Sign Up.png" />
        </S.SignupWrapper>
      </S.AuthWrapper>
    </S.Header>
  );
}
