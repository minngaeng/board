import * as S from './Paginations01.styles';
import { IPaginations01UIProps } from './Paginations01.types';

export default function Paginations01UI(props:IPaginations01UIProps) {
  return(

    <S.ClickPageWrapper>
          <span onClick={props.onClickPrev}>prev</span>
          {new Array(10).fill(1).map(
            (_, index) =>
              index + props.startPage <= props.lastPage && (
                <S.Page
                  id={String(index + props.startPage)}
                  onClick={props.onClickPage}
                  isActive={props.startPage + index === props.clickPage}
                >
                  {index + props.startPage}
                </S.Page>
              )
          )}
          <span onClick={props.onClickNext}>next</span>
        </S.ClickPageWrapper>
  )
}
