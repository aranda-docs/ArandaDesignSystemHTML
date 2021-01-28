import React from "react";
import PropTypes from "prop-types";

const RadioButton = (props) => {
    const {
        text,
        isChecked,
        disabled,
        color,
        backgroundColor,
        idCheck,
        alingtext,
    } = props;

    if (disabled === true) {
        return (
            <label
                style={color && { color }}
            >
                <input
                    disabled
                    type='radio'
                    defaultChecked={isChecked}
                    id={idCheck}
                />
                {text}
            </label>
        )
    }
    if (alingtext == 'right') {
        return (
            <label
                style={color && { color }}
            >
                <input
                    type='radio'
                    defaultChecked={isChecked}                  
                    id={idCheck}
                />
                {text}
            </label>
        )
    } else {
        return (
            <label
                style={color && { color }}
            >
                {text}
                <input
                    type='radio'
                    defaultChecked={isChecked}
                    style={backgroundColor && { backgroundColor }}
                    id={idCheck}
                />
            </label>
        )
    }

};
RadioButton.propTypes = {
    isChecked: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    disabled: PropTypes.bool,
    alingtext: PropTypes.string,
    idCheck:PropTypes.string.isRequired
};
RadioButton.defaultProps = {
    isChecked: true,
    disabled: false,
    text: "check1",
    color: "#999999",
    alingtext: 'left'
};
export default RadioButton;
