/**
  * ErrorMessage.jsx
  * Created by Lizzie Salita 11/17/20
  **/

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenericMessage from './GenericMessage';

const defaultProps = {
    description: 'Something went wrong while gathering your data.'
};

const propTypes = {
    description: PropTypes.string
};

const ErrorMessage = ({ description }) => {
    const icon = <FontAwesomeIcon icon="exclamation-triangle" />;
    return <GenericMessage description={description} title="An error occurred" icon={icon} className="error" />;
};

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;
export default ErrorMessage;
