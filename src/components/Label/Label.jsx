import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    const { text, classStyle } = props;
    var classCss = "";
    switch (classStyle) {
        case "AFLS":
            classCss = `text-teal-500 font-sans text-fs13`;
            break;
        case "AFLSDescription":
            classCss = `text-secondary font-sans text-fs13`;
            break;
        default:
            classCss = `m-4 text-sm border text-gray rounded-md p-2 hover:bg-opacity-50  border-gray`;
    }
    return (
        <label
            className={classCss}
            {...props}
        >{text}</label>
    );
};
Label.propTypes = {
    text: PropTypes.string.isRequired,
    classStyle:PropTypes.string
};
Label.defaultProps = {
    text: '',
    classStyle:'AFLS'
};
export default Label;