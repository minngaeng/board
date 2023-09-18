import styled from '@emotion/styled';

export const BoardListUI = styled.div`
  margin: 10rem auto;
  width: 80%;
`;

export const BoardListTable = styled.table`
  border: 3px solid #b7b7b7;
  width: 100%;
  border-top: 3px solid #b7b7b7;
  border-right: none;
  border-left: none;
  border-collapse: collapse;
`;

export const BoardListHeadNumber = styled.th`
  width: 10%;
  padding: 1.5rem 0;
  font-size: 1.3rem;
`;

export const BoardListHeadTitle = styled.th`
  width: 40%;
  padding: 1.5rem 0;
  font-size: 1rem;
`;

export const BoardListHeadWriter = styled.th`
  width: 25%;
  padding: 1.5rem 0;
  font-size: 1rem;
`;

export const BoardListHeadDate = styled.th`
  width: 25%;
  padding: 1.5rem 0;
  font-size: 1.3rem;
`;

export const TableRow = styled.tr`
  &:hover {
    color: #8f99f7;
  }
`;

export const BoardListContents = styled.td`
  text-align: center;
  padding: 1rem 0;
  cursor: pointer;
  border-top: 1px solid #b7b7b7;
`;

export const PencilImage = styled.div`
  display: inline;
`;

export const BottomWrapper = styled.div`
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewPost = styled.button`
  border: none;
  background-color: #f7f4f4;
  width: 10rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    background-color: #e2e2e2;
  }
`;

