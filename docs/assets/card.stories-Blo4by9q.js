import{j as e,c as o,a as r,F as s}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{B as n}from"./button-OkMReHDI.js";import{I as T}from"./iconComponent-C9ppoTYe.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./index-u9xh5UcD.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./emotion-react.browser.esm-aeVx2FFw.js";const de=o("div",{target:"e1vx997d0"})("display:flex;flex-direction:column;border-radius:var(--radius-lg);background-color:var(--color-background);overflow:hidden;transition:var(--transition-normal);position:relative;",({variant:i="elevated"})=>{switch(i){case"elevated":return{boxShadow:"var(--shadow-md)","&:hover":{boxShadow:"var(--shadow-lg)"}};case"outlined":return{border:"1px solid var(--color-divider)","&:hover":{borderColor:"var(--color-divider-hover)"}};case"filled":return{backgroundColor:"var(--color-surface-2)","&:hover":{backgroundColor:"var(--color-surface-3)"}};default:return{}}},({size:i="medium"})=>{switch(i){case"small":return{borderRadius:"var(--radius-md)"};case"large":return{borderRadius:"var(--radius-xl)"};default:return{borderRadius:"var(--radius-lg)"}}},({isInteractive:i})=>i&&{cursor:"pointer",transition:"var(--transition-normal)","&:hover":{transform:"translateY(-2px)"},"&:active":{transform:"translateY(0)"}},({isDisabled:i})=>i&&{opacity:.6,cursor:"not-allowed",pointerEvents:"none"},""),p=({variant:i="elevated",size:c="medium",isInteractive:u=!1,isDisabled:d=!1,onClick:h,children:m,...ie})=>e(de,{variant:i,size:c,isInteractive:u||!!h,isDisabled:d,onClick:d?void 0:h,...ie,children:m});p.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'elevated' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'elevated'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'elevated'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isInteractive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLDivElement"}],raw:"MouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const k=o("div",{target:"e1vvwjpf5"})({name:"1c4cs1r",styles:"display:flex;align-items:center;justify-content:space-between;padding:var(--spacing-md) var(--spacing-lg);border-bottom:1px solid var(--color-divider);position:relative"}),ne=o("h3",{target:"e1vvwjpf4"})({name:"1rx9x0a",styles:"margin:0;font-size:var(--font-size-md);font-weight:var(--font-weight-medium);line-height:var(--line-height-tight);color:var(--color-text)"}),oe=o("p",{target:"e1vvwjpf3"})({name:"1j9uuz0",styles:"margin:0.25rem 0 0;font-size:var(--font-size-base);line-height:var(--line-height-normal);color:var(--color-text-secondary)"}),se=o("div",{target:"e1vvwjpf2"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),le=o("div",{target:"e1vvwjpf1"})({name:"sz7nmf",styles:"display:flex;align-items:center;gap:var(--spacing-sm)"}),W=o("div",{target:"e1vvwjpf0"})({name:"ogkary",styles:"position:absolute;top:var(--spacing-sm);right:var(--spacing-sm)"}),a=({title:i,subtitle:c,action:u,iconButton:d,children:h,...m})=>h?r(k,{...m,children:[h,d&&e(W,{children:e(n,{variant:"ghost",size:"iconSmall",onClick:d.onClick,disabled:d.disabled,children:e(T,{iconName:d.iconName})})})]}):r(k,{...m,children:[r(se,{children:[i&&e(ne,{children:i}),c&&e(oe,{children:c})]}),u&&e(le,{children:u}),d&&e(W,{children:e(n,{variant:"ghost",size:"iconSmall",onClick:d.onClick,disabled:d.disabled,children:e(T,{iconName:d.iconName})})})]});a.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},iconButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  iconName: string;
  onClick?: () => void;
  disabled?: boolean;
}`,signature:{properties:[{key:"iconName",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const ce=o("div",{target:"ebod95t0"})({name:"8rauui",styles:"padding:var(--spacing-lg);flex:1 1 auto;font-size:var(--font-size-base);line-height:var(--line-height-normal);color:var(--color-text);& p{margin:0 0 var(--spacing-md);&:last-child{margin-bottom:0;}}& ul, & ol{margin:0 0 var(--spacing-md);padding-left:var(--spacing-lg);&:last-child{margin-bottom:0;}}"}),t=({children:i,...c})=>e(ce,{...c,children:i});t.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const pe=o("div",{target:"ee208ls0"})({name:"19jf8bk",styles:"display:flex;align-items:center;justify-content:flex-end;padding:var(--spacing-md) var(--spacing-lg);border-top:1px solid var(--color-divider);gap:var(--spacing-sm)"}),l=({children:i,...c})=>e(pe,{...c,children:i});l.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const xe={title:"Components/Card",component:p,subcomponents:{CardHeader:a,CardBody:t,CardFooter:l},parameters:{componentSubtitle:"A container for content that groups related information and actions"},argTypes:{variant:{control:"select",options:["elevated","outlined","filled"],description:"The visual style of the card"},size:{control:"select",options:["small","medium","large"],description:"The size of the card, affecting border radius"},isInteractive:{control:"boolean",description:"Whether the card has interactive hover effects"},isDisabled:{control:"boolean",description:"Whether the card is disabled"}}},v={args:{variant:"elevated",size:"medium",style:{maxWidth:"400px"},children:r(s,{children:[e(a,{title:"Card Title",subtitle:"Card Subtitle"}),e(t,{children:e("p",{children:"This is a basic card with a header, body, and footer. Cards can be used to group related content and actions."})}),r(l,{children:[e(n,{variant:"ghost",children:"Cancel"}),e(n,{children:"Submit"})]})]})}},C={args:{variant:"outlined",size:"medium",style:{maxWidth:"400px"},children:r(s,{children:[e(a,{title:"Outlined Card",subtitle:"With a subtle border"}),e(t,{children:e("p",{children:"This card uses the outlined variant which has a border instead of a shadow."})}),e(l,{children:e(n,{variant:"outline",children:"Learn More"})})]})}},g={args:{variant:"filled",size:"medium",style:{maxWidth:"400px"},children:r(s,{children:[e(a,{title:"Filled Card",subtitle:"With a background color"}),e(t,{children:e("p",{children:"This card uses the filled variant which has a subtle background color."})}),e(l,{children:e(n,{children:"Action"})})]})}},y={args:{variant:"elevated",isInteractive:!0,style:{maxWidth:"400px",cursor:"pointer"},onClick:()=>alert("Card clicked!"),children:r(s,{children:[e(a,{title:"Interactive Card",subtitle:"Click me!"}),e(t,{children:e("p",{children:"This card is interactive. Try clicking on it!"})})]})}},f={args:{variant:"elevated",size:"small",style:{maxWidth:"300px"},children:r(s,{children:[e(a,{title:"Small Card"}),e(t,{children:e("p",{children:"This is a small card with a more compact border radius."})})]})}},b={args:{variant:"elevated",size:"large",style:{maxWidth:"500px"},children:r(s,{children:[e(a,{title:"Large Card",subtitle:"With a larger border radius"}),e(t,{children:e("p",{children:"This is a large card with a more prominent border radius."})}),e(l,{children:e(n,{children:"Action"})})]})}},x={args:{variant:"elevated",style:{maxWidth:"400px"},children:r(s,{children:[e(a,{children:r("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"var(--color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"AB"}),r("div",{children:[e("h3",{style:{margin:0},children:"Custom Header"}),e("p",{style:{margin:0,fontSize:"var(--font-size-sm)",color:"var(--color-text-secondary)"},children:"With avatar"})]})]})}),e(t,{children:e("p",{children:"This card demonstrates a custom header layout with an avatar."})}),e(l,{children:e(n,{children:"Action"})})]})}},w={args:{variant:"elevated",isDisabled:!0,style:{maxWidth:"400px"},children:r(s,{children:[e(a,{title:"Disabled Card",subtitle:"Cannot be interacted with"}),e(t,{children:e("p",{children:"This card is disabled and cannot be interacted with."})}),e(l,{children:e(n,{disabled:!0,children:"Action"})})]})}},B={render:()=>r("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px"},children:[r(p,{variant:"elevated",style:{width:"300px"},children:[e(a,{title:"Elevated Card"}),e(t,{children:"Standard card with shadow"})]}),r(p,{variant:"outlined",style:{width:"300px"},children:[e(a,{title:"Outlined Card"}),e(t,{children:"Card with border"})]}),r(p,{variant:"filled",style:{width:"300px"},children:[e(a,{title:"Filled Card"}),e(t,{children:"Card with background"})]}),r(p,{variant:"elevated",isInteractive:!0,style:{width:"300px"},children:[e(a,{title:"Interactive Card"}),e(t,{children:"Card with hover effect"})]}),r(p,{variant:"elevated",isDisabled:!0,style:{width:"300px"},children:[e(a,{title:"Disabled Card"}),e(t,{children:"Card in disabled state"})]}),r(p,{variant:"elevated",size:"small",style:{width:"300px"},children:[e(a,{title:"Small Card"}),e(t,{children:"Card with small radius"})]})]})},S={args:{variant:"elevated",size:"medium",style:{maxWidth:"400px"},children:r(s,{children:[e(a,{title:"Card with Icon Button",subtitle:"Icon button in top-right corner",iconButton:{iconName:"Close",onClick:()=>alert("Icon button clicked!")}}),e(t,{children:e("p",{children:"This card has an icon button in the top-right corner for additional actions."})}),r(l,{children:[e(n,{variant:"ghost",children:"Cancel"}),e(n,{children:"Submit"})]})]})}};var I,z,H;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    size: 'medium',
    style: {
      maxWidth: '400px'
    },
    children: <>
        <CardHeader title="Card Title" subtitle="Card Subtitle" />
        <CardBody>
          <p>This is a basic card with a header, body, and footer. Cards can be used to group related content and actions.</p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </>
  }
}`,...(H=(z=v.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var F,q,N;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    size: 'medium',
    style: {
      maxWidth: '400px'
    },
    children: <>
        <CardHeader title="Outlined Card" subtitle="With a subtle border" />
        <CardBody>
          <p>This card uses the outlined variant which has a border instead of a shadow.</p>
        </CardBody>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </>
  }
}`,...(N=(q=C.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,j,D;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    size: 'medium',
    style: {
      maxWidth: '400px'
    },
    children: <>
        <CardHeader title="Filled Card" subtitle="With a background color" />
        <CardBody>
          <p>This card uses the filled variant which has a subtle background color.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
  }
}`,...(D=(j=g.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var A,E,_;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    isInteractive: true,
    style: {
      maxWidth: '400px',
      cursor: 'pointer'
    },
    onClick: () => alert('Card clicked!'),
    children: <>
        <CardHeader title="Interactive Card" subtitle="Click me!" />
        <CardBody>
          <p>This card is interactive. Try clicking on it!</p>
        </CardBody>
      </>
  }
}`,...(_=(E=y.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var L,M,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    size: 'small',
    style: {
      maxWidth: '300px'
    },
    children: <>
        <CardHeader title="Small Card" />
        <CardBody>
          <p>This is a small card with a more compact border radius.</p>
        </CardBody>
      </>
  }
}`,...(P=(M=f.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var O,V,Y;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    size: 'large',
    style: {
      maxWidth: '500px'
    },
    children: <>
        <CardHeader title="Large Card" subtitle="With a larger border radius" />
        <CardBody>
          <p>This is a large card with a more prominent border radius.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
  }
}`,...(Y=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    style: {
      maxWidth: '400px'
    },
    children: <>
        <CardHeader>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
            <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
              AB
            </div>
            <div>
              <h3 style={{
              margin: 0
            }}>Custom Header</h3>
              <p style={{
              margin: 0,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)'
            }}>With avatar</p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <p>This card demonstrates a custom header layout with an avatar.</p>
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    isDisabled: true,
    style: {
      maxWidth: '400px'
    },
    children: <>
        <CardHeader title="Disabled Card" subtitle="Cannot be interacted with" />
        <CardBody>
          <p>This card is disabled and cannot be interacted with.</p>
        </CardBody>
        <CardFooter>
          <Button disabled>Action</Button>
        </CardFooter>
      </>
  }
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px'
  }}>
      <Card variant="elevated" style={{
      width: '300px'
    }}>
        <CardHeader title="Elevated Card" />
        <CardBody>Standard card with shadow</CardBody>
      </Card>
      
      <Card variant="outlined" style={{
      width: '300px'
    }}>
        <CardHeader title="Outlined Card" />
        <CardBody>Card with border</CardBody>
      </Card>
      
      <Card variant="filled" style={{
      width: '300px'
    }}>
        <CardHeader title="Filled Card" />
        <CardBody>Card with background</CardBody>
      </Card>
      
      <Card variant="elevated" isInteractive style={{
      width: '300px'
    }}>
        <CardHeader title="Interactive Card" />
        <CardBody>Card with hover effect</CardBody>
      </Card>
      
      <Card variant="elevated" isDisabled style={{
      width: '300px'
    }}>
        <CardHeader title="Disabled Card" />
        <CardBody>Card in disabled state</CardBody>
      </Card>
      
      <Card variant="elevated" size="small" style={{
      width: '300px'
    }}>
        <CardHeader title="Small Card" />
        <CardBody>Card with small radius</CardBody>
      </Card>
    </div>
}`,...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    size: 'medium',
    style: {
      maxWidth: '400px'
    },
    children: <>
        <CardHeader title="Card with Icon Button" subtitle="Icon button in top-right corner" iconButton={{
        iconName: 'Close',
        onClick: () => alert('Icon button clicked!')
      }} />
        <CardBody>
          <p>This card has an icon button in the top-right corner for additional actions.</p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </>
  }
}`,...(te=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const we=["Basic","Outlined","Filled","Interactive","Small","Large","CustomHeader","Disabled","Variations","WithIconButton"];export{v as Basic,x as CustomHeader,w as Disabled,g as Filled,y as Interactive,b as Large,C as Outlined,f as Small,B as Variations,S as WithIconButton,we as __namedExportsOrder,xe as default};
