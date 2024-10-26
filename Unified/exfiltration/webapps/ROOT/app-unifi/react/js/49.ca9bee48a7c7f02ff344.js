(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[49],{1820:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(50),r=a(70),l=a(6),o=a(2),s=a(8),m=a(1938),E=a(71),d=a(27),p=a(16),b=256,u=30,_=8,h=32,g=a(100),N=g.a.object().shape({enabled:g.a.boolean(),community:g.a.string().when("enabled",{is:!0,then:g.a.string().label("SETTINGS_GATEWAY_SNMP_LABEL_COMMUNITY_STRING").required().max(b)}),enabledV3:g.a.boolean(),username:g.a.string().when("enabledV3",{is:!0,then:g.a.string().label("SETTINGS_GATEWAY_SNMP_LABEL_USERNAME").required().max(u)}),x_password:g.a.string().when("enabledV3",{is:!0,then:g.a.string().label("SETTINGS_GATEWAY_SNMP_LABEL_PASSWORD").required().min(_).max(h)})}),T=a(44),S=a(5),O=a(1739),x=a(1736),A=a(1737),f=a(795),G=a(167),I=a(62),j=a(2477),R=a(322),C=a(3);const w=Object(S.c)(j.a)`
  margin-left: ${({theme:e})=>e.spacing["spacing-l"]};
`;var y=()=>{const{values:e}=Object(T.e)(),t=Object(s.useSelector)(f.s),a=Object(n.useMemo)(()=>t.filter(e=>e.adopted&&!Object(G.m)(e)&&!Object(G.l)(e)),[t]);return Object(r.f)([Object(C.fetchDevices)(void 0,{crudCacheStrategy:{type:l.a.CACHE}})],c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,null,c.a.createElement(x.a,null,c.a.createElement(R.SearchableGridLabel,{htmlFor:"enabled",alignWith:"toggleSmall",label:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_ENABLE_SNMP1_2"}),description:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_ENABLE_SNMP1_2_DESCRIPTION"})}),c.a.createElement(A.a,{column:!0},c.a.createElement(I.Field,{type:"checkbox",name:"enabled"}))),c.a.createElement(x.a,{disabled:!e.enabled},c.a.createElement(R.SearchableGridLabel,{htmlFor:"community",alignWith:"input",label:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_COMMUNITY_STRING"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_COMMUNITY_STRING_SEARCH_TEXT"}),c.a.createElement(A.a,{column:!0},c.a.createElement(I.Field,{disabled:!e.enabled,name:"community",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_COMMUNITY_PLACEHOLDER"})))),c.a.createElement(O.a,null,c.a.createElement(x.a,null,c.a.createElement(R.SearchableGridLabel,{htmlFor:"enabledV3",alignWith:"toggleSmall",label:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_ENABLE_SNMP3"})}),c.a.createElement(A.a,{column:!0},c.a.createElement(E.g,{alignItems:"center"},c.a.createElement(I.Field,{type:"checkbox",name:"enabledV3"}),a.length>0&&c.a.createElement(w,{description:"SETTINGS_INTERNET_GENERAL_ADV_GW_UNSUPPORTED_DEVICE_DESCRIPTION",devices:a,tooltipWidth:196})))),c.a.createElement(x.a,{disabled:!e.enabledV3},c.a.createElement(R.SearchableGridLabel,{htmlFor:"username",alignWith:"input",label:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_USER_NAME"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_USER_NAME_SEARCH_TEXT"}),c.a.createElement(A.a,{column:!0},c.a.createElement(I.Field,{disabled:!e.enabledV3,name:"username",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_USER_NAME_PLACEHOLDER"}))),c.a.createElement(x.a,{disabled:!e.enabledV3},c.a.createElement(R.SearchableGridLabel,{htmlFor:"x_password",alignWith:"input",label:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PASSWORD"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_PASSWORD_SEARCH_TEXT"}),c.a.createElement(A.a,{column:!0},c.a.createElement(I.Field,{disabled:!e.enabledV3,name:"x_password",type:"password",passwordToggle:!0,placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PASSWORD_PLACEHOLDER"}))))))};var v=e=>{const{onBack:t}=e,a=Object(s.useSelector)(i.selectSnmpSettings),r=Object(s.useDispatch)(),l=Object(n.useContext)(E.l),b=Object(n.useCallback)((e,{setSubmitting:a})=>{const{enabledV3:n,...c}=e;n||(delete c.username,delete c.x_password),r(Object(i.saveSettings)({...c,enabledV3:n})).then(()=>{r(Object(d.c)({icon:p.a.success,message:"SETTINGS_INTERNET_GENERAL_ADV_GW_SAVE_SUCCESS"})),t()}).catch(e=>{r(Object(d.c)({errorMessage:e.msg,errorValues:e,icon:p.a.danger,message:"SETTINGS_INTERNET_GENERAL_ADV_GW_SAVE_ERROR"})),a(!1)})},[r,t]);return c.a.createElement(m.b,{onSubmit:b,title:{component:c.a.createElement(o.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_SNMP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_SNMP"},initialValues:a,isEdit:!1,isView:l,onEscClicked:t,validationSchema:N,showBack:!0,goBack:t},c.a.createElement(y,null))};t.default=()=>{const e=Object(r.h)();return Object(r.f)([Object(i.fetchSettings)({type:l.a.CACHE})],c.a.createElement(v,{onBack:e}))}},1929:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),m=a(520),E=a(521);const d=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(E.a)(t),b=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),u=Object(n.useCallback)(e=>(e={},t={})=>p(e,t)&&b(e,t),[p,b]);return!!e&&c.a.createElement(o.a,{when:u(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(s.a,{actions:[{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:m.b,title:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},c.a.createElement(d,null,c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),c=a(36);t.a=()=>{const e=Object(c.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return V})),a.d(t,"a",(function(){return R}));var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(44),o=a(2847),s=a(2658),m=a(1929),E=a(783),d=a(71),p=a(1940),b=a(15),u=a(32),_=a(42),h=a(1847),g=a(782),N=a(1930);const T=i.a`
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
`;var S=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(N.a)(),o=Object(g.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(h.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:T,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const O=i.a`
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
`;var x=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(N.a)(),o=Object(g.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(h.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:O,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const A=Object(i.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,f=Object(i.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,G=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,I=Object(i.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,j=Object(i.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var R=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>{const{motif:l}=Object(_.a)();return c.a.createElement(x,{ignoredPaths:r},c.a.createElement(f,{flex:"none",height:"65px"},c.a.createElement(S,{ignoredPaths:r},c.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},c.a.createElement(A,{alignItems:"center",flex:"1",height:"100%"},t&&c.a.createElement(I,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},c.a.createElement(b.f,{size:"original"}))),c.a.createElement(G,null,c.a.createElement(j,{weight:"bold"},e.component)),c.a.createElement(A,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&c.a.createElement(I,{legacy:!1,name:"closeButton",type:"button",onClick:n},c.a.createElement(b.y,{size:"original"})))))))};const C=Object(i.c)(d.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,w=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,y=Object(i.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,v=Object(i.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,L=Object(i.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,D=Object(i.c)(d.k)`
  height: 100%;
  width: 100%;
`;var V=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:E,title:b,unsavedChangesModalIgnoredPaths:u,onEscClicked:_,submitText:h="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:g=!1,customFooterButtons:N,hidddenHeader:T,...S})=>c.a.createElement(l.c,Object.assign({enableReinitialize:!0},S),({dirty:i,handleReset:l,handleSubmit:S,isSubmitting:O})=>c.a.createElement(w,{autoComplete:"off",onSubmit:S},c.a.createElement(D,{vertical:!0},!T&&c.a.createElement(R,{goBack:a,hideClose:n,showBack:E,title:b,onEscClicked:_,ignoredPaths:u}),c.a.createElement(p.a,{ignoredPaths:u},c.a.createElement(L,{flex:"1"},c.a.createElement(C,{flex:"none",flexDirection:"column"},e))),!t&&!o&&c.a.createElement(m.a,{ignoredPaths:u,when:i&&!O}),(!o||g)&&c.a.createElement(v,{active:i||g},c.a.createElement(d.g,{justifyContent:N?"space-between":"flex-end",width:"100%",alignItems:"center"},N&&c.a.createElement(y,null,N(O)),!o&&c.a.createElement(d.g,null,c.a.createElement(s.a,{disabled:!i||O,type:"button",variant:"default",onClick:l},c.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(s.a,{disabled:!i||O,type:"submit",variant:"primary"},c.a.createElement(r.c,{id:h}))))))))},1940:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(1847),r=a(5),l=a(782),o=a(1930);const s=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...m})=>{const E=Object(o.a)(),d=Object(l.a)(a),p=Object(n.useMemo)(()=>c.a.Children.map(r,a=>null===a?a:c.a.createElement(i.a,Object.assign({appear:t||!d||E,in:t||!d||E,timeout:e,classNames:s,mountOnEnter:!0},m),a)),[r,t,d,E,e,m]);return c.a.createElement(c.a.Fragment,null,p)}},2477:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(15),o=a(32),s=a(445),m=a(46),E=a(70),d=a(117),p=a(21);const b=Object(i.c)(p.a,{shouldForwardProp:e=>"paddingTop"!==e})`
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`,u=Object(i.c)(o.a,{shouldForwardProp:e=>"paddingLeft"!==e&&"paddingTop"!==e})`
  ${({paddingLeft:e})=>e?`padding-left: ${e};`:""}
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`;t.a=({description:e,title:t,className:a,descriptionValues:n={},devices:i=[],height:_,tooltipWidth:h=400,width:g,wrapperStyle:N,...T})=>{const S=Object(E.m)(),O=i.map((e,t)=>c.a.createElement(b,{alignItems:"center",key:e._id,paddingTop:0===t?"8px":void 0},c.a.createElement(d.c,{device:e}),c.a.createElement(u,{color:"tertiary",paddingLeft:"8px"},Object(m.c)(e)))),x=c.a.createElement(p.a,{flexDirection:"column"},t&&c.a.createElement(o.a,{size:"body",uppercase:!0,weight:"bold"},c.a.createElement(r.c,{id:t})),c.a.createElement(u,{color:"secondary",paddingTop:t?"8px":void 0},c.a.createElement(r.c,{id:e,values:n})),O);return c.a.createElement("div",{className:a,style:N},c.a.createElement(s.a,Object.assign({message:x,width:h},T),c.a.createElement(l.W,{color:S.motifPalette.warning,width:g,height:_})))}}}]);