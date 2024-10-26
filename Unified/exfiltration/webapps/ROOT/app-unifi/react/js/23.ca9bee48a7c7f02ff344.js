(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[23,39,42,47],{1785:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),c=a(8),l=a(3),o=a(34),s=a(1949),E=a(70),_=a(6),d=a(2065);const T={};t.default=()=>{const{id:e}=Object(i.m)(),t=Object(c.useSelector)(s.selectPortForwardData).find(t=>t._id===e),a=Object(E.h)();return Object(E.f)([Object(s.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:_.a.CACHE}}),Object(l.fetchSiteGateway)(),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:_.a.CACHE}})],r.a.createElement(d.a,{initialValues:t||T,onBack:a}))}},1786:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),c=a(8),l=a(1961),o=a(34),s=a(70),E=a(6),_=a(2066);const d={};t.default=()=>{const{id:e}=Object(i.m)(),t=Object(c.useSelector)(l.selectRoutingData).find(t=>t._id===e),a=Object(s.h)();return Object(s.f)([Object(l.fetchRouting)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}})],r.a.createElement(_.a,{initialValues:t||d,onBack:a}))}},1787:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),c=a(8),l=a(2002),o=a(70),s=a(6),E=a(2067);const _={};t.default=()=>{const{id:e}=Object(i.m)(),t=Object(c.useSelector)(l.selectDynamicDnsData).find(t=>t._id===e),a=Object(o.h)();return Object(o.f)([Object(l.fetchDynamicDns)({crudCacheStrategy:{type:s.a.CACHE}})],r.a.createElement(E.a,{initialValues:t||_,onBack:a}))}},1788:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(70),c=a(6),l=a(50),o=a(83),s=a(1949),E=a(1961),_=a(1951),d=a(2002),T=a(34),u=a(1937),m=a(71),p=a(8),N=a(36),O=a(1851),S=a(2851),A=a(2657),b=a(2),R=a(5),h=a(3),g=a(18),I=a(1938),f=a(1940),G=a(455),D=a(791),C=a(2472),y=a(2473),v=a(2474);const w=Object(R.c)(m.n)`
  min-width: 480px;
`,j=R.a`
  padding-bottom: 0;
  width: 100%;
`,P=Object(R.c)("div")`
  padding: 0 ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`;var W=Object(b.f)(({intl:e,onBack:t})=>{const a=Object(p.useDispatch)(),c=Object(p.useSelector)(s.selectPortForwardData),l=Object(p.useSelector)(E.selectRoutingData),o=Object(p.useSelector)(d.selectDynamicDnsData),_=Object(p.useSelector)(T.selectNetworksData),R=Object(p.useSelector)(h.selectHasEduAp),W=Object(i.i)("advanced/gateway"),x=Object(N.k)(),{[D.a.SETTINGS_PORT_FWD]:L={sortBy:"port-fwd-name",isAscending:!0},[D.a.SETTINGS_STATIC_ROUTES]:F={sortBy:"static-route-name",isAscending:!0},[D.a.SETTINGS_DYNAMIC_DNS]:V={sortBy:"dynamic-dns-service",isAscending:!0}}=Object(p.useSelector)(g.L),M=Object(n.useMemo)(()=>{const t=(e,t,n)=>{a(Object(g.S)(e,{sortBy:t.id,isAscending:n}))};return[{name:"open-port-forwarding-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING",buttonText:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON",route:"portfwd/form",children:c.length?r.a.createElement(O.a,{idField:"_id",onSort:(e,a)=>t(D.a.SETTINGS_PORT_FWD,e,a),initialSortBy:L.sortBy,initiallySortAscending:L.isAscending,columns:Object(C.getPortForwardTableColumns)(),items:c,disableColumnFilters:!0,onRowClick:({_id:e})=>x.push(`${W}/portfwd/form/${e}`),disableTextPointer:!0,disableSelection:!0}):null},{name:"open-static-routes-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES",buttonText:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_BUTTON",route:"static-route/form",children:l.length?r.a.createElement(O.a,{idField:"_id",onSort:(e,a)=>t(D.a.SETTINGS_STATIC_ROUTES,e,a),initialSortBy:F.sortBy,initiallySortAscending:F.isAscending,columns:Object(y.getStaticRoutesTableColumns)(e,_),items:l,onRowClick:({_id:e})=>x.push(`${W}/static-route/form/${e}`),disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0}):null},{name:"open-dynamic-dns-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS",buttonText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_BUTTON",route:"dyndns/form",children:o.length?r.a.createElement(O.a,{idField:"_id",onSort:(e,a)=>t(D.a.SETTINGS_DYNAMIC_DNS,e,a),initialSortBy:V.sortBy,initiallySortAscending:V.isAscending,columns:v.dynamicDnsTableColumns,items:o,onRowClick:({_id:e})=>x.push(`${W}/dyndns/form/${e}`),disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0}):null},{name:"open-dhcp-form",title:"SETTINGS_GATEWAY_SUB_NAME_DHCP",clickable:!0,route:"dhcp/form"},{name:"open-mdns-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS",clickable:!0,route:"mdns/form"},R&&{name:"open-sip-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_SIP",clickable:!0,route:"sip/form"},{name:"open-upnp-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP",clickable:!0,route:"upnp/form"},{name:"open-snmp-form",title:"SETTINGS_INTERNET_GENERAL_ADV_GW_SNMP",clickable:!0,route:"snmp/form"}].filter(e=>!!e)},[c,L.sortBy,L.isAscending,a,l,F.sortBy,F.isAscending,_,e,o,V.sortBy,V.isAscending,R,x,W]),k=e=>e?r.a.createElement(b.c,{id:"success"===e?"COMMON_ENABLED":"SETTINGS_COMMON_NOT_ENABLED"}):null;return r.a.createElement(m.g,{flexDirection:"column",width:"100%",height:"100%"},r.a.createElement(I.a,{title:{component:r.a.createElement(b.c,{id:"SETTINGS_INTERNET_GENERAL_WAN_GW_SETTINGS_HEADING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_MESSAGE"},onEscClicked:t,hideClose:!0,showBack:!0,goBack:t}),r.a.createElement(f.a,null,r.a.createElement(P,null,M.map(({clickable:e,title:t,status:a,name:n,route:i,children:c,buttonText:l})=>{const o=e?S.a:A.a;return r.a.createElement(w,{padding:"none",key:n},r.a.createElement(o,{headerTitle:r.a.createElement(u.b,{label:r.a.createElement(b.c,{id:t}),type:a?u.c.STATUS:u.c.BASIC,status:a}),headerButton:r.a.createElement(G.a,null,l?r.a.createElement(u.g,{name:n,onClick:()=>i&&x.push(`${W}/${i}`)},r.a.createElement(b.c,{id:l})):r.a.createElement(u.a,null,k(a))),headerContentClassName:j,onClick:e?()=>i&&x.push(`${W}/${i}`):void 0},c))}))))});var x=()=>{const e=Object(i.h)();return r.a.createElement(W,{onBack:e})};t.default=()=>Object(i.f)([Object(l.fetchSettings)({type:c.a.CACHE}),Object(o.b)(void 0,{crudCacheStrategy:{type:c.a.CACHE}}),Object(s.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:c.a.CACHE}}),Object(E.fetchRouting)(void 0,{crudCacheStrategy:{type:c.a.CACHE}}),Object(_.fetchDhcpOptions)({crudCacheStrategy:{type:c.a.CACHE}}),Object(d.fetchDynamicDns)({crudCacheStrategy:{type:c.a.CACHE}}),Object(T.fetchNetworks)(void 0,{crudCacheStrategy:{type:c.a.CACHE}})],r.a.createElement(m.j,null,r.a.createElement(u.e,{scrollable:!0,noPadding:!0},r.a.createElement(x,null))))},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return _})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return T})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return F}));var n=a(0),r=a.n(n),i=a(5),c=a(648),l=a(1136),o=a(208);const s=Object(i.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,E=(Object(i.c)(c.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(i.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),_=Object(i.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>r.a.createElement(E,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),T=e=>r.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1851),m=a(375);const p=Object(i.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,N=e=>i.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(m.b)(({theme:e,...t})=>r.a.createElement(p,Object.assign({headerRowClassName:N(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(1934),S=a(529),A=a(1743),b=a(2),R=a(30),h=a(15),g=a(2846),I=a(44),f=a(71),G=a(62);const D=Object(i.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(i.c)(f.c)`
  > * {
    vertical-align: middle;
  }
`,y=Object(i.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,v=Object(i.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,w=Object(i.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,j=Object(i.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,P=Object(i.c)(y,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,W=Object(i.c)(f.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,x=Object(i.c)(f.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,L=Object(i.c)("div")`
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
`;var F=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:i,onRemoveItem:c,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:E=!1,max:d,useWindowTable:T=!1,addButtonText:m="COMMON_ACTION_ADD",invalid:p,...N}){const O=Object(n.useContext)(f.l),[F,V]=Object(n.useState)(!0),M=Object(n.useCallback)(t=>!t.disableRemove&&r.a.createElement(_,null,r.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{V(!1),c(t),await Promise.resolve(),V(!0)}},r.a.createElement(b.c,{id:"COMMON_ACTION_REMOVE"}))),[e,V,c]),k=Object(n.useMemo)(()=>T?g.a:u.a,[T]);return r.a.createElement(I.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>E?R.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:E,handleReset:_,setTouched:T})=>r.a.createElement(r.a.Fragment,null,t.map((a,c)=>r.a.createElement(D,{inline:a.inline,isLast:c===t.length-1,key:a.name},r.a.createElement(y,{flexDirection:"column",width:"100%"},r.a.createElement(G.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:p,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!O&&i&&c===t.length-1&&r.a.createElement(v,null,r.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),V(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),r=await T(a,!0);t.find(e=>r[e.name])||i(n),V(!0)},Icon:h.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},r.a.createElement(b.c,{id:m}))))),n.editActive?r.a.createElement(r.a.Fragment,null,n[e].map((n,i)=>r.a.createElement(j,{key:n.id,width:"100%"},N.columns.map((n,c)=>t[c]?r.a.createElement(P,{key:n.id,isLast:c===N.columns.length-1,flexDirection:"column",flex:"1 1 50%"},r.a.createElement(G.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${i}][${n.id}]`,type:t[c].type,fast:!0},"dropdown"!==t[c].type?{}:{options:t[c].options,translateLabel:!0,translateOptions:t[c].translateOptions,translatePlaceholder:!0,type:t[c].type,validated:t[c].validated}))):null))),r.a.createElement(W,{justifyContent:"flex-end",width:"100%"},r.a.createElement(x,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{_(),s("editActive",!1)}},r.a.createElement(b.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(f.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:E,disabled:Object(S.a)(Object(A.a)(n,"editActive"),Object(A.a)(o,"editActive"))},r.a.createElement(b.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&r.a.createElement(D,null,r.a.createElement(w,null,r.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{_(),s("editActive",!0)},Icon:h.ub},r.a.createElement(b.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&F&&r.a.createElement(L,null,r.a.createElement(k,{columns:N.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:c?M:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),c=a(2),l=a(1946),o=a.n(l),s=a(1741),E=a(520),_=a(521);const d=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),T=Object(_.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),m=Object(n.useCallback)(e=>(e={},t={})=>T(e,t)&&u(e,t),[T,u]);return!!e&&r.a.createElement(o.a,{when:m(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(s.a,{actions:[{type:"button",text:r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:E.b,title:r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},r.a.createElement(d,null,r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return I})),a.d(t,"c",(function(){return f}));var n=a(0),r=a.n(n),i=a(5),c=a(643),l=a(32),o=a(1932),s=a(8),E=a(15),_=a(45),d=a(17),T=a(189),u=a(41);const m=Object(i.c)(T.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var p=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return r.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(E.vb,{color:_.a["blue-3"]}))},N=a(1933),O=a(71),S=a(227);const A=Object(i.c)(O.c)`
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
`,b=Object(i.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,R=Object(i.c)(E.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var h,g=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(S.a),i=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return r.a.createElement(A,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:i},r.a.createElement(b,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),r.a.createElement(R,{color:_.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(h||(h={}));const I=Object(i.c)(O.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,f=Object(i.c)(O.g)`
  * {
    line-height: 1.4 !important;
  }
`,G=Object(i.c)(c.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:i,video:c,online:s})=>{let E;switch(t){default:case h.BASIC:E=e;break;case h.CONFIGURED:E=r.a.createElement(f,{alignItems:"center"},e,!!n&&r.a.createElement(o.a,{section:n}),!!c&&s&&r.a.createElement(p,{video:c}));break;case h.STATUS:E=r.a.createElement(f,{alignItems:"center"},r.a.createElement(G,{variant:i}),r.a.createElement(I,{flex:"1",flexDirection:"column"},e,a&&r.a.createElement(l.a,null,a)));break;case h.UNCONFIGURED:E=r.a.createElement(f,{alignItems:"center"},!!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{section:n}),r.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(l.a,null,a))),!!c&&s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{video:c}),r.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(l.a,null,a))),!!c&&!s&&r.a.createElement(f,{alignItems:"center"},e))}return E}},1932:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),c=a(8),l=a(15),o=a(45),s=a(1936),E=a(189);const _=Object(i.c)(E.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return r.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),c=a(8),l=a(15),o=a(45),s=a(1936),E=a(71),_=a(43);const d=Object(i.c)(E.c)`
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
`,T=Object(i.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,u=Object(i.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),a=Object(c.useSelector)(_.i),i=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return r.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:i},r.a.createElement(T,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),r.a.createElement(u,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return E.d})),a.d(t,"c",(function(){return E.a}));var n=a(0),r=a.n(n),i=a(5),c=a(15),l=a(71);const o=Object(i.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>r.a.createElement(o,Object.assign({alignItems:"center"},t),e,r.a.createElement(c.g,null)),E=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(17),r=a(41);const i=e=>Object(n.g)({modalType:r.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var r=a(0),i=a.n(r),c=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:r=6,...l})=>{const o=a?12:r,s=a?0:n;return i.a.createElement("div",Object.assign({className:Object(c.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>i.a.createElement("div",{className:Object(c.b)("col-"+a,"offset-"+t)},e),E=a(2),_=a(666),d=a.n(_),T=a(71),u=a(1964),m=a.n(u),p=a(140),N=a.n(p),O=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const S=N.a.bind(m.a);var A=({className:e=null,status:t=o.NEUTRAL,...a})=>i.a.createElement(O.a,Object.assign({},a,{className:S("ubntStatusText","ubntStatusText--"+t,e)})),b=a(254),R=a(1944);const h=Object(c.c)(T.g)`
  border: 1px solid ${b.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,g=Object(c.c)(A)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var I=({state:e,className:t=null,...a})=>i.a.createElement(h,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),i.a.createElement(g,{message:R.b[e],status:o.WARNING})),f=a(322),G=a(82),D=a(8),C=a(45),y=a(70),v=a(20);const w={BORDER_WIDTH:2},j={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},P=({type:e,size:t,width:a,height:n})=>{switch(e){case f.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:r,TOP:i}=j;return{top:i,left:e,padding:`${n}px ${r}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function W({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:i,width:l,height:o}){const s=Object(D.useSelector)(f.selectHighlight),[E,_]=Object(y.c)(0),[d,T]=Object(y.c)(!1),u=Object(r.useRef)(null),m=Object(r.useMemo)(()=>(({color:e,show:t,style:a})=>Object(c.a)({"&::before":{border:`${w.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...P({type:e,size:i,width:l,height:o}),...a}}),[d,e,a,i,l,o]);return Object(r.useEffect)(()=>{if(Number.isFinite(n)&&n>E)_(E+1);else if(u.current&&t===s.id&&s.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:r,top:i}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:r,top:i}=t.current.getBoundingClientRect();switch(a){case f.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=j,c=i+Object(v.a)(n,"top",a),l=c+r+Object(v.a)(n,"paddingBottom",e)+Object(v.a)(n,"paddingTop",t)+2*w.BORDER_WIDTH;return{bottom:l,height:l-c,top:c}}}})({height:o,highlightRef:u,type:e,highlightStyle:a}),{bottom:c,height:l,top:s}=n.getBoundingClientRect(),E=t>c,_=r>l,d=15;i<s||_?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+i-d}):E&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-c+d})}T(!0)}},[o,E]),Object(r.useEffect)(()=>{d||s.id!==t||_(e=>e+1),d&&s.id!==t&&T(!1)},[s.id,d]),{highlightClassName:m,highlightRef:u}}const x=Object(c.c)(d.a)`
  color: ${G.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,L=Object(c.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,F=c.a`
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
`;var V=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:r={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:_=null,offset:d=0,size:T=5,useHtml:u=!1})=>{const{highlightClassName:m,highlightRef:p}=W({type:f.SearchHighlightType.FIELD,forId:_,highlightStyle:s,highlightDelay:o,size:T}),N=!(!n&&!a),O={["col-"+T]:!0,["offset-"+d]:d>0},S=u?E.b:E.c;return i.a.createElement("div",{className:Object(c.b)(O,F,m),ref:p},i.a.createElement("div",{className:"mb-1"},i.a.createElement(L,{className:"settingsGridLabel",htmlFor:_,primary:!0},l?e:i.a.createElement(E.c,{id:e})),t&&i.a.createElement(I,{state:t})),N&&i.a.createElement("div",null,i.a.createElement(x,{className:"settingsGridDescription",htmlFor:_,secondary:!0},n?i.a.createElement(S,{id:n,values:r}):a)))};const M=c.a`
  max-width: 960px;
`,k=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:r=8,noWidthLimit:l=!1})=>{const o=n?4:r;return i.a.createElement("div",{className:Object(c.b)("row","mt-"+o,l?null:M,t),ref:a},e)};var U=i.a.forwardRef((e,t)=>i.a.createElement(k,Object.assign({forwardedRef:t},e)));var H=e=>i.a.createElement("div",{className:"mt-2 mb-6"},i.a.createElement(O.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const B=Object(c.c)("div")`
  flex: 0 1 480px;
`,$=Object(c.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:r=null,section:l=null})=>{const o=b.b.sectionColors.common;return i.a.createElement(U,{className:t,marginTop:0},i.a.createElement(B,null,i.a.createElement($,{className:Object(c.b)("mt-8","type-larger"),style:{color:o}},i.a.createElement(E.c,{id:e})),a&&i.a.createElement(O.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(c.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,X=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>i.a.createElement(z,{className:Object(c.b)("container","px-8",t),noDivider:n},i.a.createElement("div",{className:Object(c.b)({"pb-8":!a})},e));X.Content=l,X.Icon=s,X.Label=V,X.Row=U,X.SectionHeader=H,X.Subheader=Y;var q=a(284);const K=Object(c.c)(q.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Q=e=>i.a.createElement(K,Object.assign({},e)),J=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(D.useSelector)(Z.C);return e>0?i.a.createElement(ee.a,{alignItems:"center"},i.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",i.a.createElement(E.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):i.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return x})),a.d(t,"a",(function(){return C}));var n=a(0),r=a.n(n),i=a(5),c=a(2),l=a(44),o=a(2847),s=a(2658),E=a(1929),_=a(783),d=a(71),T=a(1940),u=a(15),m=a(32),p=a(42),N=a(1847),O=a(782),S=a(1930);const A=i.a`
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
`;var b=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...c})=>{const l=Object(S.a)(),o=Object(O.a)(i),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(N.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:A,mountOnEnter:!0},c),a)),[a,t,o,l,e,c]);return r.a.createElement(r.a.Fragment,null,s)};const R=i.a`
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
`;var h=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...c})=>{const l=Object(S.a)(),o=Object(O.a)(i),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(N.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:R,mountOnEnter:!0},c),a)),[a,t,o,l,e,c]);return r.a.createElement(r.a.Fragment,null,s)};const g=Object(i.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,I=Object(i.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,f=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,G=Object(i.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,D=Object(i.c)(m.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var C=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:c})=>{const{motif:l}=Object(p.a)();return r.a.createElement(h,{ignoredPaths:c},r.a.createElement(I,{flex:"none",height:"65px"},r.a.createElement(b,{ignoredPaths:c},r.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(g,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(G,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},r.a.createElement(u.f,{size:"original"}))),r.a.createElement(f,null,r.a.createElement(D,{weight:"bold"},e.component)),r.a.createElement(g,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&r.a.createElement(G,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(u.y,{size:"original"})))))))};const y=Object(i.c)(d.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,v=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,w=Object(i.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,j=Object(i.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${_.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,P=Object(i.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,W=Object(i.c)(d.k)`
  height: 100%;
  width: 100%;
`;var x=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:_,title:u,unsavedChangesModalIgnoredPaths:m,onEscClicked:p,submitText:N="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:S,hidddenHeader:A,...b})=>r.a.createElement(l.c,Object.assign({enableReinitialize:!0},b),({dirty:i,handleReset:l,handleSubmit:b,isSubmitting:R})=>r.a.createElement(v,{autoComplete:"off",onSubmit:b},r.a.createElement(W,{vertical:!0},!A&&r.a.createElement(C,{goBack:a,hideClose:n,showBack:_,title:u,onEscClicked:p,ignoredPaths:m}),r.a.createElement(T.a,{ignoredPaths:m},r.a.createElement(P,{flex:"1"},r.a.createElement(y,{flex:"none",flexDirection:"column"},e))),!t&&!o&&r.a.createElement(E.a,{ignoredPaths:m,when:i&&!R}),(!o||O)&&r.a.createElement(j,{active:i||O},r.a.createElement(d.g,{justifyContent:S?"space-between":"flex-end",width:"100%",alignItems:"center"},S&&r.a.createElement(w,null,S(R)),!o&&r.a.createElement(d.g,null,r.a.createElement(s.a,{disabled:!i||R,type:"button",variant:"default",onClick:l},r.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(s.a,{disabled:!i||R,type:"submit",variant:"primary"},r.a.createElement(c.c,{id:N}))))))))},1940:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1847),c=a(5),l=a(782),o=a(1930);const s=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,...E})=>{const _=Object(o.a)(),d=Object(l.a)(a),T=Object(n.useMemo)(()=>r.a.Children.map(c,a=>null===a?a:r.a.createElement(i.a,Object.assign({appear:t||!d||_,in:t||!d||_,timeout:e,classNames:s,mountOnEnter:!0},E),a)),[c,t,d,_,e,E]);return r.a.createElement(r.a.Fragment,null,T)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const r={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1947:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1847),c=a(5);const l=(e,t)=>c.a`
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
`;t.a=r.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:c="0 0 32px",wrap:o=!1,children:s,...E})=>{const _=Object(n.useMemo)(()=>r.a.Children.map(s,(n,c)=>r.a.createElement(i.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,void 0),mountOnEnter:!0},E),null===n?r.a.createElement("div",null):n)),[s,a,t,E,e]);return o?r.a.createElement(i.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,c),mountOnEnter:!0},E),r.a.createElement("div",null,s)):r.a.createElement(r.a.Fragment,null,_)})},1949:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchPortForwardRules",(function(){return l})),a.d(t,"fetchPortForwardRule",(function(){return o})),a.d(t,"savePortForwardRule",(function(){return s})),a.d(t,"removePortForwardRule",(function(){return E})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return i})),a.d(t,"selectPortForwardRules",(function(){return T})),a.d(t,"selectPortForwardData",(function(){return u})),a.d(t,"selectPortForwardRecord",(function(){return m})),a.d(t,"PortForwardInterface",(function(){return p}));var n=a(6),r="portforward",i="/api/s/{site}/rest/".concat(r),c=a(28);const l=(e={},t={})=>Object(n.q)(r,i,e,{idField:"_id",...t}),o=e=>Object(n.t)(r,i,e),s=e=>{const t=Object(c.a)("SETTINGS_GATEWAY_PORT_FORWARD_CREATE_ERROR","SETTINGS_GATEWAY_PORT_FORWARD_CREATE_SUCCESS"),{_id:a}=e;return a?Object(n.C)(r,a,`${i}/${a}`,e,{},t):Object(n.i)(r,i,e,{},t)},E=({_id:e,name:t})=>Object(n.n)(r,e,`${i}/${e}`,{},Object(c.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_SUCCESS_TOAST",{name:t}));var _=a(20),d=a(4);const T=Object(n.A)(l()),u=Object(d.a)(T,c.c),m=e=>t=>{const a=Object(n.w)(o(e),t.models);return Object(_.a)(a,"data",{})};var p;!function(e){e.WAN="wan",e.WAN2="wan2",e.BOTH="both"}(p||(p={}))},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return d})),a.d(t,"saveDhcpOption",(function(){return T})),a.d(t,"removeDhcpOption",(function(){return u})),a.d(t,"DHCP_OPTIONS",(function(){return i})),a.d(t,"typeOptions",(function(){return c})),a.d(t,"integerOptions",(function(){return l})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return o})),a.d(t,"DHCP_CODE",(function(){return s})),a.d(t,"MODEL",(function(){return E})),a.d(t,"PATH",(function(){return _})),a.d(t,"selectDhcpOptions",(function(){return p})),a.d(t,"selectDhcpOptionsData",(function(){return N})),a.d(t,"selectDhcpOptionsCodes",(function(){return O})),a.d(t,"DhcpOptionTypes",(function(){return S})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return A}));var n=a(28),r=a(6);const i={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},c=[{value:i.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:i.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:i.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:i.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:i.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:i.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],l=[8,16,32].map(e=>({value:e,label:e})),o="dhcpd_user_option_",s={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},E="dhcpOptions",_="/api/s/{site}/rest/dhcpoption",d=(e={})=>Object(r.q)(E,_,void 0,{...e,idField:"_id"}),T=e=>{const{_id:t}=e;return t?Object(r.C)(E,t,`${_}/${t}`,e):Object(r.i)(E,_,e)},u=({_id:e,name:t})=>Object(r.n)(E,e,`${_}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var m=a(4);const p=Object(r.A)(d()),N=Object(m.a)(p,n.c),O=Object(m.a)(N,e=>e.map(({code:e})=>e));var S;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(S||(S={}));const A=(e,t,a,n)=>{let r;switch(a){case S.BOOLEAN:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case S.HEX_ARRAY:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case S.INTEGER:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case S.IP_ADDRESS:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case S.MAC_ADDRESS:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case S.TEXT:r="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:r="COMMON_UNKNOWN"}const i=e.formatMessage({id:r});return"integer"!==a?i:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1961:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchRouting",(function(){return l})),a.d(t,"saveRouting",(function(){return o})),a.d(t,"removeRouting",(function(){return s})),a.d(t,"MODEL",(function(){return i})),a.d(t,"PATH",(function(){return c})),a.d(t,"selectRouting",(function(){return _})),a.d(t,"selectRoutingData",(function(){return d})),a.d(t,"StaticRouteGatewayType",(function(){return T})),a.d(t,"StaticRouteType",(function(){return u}));var n=a(28),r=a(6),i="routing",c="/api/s/{site}/rest/routing";const l=(e={},t={})=>Object(r.q)(i,c,e,{idField:"_id",...t}),o=e=>{const{_id:t}=e;return t?Object(r.C)(i,t,`${c}/${t}`,e):Object(r.i)(i,c,e)},s=({_id:e,name:t})=>Object(r.n)(i,e,`${c}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_SUCCESS_TOAST",{name:t}));var E=a(4);const _=Object(r.A)(l()),d=Object(E.a)(_,n.c);var T,u;!function(e){e.DEFAULT="default",e.SWITCH="switch"}(T||(T={})),function(e){e.NEXT_HOP="nexthop-route",e.INTERFACE="interface-route",e.BLACK_HOLE="blackhole"}(u||(u={}))},1999:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(28),r=a(6),i=a(2e3);const c=(e={})=>Object(r.q)(i.a,i.b,void 0,{...e,idField:"_id"}),l=e=>{const{_id:t}=e;return t?Object(r.C)(i.a,t,`${i.b}/${t}`,e):Object(r.i)(i.a,i.b,e)},o=({_id:e,service:t})=>Object(r.n)(i.a,e,`${i.b}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_SUCCESS_TOAST",{name:t}))},2e3:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="dynamicdns",r="/api/s/{site}/rest/".concat(n)},2002:function(e,t,a){"use strict";a.r(t);var n=a(2025);a.d(t,"selectDynamicDns",(function(){return n.a})),a.d(t,"selectDynamicDnsData",(function(){return n.b}));var r=a(2e3);a.d(t,"MODEL",(function(){return r.a})),a.d(t,"PATH",(function(){return r.b}));var i=a(1999);a.d(t,"fetchDynamicDns",(function(){return i.a})),a.d(t,"saveDynamicDns",(function(){return i.c})),a.d(t,"removeDynamicDns",(function(){return i.b}));var c=a(2026);for(var l in c)["default","selectDynamicDns","selectDynamicDnsData","MODEL","PATH","fetchDynamicDns","saveDynamicDns","removeDynamicDns"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return c[e]}))}(l)},2003:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return s}));var n=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},r=function(e,t){var a=n(e),r=a[0],i=a[1];return new RegExp(t.call(t,r),i)},i=function(e){return r(e,(function(e){var t="^"===e.substring(0,1),a="$"===e.substring(e.length-1);if(!t&&!a)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(a?1:0))}))},c=function(e){return n(e)[0]},l=function(e){return r(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},o=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var a=e.map((function(e){return"(".concat(n(e)[0],")")})).join("|");return new RegExp(a,t)},s=function(e,t,a,r){return new RegExp((e||"")+n(t)[0]+(a||""),r)}},2025:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(4),r=a(6),i=a(28),c=a(1999);const l=Object(r.A)(Object(c.a)()),o=Object(n.a)(l,i.c)},2026:function(e,t){},2034:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(63),r=a(174),i=a(2003),c=a(105),l=Object(i.e)([c.j,c.m]),o=Object(n.a)((function(e){if("string"!=typeof e)return!1;if(!e.match(l))return!1;var t=new r.Address4(e);if(t.isValid())return t.correctForm()===t.startAddress().address;var a=new r.Address6(e);if(a.isValid()){var n=a.correctForm();return new r.Address6(n).startAddress().address===a.startAddress().address}return!1}))},2037:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(255),r=a(1953);const i=Object.values(r.a),c=e=>{const t=Math.min(i.length-1,Object(n.f)(e,1e3));return{value:Math.abs(e/1e3**t),unit:i[t]}},l=(e,t)=>{switch(t){case r.a.G:return Math.round(1e6*e);case r.a.M:return 1e3*e;case r.a.K:default:return e}},o=({download_kilobits_per_second:e,upload_kilobits_per_second:t})=>({download:c(e),upload:c(t)})},2054:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return d}));var n=a(364),r=a(1743),i=a(34),c=a(1951),l=a(2037);const o=e=>(e||[]).reduce((e,{wan_networkgroup:t=""})=>(t.toUpperCase().startsWith("WAN")&&e.push(t),e),[]),s=e=>{var t,a;const n=["cidr_prefix","gateway_ip"];return e.wan_smartq_enabled||(n.push("wan_smartq_up_rate"),n.push("wan_smartq_down_rate")),null!==(t=e.wan_dns1)&&void 0!==t||n.push("wan_dns1"),null!==(a=e.wan_dns2)&&void 0!==a||n.push("wan_dns2"),e.wan_type!==i.IpV4ConnectionType.PPPOE&&(n.push("wan_username"),n.push("x_wan_password")),e.wan_type!==i.IpV4ConnectionType.STATIC&&(n.push("wan_ip"),n.push("wan_netmask"),n.push("wan_gateway")),e.wan_provider_capabilities&&(e.wan_provider_capabilities.hasAtleastOneDefined?e.wan_provider_capabilities=(e=>Object(r.a)({...e,download_kilobits_per_second:Object(l.a)(e.download_kilobits_per_second,e.download_unit),upload_kilobits_per_second:Object(l.a)(e.upload_kilobits_per_second,e.upload_unit)},"download_unit","upload_unit","hasAtleastOneDefined"))(e.wan_provider_capabilities):delete e.wan_provider_capabilities),Object(r.a)(e,...n)},E=e=>{const t=["cidr_prefix","gateway_ip","dhcp_mode","contentFilter"],a=(e=>Object.entries(e).filter(([e,t])=>!!e.startsWith(c.DHCP_USER_OPTION_PREFIX)&&[void 0,null,""].some(e=>e===t)).map(([e])=>e))(e),{ipv6_interface_type:n,ipv6_pd_prefixid:l,vlan:o}=e;"none"===n&&t.push("ipv6_ra_priority","ipv6_ra_valid_lifetime","ipv6_ra_preferred_lifetime","dhcpdv6_enabled","dhcpdv6_start","dhcpdv6_stop","dhcpdv6_leasetime","dhcpdv6_dns_auto","dhcpdv6_dns_1","dhcpdv6_dns_2","dhcpdv6_dns_3","dhcpdv6_dns_4"),"static"!==n&&t.push("ipv6_subnet"),"pd"!==n&&t.push("ipv6_pd_interface","ipv6_pd_prefixid","ipv6_pd_start","ipv6_pd_stop");const s=e.nat_outbound_ip_addresses.filter(e=>e.ip_address);s.length||t.push("nat_outbound_ip_addresses");const E=Object(r.a)({...e,vlan_enabled:!!o,ipv6_pd_prefixid:null!=l?l:"",nat_outbound_ip_addresses:s},...t,...a),{gateway_device:_,gateway_type:d}=E;return _&&d!==i.NetworkGatewayType.default||(E.gateway_type=i.NetworkGatewayType.default,delete E.gateway_device),E},_=e=>{const t=E(e),a=[...i.vpnSpecificFields.client,...i.vpnSpecificFields.server,...i.vpnSpecificFields.siteToSite[i.SiteToSiteVpnType.AUTO_IPSEC_VTI],...i.vpnSpecificFields.siteToSite[i.SiteToSiteVpnType.MANUAL_IPSEC],...i.vpnSpecificFields.siteToSite[i.SiteToSiteVpnType.OPEN_VPN]].filter(e=>!i.networkAndVpnSharedKeys.includes(e));return Object(r.a)(t,...a)},d=({...e},t=!1)=>{if(t)return(e=>{const t=_(e);return t.l2tp_interface=e.l2tp_interface,t.l2tp_local_wan_ip=e.l2tp_local_wan_ip,t.radiusprofile_id=e.radiusprofile_id,t.vpn_type=i.ServerVpnType.L2TP_SERVER,t.x_ipsec_pre_shared_key=e.x_ipsec_pre_shared_key,t})(e);switch(e.purpose){case i.NetworkPurpose.VLAN_ONLY:return(e=>({vlan_enabled:!0,...Object(n.a)(e,["_id","site_id","purpose","name","vlan","enabled","is_nat","igmp_snooping","dhcpguard_enabled","dhcpd_ip_1","dhcpd_ip_2","dhcpd_ip_3"])}))(e);case i.NetworkPurpose.WAN:return s(e);case i.NetworkPurpose.REMOTE_USER_VPN:return(e=>{const t=E(e),a=Object(n.a)(t,...i.vpnPickKeys.server);return a.vpn_type!==i.ServerVpnType.L2TP_SERVER&&(delete a.l2tp_interface,delete a.l2tp_local_wan_ip,delete a.x_ipsec_pre_shared_key),a})(e);case i.NetworkPurpose.SITE_VPN:return(e=>{const t=E(e);return Object(n.a)({...t,ipsec_dh_group:Number(e.ipsec_dh_group),ipsec_ike_dh_group:Number(e.ipsec_ike_dh_group),ipsec_esp_dh_group:Number(e.ipsec_esp_dh_group),openvpn_mode:"site-to-site"},...i.vpnPickKeys.siteToSite[e.vpn_type])})(e);case i.NetworkPurpose.VPN_CLIENT:return(e=>{const t=E(e);return Object(n.a)(t,...i.vpnPickKeys.client)})(e);default:return _(e)}}},2057:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i=a(15);function c(e){var t={height:12,width:12};return e?r.a.createElement(i.u,t):r.a.createElement(i.y,t)}},2065:function(e,t,a){"use strict";var n,r=a(0),i=a.n(r),c=a(8),l=a(2),o=a(63),s=a(215),E=a(1938),_=a(34),d=a(18),T=a(1949),u=a(663),m=a(70),p=a(2920),N=a(30),O=a(105),S=[500,4500];!function(e){e.ANY="any",e.LIMITED="limited"}(n||(n={}));const A=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_ANY",value:n.ANY},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_LIMITED",value:n.LIMITED}],b=e=>!/^[0-9]*$/.test(e),R=e=>function(t){return!e||(t||"").trim().split(",").every(e=>{if(e.includes("-")){const[t,a]=e.split("-").map(e=>Number(e.trim()));return S.every(e=>!Object(p.a)(e,t,a+1))}return!S.includes(parseInt(e,10))})};var h=Object(o.a)(e=>N.a.object().shape({name:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME").required(),srcType:N.a.string(),src:N.a.string().when("srcType",{is:n.LIMITED,then:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE").required().unifiIpv4Range(i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IP_SUBNET_RANGE",values:{name:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}}))}),dst_port:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT").unifiPortRange(i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("port-fwd-overlaps-ipsec",i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_PORT_FWD_OVERLAPS_IPSEC"}),R(e)).required(),fwd:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP").matches(O.h,i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).required(),fwd_port:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT").unifiPortRange(i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("incorrect-multiport-fwd-port",i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_INCORRECT_MULTIPORT_FWD_PORT"}),(function(e){const{dst_port:t}=this.parent;return!(b(t)||b(e))||(t||"").trim()===(e||"").trim()})).required(),pfwd_interface:N.a.string().oneOf([...Object.values(T.PortForwardInterface)]).required()})),g=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_BOTH",value:"tcp_udp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_TCP",value:"tcp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_UDP",value:"udp"}],I={name:"",enabled:!1,pfwd_interface:T.PortForwardInterface.WAN,srcType:n.ANY,src:"",dst_port:"",fwd:"",fwd_port:"",proto:g[0].value,log:!1},f=a(445),G=a(1739),D=a(1736),C=a(1914),y=a(1737),v=a(5),w=a(44),j=a(15),P=a(3),W=a(71),x=a(1947),L=a(62),F=a(32),V=a(800);const M=Object(v.c)("label")`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,k=Object(v.c)("div")`
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-right: 0;
  }
`,U=Object(v.c)("div")`
  min-width: 100%;
  flex: 1 0;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-bottom: 0;
  }
`;var H=Object(l.f)(({intl:e})=>{const t=Object(c.useSelector)(_.selectWanNetworks),a=Object(c.useSelector)(V.I),{values:n,setFieldValue:o}=Object(w.e)(),{destination_ip:s,pfwd_interface:E}=n,d=E===T.PortForwardInterface.BOTH?[T.PortForwardInterface.WAN,T.PortForwardInterface.WAN2]:[E],u=Object(r.useMemo)(()=>d.map(e=>t.find(({wan_networkgroup:t})=>(null==t?void 0:t.toLowerCase())===e.toLowerCase())),[E]),m=Object(r.useMemo)(()=>u.reduce((t,a)=>{const{wan_ip:n,wan_ip_aliases:r=[],wan_networkgroup:c,wan_type:o,_id:s}=null!=a?a:{},d=[n,...r].reduce((e,t)=>{const a=null==t?void 0:t.replace(/\/\d{1,2}/,"");return a?[...e,{label:a,value:a}]:e},[{label:e.formatMessage({id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP_AUTO_DEFINED"}),value:"any"}]);let u;switch(d.length>2?E!==T.PortForwardInterface.BOTH&&(u="dropdown"):o===_.IpV4ConnectionType.STATIC&&(u="text"),u){case"dropdown":return[...t,i.a.createElement(U,{key:s},i.a.createElement(M,null,i.a.createElement(L.Field,{full:!0,label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+c,name:"destination_ip",options:d,translateLabel:!0,type:"dropdown"})))];case"text":{const e=null!=n?n:o===_.IpV4ConnectionType.DHCP?"DHCP":"PPPoE";return[...t,i.a.createElement(k,{key:s},i.a.createElement(M,null,i.a.createElement(F.a,{color:"tertiary",size:"label"},i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+c}))),i.a.createElement(F.a,null,e))]}default:return t}},[]),[E,e]);return Object(r.useEffect)(()=>{E===T.PortForwardInterface.BOTH&&"any"!==s&&o("destination_ip","any")},[s,E,o]),a?m.length===d.length&&i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"destination_ip",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP"})}),i.a.createElement(y.a,null,i.a.createElement(W.g,{flexWrap:"wrap",width:"100%"},m))):null});const B=Object(v.c)(f.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,$=Object(v.c)(L.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`,Y=Object(v.c)(s.a)`
  margin-top: 8px;
  padding: 0;
  font-size: 12px;
`;var z=()=>{const{values:e,errors:t,setFieldValue:a}=Object(w.e)(),o=Object(c.useSelector)(P.selectWanInterfaceOptions);Object(r.useEffect)(()=>{e.srcType===n.LIMITED&&e.src===n.ANY&&a("src","")},[a,e.src,e.srcType]);return i.a.createElement(G.a,null,i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"name",alignWith:"input",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME",fast:!0}))),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"enabled",alignWith:"toggle",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_ENABLE"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{type:"checkbox",name:"enabled",fast:!0}))),o.length>1&&i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"pfwd_interface",alignWith:"input",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE"})}),i.a.createElement(y.a,null,o.map(({label:e,value:t})=>i.a.createElement($,{value:T.PortForwardInterface[e],type:"togglebox",toggleboxType:"radio",name:"pfwd_interface",key:"pfwd-interface-"+t},i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+e}))),i.a.createElement($,{value:T.PortForwardInterface.BOTH,type:"togglebox",toggleboxType:"radio",name:"pfwd_interface"},i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_BOTH"})))),i.a.createElement(H,null),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"srcType",alignWith:"dropdown",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{type:"dropdown",name:"srcType",full:!0,translateOptions:!0,options:A}))),i.a.createElement(x.a,{in:e.srcType===n.LIMITED},i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"src",alignWith:"input",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{name:"src",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE",full:!0})))),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"dst_port",alignWith:"input",label:i.a.createElement(W.g,null,i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT"}),i.a.createElement(B,{message:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT_TOOLTIP"}),position:"bottom",width:140},i.a.createElement(j.W,{isActive:!0})))}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"dst_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT",fast:!0}),!t.dst_port&&e.dst_port&&e.dst_port!==e.fwd_port&&i.a.createElement(Y,{name:"port-forward-update-forward-port",size:"small",variant:"link",onClick:()=>{a("fwd_port",e.dst_port,!0)}},i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_UPDATE_FORWARD_PORT"})))),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"fwd",alignWith:"input",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"fwd",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP",fast:!0}))),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"fwd_port",alignWith:"input",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"fwd_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"}))),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"proto",alignWith:"dropdown",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{full:!0,name:"proto",type:"dropdown",translateOptions:!0,options:g,fast:!0}))),i.a.createElement(D.a,null,i.a.createElement(C.a,{htmlFor:"log",alignWith:"toggle",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING"}),description:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING_DESCRIPTION"})}),i.a.createElement(y.a,{column:!0},i.a.createElement(L.Field,{type:"checkbox",name:"log",fast:!0}))))};const X=Object(o.a)(e=>{const t={...I,...e},a=t.src&&t.src!==n.ANY?n.LIMITED:n.ANY;return{...t,srcType:a}});t.a=e=>{const t=Object(c.useSelector)(_.selectIsIpsecInUse),a=Object(c.useDispatch)(),o=Object(c.useSelector)(d.x),{initialValues:p,onBack:N}=e,O=!!p._id,S=Object(r.useCallback)((e,{setSubmitting:t})=>{const{srcType:r,...i}=e,c=r===n.ANY?{...i,src:n.ANY}:i;return a(Object(T.savePortForwardRule)(c)).then(()=>N()).catch(()=>t(!1))},[a,N]),A=Object(m.n)({component:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON"},o?"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_EDIT",p._id?p.name:void 0),b=Object(r.useCallback)(()=>{a(Object(u.b)({name:p.name,onConfirm:()=>a(Object(T.removePortForwardRule)(p)).then(N())}))},[a,p,N]);return i.a.createElement(E.b,{onSubmit:S,title:A,initialValues:X(p),isEdit:O,isView:o,onEscClicked:N,validationSchema:h(t),showBack:!0,goBack:N,footerActiveOverride:!!(null==p?void 0:p._id),customFooterButtons:e=>(null==p?void 0:p._id)&&i.a.createElement(s.a,{disabled:e,type:"button",variant:"default",onClick:b},i.a.createElement(l.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(z,null))}},2066:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(8),c=a(2),l=a(63),o=a(215),s=a(3),E=a(34),_=a(1961),d=a(1938),T=a(663),u=a(27),m=a(71),p=a(70),N=a(16);var O=a(30),S=a(105),A=a(2034),b=a(2003),R=O.a.object().shape({name:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),enabled:O.a.boolean(),gateway_device:O.a.string().when(["gateway_type"],{is:e=>e===_.StaticRouteGatewayType.SWITCH,then:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_L3_GATEWAY_DEVICE").required()}),"static-route_network":O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK").required().test("networkSubnet",r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_NETWORK_SUBNET"}),A.a),"static-route_distance":O.a.string().matches(/^([0-9][0-9]{0,1}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,r.a.createElement(c.c,{id:"COMMON_DESCRIPTION_NUMBER_BETWEEN",values:{min:0,max:255}})),"static-route_type":O.a.string(),"static-route_nexthop":O.a.string().when(["static-route_type"],{is:_.StaticRouteType.NEXT_HOP,then:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP").required().matches(Object(b.e)([S.h,S.k]),r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IP"}))}),"static-route_interface":O.a.string()}),h=a(2054);const g=[E.NetworkPurpose.REMOTE_USER_VPN,E.NetworkPurpose.VLAN_ONLY,E.NetworkPurpose.WAN];var I=a(1739),f=a(1736),G=a(1914),D=a(1737),C=a(44),y=a(5),v=a(1947),w=a(62),j=a(46);const P=Object(y.c)(w.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  white-space: nowrap;
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var W=Object(c.f)(({interfaces:e,intl:t})=>{const{initialValues:{_id:a},values:{gateway_type:n,"static-route_nexthop":l,"static-route_type":o},errors:{gateway_device:E}}=Object(C.e)(),d=/^fe80:/i.test(l),T=Object(i.useSelector)(s.selectAdoptedL3Switches).map(e=>({value:e.mac,label:Object(j.c)(e)})),u=T.length>0,m=n===_.StaticRouteGatewayType.DEFAULT,p=!!a;return r.a.createElement(I.a,null,r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"enabled",alignWith:"toggleSmall",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_ENABLE"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{type:"checkbox",name:"enabled"}))),r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"name",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME"}))),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{disabled:p},r.a.createElement(G.a,{htmlFor:"gateway_type",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE"})}),r.a.createElement(D.a,null,r.a.createElement(P,{value:_.StaticRouteGatewayType.DEFAULT,type:"togglebox",toggleboxType:"radio",name:"gateway_type",disabled:p},r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE_GATEWAY"})),r.a.createElement(P,{value:_.StaticRouteGatewayType.SWITCH,type:"togglebox",toggleboxType:"radio",name:"gateway_type",disabled:p},r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DEVICE_TYPE_SWITCH"})))),!m&&r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"gateway_device",alignWith:"dropdown",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_SELECT_GATEWAY"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{full:!0,type:"dropdown",name:"gateway_device",options:T,placeholder:t.formatMessage({id:"COMMON_CHOOSE_AN_OPTION"})}),E&&r.a.createElement(w.ValidationMessage,{visible:!0},E)))),m&&r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"static-route_distance",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DISTANCE"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{full:!0,name:"static-route_distance",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_DISTANCE_PLACEHOLDER"}))),r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"static-route_network",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{full:!0,name:"static-route_network",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NETWORK_PLACEHOLDER"}))),r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"static-route_type",alignWith:"dropdown",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_ROUTE_TYPE"})}),r.a.createElement(D.a,null,r.a.createElement(P,{value:_.StaticRouteType.NEXT_HOP,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP"})),r.a.createElement(P,{value:_.StaticRouteType.INTERFACE,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_INTERFACE"})),r.a.createElement(P,{value:_.StaticRouteType.BLACK_HOLE,type:"togglebox",toggleboxType:"radio",name:"static-route_type"},r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_BLACK_HOLE"})))),r.a.createElement(v.a,{in:o===_.StaticRouteType.NEXT_HOP||o===_.StaticRouteType.INTERFACE||d,wrap:!0},o===_.StaticRouteType.NEXT_HOP&&r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"static-route_nexthop",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{full:!0,name:"static-route_nexthop",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NEXT_HOP_PLACEHOLDER"}))),(o===_.StaticRouteType.INTERFACE||d)&&r.a.createElement(f.a,null,r.a.createElement(G.a,{htmlFor:"static-route_interface",alignWith:"dropdown",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_INTERFACE"})}),r.a.createElement(D.a,{column:!0},r.a.createElement(w.Field,{full:!0,type:"dropdown",name:"static-route_interface",options:e})))))});const x=Object(l.a)((e,t)=>({...{name:"",enabled:!0,gateway_device:"",gateway_type:_.StaticRouteGatewayType.DEFAULT,"static-route_network":"","static-route_distance":"","static-route_type":_.StaticRouteType.NEXT_HOP,"static-route_nexthop":"","static-route_interface":t.length?t[0].value:""},...e}));t.a=e=>{const{initialValues:t,onBack:a}=e,l=Object(i.useSelector)(E.selectNetworksData),O=Object(i.useSelector)(s.selectGatewayMac),S=Object(i.useDispatch)(),A=Object(n.useContext)(m.l),b=Object(n.useCallback)((e,{setSubmitting:t})=>{const n={...e,"static-route_nexthop":e["static-route_type"]===_.StaticRouteType.NEXT_HOP?e["static-route_nexthop"]:void 0,"static-route_interface":e["static-route_type"]===_.StaticRouteType.INTERFACE?e["static-route_interface"]:void 0};return n.gateway_type===_.StaticRouteGatewayType.SWITCH&&delete n["static-route_distance"],n.gateway_type===_.StaticRouteGatewayType.DEFAULT&&(n.gateway_device=O),S(Object(_.saveRouting)({...n,type:"static-route"})).then(()=>{S(Object(u.c)({icon:N.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),a()}).catch(e=>{S(Object(u.c)({errorMessage:e.msg,errorValues:e,icon:N.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)})},[S,a]),I=(e=>[...Object(h.b)(e).map(e=>({label:e,value:e})),...(e||[]).filter(e=>!g.includes(e.purpose)).map(({_id:e,name:t})=>({label:t,value:e}))])(l),f=!!t._id,G=Object(p.n)({component:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES"},A?"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_EDIT",t._id?t.name:void 0),D=Object(n.useCallback)(()=>{S(Object(T.b)({name:t.name,onConfirm:()=>S(Object(_.removeRouting)(t)).then(a())}))},[S,t,a]);return r.a.createElement(d.b,{onSubmit:b,title:G,initialValues:x(t,I),isEdit:f,isView:A,onEscClicked:a,validationSchema:R,showBack:!0,goBack:a,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&r.a.createElement(o.a,{disabled:e,type:"button",variant:"default",onClick:D},r.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"}))},r.a.createElement(W,{interfaces:I}))}},2067:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(8),c=a(2),l=a(63),o=a(215),s=a(2002),E=a(34),_=a(1938),d=a(663),T=a(27),u=a(71),m=a(70),p=a(16),N=a(30),O=N.a.object().shape({interface:N.a.string(),service:N.a.string(),host_name:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),login:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),x_password:N.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),server:N.a.string()}),S={AFRAID:"afraid",DNS_PARK:"dnspark",DSL_REPORTS:"dslreports",DYN_DNS:"dyndns",EASY_DNS:"easydns",NAME_CHEAP:"namecheap",NO_IP:"noip",SITELUTIONS:"sitelutions",ZONE_EDIT:"zoneedit"},A=a(1739),b=a(1736),R=a(1914),h=a(1737),g=a(3),I=a(62);var f=()=>{const e=Object(i.useSelector)(g.selectWanInterfaceOptions),t=Object.values(S).map(e=>({value:e,label:e}));return r.a.createElement(A.a,null,r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"interface",alignWith:"select",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_INTERFACE"})}),r.a.createElement(h.a,{column:!0},r.a.createElement(I.Field,{full:!0,type:"dropdown",name:"interface",options:e}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"service",alignWith:"select",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVICE"})}),r.a.createElement(h.a,{column:!0},r.a.createElement(I.Field,{full:!0,type:"dropdown",name:"service",options:t}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"host_name",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"})}),r.a.createElement(h.a,{column:!0},r.a.createElement(I.Field,{full:!0,name:"host_name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"login",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"})}),r.a.createElement(h.a,{column:!0},r.a.createElement(I.Field,{full:!0,name:"login",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"x_password",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"})}),r.a.createElement(h.a,{column:!0},r.a.createElement(I.Field,{full:!0,passwordToggle:!0,type:"password",name:"x_password",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"}))),r.a.createElement(b.a,null,r.a.createElement(R.a,{htmlFor:"server",alignWith:"input",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"})}),r.a.createElement(h.a,{column:!0},r.a.createElement(I.Field,{full:!0,name:"server",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"}))))};const G=Object(l.a)(e=>({interface:E.NetworkPurpose.WAN,service:S.AFRAID,host_name:"",login:"",x_password:"",server:"",...e}));t.a=e=>{const{initialValues:t,onBack:a}=e,l=Object(i.useDispatch)(),E=Object(n.useContext)(u.l),N=Object(n.useCallback)((e,{setSubmitting:t})=>l(Object(s.saveDynamicDns)(e)).then(()=>{l(Object(T.c)({icon:p.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),a()}).catch(e=>{l(Object(T.c)({errorMessage:e.msg,errorValues:e,icon:p.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)}),[l,a]),S=!!t._id,A=Object(m.n)({component:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"},E?"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_EDIT",t._id?t.host_name:void 0),b=Object(n.useCallback)(()=>{l(Object(d.b)({name:t.service,onConfirm:()=>l(Object(s.removeDynamicDns)(t)).then(a())}))},[l,t,a]);return r.a.createElement(_.b,{onSubmit:N,title:A,initialValues:G(t),isEdit:S,isView:E,onEscClicked:a,validationSchema:O,showBack:!0,goBack:a,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&r.a.createElement(o.a,{disabled:e,type:"button",variant:"default",onClick:b},r.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"}))},r.a.createElement(f,null))}},2133:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(2),c=a(61),l=a(2057);const o=()=>{const e=(e,t)=>e+(e&&t?":":"")+t,t=e=>e&&"any"!==e?e:"*";return[{compare:Object(c.a)(({name:e})=>e.toLowerCase()),id:"port-fwd-name",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:80},{compare:Object(c.a)(({src:e})=>t(e)),id:"port-fwd-src",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_FROM"}),renderCell:({src:e})=>t(e),minWidth:80},{compare:Object(c.a)(({dst_port:e})=>e),id:"port-fwd-dst",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_PORT"}),renderCell:({dst_port:e})=>e,minWidth:70},{compare:Object(c.a)((t,a)=>e(t,a)),id:"port-fwd-fwd",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_DEST"}),renderCell:({fwd:t,fwd_port:a})=>e(t,a),minWidth:100},{compare:Object(c.a)(({enabled:e})=>e),id:"port-fwd-enabled",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_TABLE_ENABLED"}),renderCell:({enabled:e})=>Object(l.a)(e),minWidth:100}]}},2134:function(e,t){},2135:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(0),r=a.n(n),i=a(2),c=a(102),l=a(61),o=a(2057),s=a(1961);const E=(e,t)=>{const a=Object(l.b)(e),n=(e,a)=>{if(a===s.StaticRouteType.INTERFACE){const a=t&&t.find(({_id:t})=>t===e);return a?a.name:e}return null},E=(e,t)=>t===s.StaticRouteType.NEXT_HOP?e:null,_=e=>{switch(e){case s.StaticRouteType.BLACK_HOLE:return"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_BLACK_HOLE";case s.StaticRouteType.INTERFACE:return"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_INTERFACE";case s.StaticRouteType.NEXT_HOP:return"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NEXT_HOP";default:return"COMMON_UNKNOWN"}};return[{compare:Object(l.a)(({name:e})=>e.toLowerCase()),id:"static-route-name",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:100},{compare:Object(l.a)(({enabled:e})=>e),id:"static-route-enabled",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_ENABLED"}),renderCell:({enabled:e})=>Object(o.a)(e),minWidth:100},{compare:Object(l.a)(({network:e})=>Object(c.toLong)(e)),id:"static-route-network",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NETWORK"}),renderCell:({"static-route_network":e})=>e,minWidth:110},{compare:a((e,{"static-route_type":t})=>_(t)),id:"static-route-type",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_TYPE"}),renderCell:({"static-route_type":e})=>r.a.createElement(i.c,{id:_(e)}),minWidth:80},{compare:Object(l.a)(({"static-route_interface":e,"static-route_type":t})=>n(e,t)),id:"static-route-interface",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_INTERFACE"}),renderCell:({"static-route_interface":e,"static-route_type":t})=>n(e,t),minWidth:100},{compare:Object(l.a)(({"static-route_nexthop":e,"static-route_type":t})=>E(e,t)),id:"static-route-next-hop",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_NEXT_HOP"}),renderCell:({"static-route_nexthop":e,"static-route_type":t})=>E(e,t),minWidth:100},{compare:Object(l.a)(({"static-route_distance":e})=>e),id:"static-route-distance",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_TABLE_DISTANCE"}),renderCell:({"static-route_distance":e})=>e,minWidth:100}]}},2136:function(e,t){},2137:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),i=a(2),c=a(61);const l=[{compare:Object(c.a)(({service:e})=>e.toLowerCase()),id:"dynamic-dns-service",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_TABLE_SERVICE"}),renderCell:({service:e})=>e,sortable:!0,minWidth:100,maxWidth:150},{compare:Object(c.a)(({host_name:e})=>e.toLowerCase()),id:"dynamic-dns-hostname",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_TABLE_HOSTNAME"}),renderCell:({host_name:e})=>e,sortable:!0,minWidth:100,maxWidth:150},{compare:Object(c.a)(({server:e})=>e.toLowerCase()),id:"dynamic-dns-server",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_TABLE_SERVER"}),renderCell:({server:e})=>e,sortable:!0,minWidth:100}]},2138:function(e,t){},2472:function(e,t,a){"use strict";a(2065),a(1785);var n=a(2133);a.d(t,"getPortForwardTableColumns",(function(){return n.a}));a(2134)},2473:function(e,t,a){"use strict";a(2066),a(1786);var n=a(2135);a.d(t,"getStaticRoutesTableColumns",(function(){return n.a}));a(2136)},2474:function(e,t,a){"use strict";a(2067),a(1787);var n=a(2137);a.d(t,"dynamicDnsTableColumns",(function(){return n.a}));a(2138)}}]);