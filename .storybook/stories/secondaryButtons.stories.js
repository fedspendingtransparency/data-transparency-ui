import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Secondary",
  component: Button,
  tags: ["autodocs"],
};

export const Small = {
  args: {
    copy: "Small",
    buttonTitle: "TEST",
    buttonSize: "sm",
    buttonType: "secondary",
    backgroundColor: "light",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const Medium = {
  args: {
    copy: "Medium",
    buttonTitle: "TEST",
    buttonSize: "md",
    buttonType: "secondary",
    backgroundColor: "light",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};
export const Large = {
  args: {
    copy: "Large",
    buttonTitle: "TEST",
    buttonSize: "lg",
    buttonType: "secondary",
    backgroundColor: "light",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const CenterAlignment = {
  args: {
    copy: "Center",
    buttonTitle: "TEST",
    buttonSize: "md",
    buttonType: "secondary",
    backgroundColor: "light",
    imageAlignment: "right",
    textAlignment: "center",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};



export const centerTextAlignment = {
  args: {
    buttonSize: "md",
    buttonTitle: "This is wrapping button tex",
    copy: "This is wrapping button text",
    backgroundColor: "light",
    buttonType: "secondary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const leftTextAlignment = {
  args: {
    buttonSize: "md",
    buttonTitle: "This is wrapping button tex",
    copy: "This is wrapping button text",
    backgroundColor: "light",
    buttonType: "secondary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const Disabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Test",
    backgroundColor: "light",
    buttonType: "secondary",
    disabled: true,
  },
};

export const Icon = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Test",
    backgroundColor: "light",
    buttonType: "secondaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};
