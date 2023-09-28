import { ChangeEvent, RefObject } from 'react';

export interface IUploads01Props {
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  imageUrls: string;
  index: number;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  imageUrls: string;
  onClickImage: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
