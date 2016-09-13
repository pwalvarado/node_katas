## AWS Lambda Workflow

AWS Lambda allows you to run functions in the cloud with no persistent infrastructure!

Lambda is essentially user-created functions that run on demand in the cloud. This has the following benefits:

- Only pay for what you use - no ongoing costs
- Hugely scalable

### What about workflow?

We have a few principles that we like to apply to our development practices, and so, one of our first questions was, "how can we incorporate this into our workflow?". This includes considerations like:

- Automation - How can we automatically deploy our application?
- Speed of development - How can we run it locally so we don't have to keep uploading our code through Amazon's console every time we make a change?
- Testing - How can we test our code?

### Recommended practice

- Modularize your code and unit test it outside of Lambda - your lambda function should hand off to a library that you have built and tested separately using more conventional tools. This way, it's easy to unit test your code in a normal workflow.
- Test locally with `lambda-local -l index.js -h handler -e event.json` or another tool(`grunt-aws-lambda`). This verifies that it all integrates well.

## Working with tools

Whilst we can use the AWS console to manage our Lambda functions, we can get a smoother development workflow using different node tools or modules.

Examples
---
Navigate to following folders, and see instructions on each README file

- 01-node-lambda
- 02-lambda-local. Selected!

## References

[AWS Lambda Workflow](http://radify.io/blog/aws-lambda-workflow/)

### Lambda workflow tools

- [node-lambda](https://github.com/motdotla/node-lambda)
- [lambda-local](https://github.com/ashiina/lambda-local)
- [grunt-aws-lambda](https://www.npmjs.com/package/grunt-aws-lambda)
- [kappa](https://github.com/garnaat/kappa) use python, not my taste!
- [.dotenv](https://www.npmjs.com/package/dotenv)

### Deployment tools
- [ClaudiaJS](https://aws.amazon.com/es/blogs/compute/how-to-turn-node-js-projects-into-aws-lambda-microservices-easily-with-claudiajs/)
An open-source deployment tool for Node.js microservices that makes getting started with AWS Lambda and Amazon API Gateway very easy for JavaScript developers.

- [node-aws-lambda](https://github.com/ThoughtWorksStudios/node-aws-lambda) Use gulp
A module helps you automate AWS lambda function deployment. All lambda configuration is managed in the codebase, includes event source mappings. So you can version control everything and automate the deployment instead of click click click in AWS console.

### Typedeployer workflow

- [Related article](https://www.aerobatic.com/blog/lambda-continuous-deployment)
- [blue-green-deployer](https://github.com/BambeeQ/opsworks-auto-deploy-lambda-function) Lambda function to support automatic deployment / blue-green switching.
