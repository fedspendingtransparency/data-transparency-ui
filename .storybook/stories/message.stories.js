import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingMessage from '../../components/messages/LoadingMessage';
import ErrorMessage from '../../components/messages/ErrorMessage';
import NoResultsMessage from '../../components/messages/NoResultsMessage';
import ComingSoon from '../../components/messages/ComingSoon';
import GenericMessage from '../../components/messages/GenericMessage';

export default {
  title: 'Messages',
  component: GenericMessage,
};

export const GenericMessageDefault = () => (
  <GenericMessage
    className="your-class"
    title="Your title"
    description="Custom description here."
    icon={<FontAwesomeIcon icon="pencil-alt" />}
  />
);

GenericMessageDefault.story = {
  name: 'Generic Message',
};

export const LoadingMessageDefault = () => <LoadingMessage />;

LoadingMessageDefault.story = {
  name: 'Loading Message',
};

export const ErrorMessageDefault = () => <ErrorMessage />;

ErrorMessage.story = {
  name: 'Error Message',
};

export const CustomErrorMessage = () => (
  <ErrorMessage title="Your title" description="Custom error message here." />
);

CustomErrorMessage.story = {
  name: 'Custom Error Message',
};

export const NoResultsMessageDefault = () => <NoResultsMessage />;

NoResultsMessageDefault.story = {
  name: 'No Results Message',
};

export const ComingSoonPlaceholderDefault = () => <ComingSoon />;

ComingSoonPlaceholderDefault.story = {
  name: 'Coming Soon Placeholder',
};
