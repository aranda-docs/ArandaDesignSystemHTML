import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    backcolor,
    color,
    text,
    size,
    disabled,
    onClick,
    name,
    id,
    bordercolor
  }=props;
  if (disabled === true) {
    return (
      <button
        disabled
        id={id}
        name={name}
        onClick={onClick}
        className={`m-4 text-sm border bg-disable ${size}  padbutton text-white rounded-md p-2 border-${bordercolor}`}
      >
        {text}
      </button>
    );
  }
  return (
    <button
    id={id}
    name={name}
    onClick={onClick}
      className={`m-4 text-sm border text-white ${size} ${backcolor} padbutton rounded-md p-2 hover:bg-opacity-50  border-${bordercolor}`}
      style={color&&{color}}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  backcolor: PropTypes.oneOf(['bg-primary', 'bg-secundary', 'bg-danger','bg-disable','bg-transparent']),
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  size:PropTypes.string,
  onClick:PropTypes.func
};
Button.defaultProps = {
  backcolor:"bg-primary",
  text: 'Button',
  disabled: false,
  size:'w-md'

};
export default Button;
