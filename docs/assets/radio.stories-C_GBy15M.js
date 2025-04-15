import{j as a,a as r,c as s}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{r as ue,R as S}from"./index-D4lIrffr.js";import{f as n}from"./index-D_Ss_HUe.js";import{I as me}from"./iconComponent-C9ppoTYe.js";import"./jsx-runtime-D_zvdyIk.js";const u={small:{radioSize:"14px",dotSize:"6px",fontSize:"var(--font-size-xs)"},medium:{radioSize:"16px",dotSize:"8px",fontSize:"var(--font-size-base)"},large:{radioSize:"20px",dotSize:"10px",fontSize:"var(--font-size-md)"}},c={default:{borderColor:"var(--color-neutral-300)",hoverBorderColor:"var(--color-text-tertiary)",focusBorderColor:"var(--color-primary)",activeBorderColor:"var(--color-primary)",shadowColor:"rgba(59, 130, 246, 0.2)",dotColor:"var(--color-primary)",disabledDotColor:"var(--color-neutral-400)"},error:{borderColor:"var(--color-error)",hoverBorderColor:"var(--color-error-hover)",focusBorderColor:"var(--color-error)",activeBorderColor:"var(--color-error)",shadowColor:"rgba(220, 38, 38, 0.2)",dotColor:"var(--color-error)",disabledDotColor:"var(--color-neutral-400)"}};var ge={name:"1jkdpqt",styles:"opacity:0.6"};const fe=s("label",{target:"e1rlm7pf7"})("display:flex;align-items:",({size:e})=>e==="small"?"flex-start":"center",";gap:var(--spacing-xs);cursor:",({disabled:e})=>e?"not-allowed":"pointer",";user-select:none;position:relative;",({disabled:e})=>e&&ge,";"),ve=s("input",{target:"e1rlm7pf6"})({name:"1qwdmuy",styles:"clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px"}),le=s("div",{target:"e1rlm7pf5"})("display:flex;align-items:center;justify-content:center;width:",({size:e})=>u[e].radioSize,";height:",({size:e})=>u[e].radioSize,";border:1px solid ",({checked:e,disabled:l,variant:i})=>c[i].borderColor,";border-radius:50%;transition:all var(--transition-normal);flex-shrink:0;&:hover{border-color:",({disabled:e,variant:l})=>e?null:c[l].hoverBorderColor,";}&::after{content:'';display:",({checked:e})=>e?"block":"none",";width:",({size:e})=>u[e].dotSize,";height:",({size:e})=>u[e].dotSize,";border-radius:50%;background-color:",({checked:e,disabled:l,variant:i})=>e?l?c[i].disabledDotColor:c[i].dotColor:"transparent",";}"),be=s("div",{target:"e1rlm7pf4"})("display:flex;align-items:center;&:focus-within:not(:has(input:disabled)){",le,"{border-color:",({variant:e})=>c[e].focusBorderColor,";box-shadow:0 0 0 2px ",({variant:e})=>c[e].shadowColor,";}}"),Ce=s("div",{target:"e1rlm7pf3"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),xe=s("span",{target:"e1rlm7pf2"})("font-size:",({size:e})=>u[e].fontSize,";color:var(--color-text);line-height:var(--line-height-normal);margin-top:",({size:e})=>e==="small"?"2px":"0",";"),ye=s("span",{target:"e1rlm7pf1"})("font-size:",({size:e})=>e==="large"?"var(--font-size-base)":"var(--font-size-xs)",";color:var(--color-text-tertiary);margin-top:var(--spacing-xxs);"),Re=s("span",{target:"e1rlm7pf0"})({name:"x2njcj",styles:"font-size:var(--font-size-xs);color:var(--color-error);margin-top:var(--spacing-xxs)"}),o=ue.forwardRef(({label:e,checked:l,defaultChecked:i,size:d="medium",variant:t="default",disabled:h=!1,errorMessage:z,description:D,onChange:w,className:te,style:se,value:de,...ce},pe)=>a("div",{className:te,style:se,children:r(fe,{disabled:h,size:d,children:[r(be,{variant:t,disabled:h,children:[a(ve,{type:"radio",ref:pe,checked:l,defaultChecked:i,onChange:T=>{const he=T.target.checked;w==null||w(he,T)},disabled:h,tabIndex:h?-1:0,value:de,...ce}),a(le,{checked:l??i??!1,size:d,variant:t,disabled:h})]}),(e||D||t==="error"&&z)&&r(Ce,{children:[e&&a(xe,{size:d,children:e}),D&&a(ye,{size:d,children:D}),t==="error"&&z&&a(Re,{children:z})]})]})}));o.displayName="Radio";o.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Radio button label"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is selected"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state (uncontrolled component)"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Radio button size",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"Radio button variant",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is disabled",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display"},description:{required:!1,tsType:{name:"string"},description:"Description text to provide additional information"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when radio state changes"},value:{required:!1,tsType:{name:"string"},description:"Value of the radio button"}}};const ke=s("fieldset",{target:"eascmxd1"})("display:flex;flex-direction:",({direction:e})=>e==="horizontal"?"row":"column",";gap:var(--spacing-xs);border:none;flex-wrap:wrap;@media (max-width: 768px){flex-direction:column;}"),Se=s("legend",{target:"eascmxd0"})({name:"1mbt1kp",styles:"font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-bottom:var(--spacing-xxs)"}),p=({label:e,direction:l="vertical",name:i,children:d})=>r(ke,{direction:l,role:"radiogroup",children:[e&&a(Se,{children:e}),S.Children.map(d,t=>S.isValidElement(t)?S.cloneElement(t,{name:i}):t)]});p.displayName="radiogroup";p.__docgenInfo={description:"",methods:[],displayName:"radiogroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label"},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction",defaultValue:{value:"'vertical'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"Radio group name"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Child radio components"}}};const q=me,Ie={title:"Components/Radio",component:o,argTypes:{variant:{control:"select",options:["default","error"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},checked:{control:"boolean"}}},m={args:{label:"Option 1",onChange:n()}},g={args:{label:"Email notifications",description:"Receive email notifications when there are updates to your account.",onChange:n()}},f={args:{label:"Selected option",checked:!0,onChange:n()}},v={args:{label:"Disabled option",disabled:!0,onChange:n()}},b={args:{label:"Disabled checked option",checked:!0,disabled:!0,onChange:n()}},C={args:{label:"Required field",variant:"error",errorMessage:"This field is required",onChange:n()}},x={args:{label:r("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a(q,{iconName:"Verified",color:"var(--color-success)"}),"Verified option"]}),onChange:n()}},y={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a(o,{size:"small",label:"Small radio",description:"Compact size for dense UIs",onChange:n()}),a(o,{size:"medium",label:"Medium radio",description:"Default size for most use cases",onChange:n()}),a(o,{size:"large",label:"Large radio",description:"Larger size for better visibility or touch targets",onChange:n()})]})},R={render:()=>{const[e,l]=S.useState("option2"),i=d=>t=>{t&&l(d)};return r("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r("div",{children:[a("h3",{children:"Vertical with Label"}),r(p,{label:"Select Gender",name:"gender",direction:"vertical",children:[a(o,{value:"male",label:"Male",checked:e==="male",onChange:i("male")}),a(o,{value:"female",label:"Female",checked:e==="female",onChange:i("female")}),a(o,{value:"other",label:"Other",checked:e==="other",onChange:i("other")})]})]}),r("div",{children:[a("h3",{children:"Horizontal with Label"}),r(p,{label:"Select Plan",name:"plan",direction:"horizontal",children:[a(o,{value:"basic",label:"Basic",checked:e==="basic",onChange:i("basic")}),a(o,{value:"premium",label:r("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a(q,{iconName:"Star",color:"var(--color-warning)"}),"Premium"]}),checked:e==="premium",onChange:i("premium")}),a(o,{value:"pro",label:"Pro",checked:e==="pro",onChange:i("pro")})]})]}),r("div",{children:[a("h3",{children:"With Disabled Option"}),r(p,{label:"Select Option",name:"option",children:[a(o,{value:"option1",label:"Option 1",checked:e==="option1",onChange:i("option1")}),a(o,{value:"option2",label:"Option 2",checked:e==="option2",onChange:i("option2")}),a(o,{value:"option3",label:"Option 3",disabled:!0,checked:e==="option3",onChange:i("option3")})]})]}),r("div",{children:[a("h3",{children:"With Error"}),r(p,{label:"Select Required Option",name:"required",children:[a(o,{value:"yes",label:"Yes",variant:"error",errorMessage:"This field is required",checked:e==="yes",onChange:i("yes")}),a(o,{value:"no",label:"No",variant:"error",errorMessage:"This field is required",checked:e==="no",onChange:i("no")})]})]}),r("div",{style:{marginTop:"8px"},children:["Selected: ",e]})]})}},k={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r("div",{children:[a("h3",{children:"Basic States"}),r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a(o,{label:"Unchecked",onChange:n()}),a(o,{label:"Checked",checked:!0,onChange:n()}),a(o,{label:"Disabled",disabled:!0,onChange:n()}),a(o,{label:"Disabled Checked",checked:!0,disabled:!0,onChange:n()})]})]}),r("div",{children:[a("h3",{children:"With Description"}),r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a(o,{label:"Enable notifications",description:"You'll receive notifications about important updates.",onChange:n()}),a(o,{label:"Share usage data",description:"Help us improve by sharing anonymous usage statistics.",checked:!0,onChange:n()})]})]}),r("div",{children:[a("h3",{children:"Error States"}),r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a(o,{label:"Accept terms and conditions",variant:"error",errorMessage:"You must accept the terms to continue",onChange:n()}),a(o,{label:"Required field",variant:"error",errorMessage:"This field is required",onChange:n()})]})]}),r("div",{children:[a("h3",{children:"Custom Styling"}),a("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-md)"},children:a(o,{label:r("span",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-primary)"},children:[a(q,{iconName:"Star",color:"var(--color-warning)"}),"Premium feature"]}),description:"Unlock advanced features with our premium plan",onChange:n()})})]})]})};var E,I,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    onChange: fn()
  }
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var N,L,O;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    description: 'Receive email notifications when there are updates to your account.',
    onChange: fn()
  }
}`,...(O=(L=g.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var W,B,V;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Selected option',
    checked: true,
    onChange: fn()
  }
}`,...(V=(B=f.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var j,H,P;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    disabled: true,
    onChange: fn()
  }
}`,...(P=(H=v.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,_,U;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checked option',
    checked: true,
    disabled: true,
    onChange: fn()
  }
}`,...(U=(_=b.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var Y,A,F;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    variant: 'error',
    errorMessage: 'This field is required',
    onChange: fn()
  }
}`,...(F=(A=C.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }}>
        <MuiIconComponent iconName="Verified" color="var(--color-success)" />
        Verified option
      </span>,
    onChange: fn()
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Radio size="small" label="Small radio" description="Compact size for dense UIs" onChange={fn()} />
      <Radio size="medium" label="Medium radio" description="Default size for most use cases" onChange={fn()} />
      <Radio size="large" label="Large radio" description="Larger size for better visibility or touch targets" onChange={fn()} />
    </div>
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string>('option2');
    const handleChange = (value: string) => (checked: boolean) => {
      if (checked) {
        setSelected(value);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <h3>Vertical with Label</h3>
          <Radiogroup label="Select Gender" name="gender" direction="vertical">
            <Radio value="male" label="Male" checked={selected === 'male'} onChange={handleChange('male')} />
            <Radio value="female" label="Female" checked={selected === 'female'} onChange={handleChange('female')} />
            <Radio value="other" label="Other" checked={selected === 'other'} onChange={handleChange('other')} />
          </Radiogroup>
        </div>

        <div>
          <h3>Horizontal with Label</h3>
          <Radiogroup label="Select Plan" name="plan" direction="horizontal">
            <Radio value="basic" label="Basic" checked={selected === 'basic'} onChange={handleChange('basic')} />
            <Radio value="premium" label={<span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
                  <MuiIconComponent iconName="Star" color="var(--color-warning)" />
                  Premium
                </span>} checked={selected === 'premium'} onChange={handleChange('premium')} />
            <Radio value="pro" label="Pro" checked={selected === 'pro'} onChange={handleChange('pro')} />
          </Radiogroup>
        </div>

        <div>
          <h3>With Disabled Option</h3>
          <Radiogroup label="Select Option" name="option">
            <Radio value="option1" label="Option 1" checked={selected === 'option1'} onChange={handleChange('option1')} />
            <Radio value="option2" label="Option 2" checked={selected === 'option2'} onChange={handleChange('option2')} />
            <Radio value="option3" label="Option 3" disabled checked={selected === 'option3'} onChange={handleChange('option3')} />
          </Radiogroup>
        </div>

        <div>
          <h3>With Error</h3>
          <Radiogroup label="Select Required Option" name="required">
            <Radio value="yes" label="Yes" variant="error" errorMessage="This field is required" checked={selected === 'yes'} onChange={handleChange('yes')} />
            <Radio value="no" label="No" variant="error" errorMessage="This field is required" checked={selected === 'no'} onChange={handleChange('no')} />
          </Radiogroup>
        </div>

        <div style={{
        marginTop: '8px'
      }}>
          Selected: {selected}
        </div>
      </div>;
  }
}`,...(re=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ie,ne;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3>Basic States</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Radio label="Unchecked" onChange={fn()} />
          <Radio label="Checked" checked onChange={fn()} />
          <Radio label="Disabled" disabled onChange={fn()} />
          <Radio label="Disabled Checked" checked disabled onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>With Description</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Radio label="Enable notifications" description="You'll receive notifications about important updates." onChange={fn()} />
          <Radio label="Share usage data" description="Help us improve by sharing anonymous usage statistics." checked onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>Error States</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Radio label="Accept terms and conditions" variant="error" errorMessage="You must accept the terms to continue" onChange={fn()} />
          <Radio label="Required field" variant="error" errorMessage="This field is required" onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>Custom Styling</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px',
        backgroundColor: 'var(--color-neutral-100)',
        borderRadius: 'var(--radius-md)'
      }}>
          <Radio label={<span style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--color-primary)'
        }}>
                <MuiIconComponent iconName="Star" color="var(--color-warning)" />
                Premium feature
              </span>} description="Unlock advanced features with our premium plan" onChange={fn()} />
        </div>
      </div>
    </div>
}`,...(ne=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const Me=["Default","WithDescription","Checked","Disabled","DisabledChecked","Error","WithReactNodeLabel","Sizes","RadioGroup","CompleteExample"];export{f as Checked,k as CompleteExample,m as Default,v as Disabled,b as DisabledChecked,C as Error,R as RadioGroup,y as Sizes,g as WithDescription,x as WithReactNodeLabel,Me as __namedExportsOrder,Ie as default};
