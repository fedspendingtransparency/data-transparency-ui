import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Icon",
  component: Button,
  tags: ["autodocs"],
};
//Stacked Icon Variants Stories
export const StackedSmall = {
  tags: ["!dev"],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "sm",
    backgroundColor: "light",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const StackedMedium = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "md",
    backgroundColor: "light",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};
export const StackedLarge = {
  tags: ["!dev"],
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "lg",
    backgroundColor: "light",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const StackedSmallDisabled = {
  tags: ["!dev"],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "sm",
    backgroundColor: "light",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const StackedMediumDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "md",
    backgroundColor: "light",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};
export const StackedLargeDisabled = {
  tags: ["!dev"],
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "lg",
    backgroundColor: "light",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const DarkStackedSmall = {
  tags: ["!dev"],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "sm",
    backgroundColor: "dark",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkStackedMedium = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "md",
    backgroundColor: "dark",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};
export const DarkStackedLarge = {
  tags: ["!dev"],
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "lg",
    backgroundColor: "dark",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkStackedSmallDisabled = {
  tags: ["!dev"],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "sm",
    backgroundColor: "dark",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const DarkStackedMediumDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "md",
    backgroundColor: "dark",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};
export const DarkStackedLargeDisabled = {
  tags: ["!dev"],
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "lg",
    backgroundColor: "dark",
    buttonType: "stacked",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

//Icon variants stories
export const SmallIcon = {
  tags: ["!dev"],
  args: {
    buttonSize: "sm",
    backgroundColor: "light",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const MediumIcon = {
  args: {
    buttonSize: "md",
    backgroundColor: "light",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const LargeIcon = {
  tags: ["!dev"],
  args: {
    buttonSize: "lg",
    backgroundColor: "light",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const SmallIconDisabled = {
    tags: ["!dev"],
args: {
    buttonSize: "sm",
    backgroundColor: "light",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const MediumIconDisabled = {
  args: {
    buttonSize: "md",
    backgroundColor: "light",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const LargeIconDisabled = {
  args: {
    buttonSize: "lg",
    backgroundColor: "light",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const DrakSmallIcon = {
  tags: ["!dev"],
  args: {
    buttonSize: "sm",
    backgroundColor: "dark",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkMediumIcon = {
  args: {
    buttonSize: "md",
    backgroundColor: "dark",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkLargeIcon = {
  tags: ["!dev"],
  args: {
    buttonSize: "lg",
    backgroundColor: "dark",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkSmallIconDisabled = {
    tags: ["!dev"],
args: {
    buttonSize: "sm",
    backgroundColor: "dark",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const DarkMediumIconDisabled = {
  args: {
    buttonSize: "md",
    backgroundColor: "dark",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};

export const DarkLargeDisabled = {
  tags: ["!dev"],
  args: {
    buttonSize: "lg",
    backgroundColor: "dark",
    buttonType: "icon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true,
  },
};
