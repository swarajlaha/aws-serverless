/**
 * Lambda function to delete a file from S3.
 */

const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const s3 = new AWS.S3();

exports.handler = async (event) => {
    let params = {
        Bucket: event.s3.bucket.name,
        Key: event.s3.object.key
    };
    
    await s3.deleteObject(params).promise();
    return true;
};