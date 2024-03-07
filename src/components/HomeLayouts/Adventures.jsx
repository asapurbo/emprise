import Container from "../commonComponents/Container";
import Image from "../commonComponents/Image";
import adven from "../../assets/adven.png";
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Paragraph from "../commonComponents/Paragraph";
import { CgMail } from "react-icons/cg";
import design from '../../assets/design.png';

const Adventures = () => {
  return (
    <section className="pb-s136">
      <Container>
        <Flex className="gap-x-8 items-center relative z-10">
          <div className="absolute -top-5 -left-12 z-[-1]">
            <Image src={design} alt="image"/>
          </div>

          <div>
            <Image src={adven} alt="image"/>
          </div>

          <div>
            <div>
              <Heading
                text="Subscribe For Offers"
                className="font-pop text-2xl text-searchColor font-normal"
                as="h3"
              />
            </div>
            <div className="w-[466px] mt-2">
              <Heading
                text="Adventures Calling You Guys!"
                as="h3"
                className="text-5xl font-semibold text-primaryColor leading-[72px]"
              />
              <Paragraph
                text="The Brilliant reasons Entrada should be
                your one-stop-shop!"
                className="font-pop text-base font-normal text-bdrColor pt-6 pr-20"
              />
            </div>

            <Flex className="mt-[72px] relative shadow-inpShadow">
              <div className="absolute top-1/2 -translate-y-1/2 left-6">
                <CgMail className="text-[21px] text-inpColor" />
              </div>
              <input
                type="text"
                className="w-[460px] py-8 pl-[69px] outline-transparent text-lg font-pop font-normal bg-inpBg"
                placeholder="Enter your email"
              />
              <div>
                <button className="bg-btnBg h-full py-7 px-8 text-2xl font-normal font-pop  text-white">
                  Send Now!
                </button>
              </div>
            </Flex>

            <div className="mt-12">
                <Heading
                  text="Expect a reply in 2-3 working days"
                  as="h3"
                  className="font-pop text-base font-normal text-heardColor"
                />
              </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Adventures;
