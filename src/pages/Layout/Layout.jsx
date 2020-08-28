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
      </div>
    </AnchorProvider>
  );
};

export default Layout;
