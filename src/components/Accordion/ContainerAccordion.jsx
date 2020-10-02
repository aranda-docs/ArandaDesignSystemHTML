import React from "react";

const ContainerAccordion = (props) => {

  return (
    <div className="mt-20">
        <div className="w-accordion">
        {props.children}
        </div>
        
    </div>
  );
};

export default ContainerAccordion;
