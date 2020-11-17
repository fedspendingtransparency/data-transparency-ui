/**
 * Table.jsx
 * Created by Lizzie Salita 11/17/20
 */

import React from 'react';
import PropTypes, { shape, oneOf, oneOfType } from 'prop-types';
import TableContent from './TableContent';

require('../../styles/components/table/_table.scss');

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(oneOfType([PropTypes.array, PropTypes.object])),
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }),
    classNames: PropTypes.string,
    updateSort: PropTypes.func,
    expandable: PropTypes.bool,
    divider: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.oneOf([PropTypes.string, PropTypes.object])
};

const Table = (props) => {
    if (props.loading) {
        return (
            <div>Loading...</div>
        );
    }
    else if (props.error) {
        return (
            <div>Error!</div>
        );
    }
    else if (!props.rows || props.rows.length === 0) {
        return (
            <div>No results.</div>
        );
    }
    return (
        <TableContent {...props} />
    );
};


Table.propTypes = propTypes;
export default Table;
