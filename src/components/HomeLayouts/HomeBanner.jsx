import Container from "../commonComponents/Container";
import Image from "../commonComponents/Image";
import bannderImg from "../../assets/bannerImg.png";
import Heading from "../commonComponents/Heading";
import Flex from "../commonComponents/Flex";
import cd from "../../assets/cd.png";
import { Link } from "react-router-dom";
import LocationPart from "./LocationPart";
const HomeBanner = () => {
  return (
    <section className="pt-14 pb-56">
      <Container className='relative'>
        <div className="relative">
          <Image src={bannderImg} />
          <div className="pt-28 pb-36 absolute top-0 pl-s136 w-full pr-20">
            <Heading
              text="The Himalayan Mountain Ranges"
              as="h3"
              className='text-2xl relative after:absolute after:content-[" "] after:w-6 after:top-1/2 after:-translate-y-1/2 after:h-1 after:bg-white after:-left-9 ml-9  text-white font-pop font-normal'
            />

            <Heading
              text="Nepal Country"
              as="h3"
              className="text-t128 pt-2 pb-8 text-white font-pop font-bold"
            />

            <Heading
              text="-02° C Very Cold"
              as="h3"
              className="text-2xl relative text-white font-pop font-normal"
            />

            <Flex className="justify-end gap-x-6">
              <div>
                <Image src={cd} />
              </div>

              <div className="w-s350">
                <Heading
                  text="We Accept Payment Through All Cards & Banking"
                  as="h3"
                  className="text-2xl relative text-white font-pop font-normal leading-9"
                />
                <Link
                  to="/"
                  className="text-2xl font-bold leading-9 underline text-white"
                >
                  Book Now!
                </Link>
              </div>
            </Flex>
          </div>
        </div>
        <div>
          <LocationPart/>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
