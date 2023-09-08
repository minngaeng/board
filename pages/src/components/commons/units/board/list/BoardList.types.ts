import { MouseEvent } from 'react';
import { IQuery } from '../../../../../../../src/commons/types/generated/types';

export interface IBOARDLISTUIProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickMoveDetail: (event: MouseEvent<HTMLTableRowElement>) => void;
  onClickMoveBoardNew: () => void;
}