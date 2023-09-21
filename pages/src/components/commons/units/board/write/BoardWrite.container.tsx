import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { ChangeEvent, useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from '../../../../../../../src/commons/types/generated/types';
import { IBoardWriteProps, IUpdateBoardInputProps } from './BoardWrite.types';
import { Address } from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, 'updateBoard'>,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContetns] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtube, setYoutube] = useState('');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (data: Address) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen((prev) => !prev);
  };

  const showModal = () => {
    console.log(isModalOpen);
    setIsModalOpen((prev) => !prev);
  };

  const onChagneAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChagneYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setWriterError('');
    }

    if (event.currentTarget.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setPasswordError('');
    }

    if (writer && event.currentTarget.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setTitleError('');
    }

    if (writer && password && event.currentTarget.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContetns(event.currentTarget.value);

    if (event.currentTarget.value !== '') {
      setContentsError('');
    }

    if (writer && password && title && event.currentTarget.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async (): Promise<void> => {
    try {
      if (!writer) {
        setWriterError('작성자를 입력해주세요.');
      }
      if (!password) {
        setPasswordError('비밀번호를 입력해주세요.');
      }
      if (!title) {
        setTitleError('제목을 입력해주세요.');
      }
      if (!contents) {
        setContentsError('내용을 입력해주세요.');
      }
      if (writer && password && title && contents) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        console.log(result);
        router.push(`/boards/${result.data?.createBoard._id}`);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickEdit = async (): Promise<void> => {
    if (typeof router.query.boardId !== 'string') {
      return;
    }

    const updateBoardInput: IUpdateBoardInputProps = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtube) updateBoardInput.youtubeUrl = youtube;

    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};

      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          boardId: router.query.boardId,
          password,
        },
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (errors) {
      if (errors instanceof Error) alert(errors.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onClickSubmit={onClickSubmit}
      writer={writer}
      password={password}
      title={title}
      contents={contents}
      isActive={isActive}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={props.data}
      showModal={showModal}
      isModalOpen={isModalOpen}
      handleComplete={handleComplete}
      zipcode={zipcode}
      address={address}
      onChangeAddressDetail={onChagneAddressDetail}
      onChangeYoutube={onChagneYoutube}
    />
  );
}
