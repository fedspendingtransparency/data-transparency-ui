/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/**
 * MobileRowSlider.jsx
 * Created by Nick Torres 5/14/2025
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import TableHeader from './TableHeader';

const propTypes = {
    row: PropTypes.array,
    columns: PropTypes.array,
    iValue: PropTypes.number,
    firstClick: PropTypes.bool,
    rowIndexForMessage: PropTypes.number
};
const MobileRowSlider = (props) => {
    const [rowOpen, setRowOpen] = useState(false);
    const toReturn = props.columns.length >= 6
        ? (
            <div className={`collapsible-row-div ${rowOpen ? `row-opened` : ''}`}>
                {rowOpen && (
                    <div className="collapsible-row--content">
                        <div className="collapsible-row--content-wrapper">
                            {props.row.map((data, j) => {
                                if (j >= 6) {
                                    return (
                                        props.columns[j]?.bodyHeader
                                            ? (
                                                <TableHeader
                                                    className="table-header_body-header"
                                                    key={uniqueId()}
                                                    stickyFirstColumn={props.stickyFirstColumn}
                                                    index={j}
                                                    {...data} />
                                            )
                                            : (
                                                <div
                                                    key={uniqueId()}
                                                    className={`usda-table__cell${props.columns[j]?.right ? ' usda-table__cell_right' : ''}
                                    ${(j === 0 && props.stickyFirstColumn) ? ' stickyColumn' : ''} `}>
                                                    {props.columns[j]
                                            && (
                                                <div className="usda-table__cell-heading-container">
                                                    <div className="usda-table__cell-heading">{props.columns[j].displayName}</div>
                                                    {(props.firstClick && j === 0 && props.rowIndexForMessage === props.iValue)
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
                                                        {data}
                                                    </div>
                                                </div>
                                            )
                                    );
                                }
                            })}
                        </div>
                    </div>
                )}
                <div className="mobile-gradient__wrapper">
                    {/* {!rowOpen && <div id="mobile-row-gradient" />} */}
                    <span
                        className="collapsible-row-button"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setRowOpen(!rowOpen);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                setRowOpen(!rowOpen);
                            }
                        }}>
                        {rowOpen ? 'Collapse additional details' : 'View additional details'}
                        {rowOpen ? (
                            <FontAwesomeIcon className="chevron" icon="chevron-up" />
                        ) : (
                            <FontAwesomeIcon className="chevron" icon="chevron-down" />
                        )}
                    </span>
                </div>
            </div>
        ) : null;
    return toReturn;
};
MobileRowSlider.propTypes = propTypes;
export default MobileRowSlider;
