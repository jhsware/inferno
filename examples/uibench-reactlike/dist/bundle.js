!function(){"use strict";function e(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,t)}var t=Array.isArray;function r(e){var n=typeof e;return"string"===n||"number"===n}function o(e){return void 0===e||null===e}function l(e){return null===e||!1===e||!0===e||void 0===e}function i(e){return"function"===typeof e}function a(e){return"string"===typeof e}function u(e){return null===e}function c(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function s(e){return!u(e)&&"object"===typeof e}var f={};function d(e){return e.substr(2).toLowerCase()}function p(e,n){e.appendChild(n)}function h(e,n,t){u(t)?p(e,n):e.insertBefore(n,t)}function v(e,n){e.removeChild(n)}function m(e){for(var n=0;n<e.length;n++)e[n]()}function g(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function y(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=g(e,n,t)}return null}function b(e,n){do{var t=e.flags;if(2033&t)return void v(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var o=0,l=r.length;o<l;++o)b(r[o],n);return}e=r}}while(e)}function $(e,n,t){do{var r=e.flags;if(2033&r)return void h(n,e.dom,t);var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)$(o[l],n,t);return}e=o}}while(e)}function k(e,n,t){if(e.constructor.getDerivedStateFromProps)return c(t,e.constructor.getDerivedStateFromProps(n,t));return t}var C={v:!1},w={componentComparator:null,createVNode:null,renderComplete:null};function U(e,n){e.textContent=n}function x(e,n){return s(e)&&e.event===n.event&&e.data===n.data}function P(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function F(e,n){return!!i(e)&&(e(n),!0)}var S="$";function N(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function V(e,n,o,i,c,s,f,d){var p=void 0===c?1:c,h=new N(p,i,o,e,f,s,d,n);return w.createVNode&&w.createVNode(h),0===p&&function(e,n){var o,i=1;if(l(n))o=n;else if(r(n))i=16,o=n;else if(t(n)){for(var c=n.length,s=0;s<c;++s){var f=n[s];if(l(f)||t(f)){o=o||n.slice(0,s),A(n,o,s,"");break}if(r(f))(o=o||n.slice(0,s)).push(I(f,S+s));else{var d=f.key,p=(81920&f.flags)>0,h=u(d),v=a(d)&&d[0]===S;p||h||v?(o=o||n.slice(0,s),(p||v)&&(f=M(f)),(h||v)&&(f.key=S+s),o.push(f)):o&&o.push(f),f.flags|=65536}}i=0===(o=o||n).length?1:8}else(o=n).flags|=65536,81920&n.flags&&(o=M(n)),i=2;e.children=o,e.childFlags=i}(h,h.children),h}function L(e,n,t,r,l){var i=new N(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),r,function(e,n,t){var r=(32768&e?n.render:n).defaultProps;if(o(r))return t;if(o(t))return c(r,null);return P(t,r)}(e,n,t),function(e,n,t){if(4&e)return t;var r=(32768&e?n.render:n).defaultHooks;if(o(r))return t;if(o(t))return r;return P(t,r)}(e,n,l),n);return w.createVNode&&w.createVNode(i),i}function I(e,n){return new N(1,o(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function B(e,n,t){var r=V(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=T(),r.childFlags=2;break;case 16:r.children=[I(e)],r.childFlags=4}return r}function M(e){var n=-16385&e.flags,t=e.props;if(14&n&&!u(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new N(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return B(2===t?M(n):n.map(M),t,e.key)}(e)}function T(){return I("",null)}function A(e,n,o,i){for(var c=e.length;o<c;o++){var s=e[o];if(!l(s)){var f=i+S+o;if(t(s))A(s,n,0,f);else{if(r(s))s=I(s,f);else{var d=s.key,p=a(d)&&d[0]===S;(81920&s.flags||p)&&(s=M(s)),s.flags|=65536,p?d.substring(0,i.length)!==i&&(s.key=i+d):u(d)?s.key=f:s.key=i+d}n.push(s)}}}}function D(e){if(l(e)||r(e))return I(e,null);if(t(e))return B(e,0,null);return 16384&e.flags?M(e):e}var E="http://www.w3.org/1999/xlink",O="http://www.w3.org/XML/1998/namespace",W={"xlink:actuate":E,"xlink:arcrole":E,"xlink:href":E,"xlink:role":E,"xlink:show":E,"xlink:title":E,"xlink:type":E,"xml:base":O,"xml:lang":O,"xml:space":O};function R(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var j=R(0),_=R(null),H=R(!0);function Q(e,n){var t=n.$EV;return t||(t=n.$EV=R(null)),t[e]||1===++j[e]&&(_[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();G(n,!0,e,z(n))}}(e):function(e){return function(n){G(n,!1,e,z(n))}}(e);return document.addEventListener(d(e),n),n}(e)),t}function X(e,n){var t=n.$EV;t&&t[e]&&(0===--j[e]&&(document.removeEventListener(d(e),_[e]),_[e]=null),t[e]=null)}function G(e,n,t,r){var o=function(e){return i(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&o.disabled)return;var l=o.$EV;if(l){var a=l[t];if(a&&(r.dom=o,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}o=o.parentNode}while(!u(o))}function K(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function q(){return this.defaultPrevented}function J(){return this.cancelBubble}function z(e){var n={dom:document};return e.isDefaultPrevented=q,e.isPropagationStopped=J,e.stopPropagation=K,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function Y(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function Z(e,n){var t=function(t){var r=this.$V;if(!r)return;var o=r.props||f,l=r.dom;if(a(e))Y(o,e,t);else for(var u=0;u<e.length;++u)Y(o,e[u],t);if(i(n)){var c=this.$V,s=c.props||f;n(s,l,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ee(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener(o[0],o[1]),e[r]=null}i(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ne(e){return"checkbox"===e||"radio"===e}var te=Z("onInput",le),re=Z(["onClick","onChange"],le);function oe(e){e.stopPropagation()}function le(e,n){var t=e.type,r=e.value,l=e.checked,i=e.multiple,a=e.defaultValue,u=!o(r);t&&t!==n.type&&n.setAttribute("type",t),o(i)||i===n.multiple||(n.multiple=i),o(a)||u||(n.defaultValue=a+""),ne(t)?(u&&(n.value=r),o(l)||(n.checked=l)):u&&n.value!==r?(n.defaultValue=r,n.value=r):o(l)||(n.checked=l)}function ie(e,n){if("option"===e.type)!function(e,n){var r=e.props||f,l=e.dom;l.value=r.value,r.value===n||t(n)&&-1!==n.indexOf(r.value)?l.selected=!0:o(n)&&o(r.selected)||(l.selected=r.selected||!1)}(e,n);else{var r=e.children,l=e.flags;if(4&l)ie(r.$LI,n);else if(8&l)ie(r,n);else if(2===e.childFlags)ie(r,n);else if(12&e.childFlags)for(var i=0,a=r.length;i<a;++i)ie(r[i],n)}}oe.wrapped=!0;var ae=Z("onChange",ue);function ue(e,n,t,r){var l=Boolean(e.multiple);o(e.multiple)||l===n.multiple||(n.multiple=l);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==r.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),t&&o(a)&&(a=e.defaultValue),ie(r,a)}}var ce,se,fe=Z("onInput",pe),de=Z("onChange");function pe(e,n,t){var r=e.value,l=n.value;if(o(r)){if(t){var i=e.defaultValue;o(i)||i===l||(n.defaultValue=i,n.value=i)}}else l!==r&&(n.defaultValue=r,n.value=r)}function he(e,n,t,r,o,l){64&e?le(r,t):256&e?ue(r,t,o,n):128&e&&pe(r,t,o),l&&(t.$V=n)}function ve(e){return e.type&&ne(e.type)?!o(e.checked):!o(e.value)}function me(e){e&&!F(e,null)&&e.current&&(e.current=null)}function ge(e,n,t){e&&(i(e)||void 0!==e.current)&&t.push((function(){F(e,n)||void 0===e.current||(e.current=n)}))}function ye(e,n){be(e),b(e,n)}function be(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var l=e.props;me(n);var a=e.childFlags;if(!u(l))for(var c=Object.keys(l),s=0,d=c.length;s<d;s++){var p=c[s];H[p]&&X(p,e.dom)}12&a?$e(r):2===a&&be(r)}else r&&(4&t?(i(r.componentWillUnmount)&&r.componentWillUnmount(),me(e.ref),r.$UN=!0,be(r.$LI)):8&t?(!o(n=e.ref)&&i(n.onComponentWillUnmount)&&n.onComponentWillUnmount(y(e,!0),e.props||f),be(r)):1024&t?ye(r,e.ref):8192&t&&12&e.childFlags&&$e(r))}function $e(e){for(var n=0,t=e.length;n<t;++n)be(e[n])}function ke(e){e.textContent=""}function Ce(e,n,t){$e(t),8192&n.flags?b(n,e):ke(e)}function we(e,n,t,r,l,c,f){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(c&&"value"===e)break;var p=o(t)?"":t;r[e]!==p&&(r[e]=p);break;case"style":!function(e,n,t){if(o(n))return void t.removeAttribute("style");var r,l,i=t.style;if(a(n))return void(i.cssText=n);if(o(e)||a(e))for(r in n)l=n[r],i.setProperty(r,l);else{for(r in n)(l=n[r])!==e[r]&&i.setProperty(r,l);for(r in e)o(n[r])&&i.removeProperty(r)}}(n,t,r);break;case"dangerouslySetInnerHTML":!function(e,n,t,r){var l=e&&e.__html||"",i=n&&n.__html||"";l!==i&&(o(i)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(r,i)||(u(t)||(12&t.childFlags?$e(t.children):2===t.childFlags&&be(t.children),t.children=null,t.childFlags=1),r.innerHTML=i))}(n,t,f,r);break;default:H[e]?function(e,n,t,r){if(i(t))Q(e,r)[e]=t;else if(s(t)){if(x(n,t))return;Q(e,r)[e]=t}else X(e,r)}(e,n,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(s(t)){if(x(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}ee(r,d(e),t)}(e,n,t,r):o(t)?r.removeAttribute(e):l&&W[e]?r.setAttributeNS(W[e],e,t):r.setAttribute(e,t)}}function Ue(e,n,t){var r=D(e.render(n,e.state,t)),o=t;return i(e.getChildContext)&&(o=c(t,e.getChildContext())),e.$CX=o,r}function xe(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function Pe(e,n,t,r,l,a){var c=e.flags|=16384;481&c?function(e,n,t,r,l,i){var a=e.flags,c=e.props,s=e.className,f=e.childFlags,d=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,r=r||(32&a)>0),p=e.children;if(o(s)||""===s||(r?d.setAttribute("class",s):d.className=s),16===f)U(d,p);else if(1!==f){var v=r&&"foreignObject"!==e.type;2===f?(16384&p.flags&&(e.children=p=M(p)),Pe(p,d,t,v,null,i)):8!==f&&4!==f||Se(p,d,t,v,null,i)}u(n)||h(n,d,l),u(c)||function(e,n,t,r,o){var l=!1,i=(448&n)>0;for(var a in i&&(l=ve(t))&&function(e,n,t){64&e?function(e,n){ne(n.type)?(ee(e,"change",re),ee(e,"click",oe)):ee(e,"input",te)}(n,t):256&e?function(e){ee(e,"change",ae)}(n):128&e&&function(e,n){ee(e,"input",fe),n.onChange&&ee(e,"change",de)}(n,t)}(n,r,t),t)we(a,null,t[a],r,o,l,null);i&&he(n,e,r,t,!0,l)}(e,a,c,d,r),ge(e.ref,d,i)}(e,n,t,r,l,a):4&c?function(e,n,t,r,o,l){var a=function(e,n,t,r,o,l){var a=new n(t,r),c=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=o,a.$L=l,e.children=a,a.$BS=!1,a.context=r,a.props===f&&(a.props=t),c)a.state=k(a,t,a.state);else if(i(a.componentWillMount)){a.$BR=!0,a.componentWillMount();var s=a.$PS;if(!u(s)){var d=a.state;if(u(d))a.state=s;else for(var p in s)d[p]=s[p];a.$PS=null}a.$BR=!1}return a.$LI=Ue(a,t,r),a}(e,e.type,e.props||f,t,r,l);Pe(a.$LI,n,a.$CX,r,o,l),function(e,n,t){ge(e,n,t),i(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}(e.ref,a,l)}(e,n,t,r,l,a):8&c?(function(e,n,t,r,o,l){Pe(e.children=D(xe(e,t)),n,t,r,o,l)}(e,n,t,r,l,a),function(e,n){var t=e.ref;o(t)||(F(t.onComponentWillMount,e.props||f),i(t.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(y(n,!0),n.props||f)}}(t,e)))}(e,a)):512&c||16&c?Fe(e,n,l):8192&c?function(e,n,t,r,o,l){var i=e.children,a=e.childFlags;12&a&&0===i.length&&(a=e.childFlags=2,i=e.children=T()),2===a?Pe(i,t,o,r,o,l):Se(i,t,n,r,o,l)}(e,t,n,r,l,a):1024&c&&function(e,n,t,r,o){Pe(e.children,e.ref,n,!1,null,o);var l=T();Fe(l,t,r),e.dom=l.dom}(e,t,n,l,a)}function Fe(e,n,t){var r=e.dom=document.createTextNode(e.children);u(n)||h(n,r,t)}function Se(e,n,t,r,o,l){for(var i=0;i<e.length;++i){var a=e[i];16384&a.flags&&(e[i]=a=M(a)),Pe(a,n,t,r,o,l)}}function Ne(e,n,t,r,a,s,d){var h=n.flags|=16384;e.flags!==h||e.type!==n.type||e.key!==n.key||2048&h?16384&e.flags?function(e,n,t,r,o,l){be(e),0!==(n.flags&e.flags&2033)?(Pe(n,null,r,o,null,l),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(Pe(n,t,r,o,y(e,!0),l),b(e,t))}(e,n,t,r,a,d):Pe(n,t,r,a,s,d):481&h?function(e,n,t,r,l,i){var a,u=n.dom=e.dom,c=e.props,s=n.props,d=!1,p=!1;if(r=r||(32&l)>0,c!==s){var h=c||f;if((a=s||f)!==f)for(var v in(d=(448&l)>0)&&(p=ve(a)),a){var m=h[v],g=a[v];m!==g&&we(v,m,g,u,r,p,e)}if(h!==f)for(var y in h)o(a[y])&&!o(h[y])&&we(y,h[y],null,u,r,p,e)}var b=n.children,$=n.className;e.className!==$&&(o($)?u.removeAttribute("class"):r?u.setAttribute("class",$):u.className=$),4096&l?function(e,n){e.textContent!==n&&(e.textContent=n)}(u,b):Ve(e.childFlags,n.childFlags,e.children,b,u,t,r&&"foreignObject"!==n.type,null,e,i),d&&he(l,n,u,a,!1,p);var k=n.ref,C=e.ref;C!==k&&(me(C),ge(k,u,i))}(e,n,r,a,h,d):4&h?function(e,n,t,r,o,l,a){var s=n.children=e.children;if(u(s))return;s.$L=a;var d=n.props||f,p=n.ref,h=e.ref,v=s.state;if(!s.$N){if(i(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(d,r),s.$UN)return;s.$BR=!1}u(s.$PS)||(v=c(v,s.$PS),s.$PS=null)}Le(s,v,d,t,r,o,!1,l,a),h!==p&&(me(h),ge(p,s,a))}(e,n,t,r,a,s,d):8&h?function(e,n,t,r,l,a,u){var c=!0,s=n.props||f,d=n.ref,p=e.props,h=!o(d),v=e.children;if(h&&i(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,s)),!1!==c){h&&i(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,s);var m=D(xe(n,r));Ne(v,m,t,r,l,a,u),n.children=m,h&&i(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,s)}else n.children=v}(e,n,t,r,a,s,d):16&h?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&h?n.dom=e.dom:8192&h?function(e,n,t,r,o,l){var i=e.children,a=n.children,u=e.childFlags,c=n.childFlags,s=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=T());var f=0!==(2&c);if(12&u){var d=i.length;(8&u&&8&c||f||!f&&a.length>d)&&(s=y(i[d-1],!1).nextSibling)}Ve(u,c,i,a,t,r,o,s,e,l)}(e,n,t,r,a,d):function(e,n,t,r){var o=e.ref,i=n.ref,a=n.children;if(Ve(e.childFlags,n.childFlags,e.children,a,o,t,!1,null,e,r),n.dom=e.dom,o!==i&&!l(a)){var u=a.dom;v(o,u),p(i,u)}}(e,n,r,d)}function Ve(e,n,t,r,o,l,i,a,u,c){switch(e){case 2:switch(n){case 2:Ne(t,r,o,l,i,a,c);break;case 1:ye(t,o);break;case 16:be(t),U(o,r);break;default:!function(e,n,t,r,o,l){be(e),Se(n,t,r,o,y(e,!0),l),b(e,t)}(t,r,o,l,i,c)}break;case 1:switch(n){case 2:Pe(r,o,l,i,a,c);break;case 1:break;case 16:U(o,r);break;default:Se(r,o,l,i,a,c)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:U(t,n))}(t,r,o);break;case 2:ke(o),Pe(r,o,l,i,a,c);break;case 1:ke(o);break;default:ke(o),Se(r,o,l,i,a,c)}break;default:switch(n){case 16:$e(t),U(o,r);break;case 2:Ce(o,u,t),Pe(r,o,l,i,a,c);break;case 1:Ce(o,u,t);break;default:var s=0|t.length,f=0|r.length;0===s?f>0&&Se(r,o,l,i,a,c):0===f?Ce(o,u,t):8===n&&8===e?function(e,n,t,r,o,l,i,a,u,c){var s,f,d=l-1,p=i-1,h=0,v=e[h],m=n[h];e:{for(;v.key===m.key;){if(16384&m.flags&&(n[h]=m=M(m)),Ne(v,m,t,r,o,a,c),e[h]=m,++h>d||h>p)break e;v=e[h],m=n[h]}for(v=e[d],m=n[p];v.key===m.key;){if(16384&m.flags&&(n[p]=m=M(m)),Ne(v,m,t,r,o,a,c),e[d]=m,p--,h>--d||h>p)break e;v=e[d],m=n[p]}}if(h>d){if(h<=p)for(f=(s=p+1)<i?y(n[s],!0):a;h<=p;)16384&(m=n[h]).flags&&(n[h]=m=M(m)),++h,Pe(m,t,r,o,f,c)}else if(h>p)for(;h<=d;)ye(e[h++],t);else!function(e,n,t,r,o,l,i,a,u,c,s,f,d){var p,h,v,m=0,g=a,b=a,k=l-a+1,C=i-a+1,w=new Int32Array(C+1),U=k===r,x=!1,P=0,F=0;if(o<4||(k|C)<32)for(m=g;m<=l;++m)if(p=e[m],F<C){for(a=b;a<=i;a++)if(h=n[a],p.key===h.key){if(w[a-b]=m+1,U)for(U=!1;g<m;)ye(e[g++],u);P>a?x=!0:P=a,16384&h.flags&&(n[a]=h=M(h)),Ne(p,h,u,t,c,s,d),++F;break}!U&&a>i&&ye(p,u)}else U||ye(p,u);else{var S={};for(m=b;m<=i;++m)S[n[m].key]=m;for(m=g;m<=l;++m)if(p=e[m],F<C)if(void 0!==(a=S[p.key])){if(U)for(U=!1;m>g;)ye(e[g++],u);w[a-b]=m+1,P>a?x=!0:P=a,16384&(h=n[a]).flags&&(n[a]=h=M(h)),Ne(p,h,u,t,c,s,d),++F}else U||ye(p,u);else U||ye(p,u)}if(U)Ce(u,f,e),Se(n,u,t,c,s,d);else if(x){var N=function(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(u>Ie&&(Ie=u,ce=new Int32Array(u),se=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=ce[o]]<n){se[t]=r,ce[++o]=t;continue}for(l=0,i=o;l<i;)e[ce[a=l+i>>1]]<n?l=a+1:i=a;n<e[ce[l]]&&(l>0&&(se[t]=ce[l-1]),ce[l]=t)}l=o+1;var c=new Int32Array(l);for(i=ce[l-1];l-- >0;)c[l]=i,i=se[i],ce[l]=0;return c}(w);for(a=N.length-1,m=C-1;m>=0;m--)0===w[m]?(16384&(h=n[P=m+b]).flags&&(n[P]=h=M(h)),Pe(h,u,t,c,(v=P+1)<o?y(n[v],!0):s,d)):a<0||m!==N[a]?$(h=n[P=m+b],u,(v=P+1)<o?y(n[v],!0):s):a--}else if(F!==C)for(m=C-1;m>=0;m--)0===w[m]&&(16384&(h=n[P=m+b]).flags&&(n[P]=h=M(h)),Pe(h,u,t,c,(v=P+1)<o?y(n[v],!0):s,d))}(e,n,r,l,i,d,p,h,t,o,a,u,c)}(t,r,o,l,i,s,f,a,u,c):function(e,n,t,r,o,l,i,a,u){for(var c,s,f=l>i?i:l,d=0;d<f;++d)c=n[d],s=e[d],16384&c.flags&&(c=n[d]=M(c)),Ne(s,c,t,r,o,a,u),e[d]=c;if(l<i)for(d=f;d<i;++d)16384&(c=n[d]).flags&&(c=n[d]=M(c)),Pe(c,t,r,o,a,u);else if(l>i)for(d=f;d<l;++d)ye(e[d],t)}(t,r,o,l,i,s,f,a,c)}}}function Le(e,n,t,r,o,l,a,u,s){var f=e.state,d=e.props,p=Boolean(e.$N),h=i(e.shouldComponentUpdate);if(p&&(n=k(e,t,n!==f?c(f,n):n)),a||!h||h&&e.shouldComponentUpdate(t,n,o)){!p&&i(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var v=null,m=Ue(e,t,o);p&&i(e.getSnapshotBeforeUpdate)&&(v=e.getSnapshotBeforeUpdate(d,f)),Ne(e.$LI,m,r,e.$CX,l,u,s),e.$LI=m,i(e.componentDidUpdate)&&function(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}(e,d,f,v,s)}else e.props=t,e.state=n,e.context=o}var Ie=0;function Be(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=f),function(e,n,t,r){var l=[],a=n.$V;C.v=!0,o(a)?o(e)||(16384&e.flags&&(e=M(e)),Pe(e,n,r,!1,null,l),n.$V=e,a=e):o(e)?(ye(a,n),n.$V=null):(16384&e.flags&&(e=M(e)),Ne(a,e,n,r,!1,null,l),a=n.$V=e),m(l),C.v=!1,i(t)&&t(),i(w.renderComplete)&&w.renderComplete(a,n)}(e,n,t,r)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Me=[],Te="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Ae=!1;function De(e,n,t,r){var l=e.$PS;if(i(n)&&(n=n(l?c(e.state,l):e.state,e.props,e.context)),o(l))e.$PS=n;else for(var a in n)l[a]=n[a];if(e.$BR)i(t)&&e.$L.push(t.bind(e));else{if(!C.v&&0===Me.length)return We(e,r),void(i(t)&&t.call(e));if(-1===Me.indexOf(e)&&Me.push(e),r&&(e.$F=!0),Ae||(Ae=!0,Te(Oe)),i(t)){var u=e.$QU;u||(u=e.$QU=[]),u.push(t)}}}function Ee(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function Oe(){var e;for(Ae=!1;e=Me.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,We(e,n),e.$QU&&Ee(e)}}function We(e,n){if(n||!e.$BR){var t=e.$PS;e.$PS=null;var r=[];C.v=!0,Le(e,c(e.state,t),e.props,y(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,r),m(r),C.v=!1}else e.state=e.$PS,e.$PS=null}var Re=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||f,this.context=n||f};Re.prototype.forceUpdate=function(e){if(this.$UN)return;De(this,{},e,!0)},Re.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||De(this,e,n,!1)},Re.prototype.render=function(e,n,t){return null},uibench.init("Inferno [same as react]","7.4.8");var je=function(n){function t(e){var t;return(t=n.call(this,e)||this).onClick=t.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.text!==e.text},r.onClick=function(e){console.log("Clicked"+this.props.text),e.stopPropagation()},r.render=function(){return V(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},t}(Re),_e=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data,n=e.active?"TableRow active":"TableRow",t=e.props,r=[L(2,je,{text:"#"+e.id},-1,null)],o=0;o<t.length;o++)r.push(L(2,je,{text:t[o]},o,null));return V(1,"tr",n,r,0,{"data-id":e.id},null,null)},t}(Re),He=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(L(2,_e,{data:r},r.id,null))}return V(1,"table","Table",V(1,"tbody",null,n,0,null,null,null),2,null,null,null)},t}(Re),Qe=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){var e=this.props.data,n=e.time,t={"border-radius":(n%10).toString()+"px",background:"rgba(0,0,0,"+(.5+n%10/10).toString()+")"};return V(1,"div","AnimBox",null,1,{"data-id":e.id,style:t},null,null)},t}(Re),Xe=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data.items,n=[],t=0;t<e.length;t++){var r=e[t];n.push(L(2,Qe,{data:r},r.id,null))}return V(1,"div","Anim",n,0,null,null,null)},t}(Re),Ge=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){return V(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},t}(Re),Ke=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){for(var e=this.props.data,n=[],r=0;r<e.children.length;r++){var o=e.children[r];o.container?n.push(L(2,t,{data:o},o.id,null)):n.push(L(2,Ge,{data:o},o.id,null))}return V(1,"ul","TreeNode",n,0,null,null,null)},t}(Re),qe=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){return V(1,"div","Tree",L(2,Ke,{data:this.props.data.root},null,null),2,null,null,null)},t}(Re),Je=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.shouldComponentUpdate=function(e,n){return this.props.data!==e.data},r.render=function(){var e,n=this.props.data,t=n.location;return"table"===t?e=L(2,He,{data:n.table},null,null):"anim"===t?e=L(2,Xe,{data:n.anim},null,null):"tree"===t&&(e=L(2,qe,{data:n.tree},null,null)),V(1,"div","Main",e,0,null,null,null)},t}(Re);document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){Be(L(2,Je,{data:e},null,null),n)}),(function(e){Be(V(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)}))}))}();