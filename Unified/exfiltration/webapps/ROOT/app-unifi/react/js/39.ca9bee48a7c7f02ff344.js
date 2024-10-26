(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[39],{1786:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(36),c=a(8),o=a(1961),_=a(34),s=a(70),l=a(6),E=a(2066);const u={};t.default=()=>{const{id:e}=Object(r.m)(),t=Object(c.useSelector)(o.selectRoutingData).find(t=>t._id===e),a=Object(s.h)();return Object(s.f)([Object(o.fetchRouting)(void 0,{crudCacheStrategy:{type:l.a.CACHE}}),Object(_.fetchNetworks)(void 0,{crudCacheStrategy:{type:l.a.CACHE}})],i.a.createElement(E.a,{initialValues:t||u,onBack:a}))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(2),o=a(1946),_=a.n(o),s=a(1741),l=a(520),E=a(521);const u=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const o=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(E.a)(t),d=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),T=Object(n.useCallback)(e=>(e={},t={})=>p(e,t)&&d(e,t),[p,d]);return!!e&&i.a.createElement(_.a,{when:T(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:o,parentSelector:l.b,title:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(u,null,i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,r]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{r(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return C}));var n=a(0),i=a.n(n),r=a(5),c=a(2),o=a(44),_=a(2847),s=a(2658),l=a(1929),E=a(783),u=a(71),p=a(1940),d=a(15),T=a(32),m=a(42),S=a(1847),N=a(782),O=a(1930);const A=r.a`
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
`;var b=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const o=Object(O.a)(),_=Object(N.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(S.a,Object.assign({appear:t||!_||o,in:t||!_||o,timeout:e,classNames:A,mountOnEnter:!0},c),a)),[a,t,_,o,e,c]);return i.a.createElement(i.a.Fragment,null,s)};const h=r.a`
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
`;var g=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const o=Object(O.a)(),_=Object(N.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(S.a,Object.assign({appear:t||!_||o,in:t||!_||o,timeout:e,classNames:h,mountOnEnter:!0},c),a)),[a,t,_,o,e,c]);return i.a.createElement(i.a.Fragment,null,s)};const f=Object(r.c)(u.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,I=Object(r.c)(u.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,R=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,y=Object(r.c)(u.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,v=Object(r.c)(T.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var C=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:r,ignoredPaths:c})=>{const{motif:o}=Object(m.a)();return i.a.createElement(g,{ignoredPaths:c},i.a.createElement(I,{flex:"none",height:"65px"},i.a.createElement(b,{ignoredPaths:c},i.a.createElement(u.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(f,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(y,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:o},i.a.createElement(d.f,{size:"original"}))),i.a.createElement(R,null,i.a.createElement(v,{weight:"bold"},e.component)),i.a.createElement(f,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&i.a.createElement(y,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(d.y,{size:"original"})))))))};const G=Object(r.c)(u.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,w=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,x=Object(r.c)(u.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,D=Object(r.c)(_.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,P=Object(r.c)(u.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,j=Object(r.c)(u.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:r,isView:_,showBack:E,title:d,unsavedChangesModalIgnoredPaths:T,onEscClicked:m,submitText:S="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:N=!1,customFooterButtons:O,hidddenHeader:A,...b})=>i.a.createElement(o.c,Object.assign({enableReinitialize:!0},b),({dirty:r,handleReset:o,handleSubmit:b,isSubmitting:h})=>i.a.createElement(w,{autoComplete:"off",onSubmit:b},i.a.createElement(j,{vertical:!0},!A&&i.a.createElement(C,{goBack:a,hideClose:n,showBack:E,title:d,onEscClicked:m,ignoredPaths:T}),i.a.createElement(p.a,{ignoredPaths:T},i.a.createElement(P,{flex:"1"},i.a.createElement(G,{flex:"none",flexDirection:"column"},e))),!t&&!_&&i.a.createElement(l.a,{ignoredPaths:T,when:r&&!h}),(!_||N)&&i.a.createElement(D,{active:r||N},i.a.createElement(u.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&i.a.createElement(x,null,O(h)),!_&&i.a.createElement(u.g,null,i.a.createElement(s.a,{disabled:!r||h,type:"button",variant:"default",onClick:o},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!r||h,type:"submit",variant:"primary"},i.a.createElement(c.c,{id:S}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5),o=a(782),_=a(1930);const s=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,...l})=>{const E=Object(_.a)(),u=Object(o.a)(a),p=Object(n.useMemo)(()=>i.a.Children.map(c,a=>null===a?a:i.a.createElement(r.a,Object.assign({appear:t||!u||E,in:t||!u||E,timeout:e,classNames:s,mountOnEnter:!0},l),a)),[c,t,u,E,e,l]);return i.a.createElement(i.a.Fragment,null,p)}},1947:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5);const o=(e,t)=>c.a`
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
`;t.a=i.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:c="0 0 32px",wrap:_=!1,children:s,...l})=>{const E=Object(n.useMemo)(()=>i.a.Children.map(s,(n,c)=>i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:o(a,void 0),mountOnEnter:!0},l),null===n?i.a.createElement("div",null):n)),[s,a,t,l,e]);return _?i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:o(a,c),mountOnEnter:!0},l),i.a.createElement("div",null,s)):i.a.createElement(i.a.Fragment,null,E)})},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return u})),a.d(t,"saveDhcpOption",(function(){return p})),a.d(t,"removeDhcpOption",(function(){return d})),a.d(t,"DHCP_OPTIONS",(function(){return r})),a.d(t,"typeOptions",(function(){return c})),a.d(t,"integerOptions",(function(){return o})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return _})),a.d(t,"DHCP_CODE",(function(){return s})),a.d(t,"MODEL",(function(){return l})),a.d(t,"PATH",(function(){return E})),a.d(t,"selectDhcpOptions",(function(){return m})),a.d(t,"selectDhcpOptionsData",(function(){return S})),a.d(t,"selectDhcpOptionsCodes",(function(){return N})),a.d(t,"DhcpOptionTypes",(function(){return O})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return A}));var n=a(28),i=a(6);const r={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},c=[{value:r.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:r.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:r.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:r.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:r.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:r.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],o=[8,16,32].map(e=>({value:e,label:e})),_="dhcpd_user_option_",s={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},l="dhcpOptions",E="/api/s/{site}/rest/dhcpoption",u=(e={})=>Object(i.q)(l,E,void 0,{...e,idField:"_id"}),p=e=>{const{_id:t}=e;return t?Object(i.C)(l,t,`${E}/${t}`,e):Object(i.i)(l,E,e)},d=({_id:e,name:t})=>Object(i.n)(l,e,`${E}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var T=a(4);const m=Object(i.A)(u()),S=Object(T.a)(m,n.c),N=Object(T.a)(S,e=>e.map(({code:e})=>e));var O;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(O||(O={}));const A=(e,t,a,n)=>{let i;switch(a){case O.BOOLEAN:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case O.HEX_ARRAY:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case O.INTEGER:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case O.IP_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case O.MAC_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case O.TEXT:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:i="COMMON_UNKNOWN"}const r=e.formatMessage({id:i});return"integer"!==a?r:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1961:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchRouting",(function(){return o})),a.d(t,"saveRouting",(function(){return _})),a.d(t,"removeRouting",(function(){return s})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return c})),a.d(t,"selectRouting",(function(){return E})),a.d(t,"selectRoutingData",(function(){return u})),a.d(t,"StaticRouteGatewayType",(function(){return p})),a.d(t,"StaticRouteType",(function(){return d}));var n=a(28),i=a(6),r="routing",c="/api/s/{site}/rest/routing";const o=(e={},t={})=>Object(i.q)(r,c,e,{idField:"_id",...t}),_=e=>{const{_id:t}=e;return t?Object(i.C)(r,t,`${c}/${t}`,e):Object(i.i)(r,c,e)},s=({_id:e,name:t})=>Object(i.n)(r,e,`${c}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_SUCCESS_TOAST",{name:t}));var l=a(4);const E=Object(i.A)(o()),u=Object(l.a)(E,n.c);var p,d;!function(e){e.DEFAULT="default",e.SWITCH="switch"}(p||(p={})),function(e){e.NEXT_HOP="nexthop-route",e.INTERFACE="interface-route",e.BLACK_HOLE="blackhole"}(d||(d={}))},2003:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return _})),a.d(t,"a",(function(){return s}));var n=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},i=function(e,t){var a=n(e),i=a[0],r=a[1];return new RegExp(t.call(t,i),r)},r=function(e){return i(e,(function(e){var t="^"===e.substring(0,1),a="$"===e.substring(e.length-1);if(!t&&!a)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(a?1:0))}))},c=function(e){return n(e)[0]},o=function(e){return i(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},_=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var a=e.map((function(e){return"(".concat(n(e)[0],")")})).join("|");return new RegExp(a,t)},s=function(e,t,a,i){return new RegExp((e||"")+n(t)[0]+(a||""),i)}},2034:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(63),i=a(174),r=a(2003),c=a(105),o=Object(r.e)([c.j,c.m]),_=Object(n.a)((function(e){if("string"!=typeof e)return!1;if(!e.match(o))return!1;var t=new i.Address4(e);if(t.isValid())return t.correctForm()===t.startAddress().address;var a=new i.Address6(e);if(a.isValid()){var n=a.correctForm();return new i.Address6(n).startAddress().address===a.startAddress().address}return!1}))},2037:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return _}));var n=a(255),i=a(1953);const r=Object.values(i.a),c=e=>{const t=Math.min(r.length-1,Object(n.f)(e,1e3));return{value:Math.abs(e/1e3**t),unit:r[t]}},o=(e,t)=>{switch(t){case i.a.G:return Math.round(1e6*e);case i.a.M:return 1e3*e;case i.a.K:default:return e}},_=({download_kilobits_per_second:e,upload_kilobits_per_second:t})=>({download:c(e),upload:c(t)})},2054:function(e,t,a){"use strict";a.d(t,"b",(function(){return _})),a.d(t,"a",(function(){return u}));var n=a(364),i=a(1743),r=a(34),c=a(1951),o=a(2037);const _=e=>(e||[]).reduce((e,{wan_networkgroup:t=""})=>(t.toUpperCase().startsWith("WAN")&&e.push(t),e),[]),s=e=>{var t,a;const n=["cidr_prefix","gateway_ip"];return e.wan_smartq_enabled||(n.push("wan_smartq_up_rate"),n.push("wan_smartq_down_rate")),null!==(t=e.wan_dns1)&&void 0!==t||n.push("wan_dns1"),null!==(a=e.wan_dns2)&&void 0!==a||n.push("wan_dns2"),e.wan_type!==r.IpV4ConnectionType.PPPOE&&(n.push("wan_username"),n.push("x_wan_password")),e.wan_type!==r.IpV4ConnectionType.STATIC&&(n.push("wan_ip"),n.push("wan_netmask"),n.push("wan_gateway")),e.wan_provider_capabilities&&(e.wan_provider_capabilities.hasAtleastOneDefined?e.wan_provider_capabilities=(e=>Object(i.a)({...e,download_kilobits_per_second:Object(o.a)(e.download_kilobits_per_second,e.download_unit),upload_kilobits_per_second:Object(o.a)(e.upload_kilobits_per_second,e.upload_unit)},"download_unit","upload_unit","hasAtleastOneDefined"))(e.wan_provider_capabilities):delete e.wan_provider_capabilities),Object(i.a)(e,...n)},l=e=>{const t=["cidr_prefix","gateway_ip","dhcp_mode","contentFilter"],a=(e=>Object.entries(e).filter(([e,t])=>!!e.startsWith(c.DHCP_USER_OPTION_PREFIX)&&[void 0,null,""].some(e=>e===t)).map(([e])=>e))(e),{ipv6_interface_type:n,ipv6_pd_prefixid:o,vlan:_}=e;"none"===n&&t.push("ipv6_ra_priority","ipv6_ra_valid_lifetime","ipv6_ra_preferred_lifetime","dhcpdv6_enabled","dhcpdv6_start","dhcpdv6_stop","dhcpdv6_leasetime","dhcpdv6_dns_auto","dhcpdv6_dns_1","dhcpdv6_dns_2","dhcpdv6_dns_3","dhcpdv6_dns_4"),"static"!==n&&t.push("ipv6_subnet"),"pd"!==n&&t.push("ipv6_pd_interface","ipv6_pd_prefixid","ipv6_pd_start","ipv6_pd_stop");const s=e.nat_outbound_ip_addresses.filter(e=>e.ip_address);s.length||t.push("nat_outbound_ip_addresses");const l=Object(i.a)({...e,vlan_enabled:!!_,ipv6_pd_prefixid:null!=o?o:"",nat_outbound_ip_addresses:s},...t,...a),{gateway_device:E,gateway_type:u}=l;return E&&u!==r.NetworkGatewayType.default||(l.gateway_type=r.NetworkGatewayType.default,delete l.gateway_device),l},E=e=>{const t=l(e),a=[...r.vpnSpecificFields.client,...r.vpnSpecificFields.server,...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.AUTO_IPSEC_VTI],...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.MANUAL_IPSEC],...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.OPEN_VPN]].filter(e=>!r.networkAndVpnSharedKeys.includes(e));return Object(i.a)(t,...a)},u=({...e},t=!1)=>{if(t)return(e=>{const t=E(e);return t.l2tp_interface=e.l2tp_interface,t.l2tp_local_wan_ip=e.l2tp_local_wan_ip,t.radiusprofile_id=e.radiusprofile_id,t.vpn_type=r.ServerVpnType.L2TP_SERVER,t.x_ipsec_pre_shared_key=e.x_ipsec_pre_shared_key,t})(e);switch(e.purpose){case r.NetworkPurpose.VLAN_ONLY:return(e=>({vlan_enabled:!0,...Object(n.a)(e,["_id","site_id","purpose","name","vlan","enabled","is_nat","igmp_snooping","dhcpguard_enabled","dhcpd_ip_1","dhcpd_ip_2","dhcpd_ip_3"])}))(e);case r.NetworkPurpose.WAN:return s(e);case r.NetworkPurpose.REMOTE_USER_VPN:return(e=>{const t=l(e),a=Object(n.a)(t,...r.vpnPickKeys.server);return a.vpn_type!==r.ServerVpnType.L2TP_SERVER&&(delete a.l2tp_interface,delete a.l2tp_local_wan_ip,delete a.x_ipsec_pre_shared_key),a})(e);case r.NetworkPurpose.SITE_VPN:return(e=>{const t=l(e);return Object(n.a)({...t,ipsec_dh_group:Number(e.ipsec_dh_group),ipsec_ike_dh_group:Number(e.ipsec_ike_dh_group),ipsec_esp_dh_group:Number(e.ipsec_esp_dh_group),openvpn_mode:"site-to-site"},...r.vpnPickKeys.siteToSite[e.vpn_type])})(e);case r.NetworkPurpose.VPN_CLIENT:return(e=>{const t=l(e);return Object(n.a)(t,...r.vpnPickKeys.client)})(e);default:return E(e)}}},2066:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(8),c=a(2),o=a(63),_=a(215),s=a(3),l=a(34),E=a(1961),u=a(1938),p=a(663),d=a(27),T=a(71),m=a(70),S=a(16);var N=a(30),O=a(105),A=a(2034),b=a(2003),h=N.a.object().shape({name:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),enabled:N.a.boolean(),gateway_device:N.a.string().when(["gateway_type"],{is:e=>e===E.StaticRouteGatewayType.SWITCH,then:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_L3_GATEWAY_DEVICE").required()}),"static-route_network":N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK").required().test("networkSubnet",i.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_NETWORK_SUBNET"}),A.a),"static-route_distance":N.a.string().matches(/^([0-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,i.a.createElement(c.c,{id:"COMMON_DESCRIPTION_NUMBER_BETWEEN",values:{min:0,max:255}})),"static-route_type":N.a.string(),"static-route_nexthop":N.a.string().when(["static-route_type"],{is:E.StaticRouteType.NEXT_HOP,then:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP").required().matches(Object(b.e)([O.h,O.k]),i.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IP"}))}),"static-route_interface":N.a.string()}),g=a(2054);const f=[l.NetworkPurpose.REMOTE_USER_VPN,l.NetworkPurpose.VLAN_ONLY,l.NetworkPurpose.WAN];var I=a(1739),R=a(1736),y=a(1914),v=a(1737),C=a(44),G=a(5),w=a(1947),x=a(62),D=a(46);const P=Object(G.c)(x.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  white-space: nowrap;
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var j=Object(c.f)(({interfaces:e,intl:t})=>{const{initialValues:{_id:a},values:{gateway_type:n,"static-route_nexthop":o,"static-route_type":_},errors:{gateway_device:l}}=Object(C.e)(),u=/^fe80:/i.test(o),p=Object(r.useSelector)(s.selectAdoptedL3Switches).map(e=>({value:e.mac,label:Object(D.c)(e)})),d=p.length>0,T=n===E.StaticRouteGatewayType.DEFAULT,m=!!a;return i.a.createElement(I.a,null,i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"enabled",alignWith:"toggleSmall",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_ENABLE"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{type:"checkbox",name:"enabled"}))),i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"name",alignWith:"input",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME"}))),d&&i.a.createElement(i.a.Fragment,null,i.a.createElement(R.a,{disabled:m},i.a.createElement(y.a,{htmlFor:"gateway_type",alignWith:"input",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE"})}),i.a.createElement(v.a,null,i.a.createElement(P,{value:E.StaticRouteGatewayType.DEFAULT,type:"togglebox",toggleboxType:"radio",name:"gateway_type",disabled:m},i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE_GATEWAY"})),i.a.createElement(P,{value:E.StaticRouteGatewayType.SWITCH,type:"togglebox",toggleboxType:"radio",name:"gateway_type",disabled:m},i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE_SWITCH"})))),!T&&i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"gateway_device",alignWith:"dropdown",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_SELECT_GATEWAY"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{full:!0,type:"dropdown",name:"gateway_device",options:p,placeholder:t.formatMessage({id:"COMMON_CHOOSE_AN_OPTION"})}),l&&i.a.createElement(x.ValidationMessage,{visible:!0},l)))),T&&i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"static-route_distance",alignWith:"input",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DISTANCE"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{full:!0,name:"static-route_distance",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DISTANCE_PLACEHOLDER"}))),i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"static-route_network",alignWith:"input",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{full:!0,name:"static-route_network",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK_PLACEHOLDER"}))),i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"static-route_type",alignWith:"dropdown",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_ROUTE_TYPE"})}),i.a.createElement(v.a,null,i.a.createElement(P,{value:E.StaticRouteType.NEXT_HOP,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP"})),i.a.createElement(P,{value:E.StaticRouteType.INTERFACE,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_INTERFACE"})),i.a.createElement(P,{value:E.StaticRouteType.BLACK_HOLE,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_BLACK_HOLE"})))),i.a.createElement(w.a,{in:_===E.StaticRouteType.NEXT_HOP||_===E.StaticRouteType.INTERFACE||u,wrap:!0},_===E.StaticRouteType.NEXT_HOP&&i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"static-route_nexthop",alignWith:"input",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{full:!0,name:"static-route_nexthop",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP_PLACEHOLDER"}))),(_===E.StaticRouteType.INTERFACE||u)&&i.a.createElement(R.a,null,i.a.createElement(y.a,{htmlFor:"static-route_interface",alignWith:"dropdown",label:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_INTERFACE"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(x.Field,{full:!0,type:"dropdown",name:"static-route_interface",options:e})))))});const L=Object(o.a)((e,t)=>({...{name:"",enabled:!0,gateway_device:"",gateway_type:E.StaticRouteGatewayType.DEFAULT,"static-route_network":"","static-route_distance":"","static-route_type":E.StaticRouteType.NEXT_HOP,"static-route_nexthop":"","static-route_interface":t.length?t[0].value:""},...e}));t.a=e=>{const{initialValues:t,onBack:a}=e,o=Object(r.useSelector)(l.selectNetworksData),N=Object(r.useSelector)(s.selectGatewayMac),O=Object(r.useDispatch)(),A=Object(n.useContext)(T.l),b=Object(n.useCallback)((e,{setSubmitting:t})=>{const n={...e,"static-route_nexthop":e["static-route_type"]===E.StaticRouteType.NEXT_HOP?e["static-route_nexthop"]:void 0,"static-route_interface":e["static-route_type"]===E.StaticRouteType.INTERFACE?e["static-route_interface"]:void 0};return n.gateway_type===E.StaticRouteGatewayType.SWITCH&&delete n["static-route_distance"],n.gateway_type===E.StaticRouteGatewayType.DEFAULT&&(n.gateway_device=N),O(Object(E.saveRouting)({...n,type:"static-route"})).then(()=>{O(Object(d.c)({icon:S.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),a()}).catch(e=>{O(Object(d.c)({errorMessage:e.msg,errorValues:e,icon:S.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)})},[O,a]),I=(e=>[...Object(g.b)(e).map(e=>({label:e,value:e})),...(e||[]).filter(e=>!f.includes(e.purpose)).map(({_id:e,name:t})=>({label:t,value:e}))])(o),R=!!t._id,y=Object(m.n)({component:i.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES"},A?"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_EDIT",t._id?t.name:void 0),v=Object(n.useCallback)(()=>{O(Object(p.b)({name:t.name,onConfirm:()=>O(Object(E.removeRouting)(t)).then(a())}))},[O,t,a]);return i.a.createElement(u.b,{onSubmit:b,title:y,initialValues:L(t,I),isEdit:R,isView:A,onEscClicked:a,validationSchema:h,showBack:!0,goBack:a,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&i.a.createElement(_.a,{disabled:e,type:"button",variant:"default",onClick:v},i.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(j,{interfaces:I}))}}}]);