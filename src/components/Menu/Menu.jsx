import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import MenuSection from "./MenuSection";


const Menu = (props) => {
    const [options, setOptions] = useState({
        allowMultipleOpen: false
    });

    useEffect(() => {
        console.log(props);
        if (props) {
            setOptions({
                allowMultipleOpen:props.allowMultipleOpen
            });
        }
    }, [props.allowMultipleOpen]);

    return (

        <div className="w-accordion">
            <MenuSection id={1} title={'Menu 1'} allowMultipleOpen={options.allowMultipleOpen}>
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

            </MenuSection>
            <MenuSection id={2} title={'Menu 2'} allowMultipleOpen={options.allowMultipleOpen}>
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
            </MenuSection>
            <MenuSection id={3} title={'Menu 3'} allowMultipleOpen={options.allowMultipleOpen}>
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
            </MenuSection>
        </div>

    );
};

Menu.propTypes = {
    allowMultipleOpen: PropTypes.bool,
};

export default Menu;
