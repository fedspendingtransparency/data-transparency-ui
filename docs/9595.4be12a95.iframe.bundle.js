"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[9595],{"./.storybook/stories/tertiaryButtons.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:function(){return Large},Medium:function(){return Medium},Small:function(){return Small},__namedExportsOrder:function(){return __namedExportsOrder},largeCenterTextAlignment:function(){return largeCenterTextAlignment},largeDisabled:function(){return largeDisabled},largeIcon:function(){return largeIcon},largeLeftTextAlignment:function(){return largeLeftTextAlignment},mediumCenterTextAlignment:function(){return mediumCenterTextAlignment},mediumDisabled:function(){return mediumDisabled},mediumIcon:function(){return mediumIcon},mediumLeftTextAlignment:function(){return mediumLeftTextAlignment},smallCenterTextAlignment:function(){return smallCenterTextAlignment},smallDisabled:function(){return smallDisabled},smallIcon:function(){return smallIcon},smallLeftTextAlignment:function(){return smallLeftTextAlignment}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Button.jsx");__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\r\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\r\nimport Button from "../../components/Button";\r\nexport default {\r\n  title: "Buttons/Tertiary",\r\n  component: Button,\r\n  tags: ["autodocs"],\r\n};\r\n\r\nexport const Small = {\r\n  args: {\r\n    copy:"sm",\r\n    buttonTitle:"Small",\r\n    buttonSize:"sm",\r\n    buttonType:"tertiary",\r\n    backgroundColor:"light"\r\n  },\r\n};\r\n\r\nexport const Medium = {\r\n  args: {\r\n    copy: "md",\r\n    buttonTitle: "Medium",\r\n    buttonSize: "md",\r\n    buttonType: "tertiary",\r\n    backgroundColor: "light",\r\n  },\r\n};\r\nexport const Large = {\r\n  args: {\r\n    copy: "lg",\r\n    buttonTitle: "large",\r\n    buttonSize: "lg",\r\n    buttonType: "tertiary",\r\n    backgroundColor: "light",\r\n  },\r\n};\r\n\r\nexport const smallCenterTextAlignment = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "sm",\r\n    buttonTitle: "wrapping text button",\r\n    copy: "This is center text alignment",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    textAlignment: "center",\r\n    maxWidth: "200px",\r\n  },\r\n};\r\n\r\nexport const mediumCenterTextAlignment = {\r\n  args: {\r\n    buttonSize: "md",\r\n    buttonTitle: "wrapping text button",\r\n    copy: "This is center text alignment",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    textAlignment: "center",\r\n    maxWidth: "200px",\r\n  },\r\n};\r\n\r\nexport const largeCenterTextAlignment = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "lg",\r\n    buttonTitle: "wrapping text button",\r\n    copy: "This is center text alignment",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    textAlignment: "center",\r\n    maxWidth: "200px",\r\n  },\r\n};\r\n\r\nexport const smallLeftTextAlignment = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "sm",\r\n    buttonTitle: "wrapping text button",\r\n    copy: "This is left text alignment",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    textAlignment: "left",\r\n    maxWidth: "200px",\r\n  },\r\n};\r\n\r\nexport const mediumLeftTextAlignment = {\r\n  args: {\r\n    buttonSize: "md",\r\n    buttonTitle: "wrapping text button",\r\n    copy: "This is left text alignment",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    textAlignment: "left",\r\n    maxWidth: "200px",\r\n  },\r\n};\r\n\r\nexport const largeLeftTextAlignment = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "lg",\r\n    buttonTitle: "wrapping text button",\r\n    copy: "This is left text alignment",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    textAlignment: "left",\r\n    maxWidth: "200px",\r\n  },\r\n};\r\n\r\nexport const smallDisabled = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "sm",\r\n    buttonTitle: "disabled button",\r\n    copy: "disabled sm",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    disabled: true,\r\n  },\r\n};\r\n\r\nexport const mediumDisabled = {\r\n  args: {\r\n    buttonSize: "md",\r\n    buttonTitle: "disabled button",\r\n    copy: "disabled md",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    disabled: true,\r\n  },\r\n};\r\n\r\nexport const largeDisabled = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "lg",\r\n    buttonTitle: "disabled button",\r\n    copy: "disabled lg",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiary",\r\n    disabled: true,\r\n  },\r\n};\r\n\r\nexport const smallIcon = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "sm",\r\n    buttonTitle: "Test",\r\n    copy: "Icon",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiaryIcon",\r\n    imageAlignment: "left",\r\n    image: <FontAwesomeIcon icon="share-alt" />,\r\n  },\r\n};\r\n\r\nexport const mediumIcon = {\r\n  args: {\r\n    buttonSize: "md",\r\n    buttonTitle: "Test",\r\n    copy: "Icon",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiaryIcon",\r\n    imageAlignment: "left",\r\n    image: <FontAwesomeIcon icon="share-alt" />,\r\n  },\r\n};\r\n\r\nexport const largeIcon = {\r\n  tags: [\'!dev\'],\r\n  args: {\r\n    buttonSize: "large",\r\n    buttonTitle: "Test",\r\n    copy: "Icon",\r\n    backgroundColor: "light",\r\n    buttonType: "tertiaryIcon",\r\n    imageAlignment: "left",\r\n    image: <FontAwesomeIcon icon="share-alt" />,\r\n  },\r\n};',locationsMap:{small:{startLoc:{col:21,line:10},endLoc:{col:1,line:18},startBody:{col:21,line:10},endBody:{col:1,line:18}},medium:{startLoc:{col:22,line:20},endLoc:{col:1,line:28},startBody:{col:22,line:20},endBody:{col:1,line:28}},large:{startLoc:{col:21,line:29},endLoc:{col:1,line:37},startBody:{col:21,line:29},endBody:{col:1,line:37}},"small-center-text-alignment":{startLoc:{col:40,line:39},endLoc:{col:1,line:50},startBody:{col:40,line:39},endBody:{col:1,line:50}},"medium-center-text-alignment":{startLoc:{col:41,line:52},endLoc:{col:1,line:62},startBody:{col:41,line:52},endBody:{col:1,line:62}},"large-center-text-alignment":{startLoc:{col:40,line:64},endLoc:{col:1,line:75},startBody:{col:40,line:64},endBody:{col:1,line:75}},"small-left-text-alignment":{startLoc:{col:38,line:77},endLoc:{col:1,line:88},startBody:{col:38,line:77},endBody:{col:1,line:88}},"medium-left-text-alignment":{startLoc:{col:39,line:90},endLoc:{col:1,line:100},startBody:{col:39,line:90},endBody:{col:1,line:100}},"large-left-text-alignment":{startLoc:{col:38,line:102},endLoc:{col:1,line:113},startBody:{col:38,line:102},endBody:{col:1,line:113}},"small-disabled":{startLoc:{col:29,line:115},endLoc:{col:1,line:125},startBody:{col:29,line:115},endBody:{col:1,line:125}},"medium-disabled":{startLoc:{col:30,line:127},endLoc:{col:1,line:136},startBody:{col:30,line:127},endBody:{col:1,line:136}},"large-disabled":{startLoc:{col:29,line:138},endLoc:{col:1,line:148},startBody:{col:29,line:138},endBody:{col:1,line:148}},"small-icon":{startLoc:{col:25,line:150},endLoc:{col:1,line:161},startBody:{col:25,line:150},endBody:{col:1,line:161}},"medium-icon":{startLoc:{col:26,line:163},endLoc:{col:1,line:173},startBody:{col:26,line:163},endBody:{col:1,line:173}},"large-icon":{startLoc:{col:25,line:175},endLoc:{col:1,line:186},startBody:{col:25,line:175},endBody:{col:1,line:186}}}}},title:"Buttons/Tertiary",component:_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"]};const Small={args:{copy:"sm",buttonTitle:"Small",buttonSize:"sm",buttonType:"tertiary",backgroundColor:"light"}},Medium={args:{copy:"md",buttonTitle:"Medium",buttonSize:"md",buttonType:"tertiary",backgroundColor:"light"}},Large={args:{copy:"lg",buttonTitle:"large",buttonSize:"lg",buttonType:"tertiary",backgroundColor:"light"}},smallCenterTextAlignment={tags:["!dev"],args:{buttonSize:"sm",buttonTitle:"wrapping text button",copy:"This is center text alignment",backgroundColor:"light",buttonType:"tertiary",textAlignment:"center",maxWidth:"200px"}},mediumCenterTextAlignment={args:{buttonSize:"md",buttonTitle:"wrapping text button",copy:"This is center text alignment",backgroundColor:"light",buttonType:"tertiary",textAlignment:"center",maxWidth:"200px"}},largeCenterTextAlignment={tags:["!dev"],args:{buttonSize:"lg",buttonTitle:"wrapping text button",copy:"This is center text alignment",backgroundColor:"light",buttonType:"tertiary",textAlignment:"center",maxWidth:"200px"}},smallLeftTextAlignment={tags:["!dev"],args:{buttonSize:"sm",buttonTitle:"wrapping text button",copy:"This is left text alignment",backgroundColor:"light",buttonType:"tertiary",textAlignment:"left",maxWidth:"200px"}},mediumLeftTextAlignment={args:{buttonSize:"md",buttonTitle:"wrapping text button",copy:"This is left text alignment",backgroundColor:"light",buttonType:"tertiary",textAlignment:"left",maxWidth:"200px"}},largeLeftTextAlignment={tags:["!dev"],args:{buttonSize:"lg",buttonTitle:"wrapping text button",copy:"This is left text alignment",backgroundColor:"light",buttonType:"tertiary",textAlignment:"left",maxWidth:"200px"}},smallDisabled={tags:["!dev"],args:{buttonSize:"sm",buttonTitle:"disabled button",copy:"disabled sm",backgroundColor:"light",buttonType:"tertiary",disabled:!0}},mediumDisabled={args:{buttonSize:"md",buttonTitle:"disabled button",copy:"disabled md",backgroundColor:"light",buttonType:"tertiary",disabled:!0}},largeDisabled={tags:["!dev"],args:{buttonSize:"lg",buttonTitle:"disabled button",copy:"disabled lg",backgroundColor:"light",buttonType:"tertiary",disabled:!0}},smallIcon={tags:["!dev"],args:{buttonSize:"sm",buttonTitle:"Test",copy:"Icon",backgroundColor:"light",buttonType:"tertiaryIcon",imageAlignment:"left",image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:"share-alt"})}},mediumIcon={args:{buttonSize:"md",buttonTitle:"Test",copy:"Icon",backgroundColor:"light",buttonType:"tertiaryIcon",imageAlignment:"left",image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:"share-alt"})}},largeIcon={tags:["!dev"],args:{buttonSize:"large",buttonTitle:"Test",copy:"Icon",backgroundColor:"light",buttonType:"tertiaryIcon",imageAlignment:"left",image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:"share-alt"})}},__namedExportsOrder=["Small","Medium","Large","smallCenterTextAlignment","mediumCenterTextAlignment","largeCenterTextAlignment","smallLeftTextAlignment","mediumLeftTextAlignment","largeLeftTextAlignment","smallDisabled","mediumDisabled","largeDisabled","smallIcon","mediumIcon","largeIcon"];Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  args: {\n    copy: "sm",\n    buttonTitle: "Small",\n    buttonSize: "sm",\n    buttonType: "tertiary",\n    backgroundColor: "light"\n  }\n}',...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'{\n  args: {\n    copy: "md",\n    buttonTitle: "Medium",\n    buttonSize: "md",\n    buttonType: "tertiary",\n    backgroundColor: "light"\n  }\n}',...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  args: {\n    copy: "lg",\n    buttonTitle: "large",\n    buttonSize: "lg",\n    buttonType: "tertiary",\n    backgroundColor: "light"\n  }\n}',...Large.parameters?.docs?.source}}},smallCenterTextAlignment.parameters={...smallCenterTextAlignment.parameters,docs:{...smallCenterTextAlignment.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "sm",\n    buttonTitle: "wrapping text button",\n    copy: "This is center text alignment",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    textAlignment: "center",\n    maxWidth: "200px"\n  }\n}',...smallCenterTextAlignment.parameters?.docs?.source}}},mediumCenterTextAlignment.parameters={...mediumCenterTextAlignment.parameters,docs:{...mediumCenterTextAlignment.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonSize: "md",\n    buttonTitle: "wrapping text button",\n    copy: "This is center text alignment",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    textAlignment: "center",\n    maxWidth: "200px"\n  }\n}',...mediumCenterTextAlignment.parameters?.docs?.source}}},largeCenterTextAlignment.parameters={...largeCenterTextAlignment.parameters,docs:{...largeCenterTextAlignment.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "lg",\n    buttonTitle: "wrapping text button",\n    copy: "This is center text alignment",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    textAlignment: "center",\n    maxWidth: "200px"\n  }\n}',...largeCenterTextAlignment.parameters?.docs?.source}}},smallLeftTextAlignment.parameters={...smallLeftTextAlignment.parameters,docs:{...smallLeftTextAlignment.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "sm",\n    buttonTitle: "wrapping text button",\n    copy: "This is left text alignment",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    textAlignment: "left",\n    maxWidth: "200px"\n  }\n}',...smallLeftTextAlignment.parameters?.docs?.source}}},mediumLeftTextAlignment.parameters={...mediumLeftTextAlignment.parameters,docs:{...mediumLeftTextAlignment.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonSize: "md",\n    buttonTitle: "wrapping text button",\n    copy: "This is left text alignment",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    textAlignment: "left",\n    maxWidth: "200px"\n  }\n}',...mediumLeftTextAlignment.parameters?.docs?.source}}},largeLeftTextAlignment.parameters={...largeLeftTextAlignment.parameters,docs:{...largeLeftTextAlignment.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "lg",\n    buttonTitle: "wrapping text button",\n    copy: "This is left text alignment",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    textAlignment: "left",\n    maxWidth: "200px"\n  }\n}',...largeLeftTextAlignment.parameters?.docs?.source}}},smallDisabled.parameters={...smallDisabled.parameters,docs:{...smallDisabled.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "sm",\n    buttonTitle: "disabled button",\n    copy: "disabled sm",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    disabled: true\n  }\n}',...smallDisabled.parameters?.docs?.source}}},mediumDisabled.parameters={...mediumDisabled.parameters,docs:{...mediumDisabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonSize: "md",\n    buttonTitle: "disabled button",\n    copy: "disabled md",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    disabled: true\n  }\n}',...mediumDisabled.parameters?.docs?.source}}},largeDisabled.parameters={...largeDisabled.parameters,docs:{...largeDisabled.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "lg",\n    buttonTitle: "disabled button",\n    copy: "disabled lg",\n    backgroundColor: "light",\n    buttonType: "tertiary",\n    disabled: true\n  }\n}',...largeDisabled.parameters?.docs?.source}}},smallIcon.parameters={...smallIcon.parameters,docs:{...smallIcon.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "sm",\n    buttonTitle: "Test",\n    copy: "Icon",\n    backgroundColor: "light",\n    buttonType: "tertiaryIcon",\n    imageAlignment: "left",\n    image: <FontAwesomeIcon icon="share-alt" />\n  }\n}',...smallIcon.parameters?.docs?.source}}},mediumIcon.parameters={...mediumIcon.parameters,docs:{...mediumIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonSize: "md",\n    buttonTitle: "Test",\n    copy: "Icon",\n    backgroundColor: "light",\n    buttonType: "tertiaryIcon",\n    imageAlignment: "left",\n    image: <FontAwesomeIcon icon="share-alt" />\n  }\n}',...mediumIcon.parameters?.docs?.source}}},largeIcon.parameters={...largeIcon.parameters,docs:{...largeIcon.parameters?.docs,source:{originalSource:'{\n  tags: [\'!dev\'],\n  args: {\n    buttonSize: "large",\n    buttonTitle: "Test",\n    copy: "Icon",\n    backgroundColor: "light",\n    buttonType: "tertiaryIcon",\n    imageAlignment: "left",\n    image: <FontAwesomeIcon icon="share-alt" />\n  }\n}',...largeIcon.parameters?.docs?.source}}}},"./components/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./styles/components/_buttons.scss");var propTypes={buttonSize:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["large","medium","small","lg","md","sm"]).isRequired,backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["light","dark"]).isRequired,buttonType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","primaryIcon","secondary","secondaryIcon","tertiary","tertiaryIcon","text","stacked","icon","inline","intext"]).isRequired,copy:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,image:prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,textAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left","center"]),imageAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left","right"]),additionalClassnames:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onKeyUp:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,buttonTitle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,to:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Button=function Button(props){var classNameList="";return"large"===props.buttonSize||"lg"===props.buttonSize?classNameList+=" button__lg ":"medium"===props.buttonSize||"md"===props.buttonSize?classNameList+=" button__md ":"small"!==props.buttonSize&&"sm"!==props.buttonSize||(classNameList+=" button__sm "),"primary"===props.buttonType?classNameList+=" button-type__primary-light ":"secondary"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__secondary-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__secondary-dark "):"primaryIcon"===props.buttonType?"light"===props.backgroundColor&&"left"===props.imageAlignment&&(classNameList+=" button-type__primary-left-icon-light "):"secondaryIcon"===props.buttonType?"light"===props.backgroundColor?"left"===props.imageAlignment&&(classNameList+=" button-type__secondary-left-icon-light "):"dark"===props.backgroundColor&&"left"===props.imageAlignment&&(classNameList+=" button-type__secondary-left-icon-dark "):"tertiary"===props.buttonType?classNameList+=" button-type__tertiary-light ":"tertiaryIcon"===props.buttonType?"left"===props.imageAlignment&&"light"===props.backgroundColor&&(classNameList+=" button-type__tertiary-left-icon-light "):"text"===props.buttonType?"light"===props.backgroundColor?"left"===props.imageAlignment?classNameList+=" button-type__text-left-icon-light ":"right"===props.imageAlignment?classNameList+=" button-type__text-right-icon-light ":classNameList+=" button-type__text-light ":"dark"===props.backgroundColor&&("left"===props.imageAlignment?classNameList+=" button-type__text-left-icon-dark ":"right"===props.imageAlignment?classNameList+=" button-type__text-right-icon-dark ":classNameList+=" button-type__text-dark "):"stacked"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__stacked-icon-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__stacked-icon-dark "):"icon"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__icon-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__icon-dark "):"inline"===props.buttonType?"right"===props.imageAlignment&&(classNameList+=" button-type__inline-right-icon-light "):"intext"===props.buttonType&&(classNameList+=" button-type__intext-light "),"left"===props.textAlignment?classNameList+=" button-text__left-align ":"center"===props.textAlignment&&(classNameList+=" button-text__center-align "),props.additionalClassnames&&(classNameList+=" ",classNameList+=props.additionalClassnames),classNameList.includes("button-type__intext-light")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{"aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onKeyUp:props.onKeyUp,onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth},target:"_blank",rel:"noopener noreferrer",href:props.to},props.copy):classNameList.includes("left-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.image,props.copy):classNameList.includes("right-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.copy,props.image):classNameList.includes("stacked-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stacked-button__only-image"},props.image),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stacked-button__only-text"},props.copy)):classNameList.includes("icon-light")||classNameList.includes("icon-dark")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.image):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.copy)};Button.propTypes=propTypes,__webpack_exports__.A=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonSize:{description:"",type:{name:"enum",value:[{value:"'large'",computed:!1},{value:"'medium'",computed:!1},{value:"'small'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1},{value:"'sm'",computed:!1}]},required:!0},backgroundColor:{description:"",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!0},buttonType:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'primaryIcon'",computed:!1},{value:"'secondary'",computed:!1},{value:"'secondaryIcon'",computed:!1},{value:"'tertiary'",computed:!1},{value:"'tertiaryIcon'",computed:!1},{value:"'text'",computed:!1},{value:"'stacked'",computed:!1},{value:"'icon'",computed:!1},{value:"'inline'",computed:!1},{value:"'intext'",computed:!1}]},required:!0},copy:{description:"",type:{name:"string"},required:!0},image:{description:"",type:{name:"element"},required:!1},textAlignment:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'center'",computed:!1}]},required:!1},imageAlignment:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},additionalClassnames:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onKeyUp:{description:"",type:{name:"func"},required:!1},buttonTitle:{description:"",type:{name:"string"},required:!0},disabled:{description:"",type:{name:"bool"},required:!1},maxWidth:{description:"",type:{name:"string"},required:!1},to:{description:"",type:{name:"string"},required:!1}}}},"./styles/components/_buttons.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);