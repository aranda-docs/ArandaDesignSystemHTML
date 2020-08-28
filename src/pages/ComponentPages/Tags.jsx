import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Tags = () => {
  const codeString = `
    <div class="flex justify-between w-64 my-4">
    <div
        class="bg-statusEnrolled text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase"
    >
        state
    </div>
    <div
        class="bg-pattensBlue text-secondary text-center rounded-sm w-16 text-fs10 h-4"
    >
        Por omisión
    </div>
    </div>
    <div class="flex justify-between w-64 my-4">
    <div
        class="bg-statusEnrolled text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase"
    >
        Vinculados
    </div>
    <div
        class="bg-statusPending text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase"
    >
        Pendientes
    </div>
    <div
        class="bg-statusUnenrolled text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase"
    >
        Desvinculados
    </div>
    </div>
    <div class="flex justify-between w-2/6 my-4">
    <div
        class="border-l-4 border-statusEnrolled text-nobel text-center w-20 text-sm h-5 lh-tag-sm"
    >
        BGF-Revisado
    </div>
    <div
        class="bg-nobel text-white text-center rounded px-2 text-fs10 h-4 uppercase"
    >
        <span>Ver archivos adjuntos </span>
        <span class="text-fs10 icon-ic_arrow_horizontal"></span>
    </div>
    <div
        class="bg-salmon text-white text-center rounded w-20 text-fs10 h-4 uppercase"
    >
        Respondida
    </div>
    </div>
  `;
  return (
    <div className="mt-20" id="etiquetas">
      <div>
        <p className="text-xl">Etiquetas</p>
      </div>
      <div>
        <div className="flex justify-between w-64 my-4">
          <div className="bg-statusEnrolled text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase">
            state
          </div>
          <div className="bg-pattensBlue text-secondary text-center rounded-sm w-16 text-fs10 h-4">
            Por omisión
          </div>
        </div>
        <div className="flex justify-between w-64 my-4">
          <div className="bg-statusEnrolled text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase">
            Vinculados
          </div>
          <div className="bg-statusPending text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase">
            Pendientes
          </div>
          <div className="bg-statusUnenrolled text-white text-center rounded-sm w-20 text-sm h-5 lh-tag-sm uppercase">
            Desvinculados
          </div>
        </div>
        <div className="flex justify-between w-2/6 my-4">
          <div className="border-l-4 border-statusEnrolled text-nobel text-center w-20 text-sm h-5 lh-tag-sm">
            BGF-Revisado
          </div>
          <div className="bg-nobel text-white text-center rounded px-2 text-fs10 h-4 uppercase">
            <span>Ver archivos adjuntos </span>
            <span className="text-fs10 icon-ic_arrow_horizontal"></span>
          </div>
          <div className="bg-salmon text-white text-center rounded w-20 text-fs10 h-4 uppercase">
            Respondida
          </div>
        </div>
      </div>
      <div className="mt-3">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
    </div>
  );
};

export default Tags;
