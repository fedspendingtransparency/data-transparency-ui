import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Icon",
  component: Button,
  tags: ["autodocs"],
};

export const StackedLight = {
args : {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "light",
  buttonType: "stacked",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}
}
export const StackedDarkBackground = {
args:  {
  buttonSize: 'md',
  buttonTitle: "Test",
  copy: "Test",
  backgroundColor: "dark",
  buttonType: "stacked",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}
}


export const Icon = {
args : {
  buttonSize: 'md',
  backgroundColor: "light",
  buttonType: "icon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}}

export const iconButtonDarkBackground = {
  args : {
  buttonSize: 'md',
  backgroundColor: "dark",
  buttonType: "icon",
  imageAlignment: "left",
  image:<FontAwesomeIcon icon="share-alt"/>
}
}

