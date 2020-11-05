**Body Mapping Templates using Models**

1. Open the POST method and go to **Integration Request**.
2. In the **Mapping Template**, we'll create a Model for the existing template and can use it multiple times.
3. Create a new Model, as below: 

![model2](https://user-images.githubusercontent.com/26769575/98242229-24eb0380-1f92-11eb-9546-e3c6aafffef3.JPG)

4. Now go back to **Resources -> Integratiion Request -> POST -> Mapping Templates**, here choose the newly created custom model. The below template will be generated and loaded.

![custom-model](https://user-images.githubusercontent.com/26769575/98243791-75fbf700-1f94-11eb-9487-f5c85281eb2b.JPG)

5. Do the following modifications and **Save**:
`#set($inputRoot = $input.path('$'))
{
  "operation" : "$input.params('operation')",
  "input" : {
    "operand1" : $inputRoot.num1,
    "operand2" : $inputRoot.num2
  }
}`
6. Now **Test**.