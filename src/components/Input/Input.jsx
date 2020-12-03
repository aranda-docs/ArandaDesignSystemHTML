import React from 'react';
import PropTypes from 'prop-types';

const Input = (props)=>{
    const{ type, text, disabled, maxlength, minvalue, maxvalue, placeholder, name, id,size}=props;
    if (disabled === true) {
        return (
            <input
                disabled
                type={type}
                maxlength={maxlength}
                placeholder={placeholder}
                name={name}
                id={id}
                min={minvalue}
                max={maxvalue}
                className={`m-4 text-sm border rounded-md p-2 ${size} border-gray text-gray`}
                {...props} />
        );
    }
    return (
        <input
            type={type}
            maxlength={maxlength}
            placeholder={placeholder}
            name={name}
            id={id}
            min={minvalue}
            max={maxvalue}
            className={`m-4 text-sm border text-gray rounded-md p-2 ${size} hover:bg-opacity-50  border-gray`}
            {...props}
        />
    );
};
Input.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    maxlength: PropTypes.number,
    placeholder: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string,
    minvalue: PropTypes.string,
    maxvalue: PropTypes.string,
    size:PropTypes.string
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
    size:'w-full'
};
export default Input;