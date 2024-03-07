import Image from "../commonComponents/Image";
import cmLo from "../../assets/cmLo.png";
import Container from "../commonComponents/Container";

const CompanyLogo = () => {
  return (
    <section className="pb-s136">
      <Container>
        <div>
          <Image src={cmLo} alt="image" />
        </div>
      </Container>
    </section>
  );
};

export default CompanyLogo;
