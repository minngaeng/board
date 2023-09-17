import Banner from './banner/Banner';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      {props.children}
    </>
  );
}
