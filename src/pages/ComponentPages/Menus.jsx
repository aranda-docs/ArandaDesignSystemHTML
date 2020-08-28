import React from "react";
import CodeViewer from "../../components/CodeViewer";

const Menus = () => {
  const codeString = `
  <div class="w-accordion">
              <div class="tab w-full overflow-hidden mt-px bg-primary rounded">
                <input
                  class="absolute opacity-0"
                  id="tab-single-menu-one"
                  type="radio"
                  name="tabs2"
                />
                <label
                  class="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
                  for="tab-single-menu-one"
                  >Menu 1 <span class="icon icon-ic_arrow_long absolute"></span>
                </label>
                <div
                  class="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal"
                >
                  <ul>
                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Integración empresarial</span>
                    </li>
                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Usuarios</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Grupos</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Grupos dinámicos</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Actividad de consola</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Licenciamiento</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab w-full overflow-hidden mt-px bg-primary rounded">
                <input
                  class="absolute opacity-0"
                  id="tab-single-menu-two"
                  type="radio"
                  name="tabs2"
                />
                <label
                  class="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
                  for="tab-single-menu-two"
                  >Menu 2 <span class="icon icon-ic_arrow_long absolute"></span>
                </label>
                <div
                  class="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal"
                >
                  <ul>
                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Integración empresarial</span>
                    </li>
                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Usuarios</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Grupos</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Grupos dinámicos</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Actividad de consola</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Licenciamiento</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab w-full overflow-hidden mt-px bg-primary rounded">
                <input
                  class="absolute opacity-0"
                  id="tab-single-menu-three"
                  type="radio"
                  name="tabs2"
                />
                <label
                  class="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
                  for="tab-single-menu-three"
                  >Menu 3 <span class="icon icon-ic_arrow_long absolute"></span>
                </label>
                <div
                  class="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal"
                >
                  <ul>
                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Integración empresarial</span>
                    </li>
                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Usuarios</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Grupos</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Grupos dinámicos</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Actividad de consola</span>
                    </li>

                    <li
                      class="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer"
                    >
                      <span>Licenciamiento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  `;
  return (
    <div className="mt-20" id="menu">
      <div>
        <p className="text-xl">Menu</p>
      </div>
      <div>
        <div className="w-accordion">
          <div className="tab w-full overflow-hidden mt-px bg-primary rounded">
            <input
              className="absolute opacity-0"
              id="tab-single-menu-one"
              type="radio"
              name="tabs2"
            />
            <label
              className="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
              for="tab-single-menu-one"
            >
              Menu 1 <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
              <ul>
                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Integración empresarial</span>
                </li>
                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Usuarios</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Grupos</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Grupos dinámicos</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Actividad de consola</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Licenciamiento</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab w-full overflow-hidden mt-px bg-primary rounded">
            <input
              className="absolute opacity-0"
              id="tab-single-menu-two"
              type="radio"
              name="tabs2"
            />
            <label
              className="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
              for="tab-single-menu-two"
            >
              Menu 2 <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
              <ul>
                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Integración empresarial</span>
                </li>
                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Usuarios</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Grupos</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Grupos dinámicos</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Actividad de consola</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Licenciamiento</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab w-full overflow-hidden mt-px bg-primary rounded">
            <input
              className="absolute opacity-0"
              id="tab-single-menu-three"
              type="radio"
              name="tabs2"
            />
            <label
              className="block leading-normal cursor-pointer h-10 text-fs13 p-2 text-white relative"
              for="tab-single-menu-three"
            >
              Menu 3 <span className="icon icon-ic_arrow_long absolute"></span>
            </label>
            <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
              <ul>
                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Integración empresarial</span>
                </li>
                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Usuarios</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Grupos</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Grupos dinámicos</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Actividad de consola</span>
                </li>

                <li className="item h-6 bg-palegray text-sm pt-1 pl-2 pr-2 pb-1 text-secondary hover:bg-zircon hover:text-primary cursor-pointer">
                  <span>Licenciamiento</span>
                </li>
              </ul>
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

export default Menus;
