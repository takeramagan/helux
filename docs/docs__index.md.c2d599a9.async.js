"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2533],{26133:function(b,x,t){t.r(x);var E=t(4311),j=t(53267),D=t(82197),A=t(12620),L=t(74692),O=t(33296),S=t(12133),T=t(54996),C=t(70079),g=t(35250);function y(){var M=(0,T.eL)(),a=M.texts;return(0,g.jsx)(T.dY,{children:(0,g.jsx)(g.Fragment,{})})}x.default=y},4311:function(b,x,t){var E=t(39114),j=t.n(E),D=t(70125),A=t.n(D),L=t(54996),O=t(70079),S=t(33296),T=t(35250),C={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var n=this,o=[];return Object.entries(e.properties||{}).forEach(function(f){var c,i=A()(f,2),d=i[0],u=i[1];o.push("".concat(d).concat((c=e.required)!==null&&c!==void 0&&c.includes(d)?"":"?",": ").concat(u.type==="object"?"object":n.toString(u)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var n=this.getValidClassName(e.items);return n?"".concat(n,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var n=this,o=e.signature;if(!o)return"Function";var f="oneOf"in o?o.oneOf:[o];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(i){return"".concat(i.key,": ").concat(n.toString(i))}).join(", "),") => ").concat(n.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(e){var n=this;return e.oneOf.map(function(o){return n.getValidClassName(o)||n.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},g=function(e){var n=useState(function(){return C.toString(e)}),o=_slicedToArray(n,2),f=o[0],c=o[1];return useEffect(function(){c(C.toString(e))},[e]),_jsx("code",{children:f})},y=function(e){var n,o=useRouteMeta(),f=o.frontmatter,c=useAtomAssets(),i=c.components,d=e.id||f.atomId,u=useIntl();if(!d)throw new Error("`id` properties if required for API component!");var v=i==null?void 0:i[d];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:u.formatMessage({id:"api.component.name"})}),_jsx("th",{children:u.formatMessage({id:"api.component.description"})}),_jsx("th",{children:u.formatMessage({id:"api.component.type"})}),_jsx("th",{children:u.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:v&&(n=v.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(v.propsConfig.properties).map(function(m){var h,_=_slicedToArray(m,2),s=_[0],r=_[1];return _jsxs("tr",{children:[_jsx("td",{children:s}),_jsx("td",{children:r.description||"--"}),_jsx("td",{children:_jsx(g,_objectSpread({},r))}),_jsx("td",{children:_jsx("code",{children:(h=v.propsConfig.required)!==null&&h!==void 0&&h.includes(s)?u.formatMessage({id:"api.component.required"}):JSON.stringify(r.default)||"--"})})]},s)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:u.formatMessage({id:"api.component.".concat(i?"not.found":"unavailable")},{id:d})})})})]})})},M=null},53267:function(b,x,t){var E=t(39114),j=t(35250),D=function(O){return _jsx("span",_objectSpread({className:"dumi-default-badge"},O))},A=null},33296:function(b,x,t){var E=t(39114),j=t(70125),D=t(11221),A=t(14315),L=t(70079),O=t(35250),S=null,T=function(y){var M=y.children,a=_objectWithoutProperties(y,S),e=useRef(null),n=useState(!1),o=_slicedToArray(n,2),f=o[0],c=o[1],i=useState(!1),d=_slicedToArray(i,2),u=d[0],v=d[1];return useEffect(function(){var m=e.current;if(m){var h=throttle(function(){c(m.scrollLeft>0),v(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return h(),m.addEventListener("scroll",h),window.addEventListener("resize",h),function(){m.removeEventListener("scroll",h),window.removeEventListener("resize",h)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":u||void 0,children:_jsx("table",_objectSpread(_objectSpread({},a),{},{children:M}))})})},C=null},12133:function(b,x,t){t.d(x,{Z:function(){return h}});var E=t(39114),j=t.n(E),D=t(70125),A=t.n(D),L=t(79664),O=t.n(L),S=t(53474),T=t(23057),C=t(322),g=t(56261),y=t(23433),M=t(18838),a=t(70079),e=t(35250);function n(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(_).forEach(function(l,I){var p="".concat(s?"".concat(s,"-"):"").concat(I);switch(l==null?void 0:l.type){case"ul":{var P,U=((P=r[r.length-1])===null||P===void 0?void 0:P.children)||r,R=n(l.props.children||[],p);U.push.apply(U,O()(R));break}case"li":{var N=n(l.props.children,p);r.push({title:[].concat(l.props.children).filter(function(B){return B.type!=="ul"}),key:p,children:N,isLeaf:!N.length});break}default:}}),r}var o=function(s){var r=(0,a.useState)(n(s)),l=A()(r,2),I=l[0],p=l[1];return(0,a.useEffect)(function(){p(n(s))},[s]),I},f=function(s){var r=s.isLeaf,l=s.expanded;return r?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(S.r,{fill:"currentColor"})}):l?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(T.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(C.r,{fill:"currentColor"})})},c=function(s){var r=s.isLeaf,l=s.expanded;return r?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):l?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(g.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})})})},i=function(){return{height:0,opacity:0}},d=function(s){var r=s.scrollHeight;return{height:r,opacity:1}},u=function(s){return{height:s?s.offsetHeight:0}},v=function(s,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:i,onEnterStart:i,onAppearActive:d,onEnterActive:d,onLeaveStart:u,onLeaveActive:i,onAppearEnd:v,onEnterEnd:v,onLeaveEnd:v,motionDeadline:500},h=function(_){var s=o(_.children),r=(0,a.createRef)(),l=function(p,P){var U=P.isLeaf;U||p.shiftKey||p.metaKey||p.ctrlKey||r.current.onNodeExpand(p,P)};return(0,e.jsx)(M.Z,{className:"dumi-default-tree",icon:f,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:j()(j()({},m),{},{motionAppear:!1}),onClick:l,treeData:[{key:"0",title:_.title||"<root>",children:s}],defaultExpandAll:!0,switcherIcon:c})}}}]);
