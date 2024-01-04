"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[302],{26515:function(L,E,n){n.r(E);var A=n(4311),C=n(53267),g=n(82197),O=n(12620),j=n(74692),T=n(33296),S=n(12133),y=n(54996),b=n(70079),t=n(35250);function D(){var P=(0,y.eL)(),r=P.texts;return(0,t.jsx)(y.dY,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h1",{id:"useglobalforceupdate",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useglobalforceupdate",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"useGlobalForceUpdate"]}),(0,t.jsx)("p",{children:r[0].value})]}),(0,t.jsx)(g.Z,{type:"warning",children:(0,t.jsx)("p",{children:r[1].value})}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsx)(j.Z,{lang:"ts",children:r[2].value}),(0,t.jsx)("p",{children:r[3].value}),(0,t.jsx)(j.Z,{lang:"ts",children:r[4].value}),(0,t.jsxs)("h2",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]}),(0,t.jsxs)("h3",{id:"\u66F4\u65B0\u6240\u6709\u5B9E\u4F8B",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u66F4\u65B0\u6240\u6709\u5B9E\u4F8B",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u66F4\u65B0\u6240\u6709\u5B9E\u4F8B"]})]}),(0,t.jsx)(y.Dl,{demo:{id:"docs-api-hooks-use-global-force-update-demo-0"},previewerProps:{defaultShowCode:!0}}),(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)("h3",{id:"\u6307\u5B9A\u66F4\u65B0\u8303\u56F4",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6307\u5B9A\u66F4\u65B0\u8303\u56F4",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u6307\u5B9A\u66F4\u65B0\u8303\u56F4"]})}),(0,t.jsx)(g.Z,{type:"info",children:(0,t.jsxs)("p",{children:[r[5].value,(0,t.jsx)("code",{children:r[6].value}),r[7].value,(0,t.jsx)("code",{children:r[8].value}),r[9].value]})}),(0,t.jsx)(y.Dl,{demo:{id:"docs-api-hooks-use-global-force-update-demo-1"},previewerProps:{defaultShowCode:!0}}),(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h3",{id:"\u91CD\u5199\u66F4\u65B0\u8303\u56F4",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u91CD\u5199\u66F4\u65B0\u8303\u56F4",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u91CD\u5199\u66F4\u65B0\u8303\u56F4"]}),(0,t.jsx)("p",{children:r[10].value}),(0,t.jsx)(j.Z,{lang:"ts",children:r[11].value})]})]})})}E.default=D},4311:function(L,E,n){var A=n(39114),C=n.n(A),g=n(70125),O=n.n(g),j=n(54996),T=n(70079),S=n(33296),y=n(35250),b={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,o=[];return Object.entries(e.properties||{}).forEach(function(f){var u,l=O()(f,2),h=l[0],_=l[1];o.push("".concat(h).concat((u=e.required)!==null&&u!==void 0&&u.includes(h)?"":"?",": ").concat(_.type==="object"?"object":s.toString(_)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,o=e.signature;if(!o)return"Function";var f="oneOf"in o?o.oneOf:[o];return f.map(function(u){return"".concat(u.isAsync?"async ":"","(").concat(u.arguments.map(function(l){return"".concat(l.key,": ").concat(s.toString(l))}).join(", "),") => ").concat(s.toString(u.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(o){return s.getValidClassName(o)||s.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},t=function(e){var s=useState(function(){return b.toString(e)}),o=_slicedToArray(s,2),f=o[0],u=o[1];return useEffect(function(){u(b.toString(e))},[e]),_jsx("code",{children:f})},D=function(e){var s,o=useRouteMeta(),f=o.frontmatter,u=useAtomAssets(),l=u.components,h=e.id||f.atomId,_=useIntl();if(!h)throw new Error("`id` properties if required for API component!");var p=l==null?void 0:l[h];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:_.formatMessage({id:"api.component.name"})}),_jsx("th",{children:_.formatMessage({id:"api.component.description"})}),_jsx("th",{children:_.formatMessage({id:"api.component.type"})}),_jsx("th",{children:_.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:p&&(s=p.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(p.propsConfig.properties).map(function(m){var v,d=_slicedToArray(m,2),i=d[0],a=d[1];return _jsxs("tr",{children:[_jsx("td",{children:i}),_jsx("td",{children:a.description||"--"}),_jsx("td",{children:_jsx(t,_objectSpread({},a))}),_jsx("td",{children:_jsx("code",{children:(v=p.propsConfig.required)!==null&&v!==void 0&&v.includes(i)?_.formatMessage({id:"api.component.required"}):JSON.stringify(a.default)||"--"})})]},i)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:_.formatMessage({id:"api.component.".concat(l?"not.found":"unavailable")},{id:h})})})})]})})},P=null},53267:function(L,E,n){var A=n(39114),C=n(35250),g=function(T){return _jsx("span",_objectSpread({className:"dumi-default-badge"},T))},O=null},33296:function(L,E,n){var A=n(39114),C=n(70125),g=n(11221),O=n(14315),j=n(70079),T=n(35250),S=null,y=function(D){var P=D.children,r=_objectWithoutProperties(D,S),e=useRef(null),s=useState(!1),o=_slicedToArray(s,2),f=o[0],u=o[1],l=useState(!1),h=_slicedToArray(l,2),_=h[0],p=h[1];return useEffect(function(){var m=e.current;if(m){var v=throttle(function(){u(m.scrollLeft>0),p(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return v(),m.addEventListener("scroll",v),window.addEventListener("resize",v),function(){m.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":f||void 0,"data-right-folded":_||void 0,children:_jsx("table",_objectSpread(_objectSpread({},r),{},{children:P}))})})},b=null},12133:function(L,E,n){n.d(E,{Z:function(){return v}});var A=n(39114),C=n.n(A),g=n(70125),O=n.n(g),j=n(79664),T=n.n(j),S=n(53474),y=n(23057),b=n(322),t=n(56261),D=n(23433),P=n(18838),r=n(70079),e=n(35250);function s(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=[];return[].concat(d).forEach(function(c,N){var x="".concat(i?"".concat(i,"-"):"").concat(N);switch(c==null?void 0:c.type){case"ul":{var M,I=((M=a[a.length-1])===null||M===void 0?void 0:M.children)||a,U=s(c.props.children||[],x);I.push.apply(I,T()(U));break}case"li":{var B=s(c.props.children,x);a.push({title:[].concat(c.props.children).filter(function(R){return R.type!=="ul"}),key:x,children:B,isLeaf:!B.length});break}default:}}),a}var o=function(i){var a=(0,r.useState)(s(i)),c=O()(a,2),N=c[0],x=c[1];return(0,r.useEffect)(function(){x(s(i))},[i]),N},f=function(i){var a=i.isLeaf,c=i.expanded;return a?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(S.r,{fill:"currentColor"})}):c?(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(y.r,{fill:"currentColor"})}):(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(b.r,{fill:"currentColor"})})},u=function(i){var a=i.isLeaf,c=i.expanded;return a?(0,e.jsx)("span",{className:"tree-switcher-leaf-line"}):c?(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(t.r,{fill:"currentColor"})})}):(0,e.jsx)("span",{className:"tree-switcher-line-icon",children:(0,e.jsx)("span",{className:"dumi-default-tree-icon",children:(0,e.jsx)(D.r,{fill:"currentColor"})})})},l=function(){return{height:0,opacity:0}},h=function(i){var a=i.scrollHeight;return{height:a,opacity:1}},_=function(i){return{height:i?i.offsetHeight:0}},p=function(i,a){return(a==null?void 0:a.deadline)===!0||a.propertyName==="height"},m={motionName:"ant-motion-collapse",onAppearStart:l,onEnterStart:l,onAppearActive:h,onEnterActive:h,onLeaveStart:_,onLeaveActive:l,onAppearEnd:p,onEnterEnd:p,onLeaveEnd:p,motionDeadline:500},v=function(d){var i=o(d.children),a=(0,r.createRef)(),c=function(x,M){var I=M.isLeaf;I||x.shiftKey||x.metaKey||x.ctrlKey||a.current.onNodeExpand(x,M)};return(0,e.jsx)(P.Z,{className:"dumi-default-tree",icon:f,ref:a,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:C()(C()({},m),{},{motionAppear:!1}),onClick:c,treeData:[{key:"0",title:d.title||"<root>",children:i}],defaultExpandAll:!0,switcherIcon:u})}}}]);
