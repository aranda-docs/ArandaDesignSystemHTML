import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, text, disabled, maxlength, minvalue, maxvalue, placeholder, name, id, size, classStyle, props }) => {
    var classCss = "";
    var sizeInput = size === undefined ? 'w-full' : size;
    switch (classStyle) {
        case "AFLS":
            classCss = `text-sm h-6 rounded-none ${sizeInput} border-none`;
            break;
        default:
            classCss = `m-4 text-sm border text-gray rounded-md p-2 ${sizeInput} hover:bg-opacity-50  border-gray`;
    }
    if (disabled === true) {
        return (
            <div class="value valid">
                <input
                    disabled
                    type={type}
                    maxlength={maxlength}
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    max={maxvalue}
                    className={classCss}
                />
            </div>
        );
    }
    if (type === 'date') {
        return (
            <div class="value valid">
                <input
                    type={type}
                    maxlength={maxlength}
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    //min={minvalue}
                    max={maxvalue}
                    defaultValue={text}
                    className={classCss}
                />
            </div>
        );
    }
    return (
        <div class="value valid">
            <input
                type={type}
                maxlength={maxlength}
                placeholder={placeholder}
                name={name}
                id={id}
                max={maxvalue}
                defaultValue={text}
                className={classCss}
            />
        </div>
    );
};
Input.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    maxlength: PropTypes.number,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    minvalue: PropTypes.string,
    maxvalue: PropTypes.string,
    size: PropTypes.string
};
Input.defaultProps = {
    type: 'text',
    text: '',
    disabled: false,
    maxlength: 250,
    placeholder: 'Placeholder',
    name: '',
    id: '',
    minvalue: '0',
    maxvalue: '0',
    size: 'w-full'
};
export default Input;