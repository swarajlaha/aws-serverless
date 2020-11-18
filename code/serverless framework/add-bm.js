'use strict';

module.exports.add = async (event, context) => {
    let {num1, num2} = event;
    return num1 + num2;
};
