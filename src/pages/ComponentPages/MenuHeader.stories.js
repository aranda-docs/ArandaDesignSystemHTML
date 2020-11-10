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

export const Normal = Template.bind({});
Normal.args = {
  allowMultipleOpen: false,
};

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  allowMultipleOpen: true,
};