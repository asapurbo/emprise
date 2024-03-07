import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import dis from "../../assets/dis.png";
import free from "../../assets/free.png";
import ent from "../../assets/ent.png";
import few from "../../assets/few.png";
import pri from "../../assets/pri.png";
import new_ from "../../assets/new_.png";

import ActivitiesServiceCart from "../ActivitiesComponents/ActivitiesServiceCart";

const ActivitiesService = () => {
  return (
    <section className="pt-10 pb-12">
      <Container>
        <Flex className="justify-between">
          <ActivitiesServiceCart
            src={dis}
            alt="image"
            headTxt="Discounted Deals"
          />
          <ActivitiesServiceCart
            src={free}
            alt="image"
            headTxt="Free Cancellation"
          />
          <ActivitiesServiceCart
            src={ent}
            alt="image"
            headTxt="Entrada Specials"
          />
          <ActivitiesServiceCart
            src={few}
            alt="image"
            headTxt="Few Seats Left"
          />
          <ActivitiesServiceCart
            src={pri}
            alt="image"
            headTxt="Private Tours"
          />
          <ActivitiesServiceCart
            src={new_}
            alt="image"
            headTxt="New on Entrada"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default ActivitiesService;
