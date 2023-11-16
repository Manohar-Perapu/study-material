/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeWrapper = ({
  className,
  frame = "https://c.animaapp.com/KLIOKiqK/img/frame-16.svg",
  chevronRight = "https://c.animaapp.com/KLIOKiqK/img/chevronright.svg",
}) => {
  return (
    <div className={`home-wrapper ${className}`}>
      <img className="frame-3" alt="Frame" src={frame} />
      <img className="chevron-right" alt="Chevron right" src={chevronRight} />
      <div className="text-wrapper-3">Study Material</div>
    </div>
  );
};

HomeWrapper.propTypes = {
  frame: PropTypes.string,
  chevronRight: PropTypes.string,
};
