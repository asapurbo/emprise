import { Link } from "react-router-dom"

const TourContentAsideNavList = ({to, text}) => {
  return (
    <li className="font-pop text-lg list-none inline-block duration-300 font-normal text-heardColor hover:text-searchColor relative after:absolute after:after:content-[''] after:bg-searchColor after:h-1 after:w-0 after:duration-300 after:hover:w-full after:-bottom-[2px] after:left-0"><Link to={to}>{text}</Link></li>
  )
}

export default TourContentAsideNavList