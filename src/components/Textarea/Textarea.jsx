import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Textarea = (props) => {
    const [options, setOptions] = useState({
        type: "bg",
        color: "primary",
        text: "",
        disabled: false,
        font: arial,
        maxLength: 0,
        rows=0,
        cols: 0,
        placeholder: "",
        specialCharacters: true,
        hover: ""
    });
    useEffect(() => {
        if (props) {
            setOptions(props);
        }
    }, [props, setOptions]);
    if (options.disabled === true) {
        return (
            <textarea
                disabled
                maxLength={options.maxLength}
                cols={options.cols}
                rows={options.rows}
                placeholder={options.placeholder}
                className={`m-4 text-sm bg-disable text-white rounded-sm p-2`}>
                {options.text}
            </textarea>
        );
    }
    return (
        <textarea
            maxLength={options.maxLength}
            cols={options.cols}
            rows={options.rows}
            placeholder={options.placeholder}
            className={`m-4 text-sm text-white rounded-sm p-2 hover:bg-opacity-50  ${options.type}-${options.color}`}
        >
            {options.text}
        </textarea>
    );

};
Textarea.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    font: PropTypes.string,
    maxLength: PropTypes.string,
    rows=PropTypes.string,
    cols: PropTypes.string,
    placeholder: PropTypes.string,
    specialCharacters: PropTypes.bool,
    hover: PropTypes.string
};
export default Textarea;