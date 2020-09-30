import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import MenuSection from "./MenuSection";


const Menu = (props) => {
    const [options, setOptions] = useState({
        allowMultipleOpen: false
    });

    useEffect(() => {
        if (props) {
            setOptions({
                allowMultipleOpen: props.allowMultipleOpen
            });
        }
    }, [props.allowMultipleOpen]);

    return (

        <div className="w-accordion">
            {
            props.contentMenu.map((child, index) => (
                 <MenuSection id={'menu' + index} key={'menu' + index} title={child.titleSection} allowMultipleOpen={options.allowMultipleOpen} items= {child.items} />
            ))
            }
        </div>

    );
};

Menu.propTypes = {
    allowMultipleOpen: PropTypes.bool,
};

export default Menu;
