**Integrate Lambda with API Gateway**

1. Now we'll integrate our existing Lambda function with the existing API Gateway.
2. In the **API Gateway** -> **Method Execution** page, change the **Intehration Request Type** from _Mock_ to _Lambda Function_.
3. Make sure the **Region** of Lambda Function in the **Integration Request** page is same as the Lambda Function, created earlier. Here we choose _ap-south-1_ as the region from the drop down.
4. Type the name of your Lambda Function in the required box.
5. Click on **Save**, then **Ok**.
6. Then it confirms by asking us to give the required permissions. Click **Ok**.
7. Now, the Lambda function is integrated, go back to **Method Execution** screen

![lambda-api-integrate](https://user-images.githubusercontent.com/26769575/97832286-682a4580-1cf8-11eb-963b-9302c857dd22.JPG)

8. Click on **Test** and **Test** again, you'll see the random message appear in the **Response Body**.

![response-body](https://user-images.githubusercontent.com/26769575/97832808-c3a90300-1cf9-11eb-9299-aebc779b40be.JPG)
