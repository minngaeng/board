import styled from '@emotion/styled';

export const BoardListUI = styled.div`
  margin: 10rem auto;
  width: 80%;
`;

export const BoardListTable = styled.table`
  border: 1px solid black;
  width: 100%;
`;

export const BoardListHeadNumber = styled.th`
  width: 10%;
`;

export const BoardListHeadTitle = styled.th`
  width: 40%;
`;

export const BoardListHeadWriter = styled.th`
  width: 25%;
`;

export const BoardListHeadDate = styled.th`
  width: 25%;
`;

export const BoardListContents = styled.td`
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const PencilImage = styled.div`
  display: inline;
`;
