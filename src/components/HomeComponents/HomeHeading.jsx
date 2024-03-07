const HomeHeading = ({headTxt, paraTxt, headClass, paraClass}) => {
  return (
    
    <div>
       <h3 className={`text-primaryColor font-pop text-t40 font-bold ${headClass}`}>{headTxt}</h3>
       <p className={`text-[#546179] font-pop text-2xl font-normal pt-4 ${paraClass}`}>{paraTxt}</p>
    </div>
  )
}

export default HomeHeading