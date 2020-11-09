**Creating the KMS Encryption Keys**

1. In the _eventLogger_ lambda function, we'll encrypt _APP SECRET_.
2. Create a **Custom KMS Key**, using IAM Roles.

![kms-custom-key](https://user-images.githubusercontent.com/26769575/98559407-94cbf780-22cc-11eb-8c3d-09203ef70e52.JPG)

4. Now, in the Lambda function, click on **Encrypt** and provide the newly created key.
5. The _APP SECRET_ env variable will be encrypted.

![encrypted](https://user-images.githubusercontent.com/26769575/98559759-060baa80-22cd-11eb-804f-b2b59ae1739b.JPG)
