'use strict';

var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in wretched but not-so-bad Los Angeles is: ' + currentTime.toString(),
    });
};


