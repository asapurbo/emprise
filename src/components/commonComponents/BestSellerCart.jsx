import Image from "../commonComponents/Image";
import Flex from "./Flex";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { IoMdShare } from "react-icons/io";

const BestSellerCart = ({src, alt, pettyTxt, leargeTxt, percentage, headTxt, paraTxt}) => {
  return (
    <div className="w-[512px] overflow-hidden group groups">
      <div
        className={`w-full relative after:absolute after:w-full after:-bottom-96 hover:after:bottom-0 after:h-full after:content-[''] afBg after:top-0 after:rounded-r32 after:duration-300`}
      >
        <Image src={src} alt={alt} />
        <div className="absolute -left-96 group-hover:left-8 duration-300 bottom-8 z-[999999]">
          <Heading
            text={pettyTxt}
            as="h3"
            className="font-pop text-lg font-normal text-white"
          />
          <Heading
            text={leargeTxt}
            as="h3"
            className="font-pop relative text-t32 font-normal text-white pt-6 after:after:content-[''] after:absolute after:bg-white after:w-10/12 after:h-1 after:rounded-full after:-bottom-1 after:left-0"
          />
        </div>
        <div className="absolute top-8 -right-96 group-hover:right-8 z-[9999] duration-300">
          {percentage && <Heading
            text={percentage}
            as="h3"
            className="text-[#EE5879] bg-[#F9C7D2] inline-block rounded-2xl py-1 px-4 text-lg font-pop font-medium"
          />}
        </div>
        <Flex className="absolute bottom-8 gap-x-4 -right-96 group-hover:right-8 z-[9999] duration-300 items-center">
          <Flex className="w-12 cursor-pointer h-12 bg-white rounded-full items-center justify-center">
            <IoMdShare className="text-primaryColor text-sm" />
          </Flex>

          <button className="bg-[#28B0A6] py-3 px-9 rounded-3xl text-lg font-pop text-white">
            Explore
          </button>
        </Flex>
      </div>
      <div className="text-center">
        <Heading
          text={headTxt}
          as="h3"
          className="font-pop font-normal text-2xl pt-8 pb-4 text-primaryColor"
        />
        <Paragraph
          text={paraTxt}
          className="font-pop text-base font-normal px-11 text-bdrColor"
        />
      </div>
    </div>
  );
};

export default BestSellerCart;
