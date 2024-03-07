import { Link } from "react-router-dom";
import Heading from "../commonComponents/Heading";

const FooterItemCmp = ({ item, headtxt }) => {
  const data = item;
  return (
    <div>
      <Heading
        text={headtxt}
        as="h3"
        className="font-pop text-2xl font-medium text-primaryColor pb-4"
      />
      <ul>
        {data.map((item, index) => (
          <li
            className="py-2 font-pop text-base font-normal text-heardColor"
            key={index}
          >
            <Link to={item.to}>{item.linkData}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItemCmp;
