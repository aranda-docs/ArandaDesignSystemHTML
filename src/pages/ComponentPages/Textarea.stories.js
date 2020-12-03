import React from 'react';
import Textarea from '../../components/Textarea';
export default {
    title: 'Example/TextArea',
    component: Textarea,
    argTypes: {
        text: { control: 'text'},
        disabled:{ control:'boolean'},
        cols:{cotrol:'number'},
        rows:{cotrol:'number'},
        maxlength:{cotrol:'number'},
        placeholder:{control:'text'}
    },
};

const Template = (args) => <Textarea {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    text: 'Normal',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    text: 'Disabled TextArea'
};
export const Placeholder = Template.bind({});
Placeholder.args = {
    text: '',
    disabled: false,
};
