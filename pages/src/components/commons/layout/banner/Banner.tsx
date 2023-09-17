import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.style';

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <S.BannerWrapper>
        <img src="/image/categories.png" />
      </S.BannerWrapper>
      <S.BannerWrapper>
        <img src="/image/Featured.png" />
      </S.BannerWrapper>
    </Slider>
  );
}
