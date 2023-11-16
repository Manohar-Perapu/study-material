/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Search = ({
  className,
  frame = "https://c.animaapp.com/KLIOKiqK/img/frame-32.svg",
  img = "https://c.animaapp.com/KLIOKiqK/img/frame-32-1.svg",
}) => {
  return (
    <div className={`search ${className}`}>
      <div className="frame-4">
        <div className="text-wrapper-4">Course</div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="text-wrapper-5">Select Course</div>
          </div>
          <img className="frame-7" alt="Frame" src={frame} />
        </div>
      </div>
      <div className="frame-4">
        <div className="text-wrapper-6">Specialization</div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="text-wrapper-7">Select Specialization</div>
          </div>
          <img className="frame-7" alt="Frame" src={img} />
        </div>
      </div>
      <div className="frame-8">
        <img className="vector-2" alt="Vector" src="https://c.animaapp.com/KLIOKiqK/img/vector-7.svg" />
        <div className="frame-9">
          <div className="text-wrapper-8">View</div>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  frame: PropTypes.string,
  img: PropTypes.string,
};
