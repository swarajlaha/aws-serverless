**Overview of Retry Behavior and DLQs in AWS Lambda**

_NOTE:_ If a lamba function fails, it retries for two times, if it was invoked asynchronously.

![lambda-dlq](https://user-images.githubusercontent.com/26769575/98813033-92db7300-2449-11eb-8b02-9c4ed250ae63.JPG)

1. Create a new Lambda function.

![dlqTest](https://user-images.githubusercontent.com/26769575/98813235-e2ba3a00-2449-11eb-8e07-f0225de4f062.JPG)

2. Write the code as in _code/serverless deep dive/dlqTest_ and change the **Execution timeout** to _2 sec_. This forces the lambda function to timeout and fail.
3. Now **Deploy** and **Test** and it should timeout and fail.

![timeout](https://user-images.githubusercontent.com/26769575/98813755-b7841a80-244a-11eb-89db-2535bfea0148.JPG)

