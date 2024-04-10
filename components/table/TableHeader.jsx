/**
 * TableHeader.jsx
 * Created by Lizzie Salita 5/14/20
 */

import React from 'react';
import PropTypes, { shape, oneOf } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortIcon = ({
    clickedSort,
    displayName,
    currentSort,
    title,
    stickyFirstColumn = false
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
    clickedSort: PropTypes.func.isRequired,
    stickyFirstColumn: PropTypes.bool
};

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
    rowSpan: PropTypes.string,
    subColumnNames: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
    className: PropTypes.string,
    icon: PropTypes.element,
    bodyHeader: PropTypes.bool,
    stickyFirstColumn: PropTypes.bool,
    columnWidth: PropTypes.number
};

const TableHeaderCell = ({
    title,
    className = '',
    displayName = '',
    currentSort,
    updateSort,
    right,
    columnSpan = '1',
    rowSpan,
    subColumnNames = [],
    icon = (<></>),
    bodyHeader = false,
    stickyFirstColumn = false,
    columnWidth
}) => {
    const handleClickedSort = (e, sortOn = title) => {
        updateSort(sortOn, e.target.value);
    };
    const rowsSpan = () => {
        if (rowSpan === '0') {
            return null;
        }
        return subColumnNames.length ? "1" : "2";
    };
    return (
        <th
            className={`${className} table-header${bodyHeader ? ' table-header_body-header' : ''} ${stickyFirstColumn === true ? ' stickyColumn' : ''} `}
            style={{ minWidth: columnWidth }}
            colSpan={columnWidth ? '' : columnSpan}
            rowSpan={rowsSpan()}
            scope="col">
            <div className={`table-header__content${right ? ' table-header__content_right' : ''}`}>
                <div className="table-header__label">
                    {displayName}
                    {icon && icon}
                    {(updateSort && !subColumnNames.length && displayName) && (
                        <SortIcon
                            clickedSort={handleClickedSort}
                            currentSort={currentSort}
                            title={title}
                            displayName={displayName} />
                    )}
                </div>
            </div>
        </th>
    );
};

TableHeaderCell.propTypes = propTypes;

export default TableHeaderCell;
