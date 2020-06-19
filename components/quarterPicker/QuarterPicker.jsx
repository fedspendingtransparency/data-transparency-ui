/**
 * QuarterPicker.jsx
 * Created by Lizzie Salita 10/15/19
 */

import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import QuarterButton from './QuarterButton';

import '../../styles/components/quarterPicker/_quarterPicker.scss';

const defaultPeriodsPerQuarter = [
    [
        { title: '1 - 2', id: '2' },
        { title: '3', id: '3' }
    ],
    [
        { title: '4', id: '4' },
        { title: '5', id: '5' },
        { title: '6', id: '6' }
    ],
    [
        { title: '7', id: '7' },
        { title: '8', id: '8' },
        { title: '9', id: '9' }
    ],
    [
        { title: '10', id: '10' },
        { title: '11', id: '11' },
        { title: '12', id: '12' }
    ]
];

const isIdOrGreaterInArray = (idStr, arr) => arr
    .some((periodOrQuarter) => parseInt(periodOrQuarter, 10) >= parseInt(idStr, 10));

const propTypes = {
    handleSelection: PropTypes.func,
    selectedQuarters: PropTypes.arrayOf(PropTypes.string),
    disabledQuarters: PropTypes.arrayOf(PropTypes.string),
    disabledPeriods: PropTypes.arrayOf(PropTypes.string),
    selectedPeriods: PropTypes.arrayOf(PropTypes.string),
    periodsPerQuarter: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                id: PropTypes.string
            })
        )
    ),
    showPeriods: PropTypes.bool,
    isCumulative: PropTypes.bool
};

const QuarterPicker = ({
    handleSelection,
    disabledQuarters = [],
    disabledPeriods = [],
    periodsPerQuarter = defaultPeriodsPerQuarter,
    selectedQuarters = [],
    selectedPeriods = [],
    showPeriods = false,
    isCumulative = false
}) => {
    const generateButtons = () => new Array(4)
        .fill(0)
        .map((_, quarterIndex) => {
            const quarterNumber = quarterIndex + 1;
            if (showPeriods) {
                const periodsForQuarter = periodsPerQuarter[quarterIndex];
                const isQuarterDisabled = periodsForQuarter.every((period) => disabledPeriods.includes(period.id));
                return (
                    <li className="usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container">
                        <p className={isQuarterDisabled ? 'disabled' : ''}>{`Q${quarterNumber}`}</p>
                        <ul className="usa-dt-quarter-picker__period-list">
                            {periodsForQuarter.map((period) => (
                                <li
                                    className="usa-dt-quarter-picker__list-item"
                                    key={uniqueId()}>
                                    <QuarterButton
                                        quarter={period.id}
                                        title={period.title}
                                        disabled={disabledPeriods.includes(period.id)}
                                        active={isIdOrGreaterInArray(period.id, selectedPeriods)}
                                        handleSelection={handleSelection}
                                        toggleTooltip={() => {}} />
                                </li>
                            ))}
                        </ul>
                    </li>
                );
            }
            return (
                <li
                    className="usa-dt-quarter-picker__list-item"
                    key={uniqueId()}>
                    <QuarterButton
                        showPeriods={showPeriods}
                        quarter={quarterNumber}
                        disabled={disabledQuarters.includes(quarterNumber)}
                        active={isCumulative ? isIdOrGreaterInArray(quarterNumber, selectedQuarters) : selectedQuarters.includes(quarterNumber)}
                        handleSelection={handleSelection}
                        toggleTooltip={() => {}} />
                </li>
            );
        });

    return (
        <div className="usa-dt-quarter-picker">
            <ul className="usa-dt-quarter-picker__list">
                {generateButtons()}
            </ul>
        </div>
    );
};

QuarterPicker.propTypes = propTypes;
export default QuarterPicker;
