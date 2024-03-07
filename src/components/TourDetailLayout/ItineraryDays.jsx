import ItineraryDayOne from "./ItineraryDayOne";
import ItineraryDaySecond from "./ItineraryDaySecond";
import ItineraryDayThird from "./ItineraryDayThird";
import ItineraryDayFourth from "./ItineraryDayFourth";
import ItineraryDayFifth from "./ItineraryDayFifth";
import ItineraryDaySixth from "./ItineraryDaySixth";
import ItineraryDaySeventh from "./ItineraryDaySeventh";
import Heading from "../commonComponents/Heading";
import Flex from "../commonComponents/Flex";
import itineraryIcon from "../../assets/itineraryIcon.png";
import Image from "../commonComponents/Image";

const ItineraryDays = () => {
  return (
    <Flex className='justify-between mt-16'>
      <div className="w-[72px]">
        <Image src={itineraryIcon} alt="image" />
      </div>
      <div className="w-[648px]">
        <ItineraryDayOne />
        <ItineraryDaySecond />
        <ItineraryDayThird />
        <ItineraryDayFourth />
        <ItineraryDayFifth />
        <ItineraryDaySixth />
        <ItineraryDaySeventh />
        <div className="pt-6 pb-4 pl-2 border-b border-solid border-acBdr">
          <Heading
            text="Show 12 more itinerary days"
            as="h3"
            className="font-pop text-base font-normal text-[#6C757D]"
          />
        </div>
      </div>
    </Flex>
  );
};

export default ItineraryDays;
