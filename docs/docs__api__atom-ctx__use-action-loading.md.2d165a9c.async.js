"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[1654],{1354:function(S,x,n){n.r(x);var A=n(4311),D=n(53267),j=n(82197),O=n(12620),L=n(74692),T=n(33296),b=n(12133),y=n(54996),C=n(70079),i=n(35250);function E(){var M=(0,y.eL)(),t=M.texts;return(0,i.jsx)(y.dY,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"useactionloading",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useactionloading",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"useActionLoading"]}),(0,i.jsxs)("p",{children:[t[0].value,(0,i.jsx)("code",{children:t[1].value}),t[2].value]}),(0,i.jsx)("hr",{})]}),(0,i.jsx)(j.Z,{type:"info",children:(0,i.jsxs)("p",{children:[t[3].value,(0,i.jsx)(y.rU,{to:"/api/hooks/use-action-loading",children:t[4].value}),t[5].value]})})]})})}x.default=E},4311:function(S,x,n){var A=n(39114),D=n.n(A),j=n(70125),O=n.n(j),L=n(54996),T=n(70079),b=n(33296),y=n(35250),C={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,o=[];return Object.entries(e.properties||{}).forEach(function(h){var l,c=O()(h,2),f=c[0],d=c[1];o.push("".concat(f).concat((l=e.required)!==null&&l!==void 0&&l.includes(f)?"":"?",": ").concat(d.type==="object"?"object":r.toString(d)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,o=e.signature;if(!o)return"Function";var h="oneOf"in o?o.oneOf:[o];return h.map(function(l){return"".concat(l.isAsync?"async ":"","(").concat(l.arguments.map(function(c){return"".concat(c.key,": ").concat(r.toString(c))}).join(", "),") => ").concat(r.toString(l.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(o){return r.getValidClassName(o)||r.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},i=function(e){var r=useState(function(){return C.toString(e)}),o=_slicedToArray(r,2),h=o[0],l=o[1];return useEffect(function(){l(C.toString(e))},[e]),_jsx("code",{children:h})},E=function(e){var r,o=useRouteMeta(),h=o.frontmatter,l=useAtomAssets(),c=l.components,f=e.id||h.atomId,d=useIntl();if(!f)throw new Error("`id` properties if required for API component!");var p=c==null?void 0:c[f];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(r=p.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(p.propsConfig.properties).map(function(m){var v,_=_slicedToArray(m,2),a=_[0],s=_[1];return _jsxs("tr",{children:[_jsx("td",{children:a}),_jsx("td",{children:s.description||"--"}),_jsx("td",{children:_jsx(i,_objectSpread({},s))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(a)?d.formatMessage({id:"api.component.required"}):JSON.stringify(s.default)||"--"})})]},a)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(c?"not.found":"unavailable")},{id:f})})})})]})})},M=null},53267:function(S,x,n){var A=n(39114),D=n(35250),j=function(T){return _jsx("span",_objectSpread({className:"dumi-default-badge"},T))},O=null},33296:function(S,x,n){var A=n(39114),D=n(70125),j=n(11221),O=n(14315),L=n(70079),T=n(35250),b=null,y=function(E){var M=E.children,t=_objectWithoutProperties(E,b),e=useRef(null),r=useState(!1),o=_slicedToArray(r,2),h=o[0],l=o[1],c=useState(!1),f=_slicedToArray(c,2),d=f[0],p=f[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){l(m.scrollLeft>0),p(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":h||void 0,"data-right-folded":d||void 0,children:_jsx("table",_objectSpread(_objectSpread({},t),{},{children:M}))})})},C=null},12133:function(S,x,n){n.d(x,{Z:function(){return v}});var A=n(39114),D=n.n(A),j=n(70125),O=n.n(j),L=n(79664),T=n.n(L),b=n(53474),y=n(23057),C=n(322),i=n(56261),E=n(23433),M=n(18838),t=n(70079),e=n(35250);function r(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=[];return[].concat(_).forEach(function(u,I){var g="".concat(a?"".concat(a,"-"):"").concat(I);switch(u==null?void 0:u.type){case"ul":{var P,N=((P=s[s.length-1])===null||P===void 0?void 0:P.children)||s,R=r(u.props.children||[],g);N.push.apply(N,T()(R));break}case"li":{var U=r(u.props.children,g);s.push({title:[].concat(u.props.children).filter(function(B){return B.type!=="ul"}),key:g,children:U,isLeaf:!U.length});break}default:}}),s}var o=function(a){var s=(0,t.useState)(r(a)),u=O()(s,2),I=u[0],g=u[1];return(0,t.useEffect)(function(){g(r(a))},[a]),I},h=function(a){var s=a.isLeaf,u=a.expanded;return s?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})}):u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(C.r,{fill:"currentColor"})})},l=function(a){var s=a.isLeaf,u=a.expanded;return s?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):u?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(i.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(E.r,{fill:"currentColor"})})})},c=function(){return{height:0,opacity:0}},f=function(a){var s=a.scrollHeight;return{height:s,opacity:1}},d=function(a){return{height:a?a.offsetHeight:0}},p=function(a,s){return(s==null?void 0:s.deadline)===!0||s.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:c,onEnterStart:c,onAppearActive:f,onEnterActive:f,onLeaveStart:d,onLeaveActive:c,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(_){var a=o(_.children),s=(0,t.createRef)(),u=function(g,P){var N=P.isLeaf;N||g.shiftKey||g.metaKey||g.ctrlKey||s.current.onNodeExpand(g,P)};return(0,e.jsx)(M.Z,{className:"dumi-default-tree",icon:h,ref:s,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:D()(D()({},m),{},{motionAppear:!1}),onClick:u,treeData:[{key:"0",title:_.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:l})}}}]);
