import Image from "../commonComponents/Image";
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Paragraph from "../commonComponents/Paragraph";
import { Link } from "react-router-dom";

const TourGuidesCart = ({headPettyTxt, headTxt, about, aboutTxt, journey, journeyTxt, insTo, faceTo, twiTo,src }) => {
  return (
    <Flex className="gap-x-8 items-center">
      <div>
        <Image src={src} />
      </div>
      <div>
        <Heading
          text={headPettyTxt}
          as="h3"
          className="font-pop text-2xl font-normal text-searchColor"
        />

        <div className="w-[274px]">
          <Heading
            text={headTxt}
            as="h3"
            className="font-pop text-t40 font-medium pt-4 text-primaryColor leading-[60px]"
          />
        </div>
        <Flex className="mt-24 gap-x-[70px]">
          <div className="w-[340px]">
            <Heading
              text={about}
              as="h3"
              className="font-pop text-2xl font-normal text-black"
            />
            <Paragraph
              text={aboutTxt}
              className="font-pop text-base font-normal text-bdrColor pt-4"
            />
          </div>

          <div className="w-[340px]">
            <Heading
              text={journey}
              as="h3"
              className="font-pop text-2xl font-normal text-black"
            />
            <Paragraph
              text={journeyTxt}
              className="font-pop text-base font-normal text-bdrColor pt-4"
            />
          </div>
        </Flex>

        <div className="mt-48">
          <ul className="flex gap-x-8">
            <li className="text-base font-pop font-normal text-black">
              <Link to={faceTo}>Facebook</Link>
            </li>

            <li className="text-base font-pop font-normal text-black">
              <Link to={insTo}>Instagram</Link>
            </li>

            <li className="text-base font-pop font-normal text-black">
              <Link to={twiTo}>Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </Flex>
  );
};

export default TourGuidesCart;
