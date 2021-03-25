/**
 * DownloadIconButton.jsx
 * Created by Lizzie Salita 7/9/20
 **/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
    onClick: PropTypes.func,
    downloadInFlight: PropTypes.bool,
    hoverComponent: PropTypes.element
};

const DownloadIconButton = ({ onClick, downloadInFlight, hoverComponent = null }) => {
    const [showHover, setShowHover] = useState(false);
    const startDownload = (e) => {
        e.preventDefault();
        if (!downloadInFlight) {
            onClick();
        }
    };

    const onMouseEnter = () => setShowHover(true);
    const onMouseLeave = () => setShowHover(false);

    let hover = null;
    if (showHover && !downloadInFlight) {
        hover = (hoverComponent);
    }

    const disabledClass = downloadInFlight ? ' sticky-header__button_disabled' : '';
    const buttonText = downloadInFlight ? 'Preparing Download...' : 'Download';
    const icon = downloadInFlight ? faSpinner : faFileDownload;

    return (
        <div
            className="usda-download-btn"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onMouseEnter}
            onBlur={onMouseLeave}>
            {hover}
            <button
                className={`usda-button${disabledClass}`}
                title={buttonText}
                aria-label={buttonText}
                disabled={downloadInFlight}
                onClick={startDownload}>
                <FontAwesomeIcon icon={icon} spin={!!downloadInFlight} />
            </button>
            <span>Download</span>
        </div>
    );
};

DownloadIconButton.propTypes = propTypes;
export default DownloadIconButton;
