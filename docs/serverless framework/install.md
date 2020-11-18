**Installing and Configuring the Serverless Framework**

1. In the CMD run:
    
    `npm install -g serverless`

2. To test, if successfully installed:

    `serverless -v`

_NOTE:_ Shorthand for Serverless is: `sls`.

**Creating Your First Serverless Application with the Serverless Framework**

1. Create a new Serverless project/template -> Run the below in CMD:

    `serverless create --template aws-nodejs --path <template-name>` or
    `sls create -t aws-nodejs -p <template-name>`

**Testing the Lambda Functions Locally with the Serverless Framework**

1. To test the lambda functions locally:

    `serverless invoke local --function <function-name> --data <'{\"json:\": \"data\"}'>` 
    The above command moght not work in Command Prompt, try Powershell instead.

2. To deploy the template in order to generate a CloudFormation template: 
     
    `serverless deploy`

![serverlessdeploy](https://user-images.githubusercontent.com/26769575/99501211-78e9e500-29a1-11eb-9eea-40e12fa4c981.JPG)

3. To remove the CloudFormation stack:
    
    `serverless remove`

4. Test the lambda function generated.

![lambdatest](https://user-images.githubusercontent.com/26769575/99502293-e2b6be80-29a2-11eb-9166-6bb60d993c37.JPG)

