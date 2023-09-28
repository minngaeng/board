import { ChangeEvent, useRef } from 'react';

import Uploads01UI from './Uploads01.presenter';
import { IUploads01Props } from './Upload01.types';
import { useMutation } from '@apollo/client';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../../../../src/commons/types/generated/types';
import { UPLOAD_FILE } from '../../units/board/write/BoardWrite.queries';

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const result = await uploadFile({
      variables: { file },
    });

    props.onChangeFileUrls(result.data?.uploadFile.url ?? '', props.index);
  };

  return (
    <Uploads01UI
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      imageUrls={props.imageUrls}
    />
  );
}
