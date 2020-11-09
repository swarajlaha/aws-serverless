**Stage Variables**

1. Go to **API Gateway -> Stages -> Add Stage Variable**
2. Add a stage for the _test_ and _prod_ stages.

![stage-var](https://user-images.githubusercontent.com/26769575/98549310-9c859f00-22c0-11eb-9695-6fdaff6564c3.JPG)

3. To use the stage variable in place of the hard coded aliases, go to **Resources -> Integration Request** and edit the **Lambda Function** attribute as: `eventLogger:${stageVariables.eventLoggerAlias}`.
4. To provide the necessary permossions for lambda to invoke, copy the given commnds, as suggested by AWS (below pic) and modify the code as: 
`aws lambda add-permission   --function-name "arn:aws:lambda:ap-south-1:285684641675:function:eventLogger:test"   --source-arn "arn:aws:execute-api:ap-south-1:285684641675:44j3ua1055/*/GET/"   --principal apigateway.amazonaws.com   --statement-id 5fd19b5f-f36b-4646-a0c0-59de77279ba1   --action lambda:InvokeFunction`, i.e., change the eventLogger function to your stage variable.

![add-perm](https://user-images.githubusercontent.com/26769575/98550223-d905ca80-22c1-11eb-8cf0-21acf0ff32d0.JPG)

5. Copy the modified command for each stage and run on terminal.

![perm](https://user-images.githubusercontent.com/26769575/98550570-47e32380-22c2-11eb-92a5-eca41cfac70e.JPG)

6. Now deploy the API for both the stages.
7. Before testing, go to **Lambda -> Alias -> Versions tab -> $LATEST** and do some edit in the lambda function.
8. Deploy the function and **Publish new versions**.
9. Now go to **Aliases** and **test** and set the version of the **Alias configuration** to the latest version you created and save.
10. Similarly do for _prod_ alias as well. There's no need to redeploy the APIs.
11. Go to Postman and send the requests.

![test-v4](https://user-images.githubusercontent.com/26769575/98551597-7f060480-22c3-11eb-9edb-04b1bb54a5a0.JPG)
