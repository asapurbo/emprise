import { Link } from "react-router-dom";

const List = ({ to, className, text }) => {
  return (
    <li className={`font-pop text-xl font-medium text-primaryColor ${className}`}>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default List;
