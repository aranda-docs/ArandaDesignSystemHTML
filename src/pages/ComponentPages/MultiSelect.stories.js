import React from 'react';
import MultiSelect from '../../components/MultiSelect';
export default {
    title: 'Example/MultiSelect',
    component: MultiSelect,
    argTypes: {
        items: { control: 'array'},
        disabled:{ control:'boolean'},
    },
};

const Template = (args) => <MultiSelect {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    items: ['Select1','Select2','Select3'],
    disabled: false,
};


