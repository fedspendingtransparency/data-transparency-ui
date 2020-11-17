/**
  * ErrorMessage.jsx
  * Created by Lizzie Salita 11/17/20
  **/

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('../../styles/components/_messages.scss');

const defaultProps = {
    title: 'An error occurred',
    description: 'Something went wrong while gathering your data.'
};

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

const ErrorMessage = ({ title, description }) => (
    <div className="usda-message usda-message_error">
        <div className="usda-message__icon">
            <FontAwesomeIcon icon="exclamation-triangle" />
        </div>
        <div className="usda-message__title">
            {title}
        </div>
        <div className="usda-message__description">
            {description}
        </div>
    </div>
);


ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;
export default ErrorMessage;
