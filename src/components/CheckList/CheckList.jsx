import React from "react";
import PropTypes from "prop-types";

const CheckList = (props) => {
    const {
        text,
        isChecked,
        disabled,
        color,
        backgroundColor,
        borderColor,
        idCheck,
        onChage,
        alingtext
    } = props;
    if (disabled === true) {
        return (
            <label
                style={color && { color }}
            >
                <input
                    disabled
                    type='checkbox'
                    defaultChecked={isChecked}
                    className={`ascheckbox bg-disabled`}
                    id={idCheck}
                    onClick={onChage}
                />
                {text}
            </label>
        );
    }
    if (alingtext === 'right') {
        return (
            <label
                style={color && { color }}
            >
                <input
                    type='checkbox'
                    defaultChecked={isChecked}
                    className={`ascheckbox`}
                    style={backgroundColor && { backgroundColor }}
                    id={idCheck}
                    onClick={onChage}
                />
                {text}
            </label>
        );
    } else {
        return (
            <label
                style={color && { color }}
            >
                {text}
                <input
                    type='checkbox'
                    defaultChecked={isChecked}
                    className={`ascheckbox`}
                    style={backgroundColor && { backgroundColor }}
                    id={idCheck}
                    onClick={onChage}
                />
            </label>
        );
    }
};
CheckList.propTypes = {
    isChecked: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    disabled: PropTypes.bool,
    alingtext: PropTypes.string,
    idCheck:PropTypes.string.isRequired
};
CheckList.defaultProps = {
    isChecked: true,
    disabled: false,
    text: "check1",
    color: "#999999",
    alingtext: 'left'
};
export default CheckList;
