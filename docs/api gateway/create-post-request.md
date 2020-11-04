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
