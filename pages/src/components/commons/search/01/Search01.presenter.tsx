import * as S from './Search01.style';
import { ISearch01Ui } from './Search01.types';

export default function Search01Ui(props: ISearch01Ui) {
  return (
    <>
      <S.Search
        type="text"
        onChange={props.onChangeSearch}
        placeholder="검색어를 입력해주세요"
      />
    </>
  );
}
