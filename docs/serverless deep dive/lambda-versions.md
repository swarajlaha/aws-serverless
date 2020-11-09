**Lambda Versions**

1. Create a Lambda Function, with basic permissions.
2. Write the lambda code as in _code/serverless deep dive/lambdaVersion.js_, **Deploy** and **Test**.
3. When we explicitly do not create a lambda version, it creates a version named **LATEST**.

![lambda-version-1](https://user-images.githubusercontent.com/26769575/98504764-ce294680-227d-11eb-8891-966ae16aee32.JPG)

**Create a New Version**

1. From **Actions** dropdown, choose **Publish New Version** and give a version name.
2. Now we can't edit this version. Code and handler editing is only available for the $LATEST version. So go to the LATEST version.

![lambda-version-2](https://user-images.githubusercontent.com/26769575/98506526-b8b61b80-2281-11eb-86f9-0ccbf30069f9.JPG)
