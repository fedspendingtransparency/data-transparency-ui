import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Picker from './Picker';
import { allFiscalYears } from '../helpers/fiscalYearHelper';

const FiscalYearPicker = ({
    selectedFy = 2020,
    latestFy = 2021,
    handleFyChange = () => { },
}) => (
    <div className="usda-fy-picker__container">
        <Picker
            className="usda-fy-picker"
            icon={<FontAwesomeIcon icon={faCalendarAlt} size="xs" alt="FY Loading ..." />}
            selectedOption={`FY ${selectedFy}`}
            options={latestFy
                ? allFiscalYears(2017, latestFy).map((year) => ({ name: `FY ${year}`, value: `${year}`, onClick: handleFyChange }))
                : [{ name: 'Loading fiscal years...', value: null, onClick: () => { } }]
            } />
        <span>Fiscal Year</span>
    </div>
);

FiscalYearPicker.propTypes = {
    selectedFy: PropTypes.number.isRequired,
    latestFy: PropTypes.number.isRequired,
    handleFyChange: PropTypes.func
};

export default FiscalYearPicker;
