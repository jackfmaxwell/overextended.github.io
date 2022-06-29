"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8431],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),u=["components"],c={},a=void 0,l={unversionedId:"ox_inventory/Functions/Client/useSlot",id:"ox_inventory/Functions/Client/useSlot",title:"useSlot",description:"Uses the item in the given inventory slot.",source:"@site/docs/ox_inventory/Functions/Client/useSlot.md",sourceDirName:"ox_inventory/Functions/Client",slug:"/ox_inventory/Functions/Client/useSlot",permalink:"/docs/ox_inventory/Functions/Client/useSlot",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Client/useSlot.md",tags:[],version:"current",lastUpdatedAt:1656531847,formattedLastUpdatedAt:"6/29/2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"useItem",permalink:"/docs/ox_inventory/Functions/Client/useItem"},next:{title:"AddItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/AddItem"}},s={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uses the item in the given inventory slot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- slot: number\nexports.ox_inventory:useSlot(slot)\n")))}d.isMDXComponent=!0}}]);