import React from "react";
import "./button.scss";

const Button = props => (
  <button className="defaultButton" onClick={props.onClick}>
    {props.text}
  </button>
);

export default Button;
