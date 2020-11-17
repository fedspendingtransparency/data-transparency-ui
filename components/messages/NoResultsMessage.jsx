/**
 * NoResultsMessage.jsx
 * Created by Lizzie Salita 11/17/20
 **/

import React from 'react';
import PropTypes from 'prop-types';

require('../../styles/components/_messages.scss');

const defaultProps = {
    title: 'No Results',
    description: 'No available data to display.'
};

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

const NoResultsMessage = ({ title, description }) => (
    <div className="usda-message usda-message_no-results">
        <div className="usda-message__title">
            {title}
        </div>
        <div className="usda-message__description">
            {description}
        </div>
    </div>
);

NoResultsMessage.propTypes = propTypes;
NoResultsMessage.defaultProps = defaultProps;
export default NoResultsMessage;
