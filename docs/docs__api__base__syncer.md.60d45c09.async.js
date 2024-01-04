"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[9684],{76370:function(L,g,n){n.r(g);var D=n(4311),C=n(53267),y=n(82197),A=n(12620),M=n(74692),P=n(33296),S=n(12133),_=n(54996),O=n(70079),t=n(35250);function E(){var T=(0,_.eL)(),r=T.texts;return(0,t.jsx)(_.dY,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"syncer",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#syncer",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"syncer"]}),(0,t.jsxs)("p",{children:[r[0].value,(0,t.jsx)(_.rU,{to:"/atom-ctx/syncer",children:r[1].value}),r[2].value]})]}),(0,t.jsx)(y.Z,{type:"info",children:(0,t.jsxs)("p",{children:[r[3].value,(0,t.jsx)(_.rU,{to:"/guide/sync",children:r[4].value})]})}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h2",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]}),(0,t.jsxs)("h3",{id:"\u7ED1\u5B9A\u539F\u59CB\u503C",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7ED1\u5B9A\u539F\u59CB\u503C",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u7ED1\u5B9A\u539F\u59CB\u503C"]})]}),(0,t.jsx)(_.Dl,{demo:{id:"docs-api-base-syncer-demo-0"},previewerProps:{defaultShowCode:!0}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)("p",{children:[r[5].value,(0,t.jsx)("code",{children:r[6].value}),r[7].value]})}),(0,t.jsx)(_.Dl,{demo:{id:"docs-api-base-syncer-demo-1"},previewerProps:{defaultShowCode:!0}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)("h3",{id:"\u7ED1\u5B9A\u4E00\u5C42\u7ED3\u6784\u7684\u5B57\u5178\u5BF9\u8C61",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7ED1\u5B9A\u4E00\u5C42\u7ED3\u6784\u7684\u5B57\u5178\u5BF9\u8C61",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u7ED1\u5B9A\u4E00\u5C42\u7ED3\u6784\u7684\u5B57\u5178\u5BF9\u8C61"]})}),(0,t.jsx)(_.Dl,{demo:{id:"docs-api-base-syncer-demo-2"},previewerProps:{defaultShowCode:!0}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)("p",{children:[r[8].value,(0,t.jsx)("code",{children:r[9].value}),r[10].value]})}),(0,t.jsx)(_.Dl,{demo:{id:"docs-api-base-syncer-demo-3"},previewerProps:{defaultShowCode:!0}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:r[11].value}),r[12].value]})}),(0,t.jsx)(_.Dl,{demo:{id:"docs-api-base-syncer-demo-4"},previewerProps:{defaultShowCode:!0}})]})})}g.default=E},4311:function(L,g,n){var D=n(39114),C=n.n(D),y=n(70125),A=n.n(y),M=n(54996),P=n(70079),S=n(33296),_=n(35250),O={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,o=[];return Object.entries(e.properties||{}).forEach(function(m){var d,c=A()(m,2),f=c[0],h=c[1];o.push("".concat(f).concat((d=e.required)!==null&&d!==void 0&&d.includes(f)?"":"?",": ").concat(h.type==="object"?"object":s.toString(h)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,o=e.signature;if(!o)return"Function";var m="oneOf"in o?o.oneOf:[o];return m.map(function(d){return"".concat(d.isAsync?"async ":"","(").concat(d.arguments.map(function(c){return"".concat(c.key,": ").concat(s.toString(c))}).join(", "),") => ").concat(s.toString(d.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(o){return s.getValidClassName(o)||s.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},t=function(e){var s=useState(function(){return O.toString(e)}),o=_slicedToArray(s,2),m=o[0],d=o[1];return useEffect(function(){d(O.toString(e))},[e]),_jsx("code",{children:m})},E=function(e){var s,o=useRouteMeta(),m=o.frontmatter,d=useAtomAssets(),c=d.components,f=e.id||m.atomId,h=useIntl();if(!f)throw new Error("`id` properties if required for API component!");var x=c==null?void 0:c[f];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:h.formatMessage({id:"api.component.name"})}),_jsx("th",{children:h.formatMessage({id:"api.component.description"})}),_jsx("th",{children:h.formatMessage({id:"api.component.type"})}),_jsx("th",{children:h.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:x&&(s=x.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(x.propsConfig.properties).map(function(v){var p,u=_slicedToArray(v,2),i=u[0],a=u[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:a.description||"--"}),_jsx("td",{children:_jsx(t,_objectSpread({},a))}),_jsx("td",{children:_jsx("code",{children:(p=x.propsConfig.required)!==null&&p!==void 0&&p.includes(i)?h.formatMessage({id:"api.component.required"}):JSON.stringify(a.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:h.formatMessage({id:"api.component.".concat(c?"not.found":"unavailable")},{id:f})})})})]})})},T=null},53267:function(L,g,n){var D=n(39114),C=n(35250),y=function(P){return _jsx("span",_objectSpread({className:"dumi-default-badge"},P))},A=null},33296:function(L,g,n){var D=n(39114),C=n(70125),y=n(11221),A=n(14315),M=n(70079),P=n(35250),S=null,_=function(E){var T=E.children,r=_objectWithoutProperties(E,S),e=useRef(null),s=useState(!1),o=_slicedToArray(s,2),m=o[0],d=o[1],c=useState(!1),f=_slicedToArray(c,2),h=f[0],x=f[1];return useEffect(function(){var v=e.current;if(v){var p=throttle(function(){d(v.scrollLeft>0),x(v.scrollLeft<v.scrollWidth-v.offsetWidth)},100);return p(),v.addEventListener("scroll",p),window.addEventListener("resize",p),function(){v.removeEventListener("scroll",p),window.removeEventListener("resize",p)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":m||void 0,"data-right-folded":h||void 0,children:_jsx("table",_objectSpread(_objectSpread({},r),{},{children:T}))})})},O=null},12133:function(L,g,n){n.d(g,{Z:function(){return p}});var D=n(39114),C=n.n(D),y=n(70125),A=n.n(y),M=n(79664),P=n.n(M),S=n(53474),_=n(23057),O=n(322),t=n(56261),E=n(23433),T=n(18838),r=n(70079),e=n(35250);function s(u){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(u).forEach(function(l,N){var j="".concat(i?"".concat(i,"-"):"").concat(N);switch(l==null?void 0:l.type){case"ul":{var b,I=((b=a[a.length-1])===null||b===void 0?void 0:b.children)||a,U=s(l.props.children||[],j);I.push.apply(I,P()(U));break}case"li":{var B=s(l.props.children,j);a.push({title:[].concat(l.props.children).filter(function(R){return R.type!=="ul"}),key:j,children:B,isLeaf:!B.length});break}default:}}),a}var o=function(i){var a=(0,r.useState)(s(i)),l=A()(a,2),N=l[0],j=l[1];return(0,r.useEffect)(function(){j(s(i))},[i]),N},m=function(i){var a=i.isLeaf,l=i.expanded;return a?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(S.r,{fill:"currentColor"})}):l?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(_.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(O.r,{fill:"currentColor"})})},d=function(i){var a=i.isLeaf,l=i.expanded;return a?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):l?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(E.r,{fill:"currentColor"})})})},c=function(){return{height:0,opacity:0}},f=function(i){var a=i.scrollHeight;return{height:a,opacity:1}},h=function(i){return{height:i?i.offsetHeight:0}},x=function(i,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},v={motionName:"ant-motion-collapse",onAppearStart:c,onEnterStart:c,onAppearActive:f,onEnterActive:f,onLeaveStart:h,onLeaveActive:c,onAppearEnd:x,onEnterEnd:x,onLeaveEnd:x,motionDeadline:500},p=function(u){var i=o(u.children),a=(0,r.createRef)(),l=function(j,b){var I=b.isLeaf;I||j.shiftKey||j.metaKey||j.ctrlKey||a.current.onNodeExpand(j,b)};return(0,e.jsx)(T.Z,{className:"dumi-default-tree",icon:m,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:C()(C()({},v),{},{motionAppear:!1}),onClick:l,treeData:[{key:"0",title:u.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:d})}}}]);
