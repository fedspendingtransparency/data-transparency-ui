/**
 * LimitSelector.jsx
 * Created by Alisa Burdeyny 11/15/19
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    changeLimit: PropTypes.func.isRequired,
    pageSize: PropTypes.number,
    limitList: PropTypes.arrayOf(PropTypes.number),
    label: PropTypes.string
};

const LimitSelector = ({
    changeLimit: changeLimitProp,
    pageSize = 10,
    limitList = [10, 25, 50, 100],
    label: labelProp
}) => {
    const changeLimit = (e) => {
        e.preventDefault();
        const targetId = parseInt(e.target.value, 10);
        changeLimitProp(targetId);
    };

    const label = labelProp || 'Rows per page: ';
    const list = limitList.map((limit) => (
        <option key={`limit-${limit}`} value={limit}>
            {limit}
        </option>
    ));

    return (
        <div className="usa-dt-pagination__limit-selector__wrapper">
            <label>
                {label}
            </label>
            <select
                onChange={changeLimit}
                value={pageSize}
                className="usa-dt-pagination__limit-selector"
                aria-label="limit-dropdown">
                {list}
            </select>
        </div>
    );
};

LimitSelector.propTypes = propTypes;

export default LimitSelector;
