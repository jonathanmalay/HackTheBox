(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[27],{1814:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(36),r=a(8),c=a(34),o=a(3),s=a(1949),_=a(70),E=a(6),d=a(452),m=a(145),p=a(2),u=a(63),T=a(215),b=a(1938),N=a(663),h=a(71),S=a(2005),I=a(2054),A=a(30),O=a(2119),g=a(445),w=a(1739),f=a(1736),v=a(1737),R=a(1914),L=a(5),D=a(44),C=a(15),P=a(558),x=a(1947),y=a(62),G=a(83);var j=a(322),W=a(2103),M=a(743),B=a(800),F=a(1937),k=a(128),U=a(1934),V=a(2130);const H=Object(L.c)(h.g)`
  width: 100%;
  > div {
    ${({isRange:e})=>`\n      &:nth-child(-n + ${e?2:1}) {\n        flex: 0 0 calc(${e?"50% - 40px":"100% - 64px"})\n      }\n    `};
    &:last-child {
      > div:last-child {
        > div:first-child {
          ${({itemCount:e})=>e>0&&`height: ${U.a.getHeight(e,6)}px;`}
        }
      }
    }
  }
  input {
    margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
  }
`,$=[{id:"wan_ip_alias",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_TABLE_LABEL"}),sortable:!1}],Y={wan_ip_aliases:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL"},z=(e,t)=>Array.from(e,(e,a)=>({id:"wan_ip_alias-"+a,wan_ip_alias:e,disableRemove:t.some(({destination_ip:t})=>e.includes(t))}));var q=({ipOption:e})=>{const{values:t,setFieldValue:a}=Object(D.e)(),{wan_ip_aliases:l}=t,c=Object(r.useSelector)(s.selectPortForwardData),o=Object(n.useMemo)(()=>e===V.a.ADD_IP_RANGE?[{inline:!0,name:"new_wan_ip_alias_start",placeholder:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL",type:"text",label:"COMMON_START"},{inline:!0,name:"new_wan_ip_alias_stop",placeholder:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL",type:"text",label:"COMMON_STOP"}]:[{name:"new_wan_ip_alias",placeholder:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL",type:"text"}],[e]),_=Object(n.useMemo)(()=>({editActive:!1,wan_ip_aliases:z(l,c)}),[t]),E=Object(n.useMemo)(()=>z(l,c),[t]),d=Object(n.useCallback)(e=>{a("wan_ip_aliases",e)},[a]),m=Object(n.useCallback)(({wan_ip_aliases:t,new_wan_ip_alias:a,new_wan_ip_alias_start:n,new_wan_ip_alias_stop:i})=>{if(e===V.a.ADD_IP_RANGE){if(!n||!i)return;d([...new Set([...t.map(({wan_ip_alias:e})=>e),...Object(k.a)([n,i])])].slice(0,64))}else{if(!a)return;d([...t.map(({wan_ip_alias:e})=>e),a])}},[a,e]),p=Object(n.useCallback)(({wan_ip_alias:e})=>{d(t.wan_ip_aliases.filter(t=>t!==e))},[a,t]),u=Object(n.useCallback)(e=>{d([...e.map(({wan_ip_alias:e})=>e)])},[a]);return i.a.createElement(H,{flexWrap:"wrap",isRange:e===V.a.ADD_IP_RANGE,itemCount:E.length},i.a.createElement(F.d,{fieldName:"wan_ip_aliases",items:E,columns:$,fieldLabels:Y,newFields:o,onAddItem:m,onRemoveItem:p,onEditSubmit:u,initialValues:_,validationSchema:t=>Object(W.c)(t,e),useValuesInSchema:!0,max:64,useWindowTable:!0}))};const X=Object(L.c)(h.g)`
  > * {
    margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
    &:last-child {
      margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
    }
  }
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]};
`;var K=()=>{const[e,t]=Object(n.useState)(V.a.ADD_IP),a=Object(r.useSelector)(B.I),l=Object(n.useCallback)(({target:{value:e}})=>t(e),[]);return a?i.a.createElement(f.a,null,i.a.createElement(R.a,{alignWith:"toggle",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_LABEL"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(X,null,i.a.createElement(M.a,{id:V.a.ADD_IP,value:V.a.ADD_IP,checked:e===V.a.ADD_IP,onChange:l,variant:"boxed"},i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_TOGGLE_OPTION_ADD_IP"})),i.a.createElement(M.a,{id:V.a.ADD_IP_RANGE,value:V.a.ADD_IP_RANGE,checked:e===V.a.ADD_IP_RANGE,onChange:l,variant:"boxed"},i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_TOGGLE_OPTION_ADD_IP_RANGE"}))),i.a.createElement(q,{ipOption:e}))):null};const Q=Object(L.c)(f.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var J=()=>{const{values:e}=Object(D.e)(),t=Object(n.useContext)(h.l),a=Object(c.isUlteFailoverNetwork)(e);return i.a.createElement(w.a,{padding:"none"},i.a.createElement(Q,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan",htmlFor:"wan_type",alignWith:"dropdown",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_LABEL_IPV4_CONNECTION"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{full:!0,type:"dropdown",name:"wan_type",options:O.c,translateOptions:!0,disabled:t||a}))),i.a.createElement(x.a,{in:e.wan_type===c.IpV4ConnectionType.STATIC||e.wan_type===c.IpV4ConnectionType.PPPOE,wrap:!0,flexDirection:"column"},e.wan_type===c.IpV4ConnectionType.STATIC&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan,isWanStatic",htmlFor:"wan_ip",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_IP_ADDRESS"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_ip"}))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan,isWanStatic",searchText:"SETTINGS_INTERNET_WAN_LABEL_IPV4_SUBNET_MASK",htmlFor:"wan_netmask",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SUBNET_MASK"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_netmask"}))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan,isWanStatic",searchText:"SETTINGS_INTERNET_WAN_LABEL_ROUTER_IPV4",htmlFor:"wan_gateway",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_ROUTER"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_gateway"}))),i.a.createElement(K,null)),e.wan_type===c.IpV4ConnectionType.PPPOE&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan,isWanPppoe",searchText:"SETTINGS_INTERNET_WAN_LABEL_USERNAME_PPPOE_SEARCH",htmlFor:"wan_username",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_USERNAME"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_username"}))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan,isWanPppoe",searchText:"SETTINGS_INTERNET_WAN_LABEL_PASSWORD_PPPOE_SEARCH",htmlFor:"x_wan_password",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_PASSWORD"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"x_wan_password",type:"password",passwordToggle:!0}))),i.a.createElement(K,null))))};const Z=Object(L.c)(f.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var ee=()=>{const{values:e}=Object(D.e)();return i.a.createElement(w.a,{padding:"none"},i.a.createElement(Z,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan",htmlFor:"wan_type_v6",alignWith:"dropdown",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_LABEL_IPV6_CONNECTION"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{full:!0,type:"dropdown",name:"wan_type_v6",options:O.d,translateOptions:!0}))),i.a.createElement(x.a,{in:"static"===e.wan_type_v6||"dhcpv6"===e.wan_type_v6},"static"===e.wan_type_v6&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(R.a,{htmlFor:"wan_ipv6",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_IPV6_ADDRESS"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_ipv6"}))),i.a.createElement(f.a,null,i.a.createElement(R.a,{htmlFor:"wan_prefixlen",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_PREFIX_LENGTH"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_prefixlen",type:"number"}))),i.a.createElement(f.a,null,i.a.createElement(R.a,{htmlFor:"wan_gateway_v6",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_ROUTER"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_gateway_v6"})))),"dhcpv6"===e.wan_type_v6&&i.a.createElement(f.a,null,i.a.createElement(R.a,{htmlFor:"wan_dhcpv6_pd_size",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_IPV6_DHCP_PD_SIZE"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,name:"wan_dhcpv6_pd_size",min:48,max:64,type:"number"})))))},te=a(1965);const ae=Object(L.c)(h.g)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,ne=Object(L.c)(f.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var ie=()=>{const{setFieldValue:e,values:{wan_provider_capabilities:t}}=Object(D.e)();return Object(n.useEffect)(()=>{const a=Boolean((null==t?void 0:t.download_kilobits_per_second)||(null==t?void 0:t.upload_kilobits_per_second));t&&(null==t?void 0:t.hasAtleastOneDefined)!==a&&e("wan_provider_capabilities.hasAtleastOneDefined",a)},[t,e]),i.a.createElement(w.a,{padding:"none"},i.a.createElement(ne,null,i.a.createElement(j.SearchableGridLabel,{searchText:"SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_SEARCH_LABEL",htmlFor:"wan_provider_capabilities.download_kilobits_per_second",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL"}),description:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_DESCRIPTION"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(h.g,{justifyContent:"space-between",width:"100%"},i.a.createElement(h.g,{width:"100%",flexFlow:"column"},i.a.createElement(y.Field,{full:!0,name:"wan_provider_capabilities.download_kilobits_per_second",type:"number",min:W.a.DOWNLOAD.MIN})),i.a.createElement(ae,{width:"100%"},i.a.createElement(y.Field,{full:!0,name:"wan_provider_capabilities.download_unit",type:"dropdown",options:te.a,translateOptions:!0}))))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchText:"SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_SEARCH_LABEL",htmlFor:"wan_provider_capabilities.upload_kilobits_per_second",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL"}),description:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLAOD_DESCRIPTION"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(h.g,{justifyContent:"space-between",width:"100%"},i.a.createElement(h.g,{width:"100%",flexFlow:"column"},i.a.createElement(y.Field,{full:!0,name:"wan_provider_capabilities.upload_kilobits_per_second",type:"number",min:W.a.UPLOAD.MIN})),i.a.createElement(ae,{width:"100%"},i.a.createElement(y.Field,{full:!0,name:"wan_provider_capabilities.upload_unit",type:"dropdown",options:te.a,translateOptions:!0}))))))};const le=Object(L.c)(y.Field)`
  &:not(:first-child) {
    margin-top: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,re=Object(L.c)(g.a)`
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]};
`;var ce=()=>{const e=Object(n.useRef)(null),{values:t,errors:a,setFieldValue:s}=Object(D.e)(),E=Object(c.isUlteFailoverNetwork)(t),d=Object(r.useSelector)(G.m),m=Object(r.useSelector)(o.selectIsUbiOS),u=Object(l.k)(),T=Object(n.useMemo)(()=>{var e;return null===(e=u.location.state)||void 0===e?void 0:e.isFromSpeedTest},[]),b=Object(n.useCallback)(()=>{u.replace({pathname:u.location.pathname,state:{}})},[u]),N=Object(n.useMemo)(()=>m?W.b.filter(({value:e})=>"weighted"!==e):W.b,[m]);return Object(_.g)(e,a),i.a.createElement("div",{ref:e},i.a.createElement(w.a,null,i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan",htmlFor:"name",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_NAME"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{full:!0,name:"name"}))),i.a.createElement(j.SearchableAccordion,{items:[{id:"advanced",openByDefault:T,label:i.a.createElement(p.c,{id:"SETTINGS_NETWORKS_FORM_ADVANCED_LABEL"}),description:i.a.createElement(p.c,{id:"SETTINGS_HOTSPOT_FORM_ADVANCED_DESCRIPTION"}),renderContent:()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{htmlFor:"wan_dns1",alignWith:0,label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_DNS_SERVER"}),description:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_DNS_SERVER_DESCRIPTION"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(le,{full:!0,name:"wan_dns1",label:"SETTINGS_INTERNET_WAN_DNS_SERVER_PRIMARY_SERVER",placeholder:"UNIFI_RECOMMENDED"}),i.a.createElement(le,{full:!0,name:"wan_dns2",label:"SETTINGS_INTERNET_WAN_DNS_SERVER_SECONDARY_SERVER",placeholder:"UNIFI_RECOMMENDED"}))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{htmlFor:"wan_vlan_enabled",alignWith:"toggleSmall",label:i.a.createElement(p.c,{id:"SETTINGS_WIFI_ADVANCED_SPECIFY_VLAN_LABEL"})}),i.a.createElement(v.a,null,i.a.createElement(y.Field,{type:"checkbox",name:"wan_vlan_enabled"}))),!E&&i.a.createElement(f.a,{disabled:!t.wan_vlan_enabled},i.a.createElement(R.a,{htmlFor:"wan_vlan",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_VLAN_ID"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{type:"number",name:"wan_vlan",placeholder:"COMMON_NONE",min:0,max:P.a.MAX_VLAN,full:!0}))),m&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isUbiOs",htmlFor:"mac_override_enabled",alignWith:"toggleSmall",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS_CLONE"})}),i.a.createElement(v.a,null,i.a.createElement(y.Field,{type:"checkbox",name:"mac_override_enabled"}))),i.a.createElement(f.a,{disabled:!t.mac_override_enabled},i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isUbiOs",htmlFor:"mac_override",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{full:!0,name:"mac_override",onChange:e=>{var t,a;return s("mac_override",(a=null===(t=null==e?void 0:e.currentTarget)||void 0===t?void 0:t.value)?a.replace(/([^0-9a-f])/gi,"").replace(/[0-9a-f]{2}(?!$)/gi,"$&:").substring(0,17).toLowerCase():a)}})))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{htmlFor:"wan_smartq_enabled",alignWith:"toggleSmall",label:i.a.createElement(h.g,null,i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_ENABLE_SMART_QUEUES"}),!d&&i.a.createElement(re,{message:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_ENABLE_SMART_QUEUES_HARDWARE_OFFLOAD_WARNING"}),position:"bottom",width:200},i.a.createElement(C.W,{isActive:!0}))),description:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_DESCRIPTION_SMART_QUEUES"})}),i.a.createElement(v.a,null,i.a.createElement(y.Field,{type:"checkbox",name:"wan_smartq_enabled"}))),i.a.createElement(x.a,{in:t.wan_smartq_enabled},i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWanSmartQueuesEnabled",htmlFor:"wan_smartq_up_rate",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_UP_RATE"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,type:"number",min:0,max:1e6,name:"wan_smartq_up_rate"}))),i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWanSmartQueuesEnabled",htmlFor:"wan_smartq_down_rate",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_DOWN_RATE"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,type:"number",min:0,max:1e6,name:"wan_smartq_down_rate"})))),!!t.wan_vlan&&!a.wan_vlan&&i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWanWithVlanId",htmlFor:"wan_egress_qos",alignWith:"dropdown",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_EGRESS_QOS"}),description:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_EGRESS_QOS_DESCRIPTION"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{type:"dropdown",name:"wan_egress_qos",options:W.d,full:!0}))),"WAN2"===t.wan_networkgroup&&i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan2",htmlFor:"wan_load_balance_type",alignWith:"dropdown",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_LOAD_BALANCING"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{type:"dropdown",full:!0,name:"wan_load_balance_type",options:N,translateOptions:!0}))),"weighted"===t.wan_load_balance_type&&"WAN2"===t.wan_networkgroup&&i.a.createElement(f.a,null,i.a.createElement(j.SearchableGridLabel,{searchIsApplicable:"isWan2,isWan2WeightedLoadBalancing",htmlFor:"wan_load_balance_weight",alignWith:"input",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_WAN_LABEL_LOAD_BALANCING_WEIGHT"})}),i.a.createElement(v.a,{column:!0},i.a.createElement(y.Field,{fast:!0,full:!0,type:"number",min:1,max:100,name:"wan_load_balance_weight"}))),i.a.createElement(j.SearchableAccordion,{scrollIntoViewDefaultItem:!0,onScrollIntoViewDefaultItem:b,items:[{id:"ip-v4",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_LABEL_IPV4_CONNECTION"}),renderContent:()=>i.a.createElement(J,null)},{id:"ip-v6",label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_LABEL_IPV6_CONNECTION"}),renderContent:()=>i.a.createElement(ee,null)},{id:"isp-capabilities",openByDefault:T,label:i.a.createElement(p.c,{id:"SETTINGS_INTERNET_LABEL_ISP_CAPABILITIES"}),renderContent:()=>i.a.createElement(ie,null)}],variant:"secondary",multiOpen:!0}))}],variant:"primary",multiOpen:!0})))};const oe=Object(u.a)(e=>{var t,a;const n=Boolean((null===(t=e.wan_provider_capabilities)||void 0===t?void 0:t.download_kilobits_per_second)||(null===(a=e.wan_provider_capabilities)||void 0===a?void 0:a.upload_kilobits_per_second));return e._id?{...Object(c.networkInitialValues)(c.NetworkPurpose.WAN),...e,wan_vlan:e.wan_vlan_enabled?e.wan_vlan:"",wan_provider_capabilities:{...e.wan_provider_capabilities,hasAtleastOneDefined:n}}:{...Object(c.networkInitialValues)(c.NetworkPurpose.WAN),wan_provider_capabilities:{hasAtleastOneDefined:n}}});var se=e=>{const t=Object(r.useDispatch)(),a=Object(n.useContext)(h.l),l=Object(r.useSelector)(o.selectIsUbiOS),{initialValues:s,onBack:_}=e,E=!!(null==s?void 0:s._id),m=Object(n.useCallback)(Object(S.c)(e)(async e=>(await t(Object(c.saveNetworkAndClearSubnetSuggestions)(Object(I.a)(e))),t(Object(d.b)()))),[]),u=Object(n.useMemo)(()=>({component:s.name||i.a.createElement(p.c,{id:"SETTINGS_INTERNET_HEADER_CREATE"}),message:"SETTINGS_INTERNET_NAME"}),[s.name]),g=Object(n.useCallback)(()=>{t(Object(N.b)({name:s.name,onConfirm:async()=>{await t(Object(c.deleteNetwork)(s._id,{name:s.name})),_()}}))},[s._id,s.name,_]);return i.a.createElement(b.b,{goBack:_,initialValues:oe(s||{}),isEdit:E,isView:a,showBack:!0,title:u,validationSchema:A.a.lazy(()=>Object(O.a)(l)),onEscClicked:_,onSubmit:m,footerActiveOverride:!!(null==s?void 0:s._id)&&!s.attr_no_delete,customFooterButtons:e=>(null==s?void 0:s._id)&&!s.attr_no_delete&&i.a.createElement(T.a,{disabled:e,type:"button",variant:"default",onClick:g},i.a.createElement(p.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(ce,null))},_e=a(2037);t.default=()=>{const{wanId:e}=Object(l.m)(),t=Object(r.useDispatch)(),a=Object(r.useSelector)(c.selectNetworksData).find(t=>t._id===e),p=Object(r.useSelector)(d.e),{configuration:u}=p.find(({configuration:{_id:t}})=>t===e)||{configuration:{wan_provider_capabilities:{upload_kilobits_per_second:m.provider_capabilities.upload,download_kilobits_per_second:m.provider_capabilities.download}}},T=Object(_.h)(),{download:b,upload:N}=Object(n.useMemo)(()=>{var e;return Object(_e.b)(null!==(e=null==u?void 0:u.wan_provider_capabilities)&&void 0!==e?e:{upload_kilobits_per_second:1,download_kilobits_per_second:1})},[u]),h={...a,...u,wan_provider_capabilities:{upload_kilobits_per_second:N.value,upload_unit:N.unit,download_kilobits_per_second:b.value,download_unit:b.unit,hasAtleastOneDefined:Boolean(N.value||b.value)}};return Object(n.useEffect)(()=>()=>t(Object(E.c)(d.c)),[]),Object(_.f)([Object(c.fetchNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),d.c,Object(s.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(o.fetchSiteGateway)()],i.a.createElement(se,{initialValues:h,onBack:T}))}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return N.a})),a.d(t,"a",(function(){return M}));var n=a(0),i=a.n(n),l=a(5),r=a(648),c=a(1136),o=a(208);const s=Object(l.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,_=(Object(l.c)(r.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(l.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),E=Object(l.c)(c.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>i.a.createElement(_,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),m=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var p=a(1851),u=a(375);const T=Object(l.c)(p.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,b=e=>l.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(u.b)(({theme:e,...t})=>i.a.createElement(T,Object.assign({headerRowClassName:b(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var N=a(1934),h=a(529),S=a(1743),I=a(2),A=a(30),O=a(15),g=a(2846),w=a(44),f=a(71),v=a(62);const R=Object(l.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,L=Object(l.c)(f.c)`
  > * {
    vertical-align: middle;
  }
`,D=Object(l.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,C=Object(l.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,P=Object(l.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,x=Object(l.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,y=Object(l.c)(D,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,G=Object(l.c)(f.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,j=Object(l.c)(f.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,W=Object(l.c)("div")`
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
`;var M=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:l,onRemoveItem:r,validationSchema:c,initialValues:o,onEditSubmit:s,useValuesInSchema:_=!1,max:d,useWindowTable:m=!1,addButtonText:u="COMMON_ACTION_ADD",invalid:T,...b}){const N=Object(n.useContext)(f.l),[M,B]=Object(n.useState)(!0),F=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(E,null,i.a.createElement(L,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{B(!1),r(t),await Promise.resolve(),B(!0)}},i.a.createElement(I.c,{id:"COMMON_ACTION_REMOVE"}))),[e,B,r]),k=Object(n.useMemo)(()=>m?g.a:p.a,[m]);return i.a.createElement(w.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>_?A.a.lazy(e=>c(e)):c},({values:n,errors:c,setFieldValue:s,handleSubmit:_,handleReset:E,setTouched:m})=>i.a.createElement(i.a.Fragment,null,t.map((a,r)=>i.a.createElement(R,{inline:a.inline,isLast:r===t.length-1,key:a.name},i.a.createElement(D,{flexDirection:"column",width:"100%"},i.a.createElement(v.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?c[a.name]:T,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!N&&l&&r===t.length-1&&i.a.createElement(C,null,i.a.createElement(L,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),B(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await m(a,!0);t.find(e=>i[e.name])||l(n),B(!0)},Icon:O.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},i.a.createElement(I.c,{id:u}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,l)=>i.a.createElement(x,{key:n.id,width:"100%"},b.columns.map((n,r)=>t[r]?i.a.createElement(y,{key:n.id,isLast:r===b.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(v.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${l}][${n.id}]`,type:t[r].type,fast:!0},"dropdown"!==t[r].type?{}:{options:t[r].options,translateLabel:!0,translateOptions:t[r].translateOptions,translatePlaceholder:!0,type:t[r].type,validated:t[r].validated}))):null))),i.a.createElement(G,{justifyContent:"flex-end",width:"100%"},i.a.createElement(j,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{E(),s("editActive",!1)}},i.a.createElement(I.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(f.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:_,disabled:Object(h.a)(Object(S.a)(n,"editActive"),Object(S.a)(o,"editActive"))},i.a.createElement(I.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(R,null,i.a.createElement(P,null,i.a.createElement(L,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{E(),s("editActive",!0)},Icon:O.ub},i.a.createElement(I.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&M&&i.a.createElement(W,null,i.a.createElement(k,{columns:b.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:r?F:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(5),r=a(2),c=a(1946),o=a.n(c),s=a(1741),_=a(520),E=a(521);const d=Object(l.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:l=null})=>{const c=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),m=Object(E.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),u=Object(n.useCallback)(e=>(e={},t={})=>m(e,t)&&p(e,t),[m,p]);return!!e&&i.a.createElement(o.a,{when:u(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>l?l(e):e()},{type:"button",text:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:_.b,title:i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>l?l(e):e()},i.a.createElement(d,null,i.a.createElement(r.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,l]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{l(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>l(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return w})),a.d(t,"c",(function(){return f}));var n=a(0),i=a.n(n),l=a(5),r=a(643),c=a(32),o=a(1932),s=a(8),_=a(15),E=a(45),d=a(17),m=a(189),p=a(41);const u=Object(l.c)(m.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var T=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(u,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(_.vb,{color:E.a["blue-3"]}))},b=a(1933),N=a(71),h=a(227);const S=Object(l.c)(N.c)`
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
`,I=Object(l.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,A=Object(l.c)(_.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var O,g=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(h.a),l=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:p.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return i.a.createElement(S,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:l},i.a.createElement(I,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(A,{color:E.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(O||(O={}));const w=Object(l.c)(N.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,f=Object(l.c)(N.g)`
  * {
    line-height: 1.4 !important;
  }
`,v=Object(l.c)(r.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:l,video:r,online:s})=>{let _;switch(t){default:case O.BASIC:_=e;break;case O.CONFIGURED:_=i.a.createElement(f,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!r&&s&&i.a.createElement(T,{video:r}));break;case O.STATUS:_=i.a.createElement(f,{alignItems:"center"},i.a.createElement(v,{variant:l}),i.a.createElement(w,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(c.a,null,a)));break;case O.UNCONFIGURED:_=i.a.createElement(f,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{section:n}),i.a.createElement(N.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(c.a,null,a))),!!r&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{video:r}),i.a.createElement(N.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(c.a,null,a))),!!r&&!s&&i.a.createElement(f,{alignItems:"center"},e))}return _}},1932:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(5),r=a(8),c=a(15),o=a(45),s=a(1936),_=a(189);const E=Object(l.c)(_.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(E,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(c.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(5),r=a(8),c=a(15),o=a(45),s=a(1936),_=a(71),E=a(43);const d=Object(l.c)(_.c)`
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
`,m=Object(l.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,p=Object(l.c)(c.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(r.useDispatch)(),a=Object(r.useSelector)(E.i),l=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:l},i.a.createElement(m,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(p,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return _.d})),a.d(t,"c",(function(){return _.a}));var n=a(0),i=a.n(n),l=a(5),r=a(15),c=a(71);const o=Object(l.c)(c.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(r.g,null)),_=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(17),i=a(41);const l=e=>Object(n.g)({modalType:i.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var i=a(0),l=a.n(i),r=a(5);var c=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...c})=>{const o=a?12:i,s=a?0:n;return l.a.createElement("div",Object.assign({className:Object(r.b)("col-"+o,"offset-"+s,t)},c),e)};var o,s=({children:e="",offset:t=0,size:a=2})=>l.a.createElement("div",{className:Object(r.b)("col-"+a,"offset-"+t)},e),_=a(2),E=a(666),d=a.n(E),m=a(71),p=a(1964),u=a.n(p),T=a(140),b=a.n(T),N=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const h=b.a.bind(u.a);var S=({className:e=null,status:t=o.NEUTRAL,...a})=>l.a.createElement(N.a,Object.assign({},a,{className:h("ubntStatusText","ubntStatusText--"+t,e)})),I=a(254),A=a(1944);const O=Object(r.c)(m.g)`
  border: 1px solid ${I.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,g=Object(r.c)(S)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var w=({state:e,className:t=null,...a})=>l.a.createElement(O,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),l.a.createElement(g,{message:A.b[e],status:o.WARNING})),f=a(322),v=a(82),R=a(8),L=a(45),D=a(70),C=a(20);const P={BORDER_WIDTH:2},x={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},y=({type:e,size:t,width:a,height:n})=>{switch(e){case f.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:l}=x;return{top:l,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function G({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:l,width:c,height:o}){const s=Object(R.useSelector)(f.selectHighlight),[_,E]=Object(D.c)(0),[d,m]=Object(D.c)(!1),p=Object(i.useRef)(null),u=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(r.a)({"&::before":{border:`${P.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:L.a["blue-light-3"],show:d,style:{...y({type:e,size:l,width:c,height:o}),...a}}),[d,e,a,l,c,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>_)E(_+1);else if(p.current&&t===s.id&&s.type===e){window.getComputedStyle(p.current).border,window.getComputedStyle(p.current).boxShadow;let t=p.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:l}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:l}=t.current.getBoundingClientRect();switch(a){case f.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=x,r=l+Object(C.a)(n,"top",a),c=r+i+Object(C.a)(n,"paddingBottom",e)+Object(C.a)(n,"paddingTop",t)+2*P.BORDER_WIDTH;return{bottom:c,height:c-r,top:r}}}})({height:o,highlightRef:p,type:e,highlightStyle:a}),{bottom:r,height:c,top:s}=n.getBoundingClientRect(),_=t>r,E=i>c,d=15;l<s||E?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+l-d}):_&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-r+d})}m(!0)}},[o,_]),Object(i.useEffect)(()=>{d||s.id!==t||E(e=>e+1),d&&s.id!==t&&m(!1)},[s.id,d]),{highlightClassName:u,highlightRef:p}}const j=Object(r.c)(d.a)`
  color: ${v.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,W=Object(r.c)(d.a)`
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
`;var B=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:c=!1,highlightDelay:o=null,highlightStyle:s=null,htmlFor:E=null,offset:d=0,size:m=5,useHtml:p=!1})=>{const{highlightClassName:u,highlightRef:T}=G({type:f.SearchHighlightType.FIELD,forId:E,highlightStyle:s,highlightDelay:o,size:m}),b=!(!n&&!a),N={["col-"+m]:!0,["offset-"+d]:d>0},h=p?_.b:_.c;return l.a.createElement("div",{className:Object(r.b)(N,M,u),ref:T},l.a.createElement("div",{className:"mb-1"},l.a.createElement(W,{className:"settingsGridLabel",htmlFor:E,primary:!0},c?e:l.a.createElement(_.c,{id:e})),t&&l.a.createElement(w,{state:t})),b&&l.a.createElement("div",null,l.a.createElement(j,{className:"settingsGridDescription",htmlFor:E,secondary:!0},n?l.a.createElement(h,{id:n,values:i}):a)))};const F=r.a`
  max-width: 960px;
`,k=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:c=!1})=>{const o=n?4:i;return l.a.createElement("div",{className:Object(r.b)("row","mt-"+o,c?null:F,t),ref:a},e)};var U=l.a.forwardRef((e,t)=>l.a.createElement(k,Object.assign({forwardedRef:t},e)));var V=e=>l.a.createElement("div",{className:"mt-2 mb-6"},l.a.createElement(N.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(r.c)("div")`
  flex: 0 1 480px;
`,$=Object(r.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:c=null})=>{const o=I.b.sectionColors.common;return l.a.createElement(U,{className:t,marginTop:0},l.a.createElement(H,null,l.a.createElement($,{className:Object(r.b)("mt-8","type-larger"),style:{color:o}},l.a.createElement(_.c,{id:e})),a&&l.a.createElement(N.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(r.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,q=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>l.a.createElement(z,{className:Object(r.b)("container","px-8",t),noDivider:n},l.a.createElement("div",{className:Object(r.b)({"pb-8":!a})},e));q.Content=c,q.Icon=s,q.Label=B,q.Row=U,q.SectionHeader=V,q.Subheader=Y;var X=a(284);const K=Object(r.c)(X.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Q=e=>l.a.createElement(K,Object.assign({},e)),J=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(R.useSelector)(Z.C);return e>0?l.a.createElement(ee.a,{alignItems:"center"},l.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",l.a.createElement(_.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):l.a.createElement(_.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"a",(function(){return L}));var n=a(0),i=a.n(n),l=a(5),r=a(2),c=a(44),o=a(2847),s=a(2658),_=a(1929),E=a(783),d=a(71),m=a(1940),p=a(15),u=a(32),T=a(42),b=a(1847),N=a(782),h=a(1930);const S=l.a`
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
`;var I=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:l,...r})=>{const c=Object(h.a)(),o=Object(N.a)(l),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!o||c,in:t||!o||c,timeout:e,classNames:S,mountOnEnter:!0},r),a)),[a,t,o,c,e,r]);return i.a.createElement(i.a.Fragment,null,s)};const A=l.a`
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
`;var O=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:l,...r})=>{const c=Object(h.a)(),o=Object(N.a)(l),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!o||c,in:t||!o||c,timeout:e,classNames:A,mountOnEnter:!0},r),a)),[a,t,o,c,e,r]);return i.a.createElement(i.a.Fragment,null,s)};const g=Object(l.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,w=Object(l.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,f=Object(l.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,v=Object(l.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,R=Object(l.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var L=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:l,ignoredPaths:r})=>{const{motif:c}=Object(T.a)();return i.a.createElement(O,{ignoredPaths:r},i.a.createElement(w,{flex:"none",height:"65px"},i.a.createElement(I,{ignoredPaths:r},i.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(g,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(v,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:c},i.a.createElement(p.f,{size:"original"}))),i.a.createElement(f,null,i.a.createElement(R,{weight:"bold"},e.component)),i.a.createElement(g,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!l&&i.a.createElement(v,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(p.y,{size:"original"})))))))};const D=Object(l.c)(d.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,C=Object(l.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,P=Object(l.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,x=Object(l.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,y=Object(l.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,G=Object(l.c)(d.k)`
  height: 100%;
  width: 100%;
`;var j=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:l,isView:o,showBack:E,title:p,unsavedChangesModalIgnoredPaths:u,onEscClicked:T,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:N=!1,customFooterButtons:h,hidddenHeader:S,...I})=>i.a.createElement(c.c,Object.assign({enableReinitialize:!0},I),({dirty:l,handleReset:c,handleSubmit:I,isSubmitting:A})=>i.a.createElement(C,{autoComplete:"off",onSubmit:I},i.a.createElement(G,{vertical:!0},!S&&i.a.createElement(L,{goBack:a,hideClose:n,showBack:E,title:p,onEscClicked:T,ignoredPaths:u}),i.a.createElement(m.a,{ignoredPaths:u},i.a.createElement(y,{flex:"1"},i.a.createElement(D,{flex:"none",flexDirection:"column"},e))),!t&&!o&&i.a.createElement(_.a,{ignoredPaths:u,when:l&&!A}),(!o||N)&&i.a.createElement(x,{active:l||N},i.a.createElement(d.g,{justifyContent:h?"space-between":"flex-end",width:"100%",alignItems:"center"},h&&i.a.createElement(P,null,h(A)),!o&&i.a.createElement(d.g,null,i.a.createElement(s.a,{disabled:!l||A,type:"button",variant:"default",onClick:c},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!l||A,type:"submit",variant:"primary"},i.a.createElement(r.c,{id:b}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(1847),r=a(5),c=a(782),o=a(1930);const s=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,..._})=>{const E=Object(o.a)(),d=Object(c.a)(a),m=Object(n.useMemo)(()=>i.a.Children.map(r,a=>null===a?a:i.a.createElement(l.a,Object.assign({appear:t||!d||E,in:t||!d||E,timeout:e,classNames:s,mountOnEnter:!0},_),a)),[r,t,d,E,e,_]);return i.a.createElement(i.a.Fragment,null,m)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1947:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(1847),r=a(5);const c=(e,t)=>r.a`
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
`;t.a=i.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:r="0 0 32px",wrap:o=!1,children:s,..._})=>{const E=Object(n.useMemo)(()=>i.a.Children.map(s,(n,r)=>i.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,void 0),mountOnEnter:!0},_),null===n?i.a.createElement("div",null):n)),[s,a,t,_,e]);return o?i.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,r),mountOnEnter:!0},_),i.a.createElement("div",null,s)):i.a.createElement(i.a.Fragment,null,E)})},1949:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchPortForwardRules",(function(){return c})),a.d(t,"fetchPortForwardRule",(function(){return o})),a.d(t,"savePortForwardRule",(function(){return s})),a.d(t,"removePortForwardRule",(function(){return _})),a.d(t,"MODEL",(function(){return i})),a.d(t,"PATH",(function(){return l})),a.d(t,"selectPortForwardRules",(function(){return m})),a.d(t,"selectPortForwardData",(function(){return p})),a.d(t,"selectPortForwardRecord",(function(){return u})),a.d(t,"PortForwardInterface",(function(){return T}));var n=a(6),i="portforward",l="/api/s/{site}/rest/".concat(i),r=a(28);const c=(e={},t={})=>Object(n.q)(i,l,e,{idField:"_id",...t}),o=e=>Object(n.t)(i,l,e),s=e=>{const t=Object(r.a)("SETTINGS_GATEWAY_PORT_FORWARD_CREATE_ERROR","SETTINGS_GATEWAY_PORT_FORWARD_CREATE_SUCCESS"),{_id:a}=e;return a?Object(n.C)(i,a,`${l}/${a}`,e,{},t):Object(n.i)(i,l,e,{},t)},_=({_id:e,name:t})=>Object(n.n)(i,e,`${l}/${e}`,{},Object(r.a)("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_FAILURE_TOAST","SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DELETE_SUCCESS_TOAST",{name:t}));var E=a(20),d=a(4);const m=Object(n.A)(c()),p=Object(d.a)(m,r.c),u=e=>t=>{const a=Object(n.w)(o(e),t.models);return Object(E.a)(a,"data",{})};var T;!function(e){e.WAN="wan",e.WAN2="wan2",e.BOTH="both"}(T||(T={}))},1951:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchDhcpOptions",(function(){return d})),a.d(t,"saveDhcpOption",(function(){return m})),a.d(t,"removeDhcpOption",(function(){return p})),a.d(t,"DHCP_OPTIONS",(function(){return l})),a.d(t,"typeOptions",(function(){return r})),a.d(t,"integerOptions",(function(){return c})),a.d(t,"DHCP_USER_OPTION_PREFIX",(function(){return o})),a.d(t,"DHCP_CODE",(function(){return s})),a.d(t,"MODEL",(function(){return _})),a.d(t,"PATH",(function(){return E})),a.d(t,"selectDhcpOptions",(function(){return T})),a.d(t,"selectDhcpOptionsData",(function(){return b})),a.d(t,"selectDhcpOptionsCodes",(function(){return N})),a.d(t,"DhcpOptionTypes",(function(){return h})),a.d(t,"getDhcpOptionTypeDisplayText",(function(){return S}));var n=a(28),i=a(6);const l={BOOLEAN:"boolean",HEX_ARRAY:"hexarray",INTEGER:"integer",IP_ADDRESS:"ipaddress",MAC_ADDRESS:"macaddress",TEXT:"text"},r=[{value:l.BOOLEAN,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN"},{value:l.HEX_ARRAY,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY"},{value:l.INTEGER,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INTEGER"},{value:l.IP_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS"},{value:l.MAC_ADDRESS,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS"},{value:l.TEXT,label:"SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT"}],c=[8,16,32].map(e=>({value:e,label:e})),o="dhcpd_user_option_",s={MIN:7,MAX:254,DISALLOWED_CODES:[15,42,43,44,51,66,67,252],SIGNED_EXTENTS:{8:{min:-128,max:127},16:{min:-32768,max:32767},32:{min:2**32/-2,max:2**32/2-1}},UNSIGNED_EXTENTS:{8:{min:0,max:255},16:{min:0,max:65535},32:{min:0,max:2**32-1}}},_="dhcpOptions",E="/api/s/{site}/rest/dhcpoption",d=(e={})=>Object(i.q)(_,E,void 0,{...e,idField:"_id"}),m=e=>{const{_id:t}=e;return t?Object(i.C)(_,t,`${E}/${t}`,e):Object(i.i)(_,E,e)},p=({_id:e,name:t})=>Object(i.n)(_,e,`${E}/${e}`,{},Object(n.a)("SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_ERROR","SETTINGS_GATEWAY_DHCP_OPTION_REMOVE_SUCCESS",{name:t}));var u=a(4);const T=Object(i.A)(d()),b=Object(u.a)(T,n.c),N=Object(u.a)(b,e=>e.map(({code:e})=>e));var h;!function(e){e.BOOLEAN="boolean",e.HEX_ARRAY="hexarray",e.INTEGER="integer",e.IP_ADDRESS="ipaddress",e.MAC_ADDRESS="macaddress",e.TEXT="text"}(h||(h={}));const S=(e,t,a,n)=>{let i;switch(a){case h.BOOLEAN:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_BOOLEAN";break;case h.HEX_ARRAY:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_HEX_ARRAY";break;case h.INTEGER:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_INT";break;case h.IP_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_IPADDRESS";break;case h.MAC_ADDRESS:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_MAC_ADDRESS";break;case h.TEXT:i="SETTINGS_GATEWAY_DHCP_TYPE_OPTION_TEXT";break;default:i="COMMON_UNKNOWN"}const l=e.formatMessage({id:i});return"integer"!==a?l:e.formatMessage({id:t?"SETTINGS_GATEWAY_DHCP_LABEL_INT_SIGNED":"SETTINGS_GATEWAY_DHCP_LABEL_INT_UNSIGNED"},{width:n})}},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1965:function(e,t,a){"use strict";var n=a(1953);const i=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=i},2005:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a(16),i=function(e,t){var a=t.successMessage,n=t.failureMessage;if((a||n)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},l=function(e){return function(t){return function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,c){var o=c.props||t;i(o,l);var s=o.createToast,_="function"==typeof l?l(r):l,E=_.msgValues,d=_.successMessage,m=_.failureMessage;a(r,o,c).then((function(){return d&&s({icon:n.a.success,message:d,values:E}),e(c,t)})).catch((function(e){m&&s({icon:n.a.danger,message:m,values:E,errorMessage:e.msg,errorValues:e}),c.setSubmitting(!1)}))}}}},r=l((function(e){return e.setStatus({isSubmitted:!0})}))(),c=l((function(e){return e.setStatus({isSubmitted:!0})})),o=(l((function(e){return e.props.onClose()}))(),l((function(e,t){return t.onBack()})))},2037:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a(255),i=a(1953);const l=Object.values(i.a),r=e=>{const t=Math.min(l.length-1,Object(n.f)(e,1e3));return{value:Math.abs(e/1e3**t),unit:l[t]}},c=(e,t)=>{switch(t){case i.a.G:return Math.round(1e6*e);case i.a.M:return 1e3*e;case i.a.K:default:return e}},o=({download_kilobits_per_second:e,upload_kilobits_per_second:t})=>({download:r(e),upload:r(t)})},2054:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return d}));var n=a(364),i=a(1743),l=a(34),r=a(1951),c=a(2037);const o=e=>(e||[]).reduce((e,{wan_networkgroup:t=""})=>(t.toUpperCase().startsWith("WAN")&&e.push(t),e),[]),s=e=>{var t,a;const n=["cidr_prefix","gateway_ip"];return e.wan_smartq_enabled||(n.push("wan_smartq_up_rate"),n.push("wan_smartq_down_rate")),null!==(t=e.wan_dns1)&&void 0!==t||n.push("wan_dns1"),null!==(a=e.wan_dns2)&&void 0!==a||n.push("wan_dns2"),e.wan_type!==l.IpV4ConnectionType.PPPOE&&(n.push("wan_username"),n.push("x_wan_password")),e.wan_type!==l.IpV4ConnectionType.STATIC&&(n.push("wan_ip"),n.push("wan_netmask"),n.push("wan_gateway")),e.wan_provider_capabilities&&(e.wan_provider_capabilities.hasAtleastOneDefined?e.wan_provider_capabilities=(e=>Object(i.a)({...e,download_kilobits_per_second:Object(c.a)(e.download_kilobits_per_second,e.download_unit),upload_kilobits_per_second:Object(c.a)(e.upload_kilobits_per_second,e.upload_unit)},"download_unit","upload_unit","hasAtleastOneDefined"))(e.wan_provider_capabilities):delete e.wan_provider_capabilities),Object(i.a)(e,...n)},_=e=>{const t=["cidr_prefix","gateway_ip","dhcp_mode","contentFilter"],a=(e=>Object.entries(e).filter(([e,t])=>!!e.startsWith(r.DHCP_USER_OPTION_PREFIX)&&[void 0,null,""].some(e=>e===t)).map(([e])=>e))(e),{ipv6_interface_type:n,ipv6_pd_prefixid:c,vlan:o}=e;"none"===n&&t.push("ipv6_ra_priority","ipv6_ra_valid_lifetime","ipv6_ra_preferred_lifetime","dhcpdv6_enabled","dhcpdv6_start","dhcpdv6_stop","dhcpdv6_leasetime","dhcpdv6_dns_auto","dhcpdv6_dns_1","dhcpdv6_dns_2","dhcpdv6_dns_3","dhcpdv6_dns_4"),"static"!==n&&t.push("ipv6_subnet"),"pd"!==n&&t.push("ipv6_pd_interface","ipv6_pd_prefixid","ipv6_pd_start","ipv6_pd_stop");const s=e.nat_outbound_ip_addresses.filter(e=>e.ip_address);s.length||t.push("nat_outbound_ip_addresses");const _=Object(i.a)({...e,vlan_enabled:!!o,ipv6_pd_prefixid:null!=c?c:"",nat_outbound_ip_addresses:s},...t,...a),{gateway_device:E,gateway_type:d}=_;return E&&d!==l.NetworkGatewayType.default||(_.gateway_type=l.NetworkGatewayType.default,delete _.gateway_device),_},E=e=>{const t=_(e),a=[...l.vpnSpecificFields.client,...l.vpnSpecificFields.server,...l.vpnSpecificFields.siteToSite[l.SiteToSiteVpnType.AUTO_IPSEC_VTI],...l.vpnSpecificFields.siteToSite[l.SiteToSiteVpnType.MANUAL_IPSEC],...l.vpnSpecificFields.siteToSite[l.SiteToSiteVpnType.OPEN_VPN]].filter(e=>!l.networkAndVpnSharedKeys.includes(e));return Object(i.a)(t,...a)},d=({...e},t=!1)=>{if(t)return(e=>{const t=E(e);return t.l2tp_interface=e.l2tp_interface,t.l2tp_local_wan_ip=e.l2tp_local_wan_ip,t.radiusprofile_id=e.radiusprofile_id,t.vpn_type=l.ServerVpnType.L2TP_SERVER,t.x_ipsec_pre_shared_key=e.x_ipsec_pre_shared_key,t})(e);switch(e.purpose){case l.NetworkPurpose.VLAN_ONLY:return(e=>({vlan_enabled:!0,...Object(n.a)(e,["_id","site_id","purpose","name","vlan","enabled","is_nat","igmp_snooping","dhcpguard_enabled","dhcpd_ip_1","dhcpd_ip_2","dhcpd_ip_3"])}))(e);case l.NetworkPurpose.WAN:return s(e);case l.NetworkPurpose.REMOTE_USER_VPN:return(e=>{const t=_(e),a=Object(n.a)(t,...l.vpnPickKeys.server);return a.vpn_type!==l.ServerVpnType.L2TP_SERVER&&(delete a.l2tp_interface,delete a.l2tp_local_wan_ip,delete a.x_ipsec_pre_shared_key),a})(e);case l.NetworkPurpose.SITE_VPN:return(e=>{const t=_(e);return Object(n.a)({...t,ipsec_dh_group:Number(e.ipsec_dh_group),ipsec_ike_dh_group:Number(e.ipsec_ike_dh_group),ipsec_esp_dh_group:Number(e.ipsec_esp_dh_group),openvpn_mode:"site-to-site"},...l.vpnPickKeys.siteToSite[e.vpn_type])})(e);case l.NetworkPurpose.VPN_CLIENT:return(e=>{const t=_(e);return Object(n.a)(t,...l.vpnPickKeys.client)})(e);default:return E(e)}}},2103:function(e,t,a){"use strict";a.d(t,"c",(function(){return _})),a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return m}));var n=a(0),i=a.n(n),l=a(2),r=a(30),c=a(105),o=a(2130);const s=()=>r.a.string().label("SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL").matches(c.j,i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"})),_=(e,t)=>{const a={arrayFieldName:"wan_ip_aliases",stringFieldName:"wan_ip_alias",errorMessage:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_PLACEHOLDER_SUBNET_UNIQUE"})};return r.a.object().shape({editActive:r.a.bool(),...t===o.a.ADD_IP_RANGE?{new_wan_ip_alias_start:s().isIPUnique({formValues:null,...a}).CIDRMaskMatch().CIDRCorrectRange(),new_wan_ip_alias_stop:s().isIPUnique({formValues:null,...a}).CIDRMaskMatch().CIDRCorrectRange()}:{new_wan_ip_alias:s().isIPUnique({formValues:null,...a})},wan_ip_aliases:r.a.array().of(r.a.object().shape({wan_ip_alias:s().isIPUnique({formValues:e,...a}).required()}))})},E={DOWNLOAD:{MIN:1},UPLOAD:{MIN:1}},d=[{value:"failover-only",label:"SETTINGS_WAN_VALUES_LOAD_BALANCE_FAILOVER"},{value:"weighted",label:"SETTINGS_WAN_VALUES_LOAD_BALANCE_WEIGHTED"}],m=[{value:"",label:"None"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"}]},2119:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return v})),a.d(t,"c",(function(){return R})),a.d(t,"d",(function(){return L}));var n=a(0),i=a.n(n),l=a(2),r=a(558),c=a(105),o=a(30),s=a(86),_=a(100),E=a(2103);var d=e=>_.a.object().shape({name:o.e,...e&&{mac_override_enabled:_.a.boolean().label("SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS_CLONE").required(),mac_override:_.a.string().when("mac_override_enabled",{is:!0,then:_.a.string().label("SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS").matches(c.p,i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_MAC"})).unicastMAC().required()})},wan_type_v6:_.a.string(),wan_type:_.a.string(),wan_netmask:_.a.string().when("wan_type",{is:s.d.STATIC,then:_.a.string().label("SETTINGS_INTERNET_WAN_LABEL_SUBNET_MASK").matches(c.i,i.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_SUBNET"})).required()}),wan_ip:_.a.string().when("wan_type",{is:s.d.STATIC,then:o.b.clone().label("SETTINGS_INTERNET_WAN_LABEL_IP_ADDRESS").required()}),wan_gateway:_.a.string().when("wan_type",{is:s.d.STATIC,then:o.b.clone().label("SETTINGS_INTERNET_WAN_LABEL_ROUTER").required()}),wan_gateway_v6:_.a.string().when("wan_type_v6",{is:s.e.STATIC,then:o.d.clone().label("SETTINGS_INTERNET_WAN_LABEL_ROUTER").required()}),wan_dhcpv6_pd_size:_.a.number().when("wan_type_v6",{is:"dhcpv6",then:_.a.number().label("SETTINGS_INTERNET_WAN_LABEL_IPV6_DHCP_PD_SIZE").required().min(48).max(64)}),wan_ipv6:_.a.string().when("wan_type_v6",{is:"static",then:o.d.clone().label("SETTINGS_INTERNET_WAN_LABEL_IPV6_ADDRESS").required()}),wan_prefixlen:_.a.number().when("wan_type_v6",{is:"static",then:_.a.number().label("SETTINGS_INTERNET_WAN_LABEL_PREFIX_LENGTH").required()}),wan_vlan_enabled:_.a.boolean().label("SETTINGS_WIFI_ADVANCED_SPECIFY_VLAN_LABEL").required(),wan_vlan:_.a.number().when("wan_vlan_enabled",{is:!0,then:_.a.number().label("SETTINGS_INTERNET_WAN_LABEL_VLAN_ID").min(0).max(r.a.MAX_VLAN)}),wan_load_balance_type:_.a.string(),wan_load_balance_weight:_.a.number().when("wan_load_balance_type",{is:"weighted",then:_.a.number().label("SETTINGS_INTERNET_WAN_LABEL_LOAD_BALANCING_WEIGHT").required().min(1).max(100)}),wan_smartq_enabled:_.a.bool(),wan_smartq_up_rate:_.a.string().when("wan_smartq_enabled",{is:!0,then:_.a.string().required(i.a.createElement(l.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_UP_RATE_REQUIRED"}))}),wan_smartq_down_rate:_.a.string().when("wan_smartq_enabled",{is:!0,then:_.a.string().required(i.a.createElement(l.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_DOWN_RATE_REQUIRED"}))}),wan_dns1:o.b,wan_dns2:o.b,wan_username:_.a.string().when("wan_type",{is:s.d.PPPOE,then:_.a.string().label("SETTINGS_INTERNET_WAN_LABEL_USERNAME").required()}),x_wan_password:_.a.string().when("wan_type",{is:s.d.PPPOE,then:_.a.string().label("SETTINGS_INTERNET_WAN_LABEL_PASSWORD").required()}),wan_provider_capabilities:_.a.object().shape({hasAtleastOneDefined:_.a.bool(),download_kilobits_per_second:_.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL").when("hasAtleastOneDefined",{is:!0,then:_.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL").min(E.a.DOWNLOAD.MIN).required()}),upload_kilobits_per_second:_.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL").when("hasAtleastOneDefined",{is:!0,then:_.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL").min(E.a.UPLOAD.MIN).required()})})}),m=a(643),p=a(32),u=a(445),T=a(5),b=a(255),N=a(117),h=a(21),S=a(61),I=a(59);const A=Object(T.c)(N.c)`
  margin: 0 ${({theme:e})=>e.space[2]}px;
`,O=Object(T.c)(m.a)`
  margin-right: ${({theme:e})=>e.space[3]}px;
`,g=Object(T.c)(p.a)`
  display: flex;
  flex-direction: row;
`,w=(e,t,a)=>e>=100?i.a.createElement(u.a,{portal:!0,width:150,message:i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,null,t),i.a.createElement(p.a,{color:"secondary"},a))},i.a.createElement(p.a,{truncate:!0,color:"danger"},"100%")):e.toFixed(0)+"%",f=[{id:"wan-networks-table-name",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_NAME"}),renderCell:({name:e,isWanPortUp:t})=>i.a.createElement(h.a,{alignItems:"center",width:"100%"},i.a.createElement(O,{variant:t?"success":"neutral"}),i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e)),sortable:!0,compare:Object(S.a)(({name:e})=>e.toLowerCase()),minWidth:140,maxWidth:140},{id:"wan-networks-table-ip",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_IP"}),renderCell:({ip:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({ip:e})=>e),minWidth:120,maxWidth:130},{id:"wan-networks-table-isp",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_ISP"}),renderCell:({isp:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({isp:e})=>e.toLowerCase()),minWidth:140,maxWidth:160},{id:"wan-networks-table-location",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_LOCATION"}),renderCell:({location:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({location:e})=>e.toLowerCase()),minWidth:100,maxWidth:120},{id:"wan-networks-table-uptime",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_UPTIME"}),renderCell:({uptime:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({uptime:e})=>e),minWidth:80,maxWidth:100},{id:"wan-networks-table-peakUse",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_PEAK"}),renderCell:({peakUseDownload:e,peakUseUpload:t})=>{if(-1===Math.sign(e)&&-1===Math.sign(t))return i.a.createElement(p.a,{color:"tertiary"},i.a.createElement(l.c,{id:"COMMON_HYPHEN"}));const a=-1!==Math.sign(e)?w(e,i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_DOWNLOAD_TITLE"}),i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_MESSAGE"})):"-",n=-1!==Math.sign(t)?w(t,i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_UPLOAD_TITLE"}),i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_MESSAGE"})):"-";return i.a.createElement(g,{truncate:!0,color:"tertiary"},n,"/",a)},sortable:!0,compare:Object(S.a)(({peakUse:e})=>e),minWidth:170}],v=[{id:"wan-backup-table-name",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_NAME"}),renderCell:({name:e,device:t})=>t?i.a.createElement(h.a,{alignItems:"center",width:"100%"},i.a.createElement(m.a,{variant:Object(I.H)(t)}),i.a.createElement(A,{device:t}),i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e)):e,sortable:!0,compare:Object(S.a)(({name:e})=>e.toLowerCase()),minWidth:140,maxWidth:140},{id:"wan-backup-table-ip",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_IP"}),renderCell:({ip:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({ip:e})=>e),minWidth:120,maxWidth:130},{id:"wan-backup-table-isp",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_ISP"}),renderCell:({isp:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({isp:e})=>e.toLowerCase()),minWidth:140,maxWidth:160},{id:"wan-backup-table-location",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_LOCATION"}),renderCell:({location:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({location:e})=>e.toLowerCase()),minWidth:100,maxWidth:120},{id:"wan-backup-table-uptime",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_UPTIME"}),renderCell:({uptime:e})=>i.a.createElement(p.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(S.a)(({uptime:e})=>e.toLowerCase()),minWidth:80,maxWidth:100},{id:"wan-backup-table-dataUsage",label:i.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_DATA_USAGE"}),renderCell:({dataRemaining:e})=>{const{softLimitBytes:t,usedBytes:a}=e,n=Object(b.c)(t,"bytes","JEDEC"),l=Object(b.c)(a,"bytes","JEDEC"),r=`${l}/${n}`;return i.a.createElement(p.a,{truncate:!0,color:"tertiary"},0===t?l:r)},sortable:!0,compare:Object(S.a)(({dataRemaining:e})=>e),minWidth:170}];var R=[{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_DHCP_V4",value:s.d.DHCP},{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_STATIC_IP",value:s.d.STATIC},{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_PPPOE",value:s.d.PPPOE}],L=[{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_DISABLED",value:s.e.DISABLED},{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_DHCP",value:s.e.DHCPV6},{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_STATIC_IP",value:s.e.STATIC}]},2130:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.ADD_IP="add_ip",e.ADD_IP_RANGE="add_ip_range"}(n||(n={}))}}]);