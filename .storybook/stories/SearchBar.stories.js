import SearchBar from '../../components/SearchBar';
import { within, userEvent, expect } from 'storybook/test';

export default {
  title: 'Tables/SearchBar',
  component: SearchBar,
  tags: ['autodocs']
};

export const Default = {
  play: async({canvasElement, step}) => {
    const canvas = within(canvasElement);
    await step('Enter text & submit', async () => {
      await userEvent.type(canvas.getByTitle("Search Input"), 'hello', {delay: 500});
      await userEvent.click(canvas.getByTitle("Submit Search Button"));
      expect(canvas.getByTitle("Remove Input Value Button")).toBeTruthy();
    })

    await step('Clear submitted text', async() => {
      await userEvent.click(canvas.getByTitle("Remove Input Value Button"));
      expect(canvas.getByTitle("Submit Search Button")).toBeTruthy();
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