import Heading from "../commonComponents/Heading";
import Image from "../commonComponents/Image";

const CategoryCart = ({ ratingTxt, headTxt, paraTxt, src, alt }) => {
  return (
    <div className="w-s376 p-8 shadow-category rounded-lg mb-2 mt-2">
      <div className="text-right mb-12">
        <Heading
          text={ratingTxt}
          as="h3"
          className="text-afterColor bg-[#FEF2DE] inline-block rounded-2xl py-1 px-4 text-lg font-pop font-medium"
        />
      </div>
      <div>
        <Image src={src} alt={alt} />
      </div>
      <div>
        <Heading
          text={headTxt}
          as="h3"
          className="text-primaryColor text-2xl font-pop font-normal pt-5"
        />
      </div>
      <div>
        <p className="text-[#546179] font-pop text-2xl font-normal pt-4">
          {paraTxt}
        </p>
      </div>
    </div>
  );
};

export default CategoryCart;
