import React from "react";

import Button from "../../components/Button";

export default {
  title: "Botones",
  component: Button,
  argTypes: {
    text: { control: "text", type: { name: "string", required: true } },
    type: { control: "text" },
    color: { control: "text" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: "bg",
  color: "primary",
  text: "Normal",
};

export const Border = Template.bind({});
Border.args = {
  type: "border",
  color: "primary",
  text: "Border",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Disabled Button",
};
