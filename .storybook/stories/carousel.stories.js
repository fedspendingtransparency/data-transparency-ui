import React from 'react';
import Carousel from '../../components/Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

const Template = (args) => (
  <Carousel {...args} />
)

export const DefaultCarousel =  Template.bind({});
DefaultCarousel.args = {
  items: [
          <div>
        <img src="./img/carouselImageOne.png" />
      </div>,
      <div>
        <img src="./img/carouselImageTwo.png" />
      </div>,
      <div>
        <img src="./img/carouselImageThree.png" />
      </div>
  ]
}