import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import Heading from "../commonComponents/Heading";

const QuestionCart = ({src, leargeTxt, pettyTxt, email, phone}) => {
  return (
    <Flex className="pt-[72px] pb-14 px-[142px] bg-searchColor w-[648px] flex-col items-center justify-center rounded-xl group hover:bg-[#1D293F] duration-300">
      <Flex className="w-[104px] h-[104px] rounded-full bg-white items-center justify-center mx-auto group-hover:">
        <Image src={src} alt="image" />
      </Flex>
      <div className="mt-14 text-center">
        <Heading
          text={leargeTxt}
          as="h3"
          className="font-pop text-t32 font-normal text-white pb-6"
        />

        <Heading
          text={pettyTxt}
          as="h3"
          className="font-pop text-2xl font-normal text-[#BCF0EC] pb-6 group-hover:text-[#99A3AD] duration-300"
        />

        <Heading
          text={email}
          as="h3"
          className="font-pop text-2xl font-normal text-white pb-2"
        />

        <Heading
          text={phone}
          as="h3"
          className="font-pop text-2xl font-normal text-white"
        />
      </div>
    </Flex>
  );
};

export default QuestionCart;
