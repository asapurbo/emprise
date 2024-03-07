import Container from '../commonComponents/Container';
import { FiPlusCircle } from "react-icons/fi";
import Flex from '../commonComponents/Flex';
import Heading from '../commonComponents/Heading';

const FooterContact = () => {
  return (
    <section>
        <Container>
            <Flex className='justify-between items-center w-full border-b border-solid border-[#E9ECEF] pb-10'>
                <Flex className='gap-x-[69px] items-center'>
                    <Flex className='gap-x-4 items-center'>
                        <div>
                            <FiPlusCircle className='text-t32 text-primaryColor'/>
                        </div>
                        <div>
                            <Heading text='QUICK LINKS' as='h3' className='text-2xl font-pop font-semibold text-primaryColor'/>
                        </div>
                    </Flex>
                    <div>
                        <Heading text='Explore more categories' as='h3' className='text-2xl font-pop font-normal text-[#546179]'/>
                    </div>
                </Flex>
                <div>
                   <Heading text='0123-456-324-54   |   hello@entrada.com' as='h3' className='text-2xl font-pop font-normal text-[#212529]'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default FooterContact