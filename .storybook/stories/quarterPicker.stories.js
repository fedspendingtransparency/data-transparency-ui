import React from 'react';
import QuarterPicker from '../../components/quarterPicker/QuarterPicker';
import { QuarterPickerWrapper, QuarterPickerWithPeriods, QuarterPickerCumulative } from '../misc';

export default {
  title: 'Quarter Picker',
  component: QuarterPicker,
};

export const Default = () => (
  <QuarterPickerWrapper>
    <QuarterPicker disabledQuarters={[]} />
  </QuarterPickerWrapper>
);

export const CumulativePicker = () => (
  <QuarterPickerCumulative>
    <QuarterPicker disabledQuarters={[]} isCumulative />
  </QuarterPickerCumulative>
);

CumulativePicker.story = {
  name: 'Cumulative Picker',
};

export const WPeriods = () => (
  <div className="story__container quarter-picker-story">
    <QuarterPickerWithPeriods>
      <QuarterPicker disabledPeriods={['10', '11', '12']} showPeriods />
    </QuarterPickerWithPeriods>
  </div>
);

WPeriods.story = {
  name: 'w/ Periods',
};
