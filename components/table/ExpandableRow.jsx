/**
 * ExpandableRow.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uniqueId } from 'lodash';

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
    const [expanded, setExpanded] = useState(data.expanded || false);
    const icon = expanded ? 'chevron-down' : 'chevron-right';
    const columnTitles = columns.map(({ title }) => title);
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    // Fill out the divider row with empty cells so the borders display correctly
    const generateDividerCells = () => columns.map((col, i) => (i === 0 ? (
        <td key={uniqueId()} className="usda-table__cell usda-table__cell_child">
            <div className="usda-table__child-cell-content">
                {divider}
            </div>
        </td>
    ) : (
        <td key={uniqueId()} className="usda-table__cell usda-table__cell_child">
            <div className="usda-table__child-cell-content">
                &nbsp;
            </div>
        </td>
    )));

    const dividerRow = (
        <tr className={`usda-table__child-row usda-table__child-row_divider${oddClass}`}>
            {generateDividerCells()}
        </tr>
    );
    return (
        <>
            <tr className={`usda-table__row${oddClass} usda-table__row_expandable`}>
                {columnTitles.map((col, i) => {
                    if (col === 'name' && data.children) {
                        return (
                            <td
                                key={uniqueId()}
                                className="usda-table__cell">
                                <div className="usda-table__expandable-cell-content">
                                    <button
                                        className="usda-table__expand-button"
                                        aria-label="Expand Table Row Button"
                                        onClick={toggleExpand}>
                                        <FontAwesomeIcon icon={icon} size="2x" />
                                    </button>
                                    {data.name}
                                </div>
                            </td>
                        );
                    }
                    return (
                        <td
                            key={uniqueId()}
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
                                key={uniqueId()}
                                className={`usda-table__child-row${lastClass}${oddClass}`}>
                                {columnTitles.map((col, k) => (
                                    <td
                                        key={uniqueId()}
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

