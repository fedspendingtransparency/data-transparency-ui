/**
  * Tabs.jsx
  * Created by Kevin Li 11/29/16
  **/

import React from 'react';
import PropTypes from 'prop-types';
import Picker from '../Picker';
import Tab from './Tab';

require('../../styles/components/_tabs.scss');

const propTypes = {
    types: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired,
    tabsClassName: PropTypes.string
};

const Tabs = ({
    types,
    active,
    switchTab,
    tabsClassName
}) => {
    const tabs = types.map((type) => (
        <Tab
            {...type}
            active={active === type.internal}
            switchTab={switchTab}
            key={`table-type-item-${type.internal}`}
            enabled={!type.disabled}
            className={tabsClassName} />
    ));

    const pickerData = types.map((type) => ({
        name: type.label,
        value: type.internal,
        onClick: switchTab
    }));

    return (
        <>
            <div
                className="table-types"
                role="menu">
                {tabs}
            </div>
            <Picker
                className="table-types-mobile"
                options={pickerData}
                selectedOption={types.find((x) => active === x.internal).label} />
        </>
    );
};

Tabs.propTypes = propTypes;
export default Tabs;
