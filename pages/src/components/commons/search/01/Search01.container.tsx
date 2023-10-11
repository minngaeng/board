import { ChangeEvent } from 'react';
import Search01Ui from './Search01.presenter';
import { ISearch01 } from './Search01.types';
import _ from 'lodash';

export default function Search01(props: ISearch01) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    // refetch({ search: event.target.value, page: 1 });
    getDebounce(event.currentTarget.value);
  };
  return <Search01Ui onChangeSearch={onChangeSearch} />;
}
