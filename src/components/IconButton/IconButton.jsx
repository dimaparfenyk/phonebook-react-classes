import React from "react";
import css from "./IconButton.module.css";

const IconButton = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${css.iconButton} ${css[className]}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
