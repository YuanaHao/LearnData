"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7458],{7458:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var l=s(5995),a=s(7076),r=s(6604),u=s(6228),i=s(5252),n=s(8593),o=s(9211),c=s(5448);const h=["/blog.html","/intro.html","/posts/AISys_%E5%88%86%E5%B8%83%E5%BC%8F.html","/posts/AISys_%E5%88%86%E5%B8%83%E5%BC%8F%EF%BC%88%E9%80%89%E8%AF%BB).html","/posts/CS149.html","/posts/CS149_asst1.html","/posts/factorial_Stirling.html","/404.html","/","/posts/","/category/","/category/sosd/","/category/cs149/","/category/cs149-lab/","/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/","/tag/","/tag/%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/","/tag/aisys/","/tag/%E5%B9%B6%E8%A1%8C%E8%BF%90%E7%AE%97/","/tag/%E5%85%AC%E5%BC%80%E8%AF%BE/","/tag/%E5%B9%B6%E8%A1%8C%E8%AE%A1%E7%AE%97/","/tag/lab/","/tag/%E7%AE%97%E6%B3%95/","/tag/%E6%95%B0%E5%AD%A6/","/article/","/star/","/timeline/"];s(4193);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),p=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:y}=c.s,d=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var E=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:t}){const s=(0,n.rd)(),h=(0,n.Zv)(),E=(0,l.s5)(c.a),{enabled:m,addQueryHistory:g,queryHistory:B,removeQueryHistory:A}=(()=>{const{queryHistoryCount:e}=c.s,t=e>0;return{enabled:t,queryHistory:v,addQueryHistory:s=>{t&&(v.value=Array.from(new Set([s,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:H,resultHistory:C,addResultHistory:f,removeResultHistory:k}=(()=>{const e=y>0;return{enabled:e,resultHistory:d,addResultHistory:t=>{if(e){const e={link:p(t),display:t.display};"header"in t&&(e.header=t.header),d.value=[e,...d.value.slice(0,y-1)]}},removeResultHistory:e=>{d.value=[...d.value.slice(0,e),...d.value.slice(e+1)]}}})(),Q=m||H,R=(0,u.lW)(e,"queries"),{results:S,isSearching:w}=(e=>{const t=(0,c.u)(),s=(0,n.Zv)(),l=(0,n.BV)(),a=(0,u.KR)(0),o=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:n}=(0,c.c)(),o=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:n,suggestionsFilter:o,...c}=t.value;r?(a.value+=1,u(e.join(" "),s.value,c).then((e=>i(e,r,s.value,l.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,s],(([e])=>o(e)),{immediate:!0}),(0,i.hi)((()=>{n()}))})),{isSearching:o,results:h}})(R),b=(0,u.Kh)({isQuery:!0,index:0}),x=(0,u.KR)(0),F=(0,u.KR)(0),q=(0,i.EW)((()=>Q&&(B.value.length>0||C.value.length>0))),_=(0,i.EW)((()=>S.value.length>0)),D=(0,i.EW)((()=>S.value[x.value]||null)),W=e=>e.map((e=>(0,l.Kg)(e)?e:(0,i.h)(e[0],e[1]))),T=e=>{if("customField"===e.type){const t=c.b[e.index]||"$content",[s,a=""]=(0,l.Qd)(t)?t[h.value].split("$content"):t.split("$content");return e.display.map((e=>(0,i.h)("div",W([s,...e,a]))))}return e.display.map((e=>(0,i.h)("div",W(e))))},j=()=>{x.value=0,F.value=0,t("updateQuery",""),t("close")};return(0,a.MLh)("keydown",(l=>{if(e.isFocusing)if(_.value){if("ArrowUp"===l.key)F.value>0?F.value-=1:(x.value=x.value>0?x.value-1:S.value.length-1,F.value=D.value.contents.length-1);else if("ArrowDown"===l.key)F.value<D.value.contents.length-1?F.value+=1:(x.value=x.value<S.value.length-1?x.value+1:0,F.value=0);else if("Enter"===l.key){const t=D.value.contents[F.value];g(e.queries.join(" ")),f(t),s.push(p(t)),j()}}else if(H)if("ArrowUp"===l.key)(()=>{const{isQuery:e,index:t}=b;0===t?(b.isQuery=!e,b.index=e?C.value.length-1:B.value.length-1):b.index=t-1})();else if("ArrowDown"===l.key)(()=>{const{isQuery:e,index:t}=b;t===(e?B.value.length-1:C.value.length-1)?(b.isQuery=!e,b.index=0):b.index=t+1})();else if("Enter"===l.key){const{index:e}=b;b.isQuery?(t("updateQuery",B.value[e]),l.preventDefault()):(s.push(C.value[e].link),j())}})),(0,i.wB)([x,F],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!q.value}],id:"search-pro-results"},e.queries.length?w.value?(0,i.h)(o.S,{hint:E.value.searching}):_.value?(0,i.h)("ul",{class:"search-pro-result-list"},S.value.map((({title:t,contents:s},l)=>{const a=x.value===l;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},t||E.value.defaultTitle),s.map(((t,s)=>{const l=a&&F.value===s;return(0,i.h)(n.Wt,{to:p(t),class:["search-pro-result-item",{active:l,"aria-selected":l}],onClick:()=>{g(e.queries.join(" ")),f(t),j()}},(()=>["text"===t.type?null:(0,i.h)("title"===t.type?o.T:"heading"===t.type?o.H:o.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===t.type&&t.header?(0,i.h)("div",{class:"content-header"},t.header):null,(0,i.h)("div",T(t))])]))}))])}))):E.value.emptyResult:Q?q.value?[m?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},E.value.queryHistory),B.value.map(((e,s)=>(0,i.h)("div",{class:["search-pro-result-item",{active:b.isQuery&&b.index===s}],onClick:()=>{t("updateQuery",e)}},[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),A(s)}})])))])):null,H?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},E.value.resultHistory),C.value.map(((e,t)=>(0,i.h)(n.Wt,{to:e.link,class:["search-pro-result-item",{active:!b.isQuery&&b.index===t}],onClick:()=>{j()}},(()=>[(0,i.h)(o.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>W(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:o.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(t)}})]))))])):null]:E.value.emptyHistory:E.value.emptyResult)}})}}]);