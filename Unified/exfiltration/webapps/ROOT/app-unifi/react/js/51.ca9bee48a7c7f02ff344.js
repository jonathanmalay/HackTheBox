(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[51],{1821:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),r=a(50),l=a(70),o=a(6),s=a(2),p=a(71),m=a(1938),_=a(27),E=a(16),d=a(34),u=a(30),b=u.a.object().shape({upnp_enabled:u.a.boolean(),upnp_nat_pmp_enabled:u.a.boolean(),upnp_secure_mode:u.a.boolean(),upnp_wan_interface:u.a.string().when("upnp_enabled",{is:!0,then:u.a.string().label("SETTINGS_GATEWAY_UPNP_LABEL_WAN_NETWORK_GROUP").required()})}),h=a(1739),N=a(1736),g=a(1737),T=a(62),O=a(44),S=a(322);var x=({wanNetworkGroupOptions:e})=>{const{values:t,setFieldValue:a}=Object(O.e)();return Object(l.f)([Object(d.fetchNetworks)(void 0,{crudCacheStrategy:{type:o.a.CACHE}})],c.a.createElement(h.a,null,c.a.createElement(N.a,null,c.a.createElement(S.SearchableGridLabel,{htmlFor:"upnp_enabled",alignWith:"toggleSmall",label:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"}),description:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_DESCRIPTION"})}),c.a.createElement(g.a,{column:!0},c.a.createElement(T.Field,{type:"checkbox",name:"upnp_enabled"}))),c.a.createElement(N.a,{disabled:!t.upnp_enabled},c.a.createElement(S.SearchableGridLabel,{htmlFor:"upnp_wan_interface",alignWith:"dropdown",label:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_INTERNET_NETWORK_GROUP"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_INTERNET_NETWORK_GROUP_SEARCH_TEXT"}),c.a.createElement(g.a,{column:!0},c.a.createElement(T.Field,{disabled:!t.upnp_enabled,full:!0,type:"dropdown",name:"upnp_wan_interface",options:e,translateOptions:!0}))),c.a.createElement(N.a,{disabled:!t.upnp_enabled},c.a.createElement(S.SearchableGridLabel,{htmlFor:"upnp_nat_pmp_enabled",alignWith:"toggleSmall",label:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NAT_PORT_MAPPING_PROTOCOL"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NAT_PORT_MAPPING_PROTOCOL_SEARCH_TEXT"}),c.a.createElement(g.a,{column:!0},c.a.createElement(T.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_nat_pmp_enabled"}))),c.a.createElement(N.a,{disabled:!t.upnp_enabled},c.a.createElement(S.SearchableGridLabel,{htmlFor:"upnp_secure_mode",alignWith:"toggleSmall",label:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_SECURE_MODE"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_SECURE_MODE_SEARCH_TEXT"}),c.a.createElement(g.a,{column:!0},c.a.createElement(T.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_secure_mode"}))),Object.values(t.upnpNetworks).map(e=>c.a.createElement(N.a,{disabled:!t.upnp_enabled,key:e._id},c.a.createElement(S.SearchableGridLabel,{htmlFor:"upnp_lan_enabled_"+e._id,alignWith:"toggleSmall",label:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NETWORKS",values:{network:e.name}})}),c.a.createElement(g.a,{column:!0},c.a.createElement(T.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_lan_enabled_"+e._id,value:e.upnp_lan_enabled,onChange:n=>{const c={...e,upnp_lan_enabled:n.currentTarget.checked};a("upnpNetworks",{...t.upnpNetworks,[e._id]:c})}}))))))};const f={upnp_enabled:!1,upnp_wan_interface:"",upnp_nat_pmp_enabled:!1,upnp_secure_mode:!1};var A=e=>{const{initialValues:t,onBack:a}=e,l=Object(i.useDispatch)(),o=Object(n.useContext)(p.l),u=Object(i.useSelector)(d.selectNetworksData),h=Object(i.useSelector)(d.selectCorporateAndGuestNetworks),N=Object(n.useMemo)(()=>u.filter(e=>Object(d.isWanNetwork)(e)&&e.attr_hidden_id!==d.NetworkHiddenId.WAN_LTE_FAILOVER).map(({wan_networkgroup:e})=>({label:`SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_${e}_OPTION`,value:e})).sort((e,t)=>e.label<t.label?-1:1),[u]),g=Object(n.useMemo)(()=>({...f,...t,upnp_wan_interface:t.upnp_wan_interface||(N.length?N[0].value:f.upnp_wan_interface),upnpNetworks:h.reduce((e,t)=>({...e,[t._id]:{...t,upnp_lan_enabled:t.upnp_lan_enabled||!1}}),{})}),[t,h,N]),T=Object(n.useCallback)(({upnpNetworks:e,...t},{setSubmitting:n})=>{const c=Object.values(e).filter(({_id:e,upnp_lan_enabled:t})=>t!==(h.find(t=>e===t._id)||{}).upnp_lan_enabled);return l(Object(r.saveSettings)({...t})).then(()=>Promise.all(c.map(e=>l(Object(d.updateNetwork)(e,{},{}))))).then(()=>{l(Object(_.c)({icon:E.a.success,message:"SETTINGS_GATEWAY_UPNP_SAVE_SUCCESS"})),a()}).catch(e=>{l(Object(_.c)({errorMessage:e.msg,errorValues:e,icon:E.a.danger,message:"SETTINGS_GATEWAY_UPNP_SAVE_ERROR"})),n(!1)})},[l,h,a]);return c.a.createElement(m.b,{onSubmit:T,title:{component:c.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"},initialValues:g,isEdit:!1,isView:o,onEscClicked:a,validationSchema:b,showBack:!0,goBack:a},c.a.createElement(x,{wanNetworkGroupOptions:N}))};const G={};t.default=()=>{const e=Object(i.useSelector)(r.selectUsgSettings),t=Object(l.h)();return Object(l.f)([Object(r.fetchSettings)({type:o.a.CACHE})],c.a.createElement(A,{initialValues:e||G,onBack:t}))}},1929:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),p=a(520),m=a(521);const _=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),E=Object(m.a)(t),d=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),u=Object(n.useCallback)(e=>(e={},t={})=>E(e,t)&&d(e,t),[E,d]);return!!e&&c.a.createElement(o.a,{when:u(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(s.a,{actions:[{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:p.b,title:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},c.a.createElement(_,null,c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),c=a(36);t.a=()=>{const e=Object(c.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return P}));var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(44),o=a(2847),s=a(2658),p=a(1929),m=a(783),_=a(71),E=a(1940),d=a(15),u=a(32),b=a(42),h=a(1847),N=a(782),g=a(1930);const T=i.a`
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
`;var O=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(g.a)(),o=Object(N.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(h.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:T,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const S=i.a`
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
`;var x=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(g.a)(),o=Object(N.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(h.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:S,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const f=Object(i.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,A=Object(i.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,G=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,w=Object(i.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,j=Object(i.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var P=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>{const{motif:l}=Object(b.a)();return c.a.createElement(x,{ignoredPaths:r},c.a.createElement(A,{flex:"none",height:"65px"},c.a.createElement(O,{ignoredPaths:r},c.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},c.a.createElement(f,{alignItems:"center",flex:"1",height:"100%"},t&&c.a.createElement(w,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},c.a.createElement(d.f,{size:"original"}))),c.a.createElement(G,null,c.a.createElement(j,{weight:"bold"},e.component)),c.a.createElement(f,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&c.a.createElement(w,{legacy:!1,name:"closeButton",type:"button",onClick:n},c.a.createElement(d.y,{size:"original"})))))))};const C=Object(i.c)(_.g)`
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
`,I=Object(i.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,k=Object(i.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,v=Object(i.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,y=Object(i.c)(_.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:m,title:d,unsavedChangesModalIgnoredPaths:u,onEscClicked:b,submitText:h="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:N=!1,customFooterButtons:g,hidddenHeader:T,...O})=>c.a.createElement(l.c,Object.assign({enableReinitialize:!0},O),({dirty:i,handleReset:l,handleSubmit:O,isSubmitting:S})=>c.a.createElement(R,{autoComplete:"off",onSubmit:O},c.a.createElement(y,{vertical:!0},!T&&c.a.createElement(P,{goBack:a,hideClose:n,showBack:m,title:d,onEscClicked:b,ignoredPaths:u}),c.a.createElement(E.a,{ignoredPaths:u},c.a.createElement(v,{flex:"1"},c.a.createElement(C,{flex:"none",flexDirection:"column"},e))),!t&&!o&&c.a.createElement(p.a,{ignoredPaths:u,when:i&&!S}),(!o||N)&&c.a.createElement(k,{active:i||N},c.a.createElement(_.g,{justifyContent:g?"space-between":"flex-end",width:"100%",alignItems:"center"},g&&c.a.createElement(I,null,g(S)),!o&&c.a.createElement(_.g,null,c.a.createElement(s.a,{disabled:!i||S,type:"button",variant:"default",onClick:l},c.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(s.a,{disabled:!i||S,type:"submit",variant:"primary"},c.a.createElement(r.c,{id:h}))))))))},1940:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(1847),r=a(5),l=a(782),o=a(1930);const s=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...p})=>{const m=Object(o.a)(),_=Object(l.a)(a),E=Object(n.useMemo)(()=>c.a.Children.map(r,a=>null===a?a:c.a.createElement(i.a,Object.assign({appear:t||!_||m,in:t||!_||m,timeout:e,classNames:s,mountOnEnter:!0},p),a)),[r,t,_,m,e,p]);return c.a.createElement(c.a.Fragment,null,E)}}}]);