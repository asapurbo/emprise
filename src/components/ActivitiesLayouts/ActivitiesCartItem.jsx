import TrendingCartData from "../../data/TrendingCartData";
import TrendingCart from "../HomeComponents/TrendingCart";
import Flex from "../commonComponents/Flex";

const ActivitiesCartItem = () => {
  const { trendingData: data } = TrendingCartData();
  return (
    <Flex className="flex-wrap justify-between w-[1060px]">
      {data.map(
        (item, index) =>
          index >= 3 && (
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
          )
      )}
    </Flex>
  );
};

export default ActivitiesCartItem;
