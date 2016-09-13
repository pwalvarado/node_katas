
## lambda-local


### Installation

 ```
 npm install -g lambda-local

 ```

### Usage

```
lambda-local -l index.js -h handler -e event.json
```

  About
  -----
  | -l, | --lambdapath [lambda file name]                     | Specify Lambda function file name. |
  | -e, | --eventpath [event data file name]                  | Specify event data file name. |
  -h,| --handler [lambda-function handler name (optional)] | Lambda function handler name. Default | | i s "handler".
  -t,| --timeout [timeout seconds (optional)]              | Seconds until lambda function timeout. | | D efault is 3 seconds.
  | -c, | --callbackforce (optional)                          | Force the function to stop after | having called context.done/succeed/fail.
  | -p, | --profile [aws file path (optional)]                | Read the AWS profile to get the | credentials.

## Conlusion

What we need to run locally!
