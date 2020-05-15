/**
 * TableHeader.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React from 'react';
import PropTypes, { shape, oneOf } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const propTypes = {
    isActive: PropTypes.bool,
    title: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }),
    updateSort: PropTypes.func.isRequired
};

const TableHeaderCell = (props) => {
    const clickedSort = (e) => {
        props.updateSort(props.title, e.target.value);
    };

    // highlight the active arrow
    const activeAsc = (props.isActive && props.currentSort.direction === 'asc')
        ? ' table-header__icon_active' : '';
    const activeDesc = (props.isActive && props.currentSort.direction === 'desc')
        ? ' table-header__icon_active' : '';

    return (
        <th className="table-header">
            <div className="table-header__content">
                <div className="table-header__label">
                    {props.displayName}
                </div>
                <div className="table-header__sort">
                    <button
                        onClick={clickedSort}
                        className={`table-header__icon${activeAsc}`}
                        value="asc"
                        title={`Sort table by ascending ${props.displayName}`}
                        aria-label={`Sort table by ascending ${props.displayName}`}>
                        <FontAwesomeIcon size="2x" icon="caret-up" />
                    </button>
                    <button
                        onClick={clickedSort}
                        className={`table-header__icon${activeDesc}`}
                        value="desc"
                        title={`Sort table by descending ${props.displayName}`}
                        aria-label={`Sort table by descending ${props.displayName}`}>
                        <FontAwesomeIcon size="2x" icon="caret-down" />
                    </button>
                </div>
            </div>
        </th>
    );
};

TableHeaderCell.propTypes = propTypes;

export default TableHeaderCell;
