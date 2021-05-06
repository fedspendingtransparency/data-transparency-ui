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
    isEnabled = true
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
                    className="usda-button"
                    title={buttonText}
                    aria-label={buttonText}
                    disabled={downloadInFlight}
                    onClick={startDownload}>
                    <FontAwesomeIcon icon={icon} spin={downloadInFlight} />
                </button>
                <span>{buttonText}</span>
            </TooltipWrapper>
        );
    }
    return (
        <div className={`usda-download-btn${disabledClass}`}>
            <button
                className="usda-button"
                title={buttonText}
                aria-label={buttonText}
                disabled={downloadInFlight}
                onClick={startDownload}>
                <FontAwesomeIcon icon={icon} spin={downloadInFlight} />
            </button>
            <span>{buttonText}</span>
        </div>
    );
};

DownloadIconButton.displayName = 'Download Icon Button';
DownloadIconButton.propTypes = propTypes;
export default DownloadIconButton;
