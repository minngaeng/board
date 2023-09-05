import { ApolloCache, ApolloProvider, InMemoryCache } from '@apollo/client';

export default function App({ Component, pageProps }) {
  const client = new ApolloCache({
    uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
