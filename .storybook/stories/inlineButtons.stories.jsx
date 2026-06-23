import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
export default {
  title: "Buttons/Inline",
  component: Button,
  tags: ["autodocs"],
};
//TEXT BUTTON EXAMPLES
export const SmallText = {
  args: {
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"text",
    backgroundColor:"light"
  },
};

export const MediumText = {
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "text",
    backgroundColor: "light",
  },
};
export const LargeText = {
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "text",
    backgroundColor: "light",
  },
};

export const SmallTextDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "disabled button",
    copy: "disabled sm",
    backgroundColor: "light",
    buttonType: "text",
    disabled: true,
  },
};

export const MediumTextDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "disabled button",
    copy: "disabled md",
    backgroundColor: "light",
    buttonType: "text",
    disabled: true,
  },
};

export const LargeTextDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "disabled button",
    copy: "disabled lg",
    backgroundColor: "light",
    buttonType: "text",
    disabled: true,
  },
};

export const SmallTextLeftImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "text",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const MediumTextLeftImage = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "text",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const LargetTextLeftImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "text",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const SmallTextRightImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "text",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const MediumTextRightImage = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "text",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const LargeTextRightImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "text",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkSmallText = {
  args: {
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"text",
    backgroundColor:"dark"
  },
};

export const DarkMediumText = {
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "text",
    backgroundColor: "dark",
  },
};
export const DarkLargeText = {
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "text",
    backgroundColor: "dark",
  },
};

export const DarkSmallTextDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "disabled button",
    copy: "disabled sm",
    backgroundColor: "dark",
    buttonType: "text",
    disabled: true,
  },
};

export const DarkMediumTextDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "disabled button",
    copy: "disabled md",
    backgroundColor: "dark",
    buttonType: "text",
    disabled: true,
  },
};

export const DarkLargeTextDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "lg",
    buttonTitle: "disabled button",
    copy: "disabled lg",
    backgroundColor: "dark",
    buttonType: "text",
    disabled: true,
  },
};

export const DarkSmallTextLeftImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "text",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkMediumTextTextLeftImage = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "text",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkLargeTextTextLeftImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "text",
    imageAlignment: "left",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkSmallTextRightImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "text",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkMediumTextTextRighImage = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "text",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const DarkLargeTextTextRightImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "dark",
    buttonType: "text",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

//INLINE EXAMPLES

export const SmallInlineRightImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "inline",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const MediumInlineRightImage = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "inline",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const LargeInlineRightImage = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "inline",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
  },
};

export const SmallInlineRightImageDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "sm",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "inline",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true
  },
};

export const MediumInlineRightImageDisabled = {
  args: {
    buttonSize: "md",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "inline",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true
  },
};

export const LargeInlineRightImageDisabled = {
  tags: ['!dev'],
  args: {
    buttonSize: "large",
    buttonTitle: "Test",
    copy: "Icon",
    backgroundColor: "light",
    buttonType: "inline",
    imageAlignment: "right",
    image: <FontAwesomeIcon icon="share-alt" />,
    disabled: true
  },
};

//INTEXT
export const SmallIntext = {
  tags: ['!dev'],
  args: {
    copy:"sm",
    buttonTitle:"Small",
    buttonSize:"sm",
    buttonType:"intext",
    backgroundColor:"light",
    to: "https://usaspending.gov"
  },
};

export const MediumIntext = {
  args: {
    copy: "md",
    buttonTitle: "Medium",
    buttonSize: "md",
    buttonType: "intext",
    backgroundColor: "light",
    to: "https://usaspending.gov"
  },
};
export const LargeIntext = {
  tags: ['!dev'],
  args: {
    copy: "lg",
    buttonTitle: "large",
    buttonSize: "lg",
    buttonType: "intext",
    backgroundColor: "light",
    to: "https://usaspending.gov"
  },
};