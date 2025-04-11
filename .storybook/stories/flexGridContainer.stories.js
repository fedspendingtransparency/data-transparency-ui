import React from 'react';
import FlexGridContainer from '../../components/flexGrid/FlexGridContainer';


export default {
  title: 'Layout/Flex Grid/Flex Grid Container',
  component: FlexGridContainer,
  tags: ['autodocs'],
};

export const DefaultFlexGridContainer = (args) => (
  <div className="story-flex-grid">
    <div className="story-flex-grid-heading">Visual Example</div>
    <FlexGridContainer {...args}>
      container
  </FlexGridContainer>
  </div>
)

DefaultFlexGridContainer.args = {
  className: "",
}
