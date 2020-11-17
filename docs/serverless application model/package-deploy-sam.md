**Packaging and Deploying with SAM Template and CloudFormation**:

1. In the directory, where your **SAM Template** (_.yaml_) file exists, open CMD or Terminal and do the following commands:

    `aws cloudformation package --template-file <sam-template-filename>.yaml --output-template-file <output-filename-for-cloudformation>.yaml --s3-bucket <s3-bucket-name-to-upload-code>`

2. After running the above command, a new _.yaml_ file will be created in the directory as well as in the mentioned S3 Bucket.
3. We need to deploy the package created in S3. Run the below, in CMD:

    `aws cloudformation deploy --template-file <output-template-filename>.yaml --stack-name <stack-name> --capabilities CAPABILITY_IAM`

4. Below img shows some Resources created in **CloudFormation**, using the **SAM Template**

![samresources](https://user-images.githubusercontent.com/26769575/99354800-1cb59100-28cd-11eb-95c0-b6f229902438.JPG)

   _To Create a new S3 Bucket using CLI:_

    `aws s3 mb s3://<bucket-name>`