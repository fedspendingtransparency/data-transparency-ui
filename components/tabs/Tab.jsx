/**
  * Tab.jsx
  * Created by Kevin Li 11/29/16
  **/

import React from 'react';
import PropTypes from 'prop-types';

import { createOnKeyDownHandler } from '../../helpers/keyboardEventsHelper';

const propTypes = {
    label: PropTypes.string.isRequired,
    internal: PropTypes.string,
    labelContent: PropTypes.element,
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    switchTab: PropTypes.func,
    className: PropTypes.string
};

export default class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.clickedTab = this.clickedTab.bind(this);
    }

    clickedTab() {
        this.props.switchTab(this.props.internal);
    }

    render() {
        let activeClass = '';
        let disabledStatus = '';
        let disabledClass = '';
        if (this.props.active) {
            activeClass = ' active';
        }
        if (this.props.enabled === false) {
            disabledStatus = true;
            disabledClass = ' disabled';
        }
        else {
            disabledStatus = false;
            disabledClass = '';
        }

        const className = `usa-dt-tab-toggle${activeClass} ${this.props.className}${disabledClass}`;
        const onKeyDownHandler = createOnKeyDownHandler(this.clickedTab);
        return (
            <div className={`usa-dt-tab-toggle__wrapper${disabledClass}`}>
                <div
                    className={className}
                    onClick={this.clickedTab}
                    onKeyDown={onKeyDownHandler}
                    role="menuitemradio"
                    aria-checked={this.props.active}
                    title={`Show ${this.props.label}`}
                    aria-label={`Show ${this.props.label}`}
                    tabIndex={0}
                    disabled={disabledStatus}>
                    <div className="usa-dt-tab-content">
                        <div className="usa-dt-tab-label">
                            {this.props.labelContent || this.props.label}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Tab.propTypes = propTypes;

