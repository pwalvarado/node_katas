'use strict';

// DEPRECATED Require Serverless ENV vars
// var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var lib = require('./lib');

// Your first function handler
module.exports.graphql = function (event, context, cb) {

  lib.runGraphQL(event, function (error, response) {
    if (error) {
      return cb(error);
    }

    cb(null, response);
  });
};

// You can add more handlers here, and reference them in serverless.yml
