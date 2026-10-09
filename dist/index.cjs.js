Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));let l=require("react"),u=c(l,1);l=c(l);let d=require("prop-types"),f=c(d,1);d=c(d);let p=require("accounting");p=c(p,1);let m=require("lodash-es"),h=require("react/jsx-runtime"),g=require("react-dom");g=c(g);var _={symbol:`$`,precision:0,format:{pos:`%s%v`,neg:`-%s%v`,zero:`%s%v`}},v={TRILLION:0xe8d4a51000,BILLION:1e9,MILLION:1e6,THOUSAND:1e3},y={TRILLION:`T`,BILLION:`B`,MILLION:`M`,THOUSAND:`k`},b={TRILLION:`trillion`,BILLION:`billion`,MILLION:`million`,THOUSAND:`thousand`},x=e=>p.default.formatMoney(e,_),S=(e,t)=>{let n=Object.assign({},_,{precision:t});return p.default.formatMoney(e,n)},C=e=>{let t=Math.abs(e),n=1,r=``,i=``;return t>=v.TRILLION?(n=v.TRILLION,r=y.TRILLION,i=b.TRILLION):t>=v.BILLION?(n=v.BILLION,r=y.BILLION,i=b.BILLION):t>=v.MILLION?(n=v.MILLION,r=y.MILLION,i=b.MILLION):t>=v.THOUSAND&&(n=v.THOUSAND,r=y.THOUSAND,i=b.THOUSAND),{unit:n,unitLabel:r,longLabel:i}},w=e=>{let t=Object.assign({},_,{symbol:``});return p.default.formatMoney(e,t)},T=(e,t)=>{let n=Object.assign({},_,{symbol:``,precision:t});return p.default.formatMoney(e,n)},ee=(e,t,n)=>{let r=(e-1)*t+1,i=e*t;return e===Math.ceil(n/t)&&(i=n),{start:r,end:i}};function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function te(e){if(Array.isArray(e))return e}function D(e){if(Array.isArray(e))return E(e)}function O(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,le(r.key),r)}}function A(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=de(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function M(e,t,n){return(t=le(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function re(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ie(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?oe(Object(n),!0).forEach(function(t){M(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function se(e,t){return te(e)||re(e,t)||de(e,t)||ie()}function P(e){return D(e)||ne(e)||de(e)||ae()}function ce(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function le(e){var t=ce(e,`string`);return typeof t==`symbol`?t:t+``}function ue(e){"@babel/helpers - typeof";return ue=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ue(e)}function de(e,t){if(e){if(typeof e==`string`)return E(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}var fe=function(){},pe={},me={},he=null,ge={mark:fe,measure:fe};try{typeof window<`u`&&(pe=window),typeof document<`u`&&(me=document),typeof MutationObserver<`u`&&(he=MutationObserver),typeof performance<`u`&&(ge=performance)}catch{}var _e=(pe.navigator||{}).userAgent,ve=_e===void 0?``:_e,F=pe,I=me,ye=he,be=ge;F.document;var L=!!I.documentElement&&!!I.head&&typeof I.addEventListener==`function`&&typeof I.createElement==`function`,xe=~ve.indexOf(`MSIE`)||~ve.indexOf(`Trident/`),Se,Ce=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,we=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Te={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Ee={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},De=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],R=`classic`,Oe=`duotone`,ke=`sharp`,Ae=`sharp-duotone`,je=`chisel`,Me=`etch`,Ne=`graphite`,Pe=`jelly`,Fe=`jelly-duo`,Ie=`jelly-fill`,Le=`mosaic`,Re=`notdog`,ze=`notdog-duo`,Be=`pixel`,Ve=`slab`,He=`slab-duo`,Ue=`slab-press`,We=`slab-press-duo`,Ge=`thumbprint`,Ke=`utility`,qe=`utility-duo`,Je=`utility-fill`,Ye=`vellum`,Xe=`whiteboard`,Ze=`Classic`,Qe=`Duotone`,$e=`Sharp`,et=`Sharp Duotone`,tt=`Chisel`,nt=`Etch`,rt=`Graphite`,it=`Jelly`,at=`Jelly Duo`,ot=`Jelly Fill`,st=`Mosaic`,ct=`Notdog`,lt=`Notdog Duo`,ut=`Pixel`,dt=`Slab`,ft=`Slab Duo`,pt=`Slab Press`,mt=`Slab Press Duo`,ht=`Thumbprint`,gt=`Utility`,_t=`Utility Duo`,vt=`Utility Fill`,yt=`Vellum`,bt=`Whiteboard`,xt=[R,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe];Se={},M(M(M(M(M(M(M(M(M(M(Se,R,Ze),Oe,Qe),ke,$e),Ae,et),je,tt),Me,nt),Ne,rt),Pe,it),Fe,at),Ie,ot),M(M(M(M(M(M(M(M(M(M(Se,Le,st),Re,ct),ze,lt),Be,ut),Ve,dt),He,ft),Ue,pt),We,mt),Ge,ht),Ke,gt),M(M(M(M(Se,qe,_t),Je,vt),Ye,yt),Xe,bt);var St={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ct={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},wt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Tt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Et=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Dt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Ot=[`kit`];M(M({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var kt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},At={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},jt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Mt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Nt,Pt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ft=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Nt={},M(M(M(M(M(M(M(M(M(M(Nt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),M(M(M(M(M(M(M(M(M(M(Nt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),M(M(M(M(Nt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),M(M({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var It={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Lt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Rt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},zt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ft,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Bt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Vt=[1,2,3,4,5,6,7,8,9,10],Ht=Vt.concat([11,12,13,14,15,16,17,18,19,20]),Ut=[].concat(P(Object.keys(Lt)),Bt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY],Vt.map(function(e){return`${e}x`}),Ht.map(function(e){return`w-${e}`})),Wt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},z=`___FONT_AWESOME___`,Gt=16,Kt=`fa`,qt=`svg-inline--fa`,Jt=`data-fa-i2svg`,Yt=`data-fa-pseudo-element`,Xt=`data-fa-pseudo-element-pending`,Zt=`data-prefix`,Qt=`data-icon`,$t=`fontawesome-i2svg`,en=`async`,tn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],nn=[`::before`,`::after`,`:before`,`:after`],rn=function(){try{return process.env.NODE_ENV===`production`}catch{return!1}}();function an(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[R]}})}var on=N({},Te);on[R]=N(N(N(N({},{"fa-duotone":`duotone`}),Te[R]),Dt.kit),Dt[`kit-duotone`]);var sn=an(on),cn=N({},Tt);cn[R]=N(N(N(N({},{duotone:`fad`}),cn[R]),Mt.kit),Mt[`kit-duotone`]);var ln=an(cn),un=N({},Rt);un[R]=N(N({},un[R]),jt.kit);var dn=an(un),fn=N({},It);fn[R]=N(N({},fn[R]),kt.kit),an(fn);var pn=Ce,mn=`fa-layers-text`,hn=we;an(N({},St));var gn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],_n=Ee,vn=[].concat(P(Ot),P(Ut)),yn=F.FontAwesomeConfig||{};function bn(e){var t=I.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function xn(e){return e===``?!0:e===`false`?!1:e===`true`||e}I&&typeof I.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=se(e,2),n=t[0],r=t[1],i=xn(bn(n));i!=null&&(yn[r]=i)});var Sn={styleDefault:`solid`,familyDefault:R,cssPrefix:Kt,replacementClass:qt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yn.familyPrefix&&(yn.cssPrefix=yn.familyPrefix);var Cn=N(N({},Sn),yn);Cn.autoReplaceSvg||(Cn.observeMutations=!1);var B={};Object.keys(Sn).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(t){Cn[e]=t,wn.forEach(function(e){return e(B)})},get:function(){return Cn[e]}})}),Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){Cn.cssPrefix=e,wn.forEach(function(e){return e(B)})},get:function(){return Cn.cssPrefix}}),F.FontAwesomeConfig=B;var wn=[];function Tn(e){return wn.push(e),function(){wn.splice(wn.indexOf(e),1)}}var V=Gt,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function En(e){if(e&&L){var t=I.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=I.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return I.head.insertBefore(t,r),e}}var Dn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function On(){for(var e=12,t=``;e-->0;)t+=Dn[Math.random()*62|0];return t}function kn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function An(e){return e.classList?kn(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function jn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Mn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${jn(e[n])}" `},``).trim()}function Nn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Pn(e){return e.size!==H.size||e.x!==H.x||e.y!==H.y||e.rotate!==H.rotate||e.flipX||e.flipY}function Fn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function In(e){var t=e.transform,n=e.width,r=n===void 0?Gt:n,i=e.height,a=i===void 0?Gt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&xe?`translate(${t.x/V-r/2}em, ${t.y/V-a/2}em) `:s?`translate(calc(-50% + ${t.x/V}em), calc(-50% + ${t.y/V}em)) `:`translate(${t.x/V}em, ${t.y/V}em) `,c+=`scale(${t.size/V*(t.flipX?-1:1)}, ${t.size/V*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Ln=`:root, :host {
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
}`;function Rn(){var e=Kt,t=qt,n=B.cssPrefix,r=B.replacementClass,i=Ln;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var zn=!1;function Bn(){B.autoAddCss&&!zn&&(En(Rn()),zn=!0)}var Vn={mixout:function(){return{dom:{css:Rn,insertCss:Bn}}},hooks:function(){return{beforeDOMElementCreation:function(){Bn()},beforeI2svg:function(){Bn()}}}},U=F||{};U[z]||(U[z]={}),U[z].styles||(U[z].styles={}),U[z].hooks||(U[z].hooks={}),U[z].shims||(U[z].shims=[]);var W=U[z],Hn=[],Un=function(){I.removeEventListener(`DOMContentLoaded`,Un),Wn=1,Hn.map(function(e){return e()})},Wn=!1;L&&(Wn=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),Wn||I.addEventListener(`DOMContentLoaded`,Un));function Gn(e){L&&(Wn?setTimeout(e,0):Hn.push(e))}function Kn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?jn(e):`<${t} ${Mn(r)}>${a.map(Kn).join(``)}</${t}>`}function qn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Yn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Jn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Xn(e){return P(e).length===1?e.codePointAt(0).toString(16):null}function Zn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Zn(t);typeof W.hooks.addPack==`function`&&!r?W.hooks.addPack(e,Zn(t)):W.styles[e]=N(N({},W.styles[e]||{}),i),e===`fas`&&Qn(`fa`,t)}var $n=W.styles,er=W.shims,tr=Object.keys(dn),nr=tr.reduce(function(e,t){return e[t]=Object.keys(dn[t]),e},{}),rr=null,ir={},ar={},or={},sr={},cr={};function lr(e){return~vn.indexOf(e)}function ur(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!lr(i)?i:null}var dr=function(){var e=function(e){return Yn($n,function(t,n,r){return t[r]=Yn(n,e,{}),t},{})};ir=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),ar=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),cr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in $n||B.autoFetchSvg,n=Yn(er,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});or=n.names,sr=n.unicodes,rr=vr(B.styleDefault,{family:B.familyDefault})};Tn(function(e){rr=vr(e.styleDefault,{family:B.familyDefault})}),dr();function fr(e,t){return(ir[e]||{})[t]}function pr(e,t){return(ar[e]||{})[t]}function G(e,t){return(cr[e]||{})[t]}function mr(e){return or[e]||{prefix:null,iconName:null}}function hr(e){var t=sr[e],n=fr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function K(){return rr}var gr=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=R,n=tr.reduce(function(e,t){return e[t]=`${B.cssPrefix}-${t}`,e},{});return xt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return nr[r].includes(e)}))&&(t=r)}),t}function vr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?R:t,r=sn[n][e];if(n===Oe&&!e)return`fad`;var i=ln[n][e]||ln[n][r],a=e in W.styles?e:null;return i||a||null}function yr(e){var t=[],n=null;return e.forEach(function(e){var r=ur(B.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function br(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var xr=zt.concat(Et);function Sr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=br(e.filter(function(e){return xr.includes(e)})),a=br(e.filter(function(e){return!xr.includes(e)})),o=se(i.filter(function(e){return r=e,!De.includes(e)}),1)[0],s=o===void 0?null:o,c=_r(i),l=N(N({},yr(a)),{},{prefix:vr(s,{family:c})});return N(N(N({},l),Er({values:e,family:c,styles:$n,config:B,canonical:l,givenPrefix:r})),Cr(n,r,l))}function Cr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?mr(i):{},o=G(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!$n.far&&$n.fas&&!B.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var wr=xt.filter(function(e){return e!==R||e!==Oe}),Tr=Object.keys(Rt).filter(function(e){return e!==R}).map(function(e){return Object.keys(Rt[e])}).flat();function Er(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Oe,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&wr.includes(n)&&(Object.keys(s).find(function(e){return Tr.includes(e)})||l.autoFetchSvg)&&(r.prefix=wt.get(n).defaultShortPrefixId,r.iconName=G(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=K()||`fas`),r}var Dr=function(){function e(){O(this,e),this.definitions={}}return A(e,[{key:`add`,value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=N(N({},e.definitions[t]||{}),i[t]),Qn(t,i[t]);var n=dn[R][t];n&&Qn(n,i[t]),dr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Or=[],kr={},Ar={},jr=Object.keys(Ar);function Mr(e,t){var n=t.mixoutsTo;return Or=e,kr={},Object.keys(Ar).forEach(function(e){jr.indexOf(e)===-1&&delete Ar[e]}),Or.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ue(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){kr[e]||(kr[e]=[]),kr[e].push(r[e])})}e.provides&&e.provides(Ar)}),n}function Nr(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(kr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(r))}),t}function Pr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(kr[e]||[]).forEach(function(e){e.apply(null,n)})}function q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ar[e]?Ar[e].apply(null,t):void 0}function Fr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||K();if(t)return t=G(n,t)||t,qn(Ir.definitions,n,t)||qn(W.styles,n,t)}var Ir=new Dr,J={noAuto:function(){B.autoReplaceSvg=!1,B.observeMutations=!1,Pr(`noAuto`)},config:B,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(Pr(`beforeI2svg`,e),q(`pseudoElements2svg`,e),q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,Gn(function(){Lr({autoReplaceSvgRoot:t}),Pr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ue(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=vr(e[0]);return{prefix:n,iconName:G(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${B.cssPrefix}-`)>-1||e.match(pn))){var r=Sr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||K(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=K();return{prefix:i,iconName:G(i,e)||e}}}},library:Ir,findIconDefinition:Fr,toHtml:Kn},Lr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?I:e;(Object.keys(W.styles).length>0||B.autoFetchSvg)&&L&&B.autoReplaceSvg&&J.dom.i2svg({node:t})};function Rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Kn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(L){var t=I.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function zr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Pn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Nn(N(N({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Br(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${B.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:N(N({},i),{},{id:o}),children:r}]}]}function Vr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Hr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[B.replacementClass,a?`${B.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:N(N({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Vr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Jt]=``);var _=N(N({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:N({},l.styles)}),v=r.found&&n.found?q(`generateAbstractMask`,_)||{children:[],attributes:{}}:q(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Br(_):zr(_)}function Ur(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=N(N({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Jt]=``);var l=N({},a.styles);Pn(i)&&(l.transform=In({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Nn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Wr(e){var t=e.content,n=e.extra,r=N(N({},n.attributes),{},{class:n.classes.join(` `)}),i=Nn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Gr=W.styles;function Kr(e){var t=e[0],n=e[1],r=se(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${B.cssPrefix}-${_n.GROUP}`},children:[{tag:`path`,attributes:{class:`${B.cssPrefix}-${_n.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${B.cssPrefix}-${_n.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var qr={found:!1,width:512,height:512};function Jr(e,t){!rn&&!B.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Yr(e,t){var n=t;return t===`fa`&&B.styleDefault!==null&&(t=K()),new Promise(function(r,i){if(n===`fa`){var a=mr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Gr[t]&&Gr[t][e]){var o=Gr[t][e];return r(Kr(o))}Jr(e,t),r(N(N({},qr),{},{icon:B.showMissingIcons&&e&&q(`missingIconAbstract`)||{}}))})}var Xr=function(){},Zr=B.measurePerformance&&be&&be.mark&&be.measure?be:{mark:Xr,measure:Xr},Qr=`FA "7.3.1"`,$r=function(e){return Zr.mark(`${Qr} ${e} begins`),function(){return ei(e)}},ei=function(e){Zr.mark(`${Qr} ${e} ends`),Zr.measure(`${Qr} ${e}`,`${Qr} ${e} begins`,`${Qr} ${e} ends`)},ti={begin:$r,end:ei},ni=function(){};function ri(e){return typeof(e.getAttribute?e.getAttribute(Jt):null)==`string`}function ii(e){var t=e.getAttribute?e.getAttribute(Zt):null,n=e.getAttribute?e.getAttribute(Qt):null;return t&&n}function ai(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function oi(){return B.autoReplaceSvg===!0?di.replace:di[B.autoReplaceSvg]||di.replace}function si(e){return I.createElementNS(`http://www.w3.org/2000/svg`,e)}function ci(e){return I.createElement(e)}function li(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?si:ci:t;if(typeof e==`string`)return I.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(li(e,{ceFn:n}))}),r}function ui(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var di={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(li(e),t)}),t.getAttribute(Jt)===null&&B.keepOriginalSource){var n=I.createComment(ui(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~An(t).indexOf(B.replacementClass))return di.replace(e);var r=RegExp(`${B.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===B.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Kn(e)}).join(`
`);t.setAttribute(Jt,``),t.innerHTML=a}};function fi(e){e()}function pi(e,t){var n=typeof t==`function`?t:ni;if(e.length===0)n();else{var r=fi;B.mutateApproach===en&&(r=F.requestAnimationFrame||fi),r(function(){var t=oi(),r=ti.begin(`mutate`);e.map(t),r(),n()})}}var mi=!1;function hi(){mi=!0}function gi(){mi=!1}var _i=null;function vi(e){if(ye&&B.observeMutations){var t=e.treeCallback,n=t===void 0?ni:t,r=e.nodeCallback,i=r===void 0?ni:r,a=e.pseudoElementsCallback,o=a===void 0?ni:a,s=e.observeMutationsRoot,c=s===void 0?I:s;_i=new ye(function(e){if(!mi){var t=K();kn(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ri(e.addedNodes[0])&&(B.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&B.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ri(e.target)&&~gn.indexOf(e.attributeName)){if(e.attributeName===`class`&&ii(e.target)){var r=Sr(An(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Zt,a||t),s&&e.target.setAttribute(Qt,s)}else ai(e.target)&&i(e.target)}})}}),L&&_i.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yi(){_i&&_i.disconnect()}function bi(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function xi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Sr(An(e));return i.prefix||=K(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=pr(i.prefix,e.innerText)||fr(i.prefix,Xn(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Si(e){return kn(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ci(){return{iconName:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xi(e),r=n.iconName,i=n.prefix,a=n.rest,o=Si(e),s=Nr(`parseNodeAttributes`,{},e);return N({iconName:r,prefix:i,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?bi(e):[],attributes:o}},s)}var Ti=W.styles;function Ei(e){var t=B.autoReplaceSvg===`nest`?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(mn)?q(`generateLayersText`,e,t):q(`generateSvgReplacementMutation`,e,t)}function Di(){return[].concat(P(Et),P(zt))}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var n=I.documentElement.classList,r=function(e){return n.add(`${$t}-${e}`)},i=function(e){return n.remove(`${$t}-${e}`)},a=B.autoFetchSvg?Di():De.concat(Object.keys(Ti));a.includes(`fa`)||a.push(`fa`);var o=[`.${mn}:not([${Jt}])`].concat(a.map(function(e){return`.${e}:not([${Jt}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=kn(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=ti.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Ei(t);n&&e.push(n)}catch(e){rn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){pi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ei(e).then(function(e){e&&pi([e],t)})}function Ai(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Fr(i||{}),e(r,N(N({},n),{},{mask:i}))}}var ji=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?H:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Rr(N({type:`icon`},e),function(){return Pr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Hr({icons:{main:Kr(v),mask:s?Kr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:N(N({},H),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Mi={mixout:function(){return{icon:Ai(ji)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Oi,e.nodeCallback=ki,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?I:t,r=e.callback;return Oi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Yr(n,r),o.iconName?Yr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=se(o,2),u=l[0],d=l[1];t([e,Hr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Nn(a);o.length>0&&(n.style=o);var s;return Pn(i)&&(s=q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ni={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Rr({type:`layer`},function(){Pr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${B.cssPrefix}-layers`].concat(P(r)).join(` `)},children:n}]})}}}},Pi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Rr({type:`counter`,content:e},function(){return Pr(`beforeDOMElementCreation`,{content:e,params:t}),Wr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${B.cssPrefix}-layers-counter`].concat(P(a))}})})}}}},Fi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?H:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Rr({type:`text`,content:e},function(){return Pr(`beforeDOMElementCreation`,{content:e,params:t}),Ur({content:e,transform:N(N({},H),r),extra:{attributes:s,styles:l,classes:[`${B.cssPrefix}-layers-text`].concat(P(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(xe){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Ur({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ii=RegExp(`"`,`ug`),Li=[1105920,1112319],Ri=N(N(N(N({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ct),Wt),At),zi=Object.keys(Ri).reduce(function(e,t){return e[t.toLowerCase()]=Ri[t],e},{}),Bi=Object.keys(zi).reduce(function(e,t){var n=zi[t];return e[t]=n[900]||P(Object.entries(n))[0][1],e},{});function Vi(e){return Xn(P(e.replace(Ii,``))[0]||``)}function Hi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ii,``),r=n.codePointAt(0),i=r>=Li[0]&&r<=Li[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Ui(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(zi[n]||{})[i]||Bi[n]}function Wi(e,t){var n=`${Xt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=kn(e.children).filter(function(e){return e.getAttribute(Yt)===t})[0],o=F.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(hn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Ui(s,l),p=Vi(d),m=c[0].startsWith(`FontAwesome`),h=Hi(o),g=fr(f,p),_=g;if(m){var v=hr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Zt)!==f||a.getAttribute(Qt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ci(),b=y.extra;b.attributes[Yt]=t,Yr(g,f).then(function(i){var a=Hr(N(N({},y),{},{icons:{main:i,mask:gr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=I.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Kn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Gi(e){return Promise.all([Wi(e,`::before`),Wi(e,`::after`)])}function Ki(e){return e.parentNode!==document.head&&!~tn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Yt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var qi=function(e){return!!e&&nn.some(function(t){return e.includes(t)})},Ji=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=j(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(qi(a)){var o=nn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(L){var n;if(t)n=e;else if(B.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=j(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=j(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=j(Ji(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){B.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=kn(n).filter(Ki).map(Gi),i=ti.begin(`searchPseudoElements`);hi(),Promise.all(r).then(function(){i(),gi(),e()}).catch(function(){i(),gi(),t()})})}}var Xi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Yi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?I:t;B.searchPseudoElements&&Yi(n)}}},Zi=!1,Qi={mixout:function(){return{dom:{unwatch:function(){hi(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){vi(Nr(`mutationObserverCallbacks`,{}))},noAuto:function(){yi()},watch:function(e){var t=e.observeMutationsRoot;Zi?gi():vi(Nr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},$i=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},ea={mixout:function(){return{parse:{transform:function(e){return $i(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=$i(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:N({},a.outer),children:[{tag:`g`,attributes:N({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:N(N({},t.icon.attributes),a.path)}]}]}}}},ta={x:0,y:0,width:`100%`,height:`100%`};function na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ra(e){return e.tag===`g`?e.children:[e]}Mr([Vn,Mi,Ni,Pi,Fi,Xi,Qi,ea,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Sr(n.split(` `).map(function(e){return e.trim()})):gr();return r.prefix||=K(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Fn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:N(N({},ta),{},{fill:`white`})},p=c.children?{children:c.children.map(na)}:{},m={tag:`g`,attributes:N({},d.inner),children:[na(N({tag:c.tag,attributes:N(N({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:N({},d.outer),children:[m]},g=`mask-${a||On()}`,_=`clip-${a||On()}`,v={tag:`mask`,attributes:N(N({},ta),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:ra(u)},v]};return t.push(y,{tag:`rect`,attributes:N({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},ta)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;F.matchMedia&&(t=F.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:N(N({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=N(N({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:N(N({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:N(N({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:N(N({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:N(N({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:N(N({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:N(N({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:N(N({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:J}),J.noAuto;var ia=J.config;J.library,J.dom;var aa=J.parse;J.findIconDefinition,J.toHtml;var oa=J.icon;J.layer,J.text,J.counter;function sa(e){return e-=0,e===e}function ca(e){return sa(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var la=(e,t)=>u.default.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function ua(e){return e.charAt(0).toUpperCase()+e.slice(1)}var da=new Map,fa=1e3;function pa(e){if(da.has(e))return da.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ca(n);t[e.startsWith(`webkit`)?ua(e):e]=r}}}n=a+1}if(da.size===fa){let e=da.keys().next().value;e&&da.delete(e)}return da.set(e,t),t}function ma(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),ma(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=pa(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ca(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(la)))}return e(t.tag,{...a,...u},...r)}var ha=ma.bind(null,u.default.createElement),ga=(e,t)=>{let n=(0,u.useId)();return e||(t?n:void 0)},_a=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&process.env.NODE_ENV===`development`}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&process.env?.FA_VERSION;var va=`searchPseudoElementsFullScan`in ia&&typeof ia.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,ya=Number.parseInt(va)>=7,ba=()=>ya,xa=`fa`,Y={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Sa={left:`fa-pull-left`,right:`fa-pull-right`},Ca={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},wa={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},X={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},Ta={default:`fa-layers`};function Ea(e){let t=ia.cssPrefix||ia.familyPrefix||xa;return t===xa?e:e.replace(new RegExp(String.raw`(?<=^|\s)${xa}-`,`g`),`${t}-`)}function Da(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:w,jello:T,spinSnap:ee,spinSnap4:E,spinSnap8:te,swing:D,wag:O,className:k}=e,A=[];return k&&A.push(...k.split(` `)),t&&A.push(Y.beat),n&&A.push(Y.fade),r&&A.push(Y.beatFade),i&&A.push(Y.bounce),a&&A.push(Y.shake),o&&A.push(Y.spin),c&&A.push(Y.spinReverse),s&&A.push(Y.spinPulse),l&&A.push(Y.pulse),u&&A.push(X.fixedWidth),d&&A.push(X.inverse),f&&A.push(X.border),p===!0&&A.push(X.flip),(p===`horizontal`||p===`both`)&&A.push(X.flipHorizontal),(p===`vertical`||p===`both`)&&A.push(X.flipVertical),m!=null&&A.push(wa[m]),h!=null&&h!==0&&A.push(Ca[h]),g!=null&&A.push(Sa[g]),_&&A.push(X.swapOpacity),ba()?(v&&A.push(X.rotateBy),y&&A.push(X.widthAuto),b&&A.push(X.canvasSquare),x&&A.push(X.canvasRoomy),S&&A.push(Y.flip360),C&&A.push(Y.buzz),w&&A.push(Y.float),T&&A.push(Y.jello),ee&&A.push(Y.spinSnap),E&&A.push(Y.spinSnap4),te&&A.push(Y.spinSnap8),D&&A.push(Y.swing),O&&A.push(Y.wag),(ia.cssPrefix||ia.familyPrefix||xa)===xa?A:A.map(Ea)):A}var Oa=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ka(e){if(e)return Oa(e)?e:aa.icon(e)}function Aa(e){return Object.keys(e)}var ja=new _a(`FontAwesomeIcon`),Ma={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Na=new Set(Object.keys(Ma)),Z=u.default.forwardRef((e,t)=>{let n={...Ma,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=ga(c,!!i),d=ga(s,!!o),f=ka(r);if(!f)return ja.error(`Icon lookup is undefined`,r),null;let p=Da(n),m=typeof l==`string`?aa.transform(l):l,h=ka(i),g=oa(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return ja.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Aa(n))Na.has(e)||(v[e]=n[e]);return ha(_[0],v)});Z.displayName=`FontAwesomeIcon`,`${Ta.default}${X.fixedWidth}`;var Pa={changePage:f.default.func.isRequired,totalItems:f.default.number.isRequired,currentPage:f.default.number.isRequired,pageSize:f.default.number.isRequired,hideLast:f.default.bool},Fa=class extends u.default.Component{getPager(){let{totalItems:e,currentPage:t,pageSize:n,changePage:r,hideLast:i}=this.props,a=Math.ceil(e/n),o,s,c=(0,h.jsx)(`li`,{className:`pager__ellipsis`,children:`...`}),l=(0,h.jsx)(`li`,{className:`pager__ellipsis`,children:`...`}),u=(0,h.jsx)(`li`,{className:`pager__item`,children:(0,h.jsx)(`button`,{className:`pager__button`,type:`button`,onClick:()=>r(1),children:1})}),d=(0,h.jsx)(`li`,{className:`pager__item ${i?`hideLast`:``}`,children:(0,h.jsx)(`button`,{className:`pager__button`,type:`button`,onClick:()=>r(a),children:T(a,0)})});a<5?(o=1,s=a,c=``,l=``,u=``,d=``):(o=t-1,s=t+1,t<4?(c=``,u=``,t===1?(o=t,s=t+2):t===3&&(o=1,s=4)):t>a-3&&(l=``,d=``,t===a?(o=t-2,s=t):t===a-2&&(o=t-1,s=a)));let f=(t-1)*n,p=Math.min(f+(n-1),e-1),g=(0,m.range)(o,s+1);return{totalPages:a,startPage:o,endPage:s,startIndex:f,endIndex:p,pages:g,prevEllipses:c,nextEllipses:l,firstButton:u,lastButton:d}}generatePageButtons(e){let{currentPage:t}=this.props;return e.map((e,n)=>(0,h.jsx)(`li`,{className:`pager__item`,children:(0,h.jsx)(`button`,{className:`pager__button ${t===e?`pager__button_active`:``}`,type:`button`,onClick:()=>this.props.changePage(e),children:T(e,0)})},n))}render(){let{currentPage:e,changePage:t}=this.props,n=this.getPager(),r=this.generatePageButtons(n.pages,n.totalPages);return(0,h.jsxs)(`ul`,{className:`pager`,children:[(0,h.jsx)(`li`,{className:`pager__item`,children:(0,h.jsx)(`button`,{className:`pager__button ${e===1?`pager__button_disabled`:``}`,type:`button`,disabled:e===1,onClick:()=>t(e-1),title:`Previous page`,children:(0,h.jsx)(Z,{icon:`angle-left`})})}),n.firstButton,n.prevEllipses,r,n.nextEllipses,n.lastButton,(0,h.jsx)(`li`,{className:`pager__item`,children:(0,h.jsx)(`button`,{className:`pager__button ${e===n.totalPages?`pager__button_disabled`:``}`,type:`button`,disabled:e===n.totalPages,onClick:()=>t(e+1),title:`Next page`,children:(0,h.jsx)(Z,{icon:`angle-right`})})})]})}};Fa.propTypes=Pa;var Ia={changeLimit:f.default.func.isRequired,pageSize:f.default.number,limitList:f.default.arrayOf(f.default.number),label:f.default.string},La=({changeLimit:e,pageSize:t=10,limitList:n=[10,25,50,100],label:r})=>{let i=t=>{t.preventDefault(),e(parseInt(t.target.value,10))},a=r||`Rows per page: `,o=n.map(e=>(0,h.jsx)(`option`,{value:e,children:e},`limit-${e}`));return(0,h.jsxs)(`div`,{className:`usa-dt-pagination__limit-selector__wrapper`,children:[(0,h.jsx)(`label`,{children:a}),(0,h.jsx)(`select`,{onChange:i,value:t,className:`usa-dt-pagination__limit-selector`,"aria-label":`limit-dropdown`,children:o})]})};La.propTypes=Ia;var Ra={changePage:f.default.func.isRequired,totalPages:f.default.number,id:f.default.string},za=({changePage:e,totalPages:t=1,id:n=`usa-dt-pagination-go-to`})=>{let[r,i]=(0,u.useState)(``),a=t>1?`1-${t}`:`1`,o=()=>!(r===``||parseInt(r,10)<1||parseInt(r,10)>t),s=t=>{t.preventDefault(),o()&&e(parseInt(r,10))};return(0,h.jsxs)(`form`,{className:`usa-dt-pagination__go-to`,children:[(0,h.jsx)(`label`,{htmlFor:`${n}-go-to`,children:`Go to page`}),(0,h.jsx)(`input`,{type:`number`,id:`${n}-go-to`,title:`Enter a number between 1 and ${t}`,min:`1`,max:t,placeholder:a,value:r,onChange:e=>{i(e.target.value)},onSubmit:s}),(0,h.jsx)(`button`,{type:`submit`,onClick:s,disabled:!o(),children:`Go`})]})};za.propTypes=Ra;var Ba={changePage:f.default.func.isRequired,totalItems:f.default.number.isRequired,currentPage:f.default.number,pageSize:f.default.number,resultsText:f.default.oneOfType([f.default.bool,f.default.element]),limitSelector:f.default.bool,changeLimit:f.default.func,goToPage:f.default.bool,id:f.default.string,hideLast:f.default.bool},Va=({changePage:e,totalItems:t,currentPage:n=1,pageSize:r=10,resultsText:i=!1,limitSelector:a=!1,changeLimit:o=()=>{},goToPage:s=!1,id:c,hideLast:l=!1})=>{let d=Math.ceil(t/r),f=()=>{if(u.default.isValidElement(i))return i;if(i){let e=ee(n,r,t),i=T(e.start,0),a=T(e.end,0),o=T(t,0);return(0,h.jsx)(`div`,{className:`usa-dt-pagination__totals`,children:`${i}-${a} of ${o} results`})}return null},p=a?(0,h.jsx)(La,{changeLimit:o,pageSize:r}):null,m=s?(0,h.jsx)(za,{changePage:e,totalPages:d,id:c}):null;return!a&&d<=1?null:(0,h.jsxs)(`div`,{className:`usa-dt-pagination`,children:[f(),(0,h.jsxs)(`div`,{className:`usa-dt-pagination__wrapper`,children:[p,(0,h.jsx)(Fa,{changePage:e,totalItems:t,currentPage:n,pageSize:r,hideLast:l}),m]})]})};Va.propTypes=Ba;var Ha=`usa-dt-picker__button-icon--svg`,Ua={sortFn:f.default.func,icon:f.default.node,selectedOption:f.default.oneOfType([f.default.node,f.default.string]),className:f.default.string,id:f.default.string,options:f.default.arrayOf(f.default.shape({name:f.default.oneOfType([f.default.string,f.default.node]),value:f.default.any,onClick:f.default.func,classNames:f.default.string})),dropdownDirection:f.default.oneOf([`left`,`right`]),isFixedWidth:f.default.bool,children:f.default.node,backgroundColor:f.default.string,notEnabled:f.default.bool,buttonClassNames:f.default.string,pickerListClassNames:f.default.string},Wa=(e,t,n)=>e.name===n?-1:t.name===n?1:e.name<t.name?-1:+(e.name>t.name),Ga=({className:e=``,id:t=``,options:n,selectedOption:r,icon:i=null,sortFn:a=Wa,isFixedWidth:o=!1,children:s,dropdownDirection:c=`right`,backgroundColor:l=`#1a4480`,notEnabled:d,buttonClassNames:f=``,pickerListClassNames:p=``})=>{let g=(0,u.useRef)(null),_=(0,u.useRef)(null),[v,y]=(0,u.useState)(!1),[b,x]=(0,u.useState)({top:0,width:0,left:0,right:0}),S=e=>{e.preventDefault(),d||y(!v)},C=(e,t)=>a(e,t,r),w=()=>{_.current&&g.current&&x({top:_.current.offsetHeight,width:_.current.offsetWidth,left:_.current.offsetLeft,right:g.current.offsetWidth-(_.current.offsetWidth+_.current.offsetLeft)})};(0,u.useEffect)(()=>{b.width!==0&&o&&_.current&&_.current.offsetWidth!==b.width&&w()}),(0,u.useEffect)(()=>{let e=e=>{v&&g.current&&!g.current.contains(e.target)&&e.target.id!==`${t}-${Ha}`&&e.target.parentNode.id!==`${t}-${Ha}`&&y(!1)};return w(),document.addEventListener(`click`,e),()=>{document.removeEventListener(`click`,e)}},[v]);let T=e=>t=>{e(t),y(!1)};return(0,h.jsx)(`div`,{id:t,className:`usa-dt-picker ${e}`,ref:g,style:{backgroundColor:l},children:(0,h.jsxs)(`div`,{className:`usa-dt-picker__dropdown-container`,style:{backgroundColor:l},children:[(0,h.jsxs)(`button`,{style:{backgroundColor:l},ref:_,type:`button`,"aria-label":`Dropdown Toggle Button`,className:`usa-dt-picker__button ${f}`,onClick:S,children:[i&&(0,h.jsx)(`div`,{className:`usa-dt-picker__icon`,children:i}),s||(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{className:`usa-dt-picker__button-text`,style:{backgroundColor:l},children:r}),(0,h.jsxs)(`span`,{className:`usa-dt-picker__button-icon`,children:[!v&&(0,h.jsx)(Z,{id:`${t}-${Ha}`,icon:`chevron-down`,alt:`Toggle menu`,color:`#555`}),v&&(0,h.jsx)(Z,{id:`${t}-${Ha}`,icon:`chevron-up`,alt:`Toggle menu`,color:`#555`})]})]})]}),(0,h.jsx)(`ul`,{className:`usa-dt-picker__list ${p} ${v?``:`hide`}`,style:(()=>{let e={top:`${b.top}px`,left:`${b.left}px`};return o&&c===`right`?{...e,width:`${b.width}px`}:o&&c===`left`?{top:e.top,right:`${b.right}`,width:`${b.width}px`}:c===`left`?{top:e.top,right:`${b.right}px`}:e})(),children:n.sort(C).map(e=>({...e,onClick:T(e.onClick)})).map(e=>(0,h.jsx)(`li`,{className:`usa-dt-picker__list-item ${e?.classNames?e.classNames:``}`,children:(0,h.jsx)(`button`,{className:`usa-dt-picker__item ${e.name===r?`active`:``}`,type:`button`,value:`${e.value||e.name}`,onClick:t=>{t.preventDefault(),e.onClick(e.value)},onKeyDown:t=>{e.name===`reddit`&&t.key===`Tab`&&y(!v)},children:e.component?e.component:e.name})},(0,m.uniqueId)()))})]})})};Ga.propTypes=Ua;var Ka={disabled:f.default.bool,active:f.default.bool,showPeriods:f.default.bool,quarter:f.default.string,handleSelection:f.default.func,handleHover:f.default.func,handleBlur:f.default.func,toggleTooltip:f.default.func,title:f.default.string},qa=({disabled:e,active:t,quarter:n,handleSelection:r,toggleTooltip:i,title:a=``,handleHover:o,handleBlur:s,showPeriods:c=!1})=>{let l=a||`Q ${n}`,u=()=>{e?i(n):o(n,c?`period`:`quarter`)},d=()=>{i(0),s(c?`period`:`quarter`)},f=t=>{t.preventDefault(),e||r(n)},p=e?`usa-dt-quarter-picker__quarter_disabled `:``;return n===`1`?p+=`usa-dt-quarter-picker__quarter_first`:n===`4`?p+=`usa-dt-quarter-picker__quarter_last`:a.includes(`-`)&&(p+=`usa-dt-quarter-picker__quarter_double`),!e&&t&&(p+=` usa-dt-quarter-picker__quarter_active`),(0,h.jsx)(`button`,{className:`usa-dt-quarter-picker__quarter ${p}`,onMouseDown:f,onClick:f,onMouseOver:u,onMouseEnter:u,onFocus:u,onMouseLeave:d,onBlur:d,"aria-disabled":e,children:l})};qa.propTypes=Ka;var Ja=(e=[])=>{let[t,n]=(0,u.useState)(e);return[t,e=>{let r=parseInt(e,10),i=t.map(e=>parseInt(e,10)).filter(e=>e<=r).map(e=>`${e}`);n(i.concat([e]))}]},Ya=[[{title:`1 - 2`,id:`2`,className:`double-period`},{title:`3`,id:`3`}],[{title:`4`,id:`4`},{title:`5`,id:`5`},{title:`6`,id:`6`}],[{title:`7`,id:`7`},{title:`8`,id:`8`},{title:`9`,id:`9`}],[{title:`10`,id:`10`},{title:`11`,id:`11`},{title:`12`,id:`12`}]],Xa=(e,t)=>t.some(t=>parseInt(t,10)>=parseInt(e,10)),Za={handleSelection:f.default.func,selectedQuarters:f.default.arrayOf(f.default.string),disabledQuarters:f.default.arrayOf(f.default.string),selectedPeriods:f.default.arrayOf(f.default.string),disabledPeriods:f.default.arrayOf(f.default.string),periodsPerQuarter:f.default.arrayOf(f.default.arrayOf(f.default.shape({title:f.default.string,id:f.default.string}))),showPeriods:f.default.bool,isCumulative:f.default.bool},Qa=({handleSelection:e,disabledQuarters:t=[],disabledPeriods:n=[],periodsPerQuarter:r=Ya,selectedQuarters:i=[],selectedPeriods:a=[],showPeriods:o=!1,isCumulative:s=!1})=>{let[c,l]=(0,u.useState)(``),[d,f]=(0,u.useState)(``),p=(e,t=`quarter`)=>{t===`quarter`?f(e):l(e)},g=(e=`quarter`)=>{e===`quarter`?f(``):l(``)};return(0,h.jsx)(`div`,{className:`usa-dt-quarter-picker`,children:(0,h.jsx)(`ul`,{className:`usa-dt-quarter-picker__list`,children:[,,,,].fill(0).map((l,u)=>{let f=u+1,_=`${f}`;if(o){let t=r[u],i=t.every(e=>n.includes(e.id));return(0,h.jsxs)(`li`,{className:`usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container`,children:[(0,h.jsx)(`p`,{className:i?`disabled`:``,children:`Q${f}`}),(0,h.jsx)(`ul`,{className:`usa-dt-quarter-picker__period-list`,children:t.map(t=>(0,h.jsx)(`li`,{className:Object.keys(t).includes(`className`)?`${t.className} usa-dt-quarter-picker__list-item`:`usa-dt-quarter-picker__list-item`,children:(0,h.jsx)(qa,{showPeriods:o,quarter:t.id,title:t.title,disabled:n.includes(t.id),active:Xa(t.id,a)||parseInt(c,10)>=parseInt(t.id,10),handleHover:p,handleBlur:g,handleSelection:e,toggleTooltip:()=>{}})},(0,m.uniqueId)()))})]},(0,m.uniqueId)())}return(0,h.jsx)(`li`,{className:`usa-dt-quarter-picker__list-item`,children:(0,h.jsx)(qa,{quarter:_,disabled:t.includes(_),active:s?Xa(_,i)||parseInt(d,10)>=f:i.includes(_)||d===_,handleSelection:e,handleHover:p,handleBlur:g,toggleTooltip:()=>{}})},(0,m.uniqueId)())})})})};Qa.propTypes=Za;var $a=(e,t,n)=>!(e&&t===e||t&&e.length<n),eo=(e,t)=>!(!t||e.target.value),to={onSearch:f.default.func,minChars:f.default.number,isDisabled:f.default.bool,throttleOnChange:f.default.number,inputTitle:f.default.string,placeholder:f.default.string},no=({onSearch:e,minChars:t=2,isDisabled:n=!1,throttleOnChange:r=500,inputTitle:i=`Search Input`,placeholder:a=``})=>{let[o,s]=(0,u.useState)(``),[c,l]=(0,u.useState)(``),d=()=>{s(``),e(``),l(``)},f=(0,m.throttle)(e=>eo(e,c)?d():s(e.target.value),r),p=()=>{let t=o.trim();e(t),s(t),l(t)},g=e=>(e.preventDefault(),$a(o,c,t)?p():d()),_=`search`;return(o&&c===o||c&&o.length<t)&&(_=`times`),(0,h.jsxs)(`form`,{className:`usa-dt-search-bar`,children:[(0,h.jsx)(`input`,{className:`usa-dt-search-bar__input`,"aria-label":`Search Input`,title:i,value:o,type:`text`,disabled:n,onChange:f,placeholder:a}),(0,h.jsx)(`button`,{disabled:o.length<t&&!c||n,"aria-label":`Search Button`,title:_===`search`?`Submit Search Button`:`Remove Input Value Button`,onClick:g,className:`usa-dt-search-bar__button`,children:(0,h.jsx)(Z,{icon:_})})]})};no.propTypes=to;var ro={title:f.default.string.isRequired,description:f.default.string,icon:f.default.object,className:f.default.string},io=({icon:e,title:t,description:n,className:r})=>(0,h.jsxs)(`div`,{className:`usda-message${r&&` usda-message_${r}`}`,children:[e&&(0,h.jsx)(`div`,{className:`usda-message__icon`,children:e}),(0,h.jsx)(`div`,{className:`usda-message__title`,children:t}),n&&(0,h.jsx)(`div`,{className:`usda-message__description`,children:n})]});io.propTypes=ro;var ao={description:f.default.string},oo=({description:e=`Something went wrong while gathering your data.`})=>(0,h.jsx)(io,{description:e,title:`An error occurred`,icon:(0,h.jsx)(Z,{icon:`exclamation-triangle`}),className:`error`});oo.propTypes=ao;function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}function co(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function lo(e,t){return lo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},lo(e,t)}function uo(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,lo(e,t)}function fo(e,t){return e.classList?!!t&&e.classList.contains(t):(` `+(e.className.baseVal||e.className)+` `).indexOf(` `+t+` `)!==-1}function po(e,t){e.classList?e.classList.add(t):fo(e,t)||(typeof e.className==`string`?e.className=e.className+` `+t:e.setAttribute(`class`,(e.className&&e.className.baseVal||``)+` `+t))}function mo(e,t){return e.replace(RegExp(`(^|\\s)`+t+`(?:\\s|$)`,`g`),`$1`).replace(/\s+/g,` `).replace(/^\s*|\s*$/g,``)}function ho(e,t){e.classList?e.classList.remove(t):typeof e.className==`string`?e.className=mo(e.className,t):e.setAttribute(`class`,mo(e.className&&e.className.baseVal||``,t))}var go={disabled:!1},_o=process.env.NODE_ENV===`production`?null:d.default.oneOfType([d.default.number,d.default.shape({enter:d.default.number,exit:d.default.number,appear:d.default.number}).isRequired]),vo=process.env.NODE_ENV===`production`?null:d.default.oneOfType([d.default.string,d.default.shape({enter:d.default.string,exit:d.default.string,active:d.default.string}),d.default.shape({enter:d.default.string,enterDone:d.default.string,enterActive:d.default.string,exit:d.default.string,exitDone:d.default.string,exitActive:d.default.string})]),yo=l.default.createContext(null),bo=function(e){return e.scrollTop},xo=`unmounted`,So=`exited`,Co=`entering`,wo=`entered`,To=`exiting`,Q=function(e){uo(t,e);function t(t,n){var r=e.call(this,t,n)||this,i=n,a=i&&!i.isMounting?t.enter:t.appear,o;return r.appearStatus=null,t.in?a?(o=So,r.appearStatus=Co):o=wo:o=t.unmountOnExit||t.mountOnEnter?xo:So,r.state={status:o},r.nextCallback=null,r}t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===`unmounted`?{status:So}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==`entering`&&n!==`entered`&&(t=Co):(n===`entering`||n===`entered`)&&(t=To)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e=this.props.timeout,t=n=r=e,n,r;return e!=null&&typeof e!=`number`&&(t=e.exit,n=e.enter,r=e.appear===void 0?n:e.appear),{exit:t,enter:n,appear:r}},n.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null){if(this.cancelNextCallback(),t===`entering`){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:g.default.findDOMNode(this);n&&bo(n)}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===`exited`&&this.setState({status:xo})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[g.default.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||go.disabled?this.safeSetState({status:wo},function(){t.props.onEntered(a)}):(this.props.onEnter(a,o),this.safeSetState({status:Co},function(){t.props.onEntering(a,o),t.onTransitionEnd(c,function(){t.safeSetState({status:wo},function(){t.props.onEntered(a,o)})})}))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:g.default.findDOMNode(this);!t||go.disabled?this.safeSetState({status:So},function(){e.props.onExited(r)}):(this.props.onExit(r),this.safeSetState({status:To},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:So},function(){e.props.onExited(r)})})}))},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:g.default.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r)setTimeout(this.nextCallback,0);else{if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}e!=null&&setTimeout(this.nextCallback,e)}},n.render=function(){var e=this.state.status;if(e===`unmounted`)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=co(t,[`children`,`in`,`mountOnEnter`,`unmountOnExit`,`appear`,`enter`,`exit`,`timeout`,`addEndListener`,`onEnter`,`onEntering`,`onEntered`,`onExit`,`onExiting`,`onExited`,`nodeRef`]);return l.default.createElement(yo.Provider,{value:null},typeof n==`function`?n(e,r):l.default.cloneElement(l.default.Children.only(n),r))},t}(l.default.Component);Q.contextType=yo,Q.propTypes=process.env.NODE_ENV===`production`?{}:{nodeRef:d.default.shape({current:typeof Element>`u`?d.default.any:function(e,t,n,r,i,a){var o=e[t];return d.default.instanceOf(o&&`ownerDocument`in o?o.ownerDocument.defaultView.Element:Element)(e,t,n,r,i,a)}}),children:d.default.oneOfType([d.default.func.isRequired,d.default.element.isRequired]).isRequired,in:d.default.bool,mountOnEnter:d.default.bool,unmountOnExit:d.default.bool,appear:d.default.bool,enter:d.default.bool,exit:d.default.bool,timeout:function(e){var t=_o;e.addEndListener||(t=t.isRequired);for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.apply(void 0,[e].concat(r))},addEndListener:d.default.func,onEnter:d.default.func,onEntering:d.default.func,onEntered:d.default.func,onExit:d.default.func,onExiting:d.default.func,onExited:d.default.func};function Eo(){}Q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Eo,onEntering:Eo,onEntered:Eo,onExit:Eo,onExiting:Eo,onExited:Eo},Q.UNMOUNTED=xo,Q.EXITED=So,Q.ENTERING=Co,Q.ENTERED=wo,Q.EXITING=To;var Do=function(e,t){return e&&t&&t.split(` `).forEach(function(t){return po(e,t)})},Oo=function(e,t){return e&&t&&t.split(` `).forEach(function(t){return ho(e,t)})},ko=function(e){uo(t,e);function t(){for(var t,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1];t.removeClasses(i,`exit`),t.addClass(i,a?`appear`:`enter`,`base`),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1]?`appear`:`enter`;t.addClass(i,a,`active`),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1]?`appear`:`enter`;t.removeClasses(i,a),t.addClass(i,a,`done`),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,`appear`),t.removeClasses(n,`enter`),t.addClass(n,`exit`,`base`),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,`exit`,`active`),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,`exit`),t.addClass(n,`exit`,`done`),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r=typeof n==`string`,i=r&&n?n+`-`:``,a=r?``+i+e:n[e];return{baseClassName:a,activeClassName:r?a+`-active`:n[e+`Active`],doneClassName:r?a+`-done`:n[e+`Done`]}},t}var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+`ClassName`],i=this.getClassNames(`enter`).doneClassName;t===`appear`&&n===`done`&&i&&(r+=` `+i),n===`active`&&e&&bo(e),r&&(this.appliedClasses[t][n]=r,Do(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,a=n.done;this.appliedClasses[t]={},r&&Oo(e,r),i&&Oo(e,i),a&&Oo(e,a)},n.render=function(){var e=this.props;e.classNames;var t=co(e,[`classNames`]);return l.default.createElement(Q,so({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.default.Component);ko.defaultProps={classNames:``},ko.propTypes=process.env.NODE_ENV===`production`?{}:so({},Q.propTypes,{classNames:vo,onEnter:d.default.func,onEntering:d.default.func,onEntered:d.default.func,onExit:d.default.func,onExiting:d.default.func,onExited:d.default.func});function Ao(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function jo(e,t){var n=function(e){return t&&(0,l.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&l.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function Mo(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function No(e,t,n){return n[t]==null?e.props[t]:n[t]}function Po(e,t){return jo(e.children,function(n){return(0,l.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:No(n,`appear`,e),enter:No(n,`enter`,e),exit:No(n,`exit`,e)})})}function Fo(e,t,n){var r=jo(e.children),i=Mo(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,l.isValidElement)(o)){var s=a in t,c=a in r,u=t[a],d=(0,l.isValidElement)(u)&&!u.props.in;c&&(!s||d)?i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:No(o,`exit`,e),enter:No(o,`enter`,e)}):!c&&s&&!d?i[a]=(0,l.cloneElement)(o,{in:!1}):c&&s&&(0,l.isValidElement)(u)&&(i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:u.props.in,exit:No(o,`exit`,e),enter:No(o,`enter`,e)}))}}),i}var Io=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Lo={component:`div`,childFactory:function(e){return e}},Ro=function(e){uo(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(Ao(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?Po(e,r):Fo(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=jo(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=so({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=co(e,[`component`,`childFactory`]),i=this.state.contextValue,a=Io(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?l.default.createElement(yo.Provider,{value:i},a):l.default.createElement(yo.Provider,{value:i},l.default.createElement(t,r,a))},t}(l.default.Component);Ro.propTypes=process.env.NODE_ENV===`production`?{}:{component:d.default.any,children:d.default.node,appear:d.default.bool,enter:d.default.bool,exit:d.default.bool,childFactory:d.default.func},Ro.defaultProps=Lo;var zo=({loadingText:e=`Gathering your data...`})=>(0,h.jsx)(Ro,{className:`usda-message usda-message_loading`,children:(0,h.jsx)(ko,{classNames:`usda-loading-animation__container`,timeout:{exit:225,enter:195},exit:!0,children:(0,h.jsxs)(`div`,{className:`usda-loading-animation__container`,children:[(0,h.jsx)(`div`,{className:`usda-loading-animation`,children:(0,h.jsxs)(`svg`,{className:`usda-loading-bars`,xmlns:`http://www.w3.org/2000/svg`,version:`1.1`,width:`50`,height:`50`,style:{opacity:0},children:[(0,h.jsx)(`rect`,{className:`bar-one`,x:`0`,y:`0`,height:`50`,width:`10`}),(0,h.jsx)(`rect`,{className:`bar-two`,x:`13`,y:`0`,height:`50`,width:`10`}),(0,h.jsx)(`rect`,{className:`bar-three`,x:`26`,y:`0`,height:`50`,width:`10`}),(0,h.jsx)(`rect`,{className:`bar-four`,x:`39`,y:`0`,height:`50`,width:`10`})]})}),(0,h.jsx)(`div`,{className:`loading-message`,children:e})]})})});zo.propTypes={loadingText:f.default.string};var Bo=()=>(0,h.jsx)(io,{title:`No Results`,description:`No available data to display.`,className:`no-results`}),Vo={data:f.default.object,columns:f.default.array,oddClass:f.default.string,divider:f.default.string},Ho=({data:e,columns:t,oddClass:n,divider:r})=>{let[i,a]=(0,u.useState)(e.expanded||!1),o=i?`chevron-down`:`chevron-right`,s=t.map(({title:e})=>e),c=()=>{a(!i)},l=(0,h.jsx)(`tr`,{className:`usda-table__child-row usda-table__child-row_divider${n}`,children:t.map((e,t)=>t===0?(0,h.jsx)(`td`,{className:`usda-table__cell usda-table__cell_child`,children:(0,h.jsx)(`div`,{className:`usda-table__child-cell-content`,children:r})},(0,m.uniqueId)()):(0,h.jsx)(`td`,{className:`usda-table__cell usda-table__cell_child`,children:(0,h.jsx)(`div`,{className:`usda-table__child-cell-content`,children:`\xA0`})},(0,m.uniqueId)()))}),d=(e,t)=>e?t&&r&&e.title===`name`?r:e.displayName:null;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`tr`,{className:`usda-table__row${n} usda-table__row_expandable ${i?`usda-table__row_is-expanded`:``}`,children:s.map((n,r)=>n===`name`&&e.children?(0,h.jsx)(`td`,{className:`usda-table__cell`,"data-label":d(t[r]),children:(0,h.jsxs)(`div`,{className:`usda-table__expandable-cell-content`,children:[(0,h.jsx)(`button`,{className:`usda-table__expand-button`,"aria-label":`Expand Table Row Button`,onClick:c,children:(0,h.jsx)(Z,{icon:o})}),e.name]})},(0,m.uniqueId)()):(0,h.jsx)(`td`,{className:`usda-table__cell${n===`name`?` usda-table__cell_name`:``}${t[r].right?` usda-table__cell_right`:``}`,"data-label":d(t[r]),children:e[n]},(0,m.uniqueId)()))}),e.children&&i?(0,h.jsxs)(h.Fragment,{children:[r&&l,e.children.map((r,i)=>{let a=i===e.children.length-1?` usda-table__child-row_last`:``;return(0,h.jsx)(`tr`,{className:`usda-table__child-row${a}${n}`,children:s.map((e,n)=>(0,h.jsx)(`td`,{className:`usda-table__cell ${t[n].right?` usda-table__cell_right`:``} usda-table__cell_child`,"data-label":d(t[n],!0),children:(0,h.jsx)(`div`,{className:`usda-table__child-cell-content`,children:r[e]})},(0,m.uniqueId)()))},(0,m.uniqueId)())})]}):null]})};Ho.propTypes=Vo;var Uo=({clickedSort:e,displayName:t,currentSort:n,title:r})=>{let i=n?.field===r&&n?.direction===`asc`?` table-header__icon_active`:``,a=n?.field===r&&n?.direction===`desc`?` table-header__icon_active`:``;return(0,h.jsxs)(`div`,{className:`table-header__sort`,children:[(0,h.jsx)(`button`,{type:`button`,onClick:e,className:`table-header__icon${i}`,value:`asc`,title:`Sort table by ascending ${t}`,"aria-label":`Sort table by ascending ${t}`,children:(0,h.jsx)(Z,{size:`2x`,icon:`caret-up`})}),(0,h.jsx)(`button`,{type:`button`,onClick:e,className:`table-header__icon${a}`,value:`desc`,title:`Sort table by descending ${t}`,"aria-label":`Sort table by descending ${t}`,children:(0,h.jsx)(Z,{size:`2x`,icon:`caret-down`})})]})};Uo.propTypes={title:f.default.string.isRequired,displayName:f.default.oneOfType([f.default.string,f.default.element]).isRequired,currentSort:(0,f.shape)({direction:(0,f.oneOf)([`asc`,`desc`]),field:f.default.string}).isRequired,clickedSort:f.default.func.isRequired};var Wo={title:f.default.string.isRequired,displayName:f.default.oneOfType([f.default.string,f.default.element]).isRequired,currentSort:(0,f.shape)({direction:(0,f.oneOf)([`asc`,`desc`]),field:f.default.string}),updateSort:f.default.func,right:f.default.bool,columnSpan:f.default.string,rowSpan:f.default.string,subColumnNames:f.default.arrayOf(f.default.oneOfType([f.default.string,f.default.object])),className:f.default.string,icon:f.default.element,bodyHeader:f.default.bool,stickyFirstColumn:f.default.bool,columnWidth:f.default.number,highlightedColumns:f.default.object,index:f.default.number,isMobile:f.default.bool,isStacked:f.default.bool},$=({title:e,className:t=``,displayName:n=``,currentSort:r,updateSort:i,right:a,columnSpan:o=`1`,rowSpan:s,subColumnNames:c=[],icon:l=(0,h.jsx)(h.Fragment,{}),bodyHeader:u=!1,stickyFirstColumn:d=!1,columnWidth:f,highlightedColumns:p,index:m,isMobile:g=!1,isStacked:_=!1})=>{let v=(t,n=e)=>{i(n,t.target.value)},y=()=>s===`0`?null:c.length?`1`:`2`;return _&&g?(0,h.jsx)(`div`,{className:`${t} table-header${u?` table-header_body-header`:``} 
            ${d&&m===0?` stickyColumn`:``} ${p?`table-header__subaward-color-${p.highlightedColumns}`:``}`,style:{minWidth:f,display:`table-column`},colSpan:f?``:o,rowSpan:y(),children:(0,h.jsx)(`div`,{className:`table-header__content${a?` table-header__content_right`:``}`,children:(0,h.jsxs)(`div`,{className:`table-header__label`,children:[n,l&&l,i&&!c.length&&n&&(0,h.jsx)(Uo,{clickedSort:v,currentSort:r,title:e,displayName:n})]})})}):(0,h.jsx)(`th`,{className:`${t} table-header${u?` table-header_body-header`:``} 
            ${d&&m===0?` stickyColumn`:``} ${p?`table-header__subaward-color-${p.highlightedColumns}`:``}`,style:{minWidth:f},colSpan:f?``:o,rowSpan:y(),scope:`col`,children:(0,h.jsx)(`div`,{className:`table-header__content${a?` table-header__content_right`:``}`,children:(0,h.jsxs)(`div`,{className:`table-header__label`,children:[n,l&&l,i&&!c.length&&n&&(0,h.jsx)(Uo,{clickedSort:v,currentSort:r,title:e,displayName:n})]})})})};$.propTypes=Wo;var Go={prefix:`fas`,iconName:`file-arrow-down`,icon:[384,512,[`file-download`],`f56d`,`M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z`]},Ko={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},qo={prefix:`fas`,iconName:`link`,icon:[576,512,[128279,`chain`],`f0c1`,`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`]},Jo={prefix:`fas`,iconName:`spinner`,icon:[512,512,[],`f110`,`M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z`]},Yo={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},Xo={prefix:`fas`,iconName:`angles-right`,icon:[448,512,[187,`angle-double-right`],`f101`,`M439.1 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L371.2 256 233.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L179.2 256 41.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z`]},Zo={row:f.default.array,columns:f.default.array,iValue:f.default.number,atMaxLevel:f.default.bool},Qo=e=>{let[t,n]=(0,u.useState)(!1),r=e=>{e.stopPropagation(),n(!t)},i=e.atMaxLevel?null:(0,h.jsxs)(`div`,{className:`usda-table__cell usda-table__cell_right button-type__text-left-icon-light`,children:[`View next level`,` `,(0,h.jsx)(Z,{icon:Xo})]});return(e.columns.length>=6?(0,h.jsxs)(`div`,{className:`collapsible-row-div ${t?`row-opened`:``}`,children:[t&&(0,h.jsx)(`div`,{className:`collapsible-row--content`,children:(0,h.jsx)(`div`,{className:`collapsible-row--content-wrapper`,children:e.row.map((t,n)=>{if(n>=6)return e.columns[n]?.bodyHeader?(0,h.jsx)($,{className:`table-header_body-header`,stickyFirstColumn:e.stickyFirstColumn,index:n,...t},(0,m.uniqueId)()):(0,h.jsxs)(`div`,{className:`usda-table__cell${e.columns[n]?.right?` usda-table__cell_right`:``}
                                                ${n===0&&e.stickyFirstColumn?` stickyColumn`:``} `,children:[e.columns[n]&&(0,h.jsx)(`div`,{className:`usda-table__cell-heading-container`,children:(0,h.jsx)(`div`,{className:`usda-table__cell-heading`,children:e.columns[n].displayName})}),(0,h.jsx)(`div`,{className:`usda-table__cell-text`,children:t})]},(0,m.uniqueId)())})})}),(0,h.jsx)(`div`,{className:`mobile-gradient__wrapper`,children:(0,h.jsxs)(`span`,{className:`collapsible-row-button`,role:`button`,tabIndex:0,onClick:e=>{r(e)},onKeyUp:e=>{e.key===`Enter`&&r(e)},children:[t?`Collapse additional details`:`View additional details`,t?(0,h.jsx)(Z,{className:`chevron`,icon:`chevron-up`}):(0,h.jsx)(Z,{className:`chevron`,icon:`chevron-down`})]})})]}):null)||i};Qo.propTypes=Zo;var $o={columns:f.default.arrayOf(f.default.object).isRequired,rows:f.default.arrayOf((0,f.oneOfType)([f.default.array,f.default.object])).isRequired,rowHeight:f.default.number,expandable:f.default.bool,divider:f.default.string,onClickHandler:f.default.func,isMobile:f.default.bool,atMaxLevel:f.default.bool,stickyFirstColumn:f.default.bool,highlightedColumns:f.default.object,isStacked:f.default.bool,newMobileView:f.default.bool},es=({columns:e,rows:t,rowHeight:n,expandable:r,divider:i,onClickHandler:a,isMobile:o,atMaxLevel:s,stickyFirstColumn:c=!1,highlightedColumns:l,isStacked:d,newMobileView:f=!1})=>{let[p,g]=(0,u.useState)(),_=()=>{let e=document.querySelector(`.selected-row`);e&&e.focus()},v=(e,t)=>{s||(o&&g(t),a&&a(e))};return(0,u.useEffect)(()=>{_()},[p]),d&&o&&f&&!r?(0,h.jsx)(`div`,{className:`mobile-table-rows`,children:t.map((t,r)=>(0,h.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>v(t,r),onKeyUp:e=>{e.key===`Enter`&&(e.preventDefault(),v(t,r))},className:`usda-table__row-item usda-table__row ${p===r?`selected-row`:``} ${l?`special-hover-color-${l.highlightedColumns}`:``}`,style:{height:n,display:`table-row`},children:[t.map((t,n)=>{if(n<6)return e[n]?.bodyHeader?(0,h.jsx)($,{className:`table-header_body-header`,stickyFirstColumn:c,index:n,...t},(0,m.uniqueId)()):(0,h.jsxs)(`div`,{className:`usda-table__cell${e[n]?.right?` usda-table__cell_right`:``}
                                 ${n===0&&c?` stickyColumn`:``}  ${n===0&&c?` stickyColumn`:``}
                                 ${n===0?`usda-mobile__header`:``}`,children:[e[n]&&(0,h.jsx)(`div`,{className:`usda-table__cell-heading-container`,children:o&&(0,h.jsx)(`div`,{className:`usda-table__cell-heading`,children:e[n].displayName})}),(0,h.jsx)(`div`,{className:`usda-table__cell-text`,children:t.type===`a`&&n===0&&d&&o?(0,h.jsxs)(`a`,{target:t.props.target,rel:t.props.rel,href:t.props.href,onClick:t.props.onClick,children:[t.props.children,` `,(0,h.jsx)(Z,{icon:`arrow-right`})]}):t})]},(0,m.uniqueId)())}),(0,h.jsx)(`div`,{children:(0,h.jsx)(Qo,{row:t,columns:e,iValue:r,atMaxLevel:s})})]},(0,m.uniqueId)()))}):(0,h.jsx)(h.Fragment,{children:t.map((t,a)=>{let s=a%2==0?``:` usda-table__row_odd`;return r?(0,h.jsx)(Ho,{data:t,oddClass:s,columns:e,divider:i},(0,m.uniqueId)()):(0,h.jsx)(`tr`,{tabIndex:0,onClick:()=>v(t,a),onKeyUp:e=>{e.key===`Enter`&&(e.preventDefault(),v(t,a))},className:`usda-table__row-item usda-table__row${s} ${p===a?`selected-row`:``} ${l?`special-hover-color-${l.highlightedColumns}`:``}`,style:{height:n},children:t.map((t,n)=>e[n]?.bodyHeader?(0,h.jsx)($,{className:`table-header_body-header`,stickyFirstColumn:c,index:n,...t},(0,m.uniqueId)()):(0,h.jsxs)(`td`,{className:`usda-table__cell${e[n]?.right?` usda-table__cell_right`:``}
                                ${n===0&&c?` stickyColumn`:``} `,children:[e[n]&&(0,h.jsx)(`div`,{className:`usda-table__cell-heading-container`,children:o&&(0,h.jsx)(`div`,{className:`usda-table__cell-heading`,children:e[n].displayName})}),(0,h.jsx)(`div`,{children:t.type===`a`&&n===0&&d&&o?(0,h.jsxs)(`a`,{target:t.props.target,rel:t.props.rel,href:t.props.href,onClick:t.props.onClick,children:[t.props.children,` `,(0,h.jsx)(Z,{icon:`arrow-right`})]}):t})]},(0,m.uniqueId)()))},(0,m.uniqueId)())})})};es.propTypes=$o;var ts={columns:f.default.arrayOf(f.default.object).isRequired,rows:f.default.arrayOf((0,f.oneOfType)([f.default.array,f.default.object])),rowHeight:f.default.number,headerRowHeight:f.default.number,currentSort:(0,f.shape)({direction:(0,f.oneOf)([`asc`,`desc`]),field:f.default.string}),classNames:f.default.string,updateSort:f.default.func,expandable:f.default.bool,divider:f.default.string,loading:f.default.bool,error:f.default.bool,message:f.default.oneOfType([f.default.string,f.default.object]),isStacked:f.default.bool,screenReaderCaption:f.default.string,onClickHandler:f.default.func,isMobile:f.default.bool,stickyFirstColumn:f.default.bool,highlightedColumns:f.default.object,atMaxLevel:f.default.bool,newMobileView:f.default.bool},ns=({columns:e,rows:t,rowHeight:n,headerRowHeight:r,currentSort:i,classNames:a=``,updateSort:o,expandable:s,divider:c,loading:l,error:u,message:d,isStacked:f=!1,screenReaderCaption:p,onClickHandler:g,isMobile:_,stickyFirstColumn:v=!1,highlightedColumns:y,atMaxLevel:b=!1,newMobileView:x=!1})=>{let S=f?`usa-dt-table__stacked`:``,C=e.map(e=>({name:e.displayName+` (ascending)`,value:e.title,onClick:()=>{o(e.title,`asc`)}})),w=e.map(e=>({name:e.displayName+` (descending)`,value:e.title,onClick:()=>{o(e.title,`desc`)}})),T;return T=l?(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{className:`usda-table__message-cell`,colSpan:e.length,children:(0,h.jsx)(zo,{})})}):u?(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{className:`usda-table__message-cell`,colSpan:e.length,children:(0,h.jsx)(oo,{description:d})})}):!t||t.length===0?(0,h.jsx)(`tr`,{children:(0,h.jsx)(`td`,{className:`usda-table__message-cell`,colSpan:e.length,children:(0,h.jsx)(Bo,{description:d})})}):(0,h.jsx)(es,{columns:e,rows:t,rowHeight:n,expandable:s,divider:c,onClickHandler:g,isMobile:_,stickyFirstColumn:v,highlightedColumns:y,isStacked:f,atMaxLevel:b,newMobileView:x}),(0,h.jsxs)(h.Fragment,{children:[f&&o&&(0,h.jsxs)(`div`,{className:`usa-dt-table__stacked-picker`,children:[(0,h.jsx)(`label`,{htmlFor:`stackedTableSort`,children:`Sort By`}),(0,h.jsx)(Ga,{id:`stackedTableSort`,selectedOption:i.field,options:(0,m.union)(C,w)})]}),f&&_?(0,h.jsxs)(`div`,{className:`usda-table ${S} ${a}`,children:[p&&(0,h.jsx)(`caption`,{className:`usa-dt-sr-only`,children:p}),y&&(0,h.jsxs)(`colgroup`,{children:[(0,h.jsx)(`col`,{span:y.standardColumns}),(0,h.jsx)(`col`,{span:y.highlightedColumns,className:`usda-table__body-special-color`})]}),(0,h.jsxs)(`div`,{className:`usda-table__head`,children:[(0,h.jsx)(`div`,{className:`usda-table__row`,style:{height:r},children:e.map((e,t)=>(0,h.jsx)($,{currentSort:i,updateSort:o,stickyFirstColumn:v,highlightedColumns:y,index:t,isMobile:_,isStacked:f,...e},(0,m.uniqueId)()))}),(0,h.jsx)(`div`,{className:`usda-table__row`,children:e.filter(e=>e?.subColumnNames?.length).reduce((e,t)=>t?.subColumnNames?.length?e.concat(t.subColumnNames):e.concat([{...t,displayName:``,className:`empty-subheader`}]),[]).map((e,t)=>(0,h.jsx)($,{className:e?.title?`nested-header`:`empty`,currentSort:i,updateSort:o,stickyFirstColumn:v,index:t,isMobile:_,isStacked:f,...e},(0,m.uniqueId)()))})]}),(0,h.jsx)(`div`,{className:`usda-table__body`,children:T})]}):(0,h.jsxs)(`table`,{className:`usda-table ${S} ${a}`,children:[p&&(0,h.jsx)(`caption`,{className:`usa-dt-sr-only`,children:p}),y&&(0,h.jsxs)(`colgroup`,{children:[(0,h.jsx)(`col`,{span:y.standardColumns}),(0,h.jsx)(`col`,{span:y.highlightedColumns,className:`usda-table__body-special-color`})]}),(0,h.jsxs)(`thead`,{className:`usda-table__head`,children:[(0,h.jsx)(`tr`,{className:`usda-table__row`,style:{height:r},children:e.map((e,t)=>(0,h.jsx)($,{currentSort:i,updateSort:o,stickyFirstColumn:v,highlightedColumns:y,index:t,...e},(0,m.uniqueId)()))}),(0,h.jsx)(`tr`,{className:`usda-table__row`,children:e.filter(e=>e?.subColumnNames?.length).reduce((e,t)=>t?.subColumnNames?.length?e.concat(t.subColumnNames):e.concat([{...t,displayName:``,className:`empty-subheader`}]),[]).map((e,t)=>(0,h.jsx)($,{className:e?.title?`nested-header`:`empty`,currentSort:i,updateSort:o,stickyFirstColumn:v,index:t,...e},(0,m.uniqueId)()))})]}),(0,h.jsx)(`tbody`,{className:`usda-table__body`,children:T})]})]})};ns.propTypes=ts;var rs=c(o(((e,t)=>{(function(){"use strict";var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()}))(),1),is={className:f.default.string,children:f.default.element,tooltipComponent:f.default.element,tooltipPosition:f.default.string,wide:f.default.bool,icon:f.default.string,width:f.default.number,controlledProps:f.default.shape({isControlled:f.default.bool,showTooltip:f.default.func,closeTooltip:f.default.func,isVisible:f.default.bool}),offsetAdjustments:f.default.shape({top:f.default.number,right:f.default.number,left:f.default.number}),styles:f.default.object,onMouseMoveTooltip:f.default.func,onMouseLeaveTooltip:f.default.func},as=375,os=({className:e=null,children:t=null,tooltipComponent:n=null,tooltipPosition:r=`right`,wide:i=!1,icon:a=``,width:o=as,controlledProps:s={isControlled:!1,showTooltip:()=>{},closeTooltip:()=>{},isVisible:!1},offsetAdjustments:c={top:-15,right:0,left:0},styles:l={},onMouseMoveTooltip:d,onMouseLeaveTooltip:f})=>{let[p,g]=(0,u.useState)(!1),[_,v]=(0,u.useState)(!1),y=(0,u.useRef)(),b=(0,u.useRef)(``),x=(0,u.useRef)({}),S={info:(0,h.jsx)(Z,{className:`tooltip__icon`,icon:`info-circle`})},C=(0,m.uniqueId)(`dtui-tt_`),w=()=>{d?d():s.isControlled?s.showTooltip():_||v(!0)},T=()=>{f?f():_&&v(!1)},ee=()=>{let e=window.innerWidth,{offsetLeft:t,clientWidth:n}=y.current;return{right:e-t-n,left:t,total:e}},E=()=>{let{right:e,left:t,total:n}=ee(),a=e>t?e:t;return n<425?n-10:r===`bottom`?o:i?a>800?700:a-5:o},te=(e,t)=>e?{top:`${y.current.clientHeight+y.current.offsetTop+8}px`,widthVar:t,left:`${y.current.clientWidth/2-8}px`}:{...x.current,widthVar:t},D=()=>{if(Object.keys(l).includes(`transform`)&&y.current)r===`bottom`&&(b.current=`bottom`),x.current={width:E()};else if(y.current){let e=E(),{left:t,total:n,right:i}=ee(),a=y.current.offsetTop+c.top,o=n<700;if(r===`bottom`||o)b.current=`bottom`,x.current={...te(o,e)};else if(r===`right`&&i<e){let n=t-e+y.current.clientWidth;b.current=`smart-bottom-left`,x.current={top:y.current.offsetTop+16+y.current.clientHeight,left:n+20,width:e}}else if(r===`left`&&t<e)b.current=`smart-bottom-right`,x.current={top:y.current.offsetTop+16+y.current.clientHeight,left:t-20,width:e};else if(r===`left`){let n=t-e;b.current=`right`,x.current={top:a,left:n-5,width:e}}else{let n=t+y.current.clientWidth;b.current=`left`,x.current={top:a,left:n+5,width:e}}}},O=()=>{s.isControlled?s.showTooltip():p||g(!0)},k=()=>{s.isControlled?s.closeTooltip():p&&g(!1)},A=s.isControlled&&s.isVisible||p||_,j=null;return A&&(j=(0,h.jsx)(`div`,{className:`tooltip-spacer`,style:x.current,children:(0,h.jsx)(`div`,{className:`tooltip`,id:`tooltip`,role:`tooltip`,onMouseEnter:w,onMouseMove:w,onMouseLeave:T,children:(0,h.jsxs)(`div`,{className:`tooltip__interior`,children:[(0,h.jsx)(`div`,{className:`tooltip-pointer ${b.current}`}),(0,h.jsx)(`div`,{className:`tooltip__content`,children:(0,h.jsx)(`div`,{className:`tooltip__message`,children:n})})]})})})),(0,u.useEffect)(()=>(window.addEventListener(`scroll`,(0,m.throttle)(D,500)),window.addEventListener(`resize`,(0,m.throttle)(D,100)),s.isControlled||document?.getElementById(C)?.addEventListener(`mousemove`,(0,m.throttle)(D,500)),()=>{window.removeEventListener(`scroll`,D),window.removeEventListener(`resize`,D),s.isControlled||document?.getElementById(C)?.addEventListener(`mousemove`,D)}),[]),(0,u.useEffect)(()=>{D()},[y.current]),(0,h.jsx)(`div`,{id:C,className:(0,rs.default)({"tooltip-wrapper":!0,[e]:e!==null}),style:l,children:(0,h.jsxs)(`div`,{ref:e=>{y.current=e},children:[(0,h.jsxs)(`div`,{role:`presentation`,tabIndex:`0`,className:`tooltip__hover-wrapper`,onBlur:k,onFocus:O,onKeyPress:O,onMouseEnter:O,onMouseLeave:k,onClick:O,children:[t,a&&S[a]]}),j]})})};os.propTypes=is;var ss={title:f.default.string.isRequired,children:f.default.node.isRequired,className:f.default.string,textAlign:f.default.shape({title:f.default.oneOf([`center`,`left`]),text:f.default.oneOf([`center`,`left`])})},cs=({children:e,title:t,className:n=null,textAlign:r={title:`left`,text:`left`}})=>(0,h.jsxs)(`div`,{className:(0,rs.default)({[n]:n!==null}),children:[(0,h.jsx)(`h1`,{className:(0,rs.default)(`tooltip__title`,r.title),children:t}),(0,h.jsx)(`div`,{className:(0,rs.default)(`tooltip__text`,r.text),children:e})]});cs.propTypes=ss;var ls=(e,t=[],n=[13,32])=>r=>{n.includes(r.keyCode)&&e(...t)},us={label:f.default.string.isRequired,internal:f.default.string,labelContent:f.default.element,active:f.default.bool,enabled:f.default.bool,switchTab:f.default.func,className:f.default.string,tooltip:f.default.object,count:f.default.number,tablessStyle:f.default.bool},ds=e=>{let t=(0,u.useRef)(null),n=()=>{e.enabled&&(t?.current&&t.current?.scrollIntoView&&t.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`}),e.switchTab(e.internal))},r=ls(n);return(0,h.jsx)(`div`,{className:`usa-dt-tab__wrapper${e.enabled?``:` disabled`}${e.tablessStyle?` tabless-tab`:``}${e.active?` active`:``}`,children:(0,h.jsx)(`div`,{className:`usa-dt-tab${e.active?` active`:``} ${e.className||``}${e.enabled?``:` disabled`}`,ref:t,onClick:n,onKeyDown:r,role:`tab`,title:`Show ${e.label}`,"aria-label":`Show ${e.label}`,tabIndex:0,disabled:!e.enabled,children:(0,h.jsx)(`div`,{className:`usa-dt-tab__content`,children:(0,h.jsxs)(`div`,{className:`usa-dt-tab__label`,children:[(0,h.jsx)(`div`,{className:`usa-dt-tab__label-text`,children:e.label}),e.count>=0&&(0,h.jsx)(`div`,{"aria-label":`Count of ${w(e.count)} for ${e.label}`,className:`count${e.active?` active`:``}`,children:w(e.count)}),e.tooltip&&(0,h.jsx)(os,{tooltipComponent:(0,h.jsx)(cs,{title:e.label,children:e.tooltip}),icon:`info`})]})})})})};ds.propTypes=us;var fs={types:f.default.arrayOf(f.default.shape({label:f.default.string.isRequired,internal:f.default.string.isRequired,count:f.default.number,disabled:f.default.bool,tooltip:f.default.element})).isRequired,active:f.default.string.isRequired,switchTab:f.default.func.isRequired,tabsClassName:f.default.string,tablessStyle:f.default.bool},ps=({types:e,active:t,switchTab:n,tabsClassName:r,tablessStyle:i})=>{let a=e.map(e=>(0,u.createElement)(ds,{...e,active:t===e.internal,switchTab:n,key:`table-type-item-${e.internal}`,enabled:!e.disabled,className:r,tooltip:e.tooltip,tablessStyle:i}));return(0,h.jsxs)(`div`,{className:`usa-dt-tab-list${i?` tabless-tabs`:``}`,role:`tablist`,children:[!i&&(0,h.jsx)(`div`,{className:`usa-dt-tab-list__border-pre-filler`}),a,(0,h.jsx)(`div`,{className:`usa-dt-tab-list__border-post-filler`})]})};ps.propTypes=fs;var ms=({className:e})=>(0,h.jsx)(io,{className:`coming soon ${e}`,title:`Coming Soon`,description:`This feature is currently under development.`}),hs=(e,t,n)=>{if(e!==0&&!e)return null;let r=t?x(e):w(e);if(Math.abs(e)>v.MILLION){let i=C(e);r=`${t?S(e/i.unit,2):T(e/i.unit,2)} ${n?(0,m.startCase)(i.longLabel):i.unitLabel}`}return r},gs={2:`two`,3:`three`,4:`four`},_s={boxes:f.default.arrayOf(f.default.shape({type:f.default.string.isRequired,title:f.default.oneOfType([f.default.string,f.default.element]),amount:f.default.oneOfType([f.default.number,f.default.string]),isMonetary:f.default.bool,isString:f.default.bool,subtitle:f.default.string,subtitleBottom:f.default.string,isLoading:f.default.bool}))},vs=({boxes:e})=>{let[t,n]=(0,u.useState)(window.innerWidth>1200),r=(0,m.throttle)(()=>n(window.innerWidth>1200));return(0,u.useEffect)(()=>(r(),window.addEventListener(`resize`,r),()=>window.removeEventListener(`resize`,r)),[]),(0,h.jsx)(`div`,{className:`usa-dt-information-boxes ${gs[e.length]}-boxes`,children:e.map(e=>(0,h.jsx)(`div`,{className:`usa-dt-information-box`,children:(0,h.jsx)(`div`,{className:`usa-dt-information-box__divider`,children:(0,h.jsxs)(`div`,{className:`usa-dt-information-box__content${e.subtitle?` with-subtitle`:``}`,children:[(0,h.jsx)(`div`,{className:`usa-dt-information-box__title`,children:e.title}),e.subtitle&&(0,h.jsx)(`div`,{className:`usa-dt-information-box__subtitle`,children:e.subtitle}),(0,h.jsxs)(`div`,{className:`usa-dt-information-box__amount${e.isLoading?` loading`:``}`,children:[e.isLoading&&(0,h.jsx)(`div`,{className:`dot-pulse`}),!e.isLoading&&e.isString?e.amount:``,!e.isLoading&&!e.isString&&hs(e.amount,e.isMonetary,t)]}),e.subtitleBottom&&(0,h.jsx)(`div`,{className:`usa-dt-information-box__subtitle-bottom`,children:e.subtitleBottom})]})})},e.type))})};vs.propTypes=_s;function ys({icon:e,title:t,overLine:n,description:r,titleTooltip:i,descTooltip:a}){return(0,h.jsxs)(`div`,{className:`usda-section-title__sectionHeader`,children:[e&&u.default.cloneElement(e,{className:`usda-section-title__title-icon`}),(0,h.jsxs)(`div`,{className:`usda-section-title__header`,children:[n&&(0,h.jsx)(`strong`,{className:`usda-section-title__overline`,children:n}),(0,h.jsxs)(`div`,{className:`usda-section-title__title`,children:[(0,h.jsx)(`h3`,{children:t}),i.component&&(0,h.jsx)(os,{tooltipComponent:i.component,icon:`info`,className:`${n?`has-overline`:``}`,...i.props})]})]}),r&&u.default.cloneElement(r,{className:`usda-section-title__desc has-overline`}),a.component&&(0,h.jsx)(os,{tooltipComponent:a.component,icon:`info`,tooltipPosition:`left`,...a.props})]})}ys.propTypes={icon:f.default.element,title:f.default.string.isRequired,overLine:f.default.string,description:f.default.element,titleTooltip:f.default.shape({component:f.default.oneOfType([f.default.element,f.default.bool]),props:f.default.object}),descTooltip:f.default.shape({component:f.default.oneOfType([f.default.element,f.default.bool]),props:f.default.object})};var bs={isControlled:!1,toggleExpand:()=>{},isExpanded:!1},xs=({title:e,icon:t,children:n,id:r=``,classNames:i=``,isCollapsible:a=!1,isComingSoon:o=!1,controlledProps:s=bs,defaultExpandedState:c=!0,overLine:l=``,titleTooltip:d={tooltip:null,tooltipProps:{}},descTooltip:f={component:null,props:{}},description:p})=>{let[m,g]=(0,u.useState)(c),_=()=>{s.isControlled?s.toggleExpand():g(!m)},v=m||s.isControlled&&s.isExpanded||!a;return(0,h.jsxs)(`section`,{id:r,className:`usda-section__container${i?` ${i}`:``}`,children:[(0,h.jsxs)(`div`,{className:`usda-section-title__container`,children:[(0,h.jsx)(ys,{icon:t,title:e,overLine:l,description:p,titleTooltip:d,descTooltip:f}),a&&(0,h.jsx)(Z,{"aria-label":`usda-section-title__expand-icon`,tabIndex:0,onKeyDown:ls(_),className:`usda-section-title__expand-icon`,onClick:_,size:`2x`,icon:m||s.isControlled&&s.isExpanded?`chevron-up`:`chevron-down`})]}),(0,h.jsx)(`hr`,{}),o&&v&&(0,h.jsx)(ms,{}),v&&!o&&n]})};xs.propTypes={icon:f.default.element.isRequired,children:f.default.element.isRequired,title:f.default.string.isRequired,defaultExpandedState:f.default.bool,overLine:f.default.string,controlledProps:f.default.shape({isControlled:f.default.bool.isRequired,toggleExpand:f.default.func.isRequired,isExpanded:f.default.bool.isRequired}),description:f.default.element,titleTooltip:f.default.shape({component:f.default.element,props:f.default.object}),descTooltip:f.default.shape({component:f.default.element,props:f.default.object}),isCollapsible:f.default.bool,isComingSoon:f.default.bool,classNames:f.default.string,id:f.default.string};var Ss={items:f.default.arrayOf(f.default.element)},Cs=({items:e})=>{let[t,n]=(0,u.useState)(1),[r,i]=(0,u.useState)(!1),a=(0,u.useRef)(null),o=(0,u.useRef)(0),s=(0,u.useRef)((0,m.uniqueId)()),c=(0,u.useRef)(null),l=(0,u.useRef)(null),d=e=>n(e),f=()=>d(t);(0,u.useEffect)(()=>(window.addEventListener(`resize`,f),()=>window.removeEventListener(`resize`,f)),[]);let p=()=>{let t=l.current.offsetWidth,n=Math.round(o.current*-1/t)+1;return n>e.length?1:n<1?e.length:n};(0,u.useEffect)(()=>{r||d(p())},[r]),(0,u.useEffect)(()=>{if(c.current&&l.current){let e=l.current.offsetWidth,n=(t-1)*e*-1;o.current=n,c.current.style.transform=`translate(${n}px, 0px)`}});let g=()=>i(!0),_=()=>{a.current=null,i(!1)},v=()=>_(),y=e=>{let t=e-a.current;a.current=e,o.current+=t,c.current.style.transform=`translate(${o.current}px, 0px)`},b=e=>{if(!r||!e.touches||!e.touches.length||!c)return;let t=e.touches[0];a.current===null?a.current=t.pageX:y(t.pageX)},x=e=>{e.preventDefault(),i(!0)},S=()=>{r&&_()},C=e=>{r&&(a.current===null?a.current=e.pageX:y(e.pageX))},w=e=>{e.preventDefault(),d(parseInt(e.target.value,10))};return(0,h.jsxs)(`div`,{className:`usa-dt-carousel`,"aria-describedby":`${s.current}-instructions`,children:[(0,h.jsxs)(`div`,{id:`${s.current}-instructions`,className:`usa-dt-carousel__instructions`,"aria-live":`polite`,children:[`An image carousel containing `,`${e.length} item${e.length===1?``:`s`}`,`, with item `,t,` shown.`]}),(0,h.jsx)(`div`,{className:`usa-dt-carousel-content`,children:(0,h.jsx)(`div`,{className:`usa-dt-carousel-item`,onTouchStart:g,onTouchMove:b,onTouchEnd:v,onTouchCancel:v,onMouseDown:x,onMouseUp:S,onMouseLeave:S,onMouseMove:C,role:`presentation`,ref:l,children:(0,h.jsx)(`div`,{className:`usa-dt-carousel-item__list ${r?`usa-dt-carousel-item__list_dragging`:``}`,"aria-live":`polite`,ref:c,children:e.map((e,n)=>(0,h.jsx)(`div`,{className:`usa-dt-carousel-item__list-item`,"aria-hidden":t!==n+1,tabIndex:-1,children:(0,u.cloneElement)(e,{className:`usa-dt-carousel-item__item`})},`${n}-the-list-item`))})})}),(0,h.jsx)(`div`,{className:`usa-dt-carousel-pager`,children:(0,h.jsx)(`div`,{className:`usa-dt-carousel-pager__list`,role:`menu`,"aria-label":`Pagination controls for carousel items`,children:e.map((e,n)=>(0,h.jsx)(`button`,{className:`usa-dt-carousel-pager__dot-button ${n+1===t?`usa-dt-carousel-pager__dot-button_active`:``}`,value:n+1,onClick:w,"aria-label":`Skip to carousel item ${n+1}`,"aria-checked":n+1===t,role:`menuitemradio`,children:(0,h.jsx)(`div`,{className:`usa-dt-carousel-pager__dot-decorator`})},`${n}-list-item`))})})]})};Cs.propTypes=Ss;var ws=(e,t)=>{let n=!1,r=!1,i=[...e?.childNodes],a=i[0]?.getBoundingClientRect(),o=i[i.length-1]?.getBoundingClientRect();return(a.left<0||e.scrollLeft>0)&&(n=!0),(o.right>e.clientWidth+t||o.right>e.scrollWidth)&&(r=!0),{left:n,right:r}},Ts=e=>{let t=[];return e.childNodes.forEach(e=>{let n=e.getBoundingClientRect();t.push({name:e.innerHTML,originalLeftOffset:n.left,width:n.width})}),t},Es=e=>{e.current.querySelector(`ul`).scrollTo({left:`0`,behavior:`smooth`})},Ds={sections:f.default.array,activeSection:f.default.string,jumpToSection:f.default.func,detectActiveSection:f.default.oneOfType([f.default.bool,f.default.func]),pageName:f.default.string},Os=e=>{let{sections:t,jumpToSection:n,pageName:r,detectActiveSection:i}=e,[a,o]=(0,u.useState)(e.activeSection),[s,c]=(0,u.useState)(window.innerWidth),[l,d]=(0,u.useState)(null),[f,p]=(0,u.useState)([]),[g,_]=(0,u.useState)(!1),[v,y]=(0,u.useState)(!1),[b,x]=(0,u.useState)(32),[S,C]=(0,u.useState)(window.innerWidth<992),w=(0,u.useRef)(null),[T,ee]=(0,u.useState)([]),E=()=>{let e=w?.current?.querySelector(`ul`),{left:t,right:n}=ws(e,b);_(t),y(n)},te=(0,u.useCallback)(e=>{e.stopPropagation(),E()}),D=(0,u.useCallback)(e=>{e.stopPropagation();let t=w.current.querySelector(`ul`),n=[...t.childNodes],r={name:``,index:0};n.find((e,n)=>{let i=e.getBoundingClientRect();if(i.left>0&&i.right<t.clientWidth)return r.name=e.querySelector(`a`).innerHTML,r.index=n,n});let i=r.index;if(i+2<f.length){let e=t.scrollLeft-t.clientWidth+20+f[i+1].width+f[i+2].width;t.scrollTo({left:e,behavior:`smooth`})}else Es(w)}),O=(0,u.useCallback)(e=>{if(e.stopPropagation(),f){let e=w.current.querySelector(`ul`),t=[...e.childNodes],n={name:``,index:0};t.find((t,r)=>{let i=t.getBoundingClientRect(),a=e.clientWidth;if(i.right>a&&i.left>b/2)return n.name=t.querySelector(`a`).innerHTML,n.index=r,r});let r=n.index;if(r-2>=0){let t=f[r-2]?.originalLeftOffset;if(t){let n=t+b/2;e.scrollTo({left:n,behavior:`smooth`})}}else Es(w)}}),k=(0,u.useCallback)(()=>{let e=w.current.querySelector(`ul`),t=Ts(e);d(e),p(t)}),A=(0,u.useCallback)((e,t)=>{e.key===`Enter`&&(t===`left`&&D(e),t===`right`&&O(e))}),j=()=>{let e=window.innerWidth;s!==e&&c(e),C(s<992),992<s&&s<=1200&&x(52),1200<s&&s<=1640&&x(72),1640<s&&x(192),E()};(0,u.useEffect)(()=>(k(),j(),window.addEventListener(`resize`,()=>j()),()=>window.removeEventListener(`resize`,()=>j())),[]),(0,u.useEffect)(()=>(E(),l?.addEventListener(`scrollend`,e=>te(e)),()=>l?.removeEventListener(`scrollend`,e=>te(e))),[l]);let M=(0,m.throttle)(()=>{let e=t.map(e=>{let t=e.section,n=document.getElementById(`${r}-${t}`);if(!n)return null;let i=document.querySelector(`.usda-page-header`)?.offsetHeight||0,a=n.offsetTop-i;return{section:t,top:a,bottom:n.offsetHeight+a-i}});ee(e)},100),ne=(0,m.throttle)(()=>{let e=window.pageYOffset||document.documentElement.scrollTop,t=e+window.innerHeight,n=a,r=!1,i=[],s=e+30,c=t-30;if(T.forEach((e,t)=>{if(e.top<=c&&e.bottom>=s){let n=e.bottom-e.top,a=(Math.min(e.bottom,c)-Math.max(s,e.top))/n;i.push({section:e.section,amount:a}),t===T.length-1&&(r=!0)}else t===T.length-1&&e.top<=s&&(r=!0,i.push({section:e.section,amount:1}))}),i.length>0&&(n=i[0].section,i[0].amount<.15&&i.length>1&&(n=i[1].section)),r&&i.length>1){let e=i[i.length-1];i[i.length-2].amount<.5&&e.amount===1&&(n=e.section)}n!==a&&o(n)},100);return(0,u.useEffect)(()=>{i&&T.length===0&&M();let e=()=>{M(),i&&ne()};return window.addEventListener(`scroll`,e),window.addEventListener(`resize`,M),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,M)}},[i,M,ne,T.length]),(0,h.jsx)(`div`,{className:`usda-in-page-nav__container`,children:(0,h.jsxs)(`nav`,{ref:w,className:`usda-in-page-nav__wrapper ${g&&!S?`left-fade-effect`:``} ${v?`right-fade-effect`:``} `,children:[g&&!S&&(0,h.jsx)(`div`,{"aria-label":`In-page navigation left paginator`,title:`In-page navigation left paginator`,className:`usda-in-page-nav__paginator left`,tabIndex:`0`,role:`button`,onKeyDown:e=>A(e,`left`),onClick:e=>D(e),children:(0,h.jsx)(Z,{icon:`chevron-left`,alt:`Back`})}),(0,h.jsx)(`ul`,{children:t.map(e=>(0,h.jsx)(`li`,{className:`usda-in-page-nav__element ${e.section===a?`active`:``}`,children:(0,h.jsx)(`a`,{role:`button`,tabIndex:`0`,onKeyDown:t=>t.key===`Enter`?n(e.section):``,onClick:()=>n(e.section),children:e.label},`in-page-nav-link-${e.label}`)},`in-page-nav-li-${e.label}`))}),v&&!S&&(0,h.jsx)(`div`,{"aria-label":`In-page navigation right paginator`,title:`In-page navigation right paginator`,className:`usda-in-page-nav__paginator right`,tabIndex:`0`,role:`button`,onKeyDown:e=>A(e,`right`),onClick:e=>O(e),children:(0,h.jsx)(Z,{icon:`chevron-right`,alt:`Forward`})})]})})};Os.propTypes=Ds;var ks=({title:e,overLine:t=``,toolBar:n=[],backgroundColor:r=`#1a4480`,pageName:i,sections:a,activeSection:o,jumpToSection:s,inPageNav:c=!1})=>(0,h.jsxs)(`section`,{className:`usda-page-header usda-page-header--sticky`,style:{backgroundColor:r},children:[(0,h.jsxs)(`div`,{className:`usda-page-header__container`,children:[(0,h.jsxs)(`div`,{className:`usda-page-header__mobile-top`,children:[(0,h.jsxs)(`div`,{className:`usda-page-header__header`,children:[t&&(0,h.jsx)(`strong`,{className:`usda-page-header__overline`,children:t}),(0,h.jsx)(`div`,{className:`usda-page-header__title`,children:(0,h.jsx)(`h1`,{children:e})})]}),(()=>{let e=n?.find(e=>e?.type.displayName===`Share Icon`);return e?u.default.cloneElement(e):null})(),(()=>{let e=n?.find(e=>e?.type.displayName===`ATDButton`);return e?u.default.cloneElement(e):null})()]}),(0,h.jsx)(`hr`,{}),n?.length>0&&(0,h.jsx)(`div`,{className:`usda-page-header__toolbar`,children:n.map(e=>{let t=`${e.props?.className} ${e.props?.classNames}`,n=`${e.props?.classNames}`;return t?u.default.cloneElement(e,{className:`${t} toolbar__item`}):n?u.default.cloneElement(e,{classNames:`${n} toolbar__item`}):u.default.cloneElement(e,{className:`toolbar__item`,classNames:`toolbar__item`})})})]}),c&&(0,h.jsx)(Os,{detectActiveSection:!0,pageName:i,sections:a,activeSection:o,jumpToSection:s})]});ks.propTypes={stickyBreakPoint:f.default.number,overLine:f.default.string,title:f.default.string.isRequired,toolBar:f.default.arrayOf(f.default.element),pageName:f.default.string,sections:f.default.array,activeSection:f.default.string,jumpToSection:f.default.func};var As={onClick:f.default.func.isRequired,downloadInFlight:f.default.bool,tooltipComponent:f.default.element,isEnabled:f.default.bool,tooltipPosition:f.default.string},js=({onClick:e,downloadInFlight:t,tooltipComponent:n=null,tooltipPosition:r=`left`,isEnabled:i=!0,backgroundColor:a=`#1a4480`})=>{let o=n=>{n.preventDefault(),!t&&i&&e()},s=t||!i?` disabled`:``,c=t?`Preparing Download...`:`Download`,l=t?Jo:Go;return n?(0,h.jsx)(os,{className:`usda-download-btn${s}`,tooltipPosition:r,tooltipComponent:n,children:(0,h.jsxs)(`button`,{type:`button`,role:`presentation`,className:`usda-button`,title:c,disabled:t||!i,onClick:o,style:{backgroundColor:a},tabIndex:i?0:-1,children:[(0,h.jsx)(Z,{icon:l,spin:t,color:`#dfe1e2`}),(0,h.jsx)(`span`,{style:{color:`#dfe1e2`},children:c})]})}):(0,h.jsx)(`div`,{className:`usda-download-btn${s}`,children:(0,h.jsxs)(`button`,{type:`button`,className:`usda-button`,title:c,"aria-label":c,disabled:t,onClick:o,style:{backgroundColor:a},tabIndex:i?0:-1,"aria-hidden":!i,children:[(0,h.jsx)(Z,{icon:l,spin:t}),(0,h.jsx)(`span`,{children:c})]})})};js.displayName=`Download Icon Button`,js.propTypes=As;var Ms={prefix:`far`,iconName:`calendar-days`,icon:[448,512,[`calendar-alt`],`f073`,`M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z`]},Ns=2008,Ps=(e=Ns,t)=>[...Array(t-e)].reduce((t,n,r)=>(t.push(e+r+1),t),[e]).sort((e,t)=>t-e),Fs=(e,t)=>Number.isInteger(e)?t-e:parseInt(t,10)-parseInt(e,10),Is=({backgroundColor:e,latestFy:t,selectedFy:n=2020,earliestFy:r=2017,options:i=[],handleFyChange:a=()=>{},sortFn:o=Fs})=>(0,h.jsxs)(`div`,{className:`usda-fy-picker__container`,children:[(0,h.jsx)(Ga,{backgroundColor:e,className:`usda-fy-picker`,icon:(0,h.jsx)(Z,{icon:Ms,size:`xs`,alt:`FY Loading ...`}),selectedOption:i.length?i.find(e=>e?.value===n||e.value===parseInt(n,10))?.name||`--`:`FY ${n}`,sortFn:o,options:i.length?i.map(e=>({...e,onClick:a})):t?Ps(r,t).map(e=>({name:`FY ${e}`,value:`${e}`,onClick:a})):[{name:`Loading fiscal years...`,value:null,onClick:()=>{}}]}),(0,h.jsx)(`span`,{children:`Fiscal Year`})]});Is.displayName=`Fiscal Year Picker`,Is.propTypes={backgroundColor:f.default.string,selectedFy:f.default.oneOfType([f.default.number,f.default.string]),earliestFy:f.default.number,latestFy:f.default.number,options:f.default.arrayOf(f.default.shape({name:f.default.oneOfType([f.default.string,f.default.number]),value:f.default.oneOfType([f.default.string,f.default.number])})),handleFyChange:f.default.func,sortFn:f.default.func};var Ls={prefix:`fab`,iconName:`linkedin`,icon:[448,512,[],`f08c`,`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`]},Rs={prefix:`fab`,iconName:`square-reddit`,icon:[448,512,[`reddit-square`],`f1a2`,`M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM305.9 166.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8-30.2 3.2-53.8 28.8-53.8 59.9l0 .2c-32.8 1.4-62.8 10.7-86.6 25.5-8.8-6.8-19.9-10.9-32-10.9-28.9 0-52.3 23.4-52.3 52.3 0 21 12.3 39 30.1 47.4 1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3 0-28.9-23.4-52.3-52.3-52.3-12 0-23 4-31.9 10.8-24-14.9-54.3-24.2-87.5-25.4l0-.1c0-22.2 16.5-40.7 37.9-43.7 3.9 16.5 18.7 28.7 36.3 28.7l.2-.2zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9-27.5-7.7-26.6-26.7 13.5-33.5 28.1-33.5l0-.1zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9 10.3-34.4 25-34.4 27.3 14.6 28.1 33.5l0 .1zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6 .7-5.4 3.4-5.7 16.1-1.6 33.5-2.5 51.7-2.5s35.6 .9 51.7 2.5c2.7 .3 4.5 3.1 3.4 5.7z`]},zs={prefix:`fab`,iconName:`square-facebook`,icon:[448,512,[`facebook-square`],`f082`,`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]},Bs=({icon:e,title:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z,{icon:e,color:`#555`,size:`sm`}),(0,h.jsx)(`span`,{children:t})]}),Vs=[{component:(0,h.jsx)(Bs,{icon:qo,title:`Copy link`}),name:`copy`},{component:(0,h.jsx)(Bs,{icon:Ko,title:`Email`}),name:`email`},{component:(0,h.jsx)(({title:e})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`svg`,{className:`share-dropdown__twitter-logo`,width:`1200`,height:`1227`,viewBox:`0 0 1200 1227`,fill:`none`,style:{width:`14px`,height:`14px`},children:(0,h.jsx)(`path`,{d:`M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z`,fill:`#5b616b`})}),(0,h.jsx)(`span`,{children:e})]}),{title:`X (Twitter)`}),name:`twitter`},{component:(0,h.jsx)(Bs,{icon:zs,title:`Facebook`}),name:`facebook`},{component:(0,h.jsx)(Bs,{icon:Ls,title:`LinkedIn`}),name:`linkedin`},{component:(0,h.jsx)(Bs,{icon:Rs,title:`Reddit`}),name:`reddit`}],Hs={url:f.default.string.isRequired,classNames:f.default.string,onShareOptionClick:f.default.func.isRequired,includedDropdownOptions:f.default.arrayOf(f.default.string),colors:f.default.object,dropdownDirection:f.default.string,downloadInFlight:f.default.bool,isEnabled:f.default.bool,noShareText:f.default.bool,keepText:f.default.bool,pickerButtonClassNames:f.default.string,pickerListClassNames:f.default.string},Us=({includedDropdownOptions:e=[],classNames:t=``,url:n=``,onShareOptionClick:r=()=>{},colors:i={color:`#dfe1e2`,backgroundColor:`#1a4480`,confirmationBackgroundColor:`#f1f1f1`},dropdownDirection:a=`left`,downloadInFlight:o,isEnabled:s=!0,noShareText:c,keepText:l=!1,pickerButtonClassNames:d=``,pickerListClassNames:f=``})=>{let[p,g]=(0,u.useState)(!1),_=(0,m.debounce)(()=>g(!1),1750),v=o||!s?` disabled`:``,y=()=>{Array.from(document.querySelectorAll(`.js-dtui-url-for-share-icon`)).forEach(e=>{if(e.value.includes(n))return e.select()}),document.execCommand(`copy`),g(!0),r(`copy`)},b=Vs.filter(({name:t})=>!e.length||e.includes(t)).map(e=>e.name===`copy`?{...e,onClick:y}:{...e,onClick:()=>r(e.name)});return(0,u.useEffect)(()=>(p&&_(),_.cancel),[p]),(0,h.jsxs)(`div`,{className:`${t?`usda-share-icon${v} ${t}`:`usda-share-icon${v}`}`,children:[(0,h.jsx)(`input`,{"aria-label":`Share Input Link`,type:`text`,className:`js-dtui-url-for-share-icon text`,style:{position:`absolute`,right:`9999px`,opacity:0},value:n,readOnly:!0}),(0,h.jsx)(Ga,{buttonClassNames:d,pickerListClassNames:f,dropdownDirection:a,options:b,selectedOption:`copy`,backgroundColor:i.backgroundColor,notEnabled:o||!s,sortFn:()=>1,children:(0,h.jsx)(Z,{icon:`share-alt`,size:`lg`,color:i.color})}),!c&&(0,h.jsx)(`span`,{className:`usda-share-icon__share-text ${l?`keep-text`:``}`,children:`Share`}),p&&(0,h.jsxs)(`div`,{className:`copy-confirmation ${l?`keep-text`:``}`,style:{backgroundColor:i.confirmationBackgroundColor},children:[(0,h.jsx)(Z,{icon:Yo}),` `,`Copied!`]})]})};Us.propTypes=Hs,Us.displayName=`Share Icon`;var Ws=(e,t=0)=>{let[n,r]=(0,u.useState)(0),[i,a]=(0,u.useState)(!1);return[i,n,a,(0,m.throttle)(()=>{let e=window.scrollY||document.documentElement.scrollTop;t&&e>=t&&!i||!t&&e>=n&&!i?a(!0):(e<=t||e<=n)&&a(!1)},100),(0,m.throttle)(()=>{let t=e.current?e.current.offsetTop:0;r(t)},100)]},Gs=e=>e.map(e=>e&&e.trim()).filter(e=>e).join(` `);function Ks({children:e,className:t,...n}){return(0,h.jsx)(`div`,{className:Gs([`usa-dt-flex-grid__container`,t]),...n,children:e})}Ks.propTypes={children:f.default.node.isRequired,className:f.default.string};var qs=({children:e,className:t,hasGutter:n=!1,gutterSize:r,...i})=>{let a=n?`usa-dt-flex-grid__gutter`:``,o=(0,rs.default)({"usa-dt-flex-grid__gutter-sm":r===`sm`,"usa-dt-flex-grid__gutter-lg":r===`lg`});return(0,h.jsx)(`div`,{className:Gs([`usa-dt-flex-grid__row`,a,o,t]),...i,children:e})};qs.propTypes={children:f.default.node.isRequired,className:f.default.string,hasGutter:f.default.bool,gutterSize:f.default.oneOf([`sm`,`lg`])};var Js=({children:e,className:t,desktopxl:n,desktop:r,mobile:i,tablet:a,width:o,...s})=>{let c=Gs([...[[null,o],[`desktopxl`,n],[`desktop`,r],[`tablet`,a],[`mobile`,i]].map(([e,t])=>t===void 0?``:t.span!==void 0&&t.offset!==void 0?Gs([`${e?`${e}:`:``}usa-dt-flex-grid__col-${t.span}`,`${e?`${e}:`:``}usa-dt-flex-grid__offset-${t.offset}`]):t.order===void 0?`${e?`${e}:`:``}usa-dt-flex-grid__col-${t}`:Gs([`${e?`${e}:`:``}usa-dt-flex-grid__col-${t.span}`,`${e?`${e}:`:``}usa-dt-flex-grid__order-${t.order}`])),t]);return(0,h.jsx)(`div`,{className:c||`usa-dt-flex-grid__col`,...s,children:e})};Js.propTypes={children:f.default.node,className:f.default.string,desktopxl:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`]),f.default.shape({span:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`])]),offset:f.default.oneOfType([f.default.number,f.default.string]),order:f.default.oneOfType([f.default.number,f.default.oneOf([`first`,`last`])])})]),desktop:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`]),f.default.shape({span:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`])]),offset:f.default.oneOfType([f.default.number,f.default.string]),order:f.default.oneOfType([f.default.number,f.default.oneOf([`first`,`last`])])})]),tablet:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`]),f.default.shape({span:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`])]),offset:f.default.oneOfType([f.default.number,f.default.string]),order:f.default.oneOfType([f.default.number,f.default.oneOf([`first`,`last`])])})]),mobile:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`]),f.default.shape({span:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`])]),offset:f.default.oneOfType([f.default.number,f.default.string]),order:f.default.oneOfType([f.default.number,f.default.oneOf([`first`,`last`])])})]),width:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`]),f.default.shape({span:f.default.oneOfType([f.default.number,f.default.oneOf([`auto`,`fill`])]),offset:f.default.oneOfType([f.default.number,f.default.string]),order:f.default.oneOfType([f.default.number,f.default.oneOf([`first`,`last`])])})])};var Ys={variant:f.default.string,size:f.default.string,fill:f.default.string,height:f.default.oneOfType([f.default.string,f.default.number]),onClick:f.default.func,onKeyUp:f.default.func,className:f.default.oneOfType([f.default.string,f.default.object])},Xs=({variant:e=``,size:t=`md`,children:n,fill:r,height:i,className:a=``,onClick:o,onKeyUp:s})=>(0,h.jsx)(`div`,{className:`card-column ${a}`,onClick:o,role:`presentation`,tabIndex:`0`,onKeyUp:s,children:(0,h.jsx)(`div`,{className:`${e} ${t} card-container`,style:{backgroundColor:`${r}`,height:`${i}`},children:n})});Xs.propTypes=Ys;var Zs={overline:f.default.string,headline:f.default.oneOfType([f.default.string,f.default.object,f.default.node]),subhead:f.default.string,text:f.default.oneOfType([f.default.string,f.default.object]),variant:f.default.string,children:f.default.oneOfType([f.default.string,f.default.object,f.default.node]),imageContainerHeight:f.default.string,customClassName:f.default.string,onClick:f.default.func},Qs=({overline:e,headline:t,onClick:n,subhead:r,text:i,variant:a=``,children:o,imageContainerHeight:s,customClassName:c=``})=>(0,h.jsxs)(`div`,{className:`card__body ${a} ${c}`,style:{height:s?`calc(100% - ${s} - 12px)`:``},children:[e&&(0,h.jsx)(`div`,{className:`overline`,children:e}),t&&(0,h.jsx)(`div`,{children:(0,h.jsx)(`div`,{className:`headline`,onClick:n,children:t})}),r&&(0,h.jsx)(`div`,{className:`subhead`,children:r}),i&&(0,h.jsx)(`div`,{className:`text`,children:i}),o]});Qs.propTypes=Zs;var $s={img:f.default.string,fill:f.default.string,variant:f.default.string,imageContainerHeight:f.default.string,thumbnail:f.default.bool,children:f.default.element,onClick:f.default.func},ec=({img:e,fill:t,variant:n,imageContainerHeight:r,thumbnail:i,children:a,onClick:o})=>(0,h.jsx)(`div`,{children:(0,h.jsx)(`div`,{className:`card__hero ${n}`,onClick:o,style:{backgroundColor:`${t}`,height:`${r}`},children:i?(0,h.jsx)(h.Fragment,{children:a}):(0,h.jsx)(`img`,{src:`${e}`,role:`presentation`,alt:``})})});ec.propTypes=$s;var tc={buttonSize:f.default.oneOf([`large`,`medium`,`small`,`lg`,`md`,`sm`]).isRequired,backgroundColor:f.default.oneOf([`light`,`dark`]).isRequired,buttonType:f.default.oneOf([`primary`,`primaryIcon`,`secondary`,`secondaryIcon`,`tertiary`,`tertiaryIcon`,`text`,`stacked`,`icon`,`inline`,`intext`]).isRequired,copy:f.default.string.isRequired,image:f.default.element,textAlignment:f.default.oneOf([`left`,`center`]),imageAlignment:f.default.oneOf([`left`,`right`]),additionalClassnames:f.default.string,onClick:f.default.func,onKeyUp:f.default.func,buttonTitle:f.default.string.isRequired,disabled:f.default.bool,maxWidth:f.default.string,to:f.default.string},nc=e=>{let t=``;return e.buttonSize===`large`||e.buttonSize===`lg`?t+=` button__lg `:e.buttonSize===`medium`||e.buttonSize===`md`?t+=` button__md `:(e.buttonSize===`small`||e.buttonSize===`sm`)&&(t+=` button__sm `),e.buttonType===`primary`?t+=` button-type__primary-light `:e.buttonType===`secondary`?e.backgroundColor===`light`?t+=` button-type__secondary-light `:e.backgroundColor===`dark`&&(t+=` button-type__secondary-dark `):e.buttonType===`primaryIcon`?e.backgroundColor===`light`&&e.imageAlignment===`left`&&(t+=` button-type__primary-left-icon-light `):e.buttonType===`secondaryIcon`?e.backgroundColor===`light`?e.imageAlignment===`left`&&(t+=` button-type__secondary-left-icon-light `):e.backgroundColor===`dark`&&e.imageAlignment===`left`&&(t+=` button-type__secondary-left-icon-dark `):e.buttonType===`tertiary`?t+=` button-type__tertiary-light `:e.buttonType===`tertiaryIcon`?e.imageAlignment===`left`&&e.backgroundColor===`light`&&(t+=` button-type__tertiary-left-icon-light `):e.buttonType===`text`?e.backgroundColor===`light`?e.imageAlignment===`left`?t+=` button-type__text-left-icon-light `:e.imageAlignment===`right`?t+=` button-type__text-right-icon-light `:t+=` button-type__text-light `:e.backgroundColor===`dark`&&(e.imageAlignment===`left`?t+=` button-type__text-left-icon-dark `:e.imageAlignment===`right`?t+=` button-type__text-right-icon-dark `:t+=` button-type__text-dark `):e.buttonType===`stacked`?e.backgroundColor===`light`?t+=` button-type__stacked-icon-light `:e.backgroundColor===`dark`&&(t+=` button-type__stacked-icon-dark `):e.buttonType===`icon`?e.backgroundColor===`light`?t+=` button-type__icon-light `:e.backgroundColor===`dark`&&(t+=` button-type__icon-dark `):e.buttonType===`inline`?e.imageAlignment===`right`&&(t+=` button-type__inline-right-icon-light `):e.buttonType===`intext`&&(t+=` button-type__intext-light `),e.textAlignment===`left`?t+=` button-text__left-align `:e.textAlignment===`center`&&(t+=` button-text__center-align `),e.additionalClassnames&&(t+=` `,t+=e.additionalClassnames),t.includes(`button-type__intext-light`)?(0,h.jsx)(`a`,{"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onKeyUp:e.onKeyUp,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},target:`_blank`,rel:`noopener noreferrer`,href:e.to,children:e.copy}):t.includes(`left-icon`)?(0,h.jsxs)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:[e.image,e.copy]}):t.includes(`right-icon`)?(0,h.jsxs)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:[e.copy,e.image]}):t.includes(`stacked-icon`)?(0,h.jsxs)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:[(0,h.jsx)(`div`,{className:`stacked-button__only-image`,children:e.image}),(0,h.jsx)(`div`,{className:`stacked-button__only-text`,children:e.copy})]}):t.includes(`icon-light`)||t.includes(`icon-dark`)?(0,h.jsx)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:e.image}):(0,h.jsx)(`button`,{type:`button`,"aria-label":e.buttonTitle,className:t,tabIndex:`0`,onClick:e.onClick,disabled:e.disabled,style:{maxWidth:e.maxWidth},children:e.copy})};nc.propTypes=tc;var rc={link:f.default.string,govLink:f.default.bool,onlyPerformAction:f.default.bool,action:f.default.func,text:f.default.oneOfType([f.default.string,f.default.object]),variant:f.default.string,customClassName:f.default.string,children:f.default.oneOfType([f.default.string,f.default.object]),disabled:f.default.bool},ic=({link:e,govLink:t,onlyPerformAction:n=`false`,action:r,text:i,variant:a=`secondary`,customClassName:o=``,children:s,backgroundColor:c,buttonSize:l,textAlignment:u,disabled:d=!1})=>{let f={primary:`primary`,secondary:`secondary`,text:`text`},p={primary:`card__button--primary`,secondary:`card__button--secondary `,text:`card__button--borderless`},m=e=>{e.key===`Enter`&&r()},g=()=>{window.location.href=e,r()};return n===!0?(0,h.jsx)(`div`,{className:`card__button`,children:(0,h.jsx)(nc,{additionalClassnames:o,onKeyUp:e=>m(e),onClick:r,copy:i||s,buttonTitle:i||s,buttonSize:`md`,buttonType:f[a]===void 0?`secondary`:f[a],backgroundColor:`light`,textAlignment:`center`,disabled:d})}):(0,h.jsx)(`div`,{className:`card__button`,children:t?(0,h.jsx)(`div`,{className:`card__button--secondary ${p[a]}`,children:(0,h.jsx)(nc,{"aria-label":`${i}`,tabIndex:`0`,additionalClassnames:o,onClick:g,onKeyUp:e=>m(e),copy:i||s,buttonTitle:i||s,buttonSize:l,textAlignment:u,buttonType:f[a]===void 0?`secondary`:f[a],backgroundColor:c,disabled:d})}):(0,h.jsx)(`div`,{className:`${p[a]}`,children:(0,h.jsx)(nc,{"aria-label":`${i}`,tabIndex:`0`,additionalClassnames:o,onClick:g,onKeyUp:e=>m(e),copy:i||s,buttonTitle:i||s,buttonSize:l,textAlignment:u,buttonType:f[a]===void 0?`secondary`:f[a],backgroundColor:c,disabled:d})})})};ic.propTypes=rc;var ac={size:f.default.oneOf([`sm`,`md`,`lg`,`small`,`medium`,`large`]),label:f.default.string,leftIcon:f.default.oneOfType([f.default.string,f.default.element,f.default.object]),sortFn:f.default.func,selectedOption:f.default.oneOfType([f.default.node,f.default.string]),classname:f.default.string,dropdownClassname:f.default.string,buttonClassname:f.default.string,minTextWidth:f.default.string,id:f.default.string,options:f.default.arrayOf(f.default.shape({name:f.default.oneOfType([f.default.string,f.default.node,f.default.number]),value:f.default.any,onClick:f.default.func,classNames:f.default.string})),children:f.default.node,enabled:f.default.bool,parentWidth:f.default.number,infoSection:f.default.bool,infoSectionContent:f.default.string},oc=(e,t,n)=>e.name===n?-1:t.name===n?1:e.name<t.name?-1:+(e.name>t.name),sc=({size:e,label:t=``,children:n,leftIcon:r,enabled:i,id:a=``,options:o,selectedOption:s,dropdownClassname:c=``,buttonClassname:l=``,minTextWidth:d=``,classname:f=``,sortFn:p=oc,parentWidth:g,infoSection:_=!1,infoSectionContent:v=``})=>{let y=(0,u.useRef)(null),b=(0,u.useRef)(null),[x,S]=(0,u.useState)(!1),[C,w]=(0,u.useState)(i||!1),T=`usa-dt-picker__button-icon--svg`,ee=_?`310px`:`initial`,E=e=>{e.preventDefault(),S(!x)},te=e=>{e.key===`Escape`&&x&&S(!x)},D=(e,t)=>p(e,t,s),O=e=>t=>{e(t),S(!1)},k=``;return e===`sm`||e===`small`?k=`-sm`:e===`md`||e===`medium`?k=`-md`:(e===`lg`||e===`large`)&&(k=`-lg`),(0,u.useEffect)(()=>{let e=e=>{x&&y.current&&!y.current.contains(e.target)&&e.target.id!==`${a}-${T}`&&e.target.parentNode.id!==`${a}-${T}`&&S(!1)};return document.addEventListener(`click`,e),()=>{document.removeEventListener(`click`,e)}},[x,a]),(0,u.useEffect)(()=>{w(i)},[i]),(0,h.jsxs)(`div`,{className:`filter__dropdown-container ${f}`,ref:y,children:[t!==``&&(0,h.jsx)(`span`,{className:`filter__dropdown-label${k}`,children:t}),(0,h.jsxs)(`div`,{className:`filter__dropdown-button-list-container`,children:[(0,h.jsxs)(`button`,{className:`filter__dropdown-button${k} ${C?`enabled`:`not-enabled`} ${l}`,ref:b,"aria-label":`Filter Dropdown Button`,onClick:E,onKeyUp:te,style:{maxWidth:`${g}px`},type:`button`,children:[r&&(0,h.jsx)(`span`,{className:`filter__dropdown-left-icon`,children:(0,h.jsx)(Z,{icon:r,alt:`page title bar button icon`})}),n||(0,h.jsx)(`span`,{className:`filter__dropdown-button-text ${d}`,children:s}),(0,h.jsxs)(`span`,{className:`filter__dropdown-chevron`,children:[!x&&(0,h.jsx)(Z,{icon:`chevron-down`,alt:`Toggle menu`}),x&&(0,h.jsx)(Z,{icon:`chevron-up`,alt:`Toggle menu`})]})]}),x&&(0,h.jsx)(`div`,{className:`filter__dropdown__list-info-wrapper`,style:{maxWidth:`${g}px`},children:(0,h.jsxs)(`ul`,{className:`filter__dropdown-list${k} ${x?``:`hide`} ${C?`enabled`:`not-enabled`} ${c}`,style:{maxWidth:`${g}px`,height:ee},children:[o?.sort(D).map(e=>({...e,onClick:O(e.onClick)})).map(e=>(0,h.jsx)(`li`,{className:`filter__dropdown-list-item ${e?.classNames?e.classNames:``} ${e.name?.trim()===s?.trim()?`active`:``}`,children:(0,h.jsx)(`button`,{style:{display:`block`,width:`100%`},tabIndex:0,onClick:t=>{t.preventDefault(),e.onClick(e.value)},onKeyUp:t=>{t.preventDefault(),t.key===`Enter`&&e.onClick(e.value)},className:`filter__dropdown-item`,type:`button`,children:e.component?e.component:e.name})},(0,m.uniqueId)())),_&&(0,h.jsx)(`li`,{children:(0,h.jsxs)(`div`,{className:`filter__dropdown-explainer`,style:{width:`${g}px`},children:[(0,h.jsx)(`div`,{className:`filter__dropdownSeparator`}),(0,h.jsx)(`div`,{className:`filter__dropdown-content`,children:v})]})})]})})]})]})};sc.propTypes=ac,exports.Button=nc,exports.CardBody=Qs,exports.CardButton=ic,exports.CardContainer=Xs,exports.CardHero=ec,exports.Carousel=Cs,exports.ComingSoon=ms,exports.DownloadIconButton=js,exports.ErrorMessage=oo,exports.FiscalYearPicker=Is,exports.FlexGridCol=Js,exports.FlexGridContainer=Ks,exports.FlexGridRow=qs,exports.GenericMessage=io,exports.InformationBoxes=vs,exports.LoadingMessage=zo,exports.NewPicker=sc,exports.NoResultsMessage=Bo,exports.PageHeader=ks,exports.Pagination=Va,exports.Picker=Ga,exports.QuarterPicker=Qa,exports.SearchBar=no,exports.SectionHeader=ys,exports.SectionWrapper=xs,exports.ShareIcon=Us,exports.Table=ns,exports.Tabs=ps,exports.TooltipComponent=cs,exports.TooltipWrapper=os,exports.useCumulativeQuarterPicker=Ja,exports.useDynamicStickyClass=Ws;