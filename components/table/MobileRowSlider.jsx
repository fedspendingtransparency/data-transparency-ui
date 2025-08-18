/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/**
 * MobileRowSlider.jsx
 * not a true new component, created to avoid using useState in a .map
 * Created by Nick Torres 5/14/2025
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import TableHeader from './TableHeader';

const propTypes = {
    row: PropTypes.array,
    columns: PropTypes.array,
    iValue: PropTypes.number,
    atMaxLevel: PropTypes.bool
};
const MobileRowSlider = (props) => {
    const [rowOpen, setRowOpen] = useState(false);

    const onClickHandler = (e) => {
        e.stopPropagation();
        setRowOpen(!rowOpen);
    };

    const viewNextLevel = !props.atMaxLevel
        ? (
            <div className="usda-table__cell usda-table__cell_right button-type__text-left-icon-light">
                View next level
                {' '}
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </div>
        ) : null;

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
                                                    {props.columns[j] && (
                                                        <div className="usda-table__cell-heading-container">
                                                            <div className="usda-table__cell-heading">{props.columns[j].displayName}</div>
                                                        </div>
                                                    )}
                                                    <div className="usda-table__cell-text">
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
                    <span
                        className="collapsible-row-button"
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                            onClickHandler(e);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                onClickHandler(e);
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
    return toReturn || viewNextLevel;
};
MobileRowSlider.propTypes = propTypes;
export default MobileRowSlider;
