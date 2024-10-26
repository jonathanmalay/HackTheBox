(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[38],{1180:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return E})),a.d(t,"h",(function(){return p})),a.d(t,"g",(function(){return g})),a.d(t,"a",(function(){return h}));var n=a(6);const i=(e,t)=>Object(n.q)("wifiman","/v2/api/site/{site}/wifiman",e,{idField:"id",...t}),c=i(void 0,{crudCacheStrategy:{type:n.a.COMBINED,interval:5e3}});var l=a(4),r=a(1924),s=a(28),o=a(50),m=a(3);const u=Object(n.A)(i()),d=Object(l.a)(u,s.c),b=Object(l.a)(d,e=>Object(r.a)(e,({report_timestamp:e})=>-e)[0]),E=e=>Object(l.a)(d,t=>t.find(t=>t.id===e)),p=Object(l.a)(m.selectIsUbiOS,e=>e),g=Object(l.a)(o.selectMgmtSettings,m.selectIsUbiOS,(e,t)=>(null==e?void 0:e.wifiman_enabled)&&t);var h;!function(e){e.INTERNET="INTERNET",e.LOCAL_DEVICE="LOCAL_DEVICE",e.LOCAL_CLIENT="LOCAL_CLIENT"}(h||(h={}))},1816:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),l=a(2188),r=a(18),s=a(50),o=a(280),m=a(2118),u=a(1937),d=a(71),b=a(70),E=a(43),p=a(6),g=a(228);const h=a.n(g)()(),O=[{value:"en",label:"English"},{value:"ca",label:"Català"},{value:"cs",label:"Český"},{value:"de_DE",label:"Deutsch"},{value:"da",label:"Dansk"},{value:"el",label:"ελληνικά"},{value:"es_ES",label:"Español"},{value:"fr",label:"Français"},{value:"ja",label:"日本語"},{value:"nl",label:"Nederlands"},{value:"pl",label:"Polski"},{value:"pt_PT",label:"Português"},{value:"ru",label:"Русский"},{value:"sv",label:"Svenska"},{value:"tr",label:"Türkçe"},{value:"zh_CN",label:"中文"}],S=[{label:"12",value:"12"},{label:"24",value:"24"}];var _=a(2),f=a(36),T=a(2851),N=a(1935),I=a(2032);var j=({transitionDelay:e})=>{const t=Object(c.useSelector)(E.l),a=Object(f.k)(),l=Object(n.useCallback)(()=>a.push("system/administration"),[a]),r=Object(n.useCallback)(()=>a.push("system/controller"),[a]),s=Object(n.useCallback)(()=>a.push("system/maintenance"),[a]);return i.a.createElement("div",null,i.a.createElement(I.a,{delay:35,initialDelay:e,timeout:{enter:335+e,exit:100}},i.a.createElement(d.n,{padding:"none"},i.a.createElement(T.a,{headerButton:i.a.createElement(N.a,null),headerTitle:i.a.createElement(N.b,{label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_BUBBLE_MAINTENANCE_LABEL"}),type:N.c.BASIC}),onClick:s})),i.a.createElement(d.n,{padding:"none"},i.a.createElement(T.a,{headerButton:i.a.createElement(N.a,null),headerTitle:i.a.createElement(N.b,{label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_BUBBLE_CONTROLLER_CONFIGURATION_LABEL"}),type:N.c.BASIC}),onClick:r})),t.isStandalone&&i.a.createElement(d.n,{padding:"none"},i.a.createElement(T.a,{headerButton:i.a.createElement(N.a,null),headerTitle:i.a.createElement(N.b,{label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_BUBBLE_ADMINISTRATION_LABEL"}),type:N.c.BASIC}),onClick:l}))))},v=a(5),y=a(2552),A=a(44),C=a(1179),M=a(1736),x=a(1737),D=a(1732),R=a(1180),w=a(1929),L=a(27),F=a(62),G=a(322),P=a(16),k=a(153),B=a(63),$=a(30);const U=Object(B.a)(e=>$.a.object().shape({siteName:$.a.string().label("SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_LABEL").required(),...e?{super_identity:$.a.object().shape({name:$.a.string().label("SETTINGS_SYSTEM_MAIN_FORM_SUPER_IDENTITY_NAME_LABEL").required()})}:{}}));var H=a(101),z=a.n(H),Y=a(2847),W=a(2658),V=a(783);const q=Object(v.c)(Y.a)`
  background-color: ${({theme:e})=>e.motifPalette.uiBase} !important;
  padding: 0 ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */

  > :first-child {
    max-width: ${V.a};
    margin: 0 auto;
    position: relative;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: calc(100% - ${({theme:e})=>e.scrollBarWidth}px);
    right: ${({theme:e})=>e.scrollBarWidth/2}px;
  }
`;var K=({dirty:e,isSubmitting:t,handleReset:a,parentElementId:c,setStatus:l,setSubmitting:r,values:s,onSubmit:o})=>{const m=document.getElementById(c),u=Object(n.useCallback)(()=>{r(!0),o(s,{setStatus:l,setSubmitting:r})},[l,r,s,o]);return m?z.a.createPortal(i.a.createElement(q,{active:e,align:"right"},i.a.createElement(W.a,{disabled:!e||t,type:"reset",variant:"default",onClick:a},i.a.createElement(_.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(W.a,{disabled:!e||t,type:"button",variant:"primary",onClick:u},i.a.createElement(_.c,{id:"COMMON_ACTION_APPLY_CHANGES"}))),m):null},Q=a(1741),J=a(520),X=a(112);const Z=Object(v.c)("span")`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  line-height: 1.5;
`;var ee=({display:e,handleClose:t})=>{const a=Object(c.useSelector)(E.b),l=Object(c.useSelector)(E.f),s=Object(c.useSelector)(E.e),o=Object(c.useSelector)(r.Q),m=Object(c.useSelector)(r.P),u=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),d=Object(c.useDispatch)(),b=Object(n.useCallback)(()=>{t(!1)},[t]),p=Object(n.useCallback)(()=>{d(Object(r.l)({...o,preferences:{...m,enableNewUI:!1}})).then(()=>{d(Object(L.c)({icon:P.a.success,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_SUCCESS"}))}).then(()=>{let e=a;l&&!s&&(e=`${e.replace(/\/$/,"")}${window.location.search}`),Object(X.g)(!1,l,s,a),window.location.href=e}).catch(e=>{d(Object(L.c)({errorMessage:e.msg,errorValues:e,icon:P.a.danger,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_ERROR"})),t(!1)})},[m,t,a,d,s,l,o]);return e&&i.a.createElement(Q.a,{actions:[{type:"button",text:i.a.createElement(_.c,{id:"COMMON_ACTION_CANCEL"}),onClick:b},{type:"button",text:i.a.createElement(_.c,{id:"COMMON_ACTION_DEACTIVATE"}),onClick:p,variant:"danger"}],isOpen:!0,size:"small",style:u,parentSelector:J.b,title:i.a.createElement(_.c,{id:"SETTINGS_MODAL_DEACTIVATE_NEW_USER_INTERFACE_TITLE"})},i.a.createElement(Z,null,i.a.createElement(_.c,{id:"SETTINGS_MODAL_DEACTIVATE_NEW_USER_INTERFACE_DESCRIPTION"})))};const te=Object(v.c)("button")`
  border: none !important;
  height: 0;
  margin: 0;
  padding: 0 !important;
  outline: none;
  overflow: hidden !important;
  pointer-events: none;
  visibility: hidden;
  width: 0;
`,ae=({initialStatus:e,initialValues:t})=>{const{resetForm:a,status:i}=Object(A.e)();return Object(n.useEffect)(()=>{i.isSubmitted&&a({values:t,status:e})},[i.isSubmitted]),null};var ne=({transitionDelay:e})=>{const t=Object(c.useDispatch)(),[a,u]=Object(n.useState)(!1),g=Object(c.useSelector)(o.selectActiveSiteDesc),f=Object(c.useSelector)(l.b),T=Object(c.useSelector)(s.selectCountrySettings),N=Object(c.useSelector)(r.y),j=Object(c.useSelector)(s.selectLocaleSettings),v=Object(c.useSelector)(o.selectSites),B=Object(c.useSelector)(s.selectSuperIdentitySettings),$=Object(c.useSelector)(E.f),H=Object(c.useSelector)(m.b),z=Object(c.useSelector)(r.Q),Y=Object(c.useSelector)(r.P),W=Object(c.useSelector)(s.selectMgmtSettings),V=Object(c.useSelector)(R.h),q=Object(c.useSelector)(Object(k.d)(k.a.LEGACY_UI_SUPPORTED)),Q=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),J=Object(n.useMemo)(()=>({country:{...T},locale:{...j},siteName:g,super_identity:{...B},ui_settings:{...z,preferences:{...Y}},mgmt_settings:W}),[g,T,j,B,z,Y,W]),X=Object(n.useCallback)((e,{setStatus:a,setSubmitting:n})=>{const i=[];Object(C.a)(Object(y.diff)(J.country,e.country))||i.push(Object(s.saveSettings)(e.country)),Object(C.a)(Object(y.diff)(J.locale,e.locale))||i.push(Object(s.saveSettings)(e.locale)),J.siteName!==e.siteName&&i.push(Object(o.updateSiteName)(e.siteName)),Object(C.a)(Object(y.diff)(J.super_identity,e.super_identity))||i.push(Object(s.saveSettings)(e.super_identity)),Object(C.a)(Object(y.diff)(J.ui_settings,e.ui_settings))||i.push(Object(r.l)(e.ui_settings)),Object(C.a)(Object(y.diff)(J.mgmt_settings,e.mgmt_settings))||i.push(Object(s.saveSettings)(e.mgmt_settings)),Promise.all(i.map(e=>t(e))).then(()=>{a({isSubmitted:!0}),t(Object(L.c)({icon:P.a.success,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_SUCCESS"}))}).catch(e=>{n(!1),t(Object(L.c)({errorMessage:e.msg,errorValues:e,icon:P.a.danger,message:"SETTINGS_SYSTEM_MAIN_FORM_TOAST_SAVE_ERROR"}))})},[t,J.country,J.locale,J.mgmt_settings,J.siteName,J.super_identity,J.ui_settings]),Z=Object(n.useCallback)(()=>u(!0),[u]);return Object(b.f)([Object(k.c)(void 0,{crudCacheStrategy:{type:p.a.CACHE}})],i.a.createElement(d.n,{highlightType:"none",padding:"none"},i.a.createElement(A.c,{initialStatus:Q,initialValues:J,validationSchema:U(N),onSubmit:X},({dirty:t,handleBlur:n,handleSubmit:c,handleReset:l,isSubmitting:r,setFieldValue:s,setStatus:o,setSubmitting:m,values:b})=>i.a.createElement("form",{autoComplete:"off",onSubmit:c},i.a.createElement(I.a,{delay:35,timeout:{enter:335+e,exit:100}},i.a.createElement(d.o,null,$&&i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"input",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SUPER_IDENTITY_NAME_DESCRIPTION"}),htmlFor:"super_identity.name",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SUPER_IDENTITY_NAME_LABEL"}),searchIsApplicable:"isStandalone"}),i.a.createElement(x.a,{column:!0},i.a.createElement(F.Field,{full:!0,name:"super_identity.name"})))),(null==v?void 0:v.length)>1&&i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"input",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_DESCRIPTION"}),htmlFor:"siteName",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_LABEL"}),searchIsApplicable:"hasMoreThanOneSite"}),i.a.createElement(x.a,{column:!0},i.a.createElement(F.Field,{full:!0,name:"siteName",placeholder:"SETTINGS_SYSTEM_MAIN_FORM_SITE_NAME_PLACEHOLDER"}))),i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_COUNTRY_CODE_DESCRIPTION"}),htmlFor:"country.code",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_COUNTRY_CODE_LABEL"})}),i.a.createElement(x.a,null,i.a.createElement(F.Field,{full:!0,name:"country.code",options:f,type:"dropdown",searchable:!0}))),i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_PREFERRED_LANGUAGE_DESCRIPTION"}),htmlFor:"ui_settings.preferredLanguage",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_PREFERRED_LANGUAGE_LABEL"})}),i.a.createElement(x.a,null,i.a.createElement(F.Field,{allowReadOnly:!0,full:!0,name:"ui_settings.preferredLanguage",options:O,type:"dropdown",searchable:!0}))),$&&i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_LOCALE_TIMEZONE_DESCRIPTION"}),htmlFor:"locale.timezone",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_LOCALE_TIMEZONE_LABEL"})}),i.a.createElement(x.a,null,i.a.createElement(F.Field,{full:!0,name:"locale.timezone",options:H,type:"dropdown",searchable:!0}))),i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"dropdown",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_TIME_FORMAT_DESCRIPTION"}),htmlFor:"ui_settings.preferences.use24HourTime",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_TIME_FORMAT_LABEL"})}),i.a.createElement(x.a,null,i.a.createElement(F.Field,{allowReadOnly:!0,field:{name:"ui_settings.preferences.use24HourTime",value:b.ui_settings.preferences.use24HourTime?"24":"12",onBlur:n},full:!0,name:"ui_settings.preferences.use24HourTime",options:S,type:"dropdown",onChange:(e,t)=>{s("ui_settings.preferences.use24HourTime","24"===t),s("ui_settings.preferences.timeFormat","24"===t?"H:mm":"h:mm a")}}))),q&&i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"toggleSmall",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_ENABLE_NEW_UI_DESCRIPTION"}),htmlFor:"ui_settings.preferences.enableNewUI",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_ENABLE_NEW_UI_LABEL"}),searchTags:["CLASSIC_UI","OLD_UI"],searchIsApplicable:"isLegacyUISupported"}),i.a.createElement(x.a,null,i.a.createElement(D.a,{name:"ui_settings.preferences.enableNewUI",checked:!0,onChange:Z}))),i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"toggleSmall",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_IS_APP_DARK_DESCRIPTION"}),htmlFor:"ui_settings.preferences.isAppDark",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_IS_APP_DARK_LABEL"}),searchTags:["DARK_MODE","DARK_MOTIF","DARK_THEME","LIGHT_MODE","LIGHT_MOTIF","LIGHT_THEME"]}),i.a.createElement(x.a,null,i.a.createElement(F.Field,{allowReadOnly:!0,name:"ui_settings.preferences.isAppDark",type:"checkbox"}))),V&&i.a.createElement(M.a,null,i.a.createElement(G.SearchableGridLabel,{alignWith:"toggleSmall",description:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_WIFIMAN_ENABLED_DESCRIPTION"}),htmlFor:"mgmt_settings.wifiman_enabled",label:i.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAIN_FORM_WIFIMAN_ENABLED_LABEL"}),searchTags:["WIFIMAN_ENABLED","WIFIMAN_DISABLED"]}),i.a.createElement(x.a,null,i.a.createElement(F.Field,{name:"mgmt_settings.wifiman_enabled",type:"checkbox"})))),i.a.createElement(K,{dirty:t,handleReset:l,isSubmitting:r,parentElementId:h,setStatus:o,setSubmitting:m,values:b,onSubmit:X}),i.a.createElement(te,{disabled:r,type:"submit",tabIndex:-1}),i.a.createElement(ae,{initialStatus:Q,initialValues:J}),i.a.createElement(w.a,{when:t&&!r}),i.a.createElement(ee,{display:a,handleClose:u})))))};t.default=Object(c.connect)(e=>({swaiProps:Object(E.l)(e)}))(()=>{const e=Object(n.useCallback)(()=>i.a.createElement("div",{id:h}),[]),t=Object(c.useSelector)(E.l),a=Object(c.useSelector)(o.selectSites),g=Object(n.useMemo)(()=>210+(t.isStandalone&&35)+((null==a?void 0:a.length)>1&&35),[a.length,t.isStandalone]);return Object(b.f)([Object(l.a)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(r.h)({crudCacheStrategy:{type:p.a.CACHE}}),Object(s.fetchSettings)({type:p.a.CACHE}),Object(o.fetchSites)(void 0,{crudCacheStrategy:{type:p.a.CACHE}}),Object(m.a)(void 0,{crudCacheStrategy:{type:p.a.CACHE}})],i.a.createElement(d.j,{renderFooter:e},i.a.createElement(u.e,{scrollable:!0},i.a.createElement(ne,{transitionDelay:g}),i.a.createElement(j,{transitionDelay:g}))))})},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return P}));var n=a(0),i=a.n(n),c=a(5),l=a(648),r=a(1136),s=a(208);const o=Object(c.c)(s.a)`
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
`,Object(c.c)(s.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),u=Object(c.c)(r.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(m,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),b=e=>i.a.createElement(o,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var E=a(1851),p=a(375);const g=Object(c.c)(E.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,h=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(p.b)(({theme:e,...t})=>i.a.createElement(g,Object.assign({headerRowClassName:h(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(1934),S=a(529),_=a(1743),f=a(2),T=a(30),N=a(15),I=a(2846),j=a(44),v=a(71),y=a(62);const A=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,C=Object(c.c)(v.c)`
  > * {
    vertical-align: middle;
  }
`,M=Object(c.c)(v.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,x=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,D=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,R=Object(c.c)(v.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,w=Object(c.c)(M,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,L=Object(c.c)(v.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,F=Object(c.c)(v.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,G=Object(c.c)("div")`
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
`;var P=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:l,validationSchema:r,initialValues:s,onEditSubmit:o,useValuesInSchema:m=!1,max:d,useWindowTable:b=!1,addButtonText:p="COMMON_ACTION_ADD",invalid:g,...h}){const O=Object(n.useContext)(v.l),[P,k]=Object(n.useState)(!0),B=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(u,null,i.a.createElement(C,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{k(!1),l(t),await Promise.resolve(),k(!0)}},i.a.createElement(f.c,{id:"COMMON_ACTION_REMOVE"}))),[e,k,l]),$=Object(n.useMemo)(()=>b?I.a:E.a,[b]);return i.a.createElement(j.c,{enableReinitialize:!0,onSubmit:t=>{o(t[e])},initialValues:s,validationSchema:()=>m?T.a.lazy(e=>r(e)):r},({values:n,errors:r,setFieldValue:o,handleSubmit:m,handleReset:u,setTouched:b})=>i.a.createElement(i.a.Fragment,null,t.map((a,l)=>i.a.createElement(A,{inline:a.inline,isLast:l===t.length-1,key:a.name},i.a.createElement(M,{flexDirection:"column",width:"100%"},i.a.createElement(y.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?r[a.name]:g,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!O&&c&&l===t.length-1&&i.a.createElement(x,null,i.a.createElement(C,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),k(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await b(a,!0);t.find(e=>i[e.name])||c(n),k(!0)},Icon:N.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},i.a.createElement(f.c,{id:p}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(R,{key:n.id,width:"100%"},h.columns.map((n,l)=>t[l]?i.a.createElement(w,{key:n.id,isLast:l===h.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(y.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[l].type,fast:!0},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),i.a.createElement(L,{justifyContent:"flex-end",width:"100%"},i.a.createElement(F,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{u(),o("editActive",!1)}},i.a.createElement(f.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(v.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:m,disabled:Object(S.a)(Object(_.a)(n,"editActive"),Object(_.a)(s,"editActive"))},i.a.createElement(f.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(A,null,i.a.createElement(D,null,i.a.createElement(C,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{u(),o("editActive",!0)},Icon:N.ub},i.a.createElement(f.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&P&&i.a.createElement(G,null,i.a.createElement($,{columns:h.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:l?B:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(2),r=a(1946),s=a.n(r),o=a(1741),m=a(520),u=a(521);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const r=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),b=Object(u.a)(t),E=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),p=Object(n.useCallback)(e=>(e={},t={})=>b(e,t)&&E(e,t),[b,E]);return!!e&&i.a.createElement(s.a,{when:p(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(o.a,{actions:[{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:r,parentSelector:m.b,title:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(d,null,i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return N})),a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return v}));var n=a(0),i=a.n(n),c=a(5),l=a(643),r=a(32),s=a(1932),o=a(8),m=a(15),u=a(45),d=a(17),b=a(189),E=a(41);const p=Object(c.c)(b.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var g=({video:e})=>{const t=Object(o.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:E.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(p,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(m.vb,{color:u.a["blue-3"]}))},h=a(1933),O=a(71),S=a(227);const _=Object(c.c)(O.c)`
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
`;var N,I=({video:e})=>{const t=Object(o.useDispatch)(),a=Object(o.useSelector)(S.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:E.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(f,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(T,{color:u.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(N||(N={}));const j=Object(c.c)(O.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,v=Object(c.c)(O.g)`
  * {
    line-height: 1.4 !important;
  }
`,y=Object(c.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:l,online:o})=>{let m;switch(t){default:case N.BASIC:m=e;break;case N.CONFIGURED:m=i.a.createElement(v,{alignItems:"center"},e,!!n&&i.a.createElement(s.a,{section:n}),!!l&&o&&i.a.createElement(g,{video:l}));break;case N.STATUS:m=i.a.createElement(v,{alignItems:"center"},i.a.createElement(y,{variant:c}),i.a.createElement(j,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(r.a,null,a)));break;case N.UNCONFIGURED:m=i.a.createElement(v,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{section:n}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(r.a,null,a))),!!l&&o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{video:l}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(r.a,null,a))),!!l&&!o&&i.a.createElement(v,{alignItems:"center"},e))}return m}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(8),r=a(15),s=a(45),o=a(1936),m=a(189);const u=Object(c.c)(m.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(o.a)(e)),[t,e]);return i.a.createElement(u,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(r.vb,{color:s.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(8),r=a(15),s=a(45),o=a(1936),m=a(71),u=a(43);const d=Object(c.c)(m.c)`
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
`,E=Object(c.c)(r.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(l.useSelector)(u.i),c=Object(n.useCallback)(()=>t(Object(o.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(b,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(E,{color:s.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m.d})),a.d(t,"c",(function(){return m.a}));var n=a(0),i=a.n(n),c=a(5),l=a(15),r=a(71);const s=Object(c.c)(r.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var o=({children:e,...t})=>i.a.createElement(s,Object.assign({alignItems:"center"},t),e,i.a.createElement(l.g,null)),m=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(17),i=a(41);const c=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return J})),a.d(t,"d",(function(){return X.a})),a.d(t,"f",(function(){return X.c})),a.d(t,"h",(function(){return X.e})),a.d(t,"g",(function(){return X.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),c=a.n(i),l=a(5);var r=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...r})=>{const s=a?12:i,o=a?0:n;return c.a.createElement("div",Object.assign({className:Object(l.b)("col-"+s,"offset-"+o,t)},r),e)};var s,o=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(l.b)("col-"+a,"offset-"+t)},e),m=a(2),u=a(666),d=a.n(u),b=a(71),E=a(1964),p=a.n(E),g=a(140),h=a.n(g),O=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(s||(s={}));const S=h.a.bind(p.a);var _=({className:e=null,status:t=s.NEUTRAL,...a})=>c.a.createElement(O.a,Object.assign({},a,{className:S("ubntStatusText","ubntStatusText--"+t,e)})),f=a(254),T=a(1944);const N=Object(l.c)(b.g)`
  border: 1px solid ${f.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,I=Object(l.c)(_)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var j=({state:e,className:t=null,...a})=>c.a.createElement(N,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(I,{message:T.b[e],status:s.WARNING})),v=a(322),y=a(82),A=a(8),C=a(45),M=a(70),x=a(20);const D={BORDER_WIDTH:2},R={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},w=({type:e,size:t,width:a,height:n})=>{switch(e){case v.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:c}=R;return{top:c,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function L({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:r,height:s}){const o=Object(A.useSelector)(v.selectHighlight),[m,u]=Object(M.c)(0),[d,b]=Object(M.c)(!1),E=Object(i.useRef)(null),p=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(l.a)({"&::before":{border:`${D.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:C.a["blue-light-3"],show:d,style:{...w({type:e,size:c,width:r,height:s}),...a}}),[d,e,a,c,r,s]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>m)u(m+1);else if(E.current&&t===o.id&&o.type===e){window.getComputedStyle(E.current).border,window.getComputedStyle(E.current).boxShadow;let t=E.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:c}=t.current.getBoundingClientRect();switch(a){case v.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=R,l=c+Object(x.a)(n,"top",a),r=l+i+Object(x.a)(n,"paddingBottom",e)+Object(x.a)(n,"paddingTop",t)+2*D.BORDER_WIDTH;return{bottom:r,height:r-l,top:l}}}})({height:s,highlightRef:E,type:e,highlightStyle:a}),{bottom:l,height:r,top:o}=n.getBoundingClientRect(),m=t>l,u=i>r,d=15;c<o||u?n.scrollTo({behavior:"smooth",top:n.scrollTop-o+c-d}):m&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-l+d})}b(!0)}},[s,m]),Object(i.useEffect)(()=>{d||o.id!==t||u(e=>e+1),d&&o.id!==t&&b(!1)},[o.id,d]),{highlightClassName:p,highlightRef:E}}const F=Object(l.c)(d.a)`
  color: ${y.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,G=Object(l.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,P=l.a`
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
`;var k=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:r=!1,highlightDelay:s=null,highlightStyle:o=null,htmlFor:u=null,offset:d=0,size:b=5,useHtml:E=!1})=>{const{highlightClassName:p,highlightRef:g}=L({type:v.SearchHighlightType.FIELD,forId:u,highlightStyle:o,highlightDelay:s,size:b}),h=!(!n&&!a),O={["col-"+b]:!0,["offset-"+d]:d>0},S=E?m.b:m.c;return c.a.createElement("div",{className:Object(l.b)(O,P,p),ref:g},c.a.createElement("div",{className:"mb-1"},c.a.createElement(G,{className:"settingsGridLabel",htmlFor:u,primary:!0},r?e:c.a.createElement(m.c,{id:e})),t&&c.a.createElement(j,{state:t})),h&&c.a.createElement("div",null,c.a.createElement(F,{className:"settingsGridDescription",htmlFor:u,secondary:!0},n?c.a.createElement(S,{id:n,values:i}):a)))};const B=l.a`
  max-width: 960px;
`,$=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:r=!1})=>{const s=n?4:i;return c.a.createElement("div",{className:Object(l.b)("row","mt-"+s,r?null:B,t),ref:a},e)};var U=c.a.forwardRef((e,t)=>c.a.createElement($,Object.assign({forwardedRef:t},e)));var H=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(O.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const z=Object(l.c)("div")`
  flex: 0 1 480px;
`,Y=Object(l.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var W=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:r=null})=>{const s=f.b.sectionColors.common;return c.a.createElement(U,{className:t,marginTop:0},c.a.createElement(z,null,c.a.createElement(Y,{className:Object(l.b)("mt-8","type-larger"),style:{color:s}},c.a.createElement(m.c,{id:e})),a&&c.a.createElement(O.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const V=Object(l.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(V,{className:Object(l.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(l.b)({"pb-8":!a})},e));q.Content=r,q.Icon=o,q.Label=k,q.Row=U,q.SectionHeader=H,q.Subheader=W;var K=a(284);const Q=Object(l.c)(K.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var J=e=>c.a.createElement(Q,Object.assign({},e)),X=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(A.useSelector)(Z.C);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(m.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(m.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(m.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2032:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),l=a(5),r=a(782);const s=(e,t,a)=>l.a`
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
`,o=i.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:a=!0,delay:l=70,initialDelay:o=0,children:m,...u}=e,d=Object(r.a)(),b=Object(n.useMemo)(()=>i.a.Children.map(m,(e,n)=>null===e?e:i.a.createElement(c.a,Object.assign({appear:a||!d,in:a||!d,timeout:t,classNames:s(n,l,o),mountOnEnter:!0},u),e)),[m,l,o,a,d,u,t]);return i.a.createElement(i.a.Fragment,null,b)});t.a=o},2118:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return b}));var n=a(12),i=a.n(n),c=a(6),l="/v2/api/timezones";function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.q)("timezones",l,e,s({idField:"timezone"},t))},m=a(20),u=a(4),d=Object(c.A)(o()),b=Object(u.a)((function(e){return Object(m.a)(d(e),"data",[])}),(function(e){return e.map((function(e){return{label:"(UTC".concat(e.offset,") ").concat(e.timezone.replace(/_/g," ")),value:e.timezone}}))}))},2188:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(12),i=a.n(n),c=a(6),l="/api/s/{site}/stat/ccode";function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.q)("country",l,e,s({idField:"key"},t))},m=a(20),u=a(4),d=Object(c.A)(o()),b=function(e){return Object(m.a)(d(e),"data",[])},E=Object(u.a)(b,(function(e){return e.map((function(e){return{label:e.name,value:e.code}}))}));Object(u.a)(b,(function(e){return e.map((function(e){return{label:e.name,value:e.key}}))}))}}]);