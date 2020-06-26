/**
 * Pagination.jsx
 * Created by Lizzie Salita 10/16/17
 */

import React from 'react';
import PropTypes from 'prop-types';

import { formatNumberWithPrecision } from '../../helpers/moneyFormatter';
import { calculatePageRange } from '../../helpers/paginationHelper';

import Pager from './Pager';
import LimitSelector from './LimitSelector';
import GoToPage from './GoToPage';

const propTypes = {
    changePage: PropTypes.func.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    resultsText: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    limitSelector: PropTypes.bool,
    changeLimit: PropTypes.func,
    goToPage: PropTypes.bool,
    id: PropTypes.string
};

const defaultProps = {
    currentPage: 1,
    pageSize: 10,
    resultsText: false,
    customResultsText: null,
    limitSelector: false,
    changeLimit: () => {},
    goToPage: false
};

require('../../styles/components/pagination/_pagination.scss');

export default class Pagination extends React.Component {
    getResultsText() {
        const {
            resultsText,
            totalItems,
            currentPage,
            pageSize
        } = this.props;

        if (React.isValidElement(resultsText)) {
            return resultsText;
        }
        else if (resultsText) {
            const pageRange = calculatePageRange(currentPage, pageSize, totalItems);
            const start = formatNumberWithPrecision(pageRange.start, 0);
            const end = formatNumberWithPrecision(pageRange.end, 0);
            const total = formatNumberWithPrecision(totalItems, 0);
            return (
                <div className="usa-dt-pagination__totals">
                    {`${start}-${end} of ${total} results`}
                </div>
            );
        }
        return null;
    }

    render() {
        const {
            limitSelector,
            goToPage,
            changePage,
            changeLimit,
            currentPage,
            pageSize,
            totalItems,
            id
        } = this.props;

        const totalPages = Math.ceil(totalItems / pageSize);

        const description = this.getResultsText();

        const limitSelect = limitSelector ? (
            <LimitSelector
                changeLimit={changeLimit}
                pageSize={pageSize} />
        ) : null;

        const goTo = goToPage ? (
            <GoToPage
                changePage={changePage}
                totalPages={totalPages}
                id={id} />
        ) : null;

        if (!limitSelector && totalPages <= 1) {
            // don't display pager if there is only 1 page
            // except when the limit selector is present
            return null;
        }

        return (
            <div className="usa-dt-pagination">
                {description}
                <div className="usa-dt-pagination__wrapper">
                    {limitSelect}
                    <Pager
                        changePage={changePage}
                        totalItems={totalItems}
                        currentPage={currentPage}
                        pageSize={pageSize} />
                    {goTo}
                </div>
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
