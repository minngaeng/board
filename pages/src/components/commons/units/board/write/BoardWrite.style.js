import styled from '@emotion/styled';

export const Freeboard = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FreeboardTitle = styled.h1`
  text-align: center;
  padding: 1.5rem 0;
`;

export const WriterInput = styled.input`
  margin-top: 0.8rem;
  height: 2rem;
  padding-left: 0.5rem;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const PWInput = styled.input`
  margin-top: 0.8rem;
  height: 2rem;
`;

export const PWWrapper = styled(WriterWrapper)``;

export const WriterPWBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
`;

export const Title = styled.input`
  /* width: inherit; */
  margin-top: 0.8rem;
  height: 2.5rem;
  padding-left: 0.5rem;
`;

export const TitleWrapper = styled(PWWrapper)`
  width: 80%;
  padding: 1rem 0;
`;

export const Contents = styled.input`
  margin-top: 0.8rem;
  height: 10rem;
  padding-left: 0.5rem;
`;

export const ContentsWrapper = styled(TitleWrapper)`
  width: 80%;
`;

export const PostCode = styled.input`
  width: 55%;
  margin-top: 0.8rem;
  height: 2rem;
`;

export const AddressWrapper = styled(ContentsWrapper)`
  width: 80%;
`;

export const PostCodeSearchBox = styled.div`
  display: flex;
  /* border: 1px solid black; */
  width: 40%;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

export const SearchBtn = styled.button`
  height: 2.4rem;
  background-color: pink;

  width: 40%;
  /* border: none; */
`;

export const Address = styled.input`
  margin-top: 0.8rem;
  height: 2rem;
`;

export const Youtube = styled.input`
  margin-top: 0.8rem;
  height: 2rem;
`;

export const YoutubeWrapper = styled(AddressWrapper)``;

export const FinalButton = styled.button`
  width: 30%;
  height: 2rem;
  margin: 2rem 0;

  background-color: ${(props) => (props.isActive ? 'red' : '')};
`;

export const ErrorMessage = styled.p`
  color: red;
`;
