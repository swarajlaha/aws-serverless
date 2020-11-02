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

9. The response we get here is plain text, but previously while testing we had got a response in JSON format.
10. Now we convert this lambda response to JSON format.
11. Go back to **Method Execution** page and click on **Integration Response**.
12. In the next page, expand the **HTTP Method 200 response status** and under **Mapping Templates**, select **application/json** in the **Content-Type**. Here we need to sepcify the transformation rules to map the incoming rules to the required JSON format.
13. Create the JSON string: `{ "message" : $input.body }`, click **Save** and back to the **Method Execution** screen.
14. Here, test locally first, before deploying the API.
15. Click on **Test** and now we get the JSON response.

![response-body-json](https://user-images.githubusercontent.com/26769575/97833464-6b730080-1cfb-11eb-9b68-35228576e283.JPG)

16. Before testing this on browser, we need to redeploy our API.
17. Go to **Actions** and choose **Deploy API**. Select a stage and **Deploy**.
18. Once the API is deployed, we can find the **Invoke URL** and append the URL with the Resource endpoint, i.e. _/message_ in our case. 
19. If you refresh the URL, a new random message is obtained each time.

![random-message](https://user-images.githubusercontent.com/26769575/97867847-9e85b600-1d34-11eb-81fb-213eb9d5dbb5.JPG)
