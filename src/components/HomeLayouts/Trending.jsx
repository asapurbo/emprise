import HomeHeading from "../HomeComponents/HomeHeading";
import Container from "../commonComponents/Container";
import TrendingCart from "../HomeComponents/TrendingCart";
import TrendingCartData from "../../data/TrendingCartData";
import MainSlider from '../../slider/MainSlider'
const Trending = () => {
  const {trendingData: trendingData} = TrendingCartData();
  
  return (
    <section className="pb-s136">
      <Container>
        <div>
          <HomeHeading
            headTxt="Trending 2021"
            paraTxt="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>
        <MainSlider className="mt-16 justify-between" show='3'>
          {trendingData.map((item, index) => (
            <TrendingCart
              key={index}
              topSrc={item.topSrc}
              topAlt={item.topAlt}
              headTxt={item.headTxt}
              paraTxt={item.paraTxt}
              price={item.price}
              days={item.days}
              rating={item.rating}
              discountTxt={item.discountTxt}
              infoData={item}
            />
          ))}
        </MainSlider>
      </Container>
    </section>
  );
};

export default Trending;
