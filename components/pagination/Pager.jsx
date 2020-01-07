/**
 * Pager.jsx
 * Created by Lizzie Salita 12/30/19
 */

import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatNumberWithPrecision } from '../../helpers/moneyFormatter';

const propTypes = {
    changePage: PropTypes.func.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired
};

export default class Pager extends React.Component {
    getPager() {
        const { totalItems, currentPage, pageSize, changePage } = this.props;

        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage;
        let endPage;
        let prevEllipses = (<li className="pager__ellipsis">...</li>);
        let nextEllipses = (<li className="pager__ellipsis">...</li>);
        let firstButton = (
            <li className="pager__item">
                <button
                    className="pager__button"
                    type="button"
                    onClick={() => changePage(1)}>
                    {1}
                </button>
            </li>
        );
        let lastButton = (
            <li className="pager__item">
                <button
                    className="pager__button"
                    type="button"
                    onClick={() => changePage(totalPages)}>
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

    generatePageButtons(pages) {
        const { currentPage } = this.props;
        return (pages.map((page, index) => (
            <li
                key={index}
                className="pager__item">
                <button
                    className={`pager__button ${currentPage === page ? 'pager__button_active' : ''}`}
                    type="button"
                    onClick={() => this.props.changePage(page)}>
                    {formatNumberWithPrecision(page, 0)}
                </button>
            </li>
        )
        ));
    }

    render() {
        const { currentPage, changePage } = this.props;
        const pager = this.getPager();
        const pageButtons = this.generatePageButtons(pager.pages, pager.totalPages);

        return (
            <ul className="pager">
                <li className="pager__item">
                    <button
                        className={`pager__button ${currentPage === 1 ? 'pager__button_disabled' : ''}`}
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => changePage(currentPage - 1)}
                        title="Previous page">
                        <FontAwesomeIcon icon="angle-left" />
                    </button>
                </li>
                {pager.firstButton}
                {pager.prevEllipses}
                {pageButtons}
                {pager.nextEllipses}
                {pager.lastButton}
                <li className="pager__item">
                    <button
                        className={`pager__button ${currentPage === pager.totalPages ? 'pager__button_disabled' : ''}`}
                        type="button"
                        disabled={currentPage === pager.totalPages}
                        onClick={() => changePage(currentPage + 1)}
                        title="Next page">
                        <FontAwesomeIcon icon="angle-right" />
                    </button>
                </li>
            </ul>
        );
    }
}

Pager.propTypes = propTypes;
