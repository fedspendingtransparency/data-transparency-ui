/**
  * Tabs.jsx
  * Created by Kevin Li 11/29/16
  **/

import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

require('../../styles/components/_tabs.scss');

const propTypes = {
    types: PropTypes.array,
    counts: PropTypes.object,
    active: PropTypes.string,
    switchTab: PropTypes.func,
    disabled: PropTypes.bool,
    hideCounts: PropTypes.bool,
    tabsClassName: PropTypes.string
};

const Tabs = ({
    types,
    counts,
    active,
    switchTab,
    disabled,
    hideCounts,
    tabsClassName
}) => {
    const tabs = types.map((type) => {
        const count = hideCounts ? null : counts[type.internal];
        return (
            <Tab
                {...type}
                count={count}
                active={active === type.internal}
                switchTab={switchTab}
                key={`table-type-item-${type.internal}`}
                enabled={!disabled}
                hideCounts={hideCounts}
                className={tabsClassName} />
        );
    });

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
