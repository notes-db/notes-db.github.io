import{P as he,m as A,n as k,E as x,o as f,F as ue,q as fe,S as X,v as Y,V as de,D as z,w as pe,j as me,x as ge,y as xe,z as ye,b as Se,C as m,A as Z}from"./index.552c25ad.js";function h(){var t=arguments[0];typeof t=="string"&&(t=document.createElement(t));var e=1,r=arguments[1];if(r&&typeof r=="object"&&r.nodeType==null&&!Array.isArray(r)){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=r[n];typeof s=="string"?t.setAttribute(n,s):s!=null&&(t[n]=s)}e++}for(;e<arguments.length;e++)ee(t,arguments[e]);return t}function ee(t,e){if(typeof e=="string")t.appendChild(document.createTextNode(e));else if(e!=null)if(e.nodeType!=null)t.appendChild(e);else if(Array.isArray(e))for(var r=0;r<e.length;r++)ee(t,e[r]);else throw new RangeError("Unsupported child node: "+e)}const G=typeof String.prototype.normalize=="function"?t=>t.normalize("NFKD"):t=>t;class b{constructor(e,r,n=0,s=e.length,i,a){this.test=a,this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(n,s),this.bufferStart=n,this.normalize=i?l=>i(G(l)):G,this.query=this.normalize(r)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return ge(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let r=xe(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=ye(e);let s=this.normalize(r);for(let i=0,a=n;;i++){let l=s.charCodeAt(i),o=this.match(l,a);if(o)return this.value=o,this;if(i==s.length-1)break;a==n&&i<r.length&&r.charCodeAt(i)==l&&a++}}}match(e,r){let n=null;for(let s=0;s<this.matches.length;s+=2){let i=this.matches[s],a=!1;this.query.charCodeAt(i)==e&&(i==this.query.length-1?n={from:this.matches[s+1],to:r+1}:(this.matches[s]++,a=!0)),a||(this.matches.splice(s,2),s-=2)}return this.query.charCodeAt(0)==e&&(this.query.length==1?n={from:r,to:r+1}:this.matches.push(1,r)),n&&this.test&&!this.test(n.from,n.to,this.buffer,this.bufferPos)&&(n=null),n}}typeof Symbol<"u"&&(b.prototype[Symbol.iterator]=function(){return this});const te={from:-1,to:-1,match:/.*/.exec("")},V="gm"+(/x/.unicode==null?"":"u");class re{constructor(e,r,n,s=0,i=e.length){if(this.text=e,this.to=i,this.curLine="",this.done=!1,this.value=te,/\\[sWDnr]|\n|\r|\[\^/.test(r))return new ne(e,r,n,s,i);this.re=new RegExp(r,V+(n!=null&&n.ignoreCase?"i":"")),this.test=n==null?void 0:n.test,this.iter=e.iter();let a=e.lineAt(s);this.curLineStart=a.from,this.matchPos=W(e,s),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let r=this.matchPos<=this.to&&this.re.exec(this.curLine);if(r){let n=this.curLineStart+r.index,s=n+r[0].length;if(this.matchPos=W(this.text,s+(n==s?1:0)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<s||n>this.value.to)&&(!this.test||this.test(n,s,r)))return this.value={from:n,to:s,match:r},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}}const $=new WeakMap;class M{constructor(e,r){this.from=e,this.text=r}get to(){return this.from+this.text.length}static get(e,r,n){let s=$.get(e);if(!s||s.from>=n||s.to<=r){let l=new M(r,e.sliceString(r,n));return $.set(e,l),l}if(s.from==r&&s.to==n)return s;let{text:i,from:a}=s;return a>r&&(i=e.sliceString(r,a)+i,a=r),s.to<n&&(i+=e.sliceString(s.to,n)),$.set(e,new M(a,i)),new M(r,i.slice(r-a,n-a))}}class ne{constructor(e,r,n,s,i){this.text=e,this.to=i,this.done=!1,this.value=te,this.matchPos=W(e,s),this.re=new RegExp(r,V+(n!=null&&n.ignoreCase?"i":"")),this.test=n==null?void 0:n.test,this.flat=M.get(e,s,this.chunkEnd(s+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,r=this.re.exec(this.flat.text);if(r&&!r[0]&&r.index==e&&(this.re.lastIndex=e+1,r=this.re.exec(this.flat.text)),r){let n=this.flat.from+r.index,s=n+r[0].length;if((this.flat.to>=this.to||r.index+r[0].length<=this.flat.text.length-10)&&(!this.test||this.test(n,s,r)))return this.value={from:n,to:s,match:r},this.matchPos=W(this.text,s+(n==s?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=M.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}}typeof Symbol<"u"&&(re.prototype[Symbol.iterator]=ne.prototype[Symbol.iterator]=function(){return this});function ve(t){try{return new RegExp(t,V),!0}catch{return!1}}function W(t,e){if(e>=t.length)return e;let r=t.lineAt(e),n;for(;e<r.to&&(n=r.text.charCodeAt(e-r.from))>=56320&&n<57344;)e++;return e}function N(t){let e=h("input",{class:"cm-textfield",name:"line"}),r=h("form",{class:"cm-gotoLine",onkeydown:s=>{s.keyCode==27?(s.preventDefault(),t.dispatch({effects:R.of(!1)}),t.focus()):s.keyCode==13&&(s.preventDefault(),n())},onsubmit:s=>{s.preventDefault(),n()}},h("label",t.state.phrase("Go to line"),": ",e)," ",h("button",{class:"cm-button",type:"submit"},t.state.phrase("go")));function n(){let s=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);if(!s)return;let{state:i}=t,a=i.doc.lineAt(i.selection.main.head),[,l,o,c,g]=s,w=c?+c.slice(1):0,p=o?+o:a.number;if(o&&g){let O=p/100;l&&(O=O*(l=="-"?-1:1)+a.number/i.doc.lines),p=Math.round(i.doc.lines*O)}else o&&l&&(p=p*(l=="-"?-1:1)+a.number);let H=i.doc.line(Math.max(1,Math.min(i.doc.lines,p)));t.dispatch({effects:R.of(!1),selection:f.cursor(H.from+Math.max(0,Math.min(w,H.length))),scrollIntoView:!0}),t.focus()}return{dom:r}}const R=k.define(),U=X.define({create(){return!0},update(t,e){for(let r of e.effects)r.is(R)&&(t=r.value);return t},provide:t=>Y.from(t,e=>e?N:null)}),Me=t=>{let e=A(t,N);if(!e){let r=[R.of(!0)];t.state.field(U,!1)==null&&r.push(k.appendConfig.of([U,be])),t.dispatch({effects:r}),e=A(t,N)}return e&&e.dom.querySelector("input").focus(),!0},be=x.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),Ce=({state:t,dispatch:e})=>{let{selection:r}=t,n=f.create(r.ranges.map(s=>t.wordAt(s.head)||f.cursor(s.head)),r.mainIndex);return n.eq(r)?!1:(e(t.update({selection:n})),!0)};function ke(t,e){let{main:r,ranges:n}=t.selection,s=t.wordAt(r.head),i=s&&s.from==r.from&&s.to==r.to;for(let a=!1,l=new b(t.doc,e,n[n.length-1].to);;)if(l.next(),l.done){if(a)return null;l=new b(t.doc,e,0,Math.max(0,n[n.length-1].from-1)),a=!0}else{if(a&&n.some(o=>o.from==l.value.from))continue;if(i){let o=t.wordAt(l.value.from);if(!o||o.from!=l.value.from||o.to!=l.value.to)continue}return l.value}}const Le=({state:t,dispatch:e})=>{let{ranges:r}=t.selection;if(r.some(i=>i.from===i.to))return Ce({state:t,dispatch:e});let n=t.sliceDoc(r[0].from,r[0].to);if(t.selection.ranges.some(i=>t.sliceDoc(i.from,i.to)!=n))return!1;let s=ke(t,n);return s?(e(t.update({selection:t.selection.addRange(f.range(s.from,s.to),!1),effects:x.scrollIntoView(s.to)})),!0):!1},y=ue.define({combine(t){return fe(t,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new we(e),scrollToMatch:e=>x.scrollIntoView(e)})}});function Qe(t){return t?[y.of(t),_]:_}class se{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||ve(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(r,n)=>n=="n"?`
`:n=="r"?"\r":n=="t"?"	":"\\")}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord}create(){return this.regexp?new We(this):new Fe(this)}getCursor(e,r=0,n){let s=e.doc?e:Se.create({doc:e});return n==null&&(n=s.doc.length),this.regexp?v(this,s,r,n):S(this,s,r,n)}}class ie{constructor(e){this.spec=e}}function S(t,e,r,n){return new b(e.doc,t.unquoted,r,n,t.caseSensitive?void 0:s=>s.toLowerCase(),t.wholeWord?Ee(e.doc,e.charCategorizer(e.selection.main.head)):void 0)}function Ee(t,e){return(r,n,s,i)=>((i>r||i+s.length<n)&&(i=Math.max(0,r-2),s=t.sliceString(i,Math.min(t.length,n+2))),(e(P(s,r-i))!=m.Word||e(q(s,r-i))!=m.Word)&&(e(q(s,n-i))!=m.Word||e(P(s,n-i))!=m.Word))}class Fe extends ie{constructor(e){super(e)}nextMatch(e,r,n){let s=S(this.spec,e,n,e.doc.length).nextOverlapping();return s.done&&(s=S(this.spec,e,0,r).nextOverlapping()),s.done?null:s.value}prevMatchInRange(e,r,n){for(let s=n;;){let i=Math.max(r,s-1e4-this.spec.unquoted.length),a=S(this.spec,e,i,s),l=null;for(;!a.nextOverlapping().done;)l=a.value;if(l)return l;if(i==r)return null;s-=1e4}}prevMatch(e,r,n){return this.prevMatchInRange(e,0,r)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,r){let n=S(this.spec,e,0,e.doc.length),s=[];for(;!n.next().done;){if(s.length>=r)return null;s.push(n.value)}return s}highlight(e,r,n,s){let i=S(this.spec,e,Math.max(0,r-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!i.next().done;)s(i.value.from,i.value.to)}}function v(t,e,r,n){return new re(e.doc,t.search,{ignoreCase:!t.caseSensitive,test:t.wholeWord?Ae(e.charCategorizer(e.selection.main.head)):void 0},r,n)}function P(t,e){return t.slice(Z(t,e,!1),e)}function q(t,e){return t.slice(e,Z(t,e))}function Ae(t){return(e,r,n)=>!n[0].length||(t(P(n.input,n.index))!=m.Word||t(q(n.input,n.index))!=m.Word)&&(t(q(n.input,n.index+n[0].length))!=m.Word||t(P(n.input,n.index+n[0].length))!=m.Word)}class We extends ie{nextMatch(e,r,n){let s=v(this.spec,e,n,e.doc.length).next();return s.done&&(s=v(this.spec,e,0,r).next()),s.done?null:s.value}prevMatchInRange(e,r,n){for(let s=1;;s++){let i=Math.max(r,n-s*1e4),a=v(this.spec,e,i,n),l=null;for(;!a.next().done;)l=a.value;if(l&&(i==r||l.from>i+10))return l;if(i==r)return null}}prevMatch(e,r,n){return this.prevMatchInRange(e,0,r)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g,(r,n)=>n=="$"?"$":n=="&"?e.match[0]:n!="0"&&+n<e.match.length?e.match[n]:r))}matchAll(e,r){let n=v(this.spec,e,0,e.doc.length),s=[];for(;!n.next().done;){if(s.length>=r)return null;s.push(n.value)}return s}highlight(e,r,n,s){let i=v(this.spec,e,Math.max(0,r-250),Math.min(n+250,e.doc.length));for(;!i.next().done;)s(i.value.from,i.value.to)}}const C=k.define(),B=k.define(),d=X.define({create(t){return new Q(I(t).create(),null)},update(t,e){for(let r of e.effects)r.is(C)?t=new Q(r.value.create(),t.panel):r.is(B)&&(t=new Q(t.query,r.value?j:null));return t},provide:t=>Y.from(t,e=>e.panel)});function Ne(t){let e=t.field(d,!1);return e?e.query.spec:I(t)}class Q{constructor(e,r){this.query=e,this.panel=r}}const Re=z.mark({class:"cm-searchMatch"}),Pe=z.mark({class:"cm-searchMatch cm-searchMatch-selected"}),qe=de.fromClass(class{constructor(t){this.view=t,this.decorations=this.highlight(t.state.field(d))}update(t){let e=t.state.field(d);(e!=t.startState.field(d)||t.docChanged||t.selectionSet||t.viewportChanged)&&(this.decorations=this.highlight(e))}highlight({query:t,panel:e}){if(!e||!t.spec.valid)return z.none;let{view:r}=this,n=new pe;for(let s=0,i=r.visibleRanges,a=i.length;s<a;s++){let{from:l,to:o}=i[s];for(;s<a-1&&o>i[s+1].from-2*250;)o=i[++s].to;t.highlight(r.state,l,o,(c,g)=>{let w=r.state.selection.ranges.some(p=>p.from==c&&p.to==g);n.add(c,g,w?Pe:Re)})}return n.finish()}},{decorations:t=>t.decorations});function L(t){return e=>{let r=e.state.field(d,!1);return r&&r.query.spec.valid?t(e,r):oe(e)}}const D=L((t,{query:e})=>{let{to:r}=t.state.selection.main,n=e.nextMatch(t.state,r,r);if(!n)return!1;let s=f.single(n.from,n.to),i=t.state.facet(y);return t.dispatch({selection:s,effects:[K(t,n),i.scrollToMatch(s.main,t)],userEvent:"select.search"}),ae(t),!0}),T=L((t,{query:e})=>{let{state:r}=t,{from:n}=r.selection.main,s=e.prevMatch(r,n,n);if(!s)return!1;let i=f.single(s.from,s.to),a=t.state.facet(y);return t.dispatch({selection:i,effects:[K(t,s),a.scrollToMatch(i.main,t)],userEvent:"select.search"}),ae(t),!0}),De=L((t,{query:e})=>{let r=e.matchAll(t.state,1e3);return!r||!r.length?!1:(t.dispatch({selection:f.create(r.map(n=>f.range(n.from,n.to))),userEvent:"select.search.matches"}),!0)}),Te=({state:t,dispatch:e})=>{let r=t.selection;if(r.ranges.length>1||r.main.empty)return!1;let{from:n,to:s}=r.main,i=[],a=0;for(let l=new b(t.doc,t.sliceDoc(n,s));!l.next().done;){if(i.length>1e3)return!1;l.value.from==n&&(a=i.length),i.push(f.range(l.value.from,l.value.to))}return e(t.update({selection:f.create(i,a),userEvent:"select.search.matches"})),!0},J=L((t,{query:e})=>{let{state:r}=t,{from:n,to:s}=r.selection.main;if(r.readOnly)return!1;let i=e.nextMatch(r,n,n);if(!i)return!1;let a=[],l,o,c=[];if(i.from==n&&i.to==s&&(o=r.toText(e.getReplacement(i)),a.push({from:i.from,to:i.to,insert:o}),i=e.nextMatch(r,i.from,i.to),c.push(x.announce.of(r.phrase("replaced match on line $",r.doc.lineAt(n).number)+"."))),i){let g=a.length==0||a[0].from>=i.to?0:i.to-i.from-o.length;l=f.single(i.from-g,i.to-g),c.push(K(t,i)),c.push(r.facet(y).scrollToMatch(l.main,t))}return t.dispatch({changes:a,selection:l,effects:c,userEvent:"input.replace"}),!0}),Ie=L((t,{query:e})=>{if(t.state.readOnly)return!1;let r=e.matchAll(t.state,1e9).map(s=>{let{from:i,to:a}=s;return{from:i,to:a,insert:e.getReplacement(s)}});if(!r.length)return!1;let n=t.state.phrase("replaced $ matches",r.length)+".";return t.dispatch({changes:r,effects:x.announce.of(n),userEvent:"input.replace.all"}),!0});function j(t){return t.state.facet(y).createPanel(t)}function I(t,e){var r,n,s,i,a;let l=t.selection.main,o=l.empty||l.to>l.from+100?"":t.sliceDoc(l.from,l.to);if(e&&!o)return e;let c=t.facet(y);return new se({search:((r=e==null?void 0:e.literal)!==null&&r!==void 0?r:c.literal)?o:o.replace(/\n/g,"\\n"),caseSensitive:(n=e==null?void 0:e.caseSensitive)!==null&&n!==void 0?n:c.caseSensitive,literal:(s=e==null?void 0:e.literal)!==null&&s!==void 0?s:c.literal,regexp:(i=e==null?void 0:e.regexp)!==null&&i!==void 0?i:c.regexp,wholeWord:(a=e==null?void 0:e.wholeWord)!==null&&a!==void 0?a:c.wholeWord})}function le(t){let e=A(t,j);return e&&e.dom.querySelector("[main-field]")}function ae(t){let e=le(t);e&&e==t.root.activeElement&&e.select()}const oe=t=>{let e=t.state.field(d,!1);if(e&&e.panel){let r=le(t);if(r&&r!=t.root.activeElement){let n=I(t.state,e.query.spec);n.valid&&t.dispatch({effects:C.of(n)}),r.focus(),r.select()}}else t.dispatch({effects:[B.of(!0),e?C.of(I(t.state,e.query.spec)):k.appendConfig.of(_)]});return!0},ce=t=>{let e=t.state.field(d,!1);if(!e||!e.panel)return!1;let r=A(t,j);return r&&r.dom.contains(t.root.activeElement)&&t.focus(),t.dispatch({effects:B.of(!1)}),!0},_e=[{key:"Mod-f",run:oe,scope:"editor search-panel"},{key:"F3",run:D,shift:T,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:D,shift:T,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:ce,scope:"editor search-panel"},{key:"Mod-Shift-l",run:Te},{key:"Alt-g",run:Me},{key:"Mod-d",run:Le,preventDefault:!0}];class we{constructor(e){this.view=e;let r=this.query=e.state.field(d).query.spec;this.commit=this.commit.bind(this),this.searchField=h("input",{value:r.search,placeholder:u(e,"Find"),"aria-label":u(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=h("input",{value:r.replace,placeholder:u(e,"Replace"),"aria-label":u(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=h("input",{type:"checkbox",name:"case",form:"",checked:r.caseSensitive,onchange:this.commit}),this.reField=h("input",{type:"checkbox",name:"re",form:"",checked:r.regexp,onchange:this.commit}),this.wordField=h("input",{type:"checkbox",name:"word",form:"",checked:r.wholeWord,onchange:this.commit});function n(s,i,a){return h("button",{class:"cm-button",name:s,onclick:i,type:"button"},a)}this.dom=h("div",{onkeydown:s=>this.keydown(s),class:"cm-search"},[this.searchField,n("next",()=>D(e),[u(e,"next")]),n("prev",()=>T(e),[u(e,"previous")]),n("select",()=>De(e),[u(e,"all")]),h("label",null,[this.caseField,u(e,"match case")]),h("label",null,[this.reField,u(e,"regexp")]),h("label",null,[this.wordField,u(e,"by word")]),...e.state.readOnly?[]:[h("br"),this.replaceField,n("replace",()=>J(e),[u(e,"replace")]),n("replaceAll",()=>Ie(e),[u(e,"replace all")])],h("button",{name:"close",onclick:()=>ce(e),"aria-label":u(e,"close"),type:"button"},["\xD7"])])}commit(){let e=new se({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:C.of(e)}))}keydown(e){me(this.view,e,"search-panel")?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?T:D)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),J(this.view))}update(e){for(let r of e.transactions)for(let n of r.effects)n.is(C)&&!n.value.eq(this.query)&&this.setQuery(n.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(y).top}}function u(t,e){return t.state.phrase(e)}const E=30,F=/[\s\.,:;?!]/;function K(t,{from:e,to:r}){let n=t.state.doc.lineAt(e),s=t.state.doc.lineAt(r).to,i=Math.max(n.from,e-E),a=Math.min(s,r+E),l=t.state.sliceDoc(i,a);if(i!=n.from){for(let o=0;o<E;o++)if(!F.test(l[o+1])&&F.test(l[o])){l=l.slice(o);break}}if(a!=s){for(let o=l.length-1;o>l.length-E;o--)if(!F.test(l[o-1])&&F.test(l[o])){l=l.slice(0,o);break}}return x.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${n.number}.`)}const Oe=x.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),_=[d,he.lowest(qe),Oe];export{re as R,se as S,_e as a,D as b,C as c,T as f,Ne as g,Qe as s};