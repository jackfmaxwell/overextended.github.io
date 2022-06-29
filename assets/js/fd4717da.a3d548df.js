"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7008],{9613:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return y}});var t=n(9496);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return n?t.createElement(d,s(s({ref:r},c),{},{components:n})):t.createElement(d,s({ref:r},c))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9159:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var t=n(5443),a=n(3010),o=(n(9496),n(9613)),s=["components"],i={},l="Benchmark",u={unversionedId:"oxmysql/Getting Started/benchmark",id:"oxmysql/Getting Started/benchmark",title:"Benchmark",description:"Internal benchmark",source:"@site/docs/oxmysql/Getting Started/benchmark.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/Getting Started/benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/benchmark.md",tags:[],version:"current",lastUpdatedAt:1656531847,formattedLastUpdatedAt:"6/29/2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Getting Started",permalink:"/docs/oxmysql/"},next:{title:"Common Issues",permalink:"/docs/oxmysql/Getting Started/issues"}},c={},m=[{value:"Lua (5.4)",id:"lua-54",level:4},{value:"JavaScript",id:"javascript",level:4}],p={toc:m};function y(e){var r=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"benchmark"},"Benchmark"),(0,o.kt)("p",null,"Internal benchmark"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Low: 0.1222ms | Avg: 0.14188357ms | Total: 1418.8357ms (10000 queries)\n")),(0,o.kt)("p",null,"Round-trip-time for exports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Low: 0.1997ms | Avg: 0.25898800ms | Total: 2589.8800ms (10000 queries)\n")),(0,o.kt)("h4",{id:"lua-54"},"Lua (5.4)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local val = 10000\nRegisterCommand('luasync', function()\n    local queryTimesLocal = {}\n    local result\n    MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n\n    for i=1, val do\n        local time = os.nanotime()\n        local r = MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n        queryTimesLocal[#queryTimesLocal+1] = (os.nanotime() - time) / 1000000\n        if i==1 then result = r end\n    end\n\n    local queryMsLow, queryMsSum = 1000, 0\n\n    for _, v in pairs(queryTimesLocal) do queryMsSum = queryMsSum + v end\n    for _, v in pairs(queryTimesLocal) do\n        if v < queryMsLow then queryMsLow = v end\n    end\n\n    local averageQueryTime = queryMsSum / #queryTimesLocal\n    print(json.encode(result))\n    print('Low: '.. queryMsLow ..'ms | Avg: '..averageQueryTime..'ms | Total: '..queryMsSum..'ms ('..#queryTimesLocal..' queries)')\nend)\n")),(0,o.kt)("h4",{id:"javascript"},"JavaScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const val = 10000\nRegisterCommand('jssync', async() => {\n  const queryTimesLocal = [];\n  let result\n  await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n\n  for(let i=0; i < val; i++) {\n    const startTime = process.hrtime()\n    const r = await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n    queryTimesLocal.push(process.hrtime(startTime)[1] / 1000000)\n    if (i === 0) result = r\n  }\n\n  const queryMsSum = queryTimesLocal.reduce((a, b) => a + b, 0)\n  const queryMsLow = queryTimesLocal.sort((a, b) => a - b)[0]\n  const averageQueryTime = queryMsSum / queryTimesLocal.length\n\n  console.log(result)\n  console.log('Low: '+ queryMsLow +'ms | Avg: '+averageQueryTime+'ms | Total: '+queryMsSum+'ms ('+queryTimesLocal.length+' queries)')\n})\n")))}y.isMDXComponent=!0}}]);