**Overview of Retry Behavior and DLQs in AWS Lambda**

_NOTE:_ If a lamba function fails, it retries for two times, if it was invoked asynchronously.

![lambda-dlq](https://user-images.githubusercontent.com/26769575/98813033-92db7300-2449-11eb-8b02-9c4ed250ae63.JPG)

1. Create a new Lambda function.

![dlqTest](https://user-images.githubusercontent.com/26769575/98813235-e2ba3a00-2449-11eb-8e07-f0225de4f062.JPG)

2. Write the code as in _code/serverless deep dive/dlqTest_ and change the **Execution timeout** to _2 sec_. This forces the lambda function to timeout and fail.
3. Now **Deploy** and **Test** and it should timeout and fail.

![timeout](https://user-images.githubusercontent.com/26769575/98813755-b7841a80-244a-11eb-89db-2535bfea0148.JPG)

**Setup DLQ**

1. Open the **SQS** console and create an **SQS** with the default settings.
1. Now go back to the lambda function and scroll down and edit **Asynchronous invocation**.
2. Find **Dead-letter queue** and choose **SQS**.
3. Below choose the queue name and **Save**.

![dlq](https://user-images.githubusercontent.com/26769575/98814506-c7502e80-244b-11eb-9c69-5be45b041ab3.JPG)

4. You may need to give necessary permissions to Lambda to send message to SQS. Create a Policy.

![policy](https://user-images.githubusercontent.com/26769575/98814993-7f7dd700-244c-11eb-8109-4b011cdd4e14.JPG)

5. In order for the Lambda to retry, we need to asynchronously trigger. For this create an SNS topic.

![createsns](https://user-images.githubusercontent.com/26769575/98816202-4fcfce80-244e-11eb-83bb-6705ad3e6f62.JPG)

6. Now create a **Subscription**.

![createsubs](https://user-images.githubusercontent.com/26769575/98816354-8e658900-244e-11eb-87a2-658c890484ae.JPG)

7. Refresh the Lambda function.

![lambdadesigner](https://user-images.githubusercontent.com/26769575/98816533-d1bff780-244e-11eb-8fa5-e8636e56ca3b.JPG)

**Testing Retry Behavior and DLQs in AWS Lambda**

1. On the **SNS Console**, publish a messsage.
2. Back in Lambda, click **Monitoring -> View Logs in CloudWatch** and choose the latest log stream.
3. After 2 reties Lambda should consider it as a DLQ. Now check this in SQS, for messages available.

![sqsmsgavailable](https://user-images.githubusercontent.com/26769575/98817658-70992380-2450-11eb-9237-190e7745cac1.JPG)

4. Select the queue and **View/Receive Messages** and **Poll** for messages.


![receivemsgs](https://user-images.githubusercontent.com/26769575/98817832-bd7cfa00-2450-11eb-9859-ed49c06380cc.JPG)

![msgbody](https://user-images.githubusercontent.com/26769575/98817974-f1f0b600-2450-11eb-8537-9ad3e9d94f3f.JPG)





