(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[52],{1810:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(70),r=a(8),s=a(18),o=a(6);const l="alert/setting",E="/v2/api/site/{site}/"+l;var m=a(528),_=a(2852);const O=(e,t)=>Object(o.t)(l,E,"alertSetting",e,t),N=e=>Object(o.C)(l,"alertSetting",E,(e=>{const t=Object(m.a)(e.alert_type_settings);return Object.keys(t).forEach(e=>{Object(_.a)(t,[e,"label"]),Object(_.a)(t,[e,"level"]),Object(_.a)(t,[e,"description"])}),{...e,alert_type_settings:t}})(e),{},{extend:!0,mergeAndOverrideKeys:[]});var d=a(4);const T=Object(d.a)(e=>Object(o.w)(O(),e.models),e=>{var t;return null!==(t=null==e?void 0:e.data)&&void 0!==t?t:{}});var S,C,p;!function(e){e.AUTO="AUTO",e.CUSTOM="CUSTOM",e.OFF="OFF"}(S||(S={})),function(e){e.BASIC="BASIC",e.ADVANCED="ADVANCED"}(C||(C={})),function(e){e.DEVICE_CONNECTION="DEVICE_CONNECTION",e.BACKUP_CONNECTION_IN_USE="BACKUP_CONNECTION_IN_USE",e.CLIENT_WIFI_CONNECTION_ISSUE="CLIENT_WIFI_CONNECTION_ISSUE",e.FIRMWARE_UPDATE="FIRMWARE_UPDATE",e.CLIENT_CONNECTION="CLIENT_CONNECTION",e.VPN_CLIENT_CONNECTION="VPN_CLIENT_CONNECTION",e.HOTSPOT_CLIENT_CONNECTION="HOTSPOT_CLIENT_CONNECTION",e.UNASSIGNED_DEVICE_IP_ADDRESS="UNASSIGNED_DEVICE_IP_ADDRESS",e.ROGUE_ACCESS_POINT="ROGUE_ACCESS_POINT",e.AP_CHANNEL_CHANGE="AP_CHANNEL_CHANGE",e.BLOCKED_CLIENT_CONNECTION_ATTEMPT="BLOCKED_CLIENT_CONNECTION_ATTEMPT",e.RADIUS_SERVER_ISSUE="RADIUS_SERVER_ISSUE",e.AP_RADAR_DETECTION="AP_RADAR_DETECTION",e.DNS_SERVER_ISSUE="DNS_SERVER_ISSUE",e.THREAT_DETECTION_AND_PREVENTION="THREAT_DETECTION_AND_PREVENTION"}(p||(p={}));var I=a(1938),u=a(27),b=a(16),g=a(2),h=a(36),A=a(1739),f=a(2923),x=a(2822),j=a(2922),R=a(32),v=a(2909),y=a(5),P=a(44),D=a(15),M=a(728);const F=Object(y.c)(A.a)`
  padding: 32px 0px !important;
`;var k=Object(g.f)(({intl:e})=>{const t=Object(h.k)(),a=Object(c.a)("/ips/traffic-log"),n=Object(r.useSelector)(M.x),{values:s,setValues:o}=Object(P.e)(),{alert_type_settings:l,setting_preference:E}=s;return i.a.createElement(F,null,i.a.createElement(f.a,{headerCaption:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_HEADER_CAPTION"}),headerContent:i.a.createElement(x.a,{direction:"row",noWrap:!0,items:[{id:"off",children:i.a.createElement(g.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_OFF"}),onChange:()=>o({...s,setting_preference:S.OFF}),checked:E===S.OFF},{id:"auto",children:i.a.createElement(g.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_DEFAULT"}),onChange:()=>o({...s,setting_preference:S.AUTO}),checked:E===S.AUTO},{id:"custom",children:i.a.createElement(g.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_CUSTOM"}),onChange:()=>o({...s,setting_preference:S.CUSTOM}),checked:E===S.CUSTOM}],variant:"boxed"}),headerIcon:i.a.createElement(D.dc,{width:28,height:28}),headerTitle:e.formatMessage({id:"COMMON_NETWORK"})},E===S.AUTO&&i.a.createElement(j.a,null,i.a.createElement(R.a,{size:"body"},i.a.createElement(g.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_DESCRIPTION"}))),E===S.CUSTOM&&i.a.createElement(i.a.Fragment,null,Object.keys(l).map(c=>l[c].level===C.ADVANCED?null:i.a.createElement(v.a,{key:c,label:l[c].label,caption:l[c].description,labelProps:{onClick:()=>c===p.THREAT_DETECTION_AND_PREVENTION&&n&&t.push(a)},onChange:(e,t,a)=>{o({...s,alert_type_settings:{...s.alert_type_settings,[c]:{...l[c],[t]:a}}})},toggles:[{id:"send_mobile_push_notification",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_PUSH_NOTIFICATIONS"}),checked:l[c].send_mobile_push_notification},{id:"send_email",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_EMAIL_NOTIFICATIONS"}),checked:l[c].send_email}]})),i.a.createElement(R.a,{size:"header-s",style:{marginTop:"32px",marginBottom:"16px"}},i.a.createElement(g.c,{id:"SETTINGS_SYSTEM_NOTIFICATIONS_ADVANCED_NOTIFICATIONS_LABEL"})),Object.keys(l).map(t=>l[t].level===C.BASIC?null:i.a.createElement(v.a,{key:t,label:l[t].label,caption:l[t].description,onChange:(e,a,n)=>{o({...s,alert_type_settings:{...s.alert_type_settings,[t]:{...l[t],[a]:n}}})},toggles:[{id:"show_in_alert_page",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_NOTIFICATION_PAGE"}),checked:l[t].show_in_alert_page},{id:"send_mobile_push_notification",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_PUSH_NOTIFICATIONS"}),checked:l[t].send_mobile_push_notification},{id:"send_email",label:e.formatMessage({id:"SETTINGS_SYSTEM_NOTIFICATIONS_PREFERENCE_EMAIL_NOTIFICATIONS"}),checked:l[t].send_email}]})))))});const U={isSubmitted:!1};var w=({onBack:e})=>{const t=Object(r.useDispatch)(),a=Object(r.useSelector)(T),l=Object(r.useSelector)(s.x),E=Object(n.useMemo)(()=>({...a}),[a]),m=Object(n.useCallback)((e,{setStatus:a,setSubmitting:n})=>t(N(e)).then(()=>{t(Object(u.c)({icon:b.a.success,message:"SETTINGS_SYSTEM_NOTIFICATIONS_SAVE_SUCCESS"})),a({isSubmitted:!0})}).catch(e=>{t(Object(u.c)({errorMessage:e.msg,errorValues:e,icon:b.a.danger,message:"SETTINGS_SYSTEM_NOTIFICATIONS_SAVE_ERROR"})),n(!1)}),[t]);return Object(c.f)([O(void 0,{crudCacheStrategy:{type:o.a.CACHE}})],i.a.createElement(I.b,{hidddenHeader:!0,goBack:e,hideClose:!0,initialStatus:U,initialValues:E,isEdit:!l,isView:l,validationSchema:void 0,onEscClicked:e,onSubmit:m},i.a.createElement(k,null)))};t.default=()=>{const e=Object(c.h)();return i.a.createElement(w,{onBack:e})}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(2),s=a(1946),o=a.n(s),l=a(1741),E=a(520),m=a(521);const _=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const s=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),O=Object(m.a)(t),N=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),d=Object(n.useCallback)(e=>(e={},t={})=>O(e,t)&&N(e,t),[O,N]);return!!e&&i.a.createElement(o.a,{when:d(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(l.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:s,parentSelector:E.b,title:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(_,null,i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return k})),a.d(t,"a",(function(){return R}));var n=a(0),i=a.n(n),c=a(5),r=a(2),s=a(44),o=a(2847),l=a(2658),E=a(1929),m=a(783),_=a(71),O=a(1940),N=a(15),d=a(32),T=a(42),S=a(1847),C=a(782),p=a(1930);const I=c.a`
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
`;var u=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...r})=>{const s=Object(p.a)(),o=Object(C.a)(c),l=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(S.a,Object.assign({appear:t||!o||s,in:t||!o||s,timeout:e,classNames:I,mountOnEnter:!0},r),a)),[a,t,o,s,e,r]);return i.a.createElement(i.a.Fragment,null,l)};const b=c.a`
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
`;var g=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...r})=>{const s=Object(p.a)(),o=Object(C.a)(c),l=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(S.a,Object.assign({appear:t||!o||s,in:t||!o||s,timeout:e,classNames:b,mountOnEnter:!0},r),a)),[a,t,o,s,e,r]);return i.a.createElement(i.a.Fragment,null,l)};const h=Object(c.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,A=Object(c.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,f=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,x=Object(c.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,j=Object(c.c)(d.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var R=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:r})=>{const{motif:s}=Object(T.a)();return i.a.createElement(g,{ignoredPaths:r},i.a.createElement(A,{flex:"none",height:"65px"},i.a.createElement(u,{ignoredPaths:r},i.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(h,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(x,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:s},i.a.createElement(N.f,{size:"original"}))),i.a.createElement(f,null,i.a.createElement(j,{weight:"bold"},e.component)),i.a.createElement(h,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(x,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(N.y,{size:"original"})))))))};const v=Object(c.c)(_.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,y=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,P=Object(c.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,D=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,M=Object(c.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,F=Object(c.c)(_.k)`
  height: 100%;
  width: 100%;
`;var k=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:m,title:N,unsavedChangesModalIgnoredPaths:d,onEscClicked:T,submitText:S="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:C=!1,customFooterButtons:p,hidddenHeader:I,...u})=>i.a.createElement(s.c,Object.assign({enableReinitialize:!0},u),({dirty:c,handleReset:s,handleSubmit:u,isSubmitting:b})=>i.a.createElement(y,{autoComplete:"off",onSubmit:u},i.a.createElement(F,{vertical:!0},!I&&i.a.createElement(R,{goBack:a,hideClose:n,showBack:m,title:N,onEscClicked:T,ignoredPaths:d}),i.a.createElement(O.a,{ignoredPaths:d},i.a.createElement(M,{flex:"1"},i.a.createElement(v,{flex:"none",flexDirection:"column"},e))),!t&&!o&&i.a.createElement(E.a,{ignoredPaths:d,when:c&&!b}),(!o||C)&&i.a.createElement(D,{active:c||C},i.a.createElement(_.g,{justifyContent:p?"space-between":"flex-end",width:"100%",alignItems:"center"},p&&i.a.createElement(P,null,p(b)),!o&&i.a.createElement(_.g,null,i.a.createElement(l.a,{disabled:!c||b,type:"button",variant:"default",onClick:s},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(l.a,{disabled:!c||b,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:S}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),r=a(5),s=a(782),o=a(1930);const l=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...E})=>{const m=Object(o.a)(),_=Object(s.a)(a),O=Object(n.useMemo)(()=>i.a.Children.map(r,a=>null===a?a:i.a.createElement(c.a,Object.assign({appear:t||!_||m,in:t||!_||m,timeout:e,classNames:l,mountOnEnter:!0},E),a)),[r,t,_,m,e,E]);return i.a.createElement(i.a.Fragment,null,O)}}}]);