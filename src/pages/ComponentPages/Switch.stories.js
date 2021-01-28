import React from 'react';
import Switch from '../../components/Switch';
export default {
    title: 'Example/Switch',
    component: Switch,
    argTypes: {
        classStyle:{ control: 'text'},
        disabled:{ control:'boolean'},
        idSwitch:{ control: 'text'},
        isChecked:{ control:'boolean'}
    },
};

const Template = (args) => <Switch {...args} />;
export const Switche = Template.bind({});
Switche.args = {
    classStyle:'AFLS',
    disabled: false,
    idSwitch:'idSwitch',
    isChecked:false
};
export const Switchf = Template.bind({});
Switchf.args = {
    classStyle:'AFLS',
    disabled: true,
    idSwitch:'idSwitchd',
    isChecked:true
};
