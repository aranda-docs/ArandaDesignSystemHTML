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

    // function callFunctionOrRedirect(itemSection){
        
    //     if(itemSection.enableHref){
    //         window.location.href = itemSection.href;
    //         return;
    //     }
    //     if(itemSection.enableCallback){
    //         itemSection.functCallBack();
    //         return;
    //     }

    // }
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

                            // <li key={'section'+index} className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer" onClick={()=>callFunctionOrRedirect(item)}>
                            //     <span>{item.label}</span>
                            // </li>
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