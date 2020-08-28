import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Alerts = () => {
  const codeString = `<div
  class="w-3/4 m-auto bg-center bg-alert-danger opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
  role="alert"
>
  <div class="flex-grow flex flex-col justify-center">
    <div class="text-center text-sm">Danger alert</div>
  </div>
  <div class="flex flex-col justify-center">
    <div
      class="relative icon-ic_close_no_border cursor-pointer text-sm"
    ></div>
  </div>
</div>
<div
  class="w-3/4 m-auto bg-center bg-alert-success opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
  role="alert"
>
  <div class="flex-grow flex flex-col justify-center">
    <div class="text-center text-sm">Success alert</div>
  </div>
  <div class="flex flex-col justify-center">
    <div
      class="relative icon-ic_close_no_border cursor-pointer text-sm"
    ></div>
  </div>
</div>
<div
  class="w-3/4 m-auto bg-center bg-alert-info opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
  role="alert"
>
  <div class="flex-grow flex flex-col justify-center">
    <div class="text-center text-sm">Info alert</div>
  </div>
  <div class="flex flex-col justify-center">
    <div
      class="relative icon-ic_close_no_border cursor-pointer text-sm"
    ></div>
  </div>
</div>
<div
  class="w-3/4 m-auto bg-center bg-alert-warning opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
  role="alert"
>
  <div class="flex-grow flex flex-col justify-center">
    <div class="text-center text-sm">Warning alert</div>
  </div>
  <div class="flex flex-col justify-center">
    <div
      class="relative icon-ic_close_no_border cursor-pointer text-sm"
    ></div>
  </div>
</div>`;
  return (
    <div className="mt-20" id="alerts">
      <div>
        <p className="text-xl">Alertas</p>
      </div>
      <div>
        <div
          className="w-3/4 m-auto bg-center bg-alert-danger opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
          role="alert"
        >
          <div className="flex-grow flex flex-col justify-center">
            <div className="text-center text-sm">Danger alert</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative icon-ic_close_no_border cursor-pointer text-sm"></div>
          </div>
        </div>
        <div
          className="w-3/4 m-auto bg-center bg-alert-success opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
          role="alert"
        >
          <div className="flex-grow flex flex-col justify-center">
            <div className="text-center text-sm">Success alert</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative icon-ic_close_no_border cursor-pointer text-sm"></div>
          </div>
        </div>
        <div
          className="w-3/4 m-auto bg-center bg-alert-info opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
          role="alert"
        >
          <div className="flex-grow flex flex-col justify-center">
            <div className="text-center text-sm">Info alert</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative icon-ic_close_no_border cursor-pointer text-sm"></div>
          </div>
        </div>
        <div
          className="w-3/4 m-auto bg-center bg-alert-warning opacity-75 h-10 text-white px-4 py-0 rounded relative my-3 flex flex-row"
          role="alert"
        >
          <div className="flex-grow flex flex-col justify-center">
            <div className="text-center text-sm">Warning alert</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative icon-ic_close_no_border cursor-pointer text-sm"></div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
    </div>
  );
};

export default Alerts;
