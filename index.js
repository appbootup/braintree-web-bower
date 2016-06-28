'use strict';
var client = require('./client');
var paypal = require('./paypal');
var hostedFields = require('./hosted-fields');
var dataCollector = require('./data-collector');
var americanExpress = require('./american-express');
var unionpay = require('./unionpay');
var threeDSecure = require('./three-d-secure');

module.exports = {
    client: client,
    paypal: paypal,
    hostedFields: hostedFields,
    threeDSecure: threeDSecure,
    dataCollector: dataCollector,
    americanExpress: americanExpress,
    unionpay: unionpay,
    VERSION: '3.0.0-beta.10'
};
