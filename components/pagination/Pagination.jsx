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
    id: PropTypes.string,
    hideLast: PropTypes.bool
};

require('../../styles/components/pagination/_pagination.scss');

const Pagination = ({
    changePage,
    totalItems,
    currentPage = 1,
    pageSize = 10,
    resultsText = false,
    limitSelector = false,
    changeLimit = () => {},
    goToPage = false,
    id,
    hideLast = false
}) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const getResultsText = () => {
        if (React.isValidElement(resultsText)) {
            return resultsText;
        }
        if (resultsText) {
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
    };

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
            {getResultsText()}
            <div className="usa-dt-pagination__wrapper">
                {limitSelect}
                <Pager
                    changePage={changePage}
                    totalItems={totalItems}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    hideLast={hideLast} />
                {goTo}
            </div>
        </div>
    );
};

Pagination.propTypes = propTypes;
export default Pagination;
