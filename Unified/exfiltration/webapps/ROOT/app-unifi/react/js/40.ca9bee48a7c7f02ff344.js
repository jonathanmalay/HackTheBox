(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[40],{1822:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2004),c=a(451),i=a(50),_=a(70),E=a(6),o=a(2),s=a(8),m=a(36),S=a(18),u=a(83),d=a(1938),A=a(27),R=a(322),T=a(16),b=a(44),I=a(1739),p=a(1736),N=a(1737),O=a(1914),D=a(62);var h=()=>{const{values:e}=Object(b.e)();return l.a.createElement(I.a,null,l.a.createElement(p.a,null,l.a.createElement(R.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"enabled",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SERVER"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_DESCRIPTION_RADIUS_SERVER"})}),l.a.createElement(N.a,null,l.a.createElement(D.Field,{name:"enabled",type:"checkbox"}))),l.a.createElement(p.a,{disabled:!e.enabled},l.a.createElement(R.SearchableGridLabel,{alignWith:"input",htmlFor:"x_secret",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SECRET"}),description:l.a.createElement(o.c,{id:"SETTINGS_GATEWAY_RADIUS_DESCRIPTION_SECRET"}),searchText:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SECRET_SEARCH_TEXT"}),l.a.createElement(N.a,{column:!0},l.a.createElement(D.Field,{name:"x_secret",full:!0,type:"password",passwordToggle:!0,disabled:!e.enabled}))),l.a.createElement(p.a,null,l.a.createElement(O.a,{alignWith:"toggleSmall",htmlFor:"vlan_enabled",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_WIRED"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_DESCRIPTION_ENABLE_WIRED"})}),l.a.createElement(N.a,null,l.a.createElement(D.Field,{name:"vlan_enabled",type:"checkbox"}))),l.a.createElement(p.a,null,l.a.createElement(O.a,{alignWith:"toggleSmall",htmlFor:"vlan_wlan_mode",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_WIRELESS"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_DESCRIPTION_ENABLE_WIRELESS"})}),l.a.createElement(N.a,null,l.a.createElement(D.Field,{name:"vlan_wlan_mode",type:"checkbox"}))))};var C=()=>{const{values:e}=Object(b.e)();return l.a.createElement(I.a,{padding:"none"},l.a.createElement(p.a,{disabled:!e.enabled},l.a.createElement(R.SearchableGridLabel,{alignWith:"input",htmlFor:"auth_port",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_AUTHENTICATION_PORT"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_DESCRIPTIONS_AUTHENTICATION_PORT"}),searchText:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_AUTHENTICATION_PORT_SEARCH_TEXT"}),l.a.createElement(N.a,{column:!0},l.a.createElement(D.Field,{name:"auth_port",full:!0,type:"number",disabled:!e.enabled}))),l.a.createElement(p.a,{disabled:!e.enabled},l.a.createElement(R.SearchableGridLabel,{alignWith:"input",htmlFor:"acct_port",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_PORT"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_DESCRIPTIONS_ACCOUNTING_PORT"}),searchText:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_PORT_SEARCH_TEXT"}),l.a.createElement(N.a,{column:!0},l.a.createElement(D.Field,{name:"acct_port",full:!0,type:"number",disabled:!e.enabled}))),l.a.createElement(p.a,{disabled:!e.enabled},l.a.createElement(R.SearchableGridLabel,{alignWith:"input",htmlFor:"interim_update_interval",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_INTERIM_INTERVAL"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_DESCRIPTIONS_ACCOUNTING_INTERIM_INTERVAL"}),searchText:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_INTERIM_INTERVAL_SEARCH_TEXT"}),l.a.createElement(N.a,{column:!0},l.a.createElement(D.Field,{name:"interim_update_interval",full:!0,type:"number",disabled:!e.enabled}))),l.a.createElement(p.a,{disabled:!e.enabled},l.a.createElement(R.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"tunneled_reply",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_TUNNELED_REPLY"}),description:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_DESCRIPTIONS_TUNNELED_REPLY"}),searchText:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_TUNNELED_REPLY_SEARCH_TEXT"}),l.a.createElement(N.a,null,l.a.createElement(D.Field,{name:"tunneled_reply",type:"checkbox",disabled:!e.enabled}))))},g=a(5),L=a(1136),U=a(1851),f=a(15),M=a(71),v=a(2476);const j=Object(g.c)(L.a)`
  margin-top: 35px;
  margin-right: auto !important;
`,x=Object(g.c)(f.wb)`
  color: ${({theme:e})=>e.motifPalette.ui06};
`,V=Object(g.c)(M.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]};
`;var G=()=>{const e=Object(m.k)(),t=Object(_.i)("advanced/radius/form/user"),a=Object(n.useCallback)(e=>`${t}/${e}`,[t]),c=Object(s.useSelector)(r.selectNonNetworkAccounts);return l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,{columns:v.b,idField:"_id",items:c,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(a(t))}),l.a.createElement(j,{variant:"comfy"},l.a.createElement(x,null),l.a.createElement(V,{legacy:!1,name:"new-radius-user",variant:"link",type:"button",onClick:()=>e.push(t)},l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_SECTION_BUTTON_ADD_RADIUS_USER"}))))},y=a(2522),P=a(2167),F=a(2165);var w=()=>{const{user:e}=Object(m.m)(),t=Object(n.useMemo)(()=>!!e,[e]),a=Object(s.useDispatch)(),r=Object(s.useSelector)(S.x),E=Object(s.useSelector)(c.selectDefaultRadiusProfile),b=Object(s.useSelector)(u.f),I=Object(s.useSelector)(i.selectRadiusSettings),p=Object(m.k)(),N=Object(n.useMemo)(()=>({...I,vlan_enabled:E.vlan_enabled||!1,vlan_wlan_mode:E.vlan_wlan_mode===c.RADIUS_VLAN_OPTIONS.ENABLED,configure_whole_network:!0===I.enabled||I.configure_whole_network}),[E.vlan_enabled,E.vlan_wlan_mode,I]),O=Object(_.h)(),D=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),g=Object(_.i)("advanced/radius/form"),L=Object(n.useCallback)(()=>{p.push(g)},[g,p]),U=Object(n.useMemo)(()=>({component:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_PAGE_TITLE",values:{name:Object(F.b)(E,b)}}),message:"radius-server"}),[E,b]),f=Object(n.useMemo)(()=>[{id:"radius-settings",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_SECTION_LABEL_RADIUS_SETTINGS"}),renderContent:()=>l.a.createElement(C,null)},{id:"radius-users",label:l.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_SECTION_LABEL_RADIUS_USERS"}),renderContent:()=>l.a.createElement(G,null),openByDefault:t}],[t]),M=Object(n.useCallback)((e,{setSubmitting:t})=>{const{vlan_enabled:n,vlan_wlan_mode:l,...r}=e,_={...E,vlan_enabled:n,vlan_wlan_mode:e.vlan_wlan_mode?c.RADIUS_VLAN_OPTIONS.ENABLED:c.RADIUS_VLAN_OPTIONS.DISABLED},o={...r,key:"radius"};o.enabled||delete o.x_secret,a(Object(i.saveSettings)(o)).then(a(Object(c.saveRadiusProfile)(_))).then(()=>{a(Object(A.c)({icon:T.a.success,message:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_TOAST_SAVE_SUCCESS"})),O()}).catch(e=>{a(Object(A.c)({errorMessage:e.msg,errorValues:e,icon:T.a.danger,message:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_TOAST_SAVE_FAILURE"})),t(!1)})},[E,a,O]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b,{goBack:O,initialStatus:D,initialValues:N,isEdit:!0,isView:r,showBack:!0,title:U,validationSchema:P.b,onEscClicked:O,hideClose:!0,onSubmit:M,unsavedChangesModalIgnoredPaths:/\/radius\/form\/user(\/[\w_-]*\/?)?$/},l.a.createElement(h,null),l.a.createElement(R.SearchableAccordion,{items:f,multiOpen:!0,variant:"primary"})),t&&l.a.createElement(y.a,{onClose:L}))};t.default=()=>Object(_.f)([Object(c.fetchRadiusProfiles)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(r.fetchAccounts)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(i.fetchSettings)({type:E.a.CACHE})],l.a.createElement(w,null))},1929:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(5),c=a(2),i=a(1946),_=a.n(i),E=a(1741),o=a(520),s=a(521);const m=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const i=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),S=Object(s.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),d=Object(n.useCallback)(e=>(e={},t={})=>S(e,t)&&u(e,t),[S,u]);return!!e&&l.a.createElement(_.a,{when:d(t)},({onCancel:e,onConfirm:t})=>l.a.createElement(E.a,{actions:[{type:"button",text:l.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:l.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:i,parentSelector:o.b,title:l.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},l.a.createElement(m,null,l.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),l=a(36);t.a=()=>{const e=Object(l.l)(),[t]=Object(n.useState)(e.pathname),[a,r]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{r(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return G})),a.d(t,"a",(function(){return U}));var n=a(0),l=a.n(n),r=a(5),c=a(2),i=a(44),_=a(2847),E=a(2658),o=a(1929),s=a(783),m=a(71),S=a(1940),u=a(15),d=a(32),A=a(42),R=a(1847),T=a(782),b=a(1930);const I=r.a`
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
`;var p=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const i=Object(b.a)(),_=Object(T.a)(r),E=Object(n.useMemo)(()=>l.a.Children.map(a,a=>null===a?a:l.a.createElement(R.a,Object.assign({appear:t||!_||i,in:t||!_||i,timeout:e,classNames:I,mountOnEnter:!0},c),a)),[a,t,_,i,e,c]);return l.a.createElement(l.a.Fragment,null,E)};const N=r.a`
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
`;var O=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const i=Object(b.a)(),_=Object(T.a)(r),E=Object(n.useMemo)(()=>l.a.Children.map(a,a=>null===a?a:l.a.createElement(R.a,Object.assign({appear:t||!_||i,in:t||!_||i,timeout:e,classNames:N,mountOnEnter:!0},c),a)),[a,t,_,i,e,c]);return l.a.createElement(l.a.Fragment,null,E)};const D=Object(r.c)(m.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,h=Object(r.c)(m.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,C=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,g=Object(r.c)(m.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,L=Object(r.c)(d.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var U=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:r,ignoredPaths:c})=>{const{motif:i}=Object(A.a)();return l.a.createElement(O,{ignoredPaths:c},l.a.createElement(h,{flex:"none",height:"65px"},l.a.createElement(p,{ignoredPaths:c},l.a.createElement(m.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},l.a.createElement(D,{alignItems:"center",flex:"1",height:"100%"},t&&l.a.createElement(g,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:i},l.a.createElement(u.f,{size:"original"}))),l.a.createElement(C,null,l.a.createElement(L,{weight:"bold"},e.component)),l.a.createElement(D,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&l.a.createElement(g,{legacy:!1,name:"closeButton",type:"button",onClick:n},l.a.createElement(u.y,{size:"original"})))))))};const f=Object(r.c)(m.g)`
  width: 100%;
  max-width: ${s.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,M=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,v=Object(r.c)(m.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,j=Object(r.c)(_.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${s.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,x=Object(r.c)(m.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,V=Object(r.c)(m.k)`
  height: 100%;
  width: 100%;
`;var G=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:r,isView:_,showBack:s,title:u,unsavedChangesModalIgnoredPaths:d,onEscClicked:A,submitText:R="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:T=!1,customFooterButtons:b,hidddenHeader:I,...p})=>l.a.createElement(i.c,Object.assign({enableReinitialize:!0},p),({dirty:r,handleReset:i,handleSubmit:p,isSubmitting:N})=>l.a.createElement(M,{autoComplete:"off",onSubmit:p},l.a.createElement(V,{vertical:!0},!I&&l.a.createElement(U,{goBack:a,hideClose:n,showBack:s,title:u,onEscClicked:A,ignoredPaths:d}),l.a.createElement(S.a,{ignoredPaths:d},l.a.createElement(x,{flex:"1"},l.a.createElement(f,{flex:"none",flexDirection:"column"},e))),!t&&!_&&l.a.createElement(o.a,{ignoredPaths:d,when:r&&!N}),(!_||T)&&l.a.createElement(j,{active:r||T},l.a.createElement(m.g,{justifyContent:b?"space-between":"flex-end",width:"100%",alignItems:"center"},b&&l.a.createElement(v,null,b(N)),!_&&l.a.createElement(m.g,null,l.a.createElement(E.a,{disabled:!r||N,type:"button",variant:"default",onClick:i},l.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),l.a.createElement(E.a,{disabled:!r||N,type:"submit",variant:"primary"},l.a.createElement(c.c,{id:R}))))))))},1940:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1847),c=a(5),i=a(782),_=a(1930);const E=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,...o})=>{const s=Object(_.a)(),m=Object(i.a)(a),S=Object(n.useMemo)(()=>l.a.Children.map(c,a=>null===a?a:l.a.createElement(r.a,Object.assign({appear:t||!m||s,in:t||!m||s,timeout:e,classNames:E,mountOnEnter:!0},o),a)),[c,t,m,s,e,o]);return l.a.createElement(l.a.Fragment,null,S)}},2004:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchAccounts",(function(){return s})),a.d(t,"saveAccount",(function(){return m})),a.d(t,"updateAccount",(function(){return S})),a.d(t,"removeAccount",(function(){return u})),a.d(t,"createAccountsBatch",(function(){return d})),a.d(t,"updateAccountsBatch",(function(){return A})),a.d(t,"removeAccountsBatch",(function(){return R})),a.d(t,"MODEL",(function(){return l})),a.d(t,"PATH",(function(){return r})),a.d(t,"TUNNEL_TYPES",(function(){return c})),a.d(t,"NONE_VALUE",(function(){return i})),a.d(t,"tunnelTypeOptions",(function(){return _})),a.d(t,"tunnelMediumTypeOptions",(function(){return E})),a.d(t,"selectAccount",(function(){return I})),a.d(t,"selectAccounts",(function(){return p})),a.d(t,"selectNetworkAccounts",(function(){return N})),a.d(t,"selectNonNetworkAccounts",(function(){return O})),a.d(t,"selectAccountById",(function(){return D}));var n=a(6);const l="users",r="/v2/api/site/{site}/radius/"+l;var c;!function(e){e[e.PTPP=1]="PTPP",e[e.L2TP=3]="L2TP"}(c||(c={}));const i=0,_=Array.from({length:14}).map((e,t)=>0===t?{value:i,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_TYPE_NONE"}:{value:t,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_TYPE_"+t,values:{id:t}}),E=Array.from({length:16}).map((e,t)=>0===t?{value:i,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_MEDIUM_TYPE_NONE"}:{value:t,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_MEDIUM_TYPE_"+t,values:{id:t}});var o=a(28);const s=(e,t)=>Object(n.q)(l,r,e,{idField:"_id",...t}),m=e=>Object(n.h)(l,r+"/batch_add",[e],{},Object(o.a)("SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_ERROR_MESSAGE","SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_SUCCESS_MESSAGE",{name:e.name})),S=e=>Object(n.B)(l,r+"/batch_update",[e],{},{...Object(o.a)("SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_ERROR_MESSAGE","SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_SUCCESS_MESSAGE",{name:e.name}),method:"post"}),u=(e,t)=>Object(n.m)(l,r+"/batch_delete",[e],{},{...Object(o.a)("SETTINGS_GATEWAY_RADIUS_REMOVE_USER_ERROR_MESSAGE","SETTINGS_GATEWAY_RADIUS_REMOVE_USER_SUCCESS_MESSAGE",{name:t}),method:"post"}),d=e=>Object(n.h)(l,r+"/batch_add",e,{}),A=e=>Object(n.B)(l,r+"/batch_update",e,{},{method:"post"}),R=e=>Object(n.m)(l,r+"/batch_delete",e,{},{method:"post"});var T=a(63),b=a(4);const I=Object(n.A)(s()),p=Object(b.a)(I,o.c),N=e=>Object(b.a)(p,t=>t.filter(({networkconf_id:t})=>t&&t===e)||[]),O=Object(b.a)(p,e=>e.filter(({networkconf_id:e})=>!e)||[]),D=Object(b.a)(p,e=>Object(T.a)(t=>e.find(({_id:e})=>t===e)))},2061:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),l=a.n(n),r=a(5),c=a(1172),i=a(32),_=a(607),E=a(71),o=a(2);const s=100,m=Object(r.c)(E.g)`
  max-width: ${s}px;
`,S=Object(r.c)(c.a,{shouldForwardProp:e=>"itemCount"!==e})`
  > div > div > div {
    height: ${({itemCount:e})=>`calc(24px + ${14*e}px)`};
    max-height: 98px;
    padding: 8px 0 8px 8px;
  }

  .tooltipClassName {
    &,
    &:before {
      background-color: ${({theme:e})=>e.motifPalette.ui07};
    }
  }
`,u=Object(r.c)("div")`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.motifPalette.link02};
  }
`,d=Object(r.c)(i.a)`
  display: block;
  width: 100%;
  line-height: 1.33333;
`;t.b=({names:e,messageId:t,rootSelector:a})=>{const r=Object(n.useMemo)(()=>e.map(e=>l.a.createElement(d,{truncate:!0,color:"primary"},e)),[e]);return l.a.createElement(_.a,{rootSelector:a,openOnMouseEnter:!0,align:"topCenter",toggleOffset:-10,renderToggle:()=>l.a.createElement(m,null,l.a.createElement(i.a,{truncate:!0},t&&e.length>1?l.a.createElement(o.c,{id:t,values:{count:e.length}}):e.join(", "))),renderCard:({open:t})=>t&&e.length>1&&l.a.createElement(S,{itemCount:e.length,isInteractive:!0,width:132,tooltipProps:{tooltipClassName:"tooltipClassName"},message:l.a.createElement(u,null,r)})})}},2164:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="radiusBubbleContainer"},2165:function(e,t,a){"use strict";a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return S}));var n=a(0),l=a.n(n),r=a(5),c=a(21);const i=Object(r.c)(c.a)`
  margin: ${({theme:e})=>e.space[3]}px 0;
`,_=Object(r.c)("div")`
  margin: ${({theme:e})=>e.space[2]}px 0;
`,E=e=>`${e.ip} : ${e.port}`,o=e=>l.a.createElement(_,{key:`${e.ip}${e.port}`},E(e)),s=({children:e})=>l.a.createElement(i,{flexDirection:"column"},e),m=({auth_servers:e,attr_no_delete:t},a)=>t?l.a.createElement("span",null,a):e&&e.length>0?l.a.createElement(s,null,e.map(o)):"-",S=({accounting_enabled:e,acct_servers:t,attr_no_delete:a})=>{if(a)return"-";return t&&t.length>0&&e?l.a.createElement(s,null,t.map(o)):"-"}},2167:function(e,t,a){"use strict";a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(0),l=a.n(n),r=a(2),c=a(105),i=a(451),_=a(30);const E=_.a.object().shape({enabled:_.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SERVER"),x_secret:_.a.string().when("enabled",{is:!0,then:_.a.string().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SECRET").required()}),auth_port:_.a.number().when("enabled",{is:!0,then:_.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_AUTHENTICATION_PORT").required().min(i.RADIUS_LIMITS.MIN_PORT).max(i.RADIUS_LIMITS.MAX_PORT)}),acct_port:_.a.number().when("enabled",{is:!0,then:_.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_PORT").required().min(i.RADIUS_LIMITS.MIN_PORT).max(i.RADIUS_LIMITS.MAX_PORT)}),interim_update_interval:_.a.number().when("enabled",{is:!0,then:_.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_INTERIM_INTERVAL").required().min(i.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(i.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),tunneled_reply:_.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_TUNNELED_REPLY")}),o=_.a.object().shape({ip:_.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(c.h,l.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_IPV4"})),port:_.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(i.RADIUS_LIMITS.MIN_PORT).max(i.RADIUS_LIMITS.MAX_PORT),x_secret:_.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),s=_.a.object().shape({name:_.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_NAME").required(),auth_servers:_.a.array().of(o),accounting_enabled:_.a.bool(),interim_update_enabled:_.a.bool(),interim_update_interval:_.a.number().when("interim_update_enabled",{is:!0,then:_.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_INTERIM_UPDATE_INTERVAL").required().min(i.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(i.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),acct_servers:_.a.array().when("accounting_enabled",{is:!0,then:_.a.array().of(o)})})},2476:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(0),l=a.n(n),r=a(2),c=a(2004),i=a(2061),_=a(2164),E=a(2165);const o=e=>[{id:"name",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_NAME"}),sortable:!0,renderCell:({name:e})=>e,minWidth:100,maxWidth:150},{id:"auth_servers",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_AUTH_SERVERS"}),renderCell:t=>{const{auth_servers:a,attr_no_delete:n}=t;return n?e:l.a.createElement(i.b,{names:a.map(E.c),messageId:"SETTINGS_ADVANCED_RADIUS_TABLE_AUTH_SERVERS_COUNT",rootSelector:"#"+_.a})},minWidth:i.a,maxWidth:200},{id:"acct_servers",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_ACCT_SERVERS"}),renderCell:e=>Object(E.a)(e),minWidth:170}],s=[{id:"name",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_NAME"}),sortable:!0,renderCell:({name:e})=>e},{id:"vlan",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_TABLE_LABEL_VLAN"}),sortable:!0,renderCell:({vlan:e})=>e},{id:"tunnel_type",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_TABLE_LABEL_TUNNEL_TYPE"}),sortable:!0,renderCell:({tunnel_type:e})=>{const t=c.tunnelTypeOptions[e||0];return l.a.createElement(r.c,{id:t.label,values:t.values})}},{id:"tunnel_medium_type",label:l.a.createElement(r.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_TABLE_LABEL_TUNNEL_MEDIUM_TYPE"}),sortable:!0,renderCell:({tunnel_medium_type:e})=>{const t=c.tunnelMediumTypeOptions[e||0];return l.a.createElement(r.c,{id:t.label,values:t.values})}}]},2522:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(5),c=a(2),i=a(8),_=a(36),E=a(44),o=a(1142),s=a(15),m=a(215),S=a(65),u=a(2004),d=a(83),A=a(70),R=a(663),T=a(71),b=a(62),I=a(105),p=a(100),N=a(30);const O=(e,t)=>e.map(e=>({value:e.value,label:t.formatMessage({id:e.label},{id:e.values?e.values.id:void 0})})),D=e=>{if(e)return{...e,tunnel_type:""!==e.tunnel_type?e.tunnel_type:0,tunnel_medium_type:""!==e.tunnel_medium_type?e.tunnel_medium_type:0}},h=Object(r.c)(S.a,{shouldForwardProp:e=>"showRemove"!==e})`
  > div {
    overflow: visible !important;
  }

  ${({showRemove:e})=>e&&"& > footer > div {\n      width: 100%;\n\n      & > div:first-child {\n        margin-right: auto;\n      }\n    }"}
`,C=Object(r.c)(b.Field,{shouldForwardProp:e=>"hasHelperMessage"!==e})`
  margin-top: 28px;
  ${({hasHelperMessage:e})=>e&&"margin-bottom: 40px;"}
`,g=Object(r.c)("div")`
  margin: 60px 0 30px;
`,L=Object(r.c)(s.ab)`
  margin-right: 8px;
`,U=Object(o.a)(e=>p.a.object().shape({name:p.a.string().label("SETTINGS_RADIUS_USERS_CREATE_USER_FORM_NAME_LABEL").required().matches(I.x,l.a.createElement(c.c,{id:"SETTINGS_RADIUS_USERS_NAME_VALIDATION_MESSAGE"})),x_password:p.a.string().label("SETTINGS_RADIUS_USERS_CREATE_USER_FORM_PASSWORD_LABEL").required().min(4),vlan:Object(N.f)(e),tunnel_type:p.a.number().when("tunnel_medium_type",{is:e=>e!==u.NONE_VALUE,then:p.a.number().label("SETTINGS_RADIUS_USERS_TUNNEL_TYPE_LABEL").min(1).required()}),tunnel_medium_type:p.a.number().when("tunnel_type",{is:e=>e!==u.NONE_VALUE,then:p.a.number().label("SETTINGS_RADIUS_USERS_TUNNEL_MEDIUM_TYPE_LABEL").min(1).required()})},["tunnel_type","tunnel_medium_type"]));t.a=Object(c.f)(({simpleForm:e,onClose:t,intl:a,tunnel_type:r=0,handleOnSubmit:o,handleOnRemove:s,initialUser:S})=>{const{userId:b}=Object(_.m)(),I=Object(i.useDispatch)(),p=Object(i.useSelector)(u.selectAccountById)(b),N=S||p,f=Object(i.useSelector)(d.m),M=Object(A.i)("advanced/radius/form"),v=O(u.tunnelTypeOptions,a),j=O(u.tunnelMediumTypeOptions,a),x=Object(n.useMemo)(()=>({name:"",x_password:"",vlan:"",tunnel_type:r,tunnel_medium_type:e&&r?1:0,...D(N)}),[N,r,e]),V=U(f),G=Object(n.useCallback)((e,{setSubmitting:a})=>{const n={...e,tunnel_type:0!==e.tunnel_type?e.tunnel_type:"",tunnel_medium_type:0!==e.tunnel_medium_type?e.tunnel_medium_type:""};o?(o(n),t()):N?I(Object(u.updateAccount)(n)).then(()=>t()).catch(()=>a(!1)):I(Object(u.saveAccount)(n)).then(()=>t()).catch(()=>a(!1))},[t,I,N,o]),y=Object(n.useCallback)(e=>{e.preventDefault(),t()},[t]),P=Object(n.useCallback)(()=>{s?(s(x._id),t()):I(Object(R.b)({name:x.name,onConfirm:()=>I(Object(u.removeAccount)(x._id,x.name)).then(t())}))},[I,x._id,x.name]),F=!!x._id;return l.a.createElement(E.c,{initialValues:x,onSubmit:G,validationSchema:V},({handleSubmit:n})=>l.a.createElement(h,{size:"small",onRequestClose:t,title:a.formatMessage({id:N?"SETTINGS_ADVANCED_RADIUS_USERS_FROM_TITLE_EDIT":"SETTINGS_ADVANCED_RADIUS_USERS_FROM_TITLE_ADD"}),actions:[F&&{type:"button",text:l.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"}),onClick:P},{type:"button",text:l.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"}),onClick:y},{type:"button",text:l.a.createElement(c.c,{id:N?"COMMON_ACTION_APPLY_CHANGES":"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_BUTTON_CREATE_USER"}),onClick:()=>n(),variant:"primary"}],showRemove:F},l.a.createElement("form",{autoComplete:"off",onSubmit:n},l.a.createElement(C,{label:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_NAME",name:"name",type:"input",full:!0}),l.a.createElement(C,{hasHelperMessage:!0,label:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_PASSWORD",name:"x_password",type:"password",passwordToggle:!0,full:!0,helperMessage:l.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_PASSWORD_DESCRIPTION"})}),!e&&l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{label:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_VLAN",name:"vlan",type:"input",full:!0}),l.a.createElement(C,{label:a.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_TUNNEL_TYPE"}),type:"dropdown",name:"tunnel_type",options:v,full:!0,validated:!0}),l.a.createElement(C,{label:a.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_TUNNEL_MEDIUM_TYPE"}),type:"dropdown",name:"tunnel_medium_type",options:j,full:!0,validated:!0})),e&&!o&&l.a.createElement(g,null,l.a.createElement(m.a,{variant:"inline",href:"/network"+M,target:"_blank"},l.a.createElement(T.g,{alignItems:"center"},l.a.createElement(L,null),l.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_FROM_LABEL_LINK_RADIUS_FORM"})))))))})}}]);