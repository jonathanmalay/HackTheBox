(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[37],{1819:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(451),c=a(70),l=a(6),o=a(2),s=a(8),m=a(36),_=a(215),E=a(18),d=a(1938),u=a(663),p=a(27),b=a(16),h=a(5),O=a(44),g=a(1142),A=a(228),S=a.n(A),I=a(1736),R=a(1739),D=a(1914),T=a(1737),N=a(32),f=a(105),v=a(50),x=a(1937),L=a(1947),C=a(62),j=a(30),P=a(2167);const M=Object(h.c)(I.a)`
  height: 100%;
  margin-bottom: 0 !important;
`,y=[{id:"ip",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS"}),renderCell:({ip:e})=>e,sortable:!1,minWidth:120},{id:"port",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT"}),renderCell:({port:e})=>e,sortable:!1,minWidth:80},{id:"x_secret",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"}),renderCell:({x_secret:e})=>e.replace(/./g,"•"),sortable:!1,minWidth:180}],F=[{id:"ip",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS"}),renderCell:({ip:e})=>e,sortable:!1,minWidth:120},{id:"port",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT"}),renderCell:({port:e})=>e,sortable:!1,minWidth:80},{id:"x_secret",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"}),renderCell:({x_secret:e})=>e.replace(/./g,"•"),sortable:!1,minWidth:180}],w={authIp:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS",authPort:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT",authX_secret:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"},U={acctIp:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS",acctPort:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT",acctX_secret:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD"},V=Object(g.a)(e=>[{inline:!0,name:"auth_server"===e?"authIp":"acctIp",placeholder:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS",type:"text",validated:!0,autoComplete:"disabled"},{inline:!0,name:"auth_server"===e?"authPort":"acctPort",placeholder:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT",type:"text",validated:!0},{inline:!0,name:"auth_server"===e?"authX_secret":"acctX_secret",placeholder:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD",type:"password",validated:!0}]),G=j.a.object().shape({editActive:j.a.bool(),ip:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").when("editActive",{is:!1,then:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(f.h,i.a.createElement(o.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}).when("auth_servers",{is:[],then:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(f.h,i.a.createElement(o.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),port:j.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").when("editActive",{is:!1,then:j.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(r.RADIUS_LIMITS.MIN_PORT).max(r.RADIUS_LIMITS.MAX_PORT).required()}),x_secret:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").when("editActive",{is:!1,then:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),auth_servers:j.a.array().of(P.c)}),B=j.a.object().shape({editActive:j.a.bool(),accounting_enabled:j.a.bool(),ip:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").when("editActive",{is:!1,then:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(f.h,i.a.createElement(o.c,{id:"COMMON_VALIDATION_VALID_IPV4"}))}),port:j.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").when("editActive",{is:!1,then:j.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(r.RADIUS_LIMITS.MIN_PORT).max(r.RADIUS_LIMITS.MAX_PORT)}),x_secret:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").when("editActive",{is:!1,then:j.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),acct_servers:j.a.array().of(P.c)}),$=Object(g.a)((e,t)=>({editActive:!1,authIp:"",authPort:t.auth_port,authX_secret:"",auth_servers:e.auth_servers})),k=Object(g.a)((e,t)=>({editActive:!1,acctIp:"",acctPort:t.acct_port,acctX_secret:"",acct_servers:e.acct_servers,accounting_enabled:e.accounting_enabled}));var z=({authError:e,acctError:t})=>{const a=Object(O.e)(),{setFieldValue:r,values:c}=a,l=Object(s.useSelector)(v.selectRadiusSettings),m=Object(n.useCallback)(e=>{r("auth_servers",(e.auth_servers||[]).concat({ip:e.authIp,port:e.authPort,x_secret:e.authX_secret,id:S()()}))},[r]),_=Object(n.useCallback)(e=>{r("acct_servers",(e.acct_servers||[]).concat({ip:e.acctIp,port:e.acctPort,x_secret:e.acctX_secret,id:S()()}))},[r]),E=Object(n.useCallback)((e,t)=>r(t,[...e]),[r]),d=Object(n.useCallback)((e,t)=>r(t,c[t].filter(({id:t})=>t!==e.id)),[r,c]);return i.a.createElement(R.a,{padding:"none"},e&&!c.auth_servers.length&&i.a.createElement(M,null,i.a.createElement(D.a,null),i.a.createElement(T.a,{wrap:!0},i.a.createElement(N.a,{color:"danger"},e)," ")),i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"auth_servers",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_AUTH_SERVERS"})}),i.a.createElement(T.a,{wrap:!0},i.a.createElement(x.d,{fieldName:"auth_servers",columns:y,fieldLabels:w,initialValues:$(c,l),items:c.auth_servers||[],newFields:V("auth_server"),validationSchema:G,onAddItem:e=>m(e),onEditSubmit:e=>E(e,"auth_servers"),onRemoveItem:e=>d(e,"auth_servers"),max:4}))),i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"accounting_enabled",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_ACCOUNTING"})}),i.a.createElement(T.a,null,i.a.createElement(C.Field,{name:"accounting_enabled",type:"checkbox"}))),c.accounting_enabled&&t&&!c.acct_servers.length&&i.a.createElement(M,null,i.a.createElement(D.a,null),i.a.createElement(T.a,{wrap:!0},i.a.createElement(N.a,{color:"danger"},t)," ")),i.a.createElement(L.a,{in:c.accounting_enabled},i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"acct_servers",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_ACCOUNTING_SERVERS"})}),i.a.createElement(T.a,{wrap:!0},i.a.createElement(x.d,{fieldName:"acct_servers",columns:F,fieldLabels:U,initialValues:k(c,l),items:c.acct_servers||[],newFields:V("acct_server"),validationSchema:B,onAddItem:e=>_(e),onEditSubmit:e=>E(e,"acct_servers"),onRemoveItem:e=>d(e,"acct_servers"),max:4})))),i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"interim_update_enabled",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_INTERIM_UPDATE"})}),i.a.createElement(T.a,null,i.a.createElement(C.Field,{name:"interim_update_enabled",type:"checkbox"}))),i.a.createElement(L.a,{in:c.interim_update_enabled},i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"interim_update_interval",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_INTERIM_UPDATE_INTERVAL"})}),i.a.createElement(T.a,{column:!0},i.a.createElement(C.Field,{type:"number",full:!0,name:"interim_update_interval"})))))};const H=e=>e.map(({id:e,...t})=>({...t}));var W=a(1818);var X=()=>i.a.createElement(R.a,null,i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"input",htmlFor:"name",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_NAME"})}),i.a.createElement(T.a,{column:!0},i.a.createElement(C.Field,{name:"name",type:"input",full:!0}))),i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"vlan_enabled",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_WIRED"}),description:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_DESCRIPTION_ENABLE_WIRED"})}),i.a.createElement(T.a,null,i.a.createElement(C.Field,{name:"vlan_enabled",type:"checkbox"}))),i.a.createElement(I.a,null,i.a.createElement(D.a,{alignWith:"toggleSmall",htmlFor:"vlan_wlan_mode",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_ENABLE_WIRELESS"}),description:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_DESCRIPTION_ENABLE_WIRELESS"})}),i.a.createElement(T.a,null,i.a.createElement(C.Field,{name:"vlan_wlan_mode",type:"checkbox"}))));var q=({items:e,openAccordions:t,setOpenAccordions:a})=>{const r=Object(n.useRef)(null),{errors:l}=Object(O.e)();return Object(c.g)(r,l),i.a.createElement("div",{ref:r},i.a.createElement(X,null),i.a.createElement(W.a,{items:e,variant:"primary",openPanelIds:t,onClickPanel:e=>a(e)}))};const Y=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t];var Q=Object(o.f)(({intl:e})=>{const{profileId:t}=Object(m.m)(),a=Object(s.useDispatch)(),l=Object(s.useSelector)(E.x),h=Object(s.useSelector)(r.selectRadiusProfile)(t),[O,g]=Object(n.useReducer)(Y,[]),[A,I]=Object(n.useState)(),[R,D]=Object(n.useState)(),T=Object(n.useMemo)(()=>(e=>({attr_no_delete:!1,attr_hidden_id:"",name:"",use_usg_auth_server:!1,auth_servers:[],acct_servers:[],vlan_enabled:!1,vlan_wlan_mode:!1,accounting_enabled:!1,interim_update_enabled:!1,interim_update_interval:"3600",...e?{...e,auth_servers:e.auth_servers.map(e=>({...e,id:S()()})),acct_servers:e.acct_servers.map(e=>({...e,id:S()()})),vlan_wlan_mode:e.vlan_wlan_mode===r.RADIUS_VLAN_OPTIONS.ENABLED}:{}}))(h),[h]),N=Object(c.h)(),f=Object(c.n)({component:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_TITLE"}),message:"radius-profile"},"radius-profile",(null==h?void 0:h._id)?h.name:void 0),v=Object(n.useCallback)((t,{setSubmitting:n})=>{if(!t.auth_servers.length||t.accounting_enabled&&!t.acct_servers.length)return O.includes("radius-profile-settings")||g("radius-profile-settings"),!t.auth_servers.length&&I(e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_SERVER_ERROR"},{name:e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_AUTH_SERVER"})})),t.accounting_enabled&&!t.acct_servers.length&&D(e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_SERVER_ERROR"},{name:e.formatMessage({id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_ACCOUNTING_SERVER"})})),void n(!1);const i={...t,vlan_wlan_mode:t.vlan_wlan_mode?r.RADIUS_VLAN_OPTIONS.ENABLED:r.RADIUS_VLAN_OPTIONS.DISABLED,auth_servers:H(t.auth_servers),acct_servers:t.accounting_enabled?H(t.acct_servers):[]};a(Object(r.saveRadiusProfile)(i)).then(()=>{a(Object(p.c)({icon:b.a.success,message:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_TOAST_SAVE_SUCCESS"})),N()}).catch(e=>{a(Object(p.c)({errorMessage:e.msg,errorValues:e,icon:b.a.danger,message:"SETTINGS_ADVANCED_RADIUS_SERVER_FORM_TOAST_SAVE_FAILURE"})),n(!1)})},[a,N,e,O]),x=Object(n.useMemo)(()=>[{id:"radius-profile-settings",label:i.a.createElement(o.c,{id:"SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_SECTION_LABEL_RADIUS_SETTINGS"}),renderContent:()=>i.a.createElement(z,{authError:A,acctError:R})}],[R,A]),L=Object(n.useCallback)(()=>a(Object(u.b)({name:T.name,onConfirm:()=>a(Object(r.removeRadiusProfile)(T._id,T.name)).then(N())})),[a,N,T._id,T.name]);return i.a.createElement(d.b,{initialValues:T,isEdit:!0,isView:l,title:f,validationSchema:P.a,goBack:N,showBack:!0,onEscClicked:N,onSubmit:v,footerActiveOverride:!!(null==T?void 0:T._id),customFooterButtons:e=>(null==T?void 0:T._id)&&i.a.createElement(_.a,{disabled:e,type:"button",variant:"default",onClick:L},i.a.createElement(o.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(q,{items:x,openAccordions:O,setOpenAccordions:g}))});t.default=()=>Object(c.f)([Object(r.fetchRadiusProfiles)(void 0,{crudCacheStrategy:{type:l.a.CACHE}})],i.a.createElement(Q,null))},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return _})),a.d(t,"d",(function(){return E})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return U}));var n=a(0),i=a.n(n),r=a(5),c=a(648),l=a(1136),o=a(208);const s=Object(r.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,m=(Object(r.c)(c.Link)`
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
`,E=e=>i.a.createElement(m,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),d=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1851),p=a(375);const b=Object(r.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,h=e=>r.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(p.b)(({theme:e,...t})=>i.a.createElement(b,Object.assign({headerRowClassName:h(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(1934),g=a(529),A=a(1743),S=a(2),I=a(30),R=a(15),D=a(2846),T=a(44),N=a(71),f=a(62);const v=Object(r.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,x=Object(r.c)(N.c)`
  > * {
    vertical-align: middle;
  }
`,L=Object(r.c)(N.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,C=Object(r.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,j=Object(r.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,P=Object(r.c)(N.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,M=Object(r.c)(L,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,y=Object(r.c)(N.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,F=Object(r.c)(N.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,w=Object(r.c)("div")`
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
`;var U=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:r,onRemoveItem:c,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:m=!1,max:E,useWindowTable:d=!1,addButtonText:p="COMMON_ACTION_ADD",invalid:b,...h}){const O=Object(n.useContext)(N.l),[U,V]=Object(n.useState)(!0),G=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(_,null,i.a.createElement(x,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{V(!1),c(t),await Promise.resolve(),V(!0)}},i.a.createElement(S.c,{id:"COMMON_ACTION_REMOVE"}))),[e,V,c]),B=Object(n.useMemo)(()=>d?D.a:u.a,[d]);return i.a.createElement(T.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>m?I.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:m,handleReset:_,setTouched:d})=>i.a.createElement(i.a.Fragment,null,t.map((a,c)=>i.a.createElement(v,{inline:a.inline,isLast:c===t.length-1,key:a.name},i.a.createElement(L,{flexDirection:"column",width:"100%"},i.a.createElement(f.Field,Object.assign({disabled:n.editActive||n[e].length>=E,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:b,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!O&&r&&c===t.length-1&&i.a.createElement(C,null,i.a.createElement(x,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),V(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await d(a,!0);t.find(e=>i[e.name])||r(n),V(!0)},Icon:R.wb,disabled:n.editActive||n[e].length>=E||!n[a.name]},i.a.createElement(S.c,{id:p}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,r)=>i.a.createElement(P,{key:n.id,width:"100%"},h.columns.map((n,c)=>t[c]?i.a.createElement(M,{key:n.id,isLast:c===h.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(f.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${r}][${n.id}]`,type:t[c].type,fast:!0},"dropdown"!==t[c].type?{}:{options:t[c].options,translateLabel:!0,translateOptions:t[c].translateOptions,translatePlaceholder:!0,type:t[c].type,validated:t[c].validated}))):null))),i.a.createElement(y,{justifyContent:"flex-end",width:"100%"},i.a.createElement(F,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{_(),s("editActive",!1)}},i.a.createElement(S.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(N.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:m,disabled:Object(g.a)(Object(A.a)(n,"editActive"),Object(A.a)(o,"editActive"))},i.a.createElement(S.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(v,null,i.a.createElement(j,null,i.a.createElement(x,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{_(),s("editActive",!0)},Icon:R.ub},i.a.createElement(S.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&U&&i.a.createElement(w,null,i.a.createElement(B,{columns:h.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:c?G:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(2),l=a(1946),o=a.n(l),s=a(1741),m=a(520),_=a(521);const E=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),d=Object(_.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),p=Object(n.useCallback)(e=>(e={},t={})=>d(e,t)&&u(e,t),[d,u]);return!!e&&i.a.createElement(o.a,{when:p(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:m.b,title:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(E,null,i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,r]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{r(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return R})),a.d(t,"b",(function(){return T})),a.d(t,"c",(function(){return N}));var n=a(0),i=a.n(n),r=a(5),c=a(643),l=a(32),o=a(1932),s=a(8),m=a(15),_=a(45),E=a(17),d=a(189),u=a(41);const p=Object(r.c)(d.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var b=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(E.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(E.e)())}}))},[t,e]);return i.a.createElement(p,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(m.vb,{color:_.a["blue-3"]}))},h=a(1933),O=a(71),g=a(227);const A=Object(r.c)(O.c)`
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
`,I=Object(r.c)(m.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var R,D=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(g.a),r=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(E.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(E.e)())}}))},[t,e]);return i.a.createElement(A,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},i.a.createElement(S,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(I,{color:_.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(R||(R={}));const T=Object(r.c)(O.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,N=Object(r.c)(O.g)`
  * {
    line-height: 1.4 !important;
  }
`,f=Object(r.c)(c.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:r,video:c,online:s})=>{let m;switch(t){default:case R.BASIC:m=e;break;case R.CONFIGURED:m=i.a.createElement(N,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!c&&s&&i.a.createElement(b,{video:c}));break;case R.STATUS:m=i.a.createElement(N,{alignItems:"center"},i.a.createElement(f,{variant:r}),i.a.createElement(T,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(l.a,null,a)));break;case R.UNCONFIGURED:m=i.a.createElement(N,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{section:n}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!c&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{video:c}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(l.a,null,a))),!!c&&!s&&i.a.createElement(N,{alignItems:"center"},e))}return m}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(8),l=a(15),o=a(45),s=a(1936),m=a(189);const _=Object(r.c)(m.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(8),l=a(15),o=a(45),s=a(1936),m=a(71),_=a(43);const E=Object(r.c)(m.c)`
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
`,d=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,u=Object(r.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(c.useDispatch)(),a=Object(c.useSelector)(_.i),r=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},i.a.createElement(d,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(u,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m.d})),a.d(t,"c",(function(){return m.a}));var n=a(0),i=a.n(n),r=a(5),c=a(15),l=a(71);const o=Object(r.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(c.g,null)),m=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(17),i=a(41);const r=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return J})),a.d(t,"d",(function(){return K.a})),a.d(t,"f",(function(){return K.c})),a.d(t,"h",(function(){return K.e})),a.d(t,"g",(function(){return K.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),r=a.n(i),c=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...l})=>{const o=a?12:i,s=a?0:n;return r.a.createElement("div",Object.assign({className:Object(c.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>r.a.createElement("div",{className:Object(c.b)("col-"+a,"offset-"+t)},e),m=a(2),_=a(666),E=a.n(_),d=a(71),u=a(1964),p=a.n(u),b=a(140),h=a.n(b),O=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const g=h.a.bind(p.a);var A=({className:e=null,status:t=o.NEUTRAL,...a})=>r.a.createElement(O.a,Object.assign({},a,{className:g("ubntStatusText","ubntStatusText--"+t,e)})),S=a(254),I=a(1944);const R=Object(c.c)(d.g)`
  border: 1px solid ${S.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,D=Object(c.c)(A)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var T=({state:e,className:t=null,...a})=>r.a.createElement(R,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),r.a.createElement(D,{message:I.b[e],status:o.WARNING})),N=a(322),f=a(82),v=a(8),x=a(45),L=a(70),C=a(20);const j={BORDER_WIDTH:2},P={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},M=({type:e,size:t,width:a,height:n})=>{switch(e){case N.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:r}=P;return{top:r,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function y({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:r,width:l,height:o}){const s=Object(v.useSelector)(N.selectHighlight),[m,_]=Object(L.c)(0),[E,d]=Object(L.c)(!1),u=Object(i.useRef)(null),p=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(c.a)({"&::before":{border:`${j.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:x.a["blue-light-3"],show:E,style:{...M({type:e,size:r,width:l,height:o}),...a}}),[E,e,a,r,l,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>m)_(m+1);else if(u.current&&t===s.id&&s.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:r}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:r}=t.current.getBoundingClientRect();switch(a){case N.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=P,c=r+Object(C.a)(n,"top",a),l=c+i+Object(C.a)(n,"paddingBottom",e)+Object(C.a)(n,"paddingTop",t)+2*j.BORDER_WIDTH;return{bottom:l,height:l-c,top:c}}}})({height:o,highlightRef:u,type:e,highlightStyle:a}),{bottom:c,height:l,top:s}=n.getBoundingClientRect(),m=t>c,_=i>l,E=15;r<s||_?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+r-E}):m&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-c+E})}d(!0)}},[o,m]),Object(i.useEffect)(()=>{E||s.id!==t||_(e=>e+1),E&&s.id!==t&&d(!1)},[s.id,E]),{highlightClassName:p,highlightRef:u}}const F=Object(c.c)(E.a)`
  color: ${f.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,w=Object(c.c)(E.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,U=c.a`
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
`;var V=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:_=null,offset:E=0,size:d=5,useHtml:u=!1})=>{const{highlightClassName:p,highlightRef:b}=y({type:N.SearchHighlightType.FIELD,forId:_,highlightStyle:s,highlightDelay:o,size:d}),h=!(!n&&!a),O={["col-"+d]:!0,["offset-"+E]:E>0},g=u?m.b:m.c;return r.a.createElement("div",{className:Object(c.b)(O,U,p),ref:b},r.a.createElement("div",{className:"mb-1"},r.a.createElement(w,{className:"settingsGridLabel",htmlFor:_,primary:!0},l?e:r.a.createElement(m.c,{id:e})),t&&r.a.createElement(T,{state:t})),h&&r.a.createElement("div",null,r.a.createElement(F,{className:"settingsGridDescription",htmlFor:_,secondary:!0},n?r.a.createElement(g,{id:n,values:i}):a)))};const G=c.a`
  max-width: 960px;
`,B=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:l=!1})=>{const o=n?4:i;return r.a.createElement("div",{className:Object(c.b)("row","mt-"+o,l?null:G,t),ref:a},e)};var $=r.a.forwardRef((e,t)=>r.a.createElement(B,Object.assign({forwardedRef:t},e)));var k=e=>r.a.createElement("div",{className:"mt-2 mb-6"},r.a.createElement(O.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const z=Object(c.c)("div")`
  flex: 0 1 480px;
`,H=Object(c.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var W=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:l=null})=>{const o=S.b.sectionColors.common;return r.a.createElement($,{className:t,marginTop:0},r.a.createElement(z,null,r.a.createElement(H,{className:Object(c.b)("mt-8","type-larger"),style:{color:o}},r.a.createElement(m.c,{id:e})),a&&r.a.createElement(O.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const X=Object(c.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>r.a.createElement(X,{className:Object(c.b)("container","px-8",t),noDivider:n},r.a.createElement("div",{className:Object(c.b)({"pb-8":!a})},e));q.Content=l,q.Icon=s,q.Label=V,q.Row=$,q.SectionHeader=k,q.Subheader=W;var Y=a(284);const Q=Object(c.c)(Y.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var J=e=>r.a.createElement(Q,Object.assign({},e)),K=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(v.useSelector)(Z.C);return e>0?r.a.createElement(ee.a,{alignItems:"center"},r.a.createElement(m.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",r.a.createElement(m.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):r.a.createElement(m.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return F})),a.d(t,"a",(function(){return x}));var n=a(0),i=a.n(n),r=a(5),c=a(2),l=a(44),o=a(2847),s=a(2658),m=a(1929),_=a(783),E=a(71),d=a(1940),u=a(15),p=a(32),b=a(42),h=a(1847),O=a(782),g=a(1930);const A=r.a`
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
`;var S=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const l=Object(g.a)(),o=Object(O.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(h.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:A,mountOnEnter:!0},c),a)),[a,t,o,l,e,c]);return i.a.createElement(i.a.Fragment,null,s)};const I=r.a`
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
`;var R=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const l=Object(g.a)(),o=Object(O.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(h.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:I,mountOnEnter:!0},c),a)),[a,t,o,l,e,c]);return i.a.createElement(i.a.Fragment,null,s)};const D=Object(r.c)(E.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,T=Object(r.c)(E.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,N=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,f=Object(r.c)(E.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,v=Object(r.c)(p.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var x=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:r,ignoredPaths:c})=>{const{motif:l}=Object(b.a)();return i.a.createElement(R,{ignoredPaths:c},i.a.createElement(T,{flex:"none",height:"65px"},i.a.createElement(S,{ignoredPaths:c},i.a.createElement(E.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(D,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(f,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},i.a.createElement(u.f,{size:"original"}))),i.a.createElement(N,null,i.a.createElement(v,{weight:"bold"},e.component)),i.a.createElement(D,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&i.a.createElement(f,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(u.y,{size:"original"})))))))};const L=Object(r.c)(E.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,C=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,j=Object(r.c)(E.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,P=Object(r.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${_.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,M=Object(r.c)(E.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,y=Object(r.c)(E.k)`
  height: 100%;
  width: 100%;
`;var F=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:r,isView:o,showBack:_,title:u,unsavedChangesModalIgnoredPaths:p,onEscClicked:b,submitText:h="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:g,hidddenHeader:A,...S})=>i.a.createElement(l.c,Object.assign({enableReinitialize:!0},S),({dirty:r,handleReset:l,handleSubmit:S,isSubmitting:I})=>i.a.createElement(C,{autoComplete:"off",onSubmit:S},i.a.createElement(y,{vertical:!0},!A&&i.a.createElement(x,{goBack:a,hideClose:n,showBack:_,title:u,onEscClicked:b,ignoredPaths:p}),i.a.createElement(d.a,{ignoredPaths:p},i.a.createElement(M,{flex:"1"},i.a.createElement(L,{flex:"none",flexDirection:"column"},e))),!t&&!o&&i.a.createElement(m.a,{ignoredPaths:p,when:r&&!I}),(!o||O)&&i.a.createElement(P,{active:r||O},i.a.createElement(E.g,{justifyContent:g?"space-between":"flex-end",width:"100%",alignItems:"center"},g&&i.a.createElement(j,null,g(I)),!o&&i.a.createElement(E.g,null,i.a.createElement(s.a,{disabled:!r||I,type:"button",variant:"default",onClick:l},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!r||I,type:"submit",variant:"primary"},i.a.createElement(c.c,{id:h}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5),l=a(782),o=a(1930);const s=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,...m})=>{const _=Object(o.a)(),E=Object(l.a)(a),d=Object(n.useMemo)(()=>i.a.Children.map(c,a=>null===a?a:i.a.createElement(r.a,Object.assign({appear:t||!E||_,in:t||!E||_,timeout:e,classNames:s,mountOnEnter:!0},m),a)),[c,t,E,_,e,m]);return i.a.createElement(i.a.Fragment,null,d)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1947:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),c=a(5);const l=(e,t)=>c.a`
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
`;t.a=i.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:c="0 0 32px",wrap:o=!1,children:s,...m})=>{const _=Object(n.useMemo)(()=>i.a.Children.map(s,(n,c)=>i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,void 0),mountOnEnter:!0},m),null===n?i.a.createElement("div",null):n)),[s,a,t,m,e]);return o?i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,c),mountOnEnter:!0},m),i.a.createElement("div",null,s)):i.a.createElement(i.a.Fragment,null,_)})},2167:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return _}));var n=a(0),i=a.n(n),r=a(2),c=a(105),l=a(451),o=a(30);const s=o.a.object().shape({enabled:o.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SERVER"),x_secret:o.a.string().when("enabled",{is:!0,then:o.a.string().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SECRET").required()}),auth_port:o.a.number().when("enabled",{is:!0,then:o.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_AUTHENTICATION_PORT").required().min(l.RADIUS_LIMITS.MIN_PORT).max(l.RADIUS_LIMITS.MAX_PORT)}),acct_port:o.a.number().when("enabled",{is:!0,then:o.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_PORT").required().min(l.RADIUS_LIMITS.MIN_PORT).max(l.RADIUS_LIMITS.MAX_PORT)}),interim_update_interval:o.a.number().when("enabled",{is:!0,then:o.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_INTERIM_INTERVAL").required().min(l.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(l.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),tunneled_reply:o.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_TUNNELED_REPLY")}),m=o.a.object().shape({ip:o.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(c.h,i.a.createElement(r.c,{id:"COMMON_VALIDATION_VALID_IPV4"})),port:o.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(l.RADIUS_LIMITS.MIN_PORT).max(l.RADIUS_LIMITS.MAX_PORT),x_secret:o.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),_=o.a.object().shape({name:o.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_NAME").required(),auth_servers:o.a.array().of(m),accounting_enabled:o.a.bool(),interim_update_enabled:o.a.bool(),interim_update_interval:o.a.number().when("interim_update_enabled",{is:!0,then:o.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_INTERIM_UPDATE_INTERVAL").required().min(l.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(l.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),acct_servers:o.a.array().when("accounting_enabled",{is:!0,then:o.a.array().of(m)})})}}]);