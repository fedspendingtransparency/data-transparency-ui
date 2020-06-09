/**
 * ExpandableRow.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
    data: PropTypes.object,
    columns: PropTypes.array,
    oddClass: PropTypes.string,
    divider: PropTypes.string
};

const ExpandableRow = ({
    data,
    columns,
    oddClass,
    divider
}) => {
    const [expanded, setExpanded] = useState(false);
    const icon = expanded ? 'chevron-down' : 'chevron-right';
    const columnTitles = columns.map(({ title }) => title);
    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    const dividerRow = (
        <tr className={`usda-table__child-row usda-table__child-row_divider${oddClass}`}>
            <td colSpan={columns.length} className="usda-table__cell usda-table__cell_child">
                <div className="usda-table__child-cell-content">
                    {divider}
                </div>
            </td>
        </tr>
    );
    return (
        <>
            <tr className={`usda-table__row${oddClass} usda-table__row_expandable`}>
                {columnTitles.map((col, i) => {
                    if (col === 'name' && data.children) {
                        return (
                            <td
                                key={`${data.name}`}
                                className="usda-table__cell">
                                <button
                                    className="usda-table__expand-button"
                                    onClick={toggleExpand}>
                                    <FontAwesomeIcon icon={icon} size="2x" />
                                </button>
                                {data.name}
                            </td>
                        );
                    }
                    return (
                        <td
                            key={`${col}-${i}`}
                            className={`usda-table__cell${col === 'name' ? ' usda-table__cell_name' : ''}${columns[i].right ? ' usda-table__cell_right' : ''}`}>
                            {data[col]}
                        </td>
                    );
                })}
            </tr>
            {data.children && expanded ? (
                <>
                    {divider && dividerRow}
                    {data.children.map((childRow, j) => {
                        const lastClass = j === data.children.length - 1 ? ' usda-table__child-row_last' : '';
                        return (
                            <tr
                                key={`${data.name}-child-${j}`}
                                className={`usda-table__child-row${lastClass}${oddClass}`}>
                                {columnTitles.map((col, k) => (
                                    <td
                                        key={`${data.name}-row-${j}-col${k}`}
                                        className={`usda-table__cell ${columns[k].right ? ' usda-table__cell_right' : ''} usda-table__cell_child`}>
                                        <div className="usda-table__child-cell-content">
                                            {childRow[col]}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </>
            ) : null}
        </>
    );
};


ExpandableRow.propTypes = propTypes;
export default ExpandableRow;

