(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[631],{"./.storybook/stories/flexGridContainer.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultFlexGridContainer:function(){return DefaultFlexGridContainer},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_flexGrid_FlexGridContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/flexGrid/FlexGridContainer.jsx");__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\nimport FlexGridContainer from '../../components/flexGrid/FlexGridContainer';\r\n\r\n\r\nexport default {\r\n  title: 'Flex Grid/Flex Grid Container',\r\n  component: FlexGridContainer,\r\n};\r\n\r\nexport const DefaultFlexGridContainer = (args) => (\r\n  <div className=\"story-flex-grid\">\r\n    <div className=\"story-flex-grid-heading\">Visual Example</div>\r\n    <FlexGridContainer {...args}>\r\n      container\r\n  </FlexGridContainer>\r\n  </div>\r\n)\r\n\r\nDefaultFlexGridContainer.args = {\r\n  className: \"\",\r\n}\r\n",locationsMap:{"default-flex-grid-container":{startLoc:{col:40,line:10},endLoc:{col:1,line:17},startBody:{col:40,line:10},endBody:{col:1,line:17}}}}},title:"Flex Grid/Flex Grid Container",component:_components_flexGrid_FlexGridContainer__WEBPACK_IMPORTED_MODULE_1__.A};const DefaultFlexGridContainer=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-flex-grid"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story-flex-grid-heading"},"Visual Example"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_flexGrid_FlexGridContainer__WEBPACK_IMPORTED_MODULE_1__.A,args,"container"));DefaultFlexGridContainer.args={className:""};const __namedExportsOrder=["DefaultFlexGridContainer"];DefaultFlexGridContainer.parameters={...DefaultFlexGridContainer.parameters,docs:{...DefaultFlexGridContainer.parameters?.docs,source:{originalSource:'args => <div className="story-flex-grid">\r\n    <div className="story-flex-grid-heading">Visual Example</div>\r\n    <FlexGridContainer {...args}>\r\n      container\r\n  </FlexGridContainer>\r\n  </div>',...DefaultFlexGridContainer.parameters?.docs?.source}}}},"./components/flexGrid/FlexGridContainer.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return GridContainer}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./helpers/flexGridHelper.js"),_excluded=["children","className"];function GridContainer(_ref){var children=_ref.children,className=_ref.className,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__.A)({className:(0,_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__.E)(["usa-dt-flex-grid__container",className])},props),children)}__webpack_require__("./styles/components/_flexGrid.scss"),GridContainer.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},GridContainer.__docgenInfo={description:"",methods:[],displayName:"GridContainer",props:{children:{description:"",type:{name:"node"},required:!0},className:{description:"Any additional classes to apply",type:{name:"string"},required:!1}}}},"./helpers/flexGridHelper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return createClassString}});var createClassString=function createClassString(classes){return classes.map((function(c){return c?c.trim():c})).filter((function(c){return c})).join(" ")}},"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:function(){return _extends}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _objectWithoutProperties}});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.A)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{A:function(){return _objectWithoutPropertiesLoose}})},"./node_modules/prop-types/factoryWithThrowingShims.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(module){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./styles/components/_flexGrid.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__)}}]);