import ActivitiesContent from "../ActivitiesLayouts/ActivitiesContent";
import ActivitiesService from "../ActivitiesLayouts/ActivitiesService";
import ActivitiesTopBar from "../ActivitiesLayouts/ActivitiesTopBar";
import RecentlyViewed from "../ActivitiesLayouts/RecentlyViewed";

const Activities = () => {
  return (
    <>
      <ActivitiesTopBar />
      <ActivitiesService />
      <ActivitiesContent/>
      <RecentlyViewed/>
    </>
  );
};

export default Activities;
