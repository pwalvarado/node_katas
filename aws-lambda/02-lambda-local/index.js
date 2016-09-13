'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    callback(null, `Successfully read ${event}`);
  };

console.log('Stopping index.handler');
