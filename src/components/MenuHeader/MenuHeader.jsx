import React from 'react';

import { Menu } from '@progress/kendo-react-layout';

import '@progress/kendo-theme-default/dist/all.css';


const items = [
    {
        text: 'Dashboard',
        cssClass: 'as-icon-header icon-ic_dashboard',
        url: '?path=/story/menu--multiple-open'
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
                cssClass: 'as-icon-header-submenu',
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
        cssClass: 'as-icon-header icon-ic_policy',
        select: ()=>console.log('Hola desde menu')
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
        <header className="main headerBg adm">
            <div className="base">
                <div className="logo">
                    <div className="icon">
                        <span className="icon-ic_logo_ADM"></span>
                    </div>
                    <div className="wrap-mid">
                        <h2 className="regular">Aranda</h2>
                        <h2 className="bold">Device Management</h2>
                    </div>
                </div>
                <div className="header-zone-center">
                    <div className="arrow-right"></div>
                    <div className="breadcrumbs">
                        <span className="title headerTx">Dispositivos</span>
                    </div>
                    <div className="header-zone-center-menu">
                        <Menu items={items} />
                    </div>
                </div>
                <div className="rightMenu">
                    <div className="col2">
                        <div className="exit">
                            <a className="textTitle" href="../Handlers/Logout.ashx">
                                <span id="spnCloseSession" className="titleRightMenu mainTx">| Cerrar sesión</span>
                            </a>
                        </div>
                        <div className="configuration" >
                            <a href="Settings.aspx#" className="headerTx">Configuración</a>
                            <div className="icon">
                                <span className="icon-font icon-ic_gear headerTx"></span>
                            </div>
                        </div>
                        <div className="home" style={{display: 'none'}}>
                            <a href="Default.aspx#" className="headerTx">Inicio</a>
                            <div className="icon">
                                <span className="icon-font icon-ic_gear headerTx"></span>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="positionTop">
                            <a className="userTop headerTx ellipsis" href="Default.aspx#/profile/user" title="APPLICATION ADMINISTRATOR">APPLICATION ADMINISTRATOR</a>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );

};

export default MenuHeader;