/*
Lambda function code for 'lambda-random-message.md'.
This displays a random message.
*/

var messages = [
    "Hello World!",
    "Hello Serverless!",
    "It's a great day today!",
    "Yay, I'm learning something new today!",
    "On cloud nine!",
    "Over the moon!",
    "Shooting for the stars!",
    "On top of the World!",
    "World at my feet!",
    "Doing everything I love!"
];

exports.handler = (event, context, callback) => {
    let message = messages[Math.floor(Math.random()*10)];
    callback(null, message);
};