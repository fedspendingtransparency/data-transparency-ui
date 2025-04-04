import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Primary",
  component: Button,
  tags: ["autodocs"],
};

export const Small = {
  args: {
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"primary",
    backgroundColor:"light"
  },
};

export const Medium = {
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "primary",
    backgroundColor: "light",
  },
};
export const Large = {
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "primary",
    backgroundColor: "light",
  },
};

export const smallCenterTextAlignment = {
  args: {
    buttonSize: "sm",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "light",
    buttonType: "primary",
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
    buttonType: "primary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const largeCenterTextAlignment = {
  args: {
    buttonSize: "lg",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "light",
    buttonType: "primary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const smallLeftTextAlignment = {
  args: {
    buttonSize: "sm",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "light",
    buttonType: "primary",
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
    buttonType: "primary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const largeLeftTextAlignment = {
  args: {
    buttonSize: "lg",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "light",
    buttonType: "primary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const smallDisabled = {
  args: {
    buttonSize: "sm",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "primary",
    disabled: true,
  },
};

export const mediumDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "primary",
    disabled: true,
  },
};

export const largeDisabled = {
  args: {
    buttonSize: "lg",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "primary",
    disabled: true,
  },
};

export const smallIcon = {
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "primaryIcon",
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
    buttonType: "primaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const largeIcon = {
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "primaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};
