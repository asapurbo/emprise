import { Link } from "react-router-dom";

const ItineraryDaysNavList = ({to, text}) => {
  return (
    <li className="font-pop text-base font-medium text-primaryColor duration-300 hover:text-bdrColor">
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default ItineraryDaysNavList;
