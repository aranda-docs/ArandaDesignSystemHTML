import React from 'react';
import Label from '../../components/Label';
export default {
    title: 'Example/Label',
    component: Label,
    argTypes: {
        text: { control: 'text'},
        classStyle:{control:'array'}
    },
};

const Template = (args) => <Label {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    text:'Prueba de Label',
    classStyle: 'AFLS',
};
