'use strict';

exports.handler = function(event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello CIM 3`,
            event: event
        })
    };

    callback(null, response);
};
