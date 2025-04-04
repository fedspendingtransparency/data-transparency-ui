"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[2236],{"./.storybook/stories/fiscalYearPicker.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_FiscalYearPicker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/FiscalYearPicker.jsx");__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\nimport FiscalYearPicker from '../../components/FiscalYearPicker';\r\n\r\nexport default {\r\n    title: 'Pickers/Fiscal Year Picker',\r\n    component: FiscalYearPicker,\r\n    tags: ['autodocs'],\r\n  };\r\n  \r\n  export const Default = (args) => <FiscalYearPicker {...args} />;\r\n  export const Primary = Default.bind({});\r\n  Primary.args = { backgroundColor: '#ff0'};\r\n",locationsMap:{default:{startLoc:{col:25,line:10},endLoc:{col:65,line:10},startBody:{col:25,line:10},endBody:{col:65,line:10}},primary:{startLoc:{col:25,line:10},endLoc:{col:65,line:10},startBody:{col:25,line:10},endBody:{col:65,line:10}}}}},title:"Pickers/Fiscal Year Picker",component:_components_FiscalYearPicker__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]};const Default=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FiscalYearPicker__WEBPACK_IMPORTED_MODULE_1__.A,args),Primary=Default.bind({});Primary.args={backgroundColor:"#ff0"};const __namedExportsOrder=["Default","Primary"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <FiscalYearPicker {...args} />",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <FiscalYearPicker {...args} />",...Primary.parameters?.docs?.source}}}},"./components/FiscalYearPicker.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return components_FiscalYearPicker}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_regular_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/index.es.js"),Picker=__webpack_require__("./components/Picker.jsx"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__("./styles/components/_fiscalYearPicker.scss");var defaultSort=function defaultSort(a,b){return Number.isInteger(a)?b-a:parseInt(b,10)-parseInt(a,10)},FiscalYearPicker=function FiscalYearPicker(_ref){var backgroundColor=_ref.backgroundColor,latestFy=_ref.latestFy,_ref$selectedFy=_ref.selectedFy,selectedFy=void 0===_ref$selectedFy?2020:_ref$selectedFy,_ref$earliestFy=_ref.earliestFy,earliestFy=void 0===_ref$earliestFy?2017:_ref$earliestFy,_ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,_ref$handleFyChange=_ref.handleFyChange,handleFyChange=void 0===_ref$handleFyChange?function(){}:_ref$handleFyChange,_ref$sortFn=_ref.sortFn,sortFn=void 0===_ref$sortFn?defaultSort:_ref$sortFn;return react.createElement("div",{className:"usda-fy-picker__container"},react.createElement(Picker.A,{backgroundColor:backgroundColor,className:"usda-fy-picker",icon:react.createElement(index_es.g,{icon:free_regular_svg_icons_index_es.BE,size:"xs",alt:"FY Loading ..."}),selectedOption:options.length?options.find((function(obj){return obj.value===selectedFy||obj.value===parseInt(selectedFy,10)})).name||"--":"FY ".concat(selectedFy),sortFn:sortFn,options:function renderOptions(){return options.length?options.map((function(obj){return _objectSpread(_objectSpread({},obj),{},{onClick:handleFyChange})})):latestFy?function allFiscalYears(){var earliestYear=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2008,latestYear=arguments.length>1?arguments[1]:void 0;return(0,toConsumableArray.A)(new Array(latestYear-earliestYear)).reduce((function(listOfYears,_,i){return listOfYears.push(earliestYear+i+1),listOfYears}),[earliestYear]).sort((function(a,b){return b-a}))}(earliestFy,latestFy).map((function(year){return{name:"FY ".concat(year),value:"".concat(year),onClick:handleFyChange}})):[{name:"Loading fiscal years...",value:null,onClick:function onClick(){}}]}()}),react.createElement("span",null,"Fiscal Year"))};FiscalYearPicker.displayName="Fiscal Year Picker",FiscalYearPicker.propTypes={backgroundColor:prop_types_default().string,selectedFy:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),earliestFy:prop_types_default().number,latestFy:prop_types_default().number,options:prop_types_default().arrayOf(prop_types_default().shape({name:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})),handleFyChange:prop_types_default().func,sortFn:prop_types_default().func};var components_FiscalYearPicker=FiscalYearPicker;FiscalYearPicker.__docgenInfo={description:"",methods:[],displayName:"Fiscal Year Picker",props:{selectedFy:{defaultValue:{value:"2020",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},earliestFy:{defaultValue:{value:"2017",computed:!1},description:"",type:{name:"number"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"union",value:[{name:"string"},{name:"number"}],required:!1},value:{name:"union",value:[{name:"string"},{name:"number"}],required:!1}}}},required:!1},handleFyChange:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},sortFn:{defaultValue:{value:"(a, b) => {\r\n    if (Number.isInteger(a)) return b - a;\r\n    return parseInt(b, 10) - parseInt(a, 10);\r\n}",computed:!1},description:"",type:{name:"func"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1},latestFy:{description:"",type:{name:"number"},required:!1}}}},"./components/Picker.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),lodash__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/lodash.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__("./styles/components/_picker.scss");var fontAwesomeIconId="usa-dt-picker__button-icon--svg",propTypes={sortFn:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,selectedOption:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,prop_types__WEBPACK_IMPORTED_MODULE_4___default().string]),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,options:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),value:prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,classNames:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string})),dropdownDirection:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["left","right"]),isFixedWidth:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,notEnabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,buttonClassNames:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,pickerListClassNames:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},defaultSort=function defaultSort(a,b,selectedOption){return a.name===selectedOption?-1:b.name===selectedOption?1:a.name<b.name?-1:a.name>b.name?1:0},Picker=function Picker(_ref){var _ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$id=_ref.id,id=void 0===_ref$id?"":_ref$id,options=_ref.options,selectedOption=_ref.selectedOption,_ref$icon=_ref.icon,icon=void 0===_ref$icon?null:_ref$icon,_ref$sortFn=_ref.sortFn,sortFn=void 0===_ref$sortFn?defaultSort:_ref$sortFn,_ref$isFixedWidth=_ref.isFixedWidth,isFixedWidth=void 0!==_ref$isFixedWidth&&_ref$isFixedWidth,children=_ref.children,_ref$dropdownDirectio=_ref.dropdownDirection,dropdownDirection=void 0===_ref$dropdownDirectio?"right":_ref$dropdownDirectio,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"#1a4480":_ref$backgroundColor,notEnabled=_ref.notEnabled,_ref$buttonClassNames=_ref.buttonClassNames,buttonClassNames=void 0===_ref$buttonClassNames?"":_ref$buttonClassNames,_ref$pickerListClassN=_ref.pickerListClassNames,pickerListClassNames=void 0===_ref$pickerListClassN?"":_ref$pickerListClassN,pickerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),buttonRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.A)(_useState,2),expanded=_useState2[0],setExpanded=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({top:0,width:0,left:0,right:0}),_useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.A)(_useState3,2),dimensions=_useState4[0],setDimensions=_useState4[1],handleSetDimensions=function handleSetDimensions(){buttonRef.current&&pickerRef.current&&setDimensions({top:buttonRef.current.offsetHeight,width:buttonRef.current.offsetWidth,left:buttonRef.current.offsetLeft,right:pickerRef.current.offsetWidth-(buttonRef.current.offsetWidth+buttonRef.current.offsetLeft)})};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){0!==dimensions.width&&isFixedWidth&&buttonRef.current&&buttonRef.current.offsetWidth!==dimensions.width&&handleSetDimensions()})),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var closeMenu=function closeMenu(e){expanded&&pickerRef.current&&!pickerRef.current.contains(e.target)&&e.target.id!=="".concat(id,"-").concat(fontAwesomeIconId)&&e.target.parentNode.id!=="".concat(id,"-").concat(fontAwesomeIconId)&&setExpanded(!1)};return handleSetDimensions(),document.addEventListener("click",closeMenu),function(){document.removeEventListener("click",closeMenu)}}),[expanded]);var createOnClickFn=function createOnClickFn(cb){return function(param){cb(param),setExpanded(!1)}};return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{id:id,className:"usa-dt-picker ".concat(className),ref:pickerRef,style:{backgroundColor:backgroundColor}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"usa-dt-picker__dropdown-container",style:{backgroundColor:backgroundColor}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{style:{backgroundColor:backgroundColor},ref:buttonRef,type:"button","aria-label":"Dropdown Toggle Button",className:"usa-dt-picker__button ".concat(buttonClassNames),onClick:function toggleMenu(e){e.preventDefault(),notEnabled||setExpanded(!expanded)}},icon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"usa-dt-picker__icon"},icon),children||react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"usa-dt-picker__button-text",style:{backgroundColor:backgroundColor}},selectedOption),react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:"usa-dt-picker__button-icon"},!expanded&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.g,{id:"".concat(id,"-").concat(fontAwesomeIconId),icon:"chevron-down",alt:"Toggle menu",color:"#555"}),expanded&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.g,{id:"".concat(id,"-").concat(fontAwesomeIconId),icon:"chevron-up",alt:"Toggle menu",color:"#555"})))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul",{className:"usa-dt-picker__list ".concat(pickerListClassNames," ").concat(expanded?"":"hide"),style:function getDropdownListStyles(){var styles={top:"".concat(dimensions.top,"px"),left:"".concat(dimensions.left,"px")};return isFixedWidth&&"right"===dropdownDirection?_objectSpread(_objectSpread({},styles),{},{width:"".concat(dimensions.width,"px")}):isFixedWidth&&"left"===dropdownDirection?{top:styles.top,right:"".concat(dimensions.right),width:"".concat(dimensions.width,"px")}:"left"===dropdownDirection?{top:styles.top,right:"".concat(dimensions.right,"px")}:styles}()},options.sort((function handleSort(a,b){return sortFn(a,b,selectedOption)})).map((function(option){return _objectSpread(_objectSpread({},option),{},{onClick:createOnClickFn(option.onClick)})})).map((function(option){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("li",{key:(0,lodash__WEBPACK_IMPORTED_MODULE_3__.uniqueId)(),className:"usa-dt-picker__list-item ".concat(null!=option&&option.classNames?option.classNames:"")},react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",{className:"usa-dt-picker__item ".concat(option.name===selectedOption?"active":""),type:"button",value:"".concat(option.value||option.name),onClick:function onClick(e){e.preventDefault(),option.onClick(option.value)},onKeyDown:function onKeyDown(e){"reddit"===option.name&&"Tab"===e.key&&setExpanded(!expanded)}},option.component?option.component:option.name))})))))};Picker.propTypes=propTypes,__webpack_exports__.A=Picker,Picker.__docgenInfo={description:"",methods:[],displayName:"Picker",props:{className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},id:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},sortFn:{defaultValue:{value:"(a, b, selectedOption) => {\r\n    // if no sort fn is provided, sort active element to lowest index\r\n    if (a.name === selectedOption) return -1;\r\n    if (b.name === selectedOption) return 1;\r\n    // then, sort alphabetically\r\n    if (a.name < b.name) return -1;\r\n    if (a.name > b.name) return 1;\r\n    return 0;\r\n}",computed:!1},description:"",type:{name:"func"},required:!1},isFixedWidth:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},dropdownDirection:{defaultValue:{value:"'right'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},backgroundColor:{defaultValue:{value:"'#1a4480'",computed:!1},description:"",type:{name:"string"},required:!1},buttonClassNames:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},pickerListClassNames:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},selectedOption:{description:"",type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},value:{name:"any",required:!1},onClick:{name:"func",required:!1},classNames:{name:"string",required:!1}}}},required:!1},children:{description:"",type:{name:"node"},required:!1},notEnabled:{description:"",type:{name:"bool"},required:!1}}}},"./styles/components/_fiscalYearPicker.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)},"./styles/components/_picker.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);