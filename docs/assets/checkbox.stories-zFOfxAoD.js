import{j as a,a as r,c}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{r as m,R as ge}from"./index-D4lIrffr.js";import{f as i}from"./index-D_Ss_HUe.js";import{I as ye}from"./iconComponent-C9ppoTYe.js";import"./jsx-runtime-D_zvdyIk.js";const w={small:{checkboxSize:"14px",fontSize:"var(--font-size-xs)",borderRadius:"var(--radius-xs)"},medium:{checkboxSize:"16px",fontSize:"var(--font-size-base)",borderRadius:"var(--radius-xs)"},large:{checkboxSize:"20px",fontSize:"var(--font-size-md)",borderRadius:"var(--radius-sm)"}},I={default:{borderColor:"var(--color-neutral-300)",hoverBorderColor:"var(--color-text-tertiary)",focusBorderColor:"var(--color-primary)",activeBorderColor:"var(--color-primary)",shadowColor:"rgba(59, 130, 246, 0.2)"},error:{borderColor:"var(--color-error)",hoverBorderColor:"var(--color-error-hover)",focusBorderColor:"var(--color-error)",activeBorderColor:"var(--color-error)",shadowColor:"rgba(220, 38, 38, 0.2)"}};var Se={name:"1jkdpqt",styles:"opacity:0.6"};const ze=c("label",{target:"e4yni1s7"})("display:flex;align-items:",({size:e})=>e==="small"?"flex-start":"center",";gap:var(--spacing-xs);cursor:",({disabled:e})=>e?"not-allowed":"pointer",";user-select:none;position:relative;",({disabled:e})=>e&&Se,";"),De=c("input",{target:"e4yni1s6"})({name:"1qwdmuy",styles:"clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px"}),be=c("div",{target:"e4yni1s5"})("display:flex;align-items:center;justify-content:center;width:",({size:e})=>w[e].checkboxSize,";height:",({size:e})=>w[e].checkboxSize,";background-color:",({checked:e,indeterminate:l,disabled:o})=>e||l?o?"var(--color-neutral-400)":"var(--color-primary)":"var(--color-background)",";border:1px solid ",({checked:e,indeterminate:l,disabled:o,variant:t})=>e||l?o?"var(--color-neutral-400)":"var(--color-primary)":I[t].borderColor,";border-radius:",({size:e})=>w[e].borderRadius,";transition:all var(--transition-normal);flex-shrink:0;&:hover{border-color:",({checked:e,indeterminate:l,disabled:o,variant:t})=>!o&&!(e||l)?I[t].hoverBorderColor:null,";background-color:",({checked:e,indeterminate:l,disabled:o})=>e||l?o?null:"var(--color-primary-hover)":null,";}svg{visibility:",({checked:e,indeterminate:l})=>e||l?"visible":"hidden",";color:var(--color-text-inverse);}"),we=c("div",{target:"e4yni1s4"})("display:flex;align-items:center;&:focus-within:not(:has(input:disabled)){",be,"{border-color:",({variant:e})=>I[e].focusBorderColor,";box-shadow:0 0 0 2px ",({variant:e})=>I[e].shadowColor,";}}"),Ie=c("div",{target:"e4yni1s3"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),Re=c("span",{target:"e4yni1s2"})("font-size:",({size:e})=>w[e].fontSize,";color:var(--color-text);line-height:var(--line-height-normal);margin-top:",({size:e})=>e==="small"?"2px":"0",";"),Te=c("span",{target:"e4yni1s1"})("font-size:",({size:e})=>e==="large"?"var(--font-size-base)":"var(--font-size-xs)",";color:var(--color-text-tertiary);margin-top:var(--spacing-xxs);"),qe=c("span",{target:"e4yni1s0"})({name:"x2njcj",styles:"font-size:var(--font-size-xs);color:var(--color-error);margin-top:var(--spacing-xxs)"}),Ee=()=>a("svg",{width:"70%",height:"70%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a("polyline",{points:"20 6 9 17 4 12"})}),Le=()=>a("svg",{width:"70%",height:"70%",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}),n=m.forwardRef(({label:e,checked:l,defaultChecked:o,indeterminate:t=!1,size:s="medium",variant:d="default",disabled:p=!1,errorMessage:R,description:T,onChange:q,className:ve,style:fe,...Ce},xe)=>{const[L,M]=m.useState(o||!1),ke=ge.useRef(null),u=xe||ke;return m.useEffect(()=>{l!==void 0&&M(l)},[l]),m.useEffect(()=>{u.current&&(u.current.indeterminate=t)},[t,u]),a("div",{className:ve,style:fe,children:r(ze,{disabled:p,size:s,children:[r(we,{variant:d,disabled:p,children:[a(De,{type:"checkbox",ref:u,checked:L,onChange:N=>{const W=N.target.checked;l===void 0&&M(W),q==null||q(W,N)},disabled:p,tabIndex:p?-1:0,...Ce}),a(be,{checked:L,indeterminate:t,size:s,variant:d,disabled:p,children:t?a(Le,{}):a(Ee,{})})]}),(e||T||d==="error"&&R)&&r(Ie,{children:[e&&a(Re,{size:s,children:e}),T&&a(Te,{size:s,children:T}),d==="error"&&R&&a(qe,{children:R})]})]})})});n.displayName="Checkbox";n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Checkbox label"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state (uncontrolled component)"},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is in indeterminate state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Checkbox size",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"Checkbox variant",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is disabled",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display"},description:{required:!1,tsType:{name:"string"},description:"Description text to provide additional information"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when checkbox state changes"}}};const Me=c("fieldset",{target:"e1gnsq261"})("display:flex;flex-direction:",({direction:e})=>e==="horizontal"?"row":"column",";gap:var(--spacing-xs);border:none;flex-wrap:wrap;@media (max-width: 768px){flex-direction:column;}"),Ne=c("legend",{target:"e1gnsq260"})({name:"1mbt1kp",styles:"font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-bottom:var(--spacing-xxs)"}),h=({label:e,direction:l="vertical",children:o})=>r(Me,{direction:l,role:"group",children:[e&&a(Ne,{children:e}),o]});h.displayName="checkboxgroup";h.__docgenInfo={description:"",methods:[],displayName:"checkboxgroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label"},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout direction",defaultValue:{value:"'vertical'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Child checkbox components"}}};const E=ye,Ge={title:"Components/Checkbox",component:n,argTypes:{variant:{control:"select",options:["default","error"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"}}},g={args:{label:"Accept terms and conditions",onChange:i()}},b={args:{label:"Email notifications",description:"Receive email notifications when there are updates to your account.",onChange:i()}},v={args:{label:"Selected option",checked:!0,onChange:i()}},f={args:{label:"Disabled option",disabled:!0,onChange:i()}},C={args:{label:"Disabled checked option",checked:!0,disabled:!0,onChange:i()}},x={args:{label:"Required field",variant:"error",errorMessage:"This field is required",onChange:i()}},k={args:{label:"Select all items",indeterminate:!0,onChange:i()}},y={args:{label:r("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a(E,{iconName:"Verified",color:"var(--color-success)"}),"Verified option"]}),onChange:i()}},S={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a(n,{size:"small",label:"Small checkbox",description:"Compact size for dense UIs",onChange:i()}),a(n,{size:"medium",label:"Medium checkbox",description:"Default size for most use cases",onChange:i()}),a(n,{size:"large",label:"Large checkbox",description:"Larger size for better visibility or touch targets",onChange:i()})]})},z={render:()=>{const[e,l]=ge.useState(["gaming"]),o=t=>s=>{l(s?[...e,t]:e.filter(d=>d!==t))};return r("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r("div",{children:[a("h3",{children:"Vertical with Label"}),r(h,{label:"Select Hobbies",direction:"vertical",children:[a(n,{value:"reading",label:"Reading",checked:e.includes("reading"),onChange:o("reading")}),a(n,{value:"gaming",label:"Gaming",checked:e.includes("gaming"),onChange:o("gaming")}),a(n,{value:"traveling",label:"Traveling",checked:e.includes("traveling"),onChange:o("traveling")})]})]}),r("div",{children:[a("h3",{children:"Horizontal with Label"}),r(h,{label:"Select Preferences",direction:"horizontal",children:[a(n,{value:"email",label:"Email",checked:e.includes("email"),onChange:o("email")}),a(n,{value:"sms",label:r("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a(E,{iconName:"Message",color:"var(--color-primary)"}),"SMS"]}),checked:e.includes("sms"),onChange:o("sms")}),a(n,{value:"push",label:"Push",checked:e.includes("push"),onChange:o("push")})]})]}),r("div",{children:[a("h3",{children:"With Disabled Option"}),r(h,{label:"Select Options",children:[a(n,{value:"option1",label:"Option 1",checked:e.includes("option1"),onChange:o("option1")}),a(n,{value:"option2",label:"Option 2",checked:e.includes("option2"),onChange:o("option2")}),a(n,{value:"option3",label:"Option 3",disabled:!0,checked:e.includes("option3"),onChange:o("option3")})]})]}),r("div",{children:[a("h3",{children:"With Indeterminate"}),r(h,{label:"Select Items",children:[a(n,{value:"all",label:"Select All",indeterminate:e.length>0&&e.length<["item1","item2","item3"].length,checked:e.length===["item1","item2","item3"].length,onChange:t=>{l(t?["item1","item2","item3"]:[])}}),a(n,{value:"item1",label:"Item 1",checked:e.includes("item1"),onChange:o("item1")}),a(n,{value:"item2",label:"Item 2",checked:e.includes("item2"),onChange:o("item2")}),a(n,{value:"item3",label:"Item 3",checked:e.includes("item3"),onChange:o("item3")})]})]}),r("div",{style:{marginTop:"8px"},children:["Selected: ",e.join(", ")]})]})}},D={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r("div",{children:[a("h3",{children:"Basic States"}),r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a(n,{label:"Unchecked",onChange:i()}),a(n,{label:"Checked",checked:!0,onChange:i()}),a(n,{label:"Indeterminate",indeterminate:!0,onChange:i()}),a(n,{label:"Disabled",disabled:!0,onChange:i()}),a(n,{label:"Disabled Checked",checked:!0,disabled:!0,onChange:i()}),a(n,{label:"Disabled Indeterminate",indeterminate:!0,disabled:!0,onChange:i()})]})]}),r("div",{children:[a("h3",{children:"With Description"}),r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a(n,{label:"Enable notifications",description:"You'll receive notifications about important updates.",onChange:i()}),a(n,{label:"Share usage data",description:"Help us improve by sharing anonymous usage statistics.",checked:!0,onChange:i()})]})]}),r("div",{children:[a("h3",{children:"Error States"}),r("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a(n,{label:"Accept terms and conditions",variant:"error",errorMessage:"You must accept the terms to continue",onChange:i()}),a(n,{label:"Required field",variant:"error",errorMessage:"This field is required",checked:!0,onChange:i()})]})]}),r("div",{children:[a("h3",{children:"Custom Styling"}),a("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px",backgroundColor:"var(--color-neutral-100)",borderRadius:"var(--radius-md)"},children:a(n,{label:r("span",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-primary)"},children:[a(E,{iconName:"Star",color:"var(--color-warning)"}),"Premium feature"]}),description:"Unlock advanced features with our premium plan",onChange:i()})})]})]})};var j,B,O;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    onChange: fn()
  }
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var V,H,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    description: 'Receive email notifications when there are updates to your account.',
    onChange: fn()
  }
}`,...(G=(H=b.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var _,A,P;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Selected option',
    checked: true,
    onChange: fn()
  }
}`,...(P=(A=v.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var U,Y,F;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    disabled: true,
    onChange: fn()
  }
}`,...(F=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checked option',
    checked: true,
    disabled: true,
    onChange: fn()
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    variant: 'error',
    errorMessage: 'This field is required',
    onChange: fn()
  }
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Select all items',
    indeterminate: true,
    onChange: fn()
  }
}`,...(ne=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,te,ce;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox size="small" label="Small checkbox" description="Compact size for dense UIs" onChange={fn()} />
      <Checkbox size="medium" label="Medium checkbox" description="Default size for most use cases" onChange={fn()} />
      <Checkbox size="large" label="Large checkbox" description="Larger size for better visibility or touch targets" onChange={fn()} />
    </div>
}`,...(ce=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};var se,de,he;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['gaming']);
    const handleChange = (value: string) => (checked: boolean) => {
      if (checked) {
        setSelected([...selected, value]);
      } else {
        setSelected(selected.filter(id => id !== value));
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <h3>Vertical with Label</h3>
          <Checkboxgroup label="Select Hobbies" direction="vertical">
            <Checkbox value="reading" label="Reading" checked={selected.includes('reading')} onChange={handleChange('reading')} />
            <Checkbox value="gaming" label="Gaming" checked={selected.includes('gaming')} onChange={handleChange('gaming')} />
            <Checkbox value="traveling" label="Traveling" checked={selected.includes('traveling')} onChange={handleChange('traveling')} />
          </Checkboxgroup>
        </div>

        <div>
          <h3>Horizontal with Label</h3>
          <Checkboxgroup label="Select Preferences" direction="horizontal">
            <Checkbox value="email" label="Email" checked={selected.includes('email')} onChange={handleChange('email')} />
            <Checkbox value="sms" label={<span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
                  <MuiIconComponent iconName="Message" color="var(--color-primary)" />
                  SMS
                </span>} checked={selected.includes('sms')} onChange={handleChange('sms')} />
            <Checkbox value="push" label="Push" checked={selected.includes('push')} onChange={handleChange('push')} />
          </Checkboxgroup>
        </div>

        <div>
          <h3>With Disabled Option</h3>
          <Checkboxgroup label="Select Options">
            <Checkbox value="option1" label="Option 1" checked={selected.includes('option1')} onChange={handleChange('option1')} />
            <Checkbox value="option2" label="Option 2" checked={selected.includes('option2')} onChange={handleChange('option2')} />
            <Checkbox value="option3" label="Option 3" disabled checked={selected.includes('option3')} onChange={handleChange('option3')} />
          </Checkboxgroup>
        </div>

        <div>
          <h3>With Indeterminate</h3>
          <Checkboxgroup label="Select Items">
            <Checkbox value="all" label="Select All" indeterminate={selected.length > 0 && selected.length < ['item1', 'item2', 'item3'].length} checked={selected.length === ['item1', 'item2', 'item3'].length} onChange={checked => {
            if (checked) {
              setSelected(['item1', 'item2', 'item3']);
            } else {
              setSelected([]);
            }
          }} />
            <Checkbox value="item1" label="Item 1" checked={selected.includes('item1')} onChange={handleChange('item1')} />
            <Checkbox value="item2" label="Item 2" checked={selected.includes('item2')} onChange={handleChange('item2')} />
            <Checkbox value="item3" label="Item 3" checked={selected.includes('item3')} onChange={handleChange('item3')} />
          </Checkboxgroup>
        </div>

        <div style={{
        marginTop: '8px'
      }}>
          Selected: {selected.join(', ')}
        </div>
      </div>;
  }
}`,...(he=(de=z.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var pe,ue,me;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
          <Checkbox label="Unchecked" onChange={fn()} />
          <Checkbox label="Checked" checked onChange={fn()} />
          <Checkbox label="Indeterminate" indeterminate onChange={fn()} />
          <Checkbox label="Disabled" disabled onChange={fn()} />
          <Checkbox label="Disabled Checked" checked disabled onChange={fn()} />
          <Checkbox label="Disabled Indeterminate" indeterminate disabled onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>With Description</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Checkbox label="Enable notifications" description="You'll receive notifications about important updates." onChange={fn()} />
          <Checkbox label="Share usage data" description="Help us improve by sharing anonymous usage statistics." checked onChange={fn()} />
        </div>
      </div>
      
      <div>
        <h3>Error States</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Checkbox label="Accept terms and conditions" variant="error" errorMessage="You must accept the terms to continue" onChange={fn()} />
          <Checkbox label="Required field" variant="error" errorMessage="This field is required" checked onChange={fn()} />
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
          <Checkbox label={<span style={{
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
}`,...(me=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const _e=["Default","WithDescription","Checked","Disabled","DisabledChecked","Error","Indeterminate","WithReactNodeLabel","Sizes","CheckboxGroup","CompleteExample"];export{z as CheckboxGroup,v as Checked,D as CompleteExample,g as Default,f as Disabled,C as DisabledChecked,x as Error,k as Indeterminate,S as Sizes,b as WithDescription,y as WithReactNodeLabel,_e as __namedExportsOrder,Ge as default};
