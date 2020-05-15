/**
 * Table.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React from 'react';
import PropTypes, { shape, oneOf, oneOfType } from 'prop-types';
import TableHeader from './TableHeader';
import ExpandableRow from './ExpandableRow';

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    rows: oneOfType([PropTypes.array, PropTypes.object]),
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }),
    updateSort: PropTypes.func.isRequired,
    expandable: PropTypes.bool
};

const Table = (props) => (
    <table className="usda-table">
        <thead className="usda-table__head">
            <tr className="usda-table__row">
                {props.columns.map((col) => (
                    <TableHeader
                        key={col.title}
                        currentSort={props.currentSort}
                        updateSort={props.updateSort}
                        isActive={props.currentSort.field === col.title}
                        {...col} />
                ))}
            </tr>
        </thead>
        <tbody className="usda-table__body">
            {props.rows.map((row, i) => {
                // Use a class name for alternating gray/white rows
                // because child rows should match their parent
                const oddClass = i % 2 === 0 ? '' : ' usda-table__row_odd';
                if (props.expandable) {
                    return (
                        <ExpandableRow
                            key={row.name}
                            data={row}
                            oddClass={oddClass}
                            columns={props.columns.map(({ title }) => title)} />
                    );
                }
                return (
                    <tr
                        key={`row-${i}`}
                        className={`usda-table__row${oddClass}`}>
                        {row.map((data, j) => (
                            <td
                                key={`${props.columns[j].title}-${j}`}
                                className="usda-table__cell">
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

