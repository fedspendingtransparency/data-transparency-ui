/*! For license information please see 9931.ec0caebb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdata_transparency_ui=self.webpackChunkdata_transparency_ui||[]).push([[9931],{"./components/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./styles/components/_buttons.scss");var propTypes={buttonSize:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["large","medium","small","lg","md","sm"]).isRequired,backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["light","dark"]).isRequired,buttonType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["primary","primaryIcon","secondary","secondaryIcon","tertiary","tertiaryIcon","text","stacked","icon","inline","intext"]).isRequired,copy:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,image:prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,textAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left","center"]),imageAlignment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left","right"]),additionalClassnames:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onKeyUp:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,buttonTitle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,to:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},Button=function Button(props){var classNameList="";return"large"===props.buttonSize||"lg"===props.buttonSize?classNameList+=" button__lg ":"medium"===props.buttonSize||"md"===props.buttonSize?classNameList+=" button__md ":"small"!==props.buttonSize&&"sm"!==props.buttonSize||(classNameList+=" button__sm "),"primary"===props.buttonType?classNameList+=" button-type__primary-light ":"secondary"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__secondary-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__secondary-dark "):"primaryIcon"===props.buttonType?"light"===props.backgroundColor&&"left"===props.imageAlignment&&(classNameList+=" button-type__primary-left-icon-light "):"secondaryIcon"===props.buttonType?"light"===props.backgroundColor?"left"===props.imageAlignment&&(classNameList+=" button-type__secondary-left-icon-light "):"dark"===props.backgroundColor&&"left"===props.imageAlignment&&(classNameList+=" button-type__secondary-left-icon-dark "):"tertiary"===props.buttonType?classNameList+=" button-type__tertiary-light ":"tertiaryIcon"===props.buttonType?"left"===props.imageAlignment&&"light"===props.backgroundColor&&(classNameList+=" button-type__tertiary-left-icon-light "):"text"===props.buttonType?"light"===props.backgroundColor?"left"===props.imageAlignment?classNameList+=" button-type__text-left-icon-light ":"right"===props.imageAlignment?classNameList+=" button-type__text-right-icon-light ":classNameList+=" button-type__text-light ":"dark"===props.backgroundColor&&("left"===props.imageAlignment?classNameList+=" button-type__text-left-icon-dark ":"right"===props.imageAlignment?classNameList+=" button-type__text-right-icon-dark ":classNameList+=" button-type__text-dark "):"stacked"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__stacked-icon-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__stacked-icon-dark "):"icon"===props.buttonType?"light"===props.backgroundColor?classNameList+=" button-type__icon-light ":"dark"===props.backgroundColor&&(classNameList+=" button-type__icon-dark "):"inline"===props.buttonType?"right"===props.imageAlignment&&(classNameList+=" button-type__inline-right-icon-light "):"intext"===props.buttonType&&(classNameList+=" button-type__intext-light "),"left"===props.textAlignment?classNameList+=" button-text__left-align ":"center"===props.textAlignment&&(classNameList+=" button-text__center-align "),props.additionalClassnames&&(classNameList+=" ",classNameList+=props.additionalClassnames),classNameList.includes("button-type__intext-light")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{"aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onKeyUp:props.onKeyUp,onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth},target:"_blank",rel:"noopener noreferrer",href:props.to},props.copy):classNameList.includes("left-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.image,props.copy):classNameList.includes("right-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.copy,props.image):classNameList.includes("stacked-icon")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stacked-button__only-image"},props.image),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stacked-button__only-text"},props.copy)):classNameList.includes("icon-light")||classNameList.includes("icon-dark")?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.image):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button","aria-label":props.buttonTitle,className:classNameList,tabIndex:"0",onClick:props.onClick,disabled:props.disabled,style:{maxWidth:props.maxWidth}},props.copy)};Button.propTypes=propTypes,__webpack_exports__.A=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonSize:{description:"",type:{name:"enum",value:[{value:"'large'",computed:!1},{value:"'medium'",computed:!1},{value:"'small'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1},{value:"'sm'",computed:!1}]},required:!0},backgroundColor:{description:"",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!0},buttonType:{description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'primaryIcon'",computed:!1},{value:"'secondary'",computed:!1},{value:"'secondaryIcon'",computed:!1},{value:"'tertiary'",computed:!1},{value:"'tertiaryIcon'",computed:!1},{value:"'text'",computed:!1},{value:"'stacked'",computed:!1},{value:"'icon'",computed:!1},{value:"'inline'",computed:!1},{value:"'intext'",computed:!1}]},required:!0},copy:{description:"",type:{name:"string"},required:!0},image:{description:"",type:{name:"element"},required:!1},textAlignment:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'center'",computed:!1}]},required:!1},imageAlignment:{description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},additionalClassnames:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onKeyUp:{description:"",type:{name:"func"},required:!1},buttonTitle:{description:"",type:{name:"string"},required:!0},disabled:{description:"",type:{name:"bool"},required:!1},maxWidth:{description:"",type:{name:"string"},required:!1},to:{description:"",type:{name:"string"},required:!1}}}},"./components/cards/CardButton.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Button.jsx"),propTypes={link:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,govLink:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,onlyPerformAction:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,action:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,customClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool},CardButton=function CardButton(_ref){var link=_ref.link,govLink=_ref.govLink,_ref$onlyPerformActio=_ref.onlyPerformAction,onlyPerformAction=void 0===_ref$onlyPerformActio?"false":_ref$onlyPerformActio,action=_ref.action,text=_ref.text,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"secondary":_ref$variant,_ref$customClassName=_ref.customClassName,customClassName=void 0===_ref$customClassName?"":_ref$customClassName,children=_ref.children,backgroundColor=(_ref.disabled,_ref.backgroundColor),buttonSize=_ref.buttonSize,textAlignment=_ref.textAlignment,variantMapper={primary:"primary",secondary:"secondary",text:"text"},variantMapperStyle={primary:"card__button--primary",secondary:"card__button--secondary ",text:"card__button--borderless"},handleKeyUp=function handleKeyUp(e){"Enter"===e.key&&action()},handleOnClick=function handleOnClick(){window.location.href=link,action()};return!0===onlyPerformAction?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__button"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{additionalClassnames:customClassName,onKeyUp:function onKeyUp(e){return handleKeyUp(e)},onClick:action,copy:text||children,buttonTitle:text||children,buttonSize:"md",buttonType:void 0===variantMapper[variant]?"secondary":variantMapper[variant],backgroundColor:"light",textAlignment:"center"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__button"},govLink?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"card__button--secondary ".concat(variantMapperStyle[variant]),role:"button",tabIndex:"0","aria-label":"".concat(text)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{additionalClassnames:customClassName,onClick:handleOnClick,onKeyUp:function onKeyUp(e){return handleKeyUp(e)},copy:text||children,buttonTitle:text||children,buttonSize:buttonSize,textAlignment:textAlignment,buttonType:void 0===variantMapper[variant]?"secondary":variantMapper[variant],backgroundColor:backgroundColor})):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"".concat(variantMapperStyle[variant]),role:"button",tabIndex:"0","aria-label":"".concat(text)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{additionalClassnames:customClassName,onClick:handleOnClick,onKeyUp:function onKeyUp(e){return handleKeyUp(e)},copy:text||children,buttonTitle:text||children,buttonSize:buttonSize,textAlignment:textAlignment,buttonType:void 0===variantMapper[variant]?"secondary":variantMapper[variant],backgroundColor:backgroundColor}))))};CardButton.propTypes=propTypes,__webpack_exports__.A=CardButton,CardButton.__docgenInfo={description:"",methods:[],displayName:"CardButton",props:{onlyPerformAction:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"bool"},required:!1},variant:{defaultValue:{value:'"secondary"',computed:!1},description:"",type:{name:"string"},required:!1},customClassName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},link:{description:"",type:{name:"string"},required:!1},govLink:{description:"",type:{name:"bool"},required:!1},action:{description:"",type:{name:"func"},required:!1},text:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./components/flexGrid/FlexGridCol.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return GridCol}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./helpers/flexGridHelper.js"),_excluded=["children","className","desktopxl","desktop","mobile","tablet","width"];function GridCol(_ref){var children=_ref.children,className=_ref.className,desktopxl=_ref.desktopxl,desktop=_ref.desktop,mobile=_ref.mobile,tablet=_ref.tablet,width=_ref.width,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded),baseClasses=[[null,width],["desktopxl",desktopxl],["desktop",desktop],["tablet",tablet],["mobile",mobile]].map((function generateClass(_ref2){var _ref3=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.A)(_ref2,2),breakpoint=_ref3[0],colWidth=_ref3[1];if(void 0!==colWidth){if(void 0!==colWidth.span&&void 0!==colWidth.offset){var spanClass="".concat(breakpoint?"".concat(breakpoint,":"):"","usa-dt-flex-grid__col-").concat(colWidth.span),offsetClass="".concat(breakpoint?"".concat(breakpoint,":"):"","usa-dt-flex-grid__offset-").concat(colWidth.offset);return(0,_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__.E)([spanClass,offsetClass])}if(void 0!==colWidth.order){var _spanClass="".concat(breakpoint?"".concat(breakpoint,":"):"","usa-dt-flex-grid__col-").concat(colWidth.span),orderClass="".concat(breakpoint?"".concat(breakpoint,":"):"","usa-dt-flex-grid__order-").concat(colWidth.order);return(0,_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__.E)([_spanClass,orderClass])}return"".concat(breakpoint?"".concat(breakpoint,":"):"","usa-dt-flex-grid__col-").concat(colWidth)}return""})),allClasses=(0,_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_3__.E)([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__.A)(baseClasses),[className]));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__.A)({className:allClasses||"usa-dt-flex-grid__col"},props),children)}__webpack_require__("./styles/components/_flexGrid.scss"),GridCol.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,desktopxl:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"]),prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({span:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"])]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().string]),order:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["first","last"])])})]),desktop:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"]),prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({span:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"])]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().string]),order:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["first","last"])])})]),tablet:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"]),prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({span:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"])]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().string]),order:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["first","last"])])})]),mobile:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"]),prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({span:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"])]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().string]),order:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["first","last"])])})]),width:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"]),prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({span:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["auto","fill"])]),offset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().string]),order:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["first","last"])])})])},GridCol.__docgenInfo={description:"",methods:[],displayName:"GridCol",props:{children:{description:"",type:{name:"node"},required:!1},className:{description:"Any additional classes to apply",type:{name:"string"},required:!1},desktopxl:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]},{name:"shape",value:{span:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]}],required:!1},offset:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},order:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"first"',computed:!1},{value:'"last"',computed:!1}]}],required:!1}}}]},required:!1},desktop:{description:"Width to use at the desktop breakpoint",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]},{name:"shape",value:{span:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]}],required:!1},offset:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},order:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"first"',computed:!1},{value:'"last"',computed:!1}]}],required:!1}}}]},required:!1},tablet:{description:"Width to use at the tablet breakpoint",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]},{name:"shape",value:{span:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]}],required:!1},offset:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},order:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"first"',computed:!1},{value:'"last"',computed:!1}]}],required:!1}}}]},required:!1},mobile:{description:"Width to use at the mobile breakpoint",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]},{name:"shape",value:{span:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]}],required:!1},offset:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},order:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"first"',computed:!1},{value:'"last"',computed:!1}]}],required:!1}}}]},required:!1},width:{description:"Default width to use",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]},{name:"shape",value:{span:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1},{value:'"fill"',computed:!1}]}],required:!1},offset:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},order:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"first"',computed:!1},{value:'"last"',computed:!1}]}],required:!1}}}]},required:!1}}}},"./components/flexGrid/FlexGridRow.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./helpers/flexGridHelper.js"),_excluded=["children","className","hasGutter","gutterSize"];__webpack_require__("./styles/components/_flexGrid.scss");var GridRow=function GridRow(_ref){var children=_ref.children,className=_ref.className,_ref$hasGutter=_ref.hasGutter,hasGutter=void 0!==_ref$hasGutter&&_ref$hasGutter,gutterSize=_ref.gutterSize,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),gutterClass=hasGutter?"usa-dt-flex-grid__gutter":"",gutterSizeClass=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"usa-dt-flex-grid__gutter-sm":"sm"===gutterSize,"usa-dt-flex-grid__gutter-lg":"lg"===gutterSize});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.A)({className:(0,_helpers_flexGridHelper__WEBPACK_IMPORTED_MODULE_4__.E)(["usa-dt-flex-grid__row",gutterClass,gutterSizeClass,className])},props),children)};GridRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,hasGutter:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,gutterSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["sm","lg"])},__webpack_exports__.A=GridRow,GridRow.__docgenInfo={description:"",methods:[],displayName:"GridRow",props:{hasGutter:{defaultValue:{value:"false",computed:!1},description:"Should the row have gutters between its columns?",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!0},className:{description:"Any additional classes to apply",type:{name:"string"},required:!1},gutterSize:{description:"Size of the gutter.\r\nThe `hasGutter` prop must be `true` for this to have an effect.",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"lg"',computed:!1}]},required:!1}}}},"./helpers/flexGridHelper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return createClassString}});var createClassString=function createClassString(classes){return classes.map((function(c){return c?c.trim():c})).filter((function(c){return c})).join(" ")}},"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:function(){return _extends}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _objectWithoutProperties}});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.A)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{A:function(){return _objectWithoutPropertiesLoose}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/prop-types/factoryWithThrowingShims.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(module){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./styles/components/_buttons.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__)},"./styles/components/_flexGrid.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__)}}]);