import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Code Viewer Component
 * @param {*} props.codeString Component Code example
 * @param {*} props.language Code Viewer Language
 * @param {*} props.showLineNumbers Show Lines in code, default = true
 * @param {*} props.theme Code Viewer Theme
 */
const CodeViewer = (props) => {
  return (
    <SyntaxHighlighter
      style={dracula}
      language={props.language}
      showLineNumbers={props.showLineNumbers || true}
    >
      {props.codeString}
    </SyntaxHighlighter>
  );
};

CodeViewer.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeViewer;
