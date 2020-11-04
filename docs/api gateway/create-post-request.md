**Create POST Request**

1. Go to **Lambda** and create a new Function.
2. Give **Function name** as _calculator_ and keep other config as default and **Create**.
3. Write the function to perform arithmetic operations.
4. Configure a sample **Test Event** like: `{
  "operation": "add",
  "input": {
      "operand1": 20,
      "operand2": 8
  }
}` and **Create**.
5. The handler code is present in _code/api gateway/calculator.js_.
6. Deploy the Lambda handler and Test.

![calculator-test](https://user-images.githubusercontent.com/26769575/98082629-0f48e180-1e9f-11eb-8140-607dbd9c97dd.JPG)

**Create HTTP Post Request for API Gateway**

1. Go to the existing **API** and create a new **Resource** under the Root.
2. Add a Resource name, path namely, _/math_ and **Enable CORS**. Create.
3. Test the API.
4. Now, select **/math** -> **Actions** -> **Create Resource**.
5. Give: `Resource Name: calculate` `Resource Path: /math/{operation}`, **Enable CORS** and create.
6. Add a POST method to /{operation}.
7. **Integration type: Lambda Function** and give the **Lambda Function** name.

**Request Mapping Template**

1. Add following **Mapping Template** in **Integration Request**.

![mapping-template](https://user-images.githubusercontent.com/26769575/98086065-3a81ff80-1ea4-11eb-99bf-a42cfdb7ede9.JPG)
