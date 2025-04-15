import{a as u,j as r,c as o}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{r as g}from"./index-D4lIrffr.js";import{k as Ae,c as Ue}from"./emotion-react.browser.esm-aeVx2FFw.js";import{I as Ke}from"./iconComponent-C9ppoTYe.js";import{f as n}from"./index-D_Ss_HUe.js";import"./jsx-runtime-D_zvdyIk.js";const Ye=Ae`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ge=o("div",{target:"e1m3bj0c7"})("position:absolute;top:100%;left:0;right:0;margin-top:var(--spacing-xxs);background-color:var(--color-background);border:1px solid var(--color-neutral-300);border-radius:var(--radius-sm);box-shadow:var(--shadow-md);z-index:1000;max-height:",({maxHeight:e})=>e?`${e}px`:"250px",";overflow-y:auto;animation:",Ye," var(--transition-normal);"),Je=o("input",{target:"e1m3bj0c6"})({name:"1l17bz6",styles:"width:100%;border:none;padding:var(--spacing-xs);border-bottom:1px solid var(--color-neutral-200);outline:none;font-size:var(--font-size-sm);&:focus{border-bottom-color:var(--color-primary);}"}),Qe=o("ul",{target:"e1m3bj0c5"})({name:"z06qs",styles:"list-style:none;margin:0;padding:0"}),Xe=o("div",{target:"e1m3bj0c4"})({name:"1kcskfi",styles:"display:flex;align-items:center;color:var(--color-text-tertiary);svg,.MuiSvgIcon-root{width:var(--font-size-md)!important;height:var(--font-size-md)!important;font-size:var(--font-size-md)!important;color:var(--color-text-tertiary)!important;}"});var Ze={name:"166ywwl",styles:"background-color:var(--color-neutral-100)"},er={name:"o9ww1u",styles:"opacity:0.5"},rr={name:"co4ojm",styles:"background-color:var(--color-primary-light);color:var(--color-primary-dark);font-weight:500"};const ar=o("li",{target:"e1m3bj0c3"})("padding:var(--spacing-xs);cursor:",({isDisabled:e})=>e?"not-allowed":"pointer",";display:flex;align-items:center;gap:var(--spacing-xs);font-size:var(--font-size-sm);position:relative;",({isSelected:e})=>e&&rr," ",({isDisabled:e})=>e&&er," ",({isHighlighted:e,isDisabled:l})=>!l&&e&&Ze," &:hover:not(:disabled){background-color:",({isSelected:e})=>e?"var(--color-primary-light)":"var(--color-neutral-100)",";}"),tr=o("div",{target:"e1m3bj0c2"})({name:"1kjc15g",styles:"display:flex;align-items:center;flex:1;gap:var(--spacing-xs)"}),or=o("div",{target:"e1m3bj0c1"})({name:"a90s6z",styles:"width:16px;height:16px;display:flex;align-items:center;justify-content:center;margin-left:auto;color:var(--color-text-tertiary);&::before{content:'';display:block;width:5px;height:10px;border-right:1px solid currentColor;border-bottom:1px solid currentColor;transform:rotate(45deg);}"}),nr=o("div",{target:"e1m3bj0c0"})({name:"jabsy2",styles:"padding:var(--spacing-xs);color:var(--color-text-tertiary);text-align:center;font-size:var(--font-size-sm)"}),Ve=({options:e,selectedValues:l,highlightedIndex:b,searchable:y,searchTerm:T,multiple:q,maxHeight:$=250,onOptionSelect:I,onSearchChange:S})=>{const w=g.useRef(null);return g.useEffect(()=>{y&&w.current&&w.current.focus()},[y]),u(Ge,{maxHeight:$,children:[y&&r(Je,{ref:w,value:T,onChange:S,placeholder:"Search...",onClick:p=>p.stopPropagation()}),r(Qe,{role:"listbox","aria-multiselectable":q,children:e.length>0?e.map((p,x)=>{const C=l.includes(p.value);return u(ar,{isSelected:C,isDisabled:p.disabled,isHighlighted:x===b,onClick:()=>!p.disabled&&I(p.value),role:"option","aria-selected":C,"aria-disabled":p.disabled,children:[u(tr,{children:[p.icon&&r(Xe,{children:p.icon}),p.label]}),C&&r(or,{})]},p.value)}):r(nr,{children:"No options found"})})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"SelectOption[]"},description:""},selectedValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},highlightedIndex:{required:!0,tsType:{name:"number"},description:""},searchable:{required:!0,tsType:{name:"boolean"},description:""},searchTerm:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},onOptionSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSearchChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const lr=Ae`
  to {
    transform: rotate(360deg);
  }
`,ir=o("div",{target:"e8iupep13"})("display:flex;flex-direction:column;width:",({fluid:e})=>e?"100%":"fit-content",";position:relative;font-family:var(--font-family);"),sr=o("label",{target:"e8iupep12"})({name:"1mbt1kp",styles:"font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-bottom:var(--spacing-xxs)"}),cr=o("span",{target:"e8iupep11"})({name:"x2njcj",styles:"font-size:var(--font-size-xs);color:var(--color-error);margin-top:var(--spacing-xxs)"}),M={default:{borderColor:"var(--color-neutral-300)",hoverBorderColor:"var(--color-text-tertiary)",focusBorderColor:"var(--color-primary)"},error:{borderColor:"var(--color-error)",hoverBorderColor:"var(--color-error-hover)",focusBorderColor:"var(--color-error)"}},dr={small:{fontSize:"var(--font-size-xs)",height:"1.625rem",padding:"0 var(--spacing-xxs)"},medium:{fontSize:"var(--font-size-base)",height:"2.125rem",padding:"0 var(--spacing-xs)"},large:{fontSize:"var(--font-size-md)",height:"2.625rem",padding:"0 var(--spacing-sm)"}};var ur={name:"1jkdpqt",styles:"opacity:0.6"},pr={name:"1d3w5wq",styles:"width:100%"};const mr=o("div",{target:"e8iupep10"})("display:flex;align-items:center;justify-content:space-between;border:1px solid ",({variant:e,isOpen:l})=>l?M[e].focusBorderColor:M[e].borderColor,";border-radius:var(--radius-sm);background-color:",({disabled:e})=>e?"var(--color-neutral-100)":"var(--color-background)",";cursor:",({disabled:e})=>e?"not-allowed":"pointer",";transition:all var(--transition-normal);user-select:none;",({size:e})=>dr[e],";",({fluid:e})=>e&&pr,";",({disabled:e})=>e&&ur,";&:hover:not(:disabled){border-color:",({variant:e})=>M[e].hoverBorderColor,";}",({isOpen:e,variant:l})=>e&&Ue("border-color:",M[l].focusBorderColor,";box-shadow:0 0 0 2px ",l==="error"?"rgba(220, 38, 38, 0.2)":"rgba(59, 130, 246, 0.2)",";",""),";"),gr=o("div",{target:"e8iupep9"})({name:"xn42v",styles:"display:flex;align-items:center;flex:1;min-width:0;gap:var(--spacing-xxs);padding:0 var(--spacing-xs) 0 0"}),Y=o("div",{target:"e8iupep8"})({name:"1kcskfi",styles:"display:flex;align-items:center;color:var(--color-text-tertiary);svg,.MuiSvgIcon-root{width:var(--font-size-md)!important;height:var(--font-size-md)!important;font-size:var(--font-size-md)!important;color:var(--color-text-tertiary)!important;}"}),Z=o("div",{target:"e8iupep7"})({name:"1rrh910",styles:"color:var(--color-text-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap"}),fr=o("div",{target:"e8iupep6"})({name:"to4lj9",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0"}),hr=o("div",{target:"e8iupep5"})({name:"km2kt9",styles:"display:flex;flex-wrap:wrap;gap:var(--spacing-xxs);max-width:100%"}),br=o("div",{target:"e8iupep4"})({name:"ea7d1h",styles:"display:flex;align-items:center;background-color:var(--color-neutral-200);border-radius:var(--radius-sm);padding:0 var(--spacing-xxs);font-size:var(--font-size-xs);max-width:150px;span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"}),vr=o("button",{target:"e8iupep3"})({name:"aptp8e",styles:"display:flex;align-items:center;justify-content:center;background:none;border:none;color:var(--color-text-tertiary);cursor:pointer;margin-left:var(--spacing-xxs);padding:0;font-size:var(--font-size-sm);&:hover{color:var(--color-primary);}"}),yr=o("div",{target:"e8iupep2"})("border:2px solid var(--color-background);border-top:2px solid var(--color-primary);border-radius:50%;width:16px;height:16px;animation:",lr," 1s linear infinite;margin-right:var(--spacing-xs);"),xr=o("span",{target:"e8iupep1"})("border-style:solid;border-width:0.15em 0.15em 0 0;content:'';display:inline-block;height:0.45em;width:0.45em;position:relative;transform:",({isOpen:e})=>e?"rotate(-45deg)":"rotate(135deg)",";transition:transform var(--transition-fast);"),Sr=o("button",{target:"e8iupep0"})({name:"hzimvc",styles:"background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary);padding:0 var(--spacing-xxs);margin-right:var(--spacing-xs);&:hover{color:var(--color-primary);}&::before,&::after{content:'';position:absolute;width:2px;height:10px;background-color:currentColor;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}"}),d=({options:e,value:l,defaultValue:b,placeholder:y="Select an option",label:T,variant:q="default",size:$="medium",fluid:I=!1,disabled:S=!1,searchable:w=!1,clearable:p=!1,multiple:x=!1,loading:C=!1,startIcon:G,errorMessage:J,maxDropdownHeight:We=250,onChange:m,onSearch:U})=>{const[f,D]=g.useState(!1),[E,Q]=g.useState(""),[z,L]=g.useState(-1),[h,k]=g.useState(()=>l!==void 0?Array.isArray(l)?l:l?[l]:[]:b!==void 0?Array.isArray(b)?b:b?[b]:[]:[]),K=g.useRef(null);g.useEffect(()=>{l!==void 0&&k(Array.isArray(l)?l:l?[l]:[])},[l]),g.useEffect(()=>{const a=t=>{K.current&&!K.current.contains(t.target)&&D(!1)};return f&&document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[f]),g.useEffect(()=>{const a=t=>{if(!f)return;const s=e.filter(c=>!c.disabled&&c.label.toLowerCase().includes(E.toLowerCase()));switch(t.key){case"ArrowDown":t.preventDefault(),L(c=>c<s.length-1?c+1:0);break;case"ArrowUp":t.preventDefault(),L(c=>c>0?c-1:s.length-1);break;case"Enter":t.preventDefault(),z>=0&&z<s.length&&X(s[z].value);break;case"Escape":D(!1);break}};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[f,z,e,E]);const Fe=()=>{S||(D(!f),L(-1),Q(""))},X=a=>{let t;x?(h.includes(a)?t=h.filter(s=>s!==a):t=[...h,a],k(t),m==null||m(t)):(t=[a],k(t),m==null||m(a),D(!1))},_e=a=>{a.stopPropagation(),k([]),m==null||m(x?[]:"")},Be=a=>{const t=a.target.value;Q(t),L(-1),U==null||U(t)},Pe=(a,t)=>{a.stopPropagation();const s=h.filter(c=>c!==t);k(s),m==null||m(s)},He=()=>{if(h.length===0)return r(Z,{children:y});if(x)return r(hr,{children:h.map(t=>{const s=e.find(c=>c.value===t);return s?u(br,{children:[s.icon&&r(Y,{children:s.icon}),r("span",{children:s.label}),r(vr,{onClick:c=>Pe(c,t),"aria-label":`Remove ${s.label}`,children:"×"})]},t):null})});const a=e.find(t=>t.value===h[0]);return a?u(fr,{children:[a.icon&&r(Y,{children:a.icon}),a.label]}):r(Z,{children:y})},$e=e.filter(a=>a.label.toLowerCase().includes(E.toLowerCase()));return u(ir,{fluid:I,ref:K,children:[T&&r(sr,{children:T}),u(mr,{variant:q,size:$,fluid:I,disabled:S,isOpen:f,onClick:Fe,tabIndex:0,role:"combobox","aria-expanded":f,"aria-haspopup":"listbox",children:[u(gr,{children:[G&&r(Y,{children:G}),He()]}),u("div",{style:{display:"flex",alignItems:"center"},children:[C&&r(yr,{}),p&&h.length>0&&!S&&r(Sr,{onClick:_e,"aria-label":"Clear selection",type:"button"}),r(xr,{isOpen:f})]})]}),f&&r(Ve,{options:$e,selectedValues:h,highlightedIndex:z,searchable:w,searchTerm:E,multiple:x,maxHeight:We,onOptionSelect:X,onSearchChange:Be}),q==="error"&&J&&r(cr,{children:J})]})};d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},maxDropdownHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchTerm: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchTerm"}],return:{name:"void"}}},description:""}}};const v=Ke,Ir={title:"Components/Select",component:d,argTypes:{variant:{control:"select",options:["default","error"]},size:{control:"select",options:["small","medium","large"]},fluid:{control:"boolean"},disabled:{control:"boolean"},searchable:{control:"boolean"},clearable:{control:"boolean"},multiple:{control:"boolean"},loading:{control:"boolean"}}},i=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"br",label:"Brazil"},{value:"ar",label:"Argentina",disabled:!0},{value:"cl",label:"Chile"},{value:"cn",label:"China"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"},{value:"in",label:"India"},{value:"gb",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"it",label:"Italy"},{value:"es",label:"Spain"}],Oe=[{value:"us",label:"United States",icon:r(v,{iconName:"Flag"})},{value:"ca",label:"Canada",icon:r(v,{iconName:"Flag"})},{value:"mx",label:"Mexico",icon:r(v,{iconName:"Flag"})},{value:"br",label:"Brazil",icon:r(v,{iconName:"Flag"})},{value:"ar",label:"Argentina",disabled:!0,icon:r(v,{iconName:"Flag"})}],R={args:{options:i,label:"Select a country",placeholder:"Choose a country",onChange:n()}},j={args:{options:Oe,label:"Select a country",placeholder:"Choose a country",startIcon:r(v,{iconName:"Public"}),onChange:n()}},N={args:{options:i,label:"Searchable Select",placeholder:"Search and select...",searchable:!0,onChange:n()}},A={args:{options:i,label:"Clearable Select",placeholder:"Select with clear button",clearable:!0,defaultValue:"us",onChange:n()}},V={args:{options:i,label:"Multiple Selection",placeholder:"Select multiple countries",multiple:!0,defaultValue:["us","ca"],onChange:n()}},O={args:{options:i,label:"Multiple Selection with Search",placeholder:"Search and select multiple",multiple:!0,searchable:!0,clearable:!0,onChange:n()}},W={args:{options:i,label:"Disabled Select",placeholder:"Cannot be changed",disabled:!0,defaultValue:"us",onChange:n()}},F={args:{options:i,label:"Error State",placeholder:"Invalid selection",variant:"error",errorMessage:"Please select a valid country",onChange:n()}},_={args:{options:i,label:"Loading State",placeholder:"Loading options...",loading:!0,onChange:n()}},B={render:()=>u("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r(d,{options:i,label:"Small Size",placeholder:"Small dropdown",size:"small",onChange:n()}),r(d,{options:i,label:"Medium Size (Default)",placeholder:"Medium dropdown",size:"medium",onChange:n()}),r(d,{options:i,label:"Large Size",placeholder:"Large dropdown",size:"large",onChange:n()})]})},P={render:()=>r("div",{style:{width:"300px"},children:r(d,{options:i,label:"Full Width",placeholder:"Width 100%",fluid:!0,onChange:n()})})},H={render:()=>u("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[r("h3",{children:"Default States"}),u("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(d,{options:i,placeholder:"Default",fluid:!0,onChange:n()}),r(d,{options:i,placeholder:"With Label",label:"Country",fluid:!0,onChange:n()})]}),r("h3",{children:"Feature Combinations"}),u("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r(d,{options:Oe,label:"Icons + Searchable",placeholder:"Search countries",startIcon:r(v,{iconName:"Search"}),searchable:!0,fluid:!0,onChange:n()}),r(d,{options:i,label:"Multiple + Clearable",placeholder:"Select multiple",multiple:!0,clearable:!0,fluid:!0,onChange:n()}),r(d,{options:i,label:"All Features",placeholder:"Complete select",multiple:!0,searchable:!0,clearable:!0,fluid:!0,onChange:n()})]}),r("h3",{children:"States"}),u("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r(d,{options:i,label:"Error State",placeholder:"Error",variant:"error",errorMessage:"Please make a selection",fluid:!0,onChange:n()}),r(d,{options:i,label:"Disabled State",placeholder:"Disabled",disabled:!0,fluid:!0,onChange:n()}),r(d,{options:i,label:"Loading State",placeholder:"Loading...",loading:!0,fluid:!0,onChange:n()})]})]})};var ee,re,ae;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Select a country',
    placeholder: 'Choose a country',
    onChange: fn()
  }
}`,...(ae=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    options: iconCountries,
    label: 'Select a country',
    placeholder: 'Choose a country',
    startIcon: <MuiIconComponent iconName="Public" />,
    onChange: fn()
  }
}`,...(ne=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ie,se;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Searchable Select',
    placeholder: 'Search and select...',
    searchable: true,
    onChange: fn()
  }
}`,...(se=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,de,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Clearable Select',
    placeholder: 'Select with clear button',
    clearable: true,
    defaultValue: 'us',
    onChange: fn()
  }
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Multiple Selection',
    placeholder: 'Select multiple countries',
    multiple: true,
    defaultValue: ['us', 'ca'],
    onChange: fn()
  }
}`,...(ge=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,he,be;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Multiple Selection with Search',
    placeholder: 'Search and select multiple',
    multiple: true,
    searchable: true,
    clearable: true,
    onChange: fn()
  }
}`,...(be=(he=O.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,ye,xe;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Disabled Select',
    placeholder: 'Cannot be changed',
    disabled: true,
    defaultValue: 'us',
    onChange: fn()
  }
}`,...(xe=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Se,we,Ce;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Error State',
    placeholder: 'Invalid selection',
    variant: 'error',
    errorMessage: 'Please select a valid country',
    onChange: fn()
  }
}`,...(Ce=(we=F.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var ze,ke,Te;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Loading State',
    placeholder: 'Loading options...',
    loading: true,
    onChange: fn()
  }
}`,...(Te=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var qe,Ie,De;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Select options={countries} label="Small Size" placeholder="Small dropdown" size="small" onChange={fn()} />
      <Select options={countries} label="Medium Size (Default)" placeholder="Medium dropdown" size="medium" onChange={fn()} />
      <Select options={countries} label="Large Size" placeholder="Large dropdown" size="large" onChange={fn()} />
    </div>
}`,...(De=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Ee,Le,Me;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Select options={countries} label="Full Width" placeholder="Width 100%" fluid onChange={fn()} />
    </div>
}`,...(Me=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Re,je,Ne;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '500px'
  }}>
      <h3>Default States</h3>
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <Select options={countries} placeholder="Default" fluid onChange={fn()} />
        <Select options={countries} placeholder="With Label" label="Country" fluid onChange={fn()} />
      </div>
      
      <h3>Feature Combinations</h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Select options={iconCountries} label="Icons + Searchable" placeholder="Search countries" startIcon={<MuiIconComponent iconName="Search" />} searchable fluid onChange={fn()} />
        <Select options={countries} label="Multiple + Clearable" placeholder="Select multiple" multiple clearable fluid onChange={fn()} />
        <Select options={countries} label="All Features" placeholder="Complete select" multiple searchable clearable fluid onChange={fn()} />
      </div>
      
      <h3>States</h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Select options={countries} label="Error State" placeholder="Error" variant="error" errorMessage="Please make a selection" fluid onChange={fn()} />
        <Select options={countries} label="Disabled State" placeholder="Disabled" disabled fluid onChange={fn()} />
        <Select options={countries} label="Loading State" placeholder="Loading..." loading fluid onChange={fn()} />
      </div>
    </div>
}`,...(Ne=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};const Dr=["Default","WithIcons","Searchable","Clearable","MultiSelect","MultiSelectWithSearch","DisabledSelect","ErrorState","Loading","CustomSizes","Fluid","CompleteExample"];export{A as Clearable,H as CompleteExample,B as CustomSizes,R as Default,W as DisabledSelect,F as ErrorState,P as Fluid,_ as Loading,V as MultiSelect,O as MultiSelectWithSearch,N as Searchable,j as WithIcons,Dr as __namedExportsOrder,Ir as default};
