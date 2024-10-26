(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[35],{1808:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),r=a(8),l=a(18),o=a(50),s=a(1938),d=a(27),p=a(70),m=a(16),E=a(6),u=a(2070),_=a(34),b=a(35),S=a(2024),O=a(1818),T=a(5),I=a(36),C=a(15),g=a(1851),N=a(20),h=a(71),f=a(151),R=a(28),j=a(189),D=a(21),A=a(1926),G=a(78);const v=G.dpi.ruleMap.categories,y=G.dpi.ruleMap.applications,x=Object.keys(v).reduce((e,t)=>{const{name:a}=v[t];return e[a]?e[a].push(t):e[a]=[t],e},{}),P=Object.entries(x).map(([e,t])=>({categoryIds:t,name:e,id:e})).sort((e,t)=>e.name.localeCompare(t.name)),w=(e,t)=>t?e?i.a.createElement(C.t,{width:12,height:12}):"-":null,L=P.map(({name:e})=>({value:e,label:e})),M=Object(T.c)(C.Kb)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,U=[{id:"name",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_NAME"}),renderCell:({name:e})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(M,{height:18,width:16})," ",e),minWidth:110},{id:"categoryNames",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_CATEGORIES"}),renderCell:({cats:e})=>e&&e.length,minWidth:100},{id:"apps",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_APPS"}),renderCell:({apps:e})=>e&&e.length,minWidth:65},{id:"enabled",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_ENABLED"}),renderCell:({enabled:e,child:t})=>w(e,t),align:"center",minWidth:75},{id:"blocked",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_BLOCKED"}),renderCell:({blocked:e,child:t})=>w(e,t),align:"center",minWidth:90},{id:"log",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_LOG_TRAFFIC"}),renderCell:({log:e,child:t})=>w(e,t),align:"center",minWidth:90}],k=[{id:"name",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_NETWORK"}),minWidth:140},{id:"dpiGroupName",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GROUP_NAME"}),minWidth:110},{id:"ip_subnet",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SUBNET"}),minWidth:80},{id:"ipv6_subnet",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SUBNET_IPV6"}),minWidth:130},{id:"vlan",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_VLAN"}),minWidth:80}],Y=[{id:"name",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_WIRELESS_NETWORK"}),minWidth:140},{id:"dpiGroupName",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GROUP_NAME"}),minWidth:110},{id:"security",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SECURITY"}),renderCell:({security:e})=>i.a.createElement(c.c,{id:Object(b.getWlanSecurityTypeTranslationKey)(e)}),minWidth:80},{id:"is_guest",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GUEST_NETWORK"}),renderCell:({is_guest:e})=>w(e,!0),minWidth:130},{id:"vlan",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_VLAN"}),minWidth:80}];var B=a(4),$=a(1852),F=a(761);const W=e=>({value:e.toString(),label:y[e].name,appIds:[e.toString()],...y[e]}),V=e=>P.find(t=>t.name===e),H=e=>Object($.a)(e.map(e=>P.find(t=>t.categoryIds.includes(e)).name)),z=e=>Object($.a)(e.map(e=>P.find(t=>t.categoryIds.includes(e)).name)),K=(e,t)=>e.filter(e=>((e,t)=>{const{dpigroup_id:a}=t,n=!!a,i=!!e.find(({_id:e})=>a===e);return n&&i})(t,e)).map((e=>t=>{const{dpigroup_id:a}=t,{name:n}=e.find(({_id:e})=>a===e);return{...t,dpiGroupName:n}})(t)),X=(e,t)=>e.find(e=>e.dpiapp_ids&&e.dpiapp_ids.some(e=>e===t)),q=e=>e.map(({name:e,_id:t})=>({label:e,value:t})),J=(e,t)=>!!e.find(e=>!((e,t)=>{const{dpigroup_id:a}=t,n=!!a,i=!!e.find(({_id:e})=>a===e);return n&&i})(t,e)),Q=(e,t,a)=>e.map(e=>{const n=t.find(({_id:t})=>t===e),i=[...n.cats.reduce((e,t)=>{const a=P.find(e=>e.categoryIds.includes(t));return e.add(a.name)},new Set)];return{...n,parentId:a,categoryNames:i}}),Z=Object(B.a)(S.selectDpiGroups,u.selectDpiApps,(e,t)=>e.reduce((e,a)=>{const{dpiapp_ids:n}=a,i={...a,children:[]};return n&&n.length&&(i.children=Q(n,t,a._id)),e.push(i),e},[])),ee=Object(B.a)(_.selectNetworksData,S.selectDpiGroups,(e,t)=>J(e.filter(_.isCorporateOrGuestNetwork),t)),te=Object(B.a)(b.selectWifiNetworksData,S.selectDpiGroups,J),ae=Object(B.a)(S.selectDpiGroups,q),ne=Object(B.a)(b.selectWifiNetworksData,S.selectDpiGroups,K),ie=Object(B.a)(_.selectNetworksData,S.selectDpiGroups,K),ce=Object(B.a)(_.selectNetworksData,S.selectDpiGroups,(e,t)=>q(e.filter(_.isCorporateOrGuestNetwork))),re=Object(B.a)(b.selectWifiNetworksData,S.selectDpiGroups,q);var le=a(44),oe=a(1739),se=a(1737),de=a(215),pe=a(1736),me=a(65);const Ee=Object(T.c)(h.g)`
  font-size: 18px !important;
  padding: 25px 40px 0 40px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,ue=Object(T.c)("div")`
  position: absolute;
  right: 40px;
`,_e=Object(T.c)(h.c)`
  width: 20px;
  color: ${({theme:e})=>e.motifPalette.icon02} !important;
`;var be,Se=({onClose:e,title:t,closeActionName:a})=>i.a.createElement(Ee,{justifyContent:"center"},t,i.a.createElement(ue,null,i.a.createElement(_e,{variant:"inline",name:a,legacy:!1,onClick:e},i.a.createElement(C.y,null)))),Oe=a(62);!function(e){e.RESTRICTION="restriction",e.RESTRICTION_GROUP="restrictionGroup",e.WIRELESS_ASSIGNMENTS="wirelessAssignments",e.WIRED_ASSIGNMENTS="wiredAssignments"}(be||(be={}));const Te=Object(T.c)("footer")`
  padding: 0 40px 32px 40px;
`,Ie=Object(T.c)(oe.a)`
  padding: 32px 0 !important;
`,Ce=Object(T.c)(se.a)`
  flex: 1;
`,ge=Object(T.c)(me.a)`
  padding: 0 !important;
  width: 476px !important;
`,Ne=Object(T.c)(de.a)`
  width: 128px !important;
`,he=Object(T.c)("div")`
  margin-right: auto;
`;var fe=({onOpenConfirmModal:e,setCurrentOnClose:t})=>{const a=Object(r.useDispatch)(),o=Object(I.k)(),{formName:s,primaryId:d}=Object(I.m)(),m=Object(r.useSelector)(ce),E=Object(r.useSelector)(re),u=Object(r.useSelector)(ae),S=Object(r.useSelector)(_.selectNetworksData),O=Object(r.useSelector)(b.selectWifiNetworksData),T=Object(p.i)("security/traffic"),C=Object(r.useSelector)(l.x),g=s===be.WIRED_ASSIGNMENTS,N=s===be.WIRELESS_ASSIGNMENTS,f=g||N,j=()=>o.push(T),D=Object(n.useMemo)(()=>{const e=g?m:E,t=g?S:O;let a=e.length?e[0].value:"",n=u[0].value;return f&&d&&(a=e.find(e=>e.value===d).value,n=t.find(e=>e._id===d).dpigroup_id),{networkId:a,restrictionGroupId:n}},[g,m,E,S,O,u,f,d]);return i.a.createElement(le.c,{initialValues:D,onSubmit:async({networkId:e,restrictionGroupId:t},{setSubmitting:n})=>{try{const n=Object(R.a)("SETTINGS_SECURITY_DPI_ASSIGN_SAVE_ERROR","SETTINGS_SECURITY_DPI_ASSIGN_SAVE_SUCCESS"),i=O.find(t=>t._id===e);if(i&&i._id){const c={...i,dpi_enabled:!0,dpigroup_id:t};await a(Object(b.updateWifiNetwork)(e,c,void 0,n))}const c=S.find(t=>t._id===e);if(c&&c._id){const e={...c,dpi_enabled:!0,dpigroup_id:t};await a(Object(_.updateNetwork)(e,{},n))}j()}catch(i){n(!1)}},enableReinitialize:!0},i.a.createElement(ge,{footer:()=>{const{handleSubmit:a,isSubmitting:n}=Object(le.e)();return i.a.createElement(Te,null,i.a.createElement(h.g,{alignItems:"center",justifyContent:"flex-end"},!C&&d&&i.a.createElement(he,null,i.a.createElement(de.a,{type:"button",disabled:n,variant:"default",onClick:()=>{e(D.networkId),t(()=>j)}},i.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"}))),i.a.createElement(Ne,{legacy:!1,name:"restrictionAssignmentModal-close",onClick:()=>j,disabled:n},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(de.a,{type:"submit",variant:"primary",name:"restrictionAssignmentModal-assign-dpi-group",onClick:()=>a(),disabled:n},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_BUTTON"}))))},isOpen:f,header:i.a.createElement(Se,{title:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TITLE"}),onClose:j,closeActionName:"restrictionAssignmentModal-close"}),onRequestClose:j},i.a.createElement(Ie,null,i.a.createElement(pe.a,null,i.a.createElement(Ce,null,i.a.createElement(Oe.Field,{name:"networkId",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ASSIGN_LABEL_NETWORK",type:"dropdown",options:g?m:E,disabled:!!d,full:!0}))),i.a.createElement(pe.a,null,i.a.createElement(Ce,null,i.a.createElement(Oe.Field,{name:"restrictionGroupId",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ASSIGN_LABEL_RESTRICTION_GROUP",type:"dropdown",options:u,full:!0}))))))},Re=a(30);const je=Object(T.c)("footer")`
  padding: 0 40px 32px 40px;
`,De=Object(T.c)(oe.a)`
  padding: 32px 0 !important;
`,Ae=Object(T.c)(me.a)`
  padding: 0 !important;
  width: 342px !important;
`,Ge=Object(T.c)(h.c)`
  width: 128px !important;
`,ve=Re.a.object().shape({name:Re.a.string().label("SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_LABEL").required()});var ye=()=>{const e=Object(r.useDispatch)(),t=Object(I.k)(),{formName:a,primaryId:l}=Object(I.m)(),o=Object(p.i)("security/traffic"),s=()=>t.push(o),d=Object(r.useSelector)(Object(S.selectDpiGroup)(l)),m=Object(n.useMemo)(()=>({name:"",...d}),[d]);return i.a.createElement(le.c,{initialValues:m,validationSchema:ve,onSubmit:async(t,{setSubmitting:a})=>{try{await e(Object(S.saveDpiGroup)(t,{withToast:!0})),s()}catch(n){a(!1)}},enableReinitialize:!0},i.a.createElement(Ae,{footer:()=>{const{handleSubmit:e,isSubmitting:t}=Object(le.e)();return i.a.createElement(je,null,i.a.createElement(h.g,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(Ge,{legacy:!1,name:"restrictionDpiGroupModal-close",onClick:()=>s(),disabled:t},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(h.c,{type:"submit",variant:"primary",legacy:!1,name:"restrictionDpiGroupModal-save-dpi-group",onClick:()=>e(),disabled:t},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_SAVE"}))))},isOpen:a===be.RESTRICTION_GROUP,header:i.a.createElement(Se,{title:i.a.createElement(c.c,{id:l?"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_EDIT_TITLE":"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_TITLE"}),onClose:s,closeActionName:"restrictionDpiGroupModal-close"}),onRequestClose:s},i.a.createElement(De,null,i.a.createElement(pe.a,null,i.a.createElement(se.a,{column:!0},i.a.createElement(Oe.Field,{name:"name",label:"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_LABEL",full:!0}))))))},xe=a(63),Pe=a(1179),we=a(3),Le=a(1171),Me=a(1175),Ue=a(1846),ke=a(1914);const Ye=Object(T.c)(oe.a)`
  padding: 32px 0 !important;
`,Be=Object(T.c)(pe.a)`
  justify-content: space-between !important;
`,$e=Object(T.c)(Le.a)`
  background: ${({theme:e})=>e.motifPalette.ui04} !important;
`,Fe=Object(T.c)(Oe.Field)`
  label {
    color: ${({theme:e})=>e.motifPalette.ui05} !important;
  }

  input::placeholder {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`,We=Object(T.c)(se.a)`
  flex: 0 !important;
  justify-content: flex-end !important;
`,Ve=Object(T.c)(Oe.Field,{shouldForwardProp:e=>"hideChips"!==e})`
  // hide multi Dropdown chips, show our own chips, because 'apps' values can be different than 'options' prop
  >div: nth-child(2) {
    display: ${({hideChips:e})=>e?"none":"flex"};
  }

  label {
    left: -24px;
  }

  input::placeholder {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`;var He=Object(c.f)(({intl:e})=>{var t;const{values:a,setFieldValue:l,submitCount:o,errors:s}=Object(le.e)(),d=Object(r.useSelector)(we.selectIsDpiSupportedByGateway),p=Object(n.useCallback)((e,t)=>{let n=[...t];if(e.categoryIds){const i=!t.find(t=>t===e.value),c=a.cats.filter(t=>!e.categoryIds.includes(t)),r=i?c:[...a.cats,...e.categoryIds],o=P.find(e=>e.name===a.selectedCategoryName);i||(n=n.filter(e=>!o.categoryIds.some(t=>Number(t)===Object(N.a)(y[e],"category_id"))),l("applicationOptions",a.applicationOptions.map(e=>({...e,disabled:!e.categoryIds})))),i&&e.categoryIds===o.categoryIds&&l("applicationOptions",a.applicationOptions.map(e=>({...e,disabled:!1}))),l("cats",r)}l("apps",n)},[l,a.applicationOptions,a.cats,a.selectedCategoryName]),m=Object(n.useMemo)(()=>a.apps.map(e=>{const t=V(e),n=Object(N.a)(y[e],"name")||t.name;return i.a.createElement($e,{key:e,label:n,onClose:()=>{p(y[e]||t,a.apps.filter(t=>t!==e))}})}),[a.apps,p]);return Object(n.useEffect)(()=>{a.selectedCategoryName&&l("applicationOptions",((e,t)=>{const a=V(e);return[{...a,value:a.id,label:t.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_ALL_APPLICATIONS_VALUE"})},...x[e].reduce((e,t)=>[...e,...v[t].applications],[]).map(W)]})(a.selectedCategoryName,e))},[a.selectedCategoryName]),i.a.createElement(Ye,null,d?i.a.createElement(pe.a,null,i.a.createElement(se.a,{column:!0},i.a.createElement(Fe,{name:"selectedCategoryName",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL",options:L,width:"100%",searchable:!0}))):i.a.createElement(pe.a,null,i.a.createElement(se.a,{column:!0},i.a.createElement(Ve,{name:"cats",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL",multi:!0,options:L,width:"100%",validated:!0,searchable:!0}))),d&&i.a.createElement(pe.a,null,i.a.createElement(se.a,{column:!0},i.a.createElement(Ve,{name:"apps",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_APPLICATION_LABEL",searchable:!0,multi:!0,options:a.applicationOptions||[],onChange:p,width:"100%",hideChips:!0,disabled:!(null===(t=a.applicationOptions)||void 0===t?void 0:t.length)}),!!Object(N.a)(s,"apps")&&!!o&&i.a.createElement(Oe.ValidationMessage,{visible:!0},Object(N.a)(s,"apps")),i.a.createElement(Me.a,null,m))),i.a.createElement(Ue.a,{marginBottom:"xxxxl"}),i.a.createElement(Be,{unlimitedWidth:!0},i.a.createElement(ke.a,{htmlFor:"blocked",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_BLOCKED_LABEL"}),description:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_BLOCKED_DESCRIPTION"}),alignWith:"toggleSmall"}),i.a.createElement(We,null,i.a.createElement(Oe.Field,{name:"blocked",type:"checkbox"}))),i.a.createElement(Be,{unlimitedWidth:!0},i.a.createElement(ke.a,{htmlFor:"log",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_LOG_LABEL"}),description:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_LOG_DESCRIPTION"}),alignWith:"toggleSmall"}),i.a.createElement(We,null,i.a.createElement(Oe.Field,{name:"log",type:"checkbox"}))),i.a.createElement(Be,{unlimitedWidth:!0},i.a.createElement(ke.a,{htmlFor:"groupEnabled",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_ENABLED_LABEL"}),alignWith:"toggleSmall"}),i.a.createElement(We,null,i.a.createElement(Oe.Field,{name:"groupEnabled",type:"checkbox"}))),i.a.createElement(Ue.a,null))});const ze=Object(T.c)("footer")`
  padding: 0 40px 32px 40px;
`,Ke=Object(T.c)(me.a)`
  padding: 0 !important;
  width: 378px !important;
`,Xe=Object(T.c)(de.a)`
  width: 128px !important;
`,qe=Object(xe.a)((e,t,a,n)=>{const i=Object($.a)(Object(N.a)(t,"cats",[])),c=Object(N.a)(t,"apps",[]);return{_id:null==t?void 0:t._id,group:a&&a._id||e[0].value,groupEnabled:Object(N.a)(t,"enabled",!1),cats:n?i:z(i),apps:[...c.map(Number),...H(i)],blocked:Object(N.a)(t,"blocked",!1),log:Object(N.a)(t,"log",!1)}}),Je=Object(xe.a)((e,t)=>t?Re.a.object().shape({cats:Re.a.array(),apps:Re.a.array().when("cats",{is:e=>!e.length,then:Re.a.array().min(1).label(e.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_APPLICATION_LABEL"})),otherwise:Re.a.array()})}):Re.a.object().shape({cats:Re.a.array().min(1).label(e.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL"}))}));var Qe=Object(c.f)(({intl:e})=>{const t=Object(r.useDispatch)(),a=Object(I.k)(),l=Object(r.useSelector)(we.selectIsDpiSupportedByGateway),{formName:o,primaryId:s,secondaryId:d}=Object(I.m)(),m=Object(r.useSelector)(Object(u.selectDpiApp)(d)),E=Object(r.useSelector)(Object(S.selectDpiGroup)(s)),_=Object(r.useSelector)(ae),b=Object(p.i)("security/traffic"),O=()=>a.push(b),T=Object(n.useMemo)(()=>({...qe(_,m,E,l)}),[_,m,E,l]);return o===be.RESTRICTION&&i.a.createElement(le.c,{initialValues:T,validationSchema:Je(e,l),onSubmit:async(e,a)=>{const n=qe(_,m,E,l),{apps:i,blocked:c,cats:r,groupEnabled:o,log:s,group:d}=e,p={apps:i.filter(Number).map(Number),blocked:c,cats:l?r:(b=r,Object(F.a)(b.map(e=>P.find(t=>t.name===e).categoryIds))),enabled:o,log:s};var b;const S={...m,...p};try{await t(Object(u.saveDpiAppToDpiGroup)(S,d,n.group)),O()}catch(T){a(!1)}},enableReinitialize:!0},i.a.createElement(Ke,{footer:()=>{const{handleSubmit:e,isSubmitting:t}=Object(le.e)();return i.a.createElement(ze,null,i.a.createElement(h.g,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(Xe,{legacy:!1,name:"restrictionModal-close",onClick:()=>O(),disabled:t},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(de.a,{type:"submit",variant:"primary",name:"restrictionModal-save-dpi-app-to-dpi-group",onClick:()=>e(),disabled:t},i.a.createElement(c.c,{id:!Object(Pe.a)(m)&&E?"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_EDIT_RESTRICTION":"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"}))))},isOpen:!0,header:i.a.createElement(Se,{title:i.a.createElement(c.c,{id:!Object(Pe.a)(m)&&E?"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_EDIT_RESTRICTION":"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"}),onClose:O,closeActionName:"restrictionModal-close"}),onRequestClose:O},i.a.createElement(He,null)))});const Ze=Object(T.c)(D.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,et=Object(T.c)("div")`
  margin-top: 15px;
  padding-bottom: 28px;
`;var tt=()=>{const e=Object(I.k)(),t=Object(r.useDispatch)(),a=Object(r.useSelector)(Z),l=Object(r.useSelector)(S.selectDpiGroups),o=Object(n.useContext)(h.l),[s,m]=Object(n.useState)(!1),[E,_]=Object(n.useState)(null),b=Object(p.i)("security/traffic/restrictionGroup"),O=Object(p.i)("security/traffic/restriction"),T=Object(N.a)(E,"children",null),D=Object(n.useCallback)(e=>{_(e),m(!0)},[m]),G=Object(n.useCallback)(async()=>{if(s){m(!1);const a={...X(l,E._id)};a.dpiapp_ids=a.dpiapp_ids.filter(e=>e!==E._id);const{successToast:n,failureToast:i}=Object(R.a)("SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_ERROR","SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_SUCCESS");try{await t(Object(S.saveDpiGroup)(a)),await t(Object(u.removeDpiApp)(E._id)),t(Object(d.c)(n))}catch(e){t(Object(d.c)(i(void 0,e)))}}},[t,l,E,s]),v=Object(n.useCallback)(async()=>{const{successToast:e,failureToast:a}=Object(R.a)("SETTINGS_SECURITY_DPI_MODAL_REMOVE_GROUP_ERROR","SETTINGS_SECURITY_DPI_MODAL_REMOVE_GROUP_SUCCESS");try{if(await t(Object(S.removeDpiGroup)(E._id)),E.dpiapp_ids){const e=E.dpiapp_ids.map(e=>t(Object(u.removeDpiApp)(e)));await Promise.all(e)}m(!1),t(Object(d.c)(e))}catch(n){t(Object(d.c)(a(null,n)))}},[t,E]),y=Object(n.useCallback)(()=>{T?v():G()},[T,v,G]);return i.a.createElement(et,null,i.a.createElement(g.a,{idField:"_id",columns:U,items:a,disableColumnFilters:!0,disableTextPointer:!0,renderRowPopoverContent:t=>i.a.createElement(A.e,null,!o&&!t.parent&&i.a.createElement(j.c,{legacy:!1,name:"security-dpi-restriction-edit",type:"button",variant:"inline",onClick:()=>e.push(`${O}/${X(l,t._id)._id}/${t._id}`)},i.a.createElement(c.c,{id:"COMMON_ACTION_EDIT"})),!o&&!t.attr_no_delete&&t.parent&&i.a.createElement(j.c,{legacy:!1,name:"security-dpi-restriction-group-edit",type:"button",variant:"inline",onClick:()=>e.push(`${b}/${t._id}`)},i.a.createElement(c.c,{id:"COMMON_ACTION_EDIT"})),!o&&!t.attr_no_delete&&i.a.createElement(j.c,{legacy:!1,name:"security-dpi-restriction-remove",onClick:()=>D(t),type:"button",variant:"inline"},i.a.createElement(c.c,{id:"COMMON_ACTION_REMOVE"})),!o&&t.parent&&i.a.createElement(j.c,{legacy:!1,name:"security-dpi-restriction-add",type:"button",variant:"inline",onClick:()=>e.push(`${O}/${t._id}`)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"})))}),i.a.createElement(Ze,{alignItems:"center"},i.a.createElement(j.c,{name:"security-dpi-restriction-group-add",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(b),Icon:i.a.createElement(C.wb,null)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_CREATE_NEW"}))),i.a.createElement(Qe,null),i.a.createElement(ye,null),i.a.createElement(f.a,{isOpen:s,title:T?"COMMON_QUESTION_REMOVE":"SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_TITLE",message:T?"COMMON_QUESTION_ARE_YOU_SURE_YOU_WANT_TO_REMOVE":"SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_DESCR",messageValues:{name:Object(N.a)(E,"name")},titleValues:{name:Object(N.a)(E,"name")},onConfirm:y,onCancel:()=>m(!1)}))};const at=Object(T.c)(D.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,nt=Object(T.c)("div")`
  margin-top: 35px;
  padding-bottom: 3px;
`;var it=()=>{const e=Object(I.k)(),t=Object(r.useSelector)(ie),a=Object(r.useSelector)(ee),n=Object(p.i)("security/traffic/"+be.WIRED_ASSIGNMENTS);return i.a.createElement(nt,null,i.a.createElement(g.a,{idField:"_id",columns:k,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(`${n}/${t}`)}),i.a.createElement(at,{alignItems:"center"},a&&i.a.createElement(j.c,{name:"dpi-assign-restriction",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(n),Icon:i.a.createElement(C.l,null)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_BUTTON"}))))};const ct=Object(T.c)(D.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,rt=Object(T.c)("div")`
  margin-top: 35px;
  padding-bottom: 3px;
`;var lt=()=>{const e=Object(I.k)(),t=Object(r.useSelector)(ne),a=Object(p.i)("security/traffic/"+be.WIRELESS_ASSIGNMENTS),n=Object(r.useSelector)(te);return i.a.createElement(rt,null,i.a.createElement(g.a,{idField:"_id",columns:Y,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(`${a}/${t}`)}),i.a.createElement(ct,{alignItems:"center"},n&&i.a.createElement(j.c,{name:"dpi-assign-restriction",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(a),Icon:i.a.createElement(C.l,null)},i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_WIFI_BUTTON"}))))};var ot=()=>{const e=Object(r.useDispatch)(),{formName:t}=Object(I.m)(),a=Object(r.useSelector)(_.selectNetworksData),l=Object(r.useSelector)(b.selectWifiNetworksData),[o,s]=Object(n.useState)(!1),[d,p]=Object(n.useState)(null),[m,E]=Object(n.useState)(void 0);return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{items:[{id:"networkRestrictions",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_NETWORK_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(it,null),openByDefault:t===be.WIRED_ASSIGNMENTS},{id:"wifiNetworkRestrictions",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_WIFI_NETWORK_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(lt,null),openByDefault:t===be.WIRELESS_ASSIGNMENTS}],variant:"secondary",multiOpen:!0}),i.a.createElement(fe,{onOpenConfirmModal:e=>{s(!0),p(e)},setCurrentOnClose:E}),i.a.createElement(f.a,{isOpen:o,title:"SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_MODAL_DESCR",onConfirm:()=>{(()=>{const t=Object(R.a)("SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_ERROR","SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_SUCCESS"),n=l.find(e=>e._id===d);if(n&&n._id){const a={...n,dpi_enabled:!1,dpigroup_id:""};e(Object(b.updateWifiNetwork)(d,a,void 0,t)).then(()=>m?m():null)}const i=a.find(e=>e._id===d);if(i&&i._id){const a={...i,dpi_enabled:!1,dpigroup_id:""};e(Object(_.updateNetwork)(a,{},t)).then(()=>m?m():null)}s(!1)})()},onCancel:()=>{E(void 0),s(!1)}}))};const st=Object(T.c)(O.a)`
  > li {
    margin-top: 28px !important;
  }
`;var dt=()=>{const{formName:e}=Object(I.m)();return i.a.createElement(st,{items:[{id:"dpiRestrictionDefinitions",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(tt,null),openByDefault:e===be.RESTRICTION||e===be.RESTRICTION_GROUP},{id:"dpiRestrictionAssignments",label:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(ot,null),openByDefault:e===be.WIRED_ASSIGNMENTS||e===be.WIRELESS_ASSIGNMENTS}],multiOpen:!0})};var pt=()=>Object(p.f)([Object(u.fetchDpiApps)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(S.fetchDpiGroups)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(_.fetchNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(b.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}})],i.a.createElement(i.a.Fragment,null,i.a.createElement(dt,null)));t.default=()=>{const e=Object(r.useDispatch)(),t=Object(r.useSelector)(o.selectDpiSettings),a=Object(r.useSelector)(l.x),E=Object(p.h)(),u=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),_=Object(n.useMemo)(()=>({enabled:!1,fingerprintingEnabled:!1,...t}),[t]),b=Object(n.useMemo)(()=>({component:i.a.createElement(c.c,{id:"SETTINGS_SECURITY_DPI_TITLE"}),message:"security-settings-dpi"}),[]),S=Object(n.useCallback)((t,{setStatus:a,setSubmitting:n,resetForm:i})=>e(Object(o.saveSettings)(t)).then(()=>{e(Object(d.c)({icon:m.a.success,message:"SETTINGS_SECURITY_DPI_SAVE_SUCCESS"})),a({isSubmitted:!0}),i({values:t})}).catch(t=>{e(Object(d.c)({errorMessage:t.msg,errorValues:t,icon:m.a.danger,message:"SETTINGS_SECURITY_DPI_SAVE_ERROR"})),n(!1)}),[e]);return i.a.createElement(s.b,{title:b,validationSchema:void 0,initialStatus:u,initialValues:_,isView:a,onSubmit:S,onEscClicked:E,goBack:E,isEdit:!0,showBack:!0,unsavedChangesModalIgnoredPaths:/\/(restrictionGroup|wiredAssignments|wirelessAssignments|restriction)((\/)|((\/[\w_-]+\/?))+)?$/},i.a.createElement(pt,null))}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return U}));var n=a(0),i=a.n(n),c=a(5),r=a(648),l=a(1136),o=a(208);const s=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,d=(Object(c.c)(r.Link)`
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
`),p=Object(c.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,m=e=>i.a.createElement(d,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),E=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1851),_=a(375);const b=Object(c.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,S=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(_.b)(({theme:e,...t})=>i.a.createElement(b,Object.assign({headerRowClassName:S(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(1934),T=a(529),I=a(1743),C=a(2),g=a(30),N=a(15),h=a(2846),f=a(44),R=a(71),j=a(62);const D=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,A=Object(c.c)(R.c)`
  > * {
    vertical-align: middle;
  }
`,G=Object(c.c)(R.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,v=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,y=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,x=Object(c.c)(R.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,P=Object(c.c)(G,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,w=Object(c.c)(R.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(c.c)(R.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,M=Object(c.c)("div")`
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
`;var U=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:r,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:d=!1,max:m,useWindowTable:E=!1,addButtonText:_="COMMON_ACTION_ADD",invalid:b,...S}){const O=Object(n.useContext)(R.l),[U,k]=Object(n.useState)(!0),Y=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(p,null,i.a.createElement(A,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{k(!1),r(t),await Promise.resolve(),k(!0)}},i.a.createElement(C.c,{id:"COMMON_ACTION_REMOVE"}))),[e,k,r]),B=Object(n.useMemo)(()=>E?h.a:u.a,[E]);return i.a.createElement(f.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>d?g.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:d,handleReset:p,setTouched:E})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(D,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(G,{flexDirection:"column",width:"100%"},i.a.createElement(j.Field,Object.assign({disabled:n.editActive||n[e].length>=m,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:b,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!O&&c&&r===t.length-1&&i.a.createElement(v,null,i.a.createElement(A,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),k(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await E(a,!0);t.find(e=>i[e.name])||c(n),k(!0)},Icon:N.wb,disabled:n.editActive||n[e].length>=m||!n[a.name]},i.a.createElement(C.c,{id:_}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement(x,{key:n.id,width:"100%"},S.columns.map((n,r)=>t[r]?i.a.createElement(P,{key:n.id,isLast:r===S.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(j.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(w,{justifyContent:"flex-end",width:"100%"},i.a.createElement(L,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{p(),s("editActive",!1)}},i.a.createElement(C.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(R.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:d,disabled:Object(T.a)(Object(I.a)(n,"editActive"),Object(I.a)(o,"editActive"))},i.a.createElement(C.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(D,null,i.a.createElement(y,null,i.a.createElement(A,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{p(),s("editActive",!0)},Icon:N.ub},i.a.createElement(C.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&U&&i.a.createElement(M,null,i.a.createElement(B,{columns:S.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:r?Y:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),d=a(520),p=a(521);const m=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),E=Object(p.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),_=Object(n.useCallback)(e=>(e={},t={})=>E(e,t)&&u(e,t),[E,u]);return!!e&&i.a.createElement(o.a,{when:_(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:d.b,title:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(m,null,i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return A}));var n=a(0),i=a.n(n),c=a(5),r=a(2),l=a(44),o=a(2847),s=a(2658),d=a(1929),p=a(783),m=a(71),E=a(1940),u=a(15),_=a(32),b=a(42),S=a(1847),O=a(782),T=a(1930);const I=c.a`
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
`;var C=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...r})=>{const l=Object(T.a)(),o=Object(O.a)(c),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(S.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:I,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return i.a.createElement(i.a.Fragment,null,s)};const g=c.a`
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
`;var N=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...r})=>{const l=Object(T.a)(),o=Object(O.a)(c),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(S.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:g,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return i.a.createElement(i.a.Fragment,null,s)};const h=Object(c.c)(m.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,f=Object(c.c)(m.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,R=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,j=Object(c.c)(m.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,D=Object(c.c)(_.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var A=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:r})=>{const{motif:l}=Object(b.a)();return i.a.createElement(N,{ignoredPaths:r},i.a.createElement(f,{flex:"none",height:"65px"},i.a.createElement(C,{ignoredPaths:r},i.a.createElement(m.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(h,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(j,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},i.a.createElement(u.f,{size:"original"}))),i.a.createElement(R,null,i.a.createElement(D,{weight:"bold"},e.component)),i.a.createElement(h,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&i.a.createElement(j,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(u.y,{size:"original"})))))))};const G=Object(c.c)(m.g)`
  width: 100%;
  max-width: ${p.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,v=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,y=Object(c.c)(m.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,x=Object(c.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${p.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,P=Object(c.c)(m.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,w=Object(c.c)(m.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:o,showBack:p,title:u,unsavedChangesModalIgnoredPaths:_,onEscClicked:b,submitText:S="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:T,hidddenHeader:I,...C})=>i.a.createElement(l.c,Object.assign({enableReinitialize:!0},C),({dirty:c,handleReset:l,handleSubmit:C,isSubmitting:g})=>i.a.createElement(v,{autoComplete:"off",onSubmit:C},i.a.createElement(w,{vertical:!0},!I&&i.a.createElement(A,{goBack:a,hideClose:n,showBack:p,title:u,onEscClicked:b,ignoredPaths:_}),i.a.createElement(E.a,{ignoredPaths:_},i.a.createElement(P,{flex:"1"},i.a.createElement(G,{flex:"none",flexDirection:"column"},e))),!t&&!o&&i.a.createElement(d.a,{ignoredPaths:_,when:c&&!g}),(!o||O)&&i.a.createElement(x,{active:c||O},i.a.createElement(m.g,{justifyContent:T?"space-between":"flex-end",width:"100%",alignItems:"center"},T&&i.a.createElement(y,null,T(g)),!o&&i.a.createElement(m.g,null,i.a.createElement(s.a,{disabled:!c||g,type:"button",variant:"default",onClick:l},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!c||g,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:S}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(1847),r=a(5),l=a(782),o=a(1930);const s=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...d})=>{const p=Object(o.a)(),m=Object(l.a)(a),E=Object(n.useMemo)(()=>i.a.Children.map(r,a=>null===a?a:i.a.createElement(c.a,Object.assign({appear:t||!m||p,in:t||!m||p,timeout:e,classNames:s,mountOnEnter:!0},d),a)),[r,t,m,p,e,d]);return i.a.createElement(i.a.Fragment,null,E)}},2024:function(e,t,a){"use strict";a.r(t);var n=a(2041);a.d(t,"fetchDpiGroups",(function(){return n.c})),a.d(t,"fetchDpiGroup",(function(){return n.b})),a.d(t,"saveDpiGroup",(function(){return n.f})),a.d(t,"addDpiAppToGroup",(function(){return n.a})),a.d(t,"removeDpiAppFromGroup",(function(){return n.d})),a.d(t,"removeDpiGroup",(function(){return n.e}));var i=a(2052);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var c=a(2071);a.d(t,"dpiGroupsSelector",(function(){return c.a})),a.d(t,"selectDpiGroups",(function(){return c.c})),a.d(t,"selectDpiGroup",(function(){return c.b}));var r=a(2072);for(var l in r)["default","fetchDpiGroups","fetchDpiGroup","saveDpiGroup","addDpiAppToGroup","removeDpiAppFromGroup","removeDpiGroup","MODEL","PATH","dpiGroupsSelector","selectDpiGroups","selectDpiGroup"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l)},2040:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return E}));var n=a(20),i=a(6),c=a(27),r=a(2024),l=a(28),o=a(2053);const s=(e,t)=>Object(i.q)(o.a,o.b,e,{idField:"_id",...t}),d=e=>Object(i.t)(o.a,o.b,e),p=e=>{const{_id:t}=e;return t?Object(i.C)(o.a,t,`${o.b}/${t}`,e):Object(i.i)(o.a,o.b,e)},m=(e,t,a)=>async i=>{const{successToast:o,failureToast:s}=Object(l.a)("SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SAVE_ERROR","SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SAVE_SUCCESS");try{const l=await i(p(e)),s=Object(n.a)(l,"data[0]._id",l._id);a&&a!==t&&await i(Object(r.removeDpiAppFromGroup)(a,s)),s&&await i(Object(r.addDpiAppToGroup)(t,s)),i(Object(c.c)(o))}catch(d){i(Object(c.c)(s()))}},E=e=>Object(i.n)(o.a,e,`${o.b}/${e}`)},2041:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return E})),a.d(t,"e",(function(){return u}));var n=a(20),i=a(1853),c=a(6),r=a(28),l=a(2052);const o=(e,t)=>Object(c.q)(l.a,l.b,e,{idField:"_id",...t}),s=e=>Object(c.t)(l.a,l.b,e),d=(e,t={})=>{const{_id:a}=e,n=Object(r.a)("SETTINGS_SECURITY_DPI_CREATE_RESTRICTION_GROUP_SAVE_ERROR","SETTINGS_SECURITY_DPI_CREATE_RESTRICTION_GROUP_SAVE_SUCCESS");if(a){const i=t&&t.withToast?n:void 0;return Object(c.C)(l.a,a,`${l.b}/${a}`,e,{},i)}return Object(c.i)(l.a,l.b,e,{},n)},p=e=>t=>Object(n.a)(Object(c.w)(s(e),t.models),"data",{}),m=(e,t)=>(a,n)=>{const{dpiapp_ids:i=[],...c}=p(e)(n());return a(d({...c,dpiapp_ids:i.concat(i.includes(t)?[]:t)}))},E=(e,t)=>(a,n)=>{const{dpiapp_ids:c=[],...r}=p(e)(n());return a(d({...r,dpiapp_ids:Object(i.a)(c,t)}))},u=e=>Object(c.n)(l.a,e,`${l.b}/${e}`,{})},2052:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dpigroup",i="/api/s/{site}/rest/".concat(n)},2053:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="dpiApp",i="/api/s/{site}/rest/dpiapp"},2070:function(e,t,a){"use strict";a.r(t);var n=a(2040);a.d(t,"fetchDpiApps",(function(){return n.b})),a.d(t,"fetchDpiApp",(function(){return n.a})),a.d(t,"saveDpiApp",(function(){return n.d})),a.d(t,"saveDpiAppToDpiGroup",(function(){return n.e})),a.d(t,"removeDpiApp",(function(){return n.c}));var i=a(2053);a.d(t,"MODEL",(function(){return i.a})),a.d(t,"PATH",(function(){return i.b}));var c=a(2073);a.d(t,"dpiAppsSelector",(function(){return c.a})),a.d(t,"selectDpiApps",(function(){return c.c})),a.d(t,"selectDpiApp",(function(){return c.b}));var r=a(2074);for(var l in r)["default","fetchDpiApps","fetchDpiApp","saveDpiApp","saveDpiAppToDpiGroup","removeDpiApp","MODEL","PATH","dpiAppsSelector","selectDpiApps","selectDpiApp"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(l)},2071:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(20),i=a(4),c=a(6),r=a(2041);const l=Object(c.A)(Object(r.c)()),o=Object(i.a)(l,e=>Object(n.a)(e,"data",[])),s=e=>t=>{const a=Object(c.w)(Object(r.b)(e),t.models);return Object(n.a)(a,"data",{})}},2072:function(e,t){},2073:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(20),i=a(4),c=a(6),r=a(2040);const l=Object(c.A)(Object(r.b)()),o=Object(i.a)(l,e=>Object(n.a)(e,"data",[])),s=e=>t=>{const a=Object(c.w)(Object(r.a)(e),t.models);return Object(n.a)(a,"data",{})}},2074:function(e,t){}}]);