!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).unionpay=e()}}(function(){var e;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,n,r){(function(t){"use strict";!function(i,o){"object"==typeof r&&"undefined"!=typeof n?n.exports=o("undefined"==typeof t?i:t):"function"==typeof e&&e.amd?e([],function(){return o(i)}):i.framebus=o(i)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(O.push(e),!0)}function n(e){var t,n={};for(t in y)y.hasOwnProperty(t)&&(n[t]=y[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return a(e)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=u(e,n,r),t===!1?!1:(f(A.top,t,r),!0))}function i(e,t){var n=s(this);return h(e,t,n)?!1:(T[n]=T[n]||{},T[n][e]=T[n][e]||[],T[n][e].push(t),!0)}function o(e,t){var n,r,i=s(this);if(h(e,t,i))return!1;if(r=T[i]&&T[i][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function u(e,t,n){var r=!1,i={event:e,origin:n},o=t[t.length-1];"function"==typeof o&&(i.reply=I(o,n),t=t.slice(0,-1)),i.args=t;try{r=m+JSON.stringify(i)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function c(e){var t,n,r,i;if(e.data.slice(0,m.length)!==m)return!1;try{t=JSON.parse(e.data.slice(m.length))}catch(o){return!1}return null!=t.reply&&(n=e.origin,r=e.source,i=t.reply,t.reply=function(e){var t=u(i,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function l(t){A||(A=t||e,A.addEventListener?A.addEventListener("message",E,!1):A.attachEvent?A.attachEvent("onmessage",E):null===A.onmessage?A.onmessage=E:A=null)}function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function E(e){var t;a(e.data)||(t=c(e),t&&(_("*",t.event,t.args,e),_(e.origin,t.event,t.args,e),N(e.data,t.origin,e.source)))}function _(e,t,n,r){var i;if(T[e]&&T[e][t])for(i=0;i<T[e][t].length;i++)T[e][t][i].apply(r,n)}function p(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function f(e,t,n){var r;try{for(e.postMessage(t,n),p(e)&&f(e.opener.top,t,n),r=0;r<e.frames.length;r++)f(e.frames[r],t,n)}catch(i){}}function N(e,t,n){var r,i;for(r=O.length-1;r>=0;r--)i=O[r],i.closed===!0?O=O.slice(r,1):n!==i&&f(i.top,e,t)}function I(e,t){function n(i,o){e(i,o),y.target(t).unsubscribe(r,n)}var r=d();return y.target(t).subscribe(r,n),r}function h(e,t,n){return a(e)?!0:"function"!=typeof t?!0:a(n)?!0:!1}var A,y,O=[],T={},m="/*framebus*/";return l(),y={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),i=e("./lib/default-attributes"),o=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=o({},i,e);return n.style&&"string"!=typeof n.style&&(o(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":3,"./lib/default-attributes":4,"./lib/set-attributes":5}],3:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],4:[function(e,t,n){t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],5:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],6:[function(e,t,n){"use strict";function r(e,t){var n,r=t?o(t):{},a=i(e.authorization).attrs,u=o(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(u[n]=r._meta[n]);return r._meta=u,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var i=e("./create-authorization-data"),o=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":12,"./create-authorization-data":14,"./json-clone":19}],7:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function i(e,t,n){var i=e.getConfiguration(),a=e._request,u=r(Date.now()),c=i.gatewayConfiguration.analytics.url,l={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:u}]};a({url:c,method:"post",data:s(i,l),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var o=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":6,"./constants":12}],8:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=r},{"./enumerate":16}],9:[function(e,t,n){"use strict";function r(e,t){var n,r,o=document.createElement("a");return o.href=t,r="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+r,n===e?!0:(o.href=e,i(e))}var i=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":18}],10:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":16}],11:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=e("framebus"),o=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,o=t,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),i.emit.apply(i,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),i.off.apply(i,t))},r.prototype.off=function(e,t){var n,r,i=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(i=r.handler);this._offDirect(e,i)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=o,t.exports=r},{"../braintree-error":8,"./check-origin":9,"./events":10,framebus:1}],12:[function(e,t,n){"use strict";var r="3.7.0",i="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],13:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("../lib/errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"../lib/errors":17,"./braintree-error":8}],14:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function o(e){var t,n,o={attrs:{},configUrl:""};return r(e)?(n=i(e),o.attrs.tokenizationKey=e,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/polyfill":21}],15:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],16:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],17:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":8}],18:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function i(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(o=o||document.createElement("a"),o.href=e,t=r(o.hostname),s.hasOwnProperty(t)):!1}var o,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1};t.exports=i},{}],19:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],20:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],21:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,i,o,s,a,u,c=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="";if(!c.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");u=0;do i=l.indexOf(e.charAt(u++)),o=l.indexOf(e.charAt(u++)),s=l.indexOf(e.charAt(u++)),a=l.indexOf(e.charAt(u++)),t=(63&i)<<2|o>>4&3,n=(15&o)<<4|s>>2&15,r=(3&s)<<6|63&a,d+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(u<e.length);return d}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:r,_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],22:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("../lib/errors");t.exports=function(e,t){if("function"!=typeof e)throw new r({type:i.CALLBACK_REQUIRED.type,code:i.CALLBACK_REQUIRED.code,message:t+" must include a callback function."})}},{"../lib/errors":17,"./braintree-error":8}],23:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}],24:[function(e,t,n){"use strict";function r(e,t){var n,r;return u(t,"create"),t=a(t),null==e.client?void t(new o({type:l.INSTANTIATION_OPTION_REQUIRED.type,code:l.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating UnionPay."})):(n=e.client.getConfiguration(),r=n.analyticsMetadata.sdkVersion,r!==d?void t(new o({type:l.INCOMPATIBLE_VERSIONS.type,code:l.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+r+") and UnionPay (version "+d+") components must be from the same SDK version."})):n.gatewayConfiguration.unionPay&&n.gatewayConfiguration.unionPay.enabled===!0?(s.sendEvent(e.client,"unionpay.initialized"),void t(null,new i(e))):void t(new o(c.UNIONPAY_NOT_ENABLED)))}var i=e("./shared/unionpay"),o=e("../lib/braintree-error"),s=e("../lib/analytics"),a=e("../lib/deferred"),u=e("../lib/throw-if-no-callback"),c=e("./shared/errors"),l=e("../lib/errors"),d="3.7.0";t.exports={create:r,VERSION:d}},{"../lib/analytics":7,"../lib/braintree-error":8,"../lib/deferred":15,"../lib/errors":17,"../lib/throw-if-no-callback":22,"./shared/errors":26,"./shared/unionpay":27}],25:[function(e,t,n){"use strict";var r=e("../../lib/enumerate");t.exports={events:r(["HOSTED_FIELDS_FETCH_CAPABILITIES","HOSTED_FIELDS_ENROLL","HOSTED_FIELDS_TOKENIZE"],"union-pay:"),HOSTED_FIELDS_FRAME_NAME:"braintreeunionpayhostedfields"}},{"../../lib/enumerate":16}],26:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={UNIONPAY_NOT_ENABLED:{type:r.types.MERCHANT,code:"UNIONPAY_NOT_ENABLED",message:"UnionPay is not enabled for this merchant."},UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",message:"Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance."},UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"Could not find the Hosted Fields instance."},UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance."},UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",message:"Please supply either a card or a Hosted Fields instance, not both."},UNIONPAY_EXPIRATION_DATE_INCOMPLETE:{type:r.types.MERCHANT,code:"UNIONPAY_EXPIRATION_DATE_INCOMPLETE",message:"You must supply expiration month and year or neither."},UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID:{type:r.types.CUSTOMER,code:"UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",message:"Enrollment failed due to user input error."},UNIONPAY_ENROLLMENT_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_ENROLLMENT_NETWORK_ERROR",message:"Could not enroll UnionPay card."},UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",message:"Could not fetch card capabilities."},UNIONPAY_TOKENIZATION_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},UNIONPAY_MISSING_MOBILE_PHONE_DATA:{type:r.types.MERCHANT,code:"UNIONPAY_MISSING_MOBILE_PHONE_DATA",message:"A `mobile` with `countryCode` and `number` is required."},UNIONPAY_FAILED_TOKENIZATION:{type:r.types.CUSTOMER,code:"UNIONPAY_FAILED_TOKENIZATION",message:"The supplied card data failed tokenization."}}},{"../../lib/braintree-error":8}],27:[function(e,t,n){"use strict";function r(e){this._options=e}var i=e("../../lib/analytics"),o=e("../../lib/braintree-error"),s=e("../../lib/bus"),a=e("./constants"),u=e("../../lib/convert-methods-to-error"),c=e("../../lib/deferred"),l=e("./errors"),d=a.events,E=e("iframer"),_=e("../../lib/methods"),p="3.7.0",f=e("../../lib/uuid"),N=e("../../lib/throw-if-no-callback");r.prototype.fetchCapabilities=function(e,t){var n=this._options.client,r=e.card?e.card.number:null,s=e.hostedFields;if(N(t,"fetchCapabilities"),t=c(t),r&&s)return void t(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES));if(r)n.request({method:"get",endpoint:"payment_methods/credit_cards/capabilities",data:{_meta:{source:"unionpay"},creditCard:{number:r}}},function(e,r,s){return e?(t(403===s?e:new o({type:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type,code:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code,message:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message,details:{originalError:e}})),void i.sendEvent(n,"unionpay.capabilities-failed")):(i.sendEvent(n,"unionpay.capabilities-received"),void t(null,r))});else{if(!s)return void t(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED));if(!s._bus)return void t(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));this._initializeHostedFields(function(){this._bus.emit(d.HOSTED_FIELDS_FETCH_CAPABILITIES,{hostedFields:s},function(e){return e.err?void t(new o(e.err)):void t(null,e.payload)})}.bind(this))}},r.prototype.enroll=function(e,t){var n,r=this._options.client,s=e.card,a=e.mobile,u=e.hostedFields;if(N(t,"enroll"),t=c(t),!a)return void t(new o(l.UNIONPAY_MISSING_MOBILE_PHONE_DATA));if(u){if(!u._bus)return void t(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));if(s)return void t(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES));this._initializeHostedFields(function(){this._bus.emit(d.HOSTED_FIELDS_ENROLL,{hostedFields:u,mobile:a},function(e){return e.err?void t(new o(e.err)):void t(null,e.payload)})}.bind(this))}else{if(!s||!s.number)return void t(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED));if(n={_meta:{source:"unionpay"},unionPayEnrollment:{number:s.number,mobileCountryCode:a.countryCode,mobileNumber:a.number}},s.expirationDate)n.unionPayEnrollment.expirationDate=s.expirationDate;else if(s.expirationMonth||s.expirationYear){if(!s.expirationMonth||!s.expirationYear)return void t(new o(l.UNIONPAY_EXPIRATION_DATE_INCOMPLETE));n.unionPayEnrollment.expirationYear=s.expirationYear,n.unionPayEnrollment.expirationMonth=s.expirationMonth}r.request({method:"post",endpoint:"union_pay_enrollments",data:n},function(e,n,s){var a;return e?(403===s?a=e:500>s?(a=new o(l.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID),a.details={originalError:e}):(a=new o(l.UNIONPAY_ENROLLMENT_NETWORK_ERROR),a.details={originalError:e}),i.sendEvent(r,"unionpay.enrollment-failed"),void t(a)):(i.sendEvent(r,"unionpay.enrollment-succeeded"),void t(null,{enrollmentId:n.unionPayEnrollmentId,smsCodeRequired:n.smsCodeRequired}))})}},r.prototype.tokenize=function(e,t){var n,r,s,a=this._options.client,u=e.card,E=e.hostedFields;if(N(t,"tokenize"),t=c(t),u&&E)return void t(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES));if(u)n={_meta:{source:"unionpay"},creditCard:{number:e.card.number,options:{unionPayEnrollment:{id:e.enrollmentId}}}},e.smsCode&&(n.creditCard.options.unionPayEnrollment.smsCode=e.smsCode),u.expirationDate?n.creditCard.expirationDate=u.expirationDate:u.expirationMonth&&u.expirationYear&&(n.creditCard.expirationYear=u.expirationYear,n.creditCard.expirationMonth=u.expirationMonth),e.card.cvv&&(n.creditCard.cvv=e.card.cvv),a.request({method:"post",endpoint:"payment_methods/credit_cards",data:n},function(e,n,u){return e?(i.sendEvent(a,"unionpay.nonce-failed"),403===u?s=e:500>u?(s=new o(l.UNIONPAY_FAILED_TOKENIZATION),s.details={originalError:e}):(s=new o(l.UNIONPAY_TOKENIZATION_NETWORK_ERROR),s.details={originalError:e}),void t(s)):(r=n.creditCards[0],delete r.consumed,delete r.threeDSecureInfo,i.sendEvent(a,"unionpay.nonce-received"),void t(null,r))});else{if(!E)return void t(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED));if(!E._bus)return void t(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));this._initializeHostedFields(function(){this._bus.emit(d.HOSTED_FIELDS_TOKENIZE,e,function(e){return e.err?void t(new o(e.err)):void t(null,e.payload)})}.bind(this))}},r.prototype.teardown=function(e){this._bus&&(this._hostedFieldsFrame.parentNode.removeChild(this._hostedFieldsFrame),this._bus.teardown()),u(this,_(r.prototype)),"function"==typeof e&&(e=c(e))()},r.prototype._initializeHostedFields=function(e){var t=f();return this._bus?void e():(this._bus=new s({channel:t,merchantUrl:location.href}),this._hostedFieldsFrame=E({name:a.HOSTED_FIELDS_FRAME_NAME+"_"+t,src:this._options.client.getConfiguration().gatewayConfiguration.assetsUrl+"/web/"+p+"/html/unionpay-hosted-fields-frame.min.html",height:0,width:0}),this._bus.on(s.events.CONFIGURATION_REQUEST,function(t){t(this._options.client),e()}.bind(this)),void document.body.appendChild(this._hostedFieldsFrame))},t.exports=r},{"../../lib/analytics":7,"../../lib/braintree-error":8,"../../lib/bus":11,"../../lib/convert-methods-to-error":13,"../../lib/deferred":15,"../../lib/methods":20,"../../lib/throw-if-no-callback":22,"../../lib/uuid":23,"./constants":25,"./errors":26,iframer:2}]},{},[24])(24)});
