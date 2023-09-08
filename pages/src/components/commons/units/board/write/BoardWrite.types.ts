import { ChangeEvent } from 'react';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInputProps {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickSubmit: () => void;
  writer: string;
  password: string;
  title: string;
  contents: string;
  isActive: boolean;
  isEdit: boolean;
  onClickEdit: () => void;
  data: any;
}
