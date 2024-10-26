(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[29],{1817:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a(2070),l=a(2024),o=a(34),s=a(280),u=a(35),d=a(1937),m=a(71),p=a(70),b=a(43),E=a(6),h=a(228);const g=a.n(h)()();var O=a(5),f=a(44),S=a(50),T=a(1929),_=a(27),I=a(2032),v=a(16),j=a(101),C=a.n(j),N=a(2),D=a(2847),A=a(2658),y=a(783);const x=Object(O.c)(D.a)`
  background-color: ${({theme:e})=>e.motifPalette.uiBase} !important;
  padding: 0 ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${y.a};
    margin: 0 auto;
    position: relative;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: calc(100% - ${({theme:e})=>e.scrollBarWidth}px);
    right: ${({theme:e})=>e.scrollBarWidth/2}px;
  }
`;var R=({dirty:e,isSubmitting:t,handleReset:a,parentElementId:c,setStatus:r,setSubmitting:l,values:o,onSubmit:s})=>{const u=document.getElementById(c),d=Object(n.useCallback)(()=>{l(!0),s(o,{setStatus:r,setSubmitting:l})},[r,l,o,s]);return u?C.a.createPortal(i.a.createElement(x,{active:e,align:"right"},i.a.createElement(A.a,{disabled:!e||t,type:"reset",variant:"default",onClick:a},i.a.createElement(N.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(A.a,{disabled:!e||t,type:"button",variant:"primary",onClick:d},i.a.createElement(N.c,{id:"COMMON_ACTION_APPLY_CHANGES"}))),u):null},G=a(1739),w=a(1736),P=a(1737),L=a(2117),M=a(83),$=a(62),U=a(18),k=a(151),B=a(322),F=a(2203);const H=Object(O.c)(k.a)`
  mark {
    background: initial;
    color: ${({theme:e})=>e.motifPalette.danger};
  }
`;var z=()=>{const{setFieldValue:e,initialValues:t}=Object(f.e)(),[a,r]=Object(n.useState)(!1),l=Object(c.useSelector)(M.m),o=Object(c.useSelector)(U.x),s=Object(c.useSelector)(L.b),u=Object(c.useDispatch)(),d=Object(n.useCallback)(e=>{!e&&t.enabled&&r(!0)},[t.enabled]),p=Object(n.useCallback)(()=>{e("enabled",!0),r(!1)},[e]),b=Object(n.useCallback)(()=>{r(!1)},[]);return i.a.createElement(G.a,null,i.a.createElement(H,{isOpen:a,onCancel:p,onConfirm:b,title:"SETTINGS_SECURITY_DPI_DISABLE_CONFIRM_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_DISABLE_CONFIRM_MODAL_TEXT",confirmButtonProps:{variant:"danger",children:i.a.createElement(N.c,{id:"COMMON_ACTION_DISABLE"})}}),i.a.createElement(w.a,null,i.a.createElement(B.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"enabled",label:i.a.createElement(N.c,{id:"SETTINGS_SECURITY_DPI_LABEL_ENABLE_DPI"}),description:i.a.createElement(N.c,{id:"SETTINGS_SECURITY_DPI_DESCRIPTION_ENABLE_DPI",values:{isUDM:l}}),searchText:"SETTINGS_SECURITY_DPI_SEARCH_LABEL_ENABLE_DPI",searchTags:["dpi"]}),i.a.createElement(P.a,null,i.a.createElement($.Field,{name:"enabled",type:"checkbox",afterChange:d,disabled:o}))),l&&i.a.createElement(w.a,null,i.a.createElement(B.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"fingerprintingEnabled",label:i.a.createElement(N.c,{id:"SETTINGS_SECURITY_DPI_LABEL_ENABLE_FINGERPRINTING"}),description:i.a.createElement(N.c,{id:"SETTINGS_SECURITY_DPI_DESCRIPTION_ENABLE_FINGERPRINTING"}),searchIsApplicable:"isUdm",searchText:"SETTINGS_SECURITY_DPI_SEARCH_LABEL_ENABLE_FINGERPRINTING"}),i.a.createElement(P.a,null,i.a.createElement($.Field,{name:"fingerprintingEnabled",type:"checkbox",disabled:o}))),i.a.createElement(w.a,{disabled:o},i.a.createElement(B.SearchableGridLabel,{label:i.a.createElement(N.c,{id:"SETTING_SECURITY_DPI_CLEAR_DPI_LABEL"}),searchIgnore:!0,alignWith:"toggleSmall"}),i.a.createElement(P.a,null,i.a.createElement(m.c,{name:"clear-dpi-counters",type:"button",variant:"inline",legacy:!1,disabled:o||s,onClick:()=>u(Object(F.a)())},i.a.createElement(N.c,{id:"SETTING_SECURITY_DPI_CLEAR_DPI_ACTION"})))))};const Y=Object(O.c)("button")`
  border: none !important;
  height: 0;
  margin: 0;
  padding: 0 !important;
  outline: none;
  overflow: hidden !important;
  pointer-events: none;
  visibility: hidden;
  width: 0;
`,V=({initialStatus:e,initialValues:t})=>{const{resetForm:a,status:i}=Object(f.e)();return Object(n.useEffect)(()=>{i.isSubmitted&&a({values:t,status:e})},[i.isSubmitted]),null};var W=({transitionDelay:e})=>{const t=Object(c.useDispatch)(),a=Object(c.useSelector)(S.selectDpiSettings),r=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),l=Object(n.useMemo)(()=>({enabled:!1,fingerprintingEnabled:!1,...a}),[a]),o=Object(n.useCallback)((e,{setStatus:a,setSubmitting:n})=>t(Object(S.saveSettings)(e)).then(()=>{t(Object(_.c)({icon:v.a.success,message:"SETTINGS_SECURITY_DPI_SAVE_SUCCESS"})),a({isSubmitted:!0})}).catch(e=>{t(Object(_.c)({errorMessage:e.msg,errorValues:e,icon:v.a.danger,message:"SETTINGS_SECURITY_DPI_SAVE_ERROR"})),n(!1)}),[t]);return i.a.createElement(m.n,{highlightType:"none",padding:"none"},i.a.createElement(f.c,{initialStatus:r,initialValues:l,onSubmit:o,enableReinitialize:!0},({dirty:t,handleSubmit:a,handleReset:n,isSubmitting:c,setStatus:s,setSubmitting:u,values:d})=>i.a.createElement("form",{autoComplete:"off",onSubmit:a},i.a.createElement(I.a,{delay:35,timeout:{enter:335+e,exit:100}},i.a.createElement(z,null)),i.a.createElement(R,{dirty:t,handleReset:n,isSubmitting:c,parentElementId:g,setStatus:s,setSubmitting:u,values:d,onSubmit:o}),i.a.createElement(Y,{disabled:c,type:"submit",tabIndex:-1}),i.a.createElement(V,{initialStatus:r,initialValues:l}),i.a.createElement(T.a,{when:t&&!c}))))},q=a(36),Q=a(2851),X=a(1935);var J=({transitionDelay:e})=>{const t=Object(p.i)("security"),a=Object(q.k)(),{enabled:n}=Object(c.useSelector)(S.selectDpiSettings),{ips_mode:r}=Object(c.useSelector)(S.selectIpsSettings);return i.a.createElement(I.a,{delay:35,initialDelay:e,timeout:{enter:335+e,exit:100}},i.a.createElement(m.n,{padding:"none"},i.a.createElement(Q.a,{headerButton:i.a.createElement(X.a,null),headerTitle:i.a.createElement(X.b,{status:r!==S.IPS_MODES.DISABLED?"success":"neutral",label:i.a.createElement(N.c,{id:"SETTINGS_SECURITY_BUBBLE_THREAT_MANAGEMENT_LABEL"}),type:X.c.STATUS}),onClick:()=>a.push(t+"/threat-management")})),i.a.createElement(m.n,{padding:"none"},i.a.createElement(Q.a,{headerButton:i.a.createElement(X.a,null),headerTitle:i.a.createElement(X.b,{status:n?"success":"neutral",label:i.a.createElement(N.c,{id:"SETTINGS_SECURITY_BUBBLE_DPI_LABEL"}),type:X.c.STATUS}),onClick:()=>a.push(t+"/traffic")})))};t.default=()=>{const e=Object(n.useCallback)(()=>i.a.createElement("div",{id:g}),[]),t=Object(c.useSelector)(b.l),a=Object(c.useSelector)(s.selectSites),h=Object(n.useMemo)(()=>210+(t.isStandalone&&35)+((null==a?void 0:a.length)>1&&35),[a.length,t.isStandalone]);return Object(p.f)([Object(r.fetchDpiApps)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(l.fetchDpiGroups)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(u.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}})],i.a.createElement(m.j,{renderFooter:e},i.a.createElement(d.e,{scrollable:!0},i.a.createElement(W,{transitionDelay:h}),i.a.createElement(J,{transitionDelay:h}))))}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return $}));var n=a(0),i=a.n(n),c=a(5),r=a(648),l=a(1136),o=a(208);const s=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,u=(Object(c.c)(r.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(c.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),d=Object(c.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,m=e=>i.a.createElement(u,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),p=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var b=a(1851),E=a(375);const h=Object(c.c)(b.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,g=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(E.b)(({theme:e,...t})=>i.a.createElement(h,Object.assign({headerRowClassName:g(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(1934),f=a(529),S=a(1743),T=a(2),_=a(30),I=a(15),v=a(2846),j=a(44),C=a(71),N=a(62);const D=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,A=Object(c.c)(C.c)`
  > * {
    vertical-align: middle;
  }
`,y=Object(c.c)(C.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,x=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,R=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,G=Object(c.c)(C.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,w=Object(c.c)(y,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,P=Object(c.c)(C.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(c.c)(C.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,M=Object(c.c)("div")`
  table {
    td {
      max-width: 170px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        height: 12px;
      }
    }
  }
`;var $=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:r,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:u=!1,max:m,useWindowTable:p=!1,addButtonText:E="COMMON_ACTION_ADD",invalid:h,...g}){const O=Object(n.useContext)(C.l),[$,U]=Object(n.useState)(!0),k=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(d,null,i.a.createElement(A,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),r(t),await Promise.resolve(),U(!0)}},i.a.createElement(T.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,r]),B=Object(n.useMemo)(()=>p?v.a:b.a,[p]);return i.a.createElement(j.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>u?_.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:u,handleReset:d,setTouched:p})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(D,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(y,{flexDirection:"column",width:"100%"},i.a.createElement(N.Field,Object.assign({disabled:n.editActive||n[e].length>=m,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:h,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!O&&c&&r===t.length-1&&i.a.createElement(x,null,i.a.createElement(A,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await p(a,!0);t.find(e=>i[e.name])||c(n),U(!0)},Icon:I.wb,disabled:n.editActive||n[e].length>=m||!n[a.name]},i.a.createElement(T.c,{id:E}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(G,{key:n.id,width:"100%"},g.columns.map((n,r)=>t[r]?i.a.createElement(w,{key:n.id,isLast:r===g.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(N.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(P,{justifyContent:"flex-end",width:"100%"},i.a.createElement(L,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{d(),s("editActive",!1)}},i.a.createElement(T.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(C.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:u,disabled:Object(f.a)(Object(S.a)(n,"editActive"),Object(S.a)(o,"editActive"))},i.a.createElement(T.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(D,null,i.a.createElement(R,null,i.a.createElement(A,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{d(),s("editActive",!0)},Icon:I.ub},i.a.createElement(T.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&$&&i.a.createElement(M,null,i.a.createElement(B,{columns:g.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:r?k:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),u=a(520),d=a(521);const m=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(d.a)(t),b=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),E=Object(n.useCallback)(e=>(e={},t={})=>p(e,t)&&b(e,t),[p,b]);return!!e&&i.a.createElement(o.a,{when:E(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:u.b,title:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(m,null,i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return I})),a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return C}));var n=a(0),i=a.n(n),c=a(5),r=a(643),l=a(32),o=a(1932),s=a(8),u=a(15),d=a(45),m=a(17),p=a(189),b=a(41);const E=Object(c.c)(p.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var h=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(m.g)({modalType:b.a[a],modalProps:{closeModal:()=>t(Object(m.e)())}}))},[t,e]);return i.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(u.vb,{color:d.a["blue-3"]}))},g=a(1933),O=a(71),f=a(227);const S=Object(c.c)(O.c)`
  flex: none;
  width: 96px;
  height: 54px;
  border-radius: ${({theme:e})=>e.spacing["spacing-xs"]};
  opacity: 0.8;
  transition: opacity 100ms ease;
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:focus,
  &:hover {
    opacity: 1;
  }
`,T=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,_=Object(c.c)(u.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var I,v=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(f.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(m.g)({modalType:b.a[a],modalProps:{closeModal:()=>t(Object(m.e)())}}))},[t,e]);return i.a.createElement(S,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(T,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(_,{color:d.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(I||(I={}));const j=Object(c.c)(O.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,C=Object(c.c)(O.g)`
  * {
    line-height: 1.4 !important;
  }
`,N=Object(c.c)(r.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:r,online:s})=>{let u;switch(t){default:case I.BASIC:u=e;break;case I.CONFIGURED:u=i.a.createElement(C,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!r&&s&&i.a.createElement(h,{video:r}));break;case I.STATUS:u=i.a.createElement(C,{alignItems:"center"},i.a.createElement(N,{variant:c}),i.a.createElement(j,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(l.a,null,a)));break;case I.UNCONFIGURED:u=i.a.createElement(C,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{section:n}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!r&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{video:r}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!r&&!s&&i.a.createElement(C,{alignItems:"center"},e))}return u}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(8),l=a(15),o=a(45),s=a(1936),u=a(189);const d=Object(c.c)(u.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(8),l=a(15),o=a(45),s=a(1936),u=a(71),d=a(43);const m=Object(c.c)(u.c)`
  flex: none;
  width: 96px;
  height: 54px;
  border-radius: ${({theme:e})=>e.spacing["spacing-xs"]};
  opacity: 0.8;
  transition: opacity 100ms ease;
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:focus,
  &:hover {
    opacity: 1;
  }
`,p=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,b=Object(c.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(r.useSelector)(d.i),c=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(p,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(b,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u.d})),a.d(t,"c",(function(){return u.a}));var n=a(0),i=a.n(n),c=a(5),r=a(15),l=a(71);const o=Object(c.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(r.g,null)),u=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(17),i=a(41);const c=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return J})),a.d(t,"d",(function(){return K.a})),a.d(t,"f",(function(){return K.c})),a.d(t,"h",(function(){return K.e})),a.d(t,"g",(function(){return K.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),c=a.n(i),r=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...l})=>{const o=a?12:i,s=a?0:n;return c.a.createElement("div",Object.assign({className:Object(r.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(r.b)("col-"+a,"offset-"+t)},e),u=a(2),d=a(666),m=a.n(d),p=a(71),b=a(1964),E=a.n(b),h=a(140),g=a.n(h),O=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const f=g.a.bind(E.a);var S=({className:e=null,status:t=o.NEUTRAL,...a})=>c.a.createElement(O.a,Object.assign({},a,{className:f("ubntStatusText","ubntStatusText--"+t,e)})),T=a(254),_=a(1944);const I=Object(r.c)(p.g)`
  border: 1px solid ${T.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,v=Object(r.c)(S)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var j=({state:e,className:t=null,...a})=>c.a.createElement(I,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(v,{message:_.b[e],status:o.WARNING})),C=a(322),N=a(82),D=a(8),A=a(45),y=a(70),x=a(20);const R={BORDER_WIDTH:2},G={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},w=({type:e,size:t,width:a,height:n})=>{switch(e){case C.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:c}=G;return{top:c,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function P({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:l,height:o}){const s=Object(D.useSelector)(C.selectHighlight),[u,d]=Object(y.c)(0),[m,p]=Object(y.c)(!1),b=Object(i.useRef)(null),E=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(r.a)({"&::before":{border:`${R.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:A.a["blue-light-3"],show:m,style:{...w({type:e,size:c,width:l,height:o}),...a}}),[m,e,a,c,l,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>u)d(u+1);else if(b.current&&t===s.id&&s.type===e){window.getComputedStyle(b.current).border,window.getComputedStyle(b.current).boxShadow;let t=b.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:c}=t.current.getBoundingClientRect();switch(a){case C.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=G,r=c+Object(x.a)(n,"top",a),l=r+i+Object(x.a)(n,"paddingBottom",e)+Object(x.a)(n,"paddingTop",t)+2*R.BORDER_WIDTH;return{bottom:l,height:l-r,top:r}}}})({height:o,highlightRef:b,type:e,highlightStyle:a}),{bottom:r,height:l,top:s}=n.getBoundingClientRect(),u=t>r,d=i>l,m=15;c<s||d?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+c-m}):u&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-r+m})}p(!0)}},[o,u]),Object(i.useEffect)(()=>{m||s.id!==t||d(e=>e+1),m&&s.id!==t&&p(!1)},[s.id,m]),{highlightClassName:E,highlightRef:b}}const L=Object(r.c)(m.a)`
  color: ${N.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=Object(r.c)(m.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,$=r.a`
  cursor: pointer;
  user-select: none;

  &:hover {
    // Made the class plain text instead of \${StyledDescription} because TypeScript compiler breaks the interpolation
    .settingsGridDescription {
      opacity: 1;
    }

    // Same here
    .settingsGridLabel {
      color: white;
      opacity: 1;
    }
  }
`;var U=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:d=null,offset:m=0,size:p=5,useHtml:b=!1})=>{const{highlightClassName:E,highlightRef:h}=P({type:C.SearchHighlightType.FIELD,forId:d,highlightStyle:s,highlightDelay:o,size:p}),g=!(!n&&!a),O={["col-"+p]:!0,["offset-"+m]:m>0},f=b?u.b:u.c;return c.a.createElement("div",{className:Object(r.b)(O,$,E),ref:h},c.a.createElement("div",{className:"mb-1"},c.a.createElement(M,{className:"settingsGridLabel",htmlFor:d,primary:!0},l?e:c.a.createElement(u.c,{id:e})),t&&c.a.createElement(j,{state:t})),g&&c.a.createElement("div",null,c.a.createElement(L,{className:"settingsGridDescription",htmlFor:d,secondary:!0},n?c.a.createElement(f,{id:n,values:i}):a)))};const k=r.a`
  max-width: 960px;
`,B=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:l=!1})=>{const o=n?4:i;return c.a.createElement("div",{className:Object(r.b)("row","mt-"+o,l?null:k,t),ref:a},e)};var F=c.a.forwardRef((e,t)=>c.a.createElement(B,Object.assign({forwardedRef:t},e)));var H=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(O.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const z=Object(r.c)("div")`
  flex: 0 1 480px;
`,Y=Object(r.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var V=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:l=null})=>{const o=T.b.sectionColors.common;return c.a.createElement(F,{className:t,marginTop:0},c.a.createElement(z,null,c.a.createElement(Y,{className:Object(r.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(u.c,{id:e})),a&&c.a.createElement(O.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const W=Object(r.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(W,{className:Object(r.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(r.b)({"pb-8":!a})},e));q.Content=l,q.Icon=s,q.Label=U,q.Row=F,q.SectionHeader=H,q.Subheader=V;var Q=a(284);const X=Object(r.c)(Q.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var J=e=>c.a.createElement(X,Object.assign({},e)),K=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(D.useSelector)(Z.C);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(u.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(u.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(u.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2024:function(e,t,a){"use strict";a.r(t);var n=a(2041);a.d(t,"fetchDpiGroups",(function(){return n.c})),a.d(t,"fetchDpiGroup",(function(){return n.b})),a.d(t,"saveDpiGroup",(function(){return n.f})),a.d(t,"addDpiAppToGroup",(function(){return n.a})),a.d(t,"removeDpiAppFromGroup",(function(){return n.d})),a.d(t,"removeDpiGroup",(function(){return n.e}));var i=a(2052);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var c=a(2071);a.d(t,"dpiGroupsSelector",(function(){return c.a})),a.d(t,"selectDpiGroups",(function(){return c.c})),a.d(t,"selectDpiGroup",(function(){return c.b}));var r=a(2072);for(var l in r)["default","fetchDpiGroups","fetchDpiGroup","saveDpiGroup","addDpiAppToGroup","removeDpiAppFromGroup","removeDpiGroup","MODEL","PATH","dpiGroupsSelector","selectDpiGroups","selectDpiGroup"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l)},2032:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),r=a(5),l=a(782);const o=(e,t,a)=>r.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  &-appear-active,
  &-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${e*t+a+70}ms cubic-bezier(0.25, 0.1, 0.25, 1),
      transform 300ms ${e*t+a+70}ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transition: opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,s=i.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:a=!0,delay:r=70,initialDelay:s=0,children:u,...d}=e,m=Object(l.a)(),p=Object(n.useMemo)(()=>i.a.Children.map(u,(e,n)=>null===e?e:i.a.createElement(c.a,Object.assign({appear:a||!m,in:a||!m,timeout:t,classNames:o(n,r,s),mountOnEnter:!0},d),e)),[u,r,s,a,m,d,t]);return i.a.createElement(i.a.Fragment,null,p)});t.a=s},2040:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return p}));var n=a(20),i=a(6),c=a(27),r=a(2024),l=a(28),o=a(2053);const s=(e,t)=>Object(i.q)(o.a,o.b,e,{idField:"_id",...t}),u=e=>Object(i.t)(o.a,o.b,e),d=e=>{const{_id:t}=e;return t?Object(i.C)(o.a,t,`${o.b}/${t}`,e):Object(i.i)(o.a,o.b,e)},m=(e,t,a)=>async i=>{const{successToast:o,failureToast:s}=Object(l.a)("SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SAVE_ERROR","SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SAVE_SUCCESS");try{const l=await i(d(e)),s=Object(n.a)(l,"data[0]._id",l._id);a&&a!==t&&await i(Object(r.removeDpiAppFromGroup)(a,s)),s&&await i(Object(r.addDpiAppToGroup)(t,s)),i(Object(c.c)(o))}catch(u){i(Object(c.c)(s()))}},p=e=>Object(i.n)(o.a,e,`${o.b}/${e}`)},2041:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return b}));var n=a(20),i=a(1853),c=a(6),r=a(28),l=a(2052);const o=(e,t)=>Object(c.q)(l.a,l.b,e,{idField:"_id",...t}),s=e=>Object(c.t)(l.a,l.b,e),u=(e,t={})=>{const{_id:a}=e,n=Object(r.a)("SETTINGS_SECURITY_DPI_CREATE_RESTRICTION_GROUP_SAVE_ERROR","SETTINGS_SECURITY_DPI_CREATE_RESTRICTION_GROUP_SAVE_SUCCESS");if(a){const i=t&&t.withToast?n:void 0;return Object(c.C)(l.a,a,`${l.b}/${a}`,e,{},i)}return Object(c.i)(l.a,l.b,e,{},n)},d=e=>t=>Object(n.a)(Object(c.w)(s(e),t.models),"data",{}),m=(e,t)=>(a,n)=>{const{dpiapp_ids:i=[],...c}=d(e)(n());return a(u({...c,dpiapp_ids:i.concat(i.includes(t)?[]:t)}))},p=(e,t)=>(a,n)=>{const{dpiapp_ids:c=[],...r}=d(e)(n());return a(u({...r,dpiapp_ids:Object(i.a)(c,t)}))},b=e=>Object(c.n)(l.a,e,`${l.b}/${e}`,{})},2052:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dpigroup",i="/api/s/{site}/rest/".concat(n)},2053:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dpiApp",i="/api/s/{site}/rest/dpiapp"},2070:function(e,t,a){"use strict";a.r(t);var n=a(2040);a.d(t,"fetchDpiApps",(function(){return n.b})),a.d(t,"fetchDpiApp",(function(){return n.a})),a.d(t,"saveDpiApp",(function(){return n.d})),a.d(t,"saveDpiAppToDpiGroup",(function(){return n.e})),a.d(t,"removeDpiApp",(function(){return n.c}));var i=a(2053);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var c=a(2073);a.d(t,"dpiAppsSelector",(function(){return c.a})),a.d(t,"selectDpiApps",(function(){return c.c})),a.d(t,"selectDpiApp",(function(){return c.b}));var r=a(2074);for(var l in r)["default","fetchDpiApps","fetchDpiApp","saveDpiApp","saveDpiAppToDpiGroup","removeDpiApp","MODEL","PATH","dpiAppsSelector","selectDpiApps","selectDpiApp"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l)},2071:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(20),i=a(4),c=a(6),r=a(2041);const l=Object(c.A)(Object(r.c)()),o=Object(i.a)(l,e=>Object(n.a)(e,"data",[])),s=e=>t=>{const a=Object(c.w)(Object(r.b)(e),t.models);return Object(n.a)(a,"data",{})}},2072:function(e,t){},2073:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(20),i=a(4),c=a(6),r=a(2040);const l=Object(c.A)(Object(r.b)()),o=Object(i.a)(l,e=>Object(n.a)(e,"data",[])),s=e=>t=>{const a=Object(c.w)(Object(r.a)(e),t.models);return Object(n.a)(a,"data",{})}},2074:function(e,t){},2117:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a(37),i=a(6),c=a(28);const r=(e,t)=>Object(i.p)(n.a.RESET_DPI,"/api/s/{site}/cmd/stat",{},e&&t?Object(c.a)(e,t):{});var l=a(20);const o=e=>Object(l.a)(Object(i.w)(r(),e.models),"pending",!1)},2203:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(45),i=a(2117),c=a(663),r=a(17);const l=()=>e=>e(Object(c.a)({title:"SETTINGS_SECURITY_DPI_CONFIRM_CLEAR_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_CONFIRM_CLEAR_MODAL_DESCR",messageValues:{color:n.a.motifs.dark.danger},confirmButtonProps:{variant:"danger"},confirmButtonText:"COMMON_ACTION_DELETE",onConfirm:()=>e(e=>(e(Object(r.e)()),e(Object(i.a)("SETTINGS_SECURITY_DPI_RESET_COUNTERS_ERROR","SETTINGS_SECURITY_DPI_RESET_COUNTERS_SUCCESS"))))}))}}]);