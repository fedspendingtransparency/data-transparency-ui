/**
 * TableHeader.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React from 'react';
import PropTypes, { shape, oneOf } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const propTypes = {
    title: PropTypes.string.isRequired,
    displayName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }),
    updateSort: PropTypes.func,
    right: PropTypes.bool,
    // int as string
    columnSpan: PropTypes.string,
    subColumnNames: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string
};

const SortIcon = ({
    clickedSort,
    displayName,
    currentSort,
    title
}) => {
    // highlight the active arrow
    const activeAsc = (currentSort?.field === title && currentSort?.direction === 'asc')
        ? ' table-header__icon_active' : '';
    const activeDesc = (currentSort?.field === title && currentSort?.direction === 'desc')
        ? ' table-header__icon_active' : '';
    return (
        <div className="table-header__sort">
            <button
                onClick={clickedSort}
                className={`table-header__icon${activeAsc}`}
                value="asc"
                title={`Sort table by ascending ${displayName}`}
                aria-label={`Sort table by ascending ${displayName}`}>
                <FontAwesomeIcon size="2x" icon="caret-up" />
            </button>
            <button
                onClick={clickedSort}
                className={`table-header__icon${activeDesc}`}
                value="desc"
                title={`Sort table by descending ${displayName}`}
                aria-label={`Sort table by descending ${displayName}`}>
                <FontAwesomeIcon size="2x" icon="caret-down" />
            </button>
        </div>
    );
};

SortIcon.propTypes = {
    title: PropTypes.string.isRequired,
    displayName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }).isRequired,
    clickedSort: PropTypes.func.isRequired
};

const TableHeaderCell = ({
    title,
    className = '',
    displayName = '',
    currentSort,
    updateSort,
    right,
    columnSpan = '1',
    subColumnNames = []
}) => {
    const handleClickedSort = (e, sortOn = title) => {
        updateSort(sortOn, e.target.value);
    };

    return (
        <th className={`${className} table-header`} colSpan={columnSpan} rowSpan={subColumnNames.length ? "1" : "2"}>
            <div className={`table-header__content${right ? ' table-header__content_right' : ''}`}>
                <div className="table-header__label">
                    {displayName}
                </div>
                {(updateSort && !subColumnNames.length && displayName) && <SortIcon
                    clickedSort={handleClickedSort}
                    currentSort={currentSort}
                    title={title}
                    displayName={displayName} />
                }
            </div>
        </th>
    );
};

TableHeaderCell.propTypes = propTypes;

export default TableHeaderCell;
