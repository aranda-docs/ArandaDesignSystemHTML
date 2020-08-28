import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Textareas = () => {
  const codeString = `
    <textarea
        name="textarea-test"
        maxlength="200"
        placeholder="placeholder"
        class="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel w-full h-48"
    >
    </textarea>
  `;
  return (
    <div id="textArea" className="mt-20 w-3/4">
      <div>
        <p className="text-xl">Textarea - Multiline</p>
      </div>

      <div>
        <textarea
          name="textarea-test"
          maxlength="200"
          placeholder="placeholder"
          className="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel w-full h-48"
        ></textarea>
      </div>
      <div className="mt-3">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
    </div>
  );
};

export default Textareas;
