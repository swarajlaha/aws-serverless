**Creating AWS Cognito User Pools for API Gateway Authorization**

_API Gateway supports User Pools._
1. Go to **AWS Cognito -> Manage User Pools -> Create User Pool -> Provide Pool Name -> Step Through Settings-> Choose User Name for sign in -> Keep others to the simplest -> Add an App Client -> Create Pool**.

**Generating Auth Tokens with Cognito User Pools**

1. Google **cognito-idp cli**.
2. Look for **sign-up**
3. Create user using the CMD: `aws cognito-idp sign-up --client-id <client0id> --username <username> --password <password>`

![cupuser](https://user-images.githubusercontent.com/26769575/98961750-ed4d0000-252b-11eb-9bde-abb9aac74f06.JPG)

4. We now need to confirm the user.
5. Check for **admin-confirm-sign-up** in the **cognito-idp cli**.
6. In the CMD: `aws cognito-idp admin-confirm-sign-up --user-pool-id <user-pool-id> --username <username>`.
7. Now we'll initiate the authorization. In the CMD: 
    1. `aws cognito-idp admin-initiate-auth --generate-cli-skeleton`
    2. Copy the output of the above cmd to a JSON file and make the necessary changes.
    3. Now we'll use this file. In the CMD: `aws cognito-idp admin-initiate-auth --cli-input-json file://<file-name>`.
    4. You'll get various tokens, we need the _IdToken_.
    5. Paste the above token in the JWT website [https://jwt.io/](url).

![cup-user-confirm](https://user-images.githubusercontent.com/26769575/98964229-939a0500-252e-11eb-88d0-140f4a3d8e23.JPG)

