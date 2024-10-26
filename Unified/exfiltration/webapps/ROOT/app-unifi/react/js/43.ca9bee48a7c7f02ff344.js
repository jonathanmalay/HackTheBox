(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[43],{1829:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),i=a(8),c=a(378),l=a(70),s=a(6),u=a(2120),_=a(2),m=a(20),d=a(215),p=a(1739),E=a(1736),b=a(1914),O=a(1737),f=a(18),g=a(1938),T=a(663),h=a(27),A=a(62),x=a(2005),D=a(2191),N=a(45),I=a(5),S=a(21),v=a(1965),w=a(1953),C=a(2079);const j=Object(I.c)(S.a)`
  margin-left: ${N.a["spacing-xxxxl"]};
`,M=v.a.slice(0,2).map(({label:e,value:t,values:a})=>({label:e,value:C.a[t===w.a.K?"Kbps":"Mbps"],values:a})),L=({download:e})=>{const t=e?"qos_rate_max_down":"qos_rate_max_up",a=e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_LIMIT_DOWNLOAD_BANDWIDTH":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_LIMIT_UPLOAD_BANDWIDTH";return r.a.createElement(E.a,null,r.a.createElement(b.a,{htmlFor:t+"_value",alignWith:"input",label:r.a.createElement(_.c,{id:a}),description:r.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_DESCRIPTION_LIMIT_BANDWIDTH",values:{minKbps:u.c,maxKbps:u.b,minMbps:u.c/1e3,maxMbps:u.b/1e3}})}),r.a.createElement(O.a,null,r.a.createElement(S.a,{justifyContent:"space-between",width:"100%"},r.a.createElement(S.a,{width:"100%",flexFlow:"column"},r.a.createElement(A.Field,{full:!0,name:t+"_value",placeholder:"COMMON_WORD_UNLIMITED",type:"number"})),r.a.createElement(j,{width:"100%"},r.a.createElement(A.Field,{full:!0,name:t+"_unit",type:"dropdown",options:M,translateOptions:!0})))))};var B=e=>{const{initialValues:t,onBack:a}=e,o=Object(i.useDispatch)(),s=Object(i.useSelector)(f.x),N=!!Object(m.a)(t,"_id",!1),I=Object(l.n)({component:r.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_TITLE_CREATE"}),message:"bandwidth-profiles-create"},"bandwidth-profiles-edit-view",t._id?t.name:void 0),S=Object(n.useCallback)((...e)=>o(Object(h.c)(...e)),[]),v=Object(n.useCallback)(Object(x.c)({...e,createToast:S})(async e=>{const a={name:e.name,qos_rate_max_down:Object(D.e)(e,{download:!0}),qos_rate_max_up:Object(D.e)(e,{upload:!0})};return t._id?o(Object(c.updateUserGroup)(t._id,a)):o(Object(c.createUserGroup)(a))},({_id:e,name:t})=>({successMessage:e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_UPDATE_SUCCESS_TOAST":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_CREATE_SUCCESS_TOAST",failureMessage:e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_UPDATE_FAILURE_TOAST":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_CREATE_FAILURE_TOAST",msgValues:{name:t}})),[o,t,c.createUserGroup,c.updateUserGroup]),w=Object(n.useCallback)(()=>o(Object(T.b)({name:t.name,onConfirm:()=>o(Object(c.removeUserGroup)(t)).then(a())})),[o,t,a]);return r.a.createElement(g.b,{goBack:a,initialValues:t,isEdit:N,isView:s,showBack:!0,title:I,validationSchema:u.d,onEscClicked:a,onSubmit:v,footerActiveOverride:!!(null==t?void 0:t._id)&&!t.attr_no_delete,customFooterButtons:e=>(null==t?void 0:t._id)&&!t.attr_no_delete&&r.a.createElement(d.a,{disabled:e,type:"button",variant:"default",onClick:w},r.a.createElement(_.c,{id:"COMMON_ACTION_REMOVE"}))},r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{htmlFor:"name",alignWith:"input",label:r.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_NAME"})}),r.a.createElement(O.a,{column:!0},r.a.createElement(A.Field,{full:!0,name:"name"}))),r.a.createElement(L,{download:!0}),r.a.createElement(L,{upload:!0})))};t.default=()=>{const{groupId:e}=Object(o.m)(),t=Object(i.useSelector)(c.selectUserGroupsData).find(({_id:t})=>t===e),a=Object(l.h)(),_=Object(n.useMemo)(()=>(null==t?void 0:t._id)?{...u.a,...t,qos_rate_max_down_toggle:Object(D.b)(t,{download:!0}),qos_rate_max_down_unit:Object(D.c)(t,{download:!0}),qos_rate_max_down_value:Object(D.d)(t,{download:!0}),qos_rate_max_up_toggle:Object(D.b)(t,{upload:!0}),qos_rate_max_up_unit:Object(D.c)(t,{upload:!0}),qos_rate_max_up_value:Object(D.d)(t,{upload:!0})}:{...u.a},[t]);return Object(l.f)([Object(c.fetchUserGroups)(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],r.a.createElement(B,{initialValues:_,onBack:a}))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=a(2),c=a(1946),l=a.n(c),s=a(1741),u=a(520),_=a(521);const m=Object(o.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:o=null})=>{const c=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),d=Object(_.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),E=Object(n.useCallback)(e=>(e={},t={})=>d(e,t)&&p(e,t),[d,p]);return!!e&&r.a.createElement(l.a,{when:E(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(s.a,{actions:[{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>o?o(e):e()},{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:u.b,title:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>o?o(e):e()},r.a.createElement(m,null,r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,o]=Object(n.useState)(!1),i=Object(n.useRef)();return Object(n.useEffect)(()=>{o(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(i.current=setTimeout(()=>o(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return F})),a.d(t,"a",(function(){return w}));var n=a(0),r=a.n(n),o=a(5),i=a(2),c=a(44),l=a(2847),s=a(2658),u=a(1929),_=a(783),m=a(71),d=a(1940),p=a(15),E=a(32),b=a(42),O=a(1847),f=a(782),g=a(1930);const T=o.a`
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
`;var h=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:o,...i})=>{const c=Object(g.a)(),l=Object(f.a)(o),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(O.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:T,mountOnEnter:!0},i),a)),[a,t,l,c,e,i]);return r.a.createElement(r.a.Fragment,null,s)};const A=o.a`
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
`;var x=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:o,...i})=>{const c=Object(g.a)(),l=Object(f.a)(o),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(O.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:A,mountOnEnter:!0},i),a)),[a,t,l,c,e,i]);return r.a.createElement(r.a.Fragment,null,s)};const D=Object(o.c)(m.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,N=Object(o.c)(m.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(o.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,S=Object(o.c)(m.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,v=Object(o.c)(E.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var w=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:o,ignoredPaths:i})=>{const{motif:c}=Object(b.a)();return r.a.createElement(x,{ignoredPaths:i},r.a.createElement(N,{flex:"none",height:"65px"},r.a.createElement(h,{ignoredPaths:i},r.a.createElement(m.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(D,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(S,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:c},r.a.createElement(p.f,{size:"original"}))),r.a.createElement(I,null,r.a.createElement(v,{weight:"bold"},e.component)),r.a.createElement(D,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!o&&r.a.createElement(S,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(p.y,{size:"original"})))))))};const C=Object(o.c)(m.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,j=Object(o.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,M=Object(o.c)(m.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,L=Object(o.c)(l.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${_.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,B=Object(o.c)(m.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,R=Object(o.c)(m.k)`
  height: 100%;
  width: 100%;
`;var F=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:o,isView:l,showBack:_,title:p,unsavedChangesModalIgnoredPaths:E,onEscClicked:b,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:f=!1,customFooterButtons:g,hidddenHeader:T,...h})=>r.a.createElement(c.c,Object.assign({enableReinitialize:!0},h),({dirty:o,handleReset:c,handleSubmit:h,isSubmitting:A})=>r.a.createElement(j,{autoComplete:"off",onSubmit:h},r.a.createElement(R,{vertical:!0},!T&&r.a.createElement(w,{goBack:a,hideClose:n,showBack:_,title:p,onEscClicked:b,ignoredPaths:E}),r.a.createElement(d.a,{ignoredPaths:E},r.a.createElement(B,{flex:"1"},r.a.createElement(C,{flex:"none",flexDirection:"column"},e))),!t&&!l&&r.a.createElement(u.a,{ignoredPaths:E,when:o&&!A}),(!l||f)&&r.a.createElement(L,{active:o||f},r.a.createElement(m.g,{justifyContent:g?"space-between":"flex-end",width:"100%",alignItems:"center"},g&&r.a.createElement(M,null,g(A)),!l&&r.a.createElement(m.g,null,r.a.createElement(s.a,{disabled:!o||A,type:"button",variant:"default",onClick:c},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(s.a,{disabled:!o||A,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:O}))))))))},1940:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1847),i=a(5),c=a(782),l=a(1930);const s=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:i,...u})=>{const _=Object(l.a)(),m=Object(c.a)(a),d=Object(n.useMemo)(()=>r.a.Children.map(i,a=>null===a?a:r.a.createElement(o.a,Object.assign({appear:t||!m||_,in:t||!m||_,timeout:e,classNames:s,mountOnEnter:!0},u),a)),[i,t,m,_,e,u]);return r.a.createElement(r.a.Fragment,null,d)}},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1965:function(e,t,a){"use strict";var n=a(1953);const r=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=r},2005:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return l}));var n=a(16),r=function(e,t){var a=t.successMessage,n=t.failureMessage;if((a||n)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},o=function(e){return function(t){return function(a){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(i,c){var l=c.props||t;r(l,o);var s=l.createToast,u="function"==typeof o?o(i):o,_=u.msgValues,m=u.successMessage,d=u.failureMessage;a(i,l,c).then((function(){return m&&s({icon:n.a.success,message:m,values:_}),e(c,t)})).catch((function(e){d&&s({icon:n.a.danger,message:d,values:_,errorMessage:e.msg,errorValues:e}),c.setSubmitting(!1)}))}}}},i=o((function(e){return e.setStatus({isSubmitted:!0})}))(),c=o((function(e){return e.setStatus({isSubmitted:!0})})),l=(o((function(e){return e.props.onClose()}))(),o((function(e,t){return t.onBack()})))},2079:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.Kbps="1",e.Mbps="1000"}(n||(n={}))},2120:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c}));var n=a(2079),r={name:"",qos_rate_max_down_toggle:!1,qos_rate_max_down_unit:n.a.Kbps,qos_rate_max_down_value:"",qos_rate_max_up_toggle:!1,qos_rate_max_up_unit:n.a.Kbps,qos_rate_max_up_value:""},o=a(30);const i=1e5,c=2,l=({download:e,upload:t})=>{const a=e?"qos_rate_max_down":"qos_rate_max_up",r=e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_DOWNLOAD":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_UPLOAD";return o.a.number().label(r).when(a+"_unit",{is:e=>e===n.a.Kbps,then:o.a.number().max(i).min(c)}).when(a+"_unit",{is:e=>e===n.a.Mbps,then:o.a.number().max(i/1e3).min(c/1e3)})};var s=o.a.object().shape({name:o.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_NAME").required(),qos_rate_max_down_toggle:o.a.boolean().required(),qos_rate_max_down_unit:o.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_DOWNLOAD").oneOf(Object.values(n.a)).required(),qos_rate_max_down_value:l({download:!0}),qos_rate_max_up_toggle:o.a.boolean().required(),qos_rate_max_up_unit:o.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_UPLOAD").oneOf(Object.values(n.a)).required(),qos_rate_max_up_value:l({upload:!0})})},2191:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return p}));var n=a(1156),r=a(2120),o=a(2079);const i=({download:e,upload:t})=>{if(e)return"qos_rate_max_down";if(t)return"qos_rate_max_up";throw new Error("No limit bandwidth field specified (download/upload) in Bandwidth Profile form getter")},c=(e,{download:t,upload:a})=>e[i({download:t,upload:a})]>-1,l=(e,{download:t,upload:a})=>e[i({download:t,upload:a})]%1e3?o.a.Kbps:o.a.Mbps,s=(e,{download:t,upload:a})=>{const n=i({download:t,upload:a});return e[n]>-1?e[n]%1e3?e[n]:e[n]/1e3:r.a[n+"_value"]},u=(e,{download:t,upload:a})=>{const r=i({download:t,upload:a});return Object(n.a)(e[r+"_value"])?e[r+"_value"]*Number(e[r+"_unit"]):-1};var _=a(0),m=a.n(_),d=a(2);const p=({userGroup:e,download:t,upload:a})=>{const n=i({download:t,upload:a});return e[n]<0?m.a.createElement(d.c,{id:"COMMON_WORD_UNLIMITED"}):m.a.createElement(d.c,{id:"COMMON_UNIT_BPS",values:{prefix:`${e[n]%1e3?e[n]:e[n]/1e3} ${e[n]%1e3?"K":"M"}`}})}}}]);