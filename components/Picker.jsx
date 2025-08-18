/**
 * Picker.jsx
 * Created by Kevin Li 8/16/17
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uniqueId } from 'lodash-es';

require('../styles/components/_picker.scss');

const fontAwesomeIconId = "usa-dt-picker__button-icon--svg";

const propTypes = {
    sortFn: PropTypes.func,
    icon: PropTypes.node,
    selectedOption: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    className: PropTypes.string,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        value: PropTypes.any,
        onClick: PropTypes.func,
        classNames: PropTypes.string
    })),
    dropdownDirection: PropTypes.oneOf(['left', 'right']),
    isFixedWidth: PropTypes.bool,
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    notEnabled: PropTypes.bool,
    buttonClassNames: PropTypes.string,
    pickerListClassNames: PropTypes.string
};

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
    dropdownDirection = 'right',
    backgroundColor = '#1a4480',
    notEnabled,
    buttonClassNames = "",
    pickerListClassNames = ""
}) => {
    const pickerRef = useRef(null);
    const buttonRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [dimensions, setDimensions] = useState({
        top: 0,
        width: 0,
        left: 0,
        right: 0
    });

    const toggleMenu = (e) => {
        e.preventDefault();
        if (!notEnabled) {
            setExpanded(!expanded);
        }
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
                expanded
                && pickerRef.current
                && !pickerRef.current.contains(e.target)
                && e.target.id !== `${id}-${fontAwesomeIconId}`
                && e.target.parentNode.id !== `${id}-${fontAwesomeIconId}`
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

    const createOnClickFn = (cb) => (param) => {
        cb(param);
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
        <div id={id} className={`usa-dt-picker ${className}`} ref={pickerRef} style={{ backgroundColor }}>
            <div className="usa-dt-picker__dropdown-container" style={{ backgroundColor }}>
                <button
                    style={{ backgroundColor }}
                    ref={buttonRef}
                    type="button"
                    aria-label="Dropdown Toggle Button"
                    className={`usa-dt-picker__button ${buttonClassNames}`}
                    onClick={toggleMenu}>

                    {icon && (
                        <div className="usa-dt-picker__icon">
                            {icon}
                        </div>
                    )}

                    {children
                        || (
                            <>
                                <span className="usa-dt-picker__button-text" style={{ backgroundColor }}>
                                    {selectedOption}
                                </span>
                                <span className="usa-dt-picker__button-icon">
                                    {!expanded && (
                                        <FontAwesomeIcon id={`${id}-${fontAwesomeIconId}`} icon="chevron-down" alt="Toggle menu" color="#555" />
                                    )}
                                    {expanded && (
                                        <FontAwesomeIcon id={`${id}-${fontAwesomeIconId}`} icon="chevron-up" alt="Toggle menu" color="#555" />
                                    )}
                                </span>
                            </>
                        )}
                </button>
                <ul className={`usa-dt-picker__list ${pickerListClassNames} ${expanded ? '' : 'hide'}`} style={getDropdownListStyles()}>
                    {options
                        .sort(handleSort)
                        .map((option) => ({
                            ...option,
                            onClick: createOnClickFn(option.onClick)
                        }))
                        .map((option) => (
                            <li key={uniqueId()} className={`usa-dt-picker__list-item ${option?.classNames ? option.classNames : ''}`}>
                                <button
                                    className={`usa-dt-picker__item ${option.name === selectedOption ? 'active' : ''}`}
                                    type="button"
                                    value={`${option.value || option.name}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        option.onClick(option.value);
                                    }}
                                    onKeyDown={(e) => {
                                        if (option.name === 'reddit' && e.key === 'Tab') {
                                            setExpanded(!expanded);
                                        }
                                    }}>
                                    {option.component ? option.component : option.name}
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

Picker.propTypes = propTypes;

export default Picker;
