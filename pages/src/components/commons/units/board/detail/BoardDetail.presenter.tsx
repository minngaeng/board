import { IQuery } from '../../../../../../../src/commons/types/generated/types';
import * as S from './BoardDetail.style';

interface IBoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  onClickEdit: () => void;
}

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Detail>
      <S.Profile>
        <S.Writer>작성자 : {props.data?.fetchBoard?.writer}</S.Writer>
      </S.Profile>

      <S.Title>제목:{props.data?.fetchBoard?.title}</S.Title>
      <p>내용:{props.data?.fetchBoard?.contents}</p>
      <button onClick={props.onClickEdit}>수정하러가기</button>
    </S.Detail>
  );
}
