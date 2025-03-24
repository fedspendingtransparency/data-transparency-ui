import React from 'react';
import Carousel from '../../components/Carousel';
import imageOne from '../../assets/img/carouselImageOne.png'
import imageTwo from '../../assets/img/carouselImageTwo.png'
import imageThree from '../../assets/img/carouselImageThree.png'

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
        <img src={imageOne} />
      </div>,
      <div>
        <img src={imageTwo} />
      </div>,
      <div>
        <img src={imageThree} />
      </div>
  ]
}