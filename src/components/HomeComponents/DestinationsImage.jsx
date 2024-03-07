import Image from "../commonComponents/Image"
import Heading from "../commonComponents/Heading"
const DestinationsImage = ({src, alt, rating, leargeTxt, pettyTxt, className}) => {

  return (
    <div className={`relative ${className}`}>
        <div>
          <Image src={src} alt={alt}/>  
        </div>
        <div className="absolute top-8 left-8">
        <Heading
          text={rating}
          as="h3"
          className="text-afterColor bg-[#FEF2DE] inline-block rounded-2xl py-1 px-4 text-lg font-pop font-medium"
        />
        </div>
        <div className="absolute bottom-8 left-8">
        <Heading text={leargeTxt} as='h3' className='font-pop text-2xl font-normal text-white'/>
        <Heading text={pettyTxt} as='h3' className='font-pop text-base font-normal text-white pt-2'/>
        </div>
    </div>
  )
}

export default DestinationsImage