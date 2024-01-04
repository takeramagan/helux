"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[7606],{93011:function(S,E,t){t.r(E);var D=t(4311),A=t(53267),C=t(82197),O=t(12620),g=t(74692),T=t(33296),L=t(12133),j=t(54996),P=t(70079),r=t(35250);function y(){var M=(0,j.eL)(),n=M.texts;return(0,r.jsx)(j.dY,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsxs)("h1",{id:"\u54CD\u5E94\u5F0F",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u54CD\u5E94\u5F0F",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"\u54CD\u5E94\u5F0F"]}),(0,r.jsxs)("p",{children:[n[0].value,(0,r.jsx)("code",{children:n[1].value}),n[2].value,(0,r.jsx)("code",{children:n[3].value}),n[4].value,(0,r.jsx)("code",{children:n[5].value}),n[6].value,(0,r.jsx)("code",{children:n[7].value}),n[8].value]}),(0,r.jsxs)("h2",{id:"\u76F4\u63A5\u4FEE\u6539",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u76F4\u63A5\u4FEE\u6539",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"\u76F4\u63A5\u4FEE\u6539"]}),(0,r.jsx)(g.Z,{lang:"ts",children:n[9].value}),(0,r.jsxs)("p",{children:[n[10].value,(0,r.jsx)("code",{children:n[11].value}),n[12].value,(0,r.jsx)("code",{children:n[13].value}),n[14].value]}),(0,r.jsx)(g.Z,{lang:"ts",children:n[15].value}),(0,r.jsxs)("h2",{id:"\u7EC4\u4EF6\u4E2D\u4F7F\u7528",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7EC4\u4EF6\u4E2D\u4F7F\u7528",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"\u7EC4\u4EF6\u4E2D\u4F7F\u7528"]}),(0,r.jsxs)("p",{children:[n[16].value,(0,r.jsx)("code",{children:n[17].value}),n[18].value]}),(0,r.jsx)(g.Z,{lang:"tsx",children:n[19].value})]}),(0,r.jsx)(j.Dl,{demo:{id:"docs-guide-reactive-demo-0"},previewerProps:{}}),(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsxs)("h2",{id:"signal-\u4E2D\u4F7F\u7528",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#signal-\u4E2D\u4F7F\u7528",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"signal \u4E2D\u4F7F\u7528"]}),(0,r.jsxs)("p",{children:[n[20].value,(0,r.jsx)("code",{children:n[21].value}),n[22].value,(0,r.jsx)("code",{children:n[23].value}),n[24].value,(0,r.jsx)("code",{children:n[25].value}),n[26].value]}),(0,r.jsx)(g.Z,{lang:"tsx",children:n[27].value})]}),(0,r.jsx)(j.Dl,{demo:{id:"docs-guide-reactive-demo-1"},previewerProps:{}})]})})}E.default=y},4311:function(S,E,t){var D=t(39114),A=t.n(D),C=t(70125),O=t.n(C),g=t(54996),T=t(70079),L=t(33296),j=t(35250),P={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,o=[];return Object.entries(e.properties||{}).forEach(function(f){var c,l=O()(f,2),h=l[0],_=l[1];o.push("".concat(h).concat((c=e.required)!==null&&c!==void 0&&c.includes(h)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,o=e.signature;if(!o)return"Function";var f="oneOf"in o?o.oneOf:[o];return f.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(l){return"".concat(l.key,": ").concat(s.toString(l))}).join(", "),") => ").concat(s.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(o){return s.getValidClassName(o)||s.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},r=function(e){var s=useState(function(){return P.toString(e)}),o=_slicedToArray(s,2),f=o[0],c=o[1];return useEffect(function(){c(P.toString(e))},[e]),_jsx("code",{children:f})},y=function(e){var s,o=useRouteMeta(),f=o.frontmatter,c=useAtomAssets(),l=c.components,h=e.id||f.atomId,_=useIntl();if(!h)throw new Error("`id` properties if required for API component!");var x=l==null?void 0:l[h];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:x&&(s=x.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(x.propsConfig.properties).map(function(m){var v,d=_slicedToArray(m,2),i=d[0],a=d[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:a.description||"--"}),_jsx("td",{children:_jsx(r,_objectSpread({},a))}),_jsx("td",{children:_jsx("code",{children:(v=x.propsConfig.required)!==null&&v!==void 0&&v.includes(i)?_.formatMessage({id:"api.component.required"}):JSON.stringify(a.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:h})})})})]})})},M=null},53267:function(S,E,t){var D=t(39114),A=t(35250),C=function(T){return _jsx("span",_objectSpread({className:"dumi-default-badge"},T))},O=null},33296:function(S,E,t){var D=t(39114),A=t(70125),C=t(11221),O=t(14315),g=t(70079),T=t(35250),L=null,j=function(y){var M=y.children,n=_objectWithoutProperties(y,L),e=useRef(null),s=useState(!1),o=_slicedToArray(s,2),f=o[0],c=o[1],l=useState(!1),h=_slicedToArray(l,2),_=h[0],x=h[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){c(m.scrollLeft>0),x(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},n),{},{children:M}))})})},P=null},12133:function(S,E,t){t.d(E,{Z:function(){return v}});var D=t(39114),A=t.n(D),C=t(70125),O=t.n(C),g=t(79664),T=t.n(g),L=t(53474),j=t(23057),P=t(322),r=t(56261),y=t(23433),M=t(18838),n=t(70079),e=t(35250);function s(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(d).forEach(function(u,I){var p="".concat(i?"".concat(i,"-"):"").concat(I);switch(u==null?void 0:u.type){case"ul":{var b,N=((b=a[a.length-1])===null||b===void 0?void 0:b.children)||a,R=s(u.props.children||[],p);N.push.apply(N,T()(R));break}case"li":{var U=s(u.props.children,p);a.push({title:[].concat(u.props.children).filter(function(F){return F.type!=="ul"}),key:p,children:U,isLeaf:!U.length});break}default:}}),a}var o=function(i){var a=(0,n.useState)(s(i)),u=O()(a,2),I=u[0],p=u[1];return(0,n.useEffect)(function(){p(s(i))},[i]),I},f=function(i){var a=i.isLeaf,u=i.expanded;return a?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(L.r,{fill:"currentColor"})}):u?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(j.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(P.r,{fill:"currentColor"})})},c=function(i){var a=i.isLeaf,u=i.expanded;return a?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):u?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(r.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},h=function(i){var a=i.scrollHeight;return{height:a,opacity:1}},_=function(i){return{height:i?i.offsetHeight:0}},x=function(i,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:h,onEnterActive:h,onLeaveStart:_,onLeaveActive:l,onAppearEnd:x,onEnterEnd:x,onLeaveEnd:x,motionDeadline:500},v=function(d){var i=o(d.children),a=(0,n.createRef)(),u=function(p,b){var N=b.isLeaf;N||p.shiftKey||p.metaKey||p.ctrlKey||a.current.onNodeExpand(p,b)};return(0,e.jsx)(M.Z,{className:"dumi-default-tree",icon:f,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:A()(A()({},m),{},{motionAppear:!1}),onClick:u,treeData:[{key:"0",title:d.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:c})}}}]);
