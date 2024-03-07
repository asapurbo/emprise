import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
const Content = () => {
  return (
    <section className="pb-s136">
      <Container>
        <div className="bg-searchColor rounded-2xl pt-[72px] pb-14 relative">
          
          <div className="w-[1076px] mx-auto text-center">
            <Heading
              text="Tour the World from Your Couch with #ExperienceLive!"
              className="font-pop font-normal text-t56 text-white"
              as="h3"
            />

            <Heading
              text="To kickstart your digital adventures with Entrada"
              className="font-pop font-normal text-t32 text-[#BCF0EC] pt-7"
              as="h3"
            />
          </div>

          <Flex className="justify-center items-center mt-14">
            <button className="px-10 py-6 bg-white text-[#28B0A6] font-pop text-2xl font-normal rounded-[40px]">
              Check All
            </button>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Content;
