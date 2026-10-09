(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports,require("react"),require("prop-types"),require("accounting"),require("lodash-es"),require("react/jsx-runtime"),require("react-dom")):typeof define==`function`&&define.amd?define([`exports`,`react`,`prop-types`,`accounting`,`lodash-es`,`react/jsx-runtime`,`react-dom`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e[`data-transparency-ui`]={},e.React,e.prop_types,e.accounting,e[`lodash-es`],e.react_jsx_runtime,e.ReactDOM))})(this,function(e,t,n,r,i,a,o){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var s=Object.create,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,p=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),m=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=u(t),a=0,o=i.length,s;a<o;a++)s=i[a],!f.call(e,s)&&s!==n&&c(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=l(t,s))||r.enumerable});return e},h=(e,t,n)=>(n=e==null?{}:s(d(e)),m(t||!e||!e.__esModule||!f.call(e,`default`)?c(n,`default`,{value:e,enumerable:!0}):n,e));let g=h(t,1);t=h(t);let _=h(n,1);n=h(n),r=h(r,1),o=h(o);var v={symbol:`$`,precision:0,format:{pos:`%s%v`,neg:`-%s%v`,zero:`%s%v`}},y={TRILLION:0xe8d4a51000,BILLION:1e9,MILLION:1e6,THOUSAND:1e3},b={TRILLION:`T`,BILLION:`B`,MILLION:`M`,THOUSAND:`k`},x={TRILLION:`trillion`,BILLION:`billion`,MILLION:`million`,THOUSAND:`thousand`},S=e=>r.default.formatMoney(e,v),C=(e,t)=>{let n=Object.assign({},v,{precision:t});return r.default.formatMoney(e,n)},w=e=>{let t=Math.abs(e),n=1,r=``,i=``;return t>=y.TRILLION?(n=y.TRILLION,r=b.TRILLION,i=x.TRILLION):t>=y.BILLION?(n=y.BILLION,r=b.BILLION,i=x.BILLION):t>=y.MILLION?(n=y.MILLION,r=b.MILLION,i=x.MILLION):t>=y.THOUSAND&&(n=y.THOUSAND,r=b.THOUSAND,i=x.THOUSAND),{unit:n,unitLabel:r,longLabel:i}},T=e=>{let t=Object.assign({},v,{symbol:``});return r.default.formatMoney(e,t)},E=(e,t)=>{let n=Object.assign({},v,{symbol:``,precision:t});return r.default.formatMoney(e,n)},D=(e,t,n)=>{let r=(e-1)*t+1,i=e*t;return e===Math.ceil(n/t)&&(i=n),{start:r,end:i}};function O(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function k(e){if(Array.isArray(e))return e}function A(e){if(Array.isArray(e))return O(e)}function j(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ce(r.key),r)}}function ee(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ue(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function P(e,t,n){return(t=ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ne(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function re(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ae(Object(n),!0).forEach(function(t){P(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(e,t){return k(e)||ne(e,t)||ue(e,t)||re()}function I(e){return A(e)||te(e)||ue(e)||ie()}function se(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ce(e){var t=se(e,`string`);return typeof t==`symbol`?t:t+``}function le(e){"@babel/helpers - typeof";return le=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},le(e)}function ue(e,t){if(e){if(typeof e==`string`)return O(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}var de=function(){},fe={},pe={},me=null,he={mark:de,measure:de};try{typeof window<`u`&&(fe=window),typeof document<`u`&&(pe=document),typeof MutationObserver<`u`&&(me=MutationObserver),typeof performance<`u`&&(he=performance)}catch{}var ge=(fe.navigator||{}).userAgent,_e=ge===void 0?``:ge,L=fe,R=pe,ve=me,ye=he;L.document;var z=!!R.documentElement&&!!R.head&&typeof R.addEventListener==`function`&&typeof R.createElement==`function`,be=~_e.indexOf(`MSIE`)||~_e.indexOf(`Trident/`),xe,Se=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ce=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,we={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Te={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ee=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],B=`classic`,De=`duotone`,Oe=`sharp`,ke=`sharp-duotone`,Ae=`chisel`,je=`etch`,Me=`graphite`,Ne=`jelly`,Pe=`jelly-duo`,Fe=`jelly-fill`,Ie=`mosaic`,Le=`notdog`,Re=`notdog-duo`,ze=`pixel`,Be=`slab`,Ve=`slab-duo`,He=`slab-press`,Ue=`slab-press-duo`,We=`thumbprint`,Ge=`utility`,Ke=`utility-duo`,qe=`utility-fill`,Je=`vellum`,Ye=`whiteboard`,Xe=`Classic`,Ze=`Duotone`,Qe=`Sharp`,$e=`Sharp Duotone`,et=`Chisel`,tt=`Etch`,nt=`Graphite`,rt=`Jelly`,it=`Jelly Duo`,at=`Jelly Fill`,ot=`Mosaic`,st=`Notdog`,ct=`Notdog Duo`,lt=`Pixel`,ut=`Slab`,dt=`Slab Duo`,ft=`Slab Press`,pt=`Slab Press Duo`,mt=`Thumbprint`,ht=`Utility`,gt=`Utility Duo`,_t=`Utility Fill`,vt=`Vellum`,yt=`Whiteboard`,bt=[B,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye];xe={},P(P(P(P(P(P(P(P(P(P(xe,B,Xe),De,Ze),Oe,Qe),ke,$e),Ae,et),je,tt),Me,nt),Ne,rt),Pe,it),Fe,at),P(P(P(P(P(P(P(P(P(P(xe,Ie,ot),Le,st),Re,ct),ze,lt),Be,ut),Ve,dt),He,ft),Ue,pt),We,mt),Ge,ht),P(P(P(P(xe,Ke,gt),qe,_t),Je,vt),Ye,yt);var xt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},St={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Ct=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),wt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Tt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Et={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Dt=[`kit`];P(P({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ot={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},kt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},At={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},jt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Mt,Nt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Pt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Mt={},P(P(P(P(P(P(P(P(P(P(Mt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),P(P(P(P(P(P(P(P(P(P(Mt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),P(P(P(P(Mt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),P(P({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ft={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},It={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Lt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Rt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Pt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),zt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Bt=[1,2,3,4,5,6,7,8,9,10],Vt=Bt.concat([11,12,13,14,15,16,17,18,19,20]),Ht=[].concat(I(Object.keys(It)),zt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Nt.GROUP,Nt.SWAP_OPACITY,Nt.PRIMARY,Nt.SECONDARY],Bt.map(function(e){return`${e}x`}),Vt.map(function(e){return`w-${e}`})),Ut={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},V=`___FONT_AWESOME___`,Wt=16,Gt=`fa`,Kt=`svg-inline--fa`,qt=`data-fa-i2svg`,Jt=`data-fa-pseudo-element`,Yt=`data-fa-pseudo-element-pending`,Xt=`data-prefix`,Zt=`data-icon`,Qt=`fontawesome-i2svg`,$t=`async`,en=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],tn=[`::before`,`::after`,`:before`,`:after`],nn=function(){try{return process.env.NODE_ENV===`production`}catch{return!1}}();function rn(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[B]}})}var an=F({},we);an[B]=F(F(F(F({},{"fa-duotone":`duotone`}),we[B]),Et.kit),Et[`kit-duotone`]);var on=rn(an),sn=F({},wt);sn[B]=F(F(F(F({},{duotone:`fad`}),sn[B]),jt.kit),jt[`kit-duotone`]);var cn=rn(sn),ln=F({},Lt);ln[B]=F(F({},ln[B]),At.kit);var un=rn(ln),dn=F({},Ft);dn[B]=F(F({},dn[B]),Ot.kit),rn(dn);var fn=Se,pn=`fa-layers-text`,mn=Ce;rn(F({},xt));var hn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],gn=Te,_n=[].concat(I(Dt),I(Ht)),vn=L.FontAwesomeConfig||{};function yn(e){var t=R.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function bn(e){return e===``?!0:e===`false`?!1:e===`true`||e}R&&typeof R.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=oe(e,2),n=t[0],r=t[1],i=bn(yn(n));i!=null&&(vn[r]=i)});var xn={styleDefault:`solid`,familyDefault:B,cssPrefix:Gt,replacementClass:Kt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var Sn=F(F({},xn),vn);Sn.autoReplaceSvg||(Sn.observeMutations=!1);var H={};Object.keys(xn).forEach(function(e){Object.defineProperty(H,e,{enumerable:!0,set:function(t){Sn[e]=t,Cn.forEach(function(e){return e(H)})},get:function(){return Sn[e]}})}),Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){Sn.cssPrefix=e,Cn.forEach(function(e){return e(H)})},get:function(){return Sn.cssPrefix}}),L.FontAwesomeConfig=H;var Cn=[];function wn(e){return Cn.push(e),function(){Cn.splice(Cn.indexOf(e),1)}}var U=Wt,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tn(e){if(e&&z){var t=R.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=R.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return R.head.insertBefore(t,r),e}}var En=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Dn(){for(var e=12,t=``;e-->0;)t+=En[Math.random()*62|0];return t}function On(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function kn(e){return e.classList?On(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function An(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${An(e[n])}" `},``).trim()}function Mn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Nn(e){return e.size!==W.size||e.x!==W.x||e.y!==W.y||e.rotate!==W.rotate||e.flipX||e.flipY}function Pn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Fn(e){var t=e.transform,n=e.width,r=n===void 0?Wt:n,i=e.height,a=i===void 0?Wt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&be?`translate(${t.x/U-r/2}em, ${t.y/U-a/2}em) `:s?`translate(calc(-50% + ${t.x/U}em), calc(-50% + ${t.y/U}em)) `:`translate(${t.x/U}em, ${t.y/U}em) `,c+=`scale(${t.size/U*(t.flipX?-1:1)}, ${t.size/U*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var In=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ln(){var e=Gt,t=Kt,n=H.cssPrefix,r=H.replacementClass,i=In;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Rn=!1;function zn(){H.autoAddCss&&!Rn&&(Tn(Ln()),Rn=!0)}var Bn={mixout:function(){return{dom:{css:Ln,insertCss:zn}}},hooks:function(){return{beforeDOMElementCreation:function(){zn()},beforeI2svg:function(){zn()}}}},G=L||{};G[V]||(G[V]={}),G[V].styles||(G[V].styles={}),G[V].hooks||(G[V].hooks={}),G[V].shims||(G[V].shims=[]);var K=G[V],Vn=[],Hn=function(){R.removeEventListener(`DOMContentLoaded`,Hn),Un=1,Vn.map(function(e){return e()})},Un=!1;z&&(Un=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),Un||R.addEventListener(`DOMContentLoaded`,Hn));function Wn(e){z&&(Un?setTimeout(e,0):Vn.push(e))}function Gn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?An(e):`<${t} ${jn(r)}>${a.map(Gn).join(``)}</${t}>`}function Kn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Jn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:qn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Yn(e){return I(e).length===1?e.codePointAt(0).toString(16):null}function Xn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Zn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Xn(t);typeof K.hooks.addPack==`function`&&!r?K.hooks.addPack(e,Xn(t)):K.styles[e]=F(F({},K.styles[e]||{}),i),e===`fas`&&Zn(`fa`,t)}var Qn=K.styles,$n=K.shims,er=Object.keys(un),tr=er.reduce(function(e,t){return e[t]=Object.keys(un[t]),e},{}),nr=null,rr={},ir={},ar={},or={},sr={};function cr(e){return~_n.indexOf(e)}function lr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!cr(i)?i:null}var ur=function(){var e=function(e){return Jn(Qn,function(t,n,r){return t[r]=Jn(n,e,{}),t},{})};rr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),ir=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),sr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Qn||H.autoFetchSvg,n=Jn($n,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});ar=n.names,or=n.unicodes,nr=vr(H.styleDefault,{family:H.familyDefault})};wn(function(e){nr=vr(e.styleDefault,{family:H.familyDefault})}),ur();function dr(e,t){return(rr[e]||{})[t]}function fr(e,t){return(ir[e]||{})[t]}function pr(e,t){return(sr[e]||{})[t]}function mr(e){return ar[e]||{prefix:null,iconName:null}}function hr(e){var t=or[e],n=dr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function q(){return nr}var gr=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=B,n=er.reduce(function(e,t){return e[t]=`${H.cssPrefix}-${t}`,e},{});return bt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return tr[r].includes(e)}))&&(t=r)}),t}function vr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?B:t,r=on[n][e];if(n===De&&!e)return`fad`;var i=cn[n][e]||cn[n][r],a=e in K.styles?e:null;return i||a||null}function yr(e){var t=[],n=null;return e.forEach(function(e){var r=lr(H.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function br(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var xr=Rt.concat(Tt);function Sr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=br(e.filter(function(e){return xr.includes(e)})),a=br(e.filter(function(e){return!xr.includes(e)})),o=oe(i.filter(function(e){return r=e,!Ee.includes(e)}),1)[0],s=o===void 0?null:o,c=_r(i),l=F(F({},yr(a)),{},{prefix:vr(s,{family:c})});return F(F(F({},l),Er({values:e,family:c,styles:Qn,config:H,canonical:l,givenPrefix:r})),Cr(n,r,l))}function Cr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?mr(i):{},o=pr(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Qn.far&&Qn.fas&&!H.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var wr=bt.filter(function(e){return e!==B||e!==De}),Tr=Object.keys(Lt).filter(function(e){return e!==B}).map(function(e){return Object.keys(Lt[e])}).flat();function Er(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===De,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&wr.includes(n)&&(Object.keys(s).find(function(e){return Tr.includes(e)})||l.autoFetchSvg)&&(r.prefix=Ct.get(n).defaultShortPrefixId,r.iconName=pr(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=q()||`fas`),r}var Dr=function(){function e(){j(this,e),this.definitions={}}return ee(e,[{key:`add`,value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=F(F({},e.definitions[t]||{}),i[t]),Zn(t,i[t]);var n=un[B][t];n&&Zn(n,i[t]),ur()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Or=[],kr={},Ar={},jr=Object.keys(Ar);function Mr(e,t){var n=t.mixoutsTo;return Or=e,kr={},Object.keys(Ar).forEach(function(e){jr.indexOf(e)===-1&&delete Ar[e]}),Or.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),le(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){kr[e]||(kr[e]=[]),kr[e].push(r[e])})}e.provides&&e.provides(Ar)}),n}function Nr(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(kr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(r))}),t}function Pr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(kr[e]||[]).forEach(function(e){e.apply(null,n)})}function J(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ar[e]?Ar[e].apply(null,t):void 0}function Fr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||q();if(t)return t=pr(n,t)||t,Kn(Ir.definitions,n,t)||Kn(K.styles,n,t)}var Ir=new Dr,Y={noAuto:function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Pr(`noAuto`)},config:H,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Pr(`beforeI2svg`,e),J(`pseudoElements2svg`,e),J(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,Wn(function(){Lr({autoReplaceSvgRoot:t}),Pr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(le(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:pr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=vr(e[0]);return{prefix:n,iconName:pr(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${H.cssPrefix}-`)>-1||e.match(fn))){var r=Sr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:pr(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=q();return{prefix:i,iconName:pr(i,e)||e}}}},library:Ir,findIconDefinition:Fr,toHtml:Gn},Lr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?R:e;(Object.keys(K.styles).length>0||H.autoFetchSvg)&&z&&H.autoReplaceSvg&&Y.dom.i2svg({node:t})};function Rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Gn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var t=R.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function zr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Nn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Mn(F(F({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Br(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${H.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:F(F({},i),{},{id:o}),children:r}]}]}function Vr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Hr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[H.replacementClass,a?`${H.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:F(F({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Vr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[qt]=``);var _=F(F({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:F({},l.styles)}),v=r.found&&n.found?J(`generateAbstractMask`,_)||{children:[],attributes:{}}:J(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Br(_):zr(_)}function Ur(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=F(F({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[qt]=``);var l=F({},a.styles);Nn(i)&&(l.transform=Fn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Mn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Wr(e){var t=e.content,n=e.extra,r=F(F({},n.attributes),{},{class:n.classes.join(` `)}),i=Mn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Gr=K.styles;function Kr(e){var t=e[0],n=e[1],r=oe(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${H.cssPrefix}-${gn.GROUP}`},children:[{tag:`path`,attributes:{class:`${H.cssPrefix}-${gn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${H.cssPrefix}-${gn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var qr={found:!1,width:512,height:512};function Jr(e,t){!nn&&!H.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Yr(e,t){var n=t;return t===`fa`&&H.styleDefault!==null&&(t=q()),new Promise(function(r,i){if(n===`fa`){var a=mr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Gr[t]&&Gr[t][e]){var o=Gr[t][e];return r(Kr(o))}Jr(e,t),r(F(F({},qr),{},{icon:H.showMissingIcons&&e&&J(`missingIconAbstract`)||{}}))})}var Xr=function(){},Zr=H.measurePerformance&&ye&&ye.mark&&ye.measure?ye:{mark:Xr,measure:Xr},Qr=`FA "7.3.1"`,$r=function(e){return Zr.mark(`${Qr} ${e} begins`),function(){return ei(e)}},ei=function(e){Zr.mark(`${Qr} ${e} ends`),Zr.measure(`${Qr} ${e}`,`${Qr} ${e} begins`,`${Qr} ${e} ends`)},ti={begin:$r,end:ei},ni=function(){};function ri(e){return typeof(e.getAttribute?e.getAttribute(qt):null)==`string`}function ii(e){var t=e.getAttribute?e.getAttribute(Xt):null,n=e.getAttribute?e.getAttribute(Zt):null;return t&&n}function ai(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(H.replacementClass)}function oi(){return H.autoReplaceSvg===!0?di.replace:di[H.autoReplaceSvg]||di.replace}function si(e){return R.createElementNS(`http://www.w3.org/2000/svg`,e)}function ci(e){return R.createElement(e)}function li(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?si:ci:t;if(typeof e==`string`)return R.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(li(e,{ceFn:n}))}),r}function ui(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var di={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(li(e),t)}),t.getAttribute(qt)===null&&H.keepOriginalSource){var n=R.createComment(ui(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~kn(t).indexOf(H.replacementClass))return di.replace(e);var r=RegExp(`${H.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===H.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Gn(e)}).join(`
`);t.setAttribute(qt,``),t.innerHTML=a}};function fi(e){e()}function pi(e,t){var n=typeof t==`function`?t:ni;if(e.length===0)n();else{var r=fi;H.mutateApproach===$t&&(r=L.requestAnimationFrame||fi),r(function(){var t=oi(),r=ti.begin(`mutate`);e.map(t),r(),n()})}}var mi=!1;function hi(){mi=!0}function gi(){mi=!1}var _i=null;function vi(e){if(ve&&H.observeMutations){var t=e.treeCallback,n=t===void 0?ni:t,r=e.nodeCallback,i=r===void 0?ni:r,a=e.pseudoElementsCallback,o=a===void 0?ni:a,s=e.observeMutationsRoot,c=s===void 0?R:s;_i=new ve(function(e){if(!mi){var t=q();On(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ri(e.addedNodes[0])&&(H.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&H.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ri(e.target)&&~hn.indexOf(e.attributeName)){if(e.attributeName===`class`&&ii(e.target)){var r=Sr(kn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Xt,a||t),s&&e.target.setAttribute(Zt,s)}else ai(e.target)&&i(e.target)}})}}),z&&_i.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yi(){_i&&_i.disconnect()}function bi(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function xi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Sr(kn(e));return i.prefix||=q(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=fr(i.prefix,e.innerText)||dr(i.prefix,Yn(e.innerText))),!i.iconName&&H.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Si(e){return On(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ci(){return{iconName:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xi(e),r=n.iconName,i=n.prefix,a=n.rest,o=Si(e),s=Nr(`parseNodeAttributes`,{},e);return F({iconName:r,prefix:i,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?bi(e):[],attributes:o}},s)}var Ti=K.styles;function Ei(e){var t=H.autoReplaceSvg===`nest`?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(pn)?J(`generateLayersText`,e,t):J(`generateSvgReplacementMutation`,e,t)}function Di(){return[].concat(I(Tt),I(Rt))}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=R.documentElement.classList,r=function(e){return n.add(`${Qt}-${e}`)},i=function(e){return n.remove(`${Qt}-${e}`)},a=H.autoFetchSvg?Di():Ee.concat(Object.keys(Ti));a.includes(`fa`)||a.push(`fa`);var o=[`.${pn}:not([${qt}])`].concat(a.map(function(e){return`.${e}:not([${qt}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=On(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=ti.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Ei(t);n&&e.push(n)}catch(e){nn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){pi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ei(e).then(function(e){e&&pi([e],t)})}function Ai(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Fr(i||{}),e(r,F(F({},n),{},{mask:i}))}}var ji=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?W:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Rr(F({type:`icon`},e),function(){return Pr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Hr({icons:{main:Kr(v),mask:s?Kr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:F(F({},W),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Mi={mixout:function(){return{icon:Ai(ji)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Oi,e.nodeCallback=ki,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?R:t,r=e.callback;return Oi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Yr(n,r),o.iconName?Yr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=oe(o,2),u=l[0],d=l[1];t([e,Hr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Mn(a);o.length>0&&(n.style=o);var s;return Nn(i)&&(s=J(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ni={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Rr({type:`layer`},function(){Pr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${H.cssPrefix}-layers`].concat(I(r)).join(` `)},children:n}]})}}}},Pi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Rr({type:`counter`,content:e},function(){return Pr(`beforeDOMElementCreation`,{content:e,params:t}),Wr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${H.cssPrefix}-layers-counter`].concat(I(a))}})})}}}},Fi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?W:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Rr({type:`text`,content:e},function(){return Pr(`beforeDOMElementCreation`,{content:e,params:t}),Ur({content:e,transform:F(F({},W),r),extra:{attributes:s,styles:l,classes:[`${H.cssPrefix}-layers-text`].concat(I(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(be){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Ur({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ii=RegExp(`"`,`ug`),Li=[1105920,1112319],Ri=F(F(F(F({},{FontAwesome:{normal:`fas`,400:`fas`}}),St),Ut),kt),zi=Object.keys(Ri).reduce(function(e,t){return e[t.toLowerCase()]=Ri[t],e},{}),Bi=Object.keys(zi).reduce(function(e,t){var n=zi[t];return e[t]=n[900]||I(Object.entries(n))[0][1],e},{});function Vi(e){return Yn(I(e.replace(Ii,``))[0]||``)}function Hi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ii,``),r=n.codePointAt(0),i=r>=Li[0]&&r<=Li[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Ui(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(zi[n]||{})[i]||Bi[n]}function Wi(e,t){var n=`${Yt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=On(e.children).filter(function(e){return e.getAttribute(Jt)===t})[0],o=L.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(mn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Ui(s,l),p=Vi(d),m=c[0].startsWith(`FontAwesome`),h=Hi(o),g=dr(f,p),_=g;if(m){var v=hr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Xt)!==f||a.getAttribute(Zt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ci(),b=y.extra;b.attributes[Jt]=t,Yr(g,f).then(function(i){var a=Hr(F(F({},y),{},{icons:{main:i,mask:gr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=R.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Gn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Gi(e){return Promise.all([Wi(e,`::before`),Wi(e,`::after`)])}function Ki(e){return e.parentNode!==document.head&&!~en.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Jt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var qi=function(e){return!!e&&tn.some(function(t){return e.includes(t)})},Ji=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=N(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(qi(a)){var o=tn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(z){var n;if(t)n=e;else if(H.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=N(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=N(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=N(Ji(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){H.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=On(n).filter(Ki).map(Gi),i=ti.begin(`searchPseudoElements`);hi(),Promise.all(r).then(function(){i(),gi(),e()}).catch(function(){i(),gi(),t()})})}}var Xi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Yi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?R:t;H.searchPseudoElements&&Yi(n)}}},Zi=!1,Qi={mixout:function(){return{dom:{unwatch:function(){hi(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){vi(Nr(`mutationObserverCallbacks`,{}))},noAuto:function(){yi()},watch:function(e){var t=e.observeMutationsRoot;Zi?gi():vi(Nr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},$i=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},ea={mixout:function(){return{parse:{transform:function(e){return $i(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=$i(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:F({},a.outer),children:[{tag:`g`,attributes:F({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:F(F({},t.icon.attributes),a.path)}]}]}}}},ta={x:0,y:0,width:`100%`,height:`100%`};function na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ra(e){return e.tag===`g`?e.children:[e]}Mr([Bn,Mi,Ni,Pi,Fi,Xi,Qi,ea,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Sr(n.split(` `).map(function(e){return e.trim()})):gr();return r.prefix||=q(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Pn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:F(F({},ta),{},{fill:`white`})},p=c.children?{children:c.children.map(na)}:{},m={tag:`g`,attributes:F({},d.inner),children:[na(F({tag:c.tag,attributes:F(F({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:F({},d.outer),children:[m]},g=`mask-${a||Dn()}`,_=`clip-${a||Dn()}`,v={tag:`mask`,attributes:F(F({},ta),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:ra(u)},v]};return t.push(y,{tag:`rect`,attributes:F({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},ta)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;L.matchMedia&&(t=L.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:F(F({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=F(F({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:F(F({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:F(F({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:F(F({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Y}),Y.noAuto;var ia=Y.config;Y.library,Y.dom;var aa=Y.parse;Y.findIconDefinition,Y.toHtml;var oa=Y.icon;Y.layer,Y.text,Y.counter;function sa(e){return e-=0,e===e}function ca(e){return sa(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var la=(e,t)=>g.default.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function ua(e){return e.charAt(0).toUpperCase()+e.slice(1)}var da=new Map,fa=1e3;function pa(e){if(da.has(e))return da.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ca(n);t[e.startsWith(`webkit`)?ua(e):e]=r}}}n=a+1}if(da.size===fa){let e=da.keys().next().value;e&&da.delete(e)}return da.set(e,t),t}function ma(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),ma(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=pa(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ca(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(la)))}return e(t.tag,{...a,...u},...r)}var ha=ma.bind(null,g.default.createElement),ga=(e,t)=>{let n=(0,g.useId)();return e||(t?n:void 0)},_a=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&process.env.NODE_ENV===`development`}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&process.env?.FA_VERSION;var va=`searchPseudoElementsFullScan`in ia&&typeof ia.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,ya=Number.parseInt(va)>=7,ba=()=>ya,xa=`fa`,X={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Sa={left:`fa-pull-left`,right:`fa-pull-right`},Ca={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},wa={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Z={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},Ta={default:`fa-layers`};function Ea(e){let t=ia.cssPrefix||ia.familyPrefix||xa;return t===xa?e:e.replace(new RegExp(String.raw`(?<=^|\s)${xa}-`,`g`),`${t}-`)}function Da(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:w,jello:T,spinSnap:E,spinSnap4:D,spinSnap8:O,swing:k,wag:A,className:j}=e,M=[];return j&&M.push(...j.split(` `)),t&&M.push(X.beat),n&&M.push(X.fade),r&&M.push(X.beatFade),i&&M.push(X.bounce),a&&M.push(X.shake),o&&M.push(X.spin),c&&M.push(X.spinReverse),s&&M.push(X.spinPulse),l&&M.push(X.pulse),u&&M.push(Z.fixedWidth),d&&M.push(Z.inverse),f&&M.push(Z.border),p===!0&&M.push(Z.flip),(p===`horizontal`||p===`both`)&&M.push(Z.flipHorizontal),(p===`vertical`||p===`both`)&&M.push(Z.flipVertical),m!=null&&M.push(wa[m]),h!=null&&h!==0&&M.push(Ca[h]),g!=null&&M.push(Sa[g]),_&&M.push(Z.swapOpacity),ba()?(v&&M.push(Z.rotateBy),y&&M.push(Z.widthAuto),b&&M.push(Z.canvasSquare),x&&M.push(Z.canvasRoomy),S&&M.push(X.flip360),C&&M.push(X.buzz),w&&M.push(X.float),T&&M.push(X.jello),E&&M.push(X.spinSnap),D&&M.push(X.spinSnap4),O&&M.push(X.spinSnap8),k&&M.push(X.swing),A&&M.push(X.wag),(ia.cssPrefix||ia.familyPrefix||xa)===xa?M:M.map(Ea)):M}var Oa=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ka(e){if(e)return Oa(e)?e:aa.icon(e)}function Aa(e){return Object.keys(e)}var ja=new _a(`FontAwesomeIcon`),Ma={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Na=new Set(Object.keys(Ma)),Q=g.default.forwardRef((e,t)=>{let n={...Ma,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=ga(c,!!i),d=ga(s,!!o),f=ka(r);if(!f)return ja.error(`Icon lookup is undefined`,r),null;let p=Da(n),m=typeof l==`string`?aa.transform(l):l,h=ka(i),g=oa(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return ja.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Aa(n))Na.has(e)||(v[e]=n[e]);return ha(_[0],v)});Q.displayName=`FontAwesomeIcon`,`${Ta.default}${Z.fixedWidth}`;var Pa={changePage:_.default.func.isRequired,totalItems:_.default.number.isRequired,currentPage:_.default.number.isRequired,pageSize:_.default.number.isRequired,hideLast:_.default.bool},Fa=class extends g.default.Component{getPager(){let{totalItems:e,currentPage:t,pageSize:n,changePage:r,hideLast:o}=this.props,s=Math.ceil(e/n),c,l,u=(0,a.jsx)(`li`,{className:`pager__ellipsis`,children:`...`}),d=(0,a.jsx)(`li`,{className:`pager__ellipsis`,children:`...`}),f=(0,a.jsx)(`li`,{className:`pager__item`,children:(0,a.jsx)(`button`,{className:`pager__button`,type:`button`,onClick:()=>r(1),children:1})}),p=(0,a.jsx)(`li`,{className:`pager__item ${o?`hideLast`:``}`,children:(0,a.jsx)(`button`,{className:`pager__button`,type:`button`,onClick:()=>r(s),children:E(s,0)})});s<5?(c=1,l=s,u=``,d=``,f=``,p=``):(c=t-1,l=t+1,t<4?(u=``,f=``,t===1?(c=t,l=t+2):t===3&&(c=1,l=4)):t>s-3&&(d=``,p=``,t===s?(c=t-2,l=t):t===s-2&&(c=t-1,l=s)));let m=(t-1)*n,h=Math.min(m+(n-1),e-1),g=(0,i.range)(c,l+1);return{totalPages:s,startPage:c,endPage:l,startIndex:m,endIndex:h,pages:g,prevEllipses:u,nextEllipses:d,firstButton:f,lastButton:p}}generatePageButtons(e){let{currentPage:t}=this.props;return e.map((e,n)=>(0,a.jsx)(`li`,{className:`pager__item`,children:(0,a.jsx)(`button`,{className:`pager__button ${t===e?`pager__button_active`:``}`,type:`button`,onClick:()=>this.props.changePage(e),children:E(e,0)})},n))}render(){let{currentPage:e,changePage:t}=this.props,n=this.getPager(),r=this.generatePageButtons(n.pages,n.totalPages);return(0,a.jsxs)(`ul`,{className:`pager`,children:[(0,a.jsx)(`li`,{className:`pager__item`,children:(0,a.jsx)(`button`,{className:`pager__button ${e===1?`pager__button_disabled`:``}`,type:`button`,disabled:e===1,onClick:()=>t(e-1),title:`Previous page`,children:(0,a.jsx)(Q,{icon:`angle-left`})})}),n.firstButton,n.prevEllipses,r,n.nextEllipses,n.lastButton,(0,a.jsx)(`li`,{className:`pager__item`,children:(0,a.jsx)(`button`,{className:`pager__button ${e===n.totalPages?`pager__button_disabled`:``}`,type:`button`,disabled:e===n.totalPages,onClick:()=>t(e+1),title:`Next page`,children:(0,a.jsx)(Q,{icon:`angle-right`})})})]})}};Fa.propTypes=Pa;var Ia={changeLimit:_.default.func.isRequired,pageSize:_.default.number,limitList:_.default.arrayOf(_.default.number),label:_.default.string},La=({changeLimit:e,pageSize:t=10,limitList:n=[10,25,50,100],label:r})=>{let i=t=>{t.preventDefault(),e(parseInt(t.target.value,10))},o=r||`Rows per page: `,s=n.map(e=>(0,a.jsx)(`option`,{value:e,children:e},`limit-${e}`));return(0,a.jsxs)(`div`,{className:`usa-dt-pagination__limit-selector__wrapper`,children:[(0,a.jsx)(`label`,{children:o}),(0,a.jsx)(`select`,{onChange:i,value:t,className:`usa-dt-pagination__limit-selector`,"aria-label":`limit-dropdown`,children:s})]})};La.propTypes=Ia;var Ra={changePage:_.default.func.isRequired,totalPages:_.default.number,id:_.default.string},za=({changePage:e,totalPages:t=1,id:n=`usa-dt-pagination-go-to`})=>{let[r,i]=(0,g.useState)(``),o=t>1?`1-${t}`:`1`,s=()=>!(r===``||parseInt(r,10)<1||parseInt(r,10)>t),c=t=>{t.preventDefault(),s()&&e(parseInt(r,10))};return(0,a.jsxs)(`form`,{className:`usa-dt-pagination__go-to`,children:[(0,a.jsx)(`label`,{htmlFor:`${n}-go-to`,children:`Go to page`}),(0,a.jsx)(`input`,{type:`number`,id:`${n}-go-to`,title:`Enter a number between 1 and ${t}`,min:`1`,max:t,placeholder:o,value:r,onChange:e=>{i(e.target.value)},onSubmit:c}),(0,a.jsx)(`button`,{type:`submit`,onClick:c,disabled:!s(),children:`Go`})]})};za.propTypes=Ra;var Ba={changePage:_.default.func.isRequired,totalItems:_.default.number.isRequired,currentPage:_.default.number,pageSize:_.default.number,resultsText:_.default.oneOfType([_.default.bool,_.default.element]),limitSelector:_.default.bool,changeLimit:_.default.func,goToPage:_.default.bool,id:_.default.string,hideLast:_.default.bool},Va=({changePage:e,totalItems:t,currentPage:n=1,pageSize:r=10,resultsText:i=!1,limitSelector:o=!1,changeLimit:s=()=>{},goToPage:c=!1,id:l,hideLast:u=!1})=>{let d=Math.ceil(t/r),f=()=>{if(g.default.isValidElement(i))return i;if(i){let e=D(n,r,t),i=E(e.start,0),o=E(e.end,0),s=E(t,0);return(0,a.jsx)(`div`,{className:`usa-dt-pagination__totals`,children:`${i}-${o} of ${s} results`})}return null},p=o?(0,a.jsx)(La,{changeLimit:s,pageSize:r}):null,m=c?(0,a.jsx)(za,{changePage:e,totalPages:d,id:l}):null;return!o&&d<=1?null:(0,a.jsxs)(`div`,{className:`usa-dt-pagination`,children:[f(),(0,a.jsxs)(`div`,{className:`usa-dt-pagination__wrapper`,children:[p,(0,a.jsx)(Fa,{changePage:e,totalItems:t,currentPage:n,pageSize:r,hideLast:u}),m]})]})};Va.propTypes=Ba;var Ha=`usa-dt-picker__button-icon--svg`,Ua={sortFn:_.default.func,icon:_.default.node,selectedOption:_.default.oneOfType([_.default.node,_.default.string]),className:_.default.string,id:_.default.string,options:_.default.arrayOf(_.default.shape({name:_.default.oneOfType([_.default.string,_.default.node]),value:_.default.any,onClick:_.default.func,classNames:_.default.string})),dropdownDirection:_.default.oneOf([`left`,`right`]),isFixedWidth:_.default.bool,children:_.default.node,backgroundColor:_.default.string,notEnabled:_.default.bool,buttonClassNames:_.default.string,pickerListClassNames:_.default.string},Wa=(e,t,n)=>e.name===n?-1:t.name===n?1:e.name<t.name?-1:+(e.name>t.name),Ga=({className:e=``,id:t=``,options:n,selectedOption:r,icon:o=null,sortFn:s=Wa,isFixedWidth:c=!1,children:l,dropdownDirection:u=`right`,backgroundColor:d=`#1a4480`,notEnabled:f,buttonClassNames:p=``,pickerListClassNames:m=``})=>{let h=(0,g.useRef)(null),_=(0,g.useRef)(null),[v,y]=(0,g.useState)(!1),[b,x]=(0,g.useState)({top:0,width:0,left:0,right:0}),S=e=>{e.preventDefault(),f||y(!v)},C=(e,t)=>s(e,t,r),w=()=>{_.current&&h.current&&x({top:_.current.offsetHeight,width:_.current.offsetWidth,left:_.current.offsetLeft,right:h.current.offsetWidth-(_.current.offsetWidth+_.current.offsetLeft)})};(0,g.useEffect)(()=>{b.width!==0&&c&&_.current&&_.current.offsetWidth!==b.width&&w()}),(0,g.useEffect)(()=>{let e=e=>{v&&h.current&&!h.current.contains(e.target)&&e.target.id!==`${t}-${Ha}`&&e.target.parentNode.id!==`${t}-${Ha}`&&y(!1)};return w(),document.addEventListener(`click`,e),()=>{document.removeEventListener(`click`,e)}},[v]);let T=e=>t=>{e(t),y(!1)};return(0,a.jsx)(`div`,{id:t,className:`usa-dt-picker ${e}`,ref:h,style:{backgroundColor:d},children:(0,a.jsxs)(`div`,{className:`usa-dt-picker__dropdown-container`,style:{backgroundColor:d},children:[(0,a.jsxs)(`button`,{style:{backgroundColor:d},ref:_,type:`button`,"aria-label":`Dropdown Toggle Button`,className:`usa-dt-picker__button ${p}`,onClick:S,children:[o&&(0,a.jsx)(`div`,{className:`usa-dt-picker__icon`,children:o}),l||(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`usa-dt-picker__button-text`,style:{backgroundColor:d},children:r}),(0,a.jsxs)(`span`,{className:`usa-dt-picker__button-icon`,children:[!v&&(0,a.jsx)(Q,{id:`${t}-${Ha}`,icon:`chevron-down`,alt:`Toggle menu`,color:`#555`}),v&&(0,a.jsx)(Q,{id:`${t}-${Ha}`,icon:`chevron-up`,alt:`Toggle menu`,color:`#555`})]})]})]}),(0,a.jsx)(`ul`,{className:`usa-dt-picker__list ${m} ${v?``:`hide`}`,style:(()=>{let e={top:`${b.top}px`,left:`${b.left}px`};return c&&u===`right`?{...e,width:`${b.width}px`}:c&&u===`left`?{top:e.top,right:`${b.right}`,width:`${b.width}px`}:u===`left`?{top:e.top,right:`${b.right}px`}:e})(),children:n.sort(C).map(e=>({...e,onClick:T(e.onClick)})).map(e=>(0,a.jsx)(`li`,{className:`usa-dt-picker__list-item ${e?.classNames?e.classNames:``}`,children:(0,a.jsx)(`button`,{className:`usa-dt-picker__item ${e.name===r?`active`:``}`,type:`button`,value:`${e.value||e.name}`,onClick:t=>{t.preventDefault(),e.onClick(e.value)},onKeyDown:t=>{e.name===`reddit`&&t.key===`Tab`&&y(!v)},children:e.component?e.component:e.name})},(0,i.uniqueId)()))})]})})};Ga.propTypes=Ua;var Ka={disabled:_.default.bool,active:_.default.bool,showPeriods:_.default.bool,quarter:_.default.string,handleSelection:_.default.func,handleHover:_.default.func,handleBlur:_.default.func,toggleTooltip:_.default.func,title:_.default.string},qa=({disabled:e,active:t,quarter:n,handleSelection:r,toggleTooltip:i,title:o=``,handleHover:s,handleBlur:c,showPeriods:l=!1})=>{let u=o||`Q ${n}`,d=()=>{e?i(n):s(n,l?`period`:`quarter`)},f=()=>{i(0),c(l?`period`:`quarter`)},p=t=>{t.preventDefault(),e||r(n)},m=e?`usa-dt-quarter-picker__quarter_disabled `:``;return n===`1`?m+=`usa-dt-quarter-picker__quarter_first`:n===`4`?m+=`usa-dt-quarter-picker__quarter_last`:o.includes(`-`)&&(m+=`usa-dt-quarter-picker__quarter_double`),!e&&t&&(m+=` usa-dt-quarter-picker__quarter_active`),(0,a.jsx)(`button`,{className:`usa-dt-quarter-picker__quarter ${m}`,onMouseDown:p,onClick:p,onMouseOver:d,onMouseEnter:d,onFocus:d,onMouseLeave:f,onBlur:f,"aria-disabled":e,children:u})};qa.propTypes=Ka;var Ja=(e=[])=>{let[t,n]=(0,g.useState)(e);return[t,e=>{let r=parseInt(e,10),i=t.map(e=>parseInt(e,10)).filter(e=>e<=r).map(e=>`${e}`);n(i.concat([e]))}]},Ya=[[{title:`1 - 2`,id:`2`,className:`double-period`},{title:`3`,id:`3`}],[{title:`4`,id:`4`},{title:`5`,id:`5`},{title:`6`,id:`6`}],[{title:`7`,id:`7`},{title:`8`,id:`8`},{title:`9`,id:`9`}],[{title:`10`,id:`10`},{title:`11`,id:`11`},{title:`12`,id:`12`}]],Xa=(e,t)=>t.some(t=>parseInt(t,10)>=parseInt(e,10)),Za={handleSelection:_.default.func,selectedQuarters:_.default.arrayOf(_.default.string),disabledQuarters:_.default.arrayOf(_.default.string),selectedPeriods:_.default.arrayOf(_.default.string),disabledPeriods:_.default.arrayOf(_.default.string),periodsPerQuarter:_.default.arrayOf(_.default.arrayOf(_.default.shape({title:_.default.string,id:_.default.string}))),showPeriods:_.default.bool,isCumulative:_.default.bool},Qa=({handleSelection:e,disabledQuarters:t=[],disabledPeriods:n=[],periodsPerQuarter:r=Ya,selectedQuarters:o=[],selectedPeriods:s=[],showPeriods:c=!1,isCumulative:l=!1})=>{let[u,d]=(0,g.useState)(``),[f,p]=(0,g.useState)(``),m=(e,t=`quarter`)=>{t===`quarter`?p(e):d(e)},h=(e=`quarter`)=>{e===`quarter`?p(``):d(``)};return(0,a.jsx)(`div`,{className:`usa-dt-quarter-picker`,children:(0,a.jsx)(`ul`,{className:`usa-dt-quarter-picker__list`,children:[,,,,].fill(0).map((d,p)=>{let g=p+1,_=`${g}`;if(c){let t=r[p],o=t.every(e=>n.includes(e.id));return(0,a.jsxs)(`li`,{className:`usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container`,children:[(0,a.jsx)(`p`,{className:o?`disabled`:``,children:`Q${g}`}),(0,a.jsx)(`ul`,{className:`usa-dt-quarter-picker__period-list`,children:t.map(t=>(0,a.jsx)(`li`,{className:Object.keys(t).includes(`className`)?`${t.className} usa-dt-quarter-picker__list-item`:`usa-dt-quarter-picker__list-item`,children:(0,a.jsx)(qa,{showPeriods:c,quarter:t.id,title:t.title,disabled:n.includes(t.id),active:Xa(t.id,s)||parseInt(u,10)>=parseInt(t.id,10),handleHover:m,handleBlur:h,handleSelection:e,toggleTooltip:()=>{}})},(0,i.uniqueId)()))})]},(0,i.uniqueId)())}return(0,a.jsx)(`li`,{className:`usa-dt-quarter-picker__list-item`,children:(0,a.jsx)(qa,{quarter:_,disabled:t.includes(_),active:l?Xa(_,o)||parseInt(f,10)>=g:o.includes(_)||f===_,handleSelection:e,handleHover:m,handleBlur:h,toggleTooltip:()=>{}})},(0,i.uniqueId)())})})})};Qa.propTypes=Za;var $a=(e,t,n)=>!(e&&t===e||t&&e.length<n),eo=(e,t)=>!(!t||e.target.value),to={onSearch:_.default.func,minChars:_.default.number,isDisabled:_.default.bool,throttleOnChange:_.default.number,inputTitle:_.default.string,placeholder:_.default.string},no=({onSearch:e,minChars:t=2,isDisabled:n=!1,throttleOnChange:r=500,inputTitle:o=`Search Input`,placeholder:s=``})=>{let[c,l]=(0,g.useState)(``),[u,d]=(0,g.useState)(``),f=()=>{l(``),e(``),d(``)},p=(0,i.throttle)(e=>eo(e,u)?f():l(e.target.value),r),m=()=>{let t=c.trim();e(t),l(t),d(t)},h=e=>(e.preventDefault(),$a(c,u,t)?m():f()),_=`search`;return(c&&u===c||u&&c.length<t)&&(_=`times`),(0,a.jsxs)(`form`,{className:`usa-dt-search-bar`,children:[(0,a.jsx)(`input`,{className:`usa-dt-search-bar__input`,"aria-label":`Search Input`,title:o,value:c,type:`text`,disabled:n,onChange:p,placeholder:s}),(0,a.jsx)(`button`,{disabled:c.length<t&&!u||n,"aria-label":`Search Button`,title:_===`search`?`Submit Search Button`:`Remove Input Value Button`,onClick:h,className:`usa-dt-search-bar__button`,children:(0,a.jsx)(Q,{icon:_})})]})};no.propTypes=to;var ro={title:_.default.string.isRequired,description:_.default.string,icon:_.default.object,className:_.default.string},io=({icon:e,title:t,description:n,className:r})=>(0,a.jsxs)(`div`,{className:`usda-message${r&&` usda-message_${r}`}`,children:[e&&(0,a.jsx)(`div`,{className:`usda-message__icon`,children:e}),(0,a.jsx)(`div`,{className:`usda-message__title`,children:t}),n&&(0,a.jsx)(`div`,{className:`usda-message__description`,children:n})]});io.propTypes=ro;var ao={description:_.default.string},oo=({description:e=`Something went wrong while gathering your data.`})=>(0,a.jsx)(io,{description:e,title:`An error occurred`,icon:(0,a.jsx)(Q,{icon:`exclamation-triangle`}),className:`error`});oo.propTypes=ao;function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}function co(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function lo(e,t){return lo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},lo(e,t)}function uo(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,lo(e,t)}function fo(e,t){return e.classList?!!t&&e.classList.contains(t):(` `+(e.className.baseVal||e.className)+` `).indexOf(` `+t+` `)!==-1}function po(e,t){e.classList?e.classList.add(t):fo(e,t)||(typeof e.className==`string`?e.className=e.className+` `+t:e.setAttribute(`class`,(e.className&&e.className.baseVal||``)+` `+t))}function mo(e,t){return e.replace(RegExp(`(^|\\s)`+t+`(?:\\s|$)`,`g`),`$1`).replace(/\s+/g,` `).replace(/^\s*|\s*$/g,``)}function ho(e,t){e.classList?e.classList.remove(t):typeof e.className==`string`?e.className=mo(e.className,t):e.setAttribute(`class`,mo(e.className&&e.className.baseVal||``,t))}var go={disabled:!1},_o=process.env.NODE_ENV===`production`?null:n.default.oneOfType([n.default.number,n.default.shape({enter:n.default.number,exit:n.default.number,appear:n.default.number}).isRequired]),vo=process.env.NODE_ENV===`production`?null:n.default.oneOfType([n.default.string,n.default.shape({enter:n.default.string,exit:n.default.string,active:n.default.string}),n.default.shape({enter:n.default.string,enterDone:n.default.string,enterActive:n.default.string,exit:n.default.string,exitDone:n.default.string,exitActive:n.default.string})]),yo=t.default.createContext(null),bo=function(e){return e.scrollTop},xo=`unmounted`,So=`exited`,Co=`entering`,wo=`entered`,To=`exiting`,$=function(e){uo(n,e);function n(t,n){var r=e.call(this,t,n)||this,i=n,a=i&&!i.isMounting?t.enter:t.appear,o;return r.appearStatus=null,t.in?a?(o=So,r.appearStatus=Co):o=wo:o=t.unmountOnExit||t.mountOnEnter?xo:So,r.state={status:o},r.nextCallback=null,r}n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===`unmounted`?{status:So}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==`entering`&&n!==`entered`&&(t=Co):(n===`entering`||n===`entered`)&&(t=To)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,t=n=r=e,n,r;return e!=null&&typeof e!=`number`&&(t=e.exit,n=e.enter,r=e.appear===void 0?n:e.appear),{exit:t,enter:n,appear:r}},r.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null){if(this.cancelNextCallback(),t===`entering`){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:o.default.findDOMNode(this);n&&bo(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===`exited`&&this.setState({status:xo})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[o.default.findDOMNode(this),r],a=i[0],s=i[1],c=this.getTimeouts(),l=r?c.appear:c.enter;!e&&!n||go.disabled?this.safeSetState({status:wo},function(){t.props.onEntered(a)}):(this.props.onEnter(a,s),this.safeSetState({status:Co},function(){t.props.onEntering(a,s),t.onTransitionEnd(l,function(){t.safeSetState({status:wo},function(){t.props.onEntered(a,s)})})}))},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:o.default.findDOMNode(this);!t||go.disabled?this.safeSetState({status:So},function(){e.props.onExited(r)}):(this.props.onExit(r),this.safeSetState({status:To},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:So},function(){e.props.onExited(r)})})}))},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:o.default.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r)setTimeout(this.nextCallback,0);else{if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],s=i[1];this.props.addEndListener(a,s)}e!=null&&setTimeout(this.nextCallback,e)}},r.render=function(){var e=this.state.status;if(e===`unmounted`)return null;var n=this.props,r=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var i=co(n,[`children`,`in`,`mountOnEnter`,`unmountOnExit`,`appear`,`enter`,`exit`,`timeout`,`addEndListener`,`onEnter`,`onEntering`,`onEntered`,`onExit`,`onExiting`,`onExited`,`nodeRef`]);return t.default.createElement(yo.Provider,{value:null},typeof r==`function`?r(e,i):t.default.cloneElement(t.default.Children.only(r),i))},n}(t.default.Component);$.contextType=yo,$.propTypes=process.env.NODE_ENV===`production`?{}:{nodeRef:n.default.shape({current:typeof Element>`u`?n.default.any:function(e,t,r,i,a,o){var s=e[t];return n.default.instanceOf(s&&`ownerDocument`in s?s.ownerDocument.defaultView.Element:Element)(e,t,r,i,a,o)}}),children:n.default.oneOfType([n.default.func.isRequired,n.default.element.isRequired]).isRequired,in:n.default.bool,mountOnEnter:n.default.bool,unmountOnExit:n.default.bool,appear:n.default.bool,enter:n.default.bool,exit:n.default.bool,timeout:function(e){var t=_o;e.addEndListener||(t=t.isRequired);for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.apply(void 0,[e].concat(r))},addEndListener:n.default.func,onEnter:n.default.func,onEntering:n.default.func,onEntered:n.default.func,onExit:n.default.func,onExiting:n.default.func,onExited:n.default.func};function Eo(){}$.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Eo,onEntering:Eo,onEntered:Eo,onExit:Eo,onExiting:Eo,onExited:Eo},$.UNMOUNTED=xo,$.EXITED=So,$.ENTERING=Co,$.ENTERED=wo,$.EXITING=To;var Do=function(e,t){return e&&t&&t.split(` `).forEach(function(t){return po(e,t)})},Oo=function(e,t){return e&&t&&t.split(` `).forEach(function(t){return ho(e,t)})},ko=function(e){uo(n,e);function n(){for(var t,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1];t.removeClasses(i,`exit`),t.addClass(i,a?`appear`:`enter`,`base`),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1]?`appear`:`enter`;t.addClass(i,a,`active`),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1]?`appear`:`enter`;t.removeClasses(i,a),t.addClass(i,a,`done`),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,`appear`),t.removeClasses(n,`enter`),t.addClass(n,`exit`,`base`),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,`exit`,`active`),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,`exit`),t.addClass(n,`exit`,`done`),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r=typeof n==`string`,i=r&&n?n+`-`:``,a=r?``+i+e:n[e];return{baseClassName:a,activeClassName:r?a+`-active`:n[e+`Active`],doneClassName:r?a+`-done`:n[e+`Done`]}},t}var r=n.prototype;return r.addClass=function(e,t,n){var r=this.getClassNames(t)[n+`ClassName`],i=this.getClassNames(`enter`).doneClassName;t===`appear`&&n===`done`&&i&&(r+=` `+i),n===`active`&&e&&bo(e),r&&(this.appliedClasses[t][n]=r,Do(e,r))},r.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,a=n.done;this.appliedClasses[t]={},r&&Oo(e,r),i&&Oo(e,i),a&&Oo(e,a)},r.render=function(){var e=this.props;e.classNames;var n=co(e,[`classNames`]);return t.default.createElement($,so({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(t.default.Component);ko.defaultProps={classNames:``},ko.propTypes=process.env.NODE_ENV===`production`?{}:so({},$.propTypes,{classNames:vo,onEnter:n.default.func,onEntering:n.default.func,onEntered:n.default.func,onExit:n.default.func,onExiting:n.default.func,onExited:n.default.func});function Ao(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function jo(e,n){var r=function(e){return n&&(0,t.isValidElement)(e)?n(e):e},i=Object.create(null);return e&&t.Children.map(e,function(e){return e}).forEach(function(e){i[e.key]=r(e)}),i}function Mo(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function No(e,t,n){return n[t]==null?e.props[t]:n[t]}function Po(e,n){return jo(e.children,function(r){return(0,t.cloneElement)(r,{onExited:n.bind(null,r),in:!0,appear:No(r,`appear`,e),enter:No(r,`enter`,e),exit:No(r,`exit`,e)})})}function Fo(e,n,r){var i=jo(e.children),a=Mo(n,i);return Object.keys(a).forEach(function(o){var s=a[o];if((0,t.isValidElement)(s)){var c=o in n,l=o in i,u=n[o],d=(0,t.isValidElement)(u)&&!u.props.in;l&&(!c||d)?a[o]=(0,t.cloneElement)(s,{onExited:r.bind(null,s),in:!0,exit:No(s,`exit`,e),enter:No(s,`enter`,e)}):!l&&c&&!d?a[o]=(0,t.cloneElement)(s,{in:!1}):l&&c&&(0,t.isValidElement)(u)&&(a[o]=(0,t.cloneElement)(s,{onExited:r.bind(null,s),in:u.props.in,exit:No(s,`exit`,e),enter:No(s,`enter`,e)}))}}),a}var Io=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Lo={component:`div`,childFactory:function(e){return e}},Ro=function(e){uo(n,e);function n(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(Ao(r)),firstRender:!0},r}var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?Po(e,r):Fo(e,n,r),firstRender:!1}},r.handleExited=function(e,t){var n=jo(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=so({},t.children);return delete n[e.key],{children:n}}))},r.render=function(){var e=this.props,n=e.component,r=e.childFactory,i=co(e,[`component`,`childFactory`]),a=this.state.contextValue,o=Io(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,n===null?t.default.createElement(yo.Provider,{value:a},o):t.default.createElement(yo.Provider,{value:a},t.default.createElement(n,i,o))},n}(t.default.Component);Ro.propTypes=process.env.NODE_ENV===`production`?{}:{component:n.default.any,children:n.default.node,appear:n.default.bool,enter:n.default.bool,exit:n.default.bool,childFactory:n.default.func},Ro.defaultProps=Lo;var zo=({loadingText:e=`Gathering your data...`})=>(0,a.jsx)(Ro,{className:`usda-message usda-message_loading`,children:(0,a.jsx)(ko,{classNames:`usda-loading-animation__container`,timeout:{exit:225,enter:195},exit:!0,children:(0,a.jsxs)(`div`,{className:`usda-loading-animation__container`,children:[(0,a.jsx)(`div`,{className:`usda-loading-animation`,children:(0,a.jsxs)(`svg`,{className:`usda-loading-bars`,xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`50`,height:`50`,style:{opacity:0},children:[(0,a.jsx)(`rect`,{className:`bar-one`,x:`0`,y:`0`,height:`50`,width:`10`}),(0,a.jsx)(`rect`,{className:`bar-two`,x:`13`,y:`0`,height:`50`,width:`10`}),(0,a.jsx)(`rect`,{className:`bar-three`,x:`26`,y:`0`,height:`50`,width:`10`}),(0,a.jsx)(`rect`,{className:`bar-four`,x:`39`,y:`0`,height:`50`,width:`10`})]})}),(0,a.jsx)(`div`,{className:`loading-message`,children:e})]})})});zo.propTypes={loadingText:_.default.string};var Bo=()=>(0,a.jsx)(io,{title:`No Results`,description:`No available data to display.`,className:`no-results`}),Vo={data:_.default.object,columns:_.default.array,oddClass:_.default.string,divider:_.default.string},Ho=({data:e,columns:t,oddClass:n,divider:r})=>{let[o,s]=(0,g.useState)(e.expanded||!1),c=o?`chevron-down`:`chevron-right`,l=t.map(({title:e})=>e),u=()=>{s(!o)},d=(0,a.jsx)(`tr`,{className:`usda-table__child-row usda-table__child-row_divider${n}`,children:t.map((e,t)=>t===0?(0,a.jsx)(`td`,{className:`usda-table__cell usda-table__cell_child`,children:(0,a.jsx)(`div`,{className:`usda-table__child-cell-content`,children:r})},(0,i.uniqueId)()):(0,a.jsx)(`td`,{className:`usda-table__cell usda-table__cell_child`,children:(0,a.jsx)(`div`,{className:`usda-table__child-cell-content`,children:`\xA0`})},(0,i.uniqueId)()))}),f=(e,t)=>e?t&&r&&e.title===`name`?r:e.displayName:null;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`tr`,{className:`usda-table__row${n} usda-table__row_expandable ${o?`usda-table__row_is-expanded`:``}`,children:l.map((n,r)=>n===`name`&&e.children?(0,a.jsx)(`td`,{className:`usda-table__cell`,"data-label":f(t[r]),children:(0,a.jsxs)(`div`,{className:`usda-table__expandable-cell-content`,children:[(0,a.jsx)(`button`,{className:`usda-table__expand-button`,"aria-label":`Expand Table Row Button`,onClick:u,children:(0,a.jsx)(Q,{icon:c})}),e.name]})},(0,i.uniqueId)()):(0,a.jsx)(`td`,{className:`usda-table__cell${n===`name`?` usda-table__cell_name`:``}${t[r].right?` usda-table__cell_right`:``}`,"data-label":f(t[r]),children:e[n]},(0,i.uniqueId)()))}),e.children&&o?(0,a.jsxs)(a.Fragment,{children:[r&&d,e.children.map((r,o)=>{let s=o===e.children.length-1?` usda-table__child-row_last`:``;return(0,a.jsx)(`tr`,{className:`usda-table__child-row${s}${n}`,children:l.map((e,n)=>(0,a.jsx)(`td`,{className:`usda-table__cell ${t[n].right?` usda-table__cell_right`:``} usda-table__cell_child`,"data-label":f(t[n],!0),children:(0,a.jsx)(`div`,{className:`usda-table__child-cell-content`,children:r[e]})},(0,i.uniqueId)()))},(0,i.uniqueId)())})]}):null]})};Ho.propTypes=Vo;var Uo=({clickedSort:e,displayName:t,currentSort:n,title:r})=>{let i=n?.field===r&&n?.direction===`asc`?` table-header__icon_active`:``,o=n?.field===r&&n?.direction===`desc`?` table-header__icon_active`:``;return(0,a.jsxs)(`div`,{className:`table-header__sort`,children:[(0,a.jsx)(`button`,{type:`button`,onClick:e,className:`table-header__icon${i}`,value:`asc`,title:`Sort table by ascending ${t}`,"aria-label":`Sort table by ascending ${t}`,children:(0,a.jsx)(Q,{size:`2x`,icon:`caret-up`})}),(0,a.jsx)(`button`,{type:`button`,onClick:e,className:`table-header__icon${o}`,value:`desc`,title:`Sort table by descending ${t}`,"aria-label":`Sort table by descending ${t}`,children:(0,a.jsx)(Q,{size:`2x`,icon:`caret-down`})})]})};Uo.propTypes={title:_.default.string.isRequired,displayName:_.default.oneOfType([_.default.string,_.default.element]).isRequired,currentSort:(0,_.shape)({direction:(0,_.oneOf)([`asc`,`desc`]),field:_.default.string}).isRequired,clickedSort:_.default.func.isRequired};var Wo={title:_.default.string.isRequired,displayName:_.default.oneOfType([_.default.string,_.default.element]).isRequired,currentSort:(0,_.shape)({direction:(0,_.oneOf)([`asc`,`desc`]),field:_.default.string}),updateSort:_.default.func,right:_.default.bool,columnSpan:_.default.string,rowSpan:_.default.string,subColumnNames:_.default.arrayOf(_.default.oneOfType([_.default.string,_.default.object])),className:_.default.string,icon:_.default.element,bodyHeader:_.default.bool,stickyFirstColumn:_.default.bool,columnWidth:_.default.number,highlightedColumns:_.default.object,index:_.default.number,isMobile:_.default.bool,isStacked:_.default.bool},Go=({title:e,className:t=``,displayName:n=``,currentSort:r,updateSort:i,right:o,columnSpan:s=`1`,rowSpan:c,subColumnNames:l=[],icon:u=(0,a.jsx)(a.Fragment,{}),bodyHeader:d=!1,stickyFirstColumn:f=!1,columnWidth:p,highlightedColumns:m,index:h,isMobile:g=!1,isStacked:_=!1})=>{let v=(t,n=e)=>{i(n,t.target.value)},y=()=>c===`0`?null:l.length?`1`:`2`;return _&&g?(0,a.jsx)(`div`,{className:`${t} table-header${d?` table-header_body-header`:``} 
            ${f&&h===0?` stickyColumn`:``} ${m?`table-header__subaward-color-${m.highlightedColumns}`:``}`,style:{minWidth:p,display:`table-column`},colSpan:p?``:s,rowSpan:y(),children:(0,a.jsx)(`div`,{className:`table-header__content${o?` table-header__content_right`:``}`,children:(0,a.jsxs)(`div`,{className:`table-header__label`,children:[n,u&&u,i&&!l.length&&n&&(0,a.jsx)(Uo,{clickedSort:v,currentSort:r,title:e,displayName:n})]})})}):(0,a.jsx)(`th`,{className:`${t} table-header${d?` table-header_body-header`:``} 
            ${f&&h===0?` stickyColumn`:``} ${m?`table-header__subaward-color-${m.highlightedColumns}`:``}`,style:{minWidth:p},colSpan:p?``:s,rowSpan:y(),scope:`col`,children:(0,a.jsx)(`div`,{className:`table-header__content${o?` table-header__content_right`:``}`,children:(0,a.jsxs)(`div`,{className:`table-header__label`,children:[n,u&&u,i&&!l.length&&n&&(0,a.jsx)(Uo,{clickedSort:v,currentSort:r,title:e,displayName:n})]})})})};Go.propTypes=Wo;var Ko={prefix:`fas`,iconName:`file-arrow-down`,icon:[384,512,[`file-download`],`f56d`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z`]},qo={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},Jo={prefix:`fas`,iconName:`link`,icon:[576,512,[128279,`chain`],`f0c1`,`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`]},Yo={prefix:`fas`,iconName:`spinner`,icon:[512,512,[],`f110`,`M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z`]},Xo={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Zo={prefix:`fas`,iconName:`angles-right`,icon:[448,512,[187,`angle-double-right`],`f101`,`M439.1 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L371.2 256 233.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L179.2 256 41.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z`]},Qo={row:_.default.array,columns:_.default.array,iValue:_.default.number,atMaxLevel:_.default.bool},$o=e=>{let[t,n]=(0,g.useState)(!1),r=e=>{e.stopPropagation(),n(!t)},o=e.atMaxLevel?null:(0,a.jsxs)(`div`,{className:`usda-table__cell usda-table__cell_right button-type__text-left-icon-light`,children:[`View next level`,` `,(0,a.jsx)(Q,{icon:Zo})]});return(e.columns.length>=6?(0,a.jsxs)(`div`,{className:`collapsible-row-div ${t?`row-opened`:``}`,children:[t&&(0,a.jsx)(`div`,{className:`collapsible-row--content`,children:(0,a.jsx)(`div`,{className:`collapsible-row--content-wrapper`,children:e.row.map((t,n)=>{if(n>=6)return e.columns[n]?.bodyHeader?(0,a.jsx)(Go,{className:`table-header_body-header`,stickyFirstColumn:e.stickyFirstColumn,index:n,...t},(0,i.uniqueId)()):(0,a.jsxs)(`div`,{className:`usda-table__cell${e.columns[n]?.right?` usda-table__cell_right`:``}
                                                ${n===0&&e.stickyFirstColumn?` stickyColumn`:``} `,children:[e.columns[n]&&(0,a.jsx)(`div`,{className:`usda-table__cell-heading-container`,children:(0,a.jsx)(`div`,{className:`usda-table__cell-heading`,children:e.columns[n].displayName})}),(0,a.jsx)(`div`,{className:`usda-table__cell-text`,children:t})]},(0,i.uniqueId)())})})}),(0,a.jsx)(`div`,{className:`mobile-gradient__wrapper`,children:(0,a.jsxs)(`span`,{className:`collapsible-row-button`,role:`button`,tabIndex:0,onClick:e=>{r(e)},onKeyUp:e=>{e.key===`Enter`&&r(e)},children:[t?`Collapse additional details`:`View additional details`,t?(0,a.jsx)(Q,{className:`chevron`,icon:`chevron-up`}):(0,a.jsx)(Q,{className:`chevron`,icon:`chevron-down`})]})})]}):null)||o};$o.propTypes=Qo;var es={columns:_.default.arrayOf(_.default.object).isRequired,rows:_.default.arrayOf((0,_.oneOfType)([_.default.array,_.default.object])).isRequired,rowHeight:_.default.number,expandable:_.default.bool,divider:_.default.string,onClickHandler:_.default.func,isMobile:_.default.bool,atMaxLevel:_.default.bool,stickyFirstColumn:_.default.bool,highlightedColumns:_.default.object,isStacked:_.default.bool,newMobileView:_.default.bool},ts=({columns:e,rows:t,rowHeight:n,expandable:r,divider:o,onClickHandler:s,isMobile:c,atMaxLevel:l,stickyFirstColumn:u=!1,highlightedColumns:d,isStacked:f,newMobileView:p=!1})=>{let[m,h]=(0,g.useState)(),_=()=>{let e=document.querySelector(`.selected-row`);e&&e.focus()},v=(e,t)=>{l||(c&&h(t),s&&s(e))};return(0,g.useEffect)(()=>{_()},[m]),f&&c&&p&&!r?(0,a.jsx)(`div`,{className:`mobile-table-rows`,children:t.map((t,r)=>(0,a.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>v(t,r),onKeyUp:e=>{e.key===`Enter`&&(e.preventDefault(),v(t,r))},className:`usda-table__row-item usda-table__row ${m===r?`selected-row`:``} ${d?`special-hover-color-${d.highlightedColumns}`:``}`,style:{height:n,display:`table-row`},children:[t.map((t,n)=>{if(n<6)return e[n]?.bodyHeader?(0,a.jsx)(Go,{className:`table-header_body-header`,stickyFirstColumn:u,index:n,...t},(0,i.uniqueId)()):(0,a.jsxs)(`div`,{className:`usda-table__cell${e[n]?.right?` usda-table__cell_right`:``}
                                 ${n===0&&u?` stickyColumn`:``}  ${n===0&&u?` stickyColumn`:``}
                                 ${n===0?`usda-mobile__header`:``}`,children:[e[n]&&(0,a.jsx)(`div`,{className:`usda-table__cell-heading-container`,children:c&&(0,a.jsx)(`div`,{className:`usda-table__cell-heading`,children:e[n].displayName})}),(0,a.jsx)(`div`,{className:`usda-table__cell-text`,children:t.type===`a`&&n===0&&f&&c?(0,a.jsxs)(`a`,{target:t.props.target,rel:t.props.rel,href:t.props.href,onClick:t.props.onClick,children:[t.props.children,` `,(0,a.jsx)(Q,{icon:`arrow-right`})]}):t})]},(0,i.uniqueId)())}),(0,a.jsx)(`div`,{children:(0,a.jsx)($o,{row:t,columns:e,iValue:r,atMaxLevel:l})})]},(0,i.uniqueId)()))}):(0,a.jsx)(a.Fragment,{children:t.map((t,s)=>{let l=s%2==0?``:` usda-table__row_odd`;return r?(0,a.jsx)(Ho,{data:t,oddClass:l,columns:e,divider:o},(0,i.uniqueId)()):(0,a.jsx)(`tr`,{tabIndex:0,onClick:()=>v(t,s),onKeyUp:e=>{e.key===`Enter`&&(e.preventDefault(),v(t,s))},className:`usda-table__row-item usda-table__row${l} ${m===s?`selected-row`:``} ${d?`special-hover-color-${d.highlightedColumns}`:``}`,style:{height:n},children:t.map((t,n)=>e[n]?.bodyHeader?(0,a.jsx)(Go,{className:`table-header_body-header`,stickyFirstColumn:u,index:n,...t},(0,i.uniqueId)()):(0,a.jsxs)(`td`,{className:`usda-table__cell${e[n]?.right?` usda-table__cell_right`:``}
                                ${n===0&&u?` stickyColumn`:``} `,children:[e[n]&&(0,a.jsx)(`div`,{className:`usda-table__cell-heading-container`,children:c&&(0,a.jsx)(`div`,{className:`usda-table__cell-heading`,children:e[n].displayName})}),(0,a.jsx)(`div`,{children:t.type===`a`&&n===0&&f&&c?(0,a.jsxs)(`a`,{target:t.props.target,rel:t.props.rel,href:t.props.href,onClick:t.props.onClick,children:[t.props.children,` `,(0,a.jsx)(Q,{icon:`arrow-right`})]}):t})]},(0,i.uniqueId)()))},(0,i.uniqueId)())})})};ts.propTypes=es;var ns={columns:_.default.arrayOf(_.default.object).isRequired,rows:_.default.arrayOf((0,_.oneOfType)([_.default.array,_.default.object])),rowHeight:_.default.number,headerRowHeight:_.default.number,currentSort:(0,_.shape)({direction:(0,_.oneOf)([`asc`,`desc`]),field:_.default.string}),classNames:_.default.string,updateSort:_.default.func,expandable:_.default.bool,divider:_.default.string,loading:_.default.bool,error:_.default.bool,message:_.default.oneOfType([_.default.string,_.default.object]),isStacked:_.default.bool,screenReaderCaption:_.default.string,onClickHandler:_.default.func,isMobile:_.default.bool,stickyFirstColumn:_.default.bool,highlightedColumns:_.default.object,atMaxLevel:_.default.bool,newMobileView:_.default.bool},rs=({columns:e,rows:t,rowHeight:n,headerRowHeight:r,currentSort:o,classNames:s=``,updateSort:c,expandable:l,divider:u,loading:d,error:f,message:p,isStacked:m=!1,screenReaderCaption:h,onClickHandler:g,isMobile:_,stickyFirstColumn:v=!1,highlightedColumns:y,atMaxLevel:b=!1,newMobileView:x=!1})=>{let S=m?`usa-dt-table__stacked`:``,C=e.map(e=>({name:e.displayName+` (ascending)`,value:e.title,onClick:()=>{c(e.title,`asc`)}})),w=e.map(e=>({name:e.displayName+` (descending)`,value:e.title,onClick:()=>{c(e.title,`desc`)}})),T;return T=d?(0,a.jsx)(`tr`,{children:(0,a.jsx)(`td`,{className:`usda-table__message-cell`,colSpan:e.length,children:(0,a.jsx)(zo,{})})}):f?(0,a.jsx)(`tr`,{children:(0,a.jsx)(`td`,{className:`usda-table__message-cell`,colSpan:e.length,children:(0,a.jsx)(oo,{description:p})})}):!t||t.length===0?(0,a.jsx)(`tr`,{children:(0,a.jsx)(`td`,{className:`usda-table__message-cell`,colSpan:e.length,children:(0,a.jsx)(Bo,{description:p})})}):(0,a.jsx)(ts,{columns:e,rows:t,rowHeight:n,expandable:l,divider:u,onClickHandler:g,isMobile:_,stickyFirstColumn:v,highlightedColumns:y,isStacked:m,atMaxLevel:b,newMobileView:x}),(0,a.jsxs)(a.Fragment,{children:[m&&c&&(0,a.jsxs)(`div`,{className:`usa-dt-table__stacked-picker`,children:[(0,a.jsx)(`label`,{htmlFor:`stackedTableSort`,children:`Sort By`}),(0,a.jsx)(Ga,{id:`stackedTableSort`,selectedOption:o.field,options:(0,i.union)(C,w)})]}),m&&_?(0,a.jsxs)(`div`,{className:`usda-table ${S} ${s}`,children:[h&&(0,a.jsx)(`caption`,{className:`usa-dt-sr-only`,children:h}),y&&(0,a.jsxs)(`colgroup`,{children:[(0,a.jsx)(`col`,{span:y.standardColumns}),(0,a.jsx)(`col`,{span:y.highlightedColumns,className:`usda-table__body-special-color`})]}),(0,a.jsxs)(`div`,{className:`usda-table__head`,children:[(0,a.jsx)(`div`,{className:`usda-table__row`,style:{height:r},children:e.map((e,t)=>(0,a.jsx)(Go,{currentSort:o,updateSort:c,stickyFirstColumn:v,highlightedColumns:y,index:t,isMobile:_,isStacked:m,...e},(0,i.uniqueId)()))}),(0,a.jsx)(`div`,{className:`usda-table__row`,children:e.filter(e=>e?.subColumnNames?.length).reduce((e,t)=>t?.subColumnNames?.length?e.concat(t.subColumnNames):e.concat([{...t,displayName:``,className:`empty-subheader`}]),[]).map((e,t)=>(0,a.jsx)(Go,{className:e?.title?`nested-header`:`empty`,currentSort:o,updateSort:c,stickyFirstColumn:v,index:t,isMobile:_,isStacked:m,...e},(0,i.uniqueId)()))})]}),(0,a.jsx)(`div`,{className:`usda-table__body`,children:T})]}):(0,a.jsxs)(`table`,{className:`usda-table ${S} ${s}`,children:[h&&(0,a.jsx)(`caption`,{className:`usa-dt-sr-only`,children:h}),y&&(0,a.jsxs)(`colgroup`,{children:[(0,a.jsx)(`col`,{span:y.standardColumns}),(0,a.jsx)(`col`,{span:y.highlightedColumns,className:`usda-table__body-special-color`})]}),(0,a.jsxs)(`thead`,{className:`usda-table__head`,children:[(0,a.jsx)(`tr`,{className:`usda-table__row`,style:{height:r},children:e.map((e,t)=>(0,a.jsx)(Go,{currentSort:o,updateSort:c,stickyFirstColumn:v,highlightedColumns:y,index:t,...e},(0,i.uniqueId)()))}),(0,a.jsx)(`tr`,{className:`usda-table__row`,children:e.filter(e=>e?.subColumnNames?.length).reduce((e,t)=>t?.subColumnNames?.length?e.concat(t.subColumnNames):e.concat([{...t,displayName:``,className:`empty-subheader`}]),[]).map((e,t)=>(0,a.jsx)(Go,{className:e?.title?`nested-header`:`empty`,currentSort:o,updateSort:c,stickyFirstColumn:v,index:t,...e},(0,i.uniqueId)()))})]}),(0,a.jsx)(`tbody`,{className:`usda-table__body`,children:T})]})]})};rs.propTypes=ns;var is=h(p(((e,t)=>{(function(){"use strict";var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()}))(),1),as={className:_.default.string,children:_.default.element,tooltipComponent:_.default.element,tooltipPosition:_.default.string,wide:_.default.bool,icon:_.default.string,width:_.default.number,controlledProps:_.default.shape({isControlled:_.default.bool,showTooltip:_.default.func,closeTooltip:_.default.func,isVisible:_.default.bool}),offsetAdjustments:_.default.shape({top:_.default.number,right:_.default.number,left:_.default.number}),styles:_.default.object,onMouseMoveTooltip:_.default.func,onMouseLeaveTooltip:_.default.func},os=375,ss=({className:e=null,children:t=null,tooltipComponent:n=null,tooltipPosition:r=`right`,wide:o=!1,icon:s=``,width:c=os,controlledProps:l={isControlled:!1,showTooltip:()=>{},closeTooltip:()=>{},isVisible:!1},offsetAdjustments:u={top:-15,right:0,left:0},styles:d={},onMouseMoveTooltip:f,onMouseLeaveTooltip:p})=>{let[m,h]=(0,g.useState)(!1),[_,v]=(0,g.useState)(!1),y=(0,g.useRef)(),b=(0,g.useRef)(``),x=(0,g.useRef)({}),S={info:(0,a.jsx)(Q,{className:`tooltip__icon`,icon:`info-circle`})},C=(0,i.uniqueId)(`dtui-tt_`),w=()=>{f?f():l.isControlled?l.showTooltip():_||v(!0)},T=()=>{p?p():_&&v(!1)},E=()=>{let e=window.innerWidth,{offsetLeft:t,clientWidth:n}=y.current;return{right:e-t-n,left:t,total:e}},D=()=>{let{right:e,left:t,total:n}=E(),i=e>t?e:t;return n<425?n-10:r===`bottom`?c:o?i>800?700:i-5:c},O=(e,t)=>e?{top:`${y.current.clientHeight+y.current.offsetTop+8}px`,widthVar:t,left:`${y.current.clientWidth/2-8}px`}:{...x.current,widthVar:t},k=()=>{if(Object.keys(d).includes(`transform`)&&y.current)r===`bottom`&&(b.current=`bottom`),x.current={width:D()};else if(y.current){let e=D(),{left:t,total:n,right:i}=E(),a=y.current.offsetTop+u.top,o=n<700;if(r===`bottom`||o)b.current=`bottom`,x.current={...O(o,e)};else if(r===`right`&&i<e){let n=t-e+y.current.clientWidth;b.current=`smart-bottom-left`,x.current={top:y.current.offsetTop+16+y.current.clientHeight,left:n+20,width:e}}else if(r===`left`&&t<e)b.current=`smart-bottom-right`,x.current={top:y.current.offsetTop+16+y.current.clientHeight,left:t-20,width:e};else if(r===`left`){let n=t-e;b.current=`right`,x.current={top:a,left:n-5,width:e}}else{let n=t+y.current.clientWidth;b.current=`left`,x.current={top:a,left:n+5,width:e}}}},A=()=>{l.isControlled?l.showTooltip():m||h(!0)},j=()=>{l.isControlled?l.closeTooltip():m&&h(!1)},M=l.isControlled&&l.isVisible||m||_,ee=null;return M&&(ee=(0,a.jsx)(`div`,{className:`tooltip-spacer`,style:x.current,children:(0,a.jsx)(`div`,{className:`tooltip`,id:`tooltip`,role:`tooltip`,onMouseEnter:w,onMouseMove:w,onMouseLeave:T,children:(0,a.jsxs)(`div`,{className:`tooltip__interior`,children:[(0,a.jsx)(`div`,{className:`tooltip-pointer ${b.current}`}),(0,a.jsx)(`div`,{className:`tooltip__content`,children:(0,a.jsx)(`div`,{className:`tooltip__message`,children:n})})]})})})),(0,g.useEffect)(()=>(window.addEventListener(`scroll`,(0,i.throttle)(k,500)),window.addEventListener(`resize`,(0,i.throttle)(k,100)),l.isControlled||document?.getElementById(C)?.addEventListener(`mousemove`,(0,i.throttle)(k,500)),()=>{window.removeEventListener(`scroll`,k),window.removeEventListener(`resize`,k),l.isControlled||document?.getElementById(C)?.addEventListener(`mousemove`,k)}),[]),(0,g.useEffect)(()=>{k()},[y.current]),(0,a.jsx)(`div`,{id:C,className:(0,is.default)({"tooltip-wrapper":!0,[e]:e!==null}),style:d,children:(0,a.jsxs)(`div`,{ref:e=>{y.current=e},children:[(0,a.jsxs)(`div`,{role:`presentation`,tabIndex:`0`,className:`tooltip__hover-wrapper`,onBlur:j,onFocus:A,onKeyPress:A,onMouseEnter:A,onMouseLeave:j,onClick:A,children:[t,s&&S[s]]}),ee]})})};ss.propTypes=as;var cs={title:_.default.string.isRequired,children:_.default.node.isRequired,className:_.default.string,textAlign:_.default.shape({title:_.default.oneOf([`center`,`left`]),text:_.default.oneOf([`center`,`left`])})},ls=({children:e,title:t,className:n=null,textAlign:r={title:`left`,text:`left`}})=>(0,a.jsxs)(`div`,{className:(0,is.default)({[n]:n!==null}),children:[(0,a.jsx)(`h1`,{className:(0,is.default)(`tooltip__title`,r.title),children:t}),(0,a.jsx)(`div`,{className:(0,is.default)(`tooltip__text`,r.text),children:e})]});ls.propTypes=cs;var us=(e,t=[],n=[13,32])=>r=>{n.includes(r.keyCode)&&e(...t)},ds={label:_.default.string.isRequired,internal:_.default.string,labelContent:_.default.element,active:_.default.bool,enabled:_.default.bool,switchTab:_.default.func,className:_.default.string,tooltip:_.default.object,count:_.default.number,tablessStyle:_.default.bool},fs=e=>{let t=(0,g.useRef)(null),n=()=>{e.enabled&&(t?.current&&t.current?.scrollIntoView&&t.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`}),e.switchTab(e.internal))},r=us(n);return(0,a.jsx)(`div`,{className:`usa-dt-tab__wrapper${e.enabled?``:` disabled`}${e.tablessStyle?` tabless-tab`:``}${e.active?` active`:``}`,children:(0,a.jsx)(`div`,{className:`usa-dt-tab${e.active?` active`:``} ${e.className||``}${e.enabled?``:` disabled`}`,ref:t,onClick:n,onKeyDown:r,role:`tab`,title:`Show ${e.label}`,"aria-label":`Show ${e.label}`,tabIndex:0,disabled:!e.enabled,children:(0,a.jsx)(`div`,{className:`usa-dt-tab__content`,children:(0,a.jsxs)(`div`,{className:`usa-dt-tab__label`,children:[(0,a.jsx)(`div`,{className:`usa-dt-tab__label-text`,children:e.label}),e.count>=0&&(0,a.jsx)(`div`,{"aria-label":`Count of ${T(e.count)} for ${e.label}`,className:`count${e.active?` active`:``}`,children:T(e.count)}),e.tooltip&&(0,a.jsx)(ss,{tooltipComponent:(0,a.jsx)(ls,{title:e.label,children:e.tooltip}),icon:`info`})]})})})})};fs.propTypes=ds;var ps={types:_.default.arrayOf(_.default.shape({label:_.default.string.isRequired,internal:_.default.string.isRequired,count:_.default.number,disabled:_.default.bool,tooltip:_.default.element})).isRequired,active:_.default.string.isRequired,switchTab:_.default.func.isRequired,tabsClassName:_.default.string,tablessStyle:_.default.bool},ms=({types:e,active:t,switchTab:n,tabsClassName:r,tablessStyle:i})=>{let o=e.map(e=>(0,g.createElement)(fs,{...e,active:t===e.internal,switchTab:n,key:`table-type-item-${e.internal}`,enabled:!e.disabled,className:r,tooltip:e.tooltip,tablessStyle:i}));return(0,a.jsxs)(`div`,{className:`usa-dt-tab-list${i?` tabless-tabs`:``}`,role:`tablist`,children:[!i&&(0,a.jsx)(`div`,{className:`usa-dt-tab-list__border-pre-filler`}),o,(0,a.jsx)(`div`,{className:`usa-dt-tab-list__border-post-filler`})]})};ms.propTypes=ps;var hs=({className:e})=>(0,a.jsx)(io,{className:`coming soon ${e}`,title:`Coming Soon`,description:`This feature is currently under development.`}),gs=(e,t,n)=>{if(e!==0&&!e)return null;let r=t?S(e):T(e);if(Math.abs(e)>y.MILLION){let a=w(e);r=`${t?C(e/a.unit,2):E(e/a.unit,2)} ${n?(0,i.startCase)(a.longLabel):a.unitLabel}`}return r},_s={2:`two`,3:`three`,4:`four`},vs={boxes:_.default.arrayOf(_.default.shape({type:_.default.string.isRequired,title:_.default.oneOfType([_.default.string,_.default.element]),amount:_.default.oneOfType([_.default.number,_.default.string]),isMonetary:_.default.bool,isString:_.default.bool,subtitle:_.default.string,subtitleBottom:_.default.string,isLoading:_.default.bool}))},ys=({boxes:e})=>{let[t,n]=(0,g.useState)(window.innerWidth>1200),r=(0,i.throttle)(()=>n(window.innerWidth>1200));return(0,g.useEffect)(()=>(r(),window.addEventListener(`resize`,r),()=>window.removeEventListener(`resize`,r)),[]),(0,a.jsx)(`div`,{className:`usa-dt-information-boxes ${_s[e.length]}-boxes`,children:e.map(e=>(0,a.jsx)(`div`,{className:`usa-dt-information-box`,children:(0,a.jsx)(`div`,{className:`usa-dt-information-box__divider`,children:(0,a.jsxs)(`div`,{className:`usa-dt-information-box__content${e.subtitle?` with-subtitle`:``}`,children:[(0,a.jsx)(`div`,{className:`usa-dt-information-box__title`,children:e.title}),e.subtitle&&(0,a.jsx)(`div`,{className:`usa-dt-information-box__subtitle`,children:e.subtitle}),(0,a.jsxs)(`div`,{className:`usa-dt-information-box__amount${e.isLoading?` loading`:``}`,children:[e.isLoading&&(0,a.jsx)(`div`,{className:`dot-pulse`}),!e.isLoading&&e.isString?e.amount:``,!e.isLoading&&!e.isString&&gs(e.amount,e.isMonetary,t)]}),e.subtitleBottom&&(0,a.jsx)(`div`,{className:`usa-dt-information-box__subtitle-bottom`,children:e.subtitleBottom})]})})},e.type))})};ys.propTypes=vs;function bs({icon:e,title:t,overLine:n,description:r,titleTooltip:i,descTooltip:o}){return(0,a.jsxs)(`div`,{className:`usda-section-title__sectionHeader`,children:[e&&g.default.cloneElement(e,{className:`usda-section-title__title-icon`}),(0,a.jsxs)(`div`,{className:`usda-section-title__header`,children:[n&&(0,a.jsx)(`strong`,{className:`usda-section-title__overline`,children:n}),(0,a.jsxs)(`div`,{className:`usda-section-title__title`,children:[(0,a.jsx)(`h3`,{children:t}),i.component&&(0,a.jsx)(ss,{tooltipComponent:i.component,icon:`info`,className:`${n?`has-overline`:``}`,...i.props})]})]}),r&&g.default.cloneElement(r,{className:`usda-section-title__desc has-overline`}),o.component&&(0,a.jsx)(ss,{tooltipComponent:o.component,icon:`info`,tooltipPosition:`left`,...o.props})]})}bs.propTypes={icon:_.default.element,title:_.default.string.isRequired,overLine:_.default.string,description:_.default.element,titleTooltip:_.default.shape({component:_.default.oneOfType([_.default.element,_.default.bool]),props:_.default.object}),descTooltip:_.default.shape({component:_.default.oneOfType([_.default.element,_.default.bool]),props:_.default.object})};var xs={isControlled:!1,toggleExpand:()=>{},isExpanded:!1},Ss=({title:e,icon:t,children:n,id:r=``,classNames:i=``,isCollapsible:o=!1,isComingSoon:s=!1,controlledProps:c=xs,defaultExpandedState:l=!0,overLine:u=``,titleTooltip:d={tooltip:null,tooltipProps:{}},descTooltip:f={component:null,props:{}},description:p})=>{let[m,h]=(0,g.useState)(l),_=()=>{c.isControlled?c.toggleExpand():h(!m)},v=m||c.isControlled&&c.isExpanded||!o;return(0,a.jsxs)(`section`,{id:r,className:`usda-section__container${i?` ${i}`:``}`,children:[(0,a.jsxs)(`div`,{className:`usda-section-title__container`,children:[(0,a.jsx)(bs,{icon:t,title:e,overLine:u,description:p,titleTooltip:d,descTooltip:f}),o&&(0,a.jsx)(Q,{"aria-label":`usda-section-title__expand-icon`,tabIndex:0,onKeyDown:us(_),className:`usda-section-title__expand-icon`,onClick:_,size:`2x`,icon:m||c.isControlled&&c.isExpanded?`chevron-up`:`chevron-down`})]}),(0,a.jsx)(`hr`,{}),s&&v&&(0,a.jsx)(hs,{}),v&&!s&&n]})};Ss.propTypes={icon:_.default.element.isRequired,children:_.default.element.isRequired,title:_.default.string.isRequired,defaultExpandedState:_.default.bool,overLine:_.default.string,controlledProps:_.default.shape({isControlled:_.default.bool.isRequired,toggleExpand:_.default.func.isRequired,isExpanded:_.default.bool.isRequired}),description:_.default.element,titleTooltip:_.default.shape({component:_.default.element,props:_.default.object}),descTooltip:_.default.shape({component:_.default.element,props:_.default.object}),isCollapsible:_.default.bool,isComingSoon:_.default.bool,classNames:_.default.string,id:_.default.string};var Cs={items:_.default.arrayOf(_.default.element)},ws=({items:e})=>{let[t,n]=(0,g.useState)(1),[r,o]=(0,g.useState)(!1),s=(0,g.useRef)(null),c=(0,g.useRef)(0),l=(0,g.useRef)((0,i.uniqueId)()),u=(0,g.useRef)(null),d=(0,g.useRef)(null),f=e=>n(e),p=()=>f(t);(0,g.useEffect)(()=>(window.addEventListener(`resize`,p),()=>window.removeEventListener(`resize`,p)),[]);let m=()=>{let t=d.current.offsetWidth,n=Math.round(c.current*-1/t)+1;return n>e.length?1:n<1?e.length:n};(0,g.useEffect)(()=>{r||f(m())},[r]),(0,g.useEffect)(()=>{if(u.current&&d.current){let e=d.current.offsetWidth,n=(t-1)*e*-1;c.current=n,u.current.style.transform=`translate(${n}px, 0px)`}});let h=()=>o(!0),_=()=>{s.current=null,o(!1)},v=()=>_(),y=e=>{let t=e-s.current;s.current=e,c.current+=t,u.current.style.transform=`translate(${c.current}px, 0px)`},b=e=>{if(!r||!e.touches||!e.touches.length||!u)return;let t=e.touches[0];s.current===null?s.current=t.pageX:y(t.pageX)},x=e=>{e.preventDefault(),o(!0)},S=()=>{r&&_()},C=e=>{r&&(s.current===null?s.current=e.pageX:y(e.pageX))},w=e=>{e.preventDefault(),f(parseInt(e.target.value,10))};return(0,a.jsxs)(`div`,{className:`usa-dt-carousel`,"aria-describedby":`${l.current}-instructions`,children:[(0,a.jsxs)(`div`,{id:`${l.current}-instructions`,className:`usa-dt-carousel__instructions`,"aria-live":`polite`,children:[`An image carousel containing `,`${e.length} item${e.length===1?``:`s`}`,`, with item `,t,` shown.`]}),(0,a.jsx)(`div`,{className:`usa-dt-carousel-content`,children:(0,a.jsx)(`div`,{className:`usa-dt-carousel-item`,onTouchStart:h,onTouchMove:b,onTouchEnd:v,onTouchCancel:v,onMouseDown:x,onMouseUp:S,onMouseLeave:S,onMouseMove:C,role:`presentation`,ref:d,children:(0,a.jsx)(`div`,{className:`usa-dt-carousel-item__list ${r?`usa-dt-carousel-item__list_dragging`:``}`,"aria-live":`polite`,ref:u,children:e.map((e,n)=>(0,a.jsx)(`div`,{className:`usa-dt-carousel-item__list-item`,"aria-hidden":t!==n+1,tabIndex:-1,children:(0,g.cloneElement)(e,{className:`usa-dt-carousel-item__item`})},`${n}-the-list-item`))})})}),(0,a.jsx)(`div`,{className:`usa-dt-carousel-pager`,children:(0,a.jsx)(`div`,{className:`usa-dt-carousel-pager__list`,role:`menu`,"aria-label":`Pagination controls for carousel items`,children:e.map((e,n)=>(0,a.jsx)(`button`,{className:`usa-dt-carousel-pager__dot-button ${n+1===t?`usa-dt-carousel-pager__dot-button_active`:``}`,value:n+1,onClick:w,"aria-label":`Skip to carousel item ${n+1}`,"aria-checked":n+1===t,role:`menuitemradio`,children:(0,a.jsx)(`div`,{className:`usa-dt-carousel-pager__dot-decorator`})},`${n}-list-item`))})})]})};ws.propTypes=Cs;var Ts=(e,t)=>{let n=!1,r=!1,i=[...e?.childNodes],a=i[0]?.getBoundingClientRect(),o=i[i.length-1]?.getBoundingClientRect();return(a.left<0||e.scrollLeft>0)&&(n=!0),(o.right>e.clientWidth+t||o.right>e.scrollWidth)&&(r=!0),{left:n,right:r}},Es=e=>{let t=[];return e.childNodes.forEach(e=>{let n=e.getBoundingClientRect();t.push({name:e.innerHTML,originalLeftOffset:n.left,width:n.width})}),t},Ds=e=>{e.current.querySelector(`ul`).scrollTo({left:`0`,behavior:`smooth`})},Os={sections:_.default.array,activeSection:_.default.string,jumpToSection:_.default.func,detectActiveSection:_.default.oneOfType([_.default.bool,_.default.func]),pageName:_.default.string},ks=e=>{let{sections:t,jumpToSection:n,pageName:r,detectActiveSection:o}=e,[s,c]=(0,g.useState)(e.activeSection),[l,u]=(0,g.useState)(window.innerWidth),[d,f]=(0,g.useState)(null),[p,m]=(0,g.useState)([]),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(!1),[b,x]=(0,g.useState)(32),[S,C]=(0,g.useState)(window.innerWidth<992),w=(0,g.useRef)(null),[T,E]=(0,g.useState)([]),D=()=>{let e=w?.current?.querySelector(`ul`),{left:t,right:n}=Ts(e,b);_(t),y(n)},O=(0,g.useCallback)(e=>{e.stopPropagation(),D()}),k=(0,g.useCallback)(e=>{e.stopPropagation();let t=w.current.querySelector(`ul`),n=[...t.childNodes],r={name:``,index:0};n.find((e,n)=>{let i=e.getBoundingClientRect();if(i.left>0&&i.right<t.clientWidth)return r.name=e.querySelector(`a`).innerHTML,r.index=n,n});let i=r.index;if(i+2<p.length){let e=t.scrollLeft-t.clientWidth+20+p[i+1].width+p[i+2].width;t.scrollTo({left:e,behavior:`smooth`})}else Ds(w)}),A=(0,g.useCallback)(e=>{if(e.stopPropagation(),p){let e=w.current.querySelector(`ul`),t=[...e.childNodes],n={name:``,index:0};t.find((t,r)=>{let i=t.getBoundingClientRect(),a=e.clientWidth;if(i.right>a&&i.left>b/2)return n.name=t.querySelector(`a`).innerHTML,n.index=r,r});let r=n.index;if(r-2>=0){let t=p[r-2]?.originalLeftOffset;if(t){let n=t+b/2;e.scrollTo({left:n,behavior:`smooth`})}}else Ds(w)}}),j=(0,g.useCallback)(()=>{let e=w.current.querySelector(`ul`),t=Es(e);f(e),m(t)}),M=(0,g.useCallback)((e,t)=>{e.key===`Enter`&&(t===`left`&&k(e),t===`right`&&A(e))}),ee=()=>{let e=window.innerWidth;l!==e&&u(e),C(l<992),992<l&&l<=1200&&x(52),1200<l&&l<=1640&&x(72),1640<l&&x(192),D()};(0,g.useEffect)(()=>(j(),ee(),window.addEventListener(`resize`,()=>ee()),()=>window.removeEventListener(`resize`,()=>ee())),[]),(0,g.useEffect)(()=>(D(),d?.addEventListener(`scrollend`,e=>O(e)),()=>d?.removeEventListener(`scrollend`,e=>O(e))),[d]);let N=(0,i.throttle)(()=>{let e=t.map(e=>{let t=e.section,n=document.getElementById(`${r}-${t}`);if(!n)return null;let i=document.querySelector(`.usda-page-header`)?.offsetHeight||0,a=n.offsetTop-i;return{section:t,top:a,bottom:n.offsetHeight+a-i}});E(e)},100),P=(0,i.throttle)(()=>{let e=window.pageYOffset||document.documentElement.scrollTop,t=e+window.innerHeight,n=s,r=!1,i=[],a=e+30,o=t-30;if(T.forEach((e,t)=>{if(e.top<=o&&e.bottom>=a){let n=e.bottom-e.top,s=(Math.min(e.bottom,o)-Math.max(a,e.top))/n;i.push({section:e.section,amount:s}),t===T.length-1&&(r=!0)}else t===T.length-1&&e.top<=a&&(r=!0,i.push({section:e.section,amount:1}))}),i.length>0&&(n=i[0].section,i[0].amount<.15&&i.length>1&&(n=i[1].section)),r&&i.length>1){let e=i[i.length-1];i[i.length-2].amount<.5&&e.amount===1&&(n=e.section)}n!==s&&c(n)},100);return(0,g.useEffect)(()=>{o&&T.length===0&&N();let e=()=>{N(),o&&P()};return window.addEventListener(`scroll`,e),window.addEventListener(`resize`,N),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,N)}},[o,N,P,T.length]),(0,a.jsx)(`div`,{className:`usda-in-page-nav__container`,children:(0,a.jsxs)(`nav`,{ref:w,className:`usda-in-page-nav__wrapper ${h&&!S?`left-fade-effect`:``} ${v?`right-fade-effect`:``} `,children:[h&&!S&&(0,a.jsx)(`div`,{"aria-label":`In-page navigation left paginator`,title:`In-page navigation left paginator`,className:`usda-in-page-nav__paginator left`,tabIndex:`0`,role:`button`,onKeyDown:e=>M(e,`left`),onClick:e=>k(e),children:(0,a.jsx)(Q,{icon:`chevron-left`,alt:`Back`})}),(0,a.jsx)(`ul`,{children:t.map(e=>(0,a.jsx)(`li`,{className:`usda-in-page-nav__element ${e.section===s?`active`:``}`,children:(0,a.jsx)(`a`,{role:`button`,tabIndex:`0`,onKeyDown:t=>t.key===`Enter`?n(e.section):``,onClick:()=>n(e.section),children:e.label},`in-page-nav-link-${e.label}`)},`in-page-nav-li-${e.label}`))}),v&&!S&&(0,a.jsx)(`div`,{"aria-label":`In-page navigation right paginator`,title:`In-page navigation right paginator`,className:`usda-in-page-nav__paginator right`,tabIndex:`0`,role:`button`,onKeyDown:e=>M(e,`right`),onClick:e=>A(e),children:(0,a.jsx)(Q,{icon:`chevron-right`,alt:`Forward`})})]})})};ks.propTypes=Os;var As=({title:e,overLine:t=``,toolBar:n=[],backgroundColor:r=`#1a4480`,pageName:i,sections:o,activeSection:s,jumpToSection:c,inPageNav:l=!1})=>(0,a.jsxs)(`section`,{className:`usda-page-header usda-page-header--sticky`,style:{backgroundColor:r},children:[(0,a.jsxs)(`div`,{className:`usda-page-header__container`,children:[(0,a.jsxs)(`div`,{className:`usda-page-header__mobile-top`,children:[(0,a.jsxs)(`div`,{className:`usda-page-header__header`,children:[t&&(0,a.jsx)(`strong`,{className:`usda-page-header__overline`,children:t}),(0,a.jsx)(`div`,{className:`usda-page-header__title`,children:(0,a.jsx)(`h1`,{children:e})})]}),(()=>{let e=n?.find(e=>e?.type.displayName===`Share Icon`);return e?g.default.cloneElement(e):null})(),(()=>{let e=n?.find(e=>e?.type.displayName===`ATDButton`);return e?g.default.cloneElement(e):null})()]}),(0,a.jsx)(`hr`,{}),n?.length>0&&(0,a.jsx)(`div`,{className:`usda-page-header__toolbar`,children:n.map(e=>{let t=`${e.props?.className} ${e.props?.classNames}`,n=`${e.props?.classNames}`;return t?g.default.cloneElement(e,{className:`${t} toolbar__item`}):n?g.default.cloneElement(e,{classNames:`${n} toolbar__item`}):g.default.cloneElement(e,{className:`toolbar__item`,classNames:`toolbar__item`})})})]}),l&&(0,a.jsx)(ks,{detectActiveSection:!0,pageName:i,sections:o,activeSection:s,jumpToSection:c})]});As.propTypes={stickyBreakPoint:_.default.number,overLine:_.default.string,title:_.default.string.isRequired,toolBar:_.default.arrayOf(_.default.element),pageName:_.default.string,sections:_.default.array,activeSection:_.default.string,jumpToSection:_.default.func};var js={onClick:_.default.func.isRequired,downloadInFlight:_.default.bool,tooltipComponent:_.default.element,isEnabled:_.default.bool,tooltipPosition:_.default.string},Ms=({onClick:e,downloadInFlight:t,tooltipComponent:n=null,tooltipPosition:r=`left`,isEnabled:i=!0,backgroundColor:o=`#1a4480`})=>{let s=n=>{n.preventDefault(),!t&&i&&e()},c=t||!i?` disabled`:``,l=t?`Preparing Download...`:`Download`,u=t?Yo:Ko;return n?(0,a.jsx)(ss,{className:`usda-download-btn${c}`,tooltipPosition:r,tooltipComponent:n,children:(0,a.jsxs)(`button`,{type:`button`,role:`presentation`,className:`usda-button`,title:l,disabled:t||!i,onClick:s,style:{backgroundColor:o},tabIndex:i?0:-1,children:[(0,a.jsx)(Q,{icon:u,spin:t,color:`#dfe1e2`}),(0,a.jsx)(`span`,{style:{color:`#dfe1e2`},children:l})]})}):(0,a.jsx)(`div`,{className:`usda-download-btn${c}`,children:(0,a.jsxs)(`button`,{type:`button`,className:`usda-button`,title:l,"aria-label":l,disabled:t,onClick:s,style:{backgroundColor:o},tabIndex:i?0:-1,"aria-hidden":!i,children:[(0,a.jsx)(Q,{icon:u,spin:t}),(0,a.jsx)(`span`,{children:l})]})})};Ms.displayName=`Download Icon Button`,Ms.propTypes=js;var Ns={prefix:`far`,iconName:`calendar-days`,icon:[448,512,[`calendar-alt`],`f073`,`M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z`]},Ps=2008,Fs=(e=Ps,t)=>[...Array(t-e)].reduce((t,n,r)=>(t.push(e+r+1),t),[e]).sort((e,t)=>t-e),Is=(e,t)=>Number.isInteger(e)?t-e:parseInt(t,10)-parseInt(e,10),Ls=({backgroundColor:e,latestFy:t,selectedFy:n=2020,earliestFy:r=2017,options:i=[],handleFyChange:o=()=>{},sortFn:s=Is})=>(0,a.jsxs)(`div`,{className:`usda-fy-picker__container`,children:[(0,a.jsx)(Ga,{backgroundColor:e,className:`usda-fy-picker`,icon:(0,a.jsx)(Q,{icon:Ns,size:`xs`,alt:`FY Loading ...`}),selectedOption:i.length?i.find(e=>e?.value===n||e.value===parseInt(n,10))?.name||`--`:`FY ${n}`,sortFn:s,options:i.length?i.map(e=>({...e,onClick:o})):t?Fs(r,t).map(e=>({name:`FY ${e}`,value:`${e}`,onClick:o})):[{name:`Loading fiscal years...`,value:null,onClick:()=>{}}]}),(0,a.jsx)(`span`,{children:`Fiscal Year`})]});Ls.displayName=`Fiscal Year Picker`,Ls.propTypes={backgroundColor:_.default.string,selectedFy:_.default.oneOfType([_.default.number,_.default.string]),earliestFy:_.default.number,latestFy:_.default.number,options:_.default.arrayOf(_.default.shape({name:_.default.oneOfType([_.default.string,_.default.number]),value:_.default.oneOfType([_.default.string,_.default.number])})),handleFyChange:_.default.func,sortFn:_.default.func};var Rs={prefix:`fab`,iconName:`linkedin`,icon:[448,512,[],`f08c`,`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`]},zs={prefix:`fab`,iconName:`square-reddit`,icon:[448,512,[`reddit-square`],`f1a2`,`M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM305.9 166.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8-30.2 3.2-53.8 28.8-53.8 59.9l0 .2c-32.8 1.4-62.8 10.7-86.6 25.5-8.8-6.8-19.9-10.9-32-10.9-28.9 0-52.3 23.4-52.3 52.3 0 21 12.3 39 30.1 47.4 1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3 0-28.9-23.4-52.3-52.3-52.3-12 0-23 4-31.9 10.8-24-14.9-54.3-24.2-87.5-25.4l0-.1c0-22.2 16.5-40.7 37.9-43.7 3.9 16.5 18.7 28.7 36.3 28.7l.2-.2zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9-27.5-7.7-26.6-26.7 13.5-33.5 28.1-33.5l0-.1zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9 10.3-34.4 25-34.4 27.3 14.6 28.1 33.5l0 .1zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6 .7-5.4 3.4-5.7 16.1-1.6 33.5-2.5 51.7-2.5s35.6 .9 51.7 2.5c2.7 .3 4.5 3.1 3.4 5.7z`]},Bs={prefix:`fab`,iconName:`square-facebook`,icon:[448,512,[`facebook-square`],`f082`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},Vs=({icon:e,title:t})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Q,{icon:e,color:`#555`,size:`sm`}),(0,a.jsx)(`span`,{children:t})]}),Hs=[{component:(0,a.jsx)(Vs,{icon:Jo,title:`Copy link`}),name:`copy`},{component:(0,a.jsx)(Vs,{icon:qo,title:`Email`}),name:`email`},{component:(0,a.jsx)(({title:e})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`svg`,{className:`share-dropdown__twitter-logo`,width:`1200`,height:`1227`,viewBox:`0 0 1200 1227`,fill:`none`,style:{width:`14px`,height:`14px`},children:(0,a.jsx)(`path`,{d:`M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z`,fill:`#5b616b`})}),(0,a.jsx)(`span`,{children:e})]}),{title:`X (Twitter)`}),name:`twitter`},{component:(0,a.jsx)(Vs,{icon:Bs,title:`Facebook`}),name:`facebook`},{component:(0,a.jsx)(Vs,{icon:Rs,title:`LinkedIn`}),name:`linkedin`},{component:(0,a.jsx)(Vs,{icon:zs,title:`Reddit`}),name:`reddit`}],Us={url:_.default.string.isRequired,classNames:_.default.string,onShareOptionClick:_.default.func.isRequired,includedDropdownOptions:_.default.arrayOf(_.default.string),colors:_.default.object,dropdownDirection:_.default.string,downloadInFlight:_.default.bool,isEnabled:_.default.bool,noShareText:_.default.bool,keepText:_.default.bool,pickerButtonClassNames:_.default.string,pickerListClassNames:_.default.string},Ws=({includedDropdownOptions:e=[],classNames:t=``,url:n=``,onShareOptionClick:r=()=>{},colors:o={color:`#dfe1e2`,backgroundColor:`#1a4480`,confirmationBackgroundColor:`#f1f1f1`},dropdownDirection:s=`left`,downloadInFlight:c,isEnabled:l=!0,noShareText:u,keepText:d=!1,pickerButtonClassNames:f=``,pickerListClassNames:p=``})=>{let[m,h]=(0,g.useState)(!1),_=(0,i.debounce)(()=>h(!1),1750),v=c||!l?` disabled`:``,y=()=>{Array.from(document.querySelectorAll(`.js-dtui-url-for-share-icon`)).forEach(e=>{if(e.value.includes(n))return e.select()}),document.execCommand(`copy`),h(!0),r(`copy`)},b=Hs.filter(({name:t})=>!e.length||e.includes(t)).map(e=>e.name===`copy`?{...e,onClick:y}:{...e,onClick:()=>r(e.name)});return(0,g.useEffect)(()=>(m&&_(),_.cancel),[m]),(0,a.jsxs)(`div`,{className:`${t?`usda-share-icon${v} ${t}`:`usda-share-icon${v}`}`,children:[(0,a.jsx)(`input`,{"aria-label":`Share Input Link`,type:`text`,className:`js-dtui-url-for-share-icon text`,style:{position:`absolute`,right:`9999px`,opacity:0},value:n,readOnly:!0}),(0,a.jsx)(Ga,{buttonClassNames:f,pickerListClassNames:p,dropdownDirection:s,options:b,selectedOption:`copy`,backgroundColor:o.backgroundColor,notEnabled:c||!l,sortFn:()=>1,children:(0,a.jsx)(Q,{icon:`share-alt`,size:`lg`,color:o.color})}),!u&&(0,a.jsx)(`span`,{className:`usda-share-icon__share-text ${d?`keep-text`:``}`,children:`Share`}),m&&(0,a.jsxs)(`div`,{className:`copy-confirmation ${d?`keep-text`:``}`,style:{backgroundColor:o.confirmationBackgroundColor},children:[(0,a.jsx)(Q,{icon:Xo}),` `,`Copied!`]})]})};Ws.propTypes=Us,Ws.displayName=`Share Icon`;var Gs=(e,t=0)=>{let[n,r]=(0,g.useState)(0),[a,o]=(0,g.useState)(!1);return[a,n,o,(0,i.throttle)(()=>{let e=window.scrollY||document.documentElement.scrollTop;t&&e>=t&&!a||!t&&e>=n&&!a?o(!0):(e<=t||e<=n)&&o(!1)},100),(0,i.throttle)(()=>{let t=e.current?e.current.offsetTop:0;r(t)},100)]},Ks=e=>e.map(e=>e&&e.trim()).filter(e=>e).join(` `);function qs({children:e,className:t,...n}){return(0,a.jsx)(`div`,{className:Ks([`usa-dt-flex-grid__container`,t]),...n,children:e})}qs.propTypes={children:_.default.node.isRequired,className:_.default.string};var Js=({children:e,className:t,hasGutter:n=!1,gutterSize:r,...i})=>{let o=n?`usa-dt-flex-grid__gutter`:``,s=(0,is.default)({"usa-dt-flex-grid__gutter-sm":r===`sm`,"usa-dt-flex-grid__gutter-lg":r===`lg`});return(0,a.jsx)(`div`,{className:Ks([`usa-dt-flex-grid__row`,o,s,t]),...i,children:e})};Js.propTypes={children:_.default.node.isRequired,className:_.default.string,hasGutter:_.default.bool,gutterSize:_.default.oneOf([`sm`,`lg`])};var Ys=({children:e,className:t,desktopxl:n,desktop:r,mobile:i,tablet:o,width:s,...c})=>{let l=Ks([...[[null,s],[`desktopxl`,n],[`desktop`,r],[`tablet`,o],[`mobile`,i]].map(([e,t])=>t===void 0?``:t.span!==void 0&&t.offset!==void 0?Ks([`${e?`${e}:`:``}usa-dt-flex-grid__col-${t.span}`,`${e?`${e}:`:``}usa-dt-flex-grid__offset-${t.offset}`]):t.order===void 0?`${e?`${e}:`:``}usa-dt-flex-grid__col-${t}`:Ks([`${e?`${e}:`:``}usa-dt-flex-grid__col-${t.span}`,`${e?`${e}:`:``}usa-dt-flex-grid__order-${t.order}`])),t]);return(0,a.jsx)(`div`,{className:l||`usa-dt-flex-grid__col`,...c,children:e})};Ys.propTypes={children:_.default.node,className:_.default.string,desktopxl:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`]),_.default.shape({span:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`])]),offset:_.default.oneOfType([_.default.number,_.default.string]),order:_.default.oneOfType([_.default.number,_.default.oneOf([`first`,`last`])])})]),desktop:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`]),_.default.shape({span:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`])]),offset:_.default.oneOfType([_.default.number,_.default.string]),order:_.default.oneOfType([_.default.number,_.default.oneOf([`first`,`last`])])})]),tablet:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`]),_.default.shape({span:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`])]),offset:_.default.oneOfType([_.default.number,_.default.string]),order:_.default.oneOfType([_.default.number,_.default.oneOf([`first`,`last`])])})]),mobile:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`]),_.default.shape({span:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`])]),offset:_.default.oneOfType([_.default.number,_.default.string]),order:_.default.oneOfType([_.default.number,_.default.oneOf([`first`,`last`])])})]),width:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`]),_.default.shape({span:_.default.oneOfType([_.default.number,_.default.oneOf([`auto`,`fill`])]),offset:_.default.oneOfType([_.default.number,_.default.string]),order:_.default.oneOfType([_.default.number,_.default.oneOf([`first`,`last`])])})])};var Xs={variant:_.default.string,size:_.default.string,fill:_.default.string,height:_.default.oneOfType([_.default.string,_.default.number]),onClick:_.default.func,onKeyUp:_.default.func,className:_.default.oneOfType([_.default.string,_.default.object])},Zs=({variant:e=``,size:t=`md`,children:n,fill:r,height:i,className:o=``,onClick:s,onKeyUp:c})=>(0,a.jsx)(`div`,{className:`card-column ${o}`,onClick:s,role:`presentation`,tabIndex:`0`,onKeyUp:c,children:(0,a.jsx)(`div`,{className:`${e} ${t} card-container`,style:{backgroundColor:`${r}`,height:`${i}`},children:n})});Zs.propTypes=Xs;var Qs={overline:_.default.string,headline:_.default.oneOfType([_.default.string,_.default.object,_.default.node]),subhead:_.default.string,text:_.default.oneOfType([_.default.string,_.default.object]),variant:_.default.string,children:_.default.oneOfType([_.default.string,_.default.object,_.default.node]),imageContainerHeight:_.default.string,customClassName:_.default.string,onClick:_.default.func},$s=({overline:e,headline:t,onClick:n,subhead:r,text:i,variant:o=``,children:s,imageContainerHeight:c,customClassName:l=``})=>(0,a.jsxs)(`div`,{className:`card__body ${o} ${l}`,style:{height:c?`calc(100% - ${c} - 12px)`:``},children:[e&&(0,a.jsx)(`div`,{className:`overline`,children:e}),t&&(0,a.jsx)(`div`,{children:(0,a.jsx)(`div`,{className:`headline`,onClick:n,children:t})}),r&&(0,a.jsx)(`div`,{className:`subhead`,children:r}),i&&(0,a.jsx)(`div`,{className:`text`,children:i}),s]});$s.propTypes=Qs;var ec={img:_.default.string,fill:_.default.string,variant:_.default.string,imageContainerHeight:_.default.string,thumbnail:_.default.bool,children:_.default.element,onClick:_.default.func},tc=({img:e,fill:t,variant:n,imageContainerHeight:r,thumbnail:i,children:o,onClick:s})=>(0,a.jsx)(`div`,{children:(0,a.jsx)(`div`,{className:`card__hero ${n}`,onClick:s,style:{backgroundColor:`${t}`,height:`${r}`},children:i?(0,a.jsx)(a.Fragment,{children:o}):(0,a.jsx)(`img`,{src:`${e}`,role:`presentation`,alt:``})})});tc.propTypes=ec;var nc={buttonSize:_.default.oneOf([`large`,`medium`,`small`,`lg`,`md`,`sm`]).isRequired,backgroundColor:_.default.oneOf([`light`,`dark`]).isRequired,buttonType:_.default.oneOf([`primary`,`primaryIcon`,`secondary`,`secondaryIcon`,`tertiary`,`tertiaryIcon`,`text`,`stacked`,`icon`,`inline`,`intext`]).isRequired,copy:_.default.string.isRequired,image:_.default.element,textAlignment:_.default.oneOf([`left`,`center`]),imageAlignment:_.default.oneOf([`left`,`right`]),additionalClassnames:_.default.string,onClick:_.default.func,onKeyUp:_.default.func,buttonTitle:_.default.string.isRequired,disabled:_.default.bool,maxWidth:_.default.string,to:_.default.string},rc=e=>{let t=``;return e.buttonSize===`large`||e.buttonSize===`lg`?t+=` button__lg `:e.buttonSize===`medium`||e.buttonSize===`md`?t+=` button__md `:(e.buttonSize===`small`||e.buttonSize===`sm`)&&(t+=` button__sm `),e.buttonType===`primary`?t+=` button-type__primary-light `:e.buttonType===`secondary`?e.backgroundColor===`light`?t+=` button-type__secondary-light `:e.backgroundColor===`dark`&&(t+=` button-type__secondary-dark `):e.buttonType===`primaryIcon`?e.backgroundColor===`light`&&e.imageAlignment===`left`&&(t+=` button-type__primary-left-icon-light `):e.buttonType===`secondaryIcon`?e.backgroundColor===`light`?e.imageAlignment===`left`&&(t+=` button-type__secondary-left-icon-light `):e.backgroundColor===`dark`&&e.imageAlignment===`left`&&(t+=` button-type__secondary-left-icon-dark `):e.buttonType===`tertiary`?t+=` button-type__tertiary-light `:e.buttonType===`tertiaryIcon`?e.imageAlignment===`left`&&e.backgroundColor===`light`&&(t+=` button-type__tertiary-left-icon-light `):e.buttonType===`text`?e.backgroundColor===`light`?e.imageAlignment===`left`?t+=` button-type__text-left-icon-light `:e.imageAlignment===`right`?t+=` button-type__text-right-icon-light `:t+=` button-type__text-light `:e.backgroundColor===`dark`&&(e.imageAlignment===`left`?t+=` button-type__text-left-icon-dark `:e.imageAlignment===`right`?t+=` button-type__text-right-icon-dark `:t+=` button-type__text-dark `):e.buttonType===`stacked`?e.backgroundColor===`light`?t+=` button-type__stacked-icon-light `:e.backgroundColor===`dark`&&(t+=` button-type__stacked-icon-dark `):e.buttonType===`icon`?e.backgroundColor===`light`?t+=` button-type__icon-light `:e.backgroundColor===`dark`&&(t+=` button-type__icon-dark `):e.buttonType===`inline`?e.imageAlignment===`right`&&(t+=` button-type__inline-right-icon-light `):e.buttonType===`intext`&&(t+=` button-type__intext-light `),e.textAlignment===`left`?t+=` button-text__left-align `:e.textAlignment===`center`&&(t+=` button-text__center-align `),e.additionalClassnames&&(t+=` `,t+=e.additionalClassnames),t.includes(`button-type__intext-light`)?(0,a.jsx)(`a`,{"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onKeyUp:e.onKeyUp,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},target:`_blank`,rel:`noopener noreferrer`,href:e.to,children:e.copy}):t.includes(`left-icon`)?(0,a.jsxs)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:[e.image,e.copy]}):t.includes(`right-icon`)?(0,a.jsxs)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:[e.copy,e.image]}):t.includes(`stacked-icon`)?(0,a.jsxs)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:[(0,a.jsx)(`div`,{className:`stacked-button__only-image`,children:e.image}),(0,a.jsx)(`div`,{className:`stacked-button__only-text`,children:e.copy})]}):t.includes(`icon-light`)||t.includes(`icon-dark`)?(0,a.jsx)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:e.image}):(0,a.jsx)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:e.copy})};rc.propTypes=nc;var ic={link:_.default.string,govLink:_.default.bool,onlyPerformAction:_.default.bool,action:_.default.func,text:_.default.oneOfType([_.default.string,_.default.object]),variant:_.default.string,customClassName:_.default.string,children:_.default.oneOfType([_.default.string,_.default.object]),disabled:_.default.bool},ac=({link:e,govLink:t,onlyPerformAction:n=`false`,action:r,text:i,variant:o=`secondary`,customClassName:s=``,children:c,backgroundColor:l,buttonSize:u,textAlignment:d,disabled:f=!1})=>{let p={primary:`primary`,secondary:`secondary`,text:`text`},m={primary:`card__button--primary`,secondary:`card__button--secondary `,text:`card__button--borderless`},h=e=>{e.key===`Enter`&&r()},g=()=>{window.location.href=e,r()};return n===!0?(0,a.jsx)(`div`,{className:`card__button`,children:(0,a.jsx)(rc,{additionalClassnames:s,onKeyUp:e=>h(e),onClick:r,copy:i||c,buttonTitle:i||c,buttonSize:`md`,buttonType:p[o]===void 0?`secondary`:p[o],backgroundColor:`light`,textAlignment:`center`,disabled:f})}):(0,a.jsx)(`div`,{className:`card__button`,children:t?(0,a.jsx)(`div`,{className:`card__button--secondary ${m[o]}`,children:(0,a.jsx)(rc,{"aria-label":`${i}`,tabIndex:`0`,additionalClassnames:s,onClick:g,onKeyUp:e=>h(e),copy:i||c,buttonTitle:i||c,buttonSize:u,textAlignment:d,buttonType:p[o]===void 0?`secondary`:p[o],backgroundColor:l,disabled:f})}):(0,a.jsx)(`div`,{className:`${m[o]}`,children:(0,a.jsx)(rc,{"aria-label":`${i}`,tabIndex:`0`,additionalClassnames:s,onClick:g,onKeyUp:e=>h(e),copy:i||c,buttonTitle:i||c,buttonSize:u,textAlignment:d,buttonType:p[o]===void 0?`secondary`:p[o],backgroundColor:l,disabled:f})})})};ac.propTypes=ic;var oc={size:_.default.oneOf([`sm`,`md`,`lg`,`small`,`medium`,`large`]),label:_.default.string,leftIcon:_.default.oneOfType([_.default.string,_.default.element,_.default.object]),sortFn:_.default.func,selectedOption:_.default.oneOfType([_.default.node,_.default.string]),classname:_.default.string,dropdownClassname:_.default.string,buttonClassname:_.default.string,minTextWidth:_.default.string,id:_.default.string,options:_.default.arrayOf(_.default.shape({name:_.default.oneOfType([_.default.string,_.default.node,_.default.number]),value:_.default.any,onClick:_.default.func,classNames:_.default.string})),children:_.default.node,enabled:_.default.bool,parentWidth:_.default.number,infoSection:_.default.bool,infoSectionContent:_.default.string},sc=(e,t,n)=>e.name===n?-1:t.name===n?1:e.name<t.name?-1:+(e.name>t.name),cc=({size:e,label:t=``,children:n,leftIcon:r,enabled:o,id:s=``,options:c,selectedOption:l,dropdownClassname:u=``,buttonClassname:d=``,minTextWidth:f=``,classname:p=``,sortFn:m=sc,parentWidth:h,infoSection:_=!1,infoSectionContent:v=``})=>{let y=(0,g.useRef)(null),b=(0,g.useRef)(null),[x,S]=(0,g.useState)(!1),[C,w]=(0,g.useState)(o||!1),T=`usa-dt-picker__button-icon--svg`,E=_?`310px`:`initial`,D=e=>{e.preventDefault(),S(!x)},O=e=>{e.key===`Escape`&&x&&S(!x)},k=(e,t)=>m(e,t,l),A=e=>t=>{e(t),S(!1)},j=``;return e===`sm`||e===`small`?j=`-sm`:e===`md`||e===`medium`?j=`-md`:(e===`lg`||e===`large`)&&(j=`-lg`),(0,g.useEffect)(()=>{let e=e=>{x&&y.current&&!y.current.contains(e.target)&&e.target.id!==`${s}-${T}`&&e.target.parentNode.id!==`${s}-${T}`&&S(!1)};return document.addEventListener(`click`,e),()=>{document.removeEventListener(`click`,e)}},[x,s]),(0,g.useEffect)(()=>{w(o)},[o]),(0,a.jsxs)(`div`,{className:`filter__dropdown-container ${p}`,ref:y,children:[t!==``&&(0,a.jsx)(`span`,{className:`filter__dropdown-label${j}`,children:t}),(0,a.jsxs)(`div`,{className:`filter__dropdown-button-list-container`,children:[(0,a.jsxs)(`button`,{className:`filter__dropdown-button${j} ${C?`enabled`:`not-enabled`} ${d}`,ref:b,"aria-label":`Filter Dropdown Button`,onClick:D,onKeyUp:O,style:{maxWidth:`${h}px`},type:`button`,children:[r&&(0,a.jsx)(`span`,{className:`filter__dropdown-left-icon`,children:(0,a.jsx)(Q,{icon:r,alt:`page title bar button icon`})}),n||(0,a.jsx)(`span`,{className:`filter__dropdown-button-text ${f}`,children:l}),(0,a.jsxs)(`span`,{className:`filter__dropdown-chevron`,children:[!x&&(0,a.jsx)(Q,{icon:`chevron-down`,alt:`Toggle menu`}),x&&(0,a.jsx)(Q,{icon:`chevron-up`,alt:`Toggle menu`})]})]}),x&&(0,a.jsx)(`div`,{className:`filter__dropdown__list-info-wrapper`,style:{maxWidth:`${h}px`},children:(0,a.jsxs)(`ul`,{className:`filter__dropdown-list${j} ${x?``:`hide`} ${C?`enabled`:`not-enabled`} ${u}`,style:{maxWidth:`${h}px`,height:E},children:[c?.sort(k).map(e=>({...e,onClick:A(e.onClick)})).map(e=>(0,a.jsx)(`li`,{className:`filter__dropdown-list-item ${e?.classNames?e.classNames:``} ${e.name?.trim()===l?.trim()?`active`:``}`,children:(0,a.jsx)(`button`,{style:{display:`block`,width:`100%`},tabIndex:0,onClick:t=>{t.preventDefault(),e.onClick(e.value)},onKeyUp:t=>{t.preventDefault(),t.key===`Enter`&&e.onClick(e.value)},className:`filter__dropdown-item`,type:`button`,children:e.component?e.component:e.name})},(0,i.uniqueId)())),_&&(0,a.jsx)(`li`,{children:(0,a.jsxs)(`div`,{className:`filter__dropdown-explainer`,style:{width:`${h}px`},children:[(0,a.jsx)(`div`,{className:`filter__dropdownSeparator`}),(0,a.jsx)(`div`,{className:`filter__dropdown-content`,children:v})]})})]})})]})]})};cc.propTypes=oc,e.Button=rc,e.CardBody=$s,e.CardButton=ac,e.CardContainer=Zs,e.CardHero=tc,e.Carousel=ws,e.ComingSoon=hs,e.DownloadIconButton=Ms,e.ErrorMessage=oo,e.FiscalYearPicker=Ls,e.FlexGridCol=Ys,e.FlexGridContainer=qs,e.FlexGridRow=Js,e.GenericMessage=io,e.InformationBoxes=ys,e.LoadingMessage=zo,e.NewPicker=cc,e.NoResultsMessage=Bo,e.PageHeader=As,e.Pagination=Va,e.Picker=Ga,e.QuarterPicker=Qa,e.SearchBar=no,e.SectionHeader=bs,e.SectionWrapper=Ss,e.ShareIcon=Ws,e.Table=rs,e.Tabs=ms,e.TooltipComponent=ls,e.TooltipWrapper=ss,e.useCumulativeQuarterPicker=Ja,e.useDynamicStickyClass=Gs});