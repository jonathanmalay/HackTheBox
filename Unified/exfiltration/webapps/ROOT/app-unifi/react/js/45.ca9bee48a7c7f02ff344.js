(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[45],{1806:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(36),l=a(8),c=a(70),o=a(6),s=a(34),d=a(229),m=a(669),_=a(2),p=a(20),E=a(63),u=a(215),O=a(18),b=a(1938),g=a(2005),S=a(663),T=a(44),f=a(1739),I=a(1818),h=a(5),v=a(1914),C=a(1736),N=a(1737),L=a(62),R=a(4),x=a(3),F=a(167),P=a(138),w=a.n(P),D=a(94),j=a.n(D),M=a(1),k=a.n(M),A=a(32),y=a(308),G=a(2477),W=Object(h.c)("div",{target:"eez2ge30"})("align-self:flex-start;width:100%;"),V=Object(h.c)(G.a,{shouldForwardProp:function(e){return"visible"!==e},target:"eez2ge31"})("align-self:center;margin-left:-36px;margin-right:16px;text-align:left;visibility:",(function(e){return e.visible?"visible":"hidden"}),";"),H=Object(h.c)("div",{shouldForwardProp:function(e){return!["newGrid","dispatch"].includes(e)},target:"eez2ge32"})("display:flex;justify-content:flex-end;position:relative;width:",(function(e){return e.newGrid?"100%":"initial"}),";");function U(e){var t=e.cap,a=e.children,n=e.childrenWrapperClassName,r=e.tooltipClassName,l=e.unsupportedDevices,c=e.newGrid,o=j()(e,["cap","children","childrenWrapperClassName","tooltipClassName","unsupportedDevices","newGrid"]),s=!!y.f[t];return i.a.createElement(H,w()({newGrid:c},o),i.a.createElement(V,{className:r,description:"SETTINGS_UNSUPPORTED_DEVICE_CAP_WARNING_DESCRIPTION",descriptionValues:{cap:i.a.createElement(A.a,{motif:"dark"},s&&i.a.createElement(_.c,{id:"COMMON_SELECTED"})," ",i.a.createElement(A.a,{motif:"dark",weight:"bold"},i.a.createElement(_.c,{id:"COMMON_DEVICE_CAP_".concat(s?"PORTSPEED":t)})))},devices:l,position:c?"right":"left",title:"SETTINGS_UNSUPPORTED_DEVICE_CAP_WARNING_TITLE",visible:l.length>0,width:20}),i.a.createElement(W,{className:n},a))}U.propTypes={cap:k.a.string,children:k.a.node,childrenWrapperClassName:k.a.string,tooltipClassName:k.a.string,unsupportedDevices:k.a.array,newGrid:k.a.bool},U.defaultProps={cap:null,children:null,childrenWrapperClassName:null,tooltipClassName:null,unsupportedDevices:[],newGrid:!1};var B=Object(R.a)(x.selectDevicesData,(function(e,t){return t.cap}),(function(e,t){return e.filter((function(e){return e.adopted&&!Object(F.n)(e,t)&&!Object(F.h)(e,t)}))})),$=Object(l.connect)((function(e,t){return{unsupportedDevices:B(e,t)}}))(U);const z=[d.Dot1xCtrls.AUTO,d.Dot1xCtrls.FORCE_AUTHORIZED,d.Dot1xCtrls.FORCE_UNAUTHORIZED,d.Dot1xCtrls.MAC_BASED,d.Dot1xCtrls.MULTI_HOST].map(e=>({label:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_DOT1X_CTRL_OPTION_"+e.toUpperCase(),value:e})),K=Object(h.c)(v.a)`
  flex: 0 0 40px;
  padding-left: ${({theme:e})=>e.spacing["spacing-m"]};
`;var X=({isView:e})=>{const{values:{dot1x_ctrl:t}}=Object(T.e)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"dot1x_ctrl",alignWith:"dropdown",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_DOT1X_CTRL_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement($,{cap:"SWITCH_CAP_DOT1X",newGrid:!0},i.a.createElement(L.Field,{name:"dot1x_ctrl",options:z,type:"dropdown",full:!0,translateOptions:!0,disabled:e})))),t===d.Dot1xCtrls.MAC_BASED&&i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"dot1x_idle_timeout",alignWith:"input",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_IDLE_TIMEOUT_LABEL"})}),i.a.createElement(N.a,{column:!0},i.a.createElement(L.Field,{disabled:e,name:"dot1x_idle_timeout",type:"number",min:d.DOT1X_IDLE_TIMEOUT.MIN,max:d.DOT1X_IDLE_TIMEOUT.MAX,full:!0})),i.a.createElement(K,{alignWith:"input",htmlFor:"dot1x_idle_timeout",label:i.a.createElement(_.c,{id:"COMMON_UNIT_SECONDS"})})))},Y=a(1947),q=a(1965);const J=h.a`
  white-space: nowrap;
`,Z=Object(h.c)("div")`
  display: inline-block;
  margin-right: 8px;
  vertical-align: -6px;
  width: calc(67% - 8px);
`,Q=Object(h.c)("div")`
  display: inline-block;
  vertical-align: middle;
  width: 33%;
`,ee=Object(h.c)("div")`
  margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
`;var te=Object(T.d)(({formik:{values:e},isView:t})=>i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"egress_rate_limit_kbps_enabled",alignWith:"toggle",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_EGRESS_RATE_LIMIT_LABEL"})}),i.a.createElement(N.a,{column:!0},i.a.createElement($,{cap:"SWITCH_CAP_EGRESS_RATE_LIMIT",newGrid:!0},i.a.createElement(L.Field,{name:"egress_rate_limit_kbps_enabled",type:"checkbox",disabled:t}),i.a.createElement(Y.a,{in:e.egress_rate_limit_kbps_enabled},i.a.createElement(ee,null,i.a.createElement(Z,null,i.a.createElement(L.Field,{full:!0,label:"COMMON_UNIT_BPS",labelValues:{prefix:e.egressRateLimitUnit},name:"egress_rate_limit_kbps",type:"number",validationMessageClassName:J,disabled:t})),i.a.createElement(Q,null,i.a.createElement(L.Field,{name:"egressRateLimitUnit",options:q.a,translateOptions:!0,type:"dropdown",disabled:t,full:!0}))))))));var ae=({isView:e})=>i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"isolation",alignWith:"toggle",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_ISOLATION_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement($,{cap:"SWITCH_CAP_PORT_ISOLATION",newGrid:!0},i.a.createElement(L.Field,{name:"isolation",type:"checkbox",disabled:e})))),ne=a(525);var ie=Object(T.d)(({formik:{errors:e,setFieldTouched:t,submitCount:a,touched:n,values:r},isView:l})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{className:e.lldpmed_enabled?ne.c:null},i.a.createElement(v.a,{htmlFor:"lldpmed_enabled",alignWith:"toggle",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_LLDP_MED_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement($,{cap:"SWITCH_CAP_LLDP_MED",newGrid:!0},i.a.createElement(L.Field,{afterChange:()=>t("lldpmed_enabled"),name:"lldpmed_enabled",type:"checkbox",disabled:l}),e.lldpmed_enabled&&i.a.createElement(L.FormikValidationMessage,{errors:e,field:"lldpmed_enabled",submitCount:a,touched:n})))),i.a.createElement(Y.a,{in:r.lldpmed_enabled},i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"lldpmed_notify_enabled",alignWith:"toggle",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_LLDPMED_NOTIFY_ENABLED_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement(L.Field,{name:"lldpmed_notify_enabled",type:"checkbox",disabled:l}))))));var re=({isView:e})=>i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"name",alignWith:"input",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_NAME_LABEL"})}),i.a.createElement(N.a,{column:!0},i.a.createElement(L.Field,{autoFocus:!e,full:!0,name:"name",disabled:e}))),le=a(108),ce=a.n(le),oe=a(179),se=a.n(oe);function de(e,t){return t.intl}var me=Object(R.a)(de,s.selectNativeNetworks,(function(e,t){return[{label:e.formatMessage({id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_NATIVE_NETWORKCONF_ID_OPTION_NONE"}),value:""}].concat(se()(t.map((function(e){var t=e._id,a=e.name,n=e.vlan;return{label:Object(s.formatNetworkNameWithVlan)({name:a,vlan:n}),value:t}}))))})),_e=Object(R.a)(de,(function(e){return Object.entries(m.c).sort((function(e,t){var a=ce()(e,2)[1],n=ce()(t,2)[1];return n.autoneg-a.autoneg||n.speed-a.speed||n.full_duplex-a.full_duplex})).map((function(t){var a=ce()(t,2),n=a[0],i=a[1],r=i.autoneg,l=i.full_duplex,c=i.speed,o=i.translation;return{label:r?o:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_PORT_SPEED_OPTION_SPEED",value:n,values:r?void 0:{duplex:l?"F":"H",speed:c<1e3?c:c/1e3,unit:e.formatMessage({id:"COMMON_UNIT_BPS"},{prefix:c<1e3?"M":"G"})}}}))})),pe=Object(R.a)((function(e,t){return t.formik}),de,s.selectNativeNetworks,(function(e,t){return t.savedTaggedNetworkConfIds}),(function(e,t,a,n){var i=e.values.native_networkconf_id,r=a.filter((function(e){return e._id!==i})),l=r.length===n.length;return[{label:t.formatMessage({id:l?"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_OPTION_DESELECT_ALL":"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_OPTION_SELECT_ALL"}),value:l?"Deselect All":"Select All"}].concat(se()(r.map((function(e){var t=e._id,a=e.name,n=e.vlan;return{label:Object(s.formatNetworkNameWithVlan)({name:a,vlan:n}),value:t}}))))})),Ee=Object(R.a)(de,s.selectNativeNetworks,(function(e,t){return[{label:e.formatMessage({id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_VOICE_NETWORKCONF_ID_OPTION_NONE"}),value:""}].concat(se()(t.map((function(e){var t=e._id,a=e.name,n=e.vlan;return{label:Object(s.formatNetworkNameWithVlan)({name:a,vlan:n}),value:t}}))))}));var ue=Object(_.f)(({intl:e,isView:t})=>{const a=Object(l.useSelector)(t=>me(t,{intl:e}));return i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"native_networkconf_id",alignWith:"dropdown",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_NATIVE_NETWORKCONF_ID_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement(L.Field,{name:"native_networkconf_id",options:a,type:"dropdown",full:!0,disabled:t})))});const Oe=[m.d.OFF,m.d.PASSIVE_24V,m.d.AUTO,m.d.PASSTHROUGH].map(e=>({label:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_POE_MODE_OPTION_"+(e||"none").toUpperCase(),value:e}));var be=({isView:e})=>i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"poe_mode",alignWith:"dropdown",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_POE_MODE_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement(L.Field,{type:"dropdown",name:"poe_mode",options:Oe,translateOptions:!0,full:!0,disabled:e}))),ge=a(48);var Se=Object(ge.compose)(_.f,T.d)(({formik:{setFieldValue:e,values:t},intl:a,isView:r})=>{const c=Object(l.useSelector)(e=>_e(e,{intl:a}));return Object(n.useEffect)(()=>{e("autoneg",m.c[t.portSpeed].autoneg),e("full_duplex",m.c[t.portSpeed].full_duplex),e("speed",m.c[t.portSpeed].speed)},[e,t.portSpeed]),i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"portSpeed",alignWith:"dropdown",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_PORT_SPEED_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement($,{cap:t.portSpeed,newGrid:!0},i.a.createElement(L.Field,{name:"portSpeed",options:c,translateOptions:!0,type:"dropdown",full:!0,disabled:r}))))}),Te=a(71);const fe=Object(h.c)("div")`
  margin-left: 44px;
  width: 40px;
`,Ie=Object(h.c)("div")`
  padding-top: 36px;
  padding-bottom: 36px;
  margin-top: ${({theme:e})=>e.spacing["spacing-m"]};
  margin-bottom: 36px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,he=Object(h.c)("div")`
  width: 100%;
  margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
`;var ve=Object(T.d)(({formik:{values:e},isView:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Te.g,{alignItems:"center"},i.a.createElement(A.a,{weight:"bold",size:"body"},i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STORMCTRL_LABEL"})),i.a.createElement(fe,null,i.a.createElement($,{cap:"SWITCH_CAP_STORM_CONTROL",newGrid:!0}))),i.a.createElement(Ie,null,["ucast","mcast","bcast"].map(a=>{const n=`SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STORMCTRL_${a.toUpperCase()}_LABEL`,r=`stormctrl_${a}_enabled`,l=`stormctrl_${a}_rate`;return i.a.createElement(C.a,{key:a},i.a.createElement(v.a,{alignWith:"toggleSmall",htmlFor:r,label:i.a.createElement(_.c,{id:n})}),i.a.createElement(N.a,{column:!0},i.a.createElement(L.Field,{name:r,type:"checkbox",disabled:t}),i.a.createElement(he,null,i.a.createElement(Y.a,{in:e[r]},i.a.createElement(L.Field,{full:!0,label:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STORMCTRL_UNIT",name:l,type:"number",disabled:t})))))}))));var Ce=({isView:e})=>i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"stp_port_mode",alignWith:"toggle",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_STP_PORT_MODE_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement($,{cap:"SWITCH_CAP_STP",newGrid:!0},i.a.createElement(L.Field,{name:"stp_port_mode",type:"checkbox",disabled:e})))),Ne=a(1133);const Le="tagged_networkconf_ids";var Re=Object(ge.compose)(_.f,T.d)(({intl:e,formik:t,isView:a})=>{const{setFieldValue:r,values:c}=t,o=Object(l.useSelector)(a=>pe(a,{formik:t,intl:e,savedTaggedNetworkConfIds:c.tagged_networkconf_ids}));Object(n.useEffect)(()=>{c.tagged_networkconf_ids.includes(c.native_networkconf_id)&&r(Le,c.tagged_networkconf_ids.filter(e=>e!==c.native_networkconf_id))},[r,c]);return i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:Le,alignWith:"input",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement(Ne.a,{id:Le,placeholder:e.formatMessage({id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_TAGGED_NETWORKCONF_IDS_OPTION_SELECT_ALL"}),value:c.tagged_networkconf_ids,options:o,multi:!0,onChange:(e,t)=>{let a=t;"Select All"===e.value&&(a=o.reduce((e,t)=>("Deselect All"!==t.value&&"Select All"!==t.value&&e.push(t.value),e),[])),"Deselect All"===e.value&&(a=[]),r(Le,a)},disabled:a,width:"100%"})))});var xe=Object(_.f)(({intl:e,isView:t})=>{const a=Object(l.useSelector)(t=>Ee(t,{intl:e}));return i.a.createElement(C.a,null,i.a.createElement(v.a,{htmlFor:"voice_networkconf_id",alignWith:"dropdown",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_FIELD_VOICE_NETWORKCONF_ID_LABEL"})}),i.a.createElement(N.a,null,i.a.createElement(L.Field,{name:"voice_networkconf_id",options:a,type:"dropdown",full:!0,disabled:t})))});var Fe=Object(T.d)(({formik:{errors:e,values:t},isView:a})=>{const r=Object(n.useRef)(null);return Object(c.g)(r,e),i.a.createElement("div",{ref:r},i.a.createElement(f.a,null,i.a.createElement(re,{isView:a}),Object(p.a)(t,"op_mode")===d.OpMode.SWITCH&&i.a.createElement(be,{isView:a}),i.a.createElement(ue,{isView:a}),i.a.createElement(Re,{isView:a}),i.a.createElement(xe,{isView:a})),i.a.createElement(I.a,{items:[{id:"advanced",label:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_ACCORDION_PANEL_ADVANCED"}),description:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_FORM_ACCORDION_PANEL_ADVANCED_DESCRIPTION"}),renderContent:()=>i.a.createElement(f.a,{padding:"none"},i.a.createElement(X,{isView:a}),i.a.createElement(Se,{isView:a}),i.a.createElement(ae,{isView:a}),i.a.createElement(ve,{isView:a}),i.a.createElement(Ce,{isView:a}),i.a.createElement(ie,{isView:a}),i.a.createElement(te,{isView:a}))}],motif:"dark",variant:"primary"}))});const Pe=Object(E.a)((function(e,t){const a="All"===e.attr_hidden_id,n=!e._id,i=t.find(({attr_hidden_id:e,attr_no_delete:t})=>"LAN"===e&&t)||{},r=(a||n?i._id:e.native_networkconf_id)||"",{egressRateLimitUnit:l,egressRateLimitKbps:c}=!e.egress_rate_limit_kbps_enabled||e.egress_rate_limit_kbps%1e3>0?{egressRateLimitUnit:"k",egressRateLimitKbps:e.egress_rate_limit_kbps||""}:{egressRateLimitUnit:"M",egressRateLimitKbps:e.egress_rate_limit_kbps/1e3};if(n)return{...m.a,egressRateLimitUnit:l,egress_rate_limit_kbps:c,native_networkconf_id:r};const o=e.op_mode,s=e.tagged_networkconf_ids||(a?t.filter(({attr_hidden_id:e})=>"LAN"!==e).map(({_id:e})=>e):[]),d=(Object.entries(m.c).find(([,{autoneg:t,full_duplex:a,speed:n}])=>t===e.autoneg&&a===e.full_duplex&&n===e.speed)||["PORTSPEED_AUTO_NEG"]).shift();return{...m.a,...e,egressRateLimitUnit:l,egress_rate_limit_kbps:c,native_networkconf_id:r,op_mode:o,portSpeed:d,tagged_networkconf_ids:s}}));var we=e=>{const{onBack:t,initialValues:a}=e,r=Object(l.useDispatch)(),o=Object(l.useSelector)(s.selectNativeNetworks),E=Object(l.useSelector)(O.x),T=!!Object(p.a)(a,"attr_no_edit",!1),f=!!Object(p.a)(a,"_id",!1),I=Object(n.useCallback)(Object(g.c)(e)(async e=>{const{egressRateLimitUnit:t,egress_rate_limit_kbps:a,poe_mode:n,portSpeed:i,stormctrl_bcast_rate:l,stormctrl_mcast_rate:c,stormctrl_ucast_rate:o,...s}=e,m={...s,...n?{poe_mode:n}:void 0,...e.egress_rate_limit_kbps_enabled?{egress_rate_limit_kbps:"k"===t?a:1e3*a}:void 0,...e.stormctrl_bcast_enabled?{stormctrl_bcast_rate:l}:void 0,...e.stormctrl_mcast_enabled?{stormctrl_mcast_rate:c}:void 0,...e.stormctrl_ucast_enabled?{stormctrl_ucast_rate:o}:void 0,forward:e.native_networkconf_id&&!e.tagged_networkconf_ids.length?"native":"customize"};return r(Object(d.savePortConf)(m))}),[r,a,d.savePortConf]),h=Object(c.n)({component:i.a.createElement(_.c,{id:"SETTINGS_PROFILES_SWITCH_PORTS_CREATE_TITLE"}),message:"SETTINGS_PROFILES_SWITCH_PORTS_CREATE_TITLE"},E?"SETTINGS_PROFILES_SWITCH_PORTS_VIEW_TITLE":"SETTINGS_PROFILES_SWITCH_PORTS_EDIT_TITLE",a._id?a.name:void 0),v=Object(n.useCallback)(()=>{r(Object(S.b)({name:a.name,onConfirm:()=>r(Object(d.removePortConf)(a)).then(t())}))},[r,a,t]);return i.a.createElement(b.b,{goBack:t,initialValues:Pe(a,o),isEdit:f,isView:E||T,showBack:!0,title:h,validationSchema:m.f,onEscClicked:t,onSubmit:I,footerActiveOverride:!!(null==a?void 0:a._id)&&!a.attr_no_delete&&!E,customFooterButtons:e=>(null==a?void 0:a._id)&&!a.attr_no_delete&&!E&&i.a.createElement(u.a,{disabled:e,type:"button",variant:"default",onClick:v},i.a.createElement(_.c,{id:"COMMON_ACTION_REMOVE"}))},i.a.createElement(Fe,{isView:E||T}))};t.default=()=>{const{profileId:e}=Object(r.m)(),t=Object(l.useSelector)(d.selectPortConf),a=t&&t.find(({_id:t})=>t===e),_=Object(c.h)(),p=Object(n.useMemo)(()=>(null==a?void 0:a._id)?{...m.a,...a}:{...m.a},[a]);return Object(c.f)([Object(s.fetchNetworks)(void 0,{crudCacheStrategy:{type:o.a.CACHE}}),Object(d.fetchPortConf)(void 0,{crudCacheStrategy:{type:o.a.CACHE}})],i.a.createElement(we,{initialValues:p,onBack:_}))}},1929:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),l=a(2),c=a(1946),o=a.n(c),s=a(1741),d=a(520),m=a(521);const _=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const c=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(m.a)(t),E=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),u=Object(n.useCallback)(e=>(e={},t={})=>p(e,t)&&E(e,t),[p,E]);return!!e&&i.a.createElement(o.a,{when:u(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:d.b,title:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(_,null,i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),i=a(36);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,r]=Object(n.useState)(!1),l=Object(n.useRef)();return Object(n.useEffect)(()=>{r(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(l.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(l.current)},[e.pathname,t]),a}},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return k})),a.d(t,"a",(function(){return x}));var n=a(0),i=a.n(n),r=a(5),l=a(2),c=a(44),o=a(2847),s=a(2658),d=a(1929),m=a(783),_=a(71),p=a(1940),E=a(15),u=a(32),O=a(42),b=a(1847),g=a(782),S=a(1930);const T=r.a`
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
`;var f=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:r,...l})=>{const c=Object(S.a)(),o=Object(g.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!o||c,in:t||!o||c,timeout:e,classNames:T,mountOnEnter:!0},l),a)),[a,t,o,c,e,l]);return i.a.createElement(i.a.Fragment,null,s)};const I=r.a`
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
`;var h=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:r,...l})=>{const c=Object(S.a)(),o=Object(g.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!o||c,in:t||!o||c,timeout:e,classNames:I,mountOnEnter:!0},l),a)),[a,t,o,c,e,l]);return i.a.createElement(i.a.Fragment,null,s)};const v=Object(r.c)(_.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,C=Object(r.c)(_.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,N=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,L=Object(r.c)(_.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,R=Object(r.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var x=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:r,ignoredPaths:l})=>{const{motif:c}=Object(O.a)();return i.a.createElement(h,{ignoredPaths:l},i.a.createElement(C,{flex:"none",height:"65px"},i.a.createElement(f,{ignoredPaths:l},i.a.createElement(_.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(v,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(L,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:c},i.a.createElement(E.f,{size:"original"}))),i.a.createElement(N,null,i.a.createElement(R,{weight:"bold"},e.component)),i.a.createElement(v,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&i.a.createElement(L,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(E.y,{size:"original"})))))))};const F=Object(r.c)(_.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,P=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,w=Object(r.c)(_.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,D=Object(r.c)(o.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,j=Object(r.c)(_.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,M=Object(r.c)(_.k)`
  height: 100%;
  width: 100%;
`;var k=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:r,isView:o,showBack:m,title:E,unsavedChangesModalIgnoredPaths:u,onEscClicked:O,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:g=!1,customFooterButtons:S,hidddenHeader:T,...f})=>i.a.createElement(c.c,Object.assign({enableReinitialize:!0},f),({dirty:r,handleReset:c,handleSubmit:f,isSubmitting:I})=>i.a.createElement(P,{autoComplete:"off",onSubmit:f},i.a.createElement(M,{vertical:!0},!T&&i.a.createElement(x,{goBack:a,hideClose:n,showBack:m,title:E,onEscClicked:O,ignoredPaths:u}),i.a.createElement(p.a,{ignoredPaths:u},i.a.createElement(j,{flex:"1"},i.a.createElement(F,{flex:"none",flexDirection:"column"},e))),!t&&!o&&i.a.createElement(d.a,{ignoredPaths:u,when:r&&!I}),(!o||g)&&i.a.createElement(D,{active:r||g},i.a.createElement(_.g,{justifyContent:S?"space-between":"flex-end",width:"100%",alignItems:"center"},S&&i.a.createElement(w,null,S(I)),!o&&i.a.createElement(_.g,null,i.a.createElement(s.a,{disabled:!r||I,type:"button",variant:"default",onClick:c},i.a.createElement(l.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!r||I,type:"submit",variant:"primary"},i.a.createElement(l.c,{id:b}))))))))},1940:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),l=a(5),c=a(782),o=a(1930);const s=l.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:l,...d})=>{const m=Object(o.a)(),_=Object(c.a)(a),p=Object(n.useMemo)(()=>i.a.Children.map(l,a=>null===a?a:i.a.createElement(r.a,Object.assign({appear:t||!_||m,in:t||!_||m,timeout:e,classNames:s,mountOnEnter:!0},d),a)),[l,t,_,m,e,d]);return i.a.createElement(i.a.Fragment,null,p)}},1947:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1847),l=a(5);const c=(e,t)=>l.a`
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
`;t.a=i.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:l="0 0 32px",wrap:o=!1,children:s,...d})=>{const m=Object(n.useMemo)(()=>i.a.Children.map(s,(n,l)=>i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,void 0),mountOnEnter:!0},d),null===n?i.a.createElement("div",null):n)),[s,a,t,d,e]);return o?i.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,l),mountOnEnter:!0},d),i.a.createElement("div",null,s)):i.a.createElement(i.a.Fragment,null,m)})},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1965:function(e,t,a){"use strict";var n=a(1953);const i=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=i},2005:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a(16),i=function(e,t){var a=t.successMessage,n=t.failureMessage;if((a||n)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},r=function(e){return function(t){return function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(l,c){var o=c.props||t;i(o,r);var s=o.createToast,d="function"==typeof r?r(l):r,m=d.msgValues,_=d.successMessage,p=d.failureMessage;a(l,o,c).then((function(){return _&&s({icon:n.a.success,message:_,values:m}),e(c,t)})).catch((function(e){p&&s({icon:n.a.danger,message:p,values:m,errorMessage:e.msg,errorValues:e}),c.setSubmitting(!1)}))}}}},l=r((function(e){return e.setStatus({isSubmitted:!0})}))(),c=r((function(e){return e.setStatus({isSubmitted:!0})})),o=(r((function(e){return e.props.onClose()}))(),r((function(e,t){return t.onBack()})))},2477:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),l=a(2),c=a(15),o=a(32),s=a(445),d=a(46),m=a(70),_=a(117),p=a(21);const E=Object(r.c)(p.a,{shouldForwardProp:e=>"paddingTop"!==e})`
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`,u=Object(r.c)(o.a,{shouldForwardProp:e=>"paddingLeft"!==e&&"paddingTop"!==e})`
  ${({paddingLeft:e})=>e?`padding-left: ${e};`:""}
  ${({paddingTop:e})=>e?`padding-top: ${e};`:""}
`;t.a=({description:e,title:t,className:a,descriptionValues:n={},devices:r=[],height:O,tooltipWidth:b=400,width:g,wrapperStyle:S,...T})=>{const f=Object(m.m)(),I=r.map((e,t)=>i.a.createElement(E,{alignItems:"center",key:e._id,paddingTop:0===t?"8px":void 0},i.a.createElement(_.c,{device:e}),i.a.createElement(u,{color:"tertiary",paddingLeft:"8px"},Object(d.c)(e)))),h=i.a.createElement(p.a,{flexDirection:"column"},t&&i.a.createElement(o.a,{size:"body",uppercase:!0,weight:"bold"},i.a.createElement(l.c,{id:t})),i.a.createElement(u,{color:"secondary",paddingTop:t?"8px":void 0},i.a.createElement(l.c,{id:e,values:n})),I);return i.a.createElement("div",{className:a,style:S},i.a.createElement(s.a,Object.assign({message:h,width:b},T),i.a.createElement(c.W,{color:f.motifPalette.warning,width:g,height:O})))}}}]);