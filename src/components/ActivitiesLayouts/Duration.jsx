import AcChackBoxWIthTxt from "../ActivitiesComponents/AcChackBoxWIthTxt";

const Duration = () => {
  const duration = [
    { labelTxt: "Upto 1 Hour", htmlFor: "upto" },
    { labelTxt: "1 to 4 Hours", htmlFor: "hours" },
    { labelTxt: "4 Hours to 1 Day", htmlFor: "day" },
    { labelTxt: "1 to 3 Days", htmlFor: "days" },
    { labelTxt: "3 Days or More", htmlFor: "more" },
  ];
  return (
    <div>
      <AcChackBoxWIthTxt labelTxt={[...duration]} headTxt="Duration" type={true} />
    </div>
  );
};

export default Duration;
