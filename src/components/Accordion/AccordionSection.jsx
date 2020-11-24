import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import Item from "./Item";

const AccordionSection = (props) => {

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

        <div className="tab w-full overflow-hidden mt-1 bg-solitude rounded">
            <input
                className="absolute opacity-0"
                id={'tab-single-' + props.nameAccordion + props.id}
                type={typeControl}
                name={props.nameAccordion}
            />
            <label
                className="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative" htmlFor={'tab-single-' + props.nameAccordion + props.id}>
                <span>{props.title} </span>
                <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                <div className="flex flex-col p-3 pt-0">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

AccordionSection.propTypes = {
    title: PropTypes.string,
    allowMultipleOpen: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object)
};

export default AccordionSection;