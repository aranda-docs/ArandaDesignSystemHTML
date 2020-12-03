import React from 'react';
import PropTypes from 'prop-types';
const Tab = ({ listTabs, disabled, name, id,icon, color, onClick, ...props }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-2 pb-0 flex-row"
                    role="tablist"
                >
                    {listTabs.map(element => <li className="-mb-px last:mr-0 flex-auto text-center"
                    ><a
                        className={
                            "text-sm  shadow-lg rounded block leading-normal " +
                            (openTab === element.index
                                ? "text-primary  divide-primary border-b-4 bg-" + color + "-600"
                                : "text-secondary-600 bg-white")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(element.index);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    ><i className="fas ic_user_owner text-base mr-1"></i>{element.title}</a></li>
                    )}
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div id="contenidopestanas">
                                {listTabs.map(element =>
                                    <div className={openTab === element.index ? "block" : "hidden"} id="link1">
                                        <p>{element.text}</p>
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
    icon:PropTypes.string
};
Tab.defaultProps = {
    listTabs: {},
    disabled: false,
    name: '',
    id: '',
    icon:'fa-space-shuttle',
    color:'secondary'
};
export default Tab;