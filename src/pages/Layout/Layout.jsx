import React, { useContext } from "react";
import {
  AnchorContext,
  AnchorProvider,
  AnchorSection,
} from "react-anchor-navigation";
import Bar from "../../components/Bar";
import Buttons from "../ComponentPages/Buttons";
import Alerts from "../ComponentPages/Alerts";
import Checkboxes from "../ComponentPages/Checkboxes";
import Accordions from "../ComponentPages/Accordion";
import Menus from "../ComponentPages/Menus";
import Inputs from "../ComponentPages/Inputs";
import Textareas from "../ComponentPages/Textareas";
import Tags from "../ComponentPages/Tags";

import Menu from "../../components/Menu";

  const allowMultipleOpen= true;
  const contentMenu = [
      {
        titleSection: 'Menu 1',
        items:[
          {
            label:'Integración empresarial',
            enableHref: true,
            enableCallback: false,
            href:'#buttons',
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

    ];

const Layout = () => {
  const { hash, sections } = useContext(AnchorContext);
  

  return (
    <AnchorProvider>
      <Bar />
      <div className="container py-5">
        <AnchorSection className="dBlock anchor" id="buttons">
          <Buttons />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="alerts">
          <Alerts />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="checkbox">
          <Checkboxes />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="accordion">
          <Accordions />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="menu">
          <Menus />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="inputs">
          <Inputs />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="textarea">
          <Textareas />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="tags">
          <Tags />
        </AnchorSection>
        <AnchorSection className="dBlock anchor" id="menuOwner">
          <Menu allowMultipleOpen={allowMultipleOpen} contentMenu = {contentMenu}/>
        </AnchorSection>

      </div>
    </AnchorProvider>
  );
};

export default Layout;
