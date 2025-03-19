import React from 'react';
import TooltipWrapper from '../../components/infoTooltip/TooltipWrapper';
import { Tooltip } from '../misc';

export default {
  title: 'Tooltip Wrapper',
  component: TooltipWrapper,
  tags: ['autodocs']
};

const Template = (args) => (
  <div className={"story__container tooltip-story"} >
    <TooltipWrapper {...args}/>
  </div>
)

const LeftTemplate = (args) => (
  <div className={"story__container tooltip-story smart-tooltip-left"} >
    <TooltipWrapper {...args}/>
  </div>
)
const RightTemplate = (args) => (
  <div className={"story__container tooltip-story smart-tooltip-right"} >
    <TooltipWrapper {...args}/>
  </div>
)

export const Default = Template.bind({});
Default.args = {
  icon: "info",
  tooltipComponent: <Tooltip />,
  wide: false,
  tooltipPosition: "left",
  controlledProps: {
    isControlled: false,
    isVisible: false
  }
}


export const SmartTooltipLeft = LeftTemplate.bind({});
SmartTooltipLeft.args = {
  icon: "info",
  tooltipComponent: <Tooltip />,
  wide: true,
  tooltipPosition: "left",
  controlledProps: {
    isControlled: false,
    isVisible: false
  }
}

export const SmartTooltipRight = RightTemplate.bind({});
SmartTooltipRight.args = {
  icon: "info",
  tooltipComponent: <Tooltip />,
  wide: true,
  tooltipPosition: "right",
  controlledProps: {
    isControlled: false,
    isVisible: false
  }
}