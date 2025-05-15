/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/**
 * MobileRowSlider.jsx
 * Created by Nick Torres 5/14/2025
 */

import React, { useEffect, useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { uniqueId } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import TableHeader from './TableHeader';

const MobileRowSlider = (props) => {
    console.debug(props);
    const [rowOpen, setRowOpen] = useState(false);
    return (
        <div className={`collapsible-row-button ${rowOpen ? `row-opened` : ''}`}>
            <span
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
                <div>
                    {rowOpen ? (
                        <FontAwesomeIcon className="chevron" icon="chevron-up" />
                    ) : (
                        <FontAwesomeIcon className="chevron" icon="chevron-down" />
                    )}
                </div>
            </span>
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
                                            <td
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
                                                    {data.type === 'a' && j === 0
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
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileRowSlider;
