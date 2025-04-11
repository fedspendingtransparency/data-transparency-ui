import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingMessage from '../../components/messages/LoadingMessage';
import ErrorMessage from '../../components/messages/ErrorMessage';
import NoResultsMessage from '../../components/messages/NoResultsMessage';
import ComingSoon from '../../components/messages/ComingSoon';
import GenericMessage from '../../components/messages/GenericMessage';

export default {
  title: 'General/Messages',
  component: GenericMessage,
  tags: ['autodocs'],
};

export const DefaultErrorMessage = (args) => <ErrorMessage {...args} />;

export const CustomErrorMessage = DefaultErrorMessage.bind({});
CustomErrorMessage.args = {
  title: "Your title",
  description: "Custom error message"
}

export const DefaultGenericMessage = (args) => <GenericMessage {...args} />
DefaultGenericMessage.args = {
  title: "Your title",
  description: "Custom description here",
  icon: <FontAwesomeIcon icon="pencil-alt"/>,
  className: "your-class"
}

export const DefaultLoadingMessage = (args) => <LoadingMessage {...args} />

export const DefaultNoResultMessage = (args) => <NoResultsMessage {...args} />

export const DefaultComingSoonPlaceholder = (args) => <ComingSoon {...args} />

