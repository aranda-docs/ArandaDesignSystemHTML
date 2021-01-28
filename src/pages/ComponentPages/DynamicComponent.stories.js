import React from 'react';
import DynamicComponent from '../../components/DynamicComponent';
export default {
    title: 'Example/DynamicComponent',
    component: DynamicComponent,
    argTypes: {
        params:{ control: 'array'},
    },
};

const Template = (args) => <DynamicComponent {...args} />;
export const DynamicComp = Template.bind({});
DynamicComp.args = {
    params:[
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
        "options": ['Hola1','Hola2'],
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
        "options": ['Hola1','Hola2'],
        "orderTab": 8,
        "sett_key": "userNameFormat",
        "value": 0,
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
        }]
    /* params:
    [{
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Nombre",
        "labelDescription": 'Esta es la descripcion del nombre',
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "Elkin salamanca",
        "holder": "escriba su nombre",
        "maxlength": 50
    }, {
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Domain",
        "labelDescription": null,
        "options": {},
        "orderTab": 2,
        "sett_key": "name",
        "value": "INTERSEQ",
        "holder": "Dominio",
        "maxlength": 20
    }, {
        "Labelposition": 1,
        "colsRequire": 2,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Ip de host",
        "labelDescription": null,
        "options": {},
        "orderTab": 3,
        "sett_key": "name",
        "value": "192.168.0.1",
        "holder": "IP",
        "maxlength": 20
    }] */
};
