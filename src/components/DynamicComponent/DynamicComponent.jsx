import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput';
const DynamicComponent = ({ params, backcolor, ...props }) => {
    var antparam = '';
    var antparam2 = '';
    var numparams = params.length;
    var contparams = 0;
    return (
        <div className={`w-full pt-1 ${backcolor}`}>
            {params.map(element => {
                contparams = ++contparams;
                /*Elementos que requieren toda la fila*/
                if (element.colsRequire === 1) {
                    if (antparam.length === 0) {
                        return <div className={`w-full py-1`}>
                            <LabelInput params={element} />
                        </div>
                    } else {
                        antparam2 = antparam;
                        antparam = '';
                        return (
                            <div>
                                <div className={`w-full relative py-1`}>
                                    <div className={`w-6\/12 h-full`}>
                                        <LabelInput params={antparam2} />
                                    </div>
                                    <div className={`mr-0 sup w-6\/12 h-full pt-1 absolute`} style={{ top: '0px', right: '-10px' }}>

                                    </div>
                                </div>
                                <div className={`w-full pt-1`}>
                                    <LabelInput params={element} />
                                </div>
                            </div>);
                    }
                } else {
                    if (antparam.length === 0 && contparams !== numparams) {
                        antparam = { element };
                    } else {
                        if (antparam.length !== 0) {
                            antparam = "";
                            antparam2 = params[contparams - 2];
                            return (<div className={`w-full py-1 relative`}>
                                <div className={`w-6\/12 h-full`}>
                                    <LabelInput params={antparam2} />
                                </div>
                                <div className={`mr-0 sup w-6\/12 h-full pt-1 absolute`} style={{ top: '0px', right: '-10px' }}>
                                    <LabelInput params={element} />
                                </div>
                            </div>);
                        } else {
                            antparam = "";
                            return (<div className={`w-full py-1 relative`}>
                                <div className={`w-6\/12 h-full`}>
                                    <LabelInput params={element} />
                                </div>
                                <div className={`mr-0 sup w-6\/12 pt-1 absolute`} style={{ top: '0px', right: '-10px' }}>
                                </div>
                            </div>);
                        }
                    }
                }
            })
            }
        </div>
    );
};

DynamicComponent.propTypes = {
    params: PropTypes.array.isRequired
};
DynamicComponent.defaultProps = {
    paramets:
        [{
            "Labelposition": 1,
            "colsRequire": 1,
            "dataType": "text",
            "idGroup": "principal",
            "label": "Nombre",
            "labelDescription": 'Esta es la descripcion del nombre',
            "options": {},
            "orderTab": 1,
            "sett_key": "name",
            "value": "Elkin salamanca",
            "holder": "escriba su nombre",
            "maxlength": 50
        }, {
            "Labelposition": 1,
            "colsRequire": 2,
            "dataType": "text",
            "idGroup": "principal",
            "label": "Domain",
            "labelDescription": null,
            "options": {},
            "orderTab": 2,
            "sett_key": "name",
            "value": "INTERSEQ",
            "holder": "Dominio",
            "maxlength": 20
        }, {
            "Labelposition": 1,
            "colsRequire": 2,
            "dataType": "text",
            "idGroup": "principal",
            "label": "Ip de host",
            "labelDescription": null,
            "options": {},
            "orderTab": 3,
            "sett_key": "name",
            "value": "192.168.0.1",
            "holder": "IP",
            "maxlength": 20
        }]
};
export default DynamicComponent;