import React from 'react';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { withActions, actions } from '@storybook/addon-actions';

import TooltipWrapper from '../../components/TooltipWrapper';
import { TooltipComponent } from '../../components/TooltipComponent';

export default {
  title: 'Tooltip',
  component: TooltipWrapper,
  decorators: [withKnobs, withA11y, withActions('onClick')],
  parameters: {
    a11y: {
      // ... axe options
      element: '.tooltip-story__container', // optional selector which element to inspect
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
  }
};

export const tooltipWrapper = () => (
  <div className="story__container tooltip-story">
    <TooltipWrapper
        icon="info"
        tooltipComponent={<TooltipComponent />}
        wide={boolean("wide", true)}
        left={boolean("left", true)} />
  </div>
);

tooltipWrapper.story = { name: 'TooltipWrapper' };
