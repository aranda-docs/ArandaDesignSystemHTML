import React from 'react';
import PropTypes from 'prop-types';
import DynamicComponent from '../DynamicComponent';
const ShowPanelCheck = ({ params, idCheck, textLabel, isChecked, idDivName, classStyle, ...props }) => {
    const [isChecker, setOpenTab] = React.useState(isChecked);
    var classCss = "";
    switch (classStyle) {
        case "AFLS":
            classCss = `${isChecker ? "w-full blok" : "hidden"} w-full`;
            break;
        default:
            classCss = `m-4 text-sm border text-gray rounded-md p-2 hover:bg-opacity-50  border-gray`;
    }
    return (
        <div className={`w-full`}>
            <div className={`w-full`}>
                <label
                >
                    <input
                        type='checkbox'
                        defaultChecked={isChecked}
                        className={`ascheckbox`}
                        id={idCheck}
                        onChange={e => {
                            setOpenTab(!isChecker);
                        }}
                    />
                    {textLabel}
                </label>
            </div>
            <div id={idDivName} className={classCss}>
                <DynamicComponent params={params} />
            </div>
        </div>
    );
};

ShowPanelCheck.propTypes = {
    textLabel: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    idCheck: PropTypes.string,
    idDivName: PropTypes.string,
    classStyle:PropTypes.string
};
ShowPanelCheck.defaultProps = {
    isChecked: true,
    idCheck: 'idcheck',
    textLabel: 'holass',
    idDivName: 'idDivprue',
    classStyle:'AFLS',
    params:
    [{
        "Labelposition": 1,
        "colsRequire": 1,
        "dataType": "text",
        "idGroup": "principal",
        "label": "Domain two",
        "labelDescription": "Update AFLS base path.",
        "options": {},
        "orderTab": 1,
        "sett_key": "name",
        "value": "INTERSEQ",
        "holder": "escriba su nombre",
        "maxlength": 50
    }]
};
export default ShowPanelCheck;