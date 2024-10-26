(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[13],{1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const c={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2018:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{fetch(e,{mode:"no-cors"}).then(()=>{a(!0)}).catch(()=>a(!1))},[e]),t}},2892:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(5),i=a(8),r=a(36),l=a(48),s=a(20),u=a(1944),d=a(1747),m=a(374),h=a(282),b=a(230),p=a(153),f=a(169),O=a(451),S=a(18),E=a(50),g=a(280),j=a(83),v=a(559),N=a(1100),C=a(178),_=a(17),I=a(41),x=a(284),T=a(455),k=a(376),y=a(70),A=a(226),P=a(2018),B=a(6),w=a(322),M=a(2),$=a(2914),D=a(32),G=a(15),R=a(21);var U=()=>{const e=Object(i.useSelector)(j.d);return c.a.createElement(R.a,{flexDirection:"column",marginBottom:4},c.a.createElement(D.a,{color:"primary"},c.a.createElement(M.c,{id:"SETTINGS_SUBNAV_NETWORK_WEB_APP",values:{version:e}})))};const H=Object(o.c)("a")`
  width: fit-content;
  font-size: ${({theme:e})=>e.fontSize["font-size-caption"]};
`;var z=()=>{const e=Object(i.useSelector)(j.d);return c.a.createElement(H,{href:`${A.a.releaseNotes}/${e}`,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(M.c,{id:"SETTINGS_SUBNAV_RELEASE_NOTES"}))},F=a(829),L=a(71);const V=Object(o.c)(G.W)`
  margin-right: 8px;
`,W=Object(o.c)($.a)`
  /* Replace \`border-top\` with \`padding-top\` and remove \`border-left\` match the design */
  border-left: none !important;
  border-top: none !important;
  padding-top: 1px;
  position: relative;

  > ul:last-child {
    /* Make \`SettingsNavigation\` items list scrollable to be able to display all found search results */
    /* Although this *could* be done in \`ui-components\` it would require all UniFi apps \`SettingsNavigation\` elements to have header of the same height. */
    max-height: calc(100% - 64px);
    overflow: auto;
  }
`,Y=Object(o.c)(D.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-l2"]} !important;
`;var J=({currentSection:e,onNavigate:t})=>{const a=Object(n.useContext)(w.SearchContext),{appContext:o,groupedResults:r,value:l}=a,s=null==l||""===l,u=Object(y.m)(),d=Object(w.useExecuteAction)(o),m=Object(i.useSelector)(w.selectSelectedResult),h=Object(n.useMemo)(()=>(null==r?void 0:r.length)>0?r.reduce((e,{group:t,results:a},n)=>{const c=F.a.find(({id:e})=>e===t.id);return c&&(e.push({...c,label:c.name,level:"primary"}),e.push({id:t.id+"-secondary-spacer",level:"secondary",spacer:!0})),e.concat(a.map(e=>{var t;return{breadcrumbs:(null===(t=e.translatedBreadcrumbs)||void 0===t?void 0:t.length)>0?e.translatedBreadcrumbs:void 0,id:e.id,label:e.translatedName,level:"secondary",translatedSearchAction:e}})).concat(n<r.length-1?{id:t.id+"-group-spacer",level:"primary",spacer:!0}:[])},[]):[{id:"no-search-results-found",label:c.a.createElement(L.g,{alignItems:"center"},c.a.createElement(V,{color:u.motifPalette.info}),c.a.createElement(Y,{color:"secondary"},c.a.createElement(M.c,{id:"COMMON_SEARCH_NO_RESULTS"}))),level:"primary"}],[r,u]),b=Object(n.useCallback)((e,a)=>{a.path&&t("/"+a.path)},[t]),p=Object(n.useCallback)((e,t)=>d(t.translatedSearchAction),[d]);return c.a.createElement(W,{Header:c.a.createElement(w.Search,null),navItems:F.a,searchItems:s?[]:h,selectedNavItemId:s?null==e?void 0:e.id:void 0,selectedSearchItemId:s||null==m?void 0:m.id,onSelectNavItem:b,onSelectSearchItem:p,Footer:c.a.createElement(L.g,{flexDirection:"column"},c.a.createElement(U,null),c.a.createElement(z,null))})};var q=c.a.memo(e=>c.a.createElement(w.SearchProvider,null,c.a.createElement(J,Object.assign({},e))),(e,t)=>e.currentSection===t.currentSection),K=a(2929),Q=a(1847),X=a(235),Z=a(43),ee=a(306),te=a(1135),ae=a(569);var ne=e=>{const t=Object(i.useSelector)(ae.b),a=Object(r.k)(),o=Object(r.l)(),{node:l,fullPath:s,params:u}=Object(n.useMemo)(()=>Object(ee.b)(t,o.pathname),[o.pathname,t]),{name:d}=l;return c.a.createElement(te.a,Object.assign({buttonText:c.a.createElement(M.c,{id:d?"COMMON_404_BUTTON":"COMMON_404_BUTTON_GENERIC",values:{destinationName:d}}),onClickButton:()=>a.push(Object(ee.a)(s,u))},e))};const ce=Object(o.c)(K.a)`
  display: flex;
  width: 100%;
  height: 100%;
`,oe=Object(o.c)("div")`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;var ie=()=>{const e=Object(r.m)(),t=Object(i.useSelector)(Object(Z.k)(null==e?void 0:e.site));let a=!1;const o=Object(i.useSelector)(ae.a);return c.a.createElement(ce,null,c.a.createElement(r.g,null,o.map(({path:e,fullPath:o,component:i,redirect:l})=>{if(i){const t=i;return c.a.createElement(X.a,{exact:!0,key:e,path:o},({match:e})=>(a=a||!!e,c.a.createElement(Q.a,{in:null!==e,timeout:{enter:300,exit:100},unmountOnExit:!0},c.a.createElement(oe,null,c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(t,null))))))}return l?c.a.createElement(X.a,{exact:!0,key:e,path:o},c.a.createElement(r.c,{to:`${t}/${l}`})):null}),a&&c.a.createElement(X.a,{component:ne})))},re=a(2930),le=a(215),se=a(392);const ue=Object(o.c)(re.a)`
  animation: unset !important;

  > div {
    border-bottom: 1px solid ${({theme:e})=>e.motifPalette.disabled02} !important;
    height: 48px !important;
    background: ${({theme:e})=>e.motifPalette.uiBase} !important;
  }
`,de=Object(o.c)(le.a)`
  margin-left: 3px;
`,me=Object(o.c)("div")`
  background: ${({theme:e})=>e.motifPalette.info};
  margin-right: 10px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.motifPalette.white};
  text-align: center;
  font-size: ${({theme:e})=>e.fontSize["font-size-xs"]};
  position: relative;

  &::after {
    content: 'i';
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,he=Object(o.c)(L.g)`
  position: absolute;
  right: 67px;
`,be=Object(o.c)("div")`
  width: 1px;
  height: 17px;
  background: ${({theme:e})=>e.motifPalette.disabled02};
  margin-left: 15px;
`;var pe=()=>{const e=Object(r.k)(),t=Object(i.useSelector)(S.P),[a,o]=Object(n.useState)(!t.bypassHybridSettingsNotice),[l,s]=Object(n.useState)(!1),u=Object(y.i)("system"),d=Object(i.useDispatch)();return c.a.createElement(ue,{isOpen:a,onClose:()=>{d(Object(S.k)({...t,bypassHybridSettingsNotice:l})),o(!1)}},c.a.createElement(L.g,{alignItems:"center"},c.a.createElement(me,null),c.a.createElement(D.a,{color:"tertiary"},c.a.createElement(M.c,{id:"HYBRID_SETTINGS_NOTICE"})),c.a.createElement(de,{variant:"inline",onClick:()=>e.push(u)},c.a.createElement(M.c,{id:"HYBRID_SETTINGS_NOTICE_CTA"}))),c.a.createElement(he,{alignItems:"center"},c.a.createElement(se.a,{id:"dontShowAgain",checked:l,onChange:e=>s(e.target.checked)},c.a.createElement(D.a,{color:"tertiary"},c.a.createElement(M.c,{id:"HYBRID_SETTINGS_NOTICE_DONT_SHOW_AGAIN"}))),c.a.createElement(be,null)))},fe=a(525),Oe=a(520);const Se=Object(o.c)(x.b)`
  flex-direction: column;
  border-left: 1px solid ${({theme:e})=>e.motifPalette.ui03};
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,Ee=Object(o.c)("div")`
  display: flex;
  height: 100%;
  transition: all 500ms ease;
  width: 100%;
`,ge=Object(o.c)("div")`
  > div > div {
    align-items: flex-start;
    background-color: ${({theme:e})=>e.motifPalette.uiBase} !important;
    display: flex;
    justify-content: center;
    outline: 0;
    overflow: auto;
    padding: 0;
    position: absolute !important;
    z-index: 600;
  }
`,je={fetchAPGroups:m.fetchAPGroups,fetchWlanEnrichedConfiguration:d.fetchWlanEnrichedConfiguration,fetchCountryChannels:h.a,fetchDevicesBasic:b.fetchDevicesBasic,fetchFeatures:p.c,fetchHealth:f.b,fetchRadiusProfiles:O.fetchRadiusProfiles,fetchSettings:E.fetchSettings,fetchSites:g.fetchSites,fetchSysInfo:j.b,loadTranslations:C.c};t.default=Object(l.compose)(Object(i.connect)(null,je),Object(k.c)(({fetchAPGroups:e,fetchWlanEnrichedConfiguration:t,fetchCountryChannels:a,fetchDevicesBasic:n,fetchFeatures:c,fetchHealth:o,fetchRadiusProfiles:i,fetchSettings:r,fetchSites:l,fetchSysInfo:s,loadTranslations:u})=>(e(),t(),a(),n(),i(),l(),Promise.all([o(),r(),s(),u("settings"),c(void 0,{crudCacheStrategy:{type:B.a.CACHE}})])),void 0,"settings-page"))(({history:e,location:{pathname:t},match:{path:a,url:o}})=>{const{params:{urlSection:l,urlSubsection:d}={}}=Object(r.j)(t.slice(t.indexOf(o)),{path:a+"/:urlSection/:urlSubsection?"})||{},m=fe.d.find(e=>e.path===l),h=Object(s.a)(m,"subsections",[]).find(e=>e.path===d);Object(y.o)("EVT_AD_BackupCreated",v.f,{id:"settings/backupCreated",forSuperSite:!0,unregisterOnUnmount:!1}),Object(y.o)("EVT_AD_BackupFailed",v.j,{id:"settings/backupFailed",forSuperSite:!0,unregisterOnUnmount:!1}),Object(y.o)("radio-ai:plan",N.b,{id:"settings/radioAi",forSuperSite:!1,unregisterOnUnmount:!1});const b=Object(n.useCallback)(e=>{if(h){return("function"==typeof h.featureState?h.featureState(e):h.featureState)===u.a.comingSoon}return!1},[h]),f=Object(i.useDispatch)(),O=Object(i.useSelector)(b),E=Object(i.useSelector)(S.C),g=Object(i.useSelector)(S.P),j=Object(i.useSelector)(Object(p.d)(p.a.LEGACY_UI_SUPPORTED)),C=Object(n.useCallback)(t=>{e.push(`${o}${t}`)},[e,o]),k=Object(n.useCallback)(()=>{f(Object(S.k)({hideV3SettingsIntro:!0})),f(Object(_.e)())},[f]);Object(n.useEffect)(()=>()=>function(e){if(!e)return;const t=Object(Oe.c)();if(!/^\/(\w)+\/settings(\/|$)/.test(window.location.pathname)&&t&&t.childElementCount){e(Object(_.e)());const a=Object(Oe.b)();if(a){const e=t.parentNode.removeChild(t);a.appendChild(e),setTimeout((function t(){e.childElementCount?setTimeout(t):a.removeChild(e)}))}}}(f),[]);const B=Object(P.a)(A.a.feStaticAssets+"/videos");return Object(n.useEffect)(()=>{E.name&&!g.hideV3SettingsIntro&&B&&f(Object(_.g)({modalType:I.a.SETTINGS_INTRO,modalProps:{closeModal:k}}))},[!!E.name,g.hideV3SettingsIntro,B]),c.a.createElement(Se,null,j&&c.a.createElement(pe,null),c.a.createElement(Ee,null,c.a.createElement(q,{onNavigate:C,currentSection:m}),c.a.createElement(x.a,null,c.a.createElement(ge,{id:"modal-settings-container"}),c.a.createElement(T.b,{disabled:O},c.a.createElement(ie,null)))))})}}]);