import { useSelector } from "react-redux";
import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import useSlider from "../../hook/useSlider";
import imgIcon from "../../assets/imgIcon.png";

const TourDetailSlider = () => {
  const { setCurrent, slideRef, prevBtnRef, nextBtnRef, opacityRef } = useSlider();
  const data = useSelector((state) => state.imageData.imgData);

  return (
    <section className="py-10">
      <Container>
        <Flex className="justify-between">
          <div
            ref={opacityRef}
            className="flex w-s240 h-[620px] overflow-hidden flex-col gap-2 mt-10"
          >
            {data[0].allImage.map((item, index) => (
              <div
                className="cursor-pointer relative w-[220px]"
                key={index}
                onClick={() => setCurrent(index + 1)}
              >
                <Image src={item.img} alt="image" className="w-full" />
                <div className="absolute top-1/2 -translate-y-1/2 left-0 text-center w-full">
                  <span className="text-lg font-pop font-semibold text-black">
                    +{data[0].allImage.length} Photos
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-s1328 h-[708px] relative">
            <div ref={slideRef}>
              {data[0].allImage.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[80px] w-full relative overflow-hidden"
                >
                  <Image src={item.img} alt="image" className="w-full" />
                  <div className="flex absolute h-12 py-4 h px-6 bg-slate-400 rounded-3xl items-center bottom-7 right-10 gap-x-2">
                    <Image src={imgIcon} alt="image" />
                
                    <Flex className="items-center">
                      <span className="font-pop text-base font-semibold text-primaryColor">{index + 1}</span>
                      <span className="font-pop text-base font-semibold text-primaryColor">/{data[0].allImage.length}</span>
                    </Flex>
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={prevBtnRef}
              className="w-14 top-1/2 border border-solid border-heardColor -translate-y-1/2 absolute left-6 z-50 rounded-full h-14 hover:bg-searchColor flex justify-center duration-300 cursor-pointer hover:border-none items-center"
            >
              <IoIosArrowBack className="text-2xl text-white" />
            </div>
            <div
              ref={nextBtnRef}
              className="w-14 top-1/2 border border-solid border-heardColor -translate-y-1/2 absolute right-6 cursor-pointer z-50 rounded-full h-14 hover:bg-searchColor flex justify-center duration-300 hover:border-none items-center"
            >
              <IoIosArrowForward className="text-2xl text-white" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default TourDetailSlider;
