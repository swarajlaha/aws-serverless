/**
 * Copy file from S3 src to dest bucket.
 */

const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const s3 = new AWS.S3();

exports.handler = async (event) => {
    let params = {
        Bucket: process.env.DESTINATION_BUCKET,
        CopySource: encodeURI('/' + event.s3.bucket.name + '/' + event.s3.object.key),
        Key: event.s3.object.key
    };
    
    await s3.copyObject(params).promise();
    
    return {
        region: 'ap-south-1',
        bucket: process.env.DESTINATION_BUCKET,
        key: event.s3.object.key
    }
};