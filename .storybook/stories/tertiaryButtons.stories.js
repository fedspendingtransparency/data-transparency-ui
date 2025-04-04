import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Tertiary",
  component: Button,
  tags: ["autodocs"],
};

export const Small = {
  args: {
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"tertiary",
    backgroundColor:"light"
  },
};

export const Medium = {
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "tertiary",
    backgroundColor: "light",
  },
};
export const Large = {
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "tertiary",
    backgroundColor: "light",
  },
};

export const smallCenterTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "light",
    buttonType: "tertiary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const mediumCenterTextAlignment = {
  args: {
    buttonSize: "md",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "light",
    buttonType: "tertiary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const largeCenterTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "light",
    buttonType: "tertiary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const smallLeftTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "light",
    buttonType: "tertiary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const mediumLeftTextAlignment = {
  args: {
    buttonSize: "md",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "light",
    buttonType: "tertiary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const largeLeftTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "light",
    buttonType: "tertiary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const smallDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "tertiary",
    disabled: true,
  },
};

export const mediumDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "tertiary",
    disabled: true,
  },
};

export const largeDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "tertiary",
    disabled: true,
  },
};

export const smallIcon = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "tertiaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const mediumIcon = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "tertiaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const largeIcon = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "tertiaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};