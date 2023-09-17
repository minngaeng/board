import { useRouter } from 'next/router';
import * as S from './Navigation.style';
import { MouseEvent } from 'react';

export default function Navigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    // router.push('/mypage');
    router.push(event.currentTarget.id);
  };

  // const onClickMarket = () => {
  //   router.push('/market');
  // };

  // const onClickBoards = () => {
  //   router.push('/boards');
  // };

  return (
    <S.Navigation>
      <S.NavigateWrapper>
        <S.Mypage id="/mypage" onClick={onClickMenu}>
          MYPAGE
        </S.Mypage>
        <S.Market id="/market" onClick={onClickMenu}>
          MARKET
        </S.Market>
        <S.Boards id="/boards" onClick={onClickMenu}>
          BOARDS
        </S.Boards>
      </S.NavigateWrapper>
    </S.Navigation>
  );
}
