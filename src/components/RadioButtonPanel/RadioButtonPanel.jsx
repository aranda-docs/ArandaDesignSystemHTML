import React from 'react';
import PropTypes from 'prop-types';
import DynamicComponent from '../DynamicComponent/DynamicComponent';
import CheckerList from '../DynamicComponent/DynamicComponent';
const RadioButtonPanel = ({ listRadios, disabled, name, id, color, classStyle, backcolor, defaultOpen, ...props }) => {
    const [openTab, setOpenTab] = React.useState(defaultOpen);
    var classCss = "";
    switch (classStyle) {
        case "AFLS":
            classCss = "${openTab==element}  divide-primary border-b-4";
            break;
        default:
            classCss = "text-primary  divide-primary border-b-4";
    }
    return (
        <div className={`w-full h-40 pt-1 ${backcolor}`}>
            <div className='w-full'>
                {listRadios.map(element =>
                    <label className="px-1"
                        style={color && { color }}
                    >
                        <input
                            defaultChecked={openTab === element.index ? true : false}
                            type='radio'
                            value={element.index}
                            onClick={e => {
                                setOpenTab(element.index);
                            }}
                            checked={openTab === element.index}
                            id={element.id}
                            className="mx-1"
                        />
                        {element.label}
                    </label>
                )}
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full h-full mb-6 rounded">
                <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                        <div id="contenidopestanas">
                            {listRadios.map(element =>
                                <div className={openTab === element.index ? "block" : "hidden"} id={'link' + element.id}>
                                    {element.components.map(divcomp => {
                                        if (divcomp.componente === 'dynamicComponent') {
                                            return <div>
                                                <DynamicComponent params={divcomp.params} backcolor={divcomp.backcolor} />
                                            </div>
                                        }
                                        if (divcomp.componente === 'radioButtonPanel') {
                                            return <div>
                                                <RadioButtonPanel listRadios={divcomp.params} defaultOpen={divcomp.defaultOpen} backcolor={divcomp.backcolor} />
                                            </div>
                                        }
                                        if (divcomp.componente === 'checkerList') {
                                            return <div>
                                                <CheckerList params={divcomp.params} />
                                            </div>
                                        }
                                    }
                                    )}
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
RadioButtonPanel.propTypes = {
    listRadios: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.string
};
RadioButtonPanel.defaultProps = {
    listRadios: {},
    disabled: false,
    name: '',
    id: '',
    color: 'secondary'
};
export default RadioButtonPanel;