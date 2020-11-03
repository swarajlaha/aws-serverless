**Deploy Lambda Function with a ZIP file**

1. Previously we created a file named _index.js_, locally in the VS Code ediotr, which conatins the Lambda handler. We need to upload the same to AWS Lambda.
2. Go to the folder which conatins the _index.js_, copy the file along with other associated files and zip them together.
3. Copy the path of the zipped folder, like _D:\Study\AWS\aws-serverless\code\lambda_.
4. Open the Lambda console and create a new function.
5. Create a function with the required input and give default execution role, that will be created by AWS.
6. In **Actions** select **Upload a .zip file**. In case the file to be uploaded is >10 MB, it is advisable to upload the file in S3 first and then refer it here in Lambda.
7. Upload the file from local and click **Save**.

![upload-zip](https://user-images.githubusercontent.com/26769575/97957251-ae52d800-1dd0-11eb-80bd-53ef8553c965.JPG)

8. The lambda function is uploaded.

![function-code](https://user-images.githubusercontent.com/26769575/97957350-f245dd00-1dd0-11eb-9b55-80db341ff138.JPG)

