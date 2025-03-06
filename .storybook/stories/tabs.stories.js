import React from 'react';
import { boolean, object, text, number, array } from '@storybook/addon-knobs';
import { TabsWrapper, TabsTooltip, TabsWrapperShowTooltip } from '../misc';
import Tabs from '../../components/tabs/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const TabsWithScroll = () => (
  <TabsWrapper>
    <Tabs
      types={[
        {
          internal: 'name',
          label: 'Names',
          count: 22,
        },
        {
          internal: 'dates',
          label: 'Dates',
          count: 33,
        },
        {
          internal: 'cars',
          label: 'Cars',
        },
        {
          internal: 'coffeemugs',
          label: 'Coffee Mugs',
        },
        {
          internal: 'colorado',
          label: 'Colorado',
        },
        {
          internal: 'whistler',
          label: 'Whistler',
          disabled: true,
        },
        {
          internal: 'yellowstone',
          label: 'Yellowstone',
          count: 22,
        },
        {
          internal: 'washingtondc',
          label: 'Washington D.C.',
          count: 33,
        },
        {
          internal: 'blue',
          label: 'Blue',
        },
        {
          internal: 'purple',
          label: 'Purple',
        },
        {
          internal: 'dinnerware',
          label: 'Dinnerware',
        },
        {
          internal: 'cookware',
          label: 'Cookware',
        },
      ]}
    />
  </TabsWrapper>
);

TabsWithScroll.story = {
  name: 'Tabs with Scroll',
};

export const TablessStyle = () => (
  <TabsWrapper>
    <Tabs
      tablessStyle
      types={[
        {
          internal: 'name',
          label: 'Names',
          count: 22,
        },
        {
          internal: 'dates',
          label: 'Dates',
          count: 33,
        },
        {
          internal: 'cars',
          label: 'Cars',
          disabled: true,
        },
        {
          internal: 'coffeemugs',
          label: 'Coffee Mugs',
        },
        {
          internal: 'colorado',
          label: 'Colorado',
        },
        {
          internal: 'whistler',
          label: 'Whistler',
        },
      ]}
    />
  </TabsWrapper>
);

TablessStyle.story = {
  name: 'Tabless Style',
};
