"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[389],{"./.storybook/stories/searchResultsTable.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResultsTableWithFadeEffect:function(){return ResultsTableWithFadeEffect},ResultsTableWithStickyColumnAndBorderRadius:function(){return ResultsTableWithStickyColumnAndBorderRadius},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return searchResultsTable_stories}});var react=__webpack_require__("./node_modules/react/index.js"),Table=__webpack_require__("./components/table/Table.jsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__("./styles/components/_searchResultsTableWrapper.scss");var propTypes={tableComponent:prop_types_default().func.isRequired},SearchResultsTableWrapper=function SearchResultsTableWrapper(_ref){var tableComponent=_ref.tableComponent;return react.createElement("div",{className:"search-results-table-wrapper__outer-container"},react.createElement("div",{className:"search-results-table-wrapper__table-container"},tableComponent))};SearchResultsTableWrapper.propTypes=propTypes;var components_SearchResultsTableWrapper=SearchResultsTableWrapper;SearchResultsTableWrapper.__docgenInfo={description:"",methods:[],displayName:"SearchResultsTableWrapper",props:{tableComponent:{description:"",type:{name:"func"},required:!0}}};var searchResultsTable_stories={parameters:{storySource:{source:"import React from 'react';\r\nimport Table from '../../components/table/Table';\r\nimport SearchResultsTableWrapper from '../../components/SearchResultsTableWrapper';\r\n\r\nexport default {\r\n    title: 'Search Results Table',\r\n    component: Table,\r\n    tags: ['autodocs'],\r\n};\r\n\r\nconst searchResultsTableData =\r\n    {\r\n        stickyFirstColumn: true,\r\n        classNames: 'search-results',\r\n        columns:\r\n            [\r\n                {\r\n                    title: 'award',\r\n                    displayName: 'Prime Award ID',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'amount',\r\n                    displayName: 'Amount',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'percent',\r\n                    displayName: '% of Total Amount',\r\n                    right: true,\r\n                    columnWidth: 400,\r\n                },\r\n                {\r\n                    title: 'test',\r\n                    displayName: 'test',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock1',\r\n                    displayName: 'Mock Data 1',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock2',\r\n                    displayName: 'Mock Data 2',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock2',\r\n                    displayName: 'Mock Data 2',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock2',\r\n                    displayName: 'Mock Data 2',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock2',\r\n                    displayName: 'Mock Data 2',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock2',\r\n                    displayName: 'Mock Data 2',\r\n                    columnWidth: 200,\r\n                },\r\n                {\r\n                    title: 'mock2',\r\n                    displayName: 'Mock Data 2',\r\n                    columnWidth: 200,\r\n                }\r\n            ]\r\n        ,\r\n        rows: [\r\n            [<a href=\"/\">Link</a>, 'first row', '25%', <a href=\"/\">LinkLongLongLongLongLong</a>, 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],\r\n            [<React.Fragment><strong>jsx</strong> content</React.Fragment>, 'second row', 'mock data longlonglonglonglonglong longlonglonglonglonglong', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],\r\n            [<a href=\"/\">Link</a>, 'third row','test' , <a href=\"/\">Link</a>, 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],\r\n            [<a href=\"/\">Link</a>, 'fourth row', 'test', <a href=\"/\">Link</a>, 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData']\r\n        ]}\r\n\r\nconst Default = (args) =>\r\n    <div style={{width:'800px', overflowX: 'scroll', borderRadius: '8px', border: 'solid 1px #dfe1e2'}}>\r\n        <Table {...args} />\r\n    </div>;\r\n\r\nconst Default2 = (args) =>\r\n    <SearchResultsTableWrapper tableComponent={<Table {...args} />} />\r\n\r\nexport const ResultsTableWithFadeEffect = Default2.bind({});\r\nResultsTableWithFadeEffect.args = searchResultsTableData;\r\n\r\nexport const ResultsTableWithStickyColumnAndBorderRadius = Default.bind({});\r\nResultsTableWithStickyColumnAndBorderRadius.args = searchResultsTableData;\r\n\r\n",locationsMap:{"results-table-with-fade-effect":{startLoc:{col:17,line:87},endLoc:{col:70,line:88},startBody:{col:17,line:87},endBody:{col:70,line:88}},"results-table-with-sticky-column-and-border-radius":{startLoc:{col:16,line:82},endLoc:{col:10,line:85},startBody:{col:16,line:82},endBody:{col:10,line:85}}}}},title:"Search Results Table",component:Table.A,tags:["autodocs"]};const searchResultsTableData={stickyFirstColumn:!0,classNames:"search-results",columns:[{title:"award",displayName:"Prime Award ID",columnWidth:200},{title:"amount",displayName:"Amount",columnWidth:200},{title:"percent",displayName:"% of Total Amount",right:!0,columnWidth:400},{title:"test",displayName:"test",columnWidth:200},{title:"mock1",displayName:"Mock Data 1",columnWidth:200},{title:"mock2",displayName:"Mock Data 2",columnWidth:200},{title:"mock2",displayName:"Mock Data 2",columnWidth:200},{title:"mock2",displayName:"Mock Data 2",columnWidth:200},{title:"mock2",displayName:"Mock Data 2",columnWidth:200},{title:"mock2",displayName:"Mock Data 2",columnWidth:200},{title:"mock2",displayName:"Mock Data 2",columnWidth:200}],rows:[[react.createElement("a",{href:"/"},"Link"),"first row","25%",react.createElement("a",{href:"/"},"LinkLongLongLongLongLong"),"mock1","mock2","mock2","mock2","mock2","mock2","mock2LongerData"],[react.createElement(react.Fragment,null,react.createElement("strong",null,"jsx")," content"),"second row","mock data longlonglonglonglonglong longlonglonglonglonglong","test","mock1","mock2","mock2","mock2","mock2","mock2","mock2LongerData"],[react.createElement("a",{href:"/"},"Link"),"third row","test",react.createElement("a",{href:"/"},"Link"),"mock1","mock2","mock2","mock2","mock2","mock2","mock2LongerData"],[react.createElement("a",{href:"/"},"Link"),"fourth row","test",react.createElement("a",{href:"/"},"Link"),"mock1","mock2","mock2","mock2","mock2","mock2","mock2LongerData"]]},ResultsTableWithFadeEffect=(args=>react.createElement(components_SearchResultsTableWrapper,{tableComponent:react.createElement(Table.A,args)})).bind({});ResultsTableWithFadeEffect.args=searchResultsTableData;const ResultsTableWithStickyColumnAndBorderRadius=(args=>react.createElement("div",{style:{width:"800px",overflowX:"scroll",borderRadius:"8px",border:"solid 1px #dfe1e2"}},react.createElement(Table.A,args))).bind({});ResultsTableWithStickyColumnAndBorderRadius.args=searchResultsTableData;const __namedExportsOrder=["ResultsTableWithFadeEffect","ResultsTableWithStickyColumnAndBorderRadius"];ResultsTableWithFadeEffect.parameters={...ResultsTableWithFadeEffect.parameters,docs:{...ResultsTableWithFadeEffect.parameters?.docs,source:{originalSource:"args => <SearchResultsTableWrapper tableComponent={<Table {...args} />} />",...ResultsTableWithFadeEffect.parameters?.docs?.source}}},ResultsTableWithStickyColumnAndBorderRadius.parameters={...ResultsTableWithStickyColumnAndBorderRadius.parameters,docs:{...ResultsTableWithStickyColumnAndBorderRadius.parameters?.docs,source:{originalSource:"args => <div style={{\n  width: '800px',\n  overflowX: 'scroll',\n  borderRadius: '8px',\n  border: 'solid 1px #dfe1e2'\n}}>\r\n        <Table {...args} />\r\n    </div>",...ResultsTableWithStickyColumnAndBorderRadius.parameters?.docs?.source}}}},"./styles/components/_searchResultsTableWrapper.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);