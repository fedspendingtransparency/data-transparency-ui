/**
  * LoadingMessage.jsx
  * Created by Lizzie Salita 11/17/20
  **/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenericMessage from './GenericMessage';

const LoadingMessage = () => {
    const icon = <FontAwesomeIcon icon="spinner" spin />;
    return <GenericMessage title="Gathering your data..." icon={icon} className="loading" />;
};

export default LoadingMessage;
