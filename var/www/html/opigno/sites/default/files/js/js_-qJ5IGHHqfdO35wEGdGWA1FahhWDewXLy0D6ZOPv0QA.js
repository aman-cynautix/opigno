/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}()});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });

  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');

      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      $nestedContextual.css({ top: $nestedContextual.position().top + height });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));

    var destination = 'destination=' + Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({ el: $contextual, model: model }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({ el: $region, model: model }, options)));

    contextual.collection.add(model);

    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);

      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });

      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID.id);
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID.id + '"]:empty').eq(0), html);
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: { 'ids[]': uncachedIDs, 'tokens[]': uncachedTokens },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem('Drupal.contextual.' + contextualID, html);

              if (html.length > 0) {
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  Drupal.contextual = {
    views: [],

    regionViews: []
  };

  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',

      regionIsHovered: false,

      hasFocus: false,

      isOpen: false,

      isLocked: false
    },

    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      this.$el.find('.contextual-links').prop('hidden', !isOpen);

      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }
      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');

      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/* eslint-disable func-names */

(function ($, Drupal) {
  Drupal.behaviors.opignoLearningPathGlobal = {
    attach: function (context, settings) {
      if (this.inIframe()) {
        $('html').addClass('inIframe');
      }
    },

    inIframe: function () {
      try {
        return window.self !== window.top;
      }
      catch (e) {
        return true;
      }
    },
  };
}(jQuery, Drupal));
;
/**
 * @file
 * JS UI logic for SCORM player.
 *
 * @see js/lib/player.js
 * @see js/lib/api.js
 */

;(function($, Drupal, window, undefined) {

  Drupal.behaviors.opignoScormIOS13 = {
    attach: function(context, settings) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }

      var iOSversion = iOSversion();
      if (typeof iOSversion !== 'undefined' &&
        iOSversion[0] == 13
      ) {
        var $iframe = $('.scorm-ui-player-iframe-wrapper > iframe');
        var defaultIframeHeight = $iframe.height();
        var loop = 0;

        $('.scorm-ui-player-iframe-wrapper')
          .css('height', defaultIframeHeight)
          .css('overflow', 'auto');

        var checkIframe = setInterval(function() {

          var $pageWrap = $iframe
            .contents()
            .find('iframe[name="scormdriver_content"]')
            .contents()
            .find('.page-wrap');

          var $pageOverview = $iframe
            .contents()
            .find('iframe[name="scormdriver_content"]')
            .contents()
            .find('.overview');

          if ($pageWrap.length) {
            loop++;

            var height = ($pageWrap.children('main').length) ? $pageWrap.children('main').outerHeight() : null;

            // Remove min-height: 100vh
            $pageWrap
              .find('.page__wrapper, .quiz__item, .quiz__wrap, .quiz__item--active, .quiz__item-wrap, .quiz-card, .page')
              .css('min-height', 0);

            // Scroll element to top
            if (loop == 1) {
              setTimeout(function() {
                var scrollTop = $pageWrap.scrollTop(0);
                console.log('scroll to top');
              }, 100);
            }

            // Set Iframe height to remove scrollbar
            $iframe
              .height(height)
              .attr('scrolling', 'no');

            // console.log('set iframe height to ' + height + 'px');

            // And remove scrollbar inside scorm
            $pageWrap.css('overflow', 'hidden');
            $pageWrap.find('.quiz-card__container').css('min-height', 0);
          }
          // If quiz home
          else if ($pageOverview.length) {
            $pageOverview
              .css('height', 'auto')
              .css('overflow', 'auto');

            var height = $pageOverview.outerHeight();

            // Set Iframe height to remove scrollbar
            $iframe
              .height(height)
              .attr('scrolling', 'no');

            // console.log('set iframe height to ' + height + 'px');
          }
        }, 500);
      }
    }
  };

})(jQuery, Drupal, window);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
!function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=22)}({1:function(n,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(r=window)}n.exports=r},20:function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},21:function(n,t,r){(function(n,e){var u;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var i,o=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="__lodash_hash_undefined__",l=500,s="__lodash_placeholder__",h=1,p=2,v=4,_=1,g=2,y=1,d=2,b=4,w=8,m=16,x=32,j=64,A=128,O=256,k=512,I=30,R="...",S=800,E=16,z=1,L=2,W=1/0,C=9007199254740991,T=1.7976931348623157e308,U=NaN,B=4294967295,$=B-1,P=B>>>1,D=[["ary",A],["bind",y],["bindKey",d],["curry",w],["curryRight",m],["flip",k],["partial",x],["partialRight",j],["rearg",O]],M="[object Arguments]",F="[object Array]",N="[object AsyncFunction]",q="[object Boolean]",Z="[object Date]",K="[object DOMException]",V="[object Error]",G="[object Function]",H="[object GeneratorFunction]",J="[object Map]",Y="[object Number]",Q="[object Null]",X="[object Object]",nn="[object Proxy]",tn="[object RegExp]",rn="[object Set]",en="[object String]",un="[object Symbol]",on="[object Undefined]",fn="[object WeakMap]",an="[object WeakSet]",cn="[object ArrayBuffer]",ln="[object DataView]",sn="[object Float32Array]",hn="[object Float64Array]",pn="[object Int8Array]",vn="[object Int16Array]",_n="[object Int32Array]",gn="[object Uint8Array]",yn="[object Uint8ClampedArray]",dn="[object Uint16Array]",bn="[object Uint32Array]",wn=/\b__p \+= '';/g,mn=/\b(__p \+=) '' \+/g,xn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jn=/&(?:amp|lt|gt|quot|#39);/g,An=/[&<>"']/g,On=RegExp(jn.source),kn=RegExp(An.source),In=/<%-([\s\S]+?)%>/g,Rn=/<%([\s\S]+?)%>/g,Sn=/<%=([\s\S]+?)%>/g,En=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zn=/^\w*$/,Ln=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wn=/[\\^$.*+?()[\]{}|]/g,Cn=RegExp(Wn.source),Tn=/^\s+|\s+$/g,Un=/^\s+/,Bn=/\s+$/,$n=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Pn=/\{\n\/\* \[wrapped with (.+)\] \*/,Dn=/,? & /,Mn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fn=/\\(\\)?/g,Nn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qn=/\w*$/,Zn=/^[-+]0x[0-9a-f]+$/i,Kn=/^0b[01]+$/i,Vn=/^\[object .+?Constructor\]$/,Gn=/^0o[0-7]+$/i,Hn=/^(?:0|[1-9]\d*)$/,Jn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Yn=/($^)/,Qn=/['\n\r\u2028\u2029\\]/g,Xn="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",nt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tt="[\\ud800-\\udfff]",rt="["+nt+"]",et="["+Xn+"]",ut="\\d+",it="[\\u2700-\\u27bf]",ot="[a-z\\xdf-\\xf6\\xf8-\\xff]",ft="[^\\ud800-\\udfff"+nt+ut+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",at="\\ud83c[\\udffb-\\udfff]",ct="[^\\ud800-\\udfff]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",st="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="[A-Z\\xc0-\\xd6\\xd8-\\xde]",pt="(?:"+ot+"|"+ft+")",vt="(?:"+ht+"|"+ft+")",_t="(?:"+et+"|"+at+")"+"?",gt="[\\ufe0e\\ufe0f]?"+_t+("(?:\\u200d(?:"+[ct,lt,st].join("|")+")[\\ufe0e\\ufe0f]?"+_t+")*"),yt="(?:"+[it,lt,st].join("|")+")"+gt,dt="(?:"+[ct+et+"?",et,lt,st,tt].join("|")+")",bt=RegExp("['’]","g"),wt=RegExp(et,"g"),mt=RegExp(at+"(?="+at+")|"+dt+gt,"g"),xt=RegExp([ht+"?"+ot+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rt,ht,"$"].join("|")+")",vt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rt,ht+pt,"$"].join("|")+")",ht+"?"+pt+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ht+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ut,yt].join("|"),"g"),jt=RegExp("[\\u200d\\ud800-\\udfff"+Xn+"\\ufe0e\\ufe0f]"),At=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ot=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],kt=-1,It={};It[sn]=It[hn]=It[pn]=It[vn]=It[_n]=It[gn]=It[yn]=It[dn]=It[bn]=!0,It[M]=It[F]=It[cn]=It[q]=It[ln]=It[Z]=It[V]=It[G]=It[J]=It[Y]=It[X]=It[tn]=It[rn]=It[en]=It[fn]=!1;var Rt={};Rt[M]=Rt[F]=Rt[cn]=Rt[ln]=Rt[q]=Rt[Z]=Rt[sn]=Rt[hn]=Rt[pn]=Rt[vn]=Rt[_n]=Rt[J]=Rt[Y]=Rt[X]=Rt[tn]=Rt[rn]=Rt[en]=Rt[un]=Rt[gn]=Rt[yn]=Rt[dn]=Rt[bn]=!0,Rt[V]=Rt[G]=Rt[fn]=!1;var St={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Et=parseFloat,zt=parseInt,Lt="object"==typeof n&&n&&n.Object===Object&&n,Wt="object"==typeof self&&self&&self.Object===Object&&self,Ct=Lt||Wt||Function("return this")(),Tt="object"==typeof t&&t&&!t.nodeType&&t,Ut=Tt&&"object"==typeof e&&e&&!e.nodeType&&e,Bt=Ut&&Ut.exports===Tt,$t=Bt&&Lt.process,Pt=function(){try{var n=Ut&&Ut.require&&Ut.require("util").types;return n||$t&&$t.binding&&$t.binding("util")}catch(n){}}(),Dt=Pt&&Pt.isArrayBuffer,Mt=Pt&&Pt.isDate,Ft=Pt&&Pt.isMap,Nt=Pt&&Pt.isRegExp,qt=Pt&&Pt.isSet,Zt=Pt&&Pt.isTypedArray;function Kt(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function Vt(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function Gt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}function Ht(n,t){for(var r=null==n?0:n.length;r--&&!1!==t(n[r],r,n););return n}function Jt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function Yt(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function Qt(n,t){return!!(null==n?0:n.length)&&ar(n,t,0)>-1}function Xt(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function nr(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function tr(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function rr(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function er(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function ur(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}var ir=hr("length");function or(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function fr(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function ar(n,t,r){return t==t?function(n,t,r){var e=r-1,u=n.length;for(;++e<u;)if(n[e]===t)return e;return-1}(n,t,r):fr(n,lr,r)}function cr(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function lr(n){return n!=n}function sr(n,t){var r=null==n?0:n.length;return r?_r(n,t)/r:U}function hr(n){return function(t){return null==t?i:t[n]}}function pr(n){return function(t){return null==n?i:n[t]}}function vr(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function _r(n,t){for(var r,e=-1,u=n.length;++e<u;){var o=t(n[e]);o!==i&&(r=r===i?o:r+o)}return r}function gr(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function yr(n){return function(t){return n(t)}}function dr(n,t){return nr(t,function(t){return n[t]})}function br(n,t){return n.has(t)}function wr(n,t){for(var r=-1,e=n.length;++r<e&&ar(t,n[r],0)>-1;);return r}function mr(n,t){for(var r=n.length;r--&&ar(t,n[r],0)>-1;);return r}var xr=pr({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),jr=pr({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Ar(n){return"\\"+St[n]}function Or(n){return jt.test(n)}function kr(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function Ir(n,t){return function(r){return n(t(r))}}function Rr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==s||(n[r]=s,i[u++]=r)}return i}function Sr(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Er(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function zr(n){return Or(n)?function(n){var t=mt.lastIndex=0;for(;mt.test(n);)++t;return t}(n):ir(n)}function Lr(n){return Or(n)?function(n){return n.match(mt)||[]}(n):function(n){return n.split("")}(n)}var Wr=pr({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Cr=function n(t){var r=(t=null==t?Ct:Cr.defaults(Ct.Object(),t,Cr.pick(Ct,Ot))).Array,e=t.Date,u=t.Error,Xn=t.Function,nt=t.Math,tt=t.Object,rt=t.RegExp,et=t.String,ut=t.TypeError,it=r.prototype,ot=Xn.prototype,ft=tt.prototype,at=t["__core-js_shared__"],ct=ot.toString,lt=ft.hasOwnProperty,st=0,ht=function(){var n=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pt=ft.toString,vt=ct.call(tt),_t=Ct._,gt=rt("^"+ct.call(lt).replace(Wn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yt=Bt?t.Buffer:i,dt=t.Symbol,mt=t.Uint8Array,jt=yt?yt.allocUnsafe:i,St=Ir(tt.getPrototypeOf,tt),Lt=tt.create,Wt=ft.propertyIsEnumerable,Tt=it.splice,Ut=dt?dt.isConcatSpreadable:i,$t=dt?dt.iterator:i,Pt=dt?dt.toStringTag:i,ir=function(){try{var n=Bi(tt,"defineProperty");return n({},"",{}),n}catch(n){}}(),pr=t.clearTimeout!==Ct.clearTimeout&&t.clearTimeout,Tr=e&&e.now!==Ct.Date.now&&e.now,Ur=t.setTimeout!==Ct.setTimeout&&t.setTimeout,Br=nt.ceil,$r=nt.floor,Pr=tt.getOwnPropertySymbols,Dr=yt?yt.isBuffer:i,Mr=t.isFinite,Fr=it.join,Nr=Ir(tt.keys,tt),qr=nt.max,Zr=nt.min,Kr=e.now,Vr=t.parseInt,Gr=nt.random,Hr=it.reverse,Jr=Bi(t,"DataView"),Yr=Bi(t,"Map"),Qr=Bi(t,"Promise"),Xr=Bi(t,"Set"),ne=Bi(t,"WeakMap"),te=Bi(tt,"create"),re=ne&&new ne,ee={},ue=co(Jr),ie=co(Yr),oe=co(Qr),fe=co(Xr),ae=co(ne),ce=dt?dt.prototype:i,le=ce?ce.valueOf:i,se=ce?ce.toString:i;function he(n){if(Rf(n)&&!yf(n)&&!(n instanceof ge)){if(n instanceof _e)return n;if(lt.call(n,"__wrapped__"))return lo(n)}return new _e(n)}var pe=function(){function n(){}return function(t){if(!If(t))return{};if(Lt)return Lt(t);n.prototype=t;var r=new n;return n.prototype=i,r}}();function ve(){}function _e(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function ge(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=B,this.__views__=[]}function ye(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function de(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function be(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function we(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new be;++t<r;)this.add(n[t])}function me(n){var t=this.__data__=new de(n);this.size=t.size}function xe(n,t){var r=yf(n),e=!r&&gf(n),u=!r&&!e&&mf(n),i=!r&&!e&&!u&&Uf(n),o=r||e||u||i,f=o?gr(n.length,et):[],a=f.length;for(var c in n)!t&&!lt.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||qi(c,a))||f.push(c);return f}function je(n){var t=n.length;return t?n[wu(0,t-1)]:i}function Ae(n,t){return oo(ti(n),We(t,0,n.length))}function Oe(n){return oo(ti(n))}function ke(n,t,r){(r===i||pf(n[t],r))&&(r!==i||t in n)||ze(n,t,r)}function Ie(n,t,r){var e=n[t];lt.call(n,t)&&pf(e,r)&&(r!==i||t in n)||ze(n,t,r)}function Re(n,t){for(var r=n.length;r--;)if(pf(n[r][0],t))return r;return-1}function Se(n,t,r,e){return $e(n,function(n,u,i){t(e,n,r(n),i)}),e}function Ee(n,t){return n&&ri(t,ua(t),n)}function ze(n,t,r){"__proto__"==t&&ir?ir(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Le(n,t){for(var e=-1,u=t.length,o=r(u),f=null==n;++e<u;)o[e]=f?i:Xf(n,t[e]);return o}function We(n,t,r){return n==n&&(r!==i&&(n=n<=r?n:r),t!==i&&(n=n>=t?n:t)),n}function Ce(n,t,r,e,u,o){var f,a=t&h,c=t&p,l=t&v;if(r&&(f=u?r(n,e,u,o):r(n)),f!==i)return f;if(!If(n))return n;var s=yf(n);if(s){if(f=function(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&lt.call(n,"index")&&(r.index=n.index,r.input=n.input),r}(n),!a)return ti(n,f)}else{var _=Di(n),g=_==G||_==H;if(mf(n))return Hu(n,a);if(_==X||_==M||g&&!u){if(f=c||g?{}:Fi(n),!a)return c?function(n,t){return ri(n,Pi(n),t)}(n,function(n,t){return n&&ri(t,ia(t),n)}(f,n)):function(n,t){return ri(n,$i(n),t)}(n,Ee(f,n))}else{if(!Rt[_])return u?n:{};f=function(n,t,r){var e=n.constructor;switch(t){case cn:return Ju(n);case q:case Z:return new e(+n);case ln:return function(n,t){var r=t?Ju(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,r);case sn:case hn:case pn:case vn:case _n:case gn:case yn:case dn:case bn:return Yu(n,r);case J:return new e;case Y:case en:return new e(n);case tn:return function(n){var t=new n.constructor(n.source,qn.exec(n));return t.lastIndex=n.lastIndex,t}(n);case rn:return new e;case un:return function(n){return le?tt(le.call(n)):{}}(n)}}(n,_,a)}}o||(o=new me);var y=o.get(n);if(y)return y;if(o.set(n,f),Wf(n))return n.forEach(function(e){f.add(Ce(e,t,r,e,n,o))}),f;if(Sf(n))return n.forEach(function(e,u){f.set(u,Ce(e,t,r,u,n,o))}),f;var d=s?i:(l?c?Ei:Si:c?ia:ua)(n);return Gt(d||n,function(e,u){d&&(e=n[u=e]),Ie(f,u,Ce(e,t,r,u,n,o))}),f}function Te(n,t,r){var e=r.length;if(null==n)return!e;for(n=tt(n);e--;){var u=r[e],o=t[u],f=n[u];if(f===i&&!(u in n)||!o(f))return!1}return!0}function Ue(n,t,r){if("function"!=typeof n)throw new ut(a);return ro(function(){n.apply(i,r)},t)}function Be(n,t,r,e){var u=-1,i=Qt,f=!0,a=n.length,c=[],l=t.length;if(!a)return c;r&&(t=nr(t,yr(r))),e?(i=Xt,f=!1):t.length>=o&&(i=br,f=!1,t=new we(t));n:for(;++u<a;){var s=n[u],h=null==r?s:r(s);if(s=e||0!==s?s:0,f&&h==h){for(var p=l;p--;)if(t[p]===h)continue n;c.push(s)}else i(t,h,e)||c.push(s)}return c}he.templateSettings={escape:In,evaluate:Rn,interpolate:Sn,variable:"",imports:{_:he}},he.prototype=ve.prototype,he.prototype.constructor=he,_e.prototype=pe(ve.prototype),_e.prototype.constructor=_e,ge.prototype=pe(ve.prototype),ge.prototype.constructor=ge,ye.prototype.clear=function(){this.__data__=te?te(null):{},this.size=0},ye.prototype.delete=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t},ye.prototype.get=function(n){var t=this.__data__;if(te){var r=t[n];return r===c?i:r}return lt.call(t,n)?t[n]:i},ye.prototype.has=function(n){var t=this.__data__;return te?t[n]!==i:lt.call(t,n)},ye.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=te&&t===i?c:t,this},de.prototype.clear=function(){this.__data__=[],this.size=0},de.prototype.delete=function(n){var t=this.__data__,r=Re(t,n);return!(r<0||(r==t.length-1?t.pop():Tt.call(t,r,1),--this.size,0))},de.prototype.get=function(n){var t=this.__data__,r=Re(t,n);return r<0?i:t[r][1]},de.prototype.has=function(n){return Re(this.__data__,n)>-1},de.prototype.set=function(n,t){var r=this.__data__,e=Re(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this},be.prototype.clear=function(){this.size=0,this.__data__={hash:new ye,map:new(Yr||de),string:new ye}},be.prototype.delete=function(n){var t=Ti(this,n).delete(n);return this.size-=t?1:0,t},be.prototype.get=function(n){return Ti(this,n).get(n)},be.prototype.has=function(n){return Ti(this,n).has(n)},be.prototype.set=function(n,t){var r=Ti(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},we.prototype.add=we.prototype.push=function(n){return this.__data__.set(n,c),this},we.prototype.has=function(n){return this.__data__.has(n)},me.prototype.clear=function(){this.__data__=new de,this.size=0},me.prototype.delete=function(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r},me.prototype.get=function(n){return this.__data__.get(n)},me.prototype.has=function(n){return this.__data__.has(n)},me.prototype.set=function(n,t){var r=this.__data__;if(r instanceof de){var e=r.__data__;if(!Yr||e.length<o-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new be(e)}return r.set(n,t),this.size=r.size,this};var $e=ii(Ke),Pe=ii(Ve,!0);function De(n,t){var r=!0;return $e(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Me(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],f=t(o);if(null!=f&&(a===i?f==f&&!Tf(f):r(f,a)))var a=f,c=o}return c}function Fe(n,t){var r=[];return $e(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function Ne(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ni),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?Ne(f,t-1,r,e,u):tr(u,f):e||(u[u.length]=f)}return u}var qe=oi(),Ze=oi(!0);function Ke(n,t){return n&&qe(n,t,ua)}function Ve(n,t){return n&&Ze(n,t,ua)}function Ge(n,t){return Yt(t,function(t){return Af(n[t])})}function He(n,t){for(var r=0,e=(t=Zu(t,n)).length;null!=n&&r<e;)n=n[ao(t[r++])];return r&&r==e?n:i}function Je(n,t,r){var e=t(n);return yf(n)?e:tr(e,r(n))}function Ye(n){return null==n?n===i?on:Q:Pt&&Pt in tt(n)?function(n){var t=lt.call(n,Pt),r=n[Pt];try{n[Pt]=i;var e=!0}catch(n){}var u=pt.call(n);return e&&(t?n[Pt]=r:delete n[Pt]),u}(n):function(n){return pt.call(n)}(n)}function Qe(n,t){return n>t}function Xe(n,t){return null!=n&&lt.call(n,t)}function nu(n,t){return null!=n&&t in tt(n)}function tu(n,t,e){for(var u=e?Xt:Qt,o=n[0].length,f=n.length,a=f,c=r(f),l=1/0,s=[];a--;){var h=n[a];a&&t&&(h=nr(h,yr(t))),l=Zr(h.length,l),c[a]=!e&&(t||o>=120&&h.length>=120)?new we(a&&h):i}h=n[0];var p=-1,v=c[0];n:for(;++p<o&&s.length<l;){var _=h[p],g=t?t(_):_;if(_=e||0!==_?_:0,!(v?br(v,g):u(s,g,e))){for(a=f;--a;){var y=c[a];if(!(y?br(y,g):u(n[a],g,e)))continue n}v&&v.push(g),s.push(_)}}return s}function ru(n,t,r){var e=null==(n=Xi(n,t=Zu(t,n)))?n:n[ao(xo(t))];return null==e?i:Kt(e,n,r)}function eu(n){return Rf(n)&&Ye(n)==M}function uu(n,t,r,e,u){return n===t||(null==n||null==t||!Rf(n)&&!Rf(t)?n!=n&&t!=t:function(n,t,r,e,u,o){var f=yf(n),a=yf(t),c=f?F:Di(n),l=a?F:Di(t),s=(c=c==M?X:c)==X,h=(l=l==M?X:l)==X,p=c==l;if(p&&mf(n)){if(!mf(t))return!1;f=!0,s=!1}if(p&&!s)return o||(o=new me),f||Uf(n)?Ii(n,t,r,e,u,o):function(n,t,r,e,u,i,o){switch(r){case ln:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case cn:return!(n.byteLength!=t.byteLength||!i(new mt(n),new mt(t)));case q:case Z:case Y:return pf(+n,+t);case V:return n.name==t.name&&n.message==t.message;case tn:case en:return n==t+"";case J:var f=kr;case rn:var a=e&_;if(f||(f=Sr),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=g,o.set(n,t);var l=Ii(f(n),f(t),e,u,i,o);return o.delete(n),l;case un:if(le)return le.call(n)==le.call(t)}return!1}(n,t,c,r,e,u,o);if(!(r&_)){var v=s&&lt.call(n,"__wrapped__"),y=h&&lt.call(t,"__wrapped__");if(v||y){var d=v?n.value():n,b=y?t.value():t;return o||(o=new me),u(d,b,r,e,o)}}return!!p&&(o||(o=new me),function(n,t,r,e,u,o){var f=r&_,a=Si(n),c=a.length,l=Si(t).length;if(c!=l&&!f)return!1;for(var s=c;s--;){var h=a[s];if(!(f?h in t:lt.call(t,h)))return!1}var p=o.get(n);if(p&&o.get(t))return p==t;var v=!0;o.set(n,t),o.set(t,n);for(var g=f;++s<c;){h=a[s];var y=n[h],d=t[h];if(e)var b=f?e(d,y,h,t,n,o):e(y,d,h,n,t,o);if(!(b===i?y===d||u(y,d,r,e,o):b)){v=!1;break}g||(g="constructor"==h)}if(v&&!g){var w=n.constructor,m=t.constructor;w!=m&&"constructor"in n&&"constructor"in t&&!("function"==typeof w&&w instanceof w&&"function"==typeof m&&m instanceof m)&&(v=!1)}return o.delete(n),o.delete(t),v}(n,t,r,e,u,o))}(n,t,r,e,uu,u))}function iu(n,t,r,e){var u=r.length,o=u,f=!e;if(null==n)return!o;for(n=tt(n);u--;){var a=r[u];if(f&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++u<o;){var c=(a=r[u])[0],l=n[c],s=a[1];if(f&&a[2]){if(l===i&&!(c in n))return!1}else{var h=new me;if(e)var p=e(l,s,c,n,t,h);if(!(p===i?uu(s,l,_|g,e,h):p))return!1}}return!0}function ou(n){return!(!If(n)||function(n){return!!ht&&ht in n}(n))&&(Af(n)?gt:Vn).test(co(n))}function fu(n){return"function"==typeof n?n:null==n?Ea:"object"==typeof n?yf(n)?pu(n[0],n[1]):hu(n):Pa(n)}function au(n){if(!Hi(n))return Nr(n);var t=[];for(var r in tt(n))lt.call(n,r)&&"constructor"!=r&&t.push(r);return t}function cu(n){if(!If(n))return function(n){var t=[];if(null!=n)for(var r in tt(n))t.push(r);return t}(n);var t=Hi(n),r=[];for(var e in n)("constructor"!=e||!t&&lt.call(n,e))&&r.push(e);return r}function lu(n,t){return n<t}function su(n,t){var e=-1,u=bf(n)?r(n.length):[];return $e(n,function(n,r,i){u[++e]=t(n,r,i)}),u}function hu(n){var t=Ui(n);return 1==t.length&&t[0][2]?Yi(t[0][0],t[0][1]):function(r){return r===n||iu(r,n,t)}}function pu(n,t){return Ki(n)&&Ji(t)?Yi(ao(n),t):function(r){var e=Xf(r,n);return e===i&&e===t?na(r,n):uu(t,e,_|g)}}function vu(n,t,r,e,u){n!==t&&qe(t,function(o,f){if(If(o))u||(u=new me),function(n,t,r,e,u,o,f){var a=no(n,r),c=no(t,r),l=f.get(c);if(l)ke(n,r,l);else{var s=o?o(a,c,r+"",n,t,f):i,h=s===i;if(h){var p=yf(c),v=!p&&mf(c),_=!p&&!v&&Uf(c);s=c,p||v||_?yf(a)?s=a:wf(a)?s=ti(a):v?(h=!1,s=Hu(c,!0)):_?(h=!1,s=Yu(c,!0)):s=[]:zf(c)||gf(c)?(s=a,gf(a)?s=qf(a):If(a)&&!Af(a)||(s=Fi(c))):h=!1}h&&(f.set(c,s),u(s,c,e,o,f),f.delete(c)),ke(n,r,s)}}(n,t,f,r,vu,e,u);else{var a=e?e(no(n,f),o,f+"",n,t,u):i;a===i&&(a=o),ke(n,f,a)}},ia)}function _u(n,t){var r=n.length;if(r)return qi(t+=t<0?r:0,r)?n[t]:i}function gu(n,t,r){var e=-1;return t=nr(t.length?t:[Ea],yr(Ci())),function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}(su(n,function(n,r,u){return{criteria:nr(t,function(t){return t(n)}),index:++e,value:n}}),function(n,t){return function(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Qu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}(n,t,r)})}function yu(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=He(n,o);r(f,o)&&Ou(i,Zu(o,n),f)}return i}function du(n,t,r,e){var u=e?cr:ar,i=-1,o=t.length,f=n;for(n===t&&(t=ti(t)),r&&(f=nr(n,yr(r)));++i<o;)for(var a=0,c=t[i],l=r?r(c):c;(a=u(f,l,a,e))>-1;)f!==n&&Tt.call(f,a,1),Tt.call(n,a,1);return n}function bu(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;qi(u)?Tt.call(n,u,1):Bu(n,u)}}return n}function wu(n,t){return n+$r(Gr()*(t-n+1))}function mu(n,t){var r="";if(!n||t<1||t>C)return r;do{t%2&&(r+=n),(t=$r(t/2))&&(n+=n)}while(t);return r}function xu(n,t){return eo(Qi(n,t,Ea),n+"")}function ju(n){return je(pa(n))}function Au(n,t){var r=pa(n);return oo(r,We(t,0,r.length))}function Ou(n,t,r,e){if(!If(n))return n;for(var u=-1,o=(t=Zu(t,n)).length,f=o-1,a=n;null!=a&&++u<o;){var c=ao(t[u]),l=r;if(u!=f){var s=a[c];(l=e?e(s,c,a):i)===i&&(l=If(s)?s:qi(t[u+1])?[]:{})}Ie(a,c,l),a=a[c]}return n}var ku=re?function(n,t){return re.set(n,t),n}:Ea,Iu=ir?function(n,t){return ir(n,"toString",{configurable:!0,enumerable:!1,value:Ia(t),writable:!0})}:Ea;function Ru(n){return oo(pa(n))}function Su(n,t,e){var u=-1,i=n.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var o=r(i);++u<i;)o[u]=n[u+t];return o}function Eu(n,t){var r;return $e(n,function(n,e,u){return!(r=t(n,e,u))}),!!r}function zu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t==t&&u<=P){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Tf(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return Lu(n,t,Ea,r)}function Lu(n,t,r,e){t=r(t);for(var u=0,o=null==n?0:n.length,f=t!=t,a=null===t,c=Tf(t),l=t===i;u<o;){var s=$r((u+o)/2),h=r(n[s]),p=h!==i,v=null===h,_=h==h,g=Tf(h);if(f)var y=e||_;else y=l?_&&(e||p):a?_&&p&&(e||!v):c?_&&p&&!v&&(e||!g):!v&&!g&&(e?h<=t:h<t);y?u=s+1:o=s}return Zr(o,$)}function Wu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!pf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function Cu(n){return"number"==typeof n?n:Tf(n)?U:+n}function Tu(n){if("string"==typeof n)return n;if(yf(n))return nr(n,Tu)+"";if(Tf(n))return se?se.call(n):"";var t=n+"";return"0"==t&&1/n==-W?"-0":t}function Uu(n,t,r){var e=-1,u=Qt,i=n.length,f=!0,a=[],c=a;if(r)f=!1,u=Xt;else if(i>=o){var l=t?null:mi(n);if(l)return Sr(l);f=!1,u=br,c=new we}else c=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s;if(s=r||0!==s?s:0,f&&h==h){for(var p=c.length;p--;)if(c[p]===h)continue n;t&&c.push(h),a.push(s)}else u(c,h,r)||(c!==a&&c.push(h),a.push(s))}return a}function Bu(n,t){return null==(n=Xi(n,t=Zu(t,n)))||delete n[ao(xo(t))]}function $u(n,t,r,e){return Ou(n,t,r(He(n,t)),e)}function Pu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Su(n,e?0:i,e?i+1:u):Su(n,e?i+1:0,e?u:i)}function Du(n,t){var r=n;return r instanceof ge&&(r=r.value()),rr(t,function(n,t){return t.func.apply(t.thisArg,tr([n],t.args))},r)}function Mu(n,t,e){var u=n.length;if(u<2)return u?Uu(n[0]):[];for(var i=-1,o=r(u);++i<u;)for(var f=n[i],a=-1;++a<u;)a!=i&&(o[i]=Be(o[i]||f,n[a],t,e));return Uu(Ne(o,1),t,e)}function Fu(n,t,r){for(var e=-1,u=n.length,o=t.length,f={};++e<u;){var a=e<o?t[e]:i;r(f,n[e],a)}return f}function Nu(n){return wf(n)?n:[]}function qu(n){return"function"==typeof n?n:Ea}function Zu(n,t){return yf(n)?n:Ki(n,t)?[n]:fo(Zf(n))}var Ku=xu;function Vu(n,t,r){var e=n.length;return r=r===i?e:r,!t&&r>=e?n:Su(n,t,r)}var Gu=pr||function(n){return Ct.clearTimeout(n)};function Hu(n,t){if(t)return n.slice();var r=n.length,e=jt?jt(r):new n.constructor(r);return n.copy(e),e}function Ju(n){var t=new n.constructor(n.byteLength);return new mt(t).set(new mt(n)),t}function Yu(n,t){var r=t?Ju(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Qu(n,t){if(n!==t){var r=n!==i,e=null===n,u=n==n,o=Tf(n),f=t!==i,a=null===t,c=t==t,l=Tf(t);if(!a&&!l&&!o&&n>t||o&&f&&c&&!a&&!l||e&&f&&c||!r&&c||!u)return 1;if(!e&&!o&&!l&&n<t||l&&r&&u&&!e&&!o||a&&r&&u||!f&&u||!c)return-1}return 0}function Xu(n,t,e,u){for(var i=-1,o=n.length,f=e.length,a=-1,c=t.length,l=qr(o-f,0),s=r(c+l),h=!u;++a<c;)s[a]=t[a];for(;++i<f;)(h||i<o)&&(s[e[i]]=n[i]);for(;l--;)s[a++]=n[i++];return s}function ni(n,t,e,u){for(var i=-1,o=n.length,f=-1,a=e.length,c=-1,l=t.length,s=qr(o-a,0),h=r(s+l),p=!u;++i<s;)h[i]=n[i];for(var v=i;++c<l;)h[v+c]=t[c];for(;++f<a;)(p||i<o)&&(h[v+e[f]]=n[i++]);return h}function ti(n,t){var e=-1,u=n.length;for(t||(t=r(u));++e<u;)t[e]=n[e];return t}function ri(n,t,r,e){var u=!r;r||(r={});for(var o=-1,f=t.length;++o<f;){var a=t[o],c=e?e(r[a],n[a],a,r,n):i;c===i&&(c=n[a]),u?ze(r,a,c):Ie(r,a,c)}return r}function ei(n,t){return function(r,e){var u=yf(r)?Vt:Se,i=t?t():{};return u(r,n,Ci(e,2),i)}}function ui(n){return xu(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:i,f=u>2?r[2]:i;for(o=n.length>3&&"function"==typeof o?(u--,o):i,f&&Zi(r[0],r[1],f)&&(o=u<3?i:o,u=1),t=tt(t);++e<u;){var a=r[e];a&&n(t,a,e,o)}return t})}function ii(n,t){return function(r,e){if(null==r)return r;if(!bf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=tt(r);(t?i--:++i<u)&&!1!==e(o[i],i,o););return r}}function oi(n){return function(t,r,e){for(var u=-1,i=tt(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(!1===r(i[a],a,i))break}return t}}function fi(n){return function(t){var r=Or(t=Zf(t))?Lr(t):i,e=r?r[0]:t.charAt(0),u=r?Vu(r,1).join(""):t.slice(1);return e[n]()+u}}function ai(n){return function(t){return rr(Aa(ga(t).replace(bt,"")),n,"")}}function ci(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=pe(n.prototype),e=n.apply(r,t);return If(e)?e:r}}function li(n){return function(t,r,e){var u=tt(t);if(!bf(t)){var o=Ci(r,3);t=ua(t),r=function(n){return o(u[n],n,u)}}var f=n(t,r,e);return f>-1?u[o?t[f]:f]:i}}function si(n){return Ri(function(t){var r=t.length,e=r,u=_e.prototype.thru;for(n&&t.reverse();e--;){var o=t[e];if("function"!=typeof o)throw new ut(a);if(u&&!f&&"wrapper"==Li(o))var f=new _e([],!0)}for(e=f?e:r;++e<r;){var c=Li(o=t[e]),l="wrapper"==c?zi(o):i;f=l&&Vi(l[0])&&l[1]==(A|w|x|O)&&!l[4].length&&1==l[9]?f[Li(l[0])].apply(f,l[3]):1==o.length&&Vi(o)?f[c]():f.thru(o)}return function(){var n=arguments,e=n[0];if(f&&1==n.length&&yf(e))return f.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function hi(n,t,e,u,o,f,a,c,l,s){var h=t&A,p=t&y,v=t&d,_=t&(w|m),g=t&k,b=v?i:ci(n);return function y(){for(var d=arguments.length,w=r(d),m=d;m--;)w[m]=arguments[m];if(_)var x=Wi(y),j=function(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}(w,x);if(u&&(w=Xu(w,u,o,_)),f&&(w=ni(w,f,a,_)),d-=j,_&&d<s){var A=Rr(w,x);return bi(n,t,hi,y.placeholder,e,w,A,c,l,s-d)}var O=p?e:this,k=v?O[n]:n;return d=w.length,c?w=function(n,t){for(var r=n.length,e=Zr(t.length,r),u=ti(n);e--;){var o=t[e];n[e]=qi(o,r)?u[o]:i}return n}(w,c):g&&d>1&&w.reverse(),h&&l<d&&(w.length=l),this&&this!==Ct&&this instanceof y&&(k=b||ci(k)),k.apply(O,w)}}function pi(n,t){return function(r,e){return function(n,t,r,e){return Ke(n,function(n,u,i){t(e,r(n),u,i)}),e}(r,n,t(e),{})}}function vi(n,t){return function(r,e){var u;if(r===i&&e===i)return t;if(r!==i&&(u=r),e!==i){if(u===i)return e;"string"==typeof r||"string"==typeof e?(r=Tu(r),e=Tu(e)):(r=Cu(r),e=Cu(e)),u=n(r,e)}return u}}function _i(n){return Ri(function(t){return t=nr(t,yr(Ci())),xu(function(r){var e=this;return n(t,function(n){return Kt(n,e,r)})})})}function gi(n,t){var r=(t=t===i?" ":Tu(t)).length;if(r<2)return r?mu(t,n):t;var e=mu(t,Br(n/zr(t)));return Or(t)?Vu(Lr(e),0,n).join(""):e.slice(0,n)}function yi(n){return function(t,e,u){return u&&"number"!=typeof u&&Zi(t,e,u)&&(e=u=i),t=Df(t),e===i?(e=t,t=0):e=Df(e),function(n,t,e,u){for(var i=-1,o=qr(Br((t-n)/(e||1)),0),f=r(o);o--;)f[u?o:++i]=n,n+=e;return f}(t,e,u=u===i?t<e?1:-1:Df(u),n)}}function di(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=Nf(t),r=Nf(r)),n(t,r)}}function bi(n,t,r,e,u,o,f,a,c,l){var s=t&w;t|=s?x:j,(t&=~(s?j:x))&b||(t&=~(y|d));var h=[n,t,u,s?o:i,s?f:i,s?i:o,s?i:f,a,c,l],p=r.apply(i,h);return Vi(n)&&to(p,h),p.placeholder=e,uo(p,n,t)}function wi(n){var t=nt[n];return function(n,r){if(n=Nf(n),r=null==r?0:Zr(Mf(r),292)){var e=(Zf(n)+"e").split("e");return+((e=(Zf(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"))[0]+"e"+(+e[1]-r))}return t(n)}}var mi=Xr&&1/Sr(new Xr([,-0]))[1]==W?function(n){return new Xr(n)}:Ta;function xi(n){return function(t){var r=Di(t);return r==J?kr(t):r==rn?Er(t):function(n,t){return nr(t,function(t){return[t,n[t]]})}(t,n(t))}}function ji(n,t,e,u,o,f,c,l){var h=t&d;if(!h&&"function"!=typeof n)throw new ut(a);var p=u?u.length:0;if(p||(t&=~(x|j),u=o=i),c=c===i?c:qr(Mf(c),0),l=l===i?l:Mf(l),p-=o?o.length:0,t&j){var v=u,_=o;u=o=i}var g=h?i:zi(n),k=[n,t,e,u,o,v,_,f,c,l];if(g&&function(n,t){var r=n[1],e=t[1],u=r|e,i=u<(y|d|A),o=e==A&&r==w||e==A&&r==O&&n[7].length<=t[8]||e==(A|O)&&t[7].length<=t[8]&&r==w;if(!i&&!o)return n;e&y&&(n[2]=t[2],u|=r&y?0:b);var f=t[3];if(f){var a=n[3];n[3]=a?Xu(a,f,t[4]):f,n[4]=a?Rr(n[3],s):t[4]}(f=t[5])&&(a=n[5],n[5]=a?ni(a,f,t[6]):f,n[6]=a?Rr(n[5],s):t[6]),(f=t[7])&&(n[7]=f),e&A&&(n[8]=null==n[8]?t[8]:Zr(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u}(k,g),n=k[0],t=k[1],e=k[2],u=k[3],o=k[4],!(l=k[9]=k[9]===i?h?0:n.length:qr(k[9]-p,0))&&t&(w|m)&&(t&=~(w|m)),t&&t!=y)I=t==w||t==m?function(n,t,e){var u=ci(n);return function o(){for(var f=arguments.length,a=r(f),c=f,l=Wi(o);c--;)a[c]=arguments[c];var s=f<3&&a[0]!==l&&a[f-1]!==l?[]:Rr(a,l);return(f-=s.length)<e?bi(n,t,hi,o.placeholder,i,a,s,i,i,e-f):Kt(this&&this!==Ct&&this instanceof o?u:n,this,a)}}(n,t,l):t!=x&&t!=(y|x)||o.length?hi.apply(i,k):function(n,t,e,u){var i=t&y,o=ci(n);return function t(){for(var f=-1,a=arguments.length,c=-1,l=u.length,s=r(l+a),h=this&&this!==Ct&&this instanceof t?o:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++f];return Kt(h,i?e:this,s)}}(n,t,e,u);else var I=function(n,t,r){var e=t&y,u=ci(n);return function t(){return(this&&this!==Ct&&this instanceof t?u:n).apply(e?r:this,arguments)}}(n,t,e);return uo((g?ku:to)(I,k),n,t)}function Ai(n,t,r,e){return n===i||pf(n,ft[r])&&!lt.call(e,r)?t:n}function Oi(n,t,r,e,u,o){return If(n)&&If(t)&&(o.set(t,n),vu(n,t,i,Oi,o),o.delete(t)),n}function ki(n){return zf(n)?i:n}function Ii(n,t,r,e,u,o){var f=r&_,a=n.length,c=t.length;if(a!=c&&!(f&&c>a))return!1;var l=o.get(n);if(l&&o.get(t))return l==t;var s=-1,h=!0,p=r&g?new we:i;for(o.set(n,t),o.set(t,n);++s<a;){var v=n[s],y=t[s];if(e)var d=f?e(y,v,s,t,n,o):e(v,y,s,n,t,o);if(d!==i){if(d)continue;h=!1;break}if(p){if(!ur(t,function(n,t){if(!br(p,t)&&(v===n||u(v,n,r,e,o)))return p.push(t)})){h=!1;break}}else if(v!==y&&!u(v,y,r,e,o)){h=!1;break}}return o.delete(n),o.delete(t),h}function Ri(n){return eo(Qi(n,i,go),n+"")}function Si(n){return Je(n,ua,$i)}function Ei(n){return Je(n,ia,Pi)}var zi=re?function(n){return re.get(n)}:Ta;function Li(n){for(var t=n.name+"",r=ee[t],e=lt.call(ee,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function Wi(n){return(lt.call(he,"placeholder")?he:n).placeholder}function Ci(){var n=he.iteratee||za;return n=n===za?fu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ti(n,t){var r=n.__data__;return function(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}(t)?r["string"==typeof t?"string":"hash"]:r.map}function Ui(n){for(var t=ua(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Ji(u)]}return t}function Bi(n,t){var r=function(n,t){return null==n?i:n[t]}(n,t);return ou(r)?r:i}var $i=Pr?function(n){return null==n?[]:(n=tt(n),Yt(Pr(n),function(t){return Wt.call(n,t)}))}:Fa,Pi=Pr?function(n){for(var t=[];n;)tr(t,$i(n)),n=St(n);return t}:Fa,Di=Ye;function Mi(n,t,r){for(var e=-1,u=(t=Zu(t,n)).length,i=!1;++e<u;){var o=ao(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:!!(u=null==n?0:n.length)&&kf(u)&&qi(o,u)&&(yf(n)||gf(n))}function Fi(n){return"function"!=typeof n.constructor||Hi(n)?{}:pe(St(n))}function Ni(n){return yf(n)||gf(n)||!!(Ut&&n&&n[Ut])}function qi(n,t){var r=typeof n;return!!(t=null==t?C:t)&&("number"==r||"symbol"!=r&&Hn.test(n))&&n>-1&&n%1==0&&n<t}function Zi(n,t,r){if(!If(r))return!1;var e=typeof t;return!!("number"==e?bf(r)&&qi(t,r.length):"string"==e&&t in r)&&pf(r[t],n)}function Ki(n,t){if(yf(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Tf(n))||zn.test(n)||!En.test(n)||null!=t&&n in tt(t)}function Vi(n){var t=Li(n),r=he[t];if("function"!=typeof r||!(t in ge.prototype))return!1;if(n===r)return!0;var e=zi(r);return!!e&&n===e[0]}(Jr&&Di(new Jr(new ArrayBuffer(1)))!=ln||Yr&&Di(new Yr)!=J||Qr&&"[object Promise]"!=Di(Qr.resolve())||Xr&&Di(new Xr)!=rn||ne&&Di(new ne)!=fn)&&(Di=function(n){var t=Ye(n),r=t==X?n.constructor:i,e=r?co(r):"";if(e)switch(e){case ue:return ln;case ie:return J;case oe:return"[object Promise]";case fe:return rn;case ae:return fn}return t});var Gi=at?Af:Na;function Hi(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||ft)}function Ji(n){return n==n&&!If(n)}function Yi(n,t){return function(r){return null!=r&&r[n]===t&&(t!==i||n in tt(r))}}function Qi(n,t,e){return t=qr(t===i?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=qr(u.length-t,0),f=r(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=r(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),Kt(n,this,a)}}function Xi(n,t){return t.length<2?n:He(n,Su(t,0,-1))}function no(n,t){if("__proto__"!=t)return n[t]}var to=io(ku),ro=Ur||function(n,t){return Ct.setTimeout(n,t)},eo=io(Iu);function uo(n,t,r){var e=t+"";return eo(n,function(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace($n,"{\n/* [wrapped with "+t+"] */\n")}(e,function(n,t){return Gt(D,function(r){var e="_."+r[0];t&r[1]&&!Qt(n,e)&&n.push(e)}),n.sort()}(function(n){var t=n.match(Pn);return t?t[1].split(Dn):[]}(e),r)))}function io(n){var t=0,r=0;return function(){var e=Kr(),u=E-(e-r);if(r=e,u>0){if(++t>=S)return arguments[0]}else t=0;return n.apply(i,arguments)}}function oo(n,t){var r=-1,e=n.length,u=e-1;for(t=t===i?e:t;++r<t;){var o=wu(r,u),f=n[o];n[o]=n[r],n[r]=f}return n.length=t,n}var fo=function(n){var t=ff(n,function(n){return r.size===l&&r.clear(),n}),r=t.cache;return t}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(Ln,function(n,r,e,u){t.push(e?u.replace(Fn,"$1"):r||n)}),t});function ao(n){if("string"==typeof n||Tf(n))return n;var t=n+"";return"0"==t&&1/n==-W?"-0":t}function co(n){if(null!=n){try{return ct.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function lo(n){if(n instanceof ge)return n.clone();var t=new _e(n.__wrapped__,n.__chain__);return t.__actions__=ti(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}var so=xu(function(n,t){return wf(n)?Be(n,Ne(t,1,wf,!0)):[]}),ho=xu(function(n,t){var r=xo(t);return wf(r)&&(r=i),wf(n)?Be(n,Ne(t,1,wf,!0),Ci(r,2)):[]}),po=xu(function(n,t){var r=xo(t);return wf(r)&&(r=i),wf(n)?Be(n,Ne(t,1,wf,!0),i,r):[]});function vo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Mf(r);return u<0&&(u=qr(e+u,0)),fr(n,Ci(t,3),u)}function _o(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==i&&(u=Mf(r),u=r<0?qr(e+u,0):Zr(u,e-1)),fr(n,Ci(t,3),u,!0)}function go(n){return null!=n&&n.length?Ne(n,1):[]}function yo(n){return n&&n.length?n[0]:i}var bo=xu(function(n){var t=nr(n,Nu);return t.length&&t[0]===n[0]?tu(t):[]}),wo=xu(function(n){var t=xo(n),r=nr(n,Nu);return t===xo(r)?t=i:r.pop(),r.length&&r[0]===n[0]?tu(r,Ci(t,2)):[]}),mo=xu(function(n){var t=xo(n),r=nr(n,Nu);return(t="function"==typeof t?t:i)&&r.pop(),r.length&&r[0]===n[0]?tu(r,i,t):[]});function xo(n){var t=null==n?0:n.length;return t?n[t-1]:i}var jo=xu(Ao);function Ao(n,t){return n&&n.length&&t&&t.length?du(n,t):n}var Oo=Ri(function(n,t){var r=null==n?0:n.length,e=Le(n,t);return bu(n,nr(t,function(n){return qi(n,r)?+n:n}).sort(Qu)),e});function ko(n){return null==n?n:Hr.call(n)}var Io=xu(function(n){return Uu(Ne(n,1,wf,!0))}),Ro=xu(function(n){var t=xo(n);return wf(t)&&(t=i),Uu(Ne(n,1,wf,!0),Ci(t,2))}),So=xu(function(n){var t=xo(n);return t="function"==typeof t?t:i,Uu(Ne(n,1,wf,!0),i,t)});function Eo(n){if(!n||!n.length)return[];var t=0;return n=Yt(n,function(n){if(wf(n))return t=qr(n.length,t),!0}),gr(t,function(t){return nr(n,hr(t))})}function zo(n,t){if(!n||!n.length)return[];var r=Eo(n);return null==t?r:nr(r,function(n){return Kt(t,i,n)})}var Lo=xu(function(n,t){return wf(n)?Be(n,t):[]}),Wo=xu(function(n){return Mu(Yt(n,wf))}),Co=xu(function(n){var t=xo(n);return wf(t)&&(t=i),Mu(Yt(n,wf),Ci(t,2))}),To=xu(function(n){var t=xo(n);return t="function"==typeof t?t:i,Mu(Yt(n,wf),i,t)}),Uo=xu(Eo);var Bo=xu(function(n){var t=n.length,r=t>1?n[t-1]:i;return zo(n,r="function"==typeof r?(n.pop(),r):i)});function $o(n){var t=he(n);return t.__chain__=!0,t}function Po(n,t){return t(n)}var Do=Ri(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Le(t,n)};return!(t>1||this.__actions__.length)&&e instanceof ge&&qi(r)?((e=e.slice(r,+r+(t?1:0))).__actions__.push({func:Po,args:[u],thisArg:i}),new _e(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(i),n})):this.thru(u)});var Mo=ei(function(n,t,r){lt.call(n,r)?++n[r]:ze(n,r,1)});var Fo=li(vo),No=li(_o);function qo(n,t){return(yf(n)?Gt:$e)(n,Ci(t,3))}function Zo(n,t){return(yf(n)?Ht:Pe)(n,Ci(t,3))}var Ko=ei(function(n,t,r){lt.call(n,r)?n[r].push(t):ze(n,r,[t])});var Vo=xu(function(n,t,e){var u=-1,i="function"==typeof t,o=bf(n)?r(n.length):[];return $e(n,function(n){o[++u]=i?Kt(t,n,e):ru(n,t,e)}),o}),Go=ei(function(n,t,r){ze(n,r,t)});function Ho(n,t){return(yf(n)?nr:su)(n,Ci(t,3))}var Jo=ei(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]});var Yo=xu(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Zi(n,t[0],t[1])?t=[]:r>2&&Zi(t[0],t[1],t[2])&&(t=[t[0]]),gu(n,Ne(t,1),[])}),Qo=Tr||function(){return Ct.Date.now()};function Xo(n,t,r){return t=r?i:t,t=n&&null==t?n.length:t,ji(n,A,i,i,i,i,t)}function nf(n,t){var r;if("function"!=typeof t)throw new ut(a);return n=Mf(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=i),r}}var tf=xu(function(n,t,r){var e=y;if(r.length){var u=Rr(r,Wi(tf));e|=x}return ji(n,e,t,r,u)}),rf=xu(function(n,t,r){var e=y|d;if(r.length){var u=Rr(r,Wi(rf));e|=x}return ji(t,e,n,r,u)});function ef(n,t,r){var e,u,o,f,c,l,s=0,h=!1,p=!1,v=!0;if("function"!=typeof n)throw new ut(a);function _(t){var r=e,o=u;return e=u=i,s=t,f=n.apply(o,r)}function g(n){var r=n-l;return l===i||r>=t||r<0||p&&n-s>=o}function y(){var n=Qo();if(g(n))return d(n);c=ro(y,function(n){var r=t-(n-l);return p?Zr(r,o-(n-s)):r}(n))}function d(n){return c=i,v&&e?_(n):(e=u=i,f)}function b(){var n=Qo(),r=g(n);if(e=arguments,u=this,l=n,r){if(c===i)return function(n){return s=n,c=ro(y,t),h?_(n):f}(l);if(p)return c=ro(y,t),_(l)}return c===i&&(c=ro(y,t)),f}return t=Nf(t)||0,If(r)&&(h=!!r.leading,o=(p="maxWait"in r)?qr(Nf(r.maxWait)||0,t):o,v="trailing"in r?!!r.trailing:v),b.cancel=function(){c!==i&&Gu(c),s=0,e=l=u=c=i},b.flush=function(){return c===i?f:d(Qo())},b}var uf=xu(function(n,t){return Ue(n,1,t)}),of=xu(function(n,t,r){return Ue(n,Nf(t)||0,r)});function ff(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new ut(a);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(ff.Cache||be),r}function af(n){if("function"!=typeof n)throw new ut(a);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}ff.Cache=be;var cf=Ku(function(n,t){var r=(t=1==t.length&&yf(t[0])?nr(t[0],yr(Ci())):nr(Ne(t,1),yr(Ci()))).length;return xu(function(e){for(var u=-1,i=Zr(e.length,r);++u<i;)e[u]=t[u].call(this,e[u]);return Kt(n,this,e)})}),lf=xu(function(n,t){var r=Rr(t,Wi(lf));return ji(n,x,i,t,r)}),sf=xu(function(n,t){var r=Rr(t,Wi(sf));return ji(n,j,i,t,r)}),hf=Ri(function(n,t){return ji(n,O,i,i,i,t)});function pf(n,t){return n===t||n!=n&&t!=t}var vf=di(Qe),_f=di(function(n,t){return n>=t}),gf=eu(function(){return arguments}())?eu:function(n){return Rf(n)&&lt.call(n,"callee")&&!Wt.call(n,"callee")},yf=r.isArray,df=Dt?yr(Dt):function(n){return Rf(n)&&Ye(n)==cn};function bf(n){return null!=n&&kf(n.length)&&!Af(n)}function wf(n){return Rf(n)&&bf(n)}var mf=Dr||Na,xf=Mt?yr(Mt):function(n){return Rf(n)&&Ye(n)==Z};function jf(n){if(!Rf(n))return!1;var t=Ye(n);return t==V||t==K||"string"==typeof n.message&&"string"==typeof n.name&&!zf(n)}function Af(n){if(!If(n))return!1;var t=Ye(n);return t==G||t==H||t==N||t==nn}function Of(n){return"number"==typeof n&&n==Mf(n)}function kf(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=C}function If(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function Rf(n){return null!=n&&"object"==typeof n}var Sf=Ft?yr(Ft):function(n){return Rf(n)&&Di(n)==J};function Ef(n){return"number"==typeof n||Rf(n)&&Ye(n)==Y}function zf(n){if(!Rf(n)||Ye(n)!=X)return!1;var t=St(n);if(null===t)return!0;var r=lt.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&ct.call(r)==vt}var Lf=Nt?yr(Nt):function(n){return Rf(n)&&Ye(n)==tn};var Wf=qt?yr(qt):function(n){return Rf(n)&&Di(n)==rn};function Cf(n){return"string"==typeof n||!yf(n)&&Rf(n)&&Ye(n)==en}function Tf(n){return"symbol"==typeof n||Rf(n)&&Ye(n)==un}var Uf=Zt?yr(Zt):function(n){return Rf(n)&&kf(n.length)&&!!It[Ye(n)]};var Bf=di(lu),$f=di(function(n,t){return n<=t});function Pf(n){if(!n)return[];if(bf(n))return Cf(n)?Lr(n):ti(n);if($t&&n[$t])return function(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}(n[$t]());var t=Di(n);return(t==J?kr:t==rn?Sr:pa)(n)}function Df(n){return n?(n=Nf(n))===W||n===-W?(n<0?-1:1)*T:n==n?n:0:0===n?n:0}function Mf(n){var t=Df(n),r=t%1;return t==t?r?t-r:t:0}function Ff(n){return n?We(Mf(n),0,B):0}function Nf(n){if("number"==typeof n)return n;if(Tf(n))return U;if(If(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=If(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Tn,"");var r=Kn.test(n);return r||Gn.test(n)?zt(n.slice(2),r?2:8):Zn.test(n)?U:+n}function qf(n){return ri(n,ia(n))}function Zf(n){return null==n?"":Tu(n)}var Kf=ui(function(n,t){if(Hi(t)||bf(t))ri(t,ua(t),n);else for(var r in t)lt.call(t,r)&&Ie(n,r,t[r])}),Vf=ui(function(n,t){ri(t,ia(t),n)}),Gf=ui(function(n,t,r,e){ri(t,ia(t),n,e)}),Hf=ui(function(n,t,r,e){ri(t,ua(t),n,e)}),Jf=Ri(Le);var Yf=xu(function(n,t){n=tt(n);var r=-1,e=t.length,u=e>2?t[2]:i;for(u&&Zi(t[0],t[1],u)&&(e=1);++r<e;)for(var o=t[r],f=ia(o),a=-1,c=f.length;++a<c;){var l=f[a],s=n[l];(s===i||pf(s,ft[l])&&!lt.call(n,l))&&(n[l]=o[l])}return n}),Qf=xu(function(n){return n.push(i,Oi),Kt(fa,i,n)});function Xf(n,t,r){var e=null==n?i:He(n,t);return e===i?r:e}function na(n,t){return null!=n&&Mi(n,t,nu)}var ta=pi(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=pt.call(t)),n[t]=r},Ia(Ea)),ra=pi(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=pt.call(t)),lt.call(n,t)?n[t].push(r):n[t]=[r]},Ci),ea=xu(ru);function ua(n){return bf(n)?xe(n):au(n)}function ia(n){return bf(n)?xe(n,!0):cu(n)}var oa=ui(function(n,t,r){vu(n,t,r)}),fa=ui(function(n,t,r,e){vu(n,t,r,e)}),aa=Ri(function(n,t){var r={};if(null==n)return r;var e=!1;t=nr(t,function(t){return t=Zu(t,n),e||(e=t.length>1),t}),ri(n,Ei(n),r),e&&(r=Ce(r,h|p|v,ki));for(var u=t.length;u--;)Bu(r,t[u]);return r});var ca=Ri(function(n,t){return null==n?{}:function(n,t){return yu(n,t,function(t,r){return na(n,r)})}(n,t)});function la(n,t){if(null==n)return{};var r=nr(Ei(n),function(n){return[n]});return t=Ci(t),yu(n,r,function(n,r){return t(n,r[0])})}var sa=xi(ua),ha=xi(ia);function pa(n){return null==n?[]:dr(n,ua(n))}var va=ai(function(n,t,r){return t=t.toLowerCase(),n+(r?_a(t):t)});function _a(n){return ja(Zf(n).toLowerCase())}function ga(n){return(n=Zf(n))&&n.replace(Jn,xr).replace(wt,"")}var ya=ai(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),da=ai(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),ba=fi("toLowerCase");var wa=ai(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()});var ma=ai(function(n,t,r){return n+(r?" ":"")+ja(t)});var xa=ai(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),ja=fi("toUpperCase");function Aa(n,t,r){return n=Zf(n),(t=r?i:t)===i?function(n){return At.test(n)}(n)?function(n){return n.match(xt)||[]}(n):function(n){return n.match(Mn)||[]}(n):n.match(t)||[]}var Oa=xu(function(n,t){try{return Kt(n,i,t)}catch(n){return jf(n)?n:new u(n)}}),ka=Ri(function(n,t){return Gt(t,function(t){t=ao(t),ze(n,t,tf(n[t],n))}),n});function Ia(n){return function(){return n}}var Ra=si(),Sa=si(!0);function Ea(n){return n}function za(n){return fu("function"==typeof n?n:Ce(n,h))}var La=xu(function(n,t){return function(r){return ru(r,n,t)}}),Wa=xu(function(n,t){return function(r){return ru(n,r,t)}});function Ca(n,t,r){var e=ua(t),u=Ge(t,e);null!=r||If(t)&&(u.length||!e.length)||(r=t,t=n,n=this,u=Ge(t,ua(t)));var i=!(If(r)&&"chain"in r&&!r.chain),o=Af(n);return Gt(u,function(r){var e=t[r];n[r]=e,o&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=ti(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,tr([this.value()],arguments))})}),n}function Ta(){}var Ua=_i(nr),Ba=_i(Jt),$a=_i(ur);function Pa(n){return Ki(n)?hr(ao(n)):function(n){return function(t){return He(t,n)}}(n)}var Da=yi(),Ma=yi(!0);function Fa(){return[]}function Na(){return!1}var qa=vi(function(n,t){return n+t},0),Za=wi("ceil"),Ka=vi(function(n,t){return n/t},1),Va=wi("floor");var Ga=vi(function(n,t){return n*t},1),Ha=wi("round"),Ja=vi(function(n,t){return n-t},0);return he.after=function(n,t){if("function"!=typeof t)throw new ut(a);return n=Mf(n),function(){if(--n<1)return t.apply(this,arguments)}},he.ary=Xo,he.assign=Kf,he.assignIn=Vf,he.assignInWith=Gf,he.assignWith=Hf,he.at=Jf,he.before=nf,he.bind=tf,he.bindAll=ka,he.bindKey=rf,he.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return yf(n)?n:[n]},he.chain=$o,he.chunk=function(n,t,e){t=(e?Zi(n,t,e):t===i)?1:qr(Mf(t),0);var u=null==n?0:n.length;if(!u||t<1)return[];for(var o=0,f=0,a=r(Br(u/t));o<u;)a[f++]=Su(n,o,o+=t);return a},he.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},he.concat=function(){var n=arguments.length;if(!n)return[];for(var t=r(n-1),e=arguments[0],u=n;u--;)t[u-1]=arguments[u];return tr(yf(e)?ti(e):[e],Ne(t,1))},he.cond=function(n){var t=null==n?0:n.length,r=Ci();return n=t?nr(n,function(n){if("function"!=typeof n[1])throw new ut(a);return[r(n[0]),n[1]]}):[],xu(function(r){for(var e=-1;++e<t;){var u=n[e];if(Kt(u[0],this,r))return Kt(u[1],this,r)}})},he.conforms=function(n){return function(n){var t=ua(n);return function(r){return Te(r,n,t)}}(Ce(n,h))},he.constant=Ia,he.countBy=Mo,he.create=function(n,t){var r=pe(n);return null==t?r:Ee(r,t)},he.curry=function n(t,r,e){var u=ji(t,w,i,i,i,i,i,r=e?i:r);return u.placeholder=n.placeholder,u},he.curryRight=function n(t,r,e){var u=ji(t,m,i,i,i,i,i,r=e?i:r);return u.placeholder=n.placeholder,u},he.debounce=ef,he.defaults=Yf,he.defaultsDeep=Qf,he.defer=uf,he.delay=of,he.difference=so,he.differenceBy=ho,he.differenceWith=po,he.drop=function(n,t,r){var e=null==n?0:n.length;return e?Su(n,(t=r||t===i?1:Mf(t))<0?0:t,e):[]},he.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?Su(n,0,(t=e-(t=r||t===i?1:Mf(t)))<0?0:t):[]},he.dropRightWhile=function(n,t){return n&&n.length?Pu(n,Ci(t,3),!0,!0):[]},he.dropWhile=function(n,t){return n&&n.length?Pu(n,Ci(t,3),!0):[]},he.fill=function(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Zi(n,t,r)&&(r=0,e=u),function(n,t,r,e){var u=n.length;for((r=Mf(r))<0&&(r=-r>u?0:u+r),(e=e===i||e>u?u:Mf(e))<0&&(e+=u),e=r>e?0:Ff(e);r<e;)n[r++]=t;return n}(n,t,r,e)):[]},he.filter=function(n,t){return(yf(n)?Yt:Fe)(n,Ci(t,3))},he.flatMap=function(n,t){return Ne(Ho(n,t),1)},he.flatMapDeep=function(n,t){return Ne(Ho(n,t),W)},he.flatMapDepth=function(n,t,r){return r=r===i?1:Mf(r),Ne(Ho(n,t),r)},he.flatten=go,he.flattenDeep=function(n){return null!=n&&n.length?Ne(n,W):[]},he.flattenDepth=function(n,t){return null!=n&&n.length?Ne(n,t=t===i?1:Mf(t)):[]},he.flip=function(n){return ji(n,k)},he.flow=Ra,he.flowRight=Sa,he.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},he.functions=function(n){return null==n?[]:Ge(n,ua(n))},he.functionsIn=function(n){return null==n?[]:Ge(n,ia(n))},he.groupBy=Ko,he.initial=function(n){return null!=n&&n.length?Su(n,0,-1):[]},he.intersection=bo,he.intersectionBy=wo,he.intersectionWith=mo,he.invert=ta,he.invertBy=ra,he.invokeMap=Vo,he.iteratee=za,he.keyBy=Go,he.keys=ua,he.keysIn=ia,he.map=Ho,he.mapKeys=function(n,t){var r={};return t=Ci(t,3),Ke(n,function(n,e,u){ze(r,t(n,e,u),n)}),r},he.mapValues=function(n,t){var r={};return t=Ci(t,3),Ke(n,function(n,e,u){ze(r,e,t(n,e,u))}),r},he.matches=function(n){return hu(Ce(n,h))},he.matchesProperty=function(n,t){return pu(n,Ce(t,h))},he.memoize=ff,he.merge=oa,he.mergeWith=fa,he.method=La,he.methodOf=Wa,he.mixin=Ca,he.negate=af,he.nthArg=function(n){return n=Mf(n),xu(function(t){return _u(t,n)})},he.omit=aa,he.omitBy=function(n,t){return la(n,af(Ci(t)))},he.once=function(n){return nf(2,n)},he.orderBy=function(n,t,r,e){return null==n?[]:(yf(t)||(t=null==t?[]:[t]),yf(r=e?i:r)||(r=null==r?[]:[r]),gu(n,t,r))},he.over=Ua,he.overArgs=cf,he.overEvery=Ba,he.overSome=$a,he.partial=lf,he.partialRight=sf,he.partition=Jo,he.pick=ca,he.pickBy=la,he.property=Pa,he.propertyOf=function(n){return function(t){return null==n?i:He(n,t)}},he.pull=jo,he.pullAll=Ao,he.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?du(n,t,Ci(r,2)):n},he.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?du(n,t,i,r):n},he.pullAt=Oo,he.range=Da,he.rangeRight=Ma,he.rearg=hf,he.reject=function(n,t){return(yf(n)?Yt:Fe)(n,af(Ci(t,3)))},he.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=Ci(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return bu(n,u),r},he.rest=function(n,t){if("function"!=typeof n)throw new ut(a);return xu(n,t=t===i?t:Mf(t))},he.reverse=ko,he.sampleSize=function(n,t,r){return t=(r?Zi(n,t,r):t===i)?1:Mf(t),(yf(n)?Ae:Au)(n,t)},he.set=function(n,t,r){return null==n?n:Ou(n,t,r)},he.setWith=function(n,t,r,e){return e="function"==typeof e?e:i,null==n?n:Ou(n,t,r,e)},he.shuffle=function(n){return(yf(n)?Oe:Ru)(n)},he.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Zi(n,t,r)?(t=0,r=e):(t=null==t?0:Mf(t),r=r===i?e:Mf(r)),Su(n,t,r)):[]},he.sortBy=Yo,he.sortedUniq=function(n){return n&&n.length?Wu(n):[]},he.sortedUniqBy=function(n,t){return n&&n.length?Wu(n,Ci(t,2)):[]},he.split=function(n,t,r){return r&&"number"!=typeof r&&Zi(n,t,r)&&(t=r=i),(r=r===i?B:r>>>0)?(n=Zf(n))&&("string"==typeof t||null!=t&&!Lf(t))&&!(t=Tu(t))&&Or(n)?Vu(Lr(n),0,r):n.split(t,r):[]},he.spread=function(n,t){if("function"!=typeof n)throw new ut(a);return t=null==t?0:qr(Mf(t),0),xu(function(r){var e=r[t],u=Vu(r,0,t);return e&&tr(u,e),Kt(n,this,u)})},he.tail=function(n){var t=null==n?0:n.length;return t?Su(n,1,t):[]},he.take=function(n,t,r){return n&&n.length?Su(n,0,(t=r||t===i?1:Mf(t))<0?0:t):[]},he.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?Su(n,(t=e-(t=r||t===i?1:Mf(t)))<0?0:t,e):[]},he.takeRightWhile=function(n,t){return n&&n.length?Pu(n,Ci(t,3),!1,!0):[]},he.takeWhile=function(n,t){return n&&n.length?Pu(n,Ci(t,3)):[]},he.tap=function(n,t){return t(n),n},he.throttle=function(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new ut(a);return If(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ef(n,t,{leading:e,maxWait:t,trailing:u})},he.thru=Po,he.toArray=Pf,he.toPairs=sa,he.toPairsIn=ha,he.toPath=function(n){return yf(n)?nr(n,ao):Tf(n)?[n]:ti(fo(Zf(n)))},he.toPlainObject=qf,he.transform=function(n,t,r){var e=yf(n),u=e||mf(n)||Uf(n);if(t=Ci(t,4),null==r){var i=n&&n.constructor;r=u?e?new i:[]:If(n)&&Af(i)?pe(St(n)):{}}return(u?Gt:Ke)(n,function(n,e,u){return t(r,n,e,u)}),r},he.unary=function(n){return Xo(n,1)},he.union=Io,he.unionBy=Ro,he.unionWith=So,he.uniq=function(n){return n&&n.length?Uu(n):[]},he.uniqBy=function(n,t){return n&&n.length?Uu(n,Ci(t,2)):[]},he.uniqWith=function(n,t){return t="function"==typeof t?t:i,n&&n.length?Uu(n,i,t):[]},he.unset=function(n,t){return null==n||Bu(n,t)},he.unzip=Eo,he.unzipWith=zo,he.update=function(n,t,r){return null==n?n:$u(n,t,qu(r))},he.updateWith=function(n,t,r,e){return e="function"==typeof e?e:i,null==n?n:$u(n,t,qu(r),e)},he.values=pa,he.valuesIn=function(n){return null==n?[]:dr(n,ia(n))},he.without=Lo,he.words=Aa,he.wrap=function(n,t){return lf(qu(t),n)},he.xor=Wo,he.xorBy=Co,he.xorWith=To,he.zip=Uo,he.zipObject=function(n,t){return Fu(n||[],t||[],Ie)},he.zipObjectDeep=function(n,t){return Fu(n||[],t||[],Ou)},he.zipWith=Bo,he.entries=sa,he.entriesIn=ha,he.extend=Vf,he.extendWith=Gf,Ca(he,he),he.add=qa,he.attempt=Oa,he.camelCase=va,he.capitalize=_a,he.ceil=Za,he.clamp=function(n,t,r){return r===i&&(r=t,t=i),r!==i&&(r=(r=Nf(r))==r?r:0),t!==i&&(t=(t=Nf(t))==t?t:0),We(Nf(n),t,r)},he.clone=function(n){return Ce(n,v)},he.cloneDeep=function(n){return Ce(n,h|v)},he.cloneDeepWith=function(n,t){return Ce(n,h|v,t="function"==typeof t?t:i)},he.cloneWith=function(n,t){return Ce(n,v,t="function"==typeof t?t:i)},he.conformsTo=function(n,t){return null==t||Te(n,t,ua(t))},he.deburr=ga,he.defaultTo=function(n,t){return null==n||n!=n?t:n},he.divide=Ka,he.endsWith=function(n,t,r){n=Zf(n),t=Tu(t);var e=n.length,u=r=r===i?e:We(Mf(r),0,e);return(r-=t.length)>=0&&n.slice(r,u)==t},he.eq=pf,he.escape=function(n){return(n=Zf(n))&&kn.test(n)?n.replace(An,jr):n},he.escapeRegExp=function(n){return(n=Zf(n))&&Cn.test(n)?n.replace(Wn,"\\$&"):n},he.every=function(n,t,r){var e=yf(n)?Jt:De;return r&&Zi(n,t,r)&&(t=i),e(n,Ci(t,3))},he.find=Fo,he.findIndex=vo,he.findKey=function(n,t){return or(n,Ci(t,3),Ke)},he.findLast=No,he.findLastIndex=_o,he.findLastKey=function(n,t){return or(n,Ci(t,3),Ve)},he.floor=Va,he.forEach=qo,he.forEachRight=Zo,he.forIn=function(n,t){return null==n?n:qe(n,Ci(t,3),ia)},he.forInRight=function(n,t){return null==n?n:Ze(n,Ci(t,3),ia)},he.forOwn=function(n,t){return n&&Ke(n,Ci(t,3))},he.forOwnRight=function(n,t){return n&&Ve(n,Ci(t,3))},he.get=Xf,he.gt=vf,he.gte=_f,he.has=function(n,t){return null!=n&&Mi(n,t,Xe)},he.hasIn=na,he.head=yo,he.identity=Ea,he.includes=function(n,t,r,e){n=bf(n)?n:pa(n),r=r&&!e?Mf(r):0;var u=n.length;return r<0&&(r=qr(u+r,0)),Cf(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&ar(n,t,r)>-1},he.indexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Mf(r);return u<0&&(u=qr(e+u,0)),ar(n,t,u)},he.inRange=function(n,t,r){return t=Df(t),r===i?(r=t,t=0):r=Df(r),function(n,t,r){return n>=Zr(t,r)&&n<qr(t,r)}(n=Nf(n),t,r)},he.invoke=ea,he.isArguments=gf,he.isArray=yf,he.isArrayBuffer=df,he.isArrayLike=bf,he.isArrayLikeObject=wf,he.isBoolean=function(n){return!0===n||!1===n||Rf(n)&&Ye(n)==q},he.isBuffer=mf,he.isDate=xf,he.isElement=function(n){return Rf(n)&&1===n.nodeType&&!zf(n)},he.isEmpty=function(n){if(null==n)return!0;if(bf(n)&&(yf(n)||"string"==typeof n||"function"==typeof n.splice||mf(n)||Uf(n)||gf(n)))return!n.length;var t=Di(n);if(t==J||t==rn)return!n.size;if(Hi(n))return!au(n).length;for(var r in n)if(lt.call(n,r))return!1;return!0},he.isEqual=function(n,t){return uu(n,t)},he.isEqualWith=function(n,t,r){var e=(r="function"==typeof r?r:i)?r(n,t):i;return e===i?uu(n,t,i,r):!!e},he.isError=jf,he.isFinite=function(n){return"number"==typeof n&&Mr(n)},he.isFunction=Af,he.isInteger=Of,he.isLength=kf,he.isMap=Sf,he.isMatch=function(n,t){return n===t||iu(n,t,Ui(t))},he.isMatchWith=function(n,t,r){return r="function"==typeof r?r:i,iu(n,t,Ui(t),r)},he.isNaN=function(n){return Ef(n)&&n!=+n},he.isNative=function(n){if(Gi(n))throw new u(f);return ou(n)},he.isNil=function(n){return null==n},he.isNull=function(n){return null===n},he.isNumber=Ef,he.isObject=If,he.isObjectLike=Rf,he.isPlainObject=zf,he.isRegExp=Lf,he.isSafeInteger=function(n){return Of(n)&&n>=-C&&n<=C},he.isSet=Wf,he.isString=Cf,he.isSymbol=Tf,he.isTypedArray=Uf,he.isUndefined=function(n){return n===i},he.isWeakMap=function(n){return Rf(n)&&Di(n)==fn},he.isWeakSet=function(n){return Rf(n)&&Ye(n)==an},he.join=function(n,t){return null==n?"":Fr.call(n,t)},he.kebabCase=ya,he.last=xo,he.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==i&&(u=(u=Mf(r))<0?qr(e+u,0):Zr(u,e-1)),t==t?function(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}(n,t,u):fr(n,lr,u,!0)},he.lowerCase=da,he.lowerFirst=ba,he.lt=Bf,he.lte=$f,he.max=function(n){return n&&n.length?Me(n,Ea,Qe):i},he.maxBy=function(n,t){return n&&n.length?Me(n,Ci(t,2),Qe):i},he.mean=function(n){return sr(n,Ea)},he.meanBy=function(n,t){return sr(n,Ci(t,2))},he.min=function(n){return n&&n.length?Me(n,Ea,lu):i},he.minBy=function(n,t){return n&&n.length?Me(n,Ci(t,2),lu):i},he.stubArray=Fa,he.stubFalse=Na,he.stubObject=function(){return{}},he.stubString=function(){return""},he.stubTrue=function(){return!0},he.multiply=Ga,he.nth=function(n,t){return n&&n.length?_u(n,Mf(t)):i},he.noConflict=function(){return Ct._===this&&(Ct._=_t),this},he.noop=Ta,he.now=Qo,he.pad=function(n,t,r){n=Zf(n);var e=(t=Mf(t))?zr(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return gi($r(u),r)+n+gi(Br(u),r)},he.padEnd=function(n,t,r){n=Zf(n);var e=(t=Mf(t))?zr(n):0;return t&&e<t?n+gi(t-e,r):n},he.padStart=function(n,t,r){n=Zf(n);var e=(t=Mf(t))?zr(n):0;return t&&e<t?gi(t-e,r)+n:n},he.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Vr(Zf(n).replace(Un,""),t||0)},he.random=function(n,t,r){if(r&&"boolean"!=typeof r&&Zi(n,t,r)&&(t=r=i),r===i&&("boolean"==typeof t?(r=t,t=i):"boolean"==typeof n&&(r=n,n=i)),n===i&&t===i?(n=0,t=1):(n=Df(n),t===i?(t=n,n=0):t=Df(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=Gr();return Zr(n+u*(t-n+Et("1e-"+((u+"").length-1))),t)}return wu(n,t)},he.reduce=function(n,t,r){var e=yf(n)?rr:vr,u=arguments.length<3;return e(n,Ci(t,4),r,u,$e)},he.reduceRight=function(n,t,r){var e=yf(n)?er:vr,u=arguments.length<3;return e(n,Ci(t,4),r,u,Pe)},he.repeat=function(n,t,r){return t=(r?Zi(n,t,r):t===i)?1:Mf(t),mu(Zf(n),t)},he.replace=function(){var n=arguments,t=Zf(n[0]);return n.length<3?t:t.replace(n[1],n[2])},he.result=function(n,t,r){var e=-1,u=(t=Zu(t,n)).length;for(u||(u=1,n=i);++e<u;){var o=null==n?i:n[ao(t[e])];o===i&&(e=u,o=r),n=Af(o)?o.call(n):o}return n},he.round=Ha,he.runInContext=n,he.sample=function(n){return(yf(n)?je:ju)(n)},he.size=function(n){if(null==n)return 0;if(bf(n))return Cf(n)?zr(n):n.length;var t=Di(n);return t==J||t==rn?n.size:au(n).length},he.snakeCase=wa,he.some=function(n,t,r){var e=yf(n)?ur:Eu;return r&&Zi(n,t,r)&&(t=i),e(n,Ci(t,3))},he.sortedIndex=function(n,t){return zu(n,t)},he.sortedIndexBy=function(n,t,r){return Lu(n,t,Ci(r,2))},he.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=zu(n,t);if(e<r&&pf(n[e],t))return e}return-1},he.sortedLastIndex=function(n,t){return zu(n,t,!0)},he.sortedLastIndexBy=function(n,t,r){return Lu(n,t,Ci(r,2),!0)},he.sortedLastIndexOf=function(n,t){if(null!=n&&n.length){var r=zu(n,t,!0)-1;if(pf(n[r],t))return r}return-1},he.startCase=ma,he.startsWith=function(n,t,r){return n=Zf(n),r=null==r?0:We(Mf(r),0,n.length),t=Tu(t),n.slice(r,r+t.length)==t},he.subtract=Ja,he.sum=function(n){return n&&n.length?_r(n,Ea):0},he.sumBy=function(n,t){return n&&n.length?_r(n,Ci(t,2)):0},he.template=function(n,t,r){var e=he.templateSettings;r&&Zi(n,t,r)&&(t=i),n=Zf(n),t=Gf({},t,e,Ai);var u,o,f=Gf({},t.imports,e.imports,Ai),a=ua(f),c=dr(f,a),l=0,s=t.interpolate||Yn,h="__p += '",p=rt((t.escape||Yn).source+"|"+s.source+"|"+(s===Sn?Nn:Yn).source+"|"+(t.evaluate||Yn).source+"|$","g"),v="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++kt+"]")+"\n";n.replace(p,function(t,r,e,i,f,a){return e||(e=i),h+=n.slice(l,a).replace(Qn,Ar),r&&(u=!0,h+="' +\n__e("+r+") +\n'"),f&&(o=!0,h+="';\n"+f+";\n__p += '"),e&&(h+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=a+t.length,t}),h+="';\n";var _=t.variable;_||(h="with (obj) {\n"+h+"\n}\n"),h=(o?h.replace(wn,""):h).replace(mn,"$1").replace(xn,"$1;"),h="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var g=Oa(function(){return Xn(a,v+"return "+h).apply(i,c)});if(g.source=h,jf(g))throw g;return g},he.times=function(n,t){if((n=Mf(n))<1||n>C)return[];var r=B,e=Zr(n,B);t=Ci(t),n-=B;for(var u=gr(e,t);++r<n;)t(r);return u},he.toFinite=Df,he.toInteger=Mf,he.toLength=Ff,he.toLower=function(n){return Zf(n).toLowerCase()},he.toNumber=Nf,he.toSafeInteger=function(n){return n?We(Mf(n),-C,C):0===n?n:0},he.toString=Zf,he.toUpper=function(n){return Zf(n).toUpperCase()},he.trim=function(n,t,r){if((n=Zf(n))&&(r||t===i))return n.replace(Tn,"");if(!n||!(t=Tu(t)))return n;var e=Lr(n),u=Lr(t);return Vu(e,wr(e,u),mr(e,u)+1).join("")},he.trimEnd=function(n,t,r){if((n=Zf(n))&&(r||t===i))return n.replace(Bn,"");if(!n||!(t=Tu(t)))return n;var e=Lr(n);return Vu(e,0,mr(e,Lr(t))+1).join("")},he.trimStart=function(n,t,r){if((n=Zf(n))&&(r||t===i))return n.replace(Un,"");if(!n||!(t=Tu(t)))return n;var e=Lr(n);return Vu(e,wr(e,Lr(t))).join("")},he.truncate=function(n,t){var r=I,e=R;if(If(t)){var u="separator"in t?t.separator:u;r="length"in t?Mf(t.length):r,e="omission"in t?Tu(t.omission):e}var o=(n=Zf(n)).length;if(Or(n)){var f=Lr(n);o=f.length}if(r>=o)return n;var a=r-zr(e);if(a<1)return e;var c=f?Vu(f,0,a).join(""):n.slice(0,a);if(u===i)return c+e;if(f&&(a+=c.length-a),Lf(u)){if(n.slice(a).search(u)){var l,s=c;for(u.global||(u=rt(u.source,Zf(qn.exec(u))+"g")),u.lastIndex=0;l=u.exec(s);)var h=l.index;c=c.slice(0,h===i?a:h)}}else if(n.indexOf(Tu(u),a)!=a){var p=c.lastIndexOf(u);p>-1&&(c=c.slice(0,p))}return c+e},he.unescape=function(n){return(n=Zf(n))&&On.test(n)?n.replace(jn,Wr):n},he.uniqueId=function(n){var t=++st;return Zf(n)+t},he.upperCase=xa,he.upperFirst=ja,he.each=qo,he.eachRight=Zo,he.first=yo,Ca(he,function(){var n={};return Ke(he,function(t,r){lt.call(he.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),he.VERSION="4.17.11",Gt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){he[n].placeholder=he}),Gt(["drop","take"],function(n,t){ge.prototype[n]=function(r){r=r===i?1:qr(Mf(r),0);var e=this.__filtered__&&!t?new ge(this):this.clone();return e.__filtered__?e.__takeCount__=Zr(r,e.__takeCount__):e.__views__.push({size:Zr(r,B),type:n+(e.__dir__<0?"Right":"")}),e},ge.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Gt(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==z||3==r;ge.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Ci(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),Gt(["head","last"],function(n,t){var r="take"+(t?"Right":"");ge.prototype[n]=function(){return this[r](1).value()[0]}}),Gt(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");ge.prototype[n]=function(){return this.__filtered__?new ge(this):this[r](1)}}),ge.prototype.compact=function(){return this.filter(Ea)},ge.prototype.find=function(n){return this.filter(n).head()},ge.prototype.findLast=function(n){return this.reverse().find(n)},ge.prototype.invokeMap=xu(function(n,t){return"function"==typeof n?new ge(this):this.map(function(r){return ru(r,n,t)})}),ge.prototype.reject=function(n){return this.filter(af(Ci(n)))},ge.prototype.slice=function(n,t){n=Mf(n);var r=this;return r.__filtered__&&(n>0||t<0)?new ge(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==i&&(r=(t=Mf(t))<0?r.dropRight(-t):r.take(t-n)),r)},ge.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ge.prototype.toArray=function(){return this.take(B)},Ke(ge.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=he[e?"take"+("last"==t?"Right":""):t],o=e||/^find/.test(t);u&&(he.prototype[t]=function(){var t=this.__wrapped__,f=e?[1]:arguments,a=t instanceof ge,c=f[0],l=a||yf(t),s=function(n){var t=u.apply(he,tr([n],f));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(a=l=!1);var h=this.__chain__,p=!!this.__actions__.length,v=o&&!h,_=a&&!p;if(!o&&l){t=_?t:new ge(this);var g=n.apply(t,f);return g.__actions__.push({func:Po,args:[s],thisArg:i}),new _e(g,h)}return v&&_?n.apply(this,f):(g=this.thru(s),v?e?g.value()[0]:g.value():g)})}),Gt(["pop","push","shift","sort","splice","unshift"],function(n){var t=it[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);he.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yf(u)?u:[],n)}return this[r](function(r){return t.apply(yf(r)?r:[],n)})}}),Ke(ge.prototype,function(n,t){var r=he[t];if(r){var e=r.name+"";(ee[e]||(ee[e]=[])).push({name:t,func:r})}}),ee[hi(i,d).name]=[{name:"wrapper",func:i}],ge.prototype.clone=function(){var n=new ge(this.__wrapped__);return n.__actions__=ti(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ti(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ti(this.__views__),n},ge.prototype.reverse=function(){if(this.__filtered__){var n=new ge(this);n.__dir__=-1,n.__filtered__=!0}else(n=this.clone()).__dir__*=-1;return n},ge.prototype.value=function(){var n=this.__wrapped__.value(),t=this.__dir__,r=yf(n),e=t<0,u=r?n.length:0,i=function(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Zr(t,n+o);break;case"takeRight":n=qr(n,t-o)}}return{start:n,end:t}}(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Zr(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return Du(n,this.__actions__);var v=[];n:for(;a--&&h<p;){for(var _=-1,g=n[c+=t];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==L)g=w;else if(!w){if(b==z)continue n;break n}}v[h++]=g}return v},he.prototype.at=Do,he.prototype.chain=function(){return $o(this)},he.prototype.commit=function(){return new _e(this.value(),this.__chain__)},he.prototype.next=function(){this.__values__===i&&(this.__values__=Pf(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?i:this.__values__[this.__index__++]}},he.prototype.plant=function(n){for(var t,r=this;r instanceof ve;){var e=lo(r);e.__index__=0,e.__values__=i,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t},he.prototype.reverse=function(){var n=this.__wrapped__;if(n instanceof ge){var t=n;return this.__actions__.length&&(t=new ge(this)),(t=t.reverse()).__actions__.push({func:Po,args:[ko],thisArg:i}),new _e(t,this.__chain__)}return this.thru(ko)},he.prototype.toJSON=he.prototype.valueOf=he.prototype.value=function(){return Du(this.__wrapped__,this.__actions__)},he.prototype.first=he.prototype.head,$t&&(he.prototype[$t]=function(){return this}),he}();Ct._=Cr,(u=function(){return Cr}.call(t,r,t,e))===i||(e.exports=u)}).call(this)}).call(this,r(1),r(20)(n))},22:function(n,t,r){n.exports=r(21)}});;
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);n(19),n(17),n(14);!function(e,t,n){t.platon={settings:n.platon||{homepageSlideSpeed:2e3},getViewport:function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},frontpageSlider:function(n){if(e("body.anonymous-slider",n).length){var i=0,o=0;e(".anonymous-slider .slider-item").each(function(){e(this).attr("data-id",i),i&&e(this).addClass("hide").fadeOut(),i+=1}),setInterval(function(){o<i-1?o+=1:o=0,e('.anonymous-slider .slider-item:not([data-id="'+o+'"])').addClass("hide").fadeOut(),e('.anonymous-slider .slider-item[data-id="'+o+'"]').removeClass("hide").fadeIn()},t.platon.settings.homepageSlideSpeed)}},anonymousUserForms:function(t){e("body.anonymous-slider").length&&e("#user-sidebar a",t).once().click(function(t){var n=e(this).attr("href");e('.form-wrapper[data-target="'+n+'"]').length&&(t.preventDefault(),e(".form-wrapper[data-target]").hide(),e('.form-wrapper[data-target="'+n+'"]').show())})},searchBar:function(t){var n=e(".search-trigger #search-trigger",t),i=e("#search-form",t),o=i.find('input[type="search"]');n.once("searchBar").on("click.searchBar",function(e){n.is(".open")?(n.removeClass("open"),i.hide()):(n.addClass("open"),i.show(),o.focus()),e.preventDefault()}),o.on("blur.searchBar",function(){n.trigger("click.searchBar")})},trainingCatalog:function(t){e("body.page-catalogue .views-exposed-form").find("fieldset#edit-sort-by--2--wrapper legend, fieldset#edit-sort-by--wrapper legend",t).once().click(function(){e(this).hasClass("active")?e(this).removeClass("active"):e(this).addClass("active")})},privateMessageRecipients:function(t){e(".private-message-recipients",t).each(function(){var t=parseInt(e(this).css("line-height"),10);e(this).css("max-height",t),e(this).find(".content").height()>t&&(e(this).css("max-height",t).addClass("short").append('<a href="#" class="expander">...</a>'),e(this).find(".expander").on("click",function(){return e(this).closest(".private-message-recipients").css("max-height","none").removeClass("short"),e(this).hide(),!1}))})},stepsVisibility:function(t){if(e("div#block-lp-steps-block",t).length){var n=e('<a href="#" id="lp-steps-trigger" class="btn btn-link mr-auto"><i class="icon-module-open"></i>show</a>'),i=e("#content",t),o=e("#sidebar-first",t),r=e("#content",t).attr("class"),a={get:function(){var e=JSON.parse(window.sessionStorage.getItem("Opigno.training"));return null===e&&((e={}).showSidebar=!1),e},set:function(e){window.sessionStorage.setItem("Opigno.training",JSON.stringify(e))},toggleSidebarState:function(){var e=this.get();e.showSidebar=!e.showSidebar,this.set(e)}};o.hide(),i.addClass("col-lg-12"),e("#main div#edit-actions",t).prepend(n),n.once().click(function(t){t.preventDefault(),a.toggleSidebarState(),n.hasClass("open")?(n.removeClass("open"),o.hide(),i.addClass("col-lg-12")):(n.addClass("open"),o.show(),i.attr("class",r)),e(window).trigger("resize"),"undefined"!=typeof H5P&&H5P.jQuery(window).trigger("resize")}),a.get().showSidebar&&(n.addClass("open"),o.show(),i.attr("class",r))}},formatTFTOperations:function(t){e("div#documents-library table tbody tr > td:last-child",t).each(function(){if(!e(this).hasClass("js-formatted")){e(this).addClass("js-formatted");var t='<div class="btn-group operations">';t+='<button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"></button>',t+='<div class="dropdown-menu dropdown-menu-right">',e(this).find("a").each(function(){e(this).removeClass("ops-link"),t+=e(this)[0].outerHTML}),t+="</div>",t+="</div>",e(this).html(t)}})},mobileMenu:function(t){var n=e("button.navbar-toggler",t),i=e("div#menu-wrapper",t);n.once().click(function(){n.hasClass("open")?(n.removeClass("open"),i.removeClass("show")):(n.addClass("open"),i.addClass("show"))})},fileWidget:function(t){e(".opigno-file-widget-wrapper",t).each(function(){e(this).find('input[type="hidden"] + span.file').length?e(this).addClass("not-empty"):e(this).removeClass("not-empty")})},packageFileInput:function(t){e(document,t).on("change",'input[name="files[package]"]',function(t){var n=e(this).next(".description"),i=t.target.value.split("\\").pop();n.data("default-value")||n.data("default-value",n.text()),i?n.text(i):n.text(n.data("default-value"))})},viewOpignoActivitiesBank:function(t){if(e(".view-opigno-activities-bank-lp-interface",t).length){var n=e('nav[aria-labelledby="pagination-heading"]',t);n.children("ul.pager").css("margin-bottom","-1rem"),e("form#views-form-opigno-activities-bank-lp-interface-default > table",t).after(n)}},triggerClick:function(t){e('[data-toggle="trigger_click"]',t).each(function(){var t=e(this),n=e(t.data().target);t.on("click",function(e){n.length&&(n.trigger("click"),e.preventDefault())})})},pageLoader:function(t){setTimeout(function(){e("body",t).addClass("page-ready")})},ajaxFullScreenLoader:{show:function(){var t=e('<div id="ajaxFullScreenLoader" class="spinner-overlay"><div class="spinner" role="status"><span class="sr-only">Loading...</span>\n</div>');e("#ajaxFullScreenLoader").length||(e("body").append(t),t.fadeIn("fast"))},hide:function(){var t=e("#ajaxFullScreenLoader");t.fadeOut("fast",function(){t.remove()})}},videoPreview:function(t){e(".file-video-wrapper",t).once("videoPreview").each(function(){var t=e(this),n=t.find(".video-image-preview");if(n.length){var i=t.find("video");n.one("click",function(){n.hide(),i.show(),i[0].play()})}})},copyContent:function(t){e("[data-copy-content]",t).once().each(function(){var t=e(this),n=e(t.data().copyContent);n.length&&((n=n.clone(!0,!0)).find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t.prepend(n.children()))})}},t.behaviors.platon={attach:function(n){t.platon.frontpageSlider(n),t.platon.anonymousUserForms(n),t.platon.searchBar(n),t.platon.trainingCatalog(n),t.platon.privateMessageRecipients(n),t.platon.stepsVisibility(n),t.platon.mobileMenu(n),t.platon.fileWidget(n),t.platon.packageFileInput(n),t.platon.viewOpignoActivitiesBank(n),t.platon.triggerClick(n),t.platon.pageLoader(n),t.platon.videoPreview(n),t.platon.copyContent(n),e("#training-content-wrapper iframe",n).parents(".tab-pane").addClass("adapt-iframe-size"),e("iframe").iFrameResize({resizedCallback:function(t){+t.height&&e(t.iframe).parent().height(+t.height),e(t.iframe).parents(".adapt-iframe-size").removeClass("adapt-iframe-size")}}),e('a[href="#documents-library"]',n).once().click(function(){t.platon.formatTFTOperations(n)}),e(document).ajaxSuccess(function(){t.platon.formatTFTOperations(n)})}}}(window.jQuery,window.Drupal,window.drupalSettings)},,,,,,,,,function(e,t){!function(t){"use strict";if("undefined"!=typeof window){var n=!0,i=10,o="",r=0,a="",s=null,l="",c=!1,u={resize:1,click:1},f=128,d=!0,h=1,p="bodyOffset",m=p,g=!0,v="",y={},b=32,_=null,E=!1,w="[iFrameSizer]",T=w.length,C="",S={max:1,min:1,bodyScroll:1,documentElementScroll:1},A="child",O=!0,x=window.parent,I="*",D=0,N=!1,k=null,L=16,P=1,H="scroll",R=H,M=window,j=function(){J("MessageCallback function not defined")},F=function(){},W=function(){},q={height:function(){return J("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return J("Custom width calculation function not defined"),document.body.scrollWidth}},B={},U=Date.now||function(){return(new Date).getTime()},V={bodyOffset:function(){return document.body.offsetHeight+ce("marginTop")+ce("marginBottom")},offset:function(){return V.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return q.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,fe(V))},min:function(){return Math.min.apply(null,fe(V))},grow:function(){return V.max()},lowestElement:function(){return Math.max(V.bodyOffset()||V.documentElementOffset(),ue("bottom",he()))},taggedElement:function(){return de("bottom","data-iframe-height")}},z={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return q.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(z.bodyScroll(),z.documentElementScroll())},max:function(){return Math.max.apply(null,fe(z))},min:function(){return Math.min.apply(null,fe(z))},rightMostElement:function(){return ue("right",he())},taggedElement:function(){return de("right","data-iframe-width")}},G=function(e){var t,n,i,o=null,r=0,a=function(){r=U(),o=null,i=e.apply(t,n),o||(t=n=null)};return function(){var s=U();r||(r=s);var l=L-(s-r);return t=this,n=arguments,l<=0||l>L?(o&&(clearTimeout(o),o=null),r=s,i=e.apply(t,n),o||(t=n=null)):o||(o=setTimeout(a,l)),i}}(pe);K(window,"message",_e),"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function K(e,t,n){"addEventListener"in window?e.addEventListener(t,n,!1):"attachEvent"in window&&e.attachEvent("on"+t,n)}function Q(e,t,n){"removeEventListener"in window?e.removeEventListener(t,n,!1):"detachEvent"in window&&e.detachEvent("on"+t,n)}function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $(e){return w+"["+C+"] "+e}function Y(e){E&&"object"==typeof window.console&&console.log($(e))}function J(e){"object"==typeof window.console&&console.warn($(e))}function Z(){!function(){function e(e){return"true"===e}var i=v.substr(T).split(":");C=i[0],r=t!==i[1]?Number(i[1]):r,c=t!==i[2]?e(i[2]):c,E=t!==i[3]?e(i[3]):E,b=t!==i[4]?Number(i[4]):b,n=t!==i[6]?e(i[6]):n,a=i[7],m=t!==i[8]?i[8]:m,o=i[9],l=i[10],D=t!==i[11]?Number(i[11]):D,y.enable=t!==i[12]&&e(i[12]),A=t!==i[13]?i[13]:A,R=t!==i[14]?i[14]:R}(),Y("Initialising iFrame ("+location.href+")"),function(){function e(e,t){return"function"==typeof e&&(Y("Setup custom "+t+"CalcMethod"),q[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(!function(){var e=window.iFrameResizer;Y("Reading data from page: "+JSON.stringify(e)),j="messageCallback"in e?e.messageCallback:j,F="readyCallback"in e?e.readyCallback:F,I="targetOrigin"in e?e.targetOrigin:I,m="heightCalculationMethod"in e?e.heightCalculationMethod:m,R="widthCalculationMethod"in e?e.widthCalculationMethod:R}(),m=e(m,"height"),R=e(R,"width"));Y("TargetOrigin for parent set to: "+I)}(),function(){t===a&&(a=r+"px");ee("margin",function(e,t){-1!==t.indexOf("-")&&(J("Negative CSS value ignored for "+e),t="");return t}("margin",a))}(),ee("background",o),ee("padding",l),function(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",document.body.appendChild(e)}(),oe(),re(),document.documentElement.style.height="",document.body.style.height="",Y('HTML & body height set to "auto"'),Y("Enable public methods"),M.parentIFrame={autoResize:function(e){return!0===e&&!1===n?(n=!0,ae()):!1===e&&!0===n&&(n=!1,se()),n},close:function(){be(0,0,"close"),Y("Disable outgoing messages"),O=!1,Y("Remove event listener: Message"),Q(window,"message",_e),!0===n&&se()},getId:function(){return C},getPageInfo:function(e){"function"==typeof e?(W=e,be(0,0,"pageInfo")):(W=function(){},be(0,0,"pageInfoStop"))},moveToAnchor:function(e){y.findTarget(e)},reset:function(){ye("parentIFrame.reset")},scrollTo:function(e,t){be(t,e,"scrollTo")},scrollToOffset:function(e,t){be(t,e,"scrollToOffset")},sendMessage:function(e,t){be(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){m=e,oe()},setWidthCalculationMethod:function(e){R=e,re()},setTargetOrigin:function(e){Y("Set targetOrigin: "+e),I=e},size:function(e,t){var n=(e||"")+(t?","+t:"");me("size","parentIFrame.size("+n+")",e,t)}},ae(),y=function(){function e(e){var n=e.getBoundingClientRect(),i={x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop};return{x:parseInt(n.left,10)+parseInt(i.x,10),y:parseInt(n.top,10)+parseInt(i.y,10)}}function n(n){var i=n.split("#")[1]||n,o=decodeURIComponent(i),r=document.getElementById(o)||document.getElementsByName(o)[0];t!==r?function(t){var n=e(t);Y("Moving to in page link (#"+i+") at x: "+n.x+" y: "+n.y),be(n.y,n.x,"scrollToOffset")}(r):(Y("In page link (#"+i+") not found in iFrame, so sending to parent"),be(0,0,"inPageLink","#"+i))}function i(){""!==location.hash&&"#"!==location.hash&&n(location.href)}y.enable?Array.prototype.forEach&&document.querySelectorAll?(Y("Setting up location.hash handlers"),Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),function(e){"#"!==e.getAttribute("href")&&K(e,"click",function(e){e.preventDefault(),n(this.getAttribute("href"))})}),K(window,"hashchange",i),setTimeout(i,f)):J("In page linking not fully supported in this browser! (See README.md for IE8 workaround)"):Y("In page linking not enabled");return{findTarget:n}}(),me("init","Init message from host page"),F()}function ee(e,n){t!==n&&""!==n&&"null"!==n&&(document.body.style[e]=n,Y("Body "+e+' set to "'+n+'"'))}function te(e){var t={add:function(t){function n(){me(e.eventName,e.eventType)}B[t]=n,K(window,t,n)},remove:function(e){var t=B[e];delete B[e],Q(window,e,t)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),Y(X(e.method)+" event listener: "+e.eventType)}function ne(e){te({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),te({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),te({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),te({method:e,eventType:"Input",eventName:"input"}),te({method:e,eventType:"Mouse Up",eventName:"mouseup"}),te({method:e,eventType:"Mouse Down",eventName:"mousedown"}),te({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),te({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),te({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),te({method:e,eventType:"Touch Start",eventName:"touchstart"}),te({method:e,eventType:"Touch End",eventName:"touchend"}),te({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),te({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),te({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),te({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===A&&te({method:e,eventType:"IFrame Resized",eventName:"resize"})}function ie(e,t,n,i){return t!==e&&(e in n||(J(e+" is not a valid option for "+i+"CalculationMethod."),e=t),Y(i+' calculation method set to "'+e+'"')),e}function oe(){m=ie(m,p,V,"height")}function re(){R=ie(R,H,z,"width")}function ae(){!0===n?(ne("add"),function(){var e=0>b;window.MutationObserver||window.WebKitMutationObserver?e?le():s=function(){function e(e){function t(e){!1===e.complete&&(Y("Attach listeners to "+e.src),e.addEventListener("load",o,!1),e.addEventListener("error",r,!1),s.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function n(e){Y("Remove listeners from "+e.src),e.removeEventListener("load",o,!1),e.removeEventListener("error",r,!1),function(e){s.splice(s.indexOf(e),1)}(e)}function i(e,i,o){n(e.target),me(i,o+": "+e.target.src,t,t)}function o(e){i(e,"imageLoad","Image loaded")}function r(e){i(e,"imageLoadFailed","Image load failed")}function a(t){me("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var s=[],l=window.MutationObserver||window.WebKitMutationObserver,c=function(){var e=document.querySelector("body");return c=new l(a),Y("Create body MutationObserver"),c.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),c}();return{disconnect:function(){"disconnect"in c&&(Y("Disconnect body MutationObserver"),c.disconnect(),s.forEach(n))}}}():(Y("MutationObserver not supported in this browser!"),le())}()):Y("Auto Resize disabled")}function se(){ne("remove"),null!==s&&s.disconnect(),clearInterval(_)}function le(){0!==b&&(Y("setInterval: "+b+"ms"),_=setInterval(function(){me("interval","setInterval: "+b)},Math.abs(b)))}function ce(e,t){var n=0;return t=t||document.body,n="defaultView"in document&&"getComputedStyle"in document.defaultView?null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0:function(e){if(/^\d+(px)?$/i.test(e))return parseInt(e,i);var n=t.style.left,o=t.runtimeStyle.left;return t.runtimeStyle.left=t.currentStyle.left,t.style.left=e||0,e=t.style.pixelLeft,t.style.left=n,t.runtimeStyle.left=o,e}(t.currentStyle[e]),parseInt(n,i)}function ue(e,t){for(var n=t.length,i=0,o=0,r=X(e),a=U(),s=0;s<n;s++)(i=t[s].getBoundingClientRect()[e]+ce("margin"+r,t[s]))>o&&(o=i);return a=U()-a,Y("Parsed "+n+" HTML elements"),Y("Element position calculated in "+a+"ms"),function(e){e>L/2&&Y("Event throttle increased to "+(L=2*e)+"ms")}(a),o}function fe(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function de(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&(J("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")),ue(e,n)}function he(){return document.querySelectorAll("body *")}function pe(e,n,i,o){var r,a;!function(){function e(e,t){return!(Math.abs(e-t)<=D)}return r=t!==i?i:V[m](),a=t!==o?o:z[R](),e(h,r)||c&&e(P,a)}()&&"init"!==e?e in{init:1,interval:1,size:1}||!(m in S||c&&R in S)?e in{interval:1}||Y("No change in size detected"):ye(n):(ge(),be(h=r,P=a,e))}function me(e,t,n,i){N&&e in u?Y("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||Y("Trigger event: "+t),"init"===e?pe(e,t,n,i):G(e,t,n,i))}function ge(){N||(N=!0,Y("Trigger event lock on")),clearTimeout(k),k=setTimeout(function(){N=!1,Y("Trigger event lock off"),Y("--")},f)}function ve(e){h=V[m](),P=z[R](),be(h,P,e)}function ye(e){var t=m;m=p,Y("Reset trigger event: "+e),ge(),ve("reset"),m=t}function be(e,n,i,o,r){!0===O&&(t===r?r=I:Y("Message targetOrigin: "+r),function(){var a=C+":"+e+":"+n+":"+i+(t!==o?":"+o:"");Y("Sending message to host page ("+a+")"),x.postMessage(w+a,r)}())}function _e(t){var n={init:function(){"interactive"===document.readyState||"complete"===document.readyState?(v=t.data,x=t.source,Z(),d=!1,setTimeout(function(){g=!1},f)):(Y("Waiting for page ready"),K(window,"readystatechange",n.initFromParent))},reset:function(){g?Y("Page reset ignored by init"):(Y("Page size reset by host page"),ve("resetPage"))},resize:function(){me("resizeParent","Parent window requested size check")},moveToAnchor:function(){y.findTarget(o())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=o();Y("PageInfoFromParent called from parent: "+e),W(JSON.parse(e)),Y(" --")},message:function(){var e=o();Y("MessageCallback called from parent: "+e),j(JSON.parse(e)),Y(" --")}};function i(){return t.data.split("]")[1].split(":")[0]}function o(){return t.data.substr(t.data.indexOf(":")+1)}function r(){return t.data.split(":")[2]in{true:1,false:1}}function a(){var o=i();o in n?n[o]():(void 0===e||!e.exports)&&"iFrameResize"in window||r()||J("Unexpected message ("+t.data+")")}w===(""+t.data).substr(0,T)&&(!1===d?a():r()?n.init():Y('Ignored message of type "'+i()+'". Received before initialization.'))}}()},function(e,t,n){var i,o,r;!function(n){"use strict";if("undefined"!=typeof window){var a=0,s=!1,l=!1,c="message".length,u="[iFrameSizer]",f=u.length,d=null,h=window.requestAnimationFrame,p={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},m={},g=null,v={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){S("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}},y={};window.jQuery&&function(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(e){return this.filter("iframe").each(function(t,n){j(n,e)}).end()}):C("","Unable to bind to jQuery, it is not fully loaded.")}(window.jQuery),o=[],(r="function"==typeof(i=function(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),j(n,e),t.push(n))}var t;return function(){var e,t=["moz","webkit","o","ms"];for(e=0;e<t.length&&!h;e+=1)h=window[t[e]+"RequestAnimationFrame"];h||T("setup","RequestAnimationFrame not supported")}(),b(window,"message",O),b(window,"resize",function(){W("resize")}),b(document,"visibilitychange",q),b(document,"-webkit-visibilitychange",q),b(window,"focusin",function(){W("focus")}),b(window,"focus",function(){W("focus")}),function(i,o){switch(t=[],function(e){e&&e.enablePublicMethods&&S("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(n,i));break;case"object":e(i,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return t}})?i.apply(t,o):i)===n||(e.exports=r)}function b(e,t,n){"addEventListener"in window?e.addEventListener(t,n,!1):"attachEvent"in window&&e.attachEvent("on"+t,n)}function _(e,t,n){"removeEventListener"in window?e.removeEventListener(t,n,!1):"detachEvent"in window&&e.detachEvent("on"+t,n)}function E(e){return u+"["+function(e){var t="Host page: "+e;return window.top!==window.self&&(t=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),t}(e)+"]"}function w(e){return m[e]?m[e].log:s}function T(e,t){A("log",e,t,w(e))}function C(e,t){A("info",e,t,w(e))}function S(e,t){A("warn",e,t,!0)}function A(e,t,n,i){!0===i&&"object"==typeof window.console&&console[e](E(t),n)}function O(e){function t(){n("Height"),n("Width"),H(function(){P(p),N(g),l("resizedCallback",p)},p,"init")}function n(e){var t=Number(m[g]["max"+e]),n=Number(m[g]["min"+e]),i=e.toLowerCase(),o=Number(p[i]);T(g,"Checking "+i+" is in range "+n+"-"+t),o<n&&(o=n,T(g,"Set "+i+" to min value")),o>t&&(o=t,T(g,"Set "+i+" to max value")),p[i]=""+o}function i(e){return h.substr(h.indexOf(":")+c+e)}function o(e,t){!function(e,t,n){y[n]||(y[n]=setTimeout(function(){y[n]=null,e()},t))}(function(){R("Send Page Info","pageInfo:"+function(){var e=document.body.getBoundingClientRect(),t=p.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})}(),e,t)},32,t)}function r(e){var t=e.getBoundingClientRect();return D(g),{x:Math.floor(Number(t.left)+Number(d.x)),y:Math.floor(Number(t.top)+Number(d.y))}}function a(e){var t=e?r(p.iframe):{x:0,y:0},n={x:Number(p.width)+t.x,y:Number(p.height)+t.y};T(g,"Reposition requested from iFrame (offset x:"+t.x+" y:"+t.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):S(g,"Unable to scroll to requested position, window.parentIFrame not found"):(d=n,s(),T(g,"--"))}function s(){!1!==l("scrollCallback",d)?N(g):k()}function l(e,t){return x(g,e,t)}var h=e.data,p={},g=null;"[iFrameResizerChild]Ready"===h?function(){for(var e in m)R("iFrame requested init",M(e),document.getElementById(e),e)}():u===(""+h).substr(0,f)&&h.substr(f).split(":")[0]in m?(p=function(){var e=h.substr(f).split(":");return{iframe:m[e[0]]&&m[e[0]].iframe,id:e[0],height:e[1],width:e[2],type:e[3]}}(),g=p.id,m[g]&&(m[g].loaded=!0),!function(){var e=p.type in{true:1,false:1,undefined:1};return e&&T(g,"Ignoring init message from meta parent page"),e}()&&function(e){var t=!0;return m[e]||(t=!1,S(p.type+" No settings for "+e+". Message was: "+h)),t}(g)&&(T(g,"Received: "+h),function(){var e=!0;return null===p.iframe&&(S(g,"IFrame ("+p.id+") not found"),e=!1),e}()&&function(){var t=e.origin,n=m[g]&&m[g].checkOrigin;if(n&&""+t!="null"&&!(n.constructor===Array?function(){var e=0,i=!1;for(T(g,"Checking connection is from allowed list of origins: "+n);e<n.length;e++)if(n[e]===t){i=!0;break}return i}():function(){var e=m[g]&&m[g].remoteHost;return T(g,"Checking connection is from: "+e),t===e}()))throw new Error("Unexpected message received from: "+t+" for "+p.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(m[g]&&m[g].firstRun&&m[g]&&(m[g].firstRun=!1),p.type){case"close":m[g].closeRequestCallback?x(g,"closeRequestCallback",m[g].iframe):I(p.iframe);break;case"message":!function(e){T(g,"MessageCallback passed: {iframe: "+p.iframe.id+", message: "+e+"}"),l("messageCallback",{iframe:p.iframe,message:JSON.parse(e)}),T(g,"--")}(i(6));break;case"scrollTo":a(!1);break;case"scrollToOffset":a(!0);break;case"pageInfo":o(m[g]&&m[g].iframe,g),function(){function e(e,i){function r(){m[n]?o(m[n].iframe,n):t()}["scroll","resize"].forEach(function(t){T(n,e+t+" listener for sendPageInfo"),i(window,t,r)})}function t(){e("Remove ",_)}var n=g;e("Add ",b),m[n]&&(m[n].stopPageInfo=t)}();break;case"pageInfoStop":m[g]&&m[g].stopPageInfo&&(m[g].stopPageInfo(),delete m[g].stopPageInfo);break;case"inPageLink":!function(e){var t=e.split("#")[1]||"",n=decodeURIComponent(t),i=document.getElementById(n)||document.getElementsByName(n)[0];i?function(){var e=r(i);T(g,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),d={x:e.x,y:e.y},s(),T(g,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):T(g,"In page link #"+t+" not found and window.parentIFrame not found"):T(g,"In page link #"+t+" not found")}(i(9));break;case"reset":L(p);break;case"init":t(),l("initCallback",p.iframe);break;default:t()}}())):C(g,"Ignored: "+h)}function x(e,t,n){var i=null,o=null;if(m[e]){if("function"!=typeof(i=m[e][t]))throw new TypeError(t+" on iFrame["+e+"] is not a function");o=i(n)}return o}function I(e){var t=e.id;T(t,"Removing iFrame: "+t),e.parentNode&&e.parentNode.removeChild(e),x(t,"closedCallback",t),T(t,"--"),delete m[t]}function D(e){null===d&&T(e,"Get page position: "+(d={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+d.y)}function N(e){null!==d&&(window.scrollTo(d.x,d.y),T(e,"Set page position: "+d.x+","+d.y),k())}function k(){d=null}function L(e){T(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),D(e.id),H(function(){P(e),R("reset","reset",e.iframe,e.id)},e,"reset")}function P(e){function t(t){l||"0"!==e[t]||(l=!0,T(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function t(t){return"0px"===(m[e]&&m[e].iframe.style[t])}m[e]&&function(e){return null!==e.offsetParent}(m[e].iframe)&&(t("height")||t("width"))&&R("Visibility change","resize",m[e].iframe,e)}for(var t in m)e(t)}function t(t){T("window","Mutation observed: "+t[0].target+" "+t[0].type),F(e,16)}var n=window.MutationObserver||window.WebKitMutationObserver;n&&function(){var e=document.querySelector("body");new n(t).observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0})}()}())}function n(n){!function(t){e.iframe.style[t]=e[t]+"px",T(e.id,"IFrame ("+i+") "+t+" set to "+e[t]+"px")}(n),t(n)}var i=e.iframe.id;m[i]&&(m[i].sizeHeight&&n("height"),m[i].sizeWidth&&n("width"))}function H(e,t,n){n!==t.type&&h?(T(t.id,"Requesting animation frame"),h(e)):e()}function R(e,t,n,i,o){var r=!1;i=i||n.id,m[i]&&(n&&"contentWindow"in n&&null!==n.contentWindow?function(){var o=m[i]&&m[i].targetOrigin;T(i,"["+e+"] Sending msg to iframe["+i+"] ("+t+") targetOrigin: "+o),n.contentWindow.postMessage(u+t,o)}():S(i,"["+e+"] IFrame("+i+") not found"),o&&m[i]&&m[i].warningTimeout&&(m[i].msgTimeout=setTimeout(function(){!m[i]||m[i].loaded||r||(r=!0,S(i,"IFrame has not responded within "+m[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},m[i].warningTimeout)))}function M(e){return e+":"+m[e].bodyMarginV1+":"+m[e].sizeWidth+":"+m[e].log+":"+m[e].interval+":"+m[e].enablePublicMethods+":"+m[e].autoResize+":"+m[e].bodyMargin+":"+m[e].heightCalculationMethod+":"+m[e].bodyBackground+":"+m[e].bodyPadding+":"+m[e].tolerance+":"+m[e].inPageLinks+":"+m[e].resizeFrom+":"+m[e].widthCalculationMethod}function j(e,t){var i=function(n){return n,""===n&&(e.id=n=function(){var e=t&&t.id||v.id+a++;return null!==document.getElementById(e)&&(e+=a++),e}(),s=(t||{}).log,n,T(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);i in m&&"iFrameResizer"in e?S(i,"Ignored iFrame, already setup."):(!function(t){t=t||{},m[i]={firstRun:!0,iframe:e,remoteHost:e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(t),function(e){for(var t in v)v.hasOwnProperty(t)&&(m[i][t]=e.hasOwnProperty(t)?e[t]:v[t])}(t),m[i]&&(m[i].targetOrigin=!0===m[i].checkOrigin?function(e){return""===e||"file://"===e?"*":e}(m[i].remoteHost):"*")}(t),function(){switch(T(i,"IFrame scrolling "+(m[i]&&m[i].scrolling?"enabled":"disabled")+" for "+i),e.style.overflow=!1===(m[i]&&m[i].scrolling)?"hidden":"auto",m[i]&&m[i].scrolling){case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=m[i]?m[i].scrolling:"no"}}(),function(){function t(t){1/0!==m[i][t]&&0!==m[i][t]&&(e.style[t]=m[i][t]+"px",T(i,"Set "+t+" = "+m[i][t]+"px"))}function n(e){if(m[i]["min"+e]>m[i]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),t("maxHeight"),t("minHeight"),t("maxWidth"),t("minWidth")}(),"number"!=typeof(m[i]&&m[i].bodyMargin)&&"0"!==(m[i]&&m[i].bodyMargin)||(m[i].bodyMarginV1=m[i].bodyMargin,m[i].bodyMargin=m[i].bodyMargin+"px"),function(t){b(e,"load",function(){R("iFrame.onload",t,e,n,!0),function(){var t=m[i]&&m[i].firstRun,n=m[i]&&m[i].heightCalculationMethod in p;!t&&n&&L({iframe:e,height:0,width:0,type:"init"})}()}),R("init",t,e,n,!0)}(M(i)),Function.prototype.bind&&m[i]&&(m[i].iframe.iFrameResizer={close:I.bind(null,m[i].iframe),resize:R.bind(null,"Window resize","resize",m[i].iframe),moveToAnchor:function(e){R("Move to anchor","moveToAnchor:"+e,m[i].iframe,i)},sendMessage:function(e){R("Send Message","message:"+(e=JSON.stringify(e)),m[i].iframe,i)}}))}function F(e,t){null===g&&(g=setTimeout(function(){g=null,e()},t))}function W(e){T("window","Trigger event: "+e),F(function(){B("Window "+e,"resize")},16)}function q(){"hidden"!==document.visibilityState&&(T("document","Trigger event: Visiblity change"),F(function(){B("Tab Visable","resize")},16))}function B(e,t){function n(e){return m[e]&&"parent"===m[e].resizeFrom&&m[e].autoResize&&!m[e].firstRun}for(var i in m)n(i)&&R(e,t,document.getElementById(i),i)}}()},function(e,t,n){t.iframeResizer=n(12),t.iframeResizerContentWindow=n(11)},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";n.r(t),function(e){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!=typeof window&&"undefined"!=typeof document,i=["Edge","Trident","Firefox"],o=0,r=0;r<i.length;r+=1)if(n&&navigator.userAgent.indexOf(i[r])>=0){o=1;break}var a=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},o))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function l(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function c(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function u(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=l(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:u(c(e))}var f=n&&!(!window.MSInputMethodContext||!document.documentMode),d=n&&/MSIE 10/.test(navigator.userAgent);function h(e){return 11===e?f:10===e?d:f||d}function p(e){if(!e)return document.documentElement;for(var t=h(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function m(e){return null!==e.parentNode?m(e.parentNode):e}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var a=r.commonAncestorContainer;if(e!==a&&t!==a||i.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||p(e.firstElementChild)===e)}(a)?a:p(a);var s=m(e);return s.host?g(s.host,t):g(e,m(t).host)}function v(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[t]}return e[t]}function y(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function b(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],h(10)?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function _(){var e=document.body,t=document.documentElement,n=h(10)&&getComputedStyle(t);return{height:b("Height",e,t,n),width:b("Width",e,t,n)}}var E=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),T=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function S(e){return C({},e,{right:e.left+e.width,bottom:e.top+e.height})}function A(e){var t={};try{if(h(10)){t=e.getBoundingClientRect();var n=v(e,"top"),i=v(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?_():{},a=r.width||e.clientWidth||o.right-o.left,s=r.height||e.clientHeight||o.bottom-o.top,c=e.offsetWidth-a,u=e.offsetHeight-s;if(c||u){var f=l(e);c-=y(f,"x"),u-=y(f,"y"),o.width-=c,o.height-=u}return S(o)}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h(10),o="HTML"===t.nodeName,r=A(e),a=A(t),s=u(e),c=l(t),f=parseFloat(c.borderTopWidth,10),d=parseFloat(c.borderLeftWidth,10);n&&"HTML"===t.nodeName&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var p=S({top:r.top-a.top-f,left:r.left-a.left-d,width:r.width,height:r.height});if(p.marginTop=0,p.marginLeft=0,!i&&o){var m=parseFloat(c.marginTop,10),g=parseFloat(c.marginLeft,10);p.top-=f-m,p.bottom-=f-m,p.left-=d-g,p.right-=d-g,p.marginTop=m,p.marginLeft=g}return(i&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=v(t,"top"),o=v(t,"left"),r=n?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=o*r,e.right+=o*r,e}(p,t)),p}function x(e){if(!e||!e.parentElement||h())return document.documentElement;for(var t=e.parentElement;t&&"none"===l(t,"transform");)t=t.parentElement;return t||document.documentElement}function I(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},a=o?x(e):g(e,t);if("viewport"===i)r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=O(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:v(n),s=t?0:v(n,"left");return S({top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:r})}(a,o);else{var s=void 0;"scrollParent"===i?"BODY"===(s=u(c(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===i?e.ownerDocument.documentElement:i;var f=O(s,a,o);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===l(t,"position")||e(c(t)))}(a))r=f;else{var d=_(),h=d.height,p=d.width;r.top+=f.top-f.marginTop,r.bottom=h+f.top,r.left+=f.left-f.marginLeft,r.right=p+f.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function D(e,t,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=I(n,i,r,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},l=Object.keys(s).map(function(e){return C({key:e},s[e],{area:function(e){return e.width*e.height}(s[e])})}).sort(function(e,t){return t.area-e.area}),c=l.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}),u=c.length>0?c[0].key:l[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function N(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return O(n,i?x(t):g(t,n),i)}function k(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function L(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function P(e,t,n){n=n.split("-")[0];var i=k(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[a]=t[a]+t[l]/2-i[l]/2,o[s]=n===s?t[s]-i[c]:t[L(s)],o}function H(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function R(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=H(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&s(n)&&(t.offsets.popper=S(t.offsets.popper),t.offsets.reference=S(t.offsets.reference),t=n(t,e))}),t}function M(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function j(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if(void 0!==document.body.style[r])return r}return null}function F(e){var t=e.ownerDocument;return t?t.defaultView:window}function W(e,t,n,i){n.updateBound=i,F(e).addEventListener("resize",n.updateBound,{passive:!0});var o=u(e);return function e(t,n,i,o){var r="BODY"===t.nodeName,a=r?t.ownerDocument.defaultView:t;a.addEventListener(n,i,{passive:!0}),r||e(u(a.parentNode),n,i,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function q(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return F(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function B(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&B(t[n])&&(i="px"),e.style[n]=t[n]+i})}function V(e,t,n){var i=H(e,function(e){return e.name===t}),o=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!o){var r="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],G=z.slice(3);function K(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=G.indexOf(e),i=G.slice(n+1).concat(G.slice(0,n));return t?i.reverse():i}var Q={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function X(e,t,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(H(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return(c=c.map(function(e,i){var o=(1===i?!r:r)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2];if(!r)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return S(s)[t]/100*r}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;return r}(e,o,t,n)})})).forEach(function(e,t){e.forEach(function(n,i){B(n)&&(o[t]+=n*("-"===e[i-1]?-1:1))})}),o}var $={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var o=e.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",c=s?"width":"height",u={start:T({},l,r[l]),end:T({},l,r[l]+r[c]-a[c])};e.offsets.popper=C({},a,u[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,a=o.reference,s=i.split("-")[0],l=void 0;return l=B(+n)?[+n,0]:X(n,r,a,s),"left"===s?(r.top+=l[0],r.left-=l[1]):"right"===s?(r.top+=l[0],r.left+=l[1]):"top"===s?(r.left+=l[0],r.top-=l[1]):"bottom"===s&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||p(e.instance.popper);e.instance.reference===n&&(n=p(n));var i=j("transform"),o=e.instance.popper.style,r=o.top,a=o.left,s=o[i];o.top="",o.left="",o[i]="";var l=I(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=r,o.left=a,o[i]=s,t.boundaries=l;var c=t.priority,u=e.offsets.popper,f={primary:function(e){var n=u[e];return u[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(u[e],l[e])),T({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=u[n];return u[e]>l[e]&&!t.escapeWithReference&&(i=Math.min(u[n],l[e]-("right"===e?u.width:u.height))),T({},n,i)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=C({},u,f[t](e))}),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",c=a?"width":"height";return n[s]<r(i[l])&&(e.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[s])&&(e.offsets.popper[l]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!V(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,a=r.popper,s=r.reference,c=-1!==["left","right"].indexOf(o),u=c?"height":"width",f=c?"Top":"Left",d=f.toLowerCase(),h=c?"left":"top",p=c?"bottom":"right",m=k(i)[u];s[p]-m<a[d]&&(e.offsets.popper[d]-=a[d]-(s[p]-m)),s[d]+m>a[p]&&(e.offsets.popper[d]+=s[d]+m-a[p]),e.offsets.popper=S(e.offsets.popper);var g=s[d]+s[u]/2-m/2,v=l(e.instance.popper),y=parseFloat(v["margin"+f],10),b=parseFloat(v["border"+f+"Width"],10),_=g-e.offsets.popper[d]-y-b;return _=Math.max(Math.min(a[u]-m,_),0),e.arrowElement=i,e.offsets.arrow=(T(n={},d,Math.round(_)),T(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(M(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=I(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],o=L(i),r=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case Q.FLIP:a=[i,o];break;case Q.CLOCKWISE:a=K(i);break;case Q.COUNTERCLOCKWISE:a=K(i,!0);break;default:a=t.behavior}return a.forEach(function(s,l){if(i!==s||a.length===l+1)return e;i=e.placement.split("-")[0],o=L(i);var c=e.offsets.popper,u=e.offsets.reference,f=Math.floor,d="left"===i&&f(c.right)>f(u.left)||"right"===i&&f(c.left)<f(u.right)||"top"===i&&f(c.bottom)>f(u.top)||"bottom"===i&&f(c.top)<f(u.bottom),h=f(c.left)<f(n.left),p=f(c.right)>f(n.right),m=f(c.top)<f(n.top),g=f(c.bottom)>f(n.bottom),v="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,y=-1!==["top","bottom"].indexOf(i),b=!!t.flipVariations&&(y&&"start"===r&&h||y&&"end"===r&&p||!y&&"start"===r&&m||!y&&"end"===r&&g);(d||v||b)&&(e.flipped=!0,(d||v)&&(i=a[l+1]),b&&(r=function(e){return"end"===e?"start":"start"===e?"end":e}(r)),e.placement=i+(r?"-"+r:""),e.offsets.popper=C({},e.offsets.popper,P(e.instance.popper,e.offsets.reference,e.placement)),e=R(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),e.placement=L(t),e.offsets.popper=S(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!V(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=H(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=H(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==r?r:t.gpuAcceleration,s=A(p(e.instance.popper)),l={position:o.position},c={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)},u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=j("transform"),h=void 0,m=void 0;if(m="bottom"===u?-s.height+c.bottom:c.top,h="right"===f?-s.width+c.right:c.left,a&&d)l[d]="translate3d("+h+"px, "+m+"px, 0)",l[u]=0,l[f]=0,l.willChange="transform";else{var g="bottom"===u?-1:1,v="right"===f?-1:1;l[u]=m*g,l[f]=h*v,l.willChange=u+", "+f}var y={"x-placement":e.placement};return e.attributes=C({},y,e.attributes),e.styles=C({},l,e.styles),e.arrowStyles=C({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),function(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,o){var r=N(o,t,e,n.positionFixed),a=D(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),U(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Y=function(){function e(t,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};E(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=a(this.update.bind(this)),this.options=C({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(C({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){i.options.modifiers[t]=C({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return C({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return w(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=D(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=P(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=R(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,M(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[j("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=W(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return q.call(this)}}]),e}();Y.Utils=("undefined"!=typeof window?window:e).PopperUtils,Y.placements=z,Y.Defaults=$,t.default=Y}.call(this,n(1))},function(e,t,n){var i;
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){"use strict";var r=[],a=n.document,s=Object.getPrototypeOf,l=r.slice,c=r.concat,u=r.push,f=r.indexOf,d={},h=d.toString,p=d.hasOwnProperty,m=p.toString,g=m.call(Object),v={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},b=function(e){return null!=e&&e===e.window},_={type:!0,src:!0,nonce:!0,noModule:!0};function E(e,t,n){var i,o,r=(n=n||a).createElement("script");if(r.text=e,t)for(i in _)(o=t[i]||t.getAttribute&&t.getAttribute(i))&&r.setAttribute(i,o);n.head.appendChild(r).parentNode.removeChild(r)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[h.call(e)]||"object":typeof e}var T=function(e,t){return new T.fn.init(e,t)},C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function S(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!y(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:"3.4.1",constructor:T,length:0,toArray:function(){return l.call(this)},get:function(e){return null==e?l.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:r.sort,splice:r.splice},T.extend=T.fn.extend=function(){var e,t,n,i,o,r,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||y(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)i=e[t],"__proto__"!==t&&a!==i&&(c&&i&&(T.isPlainObject(i)||(o=Array.isArray(i)))?(n=a[t],r=o&&!Array.isArray(n)?[]:o||T.isPlainObject(n)?n:{},o=!1,a[t]=T.extend(c,r,i)):void 0!==i&&(a[t]=i));return a},T.extend({expando:"jQuery"+("3.4.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e))&&(!(t=s(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&m.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){E(e,{nonce:t&&t.nonce})},each:function(e,t){var n,i=0;if(S(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(S(Object(e))?T.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:f.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i=[],o=0,r=e.length,a=!n;o<r;o++)!t(e[o],o)!==a&&i.push(e[o]);return i},map:function(e,t,n){var i,o,r=0,a=[];if(S(e))for(i=e.length;r<i;r++)null!=(o=t(e[r],r,n))&&a.push(o);else for(r in e)null!=(o=t(e[r],r,n))&&a.push(o);return c.apply([],a)},guid:1,support:v}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=r[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()});var A=
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
function(e){var t,n,i,o,r,a,s,l,c,u,f,d,h,p,m,g,v,y,b,_="sizzle"+1*new Date,E=e.document,w=0,T=0,C=le(),S=le(),A=le(),O=le(),x=function(e,t){return e===t&&(f=!0),0},I={}.hasOwnProperty,D=[],N=D.pop,k=D.push,L=D.push,P=D.slice,H=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",j="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",F="\\["+M+"*("+j+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+j+"))|)"+M+"*\\]",W=":("+j+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",q=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),U=new RegExp("^"+M+"*,"+M+"*"),V=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp(M+"|>"),G=new RegExp(W),K=new RegExp("^"+j+"$"),Q={ID:new RegExp("^#("+j+")"),CLASS:new RegExp("^\\.("+j+")"),TAG:new RegExp("^("+j+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,$=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){d()},ae=_e(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{L.apply(D=P.call(E.childNodes),E.childNodes),D[E.childNodes.length].nodeType}catch(e){L={apply:D.length?function(e,t){k.apply(e,P.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function se(e,t,i,o){var r,s,c,u,f,p,v,y=t&&t.ownerDocument,w=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return i;if(!o&&((t?t.ownerDocument||t:E)!==h&&d(t),t=t||h,m)){if(11!==w&&(f=Z.exec(e)))if(r=f[1]){if(9===w){if(!(c=t.getElementById(r)))return i;if(c.id===r)return i.push(c),i}else if(y&&(c=y.getElementById(r))&&b(t,c)&&c.id===r)return i.push(c),i}else{if(f[2])return L.apply(i,t.getElementsByTagName(e)),i;if((r=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(i,t.getElementsByClassName(r)),i}if(n.qsa&&!O[e+" "]&&(!g||!g.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===w&&z.test(e)){for((u=t.getAttribute("id"))?u=u.replace(ie,oe):t.setAttribute("id",u=_),s=(p=a(e)).length;s--;)p[s]="#"+u+" "+be(p[s]);v=p.join(","),y=ee.test(e)&&ve(t.parentNode)||t}try{return L.apply(i,y.querySelectorAll(v)),i}catch(t){O(e,!0)}finally{u===_&&t.removeAttribute("id")}}}return l(e.replace(B,"$1"),t,i,o)}function le(){var e=[];return function t(n,o){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=o}}function ce(e){return e[_]=!0,e}function ue(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),o=n.length;o--;)i.attrHandle[n[o]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function me(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ge(e){return ce(function(t){return t=+t,ce(function(n,i){for(var o,r=e([],n.length,t),a=r.length;a--;)n[o=r[a]]&&(n[o]=!(i[o]=n[o]))})})}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},r=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!X.test(t||n&&n.nodeName||"HTML")},d=se.setDocument=function(e){var t,o,a=e?e.ownerDocument||e:E;return a!==h&&9===a.nodeType&&a.documentElement?(p=(h=a).documentElement,m=!r(h),E!==h&&(o=h.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",re,!1):o.attachEvent&&o.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=J.test(h.getElementsByClassName),n.getById=ue(function(e){return p.appendChild(e).id=_,!h.getElementsByName||!h.getElementsByName(_).length}),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e)},v=[],g=[],(n.qsa=J.test(h.querySelectorAll))&&(ue(function(e){p.appendChild(e).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+_+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+_+"+*").length||g.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=J.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",W)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),t=J.test(p.compareDocumentPosition),b=t||J.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},x=t?function(e,t){if(e===t)return f=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e===h||e.ownerDocument===E&&b(E,e)?-1:t===h||t.ownerDocument===E&&b(E,t)?1:u?H(u,e)-H(u,t):0:4&i?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,a=[e],s=[t];if(!o||!r)return e===h?-1:t===h?1:o?-1:r?1:u?H(u,e)-H(u,t):0;if(o===r)return de(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[i]===s[i];)i++;return i?de(a[i],s[i]):a[i]===E?-1:s[i]===E?1:0},h):h},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==h&&d(e),n.matchesSelector&&m&&!O[t+" "]&&(!v||!v.test(t))&&(!g||!g.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){O(t,!0)}return se(t,h,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!==h&&d(e),b(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==h&&d(e);var o=i.attrHandle[t.toLowerCase()],r=o&&I.call(i.attrHandle,t.toLowerCase())?o(e,t,!m):void 0;return void 0!==r?r:n.attributes||!m?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(ie,oe)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,i=[],o=0,r=0;if(f=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(x),f){for(;t=e[r++];)t===e[r]&&(o=i.push(r));for(;o--;)e.splice(i[o],1)}return u=null,e},o=se.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=o(t);return n},(i=se.selectors={cacheLength:50,createPseudo:ce,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&G.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var o=se.attr(i,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(q," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var c,u,f,d,h,p,m=r!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,b=!1;if(g){if(r){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?g.firstChild:g.lastChild],a&&y){for(b=(h=(c=(u=(f=(d=g)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===w&&c[1])&&c[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(b=h=0)||p.pop();)if(1===d.nodeType&&++b&&d===t){u[e]=[w,h,b];break}}else if(y&&(b=h=(c=(u=(f=(d=t)[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===w&&c[1]),!1===b)for(;(d=++h&&d&&d[m]||(b=h=0)||p.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&((u=(f=d[_]||(d[_]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[w,b]),d!==t)););return(b-=o)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,t){var n,o=i.pseudos[e]||i.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return o[_]?o(t):o.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce(function(e,n){for(var i,r=o(e,t),a=r.length;a--;)e[i=H(e,r[a])]=!(n[i]=r[a])}):function(e){return o(e,0,n)}):o}},pseudos:{not:ce(function(e){var t=[],n=[],i=s(e.replace(B,"$1"));return i[_]?ce(function(e,t,n,o){for(var r,a=i(e,null,o,[]),s=e.length;s--;)(r=a[s])&&(e[s]=!(t[s]=r))}):function(e,o,r){return t[0]=e,i(t,null,r,n),t[0]=null,!n.pop()}}),has:ce(function(e){return function(t){return se(e,t).length>0}}),contains:ce(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||o(t)).indexOf(e)>-1}}),lang:ce(function(e){return K.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:me(!1),disabled:me(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return $.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ge(function(){return[0]}),last:ge(function(e,t){return[t-1]}),eq:ge(function(e,t,n){return[n<0?n+t:n]}),even:ge(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ge(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ge(function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e}),gt:ge(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=he(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=pe(t);function ye(){}function be(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function _e(e,t,n){var i=t.dir,o=t.next,r=o||i,a=n&&"parentNode"===r,s=T++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,l){var c,u,f,d=[w,s];if(l){for(;t=t[i];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||a)if(u=(f=t[_]||(t[_]={}))[t.uniqueID]||(f[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=u[r])&&c[0]===w&&c[1]===s)return d[2]=c[2];if(u[r]=d,d[2]=e(t,n,l))return!0}return!1}}function Ee(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function we(e,t,n,i,o){for(var r,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(r=e[s])&&(n&&!n(r,i,o)||(a.push(r),c&&t.push(s)));return a}function Te(e,t,n,i,o,r){return i&&!i[_]&&(i=Te(i)),o&&!o[_]&&(o=Te(o,r)),ce(function(r,a,s,l){var c,u,f,d=[],h=[],p=a.length,m=r||function(e,t,n){for(var i=0,o=t.length;i<o;i++)se(e,t[i],n);return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!r&&t?m:we(m,d,e,s,l),v=n?o||(r?e:p||i)?[]:a:g;if(n&&n(g,v,s,l),i)for(c=we(v,h),i(c,[],s,l),u=c.length;u--;)(f=c[u])&&(v[h[u]]=!(g[h[u]]=f));if(r){if(o||e){if(o){for(c=[],u=v.length;u--;)(f=v[u])&&c.push(g[u]=f);o(null,v=[],c,l)}for(u=v.length;u--;)(f=v[u])&&(c=o?H(r,f):d[u])>-1&&(r[c]=!(a[c]=f))}}else v=we(v===a?v.splice(p,v.length):v),o?o(null,a,v,l):L.apply(a,v)})}function Ce(e){for(var t,n,o,r=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],l=a?1:0,u=_e(function(e){return e===t},s,!0),f=_e(function(e){return H(t,e)>-1},s,!0),d=[function(e,n,i){var o=!a&&(i||n!==c)||((t=n).nodeType?u(e,n,i):f(e,n,i));return t=null,o}];l<r;l++)if(n=i.relative[e[l].type])d=[_e(Ee(d),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[_]){for(o=++l;o<r&&!i.relative[e[o].type];o++);return Te(l>1&&Ee(d),l>1&&be(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(B,"$1"),n,l<o&&Ce(e.slice(l,o)),o<r&&Ce(e=e.slice(o)),o<r&&be(e))}d.push(n)}return Ee(d)}return ye.prototype=i.filters=i.pseudos,i.setFilters=new ye,a=se.tokenize=function(e,t){var n,o,r,a,s,l,c,u=S[e+" "];if(u)return t?0:u.slice(0);for(s=e,l=[],c=i.preFilter;s;){for(a in n&&!(o=U.exec(s))||(o&&(s=s.slice(o[0].length)||s),l.push(r=[])),n=!1,(o=V.exec(s))&&(n=o.shift(),r.push({value:n,type:o[0].replace(B," ")}),s=s.slice(n.length)),i.filter)!(o=Q[a].exec(s))||c[a]&&!(o=c[a](o))||(n=o.shift(),r.push({value:n,type:a,matches:o}),s=s.slice(n.length));if(!n)break}return t?s.length:s?se.error(e):S(e,l).slice(0)},s=se.compile=function(e,t){var n,o=[],r=[],s=A[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=Ce(t[n]))[_]?o.push(s):r.push(s);(s=A(e,function(e,t){var n=t.length>0,o=e.length>0,r=function(r,a,s,l,u){var f,p,g,v=0,y="0",b=r&&[],_=[],E=c,T=r||o&&i.find.TAG("*",u),C=w+=null==E?1:Math.random()||.1,S=T.length;for(u&&(c=a===h||a||u);y!==S&&null!=(f=T[y]);y++){if(o&&f){for(p=0,a||f.ownerDocument===h||(d(f),s=!m);g=e[p++];)if(g(f,a||h,s)){l.push(f);break}u&&(w=C)}n&&((f=!g&&f)&&v--,r&&b.push(f))}if(v+=y,n&&y!==v){for(p=0;g=t[p++];)g(b,_,a,s);if(r){if(v>0)for(;y--;)b[y]||_[y]||(_[y]=N.call(l));_=we(_)}L.apply(l,_),u&&!r&&_.length>0&&v+t.length>1&&se.uniqueSort(l)}return u&&(w=C,c=E),b};return n?ce(r):r}(r,o))).selector=e}return s},l=se.select=function(e,t,n,o){var r,l,c,u,f,d="function"==typeof e&&e,h=!o&&a(e=d.selector||e);if(n=n||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&m&&i.relative[l[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(r=Q.needsContext.test(e)?0:l.length;r--&&(c=l[r],!i.relative[u=c.type]);)if((f=i.find[u])&&(o=f(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(r,1),!(e=o.length&&be(l)))return L.apply(n,o),n;break}}return(d||s(e,h))(o,t,!m,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=_.split("").sort(x).join("")===_,n.detectDuplicates=!!f,d(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(h.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),se}(n);T.find=A,T.expr=A.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=A.uniqueSort,T.text=A.getText,T.isXMLDoc=A.isXML,T.contains=A.contains,T.escapeSelector=A.escape;var O=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&T(e).is(n))break;i.push(e)}return i},x=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},I=T.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function k(e,t,n){return y(t)?T.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return f.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<i;t++)if(T.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)T.find(e,o[t],n);return i>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(k(this,e||[],!1))},not:function(e){return this.pushStack(k(this,e||[],!0))},is:function(e){return!!k(this,"string"==typeof e&&I.test(e)?T(e):e||[],!1).length}});var L,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:P.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:a,!0)),N.test(i[1])&&T.isPlainObject(t))for(i in t)y(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=a.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,L=T(a);var H=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function M(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],a="string"!=typeof e&&T(e);if(!I.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?T.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?f.call(T(e),this[0]):f.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return O(e,"parentNode")},parentsUntil:function(e,t,n){return O(e,"parentNode",n)},next:function(e){return M(e,"nextSibling")},prev:function(e){return M(e,"previousSibling")},nextAll:function(e){return O(e,"nextSibling")},prevAll:function(e){return O(e,"previousSibling")},nextUntil:function(e,t,n){return O(e,"nextSibling",n)},prevUntil:function(e,t,n){return O(e,"previousSibling",n)},siblings:function(e){return x((e.parentNode||{}).firstChild,e)},children:function(e){return x(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(D(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,i){var o=T.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=T.filter(i,o)),this.length>1&&(R[e]||T.uniqueSort(o),H.test(e)&&o.reverse()),this.pushStack(o)}});var j=/[^\x20\t\r\n\f]+/g;function F(e){return e}function W(e){throw e}function q(e,t,n,i){var o;try{e&&y(o=e.promise)?o.call(e).done(t).fail(n):e&&y(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(j)||[],function(e,n){t[n]=!0}),t}(e):T.extend({},e);var t,n,i,o,r=[],a=[],s=-1,l=function(){for(o=o||e.once,i=t=!0;a.length;s=-1)for(n=a.shift();++s<r.length;)!1===r[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=r.length,n=!1);e.memory||(n=!1),t=!1,o&&(r=n?[]:"")},c={add:function(){return r&&(n&&!t&&(s=r.length-1,a.push(n)),function t(n){T.each(n,function(n,i){y(i)?e.unique&&c.has(i)||r.push(i):i&&i.length&&"string"!==w(i)&&t(i)})}(arguments),n&&!t&&l()),this},remove:function(){return T.each(arguments,function(e,t){for(var n;(n=T.inArray(t,r,n))>-1;)r.splice(n,1),n<=s&&s--}),this},has:function(e){return e?T.inArray(e,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return o=a=[],r=n="",this},disabled:function(){return!r},lock:function(){return o=a=[],n||t||(r=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return T.Deferred(function(n){T.each(t,function(t,i){var o=y(e[i[4]])&&e[i[4]];r[i[1]](function(){var e=o&&o.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(e,i,o){var r=0;function a(e,t,i,o){return function(){var s=this,l=arguments,c=function(){var n,c;if(!(e<r)){if((n=i.apply(s,l))===t.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,y(c)?o?c.call(n,a(r,t,F,o),a(r,t,W,o)):(r++,c.call(n,a(r,t,F,o),a(r,t,W,o),a(r,t,F,t.notifyWith))):(i!==F&&(s=void 0,l=[n]),(o||t.resolveWith)(s,l))}},u=o?c:function(){try{c()}catch(n){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(n,u.stackTrace),e+1>=r&&(i!==W&&(s=void 0,l=[n]),t.rejectWith(s,l))}};e?u():(T.Deferred.getStackHook&&(u.stackTrace=T.Deferred.getStackHook()),n.setTimeout(u))}}return T.Deferred(function(n){t[0][3].add(a(0,n,y(o)?o:F,n.notifyWith)),t[1][3].add(a(0,n,y(e)?e:F)),t[2][3].add(a(0,n,y(i)?i:W))}).promise()},promise:function(e){return null!=e?T.extend(e,o):o}},r={};return T.each(t,function(e,n){var a=n[2],s=n[5];o[n[1]]=a.add,s&&a.add(function(){i=s},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(n[3].fire),r[n[0]]=function(){return r[n[0]+"With"](this===r?void 0:this,arguments),this},r[n[0]+"With"]=a.fireWith}),o.promise(r),e&&e.call(r,r),r},when:function(e){var t=arguments.length,n=t,i=Array(n),o=l.call(arguments),r=T.Deferred(),a=function(e){return function(n){i[e]=this,o[e]=arguments.length>1?l.call(arguments):n,--t||r.resolveWith(i,o)}};if(t<=1&&(q(e,r.done(a(n)).resolve,r.reject,!t),"pending"===r.state()||y(o[n]&&o[n].then)))return r.then();for(;n--;)q(o[n],a(n),r.reject);return r.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&B.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){n.setTimeout(function(){throw e})};var U=T.Deferred();function V(){a.removeEventListener("DOMContentLoaded",V),n.removeEventListener("load",V),T.ready()}T.fn.ready=function(e){return U.then(e).catch(function(e){T.readyException(e)}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||U.resolveWith(a,[T]))}}),T.ready.then=U.then,"complete"===a.readyState||"loading"!==a.readyState&&!a.documentElement.doScroll?n.setTimeout(T.ready):(a.addEventListener("DOMContentLoaded",V),n.addEventListener("load",V));var z=function(e,t,n,i,o,r,a){var s=0,l=e.length,c=null==n;if("object"===w(n))for(s in o=!0,n)z(e,t,s,n[s],!0,r,a);else if(void 0!==i&&(o=!0,y(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(T(e),n)})),t))for(;s<l;s++)t(e[s],n,a?i:i.call(e[s],s,t(e[s],n)));return o?e:c?t.call(e):l?t(e[0],n):r},G=/^-ms-/,K=/-([a-z])/g;function Q(e,t){return t.toUpperCase()}function X(e){return e.replace(G,"ms-").replace(K,Q)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=T.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[X(t)]=n;else for(i in t)o[X(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in i?[t]:t.match(j)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||T.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var J=new Y,Z=new Y,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}Z.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,i,o,r=this[0],a=r&&r.attributes;if(void 0===e){if(this.length&&(o=Z.get(r),1===r.nodeType&&!J.get(r,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(i=a[n].name).indexOf("data-")&&(i=X(i.slice(5)),ne(r,i,o[i]));J.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){Z.set(this,e)}):z(this,function(t){var n;if(r&&void 0===t)return void 0!==(n=Z.get(r,e))?n:void 0!==(n=ne(r,e))?n:void 0;this.each(function(){Z.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Z.remove(this,e)})}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=J.get(e,t),n&&(!i||Array.isArray(n)?i=J.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,o=n.shift(),r=T._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,function(){T.dequeue(e,t)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:T.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=T.Deferred(),r=this,a=this.length,s=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=J.get(r[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(s));return s(),o.promise(t)}});var ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,oe=new RegExp("^(?:([+-])=|)("+ie+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ae=a.documentElement,se=function(e){return T.contains(e.ownerDocument,e)},le={composed:!0};ae.getRootNode&&(se=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(le)===e.ownerDocument});var ce=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&se(e)&&"none"===T.css(e,"display")},ue=function(e,t,n,i){var o,r,a={};for(r in t)a[r]=e.style[r],e.style[r]=t[r];for(r in o=n.apply(e,i||[]),t)e.style[r]=a[r];return o};function fe(e,t,n,i){var o,r,a=20,s=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=s(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),u=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+l)&&oe.exec(T.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;a--;)T.style(e,t,u+c),(1-r)*(1-(r=s()/l||.5))<=0&&(a=0),u/=r;u*=2,T.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,o=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=o)),o}var de={};function he(e){var t,n=e.ownerDocument,i=e.nodeName,o=de[i];return o||(t=n.body.appendChild(n.createElement(i)),o=T.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),de[i]=o,o)}function pe(e,t){for(var n,i,o=[],r=0,a=e.length;r<a;r++)(i=e[r]).style&&(n=i.style.display,t?("none"===n&&(o[r]=J.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&ce(i)&&(o[r]=he(i))):"none"!==n&&(o[r]="none",J.set(i,"display",n)));for(r=0;r<a;r++)null!=o[r]&&(e[r].style.display=o[r]);return e}T.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ce(this)?T(this).show():T(this).hide()})}});var me=/^(?:checkbox|radio)$/i,ge=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ve=/^$|^module$|\/(?:java|ecma)script/i,ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function be(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?T.merge([e],n):n}function _e(e,t){for(var n=0,i=e.length;n<i;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}ye.optgroup=ye.option,ye.tbody=ye.tfoot=ye.colgroup=ye.caption=ye.thead,ye.th=ye.td;var Ee=/<|&#?\w+;/;function we(e,t,n,i,o){for(var r,a,s,l,c,u,f=t.createDocumentFragment(),d=[],h=0,p=e.length;h<p;h++)if((r=e[h])||0===r)if("object"===w(r))T.merge(d,r.nodeType?[r]:r);else if(Ee.test(r)){for(a=a||f.appendChild(t.createElement("div")),s=(ge.exec(r)||["",""])[1].toLowerCase(),l=ye[s]||ye._default,a.innerHTML=l[1]+T.htmlPrefilter(r)+l[2],u=l[0];u--;)a=a.lastChild;T.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(r));for(f.textContent="",h=0;r=d[h++];)if(i&&T.inArray(r,i)>-1)o&&o.push(r);else if(c=se(r),a=be(f.appendChild(r),"script"),c&&_e(a),n)for(u=0;r=a[u++];)ve.test(r.type||"")&&n.push(r);return f}!function(){var e=a.createDocumentFragment().appendChild(a.createElement("div")),t=a.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),v.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Se=/^([^.]*)(?:\.(.+)|)/;function Ae(){return!0}function Oe(){return!1}function xe(e,t){return e===function(){try{return a.activeElement}catch(e){}}()==("focus"===t)}function Ie(e,t,n,i,o,r){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(i=i||n,n=void 0),t)Ie(e,s,n,i,t[s],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=Oe;else if(!o)return e;return 1===r&&(a=o,(o=function(e){return T().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=T.guid++)),e.each(function(){T.event.add(this,t,o,i,n)})}function De(e,t,n){n?(J.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var i,o,r=J.get(this,t);if(1&e.isTrigger&&this[t]){if(r.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=l.call(arguments),J.set(this,t,r),i=n(this,t),this[t](),r!==(o=J.get(this,t))||i?J.set(this,t,!1):o={},r!==o)return e.stopImmediatePropagation(),e.preventDefault(),o.value}else r.length&&(J.set(this,t,{value:T.event.trigger(T.extend(r[0],T.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===J.get(e,t)&&T.event.add(e,t,Ae)}T.event={global:{},add:function(e,t,n,i,o){var r,a,s,l,c,u,f,d,h,p,m,g=J.get(e);if(g)for(n.handler&&(n=(r=n).handler,o=r.selector),o&&T.find.matchesSelector(ae,o),n.guid||(n.guid=T.guid++),(l=g.events)||(l=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(j)||[""]).length;c--;)h=m=(s=Se.exec(t[c])||[])[1],p=(s[2]||"").split(".").sort(),h&&(f=T.event.special[h]||{},h=(o?f.delegateType:f.bindType)||h,f=T.event.special[h]||{},u=T.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&T.expr.match.needsContext.test(o),namespace:p.join(".")},r),(d=l[h])||((d=l[h]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,i,p,a)||e.addEventListener&&e.addEventListener(h,a)),f.add&&(f.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,u):d.push(u),T.event.global[h]=!0)},remove:function(e,t,n,i,o){var r,a,s,l,c,u,f,d,h,p,m,g=J.hasData(e)&&J.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(j)||[""]).length;c--;)if(h=m=(s=Se.exec(t[c])||[])[1],p=(s[2]||"").split(".").sort(),h){for(f=T.event.special[h]||{},d=l[h=(i?f.delegateType:f.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=r=d.length;r--;)u=d[r],!o&&m!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(r,1),u.selector&&d.delegateCount--,f.remove&&f.remove.call(e,u));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,p,g.handle)||T.removeEvent(e,h,g.handle),delete l[h])}else for(h in l)T.event.remove(e,h+t[c],n,i,!0);T.isEmptyObject(l)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,a,s=T.event.fix(e),l=new Array(arguments.length),c=(J.get(this,"events")||{})[s.type]||[],u=T.event.special[s.type]||{};for(l[0]=s,t=1;t<arguments.length;t++)l[t]=arguments[t];if(s.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,s)){for(a=T.event.handlers.call(this,s,c),t=0;(o=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!1!==r.namespace&&!s.rnamespace.test(r.namespace)||(s.handleObj=r,s.data=r.data,void 0!==(i=((T.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))&&!1===(s.result=i)&&(s.preventDefault(),s.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,i,o,r,a,s=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],a={},n=0;n<l;n++)void 0===a[o=(i=t[n]).selector+" "]&&(a[o]=i.needsContext?T(o,this).index(c)>-1:T.find(o,this,null,[c]).length),a[o]&&r.push(i);r.length&&s.push({elem:c,handlers:r})}return c=this,l<t.length&&s.push({elem:c,handlers:t.slice(l)}),s},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return me.test(t.type)&&t.click&&D(t,"input")&&De(t,"click",Ae),!1},trigger:function(e){var t=this||e;return me.test(t.type)&&t.click&&D(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return me.test(t.type)&&t.click&&D(t,"input")&&J.get(t,"click")||D(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ae:Oe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:Oe,isPropagationStopped:Oe,isImmediatePropagationStopped:Oe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ae,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ae,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ae,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){T.event.special[e]={setup:function(){return De(this,e,xe),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,o=e.handleObj;return i&&(i===this||T.contains(this,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),T.fn.extend({on:function(e,t,n,i){return Ie(this,e,t,n,i)},one:function(e,t,n,i){return Ie(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Oe),this.each(function(){T.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ke=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function He(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function Re(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Me(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function je(e,t){var n,i,o,r,a,s,l,c;if(1===t.nodeType){if(J.hasData(e)&&(r=J.access(e),a=J.set(t,r),c=r.events))for(o in delete a.handle,a.events={},c)for(n=0,i=c[o].length;n<i;n++)T.event.add(t,o,c[o][n]);Z.hasData(e)&&(s=Z.access(e),l=T.extend({},s),Z.set(t,l))}}function Fe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&me.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function We(e,t,n,i){t=c.apply([],t);var o,r,a,s,l,u,f=0,d=e.length,h=d-1,p=t[0],m=y(p);if(m||d>1&&"string"==typeof p&&!v.checkClone&&Le.test(p))return e.each(function(o){var r=e.eq(o);m&&(t[0]=p.call(this,o,r.html())),We(r,t,n,i)});if(d&&(r=(o=we(t,e[0].ownerDocument,!1,e,i)).firstChild,1===o.childNodes.length&&(o=r),r||i)){for(s=(a=T.map(be(o,"script"),Re)).length;f<d;f++)l=o,f!==h&&(l=T.clone(l,!0,!0),s&&T.merge(a,be(l,"script"))),n.call(e[f],l,f);if(s)for(u=a[a.length-1].ownerDocument,T.map(a,Me),f=0;f<s;f++)l=a[f],ve.test(l.type||"")&&!J.access(l,"globalEval")&&T.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")}):E(l.textContent.replace(Pe,""),l,u))}return e}function qe(e,t,n){for(var i,o=t?T.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||T.cleanData(be(i)),i.parentNode&&(n&&se(i)&&_e(be(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var i,o,r,a,s=e.cloneNode(!0),l=se(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(a=be(s),i=0,o=(r=be(e)).length;i<o;i++)Fe(r[i],a[i]);if(t)if(n)for(r=r||be(e),a=a||be(s),i=0,o=r.length;i<o;i++)je(r[i],a[i]);else je(e,s);return(a=be(s,"script")).length>0&&_e(a,!l&&be(e,"script")),s},cleanData:function(e){for(var t,n,i,o=T.event.special,r=0;void 0!==(n=e[r]);r++)if($(n)){if(t=n[J.expando]){if(t.events)for(i in t.events)o[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);n[J.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),T.fn.extend({detach:function(e){return qe(this,e,!0)},remove:function(e){return qe(this,e)},text:function(e){return z(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return We(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||He(this,e).appendChild(e)})},prepend:function(){return We(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=He(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return We(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return We(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(be(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ye[(ge.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(be(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return We(this,arguments,function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(be(this)),n&&n.replaceChild(t,this))},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,i=[],o=T(e),r=o.length-1,a=0;a<=r;a++)n=a===r?this:this.clone(!0),T(o[a])[t](n),u.apply(i,n.get());return this.pushStack(i)}});var Be=new RegExp("^("+ie+")(?!px)[a-z%]+$","i"),Ue=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Ve=new RegExp(re.join("|"),"i");function ze(e,t,n){var i,o,r,a,s=e.style;return(n=n||Ue(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||se(e)||(a=T.style(e,t)),!v.pixelBoxStyles()&&Be.test(a)&&Ve.test(t)&&(i=s.width,o=s.minWidth,r=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=o,s.maxWidth=r)),void 0!==a?a+"":a}function Ge(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ae.appendChild(c).appendChild(u);var e=n.getComputedStyle(u);i="1%"!==e.top,l=12===t(e.marginLeft),u.style.right="60%",s=36===t(e.right),o=36===t(e.width),u.style.position="absolute",r=12===t(u.offsetWidth/3),ae.removeChild(c),u=null}}function t(e){return Math.round(parseFloat(e))}var i,o,r,s,l,c=a.createElement("div"),u=a.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===u.style.backgroundClip,T.extend(v,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),r}}))}();var Ke=["Webkit","Moz","ms"],Qe=a.createElement("div").style,Xe={};function $e(e){var t=T.cssProps[e]||Xe[e];return t||(e in Qe?e:Xe[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ke.length;n--;)if((e=Ke[n]+t)in Qe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Je=/^--/,Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"};function tt(e,t,n){var i=oe.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function nt(e,t,n,i,o,r){var a="width"===t?1:0,s=0,l=0;if(n===(i?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=T.css(e,n+re[a],!0,o)),i?("content"===n&&(l-=T.css(e,"padding"+re[a],!0,o)),"margin"!==n&&(l-=T.css(e,"border"+re[a]+"Width",!0,o))):(l+=T.css(e,"padding"+re[a],!0,o),"padding"!==n?l+=T.css(e,"border"+re[a]+"Width",!0,o):s+=T.css(e,"border"+re[a]+"Width",!0,o));return!i&&r>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-s-.5))||0),l}function it(e,t,n){var i=Ue(e),o=(!v.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,i),r=o,a=ze(e,t,i),s="offset"+t[0].toUpperCase()+t.slice(1);if(Be.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&o||"auto"===a||!parseFloat(a)&&"inline"===T.css(e,"display",!1,i))&&e.getClientRects().length&&(o="border-box"===T.css(e,"boxSizing",!1,i),(r=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+nt(e,t,n||(o?"border":"content"),r,i,a)+"px"}function ot(e,t,n,i,o){return new ot.prototype.init(e,t,n,i,o)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,a,s=X(t),l=Je.test(t),c=e.style;if(l||(t=$e(s)),a=T.cssHooks[t]||T.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(o=a.get(e,!1,i))?o:c[t];"string"===(r=typeof n)&&(o=oe.exec(n))&&o[1]&&(n=fe(e,t,o),r="number"),null!=n&&n==n&&("number"!==r||l||(n+=o&&o[3]||(T.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var o,r,a,s=X(t);return Je.test(t)||(t=$e(s)),(a=T.cssHooks[t]||T.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ze(e,t,i)),"normal"===o&&t in et&&(o=et[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),T.each(["height","width"],function(e,t){T.cssHooks[t]={get:function(e,n,i){if(n)return!Ye.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?it(e,t,i):ue(e,Ze,function(){return it(e,t,i)})},set:function(e,n,i){var o,r=Ue(e),a=!v.scrollboxSize()&&"absolute"===r.position,s=(a||i)&&"border-box"===T.css(e,"boxSizing",!1,r),l=i?nt(e,t,i,s,r):0;return s&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(r[t])-nt(e,t,"border",!1,r)-.5)),l&&(o=oe.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),tt(0,n,l)}}}),T.cssHooks.marginLeft=Ge(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),T.each({margin:"",padding:"",border:"Width"},function(e,t){T.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[e+re[i]+t]=r[i]||r[i-2]||r[0];return o}},"margin"!==e&&(T.cssHooks[e+t].set=tt)}),T.fn.extend({css:function(e,t){return z(this,function(e,t,n){var i,o,r={},a=0;if(Array.isArray(t)){for(i=Ue(e),o=t.length;a<o;a++)r[t[a]]=T.css(e,t[a],!1,i);return r}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,arguments.length>1)}}),T.Tween=ot,ot.prototype={constructor:ot,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(T.cssNumber[n]?"":"px")},cur:function(){var e=ot.propHooks[this.prop];return e&&e.get?e.get(this):ot.propHooks._default.get(this)},run:function(e){var t,n=ot.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[$e(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=ot.prototype.init,T.fx.step={};var rt,at,st=/^(?:toggle|show|hide)$/,lt=/queueHooks$/;function ct(){at&&(!1===a.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ct):n.setTimeout(ct,T.fx.interval),T.fx.tick())}function ut(){return n.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=re[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function dt(e,t,n){for(var i,o=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),r=0,a=o.length;r<a;r++)if(i=o[r].call(n,t,e))return i}function ht(e,t,n){var i,o,r=0,a=ht.prefilters.length,s=T.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=rt||ut(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),r=0,a=c.tweens.length;r<a;r++)c.tweens[r].run(i);return s.notifyWith(e,[c,i,n]),i<1&&a?n:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:rt||ut(),duration:n.duration,tweens:[],createTween:function(t,n){var i=T.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,i,o,r,a;for(n in e)if(o=t[i=X(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(a=T.cssHooks[i])&&"expand"in a)for(n in r=a.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}(u,c.opts.specialEasing);r<a;r++)if(i=ht.prefilters[r].call(c,e,u,c.opts))return y(i.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return T.map(u,dt,c),y(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return fe(n.elem,e,oe.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(j);for(var n,i=0,o=e.length;i<o;i++)n=e[i],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,o,r,a,s,l,c,u,f="width"in t||"height"in t,d=this,h={},p=e.style,m=e.nodeType&&ce(e),g=J.get(e,"fxshow");for(i in n.queue||(null==(a=T._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,T.queue(e,"fx").length||a.empty.fire()})})),t)if(o=t[i],st.test(o)){if(delete t[i],r=r||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;m=!0}h[i]=g&&g[i]||T.style(e,i)}if((l=!T.isEmptyObject(t))||!T.isEmptyObject(h))for(i in f&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=g&&g.display)&&(c=J.get(e,"display")),"none"===(u=T.css(e,"display"))&&(c?u=c:(pe([e],!0),c=e.style.display||c,u=T.css(e,"display"),pe([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(e,"float")&&(l||(d.done(function(){p.display=c}),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),l=!1,h)l||(g?"hidden"in g&&(m=g.hidden):g=J.access(e,"fxshow",{display:c}),r&&(g.hidden=!m),m&&pe([e],!0),d.done(function(){for(i in m||pe([e]),J.remove(e,"fxshow"),h)T.style(e,i,h[i])})),l=dt(m?g[i]:0,i,d),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ce).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=T.isEmptyObject(e),r=T.speed(t,n,i),a=function(){var t=ht(this,T.extend({},e),r);(o||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||!1===r.queue?this.each(a):this.queue(r.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=T.timers,a=J.get(this);if(o)a[o]&&a[o].stop&&i(a[o]);else for(o in a)a[o]&&a[o].stop&&lt.test(o)&&i(a[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||T.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=T.timers,a=i?i.length:0;for(n.finish=!0,T.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),T.each(["toggle","show","hide"],function(e,t){var n=T.fn[t];T.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ft(t,!0),e,i,o)}}),T.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){T.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),rt=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){at||(at=!0,ct())},T.fx.stop=function(){at=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,i){var o=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(o)}})},function(){var e=a.createElement("input"),t=a.createElement("select").appendChild(a.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=t.selected,(e=a.createElement("input")).value="t",e.type="radio",v.radioValue="t"===e.value}();var pt,mt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return z(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?T.prop(e,t,n):(1===r&&T.isXMLDoc(e)||(o=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=T.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(j);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){var n=mt[t]||T.find.attr;mt[t]=function(e,t,i){var o,r,a=t.toLowerCase();return i||(r=mt[a],mt[a]=o,o=null!=n(e,t,i)?a:null,mt[a]=r),o}});var gt=/^(?:input|select|textarea|button)$/i,vt=/^(?:a|area)$/i;function yt(e){return(e.match(j)||[]).join(" ")}function bt(e){return e.getAttribute&&e.getAttribute("class")||""}function _t(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(j)||[]}T.fn.extend({prop:function(e,t){return z(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&T.isXMLDoc(e)||(t=T.propFix[t]||t,o=T.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||vt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,i,o,r,a,s,l=0;if(y(e))return this.each(function(t){T(this).addClass(e.call(this,t,bt(this)))});if((t=_t(e)).length)for(;n=this[l++];)if(o=bt(n),i=1===n.nodeType&&" "+yt(o)+" "){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(s=yt(i))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,i,o,r,a,s,l=0;if(y(e))return this.each(function(t){T(this).removeClass(e.call(this,t,bt(this)))});if(!arguments.length)return this.attr("class","");if((t=_t(e)).length)for(;n=this[l++];)if(o=bt(n),i=1===n.nodeType&&" "+yt(o)+" "){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");o!==(s=yt(i))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):y(e)?this.each(function(n){T(this).toggleClass(e.call(this,n,bt(this),t),t)}):this.each(function(){var t,o,r,a;if(i)for(o=0,r=T(this),a=_t(e);t=a[o++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||((t=bt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+yt(bt(n))+" ").indexOf(t)>-1)return!0;return!1}});var Et=/\r/g;T.fn.extend({val:function(e){var t,n,i,o=this[0];return arguments.length?(i=y(e),this.each(function(n){var o;1===this.nodeType&&(null==(o=i?e.call(this,n,T(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=T.map(o,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=T.valHooks[o.type]||T.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(Et,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:yt(T.text(e))}},select:{get:function(e){var t,n,i,o=e.options,r=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?r+1:o.length;for(i=r<0?l:a?r:0;i<l;i++)if(((n=o[i]).selected||i===r)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=T.makeArray(t),a=o.length;a--;)((i=o[a]).selected=T.inArray(T.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},v.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in n;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,i,o){var r,s,l,c,u,f,d,h,m=[i||a],g=p.call(e,"type")?e.type:e,v=p.call(e,"namespace")?e.namespace.split("."):[];if(s=h=l=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!wt.test(g+T.event.triggered)&&(g.indexOf(".")>-1&&(g=(v=g.split(".")).shift(),v.sort()),u=g.indexOf(":")<0&&"on"+g,(e=e[T.expando]?e:new T.Event(g,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=v.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:T.makeArray(t,[e]),d=T.event.special[g]||{},o||!d.trigger||!1!==d.trigger.apply(i,t))){if(!o&&!d.noBubble&&!b(i)){for(c=d.delegateType||g,wt.test(c+g)||(s=s.parentNode);s;s=s.parentNode)m.push(s),l=s;l===(i.ownerDocument||a)&&m.push(l.defaultView||l.parentWindow||n)}for(r=0;(s=m[r++])&&!e.isPropagationStopped();)h=s,e.type=r>1?c:d.bindType||g,(f=(J.get(s,"events")||{})[e.type]&&J.get(s,"handle"))&&f.apply(s,t),(f=u&&s[u])&&f.apply&&$(s)&&(e.result=f.apply(s,t),!1===e.result&&e.preventDefault());return e.type=g,o||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(m.pop(),t)||!$(i)||u&&y(i[g])&&!b(i)&&((l=i[u])&&(i[u]=null),T.event.triggered=g,e.isPropagationStopped()&&h.addEventListener(g,Tt),i[g](),e.isPropagationStopped()&&h.removeEventListener(g,Tt),T.event.triggered=void 0,l&&(i[u]=l)),e.result}},simulate:function(e,t,n){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(i,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),v.focusin||T.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=J.access(i,t);o||i.addEventListener(e,n,!0),J.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=J.access(i,t)-1;o?J.access(i,t,o):(i.removeEventListener(e,n,!0),J.remove(i,t))}}});var Ct=n.location,St=Date.now(),At=/\?/;T.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+e),t};var Ot=/\[\]$/,xt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;function Nt(e,t,n,i){var o;if(Array.isArray(t))T.each(t,function(t,o){n||Ot.test(e)?i(e,o):Nt(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==w(t))i(e,t);else for(o in t)Nt(e+"["+o+"]",t[o],n,i)}T.param=function(e,t){var n,i=[],o=function(e,t){var n=y(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){o(this.name,this.value)});else for(n in e)Nt(n,e[n],t,o);return i.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Dt.test(this.nodeName)&&!It.test(e)&&(this.checked||!me.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(xt,"\r\n")}}):{name:t.name,value:n.replace(xt,"\r\n")}}).get()}});var kt=/%20/g,Lt=/#.*$/,Pt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,jt={},Ft={},Wt="*/".concat("*"),qt=a.createElement("a");function Bt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(j)||[];if(y(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Ut(e,t,n,i){var o={},r=e===Ft;function a(s){var l;return o[s]=!0,T.each(e[s]||[],function(e,s){var c=s(t,n,i);return"string"!=typeof c||r||o[c]?r?!(l=c):void 0:(t.dataTypes.unshift(c),a(c),!1)}),l}return a(t.dataTypes[0])||!o["*"]&&a("*")}function Vt(e,t){var n,i,o=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&T.extend(!0,e,i),e}qt.href=Ct.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Vt(Vt(e,T.ajaxSettings),t):Vt(T.ajaxSettings,e)},ajaxPrefilter:Bt(jt),ajaxTransport:Bt(Ft),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,o,r,s,l,c,u,f,d,h,p=T.ajaxSetup({},t),m=p.context||p,g=p.context&&(m.nodeType||m.jquery)?T(m):T.event,v=T.Deferred(),y=T.Callbacks("once memory"),b=p.statusCode||{},_={},E={},w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(u){if(!s)for(s={};t=Ht.exec(r);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return u?r:null},setRequestHeader:function(e,t){return null==u&&(e=E[e.toLowerCase()]=E[e.toLowerCase()]||e,_[e]=t),this},overrideMimeType:function(e){return null==u&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(u)C.always(e[C.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||w;return i&&i.abort(t),S(0,t),this}};if(v.promise(C),p.url=((e||p.url||Ct.href)+"").replace(Mt,Ct.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(j)||[""],null==p.crossDomain){c=a.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=qt.protocol+"//"+qt.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),Ut(jt,p,t,C),u)return C;for(d in(f=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Rt.test(p.type),o=p.url.replace(Lt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(kt,"+")):(h=p.url.slice(o.length),p.data&&(p.processData||"string"==typeof p.data)&&(o+=(At.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(o=o.replace(Pt,"$1"),h=(At.test(o)?"&":"?")+"_="+St+++h),p.url=o+h),p.ifModified&&(T.lastModified[o]&&C.setRequestHeader("If-Modified-Since",T.lastModified[o]),T.etag[o]&&C.setRequestHeader("If-None-Match",T.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Wt+"; q=0.01":""):p.accepts["*"]),p.headers)C.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(!1===p.beforeSend.call(m,C,p)||u))return C.abort();if(w="abort",y.add(p.complete),C.done(p.success),C.fail(p.error),i=Ut(Ft,p,t,C)){if(C.readyState=1,f&&g.trigger("ajaxSend",[C,p]),u)return C;p.async&&p.timeout>0&&(l=n.setTimeout(function(){C.abort("timeout")},p.timeout));try{u=!1,i.send(_,S)}catch(e){if(u)throw e;S(-1,e)}}else S(-1,"No Transport");function S(e,t,a,s){var c,d,h,_,E,w=t;u||(u=!0,l&&n.clearTimeout(l),i=void 0,r=s||"",C.readyState=e>0?4:0,c=e>=200&&e<300||304===e,a&&(_=function(e,t,n){for(var i,o,r,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in s)if(s[o]&&s[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}a||(a=o)}r=r||a}if(r)return r!==l[0]&&l.unshift(r),n[r]}(p,C,a)),_=function(e,t,n,i){var o,r,a,s,l,c={},u=e.dataTypes.slice();if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(r=u.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=u.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(a=c[l+" "+r]||c["* "+r]))for(o in c)if((s=o.split(" "))[1]===r&&(a=c[l+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[o]:!0!==c[o]&&(r=s[0],u.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(p,_,C,c),c?(p.ifModified&&((E=C.getResponseHeader("Last-Modified"))&&(T.lastModified[o]=E),(E=C.getResponseHeader("etag"))&&(T.etag[o]=E)),204===e||"HEAD"===p.type?w="nocontent":304===e?w="notmodified":(w=_.state,d=_.data,c=!(h=_.error))):(h=w,!e&&w||(w="error",e<0&&(e=0))),C.status=e,C.statusText=(t||w)+"",c?v.resolveWith(m,[d,w,C]):v.rejectWith(m,[C,w,h]),C.statusCode(b),b=void 0,f&&g.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?d:h]),y.fireWith(m,[C,w]),f&&(g.trigger("ajaxComplete",[C,p]),--T.active||T.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,i,o){return y(n)&&(o=o||i,i=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:o,data:n,success:i},T.isPlainObject(e)&&e))}}),T._evalUrl=function(e,t){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return y(e)?this.each(function(t){T(this).wrapInner(e.call(this,t))}):this.each(function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=y(e);return this.each(function(n){T(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var zt={0:200,1223:204},Gt=T.ajaxSettings.xhr();v.cors=!!Gt&&"withCredentials"in Gt,v.ajax=Gt=!!Gt,T.ajaxTransport(function(e){var t,i;if(v.cors||Gt&&!e.crossDomain)return{send:function(o,r){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)s.setRequestHeader(a,o[a]);t=function(e){return function(){t&&(t=i=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?r(0,"error"):r(s.status,s.statusText):r(zt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),i=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=i:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){t&&i()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),T.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),T.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,o){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),a.head.appendChild(t[0])},abort:function(){n&&n()}}});var Kt=[],Qt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||T.expando+"_"+St++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",function(e,t,i){var o,r,a,s=!1!==e.jsonp&&(Qt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Qt,"$1"+o):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return a||T.error(o+" was not called"),a[0]},e.dataTypes[0]="json",r=n[o],n[o]=function(){a=arguments},i.always(function(){void 0===r?T(n).removeProp(o):n[o]=r,e[o]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(o)),a&&y(r)&&r(a[0]),a=r=void 0}),"script"}),v.createHTMLDocument=function(){var e=a.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((i=(t=a.implementation.createHTMLDocument("")).createElement("base")).href=a.location.href,t.head.appendChild(i)):t=a),o=N.exec(e),r=!n&&[],o?[t.createElement(o[1])]:(o=we([e],t,r),r&&r.length&&T(r).remove(),T.merge([],o.childNodes)));var i,o,r},T.fn.load=function(e,t,n){var i,o,r,a=this,s=e.indexOf(" ");return s>-1&&(i=yt(e.slice(s)),e=e.slice(0,s)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&T.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,a.html(i?T("<div>").append(T.parseHTML(e)).find(i):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(e,t,n){var i,o,r,a,s,l,c=T.css(e,"position"),u=T(e),f={};"static"===c&&(e.style.position="relative"),s=u.offset(),r=T.css(e,"top"),l=T.css(e,"left"),("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1?(a=(i=u.position()).top,o=i.left):(a=parseFloat(r)||0,o=parseFloat(l)||0),y(t)&&(t=t.call(e,n,T.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):u.css(f)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===T.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),o.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-T.css(i,"marginTop",!0),left:t.left-o.left-T.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||ae})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;T.fn[e]=function(i){return z(this,function(e,i,o){var r;if(b(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===o)return r?r[t]:e[i];r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o},e,i,arguments.length)}}),T.each(["top","left"],function(e,t){T.cssHooks[t]=Ge(v.pixelPosition,function(e,n){if(n)return n=ze(e,t),Be.test(n)?T(e).position()[t]+"px":n})}),T.each({Height:"height",Width:"width"},function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){T.fn[i]=function(o,r){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(!0===o||!0===r?"margin":"border");return z(this,function(t,n,o){var r;return b(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?T.css(t,n,s):T.style(t,n,o,s)},t,a?o:void 0,a)}})}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),T.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),T.proxy=function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return i=l.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(l.call(arguments)))}).guid=e.guid=e.guid||T.guid++,o},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=D,T.isFunction=y,T.isWindow=b,T.camelCase=X,T.type=w,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},void 0===(i=function(){return T}.apply(t,[]))||(e.exports=i);var Xt=n.jQuery,$t=n.$;return T.noConflict=function(e){return n.$===T&&(n.$=$t),e&&n.jQuery===T&&(n.jQuery=Xt),T},o||(n.jQuery=n.$=T),T})},function(e,t,n){
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var s="transitionend";function l(e){return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function c(e){var n=this,i=!1;return t(this).one(u.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||u.triggerTransitionEnd(n)},e),this}var u={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var n=t(e).css("transition-duration"),i=t(e).css("transition-delay"),o=parseFloat(n),r=parseFloat(i);return o||r?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(s)},supportsTransitionEnd:function(){return Boolean(s)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],a=r&&u.isElement(r)?"element":l(r);if(!new RegExp(o).test(a))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u.findShadowRoot(e.parentNode):null}};t.fn.emulateTransitionEnd=c,t.event.special[u.TRANSITION_END]={bindType:s,delegateType:s,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var f=t.fn.alert,d={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},h={ALERT:"alert",FADE:"fade",SHOW:"show"},p=function(){function e(e){this._element=e}var n=e.prototype;return n.close=function(e){var t=this._element;e&&(t=this._getRootElement(e));var n=this._triggerCloseEvent(t);n.isDefaultPrevented()||this._removeElement(t)},n.dispose=function(){t.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(e){var n=u.getSelectorFromElement(e),i=!1;return n&&(i=document.querySelector(n)),i||(i=t(e).closest("."+h.ALERT)[0]),i},n._triggerCloseEvent=function(e){var n=t.Event(d.CLOSE);return t(e).trigger(n),n},n._removeElement=function(e){var n=this;if(t(e).removeClass(h.SHOW),t(e).hasClass(h.FADE)){var i=u.getTransitionDurationFromElement(e);t(e).one(u.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(i)}else this._destroyElement(e)},n._destroyElement=function(e){t(e).detach().trigger(d.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||(o=new e(this),i.data("bs.alert",o)),"close"===n&&o[n](this)})},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),e}();t(document).on(d.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),t.fn.alert=p._jQueryInterface,t.fn.alert.Constructor=p,t.fn.alert.noConflict=function(){return t.fn.alert=f,p._jQueryInterface};var m=t.fn.button,g={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},v={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input:not([type="hidden"])',ACTIVE:".active",BUTTON:".btn"},y={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},b=function(){function e(e){this._element=e}var n=e.prototype;return n.toggle=function(){var e=!0,n=!0,i=t(this._element).closest(v.DATA_TOGGLE)[0];if(i){var o=this._element.querySelector(v.INPUT);if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(g.ACTIVE))e=!1;else{var r=i.querySelector(v.ACTIVE);r&&t(r).removeClass(g.ACTIVE)}if(e){if(o.hasAttribute("disabled")||i.hasAttribute("disabled")||o.classList.contains("disabled")||i.classList.contains("disabled"))return;o.checked=!this._element.classList.contains(g.ACTIVE),t(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(g.ACTIVE)),e&&t(this._element).toggleClass(g.ACTIVE)},n.dispose=function(){t.removeData(this._element,"bs.button"),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.button");i||(i=new e(this),t(this).data("bs.button",i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),e}();t(document).on(y.CLICK_DATA_API,v.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(g.BUTTON)||(n=t(n).closest(v.BUTTON)),b._jQueryInterface.call(t(n),"toggle")}).on(y.FOCUS_BLUR_DATA_API,v.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(v.BUTTON)[0];t(n).toggleClass(g.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn.button=b._jQueryInterface,t.fn.button.Constructor=b,t.fn.button.noConflict=function(){return t.fn.button=m,b._jQueryInterface};var _="carousel",E=".bs.carousel",w=t.fn[_],T={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},C={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},S={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},A={SLIDE:"slide.bs.carousel",SLID:"slid.bs.carousel",KEYDOWN:"keydown.bs.carousel",MOUSEENTER:"mouseenter.bs.carousel",MOUSELEAVE:"mouseleave.bs.carousel",TOUCHSTART:"touchstart.bs.carousel",TOUCHMOVE:"touchmove.bs.carousel",TOUCHEND:"touchend.bs.carousel",POINTERDOWN:"pointerdown.bs.carousel",POINTERUP:"pointerup.bs.carousel",DRAG_START:"dragstart.bs.carousel",LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},O={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item",POINTER_EVENT:"pointer-event"},x={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",ITEM_IMG:".carousel-item img",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},I={TOUCH:"touch",PEN:"pen"},D=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(x.INDICATORS),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=e.prototype;return n.next=function(){this._isSliding||this._slide(S.NEXT)},n.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(S.PREV)},n.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(x.NEXT_PREV)&&(u.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(e){var n=this;this._activeElement=this._element.querySelector(x.ACTIVE_ITEM);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(A.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var o=e>i?S.NEXT:S.PREV;this._slide(o,this._items[e])}},n.dispose=function(){t(this._element).off(E),t.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(e){return e=a({},T,e),u.typeCheckConfig(_,e,C),e},n._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;t>0&&this.prev(),t<0&&this.next()}},n._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(A.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&t(this._element).on(A.MOUSEENTER,function(t){return e.pause(t)}).on(A.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&I[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&I[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};t(this._element.querySelectorAll(x.ITEM_IMG)).on(A.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(t(this._element).on(A.POINTERDOWN,function(e){return n(e)}),t(this._element).on(A.POINTERUP,function(e){return i(e)}),this._element.classList.add(O.POINTER_EVENT)):(t(this._element).on(A.TOUCHSTART,function(e){return n(e)}),t(this._element).on(A.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),t(this._element).on(A.TOUCHEND,function(e){return i(e)}))}},n._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},n._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(x.ITEM)):[],this._items.indexOf(e)},n._getItemByDirection=function(e,t){var n=e===S.NEXT,i=e===S.PREV,o=this._getItemIndex(t),r=this._items.length-1,a=i&&0===o||n&&o===r;if(a&&!this._config.wrap)return t;var s=e===S.PREV?-1:1,l=(o+s)%this._items.length;return-1===l?this._items[this._items.length-1]:this._items[l]},n._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),o=this._getItemIndex(this._element.querySelector(x.ACTIVE_ITEM)),r=t.Event(A.SLIDE,{relatedTarget:e,direction:n,from:o,to:i});return t(this._element).trigger(r),r},n._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(x.ACTIVE));t(n).removeClass(O.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&t(i).addClass(O.ACTIVE)}},n._slide=function(e,n){var i,o,r,a=this,s=this._element.querySelector(x.ACTIVE_ITEM),l=this._getItemIndex(s),c=n||s&&this._getItemByDirection(e,s),f=this._getItemIndex(c),d=Boolean(this._interval);if(e===S.NEXT?(i=O.LEFT,o=O.NEXT,r=S.LEFT):(i=O.RIGHT,o=O.PREV,r=S.RIGHT),c&&t(c).hasClass(O.ACTIVE))this._isSliding=!1;else{var h=this._triggerSlideEvent(c,r);if(!h.isDefaultPrevented()&&s&&c){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(c);var p=t.Event(A.SLID,{relatedTarget:c,direction:r,from:l,to:f});if(t(this._element).hasClass(O.SLIDE)){t(c).addClass(o),u.reflow(c),t(s).addClass(i),t(c).addClass(i);var m=parseInt(c.getAttribute("data-interval"),10);m?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=m):this._config.interval=this._config.defaultInterval||this._config.interval;var g=u.getTransitionDurationFromElement(s);t(s).one(u.TRANSITION_END,function(){t(c).removeClass(i+" "+o).addClass(O.ACTIVE),t(s).removeClass(O.ACTIVE+" "+o+" "+i),a._isSliding=!1,setTimeout(function(){return t(a._element).trigger(p)},0)}).emulateTransitionEnd(g)}else t(s).removeClass(O.ACTIVE),t(c).addClass(O.ACTIVE),this._isSliding=!1,t(this._element).trigger(p);d&&this.cycle()}}},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.carousel"),o=a({},T,t(this).data());"object"==typeof n&&(o=a({},o,n));var r="string"==typeof n?n:o.slide;if(i||(i=new e(this,o),t(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof r){if(void 0===i[r])throw new TypeError('No method named "'+r+'"');i[r]()}else o.interval&&o.ride&&(i.pause(),i.cycle())})},e._dataApiClickHandler=function(n){var i=u.getSelectorFromElement(this);if(i){var o=t(i)[0];if(o&&t(o).hasClass(O.CAROUSEL)){var r=a({},t(o).data(),t(this).data()),s=this.getAttribute("data-slide-to");s&&(r.interval=!1),e._jQueryInterface.call(t(o),r),s&&t(o).data("bs.carousel").to(s),n.preventDefault()}}},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return T}}]),e}();t(document).on(A.CLICK_DATA_API,x.DATA_SLIDE,D._dataApiClickHandler),t(window).on(A.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(x.DATA_RIDE)),n=0,i=e.length;n<i;n++){var o=t(e[n]);D._jQueryInterface.call(o,o.data())}}),t.fn[_]=D._jQueryInterface,t.fn[_].Constructor=D,t.fn[_].noConflict=function(){return t.fn[_]=w,D._jQueryInterface};var N="collapse",k=t.fn[N],L={toggle:!0,parent:""},P={toggle:"boolean",parent:"(string|element)"},H={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},R={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},M={WIDTH:"width",HEIGHT:"height"},j={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},F=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(j.DATA_TOGGLE)),i=0,o=n.length;i<o;i++){var r=n[i],a=u.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter(function(t){return t===e});null!==a&&s.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=e.prototype;return n.toggle=function(){t(this._element).hasClass(R.SHOW)?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!(this._isTransitioning||t(this._element).hasClass(R.SHOW)||(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(j.ACTIVES)).filter(function(e){return"string"==typeof o._config.parent?e.getAttribute("data-parent")===o._config.parent:e.classList.contains(R.COLLAPSE)})).length&&(n=null),n&&(i=t(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var r=t.Event(H.SHOW);if(t(this._element).trigger(r),!r.isDefaultPrevented()){n&&(e._jQueryInterface.call(t(n).not(this._selector),"hide"),i||t(n).data("bs.collapse",null));var a=this._getDimension();t(this._element).removeClass(R.COLLAPSE).addClass(R.COLLAPSING),this._element.style[a]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(R.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var s=a[0].toUpperCase()+a.slice(1),l="scroll"+s,c=u.getTransitionDurationFromElement(this._element);t(this._element).one(u.TRANSITION_END,function(){t(o._element).removeClass(R.COLLAPSING).addClass(R.COLLAPSE).addClass(R.SHOW),o._element.style[a]="",o.setTransitioning(!1),t(o._element).trigger(H.SHOWN)}).emulateTransitionEnd(c),this._element.style[a]=this._element[l]+"px"}}},n.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(R.SHOW)){var n=t.Event(H.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",u.reflow(this._element),t(this._element).addClass(R.COLLAPSING).removeClass(R.COLLAPSE).removeClass(R.SHOW);var o=this._triggerArray.length;if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=u.getSelectorFromElement(a);if(null!==s){var l=t([].slice.call(document.querySelectorAll(s)));l.hasClass(R.SHOW)||t(a).addClass(R.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0),this._element.style[i]="";var c=u.getTransitionDurationFromElement(this._element);t(this._element).one(u.TRANSITION_END,function(){e.setTransitioning(!1),t(e._element).removeClass(R.COLLAPSING).addClass(R.COLLAPSE).trigger(H.HIDDEN)}).emulateTransitionEnd(c)}}},n.setTransitioning=function(e){this._isTransitioning=e},n.dispose=function(){t.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(e){return(e=a({},L,e)).toggle=Boolean(e.toggle),u.typeCheckConfig(N,e,P),e},n._getDimension=function(){var e=t(this._element).hasClass(M.WIDTH);return e?M.WIDTH:M.HEIGHT},n._getParent=function(){var n,i=this;u.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(n.querySelectorAll(o));return t(r).each(function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n])}),n},n._addAriaAndCollapsedClass=function(e,n){var i=t(e).hasClass(R.SHOW);n.length&&t(n).toggleClass(R.COLLAPSED,!i).attr("aria-expanded",i)},e._getTargetFromElement=function(e){var t=u.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),r=a({},L,i.data(),"object"==typeof n&&n?n:{});if(!o&&r.toggle&&/show|hide/.test(n)&&(r.toggle=!1),o||(o=new e(this,r),i.data("bs.collapse",o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return L}}]),e}();t(document).on(H.CLICK_DATA_API,j.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=t(this),i=u.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));t(o).each(function(){var e=t(this),i=e.data("bs.collapse"),o=i?"toggle":n.data();F._jQueryInterface.call(e,o)})}),t.fn[N]=F._jQueryInterface,t.fn[N].Constructor=F,t.fn[N].noConflict=function(){return t.fn[N]=k,F._jQueryInterface};var W="dropdown",q=t.fn[W],B=new RegExp("38|40|27"),U={HIDE:"hide.bs.dropdown",HIDDEN:"hidden.bs.dropdown",SHOW:"show.bs.dropdown",SHOWN:"shown.bs.dropdown",CLICK:"click.bs.dropdown",CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},V={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},z={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},G={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},K={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Q={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},X=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=e.prototype;return i.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(V.DISABLED)){var i=e._getParentFromElement(this._element),o=t(this._menu).hasClass(V.SHOW);if(e._clearMenus(),!o){var r={relatedTarget:this._element},a=t.Event(U.SHOW,r);if(t(i).trigger(a),!a.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var s=this._element;"parent"===this._config.reference?s=i:u.isElement(this._config.reference)&&(s=this._config.reference,void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),"scrollParent"!==this._config.boundary&&t(i).addClass(V.POSITION_STATIC),this._popper=new n(s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(i).closest(z.NAVBAR_NAV).length&&t(document.body).children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(V.SHOW),t(i).toggleClass(V.SHOW).trigger(t.Event(U.SHOWN,r))}}}},i.show=function(){if(!(this._element.disabled||t(this._element).hasClass(V.DISABLED)||t(this._menu).hasClass(V.SHOW))){var n={relatedTarget:this._element},i=t.Event(U.SHOW,n),o=e._getParentFromElement(this._element);t(o).trigger(i),i.isDefaultPrevented()||(t(this._menu).toggleClass(V.SHOW),t(o).toggleClass(V.SHOW).trigger(t.Event(U.SHOWN,n)))}},i.hide=function(){if(!this._element.disabled&&!t(this._element).hasClass(V.DISABLED)&&t(this._menu).hasClass(V.SHOW)){var n={relatedTarget:this._element},i=t.Event(U.HIDE,n),o=e._getParentFromElement(this._element);t(o).trigger(i),i.isDefaultPrevented()||(t(this._menu).toggleClass(V.SHOW),t(o).toggleClass(V.SHOW).trigger(t.Event(U.HIDDEN,n)))}},i.dispose=function(){t.removeData(this._element,"bs.dropdown"),t(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var e=this;t(this._element).on(U.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},i._getConfig=function(e){return e=a({},this.constructor.Default,t(this._element).data(),e),u.typeCheckConfig(W,e,this.constructor.DefaultType),e},i._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(z.MENU))}return this._menu},i._getPlacement=function(){var e=t(this._element.parentNode),n=G.BOTTOM;return e.hasClass(V.DROPUP)?(n=G.TOP,t(this._menu).hasClass(V.MENURIGHT)&&(n=G.TOPEND)):e.hasClass(V.DROPRIGHT)?n=G.RIGHT:e.hasClass(V.DROPLEFT)?n=G.LEFT:t(this._menu).hasClass(V.MENURIGHT)&&(n=G.BOTTOMEND),n},i._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},i._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},i._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),e},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.dropdown"),o="object"==typeof n?n:null;if(i||(i=new e(this,o),t(this).data("bs.dropdown",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},e._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(z.DATA_TOGGLE)),o=0,r=i.length;o<r;o++){var a=e._getParentFromElement(i[o]),s=t(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),s){var c=s._menu;if(t(a).hasClass(V.SHOW)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&t.contains(a,n.target))){var u=t.Event(U.HIDE,l);t(a).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),i[o].setAttribute("aria-expanded","false"),t(c).removeClass(V.SHOW),t(a).removeClass(V.SHOW).trigger(t.Event(U.HIDDEN,l)))}}}},e._getParentFromElement=function(e){var t,n=u.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(n){if((/input|textarea/i.test(n.target.tagName)?!(32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||t(n.target).closest(z.MENU).length)):B.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(V.DISABLED))){var i=e._getParentFromElement(this),o=t(i).hasClass(V.SHOW);if(o&&(!o||27!==n.which&&32!==n.which)){var r=[].slice.call(i.querySelectorAll(z.VISIBLE_ITEMS));if(0!==r.length){var a=r.indexOf(n.target);38===n.which&&a>0&&a--,40===n.which&&a<r.length-1&&a++,a<0&&(a=0),r[a].focus()}}else{if(27===n.which){var s=i.querySelector(z.DATA_TOGGLE);t(s).trigger("focus")}t(this).trigger("click")}}},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return K}},{key:"DefaultType",get:function(){return Q}}]),e}();t(document).on(U.KEYDOWN_DATA_API,z.DATA_TOGGLE,X._dataApiKeydownHandler).on(U.KEYDOWN_DATA_API,z.MENU,X._dataApiKeydownHandler).on(U.CLICK_DATA_API+" "+U.KEYUP_DATA_API,X._clearMenus).on(U.CLICK_DATA_API,z.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),X._jQueryInterface.call(t(this),"toggle")}).on(U.CLICK_DATA_API,z.FORM_CHILD,function(e){e.stopPropagation()}),t.fn[W]=X._jQueryInterface,t.fn[W].Constructor=X,t.fn[W].noConflict=function(){return t.fn[W]=q,X._jQueryInterface};var $=t.fn.modal,Y={backdrop:!0,keyboard:!0,focus:!0,show:!0},J={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Z={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},ee={SCROLLABLE:"modal-dialog-scrollable",SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},te={DIALOG:".modal-dialog",MODAL_BODY:".modal-body",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},ne=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(te.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=e.prototype;return n.toggle=function(e){return this._isShown?this.hide():this.show(e)},n.show=function(e){var n=this;if(!this._isShown&&!this._isTransitioning){t(this._element).hasClass(ee.FADE)&&(this._isTransitioning=!0);var i=t.Event(Z.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(Z.CLICK_DISMISS,te.DATA_DISMISS,function(e){return n.hide(e)}),t(this._dialog).on(Z.MOUSEDOWN_DISMISS,function(){t(n._element).one(Z.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},n.hide=function(e){var n=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=t.Event(Z.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=t(this._element).hasClass(ee.FADE);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(Z.FOCUSIN),t(this._element).removeClass(ee.SHOW),t(this._element).off(Z.CLICK_DISMISS),t(this._dialog).off(Z.MOUSEDOWN_DISMISS),o){var r=u.getTransitionDurationFromElement(this._element);t(this._element).one(u.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return t(e).off(".bs.modal")}),t(document).off(Z.FOCUSIN),t.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(e){return e=a({},Y,e),u.typeCheckConfig("modal",e,J),e},n._showElement=function(e){var n=this,i=t(this._element).hasClass(ee.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),t(this._dialog).hasClass(ee.SCROLLABLE)?this._dialog.querySelector(te.MODAL_BODY).scrollTop=0:this._element.scrollTop=0,i&&u.reflow(this._element),t(this._element).addClass(ee.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(Z.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};if(i){var a=u.getTransitionDurationFromElement(this._dialog);t(this._dialog).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var e=this;t(document).off(Z.FOCUSIN).on(Z.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},n._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(Z.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(Z.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var e=this;this._isShown?t(window).on(Z.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(Z.RESIZE)},n._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(ee.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(Z.HIDDEN)})},n._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(ee.FADE)?ee.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ee.BACKDROP,i&&this._backdrop.classList.add(i),t(this._backdrop).appendTo(document.body),t(this._element).on(Z.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&u.reflow(this._backdrop),t(this._backdrop).addClass(ee.SHOW),!e)return;if(!i)return void e();var o=u.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(u.TRANSITION_END,e).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(ee.SHOW);var r=function(){n._removeBackdrop(),e&&e()};if(t(this._element).hasClass(ee.FADE)){var a=u.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else e&&e()},n._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(te.FIXED_CONTENT)),i=[].slice.call(document.querySelectorAll(te.STICKY_CONTENT));t(n).each(function(n,i){var o=i.style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(i).each(function(n,i){var o=i.style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")});var o=document.body.style.paddingRight,r=t(document.body).css("padding-right");t(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}t(document.body).addClass(ee.OPEN)},n._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(te.FIXED_CONTENT));t(e).each(function(e,n){var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i||""});var n=[].slice.call(document.querySelectorAll(""+te.STICKY_CONTENT));t(n).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var i=t(document.body).data("padding-right");t(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var e=document.createElement("div");e.className=ee.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(n,i){return this.each(function(){var o=t(this).data("bs.modal"),r=a({},Y,t(this).data(),"object"==typeof n&&n?n:{});if(o||(o=new e(this,r),t(this).data("bs.modal",o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else r.show&&o.show(i)})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Y}}]),e}();t(document).on(Z.CLICK_DATA_API,te.DATA_TOGGLE,function(e){var n,i=this,o=u.getSelectorFromElement(this);o&&(n=document.querySelector(o));var r=t(n).data("bs.modal")?"toggle":a({},t(n).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var s=t(n).one(Z.SHOW,function(e){e.isDefaultPrevented()||s.one(Z.HIDDEN,function(){t(i).is(":visible")&&i.focus()})});ne._jQueryInterface.call(t(n),r,this)}),t.fn.modal=ne._jQueryInterface,t.fn.modal.Constructor=ne,t.fn.modal.noConflict=function(){return t.fn.modal=$,ne._jQueryInterface};var ie=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],oe={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},re=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,ae=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function se(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);for(var i=new window.DOMParser,o=i.parseFromString(e,"text/html"),r=Object.keys(t),a=[].slice.call(o.body.querySelectorAll("*")),s=function(e,n){var i=a[e],o=i.nodeName.toLowerCase();if(-1===r.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var s=[].slice.call(i.attributes),l=[].concat(t["*"]||[],t[o]||[]);s.forEach(function(e){(function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===ie.indexOf(n)||Boolean(e.nodeValue.match(re)||e.nodeValue.match(ae));for(var i=t.filter(function(e){return e instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(e,l)||i.removeAttribute(e.nodeName)})},l=0,c=a.length;l<c;l++)s(l);return o.body.innerHTML}var le="tooltip",ce=t.fn.tooltip,ue=new RegExp("(^|\\s)bs-tooltip\\S+","g"),fe=["sanitize","whiteList","sanitizeFn"],de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},he={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},pe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:oe},me={SHOW:"show",OUT:"out"},ge={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},ve={FADE:"fade",SHOW:"show"},ye={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},be={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},_e=function(){function e(e,t){if(void 0===n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var i=e.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(ve.SHOW))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var o=u.findShadowRoot(this.element),r=t.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var a=this.getTipElement(),s=u.getUID(this.constructor.NAME);a.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(a).addClass(ve.FADE);var l="function"==typeof this.config.placement?this.config.placement.call(this,a,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var f=this._getContainer();t(a).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(a).appendTo(f),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,a,{placement:c,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:ye.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),t(a).addClass(ve.SHOW),"ontouchstart"in document.documentElement&&t(document.body).children().on("mouseover",null,t.noop);var d=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===me.OUT&&e._leave(null,e)};if(t(this.tip).hasClass(ve.FADE)){var h=u.getTransitionDurationFromElement(this.tip);t(this.tip).one(u.TRANSITION_END,d).emulateTransitionEnd(h)}else d()}},i.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==me.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};if(t(this.element).trigger(o),!o.isDefaultPrevented()){if(t(i).removeClass(ve.SHOW),"ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),this._activeTrigger[be.CLICK]=!1,this._activeTrigger[be.FOCUS]=!1,this._activeTrigger[be.HOVER]=!1,t(this.tip).hasClass(ve.FADE)){var a=u.getTransitionDurationFromElement(i);t(i).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},i.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},i.setContent=function(){var e=this.getTipElement();this.setElementContent(t(e.querySelectorAll(ye.TOOLTIP_INNER)),this.getTitle()),t(e).removeClass(ve.FADE+" "+ve.SHOW)},i.setElementContent=function(e,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=se(n,this.config.whiteList,this.config.sanitizeFn)),e.html(n)):e.text(n):this.config.html?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text())},i.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},i._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},i._getContainer=function(){return!1===this.config.container?document.body:u.isElement(this.config.container)?t(this.config.container):t(document).find(this.config.container)},i._getAttachment=function(e){return he[e.toUpperCase()]},i._setListeners=function(){var e=this,n=this.config.trigger.split(" ");n.forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==be.MANUAL){var i=n===be.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===be.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}}),t(this.element).closest(".modal").on("hide.bs.modal",function(){e.element&&e.hide()}),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?be.FOCUS:be.HOVER]=!0),t(n.getTipElement()).hasClass(ve.SHOW)||n._hoverState===me.SHOW?n._hoverState=me.SHOW:(clearTimeout(n._timeout),n._hoverState=me.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===me.SHOW&&n.show()},n.config.delay.show):n.show())},i._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?be.FOCUS:be.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=me.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===me.OUT&&n.hide()},n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},i._getConfig=function(e){var n=t(this.element).data();return Object.keys(n).forEach(function(e){-1!==fe.indexOf(e)&&delete n[e]}),"number"==typeof(e=a({},this.constructor.Default,n,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),u.typeCheckConfig(le,e,this.constructor.DefaultType),e.sanitize&&(e.template=se(e.template,e.whiteList,e.sanitizeFn)),e},i._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},i._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(ue);null!==n&&n.length&&e.removeClass(n.join(""))},i._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},i._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(ve.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new e(this,o),t(this).data("bs.tooltip",i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return pe}},{key:"NAME",get:function(){return le}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return ge}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return de}}]),e}();t.fn.tooltip=_e._jQueryInterface,t.fn.tooltip.Constructor=_e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=ce,_e._jQueryInterface};var Ee="popover",we=t.fn.popover,Te=new RegExp("(^|\\s)bs-popover\\S+","g"),Ce=a({},_e.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Se=a({},_e.DefaultType,{content:"(string|element|function)"}),Ae={FADE:"fade",SHOW:"show"},Oe={TITLE:".popover-header",CONTENT:".popover-body"},xe={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Ie=function(e){function n(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(n,e);var i=n.prototype;return i.isWithContent=function(){return this.getTitle()||this._getContent()},i.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},i.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},i.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(Oe.TITLE),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(Oe.CONTENT),n),e.removeClass(Ae.FADE+" "+Ae.SHOW)},i._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},i._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(Te);null!==n&&n.length>0&&e.removeClass(n.join(""))},n._jQueryInterface=function(e){return this.each(function(){var i=t(this).data("bs.popover"),o="object"==typeof e?e:null;if((i||!/dispose|hide/.test(e))&&(i||(i=new n(this,o),t(this).data("bs.popover",i)),"string"==typeof e)){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Ce}},{key:"NAME",get:function(){return Ee}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return xe}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Se}}]),n}(_e);t.fn.popover=Ie._jQueryInterface,t.fn.popover.Constructor=Ie,t.fn.popover.noConflict=function(){return t.fn.popover=we,Ie._jQueryInterface};var De="scrollspy",Ne=t.fn[De],ke={offset:10,method:"auto",target:""},Le={offset:"number",method:"string",target:"(string|element)"},Pe={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},He={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},Re={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},Me={OFFSET:"offset",POSITION:"position"},je=function(){function e(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+Re.NAV_LINKS+","+this._config.target+" "+Re.LIST_ITEMS+","+this._config.target+" "+Re.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(Pe.SCROLL,function(e){return i._process(e)}),this.refresh(),this._process()}var n=e.prototype;return n.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?Me.OFFSET:Me.POSITION,i="auto"===this._config.method?n:this._config.method,o=i===Me.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var r=[].slice.call(document.querySelectorAll(this._selector));r.map(function(e){var n,r=u.getSelectorFromElement(e);if(r&&(n=document.querySelector(r)),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+o,r]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},n.dispose=function(){t.removeData(this._element,"bs.scrollspy"),t(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(e){if("string"!=typeof(e=a({},ke,"object"==typeof e&&e?e:{})).target){var n=t(e.target).attr("id");n||(n=u.getUID(De),t(e.target).attr("id",n)),e.target="#"+n}return u.typeCheckConfig(De,e,Le),e},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length,r=o;r--;){var a=this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1]);a&&this._activate(this._targets[r])}}},n._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),i=t([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(He.DROPDOWN_ITEM)?(i.closest(Re.DROPDOWN).find(Re.DROPDOWN_TOGGLE).addClass(He.ACTIVE),i.addClass(He.ACTIVE)):(i.addClass(He.ACTIVE),i.parents(Re.NAV_LIST_GROUP).prev(Re.NAV_LINKS+", "+Re.LIST_ITEMS).addClass(He.ACTIVE),i.parents(Re.NAV_LIST_GROUP).prev(Re.NAV_ITEMS).children(Re.NAV_LINKS).addClass(He.ACTIVE)),t(this._scrollElement).trigger(Pe.ACTIVATE,{relatedTarget:e})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(He.ACTIVE)}).forEach(function(e){return e.classList.remove(He.ACTIVE)})},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data("bs.scrollspy"),o="object"==typeof n&&n;if(i||(i=new e(this,o),t(this).data("bs.scrollspy",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ke}}]),e}();t(window).on(Pe.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(Re.DATA_SPY)),n=e.length,i=n;i--;){var o=t(e[i]);je._jQueryInterface.call(o,o.data())}}),t.fn[De]=je._jQueryInterface,t.fn[De].Constructor=je,t.fn[De].noConflict=function(){return t.fn[De]=Ne,je._jQueryInterface};var Fe=t.fn.tab,We={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},qe={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},Be={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},Ue=function(){function e(e){this._element=e}var n=e.prototype;return n.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(qe.ACTIVE)||t(this._element).hasClass(qe.DISABLED))){var n,i,o=t(this._element).closest(Be.NAV_LIST_GROUP)[0],r=u.getSelectorFromElement(this._element);if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?Be.ACTIVE_UL:Be.ACTIVE;i=(i=t.makeArray(t(o).find(a)))[i.length-1]}var s=t.Event(We.HIDE,{relatedTarget:this._element}),l=t.Event(We.SHOW,{relatedTarget:i});if(i&&t(i).trigger(s),t(this._element).trigger(l),!l.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(n=document.querySelector(r)),this._activate(this._element,o);var c=function(){var n=t.Event(We.HIDDEN,{relatedTarget:e._element}),o=t.Event(We.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(o)};n?this._activate(n,n.parentNode,c):c()}}},n.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(e,n,i){var o=this,r=!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?t(n).children(Be.ACTIVE):t(n).find(Be.ACTIVE_UL),a=r[0],s=i&&a&&t(a).hasClass(qe.FADE),l=function(){return o._transitionComplete(e,a,i)};if(a&&s){var c=u.getTransitionDurationFromElement(a);t(a).removeClass(qe.SHOW).one(u.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(e,n,i){if(n){t(n).removeClass(qe.ACTIVE);var o=t(n.parentNode).find(Be.DROPDOWN_ACTIVE_CHILD)[0];o&&t(o).removeClass(qe.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(qe.ACTIVE),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),u.reflow(e),e.classList.contains(qe.FADE)&&e.classList.add(qe.SHOW),e.parentNode&&t(e.parentNode).hasClass(qe.DROPDOWN_MENU)){var r=t(e).closest(Be.DROPDOWN)[0];if(r){var a=[].slice.call(r.querySelectorAll(Be.DROPDOWN_TOGGLE));t(a).addClass(qe.ACTIVE)}e.setAttribute("aria-expanded",!0)}i&&i()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tab");if(o||(o=new e(this),i.data("bs.tab",o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),e}();t(document).on(We.CLICK_DATA_API,Be.DATA_TOGGLE,function(e){e.preventDefault(),Ue._jQueryInterface.call(t(this),"show")}),t.fn.tab=Ue._jQueryInterface,t.fn.tab.Constructor=Ue,t.fn.tab.noConflict=function(){return t.fn.tab=Fe,Ue._jQueryInterface};var Ve=t.fn.toast,ze={CLICK_DISMISS:"click.dismiss.bs.toast",HIDE:"hide.bs.toast",HIDDEN:"hidden.bs.toast",SHOW:"show.bs.toast",SHOWN:"shown.bs.toast"},Ge={FADE:"fade",HIDE:"hide",SHOW:"show",SHOWING:"showing"},Ke={animation:"boolean",autohide:"boolean",delay:"number"},Qe={animation:!0,autohide:!0,delay:500},Xe={DATA_DISMISS:'[data-dismiss="toast"]'},$e=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var n=e.prototype;return n.show=function(){var e=this;t(this._element).trigger(ze.SHOW),this._config.animation&&this._element.classList.add(Ge.FADE);var n=function(){e._element.classList.remove(Ge.SHOWING),e._element.classList.add(Ge.SHOW),t(e._element).trigger(ze.SHOWN),e._config.autohide&&e.hide()};if(this._element.classList.remove(Ge.HIDE),this._element.classList.add(Ge.SHOWING),this._config.animation){var i=u.getTransitionDurationFromElement(this._element);t(this._element).one(u.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n.hide=function(e){var n=this;this._element.classList.contains(Ge.SHOW)&&(t(this._element).trigger(ze.HIDE),e?this._close():this._timeout=setTimeout(function(){n._close()},this._config.delay))},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Ge.SHOW)&&this._element.classList.remove(Ge.SHOW),t(this._element).off(ze.CLICK_DISMISS),t.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(e){return e=a({},Qe,t(this._element).data(),"object"==typeof e&&e?e:{}),u.typeCheckConfig("toast",e,this.constructor.DefaultType),e},n._setListeners=function(){var e=this;t(this._element).on(ze.CLICK_DISMISS,Xe.DATA_DISMISS,function(){return e.hide(!0)})},n._close=function(){var e=this,n=function(){e._element.classList.add(Ge.HIDE),t(e._element).trigger(ze.HIDDEN)};if(this._element.classList.remove(Ge.SHOW),this._config.animation){var i=u.getTransitionDurationFromElement(this._element);t(this._element).one(u.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data("bs.toast"),r="object"==typeof n&&n;if(o||(o=new e(this,r),i.data("bs.toast",o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}})},o(e,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Ke}},{key:"Default",get:function(){return Qe}}]),e}();t.fn.toast=$e._jQueryInterface,t.fn.toast.Constructor=$e,t.fn.toast.noConflict=function(){return t.fn.toast=Ve,$e._jQueryInterface},function(){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),e.Util=u,e.Alert=p,e.Button=b,e.Carousel=D,e.Collapse=F,e.Dropdown=X,e.Modal=ne,e.Popover=Ie,e.Scrollspy=je,e.Tab=Ue,e.Toast=$e,e.Tooltip=_e,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(16),n(15))},,function(e,t,n){}]);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function DropButton(dropbutton, settings) {
    var options = $.extend({ title: Drupal.t('List additional actions') }, settings);
    var $dropbutton = $(dropbutton);

    this.$dropbutton = $dropbutton;

    this.$list = $dropbutton.find('.dropbutton');

    this.$actions = this.$list.find('li').addClass('dropbutton-action');

    if (this.$actions.length > 1) {
      var $primary = this.$actions.slice(0, 1);

      var $secondary = this.$actions.slice(1);
      $secondary.addClass('secondary-action');

      $primary.after(Drupal.theme('dropbuttonToggle', options));

      this.$dropbutton.addClass('dropbutton-multiple').on({
        'mouseleave.dropbutton': $.proxy(this.hoverOut, this),

        'mouseenter.dropbutton': $.proxy(this.hoverIn, this),

        'focusout.dropbutton': $.proxy(this.focusOut, this),

        'focusin.dropbutton': $.proxy(this.focusIn, this)
      });
    } else {
      this.$dropbutton.addClass('dropbutton-single');
    }
  }

  function dropbuttonClickHandler(e) {
    e.preventDefault();
    $(e.target).closest('.dropbutton-wrapper').toggleClass('open');
  }

  Drupal.behaviors.dropButton = {
    attach: function attach(context, settings) {
      var $dropbuttons = $(context).find('.dropbutton-wrapper').once('dropbutton');
      if ($dropbuttons.length) {
        var $body = $('body').once('dropbutton-click');
        if ($body.length) {
          $body.on('click', '.dropbutton-toggle', dropbuttonClickHandler);
        }

        var il = $dropbuttons.length;
        for (var i = 0; i < il; i++) {
          DropButton.dropbuttons.push(new DropButton($dropbuttons[i], settings.dropbutton));
        }
      }
    }
  };

  $.extend(DropButton, {
    dropbuttons: []
  });

  $.extend(DropButton.prototype, {
    toggle: function toggle(show) {
      var isBool = typeof show === 'boolean';
      show = isBool ? show : !this.$dropbutton.hasClass('open');
      this.$dropbutton.toggleClass('open', show);
    },
    hoverIn: function hoverIn() {
      if (this.timerID) {
        window.clearTimeout(this.timerID);
      }
    },
    hoverOut: function hoverOut() {
      this.timerID = window.setTimeout($.proxy(this, 'close'), 500);
    },
    open: function open() {
      this.toggle(true);
    },
    close: function close() {
      this.toggle(false);
    },
    focusOut: function focusOut(e) {
      this.hoverOut.call(this, e);
    },
    focusIn: function focusIn(e) {
      this.hoverIn.call(this, e);
    }
  });

  $.extend(Drupal.theme, {
    dropbuttonToggle: function dropbuttonToggle(options) {
      return '<li class="dropbutton-toggle"><button type="button"><span class="dropbutton-arrow"><span class="visually-hidden">' + options.title + '</span></span></button></li>';
    }
  });

  Drupal.DropButton = DropButton;
})(jQuery, Drupal);;
/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.Views = {};

  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    var pair = void 0;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');

      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };

  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);

    var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);

    if (viewHref && path.substring(0, viewHref.length + 1) === viewHref + '/') {
      returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
      returnObj.view_path = path;
    }
    return returnObj;
  };

  Drupal.Views.pathPortion = function (href) {
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);

    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      var ajaxViews = settings.views.ajaxViews;

      Object.keys(ajaxViews || {}).forEach(function (i) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;

        Object.keys(ajaxViews || {}).forEach(function (i) {
          var selector = '.js-view-dom-id-' + ajaxViews[i].view_dom_id;
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };

  Drupal.views = {};

  Drupal.views.instances = {};

  Drupal.views.ajaxView = function (settings) {
    var selector = '.js-view-dom-id-' + settings.view_dom_id;
    this.$view = $(selector);

    var ajaxPath = drupalSettings.views.ajax_path;

    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }

    var queryString = window.location.search || '';
    if (queryString !== '') {
      queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: { type: 'fullscreen' }
    };

    this.settings = settings;

    this.$exposed_form = $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    this.$exposed_form.once('exposed-form').each($.proxy(this.attachExposedFormAjax, this));

    this.$view.filter($.proxy(this.filterNestedViews, this)).once('ajax-pager').each($.proxy(this.attachPagerAjax, this));

    var selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0)
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };

  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    var that = this;
    this.exposedFormAjax = [];

    $('input[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
      var selfSettings = $.extend({}, that.element_settings, {
        base: $(this).attr('id'),
        element: this
      });
      that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
    });
  };

  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    return !this.$view.parents('.view').length;
  };

  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
  };

  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');

    $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

    var selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };

  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    var offset = $(response.selector).offset();

    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }

    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({ scrollTop: offset.top - 10 }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);;
(function ($, Drupal) {
  /**
   * Implemented autocomplete with multiselect to work together.
   *
   * @param settings
   */
  Drupal.opignoAutocompliteMultiselect = function (settings) {
    // Example settings argument.
    // {
    //   m_selected: '#training_users',
    //   m_available: '#training_users-available',
    //   autocomplete: '#training_users_autocomplete',
    //   dropdown: '.ui-widget.ui-widget-content',
    //   context: context,
    // }

    var $m_selected = $(settings.m_selected, settings.context);
    var $m_available = $(settings.m_available, settings.context);
    var $autocomplete = $(settings.autocomplete, settings.context);
    var $dropdown = $(settings.dropdown);

    function hideDropdown() {
      $dropdown.addClass('invisible');
    }

    function setDropdownDefault() {
      $dropdown.removeClass('invisible');
    }

    $autocomplete.once('autocompleteselect').on('autocompleteselect', function (e, ui) {
      // Get ids of the already selected options.
      var selected_ids = $('option', $m_selected)
        .map(function () {
          return $(this).val();
        }).get();
      // Replace available options list with the selected option.
      $m_available.empty();
      if (selected_ids.indexOf(ui.item.id) === -1) {
        var option_html = '<option value="' + ui.item.id + '">'
          + ui.item.label
          + '</option>';
        $m_available.append(option_html);
      }

      $m_available.trigger('updateCount');
      $m_selected.trigger('updateCount');
      hideDropdown();
    });

    $autocomplete.once('autocompleteresponse').on('autocompleteresponse', function (e, ui) {
      // Get ids of the already selected options.
      var selected_ids = $('option', $m_selected)
        .map(function () {
          return $(this).val();
        }).get();
      // Get available options without the already selected.
      var options = ui.content.filter(function (option) {
        return selected_ids.indexOf(option.id) === -1;
      });
      // Replace available options list with the available options.
      $m_available.empty();
      options.forEach(function (option) {
        var option_html = '<option value="' + option.id + '">'
          + option.label
          + '</option>';
        $m_available.append(option_html);
      });

      $m_available.trigger('updateCount');
      $m_selected.trigger('updateCount');
      hideDropdown();
    });

    $autocomplete.on('blur', function () {
      setDropdownDefault();
    });
  };

  /**
   * Added counter for multiselect option.
   *
   * @param context
   */
  Drupal.behaviors.opignoMultiselect = {
    attach: function (context) {
      $('.multiselect-wrapper', context).once('mobileMultiselect').each(function () {
        var $this = $(this);
        var $select = $this.find('select');
        var $buttons = $this.find('.multiselect-btns li');

        const updateCount = function () {
          // Use set timeout to move function bottom of the stack.
          setTimeout(function () {
            $select.each(function () {
              var $select = $(this);
              $select.prev('label').find('span').text(' (' + $select.find('option').length + ')');
            });
          });
        };

        updateCount();

        // Insert count element.
        $select.each(function () {
          $(this).prev('label').append('<span></span>');
        });

        // Option count.
        $buttons.on('click.multiselect', updateCount);
        $select.on('dblclick.multiselect updateCount', updateCount);
      });
    }
  };

  // Fixes multiselect issue 2123241.
  if (Drupal.behaviors.multiSelect && !Drupal.behaviors.multiSelect.detach) {
    Drupal.behaviors.multiSelect.detach = function (context, settings, trigger) {
      if (trigger === 'serialize') {
        $('select.multiselect-selected').selectAll();
      }
    };
  }

}(jQuery, Drupal));
;
(function ($, Drupal) {
  Drupal.behaviors.opignoViewPrivateMessage = {
    attach: function (context, settings) {
      var $rows = $('.view-private-message .views-row', context);
      var $readAll = $('#read-all-messages', context);
      var $unreadCount = $('#site-header #header-right .user-messages a .unread');
      var baseUrl = drupalSettings.path.baseUrl ? drupalSettings.path.baseUrl : '/';
      var language = (drupalSettings.path.currentLanguage !== undefined && drupalSettings.multiLingual.length) ? '/' + drupalSettings.path.currentLanguage : '';

      rowsClickListener($rows, language);

      $(document).ajaxSuccess(function() {
        var $rows = $('.view-private-message .views-row', context);
        rowsClickListener($rows, language);
      });

      // Mark all messages as read.
      $readAll.once('click').click(function(e) {
        e.preventDefault();

        $('.user-messages')
          .removeClass('show')
          .children('.dropdown-menu')
          .removeClass('show');

        $.ajax({
          url: baseUrl + 'ajax/messages/mark-read-all',
          success: function() {
            $unreadCount.text(0);
          }
        });

        return false;
      });
    }
  };

  function rowsClickListener($rows, language) {
    // Redirects to thread if user clicks on thread block.
    $rows.once('click').click(function(e) {
      e.preventDefault();

      var $thread = $(this).find('.private-message-thread');

      if (!$thread.length) {
        return false;
      }

      var id = $thread.attr('data-thread-id');
      window.location = language + '/private-messages/' + id;

      return false;
    });
  }

  // Fixes multiselect issue 2123241.
  if (Drupal.behaviors.multiSelect
      && !Drupal.behaviors.multiSelect.detach
  ) {
    Drupal.behaviors.multiSelect.detach = function (context, settings, trigger) {
      if (trigger === 'serialize') {
        $('select.multiselect-selected').selectAll();
      }
    };
  }
}(jQuery, Drupal));
;
;(function ($, Drupal) {
  Drupal.behaviors.opignoNotificationView = {
    attach: function (context, settings) {
      var $readAll = $('#read-all-notifications', context);
      var $notifications = $('.notification', context);
      var $unreadCount = $('#site-header #header-right .user-notifications a .unread');
      var $viewNotifications = $('header#site-header .user-notifications .view-opigno-notifications .views-row');
      var baseUrl = drupalSettings.path.baseUrl ? drupalSettings.path.baseUrl : '/';
      // var $markReadTrigger = $('header#site-header .user-notifications #read-all-notifications');

      // Mark all notifications as read.
      $readAll.once('click').click(function(e) {
        e.preventDefault();

        $('.user-notifications')
          .removeClass('show')
          .children('.dropdown-menu')
          .removeClass('show');

        $.ajax({
          url: baseUrl + 'ajax/notifications/mark-read-all',
          success: function() {
            $unreadCount.text(0);
            $viewNotifications.remove();
            // $markReadTrigger.remove();
          },
        });

        return false;
      });
    },
  };
}(jQuery, Drupal));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + window.location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span> <span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', height + 'px');

              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', newHeight + 'px');
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        var close = Drupal.t('Close');
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href="#close" class="joyride-close-tip" aria-label="' + close + '">&times;</a>',
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', {
            '!tour_item': index + 1,
            '!total': total
          });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,

      $tabbableElements: $(),

      $disabledElements: $(),

      released: false,

      active: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      tabbingContext.activate();

      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;

      var $disabledSet = $(':tabbable').not($set);

      tabbingContext.$disabledElements = $disabledSet;

      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);

      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);

        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);

        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);

        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,

      isVisible: false,

      contextualCount: 0,

      tabbingContext: null
    },

    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,

    initialize: function initialize(options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();

        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },

        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));

      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
