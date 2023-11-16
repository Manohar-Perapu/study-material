/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Home } from "../../icons/Home";
import "./style.css";

export const Header = ({
  className,
  icon = <Home className="home-instance" />,
  vector = "https://c.animaapp.com/KLIOKiqK/img/vector-1.svg",
  img = "https://c.animaapp.com/KLIOKiqK/img/vector-2.svg",
  vector1 = "https://c.animaapp.com/KLIOKiqK/img/vector-3.svg",
}) => {
  return (
    <div className={`header ${className}`}>
      <div className="frame">
        <img
          className="gayatri-vidya"
          alt="Gayatri vidya"
          src="https://c.animaapp.com/KLIOKiqK/img/gayatri-vidya-parishad-college-for-degree-and-pg-courses-a-squar-1@2x.png"
        />
      </div>
      <div className="link-upper-sec-wrapper">
        <div className="link-upper-sec">
          {icon}
          <div className="div">
            <div className="text-wrapper">About</div>
            <img className="vector" alt="Vector" src={vector} />
          </div>
          <div className="div">
            <div className="text-wrapper">Course</div>
            <img className="vector" alt="Vector" src={img} />
          </div>
          <div className="div">
            <div className="text-wrapper">Admissions</div>
            <img className="vector" alt="Vector" src={vector1} />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
