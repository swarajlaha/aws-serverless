**Model Request Body Validation**

1. Go to **API Gateway -> POST -> Method Request**.
2. In **Request Validator** choose **Validate Body**.
3. Open the **Request Body** and **Add Model** _CalculatorValidatorModel_ that we had created.
4. Go back and test the API.
5. Now. due to the Request Body Validator, unless we add both the entries as numbers, we'll get the below error.

![model-error](https://user-images.githubusercontent.com/26769575/98241316-c8d3af80-1f90-11eb-8539-3bd8561ceac0.JPG)
