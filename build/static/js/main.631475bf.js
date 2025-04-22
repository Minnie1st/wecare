/*! For license information please see main.631475bf.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},153:(e,t,r)=>{"use strict";var n=r(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function x(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var y=b.prototype=new x;y.constructor=b,g(y,v.prototype),y.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var i,a={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=t[i]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===a[i]&&(a[i]=s[i]);return{$$typeof:r,type:e,key:o,ref:l,props:a,_owner:j.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return o=o(s=e),e=""===a?"."+O(s,0):a,w(o)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),R(o,t,i,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+O(l=e[c],c);s+=R(l,t,i,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=R(l=l.value,t,i,u=a+O(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,r){if(null==e)return e;var n=[],i=0;return R(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},L={transition:null},A={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:L,ReactCurrentOwner:j};function z(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=z,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),a=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:r,type:e.type,key:a,ref:o,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=z,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,r){return N.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,r){return N.current.useReducer(e,t,r)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return N.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},219:(e,t,r)=>{"use strict";var n=r(763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return n.isMemo(e)?o:l[e.$$typeof]||i}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=o;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var i=f(r);i&&i!==h&&e(t,i,n)}var o=u(r);d&&(o=o.concat(d(r)));for(var l=s(t),g=s(r),m=0;m<o.length;++m){var v=o[m];if(!a[v]&&(!n||!n[v])&&(!g||!g[v])&&(!l||!l[v])){var x=p(r,v);try{c(t,v,x)}catch(b){}}}}return t}},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(!(0<a(i,t)))break e;e[n]=t,e[r]=i,r=n}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,o=i>>>1;n<o;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,r))c<i&&0>a(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else{if(!(c<i&&0>a(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=n(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(m=!1,y(e),!g)if(null!==n(c))g=!0,L(k);else{var t=n(u);null!==t&&A(w,t.startTime-e)}}function k(e,r){g=!1,m&&(m=!1,x(P),P=-1),h=!0;var a=f;try{for(y(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!R());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var l=o(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?p.callback=l:p===n(c)&&i(c),y(r)}else i(c);p=n(c)}if(null!==p)var s=!0;else{var d=n(u);null!==d&&A(w,d.startTime-r),s=!1}return s}finally{p=null,f=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,C=null,P=-1,E=5,O=-1;function R(){return!(t.unstable_now()-O<E)}function T(){if(null!==C){var e=t.unstable_now();O=e;var r=!0;try{r=C(!0,e)}finally{r?j():(S=!1,C=null)}}else S=!1}if("function"===typeof b)j=function(){b(T)};else if("undefined"!==typeof MessageChannel){var _=new MessageChannel,N=_.port2;_.port1.onmessage=T,j=function(){N.postMessage(null)}}else j=function(){v(T,0)};function L(e){C=e,S||(S=!0,j())}function A(e,r){P=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,L(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>o?(e.sortIndex=a,r(u,e),null===n(c)&&e===n(u)&&(m?(x(P),P=-1):m=!0,A(w,a-o))):(e.sortIndex=l,r(c,e),g||h||(g=!0,L(k))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},324:e=>{e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(i=r?r.call(n,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},528:(e,t)=>{"use strict";var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),g=Symbol.for("react.client.reference");function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case o:case a:case u:case d:return e;default:switch(e=e&&e.$$typeof){case s:case c:case f:case p:case l:return e;default:return t}}case n:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===o||e===a||e===u||e===d||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===g||void 0!==e.getModuleId)},t.QP=m},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),i=r(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function g(e,t,r,n,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function b(e,t,r,n){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,i,n)&&(r=null),n||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=null===r?3!==i.type&&"":r:(t=i.attributeName,n=i.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(i=i.type)||4===i&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,x);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,x);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,x);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var y=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),E=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function z(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var D,I=Object.assign;function F(e){if(void 0===D)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var M=!1;function U(e,t){if(!e||M)return"";M=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=n.stack.split("\n"),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(1!==o||1!==l)do{if(o--,0>--l||i[o]!==a[l]){var s="\n"+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function $(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1);case 11:return e=U(e.type.render,!1);case 1:return e=U(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case _:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return B(e(t))}catch(r){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=W(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function J(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=H(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){G(e,t);var r=H(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&Y(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+H(r),t=null,i=0;i<e.length;i++){if(e[i].value===r)return e[i].selected=!0,void(n&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(a(92));if(te(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:H(r)}}function ae(e,t){var r=H(t.value),n=H(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function me(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),i=ge(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ce(e){if(e=bi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Pe(e){je?Se?Se.push(e):Se=[e]:je=e}function Ee(){if(je){var e=je,t=Se;if(Se=je=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Oe(e,t){return e(t)}function Re(){}var Te=!1;function _e(e,t,r){if(Te)return e(t,r);Te=!0;try{return Oe(e,t,r)}finally{Te=!1,(null!==je||null!==Se)&&(Re(),Ee())}}function Ne(e,t){var r=e.stateNode;if(null===r)return null;var n=wi(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(a(231,t,typeof r));return r}var Le=!1;if(u)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ue){Le=!1}function ze(e,t,r,n,i,a,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var De=!1,Ie=null,Fe=!1,Me=null,Ue={onError:function(e){De=!0,Ie=e}};function $e(e,t,r,n,i,a,o,l,s){De=!1,Ie=null,ze.apply(Ue,arguments)}function Be(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(n=i.return)){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return He(i),e;if(o===n)return He(i),t;o=o.sibling}throw Error(a(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(3!==r.tag)throw Error(a(188));return r.stateNode.current===r?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Ye=i.unstable_cancelCallback,Qe=i.unstable_shouldYield,Je=i.unstable_requestPaint,Ge=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,rt=i.unstable_LowPriority,nt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&r;if(0!==o){var l=o&~i;0!==l?n=dt(l):0!==(a&=o)&&(n=dt(a))}else 0!==(o=r&~i)?n=dt(o):0!==a&&(n=dt(a));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&i)&&((i=n&-n)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)i=1<<(r=31-ot(t)),n|=e[r],t&=~i;return n}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function mt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=r}function xt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var bt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,jt,St,Ct,Pt=!1,Et=[],Ot=null,Rt=null,Tt=null,_t=new Map,Nt=new Map,Lt=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":_t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Dt(e,t,r,n,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&kt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=xi(e.target);if(null!==t){var r=Be(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Ve(r)))return e.blockedOn=t,void Ct(e.priority,(function(){jt(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=bi(r))&&kt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);ye=n,r.target.dispatchEvent(n),ye=null,t.shift()}return!0}function Mt(e,t,r){Ft(e)&&r.delete(t)}function Ut(){Pt=!1,null!==Ot&&Ft(Ot)&&(Ot=null),null!==Rt&&Ft(Rt)&&(Rt=null),null!==Tt&&Ft(Tt)&&(Tt=null),_t.forEach(Mt),Nt.forEach(Mt)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ut)))}function Bt(e){function t(t){return $t(t,e)}if(0<Et.length){$t(Et[0],e);for(var r=1;r<Et.length;r++){var n=Et[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Ot&&$t(Ot,e),null!==Rt&&$t(Rt,e),null!==Tt&&$t(Tt,e),_t.forEach(t),Nt.forEach(t),r=0;r<Lt.length;r++)(n=Lt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Lt.length&&null===(r=Lt[0]).blockedOn;)It(r),null===r.blockedOn&&Lt.shift()}var Vt=y.ReactCurrentBatchConfig,Ht=!0;function Wt(e,t,r,n){var i=bt,a=Vt.transition;Vt.transition=null;try{bt=1,Kt(e,t,r,n)}finally{bt=i,Vt.transition=a}}function qt(e,t,r,n){var i=bt,a=Vt.transition;Vt.transition=null;try{bt=4,Kt(e,t,r,n)}finally{bt=i,Vt.transition=a}}function Kt(e,t,r,n){if(Ht){var i=Qt(e,t,r,n);if(null===i)Hn(e,t,n,Yt,r),zt(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return Ot=Dt(Ot,e,t,r,n,i),!0;case"dragenter":return Rt=Dt(Rt,e,t,r,n,i),!0;case"mouseover":return Tt=Dt(Tt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return _t.set(a,Dt(_t.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Nt.set(a,Dt(Nt.get(a)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(zt(e,n),4&t&&-1<At.indexOf(e)){for(;null!==i;){var a=bi(i);if(null!==a&&wt(a),null===(a=Qt(e,t,r,n))&&Hn(e,t,n,Yt,r),a===i)break;i=a}null!==i&&n.stopPropagation()}else Hn(e,t,n,null,r)}}var Yt=null;function Qt(e,t,r,n){if(Yt=null,null!==(e=xi(e=we(n))))if(null===(t=Be(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Jt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Gt=null,Xt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Xt,n=r.length,i="value"in Gt?Gt.value:Gt.textContent,a=i.length;for(e=0;e<n&&r[e]===i[e];e++);var o=n-e;for(t=1;t<=o&&r[n-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function ir(e){function t(t,r,n,i,a){for(var o in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ar,or,lr,sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ir(sr),ur=I({},sr,{view:0,detail:0}),dr=ir(ur),pr=I({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ar=e.screenX-lr.screenX,or=e.screenY-lr.screenY):or=ar=0,lr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:or}}),fr=ir(pr),hr=ir(I({},pr,{dataTransfer:0})),gr=ir(I({},ur,{relatedTarget:0})),mr=ir(I({},sr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=I({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xr=ir(vr),br=ir(I({},sr,{data:0})),yr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function Sr(){return jr}var Cr=I({},ur,{key:function(e){if(e.key){var t=yr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pr=ir(Cr),Er=ir(I({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Or=ir(I({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),Rr=ir(I({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tr=I({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_r=ir(Tr),Nr=[9,13,27,32],Lr=u&&"CompositionEvent"in window,Ar=null;u&&"documentMode"in document&&(Ar=document.documentMode);var zr=u&&"TextEvent"in window&&!Ar,Dr=u&&(!Lr||Ar&&8<Ar&&11>=Ar),Ir=String.fromCharCode(32),Fr=!1;function Mr(e,t){switch(e){case"keyup":return-1!==Nr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $r=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Hr(e,t,r,n){Pe(n),0<(t=qn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,qr=null;function Kr(e){Fn(e,0)}function Yr(e){if(K(yi(e)))return e}function Qr(e,t){if("change"===e)return t}var Jr=!1;if(u){var Gr;if(u){var Xr="oninput"in document;if(!Xr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Xr="function"===typeof Zr.oninput}Gr=Xr}else Gr=!1;Jr=Gr&&(!document.documentMode||9<document.documentMode)}function en(){Wr&&(Wr.detachEvent("onpropertychange",tn),qr=Wr=null)}function tn(e){if("value"===e.propertyName&&Yr(qr)){var t=[];Hr(t,qr,e,we(e)),_e(Kr,t)}}function rn(e,t,r){"focusin"===e?(en(),qr=r,(Wr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yr(qr)}function an(e,t){if("click"===e)return Yr(t)}function on(e,t){if("input"===e||"change"===e)return Yr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!d.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function un(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=Y((e=t.contentWindow).document)}return t}function fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&fn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=void 0===n.end?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=un(r,a);var o=un(r,n);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gn=u&&"documentMode"in document&&11>=document.documentMode,mn=null,vn=null,xn=null,bn=!1;function yn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==mn||mn!==Y(n)||("selectionStart"in(n=mn)&&fn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},xn&&sn(xn,n)||(xn=n,0<(n=qn(vn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=mn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},jn={},Sn={};function Cn(e){if(jn[e])return jn[e];if(!kn[e])return e;var t,r=kn[e];for(t in r)if(r.hasOwnProperty(t)&&t in Sn)return jn[e]=r[t];return e}u&&(Sn=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);var Pn=Cn("animationend"),En=Cn("animationiteration"),On=Cn("animationstart"),Rn=Cn("transitionend"),Tn=new Map,_n="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Tn.set(e,t),s(t,[e])}for(var Ln=0;Ln<_n.length;Ln++){var An=_n[Ln];Nn(An.toLowerCase(),"on"+(An[0].toUpperCase()+An.slice(1)))}Nn(Pn,"onAnimationEnd"),Nn(En,"onAnimationIteration"),Nn(On,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Rn,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dn=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,i,o,l,s,c){if($e.apply(this,arguments),De){if(!De)throw Error(a(198));var u=Ie;De=!1,Ie=null,Fe||(Fe=!0,Me=u)}}(n,t,void 0,e),e.currentTarget=null}function Fn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;In(i,l,c),a=s}else for(o=0;o<n.length;o++){if(s=(l=n[o]).instance,c=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;In(i,l,c),a=s}}}if(Fe)throw e=Me,Fe=!1,Me=null,e}function Mn(e,t){var r=t[gi];void 0===r&&(r=t[gi]=new Set);var n=e+"__bubble";r.has(n)||(Vn(t,e,2,!1),r.add(n))}function Un(e,t,r){var n=0;t&&(n|=4),Vn(r,e,n,t)}var $n="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[$n]){e[$n]=!0,o.forEach((function(t){"selectionchange"!==t&&(Dn.has(t)||Un(t,!1,e),Un(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$n]||(t[$n]=!0,Un("selectionchange",!1,t))}}function Vn(e,t,r,n){switch(Jt(t)){case 1:var i=Wt;break;case 4:i=qt;break;default:i=Kt}r=i.bind(null,t,r,e),i=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Hn(e,t,r,n,i){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var o=n.tag;if(3===o||4===o){var l=n.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===o)for(o=n.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;o=o.return}for(;null!==l;){if(null===(o=xi(l)))return;if(5===(s=o.tag)||6===s){n=a=o;continue e}l=l.parentNode}}n=n.return}_e((function(){var n=a,i=we(r),o=[];e:{var l=Tn.get(e);if(void 0!==l){var s=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":s=Pr;break;case"focusin":c="focus",s=gr;break;case"focusout":c="blur",s=gr;break;case"beforeblur":case"afterblur":s=gr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Or;break;case Pn:case En:case On:s=mr;break;case Rn:s=Rr;break;case"scroll":s=dr;break;case"wheel":s=_r;break;case"copy":case"cut":case"paste":s=xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Er}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=n;null!==h;){var g=(f=h).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==p&&(null!=(g=Ne(h,p))&&u.push(Wn(h,g,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,r,i),o.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||r===ye||!(c=r.relatedTarget||r.fromElement)||!xi(c)&&!c[hi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=n,null!==(c=(c=r.relatedTarget||r.toElement)?xi(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=n),s!==c)){if(u=fr,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Er,g="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:yi(s),f=null==c?l:yi(c),(l=new u(g,h+"leave",s,r,i)).target=d,l.relatedTarget=f,g=null,xi(i)===n&&((u=new u(p,h+"enter",c,r,i)).target=f,u.relatedTarget=d,g=u),d=g,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kn(f))h++;for(f=0,g=p;g;g=Kn(g))f++;for(;0<h-f;)u=Kn(u),h--;for(;0<f-h;)p=Kn(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kn(u),p=Kn(p)}u=null}else u=null;null!==s&&Yn(o,l,s,u,!1),null!==c&&null!==d&&Yn(o,d,c,u,!0)}if("select"===(s=(l=n?yi(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Qr;else if(Vr(l))if(Jr)m=on;else{m=nn;var v=rn}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=an);switch(m&&(m=m(e,n))?Hr(o,m,r,i):(v&&v(e,l,n),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=n?yi(n):window,e){case"focusin":(Vr(v)||"true"===v.contentEditable)&&(mn=v,vn=n,xn=null);break;case"focusout":xn=vn=mn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,yn(o,r,i);break;case"selectionchange":if(gn)break;case"keydown":case"keyup":yn(o,r,i)}var x;if(Lr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $r?Mr(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Dr&&"ko"!==r.locale&&($r||"onCompositionStart"!==b?"onCompositionEnd"===b&&$r&&(x=er()):(Xt="value"in(Gt=i)?Gt.value:Gt.textContent,$r=!0)),0<(v=qn(n,b)).length&&(b=new br(b,e,null,r,i),o.push({event:b,listeners:v}),x?b.data=x:null!==(x=Ur(r))&&(b.data=x))),(x=zr?function(e,t){switch(e){case"compositionend":return Ur(t);case"keypress":return 32!==t.which?null:(Fr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Fr?null:e;default:return null}}(e,r):function(e,t){if($r)return"compositionend"===e||!Lr&&Mr(e,t)?(e=er(),Zt=Xt=Gt=null,$r=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=qn(n,"onBeforeInput")).length&&(i=new br("onBeforeInput","beforeinput",null,r,i),o.push({event:i,listeners:n}),i.data=x))}Fn(o,t)}))}function Wn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qn(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Ne(e,r))&&n.unshift(Wn(e,a,i)),null!=(a=Ne(e,t))&&n.push(Wn(e,a,i))),e=e.return}return n}function Kn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yn(e,t,r,n,i){for(var a=t._reactName,o=[];null!==r&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(null!==s&&s===n)break;5===l.tag&&null!==c&&(l=c,i?null!=(s=Ne(r,a))&&o.unshift(Wn(r,s,l)):i||null!=(s=Ne(r,a))&&o.push(Wn(r,s,l))),r=r.return}0!==o.length&&e.push({event:t,listeners:o})}var Qn=/\r\n?/g,Jn=/\u0000|\uFFFD/g;function Gn(e){return("string"===typeof e?e:""+e).replace(Qn,"\n").replace(Jn,"")}function Xn(e,t,r){if(t=Gn(t),Gn(e)!==t&&r)throw Error(a(425))}function Zn(){}var ei=null,ti=null;function ri(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ni="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(li)}:ni;function li(e){setTimeout((function(){throw e}))}function si(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType)if("/$"===(r=i.data)){if(0===n)return e.removeChild(i),void Bt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=i}while(r);Bt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,vi="__reactHandles$"+di;function xi(e){var t=e[pi];if(t)return t;for(var r=e.parentNode;r;){if(t=r[hi]||r[pi]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=ui(e);null!==e;){if(r=e[pi])return r;e=ui(e)}return t}r=(e=r).parentNode}return null}function bi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function yi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[fi]||null}var ki=[],ji=-1;function Si(e){return{current:e}}function Ci(e){0>ji||(e.current=ki[ji],ki[ji]=null,ji--)}function Pi(e,t){ji++,ki[ji]=e.current,e.current=t}var Ei={},Oi=Si(Ei),Ri=Si(!1),Ti=Ei;function _i(e,t){var r=e.type.contextTypes;if(!r)return Ei;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in r)a[i]=t[i];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ni(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Li(){Ci(Ri),Ci(Oi)}function Ai(e,t,r){if(Oi.current!==Ei)throw Error(a(168));Pi(Oi,t),Pi(Ri,r)}function zi(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var i in n=n.getChildContext())if(!(i in t))throw Error(a(108,V(e)||"Unknown",i));return I({},r,n)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Ti=Oi.current,Pi(Oi,e),Pi(Ri,Ri.current),!0}function Ii(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=zi(e,t,Ti),n.__reactInternalMemoizedMergedChildContext=e,Ci(Ri),Ci(Oi),Pi(Oi,e)):Ci(Ri),Pi(Ri,r)}var Fi=null,Mi=!1,Ui=!1;function $i(e){null===Fi?Fi=[e]:Fi.push(e)}function Bi(){if(!Ui&&null!==Fi){Ui=!0;var e=0,t=bt;try{var r=Fi;for(bt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Fi=null,Mi=!1}catch(i){throw null!==Fi&&(Fi=Fi.slice(e+1)),Ke(Ze,Bi),i}finally{bt=t,Ui=!1}}return null}var Vi=[],Hi=0,Wi=null,qi=0,Ki=[],Yi=0,Qi=null,Ji=1,Gi="";function Xi(e,t){Vi[Hi++]=qi,Vi[Hi++]=Wi,Wi=e,qi=t}function Zi(e,t,r){Ki[Yi++]=Ji,Ki[Yi++]=Gi,Ki[Yi++]=Qi,Qi=e;var n=Ji;e=Gi;var i=32-ot(n)-1;n&=~(1<<i),r+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Ji=1<<32-ot(t)+i|r<<i|n,Gi=a+e}else Ji=1<<a|r<<i|n,Gi=e}function ea(e){null!==e.return&&(Xi(e,1),Zi(e,1,0))}function ta(e){for(;e===Wi;)Wi=Vi[--Hi],Vi[Hi]=null,qi=Vi[--Hi],Vi[Hi]=null;for(;e===Qi;)Qi=Ki[--Yi],Ki[Yi]=null,Gi=Ki[--Yi],Ki[Yi]=null,Ji=Ki[--Yi],Ki[Yi]=null}var ra=null,na=null,ia=!1,aa=null;function oa(e,t){var r=_c(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function la(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,na=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,na=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Qi?{id:Ji,overflow:Gi}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=_c(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ra=e,na=null,!0);default:return!1}}function sa(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=na;if(t){var r=t;if(!la(e,t)){if(sa(e))throw Error(a(418));t=ci(r.nextSibling);var n=ra;t&&la(e,t)?oa(n,r):(e.flags=-4097&e.flags|2,ia=!1,ra=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,ra=e}}}function ua(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function da(e){if(e!==ra)return!1;if(!ia)return ua(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ri(e.type,e.memoizedProps)),t&&(t=na)){if(sa(e))throw pa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(ua(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){na=ci(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}na=null}}else na=ra?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=na;e;)e=ci(e.nextSibling)}function fa(){na=ra=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var ga=y.ReactCurrentBatchConfig;function ma(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var i=n,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xa(e){return(0,e._init)(e._payload)}function ba(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Lc(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,r,n){return null===t||6!==t.tag?((t=Ic(r,e.mode,n)).return=e,t):((t=i(t,r)).return=e,t)}function c(e,t,r,n){var a=r.type;return a===j?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&xa(a)===t.type)?((n=i(t,r.props)).ref=ma(e,t,r),n.return=e,n):((n=Ac(r.type,r.key,r.props,null,e.mode,n)).ref=ma(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Fc(r,e.mode,n)).return=e,t):((t=i(t,r.children||[])).return=e,t)}function d(e,t,r,n,a){return null===t||7!==t.tag?((t=zc(r,e.mode,n,a)).return=e,t):((t=i(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=Ac(t.type,t.key,t.props,null,e.mode,r)).ref=ma(e,null,t),r.return=e,r;case k:return(t=Fc(t,e.mode,r)).return=e,t;case N:return p(e,(0,t._init)(t._payload),r)}if(te(t)||z(t))return(t=zc(t,e.mode,r,null)).return=e,t;va(e,t)}return null}function f(e,t,r,n){var i=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==i?null:s(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===i?c(e,t,r,n):null;case k:return r.key===i?u(e,t,r,n):null;case N:return f(e,t,(i=r._init)(r._payload),n)}if(te(r)||z(r))return null!==i?null:d(e,t,r,n,null);va(e,r)}return null}function h(e,t,r,n,i){if("string"===typeof n&&""!==n||"number"===typeof n)return s(t,e=e.get(r)||null,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,i);case k:return u(t,e=e.get(null===n.key?r:n.key)||null,n,i);case N:return h(e,t,r,(0,n._init)(n._payload),i)}if(te(n)||z(n))return d(t,e=e.get(r)||null,n,i,null);va(t,n)}return null}function g(i,a,l,s){for(var c=null,u=null,d=a,g=a=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=f(i,d,l[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(i,d),a=o(v,a,g),null===u?c=v:u.sibling=v,u=v,d=m}if(g===l.length)return r(i,d),ia&&Xi(i,g),c;if(null===d){for(;g<l.length;g++)null!==(d=p(i,l[g],s))&&(a=o(d,a,g),null===u?c=d:u.sibling=d,u=d);return ia&&Xi(i,g),c}for(d=n(i,d);g<l.length;g++)null!==(m=h(d,i,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),a=o(m,a,g),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(i,e)})),ia&&Xi(i,g),c}function m(i,l,s,c){var u=z(s);if("function"!==typeof u)throw Error(a(150));if(null==(s=u.call(s)))throw Error(a(151));for(var d=u=null,g=l,m=l=0,v=null,x=s.next();null!==g&&!x.done;m++,x=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var b=f(i,g,x.value,c);if(null===b){null===g&&(g=v);break}e&&g&&null===b.alternate&&t(i,g),l=o(b,l,m),null===d?u=b:d.sibling=b,d=b,g=v}if(x.done)return r(i,g),ia&&Xi(i,m),u;if(null===g){for(;!x.done;m++,x=s.next())null!==(x=p(i,x.value,c))&&(l=o(x,l,m),null===d?u=x:d.sibling=x,d=x);return ia&&Xi(i,m),u}for(g=n(i,g);!x.done;m++,x=s.next())null!==(x=h(g,i,m,x.value,c))&&(e&&null!==x.alternate&&g.delete(null===x.key?m:x.key),l=o(x,l,m),null===d?u=x:d.sibling=x,d=x);return e&&g.forEach((function(e){return t(i,e)})),ia&&Xi(i,m),u}return function e(n,a,o,s){if("object"===typeof o&&null!==o&&o.type===j&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=a;null!==u;){if(u.key===c){if((c=o.type)===j){if(7===u.tag){r(n,u.sibling),(a=i(u,o.props.children)).return=n,n=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&xa(c)===u.type){r(n,u.sibling),(a=i(u,o.props)).ref=ma(n,u,o),a.return=n,n=a;break e}r(n,u);break}t(n,u),u=u.sibling}o.type===j?((a=zc(o.props.children,n.mode,s,o.key)).return=n,n=a):((s=Ac(o.type,o.key,o.props,null,n.mode,s)).ref=ma(n,a,o),s.return=n,n=s)}return l(n);case k:e:{for(u=o.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){r(n,a.sibling),(a=i(a,o.children||[])).return=n,n=a;break e}r(n,a);break}t(n,a),a=a.sibling}(a=Fc(o,n.mode,s)).return=n,n=a}return l(n);case N:return e(n,a,(u=o._init)(o._payload),s)}if(te(o))return g(n,a,o,s);if(z(o))return m(n,a,o,s);va(n,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(r(n,a.sibling),(a=i(a,o)).return=n,n=a):(r(n,a),(a=Ic(o,n.mode,s)).return=n,n=a),l(n)):r(n,a)}}var ya=ba(!0),wa=ba(!1),ka=Si(null),ja=null,Sa=null,Ca=null;function Pa(){Ca=Sa=ja=null}function Ea(e){var t=ka.current;Ci(ka),e._currentValue=t}function Oa(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ra(e,t){ja=e,Ca=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ta(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ja)throw Error(a(308));Sa=e,ja.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var _a=null;function Na(e){null===_a?_a=[e]:_a.push(e)}function La(e,t,r,n){var i=t.interleaved;return null===i?(r.next=r,Na(t)):(r.next=i.next,i.next=r),t.interleaved=r,Aa(e,n)}function Aa(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var za=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Os)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Aa(e,r)}return null===(i=n.interleaved)?(t.next=t,Na(n)):(t.next=i.next,i.next=t),n.interleaved=t,Aa(e,r)}function Ua(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,xt(e,r)}}function $a(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?i=a=o:a=a.next=o,r=r.next}while(null!==r);null===a?i=a=t:a=a.next=t}else i=a=t;return r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ba(e,t,r,n){var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?a=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==a){var d=i.baseState;for(o=0,u=c=s=null,l=a;;){var p=l.lane,f=l.eventTime;if((n&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(p=t,f=r,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(f,d,p):h)||void 0===p)break e;d=I({},d,p);break e;case 2:za=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,o|=p;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(p=l).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ds|=o,e.lanes=o,e.memoizedState=d}}function Va(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(null!==i){if(n.callback=null,n=r,"function"!==typeof i)throw Error(a(191,i));i.call(n)}}}var Ha={},Wa=Si(Ha),qa=Si(Ha),Ka=Si(Ha);function Ya(e){if(e===Ha)throw Error(a(174));return e}function Qa(e,t){switch(Pi(Ka,t),Pi(qa,e),Pi(Wa,Ha),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Wa),Pi(Wa,t)}function Ja(){Ci(Wa),Ci(qa),Ci(Ka)}function Ga(e){Ya(Ka.current);var t=Ya(Wa.current),r=se(t,e.type);t!==r&&(Pi(qa,e),Pi(Wa,r))}function Xa(e){qa.current===e&&(Ci(Wa),Ci(qa))}var Za=Si(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function ro(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var no=y.ReactCurrentDispatcher,io=y.ReactCurrentBatchConfig,ao=0,oo=null,lo=null,so=null,co=!1,uo=!1,po=0,fo=0;function ho(){throw Error(a(321))}function go(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function mo(e,t,r,n,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=null===e||null===e.memoizedState?Zo:el,e=r(n,i),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(a(301));o+=1,so=lo=null,t.updateQueue=null,no.current=tl,e=r(n,i)}while(uo)}if(no.current=Xo,t=null!==lo&&null!==lo.next,ao=0,so=lo=oo=null,co=!1,t)throw Error(a(300));return e}function vo(){var e=0!==po;return po=0,e}function xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function bo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function yo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=bo(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=lo,i=n.baseQueue,o=r.pending;if(null!==o){if(null!==i){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(null!==i){o=i.next,n=n.baseState;var s=l=null,c=null,u=o;do{var d=u.lane;if((ao&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=n):c=c.next=p,oo.lanes|=d,Ds|=d}u=u.next}while(null!==u&&u!==o);null===c?l=n:c.next=s,ln(n,t.memoizedState)||(bl=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ds|=o,i=i.next}while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ko(e){var t=bo(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(null!==i){r.pending=null;var l=i=i.next;do{o=e(o,l.action),l=l.next}while(l!==i);ln(o,t.memoizedState)||(bl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function jo(){}function So(e,t){var r=oo,n=bo(),i=t(),o=!ln(n.memoizedState,i);if(o&&(n.memoizedState=i,bl=!0),n=n.queue,Do(Eo.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(r.flags|=2048,_o(9,Po.bind(null,r,n,i,t),void 0,null),null===Rs)throw Error(a(349));0!==(30&ao)||Co(r,t,i)}return i}function Co(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Po(e,t,r,n){t.value=r,t.getSnapshot=n,Oo(t)&&Ro(e)}function Eo(e,t,r){return r((function(){Oo(t)&&Ro(e)}))}function Oo(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ln(e,r)}catch(n){return!0}}function Ro(e){var t=Aa(e,1);null!==t&&rc(t,e,1,-1)}function To(e){var t=xo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function _o(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function No(){return bo().memoizedState}function Lo(e,t,r,n){var i=xo();oo.flags|=e,i.memoizedState=_o(1|t,r,void 0,void 0===n?null:n)}function Ao(e,t,r,n){var i=bo();n=void 0===n?null:n;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==n&&go(n,o.deps))return void(i.memoizedState=_o(t,r,a,n))}oo.flags|=e,i.memoizedState=_o(1|t,r,a,n)}function zo(e,t){return Lo(8390656,8,e,t)}function Do(e,t){return Ao(2048,8,e,t)}function Io(e,t){return Ao(4,2,e,t)}function Fo(e,t){return Ao(4,4,e,t)}function Mo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Uo(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ao(4,4,Mo.bind(null,t,e),r)}function $o(){}function Bo(e,t){var r=bo();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&go(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Vo(e,t){var r=bo();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&go(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ho(e,t,r){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=r):(ln(r,t)||(r=gt(),oo.lanes|=r,Ds|=r,e.baseState=!0),t)}function Wo(e,t){var r=bt;bt=0!==r&&4>r?r:4,e(!0);var n=io.transition;io.transition={};try{e(!1),t()}finally{bt=r,io.transition=n}}function qo(){return bo().memoizedState}function Ko(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Qo(e))Jo(t,r);else if(null!==(r=La(e,t,r,n))){rc(r,e,n,ec()),Go(r,t,n)}}function Yo(e,t,r){var n=tc(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Jo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=a(o,r);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var s=t.interleaved;return null===s?(i.next=i,Na(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(c){}null!==(r=La(e,t,i,n))&&(rc(r,e,n,i=ec()),Go(r,t,n))}}function Qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Jo(e,t){uo=co=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Go(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,xt(e,r)}}var Xo={readContext:Ta,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Ta,useCallback:function(e,t){return xo().memoizedState=[e,void 0===t?null:t],e},useContext:Ta,useEffect:zo,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Lo(4194308,4,Mo.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var r=xo();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=xo();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},xo().memoizedState=e},useState:To,useDebugValue:$o,useDeferredValue:function(e){return xo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Wo.bind(null,e[1]),xo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oo,i=xo();if(ia){if(void 0===r)throw Error(a(407));r=r()}else{if(r=t(),null===Rs)throw Error(a(349));0!==(30&ao)||Co(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,zo(Eo.bind(null,n,o,e),[e]),n.flags|=2048,_o(9,Po.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=xo(),t=Rs.identifierPrefix;if(ia){var r=Gi;t=":"+t+"R"+(r=(Ji&~(1<<32-ot(Ji)-1)).toString(32)+r),0<(r=po++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ta,useCallback:Bo,useContext:Ta,useEffect:Do,useImperativeHandle:Uo,useInsertionEffect:Io,useLayoutEffect:Fo,useMemo:Vo,useReducer:wo,useRef:No,useState:function(){return wo(yo)},useDebugValue:$o,useDeferredValue:function(e){return Ho(bo(),lo.memoizedState,e)},useTransition:function(){return[wo(yo)[0],bo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:qo,unstable_isNewReconciler:!1},tl={readContext:Ta,useCallback:Bo,useContext:Ta,useEffect:Do,useImperativeHandle:Uo,useInsertionEffect:Io,useLayoutEffect:Fo,useMemo:Vo,useReducer:ko,useRef:No,useState:function(){return ko(yo)},useDebugValue:$o,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[ko(yo)[0],bo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:qo,unstable_isNewReconciler:!1};function rl(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function nl(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),i=tc(e),a=Fa(n,i);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ma(e,a,i))&&(rc(t,e,i,n),Ua(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),i=tc(e),a=Fa(n,i);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),null!==(t=Ma(e,a,i))&&(rc(t,e,i,n),Ua(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),i=Fa(r,n);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Ma(e,i,n))&&(rc(t,e,n,r),Ua(t,e,n))}};function al(e,t,r,n,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!sn(r,n)||!sn(i,a))}function ol(e,t,r){var n=!1,i=Ei,a=t.contextType;return"object"===typeof a&&null!==a?a=Ta(a):(i=Ni(t)?Ti:Oi.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?_i(e,i):Ei),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Da(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Ta(a):(a=Ni(t)?Ti:Oi.current,i.context=_i(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(nl(e,t,a,r),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Ba(e,r,i,n),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var r="",n=t;do{r+=$(n),n=n.return}while(n);var i=r}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,r){(r=Fa(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Hs||(Hs=!0,Ws=n),dl(0,t)},r}function hl(e,t,r){(r=Fa(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){dl(0,t),"function"!==typeof n&&(null===qs?qs=new Set([this]):qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function gl(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new pl;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Cc.bind(null,e,t,r),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,r,n,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=Fa(-1,1)).tag=2,Ma(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xl=y.ReactCurrentOwner,bl=!1;function yl(e,t,r,n){t.child=null===e?wa(t,null,r,n):ya(t,e.child,r,n)}function wl(e,t,r,n,i){r=r.render;var a=t.ref;return Ra(t,i),n=mo(e,t,r,n,a,i),r=vo(),null===e||bl?(ia&&r&&ea(t),t.flags|=1,yl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function kl(e,t,r,n,i){if(null===e){var a=r.type;return"function"!==typeof a||Nc(a)||void 0!==a.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Ac(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,jl(e,t,a,n,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((r=null!==(r=r.compare)?r:sn)(o,n)&&e.ref===t.ref)return Hl(e,t,i)}return t.flags|=1,(e=Lc(a,n)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,r,n,i){if(null!==e){var a=e.memoizedProps;if(sn(a,n)&&e.ref===t.ref){if(bl=!1,t.pendingProps=n=a,0===(e.lanes&i))return t.lanes=e.lanes,Hl(e,t,i);0!==(131072&e.flags)&&(bl=!0)}}return Pl(e,t,r,n,i)}function Sl(e,t,r){var n=t.pendingProps,i=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(Ls,Ns),Ns|=r;else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(Ls,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==a?a.baseLanes:r,Pi(Ls,Ns),Ns|=n}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,Pi(Ls,Ns),Ns|=n;return yl(e,t,i,r),t.child}function Cl(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,r,n,i){var a=Ni(r)?Ti:Oi.current;return a=_i(t,a),Ra(t,i),r=mo(e,t,r,n,a,i),n=vo(),null===e||bl?(ia&&n&&ea(t),t.flags|=1,yl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function El(e,t,r,n,i){if(Ni(r)){var a=!0;Di(t)}else a=!1;if(Ra(t,i),null===t.stateNode)Vl(e,t),ol(t,r,n),sl(t,r,n,i),n=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=r.contextType;"object"===typeof c&&null!==c?c=Ta(c):c=_i(t,c=Ni(r)?Ti:Oi.current);var u=r.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==n||s!==c)&&ll(t,o,n,c),za=!1;var p=t.memoizedState;o.state=p,Ba(t,n,o,i),s=t.memoizedState,l!==n||p!==s||Ri.current||za?("function"===typeof u&&(nl(t,r,u,n),s=t.memoizedState),(l=za||al(t,r,l,n,p,s,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),o.props=n,o.state=s,o.context=c,n=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Ia(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:rl(t.type,l),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(s=r.contextType)&&null!==s?s=Ta(s):s=_i(t,s=Ni(r)?Ti:Oi.current);var f=r.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,o,n,s),za=!1,p=t.memoizedState,o.state=p,Ba(t,n,o,i);var h=t.memoizedState;l!==d||p!==h||Ri.current||za?("function"===typeof f&&(nl(t,r,f,n),h=t.memoizedState),(c=za||al(t,r,c,n,p,h,s)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(n,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),o.props=n,o.state=h,o.context=s,n=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Ol(e,t,r,n,a,i)}function Ol(e,t,r,n,i,a){Cl(e,t);var o=0!==(128&t.flags);if(!n&&!o)return i&&Ii(t,r,!1),Hl(e,t,a);n=t.stateNode,xl.current=t;var l=o&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&o?(t.child=ya(t,e.child,null,a),t.child=ya(t,null,l,a)):yl(e,t,l,a),t.memoizedState=n.state,i&&Ii(t,r,!0),t.child}function Rl(e){var t=e.stateNode;t.pendingContext?Ai(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ai(0,t.context,!1),Qa(e,t.containerInfo)}function Tl(e,t,r,n,i){return fa(),ha(i),t.flags|=256,yl(e,t,r,n),t.child}var _l,Nl,Ll,Al,zl={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Il(e,t,r){var n,i=t.pendingProps,o=Za.current,l=!1,s=0!==(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!==(2&o)),n?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Pi(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Dc(s,i,0,null),e=zc(e,i,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(r),t.memoizedState=zl,e):Fl(t,s));if(null!==(o=e.memoizedState)&&null!==(n=o.dehydrated))return function(e,t,r,n,i,o,l){if(r)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,n=ul(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Dc({mode:"visible",children:n.children},i,0,null),(o=zc(o,i,l,null)).flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,0!==(1&t.mode)&&ya(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=zl,o);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===i.data){if(n=i.nextSibling&&i.nextSibling.dataset)var s=n.dgst;return n=s,Ml(e,t,l,n=ul(o=Error(a(419)),n,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(n=Rs)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(n.suspendedLanes|l))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Aa(e,i),rc(n,e,i,-1))}return gc(),Ml(e,t,l,n=ul(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,na=ci(i.nextSibling),ra=t,ia=!0,aa=null,null!==e&&(Ki[Yi++]=Ji,Ki[Yi++]=Gi,Ki[Yi++]=Qi,Ji=e.id,Gi=e.overflow,Qi=t),t=Fl(t,n.children),t.flags|=4096,t)}(e,t,s,i,n,o,r);if(l){l=i.fallback,s=t.mode,n=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Lc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==n?l=Lc(n,l):(l=zc(l,s,r,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,t.memoizedState=zl,i}return e=(l=e.child).sibling,i=Lc(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Fl(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,r,n){return null!==n&&ha(n),ya(t,e.child,null,r),(e=Fl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ul(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Oa(e.return,t,r)}function $l(e,t,r,n,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Bl(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(yl(e,t,n.children,r),0!==(2&(n=Za.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ul(e,r,t);else if(19===e.tag)Ul(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Pi(Za,n),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;null!==r;)null!==(e=r.alternate)&&null===eo(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),$l(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}$l(t,!0,r,null,a);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(r=Lc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Lc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Wl(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=14680064&i.subtreeFlags,n|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kl(e,t,r){var n=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return Ni(t.type)&&Li(),ql(t),null;case 3:return n=t.stateNode,Ja(),Ci(Ri),Ci(Oi),ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Nl(e,t),ql(t),null;case 5:Xa(t);var i=Ya(Ka.current);if(r=t.type,null!==e&&null!=t.stateNode)Ll(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(a(166));return ql(t),null}if(e=Ya(Wa.current),da(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[pi]=t,n[fi]=o,e=0!==(1&t.mode),r){case"dialog":Mn("cancel",n),Mn("close",n);break;case"iframe":case"object":case"embed":Mn("load",n);break;case"video":case"audio":for(i=0;i<zn.length;i++)Mn(zn[i],n);break;case"source":Mn("error",n);break;case"img":case"image":case"link":Mn("error",n),Mn("load",n);break;case"details":Mn("toggle",n);break;case"input":J(n,o),Mn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Mn("invalid",n);break;case"textarea":ie(n,o),Mn("invalid",n)}for(var s in xe(r,o),i=null,o)if(o.hasOwnProperty(s)){var c=o[s];"children"===s?"string"===typeof c?n.textContent!==c&&(!0!==o.suppressHydrationWarning&&Xn(n.textContent,c,e),i=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Xn(n.textContent,c,e),i=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Mn("scroll",n)}switch(r){case"input":q(n),Z(n,o,!0);break;case"textarea":q(n),oe(n);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(n.onclick=Zn)}n=i,t.updateQueue=n,null!==n&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),"select"===r&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[pi]=t,e[fi]=n,_l(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(r,n),r){case"dialog":Mn("cancel",e),Mn("close",e),i=n;break;case"iframe":case"object":case"embed":Mn("load",e),i=n;break;case"video":case"audio":for(i=0;i<zn.length;i++)Mn(zn[i],e);i=n;break;case"source":Mn("error",e),i=n;break;case"img":case"image":case"link":Mn("error",e),Mn("load",e),i=n;break;case"details":Mn("toggle",e),i=n;break;case"input":J(e,n),i=Q(e,n),Mn("invalid",e);break;case"option":default:i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=I({},n,{value:void 0}),Mn("invalid",e);break;case"textarea":ie(e,n),i=ne(e,n),Mn("invalid",e)}for(o in xe(r,i),c=i)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?me(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==r||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Mn("scroll",e):null!=u&&b(e,o,u,s))}switch(r){case"input":q(e),Z(e,n,!1);break;case"textarea":q(e),oe(e);break;case"option":null!=n.value&&e.setAttribute("value",""+H(n.value));break;case"select":e.multiple=!!n.multiple,null!=(o=n.value)?re(e,!!n.multiple,o,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Al(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(a(166));if(r=Ya(Ka.current),Ya(Wa.current),da(t)){if(n=t.stateNode,r=t.memoizedProps,n[pi]=t,(o=n.nodeValue!==r)&&null!==(e=ra))switch(e.tag){case 3:Xn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xn(n.nodeValue,r,0!==(1&e.mode))}o&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[pi]=t,t.stateNode=n}return ql(t),null;case 13:if(Ci(Za),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==na&&0!==(1&t.mode)&&0===(128&t.flags))pa(),fa(),t.flags|=98560,o=!1;else if(o=da(t),null!==n&&null!==n.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[pi]=t}else fa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===As&&(As=3):gc())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Ja(),Nl(e,t),null===e&&Bn(t.stateNode.containerInfo),ql(t),null;case 10:return Ea(t.type._context),ql(t),null;case 19:if(Ci(Za),null===(o=t.memoizedState))return ql(t),null;if(n=0!==(128&t.flags),null===(s=o.rendering))if(n)Wl(o,!1);else{if(0!==As||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Wl(o,!1),null!==(n=s.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(o=r).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Pi(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Ge()>Bs&&(t.flags|=128,n=!0,Wl(o,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=eo(s))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Wl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ia)return ql(t),null}else 2*Ge()-o.renderingStartTime>Bs&&1073741824!==r&&(t.flags|=128,n=!0,Wl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=o.last)?r.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,r=Za.current,Pi(Za,n?1&r|2:1&r),t):(ql(t),null);case 22:case 23:return dc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Yl(e,t){switch(ta(t),t.tag){case 1:return Ni(t.type)&&Li(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ja(),Ci(Ri),Ci(Oi),ro(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xa(t),null;case 13:if(Ci(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Za),null;case 4:return Ja(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}_l=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Nl=function(){},Ll=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ya(Wa.current);var a,o=null;switch(r){case"input":i=Q(e,i),n=Q(e,n),o=[];break;case"select":i=I({},i,{value:void 0}),n=I({},n,{value:void 0}),o=[];break;case"textarea":i=ne(e,i),n=ne(e,n),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(u in xe(r,n),r=null,i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(s=null!=i?i[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(o||(o=[]),o.push(u,r)),r=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Mn("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Al=function(e,t,r,n){r!==n&&(t.flags|=4)};var Ql=!1,Jl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Zl(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){Sc(e,t,n)}else r.current=null}function es(e,t,r){try{r()}catch(n){Sc(e,t,n)}}var ts=!1;function rs(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&es(t,r,a)}i=i.next}while(i!==n)}}function ns(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function is(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[gi],delete t[mi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ss(e,t,r),e=e.sibling;null!==e;)ss(e,t,r),e=e.sibling}function cs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cs(e,t,r),e=e.sibling;null!==e;)cs(e,t,r),e=e.sibling}var us=null,ds=!1;function ps(e,t,r){for(r=r.child;null!==r;)fs(e,t,r),r=r.sibling}function fs(e,t,r){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,r)}catch(l){}switch(r.tag){case 5:Jl||Zl(r,t);case 6:var n=us,i=ds;us=null,ps(e,t,r),ds=i,null!==(us=n)&&(ds?(e=us,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):us.removeChild(r.stateNode));break;case 18:null!==us&&(ds?(e=us,r=r.stateNode,8===e.nodeType?si(e.parentNode,r):1===e.nodeType&&si(e,r),Bt(e)):si(us,r.stateNode));break;case 4:n=us,i=ds,us=r.stateNode.containerInfo,ds=!0,ps(e,t,r),us=n,ds=i;break;case 0:case 11:case 14:case 15:if(!Jl&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&es(r,t,o),i=i.next}while(i!==n)}ps(e,t,r);break;case 1:if(!Jl&&(Zl(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Sc(r,t,l)}ps(e,t,r);break;case 21:ps(e,t,r);break;case 22:1&r.mode?(Jl=(n=Jl)||null!==r.memoizedState,ps(e,t,r),Jl=n):ps(e,t,r);break;default:ps(e,t,r)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Gl),t.forEach((function(t){var n=Oc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function gs(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(a(160));fs(o,l,i),us=null,ds=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Sc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&n){try{rs(3,e,e.return),ns(3,e)}catch(m){Sc(e,e.return,m)}try{rs(5,e,e.return)}catch(m){Sc(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&n&&null!==r&&Zl(r,r.return);break;case 5:if(gs(t,e),vs(e),512&n&&null!==r&&Zl(r,r.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(m){Sc(e,e.return,m)}}if(4&n&&null!=(i=e.stateNode)){var o=e.memoizedProps,l=null!==r?r.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===o.type&&null!=o.name&&G(i,o),be(s,l);var u=be(s,o);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?me(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):b(i,d,p,u)}switch(s){case"input":X(i,o);break;case"textarea":ae(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?re(i,!!o.multiple,h,!1):f!==!!o.multiple&&(null!=o.defaultValue?re(i,!!o.multiple,o.defaultValue,!0):re(i,!!o.multiple,o.multiple?[]:"",!1))}i[fi]=o}catch(m){Sc(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&n){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Sc(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(m){Sc(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||($s=Ge())),4&n&&hs(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Jl=(u=Jl)||d,gs(t,e),Jl=u):gs(t,e),vs(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(p=Xl=d;null!==Xl;){switch(h=(f=Xl).child,f.tag){case 0:case 11:case 14:case 15:rs(4,f,f.return);break;case 1:Zl(f,f.return);var g=f.stateNode;if("function"===typeof g.componentWillUnmount){n=f,r=f.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Sc(n,r,m)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Xl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=ge("display",l))}catch(m){Sc(e,e.return,m)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(m){Sc(e,e.return,m)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gs(t,e),vs(e),4&n&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(os(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var i=n.stateNode;32&n.flags&&(pe(i,""),n.flags&=-33),cs(e,ls(e),i);break;case 3:case 4:var o=n.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(a(161))}}catch(l){Sc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xs(e,t,r){Xl=e,bs(e,t,r)}function bs(e,t,r){for(var n=0!==(1&e.mode);null!==Xl;){var i=Xl,a=i.child;if(22===i.tag&&n){var o=null!==i.memoizedState||Ql;if(!o){var l=i.alternate,s=null!==l&&null!==l.memoizedState||Jl;l=Ql;var c=Jl;if(Ql=o,(Jl=s)&&!c)for(Xl=i;null!==Xl;)s=(o=Xl).child,22===o.tag&&null!==o.memoizedState?ks(i):null!==s?(s.return=o,Xl=s):ks(i);for(;null!==a;)Xl=a,bs(a,t,r),a=a.sibling;Xl=i,Ql=l,Jl=c}ys(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Xl=a):ys(e)}}function ys(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Jl||ns(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Jl)if(null===r)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:rl(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Va(t,o,n);break;case 3:var l=t.updateQueue;if(null!==l){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Va(t,l,r)}break;case 5:var s=t.stateNode;if(null===r&&4&t.flags){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(a(163))}Jl||512&t.flags&&is(t)}catch(f){Sc(t,t.return,f)}}if(t===e){Xl=null;break}if(null!==(r=t.sibling)){r.return=t.return,Xl=r;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Xl=r;break}Xl=t.return}}function ks(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ns(4,t)}catch(s){Sc(t,r,s)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var i=t.return;try{n.componentDidMount()}catch(s){Sc(t,i,s)}}var a=t.return;try{is(t)}catch(s){Sc(t,a,s)}break;case 5:var o=t.return;try{is(t)}catch(s){Sc(t,o,s)}}}catch(s){Sc(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var js,Ss=Math.ceil,Cs=y.ReactCurrentDispatcher,Ps=y.ReactCurrentOwner,Es=y.ReactCurrentBatchConfig,Os=0,Rs=null,Ts=null,_s=0,Ns=0,Ls=Si(0),As=0,zs=null,Ds=0,Is=0,Fs=0,Ms=null,Us=null,$s=0,Bs=1/0,Vs=null,Hs=!1,Ws=null,qs=null,Ks=!1,Ys=null,Qs=0,Js=0,Gs=null,Xs=-1,Zs=0;function ec(){return 0!==(6&Os)?Ge():-1!==Xs?Xs:Xs=Ge()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Os)&&0!==_s?_s&-_s:null!==ga.transition?(0===Zs&&(Zs=gt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Jt(e.type)}function rc(e,t,r,n){if(50<Js)throw Js=0,Gs=null,Error(a(185));vt(e,r,n),0!==(2&Os)&&e===Rs||(e===Rs&&(0===(2&Os)&&(Is|=r),4===As&&lc(e,_s)),nc(e,n),1===r&&0===Os&&0===(1&t.mode)&&(Bs=Ge()+500,Mi&&Bi()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),l=1<<o,s=i[o];-1===s?0!==(l&r)&&0===(l&n)||(i[o]=ft(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var n=pt(e,e===Rs?_s:0);if(0===n)null!==r&&Ye(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Ye(r),1===t)0===e.tag?function(e){Mi=!0,$i(e)}(sc.bind(null,e)):$i(sc.bind(null,e)),oi((function(){0===(6&Os)&&Bi()})),r=null;else{switch(yt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Rc(r,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ic(e,t){if(Xs=-1,Zs=0,0!==(6&Os))throw Error(a(327));var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var n=pt(e,e===Rs?_s:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=mc(e,n);else{t=n;var i=Os;Os|=2;var o=hc();for(Rs===e&&_s===t||(Vs=null,Bs=Ge()+500,pc(e,t));;)try{xc();break}catch(s){fc(e,s)}Pa(),Cs.current=o,Os=i,null!==Ts?t=0:(Rs=null,_s=0,t=As)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(n=i,t=ac(e,i))),1===t)throw r=zs,pc(e,0),lc(e,n),nc(e,Ge()),r;if(6===t)lc(e,n);else{if(i=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!ln(a(),i))return!1}catch(l){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=mc(e,n))&&(0!==(o=ht(e))&&(n=o,t=ac(e,o))),1===t))throw r=zs,pc(e,0),lc(e,n),nc(e,Ge()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Us,Vs);break;case 3:if(lc(e,n),(130023424&n)===n&&10<(t=$s+500-Ge())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ni(wc.bind(null,e,Us,Vs),t);break}wc(e,Us,Vs);break;case 4:if(lc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-ot(n);o=1<<l,(l=t[l])>i&&(i=l),n&=~o}if(n=i,10<(n=(120>(n=Ge()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Ss(n/1960))-n)){e.timeoutHandle=ni(wc.bind(null,e,Us,Vs),n);break}wc(e,Us,Vs);break;default:throw Error(a(329))}}}return nc(e,Ge()),e.callbackNode===r?ic.bind(null,e):null}function ac(e,t){var r=Ms;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=mc(e,t))&&(t=Us,Us=r,null!==t&&oc(t)),e}function oc(e){null===Us?Us=e:Us.push.apply(Us,e)}function lc(e,t){for(t&=~Fs,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function sc(e){if(0!==(6&Os))throw Error(a(327));kc();var t=pt(e,0);if(0===(1&t))return nc(e,Ge()),null;var r=mc(e,t);if(0!==e.tag&&2===r){var n=ht(e);0!==n&&(t=n,r=ac(e,n))}if(1===r)throw r=zs,pc(e,0),lc(e,t),nc(e,Ge()),r;if(6===r)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Us,Vs),nc(e,Ge()),null}function cc(e,t){var r=Os;Os|=1;try{return e(t)}finally{0===(Os=r)&&(Bs=Ge()+500,Mi&&Bi())}}function uc(e){null!==Ys&&0===Ys.tag&&0===(6&Os)&&kc();var t=Os;Os|=1;var r=Es.transition,n=bt;try{if(Es.transition=null,bt=1,e)return e()}finally{bt=n,Es.transition=r,0===(6&(Os=t))&&Bi()}}function dc(){Ns=Ls.current,Ci(Ls)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,ii(r)),null!==Ts)for(r=Ts.return;null!==r;){var n=r;switch(ta(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&Li();break;case 3:Ja(),Ci(Ri),Ci(Oi),ro();break;case 5:Xa(n);break;case 4:Ja();break;case 13:case 19:Ci(Za);break;case 10:Ea(n.type._context);break;case 22:case 23:dc()}r=r.return}if(Rs=e,Ts=e=Lc(e.current,null),_s=Ns=t,As=0,zs=null,Fs=Is=Ds=0,Us=Ms=null,null!==_a){for(t=0;t<_a.length;t++)if(null!==(n=(r=_a[t]).interleaved)){r.interleaved=null;var i=n.next,a=r.pending;if(null!==a){var o=a.next;a.next=i,n.next=o}r.pending=n}_a=null}return e}function fc(e,t){for(;;){var r=Ts;try{if(Pa(),no.current=Xo,co){for(var n=oo.memoizedState;null!==n;){var i=n.queue;null!==i&&(i.pending=null),n=n.next}co=!1}if(ao=0,so=lo=oo=null,uo=!1,po=0,Ps.current=null,null===r||null===r.return){As=1,zs=t,Ts=null;break}e:{var o=e,l=r.return,s=r,c=t;if(t=_s,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&gl(o,u,t),c=u;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(c),t.updateQueue=m}else g.add(c);break e}if(0===(1&t)){gl(o,u,t),gc();break e}c=Error(a(426))}else if(ia&&1&s.mode){var v=ml(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),ha(cl(c,s));break e}}o=c=cl(c,s),4!==As&&(As=2),null===Ms?Ms=[o]:Ms.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,$a(o,fl(0,c,t));break e;case 1:s=c;var x=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof x.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===qs||!qs.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,$a(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}yc(r)}catch(y){t=y,Ts===r&&null!==r&&(Ts=r=r.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Xo,null===e?Xo:e}function gc(){0!==As&&3!==As&&2!==As||(As=4),null===Rs||0===(268435455&Ds)&&0===(268435455&Is)||lc(Rs,_s)}function mc(e,t){var r=Os;Os|=2;var n=hc();for(Rs===e&&_s===t||(Vs=null,pc(e,t));;)try{vc();break}catch(i){fc(e,i)}if(Pa(),Os=r,Cs.current=n,null!==Ts)throw Error(a(261));return Rs=null,_s=0,As}function vc(){for(;null!==Ts;)bc(Ts)}function xc(){for(;null!==Ts&&!Qe();)bc(Ts)}function bc(e){var t=js(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?yc(e):Ts=t,Ps.current=null}function yc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Kl(r,t,Ns)))return void(Ts=r)}else{if(null!==(r=Yl(r,t)))return r.flags&=32767,void(Ts=r);if(null===e)return As=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===As&&(As=5)}function wc(e,t,r){var n=bt,i=Es.transition;try{Es.transition=null,bt=1,function(e,t,r,n){do{kc()}while(null!==Ys);if(0!==(6&Os))throw Error(a(327));r=e.finishedWork;var i=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ot(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}(e,o),e===Rs&&(Ts=Rs=null,_s=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Ks||(Ks=!0,Rc(tt,(function(){return kc(),null}))),o=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||o){o=Es.transition,Es.transition=null;var l=bt;bt=1;var s=Os;Os|=4,Ps.current=null,function(e,t){if(ei=Ht,fn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch(w){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==r||0!==i&&3!==p.nodeType||(s=l+i),p!==o||0!==n&&3!==p.nodeType||(c=l+n),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===r&&++u===i&&(s=l),f===o&&++d===n&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ti={focusedElem:e,selectionRange:r},Ht=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,x=t.stateNode,b=x.getSnapshotBeforeUpdate(t.elementType===t.type?m:rl(t.type,m),v);x.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(a(163))}}catch(w){Sc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}g=ts,ts=!1}(e,r),ms(r,e),hn(ti),Ht=!!ei,ti=ei=null,e.current=r,xs(r,e,i),Je(),Os=s,bt=l,Es.transition=o}else e.current=r;if(Ks&&(Ks=!1,Ys=e,Qs=i),o=e.pendingLanes,0===o&&(qs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Ge()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Hs)throw Hs=!1,e=Ws,Ws=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Gs?Js++:(Js=0,Gs=e):Js=0,Bi()}(e,t,r,n)}finally{Es.transition=i,bt=n}return null}function kc(){if(null!==Ys){var e=yt(Qs),t=Es.transition,r=bt;try{if(Es.transition=null,bt=16>e?16:e,null===Ys)var n=!1;else{if(e=Ys,Ys=null,Qs=0,0!==(6&Os))throw Error(a(331));var i=Os;for(Os|=4,Xl=e.current;null!==Xl;){var o=Xl,l=o.child;if(0!==(16&Xl.flags)){var s=o.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Xl=u;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:rs(8,d,o)}var p=d.child;if(null!==p)p.return=d,Xl=p;else for(;null!==Xl;){var f=(d=Xl).sibling,h=d.return;if(as(d),d===u){Xl=null;break}if(null!==f){f.return=h,Xl=f;break}Xl=h}}}var g=o.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Xl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(o=Xl).flags))switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var x=o.sibling;if(null!==x){x.return=o.return,Xl=x;break e}Xl=o.return}}var b=e.current;for(Xl=b;null!==Xl;){var y=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Xl=y;else e:for(l=b;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:ns(9,s)}}catch(k){Sc(s,s.return,k)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Os=i,Bi(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}n=!0}return n}finally{bt=r,Es.transition=t}}return!1}function jc(e,t,r){e=Ma(e,t=fl(0,t=cl(r,t),1),1),t=ec(),null!==e&&(vt(e,1,t),nc(e,t))}function Sc(e,t,r){if(3===e.tag)jc(e,e,r);else for(;null!==t;){if(3===t.tag){jc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===qs||!qs.has(n))){t=Ma(t,e=hl(t,e=cl(r,e),1),1),e=ec(),null!==t&&(vt(t,1,e),nc(t,e));break}}t=t.return}}function Cc(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,Rs===e&&(_s&r)===r&&(4===As||3===As&&(130023424&_s)===_s&&500>Ge()-$s?pc(e,0):Fs|=r),nc(e,t)}function Pc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var r=ec();null!==(e=Aa(e,t))&&(vt(e,t,r),nc(e,r))}function Ec(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Pc(e,r)}function Oc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}null!==n&&n.delete(t),Pc(e,r)}function Rc(e,t){return Ke(e,t)}function Tc(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _c(e,t,r,n){return new Tc(e,t,r,n)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lc(e,t){var r=e.alternate;return null===r?((r=_c(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ac(e,t,r,n,i,o){var l=2;if(n=e,"function"===typeof e)Nc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return zc(r.children,i,o,t);case S:l=8,i|=8;break;case C:return(e=_c(12,r,t,2|i)).elementType=C,e.lanes=o,e;case R:return(e=_c(13,r,t,i)).elementType=R,e.lanes=o,e;case T:return(e=_c(19,r,t,i)).elementType=T,e.lanes=o,e;case L:return Dc(r,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:l=10;break e;case E:l=9;break e;case O:l=11;break e;case _:l=14;break e;case N:l=16,n=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=_c(l,r,t,i)).elementType=e,t.type=n,t.lanes=o,t}function zc(e,t,r,n){return(e=_c(7,e,n,t)).lanes=r,e}function Dc(e,t,r,n){return(e=_c(22,e,n,t)).elementType=L,e.lanes=r,e.stateNode={isHidden:!1},e}function Ic(e,t,r){return(e=_c(6,e,null,t)).lanes=r,e}function Fc(e,t,r){return(t=_c(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mc(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,r,n,i,a,o,l,s){return e=new Mc(e,t,r,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=_c(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(a),e}function $c(e){if(!e)return Ei;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var r=e.type;if(Ni(r))return zi(e,r,t)}return t}function Bc(e,t,r,n,i,a,o,l,s){return(e=Uc(r,n,!0,e,0,a,0,l,s)).context=$c(null),r=e.current,(a=Fa(n=ec(),i=tc(r))).callback=void 0!==t&&null!==t?t:null,Ma(r,a,i),e.current.lanes=i,vt(e,i,n),nc(e,n),e}function Vc(e,t,r,n){var i=t.current,a=ec(),o=tc(i);return r=$c(r),null===t.context?t.context=r:t.pendingContext=r,(t=Fa(a,o)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Ma(i,t,o))&&(rc(e,i,o,a),Ua(e,i,o)),o}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function qc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}js=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)bl=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return bl=!1,function(e,t,r){switch(t.tag){case 3:Rl(t),fa();break;case 5:Ga(t);break;case 1:Ni(t.type)&&Di(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Pi(ka,n._currentValue),n._currentValue=i;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(Pi(Za,1&Za.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Il(e,t,r):(Pi(Za,1&Za.current),null!==(e=Hl(e,t,r))?e.sibling:null);Pi(Za,1&Za.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Bl(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(Za,Za.current),n)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,r)}return Hl(e,t,r)}(e,t,r);bl=0!==(131072&e.flags)}else bl=!1,ia&&0!==(1048576&t.flags)&&Zi(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Vl(e,t),e=t.pendingProps;var i=_i(t,Oi.current);Ra(t,r),i=mo(null,t,n,e,i,r);var o=vo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(n)?(o=!0,Di(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Da(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,n,e,r),t=Ol(null,t,n,!0,o,r)):(t.tag=0,ia&&o&&ea(t),yl(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,n=(i=n._init)(n._payload),t.type=n,i=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===_)return 14}return 2}(n),e=rl(n,e),i){case 0:t=Pl(null,t,n,e,r);break e;case 1:t=El(null,t,n,e,r);break e;case 11:t=wl(null,t,n,e,r);break e;case 14:t=kl(null,t,n,rl(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,Pl(e,t,n,i=t.elementType===n?i:rl(n,i),r);case 1:return n=t.type,i=t.pendingProps,El(e,t,n,i=t.elementType===n?i:rl(n,i),r);case 3:e:{if(Rl(t),null===e)throw Error(a(387));n=t.pendingProps,i=(o=t.memoizedState).element,Ia(e,t),Ba(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Tl(e,t,n,r,i=cl(Error(a(423)),t));break e}if(n!==i){t=Tl(e,t,n,r,i=cl(Error(a(424)),t));break e}for(na=ci(t.stateNode.containerInfo.firstChild),ra=t,ia=!0,aa=null,r=wa(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(fa(),n===i){t=Hl(e,t,r);break e}yl(e,t,n,r)}t=t.child}return t;case 5:return Ga(t),null===e&&ca(t),n=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,l=i.children,ri(n,i)?l=null:null!==o&&ri(n,o)&&(t.flags|=32),Cl(e,t),yl(e,t,l,r),t.child;case 6:return null===e&&ca(t),null;case 13:return Il(e,t,r);case 4:return Qa(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=ya(t,null,n,r):yl(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,wl(e,t,n,i=t.elementType===n?i:rl(n,i),r);case 7:return yl(e,t,t.pendingProps,r),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Pi(ka,n._currentValue),n._currentValue=l,null!==o)if(ln(o.value,l)){if(o.children===i.children&&!Ri.current){t=Hl(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var c=s.firstContext;null!==c;){if(c.context===n){if(1===o.tag){(c=Fa(-1,r&-r)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=r,null!==(c=o.alternate)&&(c.lanes|=r),Oa(o.return,r,t),s.lanes|=r;break}c=c.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=r,null!==(s=l.alternate)&&(s.lanes|=r),Oa(l,r,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}yl(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Ra(t,r),n=n(i=Ta(i)),t.flags|=1,yl(e,t,n,r),t.child;case 14:return i=rl(n=t.type,t.pendingProps),kl(e,t,n,i=rl(n.type,i),r);case 15:return jl(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:rl(n,i),Vl(e,t),t.tag=1,Ni(n)?(e=!0,Di(t)):e=!1,Ra(t,r),ol(t,n,i),sl(t,n,i,r),Ol(null,t,n,!0,e,r);case 19:return Bl(e,t,r);case 22:return Sl(e,t,r)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Zc(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if("function"===typeof i){var l=i;i=function(){var e=Hc(o);l.call(e)}}Vc(t,o,e,i)}else o=function(e,t,r,n,i){if(i){if("function"===typeof n){var a=n;n=function(){var e=Hc(o);a.call(e)}}var o=Bc(t,n,e,0,null,!1,0,"",Xc);return e._reactRootContainer=o,e[hi]=o.current,Bn(8===e.nodeType?e.parentNode:e),uc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof n){var l=n;n=function(){var e=Hc(s);l.call(e)}}var s=Uc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=s,e[hi]=s.current,Bn(8===e.nodeType?e.parentNode:e),uc((function(){Vc(t,s,r,n)})),s}(r,t,e,i,n);return Hc(o)}Qc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Vc(e,t,null,null)},Qc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Vc(null,e,null,null)})),t[hi]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Lt.length&&0!==t&&t<Lt[r].priority;r++);Lt.splice(r,0,e),0===r&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(xt(t,1|r),nc(t,Ge()),0===(6&Os)&&(Bs=Ge()+500,Bi()))}break;case 13:uc((function(){var t=Aa(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}})),qc(e,1)}},kt=function(e){if(13===e.tag){var t=Aa(e,134217728);if(null!==t)rc(t,e,134217728,ec());qc(e,134217728)}},jt=function(e){if(13===e.tag){var t=tc(e),r=Aa(e,t);if(null!==r)rc(r,e,t,ec());qc(e,t)}},St=function(){return bt},Ct=function(e,t){var r=bt;try{return bt=e,t()}finally{bt=r}},ke=function(e,t,r){switch(t){case"input":if(X(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=wi(n);if(!i)throw Error(a(90));K(n),X(n,i)}}}break;case"textarea":ae(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Oe=cc,Re=uc;var eu={usingClientEntryPoint:!1,Events:[bi,yi,wi,Pe,Ee,cc]},tu={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ru={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{it=nu.inject(ru),at=nu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Jc(t))throw Error(a(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Jc(e))throw Error(a(299));var r=!1,n="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,0,r,0,n,i),e[hi]=t.current,Bn(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,r){if(!Gc(t))throw Error(a(200));return Zc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Jc(e))throw Error(a(405));var n=null!=r&&r.hydratedSources||null,i=!1,o="",l=Kc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(l=r.onRecoverableError)),t=Bc(t,null,e,1,null!=r?r:null,i,0,o,l),e[hi]=t.current,Bn(e),n)for(e=0;e<n.length;e++)i=(i=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Qc(t)},t.render=function(e,t,r){if(!Gc(t))throw Error(a(200));return Zc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Gc(r))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,r)=>{"use strict";e.exports=r(983)},844:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)},983:(e,t)=>{"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,y=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case d:case a:case l:case o:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case m:case g:case s:return e;default:return t}}case i:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=g,t.Portal=i,t.Profiler=l,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===d||e===l||e===o||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===s||e.$$typeof===c||e.$$typeof===p||e.$$typeof===x||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v)},t.typeOf=w}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,r.d(a,o),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+".2eb076a9.chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="wecare:";r.l=(n,i,a,o)=>{if(e[n])e[n].push(i);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[i];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={792:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise(((r,n)=>i=e[t]=[r,n]));n.push(i[2]=a);var o=r.p+r.u(t),l=new Error;r.l(o,(n=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,i[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var i,a,o=n[0],l=n[1],s=n[2],c=0;if(o.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)s(r)}for(t&&t(n);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkwecare=self.webpackChunkwecare||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";var e,t=r(43),n=r.t(t,2),i=r(391),a=r(950),o=r.t(a,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,r,n){return void 0===r&&(r=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function h(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function g(t,r,n,i){void 0===i&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,h=e.Pop,g=null,m=v();function v(){return(u.state||{idx:null}).idx}function x(){h=e.Pop;let t=v(),r=null==t?null:t-m;m=t,g&&g({action:h,location:y.location,delta:r})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,r="string"===typeof e?e:f(e);return r=r.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==m&&(m=0,u.replaceState(l({},u.state,{idx:m}),""));let y={get action(){return h},get location(){return t(a,u)},listen(e){if(g)throw new Error("A history only accepts one active listener");return a.addEventListener(s,x),g=e,()=>{a.removeEventListener(s,x),g=null}},createHref:e=>r(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,r){h=e.Push;let i=p(y.location,t,r);n&&n(i,t),m=v()+1;let l=d(i,m),s=y.createHref(i);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(s)}o&&g&&g({action:h,location:y.location,delta:1})},replace:function(t,r){h=e.Replace;let i=p(y.location,t,r);n&&n(i,t),m=v();let a=d(i,m),l=y.createHref(i);u.replaceState(a,"",l),o&&g&&g({action:h,location:y.location,delta:0})},go:e=>u.go(e)};return y}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,r){return void 0===r&&(r="/"),x(e,t,r,!1)}function x(e,t,r,n){let i=N(("string"===typeof t?h(t):t).pathname||"/",r);if(null==i)return null;let a=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l){let e=_(i);o=R(a[l],e,n)}return o}function b(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(c(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(n.length));let l=I([n,o.relativePath]),s=r.concat(o);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:O(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of y(e.path))i(e,t,n);else i(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===n.length)return i?[a,""]:[a];let o=y(n.join("/")),l=[];return l.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,k=3,j=2,S=1,C=10,P=-2,E=e=>"*"===e;function O(e,t){let r=e.split("/"),n=r.length;return r.some(E)&&(n+=P),t&&(n+=j),r.filter((e=>!E(e))).reduce(((e,t)=>e+(w.test(t)?k:""===t?S:C)),n)}function R(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,i={},a="/",o=[];for(let l=0;l<n.length;++l){let e=n[l],s=l===n.length-1,c="/"===a?t:t.slice(a.length)||"/",u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&r&&!n[n.length-1].route.index&&(u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:I([a,u.pathname]),pathnameBase:F(I([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=I([a,u.pathnameBase]))}return o}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(n.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce(((e,t,r)=>{let{paramName:n,isOptional:i}=t;if("*"===n){let e=l[r]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[r];return e[n]=i&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function _(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function L(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function z(e,t){let r=A(e);return t?r.map(((e,t)=>t===r.length-1?e.pathname:e.pathnameBase)):r.map((e=>e.pathnameBase))}function D(e,t,r,n){let i;void 0===n&&(n=!1),"string"===typeof e?i=h(e):(i=l({},e),c(!i.pathname||!i.pathname.includes("?"),L("?","pathname","search",i)),c(!i.pathname||!i.pathname.includes("#"),L("#","pathname","hash",i)),c(!i.search||!i.search.includes("#"),L("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=r;else{let e=t.length-1;if(!n&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:i=""}="string"===typeof e?h(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:M(n),hash:U(i)}}(i,a),d=s&&"/"!==s&&s.endsWith("/"),p=(o||"."===s)&&r.endsWith("/");return u.pathname.endsWith("/")||!d&&!p||(u.pathname+="/"),u}const I=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function $(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],V=(new Set(B),["get",...B]);new Set(V),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(this,arguments)}const W=t.createContext(null);const q=t.createContext(null);const K=t.createContext(null);const Y=t.createContext(null);const Q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const J=t.createContext(null);function G(){return null!=t.useContext(Y)}function X(){return G()||c(!1),t.useContext(Y).location}function Z(e){t.useContext(K).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(Q);return e?function(){let{router:e}=ue(se.UseNavigateStable),r=pe(ce.UseNavigateStable),n=t.useRef(!1);return Z((()=>{n.current=!0})),t.useCallback((function(t,i){void 0===i&&(i={}),n.current&&("number"===typeof t?e.navigate(t):e.navigate(t,H({fromRouteId:r},i)))}),[e,r])}():function(){G()||c(!1);let e=t.useContext(W),{basename:r,future:n,navigator:i}=t.useContext(K),{matches:a}=t.useContext(Q),{pathname:o}=X(),l=JSON.stringify(z(a,n.v7_relativeSplatPath)),s=t.useRef(!1);return Z((()=>{s.current=!0})),t.useCallback((function(t,n){if(void 0===n&&(n={}),!s.current)return;if("number"===typeof t)return void i.go(t);let a=D(t,JSON.parse(l),o,"path"===n.relative);null==e&&"/"!==r&&(a.pathname="/"===a.pathname?r:I([r,a.pathname])),(n.replace?i.replace:i.push)(a,n.state,n)}),[r,i,l,o,e])}()}function te(e,r){let{relative:n}=void 0===r?{}:r,{future:i}=t.useContext(K),{matches:a}=t.useContext(Q),{pathname:o}=X(),l=JSON.stringify(z(a,i.v7_relativeSplatPath));return t.useMemo((()=>D(e,JSON.parse(l),o,"path"===n)),[e,l,o,n])}function re(r,n,i,a){G()||c(!1);let{navigator:o,static:l}=t.useContext(K),{matches:s}=t.useContext(Q),u=s[s.length-1],d=u?u.params:{},p=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let f,g=X();if(n){var m;let e="string"===typeof n?h(n):n;"/"===p||(null==(m=e.pathname)?void 0:m.startsWith(p))||c(!1),f=e}else f=g;let x=f.pathname||"/",b=x;if("/"!==p){let e=p.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=!l&&i&&i.matches&&i.matches.length>0?i.matches:v(r,{pathname:b});let w=le(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:I([p,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:I([p,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,i,a);return n&&w?t.createElement(Y.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},w):w}function ne(){let e=function(){var e;let r=t.useContext(J),n=de(ce.UseRouteError),i=pe(ce.UseRouteError);if(void 0!==r)return r;return null==(e=n.errors)?void 0:e[i]}(),r=$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},r),n?t.createElement("pre",{style:a},n):null,null)}const ie=t.createElement(ne,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Q.Provider,{value:this.props.routeContext},t.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:r,match:n,children:i}=e,a=t.useContext(W);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),t.createElement(Q.Provider,{value:r},i)}function le(e,r,n,i){var a;if(void 0===r&&(r=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===r.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(a=n)?void 0:a.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,i,a)=>{let o,c=!1,p=null,f=null;var h;n&&(o=s&&i.route.id?s[i.route.id]:void 0,p=i.route.errorElement||ie,u&&(d<0&&0===a?(h="route-fallback",!1||fe[h]||(fe[h]=!0),c=!0,f=null):d===a&&(c=!0,f=i.route.hydrateFallbackElement||null)));let g=r.concat(l.slice(0,a+1)),m=()=>{let r;return r=o?p:c?f:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(oe,{match:i,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:r})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?t.createElement(ae,{location:n.location,revalidation:n.revalidation,component:p,error:o,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()}),null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let r=t.useContext(W);return r||c(!1),r}function de(e){let r=t.useContext(q);return r||c(!1),r}function pe(e){let r=function(){let e=t.useContext(Q);return e||c(!1),e}(),n=r.matches[r.matches.length-1];return n.route.id||c(!1),n.route.id}const fe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}n.startTransition;function ge(e){c(!1)}function me(r){let{basename:n="/",children:i=null,location:a,navigationType:o=e.Pop,navigator:l,static:s=!1,future:u}=r;G()&&c(!1);let d=n.replace(/^\/*/,"/"),p=t.useMemo((()=>({basename:d,navigator:l,static:s,future:H({v7_relativeSplatPath:!1},u)})),[d,u,l,s]);"string"===typeof a&&(a=h(a));let{pathname:f="/",search:g="",hash:m="",state:v=null,key:x="default"}=a,b=t.useMemo((()=>{let e=N(f,d);return null==e?null:{location:{pathname:e,search:g,hash:m,state:v,key:x},navigationType:o}}),[d,f,g,m,v,x,o]);return null==b?null:t.createElement(K.Provider,{value:p},t.createElement(Y.Provider,{children:i,value:b}))}function ve(e){let{children:t,location:r}=e;return re(xe(t),r)}new Promise((()=>{}));t.Component;function xe(e,r){void 0===r&&(r=[]);let n=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;let a=[...r,i];if(e.type===t.Fragment)return void n.push.apply(n,xe(e.props.children,a));e.type!==ge&&c(!1),e.props.index&&e.props.children&&c(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=xe(e.props.children,a)),n.push(o)})),n}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},be.apply(this,arguments)}function ye(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(ef){}new Map;const ke=n.startTransition;o.flushSync,n.useId;function je(e){let{basename:r,children:n,future:i,window:a}=e,o=t.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),g((function(e,t){let{pathname:r,search:n,hash:i}=e.location;return p("",{pathname:r,search:n,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:f(t)}),null,l)));let s=o.current,[c,u]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=i||{},h=t.useCallback((e=>{d&&ke?ke((()=>u(e))):u(e)}),[u,d]);return t.useLayoutEffect((()=>s.listen(h)),[s,h]),t.useEffect((()=>he(i)),[i]),t.createElement(me,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:s,future:i})}const Se="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=t.forwardRef((function(e,r){let n,{onClick:i,relative:a,reloadDocument:o,replace:l,state:s,target:u,to:d,preventScrollReset:p,viewTransition:h}=e,g=ye(e,we),{basename:m}=t.useContext(K),v=!1;if("string"===typeof d&&Ce.test(d)&&(n=d,Se))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),r=N(t.pathname,m);t.origin===e.origin&&null!=r?d=r+t.search+t.hash:v=!0}catch(ef){}let x=function(e,r){let{relative:n}=void 0===r?{}:r;G()||c(!1);let{basename:i,navigator:a}=t.useContext(K),{hash:o,pathname:l,search:s}=te(e,{relative:n}),u=l;return"/"!==i&&(u="/"===l?i:I([i,l])),a.createHref({pathname:u,search:s,hash:o})}(d,{relative:a}),b=function(e,r){let{target:n,replace:i,state:a,preventScrollReset:o,relative:l,viewTransition:s}=void 0===r?{}:r,c=ee(),u=X(),d=te(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let r=void 0!==i?i:f(u)===f(d);c(e,{replace:r,state:a,preventScrollReset:o,relative:l,viewTransition:s})}}),[u,c,d,i,a,n,e,o,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:p,relative:a,viewTransition:h});return t.createElement("a",be({},g,{href:n||x,onClick:v||o?i:function(e){i&&i(e),e.defaultPrevented||b(e)},ref:r,target:u}))}));var Ee,Oe;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ee||(Ee={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Oe||(Oe={}));var Re=r(528),Te=r(324),_e=r.n(Te);const Ne=function(e){function t(e,n,s,c,p){for(var f,h,g,m,y,k=0,j=0,S=0,C=0,P=0,N=0,A=g=f=0,D=0,I=0,F=0,M=0,U=s.length,$=U-1,B="",V="",H="",W="";D<U;){if(h=s.charCodeAt(D),D===$&&0!==j+C+S+k&&(0!==j&&(h=47===j?10:47),C=S=k=0,U++,$++),0===j+C+S+k){if(D===$&&(0<I&&(B=B.replace(d,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=s.charAt(D)}h=59}switch(h){case 123:for(f=(B=B.trim()).charCodeAt(0),g=1,M=++D;D<U;){switch(h=s.charCodeAt(D)){case 123:g++;break;case 125:g--;break;case 47:switch(h=s.charCodeAt(D+1)){case 42:case 47:e:{for(A=D+1;A<$;++A)switch(s.charCodeAt(A)){case 47:if(42===h&&42===s.charCodeAt(A-1)&&D+2!==A){D=A+1;break e}break;case 10:if(47===h){D=A+1;break e}}D=A}}break;case 91:h++;case 40:h++;case 34:case 39:for(;D++<$&&s.charCodeAt(D)!==h;);}if(0===g)break;D++}if(g=s.substring(M,D),0===f&&(f=(B=B.replace(u,"").trim()).charCodeAt(0)),64===f){switch(0<I&&(B=B.replace(d,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:I=n;break;default:I=_}if(M=(g=t(n,I,g,h,p+1)).length,0<L&&(y=l(3,g,I=r(_,B,F),n,O,E,M,h,p,c),B=I.join(""),void 0!==y&&0===(M=(g=y.trim()).length)&&(h=0,g="")),0<M)switch(h){case 115:B=B.replace(w,o);case 100:case 109:case 45:g=B+"{"+g+"}";break;case 107:g=(B=B.replace(v,"$1 $2"))+"{"+g+"}",g=1===T||2===T&&a("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=B+g,112===c&&(V+=g,g="")}else g=""}else g=t(n,r(n,B,F),g,c,p+1);H+=g,g=F=I=A=f=0,B="",h=s.charCodeAt(++D);break;case 125:case 59:if(1<(M=(B=(0<I?B.replace(d,""):B).trim()).length))switch(0===A&&(f=B.charCodeAt(0),45===f||96<f&&123>f)&&(M=(B=B.replace(" ",":")).length),0<L&&void 0!==(y=l(1,B,n,e,O,E,V.length,c,p,c))&&0===(M=(B=y.trim()).length)&&(B="\0\0"),f=B.charCodeAt(0),h=B.charCodeAt(1),f){case 0:break;case 64:if(105===h||99===h){W+=B+s.charAt(D);break}default:58!==B.charCodeAt(M-1)&&(V+=i(B,f,h,B.charCodeAt(2)))}F=I=A=f=0,B="",h=s.charCodeAt(++D)}}switch(h){case 13:case 10:47===j?j=0:0===1+f&&107!==c&&0<B.length&&(I=1,B+="\0"),0<L*z&&l(0,B,n,e,O,E,V.length,c,p,c),E=1,O++;break;case 59:case 125:if(0===j+C+S+k){E++;break}default:switch(E++,m=s.charAt(D),h){case 9:case 32:if(0===C+k+j)switch(P){case 44:case 58:case 9:case 32:m="";break;default:32!==h&&(m=" ")}break;case 0:m="\\0";break;case 12:m="\\f";break;case 11:m="\\v";break;case 38:0===C+j+k&&(I=F=1,m="\f"+m);break;case 108:if(0===C+j+k+R&&0<A)switch(D-A){case 2:112===P&&58===s.charCodeAt(D-3)&&(R=P);case 8:111===N&&(R=N)}break;case 58:0===C+j+k&&(A=D);break;case 44:0===j+S+C+k&&(I=1,m+="\r");break;case 34:case 39:0===j&&(C=C===h?0:0===C?h:C);break;case 91:0===C+j+S&&k++;break;case 93:0===C+j+S&&k--;break;case 41:0===C+j+k&&S--;break;case 40:if(0===C+j+k){if(0===f)if(2*P+3*N===533);else f=1;S++}break;case 64:0===j+S+C+k+A+g&&(g=1);break;case 42:case 47:if(!(0<C+k+S))switch(j){case 0:switch(2*h+3*s.charCodeAt(D+1)){case 235:j=47;break;case 220:M=D,j=42}break;case 42:47===h&&42===P&&M+2!==D&&(33===s.charCodeAt(M+2)&&(V+=s.substring(M,D+1)),m="",j=0)}}0===j&&(B+=m)}N=P,P=h,D++}if(0<(M=V.length)){if(I=n,0<L&&(void 0!==(y=l(2,V,I,e,O,E,M,c,p,c))&&0===(V=y).length))return W+V+H;if(V=I.join(",")+"{"+V+"}",0!==T*R){switch(2!==T||a(V,2)||(R=0),R){case 111:V=V.replace(b,":-moz-$1")+V;break;case 112:V=V.replace(x,"::-webkit-input-$1")+V.replace(x,"::-moz-$1")+V.replace(x,":-ms-input-$1")+V}R=0}}return W+V+H}function r(e,t,r){var i=t.trim().split(g);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var l=0;for(e=0===o?"":e[0]+" ";l<a;++l)t[l]=n(e,t[l],r).trim();break;default:var s=l=0;for(t=[];l<a;++l)for(var c=0;c<o;++c)t[s++]=n(e[c]+" ",i[l],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",l=2*t+3*r+4*n;if(944===l){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===T||2===T&&a(s,1)?"-webkit-"+s+s:s}if(0===T||2===T&&!a(o,1))return o;switch(l){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(P,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return f.test(o)?o.replace(p,":-webkit-")+o.replace(p,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(y,"tb");break;case 232:s=o.replace(y,"tb-rl");break;case 220:s=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,l=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(j,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(j,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),A(2!==t?n:n.replace(S,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,r,n,i,a,o,l,s,u){for(var d,p=0,f=t;p<L;++p)switch(d=N[p].call(c,e,f,r,n,i,a,o,l,s,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function s(e){return void 0!==(e=e.prefix)&&(A=null,e?"function"!==typeof e?T=1:(T=2,A=e):T=0),s}function c(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<L){var i=l(-1,r,n,n,O,E,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var a=t(_,n,r,0,0);return 0<L&&(void 0!==(i=l(-2,a,n,n,O,E,a.length,0,0,0))&&(a=i)),R=0,E=O=1,a}var u=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,f=/zoo|gra/,h=/([,: ])(transform)/g,g=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,b=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,j=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,P=/([^-])(image-set\()/,E=1,O=1,R=0,T=1,_=[],N=[],L=0,A=null,z=0;return c.use=function e(t){switch(t){case void 0:case null:L=N.length=0;break;default:if("function"===typeof t)N[L++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else z=0|!!t}return e},c.set=s,void 0!==e&&s(e),c};const Le={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ae(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var ze=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,De=Ae((function(e){return ze.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),Ie=r(219),Fe=r.n(Ie);function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Ue=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},$e=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,Re.QP)(e)},Be=Object.freeze([]),Ve=Object.freeze({});function He(e){return"function"==typeof e}function We(e){return e.displayName||e.name||"Component"}function qe(e){return e&&"string"==typeof e.styledComponentId}var Ke="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.SC_ATTR)||"data-styled",Ye="undefined"!=typeof window&&"HTMLElement"in window,Qe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_ENABLE_ANALYTICS:"true"}.SC_DISABLE_SPEEDY)));function Je(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var Ge=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&Je(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(o,t[l])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),Xe=new Map,Ze=new Map,et=1,tt=function(e){if(Xe.has(e))return Xe.get(e);for(;Ze.has(et);)et++;var t=et++;return Xe.set(e,t),Ze.set(t,e),t},rt=function(e){return Ze.get(e)},nt=function(e,t){t>=et&&(et=t+1),Xe.set(e,t),Ze.set(t,e)},it="style["+Ke+'][data-styled-version="5.3.11"]',at=new RegExp("^"+Ke+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ot=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},lt=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var l=o.match(at);if(l){var s=0|parseInt(l[1],10),c=l[2];0!==s&&(nt(c,s),ot(e,c,l[3]),e.getTag().insertRules(s,n)),n.length=0}else n.push(o)}}},st=function(){return r.nc},ct=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(Ke))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(Ke,"active"),n.setAttribute("data-styled-version","5.3.11");var o=st();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},ut=function(){function e(e){var t=this.element=ct(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}Je(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),dt=function(){function e(e){var t=this.element=ct(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ft=Ye,ht={isServer:!Ye,useCSSOMInjection:!Qe},gt=function(){function e(e,t,r){void 0===e&&(e=Ve),void 0===t&&(t={}),this.options=Me({},ht,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ye&&ft&&(ft=!1,function(e){for(var t=document.querySelectorAll(it),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(Ke)&&(lt(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return tt(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(Me({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new pt(i):n?new ut(i):new dt(i),new Ge(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(tt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(tt(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(tt(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a=rt(i);if(void 0!==a){var o=e.names.get(a),l=t.getGroup(i);if(o&&l&&o.size){var s=Ke+".g"+i+'[id="'+a+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),n+=""+l+s+'{content:"'+c+'"}/*!sc*/\n'}}}return n}(this)},e}(),mt=/(a)(d)/gi,vt=function(e){return String.fromCharCode(e+(e>25?39:97))};function xt(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=vt(t%52)+r;return(vt(t%52)+r).replace(mt,"$1-$2")}var bt=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},yt=function(e){return bt(5381,e)};function wt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(He(r)&&!qe(r))return!1}return!0}var kt=yt("5.3.11"),jt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&wt(e),this.componentId=t,this.baseHash=bt(kt,t),this.baseStyle=r,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var a=$t(this.rules,e,t,r).join(""),o=xt(bt(this.baseHash,a)>>>0);if(!t.hasNameForId(n,o)){var l=r(a,"."+o,void 0,n);t.insertRules(n,o,l)}i.push(o),this.staticRulesId=o}else{for(var s=this.rules.length,c=bt(this.baseHash,r.hash),u="",d=0;d<s;d++){var p=this.rules[d];if("string"==typeof p)u+=p;else if(p){var f=$t(p,e,t,r),h=Array.isArray(f)?f.join(""):f;c=bt(c,h+d),u+=h}}if(u){var g=xt(c>>>0);if(!t.hasNameForId(n,g)){var m=r(u,"."+g,void 0,n);t.insertRules(n,g,m)}i.push(g)}}return i.join(" ")},e}(),St=/^\s*\/\/.*$/gm,Ct=[":","[",".","#"];function Pt(e){var t,r,n,i,a=void 0===e?Ve:e,o=a.options,l=void 0===o?Ve:o,s=a.plugins,c=void 0===s?Be:s,u=new Ne(l),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,a,o,l,s,c,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===c)return n+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+n),"";default:return n+(0===d?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,n,a){return 0===n&&-1!==Ct.indexOf(a[r.length])||a.match(i)?e:"."+t};function h(e,a,o,l){void 0===l&&(l="&");var s=e.replace(St,""),c=a&&o?o+" "+a+" { "+s+" }":s;return t=l,r=a,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),u(o||!a?"":a,c)}return u.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),h.hash=c.length?c.reduce((function(e,t){return t.name||Je(15),bt(e,t.name)}),5381).toString():"",h}var Et=t.createContext(),Ot=(Et.Consumer,t.createContext()),Rt=(Ot.Consumer,new gt),Tt=Pt();function _t(){return(0,t.useContext)(Et)||Rt}function Nt(){return(0,t.useContext)(Ot)||Tt}function Lt(e){var r=(0,t.useState)(e.stylisPlugins),n=r[0],i=r[1],a=_t(),o=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,t.useMemo)((function(){return Pt({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return(0,t.useEffect)((function(){_e()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),t.createElement(Et.Provider,{value:o},t.createElement(Ot.Provider,{value:l},e.children))}var At=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Tt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return Je(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Tt),this.name+e.hash},e}(),zt=/([A-Z])/,Dt=/([A-Z])/g,It=/^ms-/,Ft=function(e){return"-"+e.toLowerCase()};function Mt(e){return zt.test(e)?e.replace(Dt,Ft).replace(It,"-ms-"):e}var Ut=function(e){return null==e||!1===e||""===e};function $t(e,t,r,n){if(Array.isArray(e)){for(var i,a=[],o=0,l=e.length;o<l;o+=1)""!==(i=$t(e[o],t,r,n))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return Ut(e)?"":qe(e)?"."+e.styledComponentId:He(e)?"function"!=typeof(s=e)||s.prototype&&s.prototype.isReactComponent||!t?e:$t(e(t),t,r,n):e instanceof At?r?(e.inject(r,n),e.getName(n)):e:$e(e)?function e(t,r){var n,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!Ut(t[o])&&(Array.isArray(t[o])&&t[o].isCss||He(t[o])?a.push(Mt(o)+":",t[o],";"):$e(t[o])?a.push.apply(a,e(t[o],o)):a.push(Mt(o)+": "+(n=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in Le||n.startsWith("--")?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(a,["}"]):a}(e):e.toString();var s}var Bt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return He(e)||$e(e)?Bt($t(Ue(Be,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:Bt($t(Ue(e,r)))}new Set;var Ht=function(e,t,r){return void 0===r&&(r=Ve),e.theme!==r.theme&&e.theme||t||r.theme},Wt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qt=/(^-|-$)/g;function Kt(e){return e.replace(Wt,"-").replace(qt,"")}var Yt=function(e){return xt(yt(e)>>>0)};function Qt(e){return"string"==typeof e&&!0}var Jt=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Gt=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Xt(e,t,r){var n=e[r];Jt(t)&&Jt(n)?Zt(n,t):e[r]=t}function Zt(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(Jt(o))for(var l in o)Gt(l)&&Xt(e,o[l],l)}return e}var er=t.createContext();er.Consumer;var tr={};function rr(e,r,n){var i=qe(e),a=!Qt(e),o=r.attrs,l=void 0===o?Be:o,s=r.componentId,c=void 0===s?function(e,t){var r="string"!=typeof e?"sc":Kt(e);tr[r]=(tr[r]||0)+1;var n=r+"-"+Yt("5.3.11"+r+tr[r]);return t?t+"-"+n:n}(r.displayName,r.parentComponentId):s,u=r.displayName,d=void 0===u?function(e){return Qt(e)?"styled."+e:"Styled("+We(e)+")"}(e):u,p=r.displayName&&r.componentId?Kt(r.displayName)+"-"+r.componentId:r.componentId||c,f=i&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=r.shouldForwardProp;i&&e.shouldForwardProp&&(h=r.shouldForwardProp?function(t,n,i){return e.shouldForwardProp(t,n,i)&&r.shouldForwardProp(t,n,i)}:e.shouldForwardProp);var g,m=new jt(n,p,i?e.componentStyle:void 0),v=m.isStatic&&0===l.length,x=function(e,r){return function(e,r,n,i){var a=e.attrs,o=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,c=e.shouldForwardProp,u=e.styledComponentId,d=e.target,p=function(e,t,r){void 0===e&&(e=Ve);var n=Me({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,a,o=e;for(t in He(o)&&(o=o(n)),o)n[t]=i[t]="className"===t?(r=i[t],a=o[t],r&&a?r+" "+a:r||a):o[t]})),[n,i]}(Ht(r,(0,t.useContext)(er),l)||Ve,r,a),f=p[0],h=p[1],g=function(e,t,r){var n=_t(),i=Nt();return t?e.generateAndInjectStyles(Ve,n,i):e.generateAndInjectStyles(r,n,i)}(o,i,f),m=n,v=h.$as||r.$as||h.as||r.as||d,x=Qt(v),b=h!==r?Me({},r,{},h):r,y={};for(var w in b)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?y.as=b[w]:(c?c(w,De,v):!x||De(w))&&(y[w]=b[w]));return r.style&&h.style!==r.style&&(y.style=Me({},r.style,{},h.style)),y.className=Array.prototype.concat(s,u,g!==u?g:null,r.className,h.className).filter(Boolean).join(" "),y.ref=m,(0,t.createElement)(v,y)}(g,e,r,v)};return x.displayName=d,(g=t.forwardRef(x)).attrs=f,g.componentStyle=m,g.displayName=d,g.shouldForwardProp=h,g.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Be,g.styledComponentId=p,g.target=i?e.target:e,g.withComponent=function(e){var t=r.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,["componentId"]),a=t&&t+"-"+(Qt(e)?e:Kt(We(e)));return rr(e,Me({},i,{attrs:f,componentId:a}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Zt({},e.defaultProps,t):t}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),a&&Fe()(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var nr=function(e){return function e(t,r,n){if(void 0===n&&(n=Ve),!(0,Re.Hy)(r))return Je(1,String(r));var i=function(){return t(r,n,Vt.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,r,Me({},n,{},i))},i.attrs=function(i){return e(t,r,Me({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(rr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){nr[e]=nr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=wt(e),gt.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var i=n($t(this.rules,t,r,n).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=st();return"<style "+[r&&'nonce="'+r+'"',Ke+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?Je(2):e._emitSheetCSS()},this.getStyleElement=function(){var r;if(e.sealed)return Je(2);var n=((r={})[Ke]="",r["data-styled-version"]="5.3.11",r.dangerouslySetInnerHTML={__html:e.instance.toString()},r),i=st();return i&&(n.nonce=i),[t.createElement("style",Me({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}var r=e.prototype;r.collectStyles=function(e){return this.sealed?Je(2):t.createElement(Lt,{sheet:this.instance},e)},r.interleaveWithNodeStream=function(e){return Je(3)}}();const ir=nr;function ar(e){return ar="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ar(e)}function or(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lr(e){var t=function(e,t){if("object"!=ar(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=ar(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ar(t)?t:t+""}function sr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lr(n.key),n)}}function cr(e,t,r){return t&&sr(e.prototype,t),r&&sr(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ur(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dr(e,t){return dr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},dr(e,t)}function pr(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&dr(e,t)}function fr(e,t){if(t&&("object"==ar(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ur(e)}function hr(e){return hr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},hr(e)}function gr(e,t,r){return(t=lr(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mr(e){if(Array.isArray(e))return e}function vr(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function xr(e,t){if(e){if("string"==typeof e)return vr(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?vr(e,t):void 0}}function br(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function yr(e){return mr(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||xr(e)||br()}function wr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function kr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?wr(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var jr={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},Sr=new(function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};or(this,e),this.init(t,r)}return cr(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||jr,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,r,n){return n&&!this.debug?null:("string"===typeof e[0]&&(e[0]="".concat(r).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,kr(kr({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}()),Cr=function(){function e(){or(this,e),this.observers={}}return cr(e,[{key:"on",value:function(e,t){var r=this;return e.split(" ").forEach((function(e){r.observers[e]=r.observers[e]||[],r.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.observers[e]&&[].concat(this.observers[e]).forEach((function(e){e.apply(void 0,r)}));this.observers["*"]&&[].concat(this.observers["*"]).forEach((function(t){t.apply(t,[e].concat(r))}))}}]),e}();function Pr(){var e,t,r=new Promise((function(r,n){e=r,t=n}));return r.resolve=e,r.reject=t,r}function Er(e){return null==e?"":""+e}function Or(e,t,r){function n(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function i(){return!e||"string"===typeof e}for(var a="string"!==typeof t?[].concat(t):t.split(".");a.length>1;){if(i())return{};var o=n(a.shift());!e[o]&&r&&(e[o]=new r),e=Object.prototype.hasOwnProperty.call(e,o)?e[o]:{}}return i()?{}:{obj:e,k:n(a.shift())}}function Rr(e,t,r){var n=Or(e,t,Object);n.obj[n.k]=r}function Tr(e,t){var r=Or(e,t),n=r.obj,i=r.k;if(n)return n[i]}function _r(e,t,r){for(var n in t)"__proto__"!==n&&"constructor"!==n&&(n in e?"string"===typeof e[n]||e[n]instanceof String||"string"===typeof t[n]||t[n]instanceof String?r&&(e[n]=t[n]):_r(e[n],t[n],r):e[n]=t[n]);return e}function Nr(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Lr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Ar(e){return"string"===typeof e?e.replace(/[&<>"'\/]/g,(function(e){return Lr[e]})):e}var zr="undefined"!==typeof window&&window.navigator&&"undefined"===typeof window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Dr=[" ",",","?","!",";"];function Ir(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(e){if(e[t])return e[t];for(var n=t.split(r),i=e,a=0;a<n.length;++a){if(!i)return;if("string"===typeof i[n[a]]&&a+1<n.length)return;if(void 0===i[n[a]]){for(var o=2,l=n.slice(a,a+o).join(r),s=i[l];void 0===s&&n.length>a+o;)o++,s=i[l=n.slice(a,a+o).join(r)];if(void 0===s)return;if(null===s)return null;if(t.endsWith(l)){if("string"===typeof s)return s;if(l&&"string"===typeof s[l])return s[l]}var c=n.slice(a+o).join(r);return c?Ir(s,c,r):void 0}i=i[n[a]]}return i}}function Fr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Mr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fr(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ur(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(ef){return!1}}();return function(){var r,n=hr(e);if(t){var i=hr(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return fr(this,r)}}var $r=function(e){pr(r,e);var t=Ur(r);function r(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return or(this,r),n=t.call(this),zr&&Cr.call(ur(n)),n.data=e||{},n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),void 0===n.options.ignoreJSONStructure&&(n.options.ignoreJSONStructure=!0),n}return cr(r,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure,o=[e,t];r&&"string"!==typeof r&&(o=o.concat(r)),r&&"string"===typeof r&&(o=o.concat(i?r.split(i):r)),e.indexOf(".")>-1&&(o=e.split("."));var l=Tr(this.data,o);return l||!a||"string"!==typeof r?l:Ir(this.data&&this.data[e]&&this.data[e][t],r,i)}},{key:"addResource",value:function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},a=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=[e,t];r&&(o=o.concat(a?r.split(a):r)),e.indexOf(".")>-1&&(n=t,t=(o=e.split("."))[1]),this.addNamespaces(t),Rr(this.data,o,n),i.silent||this.emit("added",e,t,r,n)}},{key:"addResources",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var i in r)"string"!==typeof r[i]&&"[object Array]"!==Object.prototype.toString.apply(r[i])||this.addResource(e,t,i,r[i],{silent:!0});n.silent||this.emit("added",e,t,r)}},{key:"addResourceBundle",value:function(e,t,r,n,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},o=[e,t];e.indexOf(".")>-1&&(n=r,r=t,t=(o=e.split("."))[1]),this.addNamespaces(t);var l=Tr(this.data,o)||{};n?_r(l,r,i):l=Mr(Mr({},l),r),Rr(this.data,o,l),a.silent||this.emit("added",e,t,r)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?Mr(Mr({},{}),this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((function(e){return t[e]&&Object.keys(t[e]).length>0}))}},{key:"toJSON",value:function(){return this.data}}]),r}(Cr),Br={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,r,n,i){var a=this;return e.forEach((function(e){a.processors[e]&&(t=a.processors[e].process(t,r,n,i))})),t}};function Vr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Hr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Vr(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vr(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Wr(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(ef){return!1}}();return function(){var r,n=hr(e);if(t){var i=hr(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return fr(this,r)}}var qr={},Kr=function(e){pr(r,e);var t=Wr(r);function r(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return or(this,r),n=t.call(this),zr&&Cr.call(ur(n)),function(e,t,r){e.forEach((function(e){t[e]&&(r[e]=t[e])}))}(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,ur(n)),n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=Sr.create("translator"),n}return cr(r,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(void 0===e||null===e)return!1;var r=this.resolve(e,t);return r&&void 0!==r.res}},{key:"extractFromKey",value:function(e,t){var r=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===r&&(r=":");var n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=t.ns||this.options.defaultNS||[],a=r&&e.indexOf(r)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!function(e,t,r){t=t||"",r=r||"";var n=Dr.filter((function(e){return t.indexOf(e)<0&&r.indexOf(e)<0}));if(0===n.length)return!0;var i=new RegExp("(".concat(n.map((function(e){return"?"===e?"\\?":e})).join("|"),")")),a=!i.test(e);if(!a){var o=e.indexOf(r);o>0&&!i.test(e.substring(0,o))&&(a=!0)}return a}(e,r,n);if(a&&!o){var l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:i};var s=e.split(r);(r!==n||r===n&&this.options.ns.indexOf(s[0])>-1)&&(i=s.shift()),e=s.join(n)}return"string"===typeof i&&(i=[i]),{key:e,namespaces:i}}},{key:"translate",value:function(e,t,n){var i=this;if("object"!==ar(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"===ar(t)&&(t=Hr({},t)),t||(t={}),void 0===e||null===e)return"";Array.isArray(e)||(e=[String(e)]);var a=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,l=this.extractFromKey(e[e.length-1],t),s=l.key,c=l.namespaces,u=c[c.length-1],d=t.lng||this.language,p=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&"cimode"===d.toLowerCase()){if(p){var f=t.nsSeparator||this.options.nsSeparator;return a?{res:"".concat(u).concat(f).concat(s),usedKey:s,exactUsedKey:s,usedLng:d,usedNS:u}:"".concat(u).concat(f).concat(s)}return a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:u}:s}var h=this.resolve(e,t),g=h&&h.res,m=h&&h.usedKey||s,v=h&&h.exactUsedKey||s,x=Object.prototype.toString.apply(g),b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject;if(y&&g&&("string"!==typeof g&&"boolean"!==typeof g&&"number"!==typeof g)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(x)<0&&("string"!==typeof b||"[object Array]"!==x)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,g,Hr(Hr({},t),{},{ns:c})):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");return a?(h.res=w,h):w}if(o){var k="[object Array]"===x,j=k?[]:{},S=k?v:m;for(var C in g)if(Object.prototype.hasOwnProperty.call(g,C)){var P="".concat(S).concat(o).concat(C);j[C]=this.translate(P,Hr(Hr({},t),{joinArrays:!1,ns:c})),j[C]===P&&(j[C]=g[C])}g=j}}else if(y&&"string"===typeof b&&"[object Array]"===x)(g=g.join(b))&&(g=this.extendTranslation(g,e,t,n));else{var E=!1,O=!1,R=void 0!==t.count&&"string"!==typeof t.count,T=r.hasDefaultValue(t),_=R?this.pluralResolver.getSuffix(d,t.count,t):"",N=t["defaultValue".concat(_)]||t.defaultValue;!this.isValidLookup(g)&&T&&(E=!0,g=N),this.isValidLookup(g)||(O=!0,g=s);var L=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&O?void 0:g,A=T&&N!==g&&this.options.updateMissing;if(O||E||A){if(this.logger.log(A?"updateKey":"missingKey",d,u,s,A?N:g),o){var z=this.resolve(s,Hr(Hr({},t),{},{keySeparator:!1}));z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var D=[],I=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&I&&I[0])for(var F=0;F<I.length;F++)D.push(I[F]);else"all"===this.options.saveMissingTo?D=this.languageUtils.toResolveHierarchy(t.lng||this.language):D.push(t.lng||this.language);var M=function(e,r,n){var a=T&&n!==g?n:L;i.options.missingKeyHandler?i.options.missingKeyHandler(e,u,r,a,A,t):i.backendConnector&&i.backendConnector.saveMissing&&i.backendConnector.saveMissing(e,u,r,a,A,t),i.emit("missingKey",e,u,r,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?D.forEach((function(e){i.pluralResolver.getSuffixes(e,t).forEach((function(r){M([e],s+r,t["defaultValue".concat(r)]||N)}))})):M(D,s,N))}g=this.extendTranslation(g,e,t,h,n),O&&g===s&&this.options.appendNamespaceToMissingKey&&(g="".concat(u,":").concat(s)),(O||E)&&this.options.parseMissingKeyHandler&&(g="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(u,":").concat(s):s,E?g:void 0):this.options.parseMissingKeyHandler(g))}return a?(h.res=g,h):g}},{key:"extendTranslation",value:function(e,t,r,n,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,Hr(Hr({},this.options.interpolation.defaultVariables),r),n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init(Hr(Hr({},r),{interpolation:Hr(Hr({},this.options.interpolation),r.interpolation)}));var o,l="string"===typeof e&&(r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(l){var s=e.match(this.interpolator.nestingRegexp);o=s&&s.length}var c=r.replace&&"string"!==typeof r.replace?r.replace:r;if(this.options.interpolation.defaultVariables&&(c=Hr(Hr({},this.options.interpolation.defaultVariables),c)),e=this.interpolator.interpolate(e,c,r.lng||this.language,r),l){var u=e.match(this.interpolator.nestingRegexp);o<(u&&u.length)&&(r.nest=!1)}!r.lng&&"v1"!==this.options.compatibilityAPI&&n&&n.res&&(r.lng=n.usedLng),!1!==r.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return i&&i[0]===n[0]&&!r.context?(a.logger.warn("It seems you are nesting recursively key: ".concat(n[0]," in key: ").concat(t[0])),null):a.translate.apply(a,n.concat([t]))}),r)),r.interpolation&&this.interpolator.reset()}var d=r.postProcess||this.options.postProcess,p="string"===typeof d?[d]:d;return void 0!==e&&null!==e&&p&&p.length&&!1!==r.applyPostProcessor&&(e=Br.handle(p,e,t,this.options&&this.options.postProcessPassResolved?Hr({i18nResolved:n},r):r,this)),e}},{key:"resolve",value:function(e){var t,r,n,i,a,o=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e&&(e=[e]),e.forEach((function(e){if(!o.isValidLookup(t)){var s=o.extractFromKey(e,l),c=s.key;r=c;var u=s.namespaces;o.options.fallbackNS&&(u=u.concat(o.options.fallbackNS));var d=void 0!==l.count&&"string"!==typeof l.count,p=d&&!l.ordinal&&0===l.count&&o.pluralResolver.shouldUseIntlApi(),f=void 0!==l.context&&("string"===typeof l.context||"number"===typeof l.context)&&""!==l.context,h=l.lngs?l.lngs:o.languageUtils.toResolveHierarchy(l.lng||o.language,l.fallbackLng);u.forEach((function(e){o.isValidLookup(t)||(a=e,!qr["".concat(h[0],"-").concat(e)]&&o.utils&&o.utils.hasLoadedNamespace&&!o.utils.hasLoadedNamespace(a)&&(qr["".concat(h[0],"-").concat(e)]=!0,o.logger.warn('key "'.concat(r,'" for languages "').concat(h.join(", "),'" won\'t get resolved as namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach((function(r){if(!o.isValidLookup(t)){i=r;var a,s=[c];if(o.i18nFormat&&o.i18nFormat.addLookupKeys)o.i18nFormat.addLookupKeys(s,c,r,e,l);else{var u;d&&(u=o.pluralResolver.getSuffix(r,l.count,l));var h="".concat(o.options.pluralSeparator,"zero");if(d&&(s.push(c+u),p&&s.push(c+h)),f){var g="".concat(c).concat(o.options.contextSeparator).concat(l.context);s.push(g),d&&(s.push(g+u),p&&s.push(g+h))}}for(;a=s.pop();)o.isValidLookup(t)||(n=a,t=o.getResource(r,e,a,l))}})))}))}})),{res:t,usedKey:r,exactUsedKey:n,usedLng:i,usedNS:a}}},{key:"isValidLookup",value:function(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,r,n):this.resourceStore.getResource(e,t,r,n)}}],[{key:"hasDefaultValue",value:function(e){var t="defaultValue";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t===r.substring(0,12)&&void 0!==e[r])return!0;return!1}}]),r}(Cr);function Yr(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Qr=function(){function e(t){or(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Sr.create("languageUtils")}return cr(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"===typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],r=e.split("-");return this.options.lowerCaseLng?r=r.map((function(e){return e.toLowerCase()})):2===r.length?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=Yr(r[1].toLowerCase()))):3===r.length&&(r[0]=r[0].toLowerCase(),2===r[1].length&&(r[1]=r[1].toUpperCase()),"sgn"!==r[0]&&2===r[2].length&&(r[2]=r[2].toUpperCase()),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=Yr(r[1].toLowerCase())),t.indexOf(r[2].toLowerCase())>-1&&(r[2]=Yr(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,r=this;return e?(e.forEach((function(e){if(!t){var n=r.formatLanguageCode(e);r.options.supportedLngs&&!r.isSupportedCode(n)||(t=n)}})),!t&&this.options.supportedLngs&&e.forEach((function(e){if(!t){var n=r.getLanguagePartFromCode(e);if(r.isSupportedCode(n))return t=n;t=r.options.supportedLngs.find((function(e){return e===n?e:e.indexOf("-")<0&&n.indexOf("-")<0?void 0:0===e.indexOf(n)?e:void 0}))}})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),"string"===typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var r=e[t];return r||(r=e[this.getScriptPartFromCode(t)]),r||(r=e[this.formatLanguageCode(t)]),r||(r=e[this.getLanguagePartFromCode(t)]),r||(r=e.default),r||[]}},{key:"toResolveHierarchy",value:function(e,t){var r=this,n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],a=function(e){e&&(r.isSupportedCode(e)?i.push(e):r.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"===typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):"string"===typeof e&&a(this.formatLanguageCode(e)),n.forEach((function(e){i.indexOf(e)<0&&a(r.formatLanguageCode(e))})),i}}]),e}(),Jr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Gr={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}},Xr=["v1","v2","v3"],Zr={zero:0,one:1,two:2,few:3,many:4,other:5};var en=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};or(this,e),this.languageUtils=t,this.options=r,this.logger=Sr.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!==typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){var e={};return Jr.forEach((function(t){t.lngs.forEach((function(r){e[r]={numbers:t.nr,plurals:Gr[t.fc]}}))})),e}()}return cr(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(r){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getRule(e,t);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,r).map((function(e){return"".concat(t).concat(e)}))}},{key:"getSuffixes",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((function(e,t){return Zr[e]-Zr[t]})).map((function(e){return"".concat(t.options.prepend).concat(e)})):n.numbers.map((function(n){return t.getSuffix(e,n,r)})):[]}},{key:"getSuffix",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(n.select(t)):this.getSuffixRetroCompatible(n,t):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){var r=this,n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),i=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var a=function(){return r.options.prepend&&i.toString()?r.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"===typeof i?"_plural_".concat(i.toString()):a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?a():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}},{key:"shouldUseIntlApi",value:function(){return!Xr.includes(this.options.compatibilityJSON)}}]),e}();function tn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function rn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tn(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function nn(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(e,t,r){var n=Tr(e,r);return void 0!==n?n:Tr(t,r)}(e,t,r);return!a&&i&&"string"===typeof r&&void 0===(a=Ir(e,r,n))&&(a=Ir(t,r,n)),a}var an=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};or(this,e),this.logger=Sr.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return cr(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:Ar,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?Nr(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?Nr(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?Nr(t.nestingPrefix):t.nestingPrefixEscaped||Nr("$t("),this.nestingSuffix=t.nestingSuffix?Nr(t.nestingSuffix):t.nestingSuffixEscaped||Nr(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var r="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(r,"g")}},{key:"interpolate",value:function(e,t,r,n){var i,a,o,l=this,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}var u=function(e){if(e.indexOf(l.formatSeparator)<0){var i=nn(t,s,e,l.options.keySeparator,l.options.ignoreJSONStructure);return l.alwaysFormat?l.format(i,void 0,r,rn(rn(rn({},n),t),{},{interpolationkey:e})):i}var a=e.split(l.formatSeparator),o=a.shift().trim(),c=a.join(l.formatSeparator).trim();return l.format(nn(t,s,o,l.options.keySeparator,l.options.ignoreJSONStructure),c,r,rn(rn(rn({},n),t),{},{interpolationkey:o}))};this.resetRegExp();var d=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,p=n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return c(e)}},{regex:this.regexp,safeValue:function(e){return l.escapeValue?c(l.escape(e)):c(e)}}].forEach((function(t){for(o=0;i=t.regex.exec(e);){var r=i[1].trim();if(void 0===(a=u(r)))if("function"===typeof d){var s=d(e,i,n);a="string"===typeof s?s:""}else if(n&&Object.prototype.hasOwnProperty.call(n,r))a="";else{if(p){a=i[0];continue}l.logger.warn("missed to pass in variable ".concat(r," for interpolating ").concat(e)),a=""}else"string"===typeof a||l.useRawValueToEscape||(a=Er(a));var c=t.safeValue(a);if(e=e.replace(i[0],c),p?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,++o>=l.maxReplaces)break}})),e}},{key:"nest",value:function(e,t){var r,n,i,a=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function l(e,t){var r=this.nestingOptionsSeparator;if(e.indexOf(r)<0)return e;var n=e.split(new RegExp("".concat(r,"[ ]*{"))),a="{".concat(n[1]);e=n[0];var o=(a=this.interpolate(a,i)).match(/'/g),l=a.match(/"/g);(o&&o.length%2===0&&!l||l.length%2!==0)&&(a=a.replace(/'/g,'"'));try{i=JSON.parse(a),t&&(i=rn(rn({},t),i))}catch(ef){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),ef),"".concat(e).concat(r).concat(a)}return delete i.defaultValue,e}for(;r=this.nestingRegexp.exec(e);){var s=[];(i=(i=rn({},o)).replace&&"string"!==typeof i.replace?i.replace:i).applyPostProcessor=!1,delete i.defaultValue;var c=!1;if(-1!==r[0].indexOf(this.formatSeparator)&&!/{.*}/.test(r[1])){var u=r[1].split(this.formatSeparator).map((function(e){return e.trim()}));r[1]=u.shift(),s=u,c=!0}if((n=t(l.call(this,r[1].trim(),i),i))&&r[0]===e&&"string"!==typeof n)return n;"string"!==typeof n&&(n=Er(n)),n||(this.logger.warn("missed to resolve ".concat(r[1]," for nesting ").concat(e)),n=""),c&&(n=s.reduce((function(e,t){return a.format(e,t,o.lng,rn(rn({},o),{},{interpolationkey:r[1].trim()}))}),n.trim())),e=e.replace(r[0],n),this.regexp.lastIndex=0}return e}}]),e}();function on(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ln(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?on(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):on(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function sn(e){var t={};return function(r,n,i){var a=n+JSON.stringify(i),o=t[a];return o||(o=e(n,i),t[a]=o),o(r)}}var cn=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};or(this,e),this.logger=Sr.create("formatter"),this.options=t,this.formats={number:sn((function(e,t){var r=new Intl.NumberFormat(e,ln({},t));return function(e){return r.format(e)}})),currency:sn((function(e,t){var r=new Intl.NumberFormat(e,ln(ln({},t),{},{style:"currency"}));return function(e){return r.format(e)}})),datetime:sn((function(e,t){var r=new Intl.DateTimeFormat(e,ln({},t));return function(e){return r.format(e)}})),relativetime:sn((function(e,t){var r=new Intl.RelativeTimeFormat(e,ln({},t));return function(e){return r.format(e,t.range||"day")}})),list:sn((function(e,t){var r=new Intl.ListFormat(e,ln({},t));return function(e){return r.format(e)}}))},this.init(t)}return cr(e,[{key:"init",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||","}},{key:"add",value:function(e,t){this.formats[e.toLowerCase().trim()]=t}},{key:"addCached",value:function(e,t){this.formats[e.toLowerCase().trim()]=sn(t)}},{key:"format",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.split(this.formatSeparator).reduce((function(e,t){var a=function(e){var t=e.toLowerCase().trim(),r={};if(e.indexOf("(")>-1){var n=e.split("(");t=n[0].toLowerCase().trim();var i=n[1].substring(0,n[1].length-1);"currency"===t&&i.indexOf(":")<0?r.currency||(r.currency=i.trim()):"relativetime"===t&&i.indexOf(":")<0?r.range||(r.range=i.trim()):i.split(";").forEach((function(e){if(e){var t=yr(e.split(":")),n=t[0],i=t.slice(1).join(":").trim().replace(/^'+|'+$/g,"");r[n.trim()]||(r[n.trim()]=i),"false"===i&&(r[n.trim()]=!1),"true"===i&&(r[n.trim()]=!0),isNaN(i)||(r[n.trim()]=parseInt(i,10))}}))}return{formatName:t,formatOptions:r}}(t),o=a.formatName,l=a.formatOptions;if(n.formats[o]){var s=e;try{var c=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},u=c.locale||c.lng||i.locale||i.lng||r;s=n.formats[o](e,u,ln(ln(ln({},l),i),c))}catch(d){n.logger.warn(d)}return s}return n.logger.warn("there was no format function for ".concat(o)),e}),e)}}]),e}();function un(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?un(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):un(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pn(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(ef){return!1}}();return function(){var r,n=hr(e);if(t){var i=hr(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return fr(this,r)}}var fn=function(e){pr(r,e);var t=pn(r);function r(e,n,i){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return or(this,r),a=t.call(this),zr&&Cr.call(ur(a)),a.backend=e,a.store=n,a.services=i,a.languageUtils=i.languageUtils,a.options=o,a.logger=Sr.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=o.maxParallelReads||10,a.readingCalls=0,a.maxRetries=o.maxRetries>=0?o.maxRetries:5,a.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,o.backend,o),a}return cr(r,[{key:"queueLoad",value:function(e,t,r,n){var i=this,a={},o={},l={},s={};return e.forEach((function(e){var n=!0;t.forEach((function(t){var l="".concat(e,"|").concat(t);!r.reload&&i.store.hasResourceBundle(e,t)?i.state[l]=2:i.state[l]<0||(1===i.state[l]?void 0===o[l]&&(o[l]=!0):(i.state[l]=1,n=!1,void 0===o[l]&&(o[l]=!0),void 0===a[l]&&(a[l]=!0),void 0===s[t]&&(s[t]=!0)))})),n||(l[e]=!0)})),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(s)}}},{key:"loaded",value:function(e,t,r){var n=e.split("|"),i=n[0],a=n[1];t&&this.emit("failedLoading",i,a,t),r&&this.store.addResourceBundle(i,a,r),this.state[e]=t?-1:2;var o={};this.queue.forEach((function(r){!function(e,t,r,n){var i=Or(e,t,Object),a=i.obj,o=i.k;a[o]=a[o]||[],n&&(a[o]=a[o].concat(r)),n||a[o].push(r)}(r.loaded,[i],a),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(r,e),t&&r.errors.push(t),0!==r.pendingCount||r.done||(Object.keys(r.loaded).forEach((function(e){o[e]||(o[e]={});var t=r.loaded[e];t.length&&t.forEach((function(t){void 0===o[e][t]&&(o[e][t]=!0)}))})),r.done=!0,r.errors.length?r.callback(r.errors):r.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:e,ns:t,fcName:r,tried:i,wait:a,callback:o});else{this.readingCalls++;var l=function(l,s){if(n.readingCalls--,n.waitingReads.length>0){var c=n.waitingReads.shift();n.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}l&&s&&i<n.maxRetries?setTimeout((function(){n.read.call(n,e,t,r,i+1,2*a,o)}),a):o(l,s)},s=this.backend[r].bind(this.backend);if(2!==s.length)return s(e,t,l);try{var c=s(e,t);c&&"function"===typeof c.then?c.then((function(e){return l(null,e)})).catch(l):l(null,c)}catch(u){l(u)}}}},{key:"prepareLoading",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"===typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"===typeof t&&(t=[t]);var a=this.queueLoad(e,t,n,i);if(!a.toLoad.length)return a.pending.length||i(),null;a.toLoad.forEach((function(e){r.loadOne(e)}))}},{key:"load",value:function(e,t,r){this.prepareLoading(e,t,{},r)}},{key:"reload",value:function(e,t,r){this.prepareLoading(e,t,{reload:!0},r)}},{key:"loadOne",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("|"),i=n[0],a=n[1];this.read(i,a,"read",void 0,void 0,(function(n,o){n&&t.logger.warn("".concat(r,"loading namespace ").concat(a," for language ").concat(i," failed"),n),!n&&o&&t.logger.log("".concat(r,"loaded namespace ").concat(a," for language ").concat(i),o),t.loaded(e,n,o)}))}},{key:"saveMissing",value:function(e,t,r,n,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn('did not save key "'.concat(r,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(void 0!==r&&null!==r&&""!==r){if(this.backend&&this.backend.create){var l=dn(dn({},a),{},{isUpdate:i}),s=this.backend.create.bind(this.backend);if(s.length<6)try{var c;(c=5===s.length?s(e,t,r,n,l):s(e,t,r,n))&&"function"===typeof c.then?c.then((function(e){return o(null,e)})).catch(o):o(null,c)}catch(u){o(u)}else s(e,t,r,n,o,l)}e&&e[0]&&this.store.addResource(e[0],t,r,n)}}}]),r}(Cr);function hn(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===ar(e[1])&&(t=e[1]),"string"===typeof e[1]&&(t.defaultValue=e[1]),"string"===typeof e[2]&&(t.tDescription=e[2]),"object"===ar(e[2])||"object"===ar(e[3])){var r=e[3]||e[2];Object.keys(r).forEach((function(e){t[e]=r[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,r,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function gn(e){return"string"===typeof e.ns&&(e.ns=[e.ns]),"string"===typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"===typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function mn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function vn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?mn(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function xn(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(ef){return!1}}();return function(){var r,n=hr(e);if(t){var i=hr(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return fr(this,r)}}function bn(){}var yn=function(e){pr(r,e);var t=xn(r);function r(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(or(this,r),e=t.call(this),zr&&Cr.call(ur(e)),e.options=gn(i),e.services={},e.logger=Sr,e.modules={external:[]},n=ur(e),Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((function(e){"function"===typeof n[e]&&(n[e]=n[e].bind(n))})),a&&!e.isInitialized&&!i.isClone){if(!e.options.initImmediate)return e.init(i,a),fr(e,ur(e));setTimeout((function(){e.init(i,a)}),0)}return e}return cr(r,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;"function"===typeof t&&(r=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"===typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));var n=hn();function i(e){return e?"function"===typeof e?new e:e:null}if(this.options=vn(vn(vn({},n),this.options),gn(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=vn(vn({},n.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){var a;this.modules.logger?Sr.init(i(this.modules.logger),this.options):Sr.init(null,this.options),this.modules.formatter?a=this.modules.formatter:"undefined"!==typeof Intl&&(a=cn);var o=new Qr(this.options);this.store=new $r(this.options.resources,this.options);var l=this.services;l.logger=Sr,l.resourceStore=this.store,l.languageUtils=o,l.pluralResolver=new en(o,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!a||this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format||(l.formatter=i(a),l.formatter.init(l,this.options),this.options.interpolation.format=l.formatter.format.bind(l.formatter)),l.interpolator=new an(this.options),l.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},l.backendConnector=new fn(i(this.modules.backend),l.resourceStore,l,this.options),l.backendConnector.on("*",(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];e.emit.apply(e,[t].concat(n))})),this.modules.languageDetector&&(l.languageDetector=i(this.modules.languageDetector),l.languageDetector.init&&l.languageDetector.init(l,this.options.detection,this.options)),this.modules.i18nFormat&&(l.i18nFormat=i(this.modules.i18nFormat),l.i18nFormat.init&&l.i18nFormat.init(this)),this.translator=new Kr(this.services,this.options),this.translator.on("*",(function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];e.emit.apply(e,[t].concat(n))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}if(this.format=this.options.interpolation.format,r||(r=bn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var s=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);s.length>0&&"dev"!==s[0]&&(this.options.lng=s[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments),e}}));var c=Pr(),u=function(){var t=function(t,n){e.isInitialized&&!e.initializedStoreOnce&&e.logger.warn("init: i18next is already initialized. You should call init just once!"),e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),c.resolve(n),r(t,n)};if(e.languages&&"v1"!==e.options.compatibilityAPI&&!e.isInitialized)return t(null,e.t.bind(e));e.changeLanguage(e.options.lng,t)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),c}},{key:"loadResources",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:bn,n="string"===typeof e?e:this.language;if("function"===typeof e&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&"cimode"===n.toLowerCase())return r();var i=[],a=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){i.indexOf(e)<0&&i.push(e)}))};if(n)a(n);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e){return a(e)}));this.options.preload&&this.options.preload.forEach((function(e){return a(e)})),this.services.backendConnector.load(i,this.options.ns,(function(e){e||t.resolvedLanguage||!t.language||t.setResolvedLanguage(t.language),r(e)}))}else r(null)}},{key:"reloadResources",value:function(e,t,r){var n=Pr();return e||(e=this.languages),t||(t=this.options.ns),r||(r=bn),this.services.backendConnector.reload(e,t,(function(e){n.resolve(),r(e)})),n}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Br.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"setResolvedLanguage",value:function(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(var t=0;t<this.languages.length;t++){var r=this.languages[t];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}},{key:"changeLanguage",value:function(e,t){var r=this;this.isLanguageChangingTo=e;var n=Pr();this.emit("languageChanging",e);var i=function(e){r.language=e,r.languages=r.services.languageUtils.toResolveHierarchy(e),r.resolvedLanguage=void 0,r.setResolvedLanguage(e)},a=function(a){e||a||!r.services.languageDetector||(a=[]);var o="string"===typeof a?a:r.services.languageUtils.getBestMatchFromCodes(a);o&&(r.language||i(o),r.translator.language||r.translator.changeLanguage(o),r.services.languageDetector&&r.services.languageDetector.cacheUserLanguage&&r.services.languageDetector.cacheUserLanguage(o)),r.loadResources(o,(function(e){!function(e,a){a?(i(a),r.translator.changeLanguage(a),r.isLanguageChangingTo=void 0,r.emit("languageChanged",a),r.logger.log("languageChanged",a)):r.isLanguageChangingTo=void 0,n.resolve((function(){return r.t.apply(r,arguments)})),t&&t(e,(function(){return r.t.apply(r,arguments)}))}(e,o)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e):a(this.services.languageDetector.detect()),n}},{key:"getFixedT",value:function(e,t,r){var n=this,i=function e(t,i){var a;if("object"!==ar(i)){for(var o=arguments.length,l=new Array(o>2?o-2:0),s=2;s<o;s++)l[s-2]=arguments[s];a=n.options.overloadTranslationOptionHandler([t,i].concat(l))}else a=vn({},i);a.lng=a.lng||e.lng,a.lngs=a.lngs||e.lngs,a.ns=a.ns||e.ns,a.keyPrefix=a.keyPrefix||r||e.keyPrefix;var c,u=n.options.keySeparator||".";return c=a.keyPrefix&&Array.isArray(t)?t.map((function(e){return"".concat(a.keyPrefix).concat(u).concat(e)})):a.keyPrefix?"".concat(a.keyPrefix).concat(u).concat(t):t,n.t(c,a)};return"string"===typeof e?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=r,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=r.lng||this.resolvedLanguage||this.languages[0],i=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var o=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};if(r.precheck){var l=r.precheck(this,o);if(void 0!==l)return l}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!o(n,e)||i&&!o(a,e)))}},{key:"loadNamespaces",value:function(e,t){var r=this,n=Pr();return this.options.ns?("string"===typeof e&&(e=[e]),e.forEach((function(e){r.options.ns.indexOf(e)<0&&r.options.ns.push(e)})),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var r=Pr();"string"===typeof e&&(e=[e]);var n=this.options.preload||[],i=e.filter((function(e){return n.indexOf(e)<0}));return i.length?(this.options.preload=n.concat(i),this.loadResources((function(e){r.resolve(),t&&t(e)})),r):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";var t=this.services&&this.services.languageUtils||new Qr(hn());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:bn,i=vn(vn(vn({},this.options),t),{isClone:!0}),a=new r(i);void 0===t.debug&&void 0===t.prefix||(a.logger=a.logger.clone(t));return["store","services","language"].forEach((function(t){a[t]=e[t]})),a.services=vn({},this.services),a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a.translator=new Kr(a.services,a.options),a.translator.on("*",(function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];a.emit.apply(a,[e].concat(r))})),a.init(i,n),a.translator.options=a.options,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),r}(Cr);gr(yn,"createInstance",(function(){return new yn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}));var wn=yn.createInstance();wn.createInstance=yn.createInstance;wn.createInstance,wn.dir,wn.init,wn.loadResources,wn.reloadResources,wn.use,wn.changeLanguage,wn.getFixedT,wn.t,wn.exists,wn.setDefaultNamespace,wn.hasLoadedNamespace,wn.loadNamespaces,wn.loadLanguages,r(844);Object.create(null);function kn(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var jn={};function Sn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&jn[t[0]]||("string"===typeof t[0]&&(jn[t[0]]=new Date),kn.apply(void 0,t))}var Cn=function(e,t){return function(){if(e.isInitialized)t();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),t()}))}}};function Pn(e,t,r){e.loadNamespaces(t,Cn(e,r))}function En(e,t,r,n){"string"===typeof r&&(r=[r]),r.forEach((function(t){e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,Cn(e,n))}var On=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Rn={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},Tn=function(e){return Rn[e]};function _n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Nn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_n(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ln={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(On,Tn)}};var An;var zn={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ln=Nn(Nn({},Ln),e)}(e.options.react),function(e){An=e}(e)}};var Dn=(0,t.createContext)(),In=function(){function e(){or(this,e),this.usedNamespaces={}}return cr(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Fn(e,t){return mr(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,o,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return l}}(e,t)||xr(e,t)||br()}function Mn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Un(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Mn(Object(r),!0).forEach((function(t){gr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Mn(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.i18n,i=(0,t.useContext)(Dn)||{},a=i.i18n,o=i.defaultNS,l=n||a||An;if(l&&!l.reportNamespaces&&(l.reportNamespaces=new In),!l){Sn("You will need to pass in an i18next instance by using initReactI18next");var s=function(e,t){return"string"===typeof t?t:t&&"object"===ar(t)&&"string"===typeof t.defaultValue?t.defaultValue:Array.isArray(e)?e[e.length-1]:e},c=[s,{},!1];return c.t=s,c.i18n={},c.ready=!1,c}l.options.react&&void 0!==l.options.react.wait&&Sn("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var u=Un(Un(Un({},Ln),l.options.react),r),d=u.useSuspense,p=u.keyPrefix,f=e||o||l.options&&l.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(f);var h=(l.isInitialized||l.initializedStoreOnce)&&f.every((function(e){return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{lng:r.lng,precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],i=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var o=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(n,e)||i&&!o(a,e)))}(e,t,r):(Sn("i18n.languages were undefined or empty",t.languages),!0)}(e,l,u)}));function g(){return l.getFixedT(r.lng||null,"fallback"===u.nsMode?f:f[0],p)}var m=Fn((0,t.useState)(g),2),v=m[0],x=m[1],b=f.join();r.lng&&(b="".concat(r.lng).concat(b));var y=function(e,r){var n=(0,t.useRef)();return(0,t.useEffect)((function(){n.current=r?n.current:e}),[e,r]),n.current}(b),w=(0,t.useRef)(!0);(0,t.useEffect)((function(){var e=u.bindI18n,t=u.bindI18nStore;function n(){w.current&&x(g)}return w.current=!0,h||d||(r.lng?En(l,r.lng,f,(function(){w.current&&x(g)})):Pn(l,f,(function(){w.current&&x(g)}))),h&&y&&y!==b&&w.current&&x(g),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){w.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[l,b]);var k=(0,t.useRef)(!0);(0,t.useEffect)((function(){w.current&&!k.current&&x(g),k.current=!1}),[l,p]);var j=[v,l,h];if(j.t=v,j.i18n=l,j.ready=h,h)return j;if(!h&&!d)return j;throw new Promise((function(e){r.lng?En(l,r.lng,f,(function(){return e()})):Pn(l,f,(function(){return e()}))}))}const Bn={en:{imageUploader:{uploadImage:"Upload Image",uploadText:"Click or drag images here to upload (max {maxImages})",maxImagesError:"You can only upload a maximum of {maxImages} images",previewAlt:"Preview image {index}"},serviceRequest:{title:"Request a Service",description:"Choose the type of service you need and we'll connect you with the right professional",serviceType:"Service Type",selectType:"Select a service type"},registration:{steps:{userType:"Select User Type",basicInfo:"Basic Information",verification:"Verification",documents:"Upload Documents",review:"Platform Review",serviceSetup:"Service Setup",complete:"Complete"},next:"Next",back:"Back",submit:"Submit",verifyEmail:"Verify Email",verifyPhone:"Verify Phone",verificationCodeSent:"Verification code sent to {target}",enterVerificationCode:"Enter verification code",uploadId:"Upload ID Proof",uploadCertificates:"Upload Professional Certificates",uploadExperience:"Upload Work Experience Proof",reviewMessage:"Your documents are under review. This usually takes 1-3 business days.",serviceCategory:"Service Category",priceSettings:"Price Settings",availability:"Availability",activateAccount:"Activate Account",completeProfile:"Complete Profile",phoneNumber:"Phone Number",address:"Address",city:"City",zipCode:"ZIP Code",success:{title:"Registration Successful",providerMessage:"Your service provider account has been successfully registered. You can now log in and start setting up your services.",clientMessage:"Your client account has been successfully registered. You can now log in and start using our services.",login:"Log In Now",home:"Return to Home"},thankYou:"Thank You for Your Application",applicationStatus:"Application Status",underReview:"Under Review",submissionTime:"Submission Time",selectServiceCategory:"Please select service category",hourlyRate:"Hourly rate (USD)"},nav:{home:"Home",cleaning:"Cleaning",repair:"Repair",plumbing:"Plumbing",elderCare:"Elder Care",childCare:"Child Care",bookNow:"Book Now",login:"Login",register:"Register",providerPortal:"Provider Portal"},home:{hero:{title:"Your Trusted Service Platform",subtitle:"Find reliable professionals for your home service needs - cleaning, repair, care and more",cta:"Book a Service",postRequest:"Post Request",provideService:"Provide Service"}},auth:{login:"Login",register:"Register",email:"Email",password:"Password",confirmPassword:"Confirm Password",forgotPassword:"Forgot Password?",noAccount:"Don't have an account?",haveAccount:"Already have an account?",signUp:"Sign Up",signIn:"Sign In",name:"Full Name",clientLogin:"Client Login",clientRegister:"Client Registration",providerLogin:"Service Provider Login",providerRegister:"Service Provider Registration",areYouProvider:"Are you a service provider?",areYouClient:"Looking for services?",serviceType:"Service Type",experience:"Years of Experience",selectUserType:"Select User Type",clientType:"Client",providerType:"Service Provider",clientTypeDesc:"Looking for services for your home or personal needs",providerTypeDesc:"Offer your professional services on our platform"},provider:{portal:"Provider Portal",dashboard:"Dashboard",services:"My Services",schedule:"Schedule",clients:"Clients",reviews:"Reviews",earnings:"Earnings",addService:"Add Service",editProfile:"Edit Profile"},client:{dashboard:"Dashboard",dashboardDesc:"Manage your service requests and bookings",bookings:"My Bookings",services:"Services",messages:"Messages",payments:"Payments",profile:"Profile",activeBookings:"Active Bookings",completedServices:"Completed Services",pendingRequests:"Pending Requests",recentServices:"Recent Services",scheduled:"Scheduled",completed:"Completed",pending:"Pending"}},ru:{imageUploader:{uploadImage:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",uploadText:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u044e\u0434\u0430 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 (\u043c\u0430\u043a\u0441. {maxImages})",maxImagesError:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c {maxImages} \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",previewAlt:"\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f {index}"},serviceRequest:{title:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443",description:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438, \u0438 \u043c\u044b \u0441\u0432\u044f\u0436\u0435\u043c \u0432\u0430\u0441 \u0441 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u043c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u043c",serviceType:"\u0422\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438",selectType:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438"},registration:{steps:{userType:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",basicInfo:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",verification:"\u0412\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",documents:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432",review:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u043e\u0439",serviceSetup:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0441\u043b\u0443\u0433",complete:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435"},next:"\u0414\u0430\u043b\u0435\u0435",back:"\u041d\u0430\u0437\u0430\u0434",submit:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",verifyEmail:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c email",verifyPhone:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d",verificationCodeSent:"\u041a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 {target}",enterVerificationCode:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",uploadId:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438",uploadCertificates:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b",uploadExperience:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u043f\u044b\u0442\u0430 \u0440\u0430\u0431\u043e\u0442\u044b",reviewMessage:"\u0412\u0430\u0448\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0438. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 1-3 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f.",serviceCategory:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043b\u0443\u0433",priceSettings:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0446\u0435\u043d",availability:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c",activateAccount:"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",completeProfile:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",phoneNumber:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",address:"\u0410\u0434\u0440\u0435\u0441",city:"\u0413\u043e\u0440\u043e\u0434",zipCode:"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441"},nav:{home:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",cleaning:"\u0423\u0431\u043e\u0440\u043a\u0430",repair:"\u0420\u0435\u043c\u043e\u043d\u0442",plumbing:"\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0438\u043a\u0430",elderCare:"\u0423\u0445\u043e\u0434 \u0437\u0430 \u043f\u043e\u0436\u0438\u043b\u044b\u043c\u0438",childCare:"\u0423\u0445\u043e\u0434 \u0437\u0430 \u0434\u0435\u0442\u044c\u043c\u0438",bookNow:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",login:"\u0412\u0445\u043e\u0434",register:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",providerPortal:"\u041f\u043e\u0440\u0442\u0430\u043b \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430"},home:{hero:{title:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438",subtitle:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u0443\u0441\u043b\u0443\u0433 \u043d\u0430 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u0432\u044b\u0442\u044f\u043d\u0443\u0442\u043e\u0439 \u0440\u0443\u043a\u0438",cta:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"}},auth:{login:"\u0412\u0445\u043e\u0434",register:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",email:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",password:"\u041f\u0430\u0440\u043e\u043b\u044c",confirmPassword:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",forgotPassword:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?",noAccount:"\u041d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438?",haveAccount:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",signUp:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",signIn:"\u0412\u043e\u0439\u0442\u0438",name:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f",clientLogin:"\u0412\u0445\u043e\u0434 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",clientRegister:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430",providerLogin:"\u0412\u0445\u043e\u0434 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432 \u0443\u0441\u043b\u0443\u0433",providerRegister:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430 \u0443\u0441\u043b\u0443\u0433",areYouProvider:"\u0412\u044b \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0443\u0441\u043b\u0443\u0433?",areYouClient:"\u0418\u0449\u0435\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438?",serviceType:"\u0422\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438",experience:"\u041e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b (\u043b\u0435\u0442)",selectUserType:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",clientType:"\u041a\u043b\u0438\u0435\u043d\u0442",providerType:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0443\u0441\u043b\u0443\u0433",clientTypeDesc:"\u0418\u0449\u0435\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0430 \u0438\u043b\u0438 \u043b\u0438\u0447\u043d\u044b\u0445 \u043d\u0443\u0436\u0434",providerTypeDesc:"\u041f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435"},provider:{portal:"\u041f\u043e\u0440\u0442\u0430\u043b \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430",dashboard:"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",services:"\u041c\u043e\u0438 \u0443\u0441\u043b\u0443\u0433\u0438",schedule:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435",clients:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b",reviews:"\u041e\u0442\u0437\u044b\u0432\u044b",earnings:"\u0414\u043e\u0445\u043e\u0434",addService:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443",editProfile:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}},et:{imageUploader:{uploadImage:"Laadi pilt \xfcles",uploadText:"Kl\xf5psake v\xf5i lohistage pildid siia \xfcleslaadimiseks (max {maxImages})",maxImagesError:"Saate \xfcles laadida maksimaalselt {maxImages} pilti",previewAlt:"Pildi eelvaade {index}"},registration:{steps:{userType:"Valige kasutaja t\xfc\xfcp",basicInfo:"P\xf5hiinfo",verification:"Kinnitamine",documents:"Dokumentide \xfcleslaadimine",review:"Platvormi \xfclevaatus",serviceSetup:"Teenuse seadistamine",complete:"L\xf5petamine"},next:"Edasi",back:"Tagasi",submit:"Esita",verifyEmail:"Kinnita e-post",verifyPhone:"Kinnita telefon",verificationCodeSent:"Kinnituskood on saadetud aadressile {target}",enterVerificationCode:"Sisestage kinnituskood",uploadId:"Laadi \xfcles isikut t\xf5endav dokument",uploadCertificates:"Laadi \xfcles kutsekvalifikatsiooni t\xf5endid",uploadExperience:"T\xf6\xf6kogemuse t\xf5endi \xfcleslaadimine",reviewMessage:"Teie dokumendid on l\xe4bivaatamisel. Tavaliselt v\xf5tab see 1-3 t\xf6\xf6p\xe4eva.",serviceCategory:"Teenuse kategooria",priceSettings:"Hinna seaded",availability:"K\xe4ttesaadavus",activateAccount:"Aktiveeri konto",completeProfile:"T\xe4ida profiil",phoneNumber:"Telefoninumber",address:"Aadress",city:"Linn",zipCode:"Postiindeks"},serviceRequest:{title:"Teenuse tellimine",description:"Valige soovitud teenuse t\xfc\xfcp ja me \xfchendame teid sobiva spetsialistiga",serviceType:"Teenuse t\xfc\xfcp",selectType:"Valige teenuse t\xfc\xfcp"},nav:{home:"Avaleht",cleaning:"Koristus",repair:"Remont",plumbing:"Torut\xf6\xf6d",elderCare:"Eakate hooldus",childCare:"Laste hooldus",bookNow:"Broneeri",login:"Logi sisse",register:"Registreeri",providerPortal:"Teenusepakkuja portaal"},home:{hero:{title:"Professionaalsed koduhooldusteenused",subtitle:"Kvaliteetsed teenusepakkujad teie k\xe4eulatuses",cta:"Broneeri teenus"}},auth:{login:"Logi sisse",register:"Registreeri",email:"E-post",password:"Parool",confirmPassword:"Kinnita parool",forgotPassword:"Unustasid parooli?",noAccount:"Pole kontot?",haveAccount:"Juba on konto?",signUp:"Registreeru",signIn:"Logi sisse",name:"T\xe4isnimi",clientLogin:"Kliendi sisselogimine",clientRegister:"Kliendi registreerimine",providerLogin:"Teenusepakkuja sisselogimine",providerRegister:"Teenusepakkuja registreerimine",areYouProvider:"Oled teenusepakkuja?",areYouClient:"Otsid teenuseid?",serviceType:"Teenuse t\xfc\xfcp",experience:"T\xf6\xf6kogemus (aastad)"},provider:{portal:"Teenusepakkuja portaal",dashboard:"T\xf6\xf6laud",services:"Minu teenused",schedule:"Ajakava",clients:"Kliendid",reviews:"Arvustused",earnings:"Tulud",addService:"Lisa teenus",editProfile:"Muuda profiili"}},lv:{imageUploader:{uploadImage:"Aug\u0161upiel\u0101d\u0113t att\u0113lu",uploadText:"Noklik\u0161\u0137iniet vai velciet att\u0113lus \u0161eit, lai aug\u0161upiel\u0101d\u0113tu (maks. {maxImages})",maxImagesError:"J\u016bs varat aug\u0161upiel\u0101d\u0113t ne vair\u0101k k\u0101 {maxImages} att\u0113lus",previewAlt:"Att\u0113la priek\u0161skat\u012bjums {index}"},serviceRequest:{title:"Piepras\u012bt pakalpojumu",description:"Izv\u0113lieties pakalpojuma veidu, un m\u0113s savienosim j\u016bs ar piem\u0113rotu speci\u0101listu",serviceType:"Pakalpojuma veids",selectType:"Izv\u0113lieties pakalpojuma veidu"},nav:{home:"S\u0101kums",cleaning:"T\u012br\u012b\u0161ana",repair:"Remonts",plumbing:"Santehnika",elderCare:"Vec\u0101ku apr\u016bpe",childCare:"B\u0113rnu apr\u016bpe",bookNow:"Rezerv\u0113t",login:"Piesl\u0113gties",register:"Re\u0123istr\u0113ties",providerPortal:"Pakalpojumu sniedz\u0113ja port\u0101ls"},home:{hero:{title:"Profesion\u0101li m\u0101jas pakalpojumi",subtitle:"Kvalitat\u012bvi pakalpojumu sniedz\u0113ji j\u016bsu r\u012bc\u012bb\u0101",cta:"Rezerv\u0113t pakalpojumu"}},registration:{verificationCodeSent:"Verifik\u0101cijas kods nos\u016bt\u012bts uz {target}",enterVerificationCode:"Ievadiet verifik\u0101cijas kodu"},auth:{login:"Piesl\u0113gties",register:"Re\u0123istr\u0113ties",email:"E-pasts",password:"Parole",confirmPassword:"Apstiprin\u0101t paroli",forgotPassword:"Aizmirs\u0101t paroli?",noAccount:"Nav konta?",haveAccount:"Jau ir konts?",signUp:"Re\u0123istr\u0113ties",signIn:"Piesl\u0113gties",name:"Pilns v\u0101rds",clientLogin:"Klienta piesl\u0113g\u0161an\u0101s",clientRegister:"Klienta re\u0123istr\u0101cija",providerLogin:"Pakalpojumu sniedz\u0113ja piesl\u0113g\u0161an\u0101s",providerRegister:"Pakalpojumu sniedz\u0113ja re\u0123istr\u0101cija",areYouProvider:"Vai esat pakalpojumu sniedz\u0113js?",areYouClient:"Mekl\u0113jat pakalpojumus?",serviceType:"Pakalpojuma veids",experience:"Darba pieredze (gadi)"},provider:{portal:"Pakalpojumu sniedz\u0113ja port\u0101ls",dashboard:"Panelis",services:"Mani pakalpojumi",schedule:"Grafiks",clients:"Klienti",reviews:"Atsauksmes",earnings:"Ie\u0146\u0113mumi",addService:"Pievienot pakalpojumu",editProfile:"Redi\u0123\u0113t profilu"}},lt:{imageUploader:{uploadImage:"\u012ekelti vaizd\u0105",uploadText:"Spustel\u0117kite arba vilkite vaizdus \u010dia, kad \u012fkeltum\u0117te (maks. {maxImages})",maxImagesError:"Galite \u012fkelti ne daugiau kaip {maxImages} vaizdus",previewAlt:"Vaizdo per\u017ei\u016bra {index}"},serviceRequest:{title:"U\u017esakyti paslaug\u0105",description:"Pasirinkite paslaugos tip\u0105 ir mes sujungsime jus su tinkamu specialistu",serviceType:"Paslaugos tipas",selectType:"Pasirinkite paslaugos tip\u0105"},nav:{home:"Prad\u017eia",cleaning:"Valymas",repair:"Remontas",plumbing:"Santechnika",elderCare:"Pagyvenusi\u0173 prie\u017ei\u016bra",childCare:"Vaik\u0173 prie\u017ei\u016bra",bookNow:"Rezervuoti",login:"Prisijungti",register:"Registruotis",providerPortal:"Paslaug\u0173 teik\u0117jo portalas"},home:{hero:{title:"Profesionalios nam\u0173 paslaugos",subtitle:"Kokybi\u0161ki paslaug\u0173 teik\u0117jai j\u016bs\u0173 rankose",cta:"U\u017esakyti paslaug\u0105"}},registration:{verificationCodeSent:"Patvirtinimo kodas i\u0161si\u0173stas \u012f {target}",enterVerificationCode:"\u012eveskite patvirtinimo kod\u0105"},auth:{login:"Prisijungti",register:"Registruotis",email:"El. pa\u0161tas",password:"Slapta\u017eodis",confirmPassword:"Patvirtinti slapta\u017eod\u012f",forgotPassword:"Pamir\u0161ote slapta\u017eod\u012f?",noAccount:"Neturite paskyros?",haveAccount:"Jau turite paskyr\u0105?",signUp:"Registruotis",signIn:"Prisijungti"},provider:{portal:"Paslaug\u0173 teik\u0117jo portalas",dashboard:"Valdymo skydelis",services:"Mano paslaugos",schedule:"Tvarkara\u0161tis",clients:"Klientai",reviews:"Atsiliepimai",earnings:"Pajamos",addService:"Prid\u0117ti paslaug\u0105",editProfile:"Redaguoti profil\u012f"}}};wn.use(zn).init({resources:{en:{translation:Bn.en},ru:{translation:Bn.ru},et:{translation:Bn.et},lv:{translation:Bn.lv},lt:{translation:Bn.lt}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});var Vn=r(579);const Hn=ir.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`,Wn=ir.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,qn=ir.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Kn=ir.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Yn=ir.div`
  padding: 20px;
`,Qn=ir.h3`
  margin: 0 0 5px;
  color: var(--text-primary);
  font-size: 18px;
`,Jn=ir.div`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 10px;
`,Gn=ir.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 15px;
`,Xn=ir.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,Zn=ir(Pe)`
  display: block;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;const ei=function(e){let{provider:t}=e;return(0,Vn.jsxs)(Hn,{children:[(0,Vn.jsxs)(Wn,{children:[(0,Vn.jsx)(qn,{src:t.image,alt:t.name}),(0,Vn.jsxs)(Kn,{children:["\u2b50 ",t.rating.toFixed(1)]})]}),(0,Vn.jsxs)(Yn,{children:[(0,Vn.jsx)(Qn,{children:t.name}),(0,Vn.jsx)(Jn,{children:t.serviceType}),(0,Vn.jsxs)(Gn,{children:[(0,Vn.jsxs)(Xn,{children:["\ud83d\udc4d ",t.completedJobs," Completed"]}),(0,Vn.jsxs)(Xn,{children:["\u2b50 ",t.rating.toFixed(1)," Rating"]})]}),(0,Vn.jsx)(Zn,{to:`/provider/profile/${t.id}`,children:"View Profile"})]})]})},ti=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,ri=ir.div`
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
`,ni=ir.h1`
  font-size: 42px;
  margin-bottom: 20px;
`,ii=ir.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
`,ai=(ir(Pe)`
  display: inline-block;
  background-color: white;
  color: var(--primary-color);
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`,ir.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: var(--large-heading);
`),oi=ir.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,li=ir(Pe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,si=ir.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${e=>e.color||"var(--primary-color)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: white;
  font-size: 32px;
`,ci=ir.span`
  font-weight: 500;
  text-align: center;
`,ui=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`,di=ir.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`,pi=ir.div`
  height: 160px;
  background-color: ${e=>e.color||"var(--primary-color)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
`,fi=ir.div`
  padding: var(--card-padding);
`,hi=ir.h3`
  margin-bottom: 10px;
  color: var(--text-primary);
`,gi=ir.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: var(--text-secondary);
  font-size: var(--caption);
`,mi=ir.span`
  font-weight: 500;
`,vi=ir.div`
  display: flex;
  align-items: center;
`,xi=ir.div`
  margin-bottom: 60px;
`,bi=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`,yi=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,wi=ir.p`
  font-style: italic;
  margin-bottom: 20px;
`,ki=ir.div`
  display: flex;
  align-items: center;
`,ji=ir.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-weight: 500;
`,Si=ir.div``,Ci=ir.div`
  font-weight: 500;
`,Pi=ir.div`
  font-size: var(--caption);
  color: var(--text-secondary);
`,Ei=()=>{const{t:e}=$n(),t=[{id:"cleaning",name:"Cleaning",icon:"\ud83e\uddf9",color:"var(--cleaning-color)",path:"/services/cleaning"},{id:"repair",name:"Repair",icon:"\ud83d\udd27",color:"var(--repair-color)",path:"/services/repair"},{id:"plumbing",name:"Plumbing",icon:"\ud83d\udebf",color:"var(--plumbing-color)",path:"/services/plumbing"},{id:"elder-care",name:"Elder Care",icon:"\u2764\ufe0f",color:"var(--elder-care-color)",path:"/services/elder-care"},{id:"child-care",name:"Child Care",icon:"\ud83d\udc76",color:"var(--child-care-color)",path:"/services/child-care"}],r=e=>{const r=t.find((t=>t.id===e));return r?r.color:"var(--primary-color)"},n=e=>{const r=t.find((t=>t.id===e));return r?r.icon:"\ud83d\udd0d"};return(0,Vn.jsxs)(ti,{children:[(0,Vn.jsxs)(ri,{children:[(0,Vn.jsx)(ni,{children:e("home.hero.title")}),(0,Vn.jsx)(ii,{children:e("home.hero.subtitle")})]}),(0,Vn.jsx)(ai,{children:e("home.featured.title","Featured Service Providers")}),(0,Vn.jsx)(ui,{children:[{id:1,name:"Mari Tamm",image:"https://randomuser.me/api/portraits/women/68.jpg",serviceType:"Elder Care",rating:4.9,completedJobs:128},{id:2,name:"Liisa Kask",image:"https://randomuser.me/api/portraits/women/45.jpg",serviceType:"Child Care",rating:4.8,completedJobs:96},{id:3,name:"Andres Saar",image:"https://randomuser.me/api/portraits/men/32.jpg",serviceType:"Home Repair",rating:4.9,completedJobs:156}].map((e=>(0,Vn.jsx)(ei,{provider:e},e.id)))}),(0,Vn.jsx)(ai,{children:e("home.services.title","Our Services")}),(0,Vn.jsx)(oi,{children:t.map((e=>(0,Vn.jsxs)(li,{to:e.path,children:[(0,Vn.jsx)(si,{color:e.color,children:e.icon}),(0,Vn.jsx)(ci,{children:e.name})]},e.id)))}),(0,Vn.jsx)(ai,{children:e("home.popular.title","Popular Services")}),(0,Vn.jsx)(ui,{children:[{id:"regular-cleaning",name:"Regular Cleaning",price:"\u20ac25/hour",rating:4.8,providers:28,category:"cleaning",path:"/services/cleaning"},{id:"deep-cleaning",name:"Deep Cleaning",price:"\u20ac40/hour",rating:4.9,providers:15,category:"cleaning",path:"/services/cleaning"},{id:"furniture-repair",name:"Furniture Repair",price:"\u20ac35/hour",rating:4.7,providers:12,category:"repair",path:"/services/repair"},{id:"plumbing-repair",name:"Plumbing Repair",price:"\u20ac40/hour",rating:4.8,providers:10,category:"plumbing",path:"/services/plumbing"},{id:"elder-companion",name:"Elder Companion",price:"\u20ac30/hour",rating:4.9,providers:18,category:"elder-care",path:"/services/elder-care"},{id:"child-sitting",name:"Child Sitting",price:"\u20ac28/hour",rating:4.8,providers:22,category:"child-care",path:"/services/child-care"}].map((e=>(0,Vn.jsxs)(di,{children:[(0,Vn.jsx)(pi,{color:r(e.category),children:n(e.category)}),(0,Vn.jsxs)(fi,{children:[(0,Vn.jsx)(hi,{children:e.name}),(0,Vn.jsxs)(gi,{children:[(0,Vn.jsxs)(mi,{children:["From ",e.price]}),(0,Vn.jsxs)(vi,{children:["\u2605 ",e.rating," (",e.providers," providers)"]})]})]})]},e.id)))}),(0,Vn.jsx)(ai,{children:e("home.testimonials.title","What Our Customers Say")}),(0,Vn.jsx)(xi,{children:(0,Vn.jsx)(bi,{children:[{id:1,text:"The cleaning service was excellent! My apartment has never been this clean. Will definitely book again.",author:"Maria K.",role:"Regular Customer"},{id:2,text:"The repair technician was professional and fixed my furniture perfectly. Great service!",author:"John D.",role:"New Customer"},{id:3,text:"I'm very satisfied with the elder care service. My mother is happy with her caregiver.",author:"Anna S.",role:"Regular Customer"}].map((e=>(0,Vn.jsxs)(yi,{children:[(0,Vn.jsxs)(wi,{children:['"',e.text,'"']}),(0,Vn.jsxs)(ki,{children:[(0,Vn.jsx)(ji,{children:e.author.charAt(0)}),(0,Vn.jsxs)(Si,{children:[(0,Vn.jsx)(Ci,{children:e.author}),(0,Vn.jsx)(Pi,{children:e.role})]})]})]},e.id)))})})]})},Oi=ir.div`
  margin-bottom: 20px;
`,Ri=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Ti=ir.div`
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: #f0f0f0;
  }
`,_i=ir.input`
  display: none;
`,Ni=ir.p`
  margin: 0;
  color: var(--text-secondary);
`,Li=ir.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`,Ai=ir.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
`,zi=ir.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Di=ir.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  padding: 0;
  line-height: 1;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;const Ii=function(e){let{onChange:r,maxImages:n=5,label:i,required:a=!1}=e;const{t:o}=$n(),[l,s]=(0,t.useState)([]),c=i||o("imageUploader.uploadImage")+(a?" *":"");return(0,Vn.jsxs)(Oi,{children:[(0,Vn.jsx)(Ri,{children:c}),(0,Vn.jsxs)(Ti,{onClick:()=>{document.getElementById("image-upload").click()},children:[(0,Vn.jsx)(_i,{type:"file",id:"image-upload",accept:"image/*",multiple:!0,onChange:e=>{const t=Array.from(e.target.files);if(l.length+t.length>n)return void alert(o("imageUploader.maxImagesError",{maxImages:n}));const i=t.map((e=>({file:e,preview:URL.createObjectURL(e)}))),a=[...l,...i];s(a),r&&r(a.map((e=>e.file)))}}),(0,Vn.jsx)(Ni,{children:o("imageUploader.uploadText",{maxImages:n})})]}),l.length>0&&(0,Vn.jsx)(Li,{children:l.map(((e,t)=>(0,Vn.jsxs)(Ai,{children:[(0,Vn.jsx)(zi,{src:e.preview,alt:o("imageUploader.previewAlt",{index:t+1})}),(0,Vn.jsx)(Di,{onClick:()=>(e=>{const t=[...l];URL.revokeObjectURL(t[e].preview),t.splice(e,1),s(t),r&&r(t.map((e=>e.file)))})(t),children:"\xd7"})]},t)))})]})},Fi=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Mi=ir.div`
  background-color: var(--cleaning-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Ui=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,$i=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,Bi=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,Vi=ir.div`
  margin-bottom: 20px;
`,Hi=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Wi=ir.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--cleaning-color);
  }
`,qi=ir.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--cleaning-color);
  }
`,Ki=ir.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--cleaning-color);
  }
`,Yi=ir.button`
  background-color: var(--cleaning-color);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  
  &:hover {
    background-color: #5aa0c7;
  }
`;const Qi=function(){const[e,r]=(0,t.useState)({serviceType:"",location:"",expectedDate:"",description:"",images:[]}),n=e=>{const{name:t,value:n}=e.target;r((e=>({...e,[t]:n})))};return(0,Vn.jsxs)(Fi,{children:[(0,Vn.jsxs)(Mi,{children:[(0,Vn.jsx)(Ui,{children:"Cleaning Service Request"}),(0,Vn.jsx)($i,{children:"Select the type of service and describe your cleaning needs in detail. Our professionals will provide the best service for you."})]}),(0,Vn.jsx)(Bi,{children:(0,Vn.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Submitting cleaning service request:",e)},children:[(0,Vn.jsxs)(Vi,{children:[(0,Vn.jsx)(Hi,{children:"Service Type"}),(0,Vn.jsxs)(Wi,{name:"serviceType",value:e.serviceType,onChange:n,required:!0,children:[(0,Vn.jsx)("option",{value:"",children:"Select a service type"}),[{id:"deep",name:"Deep Cleaning"},{id:"window",name:"Window Cleaning"},{id:"post-construction",name:"Post-Construction Cleaning"},{id:"office",name:"Office Cleaning"},{id:"other",name:"Other"}].map((e=>(0,Vn.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,Vn.jsxs)(Vi,{children:[(0,Vn.jsx)(Hi,{children:"Service Location"}),(0,Vn.jsx)(Ki,{type:"text",name:"location",value:e.location,onChange:n,placeholder:"Enter your address",required:!0})]}),(0,Vn.jsxs)(Vi,{children:[(0,Vn.jsx)(Hi,{children:"Preferred Service Date"}),(0,Vn.jsx)(Ki,{type:"date",name:"expectedDate",value:e.expectedDate,onChange:n,required:!0})]}),(0,Vn.jsxs)(Vi,{children:[(0,Vn.jsx)(Hi,{children:"Detailed Service Description"}),(0,Vn.jsx)(qi,{name:"description",value:e.description,onChange:n,placeholder:"Provide details such as area size, specific cleaning areas, special requirements, etc.",required:!0})]}),(0,Vn.jsxs)(Vi,{children:[(0,Vn.jsx)(Hi,{children:"Upload Photos (Optional)"}),(0,Vn.jsx)(Ii,{onImagesChange:e=>{r((t=>({...t,images:e})))},maxImages:5,acceptedFileTypes:["image/jpeg","image/png"]})]}),(0,Vn.jsx)(Yi,{type:"submit",children:"Submit Request"})]})})]})},Ji=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Gi=ir.div`
  background-color: var(--repair-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Xi=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,Zi=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,ea=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,ta=ir.h2`
  color: var(--repair-color);
  margin-bottom: 20px;
`,ra=ir.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,na=ir.div`
  margin-bottom: 15px;
`,ia=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,aa=ir.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--repair-color);
  }
`,oa=ir.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--repair-color);
  }
`,la=ir.button`
  background-color: var(--repair-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #e09620;
  }
`,sa=ir.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 4px solid var(--repair-color);
`,ca=ir.div`
  margin-bottom: 30px;
`,ua=ir.h2`
  margin-bottom: 20px;
  color: var(--repair-color);
`,da=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,pa=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,fa=ir.div`
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--repair-color);
`,ha=ir.h3`
  margin-bottom: 10px;
`,ga=ir.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
`,ma=ir.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,va=ir.span`
  margin-right: 10px;
  font-size: 14px;
  color: var(--text-secondary);
`,xa=ir.div`
  display: flex;
`,ba=ir.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${e=>e.active?"var(--repair-color)":"#eee"};
`,ya=ir.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
`,wa=ir.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--text-secondary);
`,ka=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,ja=ir.h2`
  color: var(--repair-color);
  margin-bottom: 20px;
`,Sa=ir.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ca=ir.button`
  background-color: var(--repair-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #e09620;
  }
`,Pa=ir.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`,Ea=ir.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 40px auto 0;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;const Oa=function(){const[e,r]=(0,t.useState)(null),[n,i]=(0,t.useState)(null);return(0,Vn.jsxs)(Ji,{children:[(0,Vn.jsxs)(Gi,{children:[(0,Vn.jsx)(Xi,{children:"Repair Services"}),(0,Vn.jsx)(Zi,{children:"Professional repair services for your home. From furniture to appliances, we've got you covered."})]}),(0,Vn.jsxs)(ea,{children:[(0,Vn.jsx)(ta,{children:"Quick Problem Diagnosis"}),(0,Vn.jsxs)(ra,{onSubmit:e=>{e.preventDefault(),r("Based on your description, this appears to be a moderate difficulty furniture repair issue. We recommend our Furniture Repair service with an estimated cost of \u20ac35-50 depending on the exact requirements.")},children:[(0,Vn.jsxs)(na,{children:[(0,Vn.jsx)(ia,{children:"Item Type"}),(0,Vn.jsxs)(aa,{children:[(0,Vn.jsx)("option",{value:"",children:"Select item type"}),(0,Vn.jsx)("option",{value:"furniture",children:"Furniture"}),(0,Vn.jsx)("option",{value:"electrical",children:"Electrical"}),(0,Vn.jsx)("option",{value:"appliance",children:"Appliance"}),(0,Vn.jsx)("option",{value:"drywall",children:"Drywall/Wall"}),(0,Vn.jsx)("option",{value:"door",children:"Door/Window"}),(0,Vn.jsx)("option",{value:"floor",children:"Flooring"})]})]}),(0,Vn.jsxs)(na,{children:[(0,Vn.jsx)(ia,{children:"Problem Category"}),(0,Vn.jsxs)(aa,{children:[(0,Vn.jsx)("option",{value:"",children:"Select problem category"}),(0,Vn.jsx)("option",{value:"broken",children:"Broken/Damaged"}),(0,Vn.jsx)("option",{value:"not-working",children:"Not Working"}),(0,Vn.jsx)("option",{value:"loose",children:"Loose/Unstable"}),(0,Vn.jsx)("option",{value:"stuck",children:"Stuck/Jammed"}),(0,Vn.jsx)("option",{value:"other",children:"Other"})]})]}),(0,Vn.jsxs)(na,{style:{gridColumn:"1 / -1"},children:[(0,Vn.jsx)(ia,{children:"Describe the Problem"}),(0,Vn.jsx)(oa,{placeholder:"Please provide details about the issue you're experiencing..."})]}),(0,Vn.jsx)(la,{type:"submit",children:"Diagnose Problem"})]}),e&&(0,Vn.jsxs)(sa,{children:[(0,Vn.jsx)("strong",{children:"Diagnosis Result:"})," ",e]})]}),(0,Vn.jsxs)(ca,{children:[(0,Vn.jsx)(ua,{children:"Common Repair Items"}),(0,Vn.jsx)(da,{children:[{id:"furniture",title:"Furniture Repair",icon:"\ud83e\ude91",description:"Fix broken chairs, tables, cabinets, and other furniture items.",difficulty:2,tools:["Screwdriver","Wood glue","Clamps","Sandpaper"],basePrice:35},{id:"electrical",title:"Electrical Repair",icon:"\ud83d\udca1",description:"Fix lighting issues, outlets, switches, and minor electrical problems.",difficulty:3,tools:["Voltage tester","Screwdriver","Wire stripper","Pliers"],basePrice:45},{id:"appliance",title:"Appliance Repair",icon:"\ud83d\udd0c",description:"Troubleshoot and fix household appliances like washing machines, dryers, etc.",difficulty:3,tools:["Multimeter","Screwdriver set","Pliers","Socket set"],basePrice:50},{id:"drywall",title:"Drywall Repair",icon:"\ud83e\uddf1",description:"Fix holes, cracks, and damage to walls and ceilings.",difficulty:2,tools:["Putty knife","Sanding block","Joint compound","Tape"],basePrice:40},{id:"door",title:"Door Repair",icon:"\ud83d\udeaa",description:"Fix squeaky hinges, sticking doors, broken locks, and door frames.",difficulty:2,tools:["Screwdriver","Chisel","Hammer","Lubricant"],basePrice:35},{id:"floor",title:"Floor Repair",icon:"\ud83e\udeb5",description:"Fix damaged hardwood, laminate, tile, or vinyl flooring.",difficulty:3,tools:["Pry bar","Hammer","Saw","Adhesive"],basePrice:45}].map((e=>{return(0,Vn.jsxs)(pa,{children:[(0,Vn.jsx)(fa,{children:e.icon}),(0,Vn.jsx)(ha,{children:e.title}),(0,Vn.jsx)(ga,{children:e.description}),(t=e.difficulty,(0,Vn.jsxs)(ma,{children:[(0,Vn.jsx)(va,{children:"Difficulty:"}),(0,Vn.jsxs)(xa,{children:[(0,Vn.jsx)(ba,{active:t>=1}),(0,Vn.jsx)(ba,{active:t>=2}),(0,Vn.jsx)(ba,{active:t>=3})]})]})),(0,Vn.jsx)(ya,{children:e.tools.map(((e,t)=>(0,Vn.jsx)(wa,{children:e},t)))}),(0,Vn.jsxs)("div",{children:["Starting from \u20ac",e.basePrice,"/hour"]})]},e.id);var t}))})]}),(0,Vn.jsxs)(ka,{children:[(0,Vn.jsx)(ja,{children:"Price Estimator"}),(0,Vn.jsxs)(Sa,{onSubmit:e=>{e.preventDefault(),i("\u20ac45 - \u20ac60")},children:[(0,Vn.jsxs)(na,{children:[(0,Vn.jsx)(ia,{children:"Repair Type"}),(0,Vn.jsxs)(aa,{children:[(0,Vn.jsx)("option",{value:"",children:"Select repair type"}),(0,Vn.jsx)("option",{value:"furniture",children:"Furniture Repair"}),(0,Vn.jsx)("option",{value:"electrical",children:"Electrical Repair"}),(0,Vn.jsx)("option",{value:"appliance",children:"Appliance Repair"}),(0,Vn.jsx)("option",{value:"drywall",children:"Drywall Repair"}),(0,Vn.jsx)("option",{value:"door",children:"Door Repair"}),(0,Vn.jsx)("option",{value:"floor",children:"Floor Repair"})]})]}),(0,Vn.jsxs)(na,{children:[(0,Vn.jsx)(ia,{children:"Complexity"}),(0,Vn.jsxs)(aa,{children:[(0,Vn.jsx)("option",{value:"simple",children:"Simple (1-2 hours)"}),(0,Vn.jsx)("option",{value:"moderate",children:"Moderate (2-4 hours)"}),(0,Vn.jsx)("option",{value:"complex",children:"Complex (4+ hours)"})]})]}),(0,Vn.jsxs)(na,{children:[(0,Vn.jsx)(ia,{children:"Urgency"}),(0,Vn.jsxs)(aa,{children:[(0,Vn.jsx)("option",{value:"standard",children:"Standard"}),(0,Vn.jsx)("option",{value:"urgent",children:"Urgent (within 24 hours)"}),(0,Vn.jsx)("option",{value:"emergency",children:"Emergency (same day)"})]})]}),(0,Vn.jsxs)(na,{children:[(0,Vn.jsx)(ia,{children:"Materials Needed"}),(0,Vn.jsxs)(aa,{children:[(0,Vn.jsx)("option",{value:"none",children:"None/Minimal"}),(0,Vn.jsx)("option",{value:"basic",children:"Basic Materials"}),(0,Vn.jsx)("option",{value:"specialized",children:"Specialized Materials"})]})]}),(0,Vn.jsx)(Ca,{type:"submit",children:"Calculate Estimate"})]}),n&&(0,Vn.jsxs)(Pa,{children:["Estimated Price Range: ",n]})]}),(0,Vn.jsx)(Ea,{children:"Book Repair Service"})]})},Ra=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Ta=ir.div`
  background-color: var(--elder-care-color);
  color: var(--text-light);
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,_a=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,Na=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,La=ir.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Aa=ir.div``,za=ir.div``,Da=ir.h2`
  margin-bottom: 20px;
  color: var(--elder-care-color);
`,Ia=ir.div`
  background: var(--text-light);
  color: var(--text-dark);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,Fa=ir.div`
  margin-bottom: 20px;
`,Ma=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Ua=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--elder-care-color);
  }
`,$a=ir.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--elder-care-color);
  }
`,Ba=ir.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--elder-care-color);
  }
`,Va=ir.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Ha=ir.div`
  display: flex;
  align-items: center;
`,Wa=ir.input`
  margin-right: 8px;
`,qa=ir.button`
  background-color: var(--elder-care-color);
  color: var(--text-light);
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--text-secondary);
  }
`,Ka=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,Ya=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,Qa=ir.div`
  background: var(--text-light);
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  color: var(--text-dark);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(46, 125, 50, 0.05);
  }
`,Ja=ir.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--elder-care-color);
`,Ga=ir.h3`
  text-align: center;
  margin-bottom: 10px;
`,Xa=ir.div`
  text-align: center;
  margin-bottom: 10px;
  color: #f8b400;
`,Za=ir.div`
  margin-bottom: 10px;
`,eo=ir.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`,to=ir.button`
  width: 100%;
  background-color: var(--elder-care-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7b10d5;
  }
`,ro=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,no=ir.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 20px;
`,io=ir.div`
  text-align: center;
  font-weight: 500;
  padding: 5px;
`,ao=ir.div`
  text-align: center;
  padding: 10px 5px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${e=>e.selected?"var(--elder-care-color)":e.available?"white":"#f9f9f9"};
  color: ${e=>e.selected?"white":e.available?"var(--text-primary)":"#ccc"};
  
  &:hover {
    background-color: ${e=>e.selected?"var(--elder-care-color)":e.available?"#f0f0f0":"#f9f9f9"};
  }
`,oo=ir.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,lo=ir.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${e=>e.selected?"var(--elder-care-color)":e.available?"white":"#f9f9f9"};
  color: ${e=>e.selected?"white":e.available?"var(--text-primary)":"#ccc"};
  
  &:hover {
    background-color: ${e=>e.selected?"var(--elder-care-color)":e.available?"#f0f0f0":"#f9f9f9"};
  }
`,so=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,co=ir.div`
  margin-bottom: 20px;
`,uo=ir.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,po=ir.div``,fo=ir.div`
  font-weight: 500;
`,ho=ir.div`
  font-size: 14px;
  color: var(--text-secondary);
`,go=ir.div`
  display: flex;
  gap: 10px;
`,mo=ir.button`
  background-color: ${e=>e.secondary?"#f0f0f0":"var(--elder-care-color)"};
  color: ${e=>e.secondary?"var(--text-primary)":"white"};
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#e0e0e0":"#7b10d5"};
  }
`,vo=ir.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: var(--text-primary);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`,xo=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,bo=ir.div`
  margin-bottom: 20px;
`,yo=ir.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,wo=ir.div``,ko=ir.div`
  font-weight: 500;
`,jo=ir.div`
  font-size: 14px;
  color: var(--text-secondary);
`,So=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  position: sticky;
  top: 20px;
`,Co=ir.h3`
  margin-bottom: 20px;
  color: var(--elder-care-color);
`,Po=ir.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,Eo=ir.span`
  color: var(--text-secondary);
`,Oo=ir.span`
  font-weight: 500;
`,Ro=ir.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`,To=ir.button`
  display: block;
  width: 100%;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;const _o=function(){const e=ee(),[r,n]=(0,t.useState)([]),[i,a]=(0,t.useState)(null),o=(()=>{const e=[],t=new Date;for(let r=0;r<14;r++){const n=new Date(t);n.setDate(t.getDate()+r),e.push({date:n,available:Math.random()>.3})}return e})(),l=(()=>{const e=[];for(let t=8;t<=18;t++)e.push({time:`${t}:00`,available:Math.random()>.3}),t<18&&e.push({time:`${t}:30`,available:Math.random()>.3});return e})();return(0,Vn.jsxs)(Ra,{children:[(0,Vn.jsxs)(Ta,{children:[(0,Vn.jsx)(_a,{children:"Elder Care Services"}),(0,Vn.jsx)(Na,{children:"Professional and compassionate care services for elderly loved ones. Our qualified caregivers provide personalized support."})]}),(0,Vn.jsxs)(La,{children:[(0,Vn.jsxs)(Aa,{children:[(0,Vn.jsxs)(Ia,{children:[(0,Vn.jsx)(Da,{children:"Care Needs Assessment"}),(0,Vn.jsxs)(Fa,{children:[(0,Vn.jsx)(Ma,{children:"Care Recipient's Name"}),(0,Vn.jsx)(Ua,{type:"text",placeholder:"Enter full name"})]}),(0,Vn.jsxs)(Fa,{children:[(0,Vn.jsx)(Ma,{children:"Age"}),(0,Vn.jsx)(Ua,{type:"number",placeholder:"Enter age",min:"60",max:"120"})]}),(0,Vn.jsxs)(Fa,{children:[(0,Vn.jsx)(Ma,{children:"Care Level Needed"}),(0,Vn.jsxs)($a,{children:[(0,Vn.jsx)("option",{value:"",children:"Select care level"}),(0,Vn.jsx)("option",{value:"basic",children:"Basic Care - Companionship & Light Assistance"}),(0,Vn.jsx)("option",{value:"moderate",children:"Moderate Care - Personal Care & Mobility Help"}),(0,Vn.jsx)("option",{value:"advanced",children:"Advanced Care - Medical Assistance & Full Support"})]})]}),(0,Vn.jsxs)(Fa,{children:[(0,Vn.jsx)(Ma,{children:"Assistance Needed (Select all that apply)"}),(0,Vn.jsxs)(Va,{children:[(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"mobility"}),(0,Vn.jsx)("label",{htmlFor:"mobility",children:"Mobility Assistance"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"medication"}),(0,Vn.jsx)("label",{htmlFor:"medication",children:"Medication Management"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"bathing"}),(0,Vn.jsx)("label",{htmlFor:"bathing",children:"Bathing & Hygiene"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"meals"}),(0,Vn.jsx)("label",{htmlFor:"meals",children:"Meal Preparation"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"housekeeping"}),(0,Vn.jsx)("label",{htmlFor:"housekeeping",children:"Light Housekeeping"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"transportation"}),(0,Vn.jsx)("label",{htmlFor:"transportation",children:"Transportation"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"companionship"}),(0,Vn.jsx)("label",{htmlFor:"companionship",children:"Companionship"})]}),(0,Vn.jsxs)(Ha,{children:[(0,Vn.jsx)(Wa,{type:"checkbox",id:"specialized"}),(0,Vn.jsx)("label",{htmlFor:"specialized",children:"Specialized Care"})]})]})]}),(0,Vn.jsxs)(Fa,{children:[(0,Vn.jsx)(Ma,{children:"Additional Information"}),(0,Vn.jsx)(Ba,{placeholder:"Please provide any additional details about care needs..."})]}),(0,Vn.jsx)(qa,{children:"Submit Assessment"})]}),(0,Vn.jsxs)(Ka,{children:[(0,Vn.jsx)(Da,{children:"Our Qualified Caregivers"}),(0,Vn.jsx)(Ya,{children:[{id:1,name:"Maria K.",rating:4.9,qualifications:["Certified Nurse","First Aid","5+ Years Experience","Dementia Care"],initial:"M"},{id:2,name:"John D.",rating:4.8,qualifications:["Home Health Aide","CPR Certified","3+ Years Experience","Mobility Assistance"],initial:"J"},{id:3,name:"Anna S.",rating:4.7,qualifications:["Registered Nurse","Medication Management","7+ Years Experience","Alzheimer's Care"],initial:"A"}].map((e=>(0,Vn.jsxs)(Qa,{children:[(0,Vn.jsx)(Ja,{children:e.initial}),(0,Vn.jsx)(Ga,{children:e.name}),(0,Vn.jsxs)(Xa,{children:["\u2605".repeat(Math.floor(e.rating))," ",e.rating]}),(0,Vn.jsx)(Za,{children:e.qualifications.map(((e,t)=>(0,Vn.jsx)(eo,{children:e},t)))}),(0,Vn.jsx)(to,{children:"Select Caregiver"})]},e.id)))})]}),(0,Vn.jsxs)(ro,{children:[(0,Vn.jsx)(Da,{children:"Service Schedule Setup"}),(0,Vn.jsx)(Ma,{children:"Select Days"}),(0,Vn.jsxs)(no,{children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((e=>(0,Vn.jsx)(io,{children:e},e))),o.map(((e,t)=>(0,Vn.jsx)(ao,{available:e.available,selected:r.some((t=>t.toDateString()===e.date.toDateString())),onClick:()=>(e=>{if(!e.available)return;const t=e.date.toDateString();r.some((e=>e.toDateString()===t))?n(r.filter((e=>e.toDateString()!==t))):n([...r,e.date])})(e),children:e.date.getDate()},t)))]}),(0,Vn.jsx)(Ma,{children:"Select Time"}),(0,Vn.jsx)(oo,{children:l.map(((e,t)=>(0,Vn.jsx)(lo,{available:e.available,selected:i===e.time,onClick:()=>(e=>{e.available&&a(e.time===i?null:e.time)})(e),children:e.time},t)))})]}),(0,Vn.jsxs)(so,{children:[(0,Vn.jsx)(Da,{children:"Emergency Contacts"}),(0,Vn.jsx)(co,{children:[{id:1,name:"Robert Johnson",relation:"Son",phone:"+372 5551234"},{id:2,name:"Emily Smith",relation:"Daughter",phone:"+372 5555678"}].map((e=>(0,Vn.jsxs)(uo,{children:[(0,Vn.jsxs)(po,{children:[(0,Vn.jsx)(fo,{children:e.name}),(0,Vn.jsxs)(ho,{children:[e.relation," \u2022 ",e.phone]})]}),(0,Vn.jsxs)(go,{children:[(0,Vn.jsx)(mo,{secondary:!0,children:"Edit"}),(0,Vn.jsx)(mo,{secondary:!0,children:"Remove"})]})]},e.id)))}),(0,Vn.jsx)(vo,{children:"+ Add Emergency Contact"})]}),(0,Vn.jsxs)(xo,{children:[(0,Vn.jsx)(Da,{children:"Medical Requirements"}),(0,Vn.jsx)(bo,{children:[{id:1,title:"Medication Schedule",description:"Blood pressure medication 3 times daily"},{id:2,title:"Mobility Assistance",description:"Help with walking and transfers"},{id:3,title:"Dietary Restrictions",description:"Low sodium diet, no dairy"}].map((e=>(0,Vn.jsxs)(yo,{children:[(0,Vn.jsxs)(wo,{children:[(0,Vn.jsx)(ko,{children:e.title}),(0,Vn.jsx)(jo,{children:e.description})]}),(0,Vn.jsxs)(go,{children:[(0,Vn.jsx)(mo,{secondary:!0,children:"Edit"}),(0,Vn.jsx)(mo,{secondary:!0,children:"Remove"})]})]},e.id)))}),(0,Vn.jsx)(vo,{children:"+ Add Medical Requirement"})]})]}),(0,Vn.jsx)(za,{children:(0,Vn.jsxs)(So,{children:[(0,Vn.jsx)(Co,{children:"Service Summary"}),(0,Vn.jsxs)(Po,{children:[(0,Vn.jsx)(Eo,{children:"Care Level:"}),(0,Vn.jsx)(Oo,{children:"Moderate Care"})]}),(0,Vn.jsxs)(Po,{children:[(0,Vn.jsx)(Eo,{children:"Caregiver:"}),(0,Vn.jsx)(Oo,{children:"Maria K."})]}),(0,Vn.jsxs)(Po,{children:[(0,Vn.jsx)(Eo,{children:"Schedule:"}),(0,Vn.jsx)(Oo,{children:r.length>0?`${r.length} days selected`:"No days selected"})]}),(0,Vn.jsxs)(Po,{children:[(0,Vn.jsx)(Eo,{children:"Time:"}),(0,Vn.jsx)(Oo,{children:i||"Not selected"})]}),(0,Vn.jsxs)(Po,{children:[(0,Vn.jsx)(Eo,{children:"Duration:"}),(0,Vn.jsx)(Oo,{children:"4 hours"})]}),(0,Vn.jsxs)(Ro,{children:[(0,Vn.jsx)("span",{children:"Total:"}),(0,Vn.jsx)("span",{children:"\u20ac120"})]}),(0,Vn.jsx)(To,{onClick:()=>e("/payment"),children:"Book Care Service"})]})})]})]})},No=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Lo=ir.div`
  background-color: var(--child-care-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Ao=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,zo=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,Do=ir.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Io=ir.div``,Fo=ir.div``,Mo=ir.h2`
  margin-bottom: 20px;
  color: var(--child-care-color);
`,Uo=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,$o=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,Bo=ir.div`
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--child-care-color);
`,Vo=ir.h3`
  margin-bottom: 10px;
`,Ho=ir.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
`,Wo=ir.button`
  background-color: var(--child-care-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6d119;
  }
`,qo=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,Ko=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,Yo=ir.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,Qo=ir.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--child-care-color);
`,Jo=ir.h3`
  text-align: center;
  margin-bottom: 10px;
`,Go=ir.div`
  text-align: center;
  margin-bottom: 10px;
  color: #f8b400;
`,Xo=ir.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`,Zo=ir.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`,el=ir.button`
  background-color: var(--child-care-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6d119;
  }
`,tl=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,rl=ir.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 20px;
`,nl=ir.div`
  text-align: center;
  font-weight: 500;
  padding: 5px;
`,il=ir.div`
  text-align: center;
  padding: 10px 5px;
  border-radius: 4px;
  cursor: ${e=>e.available?"pointer":"not-allowed"};
  background-color: ${e=>e.available?e.selected?"var(--child-care-color)":"white":"#f0f0f0"};
  color: ${e=>e.available?e.selected?"white":"var(--text-primary)":"#aaa"};
  border: 1px solid ${e=>e.selected?"var(--child-care-color)":"#eee"};
  
  &:hover {
    background-color: ${e=>e.available&&!e.selected?"#f9f9f9":""};
  }
`,al=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`,ol=ir.div`
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  cursor: ${e=>e.available?"pointer":"not-allowed"};
  background-color: ${e=>e.available?e.selected?"var(--child-care-color)":"white":"#f0f0f0"};
  color: ${e=>e.available?e.selected?"white":"var(--text-primary)":"#aaa"};
  border: 1px solid ${e=>e.selected?"var(--child-care-color)":"#eee"};
  
  &:hover {
    background-color: ${e=>e.available&&!e.selected?"#f9f9f9":""};
  }
`,ll=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,sl=ir.div`
  margin-bottom: 20px;
`,cl=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--child-care-color);
  }
`,ul=ir.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--child-care-color);
  }
`,dl=ir.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--child-care-color);
  }
`,pl=ir.button`
  background-color: var(--child-care-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6d119;
  }
`,fl=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`,hl=ir.h3`
  margin-bottom: 15px;
  color: var(--child-care-color);
`,gl=ir.ul`
  list-style-type: none;
  padding: 0;
`,ml=ir.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,vl=ir.span`
  color: var(--child-care-color);
  margin-right: 10px;
`;const xl=function(){const[e,r]=(0,t.useState)([]),[n,i]=(0,t.useState)(null),a=(()=>{const e=[],t=new Date;for(let r=0;r<14;r++){const n=new Date(t);n.setDate(t.getDate()+r),e.push({date:n,available:Math.random()>.3})}return e})(),o=(()=>{const e=[];for(let t=8;t<=18;t++)e.push({time:`${t}:00`,available:Math.random()>.3}),t<18&&e.push({time:`${t}:30`,available:Math.random()>.3});return e})();return(0,Vn.jsxs)(No,{children:[(0,Vn.jsxs)(Lo,{children:[(0,Vn.jsx)(Ao,{children:"Child Care Services"}),(0,Vn.jsx)(zo,{children:"Professional and reliable childcare services tailored to your family's needs. Our qualified caregivers provide safe, nurturing, and educational care for children of all ages."})]}),(0,Vn.jsxs)(Do,{children:[(0,Vn.jsxs)(Io,{children:[(0,Vn.jsx)(Mo,{children:"Our Child Care Services"}),(0,Vn.jsx)(Uo,{children:[{id:1,title:"Babysitting",icon:"\ud83d\udc76",description:"Professional babysitting services for infants and toddlers in your home."},{id:2,title:"Daycare",icon:"\ud83c\udfe0",description:"Safe and nurturing daycare environment with educational activities and playtime."},{id:3,title:"After-School Care",icon:"\ud83c\udf92",description:"Supervision and assistance with homework for school-aged children after school hours."},{id:4,title:"Special Needs Care",icon:"\u2764\ufe0f",description:"Specialized care for children with special needs by trained professionals."},{id:5,title:"Overnight Care",icon:"\ud83c\udf19",description:"Overnight childcare services for parents who work night shifts or need evening coverage."},{id:6,title:"Educational Support",icon:"\ud83d\udcda",description:"Educational activities and tutoring to support your child's learning and development."}].map((e=>(0,Vn.jsxs)($o,{children:[(0,Vn.jsx)(Bo,{children:e.icon}),(0,Vn.jsx)(Vo,{children:e.title}),(0,Vn.jsx)(Ho,{children:e.description}),(0,Vn.jsx)(Wo,{children:"Learn More"})]},e.id)))}),(0,Vn.jsxs)(qo,{children:[(0,Vn.jsx)(Mo,{children:"Our Qualified Caregivers"}),(0,Vn.jsx)(Ko,{children:[{id:1,name:"Sophie M.",rating:4.9,qualifications:["Early Childhood Education","First Aid Certified","5+ Years Experience","Multilingual"],initial:"S"},{id:2,name:"David L.",rating:4.8,qualifications:["Child Psychology","CPR Certified","3+ Years Experience","Special Needs Training"],initial:"D"},{id:3,name:"Emma R.",rating:4.7,qualifications:["Elementary Education","Art Therapy","4+ Years Experience","Music Education"],initial:"E"}].map((e=>(0,Vn.jsxs)(Yo,{children:[(0,Vn.jsx)(Qo,{children:e.initial}),(0,Vn.jsx)(Jo,{children:e.name}),(0,Vn.jsxs)(Go,{children:["\u2605".repeat(Math.floor(e.rating))," ",e.rating]}),(0,Vn.jsx)(Xo,{children:e.qualifications.map(((e,t)=>(0,Vn.jsx)(Zo,{children:e},t)))}),(0,Vn.jsx)(el,{children:"Select Caregiver"})]},e.id)))})]}),(0,Vn.jsxs)(tl,{children:[(0,Vn.jsx)(Mo,{children:"Schedule Child Care"}),(0,Vn.jsx)(ll,{children:"Select Days"}),(0,Vn.jsxs)(rl,{children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((e=>(0,Vn.jsx)(nl,{children:e},e))),a.map(((t,n)=>(0,Vn.jsx)(il,{available:t.available,selected:e.some((e=>e.toDateString()===t.date.toDateString())),onClick:()=>(t=>{if(!t.available)return;const n=t.date.toDateString();e.some((e=>e.toDateString()===n))?r(e.filter((e=>e.toDateString()!==n))):r([...e,t.date])})(t),children:t.date.getDate()},n)))]}),(0,Vn.jsx)(ll,{children:"Select Time"}),(0,Vn.jsx)(al,{children:o.map(((e,t)=>(0,Vn.jsx)(ol,{available:e.available,selected:n===e.time,onClick:()=>(e=>{e.available&&i(e.time===n?null:e.time)})(e),children:e.time},t)))}),(0,Vn.jsxs)(sl,{children:[(0,Vn.jsx)(ll,{children:"Number of Children"}),(0,Vn.jsxs)(ul,{children:[(0,Vn.jsx)("option",{value:"1",children:"1 Child"}),(0,Vn.jsx)("option",{value:"2",children:"2 Children"}),(0,Vn.jsx)("option",{value:"3",children:"3 Children"}),(0,Vn.jsx)("option",{value:"4+",children:"4+ Children"})]})]}),(0,Vn.jsxs)(sl,{children:[(0,Vn.jsx)(ll,{children:"Ages of Children"}),(0,Vn.jsxs)(ul,{children:[(0,Vn.jsx)("option",{value:"",children:"Select age range"}),(0,Vn.jsx)("option",{value:"infant",children:"Infant (0-1 years)"}),(0,Vn.jsx)("option",{value:"toddler",children:"Toddler (1-3 years)"}),(0,Vn.jsx)("option",{value:"preschool",children:"Preschool (3-5 years)"}),(0,Vn.jsx)("option",{value:"school-age",children:"School Age (6-12 years)"}),(0,Vn.jsx)("option",{value:"mixed",children:"Mixed Ages"})]})]}),(0,Vn.jsxs)(sl,{children:[(0,Vn.jsx)(ll,{children:"Contact Email"}),(0,Vn.jsx)(cl,{type:"email",placeholder:"Your email address"})]}),(0,Vn.jsxs)(sl,{children:[(0,Vn.jsx)(ll,{children:"Special Requirements"}),(0,Vn.jsx)(dl,{placeholder:"Please provide any special requirements or instructions..."})]}),(0,Vn.jsx)(pl,{children:"Book Child Care"})]})]}),(0,Vn.jsxs)(Fo,{children:[(0,Vn.jsxs)(fl,{children:[(0,Vn.jsx)(hl,{children:"Why Choose Our Child Care"}),(0,Vn.jsxs)(gl,{children:[(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Qualified and vetted caregivers"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Personalized care plans"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Educational activities and development"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Flexible scheduling options"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Regular progress reports"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Safe and nurturing environment"]})]})]}),(0,Vn.jsxs)(fl,{children:[(0,Vn.jsx)(hl,{children:"Safety Measures"}),(0,Vn.jsxs)(gl,{children:[(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Background-checked caregivers"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," First aid and CPR certified"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Child safety protocols"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Regular safety training"]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)(vl,{children:"\u2713"})," Emergency response plans"]})]})]}),(0,Vn.jsxs)(fl,{children:[(0,Vn.jsx)(hl,{children:"Frequently Asked Questions"}),(0,Vn.jsxs)(gl,{children:[(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)("strong",{children:"What ages do you provide care for?"}),(0,Vn.jsx)("br",{}),"We offer care for children of all ages, from infants to teenagers."]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)("strong",{children:"How are caregivers selected?"}),(0,Vn.jsx)("br",{}),"All caregivers undergo thorough background checks, interviews, and training."]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)("strong",{children:"Can I meet the caregiver before booking?"}),(0,Vn.jsx)("br",{}),"Yes, we encourage pre-service meetings to ensure a good match."]}),(0,Vn.jsxs)(ml,{children:[(0,Vn.jsx)("strong",{children:"What is your cancellation policy?"}),(0,Vn.jsx)("br",{}),"Cancellations made 24 hours in advance receive a full refund."]})]})]})]})]})]})},bl=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,yl=ir.div`
  background-color: var(--plumbing-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,wl=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,kl=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,jl=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`,Sl=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`,Cl=ir.div`
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--plumbing-color);
`,Pl=ir.h3`
  margin-bottom: 10px;
  color: var(--text-primary);
`,El=ir.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
`,Ol=ir.div`
  font-weight: 500;
  margin-bottom: 15px;
`,Rl=ir.button`
  background-color: var(--plumbing-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #45c9ad;
  }
`,Tl=ir.div`
  background: #fff4e5;
  border-radius: 8px;
  padding: var(--card-padding);
  margin-bottom: 40px;
  border-left: 4px solid #ff9800;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,_l=ir.div`
  font-size: 48px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`,Nl=ir.div`
  flex: 1;
`,Ll=ir.h3`
  margin-bottom: 10px;
  color: #e65100;
`,Al=ir.p`
  margin-bottom: 15px;
`,zl=ir.button`
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e65100;
  }
`,Dl=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
`,Il=ir.h2`
  margin-bottom: 20px;
  color: var(--plumbing-color);
`,Fl=ir.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ml=ir.div`
  margin-bottom: 15px;
`,Ul=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,$l=ir.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--plumbing-color);
  }
`,Bl=ir.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--plumbing-color);
  }
`,Vl=ir.button`
  background-color: var(--plumbing-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #45c9ad;
  }
`,Hl=ir.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 4px solid var(--plumbing-color);
`,Wl=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
`,ql=ir.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Kl=ir.button`
  background-color: var(--plumbing-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #45c9ad;
  }
`,Yl=ir.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`,Ql=ir.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 40px auto 0;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;const Jl=function(){const[e,r]=(0,t.useState)(null),[n,i]=(0,t.useState)(null);return(0,Vn.jsxs)(bl,{children:[(0,Vn.jsxs)(yl,{children:[(0,Vn.jsx)(wl,{children:"Plumbing Services"}),(0,Vn.jsx)(kl,{children:"Professional plumbing services for your home. From leaks to installations, we've got you covered."})]}),(0,Vn.jsxs)(Tl,{children:[(0,Vn.jsx)(_l,{children:"\ud83d\udea8"}),(0,Vn.jsxs)(Nl,{children:[(0,Vn.jsx)(Ll,{children:"Emergency Plumbing Service"}),(0,Vn.jsx)(Al,{children:"Experiencing a plumbing emergency? Our team is available 24/7 for urgent plumbing issues like burst pipes, major leaks, or sewage backups."}),(0,Vn.jsx)(zl,{children:"Call Emergency Service"})]})]}),(0,Vn.jsx)(Il,{children:"Our Plumbing Services"}),(0,Vn.jsx)(jl,{children:[{id:"leak",title:"Leak Repair",icon:"\ud83d\udebf",description:"Fix leaking pipes, faucets, and fixtures to prevent water damage.",price:"\u20ac40/hour"},{id:"drain",title:"Drain Cleaning",icon:"\ud83d\udebd",description:"Clear clogged drains and pipes to restore proper water flow.",price:"\u20ac35/hour"},{id:"installation",title:"Fixture Installation",icon:"\ud83d\udec1",description:"Install new sinks, toilets, showers, and other plumbing fixtures.",price:"\u20ac45/hour"},{id:"pipe",title:"Pipe Repair",icon:"\ud83d\udd27",description:"Repair or replace damaged pipes in your plumbing system.",price:"\u20ac50/hour"},{id:"water-heater",title:"Water Heater Service",icon:"\u2668\ufe0f",description:"Repair, maintenance, and installation of water heaters.",price:"\u20ac55/hour"},{id:"inspection",title:"Plumbing Inspection",icon:"\ud83d\udd0d",description:"Comprehensive inspection of your plumbing system to identify issues.",price:"\u20ac30/hour"}].map((e=>(0,Vn.jsxs)(Sl,{children:[(0,Vn.jsx)(Cl,{children:e.icon}),(0,Vn.jsx)(Pl,{children:e.title}),(0,Vn.jsx)(El,{children:e.description}),(0,Vn.jsxs)(Ol,{children:["Starting from ",e.price]}),(0,Vn.jsx)(Rl,{children:"Book Service"})]},e.id)))}),(0,Vn.jsxs)(Dl,{children:[(0,Vn.jsx)(Il,{children:"Plumbing Problem Diagnosis"}),(0,Vn.jsxs)(Fl,{onSubmit:e=>{e.preventDefault(),r("Based on your description, this appears to be a standard drain clog issue. We recommend our Drain Cleaning service with an estimated cost of \u20ac35-45 depending on the severity of the clog.")},children:[(0,Vn.jsxs)(Ml,{children:[(0,Vn.jsx)(Ul,{children:"Problem Area"}),(0,Vn.jsxs)($l,{children:[(0,Vn.jsx)("option",{value:"",children:"Select problem area"}),(0,Vn.jsx)("option",{value:"kitchen",children:"Kitchen"}),(0,Vn.jsx)("option",{value:"bathroom",children:"Bathroom"}),(0,Vn.jsx)("option",{value:"basement",children:"Basement"}),(0,Vn.jsx)("option",{value:"outdoor",children:"Outdoor"}),(0,Vn.jsx)("option",{value:"other",children:"Other"})]})]}),(0,Vn.jsxs)(Ml,{children:[(0,Vn.jsx)(Ul,{children:"Problem Type"}),(0,Vn.jsxs)($l,{children:[(0,Vn.jsx)("option",{value:"",children:"Select problem type"}),(0,Vn.jsx)("option",{value:"leak",children:"Leak/Drip"}),(0,Vn.jsx)("option",{value:"clog",children:"Clog/Slow Drain"}),(0,Vn.jsx)("option",{value:"pressure",children:"Low Water Pressure"}),(0,Vn.jsx)("option",{value:"noise",children:"Noisy Pipes"}),(0,Vn.jsx)("option",{value:"other",children:"Other"})]})]}),(0,Vn.jsxs)(Ml,{style:{gridColumn:"1 / -1"},children:[(0,Vn.jsx)(Ul,{children:"Describe the Problem"}),(0,Vn.jsx)(Bl,{placeholder:"Please provide details about the plumbing issue you're experiencing..."})]}),(0,Vn.jsx)(Vl,{type:"submit",children:"Diagnose Problem"})]}),e&&(0,Vn.jsxs)(Hl,{children:[(0,Vn.jsx)("strong",{children:"Diagnosis Result:"})," ",e]})]}),(0,Vn.jsxs)(Wl,{children:[(0,Vn.jsx)(Il,{children:"Price Estimator"}),(0,Vn.jsxs)(ql,{onSubmit:e=>{e.preventDefault(),i("\u20ac40 - \u20ac55")},children:[(0,Vn.jsxs)(Ml,{children:[(0,Vn.jsx)(Ul,{children:"Service Type"}),(0,Vn.jsxs)($l,{children:[(0,Vn.jsx)("option",{value:"",children:"Select service type"}),(0,Vn.jsx)("option",{value:"leak",children:"Leak Repair"}),(0,Vn.jsx)("option",{value:"drain",children:"Drain Cleaning"}),(0,Vn.jsx)("option",{value:"installation",children:"Fixture Installation"}),(0,Vn.jsx)("option",{value:"pipe",children:"Pipe Repair"}),(0,Vn.jsx)("option",{value:"water-heater",children:"Water Heater Service"}),(0,Vn.jsx)("option",{value:"inspection",children:"Plumbing Inspection"})]})]}),(0,Vn.jsxs)(Ml,{children:[(0,Vn.jsx)(Ul,{children:"Complexity"}),(0,Vn.jsxs)($l,{children:[(0,Vn.jsx)("option",{value:"simple",children:"Simple (1-2 hours)"}),(0,Vn.jsx)("option",{value:"moderate",children:"Moderate (2-4 hours)"}),(0,Vn.jsx)("option",{value:"complex",children:"Complex (4+ hours)"})]})]}),(0,Vn.jsxs)(Ml,{children:[(0,Vn.jsx)(Ul,{children:"Urgency"}),(0,Vn.jsxs)($l,{children:[(0,Vn.jsx)("option",{value:"standard",children:"Standard"}),(0,Vn.jsx)("option",{value:"urgent",children:"Urgent (within 24 hours)"}),(0,Vn.jsx)("option",{value:"emergency",children:"Emergency (same day)"})]})]}),(0,Vn.jsxs)(Ml,{children:[(0,Vn.jsx)(Ul,{children:"Materials Needed"}),(0,Vn.jsxs)($l,{children:[(0,Vn.jsx)("option",{value:"none",children:"None/Minimal"}),(0,Vn.jsx)("option",{value:"basic",children:"Basic Materials"}),(0,Vn.jsx)("option",{value:"specialized",children:"Specialized Materials"})]})]}),(0,Vn.jsx)(Kl,{type:"submit",children:"Calculate Estimate"})]}),n&&(0,Vn.jsxs)(Yl,{children:["Estimated Price Range: ",n]})]}),(0,Vn.jsx)(Ql,{children:"Book Plumbing Service"})]})},Gl=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Xl=ir.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Zl=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,es=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,ts=ir.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rs=ir.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,ns=ir.button`
  flex: 1;
  padding: 15px;
  background-color: ${e=>e.active?"var(--primary-color)":"white"};
  color: ${e=>e.active?"white":"var(--text-primary)"};
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.active?"var(--primary-color)":"#f0f0f0"};
  }
`,is=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,as=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 20px;
  height: fit-content;
`,os=ir.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`,ls=ir.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,ss=ir.span`
  color: var(--text-secondary);
`,cs=ir.span`
  font-weight: 500;
`,us=ir.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`,ds=ir.div`
  margin-bottom: 30px;
`,ps=ir.div`
  display: flex;
  margin-bottom: 30px;
`,fs=ir.div`
  flex: 1;
  text-align: center;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: ${e=>e.active||e.completed?"var(--primary-color)":"#eee"};
  }
`,hs=ir.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${e=>e.active?"var(--primary-color)":e.completed?"#4CAF50":"#eee"};
  color: ${e=>e.active||e.completed?"white":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-weight: 500;
  position: relative;
  z-index: 1;
`,gs=ir.div`
  font-size: 14px;
  color: ${e=>e.active?"var(--primary-color)":e.completed?"#4CAF50":"var(--text-secondary)"};
  font-weight: ${e=>e.active||e.completed?"500":"normal"};
`,ms=ir.div`
  margin-bottom: 30px;
`,vs=ir.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`,xs=ir.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bs=ir.div`
  margin-bottom: 15px;
`,ys=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,ws=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,ks=ir.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,js=ir.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Ss=ir.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`,Cs=ir.button`
  padding: 12px 24px;
  background-color: ${e=>e.secondary?"white":"var(--primary-color)"};
  color: ${e=>e.secondary?"var(--primary-color)":"white"};
  border: ${e=>e.secondary?"1px solid var(--primary-color)":"none"};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#f0f0f0":"#3a7bc8"};
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,Ps=ir.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  border: 2px solid ${e=>e.selected?"var(--primary-color)":"transparent"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`,Es=ir.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,Os=ir.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.color||"var(--primary-color)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 20px;
`,Rs=ir.div`
  flex: 1;
`,Ts=ir.h4`
  margin: 0 0 5px;
`,_s=ir.div`
  font-size: 14px;
  color: var(--text-secondary);
`,Ns=ir.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`,Ls=ir.div`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  background-color: ${e=>e.selected?"var(--primary-color)":"white"};
  color: ${e=>e.selected?"white":e.disabled?"#ccc":"var(--text-primary)"};
  border: 1px solid #eee;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  
  &:hover {
    background-color: ${e=>e.disabled?"white":e.selected?"var(--primary-color)":"#f0f0f0"};
  }
`,As=ir.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,zs=ir.div`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  background-color: ${e=>e.selected?"var(--primary-color)":"white"};
  color: ${e=>e.selected?"white":e.disabled?"#ccc":"var(--text-primary)"};
  border: 1px solid #eee;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  
  &:hover {
    background-color: ${e=>e.disabled?"white":e.selected?"var(--primary-color)":"#f0f0f0"};
  }
`,Ds=ir.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,Is=ir.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-right: 10px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
  }
  
  span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + span {
    background-color: var(--primary-color);
  }
  
  input:checked + span:before {
    transform: translateX(26px);
  }
`,Fs=ir.div`
  font-weight: 500;
`;const Ms=function(){const[e,r]=(0,t.useState)("quick"),[n,i]=(0,t.useState)(1),[a,o]=(0,t.useState)(null),[l,s]=(0,t.useState)(null),[c,u]=(0,t.useState)(null),[d,p]=(0,t.useState)(""),[f,h]=(0,t.useState)(""),[g,m]=(0,t.useState)(!1),v=[{id:"cleaning",name:"Regular Cleaning",price:"\u20ac25/hour",color:"var(--cleaning-color)",icon:"\ud83e\uddf9"},{id:"deep-cleaning",name:"Deep Cleaning",price:"\u20ac40/hour",color:"var(--cleaning-color)",icon:"\ud83e\uddfd"},{id:"repair",name:"Home Repair",price:"\u20ac35/hour",color:"var(--repair-color)",icon:"\ud83d\udd27"},{id:"plumbing",name:"Plumbing Service",price:"\u20ac40/hour",color:"var(--plumbing-color)",icon:"\ud83d\udebf"},{id:"elder-care",name:"Elder Care",price:"\u20ac30/hour",color:"var(--elder-care-color)",icon:"\u2764\ufe0f"},{id:"child-care",name:"Child Care",price:"\u20ac28/hour",color:"var(--child-care-color)",icon:"\ud83d\udc76"}],x=e=>e?e.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}):"",b=()=>{const e=(()=>{const e=[],t=new Date;for(let r=0;r<14;r++){const n=new Date(t);n.setDate(t.getDate()+r),e.push(n)}return e})(),t=(()=>{const e=[];for(let t=8;t<=18;t++)e.push(`${t}:00`),t<18&&e.push(`${t}:30`);return e})();return(0,Vn.jsxs)(ms,{children:[(0,Vn.jsx)(vs,{children:"Select Date & Time"}),(0,Vn.jsx)(ys,{children:"Date"}),(0,Vn.jsx)(Ns,{children:e.slice(0,7).map(((e,t)=>(0,Vn.jsxs)(Ls,{selected:l&&e.toDateString()===l.toDateString(),onClick:()=>s(e),children:[(0,Vn.jsx)("div",{children:e.toLocaleDateString("en-US",{weekday:"short"})}),(0,Vn.jsx)("div",{children:e.getDate()})]},t)))}),(0,Vn.jsx)(ys,{children:"Time"}),(0,Vn.jsx)(As,{children:t.map(((e,t)=>(0,Vn.jsx)(zs,{selected:c===e,onClick:()=>u(e),children:e},t)))})]})},y=()=>{var t;return(0,Vn.jsxs)(ms,{children:[(0,Vn.jsx)(vs,{children:"Confirm Booking"}),(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Service:"}),(0,Vn.jsx)(cs,{children:a&&(null===(t=v.find((e=>e.id===a)))||void 0===t?void 0:t.name)})]}),(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Date & Time:"}),(0,Vn.jsxs)(cs,{children:[l&&x(l)," at ",c]})]}),(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Address:"}),(0,Vn.jsxs)(cs,{children:[d.street,", ",d.city," ",d.postalCode]})]}),"advanced"===e&&(0,Vn.jsxs)(Vn.Fragment,{children:[(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Regular Service:"}),(0,Vn.jsx)(cs,{children:g?"Yes":"No"})]}),f&&(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Special Requirements:"}),(0,Vn.jsx)(cs,{children:f})]})]}),(0,Vn.jsxs)(us,{children:[(0,Vn.jsx)("span",{children:"Total Estimate:"}),(0,Vn.jsx)("span",{children:"\u20ac35.00"})]})]})};return(0,Vn.jsxs)(Gl,{children:[(0,Vn.jsxs)(Xl,{children:[(0,Vn.jsx)(Zl,{children:"Book a Service"}),(0,Vn.jsx)(es,{children:"Schedule your service in a few simple steps"})]}),(0,Vn.jsxs)(rs,{children:[(0,Vn.jsx)(ns,{active:"quick"===e,onClick:()=>r("quick"),children:"Quick Booking"}),(0,Vn.jsx)(ns,{active:"advanced"===e,onClick:()=>r("advanced"),children:"Advanced Booking"})]}),(0,Vn.jsxs)(ts,{children:[(0,Vn.jsxs)(is,{children:[(0,Vn.jsx)(ds,{children:(0,Vn.jsxs)(ps,{children:[(0,Vn.jsxs)(fs,{active:1===n,completed:n>1,children:[(0,Vn.jsx)(hs,{active:1===n,completed:n>1,children:"1"}),(0,Vn.jsx)(gs,{active:1===n,completed:n>1,children:"Service"})]}),(0,Vn.jsxs)(fs,{active:2===n,completed:n>2,children:[(0,Vn.jsx)(hs,{active:2===n,completed:n>2,children:"2"}),(0,Vn.jsx)(gs,{active:2===n,completed:n>2,children:"Date & Time"})]}),(0,Vn.jsxs)(fs,{active:3===n,completed:n>3,children:[(0,Vn.jsx)(hs,{active:3===n,completed:n>3,children:"3"}),(0,Vn.jsx)(gs,{active:3===n,completed:n>3,children:"Address"})]}),"advanced"===e?(0,Vn.jsxs)(Vn.Fragment,{children:[(0,Vn.jsxs)(fs,{active:4===n,completed:n>4,children:[(0,Vn.jsx)(hs,{active:4===n,completed:n>4,children:"4"}),(0,Vn.jsx)(gs,{active:4===n,completed:n>4,children:"Options"})]}),(0,Vn.jsxs)(fs,{active:5===n,children:[(0,Vn.jsx)(hs,{active:5===n,children:"5"}),(0,Vn.jsx)(gs,{active:5===n,children:"Confirm"})]})]}):(0,Vn.jsxs)(fs,{active:4===n,children:[(0,Vn.jsx)(hs,{active:4===n,children:"4"}),(0,Vn.jsx)(gs,{active:4===n,children:"Confirm"})]})]})}),(()=>{switch(n){case 1:return(0,Vn.jsxs)(ms,{children:[(0,Vn.jsx)(vs,{children:"Select Service"}),(0,Vn.jsx)("div",{children:v.map((e=>(0,Vn.jsx)(Ps,{selected:a===e.id,onClick:()=>o(e.id),children:(0,Vn.jsxs)(Es,{children:[(0,Vn.jsx)(Os,{color:e.color,children:e.icon}),(0,Vn.jsxs)(Rs,{children:[(0,Vn.jsx)(Ts,{children:e.name}),(0,Vn.jsxs)(_s,{children:["Starting from ",e.price]})]})]})},e.id)))})]});case 2:return b();case 3:return(0,Vn.jsxs)(ms,{children:[(0,Vn.jsx)(vs,{children:"Enter Address"}),(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"Street Address"}),(0,Vn.jsx)(ws,{type:"text",value:d.street||"",onChange:e=>p({...d,street:e.target.value}),placeholder:"Enter street address"})]}),(0,Vn.jsxs)(xs,{children:[(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"City"}),(0,Vn.jsx)(ws,{type:"text",value:d.city||"",onChange:e=>p({...d,city:e.target.value}),placeholder:"Enter city"})]}),(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"Postal Code"}),(0,Vn.jsx)(ws,{type:"text",value:d.postalCode||"",onChange:e=>p({...d,postalCode:e.target.value}),placeholder:"Enter postal code"})]})]}),(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"Additional Instructions"}),(0,Vn.jsx)(js,{value:d.instructions||"",onChange:e=>p({...d,instructions:e.target.value}),placeholder:"Apartment number, access code, etc."})]})]});case 4:return"advanced"===e?(0,Vn.jsxs)(ms,{children:[(0,Vn.jsx)(vs,{children:"Advanced Options"}),(0,Vn.jsxs)(Ds,{children:[(0,Vn.jsxs)(Is,{children:[(0,Vn.jsx)("input",{type:"checkbox",checked:g,onChange:()=>m(!g)}),(0,Vn.jsx)("span",{})]}),(0,Vn.jsx)(Fs,{children:"Schedule as regular service"})]}),g&&(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"Frequency"}),(0,Vn.jsxs)(ks,{children:[(0,Vn.jsx)("option",{value:"weekly",children:"Weekly"}),(0,Vn.jsx)("option",{value:"biweekly",children:"Bi-weekly"}),(0,Vn.jsx)("option",{value:"monthly",children:"Monthly"})]})]}),(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"Special Requirements"}),(0,Vn.jsx)(js,{value:f,onChange:e=>h(e.target.value),placeholder:"Any special requirements or preferences?"})]}),(0,Vn.jsxs)(bs,{children:[(0,Vn.jsx)(ys,{children:"Preferred Service Provider"}),(0,Vn.jsxs)(ks,{children:[(0,Vn.jsx)("option",{value:"",children:"No preference"}),(0,Vn.jsx)("option",{value:"provider1",children:"Maria K. (4.9 \u2605)"}),(0,Vn.jsx)("option",{value:"provider2",children:"John D. (4.8 \u2605)"}),(0,Vn.jsx)("option",{value:"provider3",children:"Anna S. (4.7 \u2605)"})]})]})]}):y();case 5:return y();default:return null}})(),(0,Vn.jsxs)(Ss,{children:[n>1&&(0,Vn.jsx)(Cs,{secondary:!0,onClick:()=>{n>1&&i(n-1)},children:"Back"}),("quick"===e&&n<4||"advanced"===e&&n<5)&&(0,Vn.jsx)(Cs,{onClick:()=>{n<5&&i(n+1)},children:"Next"})]})]}),(()=>{var t;return(0,Vn.jsxs)(as,{children:[(0,Vn.jsx)(os,{children:"Booking Summary"}),a&&(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Service:"}),(0,Vn.jsx)(cs,{children:null===(t=v.find((e=>e.id===a)))||void 0===t?void 0:t.name})]}),l&&(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Date:"}),(0,Vn.jsx)(cs,{children:x(l)})]}),c&&(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Time:"}),(0,Vn.jsx)(cs,{children:c})]}),d.street&&(0,Vn.jsxs)(ls,{children:[(0,Vn.jsx)(ss,{children:"Location:"}),(0,Vn.jsx)(cs,{children:d.city||"Not specified"})]}),4===n&&"quick"===e||5===n?(0,Vn.jsxs)(us,{children:[(0,Vn.jsx)("span",{children:"Total:"}),(0,Vn.jsx)("span",{children:"\u20ac35.00"})]}):null,4===n&&"quick"===e||5===n?(0,Vn.jsx)(Cs,{style:{width:"100%",marginTop:"20px"},children:"Confirm Booking"}):null]})})()]})]})},Us=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,$s=ir.div`
  background-color: #3498db;
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Bs=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,Vs=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,Hs=ir.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ws=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: fit-content;
`,qs=ir.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Ks=ir.li`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ys=ir(Pe)`
  display: block;
  padding: 10px 15px;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    background-color: #f5f5f5;
    color: #3498db;
  }
  
  &.active {
    font-weight: 500;
  }
`,Qs=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,Js=ir.h2`
  margin-bottom: 20px;
  color: #3498db;
`,Gs=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Xs=ir.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`,Zs=ir.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #3498db;
`,ec=ir.div`
  font-size: 14px;
  color: var(--text-secondary);
`,tc=ir.div`
  margin-top: 30px;
`,rc=ir.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,nc=ir.div`
  flex: 1;
`,ic=ir.h3`
  margin-bottom: 5px;
`,ac=ir.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 10px;
`,oc=ir.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: var(--text-secondary);
`,lc=ir.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    margin-top: 15px;
    align-self: flex-end;
  }
`,sc=ir.button`
  padding: 8px 12px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &.edit {
    background-color: #f0f0f0;
    color: var(--text-primary);
    
    &:hover {
      background-color: #e0e0e0;
    }
  }
  
  &.delete {
    background-color: #fff0f0;
    color: #e53935;
    
    &:hover {
      background-color: #ffe0e0;
    }
  }
  
  &:hover {
    background-color: #2980b9;
  }
`;const cc=function(){const{t:e}=$n(),t=[{label:e("provider.clients"),value:"24"},{label:e("provider.services"),value:"5"},{label:e("provider.earnings"),value:"\u20ac1,250"},{label:e("provider.reviews"),value:"4.8/5"}];return(0,Vn.jsxs)(Us,{children:[(0,Vn.jsxs)($s,{children:[(0,Vn.jsx)(Bs,{children:e("provider.portal")}),(0,Vn.jsx)(Vs,{children:"Manage your services, schedule, and client interactions all in one place."})]}),(0,Vn.jsxs)(Hs,{children:[(0,Vn.jsx)(Ws,{children:(0,Vn.jsxs)(qs,{children:[(0,Vn.jsx)(Ks,{children:(0,Vn.jsx)(Ys,{to:"/provider/dashboard",className:"active",children:e("provider.dashboard")})}),(0,Vn.jsx)(Ks,{children:(0,Vn.jsx)(Ys,{to:"/provider/services",children:e("provider.services")})}),(0,Vn.jsx)(Ks,{children:(0,Vn.jsx)(Ys,{to:"/provider/schedule",children:e("provider.schedule")})}),(0,Vn.jsx)(Ks,{children:(0,Vn.jsx)(Ys,{to:"/provider/profile",children:e("provider.editProfile")})})]})}),(0,Vn.jsxs)(Qs,{children:[(0,Vn.jsx)(Js,{children:e("provider.dashboard")}),(0,Vn.jsx)(Gs,{children:t.map(((e,t)=>(0,Vn.jsxs)(Xs,{children:[(0,Vn.jsx)(Zs,{children:e.value}),(0,Vn.jsx)(ec,{children:e.label})]},t)))}),(0,Vn.jsxs)(tc,{children:[(0,Vn.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:(0,Vn.jsx)(Js,{children:e("provider.nearbyRequests","Nearby Service Requests")})}),[{id:1,title:"Home Cleaning",description:"3 Bedroom 2 Living Room Regular Cleaning",price:"\u20ac200",distance:"0.5km",status:"Available",address:"6 Xierqi Middle Road, Haidian District",requestTime:"2024-01-20 14:00"},{id:2,title:"Elder Care",description:"Post-surgery recovery care, professional caregiver needed",price:"\u20ac300/day",distance:"1.2km",status:"Available",address:"Huilongguan East Street, Changping District",requestTime:"2024-01-20 15:30"},{id:3,title:"Child Care",description:"Twin care, experience with twins required",price:"\u20ac250/day",distance:"2.0km",status:"Available",address:"Shangdi East Road, Haidian District",requestTime:"2024-01-20 16:00"}].map((e=>(0,Vn.jsxs)(rc,{children:[(0,Vn.jsxs)(nc,{children:[(0,Vn.jsx)(ic,{children:e.title}),(0,Vn.jsx)(ac,{children:e.description}),(0,Vn.jsxs)(oc,{children:[(0,Vn.jsxs)("span",{children:["Price: ",e.price]}),(0,Vn.jsxs)("span",{children:["Distance: ",e.distance]}),(0,Vn.jsxs)("span",{children:["Address: ",e.address]}),(0,Vn.jsxs)("span",{children:["Posted: ",e.requestTime]}),(0,Vn.jsxs)("span",{children:["Status: ",e.status]})]})]}),(0,Vn.jsx)(lc,{children:(0,Vn.jsx)(sc,{className:"edit",onClick:()=>{window.confirm("Are you sure you want to accept this request?")&&alert("Request accepted successfully!")},children:"Accept"})})]},e.id)))]})]})]})]})},uc=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,dc=ir.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,pc=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,fc=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,hc=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,gc=ir.div`
  margin-bottom: 30px;
`,mc=ir.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`,vc=ir.div`
  margin-bottom: 20px;
`,xc=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,bc=ir.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,yc=ir.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,wc=ir.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,kc=ir.button`
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-2px);
  }
`,jc=()=>{const e=ee(),[r,n]=(0,t.useState)({serviceType:"",title:"",description:"",price:"",location:"",availability:"",experience:"",images:[]}),i=e=>{const{name:t,value:i}=e.target;n({...r,[t]:i})};return(0,Vn.jsxs)(uc,{children:[(0,Vn.jsxs)(dc,{children:[(0,Vn.jsx)(pc,{children:"Post a Service"}),(0,Vn.jsx)(fc,{children:"Describe your service in detail, upload relevant images, and attract more clients."})]}),(0,Vn.jsx)(hc,{children:(0,Vn.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Submitting service details:",r),alert("Service successfully posted!"),e("/provider/portal")},children:[(0,Vn.jsxs)(gc,{children:[(0,Vn.jsx)(mc,{children:"Basic Information"}),(0,Vn.jsxs)(vc,{children:[(0,Vn.jsx)(xc,{children:"Service Type"}),(0,Vn.jsxs)(wc,{name:"serviceType",value:r.serviceType,onChange:i,required:!0,children:[(0,Vn.jsx)("option",{value:"",children:"Select a service type"}),(0,Vn.jsx)("option",{value:"cleaning",children:"Cleaning"}),(0,Vn.jsx)("option",{value:"repair",children:"Repair"}),(0,Vn.jsx)("option",{value:"plumbing",children:"Plumbing"}),(0,Vn.jsx)("option",{value:"elderCare",children:"Elderly Care"}),(0,Vn.jsx)("option",{value:"childCare",children:"Child Care"}),(0,Vn.jsx)("option",{value:"other",children:"Other"})]})]}),(0,Vn.jsxs)(vc,{children:[(0,Vn.jsx)(xc,{children:"Service Title"}),(0,Vn.jsx)(bc,{type:"text",name:"title",value:r.title,onChange:i,placeholder:"Briefly describe your service, e.g., Professional Home Cleaning",required:!0})]}),(0,Vn.jsxs)(vc,{children:[(0,Vn.jsx)(xc,{children:"Service Description"}),(0,Vn.jsx)(yc,{name:"description",value:r.description,onChange:i,placeholder:"Describe your service, unique features, and advantages",required:!0})]})]}),(0,Vn.jsxs)(gc,{children:[(0,Vn.jsx)(mc,{children:"Service Details"}),(0,Vn.jsxs)(vc,{children:[(0,Vn.jsx)(xc,{children:"Price"}),(0,Vn.jsx)(bc,{type:"text",name:"price",value:r.price,onChange:i,placeholder:"Price, e.g., $50/hour or $200 per session",required:!0})]}),(0,Vn.jsxs)(vc,{children:[(0,Vn.jsx)(xc,{children:"Location"}),(0,Vn.jsx)(bc,{type:"text",name:"location",value:r.location,onChange:i,placeholder:"Serviceable locations",required:!0})]})]}),(0,Vn.jsxs)(gc,{children:[(0,Vn.jsx)(mc,{children:"Upload Images"}),(0,Vn.jsx)(Ii,{onChange:e=>{n({...r,images:e})},maxImages:5,label:"Upload service-related images"})]}),(0,Vn.jsx)(kc,{type:"submit",children:"Post Service"})]})})]})},Sc=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Cc=ir.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Pc=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,Ec=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,Oc=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`,Rc=ir.div`
  margin-bottom: 20px;
`,Tc=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,_c=ir.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Nc=()=>{const e=ee(),{t:t}=$n();return(0,Vn.jsxs)(Sc,{children:[(0,Vn.jsxs)(Cc,{children:[(0,Vn.jsx)(Pc,{children:t("serviceRequest.title")}),(0,Vn.jsx)(Ec,{children:t("serviceRequest.description")})]}),(0,Vn.jsx)(Oc,{children:(0,Vn.jsxs)(Rc,{children:[(0,Vn.jsx)(Tc,{children:t("serviceRequest.serviceType")}),(0,Vn.jsxs)(_c,{name:"serviceType",onChange:t=>{const{value:r}=t.target;switch(r){case"cleaning":e("/services/cleaning");break;case"repair":e("/services/repair");break;case"plumbing":e("/services/plumbing");break;case"elderCare":e("/services/elder-care");break;case"childCare":e("/services/child-care")}},defaultValue:"",required:!0,children:[(0,Vn.jsx)("option",{value:"",children:t("serviceRequest.selectType")}),(0,Vn.jsx)("option",{value:"cleaning",children:t("nav.cleaning")}),(0,Vn.jsx)("option",{value:"repair",children:t("nav.repair")}),(0,Vn.jsx)("option",{value:"plumbing",children:t("nav.plumbing")}),(0,Vn.jsx)("option",{value:"elderCare",children:t("nav.elderCare")}),(0,Vn.jsx)("option",{value:"childCare",children:t("nav.childCare")})]})]})})]})},Lc=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Ac=ir.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,zc=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,Dc=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,Ic=ir.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fc=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: fit-content;
`,Mc=ir.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Uc=ir.li`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,$c=ir.a`
  display: block;
  padding: 10px 15px;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    background-color: #f5f5f5;
    color: var(--primary-color);
  }
  
  &.active {
    font-weight: 500;
  }
`,Bc=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,Vc=ir.h2`
  margin-bottom: 20px;
  color: var(--primary-color);
`,Hc=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Wc=ir.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`,qc=ir.div`
  font-size: 28px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 5px;
`,Kc=ir.div`
  font-size: 14px;
  color: var(--text-secondary);
`,Yc=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Qc=ir.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
`,Jc=ir.div`
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-right: 15px;
`,Gc=ir.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Xc=ir.div`
  font-weight: 500;
  margin-bottom: 5px;
`,Zc=ir.div`
  font-size: 14px;
  color: ${e=>"completed"===e.status?"green":"scheduled"===e.status?"orange":"var(--text-secondary)"};
`,eu=ir.button`
  padding: 6px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;const tu=function(){const{t:e}=$n(),[r,n]=(0,t.useState)(!1),[i,a]=(0,t.useState)(null),[o,l]=(0,t.useState)(""),s=e=>{a(e),n(!0)};return(0,Vn.jsxs)(Lc,{children:[(0,Vn.jsxs)(Ac,{children:[(0,Vn.jsx)(zc,{children:e("client.dashboard")}),(0,Vn.jsx)(Dc,{children:e("client.dashboardDesc","Manage your service requests and bookings")})]}),(0,Vn.jsxs)(Ic,{children:[(0,Vn.jsx)(Fc,{children:(0,Vn.jsxs)(Mc,{children:[(0,Vn.jsx)(Uc,{children:(0,Vn.jsx)($c,{href:"#",className:"active",children:e("client.dashboard")})}),(0,Vn.jsx)(Uc,{children:(0,Vn.jsx)($c,{href:"#",children:e("client.bookings")})}),(0,Vn.jsx)(Uc,{children:(0,Vn.jsx)($c,{href:"#",children:e("client.services")})}),(0,Vn.jsx)(Uc,{children:(0,Vn.jsx)($c,{href:"#",children:e("client.messages")})}),(0,Vn.jsx)(Uc,{children:(0,Vn.jsx)($c,{href:"#",children:e("client.payments")})}),(0,Vn.jsx)(Uc,{children:(0,Vn.jsx)($c,{href:"#",children:e("client.profile")})})]})}),(0,Vn.jsxs)(Bc,{children:[(0,Vn.jsx)(Vc,{children:e("client.dashboard")}),(0,Vn.jsxs)(Hc,{children:[(0,Vn.jsxs)(Wc,{children:[(0,Vn.jsx)(qc,{children:"3"}),(0,Vn.jsx)(Kc,{children:e("client.activeBookings")})]}),(0,Vn.jsxs)(Wc,{children:[(0,Vn.jsx)(qc,{children:"12"}),(0,Vn.jsx)(Kc,{children:e("client.completedServices")})]}),(0,Vn.jsxs)(Wc,{children:[(0,Vn.jsx)(qc,{children:"2"}),(0,Vn.jsx)(Kc,{children:e("client.pendingRequests")})]})]}),(0,Vn.jsx)(Vc,{children:e("client.recentServices")}),(0,Vn.jsxs)(Yc,{children:[(0,Vn.jsxs)(Qc,{children:[(0,Vn.jsx)(Jc,{children:"\ud83e\uddf9"}),(0,Vn.jsxs)(Gc,{children:[(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(Xc,{children:e("services.cleaning")}),(0,Vn.jsxs)(Zc,{status:"scheduled",children:[e("client.scheduled"),": 2023-06-15"]})]}),(0,Vn.jsx)(eu,{onClick:()=>s({type:"cleaning",date:"2023-06-15"}),children:e("Cancel")})]})]}),(0,Vn.jsxs)(Qc,{children:[(0,Vn.jsx)(Jc,{children:"\ud83d\udd27"}),(0,Vn.jsxs)(Gc,{children:[(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(Xc,{children:e("services.repair")}),(0,Vn.jsxs)(Zc,{status:"completed",children:[e("client.completed"),": 2023-06-10"]})]}),(0,Vn.jsx)(eu,{onClick:()=>s({type:"repair",date:"2023-06-10"}),disabled:!0,children:e("Cancel")})]})]}),(0,Vn.jsxs)(Qc,{children:[(0,Vn.jsx)(Jc,{children:"\ud83d\udc75"}),(0,Vn.jsxs)(Gc,{children:[(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(Xc,{children:e("services.elderCare")}),(0,Vn.jsx)(Zc,{status:"pending",children:e("client.pending")})]}),(0,Vn.jsx)(eu,{onClick:()=>s({type:"elderCare",status:"pending"}),disabled:!1,children:e("Cancel")})]})]})]})]})]}),r&&(0,Vn.jsx)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:(0,Vn.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"8px",width:"400px"},children:[(0,Vn.jsx)("h3",{style:{marginBottom:"20px"},children:e("Client Cancel Service")}),(0,Vn.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,Vn.jsxs)("label",{style:{display:"block",marginBottom:"8px"},children:[e("Reason"),":"]}),(0,Vn.jsx)("textarea",{value:o,onChange:e=>l(e.target.value),style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ddd",minHeight:"100px"}})]}),(0,Vn.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,Vn.jsx)("button",{onClick:()=>{n(!1),l(""),a(null)},style:{padding:"8px 16px",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:"white",cursor:"pointer"},children:e("Cancel")}),(0,Vn.jsx)("button",{onClick:async()=>{i&&o&&(console.log("\u53d6\u6d88\u670d\u52a1:",i,"\u539f\u56e0:",o),n(!1),l(""),a(null))},disabled:!o,style:{padding:"8px 16px",backgroundColor:o?"#f44336":"#ccc",color:"white",border:"none",borderRadius:"4px",cursor:o?"pointer":"not-allowed"},children:e("Confirm")})]})]})})]})},ru=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,nu=ir.div`
  background-color: #3498db;
  color: white;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,iu=ir.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  flex-shrink: 0;
  overflow: hidden;
  border: 4px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,au=ir.div`
  flex: 1;
`,ou=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,lu=ir.h2`
  font-size: 20px;
  margin-bottom: 15px;
  opacity: 0.9;
`,su=ir.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  opacity: 0.9;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,cu=ir.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,uu=ir.h3`
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
`,du=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,pu=ir.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`,fu=ir.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-primary);
`,hu=ir.div`
  font-size: 16px;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 10px;
`,gu=ir.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,mu=ir.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`,vu=ir.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,xu=ir.div`
  font-weight: 500;
`,bu=ir.div`
  color: var(--text-secondary);
  font-size: 14px;
`,yu=ir.p`
  color: var(--text-primary);
  line-height: 1.6;
`,wu=ir.div`
  color: #f1c40f;
  font-size: 18px;
  margin-bottom: 5px;
`;const ku=function(){const{t:e}=$n(),t={name:"Sarah Johnson",title:"Professional Caregiver",image:"https://example.com/profile.jpg",rating:4.8,experience:"5 years",completedJobs:128,services:[{title:"Elder Care",price:"\u20ac25/hour",description:"Professional elderly care with medical background"},{title:"Disability Support",price:"\u20ac30/hour",description:"Specialized care for people with disabilities"},{title:"Post-surgery Care",price:"\u20ac35/hour",description:"Recovery assistance and medical monitoring"}],reviews:[{author:"Michael Brown",date:"2024-01-15",rating:5,content:"Sarah was amazing with my mother. Very professional and caring."},{author:"Emma Wilson",date:"2024-01-10",rating:4.5,content:"Great service, very punctual and attentive to details."}]};return(0,Vn.jsxs)(ru,{children:[(0,Vn.jsxs)(nu,{children:[(0,Vn.jsx)(iu,{children:(0,Vn.jsx)("img",{src:t.image,alt:t.name})}),(0,Vn.jsxs)(au,{children:[(0,Vn.jsx)(ou,{children:t.name}),(0,Vn.jsx)(lu,{children:t.title}),(0,Vn.jsxs)(su,{children:[(0,Vn.jsxs)("span",{children:["\u2b50 ",t.rating," Rating"]}),(0,Vn.jsxs)("span",{children:["\ud83d\udcc5 ",t.experience," Experience"]}),(0,Vn.jsxs)("span",{children:["\u2705 ",t.completedJobs," Jobs Completed"]})]})]})]}),(0,Vn.jsxs)(cu,{children:[(0,Vn.jsx)(uu,{children:e("provider.services")}),(0,Vn.jsx)(du,{children:t.services.map(((e,t)=>(0,Vn.jsxs)(pu,{children:[(0,Vn.jsx)(fu,{children:e.title}),(0,Vn.jsx)(hu,{children:e.price}),(0,Vn.jsx)("div",{children:e.description})]},t)))})]}),(0,Vn.jsxs)(cu,{children:[(0,Vn.jsx)(uu,{children:e("provider.reviews")}),(0,Vn.jsx)(gu,{children:t.reviews.map(((e,t)=>(0,Vn.jsxs)(mu,{children:[(0,Vn.jsxs)(vu,{children:[(0,Vn.jsx)(xu,{children:e.author}),(0,Vn.jsx)(bu,{children:e.date})]}),(0,Vn.jsxs)(wu,{children:["\u2605".repeat(Math.floor(e.rating)),e.rating%1!==0&&"\xbd","\u2606".repeat(5-Math.ceil(e.rating))]}),(0,Vn.jsx)(yu,{children:e.content})]},t)))})]})]})},ju=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`,Su=ir.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`,Cu=ir.h1`
  font-size: 32px;
  margin-bottom: 10px;
`,Pu=ir.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`,Eu=ir.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ou=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,Ru=ir.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 20px;
  height: fit-content;
`,Tu=ir.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`,_u=ir.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,Nu=ir.span`
  color: var(--text-secondary);
`,Lu=ir.span`
  font-weight: 500;
`,Au=ir.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`,zu=ir.div`
  margin-bottom: 30px;
`,Du=ir.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`,Iu=ir.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`,Fu=ir.div`
  border: 2px solid ${e=>e.selected?"var(--primary-color)":"#ddd"};
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
  }
`,Mu=ir.div`
  font-size: 24px;
  margin-bottom: 10px;
`,Uu=ir.div`
  font-weight: 500;
`,$u=ir.form`
  margin-top: 30px;
`,Bu=ir.div`
  margin-bottom: 20px;
`,Vu=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Hu=ir.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Wu=ir.button`
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 20px;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-2px);
  }
`;const qu=function(){const e=ee(),[r,n]=(0,t.useState)("credit_card"),[i,a]=(0,t.useState)(""),[o,l]=(0,t.useState)(""),[s,c]=(0,t.useState)(""),[u,d]=(0,t.useState)(""),p=e=>{n(e)},f=t=>{t.preventDefault(),console.log("Processing payment with:",{method:r,cardDetails:{number:i,expiry:o,cvv:s,holder:u}}),setTimeout((()=>{alert("\u652f\u4ed8\u6210\u529f\uff01"),e("/client/dashboard")}),1500)};return(0,Vn.jsxs)(ju,{children:[(0,Vn.jsxs)(Su,{children:[(0,Vn.jsx)(Cu,{children:"Payment"}),(0,Vn.jsx)(Pu,{children:"Please select a payment method to complete your order"})]}),(0,Vn.jsxs)(Eu,{children:[(0,Vn.jsxs)(Ou,{children:[(0,Vn.jsxs)(zu,{children:[(0,Vn.jsx)(Du,{children:"Select Payment Method"}),(0,Vn.jsxs)(Iu,{children:[(0,Vn.jsxs)(Fu,{selected:"credit_card"===r,onClick:()=>p("credit_card"),children:[(0,Vn.jsx)(Mu,{children:"\ud83d\udcb3"}),(0,Vn.jsx)(Uu,{children:"Credit Card"})]}),(0,Vn.jsxs)(Fu,{selected:"paypal"===r,onClick:()=>p("paypal"),children:[(0,Vn.jsx)(Mu,{children:"\ud83c\udf10"}),(0,Vn.jsx)(Uu,{children:"PayPal"})]}),(0,Vn.jsxs)(Fu,{selected:"swedbank"===r,onClick:()=>p("swedbank"),children:[(0,Vn.jsx)(Mu,{children:"\ud83c\udfe6"}),(0,Vn.jsx)(Uu,{children:"Swedbank"})]}),(0,Vn.jsxs)(Fu,{selected:"seb"===r,onClick:()=>p("seb"),children:[(0,Vn.jsx)(Mu,{children:"\ud83c\udfe6"}),(0,Vn.jsx)(Uu,{children:"SEB Bank"})]})]})]}),"credit_card"===r&&(0,Vn.jsxs)($u,{onSubmit:f,children:[(0,Vn.jsxs)(Bu,{children:[(0,Vn.jsx)(Vu,{children:"Cardholder Name"}),(0,Vn.jsx)(Hu,{type:"text",value:u,onChange:e=>d(e.target.value),required:!0})]}),(0,Vn.jsxs)(Bu,{children:[(0,Vn.jsx)(Vu,{children:"Card Number"}),(0,Vn.jsx)(Hu,{type:"text",value:i,onChange:e=>a(e.target.value),placeholder:"**** **** **** ****",required:!0})]}),(0,Vn.jsxs)(Bu,{children:[(0,Vn.jsx)(Vu,{children:"Expiry Date"}),(0,Vn.jsx)(Hu,{type:"text",value:o,onChange:e=>l(e.target.value),placeholder:"MM/YY",required:!0})]}),(0,Vn.jsxs)(Bu,{children:[(0,Vn.jsx)(Vu,{children:"CVV"}),(0,Vn.jsx)(Hu,{type:"text",value:s,onChange:e=>c(e.target.value),placeholder:"***",required:!0})]}),(0,Vn.jsx)(Wu,{type:"submit",children:"Confirm Payment"})]}),("paypal"===r||"swedbank"===r||"seb"===r)&&(0,Vn.jsxs)("div",{style:{textAlign:"center",marginTop:"30px"},children:[(0,Vn.jsx)("div",{style:{marginBottom:"20px"},children:"You will be redirected to the selected payment service"}),(0,Vn.jsx)(Wu,{onClick:f,children:"Proceed to Payment"})]})]}),(0,Vn.jsxs)(Ru,{children:[(0,Vn.jsx)(Tu,{children:"Order Summary"}),(0,Vn.jsxs)(_u,{children:[(0,Vn.jsx)(Nu,{children:"Service Type"}),(0,Vn.jsx)(Lu,{children:"House Cleaning"})]}),(0,Vn.jsxs)(_u,{children:[(0,Vn.jsx)(Nu,{children:"Duration"}),(0,Vn.jsx)(Lu,{children:"2 hours"})]}),(0,Vn.jsxs)(_u,{children:[(0,Vn.jsx)(Nu,{children:"Service Fee"}),(0,Vn.jsx)(Lu,{children:"\u20ac20.00"})]}),(0,Vn.jsxs)(_u,{children:[(0,Vn.jsx)(Nu,{children:"Platform Fee"}),(0,Vn.jsx)(Lu,{children:"\u20ac2.00"})]}),(0,Vn.jsxs)(Au,{children:[(0,Vn.jsx)("span",{children:"Total"}),(0,Vn.jsx)("span",{children:"\u20ac22.00"})]})]})]})]})},Ku=ir.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Yu=ir.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
`,Qu=ir.form`
  display: flex;
  flex-direction: column;
`,Ju=ir.div`
  margin-bottom: 20px;
`,Gu=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Xu=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Zu=ir.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`,ed=ir.a`
  text-align: right;
  display: block;
  margin-bottom: 20px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: var(--primary-color);
  }
`,td=ir.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`,rd=ir.div`
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: var(--text-secondary);
`,nd=ir.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;const id=function(){const{t:e}=$n(),r=ee(),[n,i]=(0,t.useState)(""),[a,o]=(0,t.useState)("");return(0,Vn.jsxs)(Ku,{children:[(0,Vn.jsx)(Yu,{children:e("auth.login")}),(0,Vn.jsxs)(Qu,{onSubmit:e=>{e.preventDefault(),console.log("Login attempt with:",{email:n,password:a});const t=!0,i=n.includes("provider")?"provider":"client";t&&r("provider"===i?"/provider/home":"/client/home")},children:[(0,Vn.jsxs)(Ju,{children:[(0,Vn.jsx)(Gu,{children:e("auth.email")}),(0,Vn.jsx)(Xu,{type:"email",value:n,onChange:e=>i(e.target.value),required:!0})]}),(0,Vn.jsxs)(Ju,{children:[(0,Vn.jsx)(Gu,{children:e("auth.password")}),(0,Vn.jsx)(Xu,{type:"password",value:a,onChange:e=>o(e.target.value),required:!0})]}),(0,Vn.jsx)(ed,{href:"#",children:e("auth.forgotPassword")}),(0,Vn.jsx)(Zu,{type:"submit",children:e("auth.signIn")})]}),(0,Vn.jsxs)(td,{children:[e("auth.noAccount"),(0,Vn.jsx)(nd,{href:"/register",children:e("auth.signUp")})]}),(0,Vn.jsxs)(rd,{children:[e("auth.iAmClient"),(0,Vn.jsx)(nd,{href:"/client/login",children:e("auth.clientLogin")}),(0,Vn.jsx)("br",{}),e("auth.iAmProvider"),(0,Vn.jsx)(nd,{href:"/provider/login",children:e("auth.providerLogin")})]})]})},ad=ir.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,od=ir.h2`
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-color);
`,ld=ir.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`,sd=ir(Pe)`
  flex: 1;
  padding: 25px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &.client {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
  }
  
  &.provider {
    border: 2px solid var(--provider-color, #4caf50);
    color: var(--provider-color, #4caf50);
    
    &:hover {
      background-color: var(--provider-color, #4caf50);
      color: var(--text-light);
    }
  }
`,cd=ir.div`
  font-size: 40px;
  margin-bottom: 15px;
`,ud=ir.div`
  font-size: 18px;
  font-weight: 500;
`,dd=ir.div`
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.8;
`,pd=ir.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: var(--text-secondary);
`,fd=ir(Pe)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;const hd=function(){const{t:e}=$n();return(0,Vn.jsxs)(ad,{children:[(0,Vn.jsx)(od,{children:e("auth.selectUserType")}),(0,Vn.jsxs)(ld,{children:[(0,Vn.jsxs)(sd,{to:"/client/register",className:"client",children:[(0,Vn.jsx)(cd,{children:"\ud83d\udc64"}),(0,Vn.jsx)(ud,{children:e("auth.clientType")}),(0,Vn.jsx)(dd,{children:e("auth.clientTypeDesc")})]}),(0,Vn.jsxs)(sd,{to:"/provider/register",className:"provider",children:[(0,Vn.jsx)(cd,{children:"\ud83d\udee0\ufe0f"}),(0,Vn.jsx)(ud,{children:e("auth.providerType")}),(0,Vn.jsx)(dd,{children:e("auth.providerTypeDesc")})]})]}),(0,Vn.jsxs)(pd,{children:[e("auth.haveAccount"),(0,Vn.jsx)(fd,{to:"/client/login",children:e("auth.signIn")})]})]})},gd=ir.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,md=ir.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
`;const vd=function(){const{t:e}=$n();return(0,Vn.jsxs)(gd,{children:[(0,Vn.jsx)(md,{children:e("auth.register")}),(0,Vn.jsx)(hd,{})]})},xd=ir.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,bd=ir.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
`,yd=ir.form`
  display: flex;
  flex-direction: column;
`,wd=ir.div`
  margin-bottom: 20px;
`,kd=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,jd=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`,Sd=ir.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`,Cd=ir.a`
  text-align: right;
  display: block;
  margin-bottom: 20px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: var(--primary-color);
  }
`,Pd=ir.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`,Ed=ir(Pe)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`,Od=ir.div`
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: var(--text-secondary);
`;const Rd=function(){const{t:e}=$n(),r=ee(),[n,i]=(0,t.useState)(""),[a,o]=(0,t.useState)("");return(0,Vn.jsxs)(xd,{children:[(0,Vn.jsx)(bd,{children:e("auth.clientLogin")}),(0,Vn.jsxs)(yd,{onSubmit:e=>{e.preventDefault(),console.log("Client login attempt with:",{email:n,password:a});r("/client/dashboard")},children:[(0,Vn.jsxs)(wd,{children:[(0,Vn.jsx)(kd,{children:e("auth.email")}),(0,Vn.jsx)(jd,{type:"email",value:n,onChange:e=>i(e.target.value),required:!0})]}),(0,Vn.jsxs)(wd,{children:[(0,Vn.jsx)(kd,{children:e("auth.password")}),(0,Vn.jsx)(jd,{type:"password",value:a,onChange:e=>o(e.target.value),required:!0})]}),(0,Vn.jsx)(Cd,{href:"#",children:e("auth.forgotPassword")}),(0,Vn.jsx)(Sd,{type:"submit",children:e("auth.signIn")})]}),(0,Vn.jsxs)(Pd,{children:[e("auth.noAccount"),(0,Vn.jsx)(Ed,{to:"/client/register",children:e("auth.signUp")})]}),(0,Vn.jsxs)(Od,{children:[e("auth.areYouProvider"),(0,Vn.jsx)(Ed,{to:"/provider/login",children:e("auth.providerLogin")})]})]})},Td=ir.div`
  width: 100%;
`,_d=ir.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #e0e0e0;
    transform: translateY(-50%);
    z-index: 1;
  }
`,Nd=ir.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`,Ld=ir.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${e=>e.active||e.completed?"var(--primary-color)":"#e0e0e0"};
  color: ${e=>e.active||e.completed?"white":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  
  ${e=>e.providerColor&&(e.active||e.completed)&&"\n    background-color: var(--provider-color, #4caf50);\n  "}
`,Ad=ir.div`
  font-size: 12px;
  color: ${e=>e.active?"var(--primary-color)":"var(--text-secondary)"};
  text-align: center;
  max-width: 80px;
  
  ${e=>e.providerColor&&e.active&&"\n    color: var(--provider-color, #4caf50);\n  "}
`,zd=ir.div`
  margin-top: 20px;
`,Dd=ir.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`,Id=ir.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.back {
    background-color: transparent;
    border: 1px solid var(--text-secondary);
    color: var(--text-secondary);
    
    &:hover {
      background-color: #f5f5f5;
    }
  }
  
  &.next, &.submit {
    background-color: ${e=>e.providerColor?"var(--provider-color, #4caf50)":"var(--primary-color)"};
    color: white;
    border: none;
    
    &:hover {
      opacity: 0.9;
    }
    
    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;const Fd=function(e){var r,n,i,a;let{steps:o,onComplete:l,isProvider:s=!1}=e;const{t:c}=$n(),[u,d]=(0,t.useState)(0),[p,f]=(0,t.useState)({}),h=u===o.length-1;return(0,Vn.jsxs)(Td,{children:[(0,Vn.jsx)(_d,{children:o.map(((e,t)=>(0,Vn.jsxs)(Nd,{children:[(0,Vn.jsx)(Ld,{active:t===u,completed:t<u,providerColor:s,children:t<u?"\u2713":t+1}),(0,Vn.jsx)(Ad,{active:t===u,providerColor:s,children:e.label})]},t)))}),(0,Vn.jsx)(zd,{children:o[u].content(p,(e=>{f((t=>({...t,...e})))}))}),(0,Vn.jsxs)(Dd,{children:[u>0&&(0,Vn.jsx)(Id,{className:"back",onClick:()=>{u>0&&d(u-1)},children:c("registration.back")}),h?(0,Vn.jsx)(Id,{className:"submit",onClick:()=>{l&&l(p)},providerColor:s,disabled:!(null!==(i=(a=o[u]).isValid)&&void 0!==i&&i.call(a,p)),children:c("registration.submit")}):(0,Vn.jsx)(Id,{className:"next",onClick:()=>{u<o.length-1&&d(u+1)},providerColor:s,disabled:!(null!==(r=(n=o[u]).isValid)&&void 0!==r&&r.call(n,p)),children:c("registration.next")})]})]})},Md=ir.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Ud=ir.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
`,$d=ir.form`
  display: flex;
  flex-direction: column;
`,Bd=ir.div`
  margin-bottom: 20px;
`,Vd=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,Hd=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 16px;
  color: var(--text-dark);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: rgba(46, 125, 50, 0.05);
  }
`,Wd=ir.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`,qd=ir(Pe)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`,Kd=ir.div`
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: var(--text-secondary);
`;const Yd=function(){const{t:e}=$n(),t=ee(),r=[{label:e("registration.steps.basicInfo"),content:(t,r)=>(0,Vn.jsxs)($d,{children:[(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("auth.name")}),(0,Vn.jsx)(Hd,{type:"text",value:t.name||"",onChange:e=>r({name:e.target.value}),required:!0})]}),(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("auth.email")}),(0,Vn.jsx)(Hd,{type:"email",value:t.email||"",onChange:e=>r({email:e.target.value}),required:!0})]}),(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("auth.password")}),(0,Vn.jsx)(Hd,{type:"password",value:t.password||"",onChange:e=>r({password:e.target.value}),required:!0})]}),(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("auth.confirmPassword")}),(0,Vn.jsx)(Hd,{type:"password",value:t.confirmPassword||"",onChange:e=>r({confirmPassword:e.target.value}),required:!0})]})]}),isValid:e=>e.name&&e.email&&e.password&&e.confirmPassword&&e.password===e.confirmPassword},{label:e("registration.steps.verification"),content:(t,r)=>(0,Vn.jsx)($d,{children:(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("registration.verifyEmail")}),(0,Vn.jsx)("p",{children:e("registration.verificationCodeSent",{target:t.email})}),(0,Vn.jsx)(Hd,{type:"text",placeholder:e("registration.enterVerificationCode"),value:t.emailCode||"",onChange:e=>r({emailCode:e.target.value}),required:!0})]})}),isValid:e=>e.emailCode},{label:e("registration.steps.complete"),content:(t,r)=>(0,Vn.jsxs)($d,{children:[(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("registration.address")}),(0,Vn.jsx)(Hd,{type:"text",value:t.address||"",onChange:e=>r({address:e.target.value}),required:!0})]}),(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("registration.city")}),(0,Vn.jsx)(Hd,{type:"text",value:t.city||"",onChange:e=>r({city:e.target.value}),required:!0})]}),(0,Vn.jsxs)(Bd,{children:[(0,Vn.jsx)(Vd,{children:e("registration.zipCode")}),(0,Vn.jsx)(Hd,{type:"text",value:t.zipCode||"",onChange:e=>r({zipCode:e.target.value}),required:!0})]})]}),isValid:e=>e.address&&e.city&&e.zipCode}];return(0,Vn.jsxs)(Md,{children:[(0,Vn.jsx)(Ud,{children:e("auth.clientRegister")}),(0,Vn.jsx)(Fd,{steps:r,onComplete:e=>{console.log("Client registration complete with:",e),t("/client/register-success")},isProvider:!1}),(0,Vn.jsxs)(Wd,{children:[e("auth.haveAccount"),(0,Vn.jsx)(qd,{to:"/client/login",children:e("auth.signIn")})]}),(0,Vn.jsxs)(Kd,{children:[e("auth.areYouProvider"),(0,Vn.jsx)(qd,{to:"/provider/register",children:e("auth.providerRegister")})]})]})},Qd=ir.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--provider-color, #4caf50);
`,Jd=ir.div`
  color: #f44336;
  background-color: #ffebee;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`,Gd=ir.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--provider-color, #4caf50);
`,Xd=ir.form`
  display: flex;
  flex-direction: column;
`,Zd=ir.div`
  margin-bottom: 20px;
`,ep=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,tp=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--provider-color, #4caf50);
  }
`,rp=ir.button`
  background-color: var(--provider-color, #4caf50);
  color: #ffffff;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3d8b3d;
  }
`,np=ir.a`
  text-align: right;
  display: block;
  margin-bottom: 20px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: var(--provider-color, #4caf50);
  }
`,ip=ir.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`,ap=ir(Pe)`
  color: var(--provider-color, #4caf50);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`,op=ir.div`
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: var(--text-secondary);
`;const lp=function(){const{t:e}=$n(),r=ee(),[n,i]=(0,t.useState)(""),[a,o]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1);return(0,Vn.jsxs)(Qd,{children:[(0,Vn.jsx)(Gd,{children:e("auth.providerLogin")}),l&&(0,Vn.jsx)(Jd,{children:l}),(0,Vn.jsxs)(Xd,{onSubmit:async t=>{t.preventDefault(),s(""),u(!0),await new Promise((e=>setTimeout(e,1e3)));try{const t={success:!0,userId:"12345",token:"mock-token-12345",message:"\u767b\u5f55\u6210\u529f"};t.success?(localStorage.setItem("userInfo",JSON.stringify({id:t.userId,email:n,userType:"provider",token:t.token})),r("/provider/portal")):s(t.message||e("auth.loginFailed"))}catch(l){console.error("Login error:",l),s(e("auth.loginError"))}finally{u(!1)}},children:[(0,Vn.jsxs)(Zd,{children:[(0,Vn.jsx)(ep,{children:e("auth.email")}),(0,Vn.jsx)(tp,{type:"email",value:n,onChange:e=>i(e.target.value),required:!0})]}),(0,Vn.jsxs)(Zd,{children:[(0,Vn.jsx)(ep,{children:e("auth.password")}),(0,Vn.jsx)(tp,{type:"password",value:a,onChange:e=>o(e.target.value),required:!0})]}),(0,Vn.jsx)(np,{href:"#",children:e("auth.forgotPassword")}),(0,Vn.jsx)(rp,{type:"submit",disabled:c,children:e(c?"auth.signingIn":"auth.signIn")})]}),(0,Vn.jsxs)(ip,{children:[e("auth.noAccount"),(0,Vn.jsx)(ap,{to:"/provider/register",children:e("auth.signUp")})]}),(0,Vn.jsxs)(op,{children:[e("auth.areYouClient"),(0,Vn.jsx)(ap,{to:"/client/login",children:e("auth.clientLogin")})]})]})},sp=ir.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--provider-color, #4caf50);
`,cp=ir.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--provider-color, #4caf50);
`,up=ir.form`
  display: flex;
  flex-direction: column;
`,dp=ir.div`
  margin-bottom: 20px;
`,pp=ir.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,fp=ir.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 16px;
  color: var(--text-dark);
  
  &:focus {
    outline: none;
    border-color: var(--provider-color, #4caf50);
    background-color: rgba(46, 125, 50, 0.05);
  }
`,hp=ir.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`,gp=ir(Pe)`
  color: var(--provider-color, #4caf50);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`,mp=ir.div`
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: var(--text-secondary);
`,vp=ir.select`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 16px;
  color: var(--text-dark);
  
  &:focus {
    outline: none;
    border-color: var(--provider-color, #4caf50);
    background-color: rgba(46, 125, 50, 0.05);
  }
`,xp=ir.div`
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--provider-color, #4caf50);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
`,bp=(ir.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`,ir.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ir.div`
  font-weight: 500;
  margin-bottom: 10px;
`);ir.div`
  padding: 8px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 12px;
  
  background-color: ${e=>e.selected?"var(--provider-color, #4caf50)":"#f0f0f0"};
  color: ${e=>e.selected?"white":"var(--text-dark)"};
  
  &:hover {
    background-color: ${e=>e.selected?"var(--provider-color, #4caf50)":"#e0e0e0"};
  }
`;const yp=function(){const{t:e}=$n(),t=ee(),r=[{label:e("registration.steps.basicInfo"),content:(t,r)=>(0,Vn.jsxs)(up,{children:[(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("auth.name")}),(0,Vn.jsx)(fp,{type:"text",value:t.name||"",onChange:e=>r({name:e.target.value}),required:!0})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("auth.email")}),(0,Vn.jsx)(fp,{type:"email",value:t.email||"",onChange:e=>r({email:e.target.value}),required:!0})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("auth.phoneNumber")}),(0,Vn.jsx)(fp,{type:"tel",value:t.phone||"",onChange:e=>r({phone:e.target.value}),required:!0})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("auth.password")}),(0,Vn.jsx)(fp,{type:"password",value:t.password||"",onChange:e=>r({password:e.target.value}),required:!0})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("auth.confirmPassword")}),(0,Vn.jsx)(fp,{type:"password",value:t.confirmPassword||"",onChange:e=>r({confirmPassword:e.target.value}),required:!0})]})]}),isValid:e=>e.name&&e.email&&e.phone&&e.password&&e.confirmPassword&&e.password===e.confirmPassword},{label:e("registration.steps.verification"),content:(t,r)=>(0,Vn.jsxs)(up,{children:[(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.verifyEmail")}),(0,Vn.jsx)("p",{children:e("registration.verificationCodeSent",{target:t.email})}),(0,Vn.jsx)(fp,{type:"text",placeholder:e("registration.enterVerificationCode"),value:t.emailCode||"",onChange:e=>r({emailCode:e.target.value}),required:!0})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.verifyPhone")}),(0,Vn.jsx)("p",{children:e("registration.verificationCodeSent",{target:t.phone})}),(0,Vn.jsx)(fp,{type:"text",placeholder:e("registration.enterVerificationCode"),value:t.phoneCode||"",onChange:e=>r({phoneCode:e.target.value}),required:!0})]})]}),isValid:e=>e.emailCode&&e.phoneCode},{label:e("registration.steps.documents"),content:(t,r)=>(0,Vn.jsxs)(up,{children:[(0,Vn.jsx)(Ii,{onChange:e=>{r({idProof:e})},maxImages:1,label:e("registration.uploadId")}),(0,Vn.jsx)(Ii,{onChange:e=>{r({certificates:e})},maxImages:3,label:e("registration.uploadCertificates")}),(0,Vn.jsx)(Ii,{onChange:e=>{r({experienceProof:e})},maxImages:2,label:e("registration.uploadExperience")}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("auth.experience")}),(0,Vn.jsx)(fp,{type:"number",min:"0",value:t.experience||"",onChange:e=>r({experience:e.target.value}),required:!0})]})]}),isValid:e=>e.experience},{label:e("registration.steps.review"),content:(t,r)=>(0,Vn.jsxs)(up,{children:[(0,Vn.jsxs)(xp,{children:[(0,Vn.jsx)("h3",{children:e("registration.thankYou",{defaultValue:"Thank You for Your Application"})}),(0,Vn.jsx)("p",{children:e("registration.reviewMessage")})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.applicationStatus",{defaultValue:"Application Status"})}),(0,Vn.jsx)("p",{children:e("registration.underReview",{defaultValue:"Under Review"})})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.submissionTime",{defaultValue:"Submission Time"})}),(0,Vn.jsx)("p",{children:(new Date).toLocaleString()})]})]}),isValid:()=>!0},{label:e("registration.steps.serviceSetup"),content:(t,r)=>{const n=t.timeSlots||{},i=["Morning","Afternoon","Evening"],a=ir.div`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      overflow-x: auto;
      padding: 10px;
      max-width: 100%;
      &::-webkit-scrollbar {
        height: 8px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
      }
    `,o=ir.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 100px;
    `,l=ir.div`
      padding: 8px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      background-color: ${e=>e.selected?"#4CAF50":"#fff"};
      color: ${e=>e.selected?"#fff":"#333"};
      &:hover {
        background-color: ${e=>e.selected?"#45a049":"#f5f5f5"};
      }
    `;return(0,Vn.jsxs)(up,{children:[(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.serviceCategory")}),(0,Vn.jsxs)(vp,{value:t.serviceCategory||"",onChange:e=>r({serviceCategory:e.target.value}),required:!0,children:[(0,Vn.jsx)("option",{value:"",children:e("registration.selectServiceCategory",{defaultValue:"Please select service category"})}),(0,Vn.jsx)("option",{value:"cleaning",children:e("services.cleaning",{defaultValue:"Cleaning Service"})}),(0,Vn.jsx)("option",{value:"repair",children:e("services.repair",{defaultValue:"Repair Service"})}),(0,Vn.jsx)("option",{value:"plumbing",children:e("services.plumbing",{defaultValue:"Plumbing Service"})}),(0,Vn.jsx)("option",{value:"elderCare",children:e("services.elderCare",{defaultValue:"Elder Care"})}),(0,Vn.jsx)("option",{value:"childCare",children:e("services.childCare",{defaultValue:"Child Care"})})]})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.priceSettings")}),(0,Vn.jsx)(fp,{type:"number",min:"0",placeholder:e("registration.hourlyRate",{defaultValue:"Hourly rate (\u20ac)"}),value:t.hourlyRate||"",onChange:e=>r({hourlyRate:e.target.value}),required:!0})]}),(0,Vn.jsxs)(dp,{children:[(0,Vn.jsx)(pp,{children:e("registration.availability")}),(0,Vn.jsx)(a,{children:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((e=>(0,Vn.jsxs)(o,{children:[(0,Vn.jsx)(bp,{children:e}),i.map((t=>(0,Vn.jsx)(l,{selected:n[`${e}-${t}`],onClick:()=>((e,t)=>{const i={...n},a=`${e}-${t}`;i[a]?delete i[a]:i[a]=!0,r({timeSlots:i})})(e,t),children:t},`${e}-${t}`)))]},e)))})]})]})},isValid:e=>e.serviceCategory&&e.hourlyRate&&e.timeSlots&&Object.keys(e.timeSlots).length>0}];return(0,Vn.jsxs)(sp,{children:[(0,Vn.jsx)(cp,{children:e("auth.providerRegister")}),(0,Vn.jsx)(Fd,{steps:r,onComplete:e=>{console.log("Provider registration complete with:",e),t("/provider/register-success")},isProvider:!0}),(0,Vn.jsxs)(hp,{children:[e("auth.haveAccount"),(0,Vn.jsx)(gp,{to:"/provider/login",children:e("auth.signIn")})]}),(0,Vn.jsxs)(mp,{children:[e("auth.areYouClient"),(0,Vn.jsx)(gp,{to:"/client/register",children:e("auth.clientRegister")})]})]})},wp=ir.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 40px 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 4px solid ${e=>e.isProvider?"var(--provider-color, #4caf50)":"var(--primary-color)"};
`,kp=ir.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${e=>e.isProvider?"var(--provider-color, #4caf50)":"var(--primary-color)"};
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`,jp=ir.h2`
  margin-bottom: 15px;
  color: ${e=>e.isProvider?"var(--provider-color, #4caf50)":"var(--primary-color)"};
  font-size: 24px;
`,Sp=ir.p`
  margin-bottom: 30px;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.5;
`,Cp=ir.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Pp=ir(Pe)`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: ${e=>e.isProvider?"var(--provider-color, #4caf50)":"var(--primary-color)"};
    color: white;
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    border: 1px solid ${e=>e.isProvider?"var(--provider-color, #4caf50)":"var(--primary-color)"};
    color: ${e=>e.isProvider?"var(--provider-color, #4caf50)":"var(--primary-color)"};
    
    &:hover {
      background-color: ${e=>e.isProvider?"rgba(76, 175, 80, 0.1)":"rgba(46, 125, 50, 0.1)"};
      transform: translateY(-2px);
    }
  }
`;const Ep=function(){const{t:e}=$n(),t=X().pathname.includes("/provider");return(0,Vn.jsxs)(wp,{isProvider:t,children:[(0,Vn.jsx)(kp,{isProvider:t,children:"\u2713"}),(0,Vn.jsx)(jp,{isProvider:t,children:e("registration.success.title")}),(0,Vn.jsx)(Sp,{children:t?e("registration.success.providerMessage",{defaultValue:"Your service provider account has been successfully registered. You can now log in and start setting up your services."}):e("registration.success.clientMessage",{defaultValue:"Your client account has been successfully registered. You can now log in and start using our services."})}),(0,Vn.jsxs)(Cp,{children:[(0,Vn.jsx)(Pp,{to:t?"/provider/login":"/client/login",className:"primary",isProvider:t,children:e("registration.success.login",{defaultValue:"Log In Now"})}),(0,Vn.jsx)(Pp,{to:"/",className:"secondary",isProvider:t,children:e("registration.success.home",{defaultValue:"Return to Home"})})]})]})},Op=ir.div`
  position: relative;
  display: inline-block;
`,Rp=ir.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`,Tp=ir.span`
  margin-right: 5px;
`,_p=ir.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  z-index: 100;
  min-width: 120px;
  display: ${e=>e.isOpen?"block":"none"};
`,Np=ir.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &.active {
    color: var(--primary-color);
    font-weight: 500;
  }
`;const Lp=function(){const{i18n:e}=$n(),[r,n]=t.useState(!1),i=[{code:"en",name:"English"},{code:"ru",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{code:"et",name:"Eesti"},{code:"lv",name:"Latvie\u0161u"},{code:"lt",name:"Lietuvi\u0173"}];return t.useEffect((()=>{const e=e=>{r&&!e.target.closest(".language-switcher")&&n(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[r]),(0,Vn.jsxs)(Op,{className:"language-switcher",children:[(0,Vn.jsxs)(Rp,{onClick:()=>{n(!r)},children:[(0,Vn.jsx)(Tp,{children:"\ud83c\udf10"}),(()=>{const t=i.find((t=>t.code===e.language));return t?t.name:"English"})()]}),(0,Vn.jsx)(_p,{isOpen:r,children:i.map((t=>(0,Vn.jsx)(Np,{className:e.language===t.code?"active":"",onClick:()=>{return r=t.code,e.changeLanguage(r),void n(!1);var r},children:t.name},t.code)))})]})},Ap=ir.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 0;
`,zp=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Dp=ir(Pe)`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
`,Ip=ir.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`,Fp=ir(Pe)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 4px;
  
  &:hover {
    color: var(--primary-color);
    background-color: rgba(46, 125, 50, 0.1);
  }
`,Mp=ir.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  position: relative;
`,Up=ir(Pe)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  &.login {
    color: var(--text-dark);
    border: 1px solid var(--text-dark);
    
    &:hover {
      background-color: rgba(46, 125, 50, 0.1);
    }
  }
  
  &.register {
    color: var(--text-light);
    background-color: var(--primary-color);
    
    &:hover {
      background-color: var(--text-secondary);
    }
  }
`;const $p=function(){const{t:e}=$n(),[r,n]=t.useState(!1);return t.useEffect((()=>{const e=e=>{r&&!e.target.closest(".login")&&n(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[r]),(0,Vn.jsx)(Ap,{children:(0,Vn.jsxs)(zp,{children:[(0,Vn.jsx)(Dp,{to:"/",children:"WeCare"}),(0,Vn.jsxs)(Ip,{children:[(0,Vn.jsx)(Fp,{to:"/",children:e("nav.home")}),(0,Vn.jsx)(Fp,{to:"/services/cleaning",children:e("nav.cleaning")}),(0,Vn.jsx)(Fp,{to:"/services/repair",children:e("nav.repair")}),(0,Vn.jsx)(Fp,{to:"/services/plumbing",children:e("nav.plumbing")}),(0,Vn.jsx)(Fp,{to:"/services/elder-care",children:e("nav.elderCare")}),(0,Vn.jsx)(Fp,{to:"/services/child-care",children:e("nav.childCare")}),(0,Vn.jsx)(Fp,{to:"/booking",children:e("nav.bookNow")}),(0,Vn.jsx)(Lp,{}),(0,Vn.jsxs)(Mp,{children:[(0,Vn.jsxs)("div",{style:{marginRight:"10px",position:"relative"},children:[(0,Vn.jsx)(Up,{as:"div",className:"login",style:{cursor:"pointer"},onClick:()=>n(!r),children:e("nav.login")}),r&&(0,Vn.jsxs)("div",{style:{position:"absolute",top:"100%",left:0,background:"white",borderRadius:"4px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",padding:"8px 0",zIndex:1e3,minWidth:"150px"},children:[(0,Vn.jsx)(Pe,{to:"/client/login",style:{display:"block",padding:"8px 16px",color:"var(--text-dark)",textDecoration:"none",transition:"background-color 0.3s"},onMouseEnter:e=>e.target.style.backgroundColor="rgba(46, 125, 50, 0.1)",onMouseLeave:e=>e.target.style.backgroundColor="transparent",children:e("I am Client")}),(0,Vn.jsx)(Pe,{to:"/provider/login",style:{display:"block",padding:"8px 16px",color:"var(--text-dark)",textDecoration:"none",transition:"background-color 0.3s"},onMouseEnter:e=>e.target.style.backgroundColor="rgba(46, 125, 50, 0.1)",onMouseLeave:e=>e.target.style.backgroundColor="transparent",children:e("I am Provider")})]})]}),(0,Vn.jsx)("div",{children:(0,Vn.jsx)(Up,{to:"/register",className:"register",children:e("nav.register")})})]})]})]})})},Bp=ir.footer`
  background-color: #f5f5f5;
  padding: 40px 0 20px;
  margin-top: 60px;
`,Vp=ir.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-margin);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Hp=ir.div`
  display: flex;
  flex-direction: column;
`,Wp=ir.h3`
  font-size: var(--small-heading);
  margin-bottom: 20px;
  color: var(--text-primary);
`,qp=ir(Pe)`
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`,Kp=ir.p`
  color: var(--text-secondary);
  margin-bottom: 10px;
`,Yp=ir.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px var(--page-margin) 0;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  color: var(--text-secondary);
  font-size: var(--caption);
`;const Qp=function(){return(0,Vn.jsxs)(Bp,{children:[(0,Vn.jsxs)(Vp,{children:[(0,Vn.jsxs)(Hp,{children:[(0,Vn.jsx)(Wp,{children:"Services"}),(0,Vn.jsx)(qp,{to:"/services/cleaning",children:"Cleaning"}),(0,Vn.jsx)(qp,{to:"/services/repair",children:"Repair"}),(0,Vn.jsx)(qp,{to:"/services/plumbing",children:"Plumbing"}),(0,Vn.jsx)(qp,{to:"/services/elder-care",children:"Elder Care"}),(0,Vn.jsx)(qp,{to:"/services/child-care",children:"Child Care"})]}),(0,Vn.jsxs)(Hp,{children:[(0,Vn.jsx)(Wp,{children:"Company"}),(0,Vn.jsx)(qp,{to:"/about",children:"About Us"}),(0,Vn.jsx)(qp,{to:"/careers",children:"Careers"}),(0,Vn.jsx)(qp,{to:"/blog",children:"Blog"}),(0,Vn.jsx)(qp,{to:"/press",children:"Press"})]}),(0,Vn.jsxs)(Hp,{children:[(0,Vn.jsx)(Wp,{children:"Support"}),(0,Vn.jsx)(qp,{to:"/help",children:"Help Center"}),(0,Vn.jsx)(qp,{to:"/contact",children:"Contact Us"}),(0,Vn.jsx)(qp,{to:"/faq",children:"FAQ"}),(0,Vn.jsx)(qp,{to:"/terms",children:"Terms of Service"}),(0,Vn.jsx)(qp,{to:"/privacy",children:"Privacy Policy"})]}),(0,Vn.jsxs)(Hp,{children:[(0,Vn.jsx)(Wp,{children:"Contact"}),(0,Vn.jsx)(Kp,{children:"Email: info@wecare.com"}),(0,Vn.jsx)(Kp,{children:"Phone: +372 5555 1234"}),(0,Vn.jsx)(Kp,{children:"Address: Tallinn, Estonia"})]})]}),(0,Vn.jsxs)(Yp,{children:["\xa9 ",(new Date).getFullYear()," WeCare. All rights reserved."]})]})},Jp=ir.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Gp=ir.main`
  flex: 1;
`;const Xp=function(){return(0,Vn.jsxs)(Jp,{children:[(0,Vn.jsx)($p,{}),(0,Vn.jsx)(Gp,{children:(0,Vn.jsxs)(ve,{children:[(0,Vn.jsx)(ge,{path:"/",element:(0,Vn.jsx)(Ei,{})}),(0,Vn.jsx)(ge,{path:"/services/cleaning",element:(0,Vn.jsx)(Qi,{})}),(0,Vn.jsx)(ge,{path:"/services/repair",element:(0,Vn.jsx)(Oa,{})}),(0,Vn.jsx)(ge,{path:"/services/plumbing",element:(0,Vn.jsx)(Jl,{})}),(0,Vn.jsx)(ge,{path:"/services/elder-care",element:(0,Vn.jsx)(_o,{})}),(0,Vn.jsx)(ge,{path:"/services/child-care",element:(0,Vn.jsx)(xl,{})}),(0,Vn.jsx)(ge,{path:"/booking",element:(0,Vn.jsx)(Ms,{})}),(0,Vn.jsx)(ge,{path:"/login",element:(0,Vn.jsx)(id,{})}),(0,Vn.jsx)(ge,{path:"/register",element:(0,Vn.jsx)(vd,{})}),(0,Vn.jsx)(ge,{path:"/client/login",element:(0,Vn.jsx)(Rd,{})}),(0,Vn.jsx)(ge,{path:"/client/register",element:(0,Vn.jsx)(Yd,{})}),(0,Vn.jsx)(ge,{path:"/client/register-success",element:(0,Vn.jsx)(Ep,{})}),(0,Vn.jsx)(ge,{path:"/provider/login",element:(0,Vn.jsx)(lp,{})}),(0,Vn.jsx)(ge,{path:"/provider/register",element:(0,Vn.jsx)(yp,{})}),(0,Vn.jsx)(ge,{path:"/provider/register-success",element:(0,Vn.jsx)(Ep,{})}),(0,Vn.jsx)(ge,{path:"/client/dashboard",element:(0,Vn.jsx)(tu,{})}),(0,Vn.jsx)(ge,{path:"/provider/portal",element:(0,Vn.jsx)(cc,{})}),(0,Vn.jsx)(ge,{path:"/provider/service",element:(0,Vn.jsx)(jc,{})}),(0,Vn.jsx)(ge,{path:"/provider/services",element:(0,Vn.jsx)(cc,{})}),(0,Vn.jsx)(ge,{path:"/provider/schedule",element:(0,Vn.jsx)(cc,{})}),(0,Vn.jsx)(ge,{path:"/provider/profile",element:(0,Vn.jsx)(cc,{})}),(0,Vn.jsx)(ge,{path:"/provider/profile/:id",element:(0,Vn.jsx)(ku,{})}),(0,Vn.jsx)(ge,{path:"/service-request",element:(0,Vn.jsx)(Nc,{})}),(0,Vn.jsx)(ge,{path:"/payment",element:(0,Vn.jsx)(qu,{})})]})}),(0,Vn.jsx)(Qp,{})]})},Zp=e=>{e&&e instanceof Function&&r.e(453).then(r.bind(r,453)).then((t=>{let{getCLS:r,getFID:n,getFCP:i,getLCP:a,getTTFB:o}=t;r(e),n(e),i(e),a(e),o(e)}))};i.createRoot(document.getElementById("root")).render((0,Vn.jsx)(t.StrictMode,{children:(0,Vn.jsx)(je,{children:(0,Vn.jsx)(Xp,{})})})),Zp()})()})();
//# sourceMappingURL=main.631475bf.js.map