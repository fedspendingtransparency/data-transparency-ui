import React from 'react';
import FlexGridContainer from '../../components/flexGrid/FlexGridContainer';


export default {
  title: 'Flex Grid/Flex Grid Container',
  component: FlexGridContainer,
  decorators: [
    (Story) => (
      <div className="story-flex-grid">
        <Story />
      </div>
    ),
  ],
};

export const DefaultFlexGridContainer = (args) => (
  <>
    <div className="story-flex-grid-heading"> Visual Example</div>
    <FlexGridContainer {...args}>
      container
  </FlexGridContainer>
  </>
)

DefaultFlexGridContainer.args = {
  className: "",
}
