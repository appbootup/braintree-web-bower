!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).unionpay=e()}}(function(){var e;return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n||e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),i=e("./lib/default-attributes"),o=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=o({},i,e);return n.style&&"string"!=typeof n.style&&(o(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":2,"./lib/default-attributes":3,"./lib/set-attributes":4}],2:[function(e,t,n){"use strict";t.exports=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],3:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],4:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],5:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],6:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],7:[function(e,t,n){"use strict";function r(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}t.exports=r},{}],8:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments);return"function"==typeof n[n.length-1]&&(t=n.pop(),t=o(i(t))),s(e.apply(this,n),t)}}var i=e("./lib/deferred"),o=e("./lib/once"),s=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,i,o;return t=t||{},i=t.ignoreMethods||[],o=!0===t.transformPrivateMethods,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===i.indexOf(t);return n=!!o||"_"!==t.charAt(0),r&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":5,"./lib/once":6,"./lib/promise-or-callback":7}],9:[function(t,n,r){(function(t){"use strict";!function(i,o){"object"==typeof r&&void 0!==n?n.exports=o(void 0===t?i:t):"function"==typeof e&&e.amd?e([],function(){return o(i)}):i.framebus=o(i)}(this,function(e){function t(e){return null!=e&&(null!=e.Window&&(e.constructor===e.Window&&(A.push(e),!0)))}function n(e){var t,n={};for(t in y)y.hasOwnProperty(t)&&(n[t]=y[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return!a(e)&&(!a(r)&&(n=Array.prototype.slice.call(arguments,1),!1!==(t=c(e,n,r))&&(_(I.top||I.self,t,r),!0)))}function i(e,t){var n=s(this);return!h(e,t,n)&&(O[n]=O[n]||{},O[n][e]=O[n][e]||[],O[n][e].push(t),!0)}function o(e,t){var n,r,i=s(this);if(h(e,t,i))return!1;if(!(r=O[i]&&O[i][e]))return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function c(e,t,n){var r=!1,i={event:e,origin:n},o=t[t.length-1];"function"==typeof o&&(i.reply=N(o,n),t=t.slice(0,-1)),i.args=t;try{r=m+JSON.stringify(i)}catch(e){throw new Error("Could not stringify event: "+e.message)}return r}function u(e){var t,n,r,i;if(e.data.slice(0,m.length)!==m)return!1;try{t=JSON.parse(e.data.slice(m.length))}catch(e){return!1}return null!=t.reply&&(n=e.origin,r=e.source,i=t.reply,t.reply=function(e){var t=c(i,[e],n);if(!1===t)return!1;r.postMessage(t,n)},t.args.push(t.reply)),t}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function f(e){var t;a(e.data)||(t=u(e))&&(p("*",t.event,t.args,e),p(e.origin,t.event,t.args,e),E(e.data,t.origin,e.source))}function p(e,t,n,r){var i;if(O[e]&&O[e][t])for(i=0;i<O[e][t].length;i++)O[e][t][i].apply(r,n)}function d(e){return e.top===e&&(null!=e.opener&&(e.opener!==e&&!0!==e.opener.closed))}function _(e,t,n){var r;try{for(e.postMessage(t,n),d(e)&&_(e.opener.top,t,n),r=0;r<e.frames.length;r++)_(e.frames[r],t,n)}catch(e){}}function E(e,t,n){var r,i;for(r=A.length-1;r>=0;r--)i=A[r],!0===i.closed?A=A.slice(r,1):n!==i&&_(i.top,e,t)}function N(e,t){function n(i,o){e(i,o),y.target(t).unsubscribe(r,n)}var r=l();return y.target(t).subscribe(r,n),r}function h(e,t,n){return!!a(e)||("function"!=typeof t||!!a(n))}var I,y,A=[],O={},m="/*framebus*/";return function(t){I||(I=t||e,I.addEventListener?I.addEventListener("message",f,!1):I.attachEvent?I.attachEvent("onmessage",f):null===I.onmessage?I.onmessage=f:I=null)}(),y={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){"use strict";function r(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,f._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}s(t.promise,r)})}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof f)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(i(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&f._immediateFn(function(){e._handled||f._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}function f(e){if(!(this instanceof f))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}var p=setTimeout,d=f.prototype;d.catch=function(e){return this.then(null,e)},d.then=function(e,t){var n=new this.constructor(r);return o(this,new u(e,t,n)),n},f.all=function(e){return new f(function(t,n){function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(e,t)},n)}i[e]=s,0==--o&&t(i)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var o=i.length,s=0;s<i.length;s++)r(s,i[s])})},f.resolve=function(e){return e&&"object"==typeof e&&e.constructor===f?e:new f(function(t){t(e)})},f.reject=function(e){return new f(function(t,n){n(e)})},f.race=function(e){return new f(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},f._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){p(e,0)},f._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=f},{}],11:[function(e,t,n){"use strict";function r(e,t){var n,r=t?o(t):{},a=i(e.authorization).attrs,c=o(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var i=e("./create-authorization-data"),o=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":18,"./create-authorization-data":20,"./json-clone":24}],12:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function i(e,t,n){var i=e.getConfiguration(),a=e._request,c=r(Date.now()),u=i.gatewayConfiguration.analytics.url,l={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:u,method:"post",data:s(i,l),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var o=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":11,"./constants":18}],13:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(r=e.name,null==(t=e.client)?o.reject(new i({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):(n=t.getVersion(),n!==a?o.reject(new i({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version "+a+") components must be from the same SDK version."})):o.resolve())):o.reject(new i({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var i=e("./braintree-error"),o=e("./promise"),s=e("./errors"),a="3.29.0";t.exports={verify:r}},{"./braintree-error":14,"./errors":22,"./promise":26}],14:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":21}],15:[function(e,t,n){"use strict";function r(e,t){var n,r=document.createElement("a");return r.href=t,n="https:"===r.protocol?r.host.replace(/:443$/,""):"http:"===r.protocol?r.host.replace(/:80$/,""):r.host,r.protocol+"//"+n===e||(r.href=e,i(e))}var i=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":23}],16:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":21}],17:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=e("framebus"),o=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,o=t,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),i.emit.apply(i,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),i.off.apply(i,t))},r.prototype.off=function(e,t){var n,r,i=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(i=r.handler);this._offDirect(e,i)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=o,t.exports=r},{"../braintree-error":14,"./check-origin":15,"./events":16,framebus:9}],18:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.29.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.29.0"}},{}],19:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":14,"./errors":22}],20:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),n=t[0];return{merchantId:t.slice(2).join("_"),environment:n}}function o(e){var t,n,o={attrs:{},configUrl:""};return r(e)?(n=i(e),o.attrs.tokenizationKey=e,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var s=e("../lib/vendor/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/vendor/polyfill":28}],21:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],22:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":14}],23:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function i(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&(o=o||document.createElement("a"),o.href=e,t=r(o.hostname),s.hasOwnProperty(t))}var o,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=i},{}],24:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],25:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],26:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],27:[function(e,t,n){"use strict";function r(e){return e?"":".min"}t.exports=r},{}],28:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,i,o,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do{i=l.indexOf(e.charAt(c++)),o=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),t=(63&i)<<2|o>>4&3,n=(15&o)<<4|s>>2&15,r=(3&s)<<6|63&a,f+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"")}while(c<e.length);return f}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],29:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}t.exports=r},{}],30:[function(e,t,n){"use strict";function r(e){return o.verify({name:"UnionPay",client:e.client}).then(function(){var t=e.client.getConfiguration();return t.gatewayConfiguration.unionPay&&!0===t.gatewayConfiguration.unionPay.enabled?(a.sendEvent(e.client,"unionpay.initialized"),new i(e)):u.reject(new s(c.UNIONPAY_NOT_ENABLED))})}var i=e("./shared/unionpay"),o=e("../lib/basic-component-verification"),s=e("../lib/braintree-error"),a=e("../lib/analytics"),c=e("./shared/errors"),u=e("../lib/promise"),l=e("@braintree/wrap-promise");t.exports={create:l(r),VERSION:"3.29.0"}},{"../lib/analytics":12,"../lib/basic-component-verification":13,"../lib/braintree-error":14,"../lib/promise":26,"./shared/errors":32,"./shared/unionpay":33,"@braintree/wrap-promise":8}],31:[function(e,t,n){"use strict";var r=e("../../lib/enumerate");t.exports={events:r(["HOSTED_FIELDS_FETCH_CAPABILITIES","HOSTED_FIELDS_ENROLL","HOSTED_FIELDS_TOKENIZE"],"union-pay:"),HOSTED_FIELDS_FRAME_NAME:"braintreeunionpayhostedfields"}},{"../../lib/enumerate":21}],32:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={UNIONPAY_NOT_ENABLED:{type:r.types.MERCHANT,code:"UNIONPAY_NOT_ENABLED",message:"UnionPay is not enabled for this merchant."},UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",message:"Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance."},UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"Could not find the Hosted Fields instance."},UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance."},UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",message:"Please supply either a card or a Hosted Fields instance, not both."},UNIONPAY_EXPIRATION_DATE_INCOMPLETE:{type:r.types.MERCHANT,code:"UNIONPAY_EXPIRATION_DATE_INCOMPLETE",message:"You must supply expiration month and year or neither."},UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID:{type:r.types.CUSTOMER,code:"UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",message:"Enrollment failed due to user input error."},UNIONPAY_ENROLLMENT_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_ENROLLMENT_NETWORK_ERROR",message:"Could not enroll UnionPay card."},UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",message:"Could not fetch card capabilities."},UNIONPAY_TOKENIZATION_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},UNIONPAY_MISSING_MOBILE_PHONE_DATA:{type:r.types.MERCHANT,code:"UNIONPAY_MISSING_MOBILE_PHONE_DATA",message:"A `mobile` with `countryCode` and `number` is required."},UNIONPAY_FAILED_TOKENIZATION:{type:r.types.CUSTOMER,code:"UNIONPAY_FAILED_TOKENIZATION",message:"The supplied card data failed tokenization."}}},{"../../lib/braintree-error":14}],33:[function(e,t,n){"use strict";function r(e){this._options=e}var i=e("../../lib/analytics"),o=e("../../lib/braintree-error"),s=e("../../lib/bus"),a=e("./constants"),c=e("../../lib/use-min"),u=e("../../lib/convert-methods-to-error"),l=e("./errors"),f=a.events,p=e("@braintree/iframer"),d=e("../../lib/methods"),_=e("../../lib/vendor/uuid"),E=e("../../lib/promise"),N=e("@braintree/wrap-promise");r.prototype.fetchCapabilities=function(e){var t=this,n=this._options.client,r=e.card?e.card.number:null,s=e.hostedFields;return r&&s?E.reject(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):r?n.request({method:"get",endpoint:"payment_methods/credit_cards/capabilities",data:{_meta:{source:"unionpay"},creditCard:{number:r}}}).then(function(e){return i.sendEvent(n,"unionpay.capabilities-received"),e}).catch(function(e){var t=e.details&&e.details.httpStatus;return i.sendEvent(n,"unionpay.capabilities-failed"),403===t?E.reject(e):E.reject(new o({type:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type,code:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code,message:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message,details:{originalError:e}}))}):s?s._bus?new E(function(e,n){t._initializeHostedFields(function(){t._bus.emit(f.HOSTED_FIELDS_FETCH_CAPABILITIES,{hostedFields:s},function(t){if(t.err)return void n(new o(t.err));e(t.payload)})})}):E.reject(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)):E.reject(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},r.prototype.enroll=function(e){var t,n=this,r=this._options.client,s=e.card,a=e.mobile,c=e.hostedFields;if(!a)return E.reject(new o(l.UNIONPAY_MISSING_MOBILE_PHONE_DATA));if(c)return c._bus?s?E.reject(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):new E(function(e,t){n._initializeHostedFields(function(){n._bus.emit(f.HOSTED_FIELDS_ENROLL,{hostedFields:c,mobile:a},function(n){if(n.err)return void t(new o(n.err));e(n.payload)})})}):E.reject(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));if(s&&s.number){if(t={_meta:{source:"unionpay"},unionPayEnrollment:{number:s.number,mobileCountryCode:a.countryCode,mobileNumber:a.number}},s.expirationDate)t.unionPayEnrollment.expirationDate=s.expirationDate;else if(s.expirationMonth||s.expirationYear){if(!s.expirationMonth||!s.expirationYear)return E.reject(new o(l.UNIONPAY_EXPIRATION_DATE_INCOMPLETE));t.unionPayEnrollment.expirationYear=s.expirationYear,t.unionPayEnrollment.expirationMonth=s.expirationMonth}return r.request({method:"post",endpoint:"union_pay_enrollments",data:t}).then(function(e){return i.sendEvent(r,"unionpay.enrollment-succeeded"),{enrollmentId:e.unionPayEnrollmentId,smsCodeRequired:e.smsCodeRequired}}).catch(function(e){var t,n=e.details&&e.details.httpStatus;return 403===n?t=e:n<500?(t=new o(l.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID),t.details={originalError:e}):(t=new o(l.UNIONPAY_ENROLLMENT_NETWORK_ERROR),t.details={originalError:e}),i.sendEvent(r,"unionpay.enrollment-failed"),E.reject(t)})}return E.reject(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},r.prototype.tokenize=function(e){var t,n=this,r=this._options.client,s=e.card,a=e.hostedFields;return s&&a?E.reject(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):s?(t={_meta:{source:"unionpay"},creditCard:{number:e.card.number,options:{unionPayEnrollment:{id:e.enrollmentId}}}},e.smsCode&&(t.creditCard.options.unionPayEnrollment.smsCode=e.smsCode),s.expirationDate?t.creditCard.expirationDate=s.expirationDate:s.expirationMonth&&s.expirationYear&&(t.creditCard.expirationYear=s.expirationYear,t.creditCard.expirationMonth=s.expirationMonth),e.card.cvv&&(t.creditCard.cvv=e.card.cvv),r.request({method:"post",endpoint:"payment_methods/credit_cards",data:t}).then(function(e){var t=e.creditCards[0];return delete t.consumed,delete t.threeDSecureInfo,i.sendEvent(r,"unionpay.nonce-received"),t}).catch(function(e){var t,n=e.details&&e.details.httpStatus;return i.sendEvent(r,"unionpay.nonce-failed"),403===n?t=e:n<500?(t=new o(l.UNIONPAY_FAILED_TOKENIZATION),t.details={originalError:e}):(t=new o(l.UNIONPAY_TOKENIZATION_NETWORK_ERROR),t.details={originalError:e}),E.reject(t)})):a?a._bus?new E(function(t,r){n._initializeHostedFields(function(){n._bus.emit(f.HOSTED_FIELDS_TOKENIZE,e,function(e){if(e.err)return void r(new o(e.err));t(e.payload)})})}):E.reject(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)):E.reject(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},r.prototype.teardown=function(){return this._bus&&(this._hostedFieldsFrame.parentNode.removeChild(this._hostedFieldsFrame),this._bus.teardown()),u(this,d(r.prototype)),E.resolve()},r.prototype._initializeHostedFields=function(e){var t,n,r=_();if(this._bus)return void e();t=this._options.client.getConfiguration().gatewayConfiguration.assetsUrl,n=this._options.client.getConfiguration().isDebug,this._bus=new s({channel:r,merchantUrl:location.href}),this._hostedFieldsFrame=p({name:a.HOSTED_FIELDS_FRAME_NAME+"_"+r,src:t+"/web/3.29.0/html/unionpay-hosted-fields-frame"+c(n)+".html",height:0,width:0}),this._bus.on(s.events.CONFIGURATION_REQUEST,function(t){t(this._options.client),e()}.bind(this)),document.body.appendChild(this._hostedFieldsFrame)},t.exports=N.wrapPrototype(r)},{"../../lib/analytics":12,"../../lib/braintree-error":14,"../../lib/bus":17,"../../lib/convert-methods-to-error":19,"../../lib/methods":25,"../../lib/promise":26,"../../lib/use-min":27,"../../lib/vendor/uuid":29,"./constants":31,"./errors":32,"@braintree/iframer":1,"@braintree/wrap-promise":8}]},{},[30])(30)});