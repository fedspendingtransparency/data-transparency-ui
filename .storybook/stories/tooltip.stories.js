import React from 'react';
import { withKnobs, boolean, object } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import TooltipWrapper from '../../components/TooltipWrapper';
import TooltipComponent from '../../components/TooltipComponent';

export default {
  title: 'TooltipWrapper',
  component: TooltipWrapper,
  decorators: [withKnobs, withA11y],
  parameters: {
    a11y: {
      // ... axe options
      element: '.story__container', // optional selector which element to inspect
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
  }
};

const Tooltip = () => ( 
  <TooltipComponent title="An Example Tooltip">
    <React.Fragment>
      <p>Here are some random words serving the purpose of illustrating how the tooltip component works</p>
      <p>Its really pretty neat and easy to use. I think you are gonna like it a ton.</p>
      <p>You are welcome.</p>
      <ul>
        <li>Some List Item</li>
        <li>Some List Item</li>
        <li>Some List Item</li>
        <li>Some List Item</li>
      </ul>
      <p>More Paragraph</p>
    </React.Fragment>
  </TooltipComponent>
);

export const tooltipWrapper = () => (
  <div className="story__container tooltip-story">
    <TooltipWrapper
        icon="info"
        tooltipComponent={<Tooltip />}
        wide={boolean("wide", true)}
        left={boolean("left", true)}
        controlledProps={object("controlledTooltip", {
          isControlled: false,
          isVisible: false
        })} />
  </div>
);

tooltipWrapper.story = { name: 'Tooltip Wrapper' };
