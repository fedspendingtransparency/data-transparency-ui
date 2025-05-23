import CardHero from "../../components/cards/CardHero";
import FlexGridCol from "../../components/flexGrid/FlexGridCol";
import FlexGridRow from "../../components/flexGrid/FlexGridRow";
import React from "react";

export default {
    title: 'General/Cards/CardHero',
    component: CardHero,
    tags: ['autodocs', '!dev'],
};

const Template = (args) => (
  <FlexGridRow hasGutter gutterSize="lg">
    <FlexGridCol desktop={4} tablet={2} mobile={1} >
      <CardHero {...args}></CardHero>
    </FlexGridCol>
  </FlexGridRow>
);
export const Default = Template.bind({});