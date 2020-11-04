**CORS Config for Lambda Proxy Integration**

1. Go to **Resources** in API Gateway, click **GET** then **Actions** and **Enable CORS**.
2. Open the Lambda function and modify the _return_ as: `headers: {
            "Access-Control-Allow-Origin" : "*"
        }`
3. Visit [http://test-cors.org/](url) and paste in the **Remote URL**, you wish to test CORS for.
4. If you get `XHR status: 200`, then it's SUCCESS.

![cors-test](https://user-images.githubusercontent.com/26769575/98079754-58e2fd80-1e9a-11eb-9ae0-06c28670f2fc.JPG)
