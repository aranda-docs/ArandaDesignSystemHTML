import React from "react";

import Menu from "../../components/Menu";

export default {
  title: "Menu",
  component: Menu,
  argTypes: {
    allowMultipleOpen: { control: "boolean" },
  },
};

const Template = (args) => <Menu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    allowMultipleOpen: false,
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
    allowMultipleOpen: true,
};

