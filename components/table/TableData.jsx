/**
 * TableData.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React, { useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { uniqueId } from 'lodash';
import ExpandableRow from './ExpandableRow';
import TableHeader from './TableHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(oneOfType([PropTypes.array, PropTypes.object])).isRequired,
    expandable: PropTypes.bool,
    divider: PropTypes.string,
    onClickHandler: PropTypes.string,
    isMobile: PropTypes.bool
};

const TableData = ({
    columns,
    rows,
    expandable,
    divider,
    onClickHandler,
    isMobile
}) => {
    const [firstClick, setFirstClick] = useState(false);
    const [rowIndexForMessage, setRowIndexForMessage] = useState();
    const localClickHandler = (row, index) => {
        // user taps a row in mobile
        if (isMobile && !firstClick) {
            setFirstClick(true);
            setRowIndexForMessage(index);
        }
        // user taps the same row again, go to next level
        else if (isMobile && firstClick && rowIndexForMessage === index) {
            onClickHandler(row);
            setFirstClick(false);
        }
        // user taps a row after already tapping a different row first
        else if (isMobile && firstClick && rowIndexForMessage !== index ) {
            setRowIndexForMessage(index);
        }
        // desktop or tablet, just go to next level
        else if (!isMobile) {
            onClickHandler(row);
        }
    }
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
                    tabIndex={0}
                    onClick={() => localClickHandler(row, i)}
                    onKeyPress={() => localClickHandler(row, i)}
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
                                className={`usda-table__cell${columns[j]?.right ? ' usda-table__cell_right' : ''}`}>
                                {columns[j] &&
                                    <div className="usda-table__cell-heading-container">
                                        {isMobile &&
                                            <div className='usda-table__cell-heading'>{columns[j].displayName}</div>
                                        }
                                            {(isMobile && firstClick && j === 0 && rowIndexForMessage === i) &&
                                            <div className="usda-table__cell-message">View next level{' '}
                                            <FontAwesomeIcon icon={faAngleDoubleRight} color='#2378c3'/>
                                        </div>
                                        }
                                    </div>
                                }
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

