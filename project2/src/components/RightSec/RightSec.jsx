/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PrimaryButton } from "../PrimaryButton";
import "./style.css";

export const RightSec = ({
  className,
  line = "https://c.animaapp.com/KLIOKiqK/img/line-1.svg",
  img = "https://c.animaapp.com/KLIOKiqK/img/line-2.svg",
  hubClassName,
}) => {
  return (
    <div className={`right-sec ${className}`}>
      <div className="frame-2">
        <img className="line" alt="Line" src={line} />
        <img className="img" alt="Line" src={img} />
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-2">Educational</div>
      </div>
      <div className="hub-wrapper">
        <div className={`hub ${hubClassName}`}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hub
        </div>
      </div>
      <PrimaryButton className="primary-button-instance" stateProp="default" text="Know more" type="primary" />
    </div>
  );
};

RightSec.propTypes = {
  line: PropTypes.string,
  img: PropTypes.string,
};
