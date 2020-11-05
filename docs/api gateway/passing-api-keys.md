**Passing API Keys with API Gateway Requests**

1. Open the **Resources** screen of our API.
2. Go to a Method and set **API Key Required** to _true_.
3. Deploy and test.
4. Test in Postman, without passing the API Key.

![forbidden](https://user-images.githubusercontent.com/26769575/98258894-6a65fb80-1fa7-11eb-9ab5-5d69e2b0c8e6.JPG)

5. In **Headers** add the API key.

![apikey-add](https://user-images.githubusercontent.com/26769575/98259191-cdf02900-1fa7-11eb-95af-c7371cd993a1.JPG)

6. Now **Save** and **Send**.

![success](https://user-images.githubusercontent.com/26769575/98259286-ee1fe800-1fa7-11eb-878a-f82c9e0d5a77.JPG)
