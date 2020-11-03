/*
Lambda handler to greet message dynamically.
 */

const moment = require('moment');
const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola",
    "pt": "Olá",
    "ur": "Assalamo aleikum",
	"it": "Ciao",
    "de": "Hallo" 
}

exports.handler = async (event) => {
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters || {};

    let message = `${greeting[lang] ? greeting[lang] : greeting['en'] } ${name}`;
    let response = {
        message: message,
        info: info,
        timestamp: moment().unix()
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}