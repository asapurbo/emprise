import CategoryCardData from "../../data/CategoryCardData";
import MainSlider from "../../slider/MainSlider";
import CategoryCart from "../HomeComponents/CategoryCart";
import HomeHeading from "../HomeComponents/HomeHeading";
import Container from "../commonComponents/Container";
const Category = () => {
  const { categoryCardData: categoryCardData } = CategoryCardData();

  return (
    <section className="pb-s136">
      <Container>
        <HomeHeading
          headTxt="Select Category"
          paraTxt="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <div className="mt-16">
          <MainSlider className="justify-between" show='4'>
            {categoryCardData.map((item, index) => (
              <CategoryCart
                key={index}
                ratingTxt={item.ratingTxt}
                headTxt={item.headTxt}
                paraTxt={item.paraTxt}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </MainSlider>
        </div>
      </Container>
    </section>
  );
};

export default Category;
