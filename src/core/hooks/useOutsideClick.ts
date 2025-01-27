import { RefObject, useEffect, useState } from "react";

const useOutsideClick = () => {
  const [isOutside, setIsOutside] = useState<boolean>(false);
  const [targetRef, setTargetRef] = useState<RefObject<HTMLElement>>({
    current: null,
  });

  const handleClickOutside = (e: MouseEvent) => {
    const clickedElement = e.target as HTMLElement;
    // console.log(clickedElement);
    if (targetRef.current?.contains(clickedElement)) {
      //   console.log("sustain");
      setIsOutside(false);
    } else {
      setIsOutside(true);
      //   console.log("outside");
    }
  };
  useEffect(() => {
    if (targetRef.current) {
      console.log(targetRef);
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [targetRef]);
  return {
    setTargetRef,
    isOutside,
  };
};
export default useOutsideClick;
