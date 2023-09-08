import { ChangeEvent } from 'react';

export interface IBoardCommentWriiteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPostComment: () => void;
  contents: string;
  writer: string;
}