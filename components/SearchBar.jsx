/**
 * SearchBar.jsx
 * Created by Lizzie Salita 7/16/20
 */

import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resetOrSubmitSearch, changeSearchTerm } from '../helpers/searchBarHelper';

require('../styles/components/_searchBar.scss');

const propTypes = {
    setQuery: PropTypes.func.isRequired,
    minChars: PropTypes.number
};

// the minimum number of characters a user is required to enter before they can perform a search
const defaultProps = {
    setQuery: () => {},
    minChars: 2
};

const SearchBar = ({ setQuery, minChars }) => {
    const [value, setValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const resetSearch = () => {
        setValue('');
        setQuery('');
        setSearchTerm('');
    };

    const onChange = throttle((e) => (changeSearchTerm(searchTerm, e) ? setValue(e.target.value) : resetSearch()), 500);

    const onSubmit = () => {
        const trimmedvalue = value.trim();
        setQuery(trimmedvalue);
        setValue(trimmedvalue);
        setSearchTerm(trimmedvalue);
    };

    const handleClick = (e) => {
        e.preventDefault();
        return resetOrSubmitSearch(value, searchTerm, minChars) ? onSubmit() : resetSearch();
    };

    let icon = 'search';
    if (value && searchTerm === value) {
        icon = 'times';
    }
    else if (searchTerm && value.length < minChars) {
        icon = 'times';
    }

    return (
        <form className="usa-dt-search-bar">
            <input
                className="usa-dt-search-bar__input"
                aria-label="Search Input"
                title="Search Input"
                value={value}
                type="text"
                onChange={onChange} />
            <button
                disabled={value.length < minChars && !searchTerm}
                aria-label="Search Button"
                title="Search Button"
                onClick={handleClick}
                className="usa-dt-search-bar__button">
                <FontAwesomeIcon icon={icon} />
            </button>
        </form>
    );
};

SearchBar.defaultProps = defaultProps;
SearchBar.propTypes = propTypes;
export default SearchBar;
