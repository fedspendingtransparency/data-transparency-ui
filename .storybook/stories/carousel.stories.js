import React from 'react';
import { boolean, object, text, number, array } from '@storybook/addon-knobs';
import { TabsWrapper, TabsTooltip, TabsWrapperShowTooltip } from '../misc';
import Carousel from '../../components/Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Default = () => (
  <Carousel
    items={[
      <div>
        <img src="./img/carouselImageOne.png" />
      </div>,
      <div>
        <img src="./img/carouselImageTwo.png" />
      </div>,
      <div>
        <img src="./img/carouselImageThree.png" />
      </div>,
    ]}
  />
);
