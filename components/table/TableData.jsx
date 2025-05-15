/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/**
 * TableData.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React, { useEffect, useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { uniqueId } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ExpandableRow from './ExpandableRow';
import TableHeader from './TableHeader';
import MobileRowSlider from './MobileRowSlider';

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(oneOfType([PropTypes.array, PropTypes.object])).isRequired,
    rowHeight: PropTypes.number,
    expandable: PropTypes.bool,
    divider: PropTypes.string,
    onClickHandler: PropTypes.func,
    isMobile: PropTypes.bool,
    atMaxLevel: PropTypes.bool,
    stickyFirstColumn: PropTypes.bool,
    highlightedColumns: PropTypes.object,
    isStacked: PropTypes.bool,
    newMobileView: PropTypes.bool
};

const TableData = ({
    columns,
    rows,
    rowHeight,
    expandable,
    divider,
    onClickHandler,
    isMobile,
    atMaxLevel,
    stickyFirstColumn = false,
    highlightedColumns,
    isStacked,
    newMobileView = false
}) => {
    const [firstClick, setFirstClick] = useState(false);
    const [rowIndexForMessage, setRowIndexForMessage] = useState();
    console.debug("new mobile view: ", newMobileView);
    const setFocus = () => {
        const selectedElement = document.querySelector(".selected-row");
        if (selectedElement) {
            selectedElement.focus();
        }
    };

    const localClickHandler = (row, index) => {
        if (!atMaxLevel) {
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
            else if (isMobile && firstClick && rowIndexForMessage !== index) {
                setRowIndexForMessage(index);
            }
            // desktop or tablet, just go to next level
            else if (!isMobile) {
                onClickHandler(row);
            }
        }
    };

    useEffect(() => {
        setFocus();
    }, [rowIndexForMessage]);

    if (isStacked && isMobile && newMobileView && !expandable) {
        // return (
        //     <>
        //         {rows.map((row, i) => {
        //             // Use a class name for alternating gray/white rows
        //             // because child rows should match their parent
        //             return (
        //                 <tr
        //                     key={uniqueId()}
        //                     tabIndex={0}
        //                     onClick={() => localClickHandler(row, i)}
        //                     onKeyUp={(e) => {
        //                         if (e.key === 'Enter') {
        //                             e.preventDefault();
        //                             localClickHandler(row, i);
        //                         }
        //                     }}
        //                     className={`usda-table__row-item usda-table__row${oddClass} ${rowIndexForMessage === i ? 'selected-row' : ''} ${highlightedColumns ? `special-hover-color-${highlightedColumns.highlightedColumns}` : ''}`}
        //                     style={{ height: rowHeight }}>
        //                     {row.map((data, j) => {
        //                         if (j < 6) {
        //                             return (
        //                                 columns[j]?.bodyHeader
        //                                     ? (
        //                                         <TableHeader
        //                                             className="table-header_body-header"
        //                                             key={uniqueId()}
        //                                             stickyFirstColumn={stickyFirstColumn}
        //                                             index={j}
        //                                             {...data} />
        //                                     )
        //                                     : (
        //                                         <td
        //                                             key={uniqueId()}
        //                                             className={`usda-table__cell${columns[j]?.right ? ' usda-table__cell_right' : ''}
        //                         ${(j === 0 && stickyFirstColumn) ? ' stickyColumn' : ''} `}>
        //                                             {columns[j]
        //                                 && (
        //                                     <div className="usda-table__cell-heading-container">
        //                                         {isMobile
        //                                         && <div className="usda-table__cell-heading">{columns[j].displayName}</div>}
        //                                         {(isMobile && firstClick && j === 0 && rowIndexForMessage === i)
        //                                         && (
        //                                             <div className="usda-table__cell-message">
        //                                                 View next level
        //                                                 {' '}
        //                                                 <FontAwesomeIcon icon={faAngleDoubleRight} color="#2378c3" />
        //                                             </div>
        //                                         )}
        //                                     </div>
        //                                 )}
        //                                             <div>
        //                                                 {data.type === 'a' && j === 0 && isStacked && isMobile
        //                                                     ? (
        //                                                         <a
        //                                                             target={data.props.target}
        //                                                             rel={data.props.rel}
        //                                                             href={data.props.href}
        //                                                             onClick={data.props.onClick}>
        //                                                             {data.props.children}
        //                                                             {' '}
        //                                                             <FontAwesomeIcon icon="arrow-right" />
        //                                                         </a>
        //                                                     )
        //                                                     : data}
        //                                             </div>
        //                                         </td>
        //                                     )
        //                             );
        //                         }
        //                     })}
        //                     <td>
        //                         <MobileRowSlider
        //                             row={row}
        //                             columns={columns}
        //                             iValue={i}
        //                             firstClick={firstClick}
        //                             rowIndexForMessage={rowIndexForMessage} />
        //                     </td>
        //                 </tr>
        //             );
        //         })}
        //     </>
        // );

        return (
            <div className="mobile-table-rows">
                {rows.map((row, i) => (
                    <div
                        role="button"
                        key={uniqueId()}
                        tabIndex={0}
                        onClick={() => localClickHandler(row, i)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                localClickHandler(row, i);
                            }
                        }}
                        className={`usda-table__row-item usda-table__row ${rowIndexForMessage === i ? 'selected-row' : ''} ${highlightedColumns ? `special-hover-color-${highlightedColumns.highlightedColumns}` : ''}`}
                        style={{ height: rowHeight }}>
                        {row.map((data, j) => {
                            if (j < 6) {
                                return (
                                    columns[j]?.bodyHeader
                                        ? (
                                            <TableHeader
                                                className="table-header_body-header"
                                                key={uniqueId()}
                                                stickyFirstColumn={stickyFirstColumn}
                                                index={j}
                                                {...data} />
                                        )
                                        : (
                                            <div
                                                key={uniqueId()}
                                                className={`usda-table__cell${columns[j]?.right ? ' usda-table__cell_right' : ''}
                                 ${(j === 0 && stickyFirstColumn) ? ' stickyColumn' : ''} `}>
                                                {columns[j]
                                         && (
                                             <div className="usda-table__cell-heading-container">
                                                 {isMobile
                                                 && <div className="usda-table__cell-heading">{columns[j].displayName}</div>}
                                                 {(isMobile && firstClick && j === 0 && rowIndexForMessage === i)
                                                 && (
                                                     <div className="usda-table__cell-message">
                                                         View next level
                                                         {' '}
                                                         <FontAwesomeIcon icon={faAngleDoubleRight} color="#2378c3" />
                                                     </div>
                                                 )}
                                             </div>
                                         )}
                                                <div>
                                                    {data.type === 'a' && j === 0 && isStacked && isMobile
                                                        ? (
                                                            <a
                                                                target={data.props.target}
                                                                rel={data.props.rel}
                                                                href={data.props.href}
                                                                onClick={data.props.onClick}>
                                                                {data.props.children}
                                                                {' '}
                                                                <FontAwesomeIcon icon="arrow-right" />
                                                            </a>
                                                        )
                                                        : data}
                                                </div>
                                            </div>
                                        )
                                );
                            }
                        })}
                        <div>
                            <MobileRowSlider
                                row={row}
                                columns={columns}
                                iValue={i}
                                firstClick={firstClick}
                                rowIndexForMessage={rowIndexForMessage} />
                        </div>
                    </div>
                )
                )}
            </div>
        );
    }
    // normal table data return, do not modify
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
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                localClickHandler(row, i);
                            }
                        }}
                        className={`usda-table__row-item usda-table__row${oddClass} ${rowIndexForMessage === i ? 'selected-row' : ''} ${highlightedColumns ? `special-hover-color-${highlightedColumns.highlightedColumns}` : ''}`}
                        style={{ height: rowHeight }}>
                        {row.map((data, j) => (
                            columns[j]?.bodyHeader
                                ? (
                                    <TableHeader
                                        className="table-header_body-header"
                                        key={uniqueId()}
                                        stickyFirstColumn={stickyFirstColumn}
                                        index={j}
                                        {...data} />
                                )
                                : (
                                    <td
                                        key={uniqueId()}
                                        className={`usda-table__cell${columns[j]?.right ? ' usda-table__cell_right' : ''}
                                ${(j === 0 && stickyFirstColumn) ? ' stickyColumn' : ''} `}>
                                        {columns[j]
                                        && (
                                            <div className="usda-table__cell-heading-container">
                                                {isMobile
                                                && <div className="usda-table__cell-heading">{columns[j].displayName}</div>}
                                                {(isMobile && firstClick && j === 0 && rowIndexForMessage === i)
                                                && (
                                                    <div className="usda-table__cell-message">
                                                        View next level
                                                        {' '}
                                                        <FontAwesomeIcon icon={faAngleDoubleRight} color="#2378c3" />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        <div>
                                            {data.type === 'a' && j === 0 && isStacked && isMobile
                                                ? (
                                                    <a
                                                        target={data.props.target}
                                                        rel={data.props.rel}
                                                        href={data.props.href}
                                                        onClick={data.props.onClick}>
                                                        {data.props.children}
                                                        {' '}
                                                        <FontAwesomeIcon icon="arrow-right" />
                                                    </a>
                                                )
                                                : data}
                                        </div>
                                    </td>
                                )
                        ))}
                    </tr>
                );
            })}
        </>
    );
};

TableData.propTypes = propTypes;
export default TableData;
