!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).paymentRequest=e()}}(function(){return function i(s,a,c){function u(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(p)return p(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,a,c)}return a[t].exports}for(var p="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=i({},o,e);return n.style&&"string"!=typeof n.style&&(i(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":2,"./lib/default-attributes":3,"./lib/set-attributes":4}],2:[function(e,t,n){"use strict";t.exports=function(n){return Array.prototype.slice.call(arguments,1).forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(e){n[e]=t[e]})}),n}},{}],3:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],4:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(null==(n=t[r])?e.removeAttribute(r):e.setAttribute(r,n))}},{}],5:[function(e,t,n){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],6:[function(e,t,n){"use strict";t.exports=function(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}},{}],7:[function(e,t,n){"use strict";t.exports=function(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}},{}],8:[function(e,t,n){"use strict";var r=e("./lib/deferred"),o=e("./lib/once"),i=e("./lib/promise-or-callback");function a(n){return function(){var e,t=Array.prototype.slice.call(arguments);return"function"==typeof t[t.length-1]&&(e=t.pop(),e=o(r(e))),i(n.apply(this,t),e)}}a.wrapPrototype=function(o,e){var i,s;return i=(e=e||{}).ignoreMethods||[],s=!0===e.transformPrivateMethods,Object.getOwnPropertyNames(o.prototype).filter(function(e){var t,n="constructor"!==e&&"function"==typeof o.prototype[e],r=-1===i.indexOf(e);return t=!!s||"_"!==e.charAt(0),n&&t&&r}).forEach(function(e){var t=o.prototype[e];o.prototype[e]=a(t)}),o},t.exports=a},{"./lib/deferred":5,"./lib/once":6,"./lib/promise-or-callback":7}],9:[function(e,N,t){(function(t){"use strict";var r,s,i=[],a={},c="/*framebus*/";function e(e){var t,n=u(this);return!p(e)&&(!p(n)&&(!1!==(t=l(e,Array.prototype.slice.call(arguments,1),n))&&(T(r.top||r.self,t,n),!0)))}function n(e,t){var n=u(this);return!m(e,t,n)&&(a[n]=a[n]||{},a[n][e]=a[n][e]||[],a[n][e].push(t),!0)}function o(e,t){var n,r,o=u(this);if(m(e,t,o))return!1;if(!(r=a[o]&&a[o][e]))return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function u(e){return e&&e._origin||"*"}function p(e){return"string"!=typeof e}function l(e,t,n){var r=!1,o={event:e,origin:n},i=t[t.length-1];"function"==typeof i&&(o.reply=y(i,n),t=t.slice(0,-1)),o.args=t;try{r=c+JSON.stringify(o)}catch(e){throw new Error("Could not stringify event: "+e.message)}return r}function E(e){var t,n,r,o;if(e.data.slice(0,c.length)!==c)return!1;try{t=JSON.parse(e.data.slice(c.length))}catch(e){return!1}return null!=t.reply&&(n=e.origin,r=e.source,o=t.reply,t.reply=function(e){var t=l(o,[e],n);if(!1===t)return!1;r.postMessage(t,n)},t.args.push(t.reply)),t}function f(e){r||((r=e||t).addEventListener?r.addEventListener("message",d,!1):r.attachEvent?r.attachEvent("onmessage",d):null===r.onmessage?r.onmessage=d:r=null)}function _(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function d(e){var t;p(e.data)||(t=E(e))&&(h("*",t.event,t.args,e),h(e.origin,t.event,t.args,e),function(e,t,n){var r,o;for(r=i.length-1;0<=r;r--)!0===(o=i[r]).closed?i=i.slice(r,1):n!==o&&T(o.top,e,t)}(e.data,t.origin,e.source))}function h(e,t,n,r){var o;if(a[e]&&a[e][t])for(o=0;o<a[e][t].length;o++)a[e][t][o].apply(r,n)}function T(e,t,n){var r,o,i=0;try{for(e.postMessage(t,n),(o=e).top===o&&null!=o.opener&&o.opener!==o&&!0!==o.opener.closed&&T(e.opener.top,t,n);r=e.frames[i];)T(r,t,n),i++}catch(e){}}function y(r,o){var i=_();return s.target(o).subscribe(i,function e(t,n){r(t,n),s.target(o).unsubscribe(i,e)}),i}function m(e,t,n){return!!p(e)||("function"!=typeof t||!!p(n))}f(),s={target:function(e){var t,n={};for(t in s)s.hasOwnProperty(t)&&(n[t]=s[t]);return n._origin=e||"*",n},_packagePayload:l,_unpackPayload:E,_attach:f,_detach:function(){null!=r&&(r.removeEventListener?r.removeEventListener("message",d,!1):r.detachEvent?r.detachEvent("onmessage",d):r.onmessage===d&&(r.onmessage=null),r=null,i=[],a={})},_dispatch:h,_broadcast:T,_subscribeReplier:y,_subscriptionArgsInvalid:m,_onmessage:d,_uuid:_,_getSubscribers:function(){return a},_win:function(){return r},include:function(e){return null!=e&&null!=e.Window&&e.constructor===e.Window&&(i.push(e),!0)},publish:e,pub:e,trigger:e,emit:e,subscribe:n,sub:n,on:n,unsubscribe:o,unsub:o,off:o},N.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){"use strict";var r=setTimeout;function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function s(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void c(r.promise,e)}a(r.promise,t)}else(1===n._state?a:c)(r.promise,n._value)})):n._deferreds.push(r)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void l((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}var r,o}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return s(this,new p(e,t,n)),n},i.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},i.all=function(t){return new i(function(r,o){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return r([]);var s=i.length;function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){a(t,e)},o)}i[t]=e,0==--s&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)a(e,i[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){r(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],11:[function(e,t,n){"use strict";var s=e("./create-authorization-data"),a=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var n,r=t?a(t):{},o=s(e.authorization).attrs,i=a(e.analyticsMetadata);for(n in r.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,r._meta)r._meta.hasOwnProperty(n)&&(i[n]=r._meta[n]);return r._meta=i,o.tokenizationKey?r.tokenizationKey=o.tokenizationKey:r.authorizationFingerprint=o.authorizationFingerprint,r}},{"./constants":19,"./create-authorization-data":21,"./json-clone":27}],12:[function(e,t,n){"use strict";var u=e("./constants"),p=e("./add-metadata");t.exports={sendEvent:function(e,t,n){var r,o=e.getConfiguration(),i=e._request,s=(r=Date.now(),Math.floor(r/1e3)),a=o.gatewayConfiguration.analytics.url,c={analytics:[{kind:u.ANALYTICS_PREFIX+t,timestamp:s}]};i({url:a,method:"post",data:p(o,c),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},n)}}},{"./add-metadata":11,"./constants":19}],13:[function(e,t,n){"use strict";var r="function"==typeof Object.assign?Object.assign:o;function o(e){var t,n,r;for(t=1;t<arguments.length;t++)for(r in n=arguments[t])n.hasOwnProperty(r)&&(e[r]=n[r]);return e}t.exports={assign:r,_assign:o}},{}],14:[function(e,t,n){"use strict";var o=e("./braintree-error"),i=e("./promise"),s=e("./errors");t.exports={verify:function(e){var t,n,r;return e?(r=e.name,null==(t=e.client)?i.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):"3.36.0"!==(n=t.getVersion())?i.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version 3.36.0) components must be from the same SDK version."})):i.resolve()):i.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":15,"./errors":23,"./promise":29}],15:[function(e,t,n){"use strict";var r=e("./enumerate");function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}((o.prototype=Object.create(Error.prototype)).constructor=o).types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":22}],16:[function(e,t,n){"use strict";var o=e("../is-whitelisted-domain");t.exports={checkOrigin:function(e,t){var n,r=document.createElement("a");return r.href=t,n="https:"===r.protocol?r.host.replace(/:443$/,""):"http:"===r.protocol?r.host.replace(/:80$/,""):r.host,r.protocol+"//"+n===e||(r.href=e,o(e))}}},{"../is-whitelisted-domain":26}],17:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":22}],18:[function(e,t,n){"use strict";var s=e("framebus"),r=e("./events"),a=e("./check-origin").checkOrigin,o=e("../braintree-error");function i(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new o({type:o.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}i.prototype.on=function(e,t){var n,r,o=t,i=this;this._isDestroyed||(this.merchantUrl&&(o=function(){a(this.origin,i.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),(r=Array.prototype.slice.call(arguments))[0]=n,r[1]=o,this._log("on",r),s.on.apply(s,r),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},i.prototype.emit=function(e){var t;this._isDestroyed||((t=Array.prototype.slice.call(arguments))[0]=this._namespaceEvent(e),this._log("emit",t),s.emit.apply(s,t))},i.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),s.off.apply(s,t))},i.prototype.off=function(e,t){var n,r,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)(r=this._listeners[n]).originalHandler===t&&(o=r.handler);this._offDirect(e,o)}},i.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},i.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},i.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},i.events=r,t.exports=i},{"../braintree-error":15,"./check-origin":16,"./events":17,framebus:9}],19:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.36.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.36.0"}},{}],20:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":15,"./errors":23}],21:[function(e,t,n){"use strict";var s=e("../lib/vendor/polyfill").atob,a=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,n,r,o,i={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(r=e.split("_"),o=r[0],n={merchantId:r.slice(2).join("_"),environment:o},i.attrs.tokenizationKey=e,i.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQL=t.graphQL),i}},{"../lib/constants":19,"../lib/vendor/polyfill":31}],22:[function(e,t,n){"use strict";t.exports=function(e,n){return n=null==n?"":n,e.reduce(function(e,t){return e[t]=n+t,e},{})}},{}],23:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":15}],24:[function(e,t,n){"use strict";function r(){this._events={}}r.prototype.on=function(e,t){this._events[e]?this._events[e].push(t):this._events[e]=[t]},r.prototype._emit=function(e){var t,n,r=this._events[e];if(r)for(n=Array.prototype.slice.call(arguments,1),t=0;t<r.length;t++)r[t].apply(null,n)},t.exports=r},{}],25:[function(e,t,n){"use strict";t.exports=function(e){var t="production"===e.gatewayConfiguration.environment,n=e.gatewayConfiguration.androidPay,r=e.analyticsMetadata,o={environment:t?"PRODUCTION":"TEST",allowedPaymentMethods:["CARD","TOKENIZED_CARD"],paymentMethodTokenizationParameters:{tokenizationType:"PAYMENT_GATEWAY",parameters:{gateway:"braintree","braintree:merchantId":e.gatewayConfiguration.merchantId,"braintree:authorizationFingerprint":n.googleAuthorizationFingerprint,"braintree:apiVersion":"v1","braintree:sdkVersion":"3.36.0","braintree:metadata":JSON.stringify({source:r.source,integration:r.integration,sessionId:r.sessionId,version:"3.36.0",platform:r.platform})}},cardRequirements:{allowedCardNetworks:n.supportedNetworks.map(function(e){return e.toUpperCase()})}};return"TOKENIZATION_KEY"===e.authorizationType&&(o.paymentMethodTokenizationParameters.parameters["braintree:clientKey"]=e.authorization),o}},{}],26:[function(e,t,n){"use strict";var r,o={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=function(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&((r=r||document.createElement("a")).href=e,t=r.hostname.split(".").slice(-2).join("."),o.hasOwnProperty(t))}},{}],27:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],28:[function(e,t,n){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],29:[function(n,r,e){(function(e){"use strict";var t=e.Promise||n("promise-polyfill");r.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],30:[function(e,t,n){"use strict";t.exports=function(e){return e?"":".min"}},{}],31:[function(e,r,t){(function(t){"use strict";var n="function"==typeof t.atob?t.atob:e;function e(e){var t,n,r,o,i,s,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(s=0;t=(63&a.indexOf(e.charAt(s++)))<<2|(o=a.indexOf(e.charAt(s++)))>>4&3,n=(15&o)<<4|(i=a.indexOf(e.charAt(s++)))>>2&15,r=(3&i)<<6|63&a.indexOf(e.charAt(s++)),c+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):""),s<e.length;);return c}r.exports={atob:function(e){return n.call(t,e)},_atob:e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],32:[function(e,t,n){"use strict";t.exports=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},{}],33:[function(e,t,n){"use strict";var s=e("../../lib/analytics"),o=e("../../lib/assign").assign,r=e("../../lib/bus"),i=e("../../lib/convert-methods-to-error"),a=e("../../lib/generate-google-pay-configuration"),c=e("@braintree/iframer"),u=e("../../lib/vendor/uuid"),p=e("../../lib/use-min"),l=e("../../lib/methods"),E=e("../../lib/promise"),f=e("../../lib/event-emitter"),_=e("../../lib/braintree-error"),d=e("../shared/constants").events,h=e("../shared/constants").errors,T=e("@braintree/wrap-promise"),y={Visa:"visa",MasterCard:"mastercard","American Express":"amex","Diners Club":"diners",Discover:"discover",JCB:"jcb",UnionPay:"unionpay",Maestro:"maestro"};function m(e){var t=e.enabledPaymentMethods||{};f.call(this),this._componentId=u(),this._client=e.client,this._enabledPaymentMethods={basicCard:!1!==t.basicCard,googlePay:!1!==t.googlePay},this._supportedPaymentMethods=this._constructDefaultSupportedPaymentMethods(),this._defaultSupportedPaymentMethods=Object.keys(this._supportedPaymentMethods).map(function(e){return this._supportedPaymentMethods[e]}.bind(this)),this._bus=new r({channel:this._componentId})}(m.prototype=Object.create(f.prototype,{constructor:m}))._constructDefaultSupportedPaymentMethods=function(){var e=this._client.getConfiguration(),t=e.gatewayConfiguration.androidPay,n=e.gatewayConfiguration.creditCards,r={};return this._enabledPaymentMethods.basicCard&&n&&0<n.supportedCardTypes.length&&(r.basicCard={supportedMethods:["basic-card"],data:{supportedNetworks:n.supportedCardTypes.reduce(function(e,t){return t in y&&e.push(y[t]),e},[])}}),this._enabledPaymentMethods.googlePay&&t&&t.enabled&&(r.googlePay={supportedMethods:["https://google.com/pay"],data:o({apiVersion:1,merchantId:"18278000977346790994"},a(e))}),r},m.prototype.initialize=function(){var o=this._client.getConfiguration(),i=this;return this._frame=c({allowPaymentRequest:!0,name:"braintree-payment-request-frame",class:"braintree-payment-request-frame",height:0,width:0,style:{position:"absolute",left:"-9999px"},title:"Secure Payment Frame"}),0===this._defaultSupportedPaymentMethods.length?E.reject(new _(h.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS)):new E(function(e){var t,n,r;i._bus.on(d.FRAME_READY,function(e){e(i._client)}),i._bus.on(d.FRAME_CAN_MAKE_REQUESTS,function(){s.sendEvent(i._client,"payment-request.initialized"),i._bus.on(d.SHIPPING_ADDRESS_CHANGE,function(e){var t={target:{shippingAddress:e},updateWith:function(e){i._bus.emit(d.UPDATE_SHIPPING_ADDRESS,e)}};i._emit("shippingAddressChange",t),i._emit("shippingaddresschange",t)}),i._bus.on(d.SHIPPING_OPTION_CHANGE,function(e){var t={target:{shippingOption:e},updateWith:function(e){i._bus.emit(d.UPDATE_SHIPPING_OPTION,e)}};i._emit("shippingOptionChange",t),i._emit("shippingoptionchange",t)}),e(i)}),i._frame.src=(t=o.gatewayConfiguration.assetsUrl,n=i._componentId,r=o.isDebug,t+"/web/3.36.0/html/payment-request-frame"+p(r)+".html#"+n),document.body.appendChild(i._frame)})},m.prototype.createSupportedPaymentMethodsConfiguration=function(e,t){var n;if(!e)throw new _(h.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE);if(!this._enabledPaymentMethods[e])throw new _(h.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED);return(n=o({},this._supportedPaymentMethods[e])).data=o({},n.data,t),n},m.prototype.tokenize=function(e){return new E(function(t,n){this._bus.emit(d.PAYMENT_REQUEST_INITIALIZED,{supportedPaymentMethods:e.supportedPaymentMethods||this._defaultSupportedPaymentMethods,details:e.details,options:e.options}),this._bus.on(d.PAYMENT_REQUEST_SUCCESSFUL,function(e){s.sendEvent(this._client,"payment-request.tokenize.succeeded"),t({nonce:e.nonce,type:e.type,description:e.description,details:{rawPaymentResponse:e.details.rawPaymentResponse,cardType:e.details.cardType,lastFour:e.details.lastFour,lastTwo:e.details.lastTwo},binData:e.binData})}.bind(this)),this._bus.on(d.PAYMENT_REQUEST_FAILED,function(e){var t;"AbortError"===e.name?(t=new _({type:h.PAYMENT_REQUEST_CANCELED.type,code:h.PAYMENT_REQUEST_CANCELED.code,message:h.PAYMENT_REQUEST_CANCELED.message,details:{originalError:e}}),s.sendEvent(this._client,"payment-request.tokenize.canceled")):"PAYMENT_REQUEST_INITIALIZATION_FAILED"===e.name?t=new _({type:h.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,code:h.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,message:h.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,details:{originalError:e}}):"BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR"===e.name?t=new _({type:h.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type,code:h.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code,message:h.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message,details:{originalError:e}}):"BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR"===e.name?t=new _({type:h.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type,code:h.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code,message:h.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message,details:{originalError:e}}):(t=new _({code:h.PAYMENT_REQUEST_NOT_COMPLETED.code,type:e.type||_.types.CUSTOMER,message:h.PAYMENT_REQUEST_NOT_COMPLETED.message,details:{originalError:e}}),s.sendEvent(this._client,"payment-request.tokenize.failed")),n(t)}.bind(this))}.bind(this))},m.prototype.teardown=function(){return this._bus.teardown(),this._frame.parentNode.removeChild(this._frame),i(this,l(m.prototype)),s.sendEvent(this._client,"payment-request.teardown-completed"),E.resolve()},t.exports=T.wrapPrototype(m)},{"../../lib/analytics":12,"../../lib/assign":13,"../../lib/braintree-error":15,"../../lib/bus":18,"../../lib/convert-methods-to-error":20,"../../lib/event-emitter":24,"../../lib/generate-google-pay-configuration":25,"../../lib/methods":28,"../../lib/promise":29,"../../lib/use-min":30,"../../lib/vendor/uuid":32,"../shared/constants":35,"@braintree/iframer":1,"@braintree/wrap-promise":8}],34:[function(e,t,n){"use strict";var r=e("./external/payment-request"),o=e("../lib/basic-component-verification"),i=e("@braintree/wrap-promise");t.exports={create:i(function(e){return o.verify({name:"Payment Request",client:e.client}).then(function(){return new r(e).initialize()})}),VERSION:"3.36.0"}},{"../lib/basic-component-verification":14,"./external/payment-request":33,"@braintree/wrap-promise":8}],35:[function(e,t,n){"use strict";var r=e("../../lib/enumerate"),o=e("./errors"),i={};i.events=r(["FRAME_READY","FRAME_CAN_MAKE_REQUESTS","PAYMENT_REQUEST_INITIALIZED","SHIPPING_ADDRESS_CHANGE","UPDATE_SHIPPING_ADDRESS","SHIPPING_OPTION_CHANGE","UPDATE_SHIPPING_OPTION","PAYMENT_REQUEST_FAILED","PAYMENT_REQUEST_SUCCESSFUL"],"payment-request:"),i.errors=o,t.exports=i},{"../../lib/enumerate":22,"./errors":36}],36:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS",message:"There are no supported payment methods associated with this account."},PAYMENT_REQUEST_CANCELED:{type:r.types.CUSTOMER,code:"PAYMENT_REQUEST_CANCELED",message:"Payment request was canceled."},PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED",message:"Something went wrong when configuring the payment request."},PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE",message:"Something went wrong when tokenizing the Google Pay card."},PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR:{type:r.types.UNKNOWN,code:"PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR",message:"Something went wrong when tokenizing the Google Pay card."},PAYMENT_REQUEST_NOT_COMPLETED:{code:"PAYMENT_REQUEST_NOT_COMPLETED",message:"Payment request could not be completed."},PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE",message:"createSupportedPaymentMethodsConfiguration must include a type parameter."},PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED:{type:r.types.MERCHANT,code:"PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED",message:"createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled."}}},{"../../lib/braintree-error":15}]},{},[34])(34)});