/**
 * Table.jsx
 * Created by Lizzie Salita 11/17/20
 */

import React from 'react';
import PropTypes, { shape, oneOf, oneOfType } from 'prop-types';
import { uniqueId } from 'lodash';
import ErrorMessage from '../messages/ErrorMessage';
import LoadingMessage from '../messages/LoadingMessage';
import NoResultsMessage from '../messages/NoResultsMessage';
import TableData from './TableData';
import TableHeader from './TableHeader';

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
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

const Table = (props) => {
    let body;
    if (props.loading) {
        body = (
            <tr>
                <td colSpan={props.columns.length}>
                    <LoadingMessage />
                </td>
            </tr>
        );
    }
    else if (props.error) {
        body = (
            <tr>
                <td colSpan={props.columns.length}>
                    <ErrorMessage description={props.message} />
                </td>
            </tr>
        );
    }
    else if (!props.rows || props.rows.length === 0) {
        body = (
            <tr>
                <td colSpan={props.columns.length}>
                    <NoResultsMessage description={props.message} />
                </td>
            </tr>
        );
    }
    else {
        body = (<TableData {...props} />);
    }
    return (
        <table className={`usda-table ${props.classNames}`}>
            <thead className="usda-table__head">
                <tr className="usda-table__row">
                    {props.columns.map((col) => (
                        <TableHeader
                            key={uniqueId()}
                            currentSort={props.currentSort}
                            updateSort={props.updateSort}
                            {...col} />
                    ))}
                </tr>
                <tr className="usda-table__row">
                    {props.columns
                        .filter((col) => col?.subColumnNames?.length)
                        .reduce((acc, col) => {
                            if (col?.subColumnNames?.length) {
                                return acc.concat(col.subColumnNames);
                            }
                            return acc.concat([{ ...col, displayName: '', className: 'empty-subheader' }]);
                        }, [])
                        .map((col) => (
                            <TableHeader
                                key={uniqueId()}
                                className={col?.title ? 'nested-header' : 'empty'}
                                currentSort={props.currentSort}
                                updateSort={props.updateSort}
                                {...col} />
                        ))
                    }
                </tr>
            </thead>
            <tbody className="usda-table__body">
                {body}
            </tbody>
        </table>
    );
};


Table.propTypes = propTypes;
export default Table;
