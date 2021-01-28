import React from 'react';
import PropTypes from 'prop-types';
import DynamicComponent from '../DynamicComponent/DynamicComponent';
import ShowPanelCheck from '../ShowPanelCheck/ShowPanelCheck';
import RadioButtonPanel from '../RadioButtonPanel/RadioButtonPanel';
import CheckerList from '../CheckerList/CheckerList';
import Image from '../Image/Image';
const Tab = ({ listTabs, disabled, name, id, icon, color, classLogo, classStyle, onClick, ...props }) => {
    const [openTab, setOpenTab] = React.useState(0);
    var classCss = "";
    switch (classStyle) {
        case "AFLS":
            classCss = "text-teal-500  divide-primary border-b-2 bg-" + color + "-500";
            break;
        default:
            classCss = "text-primary  divide-primary border-b-2 bg-" + color + "-600";
    }
    return (
        <div className="flex flex-wrap h-full">
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-2 pb-0 flex-row"
                    role="tablist"
                >
                    {listTabs.map(element => <li className="-mb-px last:mr-0 flex-auto text-center"
                    ><a
                        className={
                            "text-sm  shadow-lg rounded block leading-normal h-8 mt-1 " +
                            (openTab === element.index
                                ? classCss
                                : "text-secondary-600 bg-white")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(element.index);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    ><div className={"mt-1 " + (openTab === element.index
                        ? element.classLogo : element.classLogo + "-noSelect")} /><i className="fas ic_user_owner text-base mr-1"></i>{element.title}</a></li>
                    )}
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-pattensBlue bg-opacity-25 w-full h-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-4 flex-auto">
                        <div className="tab-content tab-space">
                            <div id="contenidopestanas">
                                {listTabs.map(element =>
                                    <div className={openTab === element.index ? "block" : "hidden"} id="link1">
                                        {element.components.map(divcomp => {
                                            if (divcomp.componente === 'dynamicComponent') {
                                                return <div>
                                                    <DynamicComponent params={divcomp.params} backcolor={divcomp.backcolor} />
                                                </div>
                                            }
                                            if (divcomp.componente === 'showPanelCheck') {
                                                return <div>
                                                    <ShowPanelCheck params={divcomp.params} isChecked={divcomp.isChecked} textLabel={divcomp.textLabel} idCheck={divcomp.idCheck} classStyle={'AFLS'} />
                                                </div>
                                            }
                                            if (divcomp.componente === 'radioButtonPanel') {
                                                return <div>
                                                    <RadioButtonPanel listRadios={divcomp.params} classStyle={'AFLS'} defaultOpen={divcomp.defaultOpen} backcolor={divcomp.backcolor} />
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
            </div>
        </div>
    );
};
Tab.propTypes = {
    listTabs: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
};
Tab.defaultProps = {
    listTabs: {},
    disabled: false,
    name: '',
    id: '',
    icon: 'fa-space-shuttle',
    color: 'secondary'
};
export default Tab;