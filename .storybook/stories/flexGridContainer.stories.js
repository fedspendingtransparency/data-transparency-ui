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

export const FlexGridContainerVariants = () => (
  <>
  <div className="story-flex-grid-heading">Visual Example</div>
  <FlexGridContainer>
      container
  </FlexGridContainer>
  </>
);

//add the class name back into variant
FlexGridContainerVariants.story = {
  name: 'Flex Grid Container',
};
