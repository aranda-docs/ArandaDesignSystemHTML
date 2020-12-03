import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ listitems, disabled, name, id, ...props }) => {
    if (disabled === true) {
        return (
            <select id={id} name={name} className={`dropdown`} disabled>
                {listitems.map(element => <option
                    value={element}
                >{element}</option>)}
            </select>
        );
    }
    return (
        <select id={id} name={name} className={`dropdown`}>
            {listitems.map(element => <option
                value={element}
            >{element}</option>)}
        </select>
        );
};

DropDown.propTypes = {
    listitems: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
};
DropDown.defaultProps = {
    listitems: {},
    disabled: false,
    name: '',
    id: '',
};
export default DropDown;