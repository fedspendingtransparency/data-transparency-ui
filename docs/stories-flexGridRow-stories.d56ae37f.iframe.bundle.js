"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[658],{"./.storybook/stories/flexGridRow.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Gutters:function(){return Gutters},KnobExample:function(){return KnobExample},LargeGutter:function(){return LargeGutter},SmallGutter:function(){return SmallGutter},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/flexGrid/FlexGridRow.jsx"),_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/flexGrid/FlexGridCol.jsx"),_components_flexGrid_FlexGridContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/flexGrid/FlexGridContainer.jsx");__webpack_exports__.default={parameters:{storySource:{source:'import React from \'react\';\r\nimport FlexGridRow from \'../../components/flexGrid/FlexGridRow\';\r\nimport FlexGridCol from \'../../components/flexGrid/FlexGridCol\';\r\nimport FlexGridContainer from "../../components/flexGrid/FlexGridContainer"\r\nexport default {\r\n  title: \'Flex Grid/Flex Grid Row\',\r\n  component: FlexGridRow,\r\n  tags: [\'autodocs\'],\r\n};\r\n\r\nconst Template = (args) => (\r\n<div className="story-flex-grid">\r\n    <div className="story-flex-grid-heading">Visual Example</div>\r\n    <FlexGridRow {...args} />\r\n  </div>\r\n)\r\n\r\nconst WithContainerTemplate = (args) => (\r\n  <div className="story-flex-grid">\r\n  <div className="story-flex-grid-heading">Visual Example</div>\r\n  <FlexGridContainer>\r\n  <FlexGridRow {...args} />\r\n  </FlexGridContainer>\r\n</div>\r\n)\r\n\r\nexport const Default = Template.bind({});\r\nDefault.args = {\r\n  children: (\r\n    <>\r\n     <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    </>\r\n  )\r\n}\r\n\r\nexport const Gutters = WithContainerTemplate.bind({});\r\nGutters.args = {\r\n  hasGutter: true,\r\n  children: (\r\n    <>\r\n     <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    </>\r\n  )\r\n}\r\n\r\nexport const SmallGutter = WithContainerTemplate.bind({});\r\nSmallGutter.args = {\r\n  hasGutter: true,\r\n  gutterSize: "sm",\r\n  children: (\r\n    <>\r\n     <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    </>\r\n  )\r\n}\r\n\r\nexport const LargeGutter = WithContainerTemplate.bind({});\r\nLargeGutter.args = {\r\n  hasGutter: true,\r\n  gutterSize: "lg",\r\n  children: (\r\n    <>\r\n     <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    </>\r\n  )\r\n}\r\n\r\nexport const KnobExample = WithContainerTemplate.bind({})\r\nKnobExample.args = {\r\n  children: (\r\n    <>\r\n     <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    <FlexGridCol>\r\n      <div>column content</div>\r\n    </FlexGridCol>\r\n    </>\r\n  )\r\n}',locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:1,line:16},startBody:{col:17,line:11},endBody:{col:1,line:16}},gutters:{startLoc:{col:30,line:18},endLoc:{col:1,line:25},startBody:{col:30,line:18},endBody:{col:1,line:25}},"small-gutter":{startLoc:{col:30,line:18},endLoc:{col:1,line:25},startBody:{col:30,line:18},endBody:{col:1,line:25}},"large-gutter":{startLoc:{col:30,line:18},endLoc:{col:1,line:25},startBody:{col:30,line:18},endBody:{col:1,line:25}},"knob-example":{startLoc:{col:30,line:18},endLoc:{col:1,line:25},startBody:{col:30,line:18},endBody:{col:1,line:25}}}}},title:"Flex Grid/Flex Grid Row",component:_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]};const WithContainerTemplate=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-flex-grid"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-flex-grid-heading"},"Visual Example"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridContainer__WEBPACK_IMPORTED_MODULE_3__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_1__.A,args))),Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-flex-grid"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-flex-grid-heading"},"Visual Example"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridRow__WEBPACK_IMPORTED_MODULE_1__.A,args))).bind({});Default.args={children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")))};const Gutters=WithContainerTemplate.bind({});Gutters.args={hasGutter:!0,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")))};const SmallGutter=WithContainerTemplate.bind({});SmallGutter.args={hasGutter:!0,gutterSize:"sm",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")))};const LargeGutter=WithContainerTemplate.bind({});LargeGutter.args={hasGutter:!0,gutterSize:"lg",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")))};const KnobExample=WithContainerTemplate.bind({});KnobExample.args={children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridCol__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"column content")))};const __namedExportsOrder=["Default","Gutters","SmallGutter","LargeGutter","KnobExample"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <div className="story-flex-grid">\r\n    <div className="story-flex-grid-heading">Visual Example</div>\r\n    <FlexGridRow {...args} />\r\n  </div>',...Default.parameters?.docs?.source}}},Gutters.parameters={...Gutters.parameters,docs:{...Gutters.parameters?.docs,source:{originalSource:'args => <div className="story-flex-grid">\r\n  <div className="story-flex-grid-heading">Visual Example</div>\r\n  <FlexGridContainer>\r\n  <FlexGridRow {...args} />\r\n  </FlexGridContainer>\r\n</div>',...Gutters.parameters?.docs?.source}}},SmallGutter.parameters={...SmallGutter.parameters,docs:{...SmallGutter.parameters?.docs,source:{originalSource:'args => <div className="story-flex-grid">\r\n  <div className="story-flex-grid-heading">Visual Example</div>\r\n  <FlexGridContainer>\r\n  <FlexGridRow {...args} />\r\n  </FlexGridContainer>\r\n</div>',...SmallGutter.parameters?.docs?.source}}},LargeGutter.parameters={...LargeGutter.parameters,docs:{...LargeGutter.parameters?.docs,source:{originalSource:'args => <div className="story-flex-grid">\r\n  <div className="story-flex-grid-heading">Visual Example</div>\r\n  <FlexGridContainer>\r\n  <FlexGridRow {...args} />\r\n  </FlexGridContainer>\r\n</div>',...LargeGutter.parameters?.docs?.source}}},KnobExample.parameters={...KnobExample.parameters,docs:{...KnobExample.parameters?.docs,source:{originalSource:'args => <div className="story-flex-grid">\r\n  <div className="story-flex-grid-heading">Visual Example</div>\r\n  <FlexGridContainer>\r\n  <FlexGridRow {...args} />\r\n  </FlexGridContainer>\r\n</div>',...KnobExample.parameters?.docs?.source}}}},"./components/flexGrid/FlexGridContainer.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return GridContainer}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./helpers/flexGridHelper.js"),_excluded=["children","className"];function GridContainer(_ref){var children=_ref.children,className=_ref.className,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__.A)({className:(0,_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__.E)(["usa-dt-flex-grid__container",className])},props),children)}__webpack_require__("./styles/components/_flexGrid.scss"),GridContainer.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},GridContainer.__docgenInfo={description:"",methods:[],displayName:"GridContainer",props:{children:{description:"",type:{name:"node"},required:!0},className:{description:"Any additional classes to apply",type:{name:"string"},required:!1}}}}}]);