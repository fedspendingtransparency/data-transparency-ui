/**
 * Pagination.jsx
 * Created by Lizzie Salita 10/16/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

import { formatNumberWithPrecision } from '../../helpers/moneyFormatter';
import { calculatePageRange } from '../../helpers/paginationHelper';

import LimitSelector from './LimitSelector';
import GoToPage from './GoToPage';

const propTypes = {
    onChangePage: PropTypes.func.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    resultsText: PropTypes.bool,
    customResultsText: PropTypes.element,
    limitSelector: PropTypes.bool,
    changeLimit: PropTypes.func,
    goToPage: PropTypes.bool
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
    constructor(props) {
        super(props);

        this.getPager = this.getPager.bind(this);
        this.setPage = this.setPage.bind(this);
        this.generatePageButtons = this.generatePageButtons.bind(this);
    }

    getPager() {
        const { totalItems, currentPage, pageSize } = this.props;

        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage;
        let endPage;
        let prevEllipses = (<span className="pager__ellipsis">...</span>);
        let nextEllipses = (<span className="pager__ellipsis">...</span>);
        let firstButton = (
            <li className="pager__item">
                <button
                    className="pager__button"
                    type="button"
                    onClick={() => this.setPage(1)}>
                    {1}
                </button>
            </li>
        );
        let lastButton = (
            <li className="pager__item">
                <button
                    className="pager__button"
                    type="button"
                    onClick={() => this.setPage(totalPages)}>
                    {formatNumberWithPrecision(totalPages, 0)}
                </button>
            </li>
        );
        if (totalPages < 5) {
            // fewer than 5 total pages, so show all
            startPage = 1;
            endPage = totalPages;
            prevEllipses = '';
            nextEllipses = '';
            firstButton = '';
            lastButton = '';
        }
        else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;

            if (currentPage < 4) {
                prevEllipses = '';
                firstButton = '';
                if (currentPage === 1) {
                    startPage = currentPage;
                    endPage = currentPage + 2;
                }
                else if (currentPage === 3) {
                    startPage = 1;
                    endPage = 4;
                }
            }
            else if (currentPage > (totalPages - 3)) {
                nextEllipses = '';
                lastButton = '';
                if (currentPage === totalPages) {
                    startPage = currentPage - 2;
                    endPage = currentPage;
                }
                else if (currentPage === (totalPages - 2)) {
                    startPage = currentPage - 1;
                    endPage = totalPages;
                }
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + (pageSize - 1), (totalItems - 1));

        // create an array of pages to repeat in the pager control
        const pages = range(startPage, endPage + 1);

        // return an object with all pager properties
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages,
            prevEllipses,
            nextEllipses,
            firstButton,
            lastButton
        };
    }

    getResultsText(pager) {
        const { resultsText, customResultsText } = this.props;
        if (customResultsText) {
            return customResultsText;
        }
        if (resultsText) {
            const pageRange = calculatePageRange(pager.currentPage, pager.pageSize, pager.totalItems);
            const start = formatNumberWithPrecision(pageRange.start, 0);
            const end = formatNumberWithPrecision(pageRange.end, 0);
            const total = formatNumberWithPrecision(this.props.totalItems, 0);
            return (
                <div className="pagination__totals">
                    {`${start}-${end} of ${total} results`}
                </div>
            );
        }
        return null;
    }

    setPage(page) {
        this.props.onChangePage(page);
    }

    generatePageButtons(pages, totalPages) {
        const { currentPage } = this.props;
        return (pages.map((page, index) => (
            <li
                key={index}
                className="pager__item">
                <button
                    className={`pager__button ${currentPage === page ? 'pager__button_active' : ''}`}
                    type="button"
                    onClick={() => this.setPage(page, totalPages)}>
                    {formatNumberWithPrecision(page, 0)}
                </button>
            </li>
        )
        ));
    }

    render() {
        const pager = this.getPager();
        const {
            limitSelector,
            goToPage,
            onChangePage,
            changeLimit,
            pageSize
        } = this.props;

        const description = this.getResultsText(pager);

        const limitSelect = limitSelector ? (
            <LimitSelector
                changeLimit={changeLimit}
                pageSize={pageSize} />
        ) : null;

        const goTo = goToPage ? (
            <GoToPage
                changePage={onChangePage}
                totalPages={pager.totalPages} />
        ) : null;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }
        const pageButtons = this.generatePageButtons(pager.pages, pager.totalPages);

        return (
            <div className="pagination">
                {description}
                <ul className="pager">
                    <li className="pager__item">
                        <button
                            className={`pager__button ${pager.currentPage === 1 ? 'pager__button_disabled' : ''}`}
                            type="button"
                            disabled={pager.currentPage === 1}
                            onClick={() => this.setPage(pager.currentPage - 1)}>{`<`}
                        </button>
                    </li>
                    {pager.firstButton}
                    {pager.prevEllipses}
                    {pageButtons}
                    {pager.nextEllipses}
                    {pager.lastButton}
                    <li className="pager__item">
                        <button
                            className={`pager__button ${pager.currentPage === pager.totalPages ? 'pager__button_disabled' : ''}`}
                            type="button"
                            disabled={pager.currentPage === pager.totalPages}
                            onClick={() => this.setPage(pager.currentPage + 1)}>
                            {`>`}
                        </button>
                    </li>
                </ul>
                {limitSelect}
                {goTo}
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
