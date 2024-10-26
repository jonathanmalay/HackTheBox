(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[32],{1803:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),i=a(8),c=a(2),s=a(1179),o=a(529),E=a(2552),_=a(228),m=a.n(_),S=a(18),d=a(145),T=a(374),u=a(83),p=a(2516),b=a(50),O=a(280),h=a(379),g=a(35),I=a(43),L=a(1938),N=a(2005),R=a(27),f=a(2056),C=a(6),A=a(44),v=a(322),M=a(445),y=a(1736),G=a(1737),j=a(45),x=a(15),D=a(5),P=a(1947),Y=a(71),w=a(226),H=a(137),V=a(151),F=a(135);const k=[{value:F.b.WARN,label:"SETTINGS_SYSTEM_CTRL_LOG_VALUES_NORMAL"},{value:F.b.INFO,label:"SETTINGS_SYSTEM_CTRL_LOG_VALUES_MORE"},{value:F.b.DEBUG,label:"SETTINGS_SYSTEM_CTRL_LOG_VALUES_DEBUG"}],U=[{value:b.LiveUpdateLevel.AUTO,label:"SETTINGS_SYSTEM_CTRL_LIVE_UPDATE_OPTION_AUTO"},{value:b.LiveUpdateLevel.ENABLED,label:"SETTINGS_SYSTEM_CTRL_LIVE_UPDATE_OPTION_ENABLED"},{value:b.LiveUpdateLevel.DISABLED,label:"SETTINGS_SYSTEM_CTRL_LIVE_UPDATE_OPTION_DISABLED"}];var B=a(105),$=a(2160),W=a(100);const z=e=>{const t=parseFloat(e);return Number.isInteger(t)&&t>=$.a.MIN&&t<=$.a.MAX},K=(e,t,a)=>(!e||!a)&&t,q=(e,t)=>e&&!t,X=(e,t)=>Object.entries(e).reduce((e,[a,n])=>(n!==t[a]&&e.push({key:a.replace("_","."),value:n}),e),[]),Q=e=>{switch(e){case b.ChatLevels.EVERYONE:return{chatEnabled:!0,chatAdminsEnabled:!0};case b.ChatLevels.SUPER_ONLY:return{chatEnabled:!0,chatAdminsEnabled:!1};default:return{chatEnabled:!1,chatAdminsEnabled:!1}}},J=e=>{const{live_chat:t,...a}=e;return{live_chat:t,...Q(t),...a}},Z=({chatEnabled:e,chatAdminsEnabled:t})=>e?t?b.ChatLevels.EVERYONE:b.ChatLevels.SUPER_ONLY:b.ChatLevels.DISABLED;var ee=a(30);const te=ee.a.object().shape({siteName:ee.a.string().label("SETTINGS_SITE_CONFIGURATION_SITE_NAME_LABEL")});var ae=a(215),ne=a(1739),re=a(1914),le=a(2188),ie=a(2118),ce=a(17),se=a(62),oe=a(41);const Ee=Object(D.c)(ae.a,{shouldForwardProp:e=>"isDark"!==e})`
  border-color: ${({theme:e})=>e.motifPalette.red10?e.motifPalette.red06:e.motifPalette.error};
  color: ${({theme:e})=>e.motifPalette.red10?e.motifPalette.red06:e.motifPalette.error};

  &:hover {
    border: 1px solid
      ${({theme:e,isDark:t})=>e.motifPalette.red10?e.motifPalette.red05:t?"#db575b":"#f36165"};
    color: ${({theme:e,isDark:t})=>e.motifPalette.red10?e.motifPalette.red05:t?"#db575b":"#f36165"};
    background-color: ${({theme:e})=>e.motifPalette.buttonSecondaryHvBg};
  }
  &:active {
    border-color: ${({theme:e,isDark:t})=>e.motifPalette.red10?e.motifPalette.red08:t?"#852022":"#9c2628"};
    color: ${({theme:e,isDark:t})=>e.motifPalette.red10?e.motifPalette.red08:t?"#852022":"#9c2628"};
    background-color: transparent;
  }
`;var _e=()=>{const e=Object(i.useSelector)(le.b),t=Object(i.useSelector)(ie.b),a=Object(i.useDispatch)(),l=Object(i.useSelector)(O.selectActiveSite),s=Object(i.useSelector)(S.y),o=Object(i.useSelector)(S.u),E=s&&!l.attr_no_delete,_=Object(n.useCallback)(()=>a(Object(ce.g)({modalType:oe.a.DELETE_ACTIVE_SITE})),[a]);return r.a.createElement(ne.a,{padding:"none"},r.a.createElement(y.a,null,r.a.createElement(re.a,{alignWith:"input",htmlFor:"siteConfiguration.siteName",label:r.a.createElement(c.c,{id:"SETTINGS_SITE_CONFIGURATION_SITE_NAME_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{full:!0,name:"siteConfiguration.siteName",placeholder:"SETTINGS_SITE_CONFIGURATION_SITE_NAME_PLACEHOLDER"}))),r.a.createElement(y.a,null,r.a.createElement(re.a,{alignWith:"dropdown",htmlFor:"siteConfiguration.country.code",label:r.a.createElement(c.c,{id:"SETTINGS_SITE_CONFIGURATION_COUNTRY_CODE_LABEL"})}),r.a.createElement(G.a,null,r.a.createElement(se.Field,{full:!0,name:"siteConfiguration.country.code",options:e,type:"dropdown"}))),r.a.createElement(y.a,null,r.a.createElement(re.a,{alignWith:"dropdown",htmlFor:"siteConfiguration.locale.timezone",label:r.a.createElement(c.c,{id:"SETTINGS_SITE_CONFIGURATION_LOCALE_TIMEZONE_LABEL"})}),r.a.createElement(G.a,null,r.a.createElement(se.Field,{full:!0,name:"siteConfiguration.locale.timezone",options:t,type:"dropdown"}))),r.a.createElement(y.a,null,r.a.createElement(re.a,{alignWith:"toggleSmall",htmlFor:"super_mgmt.multiple_sites_enabled",label:r.a.createElement(c.c,{id:"SETTINGS_SITE_CONFIGURATION_MULTI_SITE_MANAGEMENT"}),description:r.a.createElement(c.c,{id:"SETTINGS_SITE_CONFIGURATION_MULTI_SITE_MANAGEMENT_DESCRIPTION"})}),r.a.createElement(G.a,null,r.a.createElement(se.Field,{name:"super_mgmt.multiple_sites_enabled",type:"checkbox"}))),E&&r.a.createElement(y.a,null,r.a.createElement(Ee,{variant:"secondary",name:"deleteSite",type:"button",onClick:_,isDark:o},r.a.createElement(c.c,{id:"SETTINGS_SITE_CONFIGURATION_DELETE_SITE_TITLE"}))))};const me=W.a.object().shape({rsyslogd:W.a.object().shape({enabled:W.a.boolean(),this_controller:W.a.boolean(),this_controller_encrypted_only:W.a.boolean(),ip:W.a.string().when(["enabled","this_controller"],{is:q,then:W.a.string().matches(B.g,r.a.createElement(c.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_HOST_LABEL"})}})).label("SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_HOST_LABEL").required()}),port:W.a.number().label("SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_PORT_LABEL").when(["enabled","this_controller"],{is:q,then:W.a.number().integer().min($.a.MIN).max($.a.MAX).required(),otherwise:W.a.number().transform(e=>Number.isNaN(e)?void 0:e).nullable().notRequired()}),netconsole_enabled:W.a.boolean(),netconsole_host:W.a.string().when(["enabled","netconsole_enabled","this_controller"],{is:K,then:W.a.string().matches(B.g,r.a.createElement(c.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_HOST_LABEL"})}})).label("SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_HOST_LABEL").required()}),netconsole_port:W.a.number().label("SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_PORT_LABEL").when(["enabled","netconsole_enabled","this_controller"],{is:K,then:W.a.number().integer().min($.a.MIN).max($.a.MAX).required(),otherwise:W.a.number().transform(e=>Number.isNaN(e)?void 0:e).nullable().notRequired()})}),mgmt:W.a.object().shape({x_ssh_username:W.a.string().when("x_ssh_enabled",{is:!0,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_USERNAME_LABEL").matches(B.v,r.a.createElement(c.c,{id:"COMMON_VALIDATION_SSH_AUTH_USERNAME",values:{name:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_USERNAME_LABEL"})}})).required()}),x_ssh_password:W.a.string().when("x_ssh_enabled",{is:!0,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_PASSWORD_LABEL").required()})}),super_mgmt:W.a.object().shape({override_inform_host_location:W.a.string().when(["override_inform_host_type"],{is:b.InformHostType.CUSTOM,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_LABEL").required()})}),super_smtp:W.a.object().shape({enabled:W.a.boolean(),host:W.a.string().when("enabled",{is:!0,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_HOSTNAME_LABEL").matches(B.g,r.a.createElement(c.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_HOSTNAME_LABEL"})}})).required()}),port:W.a.mixed().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_PORT_LABEL").when("enabled",{is:!0,then:W.a.number().required().integer().min($.a.MIN).max($.a.MAX)}),use_auth:W.a.boolean(),username:W.a.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_USERNAME_LABEL").when(["enabled","use_auth"],{is:!0,then:W.a.string().required()}),x_password:W.a.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_PASSWORD_LABEL").when(["enabled","use_auth"],{is:!0,then:W.a.string().required()}),use_sender:W.a.boolean(),sender:W.a.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_SENDER_EMAIL_LABEL").when(["enabled","use_sender"],{is:(e,t)=>e&&t,then:W.a.string().required().email()})}),super_identity:W.a.object().shape({hostname:W.a.string().label("SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_LABEL").matches(B.b,r.a.createElement(c.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_LABEL"})}}))}),siteConfiguration:te,connectivity:W.a.object().shape({enabled:W.a.bool(),uplink_type:W.a.string().oneOf([...Object.values(b.ConnectivityType)]),uplink_host:W.a.string().when(["enabled","uplink_type"],{is:(e,t)=>e&&t===b.ConnectivityType.CUSTOM,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_HOST").matches(B.g,r.a.createElement(c.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_HOST"})}})).required()})})}),Se=W.a.object().shape({x_ssh_keys:W.a.array().of(W.a.object().shape({name:W.a.string().label("SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_NAME_LABEL").required(),key:W.a.string().label("SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEY_LABEL").matches(B.u,r.a.createElement(c.c,{id:"SETTINGS_SSH_SIDE_PANEL_KEY_INVALID"})).required()})),newSshKey:W.a.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_USERNAME_LABEL").when("editActive",{is:!1,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEY_LABEL").matches(B.u,r.a.createElement(c.c,{id:"SETTINGS_SSH_SIDE_PANEL_KEY_INVALID"})).required()}),newSshKeyName:W.a.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_USERNAME_LABEL").when("editActive",{is:!1,then:W.a.string().label("SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_NAME_LABEL").required()})}),de=Object(D.c)(M.a)`
  margin-left: ${({theme:e})=>e.space[4]}px;
`,Te=Object(D.c)("div")`
  padding: 0 ${j.a["spacing-xxxxl"]} ${2*parseInt(j.a["spacing-xxxxl"],10)}px
    ${j.a["spacing-xxxxl"]};
`,ue=Object(D.c)(H.a)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var pe=()=>{var e,t,a;const[l,s]=Object(n.useState)(!1),o=Object(i.useSelector)(u.m),E=Object(i.useSelector)(I.f),{analytics_force_enabled:_}=Object(i.useSelector)(b.selectSuperManagementSettings),m=Object(i.useSelector)(u.g),{values:S,initialValues:d,setFieldValue:T}=Object(A.e)(),p=!E&&!l&&(null===(e=null==S?void 0:S.super_mgmt)||void 0===e?void 0:e.override_inform_host),O=(null===(t=null==S?void 0:S.super_mgmt)||void 0===t?void 0:t.override_inform_host_type)!==b.InformHostType.CUSTOM;Object(n.useEffect)(()=>{var e,t;p||(T("super_mgmt.override_inform_host_type",null===(e=null==d?void 0:d.super_mgmt)||void 0===e?void 0:e.override_inform_host_type),T("super_mgmt.override_inform_host_location",null===(t=null==d?void 0:d.super_mgmt)||void 0===t?void 0:t.override_inform_host_location))},[d.super_mgmt.override_inform_host_location,d.super_mgmt.override_inform_host_type,p,T]);const h=Object(n.useCallback)(e=>{e&&s(!0)},[]),g=Object(n.useCallback)(()=>{T("super_mgmt.override_inform_host",!1),s(!1)},[T]),L=Object(n.useCallback)(()=>{s(!1)},[]);return r.a.createElement(Te,null,r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_mgmt.override_inform_host",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_DESCRIPTION"})}),r.a.createElement(G.a,null,r.a.createElement(H.a,{name:"super_mgmt.override_inform_host",type:"checkbox",afterChange:h}))),r.a.createElement(P.a,{in:p,flexDirection:"column",wrap:!0},r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_mgmt.override_inform_host_type",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_TYPE_LABEL"}),searchIsApplicable:"isUbiOs"}),r.a.createElement(G.a,{column:!0},r.a.createElement(Y.g,null,r.a.createElement(ue,{value:b.InformHostType.DEFAULT,type:"togglebox",toggleboxType:"radio",name:"super_mgmt.override_inform_host_type"},r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_DEFAULT_TYPE"})),r.a.createElement(ue,{value:b.InformHostType.CUSTOM,type:"togglebox",toggleboxType:"radio",name:"super_mgmt.override_inform_host_type"},r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_CUSTOM_TYPE"}))))),r.a.createElement(y.a,{disabled:O},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:O?"super_mgmt.override_inform_host_location_placeholder":"super_mgmt.override_inform_host_location",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_LABEL"})}),r.a.createElement(G.a,{column:!0},O?r.a.createElement(H.a,{value:null===(a=null==S?void 0:S.super_identity)||void 0===a?void 0:a.hostname,name:"super_mgmt.override_inform_host_location_placeholder",placeholder:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_PLACEHOLDER",full:!0}):r.a.createElement(H.a,{name:"super_mgmt.override_inform_host_location",placeholder:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_PLACEHOLDER",autoComplete:"off",full:!0})))),E&&r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_identity.hostname",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_OVERRIDE_INFORM_HOST_OVERRIDE_LABEL"}),searchIsApplicable:"isStandalone"}),r.a.createElement(G.a,{column:!0},r.a.createElement(H.a,{name:"super_identity.hostname",autoComplete:"off",full:!0}))),!o&&!m&&r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_mgmt.discoverable",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DISCOVERABLE_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DISCOVERABLE_DESCRIPTION"}),searchIsApplicable:"isNotUdm",searchText:"SETTINGS_SYSTEM_CTRL_DISCOVERABLE_SEARCH_TEXT"}),r.a.createElement(G.a,null,r.a.createElement(H.a,{type:"checkbox",name:"super_mgmt.discoverable"}))),r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"dropdown",htmlFor:"super_mgmt.live_updates",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_LIVE_UPDATES_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_LIVE_UPDATES_DESCRIPTION"})}),r.a.createElement(G.a,null,r.a.createElement(H.a,{type:"dropdown",name:"super_mgmt.live_updates",options:U,translateOptions:!0,full:!0}))),!m&&r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_mgmt.google_maps_api_key",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_LABEL_GOOGLE_MAPS_API_KEY"}),description:r.a.createElement(c.b,{id:"SETTINGS_SYSTEM_CTRL_DESCRIPTION_GOOGLE_MAPS_API_KEY",values:{guideUrl:w.a.googleMapsGuide}})}),r.a.createElement(G.a,{column:!0},r.a.createElement(H.a,{name:"super_mgmt.google_maps_api_key",placeholder:"SETTINGS_SYSTEM_CTRL_MODAL_GOOGLE_MAPS_KEY_PLACEHOLDER",full:!0}))),E&&r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggle",htmlFor:"super_mgmt.enable_analytics",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ANALYTICS_LABEL"}),description:r.a.createElement(c.b,{id:"SETTINGS_SYSTEM_CTRL_ANALYTICS_DESCRIPTION",values:{privacyUrl:w.a.privacyUrl}}),searchIsApplicable:"isStandalone",searchText:"SETTINGS_SYSTEM_CTRL_ANALYTICS_SEARCH_TEXT"}),r.a.createElement(G.a,null,r.a.createElement(H.a,{type:"checkbox",name:"super_mgmt.enable_analytics",disabled:_}),_&&r.a.createElement(de,{width:300,message:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ANALYTICS_TOOLTIP"}),position:"bottom"},r.a.createElement(x.W,{size:"navigation"})))),l&&r.a.createElement(V.a,{isOpen:!0,onCancel:g,onConfirm:L,message:"SETTINGS_SYSTEM_CTRL_MODAL_OVERRIDE_INFORM_HOST_MESSAGE",title:"SETTINGS_SYSTEM_CTRL_MODAL_OVERRIDE_INFORM_HOST_TITLE"}))};var be=()=>{const e=Object(i.useSelector)(u.p);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{unlimitedWidth:!0,htmlFor:"logging-levels",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_LOGGING_LEVELS_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_LOGGING_LEVELS_LABEL_DESCR"}),disableHover:!0})),Object.keys(e).map(e=>r.a.createElement(y.a,{key:e},r.a.createElement(re.a,{alignWith:"select",htmlFor:"logLevels."+e,label:r.a.createElement(c.c,{id:`SETTINGS_SYSTEM_CTRL_LOGGING_LEVELS_${e.toUpperCase()}_LABEL`})}),r.a.createElement(G.a,{column:!0},r.a.createElement(H.a,{name:"logLevels."+e,type:"dropdown",full:!0,translateOptions:!0,options:k})))))};const Oe=Object(D.c)(M.a)`
  margin-left: ${({theme:e})=>e.spacing["spacing-m"]};
`;var he=Object(A.d)(({formik:{setFieldValue:e,values:t}})=>{Object(l.m)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"rsyslogd.enabled",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_SEARCH_LABEL"}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{name:"rsyslogd.enabled",type:"checkbox"}))),r.a.createElement(y.a,{disabled:!t.rsyslogd.enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"rsyslogd.debug",label:r.a.createElement(Y.g,null,r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_DEBUG_LABEL"}),r.a.createElement(Oe,{message:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_DEBUG_TOOLTIP"}),width:160},r.a.createElement(x.W,{isActive:!0}))),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_DEBUG_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_DEBUG_SEARCH_LABEL"}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!t.rsyslogd.enabled,name:"rsyslogd.debug",type:"checkbox"}))),r.a.createElement(y.a,{disabled:!t.rsyslogd.enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"rsyslogd.this_controller",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_THIS_CONTROLLER_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_THIS_CONTROLLER_DESCRIPTION"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!t.rsyslogd.enabled,name:"rsyslogd.this_controller",type:"checkbox",afterChange:t=>{t&&e("rsyslogd.netconsole_enabled",!1)}}))),r.a.createElement(y.a,{disabled:!t.rsyslogd.enabled||t.rsyslogd.this_controller},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"rsyslogd.ip",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_HOST_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_HOST_DESCRIPTION"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!t.rsyslogd.enabled||t.rsyslogd.this_controller,name:"rsyslogd.ip",full:!0}))),r.a.createElement(y.a,{disabled:!t.rsyslogd.enabled||t.rsyslogd.this_controller},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"rsyslogd.port",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_PORT_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_SYSLOG_PORT_DESCRIPTION"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!t.rsyslogd.enabled||t.rsyslogd.this_controller,name:"rsyslogd.port",type:"number",full:!0}))),r.a.createElement(y.a,{disabled:t.rsyslogd.enabled&&t.rsyslogd.this_controller},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"rsyslogd.netconsole_enabled",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_SEARCH_LABEL"}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:t.rsyslogd.enabled&&t.rsyslogd.this_controller,name:"rsyslogd.netconsole_enabled",type:"checkbox"}))),r.a.createElement(y.a,{disabled:!t.rsyslogd.netconsole_enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"rsyslogd.netconsole_host",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_HOST_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_HOST_DESCRIPTION"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!t.rsyslogd.netconsole_enabled,id:"rsyslogd.netconsole_host",name:"rsyslogd.netconsole_host",full:!0}))),r.a.createElement(y.a,{disabled:!t.rsyslogd.netconsole_enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"rsyslogd.netconsole_port",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_PORT_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_REMOTE_LOGGING_NETCONSOLE_PORT_DESCRIPTION"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!t.rsyslogd.netconsole_enabled,id:"rsyslogd.netconsole_port",name:"rsyslogd.netconsole_port",type:"number",full:!0}))))});var ge=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(be,null),r.a.createElement(he,null)),Ie=a(36),Le=a(607);const Ne=Object(D.c)(se.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`,Re=Object(D.c)(se.Field)`
  &,
  > * {
    pointer-events: all !important;
  }
`,fe=Object(D.c)("div")`
  width: 240px;
  line-height: 1.3;
`,Ce=Object(D.c)("ul")`
  margin: ${({theme:e})=>e.spacing["spacing-l"]};
  padding: 0;

  li {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
  }
`;var Ae=()=>{const[e,t]=Object(n.useState)(!1),a=Object(Ie.k)(),{values:s,initialValues:o}=Object(A.e)(),E=Object(i.useSelector)(g.selectWifiNetworksData),_=Object(i.useSelector)(T.selectAPGroupsData),m=Object(n.useMemo)(()=>_.filter(e=>Object(T.apGroupContainsDeviceWithWlanLimitReached)(e,E,_,!0,{},!1)),[_]),S=m.length>0,d=o.connectivity.enabled||!S,u=Object(l.i)("wifi"),p=Object(n.useCallback)(()=>!d&&t(!0),[d]),O=Object(n.useCallback)(()=>!d&&t(!1),[d]),h=Object(n.useCallback)(()=>a.push(u),[u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"connectivity.enabled",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_DESCRIPTION"})}),r.a.createElement(G.a,{onMouseLeave:O},r.a.createElement(Y.g,{alignItems:"center",onMouseEnter:p},r.a.createElement(Le.a,{align:"topCenter",open:!d&&e,renderToggle:()=>r.a.createElement(Re,{name:"connectivity.enabled",type:"checkbox",disabled:!d}),size:"auto",toggleOffset:10,viewport:!0},r.a.createElement(fe,null,r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_SSID_LIMIT"}),r.a.createElement(Ce,null,m.map(({name:e,_id:t})=>r.a.createElement("li",{key:"ap-group-over-the-limit-"+t},e))),r.a.createElement(Y.c,{legacy:!1,name:"uplink-connectivity-monitor-limit-cta",variant:"inline",onClick:h},r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_CTA"}))))))),r.a.createElement(y.a,{disabled:!s.connectivity.enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggle",htmlFor:"connectivity.uplink_type",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_TYPE"}),searchText:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_TYPE_SEARCH_TEXT"}),r.a.createElement(G.a,{column:!0},r.a.createElement(Y.g,null,r.a.createElement(Ne,{value:b.ConnectivityType.GATEWAY,type:"togglebox",toggleboxType:"radio",name:"connectivity.uplink_type",disabled:!s.connectivity.enabled},r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_TYPE_GATEWAY"})),r.a.createElement(Ne,{value:b.ConnectivityType.CUSTOM,type:"togglebox",toggleboxType:"radio",name:"connectivity.uplink_type",disabled:!s.connectivity.enabled},r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_TYPE_CUSTOM_IP"}))))),s.connectivity.uplink_type===b.ConnectivityType.CUSTOM&&r.a.createElement(y.a,{disabled:!s.connectivity.enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"connectivity.uplink_host",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_UPLINK_CONNECTIVITY_MONITOR_HOST"}),searchIgnore:!0}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:!s.connectivity.enabled,name:"connectivity.uplink_host",full:!0}))))},ve=a(364),Me=a(51),ye=a(37),Ge=a(28),je=a(77);const xe=Object(D.c)(y.a)`
  margin-bottom: ${2*parseInt(j.a["spacing-xxxxl"],10)}px !important;
`;var De=()=>{var e;const t=Object(i.useDispatch)(),{values:{super_smtp:a,super_mail:s},setFieldValue:o,initialValues:E,dirty:_,isValid:m}=Object(A.e)(),S=s.provider===b.MailProvider.SMTP,d=!a.enabled||!S,T=d||!a.use_auth,u=Object(i.useSelector)(je.selectSdn),[p,O]=Object(n.useState)(""),[h,g]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const{use_ssl:e,port:t}=a,n=t&&Number(t);e||465!==n||o("super_smtp.port",25),e&&25===n&&o("super_smtp.port",465)},[a.use_ssl,a.port,o]);const I=Object(n.useCallback)(e=>{var t;o("super_mail.provider",e.currentTarget.checked?b.MailProvider.SMTP:null===(t=E.super_mail)||void 0===t?void 0:t.provider),o("super_smtp.enabled",e.currentTarget.checked)},[null===(e=E.super_mail)||void 0===e?void 0:e.provider]),L=Object(n.useCallback)(e=>{o("super_mail.provider",e.currentTarget.checked?b.MailProvider.CLOUD:b.MailProvider.SMTP),o("super_smtp.enabled",!1)},[]);return Object(l.f)([Object(je.fetchSdn)({type:C.a.CACHE})],r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",unlimitedWidth:!0,disableHover:!0,label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_DESCRIPTION"}),searchIgnore:!0})),r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_smtp.enabled",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{name:"super_smtp.enabled",type:"checkbox",onChange:I}))),r.a.createElement(y.a,{disabled:!u.enabled},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_mail.provider",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_CLOUD_ENABLED_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{name:"super_mail.provider",type:"checkbox",value:s.provider===b.MailProvider.CLOUD,onChange:L,disabled:!u.enabled}))),r.a.createElement(P.a,{in:s.provider!==b.MailProvider.CLOUD,wrap:!0,flexDirection:"column"},r.a.createElement(y.a,{disabled:d},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_smtp.use_ssl",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_SSL_ENABLED_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d,name:"super_smtp.use_ssl",type:"checkbox"}))),r.a.createElement(y.a,{disabled:d},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_smtp.host",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_HOSTNAME_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d,name:"super_smtp.host",placeholder:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_HOSTNAME_PLACEHOLDER",full:!0}))),r.a.createElement(y.a,{disabled:d},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_smtp.port",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_PORT_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d,name:"super_smtp.port",placeholder:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_PORT_PLACEHOLDER",full:!0,type:"number"}))),r.a.createElement(y.a,{disabled:d},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_smtp.use_auth",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_AUTH_ENABLED_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d,name:"super_smtp.use_auth",type:"checkbox"}))),r.a.createElement(y.a,{disabled:T},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_smtp.username",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_USERNAME_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:T,name:"super_smtp.username",placeholder:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_USERNAME_PLACEHOLDER",full:!0}))),r.a.createElement(y.a,{disabled:T},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_smtp.x_password",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_PASSWORD_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:T,name:"super_smtp.x_password",placeholder:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_PASSWORD_PLACEHOLDER",full:!0,type:"password",passwordToggle:!0}))),r.a.createElement(y.a,{disabled:d},r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"super_smtp.use_sender",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_SENDER_ENABLED_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d,name:"super_smtp.use_sender",type:"checkbox"}))),r.a.createElement(y.a,{disabled:d||!a.use_sender},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"super_smtp.sender",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_SENDER_EMAIL_LABEL"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d||!a.use_sender,name:"super_smtp.sender",placeholder:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_SENDER_EMAIL_PLACEHOLDER",full:!0}))),r.a.createElement(y.a,{disabled:d},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"emailTest",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_TEST_EMAIL_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_TEST_EMAIL_DESCRIPTION"})}),r.a.createElement(G.a,{column:!0},r.a.createElement(se.Field,{disabled:d,name:"emailTest",value:p,placeholder:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_TEST_EMAIL_PLACEHOLDER",full:!0,onChange:e=>O(e.currentTarget.value)}),r.a.createElement(Y.c,{legacy:!1,disabled:!(!h&&(!_||m)&&Me.string().label("SETTINGS_SYSTEM_CTRL_MAIL_SERVER_TEST_EMAIL_LABEL").required().email().isValidSync(p)),name:"smtp-send-test-email",type:"button",variant:"inline",onClick:()=>{var e;g(!0),t((e={email:p,...Object(ve.a)(a,["host","port","sender","use_auth","use_sender","use_ssl","username","x_password"])},Object(C.p)(ye.a.TEST_EMAIL,"/api/s/{site}/cmd/cfgmgr",e,Object(Ge.a)("SETTINGS_MAIL_SERVER_TEST_ERROR","SETTINGS_MAIL_SERVER_TEST_SUCCESS",{email:e.email})))).finally(()=>{g(!1)})}},r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_MAIL_SERVER_TEST_EMAIL_BUTTON"})))))))},Pe=a(20),Ye=a(1937);const we=Object(D.c)(M.a)`
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]};
`,He=[{label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_NAME_TABLE_HEADER"}),id:"name",sortable:!0},{label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEY_TABLE_HEADER"}),id:"key",sortable:!0}],Ve={name:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_LABEL_NAME",key:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_LABEL_KEY"},Fe=[{name:"newSshKeyName",placeholder:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_PLACEHOLDER_NAME"},{name:"newSshKey",placeholder:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_PLACEHOLDER_KEY"}];var ke=()=>{const{setFieldValue:e,values:{mgmt:{x_ssh_keys:t,x_ssh_enabled:a}}}=Object(A.e)(),l=Object(n.useMemo)(()=>({x_ssh_keys:[...t],newSshKeyName:"",newSshKey:"",editActive:!1}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"mgmt.x_ssh_enabled",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_ENABLE_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_ENABLE_DESCRIPTION"})}),r.a.createElement(G.a,null,r.a.createElement(H.a,{name:"mgmt.x_ssh_enabled",type:"checkbox"}))),r.a.createElement(y.a,{disabled:!a},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"mgmt.x_ssh_username",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_USERNAME_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_USERNAME_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_USERNAME_SEARCH_TEXT"}),r.a.createElement(G.a,{column:!0},r.a.createElement(H.a,{disabled:!a,name:"mgmt.x_ssh_username",full:!0}))),r.a.createElement(y.a,{disabled:!a},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"mgmt.x_ssh_password",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_PASSWORD_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_PASSWORD_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_PASSWORD_SEARCH_TEXT"}),r.a.createElement(G.a,{column:!0},r.a.createElement(H.a,{disabled:!a,name:"mgmt.x_ssh_password",type:"password",passwordToggle:!0,full:!0}))),r.a.createElement(y.a,{disabled:!a},r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"newSshKeyName",label:r.a.createElement(Y.g,null,r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_LABEL"}),!Object(Pe.a)(t,"length")&&r.a.createElement(we,{message:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_TOOLTIP"}),position:"bottom",width:200},r.a.createElement(x.W,{isActive:!0}))),description:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_DESCRIPTION"}),searchText:"SETTINGS_SYSTEM_CTRL_DEVICE_SSH_AUTH_SSH_KEYS_LABEL"}),r.a.createElement(G.a,{wrap:!0},r.a.createElement(Ye.d,{fieldName:"x_ssh_keys",items:t,columns:He,fieldLabels:Ve,newFields:Fe,onAddItem:t=>{const a=[...t.x_ssh_keys],n=(e=>{const[t,a,n]=e.key.split(" "),r=n||e.name;return{name:e.name,type:t,key:a,comment:r,id:e.id}})({name:t.newSshKeyName,key:t.newSshKey,type:b.MgmtSshKeyType.RSA,id:m()()});a.push(n),e("mgmt.x_ssh_keys",a)},onRemoveItem:a=>{const n=t.filter(e=>e.id!==a.id);e("mgmt.x_ssh_keys",n)},onEditSubmit:t=>{e("mgmt.x_ssh_keys",t)},initialValues:l,validationSchema:Se}))))};const Ue=[{label:r.a.createElement(c.c,{id:"SETTINGS_NETWORK_SETTINGS_NTP_HOSTNAME_LABEL"}),id:"ntp_server",sortable:!0,minWidth:170}],Be={ntp_server:"SETTINGS_NETWORK_SETTINGS_NTP_PLACEHOLDER_NTP_SERVER"},$e=[{name:"newNtpServer",placeholder:"SETTINGS_NETWORK_SETTINGS_NTP_PLACEHOLDER_NTP_SERVER"}],We=W.a.object().shape({ntpServers:W.a.array().of(W.a.object().shape({ntp_server:W.a.string().label("SETTINGS_NETWORK_SETTINGS_NTP_HOSTNAME_LABEL").required().matches(B.g,r.a.createElement(c.c,{id:"SETTINGS_NETWORK_SETTINGS_NTP_VALIDATION_SERVER_FORMAT"}))})),newNtpServer:W.a.string().label("SETTINGS_NETWORK_SETTINGS_NTP_HOSTNAME_LABEL").when("editActive",{is:!1,then:W.a.string().label("SETTINGS_NETWORK_SETTINGS_NTP_HOSTNAME_LABEL").matches(B.g,r.a.createElement(c.c,{id:"SETTINGS_NETWORK_SETTINGS_NTP_VALIDATION_SERVER_FORMAT"})).required()})});var ze=()=>{const{setFieldValue:e,values:{ntpServers:t}}=Object(A.e)(),a=Object(n.useMemo)(()=>({editActive:!1,ntpServers:t}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(v.SearchableGridLabel,{alignWith:"input",htmlFor:"newNtpServer",label:r.a.createElement(c.c,{id:"SETTINGS_NETWORK_SETTINGS_NTP_CONFIGURE_LABEL"}),description:r.a.createElement(c.c,{id:"SETTINGS_NETWORK_SETTINGS_NTP_CONFIGURE_DESCR"})}),r.a.createElement(G.a,{wrap:!0},r.a.createElement(Ye.d,{fieldName:"ntpServers",columns:Ue,fieldLabels:Be,newFields:$e,onAddItem:a=>{const n=[...t];n.push({ntp_server:a.newNtpServer,id:m()()}),e("ntpServers",n)},onRemoveItem:a=>{const n=t.filter(e=>e.id!==a.id);e("ntpServers",n)},onEditSubmit:t=>{e("ntpServers",t)},initialValues:a,validationSchema:We,max:4}))))};var Ke=()=>{const e=Object(n.useRef)(null),{errors:t}=Object(A.e)(),a=Object(i.useSelector)(u.m),s=Object(n.useMemo)(()=>{const e=[{id:"remoteLoggingForm",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ACCORDION_REMOTE_LOGGING"}),renderContent:()=>r.a.createElement(ge,null)},{id:"uplinkConnectivityMonitor",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ACCORDION_UPLINK_CONNECTIVITY_MONITOR"}),renderContent:()=>r.a.createElement(Ae,null)},{id:"ntpServerForm",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ACCORDION_NTP"}),renderContent:()=>r.a.createElement(ze,null)},{id:"deviceSshAuthForm",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ACCORDION_DEVICE_SSH_AUTH"}),renderContent:()=>r.a.createElement(ke,null)},{id:"mailServerForm",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ACCORDION_MAIL_SERVER"}),renderContent:()=>r.a.createElement(De,null)}];return a||e.push({id:"site-configuration",label:r.a.createElement(c.c,{id:"SETTINGS_SYSTEM_CTRL_ACCORDION_SITE_CONFIGURATION"}),renderContent:()=>r.a.createElement(_e,null)}),e},[a]);return Object(l.g)(e,t),r.a.createElement("div",{ref:e},r.a.createElement(pe,null),r.a.createElement(v.SearchableAccordion,{items:s,variant:"primary",multiOpen:!0}))};var qe=e=>{const{onBack:t}=e,a=Object(i.useSelector)(S.x),_=Object(i.useSelector)(u.p),A=Object(i.useSelector)(b.selectMgmtSettings),v=Object(i.useSelector)(b.selectRsysLogdSettings),M=Object(i.useSelector)(b.selectSuperIdentitySettings),y=Object(i.useSelector)(b.selectSuperManagementSettings),G=Object(i.useSelector)(b.selectSuperMailSettings),j=Object(i.useSelector)(b.selectSuperSmtpSettings),x=Object(i.useSelector)(b.selectNtpSettings),D=Object(i.useSelector)(O.selectActiveSiteDesc),P=Object(i.useSelector)(b.selectCountrySettings),Y=Object(i.useSelector)(b.selectLocaleSettings),w=Object(i.useSelector)(b.selectConnectivitySettings),H=Object(i.useSelector)(I.f),V=Object(i.useDispatch)(),F=Object(n.useMemo)(()=>({connectivity:w,logLevels:_,mgmt:{...A,x_ssh_keys:(A.x_ssh_keys||[]).map(e=>({...e,id:m()()}))},rsyslogd:{...d.rsyslogd,...v},super_mail:{...d.super_mail,...G},super_smtp:{...d.super_smtp,...j},super_identity:{...d.super_identity,...M},super_mgmt:{...d.super_mgmt,...!H&&{override_inform_host_type:b.InformHostType.DEFAULT},...J(y)},ntpServers:Object(f.d)(x,"ntp_server_").map(e=>({ntp_server:e,id:m()()})),siteConfiguration:{country:{...P},locale:{...Y},siteName:D}}),[w,_,A,v,G,j,M,y,x]),k=Object(n.useMemo)(()=>({component:r.a.createElement(c.c,{id:"SETTINGS_CONTROLLER_CONFIGURATION_FORM_TITLE"}),message:"controller-configuration"}),[]),U=Object(n.useCallback)(e=>{V(Object(R.c)(e))},[V]),B=Object(n.useCallback)(Object(N.b)({...e,createToast:U})(e=>{const t=[V(Object(p.b)(X(e.logLevels,_)))],a=(e=>({...e,x_ssh_keys:e.x_ssh_keys?e.x_ssh_keys.map(e=>{const{id:t,...a}=e;return a}):[]}))(e.mgmt),n=(e=>{const{chatEnabled:t,chatAdminsEnabled:a,...n}=e;return{...n,live_chat:Z({chatEnabled:t,chatAdminsEnabled:a})}})(e.super_mgmt),r={...e.super_smtp},l=e.ntpServers.reduce((e,t,a)=>(e["ntp_server_"+(a+1)]=t.ntp_server,e),{}),i={...x,...b.NTP_DEFAULTS,...l},c={...e.siteConfiguration},m={...b.CONNECTIVITY_DEFAULTS,...e.connectivity};return Object(s.a)(Object(E.diff)(v,e.rsyslogd))||t.push(V(Object(b.saveSettings)((e=>{const{enabled:t,this_controller:a}=e;let{netconsole_enabled:n,netconsole_port:r,port:l}=e;return n&&a&&(n=!1),t&&!a||z(l)||({port:l}=d.rsyslogd),n&&!a||z(r)||({netconsole_port:r}=d.rsyslogd),{...e,netconsole_enabled:n,netconsole_port:r,port:l}})(e.rsyslogd)))),Object(s.a)(Object(E.diff)(w,e.connectivity))||t.push(V(Object(b.saveSettings)(m))),Object(s.a)(Object(E.diff)(A,a))||t.push(V(Object(b.saveSettings)(a))),Object(s.a)(Object(E.diff)(y,n))||t.push(V(Object(b.saveSettings)(n))),Object(s.a)(Object(E.diff)(M,e.super_identity))||t.push(V(Object(b.saveSettings)(e.super_identity))),Object(s.a)(Object(E.diff)(G,e.super_mail))||t.push(V(Object(b.saveSettings)(e.super_mail))),Object(s.a)(Object(E.diff)(j,r))||t.push(V(Object(b.saveSettings)(r))),Object(s.a)(Object(E.diff)(x,i))||t.push(V(Object(b.saveSettings)(i))),c.siteName!==F.siteConfiguration.siteName&&t.push(V(Object(h.h)(c.siteName))),Object(o.a)(c.country,F.siteConfiguration.country)||t.push(V(Object(b.saveSettings)(c.country))),Object(o.a)(c.locale,F.siteConfiguration.locale)||t.push(V(Object(b.saveSettings)(c.locale))),Promise.all(t)},{successMessage:"SETTINGS_SYSTEM_SAVE_SUCCESS",failureMessage:"SETTINGS_SYSTEM_SAVE_ERROR"}),[V,v,w,A,y,M,G,x]);return Object(l.f)([Object(O.fetchSites)(void 0,{crudCacheStrategy:{type:C.a.COMBINED}}),Object(b.fetchSettings)({type:C.a.CACHE}),Object(g.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:C.a.COMBINED}}),Object(T.fetchAPGroups)(void 0,{crudCacheStrategy:{type:C.a.COMBINED}})],r.a.createElement(L.b,{goBack:t,initialValues:F,isEdit:!a,isView:a,showBack:!0,title:k,validationSchema:me,onEscClicked:t,onSubmit:B,enableReinitialize:!0},r.a.createElement(Ke,null)))};t.default=()=>{const e=Object(l.h)();return r.a.createElement(qe,{onBack:e})}},1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return _})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return S})),a.d(t,"b",(function(){return b.a})),a.d(t,"a",(function(){return w}));var n=a(0),r=a.n(n),l=a(5),i=a(648),c=a(1136),s=a(208);const o=Object(l.c)(s.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,E=(Object(l.c)(i.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(l.c)(s.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),_=Object(l.c)(c.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,m=e=>r.a.createElement(E,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),S=e=>r.a.createElement(o,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var d=a(1851),T=a(375);const u=Object(l.c)(d.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,p=e=>l.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(T.b)(({theme:e,...t})=>r.a.createElement(u,Object.assign({headerRowClassName:p(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var b=a(1934),O=a(529),h=a(1743),g=a(2),I=a(30),L=a(15),N=a(2846),R=a(44),f=a(71),C=a(62);const A=Object(l.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,v=Object(l.c)(f.c)`
  > * {
    vertical-align: middle;
  }
`,M=Object(l.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,y=Object(l.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,G=Object(l.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,j=Object(l.c)(f.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,x=Object(l.c)(M,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,D=Object(l.c)(f.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,P=Object(l.c)(f.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,Y=Object(l.c)("div")`
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
`;var w=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:l,onRemoveItem:i,validationSchema:c,initialValues:s,onEditSubmit:o,useValuesInSchema:E=!1,max:m,useWindowTable:S=!1,addButtonText:T="COMMON_ACTION_ADD",invalid:u,...p}){const b=Object(n.useContext)(f.l),[w,H]=Object(n.useState)(!0),V=Object(n.useCallback)(t=>!t.disableRemove&&r.a.createElement(_,null,r.a.createElement(v,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{H(!1),i(t),await Promise.resolve(),H(!0)}},r.a.createElement(g.c,{id:"COMMON_ACTION_REMOVE"}))),[e,H,i]),F=Object(n.useMemo)(()=>S?N.a:d.a,[S]);return r.a.createElement(R.c,{enableReinitialize:!0,onSubmit:t=>{o(t[e])},initialValues:s,validationSchema:()=>E?I.a.lazy(e=>c(e)):c},({values:n,errors:c,setFieldValue:o,handleSubmit:E,handleReset:_,setTouched:S})=>r.a.createElement(r.a.Fragment,null,t.map((a,i)=>r.a.createElement(A,{inline:a.inline,isLast:i===t.length-1,key:a.name},r.a.createElement(M,{flexDirection:"column",width:"100%"},r.a.createElement(C.Field,Object.assign({disabled:n.editActive||n[e].length>=m,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?c[a.name]:u,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!b&&l&&i===t.length-1&&r.a.createElement(y,null,r.a.createElement(v,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),H(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),r=await S(a,!0);t.find(e=>r[e.name])||l(n),H(!0)},Icon:L.wb,disabled:n.editActive||n[e].length>=m||!n[a.name]},r.a.createElement(g.c,{id:T}))))),n.editActive?r.a.createElement(r.a.Fragment,null,n[e].map((n,l)=>r.a.createElement(j,{key:n.id,width:"100%"},p.columns.map((n,i)=>t[i]?r.a.createElement(x,{key:n.id,isLast:i===p.columns.length-1,flexDirection:"column",flex:"1 1 50%"},r.a.createElement(C.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${l}][${n.id}]`,type:t[i].type,fast:!0},"dropdown"!==t[i].type?{}:{options:t[i].options,translateLabel:!0,translateOptions:t[i].translateOptions,translatePlaceholder:!0,type:t[i].type,validated:t[i].validated}))):null))),r.a.createElement(D,{justifyContent:"flex-end",width:"100%"},r.a.createElement(P,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{_(),o("editActive",!1)}},r.a.createElement(g.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(f.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:E,disabled:Object(O.a)(Object(h.a)(n,"editActive"),Object(h.a)(s,"editActive"))},r.a.createElement(g.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&r.a.createElement(A,null,r.a.createElement(G,null,r.a.createElement(v,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{_(),o("editActive",!0)},Icon:L.ub},r.a.createElement(g.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&w&&r.a.createElement(Y,null,r.a.createElement(F,{columns:p.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:i?V:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),i=a(2),c=a(1946),s=a.n(c),o=a(1741),E=a(520),_=a(521);const m=Object(l.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:l=null})=>{const c=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),S=Object(_.a)(t),d=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),T=Object(n.useCallback)(e=>(e={},t={})=>S(e,t)&&d(e,t),[S,d]);return!!e&&r.a.createElement(s.a,{when:T(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(o.a,{actions:[{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>l?l(e):e()},{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:E.b,title:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>l?l(e):e()},r.a.createElement(m,null,r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1930:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,l]=Object(n.useState)(!1),i=Object(n.useRef)();return Object(n.useEffect)(()=>{l(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(i.current=setTimeout(()=>l(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),a}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return L})),a.d(t,"b",(function(){return R})),a.d(t,"c",(function(){return f}));var n=a(0),r=a.n(n),l=a(5),i=a(643),c=a(32),s=a(1932),o=a(8),E=a(15),_=a(45),m=a(17),S=a(189),d=a(41);const T=Object(l.c)(S.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var u=({video:e})=>{const t=Object(o.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(m.g)({modalType:d.a[a],modalProps:{closeModal:()=>t(Object(m.e)())}}))},[t,e]);return r.a.createElement(T,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(E.vb,{color:_.a["blue-3"]}))},p=a(1933),b=a(71),O=a(227);const h=Object(l.c)(b.c)`
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
`,g=Object(l.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,I=Object(l.c)(E.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var L,N=({video:e})=>{const t=Object(o.useDispatch)(),a=Object(o.useSelector)(O.a),l=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(m.g)({modalType:d.a[a],modalProps:{closeModal:()=>t(Object(m.e)())}}))},[t,e]);return r.a.createElement(h,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:l},r.a.createElement(g,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),r.a.createElement(I,{color:_.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(L||(L={}));const R=Object(l.c)(b.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,f=Object(l.c)(b.g)`
  * {
    line-height: 1.4 !important;
  }
`,C=Object(l.c)(i.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:l,video:i,online:o})=>{let E;switch(t){default:case L.BASIC:E=e;break;case L.CONFIGURED:E=r.a.createElement(f,{alignItems:"center"},e,!!n&&r.a.createElement(s.a,{section:n}),!!i&&o&&r.a.createElement(u,{video:i}));break;case L.STATUS:E=r.a.createElement(f,{alignItems:"center"},r.a.createElement(C,{variant:l}),r.a.createElement(R,{flex:"1",flexDirection:"column"},e,a&&r.a.createElement(c.a,null,a)));break;case L.UNCONFIGURED:E=r.a.createElement(f,{alignItems:"center"},!!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{section:n}),r.a.createElement(b.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(c.a,null,a))),!!i&&o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{video:i}),r.a.createElement(b.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(c.a,null,a))),!!i&&!o&&r.a.createElement(f,{alignItems:"center"},e))}return E}},1932:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),i=a(8),c=a(15),s=a(45),o=a(1936),E=a(189);const _=Object(l.c)(E.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(i.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(o.a)(e)),[t,e]);return r.a.createElement(_,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(c.vb,{color:s.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),i=a(8),c=a(15),s=a(45),o=a(1936),E=a(71),_=a(43);const m=Object(l.c)(E.c)`
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
`,S=Object(l.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,d=Object(l.c)(c.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(i.useDispatch)(),a=Object(i.useSelector)(_.i),l=Object(n.useCallback)(()=>t(Object(o.a)(e)),[t,e]);return r.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:l},r.a.createElement(S,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),r.a.createElement(d,{color:s.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E.d})),a.d(t,"c",(function(){return E.a}));var n=a(0),r=a.n(n),l=a(5),i=a(15),c=a(71);const s=Object(l.c)(c.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var o=({children:e,...t})=>r.a.createElement(s,Object.assign({alignItems:"center"},t),e,r.a.createElement(i.g,null)),E=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(17),r=a(41);const l=e=>Object(n.g)({modalType:r.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var r=a(0),l=a.n(r),i=a(5);var c=({children:e="",className:t=null,full:a=!1,offset:n=1,size:r=6,...c})=>{const s=a?12:r,o=a?0:n;return l.a.createElement("div",Object.assign({className:Object(i.b)("col-"+s,"offset-"+o,t)},c),e)};var s,o=({children:e="",offset:t=0,size:a=2})=>l.a.createElement("div",{className:Object(i.b)("col-"+a,"offset-"+t)},e),E=a(2),_=a(666),m=a.n(_),S=a(71),d=a(1964),T=a.n(d),u=a(140),p=a.n(u),b=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(s||(s={}));const O=p.a.bind(T.a);var h=({className:e=null,status:t=s.NEUTRAL,...a})=>l.a.createElement(b.a,Object.assign({},a,{className:O("ubntStatusText","ubntStatusText--"+t,e)})),g=a(254),I=a(1944);const L=Object(i.c)(S.g)`
  border: 1px solid ${g.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,N=Object(i.c)(h)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var R=({state:e,className:t=null,...a})=>l.a.createElement(L,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),l.a.createElement(N,{message:I.b[e],status:s.WARNING})),f=a(322),C=a(82),A=a(8),v=a(45),M=a(70),y=a(20);const G={BORDER_WIDTH:2},j={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},x=({type:e,size:t,width:a,height:n})=>{switch(e){case f.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:r,TOP:l}=j;return{top:l,left:e,padding:`${n}px ${r}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function D({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:l,width:c,height:s}){const o=Object(A.useSelector)(f.selectHighlight),[E,_]=Object(M.c)(0),[m,S]=Object(M.c)(!1),d=Object(r.useRef)(null),T=Object(r.useMemo)(()=>(({color:e,show:t,style:a})=>Object(i.a)({"&::before":{border:`${G.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:v.a["blue-light-3"],show:m,style:{...x({type:e,size:l,width:c,height:s}),...a}}),[m,e,a,l,c,s]);return Object(r.useEffect)(()=>{if(Number.isFinite(n)&&n>E)_(E+1);else if(d.current&&t===o.id&&o.type===e){window.getComputedStyle(d.current).border,window.getComputedStyle(d.current).boxShadow;let t=d.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:r,top:l}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:r,top:l}=t.current.getBoundingClientRect();switch(a){case f.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=j,i=l+Object(y.a)(n,"top",a),c=i+r+Object(y.a)(n,"paddingBottom",e)+Object(y.a)(n,"paddingTop",t)+2*G.BORDER_WIDTH;return{bottom:c,height:c-i,top:i}}}})({height:s,highlightRef:d,type:e,highlightStyle:a}),{bottom:i,height:c,top:o}=n.getBoundingClientRect(),E=t>i,_=r>c,m=15;l<o||_?n.scrollTo({behavior:"smooth",top:n.scrollTop-o+l-m}):E&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-i+m})}S(!0)}},[s,E]),Object(r.useEffect)(()=>{m||o.id!==t||_(e=>e+1),m&&o.id!==t&&S(!1)},[o.id,m]),{highlightClassName:T,highlightRef:d}}const P=Object(i.c)(m.a)`
  color: ${C.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,Y=Object(i.c)(m.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,w=i.a`
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
`;var H=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:r={},dontTranslateText:c=!1,highlightDelay:s=null,highlightStyle:o=null,htmlFor:_=null,offset:m=0,size:S=5,useHtml:d=!1})=>{const{highlightClassName:T,highlightRef:u}=D({type:f.SearchHighlightType.FIELD,forId:_,highlightStyle:o,highlightDelay:s,size:S}),p=!(!n&&!a),b={["col-"+S]:!0,["offset-"+m]:m>0},O=d?E.b:E.c;return l.a.createElement("div",{className:Object(i.b)(b,w,T),ref:u},l.a.createElement("div",{className:"mb-1"},l.a.createElement(Y,{className:"settingsGridLabel",htmlFor:_,primary:!0},c?e:l.a.createElement(E.c,{id:e})),t&&l.a.createElement(R,{state:t})),p&&l.a.createElement("div",null,l.a.createElement(P,{className:"settingsGridDescription",htmlFor:_,secondary:!0},n?l.a.createElement(O,{id:n,values:r}):a)))};const V=i.a`
  max-width: 960px;
`,F=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:r=8,noWidthLimit:c=!1})=>{const s=n?4:r;return l.a.createElement("div",{className:Object(i.b)("row","mt-"+s,c?null:V,t),ref:a},e)};var k=l.a.forwardRef((e,t)=>l.a.createElement(F,Object.assign({forwardedRef:t},e)));var U=e=>l.a.createElement("div",{className:"mt-2 mb-6"},l.a.createElement(b.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const B=Object(i.c)("div")`
  flex: 0 1 480px;
`,$=Object(i.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var W=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:r=null,section:c=null})=>{const s=g.b.sectionColors.common;return l.a.createElement(k,{className:t,marginTop:0},l.a.createElement(B,null,l.a.createElement($,{className:Object(i.b)("mt-8","type-larger"),style:{color:s}},l.a.createElement(E.c,{id:e})),a&&l.a.createElement(b.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(i.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,K=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>l.a.createElement(z,{className:Object(i.b)("container","px-8",t),noDivider:n},l.a.createElement("div",{className:Object(i.b)({"pb-8":!a})},e));K.Content=c,K.Icon=o,K.Label=H,K.Row=k,K.SectionHeader=U,K.Subheader=W;var q=a(284);const X=Object(i.c)(q.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Q=e=>l.a.createElement(X,Object.assign({},e)),J=a(1926),Z=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(A.useSelector)(Z.C);return e>0?l.a.createElement(ee.a,{alignItems:"center"},l.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",l.a.createElement(E.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):l.a.createElement(E.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1938:function(e,t,a){"use strict";a.d(t,"b",(function(){return P})),a.d(t,"a",(function(){return v}));var n=a(0),r=a.n(n),l=a(5),i=a(2),c=a(44),s=a(2847),o=a(2658),E=a(1929),_=a(783),m=a(71),S=a(1940),d=a(15),T=a(32),u=a(42),p=a(1847),b=a(782),O=a(1930);const h=l.a`
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
`;var g=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:l,...i})=>{const c=Object(O.a)(),s=Object(b.a)(l),o=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(p.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:h,mountOnEnter:!0},i),a)),[a,t,s,c,e,i]);return r.a.createElement(r.a.Fragment,null,o)};const I=l.a`
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
`;var L=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:l,...i})=>{const c=Object(O.a)(),s=Object(b.a)(l),o=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(p.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:I,mountOnEnter:!0},i),a)),[a,t,s,c,e,i]);return r.a.createElement(r.a.Fragment,null,o)};const N=Object(l.c)(m.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,R=Object(l.c)(m.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,f=Object(l.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,C=Object(l.c)(m.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,A=Object(l.c)(T.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var v=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:l,ignoredPaths:i})=>{const{motif:c}=Object(u.a)();return r.a.createElement(L,{ignoredPaths:i},r.a.createElement(R,{flex:"none",height:"65px"},r.a.createElement(g,{ignoredPaths:i},r.a.createElement(m.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(N,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(C,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:c},r.a.createElement(d.f,{size:"original"}))),r.a.createElement(f,null,r.a.createElement(A,{weight:"bold"},e.component)),r.a.createElement(N,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!l&&r.a.createElement(C,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(d.y,{size:"original"})))))))};const M=Object(l.c)(m.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,y=Object(l.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,G=Object(l.c)(m.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,j=Object(l.c)(s.a)`
  transition: height 100ms ease, transform 100ms ease; /* TODO: Remove with next ui-components update (v25.1.1 +)  */
  > :first-child {
    max-width: ${_.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,x=Object(l.c)(m.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,D=Object(l.c)(m.k)`
  height: 100%;
  width: 100%;
`;var P=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:l,isView:s,showBack:_,title:d,unsavedChangesModalIgnoredPaths:T,onEscClicked:u,submitText:p="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:b=!1,customFooterButtons:O,hidddenHeader:h,...g})=>r.a.createElement(c.c,Object.assign({enableReinitialize:!0},g),({dirty:l,handleReset:c,handleSubmit:g,isSubmitting:I})=>r.a.createElement(y,{autoComplete:"off",onSubmit:g},r.a.createElement(D,{vertical:!0},!h&&r.a.createElement(v,{goBack:a,hideClose:n,showBack:_,title:d,onEscClicked:u,ignoredPaths:T}),r.a.createElement(S.a,{ignoredPaths:T},r.a.createElement(x,{flex:"1"},r.a.createElement(M,{flex:"none",flexDirection:"column"},e))),!t&&!s&&r.a.createElement(E.a,{ignoredPaths:T,when:l&&!I}),(!s||b)&&r.a.createElement(j,{active:l||b},r.a.createElement(m.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&r.a.createElement(G,null,O(I)),!s&&r.a.createElement(m.g,null,r.a.createElement(o.a,{disabled:!l||I,type:"button",variant:"default",onClick:c},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(o.a,{disabled:!l||I,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:p}))))))))},1940:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1847),i=a(5),c=a(782),s=a(1930);const o=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:i,...E})=>{const _=Object(s.a)(),m=Object(c.a)(a),S=Object(n.useMemo)(()=>r.a.Children.map(i,a=>null===a?a:r.a.createElement(l.a,Object.assign({appear:t||!m||_,in:t||!m||_,timeout:e,classNames:o,mountOnEnter:!0},E),a)),[i,t,m,_,e,E]);return r.a.createElement(r.a.Fragment,null,S)}},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const r={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1947:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1847),i=a(5);const c=(e,t)=>i.a`
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
`;t.a=r.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:i="0 0 32px",wrap:s=!1,children:o,...E})=>{const _=Object(n.useMemo)(()=>r.a.Children.map(o,(n,i)=>r.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,void 0),mountOnEnter:!0},E),null===n?r.a.createElement("div",null):n)),[o,a,t,E,e]);return s?r.a.createElement(l.a,Object.assign({appear:t,in:t,timeout:e,classNames:c(a,i),mountOnEnter:!0},E),r.a.createElement("div",null,o)):r.a.createElement(r.a.Fragment,null,_)})},2005:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return s}));var n=a(16),r=function(e,t){var a=t.successMessage,n=t.failureMessage;if((a||n)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},l=function(e){return function(t){return function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(i,c){var s=c.props||t;r(s,l);var o=s.createToast,E="function"==typeof l?l(i):l,_=E.msgValues,m=E.successMessage,S=E.failureMessage;a(i,s,c).then((function(){return m&&o({icon:n.a.success,message:m,values:_}),e(c,t)})).catch((function(e){S&&o({icon:n.a.danger,message:S,values:_,errorMessage:e.msg,errorValues:e}),c.setSubmitting(!1)}))}}}},i=l((function(e){return e.setStatus({isSubmitted:!0})}))(),c=l((function(e){return e.setStatus({isSubmitted:!0})})),s=(l((function(e){return e.props.onClose()}))(),l((function(e,t){return t.onBack()})))},2056:function(e,t,a){"use strict";a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return S})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return T})),a.d(t,"e",(function(){return u}));var n=a(12),r=a.n(n),l=a(179),i=a.n(l),c=a(108),s=a.n(c),o=a(364);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=function(e,t){return Object.entries(e||{}).reduce((function(e,a){var n=s()(a,2),r=n[0],l=n[1];return r.startsWith(t)&&l?[].concat(i()(e),[l]):e}),[])},S=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=a>e.length?Array.from(Array(a),(function(t,a){return a<e.length?e[a]:n})):e;return r.reduce((function(e,a,n){return e[t+(n+1)]=a,e}),{})},d=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Object.entries(e||{}).reduce((function(e,t){var n=s()(t,2),r=n[0],l=n[1];return a.find((function(e){return r.startsWith(e)}))||(e[r]=l),e}),{})},T=function(e,t){return Object.keys(e).reduce((function(e,a){return a.startsWith(t)?e+1:e}),0)},u=function(e,t){return _(_({},e),Object.entries(Object(o.a)(e,t)).reduce((function(e,t){var a=s()(t,2),n=a[0],l=a[1];return _(_({},e),{},r()({},n,null===l?"":l))}),{}))}},2118:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return S}));var n=a(12),r=a.n(n),l=a(6),i="/v2/api/timezones";function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.q)("timezones",i,e,s({idField:"timezone"},t))},E=a(20),_=a(4),m=Object(l.A)(o()),S=Object(_.a)((function(e){return Object(E.a)(m(e),"data",[])}),(function(e){return e.map((function(e){return{label:"(UTC".concat(e.offset,") ").concat(e.timezone.replace(/_/g," ")),value:e.timezone}}))}))},2160:function(e,t,a){"use strict";t.a={MIN:1,MAX:65535}},2188:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(12),r=a.n(n),l=a(6),i="/api/s/{site}/stat/ccode";function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.q)("country",i,e,s({idField:"key"},t))},E=a(20),_=a(4),m=Object(l.A)(o()),S=function(e){return Object(E.a)(m(e),"data",[])},d=Object(_.a)(S,(function(e){return e.map((function(e){return{label:e.name,value:e.code}}))}));Object(_.a)(S,(function(e){return e.map((function(e){return{label:e.name,value:e.key}}))}))},2516:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return m}));var n=a(377),r=a.n(n),l=a(805),i=a.n(l),c=a(37),s=a(6),o=(a(27),a(50),a(83)),E=function(){var e=window.navigator,t=e.userAgent,a=e.language;return Object(s.p)(c.a.SUPPORT,"/api/s/{site}/cmd/system",{userAgent:t,language:a})},_=function(e){return function(t){return t(function(e){return Object(s.p)(c.a.SET_PARAM,"/api/s/{site}/cmd/system",e)}(e))}},m=function(e){return function(){var t=i()(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(e){return a(_(e))})));case 2:if(!e.length){t.next=5;break}return t.next=5,a(Object(o.b)());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);