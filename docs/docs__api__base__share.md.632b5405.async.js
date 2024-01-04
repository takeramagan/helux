"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[8375],{83995:function(S,x,t){t.r(x);var E=t(4311),D=t(53267),A=t(82197),O=t(12620),T=t(74692),C=t(33296),L=t(12133),j=t(54996),M=t(70079),i=t(35250);function y(){var P=(0,j.eL)(),n=P.texts;return(0,i.jsx)(j.dY,{children:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"share",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#share",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"share"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("code",{children:n[0].value}),n[1].value,(0,i.jsx)("code",{children:n[2].value}),n[3].value]}),(0,i.jsx)(T.Z,{lang:"ts",children:n[4].value}),(0,i.jsxs)("p",{children:[n[5].value,(0,i.jsx)(j.rU,{to:"/api/base/atom",children:n[6].value}),n[7].value]})]})})})}x.default=y},4311:function(S,x,t){var E=t(39114),D=t.n(E),A=t(70125),O=t.n(A),T=t(54996),C=t(70079),L=t(33296),j=t(35250),M={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var r=this,o=[];return Object.entries(e.properties||{}).forEach(function(h){var c,l=O()(h,2),f=l[0],d=l[1];o.push("".concat(f).concat((c=e.required)!==null&&c!==void 0&&c.includes(f)?"":"?",": ").concat(d.type==="object"?"object":r.toString(d)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var r=this.getValidClassName(e.items);return r?"".concat(r,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var r=this,o=e.signature;if(!o)return"Function";var h="oneOf"in o?o.oneOf:[o];return h.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(l){return"".concat(l.key,": ").concat(r.toString(l))}).join(", "),") => ").concat(r.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(r){return JSON.stringify(r)}).join(" | ")},oneOf:function(e){var r=this;return e.oneOf.map(function(o){return r.getValidClassName(o)||r.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},i=function(e){var r=useState(function(){return M.toString(e)}),o=_slicedToArray(r,2),h=o[0],c=o[1];return useEffect(function(){c(M.toString(e))},[e]),_jsx("code",{children:h})},y=function(e){var r,o=useRouteMeta(),h=o.frontmatter,c=useAtomAssets(),l=c.components,f=e.id||h.atomId,d=useIntl();if(!f)throw new Error("`id` properties if required for API component!");var p=l==null?void 0:l[f];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(r=p.propsConfig)!==null&&r!==void 0&&r.properties?Object.entries(p.propsConfig.properties).map(function(m){var v,_=_slicedToArray(m,2),a=_[0],s=_[1];return _jsxs("tr",{children:[_jsx("td",{children:a}),_jsx("td",{children:s.description||"--"}),_jsx("td",{children:_jsx(i,_objectSpread({},s))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(a)?d.formatMessage({id:"api.component.required"}):JSON.stringify(s.default)||"--"})})]},a)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:f})})})})]})})},P=null},53267:function(S,x,t){var E=t(39114),D=t(35250),A=function(C){return _jsx("span",_objectSpread({className:"dumi-default-badge"},C))},O=null},33296:function(S,x,t){var E=t(39114),D=t(70125),A=t(11221),O=t(14315),T=t(70079),C=t(35250),L=null,j=function(y){var P=y.children,n=_objectWithoutProperties(y,L),e=useRef(null),r=useState(!1),o=_slicedToArray(r,2),h=o[0],c=o[1],l=useState(!1),f=_slicedToArray(l,2),d=f[0],p=f[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){c(m.scrollLeft>0),p(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":h||void 0,"data-right-folded":d||void 0,children:_jsx("table",_objectSpread(_objectSpread({},n),{},{children:P}))})})},M=null},12133:function(S,x,t){t.d(x,{Z:function(){return v}});var E=t(39114),D=t.n(E),A=t(70125),O=t.n(A),T=t(79664),C=t.n(T),L=t(53474),j=t(23057),M=t(322),i=t(56261),y=t(23433),P=t(18838),n=t(70079),e=t(35250);function r(_){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=[];return[].concat(_).forEach(function(u,I){var g="".concat(a?"".concat(a,"-"):"").concat(I);switch(u==null?void 0:u.type){case"ul":{var b,N=((b=s[s.length-1])===null||b===void 0?void 0:b.children)||s,R=r(u.props.children||[],g);N.push.apply(N,C()(R));break}case"li":{var U=r(u.props.children,g);s.push({title:[].concat(u.props.children).filter(function(B){return B.type!=="ul"}),key:g,children:U,isLeaf:!U.length});break}default:}}),s}var o=function(a){var s=(0,n.useState)(r(a)),u=O()(s,2),I=u[0],g=u[1];return(0,n.useEffect)(function(){g(r(a))},[a]),I},h=function(a){var s=a.isLeaf,u=a.expanded;return s?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(j.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(M.r,{fill:"currentColor"})})},c=function(a){var s=a.isLeaf,u=a.expanded;return s?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):u?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(i.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},f=function(a){var s=a.scrollHeight;return{height:s,opacity:1}},d=function(a){return{height:a?a.offsetHeight:0}},p=function(a,s){return(s==null?void 0:s.deadline)===!0||s.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:f,onEnterActive:f,onLeaveStart:d,onLeaveActive:l,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(_){var a=o(_.children),s=(0,n.createRef)(),u=function(g,b){var N=b.isLeaf;N||g.shiftKey||g.metaKey||g.ctrlKey||s.current.onNodeExpand(g,b)};return(0,e.jsx)(P.Z,{className:"dumi-default-tree",icon:h,ref:s,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:D()(D()({},m),{},{motionAppear:!1}),onClick:u,treeData:[{key:"0",title:_.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:c})}}}]);
