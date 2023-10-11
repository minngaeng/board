import Paginations01 from '../../../paginations/01/Paginations01.container';
import Search01 from '../../../search/01/Search01.container';
import * as S from './BoardList.style';
import { IBOARDLISTUIProps } from './BoardList.types';
import { v4 as uuidv4 } from 'uuid';

export default function BoardListUI(props: IBOARDLISTUIProps): JSX.Element {
  return (
    <S.BoardListUI>
      <Search01
        refetchBoardsCount={props.refetchBoardsCount}
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.BoardListTable>
        <S.BoardListHeadNumber>번호</S.BoardListHeadNumber>
        <S.BoardListHeadTitle>제목</S.BoardListHeadTitle>
        <S.BoardListHeadWriter>작성자</S.BoardListHeadWriter>
        <S.BoardListHeadDate>날짜</S.BoardListHeadDate>
        {props.data?.fetchBoards.map((el) => (
          <S.TableRow id={el._id} onClick={props.onClickMoveDetail}>
            <S.BoardListContents>
              {el._id.slice(-4).toUpperCase()}
            </S.BoardListContents>
            <S.BoardListContents>
              {el.title
                .replaceAll(props.keyword, `@#$${props.keyword}@#$`)
                .split('@#$')
                .map((el) => (
                  <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </S.TextToken>
                ))}
            </S.BoardListContents>
            <S.BoardListContents>{el.writer}</S.BoardListContents>
            <S.BoardListContents>
              {el.createdAt.split('T')[0]}
            </S.BoardListContents>
          </S.TableRow>
        ))}
      </S.BoardListTable>
      <S.BottomWrapper>
        <S.NewPost onClick={props.onClickMoveBoardNew}>
          <S.PencilImage>
            <img src="/image/pencil.png" />
          </S.PencilImage>
          <p>새 글 등록하기</p>
        </S.NewPost>
        <Paginations01
          refetch={props.refetch}
          dataBoardsCount={props.dataBoardsCount}
        />
      </S.BottomWrapper>
    </S.BoardListUI>
  );
}
