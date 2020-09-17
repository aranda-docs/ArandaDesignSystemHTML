import React from "react";
import Textarea from "../../components/Textarea";
export default {
    title: "TextArea",
    component: Textarea,
    argTypes: {
        text: { control: "text", type: { name: "string", required: true } },
        type: { control: "text" },
        color: { control: "text" },
        disabled: { control: "boolean" },
        font: { control: "text" },
        maxLength: { control: "text" },
        rows={ control: "text" },
        cols: { control: "text" },
        placeholder: { control: "text" },
        specialCharacters: { control: "boolean" },
        hover: { control: "text" }
    },
};

const Templatea = (args) => <Textarea {...args} />;
export const Normala = Templatea.bind({});
Normala.args = {
    type: "bg",
    color: "primary",
    text: "Normal",
};

export const Disableda = Templatea.bind({});
Disableda.args = {
    disabled: true,
    text: "Disabled TextArea",
};
