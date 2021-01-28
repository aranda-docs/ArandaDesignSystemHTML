import React from 'react';
import PropTypes from 'prop-types';
import CheckList from '../CheckList/CheckList';
const CheckerList = ({ params, disabled, name, id, color, ...props }) => {
    return (
        <div className="w-full py-1">
            <div className='w-full'>
                {params.map(element => {
                    if (params.Labelposition === 1) {
                        return (
                            <CheckList idCheck={element.sett_key} isChecked={element.value} alingtext='left' text={element.label} />
                        );
                    } else {
                        return (
                            <CheckList idCheck={element.sett_key} isChecked={element.value} alingtext='right' text={element.label} />
                        );
                    }
                }
                )}
            </div>
        </div >
    );
};
CheckerList.propTypes = {
    listChecker: PropTypes.array,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.string
};
CheckerList.defaultProps = {
    listChecker: {},
    disabled: false,
    name: '',
    id: '',
    color: 'secondary'
};
export default CheckerList;