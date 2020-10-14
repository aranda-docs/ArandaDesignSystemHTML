import React, { useState, useEffect, Children } from "react";
import PropTypes from "prop-types";

import MenuSection from "./MenuSection";


const Menu = (props) => {
    const [options, setOptions] = useState({
        allowMultipleOpen: false
    });

    const nameGroup = props.nameGroup || 'menu';
    const isMenuSecond = props.isMenuSecond || false;

    useEffect(() => {
        if (props) {
            setOptions({
                allowMultipleOpen: props.allowMultipleOpen
            });
        }
    }, [props.allowMultipleOpen]);

    return (

        <div className="w-accordion menu-accordion">
            {
            props.contentMenu.map((child, index) => (
                 <MenuSection id={nameGroup + index} key={nameGroup + index} allowMultipleOpen={options.allowMultipleOpen} title={child.titleSection} items= {child.items} nameGroup = {nameGroup} isMenuSecond={isMenuSecond} iconSection = {child.iconSection}/>
            ))
            }
        </div>

    );
};

Menu.propTypes = {
    allowMultipleOpen: PropTypes.bool,
    contentMenu: PropTypes.arrayOf(PropTypes.object),
};

export default Menu;
