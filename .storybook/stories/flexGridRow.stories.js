import React from 'react';
import { boolean, object, text, number, array, select } from '@storybook/addon-knobs';
import FlexGridContainer from '../../components/flexGrid/FlexGridContainer';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';

export default {
  title: 'Components/Flex Grid/Flex Grid Row',
  component: FlexGridRow,
  decorators: [
    (Story) => (
      <div className="story-flex-grid">
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <div className="story-flex-grid-heading">Visual Example</div>;
export const Gutters = () => <div className="story-flex-grid-heading">Visual Example</div>;
export const GutterSizing = () => <div className="story-flex-grid-heading">Visual Example</div>;

GutterSizing.story = {
  name: 'Gutter sizing',
};

export const KnobsExample = () => <div className="story-flex-grid-heading">Visual Example</div>;

KnobsExample.story = {
  name: 'Knobs example',
};
