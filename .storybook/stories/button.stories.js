import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import { Button } from '../../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const defaultButton = () => (
  <div className="button-story__container">
    <Button text={text("text", "Click Yo Self Always")} />
  </div>
);

defaultButton.story = { name: 'Test One, Two, Three' };