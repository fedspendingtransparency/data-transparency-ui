import CardBody from "../../components/cards/CardBody";
import FlexGridCol from "../../components/flexGrid/FlexGridCol";
import FlexGridRow from "../../components/flexGrid/FlexGridRow";
import React from "react";

export default {
    title: 'Card/CardBody',
    component: CardBody,
    tags: ['autodocs'],
};

const Template = (args) => (
  <FlexGridRow hasGutter gutterSize="lg">
    <FlexGridCol desktop={4} tablet={2} mobile={1} >
      <CardBody {...args}></CardBody>
    </FlexGridCol>
  </FlexGridRow>
);
export const Default = Template.bind({});      