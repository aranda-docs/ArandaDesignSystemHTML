import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CheckList = (props) => {
    const {
        text,
        isChecked,
        disabled,
        color,
        backgroundColor,
        borderColor
    } = props;
    if (disabled === true) {
        return (
            <label
                style={color && { color }}
            >
                <input
                    disabled
                    type='checkbox'
                    checked={isChecked}
                    className={`ascheckbox bg-disabled`}
                />
                {text}
            </label>
        )
    }
    if (isChecked === true) {
        return (
            <label
                style={color && { color }}
            >
                <input
                    type='checkbox'
                    checked={isChecked}
                    className={`ascheckbox`}
                    style={backgroundColor && { backgroundColor }}
                />
                {text}
            </label>
        )
    }
    return (
        <label
            style={color && { color }}
        >
            <input
                type='checkbox'
                className={`ascheckbox`}
                style={borderColor && { borderColor }}
            />
            {text}
        </label>
    )
};

CheckList.propTypes = {
    isChecked: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    disabled: PropTypes.bool,
};
CheckList.defaultProps = {
    isChecked: true,
    disabled: false,
    text: "check1",
    color: "#999999"
};
export default CheckList;
