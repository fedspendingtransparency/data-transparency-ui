/**
 * Picker.jsx
 * Created by Kevin Li 8/16/17
 */

import React, { createRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('../styles/components/_picker.scss');

const propTypes = {
    onClick: PropTypes.func,
    sortFn: PropTypes.func,
    icon: PropTypes.string,
    altText: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    selectedOption: PropTypes.string,
    optionPrefix: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string)
};

const pickerRef = createRef();

const Picker = ({
    sortFn = () => 0,
    onClick,
    selectedOption,
    options,
    optionPrefix = '',
    icon = "calendar-alt",
    altText = "Fiscal Year",
    iconColor = "white",
    iconSize = "lg"
}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };

    const handleSort = (a, b) => {
        if (a === selectedOption) return -1;
        if (b === selectedOption) return 1;
        return sortFn(a, b);
    };

    useEffect(() => {
        const closeMenu = (e) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        onClick(e.target.value);
        setExpanded(false);
    };

    return (
        <div className="usa-dt-picker" ref={pickerRef}>
            <div className="usa-dt-picker__header">
                <div className="usa-dt-picker__icon">
                    <FontAwesomeIcon icon={icon} alt={altText} color={iconColor} size={iconSize} />
                </div>
                <button className="usa-dt-picker__button" onClick={toggleMenu}>
                    <span className="usa-dt-picker__button-text">
                        {optionPrefix ? `${optionPrefix} ${selectedOption}` : selectedOption}
                    </span>
                    <div className="usa-dt-picker__button-icon">
                        <FontAwesomeIcon icon="chevron-down" alt="Toggle menu" />
                    </div>
                </button>
            </div>
            <div className="usa-dt-picker__dropdown-container">
                <ul className={`usa-dt-picker__list ${expanded ? '' : 'hide'}`}>
                    {options
                        .sort(handleSort)
                        .map((option) => (
                            <li key={option} className="usa-dt-picker__list-item">
                                <button
                                    className={`usa-dt-picker__item ${option === selectedOption ? 'active' : ''}`}
                                    value={`${option}`}
                                    onClick={handleClick}>
                                    {optionPrefix ? `${optionPrefix} ${option}` : option}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

Picker.propTypes = propTypes;

export default Picker;
