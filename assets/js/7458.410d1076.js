"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7458],{7458:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var l=s(5995),a=s(7076),r=s(6604),u=s(6228),i=s(5252),o=s(8593),n=s(9211),c=s(5448);const h=["/blog.html","/intro.html","/posts/0_REPORT.html","/posts/1_REPORT.html","/posts/AISys_%E5%88%86%E5%B8%83%E5%BC%8F.html","/posts/CS149_asst1.html","/posts/CS61A.html","/posts/MLSys_%E5%88%86%E5%B8%83%E5%BC%8F%EF%BC%88%E9%80%89%E8%AF%BB).html","/posts/PA.html","/posts/factorial_Stirling.html","/posts/%E6%96%87%E7%94%9F%E5%9B%BE.html","/404.html","/","/posts/","/category/","/category/asc/","/category/sosd/","/category/cs149-lab/","/category/cs61a/","/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/","/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/","/tag/","/tag/test/","/tag/asc/","/tag/2025competition/","/tag/%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F/","/tag/mlsys/","/tag/%E5%B9%B6%E8%A1%8C%E8%BF%90%E7%AE%97/","/tag/%E5%85%AC%E5%BC%80%E8%AF%BE/","/tag/%E5%B9%B6%E8%A1%8C%E8%AE%A1%E7%AE%97/","/tag/lab/","/tag/mooc/","/tag/cs/","/tag/berkeley/","/tag/%E7%B3%BB%E7%BB%9F/","/tag/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90/","/tag/%E7%AE%97%E6%B3%95/","/tag/%E6%95%B0%E5%AD%A6/","/tag/%E5%88%86%E5%B8%83%E5%BC%8F%E6%8E%A8%E7%90%86/","/tag/%E6%96%87%E7%94%9F%E5%9B%BE/","/article/","/star/","/timeline/"];s(4193);const v=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),E=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:p}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var d=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:t}){const s=(0,o.rd)(),h=(0,o.Zv)(),d=(0,l.s5)(c.a),{enabled:g,addQueryHistory:B,queryHistory:m,removeQueryHistory:A}=(()=>{const{queryHistoryCount:e}=c.s,t=e>0;return{enabled:t,queryHistory:v,addQueryHistory:s=>{t&&(v.value=Array.from(new Set([s,...v.value.slice(0,e-1)])))},removeQueryHistory:e=>{v.value=[...v.value.slice(0,e),...v.value.slice(e+1)]}}})(),{enabled:C,resultHistory:H,addResultHistory:f,removeResultHistory:R}=(()=>{const e=p>0;return{enabled:e,resultHistory:y,addResultHistory:t=>{if(e){const e={link:E(t),display:t.display};"header"in t&&(e.header=t.header),y.value=[e,...y.value.slice(0,p-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),k=g||C,Q=(0,u.lW)(e,"queries"),{results:F,isSearching:S}=(e=>{const t=(0,c.u)(),s=(0,o.Zv)(),l=(0,o.BV)(),a=(0,u.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:o,suggestionsFilter:n,...c}=t.value;r?(a.value+=1,u(e.join(" "),s.value,c).then((e=>i(e,r,s.value,l.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,s],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{isSearching:n,results:h}})(Q),b=(0,u.Kh)({isQuery:!0,index:0}),w=(0,u.KR)(0),_=(0,u.KR)(0),x=(0,i.EW)((()=>k&&(m.value.length>0||H.value.length>0))),q=(0,i.EW)((()=>F.value.length>0)),D=(0,i.EW)((()=>F.value[w.value]||null)),T=e=>e.map((e=>(0,l.Kg)(e)?e:(0,i.h)(e[0],e[1]))),W=e=>{if("customField"===e.type){const t=c.b[e.index]||"$content",[s,a=""]=(0,l.Qd)(t)?t[h.value].split("$content"):t.split("$content");return e.display.map((e=>(0,i.h)("div",T([s,...e,a]))))}return e.display.map((e=>(0,i.h)("div",T(e))))},M=()=>{w.value=0,_.value=0,t("updateQuery",""),t("close")};return(0,a.MLh)("keydown",(l=>{if(e.isFocusing)if(q.value){if("ArrowUp"===l.key)_.value>0?_.value-=1:(w.value=w.value>0?w.value-1:F.value.length-1,_.value=D.value.contents.length-1);else if("ArrowDown"===l.key)_.value<D.value.contents.length-1?_.value+=1:(w.value=w.value<F.value.length-1?w.value+1:0,_.value=0);else if("Enter"===l.key){const t=D.value.contents[_.value];B(e.queries.join(" ")),f(t),s.push(E(t)),M()}}else if(C)if("ArrowUp"===l.key)(()=>{const{isQuery:e,index:t}=b;0===t?(b.isQuery=!e,b.index=e?H.value.length-1:m.value.length-1):b.index=t-1})();else if("ArrowDown"===l.key)(()=>{const{isQuery:e,index:t}=b;t===(e?m.value.length-1:H.value.length-1)?(b.isQuery=!e,b.index=0):b.index=t+1})();else if("Enter"===l.key){const{index:e}=b;b.isQuery?(t("updateQuery",m.value[e]),l.preventDefault()):(s.push(H.value[e].link),M())}})),(0,i.wB)([w,_],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!q.value:!x.value}],id:"search-pro-results"},e.queries.length?S.value?(0,i.h)(n.S,{hint:d.value.searching}):q.value?(0,i.h)("ul",{class:"search-pro-result-list"},F.value.map((({title:t,contents:s},l)=>{const a=w.value===l;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},t||d.value.defaultTitle),s.map(((t,s)=>{const l=a&&_.value===s;return(0,i.h)(o.Wt,{to:E(t),class:["search-pro-result-item",{active:l,"aria-selected":l}],onClick:()=>{B(e.queries.join(" ")),f(t),M()}},(()=>["text"===t.type?null:(0,i.h)("title"===t.type?n.T:"heading"===t.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===t.type&&t.header?(0,i.h)("div",{class:"content-header"},t.header):null,(0,i.h)("div",W(t))])]))}))])}))):d.value.emptyResult:k?x.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},d.value.queryHistory),m.value.map(((e,s)=>(0,i.h)("div",{class:["search-pro-result-item",{active:b.isQuery&&b.index===s}],onClick:()=>{t("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),A(s)}})])))])):null,C?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},d.value.resultHistory),H.value.map(((e,t)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!b.isQuery&&b.index===t}],onClick:()=>{M()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>T(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),R(t)}})]))))])):null]:d.value.emptyHistory:d.value.emptyResult)}})}}]);