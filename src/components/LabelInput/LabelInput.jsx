import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Label from '../Label';
import Switch from '../Switch';
import CheckList from '../CheckList';
import DropDown from '../DropDown';
import Button from '../Button';
const LabelInput = ({ params, disabled, ...props }) => {
    var holder = params.holder !== "undefined" ? params.holder : '';
    /*label in top*/
    /*renderiza swich */
    switch (params.dataType) {
        case 'button':
            return renderButton(params);
        case 'switch':
            return renderSwitch(params);
        case 'checked':
            return renderCheck(params);
        case 'select':
            return renderDropDown(params);
        case 'text':
            return renderText(params, holder);
        case 'label':
            return renderLabel(params, holder);
        case 'divLine':
            return renderDivLine(params);
        default:
            return renderText(params, holder);
    }
};
function renderButton(params) {
    if (params.imagen !== 'undefined' && params.imagen !== null) {
        return (
            <div className={`w-full relative ${params.bgColor}`}>
                <div className={`w-1/6`}>
                    <div className={params.imagen} />
                </div>
                <div className={`w-2/6 ml-8`}>
                    <div className={`w-fill h6\/12`}>
                        <Label text={params.label}
                            classStyle="AFLS" />
                    </div>
                    <div className={`w-fill h6\/12`}>
                        <Label text={params.labelDescription}
                            classStyle="AFLSDescription" />
                    </div>
                </div>
                <div className={`mr-0 sup w-6\/12 absolute`} style={{ top: '0px', right: '0px' }}>
                    <Button text={params.value} classStyle={params.classStyle} id={params.sett_key} />
                </div>
            </div>
        );
    }
    if ((params.label === 'undefined' || params.label === '') && (params.labelDescription !== 'undefined' && params.labelDescription !== '')) {
        return (
            <div className={`w-full relative`}>
                <div className={`w-6\/12`}>
                    <Label text={params.labelDescription}
                        classStyle="AFLSDescription" />
                </div>
                <div className={`mr-0 sup w-6\/12 absolute`} style={{ top: '0px', right: '0px' }}>
                    <Button text={params.value} classStyle={params.classStyle} id={params.sett_key} />
                </div>
            </div>
        );
    }
    if ((params.label !== 'undefined' && params.label !== '') && (params.labelDescription === 'undefined' || params.labelDescription === '')) {
        return (
            <div className={`w-full relative`}>
                <div className={`w-6\/12`}>
                    <Label text={params.label}
                        classStyle="AFLS" />
                </div>
                <div className={`mr-0 sup w-6\/12 absolute`} style={{ top: '0px', right: '0px' }}>
                    <Button text={params.value} classStyle={params.classStyle} id={params.sett_key} />
                </div>
            </div>
        );
    }
    if ((params.label !== 'undefined' && params.label !== '') && (params.labelDescription !== 'undefined' || params.labelDescription !== '')) {
        return (
            <div className={`w-full relative`}>
                <div className={`w-6\/12`}>
                    <div className={`w-fill h6\/12`}>
                        <Label text={params.label}
                            classStyle="AFLS" />
                    </div>
                    <div className={`w-fill h6\/12`}>
                        <Label text={params.labelDescription}
                            classStyle="AFLSDescription" />
                    </div>
                </div>
                <div className={`mr-0 sup w-6\/12 absolute`} style={{ top: '0px', right: '0px' }}>
                    <Button text={params.value} classStyle={params.classStyle} id={params.sett_key} />
                </div>
            </div>
        );
    }
    return (
        <div className={`w-full`}>
            <Button text={params.value} classStyle={params.classStyle} id={params.sett_key} />
        </div>
    );
}
function renderDropDown(params) {
    if (params.Labelposition === 1) {
        return (
            <div className={`w-full`}>
                <div className={`w-full`}>
                    <Label text={params.label}
                        classStyle="AFLS" />
                </div>
                <div className={`w-full`}>
                    <DropDown listitems={params.options} value={params.value} classStyle={'AFLS'} id={params.sett_key} />
                </div>
            </div>
        );
    }
    return (
        <div className={`w-full`}>
            <div className={`w-6\/12`}>
                <Label text={params.label}
                    classStyle="AFLS" />
            </div>
            <div className={`mr-0 sup w-6\/12 absolute`} style={{ top: '15.5px', right: '0px' }}>
                <DropDown listitems={params.options} value={params.value} classStyle={'AFLS'} id={params.sett_key} />
            </div>
        </div>
    );
};
function renderCheck(params) {
    if (params.Labelposition === 1) {
        return (
            <div className={`w-full h-full pt-3`}>
                <CheckList isChecked={params.value} text={params.label} alingtext={'left'} idCheck={params.sett_key} />
            </div>
        )
    }
    return (
        <div className={`w-full h-full pt-3`}>
            <CheckList isChecked={params.value} text={params.label} alingtext={'right'} idCheck={params.sett_key} />
        </div>
    )
};
function renderSwitch(params) {
    if (params.Labelposition === 1) {
        return (
            <div className={`w-full`}>
                <div className={`w-full`}>
                    <Label text={params.label}
                        classStyle="AFLS" />
                </div>
                <div className={`w-full`}>
                    <Switch isChecked={params.value} classStyle={'AFLS'} idSwitch={params.sett_key} />
                </div>
            </div>

        )
    }
    return (
        <div className={`w-full bg-gray`}>
            <div className={`w-6\/12`}>
                <Label text={params.label}
                    classStyle="AFLS" />
            </div>
            <div className={`mr-0 sup w-6\/12 absolute`} style={{ top: '15.5px', right: '0px' }}>
                <Switch isChecked={params.value} classStyle={'AFLS'} idSwitch={params.sett_key} />
            </div>
        </div>
    )
};
function renderLabel(params, holder) {
    if (params.imagen !== undefined && params.imagen !== null) {
        return (
            <div className={`w-full border border-dotted border-teal-500 ${params.bgColor}`}>
                <div className={`flex flex-wrap items-center ml-48 h-12`}>
                    <div className={params.imagen} />

                    <div className={`pl-1`}>
                        <Label text={params.label}
                            classStyle="AFLS" />
                    </div>
                    <div className={`pl-1`}>
                        <Label text={params.labelDescription}
                            classStyle="AFLSDescription" />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={`w-full`}>
            <Label text={params.label}
                classStyle={params.classStyle} style={params.style} />
        </div>
    )
};
function renderDivLine(params) {
    return (
        <div className={`w-full`} style={{ 'border-bottom': 'solid 1px #D1D2D4', 'border-opacity': 1 }}>

        </div>
    );
};
function renderText(params, holder) {
    var sizeInput = params.size === undefined ? 'w-full' : params.size;
    if (params.Labelposition === 1) {
        if ((params.labelDescription === "undefined" || params.labelDescription === null) && (params.label !== "undefined" && params.label !== null)) {
            return (
                <div className={`w-full`}>
                    <div className={`w-full`}>
                        <Label text={params.label}
                            classStyle="AFLS" />
                    </div>
                    <div className={`w-full pr-1`}>
                        <Input
                            type={params.dataType}
                            maxlength={params.maxlength}
                            name={params.sett_key}
                            id={params.sett_key}
                            disabled={false}
                            classStyle="AFLS"
                            text={params.value}
                            minvalue={params.minvalue === undefined ? 0 : params.minvalue}
                            size={params.size === undefined ? 'w-full' : params.size}>
                        </Input>
                    </div>
                </div>
            );
        }
        if ((params.labelDescription !== "undefined" || params.labelDescription !== null) && (params.label !== "undefined" && params.label !== null)) {
            return (
                <div className={`w-full`}>
                    <div className={`w-full`}>
                        <Label text={params.label}
                            classStyle="AFLS" />
                    </div>
                    <div className={`w-full`}>
                        <Label text={params.labelDescription}
                            classStyle="AFLSDescription" />
                    </div>
                    <div className={`w-full pr-1`}>
                        <Input
                            type={params.dataType}
                            maxlength={params.maxlength}
                            name={params.sett_key}
                            id={params.sett_key}
                            placeholder={holder}
                            disabled={false}
                            classStyle="AFLS"
                            text={params.value}
                            minvalue={params.minvalue === undefined ? 0 : params.minvalue}
                            size={params.size === undefined ? 'w-full' : params.size}>
                        </Input>
                    </div>
                </div>
            );
        }
        return (
            <div className={`w-full pr-1`} style={{ 'margin-top': '-5px' }}>
                <Input
                    type={params.dataType}
                    maxlength={params.maxlength}
                    name={params.sett_key}
                    id={params.sett_key}
                    placeholder={holder}
                    disabled={false}
                    classStyle="AFLS"
                    text={params.value}
                    minvalue={params.minvalue === undefined ? 0 : params.minvalue}
                    size={params.size === undefined ? 'w-full' : params.size}>
                </Input>
            </div>
        );
    }
    return (
        <div className={`w-full`}>
            <div className={`w-6\/12`}>
                <Label text={params.label}
                    classStyle="AFLS" />
            </div>
            <div className={`mr-0 sup w-6\/12 pr-1 relative`} style={{ top: '-22.5px', left: '48%' }}>
                <Input
                    type={params.dataType}
                    maxlength={params.maxlength}
                    name={params.sett_key}
                    id={params.sett_key}
                    placeholder={holder}
                    disabled={false}
                    classStyle="AFLS"
                    text={params.value}
                    minvalue={params.minvalue === undefined ? 0 : params.minvalue}
                    size={params.size === undefined ? 'w-full' : params.size}>
                </Input>
            </div>
        </div>
    );
}
LabelInput.propTypes = {
};
LabelInput.defaultProps = {
};
export default LabelInput;