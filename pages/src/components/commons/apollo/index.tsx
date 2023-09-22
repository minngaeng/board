import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const client = new ApolloClient({
    uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}