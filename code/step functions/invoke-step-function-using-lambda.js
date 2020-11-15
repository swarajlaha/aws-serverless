const AWS = require('aws-sdk');
const stepFunctions = new AWS.StepFunctions();

exports.handler = async (event) => {
    let params = {
        stateMachineArn: "arn:aws:states:XXXX:XXXX:stateMachine:Helloworld",
        input: JSON.stringify(event)
    }
    
    let data = await stepFunctions.startExecution(params).promise();
    console.log(data);
    return data;
};