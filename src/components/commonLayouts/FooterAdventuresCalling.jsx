import Container from '../commonComponents/Container';
import Flex from '../commonComponents/Flex';
import Heading from '../commonComponents/Heading';
import Image from '../commonComponents/Image';
import loE from '../../assets/loE.png';
import arrow from '../../assets/arrow.png'

const FooterAdventuresCalling = () => {
  return (
    <section className='pt-10'>
        <Container> 
            <Flex className='pb-8 justify-between border-b border-solid border-[#E9ECEF]'>
                <div className='w-[388px]'>
                    <Heading text='Get in touch' as='h3' className='font-pop text-2xl font-normal text-searchColor'/>


                    <Heading text='Adventures Calling You Guys!' as='h3' className='font-pop text-t40 font-medium text-primaryColor pt-2'/>
                </div>
            
                <Flex className='gap-x-6'>
                    <Flex className='w-20 h-20 bg-searchColor rounded-full justify-center items-center'>
                        <Image src={loE}/>
                    </Flex>
                    <div>
                       <Heading text='Our Offices' as='h3' className='font-pop text-2xl font-normal text-black'/>

                       <Heading text='Nepal, USA, India' as='h3' className='font-pop text-2xl font-medium text-black pt-2'/>

                       <div className='mt-8'>
                         <Image src={arrow} alt='image'/>
                       </div>
                    </div>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default FooterAdventuresCalling