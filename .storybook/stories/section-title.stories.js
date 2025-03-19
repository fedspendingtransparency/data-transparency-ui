import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionWrapper from '../../components/SectionWrapper';
import ComingSoon from '../../components/messages/ComingSoon';
import { ExampleTooltip } from '../misc';

export default {
  title: 'Section Title',
  component: SectionWrapper,
  tags: ['autodocs'],
};

const Template = (args) => (
  <SectionWrapper {...args}>
    <ComingSoon/>
  </SectionWrapper>
)
export const CollapsibleSection = Template.bind({});
CollapsibleSection.args = {
  title: "Award",
  isCollapsible: true,
  overLine: "Award Spending",
  icon: <FontAwesomeIcon icon="map-marker" size="3px" color='#555'/>,
  titleTooltip: {
    component: <ExampleTooltip/>,
    props: {}
  },
  descTooltip: {
    component: <ExampleTooltip />,
    props: {},
  }
}

export const AlwaysExpanded = Template.bind({});
AlwaysExpanded.args = {
  title: "Award",
  isCollapsible: false,
  overLine: "Award Spending",
  icon: <FontAwesomeIcon icon="map-marker" size="3px" color='#555'/>,
  titleTooltip: {
    component: <ExampleTooltip/>,
    props: {}
  },
  descTooltip: {
    component: <ExampleTooltip />,
    props: {},
  }
}
