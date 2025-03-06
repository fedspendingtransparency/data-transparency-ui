import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionWrapper from '../../components/SectionWrapper';
import ComingSoon from '../../components/messages/ComingSoon';
import { ExampleTooltip } from '../misc';

export default {
  title: 'Section Title',
  component: SectionWrapper,
};

export const CollapsibleSection = () => (
  <SectionWrapper
    title="Award"
    isCollapsible
    overLine="Award Spending"
    icon={<FontAwesomeIcon icon="map-marker" size="3x" color="#555" />}
    titleTooltip={{
      component: <ExampleTooltip />,
      props: {},
    }}
    descTooltip={{
      component: <ExampleTooltip />,
      props: {},
    }}
    description={
      <span className="usda-section-title__desc">
        This section covers <strong>Award Spending</strong>
      </span>
    }
  >
    <ComingSoon />
  </SectionWrapper>
);

CollapsibleSection.story = {
  name: 'Collapsible Section',
};

export const AlwaysExpanded = () => (
  <SectionWrapper
    title="Award"
    overLine="Award Spending"
    icon={<FontAwesomeIcon icon="map-marker" size="3x" />}
    titleTooltip={{
      component: <ExampleTooltip />,
      props: {},
    }}
    descTooltip={{
      component: <ExampleTooltip />,
      props: {},
    }}
    description={
      <span className="usda-section-title__desc">
        This section covers <strong>Award Spending</strong>
      </span>
    }
  >
    <ComingSoon />
  </SectionWrapper>
);

AlwaysExpanded.story = {
  name: 'Always Expanded',
};
