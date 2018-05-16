!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).paymentRequest=e()}}(function(){return function(){function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){return o(t[s][1][e]||e)},p,p.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}return e}()({1:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=i({},o,e);return n.style&&"string"!=typeof n.style&&(i(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":2,"./lib/default-attributes":3,"./lib/set-attributes":4}],2:[function(e,t,n){"use strict";t.exports=function(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],3:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],4:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],5:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],6:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],7:[function(e,t,n){"use strict";function r(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}t.exports=r},{}],8:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments);return"function"==typeof n[n.length-1]&&(t=n.pop(),t=i(o(t))),s(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),s=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=!0===t.transformPrivateMethods,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===o.indexOf(t);return n=!!i||"_"!==t.charAt(0),r&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":5,"./lib/once":6,"./lib/promise-or-callback":7}],9:[function(e,t,n){(function(e){"use strict";function n(e){return null!=e&&(null!=e.Window&&(e.constructor===e.Window&&(I.push(e),!0)))}function r(e){var t,n={};for(t in g)g.hasOwnProperty(t)&&(n[t]=g[t]);return n._origin=e||"*",n}function o(e){var t,n,r=a(this);return!c(e)&&(!c(r)&&(n=Array.prototype.slice.call(arguments,1),!1!==(t=u(e,n,r))&&(T(A.top||A.self,t,r),!0)))}function i(e,t){var n=a(this);return!m(e,t,n)&&(R[n]=R[n]||{},R[n][e]=R[n][e]||[],R[n][e].push(t),!0)}function s(e,t){var n,r,o=a(this);if(m(e,t,o))return!1;if(!(r=R[o]&&R[o][e]))return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function a(e){return e&&e._origin||"*"}function c(e){return"string"!=typeof e}function u(e,t,n){var r=!1,o={event:e,origin:n},i=t[t.length-1];"function"==typeof i&&(o.reply=N(i,n),t=t.slice(0,-1)),o.args=t;try{r=O+JSON.stringify(o)}catch(e){throw new Error("Could not stringify event: "+e.message)}return r}function p(e){var t,n,r,o;if(e.data.slice(0,O.length)!==O)return!1;try{t=JSON.parse(e.data.slice(O.length))}catch(e){return!1}return null!=t.reply&&(n=e.origin,r=e.source,o=t.reply,t.reply=function(e){var t=u(o,[e],n);if(!1===t)return!1;r.postMessage(t,n)},t.args.push(t.reply)),t}function E(t){A||(A=t||e,A.addEventListener?A.addEventListener("message",_,!1):A.attachEvent?A.attachEvent("onmessage",_):null===A.onmessage?A.onmessage=_:A=null)}function l(){null!=A&&(A.removeEventListener?A.removeEventListener("message",_,!1):A.detachEvent?A.detachEvent("onmessage",_):A.onmessage===_&&(A.onmessage=null),A=null,I=[],R={})}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function _(e){var t;c(e.data)||(t=p(e))&&(d("*",t.event,t.args,e),d(e.origin,t.event,t.args,e),y(e.data,t.origin,e.source))}function d(e,t,n,r){var o;if(R[e]&&R[e][t])for(o=0;o<R[e][t].length;o++)R[e][t][o].apply(r,n)}function h(e){return e.top===e&&(null!=e.opener&&(e.opener!==e&&!0!==e.opener.closed))}function T(e,t,n){var r,o=0;try{for(e.postMessage(t,n),h(e)&&T(e.opener.top,t,n);r=e.frames[o];)T(r,t,n),o++}catch(e){}}function y(e,t,n){var r,o;for(r=I.length-1;r>=0;r--)o=I[r],!0===o.closed?I=I.slice(r,1):n!==o&&T(o.top,e,t)}function N(e,t){function n(o,i){e(o,i),g.target(t).unsubscribe(r,n)}var r=f();return g.target(t).subscribe(r,n),r}function m(e,t,n){return!!c(e)||("function"!=typeof t||!!c(n))}var A,g,I=[],R={},O="/*framebus*/";E(),g={target:r,_packagePayload:u,_unpackPayload:p,_attach:E,_detach:l,_dispatch:d,_broadcast:T,_subscribeReplier:N,_subscriptionArgsInvalid:m,_onmessage:_,_uuid:f,_getSubscribers:function(){return R},_win:function(){return A},include:n,publish:o,pub:o,trigger:o,emit:o,subscribe:i,sub:i,on:i,unsubscribe:s,unsub:s,off:s},t.exports=g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){"use strict";function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],E(e,this)}function s(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:c)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}a(t.promise,r)})}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void E(o(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function E(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}var l=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return s(this,new p(e,t,n)),n},i.all=function(e){return new i(function(t,n){function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(e,t)},n)}o[e]=s,0==--i&&t(o)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,s=0;s<o.length;s++)r(s,o[s])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){l(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],11:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},a=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":19,"./create-authorization-data":21,"./json-clone":27}],12:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),a=e._request,c=r(Date.now()),u=o.gatewayConfiguration.analytics.url,p={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:u,method:"post",data:s(o,p),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":11,"./constants":19}],13:[function(e,t,n){"use strict";function r(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}var o="function"==typeof Object.assign?Object.assign:r;t.exports={assign:o,_assign:r}},{}],14:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(r=e.name,null==(t=e.client)?i.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):(n=t.getVersion(),n!==a?i.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version "+a+") components must be from the same SDK version."})):i.resolve())):i.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var o=e("./braintree-error"),i=e("./promise"),s=e("./errors"),a="3.34.0";t.exports={verify:r}},{"./braintree-error":15,"./errors":23,"./promise":29}],15:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":22}],16:[function(e,t,n){"use strict";function r(e,t){var n,r=document.createElement("a");return r.href=t,n="https:"===r.protocol?r.host.replace(/:443$/,""):"http:"===r.protocol?r.host.replace(/:80$/,""):r.host,r.protocol+"//"+n===e||(r.href=e,o(e))}var o=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":26}],17:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":22}],18:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=e("framebus"),i=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,i=t,a=this;this._isDestroyed||(this.merchantUrl&&(i=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=i,this._log("on",r),o.on.apply(o,r),this._listeners.push({eventName:e,handler:i,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),o.emit.apply(o,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),o.off.apply(o,t))},r.prototype.off=function(e,t){var n,r,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(o=r.handler);this._offDirect(e,o)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=i,t.exports=r},{"../braintree-error":15,"./check-origin":16,"./events":17,framebus:9}],19:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.34.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.34.0"}},{}],20:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":15,"./errors":23}],21:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0];return{merchantId:t.slice(2).join("_"),environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQL=t.graphQL),i}var s=e("../lib/vendor/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/vendor/polyfill":31}],22:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],23:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":15}],24:[function(e,t,n){"use strict";function r(){this._events={}}r.prototype.on=function(e,t){this._events[e]?this._events[e].push(t):this._events[e]=[t]},r.prototype._emit=function(e){var t,n,r=this._events[e];if(r)for(n=Array.prototype.slice.call(arguments,1),t=0;t<r.length;t++)r[t].apply(null,n)},t.exports=r},{}],25:[function(e,t,n){"use strict";t.exports=function(e){var t="production"===e.gatewayConfiguration.environment,n=e.gatewayConfiguration.androidPay,r=e.analyticsMetadata,o={environment:t?"PRODUCTION":"TEST",allowedPaymentMethods:["CARD","TOKENIZED_CARD"],paymentMethodTokenizationParameters:{tokenizationType:"PAYMENT_GATEWAY",parameters:{gateway:"braintree","braintree:merchantId":e.gatewayConfiguration.merchantId,"braintree:authorizationFingerprint":n.googleAuthorizationFingerprint,"braintree:apiVersion":"v1","braintree:sdkVersion":"3.34.0","braintree:metadata":JSON.stringify({source:r.source,integration:r.integration,sessionId:r.sessionId,version:"3.34.0",platform:r.platform})}},cardRequirements:{allowedCardNetworks:n.supportedNetworks.map(function(e){return e.toUpperCase()})}};return"TOKENIZATION_KEY"===e.authorizationType&&(o.paymentMethodTokenizationParameters.parameters["braintree:clientKey"]=e.authorization),o}},{}],26:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function o(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&(i=i||document.createElement("a"),i.href=e,t=r(i.hostname),s.hasOwnProperty(t))}var i,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=o},{}],27:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],28:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],29:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],30:[function(e,t,n){"use strict";function r(e){return e?"":".min"}t.exports=r},{}],31:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",E="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do{o=p.indexOf(e.charAt(c++)),i=p.indexOf(e.charAt(c++)),s=p.indexOf(e.charAt(c++)),a=p.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|s>>2&15,r=(3&s)<<6|63&a,E+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"")}while(c<e.length);return E}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],32:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}t.exports=r},{}],33:[function(e,t,n){"use strict";function r(e,t,n){return e+"/web/"+T+"/html/payment-request-frame"+l(n)+".html#"+t}function o(e){var t=e.enabledPaymentMethods||{};d.call(this),this._componentId=E(),this._client=e.client,this._enabledPaymentMethods={basicCard:!1!==t.basicCard,googlePay:!1!==t.googlePay},this._supportedPaymentMethods=this._constructDefaultSupportedPaymentMethods(),this._defaultSupportedPaymentMethods=Object.keys(this._supportedPaymentMethods).map(function(e){return this._supportedPaymentMethods[e]}.bind(this)),this._bus=new a({channel:this._componentId})}var i=e("../../lib/analytics"),s=e("../../lib/assign").assign,a=e("../../lib/bus"),c=e("../../lib/convert-methods-to-error"),u=e("../../lib/generate-google-pay-configuration"),p=e("@braintree/iframer"),E=e("../../lib/vendor/uuid"),l=e("../../lib/use-min"),f=e("../../lib/methods"),_=e("../../lib/promise"),d=e("../../lib/event-emitter"),h=e("../../lib/braintree-error"),T="3.34.0",y=e("../shared/constants").events,N=e("../shared/constants").errors,m=e("@braintree/wrap-promise"),A={Visa:"visa",MasterCard:"mastercard","American Express":"amex","Diners Club":"diners",Discover:"discover",JCB:"jcb",UnionPay:"unionpay",Maestro:"maestro"};o.prototype=Object.create(d.prototype,{constructor:o}),o.prototype._constructDefaultSupportedPaymentMethods=function(){var e=this._client.getConfiguration(),t=e.gatewayConfiguration.androidPay,n=e.gatewayConfiguration.creditCards,r={};return this._enabledPaymentMethods.basicCard&&n&&n.supportedCardTypes.length>0&&(r.basicCard={supportedMethods:["basic-card"],data:{supportedNetworks:n.supportedCardTypes.reduce(function(e,t){return t in A&&e.push(A[t]),e},[])}}),this._enabledPaymentMethods.googlePay&&t&&t.enabled&&(r.googlePay={supportedMethods:["https://google.com/pay"],data:s({apiVersion:1,merchantId:"18278000977346790994"},u(e))}),r},o.prototype.initialize=function(){var e=this._client.getConfiguration(),t=this;return this._frame=p({allowPaymentRequest:!0,name:"braintree-payment-request-frame",class:"braintree-payment-request-frame",height:0,width:0,style:{position:"absolute",left:"-9999px"}}),0===this._defaultSupportedPaymentMethods.length?_.reject(new h(N.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS)):new _(function(n){t._bus.on(y.FRAME_READY,function(e){e(t._client)}),t._bus.on(y.FRAME_CAN_MAKE_REQUESTS,function(){i.sendEvent(t._client,"payment-request.initialized"),t._bus.on(y.SHIPPING_ADDRESS_CHANGE,function(e){var n={target:{shippingAddress:e},updateWith:function(e){t._bus.emit(y.UPDATE_SHIPPING_ADDRESS,e)}};t._emit("shippingAddressChange",n),t._emit("shippingaddresschange",n)}),t._bus.on(y.SHIPPING_OPTION_CHANGE,function(e){var n={target:{shippingOption:e},updateWith:function(e){t._bus.emit(y.UPDATE_SHIPPING_OPTION,e)}};t._emit("shippingOptionChange",n),t._emit("shippingoptionchange",n)}),n(t)}),t._frame.src=r(e.gatewayConfiguration.assetsUrl,t._componentId,e.isDebug),document.body.appendChild(t._frame)})},o.prototype.createSupportedPaymentMethodsConfiguration=function(e,t){var n;if(!e)throw new h(N.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE);if(!this._enabledPaymentMethods[e])throw new h(N.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED);return n=s({},this._supportedPaymentMethods[e]),n.data=s({},n.data,t),n},o.prototype.tokenize=function(e){return new _(function(t,n){this._bus.emit(y.PAYMENT_REQUEST_INITIALIZED,{supportedPaymentMethods:e.supportedPaymentMethods||this._defaultSupportedPaymentMethods,details:e.details,options:e.options}),this._bus.on(y.PAYMENT_REQUEST_SUCCESSFUL,function(e){i.sendEvent(this._client,"payment-request.tokenize.succeeded"),t({nonce:e.nonce,type:e.type,description:e.description,details:{rawPaymentResponse:e.details.rawPaymentResponse,cardType:e.details.cardType,lastFour:e.details.lastFour,lastTwo:e.details.lastTwo},binData:e.binData})}.bind(this)),this._bus.on(y.PAYMENT_REQUEST_FAILED,function(e){var t;"AbortError"===e.name?(t=new h({type:N.PAYMENT_REQUEST_CANCELED.type,code:N.PAYMENT_REQUEST_CANCELED.code,message:N.PAYMENT_REQUEST_CANCELED.message,details:{originalError:e}}),i.sendEvent(this._client,"payment-request.tokenize.canceled")):"PAYMENT_REQUEST_INITIALIZATION_FAILED"===e.name?t=new h({type:N.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,code:N.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,message:N.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,details:{originalError:e}}):"BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR"===e.name?t=new h({type:N.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type,code:N.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code,message:N.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message,details:{originalError:e}}):"BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR"===e.name?t=new h({type:N.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type,code:N.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code,message:N.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message,details:{originalError:e}}):(t=new h({code:N.PAYMENT_REQUEST_NOT_COMPLETED.code,type:e.type||h.types.CUSTOMER,message:N.PAYMENT_REQUEST_NOT_COMPLETED.message,details:{originalError:e}}),i.sendEvent(this._client,"payment-request.tokenize.failed")),n(t)}.bind(this))}.bind(this))},o.prototype.teardown=function(){return this._bus.teardown(),this._frame.parentNode.removeChild(this._frame),c(this,f(o.prototype)),i.sendEvent(this._client,"payment-request.teardown-completed"),_.resolve()},t.exports=m.wrapPrototype(o)},{"../../lib/analytics":12,"../../lib/assign":13,"../../lib/braintree-error":15,"../../lib/bus":18,"../../lib/convert-methods-to-error":20,"../../lib/event-emitter":24,"../../lib/generate-google-pay-configuration":25,"../../lib/methods":28,"../../lib/promise":29,"../../lib/use-min":30,"../../lib/vendor/uuid":32,"../shared/constants":35,"@braintree/iframer":1,"@braintree/wrap-promise":8}],34:[function(e,t,n){"use strict";function r(e){return i.verify({name:"Payment Request",client:e.client}).then(function(){return new o(e).initialize()})}var o=e("./external/payment-request"),i=e("../lib/basic-component-verification"),s=e("@braintree/wrap-promise");t.exports={create:s(r),VERSION:"3.34.0"}},{"../lib/basic-component-verification":14,"./external/payment-request":33,"@braintree/wrap-promise":8}],35:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error"),o=e("../../lib/enumerate"),i={};i.events=o(["FRAME_READY","FRAME_CAN_MAKE_REQUESTS","PAYMENT_REQUEST_INITIALIZED","SHIPPING_ADDRESS_CHANGE","UPDATE_SHIPPING_ADDRESS","SHIPPING_OPTION_CHANGE","UPDATE_SHIPPING_OPTION","PAYMENT_REQUEST_FAILED","PAYMENT_REQUEST_SUCCESSFUL"],"payment-request:"),i.errors={PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS",message:"There are no supported payment methods associated with this account."},PAYMENT_REQUEST_INVALID_UPDATE_WITH_EVENT:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_INVALID_UPDATE_WITH_EVENT"},PAYMENT_REQUEST_CANCELED:{type:r.types.CUSTOMER,code:"PAYMENT_REQUEST_CANCELED",message:"Payment request was canceled."},PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED",message:"Something went wrong when configuring the payment request."},PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE",message:"Something went wrong when tokenizing the Google Pay card."},PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR:{type:r.types.UNKNOWN,code:"PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR",message:"Something went wrong when tokenizing the Google Pay card."},PAYMENT_REQUEST_NOT_COMPLETED:{code:"PAYMENT_REQUEST_NOT_COMPLETED",message:"Payment request could not be completed."},PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE",message:"createSupportedPaymentMethodsConfiguration must include a type parameter."},PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED",message:"createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled."}},t.exports=i},{"../../lib/braintree-error":15,"../../lib/enumerate":22}]},{},[34])(34)});