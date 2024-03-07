import AcChackBoxWIthTxt from "../ActivitiesComponents/AcChackBoxWIthTxt";

const AgeGroup = () => {
  const ageGroup = [
    { labelTxt: "1 & Up", htmlFor: "1up" },
    { labelTxt: "3 & Up", htmlFor: "3pu" },
    { labelTxt: "7 & Up", htmlFor: "7up" },
    { labelTxt: "13 & Up", htmlFor: "13up" },
    { labelTxt: "18 & Up", htmlFor: "18up" },
  ];
  return (
    <div>
      <AcChackBoxWIthTxt
        labelTxt={[...ageGroup]}
        headTxt="Duration"
        type={true}
      />
    </div>
  );
};

export default AgeGroup;
