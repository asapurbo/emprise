import HomeHeading from "../HomeComponents/HomeHeading";
import QuestionCart from "../HomeComponents/QuestionCart";
import headset from "../../assets/headset.png";
import help from "../../assets/help.png";


import Flex from "../commonComponents/Flex";
const Question = () => {
  return (
    <div>
      <section className="pb-s136">
        <div className="max-w-QContainer mx-auto">
          <div className="text-center">
            <HomeHeading
              headTxt="Still have a question?"
              paraTxt="The Brilliant reasons Entrada should be your one-stop-shop!"
            />
          </div>

          <Flex className="mt-[72px] justify-between">
            <QuestionCart src={headset} leargeTxt="For Sales" pettyTxt="The Brilliant reasons Entrada be your one-stop-shop!" email='sales@entrada.com' phone='+977(985) 456-32-12'/>

            <QuestionCart src={help} leargeTxt="For Sales" pettyTxt="The Brilliant reasons Entrada be your one-stop-shop!" email='sales@entrada.com' phone='+977(985) 456-32-12'/>
          </Flex>
        </div>
      </section>
    </div>
  );
};

export default Question;
