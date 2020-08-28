import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Accordions = () => {
  const codeString = `<div class="w-accordion">
  <div class="tab w-full overflow-hidden mt-1 bg-solitude rounded">
    <input
      class="absolute opacity-0"
      id="tab-single-one"
      type="radio"
      name="tabs2"
    />
    <label
      class="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative"
      for="tab-single-one"
      >Estados
      <span class="icon icon-ic_arrow_long absolute"></span>
    </label>
    <div
      class="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal"
    >
      <div class="flex flex-col p-3 pt-0">
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            checked
          /><span class="ml-2 text-sm text-nobel">Abiertas</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            checked
          /><span class="ml-2 text-sm text-nobel">En proceso</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            checked
          /><span class="ml-2 text-sm text-nobel">Ejecutadas</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
          /><span class="ml-2 text-sm text-nobel">Anuladas</span>
        </label>
      </div>
    </div>
  </div>
  <div class="tab w-full overflow-hidden mt-1 bg-solitude rounded">
    <input
      class="absolute opacity-0"
      id="tab-single-two"
      type="radio"
      name="tabs2"
    />
    <label
      class="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative"
      for="tab-single-two"
      >Prioridad
      <span class="icon icon-ic_arrow_long absolute"></span>
    </label>
    <div
      class="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal"
    >
      <div class="flex flex-col p-3 pt-0">
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            checked
          /><span class="ml-2 text-sm text-nobel">Critica</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            checked
          /><span class="ml-2 text-sm text-nobel">Alta</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            checked
          /><span class="ml-2 text-sm text-nobel">Media</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
          /><span class="ml-2 text-sm text-nobel">Baja</span>
        </label>
      </div>
    </div>
  </div>
  <div class="tab w-full overflow-hidden mt-1 bg-solitude rounded">
    <input
      class="absolute opacity-0"
      id="tab-single-three"
      type="radio"
      name="tabs2"
    />
    <label
      class="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative"
      for="tab-single-three"
      >Servicios
      <span class="icon icon-ic_arrow_long absolute"></span>
    </label>
    <div
      class="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal"
    >
      <div class="flex flex-col p-3 pt-0">
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
          /><span class="ml-2 text-sm text-nobel">Todos</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
          /><span class="ml-2 text-sm text-nobel"
            >Atención de urgencias</span
          >
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            type="checkbox"
            class="form-checkbox h-4 w-4 text-primary hover:text-secondary"
          /><span class="ml-2 text-sm text-nobel"
            >B1 Mantenimiento preventivo</span
          >
        </label>
      </div>
    </div>
  </div>
</div>`;
  return (
    <div className="mt-20" id="accordion">
      <div>
        <p className="text-xl">Accordion</p>
      </div>
      <div>
        <div className="w-accordion">
          <div className="tab w-full overflow-hidden mt-1 bg-solitude rounded">
            <input
              className="absolute opacity-0"
              id="tab-single-one"
              type="radio"
              name="tabs2"
            />
            <label
              className="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative"
              for="tab-single-one"
            >
              Estados
              <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
              <div className="flex flex-col p-3 pt-0">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                    checked
                  />
                  <span className="ml-2 text-sm text-nobel">Abiertas</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                    checked
                  />
                  <span className="ml-2 text-sm text-nobel">En proceso</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                    checked
                  />
                  <span className="ml-2 text-sm text-nobel">Ejecutadas</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                  />
                  <span className="ml-2 text-sm text-nobel">Anuladas</span>
                </label>
              </div>
            </div>
          </div>
          <div className="tab w-full overflow-hidden mt-1 bg-solitude rounded">
            <input
              className="absolute opacity-0"
              id="tab-single-two"
              type="radio"
              name="tabs2"
            />
            <label
              className="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative"
              for="tab-single-two"
            >
              Prioridad
              <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
              <div className="flex flex-col p-3 pt-0">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                    checked
                  />
                  <span className="ml-2 text-sm text-nobel">Critica</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                    checked
                  />
                  <span className="ml-2 text-sm text-nobel">Alta</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                    checked
                  />
                  <span className="ml-2 text-sm text-nobel">Media</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                  />
                  <span className="ml-2 text-sm text-nobel">Baja</span>
                </label>
              </div>
            </div>
          </div>
          <div className="tab w-full overflow-hidden mt-1 bg-solitude rounded">
            <input
              className="absolute opacity-0"
              id="tab-single-three"
              type="radio"
              name="tabs2"
            />
            <label
              className="block leading-normal cursor-pointer h-8 text-sm p-2 text-secondary relative"
              for="tab-single-three"
            >
              Servicios
              <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
              <div className="flex flex-col p-3 pt-0">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                  />
                  <span className="ml-2 text-sm text-nobel">Todos</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                  />
                  <span className="ml-2 text-sm text-nobel">
                    Atención de urgencias
                  </span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
                  />
                  <span className="ml-2 text-sm text-nobel">
                    B1 Mantenimiento preventivo
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <CodeViewer language={"html"} codeString={codeString}></CodeViewer>
      </div>
    </div>
  );
};

export default Accordions;
