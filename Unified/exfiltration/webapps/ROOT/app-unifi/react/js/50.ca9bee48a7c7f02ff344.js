(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[50],{1824:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a(34),o=a(50),s=a(70),l=a(6),m=a(2),p=a(1739),d=a(1736),u=a(1737),E=a(1938),b=a(27),h=a(71),g=a(62),x=a(322),O=a(16),f=a(30),S=f.a.object().shape({mdns_enabled:f.a.boolean()});var _=e=>{const{initialValues:t,onBack:a}=e,r=Object(c.useDispatch)(),s=Object(n.useContext)(h.l),l=Object(n.useCallback)((e,{setSubmitting:t})=>r(Object(o.saveSettings)(e)).then(()=>{r(Object(b.c)({icon:O.a.success,message:"SETTINGS_GATEWAY_MDNS_SAVE_SUCCESS"})),a()}).catch(e=>{r(Object(b.c)({errorMessage:e.msg,errorValues:e,icon:O.a.danger,message:"SETTINGS_GATEWAY_MDNS_SAVE_ERROR"})),t(!1)}),[r,a]),f=Object(n.useMemo)(()=>({mdns_enabled:!1,...t}),[t]);return i.a.createElement(E.b,{onSubmit:l,title:{component:i.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"},initialValues:f,isEdit:!1,isView:s,onEscClicked:a,validationSchema:S,showBack:!0,goBack:a},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(x.SearchableGridLabel,{htmlFor:"mdns_enabled",alignWith:"toggle",label:i.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"}),description:i.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS_DESCRIPTION"})}),i.a.createElement(u.a,{column:!0},i.a.createElement(g.Field,{type:"checkbox",name:"mdns_enabled"})))))};const j={};t.default=()=>{const e=Object(c.useSelector)(o.selectUsgSettings),t=Object(s.h)();return Object(s.f)([Object(o.fetchSettings)({type:l.a.CACHE}),Object(r.fetchNetworks)(void 0,{crudCacheStrategy:{type:l.a.CACHE}})],i.a.createElement(_,{initialValues:e||j,onBack:t}))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(2),o=a(1946),s=a.n(o),l=a(1741),m=a(520),p=a(521);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const o=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(p.a)(t),E=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),b=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&E(e,t),[u,E]);return!!e&&i.a.createElement(s.a,{when:b(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(l.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:o,parentSelector:m.b,title:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(d,null,i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return R})),a.d(t,"a",(function(){return A}));var n=a(0),i=a.n(n),c=a(5),r=a(2),o=a(44),s=a(2847),l=a(2658),m=a(1929),p=a(783),d=a(71),u=a(1940),E=a(15),b=a(32),h=a(42),g=a(1847),x=a(782),O=a(1930);const f=c.a`
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
`;var S=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...r})=>{const o=Object(O.a)(),s=Object(x.a)(c),l=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(g.a,Object.assign({appear:t||!s||o,in:t||!s||o,timeout:e,classNames:f,mountOnEnter:!0},r),a)),[a,t,s,o,e,r]);return i.a.createElement(i.a.Fragment,null,l)};const _=c.a`
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
`;var j=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...r})=>{const o=Object(O.a)(),s=Object(x.a)(c),l=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(g.a,Object.assign({appear:t||!s||o,in:t||!s||o,timeout:e,classNames:_,mountOnEnter:!0},r),a)),[a,t,s,o,e,r]);return i.a.createElement(i.a.Fragment,null,l)};const N=Object(c.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,C=Object(c.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,T=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,y=Object(c.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,v=Object(c.c)(b.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var A=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:r})=>{const{motif:o}=Object(h.a)();return i.a.createElement(j,{ignoredPaths:r},i.a.createElement(C,{flex:"none",height:"65px"},i.a.createElement(S,{ignoredPaths:r},i.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(N,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(y,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:o},i.a.createElement(E.f,{size:"original"}))),i.a.createElement(T,null,i.a.createElement(v,{weight:"bold"},e.component)),i.a.createElement(N,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(y,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(E.y,{size:"original"})))))))};const w=Object(c.c)(d.g)`
  width: 100%;
  max-width: ${p.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,k=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,I=Object(c.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,G=Object(c.c)(s.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${p.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,D=Object(c.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,M=Object(c.c)(d.k)`
  height: 100%;
  width: 100%;
`;var R=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:s,showBack:p,title:E,unsavedChangesModalIgnoredPaths:b,onEscClicked:h,submitText:g="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:x=!1,customFooterButtons:O,hidddenHeader:f,...S})=>i.a.createElement(o.c,Object.assign({enableReinitialize:!0},S),({dirty:c,handleReset:o,handleSubmit:S,isSubmitting:_})=>i.a.createElement(k,{autoComplete:"off",onSubmit:S},i.a.createElement(M,{vertical:!0},!f&&i.a.createElement(A,{goBack:a,hideClose:n,showBack:p,title:E,onEscClicked:h,ignoredPaths:b}),i.a.createElement(u.a,{ignoredPaths:b},i.a.createElement(D,{flex:"1"},i.a.createElement(w,{flex:"none",flexDirection:"column"},e))),!t&&!s&&i.a.createElement(m.a,{ignoredPaths:b,when:c&&!_}),(!s||x)&&i.a.createElement(G,{active:c||x},i.a.createElement(d.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&i.a.createElement(I,null,O(_)),!s&&i.a.createElement(d.g,null,i.a.createElement(l.a,{disabled:!c||_,type:"button",variant:"default",onClick:o},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(l.a,{disabled:!c||_,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:g}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),r=a(5),o=a(782),s=a(1930);const l=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...m})=>{const p=Object(s.a)(),d=Object(o.a)(a),u=Object(n.useMemo)(()=>i.a.Children.map(r,a=>null===a?a:i.a.createElement(c.a,Object.assign({appear:t||!d||p,in:t||!d||p,timeout:e,classNames:l,mountOnEnter:!0},m),a)),[r,t,d,p,e,m]);return i.a.createElement(i.a.Fragment,null,u)}}}]);