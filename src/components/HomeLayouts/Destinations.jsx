import DestinationsImage from "../HomeComponents/DestinationsImage";
import HomeHeading from "../HomeComponents/HomeHeading";
import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import old from "../../assets/old_.png";
import gr from "../../assets/gr_.png";
import london from "../../assets/london_.png";
import ams from "../../assets/amst.png";
import par from "../../assets/paris.png";
import MainSlider from "../../slider/MainSlider";

const Destinations = () => {
  return (
    <section className="pb-s136">
      <Container>
        <HomeHeading
          headTxt="Top Destinations"
          paraTxt="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <MainSlider show="1">
          <Flex className="justify-between mt-16">
            <Flex className="flex-col gap-y-8">
              <DestinationsImage
                src={old}
                rating="4.2"
                leargeTxt="Vietnam"
                pettyTxt="Waterfall"
              />
              <DestinationsImage
                src={old}
                rating="4.1"
                leargeTxt="Old Rain"
                pettyTxt="Waterfall"
              />
            </Flex>
            <div>
              <DestinationsImage
                src={gr}
                rating="4.7"
                leargeTxt="Greece"
                pettyTxt="Waterfall"
              />
            </div>
            <Flex className="flex-col gap-y-8">
              <div>
                <DestinationsImage
                  src={london}
                  rating="4.6"
                  leargeTxt="London"
                  pettyTxt="Waterfall"
                />
              </div>
              <Flex className="gap-x-8">
                <DestinationsImage
                  src={ams}
                  rating="4.5"
                  leargeTxt="Amsterdam"
                  pettyTxt="Waterfall"
                />
                <DestinationsImage
                  src={par}
                  rating="4.3"
                  leargeTxt="Paris"
                  pettyTxt="Waterfall"
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex className="justify-between mt-16">
            <Flex className="flex-col gap-y-8">
              <DestinationsImage
                src={old}
                rating="4.2"
                leargeTxt="Vietnam"
                pettyTxt="Waterfall"
              />
              <DestinationsImage
                src={old}
                rating="4.1"
                leargeTxt="Old Rain"
                pettyTxt="Waterfall"
              />
            </Flex>
            <div>
              <DestinationsImage
                src={gr}
                rating="4.7"
                leargeTxt="Greece"
                pettyTxt="Waterfall"
              />
            </div>
            <Flex className="flex-col gap-y-8">
              <div>
                <DestinationsImage
                  src={london}
                  rating="4.6"
                  leargeTxt="London"
                  pettyTxt="Waterfall"
                />
              </div>
              <Flex className="gap-x-8">
                <DestinationsImage
                  src={ams}
                  rating="4.5"
                  leargeTxt="Amsterdam"
                  pettyTxt="Waterfall"
                />
                <DestinationsImage
                  src={par}
                  rating="4.3"
                  leargeTxt="Paris"
                  pettyTxt="Waterfall"
                />
              </Flex>
            </Flex>
          </Flex>
        </MainSlider>
      </Container>
    </section>
  );
};

export default Destinations;
