"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[3956],{52089:function(S,g,n){n.r(g);var D=n(4311),O=n(53267),T=n(82197),C=n(12620),j=n(74692),L=n(33296),y=n(12133),E=n(54996),M=n(70079),r=n(35250);function A(){var P=(0,E.eL)(),t=P.texts;return(0,r.jsx)(E.dY,{children:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsxs)("h1",{id:"\u6A21\u578B",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6A21\u578B",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"\u6A21\u578B"]}),(0,r.jsxs)("p",{children:[t[0].value,(0,r.jsx)(E.rU,{to:"/guide/modular",children:t[1].value}),t[2].value,(0,r.jsx)("code",{children:t[3].value}),t[4].value,(0,r.jsx)("code",{children:t[5].value}),t[6].value]}),(0,r.jsxs)("h2",{id:"model",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#model",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"model"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:t[7].value}),t[8].value,(0,r.jsx)("code",{children:t[9].value}),t[10].value,(0,r.jsx)("code",{children:t[11].value}),t[12].value]}),(0,r.jsx)(j.Z,{lang:"ts",children:t[13].value}),(0,r.jsxs)("h2",{id:"modelfactory",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modelfactory",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"modelFactory"]}),(0,r.jsxs)("p",{children:[t[14].value,(0,r.jsx)("code",{children:t[15].value}),t[16].value]}),(0,r.jsx)(j.Z,{lang:"ts",children:t[17].value})]})})})}g.default=A},4311:function(S,g,n){var D=n(39114),O=n.n(D),T=n(70125),C=n.n(T),j=n(54996),L=n(70079),y=n(33296),E=n(35250),M={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,i=[];return Object.entries(e.properties||{}).forEach(function(h){var c,l=C()(h,2),f=l[0],_=l[1];i.push("".concat(f).concat((c=e.required)!==null&&c!==void 0&&c.includes(f)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,i=e.signature;if(!i)return"Function";var h="oneOf"in i?i.oneOf:[i];return h.map(function(c){return"".concat(c.isAsync?"async ":"","(").concat(c.arguments.map(function(l){return"".concat(l.key,": ").concat(s.toString(l))}).join(", "),") => ").concat(s.toString(c.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(i){return s.getValidClassName(i)||s.toString(i)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},r=function(e){var s=useState(function(){return M.toString(e)}),i=_slicedToArray(s,2),h=i[0],c=i[1];return useEffect(function(){c(M.toString(e))},[e]),_jsx("code",{children:h})},A=function(e){var s,i=useRouteMeta(),h=i.frontmatter,c=useAtomAssets(),l=c.components,f=e.id||h.atomId,_=useIntl();if(!f)throw new Error("`id` properties if required for API component!");var p=l==null?void 0:l[f];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(s=p.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(p.propsConfig.properties).map(function(m){var v,u=_slicedToArray(m,2),o=u[0],a=u[1];return _jsxs("tr",{children:[_jsx("td",{children:o}),_jsx("td",{children:a.description||"--"}),_jsx("td",{children:_jsx(r,_objectSpread({},a))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(o)?_.formatMessage({id:"api.component.required"}):JSON.stringify(a.default)||"--"})})]},o)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:f})})})})]})})},P=null},53267:function(S,g,n){var D=n(39114),O=n(70079),T=n(35250),C=function(y){return _jsx("span",_objectSpread({className:"dumi-default-badge"},y))},j=null},33296:function(S,g,n){var D=n(39114),O=n(70125),T=n(11221),C=n(14315),j=n(70079),L=n(35250),y=null,E=function(A){var P=A.children,t=_objectWithoutProperties(A,y),e=useRef(null),s=useState(!1),i=_slicedToArray(s,2),h=i[0],c=i[1],l=useState(!1),f=_slicedToArray(l,2),_=f[0],p=f[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){c(m.scrollLeft>0),p(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":h||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},t),{},{children:P}))})})},M=null},12133:function(S,g,n){n.d(g,{Z:function(){return v}});var D=n(39114),O=n.n(D),T=n(70125),C=n.n(T),j=n(79664),L=n.n(j),y=n(53474),E=n(23057),M=n(322),r=n(56261),A=n(23433),P=n(18838),t=n(70079),e=n(35250);function s(u){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(u).forEach(function(d,I){var x="".concat(o?"".concat(o,"-"):"").concat(I);switch(d==null?void 0:d.type){case"ul":{var b,N=((b=a[a.length-1])===null||b===void 0?void 0:b.children)||a,R=s(d.props.children||[],x);N.push.apply(N,L()(R));break}case"li":{var U=s(d.props.children,x);a.push({title:[].concat(d.props.children).filter(function(B){return B.type!=="ul"}),key:x,children:U,isLeaf:!U.length});break}default:}}),a}var i=function(o){var a=(0,t.useState)(s(o)),d=C()(a,2),I=d[0],x=d[1];return(0,t.useEffect)(function(){x(s(o))},[o]),I},h=function(o){var a=o.isLeaf,d=o.expanded;return a?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})}):d?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(E.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(M.r,{fill:"currentColor"})})},c=function(o){var a=o.isLeaf,d=o.expanded;return a?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):d?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(r.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(A.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},f=function(o){var a=o.scrollHeight;return{height:a,opacity:1}},_=function(o){return{height:o?o.offsetHeight:0}},p=function(o,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:f,onEnterActive:f,onLeaveStart:_,onLeaveActive:l,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(u){var o=i(u.children),a=(0,t.createRef)(),d=function(x,b){var N=b.isLeaf;N||x.shiftKey||x.metaKey||x.ctrlKey||a.current.onNodeExpand(x,b)};return(0,e.jsx)(P.Z,{className:"dumi-default-tree",icon:h,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:O()(O()({},m),{},{motionAppear:!1}),onClick:d,treeData:[{key:"0",title:u.title||"<root>",children:o}],defaultExpandAll:!0,switcherIcon:c})}}}]);
