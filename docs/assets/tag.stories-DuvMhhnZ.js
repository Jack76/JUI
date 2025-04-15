import{j as r,a as i,c as m}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{r as Se}from"./index-D4lIrffr.js";import{c as R,k as he}from"./emotion-react.browser.esm-aeVx2FFw.js";import{T as we}from"./tooltip-DjUmN4lg.js";import{I as We}from"./iconComponent-C9ppoTYe.js";import{f as a}from"./index-D_Ss_HUe.js";import"./jsx-runtime-D_zvdyIk.js";const ze=he`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Re=he`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`,De={small:{fontSize:"var(--font-size-xs)",padding:"0.125rem 0.5rem",height:"1.25rem"},medium:{fontSize:"var(--font-size-sm)",padding:"0.25rem 0.75rem",height:"1.5rem"},large:{fontSize:"var(--font-size-base)",padding:"0.375rem 1rem",height:"2rem"}},s={default:{backgroundColor:"var(--color-neutral-200)",color:"var(--color-text)",hoverBackground:"var(--color-neutral-300)",selectedBackground:"var(--color-neutral-400)"},error:{backgroundColor:"var(--color-error-light)",color:"var(--color-error-dark)",hoverBackground:"var(--color-error-light-hover)",selectedBackground:"var(--color-error-light-active)"},success:{backgroundColor:"var(--color-success-light)",color:"var(--color-success-dark)",hoverBackground:"var(--color-success-light-hover)",selectedBackground:"var(--color-success-light-active)"},warning:{backgroundColor:"var(--color-warning-light)",color:"var(--color-warning-dark)",hoverBackground:"var(--color-warning-light-active)",selectedBackground:"var(--color-warning)"}},Ie=m("div",{target:"ebn5bbt4"})("display:inline-flex;align-items:center;width:",({fluid:e})=>e?"100%":"fit-content",";animation:",({isRemoving:e})=>e?R(Re," var(--transition-normal) forwards;",""):R(ze," var(--transition-normal);",""),";");var Le={name:"1ag411s",styles:"opacity:0.6;cursor:not-allowed"};const qe=m("div",{target:"ebn5bbt3"})("display:inline-flex;align-items:center;gap:var(--spacing-xxs);border-radius:var(--radius-sm);background-color:",({variant:e,isSelected:l})=>l?s[e].selectedBackground:s[e].backgroundColor,";color:",({variant:e})=>s[e].color,";transition:background-color var(--transition-normal),transform var(--transition-fast);cursor:",({clickable:e,disabled:l})=>l?"not-allowed":e?"pointer":"default",";max-width:",({maxWidth:e})=>e||"200px",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",({size:e})=>De[e],";",({disabled:e})=>e&&Le,";",({clickable:e,variant:l,disabled:w,isSelected:W})=>e&&!w&&!W&&R("&:hover{background-color:",s[l].hoverBackground,";}",""),";&:focus{outline:2px solid ",({variant:e})=>s[e].color==="var(--color-text)"?"var(--color-primary)":s[e].color,";outline-offset:2px;}"),Be=m("span",{target:"ebn5bbt2"})({name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"}),Fe=m("button",{target:"ebn5bbt1"})({name:"1tou02x",styles:"display:flex;align-items:center;background:none;border:none;color:var(--color-text-tertiary);cursor:pointer;padding:0;font-size:var(--font-size-sm);&:hover{color:var(--color-primary);}"}),Ee=m("span",{target:"ebn5bbt0"})({name:"1kcskfi",styles:"display:flex;align-items:center;color:var(--color-text-tertiary);svg,.MuiSvgIcon-root{width:var(--font-size-md)!important;height:var(--font-size-md)!important;font-size:var(--font-size-md)!important;color:var(--color-text-tertiary)!important;}"}),o=({label:e,variant:l="default",size:w="medium",removable:W=!1,clickable:c=!1,disabled:n=!1,isSelected:I=!1,icon:L,fluid:ke=!1,maxWidth:q,onClick:t,onRemove:z})=>{const[xe,ye]=Se.useState(!1),Ce=d=>{d.stopPropagation(),ye(!0),setTimeout(()=>{z==null||z(e)},300)},Te=()=>{!n&&c&&(t==null||t(e))};return r(Ie,{fluid:ke,isRemoving:xe,children:r(we,{content:e,disabled:!q||e.length<=20,theme:"dark",placement:"right",hasArrow:!0,size:"default",trigger:"hover",animationDuration:"normal",children:i(qe,{variant:l,size:w,disabled:n,clickable:c,isSelected:I,maxWidth:q,onClick:Te,role:c?"button":"status","aria-disabled":n,"aria-selected":I,tabIndex:c&&!n?0:void 0,onKeyDown:d=>{c&&!n&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),t==null||t(e))},children:[L&&r(Ee,{children:L}),r(Be,{children:e}),W&&!n&&r(Fe,{onClick:Ce,"aria-label":`Remove ${e}`,type:"button",children:"×"})]})})})};o.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},removable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""}}};const D=We,Oe={title:"Components/Tag",component:o,argTypes:{variant:{control:"select",options:["default","error","success","warning"]},size:{control:"select",options:["small","medium","large"]},removable:{control:"boolean"},clickable:{control:"boolean"},disabled:{control:"boolean"},isSelected:{control:"boolean"},fluid:{control:"boolean"},maxWidth:{control:"text"},icon:{control:{type:"boolean"}}}},u={args:{label:"Tag",onClick:a(),onRemove:a()}},p={args:{label:"Completed",variant:"success",onClick:a()}},g={args:{label:"Pending",variant:"warning",onClick:a()}},f={args:{label:"Failed",variant:"error",onClick:a()}},b={args:{label:"Category",icon:r(D,{iconName:"Label"}),onClick:a()}},v={args:{label:"Filter",removable:!0,onRemove:a()}},h={args:{label:"Clickable",clickable:!0,onClick:a()}},k={args:{label:"Selected",isSelected:!0,clickable:!0,onClick:a()}},x={args:{label:"Disabled",disabled:!0,removable:!0,onClick:a(),onRemove:a()}},y={args:{label:"This is a very long tag label that should truncate and show tooltip",maxWidth:"150px",onClick:a()}},C={render:()=>r("div",{style:{width:"300px"},children:r(o,{label:"Full Width Tag",fluid:!0,onClick:a()})})},T={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r(o,{label:"Small",size:"small",onClick:a()}),r(o,{label:"Medium",size:"medium",onClick:a()}),r(o,{label:"Large",size:"large",onClick:a()})]})},S={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[r("h3",{children:"Variants"}),i("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(o,{label:"Default",onClick:a()}),r(o,{label:"Success",variant:"success",onClick:a()}),r(o,{label:"Warning",variant:"warning",onClick:a()}),r(o,{label:"Error",variant:"error",onClick:a()})]}),r("h3",{children:"States"}),i("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(o,{label:"Clickable",clickable:!0,onClick:a()}),r(o,{label:"Selected",isSelected:!0,clickable:!0,onClick:a()}),r(o,{label:"Disabled",disabled:!0,removable:!0,onClick:a(),onRemove:a()}),r(o,{label:"Removable",removable:!0,onRemove:a()})]}),r("h3",{children:"Features"}),i("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(o,{label:"With Icon",icon:r(D,{iconName:"Label"}),onClick:a()}),r(o,{label:"Long Label Truncated",maxWidth:"100px",removable:!0,onRemove:a()}),r(o,{label:"All Features",icon:r(D,{iconName:"Check"}),removable:!0,clickable:!0,isSelected:!0,onClick:a(),onRemove:a()})]})]})};var B,F,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Tag',
    onClick: fn(),
    onRemove: fn()
  }
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var N,V,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Completed',
    variant: 'success',
    onClick: fn()
  }
}`,...(M=(V=p.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var _,j,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    variant: 'warning',
    onClick: fn()
  }
}`,...(A=(j=g.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var P,O,K;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Failed',
    variant: 'error',
    onClick: fn()
  }
}`,...(K=(O=f.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var $,G,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    icon: <MuiIconComponent iconName="Label" />,
    onClick: fn()
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Filter',
    removable: true,
    onRemove: fn()
  }
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Clickable',
    clickable: true,
    onClick: fn()
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Selected',
    isSelected: true,
    clickable: true,
    onClick: fn()
  }
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,le,ne;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    removable: true,
    onClick: fn(),
    onRemove: fn()
  }
}`,...(ne=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var te,se,ie;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'This is a very long tag label that should truncate and show tooltip',
    maxWidth: '150px',
    onClick: fn()
  }
}`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,de,me;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Tag label="Full Width Tag" fluid onClick={fn()} />
    </div>
}`,...(me=(de=C.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ge;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Tag label="Small" size="small" onClick={fn()} />
      <Tag label="Medium" size="medium" onClick={fn()} />
      <Tag label="Large" size="large" onClick={fn()} />
    </div>
}`,...(ge=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,be,ve;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '500px'
  }}>
      <h3>Variants</h3>
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Tag label="Default" onClick={fn()} />
        <Tag label="Success" variant="success" onClick={fn()} />
        <Tag label="Warning" variant="warning" onClick={fn()} />
        <Tag label="Error" variant="error" onClick={fn()} />
      </div>

      <h3>States</h3>
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Tag label="Clickable" clickable onClick={fn()} />
        <Tag label="Selected" isSelected clickable onClick={fn()} />
        <Tag label="Disabled" disabled removable onClick={fn()} onRemove={fn()} />
        <Tag label="Removable" removable onRemove={fn()} />
      </div>

      <h3>Features</h3>
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Tag label="With Icon" icon={<MuiIconComponent iconName="Label" />} onClick={fn()} />
        <Tag label="Long Label Truncated" maxWidth="100px" removable onRemove={fn()} />
        <Tag label="All Features" icon={<MuiIconComponent iconName="Check" />} removable clickable isSelected onClick={fn()} onRemove={fn()} />
      </div>
    </div>
}`,...(ve=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};const Ke=["Default","Success","Warning","Error","WithIcon","Removable","Clickable","Selected","Disabled","LongLabelWithTooltip","Fluid","Sizes","CompleteExample"];export{h as Clickable,S as CompleteExample,u as Default,x as Disabled,f as Error,C as Fluid,y as LongLabelWithTooltip,v as Removable,k as Selected,T as Sizes,p as Success,g as Warning,b as WithIcon,Ke as __namedExportsOrder,Oe as default};
