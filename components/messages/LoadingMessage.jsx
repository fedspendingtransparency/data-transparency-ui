/**
  * LoadingMessage.jsx
  * Created by Lizzie Salita 11/17/20
  **/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('../../styles/components/_messages.scss');

const LoadingMessage = () => (
    <div className="usda-message usda-message_loading">
        <div className="usda-message__icon">
            <FontAwesomeIcon icon="spinner" alt="loading spinner" spin />
        </div>
        <div className="usda-message__title">
            Gathering your data...
        </div>
    </div>
);

export default LoadingMessage;
