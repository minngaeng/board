import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { IBoardComment } from '../../../../../../../src/commons/types/generated/types';

export interface IBoardCommentWriiteUIProps {
  onChangeWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPostComment?: () => void;
  contents?: string;
  writer?: string;
  star?: number;
  setStar?: (value: number) => void;
  el?: IBoardComment;
  isEdit?: boolean;
  onClickUpdateComment?: () => void;
}

export interface IBoardCommentWriiteProps {
  el?: IBoardComment;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IUpdateBoardCommentInputProps {
  rating?: number;
  contents?: string;
}
