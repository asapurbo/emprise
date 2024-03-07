import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import ActivitesAside from "./ActivitesAside";
import ActivitiesCartItem from "./ActivitiesCartItem";

const ActivitiesContent = () => {
  return (
    <section className="pb-s136">
      <Container>
        <Flex className='gap-x-24'>
          <ActivitesAside />
          <ActivitiesCartItem/>
        </Flex>
      </Container>
    </section>
  );
};

export default ActivitiesContent;
