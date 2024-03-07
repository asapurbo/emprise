import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import { BsCurrencyDollar } from "react-icons/bs";

const PriceShow = ({price}) => {
  return (
    <Flex className="w-[140px]  pl-4 py-2 border items-center gap-x-2 border-solid border-acBdr rounded-lg">
          <BsCurrencyDollar className="text-base font-normal text-bdrColor" />
          <Heading
            text={price}
            as="text"
            className="font-pop text-base font-normal text-bdrColor"
          />
    </Flex>
  )
}

export default PriceShow