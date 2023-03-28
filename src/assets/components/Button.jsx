import React from "react";
import "./styles/Button.css";

const Button = ({ handleNewQuoate }) => {
  return (
    <button className="button" onClick={handleNewQuoate}>
      Ver Otro{" "}
    </button>
  );
};

export default Button;
