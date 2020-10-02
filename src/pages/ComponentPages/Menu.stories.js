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
      items: [
        {
          label: 'Integración empresarial',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null,
          isNested: true,
          itemsNested: [
            {
              titleSection: 'SubMenu 1',
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
              titleSection: 'SubMenu 2',
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
          }
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: () => console.log('Menu grupos')
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },

      ]
    },
    {
      titleSection: 'Menu 2',
      items: [
        {
          label: 'Integración empresarial',
          enableHref: true,
          enableCallback: false,
          href: '?path=/story/menu--multiple-open',
          functCallBack: null,
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },

      ]
    },
    {
      titleSection: 'Menu 3',
      items: [
        {
          label: 'Integración empresarial',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
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
      items: [
        {
          label: 'Integración empresarial',
          enableHref: true,
          enableCallback: false,
          href: '?path=/story/menu--normal',
          functCallBack: null
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: function () {
            console.log('Menu usuarios');
          }
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: true,
          href: '',
          functCallBack: () => console.log('Menu grupos')
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },

      ]
    },
    {
      titleSection: 'Menu 2',
      items: [
        {
          label: 'Integración empresarial',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },

      ]
    },
    {
      titleSection: 'Menu 3',
      items: [
        {
          label: 'Integración empresarial',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Usuarios',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Grupos dinámicos',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Actividad de consola',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },
        {
          label: 'Licenciamiento',
          enableHref: false,
          enableCallback: false,
          href: '',
          functCallBack: null
        },

      ]
    }

  ]
};

