import React from 'react';
import Dropdown from '../../components/DropDown';
export default {
    title: 'Example/Dropdown',
    component: Dropdown,
    argTypes: {
        listitems: { control: 'array'},
        disabled:{ control:'boolean'},
    },
};

const Template = (args) => <Dropdown {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    listitems: ['Select1','Select2','Select3'],
    disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
    listitems: ['Select1','Select2','Select3'],
    disabled: true,
};

