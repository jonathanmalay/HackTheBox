(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[34],{1825:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n(3),s=n(604),l=n(34),o=n(1937),_=n(71),E=n(2032),d=n(70),p=n(6),u=n(2),m=n(36),T=n(5),N=n(2657),b=n(1851),h=n(18),O=n(791),S=n(2092),g=n(4),I=n(50),A=n(46),f=n(38);const R=Object(f.b)()(Object(g.a)(l.selectNetworksData,I.selectDnsFilterSettings,c.selectDevicesData,c.selectSiteGatewayForNetwork,s.selectLanEnrichedConfiguration,(e,t,n,a,i)=>e.reduce((r,c)=>{var s,o,_,E;if(![l.NetworkPurpose.WAN,l.NetworkPurpose.VLAN_ONLY].includes(c.purpose)){const{gateway_type:d=l.NetworkGatewayType.default,gateway_device:p,vpn_type:u}=c,{filter:m="none"}=t.find(({network_id:e})=>e===c._id)||{},T=!u&&"none"!==m&&m&&"SETTINGS_NETWORKS_FORM_FIELD_CONTENT_FILTERING_"+m.toUpperCase(),N=d===l.NetworkGatewayType.switch&&p?n.find(({mac:e})=>e===p):a,b=N&&Object(A.c)(N)||"-",h=i.find(e=>e.configuration._id===c._id);r.push({_id:c._id,enabled:c.enabled,name:c.name,wan_type:c.wan_type,vpn_type:c.vpn_type,purpose:c.purpose,remote_site_subnets:c.remote_site_subnets,remote_vpn_subnets:c.remote_vpn_subnets,ip_subnet:c.ip_subnet,ipv6_subnet:c.ipv6_subnet,routerName:b,ipLeasesTotal:(null===(s=null==h?void 0:h.statistics)||void 0===s?void 0:s.dhcp_max_leases)||0,ipLeasesActive:(null===(o=null==h?void 0:h.statistics)||void 0===o?void 0:o.dhcp_active_leases)||0,contentFilter:T,internetName:(null===(_=e.find(l.isWanNetwork))||void 0===_?void 0:_.name)||"-",lteBackupName:c.lte_lan_enabled&&(null===(E=e.find(l.isUlteFailoverNetwork))||void 0===E?void 0:E.name)||"-"})}return r},[])),e=>e),v=Object(T.c)("div")`
  table th,
  table td {
    padding-right: ${({theme:e})=>e.spacing["spacing-m"]} !important;
  }
`,D=Object(T.c)(N.a)`
  min-width: 480px;
`;var P=Object(u.f)(({intl:e})=>{const t=Object(r.useDispatch)(),n=Object(d.i)("networks/form"),c=Object(m.k)(),s=Object(r.useSelector)(R),{sortBy:l,isAscending:E}=Object(r.useSelector)(Object(h.I)(O.a.SETTINGS_NETWORKS))||{sortBy:"networks-table-name",isAscending:!0},p=Object(a.useCallback)(()=>c.push(n),[n,c]),T=s.length>0;return i.a.createElement(v,null,i.a.createElement(D,{headerButton:i.a.createElement(_.b,null,i.a.createElement(o.g,{name:"networks-create",variant:"secondary",onClick:p},i.a.createElement(u.c,{id:"SETTINGS_NETWORKS_BUTTON_ADD_NEW_NETWORK"}))),headerTitle:i.a.createElement(o.b,{label:i.a.createElement(u.c,{id:"SETTINGS_NETWORKS_BUBBLE_LABEL"}),type:T?o.c.CONFIGURED:o.c.UNCONFIGURED,description:i.a.createElement(u.c,{id:"SETTINGS_NETWORKS_BUBBLE_DESCRIPTION"}),section:"networks"})},T&&i.a.createElement(_.i,{horizontal:!0},i.a.createElement(b.a,{columns:Object(S.b)(e),disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,idField:"_id",items:s,onSort:(e,n)=>{t(Object(h.S)(O.a.SETTINGS_NETWORKS,{sortBy:e.id,isAscending:n}))},initialSortBy:l,initiallySortAscending:E,onRowClick:({_id:e})=>c.push(`${n}/${e}`)}))))});t.default=()=>{const e=Object(r.useDispatch)();return Object(a.useEffect)(()=>()=>e(Object(p.c)(s.fetchLanEnrichedConfigurationAction)),[]),Object(d.f)([Object(l.fetchNetworks)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(c.fetchDevices)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),s.fetchLanEnrichedConfigurationAction],i.a.createElement(_.j,null,i.a.createElement(o.e,{scrollable:!0},i.a.createElement(E.a,null,i.a.createElement(_.n,{padding:"none"},i.a.createElement(P,null))))))}},1926:function(e,t,n){"use strict";n.d(t,"e",(function(){return E})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return b.a})),n.d(t,"a",(function(){return x}));var a=n(0),i=n.n(a),r=n(5),c=n(648),s=n(1136),l=n(208);const o=Object(r.c)(l.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,_=(Object(r.c)(c.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(r.c)(l.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),E=Object(r.c)(s.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(_,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),p=e=>i.a.createElement(o,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=n(1851),m=n(375);const T=Object(r.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,N=e=>r.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(m.b)(({theme:e,...t})=>i.a.createElement(T,Object.assign({headerRowClassName:N(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var b=n(1934),h=n(529),O=n(1743),S=n(2),g=n(30),I=n(15),A=n(2846),f=n(44),R=n(71),v=n(62);const D=Object(r.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:n})=>e&&!t?""+n.spacing["spacing-l"]:0};
  position: relative;
`,P=Object(r.c)(R.c)`
  > * {
    vertical-align: middle;
  }
`,C=Object(r.c)(R.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(r.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,w=Object(r.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,y=Object(r.c)(R.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,j=Object(r.c)(C,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,V=Object(r.c)(R.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,M=Object(r.c)(R.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,G=Object(r.c)("div")`
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
`;var x=function({fieldName:e,newFields:t,fieldLabels:n,onAddItem:r,onRemoveItem:c,validationSchema:s,initialValues:l,onEditSubmit:o,useValuesInSchema:_=!1,max:d,useWindowTable:p=!1,addButtonText:m="COMMON_ACTION_ADD",invalid:T,...N}){const b=Object(a.useContext)(R.l),[x,F]=Object(a.useState)(!0),W=Object(a.useCallback)(t=>!t.disableRemove&&i.a.createElement(E,null,i.a.createElement(P,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{F(!1),c(t),await Promise.resolve(),F(!0)}},i.a.createElement(S.c,{id:"COMMON_ACTION_REMOVE"}))),[e,F,c]),k=Object(a.useMemo)(()=>p?A.a:u.a,[p]);return i.a.createElement(f.c,{enableReinitialize:!0,onSubmit:t=>{o(t[e])},initialValues:l,validationSchema:()=>_?g.a.lazy(e=>s(e)):s},({values:a,errors:s,setFieldValue:o,handleSubmit:_,handleReset:E,setTouched:p})=>i.a.createElement(i.a.Fragment,null,t.map((n,c)=>i.a.createElement(D,{inline:n.inline,isLast:c===t.length-1,key:n.name},i.a.createElement(C,{flexDirection:"column",width:"100%"},i.a.createElement(v.Field,Object.assign({disabled:a.editActive||a[e].length>=d,full:!0,name:n.name,placeholder:n.placeholder,type:n.type,label:n.label,invalid:a[n.name]?s[n.name]:T,fast:!0},"dropdown"!==n.type?{autoComplete:n.autoComplete}:{options:n.options,translateOptions:n.translateOptions,translatePlaceholder:!0,validated:n.validated}))),!b&&r&&c===t.length-1&&i.a.createElement(L,null,i.a.createElement(P,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),F(!1);const n=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await p(n,!0);t.find(e=>i[e.name])||r(a),F(!0)},Icon:I.wb,disabled:a.editActive||a[e].length>=d||!a[n.name]},i.a.createElement(S.c,{id:m}))))),a.editActive?i.a.createElement(i.a.Fragment,null,a[e].map((a,r)=>i.a.createElement(y,{key:a.id,width:"100%"},N.columns.map((a,c)=>t[c]?i.a.createElement(j,{key:a.id,isLast:c===N.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(v.Field,Object.assign({full:!0,label:n[a.id],name:`${e}[${r}][${a.id}]`,type:t[c].type,fast:!0},"dropdown"!==t[c].type?{}:{options:t[c].options,translateLabel:!0,translateOptions:t[c].translateOptions,translatePlaceholder:!0,type:t[c].type,validated:t[c].validated}))):null))),i.a.createElement(V,{justifyContent:"flex-end",width:"100%"},i.a.createElement(M,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{E(),o("editActive",!1)}},i.a.createElement(S.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(R.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:_,disabled:Object(h.a)(Object(O.a)(a,"editActive"),Object(O.a)(l,"editActive"))},i.a.createElement(S.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):a[e].length>0&&i.a.createElement(D,null,i.a.createElement(w,null,i.a.createElement(P,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{E(),o("editActive",!0)},Icon:I.ub},i.a.createElement(S.c,{id:"COMMON_ACTION_EDIT"}))),a[e].length&&x&&i.a.createElement(G,null,i.a.createElement(k,{columns:N.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:a[e],renderRowPopoverContent:c?W:void 0})))))}},1929:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),c=n(2),s=n(1946),l=n.n(s),o=n(1741),_=n(520),E=n(521);const d=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:n=null,onStay:r=null})=>{const s=Object(a.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(E.a)(t),u=Object(a.useCallback)((e,t)=>t.pathname!==e.pathname,[]),m=Object(a.useCallback)(e=>(e={},t={})=>p(e,t)&&u(e,t),[p,u]);return!!e&&i.a.createElement(l.a,{when:m(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(o.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>n?n(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:s,parentSelector:_.b,title:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(d,null,i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return R}));var a=n(0),i=n.n(a),r=n(5),c=n(643),s=n(32),l=n(1932),o=n(8),_=n(15),E=n(45),d=n(17),p=n(189),u=n(41);const m=Object(r.c)(p.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var T=({video:e})=>{const t=Object(o.useDispatch)(),n=Object(a.useCallback)(()=>{const n=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[n],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:n},i.a.createElement(_.vb,{color:E.a["blue-3"]}))},N=n(1933),b=n(71),h=n(227);const O=Object(r.c)(b.c)`
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
`,S=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,g=Object(r.c)(_.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var I,A=({video:e})=>{const t=Object(o.useDispatch)(),n=Object(o.useSelector)(h.a),r=Object(a.useCallback)(()=>{const n=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[n],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(O,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},i.a.createElement(S,{alt:e,src:`${n}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(g,{color:E.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(I||(I={}));const f=Object(r.c)(b.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,R=Object(r.c)(b.g)`
  * {
    line-height: 1.4 !important;
  }
`,v=Object(r.c)(c.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:n,section:a,status:r,video:c,online:o})=>{let _;switch(t){default:case I.BASIC:_=e;break;case I.CONFIGURED:_=i.a.createElement(R,{alignItems:"center"},e,!!a&&i.a.createElement(l.a,{section:a}),!!c&&o&&i.a.createElement(T,{video:c}));break;case I.STATUS:_=i.a.createElement(R,{alignItems:"center"},i.a.createElement(v,{variant:r}),i.a.createElement(f,{flex:"1",flexDirection:"column"},e,n&&i.a.createElement(s.a,null,n)));break;case I.UNCONFIGURED:_=i.a.createElement(R,{alignItems:"center"},!!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{section:a}),i.a.createElement(b.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(s.a,null,n))),!!c&&o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{video:c}),i.a.createElement(b.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(s.a,null,n))),!!c&&!o&&i.a.createElement(R,{alignItems:"center"},e))}return _}},1932:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),c=n(8),s=n(15),l=n(45),o=n(1936),_=n(189);const E=Object(r.c)(_.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),n=Object(a.useCallback)(()=>t(Object(o.a)(e)),[t,e]);return i.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:n},i.a.createElement(s.vb,{color:l.a["blue-3"]}))}},1933:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),c=n(8),s=n(15),l=n(45),o=n(1936),_=n(71),E=n(43);const d=Object(r.c)(_.c)`
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
`,p=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,u=Object(r.c)(s.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),n=Object(c.useSelector)(E.i),r=Object(a.useCallback)(()=>t(Object(o.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},i.a.createElement(p,{alt:e,src:`${n}data/animations/${e}/previews/preview.png`}),i.a.createElement(u,{color:l.a["blue-3"],size:"large"}))}},1934:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,n,a){return Math.min((a||this.ROW_HEIGHT)*e+(null!=n?n:this.HEADER_HEIGHT),(a||this.ROW_HEIGHT)*t+(null!=n?n:this.HEADER_HEIGHT))}}},1935:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return _.d})),n.d(t,"c",(function(){return _.a}));var a=n(0),i=n.n(a),r=n(5),c=n(15),s=n(71);const l=Object(r.c)(s.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var o=({children:e,...t})=>i.a.createElement(l,Object.assign({alignItems:"center"},t),e,i.a.createElement(c.g,null)),_=n(1931)},1936:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(17),i=n(41);const r=e=>Object(a.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return a.b})),n.d(t,"c",(function(){return a.c})),n.d(t,"e",(function(){return Q})),n.d(t,"d",(function(){return J.a})),n.d(t,"f",(function(){return J.c})),n.d(t,"h",(function(){return J.e})),n.d(t,"g",(function(){return J.d})),n.d(t,"i",(function(){return te}));var a=n(1935);n(1932),n(1933);var i=n(0),r=n.n(i),c=n(5);var s=({children:e="",className:t=null,full:n=!1,offset:a=1,size:i=6,...s})=>{const l=n?12:i,o=n?0:a;return r.a.createElement("div",Object.assign({className:Object(c.b)("col-"+l,"offset-"+o,t)},s),e)};var l,o=({children:e="",offset:t=0,size:n=2})=>r.a.createElement("div",{className:Object(c.b)("col-"+n,"offset-"+t)},e),_=n(2),E=n(666),d=n.n(E),p=n(71),u=n(1964),m=n.n(u),T=n(140),N=n.n(T),b=n(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(l||(l={}));const h=N.a.bind(m.a);var O=({className:e=null,status:t=l.NEUTRAL,...n})=>r.a.createElement(b.a,Object.assign({},n,{className:h("ubntStatusText","ubntStatusText--"+t,e)})),S=n(254),g=n(1944);const I=Object(c.c)(p.g)`
  border: 1px solid ${S.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,A=Object(c.c)(O)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var f=({state:e,className:t=null,...n})=>r.a.createElement(I,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},n),r.a.createElement(A,{message:g.b[e],status:l.WARNING})),R=n(322),v=n(82),D=n(8),P=n(45),C=n(70),L=n(20);const w={BORDER_WIDTH:2},y={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},j=({type:e,size:t,width:n,height:a})=>{switch(e){case R.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:n,PADDING_TOP:a,PADDING_X:i,TOP:r}=y;return{top:r,left:e,padding:`${a}px ${i}px ${n}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function V({type:e,forId:t,highlightStyle:n,highlightDelay:a,size:r,width:s,height:l}){const o=Object(D.useSelector)(R.selectHighlight),[_,E]=Object(C.c)(0),[d,p]=Object(C.c)(!1),u=Object(i.useRef)(null),m=Object(i.useMemo)(()=>(({color:e,show:t,style:n})=>Object(c.a)({"&::before":{border:`${w.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...n}}))({color:P.a["blue-light-3"],show:d,style:{...j({type:e,size:r,width:s,height:l}),...n}}),[d,e,n,r,s,l]);return Object(i.useEffect)(()=>{if(Number.isFinite(a)&&a>_)E(_+1);else if(u.current&&t===o.id&&o.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,a=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){a=t;break}t=t.parentElement}if(a){const{bottom:t,height:i,top:r}=(({height:e,highlightRef:t,type:n,highlightStyle:a})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:r}=t.current.getBoundingClientRect();switch(n){case R.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:n}=y,c=r+Object(L.a)(a,"top",n),s=c+i+Object(L.a)(a,"paddingBottom",e)+Object(L.a)(a,"paddingTop",t)+2*w.BORDER_WIDTH;return{bottom:s,height:s-c,top:c}}}})({height:l,highlightRef:u,type:e,highlightStyle:n}),{bottom:c,height:s,top:o}=a.getBoundingClientRect(),_=t>c,E=i>s,d=15;r<o||E?a.scrollTo({behavior:"smooth",top:a.scrollTop-o+r-d}):_&&a.scrollTo({behavior:"smooth",top:a.scrollTop+t-c+d})}p(!0)}},[l,_]),Object(i.useEffect)(()=>{d||o.id!==t||E(e=>e+1),d&&o.id!==t&&p(!1)},[o.id,d]),{highlightClassName:m,highlightRef:u}}const M=Object(c.c)(d.a)`
  color: ${v.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,G=Object(c.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,x=c.a`
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
`;var F=({text:e,badge:t=null,children:n=null,description:a="",descriptionValues:i={},dontTranslateText:s=!1,highlightDelay:l=null,highlightStyle:o=null,htmlFor:E=null,offset:d=0,size:p=5,useHtml:u=!1})=>{const{highlightClassName:m,highlightRef:T}=V({type:R.SearchHighlightType.FIELD,forId:E,highlightStyle:o,highlightDelay:l,size:p}),N=!(!a&&!n),b={["col-"+p]:!0,["offset-"+d]:d>0},h=u?_.b:_.c;return r.a.createElement("div",{className:Object(c.b)(b,x,m),ref:T},r.a.createElement("div",{className:"mb-1"},r.a.createElement(G,{className:"settingsGridLabel",htmlFor:E,primary:!0},s?e:r.a.createElement(_.c,{id:e})),t&&r.a.createElement(f,{state:t})),N&&r.a.createElement("div",null,r.a.createElement(M,{className:"settingsGridDescription",htmlFor:E,secondary:!0},a?r.a.createElement(h,{id:a,values:i}):n)))};const W=c.a`
  max-width: 960px;
`,k=({children:e="",className:t="",forwardedRef:n,leaveSpaceForValidationMessage:a=!1,marginTop:i=8,noWidthLimit:s=!1})=>{const l=a?4:i;return r.a.createElement("div",{className:Object(c.b)("row","mt-"+l,s?null:W,t),ref:n},e)};var U=r.a.forwardRef((e,t)=>r.a.createElement(k,Object.assign({forwardedRef:t},e)));var B=e=>r.a.createElement("div",{className:"mt-2 mb-6"},r.a.createElement(b.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(c.c)("div")`
  flex: 0 1 480px;
`,K=Object(c.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var $=({text:e,className:t="",description:n="",highlightDelay:a=null,highlightStyle:i=null,section:s=null})=>{const l=S.b.sectionColors.common;return r.a.createElement(U,{className:t,marginTop:0},r.a.createElement(H,null,r.a.createElement(K,{className:Object(c.b)("mt-8","type-larger"),style:{color:l}},r.a.createElement(_.c,{id:e})),n&&r.a.createElement(b.a,{message:n,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const q=Object(c.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,z=({children:e,className:t="",noBottomMargin:n=!1,noDivider:a=!1})=>r.a.createElement(q,{className:Object(c.b)("container","px-8",t),noDivider:a},r.a.createElement("div",{className:Object(c.b)({"pb-8":!n})},e));z.Content=s,z.Icon=o,z.Label=F,z.Row=U,z.SectionHeader=B,z.Subheader=$;var Y=n(284);const X=Object(c.c)(Y.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:n=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${n?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Q=e=>r.a.createElement(X,Object.assign({},e)),J=n(1926),Z=n(168),ee=n(21);const te=({lastQuery:e=0})=>{const t=Object(D.useSelector)(Z.C);return e>0?r.a.createElement(ee.a,{alignItems:"center"},r.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",r.a.createElement(_.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):r.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};n(1929)},1944:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(a||(a={}));const i={[a.alpha]:"COMMON_BADGE_ALPHA",[a.beta]:"COMMON_BADGE_UNIFI_LABS",[a.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=a},2003:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return o}));var a=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},i=function(e,t){var n=a(e),i=n[0],r=n[1];return new RegExp(t.call(t,i),r)},r=function(e){return i(e,(function(e){var t="^"===e.substring(0,1),n="$"===e.substring(e.length-1);if(!t&&!n)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(n?1:0))}))},c=function(e){return a(e)[0]},s=function(e){return i(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},l=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var n=e.map((function(e){return"(".concat(a(e)[0],")")})).join("|");return new RegExp(n,t)},o=function(e,t,n,i){return new RegExp((e||"")+a(t)[0]+(n||""),i)}},2032:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1847),c=n(5),s=n(782);const l=(e,t,n)=>c.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  &-appear-active,
  &-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${e*t+n+70}ms cubic-bezier(0.25, 0.1, 0.25, 1),
      transform 300ms ${e*t+n+70}ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transition: opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,o=i.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:n=!0,delay:c=70,initialDelay:o=0,children:_,...E}=e,d=Object(s.a)(),p=Object(a.useMemo)(()=>i.a.Children.map(_,(e,a)=>null===e?e:i.a.createElement(r.a,Object.assign({appear:n||!d,in:n||!d,timeout:t,classNames:l(a,c,o),mountOnEnter:!0},E),e)),[_,c,o,n,d,E,t]);return i.a.createElement(i.a.Fragment,null,p)});t.a=o},2034:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(63),i=n(174),r=n(2003),c=n(105),s=Object(r.e)([c.j,c.m]),l=Object(a.a)((function(e){if("string"!=typeof e)return!1;if(!e.match(s))return!1;var t=new i.Address4(e);if(t.isValid())return t.correctForm()===t.startAddress().address;var n=new i.Address6(e);if(n.isValid()){var a=n.correctForm();return new i.Address6(a).startAddress().address===n.startAddress().address}return!1}))},2057:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),i=n.n(a),r=n(15);function c(e){var t={height:12,width:12};return e?i.a.createElement(r.u,t):i.a.createElement(r.y,t)}},2092:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return D})),n.d(t,"a",(function(){return P}));var a=n(0),i=n.n(a),r=n(5),c=n(2),s=n(63),l=n(643),o=n(32),_=n(45),E=n(105),d=n(34),p=n(61),u=n(128),m=n(533),T=n(2057),N=n(581),b=n(54),h=n(2162);const O=Object(r.c)(l.a)`
  margin-right: ${_.a["spacing-s"]};
`;function S(e,t){return((e,t)=>"ipv4"===t?e.filter(e=>E.j.test(e)):"ipv6"===t?e.filter(e=>E.m.test(e)):e)((e=>{switch(e.purpose){case d.NetworkPurpose.SITE_VPN:return"auto"!==e.vpn_type&&e.vpn_type?e.remote_vpn_subnets:e.remote_site_subnets;case d.NetworkPurpose.VPN_CLIENT:return e.remote_vpn_subnets;case d.NetworkPurpose.WAN:return[Object(u.c)(e.wan_ip,e.wan_netmask)];default:{const{ip_subnet:t,ipv6_subnet:n}=e,a=[];if(t){const{ip:e,netmask:n}=Object(u.l)(t);a.push(Object(u.c)(e,n))}if(n){const{networkIp:e,subnet:t}=Object(m.c)(n);a.push(`${e}${t}`)}return a}}})(e)||[],t).join(", ")}function g(e,t){const{wan_type:n}=t;if(Object(d.isWanNetwork)(t)){if(n===d.IpV4ConnectionType.DHCP)return e.formatMessage({id:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_DHCP"});if(n===d.IpV4ConnectionType.PPPOE)return e.formatMessage({id:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_PPPOE"})}return S(t,"ipv4")}const I=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/,A=e=>(t,n,a,i)=>{const r=S(a,"ipv4").match(I)||[],c=S(i,"ipv4").match(I)||[];if(r[0]&&c[0]){const e=Object(u.d)(r[0]),t=Object(u.d)(c[0]);return Object(b.d)(e,t)}return Object(b.d)(g(e,a),g(e,i))},f=e=>e.vpn_type===d.SiteToSiteVpnType.AUTO_IPSEC_VTI,R=Object(s.a)(e=>[{compare:Object(p.a)(({name:e})=>e),id:"networks-table-name",label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_NAME"}),renderCell:e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{variant:Object(N.c)(e)?"success":"neutral"}),i.a.createElement(o.a,{truncate:!0,color:"tertiary"},e.name)),sortable:!0,minWidth:110},{compare:Object(p.a)(({routerName:e})=>e),label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_ROUTER"}),id:"networks-table-router",renderCell:({routerName:e})=>i.a.createElement(o.a,{truncate:!0,color:"tertiary"},e),sortable:!0,minWidth:110},{compare:A(e),filterable:!1,label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_SUBNET"}),id:"networks-table-subnet",renderCell:t=>i.a.createElement(o.a,{color:"tertiary"},g(e,t)),sortable:!0,minWidth:100},{compare:Object(p.a)(({ipLeasesTotal:e})=>e),filterable:!1,label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_IP_LEASES"}),id:"networks-table-ip-leases",renderCell:({ipLeasesTotal:e,ipLeasesActive:t})=>i.a.createElement(o.a,{color:"tertiary"},t||0===t?t:"-"," (",e||0===e?e:"-",")"),sortable:!0,minWidth:90},{compare:Object(p.a)(({internetName:e})=>e),filterable:!1,label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_INTERNET"}),id:"networks-table-internet",renderCell:({internetName:e})=>i.a.createElement(o.a,{truncate:!0,color:"tertiary"},e),sortable:!0,minWidth:100},{compare:Object(p.a)(({lteBackupName:e})=>e),filterable:!1,label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_WAN_BACKUP"}),id:"networks-table-wan-backup",renderCell:({lteBackupName:e})=>i.a.createElement(o.a,{truncate:!0,color:"tertiary"},e),sortable:!0,minWidth:100},{compare:Object(p.a)(({vpn_type:e})=>e),filterable:!1,label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_VPN_SERVER"}),id:"networks-table-vpn",renderCell:({vpn_type:e})=>e?Object(T.a)(!0):"-",sortable:!0,minWidth:60},{compare:Object(p.a)(({contentFilter:e})=>e),filterable:!1,label:i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_TABLE_HEADER_CONTENT_FILTER"}),id:"networks-table-content-filter",renderCell:({contentFilter:e})=>e?i.a.createElement(o.a,{color:"tertiary"},i.a.createElement(c.c,{id:e})):"-",sortable:!0,minWidth:120}]),v=e=>{const t=Object(u.i)(e,0,d.networkDefaults.MAX_DHCP_LEASES);return{start:t.dhcpStartIp,stop:t.dhcpStopIp}},D=e=>{const t=Object(m.a)(e,0,d.networkDefaults.MAX_DHCPV6_LEASES);return{start:t.dhcpStartIp,stop:t.dhcpStopIp}},P=(e,t,n,a)=>{if(n===h.a.SUBNET_OVERLAP){const n=e.filter(e=>e.ip_subnet&&e.ip_subnet!==a).find(e=>Object(u.g)(e.ip_subnet,t));if(n){const[e]=t.split("/"),{networkAddress:a,broadcastAddress:r}=Object(u.l)(n.ip_subnet);return i.a.createElement(c.c,{id:"SETTINGS_NETWORKS_SUBNET_IP_IN_USE",values:{newIp:e,networkName:n.name,ipRangeStart:a,ipRangeEnd:r}})}return null}return n}},2162:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return j}));var a,i=n(0),r=n.n(i),c=n(2),s=n(34),l=n(30),o=n(105),_=n(2034),E=n(128),d=n(533),p=n(452);!function(e){e.SUBNET_OVERLAP="subnetOverlap"}(a||(a={}));const u=l.a.string().matches(o.j,({label:e})=>r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_CIDR_IP_SUBNET",values:{name:r.a.createElement(c.c,{id:e})}})),m=(e,t,n)=>Object(l.f)(n).clone().notOneOf(t,({value:e})=>r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_VLAN_IN_USE",values:{vlan:e}})).when(["purpose","vpn_type"],{is:(t,n)=>!n&&t!==s.NetworkPurpose.VLAN_ONLY&&e,then:l.a.number().label("SETTINGS_NETWORKS_LABEL_VLAN").required(r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_VALIDATION_VLAN_REQUIRED"}))}),T=l.a.string().matches(o.d,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DOMAIN_INVALID"})),N=l.a.string().matches(o.h,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DHCP_IP_INVALID"})),b=l.a.string().when("dhcpd_dns_enabled",{is:!0,then:l.a.string().required(r.a.createElement(c.c,{id:"COMMON_VALIDATION_EMPTY",values:{name:r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_FORM_FIELD_VPN_NAME_SERVER_NUMBER",values:{number:1}})}})).matches(o.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),h=l.a.string().matches(o.h,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DHCP_UNIFI_CONTROLLER_INVALID"})),O=l.a.string().matches(o.h,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DHCP_UNIFI_CONTROLLER_INVALID"})),S=l.a.string().matches(o.g,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DHCP_WPAD_URL_INVALID"})),g=l.a.string().matches(o.w,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DHCP_WPAD_URL_INVALID"})),I=l.a.string().matches(o.k,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_DHCP_IP_INVALID"})),A=l.a.string().matches(o.m,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_IPV6_SUBNET_INVALID"})),f=l.a.string().label("SETTINGS_NETWORKS_CREATE_FORM_LABEL_NETWORK_NAME").required();function R(e){const{ip_subnet:t}=this.parent;return t&&e&&Object(E.k)(t,e)}function v(e){const{ipv6_subnet:t}=this.parent;return t&&o.m.test(t)&&e&&Object(d.b)(t,e)}const D=1,P=255,C=e=>({thenConfig:t,type:n=l.a.string()})=>n.when(["purpose","vpn_type"],{is:e,then:t}),L=C((e,t)=>e===s.NetworkPurpose.SITE_VPN&&t===s.SiteToSiteVpnType.MANUAL_IPSEC),w=C((e,t)=>e===s.NetworkPurpose.SITE_VPN&&t===s.SiteToSiteVpnType.OPEN_VPN),y=C((e,t)=>e===s.NetworkPurpose.SITE_VPN&&[s.SiteToSiteVpnType.MANUAL_IPSEC,s.SiteToSiteVpnType.OPEN_VPN].some(e=>e===t)),j=(e,t,n=!1,i,d,C,j,V,M)=>{const G=n?t.filter(e=>e!==d):t,x=!!M;return l.a.object().shape({auto_scale_enabled:l.a.boolean(),dhcpd_enabled:l.a.boolean(),dhcpd_gateway_enabled:l.a.boolean(),dhcpd_gateway:l.a.string().when("dhcpd_gateway_enabled",{is:!0,then:l.a.string().label("SETTINGS_NETWORK_LABEL_DHCP_GATEWAY_INPUT").required().test("is-ip-in-subnet",r.a.createElement(c.c,{id:"SETTINGS_NETWORK_DHCP_GATEWAY_IN_IP_SUBNET_VALIDATION"}),R)}),dhcpd_leasetime:l.a.number().when("dhcpd_enabled",{is:!0,then:l.a.number().label("SETTINGS_NETWORKS_CREATE_FIELD_TITLE_DHCP_LEASETIME").required().max(s.DHCP_LEASE_TIME_MAX).min(s.DHCP_LEASE_TIME_MIN)}),dhcpd_start:l.a.string().when("dhcpd_enabled",{is:!0,then:N.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_START").required().test("is-ip-in-subnet",r.a.createElement(c.c,{id:"SETTINGS_NETWORK_DHCP_RANGE_NOT_IN_IP_SUBNET_VALIDATION",values:{field:C.formatMessage({id:"SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_START"})}}),R)}),dhcpd_stop:l.a.string().when("dhcpd_enabled",{is:!0,then:N.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_STOP").required().test("is-ip-in-subnet",r.a.createElement(c.c,{id:"SETTINGS_NETWORK_DHCP_RANGE_NOT_IN_IP_SUBNET_VALIDATION",values:{field:C.formatMessage({id:"SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_STOP"})}}),R)}),dhcpd_ip_1:N,dhcpd_ip_2:N,dhcpd_ip_3:N,dhcpd_dns_enabled:l.a.boolean(),dhcpd_dns_1:b,dhcpd_dns_2:N,dhcpd_dns_3:N,dhcpd_dns_4:N,dhcpd_unifi_controller:h,dhcpd_ntp_1:O,dhcpd_ntp_2:O,dhcpd_wins_enabled:l.a.boolean(),dhcpd_wins_1:l.a.string().when("dhcpd_wins_enabled",{is:!0,then:l.a.string().required(r.a.createElement(c.c,{id:"COMMON_VALIDATION_EMPTY",values:{name:r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_FORM_FIELD_VPN_WINS_SERVER_NUMBER",values:{number:1}})}})).matches(o.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),dhcpd_wins_2:l.a.string().matches(o.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"})),dhcpd_wpad_url:g,dhcpd_boot_server:S,ipv6_subnet:l.a.string().when("ipv6_interface_type",{is:"static",then:A.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_IPV6_GATEWAY_SUBNET").required()}),dhcpdv6_dns_1:l.d,dhcpdv6_dns_2:l.d,dhcpdv6_dns_3:l.d,dhcpdv6_dns_4:l.d,dhcpdv6_enabled:l.a.boolean(),dhcpdv6_leasetime:l.a.number().when("dhcpdv6_enabled",{is:!0,then:l.a.number().label("SETTINGS_NETWORKS_CREATE_FIELD_TITLE_DHCP_V6_LEASETIME").required().max(s.DHCP_LEASE_TIME_MAX).min(s.DHCP_LEASE_TIME_MIN)}),dhcpdv6_start:l.a.string().when("dhcpdv6_enabled",{is:!0,then:I.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_START").required().test("is-ipv6-in-subnet",r.a.createElement(c.c,{id:"SETTINGS_NETWORK_DHCP_RANGE_NOT_IN_IP_SUBNET_VALIDATION",values:{field:C.formatMessage({id:"SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_START"})}}),v)}),dhcpdv6_stop:l.a.string().when("dhcpdv6_enabled",{is:!0,then:I.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_STOP").required().test("is-ipv6-in-subnet",r.a.createElement(c.c,{id:"SETTINGS_NETWORK_DHCP_RANGE_NOT_IN_IP_SUBNET_VALIDATION",values:{field:C.formatMessage({id:"SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_STOP"})}}),v)}),domain_name:T,gateway_device:l.a.string().when("gateway_type",{is:e=>e===s.NetworkGatewayType.switch,then:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_ROUTER").required()}),gateway_type:l.a.string(),ipsec_peer_ip:L({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_PEER_IP").required().matches(o.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),ipsec_dynamic_routing:l.a.bool(),ipsec_local_ip:l.a.string().when(["purpose","vpn_type","ipsec_dynamic_routing"],(e,t,n)=>{if(e===s.NetworkPurpose.SITE_VPN&&[s.SiteToSiteVpnType.MANUAL_IPSEC].some(e=>e===t)){const e=n?/^((?!any).)*$/:/./;return l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_VPN_PUBLIC_IP").required().matches(e,r.a.createElement(c.c,{id:"SETTINGS_NETWORK_IPSEC_LOCAL_IP_VALIDATION"})).matches(Object(o.A)(o.h,/^any$/),r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}return l.a.string()}),ipsec_interface:L({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_IPSEC_INTERFACE").required()}),l2tp_local_wan_ip:l.a.string().when(["purpose","vpn_type"],(e,t)=>e===s.NetworkPurpose.REMOTE_USER_VPN&&t===s.ServerVpnType.L2TP_SERVER&&V?l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_VPN_PUBLIC_IP").required().matches(Object(o.A)(o.h,/^any$/),r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"})):l.a.string()),ipv6_interface_type:f,ipv6_pd_prefixid:l.a.string().when("ipv6_interface_type",{is:s.IPV6_INTERFACE_TYPES.PD,then:l.a.string().matches(o.l,r.a.createElement(c.c,{id:"SETTINGS_NETWORK_IPV6_PD_PREFIX_ID_VALIDATION"}))}),ipv6_pd_start:l.a.string().when("ipv6_interface_type",{is:s.IPV6_INTERFACE_TYPES.PD,then:I.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_START").required()}),ipv6_pd_stop:l.a.string().when("ipv6_interface_type",{is:s.IPV6_INTERFACE_TYPES.PD,then:I.label("SETTINGS_NETWORKS_CREATE_FIELD_LABEL_DHCP_RANGE_STOP").required()}),ip_subnet:l.a.string().when("purpose",{is:e=>e===s.NetworkPurpose.GUEST||e===s.NetworkPurpose.CORPORATE||e===s.NetworkPurpose.REMOTE_USER_VPN,then:u.label("SETTINGS_NETWORKS_FORM_FIELD_VPN_GATEWAY_SUBNET").required().test("unique-subnet",a.SUBNET_OVERLAP,e=>!j.some(t=>!!t&&Object(E.g)(t,e)))}),name:l.e,networkgroup:l.a.string(),openvpn_remote_host:w({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_OPENVPN_REMOTE_HOST").required().matches(o.f,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_SUBNET"}))}),openvpn_remote_address:w({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_OPENVPN_REMOTE_ADDRESS").required().matches(o.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),openvpn_remote_port:w({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_OPENVPN_REMOTE_PORT").matches(o.r,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_PORT"}))}),openvpn_local_address:w({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_OPENVPN_LOCAL_ADDRESS").required().matches(o.h,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),openvpn_local_port:w({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_OPENVPN_LOCAL_PORT").matches(o.r,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_PORT"}))}),pptpc_route_distance:l.a.number(),pptpc_server_ip:l.a.string().when(["purpose","vpn_type"],{is:(e,t)=>e===s.NetworkPurpose.VPN_CLIENT&&t===s.ClientVpnType.PPTP_CLIENT,then:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_VPN_PPTC_SERVER").required().matches(o.g,r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_IP"}))}),pptpc_username:l.a.string().when(["purpose","vpn_type"],{is:(e,t)=>e===s.NetworkPurpose.VPN_CLIENT&&t===s.ClientVpnType.PPTP_CLIENT,then:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_VPN_PPTC_USERNAME").required()}),purpose:l.a.string(),remote_vpn_subnets:y({type:l.a.array(),thenConfig:l.a.array().of(l.a.string().test("networkSubnet",r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_FORM_FIELD_VPN_REMOTE_SUBNETS"}),_.a)).min(1,r.a.createElement(c.c,{id:"COMMON_VALIDATION_MIN",values:{name:r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_FORM_FIELD_VPN_REMOTE_SUBNETS"}),min:1}}))}).when("vpn_client_default_route",{is:!1,then:l.a.array().label(C.formatMessage({id:"SETTINGS_NETWORKS_FORM_FIELD_VPN_REMOTE_SUBNETS"})).of(l.a.string().test("networkSubnet",r.a.createElement(c.c,{id:"COMMON_VALIDATION_VALID_NETWORK_SUBNET"}),_.a)).min(1)}),route_distance:y({type:l.a.number(),thenConfig:l.a.number().label("SETTINGS_NETWORKS_FORM_FIELD_VPN_ROUTE_DISTANCE").required().min(D).max(P)}),vlan:!x&&m(e,G,i),vlan_enabled:l.a.boolean(),vpn_client_default_route:l.a.boolean(),vpn_type:l.a.string(),x_ipsec_pre_shared_key:l.a.string().when(["purpose","vpn_type"],{is:(e,t)=>[s.NetworkPurpose.REMOTE_USER_VPN,s.NetworkPurpose.SITE_VPN].includes(e)&&[s.ServerVpnType.L2TP_SERVER,s.SiteToSiteVpnType.MANUAL_IPSEC].includes(t),then:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_PRE_SHARED_KEY").required()}),x_openvpn_shared_secret_key:w({thenConfig:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_PRE_SHARED_KEY").required().matches(o.q,r.a.createElement(c.c,{id:"SETTINGS_NETWORKS_FORM_FIELD_OPENVPN_SHARED_SECRET_KEY_VALIDATION"}))}),x_pptpc_password:l.a.string().when(["purpose","vpn_type"],{is:(e,t)=>e===s.NetworkPurpose.VPN_CLIENT&&t===s.ClientVpnType.PPTP_CLIENT,then:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_VPN_PPTC_PASSWORD").required()}),nat_outbound_ip_addresses:l.a.array().of(l.a.object().shape({wan_network_group:l.a.string().required().oneOf([p.a.WAN,p.a.WAN2]),ip_address:l.a.string().required().matches(o.h)})),radiusServerSecret:l.a.string().when(["purpose","vpn_type"],{is:(e,t)=>e===s.NetworkPurpose.REMOTE_USER_VPN&&t===s.ServerVpnType.L2TP_SERVER,then:l.a.string().label("SETTINGS_NETWORKS_FORM_FIELD_RADIUS_SECRET").required()})})}}}]);