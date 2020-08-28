import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Inputs = () => {
  const codeString = `
    <div>
    <input
      name="inputTest1"
      type="text"
      maxlength="50"
      class="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel"
      placeholder="placeholder"
      value="NormalState"
    />
  </div>
  <div class="mt-4">
    <input
      name="inputTest1"
      type="text"
      maxlength="50"
      class="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel"
      placeholder="placeholder"
      value=""
    />
  </div>
  <div class="mt-4">
    <input
      name="inputTest1"
      type="text"
      maxlength="50"
      class="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel"
      placeholder="placeholder"
      value="DisabledState"
      disabled
    />
  </div>
    `;
  return (
    <div className="mt-20" id="inputs">
      <div>
        <p className="text-xl">Inputs</p>
      </div>

      <div>
        <div>
          <input
            name="inputTest1"
            type="text"
            maxlength="50"
            className="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel"
            placeholder="placeholder"
            value="NormalState"
          />
        </div>
        <div className="mt-4">
          <input
            name="inputTest1"
            type="text"
            maxlength="50"
            className="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel"
            placeholder="placeholder"
            value=""
          />
        </div>
        <div className="mt-4">
          <input
            name="inputTest1"
            type="text"
            maxlength="50"
            className="text-sm placeholder-gray text-gray hover:text-nobel rounded border border-gray p-1 disabled:bg-palegray disabled:text-nobel"
            placeholder="placeholder"
            value="DisabledState"
            disabled
          />
        </div>
      </div>
      <div className="mt-3">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
    </div>
  );
};

export default Inputs;
