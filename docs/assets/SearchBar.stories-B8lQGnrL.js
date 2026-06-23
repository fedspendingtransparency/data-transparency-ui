import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{bt as n}from"./iframe-DYIBo2kd.js";import{s as r,t as i}from"./lodash-CX4_osQ5.js";import{t as a}from"./prop-types-KQKEvljm.js";import{t as o}from"./jsx-runtime-CaZkqeYb.js";import{n as s,t as c}from"./dist-Ci6-x00b.js";var l,u,d=e((()=>{l=(e,t,n)=>e&&t===e?!1:!(t&&e.length<n),u=(e,t)=>!!(t&&!e.target.value)})),f=e((()=>{})),p,m,h,g,_,v=e((()=>{p=t(n(),1),i(),m=t(a(),1),s(),d(),f(),h=o(),g={onSearch:m.default.func,minChars:m.default.number,isDisabled:m.default.bool,throttleOnChange:m.default.number,inputTitle:m.default.string,placeholder:m.default.string},_=({onSearch:e,minChars:t=2,isDisabled:n=!1,throttleOnChange:i=500,inputTitle:a=`Search Input`,placeholder:o=``})=>{let[s,d]=(0,p.useState)(``),[f,m]=(0,p.useState)(``),g=()=>{d(``),e(``),m(``)},_=r(e=>u(e,f)?g():d(e.target.value),i),v=()=>{let t=s.trim();e(t),d(t),m(t)},y=e=>(e.preventDefault(),l(s,f,t)?v():g()),b=`search`;return(s&&f===s||f&&s.length<t)&&(b=`times`),(0,h.jsxs)(`form`,{className:`usa-dt-search-bar`,children:[(0,h.jsx)(`input`,{className:`usa-dt-search-bar__input`,"aria-label":`Search Input`,title:a,value:s,type:`text`,disabled:n,onChange:_,placeholder:o}),(0,h.jsx)(`button`,{disabled:s.length<t&&!f||n,"aria-label":`Search Button`,title:b===`search`?`Submit Search Button`:`Remove Input Value Button`,onClick:y,className:`usa-dt-search-bar__button`,children:(0,h.jsx)(c,{icon:b})})]})},_.propTypes=g,_.__docgenInfo={description:``,methods:[],displayName:`SearchBar`,props:{minChars:{defaultValue:{value:`2`,computed:!1},description:``,type:{name:`number`},required:!1},isDisabled:{defaultValue:{value:`false`,computed:!1},description:``,type:{name:`bool`},required:!1},throttleOnChange:{defaultValue:{value:`500`,computed:!1},description:``,type:{name:`number`},required:!1},inputTitle:{defaultValue:{value:`'Search Input'`,computed:!1},description:``,type:{name:`string`},required:!1},placeholder:{defaultValue:{value:`''`,computed:!1},description:``,type:{name:`string`},required:!1},onSearch:{description:``,type:{name:`func`},required:!1}}}})),y,b,x,S,C,w;e((()=>{v(),{within:y,userEvent:b,expect:x}=__STORYBOOK_MODULE_TEST__,S={title:`Tables/SearchBar`,component:_,tags:[`autodocs`]},C={play:async({canvasElement:e,step:t})=>{let n=y(e);await t(`Enter text & submit`,async()=>{await b.type(n.getByTitle(`Search Input`),`hello`,{delay:500}),await b.click(n.getByTitle(`Submit Search Button`)),x(n.getByTitle(`Remove Input Value Button`)).toBeTruthy()}),await t(`Clear submitted text`,async()=>{await b.click(n.getByTitle(`Remove Input Value Button`)),x(n.getByTitle(`Submit Search Button`)).toBeTruthy()}),await t(`Text too short`,async()=>{await b.type(n.getByTitle(`Search Input`),`hi`),x(n.getByTitle(`Submit Search Button`)).toBeDisabled()})},args:{minChars:5,isDisabled:!1,throttleOnChange:250,inputTitle:`Search Input`,placeholder:`Placeholder`,onSearch:()=>{}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Enter text & submit', async () => {
      await userEvent.type(canvas.getByTitle("Search Input"), 'hello', {
        delay: 500
      });
      await userEvent.click(canvas.getByTitle("Submit Search Button"));
      expect(canvas.getByTitle("Remove Input Value Button")).toBeTruthy();
    });
    await step('Clear submitted text', async () => {
      await userEvent.click(canvas.getByTitle("Remove Input Value Button"));
      expect(canvas.getByTitle("Submit Search Button")).toBeTruthy();
    });
    await step('Text too short', async () => {
      await userEvent.type(canvas.getByTitle("Search Input"), 'hi');
      expect(canvas.getByTitle("Submit Search Button")).toBeDisabled();
    });
  },
  args: {
    minChars: 5,
    isDisabled: false,
    throttleOnChange: 250,
    inputTitle: "Search Input",
    placeholder: "Placeholder",
    onSearch: () => {}
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`]}))();export{C as Default,w as __namedExportsOrder,S as default};