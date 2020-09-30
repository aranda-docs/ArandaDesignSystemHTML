import React from "react";

import Menu from "../../components/Menu";

export default {
  title: "Menu",
  component: Menu,
  argTypes: {
    allowMultipleOpen: { control: "boolean" },
    
  },
};

const Template = (args) => <Menu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    allowMultipleOpen: false,
    contentMenu: [
      {
        titleSection: 'Menu 1',
        items:[
          {
            label:'Integración empresarial',
            enableHref: true,
            enableCallback: false,
            href:'?path=/story/menu--multiple-open',
            functCallBack: ''
          },
          {
            label:'Usuarios',
            enableHref: false,
            enableCallback: true,
            href:'',
            functCallBack: function(){
              console.log('Menu usuarios');
            }
          },
          {
            label:'Grupos',
            enableHref: false,
            enableCallback: true,
            href:'',
            functCallBack: ()=>console.log('Menu grupos')
          },
          {
            label:'Grupos dinámicos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Actividad de consola',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Licenciamiento',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },

        ]
      },
      {
        titleSection: 'Menu 2',
        items:[
          {
            label:'Integración empresarial',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Usuarios',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos dinámicos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Actividad de consola',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Licenciamiento',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },

        ]
      },
      {
        titleSection: 'Menu 3',
        items:[
          {
            label:'Integración empresarial',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Usuarios',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos dinámicos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Actividad de consola',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Licenciamiento',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },

        ]
      }

    ]
    
};


export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
    allowMultipleOpen: true,
    contentMenu: [
      {
        titleSection: 'Menu 1',
        items:[
          {
            label:'Integración empresarial',
            enableHref: true,
            enableCallback: false,
            href:'?path=/story/menu--normal',
            functCallBack: ''
          },
          {
            label:'Usuarios',
            enableHref: false,
            enableCallback: true,
            href:'',
            functCallBack: function(){
              console.log('Menu usuarios');
            }
          },
          {
            label:'Grupos',
            enableHref: false,
            enableCallback: true,
            href:'',
            functCallBack: ()=>console.log('Menu grupos')
          },
          {
            label:'Grupos dinámicos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Actividad de consola',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Licenciamiento',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },

        ]
      },
      {
        titleSection: 'Menu 2',
        items:[
          {
            label:'Integración empresarial',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Usuarios',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos dinámicos',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Actividad de consola',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },
          {
            label:'Licenciamiento',
            enableHref: false,
            enableCallback: false,
            href:'',
            functCallBack: ''
          },

        ]
      },
      {
        titleSection: 'Menu 3',
        items:[
          {
            label:'Integración empresarial',
            href:'',
            functCallBack: ''
          },
          {
            label:'Usuarios',
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos',
            href:'',
            functCallBack: ''
          },
          {
            label:'Grupos dinámicos',
            href:'',
            functCallBack: ''
          },
          {
            label:'Actividad de consola',
            href:'',
            functCallBack: ''
          },
          {
            label:'Licenciamiento',
            href:'',
            functCallBack: ''
          },

        ]
      }

    ]
};

