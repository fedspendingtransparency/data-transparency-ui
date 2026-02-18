/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
/**
 * DownloadIconButton.jsx
 * Created by Lizzie Salita 7/9/20
 **/

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faFileDownload } from '@fortawesome/free-solid-svg-icons';

import TooltipWrapper from './infoTooltip/TooltipWrapper';

require('../styles/components/_downloadIconButton.scss');

const propTypes = {
    onClick: PropTypes.func.isRequired,
    downloadInFlight: PropTypes.bool,
    tooltipComponent: PropTypes.element,
    isEnabled: PropTypes.bool,
    tooltipPosition: PropTypes.string
};

const DownloadIconButton = ({
    onClick,
    downloadInFlight,
    tooltipComponent = null,
    tooltipPosition = "left",
    isEnabled = true,
    backgroundColor = '#1a4480'
}) => {
    const startDownload = (e) => {
        e.preventDefault();
        if (!downloadInFlight && isEnabled) {
            onClick();
        }
    };

    const disabledClass = downloadInFlight || !isEnabled ? ' disabled' : '';
    const buttonText = downloadInFlight ? 'Preparing Download...' : 'Download';
    const icon = downloadInFlight ? faSpinner : faFileDownload;

    if (tooltipComponent) {
        return (
            <TooltipWrapper
                className={`usda-download-btn${disabledClass}`}
                tooltipPosition={tooltipPosition}
                tooltipComponent={tooltipComponent}>
                <button
                    type="button"
                    role="presentation"
                    className="usda-button"
                    title={buttonText}
                    disabled={downloadInFlight || !isEnabled}
                    onClick={startDownload}
                    style={{ backgroundColor }}
                    tabIndex={!isEnabled ? -1 : 0}>
                    <FontAwesomeIcon icon={icon} spin={downloadInFlight} color="#dfe1e2" />
                    <span style={{ color: '#dfe1e2' }}>{buttonText}</span>
                </button>
            </TooltipWrapper>
        );
    }
    return (
        <div className={`usda-download-btn${disabledClass}`}>
            <button
                type="button"
                className="usda-button"
                title={buttonText}
                aria-label={buttonText}
                disabled={downloadInFlight}
                onClick={startDownload}
                style={{ backgroundColor }}
                tabIndex={!isEnabled ? -1 : 0}
                aria-hidden={!isEnabled}>
                <FontAwesomeIcon icon={icon} spin={downloadInFlight} />
                <span>{buttonText}</span>
            </button>
        </div>
    );
};

DownloadIconButton.displayName = 'Download Icon Button';
DownloadIconButton.propTypes = propTypes;
export default DownloadIconButton;