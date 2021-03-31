/**
  * Tabs.jsx
  * Created by Kevin Li 11/29/16
  **/

import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

require('../../styles/components/_tabs.scss');

const propTypes = {
    types: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        internal: PropTypes.string.isRequired,
        count: PropTypes.number,
        disabled: PropTypes.bool,
        tooltip: PropTypes.element,
        count: PropTypes.number
    })).isRequired,
    active: PropTypes.string.isRequired,
    switchTab: PropTypes.func.isRequired,
    tabsClassName: PropTypes.string,
    tablessStyle: PropTypes.bool
};

const Tabs = ({
    types,
    active,
    switchTab,
    tabsClassName,
    tablessStyle
}) => {
    const tabs = types.map((type) => (
        <Tab
            {...type}
            active={active === type.internal}
            switchTab={switchTab}
            key={`table-type-item-${type.internal}`}
            enabled={!type.disabled}
            className={tabsClassName}
            tooltip={type.tooltip}
            tablessStyle={tablessStyle} />
    ));
    return (
        <div
            className={`usa-dt-tab-list${tablessStyle ? ' tabless-tabs' : ''}`}
            role="tablist">
            {!tablessStyle && <div className="usa-dt-tab-list__border-pre-filler" />}
                {tabs}
            <div className="usa-dt-tab-list__border-post-filler" />
        </div>
    );
};

Tabs.propTypes = propTypes;
export default Tabs;
