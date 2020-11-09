**Lambda Alias**

1. In **Lambda Function -> Create Alias**

![alias](https://user-images.githubusercontent.com/26769575/98510231-bc996c00-2288-11eb-98bd-2c01ed74bef3.JPG)

2. Create one more alias.
3. In the **API Gateway**, replace the `Lambda Function` `eventLogger:test`

![postman-latest](https://user-images.githubusercontent.com/26769575/98510716-958f6a00-2289-11eb-8587-a7a38fb5bafb.JPG)

4. Now modify the Lambda Function, deploy it to a new version.
5. Click on **Alias -> test** and deploy a new version(v3) to it and deploy.
6. Test on Postman.

![v3](https://user-images.githubusercontent.com/26769575/98511336-8ceb6380-228a-11eb-80b8-0db960b9b92a.JPG)

