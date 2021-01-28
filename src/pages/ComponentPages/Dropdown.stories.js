import React from 'react';
import Dropdown from '../../components/DropDown';
export default {
    title: 'Example/Dropdown',
    component: Dropdown,
    argTypes: {
        listitems: { control: 'array'},
        disabled:{ control:'boolean'},
        value:{control:'string'}
    },
};

const Template = (args) => <Dropdown {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    listitems: [{'value':1,'text':'Select1'},{'value':2,'text':'Select2'},{'value':3,'text':'Select3'}],
    disabled: false,
    value:2
};
export const Disabled = Template.bind({});
Disabled.args = {
    listitems: [{'value':1,'text':'Select1'},{'value':2,'text':'Select2'},{'value':3,'text':'Select3'}],
    disabled: true,
    value:3
};

