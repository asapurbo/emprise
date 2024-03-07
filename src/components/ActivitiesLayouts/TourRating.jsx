import AcChackBoxWIthTxt from "../ActivitiesComponents/AcChackBoxWIthTxt";
import star1 from '../../assets/star1.png'
import star2 from '../../assets/star2.png'
import star3 from '../../assets/star3.png'
import star4 from '../../assets/star4.png'
import star5 from '../../assets/star5.png'

const TourRating = () => {
  const tRating = [
    { labelTxt: star1, htmlFor: "star1" },
    { labelTxt: star2, htmlFor: "star2" },
    { labelTxt: star3, htmlFor: "star3" },
    { labelTxt: star4, htmlFor: "star4" },
    { labelTxt: star5, htmlFor: "star5" },
  ];
  return (
    <div>
      <AcChackBoxWIthTxt labelTxt={[...tRating]} headTxt="Duration" type={false} />
    </div>
  );
};

export default TourRating;
