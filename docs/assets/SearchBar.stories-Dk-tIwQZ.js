import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CWBrYIHY.js";import{n as r,t as i}from"./prop-types-DbAvhtD_.js";import{i as a,t as o}from"./lodash-D1Oyn25d.js";import{t as s}from"./jsx-runtime-Cw9gq7QB.js";import{n as c,t as l}from"./dist-DufADC5r.js";var u,d,f=t((()=>{u=(e,t,n)=>e&&t===e?!1:!(t&&e.length<n),d=(e,t)=>!!(t&&!e.target.value)})),p=t((()=>{})),m,h,g,_,v,y,b=t((()=>{m=r(),h=e(n(),1),o(),g=e(i(),1),c(),f(),p(),_=s(),v={onSearch:g.default.func,minChars:g.default.number,isDisabled:g.default.bool,throttleOnChange:g.default.number,inputTitle:g.default.string,placeholder:g.default.string},y=e=>{let t=(0,m.c)(33),{onSearch:n,minChars:r,isDisabled:i,throttleOnChange:o,inputTitle:s,placeholder:c}=e,f=r===void 0?2:r,p=i===void 0?!1:i,g=o===void 0?500:o,v=s===void 0?`Search Input`:s,y=c===void 0?``:c,[b,x]=(0,h.useState)(``),[S,C]=(0,h.useState)(``),w;t[0]===n?w=t[1]:(w=()=>{x(``),n(``),C(``)},t[0]=n,t[1]=w);let T=w,E;t[2]!==T||t[3]!==S?(E=e=>d(e,S)?T():x(e.target.value),t[2]=T,t[3]=S,t[4]=E):E=t[4];let D;t[5]!==E||t[6]!==g?(D=a(E,g),t[5]=E,t[6]=g,t[7]=D):D=t[7];let O=D,k;t[8]!==n||t[9]!==b?(k=()=>{let e=b.trim();n(e),x(e),C(e)},t[8]=n,t[9]=b,t[10]=k):k=t[10];let A=k,j;t[11]!==f||t[12]!==A||t[13]!==T||t[14]!==S||t[15]!==b?(j=e=>(e.preventDefault(),u(b,S,f)?A():T()),t[11]=f,t[12]=A,t[13]=T,t[14]=S,t[15]=b,t[16]=j):j=t[16];let M=j,N=`search`;(b&&S===b||S&&b.length<f)&&(N=`times`);let P;t[17]!==v||t[18]!==p||t[19]!==O||t[20]!==y||t[21]!==b?(P=(0,_.jsx)(`input`,{className:`usa-dt-search-bar__input`,"aria-label":`Search Input`,title:v,value:b,type:`text`,disabled:p,onChange:O,placeholder:y}),t[17]=v,t[18]=p,t[19]=O,t[20]=y,t[21]=b,t[22]=P):P=t[22];let F=b.length<f&&!S||p,I=N===`search`?`Submit Search Button`:`Remove Input Value Button`,L;t[23]===N?L=t[24]:(L=(0,_.jsx)(l,{icon:N}),t[23]=N,t[24]=L);let R;t[25]!==M||t[26]!==F||t[27]!==I||t[28]!==L?(R=(0,_.jsx)(`button`,{disabled:F,"aria-label":`Search Button`,title:I,onClick:M,className:`usa-dt-search-bar__button`,children:L}),t[25]=M,t[26]=F,t[27]=I,t[28]=L,t[29]=R):R=t[29];let z;return t[30]!==P||t[31]!==R?(z=(0,_.jsxs)(`form`,{className:`usa-dt-search-bar`,children:[P,R]}),t[30]=P,t[31]=R,t[32]=z):z=t[32],z},y.propTypes=v,y.__docgenInfo={description:``,methods:[],displayName:`SearchBar`,props:{minChars:{defaultValue:{value:`2`,computed:!1},description:``,type:{name:`number`},required:!1},isDisabled:{defaultValue:{value:`false`,computed:!1},description:``,type:{name:`bool`},required:!1},throttleOnChange:{defaultValue:{value:`500`,computed:!1},description:``,type:{name:`number`},required:!1},inputTitle:{defaultValue:{value:`'Search Input'`,computed:!1},description:``,type:{name:`string`},required:!1},placeholder:{defaultValue:{value:`''`,computed:!1},description:``,type:{name:`string`},required:!1},onSearch:{description:``,type:{name:`func`},required:!1}}}})),x,S,C,w,T,E;t((()=>{b(),{within:x,userEvent:S,expect:C}=__STORYBOOK_MODULE_TEST__,w={title:`Tables/SearchBar`,component:y,tags:[`autodocs`]},T={play:async({canvasElement:e,step:t})=>{let n=x(e);await t(`Enter text & submit`,async()=>{await S.type(n.getByTitle(`Search Input`),`hello`,{delay:500}),await S.click(n.getByTitle(`Submit Search Button`)),C(n.getByTitle(`Remove Input Value Button`)).toBeTruthy()}),await t(`Clear submitted text`,async()=>{await S.click(n.getByTitle(`Remove Input Value Button`)),C(n.getByTitle(`Submit Search Button`)).toBeTruthy()}),await t(`Text too short`,async()=>{await S.type(n.getByTitle(`Search Input`),`hi`),C(n.getByTitle(`Submit Search Button`)).toBeDisabled()})},args:{minChars:5,isDisabled:!1,throttleOnChange:250,inputTitle:`Search Input`,placeholder:`Placeholder`,onSearch:()=>{}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`]}))();export{T as Default,E as __namedExportsOrder,w as default};