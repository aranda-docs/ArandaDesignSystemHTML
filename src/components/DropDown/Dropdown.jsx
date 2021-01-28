import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ listitems, disabled, name, id, value, ...props }) => {
    if (disabled === true) {
        return (
            <select id={id} name={name} defaultValue={value} className={`w-full h-6 text-nobel border-transparent`} disabled>
                {listitems.map(element => <option
                    value={element.value}
                >{element.text}</option>)}
            </select>
        );
    }
    return (
        <select id={id} name={name} defaultValue={value} className={`w-full h-6 text-nobel border-transparent`}>
            {listitems.map(element => <option
                value={element.value}
            >{element.text}</option>)}
        </select>
    );
};

DropDown.propTypes = {
    listitems: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
};
DropDown.defaultProps = {
    listitems: {},
    disabled: false,
    name: '',
    id: '',
    value:'',
};
export default DropDown;