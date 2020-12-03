import React from 'react';
import PropTypes from 'prop-types';
const SetButons = ({ listButtons, disabled, name, id, onClick, ...props }) => {
        return (
            <div>
                {listButtons.map(element => <button
                onClick={onClick}
                className={`setbutton`}
                ><img src='logo192.png'/>{element}</button>)}
        
                {/* disabled
                name={name}
                id={id}
                className={`m-4 text-sm border rounded-md p-2  border-gray text-gray`}
                {...props}>
                {text} */}
            </div>
        );
        
};

SetButons.propTypes = {
    listButtons: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
};
SetButons.defaultProps = {
    listButtons:{},
    disabled: false,
    name: '',
    id: '',
};
export default SetButons;