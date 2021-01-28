import React from 'react';
import Input from '../../components/Input';
export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        type:{ control: 'text'},
        text: { control: 'text'},
        disabled:{ control:'boolean'},
        maxlength:{cotrol:'number'},
        placeholder:{control:'text'}
    },
};

const Template = (args) => <Input {...args} />;
export const Text = Template.bind({});
Text.args = {
    type:'text',
    text: 'Texto',
    disabled: false,
};
export const Numero = Template.bind({});
Numero.args = {
    type:'number',
    text: 0,
    disabled: false,
};
export const Tel = Template.bind({});
Tel.args = {
    type:'tel',
    text: 'Telefono',
    disabled: false,
};
export const Url = Template.bind({});
Url.args = {
    type:'url',
    text: 'url',
    disabled: false,
};
export const Email = Template.bind({});
Email.args = {
    type:'email',
    text: 'email',
    disabled: false,
};
export const Password = Template.bind({});
Password.args = {
    type:'password',
    text: 'password',
    disabled: false,
};
export const Date = Template.bind({});
Date.args = {
    type:'date',
    text: '2021-01-21',
    disabled: false,
    minvalue:'2021-01-21'
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    text: 'Disabled Text'
};
export const Placeholder = Template.bind({});
Placeholder.args = {
    text: '',
    disabled: false,
};
