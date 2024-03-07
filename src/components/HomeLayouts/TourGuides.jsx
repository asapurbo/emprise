import HomeHeading from "../HomeComponents/HomeHeading";
import TourGuidesCart from "../HomeComponents/TourGuidesCart";
import Container from "../commonComponents/Container";
import MainSlider from "../../slider/MainSlider";
import mar from "../../assets/mar.png";
import marTwo from "../../assets/marTwo.png";


const TourGuides = () => {
  return (
    <section className="pb-s136">
      <Container>
        <HomeHeading
          headTxt="Tour Guides"
          paraTxt="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <div className="mt-16">
          <MainSlider show="1">
            <TourGuidesCart
              headPettyTxt="Adventure Guru"
              headTxt="Martina James Junior"
              about="About"
              aboutTxt="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
              journey="Journey"
              journeyTxt="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
              insTo="/"
              faceTo="/"
              twiTo="/"
              src={mar}
            />
            <TourGuidesCart
              headPettyTxt="Adventure Guru"
              headTxt="Martina James Junior"
              about="About"
              aboutTxt="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
              journey="Journey"
              journeyTxt="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."
              insTo="/"
              faceTo="/"
              twiTo="/"
              src={marTwo}
            />
          </MainSlider>
        </div>
      </Container>
    </section>
  );
};

export default TourGuides;
