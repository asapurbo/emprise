
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Image from "../commonComponents/Image";
import { IoIosArrowDown } from "react-icons/io";
import la from "../../assets/la.png";
import map from "../../assets/map.png";
import sh from "../../assets/sh.png";
import dou from "../../assets/dou.png";
import si from "../../assets/si.png";
import ItineraryDaysNavList from "../TourDetailComponents/ItineraryDaysNavList";
import { CiCirclePlus } from "react-icons/ci";
import useShowHide from "../../hook/useShowHide";


const ItineraryDaySixth = () => {

   const { dayWrapRef, dayBtnRef, arrowRef } = useShowHide()

  return (
    <div>
      <div className="w-[648px]">
        {/* ------------- first part ------------ */}

        <div ref={dayBtnRef} className="py-6 px-4 cursor-pointer bg-[#FBFBFB] duration-300 border-b border-solid border-acBdr flex items-center justify-between">
          <Flex className="items-center gap-x-2">
            <div className="w-8 h-8 bg-searchColor flex justify-center items-center rounded-full">
              <Heading
                text="6"
                as="h3"
                className="font-pop text-base font-semibold text-[#BCF0EC]"
              />
            </div>

            <div>
              <Heading
                text="Day 6"
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
        <div ref={dayWrapRef} className="h-0 overflow-hidden border border-solid border-acBdr rounded-bl-2xl rounded-br-2xl">
          <div>
            <Heading
              text="Lake Nakuru National Park"
              as="h3"
              className="font-pop text-base pb-4 border-b border-solid border-acBdr font-semibold text-secondaryColor"
            />
          </div>

          <div className="mt-6 mb-14">
            <Heading
              text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
              as="h3"
              className="font-pop text-base font-normal pr-14 text-primaryColor"
            />
          </div>

          <Flex className="gap-x-8 mb-12">
            <div>
              <Image src={la} alt="image" />
            </div>
            <div>
              <Image src={map} alt="image" />
            </div>
          </Flex>

          <div className="border-b border-solid border-acBdr pb-4">
            <ul className="flex gap-x-12">
              <ItineraryDaysNavList text="Accommodation" to="/" />
              <ItineraryDaysNavList text="Meals" to="/" />
              <ItineraryDaysNavList text="Inclusions" to="/" />
              <ItineraryDaysNavList text="Special Info" to="/" />
            </ul>
          </div>

          <div className="mt-6 mb-9">
            <Heading
              text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
              as="h3"
              className="font-pop text-base font-normal pr-14 text-primaryColor"
            />
          </div>
          <div>
            <Flex className="items-center gap-x-12">
              <Heading
                text="Shared Room"
                as="h3"
                className="font-pop text-base font-normal duration-300 text-bdrColor"
              />

              <Heading
                text="Included in package"
                as="h3"
                className="font-pop text-base font-normal duration-300 text-Included in package"
              />
            </Flex>

            <Flex className="items-center gap-x-12 mt-3">
              <Heading
                text="Double Room"
                as="h3"
                className="font-pop text-base font-normal duration-300 text-bdrColor"
              />

              <Heading
                text="£45 per person extra"
                as="h3"
                className="font-pop text-base font-normal duration-300 text-Included in package"
              />
            </Flex>

            <Flex className="items-center gap-x-12 mt-3">
              <Heading
                text="Single Room"
                as="h3"
                className="font-pop text-base font-normal duration-300 text-bdrColor"
              />

              <Heading
                text="£80 per person extra"
                as="h3"
                className="font-pop text-base font-normal duration-300 text-Included in package"
              />
            </Flex>
          </div>

          <Flex className='justify-between'>
            <div className="mt-11 group">
              <Heading
                text="Shared"
                as="h3"
                className="font-pop text-base group-hover:text-searchColor font-normal pb-3 duration-300 text-bdrColor"
              />
              <div className="rounded-2xl w-[176px] group overflow-hidden relative after:hover:bg-overlayTwo after:duration-300 after:w-full after:h-52 after:content-[''] after:absolute after:top-0 after:left-0 cursor-pointer">
                <Image src={sh} alt="image" />
                <div className="absolute hidden group-hover:block top-1/2 z-[99999] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CiCirclePlus className="text-white text-5xl" />
                </div>
              </div>
            </div>

            <div className="mt-11 group">
              <Heading
                text="Double"
                as="h3"
                className="font-pop text-base group-hover:text-searchColor font-normal pb-3 duration-300 text-bdrColor"
              />
              <div className="rounded-2xl w-[176px] group overflow-hidden relative after:hover:bg-overlayTwo after:duration-300 after:w-full after:h-52 after:content-[''] after:absolute after:top-0 after:left-0 cursor-pointer">
                <Image src={dou} alt="image" />
                <div className="absolute hidden group-hover:block top-1/2 z-[99999] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CiCirclePlus className="text-white text-5xl" />
                </div>
              </div>
            </div>

            <div className="mt-11 group">
              <Heading
                text="Single"
                as="h3"
                className="font-pop group-hover:text-searchColor text-base font-normal pb-3 duration-300 text-bdrColor"
              />
              <div className="rounded-2xl w-[176px] group overflow-hidden relative after:hover:bg-overlayTwo after:duration-300 after:w-full after:h-52 after:content-[''] after:absolute after:top-0 after:left-0 cursor-pointer">
                <Image src={si} alt="image" />
                <div className="absolute hidden group-hover:block top-1/2 z-[99999] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CiCirclePlus className="text-white text-5xl" />
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDaySixth;
