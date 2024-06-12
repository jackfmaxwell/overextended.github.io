(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7545],{84421:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oxmysql/Functions/rawExecute",function(){return n(53940)}])},53940:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return t}});var l=n(52676),r=n(82601),i=n(48745),o=n(77100);let t=[{depth:2,value:"Promise",id:"promise"},{depth:2,value:"Callback",id:"callback"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",pre:"pre",span:"span",strong:"strong"},(0,i.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"RawExecute"}),"\n",(0,l.jsx)(s.p,{children:"rawExecute can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query."}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Date will not return the datestring commonly used in FiveM"}),"\n",(0,l.jsx)(s.li,{children:"TINYINT 1 and BIT will not return a boolean"}),"\n",(0,l.jsx)(s.li,{children:"You can only use ? value placeholders, ?? column placeholders and named placeholders will throw an error"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Unlike ",(0,l.jsx)(s.a,{href:"./prepare",children:"prepare"}),", the SELECT statement will always return an array of rows.\nWhen using SELECT, the return value will match ",(0,l.jsx)(s.code,{children:"query"}),", ",(0,l.jsx)(s.code,{children:"single"}),", or ",(0,l.jsx)(s.code,{children:"scalar"})," depending on the number of columns and rows selected."]}),"\n",(0,l.jsx)(s.h2,{id:"promise",children:"Promise"}),"\n",(0,l.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(o.OK,{children:(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" response "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" MySQL.rawExecute."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(response, { indent "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", sort_keys "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]})]})})}),(0,l.jsx)(o.OK,{children:(0,l.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".rawExecute"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"])"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(response))"})]})]})})})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Aliases"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"exports.oxmysql.rawExecute_async"})}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"callback",children:"Callback"}),"\n",(0,l.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(o.OK,{children:(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"MySQL."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"rawExecute"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"response"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(response, { indent "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", sort_keys "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }))"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(o.OK,{children:(0,l.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".rawExecute"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SELECT `firstname`, `lastname` FROM `users` WHERE `identifier` = ?'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (response) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(response))"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Aliases"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"exports.oxmysql.rawExecute"})}),"\n"]})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/oxmysql/Functions/rawExecute.mdx",route:"/oxmysql/Functions/rawExecute",frontMatter:{title:"rawExecute"},timestamp:1718172531e3,title:"rawExecute",headings:t},pageNextRoute:"/oxmysql/Functions/rawExecute"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=84421)}),_N_E=e.O()}]);