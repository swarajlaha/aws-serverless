/**
 * Lambda function to resize an image from S3 bucket.
 */

const im = require('imagemagick');
const fs = require('fs');
const os = require('os');
const uuidv4 = require('uuid/v4');
const {promisify} = require('util');
const AWS = require('aws-sdk');

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);

AWS.config.update({ region: 'ap-south-1' });
const s3 = new AWS.S3();

exports.handler = async (event) => {
    let bucket = event.s3.bucket.name;
    let filename = event.s3.object.key;

    // Get file from S3
    var params = {
        Bucket: bucket,
        Key: filename
    };
    let inputData = await s3.getObject(params).promise();

    // Resize the file
    let tempFile = os.tmpdir() + '/' + uuidv4() + '.jpg';
    let resizeArgs = {
        srcData: inputData.Body,
        dstPath: tempFile,
        width: process.env.IMAGE_WIDTH_PX
    };
    await resizeAsync(resizeArgs);

    // Read the resized file
    let resizedData = await readFileAsync(tempFile);

    // Upload the new file to s3
    let targetFilename = filename.substring(0, filename.lastIndexOf('.')) + '-small.jpg';
    var params = {
        Bucket: process.env.DESTINATION_BUCKET,
        Key: targetFilename,
        Body: new Buffer(resizedData),
        ContentType: 'image/jpeg'
    };

    await s3.putObject(params).promise();
    await unlinkAsync(tempFile);
    
    return {
        region: 'ap-south-1',
        bucket: process.env.DESTINATION_BUCKET,
        key: targetFilename
    }
}