import React from 'react';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';
import FlexGridContainer from "../../components/flexGrid/FlexGridContainer"
import { knob } from '@storybook/addon-knobs';
export default {
  title: 'Flex Grid/Flex Grid Row',
  component: FlexGridRow,
  decorators: [
    (Story) => (
      <div className="story-flex-grid">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => (
  <>
    <div className="story-flex-grid-heading">Visual Example</div>
    <FlexGridRow {...args} />
  </>
)

const WithContainerTemplate = (args) => (
  <>
  <div className="story-flex-grid-heading">Visual Example</div>
  <FlexGridContainer>
  <FlexGridRow {...args} />
  </FlexGridContainer>
</>
)

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
     <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    </>
  )
}

export const Gutters = WithContainerTemplate.bind({});
Gutters.args = {
  hasGutter: true,
  children: (
    <>
     <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    </>
  )
}

export const SmallGutter = WithContainerTemplate.bind({});
SmallGutter.args = {
  hasGutter: true,
  gutterSize: "sm",
  children: (
    <>
     <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    </>
  )
}

export const LargeGutter = WithContainerTemplate.bind({});
LargeGutter.args = {
  hasGutter: true,
  gutterSize: "lg",
  children: (
    <>
     <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    </>
  )
}

export const KnobExample = WithContainerTemplate.bind({})
KnobExample.args = {
  children: (
    <>
     <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    </>
  )
}