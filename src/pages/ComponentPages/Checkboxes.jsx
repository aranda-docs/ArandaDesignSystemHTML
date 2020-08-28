import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Checkboxes = () => {
  const codeString = `
  <div class="flex flex-col">
    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
        checked
      />
      <span class="ml-2 text-sm text-nobel">Checkbox</span>
    </label>
    <label class="inline-flex items-center mt-3">
      <input
        type="checkbox"
        class="form-checkbox h-4 w-4 text-primary hover:text-secondary disabled:text-secondary"
        disabled
      />
      <span class="ml-2 text-sm text-gray">Checkbox disabled</span>
    </label>
  </div>`;

  return (
    <div className="mt-20">
      <div>
        <p className="text-xl">Checkbox</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">Checkbox</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary disabled:text-secondary"
              disabled
            />
            <span className="ml-2 text-sm text-gray">Checkbox disabled</span>
          </label>
        </div>
      </div>
      <div className="mt-3">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
    </div>
  );
};

export default Checkboxes;
