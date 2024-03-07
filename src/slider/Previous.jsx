import { IoIosArrowBack } from "react-icons/io";

const Previous = ({ onClick, preClass }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[72px] flex h-[72px] justify-center rounded-full hover:border-none cursor-pointer border border-solid border-heardColor group hover:bg-searchColor duration-300 items-center absolute -top-36 right-24 z-[999999999] ${preClass}`}
    >
      <IoIosArrowBack className="text-[30px] group-hover:text-white text-heardColor" />
    </div>
  );
};

export default Previous;
