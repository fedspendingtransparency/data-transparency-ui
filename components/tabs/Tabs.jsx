/**
  * Tabs.jsx
  * Created by Kevin Li 11/29/16
  **/

import React from 'react';
import PropTypes from 'prop-types';
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

    return (
        <div
            className="table-types"
            role="menu">
            {tabs}
        </div>
    );
};

Tabs.propTypes = propTypes;
export default Tabs;
