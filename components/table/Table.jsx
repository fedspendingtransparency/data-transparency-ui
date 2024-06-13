/**
 * Table.jsx
 * Created by Lizzie Salita 11/17/20
 */

import React, { useState } from 'react';
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
    subAward: PropTypes.bool,
    checkToAddRightFade: PropTypes.func
};

const defaultProps = {
    classNames: '',
    isStacked: false,
    stickyFirstColumn: false
};

const Table = (props) => {
    const [isScrolledRight, setIsScrolledRight] = useState(false);
    const [isScrolledLeft, setIsScrolledLeft] = useState(true);

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

    const element = document.querySelector(".advanced-search__table-wrapper");
    if (element) {
        element.addEventListener("scroll", (e) => {
            if ((e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft) < 20) {
                setIsScrolledRight(true);
            }
            else {
                setIsScrolledRight(false);
            }

            if (e.target.scrollLeft === 0) {
                setIsScrolledLeft(true);
            }
            else {
                setIsScrolledLeft(false);
            }
        });
    }

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
        body = (<TableData {...props} isScrolledLeft={isScrolledLeft} />);
    }

    props.checkToAddRightFade(isScrolledLeft, isScrolledRight);

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
                {props.subAward
                && (
                    <colgroup>
                        <col span={4} />
                        <col span={4} className="usda-table__body-special-color" />
                    </colgroup>
                )}
                <thead className="usda-table__head">
                    <tr className="usda-table__row" style={{ height: props.headerRowHeight }}>
                        {props.columns.map((col, index) => (
                            <TableHeader
                                key={uniqueId()}
                                currentSort={props.currentSort}
                                updateSort={props.updateSort}
                                stickyFirstColumn={props.stickyFirstColumn}
                                isScrolledLeft={isScrolledLeft}
                                subAward={props.subAward}
                                index={index}
                                {...col} />
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
Table.defaultProps = defaultProps;
export default Table;
