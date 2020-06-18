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
        { title: '1-2', id: '1-2' },
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

const isPeriodActive = (id, selectedPeriods) => selectedPeriods
    .some((period) => parseInt(period, 10) >= parseInt(id, 10));

const isPeriodDisabled = (id, disabledPeriods) => disabledPeriods
    .some((period) => parseInt(period, 10) >= parseInt(id, 10));

const propTypes = {
    selectedQuarters: PropTypes.array,
    pickedQuarter: PropTypes.func,
    disabledQuarters: PropTypes.arrayOf(PropTypes.string),
    disabledPeriods: PropTypes.arrayOf(PropTypes.string),
    selectedPeriods: PropTypes.arrayOf(PropTypes.string),
    showPeriods: PropTypes.bool,
    periodsPerQuarter: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                id: PropTypes.string
            })
        ))
};

const QuarterPicker = ({
    periodsPerQuarter = defaultPeriodsPerQuarter,
    selectedQuarters,
    pickedQuarter,
    disabledQuarters,
    disabledPeriods = [],
    showPeriods = false,
    selectedPeriods = []
}) => {
    const generateButtons = () => new Array(4)
        .fill(0)
        .map((_, quarterIndex) => {
            const quarterNumber = quarterIndex + 1;
            if (showPeriods) {
                return (
                    <li>
                        <p>{`Q${quarterNumber}`}</p>
                        <ul className="usa-dt-quarter-picker__period-list">
                            {periodsPerQuarter[quarterIndex].map((period) => (
                                <li
                                    className="usa-dt-quarter-picker__list-item"
                                    key={uniqueId()}>
                                    <QuarterButton
                                        quarter={quarterNumber}
                                        title={period.title}
                                        disabled={(
                                            isPeriodDisabled(period.id, disabledPeriods) ||
                                            disabledQuarters.includes(quarterNumber)
                                        )}
                                        active={isPeriodActive(period.id, selectedPeriods)}
                                        pickedQuarter={pickedQuarter}
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
                        active={selectedQuarters.includes(quarterNumber)}
                        pickedQuarter={pickedQuarter}
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
