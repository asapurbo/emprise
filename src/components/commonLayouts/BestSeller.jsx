import HomeHeading from "../HomeComponents/HomeHeading";
import BestSellerCart from "../commonComponents/BestSellerCart";
import Container from "../commonComponents/Container";
import train from "../../assets/train.png";
import sea from "../../assets/sea.png";
import tri from "../../assets/tri.png";
import Flex from "../commonComponents/Flex";

const BestSeller = () => {
  const BestSellerData = [
    {
      src: train,
      pettyTxt: "10 Days | 09 Night",
      leargeTxt: "$895.50",
      headTxt: "Train Tour Skyline",
      paraTxt:"Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking",
      percentage: "50%",
    },
    {
      src: sea,
      pettyTxt: "10 Days | 09 Night",
      leargeTxt: "$1024.90",
      headTxt: "Sea Nature Views",
      paraTxt:
        "Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking",
    },
    {
      src: tri,
      pettyTxt: "10 Days | 09 Night",
      leargeTxt: "$1947.00",
      headTxt: "Trilogy Market Ptr",
      paraTxt:
        "Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking",
      percentage: "15%",
    },
  ];
  return (
    <section className="pb-s136">
      <Container>
        <Flex className="justify-between items-center">
          <HomeHeading
            headTxt="Best Seller"
            paraTxt="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
          <button className="font-pop text-2xl font-normal text-white bg-searchColor py-5 px-10 rounded-full">Check All</button>
        </Flex>
        <Flex className="mt-16 justify-between">
          {BestSellerData.map((item, index) => (
            <BestSellerCart
              key={index}
              src={item.src}
              pettyTxt={item.pettyTxt}
              leargeTxt={item.leargeTxt}
              headTxt={item.headTxt}
              paraTxt={item.paraTxt}
              percentage={item.percentage}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default BestSeller;
