import React from 'react';
import FiscalYearPicker from '../../components/FiscalYearPicker';

export default {
    title: 'FiscalYearPicker',
    component: FiscalYearPicker,
  };
  export const Default = (args) => <FiscalYearPicker {...args} />;
  export const Primary = Default.bind({});
  Primary.args = { backgroundColor: '#ff0'};
