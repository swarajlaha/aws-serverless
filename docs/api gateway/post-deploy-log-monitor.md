**API Gateway Post Deploy Options, Logging and Monitoring**

1. Go to **API Gateway -> Stages -> Logs Tracing tab**.
2. First setup the CloudWatch Log Role ARN.
3. For this go to **Settings** from the left.
4. We'll create the Role in **IAM**, select **API Gateway**.
5. Check below for: **Select your use case**: `API Gateway
Allows API Gateway to push logs to CloudWatch Logs.` and **Next**. The following permission will be attached.

![attached-permission](https://user-images.githubusercontent.com/26769575/98246696-a6459480-1f98-11eb-92a1-487168921578.JPG)

6. Give a Role name and create.
7. Once created, open the Role and copy the *ARN** and paste it in the API Gateway settings and **Save**.
8. Go back to **API Gateway -> Stages -> Logs Tracing tab** and enable **Enable CloudWatch Logs**.

![logs-tracing](https://user-images.githubusercontent.com/26769575/98247201-5c10e300-1f99-11eb-8bc5-8d3ac954a9d8.JPG)

9. Now go to **Dashboard** from the left.

![cw-dashboard](https://user-images.githubusercontent.com/26769575/98247444-a4c89c00-1f99-11eb-983d-e17bb7ab8825.JPG)
