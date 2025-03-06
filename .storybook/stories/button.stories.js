import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { boolean, object, text, number, array } from '@storybook/addon-knobs';
import { TabsWrapper, TabsTooltip, TabsWrapperShowTooltip } from '../misc';
import Button from '../../components/Button';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';

export default {
  title: 'Buttons',
  component: Button,
};

export const ButtonVariants = () => <h2>Primary Button</h2>;

ButtonVariants.story = {
  name: 'Button Variants',
};
