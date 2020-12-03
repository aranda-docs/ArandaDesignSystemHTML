import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ text, disabled, cols, rows, maxlength, placeholder, name, id, ...props }) => {
    if (disabled === true) {
        return (
            <textarea
                disabled
                maxlength={maxlength}
                cols={cols}
                rows={rows}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`m-4 text-sm border rounded-md p-2  border-gray text-gray`}
                {...props}>
                {text}
            </textarea>
        );
    }
    return (
        <textarea
            maxlength={maxlength}
            cols={cols}
            rows={rows}
            name={name}
            id={id}
            placeholder={placeholder}
            className={`m-4 text-sm border text-gray rounded-md p-2 hover:bg-opacity-50 border-gray`}
            {...props}
        >
            {text}
        </textarea>
    );

};
Textarea.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    cols: PropTypes.number,
    rows: PropTypes.number,
    maxlength: PropTypes.number,
    placeholder: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string,
};
Textarea.defaultProps = {
    text: '',
    disabled: false,
    cols: 100,
    rows: 4,
    maxlength: 250,
    placeholder: 'Placeholder',
    name: '',
    id: '',
};
export default Textarea;