/**
 * ComingSoon.jsx
 * Created by Lizzie Salita 11/17/20
 **/

import React from 'react';
import GenericMessage from './GenericMessage';

require('../../styles/components/_messages.scss');

const ComingSoon = () => (
    <GenericMessage
        className="coming-soon"
        title="Coming Soon"
        description="This feature is currently under development." />
);

export default ComingSoon;
