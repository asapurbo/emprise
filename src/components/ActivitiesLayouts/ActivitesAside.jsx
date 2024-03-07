import Heading from "../commonComponents/Heading";
import Image from "../commonComponents/Image";
import vec from "../../assets/vec.png";
import PopularTags from "./PopularTags";
import Duration from "./Duration";
import PriceRange from "./PriceRange";
import TourRating from "./TourRating";
import AgeGroup from "./AgeGroup";
import Specials from "./Specials";

const ActivitesAside = () => {
  return (
    <aside className="py-8 w-[424px] pl-12 border border-solid border-acBdr h-s2100 rounded-2xl">
      <div>
        <Heading
          text="When are you traveling?"
          as="h3"
          className="font-pop text-base font-normal text-heardColor"
        />
      </div>

      <div className="relative mt-3">
        <input
          type="text"
          className="border border-solid w-[328px] border-acBdr rounded-lg py-3 pl-4 pr-24 font-pop text-bdrColor text-base font-normal placeholder:font-pop placeholder:text-base placeholder:font-normal focus:outline-acBdr"
          placeholder="Select start date"
        />
        <div className="absolute right-14 top-1/2 -translate-y-1/2 cursor-pointer ">
          <Image src={vec} alt="image" />
        </div>
      </div>

      <div className="mt-10">
        <PopularTags />
      </div>
      <div className="mt-10">
        <PriceRange />
      </div>
      <div className="mt-10">
        <Duration />
      </div>

      <div className="mt-10">
        <TourRating />
      </div>

      <div className="mt-10">
        <AgeGroup />
      </div>

      <div className="mt-10">
        <Specials />
      </div>
    </aside>
  );
};

export default ActivitesAside;
