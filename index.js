'use strict';
require('dotenv').config();
var later = require('later');
var fs = require('fs')
  , path = require('path')
  , certFile = path.resolve(__dirname, 'ssl/client.crt')
  , keyFile = path.resolve(__dirname, 'ssl/client.key')
  , caFile = path.resolve(__dirname, 'ssl/ca.cert.pem')
  , request = require('request');

// Heartbeat Schedule
var hbsched = later.parse.text('every ' + process.env.HBSCHD);
var options = {
  rejectUnauthorized: false,
  url: process.env.APIURL + '/UpiService/upi',
  cert: fs.readFileSync(certFile),
  key: fs.readFileSync(keyFile),
  passphrase: 'upci2lrs',
  ca: fs.readFileSync(caFile)
}

request.get(options);

