import { useState } from "react";
import Heading from "../commonComponents/Heading";
import { Slider } from "keep-react";
import Flex from "../commonComponents/Flex";
import { FaMinus } from "react-icons/fa6";
import PriceShow from "../ActivitiesComponents/PriceShow";

const PriceRange = () => {
  const [price, setPrice] = useState([1500, 3000]);

  return (
    <div className="py-10">
      <Heading
        text="Price Range"
        as="h3"
        className="text-base font-pop font-normal text-heardColor"
      />
      <div className="w-[328px] mt-9">
        <Slider
          className="bg-black"
          range={true}
          min={1000}
          max={5000}
          defaultValue={[1500, 3000]}
          tooltip="top"
          onChange={(value) => setPrice(value)}
        />
      </div>

      <Flex className="mt-6 items-center w-[328px] justify-between">
        <PriceShow price={price[0]} />
        <FaMinus className="text-bdrColor" />
        <PriceShow price={price[1]} />
      </Flex>
    </div>
  );
};

export default PriceRange;
