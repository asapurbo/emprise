import Flex from '../commonComponents/Flex';
import Heading from '../commonComponents/Heading';
import Image from '../commonComponents/Image';

const ActivitiesServiceCart = ({headTxt, src, alt}) => {
  return (
    <Flex className="py-6 gap-x-4 items-center px-6 border border-solid border-acBdr rounded-2xl">
        <div>
           <Image src={src} alt={alt}/>
        </div>
       
        <div>
            <Heading text={headTxt} as="h3" className='text-base font-pop font-normal text-black'/>
        </div>
    </Flex>
  )
}

export default ActivitiesServiceCart