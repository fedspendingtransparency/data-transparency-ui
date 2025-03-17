"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[438],{"./.storybook/stories/informationBoxes.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InformationBoxes2Count:function(){return InformationBoxes2Count},InformationBoxes3Count:function(){return InformationBoxes3Count},InformationBoxes4Count:function(){return InformationBoxes4Count},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return informationBoxes_stories}});var react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=(__webpack_require__("./.storybook/misc.jsx"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js")),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),moneyFormatter=__webpack_require__("./helpers/moneyFormatter.js"),numberToText={2:"two",3:"three",4:"four"};__webpack_require__("./styles/components/_informationBoxes.scss");var defaultProps={boxes:prop_types_default().arrayOf(prop_types_default().shape({type:prop_types_default().string.isRequired,title:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element]),amount:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),isMonetary:prop_types_default().bool,isString:prop_types_default().bool,subtitle:prop_types_default().string,subtitleBottom:prop_types_default().string,isLoading:prop_types_default().bool}))},InformationBoxes=function InformationBoxes(_ref){var boxes=_ref.boxes,_useState=(0,react.useState)(window.innerWidth>1200),_useState2=(0,slicedToArray.A)(_useState,2),isForTabletPortaitUp=_useState2[0],setIsForTabletPortaitUp=_useState2[1],checkWidth=(0,lodash.throttle)((function(){return setIsForTabletPortaitUp(window.innerWidth>1200)}));return(0,react.useEffect)((function(){return checkWidth(),window.addEventListener("resize",checkWidth),function(){return window.removeEventListener("resize",checkWidth)}}),[]),react.createElement("div",{className:"usa-dt-information-boxes ".concat(numberToText[boxes.length],"-boxes")},boxes.map((function(box){return react.createElement("div",{key:box.type,className:"usa-dt-information-box"},react.createElement("div",{className:"usa-dt-information-box__divider"},react.createElement("div",{className:"usa-dt-information-box__content".concat(box.subtitle?" with-subtitle":"")},react.createElement("div",{className:"usa-dt-information-box__title"},box.title),box.subtitle&&react.createElement("div",{className:"usa-dt-information-box__subtitle"},box.subtitle),react.createElement("div",{className:"usa-dt-information-box__amount".concat(box.isLoading?" loading":"")},box.isLoading&&react.createElement("div",{className:"dot-pulse"}),!box.isLoading&&box.isString?box.amount:"",!box.isLoading&&!box.isString&&function formattedValue(value,isMonetary,isForTabletPortaitUp){if(0!==value&&!value)return null;var formattedAmount=isMonetary?(0,moneyFormatter.up)(value):(0,moneyFormatter.ZV)(value);if(Math.abs(value)>moneyFormatter.pS.MILLION){var amount=(0,moneyFormatter.V0)(value);formattedAmount="".concat(isMonetary?(0,moneyFormatter.Kx)(value/amount.unit,2):(0,moneyFormatter.b$)(value/amount.unit,2)," ").concat(isForTabletPortaitUp?(0,lodash.startCase)(amount.longLabel):amount.unitLabel)}return formattedAmount}(box.amount,box.isMonetary,isForTabletPortaitUp)),box.subtitleBottom&&react.createElement("div",{className:"usa-dt-information-box__subtitle-bottom"},box.subtitleBottom))))})))};InformationBoxes.propTypes=defaultProps;var components_InformationBoxes=InformationBoxes;InformationBoxes.__docgenInfo={description:"",methods:[],displayName:"InformationBoxes",props:{boxes:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{type:{name:"string",required:!0},title:{name:"union",value:[{name:"string"},{name:"element"}],required:!1},amount:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},isMonetary:{name:"bool",required:!1},isString:{name:"bool",required:!1},subtitle:{name:"string",required:!1},subtitleBottom:{name:"string",required:!1},isLoading:{name:"bool",required:!1}}}},required:!1}}};var informationBoxes_stories={parameters:{storySource:{source:"import React from 'react';\r\nimport { TabsWrapper, TabsTooltip, InformationBoxesWrapper } from '../misc';\r\nimport InformationBoxes from '../../components/InformationBoxes';\r\n\r\nexport default {\r\n  title: 'Information Boxes',\r\n  component: InformationBoxes,\r\n};\r\n\r\nconst Template = (args) => (\r\n  <InformationBoxes {...args} />\r\n)\r\n\r\nexport const InformationBoxes2Count = Template.bind({});\r\nInformationBoxes2Count.args =  {\r\n  boxes:[\r\n    {\r\n      title: 'Total Obligations',\r\n      type: 'totalObligations',\r\n      amount: 819900000000,\r\n      isMonetary: true,\r\n    },\r\n    {\r\n      title: 'Total Outlays',\r\n      type: 'totalOutlays',\r\n      amount: 1070000000000,\r\n      isLoading: true,\r\n      isMonetary: true,\r\n    },\r\n  ]\r\n}\r\n\r\nexport const InformationBoxes3Count = Template.bind({});\r\nInformationBoxes3Count.args =  {\r\n  boxes:[\r\n    {\r\n      title: 'Award Obligations',\r\n      type: 'totalObligations',\r\n      amount: 819900000000,\r\n      isMonetary: true,\r\n    },\r\n    {\r\n      title: 'Number of Transactions',\r\n      type: 'numberOfTransactions',\r\n      amount: 2531,\r\n    },\r\n    {\r\n      title: 'Number of New Awards',\r\n      type: 'numberOfNewAwards',\r\n      amount: 125,\r\n    },\r\n  ]\r\n}\r\n\r\n\r\nexport const InformationBoxes4Count = Template.bind({});\r\n\r\n InformationBoxes4Count.args  ={\r\n  boxes:[\r\n    {\r\n      title: 'Number of Agencies',\r\n      type: 'numOfAgencies',\r\n      subtitle: 'for FY 19',\r\n      amount: 13,\r\n      subtitleBottom: 'with 32 offices',\r\n    },\r\n    {\r\n      title: 'Total Budgetary Resources',\r\n      type: 'totalBudget',\r\n      subtitle: 'for FY 19',\r\n      amount: 819900000000,\r\n      isMonetary: true,\r\n    },\r\n    {\r\n      title: 'Total Outlays',\r\n      type: 'tOutlays',\r\n      subtitle: 'for FY 19',\r\n      amount: 1110000000000,\r\n      isMonetary: true,\r\n    },\r\n    {\r\n      title: 'Total Obligations',\r\n      type: 'tObligations',\r\n      subtitle: 'for FY 19',\r\n      amount: 1070000000000,\r\n      isMonetary: true,\r\n    },\r\n  ]\r\n}\r\n\r\n",locationsMap:{"information-boxes-2-count":{startLoc:{col:17,line:10},endLoc:{col:1,line:12},startBody:{col:17,line:10},endBody:{col:1,line:12}},"information-boxes-3-count":{startLoc:{col:17,line:10},endLoc:{col:1,line:12},startBody:{col:17,line:10},endBody:{col:1,line:12}},"information-boxes-4-count":{startLoc:{col:17,line:10},endLoc:{col:1,line:12},startBody:{col:17,line:10},endBody:{col:1,line:12}}}}},title:"Information Boxes",component:components_InformationBoxes};const Template=args=>react.createElement(components_InformationBoxes,args),InformationBoxes2Count=Template.bind({});InformationBoxes2Count.args={boxes:[{title:"Total Obligations",type:"totalObligations",amount:8199e8,isMonetary:!0},{title:"Total Outlays",type:"totalOutlays",amount:107e10,isLoading:!0,isMonetary:!0}]};const InformationBoxes3Count=Template.bind({});InformationBoxes3Count.args={boxes:[{title:"Award Obligations",type:"totalObligations",amount:8199e8,isMonetary:!0},{title:"Number of Transactions",type:"numberOfTransactions",amount:2531},{title:"Number of New Awards",type:"numberOfNewAwards",amount:125}]};const InformationBoxes4Count=Template.bind({});InformationBoxes4Count.args={boxes:[{title:"Number of Agencies",type:"numOfAgencies",subtitle:"for FY 19",amount:13,subtitleBottom:"with 32 offices"},{title:"Total Budgetary Resources",type:"totalBudget",subtitle:"for FY 19",amount:8199e8,isMonetary:!0},{title:"Total Outlays",type:"tOutlays",subtitle:"for FY 19",amount:111e10,isMonetary:!0},{title:"Total Obligations",type:"tObligations",subtitle:"for FY 19",amount:107e10,isMonetary:!0}]};const __namedExportsOrder=["InformationBoxes2Count","InformationBoxes3Count","InformationBoxes4Count"];InformationBoxes2Count.parameters={...InformationBoxes2Count.parameters,docs:{...InformationBoxes2Count.parameters?.docs,source:{originalSource:"args => <InformationBoxes {...args} />",...InformationBoxes2Count.parameters?.docs?.source}}},InformationBoxes3Count.parameters={...InformationBoxes3Count.parameters,docs:{...InformationBoxes3Count.parameters?.docs,source:{originalSource:"args => <InformationBoxes {...args} />",...InformationBoxes3Count.parameters?.docs?.source}}},InformationBoxes4Count.parameters={...InformationBoxes4Count.parameters,docs:{...InformationBoxes4Count.parameters?.docs,source:{originalSource:"args => <InformationBoxes {...args} />",...InformationBoxes4Count.parameters?.docs?.source}}}},"./styles/components/_informationBoxes.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);