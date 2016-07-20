'use strict'
require('dotenv').config()
var later = require('later')
var fs = require('fs')
var path = require('path')
var certFile = path.resolve(__dirname, 'ssl/client.crt')
var keyFile = path.resolve(__dirname, 'ssl/client.key')
var caFile = path.resolve(__dirname, 'ssl/ca.cert.pem')
var request = require('request')

// Heartbeat Schedule
var hbsched = later.parse.text('every ' + process.env.HBSCHD)
var options = {
  rejectUnauthorized: false,
  url: process.env.APIURL + '/UpiService/upi',
  cert: fs.readFileSync(certFile),
  key: fs.readFileSync(keyFile),
  passphrase: 'upci2lrs',
  ca: fs.readFileSync(caFile)
}

request.get(options)
