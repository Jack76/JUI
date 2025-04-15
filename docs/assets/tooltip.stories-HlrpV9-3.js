import{j as t,a as lt}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{T as e}from"./tooltip-DjUmN4lg.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./emotion-react.browser.esm-aeVx2FFw.js";const ht={title:"Components/Tooltip",component:e,argTypes:{theme:{control:"select",options:["dark","light"]},placement:{control:"select",options:["top","bottom","left","right"]},hasArrow:{control:"boolean"},size:{control:"select",options:["small","default","wide"]},trigger:{control:"select",options:["hover","click"]},animationDuration:{control:"select",options:["fast","normal"]},disabled:{control:"boolean"},content:{control:"text"}},decorators:[pt=>t("div",{style:{padding:"100px",minHeight:"500px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:t(pt,{})})]},o={args:{content:"This is a tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),theme:"dark",placement:"top",hasArrow:!0,size:"default",trigger:"hover",animationDuration:"normal"}},n={args:{content:"Light theme tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),theme:"light"}},r={args:{content:"Tooltip without arrow",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),hasArrow:!1}},a={args:{content:"Bottom tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),placement:"bottom"}},i={args:{content:"Left tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),placement:"left"}},s={args:{content:"Right tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),placement:"right"}},p={args:{content:"Small tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),size:"small"}},l={args:{content:"A very wide tooltip with long content.",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),size:"wide"}},c={args:{content:"Click to toggle tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Click me"}),trigger:"click"}},d={args:{content:"Fast animation tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),animationDuration:"fast"}},m={args:{content:"Disabled tooltip",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),disabled:!0}},g={args:{content:"This is a very long tooltip content that demonstrates how the tooltip handles extended text.",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"}),size:"wide"}},u={render:()=>t("div",{style:{position:"absolute",top:"10px",left:"10px"},children:t(e,{content:"Tooltip near top-left edge",placement:"bottom",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"})})})},h={render:()=>t("div",{style:{position:"absolute",bottom:"10px",right:"10px"},children:t(e,{content:"Tooltip near bottom-right edge",placement:"top",children:t("button",{style:{padding:"8px 16px"},children:"Hover me"})})})},x={render:()=>lt("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px",padding:"100px",minHeight:"500px",justifyContent:"center",alignItems:"center"},children:[t(e,{content:"Dark Top",theme:"dark",placement:"top",children:t("button",{style:{padding:"8px 16px"},children:"Dark Top"})}),t(e,{content:"Light Bottom",theme:"light",placement:"bottom",children:t("button",{style:{padding:"8px 16px"},children:"Light Bottom"})}),t(e,{content:"No Arrow Left",hasArrow:!1,placement:"left",children:t("button",{style:{padding:"8px 16px"},children:"No Arrow Left"})}),t(e,{content:"Small Right",size:"small",placement:"right",children:t("button",{style:{padding:"8px 16px"},children:"Small Right"})}),t(e,{content:"Click Trigger",trigger:"click",children:t("button",{style:{padding:"8px 16px"},children:"Click Trigger"})}),t(e,{content:"Fast Animation",animationDuration:"fast",children:t("button",{style:{padding:"8px 16px"},children:"Fast Animation"})})]})};var b,y,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    theme: 'dark',
    placement: 'top',
    hasArrow: true,
    size: 'default',
    trigger: 'hover',
    animationDuration: 'normal'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,T,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: 'Light theme tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    theme: 'light'
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var H,S,k;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip without arrow',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    hasArrow: false
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,A,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: 'Bottom tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    placement: 'bottom'
  }
}`,...(L=(A=a.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var D,z,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    content: 'Left tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    placement: 'left'
  }
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var R,F,E;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: 'Right tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    placement: 'right'
  }
}`,...(E=(F=s.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var j,N,P;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'Small tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    size: 'small'
  }
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var W,I,_;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    content: 'A very wide tooltip with long content.',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    size: 'wide'
  }
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var O,q,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    content: 'Click to toggle tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Click me</button>,
    trigger: 'click'
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    content: 'Fast animation tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    animationDuration: 'fast'
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,V;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    content: 'Disabled tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    disabled: true
  }
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    content: 'This is a very long tooltip content that demonstrates how the tooltip handles extended text.',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover me</button>,
    size: 'wide'
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,tt,et;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'absolute',
    top: '10px',
    left: '10px'
  }}>
      <Tooltip content="Tooltip near top-left edge" placement="bottom">
        <button style={{
        padding: '8px 16px'
      }}>Hover me</button>
      </Tooltip>
    </div>
}`,...(et=(tt=u.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var ot,nt,rt;h.parameters={...h.parameters,docs:{...(ot=h.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  }}>
      <Tooltip content="Tooltip near bottom-right edge" placement="top">
        <button style={{
        padding: '8px 16px'
      }}>Hover me</button>
      </Tooltip>
    </div>
}`,...(rt=(nt=h.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var at,it,st;x.parameters={...x.parameters,docs:{...(at=x.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    padding: '100px',
    minHeight: '500px',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Tooltip content="Dark Top" theme="dark" placement="top">
        <button style={{
        padding: '8px 16px'
      }}>Dark Top</button>
      </Tooltip>
      <Tooltip content="Light Bottom" theme="light" placement="bottom">
        <button style={{
        padding: '8px 16px'
      }}>Light Bottom</button>
      </Tooltip>
      <Tooltip content="No Arrow Left" hasArrow={false} placement="left">
        <button style={{
        padding: '8px 16px'
      }}>No Arrow Left</button>
      </Tooltip>
      <Tooltip content="Small Right" size="small" placement="right">
        <button style={{
        padding: '8px 16px'
      }}>Small Right</button>
      </Tooltip>
      <Tooltip content="Click Trigger" trigger="click">
        <button style={{
        padding: '8px 16px'
      }}>Click Trigger</button>
      </Tooltip>
      <Tooltip content="Fast Animation" animationDuration="fast">
        <button style={{
        padding: '8px 16px'
      }}>Fast Animation</button>
      </Tooltip>
    </div>
}`,...(st=(it=x.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};const xt=["Default","LightTheme","NoArrow","BottomPlacement","LeftPlacement","RightPlacement","SmallSize","WideSize","ClickTrigger","FastAnimation","Disabled","LongContent","EdgeCaseTopLeft","EdgeCaseBottomRight","CompleteExample"];export{a as BottomPlacement,c as ClickTrigger,x as CompleteExample,o as Default,m as Disabled,h as EdgeCaseBottomRight,u as EdgeCaseTopLeft,d as FastAnimation,i as LeftPlacement,n as LightTheme,g as LongContent,r as NoArrow,s as RightPlacement,p as SmallSize,l as WideSize,xt as __namedExportsOrder,ht as default};
