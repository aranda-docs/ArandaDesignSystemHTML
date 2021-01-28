import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import { bool } from 'prop-types';
const Switch = (props) => {
    const {
        disabled,
        classStyle,
        isChecked,
        idSwitch,
    } = props;
    const [isChecker, setOpenTab] = React.useState(isChecked);
    var classCss = "";
    switch (classStyle) {
        case "AFLS":
            classCss = `${isChecker ? "bg-teal-500 text-white" : "bg-gray"} react-switch-button`;
            break;
        default:
            classCss = `m-4 text-sm border text-gray rounded-md p-2 hover:bg-opacity-50  border-gray`;
    }
    if (disabled) {
        return (
            <div>
                <input
                    defaultChecked={isChecker}
                    className="react-switch-checkbox disabled"
                    id={idSwitch}
                    type="checkbox"
                />
                <label
                    className={`react-switch-label bg-white text-sm`}
                    htmlFor={idSwitch}
                >
                    <span className={classCss}>{isChecker ? "ACTIVO" : "INACTIVO"}</span>
                </label>
            </div>
        );
    }
    return (
        <div className="w-full py-1">
            <input
                defaultChecked={isChecker}
                className="react-switch-checkbox"
                id={idSwitch}
                type="checkbox"
                onChange={e => {
                    setOpenTab(!isChecker);
                }}
            />
            <label
                className={"react-switch-label bg-white text-sm"}
                htmlFor={idSwitch}
            >
                <span className={classCss}>{isChecker ? "ACTIVO" : "INACTIVO"}</span>
            </label>
        </div>
    );
}
Switch.propTypes = {
    isChecked: PropTypes.bool,
    classStyle: PropTypes.string,
    disabled: PropTypes.bool,
    idSwitch: PropTypes.string
};
Switch.defaultProps = {
    isChecked: true,
    disabled: false,
    classStyle: 'AFLS',
    idSwitch: 'idSwitch'

};
export default Switch;