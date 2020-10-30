**'Hello World' Serverless API**

1. Open **API Gateway** from AWS Console.
2. Choose an **API Type**.
3. Select **New API** option. A new API will be created manually.
4. Provide the **API Name** and click **Create API**.
5. The **Resources** will be presented.
6. Go to **Actions** and click **Create Resource**.
7. A **Resource Name** is provided and click on **Create Resource** button.
8. A **Resource** was created.
9. Now a **Method** will be created.
10. From the **Actions** menu, choose the required method.
11. Select your required **Integration type**, click **Save**.
12. Now you'll be taken to the **Method Execution** screen.

![method-execution](https://user-images.githubusercontent.com/26769575/97745721-4de14380-1b0f-11eb-8407-20282912e7bd.JPG)

13. We can mock a response here, by returning a hard-coded JSON string.
14. Click on **Integration Response** and expand the response for **HTTP 200** status.
15. Under **Mapping Templates**, find the template for `application/json` **Content-type** and click on it.
16. Add a simple JSON String:  `{"message" : "hello world"}` and click **Save**.
17. Now from the **Actions** menu, choose **Deploy API**.
18. Provide or create a new **Deployment Stage** and click **Deploy**.
19. We get an **Invoke URL**, click on it to get the API response. May be you'll need to add the endpoint, where the HTTP method is defined. So for this, add the endpoint name, after the stage name. Ex: `https://44j3ua1055.execute-api.ap-south-1.amazonaws.com/test/message`. You'll see the message printed.
20. A;ternatively, you can also test this, from the **Method Execution** screen, by clicking on the **Test** button and click **Test**.

![hello-world-api-gateway](https://user-images.githubusercontent.com/26769575/97746764-e5936180-1b10-11eb-8c28-0fa318816da8.JPG)
