**Lambda Function to Generate Random Message**

1. Go to **AWS Lambda**.
2. Click **Create Function**. Select **Author from scratch**.
3. Give the required details, runtime used here is _Node.js_.
4. Create a **Role** or import an existing one, with minimum permissions of **CloudWatch**.
5. Click **Create Function**.

![lamda-designer](https://user-images.githubusercontent.com/26769575/97749676-779d6900-1b15-11eb-8ec7-a76fba7e9323.JPG)

6. Refer to the _code/index.js_ file for the lamda function code.
7. To test, click **Test**.
8. As serverless functions are event-driven, so we need to configure a test event. We created an empty event here, to test.
9. Give an **Event Name** and click **Create**.
10. Click on **Test** again to get the output message.

![lambda-test](https://user-images.githubusercontent.com/26769575/97750093-2e014e00-1b16-11eb-9aae-d205ad876b55.JPG)

11. You can also check the Logs of **CloudWatch**.
