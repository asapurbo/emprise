import { IoIosArrowForward } from "react-icons/io";

const Next = ({ onClick, nextClass }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[72px] flex h-[72px] justify-center rounded-full hover:border-none cursor-pointer border border-solid border-heardColor group hover:bg-searchColor duration-300 items-center absolute -top-36 right-0 z-[999999999] ${nextClass}`}
    >
      <IoIosArrowForward className="text-[30px] group-hover:text-white text-heardColor" />
    </div>
  );
};

export default Next;
