import { MouseEvent } from 'react';
import * as S from './BoardList.style';

interface IBOARDLISTUIProps {
  data: any;
  // onClickMoveDetail: (event: MouseEvent<HTMLTableRowElement>) => void;
  onClickMoveDetail:(event:MouseEvent<HTMLTableRowElement>)=>void
  onClickMoveBoardNew: () => void;
}

export default function BoardListUI(props: IBOARDLISTUIProps): JSX.Element {
  return (
    <S.BoardListUI>
      <S.BoardListTable>
        <S.BoardListHeadNumber>번호</S.BoardListHeadNumber>
        <S.BoardListHeadTitle>제목</S.BoardListHeadTitle>
        <S.BoardListHeadWriter>작성자</S.BoardListHeadWriter>
        <S.BoardListHeadDate>날짜</S.BoardListHeadDate>
        {props.data?.fetchBoards.map((el) => (
          <tr id={el._id} onClick={props.onClickMoveDetail}>
            <S.BoardListContents>
              {el._id.slice(-4).toUpperCase()}
            </S.BoardListContents>
            <S.BoardListContents>{el.title}</S.BoardListContents>
            <S.BoardListContents>{el.writer}</S.BoardListContents>
            <S.BoardListContents>
              {el.createdAt.split('T')[0]}
            </S.BoardListContents>
          </tr>
        ))}
      </S.BoardListTable>
      <div>
        <button onClick={props.onClickMoveBoardNew}>
          <S.PencilImage>
            <img src="/image/pencil.png" />
          </S.PencilImage>
          <span>새글 등록하기</span>
        </button>
      </div>
    </S.BoardListUI>
  );
}
