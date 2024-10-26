(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[31],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}));var n=a(6),i=a(766);const c=(e,t)=>Object(n.q)(i.b,i.c,e,{idField:i.a,...t}),r=c(void 0,{crudCacheStrategy:{interval:15e3,type:n.a.COMBINED}})},1747:function(e,t,a){"use strict";a(766);var n=a(1181);a.d(t,"fetchWlanEnrichedConfiguration",(function(){return n.a})),a.d(t,"fetchWlanEnrichedConfigurationAction",(function(){return n.b}));var i=a(1748);a.d(t,"selectWlanEnrichedConfiguration",(function(){return i.a}));a(1749)},1748:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(20),i=a(63),c=a(28),r=a(4),l=a(6),o=a(1181);const s=Object(l.A)(Object(o.a)()),u=Object(r.a)(s,c.c);Object(r.a)(u,e=>Object(i.a)(t=>Object(n.a)((e||[]).find(e=>Object(n.a)(e,"configuration._id")===t),"configuration")))},1749:function(e,t){},1826:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a(374),l=a(230),o=a(34),s=a(451),u=a(50),m=a(378),d=a(1747),b=a(1937),p=a(71),E=a(2032),O=a(70),h=a(6),g=a(5),T=a(2),_=a(36),f=a(2657),S=a(445),I=a(32),N=a(1851),A=a(18),j=a(791),v=a(806),y=a(2190),C=a(2189);const w=Object(g.c)(f.a)`
  min-width: 480px;
`;var x=Object(T.f)(({intl:e})=>{const t=Object(O.i)("wifi/network/form"),a=Object(_.k)(),r=Object(c.useDispatch)(),l=Object(c.useSelector)(v.c),s=Object(c.useSelector)(u.selectConnectivityMonitorEnabled),m=Object(c.useSelector)(y.b),E=Object(c.useSelector)(y.c),h=Object(c.useSelector)(d.selectWlanEnrichedConfiguration),g=Object(c.useSelector)(o.selectNetworksData),{sortBy:f,isAscending:x}=Object(c.useSelector)(Object(A.I)(j.a.SETTINGS_WIFI))||{sortBy:"wi-fi-networks-table-name",isAscending:!0},G=Object(n.useMemo)(()=>(h||[]).map(e=>({...e,_id:null==e?void 0:e.configuration._id,network:g.find(({_id:t})=>t===(null==e?void 0:e.configuration.networkconf_id)),apGroups:l.filter(({_id:t})=>{var a,n;return null===(n=null===(a=null==e?void 0:e.configuration)||void 0===a?void 0:a.ap_group_ids)||void 0===n?void 0:n.includes(t)})})).filter(({configuration:{is_guest:e}})=>!e),[h,l]),R=Object(n.useCallback)(()=>a.push(t),[t,a]),P=i.a.createElement(b.g,{disabled:!m,legacy:!1,name:"wi-fi-network-create",variant:"secondary",onClick:R},i.a.createElement(T.c,{id:"SETTINGS_WIFI_BUTTON_ADD_NEW_WI_FI_NETWORK"}));return i.a.createElement(w,{headerButton:m?P:i.a.createElement(S.a,{message:i.a.createElement(I.a,null,i.a.createElement(T.c,{id:s?"SETTINGS_WIFI_BUTTON_TOOLTIP_MAX_WIFI_CONN_MONITOR":"SETTINGS_WIFI_BUTTON_TOOLTIP_MAX_WIFI"})),position:"bottom",width:220},P),headerTitle:i.a.createElement(b.b,{label:i.a.createElement(T.c,{id:"SETTINGS_WIFI_BUBBLE_LABEL"}),type:E?b.c.CONFIGURED:b.c.UNCONFIGURED,description:i.a.createElement(T.c,{id:"SETTINGS_WIFI_BUBBLE_DESCRIPTION"}),section:"wifi"})},0!==h.length&&i.a.createElement(p.i,{horizontal:!0},i.a.createElement(N.a,{columns:Object(C.c)(e),disableColumnFilters:!0,disableSelection:!0,idField:"_id",items:G,onSort:(e,t)=>{r(Object(A.S)(j.a.SETTINGS_WIFI,{sortBy:e.id,isAscending:t}))},initialSortBy:f,initiallySortAscending:x,disableTextPointer:!0,onRowClick:e=>a.push(`${t}/${e._id}`)})))}),G=a(119),R=a(2018),P=a(226);const D=Object(g.c)(f.a)`
  min-width: 480px;
`;var H=Object(T.f)(({intl:e})=>{const t=Object(_.k)(),a=Object(c.useDispatch)(),r=Object(O.i)("wifi/hotspot/form"),l=Object(c.useSelector)(v.c),s=Object(c.useSelector)(y.b),m=Object(c.useSelector)(u.selectConnectivityMonitorEnabled),E=Object(c.useSelector)(y.c),h=Object(c.useSelector)(d.selectWlanEnrichedConfiguration),g=Object(c.useSelector)(u.selectHotspotSettings),f=Object(c.useSelector)(o.selectNetworksData),j=Object(R.a)(P.a.feStaticAssets+"/videos"),{sortBy:w,isAscending:x}=Object(c.useSelector)(Object(A.I)(G.a.SETTINGS_HOTSPOTS))||{sortBy:"hotspot-networks-table-name",isAscending:!0},H=Object(n.useMemo)(()=>h.map(e=>({...e,_id:null==e?void 0:e.configuration._id,hotspot:g,network:f.find(({_id:t})=>t===(null==e?void 0:e.configuration.networkconf_id)),apGroups:l.filter(({_id:t})=>{var a,n;return null===(n=null===(a=null==e?void 0:e.configuration)||void 0===a?void 0:a.ap_group_ids)||void 0===n?void 0:n.includes(t)})})).filter(({configuration:{is_guest:e}})=>e),[h,g,f,l]),M=Object(n.useCallback)(()=>t.push(r),[r,t]),W=i.a.createElement(b.g,{disabled:!s,name:"wi-fi-hotspot-create",legacy:!1,variant:"secondary",onClick:M},i.a.createElement(T.c,{id:"SETTINGS_WIFI_HOTSPOTS_BUTTON_ADD_NEW_WI_FI_HOTSPOT"}));return i.a.createElement(D,{headerButton:s?W:i.a.createElement(S.a,{message:i.a.createElement(I.a,null,i.a.createElement(T.c,{id:m?"SETTINGS_WIFI_BUTTON_TOOLTIP_MAX_WIFI_CONN_MONITOR":"SETTINGS_WIFI_BUTTON_TOOLTIP_MAX_WIFI"})),width:200},W),headerTitle:i.a.createElement(b.b,{label:i.a.createElement(T.c,{id:"SETTINGS_WIFI_HOTSPOTS_BUBBLE_LABEL"}),type:E?b.c.CONFIGURED:b.c.UNCONFIGURED,description:i.a.createElement(T.c,{id:"SETTINGS_WIFI_HOTSPOTS_BUBBLE_DESCRIPTION"}),video:"hotspot",online:j})},H.length>0&&i.a.createElement(p.i,{horizontal:!0},i.a.createElement(N.a,{columns:Object(C.b)(e),disableColumnFilters:!0,disableSelection:!0,idField:"_id",items:H,onSort:(e,t)=>{a(Object(A.S)(G.a.SETTINGS_HOTSPOTS,{sortBy:e.id,isAscending:t}))},initialSortBy:w,initiallySortAscending:x,disableTextPointer:!0,onRowClick:({_id:e})=>t.push(`${r}/${e}`)})))});t.default=Object(c.connect)(e=>({data:Object(d.selectWlanEnrichedConfiguration)(e)}))(()=>{const e=Object(c.useDispatch)();return Object(n.useEffect)(()=>()=>{e(Object(h.c)(d.fetchWlanEnrichedConfigurationAction))},[]),Object(O.f)([Object(s.fetchRadiusProfiles)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),Object(u.fetchSettings)({type:h.a.CACHE}),Object(m.fetchUserGroups)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),d.fetchWlanEnrichedConfigurationAction,Object(r.fetchAPGroups)(void 0,{crudCacheStrategy:{type:h.a.CACHE}}),Object(l.fetchDevicesBasic)(void 0,{type:h.a.CACHE}),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:h.a.CACHE}})],i.a.createElement(p.j,null,i.a.createElement(b.e,{scrollable:!0},i.a.createElement(E.a,null,i.a.createElement(p.n,{padding:"none"},i.a.createElement(x,null)),i.a.createElement(p.n,{padding:"none"},i.a.createElement(H,null))))))})},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return g.a})),a.d(t,"a",(function(){return W}));var n=a(0),i=a.n(n),c=a(5),r=a(648),l=a(1136),o=a(208);const s=Object(c.c)(o.a)`
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
`),m=Object(c.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(u,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),b=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var p=a(1851),E=a(375);const O=Object(c.c)(p.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,h=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(E.b)(({theme:e,...t})=>i.a.createElement(O,Object.assign({headerRowClassName:h(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var g=a(1934),T=a(529),_=a(1743),f=a(2),S=a(30),I=a(15),N=a(2846),A=a(44),j=a(71),v=a(62);const y=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(c.c)(j.c)`
  > * {
    vertical-align: middle;
  }
`,w=Object(c.c)(j.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,x=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,G=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,R=Object(c.c)(j.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,P=Object(c.c)(w,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,D=Object(c.c)(j.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,H=Object(c.c)(j.c)`
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
`;var W=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:r,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:u=!1,max:d,useWindowTable:b=!1,addButtonText:E="COMMON_ACTION_ADD",invalid:O,...h}){const g=Object(n.useContext)(j.l),[W,k]=Object(n.useState)(!0),F=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(m,null,i.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{k(!1),r(t),await Promise.resolve(),k(!0)}},i.a.createElement(f.c,{id:"COMMON_ACTION_REMOVE"}))),[e,k,r]),B=Object(n.useMemo)(()=>b?N.a:p.a,[b]);return i.a.createElement(A.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>u?S.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:u,handleReset:m,setTouched:b})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(y,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(w,{flexDirection:"column",width:"100%"},i.a.createElement(v.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:O,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!g&&c&&r===t.length-1&&i.a.createElement(x,null,i.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),k(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await b(a,!0);t.find(e=>i[e.name])||c(n),k(!0)},Icon:I.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},i.a.createElement(f.c,{id:E}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(R,{key:n.id,width:"100%"},h.columns.map((n,r)=>t[r]?i.a.createElement(P,{key:n.id,isLast:r===h.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(v.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(D,{justifyContent:"flex-end",width:"100%"},i.a.createElement(H,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),s("editActive",!1)}},i.a.createElement(f.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(j.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:u,disabled:Object(T.a)(Object(_.a)(n,"editActive"),Object(_.a)(o,"editActive"))},i.a.createElement(f.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(y,null,i.a.createElement(G,null,i.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),s("editActive",!0)},Icon:I.ub},i.a.createElement(f.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&W&&i.a.createElement(M,null,i.a.createElement(B,{columns:h.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:r?F:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),u=a(520),m=a(521);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),b=Object(m.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),E=Object(n.useCallback)(e=>(e={},t={})=>b(e,t)&&p(e,t),[b,p]);return!!e&&i.a.createElement(o.a,{when:E(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:u.b,title:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(d,null,i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return I})),a.d(t,"b",(function(){return A})),a.d(t,"c",(function(){return j}));var n=a(0),i=a.n(n),c=a(5),r=a(643),l=a(32),o=a(1932),s=a(8),u=a(15),m=a(45),d=a(17),b=a(189),p=a(41);const E=Object(c.c)(b.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var O=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(u.vb,{color:m.a["blue-3"]}))},h=a(1933),g=a(71),T=a(227);const _=Object(c.c)(g.c)`
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
`,f=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,S=Object(c.c)(u.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var I,N=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(T.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(f,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(S,{color:m.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(I||(I={}));const A=Object(c.c)(g.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,j=Object(c.c)(g.g)`
  * {
    line-height: 1.4 !important;
  }
`,v=Object(c.c)(r.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:r,online:s})=>{let u;switch(t){default:case I.BASIC:u=e;break;case I.CONFIGURED:u=i.a.createElement(j,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!r&&s&&i.a.createElement(O,{video:r}));break;case I.STATUS:u=i.a.createElement(j,{alignItems:"center"},i.a.createElement(v,{variant:c}),i.a.createElement(A,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(l.a,null,a)));break;case I.UNCONFIGURED:u=i.a.createElement(j,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{section:n}),i.a.createElement(g.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!r&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{video:r}),i.a.createElement(g.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!r&&!s&&i.a.createElement(j,{alignItems:"center"},e))}return u}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(8),l=a(15),o=a(45),s=a(1936),u=a(189);const m=Object(c.c)(u.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(8),l=a(15),o=a(45),s=a(1936),u=a(71),m=a(43);const d=Object(c.c)(u.c)`
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
`,p=Object(c.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(r.useSelector)(m.i),c=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(b,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(p,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u.d})),a.d(t,"c",(function(){return u.a}));var n=a(0),i=a.n(n),c=a(5),r=a(15),l=a(71);const o=Object(c.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(r.g,null)),u=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(17),i=a(41);const c=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),c=a.n(i),r=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...l})=>{const o=a?12:i,s=a?0:n;return c.a.createElement("div",Object.assign({className:Object(r.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(r.b)("col-"+a,"offset-"+t)},e),u=a(2),m=a(666),d=a.n(m),b=a(71),p=a(1964),E=a.n(p),O=a(140),h=a.n(O),g=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const T=h.a.bind(E.a);var _=({className:e=null,status:t=o.NEUTRAL,...a})=>c.a.createElement(g.a,Object.assign({},a,{className:T("ubntStatusText","ubntStatusText--"+t,e)})),f=a(254),S=a(1944);const I=Object(r.c)(b.g)`
  border: 1px solid ${f.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,N=Object(r.c)(_)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var A=({state:e,className:t=null,...a})=>c.a.createElement(I,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(N,{message:S.b[e],status:o.WARNING})),j=a(322),v=a(82),y=a(8),C=a(45),w=a(70),x=a(20);const G={BORDER_WIDTH:2},R={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},P=({type:e,size:t,width:a,height:n})=>{switch(e){case j.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:c}=R;return{top:c,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function D({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:l,height:o}){const s=Object(y.useSelector)(j.selectHighlight),[u,m]=Object(w.c)(0),[d,b]=Object(w.c)(!1),p=Object(i.useRef)(null),E=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(r.a)({"&::before":{border:`${G.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...P({type:e,size:c,width:l,height:o}),...a}}),[d,e,a,c,l,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>u)m(u+1);else if(p.current&&t===s.id&&s.type===e){window.getComputedStyle(p.current).border,window.getComputedStyle(p.current).boxShadow;let t=p.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:c}=t.current.getBoundingClientRect();switch(a){case j.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=R,r=c+Object(x.a)(n,"top",a),l=r+i+Object(x.a)(n,"paddingBottom",e)+Object(x.a)(n,"paddingTop",t)+2*G.BORDER_WIDTH;return{bottom:l,height:l-r,top:r}}}})({height:o,highlightRef:p,type:e,highlightStyle:a}),{bottom:r,height:l,top:s}=n.getBoundingClientRect(),u=t>r,m=i>l,d=15;c<s||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+c-d}):u&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-r+d})}b(!0)}},[o,u]),Object(i.useEffect)(()=>{d||s.id!==t||m(e=>e+1),d&&s.id!==t&&b(!1)},[s.id,d]),{highlightClassName:E,highlightRef:p}}const H=Object(r.c)(d.a)`
  color: ${v.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=Object(r.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,W=r.a`
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
`;var k=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:m=null,offset:d=0,size:b=5,useHtml:p=!1})=>{const{highlightClassName:E,highlightRef:O}=D({type:j.SearchHighlightType.FIELD,forId:m,highlightStyle:s,highlightDelay:o,size:b}),h=!(!n&&!a),g={["col-"+b]:!0,["offset-"+d]:d>0},T=p?u.b:u.c;return c.a.createElement("div",{className:Object(r.b)(g,W,E),ref:O},c.a.createElement("div",{className:"mb-1"},c.a.createElement(M,{className:"settingsGridLabel",htmlFor:m,primary:!0},l?e:c.a.createElement(u.c,{id:e})),t&&c.a.createElement(A,{state:t})),h&&c.a.createElement("div",null,c.a.createElement(H,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?c.a.createElement(T,{id:n,values:i}):a)))};const F=r.a`
  max-width: 960px;
`,B=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:l=!1})=>{const o=n?4:i;return c.a.createElement("div",{className:Object(r.b)("row","mt-"+o,l?null:F,t),ref:a},e)};var L=c.a.forwardRef((e,t)=>c.a.createElement(B,Object.assign({forwardedRef:t},e)));var U=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(g.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const $=Object(r.c)("div")`
  flex: 0 1 480px;
`,z=Object(r.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:l=null})=>{const o=f.b.sectionColors.common;return c.a.createElement(L,{className:t,marginTop:0},c.a.createElement($,null,c.a.createElement(z,{className:Object(r.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(u.c,{id:e})),a&&c.a.createElement(g.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const V=Object(r.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,K=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(V,{className:Object(r.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(r.b)({"pb-8":!a})},e));K.Content=l,K.Icon=s,K.Label=k,K.Row=L,K.SectionHeader=U,K.Subheader=Y;var X=a(284);const Q=Object(r.c)(X.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var q=e=>c.a.createElement(Q,Object.assign({},e)),J=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(y.useSelector)(Z.C);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(u.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(u.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(u.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2018:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{fetch(e,{mode:"no-cors"}).then(()=>{a(!0)}).catch(()=>a(!1))},[e]),t}},2032:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),r=a(5),l=a(782);const o=(e,t,a)=>r.a`
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
`,s=i.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:a=!0,delay:r=70,initialDelay:s=0,children:u,...m}=e,d=Object(l.a)(),b=Object(n.useMemo)(()=>i.a.Children.map(u,(e,n)=>null===e?e:i.a.createElement(c.a,Object.assign({appear:a||!d,in:a||!d,timeout:t,classNames:o(n,r,s),mountOnEnter:!0},m),e)),[u,r,s,a,d,m,t]);return i.a.createElement(i.a.Fragment,null,b)});t.a=s},2061:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n),c=a(5),r=a(1172),l=a(32),o=a(607),s=a(71),u=a(2);const m=100,d=Object(c.c)(s.g)`
  max-width: ${m}px;
`,b=Object(c.c)(r.a,{shouldForwardProp:e=>"itemCount"!==e})`
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
`,p=Object(c.c)("div")`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.motifPalette.link02};
  }
`,E=Object(c.c)(l.a)`
  display: block;
  width: 100%;
  line-height: 1.33333;
`;t.b=({names:e,messageId:t,rootSelector:a})=>{const c=Object(n.useMemo)(()=>e.map(e=>i.a.createElement(E,{truncate:!0,color:"primary"},e)),[e]);return i.a.createElement(o.a,{rootSelector:a,openOnMouseEnter:!0,align:"topCenter",toggleOffset:-10,renderToggle:()=>i.a.createElement(d,null,i.a.createElement(l.a,{truncate:!0},t&&e.length>1?i.a.createElement(u.c,{id:t,values:{count:e.length}}):e.join(", "))),renderCard:({open:t})=>t&&e.length>1&&i.a.createElement(b,{itemCount:e.length,isInteractive:!0,width:132,tooltipProps:{tooltipClassName:"tooltipClassName"},message:i.a.createElement(p,null,c)})})}},2088:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(63),i=a(4),c=a(374),r=a(50),l=a(35),o=a(1747);const s=Object(i.a)(r.selectConnectivityMonitorEnabled,o.selectWlanEnrichedConfiguration,c.selectAPGroupsData,c.selectDefaultAPGroup,(e,t,a,n)=>{if(!t||!t.length)return!0;const i=t.map(({configuration:e})=>e);return!(null==n?void 0:n.device_macs.length)||(null==n?void 0:n.device_macs.some(t=>[l.WlanBand.NG,l.WlanBand.NA].some(n=>!Object(c.isDeviceWlanLimitsReached)({mac:t},i,a,e,{wlan_band:n},!0))))}),u=Object(i.a)(r.selectConnectivityMonitorEnabled,l.selectWifiNetworksData,c.selectAPGroupsData,(e,t,a)=>Object(n.a)(n=>!Object(c.getInvalidApGroups)(a,n,t,e,!0).length))},2189:function(e,t,a){"use strict";a.d(t,"b",(function(){return I})),a.d(t,"a",(function(){return N})),a.d(t,"c",(function(){return j}));var n=a(50);const i=({auth:e,facebook_enabled:t,gateway:a,password_enabled:i,payment_enabled:c,radius_enabled:r,voucher_enabled:l,wechat_enabled:o},s)=>{switch(e){case n.HotspotAuth.EXTERNAL:return s.formatMessage({id:"SETTINGS_HOTSPOT_GENERAL_AUTH_OPTION_EXTERNAL"});case n.HotspotAuth.FACEBOOK_WIFI:return s.formatMessage({id:"SETTINGS_HOTSPOT_GENERAL_AUTH_OPTION_FACEBOOK_WIFI"});case n.HotspotAuth.HOTSPOT:{const e=[];if(t&&e.push("SETTINGS_HOTSPOT_FORM_AUTH_OPTIONS_FACEBOOK"),i&&e.push("SETTINGS_HOTSPOT_FORM_AUTH_OPTIONS_PASSWORD"),c)switch(a){case n.PaymentGateway.AUTHORIZE:e.push("SETTINGS_HOTSPOT_PAYMENTS_GATEWAY_AUTHORIZE_SHORT");break;case n.PaymentGateway.IPPAY:e.push("SETTINGS_HOTSPOT_PAYMENTS_GATEWAY_IPPAY_SHORT");break;case n.PaymentGateway.MERCHANT_WARRIOR:e.push("SETTINGS_HOTSPOT_PAYMENTS_GATEWAY_MERCHANT_WARRIOR_SHORT");break;case n.PaymentGateway.PAYPAL:e.push("SETTINGS_HOTSPOT_PAYMENTS_GATEWAY_PAYPAL_SHORT");break;case n.PaymentGateway.QUICKPAY:e.push("SETTINGS_HOTSPOT_PAYMENTS_GATEWAY_QUICKPAY_SHORT");break;case n.PaymentGateway.STRIPE:e.push("SETTINGS_HOTSPOT_PAYMENTS_GATEWAY_STRIPE_SHORT")}return r&&e.push("SETTINGS_HOTSPOT_FORM_AUTH_OPTIONS_RADIUS"),l&&e.push("SETTINGS_HOTSPOT_FORM_AUTH_OPTIONS_VOUCHER"),o&&e.push("SETTINGS_HOTSPOT_FORM_AUTH_OPTIONS_WE_CHAT"),e.map(e=>s.formatMessage({id:e})).join(", ")}case n.HotspotAuth.NONE:default:return s.formatMessage({id:"SETTINGS_HOTSPOT_GENERAL_AUTH_OPTION_NONE"})}};var c=a(0),r=a.n(c),l=a(5),o=a(2),s=a(63),u=a(643),m=a(32),d=a(647),b=a(45),p=a(159),E=a(1747),O=a(35),h=a(1937),g=a(71),T=a(2061),_=a(61),f=a(663);const S=Object(l.c)(u.a)`
  margin-right: ${b.a["spacing-s"]};
`,I=Object(s.a)(e=>[{compare:Object(_.a)(({configuration:{name:e}})=>e),id:"wi-fi-hotspots-table-name",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_NAME"}),renderCell:({configuration:{enabled:e,name:t}})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{variant:e?"success":"neutral"}),r.a.createElement(m.a,{truncate:!0,color:"tertiary"},t)),sortable:!0,minWidth:100},{compare:Object(_.a)(({network:e})=>null==e?void 0:e.name),id:"wi-fi-hotspots-table-network",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_NETWORK"}),renderCell:({network:e})=>r.a.createElement(m.a,{color:"secondary",truncate:!0},null==e?void 0:e.name),sortable:!0,minWidth:100},{compare:Object(_.a)(({apGroups:e})=>null==e?void 0:e.length),id:"wi-fi-hotspots-table-ap-group-names",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_AP_GROUPS"}),renderCell:({apGroups:e})=>{const t=e.map(({name:e})=>e);return r.a.createElement(T.b,{names:t,messageId:"SETTINGS_WIFI_TABLE_AP_GROUPS_COUNT"})},sortable:!0,minWidth:T.a},{compare:Object(_.a)(({statistics:{current_client_count:e}})=>e),id:"wi-fi-hotspots-table-current-client-count",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_CLIENTS"}),renderCell:({statistics:{current_client_count:e,peak_client_count:t}})=>r.a.createElement(m.a,{color:"tertiary"},`${e} (${t})`),sortable:!0,minWidth:115},{compare:Object(_.a)(t=>(null==t?void 0:t.hotspot)?i(t.hotspot,e):null),id:"wi-fi-hotspots-table-authentication-type",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_SECURITY"}),renderCell:t=>(null==t?void 0:t.hotspot)?r.a.createElement(m.a,{color:"secondary",truncate:!0},i(t.hotspot,e)):null,sortable:!0,minWidth:135},{compare:Object(_.a)(({statistics:{current_satisfaction:e}})=>e),id:"wi-fi-hotspots-table-wi-fi-current-satisfaction",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_CURRENT_SATISFACTION"}),renderCell:({statistics:{current_satisfaction:e}})=>r.a.createElement(m.a,{color:"tertiary"},!e||e<0?r.a.createElement(o.c,{id:"COMMON_NA"}):r.a.createElement(d.a,{type:"percent",input:e/100,style:{color:b.a["color-"+Object(p.c)(e)]}})),sortable:!0,minWidth:120}]),N=(Object(s.a)((e,t,a,n)=>({_id:i,configuration:l})=>{const[s,u]=Object(c.useState)(!1);return r.a.createElement(h.h,null,r.a.createElement(g.b,null,!!a&&r.a.createElement(g.c,{legacy:!1,name:"wi-fi-hotspot-manager",size:"small",type:"button",variant:"inline",href:a,target:"_blank"},r.a.createElement(o.c,{id:"SETTINGS_HOTSPOT_FORM_OPEN_HOTSPOT_MANAGER"})),r.a.createElement(g.c,{disabled:s,legacy:!1,name:"wi-fi-hotspot-edit",size:"small",type:"button",variant:"inline",onClick:()=>e(i)},r.a.createElement(o.c,{id:"COMMON_ACTION_EDIT"})),r.a.createElement(g.c,{disabled:s,legacy:!1,name:"wi-fi-network-remove",size:"small",type:"button",variant:"inline",onClick:()=>t(Object(f.b)({name:l.name,onConfirm:()=>{u(!0),t(Object(O.deleteWifiNetwork)(l._id,l.name)).then(()=>{t(Object(E.fetchWlanEnrichedConfiguration)()),n()}).catch(()=>u(!1))}}))},r.a.createElement(o.c,{id:"COMMON_ACTION_REMOVE"}))),r.a.createElement(g.m,null,r.a.createElement(g.c,{legacy:!1,name:"wi-fi-network-view",size:"small",type:"button",variant:"inline",onClick:()=>e(i)},r.a.createElement(o.c,{id:"COMMON_ACTION_VIEW"}))))}),(e,t,a)=>{let n=1,i="";for(;!i||t.includes(i);)i=e.formatMessage({id:"SETTINGS_WIFI_DUPLICATE_NAME"},{name:a,number:n}),n+=1;return i}),A=Object(l.c)(u.a)`
  margin-right: ${b.a["spacing-s"]};
`,j=Object(s.a)(e=>{const t=Object(_.b)(e);return[{compare:Object(_.a)(({configuration:{name:e}})=>e),id:"wi-fi-networks-table-name",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_NAME"}),renderCell:({configuration:{enabled:e,name:t}})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{variant:e?"success":"neutral"}),r.a.createElement(m.a,{truncate:!0,color:"tertiary"},t)),sortable:!0,minWidth:100},{compare:Object(_.a)(({network:e})=>null==e?void 0:e.name),id:"wi-fi-networks-table-network",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_NETWORK"}),renderCell:({network:e})=>r.a.createElement(m.a,{color:"secondary",truncate:!0},null==e?void 0:e.name),sortable:!0,minWidth:100},{compare:Object(_.a)(({apGroups:e})=>null==e?void 0:e.length),id:"wi-fi-networks-table-ap-group-names",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_AP_GROUPS"}),renderCell:({apGroups:e})=>{const t=e.map(({name:e})=>e);return r.a.createElement(T.b,{names:t,messageId:"SETTINGS_WIFI_TABLE_AP_GROUPS_COUNT"})},sortable:!0,minWidth:T.a},{compare:Object(_.a)(({statistics:{current_client_count:e}})=>e),id:"wi-fi-networks-table-current-client-count",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_CLIENTS"}),renderCell:({statistics:{current_client_count:e,peak_client_count:t}})=>r.a.createElement(m.a,{color:"tertiary"},`${e} (${Math.max(e,t)})`),sortable:!0,minWidth:115},{compare:t((e,{security:t})=>Object(O.getWlanSecurityTypeTranslationKey)(t)),id:"wi-fi-networks-table-security",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_SECURITY"}),renderCell:({configuration:{security:e}})=>r.a.createElement(m.a,{truncate:!0,color:"tertiary"},r.a.createElement(o.c,{id:Object(O.getWlanSecurityTypeTranslationKey)(e)})),sortable:!0,minWidth:135},{compare:Object(_.a)(({statistics:{current_satisfaction:e}})=>e),id:"wi-fi-networks-table-wi-fi-current-satisfaction",label:r.a.createElement(o.c,{id:"SETTINGS_WIFI_TABLE_HEADER_CURRENT_SATISFACTION"}),renderCell:({statistics:{current_satisfaction:e}})=>r.a.createElement(m.a,{color:"tertiary"},!e||e<0?r.a.createElement(o.c,{id:"COMMON_NA"}):r.a.createElement(d.a,{type:"percent",input:e/100,style:{color:b.a["color-"+Object(p.c)(e)]}})),sortable:!0,minWidth:120}]})},2190:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l.b})),a.d(t,"a",(function(){return l.a}));var n=a(4),i=a(50),c=a(1747);const r=Object(n.a)(i.selectHotspotSettings,c.selectWlanEnrichedConfiguration,(e,t)=>void 0!==e.portal_enabled&&null!==e.portal_enabled||t.length>0);Object(n.a)(i.selectHotspotSettings,e=>void 0===e.portal_enabled),Object(n.a)(i.selectHotspotSettings,e=>[e]);var l=a(2088)},766:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c}));const n="configuration._id",i="wlanEnrichedConfiguration",c="/v2/api/site/{site}/wlan/enriched-configuration"}}]);