import{k as f,d as p,e as d,f as l,g as h,h as m,i as y,r as v,j as g,l as k,t as S}from"./index.552c25ad.js";import{s as $,a as w,g as E,f as x,b as N,S as Q,c as b}from"./index.5dea0488.js";import"https://cdn.rawgit.com/JDMcKinstry/JavaScriptDateFormat/master/Date.format.min.js";const D=S('<div class="ink-mde-search-panel"><input class="ink-mde-search-input" type="text"></div>',3),R=()=>[$({top:!0,createPanel:a=>d(c=>{const[r,i]=l(E(a.state));let s;const n=e=>{if(g(a,e,"search-panel"))return e.preventDefault();e.code==="Enter"&&(e.preventDefault(),e.shiftKey?x(a):N(a))},u=e=>{const{value:t}=e.target;i(new Q({search:t})),a.dispatch({effects:b.of(r())})};return{destroy:()=>{c()},dom:(()=>{const e=h(D),t=e.firstChild;e.$$keydown=n;const o=s;return typeof o=="function"?k(o,t):s=t,t.$$keydown=n,t.$$input=u,m(t,"main-field","true"),y(()=>t.value=r().search),v(),e})(),mount:()=>{s==null||s.focus()},top:!0}})}),f.of(w)];p(["keydown","input"]);export{R as search};