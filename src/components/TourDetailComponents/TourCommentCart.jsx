import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Paragraph from "../commonComponents/Paragraph";
import Image from "../commonComponents/Image";
import useShowHide from "../../hook/useShowHide";

const ItineraryDayOne = ({src, names, title, description, rating, date}) => {
  const { dayWrapRef, dayBtnRef } = useShowHide();

  return (
    <div>
      <div className="w-[648px]">
        {/* ------------- first part ------------ */}

        <div
          ref={dayBtnRef}
          className="py-6 px-4 cursor-pointer bg-[#FBFBFB] duration-300 border-b border-solid border-acBdr flex items-center justify-between rounded-tl-2xl rounded-tr-2xl"
        >
          <Flex className="items-center gap-x-4">
            <div className="bg-searchColor flex justify-center items-center rounded-full">
              <Image src={src} alt="image" />
            </div>

            <div>
              <Heading
                text={names}
                as="h3"
                className="font-pop text-base font-semibold text-heardColor"
              />
            </div>
          </Flex>

          <div>
            <Image src={rating} alt="image" />
          </div>
        </div>

        {/* --------------second part------------- */}
        <div
          ref={dayWrapRef}
          className="h-0 overflow-hidden border border-solid border-acBdr rounded-bl-2xl rounded-br-2xl"
        >
          <Flex className="justify-between border-b border-solid border-acBdr pb-4">
            <Heading
              text={title}
              as="h3"
              className="font-pop text-base font-semibold text-primaryColor"
            />
            <Heading
              text={date}
              as="h3"
              className="font-pop text-base font-normal text-primaryColor"
            />
          </Flex>
          <div className="mt-6">
          <Paragraph
              className="text-primaryColor font-pop font-normal pr-14 text-base"
              text={description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDayOne;
