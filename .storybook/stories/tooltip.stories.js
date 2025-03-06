import React from 'react';
import { boolean, object, text } from '@storybook/addon-knobs';
import TooltipWrapper from '../../components/infoTooltip/TooltipWrapper';
import TooltipComponent from '../../components/infoTooltip/TooltipComponent';
import { Tooltip } from '../misc';

export default {
  title: 'Tooltip Wrapper',
  component: TooltipWrapper,
};

export const Default = () => (
  <div className="story__container tooltip-story">
    <TooltipWrapper
      icon="info"
      tooltipComponent={<Tooltip />}
      wide={boolean('wide', false)}
      tooltipPosition={text('tooltipPosition', 'left')}
      controlledProps={object('controlledTooltip', {
        isControlled: false,
        isVisible: false,
      })}
    />
  </div>
);

export const SmartTooltipLeft = () => (
  <div className="story__container tooltip-story smart-tooltip-left">
    <TooltipWrapper
      icon="info"
      tooltipComponent={<Tooltip />}
      wide={boolean('wide', true)}
      tooltipPosition={text('tooltipPosition')}
      controlledProps={object('controlledTooltip', {
        isControlled: false,
        isVisible: false,
      })}
    />
  </div>
);

SmartTooltipLeft.story = {
  name: 'Smart Tooltip (left)',
};

export const SmartTooltipRight = () => (
  <div className="story__container tooltip-story smart-tooltip-right">
    <TooltipWrapper
      icon="info"
      tooltipComponent={<Tooltip />}
      wide={boolean('wide', true)}
      tooltipPosition={text('tooltipPosition', 'left')}
      controlledProps={object('controlledTooltip', {
        isControlled: false,
        isVisible: false,
      })}
    />
  </div>
);

SmartTooltipRight.story = {
  name: 'Smart Tooltip (right)',
};
