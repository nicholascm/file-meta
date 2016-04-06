"use strict";
var express = require('express');
var path = require('path');
var multer = require('multer');
var app = new express();
var upload = multer();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '../client')));
app.get('/', function (req, res) {
    res.sendFile("index.html");
});
app.post('/formUpload', upload.single('image'), function (req, res) {
    res.json({
        "message": responseDialog(req.file.size, req.file.originalname) });
});
app.listen(app.get('port'), function () {
    console.log('app is running on port', app.get('port'));
});
function responseDialog(size, name) {
    return "This file is " + size + " bytes " + "and is called " + name + " on the user's device.";
}
