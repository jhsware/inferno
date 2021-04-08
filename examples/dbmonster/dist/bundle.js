!function(){"use strict";var e,n,t=function(e,n,t,r){this.min=e,this.max=n,this.mean=t,this.last=r},r=function(){function e(e){this.samples=[],this.maxSamples=e,this._i=-1}return e.prototype.addSample=function(e){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=e},e.prototype.each=function(e){for(var n=this.samples,t=0;t<n.length;t++)e(n[(this._i+1+t)%n.length],t)},e.prototype.calc=function(){var e=this.samples;if(0===e.length)return new t(0,0,0,0);for(var n=e[(this._i+1)%e.length],r=n,i=0,l=0;l<e.length;l++){var a=e[(this._i+1+l)%e.length];a<n&&(n=a),a>r&&(r=a),i+=a}var o=e[this._i],u=i/e.length;return new t(n,r,u,o)},e}(),i=[],l=-1,a=(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=function(){function e(e){var n=this;this._sync=function(){n.sync(),n._dirty=!1},this.name=e,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return e.prototype.invalidate=function(){var e;this._dirty||(this._dirty=!0,e=this._sync,i.push(e),-1===l&&requestAnimationFrame((function(e){l=-1;var n=i;i=[];for(var t=0;t<n.length;t++)n[t]()})))},e.prototype.sync=function(){throw new Error("sync method not implemented")},e}();!function(e){e[e.HideMin=1]="HideMin",e[e.HideMax=2]="HideMax",e[e.HideMean=4]="HideMean",e[e.HideLast=8]="HideLast",e[e.HideGraph=16]="HideGraph",e[e.RoundValues=32]="RoundValues"}(n||(n={}));var u=function(e){function t(t,r,i,l){var a=e.call(this,t)||this;a.flags=r,a.unitName=i,a.samples=l;var o=document.createElement("div");o.style.cssText="text-align: center",o.textContent=a.name;var u=document.createElement("div");return 0===(r&n.HideMin)?(a.minText=document.createElement("div"),u.appendChild(a.minText)):a.minText=null,0===(r&n.HideMax)?(a.maxText=document.createElement("div"),u.appendChild(a.maxText)):a.maxText=null,0===(r&n.HideMean)?(a.meanText=document.createElement("div"),u.appendChild(a.meanText)):a.meanText=null,0===(r&n.HideLast)?(a.lastText=document.createElement("div"),u.appendChild(a.lastText)):a.lastText=null,a.element.appendChild(o),a.element.appendChild(u),0===(r&n.HideGraph)?(a.canvas=document.createElement("canvas"),a.canvas.style.cssText="display: block; padding: 0; margin: 0",a.canvas.width=100,a.canvas.height=30,a.ctx=a.canvas.getContext("2d"),a.element.appendChild(a.canvas)):(a.canvas=null,a.ctx=null),a}return a(t,e),t.prototype.sync=function(){var e,t,r,i,l=this,a=this.samples.calc(),o=30/(1.2*a.max);0===(this.flags&n.RoundValues)?(e=a.min.toFixed(2),t=a.max.toFixed(2),r=a.mean.toFixed(2),i=a.last.toFixed(2)):(e=Math.round(a.min).toString(),t=Math.round(a.max).toString(),r=Math.round(a.mean).toString(),i=Math.round(a.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+e+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+t+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+r+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+i+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,100,30),this.ctx.fillStyle="#0f0",this.samples.each((function(e,n){l.ctx.fillRect(n,30,1,-e*o)})))},t}(o);!function(e){function n(n,t){var r=e.call(this,n)||this;return r.counter=t,r.text=document.createElement("div"),r.element.appendChild(r.text),r}a(n,e),n.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(o);var c=null;function s(){c||((c=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(c))}var f=function(e,n,t){this.data=new r(100),this.widget=new u(e,t,n,this.data),this.startTime=-1},d={},p=Array.isArray;function h(e){var n=typeof e;return"string"===n||"number"===n}function v(e){return void 0===e||null===e}function m(e){return null===e||!1===e||!0===e||void 0===e}function g(e){return"function"===typeof e}function y(e){return"string"===typeof e}function x(e){return null===e}function b(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var i in n)t[i]=n[i];return t}function k(e){return!x(e)&&"object"===typeof e}var C={};function w(e){return e.substr(2).toLowerCase()}function $(e,n){e.appendChild(n)}function F(e,n,t){x(t)?$(e,n):e.insertBefore(n,t)}function T(e,n){e.removeChild(n)}function M(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function S(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=M(e,n,t)}return null}function P(e,n){do{var t=e.flags;if(2033&t)return void T(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var i=0,l=r.length;i<l;++i)P(r[i],n);return}e=r}}while(e)}function V(e,n,t){do{var r=e.flags;if(2033&r)return void F(n,e.dom,t);var i=e.children;if(4&r&&(e=i.$LI),8&r&&(e=i),8192&r){if(2!==e.childFlags){for(var l=0,a=i.length;l<a;++l)V(i[l],n,t);return}e=i}}while(e)}function N(e,n,t){if(e.constructor.getDerivedStateFromProps)return b(t,e.constructor.getDerivedStateFromProps(n,t));return t}var E={componentComparator:null,createVNode:null,renderComplete:null};function H(e,n){e.textContent=n}function L(e,n){return k(e)&&e.event===n.event&&e.data===n.data}function _(e,n){return!!g(e)&&(e(n),!0)}var I="$";function U(e,n,t,r,i,l,a,o){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===i?null:i,this.props=void 0===l?null:l,this.ref=void 0===a?null:a,this.type=o}function A(e,n,t,r,i,l,a,o){var u=void 0===i?1:i,c=new U(u,r,t,e,a,l,o,n);return E.createVNode&&E.createVNode(c),0===u&&function(e,n){var t,r=1;if(m(n))t=n;else if(h(n))r=16,t=n;else if(p(n)){for(var i=n.length,l=0;l<i;++l){var a=n[l];if(m(a)||p(a)){t=t||n.slice(0,l),R(n,t,l,"");break}if(h(a))(t=t||n.slice(0,l)).push(B(a,I+l));else{var o=a.key,u=(81920&a.flags)>0,c=x(o),s=y(o)&&o[0]===I;u||c||s?(t=t||n.slice(0,l),(u||s)&&(a=W(a)),(c||s)&&(a.key=I+l),t.push(a)):t&&t.push(a),a.flags|=65536}}r=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=W(n)),r=2;e.children=t,e.childFlags=r}(c,c.children),c}function B(e,n){return new U(1,v(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function D(e,n,t){var r=A(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=O(),r.childFlags=2;break;case 16:r.children=[B(e)],r.childFlags=4}return r}function W(e){var n=-16385&e.flags,t=e.props;if(14&n&&!x(t)){var r=t;for(var i in t={},r)t[i]=r[i]}if(0===(8192&n))return new U(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return D(2===t?W(n):n.map(W),t,e.key)}(e)}function O(){return B("",null)}function R(e,n,t,r){for(var i=e.length;t<i;t++){var l=e[t];if(!m(l)){var a=r+I+t;if(p(l))R(l,n,0,a);else{if(h(l))l=B(l,a);else{var o=l.key,u=y(o)&&o[0]===I;(81920&l.flags||u)&&(l=W(l)),l.flags|=65536,u?o.substring(0,r.length)!==r&&(l.key=r+o):x(o)?l.key=a:l.key=r+o}n.push(l)}}}}function j(e){if(m(e)||h(e))return B(e,null);if(p(e))return D(e,0,null);return 16384&e.flags?W(e):e}var q="http://www.w3.org/1999/xlink",G="http://www.w3.org/XML/1998/namespace",X={"xlink:actuate":q,"xlink:arcrole":q,"xlink:href":q,"xlink:role":q,"xlink:show":q,"xlink:title":q,"xlink:type":q,"xml:base":G,"xml:lang":G,"xml:space":G};function K(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var z=K(0),Q=K(null),J=K(!0);function Y(e,n){var t=n.$EV;return t||(t=n.$EV=K(null)),t[e]||1===++z[e]&&(Q[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();ee(n,!0,e,ie(n))}}(e):function(e){return function(n){ee(n,!1,e,ie(n))}}(e);return document.addEventListener(w(e),n),n}(e)),t}function Z(e,n){var t=n.$EV;t&&t[e]&&(0===--z[e]&&(document.removeEventListener(w(e),Q[e]),Q[e]=null),t[e]=null)}function ee(e,n,t,r){var i=function(e){return g(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&i.disabled)return;var l=i.$EV;if(l){var a=l[t];if(a&&(r.dom=i,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}i=i.parentNode}while(!x(i))}function ne(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function te(){return this.defaultPrevented}function re(){return this.cancelBubble}function ie(e){var n={dom:document};return e.isDefaultPrevented=te,e.isPropagationStopped=re,e.stopPropagation=ne,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function le(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var i=n.toLowerCase();e[i]&&e[i](t)}}function ae(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||C,l=r.dom;if(y(e))le(i,e,t);else for(var a=0;a<e.length;++a)le(i,e[a],t);if(g(n)){var o=this.$V,u=o.props||C;n(u,l,!1,o)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function oe(e,n,t){var r="$"+n,i=e[r];if(i){if(i[1].wrapped)return;e.removeEventListener(i[0],i[1]),e[r]=null}g(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ue(e){return"checkbox"===e||"radio"===e}var ce=ae("onInput",de),se=ae(["onClick","onChange"],de);function fe(e){e.stopPropagation()}function de(e,n){var t=e.type,r=e.value,i=e.checked,l=e.multiple,a=e.defaultValue,o=!v(r);t&&t!==n.type&&n.setAttribute("type",t),v(l)||l===n.multiple||(n.multiple=l),v(a)||o||(n.defaultValue=a+""),ue(t)?(o&&(n.value=r),v(i)||(n.checked=i)):o&&n.value!==r?(n.defaultValue=r,n.value=r):v(i)||(n.checked=i)}function pe(e,n){if("option"===e.type)!function(e,n){var t=e.props||C,r=e.dom;r.value=t.value,t.value===n||p(n)&&-1!==n.indexOf(t.value)?r.selected=!0:v(n)&&v(t.selected)||(r.selected=t.selected||!1)}(e,n);else{var t=e.children,r=e.flags;if(4&r)pe(t.$LI,n);else if(8&r)pe(t,n);else if(2===e.childFlags)pe(t,n);else if(12&e.childFlags)for(var i=0,l=t.length;i<l;++i)pe(t[i],n)}}fe.wrapped=!0;var he=ae("onChange",ve);function ve(e,n,t,r){var i=Boolean(e.multiple);v(e.multiple)||i===n.multiple||(n.multiple=i);var l=e.selectedIndex;if(-1===l&&(n.selectedIndex=-1),1!==r.childFlags){var a=e.value;"number"===typeof l&&l>-1&&n.options[l]&&(a=n.options[l].value),t&&v(a)&&(a=e.defaultValue),pe(r,a)}}var me,ge,ye=ae("onInput",be),xe=ae("onChange");function be(e,n,t){var r=e.value,i=n.value;if(v(r)){if(t){var l=e.defaultValue;v(l)||l===i||(n.defaultValue=l,n.value=l)}}else i!==r&&(n.defaultValue=r,n.value=r)}function ke(e,n,t,r,i,l){64&e?de(r,t):256&e?ve(r,t,i,n):128&e&&be(r,t,i),l&&(t.$V=n)}function Ce(e){return e.type&&ue(e.type)?!v(e.checked):!v(e.value)}function we(e){e&&!_(e,null)&&e.current&&(e.current=null)}function $e(e,n,t){e&&(g(e)||void 0!==e.current)&&t.push((function(){_(e,n)||void 0===e.current||(e.current=n)}))}function Fe(e,n){Te(e),P(e,n)}function Te(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var i=e.props;we(n);var l=e.childFlags;if(!x(i))for(var a=Object.keys(i),o=0,u=a.length;o<u;o++){var c=a[o];J[c]&&Z(c,e.dom)}12&l?Me(r):2===l&&Te(r)}else r&&(4&t?(g(r.componentWillUnmount)&&r.componentWillUnmount(),we(e.ref),r.$UN=!0,Te(r.$LI)):8&t?(!v(n=e.ref)&&g(n.onComponentWillUnmount)&&n.onComponentWillUnmount(S(e,!0),e.props||C),Te(r)):1024&t?Fe(r,e.ref):8192&t&&12&e.childFlags&&Me(r))}function Me(e){for(var n=0,t=e.length;n<t;++n)Te(e[n])}function Se(e){e.textContent=""}function Pe(e,n,t){Me(t),8192&n.flags?P(n,e):Se(e)}function Ve(e,n,t,r,i,l,a){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===e)break;var o=v(t)?"":t;r[e]!==o&&(r[e]=o);break;case"style":!function(e,n,t){if(v(n))return void t.removeAttribute("style");var r,i,l=t.style;if(y(n))return void(l.cssText=n);if(v(e)||y(e))for(r in n)i=n[r],l.setProperty(r,i);else{for(r in n)(i=n[r])!==e[r]&&l.setProperty(r,i);for(r in e)v(n[r])&&l.removeProperty(r)}}(n,t,r);break;case"dangerouslySetInnerHTML":!function(e,n,t,r){var i=e&&e.__html||"",l=n&&n.__html||"";i!==l&&(v(l)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(r,l)||(x(t)||(12&t.childFlags?Me(t.children):2===t.childFlags&&Te(t.children),t.children=null,t.childFlags=1),r.innerHTML=l))}(n,t,a,r);break;default:J[e]?function(e,n,t,r){if(g(t))Y(e,r)[e]=t;else if(k(t)){if(L(n,t))return;Y(e,r)[e]=t}else Z(e,r)}(e,n,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(k(t)){if(L(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}oe(r,w(e),t)}(e,n,t,r):v(t)?r.removeAttribute(e):i&&X[e]?r.setAttributeNS(X[e],e,t):r.setAttribute(e,t)}}function Ne(e,n,t){var r=j(e.render(n,e.state,t)),i=t;return g(e.getChildContext)&&(i=b(t,e.getChildContext())),e.$CX=i,r}function Ee(e,n){var t=e.props||C;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function He(e,n,t,r,i,l){var a=e.flags|=16384;481&a?function(e,n,t,r,i,l){var a=e.flags,o=e.props,u=e.className,c=e.childFlags,s=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,r=r||(32&a)>0),f=e.children;if(v(u)||""===u||(r?s.setAttribute("class",u):s.className=u),16===c)H(s,f);else if(1!==c){var d=r&&"foreignObject"!==e.type;2===c?(16384&f.flags&&(e.children=f=W(f)),He(f,s,t,d,null,l)):8!==c&&4!==c||_e(f,s,t,d,null,l)}x(n)||F(n,s,i),x(o)||function(e,n,t,r,i){var l=!1,a=(448&n)>0;for(var o in a&&(l=Ce(t))&&function(e,n,t){64&e?function(e,n){ue(n.type)?(oe(e,"change",se),oe(e,"click",fe)):oe(e,"input",ce)}(n,t):256&e?function(e){oe(e,"change",he)}(n):128&e&&function(e,n){oe(e,"input",ye),n.onChange&&oe(e,"change",xe)}(n,t)}(n,r,t),t)Ve(o,null,t[o],r,i,l,null);a&&ke(n,e,r,t,!0,l)}(e,a,o,s,r),$e(e.ref,s,l)}(e,n,t,r,i,l):4&a?function(e,n,t,r,i,l){var a=function(e,n,t,r,i,l){var a=new n(t,r),o=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=i,a.$L=l,e.children=a,a.$BS=!1,a.context=r,a.props===C&&(a.props=t),o)a.state=N(a,t,a.state);else if(g(a.componentWillMount)){a.$BR=!0,a.componentWillMount();var u=a.$PS;if(!x(u)){var c=a.state;if(x(c))a.state=u;else for(var s in u)c[s]=u[s];a.$PS=null}a.$BR=!1}return a.$LI=Ne(a,t,r),a}(e,e.type,e.props||C,t,r,l);He(a.$LI,n,a.$CX,r,i,l),function(e,n,t){$e(e,n,t),g(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}(e.ref,a,l)}(e,n,t,r,i,l):8&a?(function(e,n,t,r,i,l){He(e.children=j(Ee(e,t)),n,t,r,i,l)}(e,n,t,r,i,l),function(e,n){var t=e.ref;v(t)||(_(t.onComponentWillMount,e.props||C),g(t.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(S(n,!0),n.props||C)}}(t,e)))}(e,l)):512&a||16&a?Le(e,n,i):8192&a?function(e,n,t,r,i,l){var a=e.children,o=e.childFlags;12&o&&0===a.length&&(o=e.childFlags=2,a=e.children=O()),2===o?He(a,t,i,r,i,l):_e(a,t,n,r,i,l)}(e,t,n,r,i,l):1024&a&&function(e,n,t,r,i){He(e.children,e.ref,n,!1,null,i);var l=O();Le(l,t,r),e.dom=l.dom}(e,t,n,i,l)}function Le(e,n,t){var r=e.dom=document.createTextNode(e.children);x(n)||F(n,r,t)}function _e(e,n,t,r,i,l){for(var a=0;a<e.length;++a){var o=e[a];16384&o.flags&&(e[a]=o=W(o)),He(o,n,t,r,i,l)}}function Ie(e,n,t,r,i,l,a){var o=n.flags|=16384;e.flags!==o||e.type!==n.type||e.key!==n.key||2048&o?16384&e.flags?function(e,n,t,r,i,l){Te(e),0!==(n.flags&e.flags&2033)?(He(n,null,r,i,null,l),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(He(n,t,r,i,S(e,!0),l),P(e,t))}(e,n,t,r,i,a):He(n,t,r,i,l,a):481&o?function(e,n,t,r,i,l){var a,o=n.dom=e.dom,u=e.props,c=n.props,s=!1,f=!1;if(r=r||(32&i)>0,u!==c){var d=u||C;if((a=c||C)!==C)for(var p in(s=(448&i)>0)&&(f=Ce(a)),a){var h=d[p],m=a[p];h!==m&&Ve(p,h,m,o,r,f,e)}if(d!==C)for(var g in d)v(a[g])&&!v(d[g])&&Ve(g,d[g],null,o,r,f,e)}var y=n.children,x=n.className;e.className!==x&&(v(x)?o.removeAttribute("class"):r?o.setAttribute("class",x):o.className=x),4096&i?function(e,n){e.textContent!==n&&(e.textContent=n)}(o,y):Ue(e.childFlags,n.childFlags,e.children,y,o,t,r&&"foreignObject"!==n.type,null,e,l),s&&ke(i,n,o,a,!1,f);var b=n.ref,k=e.ref;k!==b&&(we(k),$e(b,o,l))}(e,n,r,i,o,a):4&o?function(e,n,t,r,i,l,a){var o=n.children=e.children;if(x(o))return;o.$L=a;var u=n.props||C,c=n.ref,s=e.ref,f=o.state;if(!o.$N){if(g(o.componentWillReceiveProps)){if(o.$BR=!0,o.componentWillReceiveProps(u,r),o.$UN)return;o.$BR=!1}x(o.$PS)||(f=b(f,o.$PS),o.$PS=null)}(function(e,n,t,r,i,l,a,o,u){var c=e.state,s=e.props,f=Boolean(e.$N),d=g(e.shouldComponentUpdate);if(f&&(n=N(e,t,n!==c?b(c,n):n)),!d||d&&e.shouldComponentUpdate(t,n,i)){!f&&g(e.componentWillUpdate)&&e.componentWillUpdate(t,n,i),e.props=t,e.state=n,e.context=i;var p=null,h=Ne(e,t,i);f&&g(e.getSnapshotBeforeUpdate)&&(p=e.getSnapshotBeforeUpdate(s,c)),Ie(e.$LI,h,r,e.$CX,l,o,u),e.$LI=h,g(e.componentDidUpdate)&&function(e,n,t,r,i){i.push((function(){e.componentDidUpdate(n,t,r)}))}(e,s,c,p,u)}else e.props=t,e.state=n,e.context=i})(o,f,u,t,r,i,0,l,a),s!==c&&(we(s),$e(c,o,a))}(e,n,t,r,i,l,a):8&o?function(e,n,t,r,i,l,a){var o=!0,u=n.props||C,c=n.ref,s=e.props,f=!v(c),d=e.children;if(f&&g(c.onComponentShouldUpdate)&&(o=c.onComponentShouldUpdate(s,u)),!1!==o){f&&g(c.onComponentWillUpdate)&&c.onComponentWillUpdate(s,u);var p=j(Ee(n,r));Ie(d,p,t,r,i,l,a),n.children=p,f&&g(c.onComponentDidUpdate)&&c.onComponentDidUpdate(s,u)}else n.children=d}(e,n,t,r,i,l,a):16&o?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&o?n.dom=e.dom:8192&o?function(e,n,t,r,i,l){var a=e.children,o=n.children,u=e.childFlags,c=n.childFlags,s=null;12&c&&0===o.length&&(c=n.childFlags=2,o=n.children=O());var f=0!==(2&c);if(12&u){var d=a.length;(8&u&&8&c||f||!f&&o.length>d)&&(s=S(a[d-1],!1).nextSibling)}Ue(u,c,a,o,t,r,i,s,e,l)}(e,n,t,r,i,a):function(e,n,t,r){var i=e.ref,l=n.ref,a=n.children;if(Ue(e.childFlags,n.childFlags,e.children,a,i,t,!1,null,e,r),n.dom=e.dom,i!==l&&!m(a)){var o=a.dom;T(i,o),$(l,o)}}(e,n,r,a)}function Ue(e,n,t,r,i,l,a,o,u,c){switch(e){case 2:switch(n){case 2:Ie(t,r,i,l,a,o,c);break;case 1:Fe(t,i);break;case 16:Te(t),H(i,r);break;default:!function(e,n,t,r,i,l){Te(e),_e(n,t,r,i,S(e,!0),l),P(e,t)}(t,r,i,l,a,c)}break;case 1:switch(n){case 2:He(r,i,l,a,o,c);break;case 1:break;case 16:H(i,r);break;default:_e(r,i,l,a,o,c)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:H(t,n))}(t,r,i);break;case 2:Se(i),He(r,i,l,a,o,c);break;case 1:Se(i);break;default:Se(i),_e(r,i,l,a,o,c)}break;default:switch(n){case 16:Me(t),H(i,r);break;case 2:Pe(i,u,t),He(r,i,l,a,o,c);break;case 1:Pe(i,u,t);break;default:var s=0|t.length,f=0|r.length;0===s?f>0&&_e(r,i,l,a,o,c):0===f?Pe(i,u,t):8===n&&8===e?function(e,n,t,r,i,l,a,o,u,c){var s,f,d=l-1,p=a-1,h=0,v=e[h],m=n[h];e:{for(;v.key===m.key;){if(16384&m.flags&&(n[h]=m=W(m)),Ie(v,m,t,r,i,o,c),e[h]=m,++h>d||h>p)break e;v=e[h],m=n[h]}for(v=e[d],m=n[p];v.key===m.key;){if(16384&m.flags&&(n[p]=m=W(m)),Ie(v,m,t,r,i,o,c),e[d]=m,p--,h>--d||h>p)break e;v=e[d],m=n[p]}}if(h>d){if(h<=p)for(f=(s=p+1)<a?S(n[s],!0):o;h<=p;)16384&(m=n[h]).flags&&(n[h]=m=W(m)),++h,He(m,t,r,i,f,c)}else if(h>p)for(;h<=d;)Fe(e[h++],t);else!function(e,n,t,r,i,l,a,o,u,c,s,f,d){var p,h,v,m=0,g=o,y=o,x=l-o+1,b=a-o+1,k=new Int32Array(b+1),C=x===r,w=!1,$=0,F=0;if(i<4||(x|b)<32)for(m=g;m<=l;++m)if(p=e[m],F<b){for(o=y;o<=a;o++)if(h=n[o],p.key===h.key){if(k[o-y]=m+1,C)for(C=!1;g<m;)Fe(e[g++],u);$>o?w=!0:$=o,16384&h.flags&&(n[o]=h=W(h)),Ie(p,h,u,t,c,s,d),++F;break}!C&&o>a&&Fe(p,u)}else C||Fe(p,u);else{var T={};for(m=y;m<=a;++m)T[n[m].key]=m;for(m=g;m<=l;++m)if(p=e[m],F<b)if(void 0!==(o=T[p.key])){if(C)for(C=!1;m>g;)Fe(e[g++],u);k[o-y]=m+1,$>o?w=!0:$=o,16384&(h=n[o]).flags&&(n[o]=h=W(h)),Ie(p,h,u,t,c,s,d),++F}else C||Fe(p,u);else C||Fe(p,u)}if(C)Pe(u,f,e),_e(n,u,t,c,s,d);else if(w){var M=function(e){var n=0,t=0,r=0,i=0,l=0,a=0,o=0,u=e.length;for(u>Ae&&(Ae=u,me=new Int32Array(u),ge=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=me[i]]<n){ge[t]=r,me[++i]=t;continue}for(l=0,a=i;l<a;)e[me[o=l+a>>1]]<n?l=o+1:a=o;n<e[me[l]]&&(l>0&&(ge[t]=me[l-1]),me[l]=t)}l=i+1;var c=new Int32Array(l);for(a=me[l-1];l-- >0;)c[l]=a,a=ge[a],me[l]=0;return c}(k);for(o=M.length-1,m=b-1;m>=0;m--)0===k[m]?(16384&(h=n[$=m+y]).flags&&(n[$]=h=W(h)),He(h,u,t,c,(v=$+1)<i?S(n[v],!0):s,d)):o<0||m!==M[o]?V(h=n[$=m+y],u,(v=$+1)<i?S(n[v],!0):s):o--}else if(F!==b)for(m=b-1;m>=0;m--)0===k[m]&&(16384&(h=n[$=m+y]).flags&&(n[$]=h=W(h)),He(h,u,t,c,(v=$+1)<i?S(n[v],!0):s,d))}(e,n,r,l,a,d,p,h,t,i,o,u,c)}(t,r,i,l,a,s,f,o,u,c):function(e,n,t,r,i,l,a,o,u){for(var c,s,f=l>a?a:l,d=0;d<f;++d)c=n[d],s=e[d],16384&c.flags&&(c=n[d]=W(c)),Ie(s,c,t,r,i,o,u),e[d]=c;if(l<a)for(d=f;d<a;++d)16384&(c=n[d]).flags&&(c=n[d]=W(c)),He(c,t,r,i,o,u);else if(l>a)for(d=f;d<l;++d)Fe(e[d],t)}(t,r,i,l,a,s,f,o,c)}}}var Ae=0;"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve());var Be=document.getElementById("app");!function(e){void 0===e&&(e=n.HideMin|n.HideMax|n.HideMean|n.RoundValues),s();var t=new r(100),i=new u("FPS",e,"",t);c.appendChild(i.element);var l=0,a=60;requestAnimationFrame((function e(n){l>0&&(a+=.01652892561983471*(1e3/(n-l)-a)),l=n,t.addSample(a),i.invalidate(),requestAnimationFrame(e)}))}(),function(e){if(void 0===e&&(e=n.HideMin|n.HideMean),s(),void 0===performance.memory)return;var t=new r(100),i=new u("Memory",e,"MB",t);c.appendChild(i.element),function e(){t.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),i.invalidate(),setTimeout(e,30)}()}(),function(e,n){void 0===n&&(n=0),s();var t=d[e];void 0===t&&(d[e]=t=new f(e,"ms",n),c.appendChild(t.widget.element))}("view update"),setInterval((function(){var e,n=ENV.generateData(!1).toArray();void 0!==(e=d["view update"])&&(e.startTime=performance.now()),function(e){for(var n=e.length,t=[],r=0;r<n;r++){for(var i=e[r],l=i.lastSample,a=[A(1,"td","dbname",i.dbname,16,null,null,null),A(1,"td","query-count",A(1,"span",l.countClassName,l.nbQueries,16,null,null,null),2,null,null,null)],o=0;o<5;o++){var u=l.topFiveQueries[o];a.push(A(1,"td",u.elapsedClassName,[A(1,"div",null,u.formatElapsed,16,null,null,null),A(1,"div","popover left",[A(1,"div","popover-content",u.query,16,null,null,null),A(1,"div","arrow",null,1,null,null,null)],4,null,null,null)],4,null,null,null))}t.push(A(1,"tr",null,a,4,null,null,null))}var c,s,f;c=A(1,"table","table table-striped",A(1,"tbody",null,t,4,null,null,null),2,null,null,null),void 0===s&&(s=null),void 0===f&&(f=C),function(e,n,t,r){var i=[],l=n.$V;v(l)?v(e)||(16384&e.flags&&(e=W(e)),He(e,n,r,!1,null,i),n.$V=e,l=e):v(e)?(Fe(l,n),n.$V=null):(16384&e.flags&&(e=W(e)),Ie(l,e,n,r,!1,null,i),l=n.$V=e),function(e){for(var n=0;n<e.length;n++)e[n]()}(i),g(t)&&t(),g(E.renderComplete)&&E.renderComplete(l,n)}(c,Be,s,f)}(n),function(e){var n=performance.now(),t=d["view update"];void 0!==t&&-1!==t.startTime&&(t.data.addSample(n-t.startTime),t.widget.invalidate())}()}),0)}();