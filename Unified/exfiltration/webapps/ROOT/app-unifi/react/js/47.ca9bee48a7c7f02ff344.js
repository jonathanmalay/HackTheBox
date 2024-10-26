(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[47],{1785:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a(8),l=a(3),o=a(34),E=a(1949),_=a(70),s=a(6),m=a(2065);const T={};t.default=()=>{const{id:e}=Object(c.m)(),t=Object(i.useSelector)(E.selectPortForwardData).find(t=>t._id===e),a=Object(_.h)();return Object(_.f)([Object(E.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:s.a.CACHE}}),Object(l.fetchSiteGateway)(),Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],r.a.createElement(m.a,{initialValues:t||T,onBack:a}))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),i=a(2),l=a(1946),o=a.n(l),E=a(1741),_=a(520),s=a(521);const m=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),T=Object(s.a)(t),d=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),p=Object(n.useCallback)(e=>(e={},t={})=>T(e,t)&&d(e,t),[T,d]);return!!e&&r.a.createElement(o.a,{when:p(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(E.a,{actions:[{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:_.b,title:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},r.a.createElement(m,null,r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),i=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(i.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return C})),a.d(t,"a",(function(){return P}));var n=a(0),r=a.n(n),c=a(5),i=a(2),l=a(44),o=a(2847),E=a(2658),_=a(1929),s=a(783),m=a(71),T=a(1940),d=a(15),p=a(32),R=a(42),u=a(1847),O=a(782),N=a(1930);const A=c.a`
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
`;var b=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...i})=>{const l=Object(N.a)(),o=Object(O.a)(c),E=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(u.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:A,mountOnEnter:!0},i),a)),[a,t,o,l,e,i]);return r.a.createElement(r.a.Fragment,null,E)};const I=c.a`
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
`;var g=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...i})=>{const l=Object(N.a)(),o=Object(O.a)(c),E=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(u.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:I,mountOnEnter:!0},i),a)),[a,t,o,l,e,i]);return r.a.createElement(r.a.Fragment,null,E)};const f=Object(c.c)(m.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,h=Object(c.c)(m.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,G=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,S=Object(c.c)(m.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,D=Object(c.c)(p.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var P=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:i})=>{const{motif:l}=Object(R.a)();return r.a.createElement(g,{ignoredPaths:i},r.a.createElement(h,{flex:"none",height:"65px"},r.a.createElement(b,{ignoredPaths:i},r.a.createElement(m.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(f,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(S,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},r.a.createElement(d.f,{size:"original"}))),r.a.createElement(G,null,r.a.createElement(D,{weight:"bold"},e.component)),r.a.createElement(f,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&r.a.createElement(S,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(d.y,{size:"original"})))))))};const W=Object(c.c)(m.g)`
  width: 100%;
  max-width: ${s.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,F=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,x=Object(c.c)(m.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,w=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${s.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,L=Object(c.c)(m.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,j=Object(c.c)(m.k)`
  height: 100%;
  width: 100%;
`;var C=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:s,title:d,unsavedChangesModalIgnoredPaths:p,onEscClicked:R,submitText:u="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:N,hidddenHeader:A,...b})=>r.a.createElement(l.c,Object.assign({enableReinitialize:!0},b),({dirty:c,handleReset:l,handleSubmit:b,isSubmitting:I})=>r.a.createElement(F,{autoComplete:"off",onSubmit:b},r.a.createElement(j,{vertical:!0},!A&&r.a.createElement(P,{goBack:a,hideClose:n,showBack:s,title:d,onEscClicked:R,ignoredPaths:p}),r.a.createElement(T.a,{ignoredPaths:p},r.a.createElement(L,{flex:"1"},r.a.createElement(W,{flex:"none",flexDirection:"column"},e))),!t&&!o&&r.a.createElement(_.a,{ignoredPaths:p,when:c&&!I}),(!o||O)&&r.a.createElement(w,{active:c||O},r.a.createElement(m.g,{justifyContent:N?"space-between":"flex-end",width:"100%",alignItems:"center"},N&&r.a.createElement(x,null,N(I)),!o&&r.a.createElement(m.g,null,r.a.createElement(E.a,{disabled:!c||I,type:"button",variant:"default",onClick:l},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(E.a,{disabled:!c||I,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:u}))))))))},1940:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1847),i=a(5),l=a(782),o=a(1930);const E=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:i,..._})=>{const s=Object(o.a)(),m=Object(l.a)(a),T=Object(n.useMemo)(()=>r.a.Children.map(i,a=>null===a?a:r.a.createElement(c.a,Object.assign({appear:t||!m||s,in:t||!m||s,timeout:e,classNames:E,mountOnEnter:!0},_),a)),[i,t,m,s,e,_]);return r.a.createElement(r.a.Fragment,null,T)}},1947:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1847),i=a(5);const l=(e,t)=>i.a`
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
`;t.a=r.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:i="0 0 32px",wrap:o=!1,children:E,..._})=>{const s=Object(n.useMemo)(()=>r.a.Children.map(E,(n,i)=>r.a.createElement(c.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,void 0),mountOnEnter:!0},_),null===n?r.a.createElement("div",null):n)),[E,a,t,_,e]);return o?r.a.createElement(c.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,i),mountOnEnter:!0},_),r.a.createElement("div",null,E)):r.a.createElement(r.a.Fragment,null,s)})},1949:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchPortForwardRules",(function(){return l})),a.d(t,"fetchPortForwardRule",(function(){return o})),a.d(t,"savePortForwardRule",(function(){return E})),a.d(t,"removePortForwardRule",(function(){return _})),a.d(t,"MODEL",(function(){return r})),a.d(t,"PATH",(function(){return c})),a.d(t,"selectPortForwardRules",(function(){return T})),a.d(t,"selectPortForwardData",(function(){return d})),a.d(t,"selectPortForwardRecord",(function(){return p})),a.d(t,"PortForwardInterface",(function(){return R}));var n=a(6),r="portforward",c="/api/s/{site}/rest/".concat(r),i=a(28);const l=(e={},t={})=>Object(n.q)(r,c,e,{idField:"_id",...t}),o=e=>Object(n.t)(r,c,e),E=e=>{const t=Object(i.a)("SETTINGS_GATEWAY_PORT_FORWARD_CREATE_ERROR","SETTINGS_GATEWAY_PORT_FORWARD_CREATE_SUCCESS"),{_id:a}=e;return a?Object(n.C)(r,a,`${c}/${a}`,e,{},t):Object(n.i)(r,c,e,{},t)},_=({_id:e,name:t})=>Object(n.n)(r,e,`${c}/${e}`,{},Object(i.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_SUCCESS_TOAST",{name:t}));var s=a(20),m=a(4);const T=Object(n.A)(l()),d=Object(m.a)(T,i.c),p=e=>t=>{const a=Object(n.w)(o(e),t.models);return Object(s.a)(a,"data",{})};var R;!function(e){e.WAN="wan",e.WAN2="wan2",e.BOTH="both"}(R||(R={}))},2065:function(e,t,a){"use strict";var n,r=a(0),c=a.n(r),i=a(8),l=a(2),o=a(63),E=a(215),_=a(1938),s=a(34),m=a(18),T=a(1949),d=a(663),p=a(70),R=a(2920),u=a(30),O=a(105),N=[500,4500];!function(e){e.ANY="any",e.LIMITED="limited"}(n||(n={}));const A=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_ANY",value:n.ANY},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_LIMITED",value:n.LIMITED}],b=e=>!/^[0-9]*$/.test(e),I=e=>function(t){return!e||(t||"").trim().split(",").every(e=>{if(e.includes("-")){const[t,a]=e.split("-").map(e=>Number(e.trim()));return N.every(e=>!Object(R.a)(e,t,a+1))}return!N.includes(parseInt(e,10))})};var g=Object(o.a)(e=>u.a.object().shape({name:u.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME").required(),srcType:u.a.string(),src:u.a.string().when("srcType",{is:n.LIMITED,then:u.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE").required().unifiIpv4Range(c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IP_SUBNET_RANGE",values:{name:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}}))}),dst_port:u.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT").unifiPortRange(c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("port-fwd-overlaps-ipsec",c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_PORT_FWD_OVERLAPS_IPSEC"}),I(e)).required(),fwd:u.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP").matches(O.h,c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).required(),fwd_port:u.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT").unifiPortRange(c.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("incorrect-multiport-fwd-port",c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_INCORRECT_MULTIPORT_FWD_PORT"}),(function(e){const{dst_port:t}=this.parent;return!(b(t)||b(e))||(t||"").trim()===(e||"").trim()})).required(),pfwd_interface:u.a.string().oneOf([...Object.values(T.PortForwardInterface)]).required()})),f=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_BOTH",value:"tcp_udp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_TCP",value:"tcp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_UDP",value:"udp"}],h={name:"",enabled:!1,pfwd_interface:T.PortForwardInterface.WAN,srcType:n.ANY,src:"",dst_port:"",fwd:"",fwd_port:"",proto:f[0].value,log:!1},G=a(445),S=a(1739),D=a(1736),P=a(1914),W=a(1737),F=a(5),x=a(44),w=a(15),L=a(3),j=a(71),C=a(1947),v=a(62),y=a(32),V=a(800);const M=Object(F.c)("label")`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,k=Object(F.c)("div")`
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-right: 0;
  }
`,$=Object(F.c)("div")`
  min-width: 100%;
  flex: 1 0;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-bottom: 0;
  }
`;var U=Object(l.f)(({intl:e})=>{const t=Object(i.useSelector)(s.selectWanNetworks),a=Object(i.useSelector)(V.I),{values:n,setFieldValue:o}=Object(x.e)(),{destination_ip:E,pfwd_interface:_}=n,m=_===T.PortForwardInterface.BOTH?[T.PortForwardInterface.WAN,T.PortForwardInterface.WAN2]:[_],d=Object(r.useMemo)(()=>m.map(e=>t.find(({wan_networkgroup:t})=>(null==t?void 0:t.toLowerCase())===e.toLowerCase())),[_]),p=Object(r.useMemo)(()=>d.reduce((t,a)=>{const{wan_ip:n,wan_ip_aliases:r=[],wan_networkgroup:i,wan_type:o,_id:E}=null!=a?a:{},m=[n,...r].reduce((e,t)=>{const a=null==t?void 0:t.replace(/\/\d{1,2}/,"");return a?[...e,{label:a,value:a}]:e},[{label:e.formatMessage({id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP_AUTO_DEFINED"}),value:"any"}]);let d;switch(m.length>2?_!==T.PortForwardInterface.BOTH&&(d="dropdown"):o===s.IpV4ConnectionType.STATIC&&(d="text"),d){case"dropdown":return[...t,c.a.createElement($,{key:E},c.a.createElement(M,null,c.a.createElement(v.Field,{full:!0,label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+i,name:"destination_ip",options:m,translateLabel:!0,type:"dropdown"})))];case"text":{const e=null!=n?n:o===s.IpV4ConnectionType.DHCP?"DHCP":"PPPoE";return[...t,c.a.createElement(k,{key:E},c.a.createElement(M,null,c.a.createElement(y.a,{color:"tertiary",size:"label"},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+i}))),c.a.createElement(y.a,null,e))]}default:return t}},[]),[_,e]);return Object(r.useEffect)(()=>{_===T.PortForwardInterface.BOTH&&"any"!==E&&o("destination_ip","any")},[E,_,o]),a?p.length===m.length&&c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"destination_ip",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP"})}),c.a.createElement(W.a,null,c.a.createElement(j.g,{flexWrap:"wrap",width:"100%"},p))):null});const B=Object(F.c)(G.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,z=Object(F.c)(v.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`,H=Object(F.c)(E.a)`
  margin-top: 8px;
  padding: 0;
  font-size: 12px;
`;var Y=()=>{const{values:e,errors:t,setFieldValue:a}=Object(x.e)(),o=Object(i.useSelector)(L.selectWanInterfaceOptions);Object(r.useEffect)(()=>{e.srcType===n.LIMITED&&e.src===n.ANY&&a("src","")},[a,e.src,e.srcType]);return c.a.createElement(S.a,null,c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"name",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME",fast:!0}))),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"enabled",alignWith:"toggle",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_ENABLE"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{type:"checkbox",name:"enabled",fast:!0}))),o.length>1&&c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"pfwd_interface",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE"})}),c.a.createElement(W.a,null,o.map(({label:e,value:t})=>c.a.createElement(z,{value:T.PortForwardInterface[e],type:"togglebox",toggleboxType:"radio",name:"pfwd_interface",key:"pfwd-interface-"+t},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+e}))),c.a.createElement(z,{value:T.PortForwardInterface.BOTH,type:"togglebox",toggleboxType:"radio",name:"pfwd_interface"},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_BOTH"})))),c.a.createElement(U,null),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"srcType",alignWith:"dropdown",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{type:"dropdown",name:"srcType",full:!0,translateOptions:!0,options:A}))),c.a.createElement(C.a,{in:e.srcType===n.LIMITED},c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"src",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{name:"src",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE",full:!0})))),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"dst_port",alignWith:"input",label:c.a.createElement(j.g,null,c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT"}),c.a.createElement(B,{message:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT_TOOLTIP"}),position:"bottom",width:140},c.a.createElement(w.W,{isActive:!0})))}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{full:!0,name:"dst_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT",fast:!0}),!t.dst_port&&e.dst_port&&e.dst_port!==e.fwd_port&&c.a.createElement(H,{name:"port-forward-update-forward-port",size:"small",variant:"link",onClick:()=>{a("fwd_port",e.dst_port,!0)}},c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_UPDATE_FORWARD_PORT"})))),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"fwd",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{full:!0,name:"fwd",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP",fast:!0}))),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"fwd_port",alignWith:"input",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{full:!0,name:"fwd_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"}))),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"proto",alignWith:"dropdown",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{full:!0,name:"proto",type:"dropdown",translateOptions:!0,options:f,fast:!0}))),c.a.createElement(D.a,null,c.a.createElement(P.a,{htmlFor:"log",alignWith:"toggle",label:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING"}),description:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING_DESCRIPTION"})}),c.a.createElement(W.a,{column:!0},c.a.createElement(v.Field,{type:"checkbox",name:"log",fast:!0}))))};const q=Object(o.a)(e=>{const t={...h,...e},a=t.src&&t.src!==n.ANY?n.LIMITED:n.ANY;return{...t,srcType:a}});t.a=e=>{const t=Object(i.useSelector)(s.selectIsIpsecInUse),a=Object(i.useDispatch)(),o=Object(i.useSelector)(m.x),{initialValues:R,onBack:u}=e,O=!!R._id,N=Object(r.useCallback)((e,{setSubmitting:t})=>{const{srcType:r,...c}=e,i=r===n.ANY?{...c,src:n.ANY}:c;return a(Object(T.savePortForwardRule)(i)).then(()=>u()).catch(()=>t(!1))},[a,u]),A=Object(p.n)({component:c.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON"},o?"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_EDIT",R._id?R.name:void 0),b=Object(r.useCallback)(()=>{a(Object(d.b)({name:R.name,onConfirm:()=>a(Object(T.removePortForwardRule)(R)).then(u())}))},[a,R,u]);return c.a.createElement(_.b,{onSubmit:N,title:A,initialValues:q(R),isEdit:O,isView:o,onEscClicked:u,validationSchema:g(t),showBack:!0,goBack:u,footerActiveOverride:!!(null==R?void 0:R._id),customFooterButtons:e=>(null==R?void 0:R._id)&&c.a.createElement(E.a,{disabled:e,type:"button",variant:"default",onClick:b},c.a.createElement(l.c,{id:"COMMON_ACTION_REMOVE"}))},c.a.createElement(Y,null))}}}]);