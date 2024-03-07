import TourContentAsideNavList from "../TourDetailComponents/TourContentAsideNavList";

const TourContentAsideNav = () => {
  return (
    <div className="mt-8">
      <ul className="flex justify-between">
        <TourContentAsideNavList text="Overview" to="/" />
        <TourContentAsideNavList text="Itinerary" to="/" />
        <TourContentAsideNavList text="Inclusions" to="/" />
        <TourContentAsideNavList text="Reviews" to="/" />
        <TourContentAsideNavList text="FAQ" to="/" />
        <TourContentAsideNavList text="Essential Info" to="/" />
      </ul>
    </div>
  );
};

export default TourContentAsideNav;
