import AcChackBoxWIthTxt from "../ActivitiesComponents/AcChackBoxWIthTxt";

const Specials = () => {
  const specials = [
    { labelTxt: "Discounted deals", htmlFor: "discounted" },
    { labelTxt: "Free Cancellations", htmlFor: "cancellations" },
    { labelTxt: "Private Groups", htmlFor: "private" },
    { labelTxt: "New on Entrada", htmlFor: "entrada" },
    { labelTxt: "Entrada Specials", htmlFor: "specials" },
  ];
  return (
    <div>
      <AcChackBoxWIthTxt
        labelTxt={[...specials]}
        headTxt="Duration"
        type={true}
      />
    </div>
  );
};

export default Specials;
