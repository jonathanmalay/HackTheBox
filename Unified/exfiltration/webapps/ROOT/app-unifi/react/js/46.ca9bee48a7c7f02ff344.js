(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[46],{1831:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a(8),l=a(36),o=a(215),E=a(1972),s=a(18),_=a(1938),m=a(663),u=a(27),p=a(70),T=a(16),O=a(2132),d=a(2471);const R=e=>({name:"",group_type:E.FirewallGroupType.PORT_GROUP,group_members:[],...e});t.default=()=>{const e=Object(p.h)({openFirewall:!0}),{groupId:t}=Object(l.m)(),a=Object(c.useDispatch)(),A=Object(c.useSelector)(E.selectFirewallGroup)(t),b=Object(c.useSelector)(s.x),N=Object(p.n)({component:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_TITLE_NEW"}),message:"firewall-group"},"firewall-group",(null==A?void 0:A._id)?A.name:void 0),S=Object(n.useCallback)((t,{setSubmitting:n})=>a(Object(E.saveFirewallGroup)({...t,group_members:(t.group_members||[]).filter(e=>!!e)})).then(()=>{a(Object(u.c)({icon:T.a.success,message:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_TOAST_SAVE_SUCCESS",values:{name:t.name}})),e()}).catch(e=>{a(Object(u.c)({errorMessage:e.msg,errorValues:e,icon:T.a.danger,message:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_TOAST_SAVE_FAILURE",values:{name:t.name}})),n(!1)}),[a,e]),g=Object(n.useCallback)(()=>a(Object(m.b)({name:A.name,onConfirm:()=>a(Object(E.removeFirewallGroup)({id:A._id,name:A.name})).then(()=>{e()})})),[a,A,e]);return r.a.createElement(_.b,{goBack:e,initialValues:R(A),isView:b,showBack:!0,title:N,validationSchema:O.b,onEscClicked:e,onSubmit:S,footerActiveOverride:!!(null==A?void 0:A._id),customFooterButtons:e=>(null==A?void 0:A._id)&&r.a.createElement(o.a,{disabled:e,type:"button",variant:"default",onClick:g},r.a.createElement(i.c,{id:"COMMON_ACTION_REMOVE"}))},r.a.createElement(d.a,null))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),c=a(2),l=a(1946),o=a.n(l),E=a(1741),s=a(520),_=a(521);const m=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(_.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),T=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&p(e,t),[u,p]);return!!e&&r.a.createElement(o.a,{when:T(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(E.a,{actions:[{type:"button",text:r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:s.b,title:r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},r.a.createElement(m,null,r.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return L}));var n=a(0),r=a.n(n),i=a(5),c=a(2),l=a(44),o=a(2847),E=a(2658),s=a(1929),_=a(783),m=a(71),u=a(1940),p=a(15),T=a(32),O=a(42),d=a(1847),R=a(782),A=a(1930);const b=i.a`
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
`;var N=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...c})=>{const l=Object(A.a)(),o=Object(R.a)(i),E=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(d.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:b,mountOnEnter:!0},c),a)),[a,t,o,l,e,c]);return r.a.createElement(r.a.Fragment,null,E)};const S=i.a`
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
`;var g=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...c})=>{const l=Object(A.a)(),o=Object(R.a)(i),E=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(d.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:S,mountOnEnter:!0},c),a)),[a,t,o,l,e,c]);return r.a.createElement(r.a.Fragment,null,E)};const h=Object(i.c)(m.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,G=Object(i.c)(m.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,M=Object(i.c)(m.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,f=Object(i.c)(T.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var L=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:c})=>{const{motif:l}=Object(O.a)();return r.a.createElement(g,{ignoredPaths:c},r.a.createElement(G,{flex:"none",height:"65px"},r.a.createElement(N,{ignoredPaths:c},r.a.createElement(m.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(h,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(M,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},r.a.createElement(p.f,{size:"original"}))),r.a.createElement(I,null,r.a.createElement(f,{weight:"bold"},e.component)),r.a.createElement(h,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&r.a.createElement(M,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(p.y,{size:"original"})))))))};const P=Object(i.c)(m.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,F=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,x=Object(i.c)(m.g)`
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
`,v=Object(i.c)(m.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,w=Object(i.c)(m.k)`
  height: 100%;
  width: 100%;
`;var y=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:_,title:p,unsavedChangesModalIgnoredPaths:T,onEscClicked:O,submitText:d="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:R=!1,customFooterButtons:A,hidddenHeader:b,...N})=>r.a.createElement(l.c,Object.assign({enableReinitialize:!0},N),({dirty:i,handleReset:l,handleSubmit:N,isSubmitting:S})=>r.a.createElement(F,{autoComplete:"off",onSubmit:N},r.a.createElement(w,{vertical:!0},!b&&r.a.createElement(L,{goBack:a,hideClose:n,showBack:_,title:p,onEscClicked:O,ignoredPaths:T}),r.a.createElement(u.a,{ignoredPaths:T},r.a.createElement(v,{flex:"1"},r.a.createElement(P,{flex:"none",flexDirection:"column"},e))),!t&&!o&&r.a.createElement(s.a,{ignoredPaths:T,when:i&&!S}),(!o||R)&&r.a.createElement(j,{active:i||R},r.a.createElement(m.g,{justifyContent:A?"space-between":"flex-end",width:"100%",alignItems:"center"},A&&r.a.createElement(x,null,A(S)),!o&&r.a.createElement(m.g,null,r.a.createElement(E.a,{disabled:!i||S,type:"button",variant:"default",onClick:l},r.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(E.a,{disabled:!i||S,type:"submit",variant:"primary"},r.a.createElement(c.c,{id:d}))))))))},1940:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1847),c=a(5),l=a(782),o=a(1930);const E=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,...s})=>{const _=Object(o.a)(),m=Object(l.a)(a),u=Object(n.useMemo)(()=>r.a.Children.map(c,a=>null===a?a:r.a.createElement(i.a,Object.assign({appear:t||!m||_,in:t||!m||_,timeout:e,classNames:E,mountOnEnter:!0},s),a)),[c,t,m,_,e,s]);return r.a.createElement(r.a.Fragment,null,u)}},1972:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchFirewallGroups",(function(){return l})),a.d(t,"saveFirewallGroup",(function(){return o})),a.d(t,"removeFirewallGroup",(function(){return E})),a.d(t,"MODEL",(function(){return i})),a.d(t,"PATH",(function(){return c})),a.d(t,"firewallGroupsSelector",(function(){return u})),a.d(t,"selectFirewallGroups",(function(){return p})),a.d(t,"selectFirewallGroup",(function(){return T})),a.d(t,"FirewallGroupType",(function(){return O}));var n=a(28),r=a(6);const i="firewallgroup",c="/api/s/{site}/rest/"+i,l=(e,t)=>Object(r.q)(i,c,e,{...t,idField:"_id"}),o=e=>e._id?Object(r.C)(i,e._id,`${c}/${e._id}`,e):Object(r.i)(i,c,e),E=({id:e,name:t})=>Object(r.n)(i,e,`${c}/${e}`,{},Object(n.a)("SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_TOAST_REMOVE_FAILURE","SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_TOAST_REMOVE_SUCCESS",{name:t}));var s=a(20),_=a(63),m=a(4);const u=Object(r.A)(l()),p=Object(m.a)(u,e=>Object(s.a)(e,"data",[])),T=Object(m.a)(p,e=>Object(_.a)(t=>e.find(({_id:e})=>e===t)));var O;!function(e){e.PORT_GROUP="port-group",e.ADDRESS_GROUP="address-group",e.IPV6_ADDRESS_GROUP="ipv6-address-group"}(O||(O={}))},2132:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(0),r=a.n(n),i=a(2),c=a(1972),l=a(30);const o=[{label:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_TYPE_PORT_GROUP",value:c.FirewallGroupType.PORT_GROUP},{label:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_TYPE_ADDRESS_GROUP",value:c.FirewallGroupType.ADDRESS_GROUP},{label:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_TYPE_IPV6_ADDRESS_GROUP",value:c.FirewallGroupType.IPV6_ADDRESS_GROUP}],E=l.a.object({name:l.a.string().label("SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_NAME_LABEL").required(),group_type:l.a.string(),group_members:l.a.array().when("group_type",{is:c.FirewallGroupType.PORT_GROUP,then:l.a.array().of(l.a.string().unifiPortRange(r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_PORT"}),!0))}).when("group_type",{is:c.FirewallGroupType.ADDRESS_GROUP,then:l.a.array().of(l.a.string().unifiIpv4Range(r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_IP_SUBNET_RANGE",values:{name:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_ADDRESS_LABEL"})}})))}).when("group_type",{is:c.FirewallGroupType.IPV6_ADDRESS_GROUP,then:l.a.array().of(l.a.string().unifiIpv6Range(r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_IPV6"})))})})},2471:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),c=a(2),l=a(44),o=a(1739),E=a(1736),s=a(1914),_=a(1737),m=a(1972),u=a(71),p=a(62),T=a(2132);const O=Object(i.c)("div")`
  flex: none;
  padding-top: ${({hasItems:e})=>e?0:"12px"};
  width: 100%;
`;t.a=({modalForm:e=!1})=>{const{setFieldValue:t,values:a}=Object(l.e)(),i=(Object(n.useContext)(u.l),Object(n.useCallback)(e=>t("group_members",e),[t]));return r.a.createElement(o.a,{padding:e?"none":void 0},r.a.createElement(E.a,null,!e&&r.a.createElement(s.a,{alignWith:"input",htmlFor:"name",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_NAME_LABEL"})}),r.a.createElement(_.a,{column:!0},r.a.createElement(p.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_NAME_LABEL"}))),r.a.createElement(E.a,null,!e&&r.a.createElement(s.a,{alignWith:"dropdown",htmlFor:"group_type",label:r.a.createElement(c.c,{id:"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_TYPE_LABEL"})}),r.a.createElement(_.a,{column:!0},r.a.createElement(p.Field,{full:!0,name:"group_type",options:T.a,translateOptions:!0,type:"dropdown"}))),r.a.createElement(E.a,null,!e&&r.a.createElement(s.a,{alignWith:"input",htmlFor:"group_members[0]",label:r.a.createElement(c.c,{id:a.group_type===m.FirewallGroupType.PORT_GROUP?"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_PORT_LABEL":"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_ADDRESS_LABEL"})}),r.a.createElement(_.a,{column:!0},r.a.createElement(O,{hasItems:a.group_members.length>0},r.a.createElement(p.NewMultiInput,{addButtonLabel:a.group_type===m.FirewallGroupType.PORT_GROUP?"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_PORT_ADD":"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_ADDRESS_ADD",label:a.group_type===m.FirewallGroupType.PORT_GROUP?"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_PORT_LABEL":"SETTINGS_INTERNET_THREAT_MANAGEMENT_FIREWALL_GROUPS_FORM_FIELD_GROUP_MEMBERS_ADDRESS_LABEL",max:1e3,name:"group_members",values:a.group_members,onChange:i})))))}}}]);