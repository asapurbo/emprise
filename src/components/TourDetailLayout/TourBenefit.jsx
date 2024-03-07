import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import Paragraph from "../commonComponents/Paragraph";
import ba from "../../assets/ba.png";
import { useEffect, useRef, useState } from "react";
import TourBenefitItem from "../TourDetailComponents/TourBenefitItem";
import TourBenefitAllData from "../../data/TourBenefitAllData";

const TourBenefit = () => {
  const {TourBenefitData} = TourBenefitAllData()

  const [showMore, setShowMore] = useState(false);
  const paragraphRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      paragraphRef.current.classList.toggle("h-[220px]");
    };

    let btn = btnRef.current;
    if (btn) {
      btn.addEventListener("click", handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  const handleX = () => {
    setShowMore(!showMore);
  };

  return (
    <Flex className="justify-between mt-16">
      <div className="w-[72px]">
        <Image src={ba} alt="image" />
      </div>

      <div className="w-[648px]">
        <div>
          <div
            ref={paragraphRef}
            className={`h-${
              showMore ? "auto" : "24"
            } duration-300 overflow-hidden`}
          >
            <Paragraph
              className="text-primaryColor font-pop font-normal text-base"
              text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nesciunt expedita sapiente earum aliquam deserunt inventore dolore facere minima doloremque. Suscipit, ea temporibus quasi nobis modi qui placeat dolores asperiores? Nemo nesciunt expedita sapiente earum aliquam deserunt inventore dolore facere minima doloremque. Suscipit, ea temporibus quasi nobis modi qui placeat dolores asperiores?"
            />
          </div>

          <button
            ref={btnRef}
            onClick={handleX}
            className="text-bdrColor font-pop font-normal text-base mt-4"
          >
            {showMore ? `Show Less` : `Show More...`}
          </button>
        </div>

        <div className="mt-14">
          {TourBenefitData.map((item, index) => (
            <TourBenefitItem
            key={index}
            type={item.type}
            text={item.text}
          />
          ))}
          
        </div>
      </div>
    </Flex>
  );
};

export default TourBenefit;
