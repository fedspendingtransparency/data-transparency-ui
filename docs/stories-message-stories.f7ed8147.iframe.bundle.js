(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[772],{"./.storybook/stories/message.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomErrorMessage:function(){return CustomErrorMessage},DefaultComingSoonPlaceholder:function(){return DefaultComingSoonPlaceholder},DefaultErrorMessage:function(){return DefaultErrorMessage},DefaultGenericMessage:function(){return DefaultGenericMessage},DefaultLoadingMessage:function(){return DefaultLoadingMessage},DefaultNoResultMessage:function(){return DefaultNoResultMessage},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_components_messages_LoadingMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/messages/LoadingMessage.jsx"),_components_messages_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/messages/ErrorMessage.jsx"),_components_messages_NoResultsMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/messages/NoResultsMessage.jsx"),_components_messages_ComingSoon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/messages/ComingSoon.jsx"),_components_messages_GenericMessage__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./components/messages/GenericMessage.jsx");__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\r\nimport LoadingMessage from '../../components/messages/LoadingMessage';\r\nimport ErrorMessage from '../../components/messages/ErrorMessage';\r\nimport NoResultsMessage from '../../components/messages/NoResultsMessage';\r\nimport ComingSoon from '../../components/messages/ComingSoon';\r\nimport GenericMessage from '../../components/messages/GenericMessage';\r\n\r\nexport default {\r\n  title: 'Messages',\r\n  component: GenericMessage,\r\n  tags: ['autodocs'],\r\n};\r\n\r\nexport const DefaultErrorMessage = (args) => <ErrorMessage {...args} />;\r\n\r\nexport const CustomErrorMessage = DefaultErrorMessage.bind({});\r\nCustomErrorMessage.args = {\r\n  title: \"Your title\",\r\n  description: \"Custom error message\"\r\n}\r\n\r\nexport const DefaultGenericMessage = (args) => <GenericMessage {...args} />\r\nDefaultGenericMessage.args = {\r\n  title: \"Your title\",\r\n  description: \"Custom description here\",\r\n  icon: <FontAwesomeIcon icon=\"pencil-alt\"/>,\r\n  className: \"your-class\"\r\n}\r\n\r\nexport const DefaultLoadingMessage = (args) => <LoadingMessage {...args} />\r\n\r\nexport const DefaultNoResultMessage = (args) => <NoResultsMessage {...args} />\r\n\r\nexport const DefaultComingSoonPlaceholder = (args) => <ComingSoon {...args} />\r\n\r\n",locationsMap:{"default-error-message":{startLoc:{col:35,line:15},endLoc:{col:71,line:15},startBody:{col:35,line:15},endBody:{col:71,line:15}},"custom-error-message":{startLoc:{col:35,line:15},endLoc:{col:71,line:15},startBody:{col:35,line:15},endBody:{col:71,line:15}},"default-generic-message":{startLoc:{col:37,line:23},endLoc:{col:75,line:23},startBody:{col:37,line:23},endBody:{col:75,line:23}},"default-loading-message":{startLoc:{col:37,line:31},endLoc:{col:75,line:31},startBody:{col:37,line:31},endBody:{col:75,line:31}},"default-no-result-message":{startLoc:{col:38,line:33},endLoc:{col:78,line:33},startBody:{col:38,line:33},endBody:{col:78,line:33}},"default-coming-soon-placeholder":{startLoc:{col:44,line:35},endLoc:{col:78,line:35},startBody:{col:44,line:35},endBody:{col:78,line:35}}}}},title:"Messages",component:_components_messages_GenericMessage__WEBPACK_IMPORTED_MODULE_6__.A,tags:["autodocs"]};const DefaultErrorMessage=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_messages_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__.A,args),CustomErrorMessage=DefaultErrorMessage.bind({});CustomErrorMessage.args={title:"Your title",description:"Custom error message"};const DefaultGenericMessage=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_messages_GenericMessage__WEBPACK_IMPORTED_MODULE_6__.A,args);DefaultGenericMessage.args={title:"Your title",description:"Custom description here",icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:"pencil-alt"}),className:"your-class"};const DefaultLoadingMessage=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_messages_LoadingMessage__WEBPACK_IMPORTED_MODULE_2__.A,args),DefaultNoResultMessage=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_messages_NoResultsMessage__WEBPACK_IMPORTED_MODULE_4__.A,args),DefaultComingSoonPlaceholder=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_messages_ComingSoon__WEBPACK_IMPORTED_MODULE_5__.A,args),__namedExportsOrder=["DefaultErrorMessage","CustomErrorMessage","DefaultGenericMessage","DefaultLoadingMessage","DefaultNoResultMessage","DefaultComingSoonPlaceholder"];DefaultErrorMessage.parameters={...DefaultErrorMessage.parameters,docs:{...DefaultErrorMessage.parameters?.docs,source:{originalSource:"args => <ErrorMessage {...args} />",...DefaultErrorMessage.parameters?.docs?.source}}},CustomErrorMessage.parameters={...CustomErrorMessage.parameters,docs:{...CustomErrorMessage.parameters?.docs,source:{originalSource:"args => <ErrorMessage {...args} />",...CustomErrorMessage.parameters?.docs?.source}}},DefaultGenericMessage.parameters={...DefaultGenericMessage.parameters,docs:{...DefaultGenericMessage.parameters?.docs,source:{originalSource:"args => <GenericMessage {...args} />",...DefaultGenericMessage.parameters?.docs?.source}}},DefaultLoadingMessage.parameters={...DefaultLoadingMessage.parameters,docs:{...DefaultLoadingMessage.parameters?.docs,source:{originalSource:"args => <LoadingMessage {...args} />",...DefaultLoadingMessage.parameters?.docs?.source}}},DefaultNoResultMessage.parameters={...DefaultNoResultMessage.parameters,docs:{...DefaultNoResultMessage.parameters?.docs,source:{originalSource:"args => <NoResultsMessage {...args} />",...DefaultNoResultMessage.parameters?.docs?.source}}},DefaultComingSoonPlaceholder.parameters={...DefaultComingSoonPlaceholder.parameters,docs:{...DefaultComingSoonPlaceholder.parameters?.docs,source:{originalSource:"args => <ComingSoon {...args} />",...DefaultComingSoonPlaceholder.parameters?.docs?.source}}}},"./components/messages/ComingSoon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_GenericMessage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/messages/GenericMessage.jsx");__webpack_require__("./styles/components/_messages.scss");var ComingSoon=function ComingSoon(_ref){var className=_ref.className;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GenericMessage__WEBPACK_IMPORTED_MODULE_1__.A,{className:"coming soon ".concat(className),title:"Coming Soon",description:"This feature is currently under development."})};__webpack_exports__.A=ComingSoon,ComingSoon.__docgenInfo={description:"",methods:[],displayName:"ComingSoon"}},"./components/messages/ErrorMessage.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_GenericMessage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/messages/GenericMessage.jsx"),propTypes={description:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},ErrorMessage=function ErrorMessage(_ref){var _ref$description=_ref.description,description=void 0===_ref$description?"Something went wrong while gathering your data.":_ref$description,icon=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:"exclamation-triangle"});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GenericMessage__WEBPACK_IMPORTED_MODULE_2__.A,{description:description,title:"An error occurred",icon:icon,className:"error"})};ErrorMessage.propTypes=propTypes,__webpack_exports__.A=ErrorMessage,ErrorMessage.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{description:{defaultValue:{value:"'Something went wrong while gathering your data.'",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./components/messages/GenericMessage.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./styles/components/_messages.scss");var propTypes={title:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_1___default().object,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},GenericMessage=function GenericMessage(_ref){var icon=_ref.icon,title=_ref.title,description=_ref.description,className=_ref.className;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"usda-message".concat(className&&" usda-message_".concat(className))},icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"usda-message__icon"},icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"usda-message__title"},title),description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"usda-message__description"},description))};GenericMessage.propTypes=propTypes,__webpack_exports__.A=GenericMessage,GenericMessage.__docgenInfo={description:"",methods:[],displayName:"GenericMessage",props:{title:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!1},icon:{description:"",type:{name:"object"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}},"./components/messages/LoadingMessage.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_transition_group__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-transition-group/esm/TransitionGroup.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),LoadingMessage=function LoadingMessage(_ref){var _ref$loadingText=_ref.loadingText,loadingText=void 0===_ref$loadingText?"Gathering your data...":_ref$loadingText;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.A,{className:"usda-message usda-message_loading"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.A,{classNames:"usda-loading-animation__container",timeout:{exit:225,enter:195},exit:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"usda-loading-animation__container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"usda-loading-animation"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"usda-loading-bars",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"50",height:"50",style:{opacity:0}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{className:"bar-one",x:"0",y:"0",height:"50",width:"10"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{className:"bar-two",x:"13",y:"0",height:"50",width:"10"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{className:"bar-three",x:"26",y:"0",height:"50",width:"10"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{className:"bar-four",x:"39",y:"0",height:"50",width:"10"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"loading-message"},loadingText))))};LoadingMessage.propTypes={loadingText:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},__webpack_exports__.A=LoadingMessage,LoadingMessage.__docgenInfo={description:"",methods:[],displayName:"LoadingMessage",props:{loadingText:{defaultValue:{value:'"Gathering your data..."',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./components/messages/NoResultsMessage.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_messages_GenericMessage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/messages/GenericMessage.jsx"),NoResultsMessage=function NoResultsMessage(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_messages_GenericMessage__WEBPACK_IMPORTED_MODULE_1__.A,{title:"No Results",description:"No available data to display.",className:"no-results"})};__webpack_exports__.A=NoResultsMessage,NoResultsMessage.__docgenInfo={description:"",methods:[],displayName:"NoResultsMessage"}},"./node_modules/prop-types/factoryWithThrowingShims.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(module){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./styles/components/_messages.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__)}}]);