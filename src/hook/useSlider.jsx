import { useEffect, useRef, useState } from "react";

const useSlider = () => {
  const slideRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const opacityRef = useRef(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    let sliderIndex = 1;
    const handleIndex = (index) => {
      sliderIndex += index;
      mainSlider(sliderIndex);
    };
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => handleIndex(-1));
      nextBtn.addEventListener("click", () => handleIndex(1));
    }

    const mainSlider = (n) => {
      let sl = slideRef.current.children;
      let dotsItem = opacityRef.current.children;
      let dotsArr = Array.from(dotsItem);
      let arr = Array.from(sl);
      if (n <= 1) {
        sliderIndex = arr.length;
      }
      if (n === arr.length) {
        sliderIndex = 1;
      }
      let arrLength = arr.length;
      for (let i = 0; i < arrLength; i++) {
        arr[i].style.display = "none";
      }
      let dotsLength = dotsArr.length;
      for (let i = 0; i < dotsLength; i++) {
        dotsArr[i].classList.remove("opacity-30");
      }

      arr[sliderIndex - 1].style.display = "block";
      dotsArr[sliderIndex - 1].classList.add("opacity-30");
    };

    mainSlider((sliderIndex = current));
    mainSlider(sliderIndex);
    if (prevBtn && nextBtn) {
      return () => {
        prevBtn.removeEventListener("click", () => handleIndex(-1));
        nextBtn.removeEventListener("click", () => handleIndex(1));
      };
    }
  }, [current, slideRef, prevBtnRef, nextBtnRef, opacityRef]);

  useEffect(() => {
    let x = opacityRef.current.children;
    let slider = Array.from(x);
    for (let i = 0; i < slider.length; i++) {
      if (i != 4) {
        slider[i].children[1].style.display = "none";
      }
    }

    if (current === 5) {
      opacityRef.current.classList.add("overflow-y-scroll");
    }
    const sliderIndex = slider[4];
    if (sliderIndex) {
      sliderIndex.addEventListener("click", function () {
        slider[4].children[1].style.display = "none";
      });
    }
    if (sliderIndex) {
      return () =>
        slider[4].removeEventListener("click", function () {
          slider[4].children[1].style.display = "none";
        });
    }
  }, [current, opacityRef]);

  return {
    setCurrent,
    slideRef,
    prevBtnRef,
    nextBtnRef,
    opacityRef,
    current
  };
};

export default useSlider;
