/**
 * LimitSelector.jsx
 * Created by Alisa Burdeyny 11/15/19
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    changeLimit: PropTypes.func.isRequired,
    pageSize: PropTypes.number,
    limitList: PropTypes.array
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
        const { limitList, pageSize } = this.props;
        const list = limitList.map((limit) => (
            <option key={`limit-${limit}`} value={limit}>
                {limit}
            </option>
        ));
        return (
            <select
                onChange={this.changeLimit}
                value={pageSize}
                className="table-limit-selector"
                aria-label="limit-dropdown">
                {list}
            </select>
        );
    }
}

LimitSelector.propTypes = propTypes;
LimitSelector.defaultProps = defaultProps;
