(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2788],{5846:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oxmysql/Functions/prepare",function(){return n(76483)}])},76483:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return t}});var r=n(52676),l=n(82601),i=n(48745),o=n(77100);let t=[{depth:2,value:"Promise",id:"promise"},{depth:2,value:"Callback",id:"callback"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong"},(0,i.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Prepare"}),"\n",(0,r.jsx)(e.p,{children:"Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Date will not return the datestring commonly used in FiveM"}),"\n",(0,r.jsx)(e.li,{children:"TINYINT 1 and BIT will not return a boolean"}),"\n",(0,r.jsx)(e.li,{children:"You can only use ? value placeholders, ?? column placeholders and named placeholders will throw an error"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Unlike ",(0,r.jsx)(e.a,{href:"./rawExecute",children:"rawExecute"}),", the SELECT statement will return a column, row, or array of rows depending on the number of columns and rows selected."]}),"\n",(0,r.jsx)(e.h2,{id:"promise",children:"Promise"}),"\n",(0,r.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,r.jsx)(o.OK,{children:(0,r.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" response "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" MySQL.prepare."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(response, { indent "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", sort_keys "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]})]})})}),(0,r.jsx)(o.OK,{children:(0,r.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".prepare"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"])"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(response))"})]})]})})})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"exports.oxmysql.prepare_async"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"callback",children:"Callback"}),"\n",(0,r.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,r.jsx)(o.OK,{children:(0,r.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"MySQL."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"prepare"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"response"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(response, { indent "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", sort_keys "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,r.jsx)(o.OK,{children:(0,r.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".prepare"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (response) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(response))"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"exports.oxmysql.prepare"})}),"\n"]})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/oxmysql/Functions/prepare.mdx",route:"/oxmysql/Functions/prepare",frontMatter:{title:"prepare"},timestamp:1718172531e3,title:"prepare",headings:t},pageNextRoute:"/oxmysql/Functions/prepare"})}},function(s){s.O(0,[2601,9774,2888,179],function(){return s(s.s=5846)}),_N_E=s.O()}]);