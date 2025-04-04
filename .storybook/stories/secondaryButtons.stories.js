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
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"secondary",
    backgroundColor:"light"
  },
};

export const Medium = {
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "secondary",
    backgroundColor: "light",
  },
};
export const Large = {
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondary",
    disabled: true,
  },
};

export const mediumDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "light",
    buttonType: "secondary",
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
    buttonType: "secondary",
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
    buttonType: "secondaryIcon",
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
    buttonType: "secondaryIcon",
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
    buttonType: "secondaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const darkSmall = {
  tags: ['!dev'],
  args: {
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"secondary",
    backgroundColor:"dark"
  },
};

export const darkMedium = {
  tags: ['!dev'],
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "secondary",
    backgroundColor: "dark",
  },
};
export const darkLarge = {
  tags: ['!dev'],
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "secondary",
    backgroundColor: "dark",
  },
};

export const darkSmallCenterTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "dark",
    buttonType: "secondary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const darkMediumCenterTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "md",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "dark",
    buttonType: "secondary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const darkLargeCenterTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "wrapping text button",
    copy: "This is center text alignment",
    backgroundColor: "dark",
    buttonType: "secondary",
    textAlignment: "center",
    maxWidth: "200px",
  },
};

export const darkSmallLeftTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "dark",
    buttonType: "secondary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const darkMediumLeftTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "md",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "dark",
    buttonType: "secondary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const darkLargeLeftTextAlignment = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "wrapping text button",
    copy: "This is left text alignment",
    backgroundColor: "dark",
    buttonType: "secondary",
    textAlignment: "left",
    maxWidth: "200px",
  },
};

export const darkSmallDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "dark",
    buttonType: "secondary",
    disabled: true,
  },
};

export const darkMediumDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "md",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "dark",
    buttonType: "secondary",
    disabled: true,
  },
};

export const darkLargeDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "disabled button",
    copy: "disabled button",
    backgroundColor: "dark",
    buttonType: "secondary",
    disabled: true,
  },
};


export const darkLargeIcon = {
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "secondaryIcon",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};