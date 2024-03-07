import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Next from "./Next";
import Previous from "./Previous";

const MainSlider = ({ children, show }) => {
  let slidesToShow = parseFloat(show)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Previous />,
  };

  return (
    <div>
      <Slider {...settings} className="relative">
        {children}
      </Slider>
    </div>
  );
};

export default MainSlider;
