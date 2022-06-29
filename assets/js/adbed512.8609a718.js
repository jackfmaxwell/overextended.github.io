"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9491],{9613:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(9496);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3653:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var t=n(5443),a=n(3010),l=(n(9496),n(9613)),i=["components"],o={},s="Prepare",p={unversionedId:"oxmysql/Usage/prepare",id:"oxmysql/Usage/prepare",title:"Prepare",description:"The only function that provides true prepared statements, granting native protection and query planning by MySQL.",source:"@site/docs/oxmysql/Usage/prepare.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/prepare",permalink:"/docs/oxmysql/Usage/prepare",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/prepare.md",tags:[],version:"current",lastUpdatedAt:1656531847,formattedLastUpdatedAt:"6/29/2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Insert",permalink:"/docs/oxmysql/Usage/insert"},next:{title:"Query",permalink:"/docs/oxmysql/Usage/query"}},u={},c=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],d={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"prepare"},"Prepare"),(0,l.kt)("p",null,"The only function that provides true ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2#using-prepared-statements"},"prepared statements"),", granting native protection and query planning by MySQL.",(0,l.kt)("br",{parentName:"p"}),"\n","Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Date will not return the datestring commonly used in FiveM"),(0,l.kt)("li",{parentName:"ul"},"TINYINT 1 and BIT will not return a boolean"),(0,l.kt)("li",{parentName:"ul"},"You can only use ",(0,l.kt)("inlineCode",{parentName:"li"},"?")," value placeholders, ",(0,l.kt)("inlineCode",{parentName:"li"},"??")," column placeholders and named placeholders will throw an error  ")),(0,l.kt)("p",null,"When using SELECT, the return value will match ",(0,l.kt)("inlineCode",{parentName:"p"},"query, single, or scalar")," depending on the number of columns and rows selected."),(0,l.kt)("h2",{id:"lua"},"Lua"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:prepare\n-- Alias: MySQL.Async.prepare\n\nMySQL.prepare('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)\n    if result then\n        for _, v in pairs(result) do\n            print(v.identifier, v.firstname, v.lastname)\n        end\n    end\nend)\n")),(0,l.kt)("h3",{id:"promise"},"Promise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:prepare_async\n-- Alias: MySQL.Sync.prepare\n\nCreateThread(function()\n    local result = MySQL.prepare.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})\n    if result then\n        for _, v in pairs(result) do\n            print(v.identifier, v.firstname, v.lastname)\n        end\n    end\nend)\n")),(0,l.kt)("h2",{id:"javascript"},"JavaScript"),(0,l.kt)("h3",{id:"callback-1"},"Callback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"exports.oxmysql.prepare('SELECT * FROM users WHERE identifier = ?', [playerIdentifier], function(result) {\n  if (result) {\n    result.forEach((v) => {\n      console.log(v.identifier, v.firstname, v.lastname)\n    })\n  }\n})\n")),(0,l.kt)("h3",{id:"promise-1"},"Promise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  const result = await exports.oxmysql.prepare_async('SELECT * FROM users WHERE identifier = ?', [playerIdentifier]) {\n  if (result) {\n    result.forEach((v) => {\n      console.log(v.identifier, v.firstname, v.lastname)\n    })\n  }\n})()\n")))}m.isMDXComponent=!0}}]);