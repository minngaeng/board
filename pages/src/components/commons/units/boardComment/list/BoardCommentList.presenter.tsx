import * as S from './BoardCommentList.style';
import { IBoardCommentListUIProps } from './BoardComment.types';

import InfiniteScroll from 'react-infinite-scroller';
import BoardCommentListItem from './BoardCommentList.presenterItem';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListItem key={el._id} data={props.data} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
