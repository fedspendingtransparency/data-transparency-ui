import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Picker from './Picker';
import { allFiscalYears } from '../helpers/fiscalYearHelper';

require('../styles/components/_fiscalYearPicker.scss');

const defaultSort = (a, b) => {
    if (Number.isInteger(a)) return b - a;
    return parseInt(b, 10) - parseInt(a, 10);
};

const FiscalYearPicker = ({
    latestFy,
    selectedFy = 2020,
    earliestFy = 2017,
    options = [],
    handleFyChange = () => { },
    sortFn = defaultSort
}) => {
    const renderOptions = () => {
        // override default earliest/latest options
        if (options.length) return options.map((obj) => ({ ...obj, onClick: handleFyChange }));
        if (latestFy) {
            return allFiscalYears(earliestFy, latestFy)
                .map((year) => ({ name: `FY ${year}`, value: `${year}`, onClick: handleFyChange }));
        }
        return [{ name: 'Loading fiscal years...', value: null, onClick: () => { } }];
    };

    return (
        <div className="usda-fy-picker__container">
            <Picker
                className="usda-fy-picker"
                icon={<FontAwesomeIcon icon={faCalendarAlt} size="xs" alt="FY Loading ..." />}
                selectedOption={options.length
                    ? options.find((obj) => obj.value === selectedFy || obj.value === parseInt(selectedFy, 10)).name || '--'
                    : `FY ${selectedFy}`
                }
                sortFn={sortFn}
                options={renderOptions()} />
            <span>Fiscal Year</span>
        </div>
    );
};

FiscalYearPicker.displayName = 'Fiscal Year Picker';
FiscalYearPicker.propTypes = {
    selectedFy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    earliestFy: PropTypes.number,
    latestFy: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),
    handleFyChange: PropTypes.func,
    sortFn: PropTypes.func
};

export default FiscalYearPicker;
