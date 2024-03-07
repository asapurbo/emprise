import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Image from "../commonComponents/Image";
import Paragraph from "../commonComponents/Paragraph";
import { IoIosArrowDown } from "react-icons/io";
import badge from "../../assets/badge.png";
import useShowHide from "../../hook/useShowHide";

const TourFAQCart = ({headTxt, description}) => {
  const { dayWrapRef, dayBtnRef, arrowRef } = useShowHide();

  return (
    <div>
      <div className="w-[648px]">
        {/* ------------- first part ------------ */}

        <div
          ref={dayBtnRef}
          className="py-6 px-4 cursor-pointer bg-[#FBFBFB] duration-300 border-b border-solid border-acBdr flex items-center justify-between rounded-tl-2xl rounded-tr-2xl"
        >
          <Flex className="items-center gap-x-2">
            <div className="w-8 h-8  flex justify-center items-center rounded-full">
              <Image src={badge}/>
            </div>

            <div>
              <Heading
                text={headTxt}
                as="h3"
                className="font-pop text-base font-semibold text-secondaryColor"
              />
            </div>
          </Flex>

          <div ref={arrowRef}>
            <IoIosArrowDown className="text-xl text-[#CED4D9]" />
          </div>
        </div>

        {/* --------------second part------------- */}
        <div
          ref={dayWrapRef}
          className="h-0 overflow-hidden border border-solid border-acBdr rounded-bl-2xl rounded-br-2xl"
        >
           <Paragraph
              className="text-primaryColor font-pop font-normal pr-14 text-base"
              text={description}
            />
        </div>
      </div>
    </div>
  );
};

export default TourFAQCart;
