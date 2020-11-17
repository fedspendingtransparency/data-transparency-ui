/**
 * NoResultsMessage.jsx
 * Created by Lizzie Salita 11/17/20
 **/

import React from 'react';
import GenericMessage from '../messages/GenericMessage';

const NoResultsMessage = () => (
    <GenericMessage title="No Results" description="No available data to display." className="no-results" />
);

export default NoResultsMessage;
