(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[33],{1813:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(50),r=a(1951),l=a(70),o=a(6),s=a(8),E=a(2),m=a(63),_=a(36),d=a(71),p=a(1938),u=a(2056),h=a(27),b=a(322),T=a(16),O=a(1739),g=a(1736),N=a(1737),A=a(83),S=a(62),D=a(30),I=a(105);const f={minHopCount:1,minDhcpRelayMaxSize:64,minDhcpRelayPort:1,maxDhcpRelayPort:65536,maxHopCount:255,maxDhcpRelayMaxSize:1400,relayAgentOptionsHandling:[{value:"",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_DEFAULT"},{value:"append",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_APPEND"},{value:"discard",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_DISCARD"},{value:"forward",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_FORWARD"},{value:"replace",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_HANDLING_OPTION_REPLACE"}]},C=()=>D.a.string().label("SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_SERVER").matches(I.h,c.a.createElement(E.c,{id:"COMMON_VALIDATION_VALID_IPV4"})),R=D.a.object().shape({dhcp_relay_servers:D.a.array().of(C().required()),dhcp_relay_hop_count:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT").min(f.minHopCount).max(f.maxHopCount),dhcp_relay_max_size:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE").min(f.minDhcpRelayMaxSize).max(f.maxDhcpRelayMaxSize),dhcp_relay_port:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT").min(f.minDhcpRelayPort).max(f.maxDhcpRelayPort)}),x=e=>{const t={arrayFieldName:"dhcp_relay_servers",stringFieldName:"dhcp_relay_server",errorMessage:c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_SERVER_UNIQUE"})};return D.a.object().shape({editActive:D.a.bool(),new_dhcp_relay_server:C().isIPUnique({formValues:null,...t}),dhcp_relay_servers:D.a.array().of(D.a.object().shape({dhcp_relay_server:C().isIPUnique({formValues:e,...t}).required()}))})},P={key:"usg",dhcpd_hostfile_update:!0,dhcpd_use_dnsmasq:!1,dhcp_relay_servers:[],dhcp_relay_hop_count:1,dhcp_relay_max_size:64,dhcp_relay_port:1,dhcp_relay_agents_packets:""};var y=a(44),G=a(1937);const v=[{id:"dhcp_relay_server",label:c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_LABEL_SERVER_IP"}),sortable:!1}],j={dhcp_relay_server:"SETTINGS_GATEWAY_DHCP_LABEL_SERVER_IP"},H=[{name:"new_dhcp_relay_server",placeholder:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_SERVER"}],L=({dhcp_relay_servers:e})=>Array.from(e,(e,t)=>({id:"dhcp_relay_server-"+t,dhcp_relay_server:e}));var w=()=>{const{values:e,setFieldValue:t,handleSubmit:a}=Object(y.e)(),i=Object(n.useMemo)(()=>({editActive:!1,dhcp_relay_servers:L(e)}),[e]),r=Object(n.useMemo)(()=>L(e),[e]),l=Object(n.useCallback)(e=>{t("dhcp_relay_servers",e),t("serverOnly",!0),a()},[t,a]),o=Object(n.useCallback)(({new_dhcp_relay_server:e,dhcp_relay_servers:t})=>{e&&l([...t.map(({dhcp_relay_server:e})=>e),e])},[l]),s=Object(n.useCallback)(({dhcp_relay_server:t})=>{l(e.dhcp_relay_servers.filter(e=>e!==t))},[l,e]),E=Object(n.useCallback)(e=>{l([...e.map(({dhcp_relay_server:e})=>e)])},[l]);return c.a.createElement(G.d,{fieldName:"dhcp_relay_servers",items:r,columns:v,fieldLabels:j,newFields:H,onAddItem:o,onRemoveItem:s,onEditSubmit:E,initialValues:i,validationSchema:x,useValuesInSchema:!0,max:5})};var M=()=>{const e=Object(s.useSelector)(A.m);return c.a.createElement(O.a,{padding:"none"},c.a.createElement(g.a,null,c.a.createElement(b.SearchableGridLabel,{htmlFor:"new_dhcp_relay_server",alignWith:"input",label:c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_LABEL_SERVERS"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY"}),c.a.createElement(g.a,null,c.a.createElement(N.a,{wrap:!0},c.a.createElement(w,null)))),!e&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_hop_count",alignWith:"input",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT"}),description:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT_SEARCH_TEXT"}),c.a.createElement(N.a,{column:!0},c.a.createElement(S.Field,{name:"dhcp_relay_hop_count",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_HOP_COUNT",type:"number",full:!0}))),c.a.createElement(g.a,null,c.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_max_size",alignWith:"input",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE"}),description:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE_SEARCH_TEXT"}),c.a.createElement(N.a,{column:!0},c.a.createElement(S.Field,{full:!0,name:"dhcp_relay_max_size",type:"number",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_MAX_PACKET_SIZE"}))),c.a.createElement(g.a,null,c.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_port",alignWith:"input",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT"}),description:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT_SEARCH_TEXT"}),c.a.createElement(N.a,{column:!0},c.a.createElement(S.Field,{full:!0,name:"dhcp_relay_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_SERVER_LISTEN_TRANSMIT_PORT"}))),c.a.createElement(g.a,null,c.a.createElement(b.SearchableGridLabel,{htmlFor:"dhcp_relay_agents_packets",alignWith:"select",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_RELAY_AGENT_OPTIONS_HANDLING"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_RELAY_RELAY_AGENT_OPTIONS_HANDLING_SEARCH_TEXT"}),c.a.createElement(N.a,{column:!0},c.a.createElement(S.Field,{type:"dropdown",name:"dhcp_relay_agents_packets",options:f.relayAgentOptionsHandling,translateOptions:!0,full:!0})))))},W=a(5),V=a(1914),Y=a(1851),k=a(15),$=a(61);const F=e=>[{compare:Object($.a)(({name:e})=>e.toLowerCase()),id:"dhcp-option-name",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_TABLE_NAME"}),renderCell:({name:e})=>e,sortable:!0,minWidth:100,maxWidth:120},{compare:Object($.a)(({code:e})=>e),id:"dhcp-option-code",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_TABLE_CODE"}),renderCell:({code:e})=>e,sortable:!0,minWidth:40,maxWidth:60},{compare:Object($.a)(({signed:t,type:a,width:n})=>Object(r.getDhcpOptionTypeDisplayText)(e,t,a,n)),id:"dhcp-option-type",label:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_TABLE_TYPE"}),renderCell:({signed:t,type:a,width:n})=>c.a.createElement("div",null,Object(r.getDhcpOptionTypeDisplayText)(e,t,a,n)),minWidth:100}];var z=a(2093),B=a(663);const U=Object(W.c)(z.a,{shouldForwardProp:e=>"isEdit"!==e})`
  ${({isEdit:e})=>e&&"width: 525px;\n    & > footer > div {\n      width: 100%;\n\n      & > div:first-child {\n        margin-right: auto;\n      }\n    }"}
`,X=Object(W.c)("div")`
  width: 100%;
  display: flex;
`,q=Object(W.c)("div")`
  display: flex;
  flex-direction: column;
  > span {
    color: ${({theme:e})=>e.motifPalette.text02};
    margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`,K=Object(W.c)("div")`
  display: flex;
  flex-direction: column;
  span {
    color: ${({theme:e})=>e.motifPalette.text02};
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Z=Object(W.c)("div")`
  display: flex;
  > * {
    margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
    &:last-child {
      margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
    }
  }
`;var Q=({defaultValues:e,isEdit:t,...a})=>{const{values:i,handleSubmit:o,isValid:m,dirty:d,isSubmitting:p,initialValues:u}=Object(y.e)(),h=Object(_.k)(),b=Object(l.i)("advanced/gateway"),T=Object(s.useDispatch)(),A=Object(n.useCallback)(()=>h.push(b+"/dhcp/form"),[h,b]),D=Object(n.useCallback)(()=>{m&&(o(),A())},[m,o,A]),I=Object(n.useCallback)(()=>{T(Object(B.b)({name:u.name,onConfirm:()=>T(Object(r.removeDhcpOption)(u)).then(A())}))},[T,A,u]);return c.a.createElement(U,Object.assign({},a,{title:c.a.createElement(E.c,{id:t?"SETTINGS_GATEWAY_DHCP_EDIT_HEADER":"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"}),actions:[t&&{disabled:p,text:c.a.createElement(E.c,{id:"COMMON_ACTION_REMOVE"}),type:"button",variant:"default",onClick:I},{text:c.a.createElement(E.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",onClick:A},{text:c.a.createElement(E.c,{id:t?"SETTINGS_GATEWAY_DHCP_EDIT_HEADER":"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"}),type:"button",variant:"primary",onClick:D,disabled:!d}],onRequestClose:A,isEdit:t}),c.a.createElement(O.a,{padding:"none"},c.a.createElement(g.a,null,c.a.createElement(N.a,{column:!0,unlimitedWidth:!0},c.a.createElement(S.Field,{name:"name",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_NAME",placeholder:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_NAME",full:!0}))),c.a.createElement(g.a,null,c.a.createElement(S.Field,{name:"type",label:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_DHCP_TYPE",placeholder:"COMMON_ACTION_CHOOSE_AN_OPTION",options:r.typeOptions,type:"dropdown",translateOptions:!0,translateLabel:!0,full:!0})),c.a.createElement(g.a,null,c.a.createElement(N.a,{column:!0,unlimitedWidth:!0},c.a.createElement(S.Field,{name:"code",label:"SETTINGS_GATEWAY_DHCP_TABLE_HEADER_CODE",placeholder:"SETTINGS_GATEWAY_DHCP_PLACEHOLDER_DHCP_CODE",type:"number",min:r.DHCP_CODE.MIN,max:r.DHCP_CODE.MAX,full:!0}))),i.type===r.DHCP_OPTIONS.INTEGER&&c.a.createElement(g.a,null,c.a.createElement(X,null,c.a.createElement(q,null,c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_CREATE_OPTION_LABEL_INTEGER_TYPE"}),c.a.createElement(Z,null,r.integerOptions.map(({value:e})=>c.a.createElement(S.Field,{key:e,value:e,type:"togglebox",toggleboxType:"radio",name:"width",inModal:!0},e)))),c.a.createElement(K,null,c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_SIGNED"}),c.a.createElement(S.Field,{name:"signed",type:"checkbox"}))))))},J=a(764);const ee=Object(W.c)(d.c)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xl"]};
  span {
    display: flex;
    &:not(:first-child) {
      margin: auto 0 auto ${({theme:e})=>e.spacing["spacing-s"]};
    }
  }
`,te=Object(W.c)("div")`
  width: 100%;
`,ae=Object(W.c)(V.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xl"]};
`,ne={};var ce=Object(E.f)(({intl:e})=>{const{id:t}=Object(_.m)(),a=Object(s.useSelector)(r.selectDhcpOptionsData),i=Object(s.useDispatch)(),o=Object(l.i)("advanced/gateway"),m=Object(n.useMemo)(()=>o+"/dhcp/form",[o]),d=Object(_.k)(),p=Object(n.useCallback)((e,{setSubmitting:t})=>i(Object(r.saveDhcpOption)({...e,code:Number(e.code),width:Number(e.width)})).then(()=>{i(Object(h.c)({icon:T.a.success,message:"SETTINGS_GATEWAY_DHCP_OPTION_SAVE_SUCCESS"}))}).catch(e=>{i(Object(h.c)({errorMessage:e.msg,errorValues:e,icon:T.a.danger,message:"SETTINGS_GATEWAY_DHCP_OPTION_SAVE_ERROR"})),t(!1)}),[i]),u=Object(s.useSelector)(r.selectDhcpOptionsData).find(e=>e._id===t)||ne,b=!!u._id,A=Object(s.useSelector)(r.selectDhcpOptionsCodes),S=(e=>{const t=new Set([...e,...r.DHCP_CODE.DISALLOWED_CODES]);let a=Object(J.a)(224,r.DHCP_CODE.MAX).find(e=>!t.has(e));return a||(a=Object(J.a)(r.DHCP_CODE.MIN,224).find(e=>!t.has(e))),{name:"",code:a,type:r.DhcpOptionTypes.TEXT,width:8,signed:!1}})(A),I=Object(n.useMemo)(()=>({...S,...u}),[S,u]),f=Object(n.useMemo)(()=>{return e=b?A.filter(e=>String(e)!==String(u.code)):A,D.a.object().shape({name:D.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_NAME").matches(/^[A-Za-z0-9-_]+$|^$/,c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_NAME_VALIDATION"})).required(),code:D.a.number().label("SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_CODE").min(r.DHCP_CODE.MIN).max(r.DHCP_CODE.MAX).notOneOf([...e,...r.DHCP_CODE.DISALLOWED_CODES],c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP_OPTIONS_CODE_VALIDATION"})),type:D.a.string(),width:D.a.number(),signed:D.a.boolean()});var e},[A,u,b]),C=Object(n.useCallback)(e=>d.push(`${m}/${e}`),[d,m]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{padding:"none"},c.a.createElement(g.a,null,c.a.createElement(ae,{label:c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"})}),c.a.createElement(N.a,null,c.a.createElement(te,null,a.length?c.a.createElement(Y.a,{idField:"_id",disableSelection:!0,disableTextPointer:!0,columns:F(e),items:a,disableColumnFilters:!0,onRowClick:({_id:e})=>C(e)}):null,c.a.createElement(ee,{legacy:!1,name:"dhcp-option-add",type:"button",variant:"inline",onClick:()=>d.push(m+"/new"),Icon:k.wb},c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_ACTION_ADD_OPTION"})))))),t?c.a.createElement(y.c,{onSubmit:p,validationSchema:f,initialValues:I},c.a.createElement(Q,{isEdit:b,defaultValues:S})):null)});const ie=Object(m.a)(e=>{const t=Object(u.d)(e,"dhcp_relay_server_"),a=Object(u.c)(e,"dhcp_relay_server_");return{...P,...a,dhcp_relay_servers:t}});var re=({onBack:e})=>{const{id:t}=Object(_.m)(),a=Object(s.useDispatch)(),r=Object(n.useContext)(d.l),l=Object(s.useSelector)(i.selectUsgSettings),o=Object(n.useCallback)((e,{setSubmitting:t})=>{const n=ie(l);return a(Object(i.saveSettings)({...(e=>Object(u.c)(e,"dhcp_relay_servers"))(e.serverOnly?n:e),...(e=>Object(u.a)(e.dhcp_relay_servers,"dhcp_relay_server_",Object(u.b)(l,"dhcp_relay_server_")))(e)})).then(()=>{a(Object(h.c)({icon:T.a.success,message:"SETTINGS_GATEWAY_DHCP_SAVE_SUCCESS"}))}).catch(e=>{a(Object(h.c)({errorMessage:e.msg,errorValues:e,icon:T.a.danger,message:"SETTINGS_GATEWAY_DHCP_SAVE_ERROR"})),t(!1)})},[a,l]),m=!!l._id;return c.a.createElement(p.b,{onSubmit:o,title:{component:c.a.createElement(E.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_DHCP"},initialValues:ie(l),isEdit:m,isView:r,validationSchema:R,unsavedChangesModalIgnoredPaths:/\/dhcp\/form(\/[\w_-]*\/?)?$/,showBack:!0,goBack:e,onEscClicked:e},c.a.createElement(b.SearchableAccordion,{multiOpen:!0,items:[{id:1,openByDefault:!1,label:c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_HEADER_RELAY"}),renderContent:()=>c.a.createElement(M,null)},{id:2,openByDefault:!!t,label:c.a.createElement(E.c,{id:"SETTINGS_GATEWAY_DHCP_HEADER_OPTIONS"}),renderContent:()=>c.a.createElement(ce,null)}]}))};t.default=()=>{const e=Object(l.h)();return Object(l.f)([Object(i.fetchSettings)({type:o.a.CACHE}),Object(r.fetchDhcpOptions)({crudCacheStrategy:{type:o.a.CACHE}})],c.a.createElement(re,{onBack:e}))}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return _})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return T.a})),a.d(t,"a",(function(){return M}));var n=a(0),c=a.n(n),i=a(5),r=a(648),l=a(1136),o=a(208);const s=Object(i.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,E=(Object(i.c)(r.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(i.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),m=Object(i.c)(l.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,_=e=>c.a.createElement(E,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),d=e=>c.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var p=a(1851),u=a(375);const h=Object(i.c)(p.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,b=e=>i.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(u.b)(({theme:e,...t})=>c.a.createElement(h,Object.assign({headerRowClassName:b(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var T=a(1934),O=a(529),g=a(1743),N=a(2),A=a(30),S=a(15),D=a(2846),I=a(44),f=a(71),C=a(62);const R=Object(i.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,x=Object(i.c)(f.c)`
  > * {
    vertical-align: middle;
  }
`,P=Object(i.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,y=Object(i.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,G=Object(i.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,v=Object(i.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,j=Object(i.c)(P,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,H=Object(i.c)(f.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,L=Object(i.c)(f.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,w=Object(i.c)("div")`
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
`;var M=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:i,onRemoveItem:r,validationSchema:l,initialValues:o,onEditSubmit:s,useValuesInSchema:E=!1,max:_,useWindowTable:d=!1,addButtonText:u="COMMON_ACTION_ADD",invalid:h,...b}){const T=Object(n.useContext)(f.l),[M,W]=Object(n.useState)(!0),V=Object(n.useCallback)(t=>!t.disableRemove&&c.a.createElement(m,null,c.a.createElement(x,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{W(!1),r(t),await Promise.resolve(),W(!0)}},c.a.createElement(N.c,{id:"COMMON_ACTION_REMOVE"}))),[e,W,r]),Y=Object(n.useMemo)(()=>d?D.a:p.a,[d]);return c.a.createElement(I.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>E?A.a.lazy(e=>l(e)):l},({values:n,errors:l,setFieldValue:s,handleSubmit:E,handleReset:m,setTouched:d})=>c.a.createElement(c.a.Fragment,null,t.map((a,r)=>c.a.createElement(R,{inline:a.inline,isLast:r===t.length-1,key:a.name},c.a.createElement(P,{flexDirection:"column",width:"100%"},c.a.createElement(C.Field,Object.assign({disabled:n.editActive||n[e].length>=_,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?l[a.name]:h,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!T&&i&&r===t.length-1&&c.a.createElement(y,null,c.a.createElement(x,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),W(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),c=await d(a,!0);t.find(e=>c[e.name])||i(n),W(!0)},Icon:S.wb,disabled:n.editActive||n[e].length>=_||!n[a.name]},c.a.createElement(N.c,{id:u}))))),n.editActive?c.a.createElement(c.a.Fragment,null,n[e].map((n,i)=>c.a.createElement(v,{key:n.id,width:"100%"},b.columns.map((n,r)=>t[r]?c.a.createElement(j,{key:n.id,isLast:r===b.columns.length-1,flexDirection:"column",flex:"1 1 50%"},c.a.createElement(C.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${i}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),c.a.createElement(H,{justifyContent:"flex-end",width:"100%"},c.a.createElement(L,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),s("editActive",!1)}},c.a.createElement(N.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(f.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:E,disabled:Object(O.a)(Object(g.a)(n,"editActive"),Object(g.a)(o,"editActive"))},c.a.createElement(N.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&c.a.createElement(R,null,c.a.createElement(G,null,c.a.createElement(x,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),s("editActive",!0)},Icon:S.ub},c.a.createElement(N.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&M&&c.a.createElement(w,null,c.a.createElement(Y,{columns:b.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:r?V:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(1946),o=a.n(l),s=a(1741),E=a(520),m=a(521);const _=Object(i.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:i=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),d=Object(m.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),u=Object(n.useCallback)(e=>(e={},t={})=>d(e,t)&&p(e,t),[d,p]);return!!e&&c.a.createElement(o.a,{when:u(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(s.a,{actions:[{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>i?i(e):e()},{type:"button",text:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:E.b,title:c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>i?i(e):e()},c.a.createElement(_,null,c.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),c=a(36);t.a=()=>{const e=Object(c.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return S})),a.d(t,"b",(function(){return I})),a.d(t,"c",(function(){return f}));var n=a(0),c=a.n(n),i=a(5),r=a(643),l=a(32),o=a(1932),s=a(8),E=a(15),m=a(45),_=a(17),d=a(189),p=a(41);const u=Object(i.c)(d.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var h=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(_.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(_.e)())}}))},[t,e]);return c.a.createElement(u,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},c.a.createElement(E.vb,{color:m.a["blue-3"]}))},b=a(1933),T=a(71),O=a(227);const g=Object(i.c)(T.c)`
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
`,N=Object(i.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,A=Object(i.c)(E.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var S,D=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(O.a),i=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(_.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(_.e)())}}))},[t,e]);return c.a.createElement(g,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:i},c.a.createElement(N,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),c.a.createElement(A,{color:m.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(S||(S={}));const I=Object(i.c)(T.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,f=Object(i.c)(T.g)`
  * {
    line-height: 1.4 !important;
  }
`,C=Object(i.c)(r.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:i,video:r,online:s})=>{let E;switch(t){default:case S.BASIC:E=e;break;case S.CONFIGURED:E=c.a.createElement(f,{alignItems:"center"},e,!!n&&c.a.createElement(o.a,{section:n}),!!r&&s&&c.a.createElement(h,{video:r}));break;case S.STATUS:E=c.a.createElement(f,{alignItems:"center"},c.a.createElement(C,{variant:i}),c.a.createElement(I,{flex:"1",flexDirection:"column"},e,a&&c.a.createElement(l.a,null,a)));break;case S.UNCONFIGURED:E=c.a.createElement(f,{alignItems:"center"},!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{section:n}),c.a.createElement(T.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(l.a,null,a))),!!r&&s&&c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{video:r}),c.a.createElement(T.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(l.a,null,a))),!!r&&!s&&c.a.createElement(f,{alignItems:"center"},e))}return E}},1932:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(8),l=a(15),o=a(45),s=a(1936),E=a(189);const m=Object(i.c)(E.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return c.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},c.a.createElement(l.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(8),l=a(15),o=a(45),s=a(1936),E=a(71),m=a(43);const _=Object(i.c)(E.c)`
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
`,d=Object(i.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,p=Object(i.c)(l.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(r.useSelector)(m.i),i=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return c.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:i},c.a.createElement(d,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),c.a.createElement(p,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return E.d})),a.d(t,"c",(function(){return E.a}));var n=a(0),c=a.n(n),i=a(5),r=a(15),l=a(71);const o=Object(i.c)(l.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>c.a.createElement(o,Object.assign({alignItems:"center"},t),e,c.a.createElement(r.g,null)),E=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(17),c=a(41);const i=e=>Object(n.g)({modalType:c.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Z})),a.d(t,"d",(function(){return Q.a})),a.d(t,"f",(function(){return Q.c})),a.d(t,"h",(function(){return Q.e})),a.d(t,"g",(function(){return Q.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var c=a(0),i=a.n(c),r=a(5);var l=({children:e="",className:t=null,full:a=!1,offset:n=1,size:c=6,...l})=>{const o=a?12:c,s=a?0:n;return i.a.createElement("div",Object.assign({className:Object(r.b)("col-"+o,"offset-"+s,t)},l),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>i.a.createElement("div",{className:Object(r.b)("col-"+a,"offset-"+t)},e),E=a(2),m=a(666),_=a.n(m),d=a(71),p=a(1964),u=a.n(p),h=a(140),b=a.n(h),T=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const O=b.a.bind(u.a);var g=({className:e=null,status:t=o.NEUTRAL,...a})=>i.a.createElement(T.a,Object.assign({},a,{className:O("ubntStatusText","ubntStatusText--"+t,e)})),N=a(254),A=a(1944);const S=Object(r.c)(d.g)`
  border: 1px solid ${N.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,D=Object(r.c)(g)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var I=({state:e,className:t=null,...a})=>i.a.createElement(S,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),i.a.createElement(D,{message:A.b[e],status:o.WARNING})),f=a(322),C=a(82),R=a(8),x=a(45),P=a(70),y=a(20);const G={BORDER_WIDTH:2},v={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},j=({type:e,size:t,width:a,height:n})=>{switch(e){case f.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:c,TOP:i}=v;return{top:i,left:e,padding:`${n}px ${c}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function H({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:i,width:l,height:o}){const s=Object(R.useSelector)(f.selectHighlight),[E,m]=Object(P.c)(0),[_,d]=Object(P.c)(!1),p=Object(c.useRef)(null),u=Object(c.useMemo)(()=>(({color:e,show:t,style:a})=>Object(r.a)({"&::before":{border:`${G.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:x.a["blue-light-3"],show:_,style:{...j({type:e,size:i,width:l,height:o}),...a}}),[_,e,a,i,l,o]);return Object(c.useEffect)(()=>{if(Number.isFinite(n)&&n>E)m(E+1);else if(p.current&&t===s.id&&s.type===e){window.getComputedStyle(p.current).border,window.getComputedStyle(p.current).boxShadow;let t=p.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:c,top:i}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:c,top:i}=t.current.getBoundingClientRect();switch(a){case f.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=v,r=i+Object(y.a)(n,"top",a),l=r+c+Object(y.a)(n,"paddingBottom",e)+Object(y.a)(n,"paddingTop",t)+2*G.BORDER_WIDTH;return{bottom:l,height:l-r,top:r}}}})({height:o,highlightRef:p,type:e,highlightStyle:a}),{bottom:r,height:l,top:s}=n.getBoundingClientRect(),E=t>r,m=c>l,_=15;i<s||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+i-_}):E&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-r+_})}d(!0)}},[o,E]),Object(c.useEffect)(()=>{_||s.id!==t||m(e=>e+1),_&&s.id!==t&&d(!1)},[s.id,_]),{highlightClassName:u,highlightRef:p}}const L=Object(r.c)(_.a)`
  color: ${C.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,w=Object(r.c)(_.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=r.a`
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
`;var W=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:c={},dontTranslateText:l=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:m=null,offset:_=0,size:d=5,useHtml:p=!1})=>{const{highlightClassName:u,highlightRef:h}=H({type:f.SearchHighlightType.FIELD,forId:m,highlightStyle:s,highlightDelay:o,size:d}),b=!(!n&&!a),T={["col-"+d]:!0,["offset-"+_]:_>0},O=p?E.b:E.c;return i.a.createElement("div",{className:Object(r.b)(T,M,u),ref:h},i.a.createElement("div",{className:"mb-1"},i.a.createElement(w,{className:"settingsGridLabel",htmlFor:m,primary:!0},l?e:i.a.createElement(E.c,{id:e})),t&&i.a.createElement(I,{state:t})),b&&i.a.createElement("div",null,i.a.createElement(L,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?i.a.createElement(O,{id:n,values:c}):a)))};const V=r.a`
  max-width: 960px;
`,Y=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:c=8,noWidthLimit:l=!1})=>{const o=n?4:c;return i.a.createElement("div",{className:Object(r.b)("row","mt-"+o,l?null:V,t),ref:a},e)};var k=i.a.forwardRef((e,t)=>i.a.createElement(Y,Object.assign({forwardedRef:t},e)));var $=e=>i.a.createElement("div",{className:"mt-2 mb-6"},i.a.createElement(T.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const F=Object(r.c)("div")`
  flex: 0 1 480px;
`,z=Object(r.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var B=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:c=null,section:l=null})=>{const o=N.b.sectionColors.common;return i.a.createElement(k,{className:t,marginTop:0},i.a.createElement(F,null,i.a.createElement(z,{className:Object(r.b)("mt-8","type-larger"),style:{color:o}},i.a.createElement(E.c,{id:e})),a&&i.a.createElement(T.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const U=Object(r.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,X=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>i.a.createElement(U,{className:Object(r.b)("container","px-8",t),noDivider:n},i.a.createElement("div",{className:Object(r.b)({"pb-8":!a})},e));X.Content=l,X.Icon=s,X.Label=W,X.Row=k,X.SectionHeader=$,X.Subheader=B;var q=a(284);const K=Object(r.c)(q.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Z=e=>i.a.createElement(K,Object.assign({},e)),Q=a(1926),J=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(R.useSelector)(J.C);return e>0?i.a.createElement(ee.a,{alignItems:"center"},i.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",i.a.createElement(E.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):i.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return x}));var n=a(0),c=a.n(n),i=a(5),r=a(2),l=a(44),o=a(2847),s=a(2658),E=a(1929),m=a(783),_=a(71),d=a(1940),p=a(15),u=a(32),h=a(42),b=a(1847),T=a(782),O=a(1930);const g=i.a`
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
`;var N=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(O.a)(),o=Object(T.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(b.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:g,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const A=i.a`
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
`;var S=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(O.a)(),o=Object(T.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(b.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:A,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const D=Object(i.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,I=Object(i.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,f=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,C=Object(i.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,R=Object(i.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var x=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>{const{motif:l}=Object(h.a)();return c.a.createElement(S,{ignoredPaths:r},c.a.createElement(I,{flex:"none",height:"65px"},c.a.createElement(N,{ignoredPaths:r},c.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},c.a.createElement(D,{alignItems:"center",flex:"1",height:"100%"},t&&c.a.createElement(C,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},c.a.createElement(p.f,{size:"original"}))),c.a.createElement(f,null,c.a.createElement(R,{weight:"bold"},e.component)),c.a.createElement(D,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&c.a.createElement(C,{legacy:!1,name:"closeButton",type:"button",onClick:n},c.a.createElement(p.y,{size:"original"})))))))};const P=Object(i.c)(_.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,y=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,G=Object(i.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,v=Object(i.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,j=Object(i.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,H=Object(i.c)(_.k)`
  height: 100%;
  width: 100%;
`;var L=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:m,title:p,unsavedChangesModalIgnoredPaths:u,onEscClicked:h,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:T=!1,customFooterButtons:O,hidddenHeader:g,...N})=>c.a.createElement(l.c,Object.assign({enableReinitialize:!0},N),({dirty:i,handleReset:l,handleSubmit:N,isSubmitting:A})=>c.a.createElement(y,{autoComplete:"off",onSubmit:N},c.a.createElement(H,{vertical:!0},!g&&c.a.createElement(x,{goBack:a,hideClose:n,showBack:m,title:p,onEscClicked:h,ignoredPaths:u}),c.a.createElement(d.a,{ignoredPaths:u},c.a.createElement(j,{flex:"1"},c.a.createElement(P,{flex:"none",flexDirection:"column"},e))),!t&&!o&&c.a.createElement(E.a,{ignoredPaths:u,when:i&&!A}),(!o||T)&&c.a.createElement(v,{active:i||T},c.a.createElement(_.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&c.a.createElement(G,null,O(A)),!o&&c.a.createElement(_.g,null,c.a.createElement(s.a,{disabled:!i||A,type:"button",variant:"default",onClick:l},c.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(s.a,{disabled:!i||A,type:"submit",variant:"primary"},c.a.createElement(r.c,{id:b}))))))))},1940:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(1847),r=a(5),l=a(782),o=a(1930);const s=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,...E})=>{const m=Object(o.a)(),_=Object(l.a)(a),d=Object(n.useMemo)(()=>c.a.Children.map(r,a=>null===a?a:c.a.createElement(i.a,Object.assign({appear:t||!_||m,in:t||!_||m,timeout:e,classNames:s,mountOnEnter:!0},E),a)),[r,t,_,m,e,E]);return c.a.createElement(c.a.Fragment,null,d)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const c={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return _})),a.d(t,"saveDhcpOption",(function(){return d})),a.d(t,"removeDhcpOption",(function(){return p})),a.d(t,"DHCP_OPTIONS",(function(){return i})),a.d(t,"typeOptions",(function(){return r})),a.d(t,"integerOptions",(function(){return l})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return o})),a.d(t,"DHCP_CODE",(function(){return s})),a.d(t,"MODEL",(function(){return E})),a.d(t,"PATH",(function(){return m})),a.d(t,"selectDhcpOptions",(function(){return h})),a.d(t,"selectDhcpOptionsData",(function(){return b})),a.d(t,"selectDhcpOptionsCodes",(function(){return T})),a.d(t,"DhcpOptionTypes",(function(){return O})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return g}));var n=a(28),c=a(6);const i={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},r=[{value:i.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:i.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:i.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:i.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:i.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:i.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],l=[8,16,32].map(e=>({value:e,label:e})),o="dhcpd_user_option_",s={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},E="dhcpOptions",m="/api/s/{site}/rest/dhcpoption",_=(e={})=>Object(c.q)(E,m,void 0,{...e,idField:"_id"}),d=e=>{const{_id:t}=e;return t?Object(c.C)(E,t,`${m}/${t}`,e):Object(c.i)(E,m,e)},p=({_id:e,name:t})=>Object(c.n)(E,e,`${m}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var u=a(4);const h=Object(c.A)(_()),b=Object(u.a)(h,n.c),T=Object(u.a)(b,e=>e.map(({code:e})=>e));var O;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(O||(O={}));const g=(e,t,a,n)=>{let c;switch(a){case O.BOOLEAN:c="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case O.HEX_ARRAY:c="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case O.INTEGER:c="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case O.IP_ADDRESS:c="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case O.MAC_ADDRESS:c="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case O.TEXT:c="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:c="COMMON_UNKNOWN"}const i=e.formatMessage({id:c});return"integer"!==a?i:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},2056:function(e,t,a){"use strict";a.d(t,"d",(function(){return _})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return h}));var n=a(12),c=a.n(n),i=a(179),r=a.n(i),l=a(108),o=a.n(l),s=a(364);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e,t){return Object.entries(e||{}).reduce((function(e,a){var n=o()(a,2),c=n[0],i=n[1];return c.startsWith(t)&&i?[].concat(r()(e),[i]):e}),[])},d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=a>e.length?Array.from(Array(a),(function(t,a){return a<e.length?e[a]:n})):e;return c.reduce((function(e,a,n){return e[t+(n+1)]=a,e}),{})},p=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Object.entries(e||{}).reduce((function(e,t){var n=o()(t,2),c=n[0],i=n[1];return a.find((function(e){return c.startsWith(e)}))||(e[c]=i),e}),{})},u=function(e,t){return Object.keys(e).reduce((function(e,a){return a.startsWith(t)?e+1:e}),0)},h=function(e,t){return m(m({},e),Object.entries(Object(s.a)(e,t)).reduce((function(e,t){var a=o()(t,2),n=a[0],i=a[1];return m(m({},e),{},c()({},n,null===i?"":i))}),{}))}},2093:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(65);const l=Object(i.c)(r.a)`
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
`;t.a=e=>c.a.createElement(l,Object.assign({flushContent:!0},e))}}]);