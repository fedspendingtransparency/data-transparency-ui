"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[4257],{"./.storybook/stories/cardButton.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _components_cards_CardButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/cards/CardButton.jsx"),_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/flexGrid/FlexGridCol.jsx"),_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/flexGrid/FlexGridRow.jsx"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.default={parameters:{storySource:{source:'import CardButton from "../../components/cards/CardButton";\r\nimport FlexGridCol from "../../components/flexGrid/FlexGridCol";\r\nimport FlexGridRow from "../../components/flexGrid/FlexGridRow";\r\nimport React from "react";\r\n\r\nexport default {\r\n    title: \'General/Cards/CardButton\',\r\n    component: CardButton,\r\n    tags: [\'autodocs\', \'!dev\'],\r\n};\r\n\r\nconst Template = (args) => (\r\n  <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1} >\r\n      <CardButton {...args}></CardButton>\r\n    </FlexGridCol>\r\n  </FlexGridRow>\r\n);\r\n\r\nexport const Default = Template.bind({});',locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:1,line:18},startBody:{col:17,line:12},endBody:{col:1,line:18}}}}},title:"General/Cards/CardButton",component:_components_cards_CardButton__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs","!dev"]};const Default=(args=>react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_2__.A,{hasGutter:!0,gutterSize:"lg"},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_1__.A,{desktop:4,tablet:2,mobile:1},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_cards_CardButton__WEBPACK_IMPORTED_MODULE_0__.A,args)))).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <FlexGridRow hasGutter gutterSize="lg">\r\n    <FlexGridCol desktop={4} tablet={2} mobile={1}>\r\n      <CardButton {...args}></CardButton>\r\n    </FlexGridCol>\r\n  </FlexGridRow>',...Default.parameters?.docs?.source}}}}}]);