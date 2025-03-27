import CardButton from "../../components/cards/CardButton";
import FlexGridCol from "../../components/flexGrid/FlexGridCol";
import FlexGridRow from "../../components/flexGrid/FlexGridRow";
import React from "react";

export default {
    title: 'Card/CardButton',
    component: CardButton,
    tags: ['autodocs', '!dev'],
};

const Template = (args) => (
  <FlexGridRow hasGutter gutterSize="lg">
    <FlexGridCol desktop={4} tablet={2} mobile={1} >
      <CardButton {...args}></CardButton>
    </FlexGridCol>
  </FlexGridRow>
);

export const Default = Template.bind({});