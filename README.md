![LogoAWS](https://user-images.githubusercontent.com/26769575/95014766-a7686680-0666-11eb-8ead-99fc25305a92.png)

# aws-serverless
POC and hands-on for the usage of several AWS Serverless using- AWS Lambda, API Gateway, Amazon DynamoDB, Step Functions, SAM, the Serverless Framework, CICD &amp; more.

### What all has been done here:

1. **Serverless Computing**

    - Create Serverless APIs
    - Create Lambda Functions
    - Integrate Lambda with API Gateway
    
![serverless-api-lambda](https://user-images.githubusercontent.com/26769575/97874680-5b7d1000-1d3f-11eb-8431-37a9771ccad2.png)

2. **AWS Lambda**

    - Create Lambda Handlers  
    - Logging and Handling Errors
    - Passing Params, Query Strings, Access Path
    - Deploy Lambda Functions
    - Serverless Image Resizing using Lambda and S3
    - Lambda Versions, Alias
    - Traffic shifting & Canary Deployment
    - KMS Encrytion
    - Set up Lambda DLQ using SQS, SNS
    - Dynamic Lambda Handlers
    - Control API Gateway access using IAM Roles, Policies, Resource Policies, Lambda Authorizers, Cognito User Pools
    
![serverless-image-resize](https://user-images.githubusercontent.com/26769575/98078048-516e2500-1e97-11eb-9132-e253de3f3a76.png)

3. **AWS API Gateway**

    - Testing API Gateway Endpoint
    - Configure CORS and Pre-flight Requests
    - Adding Request Validators
    - Adding Body Mapping Templates
    - API Testing
    - API Gateway Models
    - Logging & Monitoring
    - Client SDK Generation
    - API Documentation
    - Creating & Passing API Keys & Usage Plans
    - Stage Variables
    
![api-gateway-create](https://user-images.githubusercontent.com/26769575/98260341-38ee2f80-1fa9-11eb-91a1-300680d4897a.JPG)

4. **AWS DynamoDB**

    - DynamoDB RCU, WCU
    - Partitions and Indexes
    - CRUD operations on DynamoDB
    - DynamoDB using AWS SDK
    - DynamoDB Streams
    
5. **AWS Step Functions**
    - Creating State Machines (using ASL)
    - Adding States in Step Functions
    - Invoking State Machine with API Gateway, CloudWatch, SDK
    - Image Processing Project - Using Step Functions, Lambda, DynamoDB, S3
    
![sf](https://user-images.githubusercontent.com/26769575/99347347-ea039c80-28bc-11eb-8402-dc4190af6015.JPG)

6. **AWS Serverless Application Model (SAM)**
    - Creating Lambda Functions, API Gateways, S3 Buckets using SAM Template
    - Packaging and Deploying with SAM Template and CloudFormation
    - Working with AWS SAM CLI
    - Running Lambda Functions, API Gateways locally using SAM CLI
    - Creating Serverless REST API using SAM
    
![samresources](https://user-images.githubusercontent.com/26769575/99364963-a9b41680-28dc-11eb-8f91-1e7ba6075b1e.JPG)

7. **Development with Serverless Framework**
    - Creating Serverless Application using Serverless Framework
    - Testing Lambda Functions Locally with Serverless Framework
    - Deploying with Serverless Framework
    - Creating APIs with Serverless Framework
    - VPC Configuration for Lambda and API Gateway
    - Serverless Plugins
    - Accessing CloudWatch Logs using Serverless Framework
    
8. **AWS CI/CD**
    - AWS CodeCommit for Source Control
    - Defining CodeBuild using _buildspec.yml_ to Build and Test
    - AWS CodePipeline for Continuous Delivery and Automation
    
![codepipeline](https://user-images.githubusercontent.com/26769575/99695323-737cbf80-2ab3-11eb-9658-d0d4e8d5c42e.JPG)

If you :heart: AWS Serverless and wish to add more content to this repo, then do raise a PR and don't forget to :star:. Thank you!
