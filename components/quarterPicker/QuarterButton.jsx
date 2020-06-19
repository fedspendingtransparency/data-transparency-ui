/**
 * QuarterButton.jsx
 * Created by Lizzie Salita 10/15/19
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    quarter: PropTypes.number,
    handleSelection: PropTypes.func,
    toggleTooltip: PropTypes.func,
    title: PropTypes.string
};

const QuarterButton = ({
    disabled,
    active,
    quarter,
    handleSelection,
    toggleTooltip,
    title = ''
}) => {
    const quarterTitle = title || `Q ${quarter}`;

    const onMouseEnter = () => {
        if (disabled) {
            toggleTooltip(quarter);
        }
    };

    const onMouseLeave = () => {
        toggleTooltip(0);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (!disabled) {
            handleSelection(quarter);
        }
    };

    let additionalClasses = disabled ? 'usa-dt-quarter-picker__quarter_disabled ' : '';
    if (quarter === 1) {
        additionalClasses += 'usa-dt-quarter-picker__quarter_first';
    }
    else if (quarter === 4) {
        additionalClasses += 'usa-dt-quarter-picker__quarter_last';
    }

    if (!disabled && active) {
        additionalClasses += ' usa-dt-quarter-picker__quarter_active';
    }

    return (
        // Use CSS class and aria-disabled rather than disabled html property
        // so that the disabled buttons are still focusable to display
        // the warning tooltip
        <button
            className={`usa-dt-quarter-picker__quarter ${additionalClasses}`}
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onFocus={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onBlur={onMouseLeave}
            aria-disabled={disabled}>
            {quarterTitle}
        </button>
    );
};

QuarterButton.propTypes = propTypes;

export default QuarterButton;
