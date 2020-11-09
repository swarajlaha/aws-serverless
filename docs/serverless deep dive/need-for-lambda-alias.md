**Need for Lambda Alias**

1. Go to **API Gateway** -> **hello-world** API.
2. Select the root, _/_ and **Create Method**, **GET** and **Save**.

![get-method](https://user-images.githubusercontent.com/26769575/98506886-74774b00-2282-11eb-8659-7e1b64e606a3.JPG)

3. Deploy the API, get the URL for GET method and Test, using Postman.

![postman](https://user-images.githubusercontent.com/26769575/98507134-041cf980-2283-11eb-9acf-7a08fe76c443.JPG)

4. Add **Mapping Templates** to the API in the **Integration Request**, **Save**, **Deploy** and **Test**.

![mapping-templates](https://user-images.githubusercontent.com/26769575/98507407-86a5b900-2283-11eb-92ce-bcc09a57e58b.JPG)

![postman-test](https://user-images.githubusercontent.com/26769575/98507536-c9679100-2283-11eb-8ec5-b662400b335e.JPG)

5. To switch to any other version, go to **Integration Request**.
6. Add: `Lambda Function` `eventLogger:1`
7. Now **Deploy** and **Test**. It should show version 1.

![postman-v1](https://user-images.githubusercontent.com/26769575/98507779-498df680-2284-11eb-9d28-5472bcb6e444.JPG)



