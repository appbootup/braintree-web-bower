!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).usBankAccount=e()}}(function(){return function i(a,s,c){function u(t,e){if(!s[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=s[t]={exports:{}};a[t][0].call(r.exports,function(e){return u(a[t][1][e]||e)},r,r.exports,i,a,s,c)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],2:[function(e,t,n){"use strict";t.exports=function(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}},{}],3:[function(e,t,n){"use strict";t.exports=function(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}},{}],4:[function(e,t,n){"use strict";var o=e("./lib/deferred"),r=e("./lib/once"),i=e("./lib/promise-or-callback");function s(n){return function(){var e,t=Array.prototype.slice.call(arguments);return"function"==typeof t[t.length-1]&&(e=t.pop(),e=r(o(e))),i(n.apply(this,t),e)}}s.wrapPrototype=function(r,e){var i,a;return i=(e=e||{}).ignoreMethods||[],a=!0===e.transformPrivateMethods,Object.getOwnPropertyNames(r.prototype).filter(function(e){var t,n="constructor"!==e&&"function"==typeof r.prototype[e],o=-1===i.indexOf(e);return t=!!a||"_"!==e.charAt(0),n&&t&&o}).forEach(function(e){var t=r.prototype[e];r.prototype[e]=s(t)}),r},t.exports=s},{"./lib/deferred":1,"./lib/once":2,"./lib/promise-or-callback":3}],5:[function(e,t,n){"use strict";var o=setTimeout;function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],_(e,this)}function a(n,o){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e=1===n._state?o.onFulfilled:o.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void c(o.promise,e)}s(o.promise,t)}else(1===n._state?s:c)(o.promise,n._value)})):n._deferreds.push(o)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void _((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}var o,r}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function _(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new l(e,t,n)),n},i.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},i.all=function(t){return new i(function(o,r){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return o([]);var a=i.length;function s(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){s(t,e)},r)}i[t]=e,0==--a&&o(i)}catch(e){r(e)}}for(var e=0;e<i.length;e++)s(e,i[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(r){return new i(function(e,t){for(var n=0,o=r.length;n<o;n++)r[n].then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){o(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],6:[function(e,t,n){"use strict";var a=e("./create-authorization-data"),s=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var n,o=t?s(t):{},r=a(e.authorization).attrs,i=s(e.analyticsMetadata);for(n in o.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,o._meta)o._meta.hasOwnProperty(n)&&(i[n]=o._meta[n]);return o._meta=i,r.tokenizationKey?o.tokenizationKey=r.tokenizationKey:o.authorizationFingerprint=r.authorizationFingerprint,o}},{"./constants":11,"./create-authorization-data":13,"./json-clone":16}],7:[function(e,t,n){"use strict";var u=e("./constants"),l=e("./add-metadata");t.exports={sendEvent:function(e,t,n){var o,r=e.getConfiguration(),i=e._request,a=(o=Date.now(),Math.floor(o/1e3)),s=r.gatewayConfiguration.analytics.url,c={analytics:[{kind:u.ANALYTICS_PREFIX+t,timestamp:a}]};i({url:s,method:"post",data:l(r,c),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},n)}}},{"./add-metadata":6,"./constants":11}],8:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./promise"),a=e("./errors");t.exports={verify:function(e){var t,n,o;return e?(o=e.name,null==(t=e.client)?i.reject(new r({type:a.INSTANTIATION_OPTION_REQUIRED.type,code:a.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+o+"."})):"3.38.0"!==(n=t.getVersion())?i.reject(new r({type:a.INCOMPATIBLE_VERSIONS.type,code:a.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+o+" (version 3.38.0) components must be from the same SDK version."})):i.resolve()):i.reject(new r({type:a.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:a.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":9,"./errors":15,"./promise":19}],9:[function(e,t,n){"use strict";var o=e("./enumerate");function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}((r.prototype=Object.create(Error.prototype)).constructor=r).types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":14}],10:[function(e,t,n){"use strict";t.exports=function(n){return Object.keys(n).reduce(function(e,t){return e[t.replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1_$2").toLowerCase()]=n[t],e},{})}},{}],11:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.38.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.38.0"}},{}],12:[function(e,t,n){"use strict";var o=e("./braintree-error"),r=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new o({type:r.METHOD_CALLED_AFTER_TEARDOWN.type,code:r.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":9,"./errors":15}],13:[function(e,t,n){"use strict";var a=e("../lib/vendor/polyfill").atob,s=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,n,o,r,i={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(o=e.split("_"),r=o[0],n={merchantId:o.slice(2).join("_"),environment:r},i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQL=t.graphQL),i}},{"../lib/constants":11,"../lib/vendor/polyfill":20}],14:[function(e,t,n){"use strict";t.exports=function(e,n){return n=null==n?"":n,e.reduce(function(e,t){return e[t]=n+t,e},{})}},{}],15:[function(e,t,n){"use strict";var o=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:o.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:o.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:o.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:o.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":9}],16:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],17:[function(e,t,n){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],18:[function(e,t,n){arguments[4][2][0].apply(n,arguments)},{dup:2}],19:[function(n,o,e){(function(e){"use strict";var t=e.Promise||n("promise-polyfill");o.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":5}],20:[function(e,o,t){(function(t){"use strict";var n="function"==typeof t.atob?t.atob:e;function e(e){var t,n,o,r,i,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(a=0;t=(63&s.indexOf(e.charAt(a++)))<<2|(r=s.indexOf(e.charAt(a++)))>>4&3,n=(15&r)<<4|(i=s.indexOf(e.charAt(a++)))>>2&15,o=(3&i)<<6|63&s.indexOf(e.charAt(a++)),c+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(o?String.fromCharCode(o):""),a<e.length;);return c}o.exports={atob:function(e){return n.call(t,e)},_atob:e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],21:[function(e,t,n){"use strict";t.exports={PLAID_LINK_JS:"https://cdn.plaid.com/link/v2/stable/link-initialize.js"}},{}],22:[function(e,t,n){"use strict";var o=e("../lib/braintree-error");t.exports={US_BANK_ACCOUNT_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_OPTION_REQUIRED"},US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS"},US_BANK_ACCOUNT_LOGIN_LOAD_FAILED:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",message:"Bank login flow failed to load."},US_BANK_ACCOUNT_LOGIN_CLOSED:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_LOGIN_CLOSED",message:"Customer closed bank login flow before authorizing."},US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",message:"Another bank login tokenization request is active."},US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},US_BANK_ACCOUNT_FAILED_TOKENIZATION:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_FAILED_TOKENIZATION",message:"The supplied data failed tokenization."},US_BANK_ACCOUNT_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_NOT_ENABLED",message:"US bank account is not enabled."},US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",message:"Bank login is not enabled."}}},{"../lib/braintree-error":9}],23:[function(e,t,n){"use strict";var o=e("../lib/basic-component-verification"),r=e("../lib/braintree-error"),i=e("./errors"),a=e("./us-bank-account"),s=e("../lib/errors"),c=e("../lib/promise"),u=e("@braintree/wrap-promise");t.exports={create:u(function(e){return o.verify({name:"US Bank Account",client:e.client}).then(function(){return e.client.getConfiguration().gatewayConfiguration.braintreeApi?e.client.getConfiguration().gatewayConfiguration.usBankAccount?new a(e):c.reject(new r(i.US_BANK_ACCOUNT_NOT_ENABLED)):c.reject(new r(s.BRAINTREE_API_ACCESS_RESTRICTED))})}),VERSION:"3.38.0"}},{"../lib/basic-component-verification":8,"../lib/braintree-error":9,"../lib/errors":15,"../lib/promise":19,"./errors":22,"./us-bank-account":24,"@braintree/wrap-promise":4}],24:[function(A,E,e){(function(i){"use strict";var u=A("../lib/braintree-error"),o=A("./constants"),l=A("./errors"),r=A("../lib/errors"),_=A("../lib/analytics"),a=A("../lib/once"),e=A("../lib/convert-methods-to-error"),t=A("../lib/methods"),d=A("../lib/camel-case-to-snake-case"),p=A("../lib/promise"),n=A("@braintree/wrap-promise");function s(e){this._client=e.client,this._isTokenizingBankLogin=!1,_.sendEvent(this._client,"usbankaccount.initialized")}function f(e){var t,n=e.details&&e.details.httpStatus;return(t=new u(401===n?r.BRAINTREE_API_ACCESS_RESTRICTED:n<500?l.US_BANK_ACCOUNT_FAILED_TOKENIZATION:l.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR)).details={originalError:e},t}function N(e){return{nonce:e.data.id,details:{},description:e.data.description,type:e.data.type}}function c(t,n){function o(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(t.removeEventListener("error",r),t.removeEventListener("load",o),t.removeEventListener("readystatechange",o),n(null,i.Plaid))}function r(){t.parentNode.removeChild(t),n(new u(l.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED))}t.addEventListener("error",r),t.addEventListener("load",o),t.addEventListener("readystatechange",o)}s.prototype.tokenize=function(e){return(e=e||{}).mandateText?e.bankDetails&&e.bankLogin?p.reject(new u({type:l.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type,code:l.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code,message:"tokenize must be called with bankDetails or bankLogin, not both."})):e.bankDetails?this._tokenizeBankDetails(e):e.bankLogin?this._tokenizeBankLogin(e):p.reject(new u({type:l.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:l.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"tokenize must be called with bankDetails or bankLogin."})):p.reject(new u({type:l.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:l.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"mandateText property is required."}))},s.prototype._tokenizeBankDetails=function(e){var n=this._client,t=e.bankDetails;return n.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:d({type:"us_bank_account",routingNumber:t.routingNumber,accountNumber:t.accountNumber,firstName:t.firstName,lastName:t.lastName,businessName:t.businessName,accountType:t.accountType,ownershipType:t.ownershipType,billingAddress:d(t.billingAddress||{}),achMandate:{text:e.mandateText}})}).then(function(e){return _.sendEvent(n,"usbankaccount.bankdetails.tokenization.succeeded"),p.resolve(N(e))}).catch(function(e){var t=f(e);return _.sendEvent(n,"usbankaccount.bankdetails.tokenization.failed"),p.reject(t)})},s.prototype._tokenizeBankLogin=function(r){var i=this,a=this._client,e=a.getConfiguration().gatewayConfiguration,s="production"===e.environment,c=e.usBankAccount.plaid;return r.bankLogin.displayName?c?this._isTokenizingBankLogin?p.reject(new u(l.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE)):(this._isTokenizingBankLogin=!0,new p(function(n,o){i._loadPlaid(function(e,t){e?o(e):(t.create({clientName:r.bankLogin.displayName,apiVersion:"v2",env:s?"production":"sandbox",key:c.publicKey,product:"auth",selectAccount:!0,onExit:function(){i._isTokenizingBankLogin=!1,_.sendEvent(a,"usbankaccount.banklogin.tokenization.closed.by-user"),o(new u(l.US_BANK_ACCOUNT_LOGIN_CLOSED))},onSuccess:function(e,t){a.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:d({type:"plaid_public_token",publicToken:e,accountId:s?t.account_id:"plaid_account_id",achMandate:{text:r.mandateText},ownershipType:r.bankLogin.ownershipType,firstName:r.bankLogin.firstName,lastName:r.bankLogin.lastName,businessName:r.bankLogin.businessName,billingAddress:d(r.bankLogin.billingAddress||{})})}).then(function(e){i._isTokenizingBankLogin=!1,_.sendEvent(a,"usbankaccount.banklogin.tokenization.succeeded"),n(N(e))}).catch(function(e){var t;i._isTokenizingBankLogin=!1,t=f(e),_.sendEvent(a,"usbankaccount.banklogin.tokenization.failed"),o(t)})}}).open(),_.sendEvent(a,"usbankaccount.banklogin.tokenization.started"))})})):p.reject(new u(l.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED)):p.reject(new u({type:l.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:l.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"displayName property is required when using bankLogin."}))},s.prototype._loadPlaid=function(e){var t,n;e=a(e),i.Plaid?e(null,i.Plaid):(t=document.querySelector('script[src="'+o.PLAID_LINK_JS+'"]'))?c(t,e):((n=document.createElement("script")).src=o.PLAID_LINK_JS,n.async=!0,c(n,e),document.body.appendChild(n),this._plaidScript=n)},s.prototype.teardown=function(){return this._plaidScript&&document.body.removeChild(this._plaidScript),e(this,t(s.prototype)),p.resolve()},E.exports=n.wrapPrototype(s)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":7,"../lib/braintree-error":9,"../lib/camel-case-to-snake-case":10,"../lib/convert-methods-to-error":12,"../lib/errors":15,"../lib/methods":17,"../lib/once":18,"../lib/promise":19,"./constants":21,"./errors":22,"@braintree/wrap-promise":4}]},{},[23])(23)});