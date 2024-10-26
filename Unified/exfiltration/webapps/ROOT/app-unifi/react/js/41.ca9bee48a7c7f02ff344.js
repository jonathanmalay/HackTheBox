(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[41],{1828:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(36),c=a(8),o=a(34),s=a(70),l=a(6),_=a(5),p=a(2),d=a(215),u=a(18),m=a(83),E=a(1938),O=a(663),b=a(2005),T=a(2054),h=a(2475),S=a(44),N=a(1739),A=a(1736),f=a(1914),g=a(1737),v=a(62),I=a(1947);var D=()=>{const{values:e}=Object(S.e)();return i.a.createElement(N.a,null,i.a.createElement(A.a,null,i.a.createElement(f.a,{alignWith:"input",htmlFor:"name",label:i.a.createElement(p.c,{id:"SETTINGS_COMMON_NAME"})}),i.a.createElement(g.a,{column:!0},i.a.createElement(v.Field,{full:!0,name:"name"}))),i.a.createElement(A.a,null,i.a.createElement(f.a,{alignWith:"input",htmlFor:"vlan",label:i.a.createElement(p.c,{id:"SETTINGS_NETWORKS_LABEL_VLAN"})}),i.a.createElement(g.a,{column:!0},i.a.createElement(v.Field,{name:"vlan",type:"number"}))),i.a.createElement(A.a,null,i.a.createElement(f.a,{alignWith:"toggleSmall",htmlFor:"igmp_snooping",label:i.a.createElement(p.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_IGMP_SNOOPING_LABEL"}),description:i.a.createElement(p.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_IGMP_SNOOPING_LABEL_DESCRIPTION"})}),i.a.createElement(g.a,null,i.a.createElement(v.Field,{name:"igmp_snooping",type:"checkbox"}))),i.a.createElement(A.a,null,i.a.createElement(f.a,{alignWith:"toggleSmall",htmlFor:"dhcpguard_enabled",label:i.a.createElement(p.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_DHCP_GUARDING_LABEL"}),description:i.a.createElement(p.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_DHCP_GUARDING_LABEL_DESCRIPTION"})}),i.a.createElement(g.a,null,i.a.createElement(v.Field,{name:"dhcpguard_enabled",type:"checkbox"}))),i.a.createElement(I.a,{in:e.dhcpguard_enabled},[1,2,3].map(e=>i.a.createElement(A.a,{key:"dhcpd-ip-"+e},i.a.createElement(f.a,{alignWith:"input",htmlFor:"dhcpd_ip_"+e,label:i.a.createElement(p.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_TRUSTED_DHCP_SERVER_LABEL",values:{number:e}})}),i.a.createElement(g.a,{column:!0},i.a.createElement(v.Field,{name:"dhcpd_ip_"+e}))))))};const C=Object(_.c)(E.b)`
  width: 100%;
`;var x=e=>{const{initialValues:t,onBack:a}=e,r=Object(c.useSelector)(u.x),s=Object(c.useSelector)(m.m),l=Object(c.useSelector)(o.selectVlansInUse),_=Object(n.useMemo)(()=>l.filter(e=>e!==+t.vlan),[l,t.vlan]),E=Object(c.useDispatch)(),S=Object(n.useMemo)(()=>t._id?{component:t.name,message:"network-isolation-edit-view"}:{component:i.a.createElement(p.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_ADD"}),message:"network-isolation-create"},[t._id,t.name]),N=Object(n.useCallback)(Object(b.c)(e)(async(e,{setValues:t})=>{const a=Object(T.a)(e),n=a._id?o.updateNetwork:o.createNetwork;return E(n(a,{},o.saveToastsWithErr))}),[E,t]),A=Object(n.useMemo)(()=>Object(h.a)(_,s),[_,s]),f=Object(n.useCallback)(()=>{E(Object(O.b)({name:t.name,onConfirm:async()=>{await E(Object(o.deleteNetwork)(t._id,{name:t.name})),a()}}))},[t._id,t.name,a]);return i.a.createElement(C,{goBack:a,initialValues:t,isEdit:!!t._id,isView:r,showBack:!0,title:S,validationSchema:A,onEscClicked:a,onSubmit:N,enableReinitialize:!1,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&i.a.createElement(d.a,{disabled:e,type:"button",variant:"default",onClick:f},i.a.createElement(p.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(D,null))};t.default=()=>{const{networkId:e}=Object(r.m)(),t=Object(c.useSelector)(o.selectVlanOnlyNetworks).find(t=>t._id===e),a=Object(s.h)();return Object(s.f)([Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:l.a.CACHE}})],i.a.createElement(x,{initialValues:t||Object(o.networkInitialValues)(o.NetworkPurpose.VLAN_ONLY),onBack:a}))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(2),o=a(1946),s=a.n(o),l=a(1741),_=a(520),p=a(521);const d=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const o=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(p.a)(t),m=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),E=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&m(e,t),[u,m]);return!!e&&i.a.createElement(s.a,{when:E(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(l.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:o,parentSelector:_.b,title:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(d,null,i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,r]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{r(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return k})),a.d(t,"a",(function(){return x}));var n=a(0),i=a.n(n),r=a(5),c=a(2),o=a(44),s=a(2847),l=a(2658),_=a(1929),p=a(783),d=a(71),u=a(1940),m=a(15),E=a(32),O=a(42),b=a(1847),T=a(782),h=a(1930);const S=r.a`
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
`;var N=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const o=Object(h.a)(),s=Object(T.a)(r),l=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!s||o,in:t||!s||o,timeout:e,classNames:S,mountOnEnter:!0},c),a)),[a,t,s,o,e,c]);return i.a.createElement(i.a.Fragment,null,l)};const A=r.a`
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
`;var f=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const o=Object(h.a)(),s=Object(T.a)(r),l=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!s||o,in:t||!s||o,timeout:e,classNames:A,mountOnEnter:!0},c),a)),[a,t,s,o,e,c]);return i.a.createElement(i.a.Fragment,null,l)};const g=Object(r.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,v=Object(r.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,D=Object(r.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,C=Object(r.c)(E.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var x=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:r,ignoredPaths:c})=>{const{motif:o}=Object(O.a)();return i.a.createElement(f,{ignoredPaths:c},i.a.createElement(v,{flex:"none",height:"65px"},i.a.createElement(N,{ignoredPaths:c},i.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(g,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(D,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:o},i.a.createElement(m.f,{size:"original"}))),i.a.createElement(I,null,i.a.createElement(C,{weight:"bold"},e.component)),i.a.createElement(g,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&i.a.createElement(D,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(m.y,{size:"original"})))))))};const P=Object(r.c)(d.g)`
  width: 100%;
  max-width: ${p.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,w=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,y=Object(r.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,j=Object(r.c)(s.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${p.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,R=Object(r.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,G=Object(r.c)(d.k)`
  height: 100%;
  width: 100%;
`;var k=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:r,isView:s,showBack:p,title:m,unsavedChangesModalIgnoredPaths:E,onEscClicked:O,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:T=!1,customFooterButtons:h,hidddenHeader:S,...N})=>i.a.createElement(o.c,Object.assign({enableReinitialize:!0},N),({dirty:r,handleReset:o,handleSubmit:N,isSubmitting:A})=>i.a.createElement(w,{autoComplete:"off",onSubmit:N},i.a.createElement(G,{vertical:!0},!S&&i.a.createElement(x,{goBack:a,hideClose:n,showBack:p,title:m,onEscClicked:O,ignoredPaths:E}),i.a.createElement(u.a,{ignoredPaths:E},i.a.createElement(R,{flex:"1"},i.a.createElement(P,{flex:"none",flexDirection:"column"},e))),!t&&!s&&i.a.createElement(_.a,{ignoredPaths:E,when:r&&!A}),(!s||T)&&i.a.createElement(j,{active:r||T},i.a.createElement(d.g,{justifyContent:h?"space-between":"flex-end",width:"100%",alignItems:"center"},h&&i.a.createElement(y,null,h(A)),!s&&i.a.createElement(d.g,null,i.a.createElement(l.a,{disabled:!r||A,type:"button",variant:"default",onClick:o},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(l.a,{disabled:!r||A,type:"submit",variant:"primary"},i.a.createElement(c.c,{id:b}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5),o=a(782),s=a(1930);const l=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,..._})=>{const p=Object(s.a)(),d=Object(o.a)(a),u=Object(n.useMemo)(()=>i.a.Children.map(c,a=>null===a?a:i.a.createElement(r.a,Object.assign({appear:t||!d||p,in:t||!d||p,timeout:e,classNames:l,mountOnEnter:!0},_),a)),[c,t,d,p,e,_]);return i.a.createElement(i.a.Fragment,null,u)}},1947:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5);const o=(e,t)=>c.a`
  &-appear,
  &-enter {
    opacity: 0;
    display: flex !important;
    transform: translateY(-10px);
  }
  &-appear-active,
  &-enter-active {
    display: flex !important;
    ${e&&`flex-direction: ${e};`}
    ${t&&`padding: ${t};`}
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 150ms ease-in-out, transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-appear-done,
  &-enter-done {
    display: flex !important;
    ${e&&`flex-direction: ${e};`}
    ${t&&`padding: ${t};`}
    opacity: 1;
  }
  &-exit {
    display: flex !important;
    opacity: 0;
    height: 0;
    box-sizing: border-box;
    margin: 10px 0 0 !important;
    & > * {
      display: none;
    }
  }
  &-exit-active {
    display: flex !important;
    margin: 0 !important;
    transition: margin 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit-done {
    display: none;
  }
`;t.a=i.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:c="0 0 32px",wrap:s=!1,children:l,..._})=>{const p=Object(n.useMemo)(()=>i.a.Children.map(l,(n,c)=>i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:o(a,void 0),mountOnEnter:!0},_),null===n?i.a.createElement("div",null):n)),[l,a,t,_,e]);return s?i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:o(a,c),mountOnEnter:!0},_),i.a.createElement("div",null,l)):i.a.createElement(i.a.Fragment,null,p)})},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return d})),a.d(t,"saveDhcpOption",(function(){return u})),a.d(t,"removeDhcpOption",(function(){return m})),a.d(t,"DHCP_OPTIONS",(function(){return r})),a.d(t,"typeOptions",(function(){return c})),a.d(t,"integerOptions",(function(){return o})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return s})),a.d(t,"DHCP_CODE",(function(){return l})),a.d(t,"MODEL",(function(){return _})),a.d(t,"PATH",(function(){return p})),a.d(t,"selectDhcpOptions",(function(){return O})),a.d(t,"selectDhcpOptionsData",(function(){return b})),a.d(t,"selectDhcpOptionsCodes",(function(){return T})),a.d(t,"DhcpOptionTypes",(function(){return h})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return S}));var n=a(28),i=a(6);const r={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},c=[{value:r.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:r.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:r.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:r.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:r.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:r.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],o=[8,16,32].map(e=>({value:e,label:e})),s="dhcpd_user_option_",l={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},_="dhcpOptions",p="/api/s/{site}/rest/dhcpoption",d=(e={})=>Object(i.q)(_,p,void 0,{...e,idField:"_id"}),u=e=>{const{_id:t}=e;return t?Object(i.C)(_,t,`${p}/${t}`,e):Object(i.i)(_,p,e)},m=({_id:e,name:t})=>Object(i.n)(_,e,`${p}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var E=a(4);const O=Object(i.A)(d()),b=Object(E.a)(O,n.c),T=Object(E.a)(b,e=>e.map(({code:e})=>e));var h;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(h||(h={}));const S=(e,t,a,n)=>{let i;switch(a){case h.BOOLEAN:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case h.HEX_ARRAY:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case h.INTEGER:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case h.IP_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case h.MAC_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case h.TEXT:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:i="COMMON_UNKNOWN"}const r=e.formatMessage({id:i});return"integer"!==a?r:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},2005:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));var n=a(16),i=function(e,t){var a=t.successMessage,n=t.failureMessage;if((a||n)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},r=function(e){return function(t){return function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(c,o){var s=o.props||t;i(s,r);var l=s.createToast,_="function"==typeof r?r(c):r,p=_.msgValues,d=_.successMessage,u=_.failureMessage;a(c,s,o).then((function(){return d&&l({icon:n.a.success,message:d,values:p}),e(o,t)})).catch((function(e){u&&l({icon:n.a.danger,message:u,values:p,errorMessage:e.msg,errorValues:e}),o.setSubmitting(!1)}))}}}},c=r((function(e){return e.setStatus({isSubmitted:!0})}))(),o=r((function(e){return e.setStatus({isSubmitted:!0})})),s=(r((function(e){return e.props.onClose()}))(),r((function(e,t){return t.onBack()})))},2037:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(255),i=a(1953);const r=Object.values(i.a),c=e=>{const t=Math.min(r.length-1,Object(n.f)(e,1e3));return{value:Math.abs(e/1e3**t),unit:r[t]}},o=(e,t)=>{switch(t){case i.a.G:return Math.round(1e6*e);case i.a.M:return 1e3*e;case i.a.K:default:return e}},s=({download_kilobits_per_second:e,upload_kilobits_per_second:t})=>({download:c(e),upload:c(t)})},2054:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return d}));var n=a(364),i=a(1743),r=a(34),c=a(1951),o=a(2037);const s=e=>(e||[]).reduce((e,{wan_networkgroup:t=""})=>(t.toUpperCase().startsWith("WAN")&&e.push(t),e),[]),l=e=>{var t,a;const n=["cidr_prefix","gateway_ip"];return e.wan_smartq_enabled||(n.push("wan_smartq_up_rate"),n.push("wan_smartq_down_rate")),null!==(t=e.wan_dns1)&&void 0!==t||n.push("wan_dns1"),null!==(a=e.wan_dns2)&&void 0!==a||n.push("wan_dns2"),e.wan_type!==r.IpV4ConnectionType.PPPOE&&(n.push("wan_username"),n.push("x_wan_password")),e.wan_type!==r.IpV4ConnectionType.STATIC&&(n.push("wan_ip"),n.push("wan_netmask"),n.push("wan_gateway")),e.wan_provider_capabilities&&(e.wan_provider_capabilities.hasAtleastOneDefined?e.wan_provider_capabilities=(e=>Object(i.a)({...e,download_kilobits_per_second:Object(o.a)(e.download_kilobits_per_second,e.download_unit),upload_kilobits_per_second:Object(o.a)(e.upload_kilobits_per_second,e.upload_unit)},"download_unit","upload_unit","hasAtleastOneDefined"))(e.wan_provider_capabilities):delete e.wan_provider_capabilities),Object(i.a)(e,...n)},_=e=>{const t=["cidr_prefix","gateway_ip","dhcp_mode","contentFilter"],a=(e=>Object.entries(e).filter(([e,t])=>!!e.startsWith(c.DHCP_USER_OPTION_PREFIX)&&[void 0,null,""].some(e=>e===t)).map(([e])=>e))(e),{ipv6_interface_type:n,ipv6_pd_prefixid:o,vlan:s}=e;"none"===n&&t.push("ipv6_ra_priority","ipv6_ra_valid_lifetime","ipv6_ra_preferred_lifetime","dhcpdv6_enabled","dhcpdv6_start","dhcpdv6_stop","dhcpdv6_leasetime","dhcpdv6_dns_auto","dhcpdv6_dns_1","dhcpdv6_dns_2","dhcpdv6_dns_3","dhcpdv6_dns_4"),"static"!==n&&t.push("ipv6_subnet"),"pd"!==n&&t.push("ipv6_pd_interface","ipv6_pd_prefixid","ipv6_pd_start","ipv6_pd_stop");const l=e.nat_outbound_ip_addresses.filter(e=>e.ip_address);l.length||t.push("nat_outbound_ip_addresses");const _=Object(i.a)({...e,vlan_enabled:!!s,ipv6_pd_prefixid:null!=o?o:"",nat_outbound_ip_addresses:l},...t,...a),{gateway_device:p,gateway_type:d}=_;return p&&d!==r.NetworkGatewayType.default||(_.gateway_type=r.NetworkGatewayType.default,delete _.gateway_device),_},p=e=>{const t=_(e),a=[...r.vpnSpecificFields.client,...r.vpnSpecificFields.server,...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.AUTO_IPSEC_VTI],...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.MANUAL_IPSEC],...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.OPEN_VPN]].filter(e=>!r.networkAndVpnSharedKeys.includes(e));return Object(i.a)(t,...a)},d=({...e},t=!1)=>{if(t)return(e=>{const t=p(e);return t.l2tp_interface=e.l2tp_interface,t.l2tp_local_wan_ip=e.l2tp_local_wan_ip,t.radiusprofile_id=e.radiusprofile_id,t.vpn_type=r.ServerVpnType.L2TP_SERVER,t.x_ipsec_pre_shared_key=e.x_ipsec_pre_shared_key,t})(e);switch(e.purpose){case r.NetworkPurpose.VLAN_ONLY:return(e=>({vlan_enabled:!0,...Object(n.a)(e,["_id","site_id","purpose","name","vlan","enabled","is_nat","igmp_snooping","dhcpguard_enabled","dhcpd_ip_1","dhcpd_ip_2","dhcpd_ip_3"])}))(e);case r.NetworkPurpose.WAN:return l(e);case r.NetworkPurpose.REMOTE_USER_VPN:return(e=>{const t=_(e),a=Object(n.a)(t,...r.vpnPickKeys.server);return a.vpn_type!==r.ServerVpnType.L2TP_SERVER&&(delete a.l2tp_interface,delete a.l2tp_local_wan_ip,delete a.x_ipsec_pre_shared_key),a})(e);case r.NetworkPurpose.SITE_VPN:return(e=>{const t=_(e);return Object(n.a)({...t,ipsec_dh_group:Number(e.ipsec_dh_group),ipsec_ike_dh_group:Number(e.ipsec_ike_dh_group),ipsec_esp_dh_group:Number(e.ipsec_esp_dh_group),openvpn_mode:"site-to-site"},...r.vpnPickKeys.siteToSite[e.vpn_type])})(e);case r.NetworkPurpose.VPN_CLIENT:return(e=>{const t=_(e);return Object(n.a)(t,...r.vpnPickKeys.client)})(e);default:return p(e)}}},2475:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(0),i=a.n(n),r=a(2),c=a(105),o=a(61),s=a(30);const l=[{compare:Object(o.a)(({name:e})=>e),id:"network-isolation-table-name",label:i.a.createElement(r.c,{id:"SETTINGS_COMMON_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:100,maxWidth:150},{compare:Object(o.a)(({vlan:e})=>e),label:i.a.createElement(r.c,{id:"SETTINGS_NETWORKS_LABEL_VLAN"}),id:"network-isolation-table-vlan-id",renderCell:({vlan:e})=>e,sortable:!0,minWidth:100,maxWidth:200},{compare:Object(o.a)(({igmp_snooping:e})=>e),label:i.a.createElement(r.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_IGMP_SNOOPING_HEADER"}),id:"network-isolation-table-igmp-snooping",renderCell:({igmp_snooping:e})=>i.a.createElement(r.c,{id:e?"COMMON_ENABLED":"COMMON_DISABLED"}),sortable:!0,minWidth:130,maxWidth:200},{compare:Object(o.a)(({dhcpguard_enabled:e})=>e),label:i.a.createElement(r.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_DHCP_GUARDING_LABEL"}),id:"network-isolation-table-dhcp-guarding",renderCell:({dhcpguard_enabled:e})=>i.a.createElement(r.c,{id:e?"COMMON_ENABLED":"COMMON_DISABLED"}),sortable:!0,minWidth:130}],_=(e,t)=>Object(s.f)(t).clone().notOneOf(e,({value:e})=>i.a.createElement(r.c,{id:"SETTINGS_NETWORKS_VLAN_IN_USE",values:{vlan:e}})).required(),p=(e,t=!1)=>{const a=s.a.string().matches(c.h,i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_IPV4"}));return s.a.string().when("dhcpguard_enabled",{is:!0,then:t?a.required(i.a.createElement(r.c,{id:"COMMON_VALIDATION_EMPTY",values:{name:i.a.createElement(r.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_TRUSTED_DHCP_SERVER_LABEL",values:{number:e}})}})):a})},d=(e,t)=>s.a.object().shape({dhcpguard_enabled:s.a.boolean(),igmp_snooping:s.a.boolean(),name:s.e,vlan:_(e,t),dhcpd_ip_1:p(1,!0),dhcpd_ip_2:p(2),dhcpd_ip_3:p(3)})}}]);