import React from 'react';
import SearchBar from '../../components/SearchBar';
import { within, userEvent, fn, expect } from '@storybook/test';

export default {
  title: 'SearchBar',
  component: SearchBar,
  tags: ['autodocs']
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Default = {
  play: async({canvasElement, step}) => {
    const canvas = within(canvasElement);
    await step('Enter text & clear search', async () => {
      await userEvent.type(canvas.getByTitle("Search Input"), 'hello');
      await userEvent.click(canvas.getByTitle("Submit Search Button"));
      await sleep(3500)
      await userEvent.click(canvas.getByTitle("Remove Input Value Button"));
    })

    await step('Text too short', async () => {
      await userEvent.type(canvas.getByTitle("Search Input"), 'hi');
      expect(canvas.getByTitle("Submit Search Button")).toBeDisabled();
    })
 

  },
  args: {
    minChars: 5,
    isDisabled: false,
    throttleOnChange: 250,
    inputTitle: "Search Input",
    placeholder: "Placeholder",
    onSearch: () => {}
  }
}