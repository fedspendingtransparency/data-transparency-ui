import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./throttle-B1lruk_O.js";import{t as a}from"./prop-types-Wc1gCLT4.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./dist-DpUdVkYB.js";var l,u;function d(){return(d=t((()=>{l=(e,t,n)=>!(e&&t===e||t&&e.length<n),u=(e,t)=>!(!t||e.target.value)})))()}var f,p,m,h,g;function _(){return(_=t((()=>{f=e(n(),1),i(),p=e(a(),1),s(),d(),m=o(),h={onSearch:p.default.func,minChars:p.default.number,isDisabled:p.default.bool,throttleOnChange:p.default.number,inputTitle:p.default.string,placeholder:p.default.string},g=({onSearch:e,minChars:t=2,isDisabled:n=!1,throttleOnChange:i=500,inputTitle:a=`Search Input`,placeholder:o=``})=>{let[s,d]=(0,f.useState)(``),[p,h]=(0,f.useState)(``),g=()=>{d(``),e(``),h(``)},_=r(e=>u(e,p)?g():d(e.target.value),i),v=()=>{let t=s.trim();e(t),d(t),h(t)},y=e=>(e.preventDefault(),l(s,p,t)?v():g()),b=`search`;return(s&&p===s||p&&s.length<t)&&(b=`times`),(0,m.jsxs)(`form`,{className:`usa-dt-search-bar`,children:[(0,m.jsx)(`input`,{className:`usa-dt-search-bar__input`,"aria-label":`Search Input`,title:a,value:s,type:`text`,disabled:n,onChange:_,placeholder:o}),(0,m.jsx)(`button`,{disabled:s.length<t&&!p||n,"aria-label":`Search Button`,title:b===`search`?`Submit Search Button`:`Remove Input Value Button`,onClick:y,className:`usa-dt-search-bar__button`,children:(0,m.jsx)(c,{icon:b})})]})},g.propTypes=h,g.__docgenInfo={description:``,methods:[],displayName:`SearchBar`,props:{minChars:{defaultValue:{value:`2`,computed:!1},description:``,type:{name:`number`},required:!1},isDisabled:{defaultValue:{value:`false`,computed:!1},description:``,type:{name:`bool`},required:!1},throttleOnChange:{defaultValue:{value:`500`,computed:!1},description:``,type:{name:`number`},required:!1},inputTitle:{defaultValue:{value:`'Search Input'`,computed:!1},description:``,type:{name:`string`},required:!1},placeholder:{defaultValue:{value:`''`,computed:!1},description:``,type:{name:`string`},required:!1},onSearch:{description:``,type:{name:`func`},required:!1}}}})))()}var v,y,b,x,S,C;function w(){return(w=t((()=>{_(),{within:v,userEvent:y,expect:b}=__STORYBOOK_MODULE_TEST__,x={title:`Tables/SearchBar`,component:g,tags:[`autodocs`]},S={play:async({canvasElement:e,step:t})=>{let n=v(e);await t(`Enter text & submit`,async()=>{await y.type(n.getByTitle(`Search Input`),`hello`,{delay:500}),await y.click(n.getByTitle(`Submit Search Button`)),b(n.getByTitle(`Remove Input Value Button`)).toBeTruthy()}),await t(`Clear submitted text`,async()=>{await y.click(n.getByTitle(`Remove Input Value Button`)),b(n.getByTitle(`Submit Search Button`)).toBeTruthy()}),await t(`Text too short`,async()=>{await y.type(n.getByTitle(`Search Input`),`hi`),b(n.getByTitle(`Submit Search Button`)).toBeDisabled()})},args:{minChars:5,isDisabled:!1,throttleOnChange:250,inputTitle:`Search Input`,placeholder:`Placeholder`,onSearch:()=>{}}},C=[`Default`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Default,C as __namedExportsOrder,x as default};