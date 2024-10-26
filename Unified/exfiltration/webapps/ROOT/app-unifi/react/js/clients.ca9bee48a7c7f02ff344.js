(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[4],{1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return I.a})),a.d(t,"a",(function(){return F}));var n=a(0),c=a.n(n),r=a(5),l=a(648),i=a(1136),o=a(208);const E=Object(r.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,s=(Object(r.c)(l.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(r.c)(o.a,{shouldForwardProp:e=>"useMinWidth"!==e})`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  ${({useMinWidth:e})=>e?"min-width: 214px":"width: 214px"}
`),m=Object(r.c)(i.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>c.a.createElement(s,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),_=e=>c.a.createElement(E,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1851),b=a(375);const p=Object(r.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,O=e=>r.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(b.b)(({theme:e,...t})=>c.a.createElement(p,Object.assign({headerRowClassName:O(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var I=a(1934),g=a(529),C=a(1743),R=a(2),v=a(30),T=a(15),h=a(2846),P=a(44),D=a(71),f=a(62);const y=Object(r.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,S=Object(r.c)(D.c)`
  > * {
    vertical-align: middle;
  }
`,A=Object(r.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,N=Object(r.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,j=Object(r.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,L=Object(r.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,x=Object(r.c)(A,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,V=Object(r.c)(D.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,w=Object(r.c)(D.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,M=Object(r.c)("div")`
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
`;var F=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:r,onRemoveItem:l,validationSchema:i,initialValues:o,onEditSubmit:E,useValuesInSchema:s=!1,max:d,useWindowTable:_=!1,addButtonText:b="COMMON_ACTION_ADD",invalid:p,...O}){const I=Object(n.useContext)(D.l),[F,U]=Object(n.useState)(!0),k=Object(n.useCallback)(t=>!t.disableRemove&&c.a.createElement(m,null,c.a.createElement(S,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),l(t),await Promise.resolve(),U(!0)}},c.a.createElement(R.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,l]),z=Object(n.useMemo)(()=>_?h.a:u.a,[_]);return c.a.createElement(P.c,{enableReinitialize:!0,onSubmit:t=>{E(t[e])},initialValues:o,validationSchema:()=>s?v.a.lazy(e=>i(e)):i},({values:n,errors:i,setFieldValue:E,handleSubmit:s,handleReset:m,setTouched:_})=>c.a.createElement(c.a.Fragment,null,t.map((a,l)=>c.a.createElement(y,{inline:a.inline,isLast:l===t.length-1,key:a.name},c.a.createElement(A,{flexDirection:"column",width:"100%"},c.a.createElement(f.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?i[a.name]:p,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!I&&r&&l===t.length-1&&c.a.createElement(N,null,c.a.createElement(S,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),c=await _(a,!0);t.find(e=>c[e.name])||r(n),U(!0)},Icon:T.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},c.a.createElement(R.c,{id:b}))))),n.editActive?c.a.createElement(c.a.Fragment,null,n[e].map((n,r)=>c.a.createElement(L,{key:n.id,width:"100%"},O.columns.map((n,l)=>t[l]?c.a.createElement(x,{key:n.id,isLast:l===O.columns.length-1,flexDirection:"column",flex:"1 1 50%"},c.a.createElement(f.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${r}][${n.id}]`,type:t[l].type,fast:!0},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),c.a.createElement(V,{justifyContent:"flex-end",width:"100%"},c.a.createElement(w,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),E("editActive",!1)}},c.a.createElement(R.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(D.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:s,disabled:Object(g.a)(Object(C.a)(n,"editActive"),Object(C.a)(o,"editActive"))},c.a.createElement(R.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&c.a.createElement(y,null,c.a.createElement(j,null,c.a.createElement(S,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),E("editActive",!0)},Icon:T.ub},c.a.createElement(R.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&F&&c.a.createElement(M,null,c.a.createElement(z,{columns:O.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:l?k:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(2),i=a(1946),o=a.n(i),E=a(1741),s=a(520),m=a(521);const d=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const i=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),_=Object(m.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),b=Object(n.useCallback)(e=>(e={},t={})=>_(e,t)&&u(e,t),[_,u]);return!!e&&c.a.createElement(o.a,{when:b(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(E.a,{actions:[{type:"button",text:c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:i,parentSelector:s.b,title:c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},c.a.createElement(d,null,c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return T})),a.d(t,"b",(function(){return P})),a.d(t,"c",(function(){return D}));var n=a(0),c=a.n(n),r=a(5),l=a(643),i=a(32),o=a(1932),E=a(8),s=a(15),m=a(45),d=a(17),_=a(189),u=a(41);const b=Object(r.c)(_.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var p=({video:e})=>{const t=Object(E.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return c.a.createElement(b,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},c.a.createElement(s.vb,{color:m.a["blue-3"]}))},O=a(1933),I=a(71),g=a(227);const C=Object(r.c)(I.c)`
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
`,R=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,v=Object(r.c)(s.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var T,h=({video:e})=>{const t=Object(E.useDispatch)(),a=Object(E.useSelector)(g.a),r=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return c.a.createElement(C,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},c.a.createElement(R,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),c.a.createElement(v,{color:m.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(T||(T={}));const P=Object(r.c)(I.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,D=Object(r.c)(I.g)`
  * {
    line-height: 1.4 !important;
  }
`,f=Object(r.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:r,video:l,online:E})=>{let s;switch(t){default:case T.BASIC:s=e;break;case T.CONFIGURED:s=c.a.createElement(D,{alignItems:"center"},e,!!n&&c.a.createElement(o.a,{section:n}),!!l&&E&&c.a.createElement(p,{video:l}));break;case T.STATUS:s=c.a.createElement(D,{alignItems:"center"},c.a.createElement(f,{variant:r}),c.a.createElement(P,{flex:"1",flexDirection:"column"},e,a&&c.a.createElement(i.a,null,a)));break;case T.UNCONFIGURED:s=c.a.createElement(D,{alignItems:"center"},!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{section:n}),c.a.createElement(I.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(i.a,null,a))),!!l&&E&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{video:l}),c.a.createElement(I.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(i.a,null,a))),!!l&&!E&&c.a.createElement(D,{alignItems:"center"},e))}return s}},1932:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(8),i=a(15),o=a(45),E=a(1936),s=a(189);const m=Object(r.c)(s.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(E.a)(e)),[t,e]);return c.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},c.a.createElement(i.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(8),i=a(15),o=a(45),E=a(1936),s=a(71),m=a(43);const d=Object(r.c)(s.c)`
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
`,_=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,u=Object(r.c)(i.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(l.useSelector)(m.i),r=Object(n.useCallback)(()=>t(Object(E.a)(e)),[t,e]);return c.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},c.a.createElement(_,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),c.a.createElement(u,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return s.d})),a.d(t,"c",(function(){return s.a}));var n=a(0),c=a.n(n),r=a(5),l=a(15),i=a(71);const o=Object(r.c)(i.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var E=({children:e,...t})=>c.a.createElement(o,Object.assign({alignItems:"center"},t),e,c.a.createElement(l.g,null)),s=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(17),c=a(41);const r=e=>Object(n.g)({modalType:c.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Z})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var c=a(0),r=a.n(c),l=a(5);var i=({children:e="",className:t=null,full:a=!1,offset:n=1,size:c=6,...i})=>{const o=a?12:c,E=a?0:n;return r.a.createElement("div",Object.assign({className:Object(l.b)("col-"+o,"offset-"+E,t)},i),e)};var o,E=({children:e="",offset:t=0,size:a=2})=>r.a.createElement("div",{className:Object(l.b)("col-"+a,"offset-"+t)},e),s=a(2),m=a(666),d=a.n(m),_=a(71),u=a(1964),b=a.n(u),p=a(140),O=a.n(p),I=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const g=O.a.bind(b.a);var C=({className:e=null,status:t=o.NEUTRAL,...a})=>r.a.createElement(I.a,Object.assign({},a,{className:g("ubntStatusText","ubntStatusText--"+t,e)})),R=a(254),v=a(1944);const T=Object(l.c)(_.g)`
  border: 1px solid ${R.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,h=Object(l.c)(C)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var P=({state:e,className:t=null,...a})=>r.a.createElement(T,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),r.a.createElement(h,{message:v.b[e],status:o.WARNING})),D=a(322),f=a(82),y=a(8),S=a(45),A=a(70),N=a(20);const j={BORDER_WIDTH:2},L={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},x=({type:e,size:t,width:a,height:n})=>{switch(e){case D.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:c,TOP:r}=L;return{top:r,left:e,padding:`${n}px ${c}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function V({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:r,width:i,height:o}){const E=Object(y.useSelector)(D.selectHighlight),[s,m]=Object(A.c)(0),[d,_]=Object(A.c)(!1),u=Object(c.useRef)(null),b=Object(c.useMemo)(()=>(({color:e,show:t,style:a})=>Object(l.a)({"&::before":{border:`${j.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:S.a["blue-light-3"],show:d,style:{...x({type:e,size:r,width:i,height:o}),...a}}),[d,e,a,r,i,o]);return Object(c.useEffect)(()=>{if(Number.isFinite(n)&&n>s)m(s+1);else if(u.current&&t===E.id&&E.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:c,top:r}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:c,top:r}=t.current.getBoundingClientRect();switch(a){case D.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=L,l=r+Object(N.a)(n,"top",a),i=l+c+Object(N.a)(n,"paddingBottom",e)+Object(N.a)(n,"paddingTop",t)+2*j.BORDER_WIDTH;return{bottom:i,height:i-l,top:l}}}})({height:o,highlightRef:u,type:e,highlightStyle:a}),{bottom:l,height:i,top:E}=n.getBoundingClientRect(),s=t>l,m=c>i,d=15;r<E||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-E+r-d}):s&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-l+d})}_(!0)}},[o,s]),Object(c.useEffect)(()=>{d||E.id!==t||m(e=>e+1),d&&E.id!==t&&_(!1)},[E.id,d]),{highlightClassName:b,highlightRef:u}}const w=Object(l.c)(d.a)`
  color: ${f.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=Object(l.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,F=l.a`
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
`;var U=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:c={},dontTranslateText:i=!1,highlightDelay:o=null,highlightStyle:E=null,htmlFor:m=null,offset:d=0,size:_=5,useHtml:u=!1})=>{const{highlightClassName:b,highlightRef:p}=V({type:D.SearchHighlightType.FIELD,forId:m,highlightStyle:E,highlightDelay:o,size:_}),O=!(!n&&!a),I={["col-"+_]:!0,["offset-"+d]:d>0},g=u?s.b:s.c;return r.a.createElement("div",{className:Object(l.b)(I,F,b),ref:p},r.a.createElement("div",{className:"mb-1"},r.a.createElement(M,{className:"settingsGridLabel",htmlFor:m,primary:!0},i?e:r.a.createElement(s.c,{id:e})),t&&r.a.createElement(P,{state:t})),O&&r.a.createElement("div",null,r.a.createElement(w,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?r.a.createElement(g,{id:n,values:c}):a)))};const k=l.a`
  max-width: 960px;
`,z=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:c=8,noWidthLimit:i=!1})=>{const o=n?4:c;return r.a.createElement("div",{className:Object(l.b)("row","mt-"+o,i?null:k,t),ref:a},e)};var B=r.a.forwardRef((e,t)=>r.a.createElement(z,Object.assign({forwardedRef:t},e)));var W=e=>r.a.createElement("div",{className:"mt-2 mb-6"},r.a.createElement(I.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(l.c)("div")`
  flex: 0 1 480px;
`,G=Object(l.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:c=null,section:i=null})=>{const o=R.b.sectionColors.common;return r.a.createElement(B,{className:t,marginTop:0},r.a.createElement(H,null,r.a.createElement(G,{className:Object(l.b)("mt-8","type-larger"),style:{color:o}},r.a.createElement(s.c,{id:e})),a&&r.a.createElement(I.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const $=Object(l.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,K=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>r.a.createElement($,{className:Object(l.b)("container","px-8",t),noDivider:n},r.a.createElement("div",{className:Object(l.b)({"pb-8":!a})},e));K.Content=i,K.Icon=E,K.Label=U,K.Row=B,K.SectionHeader=W,K.Subheader=Y;var X=a(284);const q=Object(l.c)(X.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Z=e=>r.a.createElement(q,Object.assign({},e)),J=a(1926),Q=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(y.useSelector)(Q.C);return e>0?r.a.createElement(ee.a,{alignItems:"center"},r.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",r.a.createElement(s.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):r.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const c={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1948:function(e,t,a){"use strict";var n=a(1966);a.d(t,"fetchSession",(function(){return n.a}));var c=a(1970);a.d(t,"MODEL",(function(){return c.b}));var r=a(1954);a.d(t,"selectFormattedSessionData",(function(){return r.a}));a(2007)},1950:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return E})),a.d(t,"b",(function(){return s}));var n=a(107),c=a(231),r=a(119),l=a(2028);const i={[l.b.EXPERIENCE]:Object.values(l.a)},o=Object(c.b)(n.a.WIFI_MAN,r.a.WIFI_MAN,i),E=Object(c.c)(n.a.WIFI_MAN),s=Object(c.a)(n.a.WIFI_MAN)},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1954:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return u}));var n=a(1179),c=a(4),r=a(18),l=a(1966),i=a(50),o=a(664),E=a(95),s=a(83),m=a(1948),d=a(526);const _=(e,t,a=[])=>Object(c.a)(Object(l.b)(e,t),r.Q,i.selectLocaleSettings,s.c,r.M,(e,t,n,c,r)=>{const{data:l,...i}=e,s=Object(E.d)(t,n,c);return{...i,data:l.map(({assoc_time:e,duration:t,_id:n,mac:c,satisfaction:l,hostname:i=""})=>({id:n,date:Object(E.e)(1e3*e,s,d.a),start:Object(E.e)(1e3*e,s,r),duration:Object(o.c)(t,!0),experience:l,mac:c,hostname:i,client:a.find(e=>"mac"in e&&e.mac===c)}))}}),u=e=>Object(c.a)(t=>{var a,n,c,r;return null===(r=null===(c=null===(n=null===(a=t.models)||void 0===a?void 0:a[m.MODEL])||void 0===n?void 0:n.byId)||void 0===c?void 0:c[e])||void 0===r?void 0:r.record},r.Q,i.selectLocaleSettings,s.c,r.M,(e,t,a,c,r)=>{if(!Object(n.a)(e)){const n=Object(E.d)(t,a,c),{assoc_time:l,duration:i,sw_port:s,mac:m,ip:_,satisfaction:u,hostname:b="",is_wired:p,name:O,_id:I}=e;return{id:I,date:l?Object(E.e)(1e3*l,n,d.a):"",duration:i?Object(o.c)(i,!0):"",start:l?Object(E.e)(1e3*l-1e3*i,n,r):"",end:l?Object(E.e)(1e3*l-i,n,r):"",mac:m,ip:_,port:s,experience:u,hostname:b,is_wired:p,name:O}}return e})},1955:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));const n="stadpi",c="stadpi",r="/api/s/{site}/stat/stadpi",l="by_app",i=8},1957:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(9),c=a(6),r=a(120),l=a(1959);const i=()=>Object(c.t)(l.c,l.d,l.e),o=e=>t=>t(Object(c.b)(n.API_CALL,l.f.DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS,l.f.DISMISS_UNIFI_CARE_ACTIVATION_ERROR,l.a,Object(r.c)(l.b,{mac:e})))},1958:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return W})),a.d(t,"b",(function(){return F})),a.d(t,"e",(function(){return G})),a.d(t,"f",(function(){return Y})),a.d(t,"g",(function(){return X})),a.d(t,"d",(function(){return Q}));var n=a(0),c=a.n(n),r=a(5),l=a(1917),i=a(21);const o=Object(r.c)(i.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,E=Object(r.c)(l.a)`
  bottom: -1px;
`;var s=({isLoading:e,children:t,...a})=>c.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel"}),t,c.a.createElement(E,{isLoading:e,placement:"bottom"})),m=a(8);const d=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen};var _=a(787),u=a(18),b=a(2),p=a(1913),O=a(2935),I=a(2905),g=a(529),C=a(2825);const R=Object(r.c)(C.a)`
  padding: 24px;
`;var v=({columns:e,columnLabels:t,tableType:a})=>{var r;const l=Object(m.useDispatch)(),i=(null===(r=Object(m.useSelector)(Object(u.I)(a)))||void 0===r?void 0:r.initialColumns)||[],o=Object(n.useMemo)(()=>Object.values(e).every(e=>i.includes(e)),[i]),E=Object(n.useCallback)(()=>{const t=o||(null==i?void 0:i.length)?[]:Object.values(e);l(Object(u.S)(a,{initialColumns:t},!0))},[l,o,a,i]),s=Object(n.useMemo)(()=>[{full:!0,id:"showAllFields",checked:o||!!(null==i?void 0:i.length)&&"mixed",children:c.a.createElement(b.c,{id:"COMMON_COLUMN_VISIBILITY_SHOW_ALL_FIELD"}),onChange:E}].concat(Object.values(e).map(e=>({full:!0,id:e,checked:i.includes(e),children:(null==t?void 0:t[e])?c.a.createElement(b.b,{id:t[e]}):e,onChange:({target:{checked:t}})=>{const n=t?[...i,e]:i.filter(t=>t!==e);l(Object(u.S)(a,{initialColumns:n},!0))}}))),[i,a]);return c.a.createElement(R,{spacing:"flush",items:s,variant:"list"})};const T=Object(r.c)(p.a)`
  width: 258px !important;
`;var h;!function(e){e.COLUMNS="columns",e.FILTERS="filters"}(h||(h={}));var P=({filterTitleLabel:e="COMMON_CONTROL_PANEL_FILTER_TITLE",isOpen:t,onClose:a,columnTabProps:r,renderFilterDrawerContent:l,footerProps:i})=>{var o;const[E,s]=Object(n.useState)(h.FILTERS),{tableType:d}=r||{tableType:null},_=Object(m.useDispatch)(),p=(null===(o=Object(m.useSelector)(Object(u.I)(d)))||void 0===o?void 0:o.initialColumns)||[],C=i&&E===h.COLUMNS,R=Object(n.useMemo)(()=>{var e,t;return C&&Object(g.a)(null===(t=null===(e=null===u.c||void 0===u.c?void 0:u.c.tables)||void 0===e?void 0:e[d])||void 0===t?void 0:t.initialColumns,p)},[C,d,p]),P=Object(n.useCallback)(()=>{var e,t,a;const n=[...null!==(a=null===(t=null===(e=null===u.c||void 0===u.c?void 0:u.c.tables)||void 0===e?void 0:e[d])||void 0===t?void 0:t.initialColumns)&&void 0!==a?a:[]];_(Object(u.S)(d,{initialColumns:n},!0))},[_,d]),D=Object(n.useCallback)(({id:e})=>s(e),[s]),f=r?c.a.createElement(O.a,{onSelectTab:D,tabs:[{id:h.FILTERS,label:c.a.createElement(b.c,{id:"COMMON_CONTROL_PANEL_FILTERS"}),render:l},{id:h.COLUMNS,label:c.a.createElement(b.c,{id:"COMMON_CONTROL_PANEL_COLUMNS"}),render:()=>c.a.createElement(v,{columns:r.columns,columnLabels:r.columnLabels,tableType:d})}]}):l(),y=Object(n.useMemo)(()=>C?{label:c.a.createElement(b.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_COLUMNS"}),onClick:P,disabled:R}:i,[C,i,R,P]),S=Object(n.useCallback)(()=>{a(),s(h.FILTERS)},[a,s]);return c.a.createElement(T,{in:t,renderHeader:()=>null,onClose:a,side:"left"},t&&c.a.createElement(I.a,{footerProps:y,headerProps:{label:c.a.createElement(b.c,{id:e})},onClose:S},f))},D=a(32),f=a(36),y=a(2521);var S=({items:e,...t})=>{const{params:a,path:n}=Object(f.n)(),r=Object(f.l)(),l=Object(f.k)(),i=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,r);return c.a.createElement(y.a,Object.assign({tabs:e,selectedTab:null==i?void 0:i.id,onSelectTab:({path:e,params:t={}})=>l.push(Object(f.i)(e,{...a,...t}))},t))};const A=Object(r.c)(S)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var N=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...c})=>({id:e,label:t,disabled:"function"==typeof a?a(c):a,path:n})),[e]);return t?c.a.createElement(A,{selectedTabBold:!0,items:t}):null},j=a(111),L=a(15);const x=Object(r.c)(i.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,V=Object(r.c)(j.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  min-width: 130px;
  white-space: nowrap;
`;function w({filterTitleLabel:e="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return c.a.createElement(x,{alignItems:"center"},c.a.createElement(L.M,{size:"original"}),c.a.createElement(V,{message:e}))}var M=a(215);var F=Object(r.c)(M.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const U=Object(r.c)(F)`
  z-index: 5;
`;var k=({filterTitleLabel:e,items:t})=>{const a=Object(m.useDispatch)();return c.a.createElement(i.a,{height:"100%"},c.a.createElement(U,{onClick:()=>a(Object(_.b)(!0))},c.a.createElement(w,{filterTitleLabel:e})),t)};const z=Object(r.c)(D.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;var B=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterTitleLabel:r,items:l,title:o})=>{const E=(null==e?void 0:e.length)>1,m=!E&&1===e.length;return c.a.createElement(s,{isLoading:a},!t&&c.a.createElement(k,{filterTitleLabel:r,items:l}),E&&c.a.createElement(N,{routes:e}),m&&c.a.createElement(z,{weight:"bold"},e[0].label),o&&c.a.createElement(z,{weight:"bold",hideFilterButton:t},c.a.createElement(b.c,{id:o})),c.a.createElement(i.a,{height:"100%",flex:E||o||m?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var W=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:r,filterFooterProps:l,columnTabProps:i,renderFilterDrawerContent:o,filterTitleLabel:E,items:s,title:b,onClose:p})=>{var O;const I=Object(m.useDispatch)(),g=Object(m.useSelector)(d),C=(null===(O=Object(m.useSelector)(Object(u.I)(null==i?void 0:i.tableType)))||void 0===O?void 0:O.initialColumns)||[];Object(n.useEffect)(()=>()=>{I(Object(_.b)(!1))},[]);const R=Object(n.useCallback)(()=>{I(Object(_.b)(!1)),null==p||p(),(null==i?void 0:i.tableType)&&I(Object(u.S)(i.tableType,{initialColumns:C}))},[I,p,null==i?void 0:i.tableType,C]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{isOpen:g,filterTitleLabel:E,onClose:R,columnTabProps:i,renderFilterDrawerContent:()=>g&&o,footerProps:l}),c.a.createElement(B,{routes:e,hideFilterButton:t,isLoading:a,filterTitleLabel:E,items:s,title:b},r))},H=a(1925);var G=Object(r.c)(H.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var Y=Object(r.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`;const $=r.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,K=r.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function X(e){return c.a.createElement(y.a,Object.assign({className:$,tabClassName:K},e))}var q=a(1732);const Z=Object(r.c)(D.a)`
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,J=Object(r.c)("div",{shouldForwardProp:e=>"toggleStyle"!==e})`
  justify-content: space-between;
  margin-top: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginTop)&&void 0!==t?t:8}}px;
  margin-right: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginRight)&&void 0!==t?t:0}}px;
  margin-bottom: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginBottom)&&void 0!==t?t:0}}px;
  margin-left: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginLeft)&&void 0!==t?t:0}}px;
  width: auto !important;

  label {
    margin-left: 0;
  }
`;var Q=({checked:e,disabled:t,id:a,onChange:n,text:r,toggleStyle:l})=>c.a.createElement(J,{toggleStyle:l},c.a.createElement(q.a,{checked:e,id:a,onChange:n,disabled:t},"string"==typeof r?c.a.createElement(Z,{size:"body"},c.a.createElement(b.c,{id:r})):r))},1959:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return o}));const n="unifiCare",c="/v2/api/unifi-care/details",r="unifiCare",l="/v2/api/unifi-care/device/{mac}/dismiss-activation-notice",i="put",o={DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS:"ace/DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS",DISMISS_UNIFI_CARE_ACTIVATION_ERROR:"ace/DISMISS_UNIFI_CARE_ACTIVATION_ERROR"};var E;!function(e){e.ASSIGNED="ASSIGNED",e.AVAILABLE="AVAILABLE",e.NOT_AVAILABLE="NOT_AVAILABLE",e.RMA_IN_PROGRESS="RMA_IN_PROGRESS",e.REPLACING="REPLACING",e.REVOKED="REVOKED"}(E||(E={}))},1965:function(e,t,a){"use strict";var n=a(1953);const c=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=c},1966:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(6),c=a(1970);const r={method:"post",fetchConfig:{getAllPostData:!0},idField:c.a},l=(e,t)=>Object(n.q)(c.b,c.c,((e,t)=>({data:{[t?"ap_mac":"mac"]:e,_limit:t?20:5,_sort:"-assoc_time"}}))(e,t),r),i=(e,t)=>Object(n.A)(l(e,t))},1967:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(6),c=a(1955);const r=(e,t)=>Object(n.t)(c.c,c.d,c.e,e,{...t,idField:"mac"}),l=(e,t)=>Object(n.A)(r(e,t))},1968:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a(78);const c=n.dpi.ruleMap,r=(e,t)=>+t+(+e<<16),l=e=>{const t=(a=e,c.applications[a]);var a;return t?t.name:void 0}},1969:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(6),c=a(1971);const r=(e,t)=>Object(n.t)(c.a,c.b,c.c,e,t)},1970:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));const n="session",c="/api/s/{site}/stat/session",r="_id"},1971:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r}));const n="unifi-core/general-info",c="/v2/api/"+n,r="ucoreGeneralInfo"},1974:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return E})),a.d(t,"a",(function(){return s}));var n=a(4),c=a(1180),r=a(2027),l=a(1950);const i=e=>({date:new Date(1e3*e.report_timestamp),...e}),o=Object(n.a)(c.f,e=>e.map(e=>i(e))),E=Object(n.a)(c.f,l.d,l.b,(e,t,a)=>e.map(e=>i(e)).filter(e=>Object(r.c)(e,t)&&Object(r.a)(e,a))),s=Object(n.a)(E,l.c,(e,t)=>e.filter(e=>Object(r.b)(e,t)))},1975:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"f",(function(){return _})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return b})),a.d(t,"a",(function(){return p}));var n=a(23),c=a(1916),r=a(95);const l=(e,t)=>Object(r.h)(Object(n.startOfMonth)(Object(n.addMonths)(e,1)),t),i=(e,t)=>Object(n.differenceInMinutes)(e,t)/5,o=(e,t)=>Object(n.subMinutes)(e,5*t),E=(e,t)=>new Date(e-1e3*t*60*60*24);function s(e,t,a,c,s=!1){function m(t,n,c,l){const i=Math.ceil(n(t,e))||0,o=i>8,E=i>32?i/32:1;return Array(Math.min(32,i)+1).fill(t).map((e,t)=>{const n=c(e,t*E);return{value:n.getTime(),label:o&&t%2==1?null:Object(r.e)(n,a,l)}}).reverse()}if(Object(n.differenceInYears)(t,e)>1)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM YYYY");if(Object(n.differenceInMonths)(t,e)>2)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM");if(Object(n.differenceInDays)(t,e)>10){const e=Date.now(),a=t.getTime()>e,l=Object(r.h)(new Date,"UTC"),i=c>l.getTime()?new Date(c):l;return m(a?i:t,n.differenceInDays,E,"MMM D")}if(Object(n.differenceInDays)(t,e)>2){const e=m(t,n.differenceInDays,n.subDays,"ddd"),l=Date.now(),i=t.getTime()>l,o=Object(r.h)(new Date,a);return i&&c>o.getTime()&&(e[e.length-1]={value:c,label:null}),e}return Object(n.differenceInHours)(t,e)>1?m(t,n.differenceInHours,n.subHours,s?"H:mm":"hA"):m(t,i,o,"h:mma")}function m(e,t){function a(a,c,r,l,i=null){const o=a(t,e)||0,E=o>8;return Array(o+1).fill(e).map((t,a)=>{const o=r(c(e),a);return{value:o.getTime(),label:E&&a%2==1?null:Object(n.format)(o,l),tooltipLabel:Object(n.format)(o,i||l)}})}return Object(n.differenceInYears)(t,e)>1?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM YYYY"):Object(n.differenceInMonths)(t,e)>2?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM"):Object(n.differenceInDays)(t,e)>10?a(n.differenceInDays,n.startOfDay,n.addDays,"MMM D"):Object(n.differenceInDays)(t,e)>2?a(n.differenceInDays,n.startOfDay,n.addDays,"ddd","ddd ha"):Object(n.differenceInHours)(t,e)>1?a(n.differenceInHours,n.startOfHour,n.addHours,"ha","ddd ha"):a(n.differenceInMinutes,n.startOfMinute,n.addMinutes,"h:ma","ddd h:ma")}function d(e,t){return[{label:Object(n.format)(e,t),value:e},{label:Object(n.format)(Object(n.subHours)(e,4),t),value:Object(n.subHours)(e,4).getTime()},{label:Object(n.format)(Object(n.subHours)(e,8),t),value:Object(n.subHours)(e,8).getTime()},{label:Object(n.format)(Object(n.subHours)(e,12),t),value:Object(n.subHours)(e,12).getTime()},{label:Object(n.format)(Object(n.subHours)(e,16),t),value:Object(n.subHours)(e,16).getTime()},{label:Object(n.format)(Object(n.subHours)(e,20),t),value:Object(n.subHours)(e,20).getTime()},{label:Object(n.format)(Object(n.subHours)(e,24),t),value:Object(n.subHours)(e,24).getTime()}].reverse()}const _=(e,t,a,l=!1)=>{const i=l?"H:mm":"h:mm A",o=Object(n.startOfHour)(Object(n.addMinutes)(t,55));return Object(c.a)(25,t=>{const c=Object(n.subHours)(o,t).getTime(),l=0===t?e.formatMessage({id:"COMMON_GRANUALITY_0"}):Object(r.e)(c,a,i);return{label:t%6==0?l:null,value:c}}).reverse()};function u(e,t,a){const n=(c=10,r=t-e,Math.log(r)/Math.log(c)-1);var c,r;const l=n>0?Math.ceil(n):Math.floor(n),i=10**l,o=Math.ceil((t-e)/i)/(a-2)*i,E=Math.abs(l),s=[];let m=Math.round(e/i)*i;for(;m<t+2*o;m+=o)s.push({label:0===m?"0":m.toFixed(E),value:m});return s.reverse()}const b=(e,t)=>{const a=t-1;let n=Math.ceil(e);for(;n%a!=0;)n+=1;return Object(c.a)(t,e=>{const t=e?Math.ceil(e*(n/a)):0;return{value:t,label:String(t)}}).reverse()},p=(e,t)=>{let a=e;return t?a=a.replace(/a/i,""):(a=a.replace(/H/g,"h"),a.search(/a/i)<0&&(a+="A")),a}},1977:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(20),c=a(6),r=a(1957);const l=e=>Object(n.a)(Object(c.w)(Object(r.b)(),e.models),"data",{})},1978:function(e,t){},1979:function(e,t,a){e.exports=a.p+"../images/68474b3a657df0b79a1f16133608d618.png"},1980:function(e,t,a){e.exports=a.p+"../images/896960882c109433fd89c09486cfc0f1.png"},1981:function(e,t,a){e.exports=a.p+"../images/2c4f3fd05336814130381a3d418c09b1.png"},1982:function(e,t,a){e.exports=a.p+"../images/30b24022172c6e6e15a3cba5362dbf48.png"},1983:function(e,t,a){e.exports=a.p+"../images/a734bb2cc7227f8e672f96c5872fa130.png"},1984:function(e,t,a){e.exports=a.p+"../images/9de03fd81c53f0d6822343e944c92506.png"},1985:function(e,t,a){e.exports=a.p+"../images/8bfcf783c2c0196ebf98a4f9930a0442.png"},1986:function(e,t,a){e.exports=a.p+"../images/fadc4a0034a315cfb4dd7dfca8a96318.png"},1987:function(e,t,a){e.exports=a.p+"../images/e0332772cd670b1461694ff8679b12c2.png"},1988:function(e,t,a){e.exports=a.p+"../images/23aea509bb7becccdc6dc0f850b52664.png"},1989:function(e,t,a){e.exports=a.p+"../images/4da3dfc26db7d59e5992d3a6bac6e7e9.png"},1990:function(e,t,a){e.exports=a.p+"../images/972b5094e11b72a39eb452c4befe5f33.png"},1991:function(e,t,a){e.exports=a.p+"../images/7c8e7de4df9b6f9befbe12c06d96f235.png"},1992:function(e,t,a){e.exports=a.p+"../images/3037401c66da62835ac1f8426e2cf96e.png"},1993:function(e,t,a){e.exports=a.p+"../images/fa9239e9a4c4beb976c56ebed7fecf41.png"},1994:function(e,t,a){e.exports=a.p+"../images/6810e72bb1f9e902d4953f82e4c08d75.png"},1995:function(e,t,a){e.exports=a.p+"../images/bc53f8af0c6fcc5d7d0ac12c037dd1d4.png"},1996:function(e,t,a){e.exports=a.p+"../images/dccf50fa26da2841db8b004b420002c7.png"},1997:function(e,t,a){e.exports=a.p+"../images/fd7b28d3b6aabfc3497989564a4bf2d8.png"},1998:function(e,t,a){"use strict";var n=a(1957);a.d(t,"dismissUnifiCareActivation",(function(){return n.a})),a.d(t,"fetchUnifiCareDetails",(function(){return n.b}));a(1959);var c=a(1977);a.d(t,"selectUnifiCareDetails",(function(){return c.a}));a(1978)},2001:function(e,t,a){"use strict";a.d(t,"d",(function(){return c.a})),a.d(t,"e",(function(){return l.a})),a.d(t,"f",(function(){return o.a})),a.d(t,"g",(function(){return s.a})),a.d(t,"o",(function(){return d.a})),a.d(t,"p",(function(){return u.a})),a.d(t,"c",(function(){return p.a})),a.d(t,"b",(function(){return I.a})),a.d(t,"j",(function(){return C.a})),a.d(t,"a",(function(){return T})),a.d(t,"i",(function(){return P.a})),a.d(t,"l",(function(){return f.a})),a.d(t,"k",(function(){return S.a})),a.d(t,"m",(function(){return N.a})),a.d(t,"n",(function(){return L.a})),a.d(t,"h",(function(){return V.a}));a(1979),a(1980);var n=a(1981),c=a.n(n),r=a(1982),l=a.n(r),i=a(1983),o=a.n(i),E=a(1984),s=a.n(E),m=a(1985),d=a.n(m),_=a(1986),u=a.n(_),b=a(1987),p=a.n(b),O=a(1988),I=a.n(O),g=a(1989),C=a.n(g),R=a(0),v=a.n(R),T=({fill:e})=>v.a.createElement("svg",{width:"35",height:"21",viewBox:"0 0 35 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.1501 4.93596C16.7567 5.53369 16.4494 6.16878 16.2281 6.84123C16.0068 7.51368 15.847 8.12386 15.7487 8.67178H13.9047C14.003 8.02424 14.1751 7.26462 14.421 6.39293C14.6669 5.52124 15.1094 4.662 15.7487 3.81521C16.4863 2.71937 17.5804 1.79787 19.031 1.0507C20.4816 0.303536 22.3379 -0.0451415 24.5999 0.00466984L24.2311 1.87258C22.2641 1.87258 20.7521 2.17145 19.6948 2.76918C18.6376 3.36691 17.7894 4.08917 17.1501 4.93596ZM16.2649 9.94199C17.1009 9.94199 17.7033 10.1537 18.0721 10.5771C18.4409 11.0005 18.5269 11.7352 18.3302 12.7812L16.6337 20.7012H14.5685L16.1174 13.5284C16.2158 12.831 16.1912 12.3454 16.0437 12.0714C15.8961 11.7975 15.5519 11.6605 15.011 11.6605C14.6176 11.6605 14.212 11.8224 13.794 12.1461C13.376 12.4699 13.0933 12.9805 12.9457 13.6778L11.4705 20.7012H9.40527L11.6181 10.2409H13.5358L13.3145 11.4363C13.6588 10.988 14.1013 10.6269 14.6422 10.3529C15.1831 10.079 15.724 9.94199 16.2649 9.94199ZM30.6483 12.5572H25.7801L26.5915 8.67197H31.4596L31.9022 6.80405H24.8212L21.8708 20.7013H24.0836L25.4113 14.3504H30.2795L30.6483 12.5572ZM20.3955 10.2406H22.4608L20.3218 20.7009H18.1827L20.3955 10.2406ZM20.7643 8.33574C20.7152 8.41046 20.666 8.52254 20.6168 8.67197H22.7559L23.1984 6.80405C22.6083 6.85387 22.1412 6.99085 21.797 7.215C21.4528 7.43915 21.1577 7.70065 20.9119 7.99952C20.8627 8.14895 20.8135 8.26103 20.7643 8.33574ZM30.5745 20.7009L32.7135 10.2406H34.8525L32.6397 20.7009H30.5745ZM10.733 6.80405H8.52021L6.38117 16.7413C6.18448 17.6379 5.87715 18.2855 5.45917 18.684C5.0412 19.0825 4.51259 19.2817 3.87334 19.2817C3.18491 19.2817 2.71777 19.0825 2.4719 18.684C2.22603 18.2855 2.20145 17.6379 2.39814 16.7413L4.46342 6.80405H2.25062L0.185345 16.5919C-0.158868 18.1859 -0.0236405 19.3191 0.591025 19.9915C1.20569 20.664 2.17686 21.0002 3.50454 21.0002C4.83222 21.0002 5.93861 20.664 6.82373 19.9915C7.70885 19.3191 8.32352 18.1859 8.66773 16.5919L10.733 6.80405ZM23.9361 3.2177L23.4935 5.08561C22.51 5.18523 21.7233 5.42184 21.1332 5.79542C20.5431 6.169 20.1005 6.57994 19.8055 7.02824C19.6088 7.27729 19.449 7.55125 19.3261 7.85012C19.2031 8.14899 19.0925 8.42295 18.9941 8.672H17.1501C17.2485 8.2237 17.3837 7.7754 17.5558 7.32711C17.7279 6.87881 17.9861 6.4056 18.3303 5.90749C18.822 5.21014 19.535 4.59995 20.4693 4.07694C21.4036 3.55392 22.5592 3.26751 23.9361 3.2177ZM34.2256 7.14028L33.4511 6.80405L33.0085 8.67197H35.0001C35.0001 7.87499 34.7419 7.36443 34.2256 7.14028Z",fill:e})),h=a(1990),P=a.n(h),D=(a(1991),a(1992),a(1993)),f=a.n(D),y=a(1994),S=a.n(y),A=a(1995),N=a.n(A),j=a(1996),L=a.n(j),x=a(1997),V=a.n(x)},2006:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));const n={success:{lo:80,hi:100,within:!0},warning:{lo:60,hi:80,within:!0},danger:{lo:0,hi:60,within:!0}},c=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"1W",label:"1W",value:168},{id:"1M",label:"1M",value:720}]},2007:function(e,t){},2008:function(e,t){},2009:function(e,t,a){"use strict";var n=a(1969);a.d(t,"fetchUcoreGeneralInfo",(function(){return n.a}));a(1971);var c=a(2010);a.d(t,"selectHasCloudAccessEnabled",(function(){return c.a})),a.d(t,"selectHasCloudBackupEnabled",(function(){return c.b}));a(2011)},2010:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(4),c=a(6),r=a(1969);const l=Object(n.a)(e=>Object(c.w)(Object(r.a)(),e.models),e=>{var t;return null!==(t=null==e?void 0:e.data)&&void 0!==t?t:{}}),i=Object(n.a)(l,({cloud_access_enabled:e})=>e),o=Object(n.a)(l,({cloud_backup_enabled:e})=>e)},2011:function(e,t){},2014:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(0),c=a.n(n),r=a(2),l=a(63),i=a(255),o=a(2856),E=a(4),s=a(1967),m=a(1968),d=a(528),_=a(2927),u=a(1909);const b=(e,t,a)=>(t&&t.constructor===Object&&Object.keys(t).forEach(n=>{void 0===e[n]||a&&a.includes(n)?e[n]=t[n]:Number.isFinite(e[n])?e[n]=(e[n]||0)+t[n]:Array.isArray(e[n])?e[n]=e[n].concat(t[n]):e[n]&&e[n].constructor===Object&&b(e[n],t[n])}),e),p=(e,t)=>Object(d.a)(e).reduce((e,a)=>e?b(e,a,t):a,void 0);class O{constructor(e){this.data=e}dedeuplicatedBy(e,t){return this.data=((e,t,a)=>Object(_.a)(Object(u.a)(e,t)).map(e=>p(e,a)))(this.data,e,t),this}sortedBy(e,t){return this.data.sort((a,n)=>{const c=a[e]-n[e];return t?-c:c}),this}withLimit(e,t){let a=e;return this.data.length>=a&&(a-=1,this.other=p(this.data.slice(a),t),this.other.generated=!0),this.data=this.data.splice(0,a),this}countTotal(e){const t=this.other?[...this.data,this.other]:this.data;return this.total=p(t,e)||{},this}withMap(e,t){return this.mapFunction=a=>{const n=t?a:{};return Object.keys(e).forEach(t=>{n[t]=e[t](a)}),n},this}withOtherDefaults(e){return this.other={...this.other,...e},this}getData(e=!1){let t;return t=this.other.generated?[...this.data,this.other].map(this.mapFunction):this.data.map(this.mapFunction),t=t.map((t,a)=>({index:a,...e?{id:a.toString()}:[],...t})),{data:t,total:this.total}}}var I=a(28),g=a(38),C=a(1955);const R=Object(l.a)(e=>{if(0===e.length)return{data:[],total:{}};const t=e.map(e=>({label:Object(m.a)(Object(m.b)(e.cat,e.app))||c.a.createElement(r.c,{id:"CLIENT_PROPERTY_DPI_UNKNOWN_LABEL"}),packets:e.rx_packets+e.tx_packets,bytes:e.rx_bytes+e.tx_bytes,...e})),a={bytesParsed:e=>Object(i.c)(e.bytes),pkts:e=>Object(o.a)(e.packets,{spacer:" "})};return new O(t).dedeuplicatedBy("label").sortedBy("bytes",!0).withLimit(C.a).countTotal().withMap(a,!0).withOtherDefaults({label:c.a.createElement(r.c,{id:"CLIENT_PROPERTY_DPI_OTHER"})}).getData(!0)}),v=(e,t)=>Object(g.b)()(Object(E.a)(((e,t)=>Object(g.b)()(Object(E.a)(Object(s.b)(e,t),e=>{var t;return(null===(t=Object(I.c)(e))||void 0===t?void 0:t.by_app)||[]}),e=>e))(e,t),e=>R(e)),e=>e)},2015:function(e,t,a){"use strict";var n=a(1974);a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c}));var c=a(1950);a.d(t,"a",(function(){return c.a})),a.d(t,"d",(function(){return c.c}))},2016:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(73),c=a(46),r=a(69);const l=(e,t,a)=>{var r;const l=Object(n.getUplinkDevice)(t,e),i=l&&Object(c.c)(l)||"",o={id:e.id,ip:e.ip,isUp:!!e.uptime,name:e.name,type:e.type,uplink:l,uplinkName:i,vendor:null===(r=Object(n.clientFingerPrintCombiner)(a,e))||void 0===r?void 0:r.fingerprint_device_vendor};switch(o.type){case n.ClientType.VPN:e.type===n.ClientType.VPN&&(o.remote_ip=e.remote_ip,o.vpn_interface=e.vpn_interface);break;case n.ClientType.WIRED:e.type===n.ClientType.WIRED&&(o.is_wired=e.is_wired,o.sw_port=e.sw_port,o.wired_rate_mbps=e.wired_rate_mbps);break;case n.ClientType.WIRELESS:e.type===n.ClientType.WIRELESS&&(o.ap_mac=e.ap_mac,o.channel=e.channel,o.essid=e.essid,o.eagerly_discovered=e.eagerly_discovered,o.radio=e.radio,o.radio_proto=e.radio_proto,o.rssi=e.rssi,o.signal=e.signal,o.wifi_experience_score=e.wifi_experience_score)}return o.type!==n.ClientType.VPN&&e.type!==n.ClientType.VPN&&(o.blocked=e.blocked,o.fingerprint=e.fingerprint,o.first_seen=e.first_seen,o.last_seen=60*Math.floor((e.last_seen||0)/60),o.fixed_ip=e.fixed_ip,o.hostname=e.hostname,o.is_guest=e.is_guest,o.mac=e.mac,o.note=e.note,o.oui=e.oui,o.uplink_mac=(null==l?void 0:l.mac)||e.uplink_mac,o.unifi_device_info=e.unifi_device_info,o.use_fixedip=e.use_fixedip,o.network_name=e.network_name,o.usage_bytes=e.usage_bytes),o},i=e=>{const{name:t}=e,a=Object(n.getPhysicalName)(e);return e.type===n.ClientType.VPN?e.name:t||a};function o(e){var t,a,n,c,l,i,o,E,s,m;return(null===(t=null==e?void 0:e[r.b.STATUS])||void 0===t?void 0:t[r.a.ACTIVE])&&!(null===(a=null==e?void 0:e[r.b.STATUS])||void 0===a?void 0:a[r.a.OFFLINE])&&!(null===(n=null==e?void 0:e[r.b.STATUS])||void 0===n?void 0:n[r.a.BLOCKED])&&(null===(c=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===c?void 0:c[r.c.WIRED])&&(null===(l=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===l?void 0:l[r.c.VPN])&&(null===(i=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===i?void 0:i[r.c.NG])&&(null===(o=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===o?void 0:o[r.c.NA])&&(null===(E=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===E?void 0:E[r.c.USERS])&&(null===(s=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===s?void 0:s[r.c.GUESTS])&&!(null===(m=null==e?void 0:e[r.b.DEVICE])||void 0===m?void 0:m[r.b.DEVICE])}function E(e){var t,a,n,c,l,i,o,E,s,m;return(null===(t=null==e?void 0:e[r.b.STATUS])||void 0===t?void 0:t[r.a.ACTIVE])&&(null===(a=null==e?void 0:e[r.b.STATUS])||void 0===a?void 0:a[r.a.OFFLINE])&&(null===(n=null==e?void 0:e[r.b.STATUS])||void 0===n?void 0:n[r.a.BLOCKED])&&(null===(c=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===c?void 0:c[r.c.WIRED])&&(null===(l=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===l?void 0:l[r.c.VPN])&&(null===(i=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===i?void 0:i[r.c.NG])&&(null===(o=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===o?void 0:o[r.c.NA])&&(null===(E=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===E?void 0:E[r.c.USERS])&&(null===(s=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===s?void 0:s[r.c.GUESTS])&&!(null===(m=null==e?void 0:e[r.b.DEVICE])||void 0===m?void 0:m[r.b.DEVICE])}},2018:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{fetch(e,{mode:"no-cors"}).then(()=>{a(!0)}).catch(()=>a(!1))},[e]),t}},2019:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),c=a.n(n),r=a(36),l=a(8),i=a(5),o=a(215),E=a(373),s=a(781),m=a(97),d=a(230),_=a(46);const u=Object(i.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
`,b=({mac:e,...t})=>{const a=Object(r.k)(),n=Object(l.useDispatch)(),i=Object(l.useSelector)(m.a),o=Object(l.useSelector)(d.selectDevicesBasicDataMemoized).find(t=>t.mac===e);return o?c.a.createElement(u,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation(),a.push(`/${i}/devices/properties/${e}/overview`),n(Object(E.g)({type:s.b.DEVICE,mac:e}))}},t),Object(_.c)(o)):null};t.b=b;const p=Object(i.c)(b)`
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
`},2020:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(788);t.a=({item:e,className:t,hideIcon:a=!1})=>{const{speed_tests:n}=e,l=n&&n.reduce((e,{download_speed_bytes:t=0})=>e+t,0);return c.a.createElement(r.a,{className:t,bytes:l,direction:"down",size:"body",pow:2,hideIcon:a})}},2021:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(788);t.a=({item:e,className:t,hideIcon:a=!1})=>{const{speed_tests:n}=e,l=n&&n.reduce((e,{upload_speed_bytes:t=0})=>e+t,0);return c.a.createElement(r.a,{className:t,bytes:l,direction:"up",size:"body",pow:2,hideIcon:a})}},2022:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(34),c=a(50);const r=e=>{const t=Object(c.selectIsIpsDisabled)(e),a=Object(n.selectWanNetworks)(e).every(({wan_smartq_enabled:e})=>!e);return t&&a}},2027:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return E}));var n=a(1179),c=a(67),r=a(159),l=a(2006);const i=(e,t)=>{if(void 0!==t&&""!==t){const a=t.toLowerCase().trim();return["client_model","client_name","device_model","device_name","isp_name","public_ip","wlan_essid"].some(t=>{var n,c;return null===(c=null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.toLowerCase)||void 0===c?void 0:c.call(n).includes(a)})}return!0},o=(e,t)=>!Object(n.a)(t)&&Object.keys(t).every(a=>{switch(a){case"experience":return!t.experience.length||t.experience.some(t=>{const a=l.b[t];return Object(r.f)(a,e.client_wifi_experience)});default:return Object(c.a)(t[a])?t[a].includes(e[a]):void 0===e[a]||e[a]===t[a]}}),E=(e,t)=>{if(t){return(Date.now()/1e3-e.report_timestamp)/3600<=t}return!0}},2028:function(e,t,a){"use strict";var n,c;a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),function(e){e.WLAN_ESSID="wlan_essid",e.DEVICE_NAME="device_name",e.EXPERIENCE="experience"}(n||(n={})),function(e){e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning"}(c||(c={}))},2029:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(78),l=a(117),i=a(785);t.a=({model:e,name:t,withName:a=!1,width:n=25,height:o=25,...E})=>{const s=r.deviceModels[e],m=a?i.a:l.c,d=a?t||(null==s?void 0:s.name):void 0;return c.a.createElement(m,Object.assign({device:{model:e,type:null==s?void 0:s.type,name:d},width:n,height:o},E))}},2030:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(255),l=a(793);t.a=({item:e})=>{const{client_link_download_rate_kbps:t,client_link_upload_rate_kbps:a}=e,n=`${Object(r.c)(1e3*t/8,"bitrate")} / ${Object(r.c)(1e3*a/8,"bitrate")}`;return c.a.createElement(l.a,null,n)}},2035:function(e,t,a){"use strict";var n=a(73),c=a(0),r=a(8);t.a=({client:e,props:t,children:a})=>{const{id:l}=e,i="uptime"in e&&e.uptime||"isUp"in e&&e.isUp;let o=n.ClientModelType.ACTIVE;e.type===n.ClientType.VPN?o=n.ClientModelType.VPN:i||(o="blocked"in e&&e.blocked?n.ClientModelType.BLOCKED:n.ClientModelType.OFFLINE);const E=Object(c.useMemo)(()=>Object(n.selectClientProps)(l,t,o),[l,o]);return a(Object(r.useSelector)(E))}},2038:function(e,t,a){"use strict";var n=a(215),c=a(32),r=a(0),l=a.n(r),i=a(5),o=a(2),E=a(8),s=a(36),m=a(373),d=a(781),_=a(70);const u=Object(i.c)(n.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
  border: 0;
  line-height: 1.6;
`,b=Object(i.c)(c.a)`
  max-width: 220px;
`;t.a=({uplinkMac:e,uplinkName:t,uplinkPort:a})=>{const n=Object(E.useDispatch)(),i=Object(s.k)(),p=Object(_.a)("/devices/properties/:mac/overview"),O=Object(r.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),i.push(p.replace(":mac",e)),n(Object(m.g)({type:d.b.DEVICE,mac:e}))},[n,i,p,e]);return t?l.a.createElement(u,{size:"small",variant:"link",onClick:O},l.a.createElement(b,{size:"body",color:"info",truncate:!0},t," ",a?"#"+a:"")):l.a.createElement(c.a,{size:"body",color:"secondary"},l.a.createElement(o.c,{id:"COMMON_HYPHEN"}))}},2039:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=({strength:e,color:t,inactiveColor:a="currentColor",width:n,height:r})=>c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27 26",width:n,height:r},c.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{fill:e>=1?t:a,x:"0",y:"16",width:"3",height:"10"}),c.a.createElement("rect",{fill:e>=2?t:a,x:"6",y:"12",width:"3",height:"14"}),c.a.createElement("rect",{fill:e>=3?t:a,x:"12",y:"8",width:"3",height:"18"}),c.a.createElement("rect",{fill:e>=4?t:a,x:"18",y:"4",width:"3",height:"22"}),c.a.createElement("rect",{fill:e>=5?t:a,x:"24",y:"0",width:"3",height:"26"})))},2045:function(e,t,a){"use strict";var n=a(1967);a.d(t,"fetchTraffic",(function(){return n.a}));var c=a(1955);a.d(t,"DPI_CONVERTER_LIMIT",(function(){return c.a}));var r=a(2014);a.d(t,"selectFormattedStaDpiData",(function(){return r.a}));a(2008),a(1968)},2046:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2047:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2048:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5);const l=Object(r.c)("div")`
  table:after {
    content: '';
    display: block;
    position: absolute;
    right: -32px;
    width: 32px;
    height: 1px;
  }
`;t.a=({children:e})=>c.a.createElement(l,null,e)},2050:function(e,t,a){"use strict";var n=a(36),c=a(0),r=a.n(c),l=a(5),i=a(1913),o=a(8),E=a(235),s=a(527),m=a(43),d=a(781),_=a(4),u=a(460),b=a.n(u),p=a(1743),O=a(3),I=a(73),g=a(454),C=a(38),R=a(106);var v=a(2015);const T=e=>{var t,a,n;return null!==(n=null===(a=null===(t=null==e?void 0:e.shared)||void 0===t?void 0:t.propertypanel)||void 0===a?void 0:a.showing)&&void 0!==n&&n},h=e=>{var t,a,n;return null!==(n=null===(a=null===(t=null==e?void 0:e.shared)||void 0===t?void 0:t.propertypanel)||void 0===a?void 0:a.activeItem)&&void 0!==n?n:{}},P=Object(_.a)(h,({mac:e})=>e),D=(Object(_.a)(h,({id:e})=>e),Object(_.a)(h,({type:e})=>e),[]),f=e=>Object(_.b)(_.c,(e,t)=>b()(Object(p.a)(e,D),Object(p.a)(t,D)))(Object(_.a)(t=>{var a,n,c,r;return(null===(r=null===(c=null===(n=null===(a=t.models)||void 0===a?void 0:a[O.MODEL])||void 0===n?void 0:n.byId)||void 0===c?void 0:c[e])||void 0===r?void 0:r.record)||{}},e=>e),e=>e),y=Object(_.a)(O.selectDevicesData,P,(e,t)=>{const a=e.find(e=>e.mac===t);return e.reduce((e,t)=>{var n;return a&&(null===(n=a.uplink_table)||void 0===n?void 0:n.find(e=>e.mac===t.mac))&&e.push({value:t.mac,label:t.name||t.mac}),e},[])}),S=["uptime","rx_bytes","tx_bytes","rx_packets","tx_packets","rx_bytes-r","tx_bytes-r"],A=e=>Object(_.b)(_.c,(e,t)=>b()(Object(p.a)(e,S),Object(p.a)(t,S)))(Object(_.a)(t=>{var a,n,c,r,l,i,o;return(null===(o=(null===(n=null===(a=t.models[I.MODEL])||void 0===a?void 0:a.byId)||void 0===n?void 0:n[e])||(null===(r=null===(c=t.models[I.MODEL_BLOCKED])||void 0===c?void 0:c.byId)||void 0===r?void 0:r[e])||(null===(i=null===(l=t.models[I.MODEL_OFFLINE])||void 0===l?void 0:l.byId)||void 0===i?void 0:i[e]))||void 0===o?void 0:o.record)||{}},e=>e.type!==I.ClientType.VPN?(e=>e.id?{_id:e.id,id:e.id,name:e.name,type:e.type,rx_bytes:e.rx_bytes,tx_bytes:e.tx_bytes,rx_packets:e.rx_packets,tx_packets:e.tx_packets,ip:e.ip,uptime:e.uptime,network_id:e.network_id,unifi_device_info:e.unifi_device_info,connected:Object(I.getIsClientConnected)(e),connection:Object(I.getConnection)(e),displayName:Object(I.getClientDisplayName)(e),physicalName:Object(I.getPhysicalName)(e),authorized:"authorized"in e?e.authorized:void 0,gw_mac:"gw_mac"in e?e.gw_mac:void 0,is_guest:"is_guest"in e?e.is_guest:void 0,mac:"mac"in e?e.mac:void 0,hostname:"hostname"in e?e.hostname:void 0,fingerprint:"fingerprint"in e?e.fingerprint:void 0,oui:"oui"in e?e.oui:void 0,blocked:"blocked"in e?e.blocked:void 0,use_fixedip:"use_fixedip"in e?e.use_fixedip:void 0,fixed_ip:"fixed_ip"in e?e.fixed_ip:void 0,note:"note"in e?e.note:void 0,usergroup_id:"usergroup_id"in e?e.usergroup_id:void 0,signal:"signal"in e?e.signal:void 0,radio:"radio"in e?e.radio:void 0,radio_proto:"radio_proto"in e?e.radio_proto:void 0,tx_rate:"tx_rate"in e?e.tx_rate:void 0,rx_rate:"rx_rate"in e?e.rx_rate:void 0,"tx_bytes-r":"tx_bytes-r"in e?e["tx_bytes-r"]:void 0,"rx_bytes-r":"rx_bytes-r"in e?e["rx_bytes-r"]:void 0,rssi:"rssi"in e?e.rssi:void 0,essid:"essid"in e?e.essid:void 0,is_wired:"is_wired"in e?e.is_wired:void 0,powersave_enabled:"powersave_enabled"in e?e.powersave_enabled:void 0,network_name:"network_name"in e?e.network_name:void 0,channel:"channel"in e?e.channel:void 0,user_id:"user_id"in e?e.user_id:void 0,uplink_mac:"uplink_mac"in e?e.uplink_mac:void 0,sw_port:"sw_port"in e?e.sw_port:void 0,wifi_experience_score:"wifi_experience_score"in e?e.wifi_experience_score:void 0,wired_rate_mbps:"wired_rate_mbps"in e?e.wired_rate_mbps:void 0,eagerly_discovered:"eagerly_discovered"in e?e.eagerly_discovered:void 0}:null)(e):null),e=>e),N=e=>Object(C.b)()(Object(_.a)(t=>{var a,n,c;return(null===(c=null===(n=null===(a=t.models[I.MODEL])||void 0===a?void 0:a.byId)||void 0===n?void 0:n[e])||void 0===c?void 0:c.record)||{}},Object(R.selectUnifiDevice)(e),(e,t)=>((e,t)=>{if(!e.id&&!t.id)return null;const a=Object.assign({},e,t);return{id:a.id,mac:a.mac,model:a.model,oui:a.oui,fingerprint:a.fingerprint,unifi_device_info:a.unifi_device_info,displayable_version:a.displayable_version,product_line:a.product_line,ip:a.ip,network_name:a.network_name,uplink_mac:a.uplink_mac,is_wired:a.is_wired,name:a.name,hostname:a.hostname,note:a.note,usergroup_id:a.usergroup_id,fixed_ip:a.fixed_ip,use_fixedip:a.use_fixedip,user_id:a.user_id,network_id:a.network_id,type:a.type,sw_port:"sw_port"in a?a.sw_port:void 0,essid:"essid"in a?a.essid:void 0}})(e,t)),e=>e);var j=a(373),L=a(70),x=a(178),V=a(32),w=a(15),M=a(2),F=a(21),U=a(117),k=a(522),z=a(792),B=a(793);const W=Object(l.c)(k.a,{shouldForwardProp:e=>!["width","height"].includes(e)})`
  float: left;
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  ${({width:e})=>e&&`width: ${e}px;`}
  ${({height:e})=>e&&`height: ${e}px;`}
`;var H=({defaultName:e="",client:t=null,width:a,height:n,alt:c})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(W,{client:t,width:a,height:n,alt:c}),r.a.createElement(B.a,null,Object(I.getClientDisplayName)(t)||e));var G=({data:{client_icon_device_id:e,client_icon_engine_id:t,client_name:a},name:n,withName:c=!1})=>{const l=c?H:k.a;return r.a.createElement(l,{client:{fingerprint:{dev_id:e,computed_engine:t},name:n||a,is_wired:!1},alt:n})},Y=a(46),$=a(2016);const K=Object(l.c)("div")`
  margin-left: 8px;
`,X=Object(l.c)(V.a)`
  max-width: 200px;
`,q=Object(l.c)(V.a)`
  margin-left: 8px;
`,Z=Object(l.c)(V.a)`
  margin-left: 8px;
`,J=Object(l.c)("div")`
  max-height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,Q=Object(l.c)(z.a)`
  margin-right: 8px;
`,ee=Object(l.c)(w.qc)`
  margin-left: 8px;
`,te=({activeItem:{data:e,data:{displayName:t=Object(I.getClientDisplayName)(e)}}})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(J,null,r.a.createElement(k.a,{client:e,alt:t})),r.a.createElement(K,null,r.a.createElement(X,{size:"body",weight:"bold",truncate:!0},Object($.c)(e)))),ae=r.a.memo(({activeItem:e})=>{var t,a;return r.a.createElement(F.a,{alignItems:"center"},Object(O.hasActiveUnifiCare)(e.data)&&r.a.createElement(Q,{width:30,height:30}),r.a.createElement(J,null,r.a.createElement(U.c,{device:e.data})),r.a.createElement(K,null,r.a.createElement(X,{size:"body",weight:"bold",truncate:!0},Object(Y.d)(e.data))),(null===(t=e.data)||void 0===t?void 0:t.model_in_eol)&&r.a.createElement(q,{color:"danger",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_LABEL_EOL"})),(null===(a=e.data)||void 0===a?void 0:a.model_in_lts)&&r.a.createElement(q,{color:"warning",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_LABEL_LTS"})),Object(O.isU6)(e.data)&&r.a.createElement(ee,{size:"medium",isActive:!0}))},(e,t)=>{var a,n,c,r;return(null===(a=e.activeItem.data)||void 0===a?void 0:a.mac)===(null===(n=t.activeItem.data)||void 0===n?void 0:n.mac)&&(null===(c=e.activeItem.data)||void 0===c?void 0:c.name)===(null===(r=t.activeItem.data)||void 0===r?void 0:r.name)}),ne=({activeItem:{data:e,data:{client_name:t}}})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(J,null,r.a.createElement(G,{data:e})),r.a.createElement(K,null,r.a.createElement(X,{size:"body",weight:"bold",truncate:!0},t)));var ce=({activeItem:e})=>{switch(e.type){case d.b.CLIENT:case d.b.UNIFI_DEVICE_CLIENT:return r.a.createElement(te,{activeItem:e});case d.b.DEVICE:return r.a.createElement(ae,{activeItem:e});case d.b.WIFI_MAN:return r.a.createElement(ne,{activeItem:e});case d.b.ISP_DETAILS:return r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(w.F,{width:25.25,height:25.25}),r.a.createElement(Z,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_INTERNET"})));default:return null}},re=a(83),le=a(78);const ie=(e,t)=>e?t===d.b.DEVICE?Object(O.isUspp)(e)?d.a.USPP:Object(O.isUsps)(e)?d.a.USPS:Object(O.isUlte)(e)?d.a.LTE:Object(O.isUspPduPro)(e)?d.a.USPPDUP:Object(O.isUxg)(e)?d.a.UXG:Object(O.isUdmPro)(e)||Object(O.isUdmProSe)(e)?d.a.UDMPRO:Object(O.isUsAggPro)(e)?d.a.USAGGPRO:Object(O.getIsInWallAp)(e)?d.a.UAP_IW:Object(O.getIsUsl8Mp)(e)?d.a.USL8MP:Object(O.isUap6mp)(e)?d.a.UAP6MP:Object(O.getIsUspRps)(e)?d.a.USPRPS:Object(O.isUbbXg)(e)?d.a.UBBXG:(e=>(le.deviceModels[e.model]||{hybrid:void 0}).hybrid||e.type)(e):t===d.b.CLIENT?d.a.CLIENT:t:null;var oe;!function(e){e.WAN="wan",e.ALL="all"}(oe||(oe={}));var Ee=a(1818),se=a(452),me=a(647),de=a(215),_e=a(226);const ue=Object(l.c)(F.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`,be=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  margin-top: 7px;
`;var pe=({activeItem:e})=>{const t=Object(n.k)(),{site:a}=Object(n.m)(),c=Object(o.useSelector)(m.j),{uptime:l,ip:i,port_idx:E,configuration:{wan_provider_capabilities:s,wan_dns1:d,wan_dns2:_},details:{service_provider:u}}=e,{download_kilobits_per_second:b=0,upload_kilobits_per_second:p=0}=s,O=1e3*b/8,I=1e3*p/8;return r.a.createElement(F.a,{flexDirection:"column"},(null==u?void 0:u.name)?r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_SERVICE_PROVIDER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},u.name)):null,(null==u?void 0:u.city)?r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_LABEL_LOCATION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},u.city)):null,r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DOWNLOAD_CAPACITY"})),r.a.createElement(me.a,{type:"bytes",input:O,options:"bitrate",color:"secondary",size:"body"})),r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_UPLOAD_CAPACITY"})),r.a.createElement(me.a,{type:"bytes",input:I,options:"bitrate",color:"secondary",size:"body"})),l?r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_UPTIME"})),r.a.createElement(me.a,{type:"uptime",input:l,color:"secondary",size:"body"})):null,r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_WAN_IP",values:{port_idx:E}})),r.a.createElement(V.a,{color:"secondary",size:"body"},i)),(d||_)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),r.a.createElement(V.a,{color:"secondary",size:"body"},d)),r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),r.a.createElement(V.a,{color:"secondary",size:"body"},_))),r.a.createElement(be,null,r.a.createElement(de.a,{size:"small",type:"button",variant:"inline",onClick:()=>{const e=Object(n.i)(c,{site:a});t.push(`${e}${_e.a.internetSettings}`)}},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_LINK_INTERNET_SETTINGS"}))))},Oe=a(2019),Ie=a(97);const ge=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
`;var Ce=({device:e,...t})=>{const a=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),c=Object(o.useSelector)(Ie.a),l=Object(n.k)(),i=Object(o.useDispatch)(),E=Object(O.getUplinkDisplayName)(e,a);return E?r.a.createElement(ge,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:e=>{e.preventDefault(),e.stopPropagation(),l.push(`/${c}/devices/properties/${a.mac}`),i(Object(j.g)({type:d.b.DEVICE,mac:a.mac}))}},t),E):null};const Re=Object(l.c)(F.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`;var ve=()=>{const e=Object(o.useSelector)(O.selectAvailableUlteDevice);return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Re,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_LTE_BACKUP"})),r.a.createElement(Oe.b,{mac:e.mac})),r.a.createElement(Re,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_UPLINK"})),r.a.createElement(Ce,{device:e})))};const Te=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var he=({activeItem:e})=>{const t=Object(o.useSelector)(se.d);return r.a.createElement(Te,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(pe,{activeItem:e})},...t?[{id:"wanFailover",label:r.a.createElement(M.c,{id:"DASHBOARD_ISP_ACCORDION_TITLE_WAN_FAILOVER"}),renderContent:()=>r.a.createElement(ve,null)}]:[]],multiOpen:!0})},Pe=a(1851),De=a(365),fe=a(71),ye=a(784);const Se=Object(l.c)("div")`
  padding: 28px 30px;

  table {
    th {
      font-size: ${({theme:e})=>e.fontSizes[1]}px;
    }
  }
`,Ae=Object(l.c)(me.a)`
  color: ${({theme:e})=>e.motifPalette.uBlue06};
`,Ne=Object(l.c)(me.a)`
  color: ${({theme:e})=>e.motifPalette.purple06};
`,je=Object(l.c)(V.a)`
  color: inherit;
`,Le=Object(l.c)("div")`
  margin: 20px 0;
`,xe=[{id:"time",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_HEADER_TIME"})),renderCell:({time:e})=>r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(ye.a,{date:new Date(e)})),minWidth:150},{id:"xput_download",minWidth:100,renderLabel:()=>r.a.createElement(fe.g,{alignItems:"center"},r.a.createElement(je,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_STATUS_DOWNLOAD"}))),renderCell:({xput_download:e})=>r.a.createElement(Ae,{size:"body",type:"bytes",options:"bitrate",input:1e6*e/8})},{id:"xput_upload",minWidth:100,renderLabel:()=>r.a.createElement(fe.g,{alignItems:"center"},r.a.createElement(je,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_STATUS_UPLOAD"}))),renderCell:({xput_upload:e})=>r.a.createElement(Ne,{size:"body",type:"bytes",options:"bitrate",input:1e6*e/8})}];var Ve=({activeItem:e})=>{const t=Object(o.useDispatch)(),a=Object(o.useSelector)(De.selectSpeedTestReportData);return Object(c.useEffect)(()=>{t(Object(De.fetchSpeedTestReport)())},[e.mac,t]),r.a.createElement(Se,null,r.a.createElement(Pe.a,{idField:"_id",hideCellOverflow:!1,columns:xe,disableColumnFilters:!0,items:a,renderFooter:()=>a.length>0?r.a.createElement(Le,null,r.a.createElement(M.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})):r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_NO_SPEED_TESTS"})}))},we=a(45),Me=a(2029),Fe=a(159);const Ue={width:25,height:25},ke=Object(l.c)(F.a)`
  margin-top: 10px;
  ${({bordered:e})=>e&&`box-shadow: 0px 24px 2px -24px ${we.a["white-8"]};`}
`,ze=Object(l.c)("div")`
  display: block;
  position: absolute;
  border-bottom: ${({theme:e,wired:t})=>`2px ${t?"solid":"dotted"} ${e.motifPalette.uBlue06}`};
  width: 100%;
  top: 37px;
  left: -50%;
  z-index: 0;
  padding: 0 25px;
`,Be=Object(l.c)("div")`
  position: relative;
  width: 100%;
  max-width: 70px;
`,We=Object(l.c)(F.a)`
  height: 100px;
  > * {
    &:not(:last-child) {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
    }
  }
`,He=Object(l.c)(F.a)`
  width: 70px;
  min-height: ${Ue.height}px;
  height: ${Ue.height}px;
  position: relative;
  z-index: 1;
`,Ge=Object(l.c)(V.a)`
  width: 70px;
`,Ye=Object(l.c)(w.w)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xs"]};
`,$e=Object(l.c)(F.a)`
  > * {
    color: ${we.a["grey-2"]};
  }
`,Ke=Object(l.c)(F.a)`
  overflow: auto hidden;
  padding-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
  padding: 20px 0 20px 20px;
`,Xe=Object(l.c)(de.a)`
  border: 2px solid ${({theme:e})=>e.motifPalette.uBlue06};
  background: ${({theme:e})=>e.colors.navBackground};
  border-radius: 50%;
  color: ${({theme:e})=>e.motifPalette.uBlue06};
  font-weight: bold;
  width: 36px;
  z-index: 999;
  :hover {
    color: ${({theme:e})=>e.motifPalette.uBlue06};
    background-color: ${({theme:e})=>e.motifPalette.uBlue01};
  }
`,qe=e=>{const{isInternet:t,isClient:a,client_wifi_experience:n,number_of_clients:c,wireless_uplink:l=!1,expandButton:i,devicesCount:o,onClick:E}=e,s=!!t||!a&&!l;return r.a.createElement(Be,null,!t&&r.a.createElement(ze,{wired:s}),r.a.createElement(We,{flexDirection:"column",alignItems:"center",justifyContent:"center"},t||a||!c?r.a.createElement(F.a,{flex:"1"}):r.a.createElement($e,{flex:"1",alignItems:"center",justifyContent:"space-between"},r.a.createElement(Ye,null),r.a.createElement(V.a,null,c)),!i&&r.a.createElement(He,{flex:"1",alignItems:"center",justifyContent:"center"},(e=>{const{isInternet:t,isClient:a,model:n}=e;return t?r.a.createElement(w.F,{size:"large"}):a?r.a.createElement(G,Object.assign({data:e},Ue)):r.a.createElement(Me.a,{model:n,name:n})})(e)),i&&E&&o&&r.a.createElement(Xe,{iconSize:"logo",onClick:E},o),r.a.createElement(F.a,{flex:"1",alignItems:"center",justifyContent:"center"},r.a.createElement(Ge,{centered:!0,truncate:!0},(e=>{var t;const{isInternet:a,isClient:n,client_model:c,client_name:l,model:i}=e;return a?r.a.createElement(M.c,{id:"COMMON_WORD_INTERNET"}):n?c||l:(null===(t=le.deviceModels[i])||void 0===t?void 0:t.name)||i})(e))),r.a.createElement(F.a,{flex:"1",alignItems:"center",justifyContent:"center"},a&&r.a.createElement(V.a,{color:Object(Fe.c)(n)},n,"%"))))};var Ze=({item:e,variant:t})=>{const[a,n]=Object(c.useState)(!1),{uplink_devices:l=[],report_timestamp:i,...o}=e,E=[...l].reverse(),s=E[0],m=E[(null==E?void 0:E.length)-1],d=E.slice(1,(null==E?void 0:E.length)-1),_=Object(c.useCallback)(()=>{n(!a)},[a]),u=a?E.map(e=>r.a.createElement(qe,Object.assign({key:e.mac},e))):r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,Object.assign({key:s.mac},s)),d.length>1?r.a.createElement(qe,{expandButton:!0,onClick:_,devicesCount:(null==E?void 0:E.length)-2}):d.map(e=>r.a.createElement(qe,Object.assign({key:e.mac},e))),(null==E?void 0:E.length)>1&&r.a.createElement(qe,Object.assign({key:m.mac},m)));return r.a.createElement(ke,{flexDirection:"column",flex:"0 0 auto",bordered:"secondary"===t},r.a.createElement(Ke,null,r.a.createElement(qe,{isInternet:!0}),u,r.a.createElement(qe,Object.assign({isClient:!0},o))))},Je=a(2020),Qe=a(2021),et=a(2030),tt=a(785),at=a(11),nt=a(786);var ct=({item:e})=>{const{client_signal:t,client_wifi_experience:a,device_model:n,device_name:l,speed_tests:i,wlan_band:o,wlan_channel_width:E,wlan_essid:s}=e,m=Object(c.useMemo)(()=>Object(Fe.d)(a),[a]),d=Object(c.useMemo)(()=>i.reduce((e,t)=>{const{test_server_name:a}=t;return a&&!e.includes(a)&&e.push(a),e},[]),[i]),_=Object(c.useMemo)(()=>(null==d?void 0:d.length)?d.join(", "):"-",[null==d?void 0:d.length]),u=Object(c.useMemo)(()=>{var e;return(null===(e=le.deviceModels[n])||void 0===e?void 0:e.name)||n},[n]);return r.a.createElement(fe.g,{flexDirection:"column",padding:"26px 32px 0"},m&&r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_WIFI_EXP"})),r.a.createElement(me.a,{size:"body",type:"percent",input:a/100,style:{color:we.a["color-"+Object(Fe.c)(a)]}})),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_AP_MODEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(tt.a,{width:20,height:20,device:{model:n,type:at.DeviceType.AP,name:u}}))),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_AP_NAME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(nt.a)(l))),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_SSID"})),r.a.createElement(V.a,{color:"secondary",size:"body"},s)),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},t," ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_CHANNEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},`${E}${o&&` (${o})`}`)),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(fe.g,{justifyContent:"flex-start",alignItems:"center"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_DOWN"}))),r.a.createElement(fe.g,{alignItems:"center"},r.a.createElement(Je.a,{item:e}))),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(fe.g,{justifyContent:"flex-start",alignItems:"center"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_UP"}))),r.a.createElement(fe.g,{alignItems:"center"},r.a.createElement(Qe.a,{item:e}))),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(et.a,{item:e}))),r.a.createElement(fe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_TEST_SERVER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},_)))};const rt=Object(l.c)(V.a)`
  margin-right: 4px;
`,lt=Object(l.c)("div")`
  width: 18px;
  border: 1px solid ${({theme:e})=>e.motifPalette.uBlue06};
  margin: 0 8px;
`,it=Object(l.c)("div")`
  width: 18px;
  margin: 0 8px;
  border: 1px dashed ${({theme:e})=>e.motifPalette.uBlue06};
`,ot=Object(l.c)(F.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 8px;
`;var Et=({timestamp:e})=>r.a.createElement(ot,{alignItems:"center",justifyContent:"space-around"},r.a.createElement(F.a,{alignItems:"center",justifyContent:"space-around"},r.a.createElement(rt,{weight:"bold"},r.a.createElement(M.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_TEST"})),r.a.createElement(ye.a,{date:new Date(1e3*e),spacer:" "})),r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(lt,null),r.a.createElement(M.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRED"}),r.a.createElement(it,null),r.a.createElement(M.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRELESS"})));const st=Object(l.c)("div")`
  width: 100%;
  background: ${({theme:e})=>e.colors.navBackground};
`;var mt=function({activeItem:e}){return r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null,r.a.createElement(Ze,{item:e,variant:"primary"}),r.a.createElement(Et,{timestamp:e.report_timestamp})),r.a.createElement(ct,{item:e}))},dt=a(20),_t=a(1180),ut=a(189);const bt=Object(l.c)(F.a)`
  position: relative;
  width: 100%;
  margin: ${({theme:e})=>e.spacing["spacing-l"]} 0 ${({theme:e})=>e.spacing["spacing-xxl"]};

  button {
    padding: 0;
    position: absolute;
    left: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  }
`,pt=Object(l.c)(V.a)`
  width: 100%;
  letter-spacing: 0.55px;
  line-height: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var Ot=({timestamp:e,onBack:t})=>r.a.createElement(bt,null,r.a.createElement(ut.c,{name:"backButton",onClick:t},r.a.createElement(w.f,null)),r.a.createElement(pt,{size:"body",weight:"bold",centered:!0},r.a.createElement(ye.a,{date:new Date(1e3*e)})));var It=()=>{const e=Object(n.k)(),t=Object(n.n)(),a=Object(dt.a)(t,"params.subPanel"),c=Object(o.useSelector)(Object(_t.e)(a));return a&&c?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{timestamp:c.report_timestamp,onBack:()=>e.push("../history")}),r.a.createElement(Ze,{item:c,variant:"secondary"}),r.a.createElement(ct,{item:c})):null},gt=a(1917),Ct=a(1117),Rt=a(1791),vt=a(523),Tt=a(48),ht=a(23),Pt=a(2933),Dt=a(2900),ft=a(1172),yt=a(2728),St=a(286);const At={client:{fetchMethodName:"fetchUserReport",selectMethod:De.selectUserReportData,translationPrefix:"CLIENT"},ap:{fetchMethodName:"fetchAPExperienceReport",selectMethod:De.selectAPExperienceReportData,translationPrefix:"DEVICE"}},Nt=Object(l.c)("div")`
  > div {
    position: relative;
  }
`,jt=Object(l.c)("div")`
  position: absolute;
  top: 0;
  left: 0;
`,Lt=Object(l.c)("div")`
  width: 100%;
  text-align: center;
`,xt=l.a`
  fill: ${we.a["grey-3"]};
  font-size: 12px;
`,Vt=[{label:100,value:100},{label:50,value:50},{label:0,value:0}],wt=e=>{const{start:t,end:a}=Object(De.selectDailyGranularity)();return[{label:e.formatMessage({id:"COMMON_GRANUALITY_24"}),value:t},{label:e.formatMessage({id:"COMMON_GRANUALITY_12"}),value:Object(ht.addHours)(t,12).getTime()},{label:e.formatMessage({id:"COMMON_NOW"}),value:a}]},Mt={fetchUserReport:De.fetchUserReport,fetchAPExperienceReport:De.fetchAPExperienceReport};var Ft=Object(Tt.compose)(M.f,Object(o.connect)((e,{mac:t,itemType:a})=>{var n;const c=(null===(n=null==At?void 0:At[a])||void 0===n?void 0:n.selectMethod)||null;return{reportData:c&&c(e,[t],Object(De.selectDailyGranularity)())}},Mt))(e=>{const{mac:t,reportData:a,intl:n,itemType:l}=e,i=Object(c.useRef)(null),o=Object(c.useRef)(null),[E,s]=Object(c.useState)(0);Object(c.useEffect)(()=>{var a;const n=(null===(a=null==At?void 0:At[l])||void 0===a?void 0:a.fetchMethodName)||"";n&&e[n]&&e[n](Object(De.selectReportPayload)([t],Object(De.selectDailyGranularity)()))},[l,t]),Object(c.useEffect)(()=>i.current&&s(i.current.scrollWidth),[i]);const m=a.map(e=>({x:e.time,y:e.satisfaction>=0?e.satisfaction:null})),d=Object(St.b)(m,St.a.MINUTES.grain,"x"),_=i.current&&m.length>0;return r.a.createElement(Nt,null,r.a.createElement("div",{ref:i},_&&r.a.createElement(Pt.a,{xAxis:wt(n),yAxis:Vt,width:E,height:140,hideXGridLines:!0,hideYGridLines:!0,labelClassName:xt,renderChartElements:(e,t,a)=>r.a.createElement(Dt.a,{variant:"gradientArea",interpolation:"curved",dashed:!1,data:d,getCoordinates:e,maxY:a,mouseData:t,tooltipPortal:o?o.current:void 0,hideMissingData:!0,allowCustomDots:!0,renderTooltip:({hidden:e,left:t,top:a,y:n})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ft.a,{left:t,top:a-4,message:r.a.createElement(Lt,{style:{color:we.a["color-"+Object(Fe.c)(Math.min(100,n||0))]}},n?n.toFixed(0):0),hidden:e,topMargin:4,width:50}),r.a.createElement(jt,null,r.a.createElement("svg",{width:E,height:140},t&&a&&r.a.createElement(yt.a,{x:t,y:a,color:we.a["color-"+Object(Fe.c)(Math.min(100,n||0))]}))))})}),r.a.createElement("div",{ref:o})))}),Ut=a(17),kt=a(41);const zt=Object(l.c)(de.a)`
  padding: 4px 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  width: auto;
`,Bt=l.a`
  justify-content: flex-start;
`;var Wt=({item:e,itemType:t,message:a})=>{const n=Object(o.useDispatch)(),l=Object(c.useCallback)(()=>{n(Object(Ut.g)({modalType:kt.a.REPORT_WIFI_EXPERIENCE,modalProps:{item:e,itemType:t}}))},[n,e,t]);return r.a.createElement(zt,{wrapClassName:Bt,variant:"link",size:"small",onClick:l},r.a.createElement(M.c,{id:a||"COMMON_REPORT_WIFI_EXPERIENCE_BUTTON"}))},Ht=a(794);const Gt=Object(l.c)("div")`
  border-top: 1px ${({theme:e})=>e.motifPalette.ui04} solid;
  margin: 8px 0;
`,Yt=Object(l.c)(gt.a)`
  position: relative;
  margin: 4px 0;
  border-radius: 16px;
  height: 4px;
`;var $t=({item:e,showGraph:t,headerTitle:a,itemType:n,canReport:l})=>{const i="mac"in e?e.mac:void 0,E="is_wired"in e?e.is_wired:void 0,s="wired_rate_mbps"in e?e.wired_rate_mbps:void 0,m="uplink_mac"in e&&e.uplink_mac,d="sw_port"in e&&e.sw_port,_="eagerly_discovered"in e&&e.eagerly_discovered,u=Object(c.useMemo)(()=>m&&d?Object(Ht.a)(m,d):()=>{},[m,d]),b=Object(o.useSelector)(u),{satisfaction:p,known:O}=((e,t)=>(e=>!("satisfaction"in e))(e)?Object(I.getClientExperienceFromPort)(t,e):(e=>"satisfaction"in e)(e)?{satisfaction:e.satisfaction,known:Object(Fe.d)(e.satisfaction)}:null)(e,b),g=Object(Fe.c)(p);return r.a.createElement(fe.g,{width:"100%",flexDirection:"column",justifyContent:"center",padding:"16px 32px 0",flex:"0 0 auto"},r.a.createElement(fe.g,{width:"100%",justifyContent:"space-between",alignItems:"baseline"},r.a.createElement(V.a,{size:"header-xs",weight:"bold"},r.a.createElement(M.c,{id:a})),e.uptime?E&&s>0?r.a.createElement(V.a,{size:"header-l",color:"primary"},r.a.createElement("span",{style:{color:Ct.a.getGradientColor(p/100),fontWeight:700}},`${Object(vt.b)(s)} ${10===s||100===s?`(${s} Mbps)`:""}`)):E||O||!_?r.a.createElement(V.a,{size:"header-l",color:g,weight:"bold"},p,"%"):r.a.createElement(fe.g,{flexDirection:"column"},r.a.createElement(V.a,{size:"header-xs",weight:"bold",color:"info"},r.a.createElement(M.c,{id:"COMMON_WORD_INITIALIZING"}),"...")):r.a.createElement(V.a,{size:"body",color:"disabled"},r.a.createElement(M.c,{id:"COMMON_HYPHEN"}))),O&&!E?r.a.createElement(Rt.a,{variant:"gradient",value:p,size:"medium"}):E||O||!_?null:r.a.createElement(Yt,{placement:"below",isLoading:!0}),l&&e.uptime&&r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.g,{margin:"8px 0"},r.a.createElement(Wt,{item:e,itemType:n})),r.a.createElement(Gt,null)),t&&!E&&r.a.createElement(Ft,{mac:i,itemType:n}))},Kt=a(255),Xt=a(664),qt=a(2035);var Zt=({children:e,flexProps:t={}})=>r.a.createElement(F.a,Object.assign({width:"100%",marginBottom:4,justifyContent:"space-between"},t),e);const Jt=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0;
  margin: 0;
  border: 0;
  line-height: 1.6;
  font-weight: normal;
`,Qt=({activeItem:e,handlePortClick:t})=>{const{ip:a,network_name:n,connected:l,is_wired:i}=e;let E=null,s=null,m=null;e.type===I.ClientType.WIRELESS&&({essid:E,channel:s,radio:m}=e);const d="uplink_mac"in e&&e.uplink_mac,_=Object(c.useMemo)(()=>d?Object(O.selectDeviceRecordProperties)(d,["type","name","model","mac"]):()=>{},[d]),u=Object(o.useSelector)(_),b=Object(c.useMemo)(()=>Object(I.getPortName)(u,e),[u,e]),p=Object(c.useMemo)(()=>Object(I.getPortNumber)(u,e),[u,e]),g=Object(c.useMemo)(()=>{switch(m){case"ng":return"2.4 GHz";case"na":return"5 GHz";default:return null}},[m]);return r.a.createElement(fe.g,{padding:"50px 32px 26px 32px",flexDirection:"column",height:"100%"},a&&l?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a)):null,r.a.createElement(qt.a,{client:e,props:["uptime"]},({uptime:e=null})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_UPTIME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Xt.a)(e))):null),n?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_NETWORK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null,b?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:i?"CLIENT_HEADER_WIRED":"CLIENT_HEADER_WIRELESS"})),r.a.createElement(Jt,{variant:"link",onClick:t},Object(nt.a)(b,15))):null,i?r.a.createElement(r.a.Fragment,null,p&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},p))):r.a.createElement(r.a.Fragment,null,E?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_WIFI"})),r.a.createElement(V.a,{color:"secondary",size:"body"},E)):null,s?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_CHANNEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},s)):null,g?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_BAND"})),r.a.createElement(V.a,{color:"secondary",size:"body"},g)):null,r.a.createElement(qt.a,{client:e,props:["signal"]},({signal:e=null})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e," ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))):null),r.a.createElement(qt.a,{client:e,props:["tx_rate"]},({tx_rate:e=0})=>e>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_RX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Kt.c)(1e3*e/8,"bitrate","SI"))):null),r.a.createElement(qt.a,{client:e,props:["rx_rate"]},({rx_rate:e=0})=>e>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_TX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Kt.c)(1e3*e/8,"bitrate","SI"))):null)),r.a.createElement(qt.a,{client:e,props:["usage_bytes"]},({usage_bytes:e=null})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_ACTIVITY_24_HRS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{size:"body",type:"bytes",input:e}))):null),r.a.createElement(qt.a,{client:e,props:["tx_packets","tx_bytes"]},({tx_packets:e=0,tx_bytes:t=0})=>e&&t?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null),r.a.createElement(qt.a,{client:e,props:["rx_packets","rx_bytes"]},({rx_packets:e=0,rx_bytes:t=0})=>e&&t?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null))};var ea=({activeItem:e,history:t})=>{const a="uplink_mac"in e&&e.uplink_mac,n=Object(c.useMemo)(()=>a?Object(O.selectDeviceRecordProperties)(a,["mac"]):()=>{},[a]),l=Object(o.useSelector)(n),i=Object(L.a)("/devices/properties/:mac/overview");return r.a.createElement(Qt,{activeItem:e,handlePortClick:()=>{(null==l?void 0:l.mac)&&t.push(i.replace(":mac",l.mac))}})},ta=a(339),aa=a(129),na=a(27),ca=a(798),ra=a(16);const la=Object(l.c)(V.a)`
  max-width: 150px;
  line-height: 1.6 !important;
  text-align: right;
`,ia=Object(l.c)(de.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  border: 0;
  margin: 0;
  line-height: 1.6;
`;var oa=({activeItem:e,fingerprintData:t})=>{const{mac:a,name:n,oui:l,fingerprint:i}=e,E=Object(I.getFingerprintSourceId)(i),{fingerprint_device_vendor:s,fingerprint_device_name:m,fingerprint_device_os:d}=t,_=Object(I.isFingerprintIncorrect)(e.fingerprint),u=Object(I.isFingerPrintFromUiDb)(e),b=Object(o.useDispatch)(),p=Object(o.useSelector)(Ie.a),O=Object(c.useCallback)(()=>{const t=Object(I.getClientDisplayName)(e);b(Object(ta.c)(a,p)).then(()=>{let n=I.ClientModelType.ACTIVE;e.blocked?n=I.ClientModelType.BLOCKED:(null==e?void 0:e.uptime)||(n=I.ClientModelType.OFFLINE);const c=Object.assign({},"fingerprint"in e?e.fingerprint:{},{dev_id_override:void 0,has_override:!1});b(Object(I.updateClientDataInStore)(a,{fingerprint:c},n)),b(Object(na.c)({icon:ra.a.success,message:"REPORT_CLIENT_FINGERPRINT_REVERT_SUCCESS",values:{clientName:t}}))}).catch(()=>{b(Object(na.c)({icon:ra.a.danger,message:"REPORT_CLIENT_FINGERPRINT_REVERT_ERROR",values:{clientName:t}}))})},[a,e.type,n,i,p]);return Object(L.f)(Number.isInteger(E)?[Object(aa.f)(E)]:()=>Promise.resolve({}),r.a.createElement(F.a,{padding:"24px 32px 0",flexDirection:"column",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"row"},r.a.createElement(F.a,{maxWidth:"33%",minWidth:"33%",margin:"auto 16px auto 0",alignItems:"center",justifyContent:"center"},r.a.createElement(k.a,{client:e,alt:null==e?void 0:e.name,grid:!0})),r.a.createElement(F.a,{width:"100%",flexDirection:"column"},m&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_MODEL"})),r.a.createElement(la,{color:"secondary",size:"body",truncate:!0},m)),a&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_MAC"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a)),(s||l)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_MANUFACTURER"})),r.a.createElement(V.a,{style:{maxWidth:"110px"},color:"secondary",size:"body",truncate:!0},s||l)),!_&&d&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_OS"})),r.a.createElement(la,{color:"secondary",size:"body",truncate:!0},d)),r.a.createElement(F.a,{marginTop:4},!_&&!u&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary"}),r.a.createElement(ia,{variant:"link",onClick:()=>b(Object(ca.g)(a))},r.a.createElement(M.c,{id:Object(I.hasFingerprintFromLibrary)(e)?"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_WRONG":"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_MISSING"}))),_&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary"}),r.a.createElement(ia,{variant:"link",onClick:O},r.a.createElement(M.c,{id:"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REVERT"}))))))))};const Ea=({activeItem:e,fingerprintData:t,...a})=>{const{connected:n}=e,l="is_wired"in e?e.is_wired:void 0,i="uplink_mac"in e&&e.uplink_mac,E="sw_port"in e&&e.sw_port,s=Object(c.useMemo)(()=>i&&E?Object(Ht.a)(i,E):()=>{},[i,E]),m=Object(o.useSelector)(s),d=Object(I.getClientExperienceFromPort)(m,e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(oa,{activeItem:e,fingerprintData:t}),r.a.createElement($t,{item:e,clientExperience:d,headerTitle:l?"CLIENT_HEADER_WIRED_EXPERIENCE":"CLIENT_HEADER_WIFI_EXPERIENCE",showGraph:(null==d?void 0:d.known)&&n,itemType:"client",canReport:!0}),r.a.createElement(ea,Object.assign({activeItem:e},a)))};var sa=({activeItem:e,...t})=>{const a=Object(c.useMemo)(()=>Object(I.selectClientFingerprint)(e),[e,[null==e?void 0:e.fingerprint]]),n=Object(o.useSelector)(a);return Object(I.getIsClientConnected)(e)?r.a.createElement(Ea,Object.assign({activeItem:e,fingerprintData:n},t)):r.a.createElement(oa,{activeItem:e,fingerprintData:n})},ma=a(1954),da=a(1948),_a=a(2038),ua=a(643),ba=a(2911),pa=a(2856),Oa=a(2045),Ia=a(6);const ga=169,Ca=3,Ra=77,va=1,Ta=77,ha=1,Pa=[{id:"labelInfo",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"}," ",r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_USAGE"})),renderCell:({label:e,index:t})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(ya,{index:t}),r.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)),growthFactor:Ca,minWidth:ga},{id:"bytesParsed",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_BYTES"})),growthFactor:va,minWidth:Ra,renderCell:({bytesParsed:e})=>r.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)},{id:"pkts",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_PACKETS"})),growthFactor:ha,minWidth:Ta,renderCell:({pkts:e})=>r.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)}],Da=Ct.a.getDiscreteColorScaler(Oa.DPI_CONVERTER_LIMIT),fa=Object(l.c)(F.a)`
  width: 100%;
  margin-top: 30px;
`,ya=Object(l.c)(ua.a,{shouldForwardProp:e=>"index"!==e})`
  background-color: ${({index:e})=>Da(e)} !important;
  margin-right: 8px;
`,Sa=Object(l.c)(F.a)`
  padding: 10px ${({contentPaddingX:e=30})=>e}px 30px;
  font-size: 24px;

  table {
    color: ${({theme:e})=>e.motifPalette.text02};
    th,
    td {
      padding-left: 12px;
      padding-right: 20px;
    }
  }
`,Aa=Object(l.c)(w.W)`
  margin-right: ${({theme:e})=>e.spacing["spacing-l"]};
  color: ${({theme:e})=>e.motifPalette.icon01};
`,Na=Object(l.c)(F.a)`
  .titleClassName {
    font-weight: bold;
    font-size: 14px;
    transform: translate(8px, 10px);
  }
  .descriptionClassName {
    font-weight: bold;
    transform: translate(0, -34px);
  }
  box-shadow: 0 0 0 7px ${({theme:e})=>e.motifPalette.neutral02};
  border-radius: 100%;
`,ja=Object(l.c)(w.X)`
  position: absolute;
  top: 52%;
  left: 36px;
  color: ${({theme:e})=>{var t;return null===(t=e.motifPalette)||void 0===t?void 0:t.uBlue06}};
`,La=Object(l.c)(w.Y)`
  position: absolute;
  top: 52%;
  left: 36px;
  color: ${({theme:e})=>{var t;return null===(t=e.motifPalette)||void 0===t?void 0:t.purple06}};
`;var xa=Object(M.f)(({contentPaddingX:e,intl:t,mac:a})=>{const n={data:{macs:[a],type:"by_app"}},l={method:"post",crudCacheStrategy:{interval:3e4,type:Ia.a.COMBINED}},{data:i,total:E}=Object(o.useSelector)(Object(Oa.selectFormattedStaDpiData)(n,l)),s=Object(o.useDispatch)();Object(c.useEffect)(()=>(a&&s(Object(Oa.fetchTraffic)(n,l)),()=>s(Object(Ia.c)(Object(Oa.fetchTraffic)(n,l)))),[a]);const[m,d]=Object(Kt.c)(E.rx_bytes).split(" "),[_,u]=Object(Kt.c)(E.tx_bytes).split(" ");return r.a.createElement(r.a.Fragment,null,i.length?r.a.createElement(r.a.Fragment,null,m&&_&&r.a.createElement(fa,{alignItems:"center",justifyContent:"space-around"},[{items:i.map(({id:e,index:t,rx_bytes:a})=>({id:e,value:a,color:Da(t)})),title:`${m} ${d}`,Icon:ja},{items:i.map(({id:e,index:t,tx_bytes:a})=>({id:e,value:a,color:Da(t)})),title:`${_} ${u}`,Icon:La}].map(({items:e,title:a,Icon:n})=>r.a.createElement(Na,{key:e.rx_bytes,justifyContent:"center",alignItems:"center"},r.a.createElement(F.a,{position:"relative"},r.a.createElement(n,{size:"medium"})),r.a.createElement(ba.a,{items:e,title:a,description:t.formatMessage({id:"CLIENT_PROPERTY_TRAFFIC_TAB_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",size:140,thickness:3.5,spacer:.5})))),r.a.createElement(Sa,{marginTop:36,contentPaddingX:e,justifyContent:"flex-start",alignItems:"center"},r.a.createElement(Pe.a,{items:i,disableColumnFilters:!0,renderFooter:()=>r.a.createElement(F.a,null,r.a.createElement(F.a,{minWidth:ga+20,flexGrow:Ca},r.a.createElement(V.a,{weight:"bold",size:"body",color:"secondary"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_TOTAL_TRAFFIC"}))),r.a.createElement(F.a,{minWidth:Ra+3,flexGrow:va,alignItems:"center"},r.a.createElement(V.a,{size:"body",color:"secondary"},Object(Kt.c)((i||[]).reduce((e,t)=>e+((null==t?void 0:t.bytes)||0),0)))),r.a.createElement(F.a,{minWidth:Ta+3,flexGrow:ha,alignItems:"center"},r.a.createElement(V.a,{size:"body",color:"secondary"},Object(pa.a)((i||[]).reduce((e,t)=>e+((null==t?void 0:t.packets)||0),0),{spacer:" "})))),columns:Pa,rowHeight:30,disableTextPointer:!0,disableSelection:!0}))):r.a.createElement(F.a,{padding:"30px",alignItems:"center",justifyContent:"center"},r.a.createElement(Aa,null),r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_EMPTY"})))});const Va=Object(l.c)(F.a)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  button {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
  }
`,wa=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Ma=Object(l.c)(F.a)`
  > {
    &:last-child {
      margin-bottom: 0;
    }
  }
`,Fa=Object(l.c)(w.f)`
  color: ${({theme:e})=>e.motifPalette.neutral08};
`;var Ua=({activeItem:e})=>{const t=Object(n.k)(),{subPanelId:a,subPanel:l}=Object(n.m)(),i=Object(c.useMemo)(()=>(null==e?void 0:e.uplink_mac)?Object(O.selectDeviceRecordProperties)(e.uplink_mac,["ip","name","model","mac"]):()=>{},[null==e?void 0:e.uplink_mac]),E=Object(o.useSelector)(i),s=E&&Object(Y.c)(E)||"",m=Object(o.useSelector)(Object(ma.b)(a||l));return Object(L.f)([Object(da.fetchSession)(e.mac,!1)],r.a.createElement(r.a.Fragment,null,r.a.createElement(Va,{position:"relative",padding:"12px 0",marginBottom:34,justifyContent:"center",width:"100%"},r.a.createElement(ut.c,{name:"backButton",onClick:()=>t.push("../insights")},r.a.createElement(Fa,{size:"small"})),(null==m?void 0:m.date)&&r.a.createElement(V.a,{size:"body",color:"secondary",weight:"bold"},m.date)),r.a.createElement(F.a,{padding:"0 30px",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(Ma,{width:"100%",flexDirection:"column"},(null==m?void 0:m.start)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.start)),(null==m?void 0:m.end)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_END"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.end)),(null==m?void 0:m.duration)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.duration)),(null==E?void 0:E.ip)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},E.ip)),(null==E?void 0:E.mac)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},E.mac)),(null==E?void 0:E.mac)&&s&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_UPLINK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(_a.a,{uplinkMac:E.mac,uplinkName:s}))),(null==m?void 0:m.port)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.port)),(null==m?void 0:m.experience)>=0&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:(null==m?void 0:m.is_wired)?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+Object(Fe.b)(null==m?void 0:m.experience)]}},null==m?void 0:m.experience,"%"))))),(null==m?void 0:m.mac)&&r.a.createElement(wa,{renderOnlyExpandedContent:!0,variant:"secondary",items:[{id:"dpi",label:r.a.createElement(M.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),openByDefault:!0,renderContent:()=>r.a.createElement(xa,{mac:m.mac,contentPaddingX:0})}]})))};const ka=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,za=Object(l.c)(F.a)`
  table {
    th {
      padding-left: 0;
    }
    tr {
      :hover {
        cursor: pointer;
      }
    }
    td {
      padding-left: 0;
      padding-right: 25px;
    }
  }
`,Ba=Object(l.c)("div")`
  padding-top: 20px;
`,Wa=Object(l.c)(w.W)`
  margin-right: 10px;
`,Ha=Object(l.c)("div")`
  padding-top: 10px;
`,Ga=[{id:"date",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DATE"})),renderCell:({date:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"start",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_START"})),renderCell:({start:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"duration",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DURATION"})),renderCell:({duration:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80}],Ya=[{id:"date",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DATE"})),renderCell:({date:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"start",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_START"})),renderCell:({start:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"duration",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DURATION"})),renderCell:({duration:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"wifiExperience",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_WIFI_EXP"})),renderCell:({experience:e})=>r.a.createElement(r.a.Fragment,null,e>=0?r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+Object(Fe.b)(e)]}},e,"%")):r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))),minWidth:80}];var $a=({activeItem:{mac:e,is_wired:t}})=>{const{data:a,isLoading:c,error:l}=Object(o.useSelector)(Object(da.selectFormattedSessionData)(e,!1,[])),i=Object(n.k)();return Object(L.f)([Object(da.fetchSession)(e,!1)],r.a.createElement(r.a.Fragment,null,r.a.createElement(ka,{variant:"secondary",renderOnlyExpandedContent:!0,multiOpen:!0,items:[{id:"dpi",label:r.a.createElement(M.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),openByDefault:!0,renderContent:()=>r.a.createElement(xa,{mac:e,contentPaddingX:0})},{id:"history",label:r.a.createElement(M.c,{id:"CLIENT_ACCORDION_HEADER_HISTORY"}),openByDefault:!0,renderContent:()=>r.a.createElement(za,{justifyContent:"flex-start",alignItems:"center"},!c&&a.length>0&&r.a.createElement(Pe.a,{items:a,disableColumnFilters:!0,columns:t?Ga:Ya,onRowClick:({id:e})=>i.push("insights/"+e),rowHeight:30,renderFooter:()=>r.a.createElement(Ha,null,r.a.createElement(M.c,{id:"CLIENT_PROPERTY_FOOTER_RECORDS",values:{length:a.length}}))}),(!c||l)&&0===a.length&&r.a.createElement(Ba,null,r.a.createElement(Wa,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"})))}]})))};const Ka=e=>Object(dt.a)(e,"shared.propertypanel.tabGetDataFunction",{}),Xa=e=>Object(dt.a)(e,"shared.propertypanel.tabSubmitFunction",{}),qa=e=>Object(dt.a)(e,"shared.propertypanel.tabResetFunction",{});var Za=function(e){return function(t){return class extends r.a.Component{constructor(){super(...arguments),this.state=e.reduce((e,t)=>({...e,dirty:{...e.dirty,[t]:!1},invalid:{...e.invalid,[t]:!1}}),{dirty:{},invalid:{}}),this.setFormDirty=(e,t)=>{const{dirty:a}=this.state;a[e]!==t&&this.setState({dirty:{...a,[e]:t}})},this.setFormInvalid=(e,t)=>{const{invalid:a}=this.state;a[e]!==t&&this.setState({invalid:{...a,[e]:t}})}}render(){const{dirty:e,invalid:a}=this.state,n=!!Object.values(e).find(e=>e),c=!!Object.values(a).find(e=>e);return r.a.createElement(t,Object.assign({isDirty:n,isInvalid:c,formStates:e,setFormDirty:this.setFormDirty,setFormInvalid:this.setFormInvalid},this.props))}}}},Ja=a(44),Qa=a(30),en=a(378),tn=a(137);const an=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  > div {
    align-items: baseline;
  }

  > label {
    &:active {
      top: 30px;
    }
  }

  input {
    width: 100% !important;
  }
`,nn=Object(l.c)(tn.a)`
  .labelClassName {
    margin-top: 10px;
  }
`,cn=Object(l.c)(nn)`
  padding-bottom: 8px;
  .validationMessageClassName {
    display: none;
  }
`,rn=Object(l.c)(tn.a)`
  div > div > div {
    [for='usergroup_id'] {
      font-size: ${({theme:e})=>e.fontSize["font-size-caption"]};
    }
    > div {
      font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
    }
  }
`,ln=Object(l.c)(w.w)`
  color: ${we.a["neutral-8"]};
`,on=Object(l.c)(w.W)`
  margin: 2px 8px 0 0;
`;var En=({handleSubmit:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n,setFormDirty:l,fetchUserGroups:i,dirty:o,isUnifiDeviceClient:E,intl:s,userGroups:m,values:{usergroup_id:d}})=>{Object(c.useEffect)(()=>{i(),t({details:e}),a({details:n})},[]),Object(c.useEffect)(()=>{l("details",o)},[l,o]);const _=Object(c.useMemo)(()=>[{label:s.formatMessage({id:"CLIENT_MODAL_INPUT_BANDWIDTH_PROFILE_DEFAULT"}),value:""},...m],[m]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(an,{marginBottom:10},r.a.createElement(cn,{iconBefore:r.a.createElement(ln,{size:"original"}),label:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_NAME",labelClassName:"labelClassName",validationMessageClassName:"validationMessageClassName",name:"name",full:!0,size:"body",disabled:E})),r.a.createElement(an,{marginBottom:10},r.a.createElement(rn,{label:"CLIENT_PROPERTY_GENERAL_TAB_BANDWIDTH_PROFILE",name:"usergroup_id",type:"dropdown",full:!0,validated:!0,translateLabel:!0,options:_})),d&&r.a.createElement(fe.g,{marginTop:15},r.a.createElement(on,{isActive:!0}),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_BANDWIDTH_PROFILE_INFO"}))))};const sn=Object(Ja.g)({mapPropsToValues:e=>{const{name:t,hostname:a,usergroup_id:n}=e;return{name:a===t?"":t,usergroup_id:n||""}},validationSchema:Qa.a.object().shape({name:Qa.a.string(),usergroup_id:Qa.a.string()}),handleSubmit:(e,{props:t,setSubmitting:a,resetForm:n})=>{const{user_id:c,mac:r,createToast:l,updateClient:i}=t;i(e,r,c).then(t=>{t.data&&l({icon:ra.a.success,message:"CLIENT_NOTICE_SAVE_SUCCESS"}),n({values:e})}).catch(e=>{l({icon:ra.a.danger,message:"CLIENT_NOTICE_SAVE_ERROR"}),n()}).finally(()=>{a(!1)})}}),mn={createToast:na.c,updateClient:I.updateClient,fetchUserGroups:en.fetchUserGroups,tabSubmitFunction:j.j,tabResetFunction:j.i};var dn=Object(Tt.compose)(Object(o.connect)(e=>({userGroups:Object(en.selectUserGroupOptions)(e)}),mn),M.f,sn)(En),_n=a(375),un=a(34),bn=a(480),pn=a(445);const On=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }

  > * {
    vertical-align: middle;
  }
`;var In=({fetchNetworks:e,tabResetFunction:t,tabSubmitFunction:a,resetForm:n,handleSubmit:l,setFormDirty:i,dirty:o,canAssignFixedIp:E,isDeviceGateway:s,values:m,networkData:d,intl:_})=>(Object(c.useEffect)(()=>{e(),a({network:l}),t({network:n})},[]),Object(c.useEffect)(()=>{i("network",o)},[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(On,{marginBottom:20},r.a.createElement(fe.g,{justifyContent:"space-between",alignItems:"center",marginTop:9},r.a.createElement("div",null,r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_USE_FIXED_IP"})),r.a.createElement(pn.a,{message:r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_FIXED_IP_TOOLTIP"}),width:200,className:"ml-2",position:"bottom",style:{display:"inline-block"}},r.a.createElement(w.W,{hidden:s,width:20,height:20,isActive:!0}))),r.a.createElement(tn.a,{type:"checkbox",id:"use_fixedip",name:"use_fixedip",disabled:!E}))),m.use_fixedip&&r.a.createElement(r.a.Fragment,null,r.a.createElement(On,{marginBottom:25},r.a.createElement(tn.a,{type:"dropdown",full:!0,validated:!0,name:"network_id",label:_.formatMessage({id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_NETWORK"}),options:d,fontSize:"body"})),r.a.createElement(On,null,r.a.createElement(tn.a,{label:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS",size:"body",full:!0,name:"fixed_ip"}))))),gn=a(100),Cn=a(105);const Rn=Object(Ja.g)({mapPropsToValues:({defaultNetworkDataId:e,ip:t,fixed_ip:a,use_fixedip:n,network_id:c,clients:r})=>({use_fixedip:!!n,network_id:c||e,fixed_ip:a||t,clients:r}),validationSchema:({networkData:e,user_id:t})=>gn.a.lazy(({network_id:a,fixed_ip:n,clients:c})=>{const l=e&&e.find(e=>e.value===a),i=l&&l.ipSubnet;return gn.a.object().shape({use_fixedip:gn.a.bool(),network_id:gn.a.string(),fixed_ip:gn.a.string().when("use_fixedip",{is:!0,then:gn.a.string().label("CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS").matches(Cn.h,r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).unifiIpv4InSubnet(i,r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_VALIDATION",values:{value:n,subnet:i}})).test("isFixedIPUnique",r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_UNIQUE"}),e=>!e||c.filter(e=>"user_id"in e&&e.user_id!==t).every(t=>!("fixed_ip"in t)||!t.fixed_ip||e!==t.fixed_ip)).required()})})}),handleSubmit:(e,{props:{user_id:t,mac:a,createToast:n,updateClient:c},setSubmitting:r,resetForm:l})=>{let i={use_fixedip:!1};"use_fixedip"in e&&e.use_fixedip&&(i=(({clients:e,...t})=>t)(e)),c(i,a,t).then(t=>{t.data&&n({icon:ra.a.success,message:"CLIENT_NOTICE_SAVE_SUCCESS"}),l({values:e})}).catch(e=>{n({icon:ra.a.danger,message:"CLIENT_NOTICE_SAVE_ERROR"}),l()}).finally(()=>{r(!1)})}}),vn={createToast:na.c,fetchNetworks:un.fetchNetworks,updateClient:I.updateClient,tabSubmitFunction:j.j,tabResetFunction:j.i};var Tn=Object(Tt.compose)(_n.b,Object(o.connect)(e=>({networkData:Object(bn.e)(e),defaultNetworkDataId:Object(bn.c)(e),isDeviceGateway:Object(bn.d)(e),canAssignFixedIp:Object(bn.a)(e),clients:Object(I.selectNetworkContainerClientsData)(e)}),vn),M.f,Rn)(In),hn=a(111);const Pn=Object(l.c)("footer",{shouldForwardProp:e=>"hasFormResetButton"!==e})`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: flex;
  justify-content: ${({hasFormResetButton:e})=>e?"space-between":"flex-end"};
  padding: 30px;
`,Dn=Object(l.c)(ut.c)`
  font-weight: normal;
`;var fn=({allowCancel:e,isDirty:t,isInvalid:a,onFormSubmit:n,onFormReset:c,onFormCancel:l,className:i,submitButtonText:o})=>r.a.createElement(Pn,{className:i,hasFormResetButton:!!c},r.a.createElement(Dn,{name:"cancel",type:"button",onClick:l,disabled:!e&&!t},r.a.createElement(hn.a,{message:"COMMON_ACTION_CANCEL"})),c&&r.a.createElement(Dn,{name:"reset",variant:"primary",type:"button",pill:!1,onClick:c,disabled:!t},r.a.createElement(hn.a,{message:"COMMON_ACTION_RESET_TO_DEFAULTS"})),r.a.createElement(Dn,{name:"submit",variant:"primary",type:"submit",pill:!1,onClick:n,disabled:!t||a},r.a.createElement(hn.a,{message:o||"COMMON_ACTION_APPLY_CHANGES"})));const yn=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Sn=Object(l.c)(fn)`
  border-top: 0;
`;var An=r.a.memo(Za(["details","network"])(e=>{const{activeItem:t,isDirty:a,setFormDirty:n,formStates:c}=e,l=Object(o.useSelector)(Xa),i=Object(o.useSelector)(qa),{name:E,hostname:s,note:m,usergroup_id:d,mac:_,fixed_ip:u,use_fixedip:b,user_id:p,ip:O,network_id:I}=t,g="product_line"in t;return r.a.createElement(fe.g,{height:"100%",flexDirection:"column",justifyContent:"space-between"},r.a.createElement(yn,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"details",openByDefault:!0,label:r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS"}),renderContent:()=>r.a.createElement(dn,{user_id:p,mac:_,hostname:s,name:E,note:m,usergroup_id:d,setFormDirty:n,isUnifiDeviceClient:g})},{id:"network",label:r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_NETWORK"}),renderContent:()=>r.a.createElement(Tn,{user_id:p,mac:_,ip:O,fixed_ip:u,use_fixedip:b,network_id:I,setFormDirty:n})}]}),r.a.createElement(Sn,{isDirty:a,onFormSubmit:()=>{c.details&&l.details(),c.network&&l.network()},onFormCancel:()=>{i.details(),i.network()}}))})),Nn=a(1157),jn=a(2001);var Ln=({mac:e,props:t,children:a})=>{const n=Object(c.useMemo)(()=>Object(R.selectUnifiDeviceClientProperties)(e,t),[e,t]);return a(Object(o.useSelector)(n))};const xn=Object(l.c)("img")`
  width: 40px;
  height: 40px;
`,Vn=Object(l.c)(de.a)`
  padding: 0;
  margin: 0;
  border: 0;
  font-weight: 400;
  line-height: 1.6;
`,wn=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-caption"]};
`,Mn=Object(l.c)(fe.g)`
  background-color: ${({theme:e})=>e.motifPalette.neutral02};
  border-radius: 4px;
`,Fn=({activeItem:e})=>r.a.createElement(fe.g,{flexDirection:"row"},r.a.createElement(fe.g,{maxWidth:"33%",minWidth:"33%",margin:"auto 16px auto 0",alignItems:"center",justifyContent:"center"},r.a.createElement(fe.d,{client:e,grid:!0})),r.a.createElement(fe.g,{width:"100%",flexDirection:"column"},(null==e?void 0:e.model)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_MODEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e.model)),(null==e?void 0:e.mac)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_MAC"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e.mac)),(null==e?void 0:e.displayable_version)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_VERSION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e.displayable_version)))),Un=({product_line:e})=>{var t,a;const n=Object(o.useSelector)(m.b);return e?r.a.createElement(Mn,{margin:"50px 0",padding:"12px",alignItems:"center"},r.a.createElement(fe.g,{marginRight:16},r.a.createElement(xn,{src:(()=>{switch(e){case R.UnifiDeviceProductLine.TALK:return jn.n;case R.UnifiDeviceProductLine.ACCESS:return jn.k;case R.UnifiDeviceProductLine.PROTECT:return jn.m;default:return null}})()})),r.a.createElement(fe.g,null,r.a.createElement(wn,{variant:"link",onClick:()=>{window.location.href=n.replace("network",e.toLowerCase())}},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_VIEW_IN",values:{application:(null===(t=null==e?void 0:e.charAt(0))||void 0===t?void 0:t.toUpperCase())+(null===(a=null==e?void 0:e.slice(1))||void 0===a?void 0:a.toLowerCase())}})))):null},kn=({activeItem:e,history:t})=>{const{mac:a,ip:n,network_name:l,uplink_mac:i,is_wired:E,essid:s}=e,m=Object(L.a)("/devices/properties/:mac/overview"),d=Object(c.useMemo)(()=>i?Object(O.selectDeviceRecordProperties)(i,["type","name","model","mac"]):()=>{},[i]),_=Object(o.useSelector)(d),u=Object(c.useMemo)(()=>Object(I.getPortName)(_,e),[_,e]),b=Object(c.useMemo)(()=>Object(I.getPortNumber)(_,e),[_,e]);return r.a.createElement(fe.g,{flexDirection:"column"},n?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null,r.a.createElement(Ln,{mac:a,props:["uptime"]},({uptime:e=null})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_UPTIME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Nn.a)(e))):null),l?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_NETWORK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},l)):null,u?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:E?"UNIFI_DEVICE_CLIENT_LABEL_WIRED":"UNIFI_DEVICE_CLIENT_LABEL_WIRELESS"})),r.a.createElement(Vn,{variant:"link",onClick:()=>t.push(m.replace(":mac",i))},u)):null,E&&b?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},b)):null,!E&&s?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_WIFI"})),r.a.createElement(V.a,{color:"secondary",size:"body"},s)):null,r.a.createElement(Ln,{mac:a,props:["usage_bytes"]},({usage_bytes:e=null})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_ACTIVITY_24_HOURS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{size:"body",type:"bytes",input:e}))):null),r.a.createElement(Ln,{mac:a,props:["rx_packets","rx_bytes"]},({rx_packets:e=0,rx_bytes:t=0})=>e&&t?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null),r.a.createElement(Ln,{mac:a,props:["tx_packets","tx_bytes"]},({tx_packets:e=0,tx_bytes:t=0})=>e&&t?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null))};var zn=({activeItem:e,history:t})=>r.a.createElement(fe.g,{padding:"32px 32px 0",flexDirection:"column",justifyContent:"space-between"},r.a.createElement(Fn,{activeItem:e}),r.a.createElement(Un,{product_line:null==e?void 0:e.product_line}),r.a.createElement(kn,{activeItem:e,history:t}));const Bn=Object(l.c)(F.a)`
  button {
    padding: 0;
    position: absolute;
    left: 0;
  }

  span {
    width: 100%;
    padding: 1px 0;
    text-align: center;
  }
`,Wn=Object(l.c)(F.a)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`;var Hn=({activeItem:e})=>{const t=Object(n.k)(),{subPanelId:a,subPanel:c}=Object(n.m)();let l;"mac"in e&&({mac:l}=e);const i=Object(o.useSelector)(Object(ma.b)(a||c)),E=Object(nt.a)((null==i?void 0:i.name)||(null==i?void 0:i.hostname)||(null==i?void 0:i.mac),15);return Object(L.f)([Object(da.fetchSession)(l,!0)],r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{padding:"15px 30px 0",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(Bn,{position:"relative",paddingBottom:25,width:"100%"},r.a.createElement(ut.c,{name:"backButton",onClick:()=>t.push("../../overview")},r.a.createElement(w.f,null)),r.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},E+" | ",null==i?void 0:i.date)),r.a.createElement(Wn,{width:"100%",paddingBottom:10,flexDirection:"column"},r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.start)),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_END"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.end)),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.duration)),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.ip)),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.mac)),(null==i?void 0:i.is_wired)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_PORT"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.port)),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:(null==i?void 0:i.is_wired)?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"})),r.a.createElement(V.a,null,(null==i?void 0:i.experience)>=0?r.a.createElement(V.a,{size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+((null==i?void 0:i.is_wired)?Object(Fe.b)(null==i?void 0:i.experience):Object(Fe.c)(null==i?void 0:i.experience))]}},null==i?void 0:i.experience,"%")):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"})))))),!!(null==i?void 0:i.mac)&&r.a.createElement(xa,{mac:null==i?void 0:i.mac,key:null==i?void 0:i.mac})))},Gn=a(2936),Yn=a(167),$n=a(229),Kn=a(669),Xn=a(1965),qn=a(1909),Zn=a(761),Jn=a(62),Qn=a(208),ec=a(663),tc=a(1937);const ac=(e,t,a,n)=>{const c=e.find(e=>e.mac===a),r=Object(Y.c)(c),l=Object(Y.a)(c);if(r&&r!==a)return r;if(l)return l;const i=t.find(e=>"mac"in e&&e.mac===a),o=Object(I.getClientDisplayName)(i);return o&&o!==a?o:n.formatMessage({id:"DEVICE_UNKNOWN_HOSTNAME"})},nc=Object(l.c)("div")`
  > div:first-child {
    width: 80%;
    > div:first-child {
      width: 80%;
    }
  }
`,cc=(e,t,a,n)=>Array.from(e,(e,c)=>({id:"port_security_mac_address-"+c,port_security_mac_address:e,port_security_mac_address_name:ac(t,a,e,n)})),rc=[{id:"port_security_mac_address",label:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MAC_ADDRESS_LABEL"}),sortable:!1},{id:"port_security_mac_address_name",label:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NAME_LABEL"}),sortable:!1}],lc={port_security_mac_addresses:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"};var ic=Object(M.f)(({formValues:e,intl:t,setFieldValue:a})=>{const{port_security_mac_address:n}=e,l=Object(o.useSelector)(O.selectDevicesData),i=Object(o.useSelector)(I.selectCombinedClientsData),E=Object(c.useMemo)(()=>({editActive:!1,port_security_mac_address:cc(n,l,i,t)}),[n,l,i,t]),s=Object(c.useMemo)(()=>cc(n,l,i,t),[n,l,i,t]),m=Object(c.useMemo)(()=>[{name:"new_port_security_mac_address",label:"DEVICE_PORT_FORM_ENTER_MAC_ID",placeholder:"",type:"text"}],[]),d=Object(c.useCallback)(e=>{a("port_security_mac_address",e)},[a]),_=Object(c.useCallback)(({port_security_mac_address:e,new_port_security_mac_address:t})=>{t&&d([...e.map(({port_security_mac_address:e})=>e),t])},[d]),u=Object(c.useCallback)(({port_security_mac_address:t})=>{d(e.port_security_mac_address.filter(e=>e!==t))},[e,d]),b=Object(c.useCallback)(e=>{d([...e.map(({port_security_mac_address:e})=>e)])},[d]);return r.a.createElement(nc,null,r.a.createElement(tc.d,{fieldName:"port_security_mac_address",items:s,columns:rc,fieldLabels:lc,newFields:m,onAddItem:_,onRemoveItem:u,onEditSubmit:b,initialValues:E,useValuesInSchema:!0,validationSchema:e=>(e=>{const t=()=>gn.a.string().label("DEVICE_PORT_FORM_MAC_ADDRESS_LABEL").matches(Cn.p,r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_MAC"})),a={arrayFieldName:"port_security_mac_address",stringFieldName:"port_security_mac_address",errorMessage:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MAC_MUST_BE_UNIQUE"})};return gn.a.object().shape({editActive:gn.a.bool(),new_port_security_mac_address:t().isMacUnique({formValues:null,...a}),port_security_mac_address:gn.a.array().of(gn.a.object().shape({port_security_mac_address:t().isMacUnique({formValues:e,...a}).required()}))})})(e),addButtonText:"DEVICE_PORT_FORM_MAC_FILTER_BUTTON"}))}),oc=a(1915),Ec=a(2910),sc=a(285),mc=a(1179),dc=a(667),_c=a(253),uc=a(59),bc=a(795);const pc=Object(l.c)("div")`
  display: table;
`,Oc=Object(l.c)("div")`
  display: table-row;

  > * {
    font-size: 11px;
    display: table-cell;
    white-space: nowrap;

    &:last-of-type {
      padding-left: 10px;
    }
  }
`;var Ic=Object(M.f)((function({deviceData:e,intl:t,portData:a,portData:{ifname:n,port_idx:c,portName:l,tx_bytes:i,rx_bytes:E,poe_mode:s,sfp_txfault:m,sfp_rxfault:d,sfp_vendor:_,sfp_serial:u,sfp_part:b,sfp_rev:p,sfp_compliance:O,sfp_voltage:I,sfp_current:g,sfp_txpower:C,sfp_rxpower:R,sfp_temperature:v}}){const T=Object(o.useSelector)($n.selectPortConf),h=Object(uc.qb)(a,t,T),P=Object(o.useSelector)(bc.s),D=Object(uc.ib)(a,e,P),f=Object(uc.ub)(a,e,P),y=a&&["SFP","SFP+"].includes(a.media)&&a.sfp_found,S=Object(uc.tb)(a,t),A=Object(uc.pb)(a),N=[];return y&&(m&&N.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX_FAULT"})),d&&N.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX_FAULT"}))),r.a.createElement(pc,null,(c||n)&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PORT"})),r.a.createElement(V.a,null,Object(uc.lb)(a))),l&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_NAME"})),r.a.createElement(V.a,null,l)),(S||N.length>0)&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_STATUS"})),r.a.createElement(V.a,null,S,N.length>0&&c%2==0&&r.a.createElement(V.a,{color:"danger"},N.join(", ")))),i>0&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX"})),r.a.createElement(me.a,{type:"bytes",input:i})),E>0&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX"})),r.a.createElement(me.a,{type:"bytes",input:E})),A&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"COMMON_DEVICE_POE_MODE_POE"})),r.a.createElement(V.a,null,A)),h&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PROFILE"})),r.a.createElement(V.a,null,h)),D&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_DOWNLINK"})),r.a.createElement(V.a,null,Object(Y.c)(D))),f&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_UPLINK"})),r.a.createElement(V.a,null,Object(Y.c)(f))),y&&r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VENDOR"})),r.a.createElement(V.a,null,_)),u&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_SERIAL"})),r.a.createElement(V.a,null,u)),b&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PART_NUMBER"})),r.a.createElement(V.a,null,b)),p&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_REV"})),r.a.createElement(V.a,null,p)),O&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_COMPLIANCE"})),r.a.createElement(V.a,null,O)),I&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VOLTAGE"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_VOLTAGE",values:{voltage:I}}))),g&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_CURRENT"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_CURRENT",values:{current:g}}))),v&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:v}}))),C&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_OUTPUT_POWER"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:C}}))),R&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_INPUT_POWER"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:R}})))))}));const gc={large:{threshold:12,size:"20px",spacing:"8px",tooltipOffset:"15px"},medium:{threshold:15,size:"16px",spacing:"6px",tooltipOffset:"17px"},small:{threshold:20,size:"12px",spacing:"4px",tooltipOffset:"19px"},xsmall:{threshold:28,size:"10px",spacing:"2px",tooltipOffset:"20px"}};var Cc=a(337);const Rc=l.e`
  0% { opacity: 0; }
  40% { opacity: 1; }
  100% { opacity: 0; }
`,vc=l.a`
  &:nth-child(1) {
    animation: ${Rc} 2s 0s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${Rc} 2s -1s infinite ease-in-out;
  }
`,Tc=l.e`
  0%   { opacity: 0; }
  20%  { opacity: 1; }
  33%  { opacity: 1; }
  53%  { opacity: 0; }
  100% { opacity: 0; }
`,hc=l.a`
  &:nth-child(1) {
    animation: ${Tc} 3s -1s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${Tc} 3s -2s infinite ease-in-out;
  }

  &:nth-child(3) {
    animation: ${Tc} 3s 0s infinite ease-in-out;
  }
`,Pc=Object(l.c)("div",{shouldForwardProp:e=>"iconsLength"!==e})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 80%;
    max-height: 80%;
  }
  ${({iconsLength:e})=>2===e&&`\n  &:nth-child(1) {\n    animation: ${Rc} 2s 0s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${Rc} 2s -1s infinite ease-in-out;\n  }`}

  ${({iconsLength:e})=>3===e&&`&:nth-child(1) {\n    animation: ${Tc} 3s -1s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${Tc} 3s -2s infinite ease-in-out;\n  }\n\n  &:nth-child(3) {\n    animation: ${Tc} 3s 0s infinite ease-in-out;\n  }`}
`;function Dc({icon:e}){const t={[Cc.a.DISCARDING]:w.v,[Cc.a.WAN]:w.T,[Cc.a.MIRROR]:w.K,[Cc.a.NETWORK]:w.uc,[Cc.a.POE]:w.Bb,[Cc.a.POE_PLUS]:w.xb,[Cc.a.POE_PLUS_PLUS]:w.zb,[Cc.a.POWER_DELIVERING]:w.Bb,[Cc.a.SHIELD]:w.Lb,[Cc.a.UPLINK]:w.k,[Cc.a.WAN_POE]:w.lc,[Cc.a.WARNING]:w.a}[e];return t?r.a.createElement(t,{size:"original"}):null}var fc=({icons:e,...t})=>{let a="";return 2===e.length?a=vc:3===e.length&&(a=hc),r.a.createElement(r.a.Fragment,null,e.map(n=>n&&r.a.createElement(Pc,Object.assign({},t,{className:a,iconsLength:e.length,key:n}),r.a.createElement(Dc,{icon:n}))))};const yc=Object(l.c)(pn.a,{shouldForwardProp:e=>!["color","portSize","portSizeOverride","isDisabled"].includes(e)})`
  height: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||gc.large.size};
  width: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||gc.large.size};
  align-items: center;
  background-color: ${({theme:e,color:t,isDisabled:a})=>a?"transparent":e.motifPalette[t]};
  ${({isDisabled:e,theme:t})=>e&&`border: ${t.motifPalette[O.SWITCH_PORT_SPEED_COLORS.DEFAULT]} 1px solid;`}
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  display: flex;
  position: relative;
  pointer-events: auto;

  &:not(:first-child) {
    margin-left: ${({portSize:e})=>(null==e?void 0:e.spacing)||gc.large.spacing};
  }
`,Sc=Object(l.c)("div",{shouldForwardProp:e=>!["portSize","portSizeOverride"].includes(e)})`
  width: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||gc.large.size};
  &:not(:first-child) {
    margin-left: ${({portSize:e})=>(null==e?void 0:e.spacing)||gc.large.spacing};
  }
`,Ac=({tooltipOffset:e}=gc.large)=>l.a`
  margin-left: ${e};
`;var Nc=({cellData:e,deviceData:t,key:a,portSize:c,portSizeOverride:l,...i})=>{const E=Object(uc.kc)(Object(o.useSelector)(O.selectDevicesData),t),s=Object(uc.kb)(e,t,Object(o.useSelector)(un.selectNetworkGroups),E),m=Object(uc.hb)(t,e),d=e||{},_=Object(uc.ie)(t)||Object(uc.be)(t),u=Object(n.k)(),{path:b}=Object(n.n)(),{site:p,page:I,id:g,panel:C}=Object(n.m)();if(!e)return Object(O.isUdmBase)(t)||Object(O.isUdr)(t)?null:r.a.createElement(Sc,{key:a,portSize:c,portSizeOverride:l});const R=e=>Object(n.i)(b,{site:p,page:I,id:g,panel:C,subPanel:"ports",subPanelId:e});return r.a.createElement(yc,Object.assign({color:m,portSize:c,portSizeOverride:l,isDisabled:!e.enable,message:r.a.createElement(Ic,{deviceData:t,portData:d}),position:"bottomRight",tooltipClassName:Ac(c),onClick:e=>{var t,a;null===(t=null==e?void 0:e.preventDefault)||void 0===t||t.call(e),null===(a=null==e?void 0:e.stopPropagation)||void 0===a||a.call(e);const n=Object(uc.lb)(d),c="wan"===(null==d?void 0:d.network_name)||"wan2"===(null==d?void 0:d.network_name),r=null==d?void 0:d.dns;return c?u.push(R(oe.WAN)):r?u.push(R(oe.ALL)):_?u.push(R(null==d?void 0:d.ifname)):u.push(R(n))},portal:!0,key:a},i),r.a.createElement(fc,{icons:s}))};const jc=Object(l.c)(V.a)`
  padding-left: 10px;
  color: inherit;
  font-size: inherit;
`,Lc=(e,t,a)=>{const{diagram:n,ports:c}=Object(O.getDeviceSpecs)(e),l=[Object(O.isUdm)(e),Object(O.isUsAggPro)(e),Object(O.getIsInWallAp)(e)],i=n?Object(O.determineRowLayoutsFromDiagramConfig)(n,e):Object(O.determineRowLayoutsFromPortConfig)(e);return i?i.flat().reduce((n,i)=>{var o,E;if(!i)return n;const s=Object(O.getCurrentPortData)(i.portNumber,e);if(Object(mc.a)(s))return n;const m=r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(Nc,Object.assign({cellData:s,deviceData:e,style:{minWidth:20}},a)),r.a.createElement(jc,{truncate:!0},((e,t)=>{const a=Object(dc.a)(t,O.switchAnomaliesMap),n=a.length;return n>1?r.a.createElement(M.c,{id:"COMMON_ERRORS",values:{errorCount:n}}):n?r.a.createElement(M.c,{id:a[0]+"_PROBLEM"}):!Object(O.isPoeSupported)(e)&&!t.poe_caps||Object(O.getIsUsl8Mp)(e)?t.up?Object(Kt.c)(1e3*(null==t?void 0:t.speed)*1e3/8,"bitrate")||r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_CONNECTED"}):t.enable?r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"}):r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISABLED"}):Object(O.getPortPoeModeText)(t)})(e,s))),d=Object(_c.h)(s.ifname,e,t),_=c[s.ifname],u={...s,id:(null===(o=s.port_idx)||void 0===o?void 0:o.toString())||s.ifname,isWanPort:null==_?void 0:_.startsWith("WAN"),defaultNetworkGroupLabel:Object(O.getPortGroupLabel)(e,s),networkGroup:null==d?void 0:d.id,portStatus:m,disabled:s.masked};return l.every(e=>!e)&&(u.macFilters=null===(E=s.port_security_mac_address)||void 0===E?void 0:E.length),n.push(u),n},[]).sort(({port_idx:e},{port_idx:t})=>e-t):[]},xc=Object(l.c)(F.a)`
  margin-bottom: ${({marginBottom:e})=>e||16}px;
  justify-content: space-between;
  :last-child {
    margin-bottom: 0;
  }
`,Vc=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  display: flex;
  flex: 1;
  margin-right: 12px;
`,wc=Object(l.c)(V.a)`
  font-size: 11px;
`,Mc=Object(l.c)(w.W)`
  margin: 0 6px;
`,Fc=Object(l.c)(w.a)`
  margin-right: 9px;
  color: ${({theme:e})=>e.motifPalette.warning};
`,Uc=l.a`
  margin-left: 11px;
`,kc=Object(l.c)("div")`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,zc=Object(l.c)("div")`
  > div:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,Bc=Object(l.c)(F.a)`
  width: 100%;
`,Wc=Object(l.c)(Jn.Field)`
  width: unset !important;
  margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  input {
    width: 100%;
  }
`,Hc=Object(l.c)(Jn.Field)`
  width: 20% !important;
  > div > div {
    width: 100% !important;
  }
`,Gc=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,Yc=Object(l.c)(V.a)`
  margin-bottom: 5px;
`,$c=Object(l.c)("div")`
  padding-bottom: 10px;
  border-bottom: 1px solid ${we.a["white-6"]};

  span {
    margin-left: 5px;
  }
`,Kc=Object(l.c)(F.a)`
  > * {
    width: 100%;
  }
`;var Xc=Object(M.f)((function({activeItem:e,portData:t,formValues:a,setFieldValue:n,setFieldTouched:l,initialValues:i,intl:o}){var E,s,m;const{port_table:d=[]}=e,{lldpmed_enabled:_,stormctrl_enabled:u,op_mode:b,egress_rate_limit_kbps_enabled:p,speed:I}=a,{op_mode:g,port_idx:C,port_poe:R}=t,v=e.dot1x_portctrl_enabled,T=1===C,h=Object(O.hasSwitch)(e)||(Object(O.isInWallHd)(e)||Object(O.isUaiw6)(e))&&(T||v),P=Object(O.isInWallHd)(e),D=Object(O.getIsInWallAp)(e),f=Object(O.isUdmBase)(e),y=Object(O.isUdr)(e),S=Object(O.isSwitch)(e),A=Object(Yn.r)(e),N=Object(Yn.q)(e),j=Object(Yn.p)(e),L=Object(Yn.u)(e),x=Object(O.getPortPoeAvailability)(t),V=x.isPoePassthroughSupported&&!x.isPoeOffSupported,U="switch"===g&&(R||Object(O.isUaiw6)(e))&&h,k=Object(c.useMemo)(()=>{var e;try{return null===(e=JSON.parse(I))||void 0===e?void 0:e.speed}catch(t){return null}},[I]),z=Object(c.useMemo)(()=>Object(sc.getSupportedSpeeds)(t).map(({autoneg:e,speed:t=0,full_duplex:a=!1})=>{const{value:n,unit:c}=Object(Kt.d)(1e6*t/8,"bitrate"),r=`${Object(oc.a)(n,1)}${c}`;return{full_duplex:a,label:e?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!e&&{speed:r}}}),[t]),B=Object(c.useMemo)(()=>{if(e){const t="mirror"===g;let a=Object(dt.a)(e,"switch_caps.max_mirror_sessions",void 0);if(a||0===a||(a=1),t||e.port_table.filter(e=>"mirror"===e.op_mode).length<a)return!0}return!1},[e,g]),{isAggregateAllowed:W,aggregatePortOptions:H}=Object(c.useMemo)(()=>{const a=Object(O.getPortNumbers)(e),n=Object.keys(a).reduce((e,t)=>a[t].length+e,0)||0,{port_idx:c}=t;let r=Object(dt.a)(e,"switch_caps.max_aggregate_sessions",void 0);r||0===r||(r=4);const l=((e,t)=>t.map(e=>e.port_idx).filter((t,a)=>e+a+1===t))(c,((e,t,a)=>{const n=e.findIndex(e=>e.port_idx===t.port_idx),c=-1!==n?e.slice(n+1,n+a):[],r=(null==t?void 0:t.speed_caps)&~O.SPEED_CAPS.PORTSPEED_AUTO_NEG;return c.filter(({speed_caps:e,op_mode:t})=>e&r&&"switch"===t)})(d,t,r)),i=l[0],o=l[l.length-1]||i;return{isAggregateAllowed:i<=o&&o<=n,aggregatePortOptions:l.map(e=>({label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN",value:e,values:{port:e}}))}},[e,t,d]),G=Object(c.useMemo)(()=>{const{isPoeOffSupported:e,isPoePassthroughSupported:t,isPoePassive24Supported:a,isPoeAutoSupported:n,isPoePlusPlusSupported:c,isPoePlusSupported:r}=x,l=[];if(e&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_OFF"}),value:"off"}),t&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSTHROUGH"}),value:"passthrough"}),!t&&a&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSIVE"}),value:"pasv24"}),!t&&n){const e=[];c?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS_PLUS"})):r?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS"})):e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE"})),e.push(o.formatMessage({id:"DEVICE_PORT_FORM_AUTO_DETECT"})),l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_AUTO"}),value:"auto"})}return l},[o,x]);return r.a.createElement(r.a.Fragment,null,U&&r.a.createElement(kc,{marginBottom:24},V?r.a.createElement(Kc,{alignItems:"center",flexDirection:"column"},r.a.createElement(Yc,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_POE_MODE_LABEL"})),r.a.createElement($c,null,r.a.createElement(w.W,{isActive:!0})," ",r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NOTICE_POE_PASSTHROUGH_ONLY"}))):r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_POE_MODE_LABEL",name:"poe_mode",type:"dropdown",full:!0,translateLabel:!0,options:G})),!f&&!D&&r.a.createElement(kc,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_OPERATIONS_LABEL",name:"op_mode",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:[{label:"DEVICE_PORT_FORM_SWITCHING_LABEL",value:"switch"},...B?[{label:"DEVICE_PORT_FORM_MIRRORING_LABEL",value:"mirror"}]:[],...W?[{label:"DEVICE_PORT_FORM_AGGREGATE_LABEL",value:"aggregate"}]:[]]})),"mirror"===b&&r.a.createElement(kc,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_MIRRORING_PORT",full:!0,type:"number",name:"mirror_port_idx"})),"aggregate"===b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(xc,{marginBottom:24,alignItems:"baseline"},r.a.createElement(Gc,null,r.a.createElement(Jn.Field,{full:!0,name:"port_idx",label:"DEVICE_PORT_FORM_AGGREGATE_PORTS_LABEL",value:o.formatMessage({id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN"},{port:C}),disabled:!0})),r.a.createElement("div",null,"-"),r.a.createElement(Gc,null,r.a.createElement(Jn.Field,{full:!0,name:"aggregatePortStop",type:"dropdown",options:H,translateOptions:!0,validated:!0}))),r.a.createElement(xc,{marginBottom:24,alignItems:"center"},r.a.createElement(Fc,{height:17,width:17}),(null===(E=e.downlink_table)||void 0===E?void 0:E.length)?r.a.createElement(wc,null,r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_UPLINK"})):r.a.createElement(wc,null,r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_DOWNLINK"})))),e.dot1x_portctrl_enabled&&["mirror","aggregate"].includes(b)&&r.a.createElement(kc,{marginBottom:24}),!D&&t.media&&r.a.createElement(kc,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_LINK_SPEED_LABEL",name:"speed",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:z})),S&&k===Kn.c.PORTSPEED_FULL_25G.speed&&r.a.createElement(kc,{marginBottom:24},r.a.createElement(Ec.a,{text:o.formatMessage({id:"DEVICE_PORT_FORM_LINK_SPEED_SFP28_ALERT"})})),A&&"aggregate"!==b&&!P&&r.a.createElement(xc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL"}),r.a.createElement(pn.a,{portal:!0,tooltipClassName:Uc,position:"topRight",width:230,message:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_NOTIFICATION"})},r.a.createElement(Mc,{isActive:!0}))),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL",name:"isolation",type:"checkbox"})),"switch"===b&&!D&&!f&&!y&&r.a.createElement(r.a.Fragment,null,r.a.createElement(xc,{marginBottom:16},r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL",name:"stormctrl_enabled",afterChange:e=>{n("stormctrl_enabled",e),e||["stormctrl_ucast_rate","stormctrl_mcast_rate","stormctrl_bcast_rate"].forEach(e=>{n(e,i[e]),l(e,!1)})},type:"checkbox"})),u&&r.a.createElement(zc,null,r.a.createElement(kc,{marginBottom:10},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_UNICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",min:Kn.e.MIN,max:Kn.e.MAX,name:"stormctrl_ucast_rate"})),r.a.createElement(kc,{marginBottom:10},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_MULTICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_mcast_rate",min:Kn.e.MIN,max:Kn.e.MAX})),r.a.createElement(kc,{marginBottom:20},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_BROADCAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_bcast_rate",min:Kn.e.MIN,max:Kn.e.MAX})))),N&&"switch"===b&&!P&&r.a.createElement(r.a.Fragment,null,r.a.createElement(xc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_LLDP_MED_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_LLDP_MED_LABEL",name:"lldpmed_enabled",afterChange:e=>{n("lldpmed_enabled",e),e||n("lldpmed_notify_enabled",i.lldpmed_notify_enabled)},type:"checkbox"})),_&&r.a.createElement(xc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_TOPOLOGY_LABEL",name:"lldpmed_notify_enabled",type:"checkbox"}))),L&&"switch"===b&&!P&&r.a.createElement(xc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_STP_LABEL"}),r.a.createElement(pn.a,{portal:!0,tooltipClassName:Uc,position:"topRight",width:230,message:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_STP_TOOLTIP"})},r.a.createElement(Mc,{isActive:!0}))),r.a.createElement(Jn.Field,{name:"stp_port_mode",type:"checkbox"})),j&&"switch"===b&&!P&&r.a.createElement(r.a.Fragment,null,r.a.createElement(xc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_EGRESS_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_EGRESS_LABEL",name:"egress_rate_limit_kbps_enabled",afterChange:e=>{n("egress_rate_limit_kbps_enabled",e),e||(n("egress_rate_limit_kbps",i.egress_rate_limit_kbps),l("egress_rate_limit_kbps",!1))},type:"checkbox"})),p&&r.a.createElement(F.a,{flexDirection:"row"},r.a.createElement(Bc,{flexDirection:"column"},r.a.createElement(Wc,{full:!0,label:"DEVICE_PORT_FORM_RATE_LIMIT_LABEL",type:"number",min:null===(s=Kn.b[a.egress_rate_limit_unit])||void 0===s?void 0:s.MIN,max:null===(m=Kn.b[a.egress_rate_limit_unit])||void 0===m?void 0:m.MAX,name:"egress_rate_limit_kbps"})),r.a.createElement(Hc,{type:"dropdown",options:Xn.a.slice(0,2),name:"egress_rate_limit_unit",translateOptions:!0}))))}));const qc=Object(l.c)("div")`
  padding: 0 0 48px 0;

  li {
    &[aria-expanded='true'] {
      border-bottom: none;
    }
    > div {
      margin-bottom: 0;
    }
  }
`,Zc=Object(l.c)("div")`
  &:not(:first-child) {
    border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
    padding-top 8px;
    margin-top: 16px;
  }
`,Jc=Object(l.c)(fe.g)`
  &:not(:last-child) {
    padding: 8px 0;
  }
`,Qc=Object(l.c)(w.s)`
  color: ${({theme:e})=>e.motifPalette.success};
  margin-right: 9px;
  width: 17px;
  height: 17px;
`,er=Object(l.c)(w.d)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: 9px;
  width: 18px;
  height: 18px;
`,tr=({anomalies:e})=>e.map(e=>r.a.createElement(Zc,{key:e},r.a.createElement(Jc,{alignItems:"center"},r.a.createElement(er,null),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e+"_PROBLEM"}))),r.a.createElement(Jc,{alignItems:"center"},r.a.createElement(Qc,null),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e+"_SOLUTION"})))));function ar({port:e}){const t=Object(dc.a)(e,O.switchAnomaliesMap),a=t.length;return a?r.a.createElement(qc,null,a>1?r.a.createElement(Ee.a,{variant:"tertiary",items:[{id:"anomalies",openByDefault:!0,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_ERRORS",values:{errorCount:a}})),renderContent:()=>r.a.createElement(tr,{anomalies:t})}]}):r.a.createElement(tr,{anomalies:t})):null}const nr=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,cr=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,rr=Object(l.c)(Ee.a)`
  > li {
    :last-child {
      border-bottom: none;

      > div {
        margin-bottom: 0;
      }
    }
  }
`,lr=Object(l.c)(F.a)`
  width: 100%;
  padding: 30px;
`,ir=Object(l.c)(F.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,or=Object(l.c)("li")`
  ${({isGroup:e})=>e?"\n    pointer-events: none;\n    opacity: 0.4;\n  ":"margin-left: 16px;"}
`,Er=Object(l.c)(F.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`,sr=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  span {
    margin-left: 5px !important;
    svg {
      margin-right: 0 !important;
    }
  }
`;const mr=()=>{const e=r.a.createElement(M.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Kn.e.MIN,max:Kn.e.MAX}});return Qa.a.number().min(Kn.e.MIN,e).max(Kn.e.MAX,e)},dr=Object(Ja.g)({mapPropsToValues:({currentPort:e})=>{const{autoneg:t,port_idx:a,poe_mode:n,portconf_id:c,stormctrl_bcast_enabled:r=!1,stormctrl_bcast_rate:l="",stormctrl_mcast_enabled:i=!1,stormctrl_mcast_rate:o="",stormctrl_ucast_enabled:E=!1,stormctrl_ucast_rate:s="",isolation:m=!1,lldpmed_enabled:d,lldpmed_notify_enabled:_=!1,speed:u,full_duplex:b,op_mode:p,mirror_port_idx:O,port_security_mac_address:I=[],egress_rate_limit_kbps_enabled:g=!1,egress_rate_limit_kbps:C="",stp_port_mode:R=!0,nameOverride:v="",aggregate_num_ports:T=null}=e;return{name:v,speed:t?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:u,full_duplex:b}),lldpmed_enabled:!1!==d,stormctrl_enabled:r||i||E,aggregatePortStop:T?a+T-1:null,port_idx:a,poe_mode:n,portconf_id:c,stormctrl_bcast_enabled:r,stormctrl_bcast_rate:l,stormctrl_mcast_enabled:i,stormctrl_mcast_rate:o,stormctrl_ucast_enabled:E,stormctrl_ucast_rate:s,isolation:m,lldpmed_notify_enabled:_,full_duplex:b,mirror_port_idx:O,op_mode:p,port_security_mac_address:I,egress_rate_limit_kbps:C,egress_rate_limit_unit:Xn.a[0].value,egress_rate_limit_kbps_enabled:g,stp_port_mode:R}},validationSchema:({activeItem:e})=>{const t=Object(O.getPortNumbers)(e),a=Math.min(t.standard[0]||1,t.sfp[0]||1,t.plus[0]||1),n=Math.max(t.standard[t.standard.length-1]||1,t.sfp[t.sfp.length-1]||1,t.plus[t.plus.length-1]||1),c=r.a.createElement(M.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:a,max:n}}),l=(e=!1)=>r.a.createElement(M.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Kn.b[Xn.a[e?1:0].value].MIN,max:Kn.b[Xn.a[e?1:0].value].MAX}});return Qa.a.object().shape({port_idx:Qa.a.number(),name:Qa.a.string(),poe_mode:Qa.a.string(),portconf_id:Qa.a.string(),stormctrl_enabled:Qa.a.boolean(),stormctrl_bcast_enabled:Qa.a.boolean(),stormctrl_bcast_rate:mr(),stormctrl_mcast_enabled:Qa.a.boolean(),stormctrl_mcast_rate:mr(),stormctrl_ucast_enabled:Qa.a.boolean(),stormctrl_ucast_rate:mr(),isolation:Qa.a.boolean(),full_duplex:Qa.a.boolean(),lldpmed_enabled:Qa.a.boolean(),lldpmed_notify_enabled:Qa.a.boolean(),op_mode:Qa.a.string(),mirror_port_idx:Qa.a.number().when("op_mode",{is:"mirror",then:Qa.a.number().required(c).min(a,c).max(n,c)}),aggregatePortStop:Qa.a.number().nullable().when("op_mode",{is:"aggregate",then:Qa.a.number().required().label("DEVICE_PORT_FORM_AGGREGATE_PORT_LABEL")}),port_security_mac_address:Qa.a.array().of(Qa.a.string()),egress_rate_limit_kbps_enabled:Qa.a.boolean(),stp_port_mode:Qa.a.boolean(),egress_rate_limit_kbps:Qa.a.number().when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Xn.a[0].value&&t,then:Qa.a.number().required(l()).min(Kn.b.k.MIN,l()).max(Kn.b.k.MAX,l()).integer()}).when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Xn.a[1].value&&t,then:Qa.a.number().required(l(!0)).min(Kn.b.M.MIN,l(!0)).max(Kn.b.M.MAX,l(!0))})})},handleSubmit:(e,{props:{updateDeviceWithIdEndpoint:t,activeItem:{_id:a,port_overrides:n,mac:c},activeItem:r,currentPort:l,intl:i,history:o}})=>{const E=i.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),s=Object(O.getIsPortConfDisabled)(r,l),{stormctrl_enabled:m,stormctrl_bcast_rate:d,stormctrl_mcast_rate:_,lldpmed_enabled:u,lldpmed_notify_enabled:b,stormctrl_ucast_rate:p,egress_rate_limit_kbps:I,egress_rate_limit_kbps_enabled:g,op_mode:C,mirror_port_idx:R,stp_port_mode:v,aggregatePortStop:T}=e,{speed:h,full_duplex:P}=JSON.parse(e.speed);let D=null;g&&(D=e.egress_rate_limit_unit===Xn.a[1].value?1e3*I:I),delete e.egress_rate_limit_unit;const f={...e,speed:h,full_duplex:P,stp_port_mode:v,autoneg:!h,lldpmed_notify_enabled:!!u&&b,stormctrl_bcast_enabled:!!m&&!!d,stormctrl_bcast_rate:m?d:null,stormctrl_mcast_enabled:!!m&&!!_,stormctrl_mcast_rate:m?_:null,stormctrl_ucast_enabled:!!m&&!!p,stormctrl_ucast_rate:m?p:null,egress_rate_limit_kbps:D,mirror_port_idx:"mirror"===C?R.toString():null,aggregate_num_ports:"aggregate"===C?T-l.port_idx+1:null},y=Object(Gn.a)(f,(e,t)=>"portconf_id"===t?s:"stormctrl_enabled"===t||("op_mode"===t&&"switch"===e||("lldpmed_enabled"===t?e:("full_duplex"!==t||!f.speed)&&("autoneg"!==t&&("poe_mode"===t&&"mirror"===f.op_mode||("stp_port_mode"===t?!("switch"===f.op_mode&&Object(Yn.u)(r)&&!Object(O.isInWallHd)(r)):"aggregatePortStop"===t||!e))))));let S=[y];n&&(S=[y,...n.filter(e=>e.port_idx!==y.port_idx)]),t({port_overrides:S},a,c,{successToast:{icon:ra.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:E}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{o.goBack()})}}),_r={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var ur=Object(Tt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a,subPanelId:n}})=>({portConfig:Object($n.selectPortConf)(e),currentPort:Object(O.getCurrentPortData)(n?+n:+a,t)}),_r),M.f,dr)((function({portConfig:e,activeItem:t,history:a,currentPort:l,submitForm:i,resetForm:E,setFieldValue:s,setFieldTouched:d,values:_,values:{op_mode:u,portconf_id:b},intl:p,dirty:I,initialValues:g}){const C=Object(O.getIsInWallAp)(t),R=Object(O.getIsSwitchMini)(t),v=Object(O.getIsUapUswHybrid)(t),T=Object(Yn.s)(t),h=Object(O.getHasSwitchFullFeatures)(t,l),P=Object(O.getIsPortConfDisabled)(t,l),D=Object(o.useDispatch)(),f=Object(o.useSelector)(Ie.a),y=Object(o.useSelector)(m.j),S=Object(n.i)(y,{site:f}),A="switch"===u&&T&&!C&&!Object(O.isUdm)(t),N=C?"../device":"../services",j=Object(c.useMemo)(()=>{const t=e.map(e=>({...e,groupLabel:Object(O.getPortProfileGroup)(e)})),a=Object(qn.a)(t,"groupLabel");return Object.entries(a).reduce((e,[t,a])=>{const n=a.filter(e=>v?e.attr_hidden_id!==O.SWITCH_PROFILE.ALL_ID:!R||"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"!==e.groupLabel).map(({name:e,_id:t})=>({label:e,value:t}));return"undefined"===t||R&&"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"===t?(e.push(...n),e):(e.push({groupLabel:p.formatMessage({id:t}),items:n}),e)},[])},[p,e,v]),L=Object(c.useMemo)(()=>Object(Zn.a)(j.map(({groupLabel:e,items:t})=>[{isGroup:!0,label:e,value:e},...t])),[j]),x=Object(c.useMemo)(()=>r.a.createElement(Jn.Field,{label:h?"DEVICE_PORT_FORM_PORT_PROFILE_LABEL":"DEVICE_PORT_FORM_PORT_NETWORKS_VLAN_LABEL",name:"portconf_id",type:"dropdown",full:!0,translateLabel:!0,options:L,renderOption:({id:e,onClick:t,className:a,isSelected:n,option:{isGroup:c=!1,label:l}})=>r.a.createElement(or,{key:`${e}-${l}`,id:e,onClick:t,className:a,"aria-selected":n,role:"option",isGroup:c},l),disabled:P}),[h,P,L]),U=()=>{E(),a.goBack()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(lr,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(nr,{alignItems:"center"},r.a.createElement(w.f,{onClick:U,style:{cursor:"pointer"}}),r.a.createElement(cr,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER",values:{port:l.portIdx}}))),r.a.createElement(ar,{port:l}),r.a.createElement(ir,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),r.a.createElement(ir,{marginBottom:24},x),r.a.createElement(Er,{alignSelf:"flex-end"},r.a.createElement(sr,{size:"small",type:"button",variant:"inline",onClick:()=>{a.push(`${S}${_e.a.ucoreAdvancedSettings}`)}},r.a.createElement(w.q,{height:20,width:20}),r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MANAGE_PORT_PROFILES"}))),!!l.portconf_id&&b!==l.portconf_id&&r.a.createElement(ir,{marginBottom:24},r.a.createElement(F.a,null,r.a.createElement(w.W,{style:{color:we.a["scale-5"],marginRight:8}}),r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NOTICE_OVERRIDE_RESET"}))),P&&r.a.createElement(ir,{marginBottom:24},r.a.createElement(F.a,null,r.a.createElement(w.W,{isActive:!0,style:{marginRight:8}}),r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NOTICE_PORT_CONF_DISABLED"})),r.a.createElement(Qn.a,{name:"configureLink",variant:"link",size:"small",onClick:()=>a.push(N),style:{marginTop:5}},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_BUTTON_PORT_CONF_CONFIGURE"}))),l.poe_enable&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ir,{flexDirection:"column",marginBottom:12},r.a.createElement(V.a,{weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_MANUAL_POWER_CYCLE"})),r.a.createElement(V.a,{color:"tertiary"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_MANUAL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(Er,{alignSelf:"flex-end",marginBottom:24},r.a.createElement(sr,{size:"small",variant:"inline",onClick:()=>{D(Object(ec.a)({message:"DEVICE_ACTIONS_SWITCH_PORT_POWER_CONFIRM_MESSAGE",messageValues:{portName:r.a.createElement("strong",null,l.portName),deviceName:t.name},title:"DEVICE_ACTIONS_SWITCH_PORT_POWER_CONFIRM_TITLE",useFormattedMessage:!0,onConfirm:()=>{D(Object(O.powerCyclePort)(t,l.port_idx)),D(Object(Ut.e)())}}))},Icon:r.a.createElement(w.Ab,null)},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PORT_POWER_CYCLE"})))),!Object(O.isUdmBase)(t)&&r.a.createElement(rr,{variant:"secondary",multiOpen:!0,items:[...A?[{id:"macFilter",label:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MAC_FILTER_LABEL"}),renderContent:()=>r.a.createElement(ic,{setFieldValue:s,formValues:_})}]:[],...h?[{id:"advancedPortConfig",label:r.a.createElement(M.c,{id:"DEVICE_PORT_PROFILE_OVERRIDE"}),renderContent:()=>r.a.createElement(Xc,{initialValues:g,setFieldValue:s,setFieldTouched:d,portData:l,activeItem:t,formValues:_})}]:[]]})),r.a.createElement(fn,{isDirty:I,onFormSubmit:i,onFormCancel:U,allowCancel:!0}))})),br={op_mode:"switch",dot1x_ctrl:"force_authorized",autoneg:!0,dot1x_idle_timeout:300,full_duplex:void 0,speed:void 0,lldpmed_enabled:!0,stp_port_mode:!0,stp_bpdu_guard:!1,stp_loopback_detection:!1,stp_root_guard:!1,egress_rate_limit_kbps_enabled:!1,port_security_enabled:!1,port_security_mac_address:[],linkNegotiationOptions:{autoneg:{id:"autoneg",label:"DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO",autoneg:!0,speed:void 0,full_duplex:void 0},"10000 FDX":{id:"10000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e4,full_duplex:!0},"2500 FDX":{id:"2500 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:2500,full_duplex:!0},"1000 FDX":{id:"1000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e3,full_duplex:!0},"100 FDX":{id:"100 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:100,full_duplex:!0},"100 HDX":{id:"100 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:100,full_duplex:!1},"10 FDX":{id:"10 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:10,full_duplex:!0},"10 HDX":{id:"10 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:10,full_duplex:!1}}};const pr=Object(l.c)(F.a)`
  margin-bottom: 24px;
  &:nth-of-type(3) {
    padding-top: 24px;
  }
`,Or=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`;var Ir=({port:e,groupOptions:t,speedOptions:a,group:n})=>r.a.createElement(pr,{justifyContent:"space-between"},r.a.createElement(Or,null,r.a.createElement(Jn.Field,{type:"dropdown",name:`ports[${e.portIdx-1}].networkGroup`,label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",translateLabel:!0,translateLabelValues:{port:e.portIdx,networkGroup:n},options:t,validated:!0,full:!0})),a.length>0&&r.a.createElement(Or,null,r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_GATEWAY_PORTS_SPEED_DUPLEX",name:`ports[${e.portIdx-1}].speed`,type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:a})));var gr=Object(M.f)(({activeItem:e,ports:t,intl:a})=>{const{subPanelId:l}=Object(n.m)(),i=Object(o.useSelector)(un.selectNetworkGroups),E=t=>{const{supportedValues:a=[]}=Object(_c.d)(e,t.ifname);return a.filter(e=>!!br.linkNegotiationOptions[e]).map(e=>{const{speed:t=0,full_duplex:a=!1,autoneg:n}=br.linkNegotiationOptions[e],{value:c,unit:r}=Object(Kt.d)(1e6*t/8,"bitrate"),l=`${c}${r}`;return{label:n?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!n&&{speed:l}}})},s=Object(c.useMemo)(()=>l===oe.WAN?[]:i.filter(({id:e})=>e.startsWith("LAN")),[l,i]),m=e=>[...[...i.filter(({id:e})=>e.startsWith("WAN")&&e!==un.NetworkHiddenId.WAN_LTE_FAILOVER),...s].filter(({id:a})=>((e,t,a)=>!t.some(({networkGroup:t})=>t===e)||e===a.networkGroup)(a,t,e)).map(({id:e})=>({value:e,label:e})),{value:O.DISABLED_PORT,label:a.formatMessage({id:"COMMON_DISABLED"})}],d=t.filter(({isWanPort:e,media:t})=>l===oe.WAN?e:!O.SFP_MEDIA_TYPES.includes(t)),_=t.filter(({media:e})=>l!==oe.WAN&&O.SFP_MEDIA_TYPES.includes(e));return r.a.createElement(r.a.Fragment,null,d.map(e=>r.a.createElement(Ir,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.defaultNetworkGroupLabel,key:e.portIdx})),_.map(e=>r.a.createElement(Ir,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.media||e.defaultNetworkGroupLabel,key:e.portIdx})))});const Cr=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 40px;
  padding: 12px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,Rr=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
`,vr=Object(l.c)(F.a)`
  width: 100%;
  padding: 16px 30px;
`,Tr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,hr=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.warning};
`;const Pr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,Dr=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.danger};
`,fr=Object(Ja.g)({mapPropsToValues:e=>{const{networkGroups:t,activeItem:a}=e;return{ports:Lc(a,t).map((e,t)=>{const{supportedValues:n=[]}=Object(_c.d)(a,e.ifname),c=e.autoneg?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:e.speed,full_duplex:e.full_duplex});return{...e,networkGroup:e.networkGroup||O.DISABLED_PORT,...n.length?{speed:c}:{},itemIndex:t}})}},validationSchema:({intl:e,activeItem:t,params:a})=>{const n=(null==a?void 0:a.subPanelId)===oe.ALL;return Qa.a.object().shape({ports:Qa.a.array().of(Qa.a.object().shape({networkGroup:Qa.a.string().label(e.formatMessage({id:"COMMON_WORD_INTERFACE"})).oneOf([se.a.WAN,se.a.WAN2,O.DISABLED_PORT,...Object(_c.a)(t)]).required()})).test("has-default-network-groups",r.a.createElement(Pr,null,r.a.createElement(Dr,{width:19,height:19}),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:n?"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_OR_LAN_WARNING":"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_WARNING"}))),e=>e.some(e=>e.networkGroup===se.a.WAN)&&(!n||e.some(e=>e.networkGroup===un.NetworkHiddenId.LAN)))})},handleSubmit:({ports:e},{props:{networkGroups:t,updateDeviceWithIdEndpoint:a,activeItem:{_id:n,port_overrides:c=[],ethernet_table:r,mac:l},activeItem:i,history:o,intl:E}})=>{const s=Lc(i,t),m=E.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),d=[...e.map(e=>{const{speed:t,full_duplex:a}=JSON.parse(e.speed),{speed:n,full_duplex:r,...l}=(null==c?void 0:c.find(t=>t.port_idx===e.portIdx))||{};return{...l,...t?{speed:t,full_duplex:a}:{},port_idx:e.portIdx,autoneg:!t}}),...null==c?void 0:c.filter(t=>!e.some(e=>e.portIdx===t.port_idx))],_=[];s.forEach(t=>{const a=e.find(e=>e.ifname===t.ifname);if(a){if(a.networkGroup===O.DISABLED_PORT)return;_.push({ifname:a.ifname,networkgroup:a.networkGroup})}else _.push({ifname:t.ifname,networkgroup:t.networkGroup})}),a({port_overrides:d,ethernet_overrides:_},n,l,{successToast:{icon:ra.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:m}},mergeAndOverrideKeys:["port_overrides","ethernet_overrides"],extend:!0}).then(()=>{o.goBack()})}}),yr={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var Sr=Object(Tt.compose)(Object(o.connect)(e=>({networkGroups:Object(un.selectNetworkGroups)(e)}),yr),M.f,fr)((function({activeItem:e,history:t,submitForm:a,resetForm:n,values:l,dirty:i,setFieldValue:E,errors:s}){const m=Object(o.useSelector)(un.selectNetworkGroups),{networkGroups:d}=Object(O.getDeviceSpecs)(e),_=()=>{n(),t.goBack()},u=Object(c.useMemo)(()=>l.ports.some(e=>JSON.parse(e.speed).speed),[l.ports]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(vr,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Cr,{alignItems:"center"},r.a.createElement(w.f,{onClick:_,style:{cursor:"pointer"}}),r.a.createElement(Rr,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))),r.a.createElement(gr,{activeItem:e,ports:l.ports}),r.a.isValidElement(s.ports)&&s.ports,u&&r.a.createElement(Tr,null,r.a.createElement(hr,{width:19,height:19}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_SPEED_WARNING"})))),r.a.createElement(fn,{isDirty:i,onFormSubmit:a,onFormCancel:_,onFormReset:()=>{E("ports",l.ports.map(e=>{const t=m.find(t=>t.id===d[e.ifname]);return{...e,networkGroup:(null==t?void 0:t.id)||O.DISABLED_PORT,autoneg:!0,speed:JSON.stringify({speed:0,full_duplex:!1})}}))},submitButtonText:"COMMON_ACTION_APPLY",allowCancel:!0}))}));const Ar=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,Nr=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  padding: 0 50px;
`,jr=Object(l.c)(F.a)`
  padding: 30px;
`,Lr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,xr=Object(l.c)(Lr)`
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Vr=Object(l.c)(V.a)`
  display: flex;
`,wr=Object(l.c)(V.a)`
  margin-bottom: 3px;
`,Mr=Object(l.c)(pn.a)`
  margin-left: 8px;
  margin-top: -2px;
`,Fr=l.a`
  margin-left: 15px;
`,Ur=Object(l.c)(de.a)`
  margin-top: 12px;
  justify-content: flex-end;
`,kr=Object(Ja.g)({mapPropsToValues:({outletInfo:{name:e,cycle_enabled:t,relay_state:a}})=>({name:e||"",cycle_enabled:t,relay_state:a}),validationSchema:Qa.a.object().shape({name:Qa.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),cycle_enabled:Qa.a.boolean(),relay_state:Qa.a.boolean()}),handleSubmit:(e,{props:{outletInfo:t,updateDeviceWithIdEndpoint:a,history:n,activeItem:c,activeItem:{mac:r,_id:l,outlet_overrides:i}}})=>{const o=Object(O.isUspPduPro)(c);a({outlet_overrides:[...i.filter(e=>e.index!==t.index),{index:t.index,...e}].map(a=>t.index===Object(O.getTwinOutletIndex)(a,o)?{...a,relay_state:e.relay_state}:a).sort((e,t)=>e.index-t.index)},l,r,{successToast:{icon:ra.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["outlet_overrides"],extend:!0}).then(()=>{n.goBack()})}}),zr={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var Br=Object(Tt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({outletInfo:Object(O.getActiveOutletInfo)(t,void 0,+a)}),zr),kr)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:c,activeItem:l})=>{const i=Object(o.useDispatch)(),E=()=>{n(),c.goBack()},s=Object(O.isUspPduPro)(l),m=Object(O.getTwinOutletIndex)(a,s),d=Object(Yn.n)(a,"POWER_METER");return r.a.createElement(r.a.Fragment,null,r.a.createElement(jr,{flexDirection:"column",width:"100%",height:"100%"},r.a.createElement(Ar,{alignItems:"center"},r.a.createElement(w.f,{onClick:E,style:{cursor:"pointer"}}),r.a.createElement(Nr,{size:"body",weight:"bold",truncate:!0},a.name)),r.a.createElement(Lr,{flexDirection:"column",justifyContent:"space-between"},r.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),r.a.createElement(Lr,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(Vr,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"}),m&&r.a.createElement(Mr,{position:"topRight",portal:!0,width:150,tooltipClassName:Fr,message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_TOOLTIP_LABEL_TWIN_RELAY_STATE",values:{index:m}})},r.a.createElement(w.W,{isActive:!0}))),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"relay_state"})),r.a.createElement(Lr,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"cycle_enabled"})),r.a.createElement(Lr,{flexDirection:"column"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"tertiary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"})),r.a.createElement(Ur,{variant:"link",onClick:()=>i(Object(O.powerCycleOutlet)(l,a)),Icon:r.a.createElement(w.Ab,null)},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))),d&&r.a.createElement(xr,{flexDirection:"column"},a.outlet_power&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(a.outlet_power).toFixed(2)}}))),!1,a.outlet_current&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(a.outlet_current||0).toFixed(2)}}))),a.outlet_voltage&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(a.outlet_voltage).toFixed(2)}}))),a.outlet_power_factor&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),r.a.createElement(V.a,{size:"body",color:"secondary"},Number(a.outlet_power_factor).toFixed(2))))),r.a.createElement(fn,{isDirty:e,onFormSubmit:t,onFormCancel:E,allowCancel:!0}))});const Wr=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  svg {
    position: absolute;
    left: 24px;
  }
`,Hr=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,Gr=Object(l.c)(F.a)`
  padding: 30px;
`,Yr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,$r=Object(l.c)(V.a)`
  display: flex;
`,Kr=Object(Ja.g)({mapPropsToValues:({outletInfo:{name:e,port_mode:t}})=>({name:e||"",portModeAuto:t===O.RpsPortMode.AUTO}),validationSchema:Qa.a.object().shape({name:Qa.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),portModeAuto:Qa.a.boolean()}),handleSubmit:({portModeAuto:e,...t},{props:{outletInfo:a,updateDeviceWithIdEndpoint:n,history:c,activeItem:{rps_override:r,mac:l,_id:i}}})=>{var o;const E=[{port_idx:a.port_idx,port_mode:e?O.RpsPortMode.AUTO:O.RpsPortMode.DISABLED,...t},...null!==(o=null==r?void 0:r.rps_port_table.filter(e=>e.port_idx!==a.port_idx))&&void 0!==o?o:[]];n({rps_override:{...r,rps_port_table:E}},i,l,{successToast:{icon:ra.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["rps_override"],extend:!0}).then(()=>{c.goBack()})}}),Xr={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var qr=Object(Tt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({outletInfo:Object(O.getActiveRpsOutletInfo)(t,+a)}),Xr),Kr)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:c,setFieldValue:l,values:i})=>{const o=()=>{n(),c.goBack()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Gr,{flexDirection:"column",width:"100%",height:"100%"},r.a.createElement(Wr,{alignItems:"center"},r.a.createElement(w.f,{onClick:o,style:{cursor:"pointer"}}),r.a.createElement(Hr,{weight:"bold"},a.name)),r.a.createElement(Yr,{flexDirection:"column",justifyContent:"space-between"},r.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),r.a.createElement(Yr,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement($r,{weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"portModeAuto"}))),r.a.createElement(fn,{isDirty:e,onFormSubmit:t,onFormCancel:o,allowCancel:!0}))});const Zr=(e,t)=>e?e.map(e=>{const a=t.find(t=>t.mac===e.mac);return{...e,id:null==a?void 0:a._id,name:Object(Y.c)(a),deviceData:a,model:Object(Y.e)(null==a?void 0:a.model)}}):[],Jr=Object(l.c)(F.a)`
  th {
    padding-right: 0;

    &:first-child {
      color: ${({theme:e})=>e.motifPalette.text01};
    }
  }
  tr:hover {
    cursor: pointer;
  }
`,Qr=Object(l.c)(V.a)`
  color: inherit;
  color: ${({theme:e})=>e.colors.blue};
`;function el({activeItem:{downlink_table:e},params:t,path:a,history:c}){const{site:l,page:i,subPage:E}=t,s=Object(o.useSelector)(O.selectDevicesData),m=Object(o.useDispatch)(),_=[{id:"port_idx",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_PORT"})),minWidth:50,renderCell:e=>r.a.createElement(V.a,{size:"body"},e.port_idx)},{id:"name",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_DEVICE"})),renderCell:e=>r.a.createElement(Qr,{size:"body",truncate:!0},e.name===e.mac&&e.model?e.model:e.name),minWidth:90},{id:"statusInfo",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_SPEED"})),renderCell:e=>r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_DEVICE_DUPLEX_FULL",values:{speed:e.speed}})),minWidth:60},{id:"model",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_MODEL"})),minWidth:80,renderCell:e=>r.a.createElement(V.a,{truncate:!0,size:"body"},e.model)}];return r.a.createElement(Jr,null,r.a.createElement(Pe.a,{items:Zr(e,s),disableColumnFilters:!0,initialSortBy:"port_idx",columns:_,renderFooter:()=>r.a.createElement("div",null,e&&e.length>0?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}}):r.a.createElement(M.c,{id:"COMMON_DEVICES_NOT_FOUND"})),rowHeight:30,onRowClick:({mac:e})=>{const t=Object(n.i)(a,{id:e,site:l,page:i,panel:"overview",subPage:E});c.push(t),m(Object(j.g)({type:d.b.DEVICE,mac:e}))}}))}var tl=a(668),al=a(1746);const nl=e=>"alwayson"===Object(O.getDeviceModelFeature)(e,"fan")?0:1,cl=e=>"simple"===Object(O.getDeviceModelFeature)(e,"fan");var rl=({activeItem:{"system-stats":{mem:e}={}}})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMORY_USAGE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e,"%")):null;var ll=({switchDeviceData:{general_temperature:e,uptime:t,has_temperature:a,overheating:n,power_source_voltage:c,has_fan:l,fan_level:i,sys_stats:o},switchDeviceData:E})=>{const s=(m=E)&&m.port_table?m.port_table.reduce((e,t)=>e+parseFloat(Object(dt.a)(t,"poe_power","0.0")),0):0;var m;const d=i>=nl(E);return r.a.createElement(fe.g,{height:"100%",flexDirection:"column"},c&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_SOURCE_VOLTAGE_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_SOURCE_VOLTAGE_VALUE",values:{voltage:c}}))),a&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:e}}),n&&r.a.createElement(pn.a,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_OVERHEATING"}),width:180,position:"left",className:"ml-1",style:{display:"inline-block",verticalAlign:"text-bottom"}},r.a.createElement(w.a,{style:{color:we.a["color-danger"]}}))))),l&&!cl(E)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_LEVEL"})),r.a.createElement(V.a,{size:"body"},d?i:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"})))),l&&cl(E)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_STATE"})),r.a.createElement(V.a,{size:"body"},d?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_ON"}):r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"}))),t>0&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),r.a.createElement(V.a,{size:"body"},Object(Xt.c)(t,!0))),r.a.createElement(rl,{activeItem:E}),o&&o.loadavg_1&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement(V.a,{size:"body"},Object(O.getDeviceLoadAverage)(E))),s>0&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_CONSUMPTION_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_CONSUMPTION_VALUE",values:{power:s.toFixed(2)}}))))};var il=({uplink:e,portSpeed:t})=>{const a=Number(t||(null==e?void 0:e.speed));return a>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},`${Object(vt.b)(a)} ${10===a||100===a?`(${a} Mbps)`:""}`)):null};const ol=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`,El=Object(l.c)(de.a)`
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  line-height: 12px;
`;function sl({switchDeviceData:e,showSimplifiedActivity:t,params:a,path:c,history:l}){const i=Object(o.useSelector)(O.selectDevicesData),{site:E,page:s,subPage:m}=a,{speed:_,rx_packets:u,rx_bytes:b,tx_packets:p,tx_bytes:I,port_idx:g,"rx_bytes-r":C,"tx_bytes-r":R}=Object(O.getUplinkAttrs)(e)||{},v=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),T=Object(O.getUplinkRemotePort)(i,e),h=Object(O.getUplinkDisplayName)(e,v),P=Object(o.useDispatch)();return r.a.createElement(ol,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),(null==v?void 0:v.mac)?r.a.createElement(El,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(c,{id:v.mac,site:E,page:s,panel:"overview",subPage:m});l.push(t),P(Object(j.g)({type:d.b.DEVICE,mac:v.mac}))}},h):r.a.createElement(M.c,{id:"COMMON_HYPHEN"})),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),r.a.createElement(V.a,{size:"body"},g)),r.a.createElement(il,{portSpeed:_}),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==T?void 0:T.poe_power)||0}}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},u&&b?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{type:"number",input:u,size:"body"})," / ",Object(Kt.c)(b)):"- / -")),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},p&&I?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{type:"number",input:p,size:"body"})," / ",Object(Kt.c)(I)):"- / -")),t?r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",input:R+C||0,options:"bitrate"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"bytes",input:C||0,options:"bitrate",size:"body"}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"bytes",input:R||0,options:"bitrate",size:"body"})))))}var ml=function(e){let t=parseFloat(""+e);return t?(t=Math.min(45,Math.max(t,5)),t=(t-5)/40*99,""+(0===t?"0":t.toPrecision(2))):""};var dl=function(e){return"number"==typeof e?e-95:0},_l=a(376);const ul=Object(l.c)("div")`
  height: 100%;
`,bl=l.a`
  th {
    padding-right: 0;
  }
`,pl=l.a`
  :hover {
    cursor: pointer;
  }

  td {
    padding-right: 25px;
  }
`,Ol=Object(l.c)("div")`
  margin: 20px 0;
`,Il=[{id:"name",sortable:!0,minWidth:30,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"})),renderCell:e=>r.a.createElement(V.a,{size:"body",color:"info",truncate:!0},Object(I.getClientDisplayName)(e))},{id:"connection",sortable:!0,minWidth:40,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_CONNECTION"})),renderCell:e=>r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},Object(I.getConnection)(e))},{id:"signal",sortable:!0,minWidth:25,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_SIGNAL"})),renderCell:e=>{let t;return"rssi"in e&&({rssi:t}=e),t?r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},ml(t)," (",dl(t)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")"):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))}},{id:"tx_rate",sortable:!0,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_TX_RATE"})),renderCell:e=>{let t;return"tx_rate"in e&&({tx_rate:t}=e),t?r.a.createElement(me.a,{truncate:!0,size:"body",type:"bytes",input:1e3*t,color:"secondary",options:"bitrate"}):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))}}];var gl=Object(Tt.compose)(Object(o.connect)(e=>({clientsExist:Object(I.selectClientsDataExist)(e)}),{fetchClients:I.fetchClients}),Object(_l.c)(({clientsExist:e,fetchClients:t})=>e||t()))(({activeItem:e,params:t,path:a,history:l})=>{const{site:i,page:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(Object(I.selectClientsByDevice)(e)),_=Object(L.a)("/clients/properties/:mac/overview"),u=Object(c.useCallback)(e=>{if("mac"in e){const{mac:t,unifi_device:c}=e;c?(l.push(Object(n.i)(a,{id:t,page:E,panel:"overview",section:"properties",site:i})),s(Object(j.g)({type:d.b.UNIFI_DEVICE_CLIENT,mac:t}))):l.push(_.replace(":mac",t))}},[s,l,a,_,E,i]);return r.a.createElement(ul,null,r.a.createElement(Pe.a,{items:m,disableColumnFilters:!0,headerRowClassName:bl,rowClassName:pl,columns:Il,initialSortBy:"name",renderFooter:()=>m.length>0?r.a.createElement(Ol,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:u}))});var Cl=({activeItem:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Al,{activeItem:e}),r.a.createElement(jl,{activeItem:e}),r.a.createElement(Ml,{activeItem:e,withLink:!0}),r.a.createElement(Vl,{activeItem:e,withLink:!0})),Rl=a(790),vl=a(530),Tl=a(210),hl=a.n(Tl);const Pl=Object(l.c)(fe.g,{shouldForwardProp:e=>!["borderColor","backgroundColor","dividerColor","standalone"].includes(e)})`
  background-color: ${({backgroundColor:e})=>e};
  border-left: 2px solid ${({borderColor:e})=>e};
  padding: ${({standalone:e})=>e?"6px 18px 0 0":"16px 16px 16px 0"};

  & + & {
    border-top: 1px solid ${({dividerColor:e})=>e};
  }

  ${({standalone:e,dividerColor:t})=>e&&`\n    border: 1px solid ${t};\n    margin-bottom: 4px;\n  `}
`,Dl=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
`,fl=Object(l.c)(fe.g)`
  padding-top: 5px;
  min-width: 70px;
  max-width: 70px;
`;var yl=({level:e,children:t,standalone:a})=>{const n=Object(L.m)(),{icon:c,backgroundColor:l,borderColor:i,dividerColor:o}=((e,t)=>"warning"===e?{icon:Dl,backgroundColor:hl()(t.motifPalette.warning).alpha(.04).css(),borderColor:t.motifPalette.warning,dividerColor:hl()(t.motifPalette.warning).alpha(.2).css()}:{icon:w.Xb,backgroundColor:hl()(t.motifPalette.info).alpha(.05).css(),borderColor:t.motifPalette.info,dividerColor:hl()(t.motifPalette.info).alpha(.2).css()})(e,n);return r.a.createElement(Pl,{flexDirection:"row",width:"100%",backgroundColor:l,borderColor:i,dividerColor:o,standalone:a},r.a.createElement(fl,{justifyContent:"center"},r.a.createElement(c,{width:24,height:24})),r.a.createElement(fe.g,{flexDirection:"column",justifyContent:"center"},t))};const Sl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Al=({activeItem:e})=>{const t=Object(o.useSelector)(re.d),a=!!(t&&e.model_eol_version&&Object(vl.a)(t,">= "+e.model_eol_version));return e.model_in_eol?r.a.createElement(yl,{level:"warning"},a&&r.a.createElement(Sl,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_EOL_WARNING_NO_CONFIGURING",values:{date:r.a.createElement(Rl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Sl,{size:"caption"},r.a.createElement(M.c,{id:e.model_eol_date?"DEVICE_PROPERTIES_EOL_WARNING":"DEVICE_PROPERTIES_EOL_WARNING_NO_DATE",values:{date:r.a.createElement(Rl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),!!e.model_eol_version&&r.a.createElement(Sl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_EOL_WARNING_CONTROLLER_UPGRADE",values:{controllerVersion:e.model_eol_version}}))),r.a.createElement("a",{href:_e.a.eolLearnMore,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.c,{id:"COMMON_LEARN_MORE"}))):null};const Nl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var jl=({activeItem:e})=>e.model_in_lts?r.a.createElement(yl,{level:"info"},r.a.createElement(Nl,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LTS_WARNING",values:{date:r.a.createElement(Rl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),e.model_eol_version&&r.a.createElement(Nl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LTS_WARNING_CONTROLLER_UPGRADE",values:{controllerVersion:e.model_eol_version}})),r.a.createElement("a",{href:_e.a.ltsLearnMore,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.c,{id:"COMMON_LEARN_MORE"}))):null,Ll=a(2009);const xl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Vl=({activeItem:e,withLink:t,standalone:a})=>{const n=Object(o.useSelector)(Ll.selectHasCloudBackupEnabled),c=Object(o.useSelector)(m.b),l=Object(o.useSelector)(m.f),i=c.replace(/\/network\/?/,_e.a.ucoreAdvancedSettings);return Object(L.f)([Object(Ll.fetchUcoreGeneralInfo)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})].filter(()=>!l),!n&&Object(O.hasActiveUnifiCare)(e)?r.a.createElement(yl,{level:"warning",standalone:a},r.a.createElement(xl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_UNIFI_CARE_CLOUD_BACKUP_ENABLE_WARNING"})),t&&r.a.createElement(xl,{size:"caption"},r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_UNIFI_CARE_CLOUD_BACKUP_ENABLE_NAVIGATE",values:{url:i}}))):null)};const wl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Ml=({activeItem:e,withLink:t,standalone:a})=>{const n=Object(o.useSelector)(Ll.selectHasCloudAccessEnabled),c=Object(o.useSelector)(m.b),l=Object(o.useSelector)(m.f),i=c.replace(/\/network\/?/,_e.a.ucoreAdvancedSettings);return Object(L.f)([Object(Ll.fetchUcoreGeneralInfo)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})].filter(()=>!l),!n&&Object(O.hasActiveUnifiCare)(e)?r.a.createElement(yl,{level:"warning",standalone:a},r.a.createElement(wl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_UNIFI_CARE_REMOTE_ACCESS_ENABLE_WARNING"})),t&&r.a.createElement(wl,{size:"caption"},r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_UNIFI_CARE_REMOTE_ACCESS_ENABLE_NAVIGATE",values:{url:i}}))):null)};const Fl=Object(l.c)(F.a)`
  padding: 24px 32px 24px 0 !important;
  flex-shrink: 0;
`,Ul=Object(l.c)(V.a)`
  max-width: 150px;
`,kl=Object(l.c)(V.a)`
  max-width: 100px;
`;var zl=r.a.memo(({device:e})=>{const{model:t,mac:a,displayable_version:n,ip:c,type:l,lan_ip:i}=e,o=Object(Y.a)(e);return r.a.createElement(Fl,null,r.a.createElement(F.a,{minWidth:157,maxWidth:157,justifyContent:"center",alignItems:"center"},r.a.createElement(F.a,{minWidth:125,maxWidth:125,height:125,padding:"16px",alignItems:"center",justifyContent:"center"},r.a.createElement(U.c,{device:{model:t,type:l},filesMap:"GRID",width:"100%"}))),r.a.createElement(F.a,{width:211,flexDirection:"column",justifyContent:"center"},o&&r.a.createElement(Zt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_MODEL"})),r.a.createElement(Ul,{size:"body",truncate:!0},o)),a&&r.a.createElement(Zt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_MAC_ADDRESS"})),r.a.createElement(V.a,{size:"body"},a)),c&&r.a.createElement(Zt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_IP"})),r.a.createElement(V.a,{size:"body"},i||c)),n&&r.a.createElement(Zt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_FIRMWARE_VERSION"})),r.a.createElement(kl,{size:"body",truncate:!0},n))))},(e,t)=>e.device.model===t.device.model&&e.device.hostname===t.device.hostname&&e.device.mac===t.device.mac&&e.device.displayable_version===t.device.displayable_version&&e.device.ip===t.device.ip);const Bl=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Wl=a(475),Hl=a(1916),Gl=a(18),Yl=a(1975);const $l=Object(l.c)(V.a)`
  display: block;
  position: relative;
  padding-left: 20px;
  margin-left: 15px;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1px;
    width: 12px;
    border-bottom: 1px ${e=>`${e.bordertype} ${e.legendcolor}`};
  }
`,Kl=l.a`
  margin-bottom: 32px;
`,Xl=Object(Hl.a)(6,e=>({value:e,label:e.toString()})).reverse(),ql=(e,t,a,n,c)=>0!==t&&5!==t?null:r.a.createElement("line",{x1:a,x2:n,y1:0,y2:0,className:c}),Zl=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var Jl=Object(_n.b)(r.a.memo(({gwMac:e,keys:t,pickDatumsWithKey:a,heading:n,forUdm:c,theme:l})=>{const i=Object(o.useSelector)(Object(De.selectDeviceStatReport)(e,De.fetchDeviceUsageReport,De.OBJECT.GW)),E=Object(o.useSelector)(Object(De.selectDeviceStatReport)(e,De.fetchDeviceUsageReport)),s=Object(o.useSelector)(Gl.O),m="ap"===a?"gradientArea":"line",d=Date.now(),_=Object(ht.startOfHour)(Object(ht.addHours)(d,1)).getTime(),u=s?"H:ss":"ha",b=Object(Yl.b)(_,u);b[b.length-1].label="";const p=b[0].value,O={};let I=0,g=i;c&&(g=E.reduce((e,t)=>{const a={...t};return a.gw?e:a.sw?(e[I].num_sta+=a.num_sta,I+=1,e):(e.push(a),e)},[])),a&&(g=E.filter(e=>e[a]));Object(Wl.m)(g.filter(e=>e.time>p).map(e=>({...e,x:e.time})),St.a.MINUTES.grain).forEach(e=>{t.forEach(t=>{O[t]||(O[t]={key:t,isDashed:"mem"===t,variant:"mem"===t?m:"gradientArea",lineColor:"mem"===t?"purple":"blue",maxY:0,data:[]}),O[t].data.push({x:e.x,y:e[t]})})});const C=t.map(e=>O[e]?O[e].data.map(e=>e.y||0):0),R=Math.max(...C.flat(),4);let v=Xl;return R>5&&(v=Object(Yl.e)(R,6)),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between",className:Kl,marginTop:"10px"},r.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},r.a.createElement(M.c,{id:n})),t.length>1&&r.a.createElement(F.a,null,r.a.createElement($l,{legendcolor:l.colors.blue,bordertype:"solid"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_CPU"}))),r.a.createElement($l,{legendcolor:l.colors.purple,bordertype:"dotted"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_MEMORY"}))))),r.a.createElement(Pt.a,{xAxis:b,yAxis:v,width:336,height:120,margin:[0,0,20,30],xLabelsBetween:!0,renderYGridLine:ql,labelClassName:Zl(l),renderChartElements:(e,a,n)=>r.a.createElement(r.a.Fragment,null,t.map(t=>O[t]&&O[t].data.length&&r.a.createElement(Dt.a,{key:O[t].key,data:O[t].data,maxY:n,mouseData:a,getCoordinates:e,variant:O[t].variant,lineColor:l.colors[O[t].lineColor],dashed:O[t].isDashed,hideMissingData:!0})))}))},(e,t)=>e.gwMac===t.gwMac));var Ql=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const ei=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,ti=Object(l.c)("div")`
  margin-bottom: 16px;
`;var ai=({activeItem:e})=>r.a.createElement(ei,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),r.a.createElement(ti,null),r.a.createElement(Ql,{activeItem:e}));const ni=Object(l.c)("div")`
  margin-bottom: 20px;
`,ci=Object(l.c)(w.W)`
  margin-right: 5px;
  color: ${({theme:e})=>e.motifPalette.info};
`,ri=Object(l.c)("div")`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;var li=Object(Ja.g)({mapPropsToValues:({activeItem:{name:e,mac:t}={}})=>({name:e!==t?e:""}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:n,isValid:l,values:i,resetForm:E,formName:s="general"})=>{const d=Object(o.useDispatch)(),_=Object(o.useSelector)(m.b),u=Object(O.isUdm)(e);Object(c.useEffect)(()=>(d(Object(j.h)({[s]:()=>u?{}:i})),d(Object(j.j)({[s]:()=>E({values:i})})),d(Object(j.i)({[s]:E})),()=>{d(Object(j.h)({[s]:null})),d(Object(j.j)({[s]:null})),d(Object(j.i)({[s]:null}))}),[d,E,i,u,s]),Object(c.useEffect)(()=>{t(s,n),a(s,!l)},[t,n,a,l,s]);const b=_.replace(/\/network\/?/,_e.a.ucoreSettings);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ni,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DEVICE_NAME",name:"name",full:!0,disabled:u}),u&&r.a.createElement(ri,null,r.a.createElement(ci,null),r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_NAME_LINK_UNIFI_OS",values:{link:b}}))))}),ii=a(2896),oi=a(529),Ei=a(50);const si=Object(l.c)(fe.g)`
  margin-bottom: 24px;
`,mi=Object(l.c)(fe.g)`
  margin-bottom: 8px;
`,di=Object(l.c)(V.a)`
  display: flex;
  flex: 1;
  margin-right: 12px;
`,_i=l.a`
  margin-left: 11px;
`,ui=Object(l.c)(w.W)`
  margin: 0 6px;
`,bi=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,pi=e=>({hour:Number(e.split(":")[0]),min:Number(e.split(":")[1])}),Oi=e=>`${e.hour.toString().padStart(2,"0")}:${e.min.toString().padStart(2,"0")}`,Ii=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e,activeItem:{lcm_brightness:t=O.DEFAULT_LCM_BRIGHTNESS,lcm_brightness_override:a=!1,lcm_night_mode_begins:n=O.DEFAULT_LCM_NIGHT_MODE_BEGINS,lcm_night_mode_ends:c=O.DEFAULT_LCM_NIGHT_MODE_ENDS}})=>({lcm:e,lcm_brightness:t,lcm_brightness_override:a,lcm_night_mode_begins:pi(n),lcm_night_mode_ends:pi(c)}),validationSchema:gn.a.object().shape({lcm:gn.a.object().shape({sync:gn.a.boolean()}),lcm_brightness_override:gn.a.boolean(),lcm_brightness:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required(),lcm_night_mode_begins:gn.a.object().shape({hour:gn.a.number(),min:gn.a.number()}),lcm_night_mode_ends:gn.a.object().shape({hour:gn.a.number(),min:gn.a.number()})}),handleSubmit:()=>null}),gi={saveSettings:Ei.saveSettings};var Ci=Object(Tt.compose)(Object(o.connect)(e=>({lcmSettings:Object(Ei.selectLcmSettings)(e)}),gi),Ii)(({values:e,setFieldValue:t,resetForm:a,setFormDirty:n,setFormInvalid:l,dirty:i,isValid:E,initialValues:s})=>{const m=Object(o.useDispatch)();return Object(c.useEffect)(()=>{n("lcmScreen",i),l("lcmScreen",!E)},[n,l,E,i]),Object(c.useEffect)(()=>(m(Object(j.h)({lcmScreen:()=>({...e,lcm_brightness_override:e.lcm_brightness!==O.DEFAULT_LCM_BRIGHTNESS,lcm_night_mode_begins:Oi(e.lcm_night_mode_begins),lcm_night_mode_ends:Oi(e.lcm_night_mode_ends)})})),m(Object(j.j)({lcmScreen:()=>{Object(oi.a)(s.lcm,e.lcm)||m(Object(Ei.saveSettings)(e.lcm)),a({values:e})}})),m(Object(j.i)({lcmScreen:a})),()=>{m(Object(j.h)({lcmScreen:null})),m(Object(j.j)({lcmScreen:null})),m(Object(j.i)({lcmScreen:null}))}),[m,a,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(mi,null,r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"}))),r.a.createElement(si,null,r.a.createElement(ii.a,{size:"large",value:e.lcm_brightness||O.DEFAULT_LCM_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{size:"body"},e,"%"),onChange:e=>{t("lcm_brightness",+e.target.value)}})),r.a.createElement(si,{flexDirection:"column"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE_DESCRIPTION"}))),r.a.createElement(si,{justifyContent:"space-between"},r.a.createElement(bi,null,r.a.createElement(Jn.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_BEGINS",name:"lcm_night_mode_begins",full:!0})),r.a.createElement(bi,null,r.a.createElement(Jn.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_ENDS",name:"lcm_night_mode_ends",full:!0}))),r.a.createElement(si,{justifyContent:"space-between"},r.a.createElement(di,{color:"primary",size:"body"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),r.a.createElement(pn.a,{portal:!0,tooltipClassName:_i,position:"topRight",width:200,message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION_TOOLTIP"})},r.a.createElement(ui,{isActive:!0}))),r.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.sync"})))}),Ri=a(451),vi=a(282);const Ti=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`,hi=Object(l.c)(V.a)`
  flex: 1;
  margin-right: 12px;
`,Pi=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,Di=Object(l.c)(F.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
  justify-content: space-between;
`,fi=Object(l.c)(de.a)`
  span {
    margin-left: 3px !important;
  }
`,yi=Object(l.c)(Jn.Field)`
  margin-right: 18px;
`,Si=Object(Ja.g)({mapPropsToValues:({switchDeviceData:e,nativeNetworks:t,radiusProfiles:a,radiusSettings:n})=>{const{jumboframe_enabled:c=!1,flowctrl_enabled:r=!1,stp_version:l="rstp",stp_priority:i="32768",dot1x_portctrl_enabled:o=!1,radiusprofile_id:E="",dot1x_fallback_networkconf_id:s="",snmp_location:m="",snmp_contact:d="",outdoor_mode_override:_=O.OutdoorModeOverride.DEFAULT,power_source_ctrl:u=O.POWER_SOURCE_OPTIONS.AUTO,power_source_ctrl_enabled:b=!1}=e;return{mgmt_network_id:Object(O.getDeviceNetworkId)(t,e),jumboframe_enabled:c,flowctrl_enabled:r,stp_version:l,stp_priority:i,dot1x_portctrl_enabled:o,radiusprofile_id:E,radiusProfiles:a,radiusSettings:n,dot1x_fallback_networkconf_id:s,snmp_location:m,snmp_contact:d,outdoor_mode_override:_,power_source_ctrl:u,power_source_ctrl_enabled:b}},validationSchema:Qa.a.object().shape({mgmt_network_id:Qa.a.string(),flowctrl_enabled:Qa.a.boolean(),stp_version:Qa.a.string(),stp_priority:Qa.a.string(),dot1x_portctrl_enabled:Qa.a.boolean(),snmp_contact:Qa.a.string(),snmp_location:Qa.a.string(),radiusprofile_id:Qa.a.string().when("dot1x_portctrl_enabled",{is:!0,then:Qa.a.string().isAllowedDefaultRadiusProfile("COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE").required("COMMON_VALIDATION_FIELD_REQUIRED")}),radiusProfiles:Qa.a.array().of(Qa.a.object()),radiusSettings:Qa.a.object(),dot1x_fallback_networkconf_id:Qa.a.string(),outdoor_mode_override:Qa.a.string(),power_source_ctrl:Qa.a.string(),power_source_ctrl_enabled:Qa.a.boolean()}),handleSubmit:()=>null}),Ai=[{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_STP",value:"stp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_RSTP",value:"rstp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_DISABLED",value:"disabled"}];var Ni=Object(Tt.compose)(Object(o.connect)((e,{activeItem:t})=>({nativeNetworks:Object(un.selectNativeNetworks)(e),switchDeviceData:Object(O.selectDeviceData)(e,t.mac),radiusOptions:Object(Ri.selectRadiusOptions)(e),radiusProfiles:Object(Ri.selectRadiusProfiles)(e),radiusSettings:Object(Ei.selectRadiusSettings)(e)}),{updateDevice:O.updateDevice,fetchRadiusProfiles:Ri.fetchRadiusProfiles}),M.f,Si,Object(_l.c)(({fetchRadiusProfiles:e})=>e()))(({activeItem:e,values:t,errors:a,resetForm:l,dirty:i,setFormDirty:E,setFormInvalid:s,setFieldValue:d,nativeNetworks:_=[],initialValues:u,radiusOptions:b,radiusProfiles:p,isValid:I,hideFlowControl:g,intl:C,formName:R="services"})=>{const v=Object(o.useDispatch)(),T=Object(n.k)(),h=Object(o.useSelector)(Ie.a),P=Object(o.useSelector)(m.j),D=Object(n.i)(P,{site:h}),f=Object(Yn.u)(e),y=Object(Yn.o)(e),S=Object(o.useSelector)(vi.f),A=Object(O.getDeviceModelFeature)(e,"outdoorModeSupport")&&S,N=Object(O.isGateway)(e),L=Object(Yn.t)(e),x=null==p?void 0:p.length;Object(c.useEffect)(()=>{if((!t.radiusProfiles||!t.radiusProfiles.length)&&x){let{radiusprofile_id:e}=t;t.radiusprofile_id||b.find(e=>e.value===t.radiusprofile_id)||(e=b[0].value),l({values:{...u,radiusprofile_id:e,radiusProfiles:p}})}},[p]),Object(c.useEffect)(()=>{E(R,i),s(R,!I)},[s,E,i,I,R]),Object(c.useEffect)(()=>(v(Object(j.h)({[R]:()=>({snmp_contact:t.snmp_contact,snmp_location:t.snmp_location,...!N&&{mgmt_network_id:t.mgmt_network_id},...!g&&{jumboframe_enabled:t.jumboframe_enabled,flowctrl_enabled:t.flowctrl_enabled},...f&&{stp_version:t.stp_version,stp_priority:t.stp_priority},...y&&{dot1x_portctrl_enabled:t.dot1x_portctrl_enabled},...t.dot1x_portctrl_enabled&&y&&{radiusprofile_id:t.radiusprofile_id,dot1x_fallback_networkconf_id:t.dot1x_fallback_networkconf_id},...A&&{outdoor_mode_override:t.outdoor_mode_override},...L&&{power_source_ctrl:t.power_source_ctrl,power_source_ctrl_enabled:t.power_source_ctrl!==O.POWER_SOURCE_OPTIONS.AUTO}})})),v(Object(j.j)({[R]:()=>l({values:t})})),v(Object(j.i)({[R]:l})),()=>{v(Object(j.h)({[R]:null})),v(Object(j.j)({[R]:null})),v(Object(j.i)({[R]:null}))}),[e._id,v,l,t,R,y,f,N,g,A,L]);const U=Object(c.useMemo)(()=>_.map(e=>({value:e._id,label:e.name})),[_]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{width:"100%",flexDirection:"column",flex:"1 1 85%"},!N&&r.a.createElement(Pi,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:U,translateLabel:!0})),!g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Di,{marginBottom:8},r.a.createElement(hi,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_JUMBO_FRAMES"})),r.a.createElement(Jn.Field,{name:"jumboframe_enabled",type:"checkbox"})),r.a.createElement(Di,{marginBottom:16},r.a.createElement(hi,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_FLOW_CONTROL"})),r.a.createElement(Jn.Field,{name:"flowctrl_enabled",type:"checkbox"}))),f&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pi,{marginBottom:32},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SPANNING_TREE",name:"stp_version",full:!0,type:"dropdown",translateOptions:!0,translateLabel:!0,options:Ai})),r.a.createElement(Ti,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SECURITY"})),"disabled"!==t.stp_version&&r.a.createElement(Pi,{marginBottom:16},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_PRIORITY",name:"stp_priority",type:"dropdown",full:!0,validated:!0,options:O.SPANNING_TREES.map(e=>({label:e,value:e})),translateLabel:!0}))),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Di,{marginBottom:32},r.a.createElement(hi,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL",name:"dot1x_portctrl_enabled",type:"checkbox"})),t.dot1x_portctrl_enabled&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pi,{marginBottom:16},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_RADIUS_PROFILE",name:"radiusprofile_id",type:"dropdown",full:!0,options:b,invalid:!!a.radiusprofile_id,translateLabel:!0}),!!a.radiusprofile_id&&r.a.createElement(Jn.ValidationMessage,{align:"left",visible:!0,translation:"COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE"})),r.a.createElement(Di,{alignSelf:"flex-end"},r.a.createElement(fi,{size:"small",type:"button",variant:"inline",onClick:()=>{T.push(`${D}${_e.a.advancedSettingsRadiusProfileForm}`)}},r.a.createElement(w.q,{height:20,width:20}),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CREATE_RADIUS_PROFILE"}))),r.a.createElement(Pi,{marginBottom:16},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_FALLBACK_VLAN",name:"dot1x_fallback_networkconf_id",type:"dropdown",full:!0,validated:!0,options:[{label:C.formatMessage({id:"COMMON_NONE"}),value:""},...U],translateLabel:!0})),r.a.createElement(Di,{alignSelf:"flex-end"},r.a.createElement(fi,{size:"small",type:"button",variant:"inline",onClick:()=>{T.push(`${D}${_e.a.networkSettingsForm}`)}},r.a.createElement(w.q,{height:20,width:20}),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CREATE_FALLBACK_VLAN"}))))),Object(Yn.k)(e)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ti,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SNMP"})),r.a.createElement(Pi,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_LOCATION",name:"snmp_location",full:!0})),r.a.createElement(Pi,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_CONTACT",name:"snmp_contact",full:!0}))),L&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ti,{weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_POWER_SOURCE"})),r.a.createElement(Pi,{marginBottom:A?24:0},r.a.createElement(yi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.AUTO},r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_AUTO"}))),r.a.createElement(yi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.POE_8023AF},r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_POE_8023AF"}))),r.a.createElement(yi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.POE_INJECTOR},r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_POE_INJECTOR"}))))),A&&r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"flex-start"},r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(hi,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE_DESCRIPTION"}))),r.a.createElement(Jn.Field,{type:"checkbox",name:"outdoor_mode_override",value:t.outdoor_mode_override===O.OutdoorModeOverride.ON,afterChange:e=>{d("outdoor_mode_override",e?O.OutdoorModeOverride.ON:O.OutdoorModeOverride.OFF)}}))))}),ji=a(128);const Li=gn.a.object().shape({type:gn.a.string(),ip:gn.a.string().when("type",{is:"static",then:Qa.b.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),netmask:gn.a.string().when("type",{is:"static",then:Qa.c.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}).when("ip",(e,t)=>e?t.test("is-valid-subnet-mask",r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"}),t=>Object(ji.h)(e,t)):t),gateway:gn.a.string().when("type",{is:"static",then:Qa.b.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns1:gn.a.string().when("type",{is:"static",then:Qa.b.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns2:Qa.b.when("dns1",{is:e=>!!e,then:Qa.b}),bonding_enabled:gn.a.boolean(),dnssuffix:gn.a.string(),mgmt_network_id:gn.a.string(),snmp_location:gn.a.string(),snmp_contact:gn.a.string()}),xi=Object(l.c)("div")`
  margin-bottom: 24px;
`,Vi=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,wi=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,Mi=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Fi=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{Object(O.getIsUsl8Mp)(e);const{config_network:t,ip:a,switch_vlan_enabled:n,lte_limit_enabled:c,lte_limit:r}=e,{type:l="dhcp",ip:i=a||"",netmask:o="",gateway:E="",dns1:s="",dns2:m="",dnssuffix:d="",bonding_enabled:_=!1}=t;return{config_network:{type:l,ip:i,netmask:o,gateway:E,dns1:s,dns2:m,dnssuffix:d,bonding_enabled:_},switch_vlan_enabled:n||!1}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Qa.a.object().shape({config_network:Li,lte_limit_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_LTE_DATA_LIMIT"),lte_limit:Qa.a.number().integer().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT").when("lte_limit_enabled",{is:!0,then:Qa.a.number().min(1).required().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT")})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:n,resetForm:l,isValid:i,initialValues:E,activeItem:s,formName:m="network"})=>{const d=Object(o.useDispatch)(),_=Object(O.getIsUapUswHybrid)(s),u=Object(O.getIsUsl8Mp)(s);return Object(c.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),Object(c.useEffect)(()=>(d(Object(j.h)({[m]:()=>{var e;const t={config_network:"static"===n.config_network.type?n.config_network:{type:"dhcp",bonding_enabled:n.config_network.bonding_enabled}};return _&&(t.switch_vlan_enabled=n.switch_vlan_enabled,E.switch_vlan_enabled&&!n.switch_vlan_enabled&&(null===(e=s.port_overrides)||void 0===e?void 0:e.length)&&(t.port_overrides=s.port_overrides.map(({portconf_id:e,...t})=>t))),t}})),d(Object(j.j)({[m]:()=>l({values:n})})),d(Object(j.i)({[m]:l})),()=>{d(Object(j.h)({[m]:null})),d(Object(j.j)({[m]:null})),d(Object(j.i)({[m]:null}))}),[d,l,n,m,s.port_overrides,E.switch_vlan_enabled,_]),r.a.createElement(r.a.Fragment,null,r.a.createElement(xi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Mi})),"static"===n.config_network.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0})))),(Object(O.isUapAcHd)(s)||Object(O.isUapAcShd)(s)||Object(O.isUapXg)(s)||Object(O.isUwbXg)(s))&&r.a.createElement(F.a,{marginBottom:16,justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_AGGREGATION"})),r.a.createElement(tn.a,{name:"config_network.bonding_enabled",type:"checkbox"})),_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(wi,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_VLAN"})),r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_VLAN"})),r.a.createElement(tn.a,{type:"checkbox",name:"switch_vlan_enabled"}))),u&&!1)}),Ui=a(2898);const ki=Object(l.c)(F.a)`
  margin-bottom: 20px;
`,zi=Object(l.c)(V.a)`
  margin-bottom: 6px;
`,Bi=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e,formName:t="screen"})=>({[t]:{led_override:e.led_override||O.LedOverride.ON,led_override_color_brightness:e.led_override_color_brightness||O.DEFAULT_LED_BRIGHTNESS,led_override_color:e.led_override_color||O.DEFAULT_LED_COLOR}}),validationSchema:Qa.a.object().shape({led_override:Qa.a.string(),led_override_color_brightness:Qa.a.number(),led_override_color:Qa.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Wi=Object(Tt.compose)(M.f,Bi)(({activeItem:e,setFormDirty:t,values:a,dirty:n,resetForm:l,setFieldValue:i,formName:E="screen",disableLedOverrideField:s,disableLedOverrideColor:m,disableLedBrightnessField:d,intl:_})=>{const u=Object(o.useDispatch)(),b=Object(Yn.j)(e);return Object(c.useEffect)(()=>{t(E,n)},[t,n,E]),Object(c.useEffect)(()=>(u(Object(j.h)({[E]:()=>{const e=Object(p.a)(a,E);return{...a[E],...e}}})),u(Object(j.j)({[E]:()=>{l({values:a})}})),u(Object(j.i)({[E]:l})),()=>{u(Object(j.h)({[E]:null})),u(Object(j.j)({[E]:null})),u(Object(j.i)({[E]:null}))}),[u,E,l,a]),r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement(ki,{justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_LED"}))),r.a.createElement(tn.a,{type:"checkbox",name:E+".led_override",value:a[E].led_override===O.LedOverride.ON,afterChange:e=>{i(E+".led_override",e?O.LedOverride.ON:O.LedOverride.OFF)}})),!d&&b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"})),r.a.createElement(ki,null,r.a.createElement(ii.a,{size:"large",value:a[E].led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{color:"secondary",size:"body"},e,"%"),onChange:e=>{i(E+".led_override_color_brightness",+e.target.value)}}))),!m&&b&&r.a.createElement(ki,{justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(zi,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"})),r.a.createElement(Ui.a,{color:a[E].led_override_color,variant:"block",onChange:e=>{i(E+".led_override_color","hex"in e?e.hex:void 0)},hexLabel:_.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:r.a.createElement(de.a,{variant:"inline",onClick:()=>{i(E+".led_override_color",O.DEFAULT_LED_COLOR)}},r.a.createElement(M.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))});const Hi=Object(l.c)(de.a)`
  padding: 0;
  white-space: nowrap;
`;var Gi=({device:e})=>{const{locating:t}=e,a=Object(o.useDispatch)(),n=Object(O.getDeviceState)(e);return r.a.createElement(Hi,{variant:"link",onClick:t=>{if(t.preventDefault(),t.stopPropagation(),Object(O.isUBB)(e)){const{peer_ubb:t}=e;t&&a(Object(O.locateDevice)(t))}a(Object(O.locateDevice)(e))},disabled:n!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:t?"DEVICE_ACTIONS_LOCATE_STOP":"DEVICE_ACTIONS_LOCATE_DEVICE"}))};const Yi=Object(l.c)(de.a)`
  padding: 0;
`;var $i=({device:e})=>{const t=Object(O.getDeviceState)(e),a=Object(o.useSelector)(Gl.D)("API_DEVICE_RESTART"),n=Object(o.useDispatch)();return a&&r.a.createElement(Yi,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const a=Object(O.isSwitch)(e)&&Object(sc.isPoeSupported)(e),c=a||Object(O.isGateway)(e),r=!e.bypassConfirmRestart;n(c||r?Object(O.confirmDeviceRestart)({name:e.name||e.mac,withHardReboot:a,onConfirm:(t="soft")=>{n(Object(O.restartDevice)(e,t))},onCancel:()=>{n(Object(Ut.e)())}}):Object(O.restartDevice)(e))},disabled:t!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_RESTART"}))};const Ki=Object(l.c)(de.a)`
  padding: 0;
`;var Xi=({device:e})=>{const t=Object(O.getDeviceState)(e),a=Object(o.useDispatch)();return r.a.createElement(Ki,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation(),a(Object(O.confirmDeviceProvision)({name:e.name||e.mac,onConfirm:()=>{a(Object(O.forceProvisionDevice)(e))},onCancel:()=>{a(Object(Ut.e)())}}))},loader:t===O.DeviceState.PROVISIONING?"spinner":null},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PROVISION"}))},qi=a(379),Zi=a(77),Ji=a(227),Qi=a(112);const eo=Object(l.c)(de.a)`
  padding: 0;
`,to=Object(l.c)("div")`
  margin-top: ${({theme:e})=>e.space[4]}px;
  line-height: 1.5;
`,ao=Object(l.c)(U.b)`
  width: auto !important;
  padding: 0 8px;
`,no=l.a`
  button {
    border-radius: 0;
    font-size: 12px;
  }
`;var co=Object(M.f)(({device:e,showOnlyIfInactive:t,intl:a})=>{const{mac:n,name:l,adopted:i}=e,E=Object(o.useDispatch)(),[s,m]=Object(c.useState)(!1),d=Object(o.useSelector)(Zi.selectEnv),_=Object(o.useSelector)(Ji.a),u=Object(Qi.b)(d),b=Object(O.isUlte)(e),p=Object(O.isDeactivatedForNonPayment)(e),I=Object(O.getDeviceState)(e),g=b&&(!t||[O.DeviceState.UNKNOWN,O.DeviceState.FIRMWARE_MISMATCH,O.DeviceState.ADOPTION_FAILED,O.DeviceState.DISCONNECTED].includes(I)),C=Object(c.useCallback)(async()=>{try{await E(Object(qi.c)(n,{successToast:{icon:ra.a.success,message:"DEVICE_ULTE_REMOVED_SUCCESS"}})),E(Object(O.deleteDeviceFromStore)(n)),E(Object(R.deleteUnifiDeviceFromStore)(n)),E(Object(j.f)()),p||setTimeout(()=>{E(Object(na.c)({duration:0,type:ra.a.warning,title:a.formatMessage({id:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_TITLE"}),message:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_BODY",icon:r.a.createElement(ao,{deviceType:at.DeviceType.AP,deviceModel:at.DeviceModel.ULTE,publicImagePath:_,filesMap:"SETUP"}),showStatusBall:!0,primaryButton:{label:a.formatMessage({id:"ON_LOAD_WARNING_PAYMENT_ACTION_CANCEL_SUBSCRIPTIONS"}),onClick:()=>window.open(`https://${u}/subscriptions`,"_blank")},className:no},"LTE_SUBSCRIPTION_NEEDS_ATTENTION"))},10),E(Object(Ut.e)())}catch(e){m(!1)}},[n,p]),v=Object(c.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),m(!0);const t={name:l&&l!==n?l:a.formatMessage({id:"DEVICE_TYPE_ULTE"})};p?C():E(Object(ec.a)({title:"DEVICE_ULTE_REMOVE_HEADER",titleValues:t,message:"DEVICE_ULTE_REMOVE_DETAILS",messageValues:t,confirmButtonProps:{text:r.a.createElement(M.c,{id:"DEVICE_ACTIONS_REMOVE"}),variant:"primary"},children:r.a.createElement(to,null,r.a.createElement(M.c,{id:"DEVICE_ULTE_REMOVE_INFO"})),onConfirm:C,onCancel:()=>{E(Object(Ut.e)()),m(!1)}}))},[n,l,p]);return g&&i?r.a.createElement(eo,{variant:"link",onClick:v,loader:s?"spinner":null},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_REMOVE_LABEL"})):null});const ro=Object(l.c)(de.a)`
  padding: 0;
`;var lo=Object(n.o)(({device:e,history:t,location:a})=>{const n=Object(o.useDispatch)(),[l,i]=Object(c.useState)(!1),E=Object(c.useCallback)(c=>{c.preventDefault(),c.stopPropagation(),n(Object(O.confirmDeviceForget)({name:Object(Y.d)(e),onConfirm:async()=>{i(!0);try{await n(Object(qi.c)(e.mac)),n(Object(R.deleteUnifiDeviceFromStore)(e.mac)),n(Object(O.deleteDeviceFromStore)(e.mac)),i(!1),n(Object(j.f)()),t.push(a.pathname.split("/properties")[0])}catch(c){i(!1)}},onCancel:()=>{n(Object(Ut.e)()),i(!1)}}))},[e.mac,e.name,n,t,a.pathname]);return r.a.createElement(ro,{variant:"link",onClick:E,loader:l?"spinner":null},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"}))});const io=Object(l.c)(de.a)`
  padding: 0;
`;var oo=({device:e})=>{const t=Object(o.useDispatch)();return r.a.createElement(io,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(O.downloadDeviceInfo)(e))}},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO"}))};const Eo=Object(l.c)(de.a)`
  padding: 0;
`;var so=({device:e})=>{const t=Object(o.useDispatch)(),[a,n]=Object(c.useState)(!1);return r.a.createElement(Eo,{variant:"link",onClick:async()=>{n(!0),await t(Object(O.openDeviceDebugTerminal)({device:e})),n(!1)},disabled:a},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DEBUG"}))};const mo=Object(l.c)(de.a)`
  padding: 0;
`;var _o=({device:e})=>{const t=Object(o.useDispatch)(),a=Object(c.useMemo)(()=>Object(O.getDeviceState)(e),[e]),[n,l]=Object(c.useState)(!1);return r.a.createElement(mo,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(O.confirmDeviceUpgrade)({titleValues:{deviceName:e.name},messageValues:{deviceName:e.name,fromVersion:e.version,toVersion:e.upgrade_to_firmware},onConfirm:()=>{l(!0),t(Object(O.upgradeDevice)(e,!0)),l(!0)},onCancel:()=>{t(Object(Ut.e)()),l(!1)},isDowngrade:!0}))},disabled:n||a!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DEVICE"}))},uo=a(2018);const bo=Object(l.c)(de.a)`
  padding: 0;
`;function po({device:e}){const{isUbbAlignmentToolModalClosed:t}=Object(o.useSelector)(Gl.P),{is_aligning:a}=e,n=Object(o.useDispatch)(),c=Object(O.getDeviceState)(e),l=Object(uo.a)(_e.a.feStaticAssets+"/videos");return r.a.createElement(bo,{variant:"link",onClick:c=>{c.preventDefault(),c.stopPropagation(),a||t||!l||n(Object(Ut.g)({modalType:kt.a.UBB_ALIGNMENT_TOOL,modalProps:{closeModal:()=>{n(Object(Gl.k)({isUbbAlignmentToolModalClosed:!0})),n(Object(Ut.e)())}}})),n(Object(O.alignDevice)(e))},disabled:c!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:a?"DEVICE_ACTIONS_ALIGNMENT_DISABLE":"DEVICE_ACTIONS_ALIGNMENT_ENABLE"}))}var Oo=a(82);const Io=Object(l.c)(F.a)`
  background-color: ${({theme:e})=>e.colors.whiteoutBackground};
  bottom: 0;
  left: 0;
  top: 0;
  opacity: 0.96;
  padding: 0 24px;
  position: absolute;
  right: 0;
  z-index: 1;
`,go=Object(l.c)(w.Vb)`
  width: 50px;
  height: 50px;
  margin-right: 20px;

  path {
    fill: ${Oo.j};
  }
`;var Co=()=>r.a.createElement(Io,null,r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(go,null),r.a.createElement(M.c,{id:"DEVICE_STATE_UPGRADING_INFO_WARNING"})));const Ro=Object(l.c)("div")`
  position: relative;
`,vo=Object(l.c)(V.a,{shouldForwardProp:e=>"removeTopMargin"!==e})`
  margin: ${({removeTopMargin:e})=>(e?"0":"17px")+" 0 20px 0;"};
  display: block;
`,To=Object(l.c)(de.a)`
  padding: 0;
`,ho=Qa.a.object().shape({url:Qa.a.string().label("COMMON_LABEL_LOCATION_URL").url(r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_URL"})).required()});var Po=Object(Tt.compose)(Object(o.connect)(e=>({mgmtSettings:Object(Ei.selectMgmtSettings)(e)}),{confirmDeviceCustomUpgrade:O.confirmDeviceCustomUpgrade,upgradeExternalDevice:O.upgradeExternalDevice,hideModal:Ut.e}),Object(Ja.g)({validationSchema:ho,handleSubmit:({url:e},{props:{confirmDeviceCustomUpgrade:t,upgradeExternalDevice:a,device:n,hideModal:c}})=>{t({onConfirm:()=>{a(n,e)},onCancel:()=>{c()}})}}))(({handleSubmit:e,whiteOutActive:t,mgmtSettings:{auto_upgrade:a},removeTopMargin:n=!1})=>r.a.createElement(Ro,null,t&&r.a.createElement(Co,null),r.a.createElement(vo,{color:"secondary",size:"body",removeTopMargin:n},r.a.createElement(M.c,{id:a?"DEVICE_ACTIONS_CUSTOM_UPGRADE_NOT_AVAILABLE":"DEVICE_ACTIONS_CUSTOM_UPGRADE_INFO"})),r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(tn.a,{full:!0,name:"url",label:"COMMON_LABEL_LOCATION_URL",placeholder:"DEVICE_ACTIONS_CUSTOM_UPGRADE_PLACEHOLDER",disabled:a,type:"input"}),r.a.createElement(F.a,{marginTop:10,justifyContent:"flex-start"},r.a.createElement(To,{name:"customUpgrade",variant:"link",type:"submit",onClick:e,disabled:!!a},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE"})))))),Do=a(1133);const fo=Object(l.c)(de.a)`
  padding: 0;
`;var yo=({device:e,sourceDevice:t})=>{const a=Object(o.useDispatch)(),[n,l]=Object(c.useState)(!1);return r.a.createElement(fo,{variant:"link",onClick:n=>{n.preventDefault(),n.stopPropagation(),a(Object(O.confirmDeviceCloneConfig)({name:e.name||e.mac,sourceName:t.name||t.mac,onConfirm:async()=>{l(!0),await a(Object(O.cloneConfig)(e,t)),l(!1)},onCancel:()=>{l(!1),a(Object(Ut.e)())}}))},disabled:n||!t.mac},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION"}))};const So=l.a`
  min-height: 40px;
`,Ao=l.a`
  li {
    div {
      display: block !important;
    }
  }
`,No=Object(l.c)(w.W)`
  color: ${Oo.m};
  margin: 4px 0 0 0;
`;var jo=Object(M.f)(({intl:e,device:t})=>{const a=Object(o.useSelector)(O.selectDevicesData),[n,l]=Object(c.useState)(""),i=a.find(e=>e.mac===n)||{mac:null,name:null},E=a.reduce((e,a)=>(a.adopted&&a.state!==O.DEVICE_STATE_IDS.ADOPTING&&a.mac!==t.mac&&a.model===t.model&&e.push({label:a.name||a.mac,value:a.mac}),e),[]);return E.length||E.push({image:No,label:r.a.createElement(M.c,{id:"COMMON_DEVICES_NOT_FOUND"}),value:"notFound",disabled:!0}),r.a.createElement("div",null,r.a.createElement(Do.a,{searchable:!0,placeholder:e.formatMessage({id:"DEVICE_ACTIONS_COPY_CONFIGURATION_PLACEHOLDER"}),value:n,onChange:e=>{l(e.value)},options:E,width:"100%",className:So,optionContainerClassName:Ao}),r.a.createElement(F.a,{justifyContent:"flex-start"},r.a.createElement(yo,{device:t,sourceDevice:i})))});const Lo=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,xo=Object(l.c)(F.a)`
  ${({theme:e})=>`\n    border-bottom: 1px solid ${e.motifPalette.ui04};\n    margin-bottom: ${e.spacing["spacing-xl"]};\n    padding-bottom: ${e.spacing["spacing-xl"]};\n  `};
`,Vo=Object(l.c)(F.a)`
  ${({noMargin:e=!1,theme:t})=>!e&&"margin-top: "+t.spacing["spacing-m"]};
`;var wo=({activeItem:e,disableLocate:t,disableRestart:a,disableDebug:n,disableForget:l})=>{const i=Object(o.useSelector)(t=>Object(O.selectDeviceData)(t,e.mac)),E=Object(o.useSelector)(Object(O.selectIsUcoreDevice)(e)),s=Object(O.getRawDeviceState)(i)===at.DeviceState.UPGRADING,m=Object(O.isUlte)(i),d=Object(O.isLteWithSubscription)(i),_=(Object(O.isUap6mp)(i),Object(c.useMemo)(()=>Object(O.isDeviceDowngradable)(i),[null==i?void 0:i.version,null==i?void 0:i.upgrade_to_firmware]));return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE_DESCRIPTION"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(Gi,{device:i}))),i.type===at.DeviceType.UBB&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_ALIGNMENT"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_ALIGNMENT_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(po,{device:i}))),!a&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_RESTART"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_RESTART_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement($i,{device:i}))),(i.type===at.DeviceType.AP||i.type===at.DeviceType.SWITCH)&&!m&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),r.a.createElement(jo,{device:i})),!E&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),r.a.createElement(Vo,{noMargin:!0,alignSelf:"flex-end"},r.a.createElement(Po,{whiteOutActive:s,device:i,removeTopMargin:!0}))),_&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNGRADE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DESCRIPTION"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(_o,{device:i}))),r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PROVISION_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PROVISION_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(Xi,{device:i}))),r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(oo,{device:i}))),!n&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DEBUG_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DEBUG_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(so,{device:i}))),!l&&r.a.createElement(xo,{flexDirection:"column"},r.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_FORGET_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},d?r.a.createElement(co,{device:i}):r.a.createElement(lo,{device:i}))))};const Mo=Object(l.c)("div",{shouldForwardProp:e=>"portsTable"!==e})`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-gap: 0 15px;
  ${({theme:e,portsTable:t})=>t?`\n  border-bottom: 1px solid ${e.motifPalette.ui04};\n  padding-bottom: 15px;\n  margin: 15px 0 20px;\n  `:`\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid ${e.motifPalette.ui04};\n  `}
`,Fo=Object(l.c)(V.a)`
  padding-bottom: 6px;
  padding-top: 6px;
  color: ${({theme:e})=>e.motifPalette.text02};
  display: flex;
  align-items: center;
  white-space: nowrap;

  > span {
    margin-left: 4px;
  }
`,Uo=Object(l.c)(ua.a,{shouldForwardProp:e=>!["background","color"].includes(e)})`
  background-color: ${e=>"transparent"!==e.background?e.theme.motifPalette[e.background]:e.background};
  border-radius: 2px;
  border: ${({color:e,theme:t})=>e&&"1px solid "+t.motifPalette[e]};
`;function ko({stp_version:e}){switch(e){case"rstp":return r.a.createElement(Fo,{size:"label"},r.a.createElement(w.v,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_RSTP_DISCARDING"}));case"stp":return r.a.createElement(Fo,{size:"label"},r.a.createElement(w.v,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_STP_BLOCKING"}));case"disabled":return r.a.createElement(Fo,{size:"label"},r.a.createElement(w.v,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISABLED"}));default:return""}}function zo({deviceData:e,portsTable:t=!1}){const{model:a,port_table:n,stp_version:l}=e;return Object(c.useMemo)(()=>{const a=Object(O.getPortSpeeds)(e),{isPoePlusPlusSupported:n,isPoePlusSupported:c,isPoeAutoSupported:i,isPoePassthroughSupported:o,isPoePassive24Supported:E}=Object(O.getDevicePoeAvailability)(e),s=Object(O.getIsInWallAp)(e),m=e=>O.SWITCH_PORT_SPEED_COLORS[e]||"transparent",d=Object(O.getCanBePoweredByPoe)(e),_=Object(O.isUdmBase)(e)||Object(O.isUdr)(e);return r.a.createElement(Mo,{portsTable:t},a.sort((e,t)=>t-e).map(e=>r.a.createElement(Fo,{size:"label",key:e},r.a.createElement(Uo,{background:m(e)}),r.a.createElement(M.c,{id:Object(O.hasGbpsSpeedsOnly)([e])?"DEVICE_PORT_STATE_GBE":"DEVICE_PORT_STATE_MBE",values:{speed:Object(O.getPortLedSpeedsParsed)(e)}}))),r.a.createElement(Fo,{size:"label"},r.a.createElement(Uo,{background:O.SWITCH_PORT_SPEED_COLORS.DEFAULT}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})),r.a.createElement(Fo,{size:"label"},r.a.createElement(Uo,{background:"transparent",color:O.SWITCH_PORT_SPEED_COLORS.DEFAULT}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISABLED"})),Object(O.hasSwitch)(e)&&r.a.createElement(Fo,{size:"label"},r.a.createElement(w.K,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_MIRROR"})),(s||Object(sc.isPoeSupported)(e)||d)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Fo,{size:"label"},r.a.createElement(w.Bb,{size:"medium"}),n&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE_PLUS_PLUS"}),(c||d)&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE_PLUS"}),(i&&!c||o)&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE"}),E&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE_PASSIVE"}))),!_&&r.a.createElement(ko,{stp_version:l}))},[n,a,l])}var Bo=a(2857);const Wo=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,Ho=({spacing:e})=>l.a`
  &:not(:first-child) {
    margin-top: ${e};
  }
`;function Go({deviceData:e,portSizeOverride:t,...a}){const{port_table:n}=e,{diagram:c}=Object(uc.E)(e),l=c?Object(uc.c)(c,e):Object(uc.f)(e);if(!l||0===l.length)return r.a.createElement(Wo,null,r.a.createElement(w.W,{isActive:!0,className:"mr-2"}),r.a.createElement(M.c,{id:"DEVICE_DIAGRAM_MISSING"}));const i=Object(Bo.a)(l.map(e=>e.length)),o=Object.values(gc).find(e=>i<=e.threshold);return l.map((c,l)=>r.a.createElement(F.a,{"align-items":"flex-end",key:"PortLayoutRow-"+(l+1),className:Ho(o),flex:"1 1 "+(t||o.size)},c.map((c,i)=>{const E=`Port-${l+1}-${i+1}`,s=c&&n&&Object(uc.t)(c.portNumber,e);return r.a.createElement(Nc,Object.assign({cellData:s,deviceData:e,key:E},a,{portSize:o,portSizeOverride:t}))})))}const Yo=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`,$o=Object(l.c)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`,Ko=Object(l.c)("div")`
  padding: 32px 32px 16px 32px;
`,Xo=Object(l.c)(F.a)`
  &:not(:last-child) {
    padding: 8px 0;
  }
`,qo=Object(l.c)(w.s)`
  color: ${({theme:e})=>e.motifPalette.success};
  margin-right: 9px;
  width: 17px;
  height: 17px;
`,Zo=Object(l.c)(w.a)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: 9px;
  width: 18px;
  height: 18px;
`,Jo=Object(l.c)(de.a)`
  margin-left: 2px;
`;function Qo({deviceData:e,hideAnomalies:t,...a}){const l=Object(n.k)(),{portAnomalies:i,totalAnomalies:o}=Object(dc.b)(e.port_table,O.switchAnomaliesMap),E=1===o,s=Object(c.useCallback)(e=>l.push("ports/"+e.toString()),[l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Yo,null,r.a.createElement($o,null,r.a.createElement(Go,Object.assign({deviceData:e},a))),r.a.createElement(zo,{deviceData:e})),!t&&!!o&&r.a.createElement(Ko,null,E?r.a.createElement(r.a.Fragment,null,r.a.createElement(Xo,{alignItems:"center"},r.a.createElement(Zo,null),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:i[0].anomalies[0]+"_PROBLEM"}),r.a.createElement(Jo,{variant:"inline",onClick:()=>s(i[0].portNumber)},r.a.createElement(M.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:i[0].portNumber}})))),r.a.createElement(Xo,{alignItems:"center"},r.a.createElement(qo,null),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:i[0].anomalies[0]+"_SOLUTION"})))):r.a.createElement(Xo,{alignItems:"center"},r.a.createElement(Zo,null),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MULTIPLE_ANOMALIES",values:{count:o}}),i.map((e,t)=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Jo,{variant:"inline",onClick:()=>s(e.portNumber)},r.a.createElement(M.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:e.portNumber}})),t===i.length-1?".":","))))))}const eE=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  margin-top: 16px;
  justify-content: flex-end;
  svg {
    height: 14px;
    width: 13px;
  }
`,tE=Object(l.c)(w.g)`
  margin-right: 8px;
  color: inherit;
`,aE=Object(l.c)("div")`
  margin-bottom: 32px;
`,nE=e=>[{id:"portName",minWidth:80,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({portName:e})=>r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},e)},{id:"portStatus",minWidth:120,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:({portStatus:t})=>r.a.createElement(fe.g,{justifyContent:"space-between",width:"100%",alignItems:"center"},r.a.createElement(V.a,{color:"secondary",size:"body",truncate:!0},t),!e&&r.a.createElement(tE,{size:"small"}))}];var cE=function({deviceData:e,...t}){const a=Object(n.k)(),l=Object(O.isUdmPro)(e)||Object(O.isUdmProSe)(e),i=Object(O.isUdm)(e),E=Object(o.useSelector)(un.selectNetworkGroups),{path:s}=Object(n.n)(),{site:m,page:d,id:_,panel:u}=Object(n.m)(),b=e=>Object(n.i)(s,{site:m,page:d,id:_,panel:u,subPanel:"ports",subPanelId:e}),p=Object(c.useCallback)(({port_idx:e,masked:t})=>!t&&a.push(b(null==e?void 0:e.toString())),[a]),I=Object(c.useMemo)(()=>nE(),[]),g=Object(c.useMemo)(()=>Lc(e,E,t),[e,E,t]);if(i){const n=((e,t,a)=>Lc(e,t,a).filter(e=>!e.isWanPort))(e,E,t),c=((e,t,a)=>Lc(e,t,a).filter(e=>e.isWanPort))(e,E,t),i=nE(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_LAN_PORTS"})),r.a.createElement(Pe.a,{hideCellOverflow:!1,columns:I,rowHeight:35,disableColumnFilters:!0,items:n,onRowClick:p}),r.a.createElement(aE,null),r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_WAN_PORTS"})),r.a.createElement(Pe.a,{hideCellOverflow:!1,columns:i,rowHeight:35,disableColumnFilters:!0,disableTextPointer:l,disableSelection:l,items:c,onRowClick:l?null:()=>a.push(b(oe.WAN))}),l&&r.a.createElement(eE,{variant:"link",onClick:()=>a.push(b(oe.WAN)),Icon:r.a.createElement(w.ub,{isActive:!0})},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"})))}return r.a.createElement(Pe.a,{hideCellOverflow:!1,columns:I,rowHeight:35,disableColumnFilters:!0,items:g,onRowClick:p})};function rE({activeItem:e,hideDiagramKeys:t,...a}){const[n]=Object(c.useState)("DevicePorts-"+Date.now()),l=Object(o.useDispatch)();return Object(c.useEffect)(()=>{const e={style:al.a.overflow,styleName:"overflow",dependant:n};return l(Object(tl.c)(e)),()=>l(Object(tl.b)(e))},[]),r.a.createElement(cE,Object.assign({deviceData:e},a))}const lE=Object(l.c)(F.a)`
  padding: 0 32px;
`;var iE=Object(Tt.compose)(Za(["general","lcmScreen","screen","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),{_id:u,mac:b}=e,p=Object(o.useDispatch)(),I=Object(Yn.i)(e),g=I?"lcmScreen":"screen";return r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(lE,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:g,label:I?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}):r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_LED"}),renderContent:()=>I?r.a.createElement(Ci,{activeItem:e,setFormDirty:t,setFormInvalid:a}):r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Ni,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;p(Object(O.updateDeviceWithIdEndpoint)(a,u,b,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});const oE=Object(l.c)("div")`
  margin-bottom: 32px;
  th {
    padding-right: 0;

    &:first-child {
      margin-left: 0px;
    }
  }
`,EE=Object(l.c)("div")`
  margin-top: 12px;
`,sE=[{id:"name",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_NETWORK"})),minWidth:85,renderCell:({name:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"ip",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_IP"})),minWidth:60,renderCell:({ip:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"tx_bytesInfo",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_SENT"})),renderCell:e=>r.a.createElement(me.a,{size:"body",type:"bytes",input:e.tx_bytes}),maxWidth:60},{id:"rx_bytesInfo",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_RECEIVED"})),renderCell:e=>r.a.createElement(me.a,{size:"body",type:"bytes",input:e.rx_bytes}),minWidth:85},{id:"num_sta",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_CLIENTS"})),minWidth:60,renderCell:({num_sta:e})=>r.a.createElement(V.a,{size:"body"},e)}];var mE=({activeItem:e})=>{const{network_table:t}=e;return r.a.createElement(oE,null,r.a.createElement(Pe.a,{items:t,disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,idField:"_id",columns:sE,renderFooter:()=>t.length>0?r.a.createElement(EE,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:t.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"})}))};var dE=({activeItem:{displayable_version:e},flexProps:t})=>e?r.a.createElement(Zt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VERSION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;const _E=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`;function uE({activeItem:{mac:e,model:t,uptime:a},activeItem:n}){const c=Object(_c.c)("LAN",n),l=Object(_c.i)(n);return r.a.createElement(_E,null,r.a.createElement(dE,{activeItem:n}),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},c)),a>0&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),r.a.createElement(V.a,{size:"body"},Object(Xt.c)(a,!0))),l.boardPhy&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_GATEWAY_BOARD_PHY"})),r.a.createElement(V.a,{size:"body"},l.boardPhy)),l.boardCpu&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_GATEWAY_BOARD_CPU"})),r.a.createElement(V.a,{size:"body"},l.boardCpu)),l.cpu&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_CPU"})),r.a.createElement(V.a,{size:"body"},l.cpu)),l.phy&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_PHY"})),r.a.createElement(V.a,{size:"body"},l.phy)))}var bE=a(542);const pE=({networkgroup:e,uplinkAttrs:t})=>{var a,n,c,l,i,E,s;const m=null===(a=Object(o.useSelector)(g.selectIspInfoItems))||void 0===a?void 0:a.find(t=>t.networkgroup===e),{ip:d,speed:_,rx_packets:u,rx_bytes:b,tx_packets:p,tx_bytes:O,"rx_bytes-r":I,"tx_bytes-r":C}=t;return r.a.createElement(fe.g,{height:"100%",flexDirection:"column"},d?r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},d)):null,r.a.createElement(il,{portSpeed:_}),(null===(c=null===(n=null==m?void 0:m.details)||void 0===n?void 0:n.service_provider)||void 0===c?void 0:c.name)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_WAN_ISP"})),r.a.createElement(V.a,{size:"body"},m.details.service_provider.name)),((null===(l=null==m?void 0:m.configuration)||void 0===l?void 0:l.wan_dns1)||(null===(i=null==m?void 0:m.configuration)||void 0===i?void 0:i.wan_dns2))&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(E=null==m?void 0:m.configuration)||void 0===E?void 0:E.wan_dns1)),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(s=null==m?void 0:m.configuration)||void 0===s?void 0:s.wan_dns2))),u&&b?r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},Object(pa.a)(u,{spacer:" "})," / ",Object(Kt.c)(b,"bytes","IEC"))):null,p&&O?r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},Object(pa.a)(p,{spacer:" "})," / ",Object(Kt.c)(O,"bytes","IEC"))):null,r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},void 0!==I?r.a.createElement(me.a,{type:"bytes",input:I,options:"bitrate",size:"body"}):"-")),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},void 0!==C?r.a.createElement(me.a,{type:"bytes",input:C,options:"bitrate",size:"body"}):"-")))};var OE=e=>Object.values(bE.a).reduce((t,a)=>{const n=e.port_table&&e.port_table.filter(e=>e.up),c="wan1"===a?"WAN":"WAN2",l="wan1"===a?"WAN":"WAN 2",i=Object(_c.f)(c,e)||"",o=n&&n.find(e=>e.ifname===i),E=Object(uc.ic)(e,a);return o&&E&&t.push({id:a,label:r.a.createElement("span",null,l),renderContent:()=>r.a.createElement(pE,{networkgroup:c,uplinkAttrs:E,activeItem:e})}),t},[]);const IE=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;function gE({activeItem:e,...t}){const[a]=Object(c.useState)("SwitchPorts-"+Date.now()),n=Object(o.useDispatch)(),l={style:al.a.overflow,styleName:"overflow",dependant:a};Object(c.useEffect)(()=>(n(Object(tl.c)(l)),()=>n(Object(tl.b)(l))),[]);const i=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),E=Object(O.isUxg)(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{activeItem:e}),r.a.createElement(IE,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(uE,{activeItem:e})},...OE(e),...E?[{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}]:[],{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(mE,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})))}var CE=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac,De.OBJECT.GW))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const RE=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,vE=Object(l.c)("div")`
  margin-bottom: 16px;
`;var TE=({activeItem:e})=>r.a.createElement(RE,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),r.a.createElement(vE,null),r.a.createElement(CE,{activeItem:e})),hE=a(2858);var PE=({device:e,isOwner:t,...a})=>{const n=Object(o.useSelector)(Zi.selectEnv),c=Object(dt.a)(e,"unifi_care.state");let l,i;if(c===at.DeviceUnifiCareState.REPLACING?(l=Object(dt.a)(e,"unifi_care.tracking_url"),i=t?"DEVICE_ACTIONS_UNIFI_CARE_TRACK":"DEVICE_ACTIONS_UNIFI_CARE_SHIPPED"):c===at.DeviceUnifiCareState.RMA_IN_PROGRESS?(l=Object(dt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_RMA"):t&&(l=Object(dt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_REPLACE"),!t)return i?r.a.createElement(M.c,{id:i}):null;return r.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(l||"https://"+Object(Qi.b)(n),"_blank")}},a),r.a.createElement(M.c,{id:i}))},DE=a(1998);var fE=({device:e,...t})=>{const a=Object(o.useDispatch)(),n=Object(o.useSelector)(Zi.selectEnv),c=Object(o.useSelector)(DE.selectUnifiCareDetails);return Object(L.f)(()=>Promise.resolve(a(Object(DE.fetchUnifiCareDetails)())).catch(()=>{}),r.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(Object(dt.a)(c,"links.covered_devices_url")||"https://"+Object(Qi.b)(n))}},t),r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_VIEW"})))};var yE=({device:e,...t})=>{const a=Object(o.useSelector)(Zi.selectEnv);return r.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const n=Object(dt.a)(e,"unifi_care.activation_url");window.open(n||"https://"+Object(Qi.b)(a))}},t),r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVATE"}))},SE=a(801),AE=a(797);const NE=Object(l.c)("div")`
  margin-top: 8px;
`,jE=Object(l.c)("div")`
  &:not(:empty) {
    padding-bottom: 12px;
  }
`,LE=Object(l.c)(F.a)`
  margin-left: 18px;
`,xE=Object(l.c)(F.a)`
  margin-top: 16px;
  margin-left: -8px;
`,VE=Object(l.c)(F.a)`
  margin-top: 10px;
  margin-left: -8px;
`,wE=Object(l.c)(SE.a)`
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,ME=Object(l.c)(PE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  padding: 0 8px;
`,FE=Object(l.c)(fE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  padding: 0 8px;
`,UE=Object(l.c)(yE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: bold;
  padding: 0 8px;
`,kE=Object(l.c)(hE.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: bold;
  padding: 0 8px;
  line-height: 1.15;
`,zE=Object(l.c)(F.a)`
  padding: 17px;
  border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-radius: 8px;
  margin: 16px 32px 24px 32px;
`,BE=Object(l.c)(z.a)`
  margin-right: 17px;
`,WE=Object(l.c)(F.a)`
  margin-bottom: 15px;
`;var HE=({device:e,hideWarning:t})=>{const a=Object(o.useDispatch)(),n=Object(AE.c)(e),l=!n&&Object(AE.d)(e),i=Object(AE.a)(e),E=null==i?void 0:i.getTime(),s=l&&i||n&&Object(AE.b)(e),[m,d]=Object(c.useState)(E-(new Date).getTime()),_=Object(o.useSelector)(Gl.F);return Object(c.useEffect)(()=>{let e;return m&&(e=setInterval(()=>{d(E-(new Date).getTime())},200)),()=>e&&clearInterval(e)},[E]),Object(L.f)(()=>Promise.resolve(a(Object(DE.fetchUnifiCareDetails)())).catch(()=>{}),r.a.createElement(NE,null,n&&!t&&r.a.createElement(jE,null,r.a.createElement(Ml,{activeItem:e,standalone:!0}),r.a.createElement(Vl,{activeItem:e,standalone:!0})),l&&m>0&&r.a.createElement(zE,{flexDirection:"column"},r.a.createElement(WE,{flexDirection:"row"},r.a.createElement("div",null,r.a.createElement(BE,{width:44,height:48})),r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_OFFER_ENDS",values:{eligibleExpirationTime:Object(Nn.a)(Math.floor(m/1e3)).join(" ")}})))),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE_INFO"})),r.a.createElement(VE,{flexDirection:"row",alignItems:"center"},_&&r.a.createElement(UE,{device:e}),r.a.createElement(kE,{href:_e.a.unifiCare,target:"_blank"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_LEARN_MORE"})))),n&&r.a.createElement(F.a,{flexDirection:"row",alignItems:"flex-start"},r.a.createElement("div",null,r.a.createElement(z.a,{width:54,height:54})),r.a.createElement(LE,{flexDirection:"column"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVE_INFO"})),r.a.createElement(xE,{flexDirection:"row",alignItems:"center"},r.a.createElement(FE,{device:e}),r.a.createElement(ME,{isOwner:_,device:e})),s&&r.a.createElement(wE,{expires:s})))))};const GE=Object(l.c)("div")`
  position: relative;
  margin: 0 0 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }
`,YE=Object(l.c)(V.a)`
  margin: 17px 0 20px 0;
  display: block;
`,$E=({actionName:e,Button:t,title:a,whiteOutActive:n})=>r.a.createElement(GE,null,n&&r.a.createElement(Co,null),r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_"+a})),r.a.createElement(YE,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:`DEVICE_ACTIONS_${e}_INFO`})),r.a.createElement(F.a,{justifyContent:"flex-end"},t));var KE=({activeItem:e})=>{const t=Object(o.useSelector)(t=>Object(O.selectDeviceData)(t,e.mac)),a=Object(O.getRawDeviceState)(t),n=Object(O.isUlte)(t),c=a===O.DeviceState.UPGRADING;return r.a.createElement(r.a.Fragment,null,(Object(O.hasActiveUnifiCare)(t)||Object(O.isUnifiCareEligible)(t))&&r.a.createElement(GE,null,r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),r.a.createElement(HE,{device:t})),r.a.createElement($E,{actionName:"LOCATE",title:"LOCATE",Button:r.a.createElement(Gi,{device:t})}),t.type===at.DeviceType.UBB&&r.a.createElement($E,{title:"ALIGNMENT",actionName:"ALIGNMENT",Button:r.a.createElement(po,{device:t})}),r.a.createElement($E,{actionName:"RESTART",title:"RESTART",Button:r.a.createElement($i,{device:t})}),r.a.createElement(GE,null,r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),r.a.createElement(Po,{device:t,whiteOutActive:c})),r.a.createElement($E,{title:"PROVISION_LABEL",actionName:"PROVISION",Button:r.a.createElement(Xi,{device:t}),whiteOutActive:c}),n?r.a.createElement($E,{title:"REMOVE",actionName:"REMOVE",Button:r.a.createElement(co,{device:t})}):r.a.createElement($E,{title:"FORGET",actionName:"FORGET",Button:r.a.createElement(lo,{device:t})}),(t.type===at.DeviceType.AP||t.type===at.DeviceType.SWITCH)&&r.a.createElement(GE,null,r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),r.a.createElement(jo,{device:t})),(t.type===at.DeviceType.AP||t.type===at.DeviceType.SWITCH||t.type===at.DeviceType.UBB)&&r.a.createElement(r.a.Fragment,null,r.a.createElement($E,{title:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL",actionName:"DOWNLOAD_DEVICE_INFO",Button:r.a.createElement(oo,{device:t})}),r.a.createElement($E,{title:"DEBUG",actionName:"DEBUG",Button:r.a.createElement(so,{device:t})})))},XE=a(243),qE=a(743),ZE=a(1732),JE=a(2022),QE=a(214);const es=Object(l.c)("div")`
  width: 100%;
  margin-top: ${e=>e.marginTop||0}px;
  margin-bottom: ${e=>e.marginBottom||0}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ts=Object(l.c)(XE.a)`
  color: ${({theme:e})=>e.motifPalette.text02};
  opacity: 0.4;
  margin-right: auto;
`,as=Object(l.c)(w.W)`
  margin-right: auto;
  margin-left: 5px;
  height: 14px;
  width: 14px;
`,ns=Object(l.c)(pn.a)`
  margin-left: 0 !important;
`,cs=l.a`
  flex-direction: column;
  align-items: flex-start;
`,rs=Object(l.c)("div")`
  display: flex;

  > label:not(:first-child) {
    margin-left: 18px;
  }
`;var ls=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({usgSettings:{key:e,mss_clamp_mss:t,mss_clamp:a,offload_accounting:n,echo_server:c,offload_sch:r,offload_l2_blocking:l,lldp_enable_all:i}})=>({key:e,mss_clamp:a||Ei.USG_DEFAULTS.mss_clamp,mss_clamp_mss:t||Ei.USG_DEFAULTS.mss_clamp_mss,offload_accounting:n||Ei.USG_DEFAULTS.offload_accounting,offload_sch:r,offload_l2_blocking:l,echo_server:c||Ei.USG_DEFAULTS.echo_server,lldp_enable_all:i}),validationSchema:Qa.a.object().shape({mss_clamp:Qa.a.string(),mss_clamp_mss:Qa.a.number().when("mss_clamp",{is:QE.q.CUSTOM,then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING").required().min(Ei.USG_DEFAULTS.min_mss_clamp_mss).max(Ei.USG_DEFAULTS.mss_clamp_mss)}),offload_accounting:Qa.a.boolean(),offload_sch:Qa.a.boolean(),offload_l2_blocking:Qa.a.boolean(),echo_server:Qa.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(Cn.f,r.a.createElement(M.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}})),lldp_enable_all:Qa.a.boolean()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(e=>{const{values:t,initialValues:a,setFieldValue:n,dirty:l,isValid:i,setFormDirty:E,setFormInvalid:s,resetForm:m,usgSettings:d,activeItem:_}=e,u=Object(o.useDispatch)(),b=Object(o.useSelector)(JE.a);Object(c.useEffect)(()=>{u(Object(j.j)({services:()=>{Object(oi.a)(a,t)||u(Object(Ei.saveSettings)({key:Ei.USG_DEFAULTS.key,...t},_._id,void 0,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"}})),m({values:t})}})),u(Object(j.i)({services:m}))},[a,t]),Object(c.useEffect)(()=>{E("services",l),s("services",!i)},[t,d,l,i]);const p=e=>{e.target.checked&&n("mss_clamp",e.target.name)},O=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?n("echo_server",""):n("echo_server",e.target.name))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),r.a.createElement(es,{marginBottom:16},r.a.createElement(rs,null,r.a.createElement(qE.a,{id:"mssClampingAuto",checked:t.mss_clamp===QE.q.AUTO,name:QE.q.AUTO,onChange:p},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"}))),r.a.createElement(qE.a,{id:"mssClampingCustom",checked:t.mss_clamp===QE.q.CUSTOM,name:QE.q.CUSTOM,onChange:p},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"}))),r.a.createElement(qE.a,{id:"mssClampingDisabled",checked:t.mss_clamp===QE.q.DISABLED,name:QE.q.DISABLED,onChange:p},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"}))))),t.mss_clamp===QE.q.CUSTOM&&r.a.createElement(es,{marginBottom:12,className:cs},r.a.createElement(ts,{htmlFor:"mss_clamp_mss"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING"}))),r.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",name:"mss_clamp_mss",id:"mss_clamp_mss"})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_HARDWARE_OFFLOAD"}))),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_OFFLOAD"})),r.a.createElement(ZE.a,{id:"offload_accounting",disabled:!b,onChange:()=>{n("offload_accounting",!t.offload_accounting)},checked:!!b&&t.offload_accounting})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_SCHEDULE"})),r.a.createElement(ZE.a,{id:"offload_sch",onChange:()=>{n("offload_sch",!t.offload_sch)},checked:t.offload_sch})),r.a.createElement(es,{marginBottom:28},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_OFFLOAD_L2_BLOCKING"})),r.a.createElement(ZE.a,{id:"offload_l2_blocking",onChange:()=>{n("offload_l2_blocking",!t.offload_l2_blocking)},checked:t.offload_l2_blocking})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LLDP"}))),r.a.createElement(es,{marginBottom:28},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_LLDP_ON_ALL_INTERFACES"})),r.a.createElement(ZE.a,{id:"lldp_enable_all",onChange:()=>{n("lldp_enable_all",!t.lldp_enable_all)},checked:t.lldp_enable_all})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),r.a.createElement(es,{marginBottom:0},r.a.createElement(rs,null,r.a.createElement(qE.a,{id:"echoServerDefault",checked:t.echo_server===Ei.USG_DEFAULTS.echo_server,name:Ei.USG_DEFAULTS.echo_server,onChange:O},r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"}))),r.a.createElement(qE.a,{id:"echoServerIpOrHostname",checked:t.echo_server!==Ei.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:O},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"}))),r.a.createElement(ns,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},r.a.createElement(as,{isActive:!0})))),t.echo_server!==Ei.USG_DEFAULTS.echo_server&&r.a.createElement(es,{marginBottom:0,marginTop:14,className:cs},r.a.createElement(ts,{htmlFor:"echo_server"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"}))),r.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"echo_server",id:"echo_server"})))});const is=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,os=Object(l.c)("div")`
  display: flex;

  > label:not(:first-child) {
    margin-left: 18px;
  }
`,Es=Object(l.c)(F.a)`
  margin-bottom: 16px;
  width: 100%;
`,ss=Object(Ja.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a,lcm_brightness_override:n,lcm_brightness:c,lcm_idle_timeout_override:r,lcm_idle_timeout:l,outdoor_mode_override:i,power_source_ctrl:o}={}})=>({led_override:e!==O.LedOverride.OFF,led_override_color:t||O.DEFAULT_LED_COLOR,led_override_color_brightness:a>=0?a:O.DEFAULT_LED_BRIGHTNESS,lcm_brightness_override:n||!1,lcm_brightness:c>=0?c:100,lcm_idle_timeout_override:r||!1,lcm_idle_timeout:l||0,outdoor_mode_override:i||"default",power_source_ctrl:o||"auto"}),validationSchema:Qa.a.object().shape({led_override:Qa.a.string(),led_override_color:Qa.a.string(),led_override_color_brightness:Qa.a.number(),lcm_brightness_override:Qa.a.boolean(),lcm_brightness:Qa.a.number(),lcm_idle_timeout_override:Qa.a.boolean(),lcm_idle_timeout:Qa.a.number(),outdoor_mode_override:Qa.a.string(),power_source_ctrl:Qa.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var ms=Object(Tt.compose)(M.f,ss)(({activeItem:e,setFormDirty:t,dirty:a,values:n,resetForm:l,setFieldValue:i,disableLedOverrideFields:E,intl:s})=>{var m;const d=Object(o.useDispatch)(),{led_override:_}=e,u=Object(o.useSelector)(Ei.selectMgmtSettings),b=Object(Yn.i)(e),p=Object(Yn.j)(e),I=(null!==(m=null==u?void 0:u.led_enabled)&&void 0!==m&&m&&_!==O.LedOverride.OFF||_===O.LedOverride.ON)&&p;Object(c.useEffect)(()=>(d(Object(j.h)({screen:()=>{if(!a)return{};const e={...n,led_override:n.led_override?O.LedOverride.ON:O.LedOverride.OFF,lcm_brightness_override:b&&n.lcm_brightness_override,lcm_idle_timeout_override:b&&n.lcm_idle_timeout_override};return e.lcm_brightness_override||delete e.lcm_brightness,e.lcm_idle_timeout_override||delete e.lcm_idle_timeout,b||(delete e.lcm_brightness_override,delete e.lcm_idle_timeout_override),e}})),d(Object(j.j)({screen:()=>l({values:n})})),d(Object(j.i)({screen:l})),()=>{d(Object(j.h)({screen:null})),d(Object(j.j)({screen:null})),d(Object(j.i)({screen:null}))}),[d,l,n,a,e.mac,b]),Object(c.useEffect)(()=>{t("screen",a)},[t,a]);const g=Object(c.useCallback)((e,t,a)=>{e.target.checked&&i(t,a?"override"===e.target.name:e.target.name)},[i]),C=Object(c.useCallback)(e=>g(e,"lcm_brightness_override",!0),[g]),R=Object(c.useCallback)(e=>g(e,"lcm_idle_timeout_override",!0),[g]);return r.a.createElement(r.a.Fragment,null,!E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Es,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"})),r.a.createElement(tn.a,{type:"checkbox",name:"led_override"}))),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"}))),r.a.createElement(is,{marginBottom:12},r.a.createElement(ii.a,{size:"large",value:+n.led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement("span",null,e,"%"),onChange:e=>i("led_override_color_brightness",e.target.value)})),r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),r.a.createElement(is,{marginBottom:12},r.a.createElement(Ui.a,{color:n.led_override_color,variant:"block",onChange:e=>{i("led_override_color","hex"in e?e.hex:void 0)},hexLabel:s.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:r.a.createElement(de.a,{variant:"inline",onClick:()=>{i("led_override_color",O.DEFAULT_LED_COLOR)}},r.a.createElement(M.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_BRIGHTNESS"}))),r.a.createElement(is,{marginBottom:16},r.a.createElement(os,null,r.a.createElement(qE.a,{id:"lcmBrigthnessDefault",checked:!n.lcm_brightness_override,name:"default",onChange:C},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"}))),r.a.createElement(qE.a,{id:"lcmBrigthnessOverride",checked:n.lcm_brightness_override,name:"override",onChange:C},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIONS_OVERRIDE"}))))),n.lcm_brightness_override&&r.a.createElement(r.a.Fragment,null,r.a.createElement(is,{marginBottom:12},r.a.createElement(ii.a,{size:"large",value:+n.lcm_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement("span",null,e,"%"),onChange:e=>i("lcm_brightness",e.target.value)}))),r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_IDLE_TIMEOUT"}))),r.a.createElement(is,{marginBottom:16},r.a.createElement(os,null,r.a.createElement(qE.a,{id:"lcmIdleTimeoutDefault",checked:!n.lcm_idle_timeout_override,name:"default",onChange:R},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"}))),r.a.createElement(qE.a,{id:"lcmIdleTimeoutOverride",checked:n.lcm_idle_timeout_override,name:"override",onChange:R},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIONS_OVERRIDE"})))))))}),ds=a(528);const _s=Object(l.c)("div")`
  table {
    tr {
      cursor: pointer;
    }
  }
`,us=Object(l.c)(w.g)`
  position: absolute;
  right: 8px;
  color: inherit;
`,bs=Object(l.c)("div")`
  margin-left: 10px;
`,ps=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px !important;
  margin-top: 16px;
  justify-content: flex-end;

  svg {
    height: 14px;
    width: 13px;
  }
`,Os=null,Is="COMMON_DISABLED",gs=[{id:"portName",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({portName:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"portStatus",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:({portStatus:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{size:"body"},e),r.a.createElement(us,{size:"small"}))}];var Cs=({activeItem:e})=>{const{ethernet_overrides:t,port_overrides:a}=e,l=Object(o.useSelector)(un.selectNetworkGroups),i=Object(n.k)(),{path:E}=Object(n.n)(),{site:s,page:m,id:d,panel:_}=Object(n.m)(),u=Object(O.getDeviceSpecs)(e),b=Object(c.useMemo)(()=>{const t=Object(dt.a)(e,"port_table",[]);if(t.length>0)return t;return Object.keys(u.ports).map(e=>({ifname:e,up:!1,enable:!1}))},[e,u.ports]),p=Object(c.useMemo)(()=>b.map(n=>{const{ifname:c}=n,i=n.port_idx,o=t.find(({ifname:e})=>e===c),E=o&&l.find(e=>e.id===o.networkgroup),{nameOverride:s}=Object(O.getCurrentPortData)(i-1,e),m=Object(_c.d)(e,c),d=a&&a.find(({port_idx:e})=>m.portIdx===e),_=Object.values(br.linkNegotiationOptions).find(({speed:e,full_duplex:t,autoneg:a})=>d&&d.speed&&!d.autoneg?d.speed===e&&d.full_duplex===t:a),u=s||r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:i,networkGroup:Object(O.getPortGroupLabel)(e,n,null==E?void 0:E.id)}}),b={...Object(ds.a)(n),networkGroup:E?E.id:Os,networkGroupLabel:E?E.label:Is,linkNegotiation:_.id,linkNegotiationLabel:_.label,linkNegotiationSpeed:_.speed,portName:u,portStatus:void 0,id:i||c,portIdx:i};return m.supportedValues&&0!==m.supportedValues.length||(b.linkNegotiationLabel="DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO"),b.portStatus=r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(Nc,{cellData:b,deviceData:e,style:{minWidth:20}}),r.a.createElement(bs,null,r.a.createElement(M.c,{id:b.networkGroup?b.linkNegotiationLabel:b.networkGroupLabel,values:{speed:Object(Kt.c)(1e6*b.linkNegotiationSpeed/8,"bitrate")}}))),b}),[b,e,t,l,a]),I=e=>Object(n.i)(E,{site:s,page:m,id:d,panel:_,subPanel:"ports",subPanelId:e}),g=Object(c.useCallback)(e=>(null==e?void 0:e.dns)?null:i.push(I(e.ifname)),[i]);return r.a.createElement(_s,null,r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Pe.a,{columns:gs,rowHeight:35,disableColumnFilters:!0,items:p,onRowClick:g,hideCellOverflow:!1}),r.a.createElement(ps,{variant:"link",onClick:()=>i.push(I(oe.ALL)),Icon:r.a.createElement(w.ub,{isActive:!0})},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))))};const Rs=Object(l.c)("div")`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 32px;
  flex: 1 1 85%;
`,vs=Object(l.c)("div")`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var Ts=Object(Tt.compose)(M.f,Za(["general","screen","services"]))(({activeItem:e,isDirty:t,isInvalid:a,setFormDirty:n,setFormInvalid:l,intl:i,...E})=>{const{_id:s,mac:m}=e,d=Object(o.useSelector)(Xa),_=Object(o.useSelector)(qa),u=Object(o.useSelector)(Ka),b=Object(o.useSelector)(Ei.selectUsgSettings),p=Object(o.useSelector)(Gl.s)&&!e.unsupported,I=Object(o.useDispatch)(),g=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement(Qo,{deviceData:e,hideAnomalies:!0}),r.a.createElement(Rs,null,p&&r.a.createElement(Ee.a,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(vs,null,r.a.createElement(li,{activeItem:e,setFormDirty:n,setFormInvalid:l}))},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(Cs,{activeItem:e})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(vs,null,r.a.createElement(ms,{activeItem:e,setFormDirty:n}))},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(vs,null,r.a.createElement(ls,{activeItem:e,usgSettings:b,setFormDirty:n,setFormInvalid:l}))},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(KE,{activeItem:e})}]})),r.a.createElement(fn,{isDirty:t,isInvalid:a,onFormSubmit:()=>{const e=Object.entries(u).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});(Object(mc.a)(e)?Promise.resolve():I(Object(O.updateDeviceWithIdEndpoint)(e,s,m,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0}))).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{var e,t,a;null===(e=_.general)||void 0===e||e.call(_),null===(t=_.screen)||void 0===t||t.call(_),null===(a=_.services)||void 0===a||a.call(_)}}))});const hs=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,Ps=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
`,Ds=Object(l.c)(F.a)`
  width: 100%;
  padding: 30px;
`,fs=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,ys=Object(l.c)(F.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`;const Ss=Object(Ja.g)({mapPropsToValues:({port:e})=>{const{nameOverride:t,enable:a}=e;return{name:t,enable:null==a||a}},validationSchema:Qa.a.object().shape({enable:Qa.a.boolean(),name:Qa.a.string()}),handleSubmit:(e,{props:{activeItem:{_id:t,port_overrides:a,mac:n},port:c,intl:r,history:l,updateDeviceWithIdEndpoint:i}})=>{const o=r.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"});i({port_overrides:[...(null==a?void 0:a.filter(({port_idx:e})=>e!==c.portIdx))||[],{port_idx:c.portIdx,...e}]},t,n,{successToast:{icon:ra.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:o}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{l.goBack()})}});var As=Object(Tt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({port:Object(O.getCurrentPortData)(+a.replace(/\D/g,""),t)}),{updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint}),M.f,Ss)((function({activeItem:e,port:t,history:a,submitForm:n,resetForm:l,dirty:i}){const E=Object(c.useCallback)(()=>{l(),a.goBack()},[l,a]),s=Object(o.useSelector)(un.selectNetworkGroups),m=Object(_c.h)(t.ifname,e,s),d=Object(O.getDeviceModelFeature)(e,"poe");return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ds,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(hs,{alignItems:"center"},r.a.createElement(w.f,{onClick:E,style:{cursor:"pointer"}}),r.a.createElement(Ps,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:t.portIdx,networkGroup:null==m?void 0:m.label}}))),r.a.createElement(ys,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),d&&r.a.createElement(ys,{marginBottom:24},r.a.createElement(F.a,{flexDirection:"column",flex:"1"},r.a.createElement(fs,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_POWER_LABEL"})),r.a.createElement(V.a,{color:"tertiary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_POWER_DESCRIPTION"}))),r.a.createElement(Jn.Field,{name:"enable",type:"checkbox"}))),r.a.createElement(fn,{isDirty:i,onFormSubmit:n,onFormCancel:E,allowCancel:!0}))}));const Ns=Object(l.c)(F.a)`
  table {
    th {
      padding-left: 0;
    }
    tr {
      :hover {
        cursor: pointer;
      }
    }
    td {
      padding-left: 0;
      padding-right: 25px;
    }
  }
`,js=Object(l.c)("div")`
  padding-top: 20px;
`,Ls=Object(l.c)("span")`
  padding-left: 6px;
`,xs=Object(l.c)(w.W)`
  margin-right: 10px;
`,Vs=Object(l.c)(w.g)`
  position: absolute;
  right: 0;
`,ws=Object(l.c)("div")`
  padding-top: 10px;
`,Ms=[{id:"hostnameInfo",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_CLIENT"})),renderCell:({hostname:e,client:t,mac:a,name:n})=>r.a.createElement(r.a.Fragment,null,t?r.a.createElement(k.a,{client:t}):null,r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement(Ls,null,n||e||a))),minWidth:90},{id:"date",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_DATE"})),renderCell:({date:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:90},{id:"start",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_TIME"})),renderCell:({start:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"experienceInfo",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE"})),renderCell:({experience:e})=>r.a.createElement(r.a.Fragment,null,e>=0?r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+Object(Fe.c)(e)]}},e,"%")):r.a.createElement(M.c,{id:"COMMON_NA"}),r.a.createElement(Vs,{size:"small"})),minWidth:90}];var Fs=({activeItem:e})=>{let t;"mac"in e&&({mac:t}=e);const{data:a,isLoading:l,error:i}=Object(o.useSelector)(Object(da.selectFormattedSessionData)(t,!0,[])),E=Object(n.k)(),s=Object(c.useCallback)(()=>r.a.createElement(ws,null,a.length>0&&r.a.createElement(M.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})),[a.length]);return Object(L.f)([Object(da.fetchSession)(t,!0)],r.a.createElement(Ns,{justifyContent:"flex-start",alignItems:"center"},!l&&a.length>0&&r.a.createElement(Pe.a,{items:a,disableColumnFilters:!0,columns:Ms,onRowClick:({id:e})=>E.push("overview/history/"+e),rowHeight:30,renderFooter:s}),(!l||i)&&0===a.length&&r.a.createElement(js,null,r.a.createElement(xs,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"}))))};var Us=({activeItem:e,flexProps:t})=>{const a=Object(Fe.d)(null==e?void 0:e.satisfaction),{na:n,ng:c,naNumSta:l,ngNumSta:i}=Object(O.getSatisfactionByRadio)(e);return a?r.a.createElement(Zt,{flexProps:{...t,flexDirection:"column",marginBottom:0}},r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_2G"})),i&&0!==c?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(c,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(c,100))]}}):r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_5G"})),l&&0!==n?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(n,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(n,100))]}}):r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"})))):null};var ks=({activeItem:{uptime:e}})=>e>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_UPTIME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Xt.a)(e))):null;var zs=({activeItem:e})=>{var t,a;const n=null!==(t=e.link_capacity)&&void 0!==t?t:Object(O.isUBB)(e)&&(null===(a=e.peer_ubb)||void 0===a?void 0:a.link_capacity);return n>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",color:"secondary",input:1e6*n/8,options:"bitrate"})):null};var Bs=({activeItem:{loadAvg:e},flexProps:t})=>e?r.a.createElement(Zt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;const Ws=Object(l.c)(V.a)`
  white-space: nowrap;
  margin-right: 12px;
`,Hs=Object(l.c)(V.a)`
  text-align: right;
`;var Gs=({condition:e,definition:t,hideOnEmpty:a,placeholder:n="...",value:c})=>Object(L.f)(e,c||!a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ws,{color:"secondary"},t),r.a.createElement(Hs,{color:"secondary"},c)):null,{placeholder:r.a.createElement(r.a.Fragment,null,r.a.createElement(Ws,{color:"secondary"},t),r.a.createElement(Hs,{color:"secondary"},n))}),Ys=a(374),$s=a(35);const Ks=Object(_.a)(Ys.selectAPGroupsData,$s.selectWifiNetworksData,P,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).reduce((e,a)=>[...e,...t.filter(e=>e.ap_group_ids.includes(a._id))],[])),Xs=Object(l.c)(V.a)`
  max-width: 200px;
`;var qs=()=>{const e=Object(o.useSelector)(Ks),t=Object($s.getWifiNetworkNames)(e,!1);return t?r.a.createElement(Zt,null,r.a.createElement(Gs,{value:r.a.createElement(Xs,{size:"body",truncate:!0},t),condition:[Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}}),Object($s.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_WIFI"}))})):null};const Zs=Object(l.c)(V.a)`
  max-width: 200px;
`;var Js=()=>{const e=Object(o.useSelector)(Ks),t=Object($s.getWifiNetworkNames)(e,!0);return t?r.a.createElement(Zt,null,r.a.createElement(Gs,{value:r.a.createElement(Zs,{size:"body",truncate:!0},t),condition:[Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}}),Object($s.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_HOTSPOT"})),hideOnEmpty:!0})):null};const Qs=Object(l.c)(V.a)`
  max-width: 200px;
`;var em=({activeItem:{mac:e},flexProps:t})=>{const a=Object(o.useSelector)(t=>Object(Ys.selectAPGroupsByDeviceMac)(t,e)),n=a&&a.map(({name:e})=>e).sort().join(", ");return n?r.a.createElement(Zt,{flexProps:t},r.a.createElement(Gs,{value:r.a.createElement(Qs,{size:"body",truncate:!0},n),condition:[Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_AP_GROUP"}))})):null};var tm=({activeItem:{"user-num_sta":e,satisfaction:t}})=>Object(Fe.d)(t)?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e||0)):null;var am=({activeItem:{"guest-num_sta":e,satisfaction:t}})=>Object(Fe.d)(t)?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_GUESTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e||0)):null,nm=({children:e})=>r.a.createElement(fe.g,{height:"100%",flexDirection:"column"},e);var cm=({activeItem:e})=>r.a.createElement(nm,null,[{C:Us},{C:ks},{C:zs},{C:rl},{C:Bs},{C:qs},{C:Js},{C:em},{C:tm},{C:am}].map(({C:t})=>r.a.createElement(t,{activeItem:e,key:t.name})));const rm=Object(l.c)("div")`
  height: 100%;
`,lm=Object(l.c)("div")`
  margin: ${({theme:e})=>e.spacing["spacing-xl"]} 0;
`,im=[{id:"name",sortable:!0,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_NAME"})),renderCell:e=>r.a.createElement(V.a,{size:"body",truncate:!0},e.name)},{id:"bssid",sortable:!0,minWidth:35,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID"})),renderCell:e=>r.a.createElement(V.a,{size:"body",truncate:!0},e.bssid)},{id:"essid",sortable:!0,minWidth:30,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_ESSID"})),renderCell:e=>r.a.createElement(V.a,{size:"body",truncate:!0},e.essid)},{id:"channel",sortable:!0,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})),renderCell:e=>r.a.createElement(V.a,{size:"body"},e.channel)}];function om({activeItem:{vap_table:e}}){return r.a.createElement(rm,null,r.a.createElement(Pe.a,{items:e||[],disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,columns:im,renderFooter:()=>e&&e.length?r.a.createElement(lm,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_NO_WLAN"}),rowHeight:30,idField:"name"}))}const Em=Object(_.a)(Ys.selectAPGroupsData,$s.selectWifiNetworksData,P,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).map(e=>{const a=t.filter(t=>t.ap_group_ids.includes(e._id)),n=[];return a.forEach(t=>{t.wlan_band===$s.WlanBand.BOTH?n.push({...t,id:t._id+e._id+$s.WlanBand.NA,wlan_band:$s.WlanBand.NA},{...t,id:t._id+e._id+$s.WlanBand.NG,wlan_band:$s.WlanBand.NG}):n.push({...t,id:t._id+e._id})}),{...e,id:e._id,children:n}})),sm=Object(l.c)(w.tc)`
  margin-right: 7px;
  margin-bottom: 2px;
`,mm=[{id:"name",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_GROUP_TABLE_HEADER_NAME"})),renderCell:({name:e,attr_no_delete:t,children:a,wlan_band:n})=>a?r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},t?r.a.createElement(r.a.Fragment,null,e," (",r.a.createElement(M.c,{id:"COMMON_WORD_DEFAULT"}),")"):e):r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},n===$s.WlanBand.NG?r.a.createElement(r.a.Fragment,null,r.a.createElement(sm,{isActive:!0}),e," (",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_BAND_2GHZ"}),")"):r.a.createElement(r.a.Fragment,null,r.a.createElement(sm,{isActive:!0}),e," (",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_BAND_5GHZ"}),")"))}];var dm=()=>{const e=Object(o.useSelector)(Em);return Object(L.f)([Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],r.a.createElement(Pe.a,{items:e,columns:mm,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0}))};const _m=Object(l.c)("div")`
  text-align: center;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 32px 40px;
`,um=Object(l.c)("div")`
  margin-bottom: 2px;
`,bm=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[3]}px;
`,pm=Object(l.c)(w.d)`
  color: ${Oo.n.warning};
`;var Om=({activeItem:e})=>{const t=Object(O.isAdopted)(e),a=Object(Fe.d)(null==e?void 0:e.satisfaction),n=Object(c.useMemo)(()=>t?a?r.a.createElement($t,{item:e,headerTitle:"DEVICE_HEADER_WIFI_EXPERIENCE",showGraph:e&&a,itemType:"ap",canReport:!0}):r.a.createElement(_m,null,r.a.createElement(um,null,r.a.createElement(pm,{width:26,height:26})),r.a.createElement(um,null,r.a.createElement(bm,null,r.a.createElement(M.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE_NA"}))),r.a.createElement(um,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE_NA_DESCRIPTION"})))):null,[t,a,e.satisfaction]);return r.a.createElement(r.a.Fragment,null,n,r.a.createElement(Cl,{activeItem:e}))},Im=a(55),gm=a(453);var Cm=({activeItem:e,radio:t})=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(gm.a,{device:e,radio:e.radio_table.find(e=>e.radio===t),hidePowerInfo:!0})));var Rm=Object(M.f)(({activeItem:e,radio:t,intl:a})=>{const n=Object(O.getRadioStatsTransmitPowerString)(e,null==e?void 0:e.radio_table_stats.find(e=>e.radio===t),a);return n?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null});var vm=({activeItem:e,radio:t})=>{const{totalPackets:a,totalBytes:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"tx");return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a," / ",n))};var Tm=({activeItem:e,radio:t})=>{var a;const{totalPackets:n,totalBytes:c}=Object(O.getApRadioStats)(e,null===(a=null==e?void 0:e.radio_table)||void 0===a?void 0:a.find(e=>e.radio===t),"rx");return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n," / ",c))};var hm=({activeItem:e,radio:t})=>{const{retryPercentage:a,droppedPercentage:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"tx");return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a,"% / ",n,"%"))};var Pm=({activeItem:e,radio:t})=>{const{retryPercentage:a,droppedPercentage:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"rx");return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a,"% / ",n,"%"))};var Dm=({activeItem:e,radio:t,flexProps:a})=>{var n;const c=Object(O.getRadioChannelUtilization)(e,null===(n=null==e?void 0:e.radio_table_stats)||void 0===n?void 0:n.find(e=>e.radio===t));return c?r.a.createElement(Zt,{flexProps:a},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},`${c.total}% / ${c.selfRx}% / ${c.selfTx}%`)):null};var fm=({activeItem:e,radio:t})=>{var a,n;return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(n=null===(a=null==e?void 0:e.radio_table_stats)||void 0===a?void 0:a.find(e=>e.radio===t))||void 0===n?void 0:n["user-num_sta"]))};var ym=({activeItem:e,radio:t})=>{var a,n;return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_GUESTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(n=null===(a=null==e?void 0:e.radio_table_stats)||void 0===a?void 0:a.find(e=>e.radio===t))||void 0===n?void 0:n["guest-num_sta"]))};const Sm=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,Am=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var Nm=({activeItem:e,radio:t})=>r.a.createElement(Am,null,r.a.createElement(Sm,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:(e=>{switch(e){case Im.b.NG:return"DEVICE_HEADER_RADIO2G_SHORT";case Im.b.NA:return"DEVICE_HEADER_RADIO5G_SHORT";case Im.b.AD:return"DEVICE_HEADER_RADIO60G_SHORT";default:return"COMMON_UNKNOWN"}})(t)})),r.a.createElement(nm,null,[{C:Cm},{C:Rm},{C:vm},{C:Tm},{C:hm},{C:Pm},{C:Dm,flexProps:{}},{C:fm},{C:ym}].map(({C:a,flexProps:n={}})=>r.a.createElement(a,{activeItem:e,radio:t,flexProps:n,key:`${a.name}-${t}`}))));const jm=Object(l.c)(de.a)`
  font-weight: normal;
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`,Lm=()=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_HYPHEN"})));var xm=({uplinkDevice:e,uplinkName:t,params:a,path:l,history:i})=>{const E=Object(o.useDispatch)(),{site:s,page:m,subPage:_}=a,{mac:u}=e,b=Object(c.useCallback)(e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(l,{id:u,site:s,page:m,panel:"overview",subPage:_});i.push(t),E(Object(j.g)({type:d.b.DEVICE,mac:u}))},[]);return r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),r.a.createElement(jm,{variant:"link",onClick:b},t))};var Vm=({activeItem:e,flexProps:t})=>{const a=Object(o.useSelector)(O.selectDevicesData),n=Object(O.getUplinkRemotePort)(a,e);return r.a.createElement(Zt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==n?void 0:n.poe_power)||0}})))};var wm=({uplink:{rx_packets:e,rx_bytes:t}})=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{size:"body",type:"number",input:e,color:"secondary"})," / ",Object(Kt.c)(t)):"- / -"));var Mm=({uplink:{tx_packets:e,tx_bytes:t}})=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{size:"body",type:"number",input:e,color:"secondary"})," / ",Object(Kt.c)(t)):"- / -"));var Fm=({uplink:{"rx_bytes-r":e,"tx_bytes-r":t}},a=!0)=>a?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),r.a.createElement(me.a,{size:"body",color:"secondary",type:"bytes",input:t+e||0,options:"bitrate"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",input:e||0,options:"bitrate",color:"secondary"})),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",input:t||0,options:"bitrate",color:"secondary"})));var Um=({uplink:{rssi:e}})=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},ml(e)," (",dl(e)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")"));var km=({uplink:{tx_rate:e}})=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_TX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{type:"bytes",input:1e3*e/8,options:"bitrate",color:"secondary"})));var zm=({activeItem:e,flexProps:t})=>r.a.createElement(Zt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_RX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{type:"bytes",input:1e3*e.uplink.rx_rate/8,options:"bitrate",color:"secondary"})));var Bm=({activeItem:e,params:t,path:a,history:n})=>{const c=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),l=Object(O.getUplinkDisplayName)(e,c),i=Object(O.getUplinkAttrs)(e)||{},E="wire"===e.uplink.type?[(null==c?void 0:c.mac)?{C:xm,props:{uplinkDevice:c,uplinkName:l,params:t,path:a,history:n}}:{C:Lm},{C:il,props:{uplink:i}},{C:Vm,props:{activeItem:e},flexProps:{}},{C:wm,props:{uplink:i}},{C:Mm,props:{uplink:i}},{C:Fm,props:{uplink:i}}]:[(null==c?void 0:c.mac)?{C:xm,props:{uplinkDevice:c,uplinkName:l,params:t,path:a,history:n}}:{C:Lm},{C:Um,props:{uplink:i}},{C:km,props:{uplink:i}},{C:zm,props:{activeItem:e},flexProps:{}},{C:wm,props:{uplink:i}},{C:Mm,props:{uplink:i}},{C:Fm,props:{uplink:i}}];return r.a.createElement(nm,null,E.map(({C:e,props:t,flexProps:a={}})=>r.a.createElement(e,Object.assign({},t,{flexProps:a,key:e.name}))))};const Wm=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Hm=function({activeItem:e,...t}){var a,n;const l=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),i=[...null!==(a=null==e?void 0:e.radio_table)&&void 0!==a?a:[]].sort(O.sortRadios).reverse();return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Om,{activeItem:e}),r.a.createElement(Wm,{variant:"secondary",items:[{id:"history",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>r.a.createElement(Fs,Object.assign({activeItem:e},t))},{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(cm,{activeItem:e})},...(null===(n=null==e?void 0:e.uplink)||void 0===n?void 0:n.mac)?[{id:"uplink",label:"wire"===e.uplink.type?r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>r.a.createElement(Bm,Object.assign({activeItem:e},t))}]:[],...(null==i?void 0:i.length)?[{id:"airStats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>r.a.createElement(Nm,{activeItem:e,radio:t,key:t}))}]:[],{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_DOWNLINKS"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"apGroups",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>r.a.createElement(dm,null)},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))},{id:"wlan",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_WLAN"}),renderContent:()=>r.a.createElement(om,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})))};const Gm=e=>Object(Ia.t)("spectrumScan","/api/s/{site}/stat/spectrum-scan/"+e,e,void 0,{idField:"mac"}),Ym=(e,t)=>Object(dt.a)(((e,t)=>Object(Ia.w)(Gm(t),e.models))(e,t),"data",[]);var $m=a(283),Km=a(799);const Xm=[{from:-96,to:-92,color:"#fda839"},{from:-92,to:-88,color:"#fda839"},{from:-88,to:-84,color:"#fda129"},{from:-84,to:-80,color:"#fd9a19"},{from:-80,to:-76,color:"#fd930b"},{from:-76,to:-72,color:"#f87f0c"},{from:-72,to:-68,color:"#f26a13"},{from:-68,to:-64,color:"#f26a13"},{from:-64,to:-60,color:"#ec5619"},{from:-60,to:-56,color:"#d44515"},{from:-56,to:-52,color:"#c64013"},{from:-52,to:-48,color:"#bf3d12"}],qm={ng:16,na:42},Zm={ng:8,na:0},Jm={ng:[{from:2400,to:2500}],na:[{from:5170,to:5330},{from:5490,to:5730},{from:5735,to:5850}]},Qm={domain:[0,23.3,35,46.6,58.3,100],values:["#fda93a","#fda93a","#fd9208","#ea4e1a","#bf3d12","#bf3d12"]},ed={20:{domain:[0,6.2,28.1,49.9,71.9,100],values:Qm.values},40:{domain:[0,1.6,24.6,47.4,70.5,100],values:Qm.values},80:{domain:[23.3,35,46.6,58.3,100],values:Qm.values.slice(1)},160:{domain:[23.3,35,46.6,58.3,100],values:Qm.values.slice(1)}},td=Object(l.c)(V.a)`
  margin-bottom: 16px;
  font-weight: bold;
`,ad=Object(l.c)(F.a)`
  margin-bottom: 56px;
`,nd=Object(l.c)("div")`
  padding: 21px 0;
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.colors.legendText};
  position: relative;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
`,cd=Object(l.c)("div")`
  padding: 21px 0;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  opacity: 0;
  visibility: hidden;
`,rd=(Object(l.c)(F.a)`
  padding: 21px 0;
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.colors.legendText};
  position: relative;
  width: ${({width:e})=>e};
`,Object(l.c)("div")`
  height: 100%;
  width: 0;
  left: -1px;
  top: 0;
  position: absolute;
  border-left: 1px dashed ${({theme:e})=>e.colors.legendText};
  margin-left: ${({marginLeft:e})=>e}%;
`);var ld=({count:e,offset:t})=>r.a.createElement(r.a.Fragment,null,[...Array(e)].map((e,a)=>r.a.createElement(rd,{key:"divider-"+a.toString(),marginLeft:(a+1)*t})));const id=Object(l.c)("div")`
  height: 100%;
  width: 0;
  left: 0;
  top: calc(100% + 4px);
  position: absolute;
  margin-left: ${({marginLeft:e})=>e};
  font-size: 10px;
`,od=Object(l.c)("div")`
  transform: rotate(90deg);
`;var Ed=({count:e,offset:t,start:a,end:n,step:c})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(id,{key:"start-legend",marginLeft:"4px"},r.a.createElement(od,null,a)),[...Array(e)].map((e,n)=>r.a.createElement(id,{key:"divider-legend-"+n.toString(),marginLeft:(n+1)*t+"%"},r.a.createElement(od,null,a+(n+1)*c))),r.a.createElement(id,{key:"end-legend",marginLeft:"calc(100% - 4px)"},r.a.createElement(od,null,n))),sd=a(2920),md=a(98);const dd=Object(l.c)("div")`
  margin: 16px 0;
`,_d=Object(l.c)(F.a)`
  height: 50px;
`,ud=Object(l.c)("div")`
  margin: 1px 0 4px;
  height: 2px;
`,bd=e=>l.a`
  background: linear-gradient(
    90deg,
    ${ed[e].values.map((t,a)=>`${t} ${ed[e].domain[a]}%`).join(",")}
  );
`,pd=Object(l.c)("div")`
  margin: 0 0.5px;
  width: ${({width:e})=>e};
  position: relative;
  background: ${({motif:e})=>we.a["dark"===e?"grey-1":"white-3"]};
`,Od=Object(l.c)("div")`
  width: 100%;
  height: ${({height:e})=>e};
  background-color: ${({background:e})=>e};
  position: absolute;
  bottom: 0;
  border-radius: 1px;
`;var Id=Object(md.a)(({data:e,width:t,motif:a})=>{if(!e||!e.length)return null;const n=e.length;return r.a.createElement(dd,null,r.a.createElement(_d,null,e.map((e,c)=>{const l=c/n*100,i=hl.a.scale(ed[t].values).domain(ed[t].domain)(l).css();return r.a.createElement(pd,{width:n+"%",key:"rssi-bar-"+(c+1),motif:a},r.a.createElement(Od,{height:e+"%",background:i}))})),r.a.createElement(ud,{className:bd(t)}))});const gd=Object(l.c)(w.Qb)`
  margin-top: -4px;
  margin-right: 4px;
`,Cd=Object(l.c)("div")`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Rd=Object(l.c)("div")`
  text-transform: uppercase;
  margin: 16px 0 8px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,vd=Object(l.c)(F.a)`
  margin-bottom: 4px;
`,Td=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
  min-width: 50%;
`,hd=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  min-width: 50%;
`;var Pd=Object(M.f)(({isAc:e=!1,spectrumEntry:t,data:a,radioType:n,width:c,intl:l})=>{if(!a)return null;const{interference:i,utilization:o,rssi_histogram:E}=t||{},{lowerFrequency:s,upperFrequency:m,subChannels:d,channel:_}=a,u=`${s} - ${m} ${l.formatMessage({id:"COMMON_UNIT_MHZ"})}`,b=`DEVICE_PROPERTIES_SECTION_RADIOS_SUBSECTION_${n.toUpperCase()}${e&&"na"===n?"_AC":""}`;return r.a.createElement("div",null,r.a.createElement(Cd,null,r.a.createElement(gd,null),r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL"})," ",_),r.a.createElement(Rd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW"})),r.a.createElement(vd,null,r.a.createElement(Td,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_RADIO"})),r.a.createElement(hd,null,r.a.createElement(M.c,{id:b}))),r.a.createElement(vd,null,r.a.createElement(Td,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH"})),r.a.createElement(hd,null,c," ",r.a.createElement(M.c,{id:"COMMON_UNIT_MHZ"}))),+c>20&&r.a.createElement(vd,null,r.a.createElement(Td,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_USED_CHANNELS"})),r.a.createElement(hd,null,d.join(", "))),r.a.createElement(vd,null,r.a.createElement(Td,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_FREQUENCY_RANGE"})),r.a.createElement(hd,null,u)),!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Rd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_RF_SCAN_DETAILS"})),r.a.createElement(vd,null,r.a.createElement(Td,null,r.a.createElement(M.c,{id:"DEVICE_HEADER_UTILIZATION"})),r.a.createElement(hd,null,o,"%")),r.a.createElement(vd,null,r.a.createElement(Td,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})),r.a.createElement(hd,null,i," ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))),E&&E.length&&r.a.createElement(Id,{data:E,width:c})))});const Dd=Object(l.c)(pn.a)`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
  top: ${({top:e})=>e};
  left: ${({left:e})=>e};
  border: 1px solid ${({theme:e})=>e.motifPalette.text02};
  border-radius: 3px;
  position: absolute;
  background: ${({theme:e})=>e.motifPalette.hoverUi01};
  z-index: 3;
  overflow: hidden;
`,fd=Object(l.c)("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({height:e})=>e};
  background-color: ${({background:e})=>e};
`,yd=l.a`
  width: 240px !important;
  transform: translateX(18px) !important;
`;var Sd=({spectrumData:e,channels:t,channelWidth:a,rowCount:n,lowerFrequency:c,singleFrqeuencyWidth:l,type:i,className:o=null})=>r.a.createElement(r.a.Fragment,null,t.map((t,E)=>{const s=e&&e.spectrum_table&&(e=>{const t=e.length,a=t&&e.reduce((e,t)=>(e.interference+=t.interference,e.utilization+=t.utilization,e.rssi_histogram&&t.rssi_histogram&&(e.rssi_histogram=e.rssi_histogram.map((e,a)=>e+(t.rssi_histogram&&t.rssi_histogram[a]||0))),e));return a&&a.interference&&(a.interference=Math.round(a.interference/t),a.utilization=Math.round(a.utilization/t),a.rssi_histogram=a.rssi_histogram&&a.rssi_histogram.map(e=>Math.round(e/t))),a})(e.spectrum_table.filter(e=>e.width===parseInt(a,10)&&t.subChannels.includes(e.channel))),m=s&&s.utilization||0,d=s&&s.interference||-96,_=e&&(Xm.find(e=>Object(sd.a)(d,e.from,e.to))||{}).color||"transparent",u=t.upperFrequency-t.lowerFrequency,b=21+(qm[i]+Zm[i])*(E%n),p=(t.lowerFrequency-c)*l;return r.a.createElement(Dd,{key:`rf-${i}-${a}-channel-${t.subChannels.toString()}`,width:l*u+"%",height:qm[i]+"px",top:b+"px",left:p+"%",className:o,message:r.a.createElement(Pd,{width:a,data:t,spectrumEntry:s,radioType:i}),position:"bottomRight",tooltipClassName:yd,portal:!0},r.a.createElement(fd,{height:m+"%",background:_}))}));var Ad=r.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a})=>{const n=e.scans&&e.scans.find(e=>e.radio===$m.a.NG.type),c=["20"];Object(O.isHt40Supported)(t,a,$m.a.NG.type)&&c.push("40");const l=c.reduce((e,n)=>{const c=Object(vi.c)(t,a,$m.a.NG.type,n);return e[n]=Object.entries(O.WIFI_CHANNELS.ng[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>c.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),i=10*Math.floor(Math.min(l[20][0].lowerFrequency,l[40][0].lowerFrequency)/10),o=10*Math.ceil(Math.max(l[20][l[20].length-1].upperFrequency,l[40][l[40].length-1].upperFrequency)/10),E=o-i,s=E/10-1,m=100/(s+1),d=100/E;return r.a.createElement("div",null,Object.keys(l).map(e=>{const t=l[e],a="20"===e?5:10,c=Math.min(a,t.length)*(qm.ng+Zm.ng)-Zm.ng+42;return r.a.createElement("div",{key:"channel-width-"+e},r.a.createElement(td,null,r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:e}}))),r.a.createElement(ad,null,Jm.ng.map(l=>r.a.createElement(nd,{key:`widths-${l.from}-${l.to}`,width:"100%",height:c+"px"},r.a.createElement(ld,{count:s,offset:m}),r.a.createElement(Ed,{count:s,offset:m,start:i,end:o,step:10}),r.a.createElement(Sd,{spectrumData:n,channels:t,channelWidth:e,rowCount:a,lowerFrequency:i,singleFrqeuencyWidth:d,type:$m.a.NG.type})))))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(oi.a)(Object(dt.a)(e,a),Object(dt.a)(t,a))));const Nd=l.a`
  + div {
    border-left: none;
  }
`;var jd=r.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a,intl:n})=>{const c=e.scans&&e.scans.find(e=>e.radio===$m.a.NA.type),l=["20"];Object(O.isHt40Supported)(t,a,$m.a.NA.type)&&l.push("40"),Object(O.isHt80Supported)(t,a)&&l.push("80"),Object(O.isHt160Supported)(t,n,a,"rai0")&&l.push("160");const i=l.reduce((e,n)=>{const c=Object(vi.c)(t,a,$m.a.NA.type,n);return e[n]=Object.entries(O.WIFI_CHANNELS.na[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>c.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),o=Object(qn.a)(i[20],e=>Jm.na.findIndex(t=>Object(sd.a)(e.centerFrequency,t.from,t.to))),E=o[1]&&o[1].length,s=o[2]&&o[2].length,m=100/(i[20].length+(E?1:0)+(s?1:0));return r.a.createElement("div",null,Object.keys(i).map(e=>{const t=i[e],a=+e;return r.a.createElement("div",{key:"channel-width-"+e},r.a.createElement(td,null,r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:a}}))),r.a.createElement(ad,{justifyContent:"space-between"},Jm.na.map((a,n)=>{const l=t.filter(({centerFrequency:e})=>Object(sd.a)(e,a.from,a.to)),i=o[n]&&o[n].length||0,E=i*m,s=100/i/20,d=20*s*4,_=Math.floor((i-1)/4);return l.length?r.a.createElement(nd,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+qm.na+"px"},r.a.createElement(ld,{count:_,offset:d}),r.a.createElement(Ed,{count:_,offset:d,start:a.from,end:a.to,step:80}),r.a.createElement(Sd,{spectrumData:c,channels:l,channelWidth:e,rowCount:1,lowerFrequency:a.from,singleFrqeuencyWidth:s,type:$m.a.NA.type,className:Nd})):r.a.createElement(cd,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+qm.na+"px"})})))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(oi.a)(Object(dt.a)(e,a),Object(dt.a)(t,a))));const Ld=Object(l.c)(Do.a)`
  width: 100% !important;
  margin-bottom: 16px;
`,xd=Object(l.c)(F.a)`
  margin-bottom: 32px;
`,Vd=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
`,wd=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0 0 0 8px;
`,Md=Object(l.c)(V.a)`
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: block;
`,Fd=Object(l.c)("div")`
  width: ${({width:e})=>e}%;
  background-color: ${({background:e})=>e};
  height: 7px;
`,Ud=Object(l.c)("div")`
  position: relative;
  font-size: 10px;
  height: 14px;
`,kd=Object(l.c)(F.a)`
  margin: 4px 0;
`,zd=Object(l.c)("div")`
  padding: 4px 0;
  font-size: 10px;
`,Bd=Object(l.c)("div")`
  position: absolute;
  ${({right:e})=>e&&`right: ${e};`}
  ${({left:e})=>e&&`left: ${e};`}
`;var Wd=Object(Tt.compose)(Object(o.connect)((e,{activeItem:{mac:t}})=>({spectrumScan:Ym(e,t)}),{fetchCountryChannels:vi.a,fetchSpectrumScan:Gm,confirm:ec.a,scanDeviceRFEnvironments:O.scanDeviceRFEnvironments,hideModal:Ut.e}),Object(_l.c)(({activeItem:{mac:e},fetchSpectrumScan:t,fetchCountryChannels:a})=>Promise.all([t(e),a(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})])),M.f)(({activeItem:e,confirm:t,scanDeviceRFEnvironments:a,hideModal:n,spectrumScan:l,intl:i})=>{const E=Object(o.useDispatch)(),s=Object(c.useMemo)(()=>Object(O.getRadios)(e),[e]),m=Object(c.useMemo)(()=>null==s?void 0:s.find(e=>e.radio===$m.a.NG.type),[s]),d=Object(c.useMemo)(()=>null==s?void 0:s.find(e=>e.radio===$m.a.NA.type),[s]),[_,u]=Object(c.useState)(m?$m.a.NG.type:$m.a.NA.type),b=Object(Km.a)(null==e?void 0:e.spectrum_scanning),p=Object(o.useSelector)(vi.d);Object(c.useEffect)(()=>{b&&!(null==e?void 0:e.spectrum_scanning)&&E(Gm(null==e?void 0:e.mac))},[null==e?void 0:e.mac,null==e?void 0:e.spectrum_scanning,b,E]);const I=Object(c.useCallback)((e,t)=>{u(t)},[u]),g=Object(c.useCallback)(()=>{t({message:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_MESSAGE",title:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_TITLE",onConfirm:()=>{a(e),n()}})},[e,t,a,n]),C=Object(c.useMemo)(()=>"wire"===Object(dt.a)(e,"uplink.type",""),[e]),R=Object(c.useMemo)(()=>{var e;return null===(e=null==l?void 0:l.scans)||void 0===e?void 0:e.find(({radio:e})=>e===_)},[null==l?void 0:l.scans,_]),v=Object(c.useMemo)(()=>[...m?[{label:i.formatMessage({id:"DEVICE_PROPERTIES_RF_2G_RF_ENV"}),value:$m.a.NG.type}]:[],...d?[{label:i.formatMessage({id:"DEVICE_PROPERTIES_RF_5G_RF_ENV"}),value:$m.a.NA.type}]:[]],[m,d,i]),T=Object(c.useMemo)(()=>(null==e?void 0:e.spectrum_scanning)?r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_IN_PROGRESS"}):(null==R?void 0:R.spectrum_table_time)?r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_TIME_AGO",values:{time:Object(ht.distanceInWordsToNow)(1e3*R.spectrum_table_time)}}):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_NEVER_SCANNED"}),[null==e?void 0:e.spectrum_scanning,null==R?void 0:R.spectrum_table_time]);return C&&(null==v?void 0:v.length)?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ld,{id:"rf_type",value:_,options:v,onChange:I,inputProps:{full:!0}}),r.a.createElement(xd,{justifyContent:"space-between"},r.a.createElement(Vd,null,r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_LAST_SCAN"})," ",T)),r.a.createElement(wd,{variant:"link",disabled:e.spectrum_scanning,onClick:g},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_ACTION_START_SCAN"}))),_===$m.a.NA.type?r.a.createElement(jd,{deviceData:e,spectrumScan:l,countryChannels:p,intl:i}):r.a.createElement(Ad,{deviceData:e,spectrumScan:l,countryChannels:p}),r.a.createElement(Md,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_RF_LEGEND"})),r.a.createElement(Ud,null,r.a.createElement(Bd,null,"-96"),r.a.createElement(Bd,{left:"30%"},"-80"),r.a.createElement(Bd,{left:"64%"},"-64"),r.a.createElement(Bd,{right:"0"},"-48 ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))),r.a.createElement(kd,{justifyContent:"space-between"},Xm.map(({color:e,from:t,to:a})=>r.a.createElement(Fd,{width:7.5,background:e,key:`dbm-${t}-${a}`}))),r.a.createElement(zd,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_LEGEND_UTILIZATION"})))):r.a.createElement(xd,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_DISABLED_MESSAGE"})))}),Hd=a(765);const Gd=Object(l.c)("tr")`
  white-space: nowrap;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
`,Yd=Object(l.c)("td")`
  vertical-align: top;
`,$d=Object(l.c)("td")`
  padding-left: 12px;
  padding-bottom: 2px;
  text-align: right;
  vertical-align: top;
`;var Kd=({device:e,radio:t,channelUtilization:a})=>{const{totalPackets:n,totalBytes:c,droppedPercentage:l,retryPercentage:i}=Object(O.getApRadioStats)(e,t,"rx"),{totalPackets:o,totalBytes:E,droppedPercentage:s,retryPercentage:m}=Object(O.getApRadioStats)(e,t,"tx");return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement(Gd,null,r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),r.a.createElement($d,null,r.a.createElement(V.a,{color:"secondary"},o," / ",E))),r.a.createElement(Gd,null,r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),r.a.createElement($d,null,r.a.createElement(V.a,{color:"secondary"},n," / ",c))),r.a.createElement(Gd,null,r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),r.a.createElement($d,null,r.a.createElement(V.a,{color:"secondary"},m,"% / ",s,"%"))),r.a.createElement(Gd,null,r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),r.a.createElement($d,null,r.a.createElement(V.a,{color:"secondary"},i,"% / ",l,"%"))),a&&r.a.createElement(Gd,null,r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),r.a.createElement($d,null,r.a.createElement(V.a,{color:"secondary"},`${a.total}% / ${a.selfRx}% / ${a.selfTx}%`)))))};const Xd=Object(l.c)("div")`
  &:first-child {
    margin-bottom: 24px;
  }
`,qd=Object(l.c)("div")`
  flex: 1;
`,Zd=Object(l.c)("span")`
  display: inline-block;
  margin: -2px 6px 0;
  width: 8px;
  height: 1px;
  vertical-align: middle;
  background: ${({theme:e})=>e.motifPalette.text02};
`,Jd=Object(l.c)(V.a)`
  margin-left: 4px;
`,Qd=Object(l.c)("div")`
  width: 100%;
  margin-bottom: 16px;
`,e_=(e,t)=>{const a="DEVICE_RADIO_PROTOCOL_"+t.toUpperCase();if(t===Im.b.NA){if(Object(O.isAxRadio)(e,t))return a.concat("_AX");if(Object(O.isAcRadio)(e,t))return a.concat("_AC")}return a};var t_=e=>((null==e?void 0:e.radio_table)||[]).reduce((t,a)=>{const n=Object(O.getRadioChannelUtilization)(e,a),{radio:c}=a;if(n){const{selfRx:l,selfTx:i,interference:o,total:E}=n;t.push(r.a.createElement(Xd,{key:a.name},r.a.createElement(fe.g,{justifyContent:"space-between"},r.a.createElement(qd,null,r.a.createElement(gm.a,{device:e,radio:a,hideDfsInfo:!0,hideHtInfo:!0,hidePowerInfo:!0,hideChannelTooltip:!0,textColor:"primary",textSize:"body",textWeight:"bold"}),r.a.createElement(Zd,null),r.a.createElement(V.a,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.c,{id:e_(e,c)}))),r.a.createElement(me.a,{size:"body",color:"secondary",type:"percent",input:Math.min(E,100)/100}),r.a.createElement(Jd,{color:"secondary"},r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_UTILIZED"})))),r.a.createElement(Qd,null,r.a.createElement(pn.a,{message:r.a.createElement(Kd,{device:e,radio:a,channelUtilization:n}),portal:!0},r.a.createElement(Hd.a,{items:[{color:Oo.k.blue,value:l},{color:Oo.g,value:i},{color:Oo.h,value:o}],height:10})))))}return t},[]);const a_=Object(l.c)(ua.a)`
  margin-right: 4px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0;
`,n_=e=>l.a`
  background-color: ${e};
`;var c_=({ChannelBars:e})=>r.a.createElement(r.a.Fragment,null,e,r.a.createElement(F.a,{justifyContent:"flex-start"},r.a.createElement(F.a,{flex:"0 1 27%"},r.a.createElement(a_,{className:n_(Oo.k.blue)}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_RX_FRAMES"}))),r.a.createElement(F.a,{flex:"0 1 27%"},r.a.createElement(a_,{className:n_(Oo.g)}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_TX_FRAMES"}))),r.a.createElement(F.a,{flex:"0 1 27%"},r.a.createElement(a_,{className:n_(Oo.h)}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})))));const r_=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,l_=l.a`
  padding: 0;
  margin: 0;
`;var i_=function({activeItem:e,...t}){const a=t_(e),n=[];return a.length&&n.push({id:"channelUsage",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>r.a.createElement(c_,{ChannelBars:a})}),Object(O.isDeviceConnected)(e)&&Object(Yn.d)(e,O.WIFI_CAPS.RF_SCAN)&&n.push({id:"rfEvironment",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>r.a.createElement(Wd,{activeItem:e})}),Object(O.isDeviceConnected)(e)&&n.push({id:"dpi",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_DEVICE_IDENTIFICATION"}),renderContent:()=>r.a.createElement(xa,{mac:null==e?void 0:e.mac,contentPaddingX:0})}),r.a.createElement(r_,{variant:"secondary",items:n,contentClassName:l_,multiOpen:!0,renderOnlyExpandedContent:!0})};const o_=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,E_=Object(l.c)(fe.g)`
  margin-bottom: 16px;
  width: 100%;
`,s_=Object(Ja.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a}={}})=>({led_override:e,led_override_color:t,led_override_color_brightness:a}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var m_=Object(M.f)(s_(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:n,isValid:l,values:i,resetForm:E,setFieldValue:s,intl:m,formName:d="led"})=>{const _=Object(o.useDispatch)(),{led_override:u}=e,b=Object(o.useSelector)(Ei.selectMgmtSettings),p=Object(Yn.j)(e),I=(Object(dt.a)(b,"led_enabled",!1)&&u!==O.LedOverride.OFF||u===O.LedOverride.ON)&&p;Object(c.useEffect)(()=>(_(Object(j.h)({[d]:()=>i})),_(Object(j.j)({[d]:()=>E({values:i})})),_(Object(j.i)({[d]:E})),()=>{_(Object(j.h)({[d]:null})),_(Object(j.j)({[d]:null})),_(Object(j.i)({[d]:null}))}),[_,E,i,d]),Object(c.useEffect)(()=>{t(d,n),a(d,!l)},[t,n,a,l,d]);const g=Object(c.useCallback)(()=>["on","default"].includes(i.led_override)?s("led_override","off"):s("led_override","on"),[s,i.led_override]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E_,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_LED_ENABLE"})),r.a.createElement(ZE.a,{checked:["on","default"].includes(i.led_override),onChange:g}))),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o_,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"}))),r.a.createElement(o_,{marginBottom:12},r.a.createElement(ii.a,{size:"large",value:+i.led_override_color_brightness||100,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement("span",null,e,"%"),onChange:e=>s("led_override_color_brightness",e.target.value)})),r.a.createElement(o_,{marginBottom:12},r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),r.a.createElement(o_,{marginBottom:12},r.a.createElement(Ui.a,{color:(null==i?void 0:i.led_override_color)||O.DEFAULT_LED_COLOR,variant:"block",onChange:e=>{s("led_override_color","hex"in e?e.hex:void 0)},hexLabel:m.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:r.a.createElement(de.a,{variant:"inline",onClick:()=>{s("led_override_color",O.DEFAULT_LED_COLOR)}},r.a.createElement(M.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))}));const d_=Object(l.c)("div")`
  height: 100%;
`,__=l.a`
  th {
    padding-left: 0;
    padding-right: 0;
  }
`,u_=l.a`
  :hover {
    cursor: pointer;
  }
  td {
    padding-left: 0;
    padding-right: 25px;
  }
`,b_=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  white-space: pre;
`,p_=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  color: ${({theme:e})=>e.colors.primary};
`,O_=Object(l.c)("div")`
  margin-top: 16px;
`,I_=({device:e})=>{const t=Object(o.useDispatch)();return r.a.createElement(p_,{onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(j.g)({type:d.b.DEVICE,mac:e.mac}))}},r.a.createElement(tt.a,{device:e}))},g_=[{id:"nameInfo",sortable:!0,minWidth:40,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_AP"})),renderCell:e=>r.a.createElement(I_,{device:e})},{id:"channel",sortable:!0,minWidth:30,maxWidth:90,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_CHANNEL"})),renderCell:({channel:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"rssiInfo",sortable:!0,minWidth:40,maxWidth:80,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_SIGNAL"})),renderCell:({rssi:e})=>r.a.createElement(b_,null,ml(e)," (",dl(e)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];var C_=function({items:e}){return r.a.createElement(d_,null,r.a.createElement(Pe.a,{items:e,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:__,rowClassName:u_,columns:g_,idField:"mac",rowHeight:30}),!e.length&&r.a.createElement(O_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_EMPTY"}))))};const R_=-67,v_=-90,T_=Object(l.c)(F.a)`
  margin-bottom: 16px;

  > span {
    text-transform: none;
  }
`,h_=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,P_=Object(l.c)(F.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,D_=Object(l.c)("div")`
  flex: 1;
  max-width: ${({width:e})=>e||"calc(50% - 6px)"};
`,f_=Object(l.c)(V.a)`
  flex: 1;
  margin-right: 12px;
`,y_=Object(l.c)(F.a)`
  > label:not(:first-child) {
    margin-left: 18px;
  }
`,S_=Object(l.c)(w.Cb)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${({theme:e})=>e.motifPalette.aqua08};
`,A_=Object(l.c)(w.Db)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${({theme:e})=>e.motifPalette.aqua07};
`,N_=Object(l.c)(w.Eb)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${we.a["purple-1"]};
`,j_=[{value:"auto",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_AUTO"},{value:"high",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_HIGH"},{value:"medium",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_MEDIUM"},{value:"low",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_LOW"},{value:"custom",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_CUSTOM"}];class L_ extends c.PureComponent{constructor(){var e,t,a,n;super(...arguments),this.state={initialUplinkPriority1:(null===(t=null===(e=this.props)||void 0===e?void 0:e.activeItem)||void 0===t?void 0:t.mesh_uplink_1)||"",initialUplinkPriority2:(null===(n=null===(a=this.props)||void 0===a?void 0:a.activeItem)||void 0===n?void 0:n.mesh_uplink_2)||""},this.getRadioSubsection=e=>"DEVICE_PROPERTIES_SECTION_CONFIGURE_RADIOS_SUBSECTION_"+e.toUpperCase(),this.executePriorityUplinkAction=(e,t,a,n)=>{const{setPriorityUplink:c,unsetPriorityUplink:r}=this.props;return"SET"===e?c(t,a,n):r(t)},this.updateUplinkPriorities=()=>{const{values:e,activeItem:t}=this.props,{uplinkPriority1:a,uplinkPriority2:n}=e,{mesh_uplink_1:c,mesh_uplink_2:r}=t;if(!((c||"")!==this.state.initialUplinkPriority1||(r||"")!==this.state.initialUplinkPriority2))return;const l=!(!c&&!r)?"SET":"UNSET";this.executePriorityUplinkAction(l,t,a,n)},this.handleMeshingModeChange=e=>{const{setFieldValue:t}=this.props;e.target.checked&&t("meshingMode",e.target.name)},this.handlePriorityChange=(e,t)=>{const{values:a,setFieldValue:n}=this.props;let{uplinkPriority1:c,uplinkPriority2:r}=a;if("uplinkPriority1"===e&&!t.value&&r)return c=r,r="",n("uplinkPriority1",c),void n("uplinkPriority2",r);n(e,t.value)},this.handleEnableMeshingChange=()=>{const{setValues:e,values:t}=this.props,a=!t.meshingEnabled;e({...t,meshingEnabled:a,uplinkMeshEnable:a,radios:t.radios.map(e=>e.type===$m.a.NA.type?{...e,vwire_enabled:a}:e)})},this.getSaveData=()=>{const{intl:e,priorityUplinkOptions:t,values:a,activeItem:n,dirty:c}=this.props;if(!c)return{};const r=Object(Yn.d)(n,O.WIFI_CAPS.HIDE_CH_WIDTH),l=Object(O.getRadios)(n),i=Object(O.isPureAp)(n),{mesh_uplink_1:o,mesh_uplink_2:E}=(()=>{if("auto"===a.meshingMode)return{mesh_uplink_1:"",mesh_uplink_2:""};const{priorityUplink1:n,priorityUplink2:c}=w_(e,t,a.uplinkPriority1,a.uplinkPriority2);return{mesh_uplink_1:n,mesh_uplink_2:c}})();return{atf_enabled:a.atf_enabled||!1,mesh_sta_vap_enabled:i&&a.meshingEnabled&&("auto"===a.meshingMode||a.uplinkMeshEnable),radio_table:l.map(e=>{const{name:t,radio:c,antenna_gain:l,antenna_id:i,sens_level:o,sens_level_enabled:E}=e,{type:s,...m}=a.radios.find(e=>e.type===c&&e.name===t),d={...m,antenna_gain:l,antenna_id:i,sens_level_enabled:E,sens_level:o,radio:s};if("custom"!==m.tx_power_mode&&delete d.tx_power,d.antenna_id){const e=Object(O.getAntennaById)(n,d.antenna_id);e&&(d.antenna_gain=Object(O.getAntennaGainForRadioName)(e,t))}else delete d.antenna_id;return Object(O.isMinRssiStrictModeSupported)(e)||d.min_rssi_enabled||delete d.hard_noise_floor_enabled,d.min_rssi_enabled||delete d.min_rssi,d.sens_level_enabled||delete d.sens_level,r&&(delete d.channel,delete d.ht),c===$m.a.NA.type&&(d.vwire_enabled=a.meshingEnabled&&("auto"===a.meshingMode||d.vwire_enabled)),d}),mesh_uplink_1:o,mesh_uplink_2:E}}}componentDidMount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n,priorityUplinkOptions:c,intl:r}=this.props;e({radios:this.getSaveData}),t({radios:e=>{var t,a;this.updateUplinkPriorities();const{atf_enabled:l,mesh_uplink_1:i,mesh_uplink_2:o,mesh_sta_vap_enabled:E}=e,s=Object(O.getRadios)(e),m=null===(a=null===(t=s.find(({radio:e})=>e===$m.a.NA.type))||void 0===t?void 0:t.vwire_enabled)||void 0===a||a,d=null==E||E,_=m||d,{priorityUplink1:u,priorityUplink2:b}=w_(r,c,i,o),p=_&&m!==d||d&&(u||b)?"manual":"auto",I={radios:s.reduce((e,{name:t,radio:a,ht:n,channel:c,tx_power_mode:r,min_txpower:l,tx_power:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||"20",channel:c||"auto",tx_power_mode:r||"auto",tx_power:i||l||0,vwire_enabled:null!=o?o:a===$m.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||R_,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:l||!1,meshingEnabled:_,meshingMode:p,uplinkMeshEnable:d,uplinkPriority1:i||"",uplinkPriority2:o||""};n({values:I})}}),a({radios:n})}componentWillUnmount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a}=this.props;e({radios:null}),t({radios:null}),a({radios:null})}componentDidUpdate(){const{dirty:e,setFormDirty:t,setFormInvalid:a,errors:n}=this.props;t("radios",e),a("radios",!!Object.keys(n).length)}getRadioFields(e,t=!1){const{activeItem:a,countryChannels:n,mgmtSettings:c,isConnectivityMonitorEnabled:l,intl:i,isUbbXg:o,values:E,setFieldValue:s,uplinkItems:m,priorityUplinkOptions:d}=this.props,{name:_,radio:u,min_txpower:b,max_txpower:p}=e,{meshingEnabled:I,meshingMode:g,uplinkMeshEnable:C,uplinkPriority1:R,uplinkPriority2:v}=E,T=E.radios.findIndex(e=>e.type===u&&e.name===_),h=E.radios[T],P=Object(O.getRadioHtOptions)(a,e,n,i),D=Object(Yn.d)(a,O.WIFI_CAPS.HIDE_CH_WIDTH),f=c.outdoor_mode_enabled,y=Object(O.isMinRssiStrictModeSupported)(e)&&h.min_rssi_enabled,S=u===$m.a.NA.type,A=Object(Yn.e)(a)&&S,N=Object(O.isU6Extender)(a),j=Object(O.isUapBeaconHD)(a),L=Object(vi.b)(n,i,a,u,_,h&&h.ht||"20",{isOutdoorModeEnabled:f}),x=[{value:"auto",label:i.formatMessage({id:"COMMON_VALUE_AUTO"})},...L];x.some(e=>e.value===h.channel)||s(`radios.${T}.channel`,"auto");const w="custom"===(null==h?void 0:h.tx_power_mode),F=Object(O.isPureAp)(a),U=!Object(O.isUBB)(a),{priorityUplinkOptions1:k,priorityUplinkOptions2:z}=V_(i,d,R,v),{priorityUplink1:B,priorityUplink2:W}=w_(i,d,R,v);return r.a.createElement(h_,{key:_,marginBottom:16},r.a.createElement(T_,{alignItems:"center"},u===$m.a.NG.type&&r.a.createElement(S_,{height:"20",width:"20"}),u===$m.a.NA.type&&r.a.createElement(A_,{height:"20",width:"23"}),u===$m.a.AD.type&&r.a.createElement(N_,{height:"20",width:"20"}),r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:this.getRadioSubsection(u)}))),!D&&(o&&u===$m.a.AD.type?r.a.createElement(P_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${T}.channel`,type:"dropdown",options:x,translateLabel:!0,validated:!0,full:!0})):r.a.createElement(P_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(D_,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH",name:`radios.${T}.ht`,type:"dropdown",options:P,translateLabel:!0,validated:!0,full:!0})),r.a.createElement(D_,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${T}.channel`,type:"dropdown",options:x,translateLabel:!0,validated:!0,full:!0})))),!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(D_,{width:w?"":"100%"},r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER",name:`radios.${T}.tx_power_mode`,type:"dropdown",options:j_,validated:!0,full:!0,translateLabel:!0,translateOptions:!0,disabled:Object(O.isUBB)(a)})),w&&r.a.createElement(D_,null,r.a.createElement(tn.a,{label:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM",name:`radios.${T}.tx_power`,value:E.radios[T].tx_power,min:b,max:p,type:"number",full:!0}))),l&&S&&t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING",name:"meshingEnabled",type:"checkbox",onChange:this.handleEnableMeshingChange})),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(y_,null,r.a.createElement(qE.a,{id:"uplink-auto",checked:"auto"===g,name:"auto",onChange:this.handleMeshingModeChange},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_AUTO"})),r.a.createElement(qE.a,{id:"uplink-manual",checked:"manual"===g,name:"manual",onChange:this.handleMeshingModeChange},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_MANUAL"})))),"manual"===g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK",name:`radios.${T}.vwire_enabled`,type:"checkbox"})),F&&!N&&!j&&r.a.createElement(P_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK",name:"uplinkMeshEnable",type:"checkbox"})),F&&C&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h_,{marginBottom:24},r.a.createElement(tn.a,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:1},name:"uplinkPriority1",type:"dropdown",options:k,searchable:!0,value:B,onChange:e=>this.handlePriorityChange("uplinkPriority1",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),!!R&&r.a.createElement(h_,{marginBottom:24},r.a.createElement(tn.a,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:2},name:"uplinkPriority2",type:"dropdown",options:z,searchable:!0,value:W,onChange:e=>this.handlePriorityChange("uplinkPriority2",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),r.a.createElement(h_,{marginBottom:24},r.a.createElement(C_,{items:m})))))),A&&r.a.createElement(P_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS",name:"atf_enabled",type:"checkbox",disabled:Object(O.getDeviceModelFeature)(a,"atfDisabled")})),U&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI",name:`radios.${T}.min_rssi_enabled`,type:"checkbox"})),h.min_rssi_enabled&&r.a.createElement(h_,{marginBottom:16},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MIN_RSSI"})),r.a.createElement(ii.a,{min:-R_,max:-v_,size:"large",value:-h.min_rssi,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{color:"secondary"},"-",e),onChange:e=>{s(`radios.${T}.min_rssi`,-e.target.value)}})),y&&r.a.createElement(P_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(f_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER",name:`radios.${T}.hard_noise_floor_enabled`,type:"checkbox"})))))}render(){const{activeItem:e}=this.props,t=Object(O.getRadios)(e).sort(O.sortRadios).reverse(),a=t.map(({radio:e})=>e===$m.a.NA.type).lastIndexOf(!0);return t.map((e,t)=>{const n=t===a;return this.getRadioFields(e,n)})}}const x_=e=>({value:"",label:e.formatMessage({id:"COMMON_VALUE_AUTO"})}),V_=(e,t,a,n)=>({priorityUplinkOptions1:[x_(e)].concat(...t.filter(e=>!e.value||e.value!==n)),priorityUplinkOptions2:[x_(e)].concat(...t.filter(e=>!e.value||e.value!==a))}),w_=(e,t,a,n)=>{var c,r;const{priorityUplinkOptions1:l,priorityUplinkOptions2:i}=V_(e,t,a,n);return{priorityUplink1:a&&(null===(c=l.find(e=>(null==e?void 0:e.value)===a))||void 0===c?void 0:c.value)||"",priorityUplink2:n&&(null===(r=i.find(e=>(null==e?void 0:e.value)===n))||void 0===r?void 0:r.value)||""}},M_=Object(Ja.g)({mapPropsToValues:({activeItem:e,intl:t,priorityUplinkOptions:a})=>{var n,c;const{atf_enabled:r,mesh_uplink_1:l,mesh_uplink_2:i,mesh_sta_vap_enabled:o}=e,E=Object(O.getRadios)(e),s=null===(c=null===(n=E.find(({radio:e})=>e===$m.a.NA.type))||void 0===n?void 0:n.vwire_enabled)||void 0===c||c,m=null==o||o,d=s||m,{priorityUplink1:_,priorityUplink2:u}=w_(t,a,l,i),b=d&&s!==m||m&&(_||u)?"manual":"auto";return{radios:E.reduce((e,{name:t,radio:a,ht:n,channel:c,tx_power_mode:r,tx_power:l,min_txpower:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||O.DEFAULT_HT[a],channel:Number(c)||"auto",tx_power_mode:r||"auto",tx_power:l||i||0,vwire_enabled:null!=o?o:a===$m.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||R_,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:r||!1,meshingEnabled:d,meshingMode:b,uplinkMeshEnable:m,uplinkPriority1:l||"",uplinkPriority2:i||""}},validate:(e,{activeItem:{radio_table:t},intl:a})=>{const n={};return e.radios.forEach((e,c)=>{const{tx_power_mode:r,tx_power:l,name:i,type:o}=e;if("custom"===r){const e=t.find(e=>e.radio===o&&e.name===i);if(e){const{min_txpower:t,max_txpower:r}=e;(l<t||l>r)&&(n.radios||(n.radios=[]),n.radios[c]={tx_power:a.formatMessage({id:"DEVICE_VALIDATION_HINT_RANGE"},{min:t,max:r})})}}}),n},handleSubmit:()=>{}}),F_={createToast:na.c,tabGetDataFunction:j.h,tabSubmitFunction:j.j,tabResetFunction:j.i,setPriorityUplink:O.setPriorityUplink,unsetPriorityUplink:O.unsetPriorityUplink};var U_=Object(Tt.compose)(Object(o.connect)((e,{activeItem:t})=>({countryChannels:Object(vi.d)(e),mgmtSettings:Object(Ei.selectMgmtSettings)(e),priorityUplinkOptions:y(e),uplinkItems:Object(O.selectDeviceEnhancedUplinkTable)(e,t)}),F_),M.f,M_)(L_);const k_=Object(l.c)(F.a)`
  margin-bottom: 16px;
`,z_=Object(l.c)(F.a)`
  > label:not(:first-child) {
    margin-left: 18px;
  }
`;var B_=Object(Ja.g)({mapPropsToValues:({activeItem:{bandsteering_mode:e}={}})=>({bandsteering_mode:e||at.BandsteeringMode.OFF}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({setFormDirty:e,dirty:t,values:a,resetForm:n,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(c.useEffect)(()=>{e("bandSteering",t)},[e,t]),Object(c.useEffect)(()=>(i(Object(j.h)({bandSteering:()=>a})),i(Object(j.j)({bandSteering:()=>n({values:a})})),i(Object(j.i)({bandSteering:n})),()=>{i(Object(j.h)({bandSteering:null})),i(Object(j.j)({bandSteering:null})),i(Object(j.i)({bandSteering:null}))}),[i,n,a]);const E=Object(c.useCallback)(e=>e.target.checked&&l("bandsteering_mode",e.target.name),[l]);return r.a.createElement(k_,null,r.a.createElement(z_,null,r.a.createElement(qE.a,{id:"band-steer-off",checked:a.bandsteering_mode===at.BandsteeringMode.OFF,name:at.BandsteeringMode.OFF,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_OFF"})),r.a.createElement(qE.a,{id:"band-steer-prefer-5g",checked:a.bandsteering_mode===at.BandsteeringMode.PREFER_5G,name:at.BandsteeringMode.PREFER_5G,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_PREFER_5G"})),r.a.createElement(qE.a,{id:"band-steer-equal",checked:a.bandsteering_mode===at.BandsteeringMode.EQUAL,name:at.BandsteeringMode.EQUAL,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_BALANCED"}))))});const W_=Object(l.c)(F.a)`
  padding: 0 32px;
`;var H_=Object(Tt.compose)(Za(["general","led","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(W_,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:m})},...Object(Yn.f)(e)?[{id:"bandsteer",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>r.a.createElement(B_,{activeItem:e,setFormDirty:t})}]:[],{id:"led",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(m_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Ni,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(E).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});var G_=({activeItem:{ip:e,satisfaction:t,uptime:a,lan_ip:n},activeItem:c})=>{var l,i;const o=Object(O.getDeviceIp)(c),E=Object(O.getDeviceLoadAverage)(c),{na:s,ng:m,naNumSta:d,ngNumSta:_}=Object(O.getSatisfactionByRadio)(c),u=Object(Fe.d)(t);return r.a.createElement(F.a,{flexDirection:"column"},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_2G"})),_&&0!==m?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(m,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(m||0,100))]}}):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_5G"})),d&&0!==s?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(s,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(s||0,100))]}}):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"})))),Object(O.isUdmPro)(c)?r.a.createElement(r.a.Fragment,null,(null===(l=null==c?void 0:c.wan1)||void 0===l?void 0:l.ip)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS_INDEXED",values:{wanIndex:1}})),r.a.createElement(V.a,{size:"body"},c.wan1.ip)),(null===(i=null==c?void 0:c.wan2)||void 0===i?void 0:i.ip)&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS_INDEXED",values:{wanIndex:2}})),r.a.createElement(V.a,{size:"body"},c.wan2.ip))):r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},e)),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},o)),a>0&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_UPTIME"})),r.a.createElement(V.a,{size:"body"},Object(Xt.a)(a))),r.a.createElement(rl,{activeItem:c}),E&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement(V.a,{size:"body"},E)),!Object(O.isUdmPro)(c)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tm,{activeItem:c}),r.a.createElement(am,{activeItem:c})))};const Y_=Object(l.c)("div")`
  height: 100%;
`,$_=Object(l.c)("div")`
  display: table;
  width: 100%;
`,K_=Object(l.c)("div")`
  display: table-row;
`,X_=Object(l.c)("div")`
  display: table-cell;
  vertical-align: top;
`,q_=Object(l.c)("span")`
  display: table-cell;
  padding-left: 12px;
  padding-bottom: 8px;
  text-align: right;
  vertical-align: top;
`;var Z_=Object(M.f)((function({activeItem:e,radioType:t,radioName:a,intl:n,hideChUtil:c=!1}){const{radio_table:l,radio_table_stats:i,type:o}=e,E=l.find(e=>e.radio===t&&(!a||e.name===a)),s=null==i?void 0:i.find(e=>e.radio===t),m=Object(O.getRadioChannelUtilization)(e,s),{totalPackets:d,totalBytes:_,droppedPercentage:u,retryPercentage:b}=Object(O.getApRadioStats)(e,E,"rx"),{totalPackets:p,totalBytes:I,droppedPercentage:g,retryPercentage:C}=Object(O.getApRadioStats)(e,E,"tx"),R=Object(O.getRadioStatsTransmitPowerString)(e,s,n);return r.a.createElement(Y_,null,r.a.createElement($_,null,r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(gm.a,{device:e,radio:E,hidePowerInfo:!0,textSize:"body"})))),r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"}))),r.a.createElement(q_,null,R?r.a.createElement(V.a,{size:"body"},R):r.a.createElement(V.a,{size:"body"}," "))),r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},p," / ",I))),r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},d," / ",_))),r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},C,"% / ",g,"%"))),r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},b,"% / ",u,"%"))),!c&&m&&r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},`${m.total}% / ${m.selfRx}% / ${m.selfTx}%`))),s&&o!==O.DeviceType.UBB&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},s["user-num_sta"]))),r.a.createElement(K_,null,r.a.createElement(X_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_GUESTS"}))),r.a.createElement(q_,null,r.a.createElement(V.a,{size:"body"},s["guest-num_sta"]))))))}));const J_=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Q_=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,eu=Object(l.c)("div")`
  margin-bottom: 16px;
`;function tu({activeItem:e}){return r.a.createElement(J_,null,r.a.createElement(Q_,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO2G_SHORT"})),r.a.createElement(Z_,{activeItem:e,radioType:Im.b.NG}),r.a.createElement(eu,null),r.a.createElement(Q_,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),r.a.createElement(Z_,{activeItem:e,radioType:Im.b.NA}))}const au=Object(l.c)("div")`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`,nu=l.a`
  th {
    padding-left: 0;
    padding-right: 0;
  }
`,cu=l.a`
  :hover {
    cursor: pointer;
  }

  td {
    padding-left: 0;
    padding-right: 25px;
  }
`,ru=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  white-space: pre;
`,lu=Object(l.c)("div")`
  margin: 20px 0;
`,iu=Object(l.c)(V.a)`
  color: ${({theme:e})=>e.colors.blue};
`,ou=[{id:"name",minWidth:85,growthFactor:1,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"})),renderCell:e=>r.a.createElement(iu,{size:"body",truncate:!0},Object(I.getClientDisplayName)(e))},{id:"connection",minWidth:50,growthFactor:2,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_CONNECTION"})),renderCell:e=>e.type===I.ClientType.WIRED?r.a.createElement(V.a,{size:"body",truncate:!0},e.network_name):e.type===I.ClientType.WIRELESS?r.a.createElement(V.a,{size:"body",truncate:!0},e.essid):r.a.createElement(M.c,{id:"COMMON_NA"})},{id:"signal",minWidth:50,growthFactor:1,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_SIGNAL"})),renderCell:e=>e.type===I.ClientType.WIRELESS?r.a.createElement(ru,null,dl(e.rssi)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"})):r.a.createElement(M.c,{id:"COMMON_NA"})},{id:"tx_rate",minWidth:50,growthFactor:1,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_TX_RATE"})),renderCell:e=>e.type!==I.ClientType.VPN?!e.is_wired&&r.a.createElement(me.a,{size:"body",type:"bytes",input:1e3*e.tx_rate,options:"bitrate"}):r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"COMMON_NA"}))}];var Eu=({activeItem:e,params:t,path:a,history:c})=>{const{site:l,page:i,subPage:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(Object(I.selectClientsByDevice)(e));return Object(L.f)([Object(I.fetchClients)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],r.a.createElement(au,null,r.a.createElement(Pe.a,{items:m,disableColumnFilters:!0,headerRowClassName:nu,rowClassName:cu,columns:ou,initialSortBy:"name",renderFooter:()=>m.length>0?r.a.createElement(lu,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:e=>{const t=Object(n.i)(a,{id:e.mac,site:l,page:i,panel:"about",subPage:E});c.push(t),s(Object(j.g)({type:d.b.CLIENT,mac:e.mac}))}})))};const su=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,mu=l.a`
  padding: 0;
  margin: 0;
`;var du=function({activeItem:e,...t}){const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Om,{activeItem:e}),r.a.createElement(Cl,{activeItem:e}),r.a.createElement(su,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(G_,{activeItem:e})},...OE(e),{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>r.a.createElement(tu,{activeItem:e})},{id:"apGroups",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>r.a.createElement(dm,null)},{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>r.a.createElement(Eu,Object.assign({activeItem:e},t))},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>r.a.createElement(mE,Object.assign({activeItem:e},t))}],contentClassName:mu,multiOpen:!0,renderOnlyExpandedContent:!0})))};const _u=Object(l.c)(F.a,{shouldForwardProp:e=>!["marginTop","marginBottom"].includes(e)})`
  width: 100%;
  margin-top: ${({marginTop:e})=>e||0}px;
  margin-bottom: ${({marginBottom:e})=>e||0}px;
  justify-content: space-between;
  align-items: center;
`,uu=Object(l.c)(w.W)`
  margin-right: auto;
  margin-left: 5px;
  height: 14px;
  width: 14px;
`,bu=Object(l.c)(pn.a)`
  margin-left: 0 !important;
`,pu=Object(l.c)("div")`
  display: flex;

  > label:not(:first-child) {
    margin-left: 18px;
  }
`,Ou=Object(Ja.g)({mapPropsToValues:({usgSettings:{mss_clamp_mss:e,mss_clamp:t,arp_cache_timeout:a,arp_cache_base_reachable:n,echo_server:c},activeItem:{jumboframe_enabled:r=!1,flowctrl_enabled:l=!1}})=>({jumboframe_enabled:r,flowctrl_enabled:l,usgSettings:{mss_clamp:t||Ei.USG_DEFAULTS.mss_clamp,mss_clamp_mss:e||Ei.USG_DEFAULTS.mss_clamp_mss,arp_cache_timeout:a||"normal",arp_cache_base_reachable:n||Ei.USG_DEFAULTS.arp_cache_base_reachable,echo_server:c||Ei.USG_DEFAULTS.echo_server}}),validationSchema:Qa.a.object().shape({jumboframe_enabled:Qa.a.boolean(),flowctrl_enabled:Qa.a.boolean(),usgSettings:Qa.a.object().shape({mss_clamp:Qa.a.string(),mss_clamp_mss:Qa.a.number().when("mss_clamp",{is:Ei.MssClamp.CUSTOM,then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP").required().min(Ei.USG_DEFAULTS.min_mss_clamp_mss).max(Ei.USG_DEFAULTS.mss_clamp_mss)}),arp_cache_timeout:Qa.a.string(),arp_cache_base_reachable:Qa.a.number().when("arp_cache_timeout",{is:"custom",then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT").required().min(1).max(Ei.USG_DEFAULTS.max_arp_cache_base_reachable)}),echo_server:Qa.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(Cn.f,r.a.createElement(M.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}}))})}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Iu=Object(Tt.compose)(Object(o.connect)(e=>({usgSettings:Object(Ei.selectUsgSettings)(e)})),Ou)(({values:e,dirty:t,resetForm:a,setFormDirty:n,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(c.useEffect)(()=>{const{usgSettings:t,...n}=e;i(Object(j.h)({services:()=>n})),i(Object(j.j)({services:()=>{i(Object(Ei.saveSettings)({key:Ei.USG_DEFAULTS.key,...t})),a({values:e})}})),i(Object(j.i)({services:a}))},[e]),Object(c.useEffect)(()=>{n("services",t)},[t]);const E=e=>{e.target.checked&&l("usgSettings.mss_clamp",e.target.name)},s=e=>{e.target.checked&&l("usgSettings.arp_cache_timeout",e.target.name)},m=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?l("usgSettings.echo_server",""):l("usgSettings.echo_server",e.target.name))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(_u,{marginBottom:10},r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),r.a.createElement(_u,{marginBottom:24},r.a.createElement(pu,null,r.a.createElement(qE.a,{id:"mssClampingAuto",checked:e.usgSettings.mss_clamp===Ei.MssClamp.AUTO,name:Ei.MssClamp.AUTO,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"})),r.a.createElement(qE.a,{id:"mssClampingCustom",checked:e.usgSettings.mss_clamp===Ei.MssClamp.CUSTOM,name:Ei.MssClamp.CUSTOM,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"})),r.a.createElement(qE.a,{id:"mssClampingDisabled",checked:e.usgSettings.mss_clamp===Ei.MssClamp.DISABLED,name:Ei.MssClamp.DISABLED,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"})))),e.usgSettings.mss_clamp===Ei.MssClamp.CUSTOM&&r.a.createElement(_u,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},r.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",label:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING",name:"usgSettings.mss_clamp_mss"})),r.a.createElement(_u,{marginBottom:10},r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT"}))),r.a.createElement(_u,{marginBottom:24},r.a.createElement(pu,null,r.a.createElement(qE.a,{id:"normal",checked:"normal"===e.usgSettings.arp_cache_timeout,name:"normal",onChange:s},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_NORMAL"})),r.a.createElement(qE.a,{id:"min-dhcp-lease",checked:"min-dhcp-lease"===e.usgSettings.arp_cache_timeout,name:"min-dhcp-lease",onChange:s},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_MIN_DHCP_LEASE"})),r.a.createElement(qE.a,{id:"custom",checked:"custom"===e.usgSettings.arp_cache_timeout,name:"custom",onChange:s},r.a.createElement(M.c,{id:"COMMON_LABEL_CUSTOM"})),r.a.createElement(bu,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP"}),width:180,position:"left"},r.a.createElement(uu,{isActive:!0})))),"custom"===e.usgSettings.arp_cache_timeout&&r.a.createElement(_u,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},r.a.createElement(Jn.Field,{full:!0,label:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_LABEL",placeholder:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_PLACEHOLDER",name:"usgSettings.arp_cache_base_reachable"})),r.a.createElement(_u,{marginBottom:10},r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),r.a.createElement(_u,{marginBottom:0},r.a.createElement(pu,null,r.a.createElement(qE.a,{id:"echoServerDefault",checked:e.usgSettings.echo_server===Ei.USG_DEFAULTS.echo_server,name:Ei.USG_DEFAULTS.echo_server,onChange:m},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"})),r.a.createElement(qE.a,{id:"echoServerIpOrHostname",checked:e.usgSettings.echo_server!==Ei.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:m},r.a.createElement(M.c,{id:"COMMON_LABEL_CUSTOM"})),r.a.createElement(bu,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},r.a.createElement(uu,{isActive:!0})))),e.usgSettings.echo_server!==Ei.USG_DEFAULTS.echo_server&&r.a.createElement(_u,{marginBottom:0,marginTop:24,alignItems:"flex-start",flexDirection:"column"},r.a.createElement(Jn.Field,{full:!0,label:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"usgSettings.echo_server"})))});const gu=Object(l.c)(F.a)`
  width: 100%;
`,Cu=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Ru=l.a`
  padding: 0;
  margin: 0;
`;var vu=Object(Tt.compose)(Za(["general","screen","network","services"]),M.f)((function({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E}){const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:b,mac:p}=e,I=Object(o.useDispatch)(),g=[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:u})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Iu,{activeItem:e,setFormDirty:t})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0,disableForget:!0})}];return(Object(O.hasActiveUnifiCare)(e)||Object(O.isUnifiCareEligible)(e))&&(g.forEach(e=>{e.openByDefault=!1}),g.unshift({id:"unifiCare",label:r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>r.a.createElement(HE,{device:e}),openByDefault:!0})),Object(Yn.f)(e)&&"bandsteer"!==g[2].id&&g.splice(2,0,{id:"bandsteer",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>r.a.createElement(B_,{activeItem:e,setFormDirty:t})}),r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(gu,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Cu,{variant:"secondary",renderOnlyExpandedContent:!0,items:g,contentClassName:Ru,multiOpen:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});I(Object(O.updateDeviceWithIdEndpoint)(e,b,p,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(m).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))}));var Tu=({activeItem:e,forUdm:t,forUdmPro:a,disableUsageChart:n=!1})=>{const l=Object(o.useDispatch)();return Object(c.useEffect)(()=>{l(Object(De.fetchDeviceUsageReport)(e.mac))},[]),r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],forUdm:t,pickDatumsWithKey:a?"gw":null,heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"}),t&&r.a.createElement(Jl,{gwMac:e.mac,keys:["num_sta"],forUdm:t,heading:"DEVICE_GATEWAY_CLIENTS_STAT_CHART_HEADER"}))};const hu=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Pu=l.a`
  padding: 0;
  margin: 0;
`;var Du=function({activeItem:e,...t}){const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),n=t_(e),l=[],i=Object(o.useSelector)(O.selectIsUdr);return n.length&&l.push({id:"channelUsage",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>r.a.createElement(c_,{ChannelBars:n})}),Object(O.isDeviceConnected)(e)&&Object(Yn.d)(e,O.WIFI_CAPS.RF_SCAN)&&l.push({id:"rfEvironment",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>r.a.createElement(Wd,{activeItem:e})}),a&&l.push({id:"statistics",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>r.a.createElement(Tu,Object.assign({activeItem:e,forUdm:!0},t,{disableUsageChart:i}))}),r.a.createElement(hu,{variant:"secondary",items:l,contentClassName:Pu,multiOpen:!0,renderOnlyExpandedContent:!0})};const fu=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var yu=({activeItem:e,...t})=>{const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),n=!Object(O.hasActiveUnifiCare)(e)&&Object(O.isUnifiCareEligible)(e);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(HE,{device:e,hideWarning:!0}),r.a.createElement(zl,{device:e}),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{activeItem:e}),r.a.createElement(fu,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(G_,{activeItem:e})},...OE(e),{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))},{id:"networks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(mE,{activeItem:e})},...Object(O.hasActiveUnifiCare)(e)?[{id:"unifiCare",label:r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>r.a.createElement(HE,{device:e,hideWarning:!0})}]:[]],multiOpen:!0,renderOnlyExpandedContent:!0})))};const Su=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,Au=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Nu=({activeItem:e})=>r.a.createElement(Su,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),r.a.createElement(Au,null),r.a.createElement(Tu,{activeItem:e,forUdmPro:!0}));const ju=Object(l.c)(F.a)`
  padding: 0 32px;
`;var Lu=Object(Tt.compose)(Za(["general","lcmScreen","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Xa),_=Object(o.useSelector)(qa),{_id:u,mac:b}=e,p=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(ju,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Ci,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(mE,{activeItem:e}),r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a}))},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Iu,{activeItem:e,setFormDirty:t})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0,disableForget:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;p(Object(O.updateDeviceWithIdEndpoint)(a,u,b,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))});const xu=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Vu=Object(l.c)(V.a)`
  margin-bottom: 4px;
`,wu=Object(l.c)("div")`
  margin-bottom: 16px;
`;function Mu({activeItem:e}){return Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e])?r.a.createElement(xu,null,r.a.createElement(Vu,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),r.a.createElement(Z_,{activeItem:e,radioType:Im.b.NA}),r.a.createElement(wu,null),r.a.createElement(Vu,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),r.a.createElement(Z_,{activeItem:e,radioType:Im.b.AD})):null}var Fu=({activeItem:e})=>{var t,a;const n=null!==(t=e.distance)&&void 0!==t?t:Object(O.isUBB)(e)&&(null===(a=e.peer_ubb)||void 0===a?void 0:a.distance);return void 0!==n?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_DISTANCE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n," ",r.a.createElement(M.c,{id:"COMMON_UNIT_METERS_SHORT"}))):null};var Uu=({activeItem:e})=>{var t,a,n,c;const l=null!==(a=null===(t=e.p2p_stats)||void 0===t?void 0:t.throughput)&&void 0!==a?a:Object(O.isUBB)(e)&&(null===(c=null===(n=e.peer_ubb)||void 0===n?void 0:n.p2p_stats)||void 0===c?void 0:c.throughput);return l>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_SPEED"})),r.a.createElement(me.a,{size:"body",type:"bytes",color:"secondary",input:l,options:"bitrate"})):null};var ku=({activeItem:e})=>{const t=Object(O.getLinkQuality)(e);return t>0?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"})),r.a.createElement(me.a,{size:"body",type:"percent",input:t/100,style:{color:Ct.a.getGradientColor(t/100)}})):null};function zu({activeItem:e}){return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(ks,{activeItem:e}),r.a.createElement(Fu,{activeItem:e}),r.a.createElement(Uu,{activeItem:e}),r.a.createElement(ku,{activeItem:e}),r.a.createElement(zs,{activeItem:e}))}const Bu=Object(l.c)(V.a)`
  margin-top: 16px; // 16
  margin-bottom: 4px; // 4
`,Wu=l.a`
  margin-right: -17px;
`,Hu=Object(l.c)(pn.a)`
  margin-left: 4px; // 4
  display: inline-block;
  vertical-align: text-bottom;
`;var Gu=({deviceData:e,ubbDeviceType:t,pendingAdoption:a})=>{const{mac:n,ip:c,link_capacity:l,uptime:i,has_temperature:o,general_temperature:E,uplink:s}=e,{rssi:m,tx_rate:d,tx_packets:_,rx_rate:u,tx_bytes:b,"tx_bytes-r":p,rx_packets:O,rx_bytes:I,"rx_bytes-r":g,speed:C}=s||{},R=g+p,v=Object(uc.y)(e);return r.a.createElement(F.a,{flexDirection:"column"},n&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MAC"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)),c&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},c)),!a&&r.a.createElement(r.a.Fragment,null,l>0&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e6*l/8,options:"bitrate"})),o&&!!E&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:E}}))),i&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),r.a.createElement(me.a,{type:"uptime",color:"secondary",size:"body",input:i})),r.a.createElement(rl,{activeItem:e}),v&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement("span",null,r.a.createElement(V.a,{color:"secondary",size:"body"},Object(uc.y)(e)),r.a.createElement(Hu,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE_TOOLTIP"}),width:200,position:"bottomRight",tooltipClassName:Wu,portal:!0},r.a.createElement(w.W,{isActive:!0})))),!!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Bu,{color:"primary",weight:"bold"},r.a.createElement(M.c,{id:t===mb.STATION?"DEVICE_PROPERTY_UPLINK_WIRELESS":"DEVICE_PROPERTY_UPLINK_WIRED"})),t===mb.STATION&&r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},ml(m)," (",dl(m)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")),d&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RATE"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e3*d/8,options:"bitrate"})),u&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RATE"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e3*u/8,options:"bitrate"}))),t===mb.ACCESS_POINT&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},C))),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},O&&I?r.a.createElement(r.a.Fragment,null,O.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",input:I,color:"secondary",size:"body"})):"0.00 / 0.00")),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},_&&b?r.a.createElement(r.a.Fragment,null,_.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",input:b,color:"secondary",size:"body"})):"0.00 / 0.00")),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ACTIVITY"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:R,options:"bitrate"})))))},Yu=a(2046),$u=a.n(Yu);const Ku=Object(l.c)(F.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,Xu=Object(l.c)(F.a)`
  text-align: center;
  width: 122px;
`,qu=Object(l.c)(F.a)`
  padding-top: 50px;
  width: 100%;
`,Zu=l.e`
  0% {
    width: 5%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }  
`,Ju=l.e`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }  
  50% {
    opacity: 0;
  }
`,Qu=Object(l.c)("div")`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${({theme:e})=>e.colors.neutralBackground};
`,eb=Object(l.c)("div")`
  animation: ${Zu} 5s infinite;
  width: 100%;
  opacity: 1;
  height: 5px;
  margin-top: -1px;
  position: absolute;
  background-image: linear-gradient(
    to right,
    ${({linkAnimationColor:e})=>e},
    transparent 30%,
    transparent 70%,
    ${({linkAnimationColor:e})=>e}
  );
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;

  &:after {
    content: '';
    display: block;
    background-color: ${({linkAnimationColor:e})=>e};
    width: 100%;
    position: absolute;
    border-radius: 3px;
    height: 100%;
    opacity: 0;
    animation: ${Ju} 5s infinite;
  }
`,tb=Object(l.c)(F.a)`
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`,ab=Object(l.c)("img")`
  height: 120px;
  transform: scaleX(${({flip:e})=>e?-1:1});
`,nb=Object(l.c)("div")`
  position: absolute;
  ${({left:e})=>e?`left: ${e}px`:""};
  ${({right:e})=>e?`right: ${e}px`:""};
  width: 3px;
  height: 107px;
  border-radius: 1px;
  background-image: radial-gradient(transparent 0%, ${({color:e})=>e} 60%, transparent 100%);
  filter: drop-shadow(0px 0px 0.5px ${({color:e})=>e}) opacity(0.6);
`,cb=Object(l.c)(F.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,rb=Object(l.c)(me.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,lb=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,ib=Object(l.c)(F.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,ob=Object(l.c)(w.U)`
  margin-right: 12px;
`;function Eb({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},link_quality:n,led_override_color:c}=e,l=Object(Fe.c)(n),i=!t&&Object(uc.Kd)(e),o=!t&&Object(uc.Jd)(e),E=Object(dt.a)($m.a[Object(dt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?we.a["color-danger"]:t||"warning"===l?we.a["color-warning"]:we.a["color-success"],r.a.createElement(r.a.Fragment,null,r.a.createElement(Ku,{justifyContent:"space-between"},r.a.createElement(Xu,{flexDirection:"column"},r.a.createElement(cb,null,r.a.createElement(ab,{src:$u.a}),r.a.createElement(nb,{color:c||we.a["blue-0"],left:23})),r.a.createElement(lb,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})),r.a.createElement(lb,{color:"secondary"},E)),r.a.createElement(qu,{flexDirection:"column",alignItems:"center"},r.a.createElement(Qu,null,r.a.createElement(eb,{linkAnimationColor:s})),r.a.createElement(tb,{flexDirection:"column"},i&&r.a.createElement(rb,{type:"percent",input:n/100,style:{color:Ct.a.getGradientColor(n/100)}}),r.a.createElement(lb,{color:"primary",weight:"bold"},i&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),r.a.createElement(Xu,{flexDirection:"column"},r.a.createElement(cb,null,r.a.createElement(ab,{src:$u.a,flip:!0}),r.a.createElement(nb,{color:a.led_override_color||we.a["blue-0"],right:23})),r.a.createElement(lb,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})),r.a.createElement(lb,{color:"secondary"},E))),(t||o)&&r.a.createElement(ib,{alignItems:"center"},r.a.createElement(ob,{width:24,height:24}),r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const sb=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var mb;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(mb||(mb={}));var db=({activeItem:e})=>{const{peer_ubb:t,adopted:a}=e,n=Object(O.getUplinkAttrs)(e)||{},l=null==t?void 0:t.uplink,i=t&&(!Object(O.getIsUbbPeerAdopted)(e)||!a),o=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Eb,{activeItem:e,pendingAdoption:i}),r.a.createElement(zl,{device:e}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{activeItem:e}),r.a.createElement(sb,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(zu,{activeItem:e})},...t?[{id:"station",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"}),"  (",r.a.createElement(M.c,{id:"wireless"===(null==l?void 0:l.type)?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>r.a.createElement(Gu,{deviceData:t,ubbDeviceType:mb.STATION,pendingAdoption:i})}]:[],{id:"accessPoint",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"}),"  (",r.a.createElement(M.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>r.a.createElement(Gu,{deviceData:e,ubbDeviceType:mb.ACCESS_POINT,pendingAdoption:i})},...i?[]:[{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>r.a.createElement(Mu,{activeItem:e})}]],multiOpen:!0,renderOnlyExpandedContent:!0})))};const _b=Object(l.c)(V.a)`
  display: block;
  position: relative;
  padding-right: 20px;
  margin-right: 15px;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 12px;
    border-bottom: 2px solid ${({legendcolor:e})=>e};
  }

  :last-of-type {
    margin-right: 0;
  }
`,ub=Object(l.c)(V.a)`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  padding-left: 10px;
  padding-top: 10px;
`,bb=Object(l.c)(F.a)`
  margin-bottom: 20px;
`,pb=Object(Hl.a)(6,e=>({value:e,label:String(e)})).reverse(),Ob=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var Ib=Object(_n.b)(r.a.memo(e=>{const{mac:t,keys:a,heading:n,theme:c,colors:l,noLegend:i=!1,fetchReport:E,legend:s}=e,m=Object(o.useSelector)(Object(De.selectDeviceStatReport)(t,E,De.OBJECT.UBB,a)),d=Object(o.useSelector)(Gl.O),_={},u=Date.now(),b=Object(ht.startOfHour)(Object(ht.addHours)(u,1)).getTime(),p=d?"H:ss":"ha",O=Object(Yl.b)(b,p),I=O[0].value,g=Object(Wl.m)(m.filter(e=>e.time>I).map(e=>({...e,x:e.time})),St.a.MINUTES.grain);g[0]&&a[0]in g[0]&&g.forEach(e=>{a.forEach((t,a)=>{_[t]||(_[t]={key:t,lineColor:l[a],maxY:0,data:[]}),_[t].data.push({x:e.x,y:e[t]})})});const C=a.map(e=>_[e]?_[e].data.map(e=>e.y||0):0),R=Math.max(...C.flat(),4);let v=pb;return R>5&&(v=Object(Yl.e)(R,6)),r.a.createElement(r.a.Fragment,null,!i&&r.a.createElement(bb,{justifyContent:"flex-end"},r.a.createElement(F.a,null,s.map((e,t)=>r.a.createElement(_b,{legendcolor:l[t],key:e},r.a.createElement(M.c,{id:e}))))),r.a.createElement(F.a,null,r.a.createElement(ub,{color:"primary"},r.a.createElement(M.c,{id:n})),r.a.createElement(Pt.a,{xAxis:O,yAxis:v,width:305,height:150,margin:[0,0,20,25],labelClassName:Ob(c),renderChartElements:(e,t,n)=>r.a.createElement(r.a.Fragment,null,a.map(a=>_[a]&&_[a].data.length&&r.a.createElement(Dt.a,{key:_[a].key,data:_[a].data,maxY:n,mouseData:t,getCoordinates:e,variant:"line",lineColor:_[a].lineColor,dashed:!1,hideMissingData:!0})))})))},(e,t)=>e.mac===t.mac&&Object(oi.a)(e.keys,t.keys)));const gb=Object(l.c)("div")`
  padding: 16px 32px 32px 32px;
`,Cb=Object(l.c)("div")`
  margin-top: ${({marginTop:e})=>e||0}px;
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,Rb=[{value:mb.ACCESS_POINT,label:"DEVICE_TYPE_UBB_AP"},{value:mb.STATION,label:"DEVICE_TYPE_UBB_STATION"}];const vb=Object(Ja.g)({mapPropsToValues:()=>({device:mb.ACCESS_POINT,channel:"wlan0"}),handleSubmit:null});var Tb=Object(Tt.compose)(M.f,vb)((function({activeItem:e,values:{device:t,channel:a},intl:n}){const l=Object(o.useDispatch)(),{mac:i,peer_ubb:E={}}=e,s=t===mb.ACCESS_POINT?i:E.mac,m=[a+"-rx_dropped",a+"-tx_dropped"],d=[a+"-tx_retries"],_=Object(c.useMemo)(()=>Object(O.getRadios)(e).map(e=>({value:e.name,label:`${n.formatMessage({id:"DEVICE_LABEL_RADIO_"+e.radio.toUpperCase()})} (${e.name})`})),[e.radio_table]);return Object(c.useEffect)(()=>{l(Object(De.fetchDeviceUsageReport)(s,De.OBJECT.UBB))},[t]),Object(c.useEffect)(()=>{l(Object(De.fetchDeviceDroppedReport)(s,De.OBJECT.UBB,m)),l(Object(De.fetchDeviceRetriesReport)(s,De.OBJECT.UBB,d))},[a,t]),r.a.createElement(gb,null,r.a.createElement(Cb,{marginTop:9,marginBottom:28},r.a.createElement(tn.a,{type:"dropdown",name:"device",label:"DEVICE_PROPERTIES_LABEL_SELECT_DEVICE",options:Rb,full:!0,translateLabel:!0,translateOptions:!0})),r.a.createElement(Ib,{mac:s,keys:["cpu","mem"],colors:[we.a["orange-1"],we.a["blue-3"]],heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT",fetchReport:De.fetchDeviceUsageReport,legend:["COMMON_WORD_CPU","COMMON_WORD_MEMORY"]}),r.a.createElement(Cb,{marginTop:35,marginBottom:30},r.a.createElement(tn.a,{type:"dropdown",full:!0,name:"channel",translateLabel:!0,label:"DEVICE_PROPERTIES_LABEL_SELECT_CHANNEL",options:_})),r.a.createElement(Ib,{mac:s,keys:m,colors:[we.a["purple-1"],we.a["purple-1"]],noLegend:!0,fetchReport:De.fetchDeviceDroppedReport,heading:"DEVICE_PROPERTIES_LABEL_DROPPED"}),r.a.createElement(Cb,{marginBottom:30}),r.a.createElement(Ib,{mac:s,keys:d,colors:[we.a["purple-1"]],noLegend:!0,fetchReport:De.fetchDeviceRetriesReport,heading:"DEVICE_PROPERTIES_LABEL_RETRIES"}))}));const hb=Object(Ja.g)({mapPropsToValues:({activeItem:e,nativeNetworks:t})=>({mgmt_network_id:Object(O.getDeviceNetworkId)(t,e)}),validationSchema:Qa.a.object().shape({mgmt_network_id:Qa.a.string()}),handleSubmit:()=>null});var Pb=Object(Tt.compose)(Object(o.connect)(e=>({nativeNetworks:Object(un.selectNativeNetworks)(e)}),{}),hb)(({nativeNetworks:e=[],values:t,resetForm:a,dirty:n,setFormDirty:l,setFormInvalid:i,isValid:E})=>{const s=Object(o.useDispatch)();Object(c.useEffect)(()=>(s(Object(j.h)({vlan:()=>t})),s(Object(j.j)({vlan:()=>a({values:t})})),s(Object(j.i)({vlan:a})),()=>{s(Object(j.h)({vlan:null})),s(Object(j.j)({vlan:null})),s(Object(j.i)({vlan:null}))}),[s,a,t.mgmt_network_id]),Object(c.useEffect)(()=>{l("vlan",n),i("vlan",!E)},[l,i,n,E]);const m=e.map(e=>({value:e._id,label:e.name}));return r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:m,translateLabel:!0})});const Db=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,fb=Object(l.c)(F.a)`
  width: 100%;
`;var yb,Sb=Object(Tt.compose)(Za(["general","tags","network","vlan"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,formStates:l,intl:i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(fb,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Db,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1,isUbbXg:!0})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>r.a.createElement(Pb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0})}],renderOnlyExpandedContent:!0,multiOpen:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length&&l[t])return"peerUbbLed"===t?{...e,peerUbbLed:n}:{...e,...n}}return e},{}),t=Object(p.a)(e,"peerUbbLed"),a={...t,peer_ubb:{...t.peer_ubb,...t.mgmt_network_id?{mgmt_network_id:t.mgmt_network_id}:{}}};return u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});!function(e){e.ACCESS_POINT="ap",e.STATION="sta"}(yb||(yb={}));const Ab=Object(l.c)("div")`
  margin-bottom: 16px;
`,Nb=Object(l.c)("div",{shouldForwardProp:e=>"visible"!==e})`
  ${({visible:e})=>e?"":"display: none;"}
`,jb=Object(l.c)(V.a)`
  margin-left: 10px;
`;var Lb=({ap:e,sta:t,formName:a})=>{const[n,l]=Object(c.useState)(yb.ACCESS_POINT),i=e=>l(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ab,null,r.a.createElement(F.a,{marginBottom:"12px"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_UBB_CHOOSE_DEVICE"}))),r.a.createElement(F.a,{marginBottom:"16px"},r.a.createElement(F.a,{marginRight:"18px"},r.a.createElement(qE.a,{checked:n===yb.ACCESS_POINT,name:`ubb-device-select-${a}-${yb.ACCESS_POINT}`,id:`ubb-device-select-${a}-${yb.ACCESS_POINT}`,onChange:()=>i(yb.ACCESS_POINT)}),r.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${yb.ACCESS_POINT}`},r.a.createElement(jb,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})))),r.a.createElement(F.a,null,r.a.createElement(qE.a,{checked:n===yb.STATION,name:`ubb-device-select-${a}-${yb.STATION}`,id:`ubb-device-select-${a}-${yb.STATION}`,onChange:()=>i(yb.STATION)}),r.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${yb.STATION}`},r.a.createElement(jb,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})))))),r.a.createElement(Nb,{visible:n===yb.ACCESS_POINT},e),r.a.createElement(Nb,{visible:n===yb.STATION},t))};const xb=Object(l.c)("div")`
  margin-bottom: 20px;
`,Vb=Object(l.c)(F.a)`
  margin-bottom: ${({marginBottom:e})=>e}px;
`,wb=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,Mb=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Fb=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{const{config_network:t,peer_ubb:a,ip:n}=e,{type:c="dhcp",ip:r=n||"",netmask:l="",gateway:i="",dns1:o="",dns2:E="",dnssuffix:s=""}=t,{type:m="dhcp",ip:d=a.ip||"",netmask:_="",gateway:u="",dns1:b="",dns2:p="",dnssuffix:O=""}=a.config_network;return{config_network:{type:c,ip:r,netmask:l,gateway:i,dns1:o,dns2:E,dnssuffix:s},peer_ubb:{config_network:{type:m,ip:d,netmask:_,gateway:u,dns1:b,dns2:p,dnssuffix:O}}}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Qa.a.object().shape({config_network:Li,peer_ubb:Qa.a.object().shape({config_network:Li})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:n,resetForm:l,isValid:i})=>{const E=Object(o.useDispatch)();return Object(c.useEffect)(()=>(E(Object(j.h)({network:()=>{const{config_network:e,peer_ubb:{config_network:t}}=n,a={config_network:{type:e.type},peer_ubb:{config_network:{type:t.type}}};return"dhcp"!==e.type&&(a.config_network={...e}),"dhcp"!==t.type&&(a.peer_ubb.config_network={...t}),a}})),E(Object(j.j)({network:()=>l({values:n})})),E(Object(j.i)({network:l})),()=>{E(Object(j.h)({network:null})),E(Object(j.j)({network:null})),E(Object(j.i)({network:null}))}),[E,l,n]),Object(c.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),r.a.createElement(Lb,{formName:"network",sta:r.a.createElement(r.a.Fragment,null,r.a.createElement(xb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Mb})),"static"===n.config_network.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),r.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),r.a.createElement(Vb,{marginBottom:20,justifyContent:"space-between"},r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0}))))),ap:r.a.createElement(r.a.Fragment,null,r.a.createElement(xb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"peer_ubb.config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Mb})),"static"===n.peer_ubb.config_network.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"peer_ubb.config_network.ip",full:!0})),r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"peer_ubb.config_network.dns1",full:!0}))),r.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"peer_ubb.config_network.netmask",full:!0})),r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"peer_ubb.config_network.dns2",full:!0}))),r.a.createElement(Vb,{marginBottom:20,justifyContent:"space-between"},r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"peer_ubb.config_network.gateway",full:!0})),r.a.createElement(wb,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"peer_ubb.config_network.dnssuffix",full:!0})))))})});const Ub=Object(l.c)(F.a)`
  margin-top: -15px;
`,kb=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`,zb=l.a`
  th {
    padding-left: 0;
    padding-right: 10px;
  }
`,Bb=l.a`
  text-align: left;
  padding-left: 0;
  padding-right: 10px;
`,Wb=l.a`
  padding: 0;
  margin: 0;
  text-align: left;
`;function Hb({activeItem:{downlink_table:e}}){const t=Object(o.useSelector)(O.selectDevicesData),a=Object(o.useDispatch)(),n=[{id:"mac",sortable:!0,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP_SHORT"})),renderCell:e=>{if(!e)return null;const n=t.find(t=>t.mac===e.mac);return n?r.a.createElement(kb,{name:"propertyPanelButton",onClick:()=>a(Object(j.g)({type:d.b.DEVICE,mac:e.mac})),size:"small",className:Wb,variant:"link"},Object(Y.c)(n)):e.mac}},{id:"rssi",sortable:!0,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),renderCell:e=>r.a.createElement(V.a,{color:"secondary",size:"body"},ml(e.rssi)," (",dl(e.rssi)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];return r.a.createElement(Ub,null,r.a.createElement(Pe.a,{items:e||[],idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:zb,cellClassName:Bb,columns:n,renderFooter:()=>r.a.createElement("div",null,e&&e.length>0?r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_DEVICES_NOT_FOUND"}))),rowHeight:30}))}const Gb=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,Yb=Object(l.c)(F.a)`
  width: 100%;
`;var $b=Object(Tt.compose)(Za(["general","tags","screen","peerUbbScreen","network","vlan","radios"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,formStates:l,intl:i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Yb,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Gb,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1})},{id:"stationLed",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_STATION_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e.peer_ubb,formName:"peerUbbScreen",setFormDirty:t})},{id:"apLed",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AP_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>r.a.createElement(Pb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(Hb,{activeItem:e})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],renderOnlyExpandedContent:!0,multiOpen:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length&&l[t])return{...e,...n}}return e},{}),t=Object(p.a)(e,"peerUbbScreen"),a={...t,peer_ubb:{...t.peer_ubb,...e.peerUbbScreen,...t.mgmt_network_id?{mgmt_network_id:t.mgmt_network_id}:{}}};u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const Kb=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Xb=Object(l.c)(V.a)`
  margin-bottom: 4px;
`,qb=Object(l.c)("div")`
  margin-bottom: 16px;
`;function Zb({activeItem:e}){return Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e])?r.a.createElement(Kb,null,r.a.createElement(Xb,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),r.a.createElement(Z_,{activeItem:e,radioType:Im.b.NA}),r.a.createElement(qb,null),r.a.createElement(Xb,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),r.a.createElement(Z_,{activeItem:e,radioType:Im.b.AD})):null}function Jb({activeItem:e}){return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(ks,{activeItem:e}),r.a.createElement(Fu,{activeItem:e}),r.a.createElement(Uu,{activeItem:e}),r.a.createElement(ku,{activeItem:e}),r.a.createElement(zs,{activeItem:e}))}var Qb=a(2047),ep=a.n(Qb);const tp=Object(l.c)(F.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,ap=Object(l.c)(F.a)`
  text-align: center;
  width: 122px;
`,np=Object(l.c)(F.a)`
  padding-top: 50px;
  width: 100%;
`,cp=l.e`
  0% {
    width: 5%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }  
`,rp=l.e`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }  
  50% {
    opacity: 0;
  }
`,lp=Object(l.c)("div")`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${({theme:e})=>e.colors.neutralBackground};
`,ip=Object(l.c)("div")`
  animation: ${cp} 5s infinite;
  width: 100%;
  opacity: 1;
  height: 5px;
  margin-top: -1px;
  position: absolute;
  background-image: linear-gradient(
    to right,
    ${({linkAnimationColor:e})=>e},
    transparent 30%,
    transparent 70%,
    ${({linkAnimationColor:e})=>e}
  );
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;

  &:after {
    content: '';
    display: block;
    background-color: ${({linkAnimationColor:e})=>e};
    width: 100%;
    position: absolute;
    border-radius: 3px;
    height: 100%;
    opacity: 0;
    animation: ${rp} 5s infinite;
  }
`,op=Object(l.c)(F.a)`
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`,Ep=Object(l.c)("img")`
  height: 120px;
  transform: scaleX(${({flip:e})=>e?-1:1});
`,sp=Object(l.c)("div")`
  position: absolute;
  ${({left:e})=>e?`left: ${e}px`:""};
  ${({right:e})=>e?`right: ${e}px`:""};
  width: 3px;
  height: 107px;
  border-radius: 1px;
  background-image: radial-gradient(transparent 0%, ${({color:e})=>e} 60%, transparent 100%);
  filter: drop-shadow(0px 0px 0.5px ${({color:e})=>e}) opacity(0.6);
`,mp=Object(l.c)(F.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,dp=Object(l.c)(me.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,_p=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,up=Object(l.c)(F.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,bp=Object(l.c)(w.U)`
  margin-right: 12px;
`;function pp({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},led_override_color:n}=e,c=Object(uc.bb)(e),l=Object(Fe.c)(c),i=!t&&Object(uc.Kd)(e),o=!t&&Object(uc.Jd)(e),E=Object(dt.a)($m.a[Object(dt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?we.a["color-danger"]:t||"warning"===l?we.a["color-warning"]:we.a["color-success"],r.a.createElement(r.a.Fragment,null,r.a.createElement(tp,{justifyContent:"space-between"},r.a.createElement(ap,{flexDirection:"column"},r.a.createElement(mp,null,r.a.createElement(Ep,{src:ep.a}),r.a.createElement(sp,{color:n||we.a["blue-0"],left:23})),r.a.createElement(_p,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})),r.a.createElement(_p,{color:"secondary"},E)),r.a.createElement(np,{flexDirection:"column",alignItems:"center"},r.a.createElement(lp,null,r.a.createElement(ip,{linkAnimationColor:s})),r.a.createElement(op,{flexDirection:"column"},i&&r.a.createElement(dp,{type:"percent",input:c/100,style:{color:Ct.a.getGradientColor(c/100)}}),r.a.createElement(_p,{color:"primary",weight:"bold"},i&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),r.a.createElement(ap,{flexDirection:"column"},r.a.createElement(mp,null,r.a.createElement(Ep,{src:ep.a,flip:!0}),r.a.createElement(sp,{color:a.led_override_color||we.a["blue-0"],right:23})),r.a.createElement(_p,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})),r.a.createElement(_p,{color:"secondary"},E))),(t||o)&&r.a.createElement(up,{alignItems:"center"},r.a.createElement(bp,{width:24,height:24}),r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const Op=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Ip;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(Ip||(Ip={}));var gp=function({activeItem:e}){const{peer_ubb:t,adopted:a}=e,n=Object(O.getUplinkAttrs)(e),l=null==t?void 0:t.uplink,i=t&&(!Object(O.getIsUbbPeerAdopted)(e)||!a),o=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(pp,{activeItem:e,pendingAdoption:i}),r.a.createElement(zl,{device:e}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{activeItem:e}),r.a.createElement(Op,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>r.a.createElement(Jb,{activeItem:e})},...t?[{id:"station",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})," "," ",!!l&&r.a.createElement(M.c,{id:"wireless"===l.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>r.a.createElement(Gu,{deviceData:e,ubbDeviceType:Ip.STATION,pendingAdoption:i})}]:[],{id:"accessPoint",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})," "," ",!!n&&r.a.createElement(M.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>r.a.createElement(Gu,{deviceData:t,ubbDeviceType:Ip.ACCESS_POINT,pendingAdoption:i})},...i?[]:[{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>r.a.createElement(Zb,{activeItem:e})}]],multiOpen:!0,renderOnlyExpandedContent:!0})))};var Cp=({wifiNetworkNames:e})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WIFI_NETWORK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;function Rp({activeItem:e}){const t=Object(o.useSelector)(Ks),a=Object($s.getWifiNetworkNames)(t,!1),n=Object(c.useMemo)(()=>[{Comp:ks,key:"Uptime"},{Comp:Cp,props:{wifiNetworkNames:a},key:"WiFiNetwork"}],[e,a]);return r.a.createElement(F.a,{flexDirection:"column"},n.map(({Comp:t,props:a={},key:n})=>r.a.createElement(t,Object.assign({key:n,activeItem:e},a))))}const vp=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Tp=({activeItem:e})=>{const t=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),t&&r.a.createElement(vp,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(Rp,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))};const hp=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var Pp=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:c}=Object(O.getUsppUtilization)(e),l="warning"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),r.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&r.a.createElement(hp,{size:"medium"}),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),r.a.createElement(Hd.a,{items:[{value:n,variant:c}]}))};const Dp=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,fp=Object(l.c)("div")`
  margin-bottom: 16px;
`;var yp=({activeItem:e})=>r.a.createElement(Dp,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(fp,null),r.a.createElement(Pp,{activeItem:e}));const Sp=Object(l.c)(F.a)`
  margin-bottom: 24px;
  justify-content: space-between;
`,Ap=Object(l.c)(de.a)`
  margin-top: 12px;
  justify-content: flex-end;
`;var Np=Object(Ja.g)({mapPropsToValues:({activeItem:{outlet_table:e=[],outlet_overrides:t=[]}})=>({...e[0],...t[0]}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,submitForm:t,values:a,dirty:n,isValid:l,resetForm:i,setFormDirty:E,setFormInvalid:s})=>{const m=Object(o.useDispatch)();return Object(c.useEffect)(()=>{E("general",n),s("general",!l)},[E,s,n,l]),Object(c.useEffect)(()=>(m(Object(j.h)({general:()=>({outlet_overrides:[{...a}]})})),m(Object(j.j)({general:t})),m(Object(j.i)({general:i})),()=>{m(Object(j.h)({general:null})),m(Object(j.j)({general:null})),m(Object(j.i)({general:null}))}),[m,i,t,a]),r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Sp,{flexDirection:"column"},r.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME",placeholder:"DEVICE_PROPERTIES_LABEL_NAME"})),r.a.createElement(Sp,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"relay_state"})),r.a.createElement(Sp,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"cycle_enabled"})),r.a.createElement(Sp,{flexDirection:"column"},r.a.createElement(F.a,{flexDirection:"column",width:"65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(Ap,{variant:"link",onClick:()=>m(Object(O.powerCycleOutlet)(e,a)),Icon:r.a.createElement(w.Ab,null)},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))))});const jp=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Lp=Object(Tt.compose)(Za(["general","network","screen","manage"]),M.f)(({activeItem:{mac:e,_id:t},activeItem:a,setFormDirty:n,setFormInvalid:c,isDirty:l,isInvalid:i,intl:E})=>{const s=Object(o.useDispatch)(),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Xa),_=Object(o.useSelector)(qa);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(jp,{variant:"secondary",items:[{id:"general",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(Np,{activeItem:a,setFormDirty:n,setFormInvalid:c})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:a,setFormDirty:n,disableLedBrightnessField:!0,disableLedOverrideColor:!0})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:a,setFormDirty:n,setFormInvalid:c})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:a,disableDebug:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:l,isInvalid:i,onFormSubmit:()=>{const a=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});s(Object(O.updateDeviceWithIdEndpoint)(a,t,e,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))});var xp=({activeItem:e,wan:t=!1,lan:a=!1})=>{const n=Object(c.useMemo)(()=>a?Object(_c.c)("LAN",e):null==e?void 0:e.ip,[a,e]),l=Object(c.useMemo)(()=>{let e="DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS";return t?e="DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS":a&&(e="DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"),r.a.createElement(M.c,{id:e})},[t,a]);return n?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},l),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null};var Vp=({activeItem:e})=>{const t=Object(o.useSelector)(Ks),a=Object($s.getWifiNetworkNames)(t,!1),n=Object(c.useMemo)(()=>[{Comp:xp,props:{wan:!0},key:"IpAddress"},{Comp:ks,key:"Uptime"},{Comp:Cp,props:{wifiNetworkNames:a},key:"WiFiNetwork"}],[e,a]);return r.a.createElement(F.a,{height:"100%",flexDirection:"column"},n.map(({Comp:t,props:a={},key:n})=>r.a.createElement(t,Object.assign({key:n,activeItem:e},a))))};const wp=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var Mp=({activeItem:e})=>{const t=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),t&&r.a.createElement(wp,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(Vp,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))};const Fp=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var Up=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:c}=Object(O.getUspsUtilization)(e),l="warning"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),r.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&r.a.createElement(Fp,{size:"medium"}),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),r.a.createElement(Hd.a,{items:[{value:n,variant:c}]}))};const kp=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,zp=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Bp=({activeItem:e})=>r.a.createElement(kp,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(zp,null),r.a.createElement(Up,{activeItem:e}));const Wp=Object(l.c)(pn.a,{shouldForwardProp:e=>!["cellSize","isEnabled","marginSize"].includes(e)})`
  width: ${({cellSize:e})=>e||"20px"};
  height: ${({cellSize:e})=>e||"20px"};
  align-items: center;
  background-color: ${({isEnabled:e,theme:t})=>e?t.motifPalette.success:we.a["grey-4"]};
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  display: flex;
  position: relative;

  &:not(:first-child) {
    margin-left: ${({marginSize:e})=>e||"10px"};
  }

  div:last-child {
    right: -15px;
  }
`,Hp=l.a`
  margin-left: 15px;
`,Gp=Object(l.c)("div",{shouldForwardProp:e=>"rotateIcon"!==e})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: rotate(${({rotateIcon:e})=>e?"-90deg":0});
    max-width: 70%;
    max-height: 70%;
  }
`,Yp=Object(l.c)(w.gc)`
  max-width: 100% !important;
  max-height: 100% !important;
`,$p=Object(l.c)(F.a,{shouldForwardProp:e=>"isPowerMeterSupported"!==e})`
  width: ${({isPowerMeterSupported:e})=>e?"134px":"100px"};
`;var Kp=({cellData:e,marginSize:t,cellSize:a,rotateIcon:c,tooltipPosition:l="bottomRight"})=>{const i=Object(n.k)(),{path:o}=Object(n.n)(),{site:E,page:s,id:m,panel:d}=Object(n.m)(),_=Object(Yn.n)(e,"POWER_METER");return r.a.createElement(Wp,{isEnabled:e.relay_state,tooltipClassName:Hp,marginSize:t,cellSize:a,onClick:t=>{var a,c;null===(a=null==t?void 0:t.preventDefault)||void 0===a||a.call(t),null===(c=null==t?void 0:t.stopPropagation)||void 0===c||c.call(t),i.push(Object(n.i)(o,{site:E,page:s,id:m,panel:d,subPanel:"outlets",subPanelId:e.index}))},message:_&&e.outletType===O.OutletType.STANDARD?r.a.createElement($p,{flexDirection:"column",justifyContent:"space-between",isPowerMeterSupported:!0},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.index)),r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NAME"})),r.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},e.name)),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.outlet_power||0).toFixed(2)}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_ENERGY"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},"0.00 ",r.a.createElement(M.c,{id:"COMMON_UNIT_KWH"}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.outlet_current||0).toFixed(2)}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.outlet_voltage||0).toFixed(2)}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},Number(e.outlet_power_factor||0).toFixed(2)))):r.a.createElement($p,{flexDirection:"column",justifyContent:"space-between"},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.index)),r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NAME"})),r.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},e.name)),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_ENABLED"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.cycle_enabled&&r.a.createElement(w.u,{size:"small"}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.relay_state&&r.a.createElement(w.u,{size:"small"})))),position:l,portal:!0},r.a.createElement(Gp,{rotateIcon:c},"usb"===e.outletType?r.a.createElement(Yp,null):r.a.createElement(w.qb,null)))};const Xp=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding-left: 10px;
`,qp=Object(l.c)("div")`
  table {
    tr {
      cursor: pointer;
    }
  }
`,Zp=Object(l.c)(w.g)`
  position: absolute;
  right: 8px;
  color: inherit;
`;var Jp=r.a.memo((function({deviceData:e,deviceData:{outlet_table:t},hidePorts:a}){const l=Object(n.k)(),{path:i}=Object(n.n)(),{site:o,page:E,id:s,panel:m}=Object(n.m)(),d=Object(O.getOutletNumbers)(e),{outletsDiagram:_,primaryOutletGroupCount:u}=Object(O.getDeviceSpecs)(e),b=null==t?void 0:t.some(e=>Object(Yn.n)(e,"POWER_METER")),p=Object(c.useMemo)(()=>(e=>[{id:"name",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({name:e})=>r.a.createElement(V.a,{size:"body",truncate:!0},e)},...e?[{id:"power",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_POWER"})),renderCell:({outlet_power:e})=>r.a.createElement(V.a,{size:"body"},e?Number(e).toFixed(2):"-")}]:[],{id:"outletStatus",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{alignItems:"center"},e.portStatus?r.a.createElement(V.a,{size:"body"},e.portStatus):r.a.createElement(r.a.Fragment,null,r.a.createElement(Kp,{cellData:e,rotateIcon:e.rotateIcon,tooltipPosition:"topRight"}),r.a.createElement(Xp,null,r.a.createElement(M.c,{id:e.relay_state?"DEVICE_OUTLET_STATE_ENABLED":"DEVICE_OUTLET_STATE_DISABLED"})))),r.a.createElement(Zp,{size:"small"}))}])(b),[b]),I=_?Object(O.determineRowLayoutsFromOutletDiagramConfig)(_,e):Object(O.determineRowLayoutsFromOutletConfig)(u,e),g=Object(c.useMemo)(()=>Lc(e,[],{position:"topRight"}),[e]),C=Object(c.useMemo)(()=>[...I.flat().filter(e=>!!e).sort(({outletNumber:e},{outletNumber:t})=>e-t),...a?[]:g],[a,g,I]).map((t,a)=>{const n=Object(O.getActiveOutletInfo)(e,t.outletNumber-1);return{...t.portStatus?t:n,id:t.portStatus?"port-"+t.id:t.outletNumber+a,outletType:t.portStatus?null:Object(O.getOutletTypeByNumber)(d,t.outletNumber),rotateIcon:null==t?void 0:t.rotateIcon}});return r.a.createElement(qp,null,r.a.createElement(Pe.a,{columns:p,rowHeight:35,disableColumnFilters:!0,items:C,hideCellOverflow:!1,onRowClick:e=>l.push(Object(n.i)(i,{site:o,page:E,id:s,panel:m,subPanel:e.index?"outlets":"ports",subPanelId:e.index?e.index:e.port_idx}))}))}),({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);var Qp=({activeItem:e,hidePorts:t,...a})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Jp,Object.assign({deviceData:e,hidePorts:t},a)));const eO=Object(l.c)("div")`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-gap: 0 15px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,tO=Object(l.c)("div")`
  padding-bottom: 6px;
  padding-top: 6px;
  font-size: 9px;
  color: ${({theme:e})=>e.motifPalette.text02};
  display: flex;
  align-items: center;
  flex: 0 0 25%;
  max-width: 25%;

  > span {
    white-space: nowrap;
    margin-left: 4px;
  }
`,aO=Object(l.c)(ua.a,{shouldForwardProp:e=>"background"!==e})`
  background-color: ${e=>e.background};
  border-radius: 1px;
`;var nO=r.a.memo(({isForDiagram:e,deviceData:t})=>{const a=Object(uc.ce)(t),n=Object(uc.ab)(t),c=Object(L.m)();return r.a.createElement(eO,null,r.a.createElement(tO,null,r.a.createElement(aO,{variant:"success"}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_ENABLED"}))),r.a.createElement(tO,null,r.a.createElement(aO,{background:c.motifPalette.neutral04}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_OUTLET_STATE_DISABLED"}))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tO,null,r.a.createElement(aO,{variant:"warning"}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_MBPS",values:{speed:"100/10"}}))),r.a.createElement(tO,null,r.a.createElement(aO,{background:c.motifPalette.neutral07}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tO,null,r.a.createElement(w.Bb,{width:12,height:12}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_OUTLET_STATE_DELIVERING"}))),r.a.createElement(tO,null,r.a.createElement(aO,{background:c.motifPalette.neutral07}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))))});const cO=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,rO=Object(l.c)(F.a)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`,lO=Object(l.c)(w.W)`
  margin-right: 12px;
`,iO=Object(l.c)("div")`
  width: 5px;
`;var oO=r.a.memo(({deviceData:e})=>{const{outletsDiagram:t,primaryOutletGroupCount:a}=Object(O.getDeviceSpecs)(e),n=Object(O.isUspPduPro)(e),c=t?Object(O.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(O.determineRowLayoutsFromOutletConfig)(a,e),l=Object(Bo.a)(c.map(e=>e.length));let i=l>10?"3px":"10px";const o=l>10?"19px":"20px";return c&&0!==c.length?r.a.createElement(r.a.Fragment,null,c.map((t,a)=>r.a.createElement(rO,{"align-items":"flex-end",key:"OutletLayoutRow-"+(a+1)},t.map((t,c)=>{if(!t)return r.a.createElement(iO,{key:`OutletSpacer-${a+1}-${c+1}`});const l=`Outlet-${a+1}-${c+1}`,E=Object(O.getActiveOutletInfo)(e,void 0,t.outletNumber),s=t&&E&&{outletType:t.outletType,...E};return n&&1===a&&c>2&&(i="16px"),n&&1===a&&c>3&&(i="54px"),r.a.createElement(Kp,{cellData:s,key:l,marginSize:i,cellSize:o,rotateIcon:t.rotateIcon})})))):r.a.createElement(cO,null,r.a.createElement(lO,{isActive:!0}),r.a.createElement(M.c,{id:"DEVICE_DIAGRAM_MISSING"}))},({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);const EO=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`,sO=Object(l.c)("div")`
  margin-top: 1px;
  margin-left: 10px;
`,mO=Object(l.c)("div")`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  div:first-child {
    margin-bottom: 12px;
  }
`,dO=Object(l.c)(w.a)`
  color: ${({theme:e})=>e.motifPalette.warning};
  height: 18px;
  width: 18px;
  margin-right: 10px;
`,_O=Object(l.c)(w.s)`
  color: ${({theme:e})=>e.motifPalette.success};
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;var uO=({deviceData:e,hidePorts:t})=>{const{usedPower:a,maxPower:c}=Object(O.getUspPduOutletUtilization)(e),l=Object(n.k)();return r.a.createElement(EO,null,r.a.createElement(F.a,{justifyContent:"center"},r.a.createElement("div",null,r.a.createElement(oO,{deviceData:e})),e.port_table&&!t&&r.a.createElement(sO,null,r.a.createElement(Go,{deviceData:e,portSizeOverride:"19px",history:l}))),r.a.createElement(nO,{isForDiagram:!0,deviceData:e}),a>c&&r.a.createElement(mO,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(dO,null),r.a.createElement(V.a,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_WARNING"}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(_O,null),r.a.createElement(V.a,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_INFO"})))))};const bO=Object(l.c)(F.a)`
  padding: 0 32px;
`;var pO=Object(Tt.compose)(Za(["general","led","network","manage"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),{_id:m,mac:d}=e,_=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(uO,{deviceData:e,hidePorts:!0}),r.a.createElement(bO,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(Qp,{hidePorts:!0,activeItem:e})},{id:"led",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(m_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],renderOnlyExpandedContent:!0,multiOpen:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});_(Object(O.updateDeviceWithIdEndpoint)(e,m,d,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});function OO({activeItem:e}){const{usedPower:t,totalCurrent:a}=Object(O.getUspPduOutletUtilization)(e),n=[{messageId:"DEVICE_HEADER_POWER_USAGE",value:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:t}}))},{messageId:"DEVICE_PROPERTY_OVERVIEW_ENERGY",value:r.a.createElement(r.a.Fragment,null,"0 ",r.a.createElement(M.c,{id:"COMMON_UNIT_KWH"}))},{messageId:"DEVICE_PROPERTY_OVERVIEW_CURRENT",value:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:a}}))}];return r.a.createElement(F.a,{flexDirection:"column"},[ks].map(t=>r.a.createElement(t,{key:t.name,activeItem:e})),n.map(({messageId:e,value:t})=>r.a.createElement(Zt,{key:e},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e})),r.a.createElement(V.a,{size:"body"},t))))}const IO=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var gO=r.a.memo(({activeItem:e,...t})=>{const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),a&&r.a.createElement(IO,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(OO,{activeItem:e})},{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK"}),renderContent:()=>r.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const CO=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var RO=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:c}=Object(O.getUspPduOutletUtilization)(e),l="warning"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),r.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&r.a.createElement(CO,{size:"medium"}),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),r.a.createElement(Hd.a,{items:[{value:n,variant:c}]}))};const vO=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,TO=Object(l.c)("div")`
  margin-bottom: 16px;
`;var hO=({activeItem:e})=>r.a.createElement(vO,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(TO,null),r.a.createElement(RO,{activeItem:e}));const PO=Object(l.c)(F.a)`
  padding: 16px 32px;
`;var DO=Object(Tt.compose)(Za(["general","outlets","lcmScreen","network","manage"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l,...i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(uO,{deviceData:e}),r.a.createElement(PO,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(Qp,{activeItem:e})},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Ci,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});var fO=({activeItem:{lte_ext_ant:e},flexProps:t})=>r.a.createElement(Zt,{flexProps:t},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),!0===e?r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ENABLED"})):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_DISABLED"})));var yO=({activeItem:{lte_poe:e},flexProps:t})=>r.a.createElement(Zt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),r.a.createElement(V.a,{color:"secondary",size:"body"},!0===e?r.a.createElement(M.c,{id:"COMMON_ENABLED"}):r.a.createElement(M.c,{id:"COMMON_DISABLED"})));var SO=({activeItem:e})=>r.a.createElement(nm,null,[{C:zs,flexProps:{}},{C:ks},{C:rl},{C:Bs,flexProps:{}},{C:fO},{C:yO,flexProps:{}}].map(({C:t,flexProps:a={}})=>r.a.createElement(t,{activeItem:e,flexProps:a,key:t.name}))),AO=a(789);const NO=Object(l.c)(pn.a)`
  width: fit-content;

  & > div > button > span > div {
    display: flex;

    & > span {
      margin: 0 !important;
    }
  }
`,jO=Object(l.c)(de.a)`
  display: block;
  white-space: nowrap;
  height: 31px;
  padding: 0;
  color: ${({color:e})=>e};
  line-height: 14px;
`,LO=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${Oo.n.warning};
`,xO=Object(l.c)("div")`
  width: 170px;
  line-height: 18px;
`;var VO=({mac:e,isUnreachable:t,isUnavailable:a})=>{const n=Object(o.useDispatch)(),l=t||a,i=t?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNREACHABLE_TOOLTIP":a?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE_TOOLTIP":"LTE_ACTIONS_SUBSCRIPTION_CHECK_TOOLTIP",E=l?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE":"LTE_ACTIONS_SUBSCRIPTION_CHECK",s=Object(c.useCallback)(()=>{l||n(Object(AO.f)([e]))},[l]);return r.a.createElement(NO,{position:"topRight",portal:!0,message:r.a.createElement(xO,null,r.a.createElement(M.c,{id:i}))},r.a.createElement(jO,{variant:"inline",onClick:s,disabled:l},r.a.createElement(LO,null),r.a.createElement(V.a,{size:"caption",color:l?"secondary":"info"},r.a.createElement(M.c,{id:E}))))};const wO=Object(l.c)("div")`
  text-align: center;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 32px 40px;
`,MO=Object(l.c)(V.a)`
  font-size: 16px;
`,FO=Object(l.c)("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  // UNCOMMENT THIS WHEN GRAPH IS WORKING
  // margin-bottom: 16px;
`,UO=Object(l.c)(F.a)`
  margin-bottom: 8px;
  line-height: 1.5;
  text-align: left;
`,kO=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${Oo.n.warning};
`,zO=Object(l.c)("div")`
  width: 16px;
  min-width: 16px;
  margin-right: 8px;
`,BO=Object(l.c)("div")`
  display: inline-block;
`,WO=Object(l.c)("div")`
  margin-top: ${({theme:e})=>e.spacing["spacing-m"]};
`;var HO=({device:e,params:t,path:a,history:l})=>{const{site:i,page:E,subPage:s}=t,m=Object(O.isUltePro)(e),{license_state:d}=e,_=Object(O.isAdopted)(e),u=Object(o.useDispatch)(),b=Object(O.isUlte)(e)&&Object(dt.a)(e,"lte_subscription_status")===O.BILLING_SUBSCRIPTION_STATUS.PAST_DUE,p=Object(O.isUlte)(e)&&Object(dt.a)(e,"lte_subscription_status")===O.BILLING_SUBSCRIPTION_STATUS.CANCELED,I=Object(o.useSelector)(Zi.selectEnv),g=Object(Qi.b)(I),C=`https://${g}/payments`,R=`https://${g}/subscriptions`,v=Object(O.calculateUsage)(e),T=Oo.n[v.state],h="warning"===v.state||"danger"===v.state&&!v.hasOverages,P=v.hasOverages&&!v.isSuspended,D=Object(o.useSelector)(vi.d),f=Object(O.isDeviceWithCountryLockedWarning)(D,e),y=Object(O.isLicenseWithWarning)(e),S=Object(O.isUlteDeviceNotConnectedToUlte)(e),A=Object(O.isUlteDeviceNotRegisteredWithUlte)(e),N=Object(o.useSelector)(Gl.H),j=Object(o.useSelector)(Gl.s),L=Object(o.useSelector)(Gl.y),x=Object(c.useMemo)(()=>j||L,[j,L]),w=Object(c.useMemo)(()=>Object(O.isSubscriptionCheckRequired)(e),[e]),F=Object(c.useMemo)(()=>Object(O.isSubscriptionApiUnreachable)(e),[e]),U=Object(c.useMemo)(()=>Object(O.isUlte)(e)&&!!N&&!Object(O.isDeviceOwner)(e,N),[e,N]),k=Object(c.useMemo)(()=>_&&x&&(w||F||U),[_,x,w,F,U]);return Object(c.useEffect)(()=>{Object.keys(D).length||u(vi.a)},[D,u]),_&&r.a.createElement(wO,null,r.a.createElement(FO,null,r.a.createElement(MO,null,r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_HEADER_LABEL"})),r.a.createElement(V.a,{color:"secondary",size:"header-l"},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{color:T}},Object(Kt.c)(v.usedBytes,"bytes","JEDEC")),r.a.createElement("span",null,e.lte_soft_limit>0&&"/"),r.a.createElement("span",null,e.lte_soft_limit>0&&Object(Kt.c)(v.softLimitBytes,"bytes","JEDEC"))))),r.a.createElement(FO,null,e.lte_soft_limit>0&&r.a.createElement(Rt.a,{variant:v.state,value:v.width,size:"medium"})),r.a.createElement(WO,null,h&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_APPROACHING_LIMIT",values:{amount:v.width+"%"}})),P&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement("div",null,r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_SOFT_LIMIT",values:{softLimit:Object(Kt.c)(v.softLimitBytes,"bytes","JEDEC"),hardLimit:Object(Kt.c)(v.hardLimitBytes,"bytes","JEDEC")}}))),v.isSuspended&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_HARD_LIMIT"})),"success"!==v.state&&r.a.createElement(UO,null,r.a.createElement(zO,null),r.a.createElement(BO,null,r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT"})," ",r.a.createElement(de.a,{variant:"inline",onClick:t=>{t.preventDefault(),t.stopPropagation();const c=Object(n.i)(a,{id:e.mac,site:i,page:E,panel:"settings",subPage:s});l.push(c)}},r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT_BUTTON"})))),(b||p)&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.b,{id:p?"DEVICE_DATA_USAGE_LTE_SERVICE_CANCELED":"DEVICE_DATA_USAGE_LTE_PAYMENT_OVERDUE",values:{billingUrl:C}})),f&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NOTICE_COUNTRY_LOCKED_WARNING_BODY"})),y&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.b,{id:`DEVICE_PROPERTIES_NOTICE_LICENSE_${d.toUpperCase()}_BODY`,values:{url:R}})),S&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_CONNECTED_WARNING_BODY"})),A&&r.a.createElement(UO,null,r.a.createElement(kO,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_REGISTERED_WARNING_BODY"})),k&&!m&&r.a.createElement(VO,{mac:e.mac,isApplicable:w,isUnreachable:F,isUnavailable:U})))},GO=a(1173);const YO=({value:e,valueUnit:t,translationId:a})=>void 0!==e&&r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:a})),"boolean"==typeof e?r.a.createElement(V.a,{color:"secondary",size:"body"},e?r.a.createElement(M.c,{id:"COMMON_ENABLED"}):r.a.createElement(M.c,{id:"COMMON_DISABLED"})):r.a.createElement(V.a,{color:"secondary",size:"body"},e,t&&" "+t));var $O=({activeItem:e,isUltePro:t})=>{const{lte_radio_mode:a,lte_rssi:n,lte_ecio:c,lte_io:l,lte_ip:i,lte_sinr:o,lte_rsrq:E,lte_rsrp:s,lte_snr:m,lte_rx_chan:d,lte_tx_chan:_,lte_rscp:u,lte_apn:b,lte_connected:p,lte_pdptype:O,lte_band:I,lte_networkoperator:g,lte_rat:C,lte_state:R,lte_signal:v,lte_imei:T,lte_iccid:h,lte_cell_id:P,lte_hard_limit:D,lte_soft_limit:f,total_tx_bytes:y,total_rx_bytes:S}=e,A=(a||"").toUpperCase(),N=Object(Kt.c)(D,"bytes","JEDEC"),j=Object(Kt.c)(f,"bytes","JEDEC");return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(YO,{value:i,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IP"}),r.a.createElement(YO,{value:b,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_APN"}),r.a.createElement(YO,{value:O,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_PDP_TYPE"}),r.a.createElement(YO,{value:Object(GO.a)(p),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CONNECTED"}),r.a.createElement(YO,{value:I,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_BAND"}),r.a.createElement(YO,{value:P,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CELL_ID"}),y&&r.a.createElement(YO,{value:Object(Kt.c)(y,"bytes","JEDEC"),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_TRANSMITTED"}),S&&r.a.createElement(YO,{value:Object(Kt.c)(S,"bytes","JEDEC"),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_RECEIVED"}),r.a.createElement(YO,{value:g,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_NETWORK_OPERATOR"}),r.a.createElement(YO,{value:C,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RAT"}),r.a.createElement(YO,{value:Object(GO.a)(R),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_STATUS"}),r.a.createElement(YO,{value:v,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SIGNAL"}),A===at.LteRadioMode.Lte&&r.a.createElement(r.a.Fragment,null,r.a.createElement(YO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),r.a.createElement(YO,{value:E,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRQ"}),r.a.createElement(YO,{value:s,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRP"}),r.a.createElement(YO,{value:m,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SNR"}),r.a.createElement(YO,{value:d,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RX_CHANNEL"}),r.a.createElement(YO,{value:_,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_TX_CHANNEL"})),(A===at.LteRadioMode.Cdma||A===at.LteRadioMode.Hdr)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(YO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),r.a.createElement(YO,{value:c,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ECIO"})),A===at.LteRadioMode.Hdr&&r.a.createElement(r.a.Fragment,null,r.a.createElement(YO,{value:l,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IO"}),r.a.createElement(YO,{value:o,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SINR"})),A===at.LteRadioMode.Gsm&&r.a.createElement(YO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),A===at.LteRadioMode.Tdma&&r.a.createElement(YO,{value:u,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSCP"}),r.a.createElement(YO,{value:T,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IMEI"}),r.a.createElement(YO,{value:h,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ICCID"}),Number(N)>0&&r.a.createElement(YO,{value:N,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_LIMIT"}),Number(N)>0&&r.a.createElement(YO,{value:j,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_WARNING"}))};const KO=Object(l.c)(de.a)`
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`;var XO=function({activeItem:{uplink:{rx_bytes:e,"rx_bytes-r":t,rx_packets:a,speed:c,tx_bytes:l,"tx_bytes-r":i,tx_packets:E}={}},activeItem:s,isUltePro:m,params:_,path:u,history:b}){const{site:p,page:I,subPage:g}=_,C=Object(o.useSelector)(O.selectDevicesData),R=t+i,v=Object(o.useSelector)(e=>Object(O.getUplink)(Object(O.selectDevicesData)(e),s)),T=Object(O.getUplinkDisplayName)(s,v),h=Object(o.useDispatch)(),P=Object(O.getUplinkRemotePort)(C,s);return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK"})),r.a.createElement(KO,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(u,{id:v.mac,site:p,page:I,panel:"overview",subPage:g});b.push(t),h(Object(j.g)({type:d.b.DEVICE,mac:v.mac}))}},T)),r.a.createElement(il,{portSpeed:c}),m&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==P?void 0:P.poe_power)||0}}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIVITY_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},a?a.toLocaleString():null,"/",r.a.createElement(me.a,{type:"bytes",input:e,size:"body"}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIVITY_UP_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},E?E.toLocaleString():null,"/",r.a.createElement(me.a,{type:"bytes",input:l,size:"body"}))),m&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_ACTIVITY"})),r.a.createElement(me.a,{type:"bytes",input:R,options:"bitrate",size:"body"})))};const qO=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  .styledAccordionContent {
    padding: 0;
    margin: 0;
  }
`;var ZO=({activeItem:e,...t})=>{var a;const n=Object(O.isAdopted)(e),c=Object(O.isUltePro)(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(HO,Object.assign({device:e},t)),r.a.createElement(Cl,{activeItem:e}),r.a.createElement(qO,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(SO,{activeItem:e})},{id:"lte",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_UNIFI_ACCORDION_HEADER_LTE"}),renderContent:()=>r.a.createElement($O,{activeItem:e,isUltePro:c})},...(null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.mac)?[{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}),renderContent:()=>r.a.createElement(XO,Object.assign({activeItem:e,isUltePro:c},t))}]:[]],contentClassName:"styledAccordionContent",renderOnlyExpandedContent:!0,multiOpen:!0})))};var JO=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"ap",heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT"})};const QO=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,eI=Object(l.c)("div")`
  margin-bottom: 16px;
`;var tI=({activeItem:e})=>r.a.createElement(QO,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),r.a.createElement(eI,null),r.a.createElement(JO,{activeItem:e})),aI=a(40);const nI=[...Array(aI.n.SOFT_LIMIT_MAX_GB)].map((e,t)=>({value:t+1,label:t+1+" GB"})),cI=Object.values(at.LteAuthTypes).map(e=>({label:e,value:e})),rI=Object(l.c)(F.a,{shouldForwardProp:e=>"marginForError"!==e})`
  margin-bottom: ${({theme:e,marginForError:t})=>t?e.spacing["spacing-xxxl"]:e.spacing["spacing-xl"]};
`,lI=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
`,iI=Object(l.c)(w.W)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,oI=Object(l.c)(V.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xs"]};
`,EI=Object(Ja.g)({mapPropsToValues:({isUltePro:e,activeItem:{lte_ext_ant:t,lte_poe:a,lte_apn:n,lte_is_sim_pin_required:c,lte_sim_pin_tries_left:r,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:s,lte_soft_limit:m=(e?0:nI[0].value),lte_data_warning_enabled:d,lte_hard_limit:_=0}})=>({lte_ext_ant:"string"==typeof t?"enabled"===t:t,lte_poe:"string"==typeof a?"enabled"===a:a,lte_apn:n,lte_is_sim_pin_required:c,lte_sim_pin_tries_left:r,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:!e||s,lte_soft_limit:new Kt.a(m,"bytes","IEC").value,lte_data_warning_enabled:d,lte_hard_limit:new Kt.a(_,"bytes","IEC").value}),validationSchema:({isUltePro:e})=>Qa.a.lazy(()=>Qa.a.object().shape({lte_ext_ant:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA").required(),lte_poe:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH").required(),lte_apn:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS").matches(Cn.n,r.a.createElement(M.c,{id:"COMMON_VALIDATION_APN_ADDRESS"})).required(),lte_sim_pin:Qa.a.string().when("lte_is_sim_pin_required",{is:!0,then:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN").matches(Cn.o,r.a.createElement(M.c,{id:"COMMON_VALIDATION_LTE_PIN"})).required()}),lte_username:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME"),lte_password:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD"),lte_auth_type:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE").oneOf([at.LteAuthTypes.Pap,at.LteAuthTypes.Chap,at.LteAuthTypes.PapChap,at.LteAuthTypes.None]),lte_data_limit_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"),lte_soft_limit:Qa.a.number().integer(r.a.createElement(M.c,{id:"COMMON_VALIDATION_WHOLE_NUMBER"})).when("lte_data_limit_enabled",{is:!0,then:e?Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").min(0).required():Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").oneOf(nI.map(({value:e})=>e)).required()}),lte_data_warning_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"),lte_hard_limit:Qa.a.number().when("lte_data_limit_enabled",{is:!0,then:Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT").min(0).required().integer(r.a.createElement(M.c,{id:"COMMON_VALIDATION_WHOLE_NUMBER"}))}).when(["lte_soft_limit"],(t,a)=>a.min(e?t>=0&&t:0,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_ERROR"})))})),handleSubmit:()=>null});var sI=Object(Tt.compose)(Object(o.connect)(null,{updateDevice:O.updateDevice}),EI)(({activeItem:e,isUltePro:t,values:a,dirty:n,isValid:l,errors:i,resetForm:E,setFormDirty:s,setFormInvalid:m,setFieldTouched:d,setFieldValue:_,formName:u="lte"})=>{const b=Object(o.useDispatch)();return Object(c.useEffect)(()=>{b(Object(j.h)({[u]:()=>{const e={...a,lte_soft_limit:Object(O.GiBToBytes)(a.lte_soft_limit),lte_hard_limit:t?Object(O.GiBToBytes)(a.lte_hard_limit):Object(O.GiBToBytes)(a.lte_soft_limit+2),lte_data_warning_enabled:a.lte_data_limit_enabled};return a.lte_data_limit_enabled||(e.lte_soft_limit=0,e.lte_hard_limit=0),e}})),b(Object(j.j)({[u]:()=>E({values:a})})),b(Object(j.i)({[u]:E}))},[b,E,a,e._id]),Object(c.useEffect)(()=>{s(u,n),m(u,!l)},[n,s,m,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lte_ext_ant"})),r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lte_poe"})),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement(lI,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD"}))),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS",name:"lte_apn",full:!0,autocomplete:"off"})),a.lte_is_sim_pin_required&&r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN",name:"lte_sim_pin",type:"password",full:!0,autocomplete:"off"}),r.a.createElement(F.a,{alignItems:"center",marginTop:i.lte_sim_pin?20:4},r.a.createElement(iI,{isActive:!0}),r.a.createElement(V.a,{color:"secondary",size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD_TRIES",values:{count:a.lte_sim_pin_tries_left}})))),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME",name:"lte_username",full:!0})),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD",name:"lte_password",type:"password",passwordToggle:!0,full:!0})),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{name:"lte_auth_type",type:"dropdown",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE",options:cI,validated:!0,translateLabel:!0,full:!0})),r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lte_data_limit_enabled"})),a.lte_data_limit_enabled&&r.a.createElement(r.a.Fragment,null,r.a.createElement(rI,{flexDirection:"column",marginForError:!0},r.a.createElement(Jn.Field,{name:"lte_hard_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT",type:"number",full:!0})),r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"}))),r.a.createElement(rI,{flexDirection:"column",marginForError:!0},r.a.createElement(Jn.Field,{name:"lte_soft_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING",type:"number",full:!0,onChange:e=>{_("lte_soft_limit",e.target.value),d("lte_hard_limit")}})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(rI,null,r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"}))),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_ULTE_SETUP_DATA_LIMIT_VALUE_FIELD",translateLabel:!0,full:!0,validated:!0,options:nI,type:"dropdown",name:"lte_soft_limit"}),r.a.createElement(oI,{color:"secondary",size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_DESCRIPTION"})))))});const mI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  > li:last-child {
    border-bottom: 0;
  }
`;var dI;!function(e){e.NAME="name",e.LTE="lte",e.NETWORK="network",e.MANAGE_DEVICE="manage-device"}(dI||(dI={}));var _I=Object(Tt.compose)(Za([dI.NAME,dI.LTE,dI.NETWORK,dI.MANAGE_DEVICE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ka),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),b=Object(c.useMemo)(()=>Object(O.isUltePro)(e),[e.type]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.g,{flex:"1"},r.a.createElement(mI,{variant:"secondary",items:[{id:dI.NAME,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:dI.NAME})},{id:dI.LTE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_LTE"}),renderContent:()=>r.a.createElement(sI,{activeItem:e,setFormDirty:t,setFormInvalid:a,isUltePro:b,formName:dI.LTE})},{id:dI.NETWORK,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:dI.NETWORK})},{id:dI.MANAGE_DEVICE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const uI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`,bI=Object(l.c)("div")`
  margin-bottom: 16px;
`,pI=Object(l.c)("div")`
  padding: 0 32px;
  margin-bottom: 32px;
`;var OI;!function(e){e.NAME="name",e.PORTS="ports",e.MANAGE="manage"}(OI||(OI={}));var II=Object(Tt.compose)(Za([OI.NAME,"lcmScreen",OI.MANAGE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ka),d=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),_=Object(o.useDispatch)(),{_id:u,mac:b}=e;return r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(uI,{variant:"secondary",items:[{id:OI.NAME,openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:OI.NAME})},{id:OI.PORTS,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(Cs,{activeItem:e})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(bI,null,r.a.createElement(uO,{hidePorts:!0,deviceData:e})),r.a.createElement(pI,null,r.a.createElement(Qp,{hidePorts:!0,activeItem:e})))},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Ci,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:OI.MANAGE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});_(Object(O.updateDeviceWithIdEndpoint)(e,u,b,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});var gI=({activeItem:{has_temperature:e,general_temperature:t}})=>e?r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:t}}))):null;var CI=({activeItem:e})=>{const{has_fan:t,fan_level:a}=e,n=a>=nl(e);return t&&cl(e)?r.a.createElement(r.a.Fragment,null,r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_LEVEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n?a:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_STATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_ON"}):r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"})))):null};var RI=({activeItem:e})=>{const t=Object(c.useMemo)(()=>[gI,CI,ks,rl,Bs],[e]);return r.a.createElement(nm,null,t.map(t=>r.a.createElement(t,{activeItem:e})))};var vI=({uplink:{port_idx:e}})=>r.a.createElement(Zt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e));var TI=({activeItem:e,uplinkDevice:t,...a})=>{const n=Object(c.useMemo)(()=>Object(O.getUplinkAttrs)(e)||{},[e]),l=Object(O.getUplinkDisplayName)(e,t.uplink),i=Object(c.useMemo)(()=>[vI,xm,il,wm,Mm,Fm],[e]);return r.a.createElement(nm,null,i.map(e=>r.a.createElement(e,Object.assign({uplink:n,uplinkDevice:t,uplinkName:l},a))))};const hI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var PI=({activeItem:e,...t})=>{const a=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),n=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{activeItem:e}),r.a.createElement(hI,{variant:"secondary",items:[{id:"overview",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(RI,{activeItem:e})},...a?[{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK"}),renderContent:()=>r.a.createElement(TI,Object.assign({activeItem:e,uplinkDevice:a},t))}]:[],{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0})))};const DI=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var fI=function({activeItem:e}){var t;const a=!!(null===(t=e.psu_table)||void 0===t?void 0:t.length),n=[{id:"stats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>r.a.createElement(Ql,{activeItem:e}),openByDefault:!a}];return r.a.createElement(DI,{variant:"secondary",items:n,multiOpen:!0,renderOnlyExpandedContent:!0})};const yI=10,SI=3600,AI=Object(l.c)(fe.g)`
  margin-bottom: 16px;
`,NI=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e})=>({lcm:e}),validationSchema:gn.a.object().shape({lcm:gn.a.object().shape({enabled:gn.a.boolean(),sync:gn.a.boolean(),idle_timeout:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT").min(yI).max(SI).required(),brightness:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required()})}),handleSubmit:()=>null});const jI={saveSettings:Ei.saveSettings};var LI=Object(Tt.compose)(Object(o.connect)(e=>({lcmSettings:Object(Ei.selectLcmSettings)(e)}),jI),NI)((function({values:e,setFieldValue:t,resetForm:a,setFormDirty:n,dirty:l,initialValues:i}){const E=Object(o.useDispatch)();Object(c.useEffect)(()=>{n(VI.SCREEN,l)},[n,l]),Object(c.useEffect)(()=>{E(Object(j.h)({[VI.SCREEN]:()=>e})),E(Object(j.j)({[VI.SCREEN]:()=>{Object(oi.a)(i.lcm,e.lcm)||E(Object(Ei.saveSettings)(e.lcm)),a({values:e})}})),E(Object(j.i)({[VI.SCREEN]:a}))},[E,a,e]);const[s,m]=Object(c.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(AI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_SCREEN"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.enabled"})),r.a.createElement(AI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.sync"})),r.a.createElement(AI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT"})),r.a.createElement(ZE.a,{checked:s,onChange:()=>{m(!s)}})),s&&r.a.createElement(AI,{flexDirection:"column"},r.a.createElement(Jn.Field,{name:"lcm.idle_timeout",label:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT",type:"number",min:yI,max:SI,full:!0})),r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"})),r.a.createElement(AI,null,r.a.createElement(ii.a,{size:"large",value:e.lcm.brightness||O.DEFAULT_LED_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{color:"secondary"},e,"%"),onChange:e=>{t("lcm.brightness",+e.target.value)}})))}));const xI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var VI;!function(e){e.NAME="name",e.PORTS="ports",e.SCREEN="screen",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage"}(VI||(VI={}));var wI=Object(Tt.compose)(Za([VI.NAME,VI.SCREEN,VI.SERVICES,VI.NETWORK,VI.MANAGE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),d=Object(o.useSelector)(Ka),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useDispatch)(),{_id:b,mac:p}=e;return r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(xI,{variant:"secondary",items:[{id:VI.NAME,openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.NAME})},{id:VI.PORTS,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:VI.SCREEN,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(LI,{setFormDirty:t})},{id:VI.SERVICES,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Ni,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.SERVICES})},{id:VI.NETWORK,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.NETWORK})},{id:VI.MANAGE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(d).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,b,p,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const MI=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  .styledAccordionContent {
    padding: 0;
    margin: 0;
  }
`;var FI=function({activeItem:e,...t}){const a=t_(e),n=[];return a.length&&n.push({id:"channelUsage",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>r.a.createElement(c_,{ChannelBars:a})}),Object(O.isDeviceConnected)(e)&&Object(Yn.d)(e,O.WIFI_CAPS.RF_SCAN)&&n.push({id:"rfEvironment",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>r.a.createElement(Wd,{activeItem:e})}),r.a.createElement(MI,{variant:"secondary",items:n,contentClassName:"styledAccordionContent",multiOpen:!0,renderOnlyExpandedContent:!0})};const UI=Object(l.c)(F.a)`
  padding: 0 32px;
`;var kI=Object(Tt.compose)(Za(["general","screen","network","services"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:b,mac:p}=e,I=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(UI,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:u})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Ni,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});I(Object(O.updateDeviceWithIdEndpoint)(e,b,p,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(m).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});var zI=({activeItem:e})=>{const{source:t,status:a,statusColor:n}=Object(O.getActivePsuText)(e);return r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:t})),r.a.createElement(V.a,{size:"body",color:n},r.a.createElement(M.c,{id:a})))};const BI=Object(l.c)(V.a)`
  margin-bottom: 8px;
`,WI=Object(l.c)(V.a)`
  margin-top: 16px;
  margin-bottom: 8px;
`;var HI=({activeItem:e})=>{const t=[Object(O.getPsuInternalBattery)(e),Object(O.getPsuExternalBattery)(e)];return r.a.createElement(r.a.Fragment,null,t.map(e=>r.a.createElement("div",{key:e.index},Object(O.getIsPsuInternalBattery)(e)?r.a.createElement(BI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})):r.a.createElement(WI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STATUS"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e.charge_status?"DEVICE_USW_MC_PSU_BATTERY_STATE_"+e.charge_status.replace(" ","_").toUpperCase():"DEVICE_USW_MC_PSU_BATTERY_STATE_UNKNOWN"}))),e.capacity&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_CAPACITY"})),r.a.createElement(V.a,{size:"body"},r.a.createElement("span",{style:{color:Ct.a.getGradientColor(e.capacity/100)}},e.capacity,"%"))),e.technology&&"Unknown"!==e.technology&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TYPE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_BATTERY_TYPE_"+e.technology.replace("-","_").toUpperCase()}))),e.charge_full_design&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STORAGE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERE_HOURS",values:{value:e.charge_full_design}}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_POWER_USAGE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.power).toFixed(1)}}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.current).toFixed(1)}}))),r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.voltage).toFixed(1)}}))),!!e.time_to_empty_avg&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TIME"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"uptime",size:"body",input:e.time_to_empty_avg}))),e.installation_time&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_INSTALLATION_DATE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"uptime",size:"body",input:e.installation_time}))),e.health&&r.a.createElement(Zt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_HEALTH_STATUS"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_HEALTH_"+e.health.replace(" ","_").toUpperCase()}))))))};const GI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var YI=r.a.memo(({activeItem:e,...t})=>{var a,n;const l=null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.type,i=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),o=l&&(l===O.UplinkType.WIRE?"DEVICE_CONNECTION_WIRED":"DEVICE_CONNECTION_WIRELESS");return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),i&&r.a.createElement(GI,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(ll,{switchDeviceData:e}),openByDefault:!0},...(null===(n=e.psu_table)||void 0===n?void 0:n.length)?[{id:"powerSource",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_SOURCE"}),renderContent:()=>r.a.createElement(zI,{activeItem:e})},{id:"battery",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY"}),renderContent:()=>r.a.createElement(HI,{activeItem:e})}]:[],{id:"uplink",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK"}),o&&r.a.createElement(r.a.Fragment,null," ","(",r.a.createElement(M.c,{id:o}),")")),renderContent:()=>r.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const $I=Object(l.c)(F.a)`
  position: relative;
  border-bottom: 4px;
`,KI=Object(l.c)(F.a)`
  margin-bottom: 16px;
  svg g:nth-child(2) {
    transform: translate(58px, 53px) !important;
  }
  g {
    > circle {
      transform: rotateX(180deg) rotateY(180deg);
    }
    text:nth-child(1) {
      font-size: 24px;
    }
    text:nth-child(2) {
      font-weight: 900;
    }
    circle:nth-child(2) {
      stroke: ${({theme:e})=>e.motifPalette.ui03};
    }
  }
`,XI=Object(l.c)("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: ${({theme:e})=>e.motifPalette.ui04};
`,qI=Object(l.c)("div")`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: ${({theme:e})=>e.motifPalette.ui04};
`,ZI=Object(l.c)(V.a)`
  margin: 14px 0px;
`;var JI=({activeItem:e})=>{const{total:t,outlets:a,internalBattery:n,externalBattery:c}=Object(O.getPsuUtilization)(e);return r.a.createElement($I,{flexFlow:"wrap"},r.a.createElement(XI,null),r.a.createElement(qI,null),r.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(ZI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_TOTAL"})),r.a.createElement(ba.a,{title:t.usedPowerPercentage+"%",description:`${t.usedPower}/${t.maxPower}W`,size:116,items:[{id:"free",color:t.statusColor,value:t.usedPowerPercentage},{id:"used",color:we.a["white-6"],value:100-t.usedPowerPercentage}]})),r.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(ZI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_OUTLETS"})),r.a.createElement(ba.a,{title:a.usedPowerPercentage+"%",description:`${a.usedPower}/${a.maxPower}W`,size:116,items:[{id:"free",color:a.statusColor,value:a.usedPowerPercentage},{id:"used",color:we.a["white-6"],value:100-a.usedPowerPercentage}]})),r.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(ZI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})),r.a.createElement(ba.a,{title:n.usedPowerPercentage+"%",description:`${n.usedPower}/${n.maxPower}W`,size:116,items:[{id:"used",color:n.statusColor,value:n.usedPowerPercentage},{id:"free",color:we.a["white-6"],value:100-n.usedPowerPercentage}]})),r.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(ZI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),r.a.createElement(ba.a,{title:c.usedPowerPercentage+"%",description:`${c.usedPower}/${c.maxPower}W`,size:116,items:[{id:"used",color:c.statusColor,value:c.usedPowerPercentage},{id:"free",color:we.a["white-6"],value:100-n.usedPowerPercentage}]})))};var QI=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const eg=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var tg=function({activeItem:e}){var t;const a=!!(null===(t=e.psu_table)||void 0===t?void 0:t.length);return r.a.createElement(eg,{variant:"secondary",items:[...a?[{id:"powerUtilization",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"}),renderContent:()=>r.a.createElement(JI,{activeItem:e}),openByDefault:a}]:[],{id:"stats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>r.a.createElement(QI,{activeItem:e}),openByDefault:!a}],multiOpen:!0,renderOnlyExpandedContent:!0})};const ag=Object(l.c)(F.a)`
  padding: 0 32px;
  li:nth-child(3) {
    > div:last-child {
      margin: 0 -32px; // allow outlet diagram overflow accordion
    }
  }
`,ng=Object(l.c)("div")`
  margin-bottom: 16px;
`,cg=Object(l.c)("div")`
  padding: 0 32px;
  margin-bottom: 32px;
`;var rg=Object(Tt.compose)(Za(["general","lcmScreen","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),{_id:_,mac:u}=e,b=Object(o.useDispatch)(),p=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,p&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(ag,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ng,null,r.a.createElement(uO,{hidePorts:!0,deviceData:e})),r.a.createElement(cg,null,r.a.createElement(Qp,{hidePorts:!0,activeItem:e})))},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Ci,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Ni,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;b(Object(O.updateDeviceWithIdEndpoint)(a,_,u,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});const lg=Object(l.c)("div")`
  table {
    thead {
      tr {
        th {
          &:nth-of-type(2) {
            left: -32px;
          }
        }
      }
    }
  }
`,ig=Object(l.c)(fe.g)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
`,og=Object(l.c)(w.nc)`
  margin-right: 4px;
  margin-top: 6px;
`;var Eg,sg;!function(e){e.HIERARCHY="hierarchy",e.RADIO_NAME="radio_name",e.ESSID="essid",e.BSSID="bssid"}(Eg||(Eg={})),function(e){e.RADIO_GROUP="radio_group",e.BSSID_ESSID="bssid/essid",e.BW="bw",e.CHANNEL="channel"}(sg||(sg={}));var mg=({activeItem:e})=>{var t;return(null===(t=null==e?void 0:e.vap_table)||void 0===t?void 0:t.length)?r.a.createElement(lg,null,r.a.createElement(Pe.a,{hideCellOverflow:!1,items:e.vap_table.reduce((e,t)=>{const a=e.findIndex(({channel:e})=>e===t.channel),n={[Eg.HIERARCHY]:!0,[Eg.BSSID]:t.bssid,[Eg.ESSID]:t.essid};return a>=0?(e[a]={...e[a],children:[...e[a].children,{...n}]},e):(e.push({...t,idField:`${t.id}-${t.essid}-${t.bssid}`,children:[{...n}]}),e)},[]),idField:"idField",disableColumnFilters:!0,columns:[{id:sg.RADIO_GROUP,minWidth:23,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_RADIO_GROUP"})),renderCell:({radio:e,channel:t,hierarchy:a,essid:n})=>{var c,l;return a?r.a.createElement(fe.g,{width:"100%",alignItems:"center"},r.a.createElement(og,{isActive:!0}),r.a.createElement(V.a,{size:"body",truncate:!0,color:"secondary"},n)):r.a.createElement(fe.g,{justifyContent:"space-between",height:"100%",width:"100%",alignItems:"center"},r.a.createElement(fe.g,{marginRight:8,alignItems:"center"},r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.b,{id:`DEVICE_HEADER_RADIO${null===(c=$s.WlanBand[null==e?void 0:e.toUpperCase()])||void 0===c?void 0:c.toUpperCase()}_SHORT`})),(l=[{label:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_LABEL_SHORT",range:[36,64]},{label:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_LABEL_SHORT",range:[100,128]},{label:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_LABEL_SHORT",range:[149,165]}].find(({range:[e,a]})=>Object(sd.a)(t,e,a)))&&r.a.createElement(V.a,{size:"body",color:"secondary",whiteSpacePreWrap:!0}," ",r.a.createElement(M.c,{id:l.label}))),r.a.createElement(pn.a,{message:r.a.createElement(fe.g,{flexDirection:"column"},r.a.createElement(ig,{paddingBottom:12},r.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNELS"}))),r.a.createElement(fe.g,{marginTop:12,flexDirection:"column"},r.a.createElement(fe.g,{marginBottom:6,justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_LABEL"})),r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_RANGE"}))),r.a.createElement(fe.g,{marginBottom:6,justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_LABEL"})),r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_RANGE"}))),r.a.createElement(fe.g,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_LABEL"})),r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_RANGE"}))))),width:180,position:"top"},r.a.createElement(w.W,{isActive:!0})))}},{id:sg.BSSID_ESSID,minWidth:25,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID_ESSID"})),renderCell:({hierarchy:e,bssid:t})=>e&&r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},t)},{id:sg.BW,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BW"})),renderCell:({bw:e})=>e&&r.a.createElement(V.a,{size:"body",color:"secondary"},e," ",r.a.createElement(M.c,{id:"COMMON_UNIT_MHZ"}))},{id:sg.CHANNEL,minWidth:15,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})),renderCell:({channel:e})=>r.a.createElement(V.a,{size:"body",color:"secondary"},e)}]})):null};const dg=Object(l.c)(Ee.a)`
  padding: 10px 30px;
`;var _g=({activeItem:e,params:t,path:a,history:n,...l})=>{var i,o;const E=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(zl,{device:e}),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Om,{activeItem:e}),r.a.createElement(dg,{variant:"secondary",items:[...E?[{id:"history",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>r.a.createElement(Fs,Object.assign({activeItem:e},l))}]:[],{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(cm,{activeItem:e})},...(null===(i=null==e?void 0:e.uplink)||void 0===i?void 0:i.mac)?[{id:"uplinkWired",label:"wire"===(null===(o=null==e?void 0:e.uplink)||void 0===o?void 0:o.type)?r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>r.a.createElement(Bm,{activeItem:e,params:t,path:a,history:n})}]:[],{id:"airStats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>r.a.createElement(Nm,{activeItem:e,radio:t}))},{id:"wlan",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_WLAN"}),renderContent:()=>r.a.createElement(mg,{activeItem:e})},{id:"clientsGuests",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>r.a.createElement(gl,{activeItem:e,params:t,path:a,history:n})}],renderOnlyExpandedContent:!0,multiOpen:!0})))};const ug=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var bg;!function(e){e.NAME="name",e.LED="led",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage",e.RADIOS="radios"}(bg||(bg={}));var pg=Object(Tt.compose)(Za([bg.NAME,bg.RADIOS,bg.LED,bg.SERVICES,bg.NETWORK,bg.MANAGE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ug,{variant:"secondary",items:[{id:bg.NAME,openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:bg.NAME})},{id:bg.RADIOS,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:m})},...Object(Yn.f)(e)?[{id:"bandsteer",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>r.a.createElement(B_,{activeItem:e,setFormDirty:t})}]:[],{id:bg.LED,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t,formName:bg.LED})},{id:bg.SERVICES,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Ni,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0,formName:bg.SERVICES})},{id:bg.NETWORK,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:bg.NETWORK})},{id:bg.MANAGE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{led:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)({...a,...t},d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(E).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});function Og({activeItem:e}){const t=[{Comp:gI,key:"Temperature"},{Comp:CI,key:"FanLevel"},{Comp:ks,key:"Uptime"},{Comp:rl,key:"MemoryUsage"},{Comp:Bs,key:"LoadAverage"}];return r.a.createElement(F.a,{flexDirection:"column"},t.map(({Comp:t,key:a})=>r.a.createElement(t,{key:a,activeItem:e})))}const Ig=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var gg=r.a.memo(({activeItem:e})=>{const t=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),t&&r.a.createElement(Ig,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(Og,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const Cg=Object(l.c)("div")`
  margin-bottom: 12px;
`,Rg=["backup","delivering"];var vg=({activeItem:e})=>{const t=Object(O.getRpsPortUtilization)(null==e?void 0:e.rps);return r.a.createElement(r.a.Fragment,null,t.map(e=>r.a.createElement("div",{key:e.voltage},Rg.map(t=>r.a.createElement("div",{key:t},e[t].ports.map(a=>r.a.createElement(Cg,{key:a.id},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_UTILIZATION_BAR_HEADING_"+t.toUpperCase(),values:{voltage:e.voltage,mode:"delivering",portId:a.id}})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:a.powerRequired,max:e[t].total}}))),r.a.createElement(Hd.a,{items:[{variant:"primary",value:a.powerRequired/e[t].total*100}]}))))))))};const Tg=Object(l.c)(fe.g)`
  padding: 16px 32px;
`,hg=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Pg=({activeItem:e})=>{const t=Object(O.getRpsPortUtilizationActive)(null==e?void 0:e.rps);return r.a.createElement(Tg,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(hg,null),t&&r.a.createElement(vg,{activeItem:e}))};const Dg=Object(l.c)(pn.a,{shouldForwardProp:e=>"color"!==e&&"isTableItem"!==e})`
  width: ${({isTableItem:e})=>e?"20px":"90px"};
  height: 20px;
  align-items: center;
  background-color: ${({color:e,theme:t})=>t.motifPalette[e]};
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  display: flex;
  position: relative;
  ${({isTableItem:e})=>e&&"margin-right: 8px;"}

  &:not(:first-child) {
    margin-left: 8px;
  }

  div:last-child {
    right: -15px;
  }
`,fg=l.a`
  margin-left: 15px;
`,yg=Object(l.c)("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 70%;
    max-height: 70%;
  }
`,Sg=Object(l.c)(V.a)`
  max-width: 140px;
`;var Ag=({cellData:e,isTableItem:t=!1,tooltipPosition:a="bottomRight"})=>{const c=Object(n.k)(),{path:l}=Object(n.n)(),{site:i,page:E,id:s,panel:m}=Object(n.m)(),d=Object(o.useSelector)(O.selectDevicesData),{peer:_}=e,u=d.find(e=>e.mac===(null==_?void 0:_.mac)),b=Object(Y.c)(u),p=Object(Y.a)(u),I=Object(O.getRspOutletIcons)(e),g=Object(O.getRspOutletColor)(e);return r.a.createElement(Dg,{color:g,tooltipClassName:fg,onClick:t=>{var a,r;null===(a=null==t?void 0:t.preventDefault)||void 0===a||a.call(t),null===(r=null==t?void 0:t.stopPropagation)||void 0===r||r.call(t),c.push(Object(n.i)(l,{site:i,page:E,id:s,panel:m,subPanel:"outlets",subPanelId:e.port_idx}))},width:u?240:200,isTableItem:t,message:r.a.createElement(F.a,{flexDirection:"column",justifyContent:"space-between",width:"100%"},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.port_idx)),r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NAME"})),r.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},null==e?void 0:e.name)),(null==e?void 0:e.port_mode)&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},Object(GO.a)(e.port_mode))),(null==e?void 0:e.port_state)&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_STATE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+e.port_state.toUpperCase()}))),(null==e?void 0:e.up)&&O.RPS_VOLTAGES.map(t=>r.a.createElement("div",{key:t},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:t}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:e[`power_${t}v_current`]}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:e[`power_${t}v_voltage`]}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:e[`power_${t}v_power`]}}))))),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER"}))),(b||(null==_?void 0:_.hostname))&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_NAME"})),r.a.createElement(Sg,{size:"caption",color:"secondary",truncate:!0},b||(null==_?void 0:_.hostname))),(null==u?void 0:u.mac)&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MAC"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},null==u?void 0:u.mac)),p&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODEL"})),r.a.createElement(Sg,{size:"caption",color:"secondary",truncate:!0},p)),O.RPS_VOLTAGES.map(e=>r.a.createElement(F.a,{key:e,justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER_POWER_REQUIRED",values:{voltage:e}})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:null==_?void 0:_[`power_required_${e}v`]}})))))),position:a,portal:!0},r.a.createElement(yg,null,e.port_mode!==O.RpsPortMode.DISABLED&&r.a.createElement(fc,{icons:I})))};const Ng=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,jg=Object(l.c)(F.a)`
  &:not(:first-child) {
    margin-top: 8px;
  }
`,Lg=Object(l.c)(w.W)`
  margin-right: 12px;
`,xg=Object(l.c)("div")`
  width: 5px;
`;var Vg=({deviceData:e})=>{const{rps:{diagram:t,primaryPortGroupCount:a}}=Object(O.getDeviceSpecs)(e),n=t?Object(O.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(O.determineRowLayoutsFromOutletConfig)(a,e);return n&&0!==n.length?r.a.createElement(r.a.Fragment,null,n.map((t,a)=>r.a.createElement(jg,{justifyContent:"center",width:"100%",key:"RpsOutletLayoutRow-"+(a+1)},t.map((t,n)=>{if(!t)return r.a.createElement(xg,{key:`RpsOutletSpacer-${a+1}-${n+1}`});const c=`RpsOutlet-${a+1}-${n+1}`,l=Object(O.getActiveRpsOutletInfo)(e,t.outletNumber);return r.a.createElement(Ag,{cellData:l,key:c})})))):r.a.createElement(Ng,null,r.a.createElement(Lg,{isActive:!0}),r.a.createElement(M.c,{id:"DEVICE_DIAGRAM_MISSING"}))};const wg=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`;var Mg=({deviceData:e})=>r.a.createElement(wg,null,r.a.createElement(F.a,{flexDirection:"column",alignItems:"center"},r.a.createElement(Vg,{deviceData:e})),r.a.createElement(nO,{isForDiagram:!0,deviceData:e}));const Fg=Object(l.c)(w.g)`
  position: absolute;
  right: 8px;
  color: inherit;
`,Ug=Object(l.c)("div")`
  table {
    tr {
      cursor: pointer;
    }
  }
`,kg=[{id:"name",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:e=>r.a.createElement(V.a,{size:"body"},e.name)},{id:"outletStatus",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:e=>{var t,a;const n="disabled"===e.port_mode?null===(t=null==e?void 0:e.port_mode)||void 0===t?void 0:t.toUpperCase():null===(a=null==e?void 0:e.port_state)||void 0===a?void 0:a.toUpperCase();return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(Ag,{cellData:e,isTableItem:!0}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:n?"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+n:"COMMON_WORD_INITIALIZING"}),!n&&r.a.createElement(V.a,{size:"body"},"..."))),r.a.createElement(Fg,{size:"small"}))}}];var zg=({deviceData:e,deviceData:{rps:t}})=>{const a=Object(n.k)(),{path:l}=Object(n.n)(),{site:i,page:o,id:E,panel:s}=Object(n.m)(),m=Object(c.useMemo)(()=>{var a;return null===(a=t.rps_port_table)||void 0===a?void 0:a.map(t=>{const a=Object(O.getActiveRpsOutletInfo)(e,t.port_idx);return{id:t.port_idx,...a}})},[t.rps_port_table,e]);return r.a.createElement(Ug,null,r.a.createElement(Pe.a,{columns:kg,rowHeight:35,items:m,disableColumnFilters:!0,hideCellOverflow:!1,onRowClick:e=>m.some(e=>e.port_state)&&a.push(Object(n.i)(l,{site:i,page:o,id:E,panel:s,subPanel:"outlets",subPanelId:e.id}))}))};const Bg=Object(l.c)(F.a)`
  padding: 0 32px;
`;var Wg=Object(Tt.compose)(Za(["general","outlets","screen","manage"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(O.isAdopted)(e),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),b=Object(Yn.i)(e),p=b?"lcmScreen":"screen";return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(Mg,{deviceData:e}),r.a.createElement(Bg,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(zg,{deviceData:e})},{id:p,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>b?r.a.createElement(Ci,{activeItem:e,setFormDirty:t,setFormInvalid:a}):r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(fn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),Hg={[d.b.ISP_DETAILS]:{default:"overview",panels:{overview:{path:"/overview",title:"DASHBOARD_ISP_PROPERTY_OVERVIEW",icon:w.rb,component:he},insights:{path:"/insights",title:"DASHBOARD_ISP_PROPERTY_INSIGHTS",icon:w.Rb,component:Ve}}},[d.b.WIFI_MAN]:{default:"tests",singlePanel:!0,panels:{tests:{path:"/tests",component:mt,subpanel:{path:"/:subPanel",component:It}}}},[d.b.UNIFI_DEVICE_CLIENT]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:zn},insights:{path:"/insights",title:"CLIENT_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:$a,subpanel:{path:"/:subPanel",component:Ua}},settings:{path:"/settings",title:"CLIENT_PROPERTY_HEADER_SETTINGS",icon:w.P,component:An}}},[d.a.CLIENT]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:sa},insights:{path:"/insights",title:"CLIENT_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:$a,subpanel:{path:"/:subPanel",component:Ua}},settings:{path:"/settings",title:"CLIENT_PROPERTY_HEADER_SETTINGS",icon:w.P,component:An}}},[d.a.UGW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gE},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:TE},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Ts,subpanel:{path:"/:subPanel/:subPanelId",component:({activeItem:e,params:t,...a})=>t.subPanelId===oe.ALL?r.a.createElement(Sr,Object.assign({activeItem:e,params:t},a)):r.a.createElement(As,Object.assign({activeItem:e,params:t},a))}}}},[d.a.USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:function({activeItem:e,...t}){const[a]=Object(c.useState)("SwitchAbout-"+Date.now()),n=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),l=Object(o.useDispatch)(),i={style:al.a.overflow,styleName:"overflow",dependant:a};return Object(c.useEffect)(()=>(l(Object(tl.c)(i)),()=>l(Object(tl.b)(i))),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cl,{activeItem:e}),r.a.createElement(Bl,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(ll,{switchDeviceData:e})},{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_WIRED"}),renderContent:()=>r.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clientsGuests",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0})))}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:ai},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:iE,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?r.a.createElement(Sr,Object.assign({params:e,activeItem:t},a)):r.a.createElement(ur,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UAP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Hm,subpanel:{path:"/:subPanel/:subPanelId",component:Hn}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:i_},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:H_}}},[d.a.UAP6MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:_g},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:i_},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:pg}}},[d.a.UDM]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:du},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Du},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:vu,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?r.a.createElement(Sr,Object.assign({params:e,activeItem:t},a)):r.a.createElement(ur,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UDMPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:yu},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Nu},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Lu,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?r.a.createElement(Sr,Object.assign({params:e,activeItem:t},a)):r.a.createElement(ur,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UAP_USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_ABOUT",icon:w.rb,component:Hm}}},[d.a.UBB]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:db},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Tb},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:$b}}},[d.a.UBBXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Tb},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Sb}}},[d.a.USPP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Tp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:yp},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Lp}}},[d.a.USPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Mp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Bp},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:pO,subpanel:{path:"/:subPanel/:subPanelId",component:Br}}}},[d.a.USPPDUP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gO},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:hO},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:DO,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,...t})=>"ports"===e.subPanel?r.a.createElement(ur,Object.assign({params:e},t)):r.a.createElement(Br,Object.assign({params:e},t))}}}},[d.a.USAGGPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:PI},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:fI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:wI,subpanel:{path:"/:subPanel/:subPanelId",component:ur}}}},[d.a.LTE]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:ZO},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:tI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:_I}}},[d.a.UXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gE},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:TE},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:II,subpanel:{path:"/:subPanel/:subPanelId",component:({activeItem:e,params:t,...a})=>"ports"===t.subPanel?t.subPanelId===oe.ALL?r.a.createElement(Sr,Object.assign({activeItem:e,params:t},a)):r.a.createElement(As,Object.assign({activeItem:e,params:t},a)):r.a.createElement(Br,Object.assign({params:t,activeItem:e},a))}}}},[d.a.UAP_IW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Hm,subpanel:{path:"/:subPanel/:subPanelId",component:Hn}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:FI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:kI,subpanel:{path:"/:subPanel/:subPanelId",component:ur}}}},[d.a.USL8MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:YI},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:tg},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:rg,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel?r.a.createElement(ur,Object.assign({params:e,activeItem:t},a)):r.a.createElement(Br,Object.assign({params:e,activeItem:t},a))}}}},[d.a.USPRPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gg},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Pg},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Wg,subpanel:{path:"/:subPanel/:subPanelId",component:qr}}}}},Gg=a(2908);const Yg=Object(l.c)("div")`
  position: relative;
`;var $g=({history:e,match:{params:t},tabs:a})=>{const{site:n,id:c,panel:l,page:i,subPage:E}=t,s=Object(o.useSelector)(Object(m.k)(n));return a&&a.length?r.a.createElement(Yg,null,r.a.createElement(Gg.a,{tabs:a,selectedTab:l,onSelectTab:t=>e.push(`${s}/${i}/${E?E+"/":""}properties/${c}/${t.id}`)})):null},Kg=a(2039);const Xg=Object(l.c)("div")`
  background-color: ${Oo.n.success};
  color: ${Oo.e};
  display: flex;
  flex: none;
  font-size: 11px;
  height: 50px;
  min-height: 50px;
  padding: 8px 32px;
  position: relative;
`,qg=Object(l.c)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`,Zg=Object(l.c)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`,Jg=Object(l.c)("div")`
  font-weight: bold;
  margin-bottom: 4px;
`;var Qg=({activeItem:e})=>{if("model"in e){if(Object(uc.Sd)(e)&&Object(uc.Wd)(e)){const t=Object(uc.ec)(e);return r.a.createElement(Xg,null,r.a.createElement(qg,null,r.a.createElement(Kg.a,{width:18,height:18,strength:t,color:"currentColor",inactiveColor:Oo.d})),r.a.createElement(Zg,null,r.a.createElement(Jg,null,r.a.createElement(M.c,{id:"DEVICE_ULTE_IS_ACTIVE_TITLE"})),r.a.createElement(M.c,{id:"DEVICE_ULTE_IS_ACTIVE_DETAILS"})))}}return null},eC=a(37),tC=a(28);const aC="/api/s/{site}/cmd/stamgr",nC=Object(l.c)(fe.g)`
  padding: 24px 32px 0;
`,cC=Object(l.c)("div")`
  margin-bottom: 16px;
  button {
    font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
    font-weight: 700;
  }
`,rC=Object(l.c)(de.a)`
  color: ${({theme:e})=>e.motifPalette.error};
  &:hover,
  &:active {
    color: ${({theme:e})=>e.motifPalette.error};
  }
`;var lC=({activeItem:e})=>{var t,a;const n=Object(o.useDispatch)(),l=null!==(a=null===(t=Object(o.useSelector)(Gl.P))||void 0===t?void 0:t.offlineClientTimeframe)&&void 0!==a?a:24,i=Object(c.useCallback)(e=>{const{displayName:t,connected:a}=e,c="mac"in e&&e.mac;c&&n(Object(ec.a)({title:"CLIENT_ACTIONS_BLOCK_CONFIRM_TITLE",titleValues:{clientName:t},message:"CLIENT_ACTIONS_BLOCK_CONFIRM_MESSAGE",messageValues:{clientName:t},onConfirm:()=>{n(((e,t,a={})=>Object(Ia.p)(eC.a.BLOCK_STA,aC,{mac:e},{...Object(tC.a)("CLIENT_ACTIONS_BLOCK_ERROR","CLIENT_ACTIONS_BLOCK_NOTICE",{clientName:t}),...a}))(c,t)).then(()=>n(Object(Ut.e)())).then(()=>{n(Object(I.deleteClientFromStore)(c,a?I.ClientModelType.ACTIVE:I.ClientModelType.OFFLINE)),n(Object(I.fetchBlockedClients)()),n(Object(I.fetchOfflineClients)({queryParams:{withinHours:l}}))})}}))},[n,l]),E=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(Object(ec.a)({title:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_TITLE",titleValues:{clientName:t},message:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_MESSAGE",messageValues:{clientName:t},onConfirm:()=>{n(((e,t,a={})=>Object(Ia.p)(eC.a.UNBLOCK_STA,aC,{mac:e},{...Object(tC.a)("CLIENT_ACTIONS_UNBLOCK_ERROR","CLIENT_ACTIONS_UNBLOCK_NOTICE",{clientName:t}),...a}))(a,t)).then(()=>n(Object(Ut.e)())).then(()=>{n(Object(I.deleteClientFromStore)(a,I.ClientModelType.BLOCKED)),n(Object(I.fetchOfflineClients)({queryParams:{withinHours:l}})),n(Object(I.fetchBlockedClients)())})}}))},[n,l]),s=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eC.a.KICK_STA,aC,{mac:e},{...Object(tC.a)("CLIENT_ACTIONS_RECONNECT_ERROR","CLIENT_ACTIONS_RECONNECT_NOTICE",{clientName:t}),...a}))(a,t))},[n]),m=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eC.a.AUTHORIZE_GUEST,aC,{mac:e},{...Object(tC.a)("CLIENT_ACTIONS_AUTHORIZE_ERROR","CLIENT_ACTIONS_AUTHORIZE_NOTICE",{clientName:t}),...a}))(a,t))},[n]),d=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eC.a.UNAUTHORIZE_GUEST,aC,{mac:e},{...Object(tC.a)("CLIENT_ACTIONS_UNAUTHORIZE_ERROR","CLIENT_ACTIONS_UNAUTHORIZE_NOTICE",{clientName:t}),...a}))(a,t))},[n]),_=e.connected&&e.type===I.ClientType.WIRELESS,u=e.connected&&Object(I.getIsClientAuthorizable)(e),b="authorized"in e&&e.authorized,p=u&&!1===b,O=u&&b;return r.a.createElement(fe.b,null,r.a.createElement(nC,{flexDirection:"column"},e.blocked?r.a.createElement(cC,null,r.a.createElement(de.a,{name:"block-client",size:"small",variant:"inline",onClick:()=>E(e)},r.a.createElement(M.c,{id:"COMMON_ACTION_UNBLOCK"}))):r.a.createElement(cC,null,r.a.createElement(rC,{name:"block-client",size:"small",variant:"inline",onClick:()=>i(e)},r.a.createElement(M.c,{id:"COMMON_ACTION_BLOCK"}))),_&&r.a.createElement(cC,null,r.a.createElement(de.a,{name:"reconnect-client",size:"small",variant:"inline",onClick:()=>s(e)},r.a.createElement(M.c,{id:"CLIENT_ACTIONS_RECONNECT"}))),p&&r.a.createElement(cC,null,r.a.createElement(de.a,{name:"authorize-guest",size:"small",variant:"inline",onClick:()=>m(e)},r.a.createElement(M.c,{id:"CLIENT_ACTIONS_AUTHORIZE"}))),O&&r.a.createElement(cC,null,r.a.createElement(de.a,{name:"unauthorize-guest",size:"small",variant:"inline",onClick:()=>d(e)},r.a.createElement(M.c,{id:"CLIENT_ACTIONS_UNAUTHORIZE"})))))},iC=a(803),oC=a(228),EC=a.n(oC),sC=a(804),mC=a(169);const dC=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var _C=()=>r.a.createElement(yl,{level:"warning"},r.a.createElement(dC,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_ULTE_USG_REQUIRED"})));const uC=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var bC=()=>r.a.createElement(yl,{level:"warning"},r.a.createElement(uC,{size:"caption"},r.a.createElement(M.b,{id:"DEVICE_UBB_ADOPT_WARNING_MESSAGE"})));const pC=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0 ${({theme:e})=>e.space[3]}px;
  line-height: 14px;
  white-space: nowrap;
  max-width: 113px;
`,OC=Object(l.c)("div")`
  margin-bottom: 32px;
`;var IC=Object(M.f)(({device:e,showForNonAdoptableGateway:t,intl:a,buttonProps:{...l}={}})=>{const i=Object(o.useSelector)(Gl.D)("API_DEVICE_ADOPT"),E=Object(o.useSelector)(O.selectDevicesData),s=Object(o.useSelector)(mC.g),m=Object(o.useSelector)(Ji.a),d=Object(o.useDispatch)(),_=Object(n.k)(),u=Object(O.getDeviceState)(e),b=Object(O.isAdoptApplicable)(e),p=!!(null==e?void 0:e.adoptable_when_upgraded),I=Object(O.isGateway)(e)&&!Object(O.isGatewayAdoptable)(E,e),g=Object(O.isUlte)(e),C=g&&!Object(O.isUlteAdoptable)(E,e),R=g&&!(null==e?void 0:e.lte_imei),v=!e.adopted&&b&&i&&(t||!I||!C),[T,h]=Object(c.useState)(u===O.DeviceState.ADOPTING),P=g&&!s,D=Object(O.isUBB)(e)&&!Object(O.getIsUbbPeerAdoptable)(e),f=Object(L.i)("wifi/network/form"),y=T||P||D;Object(c.useEffect)(()=>{h(u===O.DeviceState.ADOPTING)},[u]);return!v||R?null:r.a.createElement(F.a,{flexDirection:"column"},P&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_C,null),r.a.createElement(OC,null)),D&&r.a.createElement(r.a.Fragment,null,r.a.createElement(bC,null),r.a.createElement(OC,null)),r.a.createElement(F.a,{justifyContent:"flex-end"},r.a.createElement(pC,Object.assign({variant:"primary",onClick:t=>{function n(){g?(d(Object(AO.d)(e.mac,Object(O.isUltePro)(e)?"LTE_PRO_ADOPTION":"LTE_ADOPTION")),h(!1)):function(){if(e.discovered_by===sC.a.PROTOCOL_V2_ID)h(!1);else if(d(Object(O.adoptDevice)(e)).then(h(!0)),Object(O.isPureAp)(e)){const t=EC()();d(Object(na.c)({icon:r.a.createElement("div",null,r.a.createElement(U.b,{deviceType:null==e?void 0:e.type,deviceModel:null==e?void 0:e.model,publicImagePath:m,width:53,height:53})),title:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_TITLE",message:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_MESSAGE",primaryButton:{label:a.formatMessage({id:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_ACTION"}),onClick:()=>{_.push(f),d(Object(na.d)(t))}},translateTitle:!0},t))}}()}function c(){const{elite:t}=e;if(t&&t.replacement_for_mac){const e=E.find(e=>e.mac===t.replacement_for_mac);d(Object(ec.a)({title:"DEVICE_APPLY_CONFIGURATION_HEADER",titleValues:{deviceName:e.name},message:"DEVICE_APPLY_CONFIGURATION_MESSAGE",messageValues:{deviceName:e.name},size:"small",onConfirm:()=>{d(Object(Ut.e)())},onCancel:()=>{d(Object(Ut.e)()),n()}}))}else n()}t.preventDefault(),t.stopPropagation(),p?d(Object(ec.a)({title:"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_TITLE",titleValues:{deviceName:e.name},message:e.upgrade_to_firmware?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_VERSION_MESSAGE":"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_MESSAGE",messageValues:{fromVersion:e.version,toVersion:e.upgrade_to_firmware},size:"small",onConfirm:()=>{d(Object(Ut.e)()),c()},onCancel:()=>{d(Object(Ut.e)()),h(!1)}})):c()},disabled:y},l),r.a.createElement(M.c,{id:p?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE":"DEVICE_ACTIONS_ADOPT"}))))});const gC=Object(l.c)(fe.g)`
  padding: 0 32px;
`,CC=Object(l.c)(fe.g)`
  padding: 24px 32px 0;
`,RC=Object(l.c)("div")`
  margin-bottom: 16px;
`;var vC=({activeItem:e})=>Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e])?r.a.createElement(CC,{flexDirection:"column"},r.a.createElement(RC,null,r.a.createElement(iC.a,{device:e,size:"body"}))):r.a.createElement(gC,{justifyContent:"flex-end"},r.a.createElement(IC,{device:e,showForNonAdoptableGateway:!0}));const TC=Object(l.c)(F.a,{shouldForwardProp:e=>"isDefaultPanel"!==e})`
  ${({isDefaultPanel:e})=>!e&&"height: 100%;"}
  overflow-x: hidden;
  overflow-y: scroll;
  overflow-y: overlay;
`,hC=Object(M.f)(e=>{const{match:{path:t,params:a},activeItem:{type:c,data:l},location:i,match:E,history:s,intl:m}=e,_=Object(o.useSelector)(re.m),u=c===d.b.DEVICE&&!Object(O.isAdopted)(l),{id:b,site:p,panel:I,page:g,subPanel:C,subPage:R}=a,v=ie(l,c),T=Hg[v],h=I===(null==T?void 0:T.default);if(!T)return null;const P=T.singlePanel?null:u?[{id:T.default,label:m.formatMessage({id:T.panels[T.default].title}),icon:T.panels[T.default].icon}]:Object.keys(T.panels).reduce((t,a)=>{const{disabled:n,title:c,icon:r}=T.panels[a];return n&&"function"==typeof n&&n({...e,isUdm:_})||t.push({id:a,label:m.formatMessage({id:c}),icon:r}),t},[]),D=Object(n.i)(t,{id:b,site:p,page:g,panel:T.default,subPage:R});return r.a.createElement(F.a,{height:"100%",flexDirection:"column"},!T.singlePanel&&!u&&r.a.createElement($g,{activeItem:l,tabs:P,history:s,match:E,location:i}),r.a.createElement(Qg,{activeItem:l}),r.a.createElement(TC,{isDefaultPanel:h,flexDirection:"column"},(()=>{const c=T.panels[I];if(!c)return r.a.createElement(n.c,{to:D});const{component:i,disabled:o}=c;if(!0===o||"function"==typeof o&&o({...e,isUdm:_})||u&&I!==T.default)return r.a.createElement(n.c,{to:D});if(C&&c.subpanel){const{component:e}=c.subpanel;return r.a.createElement(e,{activeItem:l,params:a,path:t,history:s})}return r.a.createElement(i,{activeItem:l,params:a,path:t,history:s,key:`${I}${C&&c.subpanel?"-subpanel":""}`})})()),h&&"clients"===g&&c===d.b.CLIENT&&r.a.createElement(lC,{activeItem:l}),h&&"devices"===g&&c===d.b.DEVICE&&r.a.createElement(vC,{activeItem:l}))});var PC=r.a.memo(e=>e.match&&r.a.createElement(hC,Object.assign({},e)),(e,t)=>null===t.match);const DC=l.a`
  & > div {
    overflow: hidden;
  }
`;var fC=({location:e,history:t,panelType:a})=>{var l;const u=Object(o.useSelector)(m.j),[b,p]=Object(c.useState)(!1),O=Object(o.useSelector)(T),I=Object(o.useDispatch)(),{path:h}=Object(n.n)(),{site:P,id:D}=Object(n.m)(),y=Object(c.useMemo)(()=>{if(D)switch(a){case d.b.DEVICE:return f(D);case d.b.UNIFI_DEVICE:return e=D,Object(C.b)()(Object(_.a)(R.selectIsUnifiDevicesPageSupportedController,f(e),N(e),(e,t,a)=>{if(e){if(t&&"mac"in t)return{panel:d.b.DEVICE,activeItemPayload:t};if(a&&"mac"in a)return{panel:d.b.UNIFI_DEVICE_CLIENT,activeItemPayload:a}}return null}),e=>e);case d.b.CLIENT:return A(D);case d.b.WIFI_MAN:return(e=>Object(C.b)()(Object(_.a)(v.c,t=>t.find(t=>t.id===e)),e=>e))(D);case d.b.ISP_DETAILS:return(e=>Object(C.b)()(Object(_.a)(g.selectIspInfoItems,t=>t.find(({networkgroup:t})=>t===e)),e=>e))(D);default:return null}var e;return null},[D,a])||function(){return null},S=Object(o.useSelector)(y);let V=S||{},w=a;a===d.b.UNIFI_DEVICE&&S&&"activeItemPayload"in S&&"panel"in S&&({activeItemPayload:V,panel:w}=S);const M={type:w,data:O||b?V:{}},F=()=>{p(!0),t.push(e.pathname.split("/properties")[0])};Object(s.a)(()=>O&&F(),[O]),Object(c.useEffect)(()=>{O&&!e.pathname.includes("/properties")&&I(Object(j.f)())},[e]),Object(c.useEffect)(()=>{O&&!M.type&&F()},[O,M]);const U=Object(c.useCallback)(()=>{p(!1)},[]);return Object(c.useEffect)(()=>{var c,r;w&&(null===(c=null==e?void 0:e.pathname)||void 0===c?void 0:c.includes("properties/"))&&((null===(r=Object.keys(V||{}))||void 0===r?void 0:r.length)?I(Object(j.g)({type:a,mac:D,id:D})):t.push(Object(n.i)(h,{site:P})))},[]),Object(L.f)([Object(x.c)("devices")],M.type&&(null===(l=Object.keys((null==M?void 0:M.data)||{}))||void 0===l?void 0:l.length)?r.a.createElement(i.a,{in:O,header:r.a.createElement(ce,{activeItem:M}),onClose:F,onEntered:U,onExited:U,className:DC,style:{border:"none"}},(O||b)&&r.a.createElement(E.a,{path:u+"/:page/:subPage?/properties/:id/:panel?/:subPanel?/:subPanelId?"},e=>r.a.createElement(PC,Object.assign({activeItem:M},e)))):null)};t.a=Object(n.o)(fC)},2141:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e,t,a=[]){const c=a=>{e&&e.current&&a.target!==e.current&&!e.current.contains(a.target)&&t(a)};Object(n.useEffect)(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),a)}},2153:function(e,t,a){"use strict";var n,c=a(0),r=a.n(c),l=a(5),i=a(1133),o=a(45),E=a(42),s=a(32),m=a(2),d=a(8),_=a(71),u=a(168),b=a(532),p=a(215);!function(e){e.DEFAULT="default",e.HOVER="hover",e.DISABLED="disabled",e.ACTIVE="active"}(n||(n={}));const O={[n.DEFAULT]:{light:"#d6d9e2",dark:"#3f3f3f"},[n.HOVER]:{light:"#7e8190",dark:"#9d9d9d"},[n.DISABLED]:{light:"#eeeff3",dark:"#1e1e1e"},[n.ACTIVE]:{light:"#a4a7b5",dark:"#2f2f2f"}},I=(e,t)=>O[t][e],g=(e,t)=>"1px 0px 0px 0px "+I(e,t),C=Object(l.c)(p.a,{shouldForwardProp:e=>"rotate"!==e})`
  margin: 0;
  padding: 0;
  width: 26px;
  height: 24px;
  color: inherit;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
  border-right: 0;
  border-color: transparent;
  border-color: ${({motif:e})=>""+I(e,n.DEFAULT)};
  box-shadow: ${({motif:e})=>""+g(e,n.DEFAULT)};
  ${({rotate:e=!1})=>e?"\n    transform: rotate(-180deg);\n  ":"\n  position: relative; \n  left: -1px;\n    "}
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      display: flex;
    }
  }
  &:disabled {
    z-index: 0;
    box-shadow: ${({motif:e})=>g(e,n.DISABLED)+" !important"};
    border-color: ${({motif:e})=>I(e,n.DISABLED)+" !important"};
  }
  &:hover {
    z-index: 1;
    box-shadow: ${({motif:e})=>g(e,n.HOVER)+" !important"};
    border-color: ${({motif:e})=>I(e,n.HOVER)+" !important"};
    border-right: 0;
    background-color: transparent !important;
  }
  &:active {
    box-shadow: ${({motif:e})=>g(e,n.ACTIVE)+" !important"};
    border-color: ${({motif:e})=>I(e,n.ACTIVE)+" !important"};
  }
`;var R=({disabled:e,onClick:t,rotate:a,motif:n})=>r.a.createElement(C,{variant:"secondary",rotate:a,disabled:e,onClick:t,motif:n},r.a.createElement("svg",{width:"4",height:"8",viewBox:"0 0 4 8",fill:"none"},r.a.createElement("path",{d:"M3.75026 0.999386C3.75026 1.11739 3.70826 1.23639 3.62426 1.33138L1.25026 3.99939L1.27026 4.02039L3.62326 6.66739C3.80726 6.87339 3.78826 7.18939 3.58226 7.37339C3.37626 7.55739 3.06026 7.53839 2.87626 7.33239L0.530256 4.69439C0.156256 4.30739 0.156256 3.69139 0.530256 3.30439L2.87526 0.667385C3.05826 0.461386 3.37526 0.442385 3.58126 0.626385C3.69326 0.724385 3.75026 0.861386 3.75026 0.999386Z",fill:"#A4A7B5"})));const v=Object(l.c)(_.g)`
  padding: 32px;
  overflow: auto;
  table {
    z-index: 1;
  }
`,T=Object(l.c)(i.a)`
  > div > div {
    height: 28px;
  }
  input {
    ${({theme:e,motif:t})=>`\n      margin-top: ${e.spacing["spacing-xs"]};\n      color: ${"dark"===t?"#c2c2c2":o.a["grey-2"]} !important;\n      -webkit-text-fill-color: ${"dark"===t?"#c2c2c2":o.a["grey-2"]} !important;\n    `}
  }
`,h=[{value:"25",default:!0},{value:"50"},{value:"100"}];t.a=({onRenderTable:e,customContent:t,items:a,section:n,rowOptions:l,onRowsChanged:i,onPageChanged:o,tableType:p,totalItems:O=(null==a?void 0:a.length)||0,pageNumber:I})=>{const{motif:g}=Object(E.a)(),C=Object(d.useDispatch)(),P=Object(c.useMemo)(()=>l||h,[l]),D=Object(c.useMemo)(()=>P.map(({value:e})=>({label:e,value:e})),[l,P]),f=Object(d.useSelector)(Object(u.w)(p)),y=Object(c.useMemo)(()=>{var e,t;return Number((null==f?void 0:f.rowsPerPage)&&D.some(({value:e})=>Number(e)===f.rowsPerPage)?f.rowsPerPage:(null===(e=P.find(e=>null==e?void 0:e.default))||void 0===e?void 0:e.value)||(null===(t=null==P?void 0:P[0])||void 0===t?void 0:t.value))},[f,D,P]),S=Object(c.useMemo)(()=>Math.max(1,I||0),[I]),A=Object(c.useCallback)(e=>{null==o||o(e)},[o,C]),N=Object(c.useCallback)(()=>{A(S-1)},[S,A]),j=Object(c.useCallback)(()=>{A(S+1)},[S,A]),L=Object(c.useCallback)(({value:e})=>{const t=Number(e);C(Object(b.k)(p,{rowsPerPage:t})),null==i||i(t)},[C,i,p]),x=Object(c.useMemo)(()=>{let e=(S-1)*y+1;return e>(null==a?void 0:a.length)&&(e=(null==a?void 0:a.length)-y,A(Math.ceil(Math.ceil(e)/y+1))),e},[A,S,y,null==a?void 0:a.length]),V=Object(c.useMemo)(()=>{let e=x+y-1;return e>=(null==a?void 0:a.length)&&(e=null==a?void 0:a.length),e},[x,y,null==a?void 0:a.length]),w=Object(c.useMemo)(()=>({from:Math.max(0,x-1),rowsPerPage:y}),[x,y]),M=Object(c.useMemo)(()=>1===S,[S]),F=Object(c.useMemo)(()=>V>=(null==a?void 0:a.length),[V,null==a?void 0:a.length]);return r.a.createElement(v,{width:"100%",height:"100%",flexDirection:"column"},e(w),O>y||1!==x?r.a.createElement(_.g,{marginTop:16,justifyContent:"space-between"},r.a.createElement(_.g,{alignItems:"center"},r.a.createElement(_.g,{marginRight:8},r.a.createElement(s.a,{color:"secondary"},r.a.createElement(m.c,{id:"PAGINATION",values:{from:x,to:V,total:O,section:r.a.createElement(m.c,{id:n})}}))),r.a.createElement(_.g,{marginRight:24},r.a.createElement(s.a,{color:"secondary"},r.a.createElement(R,{disabled:M,onClick:N,motif:g})),r.a.createElement(s.a,{color:"secondary"},r.a.createElement(R,{disabled:F,rotate:!0,onClick:j,motif:g}))),r.a.createElement(_.g,{alignItems:"center"},r.a.createElement(_.g,{marginRight:8},r.a.createElement(s.a,{color:"secondary"},r.a.createElement(m.c,{id:"ROWS_PER_PAGE"}))),r.a.createElement(T,{value:null==y?void 0:y.toString(),width:48,options:D,onChange:L,motif:g}))),t):null)}},2517:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(15),i=a(665),o=a(2141),E=a(527),s=a(71),m=a(32);const d=Object(r.c)(s.g)`
  min-height: 55px;
  ${({onClick:e})=>e&&"\n    &:hover {\n      cursor: pointer;\n    }\n  "}
`,_=Object(r.c)(s.g)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xs"]};
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]};
  overflow: hidden;
`;var u=({children:e,device:t,displaySubtitleForSelected:a,displayInfoForSelected:n,ignoreResponsiveText:r,...l})=>{const{image:i,title:o,subtitle:E,info:u}=t;let b;n&&u?b=u:a&&E&&(b=E);const I=r?m.a:O,g=r?m.a:p;return c.a.createElement(d,Object.assign({alignItems:"center"},l),c.a.createElement(s.g,{alignItems:"center",justifyContent:"center"},i),c.a.createElement(_,{flexDirection:"column",flex:1},c.a.createElement(I,{color:"primary",weight:"bold",truncate:!0,size:"caption"},o),b&&c.a.createElement(g,{color:"tertiary",truncate:!0,size:"caption"},b)),e)};const b=Object(r.c)(s.g)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-l"]};
  min-height: 55px;
  &:hover {
    background: ${({theme:e})=>e.colors.dashboardHoverBackground};
    cursor: pointer;
  }
`,p=Object(r.c)(m.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;
  @media ${i.b.VIEWPORT_S_DOWN}, ${i.b.VIEWPORT_XL_UP} {
    font-size: 16px !important;
  }
`,O=Object(r.c)(m.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;
  @media ${i.b.VIEWPORT_S_DOWN}, ${i.b.VIEWPORT_XL_UP} {
    font-size: 18px !important;
  }
`;var I=({device:e,selected:t,onClick:a,ignoreResponsiveText:n,...r})=>{const{image:l,title:i,subtitle:o,info:E}=e,d=n?m.a:O,u=n?m.a:p;return c.a.createElement(b,Object.assign({alignItems:"center",onClick:a},r),c.a.createElement(s.g,{alignItems:"center",justifyContent:"center"},l),c.a.createElement(_,{flexDirection:"column",flex:1},c.a.createElement(d,{color:t?"primary":"secondary",weight:"bold",truncate:!0,size:"caption"},i),!!o&&c.a.createElement(u,{color:"tertiary",truncate:!0,size:"caption"},o)),!!E&&E)};const g=Object(r.c)("div")`
  position: relative;
  width: 100%;
  user-select: none;

  @media ${i.b.VIEWPORT_DASHBOARD_HORIZONTAL} and ${i.b.VIEWPORT_M_DOWN} {
    overflow: visible;
  }
`,C=Object(r.c)(s.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui06};
  background: ${({theme:e})=>e.motifPalette.ui07};
  position: absolute;
  bottom: 0;
  width: fit-content;
  max-width: 280px;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 15px 45px 0 rgba(21, 23, 37, 0.2);
  transform: translateY(100%);
  z-index: 10;
`,R=Object(r.c)(l.f)`
  margin-left: ${({theme:e})=>e.spacing["spacing-l"]};
  color: ${({theme:e})=>e.motifPalette.icon01} !important;
  transform: rotate(${({isActive:e})=>e?90:-90}deg);
  transition: transform 200ms cubic-bezier(0.4, 0, 0, 1.3);
`;t.a=({devices:e,selectedDevice:t,setSelectedDevice:a,displaySubtitleForSelected:r,displayInfoForSelected:l,ignoreResponsiveText:i})=>{const[s,m]=Object(n.useState)(!1),d=Object(n.useRef)(),_=e.find(({id:e})=>e===t)||e[0];return Object(E.a)(()=>m(!1)),Object(o.a)(d,()=>m(!1)),c.a.createElement(g,{innerRef:d},c.a.createElement(u,{device:_,onClick:()=>m(!s),displaySubtitleForSelected:r,displayInfoForSelected:l,ignoreResponsiveText:i},c.a.createElement(R,{width:"12",height:"12",isActive:s})),s&&c.a.createElement(C,{flexDirection:"column"},e.map(e=>c.a.createElement(I,{key:e.id,selected:e.id===t,onClick:()=>{a(e.id),m(!s)},device:e,ignoreResponsiveText:i}))))}},2888:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a(73),i=a(3),o=a(169),E=a(83),s=a(34),m=a(18),d=a(153),_=a(178),u=a(670),b=a(2050),p=a(70),O=a(6),I=a(781),g=a(528),C=a(15),R=a(2),v=a(619),T=a(798),h=a(1958),P=a(107),D=a(119),f=a(4),y=a(795),S=a(231),A=a(38),N=a(55),j=a(69);const L={[j.a.ACTIVE]:e=>Object(l.getIsClientConnected)(e),[j.a.OFFLINE]:e=>!(e.type!==l.ClientType.VPN&&e.blocked||e.isUp),[j.a.BLOCKED]:e=>e.type!==l.ClientType.VPN&&!!e.blocked,[j.c.VPN]:e=>e.type===l.ClientType.VPN,[j.c.WIRED]:e=>e.type===l.ClientType.WIRED,[j.c.USERS]:e=>e.type===l.ClientType.VPN||!e.is_guest,[j.c.GUESTS]:e=>"is_guest"in e&&!!e.is_guest,[j.c.NG]:e=>e.isUp?e.type===l.ClientType.WIRELESS&&(e.radio===N.b.NG||!e.radio&&e.eagerly_discovered):e.type===l.ClientType.WIRELESS,[j.c.NA]:e=>e.isUp?e.type===l.ClientType.WIRELESS&&(e.radio===N.b.NA||!e.radio&&e.eagerly_discovered):e.type===l.ClientType.WIRELESS,[j.b.DEVICE]:(e,t)=>t&&e.type!==l.ClientType.VPN&&t===e.uplink_mac},x=(e,t)=>{const a={};return Object.keys(e||{}).forEach(n=>{const c=e[n]||{},r=Object.keys(c).filter(e=>c[e]);a[n]=0===r.length||r.some(e=>{var a,n;return null===(n=null===(a=null==L?void 0:L[e])||void 0===a?void 0:a.call(L,t,c[e]))||void 0===n||n})}),Object.values(a)},V=(e,t)=>(e=>Object.values(e||{}).flatMap(e=>Object.values(e||{})).filter(Boolean).length)(e)>0&&x(e,t).every(Boolean);var w=a(2016);const M={[j.b.STATUS]:{[j.a.ACTIVE]:!0},[j.e.CONNECTION_TYPE]:{[j.c.NG]:!0,[j.c.NA]:!0,[j.c.WIRED]:!0,[j.c.VPN]:!0},[j.e.CLIENTS_TYPE]:{[j.c.USERS]:!0,[j.c.GUESTS]:!0},[j.b.DEVICE]:{[j.b.DEVICE]:""}},F={[j.b.STATUS]:{[j.a.ACTIVE]:!0,[j.a.OFFLINE]:!0,[j.a.BLOCKED]:!0},[j.e.CONNECTION_TYPE]:{[j.c.NG]:!0,[j.c.NA]:!0,[j.c.WIRED]:!0,[j.c.VPN]:!0},[j.e.CLIENTS_TYPE]:{[j.c.USERS]:!0,[j.c.GUESTS]:!0},[j.b.DEVICE]:{[j.b.DEVICE]:""}};var U=a(129);const k=Object(S.b)(P.a.CLIENTS,D.a.CLIENT,M),z=Object(S.c)(P.a.CLIENTS),B=Object(A.b)()(Object(f.a)(l.selectCombinedClientsData,y.t,Object(d.d)(d.a.ALL_UNIFI_DEVICES_PAGE),U.m,(e,t,a,n)=>e.filter(e=>e.type===l.ClientType.VPN||!a||!e.unifi_device).map(e=>Object(w.d)(e,t,n))),e=>e),W=Object(A.b)()(Object(f.a)(B,z,k,(e,t,a)=>e.filter(e=>{if(t){const a=t.toLowerCase().trim();if(!["name","note","hostname","mac","fixed_ip","ip"].some(t=>{var n;return(null!==(n=null==e?void 0:e[t])&&void 0!==n?n:"").toLowerCase().includes(a)}))return!1}return V(Object(l.convertLegacyFiltersToCurrentStructure)(a),e)})),e=>e);var H=a(5),G=a(32),Y=a(2825),$=a(1818),K=a(21);const X=Object(H.c)(G.a)`
  margin-bottom: 4px;
`;var q=({items:e,heading:t})=>c.a.createElement(K.a,{flexDirection:"column",marginTop:16},c.a.createElement(X,{weight:"bold",size:"body"},c.a.createElement(R.c,{id:t})),c.a.createElement(Y.a,{spacing:"flush",variant:"list",items:e})),Z=a(46),J=a(117),Q=a(2517),ee=a(646),te=a(2896),ae=a(71);const ne=Object(H.c)("div")`
  position: absolute;
  left: 0;
  top: 0;
`,ce=Object(H.c)(ae.g)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`,re=Object(H.c)("div",{shouldForwardProp:e=>"textAlign"!==e})`
  width: 20%;
  max-width: 20%;
  text-align: ${({textAlign:e})=>e};
`,le=Object(H.c)("div",{shouldForwardProp:e=>"left"!==e})`
  position: absolute;
  left: ${({left:e})=>e}%;
  transform: translateX(-50%);
  width: auto;
`,ie=Object(H.c)("div")`
  display: flex;
  position: relative;
  padding: ${({theme:{spacing:e}})=>`${e["spacing-xxl"]} 0 ${e["spacing-l"]}`};
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]};
  width: 100%;
  overflow: visible;
`,oe=Object(H.c)(te.a)`
  margin: 0 2px;
`,Ee=[24,168,720,0];var se=()=>{var e,t;const a=Object(r.useDispatch)(),i=null!==(t=null===(e=Object(r.useSelector)(m.P))||void 0===e?void 0:e.offlineClientTimeframe)&&void 0!==t?t:24,o=i&&Ee.findIndex(e=>e===i)||0,[E,s]=Object(n.useState)(o),d=Object(ee.a)(e=>{a(Object(l.fetchOfflineClients)({queryParams:{withinHours:e}},{crudCacheStrategy:{type:O.a.CACHE}})),a(Object(m.k)({offlineClientTimeframe:e}))},300),_=Object(n.useCallback)(e=>{var t;const a=+(null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value)||0;s(a),d(Ee[a])},[s]);return c.a.createElement(ae.g,{justifyContent:"center"},c.a.createElement(ie,null,c.a.createElement(ne,null,c.a.createElement(G.a,null,c.a.createElement(R.c,{id:"CLIENT_FILTER_OFFLINE_TIMEFRAME_LAST_SEEN"}))),c.a.createElement(oe,{min:0,max:3,value:E,onChange:_,segments:3}),c.a.createElement(ce,{justifyContent:"space-between"},c.a.createElement(re,{textAlign:"left"},c.a.createElement(G.a,{size:"label"},c.a.createElement(R.c,{id:"CLIENT_FILTER_OFFLINE_TIMEFRAME_24_HOURS"}))),c.a.createElement(le,{left:33},c.a.createElement(G.a,{size:"label"},c.a.createElement(R.c,{id:"CLIENT_FILTER_OFFLINE_TIMEFRAME_WEEK"}))),c.a.createElement(le,{left:66},c.a.createElement(G.a,{size:"label"},c.a.createElement(R.c,{id:"CLIENT_FILTER_OFFLINE_TIMEFRAME_MONTH"}))),c.a.createElement(re,{textAlign:"right"},c.a.createElement(G.a,{size:"label"},c.a.createElement(R.c,{id:"CLIENT_FILTER_OFFLINE_TIMEFRAME_ALL_TIME"}))))))};const me=Object(H.c)("div")`
  padding: 24px;
`,de=Object(H.c)(J.a)`
  width: 38px;
  height: 38px;
`,_e=Object(H.c)("div")`
  margin-bottom: 16px;
`;var ue=Object(R.f)(({handleFilterChange:e,onChangeClientFilter:t,devicesData:a,intl:o})=>{var E,s,m,d,_,u;Object(r.useDispatch)();const b=Object(l.convertLegacyFiltersToCurrentStructure)(Object(r.useSelector)(k)),p=(Object(n.useRef)(b),Object(r.useSelector)(B)),{totalUplinkClients:O,apData:I}=a,C=Object(n.useMemo)(()=>[{id:j.f,title:c.a.createElement(R.c,{id:"CLIENT_FILTER_DROPDOWN_AP_ALL"}),image:c.a.createElement(de,{deviceModel:i.DeviceModel.U7HD,deviceType:i.DeviceType.AP}),subtitle:c.a.createElement(G.a,{size:"caption",color:"tertiary"},c.a.createElement(R.c,{id:"CLIENT_FILTER_DROPDOWN_DEVICES_CLIENT_COUNT",values:{count:O}}))},...Object.keys(I).map(e=>{const{count:t,device:a}=I[e];return{id:a.mac,title:Object(Z.c)(a),image:c.a.createElement(de,{deviceModel:a.model,deviceType:a.type}),subtitle:c.a.createElement(G.a,{size:"caption",color:"tertiary"},c.a.createElement(R.c,{id:"CLIENT_FILTER_DROPDOWN_DEVICES_CLIENT_COUNT",values:{count:t}}))}})],[I,O]),v=Object(n.useCallback)(t=>e(j.b.DEVICE,j.b.DEVICE,t),[e]),T=(e,t,a=!0)=>{var n;return null===(n=(p||[]).map(n=>x(Object.assign({},b,{[e]:{[t]:a}}),n)).filter(e=>e.every(Boolean)))||void 0===n?void 0:n.length},P=Object(n.useMemo)(()=>Object(w.b)(b),[b]),D=Object(n.useCallback)(({target:{checked:e}})=>{const a=e?Object(g.a)(F):{};t(a)},[t]);return c.a.createElement(me,null,c.a.createElement(h.d,{checked:P,onChange:D,id:"showAllClientDevices",text:"CLIENT_FILTER_SHOW_ALL_CLIENT_DEVICES",toggleStyle:{marginTop:4,marginBottom:16}}),c.a.createElement(_e,null,c.a.createElement(Q.a,{devices:C,selectedDevice:null!==(s=null===(E=null==b?void 0:b[j.b.DEVICE])||void 0===E?void 0:E[j.b.DEVICE])&&void 0!==s?s:"",setSelectedDevice:v,displayInfoForSelected:!0,displaySubtitleForSelected:!0,ignoreResponsiveText:!0})),c.a.createElement(Y.a,{spacing:"flush",variant:"list",items:[{id:j.c.NG,checked:null===(m=b[j.e.CONNECTION_TYPE])||void 0===m?void 0:m[j.c.NG],children:c.a.createElement(R.c,{id:"CLIENT_FILTER_CONNECTION_"+j.c.NG.toUpperCase()}),onChange:({target:{checked:t}})=>e(j.e.CONNECTION_TYPE,j.c.NG,t)},{id:j.c.NA,checked:null===(d=b[j.e.CONNECTION_TYPE])||void 0===d?void 0:d[j.c.NA],children:c.a.createElement(R.c,{id:"CLIENT_FILTER_CONNECTION_"+j.c.NA.toUpperCase()}),onChange:({target:{checked:t}})=>e(j.e.CONNECTION_TYPE,j.c.NA,t)}]}),c.a.createElement(q,{heading:"CLIENT_FILTER_CONNECTION_EXPERIENCE",items:[{id:j.c.WIRED,checked:null===(_=b[j.e.CONNECTION_TYPE])||void 0===_?void 0:_[j.c.WIRED],children:c.a.createElement(R.c,{id:"CLIENT_FILTER_CONNECTION_"+j.c.WIRED.toUpperCase()}),onChange:({target:{checked:t}})=>e(j.e.CONNECTION_TYPE,j.c.WIRED,t)},{id:j.c.VPN,checked:null===(u=b[j.e.CONNECTION_TYPE])||void 0===u?void 0:u[j.c.VPN],children:c.a.createElement(R.c,{id:"CLIENT_FILTER_CONNECTION_"+j.c.VPN.toUpperCase()}),onChange:({target:{checked:t}})=>e(j.e.CONNECTION_TYPE,j.c.VPN,t)}]}),c.a.createElement(q,{heading:"CLIENT_FILTER_CONNECTION_CLIENTS",items:j.d[j.e.CLIENTS_TYPE].map(t=>{var a;return{key:t,id:t,checked:null===(a=b[j.e.CLIENTS_TYPE])||void 0===a?void 0:a[t],children:c.a.createElement(R.c,{id:"CLIENT_FILTER_CONNECTION_"+t.toUpperCase()}),onChange:({target:{checked:a}})=>e(j.e.CLIENTS_TYPE,t,a),labelProps:{count:T(j.e.CLIENTS_TYPE,t)}}})}),c.a.createElement($.a,{multiOpen:!0,variant:"secondary",items:[{id:j.b.STATUS,openByDefault:!0,label:c.a.createElement(R.c,{id:"CLIENT_FILTER_STATUS"}),renderContent:()=>{var t;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Y.a,{spacing:"flush",variant:"list",items:Object.values(j.a).map(t=>{var a;return{key:t,id:t,checked:null===(a=b[j.b.STATUS])||void 0===a?void 0:a[t],children:c.a.createElement(R.c,{id:"CLIENT_FILTER_STATUS_"+t.toUpperCase()}),onChange:({target:{checked:a}})=>e(j.b.STATUS,t,a),labelProps:{count:T(j.b.STATUS,t)}}})}),(null===(t=b[j.b.STATUS])||void 0===t?void 0:t[j.a.OFFLINE])&&c.a.createElement(se,null))}}],renderOnlyExpandedContent:!0}))});var be=()=>{var e,t;const a=Object(r.useSelector)(B),i=Object(r.useSelector)(z),o=Object(l.convertLegacyFiltersToCurrentStructure)(Object(r.useSelector)(k)),E=Object(n.useRef)(o),s=null!==(t=null===(e=null==o?void 0:o[j.b.DEVICE])||void 0===e?void 0:e[j.b.DEVICE])&&void 0!==t?t:"",d=Object(r.useDispatch)(),[_,u]=Object(n.useState)(i),b=Object(n.useMemo)(()=>Object(w.a)(o),[o]),p=Object(n.useCallback)(e=>{d(Object(T.b)(e)),d(Object(m.S)(D.a.CLIENT,{filters:e}))},[d]),O=Object(n.useCallback)(()=>{p(Object(g.a)(M))},[p]),I=Object(n.useCallback)((e,t,a)=>{const n=Object.assign({},o,{[e]:{...o[e]||{},[t]:a}});E.current=n,p(n)},[o,p]),f=Object(n.useMemo)(()=>{let e=0;const t=a.reduce((t,a)=>{if(a.type===l.ClientType.VPN)return t;const{uplink:n,uplink_mac:c,is_wired:r}=a;return n&&c&&!r?(t[c]||(t[c]={count:0,device:n}),t[c].count+=1,e+=1,t):t},{});return{totalUplinkClients:e,apData:t}},[a]),y=Object.keys(f.apData).find(e=>e===s)||j.f;return Object(n.useEffect)(()=>{I(j.b.DEVICE,j.b.DEVICE,y)},[]),c.a.createElement(h.c,{isLoading:!1,columnTabProps:{columns:Object.values(v.b),columnLabels:v.c,tableType:D.a.CLIENT},renderFilterDrawerContent:c.a.createElement(ue,{devicesData:f,onChangeClientFilter:p,handleFilterChange:I}),filterFooterProps:{label:c.a.createElement(R.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_DEFAULTS"}),onClick:O,disabled:b},title:"CLIENT_HEADER_CLIENTS"},c.a.createElement(c.a.Fragment,null,c.a.createElement(h.e,{value:_,onChange:({target:{value:e}})=>{u(e),d(Object(T.c)(e))},onClear:()=>{u(""),d(Object(T.c)(""))},onSubmit:(e,t)=>{d(Object(T.c)(t))}}),c.a.createElement(h.b,{onClick:()=>d(Object(T.d)(P.b.LIST))},c.a.createElement(C.bb,{size:"original",variant:"fill"})),c.a.createElement(h.b,{onClick:()=>d(Object(T.d)(P.b.GRID))},c.a.createElement(C.Z,{size:"original"}))))},pe=a(36),Oe=a(373),Ie=a(1791),ge=a(1908),Ce=a(159),Re=a(522),ve=a(146),Te=a(52),he=a(1910),Pe=a(215);var De=()=>{const e=Object(r.useDispatch)(),t=Object(n.useCallback)(()=>e(Object(T.f)()),[]),a=Object(r.useSelector)(l.selectCombinedClientsData);return c.a.createElement(ae.g,{width:"100%",flexDirection:"column"},(null==a?void 0:a.length)?c.a.createElement(he.a,{icon:"noClients",maxWidth:386,detailPadding:35,title:c.a.createElement(R.c,{id:"CLIENT_EMPTY_FILTER_HEADER"}),details:c.a.createElement(R.c,{id:"CLIENT_EMPTY_FILTER_NO_CLIENTS_DETAILS"}),button:c.a.createElement(Pe.a,{variant:"primary"},c.a.createElement(R.c,{id:"COMMON_RESET_DISPLAY_OPTIONS"})),onClick:()=>{const t=Object(g.a)(M);e(Object(T.b)(t)),e(Object(m.S)(D.a.CLIENT,{filters:t}))}}):c.a.createElement(he.a,{icon:"noClients",maxWidth:386,detailPadding:35,title:c.a.createElement(R.c,{id:"CLIENT_TABLE_EMPTY_HEADER"}),details:c.a.createElement(R.c,{id:"CLIENT_TABLE_EMPTY_NO_CLIENTS_DETAILS"}),button:c.a.createElement(Pe.a,{variant:"primary"},c.a.createElement(R.c,{id:"CLIENT_EMPTY_ADD_CLIENTS_BUTTON"})),onClick:t}))},fe=a(2035),ye=a(643),Se=a(45);const Ae=Object(H.c)(ye.a,{shouldForwardProp:e=>!["marginLeft","marginRight"].includes(e)})`
  width: 6px;
  height: 6px;
  ${({marginLeft:e})=>e&&`margin-left: ${e}px;`}
  ${({marginRight:e})=>e&&`margin-right: ${e}px;`}
`,Ne=Object(H.c)(C.v,{shouldForwardProp:e=>!["marginLeft","marginRight"].includes(e)})`
  width: 13px;
  height: 13px;
  color: ${Se.a["white-6"]};
  ${({marginLeft:e})=>e&&`margin-left: ${e}px;`}
  ${({marginRight:e})=>e&&`margin-right: ${e}px;`}
`;var je=({status:e,marginLeft:t,marginRight:a})=>"blocked"===e?c.a.createElement(Ne,{marginLeft:t-3,marginRight:a-3}):c.a.createElement(Ae,{variant:e,marginLeft:t,marginRight:a});const Le=Object(H.c)(ae.g)`
  height: 120px;
  background: ${({theme:e})=>e.motifPalette.disabled01};
  > picture {
    width: calc(100% - 10px) !important;
    height: 110px;
    text-align: center;
  }
`,xe=Object(H.c)(G.a)`
  max-width: 90%;
`,Ve=Object(H.c)(Re.a)`
  max-width: 100%;
  max-height: 80%;
`,we=Object(H.c)(ae.g)`
  width: 100%;
  height: 100%;
  ${({theme:{spacing:e}})=>`padding: ${e["spacing-l"]} 0 ${e["spacing-s"]}`};
`,Me=Object(H.c)(ae.g)`
  > div:nth-child(2) {
    max-width: 90%;
    > span:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,Fe=Object(H.c)(G.a)`
  height: 18px;
`,Ue=Object(H.c)(ae.g)`
  svg {
    color: ${({theme:e})=>e.motifPalette.icon02};
  }
`,ke=Object(H.c)(G.a)`
  margin-left: 3px;
`,ze=e=>e.map(e=>{const{id:t,ip:a}=e,{satisfaction:n}=Object(l.getClientExperienceFromPort)(void 0,e);let r;return e.type!==ve.c.VPN&&({is_wired:r}=e),{id:t,image:e.type!==ve.c.VPN?c.a.createElement(Le,{justifyContent:"center",alignItems:"center",width:"100%"},c.a.createElement(Ve,{client:e,grid:!0,width:"auto"})):null,children:c.a.createElement(we,{flexDirection:"column",justifyContent:"center"},c.a.createElement(Me,{justifyContent:"center",alignItems:"center"},c.a.createElement(je,{status:Object(l.getStatus)(e),marginRight:6}),c.a.createElement(xe,{truncate:!0},Object(w.c)(e))),c.a.createElement(Fe,{centered:!0,color:"tertiary",size:"caption"},e.type===ve.c.VPN&&e.remote_ip||e.type!==ve.c.VPN&&e.fixed_ip||a||""),r?c.a.createElement(ae.g,{height:26}):c.a.createElement(ae.g,{margin:"8px 0",alignItems:"center"},c.a.createElement(Ie.a,{value:n,variant:Object(Ce.c)(n)})),c.a.createElement(Ue,{alignItems:"center"},r?c.a.createElement(ae.g,{alignItems:"center",height:20},c.a.createElement(C.G,{height:14,width:14}),c.a.createElement(ke,{color:"tertiary",size:"caption"},c.a.createElement(R.c,{id:e.type===ve.c.WIRED&&e.wired_rate_mbps>=1e3?"COMMON_PORT_SPEED_GBE":"COMMON_PORT_SPEED_MBE"}))):c.a.createElement(C.sc,{height:20,width:20}),c.a.createElement(ae.g,{flex:"1"}),c.a.createElement(fe.a,{client:e,props:["tx_bytes-r"]},({"tx_bytes-r":e=0})=>c.a.createElement(ae.r,{bytes:e,direction:"down",pow:2})),c.a.createElement(fe.a,{client:e,props:["rx_bytes-r"]},({"rx_bytes-r":e=0})=>c.a.createElement(ae.r,{bytes:e,direction:"up",iconStyle:{marginLeft:"8px"},pow:2}))))}});var Be=({handleRowClick:e})=>{const t=Object(r.useSelector)(W);return t.length?c.a.createElement(Te.f,null,c.a.createElement(ge.a,{gutterSize:16,tileSize:"medium",selectType:"none",onTileClick:(a,n,c)=>e(t[c]),items:ze(t)})):c.a.createElement(De,null)},We=a(1851),He=a(791),Ge=a(2153),Ye=a(2048),$e=a(647);var Ke=({rowData:e})=>c.a.createElement(ae.g,{height:30,minWidth:30,maxWidth:30,justifyContent:"center",alignItems:"center"},c.a.createElement(Re.a,{client:e,alt:e.name})),Xe=a(61),qe=a(664),Ze=a(784),Je=a(54),Qe=a(1915),et=a(29);const tt={[j.a.ACTIVE]:1,[j.a.OFFLINE]:2,[j.a.BLOCKED]:3,unknown:4},at=e=>Object(l.getIsClientConnected)(e)?j.a.ACTIVE:e.type!==l.ClientType.VPN&&e.blocked||e.isUp?e.type!==l.ClientType.VPN&&e.blocked?j.a.BLOCKED:"unknown":j.a.OFFLINE,nt=(e,t)=>{const a=tt[at(e)],n=tt[at(t)];return Object(Je.d)(a,n)},ct=(e,t)=>{if(e.type!==l.ClientType.VPN){const{uplinkName:a}=e,n=e.type===l.ClientType.WIRED?e.sw_port:null;return a?[a,n]:[Object(et.d)(t),null]}return[Object(et.c)(t),null]},rt=e=>(t,a,n,c,r)=>{const l=e(n,t,r),i=e(c,a,r);return Object(Je.d)(l,i)||nt(n,c)};var lt=a(283),it=a(523);var ot=({activeItem:e})=>{const t="is_wired"in e?e.is_wired:void 0,a="wired_rate_mbps"in e?e.wired_rate_mbps:void 0,{satisfaction:n,known:r}=Object(l.getClientExperienceFromPort)(void 0,e);switch(!0){case!t&&n>0&&r:return c.a.createElement(K.a,{alignItems:"center",whiteSpace:"nowrap"},c.a.createElement(G.a,{color:Object(Ce.c)(n),size:"body"},n+"%"));case t&&!!a:return c.a.createElement(K.a,{alignItems:"center",whiteSpace:"nowrap"},a>0?c.a.createElement(G.a,{size:"body"},Object(it.b)(a)):c.a.createElement(G.a,{size:"body"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"})));default:return c.a.createElement(G.a,{size:"body"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))}};const Et=Object(H.c)(G.a)`
  max-width: 90%;
`;var st=({client:e})=>{var t;const a="fingerprint"in e&&e.fingerprint,i=Object(n.useMemo)(()=>Object(l.selectClientFingerprint)(e),[null==a?void 0:a.computed_dev_id,null==a?void 0:a.computed_engine,null==a?void 0:a.confidence,null==a?void 0:a.dev_cat,null==a?void 0:a.dev_family,null==a?void 0:a.dev_id,null==a?void 0:a.dev_id_override,null==a?void 0:a.dev_vendor,null==a?void 0:a.has_override,null==a?void 0:a.os_class,null==a?void 0:a.os_name]),o=null===(t=Object(r.useSelector)(i))||void 0===t?void 0:t.fingerprint_device_vendor;return c.a.createElement(Et,{size:"body",truncate:!0},o||"-")},mt=a(2038);const dt=Object(H.c)(G.a)`
  max-width: 90%;
`,_t=Object(H.c)(Ie.a)`
  width: 24px;
  margin-left: 7px;
`,ut=Object(H.c)(G.a,{shouldForwardProp:e=>"direction"!==e})`
  color: ${({direction:e})=>"up"===e?Se.a["purple-1"]:Se.a["blue-3"]} !important;
`,bt=({client:e,children:t,ignoreOpacity:a=!1})=>c.a.createElement(ae.g,{width:"100%",opacity:a||"success"===Object(l.getStatus)(e)?1:.5},t),pt=[{id:v.b.STATUS,minWidth:35,maxWidth:35,label:null,renderCell:e=>c.a.createElement(ae.g,{alignItems:"center"},c.a.createElement(je,{status:Object(l.getStatus)(e),marginLeft:5,marginRight:12}))},{id:v.b.NAME,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.NAME]}),renderCell:e=>c.a.createElement(bt,{client:e},e.type===ve.c.VPN?c.a.createElement(G.a,{size:"body",color:"secondary"},Object(w.c)(e)):c.a.createElement(c.a.Fragment,null,c.a.createElement(Ke,{rowData:e}),c.a.createElement(ae.g,{marginLeft:8,width:"100%",alignItems:"center",whiteSpace:"nowrap"},c.a.createElement(dt,{size:"body",color:"secondary",truncate:!0},Object(w.c)(e))))),compare:rt(e=>Object(w.c)(e))},{id:v.b.MAC,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.MAC]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},e.type!==ve.c.VPN&&e.mac||c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt(e=>e.type===ve.c.VPN?"":e.mac)},{id:v.b.VENDOR,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.VENDOR]}),renderCell:e=>c.a.createElement(bt,{client:e},e.type===ve.c.VPN?c.a.createElement(dt,{size:"body"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"})):c.a.createElement(st,{client:e})),compare:rt((e,t,a)=>e.type===ve.c.VPN?Object(et.c)(a):e.vendor||Object(et.c)(a))},{id:v.b.CONNECTION,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.CONNECTION]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},(()=>{let t;switch(e.type){case ve.c.WIRED:t=c.a.createElement(R.c,{id:"CLIENT_WIRED"});break;case ve.c.WIRELESS:t=e.essid;break;case ve.c.VPN:t=c.a.createElement(R.c,{id:"CLIENT_VPN"})}return t||c.a.createElement(R.c,{id:"COMMON_HYPHEN"})})())),compare:rt((e,t,a)=>{let n;switch(e.type){case ve.c.WIRED:n="wired";break;case ve.c.WIRELESS:n=e.essid;break;case ve.c.VPN:n="vpn"}return n||Object(et.c)(a)})},{id:v.b.NETWORK,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.NETWORK]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},"network_name"in e&&e.network_name?e.network_name:e.type===ve.c.VPN?c.a.createElement(R.c,{id:"CLIENT_VPN"}):c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>"network_name"in e?e.network_name:Object(et.c)(a))},{id:v.b.INTERFACE,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.INTERFACE]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},e.type===ve.c.VPN&&e.vpn_interface||c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>e.type===ve.c.VPN&&e.vpn_interface||Object(et.c)(a))},{id:v.b.WIFI_BAND,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.WIFI_BAND]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},e.type===ve.c.WIRELESS?Object(l.getWifiConnection)(e):c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>{var n,c,r,l;if(e.type===ve.c.WIRELESS){const t=null===(c=lt.a[null===(n=null==e?void 0:e.radio_proto)||void 0===n?void 0:n.toUpperCase()])||void 0===c?void 0:c.sortOrder,i=null===(l=lt.a[null===(r=null==e?void 0:e.radio_proto)||void 0===r?void 0:r.toUpperCase()])||void 0===l?void 0:l.sortOrder;return t||i||Object(et.b)(a)}return Object(et.b)(a)})},{id:v.b.IP,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.IP]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},e.type===ve.c.VPN?e.remote_ip:e.use_fixedip&&e.fixed_ip||e.ip||c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:Xe.l},{id:v.b.EXPERIENCE,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.EXPERIENCE]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(ot,{activeItem:e})),compare:rt((e,t,a)=>((e,t)=>{const a="is_wired"in e?e.is_wired:void 0,n="wired_rate_mbps"in e?e.wired_rate_mbps:void 0,{satisfaction:c,known:r}=Object(l.getClientExperienceFromPort)(void 0,e);switch(!0){case!a&&c>0&&r:return c*et.i;case a&&!!n:return n>0?Object(Qe.a)(n,1)*et.h:Object(et.a)(et.f,t);default:return Object(et.a)(et.f,t)}})(e,a))},{id:v.b.DOWNLINK,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.DOWNLINK]}),renderCell:e=>c.a.createElement(bt,{client:e,ignoreOpacity:!0},c.a.createElement(fe.a,{client:e,props:["tx_bytes-r"]},({"tx_bytes-r":e=0})=>c.a.createElement(ae.r,{bytes:e,direction:"down",size:"body",iconStyle:{width:"10px",height:"16px",margin:"0 16px 2px 0"},pow:2})))},{id:v.b.UPLINK,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.UPLINK]}),renderCell:e=>c.a.createElement(bt,{client:e,ignoreOpacity:!0},c.a.createElement(fe.a,{client:e,props:["rx_bytes-r"]},({"rx_bytes-r":e=0})=>c.a.createElement(ae.r,{bytes:e,direction:"up",size:"body",iconStyle:{width:"10px",height:"16px",margin:"0 16px 2px 0"},pow:2})))},{id:v.b.DAILY_USAGE,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.DAILY_USAGE]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(fe.a,{client:e,props:["usage_bytes"]},({usage_bytes:e=null})=>e?c.a.createElement(G.a,{color:"secondary",size:"body"},c.a.createElement($e.a,{size:"body",type:"bytes",input:e})):c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>(null==e?void 0:e.usage_bytes)||Object(et.b)(a))},{id:v.b.UPTIME,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.UPTIME]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(fe.a,{client:e,props:["uptime"]},({uptime:e})=>c.a.createElement(G.a,{size:"body",color:"secondary"},e?Object(qe.a)(e):c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))))},{id:v.b.CHANNEL,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.CHANNEL]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(G.a,{size:"body",color:"secondary"},e.type===ve.c.WIRELESS&&e.isUp&&e.channel?e.channel:c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>e.type===ve.c.WIRELESS&&e.isUp&&e.channel?e.channel:Object(et.b)(a))},{id:v.b.UPLINK_AP_PORT,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.UPLINK_AP_PORT]}),renderCell:e=>c.a.createElement(bt,{client:e},e.type!==ve.c.VPN?c.a.createElement(mt.a,{uplinkMac:e.uplink_mac,uplinkName:e.uplinkName,uplinkPort:e.type===ve.c.WIRED?e.sw_port:null}):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:(e,t,a,n,c)=>{const[r,l]=ct(a,c),[i,o]=ct(n,c);return Object(Je.d)(r,i)||Object(Je.d)(l,o)||nt(a,n)}},{id:v.b.SIGNAL,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.SIGNAL]}),renderCell:e=>c.a.createElement(bt,{client:e},e.type===ve.c.WIRELESS&&e.isUp?c.a.createElement(fe.a,{client:e,props:["signal"]},({signal:e})=>e?c.a.createElement(G.a,{color:"secondary",size:"body"},c.a.createElement(ae.g,{alignItems:"center"},e,"  ",c.a.createElement(R.c,{id:"COMMON_UNIT_DBM"}),c.a.createElement(_t,{variant:"gradient",size:"medium",value:100-Math.abs(e)}))):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>{const{signal:n}=e;return n||Object(et.b)(a)})},{id:v.b.RX_RATE,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.RX_RATE]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(fe.a,{client:e,props:["tx_rate"]},({tx_rate:e})=>e>0?c.a.createElement(ae.r,{hideIcon:!0,bytes:1e3*e/8,direction:"down",size:"body"}):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))))},{id:v.b.TX_RATE,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.TX_RATE]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(fe.a,{client:e,props:["rx_rate"]},({rx_rate:e})=>e>0?c.a.createElement(ae.r,{hideIcon:!0,bytes:1e3*e/8,direction:"up",size:"body"}):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))))},{id:v.b.FIRST_SEEN,sortable:!0,label:c.a.createElement(R.c,{id:v.c[v.b.FIRST_SEEN]}),minWidth:160,renderCell:e=>c.a.createElement(bt,{client:e},e.type!==ve.c.VPN?c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(Ze.a,{date:Object(qe.b)(e.first_seen)})):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>e.type!==ve.c.VPN?e.first_seen:Object(et.b)(a))},{id:v.b.LAST_SEEN,sortable:!0,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.LAST_SEEN]}),renderCell:e=>c.a.createElement(bt,{client:e},e.type!==ve.c.VPN?c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(Ze.a,{date:Object(qe.b)(e.last_seen)})):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))),compare:rt((e,t,a)=>e.type!==ve.c.VPN?e.last_seen:Object(et.b)(a))},{id:v.b.DOWN_PKTS,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.DOWN_PKTS]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(fe.a,{client:e,props:["tx_packets"]},({tx_packets:e})=>e>0?c.a.createElement(ut,{size:"body",direction:"down"},e):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))))},{id:v.b.UP_PKTS,sortable:!1,minWidth:160,label:c.a.createElement(R.c,{id:v.c[v.b.UP_PKTS]}),renderCell:e=>c.a.createElement(bt,{client:e},c.a.createElement(fe.a,{client:e,props:["rx_packets"]},({rx_packets:e})=>e>0?c.a.createElement(ut,{size:"body",direction:"up"},e):c.a.createElement(G.a,{size:"body",color:"secondary"},c.a.createElement(R.c,{id:"COMMON_HYPHEN"}))))}];var Ot=a(480);var It=({handleRowClick:e})=>{const t=Object(r.useDispatch)(),a=Object(r.useSelector)(W),l=Object(r.useSelector)(Ot.b),i=Object(n.useRef)(),{sortBy:o,isAscending:E,initialColumns:s}=Object(r.useSelector)(Object(m.I)(He.a.CLIENT)),d=(e,a)=>{t(Object(m.S)(He.a.CLIENT,{sortBy:e.id,isAscending:a}))},_=Object(n.useCallback)(({from:t,rowsPerPage:n})=>c.a.createElement(Ye.a,null,c.a.createElement(We.a,{ref:i,items:a,rowLimit:n,rowOffset:t,columns:pt,onRowClick:e,onSort:d,initialSortBy:o,initiallySortAscending:E,columnOverride:s,rowHeight:32,disableColumnFilters:!0})),[a,pt,E,o,d]);return a.length&&(null==s?void 0:s.length)?c.a.createElement(Ge.a,{section:"CLIENT_HEADER_CLIENTS",items:a,tableType:He.a.CLIENT,onRenderTable:_,onPageChanged:e=>{t(Object(T.e)(e))},pageNumber:l}):c.a.createElement(De,null)};var gt=()=>{const e=Object(pe.k)(),{path:t}=Object(pe.n)(),{site:a}=Object(pe.m)(),l=Object(r.useDispatch)(),i=Object(n.useMemo)(()=>Object(S.d)(P.a.CLIENTS),[]),o=Object(r.useSelector)(i)!==P.b.GRID,E=Object(n.useCallback)(n=>{if("mac"in n){const{mac:c}=n;e.push(Object(pe.i)(t,{id:c,panel:"overview",section:"properties",site:a})),l(Object(Oe.g)({type:I.b.CLIENT,mac:c}))}},[l,e,t,a]);return c.a.createElement(ae.g,Object.assign({width:"100%",height:"100%",overflow:"auto"},!o&&{padding:"32px"}),o?c.a.createElement(It,{handleRowClick:E}):c.a.createElement(Be,{handleRowClick:E}))};t.default=()=>{var e,t;const a=null!==(t=null===(e=Object(r.useSelector)(m.P))||void 0===e?void 0:e.offlineClientTimeframe)&&void 0!==t?t:24;return Object(p.f)([Object(s.fetchNetworks)(void 0,{crudCacheStrategy:{type:O.a.CACHE}}),Object(E.b)(void 0,{crudCacheStrategy:{type:O.a.CACHE}}),Object(o.b)({type:O.a.CACHE}),Object(i.fetchDevices)(void 0,{crudCacheStrategy:{type:O.a.CACHE}}),Object(l.fetchClients)(void 0,{crudCacheStrategy:{type:O.a.CACHE}}),Object(l.fetchOfflineClients)({queryParams:{withinHours:a}},{crudCacheStrategy:{type:O.a.CACHE}}),Object(l.fetchBlockedClients)(void 0,{crudCacheStrategy:{type:O.a.CACHE}}),Object(d.c)(void 0,{crudCacheStrategy:{type:O.a.CACHE}}),Object(_.c)("clients"),Object(_.c)("devices"),Object(_.c)("pagination")],c.a.createElement(u.a,null,c.a.createElement(be,null),c.a.createElement(gt,null),c.a.createElement(b.a,{panelType:I.b.CLIENT})),{trackingName:"clients-page"})}}}]);