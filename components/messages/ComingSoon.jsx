/**
 * ComingSoon.jsx
 * Created by Lizzie Salita 11/17/20
 **/

import React from 'react';
import GenericMessage from './GenericMessage';

require('../../styles/components/_messages.scss');

const ComingSoon = ({
    className
}) => (
    <GenericMessage
        className={`coming soon ${className}`}
        title="Coming Soon"
        description="This feature is currently under development." />
);

export default ComingSoon;
