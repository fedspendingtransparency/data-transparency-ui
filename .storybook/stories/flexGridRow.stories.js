import React from 'react';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';
import FlexGridContainer from "../../components/flexGrid/FlexGridContainer"
export default {
  title: 'Flex Grid/Flex Grid Row',
  component: FlexGridRow,
  tags: ['autodocs'],
};

const Template = (args) => (
<div className="story-flex-grid">
    <div className="story-flex-grid-heading">Visual Example</div>
    <FlexGridRow {...args} />
  </div>
)

const WithContainerTemplate = (args) => (
  <div className="story-flex-grid">
  <div className="story-flex-grid-heading">Visual Example</div>
  <FlexGridContainer>
  <FlexGridRow {...args} />
  </FlexGridContainer>
</div>
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