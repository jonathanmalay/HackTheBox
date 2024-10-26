(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[53],{1804:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(70),r=a(2),c=a(8),s=a(529),o=a(18),S=a(50),E=a(1938),_=a(27),T=a(16),m=a(36),I=a(1818),d=a(377),u=a.n(d),A=a(805),p=a.n(A),N=a(12),O=a.n(N),b=a(37),M=a(6),g={VIEW_ONLY:"readonly",SITE_ADMIN:"admin",HOTSPOT:"hotspot",ADMIN:"superAdmin"},R="/api/s/{site}/cmd/sitemgr";function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){O()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e){return Object(M.p)(b.a.GRANT_ADMIN,R,e)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(M.q)("admins",R,{data:{cmd:b.a.GET_ADMINS}},{crudCacheStrategy:{type:e},method:"post"})},x=function(e){return Object(M.p)(b.a.GRANT_SUPER_ADMIN,R,e)},j=function(e){return function(){var t=p()(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(Object(M.p)(b.a.INVITE_ADMIN,R,C({},e)));case 2:return t.next=4,a(f());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return Object(M.p)(b.a.REVOKE_ADMIN,R,{admin:e})},v=function(e){return function(){var t=p()(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(L(e));case 2:return t.abrupt("return",a(f()));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){var t=e.role,a=t===g.ADMIN;return Object(M.p)(b.a.UPDATE_ADMIN,R,C(C({},e),{},{role:a?g.VIEW_ONLY:t}))},G=function(e,t){return!(0===e.super_site_permissions.length&&!t.super_site_permissions)&&!Object(s.a)(e.super_site_permissions,t.super_site_permissions)};const y=Object(M.A)(f()),Y=e=>{var t,a;return null!==(a=null===(t=y(e))||void 0===t?void 0:t.data)&&void 0!==a?a:[]};var w=a(599),k=a(5),B=a(1743),U=a(15),V=a(215),$=a(1851),F=a(71),W=a(663),H=a(61),z=[{value:w.a.VIEW_ONLY,label:"COMMON_ADMIN_ROLE_VIEW_ONLY"},{value:w.a.SITE_ADMIN,label:"COMMON_ADMIN_ROLE_SITE_ADMINISTRATOR"},{value:w.a.ADMIN,label:"COMMON_ADMIN_ROLE_ADMINISTRATOR"}],q=a(105),X=a(100),K=X.a.object().shape({name:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_USERNAME_LABEL").required().matches(q.a,l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_USERNAME_REGEX"})),email:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EMAIL_LABEL").email().required(),role:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ROLE_LABEL").required()});var J,Z=X.a.object().shape({name:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_USERNAME_LABEL").required().matches(q.a,l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_USERNAME_REGEX"})),email:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EMAIL_LABEL").email().required(),email_alert_grouping_enabled:X.a.boolean().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_GROUP_IN_EMAIL"),email_alert_grouping_delay:X.a.number().when("email_alert_grouping_enabled",{is:!0,then:X.a.number().label("SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_GROUP_WITHIN").required().min(1).max(60)}),x_password:X.a.string().when(["isSelf","requires_new_password"],{is:(e,t)=>e&&t,then:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_CURRENT_PASSWORD_LABEL").required()}),x_oldpassword:X.a.string().when(["isSelf"],{is:!0,then:X.a.string().when(["requires_new_password"],{is:!1,then:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_CURRENT_PASSWORD_LABEL").required()})})}),Q="connecting",ee="connected",te="disabled",ae="disconnected",ne="not_registered",le=X.a.object().shape({username:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIAL_USERNAME_PLACHOLDER").required(),password:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIAL_PASSWORD_PLACHOLDER").required(),faPrompt:X.a.boolean(),token:X.a.string().when("faPrompt",{is:!0,then:X.a.string().label("SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIALS_2FA_TOKEN").required()})});!function(e){e.PUSH="push_alert_enabled",e.EMAIL="email_alert_enabled"}(J||(J={}));var ie,re=[{value:J.PUSH,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_PUSH_ALERTS"},{value:J.EMAIL,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EMAIL_ALERTS"}];!function(e){e.HTML="html_email_enabled",e.PROF="is_professional_installer"}(ie||(ie={}));var ce=[{value:ie.HTML,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ADVANCED_ENABLE_HTML_EMAIL_TEMPLATE"},{value:ie.PROF,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ADVANCED_ENABLE_OPTIONS"}];const se=[{label:"SETTINGS_SYSTEM_ADMINISTRATION_PERMISSION_DEVICE_ADOPTION",value:"API_DEVICE_ADOPT"},{label:"SETTINGS_SYSTEM_ADMINISTRATION_PERMISSION_DEVICE_RESTART",value:"API_DEVICE_RESTART"}],oe=[{label:"SETTINGS_SYSTEM_ADMINISTRATION_PERMISSION_DASHBOARD_EDITING",value:"API_DASHBOARD_EDIT"},{label:"SETTINGS_SYSTEM_ADMINISTRATION_PERMISSION_SYSTEM_STATS",value:"API_WIDGET_OS_STATS"},{label:"SETTINGS_SYSTEM_ADMINISTRATION_PERMISSION_READ_ONLY_ACCESS_TO_ALL_SITES",value:"GLOBAL_READONLY_ADMIN_ACCESS"},{label:"SETTINGS_SYSTEM_ADMINISTRATION_PERMISSION_SHOW_PENDING_DEVICES",value:"API_STAT_DEVICE_ACCESS_SUPER_SITE_PENDING"}],Se=({is_super:e,role:t})=>e?"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_ROLE_ADMINISTRATOR":t===w.a.SITE_ADMIN?"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_ROLE_SITE_ADMINISTRATOR":"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_ROLE_VIEW_ONLY",Ee=e=>{const t=[],{permissions:a,super_site_permissions:n,role:l,is_super:i}=e,r=l===w.a.SITE_ADMIN;return(r||a&&a.includes("API_DEVICE_ADOPT"))&&t.push("SETTINGS_SYSTEM_ADMINISTRATION_TABLE_PERMISSIONS_ADOPT"),(r||a&&a.includes("API_DEVICE_RESTART"))&&t.push("SETTINGS_SYSTEM_ADMINISTRATION_TABLE_PERMISSIONS_RESTART"),(i||n&&n.includes("API_WIDGET_OS_STATS"))&&t.push("SETTINGS_SYSTEM_ADMINISTRATION_TABLE_PERMISSIONS_OS_STATS"),t},_e=e=>e.name||e.email,Te=e=>{if(!e)return[];const{push_alert_enabled:t,email_alert_enabled:a}=e,n=[];return t&&n.push(J.PUSH),a&&n.push(J.EMAIL),n},me=e=>{if(!e)return[];const{html_email_enabled:t,is_professional_installer:a}=e,n=[];return t&&n.push(ie.HTML),a&&n.push(ie.PROF),n};var Ie=a(44),de=a(1737),ue=a(1736),Ae=a(1741),pe=a(1914),Ne=a(62);const Oe=Object(k.c)(F.g)`
  font-size: ${({theme:e})=>e.fontSize["font-size-xl"]}; // 20px
  position: relative;
  color: ${({theme:e})=>e.motifPalette.text01};
`,be=Object(k.c)(de.a)`
  flex: 1 !important;
  justify-content: flex-end !important;
`,Me=Object(k.c)(ue.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxxl"]}; // 40px
`,ge=Object(k.c)(ue.a)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding-bottom: ${({theme:e})=>e.spacing["spacing-xxxxl"]}; // 32px
`,Re=Object(k.c)(Ne.Field)`
  label {
    color: ${({theme:e})=>e.motifPalette.text03} !important;
  }

  > div:nth-child(2) > div {
    background: ${({theme:e})=>e.motifPalette.ui04} !important;
  }
`;function he({closeModal:e}){const{is_super:t}=Object(c.useSelector)(o.C),{adminId:a}=Object(m.m)(),i="add-admin"===a,{values:{role:s},initialValues:{permissions:S,super_site_permissions:E},isSubmitting:_,resetForm:T,handleSubmit:I,setFieldValue:d}=Object(Ie.e)(),u=Object(n.useMemo)(()=>z.filter(({value:e})=>e!==w.a.ADMIN||t),[t]);return Object(n.useEffect)(()=>{d("permissions",S),d("super_site_permissions",E)},[s,d,S,E]),Object(n.useEffect)(()=>{i&&T()},[i,T]),l.a.createElement(Ae.a,{size:"small",isOpen:i,onRequestClose:e,header:()=>l.a.createElement(Oe,{alignItems:"center",justifyContent:"center"},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADD_NEW_ADMIN"})),actions:[{disabled:_,text:l.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",variant:"default",onClick:e},{disabled:_,text:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_INVITE"}),type:"button",variant:"primary",onClick:()=>I()}]},l.a.createElement(Me,null,l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Ne.Field,{name:"name",full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_USERNAME_LABEL"}))),l.a.createElement(ue.a,null,l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Ne.Field,{name:"email",full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EMAIL_LABEL"}))),l.a.createElement(ue.a,null,l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Re,{type:"dropdown",name:"role",options:u,translateOptions:!0,validated:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ROLE_LABEL",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ROLE_PLACEHOLDER",translatePlaceholder:!0}))),s===w.a.VIEW_ONLY&&l.a.createElement(ge,null,l.a.createElement(Re,{type:"dropdown",name:"permissions",options:se,multi:!0,selectionItemWidth:"auto",translateOptions:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_SITE_PERMISSIONS",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_SITE_PERMISSIONS_PLACEHOLDER",translatePlaceholder:!0})),s===w.a.SITE_ADMIN&&l.a.createElement(ge,null,l.a.createElement(Re,{type:"dropdown",name:"super_site_permissions",options:oe,multi:!0,selectionItemWidth:"auto",translateOptions:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_PERMISSIONS",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_PERMISSIONS_PLACEHOLDER",translatePlaceholder:!0})),l.a.createElement(ue.a,null,l.a.createElement(pe.a,{alignWith:"toggleSmall",htmlFor:"for_sso",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_REMOTE_LABEL"}),description:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_REMOTE_DESCRIPTION"})}),l.a.createElement(be,null,l.a.createElement(Ne.Field,{name:"for_sso",type:"checkbox"}))))}const Ce={name:"",email:"",role:"",for_sso:!1,permissions:se.map(({value:e})=>e),super_site_permissions:oe.map(({value:e})=>e)};function De({closeModal:e}){const t=Object(c.useDispatch)(),{is_super:a}=Object(c.useSelector)(o.C),i=Object(n.useCallback)((n,{resetForm:l,setSubmitting:i})=>{const{role:r,permissions:c,super_site_permissions:s}=n;let o=[];a&&(r===w.a.SITE_ADMIN?o=s:r===w.a.ADMIN&&(o=Ce.super_site_permissions));const S={...n,permissions:r!==w.a.VIEW_ONLY?Ce.permissions:c,super_site_permissions:o},E=_e(S);t(j(S)).then(()=>{e(),l(),t(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_INVITE_SUCCESS",values:{name:E}}))}).catch(({msg:e})=>{t(Object(_.c)({icon:T.a.danger,message:"SETTINGS_SYSTEM_ADMINISTRATION_INVITE_ERROR",values:{name:E},errorMessage:e}))}).finally(()=>{i(!1)})},[t,e,a]);return l.a.createElement(Ie.c,{enableReinitialize:!0,initialValues:Ce,validationSchema:K,onSubmit:i},l.a.createElement(he,{closeModal:e}))}const fe=Object(k.c)("div")`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-radius: ${({theme:e})=>e.spacing["spacing-xs"]}; // 4px
  padding: 3px;
  margin-right: ${({theme:e})=>e.spacing["spacing-xs"]}; // 4px
  text-transform: uppercase;
`,xe=Object(k.c)(V.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]}; // 16px
`,je=Object(k.c)(V.a)`
  padding-right: ${({theme:e})=>e.spacing["spacing-l"]}; // 16px

  > span {
    display: flex;
    align-items: center;
  }
`,Le=[{id:"name",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_USERNAME_LABEL"}),sortable:!0,minWidth:100},{id:"email",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_EMAIL_LABEL"}),sortable:!0,minWidth:100,growthFactor:200},{id:"is_verified",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_VERIFIED_LABEL"}),renderCell:({is_verified:e})=>e?l.a.createElement(U.t,{width:9}):"-",align:"center",minWidth:100},{compare:Object(H.a)(({role:e,is_super:t})=>Se({is_super:t,role:e})),id:"role",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_ROLE_LABEL"}),sortable:!0,renderCell:({is_super:e,role:t})=>l.a.createElement(r.c,{id:Se({is_super:e,role:t})}),minWidth:150,maxWidth:150},{compare:Object(H.a)(e=>Ee(e).join(" ")),id:"permissions",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_TABLE_PERMISSIONS_LABEL"}),sortable:!0,renderCell:e=>Ee(e).map(e=>l.a.createElement(fe,{key:e},l.a.createElement(r.c,{id:e}))),minWidth:170}];function ve(){const e=Object(i.i)("system/administration"),t=Object(m.k)(),a=Object(c.useDispatch)(),s=Object(c.useSelector)(Y),S=Object(c.useSelector)(o.y),{admin_id:E,site_role:I}=Object(c.useSelector)(o.C),d=({_id:e,is_verified:t})=>t&&(S||E===e),u=Object(n.useCallback)(()=>{t.replace(""+e)},[e,t]),A=Object(n.useCallback)(e=>{a(j(e)).then(()=>{a(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_INVITE_SUCCESS",values:{name:_e(e)}}))}).catch(({msg:t})=>{a(Object(_.c)({icon:T.a.danger,message:"SETTINGS_SYSTEM_ADMINISTRATION_INVITE_ERROR",values:{name:_e(e)},errorMessage:t}))})},[a]),p=Object(n.useCallback)(e=>{const t=_e(e);a(Object(W.b)({name:t,onConfirm:()=>{a(v(e._id)).then(()=>{a(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_REMOVE_SUCCESS",values:{name:t}}))}).catch(()=>{a(Object(_.c)({icon:T.a.danger,message:"COMMON_NOTICE_REMOVE_ERROR",values:{name:t}}))})}}))},[a]);return Object(i.f)([f(M.a.CACHE)],l.a.createElement(l.a.Fragment,null,l.a.createElement($.a,{columns:Le,items:s,idField:"_id",disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,onRowClick:a=>d(a)&&t.push(`${e}/admin-table/${a._id}`),renderRowPopoverContent:e=>{const t=Object(B.a)(e,["expanded","lastChild","parent","child"]);return d(t)?null:l.a.createElement(F.g,{justifyContent:"space-around",alignItems:"center"},(({_id:e,is_super:t,is_verified:a,role:n})=>E!==e&&!t&&!a&&n!==w.a.HOTSPOT)(t)&&l.a.createElement(je,{name:"re-invite-admin",type:"button",noWrap:!0,variant:"inline",onClick:()=>A(t),legacy:!1,Icon:l.a.createElement(U.fc,{isActive:!0})},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_RE_INVITE"})),(({_id:e,is_super:t,role:a})=>E!==e&&!t&&(S||I!==a))(t)&&l.a.createElement(je,{name:"remove-admin",type:"button",noWrap:!0,variant:"inline",onClick:()=>p(t),legacy:!1,Icon:l.a.createElement(U.cc,{isActive:!0})},l.a.createElement(r.c,{id:"COMMON_ACTION_REMOVE"})))}}),I!==w.a.VIEW_ONLY&&l.a.createElement(xe,{legacy:!1,name:"add-new-admin",type:"button",variant:"inline",onClick:()=>t.push(e+"/admin-table/add-admin"),Icon:l.a.createElement(U.wb,{isActive:!0})},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADD_NEW_ADMIN"})),l.a.createElement(De,{closeModal:u})))}var Pe=a(1739),Ge=a(112),ye=a(77),Ye=a(21),we=a(83),ke=a(17),Be=a(322),Ue=a(587),Ve=a(375),$e=a(32);const Fe=Object(k.c)("div")`
  border: 1px solid ${({color:e})=>e};
  border-radius: 4px;
`,We=Object(k.c)($e.a)`
  padding: 5px 12px;
  letter-spacing: 1.3px;
`;var He=Object(Ve.b)((function(e){const{level:t,label:a}=(({connected:e,connecting:t,enabled:a,registered:n,theme:l})=>t?{level:l.motifPalette.warning,label:Q}:a?e?{level:l.motifPalette.success,label:ee}:n?{level:l.motifPalette.error,label:ae}:{level:l.motifPalette.error,label:ne}:{level:l.motifPalette.text02,label:te})({...e});return l.a.createElement(Fe,{color:t},l.a.createElement(We,{uppercase:!0},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_"+a.toUpperCase()})))})),ze=a(65);const qe=Object(k.c)(ze.a)`
  footer {
    border-top: none;
    margin-top: 0;
    padding-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]}; // 32px
  }
`,Xe=Object(k.c)(F.g)`
  font-size: ${({theme:e})=>e.fontSize["font-size-xl"]}; // 20px
  font-weight: normal;
  position: relative;
  color: ${({theme:e})=>e.motifPalette.text01};
`,Ke=Object(k.c)("div")`
  cursor: pointer;
  top: 0;
  position: absolute;
  right: 0;
`,Je=Object(k.c)(F.c)`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]}; // 16px
  padding-top: ${({theme:e})=>e.spacing["spacing-xs"]}; // 4px

  > span {
    width: 100%;
    text-align: right;
  }

  &:focus {
    outline: none;
  }
`,Ze=Object(k.c)($e.a,{shouldForwardProp:e=>"paddingTop"!==e&&"paddingBottom"!==e})`
  padding-top: ${({paddingTop:e})=>e}px;
  padding-bottom: ${({paddingBottom:e})=>e}px;
`,Qe=Object(k.c)(Ne.Field)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]}; // 16px
`;function et({closeModal:e,isOpen:t,env:a,register:i,onRegisterControllerCloudAccessCancel:s}){const{isSubmitting:S,isValid:E,handleSubmit:_,resetForm:T,values:{faPrompt:m}}=Object(Ie.e)(),I=Object(c.useSelector)(o.n),d=Object(n.useMemo)(()=>`https://${Object(Ge.b)(a)}/register`,[a]),u=Object(n.useMemo)(()=>`https://${Object(Ge.b)(a)}/manage/settings/2fa`,[a]);Object(n.useEffect)(()=>{t&&T()},[t,T]);const A=Object(n.useCallback)(()=>{e(),i&&s()},[e,i,s]);return l.a.createElement(qe,{size:"small",isOpen:t,onRequestClose:A,header:()=>l.a.createElement(Xe,{alignItems:"center",justifyContent:"center"},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_ENABLE_LABEL"}),l.a.createElement(Ke,{onClick:A},l.a.createElement(U.y,null))),actions:[{disabled:S,text:l.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",variant:"default",onClick:A},{disabled:S||!E,text:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_ENABLE_LABEL"}),type:"button",variant:"primary",onClick:()=>_()}]},l.a.createElement(F.g,{flexDirection:"column"},l.a.createElement(Ze,{paddingTop:40,paddingBottom:m&&20},l.a.createElement(r.c,{id:m?"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIALS_2FA_TEXT":"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIALS_TEXT"})),m?l.a.createElement(Ne.Field,{name:"token",placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIALS_2FA_TOKEN",full:!0,noLocalState:!0}):l.a.createElement(l.a.Fragment,null,l.a.createElement(Ze,{color:"secondary",paddingTop:8,paddingBottom:8},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIAL_DESCRIPTION",values:{user:I}})),l.a.createElement(Ne.Field,{name:"username",placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIAL_USERNAME_PLACHOLDER",full:!0,noLocalState:!0}),l.a.createElement(Qe,{name:"password",placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIAL_PASSWORD_PLACHOLDER",full:!0,type:"password",passwordToggle:!0,noLocalState:!0})),l.a.createElement(Je,{name:"account-prompt",legacy:!1,type:"button",variant:"link",target:"_blank",rel:"noopener noreferrer",href:m?u:d},l.a.createElement(r.c,{id:m?"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIALS_2FA_LINK":"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_CREDENTIAL_ACCOUNT_PROMPT"}))))}var tt=a(180);const at={username:"",password:"",token:"",faPrompt:!1};function nt({closeModal:e,isOpen:t,env:a,register:i,onRegisterControllerCloudAccessCancel:s}){const S=Object(c.useDispatch)(),E=i?Ue.registerControllerCloudAccess:o.f,m=Object(n.useCallback)((t,{setSubmitting:a,setFieldError:n,resetForm:c})=>{const s=Object.keys(t).reduce((e,a)=>(t[a]&&"faPrompt"!==a&&(e[a]=t[a]),e),{});E(s)(S).then(()=>{e(),c(),S(Object(_.c)({icon:T.a.success,message:i?"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_ENABLE_REMOTE_ACCESS_SUCCESS":"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_ENABLE_USER_ACCESS_SUCCESS"}))}).catch(({apiMsg:a})=>{"api.err.Ubic2faTokenRequired"===a?c({values:{...t,faPrompt:!0}}):"api.err.IncorrectUbicCreds"===a?n("password",l.a.createElement(r.c,{id:"API_ERROR_INCORRECT_CREDENTIALS"})):(e(),c(),S(Object(_.c)({icon:T.a.danger,message:i?"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_ENABLE_REMOTE_ACCESS_ERROR":"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_ENABLE_USER_ACCESS_ERROR",errorMessage:tt.a[a]})))}).finally(()=>{a(!1)})},[S,e,i,E]);return l.a.createElement(Ie.c,{enableReinitialize:!0,initialValues:at,validationSchema:le,onSubmit:m},l.a.createElement(et,{closeModal:e,isOpen:t,env:a,register:i,onRegisterControllerCloudAccessCancel:s}))}const lt=Object(k.c)(Pe.a)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui01};
  padding-left: 0 !important;
  margin-left: ${({theme:e})=>e.spacing["spacing-xxxxl"]}; // 32px
`,it=Object(k.c)(U.c)`
  margin-right: 10px;
`,rt=Object(k.c)(Ye.a)`
  padding-top: 15px;
`,ct=Object(k.c)(Ne.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]}; // 8px
`,st=Object(k.c)(F.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]}; // 8px
`,ot=Object(k.c)(de.a)`
  align-items: center;
`;var St=()=>{const{setFieldValue:e}=Object(Ie.e)(),t=Object(c.useDispatch)(),[a,s]=Object(n.useState)(!1),[E,_]=Object(n.useState)(!1),T=Object(c.useSelector)(ye.selectEnv),m=Object(c.useSelector)(o.o),I=Object(c.useSelector)(o.B),d=Object(c.useSelector)(ye.selectSSOLoginEnabled),u=Object(c.useSelector)(ye.selectEnabled),A=Object(c.useSelector)(ye.selectRegistered),{ubic_uuid:p}=Object(c.useSelector)(S.selectSuperCloudAccessSettings),N=Object(c.useSelector)(o.H),O=Object(c.useSelector)(we.q),b=Object(c.useSelector)(ye.selectConnected),g=Object(c.useSelector)(ye.selectConnecting),R=Object(n.useMemo)(()=>!!N&&p===N,[N,p]),h=Object(n.useMemo)(()=>A&&u,[A,u]),C=Object(n.useMemo)(()=>"https://"+Object(Ge.c)(T),[T]),D=Object(n.useMemo)(()=>!m&&(h||d),[d,m,h]),f=Object(n.useMemo)(()=>m&&(!R||!A),[R,A,m]),x=Object(n.useMemo)(()=>R&&!O,[R,O]);return Object(i.f)([Object(ye.fetchSdn)({type:M.a.CACHE})],l.a.createElement(l.a.Fragment,null,l.a.createElement(lt,null,l.a.createElement(ue.a,null,l.a.createElement(Be.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"cloudAccess.enabled",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_ENABLE_LABEL"}),description:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_ENABLE_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_ENABLE_SEARCH_TEXT"}),l.a.createElement(de.a,null,l.a.createElement(Ye.a,null,l.a.createElement(ct,{name:"cloudAccess.enabled",type:"checkbox",afterChange:e=>{e&&!p?(_(!0),s(!0)):_(!1)}}),x&&l.a.createElement(F.c,{legacy:!1,name:"remove-controller-cloud-access",type:"button",variant:"inline",onClick:()=>{t(Object(W.a)({title:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_CONFIRM_REMOVE_TITLE",message:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_CONFIRM_REMOVE_DESCR",size:"medium",onConfirm:()=>{t(Object(ke.e)()),t(Object(Ue.unregisterControllerCloudAccess)())}}))}},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_DISABLE_REMOVE"}))))),l.a.createElement(ue.a,null,l.a.createElement(Be.SearchableGridLabel,{alignWith:8,htmlFor:"cloudStatus",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_STATUS_LABEL"})}),l.a.createElement(de.a,{unlimitedWidth:!0,column:!0},l.a.createElement(He,{connected:b,connecting:g,enabled:u,registered:A}),"stage"===T&&l.a.createElement(rt,{alignItems:"center"},l.a.createElement(it,{size:"large"}),l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_NOTIFICATION"}))))),(m||D)&&l.a.createElement(lt,null,h&&l.a.createElement(ue.a,null,l.a.createElement(Be.SearchableGridLabel,{label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_DASHBOARD_LABEL"}),searchIgnore:!0}),l.a.createElement(de.a,null,l.a.createElement(F.c,{legacy:!1,name:"go-to-cloud-access-dashboard",variant:"inline",href:C,target:"_blank",rel:"noopener noreferrer"},C))),l.a.createElement(ue.a,null,l.a.createElement(Be.SearchableGridLabel,{label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_CONFIGURED_FOR_LABEL"}),searchIgnore:!0}),l.a.createElement(ot,{unlimitedWidth:!0},m&&I,D&&l.a.createElement(st,{legacy:!1,name:"enable-user-cloud-access",type:"button",variant:"inline",onClick:()=>s(!0)},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ENABLE_USER_ACCESS"})),f&&l.a.createElement(st,{legacy:!1,name:"disable-user-cloud-access",type:"button",variant:"inline",onClick:()=>{t(Object(W.a)({title:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_CONFIRM_DISABLE_USER_ACCESS_TITLE",message:"SETTINGS_SYSTEM_ADMINISTRATION_REMOTE_ACCESS_CONFIRM_DISABLE_USER_ACCESS_DESCR",size:"medium",onConfirm:()=>{t(Object(ke.e)()),t(Object(o.e)())}}))}},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_DISABLE_USER_ACCESS"}))))),l.a.createElement(Pe.a,null,l.a.createElement(ue.a,null,l.a.createElement(Be.SearchableGridLabel,{htmlFor:"sdn.sso_login_enabled",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_SYNC_LABEL"}),description:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_SYNC_DESCRIPTION"})}),l.a.createElement(de.a,null,l.a.createElement(Ne.Field,{type:"checkbox",name:"sdn.sso_login_enabled"})))),l.a.createElement(nt,{env:T,isOpen:a,closeModal:()=>s(!1),register:E,onRegisterControllerCloudAccessCancel:()=>{e("cloudAccess.enabled",!1)}})))},Et=a(1915);const _t=Object(k.c)(ze.a,{shouldForwardProp:e=>!["shadow","isRemoveVisible"].includes(e)})`
  padding: 0 !important;
  width: 448px !important;
  z-index: 1337;
  footer {
    margin-top: 0;
    padding: ${({theme:e})=>`${e.spacing["spacing-xxl"]} ${e.spacing["spacing-xxxxl"]}`}; // 24px 32px 24px 32px
    ${({theme:e,shadow:t})=>t&&`box-shadow: 0 -1px 3px ${e.motifPalette.shadow02};`}
    z-index: 1;
    border-top: none;

    ${({isRemoveVisible:e})=>e&&"& > div {\n      width: 100%;\n\n      & > div:first-child {\n        margin-right: auto;\n      }\n    }"}
  }
`,Tt=Object(k.c)("div")`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]}; // 0 32px
  height: 450px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;

    &-track {
      background-color: ${({theme:e})=>e.motifPalette.ui04};
    }

    &-thumb {
      background-color: ${({theme:e})=>e.motifPalette.ui05};
      border-radius: 4px;
    }
  }
`,mt=Object(k.c)("div")`
  padding-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]}; // 24px
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  > div:last-child {
    border: none;
    padding-bottom: 0;
  }
`,It=Object(k.c)(F.g)`
  font-size: ${({theme:e})=>e.fontSize["font-size-xl"]}; // 20px
  position: relative;
  color: ${({theme:e})=>e.motifPalette.text01};
  padding-top: ${({theme:e})=>e.spacing["spacing-xxl"]}; // 24px;
  padding-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]}; // 24px;
  ${({theme:e,shadow:t})=>t&&"box-shadow: 0 1px 3px "+e.motifPalette.shadow02};
  z-index: 1;
`,dt=Object(k.c)(Ne.Field)`
  label {
    color: ${({theme:e})=>e.motifPalette.text03} !important;
  }

  > div:nth-child(2) > div {
    background: ${({theme:e})=>e.motifPalette.ui04} !important;
  }
`,ut=Object(k.c)(ue.a)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding-bottom: ${({theme:e})=>e.spacing["spacing-xxxxl"]}; // 32px
`,At=Object(k.c)(de.a)`
  flex: 1 !important;
  justify-content: flex-end !important;
`,pt=Object(k.c)(pe.a)`
  flex: none !important;
  padding-right: 0 !important;
  align-self: center;
  justify-content: flex-end;
  color: ${({theme:e})=>e.motifPalette.text02} !important;
`,Nt=Object(k.c)(de.a)`
  margin-right: 16px;
`,Ot=Object(k.c)($e.a)`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]}; // 12px
`;function bt({closeModal:e,adminId:t,isSelf:a}){const i=Object(c.useDispatch)(),s=Object(c.useSelector)(o.x),S=a||!s,[E,m]=Object(n.useState)(!1),[I,d]=Object(n.useState)(!0),{resetForm:u,isSubmitting:A,handleSubmit:p,initialValues:{admin_id:N,is_super:O,name:b},values:{role:M,email_alert_grouping_delay:g,alerts:R,requires_new_password:h}}=Object(Ie.e)(),C=!!t,D=Object(c.useSelector)(o.y),{admin_id:f,site_role:x}=Object(c.useSelector)(o.C),j=f!==N&&!O&&(D||x!==M);Object(n.useEffect)(()=>{C&&u()},[C,u]);const L=Object(n.useCallback)(()=>i(Object(W.b)({name:b,onConfirm:()=>i(v(t)).then(()=>{i(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_REMOVE_SUCCESS",values:{name:b}})),e()}).catch(()=>{i(Object(_.c)({icon:T.a.danger,message:"COMMON_NOTICE_REMOVE_ERROR",values:{name:b}}))})})),[t,e,i,b]),P=[j&&{disabled:A,text:l.a.createElement(r.c,{id:"COMMON_ACTION_REMOVE"}),type:"button",variant:"default",onClick:L},{disabled:A,text:l.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",variant:"default",onClick:e},{disabled:A,text:l.a.createElement(r.c,{id:"COMMON_ACTION_SAVE_CHANGES"}),type:"button",variant:"primary",onClick:()=>p()}].filter(Boolean);return l.a.createElement(_t,{size:"small",isOpen:C,onRequestClose:e,header:()=>l.a.createElement(It,{alignItems:"center",justifyContent:"center",shadow:E},l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_EDIT_ACCOUNT"})),shadow:I,actions:P,isRemoveVisible:j},l.a.createElement(Tt,{onScroll:({target:e})=>{const{scrollTop:t,clientHeight:a,scrollHeight:n}=e;m(t>0),d(n-t-a>1)}},l.a.createElement(mt,null,l.a.createElement(ue.a,{disabled:!S},l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Ne.Field,{name:"name",full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_USERNAME_LABEL",allowReadOnly:S}))),l.a.createElement(ue.a,{disabled:!S},l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Ne.Field,{name:"email",full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EMAIL_LABEL",allowReadOnly:S}))),l.a.createElement(ue.a,{disabled:!S},l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Ne.Field,{name:"x_password",full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_EDIT_PASSWORD_LABEL",type:"password",passwordToggle:!0,allowReadOnly:S}))),!a&&l.a.createElement(ue.a,{disabled:!S},l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(dt,{type:"dropdown",name:"role",options:z,translateOptions:!0,full:!0,validated:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ROLE_LABEL",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ROLE_PLACEHOLDER",translatePlaceholder:!0,allowReadOnly:S}))),M===w.a.VIEW_ONLY&&!a&&l.a.createElement(ut,null,l.a.createElement(dt,{type:"dropdown",name:"permissions",options:se,multi:!0,selectionItemWidth:"auto",translateOptions:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_SITE_PERMISSIONS",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_SITE_PERMISSIONS_PLACEHOLDER",translatePlaceholder:!0,allowReadOnly:S})),M===w.a.SITE_ADMIN&&l.a.createElement(ut,null,l.a.createElement(dt,{type:"dropdown",name:"super_site_permissions",options:oe,multi:!0,selectionItemWidth:"auto",translateOptions:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_PERMISSIONS",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_PERMISSIONS_PLACEHOLDER",translatePlaceholder:!0,allowReadOnly:S})),l.a.createElement(ue.a,null,l.a.createElement(dt,{type:"dropdown",name:"alerts",options:re,multi:!0,selectionItemWidth:"auto",translateOptions:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ALERTS_LABEL",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ALERTS_PLACEHOLDER",translatePlaceholder:!0,allowReadOnly:S})),R.includes(J.EMAIL)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ue.a,{disabled:!S},l.a.createElement(pe.a,{htmlFor:"email_alert_grouping_enabled",alignWith:"toggleSmall",label:l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_GROUP_IN_EMAIL"})}),l.a.createElement(At,null,l.a.createElement(Ne.Field,{type:"checkbox",name:"email_alert_grouping_enabled",allowReadOnly:S}))),l.a.createElement(ut,{disabled:!S},l.a.createElement(Nt,{column:!0,unlimitedWidth:!0},l.a.createElement(Ne.Field,{full:!0,name:"email_alert_grouping_delay",type:"number",label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_GROUP_WITHIN",min:1,allowReadOnly:S})),l.a.createElement(pt,{htmlFor:"email_alert_grouping_delay",alignWith:"input",label:l.a.createElement(r.c,{id:"COMMON_DATETIME_LABEL_MINUTES_CAPITALIZED",values:{minutes:g}})}))),M!==w.a.VIEW_ONLY&&a&&l.a.createElement(ue.a,null,l.a.createElement(dt,{type:"dropdown",name:"advancedOptions",options:ce,multi:!0,selectionItemWidth:"auto",translateOptions:!0,full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ADVANCED_OPTIONS_LABEL",translateLabel:!0,placeholder:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_ADVANCED_OPTIONS_PLACEHOLDER",translatePlaceholder:!0,allowReadOnly:S})),a&&!h&&l.a.createElement(ue.a,{disabled:!S},l.a.createElement(de.a,{column:!0,unlimitedWidth:!0},l.a.createElement(Ot,null,l.a.createElement(r.c,{id:"SETTINGS_SYSTEM_ADMINISTRATION_CURRENT_PASSWORD_DESCRIPTION"})),l.a.createElement(Ne.Field,{name:"x_oldpassword",full:!0,label:"SETTINGS_SYSTEM_ADMINISTRATION_CURRENT_PASSWORD_LABEL",type:"password",passwordToggle:!0,allowReadOnly:S}))))))}const Mt=(e,t,a)=>{if(t){const{email_alert_grouping_delay:e}=a||{},n={...a,x_oldpassword:"",x_password:"",alerts:Te(a),advancedOptions:me(a),isSelf:t};return e&&(n.email_alert_grouping_delay=Object(Et.a)(e/60,2)),n}const{email_alert_grouping_delay:n}=e||{},l={...e,x_password:"",alerts:Te(e),advancedOptions:me(e),role:(null==e?void 0:e.is_super)?w.a.ADMIN:null==e?void 0:e.role,isSelf:t};return n&&(l.email_alert_grouping_delay=Object(Et.a)(n/60,2)),l};function gt({closeModal:e}){var t;const a=Object(c.useDispatch)(),{adminId:i}=Object(m.m)(),r=Object(c.useSelector)(o.C),S=Object(c.useSelector)((E=i,e=>Y(e).find(({_id:e})=>e===E)));var E;const I=(null==r?void 0:r.admin_id)===i,d=Object(n.useCallback)((t,{resetForm:n,setSubmitting:l})=>{const{name:i,email:r,x_password:c,x_oldpassword:E,alerts:m,advancedOptions:d,email_alert_grouping_enabled:A,email_alert_grouping_delay:N,_id:O,is_super:h,is_verified:C,role:j,super_site_permissions:L,super_site_role:v,permissions:y}=t,Y=m.includes(J.EMAIL),k=m.includes(J.PUSH),B=d.includes(ie.HTML),U=d.includes(ie.PROF),V=Y&&A?Object(Et.a)(60*N):0,$=Y&&A;if(I){const t={email:r,name:i,x_oldpassword:E,x_password:c,email_alert_enabled:Y,email_alert_grouping_enabled:$,email_alert_grouping_delay:V,push_alert_enabled:k,html_email_enabled:B,is_professional_installer:U};a(Object(o.R)(t)).then(()=>{a(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EDIT_SELF_SUCCESS"})),a(f()),e(),n()}).catch(({msg:e})=>{a(Object(_.c)({icon:T.a.danger,message:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EDIT_SELF_ERROR",errorMessage:e}))}).finally(()=>{l(!1)})}else{let t=[];j===w.a.SITE_ADMIN?t=L:j===w.a.ADMIN&&(t=oe.map(({value:e})=>e));const o={admin:O,email:r,email_alert_enabled:Y,email_alert_grouping_enabled:$,email_alert_grouping_delay:V,html_email_enabled:B,is_professional_installer:U,is_super:h,is_verified:C,name:i,permissions:j!==w.a.VIEW_ONLY?se.map(({value:e})=>e):y,push_alert_enabled:k,role:j,super_site_permissions:t,super_site_role:v,x_password:c};a((F=o,W=S,function(){var e=p()(u.a.mark((function e(t){var a,n,l,i,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=F.role,n=a===g.ADMIN,l=!n&&W.is_super,i=n&&!W.is_super,r=!Object(s.a)(F.permissions,W.permissions),c=a!==W.role&&[g.VIEW_ONLY,g.SITE_ADMIN].includes(F.role),o=G(F,W),e.next=9,t(P(F));case 9:if(e.t0=l,!e.t0){e.next=13;break}return e.next=13,t((S=F.admin,Object(M.p)(b.a.REVOKE_SUPER_ADMIN,R,{admin:S})));case 13:if(e.t1=i,!e.t1){e.next=17;break}return e.next=17,t(x({admin:F.admin}));case 17:if(n){e.next=26;break}if(e.t2=c||r,!e.t2){e.next=22;break}return e.next=22,t(D({admin:F.admin,role:a,permissions:F.permissions}));case 22:if(e.t3=o,!e.t3){e.next=26;break}return e.next=26,t(x({admin:F.admin,permissions:F.super_site_permissions,role:"nobody"}));case 26:return e.abrupt("return",t(f()));case 27:case"end":return e.stop()}var S}),e)})));return function(t){return e.apply(this,arguments)}}())).then(()=>{a(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EDIT_ADMIN_SUCCESS",values:{name:i}})),a(f()),e(),n()}).catch(({msg:e})=>{a(Object(_.c)({icon:T.a.danger,message:"SETTINGS_SYSTEM_ADMINISTRATION_ADMIN_EDIT_ADMIN_ERROR",values:{name:i},errorMessage:e}))}).finally(()=>{l(!1)})}var F,W},[a,e,I,S]);return l.a.createElement(Ie.c,{enableReinitialize:!0,initialValues:Mt(S,I,r),validationSchema:Z,onSubmit:d},l.a.createElement(bt,{closeModal:e,adminId:null!==(t=null==S?void 0:S._id)&&void 0!==t?t:I&&(null==r?void 0:r.admin_id),isSelf:I}))}var Rt=()=>{const{adminEndpoint:e}=Object(m.m)(),{site_role:t}=Object(c.useSelector)(o.C),a=Object(i.i)("system/administration"),s=Object(m.k)(),S=Object(n.useCallback)(()=>{s.replace(""+a)},[a,s]),E=Object(n.useMemo)(()=>[{id:"admins",label:l.a.createElement(r.c,{id:"SETTINGS_ADMINS_NAME"}),renderContent:()=>l.a.createElement(ve,null),openByDefault:"admin-table"===e}],[e]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(St,null),t!==w.a.VIEW_ONLY&&l.a.createElement(I.a,{items:E}),l.a.createElement(gt,{closeModal:S}))};const ht={isSubmitted:!1};var Ct=({onBack:e})=>{const t=Object(c.useDispatch)(),a=Object(c.useSelector)(o.x),i=Object(c.useSelector)(S.selectSuperCloudAccessSettings),m=Object(c.useSelector)(S.selectSuperSdnSettings),I=Object(n.useMemo)(()=>({cloudAccess:{...i},sdn:{...m}}),[i,m]),d=Object(n.useMemo)(()=>({component:l.a.createElement(r.c,{id:"SETTINGS_ADMINISTRATION_FORM_TITLE"}),message:"administration"}),[]),u=Object(n.useCallback)((e,{setStatus:a,setSubmitting:n})=>{const{cloudAccess:l,sdn:i}=e,r=[];Object(s.a)(l,I.cloudAccess)||r.push(t(Object(S.saveCloudAccessSettings)(l))),Object(s.a)(i,I.sdn)||r.push(t(Object(S.saveSettings)(i))),Promise.all(r).then(()=>{t(Object(_.c)({icon:T.a.success,message:"SETTINGS_SYSTEM_ADMINISTRATION_SAVE_SUCCESS"})),t(Object(S.fetchSettings)()),a({isSubmitted:!0})}).catch(e=>{t(Object(_.c)({errorMessage:e.msg,errorValues:e,icon:T.a.danger,message:"SETTINGS_SYSTEM_ADMINISTRATION_SAVE_ERROR"})),n(!1)})},[t,I]);return l.a.createElement(E.b,{goBack:e,hideClose:!0,initialStatus:ht,initialValues:I,isEdit:!a,isView:a,showBack:!0,title:d,validationSchema:void 0,onEscClicked:e,onSubmit:u,unsavedChangesModalIgnoredPaths:/\/admin-table((\/)|(\/[a-zA-Z0-9_-]+\/?))?$/},l.a.createElement(Rt,null))};t.default=()=>{const e=Object(i.h)();return l.a.createElement(Ct,{onBack:e})}},1929:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(5),r=a(2),c=a(1946),s=a.n(c),o=a(1741),S=a(520),E=a(521);const _=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const c=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),T=Object(E.a)(t),m=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),I=Object(n.useCallback)(e=>(e={},t={})=>T(e,t)&&m(e,t),[T,m]);return!!e&&l.a.createElement(s.a,{when:I(t)},({onCancel:e,onConfirm:t})=>l.a.createElement(o.a,{actions:[{type:"button",text:l.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:l.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:S.b,title:l.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},l.a.createElement(_,null,l.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),l=a(36);t.a=()=>{const e=Object(l.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return f}));var n=a(0),l=a.n(n),i=a(5),r=a(2),c=a(44),s=a(2847),o=a(2658),S=a(1929),E=a(783),_=a(71),T=a(1940),m=a(15),I=a(32),d=a(42),u=a(1847),A=a(782),p=a(1930);const N=i.a`
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
`;var O=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const c=Object(p.a)(),s=Object(A.a)(i),o=Object(n.useMemo)(()=>l.a.Children.map(a,a=>null===a?a:l.a.createElement(u.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:N,mountOnEnter:!0},r),a)),[a,t,s,c,e,r]);return l.a.createElement(l.a.Fragment,null,o)};const b=i.a`
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
`;var M=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const c=Object(p.a)(),s=Object(A.a)(i),o=Object(n.useMemo)(()=>l.a.Children.map(a,a=>null===a?a:l.a.createElement(u.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:b,mountOnEnter:!0},r),a)),[a,t,s,c,e,r]);return l.a.createElement(l.a.Fragment,null,o)};const g=Object(i.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,R=Object(i.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,h=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,C=Object(i.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,D=Object(i.c)(I.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var f=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>{const{motif:c}=Object(d.a)();return l.a.createElement(M,{ignoredPaths:r},l.a.createElement(R,{flex:"none",height:"65px"},l.a.createElement(O,{ignoredPaths:r},l.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},l.a.createElement(g,{alignItems:"center",flex:"1",height:"100%"},t&&l.a.createElement(C,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:c},l.a.createElement(m.f,{size:"original"}))),l.a.createElement(h,null,l.a.createElement(D,{weight:"bold"},e.component)),l.a.createElement(g,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&l.a.createElement(C,{legacy:!1,name:"closeButton",type:"button",onClick:n},l.a.createElement(m.y,{size:"original"})))))))};const x=Object(i.c)(_.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,j=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,L=Object(i.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,v=Object(i.c)(s.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,P=Object(i.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,G=Object(i.c)(_.k)`
  height: 100%;
  width: 100%;
`;var y=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:s,showBack:E,title:m,unsavedChangesModalIgnoredPaths:I,onEscClicked:d,submitText:u="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:A=!1,customFooterButtons:p,hidddenHeader:N,...O})=>l.a.createElement(c.c,Object.assign({enableReinitialize:!0},O),({dirty:i,handleReset:c,handleSubmit:O,isSubmitting:b})=>l.a.createElement(j,{autoComplete:"off",onSubmit:O},l.a.createElement(G,{vertical:!0},!N&&l.a.createElement(f,{goBack:a,hideClose:n,showBack:E,title:m,onEscClicked:d,ignoredPaths:I}),l.a.createElement(T.a,{ignoredPaths:I},l.a.createElement(P,{flex:"1"},l.a.createElement(x,{flex:"none",flexDirection:"column"},e))),!t&&!s&&l.a.createElement(S.a,{ignoredPaths:I,when:i&&!b}),(!s||A)&&l.a.createElement(v,{active:i||A},l.a.createElement(_.g,{justifyContent:p?"space-between":"flex-end",width:"100%",alignItems:"center"},p&&l.a.createElement(L,null,p(b)),!s&&l.a.createElement(_.g,null,l.a.createElement(o.a,{disabled:!i||b,type:"button",variant:"default",onClick:c},l.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),l.a.createElement(o.a,{disabled:!i||b,type:"submit",variant:"primary"},l.a.createElement(r.c,{id:u}))))))))},1940:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(1847),r=a(5),c=a(782),s=a(1930);const o=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...S})=>{const E=Object(s.a)(),_=Object(c.a)(a),T=Object(n.useMemo)(()=>l.a.Children.map(r,a=>null===a?a:l.a.createElement(i.a,Object.assign({appear:t||!_||E,in:t||!_||E,timeout:e,classNames:o,mountOnEnter:!0},S),a)),[r,t,_,E,e,S]);return l.a.createElement(l.a.Fragment,null,T)}}}]);