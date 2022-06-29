"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[711],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6115:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=r(5443),i=r(3010),a=(r(9496),r(9613)),l=["components"],o={},u=void 0,s={unversionedId:"ox_lib/Streaming/Client",id:"ox_lib/Streaming/Client",title:"Client",description:"Check if assets exist, such as models, and loads them into memory.",source:"@site/docs/ox_lib/Streaming/Client.md",sourceDirName:"ox_lib/Streaming",slug:"/ox_lib/Streaming/Client",permalink:"/docs/ox_lib/Streaming/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Streaming/Client.md",tags:[],version:"current",lastUpdatedAt:1656531847,formattedLastUpdatedAt:"6/29/2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Points",permalink:"/docs/ox_lib/Points/Client"},next:{title:"Client",permalink:"/docs/ox_lib/VehicleProperties/Client"}},c={},m=[{value:"lib.requestAnimDict",id:"librequestanimdict",level:3},{value:"lib.requestAnimSet",id:"librequestanimset",level:3},{value:"lib.requestModel",id:"librequestmodel",level:3},{value:"lib.requestStreamedTextureDict",id:"librequeststreamedtexturedict",level:3},{value:"lib.requestNamedPtfxAsset",id:"librequestnamedptfxasset",level:3}],d={toc:m};function p(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Check if assets exist, such as models, and loads them into memory.",(0,a.kt)("br",{parentName:"p"}),"\n","Throws errors for invalid assets and returns true if the asset is loaded."),(0,a.kt)("h3",{id:"librequestanimdict"},"lib.requestAnimDict"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- dict: string\n-- timeout: number [default: 100]\nlib.requestAnimDict(dict, timeout)\n")),(0,a.kt)("h3",{id:"librequestanimset"},"lib.requestAnimSet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- set: string\n-- timeout: number [default: 100]\nlib.requestAnimSet(set, timeout)\n")),(0,a.kt)("h3",{id:"librequestmodel"},"lib.requestModel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- model: string\n-- timeout: number [default: 100]\nlib.requestModel(model, timeout)\n")),(0,a.kt)("h3",{id:"librequeststreamedtexturedict"},"lib.requestStreamedTextureDict"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- dict: string\n-- timeout: number [default: 100]\nlib.requestStreamedTextureDict(dict, timeout)\n")),(0,a.kt)("h3",{id:"librequestnamedptfxasset"},"lib.requestNamedPtfxAsset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- fxName: string\n-- timeout: number [default: 100]\nlib.requestNamedPtfxAsset(fxName, timeout)\n")))}p.isMDXComponent=!0}}]);