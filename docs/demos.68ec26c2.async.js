"use strict";(self.webpackChunkhelux_docs=self.webpackChunkhelux_docs||[]).push([[2433,4610],{8598:function(M,g,o){o.r(g);var a=o(70125),_=o.n(a),d=o(73649),s=(0,d.share)({a:1}),h=_()(s,1),c=h[0],b=(0,d.atom)(3e3),E=_()(b,1),p=E[0];(0,d.watch)(function(){console.log("found price changed: [ priceState ]")},function(){return[c]}),(0,d.watch)(function(){console.log("found price or numAtom changed: ()=>[ priceState, numAtom ]")},function(){return[c,p]}),g.default=function(){return""}},7893:function(M,g,o){o.r(g);var a=o(70125),_=o.n(a),d=o(73649),s=(0,d.share)({a:1}),h=_()(s,1),c=h[0];(0,d.watch)(function(){console.log("found price.a changed: () => [priceState.a]")},function(){return[c.a]}),g.default=function(){return""}},9328:function(M,g,o){o.r(g),o.d(g,{default:function(){return P}});var a=o(70125),_=o.n(a),d=o(24610),s=o(73649);function h(){return{name:"dict",a:{b:{c:1},b1:{c1:1}},info:{name:"helux",age:1},desc:"awesome lib",extra:{list:[],mark:"extra",toBeDrive:0,prefixedMark:"",newName:""},f:1,g:1}}var c=o(35250),b=(0,s.atom)(h),E=_()(b,1),p=E[0];function A(w){var O=(0,s.useAtom)(p,{pure:w.pure}),j=_()(O,3),y=j[0],U=j[2],x=y.extra,T=y.name,C=y.desc,I=x.list,K=x.mark;return(0,c.jsxs)(d.MarkUpdate,{info:U,children:[(0,c.jsx)("div",{children:T}),(0,c.jsx)("div",{children:C}),(0,c.jsx)("div",{children:I.length}),(0,c.jsx)("div",{children:K})]})}var P=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{pure:!0}),(0,c.jsx)(A,{pure:!1})]})}},24610:function(M,g,o){o.r(g),o.d(g,{Entry:function(){return J},MarkUpdate:function(){return te},MarkUpdateH1:function(){return ne},MarkUpdateH2:function(){return re},MarkUpdateH3:function(){return ae},demoUtils:function(){return z}});var a=o(70079);function _(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,u,l,f=[],v=!0,m=!1;try{if(u=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;v=!1}else for(;!(v=(r=u.call(n)).done)&&(f.push(r.value),f.length!==t);v=!0);}catch(S){m=!0,i=S}finally{try{if(!v&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(m)throw i}}return f}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){h(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h(e,t,n){return t=w(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return b(e)||_(e,t)||E(e,t)||A()}function b(e){if(Array.isArray(e))return e}function E(e,t){if(e){if(typeof e=="string")return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}function p(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function w(e){var t=P(e,"string");return typeof t=="symbol"?t:String(t)}var O=0;function j(){return O+=1,O}function y(e){var t=e||new Date,n=t.toLocaleString(),r="".concat(t.getTime()).substring(10);return"".concat(n," ").concat(r)}function U(e,t){var n=Object.keys(e).map(function(r){return e[r]});return n.concat(t||[])}function x(){}function T(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return Math.ceil(Math.random()*e)}function C(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8,t="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var I=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2e3;return new Promise(function(n){return setTimeout(n,t)})};function K(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];R.apply(void 0,[e,"blue"].concat(n))}function R(e,t){for(var n,r=arguments.length,i=new Array(r>2?r-2:0),u=2;u<r;u++)i[u-2]=arguments[u];(n=console).log.apply(n,["%c ".concat(e),"color:".concat(t)].concat(i))}function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];R.apply(void 0,[e,"red"].concat(n))}function L(e,t){e.includes(t)||e.push(t)}function $(){var e=new Date,t=e.toLocaleString(),n=t.split(" "),r=c(n,2),i=r[1],u=e.getMilliseconds();return"".concat(i," ").concat(u)}function F(e){window.see||(window.see={}),Object.assign(window.see,e)}function H(){return{loading:!1,a:{b:{c:1},b1:{c1:1}},info:{name:"helux",age:1},desc:"awesome lib",extra:{mark:"extra",toBeDrive:0,prefixedMark:"",newName:""},f:1,g:1}}var z=Object.freeze({__proto__:null,getSeed:j,getLocaleTime:y,getAtionFns:U,noop:x,random:T,randomStr:C,delay:I,log:K,logColor:R,logRed:W,nodupPush:L,timemark:$,bindToWindow:F,dictFactory:H});function N(){var e=a.useState({}),t=c(e,2),n=t[1];return function(){return n({})}}function G(e){var t=e.fns,n=t===void 0?[]:t,r=[];return Array.isArray(n)?r=n:Object.keys(n).forEach(function(i){var u=n[i];u.__fnName=i,r.push(u)}),r}function J(e){var t=e.buttonArea,n=t===void 0?"":t,r=e.children,i=a.useState(!0),u=c(i,2),l=u[0],f=u[1],v=N();return a.createElement("div",null,a.createElement("button",{onClick:function(){return f(!l)}},"switch show"),a.createElement("button",{onClick:v},"force update"),G(e).map(function(m,S){return a.createElement("button",{key:S,onClick:m},m.__fnName||m.name)}),n,a.createElement("div",{className:"box"},l&&r))}var Q={border:"1px solid green",padding:"6px",margin:"6px"},V={fontSize:"12px",color:"#fff",padding:"3px"},X={margin:"3px",backgroundColor:"#e0e0e0"},k=["#0944d0","#fc774b","#1da187","#fdc536","#1789f5"],B=0;function Y(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=0;t?(n=B%k.length,B++):n=e%k.length;var r=k[n];return r}var Z={time:0,sn:0,insKey:0,getDeps:function(){return[]}};function q(e){var t=[];return Array.isArray(e)?t=e||[]:t=[e],t}function ee(e){var t=q(e),n=0,r="",i=t.map(function(f){return f.insKey}).join(","),u=[];t.forEach(function(f){n+=f.sn;var v=f.getDeps();v.forEach(function(m){return L(u,m)})}),r=u.join(" , ");var l=t.length>1?"(sn sum ".concat(n,")"):"(sn ".concat(n,")");return{sn:n,depStr:r,snStr:l,insKeyStr:i}}function D(e){var t=e.name,n=t===void 0?"MarkUpdate":t,r=e.info,i=r===void 0?Z:r,u=e.forceColor,l=ee(i),f=l.sn,v=l.insKeyStr,m=l.depStr,S=l.snStr;return a.createElement("div",{style:Q},e.children,a.createElement("div",{style:s(s({},V),{},{backgroundColor:Y(f,u)})},"[",n,"] update at ",y()," ",S," (insKey ",v,")"),m&&a.createElement("div",{style:{color:"green"}}," deps is [ ",m," ]"))}function te(e){return a.createElement(D,s({},e),e.children)}function ne(e){return a.createElement(D,s({},e),a.createElement("h1",null,e.children))}function re(e){return a.createElement(D,s({},e),a.createElement("h2",null,e.children))}function ae(e){return a.createElement(D,s({},e),a.createElement("h3",{style:X},e.children))}}}]);
