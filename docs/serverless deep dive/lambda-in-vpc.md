**Running Lambda inside the VPC**

1. Create a **Custom Role** manually for the **permissions to call CreateNetworkInterface on EC2**.

![vpc-policy](https://user-images.githubusercontent.com/26769575/98812409-72f77f80-2448-11eb-86e8-385375b3bfc1.JPG)

2. Go to any AWS Lambda function.
3. Go to the **VPC** section and **Edit**.
4. We'll attach the Lambda Function to the default VPC, from the dropdown.
5. Choose atleast 2 **Subnets**.
6. Choose a **Security Group** (here default one is selected).
7. Then **Save**.
