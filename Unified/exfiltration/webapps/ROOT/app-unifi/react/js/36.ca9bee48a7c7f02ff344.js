(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[36],{1812:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),l=a(50),r=a(70),o=a(6),s=a(8),m=a(2),E=a(71),d=a(1938),u=a(27),p=a(16),_=a(105),b=a(2003),g=Object(b.e)([Object(b.c)(Object(b.a)("(",Object(b.b)(_.c),`)(:${Object(b.d)(Object(b.b)(_.r))})?`)),Object(b.c)(Object(b.a)("(",Object(b.b)(_.h),`)(:${Object(b.d)(Object(b.b)(_.r))})?`))],"i"),h=a(30),O=h.a.object().shape({enabled:h.a.boolean(),server:h.a.string().when("enabled",{is:!0,then:h.a.string().required(i.a.createElement(m.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"})).matches(g,i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_VALIDATION_HOST_FORMAT",values:{name:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER"})}}))}),outbound_proxy:h.a.string().matches(g,i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_VALIDATION_HOST_FORMAT",values:{name:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY"})}}))}),S=a(36),A=a(44),T=a(1739),N=a(1736),D=a(1737),f=a(62),I=a(322),x=a(5),v=a(15),C=a(1791),j=a(1851),R=a(1937),y=a(663),P=a(61),G=a(46);const w=Object(x.c)(v.wb)`
  + span {
    margin-left: 8px !important;
  }
`,V=[{compare:Object(P.a)(e=>Object(G.c)(e).toLocaleLowerCase()),id:"sip-endpoint-name",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_NAME"}),renderCell:e=>Object(G.c)(e),sortable:!0,minWidth:150},{compare:Object(P.a)(({baresip_extension:e})=>(e||"").toLowerCase()),id:"sip-endpoint-baresip_extension",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_BARESIP_EXTENSION"}),renderCell:({baresip_extension:e})=>e||"-",sortable:!0,minWidth:170},{compare:Object(P.a)(({baresip_auth_user:e})=>(e||"").toLowerCase()),id:"sip-endpoint-baresip_auth_user",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_BARESIP_AUTH_USER"}),renderCell:({baresip_auth_user:e})=>e||"-",sortable:!0,minWidth:130},{compare:Object(P.a)(({volume:e})=>e||0),id:"sip-endpoint-volume",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_VOLUME"}),renderCell:({volume:e})=>i.a.createElement(C.a,{value:e||0}),sortable:!0,minWidth:130}];var F=()=>{const e=Object(S.k)(),t=Object(r.i)("advanced/gateway/sip/form/sip-endpoint"),a=Object(s.useDispatch)(),l=Object(s.useSelector)(c.selectSipEnabledDevices),o=Object(n.useCallback)(n=>i.a.createElement(R.h,null,i.a.createElement(E.b,null,i.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-edit",type:"button",variant:"inline",onClick:()=>e.push(`${t}/${n._id}`)},i.a.createElement(m.c,{id:"COMMON_ACTION_EDIT"})),i.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-remove",type:"button",variant:"inline",onClick:()=>a(Object(y.b)({name:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_REMOVE_MODAL_NAME",values:{name:Object(G.c)(n)}}),onConfirm:()=>a(Object(c.updateDevice)({...n,baresip_enabled:!1},n._id,{failureToast:(e,t)=>({errorMessage:t.msg,errorValues:t,icon:p.a.danger,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_REMOVE_TOAST_FAILURE",values:{name:Object(G.c)(n)}}),successToast:{icon:p.a.success,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_REMOVE_TOAST_SUCCESS",values:{name:Object(G.c)(n)}}}))}))},i.a.createElement(m.c,{id:"COMMON_ACTION_REMOVE"}))),i.a.createElement(E.m,null,i.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-view",type:"button",variant:"inline",onClick:()=>e.push(`${t}/${n._id}`)},i.a.createElement(m.c,{id:"COMMON_ACTION_VIEW"})))),[a,e,t]);return i.a.createElement(T.a,{padding:"none"},i.a.createElement(N.a,null,i.a.createElement(j.a,{columns:V,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,idField:"_id",items:l,renderRowPopoverContent:o})),i.a.createElement(N.a,null,i.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-create",type:"button",variant:"inline",onClick:()=>e.push(t)},i.a.createElement(E.g,{alignItems:"center"},i.a.createElement(w,null),i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_BUTTON_CREATE"})))))},M=a(2896),U=a(45),L=a(2093);const $=Object(x.c)(M.a)`
  > :last-child {
    margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
    padding-top: ${({theme:e})=>e.spacing["spacing-xl"]};
    label {
      font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
      color: ${U.a["grey-5"]};
    }
  }
`,k=e=>e+"%";var W=Object(m.f)(({intl:e})=>{const t=Object(r.i)("advanced/gateway/sip/form"),a=Object(S.k)(),{sipEndpoint:l,sipEndpointId:o}=Object(S.m)();Object(n.useEffect)(()=>{l&&"sip-endpoint"!==l&&a.replace(t)},[a,l,t]);const E=Object(s.useDispatch)(),d=Object(s.useSelector)(c.selectSipCompatibleDevices),b=Object(s.useSelector)(c.selectSipEnabledDevices),g=Object(n.useMemo)(()=>d.find(({_id:e})=>e===o,[]),[d,o]),O=!!(null==g?void 0:g._id),I=Object(n.useMemo)(()=>{var e,t,a,n,i;return{_id:null!==(e=null==g?void 0:g._id)&&void 0!==e?e:"",baresip_auth_user:null!==(t=null==g?void 0:g.baresip_auth_user)&&void 0!==t?t:"",baresip_extension:null!==(a=null==g?void 0:g.baresip_extension)&&void 0!==a?a:"",volume:null!==(n=null==g?void 0:g.volume)&&void 0!==n?n:25,x_baresip_password:null!==(i=null==g?void 0:g.x_baresip_password)&&void 0!==i?i:""}},[g]),x=Object(n.useMemo)(()=>d.filter(e=>b.every(({_id:t})=>t!==e._id)).map(e=>({label:Object(G.c)(e),value:e._id})),[d,b]),v=Object(n.useMemo)(()=>h.a.object().shape({_id:h.a.string().oneOf(O?[null==g?void 0:g._id]:x.map(({value:e})=>e)).label("SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_NAME").required(),baresip_auth_user:h.a.string().matches(_.t,i.a.createElement(m.b,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_AUTH_USER_VALIDATION"})),baresip_extension:h.a.string().label("SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_EXTENSION_LABEL").matches(_.t,i.a.createElement(m.b,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_EXTENSION_VALIDATION"})).required(),x_baresip_password:h.a.string().label("SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_X_BARESIP_PASSWORD_LABEL").matches(_.s,i.a.createElement(m.b,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_X_BARESIP_PASSWORD_VALIDATION"})).required()}),[g,x,O]),C=Object(n.useCallback)((e,{setSubmitting:n})=>E(Object(c.updateDevice)({...g,...e,baresip_enabled:!0},e._id)).then(()=>{E(Object(u.c)({icon:p.a.success,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_TOAST_SAVE_SUCCESS",values:{name:Object(G.c)(g)}})),a.push(t)}).catch(e=>{E(Object(u.c)({errorMessage:e.msg,errorValues:e,icon:p.a.danger,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_TOAST_SAVE_FAILURE",values:{name:Object(G.c)(g)}})),n(!1)}),[g,E,a,t]),j=Object(n.useCallback)(()=>a.push(t),[a,t]),R=O?Object(G.c)(g):i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_TITLE"}),y=e.formatMessage({id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_SEARCH_EMPTY_MESSAGE"});return"sip-endpoint"===l?i.a.createElement(A.c,{enableReinitialize:!0,initialValues:I,validationSchema:v,onSubmit:C},({handleChange:n,handleSubmit:c,values:l})=>i.a.createElement(L.a,{actions:[{text:i.a.createElement(m.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",onClick:()=>a.push(t)},{text:O?i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BUTTON_SAVE"}):i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BUTTON_CREATE"}),type:"submit",variant:"primary",onClick:()=>c()}],title:R,onRequestClose:j},i.a.createElement("form",{onSubmit:c},i.a.createElement(T.a,{padding:"none"},i.a.createElement(N.a,null,i.a.createElement(D.a,{column:!0,unlimitedWidth:!0},i.a.createElement(f.Field,{disabled:O,full:!0,name:"_id",options:x,type:"dropdown",label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_LABEL",placeholder:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_PLACEHOLDER",searchable:!0,searchEmptyMessage:y,translatePlaceholder:!0,translateLabel:!0,validated:!0}))),i.a.createElement(N.a,null,i.a.createElement(D.a,{column:!0,unlimitedWidth:!0},i.a.createElement(f.Field,{full:!0,label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_EXTENSION_LABEL",name:"baresip_extension"}))),i.a.createElement(N.a,null,i.a.createElement(D.a,{column:!0,unlimitedWidth:!0},i.a.createElement(f.Field,{full:!0,label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_AUTH_USER_LABEL",name:"baresip_auth_user"}))),i.a.createElement(N.a,null,i.a.createElement(D.a,{column:!0,unlimitedWidth:!0},i.a.createElement(f.Field,{full:!0,label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_X_BARESIP_PASSWORD_LABEL",name:"x_baresip_password",passwordToggle:!0,type:"password"}))),i.a.createElement(N.a,null,i.a.createElement($,{formatValueIndicatorContent:k,id:"volume",name:"volume",size:"small",label:e.formatMessage({id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_VOLUME_LABEL"}),labelDistance:20,step:1,value:l.volume,valueIndicatorPosition:"right",withValueIndicator:!0,onChange:n})))))):null});var B=()=>{const{sipEndpoint:e}=Object(S.m)(),{values:t}=Object(A.e)(),a=Object(n.useMemo)(()=>[{id:"sip-endpoint",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_ACCORDION_LABEL"}),openByDefault:"sip-endpoint"===e,renderContent:()=>i.a.createElement(F,null)}],[e]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,null,i.a.createElement(N.a,null,i.a.createElement(I.SearchableGridLabel,{htmlFor:"enabled",alignWith:"toggleSmall",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_EDU_CLIENT"})}),i.a.createElement(D.a,{column:!0},i.a.createElement(f.Field,{type:"checkbox",name:"enabled"}))),i.a.createElement(N.a,{disabled:!t.enabled},i.a.createElement(I.SearchableGridLabel,{htmlFor:"server",alignWith:"input",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER"}),description:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER_DESCRIPTION"})}),i.a.createElement(D.a,{column:!0},i.a.createElement(f.Field,{disabled:!t.enabled,full:!0,name:"server",placeholder:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER_PLACEHOLDER"}))),i.a.createElement(N.a,{disabled:!t.enabled},i.a.createElement(I.SearchableGridLabel,{htmlFor:"outbound_proxy",alignWith:"input",label:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY"}),description:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY_DESCRIPTION"}),searchText:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY_SEARCH_TEXT"}),i.a.createElement(D.a,{column:!0},i.a.createElement(f.Field,{disabled:!t.enabled,full:!0,name:"outbound_proxy",placeholder:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY_PLACEHOLDER"})))),i.a.createElement(I.SearchableAccordion,{items:a}),i.a.createElement(W,null))};var z=e=>{const{onBack:t}=e,a=Object(s.useSelector)(l.selectSipSettings),c=Object(s.useDispatch)(),r=Object(n.useContext)(E.l),o=Object(n.useCallback)((e,{setSubmitting:a})=>c(Object(l.saveSettings)({key:"baresip",...e})).then(()=>{c(Object(u.c)({icon:p.a.success,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TOAST_SAVE_SUCCESS"})),t()}).catch(e=>{c(Object(u.c)({errorMessage:e.msg,errorValues:e,icon:p.a.danger,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TOAST_SAVE_ERROR"})),a(!1)}),[c,t]),_=Object(n.useMemo)(()=>({enabled:!1,server:"",outbound_proxy:"",...a}),[a]);return i.a.createElement(d.b,{onSubmit:o,title:{component:i.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TITLE"}),message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TITLE"},initialValues:_,isEdit:!1,isView:r,onEscClicked:t,validationSchema:O,showBack:!0,goBack:t,unsavedChangesModalIgnoredPaths:/\/sip-endpoint((\/)|(\/[a-zA-Z0-9_-]+\/?))?$/},i.a.createElement(B,null))};t.default=()=>{const e=Object(r.h)();return Object(r.f)([Object(l.fetchSettings)({type:o.a.CACHE}),Object(c.fetchSipCompatibleDevices)({type:o.a.CACHE})],i.a.createElement(z,{onBack:e}))}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return h.a})),a.d(t,"a",(function(){return M}));var n=a(0),i=a.n(n),c=a(5),l=a(648),r=a(1136),o=a(208);const s=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,m=(Object(c.c)(l.Link)`
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
`),E=Object(c.c)(r.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(m,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),u=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var p=a(1851),_=a(375);const b=Object(c.c)(p.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,g=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(_.b)(({theme:e,...t})=>i.a.createElement(b,Object.assign({headerRowClassName:g(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var h=a(1934),O=a(529),S=a(1743),A=a(2),T=a(30),N=a(15),D=a(2846),f=a(44),I=a(71),x=a(62);const v=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(c.c)(I.c)`
  > * {
    vertical-align: middle;
  }
`,j=Object(c.c)(I.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,R=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,y=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,P=Object(c.c)(I.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,G=Object(c.c)(j,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,w=Object(c.c)(I.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,V=Object(c.c)(I.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,F=Object(c.c)("div")`
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
`;var M=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:l,validationSchema:r,initialValues:o,onEditSubmit:s,useValuesInSchema:m=!1,max:d,useWindowTable:u=!1,addButtonText:_="COMMON_ACTION_ADD",invalid:b,...g}){const h=Object(n.useContext)(I.l),[M,U]=Object(n.useState)(!0),L=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(E,null,i.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),l(t),await Promise.resolve(),U(!0)}},i.a.createElement(A.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,l]),$=Object(n.useMemo)(()=>u?D.a:p.a,[u]);return i.a.createElement(f.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>m?T.a.lazy(e=>r(e)):r},({values:n,errors:r,setFieldValue:s,handleSubmit:m,handleReset:E,setTouched:u})=>i.a.createElement(i.a.Fragment,null,t.map((a,l)=>i.a.createElement(v,{inline:a.inline,isLast:l===t.length-1,key:a.name},i.a.createElement(j,{flexDirection:"column",width:"100%"},i.a.createElement(x.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?r[a.name]:b,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!h&&c&&l===t.length-1&&i.a.createElement(R,null,i.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await u(a,!0);t.find(e=>i[e.name])||c(n),U(!0)},Icon:N.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},i.a.createElement(A.c,{id:_}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(P,{key:n.id,width:"100%"},g.columns.map((n,l)=>t[l]?i.a.createElement(G,{key:n.id,isLast:l===g.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(x.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[l].type,fast:!0},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),i.a.createElement(w,{justifyContent:"flex-end",width:"100%"},i.a.createElement(V,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{E(),s("editActive",!1)}},i.a.createElement(A.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(I.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:m,disabled:Object(O.a)(Object(S.a)(n,"editActive"),Object(S.a)(o,"editActive"))},i.a.createElement(A.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(v,null,i.a.createElement(y,null,i.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{E(),s("editActive",!0)},Icon:N.ub},i.a.createElement(A.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&M&&i.a.createElement(F,null,i.a.createElement($,{columns:g.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:l?L:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(2),r=a(1946),o=a.n(r),s=a(1741),m=a(520),E=a(521);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const r=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(E.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),_=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&p(e,t),[u,p]);return!!e&&i.a.createElement(o.a,{when:_(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:r,parentSelector:m.b,title:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(d,null,i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),l=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(l.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(l.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return N})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return I}));var n=a(0),i=a.n(n),c=a(5),l=a(643),r=a(32),o=a(1932),s=a(8),m=a(15),E=a(45),d=a(17),u=a(189),p=a(41);const _=Object(c.c)(u.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var b=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(m.vb,{color:E.a["blue-3"]}))},g=a(1933),h=a(71),O=a(227);const S=Object(c.c)(h.c)`
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
`,A=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,T=Object(c.c)(m.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var N,D=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(O.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(S,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(A,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(T,{color:E.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(N||(N={}));const f=Object(c.c)(h.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,I=Object(c.c)(h.g)`
  * {
    line-height: 1.4 !important;
  }
`,x=Object(c.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:l,online:s})=>{let m;switch(t){default:case N.BASIC:m=e;break;case N.CONFIGURED:m=i.a.createElement(I,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!l&&s&&i.a.createElement(b,{video:l}));break;case N.STATUS:m=i.a.createElement(I,{alignItems:"center"},i.a.createElement(x,{variant:c}),i.a.createElement(f,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(r.a,null,a)));break;case N.UNCONFIGURED:m=i.a.createElement(I,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{section:n}),i.a.createElement(h.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(r.a,null,a))),!!l&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{video:l}),i.a.createElement(h.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(r.a,null,a))),!!l&&!s&&i.a.createElement(I,{alignItems:"center"},e))}return m}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(8),r=a(15),o=a(45),s=a(1936),m=a(189);const E=Object(c.c)(m.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(r.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(8),r=a(15),o=a(45),s=a(1936),m=a(71),E=a(43);const d=Object(c.c)(m.c)`
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
`,p=Object(c.c)(r.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(l.useSelector)(E.i),c=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(u,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(p,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m.d})),a.d(t,"c",(function(){return m.a}));var n=a(0),i=a.n(n),c=a(5),l=a(15),r=a(71);const o=Object(c.c)(r.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(l.g,null)),m=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(17),i=a(41);const c=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return J})),a.d(t,"d",(function(){return K.a})),a.d(t,"f",(function(){return K.c})),a.d(t,"h",(function(){return K.e})),a.d(t,"g",(function(){return K.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),c=a.n(i),l=a(5);var r=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...r})=>{const o=a?12:i,s=a?0:n;return c.a.createElement("div",Object.assign({className:Object(l.b)("col-"+o,"offset-"+s,t)},r),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(l.b)("col-"+a,"offset-"+t)},e),m=a(2),E=a(666),d=a.n(E),u=a(71),p=a(1964),_=a.n(p),b=a(140),g=a.n(b),h=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const O=g.a.bind(_.a);var S=({className:e=null,status:t=o.NEUTRAL,...a})=>c.a.createElement(h.a,Object.assign({},a,{className:O("ubntStatusText","ubntStatusText--"+t,e)})),A=a(254),T=a(1944);const N=Object(l.c)(u.g)`
  border: 1px solid ${A.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,D=Object(l.c)(S)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var f=({state:e,className:t=null,...a})=>c.a.createElement(N,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(D,{message:T.b[e],status:o.WARNING})),I=a(322),x=a(82),v=a(8),C=a(45),j=a(70),R=a(20);const y={BORDER_WIDTH:2},P={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},G=({type:e,size:t,width:a,height:n})=>{switch(e){case I.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:c}=P;return{top:c,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function w({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:r,height:o}){const s=Object(v.useSelector)(I.selectHighlight),[m,E]=Object(j.c)(0),[d,u]=Object(j.c)(!1),p=Object(i.useRef)(null),_=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(l.a)({"&::before":{border:`${y.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...G({type:e,size:c,width:r,height:o}),...a}}),[d,e,a,c,r,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>m)E(m+1);else if(p.current&&t===s.id&&s.type===e){window.getComputedStyle(p.current).border,window.getComputedStyle(p.current).boxShadow;let t=p.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:c}=t.current.getBoundingClientRect();switch(a){case I.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=P,l=c+Object(R.a)(n,"top",a),r=l+i+Object(R.a)(n,"paddingBottom",e)+Object(R.a)(n,"paddingTop",t)+2*y.BORDER_WIDTH;return{bottom:r,height:r-l,top:l}}}})({height:o,highlightRef:p,type:e,highlightStyle:a}),{bottom:l,height:r,top:s}=n.getBoundingClientRect(),m=t>l,E=i>r,d=15;c<s||E?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+c-d}):m&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-l+d})}u(!0)}},[o,m]),Object(i.useEffect)(()=>{d||s.id!==t||E(e=>e+1),d&&s.id!==t&&u(!1)},[s.id,d]),{highlightClassName:_,highlightRef:p}}const V=Object(l.c)(d.a)`
  color: ${x.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,F=Object(l.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=l.a`
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
`;var U=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:r=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:E=null,offset:d=0,size:u=5,useHtml:p=!1})=>{const{highlightClassName:_,highlightRef:b}=w({type:I.SearchHighlightType.FIELD,forId:E,highlightStyle:s,highlightDelay:o,size:u}),g=!(!n&&!a),h={["col-"+u]:!0,["offset-"+d]:d>0},O=p?m.b:m.c;return c.a.createElement("div",{className:Object(l.b)(h,M,_),ref:b},c.a.createElement("div",{className:"mb-1"},c.a.createElement(F,{className:"settingsGridLabel",htmlFor:E,primary:!0},r?e:c.a.createElement(m.c,{id:e})),t&&c.a.createElement(f,{state:t})),g&&c.a.createElement("div",null,c.a.createElement(V,{className:"settingsGridDescription",htmlFor:E,secondary:!0},n?c.a.createElement(O,{id:n,values:i}):a)))};const L=l.a`
  max-width: 960px;
`,$=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:r=!1})=>{const o=n?4:i;return c.a.createElement("div",{className:Object(l.b)("row","mt-"+o,r?null:L,t),ref:a},e)};var k=c.a.forwardRef((e,t)=>c.a.createElement($,Object.assign({forwardedRef:t},e)));var W=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(h.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const B=Object(l.c)("div")`
  flex: 0 1 480px;
`,z=Object(l.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var H=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:r=null})=>{const o=A.b.sectionColors.common;return c.a.createElement(k,{className:t,marginTop:0},c.a.createElement(B,null,c.a.createElement(z,{className:Object(l.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(m.c,{id:e})),a&&c.a.createElement(h.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const X=Object(l.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,Y=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(X,{className:Object(l.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(l.b)({"pb-8":!a})},e));Y.Content=r,Y.Icon=s,Y.Label=U,Y.Row=k,Y.SectionHeader=W,Y.Subheader=H;var q=a(284);const Q=Object(l.c)(q.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var J=e=>c.a.createElement(Q,Object.assign({},e)),K=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(v.useSelector)(Z.C);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(m.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(m.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(m.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return V})),a.d(t,"a",(function(){return C}));var n=a(0),i=a.n(n),c=a(5),l=a(2),r=a(44),o=a(2847),s=a(2658),m=a(1929),E=a(783),d=a(71),u=a(1940),p=a(15),_=a(32),b=a(42),g=a(1847),h=a(782),O=a(1930);const S=c.a`
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
`;var A=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...l})=>{const r=Object(O.a)(),o=Object(h.a)(c),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(g.a,Object.assign({appear:t||!o||r,in:t||!o||r,timeout:e,classNames:S,mountOnEnter:!0},l),a)),[a,t,o,r,e,l]);return i.a.createElement(i.a.Fragment,null,s)};const T=c.a`
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
`;var N=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...l})=>{const r=Object(O.a)(),o=Object(h.a)(c),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(g.a,Object.assign({appear:t||!o||r,in:t||!o||r,timeout:e,classNames:T,mountOnEnter:!0},l),a)),[a,t,o,r,e,l]);return i.a.createElement(i.a.Fragment,null,s)};const D=Object(c.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,f=Object(c.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,x=Object(c.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,v=Object(c.c)(_.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var C=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:l})=>{const{motif:r}=Object(b.a)();return i.a.createElement(N,{ignoredPaths:l},i.a.createElement(f,{flex:"none",height:"65px"},i.a.createElement(A,{ignoredPaths:l},i.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(D,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(x,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:r},i.a.createElement(p.f,{size:"original"}))),i.a.createElement(I,null,i.a.createElement(v,{weight:"bold"},e.component)),i.a.createElement(D,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(x,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(p.y,{size:"original"})))))))};const j=Object(c.c)(d.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,R=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,y=Object(c.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,P=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,G=Object(c.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,w=Object(c.c)(d.k)`
  height: 100%;
  width: 100%;
`;var V=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:E,title:p,unsavedChangesModalIgnoredPaths:_,onEscClicked:b,submitText:g="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:h=!1,customFooterButtons:O,hidddenHeader:S,...A})=>i.a.createElement(r.c,Object.assign({enableReinitialize:!0},A),({dirty:c,handleReset:r,handleSubmit:A,isSubmitting:T})=>i.a.createElement(R,{autoComplete:"off",onSubmit:A},i.a.createElement(w,{vertical:!0},!S&&i.a.createElement(C,{goBack:a,hideClose:n,showBack:E,title:p,onEscClicked:b,ignoredPaths:_}),i.a.createElement(u.a,{ignoredPaths:_},i.a.createElement(G,{flex:"1"},i.a.createElement(j,{flex:"none",flexDirection:"column"},e))),!t&&!o&&i.a.createElement(m.a,{ignoredPaths:_,when:c&&!T}),(!o||h)&&i.a.createElement(P,{active:c||h},i.a.createElement(d.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&i.a.createElement(y,null,O(T)),!o&&i.a.createElement(d.g,null,i.a.createElement(s.a,{disabled:!c||T,type:"button",variant:"default",onClick:r},i.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!c||T,type:"submit",variant:"primary"},i.a.createElement(l.c,{id:g}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),l=a(5),r=a(782),o=a(1930);const s=l.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:l,...m})=>{const E=Object(o.a)(),d=Object(r.a)(a),u=Object(n.useMemo)(()=>i.a.Children.map(l,a=>null===a?a:i.a.createElement(c.a,Object.assign({appear:t||!d||E,in:t||!d||E,timeout:e,classNames:s,mountOnEnter:!0},m),a)),[l,t,d,E,e,m]);return i.a.createElement(i.a.Fragment,null,u)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2003:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return s}));var n=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},i=function(e,t){var a=n(e),i=a[0],c=a[1];return new RegExp(t.call(t,i),c)},c=function(e){return i(e,(function(e){var t="^"===e.substring(0,1),a="$"===e.substring(e.length-1);if(!t&&!a)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(a?1:0))}))},l=function(e){return n(e)[0]},r=function(e){return i(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},o=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var a=e.map((function(e){return"(".concat(n(e)[0],")")})).join("|");return new RegExp(a,t)},s=function(e,t,a,i){return new RegExp((e||"")+n(t)[0]+(a||""),i)}},2093:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(65);const r=Object(c.c)(l.a)`
  width: 385px;

  header {
    > div {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    }
  }

  > div {
    border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui07};
    padding: 0 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    margin: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  }

  footer {
    margin-top: 0;
    button {
      padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    }
  }
`;t.a=e=>i.a.createElement(r,Object.assign({flushContent:!0},e))}}]);