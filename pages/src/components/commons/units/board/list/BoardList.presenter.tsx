import * as S from './BoardList.style';
import { IBOARDLISTUIProps } from './BoardList.types';

export default function BoardListUI(props: IBOARDLISTUIProps): JSX.Element {
  return (
    <S.BoardListUI>
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
            <S.BoardListContents>{el.title}</S.BoardListContents>
            <S.BoardListContents>{el.writer}</S.BoardListContents>
            <S.BoardListContents>
              {el.createdAt.split('T')[0]}
            </S.BoardListContents>
          </S.TableRow>
        ))}
      </S.BoardListTable>
      <S.ButtonWrapper>
        <S.NewPost onClick={props.onClickMoveBoardNew}>
          <S.PencilImage>
            <img src="/image/pencil.png" />
          </S.PencilImage>
          <p>새 글 등록하기</p>
        </S.NewPost>
        <span onClick={props.onClickPrev}>prev</span>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.Page
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
              >
                {index + props.startPage}
              </S.Page>
            )
        )}
        <span onClick={props.onClickNext}>next</span>
      </S.ButtonWrapper>
    </S.BoardListUI>
  );
}
