import Image from "../commonComponents/Image";
import Heading from "../commonComponents/Heading";
import Paragraph from "../commonComponents/Paragraph";
import Flex from "../commonComponents/Flex";
import { FaHeart } from "react-icons/fa";
import time from "../../assets/time.png";
import stars from "../../assets/stars.png";
import { FaCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../features/cartSlice";
import style from "../../css/animation.module.css";
import { Link } from "react-router-dom";
import { allCardImage } from "../../features/cardImageSlice";

const TrendingCart = ({
  topSrc,
  topAlt,
  headTxt,
  paraTxt,
  price,
  days,
  rating,
  discountTxt,
  infoData,
}) => {
  

  const dispatch = useDispatch();
  const data = useSelector(function (state) {
    return state.allData.data;
  });

  function handleInfoData() {
    if (!data.find((item) => item.id === infoData.id)) {
      dispatch(addToWishList(infoData));
    } else {
      if (data.find((item) => item.id === infoData.id)) {
        const deleteData = data.map((item) => {
          if (item.id === infoData.id) {
            item = undefined;
          }
          return item;
        });
        const deleteDataFilter = deleteData.filter(
          (item) => item !== undefined
        );
        dispatch(addToWishList(deleteDataFilter));
      }
    }
  }

  function handleOne() {
    try {
      if (data.find((item) => item.id === infoData.id)) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleImageData = (data) => {
    dispatch(allCardImage(data));
  };

  console.log(data);
  return (
    <div className="w-s512 pt-4 px-4 pb-8 shadow-trendingCard rounded-r20 relative mb-2 mt-2">
      <div className="rounded-r20 overflow-hidden pb-8">
        <div
          onClick={() => {
            return handleImageData(infoData);
          }}
        >
          <Link to="/tourDetail">
            <Image src={topSrc} alt={topAlt} className="w-full" />
          </Link>
        </div>
        {discountTxt && (
          <div className="absolute top-8 right-10">
            <Heading
              text={discountTxt}
              as="h3"
              className="text-[#EE5879] bg-[#F9C7D2] inline-block rounded-2xl py-1 px-4 text-lg font-pop font-medium"
            />
          </div>
        )}
      </div>
      <div className="px-4">
        <Flex className="justify-between">
          <div>
            <Heading
              text={headTxt}
              as="h3"
              className="text-primaryColor text-2xl font-semibold font-pop pb-2"
            />
            <Paragraph
              text={paraTxt}
              className="text-bdrColor font-pop text-base font-normal"
            />
          </div>
          <div
            onClick={() => {
              return handleInfoData();
            }}
            className={
              handleOne()
                ? `flex justify-center duration-200 items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer shadow-heartShadow ${style.animation}`
                : `flex justify-center duration-200 items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer`
            }
          >
            {handleOne() ? (
              <FaHeart className="text-2xl text-[#EE5879]" />
            ) : (
              <FaRegHeart className="text-2xl text-heardColor" />
            )}
          </div>
        </Flex>

        <Flex className="mt-7 justify-between items-center">
          <div>
            <Paragraph
              text="from"
              className="text-[#546179] font-pop text-base font-normal"
            />
            <Heading
              text={price}
              as="h3"
              className='text-primaryColor font-pop text-t40 font-bold  after:after:content-[" "] after:bg-afterColor after:w-full after:h-1 relative after:absolute top-0 inline-block after:left-0 after:bottom-5 after:z-[-1] z-[999]'
            />
            <Paragraph
              text="*Price varies"
              className="text-[#546179] font-pop text-base font-normal"
            />
          </div>
          <div>
            <Image src={stars} />
            <Paragraph
              text={rating}
              className="text-bdrColor font-pop text-base font-normal text-end pt-2"
            />
          </div>
        </Flex>

        <Flex className="mt-10 gap-x-2 items-center mb-2">
          <div>
            <Image src={time} />
          </div>
          <div>
            <Paragraph
              text={days}
              className="text-[#546179] font-pop text-base font-semibold"
            />
          </div>
        </Flex>

        <Flex className="gap-x-6 items-center mt-2">
          <Flex className="gap-x-2 items-center">
            <div>
              <FaCheck className="text-[#28B0A6]" />
            </div>
            <div>
              <Paragraph
                text="Free Cancellation"
                className="text-[#546179] font-pop text-base font-normal"
              />
            </div>
          </Flex>
          <Flex className="gap-x-2 items-center">
            <div>
              <FaCheck className="text-[#28B0A6]" />
            </div>
            <div>
              <Paragraph
                text="New on Entrada"
                className="text-[#546179] font-pop text-base font-normal"
              />
            </div>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default TrendingCart;
