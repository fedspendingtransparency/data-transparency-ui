import FlexGridCol from "../../components/flexGrid/FlexGridCol";
import FlexGridRow from "../../components/flexGrid/FlexGridRow";
import CardContainer from "../../components/cards/CardContainer";
import CardBody from "../../components/cards/CardBody";
import CardButton from "../../components/cards/CardButton";
import CardHero from "../../components/cards/CardHero";
import React from "react";

const imageLink = "./img/top-bowie-state-combined-image.svg";
const dummyText =
  "Pudding jelly beans tiramisu bear claw apple pie liquorice. Jelly beans macaroon wafer topping gummies. Shortbread tiramisu lollipop topping apple pie tart pie chocolate. Tart croissant cake danish wafer icing sugar plum.";

export default {
  title: "Card",
  component: CardContainer,
  subcomponent: { CardBody },
  argTypes: {
    variant: {
      options: ["elevated", "outline", ""],
      control: { type: "radio" },
    },
  },
};
const Template = (args) => (
  <FlexGridRow hasGutter gutterSize={32}>
    <FlexGridCol>
      <CardContainer {...args}></CardContainer>
    </FlexGridCol>
  </FlexGridRow>
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
        <CardButton text="Search" variant="primary"></CardButton>
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
          variant="hero__button--action"
          link="/search"
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
      <CardHero variant="expanded" img={imageLink} />
      <CardBody overline="Resources" headline="Learn how to use  our app">
        <CardButton
          text="Search"
          variant="hero__button--action"
          link="/search"
        />
      </CardBody>
    </>
  ),
};

export const HeroFillWithImage = Template.bind({});
HeroFillWithImage.args = {
    children: (
        <>
            <CardHero variant="expanded" fill="#1a4480" img={imageLink} />
            <CardBody overline="Resources" headline="Learn how to use  our app">
            <CardButton
              text="Search"
              variant="hero__button--action"
              link="/search"
            />
          </CardBody>
        </>
      ),}

//NEED TO FIGURE OUT WHY THE SIZE DOES NOT CHANGE
// export const Small = Template.bind({});
// Small.args = {
//     size: 'sm',
//     children: <CardBody><div>{dummyText}</div></CardBody>
// }

// export const Medium = Template.bind({});
// Medium.args = {
//     size: 'md',
//     children: <CardBody><div>{dummyText}</div></CardBody>
// }

// export const Large = Template.bind({});
// Large.args = {
//     size: 'lg',
//     children: <CardBody><div>{dummyText}</div></CardBody>
// }
