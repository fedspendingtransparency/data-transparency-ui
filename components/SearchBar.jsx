/**
 * SearchBar.jsx
 * Created by Lizzie Salita 7/16/20
 */

import React, { useState } from 'react';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resetOrSubmitSearch, shouldResetSearchTerm } from '../helpers/searchBarHelper';

require('../styles/components/_searchBar.scss');

const propTypes = {
    onSearch: PropTypes.func,
    minChars: PropTypes.number,
    isDisabled: PropTypes.bool,
    throttleOnChange: PropTypes.number,
    inputTitle: PropTypes.string,
    placeholder: PropTypes.string
};

// the minimum number of characters a user is required to enter before they can perform a search
const defaultProps = {
    onSearch: () => {},
    minChars: 2,
    throttleOnChange: 500,
    inputTitle: 'Search Input',
    isDisabled: false,
    placeholder: ''
};

const SearchBar = ({
    onSearch, minChars, isDisabled, throttleOnChange, inputTitle, placeholder
}) => {
    // value of the input
    const [value, setValue] = useState('');
    // The searchTerm is the current submitted search term.
    const [searchTerm, setSearchTerm] = useState('');

    const resetSearch = () => {
        setValue('');
        onSearch('');
        setSearchTerm('');
    };

    const onChange = throttle((e) => (shouldResetSearchTerm(e, searchTerm) ? resetSearch() : setValue(e.target.value)), throttleOnChange);

    const onSubmit = () => {
        const trimmedvalue = value.trim();
        onSearch(trimmedvalue);
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
                title={inputTitle}
                value={value}
                type="text"
                disabled={isDisabled}
                onChange={onChange}
                placeholder={placeholder} />
            <button
                disabled={(value.length < minChars && !searchTerm) || isDisabled}
                aria-label="Search Button"
                title={icon === 'search' ? 'Submit Search Button' : 'Remove Input Value Button'}
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
