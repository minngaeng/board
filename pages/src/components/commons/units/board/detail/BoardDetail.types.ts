import { IQuery } from '../../../../../../../src/commons/types/generated/types';

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  onClickEdit: () => void;
  onClickBoards: () => void;
  onClickDelete: () => void;
}
