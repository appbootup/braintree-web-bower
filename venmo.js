!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).venmo=e()}}(function(){return function i(s,a,c){function u(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,a,c)}return a[t].exports}for(var f="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(n,r,e){(function(e){"use strict";var t=n("promise-polyfill");r.exports=e.Promise||t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":15}],2:[function(e,t,n){"use strict";var s=e("./lib/promise"),a={};function r(n){var t,r,o,e,i=JSON.stringify(n);return!n.forceScriptReload&&(e=a[i])?e:(o=document.createElement("script"),t=n.dataAttributes||{},r=n.container||document.head,o.src=n.src,o.id=n.id,o.async=!0,Object.keys(t).forEach(function(e){o.setAttribute("data-"+e,t[e])}),e=new s(function(e,t){o.addEventListener("load",function(){e(o)}),o.addEventListener("error",function(){t(new Error(n.src+" failed to load."))}),o.addEventListener("abort",function(){t(new Error(n.src+" has aborted."))}),r.appendChild(o)}),a[i]=e)}r.clearCache=function(){a={}},t.exports=r},{"./lib/promise":1}],3:[function(e,n,t){(function(t){"use strict";n.exports=function(e){return e=e||t.navigator.userAgent,/Android/.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){"use strict";var r=e("./is-edge"),o=e("./is-samsung");t.exports=function(e){return!(-1===(e=e||navigator.userAgent).indexOf("Chrome")&&-1===e.indexOf("CriOS")||r(e)||o(e))}},{"./is-edge":5,"./is-samsung":10}],5:[function(e,t,n){"use strict";t.exports=function(e){return-1!==(e=e||navigator.userAgent).indexOf("Edge/")}},{}],6:[function(e,n,t){(function(t){"use strict";n.exports=function(e){return e=e||t.navigator.userAgent,/FxiOS/i.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){"use strict";var r=e("./is-ios"),o=/webkit/i;t.exports=function(e){return e=e||navigator.userAgent,r(e)&&e.match(o)&&-1===e.indexOf("CriOS")}},{"./is-ios":8}],8:[function(e,n,t){(function(t){"use strict";n.exports=function(e){return e=e||t.navigator.userAgent,/iPhone|iPod|iPad/i.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,r,t){(function(t){"use strict";var n=e("./is-ios-firefox");r.exports=function(e){return e=e||t.navigator.userAgent,n(e)||/iPhone|iPod|iPad|Mobile|Tablet/i.test(e)&&/Firefox/i.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios-firefox":6}],10:[function(e,n,t){(function(t){"use strict";n.exports=function(e){return e=e||t.navigator.userAgent,/SamsungBrowser/i.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(e,t,n){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],12:[function(e,t,n){"use strict";t.exports=function(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}},{}],13:[function(e,t,n){"use strict";t.exports=function(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}},{}],14:[function(e,t,n){"use strict";var r=e("./lib/deferred"),o=e("./lib/once"),i=e("./lib/promise-or-callback");function a(n){return function(){var e,t=Array.prototype.slice.call(arguments);return"function"==typeof t[t.length-1]&&(e=t.pop(),e=o(r(e))),i(n.apply(this,t),e)}}a.wrapPrototype=function(o,e){var i,s;return i=(e=e||{}).ignoreMethods||[],s=!0===e.transformPrivateMethods,Object.getOwnPropertyNames(o.prototype).filter(function(e){var t,n="constructor"!==e&&"function"==typeof o.prototype[e],r=-1===i.indexOf(e);return t=!!s||"_"!==e.charAt(0),n&&t&&r}).forEach(function(e){var t=o.prototype[e];o.prototype[e]=a(t)}),o},t.exports=a},{"./lib/deferred":11,"./lib/once":12,"./lib/promise-or-callback":13}],15:[function(e,t,n){"use strict";var r=setTimeout;function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function s(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void c(r.promise,e)}a(r.promise,t)}else(1===n._state?a:c)(r.promise,n._value)})):n._deferreds.push(r)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void l((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}var r,o}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return s(this,new f(e,t,n)),n},i.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},i.all=function(t){return new i(function(r,o){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return r([]);var s=i.length;function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){a(t,e)},o)}i[t]=e,0==--s&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)a(e,i[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){r(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],16:[function(e,t,n){"use strict";var s=e("./create-authorization-data"),a=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var n,r=t?a(t):{},o=s(e.authorization).attrs,i=a(e.analyticsMetadata);for(n in r.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,r._meta)r._meta.hasOwnProperty(n)&&(i[n]=r._meta[n]);return r._meta=i,o.tokenizationKey?r.tokenizationKey=o.tokenizationKey:r.authorizationFingerprint=o.authorizationFingerprint,r}},{"./constants":21,"./create-authorization-data":24,"./json-clone":28}],17:[function(e,t,n){"use strict";var r=e("./promise"),u=e("./constants"),f=e("./add-metadata");function l(e){return Math.floor(e/1e3)}t.exports={sendEvent:function(e,s,a){var c=l(Date.now());return r.resolve(e).then(function(e){var t=l(Date.now()),n=e.getConfiguration(),r=e._request,o=n.gatewayConfiguration.analytics.url,i={analytics:[{kind:u.ANALYTICS_PREFIX+s,isAsync:t!==c,timestamp:c}]};r({url:o,method:"post",data:f(n,i),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},a)})}}},{"./add-metadata":16,"./constants":21,"./promise":30}],18:[function(e,t,n){"use strict";var r=e("@braintree/asset-loader/load-script");t.exports={loadScript:r}},{"@braintree/asset-loader/load-script":2}],19:[function(e,t,n){"use strict";var o=e("./braintree-error"),i=e("./promise"),s=e("./errors");t.exports={verify:function(e){var t,n,r;return e?(r=e.name,t=e.client,n=e.authorization,null==t&&null==n?i.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):n||"3.43.0"===t.getVersion()?i.resolve():i.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t.getVersion()+") and "+r+" (version 3.43.0) components must be from the same SDK version."}))):i.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":20,"./errors":27,"./promise":30}],20:[function(e,t,n){"use strict";var r=e("./enumerate");function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}((o.prototype=Object.create(Error.prototype)).constructor=o).types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":26}],21:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:{production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.43.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.43.0"}},{}],22:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":20,"./errors":27}],23:[function(e,t,n){"use strict";var r=e("./constants").ASSETS_URLS;t.exports={create:function(e){return r.production}}},{"./constants":21}],24:[function(e,t,n){"use strict";var s=e("../lib/vendor/polyfill").atob,a=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,n,r,o,i={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(r=e.split("_"),o=r[0],n={merchantId:r.slice(2).join("_"),environment:o},i.environment=n.environment,i.attrs.tokenizationKey=e,i.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.environment=t.environment,i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQL=t.graphQL),i}},{"../lib/constants":21,"../lib/vendor/polyfill":32}],25:[function(e,t,n){(function(n){"use strict";var r=e("./braintree-error"),o=e("./promise"),i=e("./assets"),s=e("./errors"),a="3.43.0";t.exports={create:function(e){var t=o.resolve();return e.client?o.resolve(e.client):(n.braintree&&n.braintree.client||(t=i.loadScript({src:e.assetsUrl+"/web/"+a+"/js/client.min.js"}).catch(function(e){return o.reject(new r({type:s.CLIENT_SCRIPT_FAILED_TO_LOAD.type,code:s.CLIENT_SCRIPT_FAILED_TO_LOAD.code,message:s.CLIENT_SCRIPT_FAILED_TO_LOAD.message,details:{originalError:e}}))})),t.then(function(){return n.braintree.client.VERSION!==a?o.reject(new r({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n.braintree.client.VERSION+") and "+e.name+" (version "+a+") components must be from the same SDK version."})):n.braintree.client.create({authorization:e.authorization,debug:e.debug})}))}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./assets":18,"./braintree-error":20,"./errors":27,"./promise":30}],26:[function(e,t,n){"use strict";t.exports=function(e,n){return n=null==n?"":n,e.reduce(function(e,t){return e[t]=n+t,e},{})}},{}],27:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:r.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":20}],28:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],29:[function(e,t,n){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],30:[function(n,r,e){(function(e){"use strict";var t=e.Promise||n("promise-polyfill");r.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":15}],31:[function(e,n,t){(function(t){"use strict";function a(e,t){var n,r,o,i,s=[];for(o in e)e.hasOwnProperty(o)&&(r=e[o],n=t?(i=e)&&"object"==typeof i&&"number"==typeof i.length&&"[object Array]"===Object.prototype.toString.call(i)?t+"[]":t+"["+o+"]":o,"object"==typeof r?s.push(a(r,n)):s.push(encodeURIComponent(n)+"="+encodeURIComponent(r)));return s.join("&")}n.exports={parse:function(e){return e=e||t.location.href,/\?/.test(e)?e.replace(/#.*$/,"").replace(/^.*\?/,"").split("&").reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[r]=o,e},{}):{}},stringify:a,queryify:function(e,t){return e=e||"",null!=t&&"object"==typeof t&&function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=a(t)),e}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],32:[function(e,r,t){(function(t){"use strict";var n="function"==typeof t.atob?t.atob:e;function e(e){var t,n,r,o,i,s,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(s=0;t=(63&a.indexOf(e.charAt(s++)))<<2|(o=a.indexOf(e.charAt(s++)))>>4&3,n=(15&o)<<4|(i=a.indexOf(e.charAt(s++)))>>2&15,r=(3&i)<<6|63&a.indexOf(e.charAt(s++)),c+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):""),s<e.length;);return c}r.exports={atob:function(e){return n.call(t,e)},_atob:e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],33:[function(e,t,n){"use strict";var o=e("../lib/analytics"),i=e("../lib/basic-component-verification"),s=e("../lib/create-deferred-client"),a=e("../lib/create-assets-url"),c=e("./shared/errors"),r=e("@braintree/wrap-promise"),u=e("../lib/braintree-error"),f=e("./venmo"),l=e("../lib/promise"),d=e("./shared/supports-venmo");t.exports={create:r(function(r){return i.verify({name:"Venmo",client:r.client,authorization:r.authorization}).then(function(){return s.create({authorization:r.authorization,client:r.client,debug:r.debug,assetsUrl:a.create(r.authorization),name:"Venmo"})}).then(function(e){var t,n=e.getConfiguration();return r.client=e,n.gatewayConfiguration.payWithVenmo?r.profileId&&"string"!=typeof r.profileId?l.reject(new u(c.VENMO_INVALID_PROFILE_ID)):r.deepLinkReturnUrl&&"string"!=typeof r.deepLinkReturnUrl?l.reject(new u(c.VENMO_INVALID_DEEP_LINK_RETURN_URL)):(t=new f(r),o.sendEvent(r.client,"venmo.initialized"),t._initialize()):l.reject(new u(c.VENMO_NOT_ENABLED))})}),isBrowserSupported:function(e){return d.isBrowserSupported(e)},VERSION:"3.43.0"}},{"../lib/analytics":17,"../lib/basic-component-verification":19,"../lib/braintree-error":20,"../lib/create-assets-url":23,"../lib/create-deferred-client":25,"../lib/promise":30,"./shared/errors":36,"./shared/supports-venmo":37,"./venmo":38,"@braintree/wrap-promise":14}],34:[function(e,t,n){"use strict";var r=e("@braintree/browser-detection/is-android"),o=e("@braintree/browser-detection/is-chrome"),i=e("@braintree/browser-detection/is-ios"),s=e("@braintree/browser-detection/is-ios-safari"),a=e("@braintree/browser-detection/is-samsung"),c=e("@braintree/browser-detection/is-mobile-firefox");t.exports={isAndroid:r,isChrome:o,isIos:i,isIosSafari:s,isSamsungBrowser:a,isMobileFirefox:c}},{"@braintree/browser-detection/is-android":3,"@braintree/browser-detection/is-chrome":4,"@braintree/browser-detection/is-ios":8,"@braintree/browser-detection/is-ios-safari":7,"@braintree/browser-detection/is-mobile-firefox":9,"@braintree/browser-detection/is-samsung":10}],35:[function(e,t,n){"use strict";t.exports={DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY:500,PROCESS_RESULTS_DELAY:1e3,VENMO_OPEN_URL:"https://venmo.com/braintree/checkout"}},{}],36:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={VENMO_NOT_ENABLED:{type:r.types.MERCHANT,code:"VENMO_NOT_ENABLED",message:"Venmo is not enabled for this merchant."},VENMO_TOKENIZATION_REQUEST_ACTIVE:{type:r.types.MERCHANT,code:"VENMO_TOKENIZATION_REQUEST_ACTIVE",message:"Another tokenization request is active."},VENMO_APP_FAILED:{type:r.types.UNKNOWN,code:"VENMO_APP_FAILED",message:"Venmo app encountered a problem."},VENMO_APP_CANCELED:{type:r.types.CUSTOMER,code:"VENMO_APP_CANCELED",message:"Venmo app authorization was canceled."},VENMO_CANCELED:{type:r.types.CUSTOMER,code:"VENMO_CANCELED",message:"User canceled Venmo authorization, or Venmo app is not available."},VENMO_INVALID_PROFILE_ID:{type:r.types.MERCHANT,code:"VENMO_INVALID_PROFILE_ID",message:"Venmo profile ID is invalid."},VENMO_INVALID_DEEP_LINK_RETURN_URL:{type:r.types.MERCHANT,code:"VENMO_INVALID_DEEP_LINK_RETURN_URL",message:"Venmo deep link return URL is invalid."}}},{"../../lib/braintree-error":20}],37:[function(e,t,n){"use strict";var i=e("./browser-detection");t.exports={isBrowserSupported:function(e){var t=i.isAndroid()&&i.isChrome(),n=i.isIos()&&i.isChrome(),r=i.isIosSafari()||t,o=n||i.isSamsungBrowser()||i.isMobileFirefox();return e=e||{allowNewBrowserTab:!0},r||e.allowNewBrowserTab&&o}}},{"./browser-detection":34}],38:[function(_,E,e){(function(i){"use strict";var s=_("../lib/analytics"),e=_("./shared/supports-venmo"),a=_("./shared/constants"),c=_("./shared/errors"),u=_("../lib/querystring"),t=_("../lib/methods"),n=_("../lib/convert-methods-to-error"),r=_("@braintree/wrap-promise"),f=_("../lib/braintree-error"),l=_("../lib/promise");function o(e){var t;this._client=e.client,t=this._client.getConfiguration(),this._isDebug=t.isDebug,this._assetsUrl=t.gatewayConfiguration.assetsUrl+"/web/3.43.0",this._allowNewBrowserTab=!1!==e.allowNewBrowserTab,this._profileId=e.profileId,this._deepLinkReturnUrl=e.deepLinkReturnUrl}function d(){return i.location.hash.substring(1).split("&").reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[r]=o,e},{})}function p(){var e;return void 0!==i.document.hidden?e="visibilitychange":void 0!==i.document.msHidden?e="msvisibilitychange":void 0!==i.document.webkitHidden&&(e="webkitvisibilitychange"),e}o.prototype._initialize=function(){var e={},t=this._deepLinkReturnUrl||i.location.href.replace(i.location.hash,""),n=this._client.getConfiguration().gatewayConfiguration.payWithVenmo,r=this._client.getConfiguration().analyticsMetadata,o={_meta:{version:r.sdkVersion,integration:r.integration,platform:r.platform,sessionId:r.sessionId}};return e["x-success"]=t+"#venmoSuccess=1",e["x-cancel"]=t+"#venmoCancel=1",e["x-error"]=t+"#venmoError=1",e.ua=i.navigator.userAgent,e.braintree_merchant_id=this._profileId||n.merchantId,e.braintree_access_token=n.accessToken,e.braintree_environment=n.environment,e.braintree_sdk_data=btoa(JSON.stringify(o)),this._url=a.VENMO_OPEN_URL+"?"+u.stringify(e),l.resolve(this)},o.prototype.isBrowserSupported=function(){return e.isBrowserSupported({allowNewBrowserTab:this._allowNewBrowserTab})},o.prototype.hasTokenizationResult=function(){var e=d();return void 0!==(e.venmoSuccess||e.venmoError||e.venmoCancel)},o.prototype.tokenize=function(){var n=this;return!0===this._tokenizationInProgress?l.reject(new f(c.VENMO_TOKENIZATION_REQUEST_ACTIVE)):this.hasTokenizationResult()?this._processResults():new l(function(e,t){n._tokenizationInProgress=!0,n._previousHash=i.location.hash,n._deepLinkReturnUrl?i.location=n._url:i.open(n._url),n._visibilityChangeListener=function(){i.document.hidden||(n._tokenizationInProgress=!1,setTimeout(function(){n._processResults().then(e).catch(t).then(function(){i.location.hash=n._previousHash,n._removeVisibilityEventListener(),delete n._visibilityChangeListener})},a.PROCESS_RESULTS_DELAY))},setTimeout(function(){i.document.addEventListener(p(),n._visibilityChangeListener)},a.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY)})},o.prototype.teardown=function(){return this._removeVisibilityEventListener(),n(this,t(o.prototype)),l.resolve()},o.prototype._removeVisibilityEventListener=function(){i.document.removeEventListener(p(),this._visibilityChangeListener)},o.prototype._processResults=function(){var r=this,o=d();return new l(function(e,t){var n;o.venmoSuccess?(s.sendEvent(r._client,"venmo.appswitch.handle.success"),e({nonce:(n=o).paymentMethodNonce,type:"VenmoAccount",details:{username:n.username}})):o.venmoError?(s.sendEvent(r._client,"venmo.appswitch.handle.error"),t(new f({type:c.VENMO_APP_FAILED.type,code:c.VENMO_APP_FAILED.code,message:c.VENMO_APP_FAILED.message,details:{originalError:{message:decodeURIComponent(o.errorMessage),code:o.errorCode}}}))):o.venmoCancel?(s.sendEvent(r._client,"venmo.appswitch.handle.cancel"),t(new f(c.VENMO_APP_CANCELED))):(s.sendEvent(r._client,"venmo.appswitch.cancel-or-unavailable"),t(new f(c.VENMO_CANCELED))),"function"==typeof i.history.replaceState&&i.location.hash&&history.pushState({},"",i.location.href.slice(0,i.location.href.indexOf("#")))})},E.exports=r.wrapPrototype(o)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":17,"../lib/braintree-error":20,"../lib/convert-methods-to-error":22,"../lib/methods":29,"../lib/promise":30,"../lib/querystring":31,"./shared/constants":35,"./shared/errors":36,"./shared/supports-venmo":37,"@braintree/wrap-promise":14}]},{},[33])(33)});