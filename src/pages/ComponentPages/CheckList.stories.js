import React from "react";

import CheckList from "../../components/CheckList";

export default {
  title: "Example/CheckList",
  component: CheckList,
  argTypes: {
    text: { control: "text", type: { name: "string", required: true } },
    disabled: { control: "boolean" },
    isChecked: { control: "boolean" },
    color:{control:'color'},
    backgroundColor:{control:'color'},
    borderColor:{control:'color'}
  },
};

const Template = (args) => <CheckList {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    isChecked:true
};
export const UnChecked = Template.bind({});
UnChecked.args = {
    isChecked:false
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled:true
};



