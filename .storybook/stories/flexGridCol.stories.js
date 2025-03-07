import React from 'react';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';

export default {
  title: 'Flex Grid/Flex Grid Col',
  component: FlexGridCol,
  decorators: [
    (Story) => (
      <div className="story-flex-grid-col">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => (
  <FlexGridRow>
     <FlexGridCol>
      <div>column</div>
    </FlexGridCol>
    <FlexGridCol {...args}>
    </FlexGridCol>
    <FlexGridCol >
      <div>column</div>
    </FlexGridCol>
  </FlexGridRow>
)

export const EqualWidth = Template.bind({});
EqualWidth.args = {
  children: (
    <>
      <div>column</div>
    </>
  )
}

export const SettingOneColumnWidth = Template.bind({});
SettingOneColumnWidth.args = {
  mobile: 6,
  children: (
    <div>mobile:column-6</div>
  )
}

export const VariableWidthContent = Template.bind({});
VariableWidthContent.args = {
  width: "auto",
  children: (
    <div>column-auto</div>
  )
}

export const SameAtAllBreakpoints = () => (
  <FlexGridRow>
    <FlexGridCol>
      <div>column</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>column</div>
    </FlexGridCol>
  </FlexGridRow>
);

SameAtAllBreakpoints.story = {
  name: 'Same at all breakpoints',
};

export const StackedColumnsAtNarrowWidths = () => (
  <FlexGridRow>
    <FlexGridCol tablet="fill">
      <div>tablet:column</div>
    </FlexGridCol>
    <FlexGridCol tablet="fill">
      <div>tablet:column</div>
    </FlexGridCol>
    <FlexGridCol tablet="fill">
      <div>tablet:column</div>
    </FlexGridCol>
  </FlexGridRow>
);

StackedColumnsAtNarrowWidths.story = {
  name: 'Stacked columns at narrow widths',
};

export const MixAndMatch = () => (
  <FlexGridRow>
    <FlexGridCol tablet={8}>
      <div>tablet:column-8</div>
    </FlexGridCol>
    <FlexGridCol width={6} tablet={4}>
      <div>column-6 tablet:column-4</div>
    </FlexGridCol>
  </FlexGridRow>
);

MixAndMatch.story = {
  name: 'Mix and match',
};

export const ColumnWrapping = () => (
  <FlexGridRow>
    <FlexGridCol width={8}>
      <div>column-8</div>
    </FlexGridCol>
    <FlexGridCol width={3}>
      <div>column-3</div>
    </FlexGridCol>
    <FlexGridCol width={5}>
      <div>column-5</div>
    </FlexGridCol>
  </FlexGridRow>
);

ColumnWrapping.story = {
  name: 'Column wrapping',
};

export const OrderClasses = () => (
  <FlexGridRow>
    <FlexGridCol
      tablet={{
        span: 4,
        order: 'last',
      }}
    >
      <div>first, but last</div>
    </FlexGridCol>
    <FlexGridCol>
      <div>second, but unordered</div>
    </FlexGridCol>
    <FlexGridCol
      tablet={{
        span: 4,
        order: 'first',
      }}
    >
      <div>third, but first</div>
    </FlexGridCol>
  </FlexGridRow>
);

OrderClasses.story = {
  name: 'Order classes',
};

export const OffsettingColumns = () => (
  <FlexGridRow>
    <FlexGridCol
      width={{
        span: 8,
        offset: 4,
      }}
    >
      <div>column-8 offset-4</div>
    </FlexGridCol>
  </FlexGridRow>
);

OffsettingColumns.story = {
  name: 'Offsetting columns',
};
