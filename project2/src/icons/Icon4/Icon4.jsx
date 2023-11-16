/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon4 = ({ color = "#016D5A", className }) => {
  return (
    <svg
      className={`icon-4 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.125 10.0244H16.875M16.875 10.0244L11.25 4.39941M16.875 10.0244L11.25 15.6494"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

Icon4.propTypes = {
  color: PropTypes.string,
};
