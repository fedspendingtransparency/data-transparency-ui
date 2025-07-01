/**
 * Table.jsx
 * Created by Lizzie Salita 11/17/20
 */

import React from 'react';
import PropTypes, { shape, oneOf, oneOfType } from 'prop-types';
import { uniqueId, union } from 'lodash';
import ErrorMessage from '../messages/ErrorMessage';
import LoadingMessage from '../messages/LoadingMessage';
import NoResultsMessage from '../messages/NoResultsMessage';
import TableData from './TableData';
import TableHeader from './TableHeader';
import Picker from '../Picker';

require('../../styles/components/table/_table.scss');

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.arrayOf(oneOfType([PropTypes.array, PropTypes.object])),
    rowHeight: PropTypes.number,
    headerRowHeight: PropTypes.number,
    currentSort: shape({
        direction: oneOf(['asc', 'desc']),
        field: PropTypes.string
    }),
    classNames: PropTypes.string,
    updateSort: PropTypes.func,
    expandable: PropTypes.bool,
    divider: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isStacked: PropTypes.bool,
    screenReaderCaption: PropTypes.string,
    onClickHandler: PropTypes.func,
    isMobile: PropTypes.bool,
    stickyFirstColumn: PropTypes.bool,
    highlightedColumns: PropTypes.object,
    atMaxLevel: PropTypes.bool,
    newMobileView: PropTypes.bool
};

const Table = ({
    columns,
    rows,
    rowHeight,
    headerRowHeight,
    currentSort,
    classNames = '',
    updateSort,
    expandable,
    divider,
    loading,
    error,
    message,
    isStacked = false,
    screenReaderCaption,
    onClickHandler,
    isMobile,
    stickyFirstColumn = false,
    highlightedColumns,
    atMaxLevel = false,
    newMobileView = false
}) => {
    const stackedClass = isStacked ? `usa-dt-table__stacked` : '';
    const getTablePickerOptionsAsc = columns.map((col) => ({
        name: col.displayName + ' ' + '(ascending)',
        value: col.title,
        onClick: () => {
            updateSort(col.title, 'asc');
        }
    }));
    const getTablePickerOptionsDesc = columns.map((col) => ({
        name: col.displayName + ' ' + '(descending)',
        value: col.title,
        onClick: () => {
            updateSort(col.title, 'desc');
        }
    }));
    let body;

    if (loading) {
        body = (
            <tr>
                <td className="usda-table__message-cell" colSpan={columns.length}>
                    <LoadingMessage />
                </td>
            </tr>
        );
    }
    else if (error) {
        body = (
            <tr>
                <td className="usda-table__message-cell" colSpan={columns.length}>
                    <ErrorMessage description={message} />
                </td>
            </tr>
        );
    }
    else if (!rows || rows.length === 0) {
        body = (
            <tr>
                <td className="usda-table__message-cell" colSpan={columns.length}>
                    <NoResultsMessage description={message} />
                </td>
            </tr>
        );
    }
    else {
        body = (
            <TableData
                columns={columns}
                rows={rows}
                rowHeight={rowHeight}
                expandable={expandable}
                divider={divider}
                onClickHandler={onClickHandler}
                isMobile={isMobile}
                stickyFirstColumn={stickyFirstColumn}
                highlightedColumns={highlightedColumns}
                isStacked={isStacked}
                atMaxLevel={atMaxLevel}
                newMobileView={newMobileView} />
        );
    }

    return (
        <>
            {isStacked && updateSort && (
                <div className="usa-dt-table__stacked-picker">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="stackedTableSort">Sort By</label>
                    <Picker
                        id="stackedTableSort"
                        selectedOption={currentSort.field}
                        options={union(getTablePickerOptionsAsc, getTablePickerOptionsDesc)} />
                </div>
            )}
            <table className={`usda-table ${stackedClass} ${classNames}`}>
                {screenReaderCaption && (
                    <caption className="usa-dt-sr-only">{screenReaderCaption}</caption>
                )}
                {highlightedColumns
                && (
                    <colgroup>
                        <col span={highlightedColumns.standardColumns} />
                        <col span={highlightedColumns.highlightedColumns} className="usda-table__body-special-color" />
                    </colgroup>
                )}
                <thead className="usda-table__head">
                    <tr className="usda-table__row" style={{ height: headerRowHeight }}>
                        {columns.map((col, index) => (
                            <TableHeader
                                key={uniqueId()}
                                currentSort={currentSort}
                                updateSort={updateSort}
                                stickyFirstColumn={stickyFirstColumn}
                                highlightedColumns={highlightedColumns}
                                index={index}
                                {...col} />
                        ))}
                    </tr>
                    <tr className="usda-table__row">
                        {columns
                            .filter((col) => col?.subColumnNames?.length)
                            .reduce((acc, col) => {
                                if (col?.subColumnNames?.length) {
                                    return acc.concat(col.subColumnNames);
                                }
                                return acc.concat([{
                                    ...col, displayName: '', className: 'empty-subheader'
                                }]);
                            }, [])
                            .map((col, index) => (
                                <TableHeader
                                    key={uniqueId()}
                                    className={col?.title ? 'nested-header' : 'empty'}
                                    currentSort={currentSort}
                                    updateSort={updateSort}
                                    stickyFirstColumn={stickyFirstColumn}
                                    index={index}
                                    {...col} />
                            ))}
                    </tr>
                </thead>
                <tbody className="usda-table__body">
                    {body}
                </tbody>
            </table>
        </>
    );
};

Table.propTypes = propTypes;
export default Table;
