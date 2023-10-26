/**
 * Picker.jsx
 * Created by Kevin Li 8/16/17
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uniqueId } from 'lodash';

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
    notEnabled: PropTypes.bool
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
    notEnabled
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
    const [pickerStyle, setPickerStyle] = useState({
        top: `${dimensions?.top}px`,
        width: `${dimensions?.width}px`,
        left: `${dimensions?.left}px`,
        right: `${dimensions?.right}px`,
    })

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
                expanded &&
                pickerRef.current &&
                !pickerRef.current.contains(e.target) &&
                e.target.id !== `${id}-${fontAwesomeIconId}` &&
                e.target.parentNode.id !== `${id}-${fontAwesomeIconId}`
            )) {
                setExpanded(false);
            }
        };

        handleSetDimensions();
        getDropdownListStyles();
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
        setPickerStyle({
            ...pickerStyle,
            top: `${dimensions.top}px`,
            left: `${dimensions.left}px`
        })

        const currentPickerList = pickerRef.current?.querySelector('.usa-dt-picker__list');

        console.log('innerHeight: ', window.innerHeight);
        console.log('currentPickerList: ', currentPickerList?.getBoundingClientRect().bottom);
        console.log('top/offsetHeight: ', buttonRef.current.offsetHeight)

        const distanceToBottom = window.innerHeight - currentPickerList?.getBoundingClientRect().bottom;

        // if the pickerList is outside the bottom of the view port THEN
        if (distanceToBottom < 0) {
            // calculate the height of the parent
            // set the dimension.top to the height of the parent PLUS the height of the pickerList
            setPickerStyle({
                ...pickerStyle,
                top: `${-1 * (buttonRef.current.offsetHeight + currentPickerList.offsetHeight)}px`
            })
            // console.log("Check bottom fix");
        } else {
            if (isFixedWidth && dropdownDirection === 'right') {
                setPickerStyle({
                    ...pickerStyle,
                    width: `${dimensions.width}px`
                })
                // console.log("isFixedWidth & right");
            }

            if (isFixedWidth && dropdownDirection === 'left') {
                setPickerStyle({
                    ...pickerStyle,
                    top: `${dimensions.top}px`,
                    right: `${dimensions.right}px`,
                    width: `${dimensions.width}px`,
                })
                // console.log("isFixedWidth & left");
            }
            if (dropdownDirection === 'left') {
                setPickerStyle({
                    ...pickerStyle,
                    top: `${dimensions.top}px`,
                    right: `${dimensions.right}px`,
                })
                // console.log("!isFixedWidth & left");
            }
        }

        // console.log('pickerStyle: ', pickerStyle);
        // console.log('dimensions: ', dimensions);
    };

    // console.log('pickerStyle: ', pickerStyle);

    return(
        <div
            id={id}
            className={`usa-dt-picker ${className}`}
            ref={pickerRef}
            style={{backgroundColor: backgroundColor}}
        >
            <div className="usa-dt-picker__dropdown-container" style={{ backgroundColor: backgroundColor }}>
                <button
                    style={{ backgroundColor: backgroundColor }}
                    ref={buttonRef}
                    aria-label="Dropdown Toggle Button"
                    className="usa-dt-picker__button"
                    onClick={toggleMenu}>

                    {icon && (
                        <div className="usa-dt-picker__icon" >
                            {icon}
                        </div>
                    )}

                    {children ?
                        <>{ children }</> :
                        <>
                            <span className="usa-dt-picker__button-text" style={{ backgroundColor: backgroundColor  }}>
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
                    }
                </button>
                <ul className={`usa-dt-picker__list ${expanded ? '' : 'hide'}`} style={pickerStyle}>
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
                                    value={`${option.value || option.name}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        option.onClick(option.value);
                                    }}>
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
