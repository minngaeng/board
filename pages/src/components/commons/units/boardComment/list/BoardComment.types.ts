import { ChangeEvent, MouseEvent } from 'react';
import { IQuery } from '../../../../../../../src/commons/types/generated/types';

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteModal: (event: MouseEvent<HTMLButtonElement>) => void;
  isDeleteModal: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
