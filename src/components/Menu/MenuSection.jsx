import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const MenuSection = (props) => {

    const [typeControl, setTypeControl] = useState('radio');
    useEffect(() => {
        
        if (props.allowMultipleOpen) {
            setTypeControl('checkbox');
        }
        else {
            setTypeControl('radio');
        }
    }, [props.allowMultipleOpen]);

    return (

        <div className="tab w-full overflow-hidden mt-px bg-primary rounded">
            <input
                className="absolute opacity-0"
                id={'tab-single-menu-' + props.id}
                type={typeControl}
                name='tabsMenu'
            />
            <label
                className="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative" htmlFor ={'tab-single-menu-' + props.id}>
                <span>{props.title} </span> 
                <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                <ul>
                    {
                        props.items.map((item, index) => (
                            <Item key={'section'+index} label={item.label} enableHref={item.enableHref} enableCallback= {item.enableCallback} href= {item.href} functCallBack={item.functCallBack} ></Item>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};

MenuSection.propTypes = {
    title: PropTypes.string,
    allowMultipleOpen: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object)
};

export default MenuSection;