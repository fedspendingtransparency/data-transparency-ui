import React from 'react';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';
import FlexGridContainer from "../../components/flexGrid/FlexGridContainer"
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

export const Default = () => (
  <>
  <div className="story-flex-grid-heading">Visual Example</div>
  <FlexGridRow>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column content</div>
    </FlexGridCol>
  </FlexGridRow>
</>
) 
export const Gutters = () => (
<>
<div className="story-flex-grid-heading">Visual Example</div>
<FlexGridContainer>
  <FlexGridRow hasGutter={true}>
      <FlexGridCol>
            <div>column content</div>
        </FlexGridCol>
        <FlexGridCol>
            <div>column content</div>
          </FlexGridCol>
          <FlexGridCol>
              <div>column content</div>
          </FlexGridCol>
      </FlexGridRow>
  </FlexGridContainer>
</>
);
export const GutterSizing = () => (
<>
<div className="story-flex-grid-heading">Visual Example</div>
<FlexGridContainer>
            <FlexGridRow hasGutter={true} gutterSize="sm">
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
            </FlexGridRow>
            <FlexGridRow hasGutter={true}>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
            </FlexGridRow>
            <FlexGridRow hasGutter={true} gutterSize="lg">
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
            </FlexGridRow>
        </FlexGridContainer>
</>
);

GutterSizing.story = {
  name: 'Gutter sizing',
};

export const KnobsExample = () => (
<>
<div className="story-flex-grid-heading">Visual Example</div>
<FlexGridContainer>
            <FlexGridRow
                hasGutter
                gutterSize>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
                <FlexGridCol>
                    <div>column content</div>
                </FlexGridCol>
            </FlexGridRow>
        </FlexGridContainer>
</>
);

//need to get the properties to work correctly; 
KnobsExample.story = {
  name: 'Knobs example',
  gutterSize: 'lg',
  hasGutter: true,
};
