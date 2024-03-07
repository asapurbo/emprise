import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import TourContentLeftAside from "./TourContentLeftAside";
import TourContentAsideNav from "./TourContentAsideNav";
import TourContentDocument from "./TourContentDocument";
import ItineraryDays from "./ItineraryDays";
import TourBenefit from "./TourBenefit";
import TourComment from "./TourComment";
import TourFAQ from "./TourFAQ";
import TourForm from "./TourForm";
import Heading from "../commonComponents/Heading";

const TourContent = () => {
  return (
    <section>
      <Container className="flex justify-end">
        <div className="w-s1328 mt-16 ">
          <Flex className="justify-between">
            <div className="w-[798px]">
              <TourContentLeftAside />
              <TourContentAsideNav />
              <TourContentDocument />
              <ItineraryDays />
              <TourBenefit />
              <TourComment />
              <TourFAQ />
            </div>
            <div className="w-[376px] pt-4 pb-10 px-6 bg-heardBg h-[600px] rounded-lg">
              <div>
                <TourForm />
              </div>

              <div className="w-[328px] mx-auto mt-10">
                <Heading
                  text="If you have  question about this tour, please feel free to ask"
                  as="h3"
                  className="font-pop text-base font-normal text-heardColor px-5"
                />
             
                <button className="pt-4 pb-3 w-full border-2 rounded-[40px] mt-4 border-solid border-acBdr hover:bg-acBdr duration-300 text-lg font-pop font-normal text-bdrColor ">Ask the Tour Expert</button>

                <Heading
                  text="*All questions are replied to within 24-48 hrs"
                  as="h3"
                  className="font-pop text-sm font-normal text-bdrColor px-2 pt-6"
                />
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default TourContent;
