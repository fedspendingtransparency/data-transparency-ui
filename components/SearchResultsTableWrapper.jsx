/**
 * SearchResultsTableWrapper.jsx
 * Created by Brian Petway 4/11/24
 */

import React from 'react';
import PropTypes from "prop-types";

require('../styles/components/_searchResultsTableWrapper.scss');

const propTypes = {
    tableComponent: PropTypes.func.isRequired
};

const SearchResultsTableWrapper = ({ tableComponent }) => (
    <div className="search-results-table-wrapper__outer-container">
        <div className="search-results-table-wrapper__table-container">
            {tableComponent}
        </div>
    </div>
);

SearchResultsTableWrapper.propTypes = propTypes;
export default SearchResultsTableWrapper;
