/**
 * Table.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React from 'react';
import PropTypes, { shape, oneOf, oneOfType } from 'prop-types';
import { uniqueId } from 'lodash';
import TableHeader from './TableHeader';
import ExpandableRow from './ExpandableRow';

require('../../styles/components/table/_table.scss');

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(oneOfType([PropTypes.array, PropTypes.object])).isRequired,
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }),
    classNames: PropTypes.string,
    updateSort: PropTypes.func,
    expandable: PropTypes.bool,
    divider: PropTypes.string
};

const Table = ({
    columns,
    rows,
    currentSort,
    classNames = '',
    updateSort,
    expandable,
    divider
}) => (
    <table className={`usda-table ${classNames}`}>
        <thead className="usda-table__head">
            <tr className="usda-table__row">
                {columns.map((col) => (
                    <TableHeader
                        key={uniqueId()}
                        currentSort={currentSort}
                        updateSort={updateSort}
                        {...col} />
                ))}
            </tr>
            <tr className="usda-table__row">
                {columns
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
                            currentSort={currentSort}
                            updateSort={updateSort}
                            {...col} />
                    ))
                }
            </tr>
        </thead>
        <tbody className="usda-table__body">
            {rows.map((row, i) => {
                // Use a class name for alternating gray/white rows
                // because child rows should match their parent
                const oddClass = i % 2 === 0 ? '' : ' usda-table__row_odd';
                if (expandable) {
                    return (
                        <ExpandableRow
                            key={uniqueId()}
                            data={row}
                            oddClass={oddClass}
                            columns={columns}
                            divider={divider} />
                    );
                }
                return (
                    <tr
                        key={uniqueId()}
                        className={`usda-table__row${oddClass}`}>
                        {row.map((data, j) => (
                            <td
                                key={uniqueId()}
                                className={`usda-table__cell${columns[j]?.right ? ' usda-table__cell_right' : ''}`}>
                                {data}
                            </td>
                        ))}
                    </tr>
                );
            })}
        </tbody>
    </table>
);

Table.propTypes = propTypes;
export default Table;

