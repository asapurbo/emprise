import { useEffect, useRef } from "react";

const useOver = () => {
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const comRef = useRef(null);

    useEffect(() => {
      function handleClick() {
        if (inputRef.current) {
          inputRef.current.classList.toggle("w-s300");
          inputRef.current.classList.toggle("px-s48");
        }
      }
      const serRef = searchRef.current;
      if (serRef) {
        serRef.addEventListener("click", handleClick);
        return () => {
          serRef.removeEventListener("click", handleClick);
        };
      }
    }, [inputRef, searchRef]);
  
    useEffect(() => {
      function handleClick() {
        if (comRef.current) comRef.current.style.display = "block";
      }
      let serRef = searchRef.current;
      if (serRef) {
        serRef.addEventListener("mouseover", handleClick);
        return () => {
          serRef.removeEventListener("mouseover", handleClick);
        };
      }
    }, [searchRef, comRef]);
  
    useEffect(() => {
      function handleClick() {
        if (comRef.current) comRef.current.style.display = "none";
      }
      let serRef = searchRef.current;
      if (serRef) {
        serRef.addEventListener("mouseout", handleClick);
        return () => {
          serRef.removeEventListener("mouseout", handleClick);
        };
      }
    }, [searchRef, comRef]);
  
  return {
    searchRef,
    comRef,
    inputRef
  }
}

export default useOver