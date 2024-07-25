(()=>{var e={710:e=>{class t{constructor(e,t,n,r,o,s,i){this.poster=e,this.title=t,this.director=n,this.year=r,this.duration=o,this.genre=s,this.rate=i}}e.exports={Movie:t,Repository:class{constructor(){this.movies=[]}createMovie(e){e.forEach((e=>{const n=new t(e.poster,e.title,e.director,e.year,e.duration,e.genre,e.rate);this.movies.push(n)}))}}}},425:(e,t,n)=>{"use strict";function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined"),d=c("ArrayBuffer"),h=u("string"),p=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),w=c("File"),E=c("Blob"),R=c("FileList"),O=c("URLSearchParams"),[S,T,v,A]=["ReadableStream","Request","Response","Headers"].map(c);function x(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function C(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,N=e=>!f(e)&&e!==j,P=(_="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>_&&e instanceof _);var _;const L=c("HTMLFormElement"),F=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),U=c("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},D="abcdefghijklmnopqrstuvwxyz",k="0123456789",q={DIGIT:k,ALPHA:D,ALPHA_DIGIT:D+D.toUpperCase()+k},M=c("AsyncFunction");var I={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||p(e.append)&&("formdata"===(t=i(e))||"object"===t&&p(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:h,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isReadableStream:S,isRequest:T,isResponse:v,isHeaders:A,isUndefined:f,isDate:b,isFile:w,isBlob:E,isRegExp:U,isFunction:p,isStream:e=>y(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:P,isFileList:R,forEach:x,merge:function e(){const{caseless:t}=N(this)&&this||{},n={},r=(r,o)=>{const s=t&&C(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&x(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(x(t,((t,o)=>{n&&p(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:L,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:C,global:j,isContextDefined:N,ALPHABET:q,generateString:(e=16,t=q.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&p(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!f(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:M,isThenable:e=>e&&(y(e)||p(e))&&p(e.then)&&p(e.catch)};function z(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}I.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const H=z.prototype,J={};function $(e){return I.isPlainObject(e)||I.isArray(e)}function W(e){return I.endsWith(e,"[]")?e.slice(0,-2):e}function K(e,t,n){return e?e.concat(t).map((function(e,t){return e=W(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{J[e]={value:e}})),Object.defineProperties(z,J),Object.defineProperty(H,"isAxiosError",{value:!0}),z.from=(e,t,n,r,o,s)=>{const i=Object.create(H);return I.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),z.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const V=I.toFlatObject(I,{},null,(function(e){return/^is[A-Z]/.test(e)}));function G(e,t,n){if(!I.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!I.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(I.isDate(e))return e.toISOString();if(!a&&I.isBlob(e))throw new z("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(e)||I.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(I.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(I.isArray(e)&&function(e){return I.isArray(e)&&!e.some($)}(e)||(I.isFileList(e)||I.endsWith(n,"[]"))&&(a=I.toArray(e)))return n=W(n),a.forEach((function(e,r){!I.isUndefined(e)&&null!==e&&t.append(!0===i?K([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!$(e)||(t.append(K(o,n,s),c(e)),!1)}const l=[],f=Object.assign(V,{defaultVisitor:u,convertValue:c,isVisitable:$});if(!I.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!I.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),I.forEach(n,(function(n,s){!0===(!(I.isUndefined(n)||null===n)&&o.call(t,n,I.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function X(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Q(e,t){this._pairs=[],e&&G(e,this,t)}const Z=Q.prototype;function Y(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(e,t,n){if(!t)return e;const r=n&&n.encode||Y,o=n&&n.serialize;let s;if(s=o?o(t,n):I.isURLSearchParams(t)?t.toString():new Q(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}Z.append=function(e,t){this._pairs.push([e,t])},Z.toString=function(e){const t=e?function(t){return e.call(this,t,X)}:X;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var te=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){I.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},re={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Q,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const oe="undefined"!=typeof window&&"undefined"!=typeof document,se=(ie="undefined"!=typeof navigator&&navigator.product,oe&&["ReactNative","NativeScript","NS"].indexOf(ie)<0);var ie;const ae="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ce=oe&&window.location.href||"http://localhost";var ue={...Object.freeze({__proto__:null,hasBrowserEnv:oe,hasStandardBrowserWebWorkerEnv:ae,hasStandardBrowserEnv:se,origin:ce}),...re};function le(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&I.isArray(r)?r.length:s,a?(I.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&I.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&I.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(I.isFormData(e)&&I.isFunction(e.entries)){const n={};return I.forEachEntry(e,((e,r)=>{t(function(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const fe={transitional:ne,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=I.isObject(e);if(o&&I.isHTMLForm(e)&&(e=new FormData(e)),I.isFormData(e))return r?JSON.stringify(le(e)):e;if(I.isArrayBuffer(e)||I.isBuffer(e)||I.isStream(e)||I.isFile(e)||I.isBlob(e)||I.isReadableStream(e))return e;if(I.isArrayBufferView(e))return e.buffer;if(I.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return G(e,new ue.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ue.isNode&&I.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=I.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return G(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(I.isString(e))try{return(0,JSON.parse)(e),I.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||fe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(I.isResponse(e)||I.isReadableStream(e))return e;if(e&&I.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw z.from(e,z.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],(e=>{fe.headers[e]={}}));var de=fe;const he=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pe=Symbol("internals");function me(e){return e&&String(e).trim().toLowerCase()}function ye(e){return!1===e||null==e?e:I.isArray(e)?e.map(ye):String(e)}function ge(e,t,n,r,o){return I.isFunction(r)?r.call(this,t,n):(o&&(t=n),I.isString(t)?I.isString(r)?-1!==t.indexOf(r):I.isRegExp(r)?r.test(t):void 0:void 0)}class be{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=me(t);if(!o)throw new Error("header name must be a non-empty string");const s=I.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ye(e))}const s=(e,t)=>I.forEach(e,((e,n)=>o(e,n,t)));if(I.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(I.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&he[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(I.isHeaders(e))for(const[t,r]of e.entries())o(r,t,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=me(e)){const n=I.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(I.isFunction(t))return t.call(this,e,n);if(I.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=me(e)){const n=I.findKey(this,e);return!(!n||void 0===this[n]||t&&!ge(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=me(e)){const o=I.findKey(n,e);!o||t&&!ge(0,n[o],o,t)||(delete n[o],r=!0)}}return I.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ge(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return I.forEach(this,((r,o)=>{const s=I.findKey(n,o);if(s)return t[s]=ye(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ye(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return I.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&I.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[pe]=this[pe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=me(e);t[r]||(function(e,t){const n=I.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return I.isArray(e)?e.forEach(r):r(e),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),I.reduceDescriptors(be.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),I.freezeMethods(be);var we=be;function Ee(e,t){const n=this||de,r=t||n,o=we.from(r.headers);let s=r.data;return I.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Re(e){return!(!e||!e.__CANCEL__)}function Oe(e,t,n){z.call(this,null==e?"canceled":e,z.ERR_CANCELED,t,n),this.name="CanceledError"}function Se(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}I.inherits(Oe,z,{__CANCEL__:!0});var Te=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,s=Date.now();if(t||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(s-n)))}}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i};u[t?"download":"upload"]=!0,e(u)}),n)},ve=ue.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=I.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},Ae=ue.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];I.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),I.isString(r)&&i.push("path="+r),I.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ce=e=>e instanceof we?{...e}:e;function je(e,t){t=t||{};const n={};function r(e,t,n){return I.isPlainObject(e)&&I.isPlainObject(t)?I.merge.call({caseless:n},e,t):I.isPlainObject(t)?I.merge({},t):I.isArray(t)?t.slice():t}function o(e,t,n){return I.isUndefined(t)?I.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!I.isUndefined(t))return r(void 0,t)}function i(e,t){return I.isUndefined(t)?I.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ce(e),Ce(t),!0)};return I.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);I.isUndefined(i)&&s!==a||(n[r]=i)})),n}var Ne=e=>{const t=je({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=we.from(a),t.url=ee(xe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),I.isFormData(r))if(ue.hasStandardBrowserEnv||ue.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(ue.hasStandardBrowserEnv&&(o&&I.isFunction(o)&&(o=o(t)),o||!1!==o&&ve(t.url))){const e=s&&i&&Ae.read(i);e&&a.set(s,e)}return t},Pe="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Ne(e);let o=r.data;const s=we.from(r.headers).normalize();let i,{responseType:a}=r;function c(){r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let u=new XMLHttpRequest;function l(){if(!u)return;const r=we.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());Se((function(e){t(e),c()}),(function(e){n(e),c()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(n(new z("Request aborted",z.ECONNABORTED,r,u)),u=null)},u.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||ne;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new z(e,t.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,r,u)),u=null},void 0===o&&s.setContentType(null),"setRequestHeader"in u&&I.forEach(s.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),I.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),a&&"json"!==a&&(u.responseType=r.responseType),"function"==typeof r.onDownloadProgress&&u.addEventListener("progress",Te(r.onDownloadProgress,!0)),"function"==typeof r.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Te(r.onUploadProgress)),(r.cancelToken||r.signal)&&(i=t=>{u&&(n(!t||t.type?new Oe(null,e,u):t),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);f&&-1===ue.protocols.indexOf(f)?n(new z("Unsupported protocol "+f+":",z.ERR_BAD_REQUEST,e)):u.send(o||null)}))},_e=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof z?t:new Oe(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{o(new z(`timeout ${t} of ms exceeded`,z.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]};const Le=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Fe=(e,t,n,r,o)=>{const s=async function*(e,t,n){for await(const r of e)yield*Le(ArrayBuffer.isView(r)?r:await n(String(r)),t)}(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await s.next();if(t)return e.close(),void r();let a=o.byteLength;n&&n(i+=a),e.enqueue(new Uint8Array(o))},cancel:e=>(r(e),s.return())},{highWaterMark:2})},Ue=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},Be="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,De=Be&&"function"==typeof ReadableStream,ke=Be&&("function"==typeof TextEncoder?(qe=new TextEncoder,e=>qe.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var qe;const Me=De&&(()=>{let e=!1;const t=new Request(ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ie=De&&!!(()=>{try{return I.isReadableStream(new Response("").body)}catch(e){}})(),ze={stream:Ie&&(e=>e.body)};var He;Be&&(He=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!ze[e]&&(ze[e]=I.isFunction(He[e])?t=>t[e]():(t,n)=>{throw new z(`Response type '${e}' is not supported`,z.ERR_NOT_SUPPORT,n)})})));const Je={http:null,xhr:Pe,fetch:Be&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=Ne(e);u=u?(u+"").toLowerCase():"text";let h,p,[m,y]=o||s||i?_e([o,s],i):[];const g=()=>{!h&&setTimeout((()=>{m&&m.unsubscribe()})),h=!0};let b;try{if(c&&Me&&"get"!==n&&"head"!==n&&0!==(b=await(async(e,t)=>{const n=I.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:I.isBlob(e)?e.size:I.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:I.isArrayBufferView(e)?e.byteLength:(I.isURLSearchParams(e)&&(e+=""),I.isString(e)?(await ke(e)).byteLength:void 0))(t):n})(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});I.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body&&(r=Fe(n.body,65536,Ue(b,Te(c)),null,ke))}I.isString(f)||(f=f?"cors":"omit"),p=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let o=await fetch(p);const s=Ie&&("stream"===u||"response"===u);if(Ie&&(a||s)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=I.toFiniteNumber(o.headers.get("content-length"));o=new Response(Fe(o.body,65536,a&&Ue(t,Te(a,!0)),s&&g,ke),e)}u=u||"text";let i=await ze[I.findKey(ze,u)||"text"](o,e);return!s&&g(),y&&y(),await new Promise(((t,n)=>{Se(t,n,{data:i,headers:we.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:p})}))}catch(t){if(g(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new z("Network Error",z.ERR_NETWORK,e,p),{cause:t.cause||t});throw z.from(t,t&&t.code,e,p)}})};I.forEach(Je,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const $e=e=>`- ${e}`,We=e=>I.isFunction(e)||null===e||!1===e;var Ke=e=>{e=I.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!We(n)&&(r=Je[(t=String(n)).toLowerCase()],void 0===r))throw new z(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new z("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map($e).join("\n"):" "+$e(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Ve(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Oe(null,e)}function Ge(e){return Ve(e),e.headers=we.from(e.headers),e.data=Ee.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ke(e.adapter||de.adapter)(e).then((function(t){return Ve(e),t.data=Ee.call(e,e.transformResponse,t),t.headers=we.from(t.headers),t}),(function(t){return Re(t)||(Ve(e),t&&t.response&&(t.response.data=Ee.call(e,e.transformResponse,t.response),t.response.headers=we.from(t.response.headers))),Promise.reject(t)}))}const Xe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Xe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Qe={};Xe.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new z(r(o," has been removed"+(t?" in "+t:"")),z.ERR_DEPRECATED);return t&&!Qe[o]&&(Qe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Ze={assertOptions:function(e,t,n){if("object"!=typeof e)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Xe};const Ye=Ze.validators;class et{constructor(e){this.defaults=e,this.interceptors={request:new te,response:new te}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=je(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ze.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),null!=r&&(I.isFunction(r)?t.paramsSerializer={serialize:r}:Ze.assertOptions(r,{encode:Ye.function,serialize:Ye.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&I.merge(o.common,o[t.method]);o&&I.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=we.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ge.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Ge.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return ee(xe((e=je(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}I.forEach(["delete","get","head","options"],(function(e){et.prototype[e]=function(t,n){return this.request(je(n||{},{method:e,url:t,data:(n||{}).data}))}})),I.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(je(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}et.prototype[e]=t(),et.prototype[e+"Form"]=t(!0)}));var tt=et;class nt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Oe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new nt((function(t){e=t})),cancel:e}}}var rt=nt;const ot={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ot).forEach((([e,t])=>{ot[t]=e}));var st=ot;const it=function e(t){const n=new tt(t),o=r(tt.prototype.request,n);return I.extend(o,tt.prototype,n,{allOwnKeys:!0}),I.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(je(t,n))},o}(de);it.Axios=tt,it.CanceledError=Oe,it.CancelToken=rt,it.isCancel=Re,it.VERSION="1.7.2",it.toFormData=G,it.AxiosError=z,it.Cancel=it.CanceledError,it.all=function(e){return Promise.all(e)},it.spread=function(e){return function(t){return e.apply(null,t)}},it.isAxiosError=function(e){return I.isObject(e)&&!0===e.isAxiosError},it.mergeConfig=je,it.AxiosHeaders=we,it.formToJSON=e=>le(I.isHTMLForm(e)?new FormData(e):e),it.getAdapter=Ke,it.HttpStatusCode=st,it.default=it,e.exports=it}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();const{Movie:r,Repository:o}=n(710),s=new o;n(425).get("http://localhost:3001/movies").then((e=>{s.createMovie(e.data.data),(()=>{const e=document.querySelector(".containercards");s.movies.forEach((t=>{const n=function(e){const t=document.createElement("div");return t.classList.add("card"),t.innerHTML=`\n        <img src="${e.poster}" alt="${e.title}" />\n        <h3>${e.title}</h3>\n        <p>Director: ${e.director}</p>\n        <p>Año: ${e.year}</p>\n        <p>Duración: ${e.duration}</p>\n        <p>Género: ${e.genre.join(", ")}</p>\n        <p>Rate: ${e.rate}</p>\n    `,t}(t);e.appendChild(n)}))})()})).catch((e=>{console.log("Error loading movies: "+e.message)})),$(document).ready((()=>{}))})();