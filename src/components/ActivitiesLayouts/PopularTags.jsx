import AcChackBoxWIthTxt from "../ActivitiesComponents/AcChackBoxWIthTxt";

const PopularTags = () => {
  const popular = [
    {labelTxt:"Child Friendly", htmlFor: 'child'},
    {labelTxt:"Taking extra precautions", htmlFor: 'taking'},
    {labelTxt:"Away from the chaos", htmlFor: 'away'},
    {labelTxt:"Epic Challenges", htmlFor: 'epic'},
    {labelTxt:"Virtual Experiences", htmlFor: 'virtual'},
  ];
  return (
    <div>
      <AcChackBoxWIthTxt labelTxt={[...popular]} headTxt="Popular Tags" type={true} />
    </div>
  );
};

export default PopularTags;
