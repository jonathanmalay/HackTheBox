(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[42],{1787:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(36),r=a(8),l=a(2002),o=a(70),s=a(6),E=a(2067);const m={};t.default=()=>{const{id:e}=Object(i.m)(),t=Object(r.useSelector)(l.selectDynamicDnsData).find(t=>t._id===e),a=Object(o.h)();return Object(o.f)([Object(l.fetchDynamicDns)({crudCacheStrategy:{type:s.a.CACHE}})],c.a.createElement(E.a,{initialValues:t||m,onBack:a}))}},1929:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),E=a(520),m=a(521);const u=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),_=Object(m.a)(t),d=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),N=Object(n.useCallback)(e=>(e={},t={})=>_(e,t)&&d(e,t),[_,d]);return!!e&&c.a.createElement(o.a,{when:N(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(s.a,{actions:[{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:E.b,title:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},c.a.createElement(u,null,c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),c=a(36);t.a=()=>{const e=Object(c.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return v}));var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(44),o=a(2847),s=a(2658),E=a(1929),m=a(783),u=a(71),_=a(1940),d=a(15),N=a(32),p=a(42),b=a(1847),T=a(782),S=a(1930);const h=i.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateX(15px);
  }
  &-appear-active,
  &-enter-active,
  &-appear-done,
  &-enter-done {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 150ms cubic-bezier(0.25, 0.1, 0.25, 1) 130ms,
      transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1.4) 130ms;
  }
  &-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transform: translateX(15px);
    transition: opacity 100ms linear, transform 100ms linear;
  }
`;var g=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(S.a)(),o=Object(T.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(b.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:h,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const A=i.a`
  &-appear,
  &-enter {
    border-bottom: transparent !important;
  }
  &-appear-active,
  &-enter-active,
  &-appear-done,
  &-enter-done {
    transition: border-bottom 150ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transition: opacity 100ms linear;
  }
`;var D=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(S.a)(),o=Object(T.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(b.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:A,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const f=Object(i.c)(u.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,O=Object(i.c)(u.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,x=Object(i.c)(u.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,C=Object(i.c)(N.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var v=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>{const{motif:l}=Object(p.a)();return c.a.createElement(D,{ignoredPaths:r},c.a.createElement(O,{flex:"none",height:"65px"},c.a.createElement(g,{ignoredPaths:r},c.a.createElement(u.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},c.a.createElement(f,{alignItems:"center",flex:"1",height:"100%"},t&&c.a.createElement(x,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},c.a.createElement(d.f,{size:"original"}))),c.a.createElement(I,null,c.a.createElement(C,{weight:"bold"},e.component)),c.a.createElement(f,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&c.a.createElement(x,{legacy:!1,name:"closeButton",type:"button",onClick:n},c.a.createElement(d.y,{size:"original"})))))))};const G=Object(i.c)(u.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,R=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,j=Object(i.c)(u.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,y=Object(i.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,M=Object(i.c)(u.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,w=Object(i.c)(u.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:m,title:d,unsavedChangesModalIgnoredPaths:N,onEscClicked:p,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:T=!1,customFooterButtons:S,hidddenHeader:h,...g})=>c.a.createElement(l.c,Object.assign({enableReinitialize:!0},g),({dirty:i,handleReset:l,handleSubmit:g,isSubmitting:A})=>c.a.createElement(R,{autoComplete:"off",onSubmit:g},c.a.createElement(w,{vertical:!0},!h&&c.a.createElement(v,{goBack:a,hideClose:n,showBack:m,title:d,onEscClicked:p,ignoredPaths:N}),c.a.createElement(_.a,{ignoredPaths:N},c.a.createElement(M,{flex:"1"},c.a.createElement(G,{flex:"none",flexDirection:"column"},e))),!t&&!o&&c.a.createElement(E.a,{ignoredPaths:N,when:i&&!A}),(!o||T)&&c.a.createElement(y,{active:i||T},c.a.createElement(u.g,{justifyContent:S?"space-between":"flex-end",width:"100%",alignItems:"center"},S&&c.a.createElement(j,null,S(A)),!o&&c.a.createElement(u.g,null,c.a.createElement(s.a,{disabled:!i||A,type:"button",variant:"default",onClick:l},c.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(s.a,{disabled:!i||A,type:"submit",variant:"primary"},c.a.createElement(r.c,{id:b}))))))))},1940:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(1847),r=a(5),l=a(782),o=a(1930);const s=r.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateX(60px);
  }
  &-appear-active,
  &-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 150ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 100ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...E})=>{const m=Object(o.a)(),u=Object(l.a)(a),_=Object(n.useMemo)(()=>c.a.Children.map(r,a=>null===a?a:c.a.createElement(i.a,Object.assign({appear:t||!u||m,in:t||!u||m,timeout:e,classNames:s,mountOnEnter:!0},E),a)),[r,t,u,m,e,E]);return c.a.createElement(c.a.Fragment,null,_)}},1999:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(28),c=a(6),i=a(2e3);const r=(e={})=>Object(c.q)(i.a,i.b,void 0,{...e,idField:"_id"}),l=e=>{const{_id:t}=e;return t?Object(c.C)(i.a,t,`${i.b}/${t}`,e):Object(c.i)(i.a,i.b,e)},o=({_id:e,service:t})=>Object(c.n)(i.a,e,`${i.b}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_SUCCESS_TOAST",{name:t}))},2e3:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n="dynamicdns",c="/api/s/{site}/rest/".concat(n)},2002:function(e,t,a){"use strict";a.r(t);var n=a(2025);a.d(t,"selectDynamicDns",(function(){return n.a})),a.d(t,"selectDynamicDnsData",(function(){return n.b}));var c=a(2e3);a.d(t,"MODEL",(function(){return c.a})),a.d(t,"PATH",(function(){return c.b}));var i=a(1999);a.d(t,"fetchDynamicDns",(function(){return i.a})),a.d(t,"saveDynamicDns",(function(){return i.c})),a.d(t,"removeDynamicDns",(function(){return i.b}));var r=a(2026);for(var l in r)["default","selectDynamicDns","selectDynamicDnsData","MODEL","PATH","fetchDynamicDns","saveDynamicDns","removeDynamicDns"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l)},2025:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(4),c=a(6),i=a(28),r=a(1999);const l=Object(c.A)(Object(r.a)()),o=Object(n.a)(l,i.c)},2026:function(e,t){},2067:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(8),r=a(2),l=a(63),o=a(215),s=a(2002),E=a(34),m=a(1938),u=a(663),_=a(27),d=a(71),N=a(70),p=a(16),b=a(30),T=b.a.object().shape({interface:b.a.string(),service:b.a.string(),host_name:b.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),login:b.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),x_password:b.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),server:b.a.string()}),S={AFRAID:"afraid",DNS_PARK:"dnspark",DSL_REPORTS:"dslreports",DYN_DNS:"dyndns",EASY_DNS:"easydns",NAME_CHEAP:"namecheap",NO_IP:"noip",SITELUTIONS:"sitelutions",ZONE_EDIT:"zoneedit"},h=a(1739),g=a(1736),A=a(1914),D=a(1737),f=a(3),O=a(62);var I=()=>{const e=Object(i.useSelector)(f.selectWanInterfaceOptions),t=Object.values(S).map(e=>({value:e,label:e}));return c.a.createElement(h.a,null,c.a.createElement(g.a,null,c.a.createElement(A.a,{htmlFor:"interface",alignWith:"select",label:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_INTERFACE"})}),c.a.createElement(D.a,{column:!0},c.a.createElement(O.Field,{full:!0,type:"dropdown",name:"interface",options:e}))),c.a.createElement(g.a,null,c.a.createElement(A.a,{htmlFor:"service",alignWith:"select",label:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVICE"})}),c.a.createElement(D.a,{column:!0},c.a.createElement(O.Field,{full:!0,type:"dropdown",name:"service",options:t}))),c.a.createElement(g.a,null,c.a.createElement(A.a,{htmlFor:"host_name",alignWith:"input",label:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"})}),c.a.createElement(D.a,{column:!0},c.a.createElement(O.Field,{full:!0,name:"host_name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"}))),c.a.createElement(g.a,null,c.a.createElement(A.a,{htmlFor:"login",alignWith:"input",label:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"})}),c.a.createElement(D.a,{column:!0},c.a.createElement(O.Field,{full:!0,name:"login",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"}))),c.a.createElement(g.a,null,c.a.createElement(A.a,{htmlFor:"x_password",alignWith:"input",label:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"})}),c.a.createElement(D.a,{column:!0},c.a.createElement(O.Field,{full:!0,passwordToggle:!0,type:"password",name:"x_password",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"}))),c.a.createElement(g.a,null,c.a.createElement(A.a,{htmlFor:"server",alignWith:"input",label:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"})}),c.a.createElement(D.a,{column:!0},c.a.createElement(O.Field,{full:!0,name:"server",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"}))))};const x=Object(l.a)(e=>({interface:E.NetworkPurpose.WAN,service:S.AFRAID,host_name:"",login:"",x_password:"",server:"",...e}));t.a=e=>{const{initialValues:t,onBack:a}=e,l=Object(i.useDispatch)(),E=Object(n.useContext)(d.l),b=Object(n.useCallback)((e,{setSubmitting:t})=>l(Object(s.saveDynamicDns)(e)).then(()=>{l(Object(_.c)({icon:p.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),a()}).catch(e=>{l(Object(_.c)({errorMessage:e.msg,errorValues:e,icon:p.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)}),[l,a]),S=!!t._id,h=Object(N.n)({component:c.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"},E?"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_EDIT",t._id?t.host_name:void 0),g=Object(n.useCallback)(()=>{l(Object(u.b)({name:t.service,onConfirm:()=>l(Object(s.removeDynamicDns)(t)).then(a())}))},[l,t,a]);return c.a.createElement(m.b,{onSubmit:b,title:h,initialValues:x(t),isEdit:S,isView:E,onEscClicked:a,validationSchema:T,showBack:!0,goBack:a,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&c.a.createElement(o.a,{disabled:e,type:"button",variant:"default",onClick:g},c.a.createElement(r.c,{id:"COMMON_ACTION_REMOVE"}))},c.a.createElement(I,null))}}}]);