import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Inline",
  component: Button,
  tags: ["autodocs"],
};

export const Small = {
  args: {
    copy: "Small",
    buttonTitle: "TEST",
    buttonSize: "sm",
    buttonType: "inline",
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
    buttonType: "inline",
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
    buttonType: "inline",
    backgroundColor: "light",
    imageAlignment: "right",
    textAlignment: "center",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const Large = {
  args: {
    copy: "Large",
    buttonTitle: "TEST",
    buttonSize: "lg",
    buttonType: "inline",
    backgroundColor: "light",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const InlineText = {
  args: {
    copy: "Test",
    buttonTitle: "Test",
    buttonSize: "md",
    backgroundColor: "light",
    buttonType: "intext",
    to: "https://usaspending.gov",
  },
};
