(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[22,23,39,42,47],{1785:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a(8),l=a(3),o=a(34),_=a(1949),s=a(70),E=a(6),d=a(2065);const u={};t.default=()=>{const{id:e}=Object(c.m)(),t=Object(i.useSelector)(_.selectPortForwardData).find(t=>t._id===e),a=Object(s.h)();return Object(s.f)([Object(_.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(l.fetchSiteGateway)(),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}})],r.a.createElement(d.a,{initialValues:t||u,onBack:a}))}},1786:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a(8),l=a(1961),o=a(34),_=a(70),s=a(6),E=a(2066);const d={};t.default=()=>{const{id:e}=Object(c.m)(),t=Object(i.useSelector)(l.selectRoutingData).find(t=>t._id===e),a=Object(_.h)();return Object(_.f)([Object(l.fetchRouting)(void 0,{crudCacheStrategy:{type:s.a.CACHE}}),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],r.a.createElement(E.a,{initialValues:t||d,onBack:a}))}},1787:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a(8),l=a(2002),o=a(70),_=a(6),s=a(2067);const E={};t.default=()=>{const{id:e}=Object(c.m)(),t=Object(i.useSelector)(l.selectDynamicDnsData).find(t=>t._id===e),a=Object(o.h)();return Object(o.f)([Object(l.fetchDynamicDns)({crudCacheStrategy:{type:_.a.CACHE}})],r.a.createElement(s.a,{initialValues:t||E,onBack:a}))}},1788:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),i=a(6),l=a(50),o=a(83),_=a(1949),s=a(1961),E=a(1951),d=a(2002),u=a(34),T=a(1937),m=a(71),p=a(8),N=a(36),S=a(1851),O=a(2851),A=a(2657),b=a(2),R=a(5),I=a(3),h=a(18),g=a(1938),f=a(1940),D=a(455),G=a(791),C=a(2472),v=a(2473),y=a(2474);const L=Object(R.c)(m.n)`
  min-width: 480px;
`,w=R.a`
  padding-bottom: 0;
  width: 100%;
`,j=Object(R.c)("div")`
  padding: 0 ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`;var P=Object(b.f)(({intl:e,onBack:t})=>{const a=Object(p.useDispatch)(),i=Object(p.useSelector)(_.selectPortForwardData),l=Object(p.useSelector)(s.selectRoutingData),o=Object(p.useSelector)(d.selectDynamicDnsData),E=Object(p.useSelector)(u.selectNetworksData),R=Object(p.useSelector)(I.selectHasEduAp),P=Object(c.i)("advanced/gateway"),W=Object(N.k)(),{[G.a.SETTINGS_PORT_FWD]:x={sortBy:"port-fwd-name",isAscending:!0},[G.a.SETTINGS_STATIC_ROUTES]:F={sortBy:"static-route-name",isAscending:!0},[G.a.SETTINGS_DYNAMIC_DNS]:M={sortBy:"dynamic-dns-service",isAscending:!0}}=Object(p.useSelector)(h.L),V=Object(n.useMemo)(()=>{const t=(e,t,n)=>{a(Object(h.S)(e,{sortBy:t.id,isAscending:n}))};return[{name:"open-port-forwarding-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING",buttonText:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON",route:"portfwd/form",children:i.length?r.a.createElement(S.a,{idField:"_id",onSort:(e,a)=>t(G.a.SETTINGS_PORT_FWD,e,a),initialSortBy:x.sortBy,initiallySortAscending:x.isAscending,columns:Object(C.getPortForwardTableColumns)(),items:i,disableColumnFilters:!0,onRowClick:({_id:e})=>W.push(`${P}/portfwd/form/${e}`),disableTextPointer:!0,disableSelection:!0}):null},{name:"open-static-routes-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES",buttonText:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_BUTTON",route:"static-route/form",children:l.length?r.a.createElement(S.a,{idField:"_id",onSort:(e,a)=>t(G.a.SETTINGS_STATIC_ROUTES,e,a),initialSortBy:F.sortBy,initiallySortAscending:F.isAscending,columns:Object(v.getStaticRoutesTableColumns)(e,E),items:l,onRowClick:({_id:e})=>W.push(`${P}/static-route/form/${e}`),disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0}):null},{name:"open-dynamic-dns-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS",buttonText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_BUTTON",route:"dyndns/form",children:o.length?r.a.createElement(S.a,{idField:"_id",onSort:(e,a)=>t(G.a.SETTINGS_DYNAMIC_DNS,e,a),initialSortBy:M.sortBy,initiallySortAscending:M.isAscending,columns:y.dynamicDnsTableColumns,items:o,onRowClick:({_id:e})=>W.push(`${P}/dyndns/form/${e}`),disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0}):null},{name:"open-dhcp-form",title:"SETTINGS_GATEWAY_SUB_NAME_DHCP",clickable:!0,route:"dhcp/form"},{name:"open-mdns-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS",clickable:!0,route:"mdns/form"},R&&{name:"open-sip-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_SIP",clickable:!0,route:"sip/form"},{name:"open-upnp-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP",clickable:!0,route:"upnp/form"},{name:"open-snmp-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_SNMP",clickable:!0,route:"snmp/form"}].filter(e=>!!e)},[i,x.sortBy,x.isAscending,a,l,F.sortBy,F.isAscending,E,e,o,M.sortBy,M.isAscending,R,W,P]),B=e=>e?r.a.createElement(b.c,{id:"success"===e?"COMMON_ENABLED":"SETTINGS_COMMON_NOT_ENABLED"}):null;return r.a.createElement(m.g,{flexDirection:"column",width:"100%",height:"100%"},r.a.createElement(g.a,{title:{component:r.a.createElement(b.c,{id:"SETTINGS_INTERNET_GENERAL_WAN_GW_SETTINGS_HEADING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_MESSAGE"},onEscClicked:t,hideClose:!0,showBack:!0,goBack:t}),r.a.createElement(f.a,null,r.a.createElement(j,null,V.map(({clickable:e,title:t,status:a,name:n,route:c,children:i,buttonText:l})=>{const o=e?O.a:A.a;return r.a.createElement(L,{padding:"none",key:n},r.a.createElement(o,{headerTitle:r.a.createElement(T.b,{label:r.a.createElement(b.c,{id:t}),type:a?T.c.STATUS:T.c.BASIC,status:a}),headerButton:r.a.createElement(D.a,null,l?r.a.createElement(T.g,{name:n,onClick:()=>c&&W.push(`${P}/${c}`)},r.a.createElement(b.c,{id:l})):r.a.createElement(T.a,null,B(a))),headerContentClassName:w,onClick:e?()=>c&&W.push(`${P}/${c}`):void 0},i))}))))});var W=()=>{const e=Object(c.h)();return r.a.createElement(P,{onBack:e})};t.default=()=>Object(c.f)([Object(l.fetchSettings)({type:i.a.CACHE}),Object(o.b)(void 0,{crudCacheStrategy:{type:i.a.CACHE}}),Object(_.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:i.a.CACHE}}),Object(s.fetchRouting)(void 0,{crudCacheStrategy:{type:i.a.CACHE}}),Object(E.fetchDhcpOptions)({crudCacheStrategy:{type:i.a.CACHE}}),Object(d.fetchDynamicDns)({crudCacheStrategy:{type:i.a.CACHE}}),Object(u.fetchNetworks)(void 0,{crudCacheStrategy:{type:i.a.CACHE}})],r.a.createElement(m.j,null,r.a.createElement(T.e,{scrollable:!0,noPadding:!0},r.a.createElement(W,null))))},1809:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a(36),l=a(2),o=a(8),_=a(2851),s=a(643),E=a(32),d=a(2004),u=a(451),T=a(34),m=a(229),p=a(378),N=a(50),S=a(1937),O=a(1935),A=a(1931),b=a(71),R=a(2032),I=a(70),h=a(6);a(1788);var g=()=>{const e=Object(i.k)(),t=Object(I.i)("advanced/gateway");return r.a.createElement(_.a,{headerButton:r.a.createElement(S.a,null),headerTitle:r.a.createElement(S.b,{label:r.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_WAN_GW_SETTINGS_HEADING"})}),onClick:()=>e.push(t)})},f=a(2657),D=a(1851),G=a(2475);const C=Object(c.c)(f.a)`
  min-width: 480px;
`;var v=()=>{const e=Object(i.k)(),t=Object(I.i)("advanced/network-isolation/form"),a=Object(o.useSelector)(T.selectVlanOnlyNetworks);return r.a.createElement(C,{headerButton:r.a.createElement(S.g,{name:"networks-create",variant:"secondary",onClick:()=>e.push(t)},r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_ADD"})),headerTitle:r.a.createElement(S.b,{label:r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_LABEL"}),section:"network-isolation"})},a.length>0&&r.a.createElement(b.i,{horizontal:!0},r.a.createElement(D.a,{columns:G.b,idField:"_id",items:a,disableTextPointer:!0,disableSelection:!0,onRowClick:a=>e.push(`${t}/${a._id}`)})))},y=a(18),L=a(791),w=a(2191);const j=Object(c.c)(f.a)`
  min-width: 480px;
`,P=[{id:"name",label:r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_NAME"}),sortable:!0,filterable:!1,minWidth:100,maxWidth:150},{id:"qos_rate_max_down",label:r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_LIMIT_DOWNLOAD"}),renderCell:e=>r.a.createElement(w.a,{userGroup:e,download:!0}),sortable:!0,minWidth:130,maxWidth:200},{id:"qos_rate_max_up",label:r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_LIMIT_UPLOAD"}),renderCell:e=>r.a.createElement(w.a,{userGroup:e,upload:!0}),sortable:!0,minWidth:130}];var W=()=>{const e=Object(i.k)(),t=Object(o.useDispatch)(),a=Object(I.i)("advanced/bandwidth-profiles/form"),n=Object(o.useSelector)(p.selectUserGroupsData),{sortBy:c,isAscending:_}=Object(o.useSelector)(Object(y.I)(L.a.SETTINGS_BANDWIDTH_PROFILES))||{sortBy:"name",isAscending:!0};return r.a.createElement(j,{headerButton:r.a.createElement(b.b,null,r.a.createElement(S.g,{name:"profiles-bandwidth-profiles-create",onClick:()=>e.push(a)},r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_BUTTON_CREATE"}))),headerTitle:r.a.createElement(S.b,{label:r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_BUBBLE_LABEL"}),type:S.c.BASIC})},n.length>0&&r.a.createElement(b.i,{horizontal:!0},r.a.createElement(D.a,{columns:P,disableSelection:!0,disableTextPointer:!0,idField:"_id",onSort:(e,a)=>{t(Object(y.S)(L.a.SETTINGS_BANDWIDTH_PROFILES,{sortBy:e.id,isAscending:a}))},initialSortBy:c,initiallySortAscending:_,items:n,onRowClick:({_id:t})=>e.push(`${a}/${t}`)})))},x=a(669);function F(e,t){switch(e){case x.d.AUTO:return t.formatMessage({id:"COMMON_DEVICE_POE_MODE_AUTO"});case x.d.OFF:return t.formatMessage({id:"COMMON_DEVICE_POE_MODE_OFF"});case x.d.PASSTHROUGH:return t.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSTHROUGH"});case x.d.PASSIVE_24V:return t.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSIVE"});default:return""}}var M=a(2057);function V(e,t,a,n){return void 0===n.autoneg||null===n.autoneg||!0===a.autoneg?-1:void 0===a.autoneg||null===a.autoneg||!0===n.autoneg?1:a.speed===n.speed?Number(a.full_duplex)-Number(n.full_duplex):a.speed-n.speed}const B=Object(c.c)(f.a)`
  min-width: 480px;
`;var U=Object(l.f)(({intl:e})=>{const t=Object(i.k)(),a=Object(o.useDispatch)(),c=Object(I.i)("advanced/switch-ports/form"),_=Object(o.useSelector)(T.selectNativeNetworks),s=Object(o.useSelector)(m.selectPortConf),E=Object(n.useMemo)(()=>((e,t)=>[{filterable:!1,id:"name",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_NAME"}),sortable:!0,minWidth:100},{compare:(t,a)=>F(t,e).localeCompare(F(a,e)),id:"poe_mode",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_POE_MODE"}),renderCell:({poe_mode:t})=>F(t,e)||"-",sortable:!0,minWidth:100},{compare:(e,a)=>Object(T.getNetworkName)(t,e).localeCompare(Object(T.getNetworkName)(t,a)),id:"native_networkconf_id",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_NATIVE_NETWORKCONF_ID"}),renderCell:({native_networkconf_id:e})=>Object(T.getNetworkName)(t,e)||"-",sortable:!0,minWidth:140,growthFactor:160},{compare:V,id:"autoneg",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_AUTONEG"}),renderCell:t=>function({autoneg:e,full_duplex:t,speed:a},n){return!0===e?n.formatMessage({id:"COMMON_DEVICE_AUTONEG"}):!1===e?n.formatMessage({id:t?"COMMON_DEVICE_DUPLEX_FULL":"COMMON_DEVICE_DUPLEX_HALF"},{speed:a}):""}(t,e)||"-",sortable:!0,minWidth:100},{id:"isolation",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_ISOLATION"}),renderCell:({isolation:e})=>e?Object(M.a)(!0):"-",sortable:!0,minWidth:100},{compare:(e,t,{stormctrl_bcast_enabled:a,stormctrl_mcast_enabled:n,stormctrl_ucast_enabled:r},{stormctrl_bcast_enabled:c,stormctrl_mcast_enabled:i,stormctrl_ucast_enabled:l})=>Number(r||n||a||0)-Number(c||i||l||0),id:"stormctrl",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_STORMCTRL"}),renderCell:({stormctrl_bcast_enabled:e,stormctrl_mcast_enabled:t,stormctrl_ucast_enabled:a})=>a||t||e?Object(M.a)(!0):"-",sortable:!0,minWidth:100},{id:"stp_port_mode",label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_TABLE_HEADER_STP_PORT_MODE"}),renderCell:e=>{var t;return null===(t=e.stp_port_mode)||void 0===t||t?Object(M.a)(!0):"-"},sortable:!0,minWidth:50}])(e,_),[_,e]),{sortBy:d,isAscending:u}=Object(o.useSelector)(Object(y.I)(L.a.SETTINGS_SWITCH_PORTS))||{sortBy:"name",isAscending:!0};return r.a.createElement(B,{headerButton:r.a.createElement(b.b,null,r.a.createElement(S.g,{name:"profiles-switch-port-profile-create",onClick:()=>t.push(c)},r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_BUTTON_CREATE"}))),headerTitle:r.a.createElement(S.b,{label:r.a.createElement(l.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_BUBBLE_LABEL"}),type:S.c.BASIC})},0!==s.length&&r.a.createElement(b.i,{horizontal:!0},r.a.createElement(D.a,{columns:E,disableSelection:!0,disableTextPointer:!0,initialColumns:["name","poe_mode","native_networkconf_id","autoneg","isolation"],onSort:(e,t)=>{a(Object(y.S)(L.a.SETTINGS_SWITCH_PORTS,{sortBy:e.id,isAscending:t}))},initialSortBy:d,initiallySortAscending:u,idField:"_id",items:s,onRowClick:e=>t.push(`${c}/${e._id}`)})))}),k=a(831),H=a(2476),$=a(2164);const Y=Object(c.c)(f.a)`
  min-width: 480px;
`;var z=()=>{const e=Object(i.k)(),t=Object(o.useDispatch)(),a=Object(I.i)("advanced/radius"),c=a+"/form",_=Object(n.useCallback)(e=>`${a}/profile/form/${e||""}`,[a]),s=Object(o.useSelector)(u.selectRadiusProfiles),E=Object(o.useSelector)(k.d),d=Object(n.useMemo)(()=>Object(H.a)(E),[E]),{sortBy:T,isAscending:m}=Object(o.useSelector)(Object(y.I)(L.a.SETTINGS_RADIUS))||{sortBy:"name",isAscending:!0};return r.a.createElement("div",{id:$.a},r.a.createElement(Y,{headerTitle:r.a.createElement(S.b,{label:r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_RADIUS_LABEL"})}),headerButton:r.a.createElement(S.g,{name:"radius-profile-create",onClick:()=>e.push(_())},r.a.createElement(l.c,{id:"SETTINGS_ADVANCED_RADIUS_BUTTON_CREATE"}))},r.a.createElement(b.i,{horizontal:!0},r.a.createElement(D.a,{columns:d,idField:"_id",items:s,onSort:(e,a)=>{t(Object(y.S)(L.a.SETTINGS_RADIUS,{sortBy:e.id,isAscending:a}))},initialSortBy:T,initiallySortAscending:m,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({attr_no_delete:t,_id:a})=>e.push(t?c:_(a))}))))};const q=Object(c.c)(b.n)`
  min-width: 480px;
`,X=Object(c.c)(_.a)`
  padding: 16px 32px 16px 16px;
`,K=Object(c.c)(s.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
    margin-top: 6px;
  }
`;t.default=()=>{const{enabled:e}=Object(o.useSelector)(N.selectRadioAiSettings),t=Object(i.k)(),a=Object(n.useCallback)(()=>t.push("advanced/wifi-ai"),[t]);return Object(I.f)([Object(T.fetchNetworks)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),Object(m.fetchPortConf)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),Object(p.fetchUserGroups)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),Object(u.fetchRadiusProfiles)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),Object(d.fetchAccounts)(void 0,{crudCacheStrategy:{type:h.a.CACHE}})],r.a.createElement(b.j,null,r.a.createElement(S.e,{scrollable:!0},r.a.createElement(R.a,{timeout:{enter:580,exit:100}},r.a.createElement(q,{padding:"none"},r.a.createElement(X,{headerButton:r.a.createElement(O.a,null),headerTitle:r.a.createElement(A.c,{alignItems:"flex-start"},r.a.createElement(K,{variant:e?"success":"neutral"}),r.a.createElement(A.b,{flex:"1",flexDirection:"column"},r.a.createElement(l.c,{id:"SETTINGS_GENERAL_FORM_ACCORDION_ITEM_WI_FI_AI_LABEL"}),r.a.createElement(E.a,{color:"tertiary"},r.a.createElement(l.c,{id:"SETTINGS_GENERAL_FORM_ACCORDION_ITEM_WI_FI_AI_DESCRIPTION"})))),onClick:a})),r.a.createElement(b.n,{padding:"none"},r.a.createElement(U,null)),r.a.createElement(b.n,{padding:"none"},r.a.createElement(v,null)),r.a.createElement(b.n,{padding:"none"},r.a.createElement(W,null)),r.a.createElement(b.n,{padding:"none"},r.a.createElement(z,null)),r.a.createElement(q,{padding:"none"},r.a.createElement(g,null))))))}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return S.a})),a.d(t,"a",(function(){return F}));var n=a(0),r=a.n(n),c=a(5),i=a(648),l=a(1136),o=a(208);const _=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,s=(Object(c.c)(i.Link)`
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
`),E=Object(c.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>r.a.createElement(s,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),u=e=>r.a.createElement(_,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var T=a(1851),m=a(375);const p=Object(c.c)(T.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,N=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(m.b)(({theme:e,...t})=>r.a.createElement(p,Object.assign({headerRowClassName:N(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var S=a(1934),O=a(529),A=a(1743),b=a(2),R=a(30),I=a(15),h=a(2846),g=a(44),f=a(71),D=a(62);const G=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(c.c)(f.c)`
  > * {
    vertical-align: middle;
  }
`,v=Object(c.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,y=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,L=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,w=Object(c.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,j=Object(c.c)(v,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,P=Object(c.c)(f.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,W=Object(c.c)(f.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,x=Object(c.c)("div")`
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
`;var F=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:i,validationSchema:l,initialValues:o,onEditSubmit:_,useValuesInSchema:s=!1,max:d,useWindowTable:u=!1,addButtonText:m="COMMON_ACTION_ADD",invalid:p,...N}){const S=Object(n.useContext)(f.l),[F,M]=Object(n.useState)(!0),V=Object(n.useCallback)(t=>!t.disableRemove&&r.a.createElement(E,null,r.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{M(!1),i(t),await Promise.resolve(),M(!0)}},r.a.createElement(b.c,{id:"COMMON_ACTION_REMOVE"}))),[e,M,i]),B=Object(n.useMemo)(()=>u?h.a:T.a,[u]);return r.a.createElement(g.c,{enableReinitialize:!0,onSubmit:t=>{_(t[e])},initialValues:o,validationSchema:()=>s?R.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:_,handleSubmit:s,handleReset:E,setTouched:u})=>r.a.createElement(r.a.Fragment,null,t.map((a,i)=>r.a.createElement(G,{inline:a.inline,isLast:i===t.length-1,key:a.name},r.a.createElement(v,{flexDirection:"column",width:"100%"},r.a.createElement(D.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:p,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!S&&c&&i===t.length-1&&r.a.createElement(y,null,r.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),M(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),r=await u(a,!0);t.find(e=>r[e.name])||c(n),M(!0)},Icon:I.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},r.a.createElement(b.c,{id:m}))))),n.editActive?r.a.createElement(r.a.Fragment,null,n[e].map((n,c)=>r.a.createElement(w,{key:n.id,width:"100%"},N.columns.map((n,i)=>t[i]?r.a.createElement(j,{key:n.id,isLast:i===N.columns.length-1,flexDirection:"column",flex:"1 1 50%"},r.a.createElement(D.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[i].type,fast:!0},"dropdown"!==t[i].type?{}:{options:t[i].options,translateLabel:!0,translateOptions:t[i].translateOptions,translatePlaceholder:!0,type:t[i].type,validated:t[i].validated}))):null))),r.a.createElement(P,{justifyContent:"flex-end",width:"100%"},r.a.createElement(W,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{E(),_("editActive",!1)}},r.a.createElement(b.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(f.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:s,disabled:Object(O.a)(Object(A.a)(n,"editActive"),Object(A.a)(o,"editActive"))},r.a.createElement(b.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&r.a.createElement(G,null,r.a.createElement(L,null,r.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{E(),_("editActive",!0)},Icon:I.ub},r.a.createElement(b.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&F&&r.a.createElement(x,null,r.a.createElement(B,{columns:N.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:i?V:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),i=a(2),l=a(1946),o=a.n(l),_=a(1741),s=a(520),E=a(521);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(E.a)(t),T=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),m=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&T(e,t),[u,T]);return!!e&&r.a.createElement(o.a,{when:m(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(_.a,{actions:[{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:s.b,title:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},r.a.createElement(d,null,r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),i=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(i.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return I})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return f}));var n=a(0),r=a.n(n),c=a(5),i=a(643),l=a(32),o=a(1932),_=a(8),s=a(15),E=a(45),d=a(17),u=a(189),T=a(41);const m=Object(c.c)(u.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var p=({video:e})=>{const t=Object(_.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:T.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return r.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(s.vb,{color:E.a["blue-3"]}))},N=a(1933),S=a(71),O=a(227);const A=Object(c.c)(S.c)`
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
`,b=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,R=Object(c.c)(s.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var I,h=({video:e})=>{const t=Object(_.useDispatch)(),a=Object(_.useSelector)(O.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:T.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return r.a.createElement(A,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},r.a.createElement(b,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),r.a.createElement(R,{color:E.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(I||(I={}));const g=Object(c.c)(S.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,f=Object(c.c)(S.g)`
  * {
    line-height: 1.4 !important;
  }
`,D=Object(c.c)(i.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:i,online:_})=>{let s;switch(t){default:case I.BASIC:s=e;break;case I.CONFIGURED:s=r.a.createElement(f,{alignItems:"center"},e,!!n&&r.a.createElement(o.a,{section:n}),!!i&&_&&r.a.createElement(p,{video:i}));break;case I.STATUS:s=r.a.createElement(f,{alignItems:"center"},r.a.createElement(D,{variant:c}),r.a.createElement(g,{flex:"1",flexDirection:"column"},e,a&&r.a.createElement(l.a,null,a)));break;case I.UNCONFIGURED:s=r.a.createElement(f,{alignItems:"center"},!!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{section:n}),r.a.createElement(S.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(l.a,null,a))),!!i&&_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{video:i}),r.a.createElement(S.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(l.a,null,a))),!!i&&!_&&r.a.createElement(f,{alignItems:"center"},e))}return s}},1932:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),i=a(8),l=a(15),o=a(45),_=a(1936),s=a(189);const E=Object(c.c)(s.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(i.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(_.a)(e)),[t,e]);return r.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),i=a(8),l=a(15),o=a(45),_=a(1936),s=a(71),E=a(43);const d=Object(c.c)(s.c)`
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
`,u=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,T=Object(c.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(i.useDispatch)(),a=Object(i.useSelector)(E.i),c=Object(n.useCallback)(()=>t(Object(_.a)(e)),[t,e]);return r.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},r.a.createElement(u,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),r.a.createElement(T,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return s.d})),a.d(t,"c",(function(){return s.a}));var n=a(0),r=a.n(n),c=a(5),i=a(15),l=a(71);const o=Object(c.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var _=({children:e,...t})=>r.a.createElement(o,Object.assign({alignItems:"center"},t),e,r.a.createElement(i.g,null)),s=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(17),r=a(41);const c=e=>Object(n.g)({modalType:r.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var r=a(0),c=a.n(r),i=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:r=6,...l})=>{const o=a?12:r,_=a?0:n;return c.a.createElement("div",Object.assign({className:Object(i.b)("col-"+o,"offset-"+_,t)},l),e)};var o,_=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(i.b)("col-"+a,"offset-"+t)},e),s=a(2),E=a(666),d=a.n(E),u=a(71),T=a(1964),m=a.n(T),p=a(140),N=a.n(p),S=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const O=N.a.bind(m.a);var A=({className:e=null,status:t=o.NEUTRAL,...a})=>c.a.createElement(S.a,Object.assign({},a,{className:O("ubntStatusText","ubntStatusText--"+t,e)})),b=a(254),R=a(1944);const I=Object(i.c)(u.g)`
  border: 1px solid ${b.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,h=Object(i.c)(A)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var g=({state:e,className:t=null,...a})=>c.a.createElement(I,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(h,{message:R.b[e],status:o.WARNING})),f=a(322),D=a(82),G=a(8),C=a(45),v=a(70),y=a(20);const L={BORDER_WIDTH:2},w={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},j=({type:e,size:t,width:a,height:n})=>{switch(e){case f.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:r,TOP:c}=w;return{top:c,left:e,padding:`${n}px ${r}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function P({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:l,height:o}){const _=Object(G.useSelector)(f.selectHighlight),[s,E]=Object(v.c)(0),[d,u]=Object(v.c)(!1),T=Object(r.useRef)(null),m=Object(r.useMemo)(()=>(({color:e,show:t,style:a})=>Object(i.a)({"&::before":{border:`${L.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...j({type:e,size:c,width:l,height:o}),...a}}),[d,e,a,c,l,o]);return Object(r.useEffect)(()=>{if(Number.isFinite(n)&&n>s)E(s+1);else if(T.current&&t===_.id&&_.type===e){window.getComputedStyle(T.current).border,window.getComputedStyle(T.current).boxShadow;let t=T.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:r,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:r,top:c}=t.current.getBoundingClientRect();switch(a){case f.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=w,i=c+Object(y.a)(n,"top",a),l=i+r+Object(y.a)(n,"paddingBottom",e)+Object(y.a)(n,"paddingTop",t)+2*L.BORDER_WIDTH;return{bottom:l,height:l-i,top:i}}}})({height:o,highlightRef:T,type:e,highlightStyle:a}),{bottom:i,height:l,top:_}=n.getBoundingClientRect(),s=t>i,E=r>l,d=15;c<_||E?n.scrollTo({behavior:"smooth",top:n.scrollTop-_+c-d}):s&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-i+d})}u(!0)}},[o,s]),Object(r.useEffect)(()=>{d||_.id!==t||E(e=>e+1),d&&_.id!==t&&u(!1)},[_.id,d]),{highlightClassName:m,highlightRef:T}}const W=Object(i.c)(d.a)`
  color: ${D.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,x=Object(i.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,F=i.a`
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
`;var M=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:r={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:_=null,htmlFor:E=null,offset:d=0,size:u=5,useHtml:T=!1})=>{const{highlightClassName:m,highlightRef:p}=P({type:f.SearchHighlightType.FIELD,forId:E,highlightStyle:_,highlightDelay:o,size:u}),N=!(!n&&!a),S={["col-"+u]:!0,["offset-"+d]:d>0},O=T?s.b:s.c;return c.a.createElement("div",{className:Object(i.b)(S,F,m),ref:p},c.a.createElement("div",{className:"mb-1"},c.a.createElement(x,{className:"settingsGridLabel",htmlFor:E,primary:!0},l?e:c.a.createElement(s.c,{id:e})),t&&c.a.createElement(g,{state:t})),N&&c.a.createElement("div",null,c.a.createElement(W,{className:"settingsGridDescription",htmlFor:E,secondary:!0},n?c.a.createElement(O,{id:n,values:r}):a)))};const V=i.a`
  max-width: 960px;
`,B=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:r=8,noWidthLimit:l=!1})=>{const o=n?4:r;return c.a.createElement("div",{className:Object(i.b)("row","mt-"+o,l?null:V,t),ref:a},e)};var U=c.a.forwardRef((e,t)=>c.a.createElement(B,Object.assign({forwardedRef:t},e)));var k=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(S.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(i.c)("div")`
  flex: 0 1 480px;
`,$=Object(i.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:r=null,section:l=null})=>{const o=b.b.sectionColors.common;return c.a.createElement(U,{className:t,marginTop:0},c.a.createElement(H,null,c.a.createElement($,{className:Object(i.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(s.c,{id:e})),a&&c.a.createElement(S.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(i.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(z,{className:Object(i.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(i.b)({"pb-8":!a})},e));q.Content=l,q.Icon=_,q.Label=M,q.Row=U,q.SectionHeader=k,q.Subheader=Y;var X=a(284);const K=Object(i.c)(X.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Q=e=>c.a.createElement(K,Object.assign({},e)),J=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(G.useSelector)(Z.C);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(s.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return W})),a.d(t,"a",(function(){return C}));var n=a(0),r=a.n(n),c=a(5),i=a(2),l=a(44),o=a(2847),_=a(2658),s=a(1929),E=a(783),d=a(71),u=a(1940),T=a(15),m=a(32),p=a(42),N=a(1847),S=a(782),O=a(1930);const A=c.a`
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
`;var b=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...i})=>{const l=Object(O.a)(),o=Object(S.a)(c),_=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(N.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:A,mountOnEnter:!0},i),a)),[a,t,o,l,e,i]);return r.a.createElement(r.a.Fragment,null,_)};const R=c.a`
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
`;var I=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...i})=>{const l=Object(O.a)(),o=Object(S.a)(c),_=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(N.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:R,mountOnEnter:!0},i),a)),[a,t,o,l,e,i]);return r.a.createElement(r.a.Fragment,null,_)};const h=Object(c.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,g=Object(c.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,f=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,D=Object(c.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,G=Object(c.c)(m.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var C=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:i})=>{const{motif:l}=Object(p.a)();return r.a.createElement(I,{ignoredPaths:i},r.a.createElement(g,{flex:"none",height:"65px"},r.a.createElement(b,{ignoredPaths:i},r.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(h,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(D,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},r.a.createElement(T.f,{size:"original"}))),r.a.createElement(f,null,r.a.createElement(G,{weight:"bold"},e.component)),r.a.createElement(h,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&r.a.createElement(D,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(T.y,{size:"original"})))))))};const v=Object(c.c)(d.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,y=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,L=Object(c.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,w=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,j=Object(c.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,P=Object(c.c)(d.k)`
  height: 100%;
  width: 100%;
`;var W=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:E,title:T,unsavedChangesModalIgnoredPaths:m,onEscClicked:p,submitText:N="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:S=!1,customFooterButtons:O,hidddenHeader:A,...b})=>r.a.createElement(l.c,Object.assign({enableReinitialize:!0},b),({dirty:c,handleReset:l,handleSubmit:b,isSubmitting:R})=>r.a.createElement(y,{autoComplete:"off",onSubmit:b},r.a.createElement(P,{vertical:!0},!A&&r.a.createElement(C,{goBack:a,hideClose:n,showBack:E,title:T,onEscClicked:p,ignoredPaths:m}),r.a.createElement(u.a,{ignoredPaths:m},r.a.createElement(j,{flex:"1"},r.a.createElement(v,{flex:"none",flexDirection:"column"},e))),!t&&!o&&r.a.createElement(s.a,{ignoredPaths:m,when:c&&!R}),(!o||S)&&r.a.createElement(w,{active:c||S},r.a.createElement(d.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&r.a.createElement(L,null,O(R)),!o&&r.a.createElement(d.g,null,r.a.createElement(_.a,{disabled:!c||R,type:"button",variant:"default",onClick:l},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(_.a,{disabled:!c||R,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:N}))))))))},1940:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1847),i=a(5),l=a(782),o=a(1930);const _=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:i,...s})=>{const E=Object(o.a)(),d=Object(l.a)(a),u=Object(n.useMemo)(()=>r.a.Children.map(i,a=>null===a?a:r.a.createElement(c.a,Object.assign({appear:t||!d||E,in:t||!d||E,timeout:e,classNames:_,mountOnEnter:!0},s),a)),[i,t,d,E,e,s]);return r.a.createElement(r.a.Fragment,null,u)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const r={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1947:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1847),i=a(5);const l=(e,t)=>i.a`
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
`;t.a=r.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:i="0 0 32px",wrap:o=!1,children:_,...s})=>{const E=Object(n.useMemo)(()=>r.a.Children.map(_,(n,i)=>r.a.createElement(c.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,void 0),mountOnEnter:!0},s),null===n?r.a.createElement("div",null):n)),[_,a,t,s,e]);return o?r.a.createElement(c.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,i),mountOnEnter:!0},s),r.a.createElement("div",null,_)):r.a.createElement(r.a.Fragment,null,E)})},1949:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchPortForwardRules",(function(){return l})),a.d(t,"fetchPortForwardRule",(function(){return o})),a.d(t,"savePortForwardRule",(function(){return _})),a.d(t,"removePortForwardRule",(function(){return s})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return c})),a.d(t,"selectPortForwardRules",(function(){return u})),a.d(t,"selectPortForwardData",(function(){return T})),a.d(t,"selectPortForwardRecord",(function(){return m})),a.d(t,"PortForwardInterface",(function(){return p}));var n=a(6),r="portforward",c="/api/s/{site}/rest/".concat(r),i=a(28);const l=(e={},t={})=>Object(n.q)(r,c,e,{idField:"_id",...t}),o=e=>Object(n.t)(r,c,e),_=e=>{const t=Object(i.a)("SETTINGS_GATEWAY_PORT_FORWARD_CREATE_ERROR","SETTINGS_GATEWAY_PORT_FORWARD_CREATE_SUCCESS"),{_id:a}=e;return a?Object(n.C)(r,a,`${c}/${a}`,e,{},t):Object(n.i)(r,c,e,{},t)},s=({_id:e,name:t})=>Object(n.n)(r,e,`${c}/${e}`,{},Object(i.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_SUCCESS_TOAST",{name:t}));var E=a(20),d=a(4);const u=Object(n.A)(l()),T=Object(d.a)(u,i.c),m=e=>t=>{const a=Object(n.w)(o(e),t.models);return Object(E.a)(a,"data",{})};var p;!function(e){e.WAN="wan",e.WAN2="wan2",e.BOTH="both"}(p||(p={}))},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return d})),a.d(t,"saveDhcpOption",(function(){return u})),a.d(t,"removeDhcpOption",(function(){return T})),a.d(t,"DHCP_OPTIONS",(function(){return c})),a.d(t,"typeOptions",(function(){return i})),a.d(t,"integerOptions",(function(){return l})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return o})),a.d(t,"DHCP_CODE",(function(){return _})),a.d(t,"MODEL",(function(){return s})),a.d(t,"PATH",(function(){return E})),a.d(t,"selectDhcpOptions",(function(){return p})),a.d(t,"selectDhcpOptionsData",(function(){return N})),a.d(t,"selectDhcpOptionsCodes",(function(){return S})),a.d(t,"DhcpOptionTypes",(function(){return O})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return A}));var n=a(28),r=a(6);const c={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},i=[{value:c.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:c.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:c.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:c.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:c.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:c.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],l=[8,16,32].map(e=>({value:e,label:e})),o="dhcpd_user_option_",_={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},s="dhcpOptions",E="/api/s/{site}/rest/dhcpoption",d=(e={})=>Object(r.q)(s,E,void 0,{...e,idField:"_id"}),u=e=>{const{_id:t}=e;return t?Object(r.C)(s,t,`${E}/${t}`,e):Object(r.i)(s,E,e)},T=({_id:e,name:t})=>Object(r.n)(s,e,`${E}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var m=a(4);const p=Object(r.A)(d()),N=Object(m.a)(p,n.c),S=Object(m.a)(N,e=>e.map(({code:e})=>e));var O;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(O||(O={}));const A=(e,t,a,n)=>{let r;switch(a){case O.BOOLEAN:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case O.HEX_ARRAY:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case O.INTEGER:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case O.IP_ADDRESS:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case O.MAC_ADDRESS:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case O.TEXT:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:r="COMMON_UNKNOWN"}const c=e.formatMessage({id:r});return"integer"!==a?c:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1961:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchRouting",(function(){return l})),a.d(t,"saveRouting",(function(){return o})),a.d(t,"removeRouting",(function(){return _})),a.d(t,"MODEL",(function(){return c})),a.d(t,"PATH",(function(){return i})),a.d(t,"selectRouting",(function(){return E})),a.d(t,"selectRoutingData",(function(){return d})),a.d(t,"StaticRouteGatewayType",(function(){return u})),a.d(t,"StaticRouteType",(function(){return T}));var n=a(28),r=a(6),c="routing",i="/api/s/{site}/rest/routing";const l=(e={},t={})=>Object(r.q)(c,i,e,{idField:"_id",...t}),o=e=>{const{_id:t}=e;return t?Object(r.C)(c,t,`${i}/${t}`,e):Object(r.i)(c,i,e)},_=({_id:e,name:t})=>Object(r.n)(c,e,`${i}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_SUCCESS_TOAST",{name:t}));var s=a(4);const E=Object(r.A)(l()),d=Object(s.a)(E,n.c);var u,T;!function(e){e.DEFAULT="default",e.SWITCH="switch"}(u||(u={})),function(e){e.NEXT_HOP="nexthop-route",e.INTERFACE="interface-route",e.BLACK_HOLE="blackhole"}(T||(T={}))},1999:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(28),r=a(6),c=a(2e3);const i=(e={})=>Object(r.q)(c.a,c.b,void 0,{...e,idField:"_id"}),l=e=>{const{_id:t}=e;return t?Object(r.C)(c.a,t,`${c.b}/${t}`,e):Object(r.i)(c.a,c.b,e)},o=({_id:e,service:t})=>Object(r.n)(c.a,e,`${c.b}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_SUCCESS_TOAST",{name:t}))},2e3:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="dynamicdns",r="/api/s/{site}/rest/".concat(n)},2002:function(e,t,a){"use strict";a.r(t);var n=a(2025);a.d(t,"selectDynamicDns",(function(){return n.a})),a.d(t,"selectDynamicDnsData",(function(){return n.b}));var r=a(2e3);a.d(t,"MODEL",(function(){return r.a})),a.d(t,"PATH",(function(){return r.b}));var c=a(1999);a.d(t,"fetchDynamicDns",(function(){return c.a})),a.d(t,"saveDynamicDns",(function(){return c.c})),a.d(t,"removeDynamicDns",(function(){return c.b}));var i=a(2026);for(var l in i)["default","selectDynamicDns","selectDynamicDnsData","MODEL","PATH","fetchDynamicDns","saveDynamicDns","removeDynamicDns"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l)},2003:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return _}));var n=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},r=function(e,t){var a=n(e),r=a[0],c=a[1];return new RegExp(t.call(t,r),c)},c=function(e){return r(e,(function(e){var t="^"===e.substring(0,1),a="$"===e.substring(e.length-1);if(!t&&!a)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(a?1:0))}))},i=function(e){return n(e)[0]},l=function(e){return r(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},o=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var a=e.map((function(e){return"(".concat(n(e)[0],")")})).join("|");return new RegExp(a,t)},_=function(e,t,a,r){return new RegExp((e||"")+n(t)[0]+(a||""),r)}},2004:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchAccounts",(function(){return E})),a.d(t,"saveAccount",(function(){return d})),a.d(t,"updateAccount",(function(){return u})),a.d(t,"removeAccount",(function(){return T})),a.d(t,"createAccountsBatch",(function(){return m})),a.d(t,"updateAccountsBatch",(function(){return p})),a.d(t,"removeAccountsBatch",(function(){return N})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return c})),a.d(t,"TUNNEL_TYPES",(function(){return i})),a.d(t,"NONE_VALUE",(function(){return l})),a.d(t,"tunnelTypeOptions",(function(){return o})),a.d(t,"tunnelMediumTypeOptions",(function(){return _})),a.d(t,"selectAccount",(function(){return A})),a.d(t,"selectAccounts",(function(){return b})),a.d(t,"selectNetworkAccounts",(function(){return R})),a.d(t,"selectNonNetworkAccounts",(function(){return I})),a.d(t,"selectAccountById",(function(){return h}));var n=a(6);const r="users",c="/v2/api/site/{site}/radius/"+r;var i;!function(e){e[e.PTPP=1]="PTPP",e[e.L2TP=3]="L2TP"}(i||(i={}));const l=0,o=Array.from({length:14}).map((e,t)=>0===t?{value:l,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_TYPE_NONE"}:{value:t,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_TYPE_"+t,values:{id:t}}),_=Array.from({length:16}).map((e,t)=>0===t?{value:l,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_MEDIUM_TYPE_NONE"}:{value:t,label:"SETTINGS_RADIUS_HEADERS_TUNNEL_MEDIUM_TYPE_"+t,values:{id:t}});var s=a(28);const E=(e,t)=>Object(n.q)(r,c,e,{idField:"_id",...t}),d=e=>Object(n.h)(r,c+"/batch_add",[e],{},Object(s.a)("SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_ERROR_MESSAGE","SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_SUCCESS_MESSAGE",{name:e.name})),u=e=>Object(n.B)(r,c+"/batch_update",[e],{},{...Object(s.a)("SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_ERROR_MESSAGE","SETTINGS_GATEWAY_RADIUS_CREATE_USER_FORM_SUCCESS_MESSAGE",{name:e.name}),method:"post"}),T=(e,t)=>Object(n.m)(r,c+"/batch_delete",[e],{},{...Object(s.a)("SETTINGS_GATEWAY_RADIUS_REMOVE_USER_ERROR_MESSAGE","SETTINGS_GATEWAY_RADIUS_REMOVE_USER_SUCCESS_MESSAGE",{name:t}),method:"post"}),m=e=>Object(n.h)(r,c+"/batch_add",e,{}),p=e=>Object(n.B)(r,c+"/batch_update",e,{},{method:"post"}),N=e=>Object(n.m)(r,c+"/batch_delete",e,{},{method:"post"});var S=a(63),O=a(4);const A=Object(n.A)(E()),b=Object(O.a)(A,s.c),R=e=>Object(O.a)(b,t=>t.filter(({networkconf_id:t})=>t&&t===e)||[]),I=Object(O.a)(b,e=>e.filter(({networkconf_id:e})=>!e)||[]),h=Object(O.a)(b,e=>Object(S.a)(t=>e.find(({_id:e})=>t===e)))},2025:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(4),r=a(6),c=a(28),i=a(1999);const l=Object(r.A)(Object(i.a)()),o=Object(n.a)(l,c.c)},2026:function(e,t){},2032:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1847),i=a(5),l=a(782);const o=(e,t,a)=>i.a`
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
`,_=r.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:a=!0,delay:i=70,initialDelay:_=0,children:s,...E}=e,d=Object(l.a)(),u=Object(n.useMemo)(()=>r.a.Children.map(s,(e,n)=>null===e?e:r.a.createElement(c.a,Object.assign({appear:a||!d,in:a||!d,timeout:t,classNames:o(n,i,_),mountOnEnter:!0},E),e)),[s,i,_,a,d,E,t]);return r.a.createElement(r.a.Fragment,null,u)});t.a=_},2034:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(63),r=a(174),c=a(2003),i=a(105),l=Object(c.e)([i.j,i.m]),o=Object(n.a)((function(e){if("string"!=typeof e)return!1;if(!e.match(l))return!1;var t=new r.Address4(e);if(t.isValid())return t.correctForm()===t.startAddress().address;var a=new r.Address6(e);if(a.isValid()){var n=a.correctForm();return new r.Address6(n).startAddress().address===a.startAddress().address}return!1}))},2037:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(255),r=a(1953);const c=Object.values(r.a),i=e=>{const t=Math.min(c.length-1,Object(n.f)(e,1e3));return{value:Math.abs(e/1e3**t),unit:c[t]}},l=(e,t)=>{switch(t){case r.a.G:return Math.round(1e6*e);case r.a.M:return 1e3*e;case r.a.K:default:return e}},o=({download_kilobits_per_second:e,upload_kilobits_per_second:t})=>({download:i(e),upload:i(t)})},2054:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return d}));var n=a(364),r=a(1743),c=a(34),i=a(1951),l=a(2037);const o=e=>(e||[]).reduce((e,{wan_networkgroup:t=""})=>(t.toUpperCase().startsWith("WAN")&&e.push(t),e),[]),_=e=>{var t,a;const n=["cidr_prefix","gateway_ip"];return e.wan_smartq_enabled||(n.push("wan_smartq_up_rate"),n.push("wan_smartq_down_rate")),null!==(t=e.wan_dns1)&&void 0!==t||n.push("wan_dns1"),null!==(a=e.wan_dns2)&&void 0!==a||n.push("wan_dns2"),e.wan_type!==c.IpV4ConnectionType.PPPOE&&(n.push("wan_username"),n.push("x_wan_password")),e.wan_type!==c.IpV4ConnectionType.STATIC&&(n.push("wan_ip"),n.push("wan_netmask"),n.push("wan_gateway")),e.wan_provider_capabilities&&(e.wan_provider_capabilities.hasAtleastOneDefined?e.wan_provider_capabilities=(e=>Object(r.a)({...e,download_kilobits_per_second:Object(l.a)(e.download_kilobits_per_second,e.download_unit),upload_kilobits_per_second:Object(l.a)(e.upload_kilobits_per_second,e.upload_unit)},"download_unit","upload_unit","hasAtleastOneDefined"))(e.wan_provider_capabilities):delete e.wan_provider_capabilities),Object(r.a)(e,...n)},s=e=>{const t=["cidr_prefix","gateway_ip","dhcp_mode","contentFilter"],a=(e=>Object.entries(e).filter(([e,t])=>!!e.startsWith(i.DHCP_USER_OPTION_PREFIX)&&[void 0,null,""].some(e=>e===t)).map(([e])=>e))(e),{ipv6_interface_type:n,ipv6_pd_prefixid:l,vlan:o}=e;"none"===n&&t.push("ipv6_ra_priority","ipv6_ra_valid_lifetime","ipv6_ra_preferred_lifetime","dhcpdv6_enabled","dhcpdv6_start","dhcpdv6_stop","dhcpdv6_leasetime","dhcpdv6_dns_auto","dhcpdv6_dns_1","dhcpdv6_dns_2","dhcpdv6_dns_3","dhcpdv6_dns_4"),"static"!==n&&t.push("ipv6_subnet"),"pd"!==n&&t.push("ipv6_pd_interface","ipv6_pd_prefixid","ipv6_pd_start","ipv6_pd_stop");const _=e.nat_outbound_ip_addresses.filter(e=>e.ip_address);_.length||t.push("nat_outbound_ip_addresses");const s=Object(r.a)({...e,vlan_enabled:!!o,ipv6_pd_prefixid:null!=l?l:"",nat_outbound_ip_addresses:_},...t,...a),{gateway_device:E,gateway_type:d}=s;return E&&d!==c.NetworkGatewayType.default||(s.gateway_type=c.NetworkGatewayType.default,delete s.gateway_device),s},E=e=>{const t=s(e),a=[...c.vpnSpecificFields.client,...c.vpnSpecificFields.server,...c.vpnSpecificFields.siteToSite[c.SiteToSiteVpnType.AUTO_IPSEC_VTI],...c.vpnSpecificFields.siteToSite[c.SiteToSiteVpnType.MANUAL_IPSEC],...c.vpnSpecificFields.siteToSite[c.SiteToSiteVpnType.OPEN_VPN]].filter(e=>!c.networkAndVpnSharedKeys.includes(e));return Object(r.a)(t,...a)},d=({...e},t=!1)=>{if(t)return(e=>{const t=E(e);return t.l2tp_interface=e.l2tp_interface,t.l2tp_local_wan_ip=e.l2tp_local_wan_ip,t.radiusprofile_id=e.radiusprofile_id,t.vpn_type=c.ServerVpnType.L2TP_SERVER,t.x_ipsec_pre_shared_key=e.x_ipsec_pre_shared_key,t})(e);switch(e.purpose){case c.NetworkPurpose.VLAN_ONLY:return(e=>({vlan_enabled:!0,...Object(n.a)(e,["_id","site_id","purpose","name","vlan","enabled","is_nat","igmp_snooping","dhcpguard_enabled","dhcpd_ip_1","dhcpd_ip_2","dhcpd_ip_3"])}))(e);case c.NetworkPurpose.WAN:return _(e);case c.NetworkPurpose.REMOTE_USER_VPN:return(e=>{const t=s(e),a=Object(n.a)(t,...c.vpnPickKeys.server);return a.vpn_type!==c.ServerVpnType.L2TP_SERVER&&(delete a.l2tp_interface,delete a.l2tp_local_wan_ip,delete a.x_ipsec_pre_shared_key),a})(e);case c.NetworkPurpose.SITE_VPN:return(e=>{const t=s(e);return Object(n.a)({...t,ipsec_dh_group:Number(e.ipsec_dh_group),ipsec_ike_dh_group:Number(e.ipsec_ike_dh_group),ipsec_esp_dh_group:Number(e.ipsec_esp_dh_group),openvpn_mode:"site-to-site"},...c.vpnPickKeys.siteToSite[e.vpn_type])})(e);case c.NetworkPurpose.VPN_CLIENT:return(e=>{const t=s(e);return Object(n.a)(t,...c.vpnPickKeys.client)})(e);default:return E(e)}}},2057:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),c=a(15);function i(e){var t={height:12,width:12};return e?r.a.createElement(c.u,t):r.a.createElement(c.y,t)}},2061:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(0),r=a.n(n),c=a(5),i=a(1172),l=a(32),o=a(607),_=a(71),s=a(2);const E=100,d=Object(c.c)(_.g)`
  max-width: ${E}px;
`,u=Object(c.c)(i.a,{shouldForwardProp:e=>"itemCount"!==e})`
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
`,T=Object(c.c)("div")`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.motifPalette.link02};
  }
`,m=Object(c.c)(l.a)`
  display: block;
  width: 100%;
  line-height: 1.33333;
`;t.b=({names:e,messageId:t,rootSelector:a})=>{const c=Object(n.useMemo)(()=>e.map(e=>r.a.createElement(m,{truncate:!0,color:"primary"},e)),[e]);return r.a.createElement(o.a,{rootSelector:a,openOnMouseEnter:!0,align:"topCenter",toggleOffset:-10,renderToggle:()=>r.a.createElement(d,null,r.a.createElement(l.a,{truncate:!0},t&&e.length>1?r.a.createElement(s.c,{id:t,values:{count:e.length}}):e.join(", "))),renderCard:({open:t})=>t&&e.length>1&&r.a.createElement(u,{itemCount:e.length,isInteractive:!0,width:132,tooltipProps:{tooltipClassName:"tooltipClassName"},message:r.a.createElement(T,null,c)})})}},2065:function(e,t,a){"use strict";var n,r=a(0),c=a.n(r),i=a(8),l=a(2),o=a(63),_=a(215),s=a(1938),E=a(34),d=a(18),u=a(1949),T=a(663),m=a(70),p=a(2920),N=a(30),S=a(105),O=[500,4500];!function(e){e.ANY="any",e.LIMITED="limited"}(n||(n={}));const A=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_ANY",value:n.ANY},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_LIMITED",value:n.LIMITED}],b=e=>!/^[0-9]*$/.test(e),R=e=>function(t){return!e||(t||"").trim().split(",").every(e=>{if(e.includes("-")){const[t,a]=e.split("-").map(e=>Number(e.trim()));return O.every(e=>!Object(p.a)(e,t,a+1))}return!O.includes(parseInt(e,10))})};var I=Object(o.a)(e=>N.a.object().shape({name:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME").required(),srcType:N.a.string(),src:N.a.string().when("srcType",{is:n.LIMITED,then:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE").required().unifiIpv4Range(c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IP_SUBNET_RANGE",values:{name:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}}))}),dst_port:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT").unifiPortRange(c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("port-fwd-overlaps-ipsec",c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_PORT_FWD_OVERLAPS_IPSEC"}),R(e)).required(),fwd:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP").matches(S.h,c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).required(),fwd_port:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT").unifiPortRange(c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("incorrect-multiport-fwd-port",c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_INCORRECT_MULTIPORT_FWD_PORT"}),(function(e){const{dst_port:t}=this.parent;return!(b(t)||b(e))||(t||"").trim()===(e||"").trim()})).required(),pfwd_interface:N.a.string().oneOf([...Object.values(u.PortForwardInterface)]).required()})),h=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_BOTH",value:"tcp_udp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_TCP",value:"tcp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_UDP",value:"udp"}],g={name:"",enabled:!1,pfwd_interface:u.PortForwardInterface.WAN,srcType:n.ANY,src:"",dst_port:"",fwd:"",fwd_port:"",proto:h[0].value,log:!1},f=a(445),D=a(1739),G=a(1736),C=a(1914),v=a(1737),y=a(5),L=a(44),w=a(15),j=a(3),P=a(71),W=a(1947),x=a(62),F=a(32),M=a(800);const V=Object(y.c)("label")`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,B=Object(y.c)("div")`
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-right: 0;
  }
`,U=Object(y.c)("div")`
  min-width: 100%;
  flex: 1 0;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-bottom: 0;
  }
`;var k=Object(l.f)(({intl:e})=>{const t=Object(i.useSelector)(E.selectWanNetworks),a=Object(i.useSelector)(M.I),{values:n,setFieldValue:o}=Object(L.e)(),{destination_ip:_,pfwd_interface:s}=n,d=s===u.PortForwardInterface.BOTH?[u.PortForwardInterface.WAN,u.PortForwardInterface.WAN2]:[s],T=Object(r.useMemo)(()=>d.map(e=>t.find(({wan_networkgroup:t})=>(null==t?void 0:t.toLowerCase())===e.toLowerCase())),[s]),m=Object(r.useMemo)(()=>T.reduce((t,a)=>{const{wan_ip:n,wan_ip_aliases:r=[],wan_networkgroup:i,wan_type:o,_id:_}=null!=a?a:{},d=[n,...r].reduce((e,t)=>{const a=null==t?void 0:t.replace(/\/\d{1,2}/,"");return a?[...e,{label:a,value:a}]:e},[{label:e.formatMessage({id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP_AUTO_DEFINED"}),value:"any"}]);let T;switch(d.length>2?s!==u.PortForwardInterface.BOTH&&(T="dropdown"):o===E.IpV4ConnectionType.STATIC&&(T="text"),T){case"dropdown":return[...t,c.a.createElement(U,{key:_},c.a.createElement(V,null,c.a.createElement(x.Field,{full:!0,label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+i,name:"destination_ip",options:d,translateLabel:!0,type:"dropdown"})))];case"text":{const e=null!=n?n:o===E.IpV4ConnectionType.DHCP?"DHCP":"PPPoE";return[...t,c.a.createElement(B,{key:_},c.a.createElement(V,null,c.a.createElement(F.a,{color:"tertiary",size:"label"},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+i}))),c.a.createElement(F.a,null,e))]}default:return t}},[]),[s,e]);return Object(r.useEffect)(()=>{s===u.PortForwardInterface.BOTH&&"any"!==_&&o("destination_ip","any")},[_,s,o]),a?m.length===d.length&&c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"destination_ip",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP"})}),c.a.createElement(v.a,null,c.a.createElement(P.g,{flexWrap:"wrap",width:"100%"},m))):null});const H=Object(y.c)(f.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,$=Object(y.c)(x.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`,Y=Object(y.c)(_.a)`
  margin-top: 8px;
  padding: 0;
  font-size: 12px;
`;var z=()=>{const{values:e,errors:t,setFieldValue:a}=Object(L.e)(),o=Object(i.useSelector)(j.selectWanInterfaceOptions);Object(r.useEffect)(()=>{e.srcType===n.LIMITED&&e.src===n.ANY&&a("src","")},[a,e.src,e.srcType]);return c.a.createElement(D.a,null,c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"name",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME",fast:!0}))),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"enabled",alignWith:"toggle",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_ENABLE"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{type:"checkbox",name:"enabled",fast:!0}))),o.length>1&&c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"pfwd_interface",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE"})}),c.a.createElement(v.a,null,o.map(({label:e,value:t})=>c.a.createElement($,{value:u.PortForwardInterface[e],type:"togglebox",toggleboxType:"radio",name:"pfwd_interface",key:"pfwd-interface-"+t},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+e}))),c.a.createElement($,{value:u.PortForwardInterface.BOTH,type:"togglebox",toggleboxType:"radio",name:"pfwd_interface"},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_BOTH"})))),c.a.createElement(k,null),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"srcType",alignWith:"dropdown",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{type:"dropdown",name:"srcType",full:!0,translateOptions:!0,options:A}))),c.a.createElement(W.a,{in:e.srcType===n.LIMITED},c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"src",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{name:"src",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE",full:!0})))),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"dst_port",alignWith:"input",label:c.a.createElement(P.g,null,c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT"}),c.a.createElement(H,{message:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT_TOOLTIP"}),position:"bottom",width:140},c.a.createElement(w.W,{isActive:!0})))}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{full:!0,name:"dst_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT",fast:!0}),!t.dst_port&&e.dst_port&&e.dst_port!==e.fwd_port&&c.a.createElement(Y,{name:"port-forward-update-forward-port",size:"small",variant:"link",onClick:()=>{a("fwd_port",e.dst_port,!0)}},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_UPDATE_FORWARD_PORT"})))),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"fwd",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{full:!0,name:"fwd",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP",fast:!0}))),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"fwd_port",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{full:!0,name:"fwd_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"}))),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"proto",alignWith:"dropdown",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{full:!0,name:"proto",type:"dropdown",translateOptions:!0,options:h,fast:!0}))),c.a.createElement(G.a,null,c.a.createElement(C.a,{htmlFor:"log",alignWith:"toggle",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING"}),description:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING_DESCRIPTION"})}),c.a.createElement(v.a,{column:!0},c.a.createElement(x.Field,{type:"checkbox",name:"log",fast:!0}))))};const q=Object(o.a)(e=>{const t={...g,...e},a=t.src&&t.src!==n.ANY?n.LIMITED:n.ANY;return{...t,srcType:a}});t.a=e=>{const t=Object(i.useSelector)(E.selectIsIpsecInUse),a=Object(i.useDispatch)(),o=Object(i.useSelector)(d.x),{initialValues:p,onBack:N}=e,S=!!p._id,O=Object(r.useCallback)((e,{setSubmitting:t})=>{const{srcType:r,...c}=e,i=r===n.ANY?{...c,src:n.ANY}:c;return a(Object(u.savePortForwardRule)(i)).then(()=>N()).catch(()=>t(!1))},[a,N]),A=Object(m.n)({component:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON"},o?"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_EDIT",p._id?p.name:void 0),b=Object(r.useCallback)(()=>{a(Object(T.b)({name:p.name,onConfirm:()=>a(Object(u.removePortForwardRule)(p)).then(N())}))},[a,p,N]);return c.a.createElement(s.b,{onSubmit:O,title:A,initialValues:q(p),isEdit:S,isView:o,onEscClicked:N,validationSchema:I(t),showBack:!0,goBack:N,footerActiveOverride:!!(null==p?void 0:p._id),customFooterButtons:e=>(null==p?void 0:p._id)&&c.a.createElement(_.a,{disabled:e,type:"button",variant:"default",onClick:b},c.a.createElement(l.c,{id:"COMMON_ACTION_REMOVE"}))},c.a.createElement(z,null))}},2066:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(8),i=a(2),l=a(63),o=a(215),_=a(3),s=a(34),E=a(1961),d=a(1938),u=a(663),T=a(27),m=a(71),p=a(70),N=a(16);var S=a(30),O=a(105),A=a(2034),b=a(2003),R=S.a.object().shape({name:S.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),enabled:S.a.boolean(),gateway_device:S.a.string().when(["gateway_type"],{is:e=>e===E.StaticRouteGatewayType.SWITCH,then:S.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_L3_GATEWAY_DEVICE").required()}),"static-route_network":S.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK").required().test("networkSubnet",r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_NETWORK_SUBNET"}),A.a),"static-route_distance":S.a.string().matches(/^([0-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,r.a.createElement(i.c,{id:"COMMON_DESCRIPTION_NUMBER_BETWEEN",values:{min:0,max:255}})),"static-route_type":S.a.string(),"static-route_nexthop":S.a.string().when(["static-route_type"],{is:E.StaticRouteType.NEXT_HOP,then:S.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP").required().matches(Object(b.e)([O.h,O.k]),r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_IP"}))}),"static-route_interface":S.a.string()}),I=a(2054);const h=[s.NetworkPurpose.REMOTE_USER_VPN,s.NetworkPurpose.VLAN_ONLY,s.NetworkPurpose.WAN];var g=a(1739),f=a(1736),D=a(1914),G=a(1737),C=a(44),v=a(5),y=a(1947),L=a(62),w=a(46);const j=Object(v.c)(L.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  white-space: nowrap;
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var P=Object(i.f)(({interfaces:e,intl:t})=>{const{initialValues:{_id:a},values:{gateway_type:n,"static-route_nexthop":l,"static-route_type":o},errors:{gateway_device:s}}=Object(C.e)(),d=/^fe80:/i.test(l),u=Object(c.useSelector)(_.selectAdoptedL3Switches).map(e=>({value:e.mac,label:Object(w.c)(e)})),T=u.length>0,m=n===E.StaticRouteGatewayType.DEFAULT,p=!!a;return r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"enabled",alignWith:"toggleSmall",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_ENABLE"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{type:"checkbox",name:"enabled"}))),r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"name",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME"}))),T&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{disabled:p},r.a.createElement(D.a,{htmlFor:"gateway_type",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE"})}),r.a.createElement(G.a,null,r.a.createElement(j,{value:E.StaticRouteGatewayType.DEFAULT,type:"togglebox",toggleboxType:"radio",name:"gateway_type",disabled:p},r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE_GATEWAY"})),r.a.createElement(j,{value:E.StaticRouteGatewayType.SWITCH,type:"togglebox",toggleboxType:"radio",name:"gateway_type",disabled:p},r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE_SWITCH"})))),!m&&r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"gateway_device",alignWith:"dropdown",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_SELECT_GATEWAY"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{full:!0,type:"dropdown",name:"gateway_device",options:u,placeholder:t.formatMessage({id:"COMMON_CHOOSE_AN_OPTION"})}),s&&r.a.createElement(L.ValidationMessage,{visible:!0},s)))),m&&r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"static-route_distance",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DISTANCE"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{full:!0,name:"static-route_distance",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DISTANCE_PLACEHOLDER"}))),r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"static-route_network",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{full:!0,name:"static-route_network",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK_PLACEHOLDER"}))),r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"static-route_type",alignWith:"dropdown",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_ROUTE_TYPE"})}),r.a.createElement(G.a,null,r.a.createElement(j,{value:E.StaticRouteType.NEXT_HOP,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP"})),r.a.createElement(j,{value:E.StaticRouteType.INTERFACE,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_INTERFACE"})),r.a.createElement(j,{value:E.StaticRouteType.BLACK_HOLE,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_BLACK_HOLE"})))),r.a.createElement(y.a,{in:o===E.StaticRouteType.NEXT_HOP||o===E.StaticRouteType.INTERFACE||d,wrap:!0},o===E.StaticRouteType.NEXT_HOP&&r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"static-route_nexthop",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{full:!0,name:"static-route_nexthop",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP_PLACEHOLDER"}))),(o===E.StaticRouteType.INTERFACE||d)&&r.a.createElement(f.a,null,r.a.createElement(D.a,{htmlFor:"static-route_interface",alignWith:"dropdown",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_INTERFACE"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(L.Field,{full:!0,type:"dropdown",name:"static-route_interface",options:e})))))});const W=Object(l.a)((e,t)=>({...{name:"",enabled:!0,gateway_device:"",gateway_type:E.StaticRouteGatewayType.DEFAULT,"static-route_network":"","static-route_distance":"","static-route_type":E.StaticRouteType.NEXT_HOP,"static-route_nexthop":"","static-route_interface":t.length?t[0].value:""},...e}));t.a=e=>{const{initialValues:t,onBack:a}=e,l=Object(c.useSelector)(s.selectNetworksData),S=Object(c.useSelector)(_.selectGatewayMac),O=Object(c.useDispatch)(),A=Object(n.useContext)(m.l),b=Object(n.useCallback)((e,{setSubmitting:t})=>{const n={...e,"static-route_nexthop":e["static-route_type"]===E.StaticRouteType.NEXT_HOP?e["static-route_nexthop"]:void 0,"static-route_interface":e["static-route_type"]===E.StaticRouteType.INTERFACE?e["static-route_interface"]:void 0};return n.gateway_type===E.StaticRouteGatewayType.SWITCH&&delete n["static-route_distance"],n.gateway_type===E.StaticRouteGatewayType.DEFAULT&&(n.gateway_device=S),O(Object(E.saveRouting)({...n,type:"static-route"})).then(()=>{O(Object(T.c)({icon:N.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),a()}).catch(e=>{O(Object(T.c)({errorMessage:e.msg,errorValues:e,icon:N.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)})},[O,a]),g=(e=>[...Object(I.b)(e).map(e=>({label:e,value:e})),...(e||[]).filter(e=>!h.includes(e.purpose)).map(({_id:e,name:t})=>({label:t,value:e}))])(l),f=!!t._id,D=Object(p.n)({component:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES"},A?"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_EDIT",t._id?t.name:void 0),G=Object(n.useCallback)(()=>{O(Object(u.b)({name:t.name,onConfirm:()=>O(Object(E.removeRouting)(t)).then(a())}))},[O,t,a]);return r.a.createElement(d.b,{onSubmit:b,title:D,initialValues:W(t,g),isEdit:f,isView:A,onEscClicked:a,validationSchema:R,showBack:!0,goBack:a,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&r.a.createElement(o.a,{disabled:e,type:"button",variant:"default",onClick:G},r.a.createElement(i.c,{id:"COMMON_ACTION_REMOVE"}))},r.a.createElement(P,{interfaces:g}))}},2067:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(8),i=a(2),l=a(63),o=a(215),_=a(2002),s=a(34),E=a(1938),d=a(663),u=a(27),T=a(71),m=a(70),p=a(16),N=a(30),S=N.a.object().shape({interface:N.a.string(),service:N.a.string(),host_name:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),login:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),x_password:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),server:N.a.string()}),O={AFRAID:"afraid",DNS_PARK:"dnspark",DSL_REPORTS:"dslreports",DYN_DNS:"dyndns",EASY_DNS:"easydns",NAME_CHEAP:"namecheap",NO_IP:"noip",SITELUTIONS:"sitelutions",ZONE_EDIT:"zoneedit"},A=a(1739),b=a(1736),R=a(1914),I=a(1737),h=a(3),g=a(62);var f=()=>{const e=Object(c.useSelector)(h.selectWanInterfaceOptions),t=Object.values(O).map(e=>({value:e,label:e}));return r.a.createElement(A.a,null,r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"interface",alignWith:"select",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_INTERFACE"})}),r.a.createElement(I.a,{column:!0},r.a.createElement(g.Field,{full:!0,type:"dropdown",name:"interface",options:e}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"service",alignWith:"select",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVICE"})}),r.a.createElement(I.a,{column:!0},r.a.createElement(g.Field,{full:!0,type:"dropdown",name:"service",options:t}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"host_name",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"})}),r.a.createElement(I.a,{column:!0},r.a.createElement(g.Field,{full:!0,name:"host_name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"login",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"})}),r.a.createElement(I.a,{column:!0},r.a.createElement(g.Field,{full:!0,name:"login",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"x_password",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"})}),r.a.createElement(I.a,{column:!0},r.a.createElement(g.Field,{full:!0,passwordToggle:!0,type:"password",name:"x_password",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"server",alignWith:"input",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"})}),r.a.createElement(I.a,{column:!0},r.a.createElement(g.Field,{full:!0,name:"server",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"}))))};const D=Object(l.a)(e=>({interface:s.NetworkPurpose.WAN,service:O.AFRAID,host_name:"",login:"",x_password:"",server:"",...e}));t.a=e=>{const{initialValues:t,onBack:a}=e,l=Object(c.useDispatch)(),s=Object(n.useContext)(T.l),N=Object(n.useCallback)((e,{setSubmitting:t})=>l(Object(_.saveDynamicDns)(e)).then(()=>{l(Object(u.c)({icon:p.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),a()}).catch(e=>{l(Object(u.c)({errorMessage:e.msg,errorValues:e,icon:p.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)}),[l,a]),O=!!t._id,A=Object(m.n)({component:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"},s?"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_EDIT",t._id?t.host_name:void 0),b=Object(n.useCallback)(()=>{l(Object(d.b)({name:t.service,onConfirm:()=>l(Object(_.removeDynamicDns)(t)).then(a())}))},[l,t,a]);return r.a.createElement(E.b,{onSubmit:N,title:A,initialValues:D(t),isEdit:O,isView:s,onEscClicked:a,validationSchema:S,showBack:!0,goBack:a,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&r.a.createElement(o.a,{disabled:e,type:"button",variant:"default",onClick:b},r.a.createElement(i.c,{id:"COMMON_ACTION_REMOVE"}))},r.a.createElement(f,null))}},2079:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.Kbps="1",e.Mbps="1000"}(n||(n={}))},2120:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return _})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l}));var n=a(2079),r={name:"",qos_rate_max_down_toggle:!1,qos_rate_max_down_unit:n.a.Kbps,qos_rate_max_down_value:"",qos_rate_max_up_toggle:!1,qos_rate_max_up_unit:n.a.Kbps,qos_rate_max_up_value:""},c=a(30);const i=1e5,l=2,o=({download:e,upload:t})=>{const a=e?"qos_rate_max_down":"qos_rate_max_up",r=e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_DOWNLOAD":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_UPLOAD";return c.a.number().label(r).when(a+"_unit",{is:e=>e===n.a.Kbps,then:c.a.number().max(i).min(l)}).when(a+"_unit",{is:e=>e===n.a.Mbps,then:c.a.number().max(i/1e3).min(l/1e3)})};var _=c.a.object().shape({name:c.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_NAME").required(),qos_rate_max_down_toggle:c.a.boolean().required(),qos_rate_max_down_unit:c.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_DOWNLOAD").oneOf(Object.values(n.a)).required(),qos_rate_max_down_value:o({download:!0}),qos_rate_max_up_toggle:c.a.boolean().required(),qos_rate_max_up_unit:c.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_UPLOAD").oneOf(Object.values(n.a)).required(),qos_rate_max_up_value:o({upload:!0})})},2133:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=a(2),i=a(61),l=a(2057);const o=()=>{const e=(e,t)=>e+(e&&t?":":"")+t,t=e=>e&&"any"!==e?e:"*";return[{compare:Object(i.a)(({name:e})=>e.toLowerCase()),id:"port-fwd-name",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:80},{compare:Object(i.a)(({src:e})=>t(e)),id:"port-fwd-src",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_FROM"}),renderCell:({src:e})=>t(e),minWidth:80},{compare:Object(i.a)(({dst_port:e})=>e),id:"port-fwd-dst",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_PORT"}),renderCell:({dst_port:e})=>e,minWidth:70},{compare:Object(i.a)((t,a)=>e(t,a)),id:"port-fwd-fwd",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_DEST"}),renderCell:({fwd:t,fwd_port:a})=>e(t,a),minWidth:100},{compare:Object(i.a)(({enabled:e})=>e),id:"port-fwd-enabled",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_ENABLED"}),renderCell:({enabled:e})=>Object(l.a)(e),minWidth:100}]}},2134:function(e,t){},2135:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),c=a(2),i=a(102),l=a(61),o=a(2057),_=a(1961);const s=(e,t)=>{const a=Object(l.b)(e),n=(e,a)=>{if(a===_.StaticRouteType.INTERFACE){const a=t&&t.find(({_id:t})=>t===e);return a?a.name:e}return null},s=(e,t)=>t===_.StaticRouteType.NEXT_HOP?e:null,E=e=>{switch(e){case _.StaticRouteType.BLACK_HOLE:return"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_BLACK_HOLE";case _.StaticRouteType.INTERFACE:return"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_INTERFACE";case _.StaticRouteType.NEXT_HOP:return"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NEXT_HOP";default:return"COMMON_UNKNOWN"}};return[{compare:Object(l.a)(({name:e})=>e.toLowerCase()),id:"static-route-name",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:100},{compare:Object(l.a)(({enabled:e})=>e),id:"static-route-enabled",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_ENABLED"}),renderCell:({enabled:e})=>Object(o.a)(e),minWidth:100},{compare:Object(l.a)(({network:e})=>Object(i.toLong)(e)),id:"static-route-network",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NETWORK"}),renderCell:({"static-route_network":e})=>e,minWidth:110},{compare:a((e,{"static-route_type":t})=>E(t)),id:"static-route-type",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_TYPE"}),renderCell:({"static-route_type":e})=>r.a.createElement(c.c,{id:E(e)}),minWidth:80},{compare:Object(l.a)(({"static-route_interface":e,"static-route_type":t})=>n(e,t)),id:"static-route-interface",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_INTERFACE"}),renderCell:({"static-route_interface":e,"static-route_type":t})=>n(e,t),minWidth:100},{compare:Object(l.a)(({"static-route_nexthop":e,"static-route_type":t})=>s(e,t)),id:"static-route-next-hop",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NEXT_HOP"}),renderCell:({"static-route_nexthop":e,"static-route_type":t})=>s(e,t),minWidth:100},{compare:Object(l.a)(({"static-route_distance":e})=>e),id:"static-route-distance",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_DISTANCE"}),renderCell:({"static-route_distance":e})=>e,minWidth:100}]}},2136:function(e,t){},2137:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),c=a(2),i=a(61);const l=[{compare:Object(i.a)(({service:e})=>e.toLowerCase()),id:"dynamic-dns-service",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_TABLE_SERVICE"}),renderCell:({service:e})=>e,sortable:!0,minWidth:100,maxWidth:150},{compare:Object(i.a)(({host_name:e})=>e.toLowerCase()),id:"dynamic-dns-hostname",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_TABLE_HOSTNAME"}),renderCell:({host_name:e})=>e,sortable:!0,minWidth:100,maxWidth:150},{compare:Object(i.a)(({server:e})=>e.toLowerCase()),id:"dynamic-dns-server",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_TABLE_SERVER"}),renderCell:({server:e})=>e,sortable:!0,minWidth:100}]},2138:function(e,t){},2164:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="radiusBubbleContainer"},2165:function(e,t,a){"use strict";a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),c=a(5),i=a(21);const l=Object(c.c)(i.a)`
  margin: ${({theme:e})=>e.space[3]}px 0;
`,o=Object(c.c)("div")`
  margin: ${({theme:e})=>e.space[2]}px 0;
`,_=e=>`${e.ip} : ${e.port}`,s=e=>r.a.createElement(o,{key:`${e.ip}${e.port}`},_(e)),E=({children:e})=>r.a.createElement(l,{flexDirection:"column"},e),d=({auth_servers:e,attr_no_delete:t},a)=>t?r.a.createElement("span",null,a):e&&e.length>0?r.a.createElement(E,null,e.map(s)):"-",u=({accounting_enabled:e,acct_servers:t,attr_no_delete:a})=>{if(a)return"-";return t&&t.length>0&&e?r.a.createElement(E,null,t.map(s)):"-"}},2191:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return _})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return T}));var n=a(1156),r=a(2120),c=a(2079);const i=({download:e,upload:t})=>{if(e)return"qos_rate_max_down";if(t)return"qos_rate_max_up";throw new Error("No limit bandwidth field specified (download/upload) in Bandwidth Profile form getter")},l=(e,{download:t,upload:a})=>e[i({download:t,upload:a})]>-1,o=(e,{download:t,upload:a})=>e[i({download:t,upload:a})]%1e3?c.a.Kbps:c.a.Mbps,_=(e,{download:t,upload:a})=>{const n=i({download:t,upload:a});return e[n]>-1?e[n]%1e3?e[n]:e[n]/1e3:r.a[n+"_value"]},s=(e,{download:t,upload:a})=>{const r=i({download:t,upload:a});return Object(n.a)(e[r+"_value"])?e[r+"_value"]*Number(e[r+"_unit"]):-1};var E=a(0),d=a.n(E),u=a(2);const T=({userGroup:e,download:t,upload:a})=>{const n=i({download:t,upload:a});return e[n]<0?d.a.createElement(u.c,{id:"COMMON_WORD_UNLIMITED"}):d.a.createElement(u.c,{id:"COMMON_UNIT_BPS",values:{prefix:`${e[n]%1e3?e[n]:e[n]/1e3} ${e[n]%1e3?"K":"M"}`}})}},2472:function(e,t,a){"use strict";a(2065),a(1785);var n=a(2133);a.d(t,"getPortForwardTableColumns",(function(){return n.a}));a(2134)},2473:function(e,t,a){"use strict";a(2066),a(1786);var n=a(2135);a.d(t,"getStaticRoutesTableColumns",(function(){return n.a}));a(2136)},2474:function(e,t,a){"use strict";a(2067),a(1787);var n=a(2137);a.d(t,"dynamicDnsTableColumns",(function(){return n.a}));a(2138)},2475:function(e,t,a){"use strict";a.d(t,"b",(function(){return _})),a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),c=a(2),i=a(105),l=a(61),o=a(30);const _=[{compare:Object(l.a)(({name:e})=>e),id:"network-isolation-table-name",label:r.a.createElement(c.c,{id:"SETTINGS_COMMON_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:100,maxWidth:150},{compare:Object(l.a)(({vlan:e})=>e),label:r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_LABEL_VLAN"}),id:"network-isolation-table-vlan-id",renderCell:({vlan:e})=>e,sortable:!0,minWidth:100,maxWidth:200},{compare:Object(l.a)(({igmp_snooping:e})=>e),label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_IGMP_SNOOPING_HEADER"}),id:"network-isolation-table-igmp-snooping",renderCell:({igmp_snooping:e})=>r.a.createElement(c.c,{id:e?"COMMON_ENABLED":"COMMON_DISABLED"}),sortable:!0,minWidth:130,maxWidth:200},{compare:Object(l.a)(({dhcpguard_enabled:e})=>e),label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_DHCP_GUARDING_LABEL"}),id:"network-isolation-table-dhcp-guarding",renderCell:({dhcpguard_enabled:e})=>r.a.createElement(c.c,{id:e?"COMMON_ENABLED":"COMMON_DISABLED"}),sortable:!0,minWidth:130}],s=(e,t)=>Object(o.f)(t).clone().notOneOf(e,({value:e})=>r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_VLAN_IN_USE",values:{vlan:e}})).required(),E=(e,t=!1)=>{const a=o.a.string().matches(i.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}));return o.a.string().when("dhcpguard_enabled",{is:!0,then:t?a.required(r.a.createElement(c.c,{id:"COMMON_VALIDATION_EMPTY",values:{name:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_FEATURES_NETWORK_ISOLATION_TRUSTED_DHCP_SERVER_LABEL",values:{number:e}})}})):a})},d=(e,t)=>o.a.object().shape({dhcpguard_enabled:o.a.boolean(),igmp_snooping:o.a.boolean(),name:o.e,vlan:s(e,t),dhcpd_ip_1:E(1,!0),dhcpd_ip_2:E(2),dhcpd_ip_3:E(3)})},2476:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return E}));var n=a(0),r=a.n(n),c=a(2),i=a(2004),l=a(2061),o=a(2164),_=a(2165);const s=e=>[{id:"name",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_NAME"}),sortable:!0,renderCell:({name:e})=>e,minWidth:100,maxWidth:150},{id:"auth_servers",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_AUTH_SERVERS"}),renderCell:t=>{const{auth_servers:a,attr_no_delete:n}=t;return n?e:r.a.createElement(l.b,{names:a.map(_.c),messageId:"SETTINGS_ADVANCED_RADIUS_TABLE_AUTH_SERVERS_COUNT",rootSelector:"#"+o.a})},minWidth:l.a,maxWidth:200},{id:"acct_servers",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_ACCT_SERVERS"}),renderCell:e=>Object(_.a)(e),minWidth:170}],E=[{id:"name",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_TABLE_LABEL_NAME"}),sortable:!0,renderCell:({name:e})=>e},{id:"vlan",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_TABLE_LABEL_VLAN"}),sortable:!0,renderCell:({vlan:e})=>e},{id:"tunnel_type",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_TABLE_LABEL_TUNNEL_TYPE"}),sortable:!0,renderCell:({tunnel_type:e})=>{const t=i.tunnelTypeOptions[e||0];return r.a.createElement(c.c,{id:t.label,values:t.values})}},{id:"tunnel_medium_type",label:r.a.createElement(c.c,{id:"SETTINGS_ADVANCED_RADIUS_USERS_TABLE_LABEL_TUNNEL_MEDIUM_TYPE"}),sortable:!0,renderCell:({tunnel_medium_type:e})=>{const t=i.tunnelMediumTypeOptions[e||0];return r.a.createElement(c.c,{id:t.label,values:t.values})}}]}}]);