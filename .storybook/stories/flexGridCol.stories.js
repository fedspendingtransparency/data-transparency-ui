import React from 'react';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';
import FlexGridCol from '../../components/flexGrid/FlexGridCol';

export default {
  title: 'Layout/Flex Grid/Flex Grid Col',
  component: FlexGridCol,
  tags: ['autodocs'],
};

const OneColumTemplate = (args) => (
  <div className="story-flex-grid-col">
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
  </div> 
)

const WidthTemplate = (args) => (
  <div className="story-flex-grid-col">
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
  <FlexGridRow>
    <FlexGridCol {...args}/>
    <FlexGridCol width={4}>
      <div>column-4</div>
    </FlexGridCol>
  </FlexGridRow>
  </div>
)

const offsetTemplate = (args) => (
  <div className="story-flex-grid-col">
    <FlexGridRow>
      <FlexGridCol width={{span: 8, offset: 4}}>
        <div>colum-8 offset</div>
      </FlexGridCol>
    </FlexGridRow>
    <FlexGridRow>
      <FlexGridCol tablet={4}>
        <div>tablet:column-4</div>
      </FlexGridCol>
      <FlexGridCol {...args} />
    </FlexGridRow>
  </div>
)

const ApplyToMultipleComponentTemplate = (args) => (
  <div className="story-flex-grid-col">
  <FlexGridRow>
    <FlexGridCol {...args} />
    <FlexGridCol {...args} />
    <FlexGridCol {...args} />
  </FlexGridRow>
  <FlexGridRow>
      <FlexGridCol tablet={8}>
        <div>tablet:column-8</div>
      </FlexGridCol>
      <FlexGridCol tablet={4}>
        <div>tablet:column-4</div>
      </FlexGridCol>
    </FlexGridRow>
</div>
)

const OrderTemplate= (args)=> (
  <div className="story-flex-grid-col">
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
    <FlexGridCol {...args} />
  </FlexGridRow>
  </div>
)

const StoryTemplate = (args) => (
  <div className="story-flex-grid-col" {...args} />
 )

export const EqualWidth = OneColumTemplate.bind({});
EqualWidth.args = {
  children: (
    <>
      <div>column</div>
    </>
  )
}

export const SettingOneColumnWidth = OneColumTemplate.bind({});
SettingOneColumnWidth.args = {
  mobile: 6,
  children: (
    <div>mobile:column-6</div>
  )
}

export const VariableWidthContent = OneColumTemplate.bind({});
VariableWidthContent.args = {
  width: "auto",
  children: (
    <div>column-auto</div>
  )
}

export const SameBreakpoint = WidthTemplate.bind({});
SameBreakpoint.args = {
  width: 8,
  children: (
    <>
      <div>column-8</div>
    </>
  )
}

export const OffsetColumn = offsetTemplate.bind({});
OffsetColumn.args = {
  tablet: {span:4, offset:4},
  children: (
    <div>tablet:column-10 tablet:offset-2</div>
  )
}

export const NarrowWidth = ApplyToMultipleComponentTemplate.bind({});
NarrowWidth.args = {
  tablet: "fill",
  children: (
    <div>
      tablet:column
    </div>
  )
}

export const mix = StoryTemplate.bind({});
mix.args = {
  children: (
    <>
   <FlexGridRow>
            <FlexGridCol tablet={8}>
                <div>tablet:column-8</div>
            </FlexGridCol>
            <FlexGridCol width={6} tablet={4}>
                <div>column-6 tablet:column-4</div>
            </FlexGridCol>
        </FlexGridRow>
        <FlexGridRow>
            <FlexGridCol width={6} tablet={4}>
                <div>column-6 tablet:column-4</div>
            </FlexGridCol>
            <FlexGridCol width={6} tablet={4}>
                <div>column-6 tablet:column-4</div>
            </FlexGridCol>
            <FlexGridCol width={6} tablet={4}>
                <div>column-6 tablet:column-4</div>
            </FlexGridCol>
        </FlexGridRow>
        <FlexGridRow>
            <FlexGridCol width={6}>
                <div>column-6</div>
            </FlexGridCol>
            <FlexGridCol width={6}>
                <div>column-6</div>
            </FlexGridCol>
        </FlexGridRow>
    </>
  )
}

export const ColumnWrapping = WidthTemplate.bind({});
ColumnWrapping.args = {
  width: 9,
  children: (
    <div>column-9</div>
  )
}

export const OrderClasses = OrderTemplate.bind({});
OrderClasses.args = {
  tablet:{
    span: 4,
    order: 'first',
  },
  children: (
  <div>third, but first</div>
  )
}
