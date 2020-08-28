import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeViewer from "../../components/CodeViewer";
import Button from "../../components/Button";
import Documentation from "../../components/Button/Button.md";

const Buttons = (props) => {
  const [codeBlock, setCodeBlock] = useState("");
  const codeString = `
<button class="text-sm bg-primary text-white rounded-sm py-1 px-3 hover:bg-opacity-50">
  Normal Primary
</button>
<button class="text-sm bg-secondary text-white rounded-sm py-1 px-3 hover:bg-opacity-50">
  Normal Secondary
</button>

<button class="text-sm border-solid border border-primary text-primary rounded-sm py-1 px-3 hover:opacity-50">
  Normal Primary
</button>
<button class="text-sm border-solid border-secondary border text-secondary rounded-sm py-1 px-3 hover:opacity-50">
  Normal Secondary
</button>

<button class="text-sm bg-disable text-white rounded-sm py-1 px-3 hover:bg-opacity-50">
  Normal Disable
</button>`;

  useEffect(() => {
    fetch(Documentation)
      .then((response) => response.text())
      .then((text) => {
        setCodeBlock(text);
      });
  }, [setCodeBlock]);

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-3">
        <p className="text-xl">Botones</p>
      </div>
      <div className="col-span-1 xs:col-span-2 grid">
        <Button
          type={"bg"}
          color={"primary"}
          text={"Normal Primary"}
          disabled={false}
        />
        <Button
          type={"bg"}
          color={"secondary"}
          text={"Normal Secondary"}
          disabled={false}
        />

        <Button
          type={"border"}
          color={"primary"}
          text={"Normal Primary"}
          disabled={false}
        />
        <Button
          type={"border"}
          color={"secondary"}
          text={"Normal Secondary"}
          disabled={false}
        />

        <Button text={"Normal Disabled"} disabled={true} />
      </div>
      <div className="col-span-1 xs:col-span-2">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
      <div className="hidden">
        <ReactMarkdown source={codeBlock} />
      </div>
    </div>
  );
};

export default Buttons;
