import React from 'react';
import SetButtons from '../../components/SetButtons';
export default {
    title: 'Example/SetButtons',
    component: SetButtons,
    argTypes: {
        listButtons: { control: 'array'},
        disabled:{ control:'boolean'},
    },
};

const Template = (args) => <SetButtons {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    listButtons: ['hola1','hola2','hola3'],
    disabled: false,
};

