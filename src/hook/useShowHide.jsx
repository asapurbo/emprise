import { useEffect, useRef } from "react";

const useShowHide = () => {
  const dayWrapRef = useRef();
  const dayBtnRef = useRef();
  const arrowRef = useRef();

  const handleToggle = () => {
    const mainWrap = dayWrapRef.current;
    const arrowIcon = arrowRef.current;
    mainWrap.classList.toggle("h-auto");
    mainWrap.classList.toggle("py-10");
    mainWrap.classList.toggle("px-4");
    arrowIcon.classList.toggle("rotate-180");
  };

  useEffect(() => {
    const dayButton = dayBtnRef.current;
    if (dayButton) {
      dayButton.addEventListener("click", handleToggle);
    }

    if (dayButton) {
      return () => dayButton.removeEventListener("click", handleToggle);
    }
  }, []);

  return { dayWrapRef, dayBtnRef, arrowRef };
};

export default useShowHide;
