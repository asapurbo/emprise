import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import TourContentLeftAside from "./TourContentLeftAside";
import TourContentAsideNav from "./TourContentAsideNav";
import TourContentDocument from "./TourContentDocument";
import ItineraryDays from "./ItineraryDays";
import TourBenefit from "./TourBenefit";


const TourContent = () => {
  return (
    <section>
      <Container className="flex justify-end">
        <div className="w-s1328">
          <Flex className="justify-between">
            <div>
              <TourContentLeftAside />
              <TourContentAsideNav />
              <TourContentDocument/>
              <ItineraryDays/>
              <TourBenefit/>
            </div>
            <div>

            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default TourContent;
