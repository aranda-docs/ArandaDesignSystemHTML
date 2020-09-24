import React from "react";

import Accordion from "../../components/Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    allowMultipleOpen: { control: "boolean" },
    // children: { control: "text", type: { name: "string", required: true } },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    allowMultipleOpen: false,
};

// export const Border = Template.bind({});
// Border.args = {
//   type: "border",
//   color: "primary",
//   text: "Border",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
//   text: "Disabled Button",
// };


