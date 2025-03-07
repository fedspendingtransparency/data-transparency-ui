import React from 'react';
import QuarterPicker from '../../components/quarterPicker/QuarterPicker';
import { QuarterPickerWrapper, QuarterPickerWithPeriods, QuarterPickerCumulative } from '../misc';

export default {
  title: 'Quarter Picker',
  component: QuarterPicker,
};

export const Default = (args) => (
  <QuarterPickerWrapper>
    <QuarterPicker {...args} disabledQuarters={[]} />
  </QuarterPickerWrapper>
);

export const CumulativePicker = (args) => (
  <QuarterPickerCumulative>
    <QuarterPicker {...args} />
  </QuarterPickerCumulative>
)

CumulativePicker.args = {
  disabledQuarters: [],
  isCumulative: true
}

export const WPeriods = (args) => (
  <QuarterPickerWithPeriods>
    <QuarterPicker {...args} />
  </QuarterPickerWithPeriods>
)

WPeriods.args = {
  disabledQuarters: [],
  isCumulative: true,
  disabledPeriods:['10','11','12'],
  showPeriods: true
}
