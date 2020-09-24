import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MenuSection = (props) => {

    const [typeControl, setTypeControl] = useState('radio');
    useEffect(() => {
        console.log(props);
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
                className="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
                for={'tab-single-menu-' + props.id}
            >
                {props.title} <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                <ul>
                    {
                        props.items.map((item, index) => (
                            <li key={'section'+index} className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                                <span>{item.label}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};


export default MenuSection;