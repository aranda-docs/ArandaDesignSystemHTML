import React from "react";

import RadioButton from "../../components/RadioButton";

export default {
  title: "Example/RadioButton",
  component: RadioButton,
  argTypes: {
    text: { control: "text", type: { name: "string", required: true } },
    disabled: { control: "boolean" },
    isChecked: { control: "boolean" },
    color:{control:'color'},
    backgroundColor:{control:'color'},
    borderColor:{control:'color'},
    alingtext:{control:"text"},
    idCheck:{control:"text"}
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    isChecked:true,
    alingtext:'left',
    text:'entrada',
    idCheck:'radioA'
};
export const UnChecked = Template.bind({});
UnChecked.args = {
    isChecked:false,
    alingtext:'right',
    text:'entrada',
    idCheck:'radioB'
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled:true,
    text:'entrada',
    idCheck:'radioC'
};




