import React from 'react';
import SearchBar from '../../components/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  minChars: 5,
  isDisabled: false,
  throttleOnChange: 250,
  inputTitle: "Search Input",
  placeholder: "Placeholder",
}