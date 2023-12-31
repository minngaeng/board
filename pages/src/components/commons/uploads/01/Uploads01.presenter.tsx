import { IUploads01UIProps } from './Upload01.types';
import * as S from './Uploads01.style';

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.imageUrls !== '' ? (
        <S.ImageFile
          onClick={props.onClickImage}
          src={`https://storage.googleapis.com/${props.imageUrls}`}
        />
      ) : (
        <S.AddImage onClick={props.onClickImage}>+</S.AddImage>
      )}
      <S.Image type="file" onChange={props.onChangeFile} ref={props.fileRef} />

      <S.Image type="file" onChange={props.onChangeFile} />
    </>
  );
}
