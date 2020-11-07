const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB();

/**
 * List tables in console.
 */
/* dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); */

/**
 * Describe tables in console.
 */
dynamodb.describeTable({
        TableName: "hands_on_notes"
    }, (err, data)=>{
        if(err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    });