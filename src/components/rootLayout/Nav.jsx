import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import Image from "../commonComponents/Image";
import logo from "../../assets/logo.png";
import List from "../commonComponents/List";
import { FaSearch } from "react-icons/fa";
import Heading from "../commonComponents/Heading";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import useOver from "../../hook/useOver";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../features/cartSlice";
import { FaHeart } from "react-icons/fa";
import useClick from "../../hook/useClick";
import { FaXmark } from "react-icons/fa6";

const Nav = () => {
  const { regHeartRef, bodyRef } = useClick();

  const dispatch = useDispatch();
  const {
    searchRef: searchRef,
    comRef: comRef,
    inputRef: inputRef,
  } = useOver();

  const data = useSelector(function (state) {
    return state.allData.data;
  });

  function handleClick(e) {
    const xData = data.map((item) => {
      if (item.id === e.id) {
        return undefined;
      }
      return item;
    });
    const yData = xData.filter((item) => {
      return item !== undefined;
    });
    dispatch(addToWishList(yData));
  }

  return (
    <nav className="py-12">
      <Container>
        <Flex className="items-center justify-between">
          <Flex className="items-center gap-x-28">
            <div>
              <Image src={logo} />
            </div>
            <ul className="flex gap-x-12">
              <List text="Destination" to="/" />
              <List text="Activities" to="/activities" />
              <List text="Specials" to="/" />
            </ul>
            <Flex className="items-center relative">
              <div
                className="absolute h-full flex justify-center items-center w-12 cursor-pointer"
                ref={searchRef}
              >
                <FaSearch className="text-primaryColor" />
              </div>
              <div
                ref={comRef}
                className="absolute duration-300 -top-10 w-[150px] hidden bg-bdrColor text-center p-1 rounded-md"
              >
                <Heading
                  text="Click Here"
                  as="h3"
                  className="font-pop text-sm font-medium text-white"
                />
                <div className="absolute bg-bdrColor w-3 h-3 -bottom-1 left-4 rotate-45"></div>
              </div>
              <input
                ref={inputRef}
                type="text"
                className="border-2 rounded-md placeholder:font-pop placeholder:text-sm placeholder:font-medium placeholder:text-primaryColor border-bdrColor w-0 px-6  h-10 focus:outline-bdrColor  font-pop text-sm font-medium text-primaryColor duration-500"
                placeholder="Search...."
              />
            </Flex>
          </Flex>

          <Flex className="gap-x-2 items-center ">
            <div className="relative group">
              <div className={data.length === 0 ? "mr-7 flex justify-center items-center w-12 h-12 rounded-full bg-heardBg cursor-not-allowed": "mr-7 flex justify-center items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer"} >
                <span ref={regHeartRef}>
                  {data.length > 0 ? (
                    <FaHeart className="text-2xl text-[#EE5879]" />
                  ) : (
                    <FaRegHeart className="text-2xl text-heardColor" />
                  )}
                </span>
              </div>
              {data.length > 0 && (
                <div
                  ref={bodyRef}
                  className="absolute top-16 -left-10 w-s360 p-4 z-[99999999] bg-white shadow-md rounded-md border border-solid border-[#E9ECEF] hidden"
                >
                  <div className="relative after:absolute after:content-[''] after:w-5 after:h-5 after:bg-white after:-top-6 after:z-50 after:rotate-45 after:left-10 duration-300 after:border-l after:border-t after:border-solid after:border-[#E9ECEF]">
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className={`flex border-b border-solid border-[#E9ECEF] py-2 items-center justify-between relative duration-300`}
                      >
                        <Flex className="items-center gap-x-3">
                          <div className="w-20">
                            <Image
                              src={item.topSrc}
                              className="w-full h-auto"
                            />
                          </div>
                          <div>
                            <Heading
                              text={item.headTxt}
                              as="h3"
                              className="font-pop text-primaryColor text-lg font-bold"
                            />
                            <Heading
                              text={item.price}
                              as="h3"
                              className="font-pop text-base text-primaryColor font-semibol pt-2"
                            />
                          </div>
                        </Flex>
                        <div className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-heardBg duration-300 cursor-pointer">
                          <span onClick={() => handleClick(item)}>
                            
                              <FaXmark className="text-2xl text-heardColor" />
                          
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {
               data.length === 0 && <div
                  className="absolute duration-300 hidden group-hover:block -top-10 w-[150px] bg-bdrColor text-center p-1 rounded-md"
                >
                  <Heading
                    text="Add To Wishlist"
                    as="h3"
                    className="font-pop text-sm font-medium text-white"
                  />
                  <div className="absolute bg-bdrColor w-3 h-3 -bottom-1 left-4 rotate-45"></div>
                </div>
              }
            </div>
            <Link
              to="/"
              className="font-pop text-xl border-bdrColor hover:border-[#28B0A6] border-solid border rounded-r28 font-medium text-primaryColor py-3 hover:text-white px-6 hover:bg-[#28B0A6] duration-300"
            >
              Login
            </Link>

            <Link
              to="/"
              className="font-pop text-xl rounded-r28 border-bdrColor hover:border-[#28B0A6] border-solid border font-medium text-primaryColor py-3 hover:text-white px-6 hover:bg-[#28B0A6] duration-300"
            >
              Sign up
            </Link>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Nav;
