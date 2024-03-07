import FooterItemCmp from "../commonComponents/FooterItemCmp";
import Container from "../commonComponents/Container";
import FooterData from "../../data/FooterData";
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Image from "../commonComponents/Image";
import arrow from "../../assets/arrow.png";
import onCd from "../../assets/onCd.png";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const FooterItem = () => {
  const { footerItemData } = FooterData();
  return (
    <section className="pt-8">
      <Container>
        <Flex className="justify-between  pb-s120">
          <Flex className="w-[646px] justify-between">
            {footerItemData.map((main, index) => (
              <FooterItemCmp
                key={index}
                item={[...main.name]}
                headtxt={main.headTxt}
              />
            ))}
          </Flex>

          <div>
            <Heading
              text="Get In Touch"
              as="h3"
              className="font-pop text-2xl font-medium text-primaryColor"
            />
            <Flex className="items-center gap-x-6 mt-4">
              <Heading
                text="Let’s Talk"
                as="h3"
                className="font-pop text-t40 font-medium text-primaryColor"
              />

              <Image src={arrow} alt="image" />
            </Flex>

            <Flex className="mt-10 relative shadow-inpShadow">
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
          </div>
        </Flex>
        {/* ----------------------------- */}
        <Flex className="justify-between items-center pb-6 border-b border-solid border-[#E9ECEF]">
          <Heading
            text="Privacy Policy"
            as="h3"
            className="text-2xl font-pop text-primaryColor font-normal"
          />

          <Flex className="gap-x-3 items-center">
            <Link
              className="text-2xl font-pop text-primaryColor font-normal"
              to="/"
            >
              Linkedin
            </Link>

            <span className="text-2xl font-pop text-primaryColor font-normal">
              /
            </span>

            <Link
              className="text-2xl font-pop text-primaryColor font-normal"
              to="/"
            >
              {" "}
              Facebook
            </Link>

            <span className="text-2xl font-pop text-primaryColor font-normal">
              /
            </span>

            <Link
              className="text-2xl font-pop text-primaryColor font-normal"
              to="/"
            >
              {" "}
              Instagram
            </Link>
          </Flex>
        </Flex>

        {/* ----------------------------- */}

        <Flex className='pt-7 pb-8 justify-between'>
         <Heading
            text="2024-2025 © asapurbo"
            as="h3"
            className="text-base font-pop text-primaryColor font-normal"
          />
          <Image src={onCd} alt="image"/>
        </Flex>
      </Container>
    </section>
  );
};

export default FooterItem;
