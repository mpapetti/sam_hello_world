'use strict';

var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'Thee nasty time in expensive but not-so-bad Los Angeles is: ' + currentTime.toString(),
    });
};


