const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const encrypted = process.env['APP_CODE'];
let decrypted;

async function processEvent(event, context) {
    let log = event;
    
    log.lambdaFunction = context.functionName;
    log.lambdaVersion = context.functionVersion;
    
    log.appName = process.env.APP_NAME;
    log.appSecret = process.env.APP_CODE;
    log.appSecretDecrypted = decrypted;

    // one more comment 
    return log;
}

exports.handler = async (event, context) => {
    if (decrypted) {
        return processEvent(event, context);
    } else {
        // Decrypt code should run once and variables stored outside of the function
        // handler so that these are decrypted once per container
        const kms = new AWS.KMS();
        let data = await kms.decrypt({ CiphertextBlob: new Buffer(encrypted, 'base64') }).promise();
        decrypted = data.Plaintext.toString('ascii');
        return processEvent(event, context);
    }
};
