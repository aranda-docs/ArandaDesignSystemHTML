import React from "react";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

export default {
    title: "MenuHeader",
    component: MenuHeader,
    argTypes: {
      allowMultipleOpen: { control: "boolean" },
  
    },
  };

  const Template = (args) => <MenuHeader {...args} />;

export const ADM = Template.bind({});
ADM.args = {
  allowMultipleOpen: false,
};

export const AEMM = Template.bind({});
AEMM.args = {
  allowMultipleOpen: true,
};