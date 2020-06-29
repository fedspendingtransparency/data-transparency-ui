/**
 * QuarterPicker.jsx
 * Created by Lizzie Salita 10/15/19
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import QuarterButton from './QuarterButton';

import '../../styles/components/quarterPicker/_quarterPicker.scss';

export const useCumulativeQuarterPicker = (initialState = []) => {
    const [selectedPeriods, setSelectedPeriods] = useState(initialState);
    const handleSelection = (selectedPeriod) => {
        const selectedPeriodAsInt = parseInt(selectedPeriod, 10);
        const previousPeriodToNew = `${selectedPeriodAsInt - 1}`;
        const isSelectedPeriodActive = selectedPeriods.some((period) => parseInt(period, 10) >= selectedPeriodAsInt);
        const newPeriods = selectedPeriods
            .map((period) => parseInt(period, 10))
            .filter((period) => period < selectedPeriodAsInt)
            .map((period) => `${period}`);

        const shouldAddPreviousPeriod = (
            isSelectedPeriodActive &&
            !newPeriods.includes(previousPeriodToNew)
        );

        if (shouldAddPreviousPeriod) {
            // b/c this is cumulative, the selected period was previously treated as selected
            // so we should toggle the selection off rather thanperiods was previously selected,
            setSelectedPeriods(
                newPeriods
                    .concat([previousPeriodToNew])
                    .filter((period) => parseInt(period, 10) > 0)
            );
        }
        else if (isSelectedPeriodActive) {
            setSelectedPeriods(newPeriods);
        }
        else {
            setSelectedPeriods(newPeriods.concat([selectedPeriod]));
        }
    };

    return [selectedPeriods, handleSelection];
};

const defaultPeriodsPerQuarter = [
    [
        { title: '1 - 2', id: '2', className: 'double-period' },
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
    selectedPeriods: PropTypes.arrayOf(PropTypes.string),
    disabledPeriods: PropTypes.arrayOf(PropTypes.string),
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
    const [periodHoverState, setPeriodHoverState] = useState('');
    const [quarterHoverState, setQuarterHoverState] = useState('');

    const handleHover = (str, type = 'quarter') => {
        if (type === 'quarter') {
            setQuarterHoverState(str);
        }
        else {
            setPeriodHoverState(str);
        }
    };

    const handleBlur = (type = 'quarter') => {
        if (type === 'quarter') {
            setQuarterHoverState('');
        }
        else {
            setPeriodHoverState('');
        }
    };

    const generateButtons = () => new Array(4)
        .fill(0)
        .map((_, quarterIndex) => {
            const quarterNumber = quarterIndex + 1;
            const quarterNumberAsString = `${quarterNumber}`;
            if (showPeriods) {
                const periodsForQuarter = periodsPerQuarter[quarterIndex];
                const isQuarterDisabled = periodsForQuarter.every((period) => disabledPeriods.includes(period.id));
                return (
                    <li className="usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container" key={uniqueId()}>
                        <p className={isQuarterDisabled ? 'disabled' : ''}>{`Q${quarterNumber}`}</p>
                        <ul className="usa-dt-quarter-picker__period-list">
                            {periodsForQuarter.map((period) => (
                                <li
                                    className={Object.keys(period).includes('className') ? `${period.className} usa-dt-quarter-picker__list-item` : 'usa-dt-quarter-picker__list-item'}
                                    key={uniqueId()}>
                                    <QuarterButton
                                        showPeriods={showPeriods}
                                        quarter={period.id}
                                        title={period.title}
                                        disabled={disabledPeriods.includes(period.id)}
                                        active={(
                                            isIdOrGreaterInArray(period.id, selectedPeriods) ||
                                            parseInt(periodHoverState, 10) >= parseInt(period.id, 10)
                                        )}
                                        handleHover={handleHover}
                                        handleBlur={handleBlur}
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
                        quarter={quarterNumberAsString}
                        disabled={disabledQuarters.includes(quarterNumberAsString)}
                        active={isCumulative ?
                            (
                                isIdOrGreaterInArray(quarterNumberAsString, selectedQuarters) ||
                                parseInt(quarterHoverState, 10) >= quarterNumber
                            )
                            : (
                                selectedQuarters.includes(quarterNumberAsString) ||
                                quarterHoverState === quarterNumberAsString
                            )}
                        handleSelection={handleSelection}
                        handleHover={handleHover}
                        handleBlur={handleBlur}
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
