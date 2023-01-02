import React, { useEffect, useState } from "react";
import ArrowUp from "../Icons/file-arrow-up.svg";
import "./ArrowUp.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#Welcome">
        <ArrowUp fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
