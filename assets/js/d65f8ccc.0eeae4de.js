"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[992],{9613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7640:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9496),r=n(1626),i="tabItem_zeWL";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},866:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(5443),r=n(9496),i=n(1626),l=n(4252),o=n(1135),u=n(9162),s=n(3946),m="tabList_gs2P",c="tabItem_Ugfh";function p(e){var t,n,l=e.lazy,p=e.block,d=e.defaultValue,b=e.values,g=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,u.U)(),w=x.tabGroupChoices,N=x.setTabGroupChoices,_=(0,r.useState)(k),T=_[0],I=_[1],E=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=w[g];null!=C&&C!==T&&v.some((function(e){return e.value===C}))&&I(C)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==T&&(O(t),I(a),null!=g&&N(g,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,l=E.indexOf(e.currentTarget)-1;n=null!=(i=E[l])?i:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(5443),r=n(3010),i=(n(9496),n(9613)),l=n(866),o=n(7640),u=["components"],s={title:"Creating items"},m=void 0,c={unversionedId:"ox_inventory/Guides/creatingItems",id:"ox_inventory/Guides/creatingItems",title:"Creating items",description:"Defining item data",source:"@site/docs/ox_inventory/Guides/creatingItems.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/creatingItems",permalink:"/docs/ox_inventory/Guides/creatingItems",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/creatingItems.md",tags:[],version:"current",lastUpdatedAt:1656531847,formattedLastUpdatedAt:"6/29/2022",frontMatter:{title:"Creating items"},sidebar:"ox_inventory",previous:{title:"Overview",permalink:"/docs/ox_inventory/Guides/"},next:{title:"Building inventory UI",permalink:"/docs/ox_inventory/Guides/inventory_ui"}},p={},d=[{value:"Defining item data",id:"defining-item-data",level:2},{value:"Making the item usable",id:"making-the-item-usable",level:2},{value:"Item events",id:"item-events",level:2},{value:"Creating container items",id:"creating-container-items",level:2}],b={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"defining-item-data"},"Defining item data"),(0,i.kt)("p",null,"Before being able to see or use an item in game it ",(0,i.kt)("strong",{parentName:"p"},"must")," first be defined."),(0,i.kt)("p",null,"All of the items are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/data/items.lua")," file with key, value pairs.",(0,i.kt)("br",{parentName:"p"}),"\n","Key is the name (not the label) of an item and the value is a table containing the\noptions for the item."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Item options:")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"shared",label:"Shared",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- label: string\n-- weight: number (optional)\n-- stack: boolean (optional) -- If set to false will not allow the item to be stacked\n-- degrade: number (optional) -- The amount of time in minutes an item will degrade after\n-- close: boolean (optional) -- If set to false will not close the inventory on item use\n-- description: string (optional)\n-- consume: number (optional) -- Number of an item needed to use it, and removed after use (Default: 1)\n-- allowArmed: boolean (optional) -- If set to true will allow use of item while armed with a weapon\n-- client: table (optional)\n-- buttons: table (optional) -- Allows you to define custom context menu functions for the item\n"))),(0,i.kt)(o.Z,{value:"client",label:"Client",mdxType:"TabItem"},(0,i.kt)("p",null,"All values are optional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- event: string -- Event to trigger after item use\n-- status: table -- Adjust esx_status values after use\n-- anim: table -- Animation during progress bar\n    -- dict: string\n    -- clip: string\n-- prop: table -- Attached prop during progress bar\n    -- model: string or hash\n    -- pos: table (x, y, z)\n    -- rot: table (x, y, z)\n-- disable: boolean -- Disables actions during progress bar\n-- usetime: number\n-- cancel: boolean -- If set to true the player can cancel item use\n-- add: function(total) -- Function that triggers when recieving an item (Returns total item count as `total`)\n-- remove: function(total) -- Function that triggers when removing an item (Returns total item count as `total`)\n"))),(0,i.kt)(o.Z,{value:"buttons",label:"Buttons",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- label: string,\n-- action: function(slot) -- Callback function when button is clicked in context menu, returns item slot\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"burger",label:"Burger",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    weight = 220,\n    stack = true,\n    close = true,\n    client = {\n        status = { hunger = 200000 },\n        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },\n        prop = { \n            model = 'prop_cs_burger_01',\n            pos = { x = 0.02, y = 0.02, y = -0.02},\n            rot = { x = 0.0, y = 0.0, y = 0.0}\n        },\n        usetime = 2500,\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"custom_burger",label:"Custom burger",mdxType:"TabItem"},(0,i.kt)("p",null,"A modified burger item, with a description and custom crafting table."),(0,i.kt)("p",null,"Combined with several new functions and events you could easily create your own crafting system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    description = 'Just what is the secret formula?'\n    weight = 220,\n    stack = true,\n    close = true,\n    client = {\n        status = { hunger = 200000 },\n        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },\n        prop = {\n            model = 'prop_cs_burger_01', \n            pos = { x = 0.02, y = 0.02, y = -0.02}, \n            rot = { x = 0.0, y = 0.0, y = 0.0}\n        },\n        usetime = 2500,\n    }\n    crafting = {\n        ['bun'] = 2,\n        ['ketchup'] = 1,\n        ['mustard'] = 1,\n        ['cheese'] = 1,\n        ['pickles'] = 1,\n        ['lettuce'] = 1,\n        ['tomato'] = 1,\n        ['onion'] = 1, \n    }\n}\n"))),(0,i.kt)(o.Z,{value:"notify_burger",label:"Notify burger",mdxType:"TabItem"},(0,i.kt)("p",null,"A modified burger item, which gives you notifications on add and remove arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    weight = 220,\n    stack = true,\n    consume = 0,\n    client = {\n        add = function(total)\n            if total > 0 then\n                exports.ox_inventory:notify({text = 'Nice burger you got there!'})\n            end\n        end,\n\n        remove = function(total)\n            if total < 1 then\n                exports.ox_inventory:notify({text = 'You lost all of your burgers!'})\n            end\n        end\n    }\n}\n")))),(0,i.kt)("h2",{id:"making-the-item-usable"},"Making the item usable"),(0,i.kt)("p",null,"If you are using ESX you can continue using ",(0,i.kt)("inlineCode",{parentName:"p"},"ESX.RegisterUsableItem")," if desired.",(0,i.kt)("br",{parentName:"p"}),"\n","Using the built-in system is more secure and provides simple progressbar support.  "),(0,i.kt)("p",null,"An item will be usable when client variables are added to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua"},"data/items.lua"),", or has a registered item callback. Item callbacks can be added by defining an export (recommended), or by adding it to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/items/client.lua#L33"},"items/client.lua"),". "),(0,i.kt)("p",null,"When defining ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua"},"item data"),", adding client.export will trigger an event on item use.",(0,i.kt)("br",{parentName:"p"}),"\n","The correct formatting is ",(0,i.kt)("inlineCode",{parentName:"p"},"export = resourceName.exportName"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(data, slot)\n    local playerPed = PlayerPedId()\n    local maxHealth = GetEntityMaxHealth(playerPed)\n    local health = GetEntityHealth(playerPed)\n\n    -- Does the ped need to heal?\n    if health < maxHealth then\n        -- Use the bandage\n        exports.ox_inventory:useItem(data, function(data)\n            -- The item has been used, so trigger the effects\n            if data then\n                SetEntityHealth(playerPed, math.min(maxHealth, math.floor(health + maxHealth / 16)))\n                exports.ox_inventory:notify({text = 'You feel better already'})\n            end\n        end)\n    else\n        -- Don't use the item\n        exports.ox_inventory:notify({type = 'error', text = 'You don\\'t need a bandage right now'})\n    end\nend)\n")),(0,i.kt)("h2",{id:"item-events"},"Item events"),(0,i.kt)("p",null,"Similarly to the client, a callback function can be defined on the server to handle several events (usingItem, usedItem, buyItem).",(0,i.kt)("br",{parentName:"p"}),"\n","This can either be an export (recommended), or added to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/items/server.lua#L287"},"items/server.lua"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(event, item, inventory, slot, data)\n    if event == 'usingItem' then\n        local playerPed = GetPlayerPed(inventory.id)\n        local maxHealth = GetEntityMaxHealth(playerPed)\n        local health = GetEntityHealth(playerPed)\n\n        if health >= maxHealth then\n            TriggerClientEvent('ox_inventory:notify', inventory.id, {type = 'error', text = 'You don\\'t need a bandage right now'})\n\n            -- Returning 'false' will prevent the item from being used\n            return false\n        end\n\n        return\n    elseif event == 'usedItem' then\n        return TriggerClientEvent('ox_inventory:notify', inventory.id, {text = 'You feel better already'})\n\n    elseif event == 'buying' then\n        return TriggerClientEvent('ox_inventory:notify', inventory.id, {type = 'success', text = 'You bought a bandage'})\n    end\nend)\n")),(0,i.kt)("h2",{id:"creating-container-items"},"Creating container items"),(0,i.kt)("p",null,"Like with other items the item must first be registered.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['paperbag'] = {\n    label = 'Paper Bag',\n    weight = 1,\n    stack = false,\n    close = false,\n    consume = 0\n},\n")),(0,i.kt)("p",null,"When registered you can define the item as a container under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items.containers")," table in ",(0,i.kt)("inlineCode",{parentName:"p"},"/modules/items/sever.lua"),(0,i.kt)("br",{parentName:"p"}),"\n","The key for the container is the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," you gave it when registering the item.",(0,i.kt)("br",{parentName:"p"}),"\n","You can also define the number of slots, the maximum weight, blacklist and whitelist items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['name'] = {\n    -- size: {slots, maxWeight}\n        -- slots: number\n        -- maxWeight: number\n    -- blacklist: table (optional)\n        -- ['itemName'] = true\n    -- whitelist: table (optional)\n        -- ['itemName'] = true\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['paperbag'] = {\n    size = {5, 1000},\n    blacklist = {\n        ['testburger'] = true -- No burgers!\n    }\n},\n")))}g.isMDXComponent=!0}}]);