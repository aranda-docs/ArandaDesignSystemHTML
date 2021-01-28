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
      bordercolor,
      classStyle
  } = props;
  var classCss = "";
  switch (classStyle) {
      case "AFLS":
          classCss = `text-sm border text-white ${size} bg-teal-500 padbutton rounded-md p-2 hover:bg-opacity-50  border-transparent`;
          break;
      case "AFLSWhite":
          classCss = `text-sm border text-teal-500 ${size} w-40 bg-white padbutton rounded-md p-2 hover:bg-opacity-50  border-teal-500`;
          break;
      case "AFLSDescription":
          classCss = `text-secondary font-sans text-sm`;
          break;
      default:
          classCss = `text-sm border text-gray rounded-md p-2 hover:bg-opacity-50  border-gray`;
  }
  if (disabled === true) {
      return (
          <button
              disabled
              id={id}
              name={name}
              onClick={onClick}
              className={`disabled text-sm border text-white ${size} bg-teal-500 padbutton rounded-md p-2 hover:bg-opacity-50  border-transparent`}
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
          className={classCss}
          style={color && { color }}
      >
          {text}
      </button>
  );
};
Button.propTypes = {
  backcolor: PropTypes.oneOf(['bg-primary', 'bg-secundary', 'bg-danger', 'bg-disable', 'bg-transparent']),
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  onClicked: PropTypes.func,
  classStyle: PropTypes.string
};
Button.defaultProps = {
  backcolor: "bg-primary",
  text: 'Button',
  disabled: false,
  size: 'w-md',
  classStyle: 'AFLS'
};
export default Button;
