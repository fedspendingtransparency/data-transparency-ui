/**
  * LoadingMessage.jsx
  * Created by Lizzie Salita 11/17/20
  **/

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('../../styles/components/_messages.scss');

const defaultProps = {
    title: 'Gathering your data...',
    description: ''
};

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

const LoadingMessage = ({ title, description }) => (
    <div className="usda-message usda-message_loading">
        <div className="usda-message__icon">
            <FontAwesomeIcon icon="spinner" alt="loading spinner" spin />
        </div>
        <div className="usda-message__title">
            {title}
        </div>
        <div className="usda-message__description">
            {description}
        </div>
    </div>
);

LoadingMessage.propTypes = propTypes;
LoadingMessage.defaultProps = defaultProps;
export default LoadingMessage;
