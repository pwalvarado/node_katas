
### node-lambda

 Command line tool for locally running and remotely deploying your node.js applications to Amazon Lambda.

 ## Installation

 ```
 npm install -g node-lambda
 ```

 ## Usage

 There are 4 available commands.

 ```
 node-lambda setup
 node-lambda run
 node-lambda package
 node-lambda deploy
 ```

 setup

 Initializes the event.json, context.json, .env files, and deploy.env files.

 event.json is where you mock your event.
 context.json is where you can add additional mock data to the context passed to your lambda function.
 .env is where you place your deployment configuration

 node-lambda run

 Runs your Amazon Lambda index.js file locally. Passes event.json data to the Amazon Lambda event object.

 we don't need package and deploy. Not tested


## Conlusion

For our purpose useful to initial setup, and run locally. Test is missing...
