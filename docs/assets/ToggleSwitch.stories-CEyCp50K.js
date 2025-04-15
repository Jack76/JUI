import{a as b,j as t,c as N}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{f as g}from"./index-D_Ss_HUe.js";import{r as i}from"./index-D4lIrffr.js";import{P as _e,a as Oe,u as Ie,c as Ne}from"./index-u9xh5UcD.js";import{j as w}from"./jsx-runtime-D_zvdyIk.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";function Ve(e,o=[]){let r=[];function d(u,s){const a=i.createContext(s),l=r.length;r=[...r,s];const m=h=>{var v;const{scope:p,children:S,...f}=h,y=((v=p==null?void 0:p[e])==null?void 0:v[l])||a,k=i.useMemo(()=>f,Object.values(f));return w.jsx(y.Provider,{value:k,children:S})};m.displayName=u+"Provider";function C(h,p){var y;const S=((y=p==null?void 0:p[e])==null?void 0:y[l])||a,f=i.useContext(S);if(f)return f;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${u}\``)}return[m,C]}const n=()=>{const u=r.map(s=>i.createContext(s));return function(a){const l=(a==null?void 0:a[e])||u;return i.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return n.scopeName=e,[d,$e(n,...o)]}function $e(...e){const o=e[0];if(e.length===1)return o;const r=()=>{const d=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(u){const s=d.reduce((a,{useScope:l,scopeName:m})=>{const h=l(u)[`__scope${m}`];return{...a,...h}},{});return i.useMemo(()=>({[`__scope${o.scopeName}`]:s}),[s])}};return r.scopeName=o.scopeName,r}function He(e){const o=i.useRef({value:e,previous:e});return i.useMemo(()=>(o.current.value!==e&&(o.current.previous=o.current.value,o.current.value=e),o.current.previous),[e])}var Ae=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{};function Be(e){const[o,r]=i.useState(void 0);return Ae(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const d=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const u=n[0];let s,a;if("borderBoxSize"in u){const l=u.borderBoxSize,m=Array.isArray(l)?l[0]:l;s=m.inlineSize,a=m.blockSize}else s=e.offsetWidth,a=e.offsetHeight;r({width:s,height:a})});return d.observe(e,{box:"border-box"}),()=>d.unobserve(e)}else r(void 0)},[e]),o}var V="Switch",[Ue,ir]=Ve(V),[Xe,Ge]=Ue(V),Le=i.forwardRef((e,o)=>{const{__scopeSwitch:r,name:d,checked:n,defaultChecked:u,required:s,disabled:a,value:l="on",onCheckedChange:m,form:C,...h}=e,[p,S]=i.useState(null),f=Oe(o,z=>S(z)),y=i.useRef(!1),k=p?C||!!p.closest("form"):!0,[v=!1,Re]=Ie({prop:n,defaultProp:u,onChange:m});return w.jsxs(Xe,{scope:r,checked:v,disabled:a,children:[w.jsx(_e.button,{type:"button",role:"switch","aria-checked":v,"aria-required":s,"data-state":qe(v),"data-disabled":a?"":void 0,disabled:a,value:l,...h,ref:f,onClick:Ne(e.onClick,z=>{Re(Fe=>!Fe),k&&(y.current=z.isPropagationStopped(),y.current||z.stopPropagation())})}),k&&w.jsx(Je,{control:p,bubbles:!y.current,name:d,value:l,checked:v,required:s,disabled:a,form:C,style:{transform:"translateX(-100%)"}})]})});Le.displayName=V;var Me="SwitchThumb",je=i.forwardRef((e,o)=>{const{__scopeSwitch:r,...d}=e,n=Ge(Me,r);return w.jsx(_e.span,{"data-state":qe(n.checked),"data-disabled":n.disabled?"":void 0,...d,ref:o})});je.displayName=Me;var Je=e=>{const{control:o,checked:r,bubbles:d=!0,...n}=e,u=i.useRef(null),s=He(r),a=Be(o);return i.useEffect(()=>{const l=u.current,m=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(m,"checked").set;if(s!==r&&h){const p=new Event("click",{bubbles:d});h.call(l,r),l.dispatchEvent(p)}},[s,r,d]),w.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...n,tabIndex:-1,ref:u,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function qe(e){return e?"checked":"unchecked"}var Ke=Le,Qe=je;const Ye=N("div",{target:"eothy3i3"})("display:inline-flex;align-items:center;gap:var(--spacing-xs);width:",({fluid:e})=>e?"100%":"auto",";opacity:",({disabled:e})=>e?"0.6":"1",";cursor:",({disabled:e})=>e?"not-allowed":"pointer",";"),Ze=N("label",{target:"eothy3i2"})("font-family:var(--font-family);font-size:var(--font-size-base);color:var(--color-text);cursor:",({disabled:e})=>e?"not-allowed":"pointer",";"),$={primary:{backgroundColor:"var(--color-primary)",hoverColor:"var(--color-primary-hover)"},secondary:{backgroundColor:"var(--color-secondary)",hoverColor:"var(--color-secondary-hover)"},success:{backgroundColor:"var(--color-success)",hoverColor:"var(--color-success)"},warning:{backgroundColor:"var(--color-warning)",hoverColor:"var(--color-warning)"},error:{backgroundColor:"var(--color-error)",hoverColor:"var(--color-error-hover)"}},x={small:{width:"32px",height:"16px",thumbSize:"12px"},medium:{width:"44px",height:"22px",thumbSize:"18px"},large:{width:"56px",height:"28px",thumbSize:"24px"}},er=N(Ke,{target:"eothy3i1"})("all:unset;width:",({size:e})=>x[e].width,";height:",({size:e})=>x[e].height,';background-color:var(--color-neutral-300);border-radius:var(--radius-full);position:relative;transition:var(--transition-normal);&:hover{background-color:var(--color-neutral-400);}&[data-state="checked"]{background-color:',({color:e})=>$[e].backgroundColor,";&:hover{background-color:",({color:e})=>$[e].hoverColor,";}}&:focus-visible{outline:2px solid var(--color-primary);outline-offset:2px;box-shadow:0 0 0 4px rgba(25, 118, 210, 0.12);}"),rr=N(Qe,{target:"eothy3i0"})("display:block;width:",({size:e})=>x[e].thumbSize,";height:",({size:e})=>x[e].thumbSize,';background-color:white;border-radius:50%;box-shadow:var(--shadow-sm);transition:var(--transition-normal);transform:translateX(2px);will-change:transform;&[data-state="checked"]{transform:translateX(calc(',({size:e})=>x[e].width," - ",({size:e})=>x[e].thumbSize," - 2px));}"),c=({checked:e,defaultChecked:o,disabled:r=!1,size:d="medium",label:n,color:u="primary",fluid:s=!1,onChange:a,id:l,className:m,style:C,...h})=>{const p=l||i.useId();return b(Ye,{className:m,style:C,fluid:s,disabled:r,children:[t(er,{id:p,checked:e,defaultChecked:o,disabled:r,size:d,color:u,onCheckedChange:f=>{!r&&a&&a(f)},...h,children:t(rr,{size:d})}),n&&t(Ze,{htmlFor:p,disabled:r,onClick:f=>{r&&f.preventDefault()},children:n})]})};c.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const dr={title:"Components/ToggleSwitch",component:c,argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"select",options:["primary","secondary","success","warning","error"]},disabled:{control:"boolean"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},fluid:{control:"boolean"},label:{control:"text"}}},T={args:{color:"primary",size:"medium",label:"Toggle switch",onChange:g()}},P={args:{color:"secondary",size:"medium",label:"Toggle switch",onChange:g()}},E={args:{color:"success",size:"medium",label:"Toggle switch",onChange:g()}},W={args:{color:"warning",size:"medium",label:"Toggle switch",onChange:g()}},D={args:{color:"error",size:"medium",label:"Toggle switch",onChange:g()}},_={args:{color:"primary",size:"small",label:"Small toggle",onChange:g()}},L={args:{color:"primary",size:"medium",label:"Medium toggle",onChange:g()}},M={args:{color:"primary",size:"large",label:"Large toggle",onChange:g()}},j={args:{color:"primary",size:"medium",onChange:g()}},q={args:{color:"primary",size:"medium",label:"Disabled toggle",disabled:!0,onChange:g()}},R={args:{color:"primary",size:"medium",label:"Disabled checked toggle",disabled:!0,defaultChecked:!0,onChange:g()}},F={args:{color:"primary",size:"medium",label:"Full width toggle",fluid:!0,onChange:g()}},O={render:()=>{const[e,o]=i.useState(!1);return b("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t(c,{checked:e,onChange:o,label:`Controlled toggle (${e?"ON":"OFF"})`}),t("button",{onClick:()=>o(!e),children:"Toggle from outside"})]})}},I={render:()=>b("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[b("div",{children:[t("h3",{children:"Color Variants"}),b("div",{style:{display:"flex",gap:"24px",marginTop:"12px",flexWrap:"wrap"},children:[t(c,{color:"primary",label:"Primary",defaultChecked:!0}),t(c,{color:"secondary",label:"Secondary",defaultChecked:!0}),t(c,{color:"success",label:"Success",defaultChecked:!0}),t(c,{color:"warning",label:"Warning",defaultChecked:!0}),t(c,{color:"error",label:"Error",defaultChecked:!0})]})]}),b("div",{children:[t("h3",{children:"Sizes"}),b("div",{style:{display:"flex",gap:"24px",marginTop:"12px",flexWrap:"wrap",alignItems:"center"},children:[t(c,{size:"small",label:"Small",defaultChecked:!0}),t(c,{size:"medium",label:"Medium",defaultChecked:!0}),t(c,{size:"large",label:"Large",defaultChecked:!0})]})]}),b("div",{children:[t("h3",{children:"States"}),b("div",{style:{display:"flex",gap:"24px",marginTop:"12px",flexWrap:"wrap"},children:[t(c,{label:"Unchecked"}),t(c,{label:"Checked",defaultChecked:!0}),t(c,{label:"Disabled unchecked",disabled:!0}),t(c,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})]}),b("div",{children:[t("h3",{children:"Without Labels"}),b("div",{style:{display:"flex",gap:"24px",marginTop:"12px",flexWrap:"wrap"},children:[t(c,{size:"small"}),t(c,{size:"medium",defaultChecked:!0}),t(c,{size:"large"})]})]})]})};var H,A,B;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn()
  }
}`,...(B=(A=T.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var U,X,G;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn()
  }
}`,...(G=(X=P.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,K,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    color: 'success',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn()
  }
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;W.parameters={...W.parameters,docs:{...(Y=W.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn()
  }
}`,...(ee=(Z=W.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,ae;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    color: 'error',
    size: 'medium',
    label: 'Toggle switch',
    onChange: fn()
  }
}`,...(ae=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,se,ne;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'small',
    label: 'Small toggle',
    onChange: fn()
  }
}`,...(ne=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ce,ie;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Medium toggle',
    onChange: fn()
  }
}`,...(ie=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'large',
    label: 'Large toggle',
    onChange: fn()
  }
}`,...(pe=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,ge;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    onChange: fn()
  }
}`,...(ge=(he=j.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,be,Ce;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Disabled toggle',
    disabled: true,
    onChange: fn()
  }
}`,...(Ce=(be=q.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ye,ve,Se;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Disabled checked toggle',
    disabled: true,
    defaultChecked: true,
    onChange: fn()
  }
}`,...(Se=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var xe,we,ke;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    label: 'Full width toggle',
    fluid: true,
    onChange: fn()
  }
}`,...(ke=(we=F.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var ze,Te,Pe;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <ToggleSwitch checked={checked} onChange={setChecked} label={\`Controlled toggle (\${checked ? 'ON' : 'OFF'})\`} />
        <button onClick={() => setChecked(!checked)}>
          Toggle from outside
        </button>
      </div>;
  }
}`,...(Pe=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Ee,We,De;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3>Color Variants</h3>
        <div style={{
        display: 'flex',
        gap: '24px',
        marginTop: '12px',
        flexWrap: 'wrap'
      }}>
          <ToggleSwitch color="primary" label="Primary" defaultChecked />
          <ToggleSwitch color="secondary" label="Secondary" defaultChecked />
          <ToggleSwitch color="success" label="Success" defaultChecked />
          <ToggleSwitch color="warning" label="Warning" defaultChecked />
          <ToggleSwitch color="error" label="Error" defaultChecked />
        </div>
      </div>
      
      <div>
        <h3>Sizes</h3>
        <div style={{
        display: 'flex',
        gap: '24px',
        marginTop: '12px',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          <ToggleSwitch size="small" label="Small" defaultChecked />
          <ToggleSwitch size="medium" label="Medium" defaultChecked />
          <ToggleSwitch size="large" label="Large" defaultChecked />
        </div>
      </div>
      
      <div>
        <h3>States</h3>
        <div style={{
        display: 'flex',
        gap: '24px',
        marginTop: '12px',
        flexWrap: 'wrap'
      }}>
          <ToggleSwitch label="Unchecked" />
          <ToggleSwitch label="Checked" defaultChecked />
          <ToggleSwitch label="Disabled unchecked" disabled />
          <ToggleSwitch label="Disabled checked" disabled defaultChecked />
        </div>
      </div>
      
      <div>
        <h3>Without Labels</h3>
        <div style={{
        display: 'flex',
        gap: '24px',
        marginTop: '12px',
        flexWrap: 'wrap'
      }}>
          <ToggleSwitch size="small" />
          <ToggleSwitch size="medium" defaultChecked />
          <ToggleSwitch size="large" />
        </div>
      </div>
    </div>
}`,...(De=(We=I.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};const ur=["Primary","Secondary","Success","Warning","Error","Small","Medium","Large","WithoutLabel","Disabled","DisabledChecked","Fluid","ControlledExample","StateExamples"];export{O as ControlledExample,q as Disabled,R as DisabledChecked,D as Error,F as Fluid,M as Large,L as Medium,T as Primary,P as Secondary,_ as Small,I as StateExamples,E as Success,W as Warning,j as WithoutLabel,ur as __namedExportsOrder,dr as default};
