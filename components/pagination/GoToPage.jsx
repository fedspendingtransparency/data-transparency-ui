/**
 * GoToPage.jsx
 * Created by Alisa Burdeyny 12/5/19
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    changePage: PropTypes.func.isRequired,
    totalPages: PropTypes.number,
    id: PropTypes.string
};

const GoToPage = ({
    changePage: changePageProp,
    totalPages = 1,
    id = 'usa-dt-pagination-go-to'
}) => {
    const [goToPage, setGoToPage] = useState('');

    const placeholder = totalPages > 1 ? `1-${totalPages}` : '1';

    const validPage = () => !(goToPage === '' || parseInt(goToPage, 10) < 1
        || parseInt(goToPage, 10) > totalPages);

    const changePage = (e) => {
        e.preventDefault();
        if (validPage()) {
            changePageProp(parseInt(goToPage, 10));
        }
    };

    const changedInput = (e) => {
        setGoToPage(e.target.value);
    };

    return (
        <form className="usa-dt-pagination__go-to">
            <label htmlFor={`${id}-go-to`}>
                Go to page
            </label>
            <input
                type="number"
                id={`${id}-go-to`}
                title={`Enter a number between 1 and ${totalPages}`}
                min="1"
                max={totalPages}
                placeholder={placeholder}
                value={goToPage}
                onChange={changedInput}
                onSubmit={changePage} />
            <button
                type="submit"
                onClick={changePage}
                disabled={!validPage()}>
                Go
            </button>
        </form>
    );
};

GoToPage.propTypes = propTypes;
export default GoToPage;
