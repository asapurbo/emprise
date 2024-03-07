import TourCommentCart from "../TourDetailComponents/TourCommentCart";
import base from "../../assets/base.png";
import wa from "../../assets/wa.png";
import le from "../../assets/le.png";
import star4 from "../../assets/star4.png";
import cm from "../../assets/cm.png";
import star5 from "../../assets/star5.png";
import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import Heading from "../commonComponents/Heading";
const TourComment = () => {
  const TourComment = [
    {
      image: base,
      name: "Brooklyn Simmons",
      rating: star5,
      title: "“Exceptional”",
      date: "Reviewed 23rd, November",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },

    {
      image: wa,
      name: "Wade Warren",
      rating: star4,
      title: "“Terrific”",
      date: "Reviewed 23rd, November",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },

    {
      image: le,
      name: "Leslie Alexander",
      rating: star5,
      title: "“Awesome”",
      date: "Reviewed 23rd, November",
      description:
        "Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.",
    },
  ];
  return (
    <Flex className='justify-between mt-16'>
      <div>
        <Image src={cm}/>
      </div>
      <div>
        <div>
          {TourComment.map((item, index) => (
            <TourCommentCart
              key={index}
              src={item.image}
              names={item.name}
              description={item.description}
              title={item.title}
              date={item.date}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="pt-6 pb-4 pl-2 border-b border-solid border-acBdr">
          <Heading
            text="Show 10+ more reviews"
            as="h3"
            className="font-pop text-base font-normal text-[#6C757D]"
          />
        </div>
      </div>
    </Flex>
  );
};

export default TourComment;
