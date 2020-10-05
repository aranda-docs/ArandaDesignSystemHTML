import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Item = (props) => {

    function callFunctionOrRedirect(){
        
        if(props.enableHref){
            window.location.href = props.href;
            return;
        }
        if(props.enableCallback){
            props.functCallBack();
            return;
        }

    }

    return (
        <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer" onClick={()=>callFunctionOrRedirect()}>
            <span>{props.label}</span>
        </li>
    );

};

Item.propTypes = {
    label: PropTypes.string,
    enableHref: PropTypes.bool,
    enableCallback: PropTypes.bool,
    href: PropTypes.string,
    functCallBack: PropTypes.func
};

export default Item;