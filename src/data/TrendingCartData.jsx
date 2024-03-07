import tcd from "../assets/tcd.png";
import scd from "../assets/scd.png";
import wild from "../assets/wild.png";
import cu1 from "../assets/cu1.png";
import cu2 from "../assets/cu2.png";
import cu3 from "../assets/cu3.png";
import cu4 from "../assets/cu4.png";
import cu5 from "../assets/cu5.png";
import cu6 from "../assets/cu6.png";
import cu7 from "../assets/cu7.png";
import cu8 from "../assets/cu8.png";
import cu9 from "../assets/cu9.png";
import cu10 from "../assets/cu10.png";

const TrendingCartData = () => {
  const trendingData = [
    {
      id: 1,
      topSrc: tcd,
      topAlt: "image",
      headTxt: "Mountain Hiking Tour",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$895.00",
      days: "7 Days",
      rating: "4.7 (108)",
      allImage:  [ {img: cu2}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu6}, {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4},  {img: cu7}, {img: cu8}, {img: cu10}]
    },

    {
      id: 2,
      topSrc: scd,
      topAlt: "image",
      headTxt: "Train Tour Skyline",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$795.00",
      days: "9 Days",
      rating: "4.5 (98)",
      discountTxt: "15%",
      allImage:  [  {img: cu4}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu2}, {img: cu3},{img:cu9,}, {img: tcd}, {img: cu10}]
    },

    {
      id: 3,
      topSrc: wild,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "25%",
      allImage: [ {img: tcd}, {img: cu4}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu2}, {img: cu3},{img:cu9,},  {img: cu10}]
    },
    {
      id: 4,
      topSrc: cu1,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "25%",
      allImage: [ {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu6}, {img: cu2}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 5,
      topSrc: cu2,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "25%",
      allImage: [  {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu2}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 6,
      topSrc: cu3,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "",
      allImage: [  {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu2}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    
    {
      id: 7,
      topSrc: cu4,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "45%",
      allImage: [ {img: cu2}, {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: wild}, {img: scd}, {img: cu1}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 8,
      topSrc: cu5,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "21%",
      allImage: [  {img: cu1}, {img: cu2}, {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: wild}, {img: scd},  {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 9,
      topSrc: cu6,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "2%",
      allImage:   [ {img: wild}, {img: cu1}, {img: cu2}, {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: scd},  {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 10,
      topSrc: cu7,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "5%",
      allImage:  [ {img: scd}, {img: wild}, {img: cu1}, {img: cu2}, {img: cu3},{img:cu9,}, {img: tcd}, {img: cu4}, {img: cu5}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 11,
      topSrc: cu8,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "22%",
      allImage: [{img: tcd}, {img: scd}, {img: wild}, {img: cu1}, {img: cu2}, {img: cu3},{img:cu9,}, {img: cu4}, {img: cu5}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 12,
      topSrc: cu9,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "28%",
      allImage: [{img:cu9,},{img: tcd}, {img: scd}, {img: wild}, {img: cu1}, {img: cu2}, {img: cu3}, {img: cu4}, {img: cu5}, {img: cu6}, {img: cu7}, {img: cu8}, {img: cu10}]
    },
    {
      id: 13,
      topSrc: cu10,
      topAlt: "image",
      headTxt: "Forest Wild Life",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 (208)",
      discountTxt: "1.50%",
      allImage: [{img: cu4}, {img: cu5}, {img: cu6}, {img: cu7},  {img:cu9,},{img: tcd}, {img: scd}, {img: wild}, {img: cu1}, {img: cu2}, {img: cu3}, {img: cu8}, {img: cu10}]
    },
  ];

  return {
    trendingData,
  };
};

export default TrendingCartData;
