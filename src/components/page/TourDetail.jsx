import SimilarTours from "../TourDetailLayout/SimilarTours"
import TourContent from "../TourDetailLayout/TourContent"
import TourDetailSlider from "../TourDetailLayout/TourDetailSlider"

const TourDetail = () => {
  return (
    <div>
        <TourDetailSlider/>
        <TourContent/>
        <SimilarTours/>
    </div>
  )
}

export default TourDetail