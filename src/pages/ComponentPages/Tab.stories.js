import React from 'react';
import Tab from '../../components/Tabs';
export default {
    title: 'Example/Tabs',
    component: Tab,
    argTypes: {
        listTabs: { control: 'array'},
        disabled:{ control:'boolean'},
        color:{control:'color'},
    },
};

const Template = (args) => <Tab {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    listTabs: [{'title':'Title1','index':0,'id':'tab1','components':[{'componente':'dynamicComponent','params':[
        {
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Domain",
        "labelDescription": "Update AFLS base path.",
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "INTERSEQ",
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "switch",
        "idGroup": "principal",
        "label": "Activate LDAP",
        "labelDescription": "",
        "options": {},
        "orderTab": 2,
        "sett_key": "isActive",
        "value": true,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Server ",
        "options": {},
        "orderTab": 3,
        "sett_key": "server",
        "value": "192.168.3.2",
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Update AFLS base path.",
        "options": {},
        "orderTab": 4,
        "sett_key": "port",
        "value": 0,
        "holder": "escriba su puerto",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "select",
        "idGroup": "principal",
        "label": "Authentication mode",
        "options": [{ 'value': 1, 'text': 'Anonymous' }, { 'value': 2, 'text': 'Basic' }, { 'value': 3, 'text': 'Negotiate' }],
        "orderTab": 5,
        "sett_key": "authtype",
        "value": 2,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Username",
        "options": {},
        "orderTab": 6,
        "sett_key": "ldapUser",
        "value": "luis.chara@arandasoft.com",
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "password",
        "idGroup": "principal",
        "label": "Password",
        "options": {},
        "orderTab": 7,
        "sett_key": "securePassword",
        "value": null,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "select",
        "idGroup": "principal",
        "label": "User Format",
        "options": [{ 'value': '1', 'text': 'UserNameOnly' }, { 'value': '2', 'text': 'FullQualifiedDomainName' }, { 'value': '3', 'text': 'UserPrincipalName' }],
        "orderTab": 8,
        "sett_key": "userNameFormat",
        "value": 2,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "checked",
        "idGroup": "principal",
        "label": "DNS Resolution",
        "options": ['hola3','hola4'],
        "orderTab": 9,
        "sett_key": "dnResolution",
        "value": false,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "checked",
        "idGroup": "principal",
        "label": "Update AFLS base path.",
        "options": {},
        "orderTab": 10,
        "sett_key": "defaultAuth",
        "value": false,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "checked",
        "idGroup": "principal",
        "label": "Enable SSL",
        "options": {},
        "orderTab": 11,
        "sett_key": "isSSL",
        "value": false,
        "holder": "escriba su nombre",
        "maxlength": 50
        },{
        "Labelposition": 0,
        "colsRequire": 1,
        "dataType": "button",
        "idGroup": "principal",
        "label": "Check connection",
        "options": {},
        "orderTab": 12,
        "sett_key": "testConection",
        "value": "Update AFLS base path.",
        "holder": "escriba su nombre",
        "maxlength": 50
        }]}]},{'title':'Tab2','index':1,'id':'tab2','components':[{'componente':'checkerList','params':[{
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
            "sett_key": "ldapSunday",
            "value": false
        },
        {
            "Labelposition": 2,
            "label": 'Todos los dias',
            "sett_key": "ldapEveryDay",
            "value": true
        }]}]}],
    disabled: false,
    classStyle:'AFLS'
};