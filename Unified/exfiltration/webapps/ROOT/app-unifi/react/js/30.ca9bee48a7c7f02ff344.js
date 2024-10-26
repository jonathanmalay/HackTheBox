(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[30],{1823:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a(34),l=a(50),o=a(1949),s=a(1961),E=a(1951),_=a(2002),d=a(3),u=a(452),m=a(1937),T=a(70),b=a(71),N=a(2032),p=a(6),O=a(5),A=a(2),h=a(36),S=a(2657),I=a(1851),g=a(18),f=a(791),D=a(820),R=a(4),v=a(46);const C=Object(R.a)(d.selectSiteGateway,u.f,d.selectIsUlteInFailover,(e,t,a)=>t.map(t=>{const{details:{service_provider:n},statistics:{uptime_percentage:i,peak_usage:{download_percentage:r,upload_percentage:l}},configuration:{_id:o,name:s,attr_no_delete:E,attr_hidden_id:_}}=t,d=_===c.NetworkHiddenId.WAN?null==e?void 0:e.wan1:null==e?void 0:e.wan2;return{id:o,name:s,ip:(null==d?void 0:d.ip)||"-",isp:(null==n?void 0:n.name)||"-",location:(null==n?void 0:n.city)||"-",uptime:i>=0?(null==i?void 0:i.toFixed(0))+"%":"-",peakUseDownload:null!=r?r:-1,peakUseUpload:null!=l?l:-1,attr_no_delete:E,isWanPortUp:!a&&(null==d?void 0:d.up)}})),L=Object(R.a)(d.selectUlteDevice,c.selectWanNetworks,u.e,(e,{intl:t})=>t,(e,t,a,n)=>e?t.filter(e=>Object(c.isUlteFailoverNetwork)(e)).map(t=>{var n,i,r;const{availableBytes:c,softLimitBytes:l,usedBytes:o}=Object(d.calculateUsage)(e),s={usedBytes:o,availableBytes:c,softLimitBytes:l},E=a.find(e=>e.configuration._id===t._id),_=a.find(e=>"WAN"===e.configuration.attr_hidden_id);return{id:t._id,name:Object(v.c)(e)||t.name,device:e,ip:t.wan_ip,isp:(null==e?void 0:e.lte_networkoperator)||"-",location:(null===(n=null==_?void 0:_.details)||void 0===n?void 0:n.service_provider.city)||"-",uptime:(null===(i=null==E?void 0:E.statistics)||void 0===i?void 0:i.uptime_percentage)>=0?(null===(r=null==E?void 0:E.statistics)||void 0===r?void 0:r.uptime_percentage.toFixed(0))+"%":"-",dataRemaining:s}}):[]);var w=a(2119);const j=Object(O.c)(S.a)`
  min-width: 480px;
`,y=Object(O.c)("div")`
  table {
    tr th,
    tr td {
      padding-right: ${({theme:e})=>e.spacing["spacing-m"]} !important;
    }
  }
`;var P=()=>{const e=Object(T.i)("internet/wan/form"),t=Object(h.k)(),a=Object(r.useSelector)(C),c=Object(r.useSelector)(d.selectSiteGateway),l=Object(r.useDispatch)(),{sortBy:o,isAscending:s}=Object(r.useSelector)(Object(g.I)(f.a.SETTINGS_WAN))||{sortBy:"wan-networks-table-name",isAscending:!0},E=Object(n.useCallback)(()=>t.push(e),[e,t]),_=Object(n.useMemo)(()=>{if(null==c?void 0:c.model){const{networkGroups:e}=Object(d.getDeviceSpecs)(c);if([...Object.values(e)].filter(e=>{var t;return null===(t=null==e?void 0:e.includes)||void 0===t?void 0:t.call(e,"WAN")}).length>a.length)return!0}return!1},[null==c?void 0:c.model,a.length]);return i.a.createElement(j,{headerTitle:i.a.createElement(m.b,{label:i.a.createElement(A.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADING"})}),headerButton:_?i.a.createElement(b.b,null,i.a.createElement(m.g,{useMinWidth:!0,name:"networks-create",variant:"secondary",onClick:E},i.a.createElement(A.c,{id:"SETTINGS_INTERNET_BUTTON_ADD_SECOND_INTERNET_CONNECTION"}))):void 0},0!==a.length&&i.a.createElement(y,null,i.a.createElement(D.a,{horizontal:!0},i.a.createElement(I.a,{columns:w.e,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:a,onSort:(e,t)=>{l(Object(g.S)(f.a.SETTINGS_WAN,{sortBy:e.id,isAscending:t}))},initialSortBy:o,initiallySortAscending:s,onRowClick:({id:a})=>t.push(`${e}/${a}`)}))))};const G=Object(O.c)(S.a)`
  min-width: 480px;
`,x=Object(O.c)("div")`
  table {
    tr th,
    tr td {
      padding-right: ${({theme:e})=>e.spacing["spacing-m"]} !important;
    }
  }
`;var M=Object(A.f)(({intl:e})=>{const t=Object(r.useSelector)(t=>L(t,{intl:e}));return t.length>0&&i.a.createElement(G,{headerTitle:i.a.createElement(m.b,{label:i.a.createElement(A.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADING"})})},i.a.createElement(x,null,i.a.createElement(b.i,{horizontal:!0},i.a.createElement(I.a,{columns:w.b,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0}))))});const W={fetchNetworks:c.fetchNetworks};t.default=Object(r.connect)(e=>({wanNetworks:Object(c.selectWanNetworks)(e),portForwardRules:Object(o.selectPortForwardData)(e),routing:Object(s.selectRouting)(e),dhcpOptions:Object(E.selectDhcpOptionsData)(e),dynamicDns:Object(_.selectDynamicDnsData)(e),usgSettings:Object(l.selectUsgSettings)(e)}),W)(()=>{const e=Object(r.useDispatch)();return Object(n.useEffect)(()=>()=>e(Object(p.c)(u.c)),[]),Object(T.f)([Object(c.fetchNetworks)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(d.fetchDevices)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(o.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(s.fetchRouting)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(E.fetchDhcpOptions)({crudCacheStrategy:{type:p.a.CACHE}}),Object(_.fetchDynamicDns)({crudCacheStrategy:{type:p.a.CACHE}}),u.c],i.a.createElement(b.j,null,i.a.createElement(m.e,{scrollable:!0},i.a.createElement(N.a,null,i.a.createElement(b.n,{padding:"none"},i.a.createElement(P,null)),i.a.createElement(b.n,{padding:"none"},i.a.createElement(M,null))))))})},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return _})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return p.a})),a.d(t,"a",(function(){return W}));var n=a(0),i=a.n(n),r=a(5),c=a(648),l=a(1136),o=a(208);const s=Object(r.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,E=(Object(r.c)(c.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(r.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),_=Object(r.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(E,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),u=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var m=a(1851),T=a(375);const b=Object(r.c)(m.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,N=e=>r.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(T.b)(({theme:e,...t})=>i.a.createElement(b,Object.assign({headerRowClassName:N(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var p=a(1934),O=a(529),A=a(1743),h=a(2),S=a(30),I=a(15),g=a(2846),f=a(44),D=a(71),R=a(62);const v=Object(r.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(r.c)(D.c)`
  > * {
    vertical-align: middle;
  }
`,L=Object(r.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,w=Object(r.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,j=Object(r.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,y=Object(r.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,P=Object(r.c)(L,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,G=Object(r.c)(D.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,x=Object(r.c)(D.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,M=Object(r.c)("div")`
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
`;var W=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:r,onRemoveItem:c,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:E=!1,max:d,useWindowTable:u=!1,addButtonText:T="COMMON_ACTION_ADD",invalid:b,...N}){const p=Object(n.useContext)(D.l),[W,U]=Object(n.useState)(!0),H=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(_,null,i.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),c(t),await Promise.resolve(),U(!0)}},i.a.createElement(h.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,c]),B=Object(n.useMemo)(()=>u?g.a:m.a,[u]);return i.a.createElement(f.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>E?S.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:E,handleReset:_,setTouched:u})=>i.a.createElement(i.a.Fragment,null,t.map((a,c)=>i.a.createElement(v,{inline:a.inline,isLast:c===t.length-1,key:a.name},i.a.createElement(L,{flexDirection:"column",width:"100%"},i.a.createElement(R.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:b,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!p&&r&&c===t.length-1&&i.a.createElement(w,null,i.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await u(a,!0);t.find(e=>i[e.name])||r(n),U(!0)},Icon:I.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},i.a.createElement(h.c,{id:T}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,r)=>i.a.createElement(y,{key:n.id,width:"100%"},N.columns.map((n,c)=>t[c]?i.a.createElement(P,{key:n.id,isLast:c===N.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(R.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${r}][${n.id}]`,type:t[c].type,fast:!0},"dropdown"!==t[c].type?{}:{options:t[c].options,translateLabel:!0,translateOptions:t[c].translateOptions,translatePlaceholder:!0,type:t[c].type,validated:t[c].validated}))):null))),i.a.createElement(G,{justifyContent:"flex-end",width:"100%"},i.a.createElement(x,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{_(),s("editActive",!1)}},i.a.createElement(h.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(D.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:E,disabled:Object(O.a)(Object(A.a)(n,"editActive"),Object(A.a)(o,"editActive"))},i.a.createElement(h.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(v,null,i.a.createElement(j,null,i.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{_(),s("editActive",!0)},Icon:I.ub},i.a.createElement(h.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&W&&i.a.createElement(M,null,i.a.createElement(B,{columns:N.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:c?H:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(2),l=a(1946),o=a.n(l),s=a(1741),E=a(520),_=a(521);const d=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(_.a)(t),m=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),T=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&m(e,t),[u,m]);return!!e&&i.a.createElement(o.a,{when:T(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:E.b,title:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(d,null,i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return I})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return D}));var n=a(0),i=a.n(n),r=a(5),c=a(643),l=a(32),o=a(1932),s=a(8),E=a(15),_=a(45),d=a(17),u=a(189),m=a(41);const T=Object(r.c)(u.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var b=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:m.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(T,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(E.vb,{color:_.a["blue-3"]}))},N=a(1933),p=a(71),O=a(227);const A=Object(r.c)(p.c)`
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
`,h=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,S=Object(r.c)(E.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var I,g=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(O.a),r=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:m.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(A,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},i.a.createElement(h,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(S,{color:_.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(I||(I={}));const f=Object(r.c)(p.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,D=Object(r.c)(p.g)`
  * {
    line-height: 1.4 !important;
  }
`,R=Object(r.c)(c.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:r,video:c,online:s})=>{let E;switch(t){default:case I.BASIC:E=e;break;case I.CONFIGURED:E=i.a.createElement(D,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!c&&s&&i.a.createElement(b,{video:c}));break;case I.STATUS:E=i.a.createElement(D,{alignItems:"center"},i.a.createElement(R,{variant:r}),i.a.createElement(f,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(l.a,null,a)));break;case I.UNCONFIGURED:E=i.a.createElement(D,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{section:n}),i.a.createElement(p.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!c&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{video:c}),i.a.createElement(p.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!c&&!s&&i.a.createElement(D,{alignItems:"center"},e))}return E}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(8),l=a(15),o=a(45),s=a(1936),E=a(189);const _=Object(r.c)(E.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(8),l=a(15),o=a(45),s=a(1936),E=a(71),_=a(43);const d=Object(r.c)(E.c)`
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
`,u=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,m=Object(r.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),a=Object(c.useSelector)(_.i),r=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},i.a.createElement(u,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(m,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return E.d})),a.d(t,"c",(function(){return E.a}));var n=a(0),i=a.n(n),r=a(5),c=a(15),l=a(71);const o=Object(r.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(c.g,null)),E=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(17),i=a(41);const r=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),r=a.n(i),c=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...l})=>{const o=a?12:i,s=a?0:n;return r.a.createElement("div",Object.assign({className:Object(c.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>r.a.createElement("div",{className:Object(c.b)("col-"+a,"offset-"+t)},e),E=a(2),_=a(666),d=a.n(_),u=a(71),m=a(1964),T=a.n(m),b=a(140),N=a.n(b),p=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const O=N.a.bind(T.a);var A=({className:e=null,status:t=o.NEUTRAL,...a})=>r.a.createElement(p.a,Object.assign({},a,{className:O("ubntStatusText","ubntStatusText--"+t,e)})),h=a(254),S=a(1944);const I=Object(c.c)(u.g)`
  border: 1px solid ${h.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,g=Object(c.c)(A)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var f=({state:e,className:t=null,...a})=>r.a.createElement(I,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),r.a.createElement(g,{message:S.b[e],status:o.WARNING})),D=a(322),R=a(82),v=a(8),C=a(45),L=a(70),w=a(20);const j={BORDER_WIDTH:2},y={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},P=({type:e,size:t,width:a,height:n})=>{switch(e){case D.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:r}=y;return{top:r,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function G({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:r,width:l,height:o}){const s=Object(v.useSelector)(D.selectHighlight),[E,_]=Object(L.c)(0),[d,u]=Object(L.c)(!1),m=Object(i.useRef)(null),T=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(c.a)({"&::before":{border:`${j.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...P({type:e,size:r,width:l,height:o}),...a}}),[d,e,a,r,l,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>E)_(E+1);else if(m.current&&t===s.id&&s.type===e){window.getComputedStyle(m.current).border,window.getComputedStyle(m.current).boxShadow;let t=m.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:r}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:r}=t.current.getBoundingClientRect();switch(a){case D.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=y,c=r+Object(w.a)(n,"top",a),l=c+i+Object(w.a)(n,"paddingBottom",e)+Object(w.a)(n,"paddingTop",t)+2*j.BORDER_WIDTH;return{bottom:l,height:l-c,top:c}}}})({height:o,highlightRef:m,type:e,highlightStyle:a}),{bottom:c,height:l,top:s}=n.getBoundingClientRect(),E=t>c,_=i>l,d=15;r<s||_?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+r-d}):E&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-c+d})}u(!0)}},[o,E]),Object(i.useEffect)(()=>{d||s.id!==t||_(e=>e+1),d&&s.id!==t&&u(!1)},[s.id,d]),{highlightClassName:T,highlightRef:m}}const x=Object(c.c)(d.a)`
  color: ${R.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=Object(c.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,W=c.a`
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
`;var U=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:_=null,offset:d=0,size:u=5,useHtml:m=!1})=>{const{highlightClassName:T,highlightRef:b}=G({type:D.SearchHighlightType.FIELD,forId:_,highlightStyle:s,highlightDelay:o,size:u}),N=!(!n&&!a),p={["col-"+u]:!0,["offset-"+d]:d>0},O=m?E.b:E.c;return r.a.createElement("div",{className:Object(c.b)(p,W,T),ref:b},r.a.createElement("div",{className:"mb-1"},r.a.createElement(M,{className:"settingsGridLabel",htmlFor:_,primary:!0},l?e:r.a.createElement(E.c,{id:e})),t&&r.a.createElement(f,{state:t})),N&&r.a.createElement("div",null,r.a.createElement(x,{className:"settingsGridDescription",htmlFor:_,secondary:!0},n?r.a.createElement(O,{id:n,values:i}):a)))};const H=c.a`
  max-width: 960px;
`,B=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:l=!1})=>{const o=n?4:i;return r.a.createElement("div",{className:Object(c.b)("row","mt-"+o,l?null:H,t),ref:a},e)};var k=r.a.forwardRef((e,t)=>r.a.createElement(B,Object.assign({forwardedRef:t},e)));var F=e=>r.a.createElement("div",{className:"mt-2 mb-6"},r.a.createElement(p.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const $=Object(c.c)("div")`
  flex: 0 1 480px;
`,V=Object(c.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:l=null})=>{const o=h.b.sectionColors.common;return r.a.createElement(k,{className:t,marginTop:0},r.a.createElement($,null,r.a.createElement(V,{className:Object(c.b)("mt-8","type-larger"),style:{color:o}},r.a.createElement(E.c,{id:e})),a&&r.a.createElement(p.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(c.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>r.a.createElement(z,{className:Object(c.b)("container","px-8",t),noDivider:n},r.a.createElement("div",{className:Object(c.b)({"pb-8":!a})},e));q.Content=l,q.Icon=s,q.Label=U,q.Row=k,q.SectionHeader=F,q.Subheader=Y;var X=a(284);const K=Object(c.c)(X.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Q=e=>r.a.createElement(K,Object.assign({},e)),J=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(v.useSelector)(Z.C);return e>0?r.a.createElement(ee.a,{alignItems:"center"},r.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",r.a.createElement(E.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):r.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1949:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchPortForwardRules",(function(){return l})),a.d(t,"fetchPortForwardRule",(function(){return o})),a.d(t,"savePortForwardRule",(function(){return s})),a.d(t,"removePortForwardRule",(function(){return E})),a.d(t,"MODEL",(function(){return i})),a.d(t,"PATH",(function(){return r})),a.d(t,"selectPortForwardRules",(function(){return u})),a.d(t,"selectPortForwardData",(function(){return m})),a.d(t,"selectPortForwardRecord",(function(){return T})),a.d(t,"PortForwardInterface",(function(){return b}));var n=a(6),i="portforward",r="/api/s/{site}/rest/".concat(i),c=a(28);const l=(e={},t={})=>Object(n.q)(i,r,e,{idField:"_id",...t}),o=e=>Object(n.t)(i,r,e),s=e=>{const t=Object(c.a)("SETTINGS_GATEWAY_PORT_FORWARD_CREATE_ERROR","SETTINGS_GATEWAY_PORT_FORWARD_CREATE_SUCCESS"),{_id:a}=e;return a?Object(n.C)(i,a,`${r}/${a}`,e,{},t):Object(n.i)(i,r,e,{},t)},E=({_id:e,name:t})=>Object(n.n)(i,e,`${r}/${e}`,{},Object(c.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_SUCCESS_TOAST",{name:t}));var _=a(20),d=a(4);const u=Object(n.A)(l()),m=Object(d.a)(u,c.c),T=e=>t=>{const a=Object(n.w)(o(e),t.models);return Object(_.a)(a,"data",{})};var b;!function(e){e.WAN="wan",e.WAN2="wan2",e.BOTH="both"}(b||(b={}))},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return d})),a.d(t,"saveDhcpOption",(function(){return u})),a.d(t,"removeDhcpOption",(function(){return m})),a.d(t,"DHCP_OPTIONS",(function(){return r})),a.d(t,"typeOptions",(function(){return c})),a.d(t,"integerOptions",(function(){return l})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return o})),a.d(t,"DHCP_CODE",(function(){return s})),a.d(t,"MODEL",(function(){return E})),a.d(t,"PATH",(function(){return _})),a.d(t,"selectDhcpOptions",(function(){return b})),a.d(t,"selectDhcpOptionsData",(function(){return N})),a.d(t,"selectDhcpOptionsCodes",(function(){return p})),a.d(t,"DhcpOptionTypes",(function(){return O})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return A}));var n=a(28),i=a(6);const r={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},c=[{value:r.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:r.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:r.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:r.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:r.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:r.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],l=[8,16,32].map(e=>({value:e,label:e})),o="dhcpd_user_option_",s={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},E="dhcpOptions",_="/api/s/{site}/rest/dhcpoption",d=(e={})=>Object(i.q)(E,_,void 0,{...e,idField:"_id"}),u=e=>{const{_id:t}=e;return t?Object(i.C)(E,t,`${_}/${t}`,e):Object(i.i)(E,_,e)},m=({_id:e,name:t})=>Object(i.n)(E,e,`${_}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var T=a(4);const b=Object(i.A)(d()),N=Object(T.a)(b,n.c),p=Object(T.a)(N,e=>e.map(({code:e})=>e));var O;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(O||(O={}));const A=(e,t,a,n)=>{let i;switch(a){case O.BOOLEAN:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case O.HEX_ARRAY:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case O.INTEGER:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case O.IP_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case O.MAC_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case O.TEXT:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:i="COMMON_UNKNOWN"}const r=e.formatMessage({id:i});return"integer"!==a?r:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},1961:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchRouting",(function(){return l})),a.d(t,"saveRouting",(function(){return o})),a.d(t,"removeRouting",(function(){return s})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return c})),a.d(t,"selectRouting",(function(){return _})),a.d(t,"selectRoutingData",(function(){return d})),a.d(t,"StaticRouteGatewayType",(function(){return u})),a.d(t,"StaticRouteType",(function(){return m}));var n=a(28),i=a(6),r="routing",c="/api/s/{site}/rest/routing";const l=(e={},t={})=>Object(i.q)(r,c,e,{idField:"_id",...t}),o=e=>{const{_id:t}=e;return t?Object(i.C)(r,t,`${c}/${t}`,e):Object(i.i)(r,c,e)},s=({_id:e,name:t})=>Object(i.n)(r,e,`${c}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_REMOVE_SUCCESS_TOAST",{name:t}));var E=a(4);const _=Object(i.A)(l()),d=Object(E.a)(_,n.c);var u,m;!function(e){e.DEFAULT="default",e.SWITCH="switch"}(u||(u={})),function(e){e.NEXT_HOP="nexthop-route",e.INTERFACE="interface-route",e.BLACK_HOLE="blackhole"}(m||(m={}))},1999:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(28),i=a(6),r=a(2e3);const c=(e={})=>Object(i.q)(r.a,r.b,void 0,{...e,idField:"_id"}),l=e=>{const{_id:t}=e;return t?Object(i.C)(r.a,t,`${r.b}/${t}`,e):Object(i.i)(r.a,r.b,e)},o=({_id:e,service:t})=>Object(i.n)(r.a,e,`${r.b}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_DELETE_SUCCESS_TOAST",{name:t}))},2e3:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dynamicdns",i="/api/s/{site}/rest/".concat(n)},2002:function(e,t,a){"use strict";a.r(t);var n=a(2025);a.d(t,"selectDynamicDns",(function(){return n.a})),a.d(t,"selectDynamicDnsData",(function(){return n.b}));var i=a(2e3);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var r=a(1999);a.d(t,"fetchDynamicDns",(function(){return r.a})),a.d(t,"saveDynamicDns",(function(){return r.c})),a.d(t,"removeDynamicDns",(function(){return r.b}));var c=a(2026);for(var l in c)["default","selectDynamicDns","selectDynamicDnsData","MODEL","PATH","fetchDynamicDns","saveDynamicDns","removeDynamicDns"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return c[e]}))}(l)},2025:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(4),i=a(6),r=a(28),c=a(1999);const l=Object(i.A)(Object(c.a)()),o=Object(n.a)(l,r.c)},2026:function(e,t){},2032:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5),l=a(782);const o=(e,t,a)=>c.a`
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
`,s=i.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:a=!0,delay:c=70,initialDelay:s=0,children:E,..._}=e,d=Object(l.a)(),u=Object(n.useMemo)(()=>i.a.Children.map(E,(e,n)=>null===e?e:i.a.createElement(r.a,Object.assign({appear:a||!d,in:a||!d,timeout:t,classNames:o(n,c,s),mountOnEnter:!0},_),e)),[E,c,s,a,d,_,t]);return i.a.createElement(i.a.Fragment,null,u)});t.a=s},2103:function(e,t,a){"use strict";a.d(t,"c",(function(){return E})),a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return u}));var n=a(0),i=a.n(n),r=a(2),c=a(30),l=a(105),o=a(2130);const s=()=>c.a.string().label("SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL").matches(l.j,i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"})),E=(e,t)=>{const a={arrayFieldName:"wan_ip_aliases",stringFieldName:"wan_ip_alias",errorMessage:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_PLACEHOLDER_SUBNET_UNIQUE"})};return c.a.object().shape({editActive:c.a.bool(),...t===o.a.ADD_IP_RANGE?{new_wan_ip_alias_start:s().isIPUnique({formValues:null,...a}).CIDRMaskMatch().CIDRCorrectRange(),new_wan_ip_alias_stop:s().isIPUnique({formValues:null,...a}).CIDRMaskMatch().CIDRCorrectRange()}:{new_wan_ip_alias:s().isIPUnique({formValues:null,...a})},wan_ip_aliases:c.a.array().of(c.a.object().shape({wan_ip_alias:s().isIPUnique({formValues:e,...a}).required()}))})},_={DOWNLOAD:{MIN:1},UPLOAD:{MIN:1}},d=[{value:"failover-only",label:"SETTINGS_WAN_VALUES_LOAD_BALANCE_FAILOVER"},{value:"weighted",label:"SETTINGS_WAN_VALUES_LOAD_BALANCE_WEIGHTED"}],u=[{value:"",label:"None"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"}]},2119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return D})),a.d(t,"b",(function(){return R})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return C}));var n=a(0),i=a.n(n),r=a(2),c=a(558),l=a(105),o=a(30),s=a(86),E=a(100),_=a(2103);var d=e=>E.a.object().shape({name:o.e,...e&&{mac_override_enabled:E.a.boolean().label("SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS_CLONE").required(),mac_override:E.a.string().when("mac_override_enabled",{is:!0,then:E.a.string().label("SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS").matches(l.p,i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_MAC"})).unicastMAC().required()})},wan_type_v6:E.a.string(),wan_type:E.a.string(),wan_netmask:E.a.string().when("wan_type",{is:s.d.STATIC,then:E.a.string().label("SETTINGS_INTERNET_WAN_LABEL_SUBNET_MASK").matches(l.i,i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_SUBNET"})).required()}),wan_ip:E.a.string().when("wan_type",{is:s.d.STATIC,then:o.b.clone().label("SETTINGS_INTERNET_WAN_LABEL_IP_ADDRESS").required()}),wan_gateway:E.a.string().when("wan_type",{is:s.d.STATIC,then:o.b.clone().label("SETTINGS_INTERNET_WAN_LABEL_ROUTER").required()}),wan_gateway_v6:E.a.string().when("wan_type_v6",{is:s.e.STATIC,then:o.d.clone().label("SETTINGS_INTERNET_WAN_LABEL_ROUTER").required()}),wan_dhcpv6_pd_size:E.a.number().when("wan_type_v6",{is:"dhcpv6",then:E.a.number().label("SETTINGS_INTERNET_WAN_LABEL_IPV6_DHCP_PD_SIZE").required().min(48).max(64)}),wan_ipv6:E.a.string().when("wan_type_v6",{is:"static",then:o.d.clone().label("SETTINGS_INTERNET_WAN_LABEL_IPV6_ADDRESS").required()}),wan_prefixlen:E.a.number().when("wan_type_v6",{is:"static",then:E.a.number().label("SETTINGS_INTERNET_WAN_LABEL_PREFIX_LENGTH").required()}),wan_vlan_enabled:E.a.boolean().label("SETTINGS_WIFI_ADVANCED_SPECIFY_VLAN_LABEL").required(),wan_vlan:E.a.number().when("wan_vlan_enabled",{is:!0,then:E.a.number().label("SETTINGS_INTERNET_WAN_LABEL_VLAN_ID").min(0).max(c.a.MAX_VLAN)}),wan_load_balance_type:E.a.string(),wan_load_balance_weight:E.a.number().when("wan_load_balance_type",{is:"weighted",then:E.a.number().label("SETTINGS_INTERNET_WAN_LABEL_LOAD_BALANCING_WEIGHT").required().min(1).max(100)}),wan_smartq_enabled:E.a.bool(),wan_smartq_up_rate:E.a.string().when("wan_smartq_enabled",{is:!0,then:E.a.string().required(i.a.createElement(r.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_UP_RATE_REQUIRED"}))}),wan_smartq_down_rate:E.a.string().when("wan_smartq_enabled",{is:!0,then:E.a.string().required(i.a.createElement(r.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_DOWN_RATE_REQUIRED"}))}),wan_dns1:o.b,wan_dns2:o.b,wan_username:E.a.string().when("wan_type",{is:s.d.PPPOE,then:E.a.string().label("SETTINGS_INTERNET_WAN_LABEL_USERNAME").required()}),x_wan_password:E.a.string().when("wan_type",{is:s.d.PPPOE,then:E.a.string().label("SETTINGS_INTERNET_WAN_LABEL_PASSWORD").required()}),wan_provider_capabilities:E.a.object().shape({hasAtleastOneDefined:E.a.bool(),download_kilobits_per_second:E.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL").when("hasAtleastOneDefined",{is:!0,then:E.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL").min(_.a.DOWNLOAD.MIN).required()}),upload_kilobits_per_second:E.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL").when("hasAtleastOneDefined",{is:!0,then:E.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL").min(_.a.UPLOAD.MIN).required()})})}),u=a(643),m=a(32),T=a(445),b=a(5),N=a(255),p=a(117),O=a(21),A=a(61),h=a(59);const S=Object(b.c)(p.c)`
  margin: 0 ${({theme:e})=>e.space[2]}px;
`,I=Object(b.c)(u.a)`
  margin-right: ${({theme:e})=>e.space[3]}px;
`,g=Object(b.c)(m.a)`
  display: flex;
  flex-direction: row;
`,f=(e,t,a)=>e>=100?i.a.createElement(T.a,{portal:!0,width:150,message:i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,t),i.a.createElement(m.a,{color:"secondary"},a))},i.a.createElement(m.a,{truncate:!0,color:"danger"},"100%")):e.toFixed(0)+"%",D=[{id:"wan-networks-table-name",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_NAME"}),renderCell:({name:e,isWanPortUp:t})=>i.a.createElement(O.a,{alignItems:"center",width:"100%"},i.a.createElement(I,{variant:t?"success":"neutral"}),i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e)),sortable:!0,compare:Object(A.a)(({name:e})=>e.toLowerCase()),minWidth:140,maxWidth:140},{id:"wan-networks-table-ip",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_IP"}),renderCell:({ip:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({ip:e})=>e),minWidth:120,maxWidth:130},{id:"wan-networks-table-isp",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_ISP"}),renderCell:({isp:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({isp:e})=>e.toLowerCase()),minWidth:140,maxWidth:160},{id:"wan-networks-table-location",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_LOCATION"}),renderCell:({location:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({location:e})=>e.toLowerCase()),minWidth:100,maxWidth:120},{id:"wan-networks-table-uptime",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_UPTIME"}),renderCell:({uptime:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({uptime:e})=>e),minWidth:80,maxWidth:100},{id:"wan-networks-table-peakUse",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_PEAK"}),renderCell:({peakUseDownload:e,peakUseUpload:t})=>{if(-1===Math.sign(e)&&-1===Math.sign(t))return i.a.createElement(m.a,{color:"tertiary"},i.a.createElement(r.c,{id:"COMMON_HYPHEN"}));const a=-1!==Math.sign(e)?f(e,i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_DOWNLOAD_TITLE"}),i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_MESSAGE"})):"-",n=-1!==Math.sign(t)?f(t,i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_UPLOAD_TITLE"}),i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_MESSAGE"})):"-";return i.a.createElement(g,{truncate:!0,color:"tertiary"},n,"/",a)},sortable:!0,compare:Object(A.a)(({peakUse:e})=>e),minWidth:170}],R=[{id:"wan-backup-table-name",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_NAME"}),renderCell:({name:e,device:t})=>t?i.a.createElement(O.a,{alignItems:"center",width:"100%"},i.a.createElement(u.a,{variant:Object(h.H)(t)}),i.a.createElement(S,{device:t}),i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e)):e,sortable:!0,compare:Object(A.a)(({name:e})=>e.toLowerCase()),minWidth:140,maxWidth:140},{id:"wan-backup-table-ip",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_IP"}),renderCell:({ip:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({ip:e})=>e),minWidth:120,maxWidth:130},{id:"wan-backup-table-isp",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_ISP"}),renderCell:({isp:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({isp:e})=>e.toLowerCase()),minWidth:140,maxWidth:160},{id:"wan-backup-table-location",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_LOCATION"}),renderCell:({location:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({location:e})=>e.toLowerCase()),minWidth:100,maxWidth:120},{id:"wan-backup-table-uptime",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_UPTIME"}),renderCell:({uptime:e})=>i.a.createElement(m.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(A.a)(({uptime:e})=>e.toLowerCase()),minWidth:80,maxWidth:100},{id:"wan-backup-table-dataUsage",label:i.a.createElement(r.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_DATA_USAGE"}),renderCell:({dataRemaining:e})=>{const{softLimitBytes:t,usedBytes:a}=e,n=Object(N.c)(t,"bytes","JEDEC"),r=Object(N.c)(a,"bytes","JEDEC"),c=`${r}/${n}`;return i.a.createElement(m.a,{truncate:!0,color:"tertiary"},0===t?r:c)},sortable:!0,compare:Object(A.a)(({dataRemaining:e})=>e),minWidth:170}];var v=[{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_DHCP_V4",value:s.d.DHCP},{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_STATIC_IP",value:s.d.STATIC},{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_PPPOE",value:s.d.PPPOE}],C=[{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_DISABLED",value:s.e.DISABLED},{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_DHCP",value:s.e.DHCPV6},{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_STATIC_IP",value:s.e.STATIC}]},2130:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.ADD_IP="add_ip",e.ADD_IP_RANGE="add_ip_range"}(n||(n={}))}}]);