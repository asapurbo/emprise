import Heading from "../commonComponents/Heading";
import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import days from "../../assets/days.png";
import walking from "../../assets/walking.png";
import str from "../../assets/str.png";
import eg from "../../assets/eg.png";
import se from "../../assets/se.png";
import apr from "../../assets/apr.png";

const TourContentSecvice = () => {
  return (
    <div>
      <Flex className="justify-between">
        <div className="mt-14">
          <Heading
            text="Duration"
            as="h3"
            className="text-base font-normal font-pop text-heardColor"
          />
          <Flex className="items-center gap-x-2 mt-7 ">
            <Image src={days} alt="image" />
            <Heading
              text="2 Days"
              as="h3"
              className="text-base font-medium font-pop text-primaryColor"
            />
          </Flex>
        </div>

        <div className="mt-14">
          <Heading
            text="Activity"
            as="h3"
            className="text-base font-normal font-pop text-heardColor"
          />
          <Flex className="items-center gap-x-2 mt-7 ">
            <Image src={walking} alt="image" />
            <Heading
              text="Walking"
              as="h3"
              className="text-base font-medium font-pop text-primaryColor"
            />
          </Flex>
        </div>

        <div className="mt-14">
          <Heading
            text="Physical"
            as="h3"
            className="text-base font-normal font-pop text-heardColor"
          />
          <Flex className="items-center gap-x-2 mt-7 ">
            <Image src={str} alt="image" />
            <Heading
              text="Strenuous"
              as="h3"
              className="text-base font-medium font-pop text-primaryColor"
            />
          </Flex>
        </div>
      </Flex>

      <Flex className="justify-between">
        <div className="mt-14">
          <Heading
            text="Group Size"
            as="h3"
            className="text-base font-normal font-pop text-heardColor"
          />
          <Flex className="items-center gap-x-2 mt-7 ">
            <Image src={eg} alt="image" />
            <Heading
              text="8"
              as="h3"
              className="text-base font-medium font-pop text-primaryColor"
            />
          </Flex>
        </div>

        <div className="mt-14">
          <Heading
            text="Age"
            as="h3"
            className="text-base font-normal font-pop text-heardColor"
          />
          <Flex className="items-center gap-x-2 mt-7 ">
            <Image src={se} alt="image" />
            <Heading
              text="7+"
              as="h3"
              className="text-base font-medium font-pop text-primaryColor"
            />
          </Flex>
        </div>

        <div className="mt-14">
          <Heading
            text="Season"
            as="h3"
            className="text-base font-normal font-pop text-heardColor"
          />
          <Flex className="items-center gap-x-2 mt-7 ">
            <Image src={apr} alt="image" />
            <Heading
              text="Apr-Sep"
              as="h3"
              className="text-base font-medium font-pop text-primaryColor"
            />
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default TourContentSecvice;
