"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[3201],{17521:function(S,x,n){n.r(x);var y=n(4311),D=n(53267),A=n(82197),O=n(12620),E=n(74692),T=n(33296),L=n(12133),C=n(54996),M=n(70079),i=n(35250);function j(){var P=(0,C.eL)(),s=P.texts;return(0,i.jsx)(C.dY,{children:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"\u4E2D\u95F4\u4EF6",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E2D\u95F4\u4EF6",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"\u4E2D\u95F4\u4EF6"]}),(0,i.jsx)("p",{children:s[0].value}),(0,i.jsxs)("h3",{id:"\u5B9A\u4E49\u4E2D\u95F4\u4EF6",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B9A\u4E49\u4E2D\u95F4\u4EF6",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"\u5B9A\u4E49\u4E2D\u95F4\u4EF6"]}),(0,i.jsx)(E.Z,{lang:"ts",children:s[1].value}),(0,i.jsxs)("h3",{id:"\u4F7F\u7528\u4E2D\u95F4\u4EF6",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u4E2D\u95F4\u4EF6",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u4E2D\u95F4\u4EF6"]}),(0,i.jsx)(E.Z,{lang:"ts",children:s[2].value})]})})})}x.default=j},4311:function(S,x,n){var y=n(39114),D=n.n(y),A=n(70125),O=n.n(A),E=n(54996),T=n(70079),L=n(33296),C=n(35250),M={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var t=this,o=[];return Object.entries(e.properties||{}).forEach(function(h){var u,c=O()(h,2),f=c[0],_=c[1];o.push("".concat(f).concat((u=e.required)!==null&&u!==void 0&&u.includes(f)?"":"?",": ").concat(_.type==="object"?"object":t.toString(_)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var t=this.getValidClassName(e.items);return t?"".concat(t,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var t=this,o=e.signature;if(!o)return"Function";var h="oneOf"in o?o.oneOf:[o];return h.map(function(u){return"".concat(u.isAsync?"async ":"","(").concat(u.arguments.map(function(c){return"".concat(c.key,": ").concat(t.toString(c))}).join(", "),") => ").concat(t.toString(u.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(t){return JSON.stringify(t)}).join(" | ")},oneOf:function(e){var t=this;return e.oneOf.map(function(o){return t.getValidClassName(o)||t.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},i=function(e){var t=useState(function(){return M.toString(e)}),o=_slicedToArray(t,2),h=o[0],u=o[1];return useEffect(function(){u(M.toString(e))},[e]),_jsx("code",{children:h})},j=function(e){var t,o=useRouteMeta(),h=o.frontmatter,u=useAtomAssets(),c=u.components,f=e.id||h.atomId,_=useIntl();if(!f)throw new Error("`id` properties if required for API component!");var p=c==null?void 0:c[f];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(t=p.propsConfig)!==null&&t!==void 0&&t.properties?Object.entries(p.propsConfig.properties).map(function(m){var v,d=_slicedToArray(m,2),a=d[0],r=d[1];return _jsxs("tr",{children:[_jsx("td",{children:a}),_jsx("td",{children:r.description||"--"}),_jsx("td",{children:_jsx(i,_objectSpread({},r))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(a)?_.formatMessage({id:"api.component.required"}):JSON.stringify(r.default)||"--"})})]},a)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(c?"not.found":"unavailable")},{id:f})})})})]})})},P=null},53267:function(S,x,n){var y=n(39114),D=n(35250),A=function(T){return _jsx("span",_objectSpread({className:"dumi-default-badge"},T))},O=null},33296:function(S,x,n){var y=n(39114),D=n(70125),A=n(11221),O=n(14315),E=n(70079),T=n(35250),L=null,C=function(j){var P=j.children,s=_objectWithoutProperties(j,L),e=useRef(null),t=useState(!1),o=_slicedToArray(t,2),h=o[0],u=o[1],c=useState(!1),f=_slicedToArray(c,2),_=f[0],p=f[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){u(m.scrollLeft>0),p(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":h||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},s),{},{children:P}))})})},M=null},12133:function(S,x,n){n.d(x,{Z:function(){return v}});var y=n(39114),D=n.n(y),A=n(70125),O=n.n(A),E=n(79664),T=n.n(E),L=n(53474),C=n(23057),M=n(322),i=n(56261),j=n(23433),P=n(18838),s=n(70079),e=n(35250);function t(d){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(d).forEach(function(l,I){var g="".concat(a?"".concat(a,"-"):"").concat(I);switch(l==null?void 0:l.type){case"ul":{var b,N=((b=r[r.length-1])===null||b===void 0?void 0:b.children)||r,R=t(l.props.children||[],g);N.push.apply(N,T()(R));break}case"li":{var U=t(l.props.children,g);r.push({title:[].concat(l.props.children).filter(function(B){return B.type!=="ul"}),key:g,children:U,isLeaf:!U.length});break}default:}}),r}var o=function(a){var r=(0,s.useState)(t(a)),l=O()(r,2),I=l[0],g=l[1];return(0,s.useEffect)(function(){g(t(a))},[a]),I},h=function(a){var r=a.isLeaf,l=a.expanded;return r?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):l?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(C.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(M.r,{fill:"currentColor"})})},u=function(a){var r=a.isLeaf,l=a.expanded;return r?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):l?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(i.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(j.r,{fill:"currentColor"})})})},c=function(){return{height:0,opacity:0}},f=function(a){var r=a.scrollHeight;return{height:r,opacity:1}},_=function(a){return{height:a?a.offsetHeight:0}},p=function(a,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:c,onEnterStart:c,onAppearActive:f,onEnterActive:f,onLeaveStart:_,onLeaveActive:c,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(d){var a=o(d.children),r=(0,s.createRef)(),l=function(g,b){var N=b.isLeaf;N||g.shiftKey||g.metaKey||g.ctrlKey||r.current.onNodeExpand(g,b)};return(0,e.jsx)(P.Z,{className:"dumi-default-tree",icon:h,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:D()(D()({},m),{},{motionAppear:!1}),onClick:l,treeData:[{key:"0",title:d.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:u})}}}]);
