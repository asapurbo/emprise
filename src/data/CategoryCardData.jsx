import beach from "../assets/beach.png";
import bungee from "../assets/bungee.png";
import city from "../assets/city.png";
import hiking from "../assets/hiking.png";


const CategoryCardData = () => {
  const categoryCardData = [
    {
      id: 1,
      ratingTxt: 4.9,
      headTxt: "Beach Activity",
      paraTxt: "196 Activities",
      src: beach,
      alt: "image",
    },
    {
      id: 2,
      ratingTxt: 4.5,
      headTxt: "Bungee Jump",
      paraTxt: "196 Activities",
      src: bungee,
      alt: "image",
    },
    {
      id: 3,
      ratingTxt: 3.9,
      headTxt: "City Tours",
      paraTxt: "196 Activities",
      src: city,
      alt: "image",
    },
    {
      id: 4,
      ratingTxt: 4.7,
      headTxt: "Hiking trips",
      paraTxt: "196 Activities",
      src: hiking,
      alt: "image",
    },
  ];

  return {
    categoryCardData,
  };
};

export default CategoryCardData;
