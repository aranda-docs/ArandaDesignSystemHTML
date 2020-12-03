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
    listTabs: [{'title':'Title1','text':'hola1','index':0,'id':'tab1'},{'title':'Title2','text':'hola2','index':1,'id':'tab2'},{'title':'Title3','text':'hola3','index':2,'id':'tab3'}],
    disabled: false,
};