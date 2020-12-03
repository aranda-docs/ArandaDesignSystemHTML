import React from "react";

import Button from "../../components/Button";

export default {
  title: "Example/Botones",
  component: Button,
  argTypes: {
    text: { control: "text", type: { name: "string", required: true } },
    disabled: { control: "boolean" },
    color:{control:'color'}
  },
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  backcolor: "bg-primary",
  text: "Normal",
  onClick:hola()
};

export const Border = Template.bind({});
Border.args = {
  backcolor: "bg-transparent",
  color:"blue",
  text: "Border",
  onClick:hola()
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Disabled Button",
  onClick:hola()
};
function hola(){
  alert("hola");
}
