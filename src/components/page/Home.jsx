import Adventures from "../HomeLayouts/Adventures";
import Category from "../HomeLayouts/Category";
import CompanyLogo from "../HomeLayouts/CompanyLogo";
import Content from "../HomeLayouts/Content";
import Destinations from "../HomeLayouts/Destinations";
import HomeBanner from "../HomeLayouts/HomeBanner";
import Question from "../HomeLayouts/Question";
import TourGuides from "../HomeLayouts/TourGuides";
import Trending from "../HomeLayouts/Trending";
import BestSeller from "../commonLayouts/BestSeller";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Category/>
      <Trending/>
      <Destinations/>
      <BestSeller/>
      <TourGuides/>
      <Content/>
      <Adventures/>
      <CompanyLogo/>
      <Question/>
    </>
  );
};

export default Home;
