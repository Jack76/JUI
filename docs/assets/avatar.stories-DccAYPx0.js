import{a as s,j as r,c as o}from"./emotion-styled-base.browser.esm-DBP-p-hR.js";import{r as F,R as B}from"./index-D4lIrffr.js";import{I as u}from"./iconComponent-C9ppoTYe.js";import"./jsx-runtime-D_zvdyIk.js";const gr={xs:{size:"1.5rem",fontSize:"var(--font-size-xs)",statusSize:"0.375rem"},sm:{size:"2rem",fontSize:"var(--font-size-sm)",statusSize:"0.5rem"},md:{size:"2.5rem",fontSize:"var(--font-size-base)",statusSize:"0.625rem"},lg:{size:"3rem",fontSize:"var(--font-size-md)",statusSize:"0.75rem"},xl:{size:"4rem",fontSize:"var(--font-size-lg)",statusSize:"0.875rem"}},yr={online:"var(--color-success)",offline:"var(--color-neutral-400)",away:"var(--color-warning)",busy:"var(--color-error)",none:"transparent"},br=t=>{const e=["#116dff","#7c3aed","#10d070","#ff9500","#3ebff5","#ff7eb6","#a78bfa"];let i=0;for(let c=0;c<t.length;c++)i=t.charCodeAt(c)+((i<<5)-i);return e[Math.abs(i)%e.length]},wr=o("div",{target:"e10yfvcm6"})({name:"1nrevy2",styles:"position:relative;display:inline-block"});var Cr={name:"1t9r0a6",styles:"border:2px solid var(--color-background);box-shadow:var(--shadow-xs)"};const fr=o("div",{target:"e10yfvcm5"})("position:relative;display:inline-flex;align-items:center;justify-content:center;width:",t=>t.size,";height:",t=>t.size,";background-color:",t=>t.backgroundColor,";border-radius:",t=>t.shape==="circle"?"50%":"var(--radius-sm)",";overflow:hidden;color:var(--color-text-inverse);font-weight:var(--font-weight-medium);z-index:",t=>t.zIndex||"auto",";opacity:",t=>t.faded?.7:1,";transition:var(--transition-fast);",t=>t.bordered&&Cr," &:hover{opacity:1;}"),kr=o("img",{target:"e10yfvcm4"})({name:"4uwt2b",styles:"width:100%;height:100%;object-fit:cover"});var Sr={name:"1oed5gc",styles:"box-shadow:var(--shadow-xs)"};const Gr=o("div",{target:"e10yfvcm3"})("position:absolute;width:",t=>t.size,";height:",t=>t.size,";background-color:",t=>yr[t.status||"none"],";border-radius:50%;bottom:0;right:0;border:1.5px solid var(--color-background);z-index:2;",t=>t.status!=="none"&&Sr,";"),P=o("div",{target:"e10yfvcm2"})("font-size:",t=>t.fontSize,";font-weight:var(--font-weight-medium);text-transform:uppercase;color:var(--color-text-inverse);display:flex;align-items:center;justify-content:center;width:100%;height:100%;user-select:none;"),a=({src:t,alt:e="avatar",size:i="md",shape:c="circle",fallback:p,initials:h,backgroundColor:V,status:n="none",bordered:N=!1,className:g,onError:v,zIndex:q,faded:f=!1,...l})=>{const[d,E]=F.useState(!1),A=gr[i],Ar=V||br(h||e),zr=m=>{E(!0),v&&v(m)};F.useEffect(()=>{E(!1)},[t]);const xr=()=>{if(h){const m=h.substring(0,2);return r(P,{fontSize:A.fontSize,children:m})}else{if(p)return p;if(t&&!d)return r(kr,{src:t,alt:e,onError:zr});{const m=e.charAt(0);return r(P,{fontSize:A.fontSize,children:m})}}};return s(wr,{className:g,children:[r(fr,{size:A.size,shape:c,backgroundColor:Ar,bordered:N,zIndex:q,faded:f,...l,children:xr()}),n!=="none"&&r(Gr,{status:n,size:A.statusSize})]})},Ir=o("div",{target:"e10yfvcm1"})("display:inline-flex;align-items:center;&>*{margin-right:-",t=>t.overlapOffset,"px;}&>*:last-child{margin-right:0;}"),Dr=o(fr,{target:"e10yfvcm0"})({name:"13vyt0b",styles:"display:inline-flex;align-items:center;justify-content:center;font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);color:var(--color-text-inverse);z-index:1"}),Vr=({children:t,max:e=5,overflowPosition:i="end",overlapOffset:c=8,size:p="md",borderColor:h="var(--color-background)",className:V})=>{const n=B.Children.toArray(t),N=n.length,g=e?n.slice(0,e):n,v=Math.max(0,N-(e||0)),q=g.map((l,d)=>B.isValidElement(l)?B.cloneElement(l,{key:d,zIndex:g.length-d,size:l.props.size||p,bordered:!0,faded:d!==0}):l),f=v>0?s(Dr,{size:gr[p].size,shape:"circle",backgroundColor:"var(--color-neutral-500)",bordered:!0,zIndex:0,children:["+",v]}):null;return s(Ir,{className:V,overlapOffset:c,children:[i==="start"&&f,q,i==="end"&&f]})};a.Group=Vr;a.__docgenInfo={description:"Avatar component for displaying user images, initials or icons",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  max = 5,
  overflowPosition = 'end',
  overlapOffset = 8,
  size = 'md',
  borderColor = 'var(--color-background)',
  className,
}`,optional:!1,type:null}],returns:null}],displayName:"Avatar",props:{alt:{defaultValue:{value:"'avatar'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},shape:{defaultValue:{value:"'circle'",computed:!1},required:!1},status:{defaultValue:{value:"'none'",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1},faded:{defaultValue:{value:"false",computed:!1},required:!1}}};const Fr={title:"Components/Avatar",component:a,argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},shape:{control:"select",options:["circle","square"]},status:{control:"select",options:["online","offline","away","busy","none"]},bordered:{control:"boolean"}}},z={args:{src:"https://i.pravatar.cc/300",alt:"User Avatar",size:"md"}},x={args:{initials:"JD",size:"md"}},y={args:{src:"invalid-url",fallback:r(u,{iconName:"Person",color:"white"}),size:"md"}},b={args:{src:"https://i.pravatar.cc/300",status:"online",size:"md"}},w={args:{src:"https://i.pravatar.cc/300",bordered:!0,size:"md"}},C={args:{src:"https://i.pravatar.cc/300",shape:"square",size:"md"}},k={render:()=>s("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[r(a,{size:"xs",src:"https://i.pravatar.cc/300?img=1"}),r(a,{size:"sm",src:"https://i.pravatar.cc/300?img=2"}),r(a,{size:"md",src:"https://i.pravatar.cc/300?img=3"}),r(a,{size:"lg",src:"https://i.pravatar.cc/300?img=4"}),r(a,{size:"xl",src:"https://i.pravatar.cc/300?img=5"})]})},S={render:()=>s("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[r(a,{initials:"AB",size:"xs"}),r(a,{initials:"CD",size:"sm"}),r(a,{initials:"EF",size:"md"}),r(a,{initials:"GH",size:"lg"}),r(a,{initials:"IJ",size:"xl"})]})},G={render:()=>s("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[r(a,{src:"https://i.pravatar.cc/300?img=11",status:"online"}),r(a,{src:"https://i.pravatar.cc/300?img=12",status:"offline"}),r(a,{src:"https://i.pravatar.cc/300?img=13",status:"away"}),r(a,{src:"https://i.pravatar.cc/300?img=14",status:"busy"}),r(a,{src:"https://i.pravatar.cc/300?img=15",status:"none"})]})},I={render:()=>s("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[s("div",{children:[r("h3",{children:"Default Group (max 5)"}),s(a.Group,{children:[r(a,{src:"https://i.pravatar.cc/300?img=21"}),r(a,{src:"https://i.pravatar.cc/300?img=22"}),r(a,{src:"https://i.pravatar.cc/300?img=23"}),r(a,{src:"https://i.pravatar.cc/300?img=24"}),r(a,{src:"https://i.pravatar.cc/300?img=25"}),r(a,{src:"https://i.pravatar.cc/300?img=26"}),r(a,{src:"https://i.pravatar.cc/300?img=27"}),r(a,{src:"https://i.pravatar.cc/300?img=28"})]})]}),s("div",{children:[r("h3",{children:"Group with max 3"}),s(a.Group,{max:3,children:[r(a,{src:"https://i.pravatar.cc/300?img=31"}),r(a,{src:"https://i.pravatar.cc/300?img=32"}),r(a,{src:"https://i.pravatar.cc/300?img=33"}),r(a,{src:"https://i.pravatar.cc/300?img=34"}),r(a,{src:"https://i.pravatar.cc/300?img=35"})]})]}),s("div",{children:[r("h3",{children:"Group with initials"}),s(a.Group,{children:[r(a,{src:"https://i.pravatar.cc/300?img=41"}),r(a,{initials:"JD"}),r(a,{src:"https://i.pravatar.cc/300?img=43"}),r(a,{initials:"AB"}),r(a,{initials:"CD"}),r(a,{src:"https://i.pravatar.cc/300?img=46"})]})]}),s("div",{children:[r("h3",{children:"Group with different sizes (inherits from group)"}),s(a.Group,{size:"lg",children:[r(a,{src:"https://i.pravatar.cc/300?img=51"}),r(a,{src:"https://i.pravatar.cc/300?img=52"}),r(a,{src:"https://i.pravatar.cc/300?img=53"}),r(a,{src:"https://i.pravatar.cc/300?img=54",size:"xl"}),r(a,{src:"https://i.pravatar.cc/300?img=55"})]})]}),s("div",{children:[r("h3",{children:"Group with overflow at start"}),s(a.Group,{max:3,overflowPosition:"start",children:[r(a,{src:"https://i.pravatar.cc/300?img=61"}),r(a,{src:"https://i.pravatar.cc/300?img=62"}),r(a,{src:"https://i.pravatar.cc/300?img=63"}),r(a,{src:"https://i.pravatar.cc/300?img=64"}),r(a,{src:"https://i.pravatar.cc/300?img=65"})]})]}),s("div",{children:[r("h3",{children:"Group with status indicators"}),s(a.Group,{children:[r(a,{src:"https://i.pravatar.cc/300?img=71",status:"online"}),r(a,{src:"https://i.pravatar.cc/300?img=72",status:"away"}),r(a,{src:"https://i.pravatar.cc/300?img=73",status:"busy"}),r(a,{src:"https://i.pravatar.cc/300?img=74",status:"offline"}),r(a,{src:"https://i.pravatar.cc/300?img=75"})]})]})]})},D={render:()=>s("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[s("div",{children:[r("h3",{children:"Custom Background Colors"}),s("div",{style:{display:"flex",gap:"16px"},children:[r(a,{initials:"P",backgroundColor:"var(--color-error)"}),r(a,{initials:"Q",backgroundColor:"var(--color-success)"}),r(a,{initials:"R",backgroundColor:"var(--color-warning)"}),r(a,{initials:"S",backgroundColor:"var(--color-info)"}),r(a,{initials:"T",backgroundColor:"#8B5CF6"})]})]}),s("div",{children:[r("h3",{children:"Icons as Fallback"}),s("div",{style:{display:"flex",gap:"16px"},children:[r(a,{fallback:r(u,{iconName:"Person",color:"white"})}),r(a,{fallback:r(u,{iconName:"Star",color:"white"}),backgroundColor:"var(--color-secondary)"}),r(a,{fallback:r(u,{iconName:"Lock",color:"white"}),backgroundColor:"var(--color-warning)"}),r(a,{fallback:r(u,{iconName:"Home",color:"white"}),backgroundColor:"var(--color-error)"})]})]})]})};var j,W,J;z.parameters={...z.parameters,docs:{...(j=z.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User Avatar',
    size: 'md'
  }
}`,...(J=(W=z.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var _,H,M;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    size: 'md'
  }
}`,...(M=(H=x.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,R,T;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url',
    fallback: <IconComponent iconName="Person" color="white" />,
    size: 'md'
  }
}`,...(T=(R=y.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var L,Q,U;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/300',
    status: 'online',
    size: 'md'
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var $,K,X;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/300',
    bordered: true,
    size: 'md'
  }
}`,...(X=(K=w.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,rr;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/300',
    shape: 'square',
    size: 'md'
  }
}`,...(rr=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:rr.source}}};var ar,tr,sr;k.parameters={...k.parameters,docs:{...(ar=k.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Avatar size="xs" src="https://i.pravatar.cc/300?img=1" />
      <Avatar size="sm" src="https://i.pravatar.cc/300?img=2" />
      <Avatar size="md" src="https://i.pravatar.cc/300?img=3" />
      <Avatar size="lg" src="https://i.pravatar.cc/300?img=4" />
      <Avatar size="xl" src="https://i.pravatar.cc/300?img=5" />
    </div>
}`,...(sr=(tr=k.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var er,ir,cr;S.parameters={...S.parameters,docs:{...(er=S.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Avatar initials="AB" size="xs" />
      <Avatar initials="CD" size="sm" />
      <Avatar initials="EF" size="md" />
      <Avatar initials="GH" size="lg" />
      <Avatar initials="IJ" size="xl" />
    </div>
}`,...(cr=(ir=S.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var or,nr,lr;G.parameters={...G.parameters,docs:{...(or=G.parameters)==null?void 0:or.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Avatar src="https://i.pravatar.cc/300?img=11" status="online" />
      <Avatar src="https://i.pravatar.cc/300?img=12" status="offline" />
      <Avatar src="https://i.pravatar.cc/300?img=13" status="away" />
      <Avatar src="https://i.pravatar.cc/300?img=14" status="busy" />
      <Avatar src="https://i.pravatar.cc/300?img=15" status="none" />
    </div>
}`,...(lr=(nr=G.parameters)==null?void 0:nr.docs)==null?void 0:lr.source}}};var pr,vr,dr;I.parameters={...I.parameters,docs:{...(pr=I.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3>Default Group (max 5)</h3>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/300?img=21" />
          <Avatar src="https://i.pravatar.cc/300?img=22" />
          <Avatar src="https://i.pravatar.cc/300?img=23" />
          <Avatar src="https://i.pravatar.cc/300?img=24" />
          <Avatar src="https://i.pravatar.cc/300?img=25" />
          <Avatar src="https://i.pravatar.cc/300?img=26" />
          <Avatar src="https://i.pravatar.cc/300?img=27" />
          <Avatar src="https://i.pravatar.cc/300?img=28" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with max 3</h3>
        <Avatar.Group max={3}>
          <Avatar src="https://i.pravatar.cc/300?img=31" />
          <Avatar src="https://i.pravatar.cc/300?img=32" />
          <Avatar src="https://i.pravatar.cc/300?img=33" />
          <Avatar src="https://i.pravatar.cc/300?img=34" />
          <Avatar src="https://i.pravatar.cc/300?img=35" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with initials</h3>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/300?img=41" />
          <Avatar initials="JD" />
          <Avatar src="https://i.pravatar.cc/300?img=43" />
          <Avatar initials="AB" />
          <Avatar initials="CD" />
          <Avatar src="https://i.pravatar.cc/300?img=46" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with different sizes (inherits from group)</h3>
        <Avatar.Group size="lg">
          <Avatar src="https://i.pravatar.cc/300?img=51" />
          <Avatar src="https://i.pravatar.cc/300?img=52" />
          <Avatar src="https://i.pravatar.cc/300?img=53" />
          <Avatar src="https://i.pravatar.cc/300?img=54" size="xl" />
          <Avatar src="https://i.pravatar.cc/300?img=55" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with overflow at start</h3>
        <Avatar.Group max={3} overflowPosition="start">
          <Avatar src="https://i.pravatar.cc/300?img=61" />
          <Avatar src="https://i.pravatar.cc/300?img=62" />
          <Avatar src="https://i.pravatar.cc/300?img=63" />
          <Avatar src="https://i.pravatar.cc/300?img=64" />
          <Avatar src="https://i.pravatar.cc/300?img=65" />
        </Avatar.Group>
      </div>

      <div>
        <h3>Group with status indicators</h3>
        <Avatar.Group>
          <Avatar src="https://i.pravatar.cc/300?img=71" status="online" />
          <Avatar src="https://i.pravatar.cc/300?img=72" status="away" />
          <Avatar src="https://i.pravatar.cc/300?img=73" status="busy" />
          <Avatar src="https://i.pravatar.cc/300?img=74" status="offline" />
          <Avatar src="https://i.pravatar.cc/300?img=75" />
        </Avatar.Group>
      </div>
    </div>
}`,...(dr=(vr=I.parameters)==null?void 0:vr.docs)==null?void 0:dr.source}}};var mr,ur,hr;D.parameters={...D.parameters,docs:{...(mr=D.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3>Custom Background Colors</h3>
        <div style={{
        display: 'flex',
        gap: '16px'
      }}>
          <Avatar initials="P" backgroundColor="var(--color-error)" />
          <Avatar initials="Q" backgroundColor="var(--color-success)" />
          <Avatar initials="R" backgroundColor="var(--color-warning)" />
          <Avatar initials="S" backgroundColor="var(--color-info)" />
          <Avatar initials="T" backgroundColor="#8B5CF6" />
        </div>
      </div>
      
      <div>
        <h3>Icons as Fallback</h3>
        <div style={{
        display: 'flex',
        gap: '16px'
      }}>
          <Avatar fallback={<IconComponent iconName="Person" color="white" />} />
          <Avatar fallback={<IconComponent iconName="Star" color="white" />} backgroundColor="var(--color-secondary)" />
          <Avatar fallback={<IconComponent iconName="Lock" color="white" />} backgroundColor="var(--color-warning)" />
          <Avatar fallback={<IconComponent iconName="Home" color="white" />} backgroundColor="var(--color-error)" />
        </div>
      </div>
    </div>
}`,...(hr=(ur=D.parameters)==null?void 0:ur.docs)==null?void 0:hr.source}}};const Pr=["Image","Initials","WithFallback","WithStatus","WithBorder","Square","SizeVariants","InitialVariants","StatusVariants","AvatarGroup","CustomizedAvatars"];export{I as AvatarGroup,D as CustomizedAvatars,z as Image,S as InitialVariants,x as Initials,k as SizeVariants,C as Square,G as StatusVariants,w as WithBorder,y as WithFallback,b as WithStatus,Pr as __namedExportsOrder,Fr as default};
