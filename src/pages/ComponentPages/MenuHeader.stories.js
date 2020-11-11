import React from "react";
import MenuHeader from "../../components/MenuHeader";

export default {
  title: "MenuHeader",
  component: MenuHeader,
  argTypes: {
    allowMultipleOpen: { control: "boolean" },

  },
};

const Template = (args) => <MenuHeader {...args} />;

export const ADM = Template.bind({});
ADM.args = {
  menu: {
    titleTop: 'Aranda',
    titleBotton: 'Device Management',
    productLogo: 'icon-ic_logo_ADM',
    menuItems: [
      {
        text: 'Dashboard',
        icon: 'icon-ic_dashboard',
        url: '?path=/story/menu--multiple-open'
      },
      {
        text: 'Inventario',
        icon: 'icon-ic_devices',
        items: [
          {
            text: 'Dispositivos'
          },
          {
            text: 'Hardware',
          }
        ]
      },
      {
        text: 'Software',
        icon: 'icon-ic_rubik',
        items: [
          {
            text: 'Catálogo'
          },
          {
            text: 'Actualizaciones',
          },
          {
            text: 'Distribución',
            items: [
              {
                text: 'Dispositivos',
              },
              {
                text: 'Hardware',
              }
            ]
          },
          {
            text: 'Licencias',
          },
          {
            text: 'Actualizaciones',
          },
          {
            text: 'Uso de Software',
          }
        ]
      },
      {
        text: 'Políticas',
        icon: 'icon-ic_policy'
      },
      {
        text: 'Reglas',
        icon: 'icon-ic_rules'
      },
      {
        text: 'Reportes',
        icon: 'icon-ic_reports'
      },
      {
        text: 'Alertas',
        icon: 'icon-ic_exclamation_mark_triangle'
      }
    ],
  },
};

export const AEMM = Template.bind({});
AEMM.args = {
  menu: {
    titleTop: 'Aranda Enterprise',
    titleBotton: 'Mobile Management',
    productLogo: 'icon-ic_device_mobile',
    menuItems: [
      {
        text: 'Dashboard',
        icon: 'icon-ic_dashboard',
        url: '?path=/story/menu--multiple-open'
      },
      {
        text: 'Dispositivos',
        icon: 'icon-ic_devices',
        items: [
          {
            text: 'Dispositivos'
          },
          {
            text: 'Proyectos de gestión',
          },
          {
            text: 'Gestión de consumos',
          }
        ]
      },
      {
        text: 'Aplicaciones',
        icon: 'icon-ic_rubik',
      },
      {
        text: 'Políticas',
        icon: 'icon-ic_policy'
      },
      {
        text: 'Reglas',
        icon: 'icon-ic_rules'
      },
      {
        text: 'Reportes',
        icon: 'icon-ic_reports'
      },
      {
        text: 'Documentos',
        icon: 'icon-ic_header_documents'
      },
      {
        text: 'Alertas',
        icon: 'icon-ic_exclamation_mark_triangle'
      }
    ],
  },
};