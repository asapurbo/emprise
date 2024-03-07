import Image from "../commonComponents/Image";
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import fx from '../../assets/fx.png';

import TourFAQCart from "../TourDetailComponents/TourFAQCart";

const TourFAQ = () => {
  const tourfaqData = [
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
    {
      title: "What type of clothing are suitable for this trek?",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
  ];
  return (
    <Flex className="justify-between mt-16">
      <div>
        <Image src={fx} />
      </div>
      <div>
        <div>
            {
                tourfaqData.map((item, index) => (
                    <TourFAQCart key={index} headTxt={item.title} description={item.description}/>
                ))
            }
        </div>
        <div className="pt-6 pb-4 pl-2 border-b border-solid border-acBdr">
          <Heading
            text="Show 10+ more FAQ’s"
            as="h3"
            className="font-pop text-base font-normal text-[#6C757D]"
          />
        </div>
      </div>
    </Flex>
  );
};

export default TourFAQ;
