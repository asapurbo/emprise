import Container from "../commonComponents/Container";
import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";

const ActivitiesTopBar = () => {
  return (
    <section className="py-10">
      <Container>
        <div>
          <Flex className="py-8 border border-solid border-acBdr rounded-r20 justify-between pl-6 pr-14">
            <Heading
              text="Showing 1 - 10 of 2037 results for “cultural”"
              as="h3"
              className="font-pop text-lg font-normal text-secondaryColor"
            />

            <Flex className="items-center gap-x-3">
              <Heading
                text="Sort by:"
                as="h3"
                className="font-pop text-lg font-normal text-acTxt"
              />

              <select className="font-pop text-lg font-semibold text-secondaryColor px-5">
                <option>Most Popular</option>
                <option>Most Popular</option>
                <option>Most Popular</option>
                <option>Most Popular</option>
                <option>Most Popular</option>
              </select>
            </Flex>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default ActivitiesTopBar;
