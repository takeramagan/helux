"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[255],{15346:function(r,t,e){e.d(t,{Z:function(){return g}});var n=e(80904),_=e(70079),a=e(35250),u=["https://tnfe.gtimg.com/image/harzqyxcgz_1651755973579.png","https://tnfe.gtimg.com/image/p40w0k40pt_1651755965504.png","https://tnfe.gtimg.com/image/fxy2nbeh43_1651755969439.png","https://tnfe.gtimg.com/image/bxzj46o32k_1651755962175.png","https://tnfe.gtimg.com/image/ngex07gcez_1651755956158.png","https://tnfe.gtimg.com/image/harzqyxcgz_1651755973579.png"],Z=u[0];function l(o){return u[o]||u[0]}var p=function(){var E,U=(0,n.eL)(),c=U.frontmatter;return!((E=c.features)===null||E===void 0)&&E.length?(0,a.jsx)("div",{className:"dumi-default-features","data-cols":[3,2].find(function(m){return c.features.length%m===0})||3,children:c.features.map(function(m,i){var y=m.title,M=m.description,f=m.emoji,v=m.link,s;v&&(s=/^(\w+:)\/\/|^(mailto|tel):/.test(v)?(0,a.jsx)("a",{href:v,target:"_blank",rel:"noreferrer",children:y}):(0,a.jsx)(n.rU,{to:v,children:y}));var d={boxShadow:"1px 2px 2px 1px rgba(0, 0, 255, .2)",backgroundColor:"#fff",padding:"12px 24px",boxSizing:"border-box",height:"270px"};return(0,a.jsxs)("div",{className:"dumi-default-features-item",style:d,children:[(0,a.jsx)("div",{style:{textAlign:"center"},children:(0,a.jsx)("img",{src:l(i),style:{width:"88px",height:"88px"}})}),(0,a.jsx)("span",{style:{color:"#443082"},children:y&&(0,a.jsx)("h2",{children:s||y})}),(0,a.jsxs)("span",{style:{color:"#ad4e00"},children:[" ",M&&(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:M}})]})]},y)})}):null},g=p},24417:function(r,t,e){e.d(t,{Z:function(){return u}});var n=e(70079),_=e(35250),a=function(l){return(0,_.jsxs)("h1",{className:"dumi-default-hero-title",children:[(0,_.jsx)("img",{src:"https://tnfe.gtimg.com/image/dlykfuw8ai_1703851692543.png",style:{paddingRight:"30px"}}),(0,_.jsx)("span",{children:l.children})]})},u=a},10473:function(r,t,e){e.d(t,{Z:function(){return M}});var n=e(39114),_=e.n(n),a=e(70125),u=e.n(a),Z=e(30011),l=e(19444),p=e(80904),g=e(70079),o=e(35250),E=function(){return(0,o.jsx)(o.Fragment,{})},U=E,c=function(v){var s=v.data,d=(0,p.TH)(),O=d.pathname,S=(0,g.useState)(function(){var j;return(j=s.children)===null||j===void 0?void 0:j.some(function(P){var C=P.activePath||P.link;return C&&O.startsWith(C)})}),I=u()(S,2),L=I[0],T=I[1],D=s.children&&(0,o.jsx)("button",{className:"dumi-default-navbar-collapse-btn",type:"button",onClick:function(P){P.stopPropagation(),T(function(C){return!C})},"data-collapsed":L||void 0,children:(0,o.jsx)(Z.r,{})}),k=s.children&&(0,o.jsx)("ul",{className:"dumi-default-navbar-dropdown","data-collapsed":L||void 0,children:(0,o.jsx)(i,{data:s.children})}),h=s.activePath||s.link,x=h&&O.startsWith(h)?{className:"active"}:{};return console.log("--->",s),s.link?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.rU,_()(_()({to:s.link},x),{},{children:s.title})),D,k]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",_()(_()({onClick:function(P){P.stopPropagation(),T(function(C){return!C})}},x),{},{children:s.title})),D,k]})};function m(f){return f.title==="GitHub"?(0,o.jsxs)("span",{children:[f.title," ",(0,o.jsx)(l.r,{style:{width:"18px",verticalAlign:"top"}})]}):f.title}var i=function(v){var s=v.data;return(0,o.jsx)(o.Fragment,{children:s.map(function(d){return(0,o.jsx)("li",{children:d.link&&/^(\w+:)\/\/|^(mailto|tel):/.test(d.link)?(0,o.jsx)("a",{href:d.link,target:"_blank",rel:"noreferrer",children:m(d)}):(0,o.jsx)(c,{data:d})},d.activePath||d.link||d.title)})})},y=function(){var v=(0,p.OK)();return(0,o.jsxs)("ul",{className:"dumi-default-navbar",children:[(0,o.jsx)(i,{data:v}),(0,o.jsx)(U,{})]})},M=y},33731:function(r,t,e){e.d(t,{Z:function(){return l}});var n=e(80904),_=e(87482),a=e(70079),u=e(35250),Z=function(){var g=(0,n.TH)(),o=g.pathname,E=(0,n.eL)(),U=(0,n.tx)();return U?(0,u.jsx)("div",{className:"dumi-default-sidebar smallScBar",children:U.map(function(c,m){return(0,u.jsxs)("dl",{className:"dumi-default-sidebar-group",children:[c.title&&(0,u.jsx)("dt",{children:c.title}),c.children.map(function(i){return(0,u.jsxs)("dd",{children:[(0,u.jsx)(n.OL,{to:i.link,title:i.title,end:!0,children:i.title}),i.link===o&&E.frontmatter.toc==="menu"&&(0,u.jsx)(_.Z,{})]},i.link)})]},String(m))})}):null},l=Z},87482:function(r,t,e){e.d(t,{Z:function(){return E}});var n=e(39114),_=e.n(n),a=e(70125),u=e.n(a),Z=e(41226),l=e(80904),p=e(70079),g=e(35250),o=function(){var c=(0,l.TH)(),m=c.pathname,i=c.search,y=c.hash,M=(0,l.eL)(),f=(0,l.zh)(),v=(0,l.WF)(),s=v.loading,d=(0,p.useRef)(0),O=(0,p.useState)([]),S=u()(O,2),I=S[0],L=S[1],T=p.useMemo(function(){var D=M.toc;return f&&(D=f.toc),D.filter(function(k){var h=k.depth;return h>1&&h<4})},[M,f]);return(0,p.useEffect)(function(){if(!s){var D=T.map(function(k){var h=k.id;return{current:document.getElementById(h)}});L(D)}},[m,i,s,T]),I.length?(0,g.jsx)(Z.i,{sectionRefs:I,children:function(k){var h=k.currentElementIndexInViewport;return h>-1&&(d.current=h),(0,g.jsx)("ul",{className:"dumi-default-toc",children:T.filter(function(x){var j=x.depth;return j>1&&j<4}).map(function(x,j){var P="".concat(i,"#").concat(encodeURIComponent(x.id)),C=h>-1?h:d.current;return(0,g.jsx)("li",{"data-depth":x.depth,children:(0,g.jsx)(l.rU,_()(_()({to:P,onClickCapture:function(){decodeURIComponent(y).slice(1)===x.id&&l.m8.replace("".concat(m).concat(i))},title:x.title},C===j?{className:"active"}:{}),{},{children:x.title}))},x.id)})})}}):null},E=o},70736:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(32800)},44044:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(29684)},66803:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(35750)},52796:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(41345)},34395:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(71314)},26415:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(6391)},88500:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(70196)},17353:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(27883)},32776:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(66265)},65989:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(51669)},22224:function(r,t,e){e.d(t,{ZP:function(){return n.ZP}});var n=e(25995)},89471:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(20406)},27618:function(r,t,e){e.d(t,{Z:function(){return n.Z}});var n=e(99419)}}]);
