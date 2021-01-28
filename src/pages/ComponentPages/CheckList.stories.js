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
    borderColor:{control:'color'},
    alingtext:{control:"text"},
    idCheck:{control:"text"}
  },
};

const Template = (args) => <CheckList {...args} />;

export const Checked = Template.bind({});
Checked.args = {
    isChecked:true,
    alingtext:'left',
    text:'entrada',
    idCheck:'checkA'
};
export const UnChecked = Template.bind({});
UnChecked.args = {
    isChecked:false,
    alingtext:'right',
    text:'entrada',
    idCheck:'checkB'
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled:true,
    text:'entrada',
    idCheck:'checkC'
};




