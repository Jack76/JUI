import{a as o,j as e,c as t}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{r as se}from"./index-D4lIrffr.js";import{k as le}from"./emotion-react.browser.esm-aeVx2FFw.js";import{I as ie}from"./iconComponent-C9ppoTYe.js";import{f as s}from"./index-D_Ss_HUe.js";import"./jsx-runtime-D_zvdyIk.js";const de=le`
  to {
    transform: rotate(360deg);
  }
`,i={default:{borderColor:"var(--color-neutral-300)",hoverBorderColor:"var(--color-text-tertiary)",focusBorderColor:"var(--color-primary)",shadowColor:"rgba(59, 130, 246, 0.2)"},error:{borderColor:"var(--color-error)",hoverBorderColor:"var(--color-error-hover)",focusBorderColor:"var(--color-error)",shadowColor:"rgba(220, 38, 38, 0.2)"}},ce={small:{fontSize:"var(--font-size-xs)",height:"1.625rem",padding:"0 var(--spacing-xxs)"},medium:{fontSize:"var(--font-size-base)",height:"2.125rem",padding:"0 var(--spacing-xs)"},large:{fontSize:"var(--font-size-md)",height:"2.625rem",padding:"0 var(--spacing-sm)"}},pe=t("div",{target:"e1sqn7ii7"})("display:flex;flex-direction:column;width:",({fluid:r})=>r?"100%":"auto",";");var ue={name:"1ag411s",styles:"opacity:0.6;cursor:not-allowed"},me={name:"1d3w5wq",styles:"width:100%"};const he=t("div",{target:"e1sqn7ii6"})("display:flex;align-items:center;border:1px solid ",({variant:r})=>i[r].borderColor,";border-radius:var(--radius-sm);background-color:",({disabled:r})=>r?"var(--color-neutral-100)":"var(--color-background)",";transition:border-color var(--transition-normal),background-color var(--transition-normal);&:hover:not(:has(input:disabled)){border-color:",({variant:r})=>i[r].hoverBorderColor,";}&:focus-within:not(:has(input:disabled)){border-color:",({variant:r})=>i[r].focusBorderColor,";box-shadow:0 0 0 2px ",({variant:r})=>i[r].shadowColor,";}",({inputSize:r})=>ce[r],";",({fluid:r})=>r&&me,";",({disabled:r})=>r&&ue,";"),fe=t("input",{target:"e1sqn7ii5"})({name:"soqdnr",styles:"flex:1;border:none;outline:none;font-family:var(--font-family);background:transparent;color:var(--color-text);width:100%;&:disabled{cursor:not-allowed;color:var(--color-text-disabled);}"}),d=t("span",{target:"e1sqn7ii4"})({name:"k2jfak",styles:"display:flex;align-items:center;padding:0 var(--spacing-xxs) 0 0;color:var(--color-text-tertiary);svg,.MuiSvgIcon-root{width:var(--font-size-md)!important;height:var(--font-size-md)!important;font-size:var(--font-size-md)!important;color:var(--color-text-tertiary)!important;}"}),ge=t("label",{target:"e1sqn7ii3"})({name:"1mbt1kp",styles:"font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-bottom:var(--spacing-xxs)"}),ve=t("span",{target:"e1sqn7ii2"})({name:"x2njcj",styles:"font-size:var(--font-size-xs);color:var(--color-error);margin-top:var(--spacing-xxs)"}),xe=t("div",{target:"e1sqn7ii1"})("border:2px solid var(--color-text-tertiary);border-top:2px solid transparent;border-radius:50%;width:16px;height:16px;animation:",de," 1s linear infinite;"),Ie=t("button",{target:"e1sqn7ii0"})({name:"8q6x0d",styles:"background:none;border:none;padding:0 var(--spacing-xs);cursor:pointer;color:var(--color-text-tertiary)"}),a=({variant:r="default",inputSize:ae="medium",fluid:y=!1,startIcon:w,endIcon:S,prefix:C,suffix:N,label:E,errorMessage:q,loading:oe=!1,showPasswordToggle:P=!1,type:I="text",disabled:b=!1,...ne})=>{const[l,te]=se.useState(!1);return o(pe,{fluid:y,children:[E&&e(ge,{children:E}),o(he,{variant:r,inputSize:ae,fluid:y,disabled:b,children:[w&&e(d,{children:w}),C&&e(d,{children:C}),e(fe,{type:P&&I==="password"?l?"text":"password":I,disabled:b,...ne}),oe&&e(xe,{}),N&&e(d,{children:N}),P&&I==="password"&&!b&&e(Ie,{type:"button",onClick:()=>te(!l),"aria-label":l?"Hide password":"Show password",children:l?"🙈":"👁️"}),S&&e(d,{children:S})]}),r==="error"&&q&&e(ve,{children:q})]})};a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},inputSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPasswordToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const n=ie,qe={title:"Components/Input",component:a,argTypes:{variant:{control:"select",options:["default","error"]},inputSize:{control:"select",options:["small","medium","large"]},fluid:{control:"boolean"},loading:{control:"boolean"},showPasswordToggle:{control:"boolean"},startIcon:{control:{type:"boolean"}},endIcon:{control:{type:"boolean"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}}}},c={args:{label:"Username",placeholder:"Enter your username",inputSize:"medium",onChange:s()}},p={args:{label:"Search",placeholder:"Search something",startIcon:e(n,{iconName:"Search"}),endIcon:e(n,{iconName:"Person"}),onChange:s()}},u={args:{label:"Price",placeholder:"Enter price",prefix:"$",suffix:"元",onChange:s()}},m={args:{label:"Decorated Input",placeholder:"Enter something",startIcon:e(n,{iconName:"Search"}),endIcon:e(n,{iconName:"Person"}),prefix:"$",suffix:"元",onChange:s()}},h={args:{label:"Email",variant:"error",placeholder:"Invalid email",errorMessage:"Please enter a valid email address",startIcon:e(n,{iconName:"Email"}),onChange:s()}},f={args:{label:"Loading Field",placeholder:"Loading...",loading:!0,onChange:s()}},g={args:{label:"Password",type:"password",placeholder:"Enter password",showPasswordToggle:!0,onChange:s()}},v={render:()=>e("div",{style:{width:"300px"},children:e(a,{label:"Full Width",placeholder:"Stretch input",fluid:!0,onChange:s()})})},x={render:r=>o("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[o("div",{children:[e("h3",{children:"Default States"}),o("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e(a,{placeholder:"Default",...r}),e(a,{placeholder:"With Label",label:"Label",...r}),e(a,{placeholder:"Disabled",disabled:!0,...r})]})]}),o("div",{children:[e("h3",{children:"Icon Variations"}),o("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e(a,{placeholder:"Start Icon",startIcon:e(n,{iconName:"Search"}),...r}),e(a,{placeholder:"End Icon",endIcon:e(n,{iconName:"Person"}),...r}),e(a,{placeholder:"Both Icons",startIcon:e(n,{iconName:"Email"}),endIcon:e(n,{iconName:"Lock"}),...r})]})]}),o("div",{children:[e("h3",{children:"Error States"}),o("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e(a,{placeholder:"Error",variant:"error",errorMessage:"This field is required",...r}),e(a,{placeholder:"Error with Icon",variant:"error",startIcon:e(n,{iconName:"Warning"}),errorMessage:"Invalid input",...r})]})]}),o("div",{children:[e("h3",{children:"Disabled States"}),o("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e(a,{placeholder:"Disabled Input",disabled:!0,...r}),e(a,{placeholder:"Disabled with Icon",disabled:!0,startIcon:e(n,{iconName:"Block"}),...r})]})]})]})};var T,W,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    inputSize: 'medium',
    onChange: fn()
  }
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var M,z,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search something',
    // 使用临时包装的 MuiIconComponent
    startIcon: <MuiIconComponent iconName="Search" />,
    endIcon: <MuiIconComponent iconName="Person" />,
    onChange: fn()
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var k,L,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: 'Enter price',
    prefix: '$',
    suffix: '元',
    onChange: fn()
  }
}`,...(B=(L=u.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var V,F,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Decorated Input',
    placeholder: 'Enter something',
    startIcon: <MuiIconComponent iconName="Search" />,
    endIcon: <MuiIconComponent iconName="Person" />,
    prefix: '$',
    suffix: '元',
    onChange: fn()
  }
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var _,$,A;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    variant: 'error',
    placeholder: 'Invalid email',
    errorMessage: 'Please enter a valid email address',
    startIcon: <MuiIconComponent iconName="Email" />,
    onChange: fn()
  }
}`,...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var U,H,O;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Loading Field',
    placeholder: 'Loading...',
    loading: true,
    onChange: fn()
  }
}`,...(O=(H=f.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    showPasswordToggle: true,
    onChange: fn()
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Input label="Full Width" placeholder="Stretch input" fluid onChange={fn()} />
    </div>
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3>Default States</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Input placeholder="Default" {...args} />
          <Input placeholder="With Label" label="Label" {...args} />
          <Input placeholder="Disabled" disabled {...args} />
        </div>
      </div>
      <div>
        <h3>Icon Variations</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Input placeholder="Start Icon" startIcon={<MuiIconComponent iconName="Search" />} {...args} />
          <Input placeholder="End Icon" endIcon={<MuiIconComponent iconName="Person" />} {...args} />
          <Input placeholder="Both Icons" startIcon={<MuiIconComponent iconName="Email" />} endIcon={<MuiIconComponent iconName="Lock" />} {...args} />
        </div>
      </div>
      <div>
        <h3>Error States</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Input placeholder="Error" variant="error" errorMessage="This field is required" {...args} />
          <Input placeholder="Error with Icon" variant="error" startIcon={<MuiIconComponent iconName="Warning" />} errorMessage="Invalid input" {...args} />
        </div>
      </div>
      <div>
        <h3>Disabled States</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Input placeholder="Disabled Input" disabled {...args} />
          <Input placeholder="Disabled with Icon" disabled startIcon={<MuiIconComponent iconName="Block" />} {...args} />
        </div>
      </div>
    </div>
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Pe=["Default","WithIcons","WithPrefixSuffix","WithAllDecorators","ErrorState","Loading","PasswordField","Fluid","StateExamples"];export{c as Default,h as ErrorState,v as Fluid,f as Loading,g as PasswordField,x as StateExamples,m as WithAllDecorators,p as WithIcons,u as WithPrefixSuffix,Pe as __namedExportsOrder,qe as default};
