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

const defaultProps = {
    pageLimit: 10,
    limitList: [10, 25, 50, 100]
};

export default class LimitSelector extends React.Component {
    constructor(props) {
        super(props);

        this.changeLimit = this.changeLimit.bind(this);
    }

    changeLimit(e) {
        e.preventDefault();
        const targetId = parseInt(e.target.value, 10);
        this.props.changeLimit(targetId);
    }


    render() {
        const label = this.props.label ? this.props.label : 'Rows Per Page: ';
        const { limitList, pageSize } = this.props;
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
                    onChange={this.changeLimit}
                    value={pageSize}
                    className="usa-dt-pagination__limit-selector"
                    aria-label="limit-dropdown">
                    {list}
                </select>
            </div>
        );
    }
}

LimitSelector.propTypes = propTypes;
LimitSelector.defaultProps = defaultProps;
