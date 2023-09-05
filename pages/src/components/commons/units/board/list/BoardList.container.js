import { useQuery } from '@apollo/client';
import BoardListUI from './BoardList.presenter';
import { FETCO_BOARDS } from './BoardList.queries';

export default function BoardList() {
  const { data } = useQuery(FETCO_BOARDS);
  console.log(data);
  return <BoardListUI data={data} />;
}
