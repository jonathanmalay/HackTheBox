(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[14],{1958:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return W})),a.d(t,"b",(function(){return P})),a.d(t,"e",(function(){return H})),a.d(t,"f",(function(){return G})),a.d(t,"g",(function(){return J})),a.d(t,"d",(function(){return Z}));var n=a(0),c=a.n(n),i=a(5),r=a(1917),l=a(21);const o=Object(i.c)(l.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,s=Object(i.c)(r.a)`
  bottom: -1px;
`;var d=({isLoading:e,children:t,...a})=>c.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel"}),t,c.a.createElement(s,{isLoading:e,placement:"bottom"})),m=a(8);const p=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen};var b=a(787),u=a(18),g=a(2),h=a(1913),E=a(2935),O=a(2905),C=a(529),f=a(2825);const x=Object(i.c)(f.a)`
  padding: 24px;
`;var j=({columns:e,columnLabels:t,tableType:a})=>{var i;const r=Object(m.useDispatch)(),l=(null===(i=Object(m.useSelector)(Object(u.I)(a)))||void 0===i?void 0:i.initialColumns)||[],o=Object(n.useMemo)(()=>Object.values(e).every(e=>l.includes(e)),[l]),s=Object(n.useCallback)(()=>{const t=o||(null==l?void 0:l.length)?[]:Object.values(e);r(Object(u.S)(a,{initialColumns:t},!0))},[r,o,a,l]),d=Object(n.useMemo)(()=>[{full:!0,id:"showAllFields",checked:o||!!(null==l?void 0:l.length)&&"mixed",children:c.a.createElement(g.c,{id:"COMMON_COLUMN_VISIBILITY_SHOW_ALL_FIELD"}),onChange:s}].concat(Object.values(e).map(e=>({full:!0,id:e,checked:l.includes(e),children:(null==t?void 0:t[e])?c.a.createElement(g.b,{id:t[e]}):e,onChange:({target:{checked:t}})=>{const n=t?[...l,e]:l.filter(t=>t!==e);r(Object(u.S)(a,{initialColumns:n},!0))}}))),[l,a]);return c.a.createElement(x,{spacing:"flush",items:d,variant:"list"})};const T=Object(i.c)(h.a)`
  width: 258px !important;
`;var _;!function(e){e.COLUMNS="columns",e.FILTERS="filters"}(_||(_={}));var A=({filterTitleLabel:e="COMMON_CONTROL_PANEL_FILTER_TITLE",isOpen:t,onClose:a,columnTabProps:i,renderFilterDrawerContent:r,footerProps:l})=>{var o;const[s,d]=Object(n.useState)(_.FILTERS),{tableType:p}=i||{tableType:null},b=Object(m.useDispatch)(),h=(null===(o=Object(m.useSelector)(Object(u.I)(p)))||void 0===o?void 0:o.initialColumns)||[],f=l&&s===_.COLUMNS,x=Object(n.useMemo)(()=>{var e,t;return f&&Object(C.a)(null===(t=null===(e=null===u.c||void 0===u.c?void 0:u.c.tables)||void 0===e?void 0:e[p])||void 0===t?void 0:t.initialColumns,h)},[f,p,h]),A=Object(n.useCallback)(()=>{var e,t,a;const n=[...null!==(a=null===(t=null===(e=null===u.c||void 0===u.c?void 0:u.c.tables)||void 0===e?void 0:e[p])||void 0===t?void 0:t.initialColumns)&&void 0!==a?a:[]];b(Object(u.S)(p,{initialColumns:n},!0))},[b,p]),y=Object(n.useCallback)(({id:e})=>d(e),[d]),v=i?c.a.createElement(E.a,{onSelectTab:y,tabs:[{id:_.FILTERS,label:c.a.createElement(g.c,{id:"COMMON_CONTROL_PANEL_FILTERS"}),render:r},{id:_.COLUMNS,label:c.a.createElement(g.c,{id:"COMMON_CONTROL_PANEL_COLUMNS"}),render:()=>c.a.createElement(j,{columns:i.columns,columnLabels:i.columnLabels,tableType:p})}]}):r(),w=Object(n.useMemo)(()=>f?{label:c.a.createElement(g.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_COLUMNS"}),onClick:A,disabled:x}:l,[f,l,x,A]),F=Object(n.useCallback)(()=>{a(),d(_.FILTERS)},[a,d]);return c.a.createElement(T,{in:t,renderHeader:()=>null,onClose:a,side:"left"},t&&c.a.createElement(O.a,{footerProps:w,headerProps:{label:c.a.createElement(g.c,{id:e})},onClose:F},v))},y=a(32),v=a(36),w=a(2521);var F=({items:e,...t})=>{const{params:a,path:n}=Object(v.n)(),i=Object(v.l)(),r=Object(v.k)(),l=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,i);return c.a.createElement(w.a,Object.assign({tabs:e,selectedTab:null==l?void 0:l.id,onSelectTab:({path:e,params:t={}})=>r.push(Object(v.i)(e,{...a,...t}))},t))};const I=Object(i.c)(F)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var L=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...c})=>({id:e,label:t,disabled:"function"==typeof a?a(c):a,path:n})),[e]);return t?c.a.createElement(I,{selectedTabBold:!0,items:t}):null},S=a(111),D=a(15);const R=Object(i.c)(l.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,B=Object(i.c)(S.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  min-width: 130px;
  white-space: nowrap;
`;function N({filterTitleLabel:e="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return c.a.createElement(R,{alignItems:"center"},c.a.createElement(D.M,{size:"original"}),c.a.createElement(B,{message:e}))}var M=a(215);var P=Object(i.c)(M.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const k=Object(i.c)(P)`
  z-index: 5;
`;var z=({filterTitleLabel:e,items:t})=>{const a=Object(m.useDispatch)();return c.a.createElement(l.a,{height:"100%"},c.a.createElement(k,{onClick:()=>a(Object(b.b)(!0))},c.a.createElement(N,{filterTitleLabel:e})),t)};const $=Object(i.c)(y.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;var U=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterTitleLabel:i,items:r,title:o})=>{const s=(null==e?void 0:e.length)>1,m=!s&&1===e.length;return c.a.createElement(d,{isLoading:a},!t&&c.a.createElement(z,{filterTitleLabel:i,items:r}),s&&c.a.createElement(L,{routes:e}),m&&c.a.createElement($,{weight:"bold"},e[0].label),o&&c.a.createElement($,{weight:"bold",hideFilterButton:t},c.a.createElement(g.c,{id:o})),c.a.createElement(l.a,{height:"100%",flex:s||o||m?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var W=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:i,filterFooterProps:r,columnTabProps:l,renderFilterDrawerContent:o,filterTitleLabel:s,items:d,title:g,onClose:h})=>{var E;const O=Object(m.useDispatch)(),C=Object(m.useSelector)(p),f=(null===(E=Object(m.useSelector)(Object(u.I)(null==l?void 0:l.tableType)))||void 0===E?void 0:E.initialColumns)||[];Object(n.useEffect)(()=>()=>{O(Object(b.b)(!1))},[]);const x=Object(n.useCallback)(()=>{O(Object(b.b)(!1)),null==h||h(),(null==l?void 0:l.tableType)&&O(Object(u.S)(l.tableType,{initialColumns:f}))},[O,h,null==l?void 0:l.tableType,f]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{isOpen:C,filterTitleLabel:s,onClose:x,columnTabProps:l,renderFilterDrawerContent:()=>C&&o,footerProps:r}),c.a.createElement(U,{routes:e,hideFilterButton:t,isLoading:a,filterTitleLabel:s,items:d,title:g},i))},Y=a(1925);var H=Object(i.c)(Y.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var G=Object(i.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`;const V=i.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,q=i.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function J(e){return c.a.createElement(w.a,Object.assign({className:V,tabClassName:q},e))}var K=a(1732);const X=Object(i.c)(y.a)`
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,Q=Object(i.c)("div",{shouldForwardProp:e=>"toggleStyle"!==e})`
  justify-content: space-between;
  margin-top: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginTop)&&void 0!==t?t:8}}px;
  margin-right: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginRight)&&void 0!==t?t:0}}px;
  margin-bottom: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginBottom)&&void 0!==t?t:0}}px;
  margin-left: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginLeft)&&void 0!==t?t:0}}px;
  width: auto !important;

  label {
    margin-left: 0;
  }
`;var Z=({checked:e,disabled:t,id:a,onChange:n,text:i,toggleStyle:r})=>c.a.createElement(Q,{toggleStyle:r},c.a.createElement(K.a,{checked:e,id:a,onChange:n,disabled:t},"string"==typeof i?c.a.createElement(X,{size:"body"},c.a.createElement(g.c,{id:i})):i))},2094:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(23),r=a(1),l=a(2),o=a(5),s=a(95),d=Object(o.a)("text-align:right;");function m(e){var t=e.start,a=e.end,n=e.intl,r=e.timezone,l="",o="";return Object(s.g)(t,r)&&Object(s.g)(a,r)?l=n.formatMessage({id:"COMMON_DATES_TODAY"}):Object(i.differenceInMonths)(a,t)>1?(l=Object(s.e)(t,r,"MMM Do, YYYY"),o=Object(s.e)(a,r,"MMM Do, YYYY")):Object(i.differenceInDays)(a,t)<1?l=Object(s.e)(t,r,"MMM Do, YYYY"):(l=Object(s.e)(t,r,"MMM Do"),o=Object(s.e)(a,r,"MMM Do")),c.a.createElement("div",{className:d},"".concat(l," ").concat(o&&" - ".concat(o)))}m.propTypes={start:r.PropTypes.instanceOf(Date).isRequired,end:r.PropTypes.instanceOf(Date).isRequired,timezone:r.PropTypes.string.isRequired,intl:l.g.isRequired},t.a=Object(l.f)(m)},2117:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a(37),c=a(6),i=a(28);const r=(e,t)=>Object(c.p)(n.a.RESET_DPI,"/api/s/{site}/cmd/stat",{},e&&t?Object(i.a)(e,t):{});var l=a(20);const o=e=>Object(l.a)(Object(c.w)(r(),e.models),"pending",!1)},2154:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(15);var l=a(70);const o=Object(i.c)("img")`
  height: 22px;
  width: 22px;
  margin-right: 4px;
`,s=Object(i.c)(r.R)`
  margin: 0 9px 0 1px;
  color: #c2c4ce;
`;t.a=({name:e,iconFileName:t})=>{const[a,i]=Object(n.useState)(null),r=Object(n.useCallback)(()=>"this.style.display='none'",[]),d=Object(l.e)();return Object(n.useEffect)(()=>{const a=new Image,n=t&&encodeURI("https://static.ubnt.com/dpi/"+t)||null;d.current&&i(c.a.createElement(s,{width:18,height:18})),a.onload=()=>d.current&&i(c.a.createElement(o,{src:n,alt:"Application "+e,onError:r})),a.onerror=()=>i(c.a.createElement(s,{width:18,height:18})),a.src=n},[e,t,r,d]),a}},2173:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(5),r=a(15),l=a(45),o=a(32),s=a(255),d=a(71),m=a(523);const p=Object(i.c)(d.g,{shouldForwardProp:e=>!["leftMargin","topMargin","bottomMargin","withColoredText"].includes(e)})`
  margin: ${({leftMargin:e,topMargin:t,bottomMargin:a})=>`${null!=t?t:9}px 0px ${null!=a?a:9}px ${null!=e?e:18}px`};
  white-space: nowrap;
`,b=Object(i.c)(r.X)`
  color: ${l.a["blue-3"]};
`,u=Object(i.c)(r.Y)`
  color: ${l.a["purple-1"]};
`,g=Object(i.c)(o.a)`
  margin-left: 3px;
`,h=Object(i.c)(o.a,{shouldForwardProp:e=>"withColoredText"!==e})`
  color: ${({withColoredText:e})=>e&&l.a["blue-3"]};
`,E=Object(i.c)(o.a,{shouldForwardProp:e=>"withColoredText"!==e})`
  color: ${({withColoredText:e})=>e&&l.a["purple-1"]};
`;t.a=({up:e,down:t,upTotal:a,downTotal:i,topMargin:r,bottomMargin:l,leftMargin:o,textSize:O="caption",withColoredText:C,...f})=>{const x=Object(n.useMemo)(()=>a?Object(m.a)(a):void 0,[a]),j=Object(n.useMemo)(()=>i?Object(m.a)(i):void 0,[i]),T=Object(n.useMemo)(()=>{const t=Object(s.d)(e);return`${t.value<100?t.value.toFixed(1):t.value.toFixed()} ${x?"":""+t.unit}`},[x,e]),_=Object(n.useMemo)(()=>{const e=Object(s.d)(t);return`${e.value<100?e.value.toFixed(1):e.value.toFixed()} ${j?"":""+e.unit}`},[t,j]);return c.a.createElement(d.g,null,c.a.createElement(p,{alignItems:"center",leftMargin:o,topMargin:r,bottomMargin:l},c.a.createElement(b,null),c.a.createElement(h,Object.assign({size:O,weight:"bold",withColoredText:C},f),_),j&&c.a.createElement(g,{size:O,weight:"bold",color:"tertiary"}," / "+j)),c.a.createElement(p,{alignItems:"center",leftMargin:o,topMargin:r,bottomMargin:l},c.a.createElement(u,null),c.a.createElement(E,Object.assign({size:O,weight:"bold",withColoredText:C},f),T),x&&c.a.createElement(g,{size:O,weight:"bold",color:"tertiary"}," / "+x)))}},2886:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),r=a(73),l=a(239),o=a(182),s=a(18),d=a(178),m=a(670),p=a(70),b=a(206),u=a(6),g=a(272),h=a(5),E=a(36),O=a(529),C=a(812),f=a(71),x=a(2),j=a(15),T=a(2521),_=a(215),A=a(607),y=a(32),v=a(42);const w=Object(h.c)(f.g)`
  &:hover {
    background-color: ${({motif:e})=>"dark"===e?"#29292D":"#F6F6F8"};
  }
`,F=Object(h.c)(_.a)`
  padding: 0;
`,I=Object(h.c)(j.t)`
  ${({isSelected:e})=>e?"opacity: 1;":"opacity: 0;"}
  transition: opacity 150ms ease;
  margin: 10px 7px 0 7px;
`;var L,S=({children:e,isSelected:t,...a})=>{const{motif:n}=Object(v.a)();return c.a.createElement(w,{motif:n},c.a.createElement(I,{width:7,isSelected:t}),c.a.createElement(F,Object.assign({variant:"tertiary"},a),c.a.createElement(y.a,{size:"body",weight:t?"bold":"normal"},e)))};!function(e){e.topApplicationsClients="topApplicationsClients",e.overviewClients="overviewClients",e.topapplications="topapplications",e.overview="overview"}(L||(L={}));const D=e=>e===L.overviewClients||e===L.topApplicationsClients,R=Object(h.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  min-height: 40px;
  padding: 0 24px 0 24px;
  position: relative;
`,B=Object(h.c)(T.a)`
  margin-left: 34px;
  width: fit-content;

  & > * > button {
    height: 39px !important;
  }
`,N=Object(h.c)(j.e,{shouldForwardProp:e=>"open"!==e})`
  transition: 200ms cubic-bezier(0.4, 0, 0, 1.3);
  transform: ${({open:e})=>e?"rotate(-180deg)":"rotate(0deg)"};
`,M=Object(h.c)(j.Zb)`
  transform: rotate(90deg);
`,P=Object(h.c)("div")`
  @media (max-width: 1010px) and (min-width: 900px), (max-width: 700px) {
    display: none;
  }
`,k=Object(h.c)(_.a)`
  *:not(:first-child) {
    margin-left: 9px;
  }
  font-weight: bold;
`,z=Object(h.c)("div")`
  @media (min-width: 1010px) and (max-width: 900px), (min-width: 700px) {
    display: none;
  }
`,$=Object(h.c)(_.a)`
  width: 42px;
  height: 100%;
  border-right: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 0;
`,U=Object(h.c)(j.f)`
  color: #838691;
  height: 12px;
`,W=Object(h.c)(A.a)`
  position: absolute;
  right: 16px;
`,Y=Object(h.c)(y.a)`
  position: absolute;
  left: 64px;

  @media (max-width: 1060px) and (min-width: 900px), (max-width: 750px) {
    display: none;
  }
`,H=Object(h.c)("div")`
  position: absolute;
  left: 0;
  height: 100%;

  & > div {
    height: 100%;
  }
`,G=h.a`
  padding: 0;
`,V=[{id:"overview",label:c.a.createElement(x.c,{id:"TRAFFIC_TAB_LABEL_OVERVIEW"})},{id:"topapplications",label:c.a.createElement(x.c,{id:"TRAFFIC_TAB_LABEL_TABLE"})}];var q=c.a.memo(({sorting:e,setSorting:t,categoryName:a})=>{const{site:i,subSection:r}=Object(E.m)(),l=Object(E.k)(),{path:o}=Object(E.n)(),s=Object(n.useCallback)(({open:t})=>{let a="TRAFFIC_SORTING_LABEL_BY_TRAFFIC";switch(e){case"upload":a="TRAFFIC_SORTING_LABEL_BY_UPLOAD";break;case"download":a="TRAFFIC_SORTING_LABEL_BY_DOWNLOAD";break;default:a="TRAFFIC_SORTING_LABEL_BY_TRAFFIC"}return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,null,c.a.createElement(k,{variant:"link"},c.a.createElement(x.c,{id:a}),c.a.createElement(N,{size:"small",open:t}))),c.a.createElement(z,null,c.a.createElement(_.a,null,c.a.createElement(M,null))))},[e]),d=Object(n.useCallback)(e=>{const t=Object(E.i)(o,{subSection:e,section:"traffic",site:i});l.push(t)},[l,o,i]),m=Object(n.useCallback)(()=>{const e=Object(E.i)(o,{subSection:r===L.topApplicationsClients?L.topapplications:L.overview,section:"traffic",site:i});l.push(e)},[r,l,o,i]),p=Object(n.useMemo)(()=>r===L.topapplications?r:L.overview,[r]);return c.a.createElement(R,{justifyContent:"center",alignItems:"center"},D(r)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null,c.a.createElement($,{variant:"tertiary",onClick:m},c.a.createElement(U,null))),c.a.createElement(Y,{weight:"bold"},c.a.createElement(x.c,{id:"COMMON_ACTION_BACK"})),c.a.createElement(y.a,{weight:"bold"},a?c.a.createElement(x.c,{id:a}):c.a.createElement(x.c,{id:"TRAFFIC_TAB_LABEL_TOP_APPLICATIONS"}))),!D(r)&&c.a.createElement(f.g,null,c.a.createElement(B,{selectedTabBold:!0,selectedTab:p,tabs:V,onSelectTab:({id:e})=>d(e)})),r===L.overview&&c.a.createElement(W,{classNameCard:G,size:"small",align:"bottomLeft",renderToggle:s},c.a.createElement(S,{isSelected:"upload"===e,onClick:()=>t("upload")},c.a.createElement(x.c,{id:"TRAFFIC_SORTING_LABEL_UPLOAD"})),c.a.createElement(S,{isSelected:"download"===e,onClick:()=>t("download")},c.a.createElement(x.c,{id:"TRAFFIC_SORTING_LABEL_DOWNLOAD"})),c.a.createElement(S,{isSelected:"traffic"===e,onClick:()=>t("traffic")},c.a.createElement(x.c,{id:"TRAFFIC_SORTING_LABEL_TRAFFIC"}))))},(e,t)=>e.sorting===t.sorting&&e.setSorting===t.setSorting&&e.categoryName===t.categoryName),J=a(523),K=a(45),X=a(2911);const Q=Object(h.c)(f.g)`
  height: 100%;
  max-height: 260px;
  padding: 0 24px 20px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    border: 7px solid ${({theme:e})=>e.motifPalette.neutral02};
    border-radius: 100%;
    width: 130px;
    height: 130px;
    pointer-events: none;
  }

  & * > text:first-of-type {
    font-size: 24px;
  }
  & * > text:last-of-type {
    font-size: 10px;
  }
`,Z=Object(h.c)(y.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,ee=Object(h.c)(f.g)`
  margin-bottom: 8px;
`,te=Object(h.c)(y.a)`
  color: ${K.a["purple-1"]};
`,ae=e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Z,{size:"body",weight:"bold"},e.name),c.a.createElement(ee,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),c.a.createElement(y.a,null,Object(J.a)(e.rx_bytes+e.tx_bytes))),c.a.createElement(ee,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_UP"})),c.a.createElement(te,null,Object(J.a)(e.tx_bytes))),c.a.createElement(ee,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_DOWN"})),c.a.createElement(y.a,{color:"info"},Object(J.a)(e.rx_bytes))),c.a.createElement(ee,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),c.a.createElement(y.a,null,e.known_clients)));var ne=({category:e,appsToShow:t,dpiDataTotal:a})=>{const i=Object(n.useMemo)(()=>{const t=e.traffic/a*100,n=2-t.toString().split(".")[0].length;return t.toFixed(Math.max(0,n))+"%"},[e.traffic,a]),r=Object(n.useMemo)(()=>t.map(e=>({...e,id:e.app,value:e.rx_bytes+e.tx_bytes,color:e.color})),[t]);return c.a.createElement(Q,{justifyContent:"center",alignItems:"center"},c.a.createElement(X.a,{items:r,renderTooltipMessage:ae,tooltipProps:{position:"right"},title:i,description:Object(J.a)(e.rx_bytes+e.tx_bytes),thickness:3,spacer:.5,size:115}))},ce=a(643),ie=a(2846),re=a(2154);const le=Object(h.c)(ce.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,oe=Object(h.c)(j.g)`
  position: absolute;
  right: 9px;
  height: 10px;
  width: 7px;
  color: #b6b9c4;
`,se=[{id:"name",label:"",renderCell:({name:e,color:t,icon:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(le,{customColor:t}),a,c.a.createElement(y.a,{size:"body",truncate:!0},e)),minWidth:80},{id:"traffic",label:"",renderCell:({rx_bytes:e,tx_bytes:t})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{size:"body"},Object(J.a)(e+t)),c.a.createElement(oe,null)),minWidth:78,maxWidth:78}],de=Object(h.c)("div")`
  margin: 0px 24px 18px auto;
  min-width: 150px;
  width: 100%;
  height: 168px;
  & > div > table > thead {
    display: none;
  }

  & tr {
    cursor: pointer;
  }
`;var me=({appsToShow:e,category:t,updateCurrentClientUsageApps:a})=>{const{site:i}=Object(E.m)(),r=Object(E.k)(),{path:l}=Object(E.n)(),o=Object(n.useCallback)(e=>{a(null,[e.compoundAppId]);const t=Object(E.i)(l,{subSection:L.overviewClients,section:"traffic",site:i});r.push(t)},[t,r,l,i,a]),s=Object(n.useMemo)(()=>e.map(e=>{const t=c.a.createElement(re.a,{name:e.name,iconFileName:e.iconFileName});return{...e,icon:t}}),[e]);return c.a.createElement(de,null,c.a.createElement(ie.a,{columns:se,items:s,onRowClick:o,idField:"app",disableColumnFilters:!0,disableSelection:!0,rowHeight:42}))},pe=a(2173);const be=Object(h.c)("div")`
  display: grid;
  grid-template-columns: minmax(80px, 1fr) minmax(185px, 1fr) 42px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  height: 40px;
  max-height: 40px;
  padding-left: 24px;
`,ue=Object(h.c)(ce.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,ge=Object(h.c)(f.g)`
  margin-right: 6%;
`,he=Object(h.c)(j.C)`
  margin: 0 6px 0 16px;
`,Ee=Object(h.c)(_.a)`
  width: 42px;
  height: 100%;
  border-left: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 0;
`,Oe=Object(h.c)(y.a)`
  transition: color 250ms ease;
  &:hover {
    color: ${({theme:e})=>e.motifPalette.uBlue06};
  }
`,Ce=Object(h.c)("div")`
  overflow: hidden;
  & > div {
    display: block !important;
    overflow: hidden;
    & button,
    & button > label {
      overflow: hidden;
    }
  }
`;var fe=({category:e,updateCurrentClientUsageApps:t})=>{const{site:a}=Object(E.m)(),i=Object(E.k)(),{path:r}=Object(E.n)(),l=Object(n.useCallback)(()=>{t(e,e.apps);const n=Object(E.i)(r,{subSection:L.overviewClients,section:"traffic",site:a});i.push(n)},[e,i,r,a,t]);return c.a.createElement(be,null,c.a.createElement(f.g,{alignItems:"center"},c.a.createElement(ue,{customColor:e.color}),c.a.createElement(Ce,null,c.a.createElement(_.a,{variant:"inline",onClick:l},c.a.createElement(Oe,{size:"body",truncate:!0},c.a.createElement(x.c,{id:Object(o.getDpiCategoryData)(e.cat)}))))),c.a.createElement(ge,{alignItems:"center",justifyContent:"flex-end"},c.a.createElement(pe.a,{up:e.tx_bytes,down:e.rx_bytes,leftMargin:6}),c.a.createElement(he,null),c.a.createElement(y.a,{size:"caption",weight:"bold"},e.clientsCount)),c.a.createElement(Ee,{variant:"tertiary",onClick:l},c.a.createElement(j.g,null)))};const xe=Object(h.c)(f.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 343px;
  height: 270px;
  position: relative;
`,je=Object(h.c)("div")`
  position: absolute;
  bottom: 12px;
  right: 17px;
  width: auto;
`;var Te=c.a.memo(({category:e,dpiDataTotal:t,dpiDataByApp:a,updateCurrentClientUsageApps:i})=>{const[r,l]=Object(n.useState)(!1),o=Object(n.useMemo)(()=>a.filter(t=>t.cat===e.cat).sort((e,t)=>t.traffic-e.traffic),[e,a]),s=Object(n.useMemo)(()=>o.length,[o.length]),d=Object(n.useMemo)(()=>r?o.map((t,a)=>Object.assign(t,{color:Object(C.a)([...e.colorScheme.slice(4),...e.colorScheme.slice(0,4).reverse()],a)})):o.map((t,a)=>Object.assign(t,{color:a<4?Object(C.d)(e.colorScheme,a):"#EDEDF0"})),[o,e.colorScheme,r]);return c.a.createElement(xe,{flexWrap:"wrap"},c.a.createElement(fe,{category:e,updateCurrentClientUsageApps:i}),c.a.createElement(f.g,{flexDirection:"row",flex:1},c.a.createElement(ne,{category:e,dpiDataTotal:t,appsToShow:d}),c.a.createElement(me,{appsToShow:r?d:d.slice(0,4),category:e,updateCurrentClientUsageApps:i})),s>4&&c.a.createElement(je,null,c.a.createElement(_.a,{variant:"link",onClick:()=>l(e=>!e)},c.a.createElement(x.c,{id:r?"APP_TABLE_BUTTON_SHOW_TOP_USAGE":"APP_TABLE_BUTTON_SHOW_ALL"}))))},(e,t)=>Object(J.a)(e.category.rx_bytes+e.category.tx_bytes)===Object(J.a)(t.category.rx_bytes+t.category.tx_bytes)),_e=a(1910);const Ae=Object(h.c)(_e.a)`
  height: 338px;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    margin-top: 50px;
  }
`;function ye(){return c.a.createElement(Ae,{title:c.a.createElement(x.c,{id:"DPI_NO_DATA"}),icon:"noSearchResults",maxWidth:386,detailPadding:35})}const ve=Object(h.c)(f.g)`
  width: 100%;
  height: 100%;
  padding: 12px 12px 24px 12px;
  overflow: auto;
`,we=Object(h.c)(ce.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 16px;
`,Fe=Object(h.c)(y.a)`
  max-width: calc(100% - 18px);
`,Ie=Object(h.c)(y.a)`
  color: ${({theme:e})=>e.motifPalette.purple06};
`,Le=Object(h.c)(y.a)`
  color: ${({theme:e})=>e.motifPalette.uBlue06};
`,Se=[{id:"name",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({color:e,name:t,icon:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(we,{customColor:e}),a,c.a.createElement(Fe,{size:"body",truncate:!0},t)),minWidth:170},{id:"traffic",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>c.a.createElement(y.a,{size:"body"},Object(J.a)(e)),minWidth:80},{id:"rx_bytes",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_DOWN"}))),sortable:!0,renderCell:({rx_bytes:e})=>c.a.createElement(Le,{size:"body"},Object(J.a)(e)),minWidth:80},{id:"tx_bytes",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_UP"}))),sortable:!0,renderCell:({tx_bytes:e})=>c.a.createElement(Ie,{size:"body"},Object(J.a)(e)),minWidth:80},{id:"known_clients",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({known_clients:e})=>c.a.createElement(y.a,{size:"body"},e),minWidth:80}];var De=({dpiDataByApp:e,dpiDataByCategory:t,currentCategories:a,updateCurrentClientUsageApps:i})=>{const r=Object(E.k)(),{path:l}=Object(E.n)(),{site:o}=Object(E.m)(),s=Object(n.useMemo)(()=>e.filter(e=>a.includes(e.cat)),[a,e]),d=Object(n.useMemo)(()=>s.map(e=>{const{color:a}=t.find(t=>t.cat===e.cat),n=e.tx_bytes+e.rx_bytes,i=c.a.createElement(re.a,{name:e.name,iconFileName:e.iconFileName});return{...e,color:a,traffic:n,icon:i}}),[t,s]),m=Object(n.useCallback)(e=>{i(null,[e.compoundAppId]);const t=Object(E.i)(l,{subSection:L.topApplicationsClients,section:"traffic",site:o});r.push(t)},[r,l,o,i,t]);return c.a.createElement(c.a.Fragment,null,d.length?c.a.createElement(ve,null,c.a.createElement(ie.a,{items:d,columns:Se,idField:"app",initialSortBy:"traffic",disableColumnFilters:!0,onRowClick:m,rowHeight:42})):c.a.createElement(ye,null))},Re=a(765),Be=a(117),Ne=a(46);const Me=Object(h.c)(f.g)`
  margin: 30px 24px 0;
  height: 100%;
  overflow-x: overlay;

  > div {
    width: calc(100% - 1px);
  }
`,Pe=Object(h.c)(f.g)`
  height: 30px;
  max-width: 30px;
  width: 100%;
  margin-right: 10px;
`,ke=Object(h.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.neutral04};
  padding-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,ze=Object(h.c)(y.a)`
  font-weight: bold;
`,$e=Object(h.c)("div",{shouldForwardProp:e=>"hasIconContainer"!==e})`
  padding-top: ${({theme:e,hasIconContainer:t})=>t?e.spacing["spacing-s"]:0};
`,Ue=Object(h.c)(y.a,{shouldForwardProp:e=>"metrics"!==e})`
  color: ${({theme:e,metrics:t})=>"up"===t?e.motifPalette.purple06:e.motifPalette.uBlue06};
`,We=Object(h.c)(Re.a)`
  border-radius: 2px;
`,Ye=Object(h.c)(y.a)`
  max-width: 90%;
`,He=Object(h.c)("div")`
  width: 100%;
  padding-right: ${({theme:e})=>e.spacing["spacing-m"]};
`,Ge=(e,t,a)=>e.reduce((e,n)=>t.includes(n.compoundAppId)?e+n[a]:e,0),Ve=(e,t)=>c.a.createElement(Ue,{size:"body",metrics:t},Object(J.a)(e)),qe=e=>{const t=e.toFixed(1);return Number(t)>=1?t+" %":"< 1 %"},Je=e=>({message:c.a.createElement(c.a.Fragment,null,e.appName&&c.a.createElement(ke,{alignItems:"center"},c.a.createElement(re.a,{name:e.appName,iconFileName:e.iconFileName}),c.a.createElement(ze,{truncate:!0},e.appName)),c.a.createElement($e,{hasIconContainer:!!e.appName},c.a.createElement(f.g,{justifyContent:"space-between"},c.a.createElement(y.a,{size:"label"},c.a.createElement(x.c,{id:e.remainingAppsCount?"TRAFFIC_TOOLTIP_LABEL_OTHER_TRAFFIC":"TRAFFIC_TABLE_LABEL_TRAFFIC"})),c.a.createElement(y.a,{size:"label",weight:"bold"},qe(e.value))),e.down&&c.a.createElement(f.g,{justifyContent:"space-between"},c.a.createElement(y.a,{size:"label"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_DOWN"})),c.a.createElement(Ue,{size:"label",metrics:"down"},e.down)),e.up&&c.a.createElement(f.g,{justifyContent:"space-between"},c.a.createElement(y.a,{size:"label"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_UP"})),c.a.createElement(Ue,{size:"label",metrics:"up"},e.up)),e.remainingAppsCount>0&&c.a.createElement(f.g,{justifyContent:"space-between"},c.a.createElement(y.a,{size:"label"},c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_LABEL_APPLICATIONS"})),c.a.createElement(y.a,{size:"label",weight:"bold"},e.remainingAppsCount)))),width:176,position:"topRight"});var Ke=({dpiClientsData:e,currentClientsUsageApps:t})=>{const a=Object(n.useMemo)(()=>t.apps.reduce((e,t)=>({...e,[t.compoundAppId]:t}),{}),[t.apps]),i=Object(n.useMemo)(()=>e.reduce((e,n)=>{let c=n.traffic;const i=t.appIds.reduce((e,t)=>{const i=n.by_app.find(e=>e.compoundAppId===t);return i?(c-=i.tx_bytes+i.rx_bytes,[...e,{...i,traffic:i.tx_bytes+i.rx_bytes,color:a[i.compoundAppId].color,appName:a[i.compoundAppId].name,iconFileName:a[i.compoundAppId].iconFileName}]):e},[]);if(i.length){const t=i.map(e=>e.compoundAppId),a=c/n.traffic*100,r=n.by_app.filter(e=>!t.includes(e.compoundAppId)).length,l=i.map(e=>({value:e.traffic/n.traffic*100,color:e.color,up:Object(J.a)(e.tx_bytes),down:Object(J.a)(e.rx_bytes),appName:e.appName,iconFileName:e.iconFileName}));return[...e,{...n,by_app:i,barItems:[...l,{value:a,color:"#EDEDF0",remainingAppsCount:r}]}]}return e},[]),[e,t.appIds,a]),r=Object(n.useMemo)(()=>{return e=t.appIds,[{id:"name",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENT"})),sortable:!0,renderCell:e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe,{justifyContent:"center",alignItems:"center"},"model"in e?c.a.createElement(Be.c,{device:e}):c.a.createElement(f.d,{client:e})),c.a.createElement(Ye,{size:"body",truncate:!0},"model"in e?Object(Ne.c)(e):e.name||"hostname"in e&&e.hostname||e.mac)),minWidth:160,maxWidth:240},{id:"traffic",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({by_app:t})=>{const a=Ge(t,e,"traffic");return c.a.createElement(y.a,{size:"body"},Object(J.a)(a))},minWidth:80,maxWidth:170},{id:"rx_bytes",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_DOWN"})),sortable:!0,renderCell:({by_app:t})=>{const a=Ge(t,e,"rx_bytes");return Ve(a,"down")},minWidth:80,maxWidth:170},{id:"tx_bytes",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_UP"})),sortable:!0,renderCell:({by_app:t})=>{const a=Ge(t,e,"tx_bytes");return Ve(a,"up")},minWidth:80,maxWidth:170},{id:"trafficPercentage",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_APPLICATION_TRAFFIC"})),sortable:!0,renderCell:({barItems:e})=>c.a.createElement(He,null,c.a.createElement(We,{items:e,itemTooltip:Je})),minWidth:160,compare:(e,t)=>t-e}];var e},[t.appIds]);return c.a.createElement(Me,null,i.length?c.a.createElement(ie.a,{items:i,columns:r,idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,rowHeight:42}):c.a.createElement(ye,null))};const Xe=Object(h.c)(f.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 375px;
  min-height: 452px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 20px -13px #b8b8b8;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    min-height: 296px;
  }
`,Qe=Object(h.c)("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(383px, auto));
  width: 100%;
  padding: 20px 16px;
  overflow: auto; // For non webkit browsers
  overflow: overlay;
  grid-gap: 16px;

  @media (min-width: ${({theme:e})=>e.breakpoints.bp1366}px) {
    grid-template-columns: repeat(2, minmax(383px, auto));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.bp1920}px) {
    grid-template-columns: repeat(3, minmax(383px, auto));
  }
`;var Ze=({dpiDataByCategory:e,currentCategories:t,dpiDataByApp:a,clients:i,currentClientsUsageApps:r,dpiDataTotal:l,updateCurrentClientUsageApps:o})=>{var s;const[d,m]=Object(n.useState)("traffic"),{subSection:p}=Object(E.m)(),b=e.filter(e=>t.includes(e.cat)),u=Object(n.useMemo)(()=>{const e=[...b];switch(d){case"upload":return e.sort((e,t)=>t.tx_bytes-e.tx_bytes);case"download":return e.sort((e,t)=>t.rx_bytes-e.rx_bytes);case"traffic":default:return b}},[b,d]);return c.a.createElement(Xe,{flexDirection:"column"},c.a.createElement(q,{sorting:d,setSorting:m,categoryName:null===(s=r.cat)||void 0===s?void 0:s.name}),"overview"===p&&(u.length?c.a.createElement(Qe,null,u.map(e=>c.a.createElement(Te,{key:e.cat,category:e,dpiDataByApp:a,dpiDataTotal:l.rx_bytes+l.tx_bytes,updateCurrentClientUsageApps:o}))):c.a.createElement(ye,null)),D(p)&&c.a.createElement(Ke,{dpiClientsData:i,currentClientsUsageApps:r}),"topapplications"===p&&c.a.createElement(De,{dpiDataByApp:a,dpiDataByCategory:e,currentCategories:t,updateCurrentClientUsageApps:o}))};const et=Object(h.c)(ce.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,tt=Object(h.c)(y.a)`
  max-width: calc(100% - 18px);
`,at=[{id:"name",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({color:e,name:t})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(et,{customColor:e}),c.a.createElement(tt,{size:"body",truncate:!0},t)),minWidth:110},{id:"traffic",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>c.a.createElement(y.a,{size:"body"},Object(J.a)(e,2)),minWidth:70,maxWidth:80},{id:"known_clients",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({known_clients:e})=>c.a.createElement(y.a,{size:"body"},e),minWidth:60,maxWidth:80}],nt=Object(h.c)("div")`
  margin: 0 24px 24px;
  width: calc(100% - 48px);
  height: 100%;

  & > div > div > div > div {
    overflow-x: hidden !important;
  }

  & tr {
    background-color: transparent !important;
  }
  & tbody > tr:last-child > td > div > div > input {
    display: none !important;
  }
  & tbody > tr:last-child {
    cursor: default !important;
    pointer-events: none !important;
    & > td:first-child {
      display: none;
    }

    & > td:last-child > div > span {
      margin-left: 8px;
      font-weight: bold;
    }
  }
`;var ct=Object(x.f)(({dpiDataByCategory:e,currentCategories:t,updateCurrentCategories:a,intl:i})=>{const r=Object(n.useMemo)(()=>((e,t)=>[{id:"name",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({cat:t,color:a,name:n})=>{const i=e.includes(t)?a:"EDEDF0";return"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"!==n?c.a.createElement(c.a.Fragment,null,c.a.createElement(et,{customColor:i}),c.a.createElement(tt,{size:"body",truncate:!0},c.a.createElement(x.c,{id:n}))):c.a.createElement(y.a,{size:"body",style:{fontWeight:"bold"}},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"}))},minWidth:110,compare:(e,a)=>t.formatMessage({id:e}).localeCompare(t.formatMessage({id:a}))},{id:"clientsCount",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({name:e,clientsCount:t})=>"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"!==e?c.a.createElement(y.a,{size:"body"},t):null,minWidth:75},{id:"traffic",label:c.a.createElement(y.a,{size:"body"},c.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>c.a.createElement(y.a,{size:"body"},Object(J.a)(e,2)),minWidth:75}])(t,i),[t,i]);return c.a.createElement(nt,null,c.a.createElement(ie.a,{items:e,columns:r,idField:"cat",disableColumnFilters:!0,multiSelectMode:!0,selectedIds:t,onChangeSelection:e=>a(e),rowHeight:42,divideTableByKey:"normalRow",disableBlankRowDivide:!0}))});const it=Object(h.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  min-height: 40px;
  padding: 0 24px 0 24px;
`,rt=Object(h.c)(y.a)`
  white-space: nowrap;
`,lt=Object(h.c)(j.C)`
  margin: 0 6px 0 16px;
`;var ot=({dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:a})=>{const{subSection:n}=Object(E.m)(),i=e.filter(e=>t.includes(e.cat)),r=new Set(i.map(e=>e.clients).flat()),{catUp:l,catDown:o}=i.reduce((e,t)=>({catUp:e.catUp+t.tx_bytes,catDown:e.catDown+t.rx_bytes}),{catUp:0,catDown:0}),{appUp:s,appDown:d}=a.apps.reduce((e,t)=>a.appIds.includes(t.compoundAppId)?{appUp:e.appUp+t.tx_bytes,appDown:e.appDown+t.rx_bytes}:e,{appUp:0,appDown:0}),m=D(n),p=a.cat?a.cat.tx_bytes:l,b=a.cat?a.cat.rx_bytes:o;return c.a.createElement(it,{alignItems:"center",justifyContent:"space-between"},c.a.createElement(rt,{truncate:!0},m?c.a.createElement(x.c,{id:"TRAFFIC_SELECTED_APPS_COUNT",values:{value1:a.appIds.length,value2:a.apps.length}}):c.a.createElement(x.c,{id:"TRAFFIC_CATEGORY_COUNT",values:{value1:i.length,value2:e.length}})),c.a.createElement(f.g,{justifyContent:"right",alignItems:"center"},c.a.createElement(pe.a,{up:m?s:l,down:m?d:o,upTotal:m&&p,downTotal:m&&b}),!m&&c.a.createElement(c.a.Fragment,null,c.a.createElement(lt,null),c.a.createElement(y.a,{weight:"bold"},r.size))))};const st=Object(h.c)(f.g)`
  height: 100%;
  max-height: 260px;
  padding: 26px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    border: 7px solid ${({theme:e})=>e.motifPalette.neutral02};
    border-radius: 100%;
    width: 172px;
    height: 172px;
    pointer-events: none;
  }

  & * > text:first-of-type {
    font-size: 28px;
  }
  & * > text:last-of-type {
    font-size: 12px;
  }
  .titleClassName {
    transform: translateY(12px);
  }
  .descriptionClassName {
    font-weight: bold;
    transform: translateY(-34px);
  }
`,dt=Object(h.c)(y.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,mt=Object(h.c)(f.g)`
  margin-bottom: 8px;
`,pt=Object(h.c)(y.a)`
  color: ${K.a["purple-1"]};
`,bt=e=>0===(null==e?void 0:e.id)&&1===Object.keys(e).length?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(dt,{size:"body",weight:"bold"},c.a.createElement(x.c,{defaultMessage:e.name,id:e.name})),c.a.createElement(mt,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),c.a.createElement(y.a,null,Object(J.a)(e.traffic))),c.a.createElement(mt,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_UP"})),c.a.createElement(pt,null,Object(J.a)(e.tx_bytes))),c.a.createElement(mt,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_DOWN"})),c.a.createElement(y.a,{color:"info"},Object(J.a)(e.rx_bytes))),e.clients&&c.a.createElement(mt,{justifyContent:"space-between"},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),c.a.createElement(y.a,null,e.clients.length)));var ut=Object(x.f)(({dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:a,intl:i})=>{const{motif:r}=Object(v.a)(),l="dark"===r,{subSection:o}=Object(E.m)(),[s,d]=Object(n.useMemo)(()=>{let a=0;const n=[];for(const c of e){if(255===c.cat&&!t.includes(255))break;t.includes(c.cat)&&(a+=c.traffic),n.push({...c,id:c.cat,value:c.traffic,color:t.includes(c.cat)?c.color:"#EDEDF0"})}return[a,n]},[t,e]),[m,p]=Object(n.useMemo)(()=>{let e=0;const t=[];for(const n of a.apps)a.appIds.includes(n.compoundAppId)&&(e+=n.traffic),t.push({...n,id:n.compoundAppId,value:n.traffic,compoundId:n.compoundAppId});return[e,t]},[a.appIds,a.apps]),b=Object(n.useMemo)(()=>Object(J.a)(D(o)?m:s),[m,s,o]);return c.a.createElement(st,{justifyContent:"center",alignItems:"center",isDarkMode:l},c.a.createElement(X.a,{items:D(o)?p:d,renderTooltipMessage:bt,tooltipProps:{position:"right"},title:b,description:i.formatMessage({id:"TRAFFIC_DONUT_LABEL_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",thickness:3.5,spacer:.5}))});const gt=Object(h.c)("div")`
  margin: 0 24px 24px;
  width: calc(100% - 48px);
  height: 100%;

  & > div > div > div > div {
    overflow-x: hidden !important;
  }

  & tr {
    background-color: transparent !important;
  }
`;var ht=({currentClientsUsageApps:e,updateCurrentClientUsageApps:t})=>{const a=Object(n.useCallback)(a=>{t(e.cat,a)},[e.cat,t]);return c.a.createElement(gt,null,c.a.createElement(ie.a,{items:e.apps,columns:at,idField:"compoundAppId",disableColumnFilters:!0,multiSelectMode:!0,selectedIds:e.appIds,onChangeSelection:e=>a(e),rowHeight:42}))};const Et=Object(h.c)(f.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 354px;
  min-height: 452px;
  height: 100%;
  box-shadow: 0px 4px 20px -13px #b8b8b8;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    min-width: 375px;
  }
`;var Ot=c.a.memo(({dpiDataByCategory:e,currentCategories:t,updateCurrentCategories:a,currentClientsUsageApps:n,dpiDataTotal:i,subSection:r,updateCurrentClientUsageApps:l})=>{const o=(null==i?void 0:i.rx_bytes)+(null==i?void 0:i.tx_bytes),s=[...e,{name:"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC",cat:0,apps:[],clients:[],clientsCount:0,rx_bytes:0,tx_bytes:0,rx_packets:0,tx_packets:0,traffic:o,color:"#",colorScheme:[],normalRow:!1}];return c.a.createElement(Et,{flexDirection:"column"},c.a.createElement(ot,{dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:n}),c.a.createElement(ut,{dpiDataTotal:o,dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:n}),D(r)?c.a.createElement(ht,{currentClientsUsageApps:n,updateCurrentClientUsageApps:l}):c.a.createElement(ct,{currentCategories:t,dpiDataByCategory:s,updateCurrentCategories:a}))},(e,t)=>{var a,n,c,i;const r=(null===(a=e.dpiDataTotal)||void 0===a?void 0:a.rx_bytes)+(null===(n=e.dpiDataTotal)||void 0===n?void 0:n.tx_bytes),l=(null===(c=t.dpiDataTotal)||void 0===c?void 0:c.rx_bytes)+(null===(i=t.dpiDataTotal)||void 0===i?void 0:i.tx_bytes);return Object(J.a)(r)===Object(J.a)(l)&&e.subSection===t.subSection&&Object(O.a)(e.currentCategories,t.currentCategories)&&Object(O.a)(e.currentClientsUsageApps,t.currentClientsUsageApps)&&Object(O.a)(e.subSection,t.subSection)}),Ct=a(729);const ft=Object(h.c)("div")`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 16px;
  width: 100%;
  height: calc(100% - 48px);
  padding: 32px;
  overflow: overlay;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp1600}px) {
    grid-template-columns: 400px 1fr;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    grid: minmax(452px, 60%) minmax(446px, calc(40% - 16px)) / minmax(375px, 100%);
  }
`;function xt(){const{site:e,id:t,subId:a,subSection:r}=Object(E.m)(),l=Object(E.k)(),{path:s}=Object(E.n)(),[d,m]=Object(n.useState)([]),[p,b]=Object(n.useState)(!0),[u,g]=Object(n.useState)([]),[h,f]=Object(n.useState)({cat:void 0,apps:[],appIds:[]}),x=Object(i.useSelector)(Ct.a),[j,T,_,A]=Object(i.useSelector)(e=>Object(o.selectParsedDpiData)(e,x)),y=Object(n.useCallback)(e=>{const t=j.map(e=>e.cat);Object(O.a)(e.sort(),t.sort())?b(!0):b(!1),m(e)},[j]);Object(n.useEffect)(()=>{const e=j.map(e=>e.cat);Object(O.a)(e.sort(),u.sort())||(p&&m(e.filter(e=>255!==e)),g(e))},[j]);const v=Object(n.useCallback)((e,t)=>{const a=e?T.filter(t=>t.cat===e.cat):T,n=Object(C.e)(a).map((e,a)=>{const n=t.includes(e.compoundAppId);return{...e,selected:n,color:n?Object(C.c)(a)[4]:"#EDEDF0"}}),c=n.reduce((e,t)=>t.selected?[...e,t.compoundAppId]:e,[]);f({cat:e,apps:n,appIds:c})},[T]);Object(n.useEffect)(()=>{const n=""!==t?Object(o.combineDuplicateCategories)(Number(t)):void 0,c=n?j.find(e=>e.cat===Number(n)):void 0,i=a?a.split(",").map(e=>Number(e)):[];if(c&&i.length){v(c,i);const t=Object(E.i)(s,{subSection:L.overviewClients,section:"traffic",site:e});l.push(t)}if(!c&&!i.length&&!h.cat&&D(r)){const t=Object(E.i)(s,{subSection:L.overview,section:"traffic",site:e});l.push(t)}},[t,a]);const w=e=>[...e].sort((e,t)=>255===e.cat?1:255===t.cat?-1:0);return c.a.createElement(ft,null,c.a.createElement(Ot,{dpiDataByCategory:w(j),currentCategories:d,updateCurrentCategories:y,currentClientsUsageApps:h,updateCurrentClientUsageApps:v,dpiDataTotal:A,subSection:r}),c.a.createElement(Ze,{dpiDataByCategory:w(j),dpiDataByApp:T,currentCategories:d,clients:_,currentClientsUsageApps:h,updateCurrentClientUsageApps:v,dpiDataTotal:A}))}var jt=a(2117),Tt=a(663),_t=a(17),At=a(27),yt=a(1958),vt=a(16),wt=a(23),Ft=a(2897),It=a(50),Lt=a(95),St=a(2094),Dt=a(111),Rt=a(479),Bt=a(83);const Nt=h.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 12px;
  overflow-x: unset !important;

  > div {
    margin: initial;
  }
`,Mt=Object(h.c)(Dt.a)`
  text-transform: uppercase;
`,Pt=Object(h.c)("div")`
  display: flex;
  align-items: center;
  white-space: nowrap;
`,kt=Object(h.c)(T.a,{shouldForwardProp:e=>"hasCustomRange"!==e})`
  @media (max-width: 720px) {
    padding: 0;
  }
  ${({hasCustomRange:e})=>e?"@media (max-width: 1075px) {\n    & > * > button {\n      display: none;\n      &:nth-last-of-type(1) {\n        display: flex;\n      }\n    }\n  }":"@media (max-width: 870px) {\n    & > * > button {\n      display: none;\n      &:nth-last-of-type(1) {\n        display: flex;\n      }\n    }\n  }"}
`,zt=h.a`
  overflow-y: auto;
  max-height: calc(90vh - 52px);
  padding: 0 !important;
  border: none;
`,$t=h.a`
  background-color: transparent !important;
`,Ut=(e,t,a,n,i,r)=>[...e.map(e=>({id:e.id,label:c.a.createElement(Mt,{size:"small",message:e.message,values:e.messageValues})})),{id:"Custom",className:$t,label:c.a.createElement(A.a,{classNameCard:zt,align:"bottomLeft",renderToggle:r},c.a.createElement(Ft.a,{initialStartDate:Object(Lt.a)(t.startDate,a),initialEndDate:Object(Lt.a)(Object(wt.subSeconds)(t.endDate,1),a),numberOfMonths:2,disabledDays:{after:Object(Lt.a)(new Date,a)},onRangeSelected:({startDate:e,endDate:t})=>{const a=Object(wt.startOfDay)(e),c=Object(wt.endOfDay)(t);n({startDate:a,endDate:c}),i(Object(g.h)({startDate:a,endDate:c,preset:null}))},showInputs:!0}))}];var Wt=({tabsVariant:e,customRange:t,setCustomRange:a})=>{const r=Object(i.useDispatch)(),l=Object(i.useSelector)(Ct.c),o=Object(i.useSelector)(It.selectLocaleSettings),d=Object(i.useSelector)(s.Q),m=Object(i.useSelector)(Ct.a),p=Object(i.useSelector)(Bt.c),b=Object(Lt.d)(d,o,p),[u,h]=Object(n.useState)(Rt.i),E=Object(n.useCallback)(()=>c.a.createElement(Pt,null,t?c.a.createElement(St.a,{start:t.startDate,end:t.endDate,timezone:b}):c.a.createElement(j.p,null)),[t,b]);return c.a.createElement(kt,{tabs:Ut(l,m,b,a,r,E),selectedTab:u,onSelectTab:({id:e})=>(e=>{const a=l.find(t=>t.id===e);a?r(Object(g.h)({...a.getRange(new Date),preset:e})):t&&r(Object(g.h)({...t,preset:null})),h(e)})(e),className:Nt,variant:e,hasCustomRange:t})};const Yt=Object(h.c)("div")`
  .base-control-panel {
    justify-content: center;
  }
`,Ht=Object(h.c)(y.a,{shouldForwardProp:e=>"hasCustomRange"!==e})`
  font-size: 14px;
  ${({hasCustomRange:e})=>e?"@media (max-width: 750px) {\n    margin: 0 300px 0 auto;\n  }":"@media (max-width: 410px) {\n    margin: 0 180px 0 auto;\n  }"}
`,Gt=Object(h.c)(f.g)`
  position: absolute;
  right: 36px;
`,Vt=e=>t=>t(Object(Tt.a)({title:"STATISTICS_RESET_DATA_MODAL_TITLE",message:"STATISTICS_RESET_DATA_MODAL_MESSAGE",onConfirm:()=>t((e=>async t=>{t(Object(_t.e)());try{await Promise.all([t(Object(jt.a)()),t(Object(o.resetDpiData)())]),t(Object(At.c)({icon:vt.a.success,message:"STATISTICS_RESET_DATA_SUCCESS"})),t(Object(o.fetchDpiHistory)({timestampFrom:e.startDate.getTime(),timestampTo:e.endDate.getTime()})),t(Object(l.fetchDpi)())}catch{t(Object(At.c)({icon:vt.a.danger,message:"STATISTICS_RESET_DATA_ERROR"}))}})(e)),confirmButtonText:"COMMON_ACTION_RESET",confirmButtonProps:{variant:"danger"}}));var qt=()=>{const e=Object(i.useDispatch)(),t=Object(i.useSelector)(Ct.a),[a,r]=Object(n.useState)(null);return c.a.createElement(Yt,null,c.a.createElement(yt.a,{isLoading:!1},c.a.createElement(Ht,{weight:"bold",hasCustomRange:a},c.a.createElement(x.c,{id:"STATISTICS_TABS_TRAFFIC_STATS"})),c.a.createElement(Gt,null,c.a.createElement(Wt,{customRange:a,setCustomRange:r,tabsVariant:"tertiary"}),c.a.createElement(_.a,{variant:"link",onClick:()=>e(Vt(t))},c.a.createElement(y.a,null,c.a.createElement(x.c,{id:"STATISTICS_RESET_DATA_BUTTON_LABEL"}))))))};const Jt=Object(h.c)("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;var Kt=()=>{const{site:e}=Object(E.m)(),{path:t}=Object(E.n)(),{section:a}=Object(E.m)(),i=Object(E.k)();return Object(n.useEffect)(()=>{if(`/${e}/statistics`===i.location.pathname){const a=Object(E.i)(t,{subSection:L.overview,section:"traffic",site:e});i.push(a)}},[i,i.location.pathname,t,e]),c.a.createElement(Jt,null,c.a.createElement(qt,null),"traffic"===a&&c.a.createElement(xt,null))};const Xt=a(91).a["24_HOURS"];t.default=()=>{var e,t;const a=Object(i.useDispatch)(),h=Object(i.useSelector)(b.c),E=null!==(t=null===(e=Object(i.useSelector)(s.P))||void 0===e?void 0:e.offlineClientTimeframe)&&void 0!==t?t:24,{startDate:O,endDate:C}=h[Xt].getRange(new Date),f=Xt,x=Object(i.useSelector)(b.d),j=Object(i.useSelector)(Object(Ct.b)(x));return Object(n.useEffect)(()=>{j&&a(l.fetchDpiAction),j||a(Object(u.c)(l.fetchDpiAction))},[a,j]),Object(n.useEffect)(()=>()=>{a(Object(g.g)()),a(Object(u.c)(l.fetchDpiAction))},[]),Object(p.f)([Object(d.c)("statistics"),Object(g.e)({startDate:O,endDate:C,preset:f}),l.fetchDpiAction,Object(o.fetchDpiHistory)({timestampFrom:O.getTime(),timestampTo:C.getTime()},{crudCacheStrategy:{type:u.a.CACHE}}),Object(r.fetchClients)(void 0,{crudCacheStrategy:{type:u.a.CACHE}}),Object(r.fetchOfflineClients)({queryParams:{withinHours:E}},{crudCacheStrategy:{type:u.a.CACHE}}),Object(r.fetchBlockedClients)(void 0,{crudCacheStrategy:{type:u.a.CACHE}})],c.a.createElement(m.a,null,c.a.createElement(Kt,null)),{trackingName:"statistics"})}}}]);