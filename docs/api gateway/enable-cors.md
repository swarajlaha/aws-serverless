**Add CORS**

1. In **Method Execution** -> **Method Response**

![add-header](https://user-images.githubusercontent.com/26769575/98108847-a5daca00-1ec2-11eb-8e10-86ca61f4bc52.JPG)

2. Go back to **Method Execution** -> **Integration Response**
3. Add **Mapping value** to **Response header: Access-Control-Allow-Origin** as: `'*'` and save.
4. In **Actions** -> **Enable CORS**.

![enable-cors](https://user-images.githubusercontent.com/26769575/98109855-47165000-1ec4-11eb-81fc-9f7c920339fb.JPG)

5. Now **Deploy API** and **Test** in [http://test-cors.org/](url).

