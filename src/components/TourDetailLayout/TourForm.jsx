import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import { CiCirclePlus } from "react-icons/ci";
("use client");
import { useState } from "react";
import { DatePicker } from "keep-react";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counterSlice";
const TourForm = () => {
  const [date, setDate] = useState(null);
  const data = useSelector((state) => state.count.value);
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <del className="font-pop text-sm font-medium text-dColor">£2469</del>
      </div>
      <Flex className="items-center justify-between mt-4">
        <Flex className="items-center gap-x-2">
          <Heading
            text="£1759"
            as="h3"
            className="font-pop font-bold text-4xl text-primaryColor"
          />

          <Heading
            text="per person"
            as="h3"
            className="font-pop font-normal text-sm text-heardColor"
          />
        </Flex>
        <div>
          <button className="py-2 px-4 bg-tBtnBg rounded-3xl text-base font-pop font-medium text-searchColor">
            20% OFF
          </button>
        </div>
      </Flex>

      <div className="mt-2">
        <Heading
          text="*Price based on selections bellow."
          as="h3"
          className="font-pop font-normal text-sm text-bdrColor"
        />
      </div>

      <form className="mt-8">
        <div>
          <Heading
            text="Dates"
            as="h3"
            className="font-pop font-normal text-base text-heardColor"
          />
          <div className="mt-2">
            <DatePicker singleDate={setDate} placeholder="Date / Month / Year">
              <DatePicker.SingleDate />
            </DatePicker>
          </div>
        </div>

        <div className="mt-6">
          <Heading
            text="Travelers"
            as="h3"
            className="font-pop font-normal text-base text-heardColor"
          />

          <div className="mt-2 relative">
            <input
              type="text"
              placeholder="2 Adult, 1 Child"
              className="rounded-lg py-3 px-4 w-full text-base font-pop font-normal  border border-solid border-acBdr focus:outline-acBdr"
            />
            <Flex className="absolute top-1/2 -translate-y-1/2 right-4 items-center gap-x-4">
              <div onClick={() => dispatch(decrement())}  className="cursor-pointer">
                <CiCircleMinus className="text-2xl text-bdrColor" />
              </div>
              <span className="text-black font-pop font-semibold text-lg">
                {data}
              </span>
              <div onClick={() => dispatch(increment())} className="cursor-pointer">
                <CiCirclePlus className="text-2xl text-bdrColor" />
              </div>
            </Flex>
          </div>
        </div>

        <div className="mt-6">
          <Heading
            text="Selections"
            as="h3"
            className="font-pop font-normal text-base text-heardColor"
          />

          <div className="mt-2 relative">
            <input
              type="text"
              placeholder="Flight, hotel, car etc."
              className="rounded-lg py-3 px-4 w-full text-base font-pop font-normal  border border-solid border-acBdr focus:outline-acBdr"
            />
            <Flex className="absolute top-1/2 -translate-y-1/2 right-4 items-center gap-x-4">
            <div className="cursor-pointer">
                <CiCirclePlus className="text-2xl text-bdrColor" />
              </div>
            </Flex>
          </div>
          
          <div className="mt-14">
            <button className="formBtn py-3 w-full rounded-lg font-pop font-semibold text-lg text-white">Check Availability</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TourForm;
