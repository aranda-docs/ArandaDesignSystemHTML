import React from 'react';
import LabelInput from '../../components/LabelInput';
export default {
    title: 'Example/LabelInput',
    component: LabelInput,
    argTypes: {
        params:{ control: 'text'},
        disabled:{ control:'boolean'}
    },
};

const Template = (args) => <LabelInput {...args} />;
export const labeltop = Template.bind({});
labeltop.args = {
    params:
        {
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Domain",
        "labelDescription": null,
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "INTERSEQ"
        },
    disabled: false
};
export const labeltopDescription = Template.bind({});
labeltopDescription.args = {
    params:
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
        "value": "INTERSEQ"
        },
    disabled: false
};
export const labelLeft = Template.bind({});
labelLeft.args = {
    params:
        {
        "Labelposition": 2,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Domain",
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "INTERSEQ"
        },
    disabled: false
};
export const labelandDescripButton = Template.bind({});
labelandDescripButton.args = {
    params:
        {
        "Labelposition": 2,
        "colsRequire": 1,
        "dataType": "button",
        "idGroup": "principal",
        "label": "Domain",
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "Sincronizar Ahora",
        "labelDescription":"dar click para sincronizar ahora"
        },
    disabled: false
};
