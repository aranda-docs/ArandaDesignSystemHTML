import React, { useContext } from "react";
import {
  AnchorContext,
  AnchorProvider,
  AnchorSection,
} from "react-anchor-navigation";
import Bar from "../../components/Bar";
import Alerts from "../../components/Alerts";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

const Layout = () => {
  const { hash, sections } = useContext(AnchorContext);

  return ({
    Bar,
    Alerts,
    Button,
    Input,
    Textarea
  }
  );
};

export default Layout;
