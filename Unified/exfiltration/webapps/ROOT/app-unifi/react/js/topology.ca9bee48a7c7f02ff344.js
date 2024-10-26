(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[16],{1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return I.a})),a.d(t,"a",(function(){return M}));var n=a(0),r=a.n(n),c=a(5),l=a(648),i=a(1136),o=a(208);const E=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,s=(Object(c.c)(l.Link)`
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
`),m=Object(c.c)(i.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,d=e=>r.a.createElement(s,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),_=e=>r.a.createElement(E,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1851),b=a(375);const p=Object(c.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,O=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(b.b)(({theme:e,...t})=>r.a.createElement(p,Object.assign({headerRowClassName:O(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var I=a(1934),g=a(529),R=a(1743),v=a(2),C=a(30),h=a(15),T=a(2846),f=a(44),D=a(71),P=a(62);const y=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,S=Object(c.c)(D.c)`
  > * {
    vertical-align: middle;
  }
`,A=Object(c.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,j=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,N=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,L=Object(c.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,x=Object(c.c)(A,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,V=Object(c.c)(D.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,w=Object(c.c)(D.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,F=Object(c.c)("div")`
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
`;var M=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:l,validationSchema:i,initialValues:o,onEditSubmit:E,useValuesInSchema:s=!1,max:d,useWindowTable:_=!1,addButtonText:b="COMMON_ACTION_ADD",invalid:p,...O}){const I=Object(n.useContext)(D.l),[M,U]=Object(n.useState)(!0),k=Object(n.useCallback)(t=>!t.disableRemove&&r.a.createElement(m,null,r.a.createElement(S,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),l(t),await Promise.resolve(),U(!0)}},r.a.createElement(v.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,l]),z=Object(n.useMemo)(()=>_?T.a:u.a,[_]);return r.a.createElement(f.c,{enableReinitialize:!0,onSubmit:t=>{E(t[e])},initialValues:o,validationSchema:()=>s?C.a.lazy(e=>i(e)):i},({values:n,errors:i,setFieldValue:E,handleSubmit:s,handleReset:m,setTouched:_})=>r.a.createElement(r.a.Fragment,null,t.map((a,l)=>r.a.createElement(y,{inline:a.inline,isLast:l===t.length-1,key:a.name},r.a.createElement(A,{flexDirection:"column",width:"100%"},r.a.createElement(P.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?i[a.name]:p,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!I&&c&&l===t.length-1&&r.a.createElement(j,null,r.a.createElement(S,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),r=await _(a,!0);t.find(e=>r[e.name])||c(n),U(!0)},Icon:h.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},r.a.createElement(v.c,{id:b}))))),n.editActive?r.a.createElement(r.a.Fragment,null,n[e].map((n,c)=>r.a.createElement(L,{key:n.id,width:"100%"},O.columns.map((n,l)=>t[l]?r.a.createElement(x,{key:n.id,isLast:l===O.columns.length-1,flexDirection:"column",flex:"1 1 50%"},r.a.createElement(P.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[l].type,fast:!0},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),r.a.createElement(V,{justifyContent:"flex-end",width:"100%"},r.a.createElement(w,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),E("editActive",!1)}},r.a.createElement(v.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(D.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:s,disabled:Object(g.a)(Object(R.a)(n,"editActive"),Object(R.a)(o,"editActive"))},r.a.createElement(v.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&r.a.createElement(y,null,r.a.createElement(N,null,r.a.createElement(S,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),E("editActive",!0)},Icon:h.ub},r.a.createElement(v.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&M&&r.a.createElement(F,null,r.a.createElement(z,{columns:O.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:l?k:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),l=a(2),i=a(1946),o=a.n(i),E=a(1741),s=a(520),m=a(521);const d=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const i=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),_=Object(m.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),b=Object(n.useCallback)(e=>(e={},t={})=>_(e,t)&&u(e,t),[_,u]);return!!e&&r.a.createElement(o.a,{when:b(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(E.a,{actions:[{type:"button",text:r.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:r.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:i,parentSelector:s.b,title:r.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},r.a.createElement(d,null,r.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return D}));var n=a(0),r=a.n(n),c=a(5),l=a(643),i=a(32),o=a(1932),E=a(8),s=a(15),m=a(45),d=a(17),_=a(189),u=a(41);const b=Object(c.c)(_.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var p=({video:e})=>{const t=Object(E.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return r.a.createElement(b,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(s.vb,{color:m.a["blue-3"]}))},O=a(1933),I=a(71),g=a(227);const R=Object(c.c)(I.c)`
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
`,v=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,C=Object(c.c)(s.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var h,T=({video:e})=>{const t=Object(E.useDispatch)(),a=Object(E.useSelector)(g.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return r.a.createElement(R,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},r.a.createElement(v,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),r.a.createElement(C,{color:m.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(h||(h={}));const f=Object(c.c)(I.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,D=Object(c.c)(I.g)`
  * {
    line-height: 1.4 !important;
  }
`,P=Object(c.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:l,online:E})=>{let s;switch(t){default:case h.BASIC:s=e;break;case h.CONFIGURED:s=r.a.createElement(D,{alignItems:"center"},e,!!n&&r.a.createElement(o.a,{section:n}),!!l&&E&&r.a.createElement(p,{video:l}));break;case h.STATUS:s=r.a.createElement(D,{alignItems:"center"},r.a.createElement(P,{variant:c}),r.a.createElement(f,{flex:"1",flexDirection:"column"},e,a&&r.a.createElement(i.a,null,a)));break;case h.UNCONFIGURED:s=r.a.createElement(D,{alignItems:"center"},!!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{section:n}),r.a.createElement(I.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(i.a,null,a))),!!l&&E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{video:l}),r.a.createElement(I.g,{flex:"0 1 128px",flexDirection:"column"},e,r.a.createElement(i.a,null,a))),!!l&&!E&&r.a.createElement(D,{alignItems:"center"},e))}return s}},1932:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),l=a(8),i=a(15),o=a(45),E=a(1936),s=a(189);const m=Object(c.c)(s.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(E.a)(e)),[t,e]);return r.a.createElement(m,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},r.a.createElement(i.vb,{color:o.a["blue-3"]}))}},1933:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),l=a(8),i=a(15),o=a(45),E=a(1936),s=a(71),m=a(43);const d=Object(c.c)(s.c)`
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
`,_=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,u=Object(c.c)(i.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(l.useSelector)(m.i),c=Object(n.useCallback)(()=>t(Object(E.a)(e)),[t,e]);return r.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},r.a.createElement(_,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),r.a.createElement(u,{color:o.a["blue-3"],size:"large"}))}},1934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},1935:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return s.d})),a.d(t,"c",(function(){return s.a}));var n=a(0),r=a.n(n),c=a(5),l=a(15),i=a(71);const o=Object(c.c)(i.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var E=({children:e,...t})=>r.a.createElement(o,Object.assign({alignItems:"center"},t),e,r.a.createElement(l.g,null)),s=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(17),r=a(41);const c=e=>Object(n.g)({modalType:r.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return Z})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var r=a(0),c=a.n(r),l=a(5);var i=({children:e="",className:t=null,full:a=!1,offset:n=1,size:r=6,...i})=>{const o=a?12:r,E=a?0:n;return c.a.createElement("div",Object.assign({className:Object(l.b)("col-"+o,"offset-"+E,t)},i),e)};var o,E=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(l.b)("col-"+a,"offset-"+t)},e),s=a(2),m=a(666),d=a.n(m),_=a(71),u=a(1964),b=a.n(u),p=a(140),O=a.n(p),I=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const g=O.a.bind(b.a);var R=({className:e=null,status:t=o.NEUTRAL,...a})=>c.a.createElement(I.a,Object.assign({},a,{className:g("ubntStatusText","ubntStatusText--"+t,e)})),v=a(254),C=a(1944);const h=Object(l.c)(_.g)`
  border: 1px solid ${v.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,T=Object(l.c)(R)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var f=({state:e,className:t=null,...a})=>c.a.createElement(h,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(T,{message:C.b[e],status:o.WARNING})),D=a(322),P=a(82),y=a(8),S=a(45),A=a(70),j=a(20);const N={BORDER_WIDTH:2},L={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},x=({type:e,size:t,width:a,height:n})=>{switch(e){case D.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:r,TOP:c}=L;return{top:c,left:e,padding:`${n}px ${r}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function V({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:i,height:o}){const E=Object(y.useSelector)(D.selectHighlight),[s,m]=Object(A.c)(0),[d,_]=Object(A.c)(!1),u=Object(r.useRef)(null),b=Object(r.useMemo)(()=>(({color:e,show:t,style:a})=>Object(l.a)({"&::before":{border:`${N.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:S.a["blue-light-3"],show:d,style:{...x({type:e,size:c,width:i,height:o}),...a}}),[d,e,a,c,i,o]);return Object(r.useEffect)(()=>{if(Number.isFinite(n)&&n>s)m(s+1);else if(u.current&&t===E.id&&E.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:r,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:r,top:c}=t.current.getBoundingClientRect();switch(a){case D.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=L,l=c+Object(j.a)(n,"top",a),i=l+r+Object(j.a)(n,"paddingBottom",e)+Object(j.a)(n,"paddingTop",t)+2*N.BORDER_WIDTH;return{bottom:i,height:i-l,top:l}}}})({height:o,highlightRef:u,type:e,highlightStyle:a}),{bottom:l,height:i,top:E}=n.getBoundingClientRect(),s=t>l,m=r>i,d=15;c<E||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-E+c-d}):s&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-l+d})}_(!0)}},[o,s]),Object(r.useEffect)(()=>{d||E.id!==t||m(e=>e+1),d&&E.id!==t&&_(!1)},[E.id,d]),{highlightClassName:b,highlightRef:u}}const w=Object(l.c)(d.a)`
  color: ${P.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,F=Object(l.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,M=l.a`
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
`;var U=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:r={},dontTranslateText:i=!1,highlightDelay:o=null,highlightStyle:E=null,htmlFor:m=null,offset:d=0,size:_=5,useHtml:u=!1})=>{const{highlightClassName:b,highlightRef:p}=V({type:D.SearchHighlightType.FIELD,forId:m,highlightStyle:E,highlightDelay:o,size:_}),O=!(!n&&!a),I={["col-"+_]:!0,["offset-"+d]:d>0},g=u?s.b:s.c;return c.a.createElement("div",{className:Object(l.b)(I,M,b),ref:p},c.a.createElement("div",{className:"mb-1"},c.a.createElement(F,{className:"settingsGridLabel",htmlFor:m,primary:!0},i?e:c.a.createElement(s.c,{id:e})),t&&c.a.createElement(f,{state:t})),O&&c.a.createElement("div",null,c.a.createElement(w,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?c.a.createElement(g,{id:n,values:r}):a)))};const k=l.a`
  max-width: 960px;
`,z=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:r=8,noWidthLimit:i=!1})=>{const o=n?4:r;return c.a.createElement("div",{className:Object(l.b)("row","mt-"+o,i?null:k,t),ref:a},e)};var B=c.a.forwardRef((e,t)=>c.a.createElement(z,Object.assign({forwardedRef:t},e)));var W=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(I.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(l.c)("div")`
  flex: 0 1 480px;
`,G=Object(l.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var Y=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:r=null,section:i=null})=>{const o=v.b.sectionColors.common;return c.a.createElement(B,{className:t,marginTop:0},c.a.createElement(H,null,c.a.createElement(G,{className:Object(l.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(s.c,{id:e})),a&&c.a.createElement(I.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const $=Object(l.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,K=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement($,{className:Object(l.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(l.b)({"pb-8":!a})},e));K.Content=i,K.Icon=E,K.Label=U,K.Row=B,K.SectionHeader=W,K.Subheader=Y;var X=a(284);const q=Object(l.c)(X.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var Z=e=>c.a.createElement(q,Object.assign({},e)),J=a(1926),Q=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(y.useSelector)(Q.C);return e>0?c.a.createElement(ee.a,{alignItems:"center"},c.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(s.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const r={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1948:function(e,t,a){"use strict";var n=a(1966);a.d(t,"fetchSession",(function(){return n.a}));var r=a(1970);a.d(t,"MODEL",(function(){return r.b}));var c=a(1954);a.d(t,"selectFormattedSessionData",(function(){return c.a}));a(2007)},1950:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return E})),a.d(t,"b",(function(){return s}));var n=a(107),r=a(231),c=a(119),l=a(2028);const i={[l.b.EXPERIENCE]:Object.values(l.a)},o=Object(r.b)(n.a.WIFI_MAN,c.a.WIFI_MAN,i),E=Object(r.c)(n.a.WIFI_MAN),s=Object(r.a)(n.a.WIFI_MAN)},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1954:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return u}));var n=a(1179),r=a(4),c=a(18),l=a(1966),i=a(50),o=a(664),E=a(95),s=a(83),m=a(1948),d=a(526);const _=(e,t,a=[])=>Object(r.a)(Object(l.b)(e,t),c.Q,i.selectLocaleSettings,s.c,c.M,(e,t,n,r,c)=>{const{data:l,...i}=e,s=Object(E.d)(t,n,r);return{...i,data:l.map(({assoc_time:e,duration:t,_id:n,mac:r,satisfaction:l,hostname:i=""})=>({id:n,date:Object(E.e)(1e3*e,s,d.a),start:Object(E.e)(1e3*e,s,c),duration:Object(o.c)(t,!0),experience:l,mac:r,hostname:i,client:a.find(e=>"mac"in e&&e.mac===r)}))}}),u=e=>Object(r.a)(t=>{var a,n,r,c;return null===(c=null===(r=null===(n=null===(a=t.models)||void 0===a?void 0:a[m.MODEL])||void 0===n?void 0:n.byId)||void 0===r?void 0:r[e])||void 0===c?void 0:c.record},c.Q,i.selectLocaleSettings,s.c,c.M,(e,t,a,r,c)=>{if(!Object(n.a)(e)){const n=Object(E.d)(t,a,r),{assoc_time:l,duration:i,sw_port:s,mac:m,ip:_,satisfaction:u,hostname:b="",is_wired:p,name:O,_id:I}=e;return{id:I,date:l?Object(E.e)(1e3*l,n,d.a):"",duration:i?Object(o.c)(i,!0):"",start:l?Object(E.e)(1e3*l-1e3*i,n,c):"",end:l?Object(E.e)(1e3*l-i,n,c):"",mac:m,ip:_,port:s,experience:u,hostname:b,is_wired:p,name:O}}return e})},1955:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));const n="stadpi",r="stadpi",c="/api/s/{site}/stat/stadpi",l="by_app",i=8},1957:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(9),r=a(6),c=a(120),l=a(1959);const i=()=>Object(r.t)(l.c,l.d,l.e),o=e=>t=>t(Object(r.b)(n.API_CALL,l.f.DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS,l.f.DISMISS_UNIFI_CARE_ACTIVATION_ERROR,l.a,Object(c.c)(l.b,{mac:e})))},1958:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return W})),a.d(t,"b",(function(){return M})),a.d(t,"e",(function(){return G})),a.d(t,"f",(function(){return Y})),a.d(t,"g",(function(){return X})),a.d(t,"d",(function(){return Q}));var n=a(0),r=a.n(n),c=a(5),l=a(1917),i=a(21);const o=Object(c.c)(i.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,E=Object(c.c)(l.a)`
  bottom: -1px;
`;var s=({isLoading:e,children:t,...a})=>r.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel"}),t,r.a.createElement(E,{isLoading:e,placement:"bottom"})),m=a(8);const d=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen};var _=a(787),u=a(18),b=a(2),p=a(1913),O=a(2935),I=a(2905),g=a(529),R=a(2825);const v=Object(c.c)(R.a)`
  padding: 24px;
`;var C=({columns:e,columnLabels:t,tableType:a})=>{var c;const l=Object(m.useDispatch)(),i=(null===(c=Object(m.useSelector)(Object(u.I)(a)))||void 0===c?void 0:c.initialColumns)||[],o=Object(n.useMemo)(()=>Object.values(e).every(e=>i.includes(e)),[i]),E=Object(n.useCallback)(()=>{const t=o||(null==i?void 0:i.length)?[]:Object.values(e);l(Object(u.S)(a,{initialColumns:t},!0))},[l,o,a,i]),s=Object(n.useMemo)(()=>[{full:!0,id:"showAllFields",checked:o||!!(null==i?void 0:i.length)&&"mixed",children:r.a.createElement(b.c,{id:"COMMON_COLUMN_VISIBILITY_SHOW_ALL_FIELD"}),onChange:E}].concat(Object.values(e).map(e=>({full:!0,id:e,checked:i.includes(e),children:(null==t?void 0:t[e])?r.a.createElement(b.b,{id:t[e]}):e,onChange:({target:{checked:t}})=>{const n=t?[...i,e]:i.filter(t=>t!==e);l(Object(u.S)(a,{initialColumns:n},!0))}}))),[i,a]);return r.a.createElement(v,{spacing:"flush",items:s,variant:"list"})};const h=Object(c.c)(p.a)`
  width: 258px !important;
`;var T;!function(e){e.COLUMNS="columns",e.FILTERS="filters"}(T||(T={}));var f=({filterTitleLabel:e="COMMON_CONTROL_PANEL_FILTER_TITLE",isOpen:t,onClose:a,columnTabProps:c,renderFilterDrawerContent:l,footerProps:i})=>{var o;const[E,s]=Object(n.useState)(T.FILTERS),{tableType:d}=c||{tableType:null},_=Object(m.useDispatch)(),p=(null===(o=Object(m.useSelector)(Object(u.I)(d)))||void 0===o?void 0:o.initialColumns)||[],R=i&&E===T.COLUMNS,v=Object(n.useMemo)(()=>{var e,t;return R&&Object(g.a)(null===(t=null===(e=null===u.c||void 0===u.c?void 0:u.c.tables)||void 0===e?void 0:e[d])||void 0===t?void 0:t.initialColumns,p)},[R,d,p]),f=Object(n.useCallback)(()=>{var e,t,a;const n=[...null!==(a=null===(t=null===(e=null===u.c||void 0===u.c?void 0:u.c.tables)||void 0===e?void 0:e[d])||void 0===t?void 0:t.initialColumns)&&void 0!==a?a:[]];_(Object(u.S)(d,{initialColumns:n},!0))},[_,d]),D=Object(n.useCallback)(({id:e})=>s(e),[s]),P=c?r.a.createElement(O.a,{onSelectTab:D,tabs:[{id:T.FILTERS,label:r.a.createElement(b.c,{id:"COMMON_CONTROL_PANEL_FILTERS"}),render:l},{id:T.COLUMNS,label:r.a.createElement(b.c,{id:"COMMON_CONTROL_PANEL_COLUMNS"}),render:()=>r.a.createElement(C,{columns:c.columns,columnLabels:c.columnLabels,tableType:d})}]}):l(),y=Object(n.useMemo)(()=>R?{label:r.a.createElement(b.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_COLUMNS"}),onClick:f,disabled:v}:i,[R,i,v,f]),S=Object(n.useCallback)(()=>{a(),s(T.FILTERS)},[a,s]);return r.a.createElement(h,{in:t,renderHeader:()=>null,onClose:a,side:"left"},t&&r.a.createElement(I.a,{footerProps:y,headerProps:{label:r.a.createElement(b.c,{id:e})},onClose:S},P))},D=a(32),P=a(36),y=a(2521);var S=({items:e,...t})=>{const{params:a,path:n}=Object(P.n)(),c=Object(P.l)(),l=Object(P.k)(),i=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,c);return r.a.createElement(y.a,Object.assign({tabs:e,selectedTab:null==i?void 0:i.id,onSelectTab:({path:e,params:t={}})=>l.push(Object(P.i)(e,{...a,...t}))},t))};const A=Object(c.c)(S)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var j=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...r})=>({id:e,label:t,disabled:"function"==typeof a?a(r):a,path:n})),[e]);return t?r.a.createElement(A,{selectedTabBold:!0,items:t}):null},N=a(111),L=a(15);const x=Object(c.c)(i.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,V=Object(c.c)(N.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  min-width: 130px;
  white-space: nowrap;
`;function w({filterTitleLabel:e="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return r.a.createElement(x,{alignItems:"center"},r.a.createElement(L.M,{size:"original"}),r.a.createElement(V,{message:e}))}var F=a(215);var M=Object(c.c)(F.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const U=Object(c.c)(M)`
  z-index: 5;
`;var k=({filterTitleLabel:e,items:t})=>{const a=Object(m.useDispatch)();return r.a.createElement(i.a,{height:"100%"},r.a.createElement(U,{onClick:()=>a(Object(_.b)(!0))},r.a.createElement(w,{filterTitleLabel:e})),t)};const z=Object(c.c)(D.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;var B=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterTitleLabel:c,items:l,title:o})=>{const E=(null==e?void 0:e.length)>1,m=!E&&1===e.length;return r.a.createElement(s,{isLoading:a},!t&&r.a.createElement(k,{filterTitleLabel:c,items:l}),E&&r.a.createElement(j,{routes:e}),m&&r.a.createElement(z,{weight:"bold"},e[0].label),o&&r.a.createElement(z,{weight:"bold",hideFilterButton:t},r.a.createElement(b.c,{id:o})),r.a.createElement(i.a,{height:"100%",flex:E||o||m?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var W=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:c,filterFooterProps:l,columnTabProps:i,renderFilterDrawerContent:o,filterTitleLabel:E,items:s,title:b,onClose:p})=>{var O;const I=Object(m.useDispatch)(),g=Object(m.useSelector)(d),R=(null===(O=Object(m.useSelector)(Object(u.I)(null==i?void 0:i.tableType)))||void 0===O?void 0:O.initialColumns)||[];Object(n.useEffect)(()=>()=>{I(Object(_.b)(!1))},[]);const v=Object(n.useCallback)(()=>{I(Object(_.b)(!1)),null==p||p(),(null==i?void 0:i.tableType)&&I(Object(u.S)(i.tableType,{initialColumns:R}))},[I,p,null==i?void 0:i.tableType,R]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{isOpen:g,filterTitleLabel:E,onClose:v,columnTabProps:i,renderFilterDrawerContent:()=>g&&o,footerProps:l}),r.a.createElement(B,{routes:e,hideFilterButton:t,isLoading:a,filterTitleLabel:E,items:s,title:b},c))},H=a(1925);var G=Object(c.c)(H.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var Y=Object(c.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`;const $=c.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,K=c.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function X(e){return r.a.createElement(y.a,Object.assign({className:$,tabClassName:K},e))}var q=a(1732);const Z=Object(c.c)(D.a)`
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,J=Object(c.c)("div",{shouldForwardProp:e=>"toggleStyle"!==e})`
  justify-content: space-between;
  margin-top: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginTop)&&void 0!==t?t:8}}px;
  margin-right: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginRight)&&void 0!==t?t:0}}px;
  margin-bottom: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginBottom)&&void 0!==t?t:0}}px;
  margin-left: ${({toggleStyle:e})=>{var t;return null!==(t=null==e?void 0:e.marginLeft)&&void 0!==t?t:0}}px;
  width: auto !important;

  label {
    margin-left: 0;
  }
`;var Q=({checked:e,disabled:t,id:a,onChange:n,text:c,toggleStyle:l})=>r.a.createElement(J,{toggleStyle:l},r.a.createElement(q.a,{checked:e,id:a,onChange:n,disabled:t},"string"==typeof c?r.a.createElement(Z,{size:"body"},r.a.createElement(b.c,{id:c})):c))},1959:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return o}));const n="unifiCare",r="/v2/api/unifi-care/details",c="unifiCare",l="/v2/api/unifi-care/device/{mac}/dismiss-activation-notice",i="put",o={DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS:"ace/DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS",DISMISS_UNIFI_CARE_ACTIVATION_ERROR:"ace/DISMISS_UNIFI_CARE_ACTIVATION_ERROR"};var E;!function(e){e.ASSIGNED="ASSIGNED",e.AVAILABLE="AVAILABLE",e.NOT_AVAILABLE="NOT_AVAILABLE",e.RMA_IN_PROGRESS="RMA_IN_PROGRESS",e.REPLACING="REPLACING",e.REVOKED="REVOKED"}(E||(E={}))},1965:function(e,t,a){"use strict";var n=a(1953);const r=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=r},1966:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(6),r=a(1970);const c={method:"post",fetchConfig:{getAllPostData:!0},idField:r.a},l=(e,t)=>Object(n.q)(r.b,r.c,((e,t)=>({data:{[t?"ap_mac":"mac"]:e,_limit:t?20:5,_sort:"-assoc_time"}}))(e,t),c),i=(e,t)=>Object(n.A)(l(e,t))},1967:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var n=a(6),r=a(1955);const c=(e,t)=>Object(n.t)(r.c,r.d,r.e,e,{...t,idField:"mac"}),l=(e,t)=>Object(n.A)(c(e,t))},1968:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(78);const r=n.dpi.ruleMap,c=(e,t)=>+t+(+e<<16),l=e=>{const t=(a=e,r.applications[a]);var a;return t?t.name:void 0}},1969:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(6),r=a(1971);const c=(e,t)=>Object(n.t)(r.a,r.b,r.c,e,t)},1970:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return c}));const n="session",r="/api/s/{site}/stat/session",c="_id"},1971:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));const n="unifi-core/general-info",r="/v2/api/"+n,c="ucoreGeneralInfo"},1974:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return E})),a.d(t,"a",(function(){return s}));var n=a(4),r=a(1180),c=a(2027),l=a(1950);const i=e=>({date:new Date(1e3*e.report_timestamp),...e}),o=Object(n.a)(r.f,e=>e.map(e=>i(e))),E=Object(n.a)(r.f,l.d,l.b,(e,t,a)=>e.map(e=>i(e)).filter(e=>Object(c.c)(e,t)&&Object(c.a)(e,a))),s=Object(n.a)(E,l.c,(e,t)=>e.filter(e=>Object(c.b)(e,t)))},1975:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"f",(function(){return _})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return b})),a.d(t,"a",(function(){return p}));var n=a(23),r=a(1916),c=a(95);const l=(e,t)=>Object(c.h)(Object(n.startOfMonth)(Object(n.addMonths)(e,1)),t),i=(e,t)=>Object(n.differenceInMinutes)(e,t)/5,o=(e,t)=>Object(n.subMinutes)(e,5*t),E=(e,t)=>new Date(e-1e3*t*60*60*24);function s(e,t,a,r,s=!1){function m(t,n,r,l){const i=Math.ceil(n(t,e))||0,o=i>8,E=i>32?i/32:1;return Array(Math.min(32,i)+1).fill(t).map((e,t)=>{const n=r(e,t*E);return{value:n.getTime(),label:o&&t%2==1?null:Object(c.e)(n,a,l)}}).reverse()}if(Object(n.differenceInYears)(t,e)>1)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM YYYY");if(Object(n.differenceInMonths)(t,e)>2)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM");if(Object(n.differenceInDays)(t,e)>10){const e=Date.now(),a=t.getTime()>e,l=Object(c.h)(new Date,"UTC"),i=r>l.getTime()?new Date(r):l;return m(a?i:t,n.differenceInDays,E,"MMM D")}if(Object(n.differenceInDays)(t,e)>2){const e=m(t,n.differenceInDays,n.subDays,"ddd"),l=Date.now(),i=t.getTime()>l,o=Object(c.h)(new Date,a);return i&&r>o.getTime()&&(e[e.length-1]={value:r,label:null}),e}return Object(n.differenceInHours)(t,e)>1?m(t,n.differenceInHours,n.subHours,s?"H:mm":"hA"):m(t,i,o,"h:mma")}function m(e,t){function a(a,r,c,l,i=null){const o=a(t,e)||0,E=o>8;return Array(o+1).fill(e).map((t,a)=>{const o=c(r(e),a);return{value:o.getTime(),label:E&&a%2==1?null:Object(n.format)(o,l),tooltipLabel:Object(n.format)(o,i||l)}})}return Object(n.differenceInYears)(t,e)>1?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM YYYY"):Object(n.differenceInMonths)(t,e)>2?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM"):Object(n.differenceInDays)(t,e)>10?a(n.differenceInDays,n.startOfDay,n.addDays,"MMM D"):Object(n.differenceInDays)(t,e)>2?a(n.differenceInDays,n.startOfDay,n.addDays,"ddd","ddd ha"):Object(n.differenceInHours)(t,e)>1?a(n.differenceInHours,n.startOfHour,n.addHours,"ha","ddd ha"):a(n.differenceInMinutes,n.startOfMinute,n.addMinutes,"h:ma","ddd h:ma")}function d(e,t){return[{label:Object(n.format)(e,t),value:e},{label:Object(n.format)(Object(n.subHours)(e,4),t),value:Object(n.subHours)(e,4).getTime()},{label:Object(n.format)(Object(n.subHours)(e,8),t),value:Object(n.subHours)(e,8).getTime()},{label:Object(n.format)(Object(n.subHours)(e,12),t),value:Object(n.subHours)(e,12).getTime()},{label:Object(n.format)(Object(n.subHours)(e,16),t),value:Object(n.subHours)(e,16).getTime()},{label:Object(n.format)(Object(n.subHours)(e,20),t),value:Object(n.subHours)(e,20).getTime()},{label:Object(n.format)(Object(n.subHours)(e,24),t),value:Object(n.subHours)(e,24).getTime()}].reverse()}const _=(e,t,a,l=!1)=>{const i=l?"H:mm":"h:mm A",o=Object(n.startOfHour)(Object(n.addMinutes)(t,55));return Object(r.a)(25,t=>{const r=Object(n.subHours)(o,t).getTime(),l=0===t?e.formatMessage({id:"COMMON_GRANUALITY_0"}):Object(c.e)(r,a,i);return{label:t%6==0?l:null,value:r}}).reverse()};function u(e,t,a){const n=(r=10,c=t-e,Math.log(c)/Math.log(r)-1);var r,c;const l=n>0?Math.ceil(n):Math.floor(n),i=10**l,o=Math.ceil((t-e)/i)/(a-2)*i,E=Math.abs(l),s=[];let m=Math.round(e/i)*i;for(;m<t+2*o;m+=o)s.push({label:0===m?"0":m.toFixed(E),value:m});return s.reverse()}const b=(e,t)=>{const a=t-1;let n=Math.ceil(e);for(;n%a!=0;)n+=1;return Object(r.a)(t,e=>{const t=e?Math.ceil(e*(n/a)):0;return{value:t,label:String(t)}}).reverse()},p=(e,t)=>{let a=e;return t?a=a.replace(/a/i,""):(a=a.replace(/H/g,"h"),a.search(/a/i)<0&&(a+="A")),a}},1977:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(20),r=a(6),c=a(1957);const l=e=>Object(n.a)(Object(r.w)(Object(c.b)(),e.models),"data",{})},1978:function(e,t){},1979:function(e,t,a){e.exports=a.p+"../images/68474b3a657df0b79a1f16133608d618.png"},1980:function(e,t,a){e.exports=a.p+"../images/896960882c109433fd89c09486cfc0f1.png"},1981:function(e,t,a){e.exports=a.p+"../images/2c4f3fd05336814130381a3d418c09b1.png"},1982:function(e,t,a){e.exports=a.p+"../images/30b24022172c6e6e15a3cba5362dbf48.png"},1983:function(e,t,a){e.exports=a.p+"../images/a734bb2cc7227f8e672f96c5872fa130.png"},1984:function(e,t,a){e.exports=a.p+"../images/9de03fd81c53f0d6822343e944c92506.png"},1985:function(e,t,a){e.exports=a.p+"../images/8bfcf783c2c0196ebf98a4f9930a0442.png"},1986:function(e,t,a){e.exports=a.p+"../images/fadc4a0034a315cfb4dd7dfca8a96318.png"},1987:function(e,t,a){e.exports=a.p+"../images/e0332772cd670b1461694ff8679b12c2.png"},1988:function(e,t,a){e.exports=a.p+"../images/23aea509bb7becccdc6dc0f850b52664.png"},1989:function(e,t,a){e.exports=a.p+"../images/4da3dfc26db7d59e5992d3a6bac6e7e9.png"},1990:function(e,t,a){e.exports=a.p+"../images/972b5094e11b72a39eb452c4befe5f33.png"},1991:function(e,t,a){e.exports=a.p+"../images/7c8e7de4df9b6f9befbe12c06d96f235.png"},1992:function(e,t,a){e.exports=a.p+"../images/3037401c66da62835ac1f8426e2cf96e.png"},1993:function(e,t,a){e.exports=a.p+"../images/fa9239e9a4c4beb976c56ebed7fecf41.png"},1994:function(e,t,a){e.exports=a.p+"../images/6810e72bb1f9e902d4953f82e4c08d75.png"},1995:function(e,t,a){e.exports=a.p+"../images/bc53f8af0c6fcc5d7d0ac12c037dd1d4.png"},1996:function(e,t,a){e.exports=a.p+"../images/dccf50fa26da2841db8b004b420002c7.png"},1997:function(e,t,a){e.exports=a.p+"../images/fd7b28d3b6aabfc3497989564a4bf2d8.png"},1998:function(e,t,a){"use strict";var n=a(1957);a.d(t,"dismissUnifiCareActivation",(function(){return n.a})),a.d(t,"fetchUnifiCareDetails",(function(){return n.b}));a(1959);var r=a(1977);a.d(t,"selectUnifiCareDetails",(function(){return r.a}));a(1978)},2001:function(e,t,a){"use strict";a.d(t,"d",(function(){return r.a})),a.d(t,"e",(function(){return l.a})),a.d(t,"f",(function(){return o.a})),a.d(t,"g",(function(){return s.a})),a.d(t,"o",(function(){return d.a})),a.d(t,"p",(function(){return u.a})),a.d(t,"c",(function(){return p.a})),a.d(t,"b",(function(){return I.a})),a.d(t,"j",(function(){return R.a})),a.d(t,"a",(function(){return h})),a.d(t,"i",(function(){return f.a})),a.d(t,"l",(function(){return P.a})),a.d(t,"k",(function(){return S.a})),a.d(t,"m",(function(){return j.a})),a.d(t,"n",(function(){return L.a})),a.d(t,"h",(function(){return V.a}));a(1979),a(1980);var n=a(1981),r=a.n(n),c=a(1982),l=a.n(c),i=a(1983),o=a.n(i),E=a(1984),s=a.n(E),m=a(1985),d=a.n(m),_=a(1986),u=a.n(_),b=a(1987),p=a.n(b),O=a(1988),I=a.n(O),g=a(1989),R=a.n(g),v=a(0),C=a.n(v),h=({fill:e})=>C.a.createElement("svg",{width:"35",height:"21",viewBox:"0 0 35 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.1501 4.93596C16.7567 5.53369 16.4494 6.16878 16.2281 6.84123C16.0068 7.51368 15.847 8.12386 15.7487 8.67178H13.9047C14.003 8.02424 14.1751 7.26462 14.421 6.39293C14.6669 5.52124 15.1094 4.662 15.7487 3.81521C16.4863 2.71937 17.5804 1.79787 19.031 1.0507C20.4816 0.303536 22.3379 -0.0451415 24.5999 0.00466984L24.2311 1.87258C22.2641 1.87258 20.7521 2.17145 19.6948 2.76918C18.6376 3.36691 17.7894 4.08917 17.1501 4.93596ZM16.2649 9.94199C17.1009 9.94199 17.7033 10.1537 18.0721 10.5771C18.4409 11.0005 18.5269 11.7352 18.3302 12.7812L16.6337 20.7012H14.5685L16.1174 13.5284C16.2158 12.831 16.1912 12.3454 16.0437 12.0714C15.8961 11.7975 15.5519 11.6605 15.011 11.6605C14.6176 11.6605 14.212 11.8224 13.794 12.1461C13.376 12.4699 13.0933 12.9805 12.9457 13.6778L11.4705 20.7012H9.40527L11.6181 10.2409H13.5358L13.3145 11.4363C13.6588 10.988 14.1013 10.6269 14.6422 10.3529C15.1831 10.079 15.724 9.94199 16.2649 9.94199ZM30.6483 12.5572H25.7801L26.5915 8.67197H31.4596L31.9022 6.80405H24.8212L21.8708 20.7013H24.0836L25.4113 14.3504H30.2795L30.6483 12.5572ZM20.3955 10.2406H22.4608L20.3218 20.7009H18.1827L20.3955 10.2406ZM20.7643 8.33574C20.7152 8.41046 20.666 8.52254 20.6168 8.67197H22.7559L23.1984 6.80405C22.6083 6.85387 22.1412 6.99085 21.797 7.215C21.4528 7.43915 21.1577 7.70065 20.9119 7.99952C20.8627 8.14895 20.8135 8.26103 20.7643 8.33574ZM30.5745 20.7009L32.7135 10.2406H34.8525L32.6397 20.7009H30.5745ZM10.733 6.80405H8.52021L6.38117 16.7413C6.18448 17.6379 5.87715 18.2855 5.45917 18.684C5.0412 19.0825 4.51259 19.2817 3.87334 19.2817C3.18491 19.2817 2.71777 19.0825 2.4719 18.684C2.22603 18.2855 2.20145 17.6379 2.39814 16.7413L4.46342 6.80405H2.25062L0.185345 16.5919C-0.158868 18.1859 -0.0236405 19.3191 0.591025 19.9915C1.20569 20.664 2.17686 21.0002 3.50454 21.0002C4.83222 21.0002 5.93861 20.664 6.82373 19.9915C7.70885 19.3191 8.32352 18.1859 8.66773 16.5919L10.733 6.80405ZM23.9361 3.2177L23.4935 5.08561C22.51 5.18523 21.7233 5.42184 21.1332 5.79542C20.5431 6.169 20.1005 6.57994 19.8055 7.02824C19.6088 7.27729 19.449 7.55125 19.3261 7.85012C19.2031 8.14899 19.0925 8.42295 18.9941 8.672H17.1501C17.2485 8.2237 17.3837 7.7754 17.5558 7.32711C17.7279 6.87881 17.9861 6.4056 18.3303 5.90749C18.822 5.21014 19.535 4.59995 20.4693 4.07694C21.4036 3.55392 22.5592 3.26751 23.9361 3.2177ZM34.2256 7.14028L33.4511 6.80405L33.0085 8.67197H35.0001C35.0001 7.87499 34.7419 7.36443 34.2256 7.14028Z",fill:e})),T=a(1990),f=a.n(T),D=(a(1991),a(1992),a(1993)),P=a.n(D),y=a(1994),S=a.n(y),A=a(1995),j=a.n(A),N=a(1996),L=a.n(N),x=a(1997),V=a.n(x)},2006:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));const n={success:{lo:80,hi:100,within:!0},warning:{lo:60,hi:80,within:!0},danger:{lo:0,hi:60,within:!0}},r=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"1W",label:"1W",value:168},{id:"1M",label:"1M",value:720}]},2007:function(e,t){},2008:function(e,t){},2009:function(e,t,a){"use strict";var n=a(1969);a.d(t,"fetchUcoreGeneralInfo",(function(){return n.a}));a(1971);var r=a(2010);a.d(t,"selectHasCloudAccessEnabled",(function(){return r.a})),a.d(t,"selectHasCloudBackupEnabled",(function(){return r.b}));a(2011)},2010:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(4),r=a(6),c=a(1969);const l=Object(n.a)(e=>Object(r.w)(Object(c.a)(),e.models),e=>{var t;return null!==(t=null==e?void 0:e.data)&&void 0!==t?t:{}}),i=Object(n.a)(l,({cloud_access_enabled:e})=>e),o=Object(n.a)(l,({cloud_backup_enabled:e})=>e)},2011:function(e,t){},2014:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(0),r=a.n(n),c=a(2),l=a(63),i=a(255),o=a(2856),E=a(4),s=a(1967),m=a(1968),d=a(528),_=a(2927),u=a(1909);const b=(e,t,a)=>(t&&t.constructor===Object&&Object.keys(t).forEach(n=>{void 0===e[n]||a&&a.includes(n)?e[n]=t[n]:Number.isFinite(e[n])?e[n]=(e[n]||0)+t[n]:Array.isArray(e[n])?e[n]=e[n].concat(t[n]):e[n]&&e[n].constructor===Object&&b(e[n],t[n])}),e),p=(e,t)=>Object(d.a)(e).reduce((e,a)=>e?b(e,a,t):a,void 0);class O{constructor(e){this.data=e}dedeuplicatedBy(e,t){return this.data=((e,t,a)=>Object(_.a)(Object(u.a)(e,t)).map(e=>p(e,a)))(this.data,e,t),this}sortedBy(e,t){return this.data.sort((a,n)=>{const r=a[e]-n[e];return t?-r:r}),this}withLimit(e,t){let a=e;return this.data.length>=a&&(a-=1,this.other=p(this.data.slice(a),t),this.other.generated=!0),this.data=this.data.splice(0,a),this}countTotal(e){const t=this.other?[...this.data,this.other]:this.data;return this.total=p(t,e)||{},this}withMap(e,t){return this.mapFunction=a=>{const n=t?a:{};return Object.keys(e).forEach(t=>{n[t]=e[t](a)}),n},this}withOtherDefaults(e){return this.other={...this.other,...e},this}getData(e=!1){let t;return t=this.other.generated?[...this.data,this.other].map(this.mapFunction):this.data.map(this.mapFunction),t=t.map((t,a)=>({index:a,...e?{id:a.toString()}:[],...t})),{data:t,total:this.total}}}var I=a(28),g=a(38),R=a(1955);const v=Object(l.a)(e=>{if(0===e.length)return{data:[],total:{}};const t=e.map(e=>({label:Object(m.a)(Object(m.b)(e.cat,e.app))||r.a.createElement(c.c,{id:"CLIENT_PROPERTY_DPI_UNKNOWN_LABEL"}),packets:e.rx_packets+e.tx_packets,bytes:e.rx_bytes+e.tx_bytes,...e})),a={bytesParsed:e=>Object(i.c)(e.bytes),pkts:e=>Object(o.a)(e.packets,{spacer:" "})};return new O(t).dedeuplicatedBy("label").sortedBy("bytes",!0).withLimit(R.a).countTotal().withMap(a,!0).withOtherDefaults({label:r.a.createElement(c.c,{id:"CLIENT_PROPERTY_DPI_OTHER"})}).getData(!0)}),C=(e,t)=>Object(g.b)()(Object(E.a)(((e,t)=>Object(g.b)()(Object(E.a)(Object(s.b)(e,t),e=>{var t;return(null===(t=Object(I.c)(e))||void 0===t?void 0:t.by_app)||[]}),e=>e))(e,t),e=>v(e)),e=>e)},2015:function(e,t,a){"use strict";var n=a(1974);a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c}));var r=a(1950);a.d(t,"a",(function(){return r.a})),a.d(t,"d",(function(){return r.c}))},2016:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(73),r=a(46),c=a(69);const l=(e,t,a)=>{var c;const l=Object(n.getUplinkDevice)(t,e),i=l&&Object(r.c)(l)||"",o={id:e.id,ip:e.ip,isUp:!!e.uptime,name:e.name,type:e.type,uplink:l,uplinkName:i,vendor:null===(c=Object(n.clientFingerPrintCombiner)(a,e))||void 0===c?void 0:c.fingerprint_device_vendor};switch(o.type){case n.ClientType.VPN:e.type===n.ClientType.VPN&&(o.remote_ip=e.remote_ip,o.vpn_interface=e.vpn_interface);break;case n.ClientType.WIRED:e.type===n.ClientType.WIRED&&(o.is_wired=e.is_wired,o.sw_port=e.sw_port,o.wired_rate_mbps=e.wired_rate_mbps);break;case n.ClientType.WIRELESS:e.type===n.ClientType.WIRELESS&&(o.ap_mac=e.ap_mac,o.channel=e.channel,o.essid=e.essid,o.eagerly_discovered=e.eagerly_discovered,o.radio=e.radio,o.radio_proto=e.radio_proto,o.rssi=e.rssi,o.signal=e.signal,o.wifi_experience_score=e.wifi_experience_score)}return o.type!==n.ClientType.VPN&&e.type!==n.ClientType.VPN&&(o.blocked=e.blocked,o.fingerprint=e.fingerprint,o.first_seen=e.first_seen,o.last_seen=60*Math.floor((e.last_seen||0)/60),o.fixed_ip=e.fixed_ip,o.hostname=e.hostname,o.is_guest=e.is_guest,o.mac=e.mac,o.note=e.note,o.oui=e.oui,o.uplink_mac=(null==l?void 0:l.mac)||e.uplink_mac,o.unifi_device_info=e.unifi_device_info,o.use_fixedip=e.use_fixedip,o.network_name=e.network_name,o.usage_bytes=e.usage_bytes),o},i=e=>{const{name:t}=e,a=Object(n.getPhysicalName)(e);return e.type===n.ClientType.VPN?e.name:t||a};function o(e){var t,a,n,r,l,i,o,E,s,m;return(null===(t=null==e?void 0:e[c.b.STATUS])||void 0===t?void 0:t[c.a.ACTIVE])&&!(null===(a=null==e?void 0:e[c.b.STATUS])||void 0===a?void 0:a[c.a.OFFLINE])&&!(null===(n=null==e?void 0:e[c.b.STATUS])||void 0===n?void 0:n[c.a.BLOCKED])&&(null===(r=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===r?void 0:r[c.c.WIRED])&&(null===(l=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===l?void 0:l[c.c.VPN])&&(null===(i=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===i?void 0:i[c.c.NG])&&(null===(o=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===o?void 0:o[c.c.NA])&&(null===(E=null==e?void 0:e[c.e.CLIENTS_TYPE])||void 0===E?void 0:E[c.c.USERS])&&(null===(s=null==e?void 0:e[c.e.CLIENTS_TYPE])||void 0===s?void 0:s[c.c.GUESTS])&&!(null===(m=null==e?void 0:e[c.b.DEVICE])||void 0===m?void 0:m[c.b.DEVICE])}function E(e){var t,a,n,r,l,i,o,E,s,m;return(null===(t=null==e?void 0:e[c.b.STATUS])||void 0===t?void 0:t[c.a.ACTIVE])&&(null===(a=null==e?void 0:e[c.b.STATUS])||void 0===a?void 0:a[c.a.OFFLINE])&&(null===(n=null==e?void 0:e[c.b.STATUS])||void 0===n?void 0:n[c.a.BLOCKED])&&(null===(r=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===r?void 0:r[c.c.WIRED])&&(null===(l=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===l?void 0:l[c.c.VPN])&&(null===(i=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===i?void 0:i[c.c.NG])&&(null===(o=null==e?void 0:e[c.e.CONNECTION_TYPE])||void 0===o?void 0:o[c.c.NA])&&(null===(E=null==e?void 0:e[c.e.CLIENTS_TYPE])||void 0===E?void 0:E[c.c.USERS])&&(null===(s=null==e?void 0:e[c.e.CLIENTS_TYPE])||void 0===s?void 0:s[c.c.GUESTS])&&!(null===(m=null==e?void 0:e[c.b.DEVICE])||void 0===m?void 0:m[c.b.DEVICE])}},2018:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{fetch(e,{mode:"no-cors"}).then(()=>{a(!0)}).catch(()=>a(!1))},[e]),t}},2019:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),c=a(36),l=a(8),i=a(5),o=a(215),E=a(373),s=a(781),m=a(97),d=a(230),_=a(46);const u=Object(i.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
`,b=({mac:e,...t})=>{const a=Object(c.k)(),n=Object(l.useDispatch)(),i=Object(l.useSelector)(m.a),o=Object(l.useSelector)(d.selectDevicesBasicDataMemoized).find(t=>t.mac===e);return o?r.a.createElement(u,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation(),a.push(`/${i}/devices/properties/${e}/overview`),n(Object(E.g)({type:s.b.DEVICE,mac:e}))}},t),Object(_.c)(o)):null};t.b=b;const p=Object(i.c)(b)`
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
`},2020:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(788);t.a=({item:e,className:t,hideIcon:a=!1})=>{const{speed_tests:n}=e,l=n&&n.reduce((e,{download_speed_bytes:t=0})=>e+t,0);return r.a.createElement(c.a,{className:t,bytes:l,direction:"down",size:"body",pow:2,hideIcon:a})}},2021:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(788);t.a=({item:e,className:t,hideIcon:a=!1})=>{const{speed_tests:n}=e,l=n&&n.reduce((e,{upload_speed_bytes:t=0})=>e+t,0);return r.a.createElement(c.a,{className:t,bytes:l,direction:"up",size:"body",pow:2,hideIcon:a})}},2022:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(34),r=a(50);const c=e=>{const t=Object(r.selectIsIpsDisabled)(e),a=Object(n.selectWanNetworks)(e).every(({wan_smartq_enabled:e})=>!e);return t&&a}},2027:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return E}));var n=a(1179),r=a(67),c=a(159),l=a(2006);const i=(e,t)=>{if(void 0!==t&&""!==t){const a=t.toLowerCase().trim();return["client_model","client_name","device_model","device_name","isp_name","public_ip","wlan_essid"].some(t=>{var n,r;return null===(r=null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.toLowerCase)||void 0===r?void 0:r.call(n).includes(a)})}return!0},o=(e,t)=>!Object(n.a)(t)&&Object.keys(t).every(a=>{switch(a){case"experience":return!t.experience.length||t.experience.some(t=>{const a=l.b[t];return Object(c.f)(a,e.client_wifi_experience)});default:return Object(r.a)(t[a])?t[a].includes(e[a]):void 0===e[a]||e[a]===t[a]}}),E=(e,t)=>{if(t){return(Date.now()/1e3-e.report_timestamp)/3600<=t}return!0}},2028:function(e,t,a){"use strict";var n,r;a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),function(e){e.WLAN_ESSID="wlan_essid",e.DEVICE_NAME="device_name",e.EXPERIENCE="experience"}(n||(n={})),function(e){e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning"}(r||(r={}))},2029:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(78),l=a(117),i=a(785);t.a=({model:e,name:t,withName:a=!1,width:n=25,height:o=25,...E})=>{const s=c.deviceModels[e],m=a?i.a:l.c,d=a?t||(null==s?void 0:s.name):void 0;return r.a.createElement(m,Object.assign({device:{model:e,type:null==s?void 0:s.type,name:d},width:n,height:o},E))}},2030:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(255),l=a(793);t.a=({item:e})=>{const{client_link_download_rate_kbps:t,client_link_upload_rate_kbps:a}=e,n=`${Object(c.c)(1e3*t/8,"bitrate")} / ${Object(c.c)(1e3*a/8,"bitrate")}`;return r.a.createElement(l.a,null,n)}},2035:function(e,t,a){"use strict";var n=a(73),r=a(0),c=a(8);t.a=({client:e,props:t,children:a})=>{const{id:l}=e,i="uptime"in e&&e.uptime||"isUp"in e&&e.isUp;let o=n.ClientModelType.ACTIVE;e.type===n.ClientType.VPN?o=n.ClientModelType.VPN:i||(o="blocked"in e&&e.blocked?n.ClientModelType.BLOCKED:n.ClientModelType.OFFLINE);const E=Object(r.useMemo)(()=>Object(n.selectClientProps)(l,t,o),[l,o]);return a(Object(c.useSelector)(E))}},2038:function(e,t,a){"use strict";var n=a(215),r=a(32),c=a(0),l=a.n(c),i=a(5),o=a(2),E=a(8),s=a(36),m=a(373),d=a(781),_=a(70);const u=Object(i.c)(n.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
  border: 0;
  line-height: 1.6;
`,b=Object(i.c)(r.a)`
  max-width: 220px;
`;t.a=({uplinkMac:e,uplinkName:t,uplinkPort:a})=>{const n=Object(E.useDispatch)(),i=Object(s.k)(),p=Object(_.a)("/devices/properties/:mac/overview"),O=Object(c.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),i.push(p.replace(":mac",e)),n(Object(m.g)({type:d.b.DEVICE,mac:e}))},[n,i,p,e]);return t?l.a.createElement(u,{size:"small",variant:"link",onClick:O},l.a.createElement(b,{size:"body",color:"info",truncate:!0},t," ",a?"#"+a:"")):l.a.createElement(r.a,{size:"body",color:"secondary"},l.a.createElement(o.c,{id:"COMMON_HYPHEN"}))}},2039:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=({strength:e,color:t,inactiveColor:a="currentColor",width:n,height:c})=>r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27 26",width:n,height:c},r.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("rect",{fill:e>=1?t:a,x:"0",y:"16",width:"3",height:"10"}),r.a.createElement("rect",{fill:e>=2?t:a,x:"6",y:"12",width:"3",height:"14"}),r.a.createElement("rect",{fill:e>=3?t:a,x:"12",y:"8",width:"3",height:"18"}),r.a.createElement("rect",{fill:e>=4?t:a,x:"18",y:"4",width:"3",height:"22"}),r.a.createElement("rect",{fill:e>=5?t:a,x:"24",y:"0",width:"3",height:"26"})))},2045:function(e,t,a){"use strict";var n=a(1967);a.d(t,"fetchTraffic",(function(){return n.a}));var r=a(1955);a.d(t,"DPI_CONVERTER_LIMIT",(function(){return r.a}));var c=a(2014);a.d(t,"selectFormattedStaDpiData",(function(){return c.a}));a(2008),a(1968)},2046:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2047:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2050:function(e,t,a){"use strict";var n=a(36),r=a(0),c=a.n(r),l=a(5),i=a(1913),o=a(8),E=a(235),s=a(527),m=a(43),d=a(781),_=a(4),u=a(460),b=a.n(u),p=a(1743),O=a(3),I=a(73),g=a(454),R=a(38),v=a(106);var C=a(2015);const h=e=>{var t,a,n;return null!==(n=null===(a=null===(t=null==e?void 0:e.shared)||void 0===t?void 0:t.propertypanel)||void 0===a?void 0:a.showing)&&void 0!==n&&n},T=e=>{var t,a,n;return null!==(n=null===(a=null===(t=null==e?void 0:e.shared)||void 0===t?void 0:t.propertypanel)||void 0===a?void 0:a.activeItem)&&void 0!==n?n:{}},f=Object(_.a)(T,({mac:e})=>e),D=(Object(_.a)(T,({id:e})=>e),Object(_.a)(T,({type:e})=>e),[]),P=e=>Object(_.b)(_.c,(e,t)=>b()(Object(p.a)(e,D),Object(p.a)(t,D)))(Object(_.a)(t=>{var a,n,r,c;return(null===(c=null===(r=null===(n=null===(a=t.models)||void 0===a?void 0:a[O.MODEL])||void 0===n?void 0:n.byId)||void 0===r?void 0:r[e])||void 0===c?void 0:c.record)||{}},e=>e),e=>e),y=Object(_.a)(O.selectDevicesData,f,(e,t)=>{const a=e.find(e=>e.mac===t);return e.reduce((e,t)=>{var n;return a&&(null===(n=a.uplink_table)||void 0===n?void 0:n.find(e=>e.mac===t.mac))&&e.push({value:t.mac,label:t.name||t.mac}),e},[])}),S=["uptime","rx_bytes","tx_bytes","rx_packets","tx_packets","rx_bytes-r","tx_bytes-r"],A=e=>Object(_.b)(_.c,(e,t)=>b()(Object(p.a)(e,S),Object(p.a)(t,S)))(Object(_.a)(t=>{var a,n,r,c,l,i,o;return(null===(o=(null===(n=null===(a=t.models[I.MODEL])||void 0===a?void 0:a.byId)||void 0===n?void 0:n[e])||(null===(c=null===(r=t.models[I.MODEL_BLOCKED])||void 0===r?void 0:r.byId)||void 0===c?void 0:c[e])||(null===(i=null===(l=t.models[I.MODEL_OFFLINE])||void 0===l?void 0:l.byId)||void 0===i?void 0:i[e]))||void 0===o?void 0:o.record)||{}},e=>e.type!==I.ClientType.VPN?(e=>e.id?{_id:e.id,id:e.id,name:e.name,type:e.type,rx_bytes:e.rx_bytes,tx_bytes:e.tx_bytes,rx_packets:e.rx_packets,tx_packets:e.tx_packets,ip:e.ip,uptime:e.uptime,network_id:e.network_id,unifi_device_info:e.unifi_device_info,connected:Object(I.getIsClientConnected)(e),connection:Object(I.getConnection)(e),displayName:Object(I.getClientDisplayName)(e),physicalName:Object(I.getPhysicalName)(e),authorized:"authorized"in e?e.authorized:void 0,gw_mac:"gw_mac"in e?e.gw_mac:void 0,is_guest:"is_guest"in e?e.is_guest:void 0,mac:"mac"in e?e.mac:void 0,hostname:"hostname"in e?e.hostname:void 0,fingerprint:"fingerprint"in e?e.fingerprint:void 0,oui:"oui"in e?e.oui:void 0,blocked:"blocked"in e?e.blocked:void 0,use_fixedip:"use_fixedip"in e?e.use_fixedip:void 0,fixed_ip:"fixed_ip"in e?e.fixed_ip:void 0,note:"note"in e?e.note:void 0,usergroup_id:"usergroup_id"in e?e.usergroup_id:void 0,signal:"signal"in e?e.signal:void 0,radio:"radio"in e?e.radio:void 0,radio_proto:"radio_proto"in e?e.radio_proto:void 0,tx_rate:"tx_rate"in e?e.tx_rate:void 0,rx_rate:"rx_rate"in e?e.rx_rate:void 0,"tx_bytes-r":"tx_bytes-r"in e?e["tx_bytes-r"]:void 0,"rx_bytes-r":"rx_bytes-r"in e?e["rx_bytes-r"]:void 0,rssi:"rssi"in e?e.rssi:void 0,essid:"essid"in e?e.essid:void 0,is_wired:"is_wired"in e?e.is_wired:void 0,powersave_enabled:"powersave_enabled"in e?e.powersave_enabled:void 0,network_name:"network_name"in e?e.network_name:void 0,channel:"channel"in e?e.channel:void 0,user_id:"user_id"in e?e.user_id:void 0,uplink_mac:"uplink_mac"in e?e.uplink_mac:void 0,sw_port:"sw_port"in e?e.sw_port:void 0,wifi_experience_score:"wifi_experience_score"in e?e.wifi_experience_score:void 0,wired_rate_mbps:"wired_rate_mbps"in e?e.wired_rate_mbps:void 0,eagerly_discovered:"eagerly_discovered"in e?e.eagerly_discovered:void 0}:null)(e):null),e=>e),j=e=>Object(R.b)()(Object(_.a)(t=>{var a,n,r;return(null===(r=null===(n=null===(a=t.models[I.MODEL])||void 0===a?void 0:a.byId)||void 0===n?void 0:n[e])||void 0===r?void 0:r.record)||{}},Object(v.selectUnifiDevice)(e),(e,t)=>((e,t)=>{if(!e.id&&!t.id)return null;const a=Object.assign({},e,t);return{id:a.id,mac:a.mac,model:a.model,oui:a.oui,fingerprint:a.fingerprint,unifi_device_info:a.unifi_device_info,displayable_version:a.displayable_version,product_line:a.product_line,ip:a.ip,network_name:a.network_name,uplink_mac:a.uplink_mac,is_wired:a.is_wired,name:a.name,hostname:a.hostname,note:a.note,usergroup_id:a.usergroup_id,fixed_ip:a.fixed_ip,use_fixedip:a.use_fixedip,user_id:a.user_id,network_id:a.network_id,type:a.type,sw_port:"sw_port"in a?a.sw_port:void 0,essid:"essid"in a?a.essid:void 0}})(e,t)),e=>e);var N=a(373),L=a(70),x=a(178),V=a(32),w=a(15),F=a(2),M=a(21),U=a(117),k=a(522),z=a(792),B=a(793);const W=Object(l.c)(k.a,{shouldForwardProp:e=>!["width","height"].includes(e)})`
  float: left;
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  ${({width:e})=>e&&`width: ${e}px;`}
  ${({height:e})=>e&&`height: ${e}px;`}
`;var H=({defaultName:e="",client:t=null,width:a,height:n,alt:r})=>c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(W,{client:t,width:a,height:n,alt:r}),c.a.createElement(B.a,null,Object(I.getClientDisplayName)(t)||e));var G=({data:{client_icon_device_id:e,client_icon_engine_id:t,client_name:a},name:n,withName:r=!1})=>{const l=r?H:k.a;return c.a.createElement(l,{client:{fingerprint:{dev_id:e,computed_engine:t},name:n||a,is_wired:!1},alt:n})},Y=a(46),$=a(2016);const K=Object(l.c)("div")`
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
`,te=({activeItem:{data:e,data:{displayName:t=Object(I.getClientDisplayName)(e)}}})=>c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(J,null,c.a.createElement(k.a,{client:e,alt:t})),c.a.createElement(K,null,c.a.createElement(X,{size:"body",weight:"bold",truncate:!0},Object($.c)(e)))),ae=c.a.memo(({activeItem:e})=>{var t,a;return c.a.createElement(M.a,{alignItems:"center"},Object(O.hasActiveUnifiCare)(e.data)&&c.a.createElement(Q,{width:30,height:30}),c.a.createElement(J,null,c.a.createElement(U.c,{device:e.data})),c.a.createElement(K,null,c.a.createElement(X,{size:"body",weight:"bold",truncate:!0},Object(Y.d)(e.data))),(null===(t=e.data)||void 0===t?void 0:t.model_in_eol)&&c.a.createElement(q,{color:"danger",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_LABEL_EOL"})),(null===(a=e.data)||void 0===a?void 0:a.model_in_lts)&&c.a.createElement(q,{color:"warning",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_LABEL_LTS"})),Object(O.isU6)(e.data)&&c.a.createElement(ee,{size:"medium",isActive:!0}))},(e,t)=>{var a,n,r,c;return(null===(a=e.activeItem.data)||void 0===a?void 0:a.mac)===(null===(n=t.activeItem.data)||void 0===n?void 0:n.mac)&&(null===(r=e.activeItem.data)||void 0===r?void 0:r.name)===(null===(c=t.activeItem.data)||void 0===c?void 0:c.name)}),ne=({activeItem:{data:e,data:{client_name:t}}})=>c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(J,null,c.a.createElement(G,{data:e})),c.a.createElement(K,null,c.a.createElement(X,{size:"body",weight:"bold",truncate:!0},t)));var re=({activeItem:e})=>{switch(e.type){case d.b.CLIENT:case d.b.UNIFI_DEVICE_CLIENT:return c.a.createElement(te,{activeItem:e});case d.b.DEVICE:return c.a.createElement(ae,{activeItem:e});case d.b.WIFI_MAN:return c.a.createElement(ne,{activeItem:e});case d.b.ISP_DETAILS:return c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(w.F,{width:25.25,height:25.25}),c.a.createElement(Z,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"COMMON_WORD_INTERNET"})));default:return null}},ce=a(83),le=a(78);const ie=(e,t)=>e?t===d.b.DEVICE?Object(O.isUspp)(e)?d.a.USPP:Object(O.isUsps)(e)?d.a.USPS:Object(O.isUlte)(e)?d.a.LTE:Object(O.isUspPduPro)(e)?d.a.USPPDUP:Object(O.isUxg)(e)?d.a.UXG:Object(O.isUdmPro)(e)||Object(O.isUdmProSe)(e)?d.a.UDMPRO:Object(O.isUsAggPro)(e)?d.a.USAGGPRO:Object(O.getIsInWallAp)(e)?d.a.UAP_IW:Object(O.getIsUsl8Mp)(e)?d.a.USL8MP:Object(O.isUap6mp)(e)?d.a.UAP6MP:Object(O.getIsUspRps)(e)?d.a.USPRPS:Object(O.isUbbXg)(e)?d.a.UBBXG:(e=>(le.deviceModels[e.model]||{hybrid:void 0}).hybrid||e.type)(e):t===d.b.CLIENT?d.a.CLIENT:t:null;var oe;!function(e){e.WAN="wan",e.ALL="all"}(oe||(oe={}));var Ee=a(1818),se=a(452),me=a(647),de=a(215),_e=a(226);const ue=Object(l.c)(M.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`,be=Object(l.c)(M.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  margin-top: 7px;
`;var pe=({activeItem:e})=>{const t=Object(n.k)(),{site:a}=Object(n.m)(),r=Object(o.useSelector)(m.j),{uptime:l,ip:i,port_idx:E,configuration:{wan_provider_capabilities:s,wan_dns1:d,wan_dns2:_},details:{service_provider:u}}=e,{download_kilobits_per_second:b=0,upload_kilobits_per_second:p=0}=s,O=1e3*b/8,I=1e3*p/8;return c.a.createElement(M.a,{flexDirection:"column"},(null==u?void 0:u.name)?c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_SERVICE_PROVIDER"})),c.a.createElement(V.a,{color:"secondary",size:"body"},u.name)):null,(null==u?void 0:u.city)?c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_LABEL_LOCATION"})),c.a.createElement(V.a,{color:"secondary",size:"body"},u.city)):null,c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_DOWNLOAD_CAPACITY"})),c.a.createElement(me.a,{type:"bytes",input:O,options:"bitrate",color:"secondary",size:"body"})),c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_UPLOAD_CAPACITY"})),c.a.createElement(me.a,{type:"bytes",input:I,options:"bitrate",color:"secondary",size:"body"})),l?c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_WORD_UPTIME"})),c.a.createElement(me.a,{type:"uptime",input:l,color:"secondary",size:"body"})):null,c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_WAN_IP",values:{port_idx:E}})),c.a.createElement(V.a,{color:"secondary",size:"body"},i)),(d||_)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),c.a.createElement(V.a,{color:"secondary",size:"body"},d)),c.a.createElement(ue,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),c.a.createElement(V.a,{color:"secondary",size:"body"},_))),c.a.createElement(be,null,c.a.createElement(de.a,{size:"small",type:"button",variant:"inline",onClick:()=>{const e=Object(n.i)(r,{site:a});t.push(`${e}${_e.a.internetSettings}`)}},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_LINK_INTERNET_SETTINGS"}))))},Oe=a(2019),Ie=a(97);const ge=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
`;var Re=({device:e,...t})=>{const a=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),r=Object(o.useSelector)(Ie.a),l=Object(n.k)(),i=Object(o.useDispatch)(),E=Object(O.getUplinkDisplayName)(e,a);return E?c.a.createElement(ge,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:e=>{e.preventDefault(),e.stopPropagation(),l.push(`/${r}/devices/properties/${a.mac}`),i(Object(N.g)({type:d.b.DEVICE,mac:a.mac}))}},t),E):null};const ve=Object(l.c)(M.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`;var Ce=()=>{const e=Object(o.useSelector)(O.selectAvailableUlteDevice);return c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(ve,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_LTE_BACKUP"})),c.a.createElement(Oe.b,{mac:e.mac})),c.a.createElement(ve,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_UPLINK"})),c.a.createElement(Re,{device:e})))};const he=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Te=({activeItem:e})=>{const t=Object(o.useSelector)(se.d);return c.a.createElement(he,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(pe,{activeItem:e})},...t?[{id:"wanFailover",label:c.a.createElement(F.c,{id:"DASHBOARD_ISP_ACCORDION_TITLE_WAN_FAILOVER"}),renderContent:()=>c.a.createElement(Ce,null)}]:[]],multiOpen:!0})},fe=a(1851),De=a(365),Pe=a(71),ye=a(784);const Se=Object(l.c)("div")`
  padding: 28px 30px;

  table {
    th {
      font-size: ${({theme:e})=>e.fontSizes[1]}px;
    }
  }
`,Ae=Object(l.c)(me.a)`
  color: ${({theme:e})=>e.motifPalette.uBlue06};
`,je=Object(l.c)(me.a)`
  color: ${({theme:e})=>e.motifPalette.purple06};
`,Ne=Object(l.c)(V.a)`
  color: inherit;
`,Le=Object(l.c)("div")`
  margin: 20px 0;
`,xe=[{id:"time",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_HEADER_TIME"})),renderCell:({time:e})=>c.a.createElement(V.a,{size:"body"}," ",c.a.createElement(ye.a,{date:new Date(e)})),minWidth:150},{id:"xput_download",minWidth:100,renderLabel:()=>c.a.createElement(Pe.g,{alignItems:"center"},c.a.createElement(Ne,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_STATUS_DOWNLOAD"}))),renderCell:({xput_download:e})=>c.a.createElement(Ae,{size:"body",type:"bytes",options:"bitrate",input:1e6*e/8})},{id:"xput_upload",minWidth:100,renderLabel:()=>c.a.createElement(Pe.g,{alignItems:"center"},c.a.createElement(Ne,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_STATUS_UPLOAD"}))),renderCell:({xput_upload:e})=>c.a.createElement(je,{size:"body",type:"bytes",options:"bitrate",input:1e6*e/8})}];var Ve=({activeItem:e})=>{const t=Object(o.useDispatch)(),a=Object(o.useSelector)(De.selectSpeedTestReportData);return Object(r.useEffect)(()=>{t(Object(De.fetchSpeedTestReport)())},[e.mac,t]),c.a.createElement(Se,null,c.a.createElement(fe.a,{idField:"_id",hideCellOverflow:!1,columns:xe,disableColumnFilters:!0,items:a,renderFooter:()=>a.length>0?c.a.createElement(Le,null,c.a.createElement(F.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})):c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_NO_SPEED_TESTS"})}))},we=a(45),Fe=a(2029),Me=a(159);const Ue={width:25,height:25},ke=Object(l.c)(M.a)`
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
`,We=Object(l.c)(M.a)`
  height: 100px;
  > * {
    &:not(:last-child) {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
    }
  }
`,He=Object(l.c)(M.a)`
  width: 70px;
  min-height: ${Ue.height}px;
  height: ${Ue.height}px;
  position: relative;
  z-index: 1;
`,Ge=Object(l.c)(V.a)`
  width: 70px;
`,Ye=Object(l.c)(w.w)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xs"]};
`,$e=Object(l.c)(M.a)`
  > * {
    color: ${we.a["grey-2"]};
  }
`,Ke=Object(l.c)(M.a)`
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
`,qe=e=>{const{isInternet:t,isClient:a,client_wifi_experience:n,number_of_clients:r,wireless_uplink:l=!1,expandButton:i,devicesCount:o,onClick:E}=e,s=!!t||!a&&!l;return c.a.createElement(Be,null,!t&&c.a.createElement(ze,{wired:s}),c.a.createElement(We,{flexDirection:"column",alignItems:"center",justifyContent:"center"},t||a||!r?c.a.createElement(M.a,{flex:"1"}):c.a.createElement($e,{flex:"1",alignItems:"center",justifyContent:"space-between"},c.a.createElement(Ye,null),c.a.createElement(V.a,null,r)),!i&&c.a.createElement(He,{flex:"1",alignItems:"center",justifyContent:"center"},(e=>{const{isInternet:t,isClient:a,model:n}=e;return t?c.a.createElement(w.F,{size:"large"}):a?c.a.createElement(G,Object.assign({data:e},Ue)):c.a.createElement(Fe.a,{model:n,name:n})})(e)),i&&E&&o&&c.a.createElement(Xe,{iconSize:"logo",onClick:E},o),c.a.createElement(M.a,{flex:"1",alignItems:"center",justifyContent:"center"},c.a.createElement(Ge,{centered:!0,truncate:!0},(e=>{var t;const{isInternet:a,isClient:n,client_model:r,client_name:l,model:i}=e;return a?c.a.createElement(F.c,{id:"COMMON_WORD_INTERNET"}):n?r||l:(null===(t=le.deviceModels[i])||void 0===t?void 0:t.name)||i})(e))),c.a.createElement(M.a,{flex:"1",alignItems:"center",justifyContent:"center"},a&&c.a.createElement(V.a,{color:Object(Me.c)(n)},n,"%"))))};var Ze=({item:e,variant:t})=>{const[a,n]=Object(r.useState)(!1),{uplink_devices:l=[],report_timestamp:i,...o}=e,E=[...l].reverse(),s=E[0],m=E[(null==E?void 0:E.length)-1],d=E.slice(1,(null==E?void 0:E.length)-1),_=Object(r.useCallback)(()=>{n(!a)},[a]),u=a?E.map(e=>c.a.createElement(qe,Object.assign({key:e.mac},e))):c.a.createElement(c.a.Fragment,null,c.a.createElement(qe,Object.assign({key:s.mac},s)),d.length>1?c.a.createElement(qe,{expandButton:!0,onClick:_,devicesCount:(null==E?void 0:E.length)-2}):d.map(e=>c.a.createElement(qe,Object.assign({key:e.mac},e))),(null==E?void 0:E.length)>1&&c.a.createElement(qe,Object.assign({key:m.mac},m)));return c.a.createElement(ke,{flexDirection:"column",flex:"0 0 auto",bordered:"secondary"===t},c.a.createElement(Ke,null,c.a.createElement(qe,{isInternet:!0}),u,c.a.createElement(qe,Object.assign({isClient:!0},o))))},Je=a(2020),Qe=a(2021),et=a(2030),tt=a(785),at=a(11),nt=a(786);var rt=({item:e})=>{const{client_signal:t,client_wifi_experience:a,device_model:n,device_name:l,speed_tests:i,wlan_band:o,wlan_channel_width:E,wlan_essid:s}=e,m=Object(r.useMemo)(()=>Object(Me.d)(a),[a]),d=Object(r.useMemo)(()=>i.reduce((e,t)=>{const{test_server_name:a}=t;return a&&!e.includes(a)&&e.push(a),e},[]),[i]),_=Object(r.useMemo)(()=>(null==d?void 0:d.length)?d.join(", "):"-",[null==d?void 0:d.length]),u=Object(r.useMemo)(()=>{var e;return(null===(e=le.deviceModels[n])||void 0===e?void 0:e.name)||n},[n]);return c.a.createElement(Pe.g,{flexDirection:"column",padding:"26px 32px 0"},m&&c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_WIFI_EXP"})),c.a.createElement(me.a,{size:"body",type:"percent",input:a/100,style:{color:we.a["color-"+Object(Me.c)(a)]}})),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_AP_MODEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(tt.a,{width:20,height:20,device:{model:n,type:at.DeviceType.AP,name:u}}))),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_AP_NAME"})),c.a.createElement(V.a,{color:"secondary",size:"body"},Object(nt.a)(l))),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_SSID"})),c.a.createElement(V.a,{color:"secondary",size:"body"},s)),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_SIGNAL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},t," ",c.a.createElement(F.c,{id:"COMMON_UNIT_DBM"}))),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_CHANNEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},`${E}${o&&` (${o})`}`)),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(Pe.g,{justifyContent:"flex-start",alignItems:"center"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_DOWN"}))),c.a.createElement(Pe.g,{alignItems:"center"},c.a.createElement(Je.a,{item:e}))),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(Pe.g,{justifyContent:"flex-start",alignItems:"center"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_UP"}))),c.a.createElement(Pe.g,{alignItems:"center"},c.a.createElement(Qe.a,{item:e}))),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_RATE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(et.a,{item:e}))),c.a.createElement(Pe.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"WIFI_MAN_OVERVIEW_TEST_SERVER"})),c.a.createElement(V.a,{color:"secondary",size:"body"},_)))};const ct=Object(l.c)(V.a)`
  margin-right: 4px;
`,lt=Object(l.c)("div")`
  width: 18px;
  border: 1px solid ${({theme:e})=>e.motifPalette.uBlue06};
  margin: 0 8px;
`,it=Object(l.c)("div")`
  width: 18px;
  margin: 0 8px;
  border: 1px dashed ${({theme:e})=>e.motifPalette.uBlue06};
`,ot=Object(l.c)(M.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 8px;
`;var Et=({timestamp:e})=>c.a.createElement(ot,{alignItems:"center",justifyContent:"space-around"},c.a.createElement(M.a,{alignItems:"center",justifyContent:"space-around"},c.a.createElement(ct,{weight:"bold"},c.a.createElement(F.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_TEST"})),c.a.createElement(ye.a,{date:new Date(1e3*e),spacer:" "})),c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(lt,null),c.a.createElement(F.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRED"}),c.a.createElement(it,null),c.a.createElement(F.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRELESS"})));const st=Object(l.c)("div")`
  width: 100%;
  background: ${({theme:e})=>e.colors.navBackground};
`;var mt=function({activeItem:e}){return c.a.createElement(c.a.Fragment,null,c.a.createElement(st,null,c.a.createElement(Ze,{item:e,variant:"primary"}),c.a.createElement(Et,{timestamp:e.report_timestamp})),c.a.createElement(rt,{item:e}))},dt=a(20),_t=a(1180),ut=a(189);const bt=Object(l.c)(M.a)`
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
`;var Ot=({timestamp:e,onBack:t})=>c.a.createElement(bt,null,c.a.createElement(ut.c,{name:"backButton",onClick:t},c.a.createElement(w.f,null)),c.a.createElement(pt,{size:"body",weight:"bold",centered:!0},c.a.createElement(ye.a,{date:new Date(1e3*e)})));var It=()=>{const e=Object(n.k)(),t=Object(n.n)(),a=Object(dt.a)(t,"params.subPanel"),r=Object(o.useSelector)(Object(_t.e)(a));return a&&r?c.a.createElement(c.a.Fragment,null,c.a.createElement(Ot,{timestamp:r.report_timestamp,onBack:()=>e.push("../history")}),c.a.createElement(Ze,{item:r,variant:"secondary"}),c.a.createElement(rt,{item:r})):null},gt=a(1917),Rt=a(1117),vt=a(1791),Ct=a(523),ht=a(48),Tt=a(23),ft=a(2933),Dt=a(2900),Pt=a(1172),yt=a(2728),St=a(286);const At={client:{fetchMethodName:"fetchUserReport",selectMethod:De.selectUserReportData,translationPrefix:"CLIENT"},ap:{fetchMethodName:"fetchAPExperienceReport",selectMethod:De.selectAPExperienceReportData,translationPrefix:"DEVICE"}},jt=Object(l.c)("div")`
  > div {
    position: relative;
  }
`,Nt=Object(l.c)("div")`
  position: absolute;
  top: 0;
  left: 0;
`,Lt=Object(l.c)("div")`
  width: 100%;
  text-align: center;
`,xt=l.a`
  fill: ${we.a["grey-3"]};
  font-size: 12px;
`,Vt=[{label:100,value:100},{label:50,value:50},{label:0,value:0}],wt=e=>{const{start:t,end:a}=Object(De.selectDailyGranularity)();return[{label:e.formatMessage({id:"COMMON_GRANUALITY_24"}),value:t},{label:e.formatMessage({id:"COMMON_GRANUALITY_12"}),value:Object(Tt.addHours)(t,12).getTime()},{label:e.formatMessage({id:"COMMON_NOW"}),value:a}]},Ft={fetchUserReport:De.fetchUserReport,fetchAPExperienceReport:De.fetchAPExperienceReport};var Mt=Object(ht.compose)(F.f,Object(o.connect)((e,{mac:t,itemType:a})=>{var n;const r=(null===(n=null==At?void 0:At[a])||void 0===n?void 0:n.selectMethod)||null;return{reportData:r&&r(e,[t],Object(De.selectDailyGranularity)())}},Ft))(e=>{const{mac:t,reportData:a,intl:n,itemType:l}=e,i=Object(r.useRef)(null),o=Object(r.useRef)(null),[E,s]=Object(r.useState)(0);Object(r.useEffect)(()=>{var a;const n=(null===(a=null==At?void 0:At[l])||void 0===a?void 0:a.fetchMethodName)||"";n&&e[n]&&e[n](Object(De.selectReportPayload)([t],Object(De.selectDailyGranularity)()))},[l,t]),Object(r.useEffect)(()=>i.current&&s(i.current.scrollWidth),[i]);const m=a.map(e=>({x:e.time,y:e.satisfaction>=0?e.satisfaction:null})),d=Object(St.b)(m,St.a.MINUTES.grain,"x"),_=i.current&&m.length>0;return c.a.createElement(jt,null,c.a.createElement("div",{ref:i},_&&c.a.createElement(ft.a,{xAxis:wt(n),yAxis:Vt,width:E,height:140,hideXGridLines:!0,hideYGridLines:!0,labelClassName:xt,renderChartElements:(e,t,a)=>c.a.createElement(Dt.a,{variant:"gradientArea",interpolation:"curved",dashed:!1,data:d,getCoordinates:e,maxY:a,mouseData:t,tooltipPortal:o?o.current:void 0,hideMissingData:!0,allowCustomDots:!0,renderTooltip:({hidden:e,left:t,top:a,y:n})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Pt.a,{left:t,top:a-4,message:c.a.createElement(Lt,{style:{color:we.a["color-"+Object(Me.c)(Math.min(100,n||0))]}},n?n.toFixed(0):0),hidden:e,topMargin:4,width:50}),c.a.createElement(Nt,null,c.a.createElement("svg",{width:E,height:140},t&&a&&c.a.createElement(yt.a,{x:t,y:a,color:we.a["color-"+Object(Me.c)(Math.min(100,n||0))]}))))})}),c.a.createElement("div",{ref:o})))}),Ut=a(17),kt=a(41);const zt=Object(l.c)(de.a)`
  padding: 4px 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  width: auto;
`,Bt=l.a`
  justify-content: flex-start;
`;var Wt=({item:e,itemType:t,message:a})=>{const n=Object(o.useDispatch)(),l=Object(r.useCallback)(()=>{n(Object(Ut.g)({modalType:kt.a.REPORT_WIFI_EXPERIENCE,modalProps:{item:e,itemType:t}}))},[n,e,t]);return c.a.createElement(zt,{wrapClassName:Bt,variant:"link",size:"small",onClick:l},c.a.createElement(F.c,{id:a||"COMMON_REPORT_WIFI_EXPERIENCE_BUTTON"}))},Ht=a(794);const Gt=Object(l.c)("div")`
  border-top: 1px ${({theme:e})=>e.motifPalette.ui04} solid;
  margin: 8px 0;
`,Yt=Object(l.c)(gt.a)`
  position: relative;
  margin: 4px 0;
  border-radius: 16px;
  height: 4px;
`;var $t=({item:e,showGraph:t,headerTitle:a,itemType:n,canReport:l})=>{const i="mac"in e?e.mac:void 0,E="is_wired"in e?e.is_wired:void 0,s="wired_rate_mbps"in e?e.wired_rate_mbps:void 0,m="uplink_mac"in e&&e.uplink_mac,d="sw_port"in e&&e.sw_port,_="eagerly_discovered"in e&&e.eagerly_discovered,u=Object(r.useMemo)(()=>m&&d?Object(Ht.a)(m,d):()=>{},[m,d]),b=Object(o.useSelector)(u),{satisfaction:p,known:O}=((e,t)=>(e=>!("satisfaction"in e))(e)?Object(I.getClientExperienceFromPort)(t,e):(e=>"satisfaction"in e)(e)?{satisfaction:e.satisfaction,known:Object(Me.d)(e.satisfaction)}:null)(e,b),g=Object(Me.c)(p);return c.a.createElement(Pe.g,{width:"100%",flexDirection:"column",justifyContent:"center",padding:"16px 32px 0",flex:"0 0 auto"},c.a.createElement(Pe.g,{width:"100%",justifyContent:"space-between",alignItems:"baseline"},c.a.createElement(V.a,{size:"header-xs",weight:"bold"},c.a.createElement(F.c,{id:a})),e.uptime?E&&s>0?c.a.createElement(V.a,{size:"header-l",color:"primary"},c.a.createElement("span",{style:{color:Rt.a.getGradientColor(p/100),fontWeight:700}},`${Object(Ct.b)(s)} ${10===s||100===s?`(${s} Mbps)`:""}`)):E||O||!_?c.a.createElement(V.a,{size:"header-l",color:g,weight:"bold"},p,"%"):c.a.createElement(Pe.g,{flexDirection:"column"},c.a.createElement(V.a,{size:"header-xs",weight:"bold",color:"info"},c.a.createElement(F.c,{id:"COMMON_WORD_INITIALIZING"}),"...")):c.a.createElement(V.a,{size:"body",color:"disabled"},c.a.createElement(F.c,{id:"COMMON_HYPHEN"}))),O&&!E?c.a.createElement(vt.a,{variant:"gradient",value:p,size:"medium"}):E||O||!_?null:c.a.createElement(Yt,{placement:"below",isLoading:!0}),l&&e.uptime&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe.g,{margin:"8px 0"},c.a.createElement(Wt,{item:e,itemType:n})),c.a.createElement(Gt,null)),t&&!E&&c.a.createElement(Mt,{mac:i,itemType:n}))},Kt=a(255),Xt=a(664),qt=a(2035);var Zt=({children:e,flexProps:t={}})=>c.a.createElement(M.a,Object.assign({width:"100%",marginBottom:4,justifyContent:"space-between"},t),e);const Jt=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0;
  margin: 0;
  border: 0;
  line-height: 1.6;
  font-weight: normal;
`,Qt=({activeItem:e,handlePortClick:t})=>{const{ip:a,network_name:n,connected:l,is_wired:i}=e;let E=null,s=null,m=null;e.type===I.ClientType.WIRELESS&&({essid:E,channel:s,radio:m}=e);const d="uplink_mac"in e&&e.uplink_mac,_=Object(r.useMemo)(()=>d?Object(O.selectDeviceRecordProperties)(d,["type","name","model","mac"]):()=>{},[d]),u=Object(o.useSelector)(_),b=Object(r.useMemo)(()=>Object(I.getPortName)(u,e),[u,e]),p=Object(r.useMemo)(()=>Object(I.getPortNumber)(u,e),[u,e]),g=Object(r.useMemo)(()=>{switch(m){case"ng":return"2.4 GHz";case"na":return"5 GHz";default:return null}},[m]);return c.a.createElement(Pe.g,{padding:"50px 32px 26px 32px",flexDirection:"column",height:"100%"},a&&l?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_IP_ADDRESS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},a)):null,c.a.createElement(qt.a,{client:e,props:["uptime"]},({uptime:e=null})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_UPTIME"})),c.a.createElement(V.a,{color:"secondary",size:"body"},Object(Xt.a)(e))):null),n?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_NETWORK"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n)):null,b?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:i?"CLIENT_HEADER_WIRED":"CLIENT_HEADER_WIRELESS"})),c.a.createElement(Jt,{variant:"link",onClick:t},Object(nt.a)(b,15))):null,i?c.a.createElement(c.a.Fragment,null,p&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_PORT"})),c.a.createElement(V.a,{color:"secondary",size:"body"},p))):c.a.createElement(c.a.Fragment,null,E?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_WIFI"})),c.a.createElement(V.a,{color:"secondary",size:"body"},E)):null,s?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_CHANNEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},s)):null,g?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_BAND"})),c.a.createElement(V.a,{color:"secondary",size:"body"},g)):null,c.a.createElement(qt.a,{client:e,props:["signal"]},({signal:e=null})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_SIGNAL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e," ",c.a.createElement(F.c,{id:"COMMON_UNIT_DBM"}))):null),c.a.createElement(qt.a,{client:e,props:["tx_rate"]},({tx_rate:e=0})=>e>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_RX_RATE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},Object(Kt.c)(1e3*e/8,"bitrate","SI"))):null),c.a.createElement(qt.a,{client:e,props:["rx_rate"]},({rx_rate:e=0})=>e>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_TX_RATE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},Object(Kt.c)(1e3*e/8,"bitrate","SI"))):null)),c.a.createElement(qt.a,{client:e,props:["usage_bytes"]},({usage_bytes:e=null})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_ACTIVITY_24_HRS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(me.a,{size:"body",type:"bytes",input:e}))):null),c.a.createElement(qt.a,{client:e,props:["tx_packets","tx_bytes"]},({tx_packets:e=0,tx_bytes:t=0})=>e&&t?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",c.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null),c.a.createElement(qt.a,{client:e,props:["rx_packets","rx_bytes"]},({rx_packets:e=0,rx_bytes:t=0})=>e&&t?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_UP_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",c.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null))};var ea=({activeItem:e,history:t})=>{const a="uplink_mac"in e&&e.uplink_mac,n=Object(r.useMemo)(()=>a?Object(O.selectDeviceRecordProperties)(a,["mac"]):()=>{},[a]),l=Object(o.useSelector)(n),i=Object(L.a)("/devices/properties/:mac/overview");return c.a.createElement(Qt,{activeItem:e,handlePortClick:()=>{(null==l?void 0:l.mac)&&t.push(i.replace(":mac",l.mac))}})},ta=a(339),aa=a(129),na=a(27),ra=a(798),ca=a(16);const la=Object(l.c)(V.a)`
  max-width: 150px;
  line-height: 1.6 !important;
  text-align: right;
`,ia=Object(l.c)(de.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  border: 0;
  margin: 0;
  line-height: 1.6;
`;var oa=({activeItem:e,fingerprintData:t})=>{const{mac:a,name:n,oui:l,fingerprint:i}=e,E=Object(I.getFingerprintSourceId)(i),{fingerprint_device_vendor:s,fingerprint_device_name:m,fingerprint_device_os:d}=t,_=Object(I.isFingerprintIncorrect)(e.fingerprint),u=Object(I.isFingerPrintFromUiDb)(e),b=Object(o.useDispatch)(),p=Object(o.useSelector)(Ie.a),O=Object(r.useCallback)(()=>{const t=Object(I.getClientDisplayName)(e);b(Object(ta.c)(a,p)).then(()=>{let n=I.ClientModelType.ACTIVE;e.blocked?n=I.ClientModelType.BLOCKED:(null==e?void 0:e.uptime)||(n=I.ClientModelType.OFFLINE);const r=Object.assign({},"fingerprint"in e?e.fingerprint:{},{dev_id_override:void 0,has_override:!1});b(Object(I.updateClientDataInStore)(a,{fingerprint:r},n)),b(Object(na.c)({icon:ca.a.success,message:"REPORT_CLIENT_FINGERPRINT_REVERT_SUCCESS",values:{clientName:t}}))}).catch(()=>{b(Object(na.c)({icon:ca.a.danger,message:"REPORT_CLIENT_FINGERPRINT_REVERT_ERROR",values:{clientName:t}}))})},[a,e.type,n,i,p]);return Object(L.f)(Number.isInteger(E)?[Object(aa.f)(E)]:()=>Promise.resolve({}),c.a.createElement(M.a,{padding:"24px 32px 0",flexDirection:"column",justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"row"},c.a.createElement(M.a,{maxWidth:"33%",minWidth:"33%",margin:"auto 16px auto 0",alignItems:"center",justifyContent:"center"},c.a.createElement(k.a,{client:e,alt:null==e?void 0:e.name,grid:!0})),c.a.createElement(M.a,{width:"100%",flexDirection:"column"},m&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_MODEL"})),c.a.createElement(la,{color:"secondary",size:"body",truncate:!0},m)),a&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_MAC"})),c.a.createElement(V.a,{color:"secondary",size:"body"},a)),(s||l)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_MANUFACTURER"})),c.a.createElement(V.a,{style:{maxWidth:"110px"},color:"secondary",size:"body",truncate:!0},s||l)),!_&&d&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_OS"})),c.a.createElement(la,{color:"secondary",size:"body",truncate:!0},d)),c.a.createElement(M.a,{marginTop:4},!_&&!u&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary"}),c.a.createElement(ia,{variant:"link",onClick:()=>b(Object(ra.g)(a))},c.a.createElement(F.c,{id:Object(I.hasFingerprintFromLibrary)(e)?"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_WRONG":"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_MISSING"}))),_&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary"}),c.a.createElement(ia,{variant:"link",onClick:O},c.a.createElement(F.c,{id:"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REVERT"}))))))))};const Ea=({activeItem:e,fingerprintData:t,...a})=>{const{connected:n}=e,l="is_wired"in e?e.is_wired:void 0,i="uplink_mac"in e&&e.uplink_mac,E="sw_port"in e&&e.sw_port,s=Object(r.useMemo)(()=>i&&E?Object(Ht.a)(i,E):()=>{},[i,E]),m=Object(o.useSelector)(s),d=Object(I.getClientExperienceFromPort)(m,e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(oa,{activeItem:e,fingerprintData:t}),c.a.createElement($t,{item:e,clientExperience:d,headerTitle:l?"CLIENT_HEADER_WIRED_EXPERIENCE":"CLIENT_HEADER_WIFI_EXPERIENCE",showGraph:(null==d?void 0:d.known)&&n,itemType:"client",canReport:!0}),c.a.createElement(ea,Object.assign({activeItem:e},a)))};var sa=({activeItem:e,...t})=>{const a=Object(r.useMemo)(()=>Object(I.selectClientFingerprint)(e),[e,[null==e?void 0:e.fingerprint]]),n=Object(o.useSelector)(a);return Object(I.getIsClientConnected)(e)?c.a.createElement(Ea,Object.assign({activeItem:e,fingerprintData:n},t)):c.a.createElement(oa,{activeItem:e,fingerprintData:n})},ma=a(1954),da=a(1948),_a=a(2038),ua=a(643),ba=a(2911),pa=a(2856),Oa=a(2045),Ia=a(6);const ga=169,Ra=3,va=77,Ca=1,ha=77,Ta=1,fa=[{id:"labelInfo",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"}," ",c.a.createElement(F.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_USAGE"})),renderCell:({label:e,index:t})=>c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(ya,{index:t}),c.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)),growthFactor:Ra,minWidth:ga},{id:"bytesParsed",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_BYTES"})),growthFactor:Ca,minWidth:va,renderCell:({bytesParsed:e})=>c.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)},{id:"pkts",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_PACKETS"})),growthFactor:Ta,minWidth:ha,renderCell:({pkts:e})=>c.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)}],Da=Rt.a.getDiscreteColorScaler(Oa.DPI_CONVERTER_LIMIT),Pa=Object(l.c)(M.a)`
  width: 100%;
  margin-top: 30px;
`,ya=Object(l.c)(ua.a,{shouldForwardProp:e=>"index"!==e})`
  background-color: ${({index:e})=>Da(e)} !important;
  margin-right: 8px;
`,Sa=Object(l.c)(M.a)`
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
`,ja=Object(l.c)(M.a)`
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
`,Na=Object(l.c)(w.X)`
  position: absolute;
  top: 52%;
  left: 36px;
  color: ${({theme:e})=>{var t;return null===(t=e.motifPalette)||void 0===t?void 0:t.uBlue06}};
`,La=Object(l.c)(w.Y)`
  position: absolute;
  top: 52%;
  left: 36px;
  color: ${({theme:e})=>{var t;return null===(t=e.motifPalette)||void 0===t?void 0:t.purple06}};
`;var xa=Object(F.f)(({contentPaddingX:e,intl:t,mac:a})=>{const n={data:{macs:[a],type:"by_app"}},l={method:"post",crudCacheStrategy:{interval:3e4,type:Ia.a.COMBINED}},{data:i,total:E}=Object(o.useSelector)(Object(Oa.selectFormattedStaDpiData)(n,l)),s=Object(o.useDispatch)();Object(r.useEffect)(()=>(a&&s(Object(Oa.fetchTraffic)(n,l)),()=>s(Object(Ia.c)(Object(Oa.fetchTraffic)(n,l)))),[a]);const[m,d]=Object(Kt.c)(E.rx_bytes).split(" "),[_,u]=Object(Kt.c)(E.tx_bytes).split(" ");return c.a.createElement(c.a.Fragment,null,i.length?c.a.createElement(c.a.Fragment,null,m&&_&&c.a.createElement(Pa,{alignItems:"center",justifyContent:"space-around"},[{items:i.map(({id:e,index:t,rx_bytes:a})=>({id:e,value:a,color:Da(t)})),title:`${m} ${d}`,Icon:Na},{items:i.map(({id:e,index:t,tx_bytes:a})=>({id:e,value:a,color:Da(t)})),title:`${_} ${u}`,Icon:La}].map(({items:e,title:a,Icon:n})=>c.a.createElement(ja,{key:e.rx_bytes,justifyContent:"center",alignItems:"center"},c.a.createElement(M.a,{position:"relative"},c.a.createElement(n,{size:"medium"})),c.a.createElement(ba.a,{items:e,title:a,description:t.formatMessage({id:"CLIENT_PROPERTY_TRAFFIC_TAB_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",size:140,thickness:3.5,spacer:.5})))),c.a.createElement(Sa,{marginTop:36,contentPaddingX:e,justifyContent:"flex-start",alignItems:"center"},c.a.createElement(fe.a,{items:i,disableColumnFilters:!0,renderFooter:()=>c.a.createElement(M.a,null,c.a.createElement(M.a,{minWidth:ga+20,flexGrow:Ra},c.a.createElement(V.a,{weight:"bold",size:"body",color:"secondary"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_TOTAL_TRAFFIC"}))),c.a.createElement(M.a,{minWidth:va+3,flexGrow:Ca,alignItems:"center"},c.a.createElement(V.a,{size:"body",color:"secondary"},Object(Kt.c)((i||[]).reduce((e,t)=>e+((null==t?void 0:t.bytes)||0),0)))),c.a.createElement(M.a,{minWidth:ha+3,flexGrow:Ta,alignItems:"center"},c.a.createElement(V.a,{size:"body",color:"secondary"},Object(pa.a)((i||[]).reduce((e,t)=>e+((null==t?void 0:t.packets)||0),0),{spacer:" "})))),columns:fa,rowHeight:30,disableTextPointer:!0,disableSelection:!0}))):c.a.createElement(M.a,{padding:"30px",alignItems:"center",justifyContent:"center"},c.a.createElement(Aa,null),c.a.createElement(F.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_EMPTY"})))});const Va=Object(l.c)(M.a)`
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
`,Fa=Object(l.c)(M.a)`
  > {
    &:last-child {
      margin-bottom: 0;
    }
  }
`,Ma=Object(l.c)(w.f)`
  color: ${({theme:e})=>e.motifPalette.neutral08};
`;var Ua=({activeItem:e})=>{const t=Object(n.k)(),{subPanelId:a,subPanel:l}=Object(n.m)(),i=Object(r.useMemo)(()=>(null==e?void 0:e.uplink_mac)?Object(O.selectDeviceRecordProperties)(e.uplink_mac,["ip","name","model","mac"]):()=>{},[null==e?void 0:e.uplink_mac]),E=Object(o.useSelector)(i),s=E&&Object(Y.c)(E)||"",m=Object(o.useSelector)(Object(ma.b)(a||l));return Object(L.f)([Object(da.fetchSession)(e.mac,!1)],c.a.createElement(c.a.Fragment,null,c.a.createElement(Va,{position:"relative",padding:"12px 0",marginBottom:34,justifyContent:"center",width:"100%"},c.a.createElement(ut.c,{name:"backButton",onClick:()=>t.push("../insights")},c.a.createElement(Ma,{size:"small"})),(null==m?void 0:m.date)&&c.a.createElement(V.a,{size:"body",color:"secondary",weight:"bold"},m.date)),c.a.createElement(M.a,{padding:"0 30px",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(Fa,{width:"100%",flexDirection:"column"},(null==m?void 0:m.start)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"})),c.a.createElement(V.a,{color:"secondary",size:"body"},m.start)),(null==m?void 0:m.end)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_END"})),c.a.createElement(V.a,{color:"secondary",size:"body"},m.end)),(null==m?void 0:m.duration)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"})),c.a.createElement(V.a,{color:"secondary",size:"body"},m.duration)),(null==E?void 0:E.ip)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},E.ip)),(null==E?void 0:E.mac)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},E.mac)),(null==E?void 0:E.mac)&&s&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_UPLINK"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(_a.a,{uplinkMac:E.mac,uplinkName:s}))),(null==m?void 0:m.port)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_PORT"})),c.a.createElement(V.a,{color:"secondary",size:"body"},m.port)),(null==m?void 0:m.experience)>=0&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:(null==m?void 0:m.is_wired)?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement("span",{style:{color:we.a["color-"+Object(Me.b)(null==m?void 0:m.experience)]}},null==m?void 0:m.experience,"%"))))),(null==m?void 0:m.mac)&&c.a.createElement(wa,{renderOnlyExpandedContent:!0,variant:"secondary",items:[{id:"dpi",label:c.a.createElement(F.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),openByDefault:!0,renderContent:()=>c.a.createElement(xa,{mac:m.mac,contentPaddingX:0})}]})))};const ka=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,za=Object(l.c)(M.a)`
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
`,Ga=[{id:"date",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_DATE"})),renderCell:({date:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"start",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_START"})),renderCell:({start:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"duration",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_DURATION"})),renderCell:({duration:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80}],Ya=[{id:"date",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_DATE"})),renderCell:({date:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"start",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_START"})),renderCell:({start:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"duration",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_DURATION"})),renderCell:({duration:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"wifiExperience",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"CLIENT_TABLE_HEADER_WIFI_EXP"})),renderCell:({experience:e})=>c.a.createElement(c.a.Fragment,null,e>=0?c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},c.a.createElement("span",{style:{color:we.a["color-"+Object(Me.b)(e)]}},e,"%")):c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"}))),minWidth:80}];var $a=({activeItem:{mac:e,is_wired:t}})=>{const{data:a,isLoading:r,error:l}=Object(o.useSelector)(Object(da.selectFormattedSessionData)(e,!1,[])),i=Object(n.k)();return Object(L.f)([Object(da.fetchSession)(e,!1)],c.a.createElement(c.a.Fragment,null,c.a.createElement(ka,{variant:"secondary",renderOnlyExpandedContent:!0,multiOpen:!0,items:[{id:"dpi",label:c.a.createElement(F.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),openByDefault:!0,renderContent:()=>c.a.createElement(xa,{mac:e,contentPaddingX:0})},{id:"history",label:c.a.createElement(F.c,{id:"CLIENT_ACCORDION_HEADER_HISTORY"}),openByDefault:!0,renderContent:()=>c.a.createElement(za,{justifyContent:"flex-start",alignItems:"center"},!r&&a.length>0&&c.a.createElement(fe.a,{items:a,disableColumnFilters:!0,columns:t?Ga:Ya,onRowClick:({id:e})=>i.push("insights/"+e),rowHeight:30,renderFooter:()=>c.a.createElement(Ha,null,c.a.createElement(F.c,{id:"CLIENT_PROPERTY_FOOTER_RECORDS",values:{length:a.length}}))}),(!r||l)&&0===a.length&&c.a.createElement(Ba,null,c.a.createElement(Wa,null),c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"})))}]})))};const Ka=e=>Object(dt.a)(e,"shared.propertypanel.tabGetDataFunction",{}),Xa=e=>Object(dt.a)(e,"shared.propertypanel.tabSubmitFunction",{}),qa=e=>Object(dt.a)(e,"shared.propertypanel.tabResetFunction",{});var Za=function(e){return function(t){return class extends c.a.Component{constructor(){super(...arguments),this.state=e.reduce((e,t)=>({...e,dirty:{...e.dirty,[t]:!1},invalid:{...e.invalid,[t]:!1}}),{dirty:{},invalid:{}}),this.setFormDirty=(e,t)=>{const{dirty:a}=this.state;a[e]!==t&&this.setState({dirty:{...a,[e]:t}})},this.setFormInvalid=(e,t)=>{const{invalid:a}=this.state;a[e]!==t&&this.setState({invalid:{...a,[e]:t}})}}render(){const{dirty:e,invalid:a}=this.state,n=!!Object.values(e).find(e=>e),r=!!Object.values(a).find(e=>e);return c.a.createElement(t,Object.assign({isDirty:n,isInvalid:r,formStates:e,setFormDirty:this.setFormDirty,setFormInvalid:this.setFormInvalid},this.props))}}}},Ja=a(44),Qa=a(30),en=a(378),tn=a(137);const an=Object(l.c)("div")`
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
`,rn=Object(l.c)(nn)`
  padding-bottom: 8px;
  .validationMessageClassName {
    display: none;
  }
`,cn=Object(l.c)(tn.a)`
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
`;var En=({handleSubmit:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n,setFormDirty:l,fetchUserGroups:i,dirty:o,isUnifiDeviceClient:E,intl:s,userGroups:m,values:{usergroup_id:d}})=>{Object(r.useEffect)(()=>{i(),t({details:e}),a({details:n})},[]),Object(r.useEffect)(()=>{l("details",o)},[l,o]);const _=Object(r.useMemo)(()=>[{label:s.formatMessage({id:"CLIENT_MODAL_INPUT_BANDWIDTH_PROFILE_DEFAULT"}),value:""},...m],[m]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(an,{marginBottom:10},c.a.createElement(rn,{iconBefore:c.a.createElement(ln,{size:"original"}),label:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_NAME",labelClassName:"labelClassName",validationMessageClassName:"validationMessageClassName",name:"name",full:!0,size:"body",disabled:E})),c.a.createElement(an,{marginBottom:10},c.a.createElement(cn,{label:"CLIENT_PROPERTY_GENERAL_TAB_BANDWIDTH_PROFILE",name:"usergroup_id",type:"dropdown",full:!0,validated:!0,translateLabel:!0,options:_})),d&&c.a.createElement(Pe.g,{marginTop:15},c.a.createElement(on,{isActive:!0}),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_BANDWIDTH_PROFILE_INFO"}))))};const sn=Object(Ja.g)({mapPropsToValues:e=>{const{name:t,hostname:a,usergroup_id:n}=e;return{name:a===t?"":t,usergroup_id:n||""}},validationSchema:Qa.a.object().shape({name:Qa.a.string(),usergroup_id:Qa.a.string()}),handleSubmit:(e,{props:t,setSubmitting:a,resetForm:n})=>{const{user_id:r,mac:c,createToast:l,updateClient:i}=t;i(e,c,r).then(t=>{t.data&&l({icon:ca.a.success,message:"CLIENT_NOTICE_SAVE_SUCCESS"}),n({values:e})}).catch(e=>{l({icon:ca.a.danger,message:"CLIENT_NOTICE_SAVE_ERROR"}),n()}).finally(()=>{a(!1)})}}),mn={createToast:na.c,updateClient:I.updateClient,fetchUserGroups:en.fetchUserGroups,tabSubmitFunction:N.j,tabResetFunction:N.i};var dn=Object(ht.compose)(Object(o.connect)(e=>({userGroups:Object(en.selectUserGroupOptions)(e)}),mn),F.f,sn)(En),_n=a(375),un=a(34),bn=a(480),pn=a(445);const On=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }

  > * {
    vertical-align: middle;
  }
`;var In=({fetchNetworks:e,tabResetFunction:t,tabSubmitFunction:a,resetForm:n,handleSubmit:l,setFormDirty:i,dirty:o,canAssignFixedIp:E,isDeviceGateway:s,values:m,networkData:d,intl:_})=>(Object(r.useEffect)(()=>{e(),a({network:l}),t({network:n})},[]),Object(r.useEffect)(()=>{i("network",o)},[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement(On,{marginBottom:20},c.a.createElement(Pe.g,{justifyContent:"space-between",alignItems:"center",marginTop:9},c.a.createElement("div",null,c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_USE_FIXED_IP"})),c.a.createElement(pn.a,{message:c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_FIXED_IP_TOOLTIP"}),width:200,className:"ml-2",position:"bottom",style:{display:"inline-block"}},c.a.createElement(w.W,{hidden:s,width:20,height:20,isActive:!0}))),c.a.createElement(tn.a,{type:"checkbox",id:"use_fixedip",name:"use_fixedip",disabled:!E}))),m.use_fixedip&&c.a.createElement(c.a.Fragment,null,c.a.createElement(On,{marginBottom:25},c.a.createElement(tn.a,{type:"dropdown",full:!0,validated:!0,name:"network_id",label:_.formatMessage({id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_NETWORK"}),options:d,fontSize:"body"})),c.a.createElement(On,null,c.a.createElement(tn.a,{label:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS",size:"body",full:!0,name:"fixed_ip"}))))),gn=a(100),Rn=a(105);const vn=Object(Ja.g)({mapPropsToValues:({defaultNetworkDataId:e,ip:t,fixed_ip:a,use_fixedip:n,network_id:r,clients:c})=>({use_fixedip:!!n,network_id:r||e,fixed_ip:a||t,clients:c}),validationSchema:({networkData:e,user_id:t})=>gn.a.lazy(({network_id:a,fixed_ip:n,clients:r})=>{const l=e&&e.find(e=>e.value===a),i=l&&l.ipSubnet;return gn.a.object().shape({use_fixedip:gn.a.bool(),network_id:gn.a.string(),fixed_ip:gn.a.string().when("use_fixedip",{is:!0,then:gn.a.string().label("CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS").matches(Rn.h,c.a.createElement(F.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).unifiIpv4InSubnet(i,c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_VALIDATION",values:{value:n,subnet:i}})).test("isFixedIPUnique",c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_UNIQUE"}),e=>!e||r.filter(e=>"user_id"in e&&e.user_id!==t).every(t=>!("fixed_ip"in t)||!t.fixed_ip||e!==t.fixed_ip)).required()})})}),handleSubmit:(e,{props:{user_id:t,mac:a,createToast:n,updateClient:r},setSubmitting:c,resetForm:l})=>{let i={use_fixedip:!1};"use_fixedip"in e&&e.use_fixedip&&(i=(({clients:e,...t})=>t)(e)),r(i,a,t).then(t=>{t.data&&n({icon:ca.a.success,message:"CLIENT_NOTICE_SAVE_SUCCESS"}),l({values:e})}).catch(e=>{n({icon:ca.a.danger,message:"CLIENT_NOTICE_SAVE_ERROR"}),l()}).finally(()=>{c(!1)})}}),Cn={createToast:na.c,fetchNetworks:un.fetchNetworks,updateClient:I.updateClient,tabSubmitFunction:N.j,tabResetFunction:N.i};var hn=Object(ht.compose)(_n.b,Object(o.connect)(e=>({networkData:Object(bn.e)(e),defaultNetworkDataId:Object(bn.c)(e),isDeviceGateway:Object(bn.d)(e),canAssignFixedIp:Object(bn.a)(e),clients:Object(I.selectNetworkContainerClientsData)(e)}),Cn),F.f,vn)(In),Tn=a(111);const fn=Object(l.c)("footer",{shouldForwardProp:e=>"hasFormResetButton"!==e})`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: flex;
  justify-content: ${({hasFormResetButton:e})=>e?"space-between":"flex-end"};
  padding: 30px;
`,Dn=Object(l.c)(ut.c)`
  font-weight: normal;
`;var Pn=({allowCancel:e,isDirty:t,isInvalid:a,onFormSubmit:n,onFormReset:r,onFormCancel:l,className:i,submitButtonText:o})=>c.a.createElement(fn,{className:i,hasFormResetButton:!!r},c.a.createElement(Dn,{name:"cancel",type:"button",onClick:l,disabled:!e&&!t},c.a.createElement(Tn.a,{message:"COMMON_ACTION_CANCEL"})),r&&c.a.createElement(Dn,{name:"reset",variant:"primary",type:"button",pill:!1,onClick:r,disabled:!t},c.a.createElement(Tn.a,{message:"COMMON_ACTION_RESET_TO_DEFAULTS"})),c.a.createElement(Dn,{name:"submit",variant:"primary",type:"submit",pill:!1,onClick:n,disabled:!t||a},c.a.createElement(Tn.a,{message:o||"COMMON_ACTION_APPLY_CHANGES"})));const yn=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Sn=Object(l.c)(Pn)`
  border-top: 0;
`;var An=c.a.memo(Za(["details","network"])(e=>{const{activeItem:t,isDirty:a,setFormDirty:n,formStates:r}=e,l=Object(o.useSelector)(Xa),i=Object(o.useSelector)(qa),{name:E,hostname:s,note:m,usergroup_id:d,mac:_,fixed_ip:u,use_fixedip:b,user_id:p,ip:O,network_id:I}=t,g="product_line"in t;return c.a.createElement(Pe.g,{height:"100%",flexDirection:"column",justifyContent:"space-between"},c.a.createElement(yn,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"details",openByDefault:!0,label:c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS"}),renderContent:()=>c.a.createElement(dn,{user_id:p,mac:_,hostname:s,name:E,note:m,usergroup_id:d,setFormDirty:n,isUnifiDeviceClient:g})},{id:"network",label:c.a.createElement(F.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_NETWORK"}),renderContent:()=>c.a.createElement(hn,{user_id:p,mac:_,ip:O,fixed_ip:u,use_fixedip:b,network_id:I,setFormDirty:n})}]}),c.a.createElement(Sn,{isDirty:a,onFormSubmit:()=>{r.details&&l.details(),r.network&&l.network()},onFormCancel:()=>{i.details(),i.network()}}))})),jn=a(1157),Nn=a(2001);var Ln=({mac:e,props:t,children:a})=>{const n=Object(r.useMemo)(()=>Object(v.selectUnifiDeviceClientProperties)(e,t),[e,t]);return a(Object(o.useSelector)(n))};const xn=Object(l.c)("img")`
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
`,Fn=Object(l.c)(Pe.g)`
  background-color: ${({theme:e})=>e.motifPalette.neutral02};
  border-radius: 4px;
`,Mn=({activeItem:e})=>c.a.createElement(Pe.g,{flexDirection:"row"},c.a.createElement(Pe.g,{maxWidth:"33%",minWidth:"33%",margin:"auto 16px auto 0",alignItems:"center",justifyContent:"center"},c.a.createElement(Pe.d,{client:e,grid:!0})),c.a.createElement(Pe.g,{width:"100%",flexDirection:"column"},(null==e?void 0:e.model)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_MODEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e.model)),(null==e?void 0:e.mac)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_MAC"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e.mac)),(null==e?void 0:e.displayable_version)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_VERSION"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e.displayable_version)))),Un=({product_line:e})=>{var t,a;const n=Object(o.useSelector)(m.b);return e?c.a.createElement(Fn,{margin:"50px 0",padding:"12px",alignItems:"center"},c.a.createElement(Pe.g,{marginRight:16},c.a.createElement(xn,{src:(()=>{switch(e){case v.UnifiDeviceProductLine.TALK:return Nn.n;case v.UnifiDeviceProductLine.ACCESS:return Nn.k;case v.UnifiDeviceProductLine.PROTECT:return Nn.m;default:return null}})()})),c.a.createElement(Pe.g,null,c.a.createElement(wn,{variant:"link",onClick:()=>{window.location.href=n.replace("network",e.toLowerCase())}},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_VIEW_IN",values:{application:(null===(t=null==e?void 0:e.charAt(0))||void 0===t?void 0:t.toUpperCase())+(null===(a=null==e?void 0:e.slice(1))||void 0===a?void 0:a.toLowerCase())}})))):null},kn=({activeItem:e,history:t})=>{const{mac:a,ip:n,network_name:l,uplink_mac:i,is_wired:E,essid:s}=e,m=Object(L.a)("/devices/properties/:mac/overview"),d=Object(r.useMemo)(()=>i?Object(O.selectDeviceRecordProperties)(i,["type","name","model","mac"]):()=>{},[i]),_=Object(o.useSelector)(d),u=Object(r.useMemo)(()=>Object(I.getPortName)(_,e),[_,e]),b=Object(r.useMemo)(()=>Object(I.getPortNumber)(_,e),[_,e]);return c.a.createElement(Pe.g,{flexDirection:"column"},n?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_IP_ADDRESS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n)):null,c.a.createElement(Ln,{mac:a,props:["uptime"]},({uptime:e=null})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_UPTIME"})),c.a.createElement(V.a,{color:"secondary",size:"body"},Object(jn.a)(e))):null),l?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_NETWORK"})),c.a.createElement(V.a,{color:"secondary",size:"body"},l)):null,u?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:E?"UNIFI_DEVICE_CLIENT_LABEL_WIRED":"UNIFI_DEVICE_CLIENT_LABEL_WIRELESS"})),c.a.createElement(Vn,{variant:"link",onClick:()=>t.push(m.replace(":mac",i))},u)):null,E&&b?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_PORT"})),c.a.createElement(V.a,{color:"secondary",size:"body"},b)):null,!E&&s?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_WIFI"})),c.a.createElement(V.a,{color:"secondary",size:"body"},s)):null,c.a.createElement(Ln,{mac:a,props:["usage_bytes"]},({usage_bytes:e=null})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_ACTIVITY_24_HOURS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(me.a,{size:"body",type:"bytes",input:e}))):null),c.a.createElement(Ln,{mac:a,props:["rx_packets","rx_bytes"]},({rx_packets:e=0,rx_bytes:t=0})=>e&&t?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",c.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null),c.a.createElement(Ln,{mac:a,props:["tx_packets","tx_bytes"]},({tx_packets:e=0,tx_bytes:t=0})=>e&&t?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_UP_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",c.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null))};var zn=({activeItem:e,history:t})=>c.a.createElement(Pe.g,{padding:"32px 32px 0",flexDirection:"column",justifyContent:"space-between"},c.a.createElement(Mn,{activeItem:e}),c.a.createElement(Un,{product_line:null==e?void 0:e.product_line}),c.a.createElement(kn,{activeItem:e,history:t}));const Bn=Object(l.c)(M.a)`
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
`,Wn=Object(l.c)(M.a)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`;var Hn=({activeItem:e})=>{const t=Object(n.k)(),{subPanelId:a,subPanel:r}=Object(n.m)();let l;"mac"in e&&({mac:l}=e);const i=Object(o.useSelector)(Object(ma.b)(a||r)),E=Object(nt.a)((null==i?void 0:i.name)||(null==i?void 0:i.hostname)||(null==i?void 0:i.mac),15);return Object(L.f)([Object(da.fetchSession)(l,!0)],c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{padding:"15px 30px 0",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(Bn,{position:"relative",paddingBottom:25,width:"100%"},c.a.createElement(ut.c,{name:"backButton",onClick:()=>t.push("../../overview")},c.a.createElement(w.f,null)),c.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},E+" | ",null==i?void 0:i.date)),c.a.createElement(Wn,{width:"100%",paddingBottom:10,flexDirection:"column"},c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"})),c.a.createElement(V.a,{size:"body"},null==i?void 0:i.start)),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_END"})),c.a.createElement(V.a,{size:"body"},null==i?void 0:i.end)),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"})),c.a.createElement(V.a,{size:"body"},null==i?void 0:i.duration)),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"})),c.a.createElement(V.a,{size:"body"},null==i?void 0:i.ip)),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"})),c.a.createElement(V.a,{size:"body"},null==i?void 0:i.mac)),(null==i?void 0:i.is_wired)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"CLIENT_HEADER_PORT"})),c.a.createElement(V.a,{size:"body"},null==i?void 0:i.port)),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:(null==i?void 0:i.is_wired)?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"})),c.a.createElement(V.a,null,(null==i?void 0:i.experience)>=0?c.a.createElement(V.a,{size:"body"},c.a.createElement("span",{style:{color:we.a["color-"+((null==i?void 0:i.is_wired)?Object(Me.b)(null==i?void 0:i.experience):Object(Me.c)(null==i?void 0:i.experience))]}},null==i?void 0:i.experience,"%")):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"})))))),!!(null==i?void 0:i.mac)&&c.a.createElement(xa,{mac:null==i?void 0:i.mac,key:null==i?void 0:i.mac})))},Gn=a(2936),Yn=a(167),$n=a(229),Kn=a(669),Xn=a(1965),qn=a(1909),Zn=a(761),Jn=a(62),Qn=a(208),er=a(663),tr=a(1937);const ar=(e,t,a,n)=>{const r=e.find(e=>e.mac===a),c=Object(Y.c)(r),l=Object(Y.a)(r);if(c&&c!==a)return c;if(l)return l;const i=t.find(e=>"mac"in e&&e.mac===a),o=Object(I.getClientDisplayName)(i);return o&&o!==a?o:n.formatMessage({id:"DEVICE_UNKNOWN_HOSTNAME"})},nr=Object(l.c)("div")`
  > div:first-child {
    width: 80%;
    > div:first-child {
      width: 80%;
    }
  }
`,rr=(e,t,a,n)=>Array.from(e,(e,r)=>({id:"port_security_mac_address-"+r,port_security_mac_address:e,port_security_mac_address_name:ar(t,a,e,n)})),cr=[{id:"port_security_mac_address",label:c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_MAC_ADDRESS_LABEL"}),sortable:!1},{id:"port_security_mac_address_name",label:c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_NAME_LABEL"}),sortable:!1}],lr={port_security_mac_addresses:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"};var ir=Object(F.f)(({formValues:e,intl:t,setFieldValue:a})=>{const{port_security_mac_address:n}=e,l=Object(o.useSelector)(O.selectDevicesData),i=Object(o.useSelector)(I.selectCombinedClientsData),E=Object(r.useMemo)(()=>({editActive:!1,port_security_mac_address:rr(n,l,i,t)}),[n,l,i,t]),s=Object(r.useMemo)(()=>rr(n,l,i,t),[n,l,i,t]),m=Object(r.useMemo)(()=>[{name:"new_port_security_mac_address",label:"DEVICE_PORT_FORM_ENTER_MAC_ID",placeholder:"",type:"text"}],[]),d=Object(r.useCallback)(e=>{a("port_security_mac_address",e)},[a]),_=Object(r.useCallback)(({port_security_mac_address:e,new_port_security_mac_address:t})=>{t&&d([...e.map(({port_security_mac_address:e})=>e),t])},[d]),u=Object(r.useCallback)(({port_security_mac_address:t})=>{d(e.port_security_mac_address.filter(e=>e!==t))},[e,d]),b=Object(r.useCallback)(e=>{d([...e.map(({port_security_mac_address:e})=>e)])},[d]);return c.a.createElement(nr,null,c.a.createElement(tr.d,{fieldName:"port_security_mac_address",items:s,columns:cr,fieldLabels:lr,newFields:m,onAddItem:_,onRemoveItem:u,onEditSubmit:b,initialValues:E,useValuesInSchema:!0,validationSchema:e=>(e=>{const t=()=>gn.a.string().label("DEVICE_PORT_FORM_MAC_ADDRESS_LABEL").matches(Rn.p,c.a.createElement(F.c,{id:"COMMON_VALIDATION_VALID_MAC"})),a={arrayFieldName:"port_security_mac_address",stringFieldName:"port_security_mac_address",errorMessage:c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_MAC_MUST_BE_UNIQUE"})};return gn.a.object().shape({editActive:gn.a.bool(),new_port_security_mac_address:t().isMacUnique({formValues:null,...a}),port_security_mac_address:gn.a.array().of(gn.a.object().shape({port_security_mac_address:t().isMacUnique({formValues:e,...a}).required()}))})})(e),addButtonText:"DEVICE_PORT_FORM_MAC_FILTER_BUTTON"}))}),or=a(1915),Er=a(2910),sr=a(285),mr=a(1179),dr=a(667),_r=a(253),ur=a(59),br=a(795);const pr=Object(l.c)("div")`
  display: table;
`,Or=Object(l.c)("div")`
  display: table-row;

  > * {
    font-size: 11px;
    display: table-cell;
    white-space: nowrap;

    &:last-of-type {
      padding-left: 10px;
    }
  }
`;var Ir=Object(F.f)((function({deviceData:e,intl:t,portData:a,portData:{ifname:n,port_idx:r,portName:l,tx_bytes:i,rx_bytes:E,poe_mode:s,sfp_txfault:m,sfp_rxfault:d,sfp_vendor:_,sfp_serial:u,sfp_part:b,sfp_rev:p,sfp_compliance:O,sfp_voltage:I,sfp_current:g,sfp_txpower:R,sfp_rxpower:v,sfp_temperature:C}}){const h=Object(o.useSelector)($n.selectPortConf),T=Object(ur.qb)(a,t,h),f=Object(o.useSelector)(br.s),D=Object(ur.ib)(a,e,f),P=Object(ur.ub)(a,e,f),y=a&&["SFP","SFP+"].includes(a.media)&&a.sfp_found,S=Object(ur.tb)(a,t),A=Object(ur.pb)(a),j=[];return y&&(m&&j.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX_FAULT"})),d&&j.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX_FAULT"}))),c.a.createElement(pr,null,(r||n)&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PORT"})),c.a.createElement(V.a,null,Object(ur.lb)(a))),l&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_NAME"})),c.a.createElement(V.a,null,l)),(S||j.length>0)&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_STATUS"})),c.a.createElement(V.a,null,S,j.length>0&&r%2==0&&c.a.createElement(V.a,{color:"danger"},j.join(", ")))),i>0&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX"})),c.a.createElement(me.a,{type:"bytes",input:i})),E>0&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX"})),c.a.createElement(me.a,{type:"bytes",input:E})),A&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"COMMON_DEVICE_POE_MODE_POE"})),c.a.createElement(V.a,null,A)),T&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PROFILE"})),c.a.createElement(V.a,null,T)),D&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_DOWNLINK"})),c.a.createElement(V.a,null,Object(Y.c)(D))),P&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_UPLINK"})),c.a.createElement(V.a,null,Object(Y.c)(P))),y&&c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VENDOR"})),c.a.createElement(V.a,null,_)),u&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_SERIAL"})),c.a.createElement(V.a,null,u)),b&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PART_NUMBER"})),c.a.createElement(V.a,null,b)),p&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_REV"})),c.a.createElement(V.a,null,p)),O&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_COMPLIANCE"})),c.a.createElement(V.a,null,O)),I&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VOLTAGE"})),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_VOLTAGE",values:{voltage:I}}))),g&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_CURRENT"})),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_CURRENT",values:{current:g}}))),C&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:C}}))),R&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_OUTPUT_POWER"})),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:R}}))),v&&c.a.createElement(Or,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_INPUT_POWER"})),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:v}})))))}));const gr={large:{threshold:12,size:"20px",spacing:"8px",tooltipOffset:"15px"},medium:{threshold:15,size:"16px",spacing:"6px",tooltipOffset:"17px"},small:{threshold:20,size:"12px",spacing:"4px",tooltipOffset:"19px"},xsmall:{threshold:28,size:"10px",spacing:"2px",tooltipOffset:"20px"}};var Rr=a(337);const vr=l.e`
  0% { opacity: 0; }
  40% { opacity: 1; }
  100% { opacity: 0; }
`,Cr=l.a`
  &:nth-child(1) {
    animation: ${vr} 2s 0s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${vr} 2s -1s infinite ease-in-out;
  }
`,hr=l.e`
  0%   { opacity: 0; }
  20%  { opacity: 1; }
  33%  { opacity: 1; }
  53%  { opacity: 0; }
  100% { opacity: 0; }
`,Tr=l.a`
  &:nth-child(1) {
    animation: ${hr} 3s -1s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${hr} 3s -2s infinite ease-in-out;
  }

  &:nth-child(3) {
    animation: ${hr} 3s 0s infinite ease-in-out;
  }
`,fr=Object(l.c)("div",{shouldForwardProp:e=>"iconsLength"!==e})`
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
  ${({iconsLength:e})=>2===e&&`\n  &:nth-child(1) {\n    animation: ${vr} 2s 0s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${vr} 2s -1s infinite ease-in-out;\n  }`}

  ${({iconsLength:e})=>3===e&&`&:nth-child(1) {\n    animation: ${hr} 3s -1s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${hr} 3s -2s infinite ease-in-out;\n  }\n\n  &:nth-child(3) {\n    animation: ${hr} 3s 0s infinite ease-in-out;\n  }`}
`;function Dr({icon:e}){const t={[Rr.a.DISCARDING]:w.v,[Rr.a.WAN]:w.T,[Rr.a.MIRROR]:w.K,[Rr.a.NETWORK]:w.uc,[Rr.a.POE]:w.Bb,[Rr.a.POE_PLUS]:w.xb,[Rr.a.POE_PLUS_PLUS]:w.zb,[Rr.a.POWER_DELIVERING]:w.Bb,[Rr.a.SHIELD]:w.Lb,[Rr.a.UPLINK]:w.k,[Rr.a.WAN_POE]:w.lc,[Rr.a.WARNING]:w.a}[e];return t?c.a.createElement(t,{size:"original"}):null}var Pr=({icons:e,...t})=>{let a="";return 2===e.length?a=Cr:3===e.length&&(a=Tr),c.a.createElement(c.a.Fragment,null,e.map(n=>n&&c.a.createElement(fr,Object.assign({},t,{className:a,iconsLength:e.length,key:n}),c.a.createElement(Dr,{icon:n}))))};const yr=Object(l.c)(pn.a,{shouldForwardProp:e=>!["color","portSize","portSizeOverride","isDisabled"].includes(e)})`
  height: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||gr.large.size};
  width: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||gr.large.size};
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
    margin-left: ${({portSize:e})=>(null==e?void 0:e.spacing)||gr.large.spacing};
  }
`,Sr=Object(l.c)("div",{shouldForwardProp:e=>!["portSize","portSizeOverride"].includes(e)})`
  width: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||gr.large.size};
  &:not(:first-child) {
    margin-left: ${({portSize:e})=>(null==e?void 0:e.spacing)||gr.large.spacing};
  }
`,Ar=({tooltipOffset:e}=gr.large)=>l.a`
  margin-left: ${e};
`;var jr=({cellData:e,deviceData:t,key:a,portSize:r,portSizeOverride:l,...i})=>{const E=Object(ur.kc)(Object(o.useSelector)(O.selectDevicesData),t),s=Object(ur.kb)(e,t,Object(o.useSelector)(un.selectNetworkGroups),E),m=Object(ur.hb)(t,e),d=e||{},_=Object(ur.ie)(t)||Object(ur.be)(t),u=Object(n.k)(),{path:b}=Object(n.n)(),{site:p,page:I,id:g,panel:R}=Object(n.m)();if(!e)return Object(O.isUdmBase)(t)||Object(O.isUdr)(t)?null:c.a.createElement(Sr,{key:a,portSize:r,portSizeOverride:l});const v=e=>Object(n.i)(b,{site:p,page:I,id:g,panel:R,subPanel:"ports",subPanelId:e});return c.a.createElement(yr,Object.assign({color:m,portSize:r,portSizeOverride:l,isDisabled:!e.enable,message:c.a.createElement(Ir,{deviceData:t,portData:d}),position:"bottomRight",tooltipClassName:Ar(r),onClick:e=>{var t,a;null===(t=null==e?void 0:e.preventDefault)||void 0===t||t.call(e),null===(a=null==e?void 0:e.stopPropagation)||void 0===a||a.call(e);const n=Object(ur.lb)(d),r="wan"===(null==d?void 0:d.network_name)||"wan2"===(null==d?void 0:d.network_name),c=null==d?void 0:d.dns;return r?u.push(v(oe.WAN)):c?u.push(v(oe.ALL)):_?u.push(v(null==d?void 0:d.ifname)):u.push(v(n))},portal:!0,key:a},i),c.a.createElement(Pr,{icons:s}))};const Nr=Object(l.c)(V.a)`
  padding-left: 10px;
  color: inherit;
  font-size: inherit;
`,Lr=(e,t,a)=>{const{diagram:n,ports:r}=Object(O.getDeviceSpecs)(e),l=[Object(O.isUdm)(e),Object(O.isUsAggPro)(e),Object(O.getIsInWallAp)(e)],i=n?Object(O.determineRowLayoutsFromDiagramConfig)(n,e):Object(O.determineRowLayoutsFromPortConfig)(e);return i?i.flat().reduce((n,i)=>{var o,E;if(!i)return n;const s=Object(O.getCurrentPortData)(i.portNumber,e);if(Object(mr.a)(s))return n;const m=c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(jr,Object.assign({cellData:s,deviceData:e,style:{minWidth:20}},a)),c.a.createElement(Nr,{truncate:!0},((e,t)=>{const a=Object(dr.a)(t,O.switchAnomaliesMap),n=a.length;return n>1?c.a.createElement(F.c,{id:"COMMON_ERRORS",values:{errorCount:n}}):n?c.a.createElement(F.c,{id:a[0]+"_PROBLEM"}):!Object(O.isPoeSupported)(e)&&!t.poe_caps||Object(O.getIsUsl8Mp)(e)?t.up?Object(Kt.c)(1e3*(null==t?void 0:t.speed)*1e3/8,"bitrate")||c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_CONNECTED"}):t.enable?c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"}):c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISABLED"}):Object(O.getPortPoeModeText)(t)})(e,s))),d=Object(_r.h)(s.ifname,e,t),_=r[s.ifname],u={...s,id:(null===(o=s.port_idx)||void 0===o?void 0:o.toString())||s.ifname,isWanPort:null==_?void 0:_.startsWith("WAN"),defaultNetworkGroupLabel:Object(O.getPortGroupLabel)(e,s),networkGroup:null==d?void 0:d.id,portStatus:m,disabled:s.masked};return l.every(e=>!e)&&(u.macFilters=null===(E=s.port_security_mac_address)||void 0===E?void 0:E.length),n.push(u),n},[]).sort(({port_idx:e},{port_idx:t})=>e-t):[]},xr=Object(l.c)(M.a)`
  margin-bottom: ${({marginBottom:e})=>e||16}px;
  justify-content: space-between;
  :last-child {
    margin-bottom: 0;
  }
`,Vr=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  display: flex;
  flex: 1;
  margin-right: 12px;
`,wr=Object(l.c)(V.a)`
  font-size: 11px;
`,Fr=Object(l.c)(w.W)`
  margin: 0 6px;
`,Mr=Object(l.c)(w.a)`
  margin-right: 9px;
  color: ${({theme:e})=>e.motifPalette.warning};
`,Ur=l.a`
  margin-left: 11px;
`,kr=Object(l.c)("div")`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,zr=Object(l.c)("div")`
  > div:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,Br=Object(l.c)(M.a)`
  width: 100%;
`,Wr=Object(l.c)(Jn.Field)`
  width: unset !important;
  margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  input {
    width: 100%;
  }
`,Hr=Object(l.c)(Jn.Field)`
  width: 20% !important;
  > div > div {
    width: 100% !important;
  }
`,Gr=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,Yr=Object(l.c)(V.a)`
  margin-bottom: 5px;
`,$r=Object(l.c)("div")`
  padding-bottom: 10px;
  border-bottom: 1px solid ${we.a["white-6"]};

  span {
    margin-left: 5px;
  }
`,Kr=Object(l.c)(M.a)`
  > * {
    width: 100%;
  }
`;var Xr=Object(F.f)((function({activeItem:e,portData:t,formValues:a,setFieldValue:n,setFieldTouched:l,initialValues:i,intl:o}){var E,s,m;const{port_table:d=[]}=e,{lldpmed_enabled:_,stormctrl_enabled:u,op_mode:b,egress_rate_limit_kbps_enabled:p,speed:I}=a,{op_mode:g,port_idx:R,port_poe:v}=t,C=e.dot1x_portctrl_enabled,h=1===R,T=Object(O.hasSwitch)(e)||(Object(O.isInWallHd)(e)||Object(O.isUaiw6)(e))&&(h||C),f=Object(O.isInWallHd)(e),D=Object(O.getIsInWallAp)(e),P=Object(O.isUdmBase)(e),y=Object(O.isUdr)(e),S=Object(O.isSwitch)(e),A=Object(Yn.r)(e),j=Object(Yn.q)(e),N=Object(Yn.p)(e),L=Object(Yn.u)(e),x=Object(O.getPortPoeAvailability)(t),V=x.isPoePassthroughSupported&&!x.isPoeOffSupported,U="switch"===g&&(v||Object(O.isUaiw6)(e))&&T,k=Object(r.useMemo)(()=>{var e;try{return null===(e=JSON.parse(I))||void 0===e?void 0:e.speed}catch(t){return null}},[I]),z=Object(r.useMemo)(()=>Object(sr.getSupportedSpeeds)(t).map(({autoneg:e,speed:t=0,full_duplex:a=!1})=>{const{value:n,unit:r}=Object(Kt.d)(1e6*t/8,"bitrate"),c=`${Object(or.a)(n,1)}${r}`;return{full_duplex:a,label:e?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!e&&{speed:c}}}),[t]),B=Object(r.useMemo)(()=>{if(e){const t="mirror"===g;let a=Object(dt.a)(e,"switch_caps.max_mirror_sessions",void 0);if(a||0===a||(a=1),t||e.port_table.filter(e=>"mirror"===e.op_mode).length<a)return!0}return!1},[e,g]),{isAggregateAllowed:W,aggregatePortOptions:H}=Object(r.useMemo)(()=>{const a=Object(O.getPortNumbers)(e),n=Object.keys(a).reduce((e,t)=>a[t].length+e,0)||0,{port_idx:r}=t;let c=Object(dt.a)(e,"switch_caps.max_aggregate_sessions",void 0);c||0===c||(c=4);const l=((e,t)=>t.map(e=>e.port_idx).filter((t,a)=>e+a+1===t))(r,((e,t,a)=>{const n=e.findIndex(e=>e.port_idx===t.port_idx),r=-1!==n?e.slice(n+1,n+a):[],c=(null==t?void 0:t.speed_caps)&~O.SPEED_CAPS.PORTSPEED_AUTO_NEG;return r.filter(({speed_caps:e,op_mode:t})=>e&c&&"switch"===t)})(d,t,c)),i=l[0],o=l[l.length-1]||i;return{isAggregateAllowed:i<=o&&o<=n,aggregatePortOptions:l.map(e=>({label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN",value:e,values:{port:e}}))}},[e,t,d]),G=Object(r.useMemo)(()=>{const{isPoeOffSupported:e,isPoePassthroughSupported:t,isPoePassive24Supported:a,isPoeAutoSupported:n,isPoePlusPlusSupported:r,isPoePlusSupported:c}=x,l=[];if(e&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_OFF"}),value:"off"}),t&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSTHROUGH"}),value:"passthrough"}),!t&&a&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSIVE"}),value:"pasv24"}),!t&&n){const e=[];r?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS_PLUS"})):c?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS"})):e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE"})),e.push(o.formatMessage({id:"DEVICE_PORT_FORM_AUTO_DETECT"})),l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_AUTO"}),value:"auto"})}return l},[o,x]);return c.a.createElement(c.a.Fragment,null,U&&c.a.createElement(kr,{marginBottom:24},V?c.a.createElement(Kr,{alignItems:"center",flexDirection:"column"},c.a.createElement(Yr,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_POE_MODE_LABEL"})),c.a.createElement($r,null,c.a.createElement(w.W,{isActive:!0})," ",c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_NOTICE_POE_PASSTHROUGH_ONLY"}))):c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_POE_MODE_LABEL",name:"poe_mode",type:"dropdown",full:!0,translateLabel:!0,options:G})),!P&&!D&&c.a.createElement(kr,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_OPERATIONS_LABEL",name:"op_mode",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:[{label:"DEVICE_PORT_FORM_SWITCHING_LABEL",value:"switch"},...B?[{label:"DEVICE_PORT_FORM_MIRRORING_LABEL",value:"mirror"}]:[],...W?[{label:"DEVICE_PORT_FORM_AGGREGATE_LABEL",value:"aggregate"}]:[]]})),"mirror"===b&&c.a.createElement(kr,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_MIRRORING_PORT",full:!0,type:"number",name:"mirror_port_idx"})),"aggregate"===b&&c.a.createElement(c.a.Fragment,null,c.a.createElement(xr,{marginBottom:24,alignItems:"baseline"},c.a.createElement(Gr,null,c.a.createElement(Jn.Field,{full:!0,name:"port_idx",label:"DEVICE_PORT_FORM_AGGREGATE_PORTS_LABEL",value:o.formatMessage({id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN"},{port:R}),disabled:!0})),c.a.createElement("div",null,"-"),c.a.createElement(Gr,null,c.a.createElement(Jn.Field,{full:!0,name:"aggregatePortStop",type:"dropdown",options:H,translateOptions:!0,validated:!0}))),c.a.createElement(xr,{marginBottom:24,alignItems:"center"},c.a.createElement(Mr,{height:17,width:17}),(null===(E=e.downlink_table)||void 0===E?void 0:E.length)?c.a.createElement(wr,null,c.a.createElement(F.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_UPLINK"})):c.a.createElement(wr,null,c.a.createElement(F.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_DOWNLINK"})))),e.dot1x_portctrl_enabled&&["mirror","aggregate"].includes(b)&&c.a.createElement(kr,{marginBottom:24}),!D&&t.media&&c.a.createElement(kr,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_LINK_SPEED_LABEL",name:"speed",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:z})),S&&k===Kn.c.PORTSPEED_FULL_25G.speed&&c.a.createElement(kr,{marginBottom:24},c.a.createElement(Er.a,{text:o.formatMessage({id:"DEVICE_PORT_FORM_LINK_SPEED_SFP28_ALERT"})})),A&&"aggregate"!==b&&!f&&c.a.createElement(xr,null,c.a.createElement(Vr,null,c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL"}),c.a.createElement(pn.a,{portal:!0,tooltipClassName:Ur,position:"topRight",width:230,message:c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_NOTIFICATION"})},c.a.createElement(Fr,{isActive:!0}))),c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL",name:"isolation",type:"checkbox"})),"switch"===b&&!D&&!P&&!y&&c.a.createElement(c.a.Fragment,null,c.a.createElement(xr,{marginBottom:16},c.a.createElement(Vr,null,c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL"})),c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL",name:"stormctrl_enabled",afterChange:e=>{n("stormctrl_enabled",e),e||["stormctrl_ucast_rate","stormctrl_mcast_rate","stormctrl_bcast_rate"].forEach(e=>{n(e,i[e]),l(e,!1)})},type:"checkbox"})),u&&c.a.createElement(zr,null,c.a.createElement(kr,{marginBottom:10},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_UNICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",min:Kn.e.MIN,max:Kn.e.MAX,name:"stormctrl_ucast_rate"})),c.a.createElement(kr,{marginBottom:10},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_MULTICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_mcast_rate",min:Kn.e.MIN,max:Kn.e.MAX})),c.a.createElement(kr,{marginBottom:20},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_BROADCAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_bcast_rate",min:Kn.e.MIN,max:Kn.e.MAX})))),j&&"switch"===b&&!f&&c.a.createElement(c.a.Fragment,null,c.a.createElement(xr,null,c.a.createElement(Vr,null,c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_LLDP_MED_LABEL"})),c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_LLDP_MED_LABEL",name:"lldpmed_enabled",afterChange:e=>{n("lldpmed_enabled",e),e||n("lldpmed_notify_enabled",i.lldpmed_notify_enabled)},type:"checkbox"})),_&&c.a.createElement(xr,null,c.a.createElement(Vr,null,c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"})),c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_TOPOLOGY_LABEL",name:"lldpmed_notify_enabled",type:"checkbox"}))),L&&"switch"===b&&!f&&c.a.createElement(xr,null,c.a.createElement(Vr,null,c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_STP_LABEL"}),c.a.createElement(pn.a,{portal:!0,tooltipClassName:Ur,position:"topRight",width:230,message:c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_STP_TOOLTIP"})},c.a.createElement(Fr,{isActive:!0}))),c.a.createElement(Jn.Field,{name:"stp_port_mode",type:"checkbox"})),N&&"switch"===b&&!f&&c.a.createElement(c.a.Fragment,null,c.a.createElement(xr,null,c.a.createElement(Vr,null,c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_EGRESS_LABEL"})),c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_EGRESS_LABEL",name:"egress_rate_limit_kbps_enabled",afterChange:e=>{n("egress_rate_limit_kbps_enabled",e),e||(n("egress_rate_limit_kbps",i.egress_rate_limit_kbps),l("egress_rate_limit_kbps",!1))},type:"checkbox"})),p&&c.a.createElement(M.a,{flexDirection:"row"},c.a.createElement(Br,{flexDirection:"column"},c.a.createElement(Wr,{full:!0,label:"DEVICE_PORT_FORM_RATE_LIMIT_LABEL",type:"number",min:null===(s=Kn.b[a.egress_rate_limit_unit])||void 0===s?void 0:s.MIN,max:null===(m=Kn.b[a.egress_rate_limit_unit])||void 0===m?void 0:m.MAX,name:"egress_rate_limit_kbps"})),c.a.createElement(Hr,{type:"dropdown",options:Xn.a.slice(0,2),name:"egress_rate_limit_unit",translateOptions:!0}))))}));const qr=Object(l.c)("div")`
  padding: 0 0 48px 0;

  li {
    &[aria-expanded='true'] {
      border-bottom: none;
    }
    > div {
      margin-bottom: 0;
    }
  }
`,Zr=Object(l.c)("div")`
  &:not(:first-child) {
    border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
    padding-top 8px;
    margin-top: 16px;
  }
`,Jr=Object(l.c)(Pe.g)`
  &:not(:last-child) {
    padding: 8px 0;
  }
`,Qr=Object(l.c)(w.s)`
  color: ${({theme:e})=>e.motifPalette.success};
  margin-right: 9px;
  width: 17px;
  height: 17px;
`,ec=Object(l.c)(w.d)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: 9px;
  width: 18px;
  height: 18px;
`,tc=({anomalies:e})=>e.map(e=>c.a.createElement(Zr,{key:e},c.a.createElement(Jr,{alignItems:"center"},c.a.createElement(ec,null),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:e+"_PROBLEM"}))),c.a.createElement(Jr,{alignItems:"center"},c.a.createElement(Qr,null),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:e+"_SOLUTION"})))));function ac({port:e}){const t=Object(dr.a)(e,O.switchAnomaliesMap),a=t.length;return a?c.a.createElement(qr,null,a>1?c.a.createElement(Ee.a,{variant:"tertiary",items:[{id:"anomalies",openByDefault:!0,label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_ERRORS",values:{errorCount:a}})),renderContent:()=>c.a.createElement(tc,{anomalies:t})}]}):c.a.createElement(tc,{anomalies:t})):null}const nc=Object(l.c)(M.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,rc=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,cc=Object(l.c)(Ee.a)`
  > li {
    :last-child {
      border-bottom: none;

      > div {
        margin-bottom: 0;
      }
    }
  }
`,lc=Object(l.c)(M.a)`
  width: 100%;
  padding: 30px;
`,ic=Object(l.c)(M.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,oc=Object(l.c)("li")`
  ${({isGroup:e})=>e?"\n    pointer-events: none;\n    opacity: 0.4;\n  ":"margin-left: 16px;"}
`,Ec=Object(l.c)(M.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`,sc=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  span {
    margin-left: 5px !important;
    svg {
      margin-right: 0 !important;
    }
  }
`;const mc=()=>{const e=c.a.createElement(F.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Kn.e.MIN,max:Kn.e.MAX}});return Qa.a.number().min(Kn.e.MIN,e).max(Kn.e.MAX,e)},dc=Object(Ja.g)({mapPropsToValues:({currentPort:e})=>{const{autoneg:t,port_idx:a,poe_mode:n,portconf_id:r,stormctrl_bcast_enabled:c=!1,stormctrl_bcast_rate:l="",stormctrl_mcast_enabled:i=!1,stormctrl_mcast_rate:o="",stormctrl_ucast_enabled:E=!1,stormctrl_ucast_rate:s="",isolation:m=!1,lldpmed_enabled:d,lldpmed_notify_enabled:_=!1,speed:u,full_duplex:b,op_mode:p,mirror_port_idx:O,port_security_mac_address:I=[],egress_rate_limit_kbps_enabled:g=!1,egress_rate_limit_kbps:R="",stp_port_mode:v=!0,nameOverride:C="",aggregate_num_ports:h=null}=e;return{name:C,speed:t?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:u,full_duplex:b}),lldpmed_enabled:!1!==d,stormctrl_enabled:c||i||E,aggregatePortStop:h?a+h-1:null,port_idx:a,poe_mode:n,portconf_id:r,stormctrl_bcast_enabled:c,stormctrl_bcast_rate:l,stormctrl_mcast_enabled:i,stormctrl_mcast_rate:o,stormctrl_ucast_enabled:E,stormctrl_ucast_rate:s,isolation:m,lldpmed_notify_enabled:_,full_duplex:b,mirror_port_idx:O,op_mode:p,port_security_mac_address:I,egress_rate_limit_kbps:R,egress_rate_limit_unit:Xn.a[0].value,egress_rate_limit_kbps_enabled:g,stp_port_mode:v}},validationSchema:({activeItem:e})=>{const t=Object(O.getPortNumbers)(e),a=Math.min(t.standard[0]||1,t.sfp[0]||1,t.plus[0]||1),n=Math.max(t.standard[t.standard.length-1]||1,t.sfp[t.sfp.length-1]||1,t.plus[t.plus.length-1]||1),r=c.a.createElement(F.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:a,max:n}}),l=(e=!1)=>c.a.createElement(F.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Kn.b[Xn.a[e?1:0].value].MIN,max:Kn.b[Xn.a[e?1:0].value].MAX}});return Qa.a.object().shape({port_idx:Qa.a.number(),name:Qa.a.string(),poe_mode:Qa.a.string(),portconf_id:Qa.a.string(),stormctrl_enabled:Qa.a.boolean(),stormctrl_bcast_enabled:Qa.a.boolean(),stormctrl_bcast_rate:mc(),stormctrl_mcast_enabled:Qa.a.boolean(),stormctrl_mcast_rate:mc(),stormctrl_ucast_enabled:Qa.a.boolean(),stormctrl_ucast_rate:mc(),isolation:Qa.a.boolean(),full_duplex:Qa.a.boolean(),lldpmed_enabled:Qa.a.boolean(),lldpmed_notify_enabled:Qa.a.boolean(),op_mode:Qa.a.string(),mirror_port_idx:Qa.a.number().when("op_mode",{is:"mirror",then:Qa.a.number().required(r).min(a,r).max(n,r)}),aggregatePortStop:Qa.a.number().nullable().when("op_mode",{is:"aggregate",then:Qa.a.number().required().label("DEVICE_PORT_FORM_AGGREGATE_PORT_LABEL")}),port_security_mac_address:Qa.a.array().of(Qa.a.string()),egress_rate_limit_kbps_enabled:Qa.a.boolean(),stp_port_mode:Qa.a.boolean(),egress_rate_limit_kbps:Qa.a.number().when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Xn.a[0].value&&t,then:Qa.a.number().required(l()).min(Kn.b.k.MIN,l()).max(Kn.b.k.MAX,l()).integer()}).when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Xn.a[1].value&&t,then:Qa.a.number().required(l(!0)).min(Kn.b.M.MIN,l(!0)).max(Kn.b.M.MAX,l(!0))})})},handleSubmit:(e,{props:{updateDeviceWithIdEndpoint:t,activeItem:{_id:a,port_overrides:n,mac:r},activeItem:c,currentPort:l,intl:i,history:o}})=>{const E=i.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),s=Object(O.getIsPortConfDisabled)(c,l),{stormctrl_enabled:m,stormctrl_bcast_rate:d,stormctrl_mcast_rate:_,lldpmed_enabled:u,lldpmed_notify_enabled:b,stormctrl_ucast_rate:p,egress_rate_limit_kbps:I,egress_rate_limit_kbps_enabled:g,op_mode:R,mirror_port_idx:v,stp_port_mode:C,aggregatePortStop:h}=e,{speed:T,full_duplex:f}=JSON.parse(e.speed);let D=null;g&&(D=e.egress_rate_limit_unit===Xn.a[1].value?1e3*I:I),delete e.egress_rate_limit_unit;const P={...e,speed:T,full_duplex:f,stp_port_mode:C,autoneg:!T,lldpmed_notify_enabled:!!u&&b,stormctrl_bcast_enabled:!!m&&!!d,stormctrl_bcast_rate:m?d:null,stormctrl_mcast_enabled:!!m&&!!_,stormctrl_mcast_rate:m?_:null,stormctrl_ucast_enabled:!!m&&!!p,stormctrl_ucast_rate:m?p:null,egress_rate_limit_kbps:D,mirror_port_idx:"mirror"===R?v.toString():null,aggregate_num_ports:"aggregate"===R?h-l.port_idx+1:null},y=Object(Gn.a)(P,(e,t)=>"portconf_id"===t?s:"stormctrl_enabled"===t||("op_mode"===t&&"switch"===e||("lldpmed_enabled"===t?e:("full_duplex"!==t||!P.speed)&&("autoneg"!==t&&("poe_mode"===t&&"mirror"===P.op_mode||("stp_port_mode"===t?!("switch"===P.op_mode&&Object(Yn.u)(c)&&!Object(O.isInWallHd)(c)):"aggregatePortStop"===t||!e))))));let S=[y];n&&(S=[y,...n.filter(e=>e.port_idx!==y.port_idx)]),t({port_overrides:S},a,r,{successToast:{icon:ca.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:E}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{o.goBack()})}}),_c={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var uc=Object(ht.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a,subPanelId:n}})=>({portConfig:Object($n.selectPortConf)(e),currentPort:Object(O.getCurrentPortData)(n?+n:+a,t)}),_c),F.f,dc)((function({portConfig:e,activeItem:t,history:a,currentPort:l,submitForm:i,resetForm:E,setFieldValue:s,setFieldTouched:d,values:_,values:{op_mode:u,portconf_id:b},intl:p,dirty:I,initialValues:g}){const R=Object(O.getIsInWallAp)(t),v=Object(O.getIsSwitchMini)(t),C=Object(O.getIsUapUswHybrid)(t),h=Object(Yn.s)(t),T=Object(O.getHasSwitchFullFeatures)(t,l),f=Object(O.getIsPortConfDisabled)(t,l),D=Object(o.useDispatch)(),P=Object(o.useSelector)(Ie.a),y=Object(o.useSelector)(m.j),S=Object(n.i)(y,{site:P}),A="switch"===u&&h&&!R&&!Object(O.isUdm)(t),j=R?"../device":"../services",N=Object(r.useMemo)(()=>{const t=e.map(e=>({...e,groupLabel:Object(O.getPortProfileGroup)(e)})),a=Object(qn.a)(t,"groupLabel");return Object.entries(a).reduce((e,[t,a])=>{const n=a.filter(e=>C?e.attr_hidden_id!==O.SWITCH_PROFILE.ALL_ID:!v||"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"!==e.groupLabel).map(({name:e,_id:t})=>({label:e,value:t}));return"undefined"===t||v&&"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"===t?(e.push(...n),e):(e.push({groupLabel:p.formatMessage({id:t}),items:n}),e)},[])},[p,e,C]),L=Object(r.useMemo)(()=>Object(Zn.a)(N.map(({groupLabel:e,items:t})=>[{isGroup:!0,label:e,value:e},...t])),[N]),x=Object(r.useMemo)(()=>c.a.createElement(Jn.Field,{label:T?"DEVICE_PORT_FORM_PORT_PROFILE_LABEL":"DEVICE_PORT_FORM_PORT_NETWORKS_VLAN_LABEL",name:"portconf_id",type:"dropdown",full:!0,translateLabel:!0,options:L,renderOption:({id:e,onClick:t,className:a,isSelected:n,option:{isGroup:r=!1,label:l}})=>c.a.createElement(oc,{key:`${e}-${l}`,id:e,onClick:t,className:a,"aria-selected":n,role:"option",isGroup:r},l),disabled:f}),[T,f,L]),U=()=>{E(),a.goBack()};return c.a.createElement(c.a.Fragment,null,c.a.createElement(lc,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(nc,{alignItems:"center"},c.a.createElement(w.f,{onClick:U,style:{cursor:"pointer"}}),c.a.createElement(rc,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER",values:{port:l.portIdx}}))),c.a.createElement(ac,{port:l}),c.a.createElement(ic,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),c.a.createElement(ic,{marginBottom:24},x),c.a.createElement(Ec,{alignSelf:"flex-end"},c.a.createElement(sc,{size:"small",type:"button",variant:"inline",onClick:()=>{a.push(`${S}${_e.a.ucoreAdvancedSettings}`)}},c.a.createElement(w.q,{height:20,width:20}),c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_MANAGE_PORT_PROFILES"}))),!!l.portconf_id&&b!==l.portconf_id&&c.a.createElement(ic,{marginBottom:24},c.a.createElement(M.a,null,c.a.createElement(w.W,{style:{color:we.a["scale-5"],marginRight:8}}),c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_NOTICE_OVERRIDE_RESET"}))),f&&c.a.createElement(ic,{marginBottom:24},c.a.createElement(M.a,null,c.a.createElement(w.W,{isActive:!0,style:{marginRight:8}}),c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_NOTICE_PORT_CONF_DISABLED"})),c.a.createElement(Qn.a,{name:"configureLink",variant:"link",size:"small",onClick:()=>a.push(j),style:{marginTop:5}},c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_BUTTON_PORT_CONF_CONFIGURE"}))),l.poe_enable&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ic,{flexDirection:"column",marginBottom:12},c.a.createElement(V.a,{weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_PORT_MANUAL_POWER_CYCLE"})),c.a.createElement(V.a,{color:"tertiary"},c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_PORT_MANUAL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(Ec,{alignSelf:"flex-end",marginBottom:24},c.a.createElement(sc,{size:"small",variant:"inline",onClick:()=>{D(Object(er.a)({message:"DEVICE_ACTIONS_SWITCH_PORT_POWER_CONFIRM_MESSAGE",messageValues:{portName:c.a.createElement("strong",null,l.portName),deviceName:t.name},title:"DEVICE_ACTIONS_SWITCH_PORT_POWER_CONFIRM_TITLE",useFormattedMessage:!0,onConfirm:()=>{D(Object(O.powerCyclePort)(t,l.port_idx)),D(Object(Ut.e)())}}))},Icon:c.a.createElement(w.Ab,null)},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_PORT_POWER_CYCLE"})))),!Object(O.isUdmBase)(t)&&c.a.createElement(cc,{variant:"secondary",multiOpen:!0,items:[...A?[{id:"macFilter",label:c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_MAC_FILTER_LABEL"}),renderContent:()=>c.a.createElement(ir,{setFieldValue:s,formValues:_})}]:[],...T?[{id:"advancedPortConfig",label:c.a.createElement(F.c,{id:"DEVICE_PORT_PROFILE_OVERRIDE"}),renderContent:()=>c.a.createElement(Xr,{initialValues:g,setFieldValue:s,setFieldTouched:d,portData:l,activeItem:t,formValues:_})}]:[]]})),c.a.createElement(Pn,{isDirty:I,onFormSubmit:i,onFormCancel:U,allowCancel:!0}))})),bc={op_mode:"switch",dot1x_ctrl:"force_authorized",autoneg:!0,dot1x_idle_timeout:300,full_duplex:void 0,speed:void 0,lldpmed_enabled:!0,stp_port_mode:!0,stp_bpdu_guard:!1,stp_loopback_detection:!1,stp_root_guard:!1,egress_rate_limit_kbps_enabled:!1,port_security_enabled:!1,port_security_mac_address:[],linkNegotiationOptions:{autoneg:{id:"autoneg",label:"DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO",autoneg:!0,speed:void 0,full_duplex:void 0},"10000 FDX":{id:"10000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e4,full_duplex:!0},"2500 FDX":{id:"2500 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:2500,full_duplex:!0},"1000 FDX":{id:"1000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e3,full_duplex:!0},"100 FDX":{id:"100 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:100,full_duplex:!0},"100 HDX":{id:"100 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:100,full_duplex:!1},"10 FDX":{id:"10 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:10,full_duplex:!0},"10 HDX":{id:"10 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:10,full_duplex:!1}}};const pc=Object(l.c)(M.a)`
  margin-bottom: 24px;
  &:nth-of-type(3) {
    padding-top: 24px;
  }
`,Oc=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`;var Ic=({port:e,groupOptions:t,speedOptions:a,group:n})=>c.a.createElement(pc,{justifyContent:"space-between"},c.a.createElement(Oc,null,c.a.createElement(Jn.Field,{type:"dropdown",name:`ports[${e.portIdx-1}].networkGroup`,label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",translateLabel:!0,translateLabelValues:{port:e.portIdx,networkGroup:n},options:t,validated:!0,full:!0})),a.length>0&&c.a.createElement(Oc,null,c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_GATEWAY_PORTS_SPEED_DUPLEX",name:`ports[${e.portIdx-1}].speed`,type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:a})));var gc=Object(F.f)(({activeItem:e,ports:t,intl:a})=>{const{subPanelId:l}=Object(n.m)(),i=Object(o.useSelector)(un.selectNetworkGroups),E=t=>{const{supportedValues:a=[]}=Object(_r.d)(e,t.ifname);return a.filter(e=>!!bc.linkNegotiationOptions[e]).map(e=>{const{speed:t=0,full_duplex:a=!1,autoneg:n}=bc.linkNegotiationOptions[e],{value:r,unit:c}=Object(Kt.d)(1e6*t/8,"bitrate"),l=`${r}${c}`;return{label:n?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!n&&{speed:l}}})},s=Object(r.useMemo)(()=>l===oe.WAN?[]:i.filter(({id:e})=>e.startsWith("LAN")),[l,i]),m=e=>[...[...i.filter(({id:e})=>e.startsWith("WAN")&&e!==un.NetworkHiddenId.WAN_LTE_FAILOVER),...s].filter(({id:a})=>((e,t,a)=>!t.some(({networkGroup:t})=>t===e)||e===a.networkGroup)(a,t,e)).map(({id:e})=>({value:e,label:e})),{value:O.DISABLED_PORT,label:a.formatMessage({id:"COMMON_DISABLED"})}],d=t.filter(({isWanPort:e,media:t})=>l===oe.WAN?e:!O.SFP_MEDIA_TYPES.includes(t)),_=t.filter(({media:e})=>l!==oe.WAN&&O.SFP_MEDIA_TYPES.includes(e));return c.a.createElement(c.a.Fragment,null,d.map(e=>c.a.createElement(Ic,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.defaultNetworkGroupLabel,key:e.portIdx})),_.map(e=>c.a.createElement(Ic,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.media||e.defaultNetworkGroupLabel,key:e.portIdx})))});const Rc=Object(l.c)(M.a)`
  position: relative;
  margin: -18px -30px 40px;
  padding: 12px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,vc=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
`,Cc=Object(l.c)(M.a)`
  width: 100%;
  padding: 16px 30px;
`,hc=Object(l.c)(M.a)`
  margin-bottom: 24px;
`,Tc=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.warning};
`;const fc=Object(l.c)(M.a)`
  margin-bottom: 24px;
`,Dc=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.danger};
`,Pc=Object(Ja.g)({mapPropsToValues:e=>{const{networkGroups:t,activeItem:a}=e;return{ports:Lr(a,t).map((e,t)=>{const{supportedValues:n=[]}=Object(_r.d)(a,e.ifname),r=e.autoneg?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:e.speed,full_duplex:e.full_duplex});return{...e,networkGroup:e.networkGroup||O.DISABLED_PORT,...n.length?{speed:r}:{},itemIndex:t}})}},validationSchema:({intl:e,activeItem:t,params:a})=>{const n=(null==a?void 0:a.subPanelId)===oe.ALL;return Qa.a.object().shape({ports:Qa.a.array().of(Qa.a.object().shape({networkGroup:Qa.a.string().label(e.formatMessage({id:"COMMON_WORD_INTERFACE"})).oneOf([se.a.WAN,se.a.WAN2,O.DISABLED_PORT,...Object(_r.a)(t)]).required()})).test("has-default-network-groups",c.a.createElement(fc,null,c.a.createElement(Dc,{width:19,height:19}),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:n?"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_OR_LAN_WARNING":"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_WARNING"}))),e=>e.some(e=>e.networkGroup===se.a.WAN)&&(!n||e.some(e=>e.networkGroup===un.NetworkHiddenId.LAN)))})},handleSubmit:({ports:e},{props:{networkGroups:t,updateDeviceWithIdEndpoint:a,activeItem:{_id:n,port_overrides:r=[],ethernet_table:c,mac:l},activeItem:i,history:o,intl:E}})=>{const s=Lr(i,t),m=E.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),d=[...e.map(e=>{const{speed:t,full_duplex:a}=JSON.parse(e.speed),{speed:n,full_duplex:c,...l}=(null==r?void 0:r.find(t=>t.port_idx===e.portIdx))||{};return{...l,...t?{speed:t,full_duplex:a}:{},port_idx:e.portIdx,autoneg:!t}}),...null==r?void 0:r.filter(t=>!e.some(e=>e.portIdx===t.port_idx))],_=[];s.forEach(t=>{const a=e.find(e=>e.ifname===t.ifname);if(a){if(a.networkGroup===O.DISABLED_PORT)return;_.push({ifname:a.ifname,networkgroup:a.networkGroup})}else _.push({ifname:t.ifname,networkgroup:t.networkGroup})}),a({port_overrides:d,ethernet_overrides:_},n,l,{successToast:{icon:ca.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:m}},mergeAndOverrideKeys:["port_overrides","ethernet_overrides"],extend:!0}).then(()=>{o.goBack()})}}),yc={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var Sc=Object(ht.compose)(Object(o.connect)(e=>({networkGroups:Object(un.selectNetworkGroups)(e)}),yc),F.f,Pc)((function({activeItem:e,history:t,submitForm:a,resetForm:n,values:l,dirty:i,setFieldValue:E,errors:s}){const m=Object(o.useSelector)(un.selectNetworkGroups),{networkGroups:d}=Object(O.getDeviceSpecs)(e),_=()=>{n(),t.goBack()},u=Object(r.useMemo)(()=>l.ports.some(e=>JSON.parse(e.speed).speed),[l.ports]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Cc,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Rc,{alignItems:"center"},c.a.createElement(w.f,{onClick:_,style:{cursor:"pointer"}}),c.a.createElement(vc,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))),c.a.createElement(gc,{activeItem:e,ports:l.ports}),c.a.isValidElement(s.ports)&&s.ports,u&&c.a.createElement(hc,null,c.a.createElement(Tc,{width:19,height:19}),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_SPEED_WARNING"})))),c.a.createElement(Pn,{isDirty:i,onFormSubmit:a,onFormCancel:_,onFormReset:()=>{E("ports",l.ports.map(e=>{const t=m.find(t=>t.id===d[e.ifname]);return{...e,networkGroup:(null==t?void 0:t.id)||O.DISABLED_PORT,autoneg:!0,speed:JSON.stringify({speed:0,full_duplex:!1})}}))},submitButtonText:"COMMON_ACTION_APPLY",allowCancel:!0}))}));const Ac=Object(l.c)(M.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,jc=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  padding: 0 50px;
`,Nc=Object(l.c)(M.a)`
  padding: 30px;
`,Lc=Object(l.c)(M.a)`
  margin-bottom: 24px;
`,xc=Object(l.c)(Lc)`
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Vc=Object(l.c)(V.a)`
  display: flex;
`,wc=Object(l.c)(V.a)`
  margin-bottom: 3px;
`,Fc=Object(l.c)(pn.a)`
  margin-left: 8px;
  margin-top: -2px;
`,Mc=l.a`
  margin-left: 15px;
`,Uc=Object(l.c)(de.a)`
  margin-top: 12px;
  justify-content: flex-end;
`,kc=Object(Ja.g)({mapPropsToValues:({outletInfo:{name:e,cycle_enabled:t,relay_state:a}})=>({name:e||"",cycle_enabled:t,relay_state:a}),validationSchema:Qa.a.object().shape({name:Qa.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),cycle_enabled:Qa.a.boolean(),relay_state:Qa.a.boolean()}),handleSubmit:(e,{props:{outletInfo:t,updateDeviceWithIdEndpoint:a,history:n,activeItem:r,activeItem:{mac:c,_id:l,outlet_overrides:i}}})=>{const o=Object(O.isUspPduPro)(r);a({outlet_overrides:[...i.filter(e=>e.index!==t.index),{index:t.index,...e}].map(a=>t.index===Object(O.getTwinOutletIndex)(a,o)?{...a,relay_state:e.relay_state}:a).sort((e,t)=>e.index-t.index)},l,c,{successToast:{icon:ca.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["outlet_overrides"],extend:!0}).then(()=>{n.goBack()})}}),zc={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var Bc=Object(ht.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({outletInfo:Object(O.getActiveOutletInfo)(t,void 0,+a)}),zc),kc)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:r,activeItem:l})=>{const i=Object(o.useDispatch)(),E=()=>{n(),r.goBack()},s=Object(O.isUspPduPro)(l),m=Object(O.getTwinOutletIndex)(a,s),d=Object(Yn.n)(a,"POWER_METER");return c.a.createElement(c.a.Fragment,null,c.a.createElement(Nc,{flexDirection:"column",width:"100%",height:"100%"},c.a.createElement(Ac,{alignItems:"center"},c.a.createElement(w.f,{onClick:E,style:{cursor:"pointer"}}),c.a.createElement(jc,{size:"body",weight:"bold",truncate:!0},a.name)),c.a.createElement(Lc,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),c.a.createElement(Lc,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(Vc,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"}),m&&c.a.createElement(Fc,{position:"topRight",portal:!0,width:150,tooltipClassName:Mc,message:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_TOOLTIP_LABEL_TWIN_RELAY_STATE",values:{index:m}})},c.a.createElement(w.W,{isActive:!0}))),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),c.a.createElement(tn.a,{type:"checkbox",name:"relay_state"})),c.a.createElement(Lc,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(tn.a,{type:"checkbox",name:"cycle_enabled"})),c.a.createElement(Lc,{flexDirection:"column"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),c.a.createElement(V.a,{size:"body",color:"tertiary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"})),c.a.createElement(Uc,{variant:"link",onClick:()=>i(Object(O.powerCycleOutlet)(l,a)),Icon:c.a.createElement(w.Ab,null)},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))),d&&c.a.createElement(xc,{flexDirection:"column"},a.outlet_power&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(wc,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(a.outlet_power).toFixed(2)}}))),!1,a.outlet_current&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(wc,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(a.outlet_current||0).toFixed(2)}}))),a.outlet_voltage&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(wc,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(a.outlet_voltage).toFixed(2)}}))),a.outlet_power_factor&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(wc,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),c.a.createElement(V.a,{size:"body",color:"secondary"},Number(a.outlet_power_factor).toFixed(2))))),c.a.createElement(Pn,{isDirty:e,onFormSubmit:t,onFormCancel:E,allowCancel:!0}))});const Wc=Object(l.c)(M.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  svg {
    position: absolute;
    left: 24px;
  }
`,Hc=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,Gc=Object(l.c)(M.a)`
  padding: 30px;
`,Yc=Object(l.c)(M.a)`
  margin-bottom: 24px;
`,$c=Object(l.c)(V.a)`
  display: flex;
`,Kc=Object(Ja.g)({mapPropsToValues:({outletInfo:{name:e,port_mode:t}})=>({name:e||"",portModeAuto:t===O.RpsPortMode.AUTO}),validationSchema:Qa.a.object().shape({name:Qa.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),portModeAuto:Qa.a.boolean()}),handleSubmit:({portModeAuto:e,...t},{props:{outletInfo:a,updateDeviceWithIdEndpoint:n,history:r,activeItem:{rps_override:c,mac:l,_id:i}}})=>{var o;const E=[{port_idx:a.port_idx,port_mode:e?O.RpsPortMode.AUTO:O.RpsPortMode.DISABLED,...t},...null!==(o=null==c?void 0:c.rps_port_table.filter(e=>e.port_idx!==a.port_idx))&&void 0!==o?o:[]];n({rps_override:{...c,rps_port_table:E}},i,l,{successToast:{icon:ca.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["rps_override"],extend:!0}).then(()=>{r.goBack()})}}),Xc={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var qc=Object(ht.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({outletInfo:Object(O.getActiveRpsOutletInfo)(t,+a)}),Xc),Kc)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:r,setFieldValue:l,values:i})=>{const o=()=>{n(),r.goBack()};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Gc,{flexDirection:"column",width:"100%",height:"100%"},c.a.createElement(Wc,{alignItems:"center"},c.a.createElement(w.f,{onClick:o,style:{cursor:"pointer"}}),c.a.createElement(Hc,{weight:"bold"},a.name)),c.a.createElement(Yc,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),c.a.createElement(Yc,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement($c,{weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),c.a.createElement(tn.a,{type:"checkbox",name:"portModeAuto"}))),c.a.createElement(Pn,{isDirty:e,onFormSubmit:t,onFormCancel:o,allowCancel:!0}))});const Zc=(e,t)=>e?e.map(e=>{const a=t.find(t=>t.mac===e.mac);return{...e,id:null==a?void 0:a._id,name:Object(Y.c)(a),deviceData:a,model:Object(Y.e)(null==a?void 0:a.model)}}):[],Jc=Object(l.c)(M.a)`
  th {
    padding-right: 0;

    &:first-child {
      color: ${({theme:e})=>e.motifPalette.text01};
    }
  }
  tr:hover {
    cursor: pointer;
  }
`,Qc=Object(l.c)(V.a)`
  color: inherit;
  color: ${({theme:e})=>e.colors.blue};
`;function el({activeItem:{downlink_table:e},params:t,path:a,history:r}){const{site:l,page:i,subPage:E}=t,s=Object(o.useSelector)(O.selectDevicesData),m=Object(o.useDispatch)(),_=[{id:"port_idx",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK_PORT"})),minWidth:50,renderCell:e=>c.a.createElement(V.a,{size:"body"},e.port_idx)},{id:"name",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK_DEVICE"})),renderCell:e=>c.a.createElement(Qc,{size:"body",truncate:!0},e.name===e.mac&&e.model?e.model:e.name),minWidth:90},{id:"statusInfo",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK_SPEED"})),renderCell:e=>c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_DEVICE_DUPLEX_FULL",values:{speed:e.speed}})),minWidth:60},{id:"model",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK_MODEL"})),minWidth:80,renderCell:e=>c.a.createElement(V.a,{truncate:!0,size:"body"},e.model)}];return c.a.createElement(Jc,null,c.a.createElement(fe.a,{items:Zc(e,s),disableColumnFilters:!0,initialSortBy:"port_idx",columns:_,renderFooter:()=>c.a.createElement("div",null,e&&e.length>0?c.a.createElement(F.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}}):c.a.createElement(F.c,{id:"COMMON_DEVICES_NOT_FOUND"})),rowHeight:30,onRowClick:({mac:e})=>{const t=Object(n.i)(a,{id:e,site:l,page:i,panel:"overview",subPage:E});r.push(t),m(Object(N.g)({type:d.b.DEVICE,mac:e}))}}))}var tl=a(668),al=a(1746);const nl=e=>"alwayson"===Object(O.getDeviceModelFeature)(e,"fan")?0:1,rl=e=>"simple"===Object(O.getDeviceModelFeature)(e,"fan");var cl=({activeItem:{"system-stats":{mem:e}={}}})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMORY_USAGE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e,"%")):null;var ll=({switchDeviceData:{general_temperature:e,uptime:t,has_temperature:a,overheating:n,power_source_voltage:r,has_fan:l,fan_level:i,sys_stats:o},switchDeviceData:E})=>{const s=(m=E)&&m.port_table?m.port_table.reduce((e,t)=>e+parseFloat(Object(dt.a)(t,"poe_power","0.0")),0):0;var m;const d=i>=nl(E);return c.a.createElement(Pe.g,{height:"100%",flexDirection:"column"},r&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_SOURCE_VOLTAGE_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_SOURCE_VOLTAGE_VALUE",values:{voltage:r}}))),a&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:e}}),n&&c.a.createElement(pn.a,{message:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_OVERHEATING"}),width:180,position:"left",className:"ml-1",style:{display:"inline-block",verticalAlign:"text-bottom"}},c.a.createElement(w.a,{style:{color:we.a["color-danger"]}}))))),l&&!rl(E)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_LEVEL"})),c.a.createElement(V.a,{size:"body"},d?i:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"})))),l&&rl(E)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_STATE"})),c.a.createElement(V.a,{size:"body"},d?c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_ON"}):c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"}))),t>0&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),c.a.createElement(V.a,{size:"body"},Object(Xt.c)(t,!0))),c.a.createElement(cl,{activeItem:E}),o&&o.loadavg_1&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),c.a.createElement(V.a,{size:"body"},Object(O.getDeviceLoadAverage)(E))),s>0&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_CONSUMPTION_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_CONSUMPTION_VALUE",values:{power:s.toFixed(2)}}))))};var il=({uplink:e,portSpeed:t})=>{const a=Number(t||(null==e?void 0:e.speed));return a>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),c.a.createElement(V.a,{color:"secondary",size:"body"},`${Object(Ct.b)(a)} ${10===a||100===a?`(${a} Mbps)`:""}`)):null};const ol=Object(l.c)("div")`
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
`;function sl({switchDeviceData:e,showSimplifiedActivity:t,params:a,path:r,history:l}){const i=Object(o.useSelector)(O.selectDevicesData),{site:E,page:s,subPage:m}=a,{speed:_,rx_packets:u,rx_bytes:b,tx_packets:p,tx_bytes:I,port_idx:g,"rx_bytes-r":R,"tx_bytes-r":v}=Object(O.getUplinkAttrs)(e)||{},C=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),h=Object(O.getUplinkRemotePort)(i,e),T=Object(O.getUplinkDisplayName)(e,C),f=Object(o.useDispatch)();return c.a.createElement(ol,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),(null==C?void 0:C.mac)?c.a.createElement(El,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(r,{id:C.mac,site:E,page:s,panel:"overview",subPage:m});l.push(t),f(Object(N.g)({type:d.b.DEVICE,mac:C.mac}))}},T):c.a.createElement(F.c,{id:"COMMON_HYPHEN"})),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),c.a.createElement(V.a,{size:"body"},g)),c.a.createElement(il,{portSpeed:_}),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==h?void 0:h.poe_power)||0}}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{size:"body"},u&&b?c.a.createElement(c.a.Fragment,null,c.a.createElement(me.a,{type:"number",input:u,size:"body"})," / ",Object(Kt.c)(b)):"- / -")),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),c.a.createElement(V.a,{size:"body"},p&&I?c.a.createElement(c.a.Fragment,null,c.a.createElement(me.a,{type:"number",input:p,size:"body"})," / ",Object(Kt.c)(I)):"- / -")),t?c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),c.a.createElement(me.a,{size:"body",type:"bytes",input:v+R||0,options:"bitrate"})):c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(me.a,{type:"bytes",input:R||0,options:"bitrate",size:"body"}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(me.a,{type:"bytes",input:v||0,options:"bitrate",size:"body"})))))}var ml=function(e){let t=parseFloat(""+e);return t?(t=Math.min(45,Math.max(t,5)),t=(t-5)/40*99,""+(0===t?"0":t.toPrecision(2))):""};var dl=function(e){return"number"==typeof e?e-95:0},_l=a(376);const ul=Object(l.c)("div")`
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
`,Il=[{id:"name",sortable:!0,minWidth:30,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"})),renderCell:e=>c.a.createElement(V.a,{size:"body",color:"info",truncate:!0},Object(I.getClientDisplayName)(e))},{id:"connection",sortable:!0,minWidth:40,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_CONNECTION"})),renderCell:e=>c.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},Object(I.getConnection)(e))},{id:"signal",sortable:!0,minWidth:25,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_SIGNAL"})),renderCell:e=>{let t;return"rssi"in e&&({rssi:t}=e),t?c.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},ml(t)," (",dl(t)," ",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")"):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"}))}},{id:"tx_rate",sortable:!0,minWidth:20,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_TX_RATE"})),renderCell:e=>{let t;return"tx_rate"in e&&({tx_rate:t}=e),t?c.a.createElement(me.a,{truncate:!0,size:"body",type:"bytes",input:1e3*t,color:"secondary",options:"bitrate"}):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"}))}}];var gl=Object(ht.compose)(Object(o.connect)(e=>({clientsExist:Object(I.selectClientsDataExist)(e)}),{fetchClients:I.fetchClients}),Object(_l.c)(({clientsExist:e,fetchClients:t})=>e||t()))(({activeItem:e,params:t,path:a,history:l})=>{const{site:i,page:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(Object(I.selectClientsByDevice)(e)),_=Object(L.a)("/clients/properties/:mac/overview"),u=Object(r.useCallback)(e=>{if("mac"in e){const{mac:t,unifi_device:r}=e;r?(l.push(Object(n.i)(a,{id:t,page:E,panel:"overview",section:"properties",site:i})),s(Object(N.g)({type:d.b.UNIFI_DEVICE_CLIENT,mac:t}))):l.push(_.replace(":mac",t))}},[s,l,a,_,E,i]);return c.a.createElement(ul,null,c.a.createElement(fe.a,{items:m,disableColumnFilters:!0,headerRowClassName:bl,rowClassName:pl,columns:Il,initialSortBy:"name",renderFooter:()=>m.length>0?c.a.createElement(Ol,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:u}))});var Rl=({activeItem:e})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Al,{activeItem:e}),c.a.createElement(Nl,{activeItem:e}),c.a.createElement(Fl,{activeItem:e,withLink:!0}),c.a.createElement(Vl,{activeItem:e,withLink:!0})),vl=a(790),Cl=a(530),hl=a(210),Tl=a.n(hl);const fl=Object(l.c)(Pe.g,{shouldForwardProp:e=>!["borderColor","backgroundColor","dividerColor","standalone"].includes(e)})`
  background-color: ${({backgroundColor:e})=>e};
  border-left: 2px solid ${({borderColor:e})=>e};
  padding: ${({standalone:e})=>e?"6px 18px 0 0":"16px 16px 16px 0"};

  & + & {
    border-top: 1px solid ${({dividerColor:e})=>e};
  }

  ${({standalone:e,dividerColor:t})=>e&&`\n    border: 1px solid ${t};\n    margin-bottom: 4px;\n  `}
`,Dl=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
`,Pl=Object(l.c)(Pe.g)`
  padding-top: 5px;
  min-width: 70px;
  max-width: 70px;
`;var yl=({level:e,children:t,standalone:a})=>{const n=Object(L.m)(),{icon:r,backgroundColor:l,borderColor:i,dividerColor:o}=((e,t)=>"warning"===e?{icon:Dl,backgroundColor:Tl()(t.motifPalette.warning).alpha(.04).css(),borderColor:t.motifPalette.warning,dividerColor:Tl()(t.motifPalette.warning).alpha(.2).css()}:{icon:w.Xb,backgroundColor:Tl()(t.motifPalette.info).alpha(.05).css(),borderColor:t.motifPalette.info,dividerColor:Tl()(t.motifPalette.info).alpha(.2).css()})(e,n);return c.a.createElement(fl,{flexDirection:"row",width:"100%",backgroundColor:l,borderColor:i,dividerColor:o,standalone:a},c.a.createElement(Pl,{justifyContent:"center"},c.a.createElement(r,{width:24,height:24})),c.a.createElement(Pe.g,{flexDirection:"column",justifyContent:"center"},t))};const Sl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Al=({activeItem:e})=>{const t=Object(o.useSelector)(ce.d),a=!!(t&&e.model_eol_version&&Object(Cl.a)(t,">= "+e.model_eol_version));return e.model_in_eol?c.a.createElement(yl,{level:"warning"},a&&c.a.createElement(Sl,{size:"caption"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_EOL_WARNING_NO_CONFIGURING",values:{date:c.a.createElement(vl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),!a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Sl,{size:"caption"},c.a.createElement(F.c,{id:e.model_eol_date?"DEVICE_PROPERTIES_EOL_WARNING":"DEVICE_PROPERTIES_EOL_WARNING_NO_DATE",values:{date:c.a.createElement(vl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),!!e.model_eol_version&&c.a.createElement(Sl,{size:"caption",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_EOL_WARNING_CONTROLLER_UPGRADE",values:{controllerVersion:e.model_eol_version}}))),c.a.createElement("a",{href:_e.a.eolLearnMore,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(F.c,{id:"COMMON_LEARN_MORE"}))):null};const jl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Nl=({activeItem:e})=>e.model_in_lts?c.a.createElement(yl,{level:"info"},c.a.createElement(jl,{size:"caption"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LTS_WARNING",values:{date:c.a.createElement(vl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),e.model_eol_version&&c.a.createElement(jl,{size:"caption",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LTS_WARNING_CONTROLLER_UPGRADE",values:{controllerVersion:e.model_eol_version}})),c.a.createElement("a",{href:_e.a.ltsLearnMore,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(F.c,{id:"COMMON_LEARN_MORE"}))):null,Ll=a(2009);const xl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Vl=({activeItem:e,withLink:t,standalone:a})=>{const n=Object(o.useSelector)(Ll.selectHasCloudBackupEnabled),r=Object(o.useSelector)(m.b),l=Object(o.useSelector)(m.f),i=r.replace(/\/network\/?/,_e.a.ucoreAdvancedSettings);return Object(L.f)([Object(Ll.fetchUcoreGeneralInfo)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})].filter(()=>!l),!n&&Object(O.hasActiveUnifiCare)(e)?c.a.createElement(yl,{level:"warning",standalone:a},c.a.createElement(xl,{size:"caption",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_UNIFI_CARE_CLOUD_BACKUP_ENABLE_WARNING"})),t&&c.a.createElement(xl,{size:"caption"},c.a.createElement(F.b,{id:"DEVICE_PROPERTIES_UNIFI_CARE_CLOUD_BACKUP_ENABLE_NAVIGATE",values:{url:i}}))):null)};const wl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Fl=({activeItem:e,withLink:t,standalone:a})=>{const n=Object(o.useSelector)(Ll.selectHasCloudAccessEnabled),r=Object(o.useSelector)(m.b),l=Object(o.useSelector)(m.f),i=r.replace(/\/network\/?/,_e.a.ucoreAdvancedSettings);return Object(L.f)([Object(Ll.fetchUcoreGeneralInfo)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})].filter(()=>!l),!n&&Object(O.hasActiveUnifiCare)(e)?c.a.createElement(yl,{level:"warning",standalone:a},c.a.createElement(wl,{size:"caption",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_UNIFI_CARE_REMOTE_ACCESS_ENABLE_WARNING"})),t&&c.a.createElement(wl,{size:"caption"},c.a.createElement(F.b,{id:"DEVICE_PROPERTIES_UNIFI_CARE_REMOTE_ACCESS_ENABLE_NAVIGATE",values:{url:i}}))):null)};const Ml=Object(l.c)(M.a)`
  padding: 24px 32px 24px 0 !important;
  flex-shrink: 0;
`,Ul=Object(l.c)(V.a)`
  max-width: 150px;
`,kl=Object(l.c)(V.a)`
  max-width: 100px;
`;var zl=c.a.memo(({device:e})=>{const{model:t,mac:a,displayable_version:n,ip:r,type:l,lan_ip:i}=e,o=Object(Y.a)(e);return c.a.createElement(Ml,null,c.a.createElement(M.a,{minWidth:157,maxWidth:157,justifyContent:"center",alignItems:"center"},c.a.createElement(M.a,{minWidth:125,maxWidth:125,height:125,padding:"16px",alignItems:"center",justifyContent:"center"},c.a.createElement(U.c,{device:{model:t,type:l},filesMap:"GRID",width:"100%"}))),c.a.createElement(M.a,{width:211,flexDirection:"column",justifyContent:"center"},o&&c.a.createElement(Zt,{flexProps:{alignItems:"center"}},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_MODEL"})),c.a.createElement(Ul,{size:"body",truncate:!0},o)),a&&c.a.createElement(Zt,{flexProps:{alignItems:"center"}},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_MAC_ADDRESS"})),c.a.createElement(V.a,{size:"body"},a)),r&&c.a.createElement(Zt,{flexProps:{alignItems:"center"}},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_IP"})),c.a.createElement(V.a,{size:"body"},i||r)),n&&c.a.createElement(Zt,{flexProps:{alignItems:"center"}},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_FIRMWARE_VERSION"})),c.a.createElement(kl,{size:"body",truncate:!0},n))))},(e,t)=>e.device.model===t.device.model&&e.device.hostname===t.device.hostname&&e.device.mac===t.device.mac&&e.device.displayable_version===t.device.displayable_version&&e.device.ip===t.device.ip);const Bl=Object(l.c)(Ee.a)`
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
`,Xl=Object(Hl.a)(6,e=>({value:e,label:e.toString()})).reverse(),ql=(e,t,a,n,r)=>0!==t&&5!==t?null:c.a.createElement("line",{x1:a,x2:n,y1:0,y2:0,className:r}),Zl=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var Jl=Object(_n.b)(c.a.memo(({gwMac:e,keys:t,pickDatumsWithKey:a,heading:n,forUdm:r,theme:l})=>{const i=Object(o.useSelector)(Object(De.selectDeviceStatReport)(e,De.fetchDeviceUsageReport,De.OBJECT.GW)),E=Object(o.useSelector)(Object(De.selectDeviceStatReport)(e,De.fetchDeviceUsageReport)),s=Object(o.useSelector)(Gl.O),m="ap"===a?"gradientArea":"line",d=Date.now(),_=Object(Tt.startOfHour)(Object(Tt.addHours)(d,1)).getTime(),u=s?"H:ss":"ha",b=Object(Yl.b)(_,u);b[b.length-1].label="";const p=b[0].value,O={};let I=0,g=i;r&&(g=E.reduce((e,t)=>{const a={...t};return a.gw?e:a.sw?(e[I].num_sta+=a.num_sta,I+=1,e):(e.push(a),e)},[])),a&&(g=E.filter(e=>e[a]));Object(Wl.m)(g.filter(e=>e.time>p).map(e=>({...e,x:e.time})),St.a.MINUTES.grain).forEach(e=>{t.forEach(t=>{O[t]||(O[t]={key:t,isDashed:"mem"===t,variant:"mem"===t?m:"gradientArea",lineColor:"mem"===t?"purple":"blue",maxY:0,data:[]}),O[t].data.push({x:e.x,y:e[t]})})});const R=t.map(e=>O[e]?O[e].data.map(e=>e.y||0):0),v=Math.max(...R.flat(),4);let C=Xl;return v>5&&(C=Object(Yl.e)(v,6)),c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{justifyContent:"space-between",className:Kl,marginTop:"10px"},c.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},c.a.createElement(F.c,{id:n})),t.length>1&&c.a.createElement(M.a,null,c.a.createElement($l,{legendcolor:l.colors.blue,bordertype:"solid"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_WORD_CPU"}))),c.a.createElement($l,{legendcolor:l.colors.purple,bordertype:"dotted"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_WORD_MEMORY"}))))),c.a.createElement(ft.a,{xAxis:b,yAxis:C,width:336,height:120,margin:[0,0,20,30],xLabelsBetween:!0,renderYGridLine:ql,labelClassName:Zl(l),renderChartElements:(e,a,n)=>c.a.createElement(c.a.Fragment,null,t.map(t=>O[t]&&O[t].data.length&&c.a.createElement(Dt.a,{key:O[t].key,data:O[t].data,maxY:n,mouseData:a,getCoordinates:e,variant:O[t].variant,lineColor:l.colors[O[t].lineColor],dashed:O[t].isDashed,hideMissingData:!0})))}))},(e,t)=>e.gwMac===t.gwMac));var Ql=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(r.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),c.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const ei=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,ti=Object(l.c)("div")`
  margin-bottom: 16px;
`;var ai=({activeItem:e})=>c.a.createElement(ei,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),c.a.createElement(ti,null),c.a.createElement(Ql,{activeItem:e}));const ni=Object(l.c)("div")`
  margin-bottom: 20px;
`,ri=Object(l.c)(w.W)`
  margin-right: 5px;
  color: ${({theme:e})=>e.motifPalette.info};
`,ci=Object(l.c)("div")`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;var li=Object(Ja.g)({mapPropsToValues:({activeItem:{name:e,mac:t}={}})=>({name:e!==t?e:""}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:n,isValid:l,values:i,resetForm:E,formName:s="general"})=>{const d=Object(o.useDispatch)(),_=Object(o.useSelector)(m.b),u=Object(O.isUdm)(e);Object(r.useEffect)(()=>(d(Object(N.h)({[s]:()=>u?{}:i})),d(Object(N.j)({[s]:()=>E({values:i})})),d(Object(N.i)({[s]:E})),()=>{d(Object(N.h)({[s]:null})),d(Object(N.j)({[s]:null})),d(Object(N.i)({[s]:null}))}),[d,E,i,u,s]),Object(r.useEffect)(()=>{t(s,n),a(s,!l)},[t,n,a,l,s]);const b=_.replace(/\/network\/?/,_e.a.ucoreSettings);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ni,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DEVICE_NAME",name:"name",full:!0,disabled:u}),u&&c.a.createElement(ci,null,c.a.createElement(ri,null),c.a.createElement(F.b,{id:"DEVICE_PROPERTIES_NAME_LINK_UNIFI_OS",values:{link:b}}))))}),ii=a(2896),oi=a(529),Ei=a(50);const si=Object(l.c)(Pe.g)`
  margin-bottom: 24px;
`,mi=Object(l.c)(Pe.g)`
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
`,pi=e=>({hour:Number(e.split(":")[0]),min:Number(e.split(":")[1])}),Oi=e=>`${e.hour.toString().padStart(2,"0")}:${e.min.toString().padStart(2,"0")}`,Ii=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e,activeItem:{lcm_brightness:t=O.DEFAULT_LCM_BRIGHTNESS,lcm_brightness_override:a=!1,lcm_night_mode_begins:n=O.DEFAULT_LCM_NIGHT_MODE_BEGINS,lcm_night_mode_ends:r=O.DEFAULT_LCM_NIGHT_MODE_ENDS}})=>({lcm:e,lcm_brightness:t,lcm_brightness_override:a,lcm_night_mode_begins:pi(n),lcm_night_mode_ends:pi(r)}),validationSchema:gn.a.object().shape({lcm:gn.a.object().shape({sync:gn.a.boolean()}),lcm_brightness_override:gn.a.boolean(),lcm_brightness:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required(),lcm_night_mode_begins:gn.a.object().shape({hour:gn.a.number(),min:gn.a.number()}),lcm_night_mode_ends:gn.a.object().shape({hour:gn.a.number(),min:gn.a.number()})}),handleSubmit:()=>null}),gi={saveSettings:Ei.saveSettings};var Ri=Object(ht.compose)(Object(o.connect)(e=>({lcmSettings:Object(Ei.selectLcmSettings)(e)}),gi),Ii)(({values:e,setFieldValue:t,resetForm:a,setFormDirty:n,setFormInvalid:l,dirty:i,isValid:E,initialValues:s})=>{const m=Object(o.useDispatch)();return Object(r.useEffect)(()=>{n("lcmScreen",i),l("lcmScreen",!E)},[n,l,E,i]),Object(r.useEffect)(()=>(m(Object(N.h)({lcmScreen:()=>({...e,lcm_brightness_override:e.lcm_brightness!==O.DEFAULT_LCM_BRIGHTNESS,lcm_night_mode_begins:Oi(e.lcm_night_mode_begins),lcm_night_mode_ends:Oi(e.lcm_night_mode_ends)})})),m(Object(N.j)({lcmScreen:()=>{Object(oi.a)(s.lcm,e.lcm)||m(Object(Ei.saveSettings)(e.lcm)),a({values:e})}})),m(Object(N.i)({lcmScreen:a})),()=>{m(Object(N.h)({lcmScreen:null})),m(Object(N.j)({lcmScreen:null})),m(Object(N.i)({lcmScreen:null}))}),[m,a,e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(mi,null,c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"}))),c.a.createElement(si,null,c.a.createElement(ii.a,{size:"large",value:e.lcm_brightness||O.DEFAULT_LCM_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(V.a,{size:"body"},e,"%"),onChange:e=>{t("lcm_brightness",+e.target.value)}})),c.a.createElement(si,{flexDirection:"column"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE_DESCRIPTION"}))),c.a.createElement(si,{justifyContent:"space-between"},c.a.createElement(bi,null,c.a.createElement(Jn.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_BEGINS",name:"lcm_night_mode_begins",full:!0})),c.a.createElement(bi,null,c.a.createElement(Jn.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_ENDS",name:"lcm_night_mode_ends",full:!0}))),c.a.createElement(si,{justifyContent:"space-between"},c.a.createElement(di,{color:"primary",size:"body"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),c.a.createElement(pn.a,{portal:!0,tooltipClassName:_i,position:"topRight",width:200,message:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION_TOOLTIP"})},c.a.createElement(ui,{isActive:!0}))),c.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.sync"})))}),vi=a(451),Ci=a(282);const hi=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`,Ti=Object(l.c)(V.a)`
  flex: 1;
  margin-right: 12px;
`,fi=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,Di=Object(l.c)(M.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
  justify-content: space-between;
`,Pi=Object(l.c)(de.a)`
  span {
    margin-left: 3px !important;
  }
`,yi=Object(l.c)(Jn.Field)`
  margin-right: 18px;
`,Si=Object(Ja.g)({mapPropsToValues:({switchDeviceData:e,nativeNetworks:t,radiusProfiles:a,radiusSettings:n})=>{const{jumboframe_enabled:r=!1,flowctrl_enabled:c=!1,stp_version:l="rstp",stp_priority:i="32768",dot1x_portctrl_enabled:o=!1,radiusprofile_id:E="",dot1x_fallback_networkconf_id:s="",snmp_location:m="",snmp_contact:d="",outdoor_mode_override:_=O.OutdoorModeOverride.DEFAULT,power_source_ctrl:u=O.POWER_SOURCE_OPTIONS.AUTO,power_source_ctrl_enabled:b=!1}=e;return{mgmt_network_id:Object(O.getDeviceNetworkId)(t,e),jumboframe_enabled:r,flowctrl_enabled:c,stp_version:l,stp_priority:i,dot1x_portctrl_enabled:o,radiusprofile_id:E,radiusProfiles:a,radiusSettings:n,dot1x_fallback_networkconf_id:s,snmp_location:m,snmp_contact:d,outdoor_mode_override:_,power_source_ctrl:u,power_source_ctrl_enabled:b}},validationSchema:Qa.a.object().shape({mgmt_network_id:Qa.a.string(),flowctrl_enabled:Qa.a.boolean(),stp_version:Qa.a.string(),stp_priority:Qa.a.string(),dot1x_portctrl_enabled:Qa.a.boolean(),snmp_contact:Qa.a.string(),snmp_location:Qa.a.string(),radiusprofile_id:Qa.a.string().when("dot1x_portctrl_enabled",{is:!0,then:Qa.a.string().isAllowedDefaultRadiusProfile("COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE").required("COMMON_VALIDATION_FIELD_REQUIRED")}),radiusProfiles:Qa.a.array().of(Qa.a.object()),radiusSettings:Qa.a.object(),dot1x_fallback_networkconf_id:Qa.a.string(),outdoor_mode_override:Qa.a.string(),power_source_ctrl:Qa.a.string(),power_source_ctrl_enabled:Qa.a.boolean()}),handleSubmit:()=>null}),Ai=[{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_STP",value:"stp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_RSTP",value:"rstp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_DISABLED",value:"disabled"}];var ji=Object(ht.compose)(Object(o.connect)((e,{activeItem:t})=>({nativeNetworks:Object(un.selectNativeNetworks)(e),switchDeviceData:Object(O.selectDeviceData)(e,t.mac),radiusOptions:Object(vi.selectRadiusOptions)(e),radiusProfiles:Object(vi.selectRadiusProfiles)(e),radiusSettings:Object(Ei.selectRadiusSettings)(e)}),{updateDevice:O.updateDevice,fetchRadiusProfiles:vi.fetchRadiusProfiles}),F.f,Si,Object(_l.c)(({fetchRadiusProfiles:e})=>e()))(({activeItem:e,values:t,errors:a,resetForm:l,dirty:i,setFormDirty:E,setFormInvalid:s,setFieldValue:d,nativeNetworks:_=[],initialValues:u,radiusOptions:b,radiusProfiles:p,isValid:I,hideFlowControl:g,intl:R,formName:v="services"})=>{const C=Object(o.useDispatch)(),h=Object(n.k)(),T=Object(o.useSelector)(Ie.a),f=Object(o.useSelector)(m.j),D=Object(n.i)(f,{site:T}),P=Object(Yn.u)(e),y=Object(Yn.o)(e),S=Object(o.useSelector)(Ci.f),A=Object(O.getDeviceModelFeature)(e,"outdoorModeSupport")&&S,j=Object(O.isGateway)(e),L=Object(Yn.t)(e),x=null==p?void 0:p.length;Object(r.useEffect)(()=>{if((!t.radiusProfiles||!t.radiusProfiles.length)&&x){let{radiusprofile_id:e}=t;t.radiusprofile_id||b.find(e=>e.value===t.radiusprofile_id)||(e=b[0].value),l({values:{...u,radiusprofile_id:e,radiusProfiles:p}})}},[p]),Object(r.useEffect)(()=>{E(v,i),s(v,!I)},[s,E,i,I,v]),Object(r.useEffect)(()=>(C(Object(N.h)({[v]:()=>({snmp_contact:t.snmp_contact,snmp_location:t.snmp_location,...!j&&{mgmt_network_id:t.mgmt_network_id},...!g&&{jumboframe_enabled:t.jumboframe_enabled,flowctrl_enabled:t.flowctrl_enabled},...P&&{stp_version:t.stp_version,stp_priority:t.stp_priority},...y&&{dot1x_portctrl_enabled:t.dot1x_portctrl_enabled},...t.dot1x_portctrl_enabled&&y&&{radiusprofile_id:t.radiusprofile_id,dot1x_fallback_networkconf_id:t.dot1x_fallback_networkconf_id},...A&&{outdoor_mode_override:t.outdoor_mode_override},...L&&{power_source_ctrl:t.power_source_ctrl,power_source_ctrl_enabled:t.power_source_ctrl!==O.POWER_SOURCE_OPTIONS.AUTO}})})),C(Object(N.j)({[v]:()=>l({values:t})})),C(Object(N.i)({[v]:l})),()=>{C(Object(N.h)({[v]:null})),C(Object(N.j)({[v]:null})),C(Object(N.i)({[v]:null}))}),[e._id,C,l,t,v,y,P,j,g,A,L]);const U=Object(r.useMemo)(()=>_.map(e=>({value:e._id,label:e.name})),[_]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{width:"100%",flexDirection:"column",flex:"1 1 85%"},!j&&c.a.createElement(fi,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:U,translateLabel:!0})),!g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Di,{marginBottom:8},c.a.createElement(Ti,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_JUMBO_FRAMES"})),c.a.createElement(Jn.Field,{name:"jumboframe_enabled",type:"checkbox"})),c.a.createElement(Di,{marginBottom:16},c.a.createElement(Ti,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_FLOW_CONTROL"})),c.a.createElement(Jn.Field,{name:"flowctrl_enabled",type:"checkbox"}))),P&&c.a.createElement(c.a.Fragment,null,c.a.createElement(fi,{marginBottom:32},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SPANNING_TREE",name:"stp_version",full:!0,type:"dropdown",translateOptions:!0,translateLabel:!0,options:Ai})),c.a.createElement(hi,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SECURITY"})),"disabled"!==t.stp_version&&c.a.createElement(fi,{marginBottom:16},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_PRIORITY",name:"stp_priority",type:"dropdown",full:!0,validated:!0,options:O.SPANNING_TREES.map(e=>({label:e,value:e})),translateLabel:!0}))),y&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Di,{marginBottom:32},c.a.createElement(Ti,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL"})),c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL",name:"dot1x_portctrl_enabled",type:"checkbox"})),t.dot1x_portctrl_enabled&&c.a.createElement(c.a.Fragment,null,c.a.createElement(fi,{marginBottom:16},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_RADIUS_PROFILE",name:"radiusprofile_id",type:"dropdown",full:!0,options:b,invalid:!!a.radiusprofile_id,translateLabel:!0}),!!a.radiusprofile_id&&c.a.createElement(Jn.ValidationMessage,{align:"left",visible:!0,translation:"COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE"})),c.a.createElement(Di,{alignSelf:"flex-end"},c.a.createElement(Pi,{size:"small",type:"button",variant:"inline",onClick:()=>{h.push(`${D}${_e.a.advancedSettingsRadiusProfileForm}`)}},c.a.createElement(w.q,{height:20,width:20}),c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CREATE_RADIUS_PROFILE"}))),c.a.createElement(fi,{marginBottom:16},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_FALLBACK_VLAN",name:"dot1x_fallback_networkconf_id",type:"dropdown",full:!0,validated:!0,options:[{label:R.formatMessage({id:"COMMON_NONE"}),value:""},...U],translateLabel:!0})),c.a.createElement(Di,{alignSelf:"flex-end"},c.a.createElement(Pi,{size:"small",type:"button",variant:"inline",onClick:()=>{h.push(`${D}${_e.a.networkSettingsForm}`)}},c.a.createElement(w.q,{height:20,width:20}),c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CREATE_FALLBACK_VLAN"}))))),Object(Yn.k)(e)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(hi,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SNMP"})),c.a.createElement(fi,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_LOCATION",name:"snmp_location",full:!0})),c.a.createElement(fi,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_CONTACT",name:"snmp_contact",full:!0}))),L&&c.a.createElement(c.a.Fragment,null,c.a.createElement(hi,{weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_POWER_SOURCE"})),c.a.createElement(fi,{marginBottom:A?24:0},c.a.createElement(yi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.AUTO},c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_AUTO"}))),c.a.createElement(yi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.POE_8023AF},c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_POE_8023AF"}))),c.a.createElement(yi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.POE_INJECTOR},c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_POE_INJECTOR"}))))),A&&c.a.createElement(M.a,{justifyContent:"space-between",alignItems:"flex-start"},c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(Ti,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE_DESCRIPTION"}))),c.a.createElement(Jn.Field,{type:"checkbox",name:"outdoor_mode_override",value:t.outdoor_mode_override===O.OutdoorModeOverride.ON,afterChange:e=>{d("outdoor_mode_override",e?O.OutdoorModeOverride.ON:O.OutdoorModeOverride.OFF)}}))))}),Ni=a(128);const Li=gn.a.object().shape({type:gn.a.string(),ip:gn.a.string().when("type",{is:"static",then:Qa.b.required(c.a.createElement(F.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),netmask:gn.a.string().when("type",{is:"static",then:Qa.c.required(c.a.createElement(F.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}).when("ip",(e,t)=>e?t.test("is-valid-subnet-mask",c.a.createElement(F.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"}),t=>Object(Ni.h)(e,t)):t),gateway:gn.a.string().when("type",{is:"static",then:Qa.b.required(c.a.createElement(F.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns1:gn.a.string().when("type",{is:"static",then:Qa.b.required(c.a.createElement(F.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns2:Qa.b.when("dns1",{is:e=>!!e,then:Qa.b}),bonding_enabled:gn.a.boolean(),dnssuffix:gn.a.string(),mgmt_network_id:gn.a.string(),snmp_location:gn.a.string(),snmp_contact:gn.a.string()}),xi=Object(l.c)("div")`
  margin-bottom: 24px;
`,Vi=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,wi=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,Fi=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Mi=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{Object(O.getIsUsl8Mp)(e);const{config_network:t,ip:a,switch_vlan_enabled:n,lte_limit_enabled:r,lte_limit:c}=e,{type:l="dhcp",ip:i=a||"",netmask:o="",gateway:E="",dns1:s="",dns2:m="",dnssuffix:d="",bonding_enabled:_=!1}=t;return{config_network:{type:l,ip:i,netmask:o,gateway:E,dns1:s,dns2:m,dnssuffix:d,bonding_enabled:_},switch_vlan_enabled:n||!1}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Qa.a.object().shape({config_network:Li,lte_limit_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_LTE_DATA_LIMIT"),lte_limit:Qa.a.number().integer().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT").when("lte_limit_enabled",{is:!0,then:Qa.a.number().min(1).required().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT")})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:n,resetForm:l,isValid:i,initialValues:E,activeItem:s,formName:m="network"})=>{const d=Object(o.useDispatch)(),_=Object(O.getIsUapUswHybrid)(s),u=Object(O.getIsUsl8Mp)(s);return Object(r.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),Object(r.useEffect)(()=>(d(Object(N.h)({[m]:()=>{var e;const t={config_network:"static"===n.config_network.type?n.config_network:{type:"dhcp",bonding_enabled:n.config_network.bonding_enabled}};return _&&(t.switch_vlan_enabled=n.switch_vlan_enabled,E.switch_vlan_enabled&&!n.switch_vlan_enabled&&(null===(e=s.port_overrides)||void 0===e?void 0:e.length)&&(t.port_overrides=s.port_overrides.map(({portconf_id:e,...t})=>t))),t}})),d(Object(N.j)({[m]:()=>l({values:n})})),d(Object(N.i)({[m]:l})),()=>{d(Object(N.h)({[m]:null})),d(Object(N.j)({[m]:null})),d(Object(N.i)({[m]:null}))}),[d,l,n,m,s.port_overrides,E.switch_vlan_enabled,_]),c.a.createElement(c.a.Fragment,null,c.a.createElement(xi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Fi})),"static"===n.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(Vi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),c.a.createElement(Vi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),c.a.createElement(M.a,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(Vi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),c.a.createElement(Vi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),c.a.createElement(M.a,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(Vi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),c.a.createElement(Vi,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0})))),(Object(O.isUapAcHd)(s)||Object(O.isUapAcShd)(s)||Object(O.isUapXg)(s)||Object(O.isUwbXg)(s))&&c.a.createElement(M.a,{marginBottom:16,justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_AGGREGATION"})),c.a.createElement(tn.a,{name:"config_network.bonding_enabled",type:"checkbox"})),_&&c.a.createElement(c.a.Fragment,null,c.a.createElement(wi,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_VLAN"})),c.a.createElement(M.a,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_VLAN"})),c.a.createElement(tn.a,{type:"checkbox",name:"switch_vlan_enabled"}))),u&&!1)}),Ui=a(2898);const ki=Object(l.c)(M.a)`
  margin-bottom: 20px;
`,zi=Object(l.c)(V.a)`
  margin-bottom: 6px;
`,Bi=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e,formName:t="screen"})=>({[t]:{led_override:e.led_override||O.LedOverride.ON,led_override_color_brightness:e.led_override_color_brightness||O.DEFAULT_LED_BRIGHTNESS,led_override_color:e.led_override_color||O.DEFAULT_LED_COLOR}}),validationSchema:Qa.a.object().shape({led_override:Qa.a.string(),led_override_color_brightness:Qa.a.number(),led_override_color:Qa.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Wi=Object(ht.compose)(F.f,Bi)(({activeItem:e,setFormDirty:t,values:a,dirty:n,resetForm:l,setFieldValue:i,formName:E="screen",disableLedOverrideField:s,disableLedOverrideColor:m,disableLedBrightnessField:d,intl:_})=>{const u=Object(o.useDispatch)(),b=Object(Yn.j)(e);return Object(r.useEffect)(()=>{t(E,n)},[t,n,E]),Object(r.useEffect)(()=>(u(Object(N.h)({[E]:()=>{const e=Object(p.a)(a,E);return{...a[E],...e}}})),u(Object(N.j)({[E]:()=>{l({values:a})}})),u(Object(N.i)({[E]:l})),()=>{u(Object(N.h)({[E]:null})),u(Object(N.j)({[E]:null})),u(Object(N.i)({[E]:null}))}),[u,E,l,a]),c.a.createElement(c.a.Fragment,null,!s&&c.a.createElement(ki,{justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_LED"}))),c.a.createElement(tn.a,{type:"checkbox",name:E+".led_override",value:a[E].led_override===O.LedOverride.ON,afterChange:e=>{i(E+".led_override",e?O.LedOverride.ON:O.LedOverride.OFF)}})),!d&&b&&c.a.createElement(c.a.Fragment,null,c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"})),c.a.createElement(ki,null,c.a.createElement(ii.a,{size:"large",value:a[E].led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(V.a,{color:"secondary",size:"body"},e,"%"),onChange:e=>{i(E+".led_override_color_brightness",+e.target.value)}}))),!m&&b&&c.a.createElement(ki,{justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(zi,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"})),c.a.createElement(Ui.a,{color:a[E].led_override_color,variant:"block",onChange:e=>{i(E+".led_override_color","hex"in e?e.hex:void 0)},hexLabel:_.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:c.a.createElement(de.a,{variant:"inline",onClick:()=>{i(E+".led_override_color",O.DEFAULT_LED_COLOR)}},c.a.createElement(F.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))});const Hi=Object(l.c)(de.a)`
  padding: 0;
  white-space: nowrap;
`;var Gi=({device:e})=>{const{locating:t}=e,a=Object(o.useDispatch)(),n=Object(O.getDeviceState)(e);return c.a.createElement(Hi,{variant:"link",onClick:t=>{if(t.preventDefault(),t.stopPropagation(),Object(O.isUBB)(e)){const{peer_ubb:t}=e;t&&a(Object(O.locateDevice)(t))}a(Object(O.locateDevice)(e))},disabled:n!==O.DeviceState.CONNECTED},c.a.createElement(F.c,{id:t?"DEVICE_ACTIONS_LOCATE_STOP":"DEVICE_ACTIONS_LOCATE_DEVICE"}))};const Yi=Object(l.c)(de.a)`
  padding: 0;
`;var $i=({device:e})=>{const t=Object(O.getDeviceState)(e),a=Object(o.useSelector)(Gl.D)("API_DEVICE_RESTART"),n=Object(o.useDispatch)();return a&&c.a.createElement(Yi,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const a=Object(O.isSwitch)(e)&&Object(sr.isPoeSupported)(e),r=a||Object(O.isGateway)(e),c=!e.bypassConfirmRestart;n(r||c?Object(O.confirmDeviceRestart)({name:e.name||e.mac,withHardReboot:a,onConfirm:(t="soft")=>{n(Object(O.restartDevice)(e,t))},onCancel:()=>{n(Object(Ut.e)())}}):Object(O.restartDevice)(e))},disabled:t!==O.DeviceState.CONNECTED},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_RESTART"}))};const Ki=Object(l.c)(de.a)`
  padding: 0;
`;var Xi=({device:e})=>{const t=Object(O.getDeviceState)(e),a=Object(o.useDispatch)();return c.a.createElement(Ki,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation(),a(Object(O.confirmDeviceProvision)({name:e.name||e.mac,onConfirm:()=>{a(Object(O.forceProvisionDevice)(e))},onCancel:()=>{a(Object(Ut.e)())}}))},loader:t===O.DeviceState.PROVISIONING?"spinner":null},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_PROVISION"}))},qi=a(379),Zi=a(77),Ji=a(227),Qi=a(112);const eo=Object(l.c)(de.a)`
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
`;var ro=Object(F.f)(({device:e,showOnlyIfInactive:t,intl:a})=>{const{mac:n,name:l,adopted:i}=e,E=Object(o.useDispatch)(),[s,m]=Object(r.useState)(!1),d=Object(o.useSelector)(Zi.selectEnv),_=Object(o.useSelector)(Ji.a),u=Object(Qi.b)(d),b=Object(O.isUlte)(e),p=Object(O.isDeactivatedForNonPayment)(e),I=Object(O.getDeviceState)(e),g=b&&(!t||[O.DeviceState.UNKNOWN,O.DeviceState.FIRMWARE_MISMATCH,O.DeviceState.ADOPTION_FAILED,O.DeviceState.DISCONNECTED].includes(I)),R=Object(r.useCallback)(async()=>{try{await E(Object(qi.c)(n,{successToast:{icon:ca.a.success,message:"DEVICE_ULTE_REMOVED_SUCCESS"}})),E(Object(O.deleteDeviceFromStore)(n)),E(Object(v.deleteUnifiDeviceFromStore)(n)),E(Object(N.f)()),p||setTimeout(()=>{E(Object(na.c)({duration:0,type:ca.a.warning,title:a.formatMessage({id:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_TITLE"}),message:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_BODY",icon:c.a.createElement(ao,{deviceType:at.DeviceType.AP,deviceModel:at.DeviceModel.ULTE,publicImagePath:_,filesMap:"SETUP"}),showStatusBall:!0,primaryButton:{label:a.formatMessage({id:"ON_LOAD_WARNING_PAYMENT_ACTION_CANCEL_SUBSCRIPTIONS"}),onClick:()=>window.open(`https://${u}/subscriptions`,"_blank")},className:no},"LTE_SUBSCRIPTION_NEEDS_ATTENTION"))},10),E(Object(Ut.e)())}catch(e){m(!1)}},[n,p]),C=Object(r.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),m(!0);const t={name:l&&l!==n?l:a.formatMessage({id:"DEVICE_TYPE_ULTE"})};p?R():E(Object(er.a)({title:"DEVICE_ULTE_REMOVE_HEADER",titleValues:t,message:"DEVICE_ULTE_REMOVE_DETAILS",messageValues:t,confirmButtonProps:{text:c.a.createElement(F.c,{id:"DEVICE_ACTIONS_REMOVE"}),variant:"primary"},children:c.a.createElement(to,null,c.a.createElement(F.c,{id:"DEVICE_ULTE_REMOVE_INFO"})),onConfirm:R,onCancel:()=>{E(Object(Ut.e)()),m(!1)}}))},[n,l,p]);return g&&i?c.a.createElement(eo,{variant:"link",onClick:C,loader:s?"spinner":null},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_REMOVE_LABEL"})):null});const co=Object(l.c)(de.a)`
  padding: 0;
`;var lo=Object(n.o)(({device:e,history:t,location:a})=>{const n=Object(o.useDispatch)(),[l,i]=Object(r.useState)(!1),E=Object(r.useCallback)(r=>{r.preventDefault(),r.stopPropagation(),n(Object(O.confirmDeviceForget)({name:Object(Y.d)(e),onConfirm:async()=>{i(!0);try{await n(Object(qi.c)(e.mac)),n(Object(v.deleteUnifiDeviceFromStore)(e.mac)),n(Object(O.deleteDeviceFromStore)(e.mac)),i(!1),n(Object(N.f)()),t.push(a.pathname.split("/properties")[0])}catch(r){i(!1)}},onCancel:()=>{n(Object(Ut.e)()),i(!1)}}))},[e.mac,e.name,n,t,a.pathname]);return c.a.createElement(co,{variant:"link",onClick:E,loader:l?"spinner":null},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"}))});const io=Object(l.c)(de.a)`
  padding: 0;
`;var oo=({device:e})=>{const t=Object(o.useDispatch)();return c.a.createElement(io,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(O.downloadDeviceInfo)(e))}},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO"}))};const Eo=Object(l.c)(de.a)`
  padding: 0;
`;var so=({device:e})=>{const t=Object(o.useDispatch)(),[a,n]=Object(r.useState)(!1);return c.a.createElement(Eo,{variant:"link",onClick:async()=>{n(!0),await t(Object(O.openDeviceDebugTerminal)({device:e})),n(!1)},disabled:a},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DEBUG"}))};const mo=Object(l.c)(de.a)`
  padding: 0;
`;var _o=({device:e})=>{const t=Object(o.useDispatch)(),a=Object(r.useMemo)(()=>Object(O.getDeviceState)(e),[e]),[n,l]=Object(r.useState)(!1);return c.a.createElement(mo,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(O.confirmDeviceUpgrade)({titleValues:{deviceName:e.name},messageValues:{deviceName:e.name,fromVersion:e.version,toVersion:e.upgrade_to_firmware},onConfirm:()=>{l(!0),t(Object(O.upgradeDevice)(e,!0)),l(!0)},onCancel:()=>{t(Object(Ut.e)()),l(!1)},isDowngrade:!0}))},disabled:n||a!==O.DeviceState.CONNECTED},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DEVICE"}))},uo=a(2018);const bo=Object(l.c)(de.a)`
  padding: 0;
`;function po({device:e}){const{isUbbAlignmentToolModalClosed:t}=Object(o.useSelector)(Gl.P),{is_aligning:a}=e,n=Object(o.useDispatch)(),r=Object(O.getDeviceState)(e),l=Object(uo.a)(_e.a.feStaticAssets+"/videos");return c.a.createElement(bo,{variant:"link",onClick:r=>{r.preventDefault(),r.stopPropagation(),a||t||!l||n(Object(Ut.g)({modalType:kt.a.UBB_ALIGNMENT_TOOL,modalProps:{closeModal:()=>{n(Object(Gl.k)({isUbbAlignmentToolModalClosed:!0})),n(Object(Ut.e)())}}})),n(Object(O.alignDevice)(e))},disabled:r!==O.DeviceState.CONNECTED},c.a.createElement(F.c,{id:a?"DEVICE_ACTIONS_ALIGNMENT_DISABLE":"DEVICE_ACTIONS_ALIGNMENT_ENABLE"}))}var Oo=a(82);const Io=Object(l.c)(M.a)`
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
`;var Ro=()=>c.a.createElement(Io,null,c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(go,null),c.a.createElement(F.c,{id:"DEVICE_STATE_UPGRADING_INFO_WARNING"})));const vo=Object(l.c)("div")`
  position: relative;
`,Co=Object(l.c)(V.a,{shouldForwardProp:e=>"removeTopMargin"!==e})`
  margin: ${({removeTopMargin:e})=>(e?"0":"17px")+" 0 20px 0;"};
  display: block;
`,ho=Object(l.c)(de.a)`
  padding: 0;
`,To=Qa.a.object().shape({url:Qa.a.string().label("COMMON_LABEL_LOCATION_URL").url(c.a.createElement(F.c,{id:"COMMON_VALIDATION_VALID_URL"})).required()});var fo=Object(ht.compose)(Object(o.connect)(e=>({mgmtSettings:Object(Ei.selectMgmtSettings)(e)}),{confirmDeviceCustomUpgrade:O.confirmDeviceCustomUpgrade,upgradeExternalDevice:O.upgradeExternalDevice,hideModal:Ut.e}),Object(Ja.g)({validationSchema:To,handleSubmit:({url:e},{props:{confirmDeviceCustomUpgrade:t,upgradeExternalDevice:a,device:n,hideModal:r}})=>{t({onConfirm:()=>{a(n,e)},onCancel:()=>{r()}})}}))(({handleSubmit:e,whiteOutActive:t,mgmtSettings:{auto_upgrade:a},removeTopMargin:n=!1})=>c.a.createElement(vo,null,t&&c.a.createElement(Ro,null),c.a.createElement(Co,{color:"secondary",size:"body",removeTopMargin:n},c.a.createElement(F.c,{id:a?"DEVICE_ACTIONS_CUSTOM_UPGRADE_NOT_AVAILABLE":"DEVICE_ACTIONS_CUSTOM_UPGRADE_INFO"})),c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(tn.a,{full:!0,name:"url",label:"COMMON_LABEL_LOCATION_URL",placeholder:"DEVICE_ACTIONS_CUSTOM_UPGRADE_PLACEHOLDER",disabled:a,type:"input"}),c.a.createElement(M.a,{marginTop:10,justifyContent:"flex-start"},c.a.createElement(ho,{name:"customUpgrade",variant:"link",type:"submit",onClick:e,disabled:!!a},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE"})))))),Do=a(1133);const Po=Object(l.c)(de.a)`
  padding: 0;
`;var yo=({device:e,sourceDevice:t})=>{const a=Object(o.useDispatch)(),[n,l]=Object(r.useState)(!1);return c.a.createElement(Po,{variant:"link",onClick:n=>{n.preventDefault(),n.stopPropagation(),a(Object(O.confirmDeviceCloneConfig)({name:e.name||e.mac,sourceName:t.name||t.mac,onConfirm:async()=>{l(!0),await a(Object(O.cloneConfig)(e,t)),l(!1)},onCancel:()=>{l(!1),a(Object(Ut.e)())}}))},disabled:n||!t.mac},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION"}))};const So=l.a`
  min-height: 40px;
`,Ao=l.a`
  li {
    div {
      display: block !important;
    }
  }
`,jo=Object(l.c)(w.W)`
  color: ${Oo.m};
  margin: 4px 0 0 0;
`;var No=Object(F.f)(({intl:e,device:t})=>{const a=Object(o.useSelector)(O.selectDevicesData),[n,l]=Object(r.useState)(""),i=a.find(e=>e.mac===n)||{mac:null,name:null},E=a.reduce((e,a)=>(a.adopted&&a.state!==O.DEVICE_STATE_IDS.ADOPTING&&a.mac!==t.mac&&a.model===t.model&&e.push({label:a.name||a.mac,value:a.mac}),e),[]);return E.length||E.push({image:jo,label:c.a.createElement(F.c,{id:"COMMON_DEVICES_NOT_FOUND"}),value:"notFound",disabled:!0}),c.a.createElement("div",null,c.a.createElement(Do.a,{searchable:!0,placeholder:e.formatMessage({id:"DEVICE_ACTIONS_COPY_CONFIGURATION_PLACEHOLDER"}),value:n,onChange:e=>{l(e.value)},options:E,width:"100%",className:So,optionContainerClassName:Ao}),c.a.createElement(M.a,{justifyContent:"flex-start"},c.a.createElement(yo,{device:t,sourceDevice:i})))});const Lo=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,xo=Object(l.c)(M.a)`
  ${({theme:e})=>`\n    border-bottom: 1px solid ${e.motifPalette.ui04};\n    margin-bottom: ${e.spacing["spacing-xl"]};\n    padding-bottom: ${e.spacing["spacing-xl"]};\n  `};
`,Vo=Object(l.c)(M.a)`
  ${({noMargin:e=!1,theme:t})=>!e&&"margin-top: "+t.spacing["spacing-m"]};
`;var wo=({activeItem:e,disableLocate:t,disableRestart:a,disableDebug:n,disableForget:l})=>{const i=Object(o.useSelector)(t=>Object(O.selectDeviceData)(t,e.mac)),E=Object(o.useSelector)(Object(O.selectIsUcoreDevice)(e)),s=Object(O.getRawDeviceState)(i)===at.DeviceState.UPGRADING,m=Object(O.isUlte)(i),d=Object(O.isLteWithSubscription)(i),_=(Object(O.isUap6mp)(i),Object(r.useMemo)(()=>Object(O.isDeviceDowngradable)(i),[null==i?void 0:i.version,null==i?void 0:i.upgrade_to_firmware]));return c.a.createElement(c.a.Fragment,null,!t&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE_DESCRIPTION"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement(Gi,{device:i}))),i.type===at.DeviceType.UBB&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_ALIGNMENT"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_ALIGNMENT_INFO"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement(po,{device:i}))),!a&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_RESTART"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_RESTART_INFO"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement($i,{device:i}))),(i.type===at.DeviceType.AP||i.type===at.DeviceType.SWITCH)&&!m&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),c.a.createElement(No,{device:i})),!E&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),c.a.createElement(Vo,{noMargin:!0,alignSelf:"flex-end"},c.a.createElement(fo,{whiteOutActive:s,device:i,removeTopMargin:!0}))),_&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DOWNGRADE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DESCRIPTION"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement(_o,{device:i}))),c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_PROVISION_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_PROVISION_INFO"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement(Xi,{device:i}))),c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_INFO"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement(oo,{device:i}))),!n&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DEBUG_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_DEBUG_INFO"})),c.a.createElement(Vo,{alignSelf:"flex-start"},c.a.createElement(so,{device:i}))),!l&&c.a.createElement(xo,{flexDirection:"column"},c.a.createElement(Lo,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_FORGET_INFO"})),c.a.createElement(Vo,{alignSelf:"flex-start"},d?c.a.createElement(ro,{device:i}):c.a.createElement(lo,{device:i}))))};const Fo=Object(l.c)("div",{shouldForwardProp:e=>"portsTable"!==e})`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-gap: 0 15px;
  ${({theme:e,portsTable:t})=>t?`\n  border-bottom: 1px solid ${e.motifPalette.ui04};\n  padding-bottom: 15px;\n  margin: 15px 0 20px;\n  `:`\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid ${e.motifPalette.ui04};\n  `}
`,Mo=Object(l.c)(V.a)`
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
`;function ko({stp_version:e}){switch(e){case"rstp":return c.a.createElement(Mo,{size:"label"},c.a.createElement(w.v,{style:{width:9,height:9}}),c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_RSTP_DISCARDING"}));case"stp":return c.a.createElement(Mo,{size:"label"},c.a.createElement(w.v,{style:{width:9,height:9}}),c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_STP_BLOCKING"}));case"disabled":return c.a.createElement(Mo,{size:"label"},c.a.createElement(w.v,{style:{width:9,height:9}}),c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISABLED"}));default:return""}}function zo({deviceData:e,portsTable:t=!1}){const{model:a,port_table:n,stp_version:l}=e;return Object(r.useMemo)(()=>{const a=Object(O.getPortSpeeds)(e),{isPoePlusPlusSupported:n,isPoePlusSupported:r,isPoeAutoSupported:i,isPoePassthroughSupported:o,isPoePassive24Supported:E}=Object(O.getDevicePoeAvailability)(e),s=Object(O.getIsInWallAp)(e),m=e=>O.SWITCH_PORT_SPEED_COLORS[e]||"transparent",d=Object(O.getCanBePoweredByPoe)(e),_=Object(O.isUdmBase)(e)||Object(O.isUdr)(e);return c.a.createElement(Fo,{portsTable:t},a.sort((e,t)=>t-e).map(e=>c.a.createElement(Mo,{size:"label",key:e},c.a.createElement(Uo,{background:m(e)}),c.a.createElement(F.c,{id:Object(O.hasGbpsSpeedsOnly)([e])?"DEVICE_PORT_STATE_GBE":"DEVICE_PORT_STATE_MBE",values:{speed:Object(O.getPortLedSpeedsParsed)(e)}}))),c.a.createElement(Mo,{size:"label"},c.a.createElement(Uo,{background:O.SWITCH_PORT_SPEED_COLORS.DEFAULT}),c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})),c.a.createElement(Mo,{size:"label"},c.a.createElement(Uo,{background:"transparent",color:O.SWITCH_PORT_SPEED_COLORS.DEFAULT}),c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISABLED"})),Object(O.hasSwitch)(e)&&c.a.createElement(Mo,{size:"label"},c.a.createElement(w.K,{style:{width:9,height:9}}),c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_MIRROR"})),(s||Object(sr.isPoeSupported)(e)||d)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Mo,{size:"label"},c.a.createElement(w.Bb,{size:"medium"}),n&&c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_POE_PLUS_PLUS"}),(r||d)&&c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_POE_PLUS"}),(i&&!r||o)&&c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_POE"}),E&&c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_POE_PASSIVE"}))),!_&&c.a.createElement(ko,{stp_version:l}))},[n,a,l])}var Bo=a(2857);const Wo=Object(l.c)(M.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,Ho=({spacing:e})=>l.a`
  &:not(:first-child) {
    margin-top: ${e};
  }
`;function Go({deviceData:e,portSizeOverride:t,...a}){const{port_table:n}=e,{diagram:r}=Object(ur.E)(e),l=r?Object(ur.c)(r,e):Object(ur.f)(e);if(!l||0===l.length)return c.a.createElement(Wo,null,c.a.createElement(w.W,{isActive:!0,className:"mr-2"}),c.a.createElement(F.c,{id:"DEVICE_DIAGRAM_MISSING"}));const i=Object(Bo.a)(l.map(e=>e.length)),o=Object.values(gr).find(e=>i<=e.threshold);return l.map((r,l)=>c.a.createElement(M.a,{"align-items":"flex-end",key:"PortLayoutRow-"+(l+1),className:Ho(o),flex:"1 1 "+(t||o.size)},r.map((r,i)=>{const E=`Port-${l+1}-${i+1}`,s=r&&n&&Object(ur.t)(r.portNumber,e);return c.a.createElement(jr,Object.assign({cellData:s,deviceData:e,key:E},a,{portSize:o,portSizeOverride:t}))})))}const Yo=Object(l.c)("div")`
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
`,Xo=Object(l.c)(M.a)`
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
`;function Qo({deviceData:e,hideAnomalies:t,...a}){const l=Object(n.k)(),{portAnomalies:i,totalAnomalies:o}=Object(dr.b)(e.port_table,O.switchAnomaliesMap),E=1===o,s=Object(r.useCallback)(e=>l.push("ports/"+e.toString()),[l]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Yo,null,c.a.createElement($o,null,c.a.createElement(Go,Object.assign({deviceData:e},a))),c.a.createElement(zo,{deviceData:e})),!t&&!!o&&c.a.createElement(Ko,null,E?c.a.createElement(c.a.Fragment,null,c.a.createElement(Xo,{alignItems:"center"},c.a.createElement(Zo,null),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:i[0].anomalies[0]+"_PROBLEM"}),c.a.createElement(Jo,{variant:"inline",onClick:()=>s(i[0].portNumber)},c.a.createElement(F.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:i[0].portNumber}})))),c.a.createElement(Xo,{alignItems:"center"},c.a.createElement(qo,null),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:i[0].anomalies[0]+"_SOLUTION"})))):c.a.createElement(Xo,{alignItems:"center"},c.a.createElement(Zo,null),c.a.createElement(V.a,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_MULTIPLE_ANOMALIES",values:{count:o}}),i.map((e,t)=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Jo,{variant:"inline",onClick:()=>s(e.portNumber)},c.a.createElement(F.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:e.portNumber}})),t===i.length-1?".":","))))))}const eE=Object(l.c)(de.a)`
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
`,nE=e=>[{id:"portName",minWidth:80,label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({portName:e})=>c.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},e)},{id:"portStatus",minWidth:120,label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:({portStatus:t})=>c.a.createElement(Pe.g,{justifyContent:"space-between",width:"100%",alignItems:"center"},c.a.createElement(V.a,{color:"secondary",size:"body",truncate:!0},t),!e&&c.a.createElement(tE,{size:"small"}))}];var rE=function({deviceData:e,...t}){const a=Object(n.k)(),l=Object(O.isUdmPro)(e)||Object(O.isUdmProSe)(e),i=Object(O.isUdm)(e),E=Object(o.useSelector)(un.selectNetworkGroups),{path:s}=Object(n.n)(),{site:m,page:d,id:_,panel:u}=Object(n.m)(),b=e=>Object(n.i)(s,{site:m,page:d,id:_,panel:u,subPanel:"ports",subPanelId:e}),p=Object(r.useCallback)(({port_idx:e,masked:t})=>!t&&a.push(b(null==e?void 0:e.toString())),[a]),I=Object(r.useMemo)(()=>nE(),[]),g=Object(r.useMemo)(()=>Lr(e,E,t),[e,E,t]);if(i){const n=((e,t,a)=>Lr(e,t,a).filter(e=>!e.isWanPort))(e,E,t),r=((e,t,a)=>Lr(e,t,a).filter(e=>e.isWanPort))(e,E,t),i=nE(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PORTS_TABLE_LAN_PORTS"})),c.a.createElement(fe.a,{hideCellOverflow:!1,columns:I,rowHeight:35,disableColumnFilters:!0,items:n,onRowClick:p}),c.a.createElement(aE,null),c.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PORTS_TABLE_WAN_PORTS"})),c.a.createElement(fe.a,{hideCellOverflow:!1,columns:i,rowHeight:35,disableColumnFilters:!0,disableTextPointer:l,disableSelection:l,items:r,onRowClick:l?null:()=>a.push(b(oe.WAN))}),l&&c.a.createElement(eE,{variant:"link",onClick:()=>a.push(b(oe.WAN)),Icon:c.a.createElement(w.ub,{isActive:!0})},c.a.createElement(F.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"})))}return c.a.createElement(fe.a,{hideCellOverflow:!1,columns:I,rowHeight:35,disableColumnFilters:!0,items:g,onRowClick:p})};function cE({activeItem:e,hideDiagramKeys:t,...a}){const[n]=Object(r.useState)("DevicePorts-"+Date.now()),l=Object(o.useDispatch)();return Object(r.useEffect)(()=>{const e={style:al.a.overflow,styleName:"overflow",dependant:n};return l(Object(tl.c)(e)),()=>l(Object(tl.b)(e))},[]),c.a.createElement(rE,Object.assign({deviceData:e},a))}const lE=Object(l.c)(M.a)`
  padding: 0 32px;
`;var iE=Object(ht.compose)(Za(["general","lcmScreen","screen","services","network"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),_=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),{_id:u,mac:b}=e,p=Object(o.useDispatch)(),I=Object(Yn.i)(e),g=I?"lcmScreen":"screen";return c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(lE,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>c.a.createElement(cE,{activeItem:e})},{id:g,label:I?c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}):c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_LED"}),renderContent:()=>I?c.a.createElement(Ri,{activeItem:e,setFormDirty:t,setFormInvalid:a}):c.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;p(Object(O.updateDeviceWithIdEndpoint)(a,u,b,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});const oE=Object(l.c)("div")`
  margin-bottom: 32px;
  th {
    padding-right: 0;

    &:first-child {
      margin-left: 0px;
    }
  }
`,EE=Object(l.c)("div")`
  margin-top: 12px;
`,sE=[{id:"name",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_NETWORK"})),minWidth:85,renderCell:({name:e})=>c.a.createElement(V.a,{size:"body"},e)},{id:"ip",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_WORD_IP"})),minWidth:60,renderCell:({ip:e})=>c.a.createElement(V.a,{size:"body"},e)},{id:"tx_bytesInfo",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_WORD_SENT"})),renderCell:e=>c.a.createElement(me.a,{size:"body",type:"bytes",input:e.tx_bytes}),maxWidth:60},{id:"rx_bytesInfo",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_WORD_RECEIVED"})),renderCell:e=>c.a.createElement(me.a,{size:"body",type:"bytes",input:e.rx_bytes}),minWidth:85},{id:"num_sta",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_WORD_CLIENTS"})),minWidth:60,renderCell:({num_sta:e})=>c.a.createElement(V.a,{size:"body"},e)}];var mE=({activeItem:e})=>{const{network_table:t}=e;return c.a.createElement(oE,null,c.a.createElement(fe.a,{items:t,disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,idField:"_id",columns:sE,renderFooter:()=>t.length>0?c.a.createElement(EE,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:t.length}})):c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"})}))};var dE=({activeItem:{displayable_version:e},flexProps:t})=>e?c.a.createElement(Zt,{flexProps:t},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_VERSION"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;const _E=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`;function uE({activeItem:{mac:e,model:t,uptime:a},activeItem:n}){const r=Object(_r.c)("LAN",n),l=Object(_r.i)(n);return c.a.createElement(_E,null,c.a.createElement(dE,{activeItem:n}),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"})),c.a.createElement(V.a,{size:"body"},r)),a>0&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),c.a.createElement(V.a,{size:"body"},Object(Xt.c)(a,!0))),l.boardPhy&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_GATEWAY_BOARD_PHY"})),c.a.createElement(V.a,{size:"body"},l.boardPhy)),l.boardCpu&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_GATEWAY_BOARD_CPU"})),c.a.createElement(V.a,{size:"body"},l.boardCpu)),l.cpu&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_WORD_CPU"})),c.a.createElement(V.a,{size:"body"},l.cpu)),l.phy&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_WORD_PHY"})),c.a.createElement(V.a,{size:"body"},l.phy)))}var bE=a(542);const pE=({networkgroup:e,uplinkAttrs:t})=>{var a,n,r,l,i,E,s;const m=null===(a=Object(o.useSelector)(g.selectIspInfoItems))||void 0===a?void 0:a.find(t=>t.networkgroup===e),{ip:d,speed:_,rx_packets:u,rx_bytes:b,tx_packets:p,tx_bytes:O,"rx_bytes-r":I,"tx_bytes-r":R}=t;return c.a.createElement(Pe.g,{height:"100%",flexDirection:"column"},d?c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),c.a.createElement(V.a,{size:"body"},d)):null,c.a.createElement(il,{portSpeed:_}),(null===(r=null===(n=null==m?void 0:m.details)||void 0===n?void 0:n.service_provider)||void 0===r?void 0:r.name)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_WAN_ISP"})),c.a.createElement(V.a,{size:"body"},m.details.service_provider.name)),((null===(l=null==m?void 0:m.configuration)||void 0===l?void 0:l.wan_dns1)||(null===(i=null==m?void 0:m.configuration)||void 0===i?void 0:i.wan_dns2))&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null===(E=null==m?void 0:m.configuration)||void 0===E?void 0:E.wan_dns1)),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null===(s=null==m?void 0:m.configuration)||void 0===s?void 0:s.wan_dns2))),u&&b?c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{size:"body"},Object(pa.a)(u,{spacer:" "})," / ",Object(Kt.c)(b,"bytes","IEC"))):null,p&&O?c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),c.a.createElement(V.a,{size:"body"},Object(pa.a)(p,{spacer:" "})," / ",Object(Kt.c)(O,"bytes","IEC"))):null,c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),c.a.createElement(V.a,{size:"body"},void 0!==I?c.a.createElement(me.a,{type:"bytes",input:I,options:"bitrate",size:"body"}):"-")),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),c.a.createElement(V.a,{size:"body"},void 0!==R?c.a.createElement(me.a,{type:"bytes",input:R,options:"bitrate",size:"body"}):"-")))};var OE=e=>Object.values(bE.a).reduce((t,a)=>{const n=e.port_table&&e.port_table.filter(e=>e.up),r="wan1"===a?"WAN":"WAN2",l="wan1"===a?"WAN":"WAN 2",i=Object(_r.f)(r,e)||"",o=n&&n.find(e=>e.ifname===i),E=Object(ur.ic)(e,a);return o&&E&&t.push({id:a,label:c.a.createElement("span",null,l),renderContent:()=>c.a.createElement(pE,{networkgroup:r,uplinkAttrs:E,activeItem:e})}),t},[]);const IE=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;function gE({activeItem:e,...t}){const[a]=Object(r.useState)("SwitchPorts-"+Date.now()),n=Object(o.useDispatch)(),l={style:al.a.overflow,styleName:"overflow",dependant:a};Object(r.useEffect)(()=>(n(Object(tl.c)(l)),()=>n(Object(tl.b)(l))),[]);const i=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),E=Object(O.isUxg)(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),i&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Rl,{activeItem:e}),c.a.createElement(IE,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(uE,{activeItem:e})},...OE(e),...E?[{id:"downlinks",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(gl,Object.assign({activeItem:e},t))}]:[],{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(mE,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})))}var RE=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(r.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac,De.OBJECT.GW))},[e.mac,t]),c.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const vE=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,CE=Object(l.c)("div")`
  margin-bottom: 16px;
`;var hE=({activeItem:e})=>c.a.createElement(vE,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),c.a.createElement(CE,null),c.a.createElement(RE,{activeItem:e})),TE=a(2858);var fE=({device:e,isOwner:t,...a})=>{const n=Object(o.useSelector)(Zi.selectEnv),r=Object(dt.a)(e,"unifi_care.state");let l,i;if(r===at.DeviceUnifiCareState.REPLACING?(l=Object(dt.a)(e,"unifi_care.tracking_url"),i=t?"DEVICE_ACTIONS_UNIFI_CARE_TRACK":"DEVICE_ACTIONS_UNIFI_CARE_SHIPPED"):r===at.DeviceUnifiCareState.RMA_IN_PROGRESS?(l=Object(dt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_RMA"):t&&(l=Object(dt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_REPLACE"),!t)return i?c.a.createElement(F.c,{id:i}):null;return c.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(l||"https://"+Object(Qi.b)(n),"_blank")}},a),c.a.createElement(F.c,{id:i}))},DE=a(1998);var PE=({device:e,...t})=>{const a=Object(o.useDispatch)(),n=Object(o.useSelector)(Zi.selectEnv),r=Object(o.useSelector)(DE.selectUnifiCareDetails);return Object(L.f)(()=>Promise.resolve(a(Object(DE.fetchUnifiCareDetails)())).catch(()=>{}),c.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(Object(dt.a)(r,"links.covered_devices_url")||"https://"+Object(Qi.b)(n))}},t),c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_VIEW"})))};var yE=({device:e,...t})=>{const a=Object(o.useSelector)(Zi.selectEnv);return c.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const n=Object(dt.a)(e,"unifi_care.activation_url");window.open(n||"https://"+Object(Qi.b)(a))}},t),c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVATE"}))},SE=a(801),AE=a(797);const jE=Object(l.c)("div")`
  margin-top: 8px;
`,NE=Object(l.c)("div")`
  &:not(:empty) {
    padding-bottom: 12px;
  }
`,LE=Object(l.c)(M.a)`
  margin-left: 18px;
`,xE=Object(l.c)(M.a)`
  margin-top: 16px;
  margin-left: -8px;
`,VE=Object(l.c)(M.a)`
  margin-top: 10px;
  margin-left: -8px;
`,wE=Object(l.c)(SE.a)`
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,FE=Object(l.c)(fE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  padding: 0 8px;
`,ME=Object(l.c)(PE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  padding: 0 8px;
`,UE=Object(l.c)(yE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: bold;
  padding: 0 8px;
`,kE=Object(l.c)(TE.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: bold;
  padding: 0 8px;
  line-height: 1.15;
`,zE=Object(l.c)(M.a)`
  padding: 17px;
  border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-radius: 8px;
  margin: 16px 32px 24px 32px;
`,BE=Object(l.c)(z.a)`
  margin-right: 17px;
`,WE=Object(l.c)(M.a)`
  margin-bottom: 15px;
`;var HE=({device:e,hideWarning:t})=>{const a=Object(o.useDispatch)(),n=Object(AE.c)(e),l=!n&&Object(AE.d)(e),i=Object(AE.a)(e),E=null==i?void 0:i.getTime(),s=l&&i||n&&Object(AE.b)(e),[m,d]=Object(r.useState)(E-(new Date).getTime()),_=Object(o.useSelector)(Gl.F);return Object(r.useEffect)(()=>{let e;return m&&(e=setInterval(()=>{d(E-(new Date).getTime())},200)),()=>e&&clearInterval(e)},[E]),Object(L.f)(()=>Promise.resolve(a(Object(DE.fetchUnifiCareDetails)())).catch(()=>{}),c.a.createElement(jE,null,n&&!t&&c.a.createElement(NE,null,c.a.createElement(Fl,{activeItem:e,standalone:!0}),c.a.createElement(Vl,{activeItem:e,standalone:!0})),l&&m>0&&c.a.createElement(zE,{flexDirection:"column"},c.a.createElement(WE,{flexDirection:"row"},c.a.createElement("div",null,c.a.createElement(BE,{width:44,height:48})),c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_OFFER_ENDS",values:{eligibleExpirationTime:Object(jn.a)(Math.floor(m/1e3)).join(" ")}})))),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE_INFO"})),c.a.createElement(VE,{flexDirection:"row",alignItems:"center"},_&&c.a.createElement(UE,{device:e}),c.a.createElement(kE,{href:_e.a.unifiCare,target:"_blank"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_LEARN_MORE"})))),n&&c.a.createElement(M.a,{flexDirection:"row",alignItems:"flex-start"},c.a.createElement("div",null,c.a.createElement(z.a,{width:54,height:54})),c.a.createElement(LE,{flexDirection:"column"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVE_INFO"})),c.a.createElement(xE,{flexDirection:"row",alignItems:"center"},c.a.createElement(ME,{device:e}),c.a.createElement(FE,{isOwner:_,device:e})),s&&c.a.createElement(wE,{expires:s})))))};const GE=Object(l.c)("div")`
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
`,$E=({actionName:e,Button:t,title:a,whiteOutActive:n})=>c.a.createElement(GE,null,n&&c.a.createElement(Ro,null),c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_"+a})),c.a.createElement(YE,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:`DEVICE_ACTIONS_${e}_INFO`})),c.a.createElement(M.a,{justifyContent:"flex-end"},t));var KE=({activeItem:e})=>{const t=Object(o.useSelector)(t=>Object(O.selectDeviceData)(t,e.mac)),a=Object(O.getRawDeviceState)(t),n=Object(O.isUlte)(t),r=a===O.DeviceState.UPGRADING;return c.a.createElement(c.a.Fragment,null,(Object(O.hasActiveUnifiCare)(t)||Object(O.isUnifiCareEligible)(t))&&c.a.createElement(GE,null,c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),c.a.createElement(HE,{device:t})),c.a.createElement($E,{actionName:"LOCATE",title:"LOCATE",Button:c.a.createElement(Gi,{device:t})}),t.type===at.DeviceType.UBB&&c.a.createElement($E,{title:"ALIGNMENT",actionName:"ALIGNMENT",Button:c.a.createElement(po,{device:t})}),c.a.createElement($E,{actionName:"RESTART",title:"RESTART",Button:c.a.createElement($i,{device:t})}),c.a.createElement(GE,null,c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),c.a.createElement(fo,{device:t,whiteOutActive:r})),c.a.createElement($E,{title:"PROVISION_LABEL",actionName:"PROVISION",Button:c.a.createElement(Xi,{device:t}),whiteOutActive:r}),n?c.a.createElement($E,{title:"REMOVE",actionName:"REMOVE",Button:c.a.createElement(ro,{device:t})}):c.a.createElement($E,{title:"FORGET",actionName:"FORGET",Button:c.a.createElement(lo,{device:t})}),(t.type===at.DeviceType.AP||t.type===at.DeviceType.SWITCH)&&c.a.createElement(GE,null,c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),c.a.createElement(No,{device:t})),(t.type===at.DeviceType.AP||t.type===at.DeviceType.SWITCH||t.type===at.DeviceType.UBB)&&c.a.createElement(c.a.Fragment,null,c.a.createElement($E,{title:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL",actionName:"DOWNLOAD_DEVICE_INFO",Button:c.a.createElement(oo,{device:t})}),c.a.createElement($E,{title:"DEBUG",actionName:"DEBUG",Button:c.a.createElement(so,{device:t})})))},XE=a(243),qE=a(743),ZE=a(1732),JE=a(2022),QE=a(214);const es=Object(l.c)("div")`
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
`,rs=l.a`
  flex-direction: column;
  align-items: flex-start;
`,cs=Object(l.c)("div")`
  display: flex;

  > label:not(:first-child) {
    margin-left: 18px;
  }
`;var ls=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({usgSettings:{key:e,mss_clamp_mss:t,mss_clamp:a,offload_accounting:n,echo_server:r,offload_sch:c,offload_l2_blocking:l,lldp_enable_all:i}})=>({key:e,mss_clamp:a||Ei.USG_DEFAULTS.mss_clamp,mss_clamp_mss:t||Ei.USG_DEFAULTS.mss_clamp_mss,offload_accounting:n||Ei.USG_DEFAULTS.offload_accounting,offload_sch:c,offload_l2_blocking:l,echo_server:r||Ei.USG_DEFAULTS.echo_server,lldp_enable_all:i}),validationSchema:Qa.a.object().shape({mss_clamp:Qa.a.string(),mss_clamp_mss:Qa.a.number().when("mss_clamp",{is:QE.q.CUSTOM,then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING").required().min(Ei.USG_DEFAULTS.min_mss_clamp_mss).max(Ei.USG_DEFAULTS.mss_clamp_mss)}),offload_accounting:Qa.a.boolean(),offload_sch:Qa.a.boolean(),offload_l2_blocking:Qa.a.boolean(),echo_server:Qa.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(Rn.f,c.a.createElement(F.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}})),lldp_enable_all:Qa.a.boolean()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(e=>{const{values:t,initialValues:a,setFieldValue:n,dirty:l,isValid:i,setFormDirty:E,setFormInvalid:s,resetForm:m,usgSettings:d,activeItem:_}=e,u=Object(o.useDispatch)(),b=Object(o.useSelector)(JE.a);Object(r.useEffect)(()=>{u(Object(N.j)({services:()=>{Object(oi.a)(a,t)||u(Object(Ei.saveSettings)({key:Ei.USG_DEFAULTS.key,...t},_._id,void 0,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"}})),m({values:t})}})),u(Object(N.i)({services:m}))},[a,t]),Object(r.useEffect)(()=>{E("services",l),s("services",!i)},[t,d,l,i]);const p=e=>{e.target.checked&&n("mss_clamp",e.target.name)},O=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?n("echo_server",""):n("echo_server",e.target.name))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(es,{marginBottom:12},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),c.a.createElement(es,{marginBottom:16},c.a.createElement(cs,null,c.a.createElement(qE.a,{id:"mssClampingAuto",checked:t.mss_clamp===QE.q.AUTO,name:QE.q.AUTO,onChange:p},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"}))),c.a.createElement(qE.a,{id:"mssClampingCustom",checked:t.mss_clamp===QE.q.CUSTOM,name:QE.q.CUSTOM,onChange:p},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"}))),c.a.createElement(qE.a,{id:"mssClampingDisabled",checked:t.mss_clamp===QE.q.DISABLED,name:QE.q.DISABLED,onChange:p},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"}))))),t.mss_clamp===QE.q.CUSTOM&&c.a.createElement(es,{marginBottom:12,className:rs},c.a.createElement(ts,{htmlFor:"mss_clamp_mss"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING"}))),c.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",name:"mss_clamp_mss",id:"mss_clamp_mss"})),c.a.createElement(es,{marginBottom:12},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_HARDWARE_OFFLOAD"}))),c.a.createElement(es,{marginBottom:12},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_OFFLOAD"})),c.a.createElement(ZE.a,{id:"offload_accounting",disabled:!b,onChange:()=>{n("offload_accounting",!t.offload_accounting)},checked:!!b&&t.offload_accounting})),c.a.createElement(es,{marginBottom:12},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_SCHEDULE"})),c.a.createElement(ZE.a,{id:"offload_sch",onChange:()=>{n("offload_sch",!t.offload_sch)},checked:t.offload_sch})),c.a.createElement(es,{marginBottom:28},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_OFFLOAD_L2_BLOCKING"})),c.a.createElement(ZE.a,{id:"offload_l2_blocking",onChange:()=>{n("offload_l2_blocking",!t.offload_l2_blocking)},checked:t.offload_l2_blocking})),c.a.createElement(es,{marginBottom:12},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LLDP"}))),c.a.createElement(es,{marginBottom:28},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_LLDP_ON_ALL_INTERFACES"})),c.a.createElement(ZE.a,{id:"lldp_enable_all",onChange:()=>{n("lldp_enable_all",!t.lldp_enable_all)},checked:t.lldp_enable_all})),c.a.createElement(es,{marginBottom:12},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),c.a.createElement(es,{marginBottom:0},c.a.createElement(cs,null,c.a.createElement(qE.a,{id:"echoServerDefault",checked:t.echo_server===Ei.USG_DEFAULTS.echo_server,name:Ei.USG_DEFAULTS.echo_server,onChange:O},c.a.createElement(V.a,{size:"body"}," ",c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"}))),c.a.createElement(qE.a,{id:"echoServerIpOrHostname",checked:t.echo_server!==Ei.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:O},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"}))),c.a.createElement(ns,{message:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},c.a.createElement(as,{isActive:!0})))),t.echo_server!==Ei.USG_DEFAULTS.echo_server&&c.a.createElement(es,{marginBottom:0,marginTop:14,className:rs},c.a.createElement(ts,{htmlFor:"echo_server"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"}))),c.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"echo_server",id:"echo_server"})))});const is=Object(l.c)("div")`
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
`,Es=Object(l.c)(M.a)`
  margin-bottom: 16px;
  width: 100%;
`,ss=Object(Ja.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a,lcm_brightness_override:n,lcm_brightness:r,lcm_idle_timeout_override:c,lcm_idle_timeout:l,outdoor_mode_override:i,power_source_ctrl:o}={}})=>({led_override:e!==O.LedOverride.OFF,led_override_color:t||O.DEFAULT_LED_COLOR,led_override_color_brightness:a>=0?a:O.DEFAULT_LED_BRIGHTNESS,lcm_brightness_override:n||!1,lcm_brightness:r>=0?r:100,lcm_idle_timeout_override:c||!1,lcm_idle_timeout:l||0,outdoor_mode_override:i||"default",power_source_ctrl:o||"auto"}),validationSchema:Qa.a.object().shape({led_override:Qa.a.string(),led_override_color:Qa.a.string(),led_override_color_brightness:Qa.a.number(),lcm_brightness_override:Qa.a.boolean(),lcm_brightness:Qa.a.number(),lcm_idle_timeout_override:Qa.a.boolean(),lcm_idle_timeout:Qa.a.number(),outdoor_mode_override:Qa.a.string(),power_source_ctrl:Qa.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var ms=Object(ht.compose)(F.f,ss)(({activeItem:e,setFormDirty:t,dirty:a,values:n,resetForm:l,setFieldValue:i,disableLedOverrideFields:E,intl:s})=>{var m;const d=Object(o.useDispatch)(),{led_override:_}=e,u=Object(o.useSelector)(Ei.selectMgmtSettings),b=Object(Yn.i)(e),p=Object(Yn.j)(e),I=(null!==(m=null==u?void 0:u.led_enabled)&&void 0!==m&&m&&_!==O.LedOverride.OFF||_===O.LedOverride.ON)&&p;Object(r.useEffect)(()=>(d(Object(N.h)({screen:()=>{if(!a)return{};const e={...n,led_override:n.led_override?O.LedOverride.ON:O.LedOverride.OFF,lcm_brightness_override:b&&n.lcm_brightness_override,lcm_idle_timeout_override:b&&n.lcm_idle_timeout_override};return e.lcm_brightness_override||delete e.lcm_brightness,e.lcm_idle_timeout_override||delete e.lcm_idle_timeout,b||(delete e.lcm_brightness_override,delete e.lcm_idle_timeout_override),e}})),d(Object(N.j)({screen:()=>l({values:n})})),d(Object(N.i)({screen:l})),()=>{d(Object(N.h)({screen:null})),d(Object(N.j)({screen:null})),d(Object(N.i)({screen:null}))}),[d,l,n,a,e.mac,b]),Object(r.useEffect)(()=>{t("screen",a)},[t,a]);const g=Object(r.useCallback)((e,t,a)=>{e.target.checked&&i(t,a?"override"===e.target.name:e.target.name)},[i]),R=Object(r.useCallback)(e=>g(e,"lcm_brightness_override",!0),[g]),v=Object(r.useCallback)(e=>g(e,"lcm_idle_timeout_override",!0),[g]);return c.a.createElement(c.a.Fragment,null,!E&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Es,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED"})),c.a.createElement(tn.a,{type:"checkbox",name:"led_override"}))),I&&c.a.createElement(c.a.Fragment,null,c.a.createElement(is,{marginBottom:12},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"}))),c.a.createElement(is,{marginBottom:12},c.a.createElement(ii.a,{size:"large",value:+n.led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement("span",null,e,"%"),onChange:e=>i("led_override_color_brightness",e.target.value)})),c.a.createElement(is,{marginBottom:12},c.a.createElement(V.a,{color:"primary",weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),c.a.createElement(is,{marginBottom:12},c.a.createElement(Ui.a,{color:n.led_override_color,variant:"block",onChange:e=>{i("led_override_color","hex"in e?e.hex:void 0)},hexLabel:s.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:c.a.createElement(de.a,{variant:"inline",onClick:()=>{i("led_override_color",O.DEFAULT_LED_COLOR)}},c.a.createElement(F.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))),b&&c.a.createElement(c.a.Fragment,null,c.a.createElement(is,{marginBottom:12},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_BRIGHTNESS"}))),c.a.createElement(is,{marginBottom:16},c.a.createElement(os,null,c.a.createElement(qE.a,{id:"lcmBrigthnessDefault",checked:!n.lcm_brightness_override,name:"default",onChange:R},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"}))),c.a.createElement(qE.a,{id:"lcmBrigthnessOverride",checked:n.lcm_brightness_override,name:"override",onChange:R},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_ACTIONS_OVERRIDE"}))))),n.lcm_brightness_override&&c.a.createElement(c.a.Fragment,null,c.a.createElement(is,{marginBottom:12},c.a.createElement(ii.a,{size:"large",value:+n.lcm_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement("span",null,e,"%"),onChange:e=>i("lcm_brightness",e.target.value)}))),c.a.createElement(is,{marginBottom:12},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_IDLE_TIMEOUT"}))),c.a.createElement(is,{marginBottom:16},c.a.createElement(os,null,c.a.createElement(qE.a,{id:"lcmIdleTimeoutDefault",checked:!n.lcm_idle_timeout_override,name:"default",onChange:v},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"}))),c.a.createElement(qE.a,{id:"lcmIdleTimeoutOverride",checked:n.lcm_idle_timeout_override,name:"override",onChange:v},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_ACTIONS_OVERRIDE"})))))))}),ds=a(528);const _s=Object(l.c)("div")`
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
`,Os=null,Is="COMMON_DISABLED",gs=[{id:"portName",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({portName:e})=>c.a.createElement(V.a,{size:"body"},e)},{id:"portStatus",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:({portStatus:e})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(V.a,{size:"body"},e),c.a.createElement(us,{size:"small"}))}];var Rs=({activeItem:e})=>{const{ethernet_overrides:t,port_overrides:a}=e,l=Object(o.useSelector)(un.selectNetworkGroups),i=Object(n.k)(),{path:E}=Object(n.n)(),{site:s,page:m,id:d,panel:_}=Object(n.m)(),u=Object(O.getDeviceSpecs)(e),b=Object(r.useMemo)(()=>{const t=Object(dt.a)(e,"port_table",[]);if(t.length>0)return t;return Object.keys(u.ports).map(e=>({ifname:e,up:!1,enable:!1}))},[e,u.ports]),p=Object(r.useMemo)(()=>b.map(n=>{const{ifname:r}=n,i=n.port_idx,o=t.find(({ifname:e})=>e===r),E=o&&l.find(e=>e.id===o.networkgroup),{nameOverride:s}=Object(O.getCurrentPortData)(i-1,e),m=Object(_r.d)(e,r),d=a&&a.find(({port_idx:e})=>m.portIdx===e),_=Object.values(bc.linkNegotiationOptions).find(({speed:e,full_duplex:t,autoneg:a})=>d&&d.speed&&!d.autoneg?d.speed===e&&d.full_duplex===t:a),u=s||c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:i,networkGroup:Object(O.getPortGroupLabel)(e,n,null==E?void 0:E.id)}}),b={...Object(ds.a)(n),networkGroup:E?E.id:Os,networkGroupLabel:E?E.label:Is,linkNegotiation:_.id,linkNegotiationLabel:_.label,linkNegotiationSpeed:_.speed,portName:u,portStatus:void 0,id:i||r,portIdx:i};return m.supportedValues&&0!==m.supportedValues.length||(b.linkNegotiationLabel="DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO"),b.portStatus=c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(jr,{cellData:b,deviceData:e,style:{minWidth:20}}),c.a.createElement(bs,null,c.a.createElement(F.c,{id:b.networkGroup?b.linkNegotiationLabel:b.networkGroupLabel,values:{speed:Object(Kt.c)(1e6*b.linkNegotiationSpeed/8,"bitrate")}}))),b}),[b,e,t,l,a]),I=e=>Object(n.i)(E,{site:s,page:m,id:d,panel:_,subPanel:"ports",subPanelId:e}),g=Object(r.useCallback)(e=>(null==e?void 0:e.dns)?null:i.push(I(e.ifname)),[i]);return c.a.createElement(_s,null,c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(fe.a,{columns:gs,rowHeight:35,disableColumnFilters:!0,items:p,onRowClick:g,hideCellOverflow:!1}),c.a.createElement(ps,{variant:"link",onClick:()=>i.push(I(oe.ALL)),Icon:c.a.createElement(w.ub,{isActive:!0})},c.a.createElement(F.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))))};const vs=Object(l.c)("div")`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 32px;
  flex: 1 1 85%;
`,Cs=Object(l.c)("div")`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var hs=Object(ht.compose)(F.f,Za(["general","screen","services"]))(({activeItem:e,isDirty:t,isInvalid:a,setFormDirty:n,setFormInvalid:l,intl:i,...E})=>{const{_id:s,mac:m}=e,d=Object(o.useSelector)(Xa),_=Object(o.useSelector)(qa),u=Object(o.useSelector)(Ka),b=Object(o.useSelector)(Ei.selectUsgSettings),p=Object(o.useSelector)(Gl.s)&&!e.unsupported,I=Object(o.useDispatch)(),g=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,g&&c.a.createElement(Qo,{deviceData:e,hideAnomalies:!0}),c.a.createElement(vs,null,p&&c.a.createElement(Ee.a,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(Cs,null,c.a.createElement(li,{activeItem:e,setFormDirty:n,setFormInvalid:l}))},{id:"ports",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>c.a.createElement(Rs,{activeItem:e})},{id:"screen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Cs,null,c.a.createElement(ms,{activeItem:e,setFormDirty:n}))},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Cs,null,c.a.createElement(ls,{activeItem:e,usgSettings:b,setFormDirty:n,setFormInvalid:l}))},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(KE,{activeItem:e})}]})),c.a.createElement(Pn,{isDirty:t,isInvalid:a,onFormSubmit:()=>{const e=Object.entries(u).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});(Object(mr.a)(e)?Promise.resolve():I(Object(O.updateDeviceWithIdEndpoint)(e,s,m,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0}))).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{var e,t,a;null===(e=_.general)||void 0===e||e.call(_),null===(t=_.screen)||void 0===t||t.call(_),null===(a=_.services)||void 0===a||a.call(_)}}))});const Ts=Object(l.c)(M.a)`
  position: relative;
  margin: -18px -30px 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,fs=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
`,Ds=Object(l.c)(M.a)`
  width: 100%;
  padding: 30px;
`,Ps=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,ys=Object(l.c)(M.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`;const Ss=Object(Ja.g)({mapPropsToValues:({port:e})=>{const{nameOverride:t,enable:a}=e;return{name:t,enable:null==a||a}},validationSchema:Qa.a.object().shape({enable:Qa.a.boolean(),name:Qa.a.string()}),handleSubmit:(e,{props:{activeItem:{_id:t,port_overrides:a,mac:n},port:r,intl:c,history:l,updateDeviceWithIdEndpoint:i}})=>{const o=c.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"});i({port_overrides:[...(null==a?void 0:a.filter(({port_idx:e})=>e!==r.portIdx))||[],{port_idx:r.portIdx,...e}]},t,n,{successToast:{icon:ca.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:o}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{l.goBack()})}});var As=Object(ht.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({port:Object(O.getCurrentPortData)(+a.replace(/\D/g,""),t)}),{updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint}),F.f,Ss)((function({activeItem:e,port:t,history:a,submitForm:n,resetForm:l,dirty:i}){const E=Object(r.useCallback)(()=>{l(),a.goBack()},[l,a]),s=Object(o.useSelector)(un.selectNetworkGroups),m=Object(_r.h)(t.ifname,e,s),d=Object(O.getDeviceModelFeature)(e,"poe");return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ds,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ts,{alignItems:"center"},c.a.createElement(w.f,{onClick:E,style:{cursor:"pointer"}}),c.a.createElement(fs,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:t.portIdx,networkGroup:null==m?void 0:m.label}}))),c.a.createElement(ys,{marginBottom:24},c.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),d&&c.a.createElement(ys,{marginBottom:24},c.a.createElement(M.a,{flexDirection:"column",flex:"1"},c.a.createElement(Ps,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_PORT_POWER_LABEL"})),c.a.createElement(V.a,{color:"tertiary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PORT_FORM_PORT_POWER_DESCRIPTION"}))),c.a.createElement(Jn.Field,{name:"enable",type:"checkbox"}))),c.a.createElement(Pn,{isDirty:i,onFormSubmit:n,onFormCancel:E,allowCancel:!0}))}));const js=Object(l.c)(M.a)`
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
`,Ns=Object(l.c)("div")`
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
`,Fs=[{id:"hostnameInfo",renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_CLIENT"})),renderCell:({hostname:e,client:t,mac:a,name:n})=>c.a.createElement(c.a.Fragment,null,t?c.a.createElement(k.a,{client:t}):null,c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},c.a.createElement(Ls,null,n||e||a))),minWidth:90},{id:"date",renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_DATE"})),renderCell:({date:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:90},{id:"start",renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_TIME"})),renderCell:({start:e})=>c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"experienceInfo",renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE"})),renderCell:({experience:e})=>c.a.createElement(c.a.Fragment,null,e>=0?c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},c.a.createElement("span",{style:{color:we.a["color-"+Object(Me.c)(e)]}},e,"%")):c.a.createElement(F.c,{id:"COMMON_NA"}),c.a.createElement(Vs,{size:"small"})),minWidth:90}];var Ms=({activeItem:e})=>{let t;"mac"in e&&({mac:t}=e);const{data:a,isLoading:l,error:i}=Object(o.useSelector)(Object(da.selectFormattedSessionData)(t,!0,[])),E=Object(n.k)(),s=Object(r.useCallback)(()=>c.a.createElement(ws,null,a.length>0&&c.a.createElement(F.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})),[a.length]);return Object(L.f)([Object(da.fetchSession)(t,!0)],c.a.createElement(js,{justifyContent:"flex-start",alignItems:"center"},!l&&a.length>0&&c.a.createElement(fe.a,{items:a,disableColumnFilters:!0,columns:Fs,onRowClick:({id:e})=>E.push("overview/history/"+e),rowHeight:30,renderFooter:s}),(!l||i)&&0===a.length&&c.a.createElement(Ns,null,c.a.createElement(xs,null),c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"}))))};var Us=({activeItem:e,flexProps:t})=>{const a=Object(Me.d)(null==e?void 0:e.satisfaction),{na:n,ng:r,naNumSta:l,ngNumSta:i}=Object(O.getSatisfactionByRadio)(e);return a?c.a.createElement(Zt,{flexProps:{...t,flexDirection:"column",marginBottom:0}},c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_WIFI_EXPERIENCE_2G"})),i&&0!==r?c.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(r,100)/100,style:{color:we.a["color-"+Object(Me.c)(Math.min(r,100))]}}):c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_WIFI_EXPERIENCE_5G"})),l&&0!==n?c.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(n,100)/100,style:{color:we.a["color-"+Object(Me.c)(Math.min(n,100))]}}):c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"})))):null};var ks=({activeItem:{uptime:e}})=>e>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_UPTIME"})),c.a.createElement(V.a,{color:"secondary",size:"body"},Object(Xt.a)(e))):null;var zs=({activeItem:e})=>{var t,a;const n=null!==(t=e.link_capacity)&&void 0!==t?t:Object(O.isUBB)(e)&&(null===(a=e.peer_ubb)||void 0===a?void 0:a.link_capacity);return n>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),c.a.createElement(me.a,{size:"body",type:"bytes",color:"secondary",input:1e6*n/8,options:"bitrate"})):null};var Bs=({activeItem:{loadAvg:e},flexProps:t})=>e?c.a.createElement(Zt,{flexProps:t},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;const Ws=Object(l.c)(V.a)`
  white-space: nowrap;
  margin-right: 12px;
`,Hs=Object(l.c)(V.a)`
  text-align: right;
`;var Gs=({condition:e,definition:t,hideOnEmpty:a,placeholder:n="...",value:r})=>Object(L.f)(e,r||!a?c.a.createElement(c.a.Fragment,null,c.a.createElement(Ws,{color:"secondary"},t),c.a.createElement(Hs,{color:"secondary"},r)):null,{placeholder:c.a.createElement(c.a.Fragment,null,c.a.createElement(Ws,{color:"secondary"},t),c.a.createElement(Hs,{color:"secondary"},n))}),Ys=a(374),$s=a(35);const Ks=Object(_.a)(Ys.selectAPGroupsData,$s.selectWifiNetworksData,f,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).reduce((e,a)=>[...e,...t.filter(e=>e.ap_group_ids.includes(a._id))],[])),Xs=Object(l.c)(V.a)`
  max-width: 200px;
`;var qs=()=>{const e=Object(o.useSelector)(Ks),t=Object($s.getWifiNetworkNames)(e,!1);return t?c.a.createElement(Zt,null,c.a.createElement(Gs,{value:c.a.createElement(Xs,{size:"body",truncate:!0},t),condition:[Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}}),Object($s.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_WIFI"}))})):null};const Zs=Object(l.c)(V.a)`
  max-width: 200px;
`;var Js=()=>{const e=Object(o.useSelector)(Ks),t=Object($s.getWifiNetworkNames)(e,!0);return t?c.a.createElement(Zt,null,c.a.createElement(Gs,{value:c.a.createElement(Zs,{size:"body",truncate:!0},t),condition:[Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}}),Object($s.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_HOTSPOT"})),hideOnEmpty:!0})):null};const Qs=Object(l.c)(V.a)`
  max-width: 200px;
`;var em=({activeItem:{mac:e},flexProps:t})=>{const a=Object(o.useSelector)(t=>Object(Ys.selectAPGroupsByDeviceMac)(t,e)),n=a&&a.map(({name:e})=>e).sort().join(", ");return n?c.a.createElement(Zt,{flexProps:t},c.a.createElement(Gs,{value:c.a.createElement(Qs,{size:"body",truncate:!0},n),condition:[Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_AP_GROUP"}))})):null};var tm=({activeItem:{"user-num_sta":e,satisfaction:t}})=>Object(Me.d)(t)?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e||0)):null;var am=({activeItem:{"guest-num_sta":e,satisfaction:t}})=>Object(Me.d)(t)?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_GUESTS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e||0)):null,nm=({children:e})=>c.a.createElement(Pe.g,{height:"100%",flexDirection:"column"},e);var rm=({activeItem:e})=>c.a.createElement(nm,null,[{C:Us},{C:ks},{C:zs},{C:cl},{C:Bs},{C:qs},{C:Js},{C:em},{C:tm},{C:am}].map(({C:t})=>c.a.createElement(t,{activeItem:e,key:t.name})));const cm=Object(l.c)("div")`
  height: 100%;
`,lm=Object(l.c)("div")`
  margin: ${({theme:e})=>e.spacing["spacing-xl"]} 0;
`,im=[{id:"name",sortable:!0,minWidth:20,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_NAME"})),renderCell:e=>c.a.createElement(V.a,{size:"body",truncate:!0},e.name)},{id:"bssid",sortable:!0,minWidth:35,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID"})),renderCell:e=>c.a.createElement(V.a,{size:"body",truncate:!0},e.bssid)},{id:"essid",sortable:!0,minWidth:30,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_ESSID"})),renderCell:e=>c.a.createElement(V.a,{size:"body",truncate:!0},e.essid)},{id:"channel",sortable:!0,minWidth:20,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})),renderCell:e=>c.a.createElement(V.a,{size:"body"},e.channel)}];function om({activeItem:{vap_table:e}}){return c.a.createElement(cm,null,c.a.createElement(fe.a,{items:e||[],disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,columns:im,renderFooter:()=>e&&e.length?c.a.createElement(lm,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_NO_WLAN"}),rowHeight:30,idField:"name"}))}const Em=Object(_.a)(Ys.selectAPGroupsData,$s.selectWifiNetworksData,f,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).map(e=>{const a=t.filter(t=>t.ap_group_ids.includes(e._id)),n=[];return a.forEach(t=>{t.wlan_band===$s.WlanBand.BOTH?n.push({...t,id:t._id+e._id+$s.WlanBand.NA,wlan_band:$s.WlanBand.NA},{...t,id:t._id+e._id+$s.WlanBand.NG,wlan_band:$s.WlanBand.NG}):n.push({...t,id:t._id+e._id})}),{...e,id:e._id,children:n}})),sm=Object(l.c)(w.tc)`
  margin-right: 7px;
  margin-bottom: 2px;
`,mm=[{id:"name",label:c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_GROUP_TABLE_HEADER_NAME"})),renderCell:({name:e,attr_no_delete:t,children:a,wlan_band:n})=>a?c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},t?c.a.createElement(c.a.Fragment,null,e," (",c.a.createElement(F.c,{id:"COMMON_WORD_DEFAULT"}),")"):e):c.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},n===$s.WlanBand.NG?c.a.createElement(c.a.Fragment,null,c.a.createElement(sm,{isActive:!0}),e," (",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_BAND_2GHZ"}),")"):c.a.createElement(c.a.Fragment,null,c.a.createElement(sm,{isActive:!0}),e," (",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_BAND_5GHZ"}),")"))}];var dm=()=>{const e=Object(o.useSelector)(Em);return Object(L.f)([Object(Ys.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],c.a.createElement(fe.a,{items:e,columns:mm,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0}))};const _m=Object(l.c)("div")`
  text-align: center;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 32px 40px;
`,um=Object(l.c)("div")`
  margin-bottom: 2px;
`,bm=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[3]}px;
`,pm=Object(l.c)(w.d)`
  color: ${Oo.n.warning};
`;var Om=({activeItem:e})=>{const t=Object(O.isAdopted)(e),a=Object(Me.d)(null==e?void 0:e.satisfaction),n=Object(r.useMemo)(()=>t?a?c.a.createElement($t,{item:e,headerTitle:"DEVICE_HEADER_WIFI_EXPERIENCE",showGraph:e&&a,itemType:"ap",canReport:!0}):c.a.createElement(_m,null,c.a.createElement(um,null,c.a.createElement(pm,{width:26,height:26})),c.a.createElement(um,null,c.a.createElement(bm,null,c.a.createElement(F.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE_NA"}))),c.a.createElement(um,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE_NA_DESCRIPTION"})))):null,[t,a,e.satisfaction]);return c.a.createElement(c.a.Fragment,null,n,c.a.createElement(Rl,{activeItem:e}))},Im=a(55),gm=a(453);var Rm=({activeItem:e,radio:t})=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(gm.a,{device:e,radio:e.radio_table.find(e=>e.radio===t),hidePowerInfo:!0})));var vm=Object(F.f)(({activeItem:e,radio:t,intl:a})=>{const n=Object(O.getRadioStatsTransmitPowerString)(e,null==e?void 0:e.radio_table_stats.find(e=>e.radio===t),a);return n?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n)):null});var Cm=({activeItem:e,radio:t})=>{const{totalPackets:a,totalBytes:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"tx");return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},a," / ",n))};var hm=({activeItem:e,radio:t})=>{var a;const{totalPackets:n,totalBytes:r}=Object(O.getApRadioStats)(e,null===(a=null==e?void 0:e.radio_table)||void 0===a?void 0:a.find(e=>e.radio===t),"rx");return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n," / ",r))};var Tm=({activeItem:e,radio:t})=>{const{retryPercentage:a,droppedPercentage:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"tx");return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"})),c.a.createElement(V.a,{color:"secondary",size:"body"},a,"% / ",n,"%"))};var fm=({activeItem:e,radio:t})=>{const{retryPercentage:a,droppedPercentage:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"rx");return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"})),c.a.createElement(V.a,{color:"secondary",size:"body"},a,"% / ",n,"%"))};var Dm=({activeItem:e,radio:t,flexProps:a})=>{var n;const r=Object(O.getRadioChannelUtilization)(e,null===(n=null==e?void 0:e.radio_table_stats)||void 0===n?void 0:n.find(e=>e.radio===t));return r?c.a.createElement(Zt,{flexProps:a},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"})),c.a.createElement(V.a,{color:"secondary",size:"body"},`${r.total}% / ${r.selfRx}% / ${r.selfTx}%`)):null};var Pm=({activeItem:e,radio:t})=>{var a,n;return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null===(n=null===(a=null==e?void 0:e.radio_table_stats)||void 0===a?void 0:a.find(e=>e.radio===t))||void 0===n?void 0:n["user-num_sta"]))};var ym=({activeItem:e,radio:t})=>{var a,n;return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_GUESTS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},null===(n=null===(a=null==e?void 0:e.radio_table_stats)||void 0===a?void 0:a.find(e=>e.radio===t))||void 0===n?void 0:n["guest-num_sta"]))};const Sm=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,Am=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var jm=({activeItem:e,radio:t})=>c.a.createElement(Am,null,c.a.createElement(Sm,{weight:"bold",size:"body"},c.a.createElement(F.b,{id:(e=>{switch(e){case Im.b.NG:return"DEVICE_HEADER_RADIO2G_SHORT";case Im.b.NA:return"DEVICE_HEADER_RADIO5G_SHORT";case Im.b.AD:return"DEVICE_HEADER_RADIO60G_SHORT";default:return"COMMON_UNKNOWN"}})(t)})),c.a.createElement(nm,null,[{C:Rm},{C:vm},{C:Cm},{C:hm},{C:Tm},{C:fm},{C:Dm,flexProps:{}},{C:Pm},{C:ym}].map(({C:a,flexProps:n={}})=>c.a.createElement(a,{activeItem:e,radio:t,flexProps:n,key:`${a.name}-${t}`}))));const Nm=Object(l.c)(de.a)`
  font-weight: normal;
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`,Lm=()=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_HYPHEN"})));var xm=({uplinkDevice:e,uplinkName:t,params:a,path:l,history:i})=>{const E=Object(o.useDispatch)(),{site:s,page:m,subPage:_}=a,{mac:u}=e,b=Object(r.useCallback)(e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(l,{id:u,site:s,page:m,panel:"overview",subPage:_});i.push(t),E(Object(N.g)({type:d.b.DEVICE,mac:u}))},[]);return c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),c.a.createElement(Nm,{variant:"link",onClick:b},t))};var Vm=({activeItem:e,flexProps:t})=>{const a=Object(o.useSelector)(O.selectDevicesData),n=Object(O.getUplinkRemotePort)(a,e);return c.a.createElement(Zt,{flexProps:t},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==n?void 0:n.poe_power)||0}})))};var wm=({uplink:{rx_packets:e,rx_bytes:t}})=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e&&t?c.a.createElement(c.a.Fragment,null,c.a.createElement(me.a,{size:"body",type:"number",input:e,color:"secondary"})," / ",Object(Kt.c)(t)):"- / -"));var Fm=({uplink:{tx_packets:e,tx_bytes:t}})=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e&&t?c.a.createElement(c.a.Fragment,null,c.a.createElement(me.a,{size:"body",type:"number",input:e,color:"secondary"})," / ",Object(Kt.c)(t)):"- / -"));var Mm=({uplink:{"rx_bytes-r":e,"tx_bytes-r":t}},a=!0)=>a?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),c.a.createElement(me.a,{size:"body",color:"secondary",type:"bytes",input:t+e||0,options:"bitrate"})):c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),c.a.createElement(me.a,{size:"body",type:"bytes",input:e||0,options:"bitrate",color:"secondary"})),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),c.a.createElement(me.a,{size:"body",type:"bytes",input:t||0,options:"bitrate",color:"secondary"})));var Um=({uplink:{rssi:e}})=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_SIGNAL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},ml(e)," (",dl(e)," ",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")"));var km=({uplink:{tx_rate:e}})=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_TX_RATE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(me.a,{type:"bytes",input:1e3*e/8,options:"bitrate",color:"secondary"})));var zm=({activeItem:e,flexProps:t})=>c.a.createElement(Zt,{flexProps:t},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_RX_RATE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(me.a,{type:"bytes",input:1e3*e.uplink.rx_rate/8,options:"bitrate",color:"secondary"})));var Bm=({activeItem:e,params:t,path:a,history:n})=>{const r=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),l=Object(O.getUplinkDisplayName)(e,r),i=Object(O.getUplinkAttrs)(e)||{},E="wire"===e.uplink.type?[(null==r?void 0:r.mac)?{C:xm,props:{uplinkDevice:r,uplinkName:l,params:t,path:a,history:n}}:{C:Lm},{C:il,props:{uplink:i}},{C:Vm,props:{activeItem:e},flexProps:{}},{C:wm,props:{uplink:i}},{C:Fm,props:{uplink:i}},{C:Mm,props:{uplink:i}}]:[(null==r?void 0:r.mac)?{C:xm,props:{uplinkDevice:r,uplinkName:l,params:t,path:a,history:n}}:{C:Lm},{C:Um,props:{uplink:i}},{C:km,props:{uplink:i}},{C:zm,props:{activeItem:e},flexProps:{}},{C:wm,props:{uplink:i}},{C:Fm,props:{uplink:i}},{C:Mm,props:{uplink:i}}];return c.a.createElement(nm,null,E.map(({C:e,props:t,flexProps:a={}})=>c.a.createElement(e,Object.assign({},t,{flexProps:a,key:e.name}))))};const Wm=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Hm=function({activeItem:e,...t}){var a,n;const l=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),i=[...null!==(a=null==e?void 0:e.radio_table)&&void 0!==a?a:[]].sort(O.sortRadios).reverse();return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),l&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Om,{activeItem:e}),c.a.createElement(Wm,{variant:"secondary",items:[{id:"history",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>c.a.createElement(Ms,Object.assign({activeItem:e},t))},{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(rm,{activeItem:e})},...(null===(n=null==e?void 0:e.uplink)||void 0===n?void 0:n.mac)?[{id:"uplink",label:"wire"===e.uplink.type?c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>c.a.createElement(Bm,Object.assign({activeItem:e},t))}]:[],...(null==i?void 0:i.length)?[{id:"airStats",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>c.a.createElement(jm,{activeItem:e,radio:t,key:t}))}]:[],{id:"downlinks",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_DOWNLINKS"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"apGroups",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>c.a.createElement(dm,null)},{id:"clients",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(gl,Object.assign({activeItem:e},t))},{id:"wlan",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_WLAN"}),renderContent:()=>c.a.createElement(om,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})))};const Gm=e=>Object(Ia.t)("spectrumScan","/api/s/{site}/stat/spectrum-scan/"+e,e,void 0,{idField:"mac"}),Ym=(e,t)=>Object(dt.a)(((e,t)=>Object(Ia.w)(Gm(t),e.models))(e,t),"data",[]);var $m=a(283),Km=a(799);const Xm=[{from:-96,to:-92,color:"#fda839"},{from:-92,to:-88,color:"#fda839"},{from:-88,to:-84,color:"#fda129"},{from:-84,to:-80,color:"#fd9a19"},{from:-80,to:-76,color:"#fd930b"},{from:-76,to:-72,color:"#f87f0c"},{from:-72,to:-68,color:"#f26a13"},{from:-68,to:-64,color:"#f26a13"},{from:-64,to:-60,color:"#ec5619"},{from:-60,to:-56,color:"#d44515"},{from:-56,to:-52,color:"#c64013"},{from:-52,to:-48,color:"#bf3d12"}],qm={ng:16,na:42},Zm={ng:8,na:0},Jm={ng:[{from:2400,to:2500}],na:[{from:5170,to:5330},{from:5490,to:5730},{from:5735,to:5850}]},Qm={domain:[0,23.3,35,46.6,58.3,100],values:["#fda93a","#fda93a","#fd9208","#ea4e1a","#bf3d12","#bf3d12"]},ed={20:{domain:[0,6.2,28.1,49.9,71.9,100],values:Qm.values},40:{domain:[0,1.6,24.6,47.4,70.5,100],values:Qm.values},80:{domain:[23.3,35,46.6,58.3,100],values:Qm.values.slice(1)},160:{domain:[23.3,35,46.6,58.3,100],values:Qm.values.slice(1)}},td=Object(l.c)(V.a)`
  margin-bottom: 16px;
  font-weight: bold;
`,ad=Object(l.c)(M.a)`
  margin-bottom: 56px;
`,nd=Object(l.c)("div")`
  padding: 21px 0;
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.colors.legendText};
  position: relative;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
`,rd=Object(l.c)("div")`
  padding: 21px 0;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  opacity: 0;
  visibility: hidden;
`,cd=(Object(l.c)(M.a)`
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
`);var ld=({count:e,offset:t})=>c.a.createElement(c.a.Fragment,null,[...Array(e)].map((e,a)=>c.a.createElement(cd,{key:"divider-"+a.toString(),marginLeft:(a+1)*t})));const id=Object(l.c)("div")`
  height: 100%;
  width: 0;
  left: 0;
  top: calc(100% + 4px);
  position: absolute;
  margin-left: ${({marginLeft:e})=>e};
  font-size: 10px;
`,od=Object(l.c)("div")`
  transform: rotate(90deg);
`;var Ed=({count:e,offset:t,start:a,end:n,step:r})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(id,{key:"start-legend",marginLeft:"4px"},c.a.createElement(od,null,a)),[...Array(e)].map((e,n)=>c.a.createElement(id,{key:"divider-legend-"+n.toString(),marginLeft:(n+1)*t+"%"},c.a.createElement(od,null,a+(n+1)*r))),c.a.createElement(id,{key:"end-legend",marginLeft:"calc(100% - 4px)"},c.a.createElement(od,null,n))),sd=a(2920),md=a(98);const dd=Object(l.c)("div")`
  margin: 16px 0;
`,_d=Object(l.c)(M.a)`
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
`;var Id=Object(md.a)(({data:e,width:t,motif:a})=>{if(!e||!e.length)return null;const n=e.length;return c.a.createElement(dd,null,c.a.createElement(_d,null,e.map((e,r)=>{const l=r/n*100,i=Tl.a.scale(ed[t].values).domain(ed[t].domain)(l).css();return c.a.createElement(pd,{width:n+"%",key:"rssi-bar-"+(r+1),motif:a},c.a.createElement(Od,{height:e+"%",background:i}))})),c.a.createElement(ud,{className:bd(t)}))});const gd=Object(l.c)(w.Qb)`
  margin-top: -4px;
  margin-right: 4px;
`,Rd=Object(l.c)("div")`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,vd=Object(l.c)("div")`
  text-transform: uppercase;
  margin: 16px 0 8px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Cd=Object(l.c)(M.a)`
  margin-bottom: 4px;
`,hd=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
  min-width: 50%;
`,Td=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  min-width: 50%;
`;var fd=Object(F.f)(({isAc:e=!1,spectrumEntry:t,data:a,radioType:n,width:r,intl:l})=>{if(!a)return null;const{interference:i,utilization:o,rssi_histogram:E}=t||{},{lowerFrequency:s,upperFrequency:m,subChannels:d,channel:_}=a,u=`${s} - ${m} ${l.formatMessage({id:"COMMON_UNIT_MHZ"})}`,b=`DEVICE_PROPERTIES_SECTION_RADIOS_SUBSECTION_${n.toUpperCase()}${e&&"na"===n?"_AC":""}`;return c.a.createElement("div",null,c.a.createElement(Rd,null,c.a.createElement(gd,null),c.a.createElement(F.c,{id:"DEVICE_HEADER_CHANNEL"})," ",_),c.a.createElement(vd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW"})),c.a.createElement(Cd,null,c.a.createElement(hd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_RADIO"})),c.a.createElement(Td,null,c.a.createElement(F.c,{id:b}))),c.a.createElement(Cd,null,c.a.createElement(hd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH"})),c.a.createElement(Td,null,r," ",c.a.createElement(F.c,{id:"COMMON_UNIT_MHZ"}))),+r>20&&c.a.createElement(Cd,null,c.a.createElement(hd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_USED_CHANNELS"})),c.a.createElement(Td,null,d.join(", "))),c.a.createElement(Cd,null,c.a.createElement(hd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_FREQUENCY_RANGE"})),c.a.createElement(Td,null,u)),!!t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(vd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_RF_SCAN_DETAILS"})),c.a.createElement(Cd,null,c.a.createElement(hd,null,c.a.createElement(F.c,{id:"DEVICE_HEADER_UTILIZATION"})),c.a.createElement(Td,null,o,"%")),c.a.createElement(Cd,null,c.a.createElement(hd,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})),c.a.createElement(Td,null,i," ",c.a.createElement(F.c,{id:"COMMON_UNIT_DBM"}))),E&&E.length&&c.a.createElement(Id,{data:E,width:r})))});const Dd=Object(l.c)(pn.a)`
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
`,Pd=Object(l.c)("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({height:e})=>e};
  background-color: ${({background:e})=>e};
`,yd=l.a`
  width: 240px !important;
  transform: translateX(18px) !important;
`;var Sd=({spectrumData:e,channels:t,channelWidth:a,rowCount:n,lowerFrequency:r,singleFrqeuencyWidth:l,type:i,className:o=null})=>c.a.createElement(c.a.Fragment,null,t.map((t,E)=>{const s=e&&e.spectrum_table&&(e=>{const t=e.length,a=t&&e.reduce((e,t)=>(e.interference+=t.interference,e.utilization+=t.utilization,e.rssi_histogram&&t.rssi_histogram&&(e.rssi_histogram=e.rssi_histogram.map((e,a)=>e+(t.rssi_histogram&&t.rssi_histogram[a]||0))),e));return a&&a.interference&&(a.interference=Math.round(a.interference/t),a.utilization=Math.round(a.utilization/t),a.rssi_histogram=a.rssi_histogram&&a.rssi_histogram.map(e=>Math.round(e/t))),a})(e.spectrum_table.filter(e=>e.width===parseInt(a,10)&&t.subChannels.includes(e.channel))),m=s&&s.utilization||0,d=s&&s.interference||-96,_=e&&(Xm.find(e=>Object(sd.a)(d,e.from,e.to))||{}).color||"transparent",u=t.upperFrequency-t.lowerFrequency,b=21+(qm[i]+Zm[i])*(E%n),p=(t.lowerFrequency-r)*l;return c.a.createElement(Dd,{key:`rf-${i}-${a}-channel-${t.subChannels.toString()}`,width:l*u+"%",height:qm[i]+"px",top:b+"px",left:p+"%",className:o,message:c.a.createElement(fd,{width:a,data:t,spectrumEntry:s,radioType:i}),position:"bottomRight",tooltipClassName:yd,portal:!0},c.a.createElement(Pd,{height:m+"%",background:_}))}));var Ad=c.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a})=>{const n=e.scans&&e.scans.find(e=>e.radio===$m.a.NG.type),r=["20"];Object(O.isHt40Supported)(t,a,$m.a.NG.type)&&r.push("40");const l=r.reduce((e,n)=>{const r=Object(Ci.c)(t,a,$m.a.NG.type,n);return e[n]=Object.entries(O.WIFI_CHANNELS.ng[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>r.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),i=10*Math.floor(Math.min(l[20][0].lowerFrequency,l[40][0].lowerFrequency)/10),o=10*Math.ceil(Math.max(l[20][l[20].length-1].upperFrequency,l[40][l[40].length-1].upperFrequency)/10),E=o-i,s=E/10-1,m=100/(s+1),d=100/E;return c.a.createElement("div",null,Object.keys(l).map(e=>{const t=l[e],a="20"===e?5:10,r=Math.min(a,t.length)*(qm.ng+Zm.ng)-Zm.ng+42;return c.a.createElement("div",{key:"channel-width-"+e},c.a.createElement(td,null,c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:e}}))),c.a.createElement(ad,null,Jm.ng.map(l=>c.a.createElement(nd,{key:`widths-${l.from}-${l.to}`,width:"100%",height:r+"px"},c.a.createElement(ld,{count:s,offset:m}),c.a.createElement(Ed,{count:s,offset:m,start:i,end:o,step:10}),c.a.createElement(Sd,{spectrumData:n,channels:t,channelWidth:e,rowCount:a,lowerFrequency:i,singleFrqeuencyWidth:d,type:$m.a.NG.type})))))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(oi.a)(Object(dt.a)(e,a),Object(dt.a)(t,a))));const jd=l.a`
  + div {
    border-left: none;
  }
`;var Nd=c.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a,intl:n})=>{const r=e.scans&&e.scans.find(e=>e.radio===$m.a.NA.type),l=["20"];Object(O.isHt40Supported)(t,a,$m.a.NA.type)&&l.push("40"),Object(O.isHt80Supported)(t,a)&&l.push("80"),Object(O.isHt160Supported)(t,n,a,"rai0")&&l.push("160");const i=l.reduce((e,n)=>{const r=Object(Ci.c)(t,a,$m.a.NA.type,n);return e[n]=Object.entries(O.WIFI_CHANNELS.na[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>r.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),o=Object(qn.a)(i[20],e=>Jm.na.findIndex(t=>Object(sd.a)(e.centerFrequency,t.from,t.to))),E=o[1]&&o[1].length,s=o[2]&&o[2].length,m=100/(i[20].length+(E?1:0)+(s?1:0));return c.a.createElement("div",null,Object.keys(i).map(e=>{const t=i[e],a=+e;return c.a.createElement("div",{key:"channel-width-"+e},c.a.createElement(td,null,c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:a}}))),c.a.createElement(ad,{justifyContent:"space-between"},Jm.na.map((a,n)=>{const l=t.filter(({centerFrequency:e})=>Object(sd.a)(e,a.from,a.to)),i=o[n]&&o[n].length||0,E=i*m,s=100/i/20,d=20*s*4,_=Math.floor((i-1)/4);return l.length?c.a.createElement(nd,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+qm.na+"px"},c.a.createElement(ld,{count:_,offset:d}),c.a.createElement(Ed,{count:_,offset:d,start:a.from,end:a.to,step:80}),c.a.createElement(Sd,{spectrumData:r,channels:l,channelWidth:e,rowCount:1,lowerFrequency:a.from,singleFrqeuencyWidth:s,type:$m.a.NA.type,className:jd})):c.a.createElement(rd,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+qm.na+"px"})})))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(oi.a)(Object(dt.a)(e,a),Object(dt.a)(t,a))));const Ld=Object(l.c)(Do.a)`
  width: 100% !important;
  margin-bottom: 16px;
`,xd=Object(l.c)(M.a)`
  margin-bottom: 32px;
`,Vd=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
`,wd=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0 0 0 8px;
`,Fd=Object(l.c)(V.a)`
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: block;
`,Md=Object(l.c)("div")`
  width: ${({width:e})=>e}%;
  background-color: ${({background:e})=>e};
  height: 7px;
`,Ud=Object(l.c)("div")`
  position: relative;
  font-size: 10px;
  height: 14px;
`,kd=Object(l.c)(M.a)`
  margin: 4px 0;
`,zd=Object(l.c)("div")`
  padding: 4px 0;
  font-size: 10px;
`,Bd=Object(l.c)("div")`
  position: absolute;
  ${({right:e})=>e&&`right: ${e};`}
  ${({left:e})=>e&&`left: ${e};`}
`;var Wd=Object(ht.compose)(Object(o.connect)((e,{activeItem:{mac:t}})=>({spectrumScan:Ym(e,t)}),{fetchCountryChannels:Ci.a,fetchSpectrumScan:Gm,confirm:er.a,scanDeviceRFEnvironments:O.scanDeviceRFEnvironments,hideModal:Ut.e}),Object(_l.c)(({activeItem:{mac:e},fetchSpectrumScan:t,fetchCountryChannels:a})=>Promise.all([t(e),a(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})])),F.f)(({activeItem:e,confirm:t,scanDeviceRFEnvironments:a,hideModal:n,spectrumScan:l,intl:i})=>{const E=Object(o.useDispatch)(),s=Object(r.useMemo)(()=>Object(O.getRadios)(e),[e]),m=Object(r.useMemo)(()=>null==s?void 0:s.find(e=>e.radio===$m.a.NG.type),[s]),d=Object(r.useMemo)(()=>null==s?void 0:s.find(e=>e.radio===$m.a.NA.type),[s]),[_,u]=Object(r.useState)(m?$m.a.NG.type:$m.a.NA.type),b=Object(Km.a)(null==e?void 0:e.spectrum_scanning),p=Object(o.useSelector)(Ci.d);Object(r.useEffect)(()=>{b&&!(null==e?void 0:e.spectrum_scanning)&&E(Gm(null==e?void 0:e.mac))},[null==e?void 0:e.mac,null==e?void 0:e.spectrum_scanning,b,E]);const I=Object(r.useCallback)((e,t)=>{u(t)},[u]),g=Object(r.useCallback)(()=>{t({message:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_MESSAGE",title:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_TITLE",onConfirm:()=>{a(e),n()}})},[e,t,a,n]),R=Object(r.useMemo)(()=>"wire"===Object(dt.a)(e,"uplink.type",""),[e]),v=Object(r.useMemo)(()=>{var e;return null===(e=null==l?void 0:l.scans)||void 0===e?void 0:e.find(({radio:e})=>e===_)},[null==l?void 0:l.scans,_]),C=Object(r.useMemo)(()=>[...m?[{label:i.formatMessage({id:"DEVICE_PROPERTIES_RF_2G_RF_ENV"}),value:$m.a.NG.type}]:[],...d?[{label:i.formatMessage({id:"DEVICE_PROPERTIES_RF_5G_RF_ENV"}),value:$m.a.NA.type}]:[]],[m,d,i]),h=Object(r.useMemo)(()=>(null==e?void 0:e.spectrum_scanning)?c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_IN_PROGRESS"}):(null==v?void 0:v.spectrum_table_time)?c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_TIME_AGO",values:{time:Object(Tt.distanceInWordsToNow)(1e3*v.spectrum_table_time)}}):c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_NEVER_SCANNED"}),[null==e?void 0:e.spectrum_scanning,null==v?void 0:v.spectrum_table_time]);return R&&(null==C?void 0:C.length)?c.a.createElement(c.a.Fragment,null,c.a.createElement(Ld,{id:"rf_type",value:_,options:C,onChange:I,inputProps:{full:!0}}),c.a.createElement(xd,{justifyContent:"space-between"},c.a.createElement(Vd,null,c.a.createElement(V.a,{size:"body"}," ",c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_LAST_SCAN"})," ",h)),c.a.createElement(wd,{variant:"link",disabled:e.spectrum_scanning,onClick:g},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_ACTION_START_SCAN"}))),_===$m.a.NA.type?c.a.createElement(Nd,{deviceData:e,spectrumScan:l,countryChannels:p,intl:i}):c.a.createElement(Ad,{deviceData:e,spectrumScan:l,countryChannels:p}),c.a.createElement(Fd,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_RF_LEGEND"})),c.a.createElement(Ud,null,c.a.createElement(Bd,null,"-96"),c.a.createElement(Bd,{left:"30%"},"-80"),c.a.createElement(Bd,{left:"64%"},"-64"),c.a.createElement(Bd,{right:"0"},"-48 ",c.a.createElement(F.c,{id:"COMMON_UNIT_DBM"}))),c.a.createElement(kd,{justifyContent:"space-between"},Xm.map(({color:e,from:t,to:a})=>c.a.createElement(Md,{width:7.5,background:e,key:`dbm-${t}-${a}`}))),c.a.createElement(zd,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_LEGEND_UTILIZATION"})))):c.a.createElement(xd,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_DISABLED_MESSAGE"})))}),Hd=a(765);const Gd=Object(l.c)("tr")`
  white-space: nowrap;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
`,Yd=Object(l.c)("td")`
  vertical-align: top;
`,$d=Object(l.c)("td")`
  padding-left: 12px;
  padding-bottom: 2px;
  text-align: right;
  vertical-align: top;
`;var Kd=({device:e,radio:t,channelUtilization:a})=>{const{totalPackets:n,totalBytes:r,droppedPercentage:l,retryPercentage:i}=Object(O.getApRadioStats)(e,t,"rx"),{totalPackets:o,totalBytes:E,droppedPercentage:s,retryPercentage:m}=Object(O.getApRadioStats)(e,t,"tx");return c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement(Gd,null,c.a.createElement(Yd,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),c.a.createElement($d,null,c.a.createElement(V.a,{color:"secondary"},o," / ",E))),c.a.createElement(Gd,null,c.a.createElement(Yd,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),c.a.createElement($d,null,c.a.createElement(V.a,{color:"secondary"},n," / ",r))),c.a.createElement(Gd,null,c.a.createElement(Yd,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),c.a.createElement($d,null,c.a.createElement(V.a,{color:"secondary"},m,"% / ",s,"%"))),c.a.createElement(Gd,null,c.a.createElement(Yd,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),c.a.createElement($d,null,c.a.createElement(V.a,{color:"secondary"},i,"% / ",l,"%"))),a&&c.a.createElement(Gd,null,c.a.createElement(Yd,null,c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),c.a.createElement($d,null,c.a.createElement(V.a,{color:"secondary"},`${a.total}% / ${a.selfRx}% / ${a.selfTx}%`)))))};const Xd=Object(l.c)("div")`
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
`,e_=(e,t)=>{const a="DEVICE_RADIO_PROTOCOL_"+t.toUpperCase();if(t===Im.b.NA){if(Object(O.isAxRadio)(e,t))return a.concat("_AX");if(Object(O.isAcRadio)(e,t))return a.concat("_AC")}return a};var t_=e=>((null==e?void 0:e.radio_table)||[]).reduce((t,a)=>{const n=Object(O.getRadioChannelUtilization)(e,a),{radio:r}=a;if(n){const{selfRx:l,selfTx:i,interference:o,total:E}=n;t.push(c.a.createElement(Xd,{key:a.name},c.a.createElement(Pe.g,{justifyContent:"space-between"},c.a.createElement(qd,null,c.a.createElement(gm.a,{device:e,radio:a,hideDfsInfo:!0,hideHtInfo:!0,hidePowerInfo:!0,hideChannelTooltip:!0,textColor:"primary",textSize:"body",textWeight:"bold"}),c.a.createElement(Zd,null),c.a.createElement(V.a,{color:"primary",weight:"bold",size:"body"},c.a.createElement(F.c,{id:e_(e,r)}))),c.a.createElement(me.a,{size:"body",color:"secondary",type:"percent",input:Math.min(E,100)/100}),c.a.createElement(Jd,{color:"secondary"},c.a.createElement(V.a,{size:"body"}," ",c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_UTILIZED"})))),c.a.createElement(Qd,null,c.a.createElement(pn.a,{message:c.a.createElement(Kd,{device:e,radio:a,channelUtilization:n}),portal:!0},c.a.createElement(Hd.a,{items:[{color:Oo.k.blue,value:l},{color:Oo.g,value:i},{color:Oo.h,value:o}],height:10})))))}return t},[]);const a_=Object(l.c)(ua.a)`
  margin-right: 4px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0;
`,n_=e=>l.a`
  background-color: ${e};
`;var r_=({ChannelBars:e})=>c.a.createElement(c.a.Fragment,null,e,c.a.createElement(M.a,{justifyContent:"flex-start"},c.a.createElement(M.a,{flex:"0 1 27%"},c.a.createElement(a_,{className:n_(Oo.k.blue)}),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_RX_FRAMES"}))),c.a.createElement(M.a,{flex:"0 1 27%"},c.a.createElement(a_,{className:n_(Oo.g)}),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_TX_FRAMES"}))),c.a.createElement(M.a,{flex:"0 1 27%"},c.a.createElement(a_,{className:n_(Oo.h)}),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})))));const c_=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,l_=l.a`
  padding: 0;
  margin: 0;
`;var i_=function({activeItem:e,...t}){const a=t_(e),n=[];return a.length&&n.push({id:"channelUsage",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>c.a.createElement(r_,{ChannelBars:a})}),Object(O.isDeviceConnected)(e)&&Object(Yn.d)(e,O.WIFI_CAPS.RF_SCAN)&&n.push({id:"rfEvironment",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>c.a.createElement(Wd,{activeItem:e})}),Object(O.isDeviceConnected)(e)&&n.push({id:"dpi",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_DEVICE_IDENTIFICATION"}),renderContent:()=>c.a.createElement(xa,{mac:null==e?void 0:e.mac,contentPaddingX:0})}),c.a.createElement(c_,{variant:"secondary",items:n,contentClassName:l_,multiOpen:!0,renderOnlyExpandedContent:!0})};const o_=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,E_=Object(l.c)(Pe.g)`
  margin-bottom: 16px;
  width: 100%;
`,s_=Object(Ja.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a}={}})=>({led_override:e,led_override_color:t,led_override_color_brightness:a}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var m_=Object(F.f)(s_(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:n,isValid:l,values:i,resetForm:E,setFieldValue:s,intl:m,formName:d="led"})=>{const _=Object(o.useDispatch)(),{led_override:u}=e,b=Object(o.useSelector)(Ei.selectMgmtSettings),p=Object(Yn.j)(e),I=(Object(dt.a)(b,"led_enabled",!1)&&u!==O.LedOverride.OFF||u===O.LedOverride.ON)&&p;Object(r.useEffect)(()=>(_(Object(N.h)({[d]:()=>i})),_(Object(N.j)({[d]:()=>E({values:i})})),_(Object(N.i)({[d]:E})),()=>{_(Object(N.h)({[d]:null})),_(Object(N.j)({[d]:null})),_(Object(N.i)({[d]:null}))}),[_,E,i,d]),Object(r.useEffect)(()=>{t(d,n),a(d,!l)},[t,n,a,l,d]);const g=Object(r.useCallback)(()=>["on","default"].includes(i.led_override)?s("led_override","off"):s("led_override","on"),[s,i.led_override]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(E_,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_LED_ENABLE"})),c.a.createElement(ZE.a,{checked:["on","default"].includes(i.led_override),onChange:g}))),I&&c.a.createElement(c.a.Fragment,null,c.a.createElement(o_,{marginBottom:12},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"}))),c.a.createElement(o_,{marginBottom:12},c.a.createElement(ii.a,{size:"large",value:+i.led_override_color_brightness||100,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement("span",null,e,"%"),onChange:e=>s("led_override_color_brightness",e.target.value)})),c.a.createElement(o_,{marginBottom:12},c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),c.a.createElement(o_,{marginBottom:12},c.a.createElement(Ui.a,{color:(null==i?void 0:i.led_override_color)||O.DEFAULT_LED_COLOR,variant:"block",onChange:e=>{s("led_override_color","hex"in e?e.hex:void 0)},hexLabel:m.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:c.a.createElement(de.a,{variant:"inline",onClick:()=>{s("led_override_color",O.DEFAULT_LED_COLOR)}},c.a.createElement(F.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))}));const d_=Object(l.c)("div")`
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
`,I_=({device:e})=>{const t=Object(o.useDispatch)();return c.a.createElement(p_,{onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(N.g)({type:d.b.DEVICE,mac:e.mac}))}},c.a.createElement(tt.a,{device:e}))},g_=[{id:"nameInfo",sortable:!0,minWidth:40,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_AP"})),renderCell:e=>c.a.createElement(I_,{device:e})},{id:"channel",sortable:!0,minWidth:30,maxWidth:90,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_CHANNEL"})),renderCell:({channel:e})=>c.a.createElement(V.a,{size:"body"},e)},{id:"rssiInfo",sortable:!0,minWidth:40,maxWidth:80,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_SIGNAL"})),renderCell:({rssi:e})=>c.a.createElement(b_,null,ml(e)," (",dl(e)," ",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];var R_=function({items:e}){return c.a.createElement(d_,null,c.a.createElement(fe.a,{items:e,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:__,rowClassName:u_,columns:g_,idField:"mac",rowHeight:30}),!e.length&&c.a.createElement(O_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_EMPTY"}))))};const v_=-67,C_=-90,h_=Object(l.c)(M.a)`
  margin-bottom: 16px;

  > span {
    text-transform: none;
  }
`,T_=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,f_=Object(l.c)(M.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,D_=Object(l.c)("div")`
  flex: 1;
  max-width: ${({width:e})=>e||"calc(50% - 6px)"};
`,P_=Object(l.c)(V.a)`
  flex: 1;
  margin-right: 12px;
`,y_=Object(l.c)(M.a)`
  > label:not(:first-child) {
    margin-left: 18px;
  }
`,S_=Object(l.c)(w.Cb)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${({theme:e})=>e.motifPalette.aqua08};
`,A_=Object(l.c)(w.Db)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${({theme:e})=>e.motifPalette.aqua07};
`,j_=Object(l.c)(w.Eb)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${we.a["purple-1"]};
`,N_=[{value:"auto",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_AUTO"},{value:"high",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_HIGH"},{value:"medium",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_MEDIUM"},{value:"low",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_LOW"},{value:"custom",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_CUSTOM"}];class L_ extends r.PureComponent{constructor(){var e,t,a,n;super(...arguments),this.state={initialUplinkPriority1:(null===(t=null===(e=this.props)||void 0===e?void 0:e.activeItem)||void 0===t?void 0:t.mesh_uplink_1)||"",initialUplinkPriority2:(null===(n=null===(a=this.props)||void 0===a?void 0:a.activeItem)||void 0===n?void 0:n.mesh_uplink_2)||""},this.getRadioSubsection=e=>"DEVICE_PROPERTIES_SECTION_CONFIGURE_RADIOS_SUBSECTION_"+e.toUpperCase(),this.executePriorityUplinkAction=(e,t,a,n)=>{const{setPriorityUplink:r,unsetPriorityUplink:c}=this.props;return"SET"===e?r(t,a,n):c(t)},this.updateUplinkPriorities=()=>{const{values:e,activeItem:t}=this.props,{uplinkPriority1:a,uplinkPriority2:n}=e,{mesh_uplink_1:r,mesh_uplink_2:c}=t;if(!((r||"")!==this.state.initialUplinkPriority1||(c||"")!==this.state.initialUplinkPriority2))return;const l=!(!r&&!c)?"SET":"UNSET";this.executePriorityUplinkAction(l,t,a,n)},this.handleMeshingModeChange=e=>{const{setFieldValue:t}=this.props;e.target.checked&&t("meshingMode",e.target.name)},this.handlePriorityChange=(e,t)=>{const{values:a,setFieldValue:n}=this.props;let{uplinkPriority1:r,uplinkPriority2:c}=a;if("uplinkPriority1"===e&&!t.value&&c)return r=c,c="",n("uplinkPriority1",r),void n("uplinkPriority2",c);n(e,t.value)},this.handleEnableMeshingChange=()=>{const{setValues:e,values:t}=this.props,a=!t.meshingEnabled;e({...t,meshingEnabled:a,uplinkMeshEnable:a,radios:t.radios.map(e=>e.type===$m.a.NA.type?{...e,vwire_enabled:a}:e)})},this.getSaveData=()=>{const{intl:e,priorityUplinkOptions:t,values:a,activeItem:n,dirty:r}=this.props;if(!r)return{};const c=Object(Yn.d)(n,O.WIFI_CAPS.HIDE_CH_WIDTH),l=Object(O.getRadios)(n),i=Object(O.isPureAp)(n),{mesh_uplink_1:o,mesh_uplink_2:E}=(()=>{if("auto"===a.meshingMode)return{mesh_uplink_1:"",mesh_uplink_2:""};const{priorityUplink1:n,priorityUplink2:r}=w_(e,t,a.uplinkPriority1,a.uplinkPriority2);return{mesh_uplink_1:n,mesh_uplink_2:r}})();return{atf_enabled:a.atf_enabled||!1,mesh_sta_vap_enabled:i&&a.meshingEnabled&&("auto"===a.meshingMode||a.uplinkMeshEnable),radio_table:l.map(e=>{const{name:t,radio:r,antenna_gain:l,antenna_id:i,sens_level:o,sens_level_enabled:E}=e,{type:s,...m}=a.radios.find(e=>e.type===r&&e.name===t),d={...m,antenna_gain:l,antenna_id:i,sens_level_enabled:E,sens_level:o,radio:s};if("custom"!==m.tx_power_mode&&delete d.tx_power,d.antenna_id){const e=Object(O.getAntennaById)(n,d.antenna_id);e&&(d.antenna_gain=Object(O.getAntennaGainForRadioName)(e,t))}else delete d.antenna_id;return Object(O.isMinRssiStrictModeSupported)(e)||d.min_rssi_enabled||delete d.hard_noise_floor_enabled,d.min_rssi_enabled||delete d.min_rssi,d.sens_level_enabled||delete d.sens_level,c&&(delete d.channel,delete d.ht),r===$m.a.NA.type&&(d.vwire_enabled=a.meshingEnabled&&("auto"===a.meshingMode||d.vwire_enabled)),d}),mesh_uplink_1:o,mesh_uplink_2:E}}}componentDidMount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n,priorityUplinkOptions:r,intl:c}=this.props;e({radios:this.getSaveData}),t({radios:e=>{var t,a;this.updateUplinkPriorities();const{atf_enabled:l,mesh_uplink_1:i,mesh_uplink_2:o,mesh_sta_vap_enabled:E}=e,s=Object(O.getRadios)(e),m=null===(a=null===(t=s.find(({radio:e})=>e===$m.a.NA.type))||void 0===t?void 0:t.vwire_enabled)||void 0===a||a,d=null==E||E,_=m||d,{priorityUplink1:u,priorityUplink2:b}=w_(c,r,i,o),p=_&&m!==d||d&&(u||b)?"manual":"auto",I={radios:s.reduce((e,{name:t,radio:a,ht:n,channel:r,tx_power_mode:c,min_txpower:l,tx_power:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||"20",channel:r||"auto",tx_power_mode:c||"auto",tx_power:i||l||0,vwire_enabled:null!=o?o:a===$m.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||v_,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:l||!1,meshingEnabled:_,meshingMode:p,uplinkMeshEnable:d,uplinkPriority1:i||"",uplinkPriority2:o||""};n({values:I})}}),a({radios:n})}componentWillUnmount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a}=this.props;e({radios:null}),t({radios:null}),a({radios:null})}componentDidUpdate(){const{dirty:e,setFormDirty:t,setFormInvalid:a,errors:n}=this.props;t("radios",e),a("radios",!!Object.keys(n).length)}getRadioFields(e,t=!1){const{activeItem:a,countryChannels:n,mgmtSettings:r,isConnectivityMonitorEnabled:l,intl:i,isUbbXg:o,values:E,setFieldValue:s,uplinkItems:m,priorityUplinkOptions:d}=this.props,{name:_,radio:u,min_txpower:b,max_txpower:p}=e,{meshingEnabled:I,meshingMode:g,uplinkMeshEnable:R,uplinkPriority1:v,uplinkPriority2:C}=E,h=E.radios.findIndex(e=>e.type===u&&e.name===_),T=E.radios[h],f=Object(O.getRadioHtOptions)(a,e,n,i),D=Object(Yn.d)(a,O.WIFI_CAPS.HIDE_CH_WIDTH),P=r.outdoor_mode_enabled,y=Object(O.isMinRssiStrictModeSupported)(e)&&T.min_rssi_enabled,S=u===$m.a.NA.type,A=Object(Yn.e)(a)&&S,j=Object(O.isU6Extender)(a),N=Object(O.isUapBeaconHD)(a),L=Object(Ci.b)(n,i,a,u,_,T&&T.ht||"20",{isOutdoorModeEnabled:P}),x=[{value:"auto",label:i.formatMessage({id:"COMMON_VALUE_AUTO"})},...L];x.some(e=>e.value===T.channel)||s(`radios.${h}.channel`,"auto");const w="custom"===(null==T?void 0:T.tx_power_mode),M=Object(O.isPureAp)(a),U=!Object(O.isUBB)(a),{priorityUplinkOptions1:k,priorityUplinkOptions2:z}=V_(i,d,v,C),{priorityUplink1:B,priorityUplink2:W}=w_(i,d,v,C);return c.a.createElement(T_,{key:_,marginBottom:16},c.a.createElement(h_,{alignItems:"center"},u===$m.a.NG.type&&c.a.createElement(S_,{height:"20",width:"20"}),u===$m.a.NA.type&&c.a.createElement(A_,{height:"20",width:"23"}),u===$m.a.AD.type&&c.a.createElement(j_,{height:"20",width:"20"}),c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:this.getRadioSubsection(u)}))),!D&&(o&&u===$m.a.AD.type?c.a.createElement(f_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${h}.channel`,type:"dropdown",options:x,translateLabel:!0,validated:!0,full:!0})):c.a.createElement(f_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(D_,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH",name:`radios.${h}.ht`,type:"dropdown",options:f,translateLabel:!0,validated:!0,full:!0})),c.a.createElement(D_,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${h}.channel`,type:"dropdown",options:x,translateLabel:!0,validated:!0,full:!0})))),!o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(D_,{width:w?"":"100%"},c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER",name:`radios.${h}.tx_power_mode`,type:"dropdown",options:N_,validated:!0,full:!0,translateLabel:!0,translateOptions:!0,disabled:Object(O.isUBB)(a)})),w&&c.a.createElement(D_,null,c.a.createElement(tn.a,{label:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM",name:`radios.${h}.tx_power`,value:E.radios[h].tx_power,min:b,max:p,type:"number",full:!0}))),l&&S&&t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING"})),c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING",name:"meshingEnabled",type:"checkbox",onChange:this.handleEnableMeshingChange})),I&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(y_,null,c.a.createElement(qE.a,{id:"uplink-auto",checked:"auto"===g,name:"auto",onChange:this.handleMeshingModeChange},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_AUTO"})),c.a.createElement(qE.a,{id:"uplink-manual",checked:"manual"===g,name:"manual",onChange:this.handleMeshingModeChange},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_MANUAL"})))),"manual"===g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK"})),c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK",name:`radios.${h}.vwire_enabled`,type:"checkbox"})),M&&!j&&!N&&c.a.createElement(f_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK"})),c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK",name:"uplinkMeshEnable",type:"checkbox"})),M&&R&&c.a.createElement(c.a.Fragment,null,c.a.createElement(T_,{marginBottom:24},c.a.createElement(tn.a,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:1},name:"uplinkPriority1",type:"dropdown",options:k,searchable:!0,value:B,onChange:e=>this.handlePriorityChange("uplinkPriority1",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),!!v&&c.a.createElement(T_,{marginBottom:24},c.a.createElement(tn.a,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:2},name:"uplinkPriority2",type:"dropdown",options:z,searchable:!0,value:W,onChange:e=>this.handlePriorityChange("uplinkPriority2",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),c.a.createElement(T_,{marginBottom:24},c.a.createElement(R_,{items:m})))))),A&&c.a.createElement(f_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS"})),c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS",name:"atf_enabled",type:"checkbox",disabled:Object(O.getDeviceModelFeature)(a,"atfDisabled")})),U&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI"})),c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI",name:`radios.${h}.min_rssi_enabled`,type:"checkbox"})),T.min_rssi_enabled&&c.a.createElement(T_,{marginBottom:16},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_MIN_RSSI"})),c.a.createElement(ii.a,{min:-v_,max:-C_,size:"large",value:-T.min_rssi,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(V.a,{color:"secondary"},"-",e),onChange:e=>{s(`radios.${h}.min_rssi`,-e.target.value)}})),y&&c.a.createElement(f_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(P_,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER"})),c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER",name:`radios.${h}.hard_noise_floor_enabled`,type:"checkbox"})))))}render(){const{activeItem:e}=this.props,t=Object(O.getRadios)(e).sort(O.sortRadios).reverse(),a=t.map(({radio:e})=>e===$m.a.NA.type).lastIndexOf(!0);return t.map((e,t)=>{const n=t===a;return this.getRadioFields(e,n)})}}const x_=e=>({value:"",label:e.formatMessage({id:"COMMON_VALUE_AUTO"})}),V_=(e,t,a,n)=>({priorityUplinkOptions1:[x_(e)].concat(...t.filter(e=>!e.value||e.value!==n)),priorityUplinkOptions2:[x_(e)].concat(...t.filter(e=>!e.value||e.value!==a))}),w_=(e,t,a,n)=>{var r,c;const{priorityUplinkOptions1:l,priorityUplinkOptions2:i}=V_(e,t,a,n);return{priorityUplink1:a&&(null===(r=l.find(e=>(null==e?void 0:e.value)===a))||void 0===r?void 0:r.value)||"",priorityUplink2:n&&(null===(c=i.find(e=>(null==e?void 0:e.value)===n))||void 0===c?void 0:c.value)||""}},F_=Object(Ja.g)({mapPropsToValues:({activeItem:e,intl:t,priorityUplinkOptions:a})=>{var n,r;const{atf_enabled:c,mesh_uplink_1:l,mesh_uplink_2:i,mesh_sta_vap_enabled:o}=e,E=Object(O.getRadios)(e),s=null===(r=null===(n=E.find(({radio:e})=>e===$m.a.NA.type))||void 0===n?void 0:n.vwire_enabled)||void 0===r||r,m=null==o||o,d=s||m,{priorityUplink1:_,priorityUplink2:u}=w_(t,a,l,i),b=d&&s!==m||m&&(_||u)?"manual":"auto";return{radios:E.reduce((e,{name:t,radio:a,ht:n,channel:r,tx_power_mode:c,tx_power:l,min_txpower:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||O.DEFAULT_HT[a],channel:Number(r)||"auto",tx_power_mode:c||"auto",tx_power:l||i||0,vwire_enabled:null!=o?o:a===$m.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||v_,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:c||!1,meshingEnabled:d,meshingMode:b,uplinkMeshEnable:m,uplinkPriority1:l||"",uplinkPriority2:i||""}},validate:(e,{activeItem:{radio_table:t},intl:a})=>{const n={};return e.radios.forEach((e,r)=>{const{tx_power_mode:c,tx_power:l,name:i,type:o}=e;if("custom"===c){const e=t.find(e=>e.radio===o&&e.name===i);if(e){const{min_txpower:t,max_txpower:c}=e;(l<t||l>c)&&(n.radios||(n.radios=[]),n.radios[r]={tx_power:a.formatMessage({id:"DEVICE_VALIDATION_HINT_RANGE"},{min:t,max:c})})}}}),n},handleSubmit:()=>{}}),M_={createToast:na.c,tabGetDataFunction:N.h,tabSubmitFunction:N.j,tabResetFunction:N.i,setPriorityUplink:O.setPriorityUplink,unsetPriorityUplink:O.unsetPriorityUplink};var U_=Object(ht.compose)(Object(o.connect)((e,{activeItem:t})=>({countryChannels:Object(Ci.d)(e),mgmtSettings:Object(Ei.selectMgmtSettings)(e),priorityUplinkOptions:y(e),uplinkItems:Object(O.selectDeviceEnhancedUplinkTable)(e,t)}),M_),F.f,F_)(L_);const k_=Object(l.c)(M.a)`
  margin-bottom: 16px;
`,z_=Object(l.c)(M.a)`
  > label:not(:first-child) {
    margin-left: 18px;
  }
`;var B_=Object(Ja.g)({mapPropsToValues:({activeItem:{bandsteering_mode:e}={}})=>({bandsteering_mode:e||at.BandsteeringMode.OFF}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({setFormDirty:e,dirty:t,values:a,resetForm:n,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(r.useEffect)(()=>{e("bandSteering",t)},[e,t]),Object(r.useEffect)(()=>(i(Object(N.h)({bandSteering:()=>a})),i(Object(N.j)({bandSteering:()=>n({values:a})})),i(Object(N.i)({bandSteering:n})),()=>{i(Object(N.h)({bandSteering:null})),i(Object(N.j)({bandSteering:null})),i(Object(N.i)({bandSteering:null}))}),[i,n,a]);const E=Object(r.useCallback)(e=>e.target.checked&&l("bandsteering_mode",e.target.name),[l]);return c.a.createElement(k_,null,c.a.createElement(z_,null,c.a.createElement(qE.a,{id:"band-steer-off",checked:a.bandsteering_mode===at.BandsteeringMode.OFF,name:at.BandsteeringMode.OFF,onChange:E},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_OFF"})),c.a.createElement(qE.a,{id:"band-steer-prefer-5g",checked:a.bandsteering_mode===at.BandsteeringMode.PREFER_5G,name:at.BandsteeringMode.PREFER_5G,onChange:E},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_PREFER_5G"})),c.a.createElement(qE.a,{id:"band-steer-equal",checked:a.bandsteering_mode===at.BandsteeringMode.EQUAL,name:at.BandsteeringMode.EQUAL,onChange:E},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_BALANCED"}))))});const W_=Object(l.c)(M.a)`
  padding: 0 32px;
`;var H_=Object(ht.compose)(Za(["general","led","services","network"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(W_,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:m})},...Object(Yn.f)(e)?[{id:"bandsteer",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>c.a.createElement(B_,{activeItem:e,setFormDirty:t})}]:[],{id:"led",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(m_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(E).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});var G_=({activeItem:{ip:e,satisfaction:t,uptime:a,lan_ip:n},activeItem:r})=>{var l,i;const o=Object(O.getDeviceIp)(r),E=Object(O.getDeviceLoadAverage)(r),{na:s,ng:m,naNumSta:d,ngNumSta:_}=Object(O.getSatisfactionByRadio)(r),u=Object(Me.d)(t);return c.a.createElement(M.a,{flexDirection:"column"},u&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_WIFI_EXPERIENCE_2G"})),_&&0!==m?c.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(m,100)/100,style:{color:we.a["color-"+Object(Me.c)(Math.min(m||0,100))]}}):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_WIFI_EXPERIENCE_5G"})),d&&0!==s?c.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(s,100)/100,style:{color:we.a["color-"+Object(Me.c)(Math.min(s||0,100))]}}):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_NA"})))),Object(O.isUdmPro)(r)?c.a.createElement(c.a.Fragment,null,(null===(l=null==r?void 0:r.wan1)||void 0===l?void 0:l.ip)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS_INDEXED",values:{wanIndex:1}})),c.a.createElement(V.a,{size:"body"},r.wan1.ip)),(null===(i=null==r?void 0:r.wan2)||void 0===i?void 0:i.ip)&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS_INDEXED",values:{wanIndex:2}})),c.a.createElement(V.a,{size:"body"},r.wan2.ip))):c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS"})),c.a.createElement(V.a,{size:"body"},e)),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"})),c.a.createElement(V.a,{size:"body"},o)),a>0&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_UPTIME"})),c.a.createElement(V.a,{size:"body"},Object(Xt.a)(a))),c.a.createElement(cl,{activeItem:r}),E&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),c.a.createElement(V.a,{size:"body"},E)),!Object(O.isUdmPro)(r)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(tm,{activeItem:r}),c.a.createElement(am,{activeItem:r})))};const Y_=Object(l.c)("div")`
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
`;var Z_=Object(F.f)((function({activeItem:e,radioType:t,radioName:a,intl:n,hideChUtil:r=!1}){const{radio_table:l,radio_table_stats:i,type:o}=e,E=l.find(e=>e.radio===t&&(!a||e.name===a)),s=null==i?void 0:i.find(e=>e.radio===t),m=Object(O.getRadioChannelUtilization)(e,s),{totalPackets:d,totalBytes:_,droppedPercentage:u,retryPercentage:b}=Object(O.getApRadioStats)(e,E,"rx"),{totalPackets:p,totalBytes:I,droppedPercentage:g,retryPercentage:R}=Object(O.getApRadioStats)(e,E,"tx"),v=Object(O.getRadioStatsTransmitPowerString)(e,s,n);return c.a.createElement(Y_,null,c.a.createElement($_,null,c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(gm.a,{device:e,radio:E,hidePowerInfo:!0,textSize:"body"})))),c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"}))),c.a.createElement(q_,null,v?c.a.createElement(V.a,{size:"body"},v):c.a.createElement(V.a,{size:"body"}," "))),c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},p," / ",I))),c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},d," / ",_))),c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},R,"% / ",g,"%"))),c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},b,"% / ",u,"%"))),!r&&m&&c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},`${m.total}% / ${m.selfRx}% / ${m.selfTx}%`))),s&&o!==O.DeviceType.UBB&&c.a.createElement(c.a.Fragment,null,c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},s["user-num_sta"]))),c.a.createElement(K_,null,c.a.createElement(X_,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_GUESTS"}))),c.a.createElement(q_,null,c.a.createElement(V.a,{size:"body"},s["guest-num_sta"]))))))}));const J_=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Q_=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,eu=Object(l.c)("div")`
  margin-bottom: 16px;
`;function tu({activeItem:e}){return c.a.createElement(J_,null,c.a.createElement(Q_,{color:"primary",weight:"bold",size:"body"},c.a.createElement(F.b,{id:"DEVICE_HEADER_RADIO2G_SHORT"})),c.a.createElement(Z_,{activeItem:e,radioType:Im.b.NG}),c.a.createElement(eu,null),c.a.createElement(Q_,{color:"primary",weight:"bold",size:"body"},c.a.createElement(F.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),c.a.createElement(Z_,{activeItem:e,radioType:Im.b.NA}))}const au=Object(l.c)("div")`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`,nu=l.a`
  th {
    padding-left: 0;
    padding-right: 0;
  }
`,ru=l.a`
  :hover {
    cursor: pointer;
  }

  td {
    padding-left: 0;
    padding-right: 25px;
  }
`,cu=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  white-space: pre;
`,lu=Object(l.c)("div")`
  margin: 20px 0;
`,iu=Object(l.c)(V.a)`
  color: ${({theme:e})=>e.colors.blue};
`,ou=[{id:"name",minWidth:85,growthFactor:1,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"})),renderCell:e=>c.a.createElement(iu,{size:"body",truncate:!0},Object(I.getClientDisplayName)(e))},{id:"connection",minWidth:50,growthFactor:2,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_CONNECTION"})),renderCell:e=>e.type===I.ClientType.WIRED?c.a.createElement(V.a,{size:"body",truncate:!0},e.network_name):e.type===I.ClientType.WIRELESS?c.a.createElement(V.a,{size:"body",truncate:!0},e.essid):c.a.createElement(F.c,{id:"COMMON_NA"})},{id:"signal",minWidth:50,growthFactor:1,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_SIGNAL"})),renderCell:e=>e.type===I.ClientType.WIRELESS?c.a.createElement(cu,null,dl(e.rssi)," ",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"})):c.a.createElement(F.c,{id:"COMMON_NA"})},{id:"tx_rate",minWidth:50,growthFactor:1,renderLabel:()=>c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_TX_RATE"})),renderCell:e=>e.type!==I.ClientType.VPN?!e.is_wired&&c.a.createElement(me.a,{size:"body",type:"bytes",input:1e3*e.tx_rate,options:"bitrate"}):c.a.createElement(V.a,{size:"body"}," ",c.a.createElement(F.c,{id:"COMMON_NA"}))}];var Eu=({activeItem:e,params:t,path:a,history:r})=>{const{site:l,page:i,subPage:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(Object(I.selectClientsByDevice)(e));return Object(L.f)([Object(I.fetchClients)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],c.a.createElement(au,null,c.a.createElement(fe.a,{items:m,disableColumnFilters:!0,headerRowClassName:nu,rowClassName:ru,columns:ou,initialSortBy:"name",renderFooter:()=>m.length>0?c.a.createElement(lu,null,c.a.createElement(F.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:e=>{const t=Object(n.i)(a,{id:e.mac,site:l,page:i,panel:"about",subPage:E});r.push(t),s(Object(N.g)({type:d.b.CLIENT,mac:e.mac}))}})))};const su=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,mu=l.a`
  padding: 0;
  margin: 0;
`;var du=function({activeItem:e,...t}){const a=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Om,{activeItem:e}),c.a.createElement(Rl,{activeItem:e}),c.a.createElement(su,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(G_,{activeItem:e})},...OE(e),{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>c.a.createElement(tu,{activeItem:e})},{id:"apGroups",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>c.a.createElement(dm,null)},{id:"downlinks",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>c.a.createElement(Eu,Object.assign({activeItem:e},t))},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>c.a.createElement(mE,Object.assign({activeItem:e},t))}],contentClassName:mu,multiOpen:!0,renderOnlyExpandedContent:!0})))};const _u=Object(l.c)(M.a,{shouldForwardProp:e=>!["marginTop","marginBottom"].includes(e)})`
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
`,Ou=Object(Ja.g)({mapPropsToValues:({usgSettings:{mss_clamp_mss:e,mss_clamp:t,arp_cache_timeout:a,arp_cache_base_reachable:n,echo_server:r},activeItem:{jumboframe_enabled:c=!1,flowctrl_enabled:l=!1}})=>({jumboframe_enabled:c,flowctrl_enabled:l,usgSettings:{mss_clamp:t||Ei.USG_DEFAULTS.mss_clamp,mss_clamp_mss:e||Ei.USG_DEFAULTS.mss_clamp_mss,arp_cache_timeout:a||"normal",arp_cache_base_reachable:n||Ei.USG_DEFAULTS.arp_cache_base_reachable,echo_server:r||Ei.USG_DEFAULTS.echo_server}}),validationSchema:Qa.a.object().shape({jumboframe_enabled:Qa.a.boolean(),flowctrl_enabled:Qa.a.boolean(),usgSettings:Qa.a.object().shape({mss_clamp:Qa.a.string(),mss_clamp_mss:Qa.a.number().when("mss_clamp",{is:Ei.MssClamp.CUSTOM,then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP").required().min(Ei.USG_DEFAULTS.min_mss_clamp_mss).max(Ei.USG_DEFAULTS.mss_clamp_mss)}),arp_cache_timeout:Qa.a.string(),arp_cache_base_reachable:Qa.a.number().when("arp_cache_timeout",{is:"custom",then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT").required().min(1).max(Ei.USG_DEFAULTS.max_arp_cache_base_reachable)}),echo_server:Qa.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(Rn.f,c.a.createElement(F.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}}))})}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Iu=Object(ht.compose)(Object(o.connect)(e=>({usgSettings:Object(Ei.selectUsgSettings)(e)})),Ou)(({values:e,dirty:t,resetForm:a,setFormDirty:n,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(r.useEffect)(()=>{const{usgSettings:t,...n}=e;i(Object(N.h)({services:()=>n})),i(Object(N.j)({services:()=>{i(Object(Ei.saveSettings)({key:Ei.USG_DEFAULTS.key,...t})),a({values:e})}})),i(Object(N.i)({services:a}))},[e]),Object(r.useEffect)(()=>{n("services",t)},[t]);const E=e=>{e.target.checked&&l("usgSettings.mss_clamp",e.target.name)},s=e=>{e.target.checked&&l("usgSettings.arp_cache_timeout",e.target.name)},m=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?l("usgSettings.echo_server",""):l("usgSettings.echo_server",e.target.name))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(_u,{marginBottom:10},c.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),c.a.createElement(_u,{marginBottom:24},c.a.createElement(pu,null,c.a.createElement(qE.a,{id:"mssClampingAuto",checked:e.usgSettings.mss_clamp===Ei.MssClamp.AUTO,name:Ei.MssClamp.AUTO,onChange:E},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"})),c.a.createElement(qE.a,{id:"mssClampingCustom",checked:e.usgSettings.mss_clamp===Ei.MssClamp.CUSTOM,name:Ei.MssClamp.CUSTOM,onChange:E},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"})),c.a.createElement(qE.a,{id:"mssClampingDisabled",checked:e.usgSettings.mss_clamp===Ei.MssClamp.DISABLED,name:Ei.MssClamp.DISABLED,onChange:E},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"})))),e.usgSettings.mss_clamp===Ei.MssClamp.CUSTOM&&c.a.createElement(_u,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},c.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",label:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING",name:"usgSettings.mss_clamp_mss"})),c.a.createElement(_u,{marginBottom:10},c.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT"}))),c.a.createElement(_u,{marginBottom:24},c.a.createElement(pu,null,c.a.createElement(qE.a,{id:"normal",checked:"normal"===e.usgSettings.arp_cache_timeout,name:"normal",onChange:s},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_NORMAL"})),c.a.createElement(qE.a,{id:"min-dhcp-lease",checked:"min-dhcp-lease"===e.usgSettings.arp_cache_timeout,name:"min-dhcp-lease",onChange:s},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_MIN_DHCP_LEASE"})),c.a.createElement(qE.a,{id:"custom",checked:"custom"===e.usgSettings.arp_cache_timeout,name:"custom",onChange:s},c.a.createElement(F.c,{id:"COMMON_LABEL_CUSTOM"})),c.a.createElement(bu,{message:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP"}),width:180,position:"left"},c.a.createElement(uu,{isActive:!0})))),"custom"===e.usgSettings.arp_cache_timeout&&c.a.createElement(_u,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},c.a.createElement(Jn.Field,{full:!0,label:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_LABEL",placeholder:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_PLACEHOLDER",name:"usgSettings.arp_cache_base_reachable"})),c.a.createElement(_u,{marginBottom:10},c.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),c.a.createElement(_u,{marginBottom:0},c.a.createElement(pu,null,c.a.createElement(qE.a,{id:"echoServerDefault",checked:e.usgSettings.echo_server===Ei.USG_DEFAULTS.echo_server,name:Ei.USG_DEFAULTS.echo_server,onChange:m},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"})),c.a.createElement(qE.a,{id:"echoServerIpOrHostname",checked:e.usgSettings.echo_server!==Ei.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:m},c.a.createElement(F.c,{id:"COMMON_LABEL_CUSTOM"})),c.a.createElement(bu,{message:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},c.a.createElement(uu,{isActive:!0})))),e.usgSettings.echo_server!==Ei.USG_DEFAULTS.echo_server&&c.a.createElement(_u,{marginBottom:0,marginTop:24,alignItems:"flex-start",flexDirection:"column"},c.a.createElement(Jn.Field,{full:!0,label:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"usgSettings.echo_server"})))});const gu=Object(l.c)(M.a)`
  width: 100%;
`,Ru=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,vu=l.a`
  padding: 0;
  margin: 0;
`;var Cu=Object(ht.compose)(Za(["general","screen","network","services"]),F.f)((function({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E}){const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),_=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:b,mac:p}=e,I=Object(o.useDispatch)(),g=[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:u})},{id:"ports",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>c.a.createElement(cE,{activeItem:e})},{id:"screen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Iu,{activeItem:e,setFormDirty:t})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e,disableDebug:!0,disableForget:!0})}];return(Object(O.hasActiveUnifiCare)(e)||Object(O.isUnifiCareEligible)(e))&&(g.forEach(e=>{e.openByDefault=!1}),g.unshift({id:"unifiCare",label:c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>c.a.createElement(HE,{device:e}),openByDefault:!0})),Object(Yn.f)(e)&&"bandsteer"!==g[2].id&&g.splice(2,0,{id:"bandsteer",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>c.a.createElement(B_,{activeItem:e,setFormDirty:t})}),c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(gu,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ru,{variant:"secondary",renderOnlyExpandedContent:!0,items:g,contentClassName:vu,multiOpen:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});I(Object(O.updateDeviceWithIdEndpoint)(e,b,p,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(m).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))}));var hu=({activeItem:e,forUdm:t,forUdmPro:a,disableUsageChart:n=!1})=>{const l=Object(o.useDispatch)();return Object(r.useEffect)(()=>{l(Object(De.fetchDeviceUsageReport)(e.mac))},[]),c.a.createElement(c.a.Fragment,null,!n&&c.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],forUdm:t,pickDatumsWithKey:a?"gw":null,heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"}),t&&c.a.createElement(Jl,{gwMac:e.mac,keys:["num_sta"],forUdm:t,heading:"DEVICE_GATEWAY_CLIENTS_STAT_CHART_HEADER"}))};const Tu=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,fu=l.a`
  padding: 0;
  margin: 0;
`;var Du=function({activeItem:e,...t}){const a=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),n=t_(e),l=[],i=Object(o.useSelector)(O.selectIsUdr);return n.length&&l.push({id:"channelUsage",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>c.a.createElement(r_,{ChannelBars:n})}),Object(O.isDeviceConnected)(e)&&Object(Yn.d)(e,O.WIFI_CAPS.RF_SCAN)&&l.push({id:"rfEvironment",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>c.a.createElement(Wd,{activeItem:e})}),a&&l.push({id:"statistics",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(hu,Object.assign({activeItem:e,forUdm:!0},t,{disableUsageChart:i}))}),c.a.createElement(Tu,{variant:"secondary",items:l,contentClassName:fu,multiOpen:!0,renderOnlyExpandedContent:!0})};const Pu=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var yu=({activeItem:e,...t})=>{const a=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),n=!Object(O.hasActiveUnifiCare)(e)&&Object(O.isUnifiCareEligible)(e);return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(HE,{device:e,hideWarning:!0}),c.a.createElement(zl,{device:e}),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Rl,{activeItem:e}),c.a.createElement(Pu,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(G_,{activeItem:e})},...OE(e),{id:"downlinks",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(gl,Object.assign({activeItem:e},t))},{id:"networks",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(mE,{activeItem:e})},...Object(O.hasActiveUnifiCare)(e)?[{id:"unifiCare",label:c.a.createElement(F.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>c.a.createElement(HE,{device:e,hideWarning:!0})}]:[]],multiOpen:!0,renderOnlyExpandedContent:!0})))};const Su=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,Au=Object(l.c)("div")`
  margin-bottom: 16px;
`;var ju=({activeItem:e})=>c.a.createElement(Su,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),c.a.createElement(Au,null),c.a.createElement(hu,{activeItem:e,forUdmPro:!0}));const Nu=Object(l.c)(M.a)`
  padding: 0 32px;
`;var Lu=Object(ht.compose)(Za(["general","lcmScreen","services","network"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Xa),_=Object(o.useSelector)(qa),{_id:u,mac:b}=e,p=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,s&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(Nu,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>c.a.createElement(cE,{activeItem:e})},{id:"lcmScreen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ri,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(mE,{activeItem:e}),c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a}))},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Iu,{activeItem:e,setFormDirty:t})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e,disableDebug:!0,disableForget:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;p(Object(O.updateDeviceWithIdEndpoint)(a,u,b,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))});const xu=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Vu=Object(l.c)(V.a)`
  margin-bottom: 4px;
`,wu=Object(l.c)("div")`
  margin-bottom: 16px;
`;function Fu({activeItem:e}){return Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e])?c.a.createElement(xu,null,c.a.createElement(Vu,{weight:"bold",size:"body"},c.a.createElement(F.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),c.a.createElement(Z_,{activeItem:e,radioType:Im.b.NA}),c.a.createElement(wu,null),c.a.createElement(Vu,{weight:"bold",size:"body"},c.a.createElement(F.b,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),c.a.createElement(Z_,{activeItem:e,radioType:Im.b.AD})):null}var Mu=({activeItem:e})=>{var t,a;const n=null!==(t=e.distance)&&void 0!==t?t:Object(O.isUBB)(e)&&(null===(a=e.peer_ubb)||void 0===a?void 0:a.distance);return void 0!==n?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_DISTANCE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n," ",c.a.createElement(F.c,{id:"COMMON_UNIT_METERS_SHORT"}))):null};var Uu=({activeItem:e})=>{var t,a,n,r;const l=null!==(a=null===(t=e.p2p_stats)||void 0===t?void 0:t.throughput)&&void 0!==a?a:Object(O.isUBB)(e)&&(null===(r=null===(n=e.peer_ubb)||void 0===n?void 0:n.p2p_stats)||void 0===r?void 0:r.throughput);return l>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_SPEED"})),c.a.createElement(me.a,{size:"body",type:"bytes",color:"secondary",input:l,options:"bitrate"})):null};var ku=({activeItem:e})=>{const t=Object(O.getLinkQuality)(e);return t>0?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"})),c.a.createElement(me.a,{size:"body",type:"percent",input:t/100,style:{color:Rt.a.getGradientColor(t/100)}})):null};function zu({activeItem:e}){return c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(ks,{activeItem:e}),c.a.createElement(Mu,{activeItem:e}),c.a.createElement(Uu,{activeItem:e}),c.a.createElement(ku,{activeItem:e}),c.a.createElement(zs,{activeItem:e}))}const Bu=Object(l.c)(V.a)`
  margin-top: 16px; // 16
  margin-bottom: 4px; // 4
`,Wu=l.a`
  margin-right: -17px;
`,Hu=Object(l.c)(pn.a)`
  margin-left: 4px; // 4
  display: inline-block;
  vertical-align: text-bottom;
`;var Gu=({deviceData:e,ubbDeviceType:t,pendingAdoption:a})=>{const{mac:n,ip:r,link_capacity:l,uptime:i,has_temperature:o,general_temperature:E,uplink:s}=e,{rssi:m,tx_rate:d,tx_packets:_,rx_rate:u,tx_bytes:b,"tx_bytes-r":p,rx_packets:O,rx_bytes:I,"rx_bytes-r":g,speed:R}=s||{},v=g+p,C=Object(ur.y)(e);return c.a.createElement(M.a,{flexDirection:"column"},n&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_MAC"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n)),r&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),c.a.createElement(V.a,{color:"secondary",size:"body"},r)),!a&&c.a.createElement(c.a.Fragment,null,l>0&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),c.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e6*l/8,options:"bitrate"})),o&&!!E&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:E}}))),i&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),c.a.createElement(me.a,{type:"uptime",color:"secondary",size:"body",input:i})),c.a.createElement(cl,{activeItem:e}),C&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),c.a.createElement("span",null,c.a.createElement(V.a,{color:"secondary",size:"body"},Object(ur.y)(e)),c.a.createElement(Hu,{message:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE_TOOLTIP"}),width:200,position:"bottomRight",tooltipClassName:Wu,portal:!0},c.a.createElement(w.W,{isActive:!0})))),!!s&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Bu,{color:"primary",weight:"bold"},c.a.createElement(F.c,{id:t===mb.STATION?"DEVICE_PROPERTY_UPLINK_WIRELESS":"DEVICE_PROPERTY_UPLINK_WIRED"})),t===mb.STATION&&c.a.createElement(c.a.Fragment,null,m&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},ml(m)," (",dl(m)," ",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")),d&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RATE"})),c.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e3*d/8,options:"bitrate"})),u&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RATE"})),c.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e3*u/8,options:"bitrate"}))),t===mb.ACCESS_POINT&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),c.a.createElement(V.a,{color:"secondary",size:"body"},R))),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},O&&I?c.a.createElement(c.a.Fragment,null,O.toLocaleString()," / ",c.a.createElement(me.a,{type:"bytes",input:I,color:"secondary",size:"body"})):"0.00 / 0.00")),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_UP_PKTS_BYTES"})),c.a.createElement(V.a,{color:"secondary",size:"body"},_&&b?c.a.createElement(c.a.Fragment,null,_.toLocaleString()," / ",c.a.createElement(me.a,{type:"bytes",input:b,color:"secondary",size:"body"})):"0.00 / 0.00")),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_ACTIVITY"})),c.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:v,options:"bitrate"})))))},Yu=a(2046),$u=a.n(Yu);const Ku=Object(l.c)(M.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,Xu=Object(l.c)(M.a)`
  text-align: center;
  width: 122px;
`,qu=Object(l.c)(M.a)`
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
`,tb=Object(l.c)(M.a)`
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
`,rb=Object(l.c)(M.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,cb=Object(l.c)(me.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,lb=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,ib=Object(l.c)(M.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,ob=Object(l.c)(w.U)`
  margin-right: 12px;
`;function Eb({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},link_quality:n,led_override_color:r}=e,l=Object(Me.c)(n),i=!t&&Object(ur.Kd)(e),o=!t&&Object(ur.Jd)(e),E=Object(dt.a)($m.a[Object(dt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?we.a["color-danger"]:t||"warning"===l?we.a["color-warning"]:we.a["color-success"],c.a.createElement(c.a.Fragment,null,c.a.createElement(Ku,{justifyContent:"space-between"},c.a.createElement(Xu,{flexDirection:"column"},c.a.createElement(rb,null,c.a.createElement(ab,{src:$u.a}),c.a.createElement(nb,{color:r||we.a["blue-0"],left:23})),c.a.createElement(lb,{color:"secondary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_AP"})),c.a.createElement(lb,{color:"secondary"},E)),c.a.createElement(qu,{flexDirection:"column",alignItems:"center"},c.a.createElement(Qu,null,c.a.createElement(eb,{linkAnimationColor:s})),c.a.createElement(tb,{flexDirection:"column"},i&&c.a.createElement(cb,{type:"percent",input:n/100,style:{color:Rt.a.getGradientColor(n/100)}}),c.a.createElement(lb,{color:"primary",weight:"bold"},i&&c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),c.a.createElement(Xu,{flexDirection:"column"},c.a.createElement(rb,null,c.a.createElement(ab,{src:$u.a,flip:!0}),c.a.createElement(nb,{color:a.led_override_color||we.a["blue-0"],right:23})),c.a.createElement(lb,{color:"secondary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_STATION"})),c.a.createElement(lb,{color:"secondary"},E))),(t||o)&&c.a.createElement(ib,{alignItems:"center"},c.a.createElement(ob,{width:24,height:24}),c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const sb=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var mb;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(mb||(mb={}));var db=({activeItem:e})=>{const{peer_ubb:t,adopted:a}=e,n=Object(O.getUplinkAttrs)(e)||{},l=null==t?void 0:t.uplink,i=t&&(!Object(O.getIsUbbPeerAdopted)(e)||!a),o=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Eb,{activeItem:e,pendingAdoption:i}),c.a.createElement(zl,{device:e}),o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Rl,{activeItem:e}),c.a.createElement(sb,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(zu,{activeItem:e})},...t?[{id:"station",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_STATION"}),"  (",c.a.createElement(F.c,{id:"wireless"===(null==l?void 0:l.type)?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>c.a.createElement(Gu,{deviceData:t,ubbDeviceType:mb.STATION,pendingAdoption:i})}]:[],{id:"accessPoint",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_AP"}),"  (",c.a.createElement(F.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>c.a.createElement(Gu,{deviceData:e,ubbDeviceType:mb.ACCESS_POINT,pendingAdoption:i})},...i?[]:[{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>c.a.createElement(Fu,{activeItem:e})}]],multiOpen:!0,renderOnlyExpandedContent:!0})))};const _b=Object(l.c)(V.a)`
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
`,bb=Object(l.c)(M.a)`
  margin-bottom: 20px;
`,pb=Object(Hl.a)(6,e=>({value:e,label:String(e)})).reverse(),Ob=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var Ib=Object(_n.b)(c.a.memo(e=>{const{mac:t,keys:a,heading:n,theme:r,colors:l,noLegend:i=!1,fetchReport:E,legend:s}=e,m=Object(o.useSelector)(Object(De.selectDeviceStatReport)(t,E,De.OBJECT.UBB,a)),d=Object(o.useSelector)(Gl.O),_={},u=Date.now(),b=Object(Tt.startOfHour)(Object(Tt.addHours)(u,1)).getTime(),p=d?"H:ss":"ha",O=Object(Yl.b)(b,p),I=O[0].value,g=Object(Wl.m)(m.filter(e=>e.time>I).map(e=>({...e,x:e.time})),St.a.MINUTES.grain);g[0]&&a[0]in g[0]&&g.forEach(e=>{a.forEach((t,a)=>{_[t]||(_[t]={key:t,lineColor:l[a],maxY:0,data:[]}),_[t].data.push({x:e.x,y:e[t]})})});const R=a.map(e=>_[e]?_[e].data.map(e=>e.y||0):0),v=Math.max(...R.flat(),4);let C=pb;return v>5&&(C=Object(Yl.e)(v,6)),c.a.createElement(c.a.Fragment,null,!i&&c.a.createElement(bb,{justifyContent:"flex-end"},c.a.createElement(M.a,null,s.map((e,t)=>c.a.createElement(_b,{legendcolor:l[t],key:e},c.a.createElement(F.c,{id:e}))))),c.a.createElement(M.a,null,c.a.createElement(ub,{color:"primary"},c.a.createElement(F.c,{id:n})),c.a.createElement(ft.a,{xAxis:O,yAxis:C,width:305,height:150,margin:[0,0,20,25],labelClassName:Ob(r),renderChartElements:(e,t,n)=>c.a.createElement(c.a.Fragment,null,a.map(a=>_[a]&&_[a].data.length&&c.a.createElement(Dt.a,{key:_[a].key,data:_[a].data,maxY:n,mouseData:t,getCoordinates:e,variant:"line",lineColor:_[a].lineColor,dashed:!1,hideMissingData:!0})))})))},(e,t)=>e.mac===t.mac&&Object(oi.a)(e.keys,t.keys)));const gb=Object(l.c)("div")`
  padding: 16px 32px 32px 32px;
`,Rb=Object(l.c)("div")`
  margin-top: ${({marginTop:e})=>e||0}px;
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,vb=[{value:mb.ACCESS_POINT,label:"DEVICE_TYPE_UBB_AP"},{value:mb.STATION,label:"DEVICE_TYPE_UBB_STATION"}];const Cb=Object(Ja.g)({mapPropsToValues:()=>({device:mb.ACCESS_POINT,channel:"wlan0"}),handleSubmit:null});var hb=Object(ht.compose)(F.f,Cb)((function({activeItem:e,values:{device:t,channel:a},intl:n}){const l=Object(o.useDispatch)(),{mac:i,peer_ubb:E={}}=e,s=t===mb.ACCESS_POINT?i:E.mac,m=[a+"-rx_dropped",a+"-tx_dropped"],d=[a+"-tx_retries"],_=Object(r.useMemo)(()=>Object(O.getRadios)(e).map(e=>({value:e.name,label:`${n.formatMessage({id:"DEVICE_LABEL_RADIO_"+e.radio.toUpperCase()})} (${e.name})`})),[e.radio_table]);return Object(r.useEffect)(()=>{l(Object(De.fetchDeviceUsageReport)(s,De.OBJECT.UBB))},[t]),Object(r.useEffect)(()=>{l(Object(De.fetchDeviceDroppedReport)(s,De.OBJECT.UBB,m)),l(Object(De.fetchDeviceRetriesReport)(s,De.OBJECT.UBB,d))},[a,t]),c.a.createElement(gb,null,c.a.createElement(Rb,{marginTop:9,marginBottom:28},c.a.createElement(tn.a,{type:"dropdown",name:"device",label:"DEVICE_PROPERTIES_LABEL_SELECT_DEVICE",options:vb,full:!0,translateLabel:!0,translateOptions:!0})),c.a.createElement(Ib,{mac:s,keys:["cpu","mem"],colors:[we.a["orange-1"],we.a["blue-3"]],heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT",fetchReport:De.fetchDeviceUsageReport,legend:["COMMON_WORD_CPU","COMMON_WORD_MEMORY"]}),c.a.createElement(Rb,{marginTop:35,marginBottom:30},c.a.createElement(tn.a,{type:"dropdown",full:!0,name:"channel",translateLabel:!0,label:"DEVICE_PROPERTIES_LABEL_SELECT_CHANNEL",options:_})),c.a.createElement(Ib,{mac:s,keys:m,colors:[we.a["purple-1"],we.a["purple-1"]],noLegend:!0,fetchReport:De.fetchDeviceDroppedReport,heading:"DEVICE_PROPERTIES_LABEL_DROPPED"}),c.a.createElement(Rb,{marginBottom:30}),c.a.createElement(Ib,{mac:s,keys:d,colors:[we.a["purple-1"]],noLegend:!0,fetchReport:De.fetchDeviceRetriesReport,heading:"DEVICE_PROPERTIES_LABEL_RETRIES"}))}));const Tb=Object(Ja.g)({mapPropsToValues:({activeItem:e,nativeNetworks:t})=>({mgmt_network_id:Object(O.getDeviceNetworkId)(t,e)}),validationSchema:Qa.a.object().shape({mgmt_network_id:Qa.a.string()}),handleSubmit:()=>null});var fb=Object(ht.compose)(Object(o.connect)(e=>({nativeNetworks:Object(un.selectNativeNetworks)(e)}),{}),Tb)(({nativeNetworks:e=[],values:t,resetForm:a,dirty:n,setFormDirty:l,setFormInvalid:i,isValid:E})=>{const s=Object(o.useDispatch)();Object(r.useEffect)(()=>(s(Object(N.h)({vlan:()=>t})),s(Object(N.j)({vlan:()=>a({values:t})})),s(Object(N.i)({vlan:a})),()=>{s(Object(N.h)({vlan:null})),s(Object(N.j)({vlan:null})),s(Object(N.i)({vlan:null}))}),[s,a,t.mgmt_network_id]),Object(r.useEffect)(()=>{l("vlan",n),i("vlan",!E)},[l,i,n,E]);const m=e.map(e=>({value:e._id,label:e.name}));return c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:m,translateLabel:!0})});const Db=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,Pb=Object(l.c)(M.a)`
  width: 100%;
`;var yb,Sb=Object(ht.compose)(Za(["general","tags","network","vlan"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,formStates:l,intl:i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(Pb,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Db,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RADIOS"}),renderContent:()=>c.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1,isUbbXg:!0})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>c.a.createElement(fb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e,disableDebug:!0})}],renderOnlyExpandedContent:!0,multiOpen:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length&&l[t])return"peerUbbLed"===t?{...e,peerUbbLed:n}:{...e,...n}}return e},{}),t=Object(p.a)(e,"peerUbbLed"),a={...t,peer_ubb:{...t.peer_ubb,...t.mgmt_network_id?{mgmt_network_id:t.mgmt_network_id}:{}}};return u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});!function(e){e.ACCESS_POINT="ap",e.STATION="sta"}(yb||(yb={}));const Ab=Object(l.c)("div")`
  margin-bottom: 16px;
`,jb=Object(l.c)("div",{shouldForwardProp:e=>"visible"!==e})`
  ${({visible:e})=>e?"":"display: none;"}
`,Nb=Object(l.c)(V.a)`
  margin-left: 10px;
`;var Lb=({ap:e,sta:t,formName:a})=>{const[n,l]=Object(r.useState)(yb.ACCESS_POINT),i=e=>l(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ab,null,c.a.createElement(M.a,{marginBottom:"12px"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_UBB_CHOOSE_DEVICE"}))),c.a.createElement(M.a,{marginBottom:"16px"},c.a.createElement(M.a,{marginRight:"18px"},c.a.createElement(qE.a,{checked:n===yb.ACCESS_POINT,name:`ubb-device-select-${a}-${yb.ACCESS_POINT}`,id:`ubb-device-select-${a}-${yb.ACCESS_POINT}`,onChange:()=>i(yb.ACCESS_POINT)}),c.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${yb.ACCESS_POINT}`},c.a.createElement(Nb,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_AP"})))),c.a.createElement(M.a,null,c.a.createElement(qE.a,{checked:n===yb.STATION,name:`ubb-device-select-${a}-${yb.STATION}`,id:`ubb-device-select-${a}-${yb.STATION}`,onChange:()=>i(yb.STATION)}),c.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${yb.STATION}`},c.a.createElement(Nb,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_STATION"})))))),c.a.createElement(jb,{visible:n===yb.ACCESS_POINT},e),c.a.createElement(jb,{visible:n===yb.STATION},t))};const xb=Object(l.c)("div")`
  margin-bottom: 20px;
`,Vb=Object(l.c)(M.a)`
  margin-bottom: ${({marginBottom:e})=>e}px;
`,wb=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,Fb=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Mb=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{const{config_network:t,peer_ubb:a,ip:n}=e,{type:r="dhcp",ip:c=n||"",netmask:l="",gateway:i="",dns1:o="",dns2:E="",dnssuffix:s=""}=t,{type:m="dhcp",ip:d=a.ip||"",netmask:_="",gateway:u="",dns1:b="",dns2:p="",dnssuffix:O=""}=a.config_network;return{config_network:{type:r,ip:c,netmask:l,gateway:i,dns1:o,dns2:E,dnssuffix:s},peer_ubb:{config_network:{type:m,ip:d,netmask:_,gateway:u,dns1:b,dns2:p,dnssuffix:O}}}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Qa.a.object().shape({config_network:Li,peer_ubb:Qa.a.object().shape({config_network:Li})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:n,resetForm:l,isValid:i})=>{const E=Object(o.useDispatch)();return Object(r.useEffect)(()=>(E(Object(N.h)({network:()=>{const{config_network:e,peer_ubb:{config_network:t}}=n,a={config_network:{type:e.type},peer_ubb:{config_network:{type:t.type}}};return"dhcp"!==e.type&&(a.config_network={...e}),"dhcp"!==t.type&&(a.peer_ubb.config_network={...t}),a}})),E(Object(N.j)({network:()=>l({values:n})})),E(Object(N.i)({network:l})),()=>{E(Object(N.h)({network:null})),E(Object(N.j)({network:null})),E(Object(N.i)({network:null}))}),[E,l,n]),Object(r.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),c.a.createElement(Lb,{formName:"network",sta:c.a.createElement(c.a.Fragment,null,c.a.createElement(xb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Fb})),"static"===n.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),c.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),c.a.createElement(Vb,{marginBottom:20,justifyContent:"space-between"},c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0}))))),ap:c.a.createElement(c.a.Fragment,null,c.a.createElement(xb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"peer_ubb.config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Fb})),"static"===n.peer_ubb.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"peer_ubb.config_network.ip",full:!0})),c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"peer_ubb.config_network.dns1",full:!0}))),c.a.createElement(Vb,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"peer_ubb.config_network.netmask",full:!0})),c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"peer_ubb.config_network.dns2",full:!0}))),c.a.createElement(Vb,{marginBottom:20,justifyContent:"space-between"},c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"peer_ubb.config_network.gateway",full:!0})),c.a.createElement(wb,null,c.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"peer_ubb.config_network.dnssuffix",full:!0})))))})});const Ub=Object(l.c)(M.a)`
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
`;function Hb({activeItem:{downlink_table:e}}){const t=Object(o.useSelector)(O.selectDevicesData),a=Object(o.useDispatch)(),n=[{id:"mac",sortable:!0,label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_AP_SHORT"})),renderCell:e=>{if(!e)return null;const n=t.find(t=>t.mac===e.mac);return n?c.a.createElement(kb,{name:"propertyPanelButton",onClick:()=>a(Object(N.g)({type:d.b.DEVICE,mac:e.mac})),size:"small",className:Wb,variant:"link"},Object(Y.c)(n)):e.mac}},{id:"rssi",sortable:!0,label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),renderCell:e=>c.a.createElement(V.a,{color:"secondary",size:"body"},ml(e.rssi)," (",dl(e.rssi)," ",c.a.createElement(F.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];return c.a.createElement(Ub,null,c.a.createElement(fe.a,{items:e||[],idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:zb,cellClassName:Bb,columns:n,renderFooter:()=>c.a.createElement("div",null,e&&e.length>0?c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_DEVICES_NOT_FOUND"}))),rowHeight:30}))}const Gb=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,Yb=Object(l.c)(M.a)`
  width: 100%;
`;var $b=Object(ht.compose)(Za(["general","tags","screen","peerUbbScreen","network","vlan","radios"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,formStates:l,intl:i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(Yb,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Gb,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1})},{id:"stationLed",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_STATION_LED"}),renderContent:()=>c.a.createElement(Wi,{activeItem:e.peer_ubb,formName:"peerUbbScreen",setFormDirty:t})},{id:"apLed",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_AP_LED"}),renderContent:()=>c.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>c.a.createElement(fb,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"downlink",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(Hb,{activeItem:e})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],renderOnlyExpandedContent:!0,multiOpen:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length&&l[t])return{...e,...n}}return e},{}),t=Object(p.a)(e,"peerUbbScreen"),a={...t,peer_ubb:{...t.peer_ubb,...e.peerUbbScreen,...t.mgmt_network_id?{mgmt_network_id:t.mgmt_network_id}:{}}};u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const Kb=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Xb=Object(l.c)(V.a)`
  margin-bottom: 4px;
`,qb=Object(l.c)("div")`
  margin-bottom: 16px;
`;function Zb({activeItem:e}){return Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e])?c.a.createElement(Kb,null,c.a.createElement(Xb,{weight:"bold",size:"body"},c.a.createElement(F.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),c.a.createElement(Z_,{activeItem:e,radioType:Im.b.NA}),c.a.createElement(qb,null),c.a.createElement(Xb,{weight:"bold",size:"body"},c.a.createElement(F.b,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),c.a.createElement(Z_,{activeItem:e,radioType:Im.b.AD})):null}function Jb({activeItem:e}){return c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(ks,{activeItem:e}),c.a.createElement(Mu,{activeItem:e}),c.a.createElement(Uu,{activeItem:e}),c.a.createElement(ku,{activeItem:e}),c.a.createElement(zs,{activeItem:e}))}var Qb=a(2047),ep=a.n(Qb);const tp=Object(l.c)(M.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,ap=Object(l.c)(M.a)`
  text-align: center;
  width: 122px;
`,np=Object(l.c)(M.a)`
  padding-top: 50px;
  width: 100%;
`,rp=l.e`
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
`,cp=l.e`
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
  animation: ${rp} 5s infinite;
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
    animation: ${cp} 5s infinite;
  }
`,op=Object(l.c)(M.a)`
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
`,mp=Object(l.c)(M.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,dp=Object(l.c)(me.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,_p=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,up=Object(l.c)(M.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,bp=Object(l.c)(w.U)`
  margin-right: 12px;
`;function pp({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},led_override_color:n}=e,r=Object(ur.bb)(e),l=Object(Me.c)(r),i=!t&&Object(ur.Kd)(e),o=!t&&Object(ur.Jd)(e),E=Object(dt.a)($m.a[Object(dt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?we.a["color-danger"]:t||"warning"===l?we.a["color-warning"]:we.a["color-success"],c.a.createElement(c.a.Fragment,null,c.a.createElement(tp,{justifyContent:"space-between"},c.a.createElement(ap,{flexDirection:"column"},c.a.createElement(mp,null,c.a.createElement(Ep,{src:ep.a}),c.a.createElement(sp,{color:n||we.a["blue-0"],left:23})),c.a.createElement(_p,{color:"secondary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_AP"})),c.a.createElement(_p,{color:"secondary"},E)),c.a.createElement(np,{flexDirection:"column",alignItems:"center"},c.a.createElement(lp,null,c.a.createElement(ip,{linkAnimationColor:s})),c.a.createElement(op,{flexDirection:"column"},i&&c.a.createElement(dp,{type:"percent",input:r/100,style:{color:Rt.a.getGradientColor(r/100)}}),c.a.createElement(_p,{color:"primary",weight:"bold"},i&&c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),c.a.createElement(ap,{flexDirection:"column"},c.a.createElement(mp,null,c.a.createElement(Ep,{src:ep.a,flip:!0}),c.a.createElement(sp,{color:a.led_override_color||we.a["blue-0"],right:23})),c.a.createElement(_p,{color:"secondary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_STATION"})),c.a.createElement(_p,{color:"secondary"},E))),(t||o)&&c.a.createElement(up,{alignItems:"center"},c.a.createElement(bp,{width:24,height:24}),c.a.createElement(V.a,{color:"secondary"},c.a.createElement(F.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const Op=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Ip;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(Ip||(Ip={}));var gp=function({activeItem:e}){const{peer_ubb:t,adopted:a}=e,n=Object(O.getUplinkAttrs)(e),l=null==t?void 0:t.uplink,i=t&&(!Object(O.getIsUbbPeerAdopted)(e)||!a),o=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(pp,{activeItem:e,pendingAdoption:i}),c.a.createElement(zl,{device:e}),o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Rl,{activeItem:e}),c.a.createElement(Op,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(Jb,{activeItem:e})},...t?[{id:"station",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_STATION"})," "," ",!!l&&c.a.createElement(F.c,{id:"wireless"===l.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>c.a.createElement(Gu,{deviceData:e,ubbDeviceType:Ip.STATION,pendingAdoption:i})}]:[],{id:"accessPoint",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"DEVICE_TYPE_UBB_AP"})," "," ",!!n&&c.a.createElement(F.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>c.a.createElement(Gu,{deviceData:t,ubbDeviceType:Ip.ACCESS_POINT,pendingAdoption:i})},...i?[]:[{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>c.a.createElement(Zb,{activeItem:e})}]],multiOpen:!0,renderOnlyExpandedContent:!0})))};var Rp=({wifiNetworkNames:e})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_WIFI_NETWORK"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;function vp({activeItem:e}){const t=Object(o.useSelector)(Ks),a=Object($s.getWifiNetworkNames)(t,!1),n=Object(r.useMemo)(()=>[{Comp:ks,key:"Uptime"},{Comp:Rp,props:{wifiNetworkNames:a},key:"WiFiNetwork"}],[e,a]);return c.a.createElement(M.a,{flexDirection:"column"},n.map(({Comp:t,props:a={},key:n})=>c.a.createElement(t,Object.assign({key:n,activeItem:e},a))))}const Cp=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var hp=({activeItem:e})=>{const t=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),t&&c.a.createElement(Cp,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(vp,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))};const Tp=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var fp=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:r}=Object(O.getUsppUtilization)(e),l="warning"===r;return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),c.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&c.a.createElement(Tp,{size:"medium"}),c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),c.a.createElement(Hd.a,{items:[{value:n,variant:r}]}))};const Dp=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,Pp=Object(l.c)("div")`
  margin-bottom: 16px;
`;var yp=({activeItem:e})=>c.a.createElement(Dp,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),c.a.createElement(Pp,null),c.a.createElement(fp,{activeItem:e}));const Sp=Object(l.c)(M.a)`
  margin-bottom: 24px;
  justify-content: space-between;
`,Ap=Object(l.c)(de.a)`
  margin-top: 12px;
  justify-content: flex-end;
`;var jp=Object(Ja.g)({mapPropsToValues:({activeItem:{outlet_table:e=[],outlet_overrides:t=[]}})=>({...e[0],...t[0]}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,submitForm:t,values:a,dirty:n,isValid:l,resetForm:i,setFormDirty:E,setFormInvalid:s})=>{const m=Object(o.useDispatch)();return Object(r.useEffect)(()=>{E("general",n),s("general",!l)},[E,s,n,l]),Object(r.useEffect)(()=>(m(Object(N.h)({general:()=>({outlet_overrides:[{...a}]})})),m(Object(N.j)({general:t})),m(Object(N.i)({general:i})),()=>{m(Object(N.h)({general:null})),m(Object(N.j)({general:null})),m(Object(N.i)({general:null}))}),[m,i,t,a]),c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(Sp,{flexDirection:"column"},c.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME",placeholder:"DEVICE_PROPERTIES_LABEL_NAME"})),c.a.createElement(Sp,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),c.a.createElement(tn.a,{type:"checkbox",name:"relay_state"})),c.a.createElement(Sp,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(M.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(tn.a,{type:"checkbox",name:"cycle_enabled"})),c.a.createElement(Sp,{flexDirection:"column"},c.a.createElement(M.a,{flexDirection:"column",width:"65%"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(Ap,{variant:"link",onClick:()=>m(Object(O.powerCycleOutlet)(e,a)),Icon:c.a.createElement(w.Ab,null)},c.a.createElement(F.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))))});const Np=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Lp=Object(ht.compose)(Za(["general","network","screen","manage"]),F.f)(({activeItem:{mac:e,_id:t},activeItem:a,setFormDirty:n,setFormInvalid:r,isDirty:l,isInvalid:i,intl:E})=>{const s=Object(o.useDispatch)(),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Xa),_=Object(o.useSelector)(qa);return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Np,{variant:"secondary",items:[{id:"general",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>c.a.createElement(jp,{activeItem:a,setFormDirty:n,setFormInvalid:r})},{id:"screen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(Wi,{activeItem:a,setFormDirty:n,disableLedBrightnessField:!0,disableLedOverrideColor:!0})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:a,setFormDirty:n,setFormInvalid:r})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:a,disableDebug:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:l,isInvalid:i,onFormSubmit:()=>{const a=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});s(Object(O.updateDeviceWithIdEndpoint)(a,t,e,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))});var xp=({activeItem:e,wan:t=!1,lan:a=!1})=>{const n=Object(r.useMemo)(()=>a?Object(_r.c)("LAN",e):null==e?void 0:e.ip,[a,e]),l=Object(r.useMemo)(()=>{let e="DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS";return t?e="DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS":a&&(e="DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"),c.a.createElement(F.c,{id:e})},[t,a]);return n?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},l),c.a.createElement(V.a,{color:"secondary",size:"body"},n)):null};var Vp=({activeItem:e})=>{const t=Object(o.useSelector)(Ks),a=Object($s.getWifiNetworkNames)(t,!1),n=Object(r.useMemo)(()=>[{Comp:xp,props:{wan:!0},key:"IpAddress"},{Comp:ks,key:"Uptime"},{Comp:Rp,props:{wifiNetworkNames:a},key:"WiFiNetwork"}],[e,a]);return c.a.createElement(M.a,{height:"100%",flexDirection:"column"},n.map(({Comp:t,props:a={},key:n})=>c.a.createElement(t,Object.assign({key:n,activeItem:e},a))))};const wp=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var Fp=({activeItem:e})=>{const t=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),t&&c.a.createElement(wp,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Vp,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))};const Mp=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var Up=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:r}=Object(O.getUspsUtilization)(e),l="warning"===r;return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),c.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&c.a.createElement(Mp,{size:"medium"}),c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),c.a.createElement(Hd.a,{items:[{value:n,variant:r}]}))};const kp=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,zp=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Bp=({activeItem:e})=>c.a.createElement(kp,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),c.a.createElement(zp,null),c.a.createElement(Up,{activeItem:e}));const Wp=Object(l.c)(pn.a,{shouldForwardProp:e=>!["cellSize","isEnabled","marginSize"].includes(e)})`
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
`,$p=Object(l.c)(M.a,{shouldForwardProp:e=>"isPowerMeterSupported"!==e})`
  width: ${({isPowerMeterSupported:e})=>e?"134px":"100px"};
`;var Kp=({cellData:e,marginSize:t,cellSize:a,rotateIcon:r,tooltipPosition:l="bottomRight"})=>{const i=Object(n.k)(),{path:o}=Object(n.n)(),{site:E,page:s,id:m,panel:d}=Object(n.m)(),_=Object(Yn.n)(e,"POWER_METER");return c.a.createElement(Wp,{isEnabled:e.relay_state,tooltipClassName:Hp,marginSize:t,cellSize:a,onClick:t=>{var a,r;null===(a=null==t?void 0:t.preventDefault)||void 0===a||a.call(t),null===(r=null==t?void 0:t.stopPropagation)||void 0===r||r.call(t),i.push(Object(n.i)(o,{site:E,page:s,id:m,panel:d,subPanel:"outlets",subPanelId:e.index}))},message:_&&e.outletType===O.OutletType.STANDARD?c.a.createElement($p,{flexDirection:"column",justifyContent:"space-between",isPowerMeterSupported:!0},c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},e.index)),c.a.createElement(M.a,{justifyContent:"space-between",alignItems:"center"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_NAME"})),c.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},e.name)),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.outlet_power||0).toFixed(2)}}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_ENERGY"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},"0.00 ",c.a.createElement(F.c,{id:"COMMON_UNIT_KWH"}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.outlet_current||0).toFixed(2)}}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.outlet_voltage||0).toFixed(2)}}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},Number(e.outlet_power_factor||0).toFixed(2)))):c.a.createElement($p,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},e.index)),c.a.createElement(M.a,{justifyContent:"space-between",alignItems:"center"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_NAME"})),c.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},e.name)),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_ENABLED"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},e.cycle_enabled&&c.a.createElement(w.u,{size:"small"}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},e.relay_state&&c.a.createElement(w.u,{size:"small"})))),position:l,portal:!0},c.a.createElement(Gp,{rotateIcon:r},"usb"===e.outletType?c.a.createElement(Yp,null):c.a.createElement(w.qb,null)))};const Xp=Object(l.c)("div")`
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
`;var Jp=c.a.memo((function({deviceData:e,deviceData:{outlet_table:t},hidePorts:a}){const l=Object(n.k)(),{path:i}=Object(n.n)(),{site:o,page:E,id:s,panel:m}=Object(n.m)(),d=Object(O.getOutletNumbers)(e),{outletsDiagram:_,primaryOutletGroupCount:u}=Object(O.getDeviceSpecs)(e),b=null==t?void 0:t.some(e=>Object(Yn.n)(e,"POWER_METER")),p=Object(r.useMemo)(()=>(e=>[{id:"name",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({name:e})=>c.a.createElement(V.a,{size:"body",truncate:!0},e)},...e?[{id:"power",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_POWER"})),renderCell:({outlet_power:e})=>c.a.createElement(V.a,{size:"body"},e?Number(e).toFixed(2):"-")}]:[],{id:"outletStatus",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{alignItems:"center"},e.portStatus?c.a.createElement(V.a,{size:"body"},e.portStatus):c.a.createElement(c.a.Fragment,null,c.a.createElement(Kp,{cellData:e,rotateIcon:e.rotateIcon,tooltipPosition:"topRight"}),c.a.createElement(Xp,null,c.a.createElement(F.c,{id:e.relay_state?"DEVICE_OUTLET_STATE_ENABLED":"DEVICE_OUTLET_STATE_DISABLED"})))),c.a.createElement(Zp,{size:"small"}))}])(b),[b]),I=_?Object(O.determineRowLayoutsFromOutletDiagramConfig)(_,e):Object(O.determineRowLayoutsFromOutletConfig)(u,e),g=Object(r.useMemo)(()=>Lr(e,[],{position:"topRight"}),[e]),R=Object(r.useMemo)(()=>[...I.flat().filter(e=>!!e).sort(({outletNumber:e},{outletNumber:t})=>e-t),...a?[]:g],[a,g,I]).map((t,a)=>{const n=Object(O.getActiveOutletInfo)(e,t.outletNumber-1);return{...t.portStatus?t:n,id:t.portStatus?"port-"+t.id:t.outletNumber+a,outletType:t.portStatus?null:Object(O.getOutletTypeByNumber)(d,t.outletNumber),rotateIcon:null==t?void 0:t.rotateIcon}});return c.a.createElement(qp,null,c.a.createElement(fe.a,{columns:p,rowHeight:35,disableColumnFilters:!0,items:R,hideCellOverflow:!1,onRowClick:e=>l.push(Object(n.i)(i,{site:o,page:E,id:s,panel:m,subPanel:e.index?"outlets":"ports",subPanelId:e.index?e.index:e.port_idx}))}))}),({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);var Qp=({activeItem:e,hidePorts:t,...a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Jp,Object.assign({deviceData:e,hidePorts:t},a)));const eO=Object(l.c)("div")`
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
`;var nO=c.a.memo(({isForDiagram:e,deviceData:t})=>{const a=Object(ur.ce)(t),n=Object(ur.ab)(t),r=Object(L.m)();return c.a.createElement(eO,null,c.a.createElement(tO,null,c.a.createElement(aO,{variant:"success"}),c.a.createElement(V.a,{size:"label",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_ENABLED"}))),c.a.createElement(tO,null,c.a.createElement(aO,{background:r.motifPalette.neutral04}),c.a.createElement(V.a,{size:"label",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_OUTLET_STATE_DISABLED"}))),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(tO,null,c.a.createElement(aO,{variant:"warning"}),c.a.createElement(V.a,{size:"label",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_MBPS",values:{speed:"100/10"}}))),c.a.createElement(tO,null,c.a.createElement(aO,{background:r.motifPalette.neutral07}),c.a.createElement(V.a,{size:"label",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))),n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(tO,null,c.a.createElement(w.Bb,{width:12,height:12}),c.a.createElement(V.a,{size:"label",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_OUTLET_STATE_DELIVERING"}))),c.a.createElement(tO,null,c.a.createElement(aO,{background:r.motifPalette.neutral07}),c.a.createElement(V.a,{size:"label",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))))});const rO=Object(l.c)(M.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,cO=Object(l.c)(M.a)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`,lO=Object(l.c)(w.W)`
  margin-right: 12px;
`,iO=Object(l.c)("div")`
  width: 5px;
`;var oO=c.a.memo(({deviceData:e})=>{const{outletsDiagram:t,primaryOutletGroupCount:a}=Object(O.getDeviceSpecs)(e),n=Object(O.isUspPduPro)(e),r=t?Object(O.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(O.determineRowLayoutsFromOutletConfig)(a,e),l=Object(Bo.a)(r.map(e=>e.length));let i=l>10?"3px":"10px";const o=l>10?"19px":"20px";return r&&0!==r.length?c.a.createElement(c.a.Fragment,null,r.map((t,a)=>c.a.createElement(cO,{"align-items":"flex-end",key:"OutletLayoutRow-"+(a+1)},t.map((t,r)=>{if(!t)return c.a.createElement(iO,{key:`OutletSpacer-${a+1}-${r+1}`});const l=`Outlet-${a+1}-${r+1}`,E=Object(O.getActiveOutletInfo)(e,void 0,t.outletNumber),s=t&&E&&{outletType:t.outletType,...E};return n&&1===a&&r>2&&(i="16px"),n&&1===a&&r>3&&(i="54px"),c.a.createElement(Kp,{cellData:s,key:l,marginSize:i,cellSize:o,rotateIcon:t.rotateIcon})})))):c.a.createElement(rO,null,c.a.createElement(lO,{isActive:!0}),c.a.createElement(F.c,{id:"DEVICE_DIAGRAM_MISSING"}))},({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);const EO=Object(l.c)("div")`
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
`;var uO=({deviceData:e,hidePorts:t})=>{const{usedPower:a,maxPower:r}=Object(O.getUspPduOutletUtilization)(e),l=Object(n.k)();return c.a.createElement(EO,null,c.a.createElement(M.a,{justifyContent:"center"},c.a.createElement("div",null,c.a.createElement(oO,{deviceData:e})),e.port_table&&!t&&c.a.createElement(sO,null,c.a.createElement(Go,{deviceData:e,portSizeOverride:"19px",history:l}))),c.a.createElement(nO,{isForDiagram:!0,deviceData:e}),a>r&&c.a.createElement(mO,null,c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(dO,null),c.a.createElement(V.a,{size:"caption"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_WARNING"}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(_O,null),c.a.createElement(V.a,{size:"caption"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_INFO"})))))};const bO=Object(l.c)(M.a)`
  padding: 0 32px;
`;var pO=Object(ht.compose)(Za(["general","led","network","manage"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),{_id:m,mac:d}=e,_=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(uO,{deviceData:e,hidePorts:!0}),c.a.createElement(bO,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>c.a.createElement(Qp,{hidePorts:!0,activeItem:e})},{id:"led",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(m_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],renderOnlyExpandedContent:!0,multiOpen:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});_(Object(O.updateDeviceWithIdEndpoint)(e,m,d,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});function OO({activeItem:e}){const{usedPower:t,totalCurrent:a}=Object(O.getUspPduOutletUtilization)(e),n=[{messageId:"DEVICE_HEADER_POWER_USAGE",value:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:t}}))},{messageId:"DEVICE_PROPERTY_OVERVIEW_ENERGY",value:c.a.createElement(c.a.Fragment,null,"0 ",c.a.createElement(F.c,{id:"COMMON_UNIT_KWH"}))},{messageId:"DEVICE_PROPERTY_OVERVIEW_CURRENT",value:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:a}}))}];return c.a.createElement(M.a,{flexDirection:"column"},[ks].map(t=>c.a.createElement(t,{key:t.name,activeItem:e})),n.map(({messageId:e,value:t})=>c.a.createElement(Zt,{key:e},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:e})),c.a.createElement(V.a,{size:"body"},t))))}const IO=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var gO=c.a.memo(({activeItem:e,...t})=>{const a=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),a&&c.a.createElement(IO,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(OO,{activeItem:e})},{id:"uplink",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK"}),renderContent:()=>c.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const RO=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var vO=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:r}=Object(O.getUspPduOutletUtilization)(e),l="warning"===r;return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),c.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&c.a.createElement(RO,{size:"medium"}),c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),c.a.createElement(Hd.a,{items:[{value:n,variant:r}]}))};const CO=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,hO=Object(l.c)("div")`
  margin-bottom: 16px;
`;var TO=({activeItem:e})=>c.a.createElement(CO,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),c.a.createElement(hO,null),c.a.createElement(vO,{activeItem:e}));const fO=Object(l.c)(M.a)`
  padding: 16px 32px;
`;var DO=Object(ht.compose)(Za(["general","outlets","lcmScreen","network","manage"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l,...i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(uO,{deviceData:e}),c.a.createElement(fO,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>c.a.createElement(Qp,{activeItem:e})},{id:"lcmScreen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ri,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});var PO=({activeItem:{lte_ext_ant:e},flexProps:t})=>c.a.createElement(Zt,{flexProps:t},c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),!0===e?c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_ENABLED"})):c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_DISABLED"})));var yO=({activeItem:{lte_poe:e},flexProps:t})=>c.a.createElement(Zt,{flexProps:t},c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),c.a.createElement(V.a,{color:"secondary",size:"body"},!0===e?c.a.createElement(F.c,{id:"COMMON_ENABLED"}):c.a.createElement(F.c,{id:"COMMON_DISABLED"})));var SO=({activeItem:e})=>c.a.createElement(nm,null,[{C:zs,flexProps:{}},{C:ks},{C:cl},{C:Bs,flexProps:{}},{C:PO},{C:yO,flexProps:{}}].map(({C:t,flexProps:a={}})=>c.a.createElement(t,{activeItem:e,flexProps:a,key:t.name}))),AO=a(789);const jO=Object(l.c)(pn.a)`
  width: fit-content;

  & > div > button > span > div {
    display: flex;

    & > span {
      margin: 0 !important;
    }
  }
`,NO=Object(l.c)(de.a)`
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
`;var VO=({mac:e,isUnreachable:t,isUnavailable:a})=>{const n=Object(o.useDispatch)(),l=t||a,i=t?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNREACHABLE_TOOLTIP":a?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE_TOOLTIP":"LTE_ACTIONS_SUBSCRIPTION_CHECK_TOOLTIP",E=l?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE":"LTE_ACTIONS_SUBSCRIPTION_CHECK",s=Object(r.useCallback)(()=>{l||n(Object(AO.f)([e]))},[l]);return c.a.createElement(jO,{position:"topRight",portal:!0,message:c.a.createElement(xO,null,c.a.createElement(F.c,{id:i}))},c.a.createElement(NO,{variant:"inline",onClick:s,disabled:l},c.a.createElement(LO,null),c.a.createElement(V.a,{size:"caption",color:l?"secondary":"info"},c.a.createElement(F.c,{id:E}))))};const wO=Object(l.c)("div")`
  text-align: center;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 32px 40px;
`,FO=Object(l.c)(V.a)`
  font-size: 16px;
`,MO=Object(l.c)("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  // UNCOMMENT THIS WHEN GRAPH IS WORKING
  // margin-bottom: 16px;
`,UO=Object(l.c)(M.a)`
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
`;var HO=({device:e,params:t,path:a,history:l})=>{const{site:i,page:E,subPage:s}=t,m=Object(O.isUltePro)(e),{license_state:d}=e,_=Object(O.isAdopted)(e),u=Object(o.useDispatch)(),b=Object(O.isUlte)(e)&&Object(dt.a)(e,"lte_subscription_status")===O.BILLING_SUBSCRIPTION_STATUS.PAST_DUE,p=Object(O.isUlte)(e)&&Object(dt.a)(e,"lte_subscription_status")===O.BILLING_SUBSCRIPTION_STATUS.CANCELED,I=Object(o.useSelector)(Zi.selectEnv),g=Object(Qi.b)(I),R=`https://${g}/payments`,v=`https://${g}/subscriptions`,C=Object(O.calculateUsage)(e),h=Oo.n[C.state],T="warning"===C.state||"danger"===C.state&&!C.hasOverages,f=C.hasOverages&&!C.isSuspended,D=Object(o.useSelector)(Ci.d),P=Object(O.isDeviceWithCountryLockedWarning)(D,e),y=Object(O.isLicenseWithWarning)(e),S=Object(O.isUlteDeviceNotConnectedToUlte)(e),A=Object(O.isUlteDeviceNotRegisteredWithUlte)(e),j=Object(o.useSelector)(Gl.H),N=Object(o.useSelector)(Gl.s),L=Object(o.useSelector)(Gl.y),x=Object(r.useMemo)(()=>N||L,[N,L]),w=Object(r.useMemo)(()=>Object(O.isSubscriptionCheckRequired)(e),[e]),M=Object(r.useMemo)(()=>Object(O.isSubscriptionApiUnreachable)(e),[e]),U=Object(r.useMemo)(()=>Object(O.isUlte)(e)&&!!j&&!Object(O.isDeviceOwner)(e,j),[e,j]),k=Object(r.useMemo)(()=>_&&x&&(w||M||U),[_,x,w,M,U]);return Object(r.useEffect)(()=>{Object.keys(D).length||u(Ci.a)},[D,u]),_&&c.a.createElement(wO,null,c.a.createElement(MO,null,c.a.createElement(FO,null,c.a.createElement(F.c,{id:"DEVICE_DATA_USAGE_HEADER_LABEL"})),c.a.createElement(V.a,{color:"secondary",size:"header-l"},c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{style:{color:h}},Object(Kt.c)(C.usedBytes,"bytes","JEDEC")),c.a.createElement("span",null,e.lte_soft_limit>0&&"/"),c.a.createElement("span",null,e.lte_soft_limit>0&&Object(Kt.c)(C.softLimitBytes,"bytes","JEDEC"))))),c.a.createElement(MO,null,e.lte_soft_limit>0&&c.a.createElement(vt.a,{variant:C.state,value:C.width,size:"medium"})),c.a.createElement(WO,null,T&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.c,{id:"DEVICE_DATA_USAGE_LTE_APPROACHING_LIMIT",values:{amount:C.width+"%"}})),f&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement("div",null,c.a.createElement(F.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_SOFT_LIMIT",values:{softLimit:Object(Kt.c)(C.softLimitBytes,"bytes","JEDEC"),hardLimit:Object(Kt.c)(C.hardLimitBytes,"bytes","JEDEC")}}))),C.isSuspended&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_HARD_LIMIT"})),"success"!==C.state&&c.a.createElement(UO,null,c.a.createElement(zO,null),c.a.createElement(BO,null,c.a.createElement(F.c,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT"})," ",c.a.createElement(de.a,{variant:"inline",onClick:t=>{t.preventDefault(),t.stopPropagation();const r=Object(n.i)(a,{id:e.mac,site:i,page:E,panel:"settings",subPage:s});l.push(r)}},c.a.createElement(F.c,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT_BUTTON"})))),(b||p)&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.b,{id:p?"DEVICE_DATA_USAGE_LTE_SERVICE_CANCELED":"DEVICE_DATA_USAGE_LTE_PAYMENT_OVERDUE",values:{billingUrl:R}})),P&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_NOTICE_COUNTRY_LOCKED_WARNING_BODY"})),y&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.b,{id:`DEVICE_PROPERTIES_NOTICE_LICENSE_${d.toUpperCase()}_BODY`,values:{url:v}})),S&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_CONNECTED_WARNING_BODY"})),A&&c.a.createElement(UO,null,c.a.createElement(kO,null),c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_REGISTERED_WARNING_BODY"})),k&&!m&&c.a.createElement(VO,{mac:e.mac,isApplicable:w,isUnreachable:M,isUnavailable:U})))},GO=a(1173);const YO=({value:e,valueUnit:t,translationId:a})=>void 0!==e&&c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:a})),"boolean"==typeof e?c.a.createElement(V.a,{color:"secondary",size:"body"},e?c.a.createElement(F.c,{id:"COMMON_ENABLED"}):c.a.createElement(F.c,{id:"COMMON_DISABLED"})):c.a.createElement(V.a,{color:"secondary",size:"body"},e,t&&" "+t));var $O=({activeItem:e,isUltePro:t})=>{const{lte_radio_mode:a,lte_rssi:n,lte_ecio:r,lte_io:l,lte_ip:i,lte_sinr:o,lte_rsrq:E,lte_rsrp:s,lte_snr:m,lte_rx_chan:d,lte_tx_chan:_,lte_rscp:u,lte_apn:b,lte_connected:p,lte_pdptype:O,lte_band:I,lte_networkoperator:g,lte_rat:R,lte_state:v,lte_signal:C,lte_imei:h,lte_iccid:T,lte_cell_id:f,lte_hard_limit:D,lte_soft_limit:P,total_tx_bytes:y,total_rx_bytes:S}=e,A=(a||"").toUpperCase(),j=Object(Kt.c)(D,"bytes","JEDEC"),N=Object(Kt.c)(P,"bytes","JEDEC");return c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(YO,{value:i,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IP"}),c.a.createElement(YO,{value:b,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_APN"}),c.a.createElement(YO,{value:O,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_PDP_TYPE"}),c.a.createElement(YO,{value:Object(GO.a)(p),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CONNECTED"}),c.a.createElement(YO,{value:I,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_BAND"}),c.a.createElement(YO,{value:f,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CELL_ID"}),y&&c.a.createElement(YO,{value:Object(Kt.c)(y,"bytes","JEDEC"),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_TRANSMITTED"}),S&&c.a.createElement(YO,{value:Object(Kt.c)(S,"bytes","JEDEC"),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_RECEIVED"}),c.a.createElement(YO,{value:g,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_NETWORK_OPERATOR"}),c.a.createElement(YO,{value:R,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RAT"}),c.a.createElement(YO,{value:Object(GO.a)(v),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_STATUS"}),c.a.createElement(YO,{value:C,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SIGNAL"}),A===at.LteRadioMode.Lte&&c.a.createElement(c.a.Fragment,null,c.a.createElement(YO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),c.a.createElement(YO,{value:E,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRQ"}),c.a.createElement(YO,{value:s,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRP"}),c.a.createElement(YO,{value:m,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SNR"}),c.a.createElement(YO,{value:d,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RX_CHANNEL"}),c.a.createElement(YO,{value:_,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_TX_CHANNEL"})),(A===at.LteRadioMode.Cdma||A===at.LteRadioMode.Hdr)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(YO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),c.a.createElement(YO,{value:r,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ECIO"})),A===at.LteRadioMode.Hdr&&c.a.createElement(c.a.Fragment,null,c.a.createElement(YO,{value:l,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IO"}),c.a.createElement(YO,{value:o,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SINR"})),A===at.LteRadioMode.Gsm&&c.a.createElement(YO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),A===at.LteRadioMode.Tdma&&c.a.createElement(YO,{value:u,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSCP"}),c.a.createElement(YO,{value:h,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IMEI"}),c.a.createElement(YO,{value:T,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ICCID"}),Number(j)>0&&c.a.createElement(YO,{value:j,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_LIMIT"}),Number(j)>0&&c.a.createElement(YO,{value:N,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_WARNING"}))};const KO=Object(l.c)(de.a)`
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`;var XO=function({activeItem:{uplink:{rx_bytes:e,"rx_bytes-r":t,rx_packets:a,speed:r,tx_bytes:l,"tx_bytes-r":i,tx_packets:E}={}},activeItem:s,isUltePro:m,params:_,path:u,history:b}){const{site:p,page:I,subPage:g}=_,R=Object(o.useSelector)(O.selectDevicesData),v=t+i,C=Object(o.useSelector)(e=>Object(O.getUplink)(Object(O.selectDevicesData)(e),s)),h=Object(O.getUplinkDisplayName)(s,C),T=Object(o.useDispatch)(),f=Object(O.getUplinkRemotePort)(R,s);return c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK"})),c.a.createElement(KO,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(u,{id:C.mac,site:p,page:I,panel:"overview",subPage:g});b.push(t),T(Object(N.g)({type:d.b.DEVICE,mac:C.mac}))}},h)),c.a.createElement(il,{portSpeed:r}),m&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==f?void 0:f.poe_power)||0}}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_ACTIVITY_DOWN_PKTS_BYTES"})),c.a.createElement(V.a,{size:"body"},a?a.toLocaleString():null,"/",c.a.createElement(me.a,{type:"bytes",input:e,size:"body"}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_ACTIVITY_UP_PKTS_BYTES"})),c.a.createElement(V.a,{size:"body"},E?E.toLocaleString():null,"/",c.a.createElement(me.a,{type:"bytes",input:l,size:"body"}))),m&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_HEADER_ACTIVITY"})),c.a.createElement(me.a,{type:"bytes",input:v,options:"bitrate",size:"body"})))};const qO=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  .styledAccordionContent {
    padding: 0;
    margin: 0;
  }
`;var ZO=({activeItem:e,...t})=>{var a;const n=Object(O.isAdopted)(e),r=Object(O.isUltePro)(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(HO,Object.assign({device:e},t)),c.a.createElement(Rl,{activeItem:e}),c.a.createElement(qO,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(SO,{activeItem:e})},{id:"lte",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_UNIFI_ACCORDION_HEADER_LTE"}),renderContent:()=>c.a.createElement($O,{activeItem:e,isUltePro:r})},...(null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.mac)?[{id:"uplink",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}),renderContent:()=>c.a.createElement(XO,Object.assign({activeItem:e,isUltePro:r},t))}]:[]],contentClassName:"styledAccordionContent",renderOnlyExpandedContent:!0,multiOpen:!0})))};var JO=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(r.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),c.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"ap",heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT"})};const QO=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,eI=Object(l.c)("div")`
  margin-bottom: 16px;
`;var tI=({activeItem:e})=>c.a.createElement(QO,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),c.a.createElement(eI,null),c.a.createElement(JO,{activeItem:e})),aI=a(40);const nI=[...Array(aI.n.SOFT_LIMIT_MAX_GB)].map((e,t)=>({value:t+1,label:t+1+" GB"})),rI=Object.values(at.LteAuthTypes).map(e=>({label:e,value:e})),cI=Object(l.c)(M.a,{shouldForwardProp:e=>"marginForError"!==e})`
  margin-bottom: ${({theme:e,marginForError:t})=>t?e.spacing["spacing-xxxl"]:e.spacing["spacing-xl"]};
`,lI=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
`,iI=Object(l.c)(w.W)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,oI=Object(l.c)(V.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xs"]};
`,EI=Object(Ja.g)({mapPropsToValues:({isUltePro:e,activeItem:{lte_ext_ant:t,lte_poe:a,lte_apn:n,lte_is_sim_pin_required:r,lte_sim_pin_tries_left:c,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:s,lte_soft_limit:m=(e?0:nI[0].value),lte_data_warning_enabled:d,lte_hard_limit:_=0}})=>({lte_ext_ant:"string"==typeof t?"enabled"===t:t,lte_poe:"string"==typeof a?"enabled"===a:a,lte_apn:n,lte_is_sim_pin_required:r,lte_sim_pin_tries_left:c,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:!e||s,lte_soft_limit:new Kt.a(m,"bytes","IEC").value,lte_data_warning_enabled:d,lte_hard_limit:new Kt.a(_,"bytes","IEC").value}),validationSchema:({isUltePro:e})=>Qa.a.lazy(()=>Qa.a.object().shape({lte_ext_ant:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA").required(),lte_poe:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH").required(),lte_apn:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS").matches(Rn.n,c.a.createElement(F.c,{id:"COMMON_VALIDATION_APN_ADDRESS"})).required(),lte_sim_pin:Qa.a.string().when("lte_is_sim_pin_required",{is:!0,then:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN").matches(Rn.o,c.a.createElement(F.c,{id:"COMMON_VALIDATION_LTE_PIN"})).required()}),lte_username:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME"),lte_password:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD"),lte_auth_type:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE").oneOf([at.LteAuthTypes.Pap,at.LteAuthTypes.Chap,at.LteAuthTypes.PapChap,at.LteAuthTypes.None]),lte_data_limit_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"),lte_soft_limit:Qa.a.number().integer(c.a.createElement(F.c,{id:"COMMON_VALIDATION_WHOLE_NUMBER"})).when("lte_data_limit_enabled",{is:!0,then:e?Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").min(0).required():Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").oneOf(nI.map(({value:e})=>e)).required()}),lte_data_warning_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"),lte_hard_limit:Qa.a.number().when("lte_data_limit_enabled",{is:!0,then:Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT").min(0).required().integer(c.a.createElement(F.c,{id:"COMMON_VALIDATION_WHOLE_NUMBER"}))}).when(["lte_soft_limit"],(t,a)=>a.min(e?t>=0&&t:0,c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_ERROR"})))})),handleSubmit:()=>null});var sI=Object(ht.compose)(Object(o.connect)(null,{updateDevice:O.updateDevice}),EI)(({activeItem:e,isUltePro:t,values:a,dirty:n,isValid:l,errors:i,resetForm:E,setFormDirty:s,setFormInvalid:m,setFieldTouched:d,setFieldValue:_,formName:u="lte"})=>{const b=Object(o.useDispatch)();return Object(r.useEffect)(()=>{b(Object(N.h)({[u]:()=>{const e={...a,lte_soft_limit:Object(O.GiBToBytes)(a.lte_soft_limit),lte_hard_limit:t?Object(O.GiBToBytes)(a.lte_hard_limit):Object(O.GiBToBytes)(a.lte_soft_limit+2),lte_data_warning_enabled:a.lte_data_limit_enabled};return a.lte_data_limit_enabled||(e.lte_soft_limit=0,e.lte_hard_limit=0),e}})),b(Object(N.j)({[u]:()=>E({values:a})})),b(Object(N.i)({[u]:E}))},[b,E,a,e._id]),Object(r.useEffect)(()=>{s(u,n),m(u,!l)},[n,s,m,l]),c.a.createElement(c.a.Fragment,null,c.a.createElement(cI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),c.a.createElement(Jn.Field,{type:"checkbox",name:"lte_ext_ant"})),c.a.createElement(cI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),c.a.createElement(Jn.Field,{type:"checkbox",name:"lte_poe"})),t?c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,null,c.a.createElement(lI,{weight:"bold",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD"}))),c.a.createElement(cI,{flexDirection:"column"},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS",name:"lte_apn",full:!0,autocomplete:"off"})),a.lte_is_sim_pin_required&&c.a.createElement(cI,{flexDirection:"column"},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN",name:"lte_sim_pin",type:"password",full:!0,autocomplete:"off"}),c.a.createElement(M.a,{alignItems:"center",marginTop:i.lte_sim_pin?20:4},c.a.createElement(iI,{isActive:!0}),c.a.createElement(V.a,{color:"secondary",size:"caption"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD_TRIES",values:{count:a.lte_sim_pin_tries_left}})))),c.a.createElement(cI,{flexDirection:"column"},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME",name:"lte_username",full:!0})),c.a.createElement(cI,{flexDirection:"column"},c.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD",name:"lte_password",type:"password",passwordToggle:!0,full:!0})),c.a.createElement(cI,{flexDirection:"column"},c.a.createElement(Jn.Field,{name:"lte_auth_type",type:"dropdown",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE",options:rI,validated:!0,translateLabel:!0,full:!0})),c.a.createElement(cI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"})),c.a.createElement(Jn.Field,{type:"checkbox",name:"lte_data_limit_enabled"})),a.lte_data_limit_enabled&&c.a.createElement(c.a.Fragment,null,c.a.createElement(cI,{flexDirection:"column",marginForError:!0},c.a.createElement(Jn.Field,{name:"lte_hard_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT",type:"number",full:!0})),c.a.createElement(cI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"}))),c.a.createElement(cI,{flexDirection:"column",marginForError:!0},c.a.createElement(Jn.Field,{name:"lte_soft_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING",type:"number",full:!0,onChange:e=>{_("lte_soft_limit",e.target.value),d("lte_hard_limit")}})))):c.a.createElement(c.a.Fragment,null,c.a.createElement(cI,null,c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"}))),c.a.createElement(cI,{flexDirection:"column"},c.a.createElement(Jn.Field,{label:"DEVICE_ULTE_SETUP_DATA_LIMIT_VALUE_FIELD",translateLabel:!0,full:!0,validated:!0,options:nI,type:"dropdown",name:"lte_soft_limit"}),c.a.createElement(oI,{color:"secondary",size:"caption"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_DESCRIPTION"})))))});const mI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  > li:last-child {
    border-bottom: 0;
  }
`;var dI;!function(e){e.NAME="name",e.LTE="lte",e.NETWORK="network",e.MANAGE_DEVICE="manage-device"}(dI||(dI={}));var _I=Object(ht.compose)(Za([dI.NAME,dI.LTE,dI.NETWORK,dI.MANAGE_DEVICE]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ka),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),b=Object(r.useMemo)(()=>Object(O.isUltePro)(e),[e.type]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe.g,{flex:"1"},c.a.createElement(mI,{variant:"secondary",items:[{id:dI.NAME,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:dI.NAME})},{id:dI.LTE,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_LTE"}),renderContent:()=>c.a.createElement(sI,{activeItem:e,setFormDirty:t,setFormInvalid:a,isUltePro:b,formName:dI.LTE})},{id:dI.NETWORK,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:dI.NETWORK})},{id:dI.MANAGE_DEVICE,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const uI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`,bI=Object(l.c)("div")`
  margin-bottom: 16px;
`,pI=Object(l.c)("div")`
  padding: 0 32px;
  margin-bottom: 32px;
`;var OI;!function(e){e.NAME="name",e.PORTS="ports",e.MANAGE="manage"}(OI||(OI={}));var II=Object(ht.compose)(Za([OI.NAME,"lcmScreen",OI.MANAGE]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ka),d=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),_=Object(o.useDispatch)(),{_id:u,mac:b}=e;return c.a.createElement(c.a.Fragment,null,d&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(uI,{variant:"secondary",items:[{id:OI.NAME,openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:OI.NAME})},{id:OI.PORTS,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>c.a.createElement(Rs,{activeItem:e})},{id:"outlets",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(bI,null,c.a.createElement(uO,{hidePorts:!0,deviceData:e})),c.a.createElement(pI,null,c.a.createElement(Qp,{hidePorts:!0,activeItem:e})))},{id:"lcmScreen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ri,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:OI.MANAGE,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});_(Object(O.updateDeviceWithIdEndpoint)(e,u,b,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});var gI=({activeItem:{has_temperature:e,general_temperature:t}})=>e?c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:t}}))):null;var RI=({activeItem:e})=>{const{has_fan:t,fan_level:a}=e,n=a>=nl(e);return t&&rl(e)?c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_LEVEL"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n?a:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_STATE"})),c.a.createElement(V.a,{color:"secondary",size:"body"},n?c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_ON"}):c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"})))):null};var vI=({activeItem:e})=>{const t=Object(r.useMemo)(()=>[gI,RI,ks,cl,Bs],[e]);return c.a.createElement(nm,null,t.map(t=>c.a.createElement(t,{activeItem:e})))};var CI=({uplink:{port_idx:e}})=>c.a.createElement(Zt,null,c.a.createElement(V.a,{color:"secondary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),c.a.createElement(V.a,{color:"secondary",size:"body"},e));var hI=({activeItem:e,uplinkDevice:t,...a})=>{const n=Object(r.useMemo)(()=>Object(O.getUplinkAttrs)(e)||{},[e]),l=Object(O.getUplinkDisplayName)(e,t.uplink),i=Object(r.useMemo)(()=>[CI,xm,il,wm,Fm,Mm],[e]);return c.a.createElement(nm,null,i.map(e=>c.a.createElement(e,Object.assign({uplink:n,uplinkDevice:t,uplinkName:l},a))))};const TI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var fI=({activeItem:e,...t})=>{const a=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),n=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Rl,{activeItem:e}),c.a.createElement(TI,{variant:"secondary",items:[{id:"overview",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(vI,{activeItem:e})},...a?[{id:"uplink",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK"}),renderContent:()=>c.a.createElement(hI,Object.assign({activeItem:e,uplinkDevice:a},t))}]:[],{id:"downlink",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0})))};const DI=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var PI=function({activeItem:e}){var t;const a=!!(null===(t=e.psu_table)||void 0===t?void 0:t.length),n=[{id:"stats",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(Ql,{activeItem:e}),openByDefault:!a}];return c.a.createElement(DI,{variant:"secondary",items:n,multiOpen:!0,renderOnlyExpandedContent:!0})};const yI=10,SI=3600,AI=Object(l.c)(Pe.g)`
  margin-bottom: 16px;
`,jI=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e})=>({lcm:e}),validationSchema:gn.a.object().shape({lcm:gn.a.object().shape({enabled:gn.a.boolean(),sync:gn.a.boolean(),idle_timeout:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT").min(yI).max(SI).required(),brightness:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required()})}),handleSubmit:()=>null});const NI={saveSettings:Ei.saveSettings};var LI=Object(ht.compose)(Object(o.connect)(e=>({lcmSettings:Object(Ei.selectLcmSettings)(e)}),NI),jI)((function({values:e,setFieldValue:t,resetForm:a,setFormDirty:n,dirty:l,initialValues:i}){const E=Object(o.useDispatch)();Object(r.useEffect)(()=>{n(VI.SCREEN,l)},[n,l]),Object(r.useEffect)(()=>{E(Object(N.h)({[VI.SCREEN]:()=>e})),E(Object(N.j)({[VI.SCREEN]:()=>{Object(oi.a)(i.lcm,e.lcm)||E(Object(Ei.saveSettings)(e.lcm)),a({values:e})}})),E(Object(N.i)({[VI.SCREEN]:a}))},[E,a,e]);const[s,m]=Object(r.useState)(!1);return c.a.createElement(c.a.Fragment,null,c.a.createElement(AI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_SCREEN"})),c.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.enabled"})),c.a.createElement(AI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),c.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.sync"})),c.a.createElement(AI,{justifyContent:"space-between"},c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT"})),c.a.createElement(ZE.a,{checked:s,onChange:()=>{m(!s)}})),s&&c.a.createElement(AI,{flexDirection:"column"},c.a.createElement(Jn.Field,{name:"lcm.idle_timeout",label:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT",type:"number",min:yI,max:SI,full:!0})),c.a.createElement(V.a,{color:"primary",size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"})),c.a.createElement(AI,null,c.a.createElement(ii.a,{size:"large",value:e.lcm.brightness||O.DEFAULT_LED_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(V.a,{color:"secondary"},e,"%"),onChange:e=>{t("lcm.brightness",+e.target.value)}})))}));const xI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var VI;!function(e){e.NAME="name",e.PORTS="ports",e.SCREEN="screen",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage"}(VI||(VI={}));var wI=Object(ht.compose)(Za([VI.NAME,VI.SCREEN,VI.SERVICES,VI.NETWORK,VI.MANAGE]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(qa),d=Object(o.useSelector)(Ka),_=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useDispatch)(),{_id:b,mac:p}=e;return c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(xI,{variant:"secondary",items:[{id:VI.NAME,openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.NAME})},{id:VI.PORTS,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),renderContent:()=>c.a.createElement(cE,{activeItem:e})},{id:VI.SCREEN,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(LI,{setFormDirty:t})},{id:VI.SERVICES,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.SERVICES})},{id:VI.NETWORK,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.NETWORK})},{id:VI.MANAGE,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(d).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,b,p,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const FI=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  .styledAccordionContent {
    padding: 0;
    margin: 0;
  }
`;var MI=function({activeItem:e,...t}){const a=t_(e),n=[];return a.length&&n.push({id:"channelUsage",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>c.a.createElement(r_,{ChannelBars:a})}),Object(O.isDeviceConnected)(e)&&Object(Yn.d)(e,O.WIFI_CAPS.RF_SCAN)&&n.push({id:"rfEvironment",openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>c.a.createElement(Wd,{activeItem:e})}),c.a.createElement(FI,{variant:"secondary",items:n,contentClassName:"styledAccordionContent",multiOpen:!0,renderOnlyExpandedContent:!0})};const UI=Object(l.c)(M.a)`
  padding: 0 32px;
`;var kI=Object(ht.compose)(Za(["general","screen","network","services"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),_=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:b,mac:p}=e,I=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(UI,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:u})},{id:"ports",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>c.a.createElement(cE,{activeItem:e})},{id:"screen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});I(Object(O.updateDeviceWithIdEndpoint)(e,b,p,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(m).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});var zI=({activeItem:e})=>{const{source:t,status:a,statusColor:n}=Object(O.getActivePsuText)(e);return c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:t})),c.a.createElement(V.a,{size:"body",color:n},c.a.createElement(F.c,{id:a})))};const BI=Object(l.c)(V.a)`
  margin-bottom: 8px;
`,WI=Object(l.c)(V.a)`
  margin-top: 16px;
  margin-bottom: 8px;
`;var HI=({activeItem:e})=>{const t=[Object(O.getPsuInternalBattery)(e),Object(O.getPsuExternalBattery)(e)];return c.a.createElement(c.a.Fragment,null,t.map(e=>c.a.createElement("div",{key:e.index},Object(O.getIsPsuInternalBattery)(e)?c.a.createElement(BI,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})):c.a.createElement(WI,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STATUS"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:e.charge_status?"DEVICE_USW_MC_PSU_BATTERY_STATE_"+e.charge_status.replace(" ","_").toUpperCase():"DEVICE_USW_MC_PSU_BATTERY_STATE_UNKNOWN"}))),e.capacity&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_CAPACITY"})),c.a.createElement(V.a,{size:"body"},c.a.createElement("span",{style:{color:Rt.a.getGradientColor(e.capacity/100)}},e.capacity,"%"))),e.technology&&"Unknown"!==e.technology&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TYPE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_USW_MC_PSU_BATTERY_TYPE_"+e.technology.replace("-","_").toUpperCase()}))),e.charge_full_design&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STORAGE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_AMPERE_HOURS",values:{value:e.charge_full_design}}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_POWER_USAGE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.power).toFixed(1)}}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.current).toFixed(1)}}))),c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.voltage).toFixed(1)}}))),!!e.time_to_empty_avg&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TIME"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(me.a,{type:"uptime",size:"body",input:e.time_to_empty_avg}))),e.installation_time&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_INSTALLATION_DATE"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(me.a,{type:"uptime",size:"body",input:e.installation_time}))),e.health&&c.a.createElement(Zt,null,c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_HEALTH_STATUS"})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_USW_MC_PSU_HEALTH_"+e.health.replace(" ","_").toUpperCase()}))))))};const GI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var YI=c.a.memo(({activeItem:e,...t})=>{var a,n;const l=null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.type,i=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),o=l&&(l===O.UplinkType.WIRE?"DEVICE_CONNECTION_WIRED":"DEVICE_CONNECTION_WIRELESS");return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),i&&c.a.createElement(GI,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(ll,{switchDeviceData:e}),openByDefault:!0},...(null===(n=e.psu_table)||void 0===n?void 0:n.length)?[{id:"powerSource",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_SOURCE"}),renderContent:()=>c.a.createElement(zI,{activeItem:e})},{id:"battery",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY"}),renderContent:()=>c.a.createElement(HI,{activeItem:e})}]:[],{id:"uplink",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK"}),o&&c.a.createElement(c.a.Fragment,null," ","(",c.a.createElement(F.c,{id:o}),")")),renderContent:()=>c.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const $I=Object(l.c)(M.a)`
  position: relative;
  border-bottom: 4px;
`,KI=Object(l.c)(M.a)`
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
`;var JI=({activeItem:e})=>{const{total:t,outlets:a,internalBattery:n,externalBattery:r}=Object(O.getPsuUtilization)(e);return c.a.createElement($I,{flexFlow:"wrap"},c.a.createElement(XI,null),c.a.createElement(qI,null),c.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(ZI,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_TOTAL"})),c.a.createElement(ba.a,{title:t.usedPowerPercentage+"%",description:`${t.usedPower}/${t.maxPower}W`,size:116,items:[{id:"free",color:t.statusColor,value:t.usedPowerPercentage},{id:"used",color:we.a["white-6"],value:100-t.usedPowerPercentage}]})),c.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(ZI,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_OUTLETS"})),c.a.createElement(ba.a,{title:a.usedPowerPercentage+"%",description:`${a.usedPower}/${a.maxPower}W`,size:116,items:[{id:"free",color:a.statusColor,value:a.usedPowerPercentage},{id:"used",color:we.a["white-6"],value:100-a.usedPowerPercentage}]})),c.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(ZI,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})),c.a.createElement(ba.a,{title:n.usedPowerPercentage+"%",description:`${n.usedPower}/${n.maxPower}W`,size:116,items:[{id:"used",color:n.statusColor,value:n.usedPowerPercentage},{id:"free",color:we.a["white-6"],value:100-n.usedPowerPercentage}]})),c.a.createElement(KI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(ZI,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),c.a.createElement(ba.a,{title:r.usedPowerPercentage+"%",description:`${r.usedPower}/${r.maxPower}W`,size:116,items:[{id:"used",color:r.statusColor,value:r.usedPowerPercentage},{id:"free",color:we.a["white-6"],value:100-n.usedPowerPercentage}]})))};var QI=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(r.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),c.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const eg=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var tg=function({activeItem:e}){var t;const a=!!(null===(t=e.psu_table)||void 0===t?void 0:t.length);return c.a.createElement(eg,{variant:"secondary",items:[...a?[{id:"powerUtilization",label:c.a.createElement(F.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"}),renderContent:()=>c.a.createElement(JI,{activeItem:e}),openByDefault:a}]:[],{id:"stats",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(QI,{activeItem:e}),openByDefault:!a}],multiOpen:!0,renderOnlyExpandedContent:!0})};const ag=Object(l.c)(M.a)`
  padding: 0 32px;
  li:nth-child(3) {
    > div:last-child {
      margin: 0 -32px; // allow outlet diagram overflow accordion
    }
  }
`,ng=Object(l.c)("div")`
  margin-bottom: 16px;
`,rg=Object(l.c)("div")`
  padding: 0 32px;
  margin-bottom: 32px;
`;var cg=Object(ht.compose)(Za(["general","lcmScreen","services","network"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(qa),{_id:_,mac:u}=e,b=Object(o.useDispatch)(),p=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,p&&c.a.createElement(Qo,{deviceData:e}),c.a.createElement(ag,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),renderContent:()=>c.a.createElement(cE,{activeItem:e})},{id:"outlets",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(ng,null,c.a.createElement(uO,{hidePorts:!0,deviceData:e})),c.a.createElement(rg,null,c.a.createElement(Qp,{hidePorts:!0,activeItem:e})))},{id:"lcmScreen",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ri,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;b(Object(O.updateDeviceWithIdEndpoint)(a,_,u,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});const lg=Object(l.c)("div")`
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
`,ig=Object(l.c)(Pe.g)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
`,og=Object(l.c)(w.nc)`
  margin-right: 4px;
  margin-top: 6px;
`;var Eg,sg;!function(e){e.HIERARCHY="hierarchy",e.RADIO_NAME="radio_name",e.ESSID="essid",e.BSSID="bssid"}(Eg||(Eg={})),function(e){e.RADIO_GROUP="radio_group",e.BSSID_ESSID="bssid/essid",e.BW="bw",e.CHANNEL="channel"}(sg||(sg={}));var mg=({activeItem:e})=>{var t;return(null===(t=null==e?void 0:e.vap_table)||void 0===t?void 0:t.length)?c.a.createElement(lg,null,c.a.createElement(fe.a,{hideCellOverflow:!1,items:e.vap_table.reduce((e,t)=>{const a=e.findIndex(({channel:e})=>e===t.channel),n={[Eg.HIERARCHY]:!0,[Eg.BSSID]:t.bssid,[Eg.ESSID]:t.essid};return a>=0?(e[a]={...e[a],children:[...e[a].children,{...n}]},e):(e.push({...t,idField:`${t.id}-${t.essid}-${t.bssid}`,children:[{...n}]}),e)},[]),idField:"idField",disableColumnFilters:!0,columns:[{id:sg.RADIO_GROUP,minWidth:23,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_RADIO_GROUP"})),renderCell:({radio:e,channel:t,hierarchy:a,essid:n})=>{var r,l;return a?c.a.createElement(Pe.g,{width:"100%",alignItems:"center"},c.a.createElement(og,{isActive:!0}),c.a.createElement(V.a,{size:"body",truncate:!0,color:"secondary"},n)):c.a.createElement(Pe.g,{justifyContent:"space-between",height:"100%",width:"100%",alignItems:"center"},c.a.createElement(Pe.g,{marginRight:8,alignItems:"center"},c.a.createElement(V.a,{size:"body",color:"secondary"},c.a.createElement(F.b,{id:`DEVICE_HEADER_RADIO${null===(r=$s.WlanBand[null==e?void 0:e.toUpperCase()])||void 0===r?void 0:r.toUpperCase()}_SHORT`})),(l=[{label:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_LABEL_SHORT",range:[36,64]},{label:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_LABEL_SHORT",range:[100,128]},{label:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_LABEL_SHORT",range:[149,165]}].find(({range:[e,a]})=>Object(sd.a)(t,e,a)))&&c.a.createElement(V.a,{size:"body",color:"secondary",whiteSpacePreWrap:!0}," ",c.a.createElement(F.c,{id:l.label}))),c.a.createElement(pn.a,{message:c.a.createElement(Pe.g,{flexDirection:"column"},c.a.createElement(ig,{paddingBottom:12},c.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_HEADER_CHANNELS"}))),c.a.createElement(Pe.g,{marginTop:12,flexDirection:"column"},c.a.createElement(Pe.g,{marginBottom:6,justifyContent:"space-between"},c.a.createElement(V.a,{size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_LABEL"})),c.a.createElement(V.a,{size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_RANGE"}))),c.a.createElement(Pe.g,{marginBottom:6,justifyContent:"space-between"},c.a.createElement(V.a,{size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_LABEL"})),c.a.createElement(V.a,{size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_RANGE"}))),c.a.createElement(Pe.g,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_LABEL"})),c.a.createElement(V.a,{size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_RANGE"}))))),width:180,position:"top"},c.a.createElement(w.W,{isActive:!0})))}},{id:sg.BSSID_ESSID,minWidth:25,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID_ESSID"})),renderCell:({hierarchy:e,bssid:t})=>e&&c.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},t)},{id:sg.BW,minWidth:20,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BW"})),renderCell:({bw:e})=>e&&c.a.createElement(V.a,{size:"body",color:"secondary"},e," ",c.a.createElement(F.c,{id:"COMMON_UNIT_MHZ"}))},{id:sg.CHANNEL,minWidth:15,renderLabel:()=>c.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})),renderCell:({channel:e})=>c.a.createElement(V.a,{size:"body",color:"secondary"},e)}]})):null};const dg=Object(l.c)(Ee.a)`
  padding: 10px 30px;
`;var _g=({activeItem:e,params:t,path:a,history:n,...l})=>{var i,o;const E=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(M.a,{flexDirection:"column"},c.a.createElement(zl,{device:e}),E&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Om,{activeItem:e}),c.a.createElement(dg,{variant:"secondary",items:[...E?[{id:"history",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>c.a.createElement(Ms,Object.assign({activeItem:e},l))}]:[],{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(rm,{activeItem:e})},...(null===(i=null==e?void 0:e.uplink)||void 0===i?void 0:i.mac)?[{id:"uplinkWired",label:"wire"===(null===(o=null==e?void 0:e.uplink)||void 0===o?void 0:o.type)?c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):c.a.createElement(F.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>c.a.createElement(Bm,{activeItem:e,params:t,path:a,history:n})}]:[],{id:"airStats",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>c.a.createElement(jm,{activeItem:e,radio:t}))},{id:"wlan",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_WLAN"}),renderContent:()=>c.a.createElement(mg,{activeItem:e})},{id:"clientsGuests",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>c.a.createElement(gl,{activeItem:e,params:t,path:a,history:n})}],renderOnlyExpandedContent:!0,multiOpen:!0})))};const ug=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var bg;!function(e){e.NAME="name",e.LED="led",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage",e.RADIOS="radios"}(bg||(bg={}));var pg=Object(ht.compose)(Za([bg.NAME,bg.RADIOS,bg.LED,bg.SERVICES,bg.NETWORK,bg.MANAGE]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(ug,{variant:"secondary",items:[{id:bg.NAME,openByDefault:!0,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:bg.NAME})},{id:bg.RADIOS,label:c.a.createElement(F.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:m})},...Object(Yn.f)(e)?[{id:"bandsteer",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>c.a.createElement(B_,{activeItem:e,setFormDirty:t})}]:[],{id:bg.LED,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(Wi,{activeItem:e,setFormDirty:t,formName:bg.LED})},{id:bg.SERVICES,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0,formName:bg.SERVICES})},{id:bg.NETWORK,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:bg.NETWORK})},{id:bg.MANAGE,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{led:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)({...a,...t},d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(E).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});function Og({activeItem:e}){const t=[{Comp:gI,key:"Temperature"},{Comp:RI,key:"FanLevel"},{Comp:ks,key:"Uptime"},{Comp:cl,key:"MemoryUsage"},{Comp:Bs,key:"LoadAverage"}];return c.a.createElement(M.a,{flexDirection:"column"},t.map(({Comp:t,key:a})=>c.a.createElement(t,{key:a,activeItem:e})))}const Ig=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var gg=c.a.memo(({activeItem:e})=>{const t=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),t&&c.a.createElement(Ig,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Og,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const Rg=Object(l.c)("div")`
  margin-bottom: 12px;
`,vg=["backup","delivering"];var Cg=({activeItem:e})=>{const t=Object(O.getRpsPortUtilization)(null==e?void 0:e.rps);return c.a.createElement(c.a.Fragment,null,t.map(e=>c.a.createElement("div",{key:e.voltage},vg.map(t=>c.a.createElement("div",{key:t},e[t].ports.map(a=>c.a.createElement(Rg,{key:a.id},c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"body",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_UTILIZATION_BAR_HEADING_"+t.toUpperCase(),values:{voltage:e.voltage,mode:"delivering",portId:a.id}})),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:a.powerRequired,max:e[t].total}}))),c.a.createElement(Hd.a,{items:[{variant:"primary",value:a.powerRequired/e[t].total*100}]}))))))))};const hg=Object(l.c)(Pe.g)`
  padding: 16px 32px;
`,Tg=Object(l.c)("div")`
  margin-bottom: 16px;
`;var fg=({activeItem:e})=>{const t=Object(O.getRpsPortUtilizationActive)(null==e?void 0:e.rps);return c.a.createElement(hg,{flexDirection:"column"},c.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(F.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),c.a.createElement(Tg,null),t&&c.a.createElement(Cg,{activeItem:e}))};const Dg=Object(l.c)(pn.a,{shouldForwardProp:e=>"color"!==e&&"isTableItem"!==e})`
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
`,Pg=l.a`
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
`;var Ag=({cellData:e,isTableItem:t=!1,tooltipPosition:a="bottomRight"})=>{const r=Object(n.k)(),{path:l}=Object(n.n)(),{site:i,page:E,id:s,panel:m}=Object(n.m)(),d=Object(o.useSelector)(O.selectDevicesData),{peer:_}=e,u=d.find(e=>e.mac===(null==_?void 0:_.mac)),b=Object(Y.c)(u),p=Object(Y.a)(u),I=Object(O.getRspOutletIcons)(e),g=Object(O.getRspOutletColor)(e);return c.a.createElement(Dg,{color:g,tooltipClassName:Pg,onClick:t=>{var a,c;null===(a=null==t?void 0:t.preventDefault)||void 0===a||a.call(t),null===(c=null==t?void 0:t.stopPropagation)||void 0===c||c.call(t),r.push(Object(n.i)(l,{site:i,page:E,id:s,panel:m,subPanel:"outlets",subPanelId:e.port_idx}))},width:u?240:200,isTableItem:t,message:c.a.createElement(M.a,{flexDirection:"column",justifyContent:"space-between",width:"100%"},c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_OUTLET"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},e.port_idx)),c.a.createElement(M.a,{justifyContent:"space-between",alignItems:"center"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_NAME"})),c.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},null==e?void 0:e.name)),(null==e?void 0:e.port_mode)&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODE"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},Object(GO.a)(e.port_mode))),(null==e?void 0:e.port_state)&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_STATE"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+e.port_state.toUpperCase()}))),(null==e?void 0:e.up)&&O.RPS_VOLTAGES.map(t=>c.a.createElement("div",{key:t},c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary",weight:"bold"},c.a.createElement(F.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:t}}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:e[`power_${t}v_current`]}}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:e[`power_${t}v_voltage`]}}))),c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:e[`power_${t}v_power`]}}))))),u&&c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER"}))),(b||(null==_?void 0:_.hostname))&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_NAME"})),c.a.createElement(Sg,{size:"caption",color:"secondary",truncate:!0},b||(null==_?void 0:_.hostname))),(null==u?void 0:u.mac)&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MAC"})),c.a.createElement(V.a,{size:"caption",color:"secondary"},null==u?void 0:u.mac)),p&&c.a.createElement(M.a,{justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODEL"})),c.a.createElement(Sg,{size:"caption",color:"secondary",truncate:!0},p)),O.RPS_VOLTAGES.map(e=>c.a.createElement(M.a,{key:e,justifyContent:"space-between"},c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER_POWER_REQUIRED",values:{voltage:e}})),c.a.createElement(V.a,{size:"caption",color:"secondary"},c.a.createElement(F.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:null==_?void 0:_[`power_required_${e}v`]}})))))),position:a,portal:!0},c.a.createElement(yg,null,e.port_mode!==O.RpsPortMode.DISABLED&&c.a.createElement(Pr,{icons:I})))};const jg=Object(l.c)(M.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,Ng=Object(l.c)(M.a)`
  &:not(:first-child) {
    margin-top: 8px;
  }
`,Lg=Object(l.c)(w.W)`
  margin-right: 12px;
`,xg=Object(l.c)("div")`
  width: 5px;
`;var Vg=({deviceData:e})=>{const{rps:{diagram:t,primaryPortGroupCount:a}}=Object(O.getDeviceSpecs)(e),n=t?Object(O.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(O.determineRowLayoutsFromOutletConfig)(a,e);return n&&0!==n.length?c.a.createElement(c.a.Fragment,null,n.map((t,a)=>c.a.createElement(Ng,{justifyContent:"center",width:"100%",key:"RpsOutletLayoutRow-"+(a+1)},t.map((t,n)=>{if(!t)return c.a.createElement(xg,{key:`RpsOutletSpacer-${a+1}-${n+1}`});const r=`RpsOutlet-${a+1}-${n+1}`,l=Object(O.getActiveRpsOutletInfo)(e,t.outletNumber);return c.a.createElement(Ag,{cellData:l,key:r})})))):c.a.createElement(jg,null,c.a.createElement(Lg,{isActive:!0}),c.a.createElement(F.c,{id:"DEVICE_DIAGRAM_MISSING"}))};const wg=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`;var Fg=({deviceData:e})=>c.a.createElement(wg,null,c.a.createElement(M.a,{flexDirection:"column",alignItems:"center"},c.a.createElement(Vg,{deviceData:e})),c.a.createElement(nO,{isForDiagram:!0,deviceData:e}));const Mg=Object(l.c)(w.g)`
  position: absolute;
  right: 8px;
  color: inherit;
`,Ug=Object(l.c)("div")`
  table {
    tr {
      cursor: pointer;
    }
  }
`,kg=[{id:"name",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:e=>c.a.createElement(V.a,{size:"body"},e.name)},{id:"outletStatus",label:c.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},c.a.createElement(F.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:e=>{var t,a;const n="disabled"===e.port_mode?null===(t=null==e?void 0:e.port_mode)||void 0===t?void 0:t.toUpperCase():null===(a=null==e?void 0:e.port_state)||void 0===a?void 0:a.toUpperCase();return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{alignItems:"center"},c.a.createElement(Ag,{cellData:e,isTableItem:!0}),c.a.createElement(V.a,{size:"body"},c.a.createElement(F.c,{id:n?"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+n:"COMMON_WORD_INITIALIZING"}),!n&&c.a.createElement(V.a,{size:"body"},"..."))),c.a.createElement(Mg,{size:"small"}))}}];var zg=({deviceData:e,deviceData:{rps:t}})=>{const a=Object(n.k)(),{path:l}=Object(n.n)(),{site:i,page:o,id:E,panel:s}=Object(n.m)(),m=Object(r.useMemo)(()=>{var a;return null===(a=t.rps_port_table)||void 0===a?void 0:a.map(t=>{const a=Object(O.getActiveRpsOutletInfo)(e,t.port_idx);return{id:t.port_idx,...a}})},[t.rps_port_table,e]);return c.a.createElement(Ug,null,c.a.createElement(fe.a,{columns:kg,rowHeight:35,items:m,disableColumnFilters:!0,hideCellOverflow:!1,onRowClick:e=>m.some(e=>e.port_state)&&a.push(Object(n.i)(l,{site:i,page:o,id:E,panel:s,subPanel:"outlets",subPanelId:e.id}))}))};const Bg=Object(l.c)(M.a)`
  padding: 0 32px;
`;var Wg=Object(ht.compose)(Za(["general","outlets","screen","manage"]),F.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(Ka),E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(qa),m=Object(O.isAdopted)(e),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),b=Object(Yn.i)(e),p=b?"lcmScreen":"screen";return c.a.createElement(c.a.Fragment,null,m&&c.a.createElement(Fg,{deviceData:e}),c.a.createElement(Bg,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>c.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>c.a.createElement(zg,{deviceData:e})},{id:p,label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>b?c.a.createElement(Ri,{activeItem:e,setFormDirty:t,setFormInvalid:a}):c.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Mi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(wo,{activeItem:e,disableDebug:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Pn,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ca.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ca.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),Hg={[d.b.ISP_DETAILS]:{default:"overview",panels:{overview:{path:"/overview",title:"DASHBOARD_ISP_PROPERTY_OVERVIEW",icon:w.rb,component:Te},insights:{path:"/insights",title:"DASHBOARD_ISP_PROPERTY_INSIGHTS",icon:w.Rb,component:Ve}}},[d.b.WIFI_MAN]:{default:"tests",singlePanel:!0,panels:{tests:{path:"/tests",component:mt,subpanel:{path:"/:subPanel",component:It}}}},[d.b.UNIFI_DEVICE_CLIENT]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:zn},insights:{path:"/insights",title:"CLIENT_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:$a,subpanel:{path:"/:subPanel",component:Ua}},settings:{path:"/settings",title:"CLIENT_PROPERTY_HEADER_SETTINGS",icon:w.P,component:An}}},[d.a.CLIENT]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:sa},insights:{path:"/insights",title:"CLIENT_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:$a,subpanel:{path:"/:subPanel",component:Ua}},settings:{path:"/settings",title:"CLIENT_PROPERTY_HEADER_SETTINGS",icon:w.P,component:An}}},[d.a.UGW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gE},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:hE},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:hs,subpanel:{path:"/:subPanel/:subPanelId",component:({activeItem:e,params:t,...a})=>t.subPanelId===oe.ALL?c.a.createElement(Sc,Object.assign({activeItem:e,params:t},a)):c.a.createElement(As,Object.assign({activeItem:e,params:t},a))}}}},[d.a.USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:function({activeItem:e,...t}){const[a]=Object(r.useState)("SwitchAbout-"+Date.now()),n=Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e]),l=Object(o.useDispatch)(),i={style:al.a.overflow,styleName:"overflow",dependant:a};return Object(r.useEffect)(()=>(l(Object(tl.c)(i)),()=>l(Object(tl.b)(i))),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(zl,{device:e}),n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Rl,{activeItem:e}),c.a.createElement(Bl,{variant:"secondary",items:[{id:"overview",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(ll,{switchDeviceData:e})},{id:"uplink",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_UPLINK_WIRED"}),renderContent:()=>c.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clientsGuests",label:c.a.createElement(F.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>c.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0})))}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:ai},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:iE,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?c.a.createElement(Sc,Object.assign({params:e,activeItem:t},a)):c.a.createElement(uc,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UAP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Hm,subpanel:{path:"/:subPanel/:subPanelId",component:Hn}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:i_},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:H_}}},[d.a.UAP6MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:_g},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:i_},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:pg}}},[d.a.UDM]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:du},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Du},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Cu,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?c.a.createElement(Sc,Object.assign({params:e,activeItem:t},a)):c.a.createElement(uc,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UDMPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:yu},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:ju},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Lu,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?c.a.createElement(Sc,Object.assign({params:e,activeItem:t},a)):c.a.createElement(uc,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UAP_USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_ABOUT",icon:w.rb,component:Hm}}},[d.a.UBB]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:db},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:hb},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:$b}}},[d.a.UBBXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:hb},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Sb}}},[d.a.USPP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:hp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:yp},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Lp}}},[d.a.USPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Fp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Bp},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:pO,subpanel:{path:"/:subPanel/:subPanelId",component:Bc}}}},[d.a.USPPDUP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gO},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:TO},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:DO,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,...t})=>"ports"===e.subPanel?c.a.createElement(uc,Object.assign({params:e},t)):c.a.createElement(Bc,Object.assign({params:e},t))}}}},[d.a.USAGGPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:fI},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:PI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:wI,subpanel:{path:"/:subPanel/:subPanelId",component:uc}}}},[d.a.LTE]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:ZO},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:tI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:_I}}},[d.a.UXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gE},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:hE},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:II,subpanel:{path:"/:subPanel/:subPanelId",component:({activeItem:e,params:t,...a})=>"ports"===t.subPanel?t.subPanelId===oe.ALL?c.a.createElement(Sc,Object.assign({activeItem:e,params:t},a)):c.a.createElement(As,Object.assign({activeItem:e,params:t},a)):c.a.createElement(Bc,Object.assign({params:t,activeItem:e},a))}}}},[d.a.UAP_IW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Hm,subpanel:{path:"/:subPanel/:subPanelId",component:Hn}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:MI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:kI,subpanel:{path:"/:subPanel/:subPanelId",component:uc}}}},[d.a.USL8MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:YI},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:tg},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:cg,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel?c.a.createElement(uc,Object.assign({params:e,activeItem:t},a)):c.a.createElement(Bc,Object.assign({params:e,activeItem:t},a))}}}},[d.a.USPRPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gg},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:fg},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Wg,subpanel:{path:"/:subPanel/:subPanelId",component:qc}}}}},Gg=a(2908);const Yg=Object(l.c)("div")`
  position: relative;
`;var $g=({history:e,match:{params:t},tabs:a})=>{const{site:n,id:r,panel:l,page:i,subPage:E}=t,s=Object(o.useSelector)(Object(m.k)(n));return a&&a.length?c.a.createElement(Yg,null,c.a.createElement(Gg.a,{tabs:a,selectedTab:l,onSelectTab:t=>e.push(`${s}/${i}/${E?E+"/":""}properties/${r}/${t.id}`)})):null},Kg=a(2039);const Xg=Object(l.c)("div")`
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
`;var Qg=({activeItem:e})=>{if("model"in e){if(Object(ur.Sd)(e)&&Object(ur.Wd)(e)){const t=Object(ur.ec)(e);return c.a.createElement(Xg,null,c.a.createElement(qg,null,c.a.createElement(Kg.a,{width:18,height:18,strength:t,color:"currentColor",inactiveColor:Oo.d})),c.a.createElement(Zg,null,c.a.createElement(Jg,null,c.a.createElement(F.c,{id:"DEVICE_ULTE_IS_ACTIVE_TITLE"})),c.a.createElement(F.c,{id:"DEVICE_ULTE_IS_ACTIVE_DETAILS"})))}}return null},eR=a(37),tR=a(28);const aR="/api/s/{site}/cmd/stamgr",nR=Object(l.c)(Pe.g)`
  padding: 24px 32px 0;
`,rR=Object(l.c)("div")`
  margin-bottom: 16px;
  button {
    font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
    font-weight: 700;
  }
`,cR=Object(l.c)(de.a)`
  color: ${({theme:e})=>e.motifPalette.error};
  &:hover,
  &:active {
    color: ${({theme:e})=>e.motifPalette.error};
  }
`;var lR=({activeItem:e})=>{var t,a;const n=Object(o.useDispatch)(),l=null!==(a=null===(t=Object(o.useSelector)(Gl.P))||void 0===t?void 0:t.offlineClientTimeframe)&&void 0!==a?a:24,i=Object(r.useCallback)(e=>{const{displayName:t,connected:a}=e,r="mac"in e&&e.mac;r&&n(Object(er.a)({title:"CLIENT_ACTIONS_BLOCK_CONFIRM_TITLE",titleValues:{clientName:t},message:"CLIENT_ACTIONS_BLOCK_CONFIRM_MESSAGE",messageValues:{clientName:t},onConfirm:()=>{n(((e,t,a={})=>Object(Ia.p)(eR.a.BLOCK_STA,aR,{mac:e},{...Object(tR.a)("CLIENT_ACTIONS_BLOCK_ERROR","CLIENT_ACTIONS_BLOCK_NOTICE",{clientName:t}),...a}))(r,t)).then(()=>n(Object(Ut.e)())).then(()=>{n(Object(I.deleteClientFromStore)(r,a?I.ClientModelType.ACTIVE:I.ClientModelType.OFFLINE)),n(Object(I.fetchBlockedClients)()),n(Object(I.fetchOfflineClients)({queryParams:{withinHours:l}}))})}}))},[n,l]),E=Object(r.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(Object(er.a)({title:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_TITLE",titleValues:{clientName:t},message:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_MESSAGE",messageValues:{clientName:t},onConfirm:()=>{n(((e,t,a={})=>Object(Ia.p)(eR.a.UNBLOCK_STA,aR,{mac:e},{...Object(tR.a)("CLIENT_ACTIONS_UNBLOCK_ERROR","CLIENT_ACTIONS_UNBLOCK_NOTICE",{clientName:t}),...a}))(a,t)).then(()=>n(Object(Ut.e)())).then(()=>{n(Object(I.deleteClientFromStore)(a,I.ClientModelType.BLOCKED)),n(Object(I.fetchOfflineClients)({queryParams:{withinHours:l}})),n(Object(I.fetchBlockedClients)())})}}))},[n,l]),s=Object(r.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eR.a.KICK_STA,aR,{mac:e},{...Object(tR.a)("CLIENT_ACTIONS_RECONNECT_ERROR","CLIENT_ACTIONS_RECONNECT_NOTICE",{clientName:t}),...a}))(a,t))},[n]),m=Object(r.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eR.a.AUTHORIZE_GUEST,aR,{mac:e},{...Object(tR.a)("CLIENT_ACTIONS_AUTHORIZE_ERROR","CLIENT_ACTIONS_AUTHORIZE_NOTICE",{clientName:t}),...a}))(a,t))},[n]),d=Object(r.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eR.a.UNAUTHORIZE_GUEST,aR,{mac:e},{...Object(tR.a)("CLIENT_ACTIONS_UNAUTHORIZE_ERROR","CLIENT_ACTIONS_UNAUTHORIZE_NOTICE",{clientName:t}),...a}))(a,t))},[n]),_=e.connected&&e.type===I.ClientType.WIRELESS,u=e.connected&&Object(I.getIsClientAuthorizable)(e),b="authorized"in e&&e.authorized,p=u&&!1===b,O=u&&b;return c.a.createElement(Pe.b,null,c.a.createElement(nR,{flexDirection:"column"},e.blocked?c.a.createElement(rR,null,c.a.createElement(de.a,{name:"block-client",size:"small",variant:"inline",onClick:()=>E(e)},c.a.createElement(F.c,{id:"COMMON_ACTION_UNBLOCK"}))):c.a.createElement(rR,null,c.a.createElement(cR,{name:"block-client",size:"small",variant:"inline",onClick:()=>i(e)},c.a.createElement(F.c,{id:"COMMON_ACTION_BLOCK"}))),_&&c.a.createElement(rR,null,c.a.createElement(de.a,{name:"reconnect-client",size:"small",variant:"inline",onClick:()=>s(e)},c.a.createElement(F.c,{id:"CLIENT_ACTIONS_RECONNECT"}))),p&&c.a.createElement(rR,null,c.a.createElement(de.a,{name:"authorize-guest",size:"small",variant:"inline",onClick:()=>m(e)},c.a.createElement(F.c,{id:"CLIENT_ACTIONS_AUTHORIZE"}))),O&&c.a.createElement(rR,null,c.a.createElement(de.a,{name:"unauthorize-guest",size:"small",variant:"inline",onClick:()=>d(e)},c.a.createElement(F.c,{id:"CLIENT_ACTIONS_UNAUTHORIZE"})))))},iR=a(803),oR=a(228),ER=a.n(oR),sR=a(804),mR=a(169);const dR=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var _R=()=>c.a.createElement(yl,{level:"warning"},c.a.createElement(dR,{size:"caption"},c.a.createElement(F.c,{id:"DEVICE_ULTE_USG_REQUIRED"})));const uR=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var bR=()=>c.a.createElement(yl,{level:"warning"},c.a.createElement(uR,{size:"caption"},c.a.createElement(F.b,{id:"DEVICE_UBB_ADOPT_WARNING_MESSAGE"})));const pR=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0 ${({theme:e})=>e.space[3]}px;
  line-height: 14px;
  white-space: nowrap;
  max-width: 113px;
`,OR=Object(l.c)("div")`
  margin-bottom: 32px;
`;var IR=Object(F.f)(({device:e,showForNonAdoptableGateway:t,intl:a,buttonProps:{...l}={}})=>{const i=Object(o.useSelector)(Gl.D)("API_DEVICE_ADOPT"),E=Object(o.useSelector)(O.selectDevicesData),s=Object(o.useSelector)(mR.g),m=Object(o.useSelector)(Ji.a),d=Object(o.useDispatch)(),_=Object(n.k)(),u=Object(O.getDeviceState)(e),b=Object(O.isAdoptApplicable)(e),p=!!(null==e?void 0:e.adoptable_when_upgraded),I=Object(O.isGateway)(e)&&!Object(O.isGatewayAdoptable)(E,e),g=Object(O.isUlte)(e),R=g&&!Object(O.isUlteAdoptable)(E,e),v=g&&!(null==e?void 0:e.lte_imei),C=!e.adopted&&b&&i&&(t||!I||!R),[h,T]=Object(r.useState)(u===O.DeviceState.ADOPTING),f=g&&!s,D=Object(O.isUBB)(e)&&!Object(O.getIsUbbPeerAdoptable)(e),P=Object(L.i)("wifi/network/form"),y=h||f||D;Object(r.useEffect)(()=>{T(u===O.DeviceState.ADOPTING)},[u]);return!C||v?null:c.a.createElement(M.a,{flexDirection:"column"},f&&c.a.createElement(c.a.Fragment,null,c.a.createElement(_R,null),c.a.createElement(OR,null)),D&&c.a.createElement(c.a.Fragment,null,c.a.createElement(bR,null),c.a.createElement(OR,null)),c.a.createElement(M.a,{justifyContent:"flex-end"},c.a.createElement(pR,Object.assign({variant:"primary",onClick:t=>{function n(){g?(d(Object(AO.d)(e.mac,Object(O.isUltePro)(e)?"LTE_PRO_ADOPTION":"LTE_ADOPTION")),T(!1)):function(){if(e.discovered_by===sR.a.PROTOCOL_V2_ID)T(!1);else if(d(Object(O.adoptDevice)(e)).then(T(!0)),Object(O.isPureAp)(e)){const t=ER()();d(Object(na.c)({icon:c.a.createElement("div",null,c.a.createElement(U.b,{deviceType:null==e?void 0:e.type,deviceModel:null==e?void 0:e.model,publicImagePath:m,width:53,height:53})),title:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_TITLE",message:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_MESSAGE",primaryButton:{label:a.formatMessage({id:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_ACTION"}),onClick:()=>{_.push(P),d(Object(na.d)(t))}},translateTitle:!0},t))}}()}function r(){const{elite:t}=e;if(t&&t.replacement_for_mac){const e=E.find(e=>e.mac===t.replacement_for_mac);d(Object(er.a)({title:"DEVICE_APPLY_CONFIGURATION_HEADER",titleValues:{deviceName:e.name},message:"DEVICE_APPLY_CONFIGURATION_MESSAGE",messageValues:{deviceName:e.name},size:"small",onConfirm:()=>{d(Object(Ut.e)())},onCancel:()=>{d(Object(Ut.e)()),n()}}))}else n()}t.preventDefault(),t.stopPropagation(),p?d(Object(er.a)({title:"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_TITLE",titleValues:{deviceName:e.name},message:e.upgrade_to_firmware?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_VERSION_MESSAGE":"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_MESSAGE",messageValues:{fromVersion:e.version,toVersion:e.upgrade_to_firmware},size:"small",onConfirm:()=>{d(Object(Ut.e)()),r()},onCancel:()=>{d(Object(Ut.e)()),T(!1)}})):r()},disabled:y},l),c.a.createElement(F.c,{id:p?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE":"DEVICE_ACTIONS_ADOPT"}))))});const gR=Object(l.c)(Pe.g)`
  padding: 0 32px;
`,RR=Object(l.c)(Pe.g)`
  padding: 24px 32px 0;
`,vR=Object(l.c)("div")`
  margin-bottom: 16px;
`;var CR=({activeItem:e})=>Object(r.useMemo)(()=>Object(O.isAdopted)(e),[e])?c.a.createElement(RR,{flexDirection:"column"},c.a.createElement(vR,null,c.a.createElement(iR.a,{device:e,size:"body"}))):c.a.createElement(gR,{justifyContent:"flex-end"},c.a.createElement(IR,{device:e,showForNonAdoptableGateway:!0}));const hR=Object(l.c)(M.a,{shouldForwardProp:e=>"isDefaultPanel"!==e})`
  ${({isDefaultPanel:e})=>!e&&"height: 100%;"}
  overflow-x: hidden;
  overflow-y: scroll;
  overflow-y: overlay;
`,TR=Object(F.f)(e=>{const{match:{path:t,params:a},activeItem:{type:r,data:l},location:i,match:E,history:s,intl:m}=e,_=Object(o.useSelector)(ce.m),u=r===d.b.DEVICE&&!Object(O.isAdopted)(l),{id:b,site:p,panel:I,page:g,subPanel:R,subPage:v}=a,C=ie(l,r),h=Hg[C],T=I===(null==h?void 0:h.default);if(!h)return null;const f=h.singlePanel?null:u?[{id:h.default,label:m.formatMessage({id:h.panels[h.default].title}),icon:h.panels[h.default].icon}]:Object.keys(h.panels).reduce((t,a)=>{const{disabled:n,title:r,icon:c}=h.panels[a];return n&&"function"==typeof n&&n({...e,isUdm:_})||t.push({id:a,label:m.formatMessage({id:r}),icon:c}),t},[]),D=Object(n.i)(t,{id:b,site:p,page:g,panel:h.default,subPage:v});return c.a.createElement(M.a,{height:"100%",flexDirection:"column"},!h.singlePanel&&!u&&c.a.createElement($g,{activeItem:l,tabs:f,history:s,match:E,location:i}),c.a.createElement(Qg,{activeItem:l}),c.a.createElement(hR,{isDefaultPanel:T,flexDirection:"column"},(()=>{const r=h.panels[I];if(!r)return c.a.createElement(n.c,{to:D});const{component:i,disabled:o}=r;if(!0===o||"function"==typeof o&&o({...e,isUdm:_})||u&&I!==h.default)return c.a.createElement(n.c,{to:D});if(R&&r.subpanel){const{component:e}=r.subpanel;return c.a.createElement(e,{activeItem:l,params:a,path:t,history:s})}return c.a.createElement(i,{activeItem:l,params:a,path:t,history:s,key:`${I}${R&&r.subpanel?"-subpanel":""}`})})()),T&&"clients"===g&&r===d.b.CLIENT&&c.a.createElement(lR,{activeItem:l}),T&&"devices"===g&&r===d.b.DEVICE&&c.a.createElement(CR,{activeItem:l}))});var fR=c.a.memo(e=>e.match&&c.a.createElement(TR,Object.assign({},e)),(e,t)=>null===t.match);const DR=l.a`
  & > div {
    overflow: hidden;
  }
`;var PR=({location:e,history:t,panelType:a})=>{var l;const u=Object(o.useSelector)(m.j),[b,p]=Object(r.useState)(!1),O=Object(o.useSelector)(h),I=Object(o.useDispatch)(),{path:T}=Object(n.n)(),{site:f,id:D}=Object(n.m)(),y=Object(r.useMemo)(()=>{if(D)switch(a){case d.b.DEVICE:return P(D);case d.b.UNIFI_DEVICE:return e=D,Object(R.b)()(Object(_.a)(v.selectIsUnifiDevicesPageSupportedController,P(e),j(e),(e,t,a)=>{if(e){if(t&&"mac"in t)return{panel:d.b.DEVICE,activeItemPayload:t};if(a&&"mac"in a)return{panel:d.b.UNIFI_DEVICE_CLIENT,activeItemPayload:a}}return null}),e=>e);case d.b.CLIENT:return A(D);case d.b.WIFI_MAN:return(e=>Object(R.b)()(Object(_.a)(C.c,t=>t.find(t=>t.id===e)),e=>e))(D);case d.b.ISP_DETAILS:return(e=>Object(R.b)()(Object(_.a)(g.selectIspInfoItems,t=>t.find(({networkgroup:t})=>t===e)),e=>e))(D);default:return null}var e;return null},[D,a])||function(){return null},S=Object(o.useSelector)(y);let V=S||{},w=a;a===d.b.UNIFI_DEVICE&&S&&"activeItemPayload"in S&&"panel"in S&&({activeItemPayload:V,panel:w}=S);const F={type:w,data:O||b?V:{}},M=()=>{p(!0),t.push(e.pathname.split("/properties")[0])};Object(s.a)(()=>O&&M(),[O]),Object(r.useEffect)(()=>{O&&!e.pathname.includes("/properties")&&I(Object(N.f)())},[e]),Object(r.useEffect)(()=>{O&&!F.type&&M()},[O,F]);const U=Object(r.useCallback)(()=>{p(!1)},[]);return Object(r.useEffect)(()=>{var r,c;w&&(null===(r=null==e?void 0:e.pathname)||void 0===r?void 0:r.includes("properties/"))&&((null===(c=Object.keys(V||{}))||void 0===c?void 0:c.length)?I(Object(N.g)({type:a,mac:D,id:D})):t.push(Object(n.i)(T,{site:f})))},[]),Object(L.f)([Object(x.c)("devices")],F.type&&(null===(l=Object.keys((null==F?void 0:F.data)||{}))||void 0===l?void 0:l.length)?c.a.createElement(i.a,{in:O,header:c.a.createElement(re,{activeItem:F}),onClose:M,onEntered:U,onExited:U,className:DR,style:{border:"none"}},(O||b)&&c.a.createElement(E.a,{path:u+"/:page/:subPage?/properties/:id/:panel?/:subPanel?/:subPanelId?"},e=>c.a.createElement(fR,Object.assign({activeItem:F},e)))):null)};t.a=Object(n.o)(PR)},2096:function(e,t,a){"use strict";var n,r,c;a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),function(e){e.ELEMENTS="elements",e.STATUS="status"}(n||(n={})),function(e){e.GATEWAY="gateway",e.SWITCH="switch",e.ACCESS_POINT="access_point",e.SMART_POWER="smart_power",e.BUILDING_BRIDGE="building_bridge",e.ULTE="ulte"}(r||(r={})),function(e){e.ONLINE="online",e.OFFLINE="offline",e.ISOLATED="isolated",e.PENDING_ADOPTION="pending_adoption",e.MANAGED_BY_ANOTHER_CONSOLE="managed_by_another_console"}(c||(c={}))},2780:function(e,t,a){e.exports=a.p+"../images/f1810d16bd0ce70800a4e99a7aacfb7c.png"},2781:function(e,t,a){e.exports=a.p+"../images/9b79c5e098915662f9d35a24c5221009.png"},2891:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(0),c=a.n(r),l=a(36),i=a(71),o=a(70),E=a(391),s=a(6),m=a(73),d=a(178),_=a(235),u=a(18),b=a(3),p=a(529),O=a(1958),I=a(32),g=a(1818),R=a(2825),v=a(2),C=a(5),h=a(665),T=a(815),f=a(675),D=a(742),P=a(2096);const y=Object(C.c)("div")`
  padding: 24px;
`,S=Object(C.c)(I.a)`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
  display: block;
`,A=()=>{const e=Object(n.useSelector)(u.N),{showAllDevices:t,showWiredClients:a,show2GClients:l,show5GClients:i,showSSID:o,showWifiExperience:E,showRadioChannel:s,showWifiStandards:m,showWiredPorts:d,showWiredSpeed:_}=e,b=Object(n.useSelector)(D.b),p=Object(n.useDispatch)(),I=o&&E&&s&&m&&_&&d,C=a&&l&&i,h=Object(r.useCallback)(t=>{var a,n;const{id:r}=null!==(a=null==t?void 0:t.target)&&void 0!==a?a:{};if("showAllDescriptions"!==r){if(r){const t=null!==(n=e[r])&&void 0!==n?n:T.b.topologyViewSettings[r];p(Object(u.T)(Object.assign({},e,{[r]:!t})))}}else p(Object(u.T)(Object.assign({},e,{showSSID:!I,showWifiExperience:!I,showRadioChannel:!I,showWifiStandards:!I,showWiredSpeed:!I,showWiredPorts:!I})))},[p,e,I]),f=Object(r.useCallback)(({target:{checked:t}})=>{const a=Object.assign({},e,{showWiredClients:t,show2GClients:t,show5GClients:t});p(Object(u.T)(a))},[p,e]);return c.a.createElement(y,null,c.a.createElement(O.d,{checked:t,onChange:h,id:"showAllDevices",text:"TOPOLOGY_FILTER_SHOW_ALL_DEVICES",toggleStyle:{marginTop:4,marginBottom:16}}),c.a.createElement(g.a,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"clients",openByDefault:!0,label:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_CLIENTS"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(O.d,{checked:C,onChange:f,id:"showAllClients",text:"TOPOLOGY_FILTER_SHOW_ALL_CLIENTS",toggleStyle:{marginBottom:16}}),c.a.createElement(R.a,{spacing:"flush",variant:"list",items:[{full:!0,id:"show2GClients",checked:l,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_2G_CLIENTS"}),onChange:h},{full:!0,id:"show5GClients",checked:i,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_5G_CLIENTS"}),onChange:h},{full:!0,id:"showWiredClients",checked:a,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED"}),onChange:h}]}))},{id:"description",label:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_DESCRIPTION"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(O.d,{checked:I,onChange:h,id:"showAllDescriptions",text:"TOPOLOGY_FILTER_SHOW_ALL_DESCRIPTIONS",toggleStyle:{marginBottom:24}}),c.a.createElement(S,{size:"body",weight:"bold"},c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_CAPTION_WIRELESS"})),c.a.createElement(R.a,{spacing:"flush",variant:"list",items:[{full:!0,id:"showSSID",checked:o,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_SSID"}),onChange:h},{full:!0,id:"showWifiExperience",checked:E,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_WIFI_EXPERIENCE"}),onChange:h},{full:!0,id:"showRadioChannel",checked:s,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_RADIO_CHANNEL"}),onChange:h},{full:!0,id:"showWifiStandards",checked:m,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_WIFI_STANDARDS"}),onChange:h}]}),c.a.createElement(S,{size:"body",weight:"bold"},c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_CAPTION_WIRED"})),c.a.createElement(R.a,{spacing:"flush",variant:"list",items:[{full:!0,id:"showWiredSpeed",checked:_,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED_SPEED"}),onChange:h},{full:!0,id:"showWiredPorts",checked:d,children:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED_PORTS"}),onChange:h}]}))},{id:"status",openByDefault:!1,label:c.a.createElement(v.c,{id:"TOPOLOGY_FILTER_STATUS"}),renderContent:()=>c.a.createElement(R.a,{spacing:"flush",variant:"list",items:Object.values(P.b).map(t=>{var a;return{id:t,full:!0,checked:null!==(a=e[t])&&void 0!==a?a:T.b.topologyViewSettings[t],onChange:h,children:c.a.createElement(v.b,{id:"TOPOLOGY_FILTER_STATUS_"+t.toUpperCase()}),labelProps:{count:b[t]}}})})}]}))},j=Object(C.c)("div")`
  .base-control-panel {
    position: fixed;
    left: 0;
    right: 0;
    background: ${({theme:e})=>e.motifPalette.uiBase};
    z-index: 11;
  }

  @media ${h.b.VIEWPORT_S_UP} {
    .base-control-panel {
      left: 50px;
    }
  }
`;var N=e=>{const{routes:t}=e,a=f.a.isSafari?j:c.a.Fragment,l=Object(n.useSelector)(u.N),i=Object(n.useDispatch)(),o=Object(r.useMemo)(()=>Object(p.a)(l,T.b.topologyViewSettings),[l]),E=Object(r.useCallback)(()=>{i(Object(u.T)(T.b.topologyViewSettings))},[i]),s=Object(r.useCallback)(()=>{i(Object(u.j)())},[i]);return c.a.createElement(a,null,c.a.createElement(O.c,{filterTitleLabel:"TOPOLOGY_FILTER_BUTTON_LABEL",isLoading:!1,routes:t,renderFilterDrawerContent:c.a.createElement(A,null),filterFooterProps:{label:c.a.createElement(v.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESTORE_DEFAULTS"}),onClick:E,disabled:o},onClose:s}))},L=a(42),x=a(215),V=a(2780),w=a.n(V),F=a(2781),M=a.n(F),U=a(226);const k=Object(C.c)("h2")`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin: ${({theme:e})=>`${e.spacing["spacing-m"]} 0 ${e.spacing["spacing-xxl"]}`};
  font-size: 24px;
`,z=Object(C.c)(I.a)`
  color: ${({theme:e})=>e.motifPalette.text01};
  font-size: ${({theme:e})=>e.fontSize["font-size-l2"]};
  line-height: 1.7;
  text-align: center;

  a {
    text-decoration: underline;
  }
`,B=Object(C.c)("div")`
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
`,W=Object(C.c)("div")`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
`,H=Object(C.c)("img")`
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,G=Object(C.c)("a")`
  font-weight: bold;
`,Y=Object(C.c)(i.g)`
  margin-top: ${f.a.isSafari?"50px":"0"};
`;var $=()=>{const e=Object(l.k)(),t=Object(o.i)("system"),{motif:a}=Object(L.a)(),n=Object(r.useCallback)(()=>e.push(t),[e,t]);return c.a.createElement(Y,{flexDirection:"column",alignItems:"center"},c.a.createElement(B,null,c.a.createElement(W,null,c.a.createElement(H,{src:"light"===a?w.a:M.a,alt:"No floorplan available"}))),c.a.createElement(k,null,c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_TITLE"})),c.a.createElement(i.g,{marginBottom:16,flexDirection:"column"},c.a.createElement(z,null,c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_1"})),c.a.createElement(z,null,c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_2"})),c.a.createElement(z,null,c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_3"}),c.a.createElement("a",{href:U.a.uiDesign,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_DESIGN_URL"})))),c.a.createElement(i.g,{marginBottom:16},c.a.createElement(x.a,{variant:"primary",onClick:n,motif:"dark"},c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_SETTINGS_LINK"}))),c.a.createElement(i.g,null,c.a.createElement(G,{href:U.a.uiDesign,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(v.c,{id:"TOPOLOGY_FLOORPLAN_VISIT_LINK"}))))},K=a(2817),X=a(2533),q=a(826),Z=a(106),J=a(2050),Q=a(781),ee=a(808);const te=(e,t)=>{const a=t.find(t=>t.downlinkMac===e);return null==a?void 0:a.uplinkMac},ae=e=>({id:"invisibleNodeName",name:"invisibleNodeName",mac:"invisibleNodeMac",type:"invisibleNodeType",parentMac:void 0,children:e.map(e=>({...e,parentMac:"invisibleNodeMac"}))}),ne=(e,t,a,n,r,c,l,i,o,E)=>{if(t&&a&&r&&c&&l&&i&&o&&E)return e;const{edges:s,vertices:m}=e,[d,_,u]=(e=>e.reduce((e,{type:t,radioBand:a,downlinkMac:n})=>(t===ee.a.WIRELESS?(a===ee.b.GHZ2&&e[0].add(n),a===ee.b.GHZ5&&e[1].add(n)):e[2].add(n),e),[new Set,new Set,new Set]))(s),p=e=>n?!("DEVICE"===(null==e?void 0:e.type)||(null==e?void 0:e.unifiDevice)):"CLIENT"===e.type,O=m.filter(e=>"invisibleNode"===e.type||c&&(e=>{const{deviceState:t}=e;return t===b.DeviceState.CONNECTED||t===b.DeviceState.UPGRADING||t===b.DeviceState.PROVISIONING||t===b.DeviceState.ADOPTING||t===b.DeviceState.DELETING||t===b.DeviceState.RESTARTING||t===b.DeviceState.RFSCANNING||t===b.DeviceState.HEARTBEAT_MISSED})(e)||l&&(e=>{const{deviceState:t}=e;return t===b.DeviceState.DISCONNECTED||t===b.DeviceState.INFORM_ERROR})(e)||i&&(e=>{const{deviceState:t}=e;return t===b.DeviceState.MANAGED_BY_OTHER})(e)||o&&(e=>{const{deviceState:t}=e;return t===b.DeviceState.PENDING||t===b.DeviceState.ADOPTION_REQUIRED||t===b.DeviceState.ADOPTION_FAILED||t===b.DeviceState.FIRMWARE_MISMATCH})(e)||E&&(e=>{const{deviceState:t}=e;return t===b.DeviceState.ISOLATED})(e)||p(e)&&r&&u.has(e.mac)||p(e)&&t&&d.has(e.mac)||p(e)&&a&&_.has(e.mac));return{...e,vertices:O}};var re=a(2866),ce=a(2815),le=a(2867),ie=a(2865),oe=a(2750),Ee=a(1177),se=a(2929),me=a(731),de=a(373),_e=a(78),ue=a(45),be=a(15),pe=a(159),Oe=a(522),Ie=a(117);const ge=Object(C.c)(Ie.c)`
  user-select: none;
  display: block;
  height: ${50}px;
  width: ${120}px;
  object-fit: contain;
  margin: 0 auto;

  img {
    width: auto;
  }
`,Re=Object(C.c)(Oe.a)`
  // !important needed to override default styling of fallback images
  user-select: none;
  display: block;
  height: ${50}px !important;
  width: ${120}px !important;
  object-fit: contain !important;
  margin: 0 auto !important;
  padding: 0 !important;

  img {
    width: auto;
  }
`,ve=Object(C.c)("text",{shouldForwardProp:e=>"isHovered"!==e})`
  transition: none !important;
  fill: ${({theme:e,isHovered:t})=>t?e.motifPalette.text02+" !important":e.motifPalette.uBlue06};
`,Ce=({nodeData:e})=>{const{data:t}=e,a=Object(n.useSelector)(Object(m.selectClientData)(t.mac));return c.a.createElement(Re,{grid:!0,client:a})},he=({nodeData:e})=>{var t;const{data:a}=e;return"DEVICE"===a.type?c.a.createElement(ge,{filesMap:"TOPOLOGY",device:{model:a.model,type:null===(t=_e.deviceModels[a.model])||void 0===t?void 0:t.type}}):c.a.createElement(Ce,{nodeData:e})},Te=Object(C.c)(i.g)`
  /* Helps with safari bug*/
  position: fixed;
  white-space: nowrap;
  transform: translate(-50%, -100%) scale(var(--d3-zoom-scale));
  transform-origin: bottom center;
  color: ${({theme:e})=>e.motifPalette.neutral07};

  .text-content {
    color: ${({theme:e})=>e.motifPalette.text03};
  }
`,fe={transition:"opacity 100ms cubic-bezier(0.65, 0, 0.35, 1), transform 100ms cubic-bezier(0.65, 0, 0.35, 1)",opacity:0,visibility:"hidden"},De={exiting:{opacity:0,visibility:"initial"},entering:{opacity:1,visibility:"initial"},entered:{opacity:1,visibility:"initial"}},Pe=({wifiRadios:e,isVisible:t})=>c.a.createElement(Ee.a,{in:t,unmountOnExit:!0,timeout:100},t=>{const a={...fe,...De[t]};return e?c.a.createElement("foreignObject",{x:0,y:-33,width:"1",height:"1",style:{overflow:"visible",...a}},c.a.createElement(Te,{alignItems:"center",center:!0},c.a.createElement(be.Fb,{size:"small"}),c.a.createElement(I.a,{style:{marginLeft:4},className:"text-content"},null==e?void 0:e.map(({protocol:e,channel:t})=>`${t} (${e.toUpperCase()})`).join(", ")))):null}),ye=Object(C.c)("g")`
  pointer-events: none;
  user-select: none;
  cursor: pointer;

  text {
    fill: ${({theme:e})=>e.motifPalette.uBlue06};
    transition: fill 0.2s linear;
    font-weight: bold;
  }
`,Se=Object(C.c)("text")`
  fill: ${({experienceState:e})=>ue.a["color-"+e]} !important;
`;function Ae(e,t=!1){var a,n;const{x:r,y:c,parent:l}=e;if(t){const e=null!==(a=null==l?void 0:l.x)&&void 0!==a?a:0;return`translate(${null!==(n=null==l?void 0:l.y)&&void 0!==n?n:0},${e})`}return`translate(${c},${r})`}const je=Object(C.c)("g")`
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    filter: drop-shadow(0px 4.4px 4.4px rgba(0, 0, 0, 0.25));
    transform: translateX(-8px) scale(1.1, 1.1);
  }
`,Ne=Object(C.c)("circle")`
  fill: ${({theme:e})=>e.motifPalette.uBlue06};
`,Le=({collapsedNodes:e,data:t,multiUplinkWidth:a,setHoveredNode:n,handleChildrenToggle:r})=>{const l=((e,t)=>t.has(e))(t.mac,e)?be.xb:be.db;return c.a.createElement(je,{onClick:e=>r(t.id,e),onMouseEnter:()=>n(t.id),onMouseLeave:()=>n(null),onMouseOver:()=>{n(t.id)}},c.a.createElement(Ne,{cx:60+a,cy:0,r:10}),c.a.createElement(l,{className:"toggle-icon",x:60+a+-4.5,y:-4.5,fill:"white",width:9,height:9}))},xe=Object(C.c)("g")``,Ve=({percentage:e,isVisible:t})=>c.a.createElement(Ee.a,{in:t,unmountOnExit:!0,timeout:100},t=>{const a={...fe,...De[t]};return c.a.createElement(Se,{style:a,y:58.5,textAnchor:"middle",experienceState:Object(pe.c)(e)},e," %")}),we=({isHovered:e,data:t,multiUplinkWidth:a})=>{const n=Object(r.useRef)(null),l=t.name||t.mac,i=120+2*a;return Object(r.useEffect)(()=>{if(n.current){const e=n.current;let t=e.getComputedTextLength(),a=l.length,r=l;const c=10;let o=100;for(;t>i&&o>0&&r.length>0&&Math.abs(i-t)>c;)r=t>=i?r.slice(0,.15*-a):l.slice(0,1.15*a),e.textContent=r+"...",t=e.getComputedTextLength(),a=r.length,o--}},[l,i]),c.a.createElement(ve,{innerRef:n,y:42.5,textAnchor:"middle",isHovered:e},l)};var Fe=({nodeData:e,experienceScore:t,handleChildrenToggle:a,handleNodeClick:l,transitionDuration:i,labelWidth:o,collapsedNodes:E,setHoveredNode:s,hoveredNode:m,...d})=>{var _,b;const[p]=Object(r.useState)(Ae(e,!0)),[O]=Object(r.useState)({opacity:0}),I=Object(r.useRef)(null),g=Object(r.useRef)(!0),R=Object(r.useRef)(!0),{showWifiExperience:v,showRadioChannel:C}=Object(n.useSelector)(u.N),{x:h,y:T}=e,f=(null===(b=null===(_=null==e?void 0:e.data)||void 0===_?void 0:_.internalChildren)||void 0===b?void 0:b.length)>0,D=e.data.id===m,P=o>0?32:16,y=(e,t,a=1)=>{Object(ie.a)(I.current).transition().duration(t).attr("transform",e).style("opacity",a).on("end",()=>{R.current=!1})};Object(r.useEffect)(()=>{g.current?g.current=!1:y(`translate(${T},${h})`,i,1)},[h,T,i]);return"invisibleNodeType"===e.data.type?null:c.a.createElement(Ee.a,Object.assign({},d,{timeout:{enter:i,exit:i},onExit:()=>{((e,t)=>{const a=Ae(e,!0);y(a,t,0)})(e,i)},onEnter:()=>{((e,t)=>{const a=Ae(e);y(a,t,1)})(e,i)},unmountOnExit:!0,mountOnEnter:!0}),c.a.createElement(xe,{id:e.data.id,innerRef:I,style:O,transform:p},c.a.createElement(Pe,{wifiRadios:e.data.wifiRadios,isVisible:e.data.wifiRadios&&C&&!D}),c.a.createElement("foreignObject",{width:120,height:50,x:-60,y:-25,style:{overflow:"visible",pointerEvents:"none"}},c.a.createElement(he,{nodeData:e})),f&&D&&c.a.createElement(Le,{handleChildrenToggle:a,setHoveredNode:s,multiUplinkWidth:P,data:e.data,collapsedNodes:E}),c.a.createElement(ye,{onClick:()=>l(e)},c.a.createElement(we,{data:e.data,isHovered:D,multiUplinkWidth:P}),c.a.createElement(Ve,{percentage:t,isVisible:t&&v&&!D}))))},Me=a(523);const Ue=Object(C.c)("path")`
  stroke: ${e=>(({type:e,radioBand:t})=>e===ee.a.WIRELESS&&t===ee.b.GHZ2?ue.a["blue-light-4"]:ue.a["blue-3"])(e)};
  stroke-width: 0.5;
  fill: none;
  /** could be used for more fine grained grabbing */
  //pointer-events: visibleStroke;
  pointer-events: none;
  stroke-dasharray: ${({type:e})=>e===ee.a.WIRELESS?5:0};
`,ke=Object(C.c)("span")`
  line-height: 20px;
  color: ${({theme:e})=>e.motifPalette.text03};
`,ze=Object(C.c)("div")`
  user-select: none;
  align-items: center;
  white-space: nowrap;
  display: inline-flex;
  // This is to help with foreignObject issues in Safari. Without "fixed", the objects will
  // move to the top left of the page. We need the static positioning for LabelCalipers
  // component to measure correctly the label width before layouting the tree.
  position: ${({measuring:e})=>e?"static":"fixed"};
  color: ${({theme:e})=>e.motifPalette.neutral07};
`,Be=Object(C.c)(be.Zb)`
  path {
    fill: ${({theme:e})=>e.motifPalette.neutral07} !important;
  }
`,We={transition:"opacity 200ms cubic-bezier(0.65, 0, 0.35, 1), transform 200ms cubic-bezier(0.65, 0, 0.35, 1)",opacity:0,visibility:"hidden"},He={exiting:{opacity:0,visibility:"initial"},entering:{opacity:1,visibility:"initial"},entered:{opacity:1,visibility:"initial"}},Ge=({transform:e,children:t,isVisible:a})=>c.a.createElement(Ee.a,{in:!!a,timeout:200,unmountOnExit:!0},a=>{const n={...We,...He[a]};return c.a.createElement("g",{transform:e,style:n,pointerEvents:"none"},c.a.createElement("foreignObject",{x:0,y:0,width:"1",height:"1",style:{overflow:"visible"}},t))}),Ye=({protocol:e})=>{if(!(e=>e===ee.c.A||e===ee.c.B||e===ee.c.G)(e)){if(e===ee.c.NA||e===ee.c.NG)return c.a.createElement(be.oc,{size:"small"});if(e===ee.c.AC||e===ee.c.AD)return c.a.createElement(be.pc,{size:"small"});if(e===ee.c.AX)return c.a.createElement(be.qc,{size:"small"})}return null},$e=({networkData:e,measuring:t=!1})=>{const{protocol:a}=e;return c.a.createElement(ze,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:t},c.a.createElement(Ye,{protocol:a}),c.a.createElement(ke,{style:{marginLeft:4}},a.toUpperCase()))},Ke=({networkData:e,target:t,isVisible:a})=>c.a.createElement(Ge,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:a},e.protocol&&c.a.createElement($e,{networkData:e})),Xe=({essid:e,measuring:t=!1})=>{const a=e.length>14?e.substring(0,12).concat("..."):e;return c.a.createElement(ze,{style:{transform:"translate(-100%,0) scale(var(--d3-zoom-scale))",paddingLeft:16,transformOrigin:"right top"},measuring:t},c.a.createElement(be.sc,null),c.a.createElement(ke,{style:{marginLeft:4}},a))},qe=({essid:e,target:t,isVisible:a})=>c.a.createElement(Ge,{transform:`translate(${t.y-60-16}, ${t.x+8})`,isVisible:a},e&&c.a.createElement(Xe,{essid:e})),Ze=({uplinkPortNumber:e,style:t,measuring:a=!1})=>{const n=null==t?void 0:t.transform;return c.a.createElement(ze,{style:{...t,transform:n+" scale(var(--d3-zoom-scale))"},measuring:a},c.a.createElement(be.h,{size:"small"}),c.a.createElement(be.G,{size:"small",style:{marginLeft:4,marginRight:4}}),c.a.createElement(ke,null,e))},Je=({downlinkPortNumber:e,measuring:t=!1})=>c.a.createElement(ze,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:t},c.a.createElement(be.i,{size:"small"}),c.a.createElement(be.G,{size:"small",style:{marginLeft:4,marginRight:4}}),c.a.createElement(ke,null,e)),Qe=({downlinkPortNumber:e,uplinkPortNumber:t,measuring:a=!1})=>c.a.createElement(ze,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:a},c.a.createElement(be.h,{size:"small"}),c.a.createElement(be.G,{size:"small",style:{marginLeft:4,marginRight:4}}),c.a.createElement(ke,null,t),c.a.createElement(be.i,{size:"small",style:{marginLeft:10}}),c.a.createElement(be.G,{size:"small",style:{marginLeft:4,marginRight:4}}),c.a.createElement(ke,null,e)),et=({measuring:e=!1})=>null,tt=({rateMbps:e,measuring:t=!1})=>c.a.createElement(ze,{style:{transform:"translate(-100%,0) scale(var(--d3-zoom-scale))",paddingRight:16,transformOrigin:"right top"},measuring:t},c.a.createElement(Be,{size:"small"}),c.a.createElement(ke,{style:{marginLeft:4}},Object(Me.b)(e))),at=({target:e,rateMbps:t,isVisible:a})=>c.a.createElement(Ge,{transform:`translate(${e.y-60}, ${e.x+8})`,isVisible:a},c.a.createElement(tt,{rateMbps:t})),nt=({target:e,downlinkPortNumber:t,isVisible:a})=>c.a.createElement(Ge,{transform:`translate(${e.y-60-16}, ${e.x-8})`,isVisible:a},c.a.createElement(Je,{downlinkPortNumber:t})),rt=({source:e,target:t,networkData:a,isVisible:n})=>{var r;const{uplinkPortNumber:l}=a;if((null===(r=null==e?void 0:e.children)||void 0===r?void 0:r.length)>1){const r=a.downlinkMac===e.children[0].data.mac;return c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(Ge,{transform:`translate(${e.y+60}, ${e.x-8})`,isVisible:n},c.a.createElement(et,null)),c.a.createElement(Ge,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:n},c.a.createElement(Ze,{uplinkPortNumber:l,style:{transform:"translate(-100%,-100%)",transformOrigin:"bottom right"}})))}return c.a.createElement(Ge,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:n},c.a.createElement(Ze,{uplinkPortNumber:l,style:{transform:"translate(0,-100%)",transformOrigin:"bottom left"}}))},ct=(e,t)=>e.data.id===t,lt=({source:e,target:t,networkData:a,isVisible:n,hoveredNode:r})=>{var l;const{uplinkPortNumber:i,downlinkPortNumber:o}=a;if((null===(l=null==e?void 0:e.children)||void 0===l?void 0:l.length)>1){const l=a.downlinkMac===e.children[0].data.mac;return c.a.createElement(c.a.Fragment,null,l&&c.a.createElement(Ge,{transform:`translate(${e.y+60}, ${e.x-8})`,isVisible:n&&!ct(e,r)},c.a.createElement(et,null)),c.a.createElement(Ge,{transform:`translate(${t.y-60-16}, ${t.x-8})`,isVisible:n&&!ct(t,r)},c.a.createElement(Qe,{downlinkPortNumber:o,uplinkPortNumber:i})))}return c.a.createElement(Ge,{isVisible:n&&!ct(t,r),transform:`translate(${t.y-60-16}, ${t.x-8})`},c.a.createElement(Qe,{downlinkPortNumber:o,uplinkPortNumber:i}))},it=({source:e,target:t,networkData:a,hoveredNode:r})=>{const{downlinkPortNumber:l,uplinkPortNumber:i,rateMbps:o}=a,{showWiredSpeed:E,showWiredPorts:s}=Object(n.useSelector)(u.N);return l&&i?c.a.createElement(c.a.Fragment,null,c.a.createElement(lt,{source:e,target:t,networkData:a,isVisible:s,hoveredNode:r}),c.a.createElement(at,{rateMbps:o,target:t,isVisible:o&&E&&!ct(t,r)})):i?c.a.createElement(c.a.Fragment,null,c.a.createElement(rt,{source:e,target:t,networkData:a,isVisible:s&&!ct(t,r)}),c.a.createElement(at,{rateMbps:o,target:t,isVisible:o&&E&&!ct(t,r)})):l?c.a.createElement(c.a.Fragment,null,c.a.createElement(nt,{target:t,downlinkPortNumber:l,isVisible:s&&!ct(t,r)}),c.a.createElement(at,{rateMbps:o,target:t,isVisible:o&&E&&!ct(t,r)})):null},ot=({networkData:e,target:t,hoveredNode:a})=>{const{essid:r,type:l,channel:i}=e,{showSSID:o,showWifiStandards:E}=Object(n.useSelector)(u.N),s=l===ee.a.WIRELESS;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ke,{networkData:e,target:t,isVisible:!(!(s&&E&&i)||ct(t,a))}),c.a.createElement(qe,{essid:r,target:t,isVisible:!(!(s&&o&&r)||ct(t,a))}))},Et=(e,t,a,n,r)=>{const c=n-t,l=60+(r>0?32:16),i=60+r;return t!==n?`M ${t} ${e}\n          L ${t+l} ${e}\n          C ${t+l+.2*c} ${e},\n            ${n-i-.2*c} ${a},\n            ${n-i} ${a}\n          L ${n} ${a}`:`M ${t} ${e}\n          L ${t} ${e}\n          C ${t} ${e},\n            ${n} ${a},\n            ${n} ${a}\n          L ${n} ${a}`},st=Object(C.c)("g")`
  opacity: 0;
  pointer-events: none;
`;var mt=({transitionDuration:e,linkData:t,networkData:a,labelWidth:n,nextNodeListRef:l,prevNodeListRef:i,hoveredNode:o,...E})=>{const s=Object(r.useRef)(null),m=Object(r.useRef)(null),d=Object(r.useRef)(!0),{source:_,target:u}=t;return Object(r.useEffect)(()=>{d.current?d.current=!1:Object(ie.a)(m.current).transition().duration(e).attr("d",()=>Et(_.x,_.y,u.x,u.y,n))},[n,_.x,_.y,u.x,u.y,e]),c.a.createElement(Ee.a,Object.assign({},E,{timeout:{enter:e,exit:e},onExit:()=>{var t;const a=(null===(t=null==l?void 0:l.current)||void 0===t?void 0:t.find(e=>e.data.mac===_.data.mac))||_;Object(ie.a)(s.current).transition().duration(e).style("opacity",0),Object(ie.a)(m.current).transition().duration(e).attr("d",()=>Et(a.x,a.y,a.x,a.y,n))},onEnter:()=>{var t;const a=(null===(t=null==i?void 0:i.current)||void 0===t?void 0:t.find(e=>e.data.mac===_.data.mac))||_;Object(ie.a)(s.current).transition().duration(e).style("opacity",1),Object(ie.a)(m.current).attr("d",Et(a.x,a.y,a.x,a.y,n)).transition().duration(e).attr("d",()=>Et(_.x,_.y,u.x,u.y,n))}}),c.a.createElement(st,{innerRef:s},c.a.createElement(Ue,{innerRef:m,type:a.type,radioBand:a.radioBand}),c.a.createElement(it,{source:_,target:u,networkData:a,hoveredNode:o}),c.a.createElement(ot,{target:u,networkData:a,hoveredNode:o})))};const dt=Object(C.c)("div")`
  position: fixed;
  bottom: 36px;
  margin-left: 32px;

  .fitToScreenButton {
    border-radius: 4px;

    &:hover {
      box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 15%);
    }
  }

  Button {
    border: 1px solid ${({theme:e})=>e.motifPalette.checkboxBorder};
    width: 36px;
    height: 36px;
    color: ${({theme:e})=>e.motifPalette.neutral08};
    background: ${({theme:e})=>e.motifPalette.neutral00};

    &:focus {
      color: ${({theme:e})=>e.motifPalette.neutral10};
    }
  }
`;var _t=({onResetZoomClick:e})=>c.a.createElement(dt,null,c.a.createElement(x.a,{variant:"tertiary",Icon:be.Q,wrapClassName:"fitToScreenButton",onClick:e}));const ut=(e,t)=>"dark"===e?t.motifPalette.uBlue09:t.motifPalette.uBlue01,bt=Object(C.c)("rect",{shouldForwardProp:e=>"isHovered"!==e&&"motif"!==e})`
  cursor: pointer;
  fill: ${({theme:e,isHovered:t,motif:a})=>t?ut(a,e):"transparent"};

  &:hover {
    fill: ${({theme:e,motif:t})=>ut(t,e)};
  }
`;var pt=({nodeData:e,labelWidth:t,transitionDuration:a,handleNodeClick:n,handleChildrenToggle:l,setHoveredNode:i,hoveredNode:o,...E})=>{var s,m;const[d]=Object(r.useState)(Ae(e,!0)),[_]=Object(r.useState)({opacity:0}),u=Object(r.useRef)(null),b=Object(r.useRef)(!0),p=Object(r.useRef)(!0),{motif:O}=Object(L.a)(),I=e.data.id===o,{x:g,y:R}=e,v=(e,t,a=1)=>{Object(ie.a)(u.current).transition().duration(t).attr("transform",e).style("opacity",a).on("end",()=>{p.current=!1})};Object(r.useEffect)(()=>{b.current?b.current=!1:v(`translate(${R},${g})`,a,1)},[g,R,a]);const C=(null===(m=null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.internalChildren)||void 0===m?void 0:m.length)>0;if("invisibleNodeType"===e.data.type)return null;const h=t>0?32:16;return c.a.createElement(Ee.a,Object.assign({},E,{timeout:{enter:a,exit:a},onExit:()=>{((e,t)=>{const a=Ae(e,!0);v(a,t,0)})(e,a)},onEnter:()=>{((e,t)=>{const a=Ae(e);v(a,t,1)})(e,a)},unmountOnExit:!0,mountOnEnter:!0}),c.a.createElement("g",{id:e.data.id,ref:u,style:_,transform:d,onMouseEnter:()=>i(e.data.id),onMouseLeave:e=>{i(null)}},c.a.createElement(bt,{motif:O,onClick:()=>n(e),width:120+2*h,height:102,x:-60-h,y:-51,rx:6,isHovered:I,onMouseOver:()=>i(e.data.id)}),C&&I&&c.a.createElement("circle",{style:{cursor:"pointer"},cx:60+h,cy:0,r:10,onClick:t=>l(e.data.id,t)})))};const Ot=Object(C.c)("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .grab-cursor-wrapper {
    pointer-events: bounding-box;
    cursor: grab !important;

    &:active {
      cursor: grabbing !important;
    }
  }
  /* d3-zoom-scale is used in safari to correctly scale transformed nodes
    inside foreignObject */
  .${"topology-svg-container"} {
    --d3-zoom-scale: 1;
  }
`,It=[.3,1],gt=[.3,2.5],Rt=(e,t,a,n,r=gt)=>{const c=(e=>{const t=e.length-1;return"invisibleNodeType"===e[0].data.type||"invisibleNodeType"===e[t].data.type})(a)?n:0,l=a.reduce((e,t)=>("invisibleNodeType"===t.data.type||(e.minX=Math.min(e.minX,t.x),e.maxX=Math.max(e.maxX,t.x),e.minY=Math.min(e.minY,t.y),e.maxY=Math.max(e.maxY,t.y)),e),{minX:0,maxX:0,minY:0,maxY:0}),i=l.maxX-l.minX+50+45,o=l.maxY-l.minY+120-c,E=Object(me.a)().range(r).domain(r).clamp(!0);let s=Math.min(t/i,e/o);s=E(.8*s);return{x:(e-(l.maxY+c)*s)/2,y:Math.max(0,t/2-(l.minX+(i-50)/2)*s),k:s}},vt=e=>(Array.isArray(e)?e:[e]).map(e=>(e.id=e.mac,(null==e?void 0:e.children)&&e.children.length>0&&(e.children=vt(e.children),e.internalChildren=e.children),e)),Ct=(e,t)=>Object(ce.a)().scaleExtent([e.min,e.max]).on("zoom",t).filter(e=>!e.button&&"dblclick"!==e.type),ht=e=>{const t=e.attr("stroke");e.attr("stroke","rgba(0,0,0,0)"===t?"rgba(255,255,255,0)":"rgba(0,0,0,0)"),Object(le.a)("nav").style("stroke","rgba(0,0,0,0)"===t?"rgba(255,255,255,0)":"rgba(0,0,0,0)")},Tt=(e,t)=>{e.style("--d3-zoom-scale",t.toString())},ft=e=>({transition:`all ${e}ms cubic-bezier(0.25, 0, 0.25, 1)`,opacity:0,position:"absolute",left:"-50px"}),Dt={entered:{opacity:1,left:0}};var Pt=e=>{const{data:t,containerSize:a,nodeSize:i,transform:o,scaleExtent:s,labelWidth:m}=e,d=Object(r.useRef)(!0),_=Object(r.useRef)(!1),b=Object(n.useSelector)(u.N),{showAllDevices:p}=b,O=Object(r.useRef)(!1),I=Object(r.useRef)(o),g=Object(r.useRef)(),R=Object(n.useDispatch)(),v=Object(l.k)(),{site:C}=Object(l.m)(),{width:h,height:T}=a,{isSafari:D}=f.a,P=Object(r.useRef)(null),[y,S]=Object(r.useState)(new Set),[A,j]=Object(r.useState)(!1),[N,L]=Object(r.useState)(null),x=Object(r.useRef)(t);x.current=t,Object(r.useEffect)(()=>{p?(O.current=!0,S(new Set)):S(e=>{if(null==e?void 0:e.size)return e;const t=new Set;let a=0;return function e(n){var r,c;a>50||(a+=1,(null===(r=n.children)||void 0===r?void 0:r.length)&&("invisibleNodeMac"!==n.mac&&t.add(n.mac),null===(c=n.children)||void 0===c||c.forEach(e)))}(x.current),O.current=!0,t})},[p]),Object(r.useEffect)(()=>{O.current=!1},[y.size]),Object(r.useEffect)(()=>{O.current||(y.size?b.showAllDevices&&R(Object(u.T)(Object.assign({},b,{showAllDevices:!1}),!0)):b.showAllDevices||R(Object(u.T)(Object.assign({},b,{showAllDevices:!0}),!0)))},[R,b,y.size]);const V=vt(t),w=Object(r.useRef)(null),F=Object(r.useRef)(null);Object(r.useEffect)(()=>{((e,t,a,n)=>{const{scaleExtent:r,transform:c}=e;t.current=Object(ie.a)(".topology-svg-container");const l=Object(ie.a)(".topology-g"),i=Ct(r,({transform:e})=>{a&&(ht(t.current),Tt(t.current,e.k)),n.current=e,l.attr("transform",e.toString())});t.current.call(i).call(i.transform,ce.b.translate(c.x,c.y).scale(c.k))})(e,g,D,I)},[]);const M=t=>{const a=Rt(h,T,t,i.x),{scaleExtent:n}=e,r=Object(ie.a)(".topology-g"),c=Object(ie.a)(".topology-svg-container"),l=Ct(n,({transform:e})=>{r.attr("transform",e.toString()),I.current=e});c.transition().call(l.transform,ce.b.translate(a.x,a.y).scale(a.k)).on("end",()=>D&&ht(g.current)),D&&((e,t,a)=>{const n=""+a.current,r=""+t;e.current.transition("zoom-out").styleTween("--d3-zoom-scale",()=>Object(oe.a)(n,r)).call(()=>ht(e.current))})(g,a.k,I)},U=({source:t,target:a})=>{const{edgeData:n}=e;return n.find(e=>e.uplinkMac===t.data.mac&&e.downlinkMac===a.data.mac)},k=({mac:t})=>{var a;const{edgeData:n}=e;return null===(a=n.find(e=>e.downlinkMac===t))||void 0===a?void 0:a.experienceScore},z=(t,a)=>{const{transitionDuration:n}=e;if(a.persist(),!_.current){if(y.has(t)){const e=new Set(y);e.delete(t),_.current=!0,S(e)}else{const e=new Set(y);e.add(t),_.current=!0,S(e)}setTimeout(()=>{_.current=!1,D&&ht(g.current)},n+10)}},{nodes:B,links:W}=(()=>{const{separation:t,nodeSize:a}=e,n=Object(re.a)().nodeSize([a.y,a.x]).separation((e,a)=>{var n,r;return(null===(n=null==e?void 0:e.parent)||void 0===n?void 0:n.id)===(null===(r=null==a?void 0:a.parent)||void 0===r?void 0:r.id)?t.siblings:t.nonSiblings})(Object(K.b)(V[0],e=>e.id&&y.has(e.id)?null:e.internalChildren)),r=n.descendants();d.current||(F.current=[...w.current]),w.current=[...r];return{nodes:r,links:n.links().filter(e=>"invisibleNodeMac"!==e.source.data.mac)}})(),{transitionDuration:H}=e;Object(r.useEffect)(()=>{const e="invisibleNodeType"===B[0].data.type?1:0;R(Object(E.c)({visibleNodes:B.length-e}))},[B.length]),Object(r.useEffect)(()=>{D&&ht(g.current)}),Object(r.useEffect)(()=>{if(f.a.isSafari){const e=Object(ie.a)(".topology-g"),t=Object(ie.a)(".topology-svg-container"),a=Ct(s,({transform:t})=>{e.attr("transform",t.toString()),Tt(g.current,t.k),ht(g.current),I.current=t}),n=e=>{e.preventDefault();const n=e.scale-P.current;if(P.current&&Math.abs(n)>.085){const i=1+n,o=(r=I.current.k*i,c=s.min,l=s.max,Math.min(Math.max(r,c),l));t.call(a.scaleTo,o),P.current=e.scale}var r,c,l},r=e=>{e.preventDefault(),P.current=e.scale},c=e=>{e.preventDefault(),P.current=null};return document.addEventListener("gesturestart",r),document.addEventListener("gesturechange",n),document.addEventListener("gestureend",c),()=>{document.removeEventListener("gesturestart",r),document.removeEventListener("gesturechange",n),document.removeEventListener("gestureend",c)}}return()=>{}},[]);const G=Object(r.useCallback)(e=>{const{data:t}=e,{type:a}=t,n=(e=>{const{mac:t,internalChildren:a,model:n}=e;if("UBB"!==n&&"UBBXG"!==n)return t;if(a){const e=a.find(e=>"UBB"===e.model);if(e)return e.mac}return t})(t),r=a===Z.UnifiControllerType.CLIENT;v.push(Object(l.i)("/:site/topology/map/:section?/:id?/:panel?/:subPanel?",{id:n,section:"properties",site:C,panel:"overview"})),R(Object(de.g)({type:r?Q.b.CLIENT:Q.b.DEVICE,mac:n}))},[R,v,C]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ee.a,{in:!0,appear:!0,timeout:0,addEndListener:()=>j(!0)},e=>c.a.createElement(Ot,{style:{...ft(H),...Dt[e]}},c.a.createElement("svg",{className:"topology-svg-container",width:h+"px",height:T+"px",strokeWidth:0,style:{position:"absolute"}},c.a.createElement("rect",{x:0,y:0,width:"100%",height:"100%",fill:"transparent"}),c.a.createElement("g",{className:"topology-g",strokeWidth:0},c.a.createElement(se.a,{appear:!0,exit:!0,component:null},B.reverse().map(e=>c.a.createElement(pt,{key:e.data.id+"-background",labelWidth:m,transitionDuration:A?H:0,handleNodeClick:G,nodeData:e,handleChildrenToggle:z,hoveredNode:N,setHoveredNode:L}))),c.a.createElement(se.a,{appear:!0,exit:!0,component:null},W.map(e=>c.a.createElement(mt,{key:`${e.source.data.id}-${e.target.data.id}`,nextNodeListRef:w,prevNodeListRef:F,linkData:e,networkData:U(e),transitionDuration:A?H:0,labelWidth:m,hoveredNode:N}))),c.a.createElement(se.a,{appear:!0,exit:!0,component:null},B.map(e=>c.a.createElement(Fe,{key:e.data.id,transitionDuration:A?H:0,experienceScore:k(e.data),nodeData:e,labelWidth:m,handleChildrenToggle:z,handleNodeClick:G,collapsedNodes:y,hoveredNode:N,setHoveredNode:L}))))))),c.a.createElement(_t,{onResetZoomClick:()=>M(B)}))};const yt={siblings:1.5,nonSiblings:2},St=Object(C.c)("div")`
  width: 100%;
  height: 100%;
  position: relative;

  @media ${h.b.VIEWPORT_S_UP} {
    margin-top: ${f.a.isSafari?"50px":0};
  }
`,At=e=>{const t=e>0;return 60+(t?32:16)+(t?100:75)+e+(t?16:0)+60},jt=e=>101+400/Math.max(Math.min(e,5),1),Nt=({topologyData:e,topologyViewSettings:t,width:a,height:l,labelWidth:i})=>{const{show2GClients:o,show5GClients:E,showWiredClients:s,online:m=!0,offline:d=!0,isolated:_=!0,pending_adoption:u=!0,managed_by_another_console:b=!0}=t,p=(e=>{const{showSSID:t,showWifiStandards:a,showWiredSpeed:n,showWiredPorts:r}=e;return t||a||n||r})(t),O=p?i:0,I=Object(n.useSelector)(Z.selectIsUnifiDevicesPageSupportedController),g=Object(r.useMemo)(()=>(({edges:e,vertices:t})=>{const a=[],n=t.map(t=>({...t,parentMac:te(t.mac,e)})).filter(e=>void 0!==e),r=n.reduce((e,t)=>(e[t.mac]=t,e),{});return n.forEach(e=>{const t=r[e.parentMac];t?(t.children||(t.children=[])).push(e):a.push(e)}),a.length>1||0===a.length?ae(a):a[0]})(ne(e,o,E,I,s,m,d,_,u,b)),[e,o,E,I,s,m,d,_,u,b]),[R,v]=Object(r.useState)(()=>{const e=Object(K.b)(g),t="invisibleNodeType"===e.data.type?e.height-1:e.height,n=Math.max(jt(t),At(O));var r,c;const i=(r={x:n,y:75},c=yt,Object(re.a)().nodeSize([r.y,r.x]).separation((e,t)=>{var a,n;return(null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a.id)===(null===(n=null==t?void 0:t.parent)||void 0===n?void 0:n.id)?c.siblings:c.nonSiblings}))(e).descendants();return{nodeWidth:n,nodeHeight:75,rootHeight:t,transform:Rt(a,l,i,n,It)}}),{nodeWidth:C,nodeHeight:h,transform:T}=R;return Object(r.useEffect)(()=>{const e={...R},t=Object(K.b)(g),a="invisibleNodeType"===t.data.type?t.height-1:t.height;e.nodeWidth=Math.max(jt(a),At(O)),v(e)},[p,O]),c.a.createElement(Pt,{scaleExtent:{min:.3,max:2.5},data:g,labelWidth:O,edgeData:e.edges,separation:yt,containerSize:{width:a,height:l},transitionDuration:400,transform:T,nodeSize:{x:C,y:h}})},Lt=Object(C.c)("div")`
  // Important to fixing caliper sizing. If nodes are only 1 level deep (no children) then the width
  // would be 0px as there are no labels. This fixes this issue without introducing any other ones.
  min-width: 1px;
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  top: -10000px;
  left: -10000px;
  visibility: hidden;
  user-select: none;
  z-index: -1000;
`,xt=c.a.forwardRef((e,t)=>{const{topologyData:a}=e;return c.a.createElement(Lt,{innerRef:t},a.edges.map(e=>c.a.createElement(r.Fragment,{key:`${e.uplinkMac}-${e.downlinkMac}`},(e=>{const{type:t,rateMbps:a}=e;return t===ee.a.WIRELESS?c.a.createElement($e,{networkData:e,measuring:!0}):t===ee.a.WIRED&&a?c.a.createElement(tt,{rateMbps:a,measuring:!0}):null})(e),(e=>{const{uplinkPortNumber:t,downlinkPortNumber:a,type:n,essid:r}=e;return n===ee.a.WIRELESS&&r?c.a.createElement(Xe,{essid:r,measuring:!0}):t&&a?c.a.createElement(c.a.Fragment,null,c.a.createElement(Qe,{uplinkPortNumber:t,downlinkPortNumber:a,measuring:!0})):t?c.a.createElement(Ze,{uplinkPortNumber:t,measuring:!0}):a?c.a.createElement(Je,{downlinkPortNumber:a,measuring:!0}):null})(e))))}),Vt=()=>c.a.createElement(X.a,null,c.a.createElement("style",null,'\n        #root > header {\n          position: fixed;\n          top: 0;\n        }\n        #root > main {\n          margin-top: 50px;\n        }\n        #root #app-main nav[class^="nav"] {\n          position: fixed;\n          top: 50px;\n          left: 0;\n          z-index: 12;\n        }\n        #root #app-main > div > .main-panel {\n          margin-left: 50px;\n        }\n    ')),wt={updateTopologyViewSettings:u.T};var Ft=Object(n.connect)(e=>({topologyData:Object(q.c)(e),topologyViewSettings:Object(u.N)(e),unifiDevicesSupported:Object(Z.selectIsUnifiDevicesPageSupportedController)(e)}),wt)(e=>{const{topologyData:t,unifiDevicesSupported:a}=e,l=Object(r.useRef)(null),{width:i,height:E}=Object(o.k)(l),s=Object(r.useRef)(null),m=Object(o.k)(s),d=Object(n.useSelector)(q.a);return c.a.createElement(c.a.Fragment,null,f.a.isSafari&&c.a.createElement(Vt,null),c.a.createElement(xt,{topologyData:t,ref:s}),c.a.createElement(St,{innerRef:l},l&&i&&E&&m.width&&c.a.createElement(Nt,Object.assign({width:i,height:E,labelWidth:m.width},e))),c.a.createElement(_.a,{path:"/:site/topology/map/:section?/:id?/:panel?/:subPanel?",render:({match:e})=>{var t;const n=null===(t=e.params)||void 0===t?void 0:t.id,r=d.indexOf(n)>-1?Q.b.DEVICE:Q.b.CLIENT;return a?c.a.createElement(J.a,{panelType:Q.b.UNIFI_DEVICE}):c.a.createElement(J.a,{panelType:r})}}))}),Mt=[{id:"topology",label:c.a.createElement(v.c,{id:"TOPOLOGY_SECTION_TOPOLOGY"}),path:"/:site/topology/map",component:c.a.createElement(Ft,null)},{id:"floorplan",label:c.a.createElement(v.c,{id:"TOPOLOGY_SECTION_FLOORPLAN"}),path:"/:site/topology/floorplan",component:c.a.createElement($,null)}],Ut=a(753),kt=a(97),zt=a(153);const Bt=({match:e})=>{const{path:t}=e,a=Object(n.useSelector)(kt.a),o=Object(l.i)(t,{site:a})+"/map",E=Object(n.useDispatch)();return Object(r.useEffect)(()=>()=>{E(Object(u.j)()),E(Object(Ut.d)())},[E]),c.a.createElement(i.j,null,c.a.createElement(N,{routes:Mt}),c.a.createElement(l.g,null,Object.values(Mt).map(({id:e,path:t,component:a})=>c.a.createElement(_.a,{key:e,path:t,render:()=>a})),c.a.createElement(_.a,{path:t,exact:!0},c.a.createElement(l.c,{to:o}))))};t.default=e=>Object(o.f)([Object(E.b)(),...e.location.pathname.includes("/properties")?[Object(b.fetchDevices)(void 0,{crudCacheStrategy:{type:s.a.CACHE}})]:[],Object(m.fetchClients)(void 0,{crudCacheStrategy:{type:s.a.CACHE}}),Object(zt.c)(void 0,{crudCacheStrategy:{type:s.a.CACHE}}),Object(d.c)("topology"),Object(d.c)("devices"),Object(d.c)("unifiDevices"),Object(d.c)("clients"),Object(Ut.c)()],c.a.createElement(Bt,Object.assign({},e)),{trackingName:"topology"})}}]);