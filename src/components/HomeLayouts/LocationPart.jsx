import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const LocationPart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const allData = async () => {
      const mainData = await fetch("https://restcountries.com/v3.1/all");
      if (!mainData.ok) {
        console.log("not found");
      }
      const fData = await mainData.json();
      setData(fData);
    };
    allData();
  }, []);

  return (
    <div className="w-s1328 absolute py-12 bg-white left-1/2 shadow-locationShadow -translate-x-1/2 -bottom-24 rounded-2xl px-s72">
      <Flex className="justify-between items-center">
        <div>
          <Heading
            text="Location"
            as="h3"
            className='text-secondaryColor font-pop text-t28 after:after:content-[" "] after:bg-afterColor after:w-full after:h-1 relative after:absolute top-0 inline-block after:left-0 after:bottom-1 after:z-[-1] z-[999] font-semibold'
          />
          <Flex className="mt-4 items-center gap-x-5 relative">
            <select className="p-1 text-[#99a3ad] font-pop text-lg font-normal underline appearance-none focus:outline-transparent">
              <option value="">Enter your destination</option>
              {data.map((item, index) => (
                <option key={index} value="">
                  {item.name.common}
                </option>
              ))}
            </select>
            <div>
              <CiLocationOn className="text-2xl text-[#99a3ad]" />
            </div>
          </Flex>
        </div>
        <div className="w-[1px] h-20 bg-[#99a3ad]"></div>
        <div>
          <Heading
            text="Activity"
            as="h3"
            className='text-secondaryColor font-pop text-t28 after:after:content-[" "] after:bg-afterColor after:w-full after:h-1 relative after:absolute top-0 inline-block after:left-0 after:bottom-1 after:z-[-1] z-[999] font-semibold'
          />
          <Flex className="mt-4 items-center gap-x-5 relative">
            <select className="p-1 text-[#99a3ad] font-pop text-lg font-normal underline appearance-none focus:outline-transparent">
              <option value="">Bungee jump</option>
              <option value="">3</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
            </select>
            <div>
              <MdOutlineArrowDropDownCircle className="text-2xl text-[#99a3ad]" />
            </div>
          </Flex>
        </div>
        <div className="w-[1px] h-20 bg-[#99a3ad]"></div>
        <div>
          <Heading
            text="Date"
            as="h3"
            className='text-secondaryColor font-pop text-t28 after:after:content-[" "] after:bg-afterColor after:w-full after:h-1 relative after:absolute top-0 inline-block after:left-0 after:bottom-1 after:z-[-1] z-[999] font-semibold'
          />
          <Flex className="mt-4 items-center gap-x-5">
            <select className="p-1 text-[#99a3ad] font-pop text-lg font-normal underline appearance-none focus:outline-transparent">
              <option value="">Set date</option>
              <option value="">3</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
            </select>
            <div>
              <MdDateRange className="text-2xl text-[#99a3ad]" />
            </div>
          </Flex>
        </div>

        <Flex className="w-s112 h-s112 rounded-2xl justify-center items-center bg-searchColor cursor-pointer">
          <FaSearch className="text-[32px] text-white" />
        </Flex>
      </Flex>
    </div>
  );
};

export default LocationPart;
