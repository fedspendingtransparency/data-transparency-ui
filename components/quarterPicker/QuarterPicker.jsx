/**
 * QuarterPicker.jsx
 * Created by Lizzie Salita 10/15/19
 */

import React from 'react';
import PropTypes from 'prop-types';
import QuarterButton from './QuarterButton';

import '../../styles/components/quarterPicker/_quarterPicker.scss';

const propTypes = {
    selectedQuarters: PropTypes.array,
    pickedQuarter: PropTypes.func,
    disabledQuarters: PropTypes.array
};


export default class QuarterPicker extends React.Component {
    generateQuarters() {
        const quarters = [];
        for (let i = 1; i <= 4; i++) {
            quarters.push(
                <li
                    className="usa-dt-quarter-picker__list-item"
                    key={i}>
                    <QuarterButton
                        quarter={i}
                        disabled={this.props.disabledQuarters[i - 1]}
                        active={this.props.selectedQuarters.includes(i)}
                        pickedQuarter={this.props.pickedQuarter}
                        toggleTooltip={this.toggleTooltip} />
                </li>
            );
        }
        return quarters;
    }

    render() {
        return (
            <div className="usa-dt-quarter-picker">
                <ul className="usa-dt-quarter-picker__list">
                    {this.generateQuarters()}
                </ul>
            </div>
        );
    }
}

QuarterPicker.propTypes = propTypes;
