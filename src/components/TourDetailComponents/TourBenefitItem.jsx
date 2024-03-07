import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import cr from "../../assets/cr.png";
import cl from "../../assets/cl.png";
import Heading from "../commonComponents/Heading";

const TourBenefitItem = ({type, text}) => {
    console.log(type);
  return (
    <Flex className='gap-x-2 items-center'>
        <div>
            <Image src={type ? cr : cl} alt="image"/>
        </div>
        <div>
            <Heading text={text} as='h3' className='font-pop text-base font-normal text-primaryColor'/>
        </div>
    </Flex>
  )
}

export default TourBenefitItem