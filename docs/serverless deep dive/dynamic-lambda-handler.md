**Dynamic Lambda Handlers**

_Invoking a Lambda function from within another Lambda function_

1. Create a Lambda function and **Create a new role from AWS policy templates**, in order to invoke another lambda function from this.
2. Now go to **IAM** and edit the role, here, _lambda_invoke_.
3. Search for the role in **IAM** and click **Add Inline Policy -> Service: Lambda -> Actions: Write (Invoke function) -> Resources: All -> Policy Name -> Create**.

![invokelambdapolicy](https://user-images.githubusercontent.com/26769575/98953267-7e1ede00-2522-11eb-8a54-7909dd9d5798.JPG)

4. Now go back to Lambda, and we'll invoke the _code/api gateway/calculator.js_ function from this lambda function.
5. Use the code in _code/serverless deep dive/calculateSquare.js_ for this new lambda function.
6. We invoke the _calculator.js_ from within _calculateSquare.js_ lambda function. Below is the output `input: 8`.

![output](https://user-images.githubusercontent.com/26769575/98954565-ea4e1180-2523-11eb-9404-54239b719f08.JPG)
