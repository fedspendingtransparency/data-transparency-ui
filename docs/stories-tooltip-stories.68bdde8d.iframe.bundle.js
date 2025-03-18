/*! For license information please see stories-tooltip-stories.68bdde8d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[304],{"./.storybook/stories/tooltip.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},SmartTooltipLeft:function(){return SmartTooltipLeft},SmartTooltipRight:function(){return SmartTooltipRight},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_infoTooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/infoTooltip/TooltipWrapper.jsx"),_misc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/misc.jsx");__webpack_exports__.default={parameters:{storySource:{source:'import React from \'react\';\r\nimport TooltipWrapper from \'../../components/infoTooltip/TooltipWrapper\';\r\nimport { Tooltip } from \'../misc\';\r\n\r\nexport default {\r\n  title: \'Tooltip Wrapper\',\r\n  component: TooltipWrapper,\r\n  tags: [\'autodocs\']\r\n};\r\n\r\nconst Template = (args) => (\r\n  <div className={"story__container tooltip-story"} >\r\n    <TooltipWrapper {...args}/>\r\n  </div>\r\n)\r\n\r\nconst LeftTemplate = (args) => (\r\n  <div className={"story__container tooltip-story smart-tooltip-left"} >\r\n    <TooltipWrapper {...args}/>\r\n  </div>\r\n)\r\nconst RightTemplate = (args) => (\r\n  <div className={"story__container tooltip-story smart-tooltip-right"} >\r\n    <TooltipWrapper {...args}/>\r\n  </div>\r\n)\r\n\r\nexport const Default = Template.bind({});\r\nDefault.args = {\r\n  icon: "info",\r\n  tooltipComponent: <Tooltip />,\r\n  wide: false,\r\n  tooltipPosition: "left",\r\n  controlledProps: {\r\n    isControlled: false,\r\n    isVisible: false\r\n  }\r\n}\r\n\r\n\r\nexport const SmartTooltipLeft = LeftTemplate.bind({});\r\nSmartTooltipLeft.args = {\r\n  icon: "info",\r\n  tooltipComponent: <Tooltip />,\r\n  wide: true,\r\n  tooltipPosition: "left",\r\n  controlledProps: {\r\n    isControlled: false,\r\n    isVisible: false\r\n  }\r\n}\r\n\r\nexport const SmartTooltipRight = RightTemplate.bind({});\r\nSmartTooltipRight.args = {\r\n  icon: "info",\r\n  tooltipComponent: <Tooltip />,\r\n  wide: true,\r\n  tooltipPosition: "right",\r\n  controlledProps: {\r\n    isControlled: false,\r\n    isVisible: false\r\n  }\r\n}',locationsMap:{default:{startLoc:{col:17,line:11},endLoc:{col:1,line:15},startBody:{col:17,line:11},endBody:{col:1,line:15}},"smart-tooltip-left":{startLoc:{col:21,line:17},endLoc:{col:1,line:21},startBody:{col:21,line:17},endBody:{col:1,line:21}},"smart-tooltip-right":{startLoc:{col:22,line:22},endLoc:{col:1,line:26},startBody:{col:22,line:22},endBody:{col:1,line:26}}}}},title:"Tooltip Wrapper",component:_components_infoTooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]};const Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story__container tooltip-story"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_infoTooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_1__.A,args))).bind({});Default.args={icon:"info",tooltipComponent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_misc__WEBPACK_IMPORTED_MODULE_2__.m_,null),wide:!1,tooltipPosition:"left",controlledProps:{isControlled:!1,isVisible:!1}};const SmartTooltipLeft=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story__container tooltip-story smart-tooltip-left"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_infoTooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_1__.A,args))).bind({});SmartTooltipLeft.args={icon:"info",tooltipComponent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_misc__WEBPACK_IMPORTED_MODULE_2__.m_,null),wide:!0,tooltipPosition:"left",controlledProps:{isControlled:!1,isVisible:!1}};const SmartTooltipRight=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story__container tooltip-story smart-tooltip-right"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_infoTooltip_TooltipWrapper__WEBPACK_IMPORTED_MODULE_1__.A,args))).bind({});SmartTooltipRight.args={icon:"info",tooltipComponent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_misc__WEBPACK_IMPORTED_MODULE_2__.m_,null),wide:!0,tooltipPosition:"right",controlledProps:{isControlled:!1,isVisible:!1}};const __namedExportsOrder=["Default","SmartTooltipLeft","SmartTooltipRight"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <div className={"story__container tooltip-story"}>\r\n    <TooltipWrapper {...args} />\r\n  </div>',...Default.parameters?.docs?.source}}},SmartTooltipLeft.parameters={...SmartTooltipLeft.parameters,docs:{...SmartTooltipLeft.parameters?.docs,source:{originalSource:'args => <div className={"story__container tooltip-story smart-tooltip-left"}>\r\n    <TooltipWrapper {...args} />\r\n  </div>',...SmartTooltipLeft.parameters?.docs?.source}}},SmartTooltipRight.parameters={...SmartTooltipRight.parameters,docs:{...SmartTooltipRight.parameters?.docs,source:{originalSource:'args => <div className={"story__container tooltip-story smart-tooltip-right"}>\r\n    <TooltipWrapper {...args} />\r\n  </div>',...SmartTooltipRight.parameters?.docs?.source}}}},"./components/infoTooltip/TooltipWrapper.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return TooltipWrapper}});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/lodash.js"),classnames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}__webpack_require__("./styles/components/infoTooltip/_tooltipWrapper.scss");var propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_7___default().element,tooltipComponent:prop_types__WEBPACK_IMPORTED_MODULE_7___default().element,tooltipPosition:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,wide:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,controlledProps:prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({isControlled:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,showTooltip:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,closeTooltip:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,isVisible:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool}),offsetAdjustments:prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({top:prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,right:prop_types__WEBPACK_IMPORTED_MODULE_7___default().number,left:prop_types__WEBPACK_IMPORTED_MODULE_7___default().number}),styles:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object,onMouseMoveTooltip:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,onMouseLeaveTooltip:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func},defaultProps={className:null,children:null,toolTipComponent:null,tooltipPosition:"right",wide:!1,icon:"",controlledProps:{isControlled:!1,showTooltip:function showTooltip(){},closeTooltip:function closeTooltip(){},isVisible:!1},width:375,offsetAdjustments:{top:-15,right:0,left:0},styles:{}},tooltipIcons={info:react__WEBPACK_IMPORTED_MODULE_3__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.g,{className:"tooltip__icon",icon:"info-circle"})},TooltipWrapper=function(_React$Component){function TooltipWrapper(props){var _this;return(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__.A)(this,TooltipWrapper),_this=function _callSuper(t,o,e){return o=(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.A)(o),(0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.A)(t).constructor):o.apply(t,e))}(this,TooltipWrapper,[props]),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(_this,"onMouseMoveTooltip",(function(){_this.props.onMouseMoveTooltip?_this.props.onMouseMoveTooltip():_this.props.controlledProps.isControlled?_this.props.controlledProps.showTooltip():_this.state.isHoveringOnTooltip||_this.setState({isHoveringOnTooltip:!0})})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(_this,"onMouseLeaveTooltip",(function(){_this.props.onMouseLeaveTooltip?_this.props.onMouseLeaveTooltip():_this.state.isHoveringOnTooltip&&_this.setState({isHoveringOnTooltip:!1})})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(_this,"getTooltipWidth",(function(){var _this$getAvailableHor=_this.getAvailableHorizontalSpace(),spaceToRight=_this$getAvailableHor.right,spaceToLeft=_this$getAvailableHor.left,total=_this$getAvailableHor.total,greatestSpace=spaceToRight>spaceToLeft?spaceToRight:spaceToLeft;return total<425?total-10:"bottom"===_this.props.tooltipPosition?_this.props.width:_this.props.wide?greatestSpace>800?700:greatestSpace-5:_this.props.width})),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(_this,"getDimensionsForMobile",(function(isMobile,width){return isMobile?{top:"".concat(_this.tooltipContainer.clientHeight+_this.tooltipContainer.offsetTop+8,"px"),width:width,left:"".concat(_this.tooltipContainer.clientWidth/2-8,"px")}:_objectSpread(_objectSpread({},_this.state.spacerStyles),{},{width:width})})),_this.state={showTooltip:!1,isHoveringOnTooltip:!1,offsetTop:0,arrowDirection:"left",spacerStyles:{}},_this.showTooltip=_this.showTooltip.bind(_this),_this.closeTooltip=_this.closeTooltip.bind(_this),_this.setTooltipDimensions=(0,lodash__WEBPACK_IMPORTED_MODULE_4__.throttle)(_this.setTooltipDimensions.bind(_this),16),_this}return(0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__.A)(TooltipWrapper,_React$Component),(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__.A)(TooltipWrapper,[{key:"componentDidMount",value:function componentDidMount(){this.setTooltipDimensions(),window.addEventListener("scroll",(0,lodash__WEBPACK_IMPORTED_MODULE_4__.throttle)(this.setTooltipDimensions,500)),window.addEventListener("resize",(0,lodash__WEBPACK_IMPORTED_MODULE_4__.throttle)(this.setTooltipDimensions,100))}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.setTooltipDimensions()}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("scroll",this.setTooltipDimensions),window.removeEventListener("resize",this.setTooltipDimensions)}},{key:"getAvailableHorizontalSpace",value:function getAvailableHorizontalSpace(){var totalSpace=window.innerWidth,_this$tooltipContaine=this.tooltipContainer,tooltipContainerLeftPosition=_this$tooltipContaine.offsetLeft;return{right:totalSpace-tooltipContainerLeftPosition-_this$tooltipContaine.clientWidth,left:tooltipContainerLeftPosition,total:totalSpace}}},{key:"setTooltipDimensions",value:function setTooltipDimensions(){if(Object.keys(this.props.styles).includes("transform")&&this.tooltipContainer)"bottom"===this.props.tooltipPosition?this.setState({arrowDirection:"bottom",spacerStyle:{width:this.getTooltipWidth()}}):this.setState({spacerStyle:{width:this.getTooltipWidth()}});else if(this.tooltipContainer){var tooltipWidth=this.getTooltipWidth(),_this$getAvailableHor2=this.getAvailableHorizontalSpace(),spaceToLeft=_this$getAvailableHor2.left,total=_this$getAvailableHor2.total,spaceToRight=_this$getAvailableHor2.right,offsetTop=this.tooltipContainer.offsetTop+this.props.offsetAdjustments.top,isMobile=total<700;if("bottom"===this.props.tooltipPosition||isMobile)this.setState({arrowDirection:"bottom",spacerStyle:_objectSpread({},this.getDimensionsForMobile(isMobile,tooltipWidth))});else if("right"===this.props.tooltipPosition&&spaceToRight<tooltipWidth){var startingPositionLeft=spaceToLeft-tooltipWidth+this.tooltipContainer.clientWidth;this.setState({arrowDirection:"smart-bottom-left",spacerStyle:{top:this.tooltipContainer.offsetTop+16+this.tooltipContainer.clientHeight,left:startingPositionLeft+20,width:tooltipWidth}})}else if("left"===this.props.tooltipPosition&&spaceToLeft<tooltipWidth){var _startingPositionLeft=spaceToLeft;this.setState({arrowDirection:"smart-bottom-right",spacerStyle:{top:this.tooltipContainer.offsetTop+16+this.tooltipContainer.clientHeight,left:_startingPositionLeft-20,width:tooltipWidth}})}else if("left"===this.props.tooltipPosition){var _startingPositionLeft2=spaceToLeft-tooltipWidth;this.setState({arrowDirection:"right",spacerStyle:{top:offsetTop,left:_startingPositionLeft2-5,width:tooltipWidth}})}else{var _startingPositionLeft3=spaceToLeft+this.tooltipContainer.clientWidth;this.setState({arrowDirection:"left",spacerStyle:{top:offsetTop,left:_startingPositionLeft3+5,width:tooltipWidth}})}}}},{key:"showTooltip",value:function showTooltip(){this.props.controlledProps.isControlled?this.props.controlledProps.showTooltip():this.state.showTooltip||this.setState({showTooltip:!0})}},{key:"closeTooltip",value:function closeTooltip(){this.props.controlledProps.isControlled?this.props.controlledProps.closeTooltip():this.state.showTooltip&&this.setState({showTooltip:!1})}},{key:"render",value:function render(){var _this2=this,tooltip=null;return(this.props.controlledProps.isControlled&&this.props.controlledProps.isVisible||this.state.showTooltip||this.state.isHoveringOnTooltip)&&(tooltip=react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"tooltip-spacer",style:this.state.spacerStyle},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"tooltip",id:"tooltip",role:"tooltip",onMouseEnter:this.onMouseMoveTooltip,onMouseMove:this.onMouseMoveTooltip,onMouseLeave:this.onMouseLeaveTooltip,ref:function ref(div){_this2.tooltipReference=div}},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"tooltip__interior"},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"tooltip-pointer ".concat(this.state.arrowDirection)}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"tooltip__content"},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"tooltip__message"},this.props.tooltipComponent)))))),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_5___default()((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({"tooltip-wrapper":!0},this.props.className,null!==this.props.className)),style:this.props.styles},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{ref:function ref(div){_this2.tooltipContainer=div}},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{role:"button",tabIndex:"0","aria-label":"Tooltip Hover Wrapper",className:"tooltip__hover-wrapper",onBlur:this.closeTooltip,onFocus:this.showTooltip,onKeyPress:this.showTooltip,onMouseEnter:this.showTooltip,onMouseLeave:this.closeTooltip,onClick:this.showTooltip},this.props.children,this.props.icon&&tooltipIcons[this.props.icon]),tooltip))}}])}(react__WEBPACK_IMPORTED_MODULE_3__.Component);TooltipWrapper.propTypes=propTypes,TooltipWrapper.defaultProps=defaultProps,TooltipWrapper.__docgenInfo={description:"",methods:[{name:"onMouseMoveTooltip",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseLeaveTooltip",docblock:null,modifiers:[],params:[],returns:null},{name:"getAvailableHorizontalSpace",docblock:null,modifiers:[],params:[],returns:null},{name:"getTooltipWidth",docblock:null,modifiers:[],params:[],returns:null},{name:"getDimensionsForMobile",docblock:null,modifiers:[],params:[{name:"isMobile",optional:!1,type:null},{name:"width",optional:!1,type:null}],returns:null},{name:"setTooltipDimensions",docblock:null,modifiers:[],params:[],returns:null},{name:"showTooltip",docblock:null,modifiers:[],params:[],returns:null},{name:"closeTooltip",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TooltipWrapper",props:{className:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1},toolTipComponent:{defaultValue:{value:"null",computed:!1},required:!1},tooltipPosition:{defaultValue:{value:"'right'",computed:!1},description:"",type:{name:"string"},required:!1},wide:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},controlledProps:{defaultValue:{value:"{\r\n    isControlled: false,\r\n    showTooltip: () => {},\r\n    closeTooltip: () => {},\r\n    isVisible: false\r\n}",computed:!1},description:"",type:{name:"shape",value:{isControlled:{name:"bool",required:!1},showTooltip:{name:"func",required:!1},closeTooltip:{name:"func",required:!1},isVisible:{name:"bool",required:!1}}},required:!1},width:{defaultValue:{value:"375",computed:!1},description:"",type:{name:"number"},required:!1},offsetAdjustments:{defaultValue:{value:"{\r\n    top: -15, // So that the arrow points at the middle of the tooltip trigger area 👌\r\n    right: 0, // InfoToolTip offset\r\n    left: 0\r\n}",computed:!1},description:"",type:{name:"shape",value:{top:{name:"number",required:!1},right:{name:"number",required:!1},left:{name:"number",required:!1}}},required:!1},styles:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},tooltipComponent:{description:"",type:{name:"element"},required:!1},onMouseMoveTooltip:{description:"",type:{name:"func"},required:!1},onMouseLeaveTooltip:{description:"",type:{name:"func"},required:!1}}}},"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{A:function(){return _assertThisInitialized}})},"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}__webpack_require__.d(__webpack_exports__,{A:function(){return _classCallCheck}})},"./node_modules/@babel/runtime/helpers/esm/createClass.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _createClass}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_require__.d(__webpack_exports__,{A:function(){return _getPrototypeOf}})},"./node_modules/@babel/runtime/helpers/esm/inherits.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _inherits}});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _possibleConstructorReturn}});var _typeof_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");function _possibleConstructorReturn(self,call){if(call&&("object"===(0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__.A)(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return(0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.A)(self)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{A:function(){return _setPrototypeOf}})},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.A)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.A)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.A)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{A:function(){return _typeof}})},"./node_modules/@fortawesome/react-fontawesome/index.es.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{g:function(){return FontAwesomeIcon}});var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function camelize(string){return function _isNumerical(obj){return(obj-=0)==obj}(string)?string:(string=string.replace(/[\-_\s]+(.)?/g,(function(match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1)}var _excluded$1=["style"];var PRODUCTION=!1;try{PRODUCTION=!0}catch(e){}function normalizeIconArgs(icon){return icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName&&icon.icon?icon:_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qg.icon?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qg.icon(icon):null===icon?null:icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName?icon:Array.isArray(icon)&&2===icon.length?{prefix:icon[0],iconName:icon[1]}:"string"==typeof icon?{prefix:"fas",iconName:icon}:void 0}function objectWithKey(key,value){return Array.isArray(value)&&value.length>0||!Array.isArray(value)&&value?_defineProperty({},key,value):{}}var _excluded=["forwardedRef"];function FontAwesomeIcon(_ref){var forwardedRef=_ref.forwardedRef,props=_objectWithoutProperties(_ref,_excluded),iconArgs=props.icon,maskArgs=props.mask,symbol=props.symbol,className=props.className,title=props.title,titleId=props.titleId,maskId=props.maskId,iconLookup=normalizeIconArgs(iconArgs),classes=objectWithKey("classes",[].concat(_toConsumableArray(function classList(props){var _classes,beat=props.beat,fade=props.fade,beatFade=props.beatFade,bounce=props.bounce,shake=props.shake,flash=props.flash,spin=props.spin,spinPulse=props.spinPulse,spinReverse=props.spinReverse,pulse=props.pulse,fixedWidth=props.fixedWidth,inverse=props.inverse,border=props.border,listItem=props.listItem,flip=props.flip,size=props.size,rotation=props.rotation,pull=props.pull,classes=(_defineProperty(_classes={"fa-beat":beat,"fa-fade":fade,"fa-beat-fade":beatFade,"fa-bounce":bounce,"fa-shake":shake,"fa-flash":flash,"fa-spin":spin,"fa-spin-reverse":spinReverse,"fa-spin-pulse":spinPulse,"fa-pulse":pulse,"fa-fw":fixedWidth,"fa-inverse":inverse,"fa-border":border,"fa-li":listItem,"fa-flip":!0===flip,"fa-flip-horizontal":"horizontal"===flip||"both"===flip,"fa-flip-vertical":"vertical"===flip||"both"===flip},"fa-".concat(size),null!=size),_defineProperty(_classes,"fa-rotate-".concat(rotation),null!=rotation&&0!==rotation),_defineProperty(_classes,"fa-pull-".concat(pull),null!=pull),_defineProperty(_classes,"fa-swap-opacity",props.swapOpacity),_classes);return Object.keys(classes).map((function(key){return classes[key]?key:null})).filter((function(key){return key}))}(props)),_toConsumableArray(className.split(" ")))),transform=objectWithKey("transform","string"==typeof props.transform?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qg.transform(props.transform):props.transform),mask=objectWithKey("mask",normalizeIconArgs(maskArgs)),renderedIcon=(0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.Kk)(iconLookup,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},classes),transform),mask),{},{symbol:symbol,title:title,titleId:titleId,maskId:maskId}));if(!renderedIcon)return function log(){var _console;!PRODUCTION&&console&&"function"==typeof console.error&&(_console=console).error.apply(_console,arguments)}("Could not find icon",iconLookup),null;var abstract=renderedIcon.abstract,extraProps={ref:forwardedRef};return Object.keys(props).forEach((function(key){FontAwesomeIcon.defaultProps.hasOwnProperty(key)||(extraProps[key]=props[key])})),convertCurry(abstract[0],extraProps)}FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={beat:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,border:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,beatFade:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,bounce:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,fade:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,flash:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,mask:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),maskId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,fixedWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,inverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,flip:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([!0,!1,"horizontal","vertical","both"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),listItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,pull:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["right","left"]),pulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,rotation:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0,90,180,270]),shake:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,spinPulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,spinReverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,symbol:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,titleId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,transform:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),swapOpacity:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool},FontAwesomeIcon.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var convertCurry=function convert(createElement,element){var extraProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof element)return element;var children=(element.children||[]).map((function(child){return convert(createElement,child)})),mixins=Object.keys(element.attributes||{}).reduce((function(acc,key){var val=element.attributes[key];switch(key){case"class":acc.attrs.className=val,delete element.attributes.class;break;case"style":acc.attrs.style=function styleToObject(style){return style.split(";").map((function(s){return s.trim()})).filter((function(s){return s})).reduce((function(acc,pair){var i=pair.indexOf(":"),prop=camelize(pair.slice(0,i)),value=pair.slice(i+1).trim();return prop.startsWith("webkit")?acc[function capitalize(val){return val.charAt(0).toUpperCase()+val.slice(1)}(prop)]=value:acc[prop]=value,acc}),{})}(val);break;default:0===key.indexOf("aria-")||0===key.indexOf("data-")?acc.attrs[key.toLowerCase()]=val:acc.attrs[camelize(key)]=val}return acc}),{attrs:{}}),_extraProps$style=extraProps.style,existingStyle=void 0===_extraProps$style?{}:_extraProps$style,remaining=_objectWithoutProperties(extraProps,_excluded$1);return mixins.attrs.style=_objectSpread2(_objectSpread2({},mixins.attrs.style),existingStyle),createElement.apply(void 0,[element.tag,_objectSpread2(_objectSpread2({},mixins.attrs),remaining)].concat(_toConsumableArray(children)))}.bind(null,react__WEBPACK_IMPORTED_MODULE_1__.createElement)},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./styles/components/infoTooltip/_tooltipWrapper.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__)}}]);