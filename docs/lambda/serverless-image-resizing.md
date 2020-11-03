**Serverless Image Resizing**

1. Create a Lambda function and give the required input and give _lambda s3 execution role_.
2. Attach the _lambda s3 execution role_ to the policy, _AmazonS3FullAccess_.
3. The lambda handler is written locally named.

**Creating Buckets in S3**
1. Open S3, create a source bucket.
2. Create another destination bucket for the resized images to be stored.
3. We've configure the source bucket such that it triggers a lambda function whenever a new object is added to it.
4. Go to **Properties**, look for **Events** and **Add notification**.
5. Give it a name and **Events** is **Put**, you may add _.jpg_ as the **Suffix** (Event will be fired only when a JPEG image is put in the bucket).
6. For **Send to** choose **Lambda Function** and select the respective lambda function.
7. **Save** the config.

**Deploying Lambda Function via AWS CLI**
8.  _REQUIRED: Installed AWS CLI_
9. Zip the lambda function containing folder/file.
10. In the AWS CLI- 

- Uploaad the file to S3: `aws s3 cp <zip-file-name> s3://<source-bucket-name>/<target-file-name>`

- Deploy the file uploaded in S3, to Lambda: `aws lambda update-function-code --function-name <function-name> --s3-bucket<bucket-name> --s3-key <name-of-zip-file>.zip --publish`