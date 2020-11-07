const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB();

/**
 * List tables in console.
 */
/*  dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); 
 */

/**
 * Describe tables in console.
 */
/* dynamodb.describeTable({
        TableName: "hands_on_notes"
    }, (err, data)=>{
        if(err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    }); */

/**
 * Create table.
 */
/* dynamodb.createTable({
    TableName: "table-created-using-sdk",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
}); 
*/

/**
 * Update table.
 */
/* dynamodb.updateTable({
    TableName: "table-created-using-sdk",
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 1
    }
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
}); 
*/

/**
 * Delete table.
 */
dynamodb.deleteTable({
    TableName: "table-created-using-sdk"
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});