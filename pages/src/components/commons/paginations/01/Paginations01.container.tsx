import { MouseEvent, useState } from 'react';
import Paginations01UI from './Paginations01.presenter';
import { IPaginations01Props } from './Paginations01.types';

export default function Paginations01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [clickPage, setClickPage] = useState(1);

  const lastPage = Math.ceil(
    (props.dataBoardsCount?.fetchBoardsCount ?? 10) / 10
  );

  const onClickPrev = () => {
    if (startPage === 1) return;
    props.refetch({ page: startPage - 10 });
    setStartPage(startPage - 10);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.currentTarget.id) });
    setClickPage(Number(event.currentTarget.id));
  };
  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      props.refetch({ page: startPage + 10 });
      setStartPage(startPage + 10);
    }
  };

  return (
    <Paginations01UI
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      lastPage={lastPage}
      clickPage={clickPage}
    />
  );
}
