import * as S from './BoardList.style';

export default function BoardListUI(props) {
  return (
    <S.BoardListUI>
      <S.BoardListTable>
        <S.BoardListHeadNumber>번호</S.BoardListHeadNumber>
        <S.BoardListHeadTitle>제목</S.BoardListHeadTitle>
        <S.BoardListHeadWriter>작성자</S.BoardListHeadWriter>
        <S.BoardListHeadDate>날짜</S.BoardListHeadDate>
        {props.data?.fetchBoards.map((el) => (
          <tr>
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
    </S.BoardListUI>
  );
}
