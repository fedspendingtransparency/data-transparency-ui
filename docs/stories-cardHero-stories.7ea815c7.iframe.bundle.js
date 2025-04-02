"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[101],{"./.storybook/stories/cardHero.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _components_cards_CardHero__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/cards/CardHero.jsx"),_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/flexGrid/FlexGridCol.jsx"),_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/flexGrid/FlexGridRow.jsx"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.default={parameters:{storySource:{source:'import CardHero from "../../components/cards/CardHero";\r\nimport FlexGridCol from "../../components/flexGrid/FlexGridCol";\r\nimport FlexGridRow from "../../components/flexGrid/FlexGridRow";\r\nimport React from "react";\r\n\r\nexport default {\r\n    title: \'General/Cards/CardHero\',\r\n    component: CardHero,\r\n    tags: [\'autodocs\', \'!dev\'],\r\n};\r\n\r\nconst Template = (args) => (\r\n  <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1} >\r\n      <CardHero {...args}></CardHero>\r\n    </FlexGridCol>\r\n  </FlexGridRow>\r\n);\r\nexport const Default = Template.bind({});',locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:1,line:18},startBody:{col:17,line:12},endBody:{col:1,line:18}}}}},title:"General/Cards/CardHero",component:_components_cards_CardHero__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs","!dev"]};const Default=(args=>react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_2__.A,{hasGutter:!0,gutterSize:"lg"},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_1__.A,{desktop:4,tablet:2,mobile:1},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_cards_CardHero__WEBPACK_IMPORTED_MODULE_0__.A,args)))).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardHero {...args}></CardHero>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...Default.parameters?.docs?.source}}}},"./components/cards/CardHero.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),propTypes={img:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,fill:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,imageContainerHeight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,thumbnail:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},CardHero=function CardHero(_ref){var img=_ref.img,fill=_ref.fill,variant=_ref.variant,imageContainerHeight=_ref.imageContainerHeight,thumbnail=_ref.thumbnail,children=_ref.children,onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__hero ".concat(variant),onClick:onClick,style:{backgroundColor:"".concat(fill),height:"".concat(imageContainerHeight)}},thumbnail?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children):react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"".concat(img),role:"presentation",alt:""})))};CardHero.propTypes=propTypes,__webpack_exports__.A=CardHero,CardHero.__docgenInfo={description:"",methods:[],displayName:"CardHero",props:{img:{description:"",type:{name:"string"},required:!1},fill:{description:"",type:{name:"string"},required:!1},variant:{description:"",type:{name:"string"},required:!1},imageContainerHeight:{description:"",type:{name:"string"},required:!1},thumbnail:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"element"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}}}}]);