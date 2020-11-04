**Query String and Path Parameters**

**Create API Gateway Endpoint**
1. In the API Gateway, create a new resource in the existing API.
2. Give the **Resource Path** a value same as the name parameter of the _index.js_ file for the _greet-me_ function and **Create Resource**.
3. Inside this newly created resource, we'll create our HTTP methods.
4. Add an **HTTP GET** method.
5. Integration type is **Lambda Function**. Choose the proxy integration checkbox. When we do so, API Gateway acts as a proxy between calling application and the lambda function. The request and response from the caller to lambda and vice versa is passed in to lambda, without any modification. We can not add any request/response modification, within our API Gateway now.
6. Choose the **Lambda Function**, here _greetMe_.
7. Click **Save** and **Ok**.
8. Now, the API Endpoint is ready for testing.

![api-gateway-create](https://user-images.githubusercontent.com/26769575/98075629-bd9a5a00-1e92-11eb-8f0f-6553b1e5fd1d.JPG)

**Test the API Gateway Endpoint**

1. Provide a **Path name**, **Query Strings Name** like: `lang=en&city=Bbsr&country=India` and click **Test**.

![api-test](https://user-images.githubusercontent.com/26769575/98075957-5df07e80-1e93-11eb-969b-bcfb6b39fadb.JPG)
 
2. Now we'll deploy the API so that we can test from the browser.
3. Click on **Deploy API**, give a **Deployment Stage** name and **Deploy**.
4. In the **Stages**, click on **GET**, you'll find the direct URL to the API endpoint.

![api-test-browser](https://user-images.githubusercontent.com/26769575/98076432-406fe480-1e94-11eb-9a99-584bd82ee4ad.JPG)
