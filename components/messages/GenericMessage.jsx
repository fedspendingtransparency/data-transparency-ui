/**
 * GenericMessage.jsx
 * Created by Lizzie Salita 11/17/20
 **/

import React from 'react';
import PropTypes from 'prop-types';

require('../../styles/components/_messages.scss');

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string
};

const GenericMessage = ({
    icon, title, description, className
}) => (
    <div className={`usda-message${className && ` usda-message_${className}`}`}>
        {
            icon && (
                <div className="usda-message__icon">
                    {icon}
                </div>)
        }
        <div className="usda-message__title">
            {title}
        </div>
        {
            description && (
                <div className="usda-message__description">
                    {description}
                </div>)
        }
    </div>
);

GenericMessage.propTypes = propTypes;
export default GenericMessage;
