**Body Mapping Template - VTL**

1. API Gateway Mapping Template: [https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html](url)
2. Modify the **Mapping Template** as: `{
    "operation": "$input.params('operation')",
    "input": {
        "operand1": $input.json('$.num1'),
        "operand2": $input.json('$.num2')
    }
}` and **Save**.
3. Go back to **Method Execution** and **Test**.

![vtl-test](https://user-images.githubusercontent.com/26769575/98106057-dae51d80-1ebe-11eb-82dc-6d73c5490af6.JPG)
