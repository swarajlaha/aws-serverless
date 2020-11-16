/**
 * Lambda funtion to write Image meta data to DynamoDB table.
 */

const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const documentClient = new AWS.DynamoDB.DocumentClient();

const processImageMeta = async (images) => {
    let original, thumbnail;
    let filesProcessed = images.map( async (image) => {
        for(let key in image) {
            switch (key) {
                case 'original':
                    original = `${image.original.region}|${image.original.bucket}|${image.original.key}`;
                    break;
                
                case 'resized':
                    thumbnail = `${image.thumbnail.region}|${image.thumbnail.bucket}|${image.thumbnail.key}`;
                    break;
                    
                default:
            }
        }
    });
    
    await Promise.all(filesProcessed);
    return {
        original: original,
        thumbnail: thumbnail
    }
}

exports.handler = async (event) => {
    let images = await processImageMeta(event.results.images);
    
    let params = {
        TableName: 'thumbnails',
        Item: {
            original: images.original,
            thumbnail: images.thumbnail,
            timestamp: new Date().getTime()
        }
    };
    
    await documentClient.put(params).promise();
    return true;
};