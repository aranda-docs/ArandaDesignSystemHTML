import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { AnchorLink } from "react-anchor-navigation";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className="h-screen sticky top-0 sticky items-center justify-center bg-gray-100">
      <div className="flex w-full h-screen max-w-xs p-4 bg-purple-800">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <Link to="/">
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
                <span className="flex items-center justify-center text-lg text-gray-500">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="ml-3">Aranda Design System</span>
              </button>
            </Link>
          </li>
          <li className="my-px">
            <span className="flex font-medium text-md text-white px-4 my-4 uppercase">
              Componentes
            </span>
          </li>
          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#buttons"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Buttons</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#alerts"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Alerts</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#checkbox"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Checkbox</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#accordion"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Accordion</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#menu"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Menu</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#inputs"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Inputs</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#textarea"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Textarea - Multiline</span>
              </button>
            </AnchorLink>
          </li>

          <li className="my-px">
            <AnchorLink
              className="dTable w100 pad15"
              href="#tags"
              activeClassName="bg-gray-700"
            >
              <button className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span className="flex items-center justify-center text-lg text-white">
                  <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <span className="ml-3 text-white">Etiquetas</span>
              </button>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bar;
