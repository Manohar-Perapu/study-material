/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon4 } from "../../icons/Icon4";
import "./style.css";

export const PrimaryButton = ({ showIcon = true, text = "Get Started", stateProp, type, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    type: type || "primary",
  });

  return (
    <button
      className={`primary-button ${state.type} ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="label">{text}</div>
      {showIcon && (
        <Icon4
          className="icon"
          color={
            state.state === "default" && state.type === "secondary"
              ? "#009379"
              : state.type === "secondary" && state.state === "hover"
              ? "#016D5A"
              : state.state === "disabled"
              ? "#868686"
              : "white"
          }
        />
      )}
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

PrimaryButton.propTypes = {
  showIcon: PropTypes.bool,
  text: PropTypes.string,
  stateProp: PropTypes.oneOf(["disabled", "hover", "default"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
};
