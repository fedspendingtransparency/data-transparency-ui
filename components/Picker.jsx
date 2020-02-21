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
    sortFn: PropTypes.func,
    icon: PropTypes.node,
    selectedOption: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        onClick: PropTypes.func
    })),
    dropdownDirection: PropTypes.oneOf(['left', 'right']),
    isFixedWidth: PropTypes.bool,
    children: PropTypes.node
};

const pickerRef = createRef();
const buttonRef = createRef();

const defaultSort = (a, b, selectedOption) => {
    // if no sort fn is provided, sort active element to lowest index
    if (a.name === selectedOption) return -1;
    if (b.name === selectedOption) return 1;
    // then, sort alphabetically
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
};

const Picker = ({
    className = '',
    id = '',
    options,
    selectedOption,
    icon = null,
    sortFn = defaultSort,
    isFixedWidth = false,
    children,
    dropdownDirection = 'right'
}) => {
    const [expanded, setExpanded] = useState(false);
    const [dimensions, setDimensions] = useState({
        top: 0,
        width: 0,
        left: 0,
        right: 0
    });

    const toggleMenu = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };

    const handleSort = (a, b) => sortFn(a, b, selectedOption);

    const handleSetDimensions = () => {
        if (buttonRef.current && pickerRef.current) {
            setDimensions({
                top: buttonRef.current.offsetHeight,
                width: buttonRef.current.offsetWidth,
                left: buttonRef.current.offsetLeft,
                // offsetLeft + offsetWidth to account for the horizontal margin / padding ✅
                right: pickerRef.current.offsetWidth - (buttonRef.current.offsetWidth + buttonRef.current.offsetLeft)
            });
        }
    };

    useEffect(() => {
        if (dimensions.width !== 0 && isFixedWidth) {
            // only reset the dimensions when we're setting the width dimension
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

    const createOnClickFn = (cb) => (e) => {
        e.preventDefault();
        cb(e.target.value);
        setExpanded(false);
    };

    const getDropdownListStyles = () => {
        const styles = {
            top: `${dimensions.top}px`,
            left: `${dimensions.left}px`
        };

        if (isFixedWidth && dropdownDirection === 'right') {
            return {
                ...styles,
                width: `${dimensions.width}px`
            };
        }
        if (isFixedWidth && dropdownDirection === 'left') {
            return {
                top: styles.top,
                right: `${dimensions.right}`,
                width: `${dimensions.width}px`
            };
        }
        if (dropdownDirection === 'left') {
            return {
                top: styles.top,
                right: `${dimensions.right}px`
            };
        }
        return styles;
    };

    return (
        <div id={id} className={`usa-dt-picker ${className}`} ref={pickerRef}>
            {icon && (
                <div className="usa-dt-picker__icon">
                    {icon}
                </div>
            )}
            <div className="usa-dt-picker__dropdown-container">
                {children
                    ? (
                        <button ref={buttonRef} className="usa-dt-picker__button" onClick={toggleMenu}>
                            {children}
                        </button>
                    )
                    : (
                        <button ref={buttonRef} className="usa-dt-picker__button" onClick={toggleMenu}>
                            <span className="usa-dt-picker__button-text">
                                {selectedOption}
                            </span>
                            <span className="usa-dt-picker__button-icon">
                                {!expanded && (
                                    <FontAwesomeIcon id={fontAwesomeIconId} icon="chevron-down" alt="Toggle menu" color="#555" />
                                )}
                                {expanded && (
                                    <FontAwesomeIcon id={fontAwesomeIconId} icon="chevron-up" alt="Toggle menu" color="#555" />
                                )}
                            </span>
                        </button>
                    )}
                <ul className={`usa-dt-picker__list ${expanded ? '' : 'hide'}`} style={getDropdownListStyles()}>
                    {options
                        .sort(handleSort)
                        .map((option) => ({
                            ...option,
                            onClick: createOnClickFn(option.onClick)
                        }))
                        .map((option) => (
                            <li key={option.name} className="usa-dt-picker__list-item">
                                <button
                                    className={`usa-dt-picker__item ${option.name === selectedOption ? 'active' : ''}`}
                                    value={`${option.name}`}
                                    onClick={option.onClick}>
                                    {option.component ? option.component : option.name}
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
