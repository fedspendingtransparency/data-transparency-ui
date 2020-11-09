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

const getNumberOfColumnsIncludingSubColumns = (cols) => cols
    .reduce((acc, col) => {
        if (col?.columnSpan && col?.columnSpan !== "1") {
            return acc + parseInt(col.columnSpan, 10);
        }
        return acc + 1;
    }, 0);

/**
 * getCellTrangeForColumns
 * @param {Array} columns: the columns for the table
 * @returns {Array}: an array that includes a new property on the objects called "range" which represents
 * the range of cells in a given row are technically under it.
 */
const getCellRangeForColumns = (columns) => columns
    .map((obj, i) => ({ ...obj, index: i }))
    .filter((col) => parseInt(col?.columnSpan, 10) > 1)
    .map((col) => {
        if (col?.columnSpan) {
            return {
                ...col,
                range: new Array(parseInt(col.columnSpan, 10))
                    .fill(parseInt(col.columnSpan, 10))
                    .map((int, i) => int + i)
            };
        }
        return col;
    });

const getCellWidth = (columns, cellIndex) => {
    const columnsSpanningMultipleCells = getCellRangeForColumns(columns);
    if (columnsSpanningMultipleCells.length) {
        const parentColumn = columnsSpanningMultipleCells.find((col) => col.range.includes(cellIndex));
        if (parentColumn) {
            return `${((1 / getNumberOfColumnsIncludingSubColumns(columns)) / parentColumn.subColumnNames.length) * 100}%`;
        }
    }
    return 'auto';
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
                                style={{ width: getCellWidth(columns, j) }}
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

