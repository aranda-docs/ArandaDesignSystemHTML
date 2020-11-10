import React from 'react';

import { Menu } from '@progress/kendo-react-layout';

import '@progress/kendo-theme-default/dist/all.css';


const items = [
    {
        text: 'Dashboard',
        cssClass: 'as-icon-header icon-ic_dashboard'
    },
    {
        text: 'Inventario',
        cssClass: 'as-icon-header icon-ic_devices',
        items: [
            {
                text: 'Dispositivos',
                cssClass: 'as-icon-header-submenu'
            },
            {
                text: 'Hardware',
                cssClass: 'as-icon-header-submenu'
            }
        ]
    },
    {
        text: 'Software',
        cssClass: 'as-icon-header icon-ic_rubik',
        items: [
            {
                text: 'Catálogo',
                cssClass: 'as-icon-header-submenu'
            },
            {
                text: 'Actualizaciones',
                cssClass: 'as-icon-header-submenu'
            },
            {
                text: 'Distribución',
                cssClass: 'as-icon-header-submenu'
            },
            {
                text: 'Licencias',
                cssClass: 'as-icon-header-submenu'
            },
            {
                text: 'Actualizaciones',
                cssClass: 'as-icon-header-submenu'
            },
            {
                text: 'Uso de Software',
                cssClass: 'as-icon-header-submenu'
            }
        ]
    },
    {
        text: 'Políticas',
        cssClass: 'as-icon-header icon-ic_policy'
    },
    {
        text: 'Reglas',
        cssClass: 'as-icon-header icon-ic_rules'
    },
    {
        text: 'Reportes',
        cssClass: 'as-icon-header icon-ic_reports'
    },
    {
        text: 'Alertas',
        cssClass: 'as-icon-header icon-ic_exclamation_mark_triangle'
    }

];



const MenuHeader = (props) => {

    return (
        <div className ="header-zone-center-menu">
            <Menu items={items} />
        </div>
    );

};

export default MenuHeader;