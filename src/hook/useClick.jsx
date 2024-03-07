import { useEffect, useRef } from "react";

const useClick = () => {
  const regHeartRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    try {
      const handleClickBtn = () => {
        if (bodyRef.current.style.display === "block") {
          bodyRef.current.style.display = "none";
        } else {
          bodyRef.current.style.display = "block";
        }
      };

      regHeartRef.current.addEventListener("click", handleClickBtn);

      return () =>
        regHeartRef.current.removeEventListener("click", handleClickBtn);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const handleSiteClick = (e) => {
      if (
        bodyRef.current.style.display === "block" &&
        !bodyRef.current.contains(e.target) &&
        !regHeartRef.current.contains(e.target)
      ) {
        bodyRef.current.style.display = "none";
      }
    };

    window.addEventListener("click", (e) => {
      handleSiteClick(e);
    });
  });

  return {regHeartRef, bodyRef};
};

export default useClick;
