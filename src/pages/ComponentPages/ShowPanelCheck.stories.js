import React from 'react';
import ShowPanelCheck from '../../components/ShowPanelCheck';
export default {
    title: 'Example/ShowPanelCheck',
    component: ShowPanelCheck,
    argTypes: {
        params: { control: 'text' },
        isChecked: { control: 'boolean' },
        idCheck: { control: 'text' },
        textLabel: { control: 'text' },
        idDivName: { control: 'text' },
        classStyle:{control: 'text'}
    },
};

const Template = (args) => <ShowPanelCheck {...args} />;
export const ShowPanel = Template.bind({});
ShowPanelCheck.args = {
    params:
    [{
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
    }],
    idCheck: 'idcheck',
    idDivName: 'idDivprue',
    textLabel: 'Esto es una prueba',
    isChecked: true,
    classStyle:'AFLS'
};
export const HidePanel = Template.bind({});
ShowPanelCheck.args = {
    params:
    [{
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Domain camb",
        "labelDescription": "Update AFLS base path camb.",
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "INTERSEQ",
        "holder": "escriba su nombre",
        "maxlength": 50
    }],
    idCheck: 'idcheck',
    idDivName: 'idDivprue',
    textLabel: 'Esto es una prueba',
    isChecked: false,
    classStyle:'AFLS'
};