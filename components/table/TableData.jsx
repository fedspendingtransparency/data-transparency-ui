/**
 * TableData.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { uniqueId } from 'lodash';
import ExpandableRow from './ExpandableRow';
import TableHeader from './TableHeader';

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(oneOfType([PropTypes.array, PropTypes.object])).isRequired,
    expandable: PropTypes.bool,
    divider: PropTypes.string,
    onClickHandler: PropTypes.string
};

const TableData = ({
    columns,
    rows,
    expandable,
    divider,
    onClickHandler
}) => {
    return (
    <>
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
                    onClick={() => onClickHandler(row)}
                    className={`usda-table__row-item usda-table__row${oddClass}`}>
                    {row.map((data, j) => (
                        columns[j]?.bodyHeader ?
                            <TableHeader
                                className="table-header_body-header"
                                key={uniqueId()}
                                {...data} />
                            :
                            <td
                                key={uniqueId()}
                                className={`usda-table__cell${columns[j]?.right ? ' usda-table__cell_right' : ''}`}
                                data-label={columns[j] ? columns[j].displayName : null}>
                                {data}
                            </td>
                    ))}
                </tr>
            );
        })}
    </>
)};

TableData.propTypes = propTypes;
export default TableData;

