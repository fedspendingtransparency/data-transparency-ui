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
    stickyFirstColumn: PropTypes.bool
};

const defaultProps = {
    classNames: '',
    isStacked: false,
    stickyFirstColumn: false
};

const Table = (props) => {
    const stackedClass = props.isStacked ? `usa-dt-table__stacked` : '';
    const getTablePickerOptionsAsc = props.columns.map((col) => ({
        name: col.displayName + ' ' + '(ascending)',
        value: col.title,
        onClick: () => {
            props.updateSort(col.title, 'asc');
        }
    }));
    const getTablePickerOptionsDesc = props.columns.map((col) => ({
        name: col.displayName + ' ' + '(descending)',
        value: col.title,
        onClick: () => {
            props.updateSort(col.title, 'desc');
        }
    }));
    let body;
    if (props.loading) {
        body = (
            <tr>
                <td className="usda-table__message-cell" colSpan={props.columns.length}>
                    <LoadingMessage />
                </td>
            </tr>
        );
    }
    else if (props.error) {
        body = (
            <tr>
                <td className="usda-table__message-cell" colSpan={props.columns.length}>
                    <ErrorMessage description={props.message} />
                </td>
            </tr>
        );
    }
    else if (!props.rows || props.rows.length === 0) {
        body = (
            <tr>
                <td className="usda-table__message-cell" colSpan={props.columns.length}>
                    <NoResultsMessage description={props.message} />
                </td>
            </tr>
        );
    }
    else {
        body = (<TableData {...props} />);
    }
    return (
        <>
            {props.isStacked && props.updateSort && (
                <div className="usa-dt-table__stacked-picker">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="stackedTableSort">Sort By</label>
                    <Picker
                        id="stackedTableSort"
                        selectedOption={props.currentSort.field}
                        options={union(getTablePickerOptionsAsc, getTablePickerOptionsDesc)} />
                </div>
            )}
            <table className={`usda-table ${stackedClass} ${props.classNames}`}>
                {props.screenReaderCaption && (
                    <caption className="usa-dt-sr-only">{props.screenReaderCaption}</caption>
                )}
                <thead className="usda-table__head">
                    <tr className="usda-table__row">
                        {props.columns.map((col, index) => (
                            <TableHeader
                                key={uniqueId()}
                                currentSort={props.currentSort}
                                updateSort={props.updateSort}
                                stickyFirstColumn={props.stickyFirstColumn}
                                {...col}
                                index={index} />
                        ))}
                    </tr>
                    <tr className="usda-table__row">
                        {props.columns
                            .filter((col) => col?.subColumnNames?.length)
                            .reduce((acc, col) => {
                                if (col?.subColumnNames?.length) {
                                    return acc.concat(col.subColumnNames);
                                }
                                return acc.concat([{ ...col, displayName: '', className: 'empty-subheader' }]);
                            }, [])
                            .map((col, index) => (
                                <TableHeader
                                    key={uniqueId()}
                                    className={col?.title ? 'nested-header' : 'empty'}
                                    currentSort={props.currentSort}
                                    updateSort={props.updateSort}
                                    stickyFirstColumn={props.stickyFirstColumn}
                                    {...col}
                                    index={index} />
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
Table.defaultProps = defaultProps;
export default Table;
