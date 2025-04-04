"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[4400],{"./.storybook/stories/card.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Elevated:function(){return Elevated},Fill:function(){return Fill},HeroFillWithImage:function(){return HeroFillWithImage},HeroWithBarFill:function(){return HeroWithBarFill},HeroWithImage:function(){return HeroWithImage},Outline:function(){return Outline},WithCardButton:function(){return WithCardButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return card_stories}});var FlexGridCol=__webpack_require__("./components/flexGrid/FlexGridCol.jsx"),FlexGridRow=__webpack_require__("./components/flexGrid/FlexGridRow.jsx"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__("./styles/components/cards/_cards.scss");var propTypes={variant:prop_types_default().string,size:prop_types_default().string,fill:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),onClick:prop_types_default().func,onKeyUp:prop_types_default().func,className:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().object])},CardContainer=function CardContainer(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"":_ref$variant,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,children=_ref.children,fill=_ref.fill,height=_ref.height,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,onClick=_ref.onClick,onKeyUp=_ref.onKeyUp;return react.createElement("div",{className:"card-column ".concat(className),onClick:onClick,role:"presentation",tabIndex:"0",onKeyUp:onKeyUp},react.createElement("div",{className:"".concat(variant," ").concat(size," card-container"),style:{backgroundColor:"".concat(fill),height:"".concat(height)}},children))};CardContainer.propTypes=propTypes;var cards_CardContainer=CardContainer;CardContainer.__docgenInfo={description:"",methods:[],displayName:"CardContainer",props:{variant:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},fill:{description:"",type:{name:"string"},required:!1},height:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onKeyUp:{description:"",type:{name:"func"},required:!1}}};var cards_CardBody=__webpack_require__("./components/cards/CardBody.jsx"),cards_CardButton=__webpack_require__("./components/cards/CardButton.jsx"),cards_CardHero=__webpack_require__("./components/cards/CardHero.jsx");const card_stories_image={src:__webpack_require__.p+"assets/img/top-bowie-state-combined-image.svg",alt:"card image"},dummyText="Pudding jelly beans tiramisu bear claw apple pie liquorice. Jelly beans macaroon wafer topping gummies. Shortbread tiramisu lollipop topping apple pie tart pie chocolate. Tart croissant cake danish wafer icing sugar plum.";var card_stories={parameters:{storySource:{source:'import FlexGridCol from "../../components/flexGrid/FlexGridCol";\r\nimport FlexGridRow from "../../components/flexGrid/FlexGridRow";\r\nimport CardContainer from "../../components/cards/CardContainer";\r\nimport CardBody from "../../components/cards/CardBody";\r\nimport CardButton from "../../components/cards/CardButton";\r\nimport CardHero from "../../components/cards/CardHero";\r\nimport React from "react";\r\nimport imageLink from "../../assets/img/top-bowie-state-combined-image.svg";\r\n\r\nconst image = {\r\n  src: imageLink,\r\n  alt: \'card image\',\r\n};\r\nconst dummyText =\r\n  "Pudding jelly beans tiramisu bear claw apple pie liquorice. Jelly beans macaroon wafer topping gummies. Shortbread tiramisu lollipop topping apple pie tart pie chocolate. Tart croissant cake danish wafer icing sugar plum.";\r\n\r\nexport default {\r\n  title: "General/Cards",\r\n  component: CardContainer,\r\n  subcomponent: { CardHero, CardBody, CardButton },\r\n  tags: [\'autodocs\'],\r\n  argTypes: {\r\n    variant: {\r\n      options: ["elevated", "outline", ""],\r\n      control: { type: "radio" },\r\n    },\r\n  },\r\n};\r\nconst Template = (args) => (\r\n  <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1} >\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>\r\n);\r\n\r\nconst HeroTemplate = (args) => (\r\n  <CardHero fill="#1a4480" />\r\n);\r\nconst BodyTemplate = (args) => (\r\n  <CardBody>\r\n    <div>{dummyText}</div>\r\n  </CardBody>\r\n);\r\nconst ButtonTemplate = (args) => (\r\n  <CardButton\r\n    text="Search"\r\n    variant="secondary"\r\n    link="/search"\r\n    backgroundColor="light"\r\n    buttonSize="sm"\r\n    textAlignment="center"\r\n  />\r\n);\r\n\r\nexport const Outline = Template.bind({});\r\nOutline.args = {\r\n  variant: "outline",\r\n  children: (\r\n    <CardBody>\r\n      <div>{dummyText}</div>\r\n    </CardBody>\r\n  ),\r\n};\r\n\r\nexport const Elevated = Template.bind({});\r\nElevated.args = {\r\n  variant: "elevated",\r\n  children: (\r\n    <CardBody>\r\n      <div>{dummyText}</div>\r\n    </CardBody>\r\n  ),\r\n};\r\n\r\nexport const Fill = Template.bind({});\r\nFill.args = {\r\n  variant: "outline",\r\n  fill: "#1a4480",\r\n  children: (\r\n    <CardBody>\r\n      <div>{dummyText}</div>\r\n    </CardBody>\r\n  ),\r\n};\r\n\r\nexport const WithCardButton = Template.bind({});\r\nWithCardButton.args = {\r\n  variant: "elevated",\r\n  children: (\r\n    <>\r\n      <CardBody\r\n        overline="Search"\r\n        headline="Find details here"\r\n        text="Search spending in your community"\r\n      >\r\n        <CardButton\r\n          text="Search"\r\n          variant="secondary"\r\n          link="/search"\r\n          backgroundColor="light"\r\n          buttonSize="sm"\r\n          textAlignment="center"\r\n        />\r\n      </CardBody>\r\n    </>\r\n  ),\r\n};\r\n\r\nexport const HeroWithBarFill = Template.bind({});\r\nHeroWithBarFill.args = {\r\n  children: (\r\n    <>\r\n      <CardHero fill="#1a4480" />\r\n      <CardBody overline="Resources" headline="Learn how to use  our app">\r\n        <CardButton\r\n          text="Search"\r\n          variant="secondary"\r\n          link="/search"\r\n          backgroundColor="light"\r\n          buttonSize="sm"\r\n          textAlignment="center"\r\n        />\r\n      </CardBody>\r\n    </>\r\n  ),\r\n};\r\n\r\nexport const HeroWithImage = Template.bind({});\r\nHeroWithImage.args = {\r\n  variant: \'elevated\',\r\n  children: (\r\n    <>\r\n      <CardHero variant="expanded" img={image.src} />\r\n      <CardBody overline="Resources" headline="Learn how to use  our app">\r\n        <CardButton\r\n          text="Search"\r\n          variant="secondary"\r\n          link="/search"\r\n          backgroundColor="light"\r\n          buttonSize="sm"\r\n          textAlignment="center"\r\n        />\r\n      </CardBody>\r\n    </>\r\n  ),\r\n};\r\n\r\nexport const HeroFillWithImage = Template.bind({});\r\nHeroFillWithImage.args = {\r\n  children: (\r\n    <>\r\n      <CardHero variant="expanded" fill="#1a4480" img={image.src} />\r\n      <CardBody overline="Resources" headline="Learn how to use our app">\r\n        <CardButton\r\n          text="Search"\r\n          variant="secondary"\r\n          link="/search"\r\n          backgroundColor="light"\r\n          buttonSize="sm"\r\n          textAlignment="center"\r\n        />\r\n      </CardBody>\r\n    </>\r\n  ),\r\n}\r\n\r\nexport const Default = Template.bind({});      \r\nDefault.tags = [\'autodocs\', \'!dev\'];',locationsMap:{outline:{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},elevated:{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},fill:{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},"with-card-button":{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},"hero-with-bar-fill":{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},"hero-with-image":{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},"hero-fill-with-image":{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}},default:{startLoc:{col:17,line:29},endLoc:{col:1,line:35},startBody:{col:17,line:29},endBody:{col:1,line:35}}}}},title:"General/Cards",component:cards_CardContainer,subcomponent:{CardHero:cards_CardHero.A,CardBody:cards_CardBody.A,CardButton:cards_CardButton.A},tags:["autodocs"],argTypes:{variant:{options:["elevated","outline",""],control:{type:"radio"}}}};const Template=args=>react.createElement(FlexGridRow.A,{hasGutter:!0,gutterSize:"lg"},react.createElement(FlexGridCol.A,{desktop:4,tablet:2,mobile:1},react.createElement(cards_CardContainer,args))),Outline=Template.bind({});Outline.args={variant:"outline",children:react.createElement(cards_CardBody.A,null,react.createElement("div",null,dummyText))};const Elevated=Template.bind({});Elevated.args={variant:"elevated",children:react.createElement(cards_CardBody.A,null,react.createElement("div",null,dummyText))};const Fill=Template.bind({});Fill.args={variant:"outline",fill:"#1a4480",children:react.createElement(cards_CardBody.A,null,react.createElement("div",null,dummyText))};const WithCardButton=Template.bind({});WithCardButton.args={variant:"elevated",children:react.createElement(react.Fragment,null,react.createElement(cards_CardBody.A,{overline:"Search",headline:"Find details here",text:"Search spending in your community"},react.createElement(cards_CardButton.A,{text:"Search",variant:"secondary",link:"/search",backgroundColor:"light",buttonSize:"sm",textAlignment:"center"})))};const HeroWithBarFill=Template.bind({});HeroWithBarFill.args={children:react.createElement(react.Fragment,null,react.createElement(cards_CardHero.A,{fill:"#1a4480"}),react.createElement(cards_CardBody.A,{overline:"Resources",headline:"Learn how to use  our app"},react.createElement(cards_CardButton.A,{text:"Search",variant:"secondary",link:"/search",backgroundColor:"light",buttonSize:"sm",textAlignment:"center"})))};const HeroWithImage=Template.bind({});HeroWithImage.args={variant:"elevated",children:react.createElement(react.Fragment,null,react.createElement(cards_CardHero.A,{variant:"expanded",img:card_stories_image.src}),react.createElement(cards_CardBody.A,{overline:"Resources",headline:"Learn how to use  our app"},react.createElement(cards_CardButton.A,{text:"Search",variant:"secondary",link:"/search",backgroundColor:"light",buttonSize:"sm",textAlignment:"center"})))};const HeroFillWithImage=Template.bind({});HeroFillWithImage.args={children:react.createElement(react.Fragment,null,react.createElement(cards_CardHero.A,{variant:"expanded",fill:"#1a4480",img:card_stories_image.src}),react.createElement(cards_CardBody.A,{overline:"Resources",headline:"Learn how to use our app"},react.createElement(cards_CardButton.A,{text:"Search",variant:"secondary",link:"/search",backgroundColor:"light",buttonSize:"sm",textAlignment:"center"})))};const Default=Template.bind({});Default.tags=["autodocs","!dev"];const __namedExportsOrder=["Outline","Elevated","Fill","WithCardButton","HeroWithBarFill","HeroWithImage","HeroFillWithImage","Default"];Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...Outline.parameters?.docs?.source}}},Elevated.parameters={...Elevated.parameters,docs:{...Elevated.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...Elevated.parameters?.docs?.source}}},Fill.parameters={...Fill.parameters,docs:{...Fill.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...Fill.parameters?.docs?.source}}},WithCardButton.parameters={...WithCardButton.parameters,docs:{...WithCardButton.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...WithCardButton.parameters?.docs?.source}}},HeroWithBarFill.parameters={...HeroWithBarFill.parameters,docs:{...HeroWithBarFill.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...HeroWithBarFill.parameters?.docs?.source}}},HeroWithImage.parameters={...HeroWithImage.parameters,docs:{...HeroWithImage.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...HeroWithImage.parameters?.docs?.source}}},HeroFillWithImage.parameters={...HeroFillWithImage.parameters,docs:{...HeroFillWithImage.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...HeroFillWithImage.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardContainer {...args}></CardContainer>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...Default.parameters?.docs?.source}}}},"./components/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./styles/components/_buttons.scss");var propTypes={buttonSize:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["large","medium","small","lg","md","sm"]).isRequired,backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["light","dark"]).isRequired,buttonType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","primaryIcon","secondary","secondaryIcon","tertiary","tertiaryIcon","text","stacked","icon","inline","intext"]).isRequired,copy:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,image:prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,textAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left","center"]),imageAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left","right"]),additionalClassnames:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onKeyUp:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,buttonTitle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,to:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Button=function Button(props){var classNameList="";return"large"===props.buttonSize||"lg"===props.buttonSize?classNameList+=" button__lg ":"medium"===props.buttonSize||"md"===props.buttonSize?classNameList+=" button__md ":"small"!==props.buttonSize&&"sm"!==props.buttonSize||(classNameList+=" button__sm "),"primary"===props.buttonType?classNameList+=" button-type__primary-light ":"secondary"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__secondary-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__secondary-dark "):"primaryIcon"===props.buttonType?"light"===props.backgroundColor&&"left"===props.imageAlignment&&(classNameList+=" button-type__primary-left-icon-light "):"secondaryIcon"===props.buttonType?"light"===props.backgroundColor?"left"===props.imageAlignment&&(classNameList+=" button-type__secondary-left-icon-light "):"dark"===props.backgroundColor&&"left"===props.imageAlignment&&(classNameList+=" button-type__secondary-left-icon-dark "):"tertiary"===props.buttonType?classNameList+=" button-type__tertiary-light ":"tertiaryIcon"===props.buttonType?"left"===props.imageAlignment&&"light"===props.backgroundColor&&(classNameList+=" button-type__tertiary-left-icon-light "):"text"===props.buttonType?"light"===props.backgroundColor?"left"===props.imageAlignment?classNameList+=" button-type__text-left-icon-light ":"right"===props.imageAlignment?classNameList+=" button-type__text-right-icon-light ":classNameList+=" button-type__text-light ":"dark"===props.backgroundColor&&("left"===props.imageAlignment?classNameList+=" button-type__text-left-icon-dark ":"right"===props.imageAlignment?classNameList+=" button-type__text-right-icon-dark ":classNameList+=" button-type__text-dark "):"stacked"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__stacked-icon-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__stacked-icon-dark "):"icon"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__icon-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__icon-dark "):"inline"===props.buttonType?"right"===props.imageAlignment&&(classNameList+=" button-type__inline-right-icon-light "):"intext"===props.buttonType&&(classNameList+=" button-type__intext-light "),"left"===props.textAlignment?classNameList+=" button-text__left-align ":"center"===props.textAlignment&&(classNameList+=" button-text__center-align "),props.additionalClassnames&&(classNameList+=" ",classNameList+=props.additionalClassnames),classNameList.includes("button-type__intext-light")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{"aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onKeyUp:props.onKeyUp,onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth},target:"_blank",rel:"noopener noreferrer",href:props.to},props.copy):classNameList.includes("left-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.image,props.copy):classNameList.includes("right-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.copy,props.image):classNameList.includes("stacked-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stacked-button__only-image"},props.image),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stacked-button__only-text"},props.copy)):classNameList.includes("icon-light")||classNameList.includes("icon-dark")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.image):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.copy)};Button.propTypes=propTypes,__webpack_exports__.A=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonSize:{description:"",type:{name:"enum",value:[{value:"'large'",computed:!1},{value:"'medium'",computed:!1},{value:"'small'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1},{value:"'sm'",computed:!1}]},required:!0},backgroundColor:{description:"",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!0},buttonType:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'primaryIcon'",computed:!1},{value:"'secondary'",computed:!1},{value:"'secondaryIcon'",computed:!1},{value:"'tertiary'",computed:!1},{value:"'tertiaryIcon'",computed:!1},{value:"'text'",computed:!1},{value:"'stacked'",computed:!1},{value:"'icon'",computed:!1},{value:"'inline'",computed:!1},{value:"'intext'",computed:!1}]},required:!0},copy:{description:"",type:{name:"string"},required:!0},image:{description:"",type:{name:"element"},required:!1},textAlignment:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'center'",computed:!1}]},required:!1},imageAlignment:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},additionalClassnames:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onKeyUp:{description:"",type:{name:"func"},required:!1},buttonTitle:{description:"",type:{name:"string"},required:!0},disabled:{description:"",type:{name:"bool"},required:!1},maxWidth:{description:"",type:{name:"string"},required:!1},to:{description:"",type:{name:"string"},required:!1}}}},"./components/cards/CardBody.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),propTypes={overline:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,headline:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),subhead:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object,prop_types__WEBPACK_IMPORTED_MODULE_1___default().node]),imageContainerHeight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,customClassName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},CardBody=function CardBody(_ref){var overline=_ref.overline,headline=_ref.headline,onClick=_ref.onClick,subhead=_ref.subhead,text=_ref.text,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"":_ref$variant,children=_ref.children,imageContainerHeight=_ref.imageContainerHeight,_ref$customClassName=_ref.customClassName,customClassName=void 0===_ref$customClassName?"":_ref$customClassName;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__body ".concat(variant," ").concat(customClassName),style:{height:imageContainerHeight?"calc(100% - ".concat(imageContainerHeight," - 12px)"):""}},overline&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"overline"},overline),headline&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"headline",onClick:onClick},headline)),subhead&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"subhead"},subhead),text&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text"},text),children)};CardBody.propTypes=propTypes,__webpack_exports__.A=CardBody,CardBody.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{variant:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},customClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},overline:{description:"",type:{name:"string"},required:!1},headline:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},subhead:{description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"},{name:"node"}]},required:!1},imageContainerHeight:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}}},"./components/cards/CardButton.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Button.jsx"),propTypes={link:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,govLink:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,onlyPerformAction:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,action:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,customClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool},CardButton=function CardButton(_ref){var link=_ref.link,govLink=_ref.govLink,_ref$onlyPerformActio=_ref.onlyPerformAction,onlyPerformAction=void 0===_ref$onlyPerformActio?"false":_ref$onlyPerformActio,action=_ref.action,text=_ref.text,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"secondary":_ref$variant,_ref$customClassName=_ref.customClassName,customClassName=void 0===_ref$customClassName?"":_ref$customClassName,children=_ref.children,backgroundColor=(_ref.disabled,_ref.backgroundColor),buttonSize=_ref.buttonSize,textAlignment=_ref.textAlignment,variantMapper={primary:"primary",secondary:"secondary",text:"text"},variantMapperStyle={primary:"card__button--primary",secondary:"card__button--secondary ",text:"card__button--borderless"},handleKeyUp=function handleKeyUp(e){"Enter"===e.key&&action()},handleOnClick=function handleOnClick(){window.location.href=link,action()};return!0===onlyPerformAction?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__button"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{additionalClassnames:customClassName,onKeyUp:function onKeyUp(e){return handleKeyUp(e)},onClick:action,copy:text||children,buttonTitle:text||children,buttonSize:"md",buttonType:void 0===variantMapper[variant]?"secondary":variantMapper[variant],backgroundColor:"light",textAlignment:"center"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__button"},govLink?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__button--secondary ".concat(variantMapperStyle[variant]),role:"button",tabIndex:"0","aria-label":"".concat(text)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{additionalClassnames:customClassName,onClick:handleOnClick,onKeyUp:function onKeyUp(e){return handleKeyUp(e)},copy:text||children,buttonTitle:text||children,buttonSize:buttonSize,textAlignment:textAlignment,buttonType:void 0===variantMapper[variant]?"secondary":variantMapper[variant],backgroundColor:backgroundColor})):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"".concat(variantMapperStyle[variant]),role:"button",tabIndex:"0","aria-label":"".concat(text)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{additionalClassnames:customClassName,onClick:handleOnClick,onKeyUp:function onKeyUp(e){return handleKeyUp(e)},copy:text||children,buttonTitle:text||children,buttonSize:buttonSize,textAlignment:textAlignment,buttonType:void 0===variantMapper[variant]?"secondary":variantMapper[variant],backgroundColor:backgroundColor}))))};CardButton.propTypes=propTypes,__webpack_exports__.A=CardButton,CardButton.__docgenInfo={description:"",methods:[],displayName:"CardButton",props:{onlyPerformAction:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"bool"},required:!1},variant:{defaultValue:{value:'"secondary"',computed:!1},description:"",type:{name:"string"},required:!1},customClassName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},link:{description:"",type:{name:"string"},required:!1},govLink:{description:"",type:{name:"bool"},required:!1},action:{description:"",type:{name:"func"},required:!1},text:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./components/cards/CardHero.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),propTypes={img:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,fill:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,imageContainerHeight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,thumbnail:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},CardHero=function CardHero(_ref){var img=_ref.img,fill=_ref.fill,variant=_ref.variant,imageContainerHeight=_ref.imageContainerHeight,thumbnail=_ref.thumbnail,children=_ref.children,onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__hero ".concat(variant),onClick:onClick,style:{backgroundColor:"".concat(fill),height:"".concat(imageContainerHeight)}},thumbnail?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children):react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"".concat(img),role:"presentation",alt:""})))};CardHero.propTypes=propTypes,__webpack_exports__.A=CardHero,CardHero.__docgenInfo={description:"",methods:[],displayName:"CardHero",props:{img:{description:"",type:{name:"string"},required:!1},fill:{description:"",type:{name:"string"},required:!1},variant:{description:"",type:{name:"string"},required:!1},imageContainerHeight:{description:"",type:{name:"string"},required:!1},thumbnail:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"element"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}}},"./styles/components/_buttons.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./styles/components/cards/_cards.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);