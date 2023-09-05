import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickMoveDetail = (event) => {
    // router.push(`/boards/${data.fetchBoards._id}`);
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveBoardNew = () => {
    router.push('/boards/new');
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveBoardNew={onClickMoveBoardNew}
    />
  );
}
