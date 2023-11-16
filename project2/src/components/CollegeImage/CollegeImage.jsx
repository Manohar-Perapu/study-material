/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CollegeImage = ({
  className,
  imageClassName,
  image = "https://c.animaapp.com/KLIOKiqK/img/image-2.png",
}) => {
  return (
    <div className={`college-image ${className}`}>
      <img className={`image ${imageClassName}`} alt="Image" src={image} />
    </div>
  );
};

CollegeImage.propTypes = {
  image: PropTypes.string,
};
