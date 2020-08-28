import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const [options, setOptions] = useState({
    type: "bg",
    color: "primary",
    text: "",
    disabled: false,
  });

  useEffect(() => {
    if (props) {
      setOptions(props);
    }
  }, [props, setOptions]);

  if (options.disabled === true) {
    return (
      <button
        disabled
        className={`m-4 text-sm bg-disable text-white rounded-sm p-2`}
      >
        {options.text}
      </button>
    );
  }
  if (options.type === "border") {
    return (
      <button
        className={`m-4 text-sm border-solid border text-${options.color} rounded-sm p-2 hover:opacity-50 ${options.type}-${options.color}`}
      >
        {options.text}
      </button>
    );
  }
  return (
    <button
      className={`m-4 text-sm text-white rounded-sm p-2 hover:bg-opacity-50  ${options.type}-${options.color}`}
    >
      {options.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
