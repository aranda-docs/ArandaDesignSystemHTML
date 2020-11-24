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
      iconSection:null, 
      items: [
        {
          label: 'Sub menus del Menu 1',//No esnecesario
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: true,
          itemsNested: [
            {
              titleSection: 'SubMenu 1',
              iconSection:'icon-ic_update_ci', 
              items: [
                {
                  label: 'Anidado 1',
                  enableHref: false,
                  enableCallback: true,
                  href: '',
                  functCallBack: function () {
                    console.log('Anidado 1');
                  }
                },
                {
                  label: 'Anidado 2',
                  enableHref: false,
                  enableCallback: true,
                  href: '',
                  functCallBack: () => console.log('Anidado 2')
                },
                {
                  label: 'Anidado 3',
                  enableHref: false,
                  enableCallback: false,
                  href: '',
                  functCallBack: null
                }
              ]
            },
            {
              titleSection: 'SubMenu con nombre BASTANTE largo',
              iconSection:'icon-ic_update_pack', 
              items: [
                {
                  label: 'Anidado 2',
                  enableHref: false,
                  enableCallback: true,
                  href: '',
                  functCallBack: function () {
                    console.log('Anidado 2');
                  }
                },
                {
                  label: 'Anidado 2',
                  enableHref: false,
                  enableCallback: true,
                  href: '',
                  functCallBack: () => console.log('Anidado 2')
                },
                {
                  label: 'Anidado 2',
                  enableHref: false,
                  enableCallback: false,
                  href: '',
                  functCallBack: null
                }
              ]
            },
            {
              titleSection: 'SubMenu 3',
              iconSection:'icon-ic_voz_roaming', 
              items: [
                {
                  label: 'Anidado 3',
                  enableHref: false,
                  enableCallback: true,
                  href: '',
                  functCallBack: function () {
                    console.log('Anidado 3');
                  }
                },
                {
                  label: 'Anidado 3',
                  enableHref: false,
                  enableCallback: true,
                  href: '',
                  functCallBack: () => console.log('Anidado 3')
                },
                {
                  label: 'Anidado 3',
                  enableHref: false,
                  enableCallback: false,
                  href: '',
                  functCallBack: null
                }
              ]
            }
          ]
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: function () {
            console.log('Menu usuarios');
          },
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: () => console.log('Menu grupos'),
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },

      ]
    },
    {
      titleSection: 'Menu 2',
      iconSection:null, 
      items: [
        {
          label: 'Integración empresarial',
          enableHref: true,
          enableCallback: false,
          href: '?path=/story/menu--multiple-open',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },

      ]
    },
    {
      titleSection: 'Menu 3',
      iconSection:null, 
      items: [
        {
          label: 'SubMenus en menu 3',//No es necesario label
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: true,
          itemsNested: [
            {
              titleSection: 'Sin submenus 1',
              iconSection:'icon-ic_update_ci', 
              enableHref: false,
              enableCallback: true,
              href: '',
              functCallBack: function () {
                console.log('Sin submenu 1');
              },
              items: []
            },
            {
              titleSection: 'Sin submenus 2',
              iconSection:'icon-ic_update_pack', 
              enableHref: true,
              enableCallback: false,
              href: '?path=/story/menu--multiple-open',
              functCallBack: null,
              items: []
            },
            {
              titleSection: 'Sin submenus 3',
              iconSection:'icon-ic_voz_roaming', 
              enableHref: false,
              enableCallback: true,
              href: '',
              functCallBack: function () {
                console.log('Sin submenu 3');
              },
              items: []
            }
          ]
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
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
      iconSection:null, 
      items: [
        {
          label: 'Integración empresarial',
          enableHref: true,
          enableCallback: false,
          href: '?path=/story/menu--normal',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: function () {
            console.log('Menu usuarios');
          },
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: () => console.log('Menu grupos'),
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },

      ]
    },
    {
      titleSection: 'Menu 2',
      iconSection:null, 
      items: [
        {
          label: 'Integración empresarial',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },

      ]
    },
    {
      titleSection: 'Menu 3',
      iconSection:null, 
      items: [
        {
          label: 'Integración empresarial',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: false,
          itemsNested:[]
        },

      ]
    }

  ]
};

