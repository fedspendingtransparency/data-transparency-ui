import FlexGridCol from "../../components/flexGrid/FlexGridCol";
import FlexGridRow from "../../components/flexGrid/FlexGridRow";
import CardContainer from "../../components/cards/CardContainer";
import CardBody from "../../components/cards/CardBody";
import CardButton from "../../components/cards/CardButton";
import CardHero from "../../components/cards/CardHero";
import React from "react";
import { tags } from "../preview";

const imageLink = "../../assets/img/top-bowie-state-combined-image.svg";
const image = {
  src: imageLink,
  alt: 'card image',
};
const dummyText =
  "Pudding jelly beans tiramisu bear claw apple pie liquorice. Jelly beans macaroon wafer topping gummies. Shortbread tiramisu lollipop topping apple pie tart pie chocolate. Tart croissant cake danish wafer icing sugar plum.";

export default {
  title: "Card",
  component: CardContainer,
  subcomponent: { CardBody },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ["elevated", "outline", ""],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => (
  <FlexGridRow hasGutter gutterSize="lg">
    <FlexGridCol desktop={4} tablet={2} mobile={1} >
      <CardContainer {...args}></CardContainer>
    </FlexGridCol>
  </FlexGridRow>
);

const HeroTemplate = (args) => (
  <CardHero fill="#1a4480" />
);
const BodyTemplate = (args) => (
  <CardBody>
    <div>{dummyText}</div>
  </CardBody>
);
const ButtonTemplate = (args) => (
  <CardButton
    text="Search"
    variant="secondary"
    link="/search"
    backgroundColor="light"
    buttonSize="sm"
    textAlignment="center"
  />
);

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: (
    <CardBody>
      <div>{dummyText}</div>
    </CardBody>
  ),
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: "elevated",
  children: (
    <CardBody>
      <div>{dummyText}</div>
    </CardBody>
  ),
};

export const Fill = Template.bind({});
Fill.args = {
  variant: "outline",
  fill: "#1a4480",
  children: (
    <CardBody>
      <div>{dummyText}</div>
    </CardBody>
  ),
};

export const WithCardButton = Template.bind({});
WithCardButton.args = {
  variant: "elevated",
  children: (
    <>
      <CardBody
        overline="Search"
        headline="Find details here"
        text="Search spending in your community"
      >
        <CardButton
          text="Search"
          variant="secondary"
          link="/search"
          backgroundColor="light"
          buttonSize="sm"
          textAlignment="center"
        />
      </CardBody>
    </>
  ),
};

export const HeroWithBarFill = Template.bind({});
HeroWithBarFill.args = {
  children: (
    <>
      <CardHero fill="#1a4480" />
      <CardBody overline="Resources" headline="Learn how to use  our app">
        <CardButton
          text="Search"
          variant="secondary"
          link="/search"
          backgroundColor="light"
          buttonSize="sm"
          textAlignment="center"
        />
      </CardBody>
    </>
  ),
};

export const HeroWithImage = Template.bind({});
HeroWithImage.args = {
  variant: 'elevated',
  children: (
    <>
      <CardHero variant="expanded" img={image.src} />
      <CardBody overline="Resources" headline="Learn how to use  our app">
        <CardButton
          text="Search"
          variant="secondary"
          link="/search"
          backgroundColor="light"
          buttonSize="sm"
          textAlignment="center"
        />
      </CardBody>
    </>
  ),
};

export const HeroFillWithImage = Template.bind({});
HeroFillWithImage.args = {
  children: (
    <>
      <CardHero variant="expanded" fill="#1a4480" img={image.src} />
      <CardBody overline="Resources" headline="Learn how to use our app">
        <CardButton
          text="Search"
          variant="secondary"
          link="/search"
          backgroundColor="light"
          buttonSize="sm"
          textAlignment="center"
        />
      </CardBody>
    </>
  ),
}

export const hero = HeroTemplate.bind({});
export const Default = Template.bind({});      