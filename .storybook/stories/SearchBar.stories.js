import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import SearchBar from '../../components/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

//need to update to be better practice
export const Default = () => (
  <SearchBar
    setQuery={(searchTerm) => console.log(searchTerm)}
    minChars={number('minChars', 2)}
    isDisabled={boolean('isDisabled', false)}
    throttleOnChange={number('throttleOnChange', 500)}
    inputTitle={text('inputTitle', 'Search Input')}
    placeholder="Placeholder"
  />
);
