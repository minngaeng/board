import BoardCommentWrite from '../../src/components/commons/units/boardComment/write/BoardCommentWrite.container';
import BoardDetail from '../../../pages/src/components/commons/units/board/detail/BoardDetail.container';
import BoardCommentList from '../../src/components/commons/units/boardComment/list/BoardCommentList.container';

export default function Detail() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
