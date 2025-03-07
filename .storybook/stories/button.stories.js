import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import FlexGridRow from '../../components/flexGrid/FlexGridRow';

export default {
  title: 'Buttons',
  component: Button,
};

const Template = (args) => (
  <FlexGridRow width={3} desktop={3} hasGutter={true} gutterSize={32} >
    <Button {...args}/>
  </FlexGridRow>
)

export const SmallPrimaryButton = Template.bind({});
SmallPrimaryButton.args = {
  buttonSize: 'small',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "primary"
}

export const MediumPrimaryButton = Template.bind({});
MediumPrimaryButton.args = {
  buttonSize: 'medium',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "primary"
}

export const LargePrimaryButton = Template.bind({});
LargePrimaryButton.args = {
  buttonSize: 'large',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "primary"
}

export const centerTextAlignment = Template.bind({});
centerTextAlignment.args = {
  buttonSize: 'md',
  buttonTitle: "This is wrapping button tex",
  copy: "This is wrapping button text",
  backgroundColor: "light",
  buttonType: "primary",
  textAlignment: "center",
  maxWidth: "200px"
}

export const leftTextAlignment = Template.bind({});
leftTextAlignment.args = {
  buttonSize: 'md',
  buttonTitle: "This is wrapping button tex",
  copy: "This is wrapping button text",
  backgroundColor: "light",
  buttonType: "primary",
  textAlignment: "left",
  maxWidth: "200px"
}

export const disabledButton = Template.bind({});
disabledButton.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "primary",
  disabled: true
}

export const primaryButtonWithIcon = Template.bind({});
primaryButtonWithIcon.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "primaryIcon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const secondaryButton = Template.bind({});
secondaryButton.args = {
  buttonSize: 'medium',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "secondary"
}

export const secondaryButtonWDarkBackground = Template.bind({});
secondaryButtonWDarkBackground.args = {
  buttonSize: 'medium',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "secondary"
}

export const secondaryButtonWDarkBackgroundAndIcon = Template.bind({});
secondaryButtonWDarkBackgroundAndIcon.args = {
  buttonSize: 'medium',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "secondaryIcon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}


export const tertiaryButton = Template.bind({});
tertiaryButton.args = {
  buttonSize: 'medium',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "tertiary"
}

export const tertiaryButtonWithIcon = Template.bind({});
tertiaryButtonWithIcon.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "tertiaryIcon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const textButton = Template.bind({});
textButton.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "text",
}

export const textButtonWithIconRightAlignment = Template.bind({});
textButtonWithIconRightAlignment.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "text",
  imageAlignment: "right",
  image:<FontAwesomeIcon icon="share-alt"/>
}
export const textButtonWithIconLeftAlignment = Template.bind({});
textButtonWithIconLeftAlignment.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "text",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const textButtonDarkBackground = Template.bind({});
textButtonDarkBackground.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "text",
}

export const textButtonWithIconLeftAlignmentAndDarkBackground = Template.bind({});
textButtonWithIconLeftAlignmentAndDarkBackground.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "text",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const textButtonWithIconRightAlignmentAndDarkBackground = Template.bind({});
textButtonWithIconRightAlignmentAndDarkBackground.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "text",
  imageAlignment: "right",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const stackedIcon = Template.bind({});
stackedIcon.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "stacked",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const stackedIconDarkBackground = Template.bind({});
stackedIconDarkBackground.args = {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "stacked",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const iconButton = Template.bind({});
iconButton.args = {
  buttonSize: 'md',
  backgroundColor: "light",
  buttonType: "icon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const iconButtonDarkBackground = Template.bind({});
iconButtonDarkBackground.args = {
  buttonSize: 'md',
  backgroundColor: "dark",
  buttonType: "icon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const inlineButton = Template.bind({});
inlineButton.args = {
  buttonSize: 'md',
  copy: "Test",
  buttonTitle: "Test",
  backgroundColor: "light",
  buttonType: "inline",
  imageAlignment: "right",
  image:<FontAwesomeIcon icon="share-alt"/>
}

export const inTextButton = Template.bind({});
inTextButton.args = {
  copy: "Test",
  buttonTitle: "Test",
  buttonSize: "md",
  backgroundColor: "light",
  buttonType: "intext",
  to: "https://usaspending.gov"
}