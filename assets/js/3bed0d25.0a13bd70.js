"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6124],{9613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(t),d=o,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4829:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(5443),o=t(3010),a=(t(9496),t(9613)),l=["components"],i={title:"Progress"},p=void 0,s={unversionedId:"ox_lib/Interface/Client/progress",id:"ox_lib/Interface/Client/progress",title:"Progress",description:"lib.progressBar",source:"@site/docs/ox_lib/Interface/Client/progress.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/progress",permalink:"/docs/ox_lib/Interface/Client/progress",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/progress.md",tags:[],version:"current",lastUpdatedAt:1656531847,formattedLastUpdatedAt:"6/29/2022",frontMatter:{title:"Progress"},sidebar:"ox_lib",previous:{title:"Notifications",permalink:"/docs/ox_lib/Interface/Client/notify"},next:{title:"TextUI",permalink:"/docs/ox_lib/Interface/Client/textui"}},c={},u=[{value:"lib.progressBar",id:"libprogressbar",level:3},{value:"lib.progressCircle",id:"libprogresscircle",level:3},{value:"lib.progressActive",id:"libprogressactive",level:3},{value:"lib.cancelProgress",id:"libcancelprogress",level:3}],b={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"libprogressbar"},"lib.progressBar"),(0,a.kt)("p",null,"Displays a running progress bar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- duration: number\n-- label: string\n-- useWhileDead: boolean (optional)\n-- canCancel: boolean (optional)\n-- anim: table (optional)\n    -- dict: string (optional - either scenario or dict)\n    -- clip: string\n    -- flag: number (optional - default is 49)\n    -- blendIn: float (optional - default is 3.0)\n    -- blendOut: float (optional - default is 1.0)\n    -- duration: number (optional - default is -1)\n    -- playbackRate: number (optional - default is 0)\n    -- lockX: boolean (optional)\n    -- lockY: boolean (optional)\n    -- lockZ: boolean (optional)\n\n    -- scenario: string (optional - either scenario or dict)\n    -- playEnter: boolean (optional - default is true)\n-- prop: table (optional)\n    -- model: hash\n    -- bone: number (optional - default is 60309)\n    -- pos: table\n        -- x: number\n        -- y: number\n        -- z: number\n    -- rot: table\n        -- x: number\n        -- y: number\n        -- z: number\n-- disable: table (optional)\n    -- move: boolean (optional)\n    -- car: boolean (optional)\n    -- combat: boolean (optional)\n    -- mouse: boolean (optional)\n    \nlib.progressBar(data)\n")),(0,a.kt)("p",null,"If you want to define multiple props, you can pass them\nas individual tables in the ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," table."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"if lib.progressBar({\n    duration = 2000,\n    label = 'Drinking water',\n    useWhileDead = false,\n    canCancel = true,\n    disable = {\n        car = true,\n    },\n    anim = {\n        dict = 'mp_player_intdrink',\n        clip = 'loop_bottle' \n    },\n    prop = {\n        model = `prop_ld_flow_bottle`,\n        pos = vec3(0.03, 0.03, 0.02),\n        rot = vec3(0.0, 0.0, -1.5) \n    },\n}) then print('Do stuff when complete') else print('Do stuff when cancelled') end\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/7pAwktr.png",alt:"progress_bar"})),(0,a.kt)("h3",{id:"libprogresscircle"},"lib.progressCircle"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"lib.progressBar")," except it displays a circle and has no label and\nyou can define a position."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- duration: number\n-- label: string (optional)\n-- position: "middle" or "bottom" (optional - default is "middle")\n-- useWhileDead: boolean (optional)\n-- canCancel: boolean (optional)\n-- anim: table (optional)\n    -- dict: string (optional - either scenario or dict)\n    -- clip: string\n    -- flag: number (optional - default is 49)\n    -- blendIn: float (optional - default is 3.0)\n    -- blendOut: float (optional - default is 1.0)\n    -- duration: number (optional - default is -1)\n    -- playbackRate: number (optional - default is 0)\n    -- lockX: boolean (optional)\n    -- lockY: boolean (optional)\n    -- lockZ: boolean (optional)\n\n    -- scenario: string (optional - either scenario or dict)\n    -- playEnter: boolean (optional - default is true)\n-- prop: table (optional)\n    -- model: hash\n    -- bone: number (optional - default is 60309)\n    -- pos: table\n        -- x: number\n        -- y: number\n        -- z: number\n    -- rot: table\n        -- x: number\n        -- y: number\n        -- z: number\n-- disable: table (optional)\n    -- move: boolean (optional)\n    -- car: boolean (optional)\n    -- combat: boolean (optional)\n    -- mouse: boolean (optional)\n\nlib.progressCircle(data)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"if lib.progressCircle({\n    duration = 2000,\n    position = 'bottom',\n    useWhileDead = false,\n    canCancel = true,\n    disable = {\n        car = true,\n    },\n    anim = {\n        dict = 'mp_player_intdrink',\n        clip = 'loop_bottle' \n    },\n    prop = {\n        model = `prop_ld_flow_bottle`,\n        pos = vec3(0.03, 0.03, 0.02),\n        rot = vec3(0.0, 0.0, -1.5) \n    },\n}) then print('Do stuff when complete') else print('Do stuff when cancelled') end\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/nETRm5f.png",alt:"progress_circle"})),(0,a.kt)("h3",{id:"libprogressactive"},"lib.progressActive"),(0,a.kt)("p",null,"Returns true if a progress bar is currently active."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.progressActive()\n")),(0,a.kt)("h3",{id:"libcancelprogress"},"lib.cancelProgress"),(0,a.kt)("p",null,"If there is a progress bar active and the\nprogress bar can be cancelled then it cancels it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.cancelProgress()\n")))}d.isMDXComponent=!0}}]);