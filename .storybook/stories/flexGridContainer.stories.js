import React from 'react';
import { boolean, object, text, number, array } from '@storybook/addon-knobs';
import FlexGridContainer from '../../components/flexGrid/FlexGridContainer';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';

export default {
  title: 'Components/Flex Grid/Flex Grid Container',
  component: FlexGridContainer,
  decorators: [
    (Story) => (
      <div className="story-flex-grid">
        <Story />
      </div>
    ),
  ],
};

export const FlexGridContainerVariants = () => (
  <div className="story-flex-grid-heading">Visual Example</div>
);

FlexGridContainerVariants.story = {
  name: 'Flex Grid Container',
};
