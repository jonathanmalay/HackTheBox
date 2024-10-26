(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[5],{1926:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return I.a})),a.d(t,"a",(function(){return F}));var n=a(0),c=a.n(n),r=a(5),l=a(648),i=a(1136),o=a(208);const E=Object(r.c)(o.a)`
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
`,d=e=>c.a.createElement(s,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),_=e=>c.a.createElement(E,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1851),p=a(375);const b=Object(r.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,O=e=>r.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(p.b)(({theme:e,...t})=>c.a.createElement(b,Object.assign({headerRowClassName:O(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var I=a(1934),g=a(529),h=a(1743),C=a(2),R=a(30),v=a(15),f=a(2846),T=a(44),D=a(71),y=a(62);const P=Object(r.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,S=Object(r.c)(D.c)`
  > * {
    vertical-align: middle;
  }
`,A=Object(r.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,j=Object(r.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,N=Object(r.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,x=Object(r.c)(D.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,L=Object(r.c)(A,{shouldForwardProp:e=>"isLast"!==e})`
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
`;var F=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:r,onRemoveItem:l,validationSchema:i,initialValues:o,onEditSubmit:E,useValuesInSchema:s=!1,max:d,useWindowTable:_=!1,addButtonText:p="COMMON_ACTION_ADD",invalid:b,...O}){const I=Object(n.useContext)(D.l),[F,U]=Object(n.useState)(!0),B=Object(n.useCallback)(t=>!t.disableRemove&&c.a.createElement(m,null,c.a.createElement(S,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),l(t),await Promise.resolve(),U(!0)}},c.a.createElement(C.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,l]),z=Object(n.useMemo)(()=>_?f.a:u.a,[_]);return c.a.createElement(T.c,{enableReinitialize:!0,onSubmit:t=>{E(t[e])},initialValues:o,validationSchema:()=>s?R.a.lazy(e=>i(e)):i},({values:n,errors:i,setFieldValue:E,handleSubmit:s,handleReset:m,setTouched:_})=>c.a.createElement(c.a.Fragment,null,t.map((a,l)=>c.a.createElement(P,{inline:a.inline,isLast:l===t.length-1,key:a.name},c.a.createElement(A,{flexDirection:"column",width:"100%"},c.a.createElement(y.Field,Object.assign({disabled:n.editActive||n[e].length>=d,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label,invalid:n[a.name]?i[a.name]:b,fast:!0},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!I&&r&&l===t.length-1&&c.a.createElement(j,null,c.a.createElement(S,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),c=await _(a,!0);t.find(e=>c[e.name])||r(n),U(!0)},Icon:v.wb,disabled:n.editActive||n[e].length>=d||!n[a.name]},c.a.createElement(C.c,{id:p}))))),n.editActive?c.a.createElement(c.a.Fragment,null,n[e].map((n,r)=>c.a.createElement(x,{key:n.id,width:"100%"},O.columns.map((n,l)=>t[l]?c.a.createElement(L,{key:n.id,isLast:l===O.columns.length-1,flexDirection:"column",flex:"1 1 50%"},c.a.createElement(y.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${r}][${n.id}]`,type:t[l].type,fast:!0},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),c.a.createElement(V,{justifyContent:"flex-end",width:"100%"},c.a.createElement(w,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),E("editActive",!1)}},c.a.createElement(C.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(D.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:s,disabled:Object(g.a)(Object(h.a)(n,"editActive"),Object(h.a)(o,"editActive"))},c.a.createElement(C.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&c.a.createElement(P,null,c.a.createElement(N,null,c.a.createElement(S,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),E("editActive",!0)},Icon:v.ub},c.a.createElement(C.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&F&&c.a.createElement(M,null,c.a.createElement(z,{columns:O.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:l?B:void 0})))))}},1929:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(2),i=a(1946),o=a.n(i),E=a(1741),s=a(520),m=a(521);const d=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const i=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),_=Object(m.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),p=Object(n.useCallback)(e=>(e={},t={})=>_(e,t)&&u(e,t),[_,u]);return!!e&&c.a.createElement(o.a,{when:p(t)},({onCancel:e,onConfirm:t})=>c.a.createElement(E.a,{actions:[{type:"button",text:c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:i,parentSelector:s.b,title:c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},c.a.createElement(d,null,c.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1931:function(e,t,a){"use strict";a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return T})),a.d(t,"c",(function(){return D}));var n=a(0),c=a.n(n),r=a(5),l=a(643),i=a(32),o=a(1932),E=a(8),s=a(15),m=a(45),d=a(17),_=a(189),u=a(41);const p=Object(r.c)(_.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var b=({video:e})=>{const t=Object(E.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return c.a.createElement(p,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},c.a.createElement(s.vb,{color:m.a["blue-3"]}))},O=a(1933),I=a(71),g=a(227);const h=Object(r.c)(I.c)`
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
`,C=Object(r.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,R=Object(r.c)(s.vb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var v,f=({video:e})=>{const t=Object(E.useDispatch)(),a=Object(E.useSelector)(g.a),r=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(d.g)({modalType:u.a[a],modalProps:{closeModal:()=>t(Object(d.e)())}}))},[t,e]);return c.a.createElement(h,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:r},c.a.createElement(C,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),c.a.createElement(R,{color:m.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(v||(v={}));const T=Object(r.c)(I.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,D=Object(r.c)(I.g)`
  * {
    line-height: 1.4 !important;
  }
`,y=Object(r.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:r,video:l,online:E})=>{let s;switch(t){default:case v.BASIC:s=e;break;case v.CONFIGURED:s=c.a.createElement(D,{alignItems:"center"},e,!!n&&c.a.createElement(o.a,{section:n}),!!l&&E&&c.a.createElement(b,{video:l}));break;case v.STATUS:s=c.a.createElement(D,{alignItems:"center"},c.a.createElement(y,{variant:r}),c.a.createElement(T,{flex:"1",flexDirection:"column"},e,a&&c.a.createElement(i.a,null,a)));break;case v.UNCONFIGURED:s=c.a.createElement(D,{alignItems:"center"},!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{section:n}),c.a.createElement(I.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(i.a,null,a))),!!l&&E&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{video:l}),c.a.createElement(I.g,{flex:"0 1 128px",flexDirection:"column"},e,c.a.createElement(i.a,null,a))),!!l&&!E&&c.a.createElement(D,{alignItems:"center"},e))}return s}},1932:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(8),i=a(15),o=a(45),E=a(1936),s=a(189);const m=Object(r.c)(s.c)`
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
`;var E=({children:e,...t})=>c.a.createElement(o,Object.assign({alignItems:"center"},t),e,c.a.createElement(l.g,null)),s=a(1931)},1936:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(17),c=a(41);const r=e=>Object(n.g)({modalType:c.a.ONBOARDING_ANIMATION,modalProps:{name:e}})},1937:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return q})),a.d(t,"d",(function(){return J.a})),a.d(t,"f",(function(){return J.c})),a.d(t,"h",(function(){return J.e})),a.d(t,"g",(function(){return J.d})),a.d(t,"i",(function(){return te}));var n=a(1935);a(1932),a(1933);var c=a(0),r=a.n(c),l=a(5);var i=({children:e="",className:t=null,full:a=!1,offset:n=1,size:c=6,...i})=>{const o=a?12:c,E=a?0:n;return r.a.createElement("div",Object.assign({className:Object(l.b)("col-"+o,"offset-"+E,t)},i),e)};var o,E=({children:e="",offset:t=0,size:a=2})=>r.a.createElement("div",{className:Object(l.b)("col-"+a,"offset-"+t)},e),s=a(2),m=a(666),d=a.n(m),_=a(71),u=a(1964),p=a.n(u),b=a(140),O=a.n(b),I=a(111);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(o||(o={}));const g=O.a.bind(p.a);var h=({className:e=null,status:t=o.NEUTRAL,...a})=>r.a.createElement(I.a,Object.assign({},a,{className:g("ubntStatusText","ubntStatusText--"+t,e)})),C=a(254),R=a(1944);const v=Object(l.c)(_.g)`
  border: 1px solid ${C.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,f=Object(l.c)(h)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var T=({state:e,className:t=null,...a})=>r.a.createElement(v,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),r.a.createElement(f,{message:R.b[e],status:o.WARNING})),D=a(322),y=a(82),P=a(8),S=a(45),A=a(70),j=a(20);const N={BORDER_WIDTH:2},x={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},L=({type:e,size:t,width:a,height:n})=>{switch(e){case D.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:c,TOP:r}=x;return{top:r,left:e,padding:`${n}px ${c}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function V({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:r,width:i,height:o}){const E=Object(P.useSelector)(D.selectHighlight),[s,m]=Object(A.c)(0),[d,_]=Object(A.c)(!1),u=Object(c.useRef)(null),p=Object(c.useMemo)(()=>(({color:e,show:t,style:a})=>Object(l.a)({"&::before":{border:`${N.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:S.a["blue-light-3"],show:d,style:{...L({type:e,size:r,width:i,height:o}),...a}}),[d,e,a,r,i,o]);return Object(c.useEffect)(()=>{if(Number.isFinite(n)&&n>s)m(s+1);else if(u.current&&t===E.id&&E.type===e){window.getComputedStyle(u.current).border,window.getComputedStyle(u.current).boxShadow;let t=u.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:c,top:r}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:c,top:r}=t.current.getBoundingClientRect();switch(a){case D.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=x,l=r+Object(j.a)(n,"top",a),i=l+c+Object(j.a)(n,"paddingBottom",e)+Object(j.a)(n,"paddingTop",t)+2*N.BORDER_WIDTH;return{bottom:i,height:i-l,top:l}}}})({height:o,highlightRef:u,type:e,highlightStyle:a}),{bottom:l,height:i,top:E}=n.getBoundingClientRect(),s=t>l,m=c>i,d=15;r<E||m?n.scrollTo({behavior:"smooth",top:n.scrollTop-E+r-d}):s&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-l+d})}_(!0)}},[o,s]),Object(c.useEffect)(()=>{d||E.id!==t||m(e=>e+1),d&&E.id!==t&&_(!1)},[E.id,d]),{highlightClassName:p,highlightRef:u}}const w=Object(l.c)(d.a)`
  color: ${y.a} !important;
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
`;var U=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:c={},dontTranslateText:i=!1,highlightDelay:o=null,highlightStyle:E=null,htmlFor:m=null,offset:d=0,size:_=5,useHtml:u=!1})=>{const{highlightClassName:p,highlightRef:b}=V({type:D.SearchHighlightType.FIELD,forId:m,highlightStyle:E,highlightDelay:o,size:_}),O=!(!n&&!a),I={["col-"+_]:!0,["offset-"+d]:d>0},g=u?s.b:s.c;return r.a.createElement("div",{className:Object(l.b)(I,F,p),ref:b},r.a.createElement("div",{className:"mb-1"},r.a.createElement(M,{className:"settingsGridLabel",htmlFor:m,primary:!0},i?e:r.a.createElement(s.c,{id:e})),t&&r.a.createElement(T,{state:t})),O&&r.a.createElement("div",null,r.a.createElement(w,{className:"settingsGridDescription",htmlFor:m,secondary:!0},n?r.a.createElement(g,{id:n,values:c}):a)))};const B=l.a`
  max-width: 960px;
`,z=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:c=8,noWidthLimit:i=!1})=>{const o=n?4:c;return r.a.createElement("div",{className:Object(l.b)("row","mt-"+o,i?null:B,t),ref:a},e)};var k=r.a.forwardRef((e,t)=>r.a.createElement(z,Object.assign({forwardedRef:t},e)));var W=e=>r.a.createElement("div",{className:"mt-2 mb-6"},r.a.createElement(I.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(l.c)("div")`
  flex: 0 1 480px;
`,$=Object(l.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var G=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:c=null,section:i=null})=>{const o=C.b.sectionColors.common;return r.a.createElement(k,{className:t,marginTop:0},r.a.createElement(H,null,r.a.createElement($,{className:Object(l.b)("mt-8","type-larger"),style:{color:o}},r.a.createElement(s.c,{id:e})),a&&r.a.createElement(I.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const Y=Object(l.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,X=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>r.a.createElement(Y,{className:Object(l.b)("container","px-8",t),noDivider:n},r.a.createElement("div",{className:Object(l.b)({"pb-8":!a})},e));X.Content=i,X.Icon=E,X.Label=U,X.Row=k,X.SectionHeader=W,X.Subheader=G;var K=a(284);const Z=Object(l.c)(K.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var q=e=>r.a.createElement(Z,Object.assign({},e)),J=a(1926),Q=a(168),ee=a(21);const te=({lastQuery:e=0})=>{const t=Object(P.useSelector)(Q.C);return e>0?r.a.createElement(ee.a,{alignItems:"center"},r.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",r.a.createElement(s.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):r.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1929)},1944:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return c})),function(e){e.alpha="ALPHA",e.beta="UNIFI_LABS",e.comingSoon="COMING_SOON"}(n||(n={}));const c={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_UNIFI_LABS",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},1948:function(e,t,a){"use strict";var n=a(1966);a.d(t,"fetchSession",(function(){return n.a}));var c=a(1970);a.d(t,"MODEL",(function(){return c.b}));var r=a(1954);a.d(t,"selectFormattedSessionData",(function(){return r.a}));a(2007)},1950:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return E})),a.d(t,"b",(function(){return s}));var n=a(107),c=a(231),r=a(119),l=a(2028);const i={[l.b.EXPERIENCE]:Object.values(l.a)},o=Object(c.b)(n.a.WIFI_MAN,r.a.WIFI_MAN,i),E=Object(c.c)(n.a.WIFI_MAN),s=Object(c.a)(n.a.WIFI_MAN)},1953:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1954:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return u}));var n=a(1179),c=a(4),r=a(18),l=a(1966),i=a(50),o=a(664),E=a(95),s=a(83),m=a(1948),d=a(526);const _=(e,t,a=[])=>Object(c.a)(Object(l.b)(e,t),r.Q,i.selectLocaleSettings,s.c,r.M,(e,t,n,c,r)=>{const{data:l,...i}=e,s=Object(E.d)(t,n,c);return{...i,data:l.map(({assoc_time:e,duration:t,_id:n,mac:c,satisfaction:l,hostname:i=""})=>({id:n,date:Object(E.e)(1e3*e,s,d.a),start:Object(E.e)(1e3*e,s,r),duration:Object(o.c)(t,!0),experience:l,mac:c,hostname:i,client:a.find(e=>"mac"in e&&e.mac===c)}))}}),u=e=>Object(c.a)(t=>{var a,n,c,r;return null===(r=null===(c=null===(n=null===(a=t.models)||void 0===a?void 0:a[m.MODEL])||void 0===n?void 0:n.byId)||void 0===c?void 0:c[e])||void 0===r?void 0:r.record},r.Q,i.selectLocaleSettings,s.c,r.M,(e,t,a,c,r)=>{if(!Object(n.a)(e)){const n=Object(E.d)(t,a,c),{assoc_time:l,duration:i,sw_port:s,mac:m,ip:_,satisfaction:u,hostname:p="",is_wired:b,name:O,_id:I}=e;return{id:I,date:l?Object(E.e)(1e3*l,n,d.a):"",duration:i?Object(o.c)(i,!0):"",start:l?Object(E.e)(1e3*l-1e3*i,n,r):"",end:l?Object(E.e)(1e3*l-i,n,r):"",mac:m,ip:_,port:s,experience:u,hostname:p,is_wired:b,name:O}}return e})},1955:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));const n="stadpi",c="stadpi",r="/api/s/{site}/stat/stadpi",l="by_app",i=8},1957:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(9),c=a(6),r=a(120),l=a(1959);const i=()=>Object(c.t)(l.c,l.d,l.e),o=e=>t=>t(Object(c.b)(n.API_CALL,l.f.DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS,l.f.DISMISS_UNIFI_CARE_ACTIVATION_ERROR,l.a,Object(r.c)(l.b,{mac:e})))},1959:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return o}));const n="unifiCare",c="/v2/api/unifi-care/details",r="unifiCare",l="/v2/api/unifi-care/device/{mac}/dismiss-activation-notice",i="put",o={DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS:"ace/DISMISS_UNIFI_CARE_ACTIVATION_SUCCESS",DISMISS_UNIFI_CARE_ACTIVATION_ERROR:"ace/DISMISS_UNIFI_CARE_ACTIVATION_ERROR"};var E;!function(e){e.ASSIGNED="ASSIGNED",e.AVAILABLE="AVAILABLE",e.NOT_AVAILABLE="NOT_AVAILABLE",e.RMA_IN_PROGRESS="RMA_IN_PROGRESS",e.REPLACING="REPLACING",e.REVOKED="REVOKED"}(E||(E={}))},1965:function(e,t,a){"use strict";var n=a(1953);const c=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=c},1966:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(6),c=a(1970);const r={method:"post",fetchConfig:{getAllPostData:!0},idField:c.a},l=(e,t)=>Object(n.q)(c.b,c.c,((e,t)=>({data:{[t?"ap_mac":"mac"]:e,_limit:t?20:5,_sort:"-assoc_time"}}))(e,t),r),i=(e,t)=>Object(n.A)(l(e,t))},1967:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(6),c=a(1955);const r=(e,t)=>Object(n.t)(c.c,c.d,c.e,e,{...t,idField:"mac"}),l=(e,t)=>Object(n.A)(r(e,t))},1968:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a(78);const c=n.dpi.ruleMap,r=(e,t)=>+t+(+e<<16),l=e=>{const t=(a=e,c.applications[a]);var a;return t?t.name:void 0}},1969:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(6),c=a(1971);const r=(e,t)=>Object(n.t)(c.a,c.b,c.c,e,t)},1970:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));const n="session",c="/api/s/{site}/stat/session",r="_id"},1971:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r}));const n="unifi-core/general-info",c="/v2/api/"+n,r="ucoreGeneralInfo"},1974:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return E})),a.d(t,"a",(function(){return s}));var n=a(4),c=a(1180),r=a(2027),l=a(1950);const i=e=>({date:new Date(1e3*e.report_timestamp),...e}),o=Object(n.a)(c.f,e=>e.map(e=>i(e))),E=Object(n.a)(c.f,l.d,l.b,(e,t,a)=>e.map(e=>i(e)).filter(e=>Object(r.c)(e,t)&&Object(r.a)(e,a))),s=Object(n.a)(E,l.c,(e,t)=>e.filter(e=>Object(r.b)(e,t)))},1975:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"f",(function(){return _})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"a",(function(){return b}));var n=a(23),c=a(1916),r=a(95);const l=(e,t)=>Object(r.h)(Object(n.startOfMonth)(Object(n.addMonths)(e,1)),t),i=(e,t)=>Object(n.differenceInMinutes)(e,t)/5,o=(e,t)=>Object(n.subMinutes)(e,5*t),E=(e,t)=>new Date(e-1e3*t*60*60*24);function s(e,t,a,c,s=!1){function m(t,n,c,l){const i=Math.ceil(n(t,e))||0,o=i>8,E=i>32?i/32:1;return Array(Math.min(32,i)+1).fill(t).map((e,t)=>{const n=c(e,t*E);return{value:n.getTime(),label:o&&t%2==1?null:Object(r.e)(n,a,l)}}).reverse()}if(Object(n.differenceInYears)(t,e)>1)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM YYYY");if(Object(n.differenceInMonths)(t,e)>2)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM");if(Object(n.differenceInDays)(t,e)>10){const e=Date.now(),a=t.getTime()>e,l=Object(r.h)(new Date,"UTC"),i=c>l.getTime()?new Date(c):l;return m(a?i:t,n.differenceInDays,E,"MMM D")}if(Object(n.differenceInDays)(t,e)>2){const e=m(t,n.differenceInDays,n.subDays,"ddd"),l=Date.now(),i=t.getTime()>l,o=Object(r.h)(new Date,a);return i&&c>o.getTime()&&(e[e.length-1]={value:c,label:null}),e}return Object(n.differenceInHours)(t,e)>1?m(t,n.differenceInHours,n.subHours,s?"H:mm":"hA"):m(t,i,o,"h:mma")}function m(e,t){function a(a,c,r,l,i=null){const o=a(t,e)||0,E=o>8;return Array(o+1).fill(e).map((t,a)=>{const o=r(c(e),a);return{value:o.getTime(),label:E&&a%2==1?null:Object(n.format)(o,l),tooltipLabel:Object(n.format)(o,i||l)}})}return Object(n.differenceInYears)(t,e)>1?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM YYYY"):Object(n.differenceInMonths)(t,e)>2?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM"):Object(n.differenceInDays)(t,e)>10?a(n.differenceInDays,n.startOfDay,n.addDays,"MMM D"):Object(n.differenceInDays)(t,e)>2?a(n.differenceInDays,n.startOfDay,n.addDays,"ddd","ddd ha"):Object(n.differenceInHours)(t,e)>1?a(n.differenceInHours,n.startOfHour,n.addHours,"ha","ddd ha"):a(n.differenceInMinutes,n.startOfMinute,n.addMinutes,"h:ma","ddd h:ma")}function d(e,t){return[{label:Object(n.format)(e,t),value:e},{label:Object(n.format)(Object(n.subHours)(e,4),t),value:Object(n.subHours)(e,4).getTime()},{label:Object(n.format)(Object(n.subHours)(e,8),t),value:Object(n.subHours)(e,8).getTime()},{label:Object(n.format)(Object(n.subHours)(e,12),t),value:Object(n.subHours)(e,12).getTime()},{label:Object(n.format)(Object(n.subHours)(e,16),t),value:Object(n.subHours)(e,16).getTime()},{label:Object(n.format)(Object(n.subHours)(e,20),t),value:Object(n.subHours)(e,20).getTime()},{label:Object(n.format)(Object(n.subHours)(e,24),t),value:Object(n.subHours)(e,24).getTime()}].reverse()}const _=(e,t,a,l=!1)=>{const i=l?"H:mm":"h:mm A",o=Object(n.startOfHour)(Object(n.addMinutes)(t,55));return Object(c.a)(25,t=>{const c=Object(n.subHours)(o,t).getTime(),l=0===t?e.formatMessage({id:"COMMON_GRANUALITY_0"}):Object(r.e)(c,a,i);return{label:t%6==0?l:null,value:c}}).reverse()};function u(e,t,a){const n=(c=10,r=t-e,Math.log(r)/Math.log(c)-1);var c,r;const l=n>0?Math.ceil(n):Math.floor(n),i=10**l,o=Math.ceil((t-e)/i)/(a-2)*i,E=Math.abs(l),s=[];let m=Math.round(e/i)*i;for(;m<t+2*o;m+=o)s.push({label:0===m?"0":m.toFixed(E),value:m});return s.reverse()}const p=(e,t)=>{const a=t-1;let n=Math.ceil(e);for(;n%a!=0;)n+=1;return Object(c.a)(t,e=>{const t=e?Math.ceil(e*(n/a)):0;return{value:t,label:String(t)}}).reverse()},b=(e,t)=>{let a=e;return t?a=a.replace(/a/i,""):(a=a.replace(/H/g,"h"),a.search(/a/i)<0&&(a+="A")),a}},1977:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(20),c=a(6),r=a(1957);const l=e=>Object(n.a)(Object(c.w)(Object(r.b)(),e.models),"data",{})},1978:function(e,t){},1979:function(e,t,a){e.exports=a.p+"../images/68474b3a657df0b79a1f16133608d618.png"},1980:function(e,t,a){e.exports=a.p+"../images/896960882c109433fd89c09486cfc0f1.png"},1981:function(e,t,a){e.exports=a.p+"../images/2c4f3fd05336814130381a3d418c09b1.png"},1982:function(e,t,a){e.exports=a.p+"../images/30b24022172c6e6e15a3cba5362dbf48.png"},1983:function(e,t,a){e.exports=a.p+"../images/a734bb2cc7227f8e672f96c5872fa130.png"},1984:function(e,t,a){e.exports=a.p+"../images/9de03fd81c53f0d6822343e944c92506.png"},1985:function(e,t,a){e.exports=a.p+"../images/8bfcf783c2c0196ebf98a4f9930a0442.png"},1986:function(e,t,a){e.exports=a.p+"../images/fadc4a0034a315cfb4dd7dfca8a96318.png"},1987:function(e,t,a){e.exports=a.p+"../images/e0332772cd670b1461694ff8679b12c2.png"},1988:function(e,t,a){e.exports=a.p+"../images/23aea509bb7becccdc6dc0f850b52664.png"},1989:function(e,t,a){e.exports=a.p+"../images/4da3dfc26db7d59e5992d3a6bac6e7e9.png"},1990:function(e,t,a){e.exports=a.p+"../images/972b5094e11b72a39eb452c4befe5f33.png"},1991:function(e,t,a){e.exports=a.p+"../images/7c8e7de4df9b6f9befbe12c06d96f235.png"},1992:function(e,t,a){e.exports=a.p+"../images/3037401c66da62835ac1f8426e2cf96e.png"},1993:function(e,t,a){e.exports=a.p+"../images/fa9239e9a4c4beb976c56ebed7fecf41.png"},1994:function(e,t,a){e.exports=a.p+"../images/6810e72bb1f9e902d4953f82e4c08d75.png"},1995:function(e,t,a){e.exports=a.p+"../images/bc53f8af0c6fcc5d7d0ac12c037dd1d4.png"},1996:function(e,t,a){e.exports=a.p+"../images/dccf50fa26da2841db8b004b420002c7.png"},1997:function(e,t,a){e.exports=a.p+"../images/fd7b28d3b6aabfc3497989564a4bf2d8.png"},1998:function(e,t,a){"use strict";var n=a(1957);a.d(t,"dismissUnifiCareActivation",(function(){return n.a})),a.d(t,"fetchUnifiCareDetails",(function(){return n.b}));a(1959);var c=a(1977);a.d(t,"selectUnifiCareDetails",(function(){return c.a}));a(1978)},2001:function(e,t,a){"use strict";a.d(t,"d",(function(){return c.a})),a.d(t,"e",(function(){return l.a})),a.d(t,"f",(function(){return o.a})),a.d(t,"g",(function(){return s.a})),a.d(t,"o",(function(){return d.a})),a.d(t,"p",(function(){return u.a})),a.d(t,"c",(function(){return b.a})),a.d(t,"b",(function(){return I.a})),a.d(t,"j",(function(){return h.a})),a.d(t,"a",(function(){return v})),a.d(t,"i",(function(){return T.a})),a.d(t,"l",(function(){return y.a})),a.d(t,"k",(function(){return S.a})),a.d(t,"m",(function(){return j.a})),a.d(t,"n",(function(){return x.a})),a.d(t,"h",(function(){return V.a}));a(1979),a(1980);var n=a(1981),c=a.n(n),r=a(1982),l=a.n(r),i=a(1983),o=a.n(i),E=a(1984),s=a.n(E),m=a(1985),d=a.n(m),_=a(1986),u=a.n(_),p=a(1987),b=a.n(p),O=a(1988),I=a.n(O),g=a(1989),h=a.n(g),C=a(0),R=a.n(C),v=({fill:e})=>R.a.createElement("svg",{width:"35",height:"21",viewBox:"0 0 35 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.1501 4.93596C16.7567 5.53369 16.4494 6.16878 16.2281 6.84123C16.0068 7.51368 15.847 8.12386 15.7487 8.67178H13.9047C14.003 8.02424 14.1751 7.26462 14.421 6.39293C14.6669 5.52124 15.1094 4.662 15.7487 3.81521C16.4863 2.71937 17.5804 1.79787 19.031 1.0507C20.4816 0.303536 22.3379 -0.0451415 24.5999 0.00466984L24.2311 1.87258C22.2641 1.87258 20.7521 2.17145 19.6948 2.76918C18.6376 3.36691 17.7894 4.08917 17.1501 4.93596ZM16.2649 9.94199C17.1009 9.94199 17.7033 10.1537 18.0721 10.5771C18.4409 11.0005 18.5269 11.7352 18.3302 12.7812L16.6337 20.7012H14.5685L16.1174 13.5284C16.2158 12.831 16.1912 12.3454 16.0437 12.0714C15.8961 11.7975 15.5519 11.6605 15.011 11.6605C14.6176 11.6605 14.212 11.8224 13.794 12.1461C13.376 12.4699 13.0933 12.9805 12.9457 13.6778L11.4705 20.7012H9.40527L11.6181 10.2409H13.5358L13.3145 11.4363C13.6588 10.988 14.1013 10.6269 14.6422 10.3529C15.1831 10.079 15.724 9.94199 16.2649 9.94199ZM30.6483 12.5572H25.7801L26.5915 8.67197H31.4596L31.9022 6.80405H24.8212L21.8708 20.7013H24.0836L25.4113 14.3504H30.2795L30.6483 12.5572ZM20.3955 10.2406H22.4608L20.3218 20.7009H18.1827L20.3955 10.2406ZM20.7643 8.33574C20.7152 8.41046 20.666 8.52254 20.6168 8.67197H22.7559L23.1984 6.80405C22.6083 6.85387 22.1412 6.99085 21.797 7.215C21.4528 7.43915 21.1577 7.70065 20.9119 7.99952C20.8627 8.14895 20.8135 8.26103 20.7643 8.33574ZM30.5745 20.7009L32.7135 10.2406H34.8525L32.6397 20.7009H30.5745ZM10.733 6.80405H8.52021L6.38117 16.7413C6.18448 17.6379 5.87715 18.2855 5.45917 18.684C5.0412 19.0825 4.51259 19.2817 3.87334 19.2817C3.18491 19.2817 2.71777 19.0825 2.4719 18.684C2.22603 18.2855 2.20145 17.6379 2.39814 16.7413L4.46342 6.80405H2.25062L0.185345 16.5919C-0.158868 18.1859 -0.0236405 19.3191 0.591025 19.9915C1.20569 20.664 2.17686 21.0002 3.50454 21.0002C4.83222 21.0002 5.93861 20.664 6.82373 19.9915C7.70885 19.3191 8.32352 18.1859 8.66773 16.5919L10.733 6.80405ZM23.9361 3.2177L23.4935 5.08561C22.51 5.18523 21.7233 5.42184 21.1332 5.79542C20.5431 6.169 20.1005 6.57994 19.8055 7.02824C19.6088 7.27729 19.449 7.55125 19.3261 7.85012C19.2031 8.14899 19.0925 8.42295 18.9941 8.672H17.1501C17.2485 8.2237 17.3837 7.7754 17.5558 7.32711C17.7279 6.87881 17.9861 6.4056 18.3303 5.90749C18.822 5.21014 19.535 4.59995 20.4693 4.07694C21.4036 3.55392 22.5592 3.26751 23.9361 3.2177ZM34.2256 7.14028L33.4511 6.80405L33.0085 8.67197H35.0001C35.0001 7.87499 34.7419 7.36443 34.2256 7.14028Z",fill:e})),f=a(1990),T=a.n(f),D=(a(1991),a(1992),a(1993)),y=a.n(D),P=a(1994),S=a.n(P),A=a(1995),j=a.n(A),N=a(1996),x=a.n(N),L=a(1997),V=a.n(L)},2006:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));const n={success:{lo:80,hi:100,within:!0},warning:{lo:60,hi:80,within:!0},danger:{lo:0,hi:60,within:!0}},c=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"1W",label:"1W",value:168},{id:"1M",label:"1M",value:720}]},2007:function(e,t){},2008:function(e,t){},2009:function(e,t,a){"use strict";var n=a(1969);a.d(t,"fetchUcoreGeneralInfo",(function(){return n.a}));a(1971);var c=a(2010);a.d(t,"selectHasCloudAccessEnabled",(function(){return c.a})),a.d(t,"selectHasCloudBackupEnabled",(function(){return c.b}));a(2011)},2010:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(4),c=a(6),r=a(1969);const l=Object(n.a)(e=>Object(c.w)(Object(r.a)(),e.models),e=>{var t;return null!==(t=null==e?void 0:e.data)&&void 0!==t?t:{}}),i=Object(n.a)(l,({cloud_access_enabled:e})=>e),o=Object(n.a)(l,({cloud_backup_enabled:e})=>e)},2011:function(e,t){},2014:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var n=a(0),c=a.n(n),r=a(2),l=a(63),i=a(255),o=a(2856),E=a(4),s=a(1967),m=a(1968),d=a(528),_=a(2927),u=a(1909);const p=(e,t,a)=>(t&&t.constructor===Object&&Object.keys(t).forEach(n=>{void 0===e[n]||a&&a.includes(n)?e[n]=t[n]:Number.isFinite(e[n])?e[n]=(e[n]||0)+t[n]:Array.isArray(e[n])?e[n]=e[n].concat(t[n]):e[n]&&e[n].constructor===Object&&p(e[n],t[n])}),e),b=(e,t)=>Object(d.a)(e).reduce((e,a)=>e?p(e,a,t):a,void 0);class O{constructor(e){this.data=e}dedeuplicatedBy(e,t){return this.data=((e,t,a)=>Object(_.a)(Object(u.a)(e,t)).map(e=>b(e,a)))(this.data,e,t),this}sortedBy(e,t){return this.data.sort((a,n)=>{const c=a[e]-n[e];return t?-c:c}),this}withLimit(e,t){let a=e;return this.data.length>=a&&(a-=1,this.other=b(this.data.slice(a),t),this.other.generated=!0),this.data=this.data.splice(0,a),this}countTotal(e){const t=this.other?[...this.data,this.other]:this.data;return this.total=b(t,e)||{},this}withMap(e,t){return this.mapFunction=a=>{const n=t?a:{};return Object.keys(e).forEach(t=>{n[t]=e[t](a)}),n},this}withOtherDefaults(e){return this.other={...this.other,...e},this}getData(e=!1){let t;return t=this.other.generated?[...this.data,this.other].map(this.mapFunction):this.data.map(this.mapFunction),t=t.map((t,a)=>({index:a,...e?{id:a.toString()}:[],...t})),{data:t,total:this.total}}}var I=a(28),g=a(38),h=a(1955);const C=Object(l.a)(e=>{if(0===e.length)return{data:[],total:{}};const t=e.map(e=>({label:Object(m.a)(Object(m.b)(e.cat,e.app))||c.a.createElement(r.c,{id:"CLIENT_PROPERTY_DPI_UNKNOWN_LABEL"}),packets:e.rx_packets+e.tx_packets,bytes:e.rx_bytes+e.tx_bytes,...e})),a={bytesParsed:e=>Object(i.c)(e.bytes),pkts:e=>Object(o.a)(e.packets,{spacer:" "})};return new O(t).dedeuplicatedBy("label").sortedBy("bytes",!0).withLimit(h.a).countTotal().withMap(a,!0).withOtherDefaults({label:c.a.createElement(r.c,{id:"CLIENT_PROPERTY_DPI_OTHER"})}).getData(!0)}),R=(e,t)=>Object(g.b)()(Object(E.a)(((e,t)=>Object(g.b)()(Object(E.a)(Object(s.b)(e,t),e=>{var t;return(null===(t=Object(I.c)(e))||void 0===t?void 0:t.by_app)||[]}),e=>e))(e,t),e=>C(e)),e=>e)},2015:function(e,t,a){"use strict";var n=a(1974);a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c}));var c=a(1950);a.d(t,"a",(function(){return c.a})),a.d(t,"d",(function(){return c.c}))},2016:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(73),c=a(46),r=a(69);const l=(e,t,a)=>{var r;const l=Object(n.getUplinkDevice)(t,e),i=l&&Object(c.c)(l)||"",o={id:e.id,ip:e.ip,isUp:!!e.uptime,name:e.name,type:e.type,uplink:l,uplinkName:i,vendor:null===(r=Object(n.clientFingerPrintCombiner)(a,e))||void 0===r?void 0:r.fingerprint_device_vendor};switch(o.type){case n.ClientType.VPN:e.type===n.ClientType.VPN&&(o.remote_ip=e.remote_ip,o.vpn_interface=e.vpn_interface);break;case n.ClientType.WIRED:e.type===n.ClientType.WIRED&&(o.is_wired=e.is_wired,o.sw_port=e.sw_port,o.wired_rate_mbps=e.wired_rate_mbps);break;case n.ClientType.WIRELESS:e.type===n.ClientType.WIRELESS&&(o.ap_mac=e.ap_mac,o.channel=e.channel,o.essid=e.essid,o.eagerly_discovered=e.eagerly_discovered,o.radio=e.radio,o.radio_proto=e.radio_proto,o.rssi=e.rssi,o.signal=e.signal,o.wifi_experience_score=e.wifi_experience_score)}return o.type!==n.ClientType.VPN&&e.type!==n.ClientType.VPN&&(o.blocked=e.blocked,o.fingerprint=e.fingerprint,o.first_seen=e.first_seen,o.last_seen=60*Math.floor((e.last_seen||0)/60),o.fixed_ip=e.fixed_ip,o.hostname=e.hostname,o.is_guest=e.is_guest,o.mac=e.mac,o.note=e.note,o.oui=e.oui,o.uplink_mac=(null==l?void 0:l.mac)||e.uplink_mac,o.unifi_device_info=e.unifi_device_info,o.use_fixedip=e.use_fixedip,o.network_name=e.network_name,o.usage_bytes=e.usage_bytes),o},i=e=>{const{name:t}=e,a=Object(n.getPhysicalName)(e);return e.type===n.ClientType.VPN?e.name:t||a};function o(e){var t,a,n,c,l,i,o,E,s,m;return(null===(t=null==e?void 0:e[r.b.STATUS])||void 0===t?void 0:t[r.a.ACTIVE])&&!(null===(a=null==e?void 0:e[r.b.STATUS])||void 0===a?void 0:a[r.a.OFFLINE])&&!(null===(n=null==e?void 0:e[r.b.STATUS])||void 0===n?void 0:n[r.a.BLOCKED])&&(null===(c=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===c?void 0:c[r.c.WIRED])&&(null===(l=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===l?void 0:l[r.c.VPN])&&(null===(i=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===i?void 0:i[r.c.NG])&&(null===(o=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===o?void 0:o[r.c.NA])&&(null===(E=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===E?void 0:E[r.c.USERS])&&(null===(s=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===s?void 0:s[r.c.GUESTS])&&!(null===(m=null==e?void 0:e[r.b.DEVICE])||void 0===m?void 0:m[r.b.DEVICE])}function E(e){var t,a,n,c,l,i,o,E,s,m;return(null===(t=null==e?void 0:e[r.b.STATUS])||void 0===t?void 0:t[r.a.ACTIVE])&&(null===(a=null==e?void 0:e[r.b.STATUS])||void 0===a?void 0:a[r.a.OFFLINE])&&(null===(n=null==e?void 0:e[r.b.STATUS])||void 0===n?void 0:n[r.a.BLOCKED])&&(null===(c=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===c?void 0:c[r.c.WIRED])&&(null===(l=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===l?void 0:l[r.c.VPN])&&(null===(i=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===i?void 0:i[r.c.NG])&&(null===(o=null==e?void 0:e[r.e.CONNECTION_TYPE])||void 0===o?void 0:o[r.c.NA])&&(null===(E=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===E?void 0:E[r.c.USERS])&&(null===(s=null==e?void 0:e[r.e.CLIENTS_TYPE])||void 0===s?void 0:s[r.c.GUESTS])&&!(null===(m=null==e?void 0:e[r.b.DEVICE])||void 0===m?void 0:m[r.b.DEVICE])}},2018:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{fetch(e,{mode:"no-cors"}).then(()=>{a(!0)}).catch(()=>a(!1))},[e]),t}},2019:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),c=a.n(n),r=a(36),l=a(8),i=a(5),o=a(215),E=a(373),s=a(781),m=a(97),d=a(230),_=a(46);const u=Object(i.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
`,p=({mac:e,...t})=>{const a=Object(r.k)(),n=Object(l.useDispatch)(),i=Object(l.useSelector)(m.a),o=Object(l.useSelector)(d.selectDevicesBasicDataMemoized).find(t=>t.mac===e);return o?c.a.createElement(u,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation(),a.push(`/${i}/devices/properties/${e}/overview`),n(Object(E.g)({type:s.b.DEVICE,mac:e}))}},t),Object(_.c)(o)):null};t.b=p;const b=Object(i.c)(p)`
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
`},2020:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(788);t.a=({item:e,className:t,hideIcon:a=!1})=>{const{speed_tests:n}=e,l=n&&n.reduce((e,{download_speed_bytes:t=0})=>e+t,0);return c.a.createElement(r.a,{className:t,bytes:l,direction:"down",size:"body",pow:2,hideIcon:a})}},2021:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(788);t.a=({item:e,className:t,hideIcon:a=!1})=>{const{speed_tests:n}=e,l=n&&n.reduce((e,{upload_speed_bytes:t=0})=>e+t,0);return c.a.createElement(r.a,{className:t,bytes:l,direction:"up",size:"body",pow:2,hideIcon:a})}},2022:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(34),c=a(50);const r=e=>{const t=Object(c.selectIsIpsDisabled)(e),a=Object(n.selectWanNetworks)(e).every(({wan_smartq_enabled:e})=>!e);return t&&a}},2027:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return E}));var n=a(1179),c=a(67),r=a(159),l=a(2006);const i=(e,t)=>{if(void 0!==t&&""!==t){const a=t.toLowerCase().trim();return["client_model","client_name","device_model","device_name","isp_name","public_ip","wlan_essid"].some(t=>{var n,c;return null===(c=null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.toLowerCase)||void 0===c?void 0:c.call(n).includes(a)})}return!0},o=(e,t)=>!Object(n.a)(t)&&Object.keys(t).every(a=>{switch(a){case"experience":return!t.experience.length||t.experience.some(t=>{const a=l.b[t];return Object(r.f)(a,e.client_wifi_experience)});default:return Object(c.a)(t[a])?t[a].includes(e[a]):void 0===e[a]||e[a]===t[a]}}),E=(e,t)=>{if(t){return(Date.now()/1e3-e.report_timestamp)/3600<=t}return!0}},2028:function(e,t,a){"use strict";var n,c;a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),function(e){e.WLAN_ESSID="wlan_essid",e.DEVICE_NAME="device_name",e.EXPERIENCE="experience"}(n||(n={})),function(e){e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning"}(c||(c={}))},2029:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(78),l=a(117),i=a(785);t.a=({model:e,name:t,withName:a=!1,width:n=25,height:o=25,...E})=>{const s=r.deviceModels[e],m=a?i.a:l.c,d=a?t||(null==s?void 0:s.name):void 0;return c.a.createElement(m,Object.assign({device:{model:e,type:null==s?void 0:s.type,name:d},width:n,height:o},E))}},2030:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(255),l=a(793);t.a=({item:e})=>{const{client_link_download_rate_kbps:t,client_link_upload_rate_kbps:a}=e,n=`${Object(r.c)(1e3*t/8,"bitrate")} / ${Object(r.c)(1e3*a/8,"bitrate")}`;return c.a.createElement(l.a,null,n)}},2035:function(e,t,a){"use strict";var n=a(73),c=a(0),r=a(8);t.a=({client:e,props:t,children:a})=>{const{id:l}=e,i="uptime"in e&&e.uptime||"isUp"in e&&e.isUp;let o=n.ClientModelType.ACTIVE;e.type===n.ClientType.VPN?o=n.ClientModelType.VPN:i||(o="blocked"in e&&e.blocked?n.ClientModelType.BLOCKED:n.ClientModelType.OFFLINE);const E=Object(c.useMemo)(()=>Object(n.selectClientProps)(l,t,o),[l,o]);return a(Object(r.useSelector)(E))}},2038:function(e,t,a){"use strict";var n=a(215),c=a(32),r=a(0),l=a.n(r),i=a(5),o=a(2),E=a(8),s=a(36),m=a(373),d=a(781),_=a(70);const u=Object(i.c)(n.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
  border: 0;
  line-height: 1.6;
`,p=Object(i.c)(c.a)`
  max-width: 220px;
`;t.a=({uplinkMac:e,uplinkName:t,uplinkPort:a})=>{const n=Object(E.useDispatch)(),i=Object(s.k)(),b=Object(_.a)("/devices/properties/:mac/overview"),O=Object(r.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),i.push(b.replace(":mac",e)),n(Object(m.g)({type:d.b.DEVICE,mac:e}))},[n,i,b,e]);return t?l.a.createElement(u,{size:"small",variant:"link",onClick:O},l.a.createElement(p,{size:"body",color:"info",truncate:!0},t," ",a?"#"+a:"")):l.a.createElement(c.a,{size:"body",color:"secondary"},l.a.createElement(o.c,{id:"COMMON_HYPHEN"}))}},2039:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=({strength:e,color:t,inactiveColor:a="currentColor",width:n,height:r})=>c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27 26",width:n,height:r},c.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{fill:e>=1?t:a,x:"0",y:"16",width:"3",height:"10"}),c.a.createElement("rect",{fill:e>=2?t:a,x:"6",y:"12",width:"3",height:"14"}),c.a.createElement("rect",{fill:e>=3?t:a,x:"12",y:"8",width:"3",height:"18"}),c.a.createElement("rect",{fill:e>=4?t:a,x:"18",y:"4",width:"3",height:"22"}),c.a.createElement("rect",{fill:e>=5?t:a,x:"24",y:"0",width:"3",height:"26"})))},2045:function(e,t,a){"use strict";var n=a(1967);a.d(t,"fetchTraffic",(function(){return n.a}));var c=a(1955);a.d(t,"DPI_CONVERTER_LIMIT",(function(){return c.a}));var r=a(2014);a.d(t,"selectFormattedStaDpiData",(function(){return r.a}));a(2008),a(1968)},2046:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2047:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2050:function(e,t,a){"use strict";var n=a(36),c=a(0),r=a.n(c),l=a(5),i=a(1913),o=a(8),E=a(235),s=a(527),m=a(43),d=a(781),_=a(4),u=a(460),p=a.n(u),b=a(1743),O=a(3),I=a(73),g=a(454),h=a(38),C=a(106);var R=a(2015);const v=e=>{var t,a,n;return null!==(n=null===(a=null===(t=null==e?void 0:e.shared)||void 0===t?void 0:t.propertypanel)||void 0===a?void 0:a.showing)&&void 0!==n&&n},f=e=>{var t,a,n;return null!==(n=null===(a=null===(t=null==e?void 0:e.shared)||void 0===t?void 0:t.propertypanel)||void 0===a?void 0:a.activeItem)&&void 0!==n?n:{}},T=Object(_.a)(f,({mac:e})=>e),D=(Object(_.a)(f,({id:e})=>e),Object(_.a)(f,({type:e})=>e),[]),y=e=>Object(_.b)(_.c,(e,t)=>p()(Object(b.a)(e,D),Object(b.a)(t,D)))(Object(_.a)(t=>{var a,n,c,r;return(null===(r=null===(c=null===(n=null===(a=t.models)||void 0===a?void 0:a[O.MODEL])||void 0===n?void 0:n.byId)||void 0===c?void 0:c[e])||void 0===r?void 0:r.record)||{}},e=>e),e=>e),P=Object(_.a)(O.selectDevicesData,T,(e,t)=>{const a=e.find(e=>e.mac===t);return e.reduce((e,t)=>{var n;return a&&(null===(n=a.uplink_table)||void 0===n?void 0:n.find(e=>e.mac===t.mac))&&e.push({value:t.mac,label:t.name||t.mac}),e},[])}),S=["uptime","rx_bytes","tx_bytes","rx_packets","tx_packets","rx_bytes-r","tx_bytes-r"],A=e=>Object(_.b)(_.c,(e,t)=>p()(Object(b.a)(e,S),Object(b.a)(t,S)))(Object(_.a)(t=>{var a,n,c,r,l,i,o;return(null===(o=(null===(n=null===(a=t.models[I.MODEL])||void 0===a?void 0:a.byId)||void 0===n?void 0:n[e])||(null===(r=null===(c=t.models[I.MODEL_BLOCKED])||void 0===c?void 0:c.byId)||void 0===r?void 0:r[e])||(null===(i=null===(l=t.models[I.MODEL_OFFLINE])||void 0===l?void 0:l.byId)||void 0===i?void 0:i[e]))||void 0===o?void 0:o.record)||{}},e=>e.type!==I.ClientType.VPN?(e=>e.id?{_id:e.id,id:e.id,name:e.name,type:e.type,rx_bytes:e.rx_bytes,tx_bytes:e.tx_bytes,rx_packets:e.rx_packets,tx_packets:e.tx_packets,ip:e.ip,uptime:e.uptime,network_id:e.network_id,unifi_device_info:e.unifi_device_info,connected:Object(I.getIsClientConnected)(e),connection:Object(I.getConnection)(e),displayName:Object(I.getClientDisplayName)(e),physicalName:Object(I.getPhysicalName)(e),authorized:"authorized"in e?e.authorized:void 0,gw_mac:"gw_mac"in e?e.gw_mac:void 0,is_guest:"is_guest"in e?e.is_guest:void 0,mac:"mac"in e?e.mac:void 0,hostname:"hostname"in e?e.hostname:void 0,fingerprint:"fingerprint"in e?e.fingerprint:void 0,oui:"oui"in e?e.oui:void 0,blocked:"blocked"in e?e.blocked:void 0,use_fixedip:"use_fixedip"in e?e.use_fixedip:void 0,fixed_ip:"fixed_ip"in e?e.fixed_ip:void 0,note:"note"in e?e.note:void 0,usergroup_id:"usergroup_id"in e?e.usergroup_id:void 0,signal:"signal"in e?e.signal:void 0,radio:"radio"in e?e.radio:void 0,radio_proto:"radio_proto"in e?e.radio_proto:void 0,tx_rate:"tx_rate"in e?e.tx_rate:void 0,rx_rate:"rx_rate"in e?e.rx_rate:void 0,"tx_bytes-r":"tx_bytes-r"in e?e["tx_bytes-r"]:void 0,"rx_bytes-r":"rx_bytes-r"in e?e["rx_bytes-r"]:void 0,rssi:"rssi"in e?e.rssi:void 0,essid:"essid"in e?e.essid:void 0,is_wired:"is_wired"in e?e.is_wired:void 0,powersave_enabled:"powersave_enabled"in e?e.powersave_enabled:void 0,network_name:"network_name"in e?e.network_name:void 0,channel:"channel"in e?e.channel:void 0,user_id:"user_id"in e?e.user_id:void 0,uplink_mac:"uplink_mac"in e?e.uplink_mac:void 0,sw_port:"sw_port"in e?e.sw_port:void 0,wifi_experience_score:"wifi_experience_score"in e?e.wifi_experience_score:void 0,wired_rate_mbps:"wired_rate_mbps"in e?e.wired_rate_mbps:void 0,eagerly_discovered:"eagerly_discovered"in e?e.eagerly_discovered:void 0}:null)(e):null),e=>e),j=e=>Object(h.b)()(Object(_.a)(t=>{var a,n,c;return(null===(c=null===(n=null===(a=t.models[I.MODEL])||void 0===a?void 0:a.byId)||void 0===n?void 0:n[e])||void 0===c?void 0:c.record)||{}},Object(C.selectUnifiDevice)(e),(e,t)=>((e,t)=>{if(!e.id&&!t.id)return null;const a=Object.assign({},e,t);return{id:a.id,mac:a.mac,model:a.model,oui:a.oui,fingerprint:a.fingerprint,unifi_device_info:a.unifi_device_info,displayable_version:a.displayable_version,product_line:a.product_line,ip:a.ip,network_name:a.network_name,uplink_mac:a.uplink_mac,is_wired:a.is_wired,name:a.name,hostname:a.hostname,note:a.note,usergroup_id:a.usergroup_id,fixed_ip:a.fixed_ip,use_fixedip:a.use_fixedip,user_id:a.user_id,network_id:a.network_id,type:a.type,sw_port:"sw_port"in a?a.sw_port:void 0,essid:"essid"in a?a.essid:void 0}})(e,t)),e=>e);var N=a(373),x=a(70),L=a(178),V=a(32),w=a(15),M=a(2),F=a(21),U=a(117),B=a(522),z=a(792),k=a(793);const W=Object(l.c)(B.a,{shouldForwardProp:e=>!["width","height"].includes(e)})`
  float: left;
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  ${({width:e})=>e&&`width: ${e}px;`}
  ${({height:e})=>e&&`height: ${e}px;`}
`;var H=({defaultName:e="",client:t=null,width:a,height:n,alt:c})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(W,{client:t,width:a,height:n,alt:c}),r.a.createElement(k.a,null,Object(I.getClientDisplayName)(t)||e));var $=({data:{client_icon_device_id:e,client_icon_engine_id:t,client_name:a},name:n,withName:c=!1})=>{const l=c?H:B.a;return r.a.createElement(l,{client:{fingerprint:{dev_id:e,computed_engine:t},name:n||a,is_wired:!1},alt:n})},G=a(46),Y=a(2016);const X=Object(l.c)("div")`
  margin-left: 8px;
`,K=Object(l.c)(V.a)`
  max-width: 200px;
`,Z=Object(l.c)(V.a)`
  margin-left: 8px;
`,q=Object(l.c)(V.a)`
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
`,te=({activeItem:{data:e,data:{displayName:t=Object(I.getClientDisplayName)(e)}}})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(J,null,r.a.createElement(B.a,{client:e,alt:t})),r.a.createElement(X,null,r.a.createElement(K,{size:"body",weight:"bold",truncate:!0},Object(Y.c)(e)))),ae=r.a.memo(({activeItem:e})=>{var t,a;return r.a.createElement(F.a,{alignItems:"center"},Object(O.hasActiveUnifiCare)(e.data)&&r.a.createElement(Q,{width:30,height:30}),r.a.createElement(J,null,r.a.createElement(U.c,{device:e.data})),r.a.createElement(X,null,r.a.createElement(K,{size:"body",weight:"bold",truncate:!0},Object(G.d)(e.data))),(null===(t=e.data)||void 0===t?void 0:t.model_in_eol)&&r.a.createElement(Z,{color:"danger",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_LABEL_EOL"})),(null===(a=e.data)||void 0===a?void 0:a.model_in_lts)&&r.a.createElement(Z,{color:"warning",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_LABEL_LTS"})),Object(O.isU6)(e.data)&&r.a.createElement(ee,{size:"medium",isActive:!0}))},(e,t)=>{var a,n,c,r;return(null===(a=e.activeItem.data)||void 0===a?void 0:a.mac)===(null===(n=t.activeItem.data)||void 0===n?void 0:n.mac)&&(null===(c=e.activeItem.data)||void 0===c?void 0:c.name)===(null===(r=t.activeItem.data)||void 0===r?void 0:r.name)}),ne=({activeItem:{data:e,data:{client_name:t}}})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(J,null,r.a.createElement($,{data:e})),r.a.createElement(X,null,r.a.createElement(K,{size:"body",weight:"bold",truncate:!0},t)));var ce=({activeItem:e})=>{switch(e.type){case d.b.CLIENT:case d.b.UNIFI_DEVICE_CLIENT:return r.a.createElement(te,{activeItem:e});case d.b.DEVICE:return r.a.createElement(ae,{activeItem:e});case d.b.WIFI_MAN:return r.a.createElement(ne,{activeItem:e});case d.b.ISP_DETAILS:return r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(w.F,{width:25.25,height:25.25}),r.a.createElement(q,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_INTERNET"})));default:return null}},re=a(83),le=a(78);const ie=(e,t)=>e?t===d.b.DEVICE?Object(O.isUspp)(e)?d.a.USPP:Object(O.isUsps)(e)?d.a.USPS:Object(O.isUlte)(e)?d.a.LTE:Object(O.isUspPduPro)(e)?d.a.USPPDUP:Object(O.isUxg)(e)?d.a.UXG:Object(O.isUdmPro)(e)||Object(O.isUdmProSe)(e)?d.a.UDMPRO:Object(O.isUsAggPro)(e)?d.a.USAGGPRO:Object(O.getIsInWallAp)(e)?d.a.UAP_IW:Object(O.getIsUsl8Mp)(e)?d.a.USL8MP:Object(O.isUap6mp)(e)?d.a.UAP6MP:Object(O.getIsUspRps)(e)?d.a.USPRPS:Object(O.isUbbXg)(e)?d.a.UBBXG:(e=>(le.deviceModels[e.model]||{hybrid:void 0}).hybrid||e.type)(e):t===d.b.CLIENT?d.a.CLIENT:t:null;var oe;!function(e){e.WAN="wan",e.ALL="all"}(oe||(oe={}));var Ee=a(1818),se=a(452),me=a(647),de=a(215),_e=a(226);const ue=Object(l.c)(F.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`,pe=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  margin-top: 7px;
`;var be=({activeItem:e})=>{const t=Object(n.k)(),{site:a}=Object(n.m)(),c=Object(o.useSelector)(m.j),{uptime:l,ip:i,port_idx:E,configuration:{wan_provider_capabilities:s,wan_dns1:d,wan_dns2:_},details:{service_provider:u}}=e,{download_kilobits_per_second:p=0,upload_kilobits_per_second:b=0}=s,O=1e3*p/8,I=1e3*b/8;return r.a.createElement(F.a,{flexDirection:"column"},(null==u?void 0:u.name)?r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_SERVICE_PROVIDER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},u.name)):null,(null==u?void 0:u.city)?r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_LABEL_LOCATION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},u.city)):null,r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DOWNLOAD_CAPACITY"})),r.a.createElement(me.a,{type:"bytes",input:O,options:"bitrate",color:"secondary",size:"body"})),r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_UPLOAD_CAPACITY"})),r.a.createElement(me.a,{type:"bytes",input:I,options:"bitrate",color:"secondary",size:"body"})),l?r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_UPTIME"})),r.a.createElement(me.a,{type:"uptime",input:l,color:"secondary",size:"body"})):null,r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_WAN_IP",values:{port_idx:E}})),r.a.createElement(V.a,{color:"secondary",size:"body"},i)),(d||_)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),r.a.createElement(V.a,{color:"secondary",size:"body"},d)),r.a.createElement(ue,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),r.a.createElement(V.a,{color:"secondary",size:"body"},_))),r.a.createElement(pe,null,r.a.createElement(de.a,{size:"small",type:"button",variant:"inline",onClick:()=>{const e=Object(n.i)(c,{site:a});t.push(`${e}${_e.a.internetSettings}`)}},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_LINK_INTERNET_SETTINGS"}))))},Oe=a(2019),Ie=a(97);const ge=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
`;var he=({device:e,...t})=>{const a=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),c=Object(o.useSelector)(Ie.a),l=Object(n.k)(),i=Object(o.useDispatch)(),E=Object(O.getUplinkDisplayName)(e,a);return E?r.a.createElement(ge,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:e=>{e.preventDefault(),e.stopPropagation(),l.push(`/${c}/devices/properties/${a.mac}`),i(Object(N.g)({type:d.b.DEVICE,mac:a.mac}))}},t),E):null};const Ce=Object(l.c)(F.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`;var Re=()=>{const e=Object(o.useSelector)(O.selectAvailableUlteDevice);return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Ce,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_LTE_BACKUP"})),r.a.createElement(Oe.b,{mac:e.mac})),r.a.createElement(Ce,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_UPLINK"})),r.a.createElement(he,{device:e})))};const ve=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var fe=({activeItem:e})=>{const t=Object(o.useSelector)(se.d);return r.a.createElement(ve,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(be,{activeItem:e})},...t?[{id:"wanFailover",label:r.a.createElement(M.c,{id:"DASHBOARD_ISP_ACCORDION_TITLE_WAN_FAILOVER"}),renderContent:()=>r.a.createElement(Re,null)}]:[]],multiOpen:!0})},Te=a(1851),De=a(365),ye=a(71),Pe=a(784);const Se=Object(l.c)("div")`
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
`,xe=Object(l.c)("div")`
  margin: 20px 0;
`,Le=[{id:"time",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_HEADER_TIME"})),renderCell:({time:e})=>r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(Pe.a,{date:new Date(e)})),minWidth:150},{id:"xput_download",minWidth:100,renderLabel:()=>r.a.createElement(ye.g,{alignItems:"center"},r.a.createElement(Ne,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_STATUS_DOWNLOAD"}))),renderCell:({xput_download:e})=>r.a.createElement(Ae,{size:"body",type:"bytes",options:"bitrate",input:1e6*e/8})},{id:"xput_upload",minWidth:100,renderLabel:()=>r.a.createElement(ye.g,{alignItems:"center"},r.a.createElement(Ne,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_STATUS_UPLOAD"}))),renderCell:({xput_upload:e})=>r.a.createElement(je,{size:"body",type:"bytes",options:"bitrate",input:1e6*e/8})}];var Ve=({activeItem:e})=>{const t=Object(o.useDispatch)(),a=Object(o.useSelector)(De.selectSpeedTestReportData);return Object(c.useEffect)(()=>{t(Object(De.fetchSpeedTestReport)())},[e.mac,t]),r.a.createElement(Se,null,r.a.createElement(Te.a,{idField:"_id",hideCellOverflow:!1,columns:Le,disableColumnFilters:!0,items:a,renderFooter:()=>a.length>0?r.a.createElement(xe,null,r.a.createElement(M.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})):r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_NO_SPEED_TESTS"})}))},we=a(45),Me=a(2029),Fe=a(159);const Ue={width:25,height:25},Be=Object(l.c)(F.a)`
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
`,ke=Object(l.c)("div")`
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
`,$e=Object(l.c)(V.a)`
  width: 70px;
`,Ge=Object(l.c)(w.w)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xs"]};
`,Ye=Object(l.c)(F.a)`
  > * {
    color: ${we.a["grey-2"]};
  }
`,Xe=Object(l.c)(F.a)`
  overflow: auto hidden;
  padding-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
  padding: 20px 0 20px 20px;
`,Ke=Object(l.c)(de.a)`
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
`,Ze=e=>{const{isInternet:t,isClient:a,client_wifi_experience:n,number_of_clients:c,wireless_uplink:l=!1,expandButton:i,devicesCount:o,onClick:E}=e,s=!!t||!a&&!l;return r.a.createElement(ke,null,!t&&r.a.createElement(ze,{wired:s}),r.a.createElement(We,{flexDirection:"column",alignItems:"center",justifyContent:"center"},t||a||!c?r.a.createElement(F.a,{flex:"1"}):r.a.createElement(Ye,{flex:"1",alignItems:"center",justifyContent:"space-between"},r.a.createElement(Ge,null),r.a.createElement(V.a,null,c)),!i&&r.a.createElement(He,{flex:"1",alignItems:"center",justifyContent:"center"},(e=>{const{isInternet:t,isClient:a,model:n}=e;return t?r.a.createElement(w.F,{size:"large"}):a?r.a.createElement($,Object.assign({data:e},Ue)):r.a.createElement(Me.a,{model:n,name:n})})(e)),i&&E&&o&&r.a.createElement(Ke,{iconSize:"logo",onClick:E},o),r.a.createElement(F.a,{flex:"1",alignItems:"center",justifyContent:"center"},r.a.createElement($e,{centered:!0,truncate:!0},(e=>{var t;const{isInternet:a,isClient:n,client_model:c,client_name:l,model:i}=e;return a?r.a.createElement(M.c,{id:"COMMON_WORD_INTERNET"}):n?c||l:(null===(t=le.deviceModels[i])||void 0===t?void 0:t.name)||i})(e))),r.a.createElement(F.a,{flex:"1",alignItems:"center",justifyContent:"center"},a&&r.a.createElement(V.a,{color:Object(Fe.c)(n)},n,"%"))))};var qe=({item:e,variant:t})=>{const[a,n]=Object(c.useState)(!1),{uplink_devices:l=[],report_timestamp:i,...o}=e,E=[...l].reverse(),s=E[0],m=E[(null==E?void 0:E.length)-1],d=E.slice(1,(null==E?void 0:E.length)-1),_=Object(c.useCallback)(()=>{n(!a)},[a]),u=a?E.map(e=>r.a.createElement(Ze,Object.assign({key:e.mac},e))):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,Object.assign({key:s.mac},s)),d.length>1?r.a.createElement(Ze,{expandButton:!0,onClick:_,devicesCount:(null==E?void 0:E.length)-2}):d.map(e=>r.a.createElement(Ze,Object.assign({key:e.mac},e))),(null==E?void 0:E.length)>1&&r.a.createElement(Ze,Object.assign({key:m.mac},m)));return r.a.createElement(Be,{flexDirection:"column",flex:"0 0 auto",bordered:"secondary"===t},r.a.createElement(Xe,null,r.a.createElement(Ze,{isInternet:!0}),u,r.a.createElement(Ze,Object.assign({isClient:!0},o))))},Je=a(2020),Qe=a(2021),et=a(2030),tt=a(785),at=a(11),nt=a(786);var ct=({item:e})=>{const{client_signal:t,client_wifi_experience:a,device_model:n,device_name:l,speed_tests:i,wlan_band:o,wlan_channel_width:E,wlan_essid:s}=e,m=Object(c.useMemo)(()=>Object(Fe.d)(a),[a]),d=Object(c.useMemo)(()=>i.reduce((e,t)=>{const{test_server_name:a}=t;return a&&!e.includes(a)&&e.push(a),e},[]),[i]),_=Object(c.useMemo)(()=>(null==d?void 0:d.length)?d.join(", "):"-",[null==d?void 0:d.length]),u=Object(c.useMemo)(()=>{var e;return(null===(e=le.deviceModels[n])||void 0===e?void 0:e.name)||n},[n]);return r.a.createElement(ye.g,{flexDirection:"column",padding:"26px 32px 0"},m&&r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_WIFI_EXP"})),r.a.createElement(me.a,{size:"body",type:"percent",input:a/100,style:{color:we.a["color-"+Object(Fe.c)(a)]}})),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_AP_MODEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(tt.a,{width:20,height:20,device:{model:n,type:at.DeviceType.AP,name:u}}))),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_AP_NAME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(nt.a)(l))),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_SSID"})),r.a.createElement(V.a,{color:"secondary",size:"body"},s)),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},t," ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_CHANNEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},`${E}${o&&` (${o})`}`)),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(ye.g,{justifyContent:"flex-start",alignItems:"center"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_DOWN"}))),r.a.createElement(ye.g,{alignItems:"center"},r.a.createElement(Je.a,{item:e}))),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(ye.g,{justifyContent:"flex-start",alignItems:"center"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_UP"}))),r.a.createElement(ye.g,{alignItems:"center"},r.a.createElement(Qe.a,{item:e}))),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(et.a,{item:e}))),r.a.createElement(ye.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"WIFI_MAN_OVERVIEW_TEST_SERVER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},_)))};const rt=Object(l.c)(V.a)`
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
`;var Et=({timestamp:e})=>r.a.createElement(ot,{alignItems:"center",justifyContent:"space-around"},r.a.createElement(F.a,{alignItems:"center",justifyContent:"space-around"},r.a.createElement(rt,{weight:"bold"},r.a.createElement(M.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_TEST"})),r.a.createElement(Pe.a,{date:new Date(1e3*e),spacer:" "})),r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(lt,null),r.a.createElement(M.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRED"}),r.a.createElement(it,null),r.a.createElement(M.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRELESS"})));const st=Object(l.c)("div")`
  width: 100%;
  background: ${({theme:e})=>e.colors.navBackground};
`;var mt=function({activeItem:e}){return r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null,r.a.createElement(qe,{item:e,variant:"primary"}),r.a.createElement(Et,{timestamp:e.report_timestamp})),r.a.createElement(ct,{item:e}))},dt=a(20),_t=a(1180),ut=a(189);const pt=Object(l.c)(F.a)`
  position: relative;
  width: 100%;
  margin: ${({theme:e})=>e.spacing["spacing-l"]} 0 ${({theme:e})=>e.spacing["spacing-xxl"]};

  button {
    padding: 0;
    position: absolute;
    left: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  }
`,bt=Object(l.c)(V.a)`
  width: 100%;
  letter-spacing: 0.55px;
  line-height: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var Ot=({timestamp:e,onBack:t})=>r.a.createElement(pt,null,r.a.createElement(ut.c,{name:"backButton",onClick:t},r.a.createElement(w.f,null)),r.a.createElement(bt,{size:"body",weight:"bold",centered:!0},r.a.createElement(Pe.a,{date:new Date(1e3*e)})));var It=()=>{const e=Object(n.k)(),t=Object(n.n)(),a=Object(dt.a)(t,"params.subPanel"),c=Object(o.useSelector)(Object(_t.e)(a));return a&&c?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{timestamp:c.report_timestamp,onBack:()=>e.push("../history")}),r.a.createElement(qe,{item:c,variant:"secondary"}),r.a.createElement(ct,{item:c})):null},gt=a(1917),ht=a(1117),Ct=a(1791),Rt=a(523),vt=a(48),ft=a(23),Tt=a(2933),Dt=a(2900),yt=a(1172),Pt=a(2728),St=a(286);const At={client:{fetchMethodName:"fetchUserReport",selectMethod:De.selectUserReportData,translationPrefix:"CLIENT"},ap:{fetchMethodName:"fetchAPExperienceReport",selectMethod:De.selectAPExperienceReportData,translationPrefix:"DEVICE"}},jt=Object(l.c)("div")`
  > div {
    position: relative;
  }
`,Nt=Object(l.c)("div")`
  position: absolute;
  top: 0;
  left: 0;
`,xt=Object(l.c)("div")`
  width: 100%;
  text-align: center;
`,Lt=l.a`
  fill: ${we.a["grey-3"]};
  font-size: 12px;
`,Vt=[{label:100,value:100},{label:50,value:50},{label:0,value:0}],wt=e=>{const{start:t,end:a}=Object(De.selectDailyGranularity)();return[{label:e.formatMessage({id:"COMMON_GRANUALITY_24"}),value:t},{label:e.formatMessage({id:"COMMON_GRANUALITY_12"}),value:Object(ft.addHours)(t,12).getTime()},{label:e.formatMessage({id:"COMMON_NOW"}),value:a}]},Mt={fetchUserReport:De.fetchUserReport,fetchAPExperienceReport:De.fetchAPExperienceReport};var Ft=Object(vt.compose)(M.f,Object(o.connect)((e,{mac:t,itemType:a})=>{var n;const c=(null===(n=null==At?void 0:At[a])||void 0===n?void 0:n.selectMethod)||null;return{reportData:c&&c(e,[t],Object(De.selectDailyGranularity)())}},Mt))(e=>{const{mac:t,reportData:a,intl:n,itemType:l}=e,i=Object(c.useRef)(null),o=Object(c.useRef)(null),[E,s]=Object(c.useState)(0);Object(c.useEffect)(()=>{var a;const n=(null===(a=null==At?void 0:At[l])||void 0===a?void 0:a.fetchMethodName)||"";n&&e[n]&&e[n](Object(De.selectReportPayload)([t],Object(De.selectDailyGranularity)()))},[l,t]),Object(c.useEffect)(()=>i.current&&s(i.current.scrollWidth),[i]);const m=a.map(e=>({x:e.time,y:e.satisfaction>=0?e.satisfaction:null})),d=Object(St.b)(m,St.a.MINUTES.grain,"x"),_=i.current&&m.length>0;return r.a.createElement(jt,null,r.a.createElement("div",{ref:i},_&&r.a.createElement(Tt.a,{xAxis:wt(n),yAxis:Vt,width:E,height:140,hideXGridLines:!0,hideYGridLines:!0,labelClassName:Lt,renderChartElements:(e,t,a)=>r.a.createElement(Dt.a,{variant:"gradientArea",interpolation:"curved",dashed:!1,data:d,getCoordinates:e,maxY:a,mouseData:t,tooltipPortal:o?o.current:void 0,hideMissingData:!0,allowCustomDots:!0,renderTooltip:({hidden:e,left:t,top:a,y:n})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(yt.a,{left:t,top:a-4,message:r.a.createElement(xt,{style:{color:we.a["color-"+Object(Fe.c)(Math.min(100,n||0))]}},n?n.toFixed(0):0),hidden:e,topMargin:4,width:50}),r.a.createElement(Nt,null,r.a.createElement("svg",{width:E,height:140},t&&a&&r.a.createElement(Pt.a,{x:t,y:a,color:we.a["color-"+Object(Fe.c)(Math.min(100,n||0))]}))))})}),r.a.createElement("div",{ref:o})))}),Ut=a(17),Bt=a(41);const zt=Object(l.c)(de.a)`
  padding: 4px 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  width: auto;
`,kt=l.a`
  justify-content: flex-start;
`;var Wt=({item:e,itemType:t,message:a})=>{const n=Object(o.useDispatch)(),l=Object(c.useCallback)(()=>{n(Object(Ut.g)({modalType:Bt.a.REPORT_WIFI_EXPERIENCE,modalProps:{item:e,itemType:t}}))},[n,e,t]);return r.a.createElement(zt,{wrapClassName:kt,variant:"link",size:"small",onClick:l},r.a.createElement(M.c,{id:a||"COMMON_REPORT_WIFI_EXPERIENCE_BUTTON"}))},Ht=a(794);const $t=Object(l.c)("div")`
  border-top: 1px ${({theme:e})=>e.motifPalette.ui04} solid;
  margin: 8px 0;
`,Gt=Object(l.c)(gt.a)`
  position: relative;
  margin: 4px 0;
  border-radius: 16px;
  height: 4px;
`;var Yt=({item:e,showGraph:t,headerTitle:a,itemType:n,canReport:l})=>{const i="mac"in e?e.mac:void 0,E="is_wired"in e?e.is_wired:void 0,s="wired_rate_mbps"in e?e.wired_rate_mbps:void 0,m="uplink_mac"in e&&e.uplink_mac,d="sw_port"in e&&e.sw_port,_="eagerly_discovered"in e&&e.eagerly_discovered,u=Object(c.useMemo)(()=>m&&d?Object(Ht.a)(m,d):()=>{},[m,d]),p=Object(o.useSelector)(u),{satisfaction:b,known:O}=((e,t)=>(e=>!("satisfaction"in e))(e)?Object(I.getClientExperienceFromPort)(t,e):(e=>"satisfaction"in e)(e)?{satisfaction:e.satisfaction,known:Object(Fe.d)(e.satisfaction)}:null)(e,p),g=Object(Fe.c)(b);return r.a.createElement(ye.g,{width:"100%",flexDirection:"column",justifyContent:"center",padding:"16px 32px 0",flex:"0 0 auto"},r.a.createElement(ye.g,{width:"100%",justifyContent:"space-between",alignItems:"baseline"},r.a.createElement(V.a,{size:"header-xs",weight:"bold"},r.a.createElement(M.c,{id:a})),e.uptime?E&&s>0?r.a.createElement(V.a,{size:"header-l",color:"primary"},r.a.createElement("span",{style:{color:ht.a.getGradientColor(b/100),fontWeight:700}},`${Object(Rt.b)(s)} ${10===s||100===s?`(${s} Mbps)`:""}`)):E||O||!_?r.a.createElement(V.a,{size:"header-l",color:g,weight:"bold"},b,"%"):r.a.createElement(ye.g,{flexDirection:"column"},r.a.createElement(V.a,{size:"header-xs",weight:"bold",color:"info"},r.a.createElement(M.c,{id:"COMMON_WORD_INITIALIZING"}),"...")):r.a.createElement(V.a,{size:"body",color:"disabled"},r.a.createElement(M.c,{id:"COMMON_HYPHEN"}))),O&&!E?r.a.createElement(Ct.a,{variant:"gradient",value:b,size:"medium"}):E||O||!_?null:r.a.createElement(Gt,{placement:"below",isLoading:!0}),l&&e.uptime&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.g,{margin:"8px 0"},r.a.createElement(Wt,{item:e,itemType:n})),r.a.createElement($t,null)),t&&!E&&r.a.createElement(Ft,{mac:i,itemType:n}))},Xt=a(255),Kt=a(664),Zt=a(2035);var qt=({children:e,flexProps:t={}})=>r.a.createElement(F.a,Object.assign({width:"100%",marginBottom:4,justifyContent:"space-between"},t),e);const Jt=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0;
  margin: 0;
  border: 0;
  line-height: 1.6;
  font-weight: normal;
`,Qt=({activeItem:e,handlePortClick:t})=>{const{ip:a,network_name:n,connected:l,is_wired:i}=e;let E=null,s=null,m=null;e.type===I.ClientType.WIRELESS&&({essid:E,channel:s,radio:m}=e);const d="uplink_mac"in e&&e.uplink_mac,_=Object(c.useMemo)(()=>d?Object(O.selectDeviceRecordProperties)(d,["type","name","model","mac"]):()=>{},[d]),u=Object(o.useSelector)(_),p=Object(c.useMemo)(()=>Object(I.getPortName)(u,e),[u,e]),b=Object(c.useMemo)(()=>Object(I.getPortNumber)(u,e),[u,e]),g=Object(c.useMemo)(()=>{switch(m){case"ng":return"2.4 GHz";case"na":return"5 GHz";default:return null}},[m]);return r.a.createElement(ye.g,{padding:"50px 32px 26px 32px",flexDirection:"column",height:"100%"},a&&l?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a)):null,r.a.createElement(Zt.a,{client:e,props:["uptime"]},({uptime:e=null})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_UPTIME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Kt.a)(e))):null),n?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_NETWORK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null,p?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:i?"CLIENT_HEADER_WIRED":"CLIENT_HEADER_WIRELESS"})),r.a.createElement(Jt,{variant:"link",onClick:t},Object(nt.a)(p,15))):null,i?r.a.createElement(r.a.Fragment,null,b&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},b))):r.a.createElement(r.a.Fragment,null,E?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_WIFI"})),r.a.createElement(V.a,{color:"secondary",size:"body"},E)):null,s?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_CHANNEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},s)):null,g?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_BAND"})),r.a.createElement(V.a,{color:"secondary",size:"body"},g)):null,r.a.createElement(Zt.a,{client:e,props:["signal"]},({signal:e=null})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e," ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))):null),r.a.createElement(Zt.a,{client:e,props:["tx_rate"]},({tx_rate:e=0})=>e>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_RX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Xt.c)(1e3*e/8,"bitrate","SI"))):null),r.a.createElement(Zt.a,{client:e,props:["rx_rate"]},({rx_rate:e=0})=>e>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_TX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Xt.c)(1e3*e/8,"bitrate","SI"))):null)),r.a.createElement(Zt.a,{client:e,props:["usage_bytes"]},({usage_bytes:e=null})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_ACTIVITY_24_HRS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{size:"body",type:"bytes",input:e}))):null),r.a.createElement(Zt.a,{client:e,props:["tx_packets","tx_bytes"]},({tx_packets:e=0,tx_bytes:t=0})=>e&&t?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null),r.a.createElement(Zt.a,{client:e,props:["rx_packets","rx_bytes"]},({rx_packets:e=0,rx_bytes:t=0})=>e&&t?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null))};var ea=({activeItem:e,history:t})=>{const a="uplink_mac"in e&&e.uplink_mac,n=Object(c.useMemo)(()=>a?Object(O.selectDeviceRecordProperties)(a,["mac"]):()=>{},[a]),l=Object(o.useSelector)(n),i=Object(x.a)("/devices/properties/:mac/overview");return r.a.createElement(Qt,{activeItem:e,handlePortClick:()=>{(null==l?void 0:l.mac)&&t.push(i.replace(":mac",l.mac))}})},ta=a(339),aa=a(129),na=a(27),ca=a(798),ra=a(16);const la=Object(l.c)(V.a)`
  max-width: 150px;
  line-height: 1.6 !important;
  text-align: right;
`,ia=Object(l.c)(de.a)`
  padding: 0;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  border: 0;
  margin: 0;
  line-height: 1.6;
`;var oa=({activeItem:e,fingerprintData:t})=>{const{mac:a,name:n,oui:l,fingerprint:i}=e,E=Object(I.getFingerprintSourceId)(i),{fingerprint_device_vendor:s,fingerprint_device_name:m,fingerprint_device_os:d}=t,_=Object(I.isFingerprintIncorrect)(e.fingerprint),u=Object(I.isFingerPrintFromUiDb)(e),p=Object(o.useDispatch)(),b=Object(o.useSelector)(Ie.a),O=Object(c.useCallback)(()=>{const t=Object(I.getClientDisplayName)(e);p(Object(ta.c)(a,b)).then(()=>{let n=I.ClientModelType.ACTIVE;e.blocked?n=I.ClientModelType.BLOCKED:(null==e?void 0:e.uptime)||(n=I.ClientModelType.OFFLINE);const c=Object.assign({},"fingerprint"in e?e.fingerprint:{},{dev_id_override:void 0,has_override:!1});p(Object(I.updateClientDataInStore)(a,{fingerprint:c},n)),p(Object(na.c)({icon:ra.a.success,message:"REPORT_CLIENT_FINGERPRINT_REVERT_SUCCESS",values:{clientName:t}}))}).catch(()=>{p(Object(na.c)({icon:ra.a.danger,message:"REPORT_CLIENT_FINGERPRINT_REVERT_ERROR",values:{clientName:t}}))})},[a,e.type,n,i,b]);return Object(x.f)(Number.isInteger(E)?[Object(aa.f)(E)]:()=>Promise.resolve({}),r.a.createElement(F.a,{padding:"24px 32px 0",flexDirection:"column",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"row"},r.a.createElement(F.a,{maxWidth:"33%",minWidth:"33%",margin:"auto 16px auto 0",alignItems:"center",justifyContent:"center"},r.a.createElement(B.a,{client:e,alt:null==e?void 0:e.name,grid:!0})),r.a.createElement(F.a,{width:"100%",flexDirection:"column"},m&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_MODEL"})),r.a.createElement(la,{color:"secondary",size:"body",truncate:!0},m)),a&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_MAC"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a)),(s||l)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_MANUFACTURER"})),r.a.createElement(V.a,{style:{maxWidth:"110px"},color:"secondary",size:"body",truncate:!0},s||l)),!_&&d&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_OS"})),r.a.createElement(la,{color:"secondary",size:"body",truncate:!0},d)),r.a.createElement(F.a,{marginTop:4},!_&&!u&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary"}),r.a.createElement(ia,{variant:"link",onClick:()=>p(Object(ca.g)(a))},r.a.createElement(M.c,{id:Object(I.hasFingerprintFromLibrary)(e)?"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_WRONG":"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_MISSING"}))),_&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary"}),r.a.createElement(ia,{variant:"link",onClick:O},r.a.createElement(M.c,{id:"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REVERT"}))))))))};const Ea=({activeItem:e,fingerprintData:t,...a})=>{const{connected:n}=e,l="is_wired"in e?e.is_wired:void 0,i="uplink_mac"in e&&e.uplink_mac,E="sw_port"in e&&e.sw_port,s=Object(c.useMemo)(()=>i&&E?Object(Ht.a)(i,E):()=>{},[i,E]),m=Object(o.useSelector)(s),d=Object(I.getClientExperienceFromPort)(m,e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(oa,{activeItem:e,fingerprintData:t}),r.a.createElement(Yt,{item:e,clientExperience:d,headerTitle:l?"CLIENT_HEADER_WIRED_EXPERIENCE":"CLIENT_HEADER_WIFI_EXPERIENCE",showGraph:(null==d?void 0:d.known)&&n,itemType:"client",canReport:!0}),r.a.createElement(ea,Object.assign({activeItem:e},a)))};var sa=({activeItem:e,...t})=>{const a=Object(c.useMemo)(()=>Object(I.selectClientFingerprint)(e),[e,[null==e?void 0:e.fingerprint]]),n=Object(o.useSelector)(a);return Object(I.getIsClientConnected)(e)?r.a.createElement(Ea,Object.assign({activeItem:e,fingerprintData:n},t)):r.a.createElement(oa,{activeItem:e,fingerprintData:n})},ma=a(1954),da=a(1948),_a=a(2038),ua=a(643),pa=a(2911),ba=a(2856),Oa=a(2045),Ia=a(6);const ga=169,ha=3,Ca=77,Ra=1,va=77,fa=1,Ta=[{id:"labelInfo",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"}," ",r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_USAGE"})),renderCell:({label:e,index:t})=>r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(Pa,{index:t}),r.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)),growthFactor:ha,minWidth:ga},{id:"bytesParsed",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_BYTES"})),growthFactor:Ra,minWidth:Ca,renderCell:({bytesParsed:e})=>r.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)},{id:"pkts",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_PACKETS"})),growthFactor:fa,minWidth:va,renderCell:({pkts:e})=>r.a.createElement(V.a,{color:"secondary",truncate:!0,size:"body"},e)}],Da=ht.a.getDiscreteColorScaler(Oa.DPI_CONVERTER_LIMIT),ya=Object(l.c)(F.a)`
  width: 100%;
  margin-top: 30px;
`,Pa=Object(l.c)(ua.a,{shouldForwardProp:e=>"index"!==e})`
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
`,ja=Object(l.c)(F.a)`
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
`,xa=Object(l.c)(w.Y)`
  position: absolute;
  top: 52%;
  left: 36px;
  color: ${({theme:e})=>{var t;return null===(t=e.motifPalette)||void 0===t?void 0:t.purple06}};
`;var La=Object(M.f)(({contentPaddingX:e,intl:t,mac:a})=>{const n={data:{macs:[a],type:"by_app"}},l={method:"post",crudCacheStrategy:{interval:3e4,type:Ia.a.COMBINED}},{data:i,total:E}=Object(o.useSelector)(Object(Oa.selectFormattedStaDpiData)(n,l)),s=Object(o.useDispatch)();Object(c.useEffect)(()=>(a&&s(Object(Oa.fetchTraffic)(n,l)),()=>s(Object(Ia.c)(Object(Oa.fetchTraffic)(n,l)))),[a]);const[m,d]=Object(Xt.c)(E.rx_bytes).split(" "),[_,u]=Object(Xt.c)(E.tx_bytes).split(" ");return r.a.createElement(r.a.Fragment,null,i.length?r.a.createElement(r.a.Fragment,null,m&&_&&r.a.createElement(ya,{alignItems:"center",justifyContent:"space-around"},[{items:i.map(({id:e,index:t,rx_bytes:a})=>({id:e,value:a,color:Da(t)})),title:`${m} ${d}`,Icon:Na},{items:i.map(({id:e,index:t,tx_bytes:a})=>({id:e,value:a,color:Da(t)})),title:`${_} ${u}`,Icon:xa}].map(({items:e,title:a,Icon:n})=>r.a.createElement(ja,{key:e.rx_bytes,justifyContent:"center",alignItems:"center"},r.a.createElement(F.a,{position:"relative"},r.a.createElement(n,{size:"medium"})),r.a.createElement(pa.a,{items:e,title:a,description:t.formatMessage({id:"CLIENT_PROPERTY_TRAFFIC_TAB_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",size:140,thickness:3.5,spacer:.5})))),r.a.createElement(Sa,{marginTop:36,contentPaddingX:e,justifyContent:"flex-start",alignItems:"center"},r.a.createElement(Te.a,{items:i,disableColumnFilters:!0,renderFooter:()=>r.a.createElement(F.a,null,r.a.createElement(F.a,{minWidth:ga+20,flexGrow:ha},r.a.createElement(V.a,{weight:"bold",size:"body",color:"secondary"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_TOTAL_TRAFFIC"}))),r.a.createElement(F.a,{minWidth:Ca+3,flexGrow:Ra,alignItems:"center"},r.a.createElement(V.a,{size:"body",color:"secondary"},Object(Xt.c)((i||[]).reduce((e,t)=>e+((null==t?void 0:t.bytes)||0),0)))),r.a.createElement(F.a,{minWidth:va+3,flexGrow:fa,alignItems:"center"},r.a.createElement(V.a,{size:"body",color:"secondary"},Object(ba.a)((i||[]).reduce((e,t)=>e+((null==t?void 0:t.packets)||0),0),{spacer:" "})))),columns:Ta,rowHeight:30,disableTextPointer:!0,disableSelection:!0}))):r.a.createElement(F.a,{padding:"30px",alignItems:"center",justifyContent:"center"},r.a.createElement(Aa,null),r.a.createElement(M.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_EMPTY"})))});const Va=Object(l.c)(F.a)`
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
`;var Ua=({activeItem:e})=>{const t=Object(n.k)(),{subPanelId:a,subPanel:l}=Object(n.m)(),i=Object(c.useMemo)(()=>(null==e?void 0:e.uplink_mac)?Object(O.selectDeviceRecordProperties)(e.uplink_mac,["ip","name","model","mac"]):()=>{},[null==e?void 0:e.uplink_mac]),E=Object(o.useSelector)(i),s=E&&Object(G.c)(E)||"",m=Object(o.useSelector)(Object(ma.b)(a||l));return Object(x.f)([Object(da.fetchSession)(e.mac,!1)],r.a.createElement(r.a.Fragment,null,r.a.createElement(Va,{position:"relative",padding:"12px 0",marginBottom:34,justifyContent:"center",width:"100%"},r.a.createElement(ut.c,{name:"backButton",onClick:()=>t.push("../insights")},r.a.createElement(Fa,{size:"small"})),(null==m?void 0:m.date)&&r.a.createElement(V.a,{size:"body",color:"secondary",weight:"bold"},m.date)),r.a.createElement(F.a,{padding:"0 30px",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(Ma,{width:"100%",flexDirection:"column"},(null==m?void 0:m.start)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.start)),(null==m?void 0:m.end)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_END"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.end)),(null==m?void 0:m.duration)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.duration)),(null==E?void 0:E.ip)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},E.ip)),(null==E?void 0:E.mac)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},E.mac)),(null==E?void 0:E.mac)&&s&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_UPLINK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(_a.a,{uplinkMac:E.mac,uplinkName:s}))),(null==m?void 0:m.port)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},m.port)),(null==m?void 0:m.experience)>=0&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:(null==m?void 0:m.is_wired)?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+Object(Fe.b)(null==m?void 0:m.experience)]}},null==m?void 0:m.experience,"%"))))),(null==m?void 0:m.mac)&&r.a.createElement(wa,{renderOnlyExpandedContent:!0,variant:"secondary",items:[{id:"dpi",label:r.a.createElement(M.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),openByDefault:!0,renderContent:()=>r.a.createElement(La,{mac:m.mac,contentPaddingX:0})}]})))};const Ba=Object(l.c)(Ee.a)`
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
`,ka=Object(l.c)("div")`
  padding-top: 20px;
`,Wa=Object(l.c)(w.W)`
  margin-right: 10px;
`,Ha=Object(l.c)("div")`
  padding-top: 10px;
`,$a=[{id:"date",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DATE"})),renderCell:({date:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"start",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_START"})),renderCell:({start:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"duration",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DURATION"})),renderCell:({duration:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80}],Ga=[{id:"date",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DATE"})),renderCell:({date:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"start",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_START"})),renderCell:({start:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"duration",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_DURATION"})),renderCell:({duration:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:80},{id:"wifiExperience",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"CLIENT_TABLE_HEADER_WIFI_EXP"})),renderCell:({experience:e})=>r.a.createElement(r.a.Fragment,null,e>=0?r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+Object(Fe.b)(e)]}},e,"%")):r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))),minWidth:80}];var Ya=({activeItem:{mac:e,is_wired:t}})=>{const{data:a,isLoading:c,error:l}=Object(o.useSelector)(Object(da.selectFormattedSessionData)(e,!1,[])),i=Object(n.k)();return Object(x.f)([Object(da.fetchSession)(e,!1)],r.a.createElement(r.a.Fragment,null,r.a.createElement(Ba,{variant:"secondary",renderOnlyExpandedContent:!0,multiOpen:!0,items:[{id:"dpi",label:r.a.createElement(M.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),openByDefault:!0,renderContent:()=>r.a.createElement(La,{mac:e,contentPaddingX:0})},{id:"history",label:r.a.createElement(M.c,{id:"CLIENT_ACCORDION_HEADER_HISTORY"}),openByDefault:!0,renderContent:()=>r.a.createElement(za,{justifyContent:"flex-start",alignItems:"center"},!c&&a.length>0&&r.a.createElement(Te.a,{items:a,disableColumnFilters:!0,columns:t?$a:Ga,onRowClick:({id:e})=>i.push("insights/"+e),rowHeight:30,renderFooter:()=>r.a.createElement(Ha,null,r.a.createElement(M.c,{id:"CLIENT_PROPERTY_FOOTER_RECORDS",values:{length:a.length}}))}),(!c||l)&&0===a.length&&r.a.createElement(ka,null,r.a.createElement(Wa,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"})))}]})))};const Xa=e=>Object(dt.a)(e,"shared.propertypanel.tabGetDataFunction",{}),Ka=e=>Object(dt.a)(e,"shared.propertypanel.tabSubmitFunction",{}),Za=e=>Object(dt.a)(e,"shared.propertypanel.tabResetFunction",{});var qa=function(e){return function(t){return class extends r.a.Component{constructor(){super(...arguments),this.state=e.reduce((e,t)=>({...e,dirty:{...e.dirty,[t]:!1},invalid:{...e.invalid,[t]:!1}}),{dirty:{},invalid:{}}),this.setFormDirty=(e,t)=>{const{dirty:a}=this.state;a[e]!==t&&this.setState({dirty:{...a,[e]:t}})},this.setFormInvalid=(e,t)=>{const{invalid:a}=this.state;a[e]!==t&&this.setState({invalid:{...a,[e]:t}})}}render(){const{dirty:e,invalid:a}=this.state,n=!!Object.values(e).find(e=>e),c=!!Object.values(a).find(e=>e);return r.a.createElement(t,Object.assign({isDirty:n,isInvalid:c,formStates:e,setFormDirty:this.setFormDirty,setFormInvalid:this.setFormInvalid},this.props))}}}},Ja=a(44),Qa=a(30),en=a(378),tn=a(137);const an=Object(l.c)("div")`
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
`;var En=({handleSubmit:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n,setFormDirty:l,fetchUserGroups:i,dirty:o,isUnifiDeviceClient:E,intl:s,userGroups:m,values:{usergroup_id:d}})=>{Object(c.useEffect)(()=>{i(),t({details:e}),a({details:n})},[]),Object(c.useEffect)(()=>{l("details",o)},[l,o]);const _=Object(c.useMemo)(()=>[{label:s.formatMessage({id:"CLIENT_MODAL_INPUT_BANDWIDTH_PROFILE_DEFAULT"}),value:""},...m],[m]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(an,{marginBottom:10},r.a.createElement(cn,{iconBefore:r.a.createElement(ln,{size:"original"}),label:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_NAME",labelClassName:"labelClassName",validationMessageClassName:"validationMessageClassName",name:"name",full:!0,size:"body",disabled:E})),r.a.createElement(an,{marginBottom:10},r.a.createElement(rn,{label:"CLIENT_PROPERTY_GENERAL_TAB_BANDWIDTH_PROFILE",name:"usergroup_id",type:"dropdown",full:!0,validated:!0,translateLabel:!0,options:_})),d&&r.a.createElement(ye.g,{marginTop:15},r.a.createElement(on,{isActive:!0}),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_BANDWIDTH_PROFILE_INFO"}))))};const sn=Object(Ja.g)({mapPropsToValues:e=>{const{name:t,hostname:a,usergroup_id:n}=e;return{name:a===t?"":t,usergroup_id:n||""}},validationSchema:Qa.a.object().shape({name:Qa.a.string(),usergroup_id:Qa.a.string()}),handleSubmit:(e,{props:t,setSubmitting:a,resetForm:n})=>{const{user_id:c,mac:r,createToast:l,updateClient:i}=t;i(e,r,c).then(t=>{t.data&&l({icon:ra.a.success,message:"CLIENT_NOTICE_SAVE_SUCCESS"}),n({values:e})}).catch(e=>{l({icon:ra.a.danger,message:"CLIENT_NOTICE_SAVE_ERROR"}),n()}).finally(()=>{a(!1)})}}),mn={createToast:na.c,updateClient:I.updateClient,fetchUserGroups:en.fetchUserGroups,tabSubmitFunction:N.j,tabResetFunction:N.i};var dn=Object(vt.compose)(Object(o.connect)(e=>({userGroups:Object(en.selectUserGroupOptions)(e)}),mn),M.f,sn)(En),_n=a(375),un=a(34),pn=a(480),bn=a(445);const On=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }

  > * {
    vertical-align: middle;
  }
`;var In=({fetchNetworks:e,tabResetFunction:t,tabSubmitFunction:a,resetForm:n,handleSubmit:l,setFormDirty:i,dirty:o,canAssignFixedIp:E,isDeviceGateway:s,values:m,networkData:d,intl:_})=>(Object(c.useEffect)(()=>{e(),a({network:l}),t({network:n})},[]),Object(c.useEffect)(()=>{i("network",o)},[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(On,{marginBottom:20},r.a.createElement(ye.g,{justifyContent:"space-between",alignItems:"center",marginTop:9},r.a.createElement("div",null,r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_USE_FIXED_IP"})),r.a.createElement(bn.a,{message:r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_FIXED_IP_TOOLTIP"}),width:200,className:"ml-2",position:"bottom",style:{display:"inline-block"}},r.a.createElement(w.W,{hidden:s,width:20,height:20,isActive:!0}))),r.a.createElement(tn.a,{type:"checkbox",id:"use_fixedip",name:"use_fixedip",disabled:!E}))),m.use_fixedip&&r.a.createElement(r.a.Fragment,null,r.a.createElement(On,{marginBottom:25},r.a.createElement(tn.a,{type:"dropdown",full:!0,validated:!0,name:"network_id",label:_.formatMessage({id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_NETWORK"}),options:d,fontSize:"body"})),r.a.createElement(On,null,r.a.createElement(tn.a,{label:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS",size:"body",full:!0,name:"fixed_ip"}))))),gn=a(100),hn=a(105);const Cn=Object(Ja.g)({mapPropsToValues:({defaultNetworkDataId:e,ip:t,fixed_ip:a,use_fixedip:n,network_id:c,clients:r})=>({use_fixedip:!!n,network_id:c||e,fixed_ip:a||t,clients:r}),validationSchema:({networkData:e,user_id:t})=>gn.a.lazy(({network_id:a,fixed_ip:n,clients:c})=>{const l=e&&e.find(e=>e.value===a),i=l&&l.ipSubnet;return gn.a.object().shape({use_fixedip:gn.a.bool(),network_id:gn.a.string(),fixed_ip:gn.a.string().when("use_fixedip",{is:!0,then:gn.a.string().label("CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS").matches(hn.h,r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).unifiIpv4InSubnet(i,r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_VALIDATION",values:{value:n,subnet:i}})).test("isFixedIPUnique",r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_UNIQUE"}),e=>!e||c.filter(e=>"user_id"in e&&e.user_id!==t).every(t=>!("fixed_ip"in t)||!t.fixed_ip||e!==t.fixed_ip)).required()})})}),handleSubmit:(e,{props:{user_id:t,mac:a,createToast:n,updateClient:c},setSubmitting:r,resetForm:l})=>{let i={use_fixedip:!1};"use_fixedip"in e&&e.use_fixedip&&(i=(({clients:e,...t})=>t)(e)),c(i,a,t).then(t=>{t.data&&n({icon:ra.a.success,message:"CLIENT_NOTICE_SAVE_SUCCESS"}),l({values:e})}).catch(e=>{n({icon:ra.a.danger,message:"CLIENT_NOTICE_SAVE_ERROR"}),l()}).finally(()=>{r(!1)})}}),Rn={createToast:na.c,fetchNetworks:un.fetchNetworks,updateClient:I.updateClient,tabSubmitFunction:N.j,tabResetFunction:N.i};var vn=Object(vt.compose)(_n.b,Object(o.connect)(e=>({networkData:Object(pn.e)(e),defaultNetworkDataId:Object(pn.c)(e),isDeviceGateway:Object(pn.d)(e),canAssignFixedIp:Object(pn.a)(e),clients:Object(I.selectNetworkContainerClientsData)(e)}),Rn),M.f,Cn)(In),fn=a(111);const Tn=Object(l.c)("footer",{shouldForwardProp:e=>"hasFormResetButton"!==e})`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: flex;
  justify-content: ${({hasFormResetButton:e})=>e?"space-between":"flex-end"};
  padding: 30px;
`,Dn=Object(l.c)(ut.c)`
  font-weight: normal;
`;var yn=({allowCancel:e,isDirty:t,isInvalid:a,onFormSubmit:n,onFormReset:c,onFormCancel:l,className:i,submitButtonText:o})=>r.a.createElement(Tn,{className:i,hasFormResetButton:!!c},r.a.createElement(Dn,{name:"cancel",type:"button",onClick:l,disabled:!e&&!t},r.a.createElement(fn.a,{message:"COMMON_ACTION_CANCEL"})),c&&r.a.createElement(Dn,{name:"reset",variant:"primary",type:"button",pill:!1,onClick:c,disabled:!t},r.a.createElement(fn.a,{message:"COMMON_ACTION_RESET_TO_DEFAULTS"})),r.a.createElement(Dn,{name:"submit",variant:"primary",type:"submit",pill:!1,onClick:n,disabled:!t||a},r.a.createElement(fn.a,{message:o||"COMMON_ACTION_APPLY_CHANGES"})));const Pn=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Sn=Object(l.c)(yn)`
  border-top: 0;
`;var An=r.a.memo(qa(["details","network"])(e=>{const{activeItem:t,isDirty:a,setFormDirty:n,formStates:c}=e,l=Object(o.useSelector)(Ka),i=Object(o.useSelector)(Za),{name:E,hostname:s,note:m,usergroup_id:d,mac:_,fixed_ip:u,use_fixedip:p,user_id:b,ip:O,network_id:I}=t,g="product_line"in t;return r.a.createElement(ye.g,{height:"100%",flexDirection:"column",justifyContent:"space-between"},r.a.createElement(Pn,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"details",openByDefault:!0,label:r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS"}),renderContent:()=>r.a.createElement(dn,{user_id:b,mac:_,hostname:s,name:E,note:m,usergroup_id:d,setFormDirty:n,isUnifiDeviceClient:g})},{id:"network",label:r.a.createElement(M.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_NETWORK"}),renderContent:()=>r.a.createElement(vn,{user_id:b,mac:_,ip:O,fixed_ip:u,use_fixedip:p,network_id:I,setFormDirty:n})}]}),r.a.createElement(Sn,{isDirty:a,onFormSubmit:()=>{c.details&&l.details(),c.network&&l.network()},onFormCancel:()=>{i.details(),i.network()}}))})),jn=a(1157),Nn=a(2001);var xn=({mac:e,props:t,children:a})=>{const n=Object(c.useMemo)(()=>Object(C.selectUnifiDeviceClientProperties)(e,t),[e,t]);return a(Object(o.useSelector)(n))};const Ln=Object(l.c)("img")`
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
`,Mn=Object(l.c)(ye.g)`
  background-color: ${({theme:e})=>e.motifPalette.neutral02};
  border-radius: 4px;
`,Fn=({activeItem:e})=>r.a.createElement(ye.g,{flexDirection:"row"},r.a.createElement(ye.g,{maxWidth:"33%",minWidth:"33%",margin:"auto 16px auto 0",alignItems:"center",justifyContent:"center"},r.a.createElement(ye.d,{client:e,grid:!0})),r.a.createElement(ye.g,{width:"100%",flexDirection:"column"},(null==e?void 0:e.model)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_MODEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e.model)),(null==e?void 0:e.mac)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_MAC"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e.mac)),(null==e?void 0:e.displayable_version)&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_VERSION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e.displayable_version)))),Un=({product_line:e})=>{var t,a;const n=Object(o.useSelector)(m.b);return e?r.a.createElement(Mn,{margin:"50px 0",padding:"12px",alignItems:"center"},r.a.createElement(ye.g,{marginRight:16},r.a.createElement(Ln,{src:(()=>{switch(e){case C.UnifiDeviceProductLine.TALK:return Nn.n;case C.UnifiDeviceProductLine.ACCESS:return Nn.k;case C.UnifiDeviceProductLine.PROTECT:return Nn.m;default:return null}})()})),r.a.createElement(ye.g,null,r.a.createElement(wn,{variant:"link",onClick:()=>{window.location.href=n.replace("network",e.toLowerCase())}},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_VIEW_IN",values:{application:(null===(t=null==e?void 0:e.charAt(0))||void 0===t?void 0:t.toUpperCase())+(null===(a=null==e?void 0:e.slice(1))||void 0===a?void 0:a.toLowerCase())}})))):null},Bn=({activeItem:e,history:t})=>{const{mac:a,ip:n,network_name:l,uplink_mac:i,is_wired:E,essid:s}=e,m=Object(x.a)("/devices/properties/:mac/overview"),d=Object(c.useMemo)(()=>i?Object(O.selectDeviceRecordProperties)(i,["type","name","model","mac"]):()=>{},[i]),_=Object(o.useSelector)(d),u=Object(c.useMemo)(()=>Object(I.getPortName)(_,e),[_,e]),p=Object(c.useMemo)(()=>Object(I.getPortNumber)(_,e),[_,e]);return r.a.createElement(ye.g,{flexDirection:"column"},n?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null,r.a.createElement(xn,{mac:a,props:["uptime"]},({uptime:e=null})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_UPTIME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(jn.a)(e))):null),l?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_NETWORK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},l)):null,u?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:E?"UNIFI_DEVICE_CLIENT_LABEL_WIRED":"UNIFI_DEVICE_CLIENT_LABEL_WIRELESS"})),r.a.createElement(Vn,{variant:"link",onClick:()=>t.push(m.replace(":mac",i))},u)):null,E&&p?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},p)):null,!E&&s?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_WIFI"})),r.a.createElement(V.a,{color:"secondary",size:"body"},s)):null,r.a.createElement(xn,{mac:a,props:["usage_bytes"]},({usage_bytes:e=null})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_ACTIVITY_24_HOURS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{size:"body",type:"bytes",input:e}))):null),r.a.createElement(xn,{mac:a,props:["rx_packets","rx_bytes"]},({rx_packets:e=0,rx_bytes:t=0})=>e&&t?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null),r.a.createElement(xn,{mac:a,props:["tx_packets","tx_bytes"]},({tx_packets:e=0,tx_bytes:t=0})=>e&&t?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"UNIFI_DEVICE_CLIENT_LABEL_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null==e?void 0:e.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",size:"body",input:t,color:"secondary"}))):null))};var zn=({activeItem:e,history:t})=>r.a.createElement(ye.g,{padding:"32px 32px 0",flexDirection:"column",justifyContent:"space-between"},r.a.createElement(Fn,{activeItem:e}),r.a.createElement(Un,{product_line:null==e?void 0:e.product_line}),r.a.createElement(Bn,{activeItem:e,history:t}));const kn=Object(l.c)(F.a)`
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
`;var Hn=({activeItem:e})=>{const t=Object(n.k)(),{subPanelId:a,subPanel:c}=Object(n.m)();let l;"mac"in e&&({mac:l}=e);const i=Object(o.useSelector)(Object(ma.b)(a||c)),E=Object(nt.a)((null==i?void 0:i.name)||(null==i?void 0:i.hostname)||(null==i?void 0:i.mac),15);return Object(x.f)([Object(da.fetchSession)(l,!0)],r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{padding:"15px 30px 0",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},r.a.createElement(kn,{position:"relative",paddingBottom:25,width:"100%"},r.a.createElement(ut.c,{name:"backButton",onClick:()=>t.push("../../overview")},r.a.createElement(w.f,null)),r.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},E+" | ",null==i?void 0:i.date)),r.a.createElement(Wn,{width:"100%",paddingBottom:10,flexDirection:"column"},r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.start)),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_END"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.end)),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.duration)),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.ip)),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.mac)),(null==i?void 0:i.is_wired)&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"CLIENT_HEADER_PORT"})),r.a.createElement(V.a,{size:"body"},null==i?void 0:i.port)),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:(null==i?void 0:i.is_wired)?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"})),r.a.createElement(V.a,null,(null==i?void 0:i.experience)>=0?r.a.createElement(V.a,{size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+((null==i?void 0:i.is_wired)?Object(Fe.b)(null==i?void 0:i.experience):Object(Fe.c)(null==i?void 0:i.experience))]}},null==i?void 0:i.experience,"%")):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"})))))),!!(null==i?void 0:i.mac)&&r.a.createElement(La,{mac:null==i?void 0:i.mac,key:null==i?void 0:i.mac})))},$n=a(2936),Gn=a(167),Yn=a(229),Xn=a(669),Kn=a(1965),Zn=a(1909),qn=a(761),Jn=a(62),Qn=a(208),ec=a(663),tc=a(1937);const ac=(e,t,a,n)=>{const c=e.find(e=>e.mac===a),r=Object(G.c)(c),l=Object(G.a)(c);if(r&&r!==a)return r;if(l)return l;const i=t.find(e=>"mac"in e&&e.mac===a),o=Object(I.getClientDisplayName)(i);return o&&o!==a?o:n.formatMessage({id:"DEVICE_UNKNOWN_HOSTNAME"})},nc=Object(l.c)("div")`
  > div:first-child {
    width: 80%;
    > div:first-child {
      width: 80%;
    }
  }
`,cc=(e,t,a,n)=>Array.from(e,(e,c)=>({id:"port_security_mac_address-"+c,port_security_mac_address:e,port_security_mac_address_name:ac(t,a,e,n)})),rc=[{id:"port_security_mac_address",label:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MAC_ADDRESS_LABEL"}),sortable:!1},{id:"port_security_mac_address_name",label:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NAME_LABEL"}),sortable:!1}],lc={port_security_mac_addresses:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"};var ic=Object(M.f)(({formValues:e,intl:t,setFieldValue:a})=>{const{port_security_mac_address:n}=e,l=Object(o.useSelector)(O.selectDevicesData),i=Object(o.useSelector)(I.selectCombinedClientsData),E=Object(c.useMemo)(()=>({editActive:!1,port_security_mac_address:cc(n,l,i,t)}),[n,l,i,t]),s=Object(c.useMemo)(()=>cc(n,l,i,t),[n,l,i,t]),m=Object(c.useMemo)(()=>[{name:"new_port_security_mac_address",label:"DEVICE_PORT_FORM_ENTER_MAC_ID",placeholder:"",type:"text"}],[]),d=Object(c.useCallback)(e=>{a("port_security_mac_address",e)},[a]),_=Object(c.useCallback)(({port_security_mac_address:e,new_port_security_mac_address:t})=>{t&&d([...e.map(({port_security_mac_address:e})=>e),t])},[d]),u=Object(c.useCallback)(({port_security_mac_address:t})=>{d(e.port_security_mac_address.filter(e=>e!==t))},[e,d]),p=Object(c.useCallback)(e=>{d([...e.map(({port_security_mac_address:e})=>e)])},[d]);return r.a.createElement(nc,null,r.a.createElement(tc.d,{fieldName:"port_security_mac_address",items:s,columns:rc,fieldLabels:lc,newFields:m,onAddItem:_,onRemoveItem:u,onEditSubmit:p,initialValues:E,useValuesInSchema:!0,validationSchema:e=>(e=>{const t=()=>gn.a.string().label("DEVICE_PORT_FORM_MAC_ADDRESS_LABEL").matches(hn.p,r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_MAC"})),a={arrayFieldName:"port_security_mac_address",stringFieldName:"port_security_mac_address",errorMessage:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MAC_MUST_BE_UNIQUE"})};return gn.a.object().shape({editActive:gn.a.bool(),new_port_security_mac_address:t().isMacUnique({formValues:null,...a}),port_security_mac_address:gn.a.array().of(gn.a.object().shape({port_security_mac_address:t().isMacUnique({formValues:e,...a}).required()}))})})(e),addButtonText:"DEVICE_PORT_FORM_MAC_FILTER_BUTTON"}))}),oc=a(1915),Ec=a(2910),sc=a(285),mc=a(1179),dc=a(667),_c=a(253),uc=a(59),pc=a(795);const bc=Object(l.c)("div")`
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
`;var Ic=Object(M.f)((function({deviceData:e,intl:t,portData:a,portData:{ifname:n,port_idx:c,portName:l,tx_bytes:i,rx_bytes:E,poe_mode:s,sfp_txfault:m,sfp_rxfault:d,sfp_vendor:_,sfp_serial:u,sfp_part:p,sfp_rev:b,sfp_compliance:O,sfp_voltage:I,sfp_current:g,sfp_txpower:h,sfp_rxpower:C,sfp_temperature:R}}){const v=Object(o.useSelector)(Yn.selectPortConf),f=Object(uc.qb)(a,t,v),T=Object(o.useSelector)(pc.s),D=Object(uc.ib)(a,e,T),y=Object(uc.ub)(a,e,T),P=a&&["SFP","SFP+"].includes(a.media)&&a.sfp_found,S=Object(uc.tb)(a,t),A=Object(uc.pb)(a),j=[];return P&&(m&&j.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX_FAULT"})),d&&j.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX_FAULT"}))),r.a.createElement(bc,null,(c||n)&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PORT"})),r.a.createElement(V.a,null,Object(uc.lb)(a))),l&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_NAME"})),r.a.createElement(V.a,null,l)),(S||j.length>0)&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_STATUS"})),r.a.createElement(V.a,null,S,j.length>0&&c%2==0&&r.a.createElement(V.a,{color:"danger"},j.join(", ")))),i>0&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX"})),r.a.createElement(me.a,{type:"bytes",input:i})),E>0&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX"})),r.a.createElement(me.a,{type:"bytes",input:E})),A&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"COMMON_DEVICE_POE_MODE_POE"})),r.a.createElement(V.a,null,A)),f&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PROFILE"})),r.a.createElement(V.a,null,f)),D&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_DOWNLINK"})),r.a.createElement(V.a,null,Object(G.c)(D))),y&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_UPLINK"})),r.a.createElement(V.a,null,Object(G.c)(y))),P&&r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VENDOR"})),r.a.createElement(V.a,null,_)),u&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_SERIAL"})),r.a.createElement(V.a,null,u)),p&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PART_NUMBER"})),r.a.createElement(V.a,null,p)),b&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_REV"})),r.a.createElement(V.a,null,b)),O&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_COMPLIANCE"})),r.a.createElement(V.a,null,O)),I&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VOLTAGE"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_VOLTAGE",values:{voltage:I}}))),g&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_CURRENT"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_CURRENT",values:{current:g}}))),R&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:R}}))),h&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_OUTPUT_POWER"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:h}}))),C&&r.a.createElement(Oc,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_INPUT_POWER"})),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:C}})))))}));const gc={large:{threshold:12,size:"20px",spacing:"8px",tooltipOffset:"15px"},medium:{threshold:15,size:"16px",spacing:"6px",tooltipOffset:"17px"},small:{threshold:20,size:"12px",spacing:"4px",tooltipOffset:"19px"},xsmall:{threshold:28,size:"10px",spacing:"2px",tooltipOffset:"20px"}};var hc=a(337);const Cc=l.e`
  0% { opacity: 0; }
  40% { opacity: 1; }
  100% { opacity: 0; }
`,Rc=l.a`
  &:nth-child(1) {
    animation: ${Cc} 2s 0s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${Cc} 2s -1s infinite ease-in-out;
  }
`,vc=l.e`
  0%   { opacity: 0; }
  20%  { opacity: 1; }
  33%  { opacity: 1; }
  53%  { opacity: 0; }
  100% { opacity: 0; }
`,fc=l.a`
  &:nth-child(1) {
    animation: ${vc} 3s -1s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${vc} 3s -2s infinite ease-in-out;
  }

  &:nth-child(3) {
    animation: ${vc} 3s 0s infinite ease-in-out;
  }
`,Tc=Object(l.c)("div",{shouldForwardProp:e=>"iconsLength"!==e})`
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
  ${({iconsLength:e})=>2===e&&`\n  &:nth-child(1) {\n    animation: ${Cc} 2s 0s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${Cc} 2s -1s infinite ease-in-out;\n  }`}

  ${({iconsLength:e})=>3===e&&`&:nth-child(1) {\n    animation: ${vc} 3s -1s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${vc} 3s -2s infinite ease-in-out;\n  }\n\n  &:nth-child(3) {\n    animation: ${vc} 3s 0s infinite ease-in-out;\n  }`}
`;function Dc({icon:e}){const t={[hc.a.DISCARDING]:w.v,[hc.a.WAN]:w.T,[hc.a.MIRROR]:w.K,[hc.a.NETWORK]:w.uc,[hc.a.POE]:w.Bb,[hc.a.POE_PLUS]:w.xb,[hc.a.POE_PLUS_PLUS]:w.zb,[hc.a.POWER_DELIVERING]:w.Bb,[hc.a.SHIELD]:w.Lb,[hc.a.UPLINK]:w.k,[hc.a.WAN_POE]:w.lc,[hc.a.WARNING]:w.a}[e];return t?r.a.createElement(t,{size:"original"}):null}var yc=({icons:e,...t})=>{let a="";return 2===e.length?a=Rc:3===e.length&&(a=fc),r.a.createElement(r.a.Fragment,null,e.map(n=>n&&r.a.createElement(Tc,Object.assign({},t,{className:a,iconsLength:e.length,key:n}),r.a.createElement(Dc,{icon:n}))))};const Pc=Object(l.c)(bn.a,{shouldForwardProp:e=>!["color","portSize","portSizeOverride","isDisabled"].includes(e)})`
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
`;var jc=({cellData:e,deviceData:t,key:a,portSize:c,portSizeOverride:l,...i})=>{const E=Object(uc.kc)(Object(o.useSelector)(O.selectDevicesData),t),s=Object(uc.kb)(e,t,Object(o.useSelector)(un.selectNetworkGroups),E),m=Object(uc.hb)(t,e),d=e||{},_=Object(uc.ie)(t)||Object(uc.be)(t),u=Object(n.k)(),{path:p}=Object(n.n)(),{site:b,page:I,id:g,panel:h}=Object(n.m)();if(!e)return Object(O.isUdmBase)(t)||Object(O.isUdr)(t)?null:r.a.createElement(Sc,{key:a,portSize:c,portSizeOverride:l});const C=e=>Object(n.i)(p,{site:b,page:I,id:g,panel:h,subPanel:"ports",subPanelId:e});return r.a.createElement(Pc,Object.assign({color:m,portSize:c,portSizeOverride:l,isDisabled:!e.enable,message:r.a.createElement(Ic,{deviceData:t,portData:d}),position:"bottomRight",tooltipClassName:Ac(c),onClick:e=>{var t,a;null===(t=null==e?void 0:e.preventDefault)||void 0===t||t.call(e),null===(a=null==e?void 0:e.stopPropagation)||void 0===a||a.call(e);const n=Object(uc.lb)(d),c="wan"===(null==d?void 0:d.network_name)||"wan2"===(null==d?void 0:d.network_name),r=null==d?void 0:d.dns;return c?u.push(C(oe.WAN)):r?u.push(C(oe.ALL)):_?u.push(C(null==d?void 0:d.ifname)):u.push(C(n))},portal:!0,key:a},i),r.a.createElement(yc,{icons:s}))};const Nc=Object(l.c)(V.a)`
  padding-left: 10px;
  color: inherit;
  font-size: inherit;
`,xc=(e,t,a)=>{const{diagram:n,ports:c}=Object(O.getDeviceSpecs)(e),l=[Object(O.isUdm)(e),Object(O.isUsAggPro)(e),Object(O.getIsInWallAp)(e)],i=n?Object(O.determineRowLayoutsFromDiagramConfig)(n,e):Object(O.determineRowLayoutsFromPortConfig)(e);return i?i.flat().reduce((n,i)=>{var o,E;if(!i)return n;const s=Object(O.getCurrentPortData)(i.portNumber,e);if(Object(mc.a)(s))return n;const m=r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(jc,Object.assign({cellData:s,deviceData:e,style:{minWidth:20}},a)),r.a.createElement(Nc,{truncate:!0},((e,t)=>{const a=Object(dc.a)(t,O.switchAnomaliesMap),n=a.length;return n>1?r.a.createElement(M.c,{id:"COMMON_ERRORS",values:{errorCount:n}}):n?r.a.createElement(M.c,{id:a[0]+"_PROBLEM"}):!Object(O.isPoeSupported)(e)&&!t.poe_caps||Object(O.getIsUsl8Mp)(e)?t.up?Object(Xt.c)(1e3*(null==t?void 0:t.speed)*1e3/8,"bitrate")||r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_CONNECTED"}):t.enable?r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"}):r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISABLED"}):Object(O.getPortPoeModeText)(t)})(e,s))),d=Object(_c.h)(s.ifname,e,t),_=c[s.ifname],u={...s,id:(null===(o=s.port_idx)||void 0===o?void 0:o.toString())||s.ifname,isWanPort:null==_?void 0:_.startsWith("WAN"),defaultNetworkGroupLabel:Object(O.getPortGroupLabel)(e,s),networkGroup:null==d?void 0:d.id,portStatus:m,disabled:s.masked};return l.every(e=>!e)&&(u.macFilters=null===(E=s.port_security_mac_address)||void 0===E?void 0:E.length),n.push(u),n},[]).sort(({port_idx:e},{port_idx:t})=>e-t):[]},Lc=Object(l.c)(F.a)`
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
`,Bc=Object(l.c)("div")`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,zc=Object(l.c)("div")`
  > div:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,kc=Object(l.c)(F.a)`
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
`,$c=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,Gc=Object(l.c)(V.a)`
  margin-bottom: 5px;
`,Yc=Object(l.c)("div")`
  padding-bottom: 10px;
  border-bottom: 1px solid ${we.a["white-6"]};

  span {
    margin-left: 5px;
  }
`,Xc=Object(l.c)(F.a)`
  > * {
    width: 100%;
  }
`;var Kc=Object(M.f)((function({activeItem:e,portData:t,formValues:a,setFieldValue:n,setFieldTouched:l,initialValues:i,intl:o}){var E,s,m;const{port_table:d=[]}=e,{lldpmed_enabled:_,stormctrl_enabled:u,op_mode:p,egress_rate_limit_kbps_enabled:b,speed:I}=a,{op_mode:g,port_idx:h,port_poe:C}=t,R=e.dot1x_portctrl_enabled,v=1===h,f=Object(O.hasSwitch)(e)||(Object(O.isInWallHd)(e)||Object(O.isUaiw6)(e))&&(v||R),T=Object(O.isInWallHd)(e),D=Object(O.getIsInWallAp)(e),y=Object(O.isUdmBase)(e),P=Object(O.isUdr)(e),S=Object(O.isSwitch)(e),A=Object(Gn.r)(e),j=Object(Gn.q)(e),N=Object(Gn.p)(e),x=Object(Gn.u)(e),L=Object(O.getPortPoeAvailability)(t),V=L.isPoePassthroughSupported&&!L.isPoeOffSupported,U="switch"===g&&(C||Object(O.isUaiw6)(e))&&f,B=Object(c.useMemo)(()=>{var e;try{return null===(e=JSON.parse(I))||void 0===e?void 0:e.speed}catch(t){return null}},[I]),z=Object(c.useMemo)(()=>Object(sc.getSupportedSpeeds)(t).map(({autoneg:e,speed:t=0,full_duplex:a=!1})=>{const{value:n,unit:c}=Object(Xt.d)(1e6*t/8,"bitrate"),r=`${Object(oc.a)(n,1)}${c}`;return{full_duplex:a,label:e?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!e&&{speed:r}}}),[t]),k=Object(c.useMemo)(()=>{if(e){const t="mirror"===g;let a=Object(dt.a)(e,"switch_caps.max_mirror_sessions",void 0);if(a||0===a||(a=1),t||e.port_table.filter(e=>"mirror"===e.op_mode).length<a)return!0}return!1},[e,g]),{isAggregateAllowed:W,aggregatePortOptions:H}=Object(c.useMemo)(()=>{const a=Object(O.getPortNumbers)(e),n=Object.keys(a).reduce((e,t)=>a[t].length+e,0)||0,{port_idx:c}=t;let r=Object(dt.a)(e,"switch_caps.max_aggregate_sessions",void 0);r||0===r||(r=4);const l=((e,t)=>t.map(e=>e.port_idx).filter((t,a)=>e+a+1===t))(c,((e,t,a)=>{const n=e.findIndex(e=>e.port_idx===t.port_idx),c=-1!==n?e.slice(n+1,n+a):[],r=(null==t?void 0:t.speed_caps)&~O.SPEED_CAPS.PORTSPEED_AUTO_NEG;return c.filter(({speed_caps:e,op_mode:t})=>e&r&&"switch"===t)})(d,t,r)),i=l[0],o=l[l.length-1]||i;return{isAggregateAllowed:i<=o&&o<=n,aggregatePortOptions:l.map(e=>({label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN",value:e,values:{port:e}}))}},[e,t,d]),$=Object(c.useMemo)(()=>{const{isPoeOffSupported:e,isPoePassthroughSupported:t,isPoePassive24Supported:a,isPoeAutoSupported:n,isPoePlusPlusSupported:c,isPoePlusSupported:r}=L,l=[];if(e&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_OFF"}),value:"off"}),t&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSTHROUGH"}),value:"passthrough"}),!t&&a&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSIVE"}),value:"pasv24"}),!t&&n){const e=[];c?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS_PLUS"})):r?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS"})):e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE"})),e.push(o.formatMessage({id:"DEVICE_PORT_FORM_AUTO_DETECT"})),l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_AUTO"}),value:"auto"})}return l},[o,L]);return r.a.createElement(r.a.Fragment,null,U&&r.a.createElement(Bc,{marginBottom:24},V?r.a.createElement(Xc,{alignItems:"center",flexDirection:"column"},r.a.createElement(Gc,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_POE_MODE_LABEL"})),r.a.createElement(Yc,null,r.a.createElement(w.W,{isActive:!0})," ",r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NOTICE_POE_PASSTHROUGH_ONLY"}))):r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_POE_MODE_LABEL",name:"poe_mode",type:"dropdown",full:!0,translateLabel:!0,options:$})),!y&&!D&&r.a.createElement(Bc,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_OPERATIONS_LABEL",name:"op_mode",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:[{label:"DEVICE_PORT_FORM_SWITCHING_LABEL",value:"switch"},...k?[{label:"DEVICE_PORT_FORM_MIRRORING_LABEL",value:"mirror"}]:[],...W?[{label:"DEVICE_PORT_FORM_AGGREGATE_LABEL",value:"aggregate"}]:[]]})),"mirror"===p&&r.a.createElement(Bc,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_MIRRORING_PORT",full:!0,type:"number",name:"mirror_port_idx"})),"aggregate"===p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Lc,{marginBottom:24,alignItems:"baseline"},r.a.createElement($c,null,r.a.createElement(Jn.Field,{full:!0,name:"port_idx",label:"DEVICE_PORT_FORM_AGGREGATE_PORTS_LABEL",value:o.formatMessage({id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN"},{port:h}),disabled:!0})),r.a.createElement("div",null,"-"),r.a.createElement($c,null,r.a.createElement(Jn.Field,{full:!0,name:"aggregatePortStop",type:"dropdown",options:H,translateOptions:!0,validated:!0}))),r.a.createElement(Lc,{marginBottom:24,alignItems:"center"},r.a.createElement(Fc,{height:17,width:17}),(null===(E=e.downlink_table)||void 0===E?void 0:E.length)?r.a.createElement(wc,null,r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_UPLINK"})):r.a.createElement(wc,null,r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_DOWNLINK"})))),e.dot1x_portctrl_enabled&&["mirror","aggregate"].includes(p)&&r.a.createElement(Bc,{marginBottom:24}),!D&&t.media&&r.a.createElement(Bc,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_LINK_SPEED_LABEL",name:"speed",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:z})),S&&B===Xn.c.PORTSPEED_FULL_25G.speed&&r.a.createElement(Bc,{marginBottom:24},r.a.createElement(Ec.a,{text:o.formatMessage({id:"DEVICE_PORT_FORM_LINK_SPEED_SFP28_ALERT"})})),A&&"aggregate"!==p&&!T&&r.a.createElement(Lc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL"}),r.a.createElement(bn.a,{portal:!0,tooltipClassName:Uc,position:"topRight",width:230,message:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_NOTIFICATION"})},r.a.createElement(Mc,{isActive:!0}))),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL",name:"isolation",type:"checkbox"})),"switch"===p&&!D&&!y&&!P&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Lc,{marginBottom:16},r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL",name:"stormctrl_enabled",afterChange:e=>{n("stormctrl_enabled",e),e||["stormctrl_ucast_rate","stormctrl_mcast_rate","stormctrl_bcast_rate"].forEach(e=>{n(e,i[e]),l(e,!1)})},type:"checkbox"})),u&&r.a.createElement(zc,null,r.a.createElement(Bc,{marginBottom:10},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_UNICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",min:Xn.e.MIN,max:Xn.e.MAX,name:"stormctrl_ucast_rate"})),r.a.createElement(Bc,{marginBottom:10},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_MULTICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_mcast_rate",min:Xn.e.MIN,max:Xn.e.MAX})),r.a.createElement(Bc,{marginBottom:20},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_BROADCAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_bcast_rate",min:Xn.e.MIN,max:Xn.e.MAX})))),j&&"switch"===p&&!T&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Lc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_LLDP_MED_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_LLDP_MED_LABEL",name:"lldpmed_enabled",afterChange:e=>{n("lldpmed_enabled",e),e||n("lldpmed_notify_enabled",i.lldpmed_notify_enabled)},type:"checkbox"})),_&&r.a.createElement(Lc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_TOPOLOGY_LABEL",name:"lldpmed_notify_enabled",type:"checkbox"}))),x&&"switch"===p&&!T&&r.a.createElement(Lc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_STP_LABEL"}),r.a.createElement(bn.a,{portal:!0,tooltipClassName:Uc,position:"topRight",width:230,message:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_STP_TOOLTIP"})},r.a.createElement(Mc,{isActive:!0}))),r.a.createElement(Jn.Field,{name:"stp_port_mode",type:"checkbox"})),N&&"switch"===p&&!T&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Lc,null,r.a.createElement(Vc,null,r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_EGRESS_LABEL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_EGRESS_LABEL",name:"egress_rate_limit_kbps_enabled",afterChange:e=>{n("egress_rate_limit_kbps_enabled",e),e||(n("egress_rate_limit_kbps",i.egress_rate_limit_kbps),l("egress_rate_limit_kbps",!1))},type:"checkbox"})),b&&r.a.createElement(F.a,{flexDirection:"row"},r.a.createElement(kc,{flexDirection:"column"},r.a.createElement(Wc,{full:!0,label:"DEVICE_PORT_FORM_RATE_LIMIT_LABEL",type:"number",min:null===(s=Xn.b[a.egress_rate_limit_unit])||void 0===s?void 0:s.MIN,max:null===(m=Xn.b[a.egress_rate_limit_unit])||void 0===m?void 0:m.MAX,name:"egress_rate_limit_kbps"})),r.a.createElement(Hc,{type:"dropdown",options:Kn.a.slice(0,2),name:"egress_rate_limit_unit",translateOptions:!0}))))}));const Zc=Object(l.c)("div")`
  padding: 0 0 48px 0;

  li {
    &[aria-expanded='true'] {
      border-bottom: none;
    }
    > div {
      margin-bottom: 0;
    }
  }
`,qc=Object(l.c)("div")`
  &:not(:first-child) {
    border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
    padding-top 8px;
    margin-top: 16px;
  }
`,Jc=Object(l.c)(ye.g)`
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
`,tr=({anomalies:e})=>e.map(e=>r.a.createElement(qc,{key:e},r.a.createElement(Jc,{alignItems:"center"},r.a.createElement(er,null),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e+"_PROBLEM"}))),r.a.createElement(Jc,{alignItems:"center"},r.a.createElement(Qc,null),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e+"_SOLUTION"})))));function ar({port:e}){const t=Object(dc.a)(e,O.switchAnomaliesMap),a=t.length;return a?r.a.createElement(Zc,null,a>1?r.a.createElement(Ee.a,{variant:"tertiary",items:[{id:"anomalies",openByDefault:!0,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_ERRORS",values:{errorCount:a}})),renderContent:()=>r.a.createElement(tr,{anomalies:t})}]}):r.a.createElement(tr,{anomalies:t})):null}const nr=Object(l.c)(F.a)`
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
`;const mr=()=>{const e=r.a.createElement(M.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Xn.e.MIN,max:Xn.e.MAX}});return Qa.a.number().min(Xn.e.MIN,e).max(Xn.e.MAX,e)},dr=Object(Ja.g)({mapPropsToValues:({currentPort:e})=>{const{autoneg:t,port_idx:a,poe_mode:n,portconf_id:c,stormctrl_bcast_enabled:r=!1,stormctrl_bcast_rate:l="",stormctrl_mcast_enabled:i=!1,stormctrl_mcast_rate:o="",stormctrl_ucast_enabled:E=!1,stormctrl_ucast_rate:s="",isolation:m=!1,lldpmed_enabled:d,lldpmed_notify_enabled:_=!1,speed:u,full_duplex:p,op_mode:b,mirror_port_idx:O,port_security_mac_address:I=[],egress_rate_limit_kbps_enabled:g=!1,egress_rate_limit_kbps:h="",stp_port_mode:C=!0,nameOverride:R="",aggregate_num_ports:v=null}=e;return{name:R,speed:t?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:u,full_duplex:p}),lldpmed_enabled:!1!==d,stormctrl_enabled:r||i||E,aggregatePortStop:v?a+v-1:null,port_idx:a,poe_mode:n,portconf_id:c,stormctrl_bcast_enabled:r,stormctrl_bcast_rate:l,stormctrl_mcast_enabled:i,stormctrl_mcast_rate:o,stormctrl_ucast_enabled:E,stormctrl_ucast_rate:s,isolation:m,lldpmed_notify_enabled:_,full_duplex:p,mirror_port_idx:O,op_mode:b,port_security_mac_address:I,egress_rate_limit_kbps:h,egress_rate_limit_unit:Kn.a[0].value,egress_rate_limit_kbps_enabled:g,stp_port_mode:C}},validationSchema:({activeItem:e})=>{const t=Object(O.getPortNumbers)(e),a=Math.min(t.standard[0]||1,t.sfp[0]||1,t.plus[0]||1),n=Math.max(t.standard[t.standard.length-1]||1,t.sfp[t.sfp.length-1]||1,t.plus[t.plus.length-1]||1),c=r.a.createElement(M.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:a,max:n}}),l=(e=!1)=>r.a.createElement(M.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Xn.b[Kn.a[e?1:0].value].MIN,max:Xn.b[Kn.a[e?1:0].value].MAX}});return Qa.a.object().shape({port_idx:Qa.a.number(),name:Qa.a.string(),poe_mode:Qa.a.string(),portconf_id:Qa.a.string(),stormctrl_enabled:Qa.a.boolean(),stormctrl_bcast_enabled:Qa.a.boolean(),stormctrl_bcast_rate:mr(),stormctrl_mcast_enabled:Qa.a.boolean(),stormctrl_mcast_rate:mr(),stormctrl_ucast_enabled:Qa.a.boolean(),stormctrl_ucast_rate:mr(),isolation:Qa.a.boolean(),full_duplex:Qa.a.boolean(),lldpmed_enabled:Qa.a.boolean(),lldpmed_notify_enabled:Qa.a.boolean(),op_mode:Qa.a.string(),mirror_port_idx:Qa.a.number().when("op_mode",{is:"mirror",then:Qa.a.number().required(c).min(a,c).max(n,c)}),aggregatePortStop:Qa.a.number().nullable().when("op_mode",{is:"aggregate",then:Qa.a.number().required().label("DEVICE_PORT_FORM_AGGREGATE_PORT_LABEL")}),port_security_mac_address:Qa.a.array().of(Qa.a.string()),egress_rate_limit_kbps_enabled:Qa.a.boolean(),stp_port_mode:Qa.a.boolean(),egress_rate_limit_kbps:Qa.a.number().when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Kn.a[0].value&&t,then:Qa.a.number().required(l()).min(Xn.b.k.MIN,l()).max(Xn.b.k.MAX,l()).integer()}).when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Kn.a[1].value&&t,then:Qa.a.number().required(l(!0)).min(Xn.b.M.MIN,l(!0)).max(Xn.b.M.MAX,l(!0))})})},handleSubmit:(e,{props:{updateDeviceWithIdEndpoint:t,activeItem:{_id:a,port_overrides:n,mac:c},activeItem:r,currentPort:l,intl:i,history:o}})=>{const E=i.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),s=Object(O.getIsPortConfDisabled)(r,l),{stormctrl_enabled:m,stormctrl_bcast_rate:d,stormctrl_mcast_rate:_,lldpmed_enabled:u,lldpmed_notify_enabled:p,stormctrl_ucast_rate:b,egress_rate_limit_kbps:I,egress_rate_limit_kbps_enabled:g,op_mode:h,mirror_port_idx:C,stp_port_mode:R,aggregatePortStop:v}=e,{speed:f,full_duplex:T}=JSON.parse(e.speed);let D=null;g&&(D=e.egress_rate_limit_unit===Kn.a[1].value?1e3*I:I),delete e.egress_rate_limit_unit;const y={...e,speed:f,full_duplex:T,stp_port_mode:R,autoneg:!f,lldpmed_notify_enabled:!!u&&p,stormctrl_bcast_enabled:!!m&&!!d,stormctrl_bcast_rate:m?d:null,stormctrl_mcast_enabled:!!m&&!!_,stormctrl_mcast_rate:m?_:null,stormctrl_ucast_enabled:!!m&&!!b,stormctrl_ucast_rate:m?b:null,egress_rate_limit_kbps:D,mirror_port_idx:"mirror"===h?C.toString():null,aggregate_num_ports:"aggregate"===h?v-l.port_idx+1:null},P=Object($n.a)(y,(e,t)=>"portconf_id"===t?s:"stormctrl_enabled"===t||("op_mode"===t&&"switch"===e||("lldpmed_enabled"===t?e:("full_duplex"!==t||!y.speed)&&("autoneg"!==t&&("poe_mode"===t&&"mirror"===y.op_mode||("stp_port_mode"===t?!("switch"===y.op_mode&&Object(Gn.u)(r)&&!Object(O.isInWallHd)(r)):"aggregatePortStop"===t||!e))))));let S=[P];n&&(S=[P,...n.filter(e=>e.port_idx!==P.port_idx)]),t({port_overrides:S},a,c,{successToast:{icon:ra.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:E}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{o.goBack()})}}),_r={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var ur=Object(vt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a,subPanelId:n}})=>({portConfig:Object(Yn.selectPortConf)(e),currentPort:Object(O.getCurrentPortData)(n?+n:+a,t)}),_r),M.f,dr)((function({portConfig:e,activeItem:t,history:a,currentPort:l,submitForm:i,resetForm:E,setFieldValue:s,setFieldTouched:d,values:_,values:{op_mode:u,portconf_id:p},intl:b,dirty:I,initialValues:g}){const h=Object(O.getIsInWallAp)(t),C=Object(O.getIsSwitchMini)(t),R=Object(O.getIsUapUswHybrid)(t),v=Object(Gn.s)(t),f=Object(O.getHasSwitchFullFeatures)(t,l),T=Object(O.getIsPortConfDisabled)(t,l),D=Object(o.useDispatch)(),y=Object(o.useSelector)(Ie.a),P=Object(o.useSelector)(m.j),S=Object(n.i)(P,{site:y}),A="switch"===u&&v&&!h&&!Object(O.isUdm)(t),j=h?"../device":"../services",N=Object(c.useMemo)(()=>{const t=e.map(e=>({...e,groupLabel:Object(O.getPortProfileGroup)(e)})),a=Object(Zn.a)(t,"groupLabel");return Object.entries(a).reduce((e,[t,a])=>{const n=a.filter(e=>R?e.attr_hidden_id!==O.SWITCH_PROFILE.ALL_ID:!C||"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"!==e.groupLabel).map(({name:e,_id:t})=>({label:e,value:t}));return"undefined"===t||C&&"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"===t?(e.push(...n),e):(e.push({groupLabel:b.formatMessage({id:t}),items:n}),e)},[])},[b,e,R]),x=Object(c.useMemo)(()=>Object(qn.a)(N.map(({groupLabel:e,items:t})=>[{isGroup:!0,label:e,value:e},...t])),[N]),L=Object(c.useMemo)(()=>r.a.createElement(Jn.Field,{label:f?"DEVICE_PORT_FORM_PORT_PROFILE_LABEL":"DEVICE_PORT_FORM_PORT_NETWORKS_VLAN_LABEL",name:"portconf_id",type:"dropdown",full:!0,translateLabel:!0,options:x,renderOption:({id:e,onClick:t,className:a,isSelected:n,option:{isGroup:c=!1,label:l}})=>r.a.createElement(or,{key:`${e}-${l}`,id:e,onClick:t,className:a,"aria-selected":n,role:"option",isGroup:c},l),disabled:T}),[f,T,x]),U=()=>{E(),a.goBack()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(lr,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(nr,{alignItems:"center"},r.a.createElement(w.f,{onClick:U,style:{cursor:"pointer"}}),r.a.createElement(cr,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER",values:{port:l.portIdx}}))),r.a.createElement(ar,{port:l}),r.a.createElement(ir,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),r.a.createElement(ir,{marginBottom:24},L),r.a.createElement(Er,{alignSelf:"flex-end"},r.a.createElement(sr,{size:"small",type:"button",variant:"inline",onClick:()=>{a.push(`${S}${_e.a.ucoreAdvancedSettings}`)}},r.a.createElement(w.q,{height:20,width:20}),r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MANAGE_PORT_PROFILES"}))),!!l.portconf_id&&p!==l.portconf_id&&r.a.createElement(ir,{marginBottom:24},r.a.createElement(F.a,null,r.a.createElement(w.W,{style:{color:we.a["scale-5"],marginRight:8}}),r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NOTICE_OVERRIDE_RESET"}))),T&&r.a.createElement(ir,{marginBottom:24},r.a.createElement(F.a,null,r.a.createElement(w.W,{isActive:!0,style:{marginRight:8}}),r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_NOTICE_PORT_CONF_DISABLED"})),r.a.createElement(Qn.a,{name:"configureLink",variant:"link",size:"small",onClick:()=>a.push(j),style:{marginTop:5}},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_BUTTON_PORT_CONF_CONFIGURE"}))),l.poe_enable&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ir,{flexDirection:"column",marginBottom:12},r.a.createElement(V.a,{weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_MANUAL_POWER_CYCLE"})),r.a.createElement(V.a,{color:"tertiary"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_MANUAL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(Er,{alignSelf:"flex-end",marginBottom:24},r.a.createElement(sr,{size:"small",variant:"inline",onClick:()=>{D(Object(ec.a)({message:"DEVICE_ACTIONS_SWITCH_PORT_POWER_CONFIRM_MESSAGE",messageValues:{portName:r.a.createElement("strong",null,l.portName),deviceName:t.name},title:"DEVICE_ACTIONS_SWITCH_PORT_POWER_CONFIRM_TITLE",useFormattedMessage:!0,onConfirm:()=>{D(Object(O.powerCyclePort)(t,l.port_idx)),D(Object(Ut.e)())}}))},Icon:r.a.createElement(w.Ab,null)},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PORT_POWER_CYCLE"})))),!Object(O.isUdmBase)(t)&&r.a.createElement(rr,{variant:"secondary",multiOpen:!0,items:[...A?[{id:"macFilter",label:r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_MAC_FILTER_LABEL"}),renderContent:()=>r.a.createElement(ic,{setFieldValue:s,formValues:_})}]:[],...f?[{id:"advancedPortConfig",label:r.a.createElement(M.c,{id:"DEVICE_PORT_PROFILE_OVERRIDE"}),renderContent:()=>r.a.createElement(Kc,{initialValues:g,setFieldValue:s,setFieldTouched:d,portData:l,activeItem:t,formValues:_})}]:[]]})),r.a.createElement(yn,{isDirty:I,onFormSubmit:i,onFormCancel:U,allowCancel:!0}))})),pr={op_mode:"switch",dot1x_ctrl:"force_authorized",autoneg:!0,dot1x_idle_timeout:300,full_duplex:void 0,speed:void 0,lldpmed_enabled:!0,stp_port_mode:!0,stp_bpdu_guard:!1,stp_loopback_detection:!1,stp_root_guard:!1,egress_rate_limit_kbps_enabled:!1,port_security_enabled:!1,port_security_mac_address:[],linkNegotiationOptions:{autoneg:{id:"autoneg",label:"DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO",autoneg:!0,speed:void 0,full_duplex:void 0},"10000 FDX":{id:"10000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e4,full_duplex:!0},"2500 FDX":{id:"2500 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:2500,full_duplex:!0},"1000 FDX":{id:"1000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e3,full_duplex:!0},"100 FDX":{id:"100 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:100,full_duplex:!0},"100 HDX":{id:"100 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:100,full_duplex:!1},"10 FDX":{id:"10 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:10,full_duplex:!0},"10 HDX":{id:"10 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:10,full_duplex:!1}}};const br=Object(l.c)(F.a)`
  margin-bottom: 24px;
  &:nth-of-type(3) {
    padding-top: 24px;
  }
`,Or=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`;var Ir=({port:e,groupOptions:t,speedOptions:a,group:n})=>r.a.createElement(br,{justifyContent:"space-between"},r.a.createElement(Or,null,r.a.createElement(Jn.Field,{type:"dropdown",name:`ports[${e.portIdx-1}].networkGroup`,label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",translateLabel:!0,translateLabelValues:{port:e.portIdx,networkGroup:n},options:t,validated:!0,full:!0})),a.length>0&&r.a.createElement(Or,null,r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_GATEWAY_PORTS_SPEED_DUPLEX",name:`ports[${e.portIdx-1}].speed`,type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:a})));var gr=Object(M.f)(({activeItem:e,ports:t,intl:a})=>{const{subPanelId:l}=Object(n.m)(),i=Object(o.useSelector)(un.selectNetworkGroups),E=t=>{const{supportedValues:a=[]}=Object(_c.d)(e,t.ifname);return a.filter(e=>!!pr.linkNegotiationOptions[e]).map(e=>{const{speed:t=0,full_duplex:a=!1,autoneg:n}=pr.linkNegotiationOptions[e],{value:c,unit:r}=Object(Xt.d)(1e6*t/8,"bitrate"),l=`${c}${r}`;return{label:n?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!n&&{speed:l}}})},s=Object(c.useMemo)(()=>l===oe.WAN?[]:i.filter(({id:e})=>e.startsWith("LAN")),[l,i]),m=e=>[...[...i.filter(({id:e})=>e.startsWith("WAN")&&e!==un.NetworkHiddenId.WAN_LTE_FAILOVER),...s].filter(({id:a})=>((e,t,a)=>!t.some(({networkGroup:t})=>t===e)||e===a.networkGroup)(a,t,e)).map(({id:e})=>({value:e,label:e})),{value:O.DISABLED_PORT,label:a.formatMessage({id:"COMMON_DISABLED"})}],d=t.filter(({isWanPort:e,media:t})=>l===oe.WAN?e:!O.SFP_MEDIA_TYPES.includes(t)),_=t.filter(({media:e})=>l!==oe.WAN&&O.SFP_MEDIA_TYPES.includes(e));return r.a.createElement(r.a.Fragment,null,d.map(e=>r.a.createElement(Ir,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.defaultNetworkGroupLabel,key:e.portIdx})),_.map(e=>r.a.createElement(Ir,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.media||e.defaultNetworkGroupLabel,key:e.portIdx})))});const hr=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 40px;
  padding: 12px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,Cr=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
`,Rr=Object(l.c)(F.a)`
  width: 100%;
  padding: 16px 30px;
`,vr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,fr=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.warning};
`;const Tr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,Dr=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.danger};
`,yr=Object(Ja.g)({mapPropsToValues:e=>{const{networkGroups:t,activeItem:a}=e;return{ports:xc(a,t).map((e,t)=>{const{supportedValues:n=[]}=Object(_c.d)(a,e.ifname),c=e.autoneg?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:e.speed,full_duplex:e.full_duplex});return{...e,networkGroup:e.networkGroup||O.DISABLED_PORT,...n.length?{speed:c}:{},itemIndex:t}})}},validationSchema:({intl:e,activeItem:t,params:a})=>{const n=(null==a?void 0:a.subPanelId)===oe.ALL;return Qa.a.object().shape({ports:Qa.a.array().of(Qa.a.object().shape({networkGroup:Qa.a.string().label(e.formatMessage({id:"COMMON_WORD_INTERFACE"})).oneOf([se.a.WAN,se.a.WAN2,O.DISABLED_PORT,...Object(_c.a)(t)]).required()})).test("has-default-network-groups",r.a.createElement(Tr,null,r.a.createElement(Dr,{width:19,height:19}),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:n?"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_OR_LAN_WARNING":"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_WARNING"}))),e=>e.some(e=>e.networkGroup===se.a.WAN)&&(!n||e.some(e=>e.networkGroup===un.NetworkHiddenId.LAN)))})},handleSubmit:({ports:e},{props:{networkGroups:t,updateDeviceWithIdEndpoint:a,activeItem:{_id:n,port_overrides:c=[],ethernet_table:r,mac:l},activeItem:i,history:o,intl:E}})=>{const s=xc(i,t),m=E.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),d=[...e.map(e=>{const{speed:t,full_duplex:a}=JSON.parse(e.speed),{speed:n,full_duplex:r,...l}=(null==c?void 0:c.find(t=>t.port_idx===e.portIdx))||{};return{...l,...t?{speed:t,full_duplex:a}:{},port_idx:e.portIdx,autoneg:!t}}),...null==c?void 0:c.filter(t=>!e.some(e=>e.portIdx===t.port_idx))],_=[];s.forEach(t=>{const a=e.find(e=>e.ifname===t.ifname);if(a){if(a.networkGroup===O.DISABLED_PORT)return;_.push({ifname:a.ifname,networkgroup:a.networkGroup})}else _.push({ifname:t.ifname,networkgroup:t.networkGroup})}),a({port_overrides:d,ethernet_overrides:_},n,l,{successToast:{icon:ra.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:m}},mergeAndOverrideKeys:["port_overrides","ethernet_overrides"],extend:!0}).then(()=>{o.goBack()})}}),Pr={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var Sr=Object(vt.compose)(Object(o.connect)(e=>({networkGroups:Object(un.selectNetworkGroups)(e)}),Pr),M.f,yr)((function({activeItem:e,history:t,submitForm:a,resetForm:n,values:l,dirty:i,setFieldValue:E,errors:s}){const m=Object(o.useSelector)(un.selectNetworkGroups),{networkGroups:d}=Object(O.getDeviceSpecs)(e),_=()=>{n(),t.goBack()},u=Object(c.useMemo)(()=>l.ports.some(e=>JSON.parse(e.speed).speed),[l.ports]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Rr,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(hr,{alignItems:"center"},r.a.createElement(w.f,{onClick:_,style:{cursor:"pointer"}}),r.a.createElement(Cr,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))),r.a.createElement(gr,{activeItem:e,ports:l.ports}),r.a.isValidElement(s.ports)&&s.ports,u&&r.a.createElement(vr,null,r.a.createElement(fr,{width:19,height:19}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_SPEED_WARNING"})))),r.a.createElement(yn,{isDirty:i,onFormSubmit:a,onFormCancel:_,onFormReset:()=>{E("ports",l.ports.map(e=>{const t=m.find(t=>t.id===d[e.ifname]);return{...e,networkGroup:(null==t?void 0:t.id)||O.DISABLED_PORT,autoneg:!0,speed:JSON.stringify({speed:0,full_duplex:!1})}}))},submitButtonText:"COMMON_ACTION_APPLY",allowCancel:!0}))}));const Ar=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,jr=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
  padding: 0 50px;
`,Nr=Object(l.c)(F.a)`
  padding: 30px;
`,xr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,Lr=Object(l.c)(xr)`
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Vr=Object(l.c)(V.a)`
  display: flex;
`,wr=Object(l.c)(V.a)`
  margin-bottom: 3px;
`,Mr=Object(l.c)(bn.a)`
  margin-left: 8px;
  margin-top: -2px;
`,Fr=l.a`
  margin-left: 15px;
`,Ur=Object(l.c)(de.a)`
  margin-top: 12px;
  justify-content: flex-end;
`,Br=Object(Ja.g)({mapPropsToValues:({outletInfo:{name:e,cycle_enabled:t,relay_state:a}})=>({name:e||"",cycle_enabled:t,relay_state:a}),validationSchema:Qa.a.object().shape({name:Qa.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),cycle_enabled:Qa.a.boolean(),relay_state:Qa.a.boolean()}),handleSubmit:(e,{props:{outletInfo:t,updateDeviceWithIdEndpoint:a,history:n,activeItem:c,activeItem:{mac:r,_id:l,outlet_overrides:i}}})=>{const o=Object(O.isUspPduPro)(c);a({outlet_overrides:[...i.filter(e=>e.index!==t.index),{index:t.index,...e}].map(a=>t.index===Object(O.getTwinOutletIndex)(a,o)?{...a,relay_state:e.relay_state}:a).sort((e,t)=>e.index-t.index)},l,r,{successToast:{icon:ra.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["outlet_overrides"],extend:!0}).then(()=>{n.goBack()})}}),zr={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var kr=Object(vt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({outletInfo:Object(O.getActiveOutletInfo)(t,void 0,+a)}),zr),Br)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:c,activeItem:l})=>{const i=Object(o.useDispatch)(),E=()=>{n(),c.goBack()},s=Object(O.isUspPduPro)(l),m=Object(O.getTwinOutletIndex)(a,s),d=Object(Gn.n)(a,"POWER_METER");return r.a.createElement(r.a.Fragment,null,r.a.createElement(Nr,{flexDirection:"column",width:"100%",height:"100%"},r.a.createElement(Ar,{alignItems:"center"},r.a.createElement(w.f,{onClick:E,style:{cursor:"pointer"}}),r.a.createElement(jr,{size:"body",weight:"bold",truncate:!0},a.name)),r.a.createElement(xr,{flexDirection:"column",justifyContent:"space-between"},r.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),r.a.createElement(xr,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(Vr,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"}),m&&r.a.createElement(Mr,{position:"topRight",portal:!0,width:150,tooltipClassName:Fr,message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_TOOLTIP_LABEL_TWIN_RELAY_STATE",values:{index:m}})},r.a.createElement(w.W,{isActive:!0}))),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"relay_state"})),r.a.createElement(xr,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"cycle_enabled"})),r.a.createElement(xr,{flexDirection:"column"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"tertiary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"})),r.a.createElement(Ur,{variant:"link",onClick:()=>i(Object(O.powerCycleOutlet)(l,a)),Icon:r.a.createElement(w.Ab,null)},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))),d&&r.a.createElement(Lr,{flexDirection:"column"},a.outlet_power&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(a.outlet_power).toFixed(2)}}))),!1,a.outlet_current&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(a.outlet_current||0).toFixed(2)}}))),a.outlet_voltage&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(a.outlet_voltage).toFixed(2)}}))),a.outlet_power_factor&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(wr,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),r.a.createElement(V.a,{size:"body",color:"secondary"},Number(a.outlet_power_factor).toFixed(2))))),r.a.createElement(yn,{isDirty:e,onFormSubmit:t,onFormCancel:E,allowCancel:!0}))});const Wr=Object(l.c)(F.a)`
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
`,$r=Object(l.c)(F.a)`
  padding: 30px;
`,Gr=Object(l.c)(F.a)`
  margin-bottom: 24px;
`,Yr=Object(l.c)(V.a)`
  display: flex;
`,Xr=Object(Ja.g)({mapPropsToValues:({outletInfo:{name:e,port_mode:t}})=>({name:e||"",portModeAuto:t===O.RpsPortMode.AUTO}),validationSchema:Qa.a.object().shape({name:Qa.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),portModeAuto:Qa.a.boolean()}),handleSubmit:({portModeAuto:e,...t},{props:{outletInfo:a,updateDeviceWithIdEndpoint:n,history:c,activeItem:{rps_override:r,mac:l,_id:i}}})=>{var o;const E=[{port_idx:a.port_idx,port_mode:e?O.RpsPortMode.AUTO:O.RpsPortMode.DISABLED,...t},...null!==(o=null==r?void 0:r.rps_port_table.filter(e=>e.port_idx!==a.port_idx))&&void 0!==o?o:[]];n({rps_override:{...r,rps_port_table:E}},i,l,{successToast:{icon:ra.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["rps_override"],extend:!0}).then(()=>{c.goBack()})}}),Kr={updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint};var Zr=Object(vt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({outletInfo:Object(O.getActiveRpsOutletInfo)(t,+a)}),Kr),Xr)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:c,setFieldValue:l,values:i})=>{const o=()=>{n(),c.goBack()};return r.a.createElement(r.a.Fragment,null,r.a.createElement($r,{flexDirection:"column",width:"100%",height:"100%"},r.a.createElement(Wr,{alignItems:"center"},r.a.createElement(w.f,{onClick:o,style:{cursor:"pointer"}}),r.a.createElement(Hr,{weight:"bold"},a.name)),r.a.createElement(Gr,{flexDirection:"column",justifyContent:"space-between"},r.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),r.a.createElement(Gr,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(Yr,{weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"portModeAuto"}))),r.a.createElement(yn,{isDirty:e,onFormSubmit:t,onFormCancel:o,allowCancel:!0}))});const qr=(e,t)=>e?e.map(e=>{const a=t.find(t=>t.mac===e.mac);return{...e,id:null==a?void 0:a._id,name:Object(G.c)(a),deviceData:a,model:Object(G.e)(null==a?void 0:a.model)}}):[],Jr=Object(l.c)(F.a)`
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
`;function el({activeItem:{downlink_table:e},params:t,path:a,history:c}){const{site:l,page:i,subPage:E}=t,s=Object(o.useSelector)(O.selectDevicesData),m=Object(o.useDispatch)(),_=[{id:"port_idx",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_PORT"})),minWidth:50,renderCell:e=>r.a.createElement(V.a,{size:"body"},e.port_idx)},{id:"name",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_DEVICE"})),renderCell:e=>r.a.createElement(Qr,{size:"body",truncate:!0},e.name===e.mac&&e.model?e.model:e.name),minWidth:90},{id:"statusInfo",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_SPEED"})),renderCell:e=>r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_DEVICE_DUPLEX_FULL",values:{speed:e.speed}})),minWidth:60},{id:"model",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK_MODEL"})),minWidth:80,renderCell:e=>r.a.createElement(V.a,{truncate:!0,size:"body"},e.model)}];return r.a.createElement(Jr,null,r.a.createElement(Te.a,{items:qr(e,s),disableColumnFilters:!0,initialSortBy:"port_idx",columns:_,renderFooter:()=>r.a.createElement("div",null,e&&e.length>0?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}}):r.a.createElement(M.c,{id:"COMMON_DEVICES_NOT_FOUND"})),rowHeight:30,onRowClick:({mac:e})=>{const t=Object(n.i)(a,{id:e,site:l,page:i,panel:"overview",subPage:E});c.push(t),m(Object(N.g)({type:d.b.DEVICE,mac:e}))}}))}var tl=a(668),al=a(1746);const nl=e=>"alwayson"===Object(O.getDeviceModelFeature)(e,"fan")?0:1,cl=e=>"simple"===Object(O.getDeviceModelFeature)(e,"fan");var rl=({activeItem:{"system-stats":{mem:e}={}}})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMORY_USAGE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e,"%")):null;var ll=({switchDeviceData:{general_temperature:e,uptime:t,has_temperature:a,overheating:n,power_source_voltage:c,has_fan:l,fan_level:i,sys_stats:o},switchDeviceData:E})=>{const s=(m=E)&&m.port_table?m.port_table.reduce((e,t)=>e+parseFloat(Object(dt.a)(t,"poe_power","0.0")),0):0;var m;const d=i>=nl(E);return r.a.createElement(ye.g,{height:"100%",flexDirection:"column"},c&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_SOURCE_VOLTAGE_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_SOURCE_VOLTAGE_VALUE",values:{voltage:c}}))),a&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:e}}),n&&r.a.createElement(bn.a,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_OVERHEATING"}),width:180,position:"left",className:"ml-1",style:{display:"inline-block",verticalAlign:"text-bottom"}},r.a.createElement(w.a,{style:{color:we.a["color-danger"]}}))))),l&&!cl(E)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_LEVEL"})),r.a.createElement(V.a,{size:"body"},d?i:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"})))),l&&cl(E)&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_STATE"})),r.a.createElement(V.a,{size:"body"},d?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_ON"}):r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"}))),t>0&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),r.a.createElement(V.a,{size:"body"},Object(Kt.c)(t,!0))),r.a.createElement(rl,{activeItem:E}),o&&o.loadavg_1&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement(V.a,{size:"body"},Object(O.getDeviceLoadAverage)(E))),s>0&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_CONSUMPTION_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POE_POWER_CONSUMPTION_VALUE",values:{power:s.toFixed(2)}}))))};var il=({uplink:e,portSpeed:t})=>{const a=Number(t||(null==e?void 0:e.speed));return a>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},`${Object(Rt.b)(a)} ${10===a||100===a?`(${a} Mbps)`:""}`)):null};const ol=Object(l.c)("div")`
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
`;function sl({switchDeviceData:e,showSimplifiedActivity:t,params:a,path:c,history:l}){const i=Object(o.useSelector)(O.selectDevicesData),{site:E,page:s,subPage:m}=a,{speed:_,rx_packets:u,rx_bytes:p,tx_packets:b,tx_bytes:I,port_idx:g,"rx_bytes-r":h,"tx_bytes-r":C}=Object(O.getUplinkAttrs)(e)||{},R=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),v=Object(O.getUplinkRemotePort)(i,e),f=Object(O.getUplinkDisplayName)(e,R),T=Object(o.useDispatch)();return r.a.createElement(ol,null,r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),(null==R?void 0:R.mac)?r.a.createElement(El,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(c,{id:R.mac,site:E,page:s,panel:"overview",subPage:m});l.push(t),T(Object(N.g)({type:d.b.DEVICE,mac:R.mac}))}},f):r.a.createElement(M.c,{id:"COMMON_HYPHEN"})),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),r.a.createElement(V.a,{size:"body"},g)),r.a.createElement(il,{portSpeed:_}),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==v?void 0:v.poe_power)||0}}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},u&&p?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{type:"number",input:u,size:"body"})," / ",Object(Xt.c)(p)):"- / -")),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},b&&I?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{type:"number",input:b,size:"body"})," / ",Object(Xt.c)(I)):"- / -")),t?r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",input:C+h||0,options:"bitrate"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"bytes",input:h||0,options:"bitrate",size:"body"}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"bytes",input:C||0,options:"bitrate",size:"body"})))))}var ml=function(e){let t=parseFloat(""+e);return t?(t=Math.min(45,Math.max(t,5)),t=(t-5)/40*99,""+(0===t?"0":t.toPrecision(2))):""};var dl=function(e){return"number"==typeof e?e-95:0},_l=a(376);const ul=Object(l.c)("div")`
  height: 100%;
`,pl=l.a`
  th {
    padding-right: 0;
  }
`,bl=l.a`
  :hover {
    cursor: pointer;
  }

  td {
    padding-right: 25px;
  }
`,Ol=Object(l.c)("div")`
  margin: 20px 0;
`,Il=[{id:"name",sortable:!0,minWidth:30,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"})),renderCell:e=>r.a.createElement(V.a,{size:"body",color:"info",truncate:!0},Object(I.getClientDisplayName)(e))},{id:"connection",sortable:!0,minWidth:40,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_CONNECTION"})),renderCell:e=>r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},Object(I.getConnection)(e))},{id:"signal",sortable:!0,minWidth:25,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_SIGNAL"})),renderCell:e=>{let t;return"rssi"in e&&({rssi:t}=e),t?r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},ml(t)," (",dl(t)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")"):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))}},{id:"tx_rate",sortable:!0,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_TX_RATE"})),renderCell:e=>{let t;return"tx_rate"in e&&({tx_rate:t}=e),t?r.a.createElement(me.a,{truncate:!0,size:"body",type:"bytes",input:1e3*t,color:"secondary",options:"bitrate"}):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))}}];var gl=Object(vt.compose)(Object(o.connect)(e=>({clientsExist:Object(I.selectClientsDataExist)(e)}),{fetchClients:I.fetchClients}),Object(_l.c)(({clientsExist:e,fetchClients:t})=>e||t()))(({activeItem:e,params:t,path:a,history:l})=>{const{site:i,page:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(Object(I.selectClientsByDevice)(e)),_=Object(x.a)("/clients/properties/:mac/overview"),u=Object(c.useCallback)(e=>{if("mac"in e){const{mac:t,unifi_device:c}=e;c?(l.push(Object(n.i)(a,{id:t,page:E,panel:"overview",section:"properties",site:i})),s(Object(N.g)({type:d.b.UNIFI_DEVICE_CLIENT,mac:t}))):l.push(_.replace(":mac",t))}},[s,l,a,_,E,i]);return r.a.createElement(ul,null,r.a.createElement(Te.a,{items:m,disableColumnFilters:!0,headerRowClassName:pl,rowClassName:bl,columns:Il,initialSortBy:"name",renderFooter:()=>m.length>0?r.a.createElement(Ol,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:u}))});var hl=({activeItem:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Al,{activeItem:e}),r.a.createElement(Nl,{activeItem:e}),r.a.createElement(Ml,{activeItem:e,withLink:!0}),r.a.createElement(Vl,{activeItem:e,withLink:!0})),Cl=a(790),Rl=a(530),vl=a(210),fl=a.n(vl);const Tl=Object(l.c)(ye.g,{shouldForwardProp:e=>!["borderColor","backgroundColor","dividerColor","standalone"].includes(e)})`
  background-color: ${({backgroundColor:e})=>e};
  border-left: 2px solid ${({borderColor:e})=>e};
  padding: ${({standalone:e})=>e?"6px 18px 0 0":"16px 16px 16px 0"};

  & + & {
    border-top: 1px solid ${({dividerColor:e})=>e};
  }

  ${({standalone:e,dividerColor:t})=>e&&`\n    border: 1px solid ${t};\n    margin-bottom: 4px;\n  `}
`,Dl=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
`,yl=Object(l.c)(ye.g)`
  padding-top: 5px;
  min-width: 70px;
  max-width: 70px;
`;var Pl=({level:e,children:t,standalone:a})=>{const n=Object(x.m)(),{icon:c,backgroundColor:l,borderColor:i,dividerColor:o}=((e,t)=>"warning"===e?{icon:Dl,backgroundColor:fl()(t.motifPalette.warning).alpha(.04).css(),borderColor:t.motifPalette.warning,dividerColor:fl()(t.motifPalette.warning).alpha(.2).css()}:{icon:w.Xb,backgroundColor:fl()(t.motifPalette.info).alpha(.05).css(),borderColor:t.motifPalette.info,dividerColor:fl()(t.motifPalette.info).alpha(.2).css()})(e,n);return r.a.createElement(Tl,{flexDirection:"row",width:"100%",backgroundColor:l,borderColor:i,dividerColor:o,standalone:a},r.a.createElement(yl,{justifyContent:"center"},r.a.createElement(c,{width:24,height:24})),r.a.createElement(ye.g,{flexDirection:"column",justifyContent:"center"},t))};const Sl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Al=({activeItem:e})=>{const t=Object(o.useSelector)(re.d),a=!!(t&&e.model_eol_version&&Object(Rl.a)(t,">= "+e.model_eol_version));return e.model_in_eol?r.a.createElement(Pl,{level:"warning"},a&&r.a.createElement(Sl,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_EOL_WARNING_NO_CONFIGURING",values:{date:r.a.createElement(Cl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Sl,{size:"caption"},r.a.createElement(M.c,{id:e.model_eol_date?"DEVICE_PROPERTIES_EOL_WARNING":"DEVICE_PROPERTIES_EOL_WARNING_NO_DATE",values:{date:r.a.createElement(Cl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),!!e.model_eol_version&&r.a.createElement(Sl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_EOL_WARNING_CONTROLLER_UPGRADE",values:{controllerVersion:e.model_eol_version}}))),r.a.createElement("a",{href:_e.a.eolLearnMore,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.c,{id:"COMMON_LEARN_MORE"}))):null};const jl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Nl=({activeItem:e})=>e.model_in_lts?r.a.createElement(Pl,{level:"info"},r.a.createElement(jl,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LTS_WARNING",values:{date:r.a.createElement(Cl.c,{date:e.model_eol_date,dateFormat:"MMM D, YYYY"})}})),e.model_eol_version&&r.a.createElement(jl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LTS_WARNING_CONTROLLER_UPGRADE",values:{controllerVersion:e.model_eol_version}})),r.a.createElement("a",{href:_e.a.ltsLearnMore,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.c,{id:"COMMON_LEARN_MORE"}))):null,xl=a(2009);const Ll=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Vl=({activeItem:e,withLink:t,standalone:a})=>{const n=Object(o.useSelector)(xl.selectHasCloudBackupEnabled),c=Object(o.useSelector)(m.b),l=Object(o.useSelector)(m.f),i=c.replace(/\/network\/?/,_e.a.ucoreAdvancedSettings);return Object(x.f)([Object(xl.fetchUcoreGeneralInfo)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})].filter(()=>!l),!n&&Object(O.hasActiveUnifiCare)(e)?r.a.createElement(Pl,{level:"warning",standalone:a},r.a.createElement(Ll,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_UNIFI_CARE_CLOUD_BACKUP_ENABLE_WARNING"})),t&&r.a.createElement(Ll,{size:"caption"},r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_UNIFI_CARE_CLOUD_BACKUP_ENABLE_NAVIGATE",values:{url:i}}))):null)};const wl=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var Ml=({activeItem:e,withLink:t,standalone:a})=>{const n=Object(o.useSelector)(xl.selectHasCloudAccessEnabled),c=Object(o.useSelector)(m.b),l=Object(o.useSelector)(m.f),i=c.replace(/\/network\/?/,_e.a.ucoreAdvancedSettings);return Object(x.f)([Object(xl.fetchUcoreGeneralInfo)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})].filter(()=>!l),!n&&Object(O.hasActiveUnifiCare)(e)?r.a.createElement(Pl,{level:"warning",standalone:a},r.a.createElement(wl,{size:"caption",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_UNIFI_CARE_REMOTE_ACCESS_ENABLE_WARNING"})),t&&r.a.createElement(wl,{size:"caption"},r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_UNIFI_CARE_REMOTE_ACCESS_ENABLE_NAVIGATE",values:{url:i}}))):null)};const Fl=Object(l.c)(F.a)`
  padding: 24px 32px 24px 0 !important;
  flex-shrink: 0;
`,Ul=Object(l.c)(V.a)`
  max-width: 150px;
`,Bl=Object(l.c)(V.a)`
  max-width: 100px;
`;var zl=r.a.memo(({device:e})=>{const{model:t,mac:a,displayable_version:n,ip:c,type:l,lan_ip:i}=e,o=Object(G.a)(e);return r.a.createElement(Fl,null,r.a.createElement(F.a,{minWidth:157,maxWidth:157,justifyContent:"center",alignItems:"center"},r.a.createElement(F.a,{minWidth:125,maxWidth:125,height:125,padding:"16px",alignItems:"center",justifyContent:"center"},r.a.createElement(U.c,{device:{model:t,type:l},filesMap:"GRID",width:"100%"}))),r.a.createElement(F.a,{width:211,flexDirection:"column",justifyContent:"center"},o&&r.a.createElement(qt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_MODEL"})),r.a.createElement(Ul,{size:"body",truncate:!0},o)),a&&r.a.createElement(qt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_MAC_ADDRESS"})),r.a.createElement(V.a,{size:"body"},a)),c&&r.a.createElement(qt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_IP"})),r.a.createElement(V.a,{size:"body"},i||c)),n&&r.a.createElement(qt,{flexProps:{alignItems:"center"}},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_FIRMWARE_VERSION"})),r.a.createElement(Bl,{size:"body",truncate:!0},n))))},(e,t)=>e.device.model===t.device.model&&e.device.hostname===t.device.hostname&&e.device.mac===t.device.mac&&e.device.displayable_version===t.device.displayable_version&&e.device.ip===t.device.ip);const kl=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Wl=a(475),Hl=a(1916),$l=a(18),Gl=a(1975);const Yl=Object(l.c)(V.a)`
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
`,Xl=l.a`
  margin-bottom: 32px;
`,Kl=Object(Hl.a)(6,e=>({value:e,label:e.toString()})).reverse(),Zl=(e,t,a,n,c)=>0!==t&&5!==t?null:r.a.createElement("line",{x1:a,x2:n,y1:0,y2:0,className:c}),ql=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var Jl=Object(_n.b)(r.a.memo(({gwMac:e,keys:t,pickDatumsWithKey:a,heading:n,forUdm:c,theme:l})=>{const i=Object(o.useSelector)(Object(De.selectDeviceStatReport)(e,De.fetchDeviceUsageReport,De.OBJECT.GW)),E=Object(o.useSelector)(Object(De.selectDeviceStatReport)(e,De.fetchDeviceUsageReport)),s=Object(o.useSelector)($l.O),m="ap"===a?"gradientArea":"line",d=Date.now(),_=Object(ft.startOfHour)(Object(ft.addHours)(d,1)).getTime(),u=s?"H:ss":"ha",p=Object(Gl.b)(_,u);p[p.length-1].label="";const b=p[0].value,O={};let I=0,g=i;c&&(g=E.reduce((e,t)=>{const a={...t};return a.gw?e:a.sw?(e[I].num_sta+=a.num_sta,I+=1,e):(e.push(a),e)},[])),a&&(g=E.filter(e=>e[a]));Object(Wl.m)(g.filter(e=>e.time>b).map(e=>({...e,x:e.time})),St.a.MINUTES.grain).forEach(e=>{t.forEach(t=>{O[t]||(O[t]={key:t,isDashed:"mem"===t,variant:"mem"===t?m:"gradientArea",lineColor:"mem"===t?"purple":"blue",maxY:0,data:[]}),O[t].data.push({x:e.x,y:e[t]})})});const h=t.map(e=>O[e]?O[e].data.map(e=>e.y||0):0),C=Math.max(...h.flat(),4);let R=Kl;return C>5&&(R=Object(Gl.e)(C,6)),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between",className:Xl,marginTop:"10px"},r.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},r.a.createElement(M.c,{id:n})),t.length>1&&r.a.createElement(F.a,null,r.a.createElement(Yl,{legendcolor:l.colors.blue,bordertype:"solid"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_CPU"}))),r.a.createElement(Yl,{legendcolor:l.colors.purple,bordertype:"dotted"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_MEMORY"}))))),r.a.createElement(Tt.a,{xAxis:p,yAxis:R,width:336,height:120,margin:[0,0,20,30],xLabelsBetween:!0,renderYGridLine:Zl,labelClassName:ql(l),renderChartElements:(e,a,n)=>r.a.createElement(r.a.Fragment,null,t.map(t=>O[t]&&O[t].data.length&&r.a.createElement(Dt.a,{key:O[t].key,data:O[t].data,maxY:n,mouseData:a,getCoordinates:e,variant:O[t].variant,lineColor:l.colors[O[t].lineColor],dashed:O[t].isDashed,hideMissingData:!0})))}))},(e,t)=>e.gwMac===t.gwMac));var Ql=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const ei=Object(l.c)(ye.g)`
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
`;var li=Object(Ja.g)({mapPropsToValues:({activeItem:{name:e,mac:t}={}})=>({name:e!==t?e:""}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:n,isValid:l,values:i,resetForm:E,formName:s="general"})=>{const d=Object(o.useDispatch)(),_=Object(o.useSelector)(m.b),u=Object(O.isUdm)(e);Object(c.useEffect)(()=>(d(Object(N.h)({[s]:()=>u?{}:i})),d(Object(N.j)({[s]:()=>E({values:i})})),d(Object(N.i)({[s]:E})),()=>{d(Object(N.h)({[s]:null})),d(Object(N.j)({[s]:null})),d(Object(N.i)({[s]:null}))}),[d,E,i,u,s]),Object(c.useEffect)(()=>{t(s,n),a(s,!l)},[t,n,a,l,s]);const p=_.replace(/\/network\/?/,_e.a.ucoreSettings);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ni,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DEVICE_NAME",name:"name",full:!0,disabled:u}),u&&r.a.createElement(ri,null,r.a.createElement(ci,null),r.a.createElement(M.b,{id:"DEVICE_PROPERTIES_NAME_LINK_UNIFI_OS",values:{link:p}}))))}),ii=a(2896),oi=a(529),Ei=a(50);const si=Object(l.c)(ye.g)`
  margin-bottom: 24px;
`,mi=Object(l.c)(ye.g)`
  margin-bottom: 8px;
`,di=Object(l.c)(V.a)`
  display: flex;
  flex: 1;
  margin-right: 12px;
`,_i=l.a`
  margin-left: 11px;
`,ui=Object(l.c)(w.W)`
  margin: 0 6px;
`,pi=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,bi=e=>({hour:Number(e.split(":")[0]),min:Number(e.split(":")[1])}),Oi=e=>`${e.hour.toString().padStart(2,"0")}:${e.min.toString().padStart(2,"0")}`,Ii=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e,activeItem:{lcm_brightness:t=O.DEFAULT_LCM_BRIGHTNESS,lcm_brightness_override:a=!1,lcm_night_mode_begins:n=O.DEFAULT_LCM_NIGHT_MODE_BEGINS,lcm_night_mode_ends:c=O.DEFAULT_LCM_NIGHT_MODE_ENDS}})=>({lcm:e,lcm_brightness:t,lcm_brightness_override:a,lcm_night_mode_begins:bi(n),lcm_night_mode_ends:bi(c)}),validationSchema:gn.a.object().shape({lcm:gn.a.object().shape({sync:gn.a.boolean()}),lcm_brightness_override:gn.a.boolean(),lcm_brightness:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required(),lcm_night_mode_begins:gn.a.object().shape({hour:gn.a.number(),min:gn.a.number()}),lcm_night_mode_ends:gn.a.object().shape({hour:gn.a.number(),min:gn.a.number()})}),handleSubmit:()=>null}),gi={saveSettings:Ei.saveSettings};var hi=Object(vt.compose)(Object(o.connect)(e=>({lcmSettings:Object(Ei.selectLcmSettings)(e)}),gi),Ii)(({values:e,setFieldValue:t,resetForm:a,setFormDirty:n,setFormInvalid:l,dirty:i,isValid:E,initialValues:s})=>{const m=Object(o.useDispatch)();return Object(c.useEffect)(()=>{n("lcmScreen",i),l("lcmScreen",!E)},[n,l,E,i]),Object(c.useEffect)(()=>(m(Object(N.h)({lcmScreen:()=>({...e,lcm_brightness_override:e.lcm_brightness!==O.DEFAULT_LCM_BRIGHTNESS,lcm_night_mode_begins:Oi(e.lcm_night_mode_begins),lcm_night_mode_ends:Oi(e.lcm_night_mode_ends)})})),m(Object(N.j)({lcmScreen:()=>{Object(oi.a)(s.lcm,e.lcm)||m(Object(Ei.saveSettings)(e.lcm)),a({values:e})}})),m(Object(N.i)({lcmScreen:a})),()=>{m(Object(N.h)({lcmScreen:null})),m(Object(N.j)({lcmScreen:null})),m(Object(N.i)({lcmScreen:null}))}),[m,a,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(mi,null,r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"}))),r.a.createElement(si,null,r.a.createElement(ii.a,{size:"large",value:e.lcm_brightness||O.DEFAULT_LCM_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{size:"body"},e,"%"),onChange:e=>{t("lcm_brightness",+e.target.value)}})),r.a.createElement(si,{flexDirection:"column"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE_DESCRIPTION"}))),r.a.createElement(si,{justifyContent:"space-between"},r.a.createElement(pi,null,r.a.createElement(Jn.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_BEGINS",name:"lcm_night_mode_begins",full:!0})),r.a.createElement(pi,null,r.a.createElement(Jn.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_ENDS",name:"lcm_night_mode_ends",full:!0}))),r.a.createElement(si,{justifyContent:"space-between"},r.a.createElement(di,{color:"primary",size:"body"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),r.a.createElement(bn.a,{portal:!0,tooltipClassName:_i,position:"topRight",width:200,message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION_TOOLTIP"})},r.a.createElement(ui,{isActive:!0}))),r.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.sync"})))}),Ci=a(451),Ri=a(282);const vi=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`,fi=Object(l.c)(V.a)`
  flex: 1;
  margin-right: 12px;
`,Ti=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,Di=Object(l.c)(F.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
  justify-content: space-between;
`,yi=Object(l.c)(de.a)`
  span {
    margin-left: 3px !important;
  }
`,Pi=Object(l.c)(Jn.Field)`
  margin-right: 18px;
`,Si=Object(Ja.g)({mapPropsToValues:({switchDeviceData:e,nativeNetworks:t,radiusProfiles:a,radiusSettings:n})=>{const{jumboframe_enabled:c=!1,flowctrl_enabled:r=!1,stp_version:l="rstp",stp_priority:i="32768",dot1x_portctrl_enabled:o=!1,radiusprofile_id:E="",dot1x_fallback_networkconf_id:s="",snmp_location:m="",snmp_contact:d="",outdoor_mode_override:_=O.OutdoorModeOverride.DEFAULT,power_source_ctrl:u=O.POWER_SOURCE_OPTIONS.AUTO,power_source_ctrl_enabled:p=!1}=e;return{mgmt_network_id:Object(O.getDeviceNetworkId)(t,e),jumboframe_enabled:c,flowctrl_enabled:r,stp_version:l,stp_priority:i,dot1x_portctrl_enabled:o,radiusprofile_id:E,radiusProfiles:a,radiusSettings:n,dot1x_fallback_networkconf_id:s,snmp_location:m,snmp_contact:d,outdoor_mode_override:_,power_source_ctrl:u,power_source_ctrl_enabled:p}},validationSchema:Qa.a.object().shape({mgmt_network_id:Qa.a.string(),flowctrl_enabled:Qa.a.boolean(),stp_version:Qa.a.string(),stp_priority:Qa.a.string(),dot1x_portctrl_enabled:Qa.a.boolean(),snmp_contact:Qa.a.string(),snmp_location:Qa.a.string(),radiusprofile_id:Qa.a.string().when("dot1x_portctrl_enabled",{is:!0,then:Qa.a.string().isAllowedDefaultRadiusProfile("COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE").required("COMMON_VALIDATION_FIELD_REQUIRED")}),radiusProfiles:Qa.a.array().of(Qa.a.object()),radiusSettings:Qa.a.object(),dot1x_fallback_networkconf_id:Qa.a.string(),outdoor_mode_override:Qa.a.string(),power_source_ctrl:Qa.a.string(),power_source_ctrl_enabled:Qa.a.boolean()}),handleSubmit:()=>null}),Ai=[{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_STP",value:"stp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_RSTP",value:"rstp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_DISABLED",value:"disabled"}];var ji=Object(vt.compose)(Object(o.connect)((e,{activeItem:t})=>({nativeNetworks:Object(un.selectNativeNetworks)(e),switchDeviceData:Object(O.selectDeviceData)(e,t.mac),radiusOptions:Object(Ci.selectRadiusOptions)(e),radiusProfiles:Object(Ci.selectRadiusProfiles)(e),radiusSettings:Object(Ei.selectRadiusSettings)(e)}),{updateDevice:O.updateDevice,fetchRadiusProfiles:Ci.fetchRadiusProfiles}),M.f,Si,Object(_l.c)(({fetchRadiusProfiles:e})=>e()))(({activeItem:e,values:t,errors:a,resetForm:l,dirty:i,setFormDirty:E,setFormInvalid:s,setFieldValue:d,nativeNetworks:_=[],initialValues:u,radiusOptions:p,radiusProfiles:b,isValid:I,hideFlowControl:g,intl:h,formName:C="services"})=>{const R=Object(o.useDispatch)(),v=Object(n.k)(),f=Object(o.useSelector)(Ie.a),T=Object(o.useSelector)(m.j),D=Object(n.i)(T,{site:f}),y=Object(Gn.u)(e),P=Object(Gn.o)(e),S=Object(o.useSelector)(Ri.f),A=Object(O.getDeviceModelFeature)(e,"outdoorModeSupport")&&S,j=Object(O.isGateway)(e),x=Object(Gn.t)(e),L=null==b?void 0:b.length;Object(c.useEffect)(()=>{if((!t.radiusProfiles||!t.radiusProfiles.length)&&L){let{radiusprofile_id:e}=t;t.radiusprofile_id||p.find(e=>e.value===t.radiusprofile_id)||(e=p[0].value),l({values:{...u,radiusprofile_id:e,radiusProfiles:b}})}},[b]),Object(c.useEffect)(()=>{E(C,i),s(C,!I)},[s,E,i,I,C]),Object(c.useEffect)(()=>(R(Object(N.h)({[C]:()=>({snmp_contact:t.snmp_contact,snmp_location:t.snmp_location,...!j&&{mgmt_network_id:t.mgmt_network_id},...!g&&{jumboframe_enabled:t.jumboframe_enabled,flowctrl_enabled:t.flowctrl_enabled},...y&&{stp_version:t.stp_version,stp_priority:t.stp_priority},...P&&{dot1x_portctrl_enabled:t.dot1x_portctrl_enabled},...t.dot1x_portctrl_enabled&&P&&{radiusprofile_id:t.radiusprofile_id,dot1x_fallback_networkconf_id:t.dot1x_fallback_networkconf_id},...A&&{outdoor_mode_override:t.outdoor_mode_override},...x&&{power_source_ctrl:t.power_source_ctrl,power_source_ctrl_enabled:t.power_source_ctrl!==O.POWER_SOURCE_OPTIONS.AUTO}})})),R(Object(N.j)({[C]:()=>l({values:t})})),R(Object(N.i)({[C]:l})),()=>{R(Object(N.h)({[C]:null})),R(Object(N.j)({[C]:null})),R(Object(N.i)({[C]:null}))}),[e._id,R,l,t,C,P,y,j,g,A,x]);const U=Object(c.useMemo)(()=>_.map(e=>({value:e._id,label:e.name})),[_]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{width:"100%",flexDirection:"column",flex:"1 1 85%"},!j&&r.a.createElement(Ti,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:U,translateLabel:!0})),!g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Di,{marginBottom:8},r.a.createElement(fi,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_JUMBO_FRAMES"})),r.a.createElement(Jn.Field,{name:"jumboframe_enabled",type:"checkbox"})),r.a.createElement(Di,{marginBottom:16},r.a.createElement(fi,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_FLOW_CONTROL"})),r.a.createElement(Jn.Field,{name:"flowctrl_enabled",type:"checkbox"}))),y&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ti,{marginBottom:32},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SPANNING_TREE",name:"stp_version",full:!0,type:"dropdown",translateOptions:!0,translateLabel:!0,options:Ai})),r.a.createElement(vi,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SECURITY"})),"disabled"!==t.stp_version&&r.a.createElement(Ti,{marginBottom:16},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_PRIORITY",name:"stp_priority",type:"dropdown",full:!0,validated:!0,options:O.SPANNING_TREES.map(e=>({label:e,value:e})),translateLabel:!0}))),P&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Di,{marginBottom:32},r.a.createElement(fi,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL"})),r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL",name:"dot1x_portctrl_enabled",type:"checkbox"})),t.dot1x_portctrl_enabled&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ti,{marginBottom:16},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_RADIUS_PROFILE",name:"radiusprofile_id",type:"dropdown",full:!0,options:p,invalid:!!a.radiusprofile_id,translateLabel:!0}),!!a.radiusprofile_id&&r.a.createElement(Jn.ValidationMessage,{align:"left",visible:!0,translation:"COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE"})),r.a.createElement(Di,{alignSelf:"flex-end"},r.a.createElement(yi,{size:"small",type:"button",variant:"inline",onClick:()=>{v.push(`${D}${_e.a.advancedSettingsRadiusProfileForm}`)}},r.a.createElement(w.q,{height:20,width:20}),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CREATE_RADIUS_PROFILE"}))),r.a.createElement(Ti,{marginBottom:16},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_FALLBACK_VLAN",name:"dot1x_fallback_networkconf_id",type:"dropdown",full:!0,validated:!0,options:[{label:h.formatMessage({id:"COMMON_NONE"}),value:""},...U],translateLabel:!0})),r.a.createElement(Di,{alignSelf:"flex-end"},r.a.createElement(yi,{size:"small",type:"button",variant:"inline",onClick:()=>{v.push(`${D}${_e.a.networkSettingsForm}`)}},r.a.createElement(w.q,{height:20,width:20}),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CREATE_FALLBACK_VLAN"}))))),Object(Gn.k)(e)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(vi,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SNMP"})),r.a.createElement(Ti,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_LOCATION",name:"snmp_location",full:!0})),r.a.createElement(Ti,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_CONTACT",name:"snmp_contact",full:!0}))),x&&r.a.createElement(r.a.Fragment,null,r.a.createElement(vi,{weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_POWER_SOURCE"})),r.a.createElement(Ti,{marginBottom:A?24:0},r.a.createElement(Pi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.AUTO},r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_AUTO"}))),r.a.createElement(Pi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.POE_8023AF},r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_POE_8023AF"}))),r.a.createElement(Pi,{type:"radio",name:"power_source_ctrl",value:O.POWER_SOURCE_OPTIONS.POE_INJECTOR},r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_POWER_SOURCE_POE_INJECTOR"}))))),A&&r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"flex-start"},r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(fi,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE_DESCRIPTION"}))),r.a.createElement(Jn.Field,{type:"checkbox",name:"outdoor_mode_override",value:t.outdoor_mode_override===O.OutdoorModeOverride.ON,afterChange:e=>{d("outdoor_mode_override",e?O.OutdoorModeOverride.ON:O.OutdoorModeOverride.OFF)}}))))}),Ni=a(128);const xi=gn.a.object().shape({type:gn.a.string(),ip:gn.a.string().when("type",{is:"static",then:Qa.b.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),netmask:gn.a.string().when("type",{is:"static",then:Qa.c.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}).when("ip",(e,t)=>e?t.test("is-valid-subnet-mask",r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"}),t=>Object(Ni.h)(e,t)):t),gateway:gn.a.string().when("type",{is:"static",then:Qa.b.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns1:gn.a.string().when("type",{is:"static",then:Qa.b.required(r.a.createElement(M.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns2:Qa.b.when("dns1",{is:e=>!!e,then:Qa.b}),bonding_enabled:gn.a.boolean(),dnssuffix:gn.a.string(),mgmt_network_id:gn.a.string(),snmp_location:gn.a.string(),snmp_contact:gn.a.string()}),Li=Object(l.c)("div")`
  margin-bottom: 24px;
`,Vi=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,wi=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,Mi=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Fi=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{Object(O.getIsUsl8Mp)(e);const{config_network:t,ip:a,switch_vlan_enabled:n,lte_limit_enabled:c,lte_limit:r}=e,{type:l="dhcp",ip:i=a||"",netmask:o="",gateway:E="",dns1:s="",dns2:m="",dnssuffix:d="",bonding_enabled:_=!1}=t;return{config_network:{type:l,ip:i,netmask:o,gateway:E,dns1:s,dns2:m,dnssuffix:d,bonding_enabled:_},switch_vlan_enabled:n||!1}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Qa.a.object().shape({config_network:xi,lte_limit_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_LTE_DATA_LIMIT"),lte_limit:Qa.a.number().integer().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT").when("lte_limit_enabled",{is:!0,then:Qa.a.number().min(1).required().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT")})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:n,resetForm:l,isValid:i,initialValues:E,activeItem:s,formName:m="network"})=>{const d=Object(o.useDispatch)(),_=Object(O.getIsUapUswHybrid)(s),u=Object(O.getIsUsl8Mp)(s);return Object(c.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),Object(c.useEffect)(()=>(d(Object(N.h)({[m]:()=>{var e;const t={config_network:"static"===n.config_network.type?n.config_network:{type:"dhcp",bonding_enabled:n.config_network.bonding_enabled}};return _&&(t.switch_vlan_enabled=n.switch_vlan_enabled,E.switch_vlan_enabled&&!n.switch_vlan_enabled&&(null===(e=s.port_overrides)||void 0===e?void 0:e.length)&&(t.port_overrides=s.port_overrides.map(({portconf_id:e,...t})=>t))),t}})),d(Object(N.j)({[m]:()=>l({values:n})})),d(Object(N.i)({[m]:l})),()=>{d(Object(N.h)({[m]:null})),d(Object(N.j)({[m]:null})),d(Object(N.i)({[m]:null}))}),[d,l,n,m,s.port_overrides,E.switch_vlan_enabled,_]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Li,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Mi})),"static"===n.config_network.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),r.a.createElement(Vi,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0})))),(Object(O.isUapAcHd)(s)||Object(O.isUapAcShd)(s)||Object(O.isUapXg)(s)||Object(O.isUwbXg)(s))&&r.a.createElement(F.a,{marginBottom:16,justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_AGGREGATION"})),r.a.createElement(tn.a,{name:"config_network.bonding_enabled",type:"checkbox"})),_&&r.a.createElement(r.a.Fragment,null,r.a.createElement(wi,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_VLAN"})),r.a.createElement(F.a,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_VLAN"})),r.a.createElement(tn.a,{type:"checkbox",name:"switch_vlan_enabled"}))),u&&!1)}),Ui=a(2898);const Bi=Object(l.c)(F.a)`
  margin-bottom: 20px;
`,zi=Object(l.c)(V.a)`
  margin-bottom: 6px;
`,ki=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e,formName:t="screen"})=>({[t]:{led_override:e.led_override||O.LedOverride.ON,led_override_color_brightness:e.led_override_color_brightness||O.DEFAULT_LED_BRIGHTNESS,led_override_color:e.led_override_color||O.DEFAULT_LED_COLOR}}),validationSchema:Qa.a.object().shape({led_override:Qa.a.string(),led_override_color_brightness:Qa.a.number(),led_override_color:Qa.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Wi=Object(vt.compose)(M.f,ki)(({activeItem:e,setFormDirty:t,values:a,dirty:n,resetForm:l,setFieldValue:i,formName:E="screen",disableLedOverrideField:s,disableLedOverrideColor:m,disableLedBrightnessField:d,intl:_})=>{const u=Object(o.useDispatch)(),p=Object(Gn.j)(e);return Object(c.useEffect)(()=>{t(E,n)},[t,n,E]),Object(c.useEffect)(()=>(u(Object(N.h)({[E]:()=>{const e=Object(b.a)(a,E);return{...a[E],...e}}})),u(Object(N.j)({[E]:()=>{l({values:a})}})),u(Object(N.i)({[E]:l})),()=>{u(Object(N.h)({[E]:null})),u(Object(N.j)({[E]:null})),u(Object(N.i)({[E]:null}))}),[u,E,l,a]),r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement(Bi,{justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_LED"}))),r.a.createElement(tn.a,{type:"checkbox",name:E+".led_override",value:a[E].led_override===O.LedOverride.ON,afterChange:e=>{i(E+".led_override",e?O.LedOverride.ON:O.LedOverride.OFF)}})),!d&&p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"})),r.a.createElement(Bi,null,r.a.createElement(ii.a,{size:"large",value:a[E].led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{color:"secondary",size:"body"},e,"%"),onChange:e=>{i(E+".led_override_color_brightness",+e.target.value)}}))),!m&&p&&r.a.createElement(Bi,{justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(zi,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"})),r.a.createElement(Ui.a,{color:a[E].led_override_color,variant:"block",onChange:e=>{i(E+".led_override_color","hex"in e?e.hex:void 0)},hexLabel:_.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:r.a.createElement(de.a,{variant:"inline",onClick:()=>{i(E+".led_override_color",O.DEFAULT_LED_COLOR)}},r.a.createElement(M.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))});const Hi=Object(l.c)(de.a)`
  padding: 0;
  white-space: nowrap;
`;var $i=({device:e})=>{const{locating:t}=e,a=Object(o.useDispatch)(),n=Object(O.getDeviceState)(e);return r.a.createElement(Hi,{variant:"link",onClick:t=>{if(t.preventDefault(),t.stopPropagation(),Object(O.isUBB)(e)){const{peer_ubb:t}=e;t&&a(Object(O.locateDevice)(t))}a(Object(O.locateDevice)(e))},disabled:n!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:t?"DEVICE_ACTIONS_LOCATE_STOP":"DEVICE_ACTIONS_LOCATE_DEVICE"}))};const Gi=Object(l.c)(de.a)`
  padding: 0;
`;var Yi=({device:e})=>{const t=Object(O.getDeviceState)(e),a=Object(o.useSelector)($l.D)("API_DEVICE_RESTART"),n=Object(o.useDispatch)();return a&&r.a.createElement(Gi,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const a=Object(O.isSwitch)(e)&&Object(sc.isPoeSupported)(e),c=a||Object(O.isGateway)(e),r=!e.bypassConfirmRestart;n(c||r?Object(O.confirmDeviceRestart)({name:e.name||e.mac,withHardReboot:a,onConfirm:(t="soft")=>{n(Object(O.restartDevice)(e,t))},onCancel:()=>{n(Object(Ut.e)())}}):Object(O.restartDevice)(e))},disabled:t!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_RESTART"}))};const Xi=Object(l.c)(de.a)`
  padding: 0;
`;var Ki=({device:e})=>{const t=Object(O.getDeviceState)(e),a=Object(o.useDispatch)();return r.a.createElement(Xi,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation(),a(Object(O.confirmDeviceProvision)({name:e.name||e.mac,onConfirm:()=>{a(Object(O.forceProvisionDevice)(e))},onCancel:()=>{a(Object(Ut.e)())}}))},loader:t===O.DeviceState.PROVISIONING?"spinner":null},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PROVISION"}))},Zi=a(379),qi=a(77),Ji=a(227),Qi=a(112);const eo=Object(l.c)(de.a)`
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
`;var co=Object(M.f)(({device:e,showOnlyIfInactive:t,intl:a})=>{const{mac:n,name:l,adopted:i}=e,E=Object(o.useDispatch)(),[s,m]=Object(c.useState)(!1),d=Object(o.useSelector)(qi.selectEnv),_=Object(o.useSelector)(Ji.a),u=Object(Qi.b)(d),p=Object(O.isUlte)(e),b=Object(O.isDeactivatedForNonPayment)(e),I=Object(O.getDeviceState)(e),g=p&&(!t||[O.DeviceState.UNKNOWN,O.DeviceState.FIRMWARE_MISMATCH,O.DeviceState.ADOPTION_FAILED,O.DeviceState.DISCONNECTED].includes(I)),h=Object(c.useCallback)(async()=>{try{await E(Object(Zi.c)(n,{successToast:{icon:ra.a.success,message:"DEVICE_ULTE_REMOVED_SUCCESS"}})),E(Object(O.deleteDeviceFromStore)(n)),E(Object(C.deleteUnifiDeviceFromStore)(n)),E(Object(N.f)()),b||setTimeout(()=>{E(Object(na.c)({duration:0,type:ra.a.warning,title:a.formatMessage({id:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_TITLE"}),message:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_BODY",icon:r.a.createElement(ao,{deviceType:at.DeviceType.AP,deviceModel:at.DeviceModel.ULTE,publicImagePath:_,filesMap:"SETUP"}),showStatusBall:!0,primaryButton:{label:a.formatMessage({id:"ON_LOAD_WARNING_PAYMENT_ACTION_CANCEL_SUBSCRIPTIONS"}),onClick:()=>window.open(`https://${u}/subscriptions`,"_blank")},className:no},"LTE_SUBSCRIPTION_NEEDS_ATTENTION"))},10),E(Object(Ut.e)())}catch(e){m(!1)}},[n,b]),R=Object(c.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),m(!0);const t={name:l&&l!==n?l:a.formatMessage({id:"DEVICE_TYPE_ULTE"})};b?h():E(Object(ec.a)({title:"DEVICE_ULTE_REMOVE_HEADER",titleValues:t,message:"DEVICE_ULTE_REMOVE_DETAILS",messageValues:t,confirmButtonProps:{text:r.a.createElement(M.c,{id:"DEVICE_ACTIONS_REMOVE"}),variant:"primary"},children:r.a.createElement(to,null,r.a.createElement(M.c,{id:"DEVICE_ULTE_REMOVE_INFO"})),onConfirm:h,onCancel:()=>{E(Object(Ut.e)()),m(!1)}}))},[n,l,b]);return g&&i?r.a.createElement(eo,{variant:"link",onClick:R,loader:s?"spinner":null},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_REMOVE_LABEL"})):null});const ro=Object(l.c)(de.a)`
  padding: 0;
`;var lo=Object(n.o)(({device:e,history:t,location:a})=>{const n=Object(o.useDispatch)(),[l,i]=Object(c.useState)(!1),E=Object(c.useCallback)(c=>{c.preventDefault(),c.stopPropagation(),n(Object(O.confirmDeviceForget)({name:Object(G.d)(e),onConfirm:async()=>{i(!0);try{await n(Object(Zi.c)(e.mac)),n(Object(C.deleteUnifiDeviceFromStore)(e.mac)),n(Object(O.deleteDeviceFromStore)(e.mac)),i(!1),n(Object(N.f)()),t.push(a.pathname.split("/properties")[0])}catch(c){i(!1)}},onCancel:()=>{n(Object(Ut.e)()),i(!1)}}))},[e.mac,e.name,n,t,a.pathname]);return r.a.createElement(ro,{variant:"link",onClick:E,loader:l?"spinner":null},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"}))});const io=Object(l.c)(de.a)`
  padding: 0;
`;var oo=({device:e})=>{const t=Object(o.useDispatch)();return r.a.createElement(io,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(O.downloadDeviceInfo)(e))}},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO"}))};const Eo=Object(l.c)(de.a)`
  padding: 0;
`;var so=({device:e})=>{const t=Object(o.useDispatch)(),[a,n]=Object(c.useState)(!1);return r.a.createElement(Eo,{variant:"link",onClick:async()=>{n(!0),await t(Object(O.openDeviceDebugTerminal)({device:e})),n(!1)},disabled:a},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DEBUG"}))};const mo=Object(l.c)(de.a)`
  padding: 0;
`;var _o=({device:e})=>{const t=Object(o.useDispatch)(),a=Object(c.useMemo)(()=>Object(O.getDeviceState)(e),[e]),[n,l]=Object(c.useState)(!1);return r.a.createElement(mo,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(O.confirmDeviceUpgrade)({titleValues:{deviceName:e.name},messageValues:{deviceName:e.name,fromVersion:e.version,toVersion:e.upgrade_to_firmware},onConfirm:()=>{l(!0),t(Object(O.upgradeDevice)(e,!0)),l(!0)},onCancel:()=>{t(Object(Ut.e)()),l(!1)},isDowngrade:!0}))},disabled:n||a!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DEVICE"}))},uo=a(2018);const po=Object(l.c)(de.a)`
  padding: 0;
`;function bo({device:e}){const{isUbbAlignmentToolModalClosed:t}=Object(o.useSelector)($l.P),{is_aligning:a}=e,n=Object(o.useDispatch)(),c=Object(O.getDeviceState)(e),l=Object(uo.a)(_e.a.feStaticAssets+"/videos");return r.a.createElement(po,{variant:"link",onClick:c=>{c.preventDefault(),c.stopPropagation(),a||t||!l||n(Object(Ut.g)({modalType:Bt.a.UBB_ALIGNMENT_TOOL,modalProps:{closeModal:()=>{n(Object($l.k)({isUbbAlignmentToolModalClosed:!0})),n(Object(Ut.e)())}}})),n(Object(O.alignDevice)(e))},disabled:c!==O.DeviceState.CONNECTED},r.a.createElement(M.c,{id:a?"DEVICE_ACTIONS_ALIGNMENT_DISABLE":"DEVICE_ACTIONS_ALIGNMENT_ENABLE"}))}var Oo=a(82);const Io=Object(l.c)(F.a)`
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
`;var ho=()=>r.a.createElement(Io,null,r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(go,null),r.a.createElement(M.c,{id:"DEVICE_STATE_UPGRADING_INFO_WARNING"})));const Co=Object(l.c)("div")`
  position: relative;
`,Ro=Object(l.c)(V.a,{shouldForwardProp:e=>"removeTopMargin"!==e})`
  margin: ${({removeTopMargin:e})=>(e?"0":"17px")+" 0 20px 0;"};
  display: block;
`,vo=Object(l.c)(de.a)`
  padding: 0;
`,fo=Qa.a.object().shape({url:Qa.a.string().label("COMMON_LABEL_LOCATION_URL").url(r.a.createElement(M.c,{id:"COMMON_VALIDATION_VALID_URL"})).required()});var To=Object(vt.compose)(Object(o.connect)(e=>({mgmtSettings:Object(Ei.selectMgmtSettings)(e)}),{confirmDeviceCustomUpgrade:O.confirmDeviceCustomUpgrade,upgradeExternalDevice:O.upgradeExternalDevice,hideModal:Ut.e}),Object(Ja.g)({validationSchema:fo,handleSubmit:({url:e},{props:{confirmDeviceCustomUpgrade:t,upgradeExternalDevice:a,device:n,hideModal:c}})=>{t({onConfirm:()=>{a(n,e)},onCancel:()=>{c()}})}}))(({handleSubmit:e,whiteOutActive:t,mgmtSettings:{auto_upgrade:a},removeTopMargin:n=!1})=>r.a.createElement(Co,null,t&&r.a.createElement(ho,null),r.a.createElement(Ro,{color:"secondary",size:"body",removeTopMargin:n},r.a.createElement(M.c,{id:a?"DEVICE_ACTIONS_CUSTOM_UPGRADE_NOT_AVAILABLE":"DEVICE_ACTIONS_CUSTOM_UPGRADE_INFO"})),r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(tn.a,{full:!0,name:"url",label:"COMMON_LABEL_LOCATION_URL",placeholder:"DEVICE_ACTIONS_CUSTOM_UPGRADE_PLACEHOLDER",disabled:a,type:"input"}),r.a.createElement(F.a,{marginTop:10,justifyContent:"flex-start"},r.a.createElement(vo,{name:"customUpgrade",variant:"link",type:"submit",onClick:e,disabled:!!a},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE"})))))),Do=a(1133);const yo=Object(l.c)(de.a)`
  padding: 0;
`;var Po=({device:e,sourceDevice:t})=>{const a=Object(o.useDispatch)(),[n,l]=Object(c.useState)(!1);return r.a.createElement(yo,{variant:"link",onClick:n=>{n.preventDefault(),n.stopPropagation(),a(Object(O.confirmDeviceCloneConfig)({name:e.name||e.mac,sourceName:t.name||t.mac,onConfirm:async()=>{l(!0),await a(Object(O.cloneConfig)(e,t)),l(!1)},onCancel:()=>{l(!1),a(Object(Ut.e)())}}))},disabled:n||!t.mac},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION"}))};const So=l.a`
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
`;var No=Object(M.f)(({intl:e,device:t})=>{const a=Object(o.useSelector)(O.selectDevicesData),[n,l]=Object(c.useState)(""),i=a.find(e=>e.mac===n)||{mac:null,name:null},E=a.reduce((e,a)=>(a.adopted&&a.state!==O.DEVICE_STATE_IDS.ADOPTING&&a.mac!==t.mac&&a.model===t.model&&e.push({label:a.name||a.mac,value:a.mac}),e),[]);return E.length||E.push({image:jo,label:r.a.createElement(M.c,{id:"COMMON_DEVICES_NOT_FOUND"}),value:"notFound",disabled:!0}),r.a.createElement("div",null,r.a.createElement(Do.a,{searchable:!0,placeholder:e.formatMessage({id:"DEVICE_ACTIONS_COPY_CONFIGURATION_PLACEHOLDER"}),value:n,onChange:e=>{l(e.value)},options:E,width:"100%",className:So,optionContainerClassName:Ao}),r.a.createElement(F.a,{justifyContent:"flex-start"},r.a.createElement(Po,{device:t,sourceDevice:i})))});const xo=Object(l.c)(V.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,Lo=Object(l.c)(F.a)`
  ${({theme:e})=>`\n    border-bottom: 1px solid ${e.motifPalette.ui04};\n    margin-bottom: ${e.spacing["spacing-xl"]};\n    padding-bottom: ${e.spacing["spacing-xl"]};\n  `};
`,Vo=Object(l.c)(F.a)`
  ${({noMargin:e=!1,theme:t})=>!e&&"margin-top: "+t.spacing["spacing-m"]};
`;var wo=({activeItem:e,disableLocate:t,disableRestart:a,disableDebug:n,disableForget:l})=>{const i=Object(o.useSelector)(t=>Object(O.selectDeviceData)(t,e.mac)),E=Object(o.useSelector)(Object(O.selectIsUcoreDevice)(e)),s=Object(O.getRawDeviceState)(i)===at.DeviceState.UPGRADING,m=Object(O.isUlte)(i),d=Object(O.isLteWithSubscription)(i),_=(Object(O.isUap6mp)(i),Object(c.useMemo)(()=>Object(O.isDeviceDowngradable)(i),[null==i?void 0:i.version,null==i?void 0:i.upgrade_to_firmware]));return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE_DESCRIPTION"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement($i,{device:i}))),i.type===at.DeviceType.UBB&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_ALIGNMENT"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_ALIGNMENT_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(bo,{device:i}))),!a&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_RESTART"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_RESTART_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(Yi,{device:i}))),(i.type===at.DeviceType.AP||i.type===at.DeviceType.SWITCH)&&!m&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),r.a.createElement(No,{device:i})),!E&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),r.a.createElement(Vo,{noMargin:!0,alignSelf:"flex-end"},r.a.createElement(To,{whiteOutActive:s,device:i,removeTopMargin:!0}))),_&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNGRADE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DESCRIPTION"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(_o,{device:i}))),r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PROVISION_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_PROVISION_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(Ki,{device:i}))),r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(oo,{device:i}))),!n&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DEBUG_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_DEBUG_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},r.a.createElement(so,{device:i}))),!l&&r.a.createElement(Lo,{flexDirection:"column"},r.a.createElement(xo,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_FORGET_INFO"})),r.a.createElement(Vo,{alignSelf:"flex-start"},d?r.a.createElement(co,{device:i}):r.a.createElement(lo,{device:i}))))};const Mo=Object(l.c)("div",{shouldForwardProp:e=>"portsTable"!==e})`
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
`;function Bo({stp_version:e}){switch(e){case"rstp":return r.a.createElement(Fo,{size:"label"},r.a.createElement(w.v,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_RSTP_DISCARDING"}));case"stp":return r.a.createElement(Fo,{size:"label"},r.a.createElement(w.v,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_STP_BLOCKING"}));case"disabled":return r.a.createElement(Fo,{size:"label"},r.a.createElement(w.v,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISABLED"}));default:return""}}function zo({deviceData:e,portsTable:t=!1}){const{model:a,port_table:n,stp_version:l}=e;return Object(c.useMemo)(()=>{const a=Object(O.getPortSpeeds)(e),{isPoePlusPlusSupported:n,isPoePlusSupported:c,isPoeAutoSupported:i,isPoePassthroughSupported:o,isPoePassive24Supported:E}=Object(O.getDevicePoeAvailability)(e),s=Object(O.getIsInWallAp)(e),m=e=>O.SWITCH_PORT_SPEED_COLORS[e]||"transparent",d=Object(O.getCanBePoweredByPoe)(e),_=Object(O.isUdmBase)(e)||Object(O.isUdr)(e);return r.a.createElement(Mo,{portsTable:t},a.sort((e,t)=>t-e).map(e=>r.a.createElement(Fo,{size:"label",key:e},r.a.createElement(Uo,{background:m(e)}),r.a.createElement(M.c,{id:Object(O.hasGbpsSpeedsOnly)([e])?"DEVICE_PORT_STATE_GBE":"DEVICE_PORT_STATE_MBE",values:{speed:Object(O.getPortLedSpeedsParsed)(e)}}))),r.a.createElement(Fo,{size:"label"},r.a.createElement(Uo,{background:O.SWITCH_PORT_SPEED_COLORS.DEFAULT}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})),r.a.createElement(Fo,{size:"label"},r.a.createElement(Uo,{background:"transparent",color:O.SWITCH_PORT_SPEED_COLORS.DEFAULT}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISABLED"})),Object(O.hasSwitch)(e)&&r.a.createElement(Fo,{size:"label"},r.a.createElement(w.K,{style:{width:9,height:9}}),r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_MIRROR"})),(s||Object(sc.isPoeSupported)(e)||d)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Fo,{size:"label"},r.a.createElement(w.Bb,{size:"medium"}),n&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE_PLUS_PLUS"}),(c||d)&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE_PLUS"}),(i&&!c||o)&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE"}),E&&r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_POE_PASSIVE"}))),!_&&r.a.createElement(Bo,{stp_version:l}))},[n,a,l])}var ko=a(2857);const Wo=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,Ho=({spacing:e})=>l.a`
  &:not(:first-child) {
    margin-top: ${e};
  }
`;function $o({deviceData:e,portSizeOverride:t,...a}){const{port_table:n}=e,{diagram:c}=Object(uc.E)(e),l=c?Object(uc.c)(c,e):Object(uc.f)(e);if(!l||0===l.length)return r.a.createElement(Wo,null,r.a.createElement(w.W,{isActive:!0,className:"mr-2"}),r.a.createElement(M.c,{id:"DEVICE_DIAGRAM_MISSING"}));const i=Object(ko.a)(l.map(e=>e.length)),o=Object.values(gc).find(e=>i<=e.threshold);return l.map((c,l)=>r.a.createElement(F.a,{"align-items":"flex-end",key:"PortLayoutRow-"+(l+1),className:Ho(o),flex:"1 1 "+(t||o.size)},c.map((c,i)=>{const E=`Port-${l+1}-${i+1}`,s=c&&n&&Object(uc.t)(c.portNumber,e);return r.a.createElement(jc,Object.assign({cellData:s,deviceData:e,key:E},a,{portSize:o,portSizeOverride:t}))})))}const Go=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`,Yo=Object(l.c)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`,Xo=Object(l.c)("div")`
  padding: 32px 32px 16px 32px;
`,Ko=Object(l.c)(F.a)`
  &:not(:last-child) {
    padding: 8px 0;
  }
`,Zo=Object(l.c)(w.s)`
  color: ${({theme:e})=>e.motifPalette.success};
  margin-right: 9px;
  width: 17px;
  height: 17px;
`,qo=Object(l.c)(w.a)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: 9px;
  width: 18px;
  height: 18px;
`,Jo=Object(l.c)(de.a)`
  margin-left: 2px;
`;function Qo({deviceData:e,hideAnomalies:t,...a}){const l=Object(n.k)(),{portAnomalies:i,totalAnomalies:o}=Object(dc.b)(e.port_table,O.switchAnomaliesMap),E=1===o,s=Object(c.useCallback)(e=>l.push("ports/"+e.toString()),[l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Go,null,r.a.createElement(Yo,null,r.a.createElement($o,Object.assign({deviceData:e},a))),r.a.createElement(zo,{deviceData:e})),!t&&!!o&&r.a.createElement(Xo,null,E?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ko,{alignItems:"center"},r.a.createElement(qo,null),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:i[0].anomalies[0]+"_PROBLEM"}),r.a.createElement(Jo,{variant:"inline",onClick:()=>s(i[0].portNumber)},r.a.createElement(M.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:i[0].portNumber}})))),r.a.createElement(Ko,{alignItems:"center"},r.a.createElement(Zo,null),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:i[0].anomalies[0]+"_SOLUTION"})))):r.a.createElement(Ko,{alignItems:"center"},r.a.createElement(qo,null),r.a.createElement(V.a,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MULTIPLE_ANOMALIES",values:{count:o}}),i.map((e,t)=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Jo,{variant:"inline",onClick:()=>s(e.portNumber)},r.a.createElement(M.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:e.portNumber}})),t===i.length-1?".":","))))))}const eE=Object(l.c)(de.a)`
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
`,nE=e=>[{id:"portName",minWidth:80,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({portName:e})=>r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},e)},{id:"portStatus",minWidth:120,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:({portStatus:t})=>r.a.createElement(ye.g,{justifyContent:"space-between",width:"100%",alignItems:"center"},r.a.createElement(V.a,{color:"secondary",size:"body",truncate:!0},t),!e&&r.a.createElement(tE,{size:"small"}))}];var cE=function({deviceData:e,...t}){const a=Object(n.k)(),l=Object(O.isUdmPro)(e)||Object(O.isUdmProSe)(e),i=Object(O.isUdm)(e),E=Object(o.useSelector)(un.selectNetworkGroups),{path:s}=Object(n.n)(),{site:m,page:d,id:_,panel:u}=Object(n.m)(),p=e=>Object(n.i)(s,{site:m,page:d,id:_,panel:u,subPanel:"ports",subPanelId:e}),b=Object(c.useCallback)(({port_idx:e,masked:t})=>!t&&a.push(p(null==e?void 0:e.toString())),[a]),I=Object(c.useMemo)(()=>nE(),[]),g=Object(c.useMemo)(()=>xc(e,E,t),[e,E,t]);if(i){const n=((e,t,a)=>xc(e,t,a).filter(e=>!e.isWanPort))(e,E,t),c=((e,t,a)=>xc(e,t,a).filter(e=>e.isWanPort))(e,E,t),i=nE(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_LAN_PORTS"})),r.a.createElement(Te.a,{hideCellOverflow:!1,columns:I,rowHeight:35,disableColumnFilters:!0,items:n,onRowClick:b}),r.a.createElement(aE,null),r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_WAN_PORTS"})),r.a.createElement(Te.a,{hideCellOverflow:!1,columns:i,rowHeight:35,disableColumnFilters:!0,disableTextPointer:l,disableSelection:l,items:c,onRowClick:l?null:()=>a.push(p(oe.WAN))}),l&&r.a.createElement(eE,{variant:"link",onClick:()=>a.push(p(oe.WAN)),Icon:r.a.createElement(w.ub,{isActive:!0})},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"})))}return r.a.createElement(Te.a,{hideCellOverflow:!1,columns:I,rowHeight:35,disableColumnFilters:!0,items:g,onRowClick:b})};function rE({activeItem:e,hideDiagramKeys:t,...a}){const[n]=Object(c.useState)("DevicePorts-"+Date.now()),l=Object(o.useDispatch)();return Object(c.useEffect)(()=>{const e={style:al.a.overflow,styleName:"overflow",dependant:n};return l(Object(tl.c)(e)),()=>l(Object(tl.b)(e))},[]),r.a.createElement(cE,Object.assign({deviceData:e},a))}const lE=Object(l.c)(F.a)`
  padding: 0 32px;
`;var iE=Object(vt.compose)(qa(["general","lcmScreen","screen","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Za),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),{_id:u,mac:p}=e,b=Object(o.useDispatch)(),I=Object(Gn.i)(e),g=I?"lcmScreen":"screen";return r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(lE,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:g,label:I?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}):r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_LED"}),renderContent:()=>I?r.a.createElement(hi,{activeItem:e,setFormDirty:t,setFormInvalid:a}):r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;b(Object(O.updateDeviceWithIdEndpoint)(a,u,p,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});const oE=Object(l.c)("div")`
  margin-bottom: 32px;
  th {
    padding-right: 0;

    &:first-child {
      margin-left: 0px;
    }
  }
`,EE=Object(l.c)("div")`
  margin-top: 12px;
`,sE=[{id:"name",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_NETWORK"})),minWidth:85,renderCell:({name:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"ip",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_IP"})),minWidth:60,renderCell:({ip:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"tx_bytesInfo",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_SENT"})),renderCell:e=>r.a.createElement(me.a,{size:"body",type:"bytes",input:e.tx_bytes}),maxWidth:60},{id:"rx_bytesInfo",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_RECEIVED"})),renderCell:e=>r.a.createElement(me.a,{size:"body",type:"bytes",input:e.rx_bytes}),minWidth:85},{id:"num_sta",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_WORD_CLIENTS"})),minWidth:60,renderCell:({num_sta:e})=>r.a.createElement(V.a,{size:"body"},e)}];var mE=({activeItem:e})=>{const{network_table:t}=e;return r.a.createElement(oE,null,r.a.createElement(Te.a,{items:t,disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,idField:"_id",columns:sE,renderFooter:()=>t.length>0?r.a.createElement(EE,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:t.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"})}))};var dE=({activeItem:{displayable_version:e},flexProps:t})=>e?r.a.createElement(qt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VERSION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;const _E=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`;function uE({activeItem:{mac:e,model:t,uptime:a},activeItem:n}){const c=Object(_c.c)("LAN",n),l=Object(_c.i)(n);return r.a.createElement(_E,null,r.a.createElement(dE,{activeItem:n}),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},c)),a>0&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),r.a.createElement(V.a,{size:"body"},Object(Kt.c)(a,!0))),l.boardPhy&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_GATEWAY_BOARD_PHY"})),r.a.createElement(V.a,{size:"body"},l.boardPhy)),l.boardCpu&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_GATEWAY_BOARD_CPU"})),r.a.createElement(V.a,{size:"body"},l.boardCpu)),l.cpu&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_CPU"})),r.a.createElement(V.a,{size:"body"},l.cpu)),l.phy&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_WORD_PHY"})),r.a.createElement(V.a,{size:"body"},l.phy)))}var pE=a(542);const bE=({networkgroup:e,uplinkAttrs:t})=>{var a,n,c,l,i,E,s;const m=null===(a=Object(o.useSelector)(g.selectIspInfoItems))||void 0===a?void 0:a.find(t=>t.networkgroup===e),{ip:d,speed:_,rx_packets:u,rx_bytes:p,tx_packets:b,tx_bytes:O,"rx_bytes-r":I,"tx_bytes-r":h}=t;return r.a.createElement(ye.g,{height:"100%",flexDirection:"column"},d?r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},d)):null,r.a.createElement(il,{portSpeed:_}),(null===(c=null===(n=null==m?void 0:m.details)||void 0===n?void 0:n.service_provider)||void 0===c?void 0:c.name)&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_WAN_ISP"})),r.a.createElement(V.a,{size:"body"},m.details.service_provider.name)),((null===(l=null==m?void 0:m.configuration)||void 0===l?void 0:l.wan_dns1)||(null===(i=null==m?void 0:m.configuration)||void 0===i?void 0:i.wan_dns2))&&r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(E=null==m?void 0:m.configuration)||void 0===E?void 0:E.wan_dns1)),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(s=null==m?void 0:m.configuration)||void 0===s?void 0:s.wan_dns2))),u&&p?r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},Object(ba.a)(u,{spacer:" "})," / ",Object(Xt.c)(p,"bytes","IEC"))):null,b&&O?r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},Object(ba.a)(b,{spacer:" "})," / ",Object(Xt.c)(O,"bytes","IEC"))):null,r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},void 0!==I?r.a.createElement(me.a,{type:"bytes",input:I,options:"bitrate",size:"body"}):"-")),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),r.a.createElement(V.a,{size:"body"},void 0!==h?r.a.createElement(me.a,{type:"bytes",input:h,options:"bitrate",size:"body"}):"-")))};var OE=e=>Object.values(pE.a).reduce((t,a)=>{const n=e.port_table&&e.port_table.filter(e=>e.up),c="wan1"===a?"WAN":"WAN2",l="wan1"===a?"WAN":"WAN 2",i=Object(_c.f)(c,e)||"",o=n&&n.find(e=>e.ifname===i),E=Object(uc.ic)(e,a);return o&&E&&t.push({id:a,label:r.a.createElement("span",null,l),renderContent:()=>r.a.createElement(bE,{networkgroup:c,uplinkAttrs:E,activeItem:e})}),t},[]);const IE=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;function gE({activeItem:e,...t}){const[a]=Object(c.useState)("SwitchPorts-"+Date.now()),n=Object(o.useDispatch)(),l={style:al.a.overflow,styleName:"overflow",dependant:a};Object(c.useEffect)(()=>(n(Object(tl.c)(l)),()=>n(Object(tl.b)(l))),[]);const i=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),E=Object(O.isUxg)(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(hl,{activeItem:e}),r.a.createElement(IE,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(uE,{activeItem:e})},...OE(e),...E?[{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}]:[],{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(mE,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})))}var hE=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac,De.OBJECT.GW))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const CE=Object(l.c)(ye.g)`
  padding: 16px 32px;
`,RE=Object(l.c)("div")`
  margin-bottom: 16px;
`;var vE=({activeItem:e})=>r.a.createElement(CE,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),r.a.createElement(RE,null),r.a.createElement(hE,{activeItem:e})),fE=a(2858);var TE=({device:e,isOwner:t,...a})=>{const n=Object(o.useSelector)(qi.selectEnv),c=Object(dt.a)(e,"unifi_care.state");let l,i;if(c===at.DeviceUnifiCareState.REPLACING?(l=Object(dt.a)(e,"unifi_care.tracking_url"),i=t?"DEVICE_ACTIONS_UNIFI_CARE_TRACK":"DEVICE_ACTIONS_UNIFI_CARE_SHIPPED"):c===at.DeviceUnifiCareState.RMA_IN_PROGRESS?(l=Object(dt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_RMA"):t&&(l=Object(dt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_REPLACE"),!t)return i?r.a.createElement(M.c,{id:i}):null;return r.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(l||"https://"+Object(Qi.b)(n),"_blank")}},a),r.a.createElement(M.c,{id:i}))},DE=a(1998);var yE=({device:e,...t})=>{const a=Object(o.useDispatch)(),n=Object(o.useSelector)(qi.selectEnv),c=Object(o.useSelector)(DE.selectUnifiCareDetails);return Object(x.f)(()=>Promise.resolve(a(Object(DE.fetchUnifiCareDetails)())).catch(()=>{}),r.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(Object(dt.a)(c,"links.covered_devices_url")||"https://"+Object(Qi.b)(n))}},t),r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_VIEW"})))};var PE=({device:e,...t})=>{const a=Object(o.useSelector)(qi.selectEnv);return r.a.createElement(de.a,Object.assign({size:"small",variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const n=Object(dt.a)(e,"unifi_care.activation_url");window.open(n||"https://"+Object(Qi.b)(a))}},t),r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVATE"}))},SE=a(801),AE=a(797);const jE=Object(l.c)("div")`
  margin-top: 8px;
`,NE=Object(l.c)("div")`
  &:not(:empty) {
    padding-bottom: 12px;
  }
`,xE=Object(l.c)(F.a)`
  margin-left: 18px;
`,LE=Object(l.c)(F.a)`
  margin-top: 16px;
  margin-left: -8px;
`,VE=Object(l.c)(F.a)`
  margin-top: 10px;
  margin-left: -8px;
`,wE=Object(l.c)(SE.a)`
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,ME=Object(l.c)(TE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  padding: 0 8px;
`,FE=Object(l.c)(yE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: normal;
  padding: 0 8px;
`,UE=Object(l.c)(PE)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: bold;
  padding: 0 8px;
`,BE=Object(l.c)(fE.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: bold;
  padding: 0 8px;
  line-height: 1.15;
`,zE=Object(l.c)(F.a)`
  padding: 17px;
  border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-radius: 8px;
  margin: 16px 32px 24px 32px;
`,kE=Object(l.c)(z.a)`
  margin-right: 17px;
`,WE=Object(l.c)(F.a)`
  margin-bottom: 15px;
`;var HE=({device:e,hideWarning:t})=>{const a=Object(o.useDispatch)(),n=Object(AE.c)(e),l=!n&&Object(AE.d)(e),i=Object(AE.a)(e),E=null==i?void 0:i.getTime(),s=l&&i||n&&Object(AE.b)(e),[m,d]=Object(c.useState)(E-(new Date).getTime()),_=Object(o.useSelector)($l.F);return Object(c.useEffect)(()=>{let e;return m&&(e=setInterval(()=>{d(E-(new Date).getTime())},200)),()=>e&&clearInterval(e)},[E]),Object(x.f)(()=>Promise.resolve(a(Object(DE.fetchUnifiCareDetails)())).catch(()=>{}),r.a.createElement(jE,null,n&&!t&&r.a.createElement(NE,null,r.a.createElement(Ml,{activeItem:e,standalone:!0}),r.a.createElement(Vl,{activeItem:e,standalone:!0})),l&&m>0&&r.a.createElement(zE,{flexDirection:"column"},r.a.createElement(WE,{flexDirection:"row"},r.a.createElement("div",null,r.a.createElement(kE,{width:44,height:48})),r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_OFFER_ENDS",values:{eligibleExpirationTime:Object(jn.a)(Math.floor(m/1e3)).join(" ")}})))),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE_INFO"})),r.a.createElement(VE,{flexDirection:"row",alignItems:"center"},_&&r.a.createElement(UE,{device:e}),r.a.createElement(BE,{href:_e.a.unifiCare,target:"_blank"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_LEARN_MORE"})))),n&&r.a.createElement(F.a,{flexDirection:"row",alignItems:"flex-start"},r.a.createElement("div",null,r.a.createElement(z.a,{width:54,height:54})),r.a.createElement(xE,{flexDirection:"column"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVE_INFO"})),r.a.createElement(LE,{flexDirection:"row",alignItems:"center"},r.a.createElement(FE,{device:e}),r.a.createElement(ME,{isOwner:_,device:e})),s&&r.a.createElement(wE,{expires:s})))))};const $E=Object(l.c)("div")`
  position: relative;
  margin: 0 0 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }
`,GE=Object(l.c)(V.a)`
  margin: 17px 0 20px 0;
  display: block;
`,YE=({actionName:e,Button:t,title:a,whiteOutActive:n})=>r.a.createElement($E,null,n&&r.a.createElement(ho,null),r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_"+a})),r.a.createElement(GE,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:`DEVICE_ACTIONS_${e}_INFO`})),r.a.createElement(F.a,{justifyContent:"flex-end"},t));var XE=({activeItem:e})=>{const t=Object(o.useSelector)(t=>Object(O.selectDeviceData)(t,e.mac)),a=Object(O.getRawDeviceState)(t),n=Object(O.isUlte)(t),c=a===O.DeviceState.UPGRADING;return r.a.createElement(r.a.Fragment,null,(Object(O.hasActiveUnifiCare)(t)||Object(O.isUnifiCareEligible)(t))&&r.a.createElement($E,null,r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),r.a.createElement(HE,{device:t})),r.a.createElement(YE,{actionName:"LOCATE",title:"LOCATE",Button:r.a.createElement($i,{device:t})}),t.type===at.DeviceType.UBB&&r.a.createElement(YE,{title:"ALIGNMENT",actionName:"ALIGNMENT",Button:r.a.createElement(bo,{device:t})}),r.a.createElement(YE,{actionName:"RESTART",title:"RESTART",Button:r.a.createElement(Yi,{device:t})}),r.a.createElement($E,null,r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),r.a.createElement(To,{device:t,whiteOutActive:c})),r.a.createElement(YE,{title:"PROVISION_LABEL",actionName:"PROVISION",Button:r.a.createElement(Ki,{device:t}),whiteOutActive:c}),n?r.a.createElement(YE,{title:"REMOVE",actionName:"REMOVE",Button:r.a.createElement(co,{device:t})}):r.a.createElement(YE,{title:"FORGET",actionName:"FORGET",Button:r.a.createElement(lo,{device:t})}),(t.type===at.DeviceType.AP||t.type===at.DeviceType.SWITCH)&&r.a.createElement($E,null,r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),r.a.createElement(No,{device:t})),(t.type===at.DeviceType.AP||t.type===at.DeviceType.SWITCH||t.type===at.DeviceType.UBB)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(YE,{title:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL",actionName:"DOWNLOAD_DEVICE_INFO",Button:r.a.createElement(oo,{device:t})}),r.a.createElement(YE,{title:"DEBUG",actionName:"DEBUG",Button:r.a.createElement(so,{device:t})})))},KE=a(243),ZE=a(743),qE=a(1732),JE=a(2022),QE=a(214);const es=Object(l.c)("div")`
  width: 100%;
  margin-top: ${e=>e.marginTop||0}px;
  margin-bottom: ${e=>e.marginBottom||0}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ts=Object(l.c)(KE.a)`
  color: ${({theme:e})=>e.motifPalette.text02};
  opacity: 0.4;
  margin-right: auto;
`,as=Object(l.c)(w.W)`
  margin-right: auto;
  margin-left: 5px;
  height: 14px;
  width: 14px;
`,ns=Object(l.c)(bn.a)`
  margin-left: 0 !important;
`,cs=l.a`
  flex-direction: column;
  align-items: flex-start;
`,rs=Object(l.c)("div")`
  display: flex;

  > label:not(:first-child) {
    margin-left: 18px;
  }
`;var ls=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({usgSettings:{key:e,mss_clamp_mss:t,mss_clamp:a,offload_accounting:n,echo_server:c,offload_sch:r,offload_l2_blocking:l,lldp_enable_all:i}})=>({key:e,mss_clamp:a||Ei.USG_DEFAULTS.mss_clamp,mss_clamp_mss:t||Ei.USG_DEFAULTS.mss_clamp_mss,offload_accounting:n||Ei.USG_DEFAULTS.offload_accounting,offload_sch:r,offload_l2_blocking:l,echo_server:c||Ei.USG_DEFAULTS.echo_server,lldp_enable_all:i}),validationSchema:Qa.a.object().shape({mss_clamp:Qa.a.string(),mss_clamp_mss:Qa.a.number().when("mss_clamp",{is:QE.q.CUSTOM,then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING").required().min(Ei.USG_DEFAULTS.min_mss_clamp_mss).max(Ei.USG_DEFAULTS.mss_clamp_mss)}),offload_accounting:Qa.a.boolean(),offload_sch:Qa.a.boolean(),offload_l2_blocking:Qa.a.boolean(),echo_server:Qa.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(hn.f,r.a.createElement(M.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}})),lldp_enable_all:Qa.a.boolean()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(e=>{const{values:t,initialValues:a,setFieldValue:n,dirty:l,isValid:i,setFormDirty:E,setFormInvalid:s,resetForm:m,usgSettings:d,activeItem:_}=e,u=Object(o.useDispatch)(),p=Object(o.useSelector)(JE.a);Object(c.useEffect)(()=>{u(Object(N.j)({services:()=>{Object(oi.a)(a,t)||u(Object(Ei.saveSettings)({key:Ei.USG_DEFAULTS.key,...t},_._id,void 0,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"}})),m({values:t})}})),u(Object(N.i)({services:m}))},[a,t]),Object(c.useEffect)(()=>{E("services",l),s("services",!i)},[t,d,l,i]);const b=e=>{e.target.checked&&n("mss_clamp",e.target.name)},O=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?n("echo_server",""):n("echo_server",e.target.name))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),r.a.createElement(es,{marginBottom:16},r.a.createElement(rs,null,r.a.createElement(ZE.a,{id:"mssClampingAuto",checked:t.mss_clamp===QE.q.AUTO,name:QE.q.AUTO,onChange:b},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"}))),r.a.createElement(ZE.a,{id:"mssClampingCustom",checked:t.mss_clamp===QE.q.CUSTOM,name:QE.q.CUSTOM,onChange:b},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"}))),r.a.createElement(ZE.a,{id:"mssClampingDisabled",checked:t.mss_clamp===QE.q.DISABLED,name:QE.q.DISABLED,onChange:b},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"}))))),t.mss_clamp===QE.q.CUSTOM&&r.a.createElement(es,{marginBottom:12,className:cs},r.a.createElement(ts,{htmlFor:"mss_clamp_mss"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING"}))),r.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",name:"mss_clamp_mss",id:"mss_clamp_mss"})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_HARDWARE_OFFLOAD"}))),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_OFFLOAD"})),r.a.createElement(qE.a,{id:"offload_accounting",disabled:!p,onChange:()=>{n("offload_accounting",!t.offload_accounting)},checked:!!p&&t.offload_accounting})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_SCHEDULE"})),r.a.createElement(qE.a,{id:"offload_sch",onChange:()=>{n("offload_sch",!t.offload_sch)},checked:t.offload_sch})),r.a.createElement(es,{marginBottom:28},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_OFFLOAD_L2_BLOCKING"})),r.a.createElement(qE.a,{id:"offload_l2_blocking",onChange:()=>{n("offload_l2_blocking",!t.offload_l2_blocking)},checked:t.offload_l2_blocking})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LLDP"}))),r.a.createElement(es,{marginBottom:28},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_LLDP_ON_ALL_INTERFACES"})),r.a.createElement(qE.a,{id:"lldp_enable_all",onChange:()=>{n("lldp_enable_all",!t.lldp_enable_all)},checked:t.lldp_enable_all})),r.a.createElement(es,{marginBottom:12},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),r.a.createElement(es,{marginBottom:0},r.a.createElement(rs,null,r.a.createElement(ZE.a,{id:"echoServerDefault",checked:t.echo_server===Ei.USG_DEFAULTS.echo_server,name:Ei.USG_DEFAULTS.echo_server,onChange:O},r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"}))),r.a.createElement(ZE.a,{id:"echoServerIpOrHostname",checked:t.echo_server!==Ei.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:O},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"}))),r.a.createElement(ns,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},r.a.createElement(as,{isActive:!0})))),t.echo_server!==Ei.USG_DEFAULTS.echo_server&&r.a.createElement(es,{marginBottom:0,marginTop:14,className:cs},r.a.createElement(ts,{htmlFor:"echo_server"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"}))),r.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"echo_server",id:"echo_server"})))});const is=Object(l.c)("div")`
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
`,ss=Object(Ja.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a,lcm_brightness_override:n,lcm_brightness:c,lcm_idle_timeout_override:r,lcm_idle_timeout:l,outdoor_mode_override:i,power_source_ctrl:o}={}})=>({led_override:e!==O.LedOverride.OFF,led_override_color:t||O.DEFAULT_LED_COLOR,led_override_color_brightness:a>=0?a:O.DEFAULT_LED_BRIGHTNESS,lcm_brightness_override:n||!1,lcm_brightness:c>=0?c:100,lcm_idle_timeout_override:r||!1,lcm_idle_timeout:l||0,outdoor_mode_override:i||"default",power_source_ctrl:o||"auto"}),validationSchema:Qa.a.object().shape({led_override:Qa.a.string(),led_override_color:Qa.a.string(),led_override_color_brightness:Qa.a.number(),lcm_brightness_override:Qa.a.boolean(),lcm_brightness:Qa.a.number(),lcm_idle_timeout_override:Qa.a.boolean(),lcm_idle_timeout:Qa.a.number(),outdoor_mode_override:Qa.a.string(),power_source_ctrl:Qa.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var ms=Object(vt.compose)(M.f,ss)(({activeItem:e,setFormDirty:t,dirty:a,values:n,resetForm:l,setFieldValue:i,disableLedOverrideFields:E,intl:s})=>{var m;const d=Object(o.useDispatch)(),{led_override:_}=e,u=Object(o.useSelector)(Ei.selectMgmtSettings),p=Object(Gn.i)(e),b=Object(Gn.j)(e),I=(null!==(m=null==u?void 0:u.led_enabled)&&void 0!==m&&m&&_!==O.LedOverride.OFF||_===O.LedOverride.ON)&&b;Object(c.useEffect)(()=>(d(Object(N.h)({screen:()=>{if(!a)return{};const e={...n,led_override:n.led_override?O.LedOverride.ON:O.LedOverride.OFF,lcm_brightness_override:p&&n.lcm_brightness_override,lcm_idle_timeout_override:p&&n.lcm_idle_timeout_override};return e.lcm_brightness_override||delete e.lcm_brightness,e.lcm_idle_timeout_override||delete e.lcm_idle_timeout,p||(delete e.lcm_brightness_override,delete e.lcm_idle_timeout_override),e}})),d(Object(N.j)({screen:()=>l({values:n})})),d(Object(N.i)({screen:l})),()=>{d(Object(N.h)({screen:null})),d(Object(N.j)({screen:null})),d(Object(N.i)({screen:null}))}),[d,l,n,a,e.mac,p]),Object(c.useEffect)(()=>{t("screen",a)},[t,a]);const g=Object(c.useCallback)((e,t,a)=>{e.target.checked&&i(t,a?"override"===e.target.name:e.target.name)},[i]),h=Object(c.useCallback)(e=>g(e,"lcm_brightness_override",!0),[g]),C=Object(c.useCallback)(e=>g(e,"lcm_idle_timeout_override",!0),[g]);return r.a.createElement(r.a.Fragment,null,!E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Es,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"})),r.a.createElement(tn.a,{type:"checkbox",name:"led_override"}))),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"}))),r.a.createElement(is,{marginBottom:12},r.a.createElement(ii.a,{size:"large",value:+n.led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement("span",null,e,"%"),onChange:e=>i("led_override_color_brightness",e.target.value)})),r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),r.a.createElement(is,{marginBottom:12},r.a.createElement(Ui.a,{color:n.led_override_color,variant:"block",onChange:e=>{i("led_override_color","hex"in e?e.hex:void 0)},hexLabel:s.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:r.a.createElement(de.a,{variant:"inline",onClick:()=>{i("led_override_color",O.DEFAULT_LED_COLOR)}},r.a.createElement(M.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_BRIGHTNESS"}))),r.a.createElement(is,{marginBottom:16},r.a.createElement(os,null,r.a.createElement(ZE.a,{id:"lcmBrigthnessDefault",checked:!n.lcm_brightness_override,name:"default",onChange:h},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"}))),r.a.createElement(ZE.a,{id:"lcmBrigthnessOverride",checked:n.lcm_brightness_override,name:"override",onChange:h},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIONS_OVERRIDE"}))))),n.lcm_brightness_override&&r.a.createElement(r.a.Fragment,null,r.a.createElement(is,{marginBottom:12},r.a.createElement(ii.a,{size:"large",value:+n.lcm_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement("span",null,e,"%"),onChange:e=>i("lcm_brightness",e.target.value)}))),r.a.createElement(is,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_IDLE_TIMEOUT"}))),r.a.createElement(is,{marginBottom:16},r.a.createElement(os,null,r.a.createElement(ZE.a,{id:"lcmIdleTimeoutDefault",checked:!n.lcm_idle_timeout_override,name:"default",onChange:C},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"}))),r.a.createElement(ZE.a,{id:"lcmIdleTimeoutOverride",checked:n.lcm_idle_timeout_override,name:"override",onChange:C},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIONS_OVERRIDE"})))))))}),ds=a(528);const _s=Object(l.c)("div")`
  table {
    tr {
      cursor: pointer;
    }
  }
`,us=Object(l.c)(w.g)`
  position: absolute;
  right: 8px;
  color: inherit;
`,ps=Object(l.c)("div")`
  margin-left: 10px;
`,bs=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px !important;
  margin-top: 16px;
  justify-content: flex-end;

  svg {
    height: 14px;
    width: 13px;
  }
`,Os=null,Is="COMMON_DISABLED",gs=[{id:"portName",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({portName:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"portStatus",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:({portStatus:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{size:"body"},e),r.a.createElement(us,{size:"small"}))}];var hs=({activeItem:e})=>{const{ethernet_overrides:t,port_overrides:a}=e,l=Object(o.useSelector)(un.selectNetworkGroups),i=Object(n.k)(),{path:E}=Object(n.n)(),{site:s,page:m,id:d,panel:_}=Object(n.m)(),u=Object(O.getDeviceSpecs)(e),p=Object(c.useMemo)(()=>{const t=Object(dt.a)(e,"port_table",[]);if(t.length>0)return t;return Object.keys(u.ports).map(e=>({ifname:e,up:!1,enable:!1}))},[e,u.ports]),b=Object(c.useMemo)(()=>p.map(n=>{const{ifname:c}=n,i=n.port_idx,o=t.find(({ifname:e})=>e===c),E=o&&l.find(e=>e.id===o.networkgroup),{nameOverride:s}=Object(O.getCurrentPortData)(i-1,e),m=Object(_c.d)(e,c),d=a&&a.find(({port_idx:e})=>m.portIdx===e),_=Object.values(pr.linkNegotiationOptions).find(({speed:e,full_duplex:t,autoneg:a})=>d&&d.speed&&!d.autoneg?d.speed===e&&d.full_duplex===t:a),u=s||r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:i,networkGroup:Object(O.getPortGroupLabel)(e,n,null==E?void 0:E.id)}}),p={...Object(ds.a)(n),networkGroup:E?E.id:Os,networkGroupLabel:E?E.label:Is,linkNegotiation:_.id,linkNegotiationLabel:_.label,linkNegotiationSpeed:_.speed,portName:u,portStatus:void 0,id:i||c,portIdx:i};return m.supportedValues&&0!==m.supportedValues.length||(p.linkNegotiationLabel="DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO"),p.portStatus=r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(jc,{cellData:p,deviceData:e,style:{minWidth:20}}),r.a.createElement(ps,null,r.a.createElement(M.c,{id:p.networkGroup?p.linkNegotiationLabel:p.networkGroupLabel,values:{speed:Object(Xt.c)(1e6*p.linkNegotiationSpeed/8,"bitrate")}}))),p}),[p,e,t,l,a]),I=e=>Object(n.i)(E,{site:s,page:m,id:d,panel:_,subPanel:"ports",subPanelId:e}),g=Object(c.useCallback)(e=>(null==e?void 0:e.dns)?null:i.push(I(e.ifname)),[i]);return r.a.createElement(_s,null,r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Te.a,{columns:gs,rowHeight:35,disableColumnFilters:!0,items:b,onRowClick:g,hideCellOverflow:!1}),r.a.createElement(bs,{variant:"link",onClick:()=>i.push(I(oe.ALL)),Icon:r.a.createElement(w.ub,{isActive:!0})},r.a.createElement(M.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))))};const Cs=Object(l.c)("div")`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 32px;
  flex: 1 1 85%;
`,Rs=Object(l.c)("div")`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var vs=Object(vt.compose)(M.f,qa(["general","screen","services"]))(({activeItem:e,isDirty:t,isInvalid:a,setFormDirty:n,setFormInvalid:l,intl:i,...E})=>{const{_id:s,mac:m}=e,d=Object(o.useSelector)(Ka),_=Object(o.useSelector)(Za),u=Object(o.useSelector)(Xa),p=Object(o.useSelector)(Ei.selectUsgSettings),b=Object(o.useSelector)($l.s)&&!e.unsupported,I=Object(o.useDispatch)(),g=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement(Qo,{deviceData:e,hideAnomalies:!0}),r.a.createElement(Cs,null,b&&r.a.createElement(Ee.a,{variant:"secondary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(Rs,null,r.a.createElement(li,{activeItem:e,setFormDirty:n,setFormInvalid:l}))},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(hs,{activeItem:e})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Rs,null,r.a.createElement(ms,{activeItem:e,setFormDirty:n}))},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Rs,null,r.a.createElement(ls,{activeItem:e,usgSettings:p,setFormDirty:n,setFormInvalid:l}))},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(XE,{activeItem:e})}]})),r.a.createElement(yn,{isDirty:t,isInvalid:a,onFormSubmit:()=>{const e=Object.entries(u).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});(Object(mc.a)(e)?Promise.resolve():I(Object(O.updateDeviceWithIdEndpoint)(e,s,m,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0}))).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{var e,t,a;null===(e=_.general)||void 0===e||e.call(_),null===(t=_.screen)||void 0===t||t.call(_),null===(a=_.services)||void 0===a||a.call(_)}}))});const fs=Object(l.c)(F.a)`
  position: relative;
  margin: -18px -30px 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,Ts=Object(l.c)(V.a)`
  width: 100%;
  text-align: center;
`,Ds=Object(l.c)(F.a)`
  width: 100%;
  padding: 30px;
`,ys=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,Ps=Object(l.c)(F.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`;const Ss=Object(Ja.g)({mapPropsToValues:({port:e})=>{const{nameOverride:t,enable:a}=e;return{name:t,enable:null==a||a}},validationSchema:Qa.a.object().shape({enable:Qa.a.boolean(),name:Qa.a.string()}),handleSubmit:(e,{props:{activeItem:{_id:t,port_overrides:a,mac:n},port:c,intl:r,history:l,updateDeviceWithIdEndpoint:i}})=>{const o=r.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"});i({port_overrides:[...(null==a?void 0:a.filter(({port_idx:e})=>e!==c.portIdx))||[],{port_idx:c.portIdx,...e}]},t,n,{successToast:{icon:ra.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:o}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{l.goBack()})}});var As=Object(vt.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanelId:a}})=>({port:Object(O.getCurrentPortData)(+a.replace(/\D/g,""),t)}),{updateDeviceWithIdEndpoint:O.updateDeviceWithIdEndpoint}),M.f,Ss)((function({activeItem:e,port:t,history:a,submitForm:n,resetForm:l,dirty:i}){const E=Object(c.useCallback)(()=>{l(),a.goBack()},[l,a]),s=Object(o.useSelector)(un.selectNetworkGroups),m=Object(_c.h)(t.ifname,e,s),d=Object(O.getDeviceModelFeature)(e,"poe");return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ds,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(fs,{alignItems:"center"},r.a.createElement(w.f,{onClick:E,style:{cursor:"pointer"}}),r.a.createElement(Ts,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:t.portIdx,networkGroup:null==m?void 0:m.label}}))),r.a.createElement(Ps,{marginBottom:24},r.a.createElement(Jn.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),d&&r.a.createElement(Ps,{marginBottom:24},r.a.createElement(F.a,{flexDirection:"column",flex:"1"},r.a.createElement(ys,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_POWER_LABEL"})),r.a.createElement(V.a,{color:"tertiary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PORT_FORM_PORT_POWER_DESCRIPTION"}))),r.a.createElement(Jn.Field,{name:"enable",type:"checkbox"}))),r.a.createElement(yn,{isDirty:i,onFormSubmit:n,onFormCancel:E,allowCancel:!0}))}));const js=Object(l.c)(F.a)`
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
`,xs=Object(l.c)("span")`
  padding-left: 6px;
`,Ls=Object(l.c)(w.W)`
  margin-right: 10px;
`,Vs=Object(l.c)(w.g)`
  position: absolute;
  right: 0;
`,ws=Object(l.c)("div")`
  padding-top: 10px;
`,Ms=[{id:"hostnameInfo",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_CLIENT"})),renderCell:({hostname:e,client:t,mac:a,name:n})=>r.a.createElement(r.a.Fragment,null,t?r.a.createElement(B.a,{client:t}):null,r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement(xs,null,n||e||a))),minWidth:90},{id:"date",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_DATE"})),renderCell:({date:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:90},{id:"start",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_TIME"})),renderCell:({start:e})=>r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},e),minWidth:60},{id:"experienceInfo",renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE"})),renderCell:({experience:e})=>r.a.createElement(r.a.Fragment,null,e>=0?r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},r.a.createElement("span",{style:{color:we.a["color-"+Object(Fe.c)(e)]}},e,"%")):r.a.createElement(M.c,{id:"COMMON_NA"}),r.a.createElement(Vs,{size:"small"})),minWidth:90}];var Fs=({activeItem:e})=>{let t;"mac"in e&&({mac:t}=e);const{data:a,isLoading:l,error:i}=Object(o.useSelector)(Object(da.selectFormattedSessionData)(t,!0,[])),E=Object(n.k)(),s=Object(c.useCallback)(()=>r.a.createElement(ws,null,a.length>0&&r.a.createElement(M.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})),[a.length]);return Object(x.f)([Object(da.fetchSession)(t,!0)],r.a.createElement(js,{justifyContent:"flex-start",alignItems:"center"},!l&&a.length>0&&r.a.createElement(Te.a,{items:a,disableColumnFilters:!0,columns:Ms,onRowClick:({id:e})=>E.push("overview/history/"+e),rowHeight:30,renderFooter:s}),(!l||i)&&0===a.length&&r.a.createElement(Ns,null,r.a.createElement(Ls,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"}))))};var Us=({activeItem:e,flexProps:t})=>{const a=Object(Fe.d)(null==e?void 0:e.satisfaction),{na:n,ng:c,naNumSta:l,ngNumSta:i}=Object(O.getSatisfactionByRadio)(e);return a?r.a.createElement(qt,{flexProps:{...t,flexDirection:"column",marginBottom:0}},r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_2G"})),i&&0!==c?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(c,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(c,100))]}}):r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_5G"})),l&&0!==n?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(n,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(n,100))]}}):r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"})))):null};var Bs=({activeItem:{uptime:e}})=>e>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_UPTIME"})),r.a.createElement(V.a,{color:"secondary",size:"body"},Object(Kt.a)(e))):null;var zs=({activeItem:e})=>{var t,a;const n=null!==(t=e.link_capacity)&&void 0!==t?t:Object(O.isUBB)(e)&&(null===(a=e.peer_ubb)||void 0===a?void 0:a.link_capacity);return n>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",color:"secondary",input:1e6*n/8,options:"bitrate"})):null};var ks=({activeItem:{loadAvg:e},flexProps:t})=>e?r.a.createElement(qt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;const Ws=Object(l.c)(V.a)`
  white-space: nowrap;
  margin-right: 12px;
`,Hs=Object(l.c)(V.a)`
  text-align: right;
`;var $s=({condition:e,definition:t,hideOnEmpty:a,placeholder:n="...",value:c})=>Object(x.f)(e,c||!a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ws,{color:"secondary"},t),r.a.createElement(Hs,{color:"secondary"},c)):null,{placeholder:r.a.createElement(r.a.Fragment,null,r.a.createElement(Ws,{color:"secondary"},t),r.a.createElement(Hs,{color:"secondary"},n))}),Gs=a(374),Ys=a(35);const Xs=Object(_.a)(Gs.selectAPGroupsData,Ys.selectWifiNetworksData,T,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).reduce((e,a)=>[...e,...t.filter(e=>e.ap_group_ids.includes(a._id))],[])),Ks=Object(l.c)(V.a)`
  max-width: 200px;
`;var Zs=()=>{const e=Object(o.useSelector)(Xs),t=Object(Ys.getWifiNetworkNames)(e,!1);return t?r.a.createElement(qt,null,r.a.createElement($s,{value:r.a.createElement(Ks,{size:"body",truncate:!0},t),condition:[Object(Gs.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}}),Object(Ys.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_WIFI"}))})):null};const qs=Object(l.c)(V.a)`
  max-width: 200px;
`;var Js=()=>{const e=Object(o.useSelector)(Xs),t=Object(Ys.getWifiNetworkNames)(e,!0);return t?r.a.createElement(qt,null,r.a.createElement($s,{value:r.a.createElement(qs,{size:"body",truncate:!0},t),condition:[Object(Gs.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}}),Object(Ys.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_HOTSPOT"})),hideOnEmpty:!0})):null};const Qs=Object(l.c)(V.a)`
  max-width: 200px;
`;var em=({activeItem:{mac:e},flexProps:t})=>{const a=Object(o.useSelector)(t=>Object(Gs.selectAPGroupsByDeviceMac)(t,e)),n=a&&a.map(({name:e})=>e).sort().join(", ");return n?r.a.createElement(qt,{flexProps:t},r.a.createElement($s,{value:r.a.createElement(Qs,{size:"body",truncate:!0},n),condition:[Object(Gs.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],definition:r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMBERSHIP_AP_GROUP"}))})):null};var tm=({activeItem:{"user-num_sta":e,satisfaction:t}})=>Object(Fe.d)(t)?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e||0)):null;var am=({activeItem:{"guest-num_sta":e,satisfaction:t}})=>Object(Fe.d)(t)?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_GUESTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e||0)):null,nm=({children:e})=>r.a.createElement(ye.g,{height:"100%",flexDirection:"column"},e);var cm=({activeItem:e})=>r.a.createElement(nm,null,[{C:Us},{C:Bs},{C:zs},{C:rl},{C:ks},{C:Zs},{C:Js},{C:em},{C:tm},{C:am}].map(({C:t})=>r.a.createElement(t,{activeItem:e,key:t.name})));const rm=Object(l.c)("div")`
  height: 100%;
`,lm=Object(l.c)("div")`
  margin: ${({theme:e})=>e.spacing["spacing-xl"]} 0;
`,im=[{id:"name",sortable:!0,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_NAME"})),renderCell:e=>r.a.createElement(V.a,{size:"body",truncate:!0},e.name)},{id:"bssid",sortable:!0,minWidth:35,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID"})),renderCell:e=>r.a.createElement(V.a,{size:"body",truncate:!0},e.bssid)},{id:"essid",sortable:!0,minWidth:30,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_ESSID"})),renderCell:e=>r.a.createElement(V.a,{size:"body",truncate:!0},e.essid)},{id:"channel",sortable:!0,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})),renderCell:e=>r.a.createElement(V.a,{size:"body"},e.channel)}];function om({activeItem:{vap_table:e}}){return r.a.createElement(rm,null,r.a.createElement(Te.a,{items:e||[],disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,columns:im,renderFooter:()=>e&&e.length?r.a.createElement(lm,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_NO_WLAN"}),rowHeight:30,idField:"name"}))}const Em=Object(_.a)(Gs.selectAPGroupsData,Ys.selectWifiNetworksData,T,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).map(e=>{const a=t.filter(t=>t.ap_group_ids.includes(e._id)),n=[];return a.forEach(t=>{t.wlan_band===Ys.WlanBand.BOTH?n.push({...t,id:t._id+e._id+Ys.WlanBand.NA,wlan_band:Ys.WlanBand.NA},{...t,id:t._id+e._id+Ys.WlanBand.NG,wlan_band:Ys.WlanBand.NG}):n.push({...t,id:t._id+e._id})}),{...e,id:e._id,children:n}})),sm=Object(l.c)(w.tc)`
  margin-right: 7px;
  margin-bottom: 2px;
`,mm=[{id:"name",label:r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_GROUP_TABLE_HEADER_NAME"})),renderCell:({name:e,attr_no_delete:t,children:a,wlan_band:n})=>a?r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},t?r.a.createElement(r.a.Fragment,null,e," (",r.a.createElement(M.c,{id:"COMMON_WORD_DEFAULT"}),")"):e):r.a.createElement(V.a,{truncate:!0,color:"secondary",size:"body"},n===Ys.WlanBand.NG?r.a.createElement(r.a.Fragment,null,r.a.createElement(sm,{isActive:!0}),e," (",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_BAND_2GHZ"}),")"):r.a.createElement(r.a.Fragment,null,r.a.createElement(sm,{isActive:!0}),e," (",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_BAND_5GHZ"}),")"))}];var dm=()=>{const e=Object(o.useSelector)(Em);return Object(x.f)([Object(Gs.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],r.a.createElement(Te.a,{items:e,columns:mm,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0}))};const _m=Object(l.c)("div")`
  text-align: center;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 32px 40px;
`,um=Object(l.c)("div")`
  margin-bottom: 2px;
`,pm=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[3]}px;
`,bm=Object(l.c)(w.d)`
  color: ${Oo.n.warning};
`;var Om=({activeItem:e})=>{const t=Object(O.isAdopted)(e),a=Object(Fe.d)(null==e?void 0:e.satisfaction),n=Object(c.useMemo)(()=>t?a?r.a.createElement(Yt,{item:e,headerTitle:"DEVICE_HEADER_WIFI_EXPERIENCE",showGraph:e&&a,itemType:"ap",canReport:!0}):r.a.createElement(_m,null,r.a.createElement(um,null,r.a.createElement(bm,{width:26,height:26})),r.a.createElement(um,null,r.a.createElement(pm,null,r.a.createElement(M.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE_NA"}))),r.a.createElement(um,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE_NA_DESCRIPTION"})))):null,[t,a,e.satisfaction]);return r.a.createElement(r.a.Fragment,null,n,r.a.createElement(hl,{activeItem:e}))},Im=a(55),gm=a(453);var hm=({activeItem:e,radio:t})=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(gm.a,{device:e,radio:e.radio_table.find(e=>e.radio===t),hidePowerInfo:!0})));var Cm=Object(M.f)(({activeItem:e,radio:t,intl:a})=>{const n=Object(O.getRadioStatsTransmitPowerString)(e,null==e?void 0:e.radio_table_stats.find(e=>e.radio===t),a);return n?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null});var Rm=({activeItem:e,radio:t})=>{const{totalPackets:a,totalBytes:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"tx");return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a," / ",n))};var vm=({activeItem:e,radio:t})=>{var a;const{totalPackets:n,totalBytes:c}=Object(O.getApRadioStats)(e,null===(a=null==e?void 0:e.radio_table)||void 0===a?void 0:a.find(e=>e.radio===t),"rx");return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n," / ",c))};var fm=({activeItem:e,radio:t})=>{const{retryPercentage:a,droppedPercentage:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"tx");return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a,"% / ",n,"%"))};var Tm=({activeItem:e,radio:t})=>{const{retryPercentage:a,droppedPercentage:n}=Object(O.getApRadioStats)(e,e.radio_table.find(e=>e.radio===t),"rx");return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},a,"% / ",n,"%"))};var Dm=({activeItem:e,radio:t,flexProps:a})=>{var n;const c=Object(O.getRadioChannelUtilization)(e,null===(n=null==e?void 0:e.radio_table_stats)||void 0===n?void 0:n.find(e=>e.radio===t));return c?r.a.createElement(qt,{flexProps:a},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"})),r.a.createElement(V.a,{color:"secondary",size:"body"},`${c.total}% / ${c.selfRx}% / ${c.selfTx}%`)):null};var ym=({activeItem:e,radio:t})=>{var a,n;return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(n=null===(a=null==e?void 0:e.radio_table_stats)||void 0===a?void 0:a.find(e=>e.radio===t))||void 0===n?void 0:n["user-num_sta"]))};var Pm=({activeItem:e,radio:t})=>{var a,n;return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_GUESTS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},null===(n=null===(a=null==e?void 0:e.radio_table_stats)||void 0===a?void 0:a.find(e=>e.radio===t))||void 0===n?void 0:n["guest-num_sta"]))};const Sm=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,Am=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var jm=({activeItem:e,radio:t})=>r.a.createElement(Am,null,r.a.createElement(Sm,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:(e=>{switch(e){case Im.b.NG:return"DEVICE_HEADER_RADIO2G_SHORT";case Im.b.NA:return"DEVICE_HEADER_RADIO5G_SHORT";case Im.b.AD:return"DEVICE_HEADER_RADIO60G_SHORT";default:return"COMMON_UNKNOWN"}})(t)})),r.a.createElement(nm,null,[{C:hm},{C:Cm},{C:Rm},{C:vm},{C:fm},{C:Tm},{C:Dm,flexProps:{}},{C:ym},{C:Pm}].map(({C:a,flexProps:n={}})=>r.a.createElement(a,{activeItem:e,radio:t,flexProps:n,key:`${a.name}-${t}`}))));const Nm=Object(l.c)(de.a)`
  font-weight: normal;
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`,xm=()=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_HYPHEN"})));var Lm=({uplinkDevice:e,uplinkName:t,params:a,path:l,history:i})=>{const E=Object(o.useDispatch)(),{site:s,page:m,subPage:_}=a,{mac:u}=e,p=Object(c.useCallback)(e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(l,{id:u,site:s,page:m,panel:"overview",subPage:_});i.push(t),E(Object(N.g)({type:d.b.DEVICE,mac:u}))},[]);return r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),r.a.createElement(Nm,{variant:"link",onClick:p},t))};var Vm=({activeItem:e,flexProps:t})=>{const a=Object(o.useSelector)(O.selectDevicesData),n=Object(O.getUplinkRemotePort)(a,e);return r.a.createElement(qt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==n?void 0:n.poe_power)||0}})))};var wm=({uplink:{rx_packets:e,rx_bytes:t}})=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{size:"body",type:"number",input:e,color:"secondary"})," / ",Object(Xt.c)(t)):"- / -"));var Mm=({uplink:{tx_packets:e,tx_bytes:t}})=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{size:"body",type:"number",input:e,color:"secondary"})," / ",Object(Xt.c)(t)):"- / -"));var Fm=({uplink:{"rx_bytes-r":e,"tx_bytes-r":t}},a=!0)=>a?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),r.a.createElement(me.a,{size:"body",color:"secondary",type:"bytes",input:t+e||0,options:"bitrate"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",input:e||0,options:"bitrate",color:"secondary"})),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),r.a.createElement(me.a,{size:"body",type:"bytes",input:t||0,options:"bitrate",color:"secondary"})));var Um=({uplink:{rssi:e}})=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},ml(e)," (",dl(e)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")"));var Bm=({uplink:{tx_rate:e}})=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_TX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{type:"bytes",input:1e3*e/8,options:"bitrate",color:"secondary"})));var zm=({activeItem:e,flexProps:t})=>r.a.createElement(qt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_RX_RATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(me.a,{type:"bytes",input:1e3*e.uplink.rx_rate/8,options:"bitrate",color:"secondary"})));var km=({activeItem:e,params:t,path:a,history:n})=>{const c=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),l=Object(O.getUplinkDisplayName)(e,c),i=Object(O.getUplinkAttrs)(e)||{},E="wire"===e.uplink.type?[(null==c?void 0:c.mac)?{C:Lm,props:{uplinkDevice:c,uplinkName:l,params:t,path:a,history:n}}:{C:xm},{C:il,props:{uplink:i}},{C:Vm,props:{activeItem:e},flexProps:{}},{C:wm,props:{uplink:i}},{C:Mm,props:{uplink:i}},{C:Fm,props:{uplink:i}}]:[(null==c?void 0:c.mac)?{C:Lm,props:{uplinkDevice:c,uplinkName:l,params:t,path:a,history:n}}:{C:xm},{C:Um,props:{uplink:i}},{C:Bm,props:{uplink:i}},{C:zm,props:{activeItem:e},flexProps:{}},{C:wm,props:{uplink:i}},{C:Mm,props:{uplink:i}},{C:Fm,props:{uplink:i}}];return r.a.createElement(nm,null,E.map(({C:e,props:t,flexProps:a={}})=>r.a.createElement(e,Object.assign({},t,{flexProps:a,key:e.name}))))};const Wm=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Hm=function({activeItem:e,...t}){var a,n;const l=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),i=[...null!==(a=null==e?void 0:e.radio_table)&&void 0!==a?a:[]].sort(O.sortRadios).reverse();return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Om,{activeItem:e}),r.a.createElement(Wm,{variant:"secondary",items:[{id:"history",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>r.a.createElement(Fs,Object.assign({activeItem:e},t))},{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(cm,{activeItem:e})},...(null===(n=null==e?void 0:e.uplink)||void 0===n?void 0:n.mac)?[{id:"uplink",label:"wire"===e.uplink.type?r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>r.a.createElement(km,Object.assign({activeItem:e},t))}]:[],...(null==i?void 0:i.length)?[{id:"airStats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>r.a.createElement(jm,{activeItem:e,radio:t,key:t}))}]:[],{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_DOWNLINKS"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"apGroups",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>r.a.createElement(dm,null)},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))},{id:"wlan",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_WLAN"}),renderContent:()=>r.a.createElement(om,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})))};const $m=e=>Object(Ia.t)("spectrumScan","/api/s/{site}/stat/spectrum-scan/"+e,e,void 0,{idField:"mac"}),Gm=(e,t)=>Object(dt.a)(((e,t)=>Object(Ia.w)($m(t),e.models))(e,t),"data",[]);var Ym=a(283),Xm=a(799);const Km=[{from:-96,to:-92,color:"#fda839"},{from:-92,to:-88,color:"#fda839"},{from:-88,to:-84,color:"#fda129"},{from:-84,to:-80,color:"#fd9a19"},{from:-80,to:-76,color:"#fd930b"},{from:-76,to:-72,color:"#f87f0c"},{from:-72,to:-68,color:"#f26a13"},{from:-68,to:-64,color:"#f26a13"},{from:-64,to:-60,color:"#ec5619"},{from:-60,to:-56,color:"#d44515"},{from:-56,to:-52,color:"#c64013"},{from:-52,to:-48,color:"#bf3d12"}],Zm={ng:16,na:42},qm={ng:8,na:0},Jm={ng:[{from:2400,to:2500}],na:[{from:5170,to:5330},{from:5490,to:5730},{from:5735,to:5850}]},Qm={domain:[0,23.3,35,46.6,58.3,100],values:["#fda93a","#fda93a","#fd9208","#ea4e1a","#bf3d12","#bf3d12"]},ed={20:{domain:[0,6.2,28.1,49.9,71.9,100],values:Qm.values},40:{domain:[0,1.6,24.6,47.4,70.5,100],values:Qm.values},80:{domain:[23.3,35,46.6,58.3,100],values:Qm.values.slice(1)},160:{domain:[23.3,35,46.6,58.3,100],values:Qm.values.slice(1)}},td=Object(l.c)(V.a)`
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
`,pd=e=>l.a`
  background: linear-gradient(
    90deg,
    ${ed[e].values.map((t,a)=>`${t} ${ed[e].domain[a]}%`).join(",")}
  );
`,bd=Object(l.c)("div")`
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
`;var Id=Object(md.a)(({data:e,width:t,motif:a})=>{if(!e||!e.length)return null;const n=e.length;return r.a.createElement(dd,null,r.a.createElement(_d,null,e.map((e,c)=>{const l=c/n*100,i=fl.a.scale(ed[t].values).domain(ed[t].domain)(l).css();return r.a.createElement(bd,{width:n+"%",key:"rssi-bar-"+(c+1),motif:a},r.a.createElement(Od,{height:e+"%",background:i}))})),r.a.createElement(ud,{className:pd(t)}))});const gd=Object(l.c)(w.Qb)`
  margin-top: -4px;
  margin-right: 4px;
`,hd=Object(l.c)("div")`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Cd=Object(l.c)("div")`
  text-transform: uppercase;
  margin: 16px 0 8px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Rd=Object(l.c)(F.a)`
  margin-bottom: 4px;
`,vd=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
  min-width: 50%;
`,fd=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  min-width: 50%;
`;var Td=Object(M.f)(({isAc:e=!1,spectrumEntry:t,data:a,radioType:n,width:c,intl:l})=>{if(!a)return null;const{interference:i,utilization:o,rssi_histogram:E}=t||{},{lowerFrequency:s,upperFrequency:m,subChannels:d,channel:_}=a,u=`${s} - ${m} ${l.formatMessage({id:"COMMON_UNIT_MHZ"})}`,p=`DEVICE_PROPERTIES_SECTION_RADIOS_SUBSECTION_${n.toUpperCase()}${e&&"na"===n?"_AC":""}`;return r.a.createElement("div",null,r.a.createElement(hd,null,r.a.createElement(gd,null),r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL"})," ",_),r.a.createElement(Cd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW"})),r.a.createElement(Rd,null,r.a.createElement(vd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_RADIO"})),r.a.createElement(fd,null,r.a.createElement(M.c,{id:p}))),r.a.createElement(Rd,null,r.a.createElement(vd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH"})),r.a.createElement(fd,null,c," ",r.a.createElement(M.c,{id:"COMMON_UNIT_MHZ"}))),+c>20&&r.a.createElement(Rd,null,r.a.createElement(vd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_USED_CHANNELS"})),r.a.createElement(fd,null,d.join(", "))),r.a.createElement(Rd,null,r.a.createElement(vd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_FREQUENCY_RANGE"})),r.a.createElement(fd,null,u)),!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Cd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_RF_SCAN_DETAILS"})),r.a.createElement(Rd,null,r.a.createElement(vd,null,r.a.createElement(M.c,{id:"DEVICE_HEADER_UTILIZATION"})),r.a.createElement(fd,null,o,"%")),r.a.createElement(Rd,null,r.a.createElement(vd,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})),r.a.createElement(fd,null,i," ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))),E&&E.length&&r.a.createElement(Id,{data:E,width:c})))});const Dd=Object(l.c)(bn.a)`
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
`,yd=Object(l.c)("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({height:e})=>e};
  background-color: ${({background:e})=>e};
`,Pd=l.a`
  width: 240px !important;
  transform: translateX(18px) !important;
`;var Sd=({spectrumData:e,channels:t,channelWidth:a,rowCount:n,lowerFrequency:c,singleFrqeuencyWidth:l,type:i,className:o=null})=>r.a.createElement(r.a.Fragment,null,t.map((t,E)=>{const s=e&&e.spectrum_table&&(e=>{const t=e.length,a=t&&e.reduce((e,t)=>(e.interference+=t.interference,e.utilization+=t.utilization,e.rssi_histogram&&t.rssi_histogram&&(e.rssi_histogram=e.rssi_histogram.map((e,a)=>e+(t.rssi_histogram&&t.rssi_histogram[a]||0))),e));return a&&a.interference&&(a.interference=Math.round(a.interference/t),a.utilization=Math.round(a.utilization/t),a.rssi_histogram=a.rssi_histogram&&a.rssi_histogram.map(e=>Math.round(e/t))),a})(e.spectrum_table.filter(e=>e.width===parseInt(a,10)&&t.subChannels.includes(e.channel))),m=s&&s.utilization||0,d=s&&s.interference||-96,_=e&&(Km.find(e=>Object(sd.a)(d,e.from,e.to))||{}).color||"transparent",u=t.upperFrequency-t.lowerFrequency,p=21+(Zm[i]+qm[i])*(E%n),b=(t.lowerFrequency-c)*l;return r.a.createElement(Dd,{key:`rf-${i}-${a}-channel-${t.subChannels.toString()}`,width:l*u+"%",height:Zm[i]+"px",top:p+"px",left:b+"%",className:o,message:r.a.createElement(Td,{width:a,data:t,spectrumEntry:s,radioType:i}),position:"bottomRight",tooltipClassName:Pd,portal:!0},r.a.createElement(yd,{height:m+"%",background:_}))}));var Ad=r.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a})=>{const n=e.scans&&e.scans.find(e=>e.radio===Ym.a.NG.type),c=["20"];Object(O.isHt40Supported)(t,a,Ym.a.NG.type)&&c.push("40");const l=c.reduce((e,n)=>{const c=Object(Ri.c)(t,a,Ym.a.NG.type,n);return e[n]=Object.entries(O.WIFI_CHANNELS.ng[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>c.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),i=10*Math.floor(Math.min(l[20][0].lowerFrequency,l[40][0].lowerFrequency)/10),o=10*Math.ceil(Math.max(l[20][l[20].length-1].upperFrequency,l[40][l[40].length-1].upperFrequency)/10),E=o-i,s=E/10-1,m=100/(s+1),d=100/E;return r.a.createElement("div",null,Object.keys(l).map(e=>{const t=l[e],a="20"===e?5:10,c=Math.min(a,t.length)*(Zm.ng+qm.ng)-qm.ng+42;return r.a.createElement("div",{key:"channel-width-"+e},r.a.createElement(td,null,r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:e}}))),r.a.createElement(ad,null,Jm.ng.map(l=>r.a.createElement(nd,{key:`widths-${l.from}-${l.to}`,width:"100%",height:c+"px"},r.a.createElement(ld,{count:s,offset:m}),r.a.createElement(Ed,{count:s,offset:m,start:i,end:o,step:10}),r.a.createElement(Sd,{spectrumData:n,channels:t,channelWidth:e,rowCount:a,lowerFrequency:i,singleFrqeuencyWidth:d,type:Ym.a.NG.type})))))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(oi.a)(Object(dt.a)(e,a),Object(dt.a)(t,a))));const jd=l.a`
  + div {
    border-left: none;
  }
`;var Nd=r.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a,intl:n})=>{const c=e.scans&&e.scans.find(e=>e.radio===Ym.a.NA.type),l=["20"];Object(O.isHt40Supported)(t,a,Ym.a.NA.type)&&l.push("40"),Object(O.isHt80Supported)(t,a)&&l.push("80"),Object(O.isHt160Supported)(t,n,a,"rai0")&&l.push("160");const i=l.reduce((e,n)=>{const c=Object(Ri.c)(t,a,Ym.a.NA.type,n);return e[n]=Object.entries(O.WIFI_CHANNELS.na[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>c.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),o=Object(Zn.a)(i[20],e=>Jm.na.findIndex(t=>Object(sd.a)(e.centerFrequency,t.from,t.to))),E=o[1]&&o[1].length,s=o[2]&&o[2].length,m=100/(i[20].length+(E?1:0)+(s?1:0));return r.a.createElement("div",null,Object.keys(i).map(e=>{const t=i[e],a=+e;return r.a.createElement("div",{key:"channel-width-"+e},r.a.createElement(td,null,r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:a}}))),r.a.createElement(ad,{justifyContent:"space-between"},Jm.na.map((a,n)=>{const l=t.filter(({centerFrequency:e})=>Object(sd.a)(e,a.from,a.to)),i=o[n]&&o[n].length||0,E=i*m,s=100/i/20,d=20*s*4,_=Math.floor((i-1)/4);return l.length?r.a.createElement(nd,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+Zm.na+"px"},r.a.createElement(ld,{count:_,offset:d}),r.a.createElement(Ed,{count:_,offset:d,start:a.from,end:a.to,step:80}),r.a.createElement(Sd,{spectrumData:c,channels:l,channelWidth:e,rowCount:1,lowerFrequency:a.from,singleFrqeuencyWidth:s,type:Ym.a.NA.type,className:jd})):r.a.createElement(cd,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+Zm.na+"px"})})))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(oi.a)(Object(dt.a)(e,a),Object(dt.a)(t,a))));const xd=Object(l.c)(Do.a)`
  width: 100% !important;
  margin-bottom: 16px;
`,Ld=Object(l.c)(F.a)`
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
`,Bd=Object(l.c)(F.a)`
  margin: 4px 0;
`,zd=Object(l.c)("div")`
  padding: 4px 0;
  font-size: 10px;
`,kd=Object(l.c)("div")`
  position: absolute;
  ${({right:e})=>e&&`right: ${e};`}
  ${({left:e})=>e&&`left: ${e};`}
`;var Wd=Object(vt.compose)(Object(o.connect)((e,{activeItem:{mac:t}})=>({spectrumScan:Gm(e,t)}),{fetchCountryChannels:Ri.a,fetchSpectrumScan:$m,confirm:ec.a,scanDeviceRFEnvironments:O.scanDeviceRFEnvironments,hideModal:Ut.e}),Object(_l.c)(({activeItem:{mac:e},fetchSpectrumScan:t,fetchCountryChannels:a})=>Promise.all([t(e),a(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})])),M.f)(({activeItem:e,confirm:t,scanDeviceRFEnvironments:a,hideModal:n,spectrumScan:l,intl:i})=>{const E=Object(o.useDispatch)(),s=Object(c.useMemo)(()=>Object(O.getRadios)(e),[e]),m=Object(c.useMemo)(()=>null==s?void 0:s.find(e=>e.radio===Ym.a.NG.type),[s]),d=Object(c.useMemo)(()=>null==s?void 0:s.find(e=>e.radio===Ym.a.NA.type),[s]),[_,u]=Object(c.useState)(m?Ym.a.NG.type:Ym.a.NA.type),p=Object(Xm.a)(null==e?void 0:e.spectrum_scanning),b=Object(o.useSelector)(Ri.d);Object(c.useEffect)(()=>{p&&!(null==e?void 0:e.spectrum_scanning)&&E($m(null==e?void 0:e.mac))},[null==e?void 0:e.mac,null==e?void 0:e.spectrum_scanning,p,E]);const I=Object(c.useCallback)((e,t)=>{u(t)},[u]),g=Object(c.useCallback)(()=>{t({message:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_MESSAGE",title:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_TITLE",onConfirm:()=>{a(e),n()}})},[e,t,a,n]),h=Object(c.useMemo)(()=>"wire"===Object(dt.a)(e,"uplink.type",""),[e]),C=Object(c.useMemo)(()=>{var e;return null===(e=null==l?void 0:l.scans)||void 0===e?void 0:e.find(({radio:e})=>e===_)},[null==l?void 0:l.scans,_]),R=Object(c.useMemo)(()=>[...m?[{label:i.formatMessage({id:"DEVICE_PROPERTIES_RF_2G_RF_ENV"}),value:Ym.a.NG.type}]:[],...d?[{label:i.formatMessage({id:"DEVICE_PROPERTIES_RF_5G_RF_ENV"}),value:Ym.a.NA.type}]:[]],[m,d,i]),v=Object(c.useMemo)(()=>(null==e?void 0:e.spectrum_scanning)?r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_IN_PROGRESS"}):(null==C?void 0:C.spectrum_table_time)?r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_TIME_AGO",values:{time:Object(ft.distanceInWordsToNow)(1e3*C.spectrum_table_time)}}):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_NEVER_SCANNED"}),[null==e?void 0:e.spectrum_scanning,null==C?void 0:C.spectrum_table_time]);return h&&(null==R?void 0:R.length)?r.a.createElement(r.a.Fragment,null,r.a.createElement(xd,{id:"rf_type",value:_,options:R,onChange:I,inputProps:{full:!0}}),r.a.createElement(Ld,{justifyContent:"space-between"},r.a.createElement(Vd,null,r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_LAST_SCAN"})," ",v)),r.a.createElement(wd,{variant:"link",disabled:e.spectrum_scanning,onClick:g},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_ACTION_START_SCAN"}))),_===Ym.a.NA.type?r.a.createElement(Nd,{deviceData:e,spectrumScan:l,countryChannels:b,intl:i}):r.a.createElement(Ad,{deviceData:e,spectrumScan:l,countryChannels:b}),r.a.createElement(Md,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_RF_LEGEND"})),r.a.createElement(Ud,null,r.a.createElement(kd,null,"-96"),r.a.createElement(kd,{left:"30%"},"-80"),r.a.createElement(kd,{left:"64%"},"-64"),r.a.createElement(kd,{right:"0"},"-48 ",r.a.createElement(M.c,{id:"COMMON_UNIT_DBM"}))),r.a.createElement(Bd,{justifyContent:"space-between"},Km.map(({color:e,from:t,to:a})=>r.a.createElement(Fd,{width:7.5,background:e,key:`dbm-${t}-${a}`}))),r.a.createElement(zd,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_LEGEND_UTILIZATION"})))):r.a.createElement(Ld,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_DISABLED_MESSAGE"})))}),Hd=a(765);const $d=Object(l.c)("tr")`
  white-space: nowrap;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
`,Gd=Object(l.c)("td")`
  vertical-align: top;
`,Yd=Object(l.c)("td")`
  padding-left: 12px;
  padding-bottom: 2px;
  text-align: right;
  vertical-align: top;
`;var Xd=({device:e,radio:t,channelUtilization:a})=>{const{totalPackets:n,totalBytes:c,droppedPercentage:l,retryPercentage:i}=Object(O.getApRadioStats)(e,t,"rx"),{totalPackets:o,totalBytes:E,droppedPercentage:s,retryPercentage:m}=Object(O.getApRadioStats)(e,t,"tx");return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement($d,null,r.a.createElement(Gd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},o," / ",E))),r.a.createElement($d,null,r.a.createElement(Gd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},n," / ",c))),r.a.createElement($d,null,r.a.createElement(Gd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},m,"% / ",s,"%"))),r.a.createElement($d,null,r.a.createElement(Gd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},i,"% / ",l,"%"))),a&&r.a.createElement($d,null,r.a.createElement(Gd,null,r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),r.a.createElement(Yd,null,r.a.createElement(V.a,{color:"secondary"},`${a.total}% / ${a.selfRx}% / ${a.selfTx}%`)))))};const Kd=Object(l.c)("div")`
  &:first-child {
    margin-bottom: 24px;
  }
`,Zd=Object(l.c)("div")`
  flex: 1;
`,qd=Object(l.c)("span")`
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
`,e_=(e,t)=>{const a="DEVICE_RADIO_PROTOCOL_"+t.toUpperCase();if(t===Im.b.NA){if(Object(O.isAxRadio)(e,t))return a.concat("_AX");if(Object(O.isAcRadio)(e,t))return a.concat("_AC")}return a};var t_=e=>((null==e?void 0:e.radio_table)||[]).reduce((t,a)=>{const n=Object(O.getRadioChannelUtilization)(e,a),{radio:c}=a;if(n){const{selfRx:l,selfTx:i,interference:o,total:E}=n;t.push(r.a.createElement(Kd,{key:a.name},r.a.createElement(ye.g,{justifyContent:"space-between"},r.a.createElement(Zd,null,r.a.createElement(gm.a,{device:e,radio:a,hideDfsInfo:!0,hideHtInfo:!0,hidePowerInfo:!0,hideChannelTooltip:!0,textColor:"primary",textSize:"body",textWeight:"bold"}),r.a.createElement(qd,null),r.a.createElement(V.a,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.c,{id:e_(e,c)}))),r.a.createElement(me.a,{size:"body",color:"secondary",type:"percent",input:Math.min(E,100)/100}),r.a.createElement(Jd,{color:"secondary"},r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_UTILIZED"})))),r.a.createElement(Qd,null,r.a.createElement(bn.a,{message:r.a.createElement(Xd,{device:e,radio:a,channelUtilization:n}),portal:!0},r.a.createElement(Hd.a,{items:[{color:Oo.k.blue,value:l},{color:Oo.g,value:i},{color:Oo.h,value:o}],height:10})))))}return t},[]);const a_=Object(l.c)(ua.a)`
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
`;var i_=function({activeItem:e,...t}){const a=t_(e),n=[];return a.length&&n.push({id:"channelUsage",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>r.a.createElement(c_,{ChannelBars:a})}),Object(O.isDeviceConnected)(e)&&Object(Gn.d)(e,O.WIFI_CAPS.RF_SCAN)&&n.push({id:"rfEvironment",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>r.a.createElement(Wd,{activeItem:e})}),Object(O.isDeviceConnected)(e)&&n.push({id:"dpi",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_DEVICE_IDENTIFICATION"}),renderContent:()=>r.a.createElement(La,{mac:null==e?void 0:e.mac,contentPaddingX:0})}),r.a.createElement(r_,{variant:"secondary",items:n,contentClassName:l_,multiOpen:!0,renderOnlyExpandedContent:!0})};const o_=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,E_=Object(l.c)(ye.g)`
  margin-bottom: 16px;
  width: 100%;
`,s_=Object(Ja.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a}={}})=>({led_override:e,led_override_color:t,led_override_color_brightness:a}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var m_=Object(M.f)(s_(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:n,isValid:l,values:i,resetForm:E,setFieldValue:s,intl:m,formName:d="led"})=>{const _=Object(o.useDispatch)(),{led_override:u}=e,p=Object(o.useSelector)(Ei.selectMgmtSettings),b=Object(Gn.j)(e),I=(Object(dt.a)(p,"led_enabled",!1)&&u!==O.LedOverride.OFF||u===O.LedOverride.ON)&&b;Object(c.useEffect)(()=>(_(Object(N.h)({[d]:()=>i})),_(Object(N.j)({[d]:()=>E({values:i})})),_(Object(N.i)({[d]:E})),()=>{_(Object(N.h)({[d]:null})),_(Object(N.j)({[d]:null})),_(Object(N.i)({[d]:null}))}),[_,E,i,d]),Object(c.useEffect)(()=>{t(d,n),a(d,!l)},[t,n,a,l,d]);const g=Object(c.useCallback)(()=>["on","default"].includes(i.led_override)?s("led_override","off"):s("led_override","on"),[s,i.led_override]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E_,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_LED_ENABLE"})),r.a.createElement(qE.a,{checked:["on","default"].includes(i.led_override),onChange:g}))),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o_,{marginBottom:12},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"}))),r.a.createElement(o_,{marginBottom:12},r.a.createElement(ii.a,{size:"large",value:+i.led_override_color_brightness||100,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement("span",null,e,"%"),onChange:e=>s("led_override_color_brightness",e.target.value)})),r.a.createElement(o_,{marginBottom:12},r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),r.a.createElement(o_,{marginBottom:12},r.a.createElement(Ui.a,{color:(null==i?void 0:i.led_override_color)||O.DEFAULT_LED_COLOR,variant:"block",onChange:e=>{s("led_override_color","hex"in e?e.hex:void 0)},hexLabel:m.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:r.a.createElement(de.a,{variant:"inline",onClick:()=>{s("led_override_color",O.DEFAULT_LED_COLOR)}},r.a.createElement(M.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))}));const d_=Object(l.c)("div")`
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
`,p_=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  white-space: pre;
`,b_=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  color: ${({theme:e})=>e.colors.primary};
`,O_=Object(l.c)("div")`
  margin-top: 16px;
`,I_=({device:e})=>{const t=Object(o.useDispatch)();return r.a.createElement(b_,{onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(N.g)({type:d.b.DEVICE,mac:e.mac}))}},r.a.createElement(tt.a,{device:e}))},g_=[{id:"nameInfo",sortable:!0,minWidth:40,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_AP"})),renderCell:e=>r.a.createElement(I_,{device:e})},{id:"channel",sortable:!0,minWidth:30,maxWidth:90,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_CHANNEL"})),renderCell:({channel:e})=>r.a.createElement(V.a,{size:"body"},e)},{id:"rssiInfo",sortable:!0,minWidth:40,maxWidth:80,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_SIGNAL"})),renderCell:({rssi:e})=>r.a.createElement(p_,null,ml(e)," (",dl(e)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];var h_=function({items:e}){return r.a.createElement(d_,null,r.a.createElement(Te.a,{items:e,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:__,rowClassName:u_,columns:g_,idField:"mac",rowHeight:30}),!e.length&&r.a.createElement(O_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_EMPTY"}))))};const C_=-67,R_=-90,v_=Object(l.c)(F.a)`
  margin-bottom: 16px;

  > span {
    text-transform: none;
  }
`,f_=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,T_=Object(l.c)(F.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,D_=Object(l.c)("div")`
  flex: 1;
  max-width: ${({width:e})=>e||"calc(50% - 6px)"};
`,y_=Object(l.c)(V.a)`
  flex: 1;
  margin-right: 12px;
`,P_=Object(l.c)(F.a)`
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
`,N_=[{value:"auto",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_AUTO"},{value:"high",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_HIGH"},{value:"medium",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_MEDIUM"},{value:"low",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_LOW"},{value:"custom",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_CUSTOM"}];class x_ extends c.PureComponent{constructor(){var e,t,a,n;super(...arguments),this.state={initialUplinkPriority1:(null===(t=null===(e=this.props)||void 0===e?void 0:e.activeItem)||void 0===t?void 0:t.mesh_uplink_1)||"",initialUplinkPriority2:(null===(n=null===(a=this.props)||void 0===a?void 0:a.activeItem)||void 0===n?void 0:n.mesh_uplink_2)||""},this.getRadioSubsection=e=>"DEVICE_PROPERTIES_SECTION_CONFIGURE_RADIOS_SUBSECTION_"+e.toUpperCase(),this.executePriorityUplinkAction=(e,t,a,n)=>{const{setPriorityUplink:c,unsetPriorityUplink:r}=this.props;return"SET"===e?c(t,a,n):r(t)},this.updateUplinkPriorities=()=>{const{values:e,activeItem:t}=this.props,{uplinkPriority1:a,uplinkPriority2:n}=e,{mesh_uplink_1:c,mesh_uplink_2:r}=t;if(!((c||"")!==this.state.initialUplinkPriority1||(r||"")!==this.state.initialUplinkPriority2))return;const l=!(!c&&!r)?"SET":"UNSET";this.executePriorityUplinkAction(l,t,a,n)},this.handleMeshingModeChange=e=>{const{setFieldValue:t}=this.props;e.target.checked&&t("meshingMode",e.target.name)},this.handlePriorityChange=(e,t)=>{const{values:a,setFieldValue:n}=this.props;let{uplinkPriority1:c,uplinkPriority2:r}=a;if("uplinkPriority1"===e&&!t.value&&r)return c=r,r="",n("uplinkPriority1",c),void n("uplinkPriority2",r);n(e,t.value)},this.handleEnableMeshingChange=()=>{const{setValues:e,values:t}=this.props,a=!t.meshingEnabled;e({...t,meshingEnabled:a,uplinkMeshEnable:a,radios:t.radios.map(e=>e.type===Ym.a.NA.type?{...e,vwire_enabled:a}:e)})},this.getSaveData=()=>{const{intl:e,priorityUplinkOptions:t,values:a,activeItem:n,dirty:c}=this.props;if(!c)return{};const r=Object(Gn.d)(n,O.WIFI_CAPS.HIDE_CH_WIDTH),l=Object(O.getRadios)(n),i=Object(O.isPureAp)(n),{mesh_uplink_1:o,mesh_uplink_2:E}=(()=>{if("auto"===a.meshingMode)return{mesh_uplink_1:"",mesh_uplink_2:""};const{priorityUplink1:n,priorityUplink2:c}=w_(e,t,a.uplinkPriority1,a.uplinkPriority2);return{mesh_uplink_1:n,mesh_uplink_2:c}})();return{atf_enabled:a.atf_enabled||!1,mesh_sta_vap_enabled:i&&a.meshingEnabled&&("auto"===a.meshingMode||a.uplinkMeshEnable),radio_table:l.map(e=>{const{name:t,radio:c,antenna_gain:l,antenna_id:i,sens_level:o,sens_level_enabled:E}=e,{type:s,...m}=a.radios.find(e=>e.type===c&&e.name===t),d={...m,antenna_gain:l,antenna_id:i,sens_level_enabled:E,sens_level:o,radio:s};if("custom"!==m.tx_power_mode&&delete d.tx_power,d.antenna_id){const e=Object(O.getAntennaById)(n,d.antenna_id);e&&(d.antenna_gain=Object(O.getAntennaGainForRadioName)(e,t))}else delete d.antenna_id;return Object(O.isMinRssiStrictModeSupported)(e)||d.min_rssi_enabled||delete d.hard_noise_floor_enabled,d.min_rssi_enabled||delete d.min_rssi,d.sens_level_enabled||delete d.sens_level,r&&(delete d.channel,delete d.ht),c===Ym.a.NA.type&&(d.vwire_enabled=a.meshingEnabled&&("auto"===a.meshingMode||d.vwire_enabled)),d}),mesh_uplink_1:o,mesh_uplink_2:E}}}componentDidMount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n,priorityUplinkOptions:c,intl:r}=this.props;e({radios:this.getSaveData}),t({radios:e=>{var t,a;this.updateUplinkPriorities();const{atf_enabled:l,mesh_uplink_1:i,mesh_uplink_2:o,mesh_sta_vap_enabled:E}=e,s=Object(O.getRadios)(e),m=null===(a=null===(t=s.find(({radio:e})=>e===Ym.a.NA.type))||void 0===t?void 0:t.vwire_enabled)||void 0===a||a,d=null==E||E,_=m||d,{priorityUplink1:u,priorityUplink2:p}=w_(r,c,i,o),b=_&&m!==d||d&&(u||p)?"manual":"auto",I={radios:s.reduce((e,{name:t,radio:a,ht:n,channel:c,tx_power_mode:r,min_txpower:l,tx_power:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||"20",channel:c||"auto",tx_power_mode:r||"auto",tx_power:i||l||0,vwire_enabled:null!=o?o:a===Ym.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||C_,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:l||!1,meshingEnabled:_,meshingMode:b,uplinkMeshEnable:d,uplinkPriority1:i||"",uplinkPriority2:o||""};n({values:I})}}),a({radios:n})}componentWillUnmount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a}=this.props;e({radios:null}),t({radios:null}),a({radios:null})}componentDidUpdate(){const{dirty:e,setFormDirty:t,setFormInvalid:a,errors:n}=this.props;t("radios",e),a("radios",!!Object.keys(n).length)}getRadioFields(e,t=!1){const{activeItem:a,countryChannels:n,mgmtSettings:c,isConnectivityMonitorEnabled:l,intl:i,isUbbXg:o,values:E,setFieldValue:s,uplinkItems:m,priorityUplinkOptions:d}=this.props,{name:_,radio:u,min_txpower:p,max_txpower:b}=e,{meshingEnabled:I,meshingMode:g,uplinkMeshEnable:h,uplinkPriority1:C,uplinkPriority2:R}=E,v=E.radios.findIndex(e=>e.type===u&&e.name===_),f=E.radios[v],T=Object(O.getRadioHtOptions)(a,e,n,i),D=Object(Gn.d)(a,O.WIFI_CAPS.HIDE_CH_WIDTH),y=c.outdoor_mode_enabled,P=Object(O.isMinRssiStrictModeSupported)(e)&&f.min_rssi_enabled,S=u===Ym.a.NA.type,A=Object(Gn.e)(a)&&S,j=Object(O.isU6Extender)(a),N=Object(O.isUapBeaconHD)(a),x=Object(Ri.b)(n,i,a,u,_,f&&f.ht||"20",{isOutdoorModeEnabled:y}),L=[{value:"auto",label:i.formatMessage({id:"COMMON_VALUE_AUTO"})},...x];L.some(e=>e.value===f.channel)||s(`radios.${v}.channel`,"auto");const w="custom"===(null==f?void 0:f.tx_power_mode),F=Object(O.isPureAp)(a),U=!Object(O.isUBB)(a),{priorityUplinkOptions1:B,priorityUplinkOptions2:z}=V_(i,d,C,R),{priorityUplink1:k,priorityUplink2:W}=w_(i,d,C,R);return r.a.createElement(f_,{key:_,marginBottom:16},r.a.createElement(v_,{alignItems:"center"},u===Ym.a.NG.type&&r.a.createElement(S_,{height:"20",width:"20"}),u===Ym.a.NA.type&&r.a.createElement(A_,{height:"20",width:"23"}),u===Ym.a.AD.type&&r.a.createElement(j_,{height:"20",width:"20"}),r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:this.getRadioSubsection(u)}))),!D&&(o&&u===Ym.a.AD.type?r.a.createElement(T_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${v}.channel`,type:"dropdown",options:L,translateLabel:!0,validated:!0,full:!0})):r.a.createElement(T_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(D_,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH",name:`radios.${v}.ht`,type:"dropdown",options:T,translateLabel:!0,validated:!0,full:!0})),r.a.createElement(D_,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${v}.channel`,type:"dropdown",options:L,translateLabel:!0,validated:!0,full:!0})))),!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(D_,{width:w?"":"100%"},r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER",name:`radios.${v}.tx_power_mode`,type:"dropdown",options:N_,validated:!0,full:!0,translateLabel:!0,translateOptions:!0,disabled:Object(O.isUBB)(a)})),w&&r.a.createElement(D_,null,r.a.createElement(tn.a,{label:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM",name:`radios.${v}.tx_power`,value:E.radios[v].tx_power,min:p,max:b,type:"number",full:!0}))),l&&S&&t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING",name:"meshingEnabled",type:"checkbox",onChange:this.handleEnableMeshingChange})),I&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T_,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(P_,null,r.a.createElement(ZE.a,{id:"uplink-auto",checked:"auto"===g,name:"auto",onChange:this.handleMeshingModeChange},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_AUTO"})),r.a.createElement(ZE.a,{id:"uplink-manual",checked:"manual"===g,name:"manual",onChange:this.handleMeshingModeChange},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_MANUAL"})))),"manual"===g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK",name:`radios.${v}.vwire_enabled`,type:"checkbox"})),F&&!j&&!N&&r.a.createElement(T_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK",name:"uplinkMeshEnable",type:"checkbox"})),F&&h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f_,{marginBottom:24},r.a.createElement(tn.a,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:1},name:"uplinkPriority1",type:"dropdown",options:B,searchable:!0,value:k,onChange:e=>this.handlePriorityChange("uplinkPriority1",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),!!C&&r.a.createElement(f_,{marginBottom:24},r.a.createElement(tn.a,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:2},name:"uplinkPriority2",type:"dropdown",options:z,searchable:!0,value:W,onChange:e=>this.handlePriorityChange("uplinkPriority2",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),r.a.createElement(f_,{marginBottom:24},r.a.createElement(h_,{items:m})))))),A&&r.a.createElement(T_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS",name:"atf_enabled",type:"checkbox",disabled:Object(O.getDeviceModelFeature)(a,"atfDisabled")})),U&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI",name:`radios.${v}.min_rssi_enabled`,type:"checkbox"})),f.min_rssi_enabled&&r.a.createElement(f_,{marginBottom:16},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MIN_RSSI"})),r.a.createElement(ii.a,{min:-C_,max:-R_,size:"large",value:-f.min_rssi,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{color:"secondary"},"-",e),onChange:e=>{s(`radios.${v}.min_rssi`,-e.target.value)}})),P&&r.a.createElement(T_,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},r.a.createElement(y_,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER"})),r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER",name:`radios.${v}.hard_noise_floor_enabled`,type:"checkbox"})))))}render(){const{activeItem:e}=this.props,t=Object(O.getRadios)(e).sort(O.sortRadios).reverse(),a=t.map(({radio:e})=>e===Ym.a.NA.type).lastIndexOf(!0);return t.map((e,t)=>{const n=t===a;return this.getRadioFields(e,n)})}}const L_=e=>({value:"",label:e.formatMessage({id:"COMMON_VALUE_AUTO"})}),V_=(e,t,a,n)=>({priorityUplinkOptions1:[L_(e)].concat(...t.filter(e=>!e.value||e.value!==n)),priorityUplinkOptions2:[L_(e)].concat(...t.filter(e=>!e.value||e.value!==a))}),w_=(e,t,a,n)=>{var c,r;const{priorityUplinkOptions1:l,priorityUplinkOptions2:i}=V_(e,t,a,n);return{priorityUplink1:a&&(null===(c=l.find(e=>(null==e?void 0:e.value)===a))||void 0===c?void 0:c.value)||"",priorityUplink2:n&&(null===(r=i.find(e=>(null==e?void 0:e.value)===n))||void 0===r?void 0:r.value)||""}},M_=Object(Ja.g)({mapPropsToValues:({activeItem:e,intl:t,priorityUplinkOptions:a})=>{var n,c;const{atf_enabled:r,mesh_uplink_1:l,mesh_uplink_2:i,mesh_sta_vap_enabled:o}=e,E=Object(O.getRadios)(e),s=null===(c=null===(n=E.find(({radio:e})=>e===Ym.a.NA.type))||void 0===n?void 0:n.vwire_enabled)||void 0===c||c,m=null==o||o,d=s||m,{priorityUplink1:_,priorityUplink2:u}=w_(t,a,l,i),p=d&&s!==m||m&&(_||u)?"manual":"auto";return{radios:E.reduce((e,{name:t,radio:a,ht:n,channel:c,tx_power_mode:r,tx_power:l,min_txpower:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||O.DEFAULT_HT[a],channel:Number(c)||"auto",tx_power_mode:r||"auto",tx_power:l||i||0,vwire_enabled:null!=o?o:a===Ym.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||C_,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:r||!1,meshingEnabled:d,meshingMode:p,uplinkMeshEnable:m,uplinkPriority1:l||"",uplinkPriority2:i||""}},validate:(e,{activeItem:{radio_table:t},intl:a})=>{const n={};return e.radios.forEach((e,c)=>{const{tx_power_mode:r,tx_power:l,name:i,type:o}=e;if("custom"===r){const e=t.find(e=>e.radio===o&&e.name===i);if(e){const{min_txpower:t,max_txpower:r}=e;(l<t||l>r)&&(n.radios||(n.radios=[]),n.radios[c]={tx_power:a.formatMessage({id:"DEVICE_VALIDATION_HINT_RANGE"},{min:t,max:r})})}}}),n},handleSubmit:()=>{}}),F_={createToast:na.c,tabGetDataFunction:N.h,tabSubmitFunction:N.j,tabResetFunction:N.i,setPriorityUplink:O.setPriorityUplink,unsetPriorityUplink:O.unsetPriorityUplink};var U_=Object(vt.compose)(Object(o.connect)((e,{activeItem:t})=>({countryChannels:Object(Ri.d)(e),mgmtSettings:Object(Ei.selectMgmtSettings)(e),priorityUplinkOptions:P(e),uplinkItems:Object(O.selectDeviceEnhancedUplinkTable)(e,t)}),F_),M.f,M_)(x_);const B_=Object(l.c)(F.a)`
  margin-bottom: 16px;
`,z_=Object(l.c)(F.a)`
  > label:not(:first-child) {
    margin-left: 18px;
  }
`;var k_=Object(Ja.g)({mapPropsToValues:({activeItem:{bandsteering_mode:e}={}})=>({bandsteering_mode:e||at.BandsteeringMode.OFF}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({setFormDirty:e,dirty:t,values:a,resetForm:n,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(c.useEffect)(()=>{e("bandSteering",t)},[e,t]),Object(c.useEffect)(()=>(i(Object(N.h)({bandSteering:()=>a})),i(Object(N.j)({bandSteering:()=>n({values:a})})),i(Object(N.i)({bandSteering:n})),()=>{i(Object(N.h)({bandSteering:null})),i(Object(N.j)({bandSteering:null})),i(Object(N.i)({bandSteering:null}))}),[i,n,a]);const E=Object(c.useCallback)(e=>e.target.checked&&l("bandsteering_mode",e.target.name),[l]);return r.a.createElement(B_,null,r.a.createElement(z_,null,r.a.createElement(ZE.a,{id:"band-steer-off",checked:a.bandsteering_mode===at.BandsteeringMode.OFF,name:at.BandsteeringMode.OFF,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_OFF"})),r.a.createElement(ZE.a,{id:"band-steer-prefer-5g",checked:a.bandsteering_mode===at.BandsteeringMode.PREFER_5G,name:at.BandsteeringMode.PREFER_5G,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_PREFER_5G"})),r.a.createElement(ZE.a,{id:"band-steer-equal",checked:a.bandsteering_mode===at.BandsteeringMode.EQUAL,name:at.BandsteeringMode.EQUAL,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_BALANCED"}))))});const W_=Object(l.c)(F.a)`
  padding: 0 32px;
`;var H_=Object(vt.compose)(qa(["general","led","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Xa),E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Za),m=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(W_,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:m})},...Object(Gn.f)(e)?[{id:"bandsteer",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>r.a.createElement(k_,{activeItem:e,setFormDirty:t})}]:[],{id:"led",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(m_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(E).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});var $_=({activeItem:{ip:e,satisfaction:t,uptime:a,lan_ip:n},activeItem:c})=>{var l,i;const o=Object(O.getDeviceIp)(c),E=Object(O.getDeviceLoadAverage)(c),{na:s,ng:m,naNumSta:d,ngNumSta:_}=Object(O.getSatisfactionByRadio)(c),u=Object(Fe.d)(t);return r.a.createElement(F.a,{flexDirection:"column"},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_2G"})),_&&0!==m?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(m,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(m||0,100))]}}):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_WIFI_EXPERIENCE_5G"})),d&&0!==s?r.a.createElement(me.a,{size:"body",type:"percent",input:Math.min(s,100)/100,style:{color:we.a["color-"+Object(Fe.c)(Math.min(s||0,100))]}}):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_NA"})))),Object(O.isUdmPro)(c)?r.a.createElement(r.a.Fragment,null,(null===(l=null==c?void 0:c.wan1)||void 0===l?void 0:l.ip)&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS_INDEXED",values:{wanIndex:1}})),r.a.createElement(V.a,{size:"body"},c.wan1.ip)),(null===(i=null==c?void 0:c.wan2)||void 0===i?void 0:i.ip)&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS_INDEXED",values:{wanIndex:2}})),r.a.createElement(V.a,{size:"body"},c.wan2.ip))):r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},e)),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"})),r.a.createElement(V.a,{size:"body"},o)),a>0&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_UPTIME"})),r.a.createElement(V.a,{size:"body"},Object(Kt.a)(a))),r.a.createElement(rl,{activeItem:c}),E&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement(V.a,{size:"body"},E)),!Object(O.isUdmPro)(c)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tm,{activeItem:c}),r.a.createElement(am,{activeItem:c})))};const G_=Object(l.c)("div")`
  height: 100%;
`,Y_=Object(l.c)("div")`
  display: table;
  width: 100%;
`,X_=Object(l.c)("div")`
  display: table-row;
`,K_=Object(l.c)("div")`
  display: table-cell;
  vertical-align: top;
`,Z_=Object(l.c)("span")`
  display: table-cell;
  padding-left: 12px;
  padding-bottom: 8px;
  text-align: right;
  vertical-align: top;
`;var q_=Object(M.f)((function({activeItem:e,radioType:t,radioName:a,intl:n,hideChUtil:c=!1}){const{radio_table:l,radio_table_stats:i,type:o}=e,E=l.find(e=>e.radio===t&&(!a||e.name===a)),s=null==i?void 0:i.find(e=>e.radio===t),m=Object(O.getRadioChannelUtilization)(e,s),{totalPackets:d,totalBytes:_,droppedPercentage:u,retryPercentage:p}=Object(O.getApRadioStats)(e,E,"rx"),{totalPackets:b,totalBytes:I,droppedPercentage:g,retryPercentage:h}=Object(O.getApRadioStats)(e,E,"tx"),C=Object(O.getRadioStatsTransmitPowerString)(e,s,n);return r.a.createElement(G_,null,r.a.createElement(Y_,null,r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(gm.a,{device:e,radio:E,hidePowerInfo:!0,textSize:"body"})))),r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"}))),r.a.createElement(Z_,null,C?r.a.createElement(V.a,{size:"body"},C):r.a.createElement(V.a,{size:"body"}," "))),r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},b," / ",I))),r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},d," / ",_))),r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},h,"% / ",g,"%"))),r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},p,"% / ",u,"%"))),!c&&m&&r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},`${m.total}% / ${m.selfRx}% / ${m.selfTx}%`))),s&&o!==O.DeviceType.UBB&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},s["user-num_sta"]))),r.a.createElement(X_,null,r.a.createElement(K_,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_GUESTS"}))),r.a.createElement(Z_,null,r.a.createElement(V.a,{size:"body"},s["guest-num_sta"]))))))}));const J_=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Q_=Object(l.c)(V.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,eu=Object(l.c)("div")`
  margin-bottom: 16px;
`;function tu({activeItem:e}){return r.a.createElement(J_,null,r.a.createElement(Q_,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO2G_SHORT"})),r.a.createElement(q_,{activeItem:e,radioType:Im.b.NG}),r.a.createElement(eu,null),r.a.createElement(Q_,{color:"primary",weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),r.a.createElement(q_,{activeItem:e,radioType:Im.b.NA}))}const au=Object(l.c)("div")`
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
`,ou=[{id:"name",minWidth:85,growthFactor:1,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"})),renderCell:e=>r.a.createElement(iu,{size:"body",truncate:!0},Object(I.getClientDisplayName)(e))},{id:"connection",minWidth:50,growthFactor:2,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_CONNECTION"})),renderCell:e=>e.type===I.ClientType.WIRED?r.a.createElement(V.a,{size:"body",truncate:!0},e.network_name):e.type===I.ClientType.WIRELESS?r.a.createElement(V.a,{size:"body",truncate:!0},e.essid):r.a.createElement(M.c,{id:"COMMON_NA"})},{id:"signal",minWidth:50,growthFactor:1,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_SIGNAL"})),renderCell:e=>e.type===I.ClientType.WIRELESS?r.a.createElement(ru,null,dl(e.rssi)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"})):r.a.createElement(M.c,{id:"COMMON_NA"})},{id:"tx_rate",minWidth:50,growthFactor:1,renderLabel:()=>r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_TX_RATE"})),renderCell:e=>e.type!==I.ClientType.VPN?!e.is_wired&&r.a.createElement(me.a,{size:"body",type:"bytes",input:1e3*e.tx_rate,options:"bitrate"}):r.a.createElement(V.a,{size:"body"}," ",r.a.createElement(M.c,{id:"COMMON_NA"}))}];var Eu=({activeItem:e,params:t,path:a,history:c})=>{const{site:l,page:i,subPage:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(Object(I.selectClientsByDevice)(e));return Object(x.f)([Object(I.fetchClients)(void 0,{crudCacheStrategy:{type:Ia.a.CACHE}})],r.a.createElement(au,null,r.a.createElement(Te.a,{items:m,disableColumnFilters:!0,headerRowClassName:nu,rowClassName:cu,columns:ou,initialSortBy:"name",renderFooter:()=>m.length>0?r.a.createElement(lu,null,r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:e=>{const t=Object(n.i)(a,{id:e.mac,site:l,page:i,panel:"about",subPage:E});c.push(t),s(Object(N.g)({type:d.b.CLIENT,mac:e.mac}))}})))};const su=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,mu=l.a`
  padding: 0;
  margin: 0;
`;var du=function({activeItem:e,...t}){const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Om,{activeItem:e}),r.a.createElement(hl,{activeItem:e}),r.a.createElement(su,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement($_,{activeItem:e})},...OE(e),{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>r.a.createElement(tu,{activeItem:e})},{id:"apGroups",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>r.a.createElement(dm,null)},{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>r.a.createElement(Eu,Object.assign({activeItem:e},t))},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>r.a.createElement(mE,Object.assign({activeItem:e},t))}],contentClassName:mu,multiOpen:!0,renderOnlyExpandedContent:!0})))};const _u=Object(l.c)(F.a,{shouldForwardProp:e=>!["marginTop","marginBottom"].includes(e)})`
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
`,pu=Object(l.c)(bn.a)`
  margin-left: 0 !important;
`,bu=Object(l.c)("div")`
  display: flex;

  > label:not(:first-child) {
    margin-left: 18px;
  }
`,Ou=Object(Ja.g)({mapPropsToValues:({usgSettings:{mss_clamp_mss:e,mss_clamp:t,arp_cache_timeout:a,arp_cache_base_reachable:n,echo_server:c},activeItem:{jumboframe_enabled:r=!1,flowctrl_enabled:l=!1}})=>({jumboframe_enabled:r,flowctrl_enabled:l,usgSettings:{mss_clamp:t||Ei.USG_DEFAULTS.mss_clamp,mss_clamp_mss:e||Ei.USG_DEFAULTS.mss_clamp_mss,arp_cache_timeout:a||"normal",arp_cache_base_reachable:n||Ei.USG_DEFAULTS.arp_cache_base_reachable,echo_server:c||Ei.USG_DEFAULTS.echo_server}}),validationSchema:Qa.a.object().shape({jumboframe_enabled:Qa.a.boolean(),flowctrl_enabled:Qa.a.boolean(),usgSettings:Qa.a.object().shape({mss_clamp:Qa.a.string(),mss_clamp_mss:Qa.a.number().when("mss_clamp",{is:Ei.MssClamp.CUSTOM,then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP").required().min(Ei.USG_DEFAULTS.min_mss_clamp_mss).max(Ei.USG_DEFAULTS.mss_clamp_mss)}),arp_cache_timeout:Qa.a.string(),arp_cache_base_reachable:Qa.a.number().when("arp_cache_timeout",{is:"custom",then:Qa.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT").required().min(1).max(Ei.USG_DEFAULTS.max_arp_cache_base_reachable)}),echo_server:Qa.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(hn.f,r.a.createElement(M.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}}))})}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Iu=Object(vt.compose)(Object(o.connect)(e=>({usgSettings:Object(Ei.selectUsgSettings)(e)})),Ou)(({values:e,dirty:t,resetForm:a,setFormDirty:n,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(c.useEffect)(()=>{const{usgSettings:t,...n}=e;i(Object(N.h)({services:()=>n})),i(Object(N.j)({services:()=>{i(Object(Ei.saveSettings)({key:Ei.USG_DEFAULTS.key,...t})),a({values:e})}})),i(Object(N.i)({services:a}))},[e]),Object(c.useEffect)(()=>{n("services",t)},[t]);const E=e=>{e.target.checked&&l("usgSettings.mss_clamp",e.target.name)},s=e=>{e.target.checked&&l("usgSettings.arp_cache_timeout",e.target.name)},m=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?l("usgSettings.echo_server",""):l("usgSettings.echo_server",e.target.name))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(_u,{marginBottom:10},r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),r.a.createElement(_u,{marginBottom:24},r.a.createElement(bu,null,r.a.createElement(ZE.a,{id:"mssClampingAuto",checked:e.usgSettings.mss_clamp===Ei.MssClamp.AUTO,name:Ei.MssClamp.AUTO,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"})),r.a.createElement(ZE.a,{id:"mssClampingCustom",checked:e.usgSettings.mss_clamp===Ei.MssClamp.CUSTOM,name:Ei.MssClamp.CUSTOM,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"})),r.a.createElement(ZE.a,{id:"mssClampingDisabled",checked:e.usgSettings.mss_clamp===Ei.MssClamp.DISABLED,name:Ei.MssClamp.DISABLED,onChange:E},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"})))),e.usgSettings.mss_clamp===Ei.MssClamp.CUSTOM&&r.a.createElement(_u,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},r.a.createElement(Jn.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",label:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING",name:"usgSettings.mss_clamp_mss"})),r.a.createElement(_u,{marginBottom:10},r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT"}))),r.a.createElement(_u,{marginBottom:24},r.a.createElement(bu,null,r.a.createElement(ZE.a,{id:"normal",checked:"normal"===e.usgSettings.arp_cache_timeout,name:"normal",onChange:s},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_NORMAL"})),r.a.createElement(ZE.a,{id:"min-dhcp-lease",checked:"min-dhcp-lease"===e.usgSettings.arp_cache_timeout,name:"min-dhcp-lease",onChange:s},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_MIN_DHCP_LEASE"})),r.a.createElement(ZE.a,{id:"custom",checked:"custom"===e.usgSettings.arp_cache_timeout,name:"custom",onChange:s},r.a.createElement(M.c,{id:"COMMON_LABEL_CUSTOM"})),r.a.createElement(pu,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP"}),width:180,position:"left"},r.a.createElement(uu,{isActive:!0})))),"custom"===e.usgSettings.arp_cache_timeout&&r.a.createElement(_u,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},r.a.createElement(Jn.Field,{full:!0,label:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_LABEL",placeholder:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_PLACEHOLDER",name:"usgSettings.arp_cache_base_reachable"})),r.a.createElement(_u,{marginBottom:10},r.a.createElement(V.a,{weight:"bold",color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),r.a.createElement(_u,{marginBottom:0},r.a.createElement(bu,null,r.a.createElement(ZE.a,{id:"echoServerDefault",checked:e.usgSettings.echo_server===Ei.USG_DEFAULTS.echo_server,name:Ei.USG_DEFAULTS.echo_server,onChange:m},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"})),r.a.createElement(ZE.a,{id:"echoServerIpOrHostname",checked:e.usgSettings.echo_server!==Ei.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:m},r.a.createElement(M.c,{id:"COMMON_LABEL_CUSTOM"})),r.a.createElement(pu,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},r.a.createElement(uu,{isActive:!0})))),e.usgSettings.echo_server!==Ei.USG_DEFAULTS.echo_server&&r.a.createElement(_u,{marginBottom:0,marginTop:24,alignItems:"flex-start",flexDirection:"column"},r.a.createElement(Jn.Field,{full:!0,label:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"usgSettings.echo_server"})))});const gu=Object(l.c)(F.a)`
  width: 100%;
`,hu=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Cu=l.a`
  padding: 0;
  margin: 0;
`;var Ru=Object(vt.compose)(qa(["general","screen","network","services"]),M.f)((function({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E}){const s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Za),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:p,mac:b}=e,I=Object(o.useDispatch)(),g=[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:u})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Iu,{activeItem:e,setFormDirty:t})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0,disableForget:!0})}];return(Object(O.hasActiveUnifiCare)(e)||Object(O.isUnifiCareEligible)(e))&&(g.forEach(e=>{e.openByDefault=!1}),g.unshift({id:"unifiCare",label:r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>r.a.createElement(HE,{device:e}),openByDefault:!0})),Object(Gn.f)(e)&&"bandsteer"!==g[2].id&&g.splice(2,0,{id:"bandsteer",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>r.a.createElement(k_,{activeItem:e,setFormDirty:t})}),r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(gu,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(hu,{variant:"secondary",renderOnlyExpandedContent:!0,items:g,contentClassName:Cu,multiOpen:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});I(Object(O.updateDeviceWithIdEndpoint)(e,p,b,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(m).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))}));var vu=({activeItem:e,forUdm:t,forUdmPro:a,disableUsageChart:n=!1})=>{const l=Object(o.useDispatch)();return Object(c.useEffect)(()=>{l(Object(De.fetchDeviceUsageReport)(e.mac))},[]),r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],forUdm:t,pickDatumsWithKey:a?"gw":null,heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"}),t&&r.a.createElement(Jl,{gwMac:e.mac,keys:["num_sta"],forUdm:t,heading:"DEVICE_GATEWAY_CLIENTS_STAT_CHART_HEADER"}))};const fu=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Tu=l.a`
  padding: 0;
  margin: 0;
`;var Du=function({activeItem:e,...t}){const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),n=t_(e),l=[],i=Object(o.useSelector)(O.selectIsUdr);return n.length&&l.push({id:"channelUsage",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>r.a.createElement(c_,{ChannelBars:n})}),Object(O.isDeviceConnected)(e)&&Object(Gn.d)(e,O.WIFI_CAPS.RF_SCAN)&&l.push({id:"rfEvironment",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>r.a.createElement(Wd,{activeItem:e})}),a&&l.push({id:"statistics",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>r.a.createElement(vu,Object.assign({activeItem:e,forUdm:!0},t,{disableUsageChart:i}))}),r.a.createElement(fu,{variant:"secondary",items:l,contentClassName:Tu,multiOpen:!0,renderOnlyExpandedContent:!0})};const yu=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Pu=({activeItem:e,...t})=>{const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),n=!Object(O.hasActiveUnifiCare)(e)&&Object(O.isUnifiCareEligible)(e);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(HE,{device:e,hideWarning:!0}),r.a.createElement(zl,{device:e}),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(hl,{activeItem:e}),r.a.createElement(yu,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement($_,{activeItem:e})},...OE(e),{id:"downlinks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))},{id:"networks",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(mE,{activeItem:e})},...Object(O.hasActiveUnifiCare)(e)?[{id:"unifiCare",label:r.a.createElement(M.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>r.a.createElement(HE,{device:e,hideWarning:!0})}]:[]],multiOpen:!0,renderOnlyExpandedContent:!0})))};const Su=Object(l.c)(ye.g)`
  padding: 16px 32px;
`,Au=Object(l.c)("div")`
  margin-bottom: 16px;
`;var ju=({activeItem:e})=>r.a.createElement(Su,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"})),r.a.createElement(Au,null),r.a.createElement(vu,{activeItem:e,forUdmPro:!0}));const Nu=Object(l.c)(F.a)`
  padding: 0 32px;
`;var xu=Object(vt.compose)(qa(["general","lcmScreen","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(Ka),_=Object(o.useSelector)(Za),{_id:u,mac:p}=e,b=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(Nu,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(hi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(mE,{activeItem:e}),r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a}))},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(Iu,{activeItem:e,setFormDirty:t})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0,disableForget:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;b(Object(O.updateDeviceWithIdEndpoint)(a,u,p,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))});const Lu=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Vu=Object(l.c)(V.a)`
  margin-bottom: 4px;
`,wu=Object(l.c)("div")`
  margin-bottom: 16px;
`;function Mu({activeItem:e}){return Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e])?r.a.createElement(Lu,null,r.a.createElement(Vu,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),r.a.createElement(q_,{activeItem:e,radioType:Im.b.NA}),r.a.createElement(wu,null),r.a.createElement(Vu,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),r.a.createElement(q_,{activeItem:e,radioType:Im.b.AD})):null}var Fu=({activeItem:e})=>{var t,a;const n=null!==(t=e.distance)&&void 0!==t?t:Object(O.isUBB)(e)&&(null===(a=e.peer_ubb)||void 0===a?void 0:a.distance);return void 0!==n?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_DISTANCE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n," ",r.a.createElement(M.c,{id:"COMMON_UNIT_METERS_SHORT"}))):null};var Uu=({activeItem:e})=>{var t,a,n,c;const l=null!==(a=null===(t=e.p2p_stats)||void 0===t?void 0:t.throughput)&&void 0!==a?a:Object(O.isUBB)(e)&&(null===(c=null===(n=e.peer_ubb)||void 0===n?void 0:n.p2p_stats)||void 0===c?void 0:c.throughput);return l>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_SPEED"})),r.a.createElement(me.a,{size:"body",type:"bytes",color:"secondary",input:l,options:"bitrate"})):null};var Bu=({activeItem:e})=>{const t=Object(O.getLinkQuality)(e);return t>0?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"})),r.a.createElement(me.a,{size:"body",type:"percent",input:t/100,style:{color:ht.a.getGradientColor(t/100)}})):null};function zu({activeItem:e}){return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Bs,{activeItem:e}),r.a.createElement(Fu,{activeItem:e}),r.a.createElement(Uu,{activeItem:e}),r.a.createElement(Bu,{activeItem:e}),r.a.createElement(zs,{activeItem:e}))}const ku=Object(l.c)(V.a)`
  margin-top: 16px; // 16
  margin-bottom: 4px; // 4
`,Wu=l.a`
  margin-right: -17px;
`,Hu=Object(l.c)(bn.a)`
  margin-left: 4px; // 4
  display: inline-block;
  vertical-align: text-bottom;
`;var $u=({deviceData:e,ubbDeviceType:t,pendingAdoption:a})=>{const{mac:n,ip:c,link_capacity:l,uptime:i,has_temperature:o,general_temperature:E,uplink:s}=e,{rssi:m,tx_rate:d,tx_packets:_,rx_rate:u,tx_bytes:p,"tx_bytes-r":b,rx_packets:O,rx_bytes:I,"rx_bytes-r":g,speed:h}=s||{},C=g+b,R=Object(uc.y)(e);return r.a.createElement(F.a,{flexDirection:"column"},n&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_MAC"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n)),c&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),r.a.createElement(V.a,{color:"secondary",size:"body"},c)),!a&&r.a.createElement(r.a.Fragment,null,l>0&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e6*l/8,options:"bitrate"})),o&&!!E&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:E}}))),i&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),r.a.createElement(me.a,{type:"uptime",color:"secondary",size:"body",input:i})),r.a.createElement(rl,{activeItem:e}),R&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),r.a.createElement("span",null,r.a.createElement(V.a,{color:"secondary",size:"body"},Object(uc.y)(e)),r.a.createElement(Hu,{message:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE_TOOLTIP"}),width:200,position:"bottomRight",tooltipClassName:Wu,portal:!0},r.a.createElement(w.W,{isActive:!0})))),!!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ku,{color:"primary",weight:"bold"},r.a.createElement(M.c,{id:t===mp.STATION?"DEVICE_PROPERTY_UPLINK_WIRELESS":"DEVICE_PROPERTY_UPLINK_WIRED"})),t===mp.STATION&&r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},ml(m)," (",dl(m)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")),d&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RATE"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e3*d/8,options:"bitrate"})),u&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RATE"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:1e3*u/8,options:"bitrate"}))),t===mp.ACCESS_POINT&&r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),r.a.createElement(V.a,{color:"secondary",size:"body"},h))),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},O&&I?r.a.createElement(r.a.Fragment,null,O.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",input:I,color:"secondary",size:"body"})):"0.00 / 0.00")),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_UP_PKTS_BYTES"})),r.a.createElement(V.a,{color:"secondary",size:"body"},_&&p?r.a.createElement(r.a.Fragment,null,_.toLocaleString()," / ",r.a.createElement(me.a,{type:"bytes",input:p,color:"secondary",size:"body"})):"0.00 / 0.00")),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_ACTIVITY"})),r.a.createElement(me.a,{type:"bytes",color:"secondary",size:"body",input:C,options:"bitrate"})))))},Gu=a(2046),Yu=a.n(Gu);const Xu=Object(l.c)(F.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,Ku=Object(l.c)(F.a)`
  text-align: center;
  width: 122px;
`,Zu=Object(l.c)(F.a)`
  padding-top: 50px;
  width: 100%;
`,qu=l.e`
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
`,ep=Object(l.c)("div")`
  animation: ${qu} 5s infinite;
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
`,tp=Object(l.c)(F.a)`
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`,ap=Object(l.c)("img")`
  height: 120px;
  transform: scaleX(${({flip:e})=>e?-1:1});
`,np=Object(l.c)("div")`
  position: absolute;
  ${({left:e})=>e?`left: ${e}px`:""};
  ${({right:e})=>e?`right: ${e}px`:""};
  width: 3px;
  height: 107px;
  border-radius: 1px;
  background-image: radial-gradient(transparent 0%, ${({color:e})=>e} 60%, transparent 100%);
  filter: drop-shadow(0px 0px 0.5px ${({color:e})=>e}) opacity(0.6);
`,cp=Object(l.c)(F.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,rp=Object(l.c)(me.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,lp=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,ip=Object(l.c)(F.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,op=Object(l.c)(w.U)`
  margin-right: 12px;
`;function Ep({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},link_quality:n,led_override_color:c}=e,l=Object(Fe.c)(n),i=!t&&Object(uc.Kd)(e),o=!t&&Object(uc.Jd)(e),E=Object(dt.a)(Ym.a[Object(dt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?we.a["color-danger"]:t||"warning"===l?we.a["color-warning"]:we.a["color-success"],r.a.createElement(r.a.Fragment,null,r.a.createElement(Xu,{justifyContent:"space-between"},r.a.createElement(Ku,{flexDirection:"column"},r.a.createElement(cp,null,r.a.createElement(ap,{src:Yu.a}),r.a.createElement(np,{color:c||we.a["blue-0"],left:23})),r.a.createElement(lp,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})),r.a.createElement(lp,{color:"secondary"},E)),r.a.createElement(Zu,{flexDirection:"column",alignItems:"center"},r.a.createElement(Qu,null,r.a.createElement(ep,{linkAnimationColor:s})),r.a.createElement(tp,{flexDirection:"column"},i&&r.a.createElement(rp,{type:"percent",input:n/100,style:{color:ht.a.getGradientColor(n/100)}}),r.a.createElement(lp,{color:"primary",weight:"bold"},i&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),r.a.createElement(Ku,{flexDirection:"column"},r.a.createElement(cp,null,r.a.createElement(ap,{src:Yu.a,flip:!0}),r.a.createElement(np,{color:a.led_override_color||we.a["blue-0"],right:23})),r.a.createElement(lp,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})),r.a.createElement(lp,{color:"secondary"},E))),(t||o)&&r.a.createElement(ip,{alignItems:"center"},r.a.createElement(op,{width:24,height:24}),r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const sp=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var mp;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(mp||(mp={}));var dp=({activeItem:e})=>{const{peer_ubb:t,adopted:a}=e,n=Object(O.getUplinkAttrs)(e)||{},l=null==t?void 0:t.uplink,i=t&&(!Object(O.getIsUbbPeerAdopted)(e)||!a),o=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ep,{activeItem:e,pendingAdoption:i}),r.a.createElement(zl,{device:e}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(hl,{activeItem:e}),r.a.createElement(sp,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(zu,{activeItem:e})},...t?[{id:"station",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"}),"  (",r.a.createElement(M.c,{id:"wireless"===(null==l?void 0:l.type)?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>r.a.createElement($u,{deviceData:t,ubbDeviceType:mp.STATION,pendingAdoption:i})}]:[],{id:"accessPoint",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"}),"  (",r.a.createElement(M.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>r.a.createElement($u,{deviceData:e,ubbDeviceType:mp.ACCESS_POINT,pendingAdoption:i})},...i?[]:[{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>r.a.createElement(Mu,{activeItem:e})}]],multiOpen:!0,renderOnlyExpandedContent:!0})))};const _p=Object(l.c)(V.a)`
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
`,up=Object(l.c)(V.a)`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  padding-left: 10px;
  padding-top: 10px;
`,pp=Object(l.c)(F.a)`
  margin-bottom: 20px;
`,bp=Object(Hl.a)(6,e=>({value:e,label:String(e)})).reverse(),Op=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var Ip=Object(_n.b)(r.a.memo(e=>{const{mac:t,keys:a,heading:n,theme:c,colors:l,noLegend:i=!1,fetchReport:E,legend:s}=e,m=Object(o.useSelector)(Object(De.selectDeviceStatReport)(t,E,De.OBJECT.UBB,a)),d=Object(o.useSelector)($l.O),_={},u=Date.now(),p=Object(ft.startOfHour)(Object(ft.addHours)(u,1)).getTime(),b=d?"H:ss":"ha",O=Object(Gl.b)(p,b),I=O[0].value,g=Object(Wl.m)(m.filter(e=>e.time>I).map(e=>({...e,x:e.time})),St.a.MINUTES.grain);g[0]&&a[0]in g[0]&&g.forEach(e=>{a.forEach((t,a)=>{_[t]||(_[t]={key:t,lineColor:l[a],maxY:0,data:[]}),_[t].data.push({x:e.x,y:e[t]})})});const h=a.map(e=>_[e]?_[e].data.map(e=>e.y||0):0),C=Math.max(...h.flat(),4);let R=bp;return C>5&&(R=Object(Gl.e)(C,6)),r.a.createElement(r.a.Fragment,null,!i&&r.a.createElement(pp,{justifyContent:"flex-end"},r.a.createElement(F.a,null,s.map((e,t)=>r.a.createElement(_p,{legendcolor:l[t],key:e},r.a.createElement(M.c,{id:e}))))),r.a.createElement(F.a,null,r.a.createElement(up,{color:"primary"},r.a.createElement(M.c,{id:n})),r.a.createElement(Tt.a,{xAxis:O,yAxis:R,width:305,height:150,margin:[0,0,20,25],labelClassName:Op(c),renderChartElements:(e,t,n)=>r.a.createElement(r.a.Fragment,null,a.map(a=>_[a]&&_[a].data.length&&r.a.createElement(Dt.a,{key:_[a].key,data:_[a].data,maxY:n,mouseData:t,getCoordinates:e,variant:"line",lineColor:_[a].lineColor,dashed:!1,hideMissingData:!0})))})))},(e,t)=>e.mac===t.mac&&Object(oi.a)(e.keys,t.keys)));const gp=Object(l.c)("div")`
  padding: 16px 32px 32px 32px;
`,hp=Object(l.c)("div")`
  margin-top: ${({marginTop:e})=>e||0}px;
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,Cp=[{value:mp.ACCESS_POINT,label:"DEVICE_TYPE_UBB_AP"},{value:mp.STATION,label:"DEVICE_TYPE_UBB_STATION"}];const Rp=Object(Ja.g)({mapPropsToValues:()=>({device:mp.ACCESS_POINT,channel:"wlan0"}),handleSubmit:null});var vp=Object(vt.compose)(M.f,Rp)((function({activeItem:e,values:{device:t,channel:a},intl:n}){const l=Object(o.useDispatch)(),{mac:i,peer_ubb:E={}}=e,s=t===mp.ACCESS_POINT?i:E.mac,m=[a+"-rx_dropped",a+"-tx_dropped"],d=[a+"-tx_retries"],_=Object(c.useMemo)(()=>Object(O.getRadios)(e).map(e=>({value:e.name,label:`${n.formatMessage({id:"DEVICE_LABEL_RADIO_"+e.radio.toUpperCase()})} (${e.name})`})),[e.radio_table]);return Object(c.useEffect)(()=>{l(Object(De.fetchDeviceUsageReport)(s,De.OBJECT.UBB))},[t]),Object(c.useEffect)(()=>{l(Object(De.fetchDeviceDroppedReport)(s,De.OBJECT.UBB,m)),l(Object(De.fetchDeviceRetriesReport)(s,De.OBJECT.UBB,d))},[a,t]),r.a.createElement(gp,null,r.a.createElement(hp,{marginTop:9,marginBottom:28},r.a.createElement(tn.a,{type:"dropdown",name:"device",label:"DEVICE_PROPERTIES_LABEL_SELECT_DEVICE",options:Cp,full:!0,translateLabel:!0,translateOptions:!0})),r.a.createElement(Ip,{mac:s,keys:["cpu","mem"],colors:[we.a["orange-1"],we.a["blue-3"]],heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT",fetchReport:De.fetchDeviceUsageReport,legend:["COMMON_WORD_CPU","COMMON_WORD_MEMORY"]}),r.a.createElement(hp,{marginTop:35,marginBottom:30},r.a.createElement(tn.a,{type:"dropdown",full:!0,name:"channel",translateLabel:!0,label:"DEVICE_PROPERTIES_LABEL_SELECT_CHANNEL",options:_})),r.a.createElement(Ip,{mac:s,keys:m,colors:[we.a["purple-1"],we.a["purple-1"]],noLegend:!0,fetchReport:De.fetchDeviceDroppedReport,heading:"DEVICE_PROPERTIES_LABEL_DROPPED"}),r.a.createElement(hp,{marginBottom:30}),r.a.createElement(Ip,{mac:s,keys:d,colors:[we.a["purple-1"]],noLegend:!0,fetchReport:De.fetchDeviceRetriesReport,heading:"DEVICE_PROPERTIES_LABEL_RETRIES"}))}));const fp=Object(Ja.g)({mapPropsToValues:({activeItem:e,nativeNetworks:t})=>({mgmt_network_id:Object(O.getDeviceNetworkId)(t,e)}),validationSchema:Qa.a.object().shape({mgmt_network_id:Qa.a.string()}),handleSubmit:()=>null});var Tp=Object(vt.compose)(Object(o.connect)(e=>({nativeNetworks:Object(un.selectNativeNetworks)(e)}),{}),fp)(({nativeNetworks:e=[],values:t,resetForm:a,dirty:n,setFormDirty:l,setFormInvalid:i,isValid:E})=>{const s=Object(o.useDispatch)();Object(c.useEffect)(()=>(s(Object(N.h)({vlan:()=>t})),s(Object(N.j)({vlan:()=>a({values:t})})),s(Object(N.i)({vlan:a})),()=>{s(Object(N.h)({vlan:null})),s(Object(N.j)({vlan:null})),s(Object(N.i)({vlan:null}))}),[s,a,t.mgmt_network_id]),Object(c.useEffect)(()=>{l("vlan",n),i("vlan",!E)},[l,i,n,E]);const m=e.map(e=>({value:e._id,label:e.name}));return r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:m,translateLabel:!0})});const Dp=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,yp=Object(l.c)(F.a)`
  width: 100%;
`;var Pp,Sp=Object(vt.compose)(qa(["general","tags","network","vlan"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,formStates:l,intl:i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Za),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(yp,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Dp,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1,isUbbXg:!0})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fp,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>r.a.createElement(Tp,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0})}],renderOnlyExpandedContent:!0,multiOpen:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length&&l[t])return"peerUbbLed"===t?{...e,peerUbbLed:n}:{...e,...n}}return e},{}),t=Object(b.a)(e,"peerUbbLed"),a={...t,peer_ubb:{...t.peer_ubb,...t.mgmt_network_id?{mgmt_network_id:t.mgmt_network_id}:{}}};return u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});!function(e){e.ACCESS_POINT="ap",e.STATION="sta"}(Pp||(Pp={}));const Ap=Object(l.c)("div")`
  margin-bottom: 16px;
`,jp=Object(l.c)("div",{shouldForwardProp:e=>"visible"!==e})`
  ${({visible:e})=>e?"":"display: none;"}
`,Np=Object(l.c)(V.a)`
  margin-left: 10px;
`;var xp=({ap:e,sta:t,formName:a})=>{const[n,l]=Object(c.useState)(Pp.ACCESS_POINT),i=e=>l(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ap,null,r.a.createElement(F.a,{marginBottom:"12px"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_UBB_CHOOSE_DEVICE"}))),r.a.createElement(F.a,{marginBottom:"16px"},r.a.createElement(F.a,{marginRight:"18px"},r.a.createElement(ZE.a,{checked:n===Pp.ACCESS_POINT,name:`ubb-device-select-${a}-${Pp.ACCESS_POINT}`,id:`ubb-device-select-${a}-${Pp.ACCESS_POINT}`,onChange:()=>i(Pp.ACCESS_POINT)}),r.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${Pp.ACCESS_POINT}`},r.a.createElement(Np,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})))),r.a.createElement(F.a,null,r.a.createElement(ZE.a,{checked:n===Pp.STATION,name:`ubb-device-select-${a}-${Pp.STATION}`,id:`ubb-device-select-${a}-${Pp.STATION}`,onChange:()=>i(Pp.STATION)}),r.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${Pp.STATION}`},r.a.createElement(Np,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})))))),r.a.createElement(jp,{visible:n===Pp.ACCESS_POINT},e),r.a.createElement(jp,{visible:n===Pp.STATION},t))};const Lp=Object(l.c)("div")`
  margin-bottom: 20px;
`,Vp=Object(l.c)(F.a)`
  margin-bottom: ${({marginBottom:e})=>e}px;
`,wp=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,Mp=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Fp=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{const{config_network:t,peer_ubb:a,ip:n}=e,{type:c="dhcp",ip:r=n||"",netmask:l="",gateway:i="",dns1:o="",dns2:E="",dnssuffix:s=""}=t,{type:m="dhcp",ip:d=a.ip||"",netmask:_="",gateway:u="",dns1:p="",dns2:b="",dnssuffix:O=""}=a.config_network;return{config_network:{type:c,ip:r,netmask:l,gateway:i,dns1:o,dns2:E,dnssuffix:s},peer_ubb:{config_network:{type:m,ip:d,netmask:_,gateway:u,dns1:p,dns2:b,dnssuffix:O}}}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Qa.a.object().shape({config_network:xi,peer_ubb:Qa.a.object().shape({config_network:xi})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:n,resetForm:l,isValid:i})=>{const E=Object(o.useDispatch)();return Object(c.useEffect)(()=>(E(Object(N.h)({network:()=>{const{config_network:e,peer_ubb:{config_network:t}}=n,a={config_network:{type:e.type},peer_ubb:{config_network:{type:t.type}}};return"dhcp"!==e.type&&(a.config_network={...e}),"dhcp"!==t.type&&(a.peer_ubb.config_network={...t}),a}})),E(Object(N.j)({network:()=>l({values:n})})),E(Object(N.i)({network:l})),()=>{E(Object(N.h)({network:null})),E(Object(N.j)({network:null})),E(Object(N.i)({network:null}))}),[E,l,n]),Object(c.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),r.a.createElement(xp,{formName:"network",sta:r.a.createElement(r.a.Fragment,null,r.a.createElement(Lp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Mp})),"static"===n.config_network.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Vp,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),r.a.createElement(Vp,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),r.a.createElement(Vp,{marginBottom:20,justifyContent:"space-between"},r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0}))))),ap:r.a.createElement(r.a.Fragment,null,r.a.createElement(Lp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"peer_ubb.config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:Mp})),"static"===n.peer_ubb.config_network.type&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Vp,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"peer_ubb.config_network.ip",full:!0})),r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"peer_ubb.config_network.dns1",full:!0}))),r.a.createElement(Vp,{marginBottom:24,justifyContent:"space-between"},r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"peer_ubb.config_network.netmask",full:!0})),r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"peer_ubb.config_network.dns2",full:!0}))),r.a.createElement(Vp,{marginBottom:20,justifyContent:"space-between"},r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"peer_ubb.config_network.gateway",full:!0})),r.a.createElement(wp,null,r.a.createElement(tn.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"peer_ubb.config_network.dnssuffix",full:!0})))))})});const Up=Object(l.c)(F.a)`
  margin-top: -15px;
`,Bp=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`,zp=l.a`
  th {
    padding-left: 0;
    padding-right: 10px;
  }
`,kp=l.a`
  text-align: left;
  padding-left: 0;
  padding-right: 10px;
`,Wp=l.a`
  padding: 0;
  margin: 0;
  text-align: left;
`;function Hp({activeItem:{downlink_table:e}}){const t=Object(o.useSelector)(O.selectDevicesData),a=Object(o.useDispatch)(),n=[{id:"mac",sortable:!0,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP_SHORT"})),renderCell:e=>{if(!e)return null;const n=t.find(t=>t.mac===e.mac);return n?r.a.createElement(Bp,{name:"propertyPanelButton",onClick:()=>a(Object(N.g)({type:d.b.DEVICE,mac:e.mac})),size:"small",className:Wp,variant:"link"},Object(G.c)(n)):e.mac}},{id:"rssi",sortable:!0,label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),renderCell:e=>r.a.createElement(V.a,{color:"secondary",size:"body"},ml(e.rssi)," (",dl(e.rssi)," ",r.a.createElement(M.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];return r.a.createElement(Up,null,r.a.createElement(Te.a,{items:e||[],idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:zp,cellClassName:kp,columns:n,renderFooter:()=>r.a.createElement("div",null,e&&e.length>0?r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_DEVICES_NOT_FOUND"}))),rowHeight:30}))}const $p=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,Gp=Object(l.c)(F.a)`
  width: 100%;
`;var Yp=Object(vt.compose)(qa(["general","tags","screen","peerUbbScreen","network","vlan","radios"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,formStates:l,intl:i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Za),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Gp,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement($p,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1})},{id:"stationLed",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_STATION_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e.peer_ubb,formName:"peerUbbScreen",setFormDirty:t})},{id:"apLed",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AP_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fp,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>r.a.createElement(Tp,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(Hp,{activeItem:e})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],renderOnlyExpandedContent:!0,multiOpen:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length&&l[t])return{...e,...n}}return e},{}),t=Object(b.a)(e,"peerUbbScreen"),a={...t,peer_ubb:{...t.peer_ubb,...e.peerUbbScreen,...t.mgmt_network_id?{mgmt_network_id:t.mgmt_network_id}:{}}};u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const Xp=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Kp=Object(l.c)(V.a)`
  margin-bottom: 4px;
`,Zp=Object(l.c)("div")`
  margin-bottom: 16px;
`;function qp({activeItem:e}){return Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e])?r.a.createElement(Xp,null,r.a.createElement(Kp,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),r.a.createElement(q_,{activeItem:e,radioType:Im.b.NA}),r.a.createElement(Zp,null),r.a.createElement(Kp,{weight:"bold",size:"body"},r.a.createElement(M.b,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),r.a.createElement(q_,{activeItem:e,radioType:Im.b.AD})):null}function Jp({activeItem:e}){return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Bs,{activeItem:e}),r.a.createElement(Fu,{activeItem:e}),r.a.createElement(Uu,{activeItem:e}),r.a.createElement(Bu,{activeItem:e}),r.a.createElement(zs,{activeItem:e}))}var Qp=a(2047),eb=a.n(Qp);const tb=Object(l.c)(F.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,ab=Object(l.c)(F.a)`
  text-align: center;
  width: 122px;
`,nb=Object(l.c)(F.a)`
  padding-top: 50px;
  width: 100%;
`,cb=l.e`
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
`,rb=l.e`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }  
  50% {
    opacity: 0;
  }
`,lb=Object(l.c)("div")`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${({theme:e})=>e.colors.neutralBackground};
`,ib=Object(l.c)("div")`
  animation: ${cb} 5s infinite;
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
    animation: ${rb} 5s infinite;
  }
`,ob=Object(l.c)(F.a)`
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`,Eb=Object(l.c)("img")`
  height: 120px;
  transform: scaleX(${({flip:e})=>e?-1:1});
`,sb=Object(l.c)("div")`
  position: absolute;
  ${({left:e})=>e?`left: ${e}px`:""};
  ${({right:e})=>e?`right: ${e}px`:""};
  width: 3px;
  height: 107px;
  border-radius: 1px;
  background-image: radial-gradient(transparent 0%, ${({color:e})=>e} 60%, transparent 100%);
  filter: drop-shadow(0px 0px 0.5px ${({color:e})=>e}) opacity(0.6);
`,mb=Object(l.c)(F.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,db=Object(l.c)(me.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,_b=Object(l.c)(V.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,ub=Object(l.c)(F.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,pb=Object(l.c)(w.U)`
  margin-right: 12px;
`;function bb({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},led_override_color:n}=e,c=Object(uc.bb)(e),l=Object(Fe.c)(c),i=!t&&Object(uc.Kd)(e),o=!t&&Object(uc.Jd)(e),E=Object(dt.a)(Ym.a[Object(dt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?we.a["color-danger"]:t||"warning"===l?we.a["color-warning"]:we.a["color-success"],r.a.createElement(r.a.Fragment,null,r.a.createElement(tb,{justifyContent:"space-between"},r.a.createElement(ab,{flexDirection:"column"},r.a.createElement(mb,null,r.a.createElement(Eb,{src:eb.a}),r.a.createElement(sb,{color:n||we.a["blue-0"],left:23})),r.a.createElement(_b,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})),r.a.createElement(_b,{color:"secondary"},E)),r.a.createElement(nb,{flexDirection:"column",alignItems:"center"},r.a.createElement(lb,null,r.a.createElement(ib,{linkAnimationColor:s})),r.a.createElement(ob,{flexDirection:"column"},i&&r.a.createElement(db,{type:"percent",input:c/100,style:{color:ht.a.getGradientColor(c/100)}}),r.a.createElement(_b,{color:"primary",weight:"bold"},i&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),r.a.createElement(ab,{flexDirection:"column"},r.a.createElement(mb,null,r.a.createElement(Eb,{src:eb.a,flip:!0}),r.a.createElement(sb,{color:a.led_override_color||we.a["blue-0"],right:23})),r.a.createElement(_b,{color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})),r.a.createElement(_b,{color:"secondary"},E))),(t||o)&&r.a.createElement(ub,{alignItems:"center"},r.a.createElement(pb,{width:24,height:24}),r.a.createElement(V.a,{color:"secondary"},r.a.createElement(M.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const Ob=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Ib;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(Ib||(Ib={}));var gb=function({activeItem:e}){const{peer_ubb:t,adopted:a}=e,n=Object(O.getUplinkAttrs)(e),l=null==t?void 0:t.uplink,i=t&&(!Object(O.getIsUbbPeerAdopted)(e)||!a),o=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(bb,{activeItem:e,pendingAdoption:i}),r.a.createElement(zl,{device:e}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(hl,{activeItem:e}),r.a.createElement(Ob,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>r.a.createElement(Jp,{activeItem:e})},...t?[{id:"station",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_STATION"})," "," ",!!l&&r.a.createElement(M.c,{id:"wireless"===l.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>r.a.createElement($u,{deviceData:e,ubbDeviceType:Ib.STATION,pendingAdoption:i})}]:[],{id:"accessPoint",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_TYPE_UBB_AP"})," "," ",!!n&&r.a.createElement(M.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>r.a.createElement($u,{deviceData:t,ubbDeviceType:Ib.ACCESS_POINT,pendingAdoption:i})},...i?[]:[{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>r.a.createElement(qp,{activeItem:e})}]],multiOpen:!0,renderOnlyExpandedContent:!0})))};var hb=({wifiNetworkNames:e})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_WIFI_NETWORK"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e)):null;function Cb({activeItem:e}){const t=Object(o.useSelector)(Xs),a=Object(Ys.getWifiNetworkNames)(t,!1),n=Object(c.useMemo)(()=>[{Comp:Bs,key:"Uptime"},{Comp:hb,props:{wifiNetworkNames:a},key:"WiFiNetwork"}],[e,a]);return r.a.createElement(F.a,{flexDirection:"column"},n.map(({Comp:t,props:a={},key:n})=>r.a.createElement(t,Object.assign({key:n,activeItem:e},a))))}const Rb=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var vb=({activeItem:e})=>{const t=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),t&&r.a.createElement(Rb,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(Cb,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))};const fb=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var Tb=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:c}=Object(O.getUsppUtilization)(e),l="warning"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),r.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&r.a.createElement(fb,{size:"medium"}),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),r.a.createElement(Hd.a,{items:[{value:n,variant:c}]}))};const Db=Object(l.c)(ye.g)`
  padding: 16px 32px;
`,yb=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Pb=({activeItem:e})=>r.a.createElement(Db,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(yb,null),r.a.createElement(Tb,{activeItem:e}));const Sb=Object(l.c)(F.a)`
  margin-bottom: 24px;
  justify-content: space-between;
`,Ab=Object(l.c)(de.a)`
  margin-top: 12px;
  justify-content: flex-end;
`;var jb=Object(Ja.g)({mapPropsToValues:({activeItem:{outlet_table:e=[],outlet_overrides:t=[]}})=>({...e[0],...t[0]}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,submitForm:t,values:a,dirty:n,isValid:l,resetForm:i,setFormDirty:E,setFormInvalid:s})=>{const m=Object(o.useDispatch)();return Object(c.useEffect)(()=>{E("general",n),s("general",!l)},[E,s,n,l]),Object(c.useEffect)(()=>(m(Object(N.h)({general:()=>({outlet_overrides:[{...a}]})})),m(Object(N.j)({general:t})),m(Object(N.i)({general:i})),()=>{m(Object(N.h)({general:null})),m(Object(N.j)({general:null})),m(Object(N.i)({general:null}))}),[m,i,t,a]),r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(Sb,{flexDirection:"column"},r.a.createElement(tn.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME",placeholder:"DEVICE_PROPERTIES_LABEL_NAME"})),r.a.createElement(Sb,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"relay_state"})),r.a.createElement(Sb,{alignItems:"flex-start",justifyContent:"space-between"},r.a.createElement(F.a,{flexDirection:"column",flex:"0 1 65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(tn.a,{type:"checkbox",name:"cycle_enabled"})),r.a.createElement(Sb,{flexDirection:"column"},r.a.createElement(F.a,{flexDirection:"column",width:"65%"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"}))),r.a.createElement(Ab,{variant:"link",onClick:()=>m(Object(O.powerCycleOutlet)(e,a)),Icon:r.a.createElement(w.Ab,null)},r.a.createElement(M.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))))});const Nb=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var xb=Object(vt.compose)(qa(["general","network","screen","manage"]),M.f)(({activeItem:{mac:e,_id:t},activeItem:a,setFormDirty:n,setFormInvalid:c,isDirty:l,isInvalid:i,intl:E})=>{const s=Object(o.useDispatch)(),m=Object(o.useSelector)(Xa),d=Object(o.useSelector)(Ka),_=Object(o.useSelector)(Za);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Nb,{variant:"secondary",items:[{id:"general",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(jb,{activeItem:a,setFormDirty:n,setFormInvalid:c})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:a,setFormDirty:n,disableLedBrightnessField:!0,disableLedOverrideColor:!0})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:a,setFormDirty:n,setFormInvalid:c})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:a,disableDebug:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:l,isInvalid:i,onFormSubmit:()=>{const a=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});s(Object(O.updateDeviceWithIdEndpoint)(a,t,e,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))});var Lb=({activeItem:e,wan:t=!1,lan:a=!1})=>{const n=Object(c.useMemo)(()=>a?Object(_c.c)("LAN",e):null==e?void 0:e.ip,[a,e]),l=Object(c.useMemo)(()=>{let e="DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS";return t?e="DEVICE_PROPERTY_OVERVIEW_WAN_IP_ADDRESS":a&&(e="DEVICE_PROPERTY_OVERVIEW_LAN_IP_ADDRESS"),r.a.createElement(M.c,{id:e})},[t,a]);return n?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},l),r.a.createElement(V.a,{color:"secondary",size:"body"},n)):null};var Vb=({activeItem:e})=>{const t=Object(o.useSelector)(Xs),a=Object(Ys.getWifiNetworkNames)(t,!1),n=Object(c.useMemo)(()=>[{Comp:Lb,props:{wan:!0},key:"IpAddress"},{Comp:Bs,key:"Uptime"},{Comp:hb,props:{wifiNetworkNames:a},key:"WiFiNetwork"}],[e,a]);return r.a.createElement(F.a,{height:"100%",flexDirection:"column"},n.map(({Comp:t,props:a={},key:n})=>r.a.createElement(t,Object.assign({key:n,activeItem:e},a))))};const wb=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var Mb=({activeItem:e})=>{const t=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),t&&r.a.createElement(wb,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(Vb,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))};const Fb=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var Ub=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:c}=Object(O.getUspsUtilization)(e),l="warning"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),r.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&r.a.createElement(Fb,{size:"medium"}),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),r.a.createElement(Hd.a,{items:[{value:n,variant:c}]}))};const Bb=Object(l.c)(ye.g)`
  padding: 16px 32px;
`,zb=Object(l.c)("div")`
  margin-bottom: 16px;
`;var kb=({activeItem:e})=>r.a.createElement(Bb,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(zb,null),r.a.createElement(Ub,{activeItem:e}));const Wb=Object(l.c)(bn.a,{shouldForwardProp:e=>!["cellSize","isEnabled","marginSize"].includes(e)})`
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
`,Hb=l.a`
  margin-left: 15px;
`,$b=Object(l.c)("div",{shouldForwardProp:e=>"rotateIcon"!==e})`
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
`,Gb=Object(l.c)(w.gc)`
  max-width: 100% !important;
  max-height: 100% !important;
`,Yb=Object(l.c)(F.a,{shouldForwardProp:e=>"isPowerMeterSupported"!==e})`
  width: ${({isPowerMeterSupported:e})=>e?"134px":"100px"};
`;var Xb=({cellData:e,marginSize:t,cellSize:a,rotateIcon:c,tooltipPosition:l="bottomRight"})=>{const i=Object(n.k)(),{path:o}=Object(n.n)(),{site:E,page:s,id:m,panel:d}=Object(n.m)(),_=Object(Gn.n)(e,"POWER_METER");return r.a.createElement(Wb,{isEnabled:e.relay_state,tooltipClassName:Hb,marginSize:t,cellSize:a,onClick:t=>{var a,c;null===(a=null==t?void 0:t.preventDefault)||void 0===a||a.call(t),null===(c=null==t?void 0:t.stopPropagation)||void 0===c||c.call(t),i.push(Object(n.i)(o,{site:E,page:s,id:m,panel:d,subPanel:"outlets",subPanelId:e.index}))},message:_&&e.outletType===O.OutletType.STANDARD?r.a.createElement(Yb,{flexDirection:"column",justifyContent:"space-between",isPowerMeterSupported:!0},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.index)),r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NAME"})),r.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},e.name)),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.outlet_power||0).toFixed(2)}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_ENERGY"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},"0.00 ",r.a.createElement(M.c,{id:"COMMON_UNIT_KWH"}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.outlet_current||0).toFixed(2)}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.outlet_voltage||0).toFixed(2)}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},Number(e.outlet_power_factor||0).toFixed(2)))):r.a.createElement(Yb,{flexDirection:"column",justifyContent:"space-between"},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.index)),r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NAME"})),r.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},e.name)),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_ENABLED"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.cycle_enabled&&r.a.createElement(w.u,{size:"small"}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.relay_state&&r.a.createElement(w.u,{size:"small"})))),position:l,portal:!0},r.a.createElement($b,{rotateIcon:c},"usb"===e.outletType?r.a.createElement(Gb,null):r.a.createElement(w.qb,null)))};const Kb=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding-left: 10px;
`,Zb=Object(l.c)("div")`
  table {
    tr {
      cursor: pointer;
    }
  }
`,qb=Object(l.c)(w.g)`
  position: absolute;
  right: 8px;
  color: inherit;
`;var Jb=r.a.memo((function({deviceData:e,deviceData:{outlet_table:t},hidePorts:a}){const l=Object(n.k)(),{path:i}=Object(n.n)(),{site:o,page:E,id:s,panel:m}=Object(n.m)(),d=Object(O.getOutletNumbers)(e),{outletsDiagram:_,primaryOutletGroupCount:u}=Object(O.getDeviceSpecs)(e),p=null==t?void 0:t.some(e=>Object(Gn.n)(e,"POWER_METER")),b=Object(c.useMemo)(()=>(e=>[{id:"name",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:({name:e})=>r.a.createElement(V.a,{size:"body",truncate:!0},e)},...e?[{id:"power",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_POWER"})),renderCell:({outlet_power:e})=>r.a.createElement(V.a,{size:"body"},e?Number(e).toFixed(2):"-")}]:[],{id:"outletStatus",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{alignItems:"center"},e.portStatus?r.a.createElement(V.a,{size:"body"},e.portStatus):r.a.createElement(r.a.Fragment,null,r.a.createElement(Xb,{cellData:e,rotateIcon:e.rotateIcon,tooltipPosition:"topRight"}),r.a.createElement(Kb,null,r.a.createElement(M.c,{id:e.relay_state?"DEVICE_OUTLET_STATE_ENABLED":"DEVICE_OUTLET_STATE_DISABLED"})))),r.a.createElement(qb,{size:"small"}))}])(p),[p]),I=_?Object(O.determineRowLayoutsFromOutletDiagramConfig)(_,e):Object(O.determineRowLayoutsFromOutletConfig)(u,e),g=Object(c.useMemo)(()=>xc(e,[],{position:"topRight"}),[e]),h=Object(c.useMemo)(()=>[...I.flat().filter(e=>!!e).sort(({outletNumber:e},{outletNumber:t})=>e-t),...a?[]:g],[a,g,I]).map((t,a)=>{const n=Object(O.getActiveOutletInfo)(e,t.outletNumber-1);return{...t.portStatus?t:n,id:t.portStatus?"port-"+t.id:t.outletNumber+a,outletType:t.portStatus?null:Object(O.getOutletTypeByNumber)(d,t.outletNumber),rotateIcon:null==t?void 0:t.rotateIcon}});return r.a.createElement(Zb,null,r.a.createElement(Te.a,{columns:b,rowHeight:35,disableColumnFilters:!0,items:h,hideCellOverflow:!1,onRowClick:e=>l.push(Object(n.i)(i,{site:o,page:E,id:s,panel:m,subPanel:e.index?"outlets":"ports",subPanelId:e.index?e.index:e.port_idx}))}))}),({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);var Qb=({activeItem:e,hidePorts:t,...a})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Jb,Object.assign({deviceData:e,hidePorts:t},a)));const eO=Object(l.c)("div")`
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
`;var nO=r.a.memo(({isForDiagram:e,deviceData:t})=>{const a=Object(uc.ce)(t),n=Object(uc.ab)(t),c=Object(x.m)();return r.a.createElement(eO,null,r.a.createElement(tO,null,r.a.createElement(aO,{variant:"success"}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_ENABLED"}))),r.a.createElement(tO,null,r.a.createElement(aO,{background:c.motifPalette.neutral04}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_OUTLET_STATE_DISABLED"}))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tO,null,r.a.createElement(aO,{variant:"warning"}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_MBPS",values:{speed:"100/10"}}))),r.a.createElement(tO,null,r.a.createElement(aO,{background:c.motifPalette.neutral07}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tO,null,r.a.createElement(w.Bb,{width:12,height:12}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_OUTLET_STATE_DELIVERING"}))),r.a.createElement(tO,null,r.a.createElement(aO,{background:c.motifPalette.neutral07}),r.a.createElement(V.a,{size:"label",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))))});const cO=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,rO=Object(l.c)(F.a)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`,lO=Object(l.c)(w.W)`
  margin-right: 12px;
`,iO=Object(l.c)("div")`
  width: 5px;
`;var oO=r.a.memo(({deviceData:e})=>{const{outletsDiagram:t,primaryOutletGroupCount:a}=Object(O.getDeviceSpecs)(e),n=Object(O.isUspPduPro)(e),c=t?Object(O.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(O.determineRowLayoutsFromOutletConfig)(a,e),l=Object(ko.a)(c.map(e=>e.length));let i=l>10?"3px":"10px";const o=l>10?"19px":"20px";return c&&0!==c.length?r.a.createElement(r.a.Fragment,null,c.map((t,a)=>r.a.createElement(rO,{"align-items":"flex-end",key:"OutletLayoutRow-"+(a+1)},t.map((t,c)=>{if(!t)return r.a.createElement(iO,{key:`OutletSpacer-${a+1}-${c+1}`});const l=`Outlet-${a+1}-${c+1}`,E=Object(O.getActiveOutletInfo)(e,void 0,t.outletNumber),s=t&&E&&{outletType:t.outletType,...E};return n&&1===a&&c>2&&(i="16px"),n&&1===a&&c>3&&(i="54px"),r.a.createElement(Xb,{cellData:s,key:l,marginSize:i,cellSize:o,rotateIcon:t.rotateIcon})})))):r.a.createElement(cO,null,r.a.createElement(lO,{isActive:!0}),r.a.createElement(M.c,{id:"DEVICE_DIAGRAM_MISSING"}))},({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);const EO=Object(l.c)("div")`
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
`;var uO=({deviceData:e,hidePorts:t})=>{const{usedPower:a,maxPower:c}=Object(O.getUspPduOutletUtilization)(e),l=Object(n.k)();return r.a.createElement(EO,null,r.a.createElement(F.a,{justifyContent:"center"},r.a.createElement("div",null,r.a.createElement(oO,{deviceData:e})),e.port_table&&!t&&r.a.createElement(sO,null,r.a.createElement($o,{deviceData:e,portSizeOverride:"19px",history:l}))),r.a.createElement(nO,{isForDiagram:!0,deviceData:e}),a>c&&r.a.createElement(mO,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(dO,null),r.a.createElement(V.a,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_WARNING"}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(_O,null),r.a.createElement(V.a,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_INFO"})))))};const pO=Object(l.c)(F.a)`
  padding: 0 32px;
`;var bO=Object(vt.compose)(qa(["general","led","network","manage"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Xa),E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Za),{_id:m,mac:d}=e,_=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(uO,{deviceData:e,hidePorts:!0}),r.a.createElement(pO,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(Qb,{hidePorts:!0,activeItem:e})},{id:"led",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(m_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],renderOnlyExpandedContent:!0,multiOpen:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});_(Object(O.updateDeviceWithIdEndpoint)(e,m,d,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});function OO({activeItem:e}){const{usedPower:t,totalCurrent:a}=Object(O.getUspPduOutletUtilization)(e),n=[{messageId:"DEVICE_HEADER_POWER_USAGE",value:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:t}}))},{messageId:"DEVICE_PROPERTY_OVERVIEW_ENERGY",value:r.a.createElement(r.a.Fragment,null,"0 ",r.a.createElement(M.c,{id:"COMMON_UNIT_KWH"}))},{messageId:"DEVICE_PROPERTY_OVERVIEW_CURRENT",value:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:a}}))}];return r.a.createElement(F.a,{flexDirection:"column"},[Bs].map(t=>r.a.createElement(t,{key:t.name,activeItem:e})),n.map(({messageId:e,value:t})=>r.a.createElement(qt,{key:e},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e})),r.a.createElement(V.a,{size:"body"},t))))}const IO=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var gO=r.a.memo(({activeItem:e,...t})=>{const a=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),a&&r.a.createElement(IO,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(OO,{activeItem:e})},{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK"}),renderContent:()=>r.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const hO=Object(l.c)(w.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var CO=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:c}=Object(O.getUspPduOutletUtilization)(e),l="warning"===c;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),r.a.createElement(V.a,{size:"body",color:l?"warning":"secondary"},l&&r.a.createElement(hO,{size:"medium"}),r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),r.a.createElement(Hd.a,{items:[{value:n,variant:c}]}))};const RO=Object(l.c)(ye.g)`
  padding: 16px 32px;
`,vO=Object(l.c)("div")`
  margin-bottom: 16px;
`;var fO=({activeItem:e})=>r.a.createElement(RO,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(vO,null),r.a.createElement(CO,{activeItem:e}));const TO=Object(l.c)(F.a)`
  padding: 16px 32px;
`;var DO=Object(vt.compose)(qa(["general","outlets","lcmScreen","network","manage"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l,...i})=>{const E=Object(o.useSelector)(Xa),s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Za),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(uO,{deviceData:e}),r.a.createElement(TO,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(Qb,{activeItem:e})},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(hi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(E).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});var yO=({activeItem:{lte_ext_ant:e},flexProps:t})=>r.a.createElement(qt,{flexProps:t},r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),!0===e?r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ENABLED"})):r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_DISABLED"})));var PO=({activeItem:{lte_poe:e},flexProps:t})=>r.a.createElement(qt,{flexProps:t},r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),r.a.createElement(V.a,{color:"secondary",size:"body"},!0===e?r.a.createElement(M.c,{id:"COMMON_ENABLED"}):r.a.createElement(M.c,{id:"COMMON_DISABLED"})));var SO=({activeItem:e})=>r.a.createElement(nm,null,[{C:zs,flexProps:{}},{C:Bs},{C:rl},{C:ks,flexProps:{}},{C:yO},{C:PO,flexProps:{}}].map(({C:t,flexProps:a={}})=>r.a.createElement(t,{activeItem:e,flexProps:a,key:t.name}))),AO=a(789);const jO=Object(l.c)(bn.a)`
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
`,xO=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${Oo.n.warning};
`,LO=Object(l.c)("div")`
  width: 170px;
  line-height: 18px;
`;var VO=({mac:e,isUnreachable:t,isUnavailable:a})=>{const n=Object(o.useDispatch)(),l=t||a,i=t?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNREACHABLE_TOOLTIP":a?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE_TOOLTIP":"LTE_ACTIONS_SUBSCRIPTION_CHECK_TOOLTIP",E=l?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE":"LTE_ACTIONS_SUBSCRIPTION_CHECK",s=Object(c.useCallback)(()=>{l||n(Object(AO.f)([e]))},[l]);return r.a.createElement(jO,{position:"topRight",portal:!0,message:r.a.createElement(LO,null,r.a.createElement(M.c,{id:i}))},r.a.createElement(NO,{variant:"inline",onClick:s,disabled:l},r.a.createElement(xO,null),r.a.createElement(V.a,{size:"caption",color:l?"secondary":"info"},r.a.createElement(M.c,{id:E}))))};const wO=Object(l.c)("div")`
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
`,BO=Object(l.c)(w.b)`
  margin-right: 8px;
  color: ${Oo.n.warning};
`,zO=Object(l.c)("div")`
  width: 16px;
  min-width: 16px;
  margin-right: 8px;
`,kO=Object(l.c)("div")`
  display: inline-block;
`,WO=Object(l.c)("div")`
  margin-top: ${({theme:e})=>e.spacing["spacing-m"]};
`;var HO=({device:e,params:t,path:a,history:l})=>{const{site:i,page:E,subPage:s}=t,m=Object(O.isUltePro)(e),{license_state:d}=e,_=Object(O.isAdopted)(e),u=Object(o.useDispatch)(),p=Object(O.isUlte)(e)&&Object(dt.a)(e,"lte_subscription_status")===O.BILLING_SUBSCRIPTION_STATUS.PAST_DUE,b=Object(O.isUlte)(e)&&Object(dt.a)(e,"lte_subscription_status")===O.BILLING_SUBSCRIPTION_STATUS.CANCELED,I=Object(o.useSelector)(qi.selectEnv),g=Object(Qi.b)(I),h=`https://${g}/payments`,C=`https://${g}/subscriptions`,R=Object(O.calculateUsage)(e),v=Oo.n[R.state],f="warning"===R.state||"danger"===R.state&&!R.hasOverages,T=R.hasOverages&&!R.isSuspended,D=Object(o.useSelector)(Ri.d),y=Object(O.isDeviceWithCountryLockedWarning)(D,e),P=Object(O.isLicenseWithWarning)(e),S=Object(O.isUlteDeviceNotConnectedToUlte)(e),A=Object(O.isUlteDeviceNotRegisteredWithUlte)(e),j=Object(o.useSelector)($l.H),N=Object(o.useSelector)($l.s),x=Object(o.useSelector)($l.y),L=Object(c.useMemo)(()=>N||x,[N,x]),w=Object(c.useMemo)(()=>Object(O.isSubscriptionCheckRequired)(e),[e]),F=Object(c.useMemo)(()=>Object(O.isSubscriptionApiUnreachable)(e),[e]),U=Object(c.useMemo)(()=>Object(O.isUlte)(e)&&!!j&&!Object(O.isDeviceOwner)(e,j),[e,j]),B=Object(c.useMemo)(()=>_&&L&&(w||F||U),[_,L,w,F,U]);return Object(c.useEffect)(()=>{Object.keys(D).length||u(Ri.a)},[D,u]),_&&r.a.createElement(wO,null,r.a.createElement(FO,null,r.a.createElement(MO,null,r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_HEADER_LABEL"})),r.a.createElement(V.a,{color:"secondary",size:"header-l"},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{color:v}},Object(Xt.c)(R.usedBytes,"bytes","JEDEC")),r.a.createElement("span",null,e.lte_soft_limit>0&&"/"),r.a.createElement("span",null,e.lte_soft_limit>0&&Object(Xt.c)(R.softLimitBytes,"bytes","JEDEC"))))),r.a.createElement(FO,null,e.lte_soft_limit>0&&r.a.createElement(Ct.a,{variant:R.state,value:R.width,size:"medium"})),r.a.createElement(WO,null,f&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_APPROACHING_LIMIT",values:{amount:R.width+"%"}})),T&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement("div",null,r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_SOFT_LIMIT",values:{softLimit:Object(Xt.c)(R.softLimitBytes,"bytes","JEDEC"),hardLimit:Object(Xt.c)(R.hardLimitBytes,"bytes","JEDEC")}}))),R.isSuspended&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_HARD_LIMIT"})),"success"!==R.state&&r.a.createElement(UO,null,r.a.createElement(zO,null),r.a.createElement(kO,null,r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT"})," ",r.a.createElement(de.a,{variant:"inline",onClick:t=>{t.preventDefault(),t.stopPropagation();const c=Object(n.i)(a,{id:e.mac,site:i,page:E,panel:"settings",subPage:s});l.push(c)}},r.a.createElement(M.c,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT_BUTTON"})))),(p||b)&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.b,{id:b?"DEVICE_DATA_USAGE_LTE_SERVICE_CANCELED":"DEVICE_DATA_USAGE_LTE_PAYMENT_OVERDUE",values:{billingUrl:h}})),y&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NOTICE_COUNTRY_LOCKED_WARNING_BODY"})),P&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.b,{id:`DEVICE_PROPERTIES_NOTICE_LICENSE_${d.toUpperCase()}_BODY`,values:{url:C}})),S&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_CONNECTED_WARNING_BODY"})),A&&r.a.createElement(UO,null,r.a.createElement(BO,null),r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_REGISTERED_WARNING_BODY"})),B&&!m&&r.a.createElement(VO,{mac:e.mac,isApplicable:w,isUnreachable:F,isUnavailable:U})))},$O=a(1173);const GO=({value:e,valueUnit:t,translationId:a})=>void 0!==e&&r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:a})),"boolean"==typeof e?r.a.createElement(V.a,{color:"secondary",size:"body"},e?r.a.createElement(M.c,{id:"COMMON_ENABLED"}):r.a.createElement(M.c,{id:"COMMON_DISABLED"})):r.a.createElement(V.a,{color:"secondary",size:"body"},e,t&&" "+t));var YO=({activeItem:e,isUltePro:t})=>{const{lte_radio_mode:a,lte_rssi:n,lte_ecio:c,lte_io:l,lte_ip:i,lte_sinr:o,lte_rsrq:E,lte_rsrp:s,lte_snr:m,lte_rx_chan:d,lte_tx_chan:_,lte_rscp:u,lte_apn:p,lte_connected:b,lte_pdptype:O,lte_band:I,lte_networkoperator:g,lte_rat:h,lte_state:C,lte_signal:R,lte_imei:v,lte_iccid:f,lte_cell_id:T,lte_hard_limit:D,lte_soft_limit:y,total_tx_bytes:P,total_rx_bytes:S}=e,A=(a||"").toUpperCase(),j=Object(Xt.c)(D,"bytes","JEDEC"),N=Object(Xt.c)(y,"bytes","JEDEC");return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(GO,{value:i,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IP"}),r.a.createElement(GO,{value:p,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_APN"}),r.a.createElement(GO,{value:O,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_PDP_TYPE"}),r.a.createElement(GO,{value:Object($O.a)(b),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CONNECTED"}),r.a.createElement(GO,{value:I,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_BAND"}),r.a.createElement(GO,{value:T,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CELL_ID"}),P&&r.a.createElement(GO,{value:Object(Xt.c)(P,"bytes","JEDEC"),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_TRANSMITTED"}),S&&r.a.createElement(GO,{value:Object(Xt.c)(S,"bytes","JEDEC"),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_RECEIVED"}),r.a.createElement(GO,{value:g,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_NETWORK_OPERATOR"}),r.a.createElement(GO,{value:h,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RAT"}),r.a.createElement(GO,{value:Object($O.a)(C),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_STATUS"}),r.a.createElement(GO,{value:R,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SIGNAL"}),A===at.LteRadioMode.Lte&&r.a.createElement(r.a.Fragment,null,r.a.createElement(GO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),r.a.createElement(GO,{value:E,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRQ"}),r.a.createElement(GO,{value:s,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRP"}),r.a.createElement(GO,{value:m,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SNR"}),r.a.createElement(GO,{value:d,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RX_CHANNEL"}),r.a.createElement(GO,{value:_,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_TX_CHANNEL"})),(A===at.LteRadioMode.Cdma||A===at.LteRadioMode.Hdr)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(GO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),r.a.createElement(GO,{value:c,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ECIO"})),A===at.LteRadioMode.Hdr&&r.a.createElement(r.a.Fragment,null,r.a.createElement(GO,{value:l,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IO"}),r.a.createElement(GO,{value:o,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SINR"})),A===at.LteRadioMode.Gsm&&r.a.createElement(GO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),A===at.LteRadioMode.Tdma&&r.a.createElement(GO,{value:u,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSCP"}),r.a.createElement(GO,{value:v,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IMEI"}),r.a.createElement(GO,{value:f,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ICCID"}),Number(j)>0&&r.a.createElement(GO,{value:j,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_LIMIT"}),Number(j)>0&&r.a.createElement(GO,{value:N,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_WARNING"}))};const XO=Object(l.c)(de.a)`
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
`;var KO=function({activeItem:{uplink:{rx_bytes:e,"rx_bytes-r":t,rx_packets:a,speed:c,tx_bytes:l,"tx_bytes-r":i,tx_packets:E}={}},activeItem:s,isUltePro:m,params:_,path:u,history:p}){const{site:b,page:I,subPage:g}=_,h=Object(o.useSelector)(O.selectDevicesData),C=t+i,R=Object(o.useSelector)(e=>Object(O.getUplink)(Object(O.selectDevicesData)(e),s)),v=Object(O.getUplinkDisplayName)(s,R),f=Object(o.useDispatch)(),T=Object(O.getUplinkRemotePort)(h,s);return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK"})),r.a.createElement(XO,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(n.i)(u,{id:R.mac,site:b,page:I,panel:"overview",subPage:g});p.push(t),f(Object(N.g)({type:d.b.DEVICE,mac:R.mac}))}},v)),r.a.createElement(il,{portSpeed:c}),m&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==T?void 0:T.poe_power)||0}}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIVITY_DOWN_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},a?a.toLocaleString():null,"/",r.a.createElement(me.a,{type:"bytes",input:e,size:"body"}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_ACTIVITY_UP_PKTS_BYTES"})),r.a.createElement(V.a,{size:"body"},E?E.toLocaleString():null,"/",r.a.createElement(me.a,{type:"bytes",input:l,size:"body"}))),m&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_HEADER_ACTIVITY"})),r.a.createElement(me.a,{type:"bytes",input:C,options:"bitrate",size:"body"})))};const ZO=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  .styledAccordionContent {
    padding: 0;
    margin: 0;
  }
`;var qO=({activeItem:e,...t})=>{var a;const n=Object(O.isAdopted)(e),c=Object(O.isUltePro)(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(HO,Object.assign({device:e},t)),r.a.createElement(hl,{activeItem:e}),r.a.createElement(ZO,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(SO,{activeItem:e})},{id:"lte",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_UNIFI_ACCORDION_HEADER_LTE"}),renderContent:()=>r.a.createElement(YO,{activeItem:e,isUltePro:c})},...(null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.mac)?[{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}),renderContent:()=>r.a.createElement(KO,Object.assign({activeItem:e,isUltePro:c},t))}]:[]],contentClassName:"styledAccordionContent",renderOnlyExpandedContent:!0,multiOpen:!0})))};var JO=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"ap",heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT"})};const QO=Object(l.c)(ye.g)`
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
`,EI=Object(Ja.g)({mapPropsToValues:({isUltePro:e,activeItem:{lte_ext_ant:t,lte_poe:a,lte_apn:n,lte_is_sim_pin_required:c,lte_sim_pin_tries_left:r,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:s,lte_soft_limit:m=(e?0:nI[0].value),lte_data_warning_enabled:d,lte_hard_limit:_=0}})=>({lte_ext_ant:"string"==typeof t?"enabled"===t:t,lte_poe:"string"==typeof a?"enabled"===a:a,lte_apn:n,lte_is_sim_pin_required:c,lte_sim_pin_tries_left:r,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:!e||s,lte_soft_limit:new Xt.a(m,"bytes","IEC").value,lte_data_warning_enabled:d,lte_hard_limit:new Xt.a(_,"bytes","IEC").value}),validationSchema:({isUltePro:e})=>Qa.a.lazy(()=>Qa.a.object().shape({lte_ext_ant:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA").required(),lte_poe:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH").required(),lte_apn:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS").matches(hn.n,r.a.createElement(M.c,{id:"COMMON_VALIDATION_APN_ADDRESS"})).required(),lte_sim_pin:Qa.a.string().when("lte_is_sim_pin_required",{is:!0,then:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN").matches(hn.o,r.a.createElement(M.c,{id:"COMMON_VALIDATION_LTE_PIN"})).required()}),lte_username:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME"),lte_password:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD"),lte_auth_type:Qa.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE").oneOf([at.LteAuthTypes.Pap,at.LteAuthTypes.Chap,at.LteAuthTypes.PapChap,at.LteAuthTypes.None]),lte_data_limit_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"),lte_soft_limit:Qa.a.number().integer(r.a.createElement(M.c,{id:"COMMON_VALIDATION_WHOLE_NUMBER"})).when("lte_data_limit_enabled",{is:!0,then:e?Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").min(0).required():Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").oneOf(nI.map(({value:e})=>e)).required()}),lte_data_warning_enabled:Qa.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"),lte_hard_limit:Qa.a.number().when("lte_data_limit_enabled",{is:!0,then:Qa.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT").min(0).required().integer(r.a.createElement(M.c,{id:"COMMON_VALIDATION_WHOLE_NUMBER"}))}).when(["lte_soft_limit"],(t,a)=>a.min(e?t>=0&&t:0,r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_ERROR"})))})),handleSubmit:()=>null});var sI=Object(vt.compose)(Object(o.connect)(null,{updateDevice:O.updateDevice}),EI)(({activeItem:e,isUltePro:t,values:a,dirty:n,isValid:l,errors:i,resetForm:E,setFormDirty:s,setFormInvalid:m,setFieldTouched:d,setFieldValue:_,formName:u="lte"})=>{const p=Object(o.useDispatch)();return Object(c.useEffect)(()=>{p(Object(N.h)({[u]:()=>{const e={...a,lte_soft_limit:Object(O.GiBToBytes)(a.lte_soft_limit),lte_hard_limit:t?Object(O.GiBToBytes)(a.lte_hard_limit):Object(O.GiBToBytes)(a.lte_soft_limit+2),lte_data_warning_enabled:a.lte_data_limit_enabled};return a.lte_data_limit_enabled||(e.lte_soft_limit=0,e.lte_hard_limit=0),e}})),p(Object(N.j)({[u]:()=>E({values:a})})),p(Object(N.i)({[u]:E}))},[p,E,a,e._id]),Object(c.useEffect)(()=>{s(u,n),m(u,!l)},[n,s,m,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lte_ext_ant"})),r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lte_poe"})),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement(lI,{weight:"bold",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD"}))),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS",name:"lte_apn",full:!0,autocomplete:"off"})),a.lte_is_sim_pin_required&&r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN",name:"lte_sim_pin",type:"password",full:!0,autocomplete:"off"}),r.a.createElement(F.a,{alignItems:"center",marginTop:i.lte_sim_pin?20:4},r.a.createElement(iI,{isActive:!0}),r.a.createElement(V.a,{color:"secondary",size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD_TRIES",values:{count:a.lte_sim_pin_tries_left}})))),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME",name:"lte_username",full:!0})),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD",name:"lte_password",type:"password",passwordToggle:!0,full:!0})),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{name:"lte_auth_type",type:"dropdown",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE",options:cI,validated:!0,translateLabel:!0,full:!0})),r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lte_data_limit_enabled"})),a.lte_data_limit_enabled&&r.a.createElement(r.a.Fragment,null,r.a.createElement(rI,{flexDirection:"column",marginForError:!0},r.a.createElement(Jn.Field,{name:"lte_hard_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT",type:"number",full:!0})),r.a.createElement(rI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"}))),r.a.createElement(rI,{flexDirection:"column",marginForError:!0},r.a.createElement(Jn.Field,{name:"lte_soft_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING",type:"number",full:!0,onChange:e=>{_("lte_soft_limit",e.target.value),d("lte_hard_limit")}})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(rI,null,r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"}))),r.a.createElement(rI,{flexDirection:"column"},r.a.createElement(Jn.Field,{label:"DEVICE_ULTE_SETUP_DATA_LIMIT_VALUE_FIELD",translateLabel:!0,full:!0,validated:!0,options:nI,type:"dropdown",name:"lte_soft_limit"}),r.a.createElement(oI,{color:"secondary",size:"caption"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_DESCRIPTION"})))))});const mI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  > li:last-child {
    border-bottom: 0;
  }
`;var dI;!function(e){e.NAME="name",e.LTE="lte",e.NETWORK="network",e.MANAGE_DEVICE="manage-device"}(dI||(dI={}));var _I=Object(vt.compose)(qa([dI.NAME,dI.LTE,dI.NETWORK,dI.MANAGE_DEVICE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Za),m=Object(o.useSelector)(Xa),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=Object(c.useMemo)(()=>Object(O.isUltePro)(e),[e.type]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.g,{flex:"1"},r.a.createElement(mI,{variant:"secondary",items:[{id:dI.NAME,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:dI.NAME})},{id:dI.LTE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_LTE"}),renderContent:()=>r.a.createElement(sI,{activeItem:e,setFormDirty:t,setFormInvalid:a,isUltePro:p,formName:dI.LTE})},{id:dI.NETWORK,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:dI.NETWORK})},{id:dI.MANAGE_DEVICE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const uI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`,pI=Object(l.c)("div")`
  margin-bottom: 16px;
`,bI=Object(l.c)("div")`
  padding: 0 32px;
  margin-bottom: 32px;
`;var OI;!function(e){e.NAME="name",e.PORTS="ports",e.MANAGE="manage"}(OI||(OI={}));var II=Object(vt.compose)(qa([OI.NAME,"lcmScreen",OI.MANAGE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Za),m=Object(o.useSelector)(Xa),d=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),_=Object(o.useDispatch)(),{_id:u,mac:p}=e;return r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(uI,{variant:"secondary",items:[{id:OI.NAME,openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:OI.NAME})},{id:OI.PORTS,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(hs,{activeItem:e})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(pI,null,r.a.createElement(uO,{hidePorts:!0,deviceData:e})),r.a.createElement(bI,null,r.a.createElement(Qb,{hidePorts:!0,activeItem:e})))},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(hi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:OI.MANAGE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(m).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});_(Object(O.updateDeviceWithIdEndpoint)(e,u,p,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});var gI=({activeItem:{has_temperature:e,general_temperature:t}})=>e?r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:t}}))):null;var hI=({activeItem:e})=>{const{has_fan:t,fan_level:a}=e,n=a>=nl(e);return t&&cl(e)?r.a.createElement(r.a.Fragment,null,r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_LEVEL"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n?a:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"}))),r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_STATE"})),r.a.createElement(V.a,{color:"secondary",size:"body"},n?r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_ON"}):r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_FAN_OFF"})))):null};var CI=({activeItem:e})=>{const t=Object(c.useMemo)(()=>[gI,hI,Bs,rl,ks],[e]);return r.a.createElement(nm,null,t.map(t=>r.a.createElement(t,{activeItem:e})))};var RI=({uplink:{port_idx:e}})=>r.a.createElement(qt,null,r.a.createElement(V.a,{color:"secondary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),r.a.createElement(V.a,{color:"secondary",size:"body"},e));var vI=({activeItem:e,uplinkDevice:t,...a})=>{const n=Object(c.useMemo)(()=>Object(O.getUplinkAttrs)(e)||{},[e]),l=Object(O.getUplinkDisplayName)(e,t.uplink),i=Object(c.useMemo)(()=>[RI,Lm,il,wm,Mm,Fm],[e]);return r.a.createElement(nm,null,i.map(e=>r.a.createElement(e,Object.assign({uplink:n,uplinkDevice:t,uplinkName:l},a))))};const fI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var TI=({activeItem:e,...t})=>{const a=Object(o.useSelector)(t=>Object(O.getUplink)(Object(O.selectDevicesData)(t),e)),n=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(hl,{activeItem:e}),r.a.createElement(fI,{variant:"secondary",items:[{id:"overview",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(CI,{activeItem:e})},...a?[{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK"}),renderContent:()=>r.a.createElement(vI,Object.assign({activeItem:e,uplinkDevice:a},t))}]:[],{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0})))};const DI=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var yI=function({activeItem:e}){var t;const a=!!(null===(t=e.psu_table)||void 0===t?void 0:t.length),n=[{id:"stats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>r.a.createElement(Ql,{activeItem:e}),openByDefault:!a}];return r.a.createElement(DI,{variant:"secondary",items:n,multiOpen:!0,renderOnlyExpandedContent:!0})};const PI=10,SI=3600,AI=Object(l.c)(ye.g)`
  margin-bottom: 16px;
`,jI=Object(Ja.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e})=>({lcm:e}),validationSchema:gn.a.object().shape({lcm:gn.a.object().shape({enabled:gn.a.boolean(),sync:gn.a.boolean(),idle_timeout:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT").min(PI).max(SI).required(),brightness:gn.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required()})}),handleSubmit:()=>null});const NI={saveSettings:Ei.saveSettings};var xI=Object(vt.compose)(Object(o.connect)(e=>({lcmSettings:Object(Ei.selectLcmSettings)(e)}),NI),jI)((function({values:e,setFieldValue:t,resetForm:a,setFormDirty:n,dirty:l,initialValues:i}){const E=Object(o.useDispatch)();Object(c.useEffect)(()=>{n(VI.SCREEN,l)},[n,l]),Object(c.useEffect)(()=>{E(Object(N.h)({[VI.SCREEN]:()=>e})),E(Object(N.j)({[VI.SCREEN]:()=>{Object(oi.a)(i.lcm,e.lcm)||E(Object(Ei.saveSettings)(e.lcm)),a({values:e})}})),E(Object(N.i)({[VI.SCREEN]:a}))},[E,a,e]);const[s,m]=Object(c.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(AI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_SCREEN"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.enabled"})),r.a.createElement(AI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),r.a.createElement(Jn.Field,{type:"checkbox",name:"lcm.sync"})),r.a.createElement(AI,{justifyContent:"space-between"},r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT"})),r.a.createElement(qE.a,{checked:s,onChange:()=>{m(!s)}})),s&&r.a.createElement(AI,{flexDirection:"column"},r.a.createElement(Jn.Field,{name:"lcm.idle_timeout",label:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT",type:"number",min:PI,max:SI,full:!0})),r.a.createElement(V.a,{color:"primary",size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"})),r.a.createElement(AI,null,r.a.createElement(ii.a,{size:"large",value:e.lcm.brightness||O.DEFAULT_LED_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>r.a.createElement(V.a,{color:"secondary"},e,"%"),onChange:e=>{t("lcm.brightness",+e.target.value)}})))}));const LI=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var VI;!function(e){e.NAME="name",e.PORTS="ports",e.SCREEN="screen",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage"}(VI||(VI={}));var wI=Object(vt.compose)(qa([VI.NAME,VI.SCREEN,VI.SERVICES,VI.NETWORK,VI.MANAGE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Ka),m=Object(o.useSelector)(Za),d=Object(o.useSelector)(Xa),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useDispatch)(),{_id:p,mac:b}=e;return r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(LI,{variant:"secondary",items:[{id:VI.NAME,openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.NAME})},{id:VI.PORTS,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:VI.SCREEN,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(xI,{setFormDirty:t})},{id:VI.SERVICES,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.SERVICES})},{id:VI.NETWORK,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:VI.NETWORK})},{id:VI.MANAGE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(d).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});u(Object(O.updateDeviceWithIdEndpoint)(e,p,b,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const MI=Object(l.c)(Ee.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  .styledAccordionContent {
    padding: 0;
    margin: 0;
  }
`;var FI=function({activeItem:e,...t}){const a=t_(e),n=[];return a.length&&n.push({id:"channelUsage",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>r.a.createElement(c_,{ChannelBars:a})}),Object(O.isDeviceConnected)(e)&&Object(Gn.d)(e,O.WIFI_CAPS.RF_SCAN)&&n.push({id:"rfEvironment",openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>r.a.createElement(Wd,{activeItem:e})}),r.a.createElement(MI,{variant:"secondary",items:n,contentClassName:"styledAccordionContent",multiOpen:!0,renderOnlyExpandedContent:!0})};const UI=Object(l.c)(F.a)`
  padding: 0 32px;
`;var BI=Object(vt.compose)(qa(["general","screen","network","services"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Za),_=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),u=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:p,mac:b}=e,I=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,_&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(UI,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"radios",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:u})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),openByDefault:!1,renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"screen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{});I(Object(O.updateDeviceWithIdEndpoint)(e,p,b,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(m).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});var zI=({activeItem:e})=>{const{source:t,status:a,statusColor:n}=Object(O.getActivePsuText)(e);return r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:t})),r.a.createElement(V.a,{size:"body",color:n},r.a.createElement(M.c,{id:a})))};const kI=Object(l.c)(V.a)`
  margin-bottom: 8px;
`,WI=Object(l.c)(V.a)`
  margin-top: 16px;
  margin-bottom: 8px;
`;var HI=({activeItem:e})=>{const t=[Object(O.getPsuInternalBattery)(e),Object(O.getPsuExternalBattery)(e)];return r.a.createElement(r.a.Fragment,null,t.map(e=>r.a.createElement("div",{key:e.index},Object(O.getIsPsuInternalBattery)(e)?r.a.createElement(kI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})):r.a.createElement(WI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STATUS"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:e.charge_status?"DEVICE_USW_MC_PSU_BATTERY_STATE_"+e.charge_status.replace(" ","_").toUpperCase():"DEVICE_USW_MC_PSU_BATTERY_STATE_UNKNOWN"}))),e.capacity&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_CAPACITY"})),r.a.createElement(V.a,{size:"body"},r.a.createElement("span",{style:{color:ht.a.getGradientColor(e.capacity/100)}},e.capacity,"%"))),e.technology&&"Unknown"!==e.technology&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TYPE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_BATTERY_TYPE_"+e.technology.replace("-","_").toUpperCase()}))),e.charge_full_design&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STORAGE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERE_HOURS",values:{value:e.charge_full_design}}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_POWER_USAGE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.power).toFixed(1)}}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.current).toFixed(1)}}))),r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.voltage).toFixed(1)}}))),!!e.time_to_empty_avg&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TIME"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"uptime",size:"body",input:e.time_to_empty_avg}))),e.installation_time&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_INSTALLATION_DATE"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(me.a,{type:"uptime",size:"body",input:e.installation_time}))),e.health&&r.a.createElement(qt,null,r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_HEALTH_STATUS"})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_HEALTH_"+e.health.replace(" ","_").toUpperCase()}))))))};const $I=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var GI=r.a.memo(({activeItem:e,...t})=>{var a,n;const l=null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.type,i=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),o=l&&(l===O.UplinkType.WIRE?"DEVICE_CONNECTION_WIRED":"DEVICE_CONNECTION_WIRELESS");return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),i&&r.a.createElement($I,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(ll,{switchDeviceData:e}),openByDefault:!0},...(null===(n=e.psu_table)||void 0===n?void 0:n.length)?[{id:"powerSource",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_SOURCE"}),renderContent:()=>r.a.createElement(zI,{activeItem:e})},{id:"battery",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY"}),renderContent:()=>r.a.createElement(HI,{activeItem:e})}]:[],{id:"uplink",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK"}),o&&r.a.createElement(r.a.Fragment,null," ","(",r.a.createElement(M.c,{id:o}),")")),renderContent:()=>r.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clients",label:r.a.createElement(M.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const YI=Object(l.c)(F.a)`
  position: relative;
  border-bottom: 4px;
`,XI=Object(l.c)(F.a)`
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
`,KI=Object(l.c)("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: ${({theme:e})=>e.motifPalette.ui04};
`,ZI=Object(l.c)("div")`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: ${({theme:e})=>e.motifPalette.ui04};
`,qI=Object(l.c)(V.a)`
  margin: 14px 0px;
`;var JI=({activeItem:e})=>{const{total:t,outlets:a,internalBattery:n,externalBattery:c}=Object(O.getPsuUtilization)(e);return r.a.createElement(YI,{flexFlow:"wrap"},r.a.createElement(KI,null),r.a.createElement(ZI,null),r.a.createElement(XI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(qI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_TOTAL"})),r.a.createElement(pa.a,{title:t.usedPowerPercentage+"%",description:`${t.usedPower}/${t.maxPower}W`,size:116,items:[{id:"free",color:t.statusColor,value:t.usedPowerPercentage},{id:"used",color:we.a["white-6"],value:100-t.usedPowerPercentage}]})),r.a.createElement(XI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(qI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_OUTLETS"})),r.a.createElement(pa.a,{title:a.usedPowerPercentage+"%",description:`${a.usedPower}/${a.maxPower}W`,size:116,items:[{id:"free",color:a.statusColor,value:a.usedPowerPercentage},{id:"used",color:we.a["white-6"],value:100-a.usedPowerPercentage}]})),r.a.createElement(XI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(qI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})),r.a.createElement(pa.a,{title:n.usedPowerPercentage+"%",description:`${n.usedPower}/${n.maxPower}W`,size:116,items:[{id:"used",color:n.statusColor,value:n.usedPowerPercentage},{id:"free",color:we.a["white-6"],value:100-n.usedPowerPercentage}]})),r.a.createElement(XI,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},r.a.createElement(qI,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),r.a.createElement(pa.a,{title:c.usedPowerPercentage+"%",description:`${c.usedPower}/${c.maxPower}W`,size:116,items:[{id:"used",color:c.statusColor,value:c.usedPowerPercentage},{id:"free",color:we.a["white-6"],value:100-n.usedPowerPercentage}]})))};var QI=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(c.useEffect)(()=>{t(Object(De.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),r.a.createElement(Jl,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const eg=Object(l.c)(Ee.a)`
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
`;var rg=Object(vt.compose)(qa(["general","lcmScreen","services","network"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:l,intl:i,...E})=>{const s=Object(o.useSelector)(Xa),m=Object(o.useSelector)(Ka),d=Object(o.useSelector)(Za),{_id:_,mac:u}=e,p=Object(o.useDispatch)(),b=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,b&&r.a.createElement(Qo,{deviceData:e}),r.a.createElement(ag,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"ports",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_PORTS"}),renderContent:()=>r.a.createElement(rE,{activeItem:e})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ng,null,r.a.createElement(uO,{hidePorts:!0,deviceData:e})),r.a.createElement(cg,null,r.a.createElement(Qb,{hidePorts:!0,activeItem:e})))},{id:"lcmScreen",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>r.a.createElement(hi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:l,onFormSubmit:()=>{const e=Object.entries(s).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;p(Object(O.updateDeviceWithIdEndpoint)(a,_,u,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})}}))});const lg=Object(l.c)("div")`
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
`,ig=Object(l.c)(ye.g)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
`,og=Object(l.c)(w.nc)`
  margin-right: 4px;
  margin-top: 6px;
`;var Eg,sg;!function(e){e.HIERARCHY="hierarchy",e.RADIO_NAME="radio_name",e.ESSID="essid",e.BSSID="bssid"}(Eg||(Eg={})),function(e){e.RADIO_GROUP="radio_group",e.BSSID_ESSID="bssid/essid",e.BW="bw",e.CHANNEL="channel"}(sg||(sg={}));var mg=({activeItem:e})=>{var t;return(null===(t=null==e?void 0:e.vap_table)||void 0===t?void 0:t.length)?r.a.createElement(lg,null,r.a.createElement(Te.a,{hideCellOverflow:!1,items:e.vap_table.reduce((e,t)=>{const a=e.findIndex(({channel:e})=>e===t.channel),n={[Eg.HIERARCHY]:!0,[Eg.BSSID]:t.bssid,[Eg.ESSID]:t.essid};return a>=0?(e[a]={...e[a],children:[...e[a].children,{...n}]},e):(e.push({...t,idField:`${t.id}-${t.essid}-${t.bssid}`,children:[{...n}]}),e)},[]),idField:"idField",disableColumnFilters:!0,columns:[{id:sg.RADIO_GROUP,minWidth:23,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_RADIO_GROUP"})),renderCell:({radio:e,channel:t,hierarchy:a,essid:n})=>{var c,l;return a?r.a.createElement(ye.g,{width:"100%",alignItems:"center"},r.a.createElement(og,{isActive:!0}),r.a.createElement(V.a,{size:"body",truncate:!0,color:"secondary"},n)):r.a.createElement(ye.g,{justifyContent:"space-between",height:"100%",width:"100%",alignItems:"center"},r.a.createElement(ye.g,{marginRight:8,alignItems:"center"},r.a.createElement(V.a,{size:"body",color:"secondary"},r.a.createElement(M.b,{id:`DEVICE_HEADER_RADIO${null===(c=Ys.WlanBand[null==e?void 0:e.toUpperCase()])||void 0===c?void 0:c.toUpperCase()}_SHORT`})),(l=[{label:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_LABEL_SHORT",range:[36,64]},{label:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_LABEL_SHORT",range:[100,128]},{label:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_LABEL_SHORT",range:[149,165]}].find(({range:[e,a]})=>Object(sd.a)(t,e,a)))&&r.a.createElement(V.a,{size:"body",color:"secondary",whiteSpacePreWrap:!0}," ",r.a.createElement(M.c,{id:l.label}))),r.a.createElement(bn.a,{message:r.a.createElement(ye.g,{flexDirection:"column"},r.a.createElement(ig,{paddingBottom:12},r.a.createElement(V.a,{size:"body",weight:"bold",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_CHANNELS"}))),r.a.createElement(ye.g,{marginTop:12,flexDirection:"column"},r.a.createElement(ye.g,{marginBottom:6,justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_LABEL"})),r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_LOW_BANDS_RANGE"}))),r.a.createElement(ye.g,{marginBottom:6,justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_LABEL"})),r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_MID_BANDS_RANGE"}))),r.a.createElement(ye.g,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_LABEL"})),r.a.createElement(V.a,{size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_HIGH_BANDS_RANGE"}))))),width:180,position:"top"},r.a.createElement(w.W,{isActive:!0})))}},{id:sg.BSSID_ESSID,minWidth:25,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID_ESSID"})),renderCell:({hierarchy:e,bssid:t})=>e&&r.a.createElement(V.a,{size:"body",color:"secondary",truncate:!0},t)},{id:sg.BW,minWidth:20,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BW"})),renderCell:({bw:e})=>e&&r.a.createElement(V.a,{size:"body",color:"secondary"},e," ",r.a.createElement(M.c,{id:"COMMON_UNIT_MHZ"}))},{id:sg.CHANNEL,minWidth:15,renderLabel:()=>r.a.createElement(V.a,{color:"primary",size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})),renderCell:({channel:e})=>r.a.createElement(V.a,{size:"body",color:"secondary"},e)}]})):null};const dg=Object(l.c)(Ee.a)`
  padding: 10px 30px;
`;var _g=({activeItem:e,params:t,path:a,history:n,...l})=>{var i,o;const E=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(F.a,{flexDirection:"column"},r.a.createElement(zl,{device:e}),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Om,{activeItem:e}),r.a.createElement(dg,{variant:"secondary",items:[...E?[{id:"history",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>r.a.createElement(Fs,Object.assign({activeItem:e},l))}]:[],{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>r.a.createElement(cm,{activeItem:e})},...(null===(i=null==e?void 0:e.uplink)||void 0===i?void 0:i.mac)?[{id:"uplinkWired",label:"wire"===(null===(o=null==e?void 0:e.uplink)||void 0===o?void 0:o.type)?r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):r.a.createElement(M.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>r.a.createElement(km,{activeItem:e,params:t,path:a,history:n})}]:[],{id:"airStats",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>r.a.createElement(jm,{activeItem:e,radio:t}))},{id:"wlan",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_WLAN"}),renderContent:()=>r.a.createElement(mg,{activeItem:e})},{id:"clientsGuests",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>r.a.createElement(gl,{activeItem:e,params:t,path:a,history:n})}],renderOnlyExpandedContent:!0,multiOpen:!0})))};const ug=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var pg;!function(e){e.NAME="name",e.LED="led",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage",e.RADIOS="radios"}(pg||(pg={}));var bg=Object(vt.compose)(qa([pg.NAME,pg.RADIOS,pg.LED,pg.SERVICES,pg.NETWORK,pg.MANAGE]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Xa),E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Za),m=Object(o.useSelector)(Ei.selectConnectivityMonitorEnabled),{_id:d,mac:_}=e,u=Object(o.useDispatch)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ug,{variant:"secondary",items:[{id:pg.NAME,openByDefault:!0,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:pg.NAME})},{id:pg.RADIOS,label:r.a.createElement(M.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>r.a.createElement(U_,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:m})},...Object(Gn.f)(e)?[{id:"bandsteer",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_BAND_STEERING"}),renderContent:()=>r.a.createElement(k_,{activeItem:e,setFormDirty:t})}]:[],{id:pg.LED,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>r.a.createElement(Wi,{activeItem:e,setFormDirty:t,formName:pg.LED})},{id:pg.SERVICES,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>r.a.createElement(ji,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0,formName:pg.SERVICES})},{id:pg.NETWORK,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:pg.NETWORK})},{id:pg.MANAGE,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{led:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)({...a,...t},d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(({data:t=[e]})=>{Object.values(E).forEach(e=>{"function"==typeof e&&e(t[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});function Og({activeItem:e}){const t=[{Comp:gI,key:"Temperature"},{Comp:hI,key:"FanLevel"},{Comp:Bs,key:"Uptime"},{Comp:rl,key:"MemoryUsage"},{Comp:ks,key:"LoadAverage"}];return r.a.createElement(F.a,{flexDirection:"column"},t.map(({Comp:t,key:a})=>r.a.createElement(t,{key:a,activeItem:e})))}const Ig=Object(l.c)(Ee.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var gg=r.a.memo(({activeItem:e})=>{const t=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),t&&r.a.createElement(Ig,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(Og,{activeItem:e})}],multiOpen:!0,renderOnlyExpandedContent:!0}))});const hg=Object(l.c)("div")`
  margin-bottom: 12px;
`,Cg=["backup","delivering"];var Rg=({activeItem:e})=>{const t=Object(O.getRpsPortUtilization)(null==e?void 0:e.rps);return r.a.createElement(r.a.Fragment,null,t.map(e=>r.a.createElement("div",{key:e.voltage},Cg.map(t=>r.a.createElement("div",{key:t},e[t].ports.map(a=>r.a.createElement(hg,{key:a.id},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"body",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_UTILIZATION_BAR_HEADING_"+t.toUpperCase(),values:{voltage:e.voltage,mode:"delivering",portId:a.id}})),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:a.powerRequired,max:e[t].total}}))),r.a.createElement(Hd.a,{items:[{variant:"primary",value:a.powerRequired/e[t].total*100}]}))))))))};const vg=Object(l.c)(ye.g)`
  padding: 16px 32px;
`,fg=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Tg=({activeItem:e})=>{const t=Object(O.getRpsPortUtilizationActive)(null==e?void 0:e.rps);return r.a.createElement(vg,{flexDirection:"column"},r.a.createElement(V.a,{weight:"bold",size:"body",color:"primary"},r.a.createElement(M.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"})),r.a.createElement(fg,null),t&&r.a.createElement(Rg,{activeItem:e}))};const Dg=Object(l.c)(bn.a,{shouldForwardProp:e=>"color"!==e&&"isTableItem"!==e})`
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
`,yg=l.a`
  margin-left: 15px;
`,Pg=Object(l.c)("div")`
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
`;var Ag=({cellData:e,isTableItem:t=!1,tooltipPosition:a="bottomRight"})=>{const c=Object(n.k)(),{path:l}=Object(n.n)(),{site:i,page:E,id:s,panel:m}=Object(n.m)(),d=Object(o.useSelector)(O.selectDevicesData),{peer:_}=e,u=d.find(e=>e.mac===(null==_?void 0:_.mac)),p=Object(G.c)(u),b=Object(G.a)(u),I=Object(O.getRspOutletIcons)(e),g=Object(O.getRspOutletColor)(e);return r.a.createElement(Dg,{color:g,tooltipClassName:yg,onClick:t=>{var a,r;null===(a=null==t?void 0:t.preventDefault)||void 0===a||a.call(t),null===(r=null==t?void 0:t.stopPropagation)||void 0===r||r.call(t),c.push(Object(n.i)(l,{site:i,page:E,id:s,panel:m,subPanel:"outlets",subPanelId:e.port_idx}))},width:u?240:200,isTableItem:t,message:r.a.createElement(F.a,{flexDirection:"column",justifyContent:"space-between",width:"100%"},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_OUTLET"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},e.port_idx)),r.a.createElement(F.a,{justifyContent:"space-between",alignItems:"center"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_NAME"})),r.a.createElement(V.a,{size:"caption",color:"secondary",truncate:!0},null==e?void 0:e.name)),(null==e?void 0:e.port_mode)&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},Object($O.a)(e.port_mode))),(null==e?void 0:e.port_state)&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_STATE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+e.port_state.toUpperCase()}))),(null==e?void 0:e.up)&&O.RPS_VOLTAGES.map(t=>r.a.createElement("div",{key:t},r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:t}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:e[`power_${t}v_current`]}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:e[`power_${t}v_voltage`]}}))),r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:e[`power_${t}v_power`]}}))))),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER"}))),(p||(null==_?void 0:_.hostname))&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_NAME"})),r.a.createElement(Sg,{size:"caption",color:"secondary",truncate:!0},p||(null==_?void 0:_.hostname))),(null==u?void 0:u.mac)&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MAC"})),r.a.createElement(V.a,{size:"caption",color:"secondary"},null==u?void 0:u.mac)),b&&r.a.createElement(F.a,{justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODEL"})),r.a.createElement(Sg,{size:"caption",color:"secondary",truncate:!0},b)),O.RPS_VOLTAGES.map(e=>r.a.createElement(F.a,{key:e,justifyContent:"space-between"},r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER_POWER_REQUIRED",values:{voltage:e}})),r.a.createElement(V.a,{size:"caption",color:"secondary"},r.a.createElement(M.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:null==_?void 0:_[`power_required_${e}v`]}})))))),position:a,portal:!0},r.a.createElement(Pg,null,e.port_mode!==O.RpsPortMode.DISABLED&&r.a.createElement(yc,{icons:I})))};const jg=Object(l.c)(F.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,Ng=Object(l.c)(F.a)`
  &:not(:first-child) {
    margin-top: 8px;
  }
`,xg=Object(l.c)(w.W)`
  margin-right: 12px;
`,Lg=Object(l.c)("div")`
  width: 5px;
`;var Vg=({deviceData:e})=>{const{rps:{diagram:t,primaryPortGroupCount:a}}=Object(O.getDeviceSpecs)(e),n=t?Object(O.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(O.determineRowLayoutsFromOutletConfig)(a,e);return n&&0!==n.length?r.a.createElement(r.a.Fragment,null,n.map((t,a)=>r.a.createElement(Ng,{justifyContent:"center",width:"100%",key:"RpsOutletLayoutRow-"+(a+1)},t.map((t,n)=>{if(!t)return r.a.createElement(Lg,{key:`RpsOutletSpacer-${a+1}-${n+1}`});const c=`RpsOutlet-${a+1}-${n+1}`,l=Object(O.getActiveRpsOutletInfo)(e,t.outletNumber);return r.a.createElement(Ag,{cellData:l,key:c})})))):r.a.createElement(jg,null,r.a.createElement(xg,{isActive:!0}),r.a.createElement(M.c,{id:"DEVICE_DIAGRAM_MISSING"}))};const wg=Object(l.c)("div")`
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
`,Bg=[{id:"name",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})),renderCell:e=>r.a.createElement(V.a,{size:"body"},e.name)},{id:"outletStatus",label:r.a.createElement(V.a,{size:"body",color:"primary",weight:"bold"},r.a.createElement(M.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"})),renderCell:e=>{var t,a;const n="disabled"===e.port_mode?null===(t=null==e?void 0:e.port_mode)||void 0===t?void 0:t.toUpperCase():null===(a=null==e?void 0:e.port_state)||void 0===a?void 0:a.toUpperCase();return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{alignItems:"center"},r.a.createElement(Ag,{cellData:e,isTableItem:!0}),r.a.createElement(V.a,{size:"body"},r.a.createElement(M.c,{id:n?"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+n:"COMMON_WORD_INITIALIZING"}),!n&&r.a.createElement(V.a,{size:"body"},"..."))),r.a.createElement(Fg,{size:"small"}))}}];var zg=({deviceData:e,deviceData:{rps:t}})=>{const a=Object(n.k)(),{path:l}=Object(n.n)(),{site:i,page:o,id:E,panel:s}=Object(n.m)(),m=Object(c.useMemo)(()=>{var a;return null===(a=t.rps_port_table)||void 0===a?void 0:a.map(t=>{const a=Object(O.getActiveRpsOutletInfo)(e,t.port_idx);return{id:t.port_idx,...a}})},[t.rps_port_table,e]);return r.a.createElement(Ug,null,r.a.createElement(Te.a,{columns:Bg,rowHeight:35,items:m,disableColumnFilters:!0,hideCellOverflow:!1,onRowClick:e=>m.some(e=>e.port_state)&&a.push(Object(n.i)(l,{site:i,page:o,id:E,panel:s,subPanel:"outlets",subPanelId:e.id}))}))};const kg=Object(l.c)(F.a)`
  padding: 0 32px;
`;var Wg=Object(vt.compose)(qa(["general","outlets","screen","manage"]),M.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:c,intl:l})=>{const i=Object(o.useSelector)(Xa),E=Object(o.useSelector)(Ka),s=Object(o.useSelector)(Za),m=Object(O.isAdopted)(e),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=Object(Gn.i)(e),b=p?"lcmScreen":"screen";return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(Mg,{deviceData:e}),r.a.createElement(kg,{flexDirection:"column",flex:"1 1 85%"},r.a.createElement(Ee.a,{variant:"secondary",items:[{id:"general",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NAME"}),openByDefault:!0,renderContent:()=>r.a.createElement(li,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"outlets",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_OUTLETS"}),renderContent:()=>r.a.createElement(zg,{deviceData:e})},{id:b,label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>p?r.a.createElement(hi,{activeItem:e,setFormDirty:t,setFormInvalid:a}):r.a.createElement(Wi,{activeItem:e,setFormDirty:t})},{id:"network",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>r.a.createElement(Fi,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>r.a.createElement(wo,{activeItem:e,disableDebug:!0})}],multiOpen:!0,renderOnlyExpandedContent:!0})),r.a.createElement(yn,{isDirty:n,isInvalid:c,onFormSubmit:()=>{const e=Object.entries(i).reduce((e,[t,a])=>{if("function"==typeof a){const t=a();if("object"==typeof t&&Object.keys(t).length)return{...e,...t}}return e},{}),{lcm:t,...a}=e;u(Object(O.updateDeviceWithIdEndpoint)(a,d,_,{successToast:{icon:ra.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS"},failureToast:{icon:ra.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR"},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),Hg={[d.b.ISP_DETAILS]:{default:"overview",panels:{overview:{path:"/overview",title:"DASHBOARD_ISP_PROPERTY_OVERVIEW",icon:w.rb,component:fe},insights:{path:"/insights",title:"DASHBOARD_ISP_PROPERTY_INSIGHTS",icon:w.Rb,component:Ve}}},[d.b.WIFI_MAN]:{default:"tests",singlePanel:!0,panels:{tests:{path:"/tests",component:mt,subpanel:{path:"/:subPanel",component:It}}}},[d.b.UNIFI_DEVICE_CLIENT]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:zn},insights:{path:"/insights",title:"CLIENT_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Ya,subpanel:{path:"/:subPanel",component:Ua}},settings:{path:"/settings",title:"CLIENT_PROPERTY_HEADER_SETTINGS",icon:w.P,component:An}}},[d.a.CLIENT]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:sa},insights:{path:"/insights",title:"CLIENT_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Ya,subpanel:{path:"/:subPanel",component:Ua}},settings:{path:"/settings",title:"CLIENT_PROPERTY_HEADER_SETTINGS",icon:w.P,component:An}}},[d.a.UGW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gE},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:vE},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:vs,subpanel:{path:"/:subPanel/:subPanelId",component:({activeItem:e,params:t,...a})=>t.subPanelId===oe.ALL?r.a.createElement(Sr,Object.assign({activeItem:e,params:t},a)):r.a.createElement(As,Object.assign({activeItem:e,params:t},a))}}}},[d.a.USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:function({activeItem:e,...t}){const[a]=Object(c.useState)("SwitchAbout-"+Date.now()),n=Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e]),l=Object(o.useDispatch)(),i={style:al.a.overflow,styleName:"overflow",dependant:a};return Object(c.useEffect)(()=>(l(Object(tl.c)(i)),()=>l(Object(tl.b)(i))),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(zl,{device:e}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(hl,{activeItem:e}),r.a.createElement(kl,{variant:"secondary",items:[{id:"overview",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>r.a.createElement(ll,{switchDeviceData:e})},{id:"uplink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_UPLINK_WIRED"}),renderContent:()=>r.a.createElement(sl,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>r.a.createElement(el,Object.assign({activeItem:e},t))},{id:"clientsGuests",label:r.a.createElement(M.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>r.a.createElement(gl,Object.assign({activeItem:e},t))}],multiOpen:!0,renderOnlyExpandedContent:!0})))}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:ai},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:iE,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?r.a.createElement(Sr,Object.assign({params:e,activeItem:t},a)):r.a.createElement(ur,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UAP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Hm,subpanel:{path:"/:subPanel/:subPanelId",component:Hn}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:i_},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:H_}}},[d.a.UAP6MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:_g},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:i_},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:bg}}},[d.a.UDM]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:du},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Du},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Ru,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?r.a.createElement(Sr,Object.assign({params:e,activeItem:t},a)):r.a.createElement(ur,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UDMPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Pu},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:ju},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:xu,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel&&e.subPanelId===oe.WAN?r.a.createElement(Sr,Object.assign({params:e,activeItem:t},a)):r.a.createElement(ur,Object.assign({params:e,activeItem:t},a))}}}},[d.a.UAP_USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_ABOUT",icon:w.rb,component:Hm}}},[d.a.UBB]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:dp},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:vp},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Yp}}},[d.a.UBBXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gb},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:vp},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Sp}}},[d.a.USPP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:vb},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Pb},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:xb}}},[d.a.USPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Mb},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:kb},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:bO,subpanel:{path:"/:subPanel/:subPanelId",component:kr}}}},[d.a.USPPDUP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gO},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:fO},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:DO,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,...t})=>"ports"===e.subPanel?r.a.createElement(ur,Object.assign({params:e},t)):r.a.createElement(kr,Object.assign({params:e},t))}}}},[d.a.USAGGPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:TI},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:yI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:wI,subpanel:{path:"/:subPanel/:subPanelId",component:ur}}}},[d.a.LTE]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:qO},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:tI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:_I}}},[d.a.UXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gE},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:vE},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:II,subpanel:{path:"/:subPanel/:subPanelId",component:({activeItem:e,params:t,...a})=>"ports"===t.subPanel?t.subPanelId===oe.ALL?r.a.createElement(Sr,Object.assign({activeItem:e,params:t},a)):r.a.createElement(As,Object.assign({activeItem:e,params:t},a)):r.a.createElement(kr,Object.assign({params:t,activeItem:e},a))}}}},[d.a.UAP_IW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:Hm,subpanel:{path:"/:subPanel/:subPanelId",component:Hn}},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:FI},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:BI,subpanel:{path:"/:subPanel/:subPanelId",component:ur}}}},[d.a.USL8MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:GI},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:tg},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:rg,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,activeItem:t,...a})=>"ports"===e.subPanel?r.a.createElement(ur,Object.assign({params:e,activeItem:t},a)):r.a.createElement(kr,Object.assign({params:e,activeItem:t},a))}}}},[d.a.USPRPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:w.rb,component:gg},insights:{path:"/insights",title:"DEVICE_PROPERTY_HEADER_INSIGHTS",icon:w.Rb,component:Tg},settings:{path:"/settings",title:"DEVICE_PROPERTY_HEADER_SETTINGS",icon:w.P,component:Wg,subpanel:{path:"/:subPanel/:subPanelId",component:Zr}}}}},$g=a(2908);const Gg=Object(l.c)("div")`
  position: relative;
`;var Yg=({history:e,match:{params:t},tabs:a})=>{const{site:n,id:c,panel:l,page:i,subPage:E}=t,s=Object(o.useSelector)(Object(m.k)(n));return a&&a.length?r.a.createElement(Gg,null,r.a.createElement($g.a,{tabs:a,selectedTab:l,onSelectTab:t=>e.push(`${s}/${i}/${E?E+"/":""}properties/${c}/${t.id}`)})):null},Xg=a(2039);const Kg=Object(l.c)("div")`
  background-color: ${Oo.n.success};
  color: ${Oo.e};
  display: flex;
  flex: none;
  font-size: 11px;
  height: 50px;
  min-height: 50px;
  padding: 8px 32px;
  position: relative;
`,Zg=Object(l.c)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`,qg=Object(l.c)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`,Jg=Object(l.c)("div")`
  font-weight: bold;
  margin-bottom: 4px;
`;var Qg=({activeItem:e})=>{if("model"in e){if(Object(uc.Sd)(e)&&Object(uc.Wd)(e)){const t=Object(uc.ec)(e);return r.a.createElement(Kg,null,r.a.createElement(Zg,null,r.a.createElement(Xg.a,{width:18,height:18,strength:t,color:"currentColor",inactiveColor:Oo.d})),r.a.createElement(qg,null,r.a.createElement(Jg,null,r.a.createElement(M.c,{id:"DEVICE_ULTE_IS_ACTIVE_TITLE"})),r.a.createElement(M.c,{id:"DEVICE_ULTE_IS_ACTIVE_DETAILS"})))}}return null},eh=a(37),th=a(28);const ah="/api/s/{site}/cmd/stamgr",nh=Object(l.c)(ye.g)`
  padding: 24px 32px 0;
`,ch=Object(l.c)("div")`
  margin-bottom: 16px;
  button {
    font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
    font-weight: 700;
  }
`,rh=Object(l.c)(de.a)`
  color: ${({theme:e})=>e.motifPalette.error};
  &:hover,
  &:active {
    color: ${({theme:e})=>e.motifPalette.error};
  }
`;var lh=({activeItem:e})=>{var t,a;const n=Object(o.useDispatch)(),l=null!==(a=null===(t=Object(o.useSelector)($l.P))||void 0===t?void 0:t.offlineClientTimeframe)&&void 0!==a?a:24,i=Object(c.useCallback)(e=>{const{displayName:t,connected:a}=e,c="mac"in e&&e.mac;c&&n(Object(ec.a)({title:"CLIENT_ACTIONS_BLOCK_CONFIRM_TITLE",titleValues:{clientName:t},message:"CLIENT_ACTIONS_BLOCK_CONFIRM_MESSAGE",messageValues:{clientName:t},onConfirm:()=>{n(((e,t,a={})=>Object(Ia.p)(eh.a.BLOCK_STA,ah,{mac:e},{...Object(th.a)("CLIENT_ACTIONS_BLOCK_ERROR","CLIENT_ACTIONS_BLOCK_NOTICE",{clientName:t}),...a}))(c,t)).then(()=>n(Object(Ut.e)())).then(()=>{n(Object(I.deleteClientFromStore)(c,a?I.ClientModelType.ACTIVE:I.ClientModelType.OFFLINE)),n(Object(I.fetchBlockedClients)()),n(Object(I.fetchOfflineClients)({queryParams:{withinHours:l}}))})}}))},[n,l]),E=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(Object(ec.a)({title:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_TITLE",titleValues:{clientName:t},message:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_MESSAGE",messageValues:{clientName:t},onConfirm:()=>{n(((e,t,a={})=>Object(Ia.p)(eh.a.UNBLOCK_STA,ah,{mac:e},{...Object(th.a)("CLIENT_ACTIONS_UNBLOCK_ERROR","CLIENT_ACTIONS_UNBLOCK_NOTICE",{clientName:t}),...a}))(a,t)).then(()=>n(Object(Ut.e)())).then(()=>{n(Object(I.deleteClientFromStore)(a,I.ClientModelType.BLOCKED)),n(Object(I.fetchOfflineClients)({queryParams:{withinHours:l}})),n(Object(I.fetchBlockedClients)())})}}))},[n,l]),s=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eh.a.KICK_STA,ah,{mac:e},{...Object(th.a)("CLIENT_ACTIONS_RECONNECT_ERROR","CLIENT_ACTIONS_RECONNECT_NOTICE",{clientName:t}),...a}))(a,t))},[n]),m=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eh.a.AUTHORIZE_GUEST,ah,{mac:e},{...Object(th.a)("CLIENT_ACTIONS_AUTHORIZE_ERROR","CLIENT_ACTIONS_AUTHORIZE_NOTICE",{clientName:t}),...a}))(a,t))},[n]),d=Object(c.useCallback)(e=>{const{displayName:t}=e,a="mac"in e&&e.mac;n(((e,t,a={})=>Object(Ia.p)(eh.a.UNAUTHORIZE_GUEST,ah,{mac:e},{...Object(th.a)("CLIENT_ACTIONS_UNAUTHORIZE_ERROR","CLIENT_ACTIONS_UNAUTHORIZE_NOTICE",{clientName:t}),...a}))(a,t))},[n]),_=e.connected&&e.type===I.ClientType.WIRELESS,u=e.connected&&Object(I.getIsClientAuthorizable)(e),p="authorized"in e&&e.authorized,b=u&&!1===p,O=u&&p;return r.a.createElement(ye.b,null,r.a.createElement(nh,{flexDirection:"column"},e.blocked?r.a.createElement(ch,null,r.a.createElement(de.a,{name:"block-client",size:"small",variant:"inline",onClick:()=>E(e)},r.a.createElement(M.c,{id:"COMMON_ACTION_UNBLOCK"}))):r.a.createElement(ch,null,r.a.createElement(rh,{name:"block-client",size:"small",variant:"inline",onClick:()=>i(e)},r.a.createElement(M.c,{id:"COMMON_ACTION_BLOCK"}))),_&&r.a.createElement(ch,null,r.a.createElement(de.a,{name:"reconnect-client",size:"small",variant:"inline",onClick:()=>s(e)},r.a.createElement(M.c,{id:"CLIENT_ACTIONS_RECONNECT"}))),b&&r.a.createElement(ch,null,r.a.createElement(de.a,{name:"authorize-guest",size:"small",variant:"inline",onClick:()=>m(e)},r.a.createElement(M.c,{id:"CLIENT_ACTIONS_AUTHORIZE"}))),O&&r.a.createElement(ch,null,r.a.createElement(de.a,{name:"unauthorize-guest",size:"small",variant:"inline",onClick:()=>d(e)},r.a.createElement(M.c,{id:"CLIENT_ACTIONS_UNAUTHORIZE"})))))},ih=a(803),oh=a(228),Eh=a.n(oh),sh=a(804),mh=a(169);const dh=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var _h=()=>r.a.createElement(Pl,{level:"warning"},r.a.createElement(dh,{size:"caption"},r.a.createElement(M.c,{id:"DEVICE_ULTE_USG_REQUIRED"})));const uh=Object(l.c)(V.a)`
  line-height: 16px;
  margin-bottom: 10px;
`;var ph=()=>r.a.createElement(Pl,{level:"warning"},r.a.createElement(uh,{size:"caption"},r.a.createElement(M.b,{id:"DEVICE_UBB_ADOPT_WARNING_MESSAGE"})));const bh=Object(l.c)(de.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  padding: 0 ${({theme:e})=>e.space[3]}px;
  line-height: 14px;
  white-space: nowrap;
  max-width: 113px;
`,Oh=Object(l.c)("div")`
  margin-bottom: 32px;
`;var Ih=Object(M.f)(({device:e,showForNonAdoptableGateway:t,intl:a,buttonProps:{...l}={}})=>{const i=Object(o.useSelector)($l.D)("API_DEVICE_ADOPT"),E=Object(o.useSelector)(O.selectDevicesData),s=Object(o.useSelector)(mh.g),m=Object(o.useSelector)(Ji.a),d=Object(o.useDispatch)(),_=Object(n.k)(),u=Object(O.getDeviceState)(e),p=Object(O.isAdoptApplicable)(e),b=!!(null==e?void 0:e.adoptable_when_upgraded),I=Object(O.isGateway)(e)&&!Object(O.isGatewayAdoptable)(E,e),g=Object(O.isUlte)(e),h=g&&!Object(O.isUlteAdoptable)(E,e),C=g&&!(null==e?void 0:e.lte_imei),R=!e.adopted&&p&&i&&(t||!I||!h),[v,f]=Object(c.useState)(u===O.DeviceState.ADOPTING),T=g&&!s,D=Object(O.isUBB)(e)&&!Object(O.getIsUbbPeerAdoptable)(e),y=Object(x.i)("wifi/network/form"),P=v||T||D;Object(c.useEffect)(()=>{f(u===O.DeviceState.ADOPTING)},[u]);return!R||C?null:r.a.createElement(F.a,{flexDirection:"column"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_h,null),r.a.createElement(Oh,null)),D&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ph,null),r.a.createElement(Oh,null)),r.a.createElement(F.a,{justifyContent:"flex-end"},r.a.createElement(bh,Object.assign({variant:"primary",onClick:t=>{function n(){g?(d(Object(AO.d)(e.mac,Object(O.isUltePro)(e)?"LTE_PRO_ADOPTION":"LTE_ADOPTION")),f(!1)):function(){if(e.discovered_by===sh.a.PROTOCOL_V2_ID)f(!1);else if(d(Object(O.adoptDevice)(e)).then(f(!0)),Object(O.isPureAp)(e)){const t=Eh()();d(Object(na.c)({icon:r.a.createElement("div",null,r.a.createElement(U.b,{deviceType:null==e?void 0:e.type,deviceModel:null==e?void 0:e.model,publicImagePath:m,width:53,height:53})),title:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_TITLE",message:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_MESSAGE",primaryButton:{label:a.formatMessage({id:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_ACTION"}),onClick:()=>{_.push(y),d(Object(na.d)(t))}},translateTitle:!0},t))}}()}function c(){const{elite:t}=e;if(t&&t.replacement_for_mac){const e=E.find(e=>e.mac===t.replacement_for_mac);d(Object(ec.a)({title:"DEVICE_APPLY_CONFIGURATION_HEADER",titleValues:{deviceName:e.name},message:"DEVICE_APPLY_CONFIGURATION_MESSAGE",messageValues:{deviceName:e.name},size:"small",onConfirm:()=>{d(Object(Ut.e)())},onCancel:()=>{d(Object(Ut.e)()),n()}}))}else n()}t.preventDefault(),t.stopPropagation(),b?d(Object(ec.a)({title:"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_TITLE",titleValues:{deviceName:e.name},message:e.upgrade_to_firmware?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_VERSION_MESSAGE":"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_MESSAGE",messageValues:{fromVersion:e.version,toVersion:e.upgrade_to_firmware},size:"small",onConfirm:()=>{d(Object(Ut.e)()),c()},onCancel:()=>{d(Object(Ut.e)()),f(!1)}})):c()},disabled:P},l),r.a.createElement(M.c,{id:b?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE":"DEVICE_ACTIONS_ADOPT"}))))});const gh=Object(l.c)(ye.g)`
  padding: 0 32px;
`,hh=Object(l.c)(ye.g)`
  padding: 24px 32px 0;
`,Ch=Object(l.c)("div")`
  margin-bottom: 16px;
`;var Rh=({activeItem:e})=>Object(c.useMemo)(()=>Object(O.isAdopted)(e),[e])?r.a.createElement(hh,{flexDirection:"column"},r.a.createElement(Ch,null,r.a.createElement(ih.a,{device:e,size:"body"}))):r.a.createElement(gh,{justifyContent:"flex-end"},r.a.createElement(Ih,{device:e,showForNonAdoptableGateway:!0}));const vh=Object(l.c)(F.a,{shouldForwardProp:e=>"isDefaultPanel"!==e})`
  ${({isDefaultPanel:e})=>!e&&"height: 100%;"}
  overflow-x: hidden;
  overflow-y: scroll;
  overflow-y: overlay;
`,fh=Object(M.f)(e=>{const{match:{path:t,params:a},activeItem:{type:c,data:l},location:i,match:E,history:s,intl:m}=e,_=Object(o.useSelector)(re.m),u=c===d.b.DEVICE&&!Object(O.isAdopted)(l),{id:p,site:b,panel:I,page:g,subPanel:h,subPage:C}=a,R=ie(l,c),v=Hg[R],f=I===(null==v?void 0:v.default);if(!v)return null;const T=v.singlePanel?null:u?[{id:v.default,label:m.formatMessage({id:v.panels[v.default].title}),icon:v.panels[v.default].icon}]:Object.keys(v.panels).reduce((t,a)=>{const{disabled:n,title:c,icon:r}=v.panels[a];return n&&"function"==typeof n&&n({...e,isUdm:_})||t.push({id:a,label:m.formatMessage({id:c}),icon:r}),t},[]),D=Object(n.i)(t,{id:p,site:b,page:g,panel:v.default,subPage:C});return r.a.createElement(F.a,{height:"100%",flexDirection:"column"},!v.singlePanel&&!u&&r.a.createElement(Yg,{activeItem:l,tabs:T,history:s,match:E,location:i}),r.a.createElement(Qg,{activeItem:l}),r.a.createElement(vh,{isDefaultPanel:f,flexDirection:"column"},(()=>{const c=v.panels[I];if(!c)return r.a.createElement(n.c,{to:D});const{component:i,disabled:o}=c;if(!0===o||"function"==typeof o&&o({...e,isUdm:_})||u&&I!==v.default)return r.a.createElement(n.c,{to:D});if(h&&c.subpanel){const{component:e}=c.subpanel;return r.a.createElement(e,{activeItem:l,params:a,path:t,history:s})}return r.a.createElement(i,{activeItem:l,params:a,path:t,history:s,key:`${I}${h&&c.subpanel?"-subpanel":""}`})})()),f&&"clients"===g&&c===d.b.CLIENT&&r.a.createElement(lh,{activeItem:l}),f&&"devices"===g&&c===d.b.DEVICE&&r.a.createElement(Rh,{activeItem:l}))});var Th=r.a.memo(e=>e.match&&r.a.createElement(fh,Object.assign({},e)),(e,t)=>null===t.match);const Dh=l.a`
  & > div {
    overflow: hidden;
  }
`;var yh=({location:e,history:t,panelType:a})=>{var l;const u=Object(o.useSelector)(m.j),[p,b]=Object(c.useState)(!1),O=Object(o.useSelector)(v),I=Object(o.useDispatch)(),{path:f}=Object(n.n)(),{site:T,id:D}=Object(n.m)(),P=Object(c.useMemo)(()=>{if(D)switch(a){case d.b.DEVICE:return y(D);case d.b.UNIFI_DEVICE:return e=D,Object(h.b)()(Object(_.a)(C.selectIsUnifiDevicesPageSupportedController,y(e),j(e),(e,t,a)=>{if(e){if(t&&"mac"in t)return{panel:d.b.DEVICE,activeItemPayload:t};if(a&&"mac"in a)return{panel:d.b.UNIFI_DEVICE_CLIENT,activeItemPayload:a}}return null}),e=>e);case d.b.CLIENT:return A(D);case d.b.WIFI_MAN:return(e=>Object(h.b)()(Object(_.a)(R.c,t=>t.find(t=>t.id===e)),e=>e))(D);case d.b.ISP_DETAILS:return(e=>Object(h.b)()(Object(_.a)(g.selectIspInfoItems,t=>t.find(({networkgroup:t})=>t===e)),e=>e))(D);default:return null}var e;return null},[D,a])||function(){return null},S=Object(o.useSelector)(P);let V=S||{},w=a;a===d.b.UNIFI_DEVICE&&S&&"activeItemPayload"in S&&"panel"in S&&({activeItemPayload:V,panel:w}=S);const M={type:w,data:O||p?V:{}},F=()=>{b(!0),t.push(e.pathname.split("/properties")[0])};Object(s.a)(()=>O&&F(),[O]),Object(c.useEffect)(()=>{O&&!e.pathname.includes("/properties")&&I(Object(N.f)())},[e]),Object(c.useEffect)(()=>{O&&!M.type&&F()},[O,M]);const U=Object(c.useCallback)(()=>{b(!1)},[]);return Object(c.useEffect)(()=>{var c,r;w&&(null===(c=null==e?void 0:e.pathname)||void 0===c?void 0:c.includes("properties/"))&&((null===(r=Object.keys(V||{}))||void 0===r?void 0:r.length)?I(Object(N.g)({type:a,mac:D,id:D})):t.push(Object(n.i)(f,{site:T})))},[]),Object(x.f)([Object(L.c)("devices")],M.type&&(null===(l=Object.keys((null==M?void 0:M.data)||{}))||void 0===l?void 0:l.length)?r.a.createElement(i.a,{in:O,header:r.a.createElement(ce,{activeItem:M}),onClose:F,onEntered:U,onExited:U,className:Dh,style:{border:"none"}},(O||p)&&r.a.createElement(E.a,{path:u+"/:page/:subPage?/properties/:id/:panel?/:subPanel?/:subPanelId?"},e=>r.a.createElement(Th,Object.assign({activeItem:M},e)))):null)};t.a=Object(n.o)(yh)},2063:function(e,t,a){"use strict";a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return E})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return d}));var n=a(5),c=a(32),r=a(215),l=a(665);const i=Object(n.c)(c.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]} !important;
  line-height: 24px;
  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-label"]} !important;
    line-height: 16px;
  }
`,o=(Object(n.c)(c.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-xs"]} !important;
  @media ${l.b.VIEWPORT_S_DOWN}, ${l.b.VIEWPORT_XL_UP} {
    font-size: 16px !important;
  }
`,Object(n.c)(c.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;
  @media ${l.b.VIEWPORT_S_DOWN}, ${l.b.VIEWPORT_XL_UP} {
    font-size: ${({theme:e})=>e.fontSize["font-size-l2"]} !important;
  }
`,Object(n.c)(c.a)`
  font-size: 16px !important;
  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: 14px !important;
  }
`),E=Object(n.c)(c.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-header-xs"]} !important;
  line-height: 24px;
  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-body"]} !important;
    line-height: 18px !important;
  }
`,s=Object(n.c)(c.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-header-s"]} !important;
  line-height: 28px;
  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-body"]} !important;
    line-height: 24px;
  }
`,m=Object(n.c)(r.a)`
  font-size: 16px !important;
  font-weight: 700;
  letter-spacing: initial;
  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: 14px !important;
  }
`,d=Object(n.c)(r.a)`
  font-size: 14px !important;
  font-weight: 700;
  letter-spacing: initial;

  @media ${l.b.VIEWPORT_XL_DOWN} {
    font-size: 12px !important;
  }
`},2085:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(0),c=a.n(n),r=a(5),l=a(42);const i="#dbdce1",o="#232323",E=Object(r.c)("div")`
  ${({height:e,borderRadius:t=2})=>`height: ${e}px; border-radius: ${t}px; `}
  ${({width:e})=>void 0!==e?`width: ${Number.isNaN(Number(e))?e:e+"px"};`:""}
    ${({margin:e})=>void 0!==e?"margin: "+e:""}
  ${({marginTop:e})=>void 0!==e?`margin-top: ${Number.isNaN(Number(e))?e:e+"px"};`:""}
  ${({marginRight:e})=>void 0!==e?`margin-right: ${Number.isNaN(Number(e))?e:e+"px"};`:""}
  ${({marginBottom:e})=>void 0!==e?`margin-bottom: ${Number.isNaN(Number(e))?e:e+"px"};`:""}
  ${({marginLeft:e})=>void 0!==e?`margin-left: ${Number.isNaN(Number(e))?e:e+"px"};`:""}
  ${({aspectRatio:e})=>e&&"padding-top: "+(e=>{switch(e){case"4:1":return"25%";case"3:1":return"33.33%";case"16:9":return"56.25%";case"3:2":return"66.66%";case"4:3":return"75%;";default:return"0"}})(e)};
  background: ${({motif:e})=>"dark"===e?o:i};
`;var s=({aspectRatio:e,width:t,height:a,borderRadius:n,margin:r,marginTop:i,marginRight:o,marginBottom:s,marginLeft:m})=>c.a.createElement(E,{motif:Object(l.a)().motif,aspectRatio:e,width:t,height:a,borderRadius:n,margin:r,marginTop:i,marginRight:o,marginBottom:s,marginLeft:m})},2094:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(23),l=a(1),i=a(2),o=a(5),E=a(95),s=Object(o.a)("text-align:right;");function m(e){var t=e.start,a=e.end,n=e.intl,l=e.timezone,i="",o="";return Object(E.g)(t,l)&&Object(E.g)(a,l)?i=n.formatMessage({id:"COMMON_DATES_TODAY"}):Object(r.differenceInMonths)(a,t)>1?(i=Object(E.e)(t,l,"MMM Do, YYYY"),o=Object(E.e)(a,l,"MMM Do, YYYY")):Object(r.differenceInDays)(a,t)<1?i=Object(E.e)(t,l,"MMM Do, YYYY"):(i=Object(E.e)(t,l,"MMM Do"),o=Object(E.e)(a,l,"MMM Do")),c.a.createElement("div",{className:s},"".concat(i," ").concat(o&&" - ".concat(o)))}m.propTypes={start:l.PropTypes.instanceOf(Date).isRequired,end:l.PropTypes.instanceOf(Date).isRequired,timezone:l.PropTypes.string.isRequired,intl:i.g.isRequired},t.a=Object(i.f)(m)},2105:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return E})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"e",(function(){return _}));var n=a(5),c=a(643),r=a(32),l=a(665),i=a(71);const o=Object(n.c)(c.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 18px;
  margin-left: 8px;
`,E=Object(n.c)(r.a)`
  font-size: 16px !important;
  line-height: 24px;

  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: 14px !important;
  }

  @media ${l.b.VIEWPORT_L2_DOWN} {
    font-size: 12px !important;
  }
`,s=Object(n.c)(E)`
  max-width: calc(100% - 18px);
`,m=Object(n.c)(i.g)`
  width: 100%;
  margin-left: 68px;
  max-width: 540px;

  @media ${l.b.VIEWPORT_XXL_DOWN} {
    margin-left: 42px;
  }
  @media ${l.b.VIEWPORT_XL_DOWN} {
    min-height: 200px;
    margin-left: 18px;
  }
  @media ${l.b.VIEWPORT_L2_DOWN} {
    min-height: 160px;
    margin-left: 16px;
  }
  @media ${l.b.VIEWPORT_M_DOWN} {
    margin-left: 24px;
  }
  @media ${l.b.VIEWPORT_DASHBOARD_VERTICAL} {
    margin-top: 24px;
  }
`,d=Object(n.c)("div")`
  width: 100%;
  height: 100%;

  thead {
    tr {
      height: 32px;
    }
  }
  th {
    border: 0 !important;
    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;

      @media ${l.b.VIEWPORT_XXL_DOWN} {
        font-size: 10px !important;
        line-height: 16px;
      }
    }
  }
  thead {
    tr {
      height: 48px !important;
      margin-bottom: 18px;

      @media ${l.b.VIEWPORT_XXL_DOWN} {
        border: 0 !important;
        background-color: transparent !important;
        height: 34px !important;
        margin-bottom: 4px;
      }
    }
  }
  tbody {
    tr {
      border: 0 !important;
      background-color: transparent !important;
    }
  }
  tr {
    @media ${l.b.VIEWPORT_L2_DOWN} {
      min-height: 24px !important;
      height: 24px !important;
    }

    td {
      border-top-width: 0 !important;
      border-bottom-width: 0 !important;
    }
  }

  > div > div {
    svg {
      color: ${({theme:e})=>e.motifPalette.info};
    }
    span {
      font-size: 16px;
      @media ${l.b.VIEWPORT_XXL_DOWN} {
        font-size: 14px;
      }
    }
  }
`,_=Object(n.c)(r.a)`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;

  @media ${l.b.VIEWPORT_XXL_DOWN} {
    font-size: 18px;
    line-height: 24px;
  }

  @media ${l.b.VIEWPORT_XL_DOWN} {
    font-size: 14px;
  }
`;Object(n.c)(r.a)`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  @media ${l.b.VIEWPORT_XL_DOWN} {
    font-size: 10px;
  }
`},2141:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e,t,a=[]){const c=a=>{e&&e.current&&a.target!==e.current&&!e.current.contains(a.target)&&t(a)};Object(n.useEffect)(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),a)}},2154:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(15);var i=a(70);const o=Object(r.c)("img")`
  height: 22px;
  width: 22px;
  margin-right: 4px;
`,E=Object(r.c)(l.R)`
  margin: 0 9px 0 1px;
  color: #c2c4ce;
`;t.a=({name:e,iconFileName:t})=>{const[a,r]=Object(n.useState)(null),l=Object(n.useCallback)(()=>"this.style.display='none'",[]),s=Object(i.e)();return Object(n.useEffect)(()=>{const a=new Image,n=t&&encodeURI("https://static.ubnt.com/dpi/"+t)||null;s.current&&r(c.a.createElement(E,{width:18,height:18})),a.onload=()=>s.current&&r(c.a.createElement(o,{src:n,alt:"Application "+e,onError:l})),a.onerror=()=>r(c.a.createElement(E,{width:18,height:18})),a.src=n},[e,t,l,s]),a}},2169:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o}));var n=a(97),c=a(43);const r=e=>Object(c.k)(Object(n.a)(e))(e),l=(e,t,a={})=>(n,c)=>e.push(`${r(c())}/settings/internet/wan/form/${t}`,a),i=e=>(t,a)=>e.push(r(a())+"/statistics/traffic/topapplications"),o=e=>(t,a)=>e.push(r(a())+"/settings/system")},2173:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(15),i=a(45),o=a(32),E=a(255),s=a(71),m=a(523);const d=Object(r.c)(s.g,{shouldForwardProp:e=>!["leftMargin","topMargin","bottomMargin","withColoredText"].includes(e)})`
  margin: ${({leftMargin:e,topMargin:t,bottomMargin:a})=>`${null!=t?t:9}px 0px ${null!=a?a:9}px ${null!=e?e:18}px`};
  white-space: nowrap;
`,_=Object(r.c)(l.X)`
  color: ${i.a["blue-3"]};
`,u=Object(r.c)(l.Y)`
  color: ${i.a["purple-1"]};
`,p=Object(r.c)(o.a)`
  margin-left: 3px;
`,b=Object(r.c)(o.a,{shouldForwardProp:e=>"withColoredText"!==e})`
  color: ${({withColoredText:e})=>e&&i.a["blue-3"]};
`,O=Object(r.c)(o.a,{shouldForwardProp:e=>"withColoredText"!==e})`
  color: ${({withColoredText:e})=>e&&i.a["purple-1"]};
`;t.a=({up:e,down:t,upTotal:a,downTotal:r,topMargin:l,bottomMargin:i,leftMargin:o,textSize:I="caption",withColoredText:g,...h})=>{const C=Object(n.useMemo)(()=>a?Object(m.a)(a):void 0,[a]),R=Object(n.useMemo)(()=>r?Object(m.a)(r):void 0,[r]),v=Object(n.useMemo)(()=>{const t=Object(E.d)(e);return`${t.value<100?t.value.toFixed(1):t.value.toFixed()} ${C?"":""+t.unit}`},[C,e]),f=Object(n.useMemo)(()=>{const e=Object(E.d)(t);return`${e.value<100?e.value.toFixed(1):e.value.toFixed()} ${R?"":""+e.unit}`},[t,R]);return c.a.createElement(s.g,null,c.a.createElement(d,{alignItems:"center",leftMargin:o,topMargin:l,bottomMargin:i},c.a.createElement(_,null),c.a.createElement(b,Object.assign({size:I,weight:"bold",withColoredText:g},h),f),R&&c.a.createElement(p,{size:I,weight:"bold",color:"tertiary"}," / "+R)),c.a.createElement(d,{alignItems:"center",leftMargin:o,topMargin:l,bottomMargin:i},c.a.createElement(u,null),c.a.createElement(O,Object.assign({size:I,weight:"bold",withColoredText:g},h),v),C&&c.a.createElement(p,{size:I,weight:"bold",color:"tertiary"}," / "+C)))}},2212:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5);const l=Object(r.c)("div")`
  background: ${({theme:e})=>e.motifPalette.info};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
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
`;t.a=()=>c.a.createElement(l,null)},2484:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(2),l=a(5),i=a(1791),o=a(45),E=a(2861),s=a(445),m=a(32),d=a(647),_=a(1851),u=a(15),p=a(2761),b=a.n(p),O=a(133),I=a(71),g=a(665),h=a(2105);const C=Object(l.c)(i.a)`
  height: 6px;
  border-radius: 2px;
  overflow: hidden;

  > div {
    background: linear-gradient(270deg, ${o.a["blue-light-7"]} 0%, ${o.a["blue-3"]} 100%) !important;
  }

  @media ${g.b.VIEWPORT_XXL_DOWN} {
    height: 4px;
  }
  @media ${g.b.VIEWPORT_XL_DOWN} {
    height: 3px;
  }
`,R=Object(l.c)(E.a)`
  font-size: 14px !important;
  line-height: 1 !important;

  @media ${g.b.VIEWPORT_S_DOWN}, ${g.b.VIEWPORT_XL_UP} {
    font-size: 16px !important;
  }
`,v=Object(l.c)(s.a)`
  width: 100% !important;
`,f=Object(l.c)(I.g)`
  color: ${({theme:e})=>e.motifPalette.text01};
  min-width: 120px;
`,T=Object(l.c)(m.a)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,D=Object(l.c)(b.a)`
  display: inline-block;
  width: 14px;
  height: auto;
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.neutral11};
`,y=Object(l.c)(u.pb)`
  margin-right: 8px;
  margin-left: -1px;
  color: ${({theme:e})=>e.motifPalette.neutral11};
`,P=c.a.memo(({tableItems:e})=>{const t=Object(n.useCallback)(()=>c.a.createElement(r.c,{id:"DASHBOARD_MODULE_CLIENTS_TABLE_EMPTY"}),[]),a=Object(n.useCallback)(({type:e,color:t,os_class:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(h.b,{customColor:t}),a>1?c.a.createElement(D,{src:`${O.e}/${a}.svg`}):c.a.createElement(y,{variant:"fill",height:17,width:17}),c.a.createElement(h.a,{truncate:!0},e)),[]),l=Object(n.useCallback)(({activityPercent:e,rx_bytes:t,tx_bytes:a})=>c.a.createElement(v,{message:c.a.createElement(I.g,{flexDirection:"column"},c.a.createElement(f,{justifyContent:"space-between"},c.a.createElement("div",null,c.a.createElement(T,null,c.a.createElement(r.c,{id:"COMMON_WORD_DOWN"})),c.a.createElement(u.X,{width:"7",height:"10"})),c.a.createElement(d.a,{type:"bytes",input:t})),c.a.createElement(f,{justifyContent:"space-between"},c.a.createElement("div",null,c.a.createElement(T,null,c.a.createElement(r.c,{id:"COMMON_WORD_UP"})),c.a.createElement(u.Y,{width:"7",height:"10"})),c.a.createElement(d.a,{type:"bytes",input:a}))),portal:!0},c.a.createElement(C,{value:e,variant:"primary"})),[]),i=Object(n.useCallback)(({experience:e})=>c.a.createElement(R,{value:Math.round(e),percent:!0}),[]),o=[{id:"type",label:c.a.createElement(r.c,{id:"DASHBOARD_MODULE_CLIENTS_TABLE_TYPE"}),minWidth:100,growthFactor:30,renderCell:a},{id:"activityInfo",growthFactor:40,label:c.a.createElement(r.c,{id:"DASHBOARD_MODULE_CLIENTS_TABLE_ACTIVITY"}),renderCell:l},{id:"experienceInfo",minWidth:55,growthFactor:20,label:c.a.createElement(r.c,{id:"DASHBOARD_MODULE_CLIENTS_TABLE_EXPERIENCE"}),renderCell:i},{id:"value",minWidth:40,growthFactor:10,label:c.a.createElement(r.c,{id:"DASHBOARD_MODULE_CLIENTS_TABLE_TOTAL"}),renderCell:({value:e})=>c.a.createElement(h.d,null,e)}],E=e.map(({id:e,...t})=>({id:""+e,...t}));return c.a.createElement(h.c,null,c.a.createElement(_.a,{disableColumnFilters:!0,width:"100%",columns:o,items:E,renderPlaceholder:t}))});t.a=P},2517:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(15),i=a(665),o=a(2141),E=a(527),s=a(71),m=a(32);const d=Object(r.c)(s.g)`
  min-height: 55px;
  ${({onClick:e})=>e&&"\n    &:hover {\n      cursor: pointer;\n    }\n  "}
`,_=Object(r.c)(s.g)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xs"]};
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]};
  overflow: hidden;
`;var u=({children:e,device:t,displaySubtitleForSelected:a,displayInfoForSelected:n,ignoreResponsiveText:r,...l})=>{const{image:i,title:o,subtitle:E,info:u}=t;let p;n&&u?p=u:a&&E&&(p=E);const I=r?m.a:O,g=r?m.a:b;return c.a.createElement(d,Object.assign({alignItems:"center"},l),c.a.createElement(s.g,{alignItems:"center",justifyContent:"center"},i),c.a.createElement(_,{flexDirection:"column",flex:1},c.a.createElement(I,{color:"primary",weight:"bold",truncate:!0,size:"caption"},o),p&&c.a.createElement(g,{color:"tertiary",truncate:!0,size:"caption"},p)),e)};const p=Object(r.c)(s.g)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-l"]};
  min-height: 55px;
  &:hover {
    background: ${({theme:e})=>e.colors.dashboardHoverBackground};
    cursor: pointer;
  }
`,b=Object(r.c)(m.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;
  @media ${i.b.VIEWPORT_S_DOWN}, ${i.b.VIEWPORT_XL_UP} {
    font-size: 16px !important;
  }
`,O=Object(r.c)(m.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;
  @media ${i.b.VIEWPORT_S_DOWN}, ${i.b.VIEWPORT_XL_UP} {
    font-size: 18px !important;
  }
`;var I=({device:e,selected:t,onClick:a,ignoreResponsiveText:n,...r})=>{const{image:l,title:i,subtitle:o,info:E}=e,d=n?m.a:O,u=n?m.a:b;return c.a.createElement(p,Object.assign({alignItems:"center",onClick:a},r),c.a.createElement(s.g,{alignItems:"center",justifyContent:"center"},l),c.a.createElement(_,{flexDirection:"column",flex:1},c.a.createElement(d,{color:t?"primary":"secondary",weight:"bold",truncate:!0,size:"caption"},i),!!o&&c.a.createElement(u,{color:"tertiary",truncate:!0,size:"caption"},o)),!!E&&E)};const g=Object(r.c)("div")`
  position: relative;
  width: 100%;
  user-select: none;

  @media ${i.b.VIEWPORT_DASHBOARD_HORIZONTAL} and ${i.b.VIEWPORT_M_DOWN} {
    overflow: visible;
  }
`,h=Object(r.c)(s.g)`
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
`,C=Object(r.c)(l.f)`
  margin-left: ${({theme:e})=>e.spacing["spacing-l"]};
  color: ${({theme:e})=>e.motifPalette.icon01} !important;
  transform: rotate(${({isActive:e})=>e?90:-90}deg);
  transition: transform 200ms cubic-bezier(0.4, 0, 0, 1.3);
`;t.a=({devices:e,selectedDevice:t,setSelectedDevice:a,displaySubtitleForSelected:r,displayInfoForSelected:l,ignoreResponsiveText:i})=>{const[s,m]=Object(n.useState)(!1),d=Object(n.useRef)(),_=e.find(({id:e})=>e===t)||e[0];return Object(E.a)(()=>m(!1)),Object(o.a)(d,()=>m(!1)),c.a.createElement(g,{innerRef:d},c.a.createElement(u,{device:_,onClick:()=>m(!s),displaySubtitleForSelected:r,displayInfoForSelected:l,ignoreResponsiveText:i},c.a.createElement(C,{width:"12",height:"12",isActive:s})),s&&c.a.createElement(h,{flexDirection:"column"},e.map(e=>c.a.createElement(I,{key:e.id,selected:e.id===t,onClick:()=>{a(e.id),m(!s)},device:e,ignoreResponsiveText:i}))))}},2578:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a(665),r=a(70),l=a(479);const i=e=>{switch(!0){case!e:return null;case e>c.a.VIEWPORT_XXL_DOWN:return l.g;case e>c.a.VIEWPORT_XL_DOWN:return l.e;case e>c.a.VIEWPORT_L2_DOWN:return l.d;case e>c.a.VIEWPORT_M_DOWN:return l.c;case e>c.a.VIEWPORT_S_DOWN:return l.d;default:return l.f}},o=()=>{var e,t;const[a,c]=Object(n.useState)(i(null===(t=null===(e=document.body)||void 0===e?void 0:e.getBoundingClientRect())||void 0===t?void 0:t.width)),l=Object(r.p)({current:document.body});return Object(n.useEffect)(()=>{const e=i(l);e&&c(e)},[l]),a}},2579:function(e,t,a){"use strict";var n=a(5),c=a(2934),r=a(665);t.a=Object(n.c)(c.a)`
  justify-content: space-between;
  min-height: 270px;

  @media ${r.b.VIEWPORT_XL_UP} {
    min-height: 344px;
  }
`},2580:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));const n=[{activity:7,activityPercent:80,color:"#006fff",experience:90,id:15,os_class:15,rx_bytes:52542977751,tx_bytes:32459332908,type:"Apple iOS",value:95},{activity:205,activityPercent:40,color:"#57a0ff",experience:97,id:29,os_class:29,rx_bytes:7582614554,tx_bytes:2673839659,type:"Mac OS X",value:14},{activity:0,activityPercent:55,color:"#003c9e",experience:83,id:5,os_class:5,rx_bytes:424505,tx_bytes:499984,type:"Android",value:6},{activity:7,activityPercent:55,color:"#0056c7",experience:84,id:1,os_class:1,rx_bytes:52542977751,tx_bytes:32459332908,type:"Others",value:4}],c=[{name:"DPI_CATEGORIES_STREAMING_MEDIA",color:"#003C9E",cat:4,traffic:7e7,clientsCount:6},{name:"DPI_CATEGORIES_NETWORK_PROTOCOLS",color:"#006FFF",cat:18,traffic:405e5,clientsCount:3},{name:"DPI_CATEGORIES_WEB",color:"#46C7FD",cat:13,traffic:405e5,clientsCount:2},{name:"DPI_CATEGORIES_SOCIAL_NETWORK",color:"#39CC64",cat:24,traffic:403e5,clientsCount:1},{name:"DPI_CATEGORIES_BYPASS_PROXIES_AND_TUNNELS",color:"#BFE041",cat:11,traffic:401e5,clientsCount:7},{color:"#EDEDF0",cat:6,traffic:4e7},{color:"#EDEDF0",cat:7,traffic:4e7},{color:"#EDEDF0",cat:8,traffic:2e7},{color:"#EDEDF0",cat:9,traffic:78e5},{color:"#EDEDF0",cat:19,traffic:78e5}]},2581:function(e,t){},2613:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(8),l=a(2),i=a(5),o=a(36),E=a(1848),s=a(1852),m=a(1924),d=a(665),_=a(129),u=a(1124),p=a(71),b=a(2085),O=a(802),I=a(2169),g=a(479),h=a(2484),C=a(2105);const R=()=>c.a.createElement(C.e,{color:"primary"},c.a.createElement(l.c,{id:"DASHBOARD_MODULE_CLIENTS_HEADER"})),v=()=>c.a.createElement(p.g,{flexDirection:"column"},c.a.createElement(b.a,{width:92,height:16,marginBottom:8}));var f=({isLoaded:e})=>e?c.a.createElement(R,null):c.a.createElement(v,null),T=a(2579),D=a(2063),y=a(2580),P=a(42),S=a(2911),A=a(2578);const j=Object(i.c)(p.g,{shouldForwardProp:e=>"loadingBackgroundColor"!==e&&"border"!==e})`
  border: ${({border:e})=>e}px solid
    ${({theme:e,loadingBackgroundColor:t})=>t||e.motifPalette.neutral02};
  border-radius: 100%;

  circle {
    stroke: ${({loadingBackgroundColor:e})=>e};
  }
  & * > text:first-of-type {
    font-size: 28px;

    @media ${d.b.VIEWPORT_XXL_DOWN} {
      font-size: 20px;
    }
    @media ${d.b.VIEWPORT_XL_DOWN} {
      font-size: 18px;
    }
    @media ${d.b.VIEWPORT_S_DOWN} {
      font-size: 20px;
    }
  }
  & * > text:last-of-type {
    font-size: 20px;

    @media ${d.b.VIEWPORT_XXL_DOWN} {
      font-size: 14px;
    }
    @media ${d.b.VIEWPORT_XL_DOWN} {
      font-size: 10px;
    }
  }
  .titleClassName {
    transform: translateY(18px);
    @media ${d.b.VIEWPORT_XXL_DOWN} {
      transform: translateY(12px);
    }
    @media ${d.b.VIEWPORT_XL_DOWN} {
      transform: translateY(10px);
    }
  }
  .descriptionClassName {
    font-weight: bold;
    transform: translateY(-38px);
    @media ${d.b.VIEWPORT_XXL_DOWN} {
      transform: translateY(-34px);
    }
    @media ${d.b.VIEWPORT_XL_DOWN} {
      transform: translateY(-31px);
    }
  }
`;var N=Object(l.f)(({isLoaded:e,clients:t,intl:a,placeholderActiveClients:n})=>{const r=Object(A.a)(),{motif:l}=Object(P.a)(),i=!e&&("dark"===l?b.b:b.c);return c.a.createElement(j,{justifyContent:"center",alignItems:"center",alignSelf:"center",loadingBackgroundColor:i,border:r.border},c.a.createElement(S.a,{items:t,title:e&&""+(n||(null==t?void 0:t.reduce((e,t)=>e+(null==t?void 0:t.value)||0,0))),description:e&&a.formatMessage({id:"DASHBOARD_MODULE_CLIENTS_TOTAL_CLIENTS"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",spacer:.4,thickness:r.thickness,size:r.diameter}))});const x=Object(i.c)(T.a)`
  padding-left: 48px;
  box-shadow: ${({theme:e})=>`0 1px 0 0 ${e.colors.dashboardBorder} inset, 0 1px 0 0 ${e.colors.dashboardBorder}, 1px 0 0 0 ${e.colors.dashboardBorder} inset`};
  div[class*='tabsContainer'] {
    overflow: initial;
    margin-right: -6px;
  }
  div[class*='leftContainer'] {
    justify-content: flex-start;
  }
  div[class*='rightContainer'] {
    flex-direction: row;
    @media ${d.b.VIEWPORT_DASHBOARD_VERTICAL} {
      flex-direction: column;
    }
  }

  @media ${d.b.VIEWPORT_XXL_DOWN} {
    padding-left: 32px;
  }
  @media ${d.b.VIEWPORT_L2_DOWN} {
    padding-left: 0;
    padding-right: 0;
    box-shadow: ${({theme:e})=>`0 1px 0 0 ${e.colors.dashboardBorder} inset, 0 1px 0 0 ${e.colors.dashboardBorder}`};
  }
  @media ${d.b.VIEWPORT_L_UP} {
    padding-right: 0 !important;
  }
`,L=Object(i.c)(p.g)`
  margin-left: 84px;

  @media ${d.b.VIEWPORT_XXL_DOWN} {
    margin-left: 0;
  }
  @media ${d.b.VIEWPORT_XL_DOWN} {
    margin-bottom: 16px;
  }

  @media ${d.b.VIEWPORT_DASHBOARD_VERTICAL} {
    flex-direction: column;
    align-items: center;
  }
`,V=Object(i.c)(D.e)`
  margin-left: 20px;
`,w=({history:e,isLoaded:t})=>{const[a,i]=Object(n.useState)(g.b[0].id),[o,d]=Object(n.useState)([]),b=Object(r.useDispatch)(),R=Object(r.useSelector)(_.m),{groups:v}=Object(r.useSelector)(O.selectAggregatedDashboardClientFingerprints),T=Object(n.useCallback)(Object(u.a)(),[]),D=Object(n.useCallback)(e=>i(e&&e.id),[]),y=v&&v[a]||[],P=Object(E.a)(y,"activity"),S=Object(n.useCallback)(({os_class:e,computed_engine:t=0})=>{const a=R.get(t);return a&&a.osClasses.get(e)||c.a.createElement(l.c,{id:"DASHBOARD_MODULE_CLIENTS_OS_UNKNOWN"})},[R]);Object(n.useEffect)(()=>{const e=Object(_.h)();if(y.length){Object(s.a)(y.map(({computed_engine:t}={})=>t||e.id)).forEach(e=>{o.includes(e)||void 0!==e&&(b(Object(_.f)(e)),d([...o,e]))})}},[b,o,y]);const A=Object(n.useMemo)(()=>{const e=Object(m.a)(y,({os_class:e,total:t})=>e<=1?e-2:t).reverse(),t=e.findIndex(({os_class:e},t)=>5===t||e<=1),a=-1!==t?e.splice(5===t?t-1:t):[],n=a.reduce((e,{activity:t,total:a,satisfaction:n,rx_bytes:c,tx_bytes:r})=>({total:e.total+a,activity:e.activity+t,satisfaction:e.satisfaction+n,rx_bytes:e.rx_bytes+(c||0),tx_bytes:e.tx_bytes+(r||0)}),{total:0,activity:0,satisfaction:0,rx_bytes:0,tx_bytes:0}),c={...n,satisfaction:a.length>0?n.satisfaction/a.length:0,os_class:1};return[...e,c].filter(({total:e})=>0!==e).map(({activity:e,os_class:t,computed_engine:a,satisfaction:n,total:c,rx_bytes:r,tx_bytes:l})=>({activity:e,activityPercent:Math.min(Math.round(e/P*100),100),color:T(t.toString()),experience:Math.max(Math.min(n,100),60),id:t,value:c,type:S({os_class:t,computed_engine:a}),rx_bytes:r||0,tx_bytes:l||0,os_class:t}))},[y,P,T,S]);return c.a.createElement(x,{height:"auto",leftContent:c.a.createElement(f,{isLoaded:t}),action:c.a.createElement(V,{variant:"inline",onClick:()=>b(Object(I.b)(e))},c.a.createElement(l.c,{id:"DASHBOARD_MODULE_CLIENTS_VIEW_TRAFFIC_ACTION"})),options:g.b,onSelectOption:D},c.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"center"},c.a.createElement(L,{flex:"1",alignItems:"flex-start",justifyContent:"center"},c.a.createElement(N,{isLoaded:t,clients:A}),c.a.createElement(C.f,{justifyContent:"flex-start",flex:"1"},c.a.createElement(h.a,{tableItems:A})))))},M=({isLoaded:e,placeholder:t})=>{const a=e&&t;return c.a.createElement(x,{height:"auto",leftContent:c.a.createElement(f,{isLoaded:a}),action:a?c.a.createElement(V,{variant:"inline"},c.a.createElement(l.c,{id:"DASHBOARD_MODULE_CLIENTS_VIEW_TRAFFIC_ACTION"})):c.a.createElement(p.g,{flexDirection:"column",alignItems:"flex-end"},c.a.createElement(p.g,{marginBottom:8},c.a.createElement(b.a,{width:24,height:16,marginRight:8}),c.a.createElement(b.a,{width:24,height:16,marginRight:8}),c.a.createElement(b.a,{width:24,height:16,marginRight:8}),c.a.createElement(b.a,{width:24,height:16,marginRight:8}),c.a.createElement(b.a,{width:68,height:16}))),options:a&&g.b},c.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"center"},c.a.createElement(L,{flex:"1",alignItems:e?"flex-start":"center",justifyContent:"center"},c.a.createElement(N,{isLoaded:e,placeholderActiveClients:119,clients:a?y.a:[]}),c.a.createElement(C.f,{flexDirection:"column",flex:"1",justifyContent:"center"},a?c.a.createElement(h.a,{tableItems:y.a}):c.a.createElement(p.g,{marginLeft:8,flexDirection:"column"},c.a.createElement(p.g,{alignItems:"center",justifyContent:"flex-start",marginBottom:12},c.a.createElement(b.a,{width:12,height:12,marginRight:4}),c.a.createElement(b.a,{width:24,height:12,marginRight:38}),c.a.createElement(b.a,{width:100,height:4,marginRight:14}),c.a.createElement(b.a,{width:50,height:12,marginRight:14}),c.a.createElement(b.a,{width:24,height:12})),c.a.createElement(p.g,{alignItems:"center",justifyContent:"flex-start",marginBottom:12},c.a.createElement(b.a,{width:12,height:12,marginRight:4}),c.a.createElement(b.a,{width:44,height:12,marginRight:18}),c.a.createElement(b.a,{width:100,height:4,marginRight:14}),c.a.createElement(b.a,{width:50,height:12,marginRight:14}),c.a.createElement(b.a,{width:24,height:12})),c.a.createElement(p.g,{alignItems:"center",justifyContent:"flex-start",marginBottom:12},c.a.createElement(b.a,{width:12,height:12,marginRight:4}),c.a.createElement(b.a,{width:34,height:12,marginRight:28}),c.a.createElement(b.a,{width:100,height:4,marginRight:14}),c.a.createElement(b.a,{width:50,height:12,marginRight:14}),c.a.createElement(b.a,{width:24,height:12})),c.a.createElement(p.g,{alignItems:"center",justifyContent:"flex-start"},c.a.createElement(b.a,{width:12,height:12,marginRight:4}),c.a.createElement(b.a,{width:54,height:12,marginRight:8}),c.a.createElement(b.a,{width:100,height:4,marginRight:14}),c.a.createElement(b.a,{width:50,height:12,marginRight:14}),c.a.createElement(b.a,{width:24,height:12})))))))};t.a=Object(o.o)(e=>e.isLoaded&&!e.placeholder?c.a.createElement(w,Object.assign({},e)):c.a.createElement(M,{isLoaded:e.isLoaded,placeholder:e.placeholder}))},2760:function(e,t,a){"use strict";var n=a(2613);a.d(t,"ClientsModule",(function(){return n.a}));a(2484),a(2581)},2763:function(e,t,a){e.exports=a.p+"../images/23c217576c4667646750ce2df309cb44.png"},2764:function(e,t,a){e.exports=a.p+"../images/610c9f3f00b8703a3eb688bc0cc4dfb9.png"},2765:function(e,t,a){e.exports=a.p+"../images/3b62e314ad3d3fd9f6b6075c05c8609d.png"},2766:function(e,t,a){e.exports=a.p+"../images/4a7ce5c28cb645a95b77daa21a59bd3f.png"},2885:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a(36),i=a(8),o=a(48),E=a(42),s=a(2917),m=a(452),d=a(485),_=a(417),u=a(169),p=a(3),b=a(802),O=a(153),I=a(178),g=a(376),h=a(21),C=a(670),R=a(6);const v="\nlinear-gradient(\n  90deg,\n  rgba(255, 255, 255, 0) 0%,\n  rgba(255, 255, 255, 0.7) 40%,\n  rgba(255, 255, 255, 0.7) 60%,\n  rgba(255, 255, 255, 0) 100%\n);",f="\nlinear-gradient(\n  90deg,\n  rgba(35, 35, 35, 0) 0%,\n  rgba(35, 35, 35, 0.8) 40%,\n  rgba(35, 35, 35, 0.8) 60%,\n  rgba(35, 35, 35, 0) 100%\n);";var T=Object(r.c)(h.a)`
  height: 100%;
  ${({isLoaded:e,motif:t})=>!e&&`\n    position: absolute;\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n\n    &:before {\n      content: '';\n      position: absolute;\n      top: 1px;\n      left: 1px;\n      width: 100%;\n      height: 100%;\n      transform: translateX(-100%);\n      z-index: 2;\n      background: ${"dark"===t?f:v}\n        \n      animation-name: animation;\n      animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-delay: 1.5s;\n      animation-timing-function: linear;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      top: 1px;\n      left: 1px;\n      width: 100%;\n      height: 100%;\n      transform: translateX(-100%);\n      background: ${"dark"===t?f:v}\n      animation-name: animation;\n      animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }`};
  @keyframes animation {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translatex(100%);
    }
  }
`,D=a(2050),y=a(481),P=a(365),S=a(286),A=a(781),j=a(70),N=a(312),x=a(2),L=a(2919),V=a(2937),w=a(2903),M=a(2902),F=a(215),U=a(15),B=a(46),z=a(226),k=a(665),W=a(83),H=a(373),$=a(71),G=a(82),Y=a(2085),X=a(2001),K=a(675),Z=a(454),q=a(2063);const J=Object(r.c)($.g)`
  border-top: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
  padding: 24px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding: 16px 24px;
  }
`;var Q=a(2921),ee=a(223),te=a(1118),ae=a(32),ne=a(2924),ce=a(2859),re=a(731);const le=Object(r.c)("div")`
  white-space: nowrap;
`,ie=Object(r.c)(ae.a)`
  line-height: 16px !important;
`,oe=Object(r.c)(ie)`
  margin-right: ${({theme:e})=>e.spacing["spacing-l"]};
`,Ee=Object(r.c)(ne.a)`
  margin: 18px 0 0 !important;
  box-sizing: content-box;
  height: 12px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    height: 8px;
    margin: 12px 0 0 !important;
  }
  @media ${k.b.VIEWPORT_XL_DOWN} {
    margin: 8px 0 0 !important;
  }

  canvas {
    height: 12px !important;
    border: 1px solid ${({theme:e})=>e.motifPalette.ui04} !important;
    background: ${({theme:e})=>e.motifPalette.ui01} !important;
    border-radius: 6px !important;
    @media ${k.b.VIEWPORT_XXL_DOWN} {
      height: 8px !important;
    }
  }
`,se=r.a`
  height: 8px !important;
`;var me=c.a.memo(()=>{const e=Object(i.useSelector)(b.selectAggregatedDashboardSystemUtilizations),t=Object(n.useMemo)(()=>{const t=Object(re.a)().domain([0,Object(ce.a)(e,"seconds_spent").seconds_spent]).range([51,255]).clamp(!0);return e.map(e=>({duration:e.seconds_spent,value:t(e.seconds_spent)*(e.seconds_spent?1:0),usage:e.system_usage_percentage,width:1}))},[e]),a=Object(n.useCallback)(e=>({message:c.a.createElement(le,null,c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(oe,{size:"label"},c.a.createElement(x.c,{id:"DASHBOARD_STATUS_LIST_DURATION"})),c.a.createElement(ie,{size:"label"},c.a.createElement($.e,{uptime:e.duration}))),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(oe,{size:"label"},c.a.createElement(x.c,{id:"DASHBOARD_STATUS_LIST_UTILIZATION"})),c.a.createElement(ie,{size:"label"},Object(te.a)(e.usage/100)))),width:143}),[]);return c.a.createElement(Ee,{items:t,canvasClassName:se,itemTooltip:t.length?a:void 0})}),de=a(2615),_e=a(45);const ue=Object(r.c)(U.j)`
  position: relative;
  left: -50%;
  margin-top: 2px;
`,pe=Object(r.c)(de.a)`
  transition: all 300ms ease;
  span {
    position: relative;
    left: -50%;
    font-size: 14px;
    line-height: 14px;
    @media ${k.b.VIEWPORT_XXL_DOWN} {
      font-size: 12px;
    }
  }
`;var be=c.a.memo(({usagePercentage:e})=>c.a.createElement(pe,{style:{transform:`translate(${e}, 0)`},icon:c.a.createElement(ue,{color:_e.a["blue-3"],width:8,height:8}),iconSize:"small",text:e,textPlacement:"below"}));const Oe=Object(r.c)(J)`
  padding-bottom: 12px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding-bottom: 8px;
  }
`;var Ie=()=>{const e=Object(i.useSelector)(p.selectSiteGatewayCpuUsed),{percentage:t}=Object(i.useSelector)(p.selectSiteGatewayMemoryUsed),a=Object(n.useMemo)(()=>{const a=Object(Q.a)([Object(ee.a)(e),Object(ee.a)(t)])||0,n=Math.round(Math.min(100,Math.max(0,a)));return Object(te.a)(n/100)},[e,t]);return c.a.createElement(Oe,{overflow:"hidden",justifyContent:"center",flexDirection:"column"},c.a.createElement($.g,{alignItems:"flex-end",justifyContent:"space-between"},c.a.createElement($.g,{alignItems:"center"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_STATUS_LIST_UTILIZATION"})))),c.a.createElement(me,null),c.a.createElement(be,{usagePercentage:a}))};function ge(){const e=Object(i.useSelector)(W.r);return c.a.createElement(J,{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_SYSTEM_UPTIME"})),c.a.createElement(q.d,null,c.a.createElement($.e,{uptime:e})))}var he=a(2521),Ce=a(2861),Re=a(445),ve=a(1177),fe=a(784),Te=a(210),De=a.n(Te),ye=a(255),Pe=a(117),Se=a(2039);const Ae=Object(r.c)(h.a)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
`,je=Object(r.c)(h.a,{shouldForwardProp:e=>"color"!==e})`
  background: ${({color:e,theme:t})=>De()(t.motifPalette[e]).alpha(.1).css()};
  border: 1px solid ${({color:e,theme:t})=>t.motifPalette[e]};
  border-radius: 100%;
  position: relative;
  height: 42px;
  width: 42px;
`,Ne=Object(r.c)(U.r,{shouldForwardProp:e=>"statusColor"!==e})`
  color: ${({statusColor:e,theme:t})=>t.motifPalette[e]};
  position: absolute;
  bottom: 0;
  right: 0;
`,xe=Object(r.c)(U.Tb,{shouldForwardProp:e=>"statusColor"!==e})`
  color: ${({statusColor:e,theme:t})=>t.motifPalette[e]};
  position: absolute;
  bottom: 0;
  right: 0;
`,Le=Object(r.c)(U.Wb,{shouldForwardProp:e=>"statusColor"!==e})`
  position: absolute;
  bottom: 0;
  right: 0;
  circle {
    fill: ${({statusColor:e,theme:t})=>t.motifPalette[e]};
  }
`,Ve=Object(r.c)(q.d)`
  display: flex;
  white-space: nowrap;
  justify-content: flex-end;
`,we=Object(r.c)("div")`
  margin-left: 8px;
`;var Me=c.a.memo(()=>{const e=Object(j.m)(),t=Object(i.useSelector)(p.selectAvailableUlteDevice),a=Object(i.useSelector)(p.selectUlteSignalStrength),n=Object(p.calculateUsage)(t),r=G.n[n.state],l=(o=t,Object(p.getDeviceState)(o)===p.DeviceState.DISCONNECTED?{state:"DISCONNECTED",color:"neutral06",icon:c.a.createElement(Le,{height:"12",width:"12",statusColor:"neutral06"})}:Object(p.isUlteFailoverActive)(o)?{state:"ACTIVE",color:"success",icon:c.a.createElement(Ne,{height:"12",width:"12",statusColor:"success"})}:o.lte_state===p.LteState.Ready?{state:"READY",color:"success",icon:c.a.createElement(Ne,{height:"12",width:"12",statusColor:"success"})}:{state:"WARNING",color:"warning",icon:c.a.createElement(xe,{height:"12",width:"14",statusColor:"warning"})});var o;return c.a.createElement(Ae,{alignItems:"center",justifyContent:"space-between",width:"100%",paddingBottom:16,marginBottom:16},c.a.createElement(je,{flex:"none",justifyContent:"center",alignItems:"center",color:l.color},c.a.createElement(Pe.c,{device:{model:t.model,type:t.type}}),l.icon),c.a.createElement(we,null,c.a.createElement(Ve,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_LTE_INTERNET_LABEL"})," ",c.a.createElement(x.c,{id:"DASHBOARD_MODULE_LTE_STATE_"+l.state})),c.a.createElement(h.a,{justifyContent:"flex-end",alignItems:"baseline"},c.a.createElement(Se.a,{inactiveColor:e.motifPalette.icon02,width:16,height:16,color:e.motifPalette.success,strength:a}),"READY"===l.state||"ACTIVE"===l.state?c.a.createElement(c.a.Fragment,null,c.a.createElement(q.d,{weight:"bold",style:{color:r,margin:"-1px 2px 0 4px"}},Object(ye.c)(n.usedBytes,"bytes","JEDEC")),t.lte_soft_limit>0&&c.a.createElement(q.d,null,"/"+Object(ye.c)(n.softLimitBytes,"bytes","JEDEC"))):c.a.createElement(q.d,{style:{margin:"-1px 2px 0 4px"}},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_LTE_NO_DATA"})))))}),Fe=a(647);const Ue=Object(r.c)("div")`
  white-space: nowrap;
`,Be=Object(r.c)(ae.a)`
  line-height: 20px !important;
  margin-bottom: 8px;
`,ze=Object(r.c)(ae.a)`
  margin-bottom: 16px;
`,ke=Object(r.c)(Fe.a)`
  font-size: 14px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    font-size: 12px;
  }
`,We=Object(r.c)(ne.a,{shouldForwardProp:e=>"peakBitratePercentage"!==e})`
  margin: 18px 0 0 !important;
  box-sizing: content-box;
  height: 12px;
  position: relative;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    height: 8px;
    margin: 12px 0 0 !important;
  }
  @media ${k.b.VIEWPORT_XL_DOWN} {
    margin: 8px 0 0 !important;
  }
  &::before {
    content: '';
    position: absolute;
    display: ${({peakBitratePercentage:e})=>e?"block":"none"};
    height: 22px;
    border-left: 1px dotted ${({theme:e})=>e.colors.blue};
    top: 50%;
    transform: translateY(-50%);
    left: ${({peakBitratePercentage:e})=>e}%;
    @media ${k.b.VIEWPORT_XXL_DOWN} {
      height: 16px;
    }
  }
  canvas {
    height: 12px !important;
    border: 1px solid ${({theme:e})=>e.motifPalette.ui04} !important;
    background: ${({theme:e})=>e.motifPalette.ui01} !important;
    border-radius: 6px !important;
    @media ${k.b.VIEWPORT_XXL_DOWN} {
      height: 8px !important;
    }
  }
`,He=({networkGroup:e,bytesType:t,capacity:a,isp:r})=>{const l=Object(i.useSelector)(b.selectAggregatedDashboardWanUtilizations),[o,E]=Object(n.useState)(0),s=new ye.a((null==r?void 0:r[t+"_bytes-r"])||0,"bitrate"),m=new ye.a(a,"bitrate"),d=Object(te.a)(Math.min(1,s.bytes/m.bytes)),_=Math.round(Math.min(100,o/m.bytes*100)),{items:u,maxPercentage:p}=Object(n.useMemo)(()=>{var a;const n=l[`${e}_utilization_${"tx"===t?"up":"down"}`],c=Object(re.a)().domain([0,null===(a=Object(ce.a)(n,"seconds_spent"))||void 0===a?void 0:a.seconds_spent]).range([51,255]).clamp(!0);let r=0;const i=n.map(e=>(r=e.usage_percentage>r&&e.seconds_spent?e.usage_percentage:r,{duration:e.seconds_spent,value:c(e.seconds_spent)*(e.seconds_spent?1:0),usage:e.usage_percentage,width:1,rate:s.bytes}));return{maxPercentage:r,items:i}},[e,l,t,s.bytes]);return Object(n.useEffect)(()=>{const e=m.bytes*(p/100),t=Math.max(e,s.bytes);t>o&&E(t)},[s.bytes,p,o,m.bytes]),c.a.createElement(c.a.Fragment,null,c.a.createElement(We,{peakBitratePercentage:_,items:u,itemTooltip:e=>({message:c.a.createElement(Ue,null,c.a.createElement(ze,{weight:"bold"},c.a.createElement(x.c,{id:`DASHBOARD_MODULE_INTERNET_${t.toUpperCase()}_UTILIZATION`})),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_STATUS_LIST_DURATION"})),c.a.createElement(Be,null,c.a.createElement($.e,{uptime:e.duration}))),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_STATUS_LIST_UTILIZATION"})),c.a.createElement(Be,null,Object(te.a)(e.usage/100))),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_CAPACITY"})),c.a.createElement(Be,null,`${m.value} ${m.unit}`)),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_REAL_TIME"})),c.a.createElement($.r,{bytes:s.bytes||0,direction:"tx"===t?"up":"down"})),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_REAL_TIME"})),c.a.createElement(Be,null,d)),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_PEAK"})),c.a.createElement($.r,{bytes:o||0,direction:"tx"===t?"up":"down"})),c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(Be,null,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_PEAK"})),c.a.createElement(Be,null,_,"%"))),width:250})}),c.a.createElement(be,{usagePercentage:d}))};var $e=c.a.memo(({isp:e})=>{var t,a;const{download_kilobits_per_second:n=0,upload_kilobits_per_second:r=0}=(null===(t=null==e?void 0:e.configuration)||void 0===t?void 0:t.wan_provider_capabilities)||{},l=1e3*n/8,i=1e3*r/8,o=null===(a=e.networkgroup)||void 0===a?void 0:a.toLowerCase();return c.a.createElement(c.a.Fragment,null,l>0&&c.a.createElement($.g,{flexDirection:"column",marginBottom:16},c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_RX_UTILIZATION"})),c.a.createElement(ke,{type:"bytes",input:l,options:"bitrate"})),c.a.createElement(He,{isp:e,networkGroup:o,bytesType:"rx",capacity:l})),i>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_TX_UTILIZATION"})),c.a.createElement(ke,{type:"bytes",input:i,options:"bitrate"})),c.a.createElement(He,{isp:e,networkGroup:o,bytesType:"tx",capacity:i})))}),Ge=a(441),Ye=a(2860),Xe=a(2884),Ke=a(2751),Ze=a(175),qe=a(832),Je=a(97),Qe=a(2169),et=a(4);const tt=e=>e.shared.speedTest.state,at=e=>{const t=e.map(e=>e.records.map(e=>e[1]))[0];return t.reduce((e,t)=>e+t,0)/t.length/100/8*1e6},nt=Object(et.a)(Ze.selectSpeedTestStatusData,e=>{const t={download:[],upload:[]};e.forEach(e=>{e["download-progress"]&&!e["upload-progress"]&&t.download.push(at(e["download-progress"])),e["upload-progress"]&&t.upload.push(at(e["upload-progress"]))});const a=Object(Ge.a)(e);return{...t,...(null==a?void 0:a.server)&&{server:null==a?void 0:a.server},ping:Math.round((null==a?void 0:a.latency)||0)}});var ct=a(225);const rt=Object(r.c)("div")`
  background-color: ${({theme:e})=>e.motifPalette.uiBase};
  width: 100%;
`,lt=Object(r.c)("div")`
  position: relative;
  text-align: left;
  padding: 14px 24px 26px;
`,it=Object(r.c)(ae.a)`
  text-transform: capitalize;
`,ot=Object(r.c)(U.y)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({theme:e})=>e.motifPalette.neutral08};
  z-index: 1;
`,Et=Object(r.c)(Ye.a)`
  padding: 0 24px;
`,st=({speedTestState:e,isUpload:t,onClose:a})=>{let n="SPEED_TEST_IN_PROGRESS";switch(e){case Ze.SPEED_TEST_STATES.TIMEOUT:n="SPEED_TEST_TIMEOUT";break;case Ze.SPEED_TEST_STATES.FAILED:n="SPEED_TEST_FAILED";break;case Ze.SPEED_TEST_STATES.FINISHED:n="SPEED_TEST_FINISHED"}return c.a.createElement(lt,null,c.a.createElement(it,{size:"header-xs",color:"primary",weight:"bold"},c.a.createElement(x.c,{id:n,values:{type:t?"upload":"download"}})),c.a.createElement(ot,{actionable:!0,onClick:a,width:16,height:16}))};var mt=({interface_name:e,onClose:t,isp:a})=>{var r,o,E;const s=Object(i.useSelector)(nt),m=Object(i.useSelector)(tt),d=Object(i.useSelector)(qe.a),_=Object(i.useSelector)(Je.a),u=Object(i.useSelector)(p.selectSiteGateway),b=Object(l.k)(),O=Object(i.useDispatch)(),{server:I,...g}=s,h=m===Ze.SPEED_TEST_STATES.IN_PROGRESS,C=g.upload.length>0,R=Object(B.e)(u.model),v={download:h&&!C&&null!==(r=Object(Ge.a)(g.download))&&void 0!==r?r:null,upload:h&&C&&null!==(o=Object(Ge.a)(g.upload))&&void 0!==o?o:null,ping:g.ping},{download_kilobits_per_second:f=0,upload_kilobits_per_second:T=0}=(null===(E=null==a?void 0:a.configuration)||void 0===E?void 0:E.wan_provider_capabilities)||{},D=1e3*f/8,y=1e3*T/8,P=Object(n.useCallback)(()=>O(Object(ct.j)(e)),[e,O]),S=Object(n.useCallback)(()=>{O(Object(Qe.a)(b,d._id,{isFromSpeedTest:!0}))},[b,_,d._id]);return Object(n.useEffect)(()=>{m!==Ze.SPEED_TEST_STATES.IN_PROGRESS&&P()},[]),c.a.createElement(rt,null,c.a.createElement(st,{speedTestState:m,isUpload:C,onClose:t}),h?c.a.createElement(Xe.a,{speedTestData:v,ispIntroText:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_SPEED_TEST_ISP_INTRO"}),isp:I&&c.a.createElement(x.c,{id:"DASHBOARD_SPEEDTEST_ISP_INFO",values:{provider:I.provider,location:I.country}}),xDuration:3500,animationBuffer:1e3,uploadText:c.a.createElement(x.c,{id:"COMMON_STATUS_UPLOAD"}),downloadText:c.a.createElement(x.c,{id:"COMMON_STATUS_DOWNLOAD"}),connectionInfo:{sourceText:c.a.createElement(x.c,{id:"COMMON_WORD_INTERNET"}),receiverText:R}}):c.a.createElement(Et,{speedTestData:{download:Object(Ke.a)(g.download),upload:Object(Ke.a)(g.upload),ping:g.ping,isp:(null==I?void 0:I.provider)&&(null==I?void 0:I.country)&&c.a.createElement(x.c,{id:"DASHBOARD_SPEEDTEST_ISP_INFO",values:{provider:I.provider,location:I.country}}),downloadCapacityBps:D,uploadCapacityBps:y},onRestart:P,restartTestText:c.a.createElement(x.c,{id:"SPEED_TEST_TEST_AGAIN"}),pingText:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_SPEED_TEST_PING"}),adjustSegmentHeading:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_SPEED_TEST_ADJUST_HEADING"}),adjustSegmentText:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_SPEED_TEST_ADJUST_TEXT"}),ispText:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_SPEED_TEST_ISP"})},c.a.createElement(F.a,{variant:"link",onClick:S},c.a.createElement(x.c,{id:"DASHBOARD_SPEEDTEST_ISP_ADJUST"}))))};const dt=Object(r.c)(he.a)`
  justify-content: flex-start;
  margin-bottom: 16px;
  margin-left: -12px;
  flex-grow: 0;
  > div {
    margin: initial;
  }
`,_t=Object(r.c)(Ce.a)`
  font-size: 16px !important;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    font-size: 14px !important;
  }
`,ut=Object(r.c)($.g)`
  transition: all ${300}ms ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
`,pt=Object(r.c)($.g)`
  margin-bottom: 12px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    margin-bottom: 4px;
  }
`,bt=Object(r.c)($.g)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    margin-top: 12px;
  }
`,Ot={entered:{transform:"translateY(0px)"}},It=Object(r.c)("div")`
  overflow: hidden;
  > div {
    overflow: hidden;
    display: block !important;
  }
`,gt=Object(r.c)(q.b,{shouldForwardProp:e=>"isDown"!==e})`
  padding: 0 0 0 12px;
  margin: 0;
  border: 0;
  line-height: 1.6;
  color: ${({isDown:e,theme:t})=>e&&t.motifPalette.danger};
  svg {
    margin-right: 4px;
  }
  span {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,ht=Object(r.c)(ae.a)`
  font-size: 14px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    font-size: 10px;
  }
`,Ct=[{id:m.a.WAN,label:"WAN1"},{id:m.a.WAN2,label:"WAN2"}];var Rt=({ispInfoItems:e})=>{var t,a,r,o,E,s,d,_;const b=Object(i.useSelector)(p.selectHasAdoptedUlteDevice),O=Object(i.useSelector)(p.selectIsUlteInFailover),I=Object(i.useSelector)(u.i),g=Object(i.useSelector)(p.selectIsUbiOS),[h,C]=Object(n.useState)((null===(t=e[0])||void 0===t?void 0:t.networkgroup)||m.a.WAN),[R,v]=Object(n.useState)(!1),f=e.find(e=>e.networkgroup===h),T=Object(n.useMemo)(()=>g||h===m.a.WAN,[g,h]),D=Object(i.useDispatch)(),y=Object(l.k)(),{path:P}=Object(l.n)(),{pathname:S}=Object(l.l)(),{site:j}=Object(l.m)(),N=Object(n.useCallback)(e=>{const t=Object(l.i)(P,{id:e,panel:"overview",section:"properties",site:j});t!==S&&y.push(t),D(Object(H.g)({type:A.b.ISP_DETAILS,id:e}))},[D,y,P,S,j]),L=Object(n.useCallback)(()=>v(!1),[v]);return c.a.createElement(J,{position:"relative",minHeight:R?"370px":"initial",overflow:"hidden",flexDirection:"column",width:"100%"},b&&c.a.createElement(Me,null),e.length>1&&c.a.createElement(dt,{tabs:Ct,selectedTab:h,onSelectTab:e=>C(e.id),variant:"tertiary"}),(null===(r=null===(a=null==f?void 0:f.details)||void 0===a?void 0:a.service_provider)||void 0===r?void 0:r.name)&&c.a.createElement(pt,{justifyContent:"space-between"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_HEADER"})),c.a.createElement(It,null,c.a.createElement(gt,{color:"red",variant:"inline",noWrap:!0,onClick:()=>N(f.networkgroup),Icon:!(null==f?void 0:f.up)&&c.a.createElement(U.S,{color:G.n.danger}),isDown:!(null==f?void 0:f.up)},null===(E=null===(o=null==f?void 0:f.details)||void 0===o?void 0:o.service_provider)||void 0===E?void 0:E.name))),!!(null===(s=null==f?void 0:f.statistics)||void 0===s?void 0:s.uptime_percentage)&&-1!==(null===(d=null==f?void 0:f.statistics)||void 0===d?void 0:d.uptime_percentage)&&c.a.createElement(pt,{justifyContent:"space-between"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"COMMON_WORD_UPTIME"})),c.a.createElement(q.d,null,c.a.createElement(_t,{value:Math.max(0,Math.round(null===(_=null==f?void 0:f.statistics)||void 0===_?void 0:_.uptime_percentage)),weight:"bold",percent:!0}))),!!(null==f?void 0:f.latency)&&c.a.createElement(pt,{justifyContent:"space-between"},c.a.createElement(q.d,{weight:"bold"},c.a.createElement(x.c,{id:"COMMON_LATENCY"})),c.a.createElement(Re.a,{position:"top",portal:!0,message:c.a.createElement(ae.a,null,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_LATENCY_TOOLTIP"}))},c.a.createElement(q.d,null,null==f?void 0:f.latency,c.a.createElement(x.c,{id:"COMMON_UNIT_MILLISECONDS_SHORT"})))),c.a.createElement(bt,Object.assign({justifyContent:"space-between",alignItems:"center"},T&&{paddingBottom:16},{marginBottom:16,marginTop:4}),T?c.a.createElement(c.a.Fragment,null,c.a.createElement(q.b,{onClick:()=>{v(!0)},variant:"inline",noWrap:!0,disabled:O||!f.up},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_RUN_SPEED_TEST_ACTION"})),(null==I?void 0:I.speedtest_lastrun)?c.a.createElement(ht,{color:"tertiary",whiteSpacePreWrap:!0},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_INTERNET_LAST_RUN"})," ",c.a.createElement(fe.a,{date:new Date(1e3*I.speedtest_lastrun),dateFormat:"M/DD/YY",timeFormat:"HH:mm",spacer:c.a.createElement(c.a.Fragment,null," ",c.a.createElement(x.c,{id:"COMMON_AT"})," ")})):null):null),c.a.createElement($e,{isp:f}),c.a.createElement(ve.a,{in:R,timeout:300,mountOnEnter:!0},e=>c.a.createElement(ut,{height:"100%",style:{...Ot[e]}},c.a.createElement(mt,{onClose:L,isp:f,interface_name:null==f?void 0:f.ifname}))))};var vt=({gatewayMac:e})=>{const t=Object(i.useSelector)(Z.selectIspInfoItems);return c.a.createElement("div",null,e&&c.a.createElement(Ie,null),c.a.createElement(ge,null),!!t.length&&c.a.createElement(Rt,{ispInfoItems:t}))};const ft=Object(r.c)($.g)`
  align-items: center;
  svg {
    height: 180px;
    @media ${k.b.VIEWPORT_S_DOWN}, ${k.b.VIEWPORT_XL_UP} {
      height: 260px;
    }
  }
`,Tt=Object(r.c)(L.a)`
  box-shadow: ${({theme:e})=>`1px 0 0 0  ${e.colors.dashboardBorder};`};
`,Dt=Object(r.c)($.g)`
  cursor: pointer;
  overflow: hidden;
  height: 200px;
  @media ${k.b.VIEWPORT_S_DOWN}, ${k.b.VIEWPORT_XL_UP} {
    height: 300px;
  }
`,yt=Object(r.c)($.g)`
  text-align: center;
`,Pt=Object(r.c)(U.a)`
  display: block;
  margin-bottom: 15px;
`,St=Object(r.c)("div")`
  height: 100%;
  padding-top: 12px;
`,At=Object(r.c)($.g)`
  ${({theme:e,topBorder:t=!1,bottomBorder:a=!1})=>`\n    ${t?`border-top: 1px solid ${e.colors.dashboardBorder};`:""}\n    ${a?`border-bottom: 1px solid ${e.colors.dashboardBorder};`:""}\n  `};
`,jt=Object(r.c)("img")`
  width: 100%;
`,Nt=Object(r.c)("div")`
  > div {
    width: fit-content;
  }
`,xt=Object(r.c)(q.a)`
  transition: color 0.2s linear;
  &:hover {
    color: ${({theme:e})=>e.motifPalette.uBlue06};
  }
`,Lt=Object(r.c)(V.a,{shouldForwardProp:e=>!["isClickable","isUmPro"].includes(e)})`
  margin: 0 24px;

  ${({isUmPro:e})=>e&&`\n    svg {\n      height: 204px;\n      @media ${k.b.VIEWPORT_XXL_DOWN} {\n        height: 96px;\n      }\n    }\n  `}
  ${({isClickable:e})=>e&&"\n    cursor: pointer;\n  "}
`,Vt=Object(r.c)(q.f)`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    display: inline;
    margin-top: 0;
  }
`,wt=Object(r.c)($.g)`
  margin-top: 12px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    margin-top: 0;
  }
`,Mt=Object(r.c)($.g)`
  padding: 0 24px 24px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding: 0 24px 16px;
  }
`,Ft=({portConfig:e,gateway:t,panelCallback:a})=>{const r=Object(i.useSelector)(p.selectIsUdmBase),l=Object(i.useSelector)(p.selectIsUdr),o=Object(i.useSelector)(p.selectIsUdmPro),E=Object(i.useSelector)(W.h),s=Object(i.useSelector)(W.j),m=Object(i.useSelector)(W.k),d=Object(i.useSelector)(W.l),_=Object(i.useSelector)(p.selectDeviceStackDevices),u=Object(n.useMemo)(()=>s?p.DeviceModel.UCK:m?p.DeviceModel.UCKG2:d?p.DeviceModel.UCKP:X.i,[s,m,d]),b=!r&&!l,O=E?[{model:u},..._]:_,I=!E||O.length>1;return c.a.createElement(ft,{flexDirection:"column",onClick:I&&a},b?c.a.createElement(Lt,{deviceData:O,isClickable:I,isUmPro:o&&1===(null==O?void 0:O.length)}):c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(Dt,{width:"100%",justifyContent:"center"},c.a.createElement(w.a,{configured:null==t?void 0:t.adopted,ports:e})),l&&c.a.createElement(Dt,{width:"100%",justifyContent:"center"},c.a.createElement(M.a,{configured:null==t?void 0:t.adopted,ports:e}))))},Ut=()=>{const{motif:e}=Object(E.a)(),t=Object(i.useSelector)(W.n),a=Object(n.useMemo)(()=>{const t="dark"===e;return K.a.isLinux?t?X.d:X.e:K.a.isMacOS?t?X.f:X.g:t?X.o:X.p},[e]);return c.a.createElement(At,{flexDirection:"column",alignItems:"center",bottomBorder:!0,paddingBottom:28},c.a.createElement(ft,{justifyContent:"center",padding:"22px 56px 24px 56px"},c.a.createElement(jt,{src:a,alt:"desktop-image"})),c.a.createElement($.p,{color:"secondary",message:"DASHBOARD_NON_UBNT_DEVICE_LABEL",values:{network_version:t,os:K.a.os,os_version:K.a.version}}))},Bt=({portConfig:e})=>{const t=Object(i.useSelector)(p.selectSiteGateway),a=Object(i.useSelector)(p.selectGatewayIp),r=Object(p.getGatewayActiveWanItems)(t),o=Object(B.c)(t),E=Object(B.b)(t),s=Object(p.isUbiOS)(t),m=Object(i.useDispatch)(),d=Object(l.k)(),{path:_}=Object(l.n)(),{pathname:u}=Object(l.l)(),{site:b}=Object(l.m)(),O=Object(n.useCallback)(()=>{const e=Object(l.i)(_,{id:t.mac,panel:"overview",section:"properties",site:b});e!==u&&d.push(e),m(Object(H.g)({type:A.b.DEVICE,mac:t.mac}))},[m,t.mac,d,_,u,b]);return c.a.createElement($.g,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(Ft,{portConfig:e,gateway:t,panelCallback:O}),c.a.createElement(Mt,{flexDirection:"column"},c.a.createElement($.g,{flexDirection:"column",marginBottom:12},c.a.createElement(Nt,null,c.a.createElement(F.a,{onClick:O,variant:"inline"},c.a.createElement(xt,{weight:"bold",size:"body"},o))),c.a.createElement(Vt,{color:"tertiary"},s&&c.a.createElement(x.c,{id:"COMMON_UNIFI_OS"}),` ${E} ${null==t?void 0:t.version}`)),r.map(({ip:e,index:t,port_idx:a})=>e&&c.a.createElement($.g,{justifyContent:"space-between",key:a},c.a.createElement(q.c,{weight:"bold"},c.a.createElement(x.c,{id:"COMMON_WAN_IP_PORT",values:{index:1===t?"":t,port:a}})),c.a.createElement(q.c,null,e))),a&&c.a.createElement(wt,{justifyContent:"space-between"},c.a.createElement(q.c,{weight:"bold"},c.a.createElement(x.c,{id:"COMMON_GATEWAY_IP"})),c.a.createElement(q.c,null,a))))},zt=()=>{const e=Object(i.useSelector)(W.o),t=Object(i.useSelector)(W.e);return c.a.createElement($.g,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(Ft,null),c.a.createElement(Mt,{flexDirection:"column"},c.a.createElement($.g,{flexDirection:"column",marginBottom:12},c.a.createElement(q.a,{truncate:!0,weight:"bold"},(null==e?void 0:e.name)||(null==e?void 0:e.hostname)),c.a.createElement($.g,{alignItems:"baseline"},c.a.createElement(q.c,{truncate:!0,color:"tertiary",style:{marginRight:"10px"}},e.hostname&&"example-domain.ui.com"!==e.hostname?e.hostname:e.ubnt_device_type),c.a.createElement(q.c,{color:"tertiary"},t)))))},kt=()=>{const e=Object(i.useSelector)(p.selectPortConfig),t=Object(i.useSelector)(W.h);return e?c.a.createElement(Bt,{portConfig:e}):t?c.a.createElement(zt,null):c.a.createElement(yt,{alignItems:"center",flexDirection:"column",margin:"90px 0"},c.a.createElement(Pt,{color:G.n.warning,size:"navigation"}),c.a.createElement("div",null,c.a.createElement($.p,{message:"DASHBOARD_ISP_CHART_NO_GATEWAY_INTRO"})," ",c.a.createElement(F.a,{variant:"inline",href:z.a.unifiSdn},c.a.createElement($.p,{message:"DASHBOARD_ISP_CHART_NO_GATEWAY_LINK"}))," ",c.a.createElement($.p,{message:"DASHBOARD_ISP_CHART_NO_GATEWAY_OUTRO"})))},Wt=({gatewayMac:e})=>Object(i.useSelector)(Z.selectHasHostDeviceType)?c.a.createElement(c.a.Fragment,null,c.a.createElement(kt,null),c.a.createElement(vt,{gatewayMac:e})):c.a.createElement(Ut,null),Ht=()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{flexDirection:"column",width:"100%"},c.a.createElement(Y.a,{borderRadius:4,aspectRatio:"16:9"})),c.a.createElement(J,{flexDirection:"column"},c.a.createElement(Y.a,{width:"25%",height:12,marginBottom:12}),c.a.createElement(Y.a,{width:"75%",height:12,marginBottom:12}),c.a.createElement($.g,{justifyContent:"space-between",marginBottom:8},c.a.createElement(Y.a,{width:"40%",height:12}),c.a.createElement(Y.a,{width:"20%",height:12})),c.a.createElement($.g,{justifyContent:"space-between",marginBottom:8},c.a.createElement(Y.a,{width:"40%",height:12}),c.a.createElement(Y.a,{width:"20%",height:12}))),c.a.createElement(J,{height:"82px",alignItems:"center",justifyContent:"space-between"},c.a.createElement(Y.a,{width:"10%",height:12}),c.a.createElement(Y.a,{width:"100%",height:12})),c.a.createElement(J,{height:"68px",alignItems:"center",justifyContent:"space-between"},c.a.createElement(Y.a,{width:"50%",height:12}),c.a.createElement(Y.a,{width:"20%",height:12})),c.a.createElement(J,{flexDirection:"column"},c.a.createElement($.g,{justifyContent:"space-between",marginBottom:12},c.a.createElement(Y.a,{width:"50%",height:12}),c.a.createElement(Y.a,{width:"30%",height:12})),c.a.createElement($.g,{justifyContent:"space-between",marginBottom:12},c.a.createElement(Y.a,{width:"50%",height:12}),c.a.createElement(Y.a,{width:"30%",height:12})),c.a.createElement($.g,{justifyContent:"space-between",marginBottom:24},c.a.createElement(Y.a,{width:"50%",height:12}),c.a.createElement(Y.a,{width:"10%",height:12})),c.a.createElement($.g,{justifyContent:"space-between",marginBottom:24},c.a.createElement(Y.a,{width:"60%",height:12}),c.a.createElement(Y.a,{width:"15%",height:12})),c.a.createElement($.g,{flexDirection:"column",justifyContent:"space-between",marginBottom:24},c.a.createElement($.g,{justifyContent:"space-between",marginBottom:8},c.a.createElement(Y.a,{width:"40%",height:12}),c.a.createElement(Y.a,{width:"20%",height:12})),c.a.createElement(Y.a,{width:"100%",height:12})),c.a.createElement($.g,{flexDirection:"column",justifyContent:"space-between",marginBottom:18},c.a.createElement($.g,{justifyContent:"space-between",marginBottom:8},c.a.createElement(Y.a,{width:"40%",height:12}),c.a.createElement(Y.a,{width:"20%",height:12})),c.a.createElement(Y.a,{width:"100%",height:12}))));var $t=({isLoaded:e,gatewayMac:t})=>c.a.createElement(Tt,null,c.a.createElement(St,null,e?c.a.createElement(Wt,{gatewayMac:t}):c.a.createElement(Ht,null))),Gt=a(23),Yt=a(607),Xt=a(2897),Kt=a(18),Zt=a(50),qt=a(95),Jt=a(2094),Qt=a(111),ea=a(479);const ta=r.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  overflow-x: unset !important;

  > div {
    margin: initial;

    button:last-child {
      padding-right: 0;
    }
  }
`,aa=Object(r.c)(Qt.a)`
  text-transform: uppercase;
`,na=Object(r.c)("div")`
  display: flex;
  align-items: center;
  white-space: nowrap;
`,ca=r.a`
  overflow-y: auto;
  max-height: calc(90vh - 52px);
  padding: 0 !important;
  border: none;
`,ra=r.a`
  background-color: transparent !important;
`,la=(e,t,a,n,r,l)=>[...e.map(e=>({id:e.id,label:c.a.createElement(aa,{size:"small",message:e.message,values:e.messageValues})})),{id:"Custom",className:ra,label:c.a.createElement(Yt.a,{classNameCard:ca,align:"bottomLeft",renderToggle:l},c.a.createElement(Xt.a,{initialStartDate:Object(qt.a)(t.startDate,a),initialEndDate:Object(qt.a)(Object(Gt.subSeconds)(t.endDate,1),a),numberOfMonths:2,disabledDays:{after:Object(qt.a)(new Date,a)},onRangeSelected:({startDate:e,endDate:t})=>{n({startDate:Object(qt.h)(e,a),endDate:Object(qt.b)(t,a)}),r(Object(N.d)({startDate:Object(qt.h)(e,a),endDate:Object(qt.h)(Object(Gt.addDays)(t,1),a),preset:null}))},showInputs:!0}))}];var ia=({tabsVariant:e})=>{const t=Object(i.useDispatch)(),a=Object(i.useSelector)(Z.selectDateRangePresets),r=Object(i.useSelector)(Zt.selectLocaleSettings),l=Object(i.useSelector)(Kt.Q),o=Object(i.useSelector)(Z.selectDateRange),E=Object(i.useSelector)(W.c),s=Object(qt.d)(l,r,E),[m,d]=Object(n.useState)(ea.i),[_,u]=Object(n.useState)(null),p=Object(n.useCallback)(()=>c.a.createElement(na,null,_?c.a.createElement(Jt.a,{start:_.startDate,end:_.endDate,timezone:s}):c.a.createElement(U.p,null)),[_,s]);return c.a.createElement(he.a,{tabs:la(a,o,s,u,t,p),selectedTab:m,onSelectTab:({id:e})=>(e=>{const n=a.find(t=>t.id===e);n?t(Object(N.d)({...n.getRange(new Date),preset:e})):_&&t(Object(N.d)({..._,preset:null})),d(e)})(e),className:ta,variant:e})};const oa=Object(r.c)(L.a)`
  box-shadow: none;
`,Ea=Object(r.c)($.g)`
  height: 100%;
  padding: 0 48px;
  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding: 0 32px;
  }
`,sa=()=>c.a.createElement(c.a.Fragment,null,c.a.createElement($.g,{flex:1}),c.a.createElement("span",null,c.a.createElement(ia,{tabsVariant:"tertiary"}))),ma=()=>c.a.createElement($.g,{width:"100%",justifyContent:"flex-end"},c.a.createElement($.g,null,c.a.createElement(Y.a,{width:24,height:16,marginRight:8}),c.a.createElement(Y.a,{width:24,height:16,marginRight:8}),c.a.createElement(Y.a,{width:24,height:16,marginRight:8}),c.a.createElement(Y.a,{width:24,height:16})));var da=({isLoaded:e})=>c.a.createElement(oa,{overflow:"visible"},c.a.createElement(Ea,{alignItems:"center",flexWrap:"nowrap"},e?c.a.createElement(sa,null):c.a.createElement(ma,null))),_a=a(2930),ua=a(2212);const pa=Object(r.c)(_a.a)`
  animation: unset !important;

  > div {
    border: none;
    border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04} !important;
  }
`,ba=Object(r.c)(F.a)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
  line-height: 1 !important;
`,Oa=()=>{const e=Object(i.useSelector)(Kt.P),[t,a]=Object(n.useState)(!e.bypassHybridDashboardNotice),r=Object(i.useDispatch)(),o=Object(l.k)();Object(n.useEffect)(()=>{const e=setTimeout(()=>{a(!1),setTimeout(()=>dispatchEvent(new Event("resize")),450)},2e4);return()=>clearTimeout(e)},[]);return c.a.createElement(pa,{isOpen:t,onClose:()=>{r(Object(Kt.k)({...e,bypassHybridDashboardNotice:!0})),a(!1),setTimeout(()=>dispatchEvent(new Event("resize")),450)}},c.a.createElement($.g,{alignItems:"center"},c.a.createElement(ua.a,null),c.a.createElement(ae.a,null,c.a.createElement(x.c,{id:"HYBRID_DASHBOARD_NOTICE"})),c.a.createElement(ba,{variant:"inline",onClick:()=>r(Object(Qe.c)(o))},c.a.createElement(x.c,{id:"HYBRID_DASHBOARD_NOTICE_CTA"}))))};var Ia=({isLoaded:e})=>e?c.a.createElement(Oa,null):null,ga=a(2918),ha=a(2173),Ca=a(2105);const Ra=()=>c.a.createElement(Ca.e,{color:"primary"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_TRAFFIC_OVERVIEW_HEADER"})),va=()=>c.a.createElement($.g,{flexDirection:"column"},c.a.createElement(Y.a,{width:92,height:16}));var fa=({isLoaded:e})=>e?c.a.createElement(Ra,null):c.a.createElement(va,null),Ta=a(2911),Da=a(523),ya=a(2578);const Pa=Object(r.c)($.g,{shouldForwardProp:e=>"loadingBackgroundColor"!==e&&"border"!==e})`
  border: ${({border:e})=>e}px solid
    ${({theme:e,loadingBackgroundColor:t})=>t||e.motifPalette.neutral02};
  border-radius: 100%;

  circle {
    stroke: ${({loadingBackgroundColor:e})=>e};
  }
  & * > text:first-of-type {
    font-size: 28px;

    @media ${k.b.VIEWPORT_XXL_DOWN} {
      font-size: 20px;
    }
    @media ${k.b.VIEWPORT_XL_DOWN} {
      font-size: 18px;
    }
    @media ${k.b.VIEWPORT_S_DOWN} {
      font-size: 20px;
    }
  }
  & * > text:last-of-type {
    font-size: 20px;

    @media ${k.b.VIEWPORT_XXL_DOWN} {
      font-size: 14px;
    }
    @media ${k.b.VIEWPORT_XL_DOWN} {
      font-size: 10px;
    }
  }
  .titleClassName {
    transform: translateY(18px);
    @media ${k.b.VIEWPORT_XXL_DOWN} {
      transform: translateY(12px);
    }
    @media ${k.b.VIEWPORT_XL_DOWN} {
      transform: translateY(10px);
    }
  }
  .descriptionClassName {
    transform: translateY(-38px);
    @media ${k.b.VIEWPORT_XXL_DOWN} {
      transform: translateY(-34px);
    }
    @media ${k.b.VIEWPORT_XL_DOWN} {
      transform: translateY(-31px);
    }
  }
`,Sa=Object(r.c)(ae.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,Aa=Object(r.c)($.g)`
  margin-bottom: 8px;
`,ja=Object(r.c)(ae.a)`
  color: ${_e.a["purple-1"]};
`,Na={position:"right"},xa=e=>0===(null==e?void 0:e.id)&&1===Object.keys(e).length?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(Sa,{size:"body",weight:"bold"},e.name||c.a.createElement(x.c,{id:"COMMON_UNKNOWN"})),c.a.createElement(Aa,{justifyContent:"space-between"},c.a.createElement(ae.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),c.a.createElement(ae.a,null,Object(Da.a)(e.traffic))),c.a.createElement(Aa,{justifyContent:"space-between"},c.a.createElement(ae.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_UP"})),c.a.createElement(ja,null,Object(Da.a)(e.tx_bytes))),c.a.createElement(Aa,{justifyContent:"space-between"},c.a.createElement(ae.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_DOWN"})),c.a.createElement(ae.a,{color:"info"},Object(Da.a)(e.rx_bytes))),e.known_clients&&c.a.createElement(Aa,{justifyContent:"space-between"},c.a.createElement(ae.a,null,c.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),c.a.createElement(ae.a,null,e.known_clients)));var La=Object(x.f)(({dpiApps:e,appsToShow:t,loadingBackgroundColor:a,isLoaded:r,intl:l})=>{const{motif:i}=Object(E.a)(),o=Object(ya.a)(),[s,m]=Object(n.useMemo)(()=>{let a=0;const n=[];return e.forEach((e,c)=>{var r;a+=e.traffic,n.push({...e,id:e.compoundAppId,value:e.traffic,color:c+1>t?null===(r=_e.a.motifs[i])||void 0===r?void 0:r.neutral03:e.color})}),[a,n]},[i,e,t]);return c.a.createElement(Pa,{justifyContent:"center",alignItems:"center",alignSelf:"center",loadingBackgroundColor:a,border:o.border},c.a.createElement(Ta.a,{items:m,renderTooltipMessage:xa,tooltipProps:Na,title:r&&Object(Da.a)(s),description:r&&l.formatMessage({id:"DASHBOARD_MODULE_TRAFFIC_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",spacer:.4,thickness:o.thickness,size:o.diameter}))}),Va=a(1851),wa=a(2154);const Ma=[{id:"name",label:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_TRAFFIC_TABLE_TITLE"}),renderCell:({color:e,name:t,iconFileName:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Ca.b,{customColor:e}),c.a.createElement(wa.a,{name:t,iconFileName:a}),c.a.createElement(Ca.a,{truncate:!0},t||c.a.createElement(x.c,{id:"COMMON_UNKNOWN"}))),minWidth:110},{id:"known_clients",label:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_TRAFFIC_TABLE_CLIENTS"}),renderCell:({known_clients:e})=>c.a.createElement(Ca.d,null,e),minWidth:75,maxWidth:80},{id:"traffic",label:c.a.createElement(x.c,{id:"DASHBOARD_MODULE_TRAFFIC_TABLE_TRAFFIC"}),renderCell:({traffic:e})=>c.a.createElement(Ca.d,null,Object(Da.a)(e,2)),minWidth:75,maxWidth:80}];var Fa=({dpiApps:e})=>{const t=Object(n.useCallback)(()=>c.a.createElement(x.c,{id:"DASHBOARD_MODULE_TRAFFIC_TABLE_TRAFFIC_EMPTY"}),[]);return c.a.createElement(Ca.c,null,c.a.createElement(Va.a,{idField:"compoundAppId",items:e,columns:Ma,renderPlaceholder:t,disableColumnFilters:!0}))},Ua=a(2579),Ba=a(2580);const za=Object(r.c)(Ua.a)`
  padding-left: 0;
  padding-right: 48px;
  box-shadow: ${({theme:e})=>`0 1px 0 0 ${e.colors.dashboardBorder} inset, 0 1px 0 0 ${e.colors.dashboardBorder}`};
  div[class*='tabsContainer'] {
    overflow: initial;
    margin-right: -6px;
  }
  div[class*='leftContainer'] {
    justify-content: flex-start;
  }

  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding-right: 32px;
  }
  @media ${k.b.VIEWPORT_L2_DOWN} {
    padding-right: 0;
  }
`,ka=Object(r.c)($.g)`
  margin-left: 84px;

  @media ${k.b.VIEWPORT_XXL_DOWN} {
    margin-left: 0;
  }
  @media ${k.b.VIEWPORT_XL_DOWN} {
    margin-bottom: 16px;
  }

  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    flex-direction: column;
    align-items: center;
  }
`,Wa=Object(r.c)(U.C)`
  margin: 0 6px 0 14px;
`,Ha=Object(r.c)($.g)`
  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    flex-direction: column;
    align-items: flex-end;
  }
`,$a=Object(r.c)($.g)`
  margin-right: 20px;
  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    margin-right: 0;
  }
  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;

    @media ${k.b.VIEWPORT_XL_DOWN} {
      font-size: 10px;
    }
  }
  div svg {
    height: 19px;
    width: 19px;

    @media ${k.b.VIEWPORT_XL_DOWN} {
      height: 16px;
      width: 16px;
    }
  }
`,Ga=({history:e,isLoaded:t})=>{const a=Object(i.useDispatch)(),r=Object(i.useSelector)(b.selectAggregatedDashboardClientFingerprints),l=Object(i.useSelector)(b.selectDpiAppData),o=l.slice(0,5),{tx_bytes:E,rx_bytes:s}=Object(n.useMemo)(()=>{const e={tx_bytes:0,rx_bytes:0};return l.forEach(t=>{e.tx_bytes+=t.tx_bytes||0,e.rx_bytes+=t.rx_bytes||0}),e},[l]);return c.a.createElement(za,{height:"auto",leftContent:c.a.createElement(fa,{isLoaded:t}),action:c.a.createElement(Ha,null,c.a.createElement($a,{alignItems:"center",justifyContent:"flex-end"},c.a.createElement(ha.a,{up:E,down:s,leftMargin:8,bottomMargin:0,topMargin:0,withColoredText:!0}),c.a.createElement(Wa,{width:13,height:13}),c.a.createElement(ae.a,{weight:"bold"},r.total)),c.a.createElement(q.e,{variant:"inline",onClick:()=>a(Object(Qe.b)(e))},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_CLIENTS_VIEW_TRAFFIC_ACTION"})))},c.a.createElement($.g,{alignItems:"center",flex:"1",justifyContent:"center"},c.a.createElement(ka,{flex:"1",alignItems:"flex-start",justifyContent:"center"},c.a.createElement(La,{dpiApps:l,appsToShow:5,isLoaded:t}),c.a.createElement(Ca.f,{justifyContent:"flex-start",flex:"1"},c.a.createElement(Fa,{dpiApps:o})))))},Ya=({isLoaded:e,placeholder:t})=>{const{motif:a}=Object(E.a)(),n=e&&t,r=!e&&("dark"===a?Y.b:Y.c);return c.a.createElement(za,{height:"auto",leftContent:c.a.createElement(fa,{isLoaded:n}),action:n?c.a.createElement(Ha,null,c.a.createElement($a,{alignItems:"center",justifyContent:"flex-end"},c.a.createElement(ha.a,{up:147e6,down:2e8,leftMargin:8,bottomMargin:0,topMargin:0}),c.a.createElement(Wa,{width:13,height:13}),c.a.createElement(ae.a,{weight:"bold"},19)),c.a.createElement(q.e,{variant:"inline"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_CLIENTS_VIEW_TRAFFIC_ACTION"}))):c.a.createElement($.g,{flexDirection:"column",alignItems:"flex-end"},c.a.createElement($.g,{marginBottom:8},c.a.createElement(Y.a,{width:45,height:16,marginRight:8}),c.a.createElement(Y.a,{width:45,height:16,marginRight:8}),c.a.createElement(Y.a,{width:25,height:16,marginRight:8}),c.a.createElement(Y.a,{width:80,height:16})))},c.a.createElement($.g,{alignItems:"center",flex:"1",justifyContent:"center"},c.a.createElement(ka,{flex:"1",alignItems:e?"flex-start":"center",justifyContent:"center"},c.a.createElement(La,{dpiApps:n?Ba.b:[],appsToShow:5,loadingBackgroundColor:r,isLoaded:e}),c.a.createElement(Ca.f,{flexDirection:"column",justifyContent:"center",flex:"1"},n?c.a.createElement(Fa,{dpiApps:Ba.b.slice(0,5)}):c.a.createElement($.g,{marginLeft:8,flexDirection:"column"},c.a.createElement($.g,{alignItems:"center",justifyContent:"flex-start",marginBottom:12},c.a.createElement(Y.a,{width:12,height:12,marginRight:4}),c.a.createElement(Y.a,{width:24,height:12,marginRight:38}),c.a.createElement(Y.a,{width:100,height:0,marginRight:14}),c.a.createElement(Y.a,{width:50,height:12,marginRight:14}),c.a.createElement(Y.a,{width:24,height:12})),c.a.createElement($.g,{alignItems:"center",justifyContent:"flex-start",marginBottom:12},c.a.createElement(Y.a,{width:12,height:12,marginRight:4}),c.a.createElement(Y.a,{width:44,height:12,marginRight:18}),c.a.createElement(Y.a,{width:100,height:0,marginRight:14}),c.a.createElement(Y.a,{width:50,height:12,marginRight:14}),c.a.createElement(Y.a,{width:24,height:12})),c.a.createElement($.g,{alignItems:"center",justifyContent:"flex-start",marginBottom:12},c.a.createElement(Y.a,{width:12,height:12,marginRight:4}),c.a.createElement(Y.a,{width:34,height:12,marginRight:28}),c.a.createElement(Y.a,{width:100,height:0,marginRight:14}),c.a.createElement(Y.a,{width:50,height:12,marginRight:14}),c.a.createElement(Y.a,{width:24,height:12})),c.a.createElement($.g,{alignItems:"center",justifyContent:"flex-start"},c.a.createElement(Y.a,{width:12,height:12,marginRight:4}),c.a.createElement(Y.a,{width:54,height:12,marginRight:8}),c.a.createElement(Y.a,{width:100,height:0,marginRight:14}),c.a.createElement(Y.a,{width:50,height:12,marginRight:14}),c.a.createElement(Y.a,{width:24,height:12})))))))};var Xa=Object(l.o)(e=>e.isLoaded&&!e.placeholder?c.a.createElement(Ga,Object.assign({},e)):c.a.createElement(Ya,{isLoaded:e.isLoaded,placeholder:e.placeholder})),Ka=a(2760),Za=a(2763),qa=a.n(Za),Ja=a(2764),Qa=a.n(Ja);const en=Object(r.c)($.g)`
  min-height: 300px;
  margin: 32px;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    margin: 16px 20px;
  }
`,tn=Object(r.c)($.g)`
  ${({theme:e})=>"light"===e.themeName?"\n    background-image: linear-gradient(107deg, #ffffff 0%, #f1f2f4 94%);\n  ":"\n    background-image: linear-gradient(107deg, #000000 33%, #191919 98%);\n  "}
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`,an=Object(r.c)(U.ec)`
  color: ${({theme:e})=>e.motifPalette.icon02};
  width: 36px;
  height: 22px;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    width: 30px;
    height: 18px;
  }
`,nn=Object(r.c)(ae.a)`
  letter-spacing: 0;
  text-align: center;
  font-size: 26px;
  line-height: 30px;
  margin: 21px 0;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    font-size: 20px;
    line-height: 22px;
    margin: 10px 0;
  }
`,cn=Object(r.c)("img")`
  width: auto;
  height: 100%;
  position: absolute;
  left: -20px;
  top: 0;
`,rn=Object(r.c)("img")`
  max-width: 35%;
  min-width: 300px;
  height: auto;
  max-height: 80%;
  margin: auto 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  @media ${k.b.VIEWPORT_M_DOWN} {
    min-width: 200px;
  }
`,ln=Object(r.c)($.g)`
  width: 100%;
  height: 100%;
  z-index: 10;
`,on=Object(r.c)(F.a)`
  font-weight: bold;
  font-size: 16px;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    font-size: 12px;
  }
`;var En=()=>c.a.createElement(en,{flex:"1",className:"noApPlaceholder"},c.a.createElement(tn,{flex:"1"},c.a.createElement(cn,{src:qa.a,alt:"AP Wave"}),c.a.createElement(ln,{flex:"1",alignItems:"center",justifyContent:"center",flexDirection:"column"},c.a.createElement(an,null),c.a.createElement(nn,{weight:"bold",size:"header-s"},c.a.createElement(x.b,{id:"DASHBOARD_WIFI_MODULE_NO_AP_PLACEHOLDER_TEXT"})),c.a.createElement(on,{variant:"link",href:z.a.wiFiLearnMore,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(x.c,{id:"COMMON_LEARN_MORE"}))),c.a.createElement(rn,{src:Qa.a,alt:"AP Devices"}))),sn=a(1136),mn=a(2765),dn=a.n(mn),_n=a(2766),un=a.n(_n);const pn=Object(r.c)($.g)`
  min-height: 300px;
  margin: 32px;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    margin: 16px 20px;
  }
`,bn=Object(r.c)("div")`
  display: flex;
  height: 100%;
  align-items: center;

  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    flex-direction: column;
    justify-content: center;
  }
`,On=Object(r.c)(ae.a)`
  font-size: 19px !important;
  line-height: 1 !important;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    font-size: 14px !important;
  }
`,In=Object(r.c)("img")`
  max-width: 20%;
  margin-left: -1.5%;

  @media ${k.b.VIEWPORT_L_DOWN} {
    max-width: 30%;
  }
  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    max-width: 200px;
    margin-left: 0;
  }
`,gn=Object(r.c)("div")`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    text-align: center;
  }
`,hn=Object(r.c)(ae.a)`
  font-size: 18px;
  margin-bottom: 3px;

  @media ${k.b.VIEWPORT_S_DOWN} {
    font-size: 16px;
  }
`,Cn=Object(r.c)(ae.a)`
  font-size: 13px;
  margin-bottom: 10px;

  @media ${k.b.VIEWPORT_S_DOWN} {
    font-size: 11px;
  }
`,Rn=Object(r.c)(sn.a)`
  padding: 5px 0;

  @media ${k.b.VIEWPORT_DASHBOARD_VERTICAL} {
    justify-content: center;
  }
`;var vn=()=>{const{motif:e}=Object(E.a)(),t=Object(l.k)(),a=Object(j.i)("wifi/network/form"),r=Object(n.useCallback)(()=>t.push(a),[t,a]);return c.a.createElement(pn,{flexFlow:"column nowrap"},c.a.createElement(On,{weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_WIFI_TITLE"})),c.a.createElement(bn,null,c.a.createElement(In,{src:"light"===e?dn.a:un.a,alt:"No Wifi"}),c.a.createElement(gn,null,c.a.createElement(hn,{size:"header-s",weight:"bold"},c.a.createElement(x.c,{id:"DASHBOARD_WIFI_MODULE_NO_WIFI_PLACEHOLDER_TITLE"})),c.a.createElement(Cn,{size:"body",color:"tertiary"},c.a.createElement(x.c,{id:"DASHBOARD_WIFI_MODULE_NO_WIFI_PLACEHOLDER_DESCRIPTION"})),c.a.createElement(Rn,null,c.a.createElement(F.a,{variant:"inline",onClick:r},c.a.createElement(x.c,{id:"DASHBOARD_WIFI_MODULE_NO_WIFI_PLACEHOLDER_BUTTON"}))))))},fn=a(2517),Tn=a(159),Dn=a(2821);Object(r.c)(ae.a)`
  font-size: 19px !important;
  line-height: 1 !important;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-l2"]} !important;
  }
  @media ${k.b.VIEWPORT_L_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-caption"]} !important;
  }
`;const yn=Object(r.c)("span",{shouldForwardProp:e=>"marginRight"!==e})`
  font-size: inherit !important;
  white-space: nowrap;
  margin-right: ${({marginRight:e})=>null!=e?e:5}px;
`,Pn=Object(r.c)(ae.a)`
  font-size: 21px !important;
  white-space: pre;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    font-size: 18px !important;
  }

  @media ${k.b.VIEWPORT_L_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-caption"]} !important;
  }
`,Sn=Object(r.c)(Ce.a,{shouldForwardProp:e=>"color"!==e})`
  font-size: 21px !important;
  color: ${({color:e})=>e} !important;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    font-size: 18px !important;
  }
  @media ${k.b.VIEWPORT_L_DOWN} {
    font-size: ${({theme:e})=>e.fontSize["font-size-caption"]} !important;
  }
`;var An=({now:e,avg:t})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Dn.a,{type:"title"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_WIFI_TITLE"},e=>c.a.createElement(yn,{marginRight:0},e))),c.a.createElement($.g,null,-1===e?c.a.createElement(Pn,{color:"tertiary",weight:"bold"},"- / -"):c.a.createElement(c.a.Fragment,null,c.a.createElement(Sn,{color:_e.a["color-"+Object(Tn.c)(e)],weight:"bold",value:e,percent:!0,after:c.a.createElement(c.a.Fragment,null," ",c.a.createElement(x.c,{id:"DASHBOARD_MODULE_WIFI_NOW"}))}),-1!==t&&c.a.createElement(Pn,{color:"tertiary",weight:"bold"},` / ${t}% `,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_WIFI_AVERAGE"}))))),jn=a(1172),Nn=a(2933),xn=a(2900),Ln=a(206),Vn=a(1975),wn=a(2862);var Mn=({barData:e,getCoordinates:t,chunkedItemSize:a,size:n,variant:r})=>c.a.createElement(wn.a,{xAxisResolution:a,data:e,getCoordinates:t,color:"rgba(255, 255, 255, 0.5)",hideStroke:!0,disableHoverHighlight:!0,width:n.width,height:n.height,stackedBarSpacing:1,variant:r,barFullWidth:!0}),Fn=a(1916);const Un=Object(r.c)("div")`
  #y2-labels {
    text {
      text-anchor: start;
    }
  }
`,Bn=Object(r.c)("div")`
  white-space: nowrap;
`,zn=Object(r.c)($.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
`,kn=Object(r.c)("div")`
  margin-right: ${({theme:e})=>e.spacing["spacing-l"]};
`,Wn=Object(r.c)(ae.a)`
  line-height: 1 !important;
`,Hn=Object(r.c)(jn.a)`
  div {
    transition-property: opacity, visibility;
  }
`;var $n=c.a.memo(Object(x.f)(({intl:e,width:t,height:a,selectedMac:r,activeChannelFilter:l})=>{var o,E,s,m,d;const _=Object(n.useRef)(null),u=Object(j.m)(),{preferences:{dateFormat:p,timeFormat:O}}=Object(i.useSelector)(Kt.Q),I=Object(i.useSelector)(Ln.d),g=Object(i.useSelector)(Kt.O),{startDate:h,endDate:C,isDefaultPreset:R,barChunkSize:v}=Object(i.useSelector)(Z.selectRelevantRangeParams),{dashboardStatsGranularity:f}=Object(i.useSelector)(Z.selectStatsDateRangeInfo),{device_stats:T,site_stats:D}=Object(i.useSelector)(b.selectAggregatedDashboardStats),y=t-25-25,P=((e,t,a)=>{if("all"===a)return t;const n=e.find(e=>e.mac_address===a);return n?n.stats:[]})(T,D,r),S=((e,t)=>{var a,n;const c=[...e];if(t){const e=c.length,t=Object(Gt.subMinutes)(Date.now(),5);(null===(n=Object(Gt.startOfHour)(null===(a=null==c?void 0:c[e-1])||void 0===a?void 0:a.timestamp))||void 0===n?void 0:n.getTime())===Object(Gt.startOfHour)(t).getTime()&&(c[c.length-1]={...c[c.length-1],timestamp:Object(Gt.startOfHour)(Object(Gt.addHours)(t,1)).getTime()})}return c})(P,R),A=Object(Vn.a)(O,g),N=Object(n.useMemo)(()=>Math.max(...S.map(e=>{var t,a;return null===(a=null===(t=e.wifi_connectivity)||void 0===t?void 0:t.clients)||void 0===a?void 0:a.total})),[S]),L=Object(n.useMemo)(()=>N>100?"grouped":"stacked",[N]),V=Object(n.useMemo)(()=>((e,t)=>e.length?e.map(({wifi_satisfaction:e,timestamp:a})=>{let n=Math.max(e.total,0);return t===ea.a.NA&&(n=Math.max(e.na,0)),t===ea.a.NG&&(n=Math.max(e.ng,0)),{x:a,y:Math.min(n,100)}}):[])(S,l.id),[S,l.id]),w=null===(o=V.slice(-1)[0])||void 0===o?void 0:o.x,M=R?Object(Vn.f)(e,C,I,g):Object(Vn.d)(h,C,I,w,g),F=Object(n.useMemo)(()=>(e=>{const t=2*e;return t>1e3?Object(Vn.e)(1e4,11):t>100?Object(Vn.e)(1e3,11):t>50?Object(Vn.e)(100,11):Object(Vn.e)(Math.max(t,50),11)})(N),[N]),U=Object(n.useMemo)(()=>(e=>{const t=De.a.scale([e.motifPalette.info,e.motifPalette.success]).domain([0,100]);return Object(Vn.g)(0,90,11).map(e=>({...e,label:c.a.createElement("tspan",{fill:t(e.value).css()},String(e.value),"%")}))})(u),[u]),B=null!==(s=null===(E=null==M?void 0:M[0])||void 0===E?void 0:E.value)&&void 0!==s?s:h.getTime(),z=null!==(d=null===(m=null==M?void 0:M[M.length-1])||void 0===m?void 0:m.value)&&void 0!==d?d:C.getTime(),k=Object(n.useMemo)(()=>((e,t,a,n,c)=>{if(!e.length)return[];const r=e.map(({wifi_connectivity:e,timestamp:a})=>{var n,c,r;let l=(null===(n=null==e?void 0:e.clients)||void 0===n?void 0:n.total)||0;return t===ea.a.NA&&(l=(null===(c=null==e?void 0:e.clients)||void 0===c?void 0:c.na)||0),t===ea.a.NG&&(l=(null===(r=null==e?void 0:e.clients)||void 0===r?void 0:r.ng)||0),{time:a,connects:l}}),{chunkedData:l}=r.reduce(({chunkedData:e,currentInterval:t},a)=>{if(a.time<n||a.time>=c)return{chunkedData:e,currentInterval:t};if(!t||a.time-t>=36e5)return e.push(a),{chunkedData:e,currentInterval:t?a.time:n};const r=e[e.length-1];return e[e.length-1]={time:r.time,connects:Math.max(r.connects,a.connects)},{chunkedData:e,currentInterval:t}},{chunkedData:[],currentInterval:null});return l.reduce((e,{time:t,connects:n})=>{if("grouped"===a)return e.push({x:t,y:n,connects:n}),e;const c=Object(Fn.a)(n,()=>({x:t,y:1,connects:n}));return c.length&&e.push(c),e},[])})(P,l.id,L,B,z),[P,l.id,L,B,z]);return c.a.createElement(Un,null,c.a.createElement(Nn.a,{xAxis:M,yAxis:F,y2Axis:U,width:t,height:Math.max(a,200),margin:[20,25,30,25],xLabelsBetween:!R,yAxisLabelSpacing:15,renderChartElements:(e,t,a,n,r,l,i,o,E)=>{const s={...t,seriesX:t.seriesX-f.grain/2};return c.a.createElement("g",null,c.a.createElement("defs",null,c.a.createElement("clipPath",{id:"chartClipPath"},c.a.createElement("rect",{x:25,y:"0",width:y,height:"100%"}))),c.a.createElement("g",{clipPath:"url(#chartClipPath)"},c.a.createElement(xn.a,{data:V,maxY:a,mouseData:s,getCoordinates:(t,a)=>e(t,a,!0),lineColor:"transparent",variant:"gradientArea",customGradientId:"wifiExperienceGradient",forY2Axis:!0,y2AxisMax:o,y2AxisMin:E,renderCustomGradient:()=>c.a.createElement("defs",null,c.a.createElement("linearGradient",{id:"wifiExperienceGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},c.a.createElement("stop",{offset:"0%",stopColor:u.motifPalette.success,stopOpacity:.6}),c.a.createElement("stop",{offset:"100%",stopColor:u.motifPalette.info,stopOpacity:.6}))),tooltipPortal:_?_.current:void 0,renderTooltip:({hidden:e,left:t,top:a,x:n,y:r})=>{if(!n||!r)return null;const l="stacked"===L,i=k.find(e=>{const t=l?e[0]:e;return(null==t?void 0:t.x)===n||Math.abs(n-(null==t?void 0:t.x))<=v}),o=l?null==i?void 0:i[0]:i;return c.a.createElement(Hn,{left:t,top:a,message:c.a.createElement(Bn,null,c.a.createElement($.g,{justifyContent:"space-between"},c.a.createElement(kn,null,c.a.createElement(x.c,{id:"COMMON_WORD_DATE"})),c.a.createElement("div",null,Object(qt.e)(n,I,p))),c.a.createElement(zn,{justifyContent:"space-between"},c.a.createElement(kn,null,c.a.createElement(x.c,{id:"COMMON_WORD_TIME"})),c.a.createElement("div",null,Object(qt.e)(n,I,A))),c.a.createElement(zn,{justifyContent:"space-between"},c.a.createElement(kn,null,c.a.createElement(x.c,{id:"DASHBOARD_WIFI_CHART_TOOLTIP_EXP"})),c.a.createElement(Wn,{color:Object(Tn.c)(Math.floor(r))},Math.floor(r),"%")),o&&c.a.createElement(zn,{justifyContent:"space-between"},c.a.createElement(kn,null,c.a.createElement(x.c,{id:"COMMON_WORD_CLIENTS"})),c.a.createElement("div",null,o.connects))),hidden:e,topMargin:4,tooltipProps:{position:"top"},width:"auto"})}}),k.length&&c.a.createElement(Mn,{barData:k,getCoordinates:e,chunkedItemSize:v,size:r,variant:L})))}}),c.a.createElement("div",{ref:_}))})),Gn=()=>{const{motif:e}=Object(E.a)(),t="dark"===e?"#191919":"#EDEDF0",a="dark"===e?"#232323":"#DBDCE1",n="dark"===e?"#3F3F3F":"#FBFBFC";return c.a.createElement("svg",{height:"100%",preserveAspectRatio:"none",viewBox:"0 0 981 220",fill:"none"},c.a.createElement("rect",{y:"74",width:"981",height:"1",fill:t}),c.a.createElement("rect",{y:"110",width:"981",height:"1",fill:t}),c.a.createElement("rect",{y:"145",width:"981",height:"1",fill:t}),c.a.createElement("rect",{y:"181",width:"981",height:"1",fill:t}),c.a.createElement("path",{opacity:"0.8",fillRule:"evenodd",clipRule:"evenodd",d:"M0 220V39.5135C0 37.9577 1.69825 36.9976 3.03126 37.7998L8.68024 41.1994C9.55543 41.7261 10.6869 41.5086 11.3045 40.6951L20.4375 28.6643L29.5917 15.6368C30.1924 14.7818 31.35 14.5334 32.2486 15.0666L40.6058 20.025C40.7842 20.1309 40.945 20.2638 41.0825 20.4191L50.1298 30.6357C50.7045 31.2847 51.6319 31.4895 52.4266 31.143L61.1797 27.3256C61.2681 27.2871 61.3536 27.2421 61.4356 27.1912L69.8997 21.9332C70.8113 21.3669 72.0073 21.621 72.6099 22.5089L81.1549 35.0988C81.5271 35.6472 82.1469 35.9756 82.8097 35.9756H91.373C91.7617 35.9756 92.142 35.8623 92.4674 35.6496L102.188 29.2949L111.61 22.9819C112.113 22.6446 112.743 22.5537 113.321 22.735L122.625 25.6508L132.639 28.9429C132.775 28.9876 132.906 29.0467 133.029 29.1192L141.581 34.1511C142.433 34.6526 143.523 34.456 144.147 33.6887L152.714 23.1463C153.075 22.7024 153.608 22.4342 154.18 22.4095L162.689 22.0418C163.209 22.0194 163.717 22.2006 164.106 22.5471L172.782 30.2817C173.355 30.7924 174.169 30.9303 174.878 30.6366L183.938 26.8837L192.785 22.581C193.595 22.1872 194.568 22.3831 195.162 23.0596L203.8 32.8917C204.167 33.3091 204.691 33.5552 205.246 33.5709L214.322 33.8273C214.502 33.8324 214.683 33.8131 214.858 33.7699L224.116 31.4856C224.566 31.3745 224.964 31.1103 225.241 30.7383L234.374 18.4725C234.783 17.9228 235.445 17.6209 236.129 17.6726L245.25 18.3627L254.63 19.1856C255.167 19.2326 255.661 19.4937 256.002 19.91L265.353 31.3157C265.572 31.5835 265.718 31.9037 265.777 32.2449L274.718 84.273C275.059 86.2567 277.786 86.5511 278.542 84.6858L283.646 72.0975C283.87 71.5448 284.329 71.1209 284.898 70.9415L295.681 67.5424C296.11 67.4069 296.573 67.4205 296.994 67.5807L304.382 70.3942C305.528 70.8307 306.793 70.142 307.049 68.9424L316.536 24.4684C316.687 23.7585 317.212 23.1864 317.906 22.9735L326.641 20.2949C326.878 20.2221 327.1 20.1057 327.295 19.9517L336.81 12.4288C337.078 12.2168 337.396 12.077 337.734 12.0229L346.639 10.5953C347.151 10.5132 347.675 10.6332 348.1 10.9299L357.534 17.5127C357.615 17.5694 357.692 17.6321 357.764 17.7002L366.623 26.0831C367.343 26.7639 368.452 26.8155 369.232 26.2046L377.307 19.8761C377.802 19.4877 378.452 19.3553 379.06 19.5188L387.525 21.795C388.03 21.9308 388.568 21.8635 389.024 21.6075L397.515 16.8396C398.143 16.4868 398.912 16.4992 399.529 16.872L408.236 22.1375C408.571 22.3402 408.84 22.637 409.008 22.9909L417.173 40.1842C417.895 41.7029 420.054 41.708 420.782 40.1929L428.938 23.2294C429.101 22.8906 429.356 22.6046 429.674 22.4041L438.203 17.0276C438.923 16.5733 439.852 16.6253 440.518 17.1572L448.62 23.633C449.232 24.1222 450.074 24.2089 450.773 23.8547L458.738 19.8195C459.415 19.4762 460.229 19.5464 460.838 20.0006L468.513 25.7278C469.377 26.3725 470.597 26.2164 471.271 25.375L479.269 15.3861C479.859 14.6489 480.885 14.4251 481.728 14.8493L490.112 19.0639C490.368 19.1925 490.593 19.3747 490.772 19.598L498.989 29.8232C499.842 30.8842 501.482 30.802 502.225 29.661L509.999 17.7113C510.539 16.882 511.603 16.5718 512.504 16.9817L520.693 20.7086C520.997 20.8471 521.331 20.9071 521.664 20.8831L530.266 20.2645C530.956 20.2149 531.571 19.8126 531.893 19.2007L540.848 2.17465C541.284 1.34584 542.236 0.930488 543.14 1.17512L550.845 3.26023C551.454 3.425 551.949 3.8673 552.182 4.45362L562.031 29.2949L571.04 53.9232C571.573 55.3814 573.492 55.7022 574.471 54.4966L581.125 46.2984C581.853 45.4017 583.187 45.3061 584.035 46.0899L591.971 53.4219C592.423 53.8399 593.043 54.0261 593.651 53.9266L602.628 52.4573C602.813 52.4271 602.992 52.3713 603.161 52.2914L611.161 48.506C612.219 48.0057 613.478 48.5156 613.889 49.6106L623.235 74.4965C623.307 74.6877 623.408 74.8668 623.534 75.0275L631.611 85.3264C632.517 86.4821 634.319 86.2993 634.974 84.9851L642.725 69.4504C643.277 68.343 644.693 67.9981 645.693 68.7273L652.209 73.4787C653.167 74.1773 654.519 73.8937 655.116 72.869L663.366 58.6971C663.858 57.852 664.889 57.4866 665.803 57.8331L672.695 60.4452C673.677 60.8172 674.779 60.3672 675.22 59.4147L684.581 39.1745C684.631 39.0666 684.691 38.9634 684.759 38.866L694.355 25.1777C694.686 24.7064 695.203 24.4003 695.775 24.3377L704.519 23.3812C704.894 23.3401 705.274 23.4063 705.614 23.5721L714.235 27.7807C714.898 28.1044 715.686 28.0366 716.284 27.6042L725.265 21.1121C725.441 20.9847 725.637 20.8868 725.845 20.8225L734.754 18.0638C735.378 17.8706 736.057 17.9944 736.573 18.3954L745.412 25.2679C745.772 25.5481 746.218 25.6966 746.674 25.6887L755.875 25.5287C756.082 25.5251 756.287 25.4893 756.484 25.4225L765.439 22.3772C766.046 22.1706 766.716 22.2681 767.24 22.6393L775.628 28.5877C776.24 29.0218 777.044 29.0767 777.709 28.7299L786.476 24.1605C786.719 24.0342 786.984 23.9589 787.257 23.9392L797.062 23.2328L806.597 21.5223C807.04 21.4428 807.497 21.5151 807.894 21.7273L817.106 26.655C817.366 26.7936 817.652 26.8734 817.946 26.8887L827.529 27.3876C827.655 27.3941 827.782 27.3887 827.907 27.3714L837.385 26.0614C837.746 26.0114 838.115 26.0613 838.45 26.2057L847.364 30.0455C847.87 30.2634 848.263 30.6803 848.452 31.1979L856.496 53.2869C857.135 55.041 859.615 55.041 860.254 53.2869L868.298 31.1979C868.487 30.6803 868.881 30.2634 869.386 30.0455L878.021 26.3258C878.526 26.1083 879.099 26.1083 879.604 26.3258L888.759 30.2697C888.94 30.3474 889.108 30.4514 889.258 30.5781L897.489 37.5261C898.419 38.3107 899.828 38.0907 900.474 37.06L908.722 23.902C909.17 23.1874 910.018 22.8306 910.842 23.01L918.722 24.726C919.331 24.8586 919.966 24.7 920.441 24.2971L929.906 16.2688L938.66 10.2588C939.495 9.68494 940.628 9.82717 941.296 10.5898L948.904 19.2758C949.678 20.1592 951.042 20.189 951.854 19.3403L961.5 9.25264L969.697 1.08105C970.337 0.443097 971.325 0.313455 972.108 0.764752L979.999 5.31399C980.618 5.67109 981 6.33169 981 7.04668V220",fill:a}),c.a.createElement("path",{opacity:"0.5",d:"M8 98.5741C8 97.4695 8.89543 96.5741 10 96.5741C11.1046 96.5741 12 97.4695 12 98.5741V220H8V98.5741Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M40 98.5741C40 97.4695 40.8954 96.5741 42 96.5741C43.1046 96.5741 44 97.4695 44 98.5741V220H40V98.5741Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M32 98.5741C32 97.4695 32.8954 96.5741 34 96.5741C35.1046 96.5741 36 97.4695 36 98.5741V220H32V98.5741Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M16 172.197C16 171.092 16.8954 170.197 18 170.197C19.1046 170.197 20 171.092 20 172.197V220H16V172.197Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M48 172.197C48 171.092 48.8954 170.197 50 170.197C51.1046 170.197 52 171.092 52 172.197V220H48V172.197Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M24 128.889C24 127.785 24.8954 126.889 26 126.889C27.1046 126.889 28 127.785 28 128.889V220H24V128.889Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M57 128.889C57 127.785 57.8954 126.889 59 126.889C60.1046 126.889 61 127.785 61 128.889V220H57V128.889Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M65 71.507C65 70.4024 65.8954 69.507 67 69.507C68.1046 69.507 69 70.4024 69 71.507V220H65V71.507Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M73 46.6052C73 45.5007 73.8954 44.6052 75 44.6052C76.1046 44.6052 77 45.5007 77 46.6052V220H73V46.6052Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M81 144.047C81 142.942 81.8954 142.047 83 142.047C84.1046 142.047 85 142.942 85 144.047V220H81V144.047Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M89 79.0858C89 77.9812 89.8954 77.0858 91 77.0858C92.1046 77.0858 93 77.9812 93 79.0858V220H89V79.0858Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M97 173.279C97 172.175 97.8954 171.279 99 171.279C100.105 171.279 101 172.175 101 173.279V220H97V173.279Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M105 61.7628C105 60.6582 105.895 59.7628 107 59.7628C108.105 59.7628 109 60.6582 109 61.7628V220H105V61.7628Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M113 144.047C113 142.942 113.895 142.047 115 142.047C116.105 142.047 117 142.942 117 144.047V220H113V144.047Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M121 46.6052C121 45.5007 121.895 44.6052 123 44.6052C124.105 44.6052 125 45.5007 125 46.6052V220H121V46.6052Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M129 177.61C129 176.505 129.895 175.61 131 175.61C132.105 175.61 133 176.505 133 177.61V220H129V177.61Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M137 139.716C137 138.611 137.895 137.716 139 137.716C140.105 137.716 141 138.611 141 139.716V220H137V139.716Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M145 80.1684C145 79.0639 145.895 78.1684 147 78.1684C148.105 78.1684 149 79.0639 149 80.1684V220H145V80.1684Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M153.407 160.36C153.407 159.256 154.321 158.36 155.426 158.36C156.531 158.36 157.445 159.256 157.445 160.36V220H153.407V160.36Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M161.481 186.929C161.481 185.824 162.395 184.929 163.5 184.929C164.605 184.929 165.518 185.824 165.518 186.929V220H161.481V186.929Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M169.556 106.159C169.556 105.055 170.469 104.159 171.574 104.159C172.679 104.159 173.593 105.055 173.593 106.159V220H169.556V106.159Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M177.63 96.5947C177.63 95.4901 178.544 94.5947 179.648 94.5947C180.753 94.5947 181.667 95.4901 181.667 96.5947V220H177.63V96.5947Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M185.704 79.5905C185.704 78.486 186.618 77.5905 187.722 77.5905C188.827 77.5905 189.741 78.486 189.741 79.5905V220H185.704V79.5905Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M193.778 85.9671C193.778 84.8625 194.692 83.9671 195.796 83.9671C196.901 83.9671 197.815 84.8625 197.815 85.9671V220H193.778V85.9671Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M201.852 85.9671C201.852 84.8625 202.766 83.9671 203.87 83.9671C204.975 83.9671 205.889 84.8625 205.889 85.9671V220H201.852V85.9671Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M209.926 85.9671C209.926 84.8625 210.84 83.9671 211.944 83.9671C213.049 83.9671 213.963 84.8625 213.963 85.9671V220H209.926V85.9671Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M218 96.5947C218 95.4901 218.914 94.5947 220.019 94.5947C221.123 94.5947 222.037 95.4901 222.037 96.5947V220H218V96.5947Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M226.074 106.159C226.074 105.055 226.988 104.159 228.093 104.159C229.197 104.159 230.111 105.055 230.111 106.159V220H226.074V106.159Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M234.148 126.352C234.148 125.247 235.062 124.352 236.167 124.352C237.271 124.352 238.185 125.247 238.185 126.352V220H234.148V126.352Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M242.222 153.984C242.222 152.879 243.136 151.984 244.241 151.984C245.345 151.984 246.259 152.879 246.259 153.984V220H242.222V153.984Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M250.296 144.419C250.296 143.314 251.21 142.419 252.315 142.419C253.419 142.419 254.333 143.314 254.333 144.419V220H250.296V144.419Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M258.37 131.666C258.37 130.561 259.284 129.666 260.389 129.666C261.493 129.666 262.407 130.561 262.407 131.666V220H258.37V131.666Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M266.444 122.101C266.444 120.996 267.358 120.101 268.463 120.101C269.568 120.101 270.481 120.996 270.481 122.101V220H266.444V122.101Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M275 131.055C275 129.95 275.895 129.055 277 129.055C278.105 129.055 279 129.95 279 131.055V220H275V131.055Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M283 125.641C283 124.537 283.895 123.641 285 123.641C286.105 123.641 287 124.537 287 125.641V220H283V125.641Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M291 112.649C291 111.544 291.895 110.649 293 110.649C294.105 110.649 295 111.544 295 112.649V220H291V112.649Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M299 103.987C299 102.883 299.895 101.987 301 101.987C302.105 101.987 303 102.883 303 103.987V220H299V103.987Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M307 82.3338C307 81.2292 307.895 80.3338 309 80.3338C310.105 80.3338 311 81.2292 311 82.3338V220H307V82.3338Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M315 131.055C315 129.95 315.895 129.055 317 129.055C318.105 129.055 319 129.95 319 131.055V220H315V131.055Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M323 88.8299C323 87.7253 323.895 86.8299 325 86.8299C326.105 86.8299 327 87.7253 327 88.8299V220H323V88.8299Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M331 67.1762C331 66.0717 331.895 65.1762 333 65.1762C334.105 65.1762 335 66.0717 335 67.1762V220H331V67.1762Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M339 116.98C339 115.875 339.895 114.98 341 114.98C342.105 114.98 343 115.875 343 116.98V220H339V116.98Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M347 88.8299C347 87.7253 347.895 86.8299 349 86.8299C350.105 86.8299 351 87.7253 351 88.8299V220H347V88.8299Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M355 111.566C355 110.462 355.895 109.566 357 109.566C358.105 109.566 359 110.462 359 111.566V220H355V111.566Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M363 73.6723C363 72.5678 363.895 71.6723 365 71.6723C366.105 71.6723 367 72.5678 367 73.6723V220H363V73.6723Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M371 116.98C371 115.875 371.895 114.98 373 114.98C374.105 114.98 375 115.875 375 116.98V220H371V116.98Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M379 54.184C379 53.0795 379.895 52.184 381 52.184H382C383.105 52.184 384 53.0795 384 54.184V220H379V54.184Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M388 137.551C388 136.446 388.895 135.551 390 135.551C391.105 135.551 392 136.446 392 137.551V220H388V137.551Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M396 88.8299C396 87.7253 396.895 86.8299 398 86.8299C399.105 86.8299 400 87.7253 400 88.8299V220H396V88.8299Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M404 68.2589C404 67.1543 404.895 66.2589 406 66.2589C407.105 66.2589 408 67.1543 408 68.2589V220H404V68.2589Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M412 46.6052C412 45.5007 412.895 44.6052 414 44.6052C415.105 44.6052 416 45.5007 416 46.6052V220H412V46.6052Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M420 45.5226C420 44.418 420.895 43.5226 422 43.5226C423.105 43.5226 424 44.418 424 45.5226V220H420V45.5226Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M427.926 85.9671C427.926 84.8625 428.84 83.9671 429.944 83.9671C431.049 83.9671 431.963 84.8625 431.963 85.9671V220H427.926V85.9671Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M436 116.787C436 115.682 436.914 114.787 438.019 114.787C439.123 114.787 440.037 115.682 440.037 116.787V220H436V116.787Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M444.074 76.4023C444.074 75.2977 444.988 74.4023 446.093 74.4023C447.197 74.4023 448.111 75.2977 448.111 76.4023V220H444.074V76.4023Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M452.148 80.6533C452.148 79.5488 453.062 78.6533 454.167 78.6533C455.271 78.6533 456.185 79.5488 456.185 80.6533V220H452.148V80.6533Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M460.222 89.1554C460.222 88.0508 461.136 87.1554 462.241 87.1554C463.345 87.1554 464.259 88.0508 464.259 89.1554V220H460.222V89.1554Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M468.296 73.214C468.296 72.1094 469.21 71.214 470.315 71.214C471.419 71.214 472.333 72.1094 472.333 73.214V220H468.296V73.214Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M476.37 89.1554C476.37 88.0508 477.284 87.1554 478.389 87.1554C479.493 87.1554 480.407 88.0508 480.407 89.1554V220H476.37V89.1554Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M484.444 64.712C484.444 63.6074 485.358 62.712 486.463 62.712C487.567 62.712 488.481 63.6074 488.481 64.712V220H484.444V64.712Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M815.481 64.712C815.481 63.6074 816.395 62.712 817.5 62.712C818.605 62.712 819.518 63.6074 819.518 64.712V220H815.481V64.712Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M492.519 48.7706C492.519 47.666 493.433 46.7706 494.537 46.7706C495.642 46.7706 496.556 47.666 496.556 48.7706V220H492.519V48.7706Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M823.556 48.7706C823.556 47.666 824.47 46.7706 825.574 46.7706C826.679 46.7706 827.593 47.666 827.593 48.7706V220H823.556V48.7706Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M500.593 70.0257C500.593 68.9212 501.506 68.0257 502.611 68.0257C503.716 68.0257 504.63 68.9212 504.63 70.0257V220H500.593V70.0257Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M831.63 70.0257C831.63 68.9212 832.544 68.0257 833.648 68.0257C834.753 68.0257 835.667 68.9212 835.667 70.0257V220H831.63V70.0257Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M508.667 80.6533C508.667 79.5488 509.58 78.6533 510.685 78.6533C511.79 78.6533 512.704 79.5488 512.704 80.6533V220H508.667V80.6533Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M839.704 80.6533C839.704 79.5488 840.618 78.6533 841.722 78.6533C842.827 78.6533 843.741 79.5488 843.741 80.6533V220H839.704V80.6533Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M516.741 89.1554C516.741 88.0508 517.655 87.1554 518.759 87.1554C519.864 87.1554 520.778 88.0508 520.778 89.1554V220H516.741V89.1554Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M847.778 89.1554C847.778 88.0508 848.692 87.1554 849.796 87.1554C850.901 87.1554 851.815 88.0508 851.815 89.1554V220H847.778V89.1554Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M524.815 60.4609C524.815 59.3564 525.729 58.4609 526.833 58.4609C527.938 58.4609 528.852 59.3564 528.852 60.4609V220H524.815V60.4609Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M855.852 60.4609C855.852 59.3564 856.766 58.4609 857.87 58.4609C858.975 58.4609 859.889 59.3564 859.889 60.4609V220H855.852V60.4609Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M532.889 54.0844C532.889 52.9798 533.803 52.0844 534.907 52.0844C536.012 52.0844 536.926 52.9798 536.926 54.0844V220H532.889V54.0844Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M863.926 54.0844C863.926 52.9798 864.84 52.0844 865.944 52.0844C867.049 52.0844 867.963 52.9798 867.963 54.0844V220H863.926V54.0844Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M540.963 64.712C540.963 63.6074 541.877 62.712 542.981 62.712C544.086 62.712 545 63.6074 545 64.712V220H540.963V64.712Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M872 30.365C872 29.2604 872.895 28.365 874 28.365C875.105 28.365 876 29.2604 876 30.365V220H872V30.365Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M549.037 85.9671C549.037 84.8625 549.951 83.9671 551.056 83.9671C552.16 83.9671 553.074 84.8625 553.074 85.9671V220H549.037V85.9671Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M880 56.3494C880 55.2448 880.895 54.3494 882 54.3494C883.105 54.3494 884 55.2448 884 56.3494V220H880V56.3494Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M557.111 109.348C557.111 108.243 558.025 107.348 559.13 107.348C560.234 107.348 561.148 108.243 561.148 109.348V220H557.111V109.348Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M888 84.4992C888 83.3946 888.895 82.4992 890 82.4992C891.105 82.4992 892 83.3946 892 84.4992V220H888V84.4992Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M565.185 77.4651C565.185 76.3605 566.099 75.4651 567.204 75.4651C568.308 75.4651 569.222 76.3605 569.222 77.4651V220H565.185V77.4651Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M896 45.5226C896 44.418 896.895 43.5226 898 43.5226C899.105 43.5226 900 44.418 900 45.5226V220H896V45.5226Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M573.259 99.7829C573.259 98.6784 574.173 97.7829 575.278 97.7829C576.382 97.7829 577.296 98.6784 577.296 99.7829V220H573.259V99.7829Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M904 72.5897C904 71.4851 904.895 70.5897 906 70.5897C907.105 70.5897 908 71.4851 908 72.5897V220H904V72.5897Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M581.333 70.0257C581.333 68.9212 582.247 68.0257 583.352 68.0257C584.456 68.0257 585.37 68.9212 585.37 70.0257V220H581.333V70.0257Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M912 36.8611C912 35.7565 912.895 34.8611 914 34.8611C915.105 34.8611 916 35.7565 916 36.8611V220H912V36.8611Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M589.407 160.36C589.407 159.256 590.321 158.36 591.426 158.36C592.531 158.36 593.445 159.256 593.445 160.36V220H589.407V160.36Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M920 147.295C920 146.19 920.895 145.295 922 145.295C923.105 145.295 924 146.19 924 147.295V220H920V147.295Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M597.481 153.984C597.481 152.879 598.395 151.984 599.5 151.984C600.605 151.984 601.518 152.879 601.518 153.984V220H597.481V153.984Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M929 138.633C929 137.529 929.895 136.633 931 136.633C932.105 136.633 933 137.529 933 138.633V220H929V138.633Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M605.556 97.6574C605.556 96.5528 606.47 95.6574 607.574 95.6574C608.679 95.6574 609.593 96.5528 609.593 97.6574V220H605.556V97.6574Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M937 70.4243C937 69.3197 937.895 68.4243 939 68.4243C940.105 68.4243 941 69.3197 941 70.4243V220H937V70.4243Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M613.63 89.1554C613.63 88.0508 614.544 87.1554 615.648 87.1554C616.753 87.1554 617.667 88.0508 617.667 89.1554V220H613.63V89.1554Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M945 60.6801C945 59.5756 945.895 58.6801 947 58.6801C948.105 58.6801 949 59.5756 949 60.6801V220H945V60.6801Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M621.704 80.6533C621.704 79.5488 622.618 78.6533 623.722 78.6533C624.827 78.6533 625.741 79.5488 625.741 80.6533V220H621.704V80.6533Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M953 49.8533C953 48.7487 953.895 47.8533 955 47.8533C956.105 47.8533 957 48.7487 957 49.8533V220H953V49.8533Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M629.778 94.4692C629.778 93.3646 630.692 92.4692 631.796 92.4692C632.901 92.4692 633.815 93.3646 633.815 94.4692V220H629.778V94.4692Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M961 66.0936C961 64.989 961.895 64.0936 963 64.0936C964.105 64.0936 965 64.989 965 66.0936V220H961V66.0936Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M637.852 105.097C637.852 103.992 638.766 103.097 639.87 103.097C640.975 103.097 641.889 103.992 641.889 105.097V220H637.852V105.097Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M969 79.0858C969 77.9812 969.895 77.0858 971 77.0858C972.105 77.0858 973 77.9812 973 79.0858V220H969V79.0858Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M645.926 131.666C645.926 130.561 646.84 129.666 647.944 129.666C649.049 129.666 649.963 130.561 649.963 131.666V220H645.926V131.666Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M977 111.566C977 110.462 977.895 109.566 979 109.566C980.105 109.566 981 110.462 981 111.566V220H977V111.566Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M654 164.611C654 163.507 654.914 162.611 656.019 162.611C657.123 162.611 658.037 163.507 658.037 164.611V220H654V164.611Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M662.074 155.046C662.074 153.942 662.988 153.046 664.093 153.046C665.197 153.046 666.111 153.942 666.111 155.046V220H662.074V155.046Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M670.148 126.352C670.148 125.247 671.062 124.352 672.167 124.352C673.271 124.352 674.185 125.247 674.185 126.352V220H670.148V126.352Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M678.222 85.9671C678.222 84.8625 679.136 83.9671 680.241 83.9671C681.345 83.9671 682.259 84.8625 682.259 85.9671V220H678.222V85.9671Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M686.296 113.599C686.296 112.494 687.21 111.599 688.315 111.599C689.419 111.599 690.333 112.494 690.333 113.599V220H686.296V113.599Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M694.37 126.352C694.37 125.247 695.284 124.352 696.389 124.352C697.493 124.352 698.407 125.247 698.407 126.352V220H694.37V126.352Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M702.444 186.929C702.444 185.824 703.358 184.929 704.463 184.929C705.567 184.929 706.481 185.824 706.481 186.929V220H702.444V186.929Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M710.519 166.737C710.519 165.632 711.433 164.737 712.537 164.737C713.642 164.737 714.556 165.632 714.556 166.737V220H710.519V166.737Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M718.593 125.289C718.593 124.184 719.506 123.289 720.611 123.289C721.716 123.289 722.63 124.184 722.63 125.289V220H718.593V125.289Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M726.667 109.348C726.667 108.243 727.581 107.348 728.685 107.348C729.79 107.348 730.704 108.243 730.704 109.348V220H726.667V109.348Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M734.741 128.477C734.741 127.373 735.655 126.477 736.759 126.477C737.864 126.477 738.778 127.373 738.778 128.477V220H734.741V128.477Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M742.815 141.23C742.815 140.126 743.729 139.23 744.833 139.23C745.938 139.23 746.852 140.126 746.852 141.23V220H742.815V141.23Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M750.889 90.2182C750.889 89.1136 751.803 88.2182 752.907 88.2182C754.012 88.2182 754.926 89.1136 754.926 90.2182V220H750.889V90.2182Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M758.963 112.536C758.963 111.431 759.877 110.536 760.981 110.536C762.086 110.536 763 111.431 763 112.536V220H758.963V112.536Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M767.037 125.289C767.037 124.184 767.951 123.289 769.056 123.289C770.16 123.289 771.074 124.184 771.074 125.289V220H767.037V125.289Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M775.111 145.481C775.111 144.377 776.025 143.481 777.13 143.481C778.234 143.481 779.148 144.377 779.148 145.481V220H775.111V145.481Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M783.185 141.23C783.185 140.126 784.099 139.23 785.204 139.23C786.308 139.23 787.222 140.126 787.222 141.23V220H783.185V141.23Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M791.259 144.419C791.259 143.314 792.173 142.419 793.278 142.419C794.382 142.419 795.296 143.314 795.296 144.419V220H791.259V144.419Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M799.333 109.348C799.333 108.243 800.247 107.348 801.352 107.348C802.456 107.348 803.37 108.243 803.37 109.348V220H799.333V109.348Z",fill:n}),c.a.createElement("path",{opacity:"0.5",d:"M807.407 104.034C807.407 102.929 808.321 102.034 809.426 102.034C810.531 102.034 811.445 102.929 811.445 104.034V220H807.407V104.034Z",fill:n}))};const Yn=Object(r.c)(Pn)`
  color: ${({theme:e})=>e.motifPalette.uBlue03};
`;var Xn=()=>{const{active:e,total:t}=Object(i.useSelector)(b.selectAggregatedDashboardClientFingerprints);return c.a.createElement($.g,{flexDirection:"column"},c.a.createElement(Dn.a,{type:"title"},c.a.createElement(x.c,{id:"DASHBOARD_MODULE_ACTIVE_CLIENTS"})),c.a.createElement($.g,null,c.a.createElement(Yn,{weight:"bold"},c.a.createElement(c.a.Fragment,null,e+" ",c.a.createElement(x.c,{id:"DASHBOARD_MODULE_ACTIVE_CLIENTS_NOW"}))),c.a.createElement(Pn,{color:"tertiary",weight:"bold"},` / ${t} `,c.a.createElement(x.c,{id:"DASHBOARD_MODULE_ACTIVE_CLIENTS_TOTAL"}))))};const Kn=Object(r.c)($.g)`
  padding: 16px 24px;
  @media ${k.b.VIEWPORT_L_DOWN} {
    padding: 16px 20px;
  }
`,Zn=Object(r.c)($.g)`
  padding: 0 26px;
  @media ${k.b.VIEWPORT_L_DOWN} {
    padding: 0;
  }
`,qn=Object(r.c)($.g)`
  @media ${k.b.VIEWPORT_L_DOWN} {
    order: 1111;
    flex: 1 0 100%;
    justify-content: space-between;
  }
`,Jn=Object(r.c)("div")`
  position: absolute;
  top: 0;
  left: 0;
`,Qn=Object(r.c)(he.a)`
  button {
    span {
      font-size: ${({theme:e})=>e.fontSize["font-size-header-xs"]};
      @media ${k.b.VIEWPORT_XL_DOWN} {
        font-size: ${({theme:e})=>e.fontSize["font-size-caption"]};
      }
      @media ${k.b.VIEWPORT_L_DOWN} {
        font-size: ${({theme:e})=>e.fontSize["font-size-caption"]};
      }
    }
  }
`,ec=Object(r.c)(Pe.a)`
  width: 38px;
  height: 38px;

  @media ${k.b.VIEWPORT_XL_DOWN} {
    width: 30px;
    height: 30px;
  }
`,tc=Object(r.c)(ae.a)`
  @media ${k.b.VIEWPORT_XL_UP} {
    font-size: 16px !important;
  }
`,ac=Object(r.c)("div")`
  > div > div:first-child {
    padding: 0 ${({theme:e})=>e.spacing["spacing-l"]};

    @media ${k.b.VIEWPORT_L_DOWN} {
      padding: 0;
    }
  }
`,nc=({intl:e})=>{const t=Object(n.useRef)(null),a=Object(i.useSelector)(p.selectActiveAPDevices),r=Object(i.useSelector)(y.d),{site_stats:l}=Object(i.useSelector)(b.selectAggregatedDashboardStats),o=Object(ea.h)(e.formatMessage({id:"COMMON_ALL"})),[E,s]=Object(n.useState)("all"),[m,d]=Object(n.useState)(o[0]),{width:_,height:u}=Object(j.k)(t),O=l.reduce((e,{wifi_satisfaction:t})=>(-1!==t.total&&(e.sum+=t.total,e.count+=1),e),{sum:0,count:0}),I=O.count>0?Math.round(O.sum/O.count):-1,g=a.reduce((e,{satisfaction:t})=>(t&&-1!==t&&(e.sum+=t,e.count+=1),e),{sum:0,count:0}),h=g.count>0?Math.round(g.sum/g.count):r||-1,C=Object(n.useMemo)(()=>[{id:"all",image:c.a.createElement(ec,{deviceModel:p.DeviceModel.U7HD,deviceType:p.DeviceType.AP}),title:c.a.createElement(x.c,{id:"DASHBOARD_UDM_ALL_ACCESS_POINTS"}),subtitle:c.a.createElement(x.c,{id:"COMMON_NUMBER_OF_TOTAL",values:{total:a.length}}),info:Object(Tn.d)(h)?c.a.createElement(tc,{color:Object(Tn.c)(h)},Object(te.a)(h/100)):c.a.createElement(q.d,{color:"tertiary"},c.a.createElement(x.c,{id:"COMMON_NA"}))},...a.map(e=>({id:e.mac,image:c.a.createElement(ec,{deviceModel:e.model,deviceType:e.type}),title:Object(B.c)(e),subtitle:Object(B.a)(e),info:Object(Tn.d)(e.satisfaction)?c.a.createElement(tc,{color:Object(Tn.c)(e.satisfaction)},Object(te.a)(e.satisfaction/100)):c.a.createElement(q.d,{color:"tertiary"},c.a.createElement(x.c,{id:"COMMON_NA"}))}))],[a,h]);return c.a.createElement(rc,{wifiExperienceAverageNow:h,wifiExperienceAverageForDateRange:I,apDevices:C,selectedAp:E,setSelectedAp:s,channelFilterTabs:o,setActiveChannelFilter:d,chartContainerRef:t,width:_,height:u,activeChannelFilter:m,isLoaded:!0})},cc=({width:e,height:t,selectedAp:a,activeChannelFilter:n})=>e&&t?c.a.createElement($n,{width:e,height:t,selectedMac:a,activeChannelFilter:n}):null,rc=({wifiExperienceAverageNow:e,wifiExperienceAverageForDateRange:t,apDevices:a,selectedAp:n,setSelectedAp:r,channelFilterTabs:l,setActiveChannelFilter:i,chartContainerRef:o,width:s,height:m,isLoaded:d,activeChannelFilter:_})=>{const{motif:u}=Object(E.a)();return c.a.createElement(Kn,{width:"100%",height:"100%",flexDirection:"column"},c.a.createElement(Zn,{flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"},c.a.createElement($.g,{flex:"1"},d?c.a.createElement(Xn,null):c.a.createElement($.g,{width:"100%",flexDirection:"column"},c.a.createElement(Y.a,{width:136,height:16,marginBottom:6}),c.a.createElement(Y.a,{width:156,height:12}))),c.a.createElement(qn,{alignItems:"center"},c.a.createElement($.g,{marginRight:40},d?c.a.createElement(ac,null,c.a.createElement(fn.a,{devices:a,selectedDevice:n,setSelectedDevice:r,displaySubtitleForSelected:!0})):c.a.createElement($.g,{width:"100%",justifyContent:"space-between"},c.a.createElement($.g,{width:"100%",flexDirection:"column"},c.a.createElement(Y.a,{width:156,height:16,marginBottom:6}),c.a.createElement(Y.a,{width:76,height:12})))),c.a.createElement($.g,null,d?c.a.createElement(Qn,{disableScroll:!0,fullHeightTabs:!0,motif:u,tabs:l,onSelectTab:e=>i(e),variant:"tertiary"}):c.a.createElement($.g,null,c.a.createElement(Y.a,{width:28,height:16,marginRight:16}),c.a.createElement(Y.a,{width:28,height:16,marginRight:16}),c.a.createElement(Y.a,{width:28,height:16})))),c.a.createElement($.g,{flex:"1",flexDirection:"column",alignItems:"flex-end"},d?c.a.createElement(An,{now:e,avg:t}):c.a.createElement($.g,{width:"100%",flexDirection:"column"},c.a.createElement(Y.a,{width:146,height:16,marginBottom:6}),c.a.createElement(Y.a,{width:106,height:12})))),c.a.createElement($.g,{height:"100%"},d?c.a.createElement($.g,{flex:"1",minHeight:200,width:"100%",position:"relative",innerRef:o},c.a.createElement(Jn,null,c.a.createElement(cc,{width:s,height:m,selectedAp:n,activeChannelFilter:_}))):c.a.createElement($.g,{width:"100%",height:"100%"},c.a.createElement(Gn,null))))};var lc=Object(x.f)(e=>e.isLoaded?c.a.createElement(nc,Object.assign({},e)):c.a.createElement(rc,{isLoaded:!1}));const ic=()=>{const e=Object(i.useSelector)(Object(O.d)(O.a.WIFI_CONFIG_CREATED)),t=Object(i.useSelector)(p.selectActiveAPDevices).length>0,a=Object(n.useMemo)(()=>t?t&&!e?c.a.createElement(vn,null):c.a.createElement(lc,{isLoaded:!0}):c.a.createElement(En,null),[t,e]);return Object(j.f)([Object(O.c)(void 0,{crudCacheStrategy:{type:R.a.CACHE}})],a)};var oc=({isLoaded:e})=>e?c.a.createElement(ic,null):c.a.createElement(lc,{isLoaded:!1});const Ec=Object(r.c)("img")`
  position: relative;
  max-width: 100%;
  border-radius: ${({theme:e})=>e.spacing["spacing-s"]};
  object-fit: cover;
`,sc=Object(r.c)($.g)`
  margin: ${({theme:e})=>`${e.spacing["spacing-m"]} ${e.spacing["spacing-xl"]}`};
  @media ${k.b.VIEWPORT_L_UP} {
    margin: ${({theme:e})=>`${e.spacing["spacing-xl"]} ${e.spacing["spacing-xxxxxl"]}`};
  }
  > {
    &:not(:last-child) {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
    }
  }
`,mc=Object(r.c)("div")`
  position: relative;
  z-index: 1;
  opacity: 1;
  transition: all ${550}ms cubic-bezier(0.25, 0, 0.25, 1);
  padding: ${({theme:e})=>e.spacing["spacing-xl"]};
  @media ${k.b.VIEWPORT_XL_UP} {
    padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  }
`,dc=Object(r.c)($.g)`
  position: relative;
  background: ${({isDarkMode:e})=>e?"#161819":"#f3f4f5"};
  border-radius: ${({theme:e})=>e.spacing["spacing-l"]};
`,_c=Object(r.c)(ae.a)`
  color: ${({isDarkMode:e})=>e?_e.a["white-0"]:_e.a["grey-1"]};
  font-size: ${({theme:e})=>e.fontSize["font-size-l2"]};
  @media ${k.b.VIEWPORT_L_UP} {
    font-size: ${({theme:e})=>e.fontSize["font-size-xl"]};
  }
`,uc=Object(r.c)(ae.a)`
  ${({isDarkMode:e})=>e&&"color: rgba(255, 255, 255, 0.85);"}
  font-size: ${({theme:e})=>e.fontSize["font-size-s"]};
  @media ${k.b.VIEWPORT_L_UP} {
    font-size: ${({theme:e})=>e.fontSize["font-size-l"]};
  }
`,pc=Object(r.c)(F.a)`
  width: 120px;
  ${({theme:e})=>`\n    margin-top: ${e.spacing["spacing-m"]};\n    border: 1px solid ${e.colors.dashboardBorder};\n    border-radius: ${e.spacing["spacing-s"]};\n  `}
`,bc=Object(r.c)($.g)`
  white-space: nowrap;
`,Oc=Object(r.c)("div")`
  flex: 1 45%;
  transition: all ${550}ms cubic-bezier(0.25, 0, 0.25, 1);
  border: 1px solid ${({theme:e})=>e.colors.dashboardBorder};
  border-right: 0;
  @media ${k.b.VIEWPORT_L_DOWN} {
    flex: 1;
  }
  position: relative;
`,Ic=Object(r.c)(U.y)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({theme:e})=>e.motifPalette.neutral08};
  z-index: 1;
`,gc={exiting:{flex:"0 0 0",overflow:"hidden"},exited:{flex:"0 0 0",overflow:"hidden",borderTop:"none"}},hc={exiting:{opacity:0},exited:{display:"none"}},Cc={exiting:{opacity:1},exited:{opacity:1,position:"initial"}},Rc=({state:e,hideBanner:t,hasActiveAPs:a})=>{const r=Object(n.useRef)(),{motif:l}=Object(E.a)(),i="dark"===l;Object(n.useEffect)(()=>("exiting"===e&&a&&(r.current=setInterval(()=>{dispatchEvent(new Event("resize"))},20)),()=>{"exited"===e&&r.current&&clearInterval(r.current)}),[e,a]);const o=Object(n.useCallback)(()=>{window.open(z.a.uiStoreUdmPro,"_blank")},[]);return c.a.createElement(mc,{style:{...!a&&hc[e]}},c.a.createElement(dc,{height:"100%",justifyContent:"space-between",alignItems:"center",isDarkMode:i},c.a.createElement(Ic,{actionable:!0,onClick:()=>{t()}}),c.a.createElement($.g,{flex:"1",height:"100%"},c.a.createElement(Ec,{src:i?X.b:X.c})),c.a.createElement(sc,{flex:"0 0 20%",flexDirection:"column",alignItems:"center",alignSelf:"center"},c.a.createElement(bc,{flexDirection:"row",alignItems:"baseline"},c.a.createElement(X.a,{fill:i?_e.a["white-0"]:_e.a["grey-1"]}),c.a.createElement(_c,{isDarkMode:i,weight:"bold"}," ",c.a.createElement(x.c,{id:"DASHBOARD_DREAM_MACHINE_PRO_LABEL"}))),c.a.createElement(uc,{isDarkMode:i,color:"secondary",centered:!0},c.a.createElement(x.c,{id:"DASHBOARD_DREAM_MACHINE_PRO_DESCRIPTION"})),c.a.createElement(pc,{variant:i?"primary":"secondary",onClick:o},c.a.createElement(x.c,{id:"DASHBOARD_DREAM_MACHINE_PRO_BUTTON"}))),c.a.createElement($.g,{flex:"1",height:"100%"},c.a.createElement(Ec,{src:X.j}))))};var vc=({NoApsPlaceholder:e,isLoaded:t})=>{const a=Object(i.useSelector)(Kt.P),r=Object(i.useSelector)(Z.selectHasActiveWiFi),[l,o]=Object(n.useState)(!a.bypassDashboardUdmProAd),E=Object(i.useDispatch)(),s=()=>{E(Object(Kt.k)({...a,bypassDashboardUdmProAd:!0})),o(!1)};return c.a.createElement(ve.a,{in:l,timeout:550,unmountOnExit:!1},a=>c.a.createElement(Oc,{className:"udmProAd",style:{...r&&gc[a]}},c.a.createElement(Rc,{state:a,hideBanner:s,hasActiveAPs:r}),!r&&c.a.createElement(e,{isLoaded:t,placeholder:!l,style:{position:"absolute",top:0,left:0,right:0,transition:"all 550ms cubic-bezier(0.25, 0, 0.25, 1)",opacity:0,filter:"blur(4px) grayscale(1) opacity(0.35)",pointerEvents:"none",height:"100%",...Cc[a]}})))};const fc=Object(r.c)(ga.a)`
  position: relative;
  flex: 1 45%;

  @media ${k.b.VIEWPORT_L2_DOWN} {
    flex-direction: column;
  }

  @media ${k.b.VIEWPORT_L_DOWN} {
    flex: 1 70%;
  }
`,Tc=Object(r.c)(ga.a)`
  flex: 1 55%;

  @media ${k.b.VIEWPORT_L_DOWN} {
    flex: 1 auto;
  }
`,Dc=Object(r.c)($.g)`
  min-width: 50%;
  padding-left: 48px;

  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding-left: 32px;
  }
  @media ${k.b.VIEWPORT_L2_DOWN} {
    margin-right: 32px;
    padding-right: 0;
  }
`,yc=Object(r.c)($.g)`
  min-width: 50%;
  padding-right: 48px;

  @media ${k.b.VIEWPORT_XXL_DOWN} {
    padding-right: 32px;
  }
  @media ${k.b.VIEWPORT_L2_DOWN} {
    padding-right: 0;
    padding-left: 32px;
    margin-right: 32px;
  }
`,Pc=Object(r.c)($.g)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  span {
    line-height: 20px;
    &:last-child {
      margin-top: 7px;
    }
  }
`,Sc=({isLoaded:e,placeholder:t,style:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(fc,{style:a},c.a.createElement(Dc,{flex:"1"},c.a.createElement(Xa,{isLoaded:e,placeholder:t})),c.a.createElement(yc,{flex:"1"},c.a.createElement(Ka.ClientsModule,{isLoaded:e,placeholder:t}))),t&&c.a.createElement(Pc,{flexDirection:"column"},c.a.createElement(ae.a,{size:"header-xs",color:"primary",weight:"bold"},c.a.createElement(x.b,{id:"DASHBOARD_WIFI_MODULE_NO_AP_PLACEHOLDER_BANNER_TITLE"})),c.a.createElement(ae.a,{color:"tertiary"},c.a.createElement(x.b,{id:"DASHBOARD_WIFI_MODULE_NO_AP_PLACEHOLDER_BANNER_DESCRIPTION",values:{url:z.a.wiFi}}))));var Ac=({isLoaded:e})=>{const t=Object(i.useSelector)(Z.selectHasAnAdoptedGateway);return c.a.createElement($.g,{flexDirection:"column",flex:"1",width:"100%",height:"100%",position:"relative"},!e||t?c.a.createElement(Sc,{isLoaded:e}):c.a.createElement(vc,{isLoaded:e,NoApsPlaceholder:Sc}),c.a.createElement(Tc,null,c.a.createElement(oc,{isLoaded:e})))},jc=a(1125);const Nc=r.a`
  overflow: auto;
`,xc=Object(r.c)(h.a)`
  > div > div:last-child {
    overflow: visible;
    display: flex;
    flex: 1;
  }
`,Lc=({isLoaded:e,gatewayMac:t=null,wanEnrConfFetched:a=!1,panelType:n=null})=>{const{motif:r}=Object(E.a)(),l=Object(i.useSelector)(Object(O.d)(O.a.LEGACY_UI_SUPPORTED));return Object(j.f)([Object(y.b)(),Object(O.c)(void 0,{crudCacheStrategy:{type:R.a.CACHE}})],c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{mainPanelClassName:Nc},c.a.createElement(h.a,{flexDirection:"column",height:"100%"},l&&c.a.createElement(h.a,{flex:"0 1"},c.a.createElement(Ia,{isLoaded:e})),c.a.createElement(T,{isLoaded:e,motif:r},c.a.createElement(xc,{flex:"1"},c.a.createElement(s.a,{leftColumn:c.a.createElement($t,{gatewayMac:t,isLoaded:e}),options:c.a.createElement(da,{isLoaded:e})},c.a.createElement(Ac,{isLoaded:e}))))),n!==A.b.ISP_DETAILS||a?c.a.createElement(D.a,{panelType:n}):null)))},Vc=({cancelPolledAction:e})=>{const[t,a]=Object(n.useState)(!1),r=Object(i.useSelector)(p.selectGatewayMac),o=Object(i.useDispatch)(),{id:E}=Object(l.m)();Object(n.useEffect)(()=>(o(Object(d.fetchSystemEvent)("SETUP_COMPLETED",{},{crudCacheStrategy:{type:R.a.CACHE}})),o(Object(u.b)({type:R.a.COMBINED,interval:9e3})),o(Object(_.b)(void 0,{crudCacheStrategy:{type:R.a.COMBINED,interval:9e3}})),o(Object(m.b)(void 0,{crudCacheStrategy:{interval:9e3,type:R.a.COMBINED}})).then(()=>a(!0)),o(Object(P.fetchDeviceUsageReport)(r,P.OBJECT.GW,{type:R.a.COMBINED,interval:S.a.MINUTES.grain,actionType:jc.a})),()=>{e(Object(u.b)()),e(Object(_.b)()),e(Object(m.b)()),e(Object(P.fetchDeviceUsageReport)(r,P.OBJECT.GW,{type:R.a.COMBINED,interval:S.a.MINUTES.grain,actionType:jc.a})),o(Object(N.f)())}),[e,o]);const s=Object(n.useMemo)(()=>(null==E?void 0:E.toLowerCase().includes("wan"))?A.b.ISP_DETAILS:A.b.DEVICE,[E]);return c.a.createElement(Lc,{gatewayMac:r,wanEnrConfFetched:t,panelType:s,isLoaded:!0})},wc={setInitialDateRange:N.e,loadTranslations:I.c,fetchAggregatedDashboard:b.fetchAggregatedDashboard,fetchDevices:p.fetchDevices,cancelPolledAction:R.c};t.default=Object(o.compose)(Object(i.connect)(e=>({statsDateRangeInfo:Object(Z.selectStatsDateRangeInfo)(e)}),wc),Object(g.c)(({setInitialDateRange:e,loadTranslations:t,fetchAggregatedDashboard:a,statsDateRangeInfo:n,fetchDevices:c})=>{var r,l,i;return Promise.all([e(),t("dashboard"),...[a(null===(r=null==n?void 0:n.dashboardStatsGranularity)||void 0===r?void 0:r.url,null===(l=null==n?void 0:n.startDate)||void 0===l?void 0:l.getTime(),null===(i=null==n?void 0:n.endDate)||void 0===i?void 0:i.getTime()),c(void 0,{crudCacheStrategy:{type:R.a.CACHE}})].map(e=>e.catch(()=>null))])},void 0,"dashboard-page",!0))(e=>e.isLoaded?c.a.createElement(Vc,Object.assign({},e)):c.a.createElement(Lc,{isLoaded:e.isLoaded}))}}]);