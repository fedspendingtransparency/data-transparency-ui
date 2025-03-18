import CardHero from "../../components/cards/CardHero";
import FlexGridCol from "../../components/flexGrid/FlexGridCol";
import FlexGridRow from "../../components/flexGrid/FlexGridRow";
import React from "react";

export default {
    title: 'Card/CardHero',
    component: CardHero,
    tags: ['autodocs'],
};

const Template = (args) => (
  <FlexGridRow hasGutter gutterSize="lg">
    <FlexGridCol desktop={4} tablet={2} mobile={1} >
      <CardHero {...args}></CardHero>
    </FlexGridCol>
  </FlexGridRow>
);
export const Default = Template.bind({});      