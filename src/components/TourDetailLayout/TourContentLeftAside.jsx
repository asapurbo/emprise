import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Image from "../commonComponents/Image";
import shareIcon from "../../assets/shareIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import cstar from "../../assets/cstar.png";

const TourContentLeftAside = () => {
  //   const dispatch = useDispatch();
  const data = useSelector(function (state) {
    return state;
  });
  //   let imgAllData = data.imageData.imgData;
  //   let cartData = data.allData.data;

  return (
    <div className="w-[798px] mt-16">
      <Flex className="justify-between mb-5">
        <Heading
          text="Sandy beach holiday in Lagos"
          as="h3"
          className="font-pop text-4xl font-bold text-primaryColor"
        />
        <Flex className="gap-x-6">
          <Image src={shareIcon} alt="image" />
          <div
            //   onClick={() => {
            //     return handleInfoData();
            //   }}
            className={
              // handleOne()
              `flex justify-center duration-200 items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer shadow-heartShadow`
              //   : `flex justify-center duration-200 items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer`
            }
          >
            {/* {handleOne() ? ( */}
            {/* <FaHeart className="text-2xl text-[#EE5879]" /> */}
            {/* ) : ( */}
            <FaRegHeart className="text-2xl text-heardColor" />
            {/* )} */}
          </div>
        </Flex>
      </Flex>

      <div>
        <Flex className='items-center border-b border-solid border-acBdr pb-4'>
          <Image src={cstar} />
          <Heading text="6,788 Reviews" as="h3" className="text-bdrColor font-pop font-medium text-base" />
        </Flex>
      </div>
    </div>
  );
};

export default TourContentLeftAside;
