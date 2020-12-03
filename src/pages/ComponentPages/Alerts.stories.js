import React from 'react';
import Alerts from '../../components/Alerts';
export default {
    title: 'Example/Alerts',
    component: Alerts,
    argTypes: {
        text: { control: 'text'},
        type:{ control:'text'}
    },
};

const Template = (args) => <Alerts {...args} />;
export const Danger = Template.bind({});
Danger.args = {
    text: 'Danger',
    Type: 'alert-danger'
};
export const Info = Template.bind({});
Info.args = {
    text: 'Info',
    type: 'alert-info'
};
export const Success = Template.bind({});
Success.args = {
    text: 'Success',
    type: 'alert-success'
};
export const Warning = Template.bind({});
Warning.args = {
    text: 'Warning',
    type: 'alert-warning'
};

