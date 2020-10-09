import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Menu from "./Menu";

const MenuSection = (props) => {

    const classMenuTitle = props.isMenuSecond? 'second-menu': 'main-menu'

    const [typeControl, setTypeControl] = useState('radio');
    useEffect(() => {
        if (props.allowMultipleOpen) {
            setTypeControl('checkbox');
        }
        else {
            setTypeControl('radio');
        }
        console.log(props.items);

    }, [props.allowMultipleOpen]);

    return (

        <div className={"tab w-full "+classMenuTitle}>
            <input
                className="absolute opacity-0"
                id={'tab-single-menu-' + props.id}
                type={typeControl}
                name= {props.nameGroup}
            />
            <label
                className="block leading-normal cursor-pointer text-fs13 p-2 relative text-title-menu" htmlFor ={'tab-single-menu-' + props.id}>
                <span className={props.iconSection?"have-icon-section": ""}>{props.title} </span> 
                {
                    props.iconSection?
                    <span className={"icon-section "+ props.iconSection}></span>
                    :
                    <span></span>
                }
                {
                    props.items.length>0?
                    <span className="icon icon-ic_arrow_long absolute"></span>
                    :
                    <span></span>

                }
                
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                <ul>
                    {
                        props.items.map((item, index) => (
                            item.isNested?
                            <Menu key={'submenu'+props.title.replace(/\s/g,'')+index} allowMultipleOpen={true} contentMenu={item.itemsNested} nameGroup={props.title.replace(/\s/g,'')} isMenuSecond={true}></Menu>
                            :
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