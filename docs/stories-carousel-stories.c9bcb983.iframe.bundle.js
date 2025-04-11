"use strict";(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[2333],{"./.storybook/stories/carousel.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultCarousel:function(){return DefaultCarousel},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return carousel_stories}});var react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),lodash=__webpack_require__("./node_modules/lodash/lodash.js");__webpack_require__("./styles/components/_carousel.scss");var propTypes={items:prop_types_default().arrayOf(prop_types_default().element)},Carousel=function Carousel(_ref){var items=_ref.items,_useState=(0,react.useState)(1),_useState2=(0,slicedToArray.A)(_useState,2),page=_useState2[0],setPage=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.A)(_useState3,2),isDragging=_useState4[0],setIsDragging=_useState4[1],lastDragX=(0,react.useRef)(null),currentX=(0,react.useRef)(0),instanceId=(0,react.useRef)((0,lodash.uniqueId)()),carouselList=(0,react.useRef)(null),carouselContainer=(0,react.useRef)(null),goToItem=function goToItem(i){return setPage(i)},resizeCarousel=function resizeCarousel(){return goToItem(page)};(0,react.useEffect)((function(){return window.addEventListener("resize",resizeCarousel),function(){return window.removeEventListener("resize",resizeCarousel)}}),[]);(0,react.useEffect)((function(){isDragging||goToItem(function determineClosestPage(){var imageWidth=carouselContainer.current.offsetWidth,dragPage=Math.round(-1*currentX.current/imageWidth)+1;return dragPage>items.length?1:dragPage<1?items.length:dragPage}())}),[isDragging]),(0,react.useEffect)((function(){if(carouselList.current&&carouselContainer.current){var imageWidth=carouselContainer.current.offsetWidth,offset=(page-1)*imageWidth*-1;currentX.current=offset,carouselList.current.style.transform="translate(".concat(offset,"px, 0px)")}}));var commonDragCompletion=function commonDragCompletion(){lastDragX.current=null,setIsDragging(!1)},untouchedCarousel=function untouchedCarousel(){return commonDragCompletion()},commonDragLogic=function commonDragLogic(xPos){var change=xPos-lastDragX.current;lastDragX.current=xPos,currentX.current+=change,carouselList.current.style.transform="translate(".concat(currentX.current,"px, 0px)")},stoppedMouseDrag=function stoppedMouseDrag(){isDragging&&commonDragCompletion()},clickedDot=function clickedDot(e){e.preventDefault(),goToItem(parseInt(e.target.value,10))};return react.createElement("div",{className:"usa-dt-carousel","aria-describedby":"".concat(instanceId.current,"-instructions")},react.createElement("div",{id:"".concat(instanceId.current,"-instructions"),className:"usa-dt-carousel__instructions","aria-live":"polite"},"An image carousel containing ","".concat(items.length," item").concat(1!==items.length?"s":""),", with item ",page," shown."),react.createElement("div",{className:"usa-dt-carousel-content"},react.createElement("div",{className:"usa-dt-carousel-item",onTouchStart:function touchedCarousel(){return setIsDragging(!0)},onTouchMove:function touchDraggedCarousel(e){if(isDragging&&e.touches&&e.touches.length&&carouselList){var firstTouch=e.touches[0];null===lastDragX.current?lastDragX.current=firstTouch.pageX:commonDragLogic(firstTouch.pageX)}},onTouchEnd:untouchedCarousel,onTouchCancel:untouchedCarousel,onMouseDown:function startedMouseDrag(e){e.preventDefault(),setIsDragging(!0)},onMouseUp:stoppedMouseDrag,onMouseLeave:stoppedMouseDrag,onMouseMove:function performedMouseDrag(e){isDragging&&(null===lastDragX.current?lastDragX.current=e.pageX:commonDragLogic(e.pageX))},role:"presentation",ref:carouselContainer},react.createElement("div",{className:"usa-dt-carousel-item__list ".concat(isDragging?"usa-dt-carousel-item__list_dragging":""),"aria-live":"polite",ref:carouselList},items.map((function(item,i){return react.createElement("div",{className:"usa-dt-carousel-item__list-item",key:"".concat(i,"-the-list-item"),"aria-hidden":page!==i+1,tabIndex:-1},(0,react.cloneElement)(item,{className:"usa-dt-carousel-item__item"}))}))))),react.createElement("div",{className:"usa-dt-carousel-pager"},react.createElement("div",{className:"usa-dt-carousel-pager__list",role:"menu","aria-label":"Pagination controls for carousel items"},items.map((function(item,i){return react.createElement("button",{className:"usa-dt-carousel-pager__dot-button ".concat(i+1===page?"usa-dt-carousel-pager__dot-button_active":""),value:i+1,key:"".concat(i,"-list-item"),onClick:clickedDot,"aria-label":"Skip to carousel item ".concat(i+1),"aria-checked":i+1===page,role:"menuitemradio"},react.createElement("div",{className:"usa-dt-carousel-pager__dot-decorator"}))})))))};Carousel.propTypes=propTypes;var components_Carousel=Carousel;Carousel.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{items:{description:"",type:{name:"arrayOf",value:{name:"element"}},required:!1}}};var carouselImageOne=__webpack_require__.p+"assets/img/carouselImageOne.png",carouselImageTwo=__webpack_require__.p+"assets/img/carouselImageTwo.png",carouselImageThree=__webpack_require__.p+"assets/img/carouselImageThree.png",carousel_stories={parameters:{storySource:{source:"import React from 'react';\r\nimport Carousel from '../../components/Carousel';\r\nimport imageOne from '../../assets/img/carouselImageOne.png'\r\nimport imageTwo from '../../assets/img/carouselImageTwo.png'\r\nimport imageThree from '../../assets/img/carouselImageThree.png'\r\n\r\nexport default {\r\n  title: 'General/Carousel',\r\n  component: Carousel,\r\n  tags: ['autodocs'],\r\n};\r\n\r\nconst Template = (args) => (\r\n  <Carousel {...args} />\r\n)\r\n\r\nexport const DefaultCarousel =  Template.bind({});\r\nDefaultCarousel.args = {\r\n  items: [\r\n          <div>\r\n        <img src={imageOne} />\r\n      </div>,\r\n      <div>\r\n        <img src={imageTwo} />\r\n      </div>,\r\n      <div>\r\n        <img src={imageThree} />\r\n      </div>\r\n  ]\r\n}",locationsMap:{"default-carousel":{startLoc:{col:17,line:13},endLoc:{col:1,line:15},startBody:{col:17,line:13},endBody:{col:1,line:15}}}}},title:"General/Carousel",component:components_Carousel,tags:["autodocs"]};const DefaultCarousel=(args=>react.createElement(components_Carousel,args)).bind({});DefaultCarousel.args={items:[react.createElement("div",null,react.createElement("img",{src:carouselImageOne})),react.createElement("div",null,react.createElement("img",{src:carouselImageTwo})),react.createElement("div",null,react.createElement("img",{src:carouselImageThree}))]};const __namedExportsOrder=["DefaultCarousel"];DefaultCarousel.parameters={...DefaultCarousel.parameters,docs:{...DefaultCarousel.parameters?.docs,source:{originalSource:"args => <Carousel {...args} />",...DefaultCarousel.parameters?.docs?.source}}}},"./styles/components/_carousel.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__)}}]);