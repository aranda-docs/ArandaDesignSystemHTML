import React from 'react';
import CheckerList from '../../components/CheckerList';
export default {
    title: 'Example/CheckerList',
    component: CheckerList,
    argTypes: {
        params: { control: 'array' },
        disabled: { control: 'boolean' },
        color: { control: 'color' },
    },
};

const Template = (args) => <CheckerList {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    params: [{
        "Labelposition": 2,
        "label": 'Lu',
        "sett_key": "ldapMonday",
        "value": false
    },
    {
        "Labelposition": 2,
        "label": 'Ma',
        "sett_key": "ldapTuesday",
        "value": false
    }, {
        "Labelposition": 2,
        "label": 'Mi',
        "sett_key": "ldapWednesday",
        "value": false
    }, {
        "Labelposition": 2,
        "label": 'Ju',
        "sett_key": "ldapThursday",
        "value": false
    }, {
        "Labelposition": 2,
        "label": 'Vi',
        "sett_key": "ldapFriday",
        "value": false
    }, {
        "Labelposition": 2,
        "label": 'Sa',
        "sett_key": "ldapSaturday",
        "value": false
    }, {
        "Labelposition": 2,
        "label": 'Do',
        "sett_key": 'ldapSunday',
        "value": false
    },
    {
        "Labelposition": 2,
        "label": 'Todos los dias',
        "sett_key": "ldapEveryDay",
        "value": true
    }],
    disabled: false,
    classStyle: 'AFLS'
};