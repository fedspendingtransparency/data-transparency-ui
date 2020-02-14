/**
 * Picker.jsx
 * Created by Kevin Li 8/16/17
 */

import React, { createRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('../styles/components/_picker.scss');

const fontAwesomeIconId = "usa-dt-picker__button-icon--svg";

const propTypes = {
    onClick: PropTypes.func,
    sortFn: PropTypes.func,
    icon: PropTypes.string,
    altText: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    selectedOption: PropTypes.string,
    optionPrefix: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    borderType: PropTypes.oneOf(['none', 'bottom', 'full']),
    borderColor: PropTypes.string
};

const getBorderType = (borderType, borderColor) => {
    if (borderType === 'bottom') return { borderBottom: `1px solid ${borderColor}` };
    if (borderType === 'full') return { border: `1px solid ${borderColor}` };
    // for custom border styles, pass 'none' and use an id/class to override styles
    return {};
};

const pickerRef = createRef();
const buttonRef = createRef();

const Picker = ({
    sortFn = () => 'default',
    onClick,
    selectedOption,
    options,
    optionPrefix = '',
    icon = 'calendar-alt',
    altText = 'Fiscal Year',
    iconColor = 'white',
    iconSize = 'lg',
    borderType = 'bottom',
    borderColor = 'white',
    className = '',
    id = ''
}) => {
    const [expanded, setExpanded] = useState(false);
    const [dimensions, setDimensions] = useState({ top: 0, width: 0 });

    const toggleMenu = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };

    const defaultSort = (a, b) => {
        // if no sort fn is provided, sort active element to lowest index
        if (a === selectedOption) return -1;
        if (b === selectedOption) return 1;
        return 0;
    };

    const handleSort = (a, b) => {
        if (sortFn(a, b) === 'default') return defaultSort(a, b);
        return sortFn(a, b);
    };

    const handleSetDimensions = () => {
        if (buttonRef.current) {
            setDimensions({
                top: buttonRef.current.offsetHeight,
                width: buttonRef.current.offsetWidth
            });
        }
    };

    useEffect(() => {
        if (dimensions.width !== 0) {
            if (buttonRef.current && buttonRef.current.offsetWidth !== dimensions.width) {
                handleSetDimensions();
            }
        }
    });

    useEffect(() => {
        const closeMenu = (e) => {
            if ((
                expanded &&
                pickerRef.current &&
                !pickerRef.current.contains(e.target) &&
                e.target.id !== fontAwesomeIconId &&
                e.target.parentNode.id !== fontAwesomeIconId
            )) {
                setExpanded(false);
            }
        };

        handleSetDimensions();
        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [expanded]);

    const handleClick = (e) => {
        e.preventDefault();
        onClick(e.target.value);
        setExpanded(false);
    };

    return (
        <div id={id} className={`usa-dt-picker ${className}`} ref={pickerRef}>
            {icon !== 'none' && (
                <div className="usa-dt-picker__icon">
                    <FontAwesomeIcon icon={icon} alt={altText} color={iconColor} size={iconSize} />
                </div>
            )}
            <div className="usa-dt-picker__dropdown-container">
                <button ref={buttonRef} className="usa-dt-picker__button" onClick={toggleMenu} style={{ ...getBorderType(borderType, borderColor) }}>
                    <span className="usa-dt-picker__button-text">
                        {optionPrefix ? `${optionPrefix} ${selectedOption}` : selectedOption}
                    </span>
                    <span className="usa-dt-picker__button-icon">
                        {!expanded && (
                            <FontAwesomeIcon id={fontAwesomeIconId} icon="chevron-down" alt="Toggle menu" color={iconColor} />
                        )}
                        {expanded && (
                            <FontAwesomeIcon id={fontAwesomeIconId} icon="chevron-up" alt="Toggle menu" color={iconColor} />
                        )}
                    </span>
                </button>
                <ul className={`usa-dt-picker__list ${expanded ? '' : 'hide'}`} style={{ width: `${dimensions.width}px`, top: `${dimensions.top}px` }}>
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
