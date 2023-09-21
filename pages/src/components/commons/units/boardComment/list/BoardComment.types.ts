import { ChangeEvent, MouseEvent } from 'react';
import { IBoardComment, IQuery } from '../../../../../../../src/commons/types/generated/types';

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'> | undefined;

  loadFunc: () => void;
}

export interface IBoardCommentListItemProps {
  data?: Pick<IQuery, 'fetchBoardComments'> | undefined;
  el: IBoardComment;
}
