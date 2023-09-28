import { ChangeEvent, RefObject } from 'react';
import { Address } from 'react-daum-postcode';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInputProps {
  title?: string;
  contents?: string;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
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
  showModal: () => void;
  isModalOpen: boolean;
  handleComplete: (data: Address) => void;
  zipcode: string;
  address: string;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  onChangeFileUrls: (imgUrl: string, index: number) => void;
}
