import React from 'react';
import FiscalYearPicker from '../../components/FiscalYearPicker';

export default {
    title: 'Pickers/Fiscal Year Picker',
    component: FiscalYearPicker,
    tags: ['autodocs'],
  };
  
  export const Default = (args) => <FiscalYearPicker {...args} />;
  export const Primary = Default.bind({});
  Primary.args = { backgroundColor: '#ff0'};
