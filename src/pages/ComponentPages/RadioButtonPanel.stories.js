import React from 'react';
import RadioButtonPanel from '../../components/RadioButtonPanel';
export default {
    title: 'Example/RadioButtonPanel',
    component: RadioButtonPanel,
    argTypes: {
        listRadios: { control: 'array' },
        disabled: { control: 'boolean' },
        color: { control: 'color' },
    },
};

const Template = (args) => <RadioButtonPanel {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    listRadios: [{
        'label': 'Title1', 'index': 0, 'id': 'radio1', 'components': [{
            'componente': 'radioButtonPanel', 'params': [
                {
                    'label': 'Title1', 'index': 0, 'id': 'radio1', 'components': [{
                        'componente': 'dynamicComponent', 'params': [
                            {
                                "Labelposition": 1,
                                "colsRequire": 1,
                                "dataType": "text",
                                "idGroup": "principal",
                                "label": "Domain",
                                "labelDescription": "Update AFLS base path.",
                                "options": {},
                                "orderTab": 1,
                                "sett_key": "name1",
                                "value": "INTERSEQ1",
                                "holder": "escriba su nombre",
                                "maxlength": 50
                            }]
                    }]
                },
                {
                    'label': 'Title2', 'index': 1, 'id': 'radio2', 'components': [{
                        'componente': 'dynamicComponent', 'params': [
                            {
                                "Labelposition": 1,
                                "colsRequire": 1,
                                "dataType": "text",
                                "idGroup": "principal",
                                "label": "Domain",
                                "labelDescription": "Update AFLS base path.",
                                "options": {},
                                "orderTab": 1,
                                "sett_key": "name2",
                                "value": "INTERSEQ2",
                                "holder": "escriba su nombre",
                                "maxlength": 50
                            }]
                    }]
                },
                {
                    'label': 'Title3', 'index': 2, 'id': 'radio1', 'components': [{
                        'componente': 'dynamicComponent', 'params': [
                            {
                                "Labelposition": 1,
                                "colsRequire": 1,
                                "dataType": "text",
                                "idGroup": "principal",
                                "label": "Domain",
                                "labelDescription": "Update AFLS base path.",
                                "options": {},
                                "orderTab": 1,
                                "sett_key": "name3",
                                "value": "INTERSEQ3",
                                "holder": "escriba su nombre",
                                "maxlength": 50
                            }]
                    }]
                },
                {
                    'label': 'Title4', 'index': 3, 'id': 'radio1', 'components': [{
                        'componente': 'dynamicComponent', 'params': [
                            {
                                "Labelposition": 1,
                                "colsRequire": 1,
                                "dataType": "text",
                                "idGroup": "principal",
                                "label": "Domain",
                                "labelDescription": "Update AFLS base path.",
                                "options": {},
                                "orderTab": 1,
                                "sett_key": "name4",
                                "value": "INTERSEQ4",
                                "holder": "escriba su nombre",
                                "maxlength": 50
                            }]
                    }]
                }]
        }]
    }, {
        'label': 'radio2', 'index': 1, 'id': 'radio2', 'components': [{
            'componente': 'dynamicComponent', 'isChecked': true, 'textLabel': 'Filtros de Dispositivo', 'idCheck': 'idcheckd', 'params': [
                {
                    "Labelposition": 1,
                    "colsRequire": 1,
                    "dataType": "text",
                    "idGroup": "principal",
                    "label": "cargo",
                    "labelDescription": "Update AFLS base path.",
                    "options": {},
                    "orderTab": 1,
                    "sett_key": "hola",
                    "value": "prueba",
                    "holder": "escriba su nombre",
                    "maxlength": 50
                }, {
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
                }]
        }]
    }],
    disabled: false,
    classStyle: 'AFLS',
    defaultOpen: 1
};